import { useState } from 'react';
import Link from 'next/link';
import { getCookie } from '../../../actions/authActions';
import { makeStyles } from '@material-ui/core/styles';
import MUIDataTable from 'mui-datatables';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Snackbar from '@material-ui/core/Snackbar';
import { withRouter } from 'next/router';
import MuiAlert from '@material-ui/lab/Alert';
import CreateIcon from '@material-ui/icons/Create';
import Router from 'next/router';
import { IconButton } from '@material-ui/core';
import { removeMailer } from '../../../actions/mailerActions';
import { withSnackbar } from '../../HOC/Snackbar';

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

const ListMailer = ({ mailers, router, snackbarShowMessage }) => {
	const classes = useStyles();

	const token = getCookie('token');

	//Ajouter le delete et multiple delete

	const [loading, setLoading] = useState(false);

	const deleteMailer = (id) => {
		setLoading(true);
		removeMailer(id, token).then((data) => {
			console.log('data vaut', data);
			if (data.error) {
				setLoading(false);
				snackbarShowMessage(`${data.error}`);
			} else {
				setLoading(false);
				snackbarShowMessage(`${data.text}`, 'success');
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
			name: 'declencheur',
			label: 'Déclencheur',
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
					return value ? (
						<CheckBoxIcon />
					) : (
						<CheckBoxOutlineBlankIcon />
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
								href={`/admin/crud/mailer/${tableMeta.rowData[0]}`}>
								<a>
									<CreateIcon fontSize='large' />
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

			<MUIDataTable
				title={'Mailers'}
				data={mailers}
				columns={columns}
				options={options}
			/>
		</>
	);
};

export default withRouter(withSnackbar(ListMailer));
