import { Table } from 'reactstrap';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCookie } from '../../../actions/authActions';
import { Alert, Spinner } from 'reactstrap';

import {
	ListAllPartenaireCards,
	ListAllPartenaires,
	listePartenaireById,
	removePartenaire,
} from '../../../actions/partenairesActions';
import { withRouter } from 'next/router';

const ListPartenairesCards = ({ router }) => {
	const token = getCookie('token');

	const [categorie, setCategorie] = useState('');
	const [partenaireCards, setPartenaireCards] = useState([]);

	const [values, setvalues] = useState({
		loading: false,
		error: '',
		success: '',
		message: '',
	});

	const getImageById = () => {
		//récupérer l'image avec l'id
	};

	const recupCategorie = () => {
		listePartenaireById(router.query.id, token).then((result) => {
			console.log('result', result);
			if (result.error) {
				console.log(error);
			} else {
				setCategorie(result);
			}
		});
	};

	useEffect(() => {
		recupCategorie();
		listerLesPartenaireCards();
	}, []);

	const { loading, success, error, message } = values;

	const listerLesPartenaireCards = () => {
		ListAllPartenaireCards(router.query.id).then((data) => {
			console.log('liste des partenaires', data);
			if (data.error) {
				console.log(error);
			} else {
				setPartenaireCards(...partenaireCards, data);
			}
		});
	};

	// const deletePartenaire = (id) => {
	// 	setvalues({ ...values, loading: true });
	// 	console.log('id', id);
	// 	removePartenaire(id, token).then((data) => {
	// 		console.log('data vaut', data);
	// 		if (data.error) {
	// 			setvalues({
	// 				...values,
	// 				loading: false,
	// 				error: true,
	// 				success: false,
	// 			});
	// 		} else {
	// 			setvalues({
	// 				...values,
	// 				loading: false,
	// 				error: '',
	// 				success: true,
	// 				message: data.message,
	// 			});
	// 		}
	// 	});
	// };

	const deleteConfirm = (id) => {
		let answer = window.confirm(
			`Suppression du partenaire ${id}, êtes-vous sûr ?`
		);
		if (answer) {
			deletePartenaire(id);
		}
	};

	return (
		<>
			<h3>
				Liste des partenaires pour la catégorie{' '}
				<strong>{categorie.slug}</strong>
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
							<th>{partenaireCard.image}</th>
							<th>{partenaireCard.mail}</th>
							<th>{partenaireCard.tel}</th>
							<th>
								{partenaireCard.actif ? (
									<i
										class='fas fa-check-square'
										style={{ color: 'green' }}></i>
								) : (
									<i
										class='fas fa-times'
										style={{ color: 'red' }}></i>
								)}
							</th>

							<th>
								<Link
									href={`/admin/crud/divers/partenaire/${partenaireCard._id}`}>
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

export default withRouter(ListPartenairesCards);
