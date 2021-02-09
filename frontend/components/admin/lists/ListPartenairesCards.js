import { Table } from 'reactstrap';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCookie } from '../../../actions/authActions';
import { Alert, Spinner } from 'reactstrap';
import Router from 'next/router';
import { removePartenaireCard } from '../../../actions/partenairesActions';
import Image from 'next/image';
import { listPhotosBySection } from '../../../actions/giteActions';

const ListPartenairesCards = ({
	partenaireCards,
	categorie,
	partenaireId,
	photos,
}) => {
	const token = getCookie('token');

	const [values, setvalues] = useState({
		loading: false,
		error: '',
		success: false,
		message: '',
	});

	const { loading, success, error, message } = values;

	// const getAllImages = () => {
	// 	listPhotosBySection(categorie.slug).then((photos) => {
	// 		if (photos.error) {
	// 			console.log(photos.error);
	// 		} else {
	// 			setImages({ ...images, images: photos });
	// 		}
	// 	});
	// };
	// useEffect(() => {
	// 	getAllImages();
	// }, []);

	const photoInfos = (id) => {
		return photos.map(
			(photos) =>
				photos._id === id && (
					<Image
						// className='d-block w-100'
						src={photos.location}
						alt={photos.alt}
						width={200}
						height={150}
					/>
				)
		);
	};

	const deletePartenaireCard = (id) => {
		setvalues({ ...values, loading: true });
		removePartenaireCard(partenaireId, id, token).then((data) => {
			if (data.error) {
				setvalues({
					...values,
					loading: false,
					error: true,
					success: false,
				});
			} else {
				setvalues({
					...values,
					loading: false,
					error: '',
					success: true,
					message: data.message,
				});
				setTimeout(() => {
					Router.reload();
				}, 2000);
			}
		});
	};

	const deleteConfirm = (id) => {
		let answer = window.confirm(
			`Suppression du partenaire ${id}, êtes-vous sûr ?`
		);
		if (answer) {
			deletePartenaireCard(id);
		}
	};

	return (
		<>
			<h3>
				Liste des partenaires pour la catégorie{' '}
				<strong>{categorie.slug}</strong>,{' '}
				<small style={{ fontSize: '13px' }}>
					(pensez à ajouter des images dans la catégorie
					correspondante avant de créer un partenaire)
				</small>
			</h3>
			{loading && <Spinner />}
			{success && <Alert color='success'>{message}</Alert>}
			{error && <Alert color='danger'>Une erreur est survenue</Alert>}
			<Table>
				<thead>
					<tr>
						<th>#ID</th>
						<th>Titre</th>
						<th>Image</th>
						<th>mail</th>
						<th>tel</th>
						<th>Actif</th>
						<th colSpan='2'>Modif/Suppr</th>
					</tr>
				</thead>
				<tbody>
					{partenaireCards.map((partenaireCard, i) => (
						<tr className='mt-5' key={i}>
							<th>{partenaireCard._id}</th>
							<th>{partenaireCard.titre}</th>
							<th>{photoInfos(partenaireCard.image)}</th>
							<th>
								<a href={`mailto:${partenaireCard.mail}`}>
									{partenaireCard.mail}
								</a>
							</th>
							<th>{partenaireCard.tel}</th>
							<th>
								{partenaireCard.actif ? (
									<i
										className='fas fa-check-square'
										style={{ color: 'green' }}></i>
								) : (
									<i
										className='fas fa-times'
										style={{ color: 'red' }}></i>
								)}
							</th>

							<th>
								<Link
									href={`/admin/crud/divers/partenaire/[id]/card/[idCard]`}
									as={`/admin/crud/divers/partenaire/${partenaireId}/card/${partenaireCard._id}`}>
									<a>
										<i
											className='fas fa-pencil-ruler'
											style={{ color: 'orange' }}></i>
									</a>
								</Link>
							</th>
							<th>
								<i
									onClick={() =>
										deleteConfirm(partenaireCard._id)
									}
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
		</>
	);
};

export default ListPartenairesCards;
