import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCookie } from '../../../actions/authActions';
import { removeMessage } from '../../../actions/messageActions';
import { makeStyles } from '@material-ui/core/styles';
import MUIDataTable from 'mui-datatables';
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
import { IconButton } from '@material-ui/core';
import { removeMailer } from '../../../actions/mailerActions';

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

const ListMailer = ({ mailers, router }) => {
	const classes = useStyles();

	const token = getCookie('token');

	//Ajouter le delete et multiple delete

	const [values, setvalues] = useState({
		loading: false,
		error: '',
		success: '',
		message: '',
	});
	const [open, setOpen] = useState(false);

	const { loading, success, error, message } = values;

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setvalues({ ...values, success: false, error: false });
		setOpen(false);
	};

	const deleteMailer = (id) => {
		setvalues({ ...values, loading: true });
		removeMailer(id, token).then((data) => {
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
				`Suppression du mailer ${id}, êtes-vous sûr ?`
			);
			if (answer) {
				deleteMailer(id);
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
				display: false,
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
			name: 'description',
			label: 'Description',
			options: {
				filter: true,
				sort: false,
			},
		},
		{
			name: 'sujet',
			label: 'Sujet',
			options: {
				filter: true,
				sort: false,
			},
		},
		{
			name: 'declencheurDate',
			label: 'Date déclenchement',
			options: {
				filter: true,
				sort: false,
				customBodyRender: (value, tableMeta, updateValue) => {
					return <p>{value}</p>;
				},
			},
		},
		{
			name: 'actif',
			label: 'Actif',
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
			name: 'Modifier',
			options: {
				sort: false,
				filter: false,
				customBodyRender: (value, tableMeta, updateValue) => {
					// console.log(tableMeta.rowData);
					return (
						<IconButton>
							<Link
								href={`/admin/messages/${tableMeta.rowData[0]}`}>
								<a>
									<VisibilityIcon fontSize='large' />
								</a>
							</Link>
						</IconButton>
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
						<IconButton>
							<DeleteForeverIcon
								style={{
									fontSize: '30px',
									color: 'red',
								}}
								onClick={() =>
									deleteConfirm(tableMeta.rowData[0])
								}
							/>
						</IconButton>
					);
				},
			},
		},
	];

	const options = {
		filterType: 'checkbox',
		selectableRows: 'none',
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

			<MUIDataTable
				title={'Mailers'}
				data={mailers}
				columns={columns}
				options={options}
			/>
		</>
	);
};

export default withRouter(ListMailer);
