// import { Table } from 'reactstrap';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCookie } from '../../../actions/authActions';
import { Alert, Spinner } from 'reactstrap';
import { removeMessage } from '../../../actions/messageActions';
import MUIDataTable from 'mui-datatables';

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

	const columns = [
		{
			name: '_id',
			label: '#',
			options: {
				filter: true,
				sort: true,
			},
		},
		{
			name: 'nom',
			label: 'Nom',
			options: {
				filter: true,
				sort: false,
			},
		},
		{
			name: 'mail',
			label: 'Mail',
			options: {
				filter: true,
				sort: false,
			},
		},
		{
			name: 'tel',
			label: 'Tel',
			options: {
				filter: true,
				sort: false,
			},
		},
		{
			name: 'msg',
			label: 'Message',
			options: {
				filter: true,
				sort: false,
			},
		},
	];

	const options = {
		filterType: 'checkbox',
	};

	return (
		<>
			{loading && <Spinner />}
			{success && <Alert color='success'>{message}</Alert>}
			{error && <Alert color='danger'>Une erreur est survenue</Alert>}
			<p style={{ color: 'white' }}>Vous avez {newMessages} non lus !</p>
			<MUIDataTable
				title={'Messages'}
				data={messages}
				columns={columns}
				options={options}
			/>
		</>
	);
};

export default ListMessages;
