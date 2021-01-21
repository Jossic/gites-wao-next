import { useEffect, useState } from 'react';
import { updateGite } from '../../actions/giteActions';
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
		console.log('source: ', source);
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
		console.log('data.photos vaut =>', data.photos);
		console.log('data.gite vaut =>', data.gite);
		updateGite(data.photos, data.gite, token).then((result) => {
			if (result.error) {
				setValues({ ...values, error: result.error });
			} else {
				setValues({
					...values,
					success: 'Les photos ont bien été envoyées',
					loading: false,
				});
				setTimeout(() => {
					Router.push('/admin/gestionImages');
				}, 3000);
			}
		});
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='row'>
					{/* <div className='col-md-8'></div> */}
					<div className='col-md-4'>
						<div className='form-row align-items-center'>
							<div className='col-auto my-1'>
								<label
									className='mr-sm-2'
									htmlFor='inlineFormCustomSelect'>
									Gîte/Section concerné
								</label>
								<select
									name='gite'
									ref={register({ required: true })}
									className='custom-select mr-sm-2'
									id='inlineFormCustomSelect'>
									<option selected>Selection...</option>
									{gites.map((gite, i) => (
										<option key={i} value={gite.slug}>
											{gite.nom}
										</option>
									))}
									<option value='Autre'>Autres pages</option>
								</select>
							</div>
						</div>
						<fieldset className='border p-2 mt-3'>
							<legend className='w-auto'>Ajout d'images</legend>

							<div className='form-group'>
								<label className='btn btn-outline-info'>
									Photos
									<input
										onChange={handleImageChange}
										ref={register({ required: true })}
										name='photos'
										type='file'
										accept='image/*'
										multiple
										hidden
									/>
								</label>
							</div>
						</fieldset>
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
				<Alert color='success'>Les photos ont bien été envoyées</Alert>
			)}
			<div className='result'>{renderPhotos(selectedFiles)}</div>
		</>
	);
};

export default FormCreateGite;
