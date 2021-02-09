import { Table } from 'reactstrap';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCookie } from '../../../actions/authActions';
import { Alert, Spinner } from 'reactstrap';

import { removeMessage } from '../../../actions/messageActions';

const ListMessages = ({ messages, newMessages }) => {
	const token = getCookie('token');

	const [values, setvalues] = useState({
		loading: false,
		error: '',
		success: '',
		message: '',
	});

	const { loading, success, error, message } = values;

	const deleteMessage = (id) => {
		setvalues({ ...values, loading: true });
		removeMessage(id, token).then((data) => {
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
					message: data.text,
				});
			}
		});
	};

	const deleteConfirm = (id) => {
		let answer = window.confirm(
			`Suppression du message ${id}, êtes-vous sûr ?`
		);
		if (answer) {
			deleteMessage(id);
		}
	};

	return (
		<>
			{loading && <Spinner />}
			{success && <Alert color='success'>{message}</Alert>}
			{error && <Alert color='danger'>Une erreur est survenue</Alert>}
			<p>Vous avez {newMessages} non lus !</p>
			<Table
				style={{
					marginTop: '30px',
					borderCollapse: 'separate',
					borderSpacing: '0 10px',
				}}>
				<thead>
					<tr>
						<th>#ID</th>
						<th>Nom</th>
						<th>Mail</th>
						<th>Tel</th>
						<th>Message</th>
						<th colSpan='2'>Répondre/Suppr</th>
					</tr>
				</thead>
				<tbody>
					{messages.map((msge, i) => (
						<tr
							// className={
							// 	!msge.vu ? 'shadow mb-5 mt-5 rounded' : 'mb-5'
							// }

							style={
								!msge.vu
									? {
											backgroundColor: '#56e8ff',
											paddingBottom: '20px',
											boxShadow:
												'-1px 2px 5px 1px rgba(0,0,0,0.7), -1px 2px 20px rgba(255,255,255,0.6) inset',
									  }
									: {
											backgroundColor: '#adedff',
											paddingBottom: '20px',
									  }
							}
							key={i}>
							<th>{msge._id}</th>
							<th>{msge.nom}</th>
							<th>{msge.mail}</th>
							<th>{msge.tel}</th>
							<th>{msge.msg}</th>

							<th>
								<Link
									href={`/admin/message/repondre/${msge._id}`}>
									<a>
										<i
											className='fas fa-reply'
											style={{ color: 'blue' }}></i>
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

export default ListMessages;
