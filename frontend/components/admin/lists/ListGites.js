import { Table } from 'reactstrap';
import { deleteGite, listeDesGites } from '../../../actions/giteActions';
import { useEffect, useState } from 'react';
import { API } from '../../../config';
import { Alert, Spinner } from 'reactstrap';
import Link from 'next/link';
import { getCookie } from '../../../actions/authActions';

const ListGites = () => {
	const token = getCookie('token');
	const [gites, setGites] = useState([]);

	const [values, setvalues] = useState({
		loading: false,
		error: '',
		success: '',
		message: '',
	});
	const { loading, success, error, message } = values;

	const listerLesGites = () => {
		listeDesGites().then((data) => {
			if (data.error) {
				console.log(error);
			} else {
				setGites(...gites, data);
			}
		});
	};

	useEffect(() => {
		listerLesGites();
	}, [success]);

	const removeGite = (slug) => {
		setvalues({ ...values, loading: true });
		console.log('slug', slug);
		deleteGite(slug, token).then((data) => {
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
			}
		});
	};

	const deleteConfirm = (slug) => {
		let answer = window.confirm(
			`Vous êtes sur le point de supprimer le gîte ${slug}, êtes-vous sûr ?`
		);
		if (answer) {
			removeGite(slug);
		}
	};

	return (
		<>
			{loading && <Spinner />}
			{success && <Alert color='success'>{message}</Alert>}
			{error && <Alert color='danger'>Une erreur est survenue</Alert>}
			<Table>
				<thead>
					<tr>
						<th>#</th>
						<th>Nom</th>
						<th>Vignette</th>
						<th>Capacité</th>
						<th colSpan='2'>Actions</th>
					</tr>
				</thead>
				<tbody>
					{gites.map((gite) => (
						<tr
							style={{ backgroundColor: gite.couleur1 }}
							className='mt-5'>
							<th>{gite._id}</th>
							<th>{gite.nom}</th>
							<th>
								<img
									src={`${API}/gite/photo/${gite.slug}`}
									style={{ maxHeight: 'auto', width: '100%' }}
									className='img img-fluid'
									alt={gite.nom}
								/>
							</th>
							<th>{gite.capacite}</th>
							<th>
								<Link href={`/admin/crud/gite/${gite.slug}`}>
									<a>
										<i
											className='fas fa-pencil-ruler'
											style={{ color: 'orange' }}></i>
									</a>
								</Link>
							</th>
							<th>
								<i
									onClick={() => deleteConfirm(gite.slug)}
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

export default ListGites;
