// import { Table } from 'reactstrap';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCookie } from '../../../actions/authActions';
import { Alert, Spinner } from 'reactstrap';
import { removeMessage } from '../../../actions/messageActions';
import MUIDataTable from 'mui-datatables';
// import AddBoxIcon from '@material-ui/icons/AddBox';
import ReplyIcon from '@material-ui/icons/Reply';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const ListMessages = ({ messages, newMessages }) => {
	const token = getCookie('token');

	//Ajouter le delete et multiple delete

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
				sort: true,
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
				customBodyRender: (value, tableMeta, updateValue) => {
					return <p>{value.substring(0, 20) + '...'}</p>;
				},
			},
		},
		{
			name: 'vu',
			label: 'Non lu',
			options: {
				filter: true,
				customBodyRender: (value, tableMeta, updateValue) => {
					return (
						!value && (
							<FiberNewIcon
								fontSize='large'
								style={{ color: 'green' }}
							/>
						)
					);
				},
			},
		},
		{
			name: 'reponse',
			label: 'Répondu',
			options: {
				filter: true,
				customBodyRender: (value, tableMeta, updateValue) => {
					return value ? (
						<CheckBoxIcon />
					) : (
						<CheckBoxOutlineBlankIcon />
					);
				},
			},
		},
		{
			name: 'Voir/Répondre',
			options: {
				sort: false,
				filter: false,
				customBodyRender: (value, tableMeta, updateValue) => {
					return (
						<Link href={`/admin/messages/${tableMeta.rowData[0]}`}>
							<a>
								<ReplyIcon fontSize='large' />
							</a>
						</Link>
					);
				},
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
			{/* <AddBoxIcon fontSize='large' style={{ float: 'right' }} /> Ajouter */}
			<p style={{ color: 'white' }}>
				{newMessages > 0
					? `Vous avez ${newMessages} non lus !`
					: `Aucun message !`}
			</p>
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
