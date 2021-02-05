import { Table } from 'reactstrap';
import { listLiens, removeLien } from '../../../actions/pagesActions';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCookie } from '../../../actions/authActions';
import { Alert, Spinner } from 'reactstrap';
import Router from 'next/router';

const ListAlentours = () => {
	const token = getCookie('token');
	const [alentours, setAlentours] = useState([]);

	const [values, setvalues] = useState({
		loading: false,
		error: '',
		success: '',
		message: '',
	});

	const { loading, success, error, message } = values;

	const listerLesLiens = () => {
		listLiens().then((data) => {
			if (data.error) {
				console.log(error);
			} else {
				setAlentours(...alentours, data);
			}
		});
	};

	useEffect(() => {
		listerLesLiens();
	}, [success]);

	const deleteLien = (id) => {
		setvalues({ ...values, loading: true });
		console.log('id', id);
		removeLien(id, token).then((data) => {
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
			`Cette opération est irréversible, Etes-vous sur de vouloir supprimer la question avec l'id ${id} ?`
		);
		if (answer) {
			deleteLien(id);
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
						<th>Id</th>
						<th>Titre</th>
						<th>Lien</th>
						<th>Catégorie</th>
						<th>Actif</th>

						<th colSpan='2'>Actions</th>
					</tr>
				</thead>
				<tbody>
					{alentours.map((alentour) => (
						<tr className='mt-5'>
							<th>{alentour._id}</th>
							<th>{alentour.titre}</th>
							<th>{alentour.lien}</th>
							<th>{alentour.categorie}</th>
							<th>
								{alentour.actif ? (
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
									href={`/admin/crud/divers/alentours/${alentour._id}`}>
									<a>
										<i
											className='fas fa-pencil-ruler'
											style={{
												color: 'orange',
											}}></i>
									</a>
								</Link>
							</th>
							<th>
								<i
									onClick={() => deleteConfirm(alentour._id)}
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

export default ListAlentours;
