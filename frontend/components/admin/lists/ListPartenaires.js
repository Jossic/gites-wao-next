import { Table } from 'reactstrap';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCookie } from '../../../actions/authActions';
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
			console.log('data partenaire vaut =>', data);
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
			console.log('Suppression');
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
						<th>Partenaire</th>
						<th>Présentation</th>
						<th>Actif</th>
						<th colSpan='2'>Actions</th>
					</tr>
				</thead>
				<tbody>
					{console.log(partenaires)}
					{partenaires.length === 0 ? (
						<h3>Pas encore de partenaires, en créer un ?</h3>
					) : (
						partenaires.map((partenaire, i) => {
							<tr className='mt-5'>
								<th></th>
								<th></th>
								<th></th>
								<th></th>
								<th>
									<Link
										href={`/admin/gestionDivers/alentours`}>
										<a>
											<i
												className='fas fa-pencil-ruler'
												style={{ color: 'orange' }}></i>
										</a>
									</Link>
								</th>
								<th>
									<i
										onClick={() => deleteConfirm('')}
										className='fas fa-trash-alt'
										style={{
											color: 'red',
											cursor: 'pointer',
										}}></i>
								</th>
							</tr>;
						})
					)}
				</tbody>
			</Table>
		</>
	);
};

export default ListPartenaires;
