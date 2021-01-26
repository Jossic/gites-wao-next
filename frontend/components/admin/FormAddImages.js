import { useEffect, useState } from 'react';
import { uploadPhoto } from '../../actions/uploadActions';
import { getCookie } from '../../actions/authActions';

import { Spinner, Alert } from 'reactstrap';

const FormCreateGite = () => {
	const [selectedFiles, setSelectedFiles] = useState([]);
	const token = getCookie('token');

	const [values, setValues] = useState({
		success: '',
		loading: false,
		error: '',
		formData: '',
	});

	const { loading, success, error, formData } = values;

	useEffect(() => {
		setValues({ ...values, formData: new FormData() });
	}, []);

	const handleImageChange = (e) => {
		for (const file of e.target.files) {
			formData.append('photos', file);
		}

		for (const [key, value] of formData) {
			console.log(`${key}: ${value}`);
		}

		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) =>
				URL.createObjectURL(file)
			);

			setSelectedFiles((prevImages) => prevImages.concat(filesArray));
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) // avoid memory leak
			);
		}
	};

	const renderPhotos = (source) => {
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

	const addPhoto = (e) => {
		e.preventDefault();
		setValues({ ...values, loading: true });

		uploadPhoto(formData, token).then((data) => {
			console.log('data vaut =>', data);
			if (data.error) {
				console.log('une grosse erreur');
				setValues({ ...values, error: data.error });
			} else {
				setValues({
					...values,
					success: true,
					loading: false,
				});
				// setTimeout(() => {
				// 	Router.push('/admin/gestionImages');
				// }, 3000);
			}
		});
	};

	return (
		<>
			<form onSubmit={addPhoto}>
				<div className='row'>
					{/* <div className='col-md-8'></div> */}
					<div className='col-md-3'>
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
												name='photos'
												type='file'
												accept='image/*'
												multiple
												hidden
											/>
										</label>
									</div>
								</fieldset>
								{/* <fieldset className='border p-2 mt-3'>
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
										className='custom-select mr-sm-2'
										onChange={(e) =>
											setPage(e.target.value)
										}
										id='inlineFormCustomSelect'>
										<option defaultValue>
											Selection...
										</option>
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
										onChange={(e) =>
											setSection(e.target.value)
										}
										className='custom-select mr-sm-2'
										id='inlineFormCustomSelect'>
										<option defaultValue>
											Selection...
										</option>
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
											onChange={(e) =>
												setNom(e.target.value)
											}
											type='text'
											name='nom'
											value={nom}
										/>
									</div>
									<div className='form-group'>
										<label className='text-muted'>
											Texte alternatif
										</label>
										<input
											className='form-control'
											onChange={(e) =>
												setAlt(e.target.value)
											}
											type='text'
											name='alt'
											value={alt}
										/>
									</div>
								</fieldset> */}
								<div>
									<button
										type='submit'
										className='btn btn-info mt-3'>
										Ajouter les images
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='result col-md-9'>
						{renderPhotos(selectedFiles)}
						{/* 
						<p>Nom de la photo</p>
						<p>Texte alternatif</p>
						<p>Concerne la page</p>
						<p>Concerne la section</p> */}
					</div>
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
