import { useEffect, useState } from 'react';
import { uploadPhoto, uploadPhotoData } from '../../actions/uploadActions';
import { getCookie } from '../../actions/authActions';
import { useForm } from 'react-hook-form';
import { listGitesNoms } from '../../actions/giteActions';
import { Spinner, Alert } from 'reactstrap';

const FormCreateGite = () => {
	const [selectedFiles, setSelectedFiles] = useState([]);

	const handleImageChange = (e) => {
		// console.log(e.target.files[])
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) =>
				URL.createObjectURL(file)
			);

			// console.log("filesArray: ", filesArray);

			setSelectedFiles((prevImages) => prevImages.concat(filesArray));
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) // avoid memory leak
			);
		}
	};

	const renderPhotos = (source) => {
		// console.log('source: ', source);
		return source.map((photo) => {
			return (
				<img
					src={photo}
					alt=''
					key={photo}
					width={320}
					height={180}
					className='img-thumbnail'
				/>
			);
		});
	};

	const { register, handleSubmit, formState } = useForm();
	const { isSubmitting } = formState;

	const [values, setValues] = useState({
		success: '',
		loading: false,
		error: '',
	});

	const { loading, success, error } = values;
	const [gites, setGites] = useState([]);

	const listDesGites = () => {
		listGitesNoms().then((data) => {
			if (data.error) {
				console.log(error);
			} else {
				setGites(...gites, data);
			}
		});
	};

	useEffect(() => {
		listDesGites();
	}, []);

	const token = getCookie('token');

	const onSubmit = (data) => {
		setValues({ ...values, loading: true });
		let formDataImage = new FormData();
		let formDataImageInfo = new FormData();
		// formData.append('photo', data.photo[0]);
		formDataImageInfo.append('alt', data.alt);
		formDataImageInfo.append('nom', data.nom);
		formDataImageInfo.append('page', data.page);
		formDataImageInfo.append('section', data.section);
		formDataImage.append('photo', data.photo[0]);

		uploadPhotoData(formDataImageInfo, token).then((result) => {
			if (result.error) {
				setValues({ ...values, error: result.error });
			} else {
				setValues({
					...values,
					success: 'Les informations ont bien été envoyées',
				});
			}
		});
		uploadPhoto(formDataImage, token).then((result2) => {
			if (result2.error) {
				setValues({ ...values, error: result2.error });
			}
			setValues({
				...values,
				success: 'La photo a bien été envoyée',
				loading: false,
			});
			setTimeout(() => {
				Router.push('/admin/gestionImages');
			}, 3000);
		});
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='row'>
					{/* <div className='col-md-8'></div> */}
					<div className='col-md-6'>
						<div className='form-row align-items-center'>
							<div className='col-auto my-1'>
								<fieldset className='border p-2 mt-3'>
									<legend className='w-auto'>
										Ajout d'image
									</legend>

									<div className='form-group'>
										<label className='btn btn-outline-info'>
											Photo
											<input
												onChange={handleImageChange}
												ref={register({
													required: true,
												})}
												name='photo'
												type='file'
												accept='image/*'
												hidden
											/>
										</label>
									</div>
								</fieldset>
								<fieldset className='border p-2 mt-3'>
									<legend className='w-auto'>
										Concerne la page et section
									</legend>
									<label
										className='mr-sm-2 pt-2'
										htmlFor='inlineFormCustomSelect'>
										Page associée
									</label>
									<select
										name='page'
										ref={register({ required: true })}
										className='custom-select mr-sm-2'
										id='inlineFormCustomSelect'>
										<option selected>Selection...</option>
										{gites.map((gite, i) => (
											<option key={i} value={gite.slug}>
												{gite.nom}
											</option>
										))}
										<option value='Autre'>
											Autres pages
										</option>
									</select>
									<label
										className='mr-sm-2 pt-2'
										htmlFor='inlineFormCustomSelect'>
										Section associée
									</label>
									<select
										name='section'
										ref={register({ required: true })}
										className='custom-select mr-sm-2'
										id='inlineFormCustomSelect'>
										<option selected>Selection...</option>
										<option value='Autre'>
											Autres sections
										</option>
										<option value='presentation'>
											Présentation
										</option>
										<option value='piscine'>Piscine</option>
										<option value='interieur'>
											Intérieur
										</option>
									</select>
								</fieldset>
								<fieldset className='border p-2 mt-3'>
									<legend className='w-auto'>
										Infos de l'image
									</legend>
									<div className='form-group'>
										<label className='text-muted'>
											Nom de l'image
										</label>
										<input
											className='form-control'
											ref={register}
											type='text'
											name='nom'
										/>
									</div>
									<div className='form-group'>
										<label className='text-muted'>
											Texte alternatif
										</label>
										<input
											className='form-control'
											ref={register}
											type='text'
											name='alt'
										/>
									</div>
								</fieldset>
							</div>
						</div>
					</div>
					<div className='result col-md-6'>
						{renderPhotos(selectedFiles)}
						{/* 
						<p>Nom de la photo</p>
						<p>Texte alternatif</p>
						<p>Concerne la page</p>
						<p>Concerne la section</p> */}
					</div>
				</div>
				<div>
					<button
						type='submit'
						disabled={isSubmitting}
						className='btn btn-info mt-3'>
						Ajouter ces images
					</button>
				</div>
			</form>
			{loading && <Spinner color='dark' />}
			{success && (
				<Alert color='success'>La photo a bien été envoyée</Alert>
			)}
		</>
	);
};

export default FormCreateGite;
