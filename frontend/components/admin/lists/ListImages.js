import { Table, Button, Spinner, Alert } from 'reactstrap';
import {
	listeDesImages,
	listGitesNoms,
	saveImageData,
} from '../../../actions/giteActions';
import Select from 'react-select';

import { useEffect, useState } from 'react';
import { API } from '../../../config';
import Link from 'next/link';
import { useFieldArray, useForm } from 'react-hook-form';
import { getCookie } from '../../../actions/authActions';
import { ListAllPartenairesNoms } from '../../../actions/partenairesActions';

const ListImages = () => {
	const [photos, setPhotos] = useState([]);
	const token = getCookie('token');
	const [partenaires, setPartenaires] = useState([]);
	const { register, handleSubmit, control, errors } = useForm();
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'items',
	});

	const [values, setValues] = useState({
		nom: '',
		alt: '',
		titreCarousel: '',
		texteCarousel: '',
		page: '',
		section: '',
		success: '',
		loading: false,
		error: '',
	});
	const { success, loading, error } = values;

	const [gites, setGites] = useState([]);

	const listDesPartenaires = () => {
		ListAllPartenairesNoms().then((data) => {
			if (data.error) {
				console.log(error);
			} else {
				setPartenaires(...partenaires, data);
			}
		});
	};

	const listDesGites = () => {
		listGitesNoms().then((data) => {
			if (data.error) {
				console.log(error);
			} else {
				setGites(...gites, data);
			}
		});
	};

	const listerLesImages = () => {
		listeDesImages(token).then((data) => {
			if (data.error) {
				console.log(error);
			} else {
				setPhotos(...photos, data);
			}
		});
	};

	useEffect(() => {
		listDesGites();
		listerLesImages();
		listDesPartenaires();
	}, []);

	const deleteConfirm = (slug) => {
		let answer = window.confirm(
			'Cette opération est irréversible, Etes-vous sur de vouloir supprimer cet article ?'
		);
		if (answer) {
			// deleteGite(slug);
			console.log('Suppression');
		}
	};
	const onSubmit = (data) => {
		setValues({ ...values, loading: true });
		console.log('data vaut =>', data);

		saveImageData(data, token).then((result) => {
			console.log('result vaut =>', result);
			if (result.error) {
				setValues({ ...values, error: result.error });
			} else {
				setValues({
					...values,
					nom: '',
					alt: '',
					titreCarousel: '',
					texteCarousel: '',
					page: '',
					section: '',
					success: true,
					loading: false,
				});
				// setTimeout(() => {
				// 	Router.push('/admin/gestionDivers/FAQ');
				// }, 2000);
			}
		});
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Table>
					<thead>
						<tr>
							<th>Nom</th>
							<th>Photo</th>
							<th>Texte alternatif</th>
							<th>Titre Carousel</th>
							<th>Texte Carousel</th>
							<th>Page concernée</th>
							<th>Section concerné</th>
							<th colSpan='2'>Actions</th>
						</tr>
					</thead>
					<tbody>
						{photos.map((photo, index) => (
							<tr key={index} className='mt-5'>
								<th>
									<input
										className='form-control'
										type='text'
										name={`items[${index}].nom`}
										defaultValue={photo.nom}
										ref={register({ required: true })}
									/>
								</th>
								<th>
									<img
										src={photo.location}
										style={{
											maxHeight: 'auto',
											width: '80px',
										}}
										className='img img-fluid'
										alt={photo.name}
									/>
								</th>
								<th>
									<input
										className='form-control'
										type='text'
										name={`items[${index}].alt`}
										defaultValue={photo.alt}
										ref={register({ required: true })}
									/>
								</th>
								<th>
									<input
										className='form-control'
										type='text'
										name={`items[${index}].titreCarousel`}
										defaultValue={photo.titreCarousel}
										ref={register({ required: true })}
									/>
								</th>
								<th>
									<input
										className='form-control'
										type='text'
										name={`items[${index}].texteCarousel`}
										defaultValue={photo.texteCarousel}
										ref={register({ required: true })}
									/>
								</th>
								<th>
									<select
										ref={register({ required: true })}
										name={`items[${index}].page`}
										className='custom-select mr-sm-2'>
										<option>Selection...</option>
										{gites.map((gite, i) => (
											<option
												key={i}
												value={gite.slug}
												selected={
													gite.slug ===
														photo.pageAssociee &&
													'selected'
												}>
												{gite.nom}
											</option>
										))}
										<option
											value='Autre'
											selected={
												photo.pageAssociee ===
													'Autre' && 'selected'
											}>
											Autres pages
										</option>
									</select>
								</th>
								<th>
									<select
										ref={register({ required: true })}
										name={`items[${index}].section`}
										className='custom-select mr-sm-2'>
										<option>Selection...</option>

										<optgroup label='Gites'>
											<option
												value='exterieur'
												selected={
													photo.sectionAssociee ===
														'exterieur' &&
													'selected'
												}>
												Extérieur
											</option>
											<option
												value='piscine'
												selected={
													photo.sectionAssociee ===
														'piscine' && 'selected'
												}>
												Piscine
											</option>
											<option
												value='interieur'
												selected={
													photo.sectionAssociee ===
														'interieur' &&
													'selected'
												}>
												Intérieur
											</option>
										</optgroup>
										<optgroup label='Divers'>
											<option
												value='Autre'
												selected={
													photo.sectionAssociee ===
														'Autre' && 'selected'
												}>
												Autres sections
											</option>
											<option
												value='avatar'
												selected={
													photo.sectionAssociee ===
														'avatar' && 'selected'
												}>
												Avatar
											</option>
											<option
												value='vignettes'
												selected={
													photo.sectionAssociee ===
														'vignettes' &&
													'selected'
												}>
												Vignettes
											</option>
											<option
												value='alentours'
												selected={
													photo.sectionAssociee ===
														'alentours' &&
													'selected'
												}>
												Alentours
											</option>
										</optgroup>
										<optgroup label='Partenaires'>
											{partenaires.map((partenaire) => (
												<option
													value={partenaire.slug}
													selected={
														photo.sectionAssociee ===
															partenaire.slug &&
														'selected'
													}>
													{partenaire.nom}
												</option>
											))}
										</optgroup>
									</select>
								</th>
								<th>
									<Link href={`/admin/crud/gite/${photo}`}>
										<a>
											<i
												className='fas fa-pencil-ruler'
												style={{ color: 'orange' }}></i>
										</a>
									</Link>
								</th>
								<th>
									<i
										onClick={() => deleteConfirm(photo)}
										className='fas fa-trash-alt'
										style={{
											color: 'red',
											cursor: 'pointer',
										}}></i>
								</th>
							</tr>
						))}
					</tbody>
				</Table>
				{success && (
					<Alert color='success'>
						La/Les image(s) ont bien été modifiée(s)
					</Alert>
				)}
				{loading && <Spinner />}
				{error && <Alert color='danger'>{error}</Alert>}
				<Button color='success'>Valider ces infos</Button>
			</form>
		</>
	);
};

export default ListImages;
