// import { Table } from 'reactstrap';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCookie } from '../../../actions/authActions';
import { removeMessage } from '../../../actions/messageActions';
import { makeStyles } from '@material-ui/core/styles';
import MUIDataTable from 'mui-datatables';
// import AddBoxIcon from '@material-ui/icons/AddBox';
import CircularProgress from '@material-ui/core/CircularProgress';
import ReplyIcon from '@material-ui/icons/Reply';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Snackbar from '@material-ui/core/Snackbar';
import { withRouter } from 'next/router';
import MuiAlert from '@material-ui/lab/Alert';
import Router from 'next/router';

function Alert(props) {
	return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
}));

const ListMessages = ({ messages, newMessages, router }) => {
	const classes = useStyles();

	const token = getCookie('token');

	//Ajouter le delete et multiple delete

	const [values, setvalues] = useState({
		open: false,
		loading: false,
		error: '',
		success: '',
		message: '',
	});

	const { loading, success, error, message } = values;

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setValues({ ...values, open: false });
	};

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
					open: true,
					loading: false,
					error: '',
					success: true,
					message: data.text,
				});
				setTimeout(() => {
					router.reload();
				}, 3000);
			}
		});
	};

	const deleteConfirm = (id) => {
		if (typeof window !== 'undefined') {
			let answer = window.confirm(
				`Suppression du message ${id}, êtes-vous sûr ?`
			);
			if (answer) {
				deleteMessage(id);
			}
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
			name: 'repondu',
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
					// console.log(tableMeta.rowData);
					return !tableMeta.rowData[6] ? (
						<Link href={`/admin/messages/${tableMeta.rowData[0]}`}>
							<a>
								<ReplyIcon fontSize='large' />
							</a>
						</Link>
					) : (
						<Link href={`/admin/messages/${tableMeta.rowData[0]}`}>
							<a>
								<VisibilityIcon fontSize='large' />
							</a>
						</Link>
					);
				},
			},
		},
		{
			name: 'Suppr',
			options: {
				customBodyRender: (value, tableMeta, updateValue) => {
					// console.log(tableMeta.rowData);
					return (
						<DeleteForeverIcon
							style={{
								cursor: 'pointer',
								fontSize: '30px',
								color: 'red',
							}}
							onClick={() => deleteConfirm(tableMeta.rowData[0])}
						/>
					);
				},
			},
		},
	];

	const options = {
		filterType: 'checkbox',
		selectableRows: false,
	};

	return (
		<>
			{loading && <CircularProgress />}
			{success && (
				<Snackbar
					open={open}
					autoHideDuration={6000}
					onClose={handleClose}>
					<Alert onClose={handleClose} severity='success'>
						{message}
					</Alert>
				</Snackbar>
			)}
			{error && (
				<Snackbar
					open={open}
					autoHideDuration={6000}
					onClose={handleClose}>
					<Alert onClose={handleClose} severity='error'>
						{error}
					</Alert>
				</Snackbar>
			)}
			<p style={{ color: 'white' }}>
				{newMessages > 0
					? `Vous avez ${newMessages} non lus !`
					: `Aucun nouveau message !`}
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

export default withRouter(ListMessages);
