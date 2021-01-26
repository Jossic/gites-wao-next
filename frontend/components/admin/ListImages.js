import { Table, Button } from 'reactstrap';
import { listeDesImages, listGitesNoms } from '../../actions/giteActions';
import { useEffect, useState } from 'react';
import { API } from '../../config';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { getCookie } from '../../actions/authActions';

const ListImages = () => {
	const [photos, setPhotos] = useState([]);
	const token = getCookie('token');
	const { register, handleSubmit, watch, errors } = useForm();

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
	const onSubmit = (data) => console.log(data);

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Table>
					<thead>
						<tr>
							<th>Nom</th>
							<th>Photo</th>
							<th>Texte alternatif</th>
							<th>Page concernée</th>
							<th>Section concerné</th>
							<th colSpan='2'>Actions</th>
						</tr>
					</thead>
					<tbody>
						{photos.map((photo, i) => (
							<tr key={i} className='mt-5'>
								<th>{photo.nom}</th>
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
										name='alt'
										value={photo.alt}
										ref={register({ required: true })}
									/>
								</th>
								<th>
									<select
										ref={register({ required: true })}
										name='page'
										className='custom-select mr-sm-2'
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
								</th>
								<th>
									<select
										ref={register({ required: true })}
										name='section'
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
										<option value='avatar'>Avatar</option>
										<option value='avatar'>
											Vignettes
										</option>
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
				<Button color='success'>Valider ces infos</Button>
			</form>
		</>
	);
};

export default ListImages;
