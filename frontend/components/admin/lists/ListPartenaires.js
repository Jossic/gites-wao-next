import { Table } from 'reactstrap';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCookie } from '../../../actions/authActions';
import { Alert, Spinner } from 'reactstrap';
import {
	ListAllPartenaires,
	removePartenaire,
} from '../../../actions/partenairesActions';

const ListPartenaires = () => {
	const token = getCookie('token');

	const [partenaires, setPartenaire] = useState([]);

	const [values, setvalues] = useState({
		loading: false,
		error: '',
		success: '',
		message: '',
	});

	const { loading, success, error, message } = values;

	const listerLesPartenaires = () => {
		ListAllPartenaires().then((data) => {
			if (data.error) {
				console.log(error);
			} else {
				setPartenaire(...partenaires, data);
			}
		});
	};

	useEffect(() => {
		listerLesPartenaires();
	}, [success]);

	const deletePartenaire = (id) => {
		setvalues({ ...values, loading: true });
		console.log('id', id);
		removePartenaire(id, token).then((data) => {
			console.log('data vaut', data);
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
			{loading && <Spinner />}
			{success && <Alert color='success'>{message}</Alert>}
			{error && <Alert color='danger'>Une erreur est survenue</Alert>}
			<Table>
				<thead>
					<tr>
						<th>#ID</th>
						<th>Catégorie/sous-menu</th>
						<th>Présentation</th>
						<th>Actif</th>
						<th>Gérer</th>
						<th colSpan='2'>Modif/Suppr</th>
					</tr>
				</thead>
				<tbody>
					{partenaires.map((partenaire, i) => (
						<tr className='mt-5' key={i}>
							<th>{partenaire._id}</th>
							<th>{partenaire.nom}</th>
							<th>{partenaire.presPartenaire}</th>
							<th>
								{partenaire.actif ? (
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
									href={`/admin/gestionDivers/partenaires/manage/${partenaire._id}`}>
									<a>
										<i
											className='fas fa-tasks'
											style={{ color: 'blue' }}></i>
									</a>
								</Link>
							</th>
							<th>
								<Link
									href={`/admin/crud/divers/partenaire/${partenaire._id}`}>
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
										deleteConfirm(partenaire._id)
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

export default ListPartenaires;
