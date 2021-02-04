import { Table } from 'reactstrap';
import { listeDesQR, removeQR } from '../../../actions/giteActions';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCookie } from '../../../actions/authActions';
import { Alert, Spinner } from 'reactstrap';
import Router from 'next/router';

const ListAlentours = () => {
	const [QRs, setQRs] = useState([]);

	const [values, setvalues] = useState({
		loading: false,
		error: '',
		success: '',
		message: '',
	});

	const { loading, success, error, message } = values;

	const token = getCookie('token');

	const listerLesQR = () => {
		listeDesQR().then((data) => {
			if (data.error) {
				console.log(error);
			} else {
				setQRs(...QRs, data);
			}
		});
	};

	useEffect(() => {
		listerLesQR();
	}, [success]);

	const deleteQR = (id) => {
		setvalues({ ...values, loading: true });
		console.log('id', id);
		removeQR(id, token).then((data) => {
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
			deleteQR(id);
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

						<th colSpan='2'>Actions</th>
					</tr>
				</thead>
				<tbody>
					{QRs.map((QR) => (
						<tr className='mt-5'>
							<th>{QR._id}</th>
							<th>{QR.question}</th>
							<th>{QR.reponse}</th>
							<th>
								<Link href={`/admin/crud/divers/qr/${QR._id}`}>
									<a>
										<i
											className='fas fa-pencil-ruler'
											style={{ color: 'orange' }}></i>
									</a>
								</Link>
							</th>
							<th>
								<i
									onClick={() => deleteConfirm(QR._id)}
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
