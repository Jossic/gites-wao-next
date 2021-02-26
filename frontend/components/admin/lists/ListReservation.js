import { useState } from 'react';
import Link from 'next/link';
import { getCookie } from '../../../actions/authActions';
import { makeStyles } from '@material-ui/core/styles';
import MUIDataTable from 'mui-datatables';
import CircularProgress from '@material-ui/core/CircularProgress';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Snackbar from '@material-ui/core/Snackbar';
import { withRouter } from 'next/router';
import MuiAlert from '@material-ui/lab/Alert';
import Router from 'next/router';
import { IconButton } from '@material-ui/core';
import { removeReservation } from '../../../actions/reservationActions';
import GiteNom from '../../../components/admin/GiteNom';
import ClientNom from '../../../components/admin/ClientNom';
import AfficheDate from '../AfficheDate';

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
	nouveau: {
		boxShadow:
			'-1px 2px 5px 1px rgba(0, 0, 0, 0.7), -1px 2px 25px rgba(255, 255, 255, 0.8) inset',
	},
}));

const ListReservation = ({ reservations, newReservation, gites, router }) => {
	const classes = useStyles();

	const token = getCookie('token');

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

	const deleteReservation = (id) => {
		setvalues({ ...values, loading: true });
		removeReservation(id, token).then((data) => {
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
					message: data.message,
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
				`Suppression de la réservation ${id}, êtes-vous sûr ?`
			);
			if (answer) {
				deleteReservation(id);
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
			name: 'client',
			label: 'Client',
			options: {
				filter: true, // Voir pour ajouter un custom filter sur le nom du client
				sort: true, // Voir pour ajouter un custom sort sur le nom du client
				customBodyRender: (value, tableMeta, updateValue) => {
					return <ClientNom value={value} />;
				},
			},
		},
		{
			name: 'gite',
			label: 'Gite',
			options: {
				filter: true, // Voir pour ajouter un custom filter sur le nom du gîte
				sort: true, // Voir pour ajouter un custom sort sur le nom du gîte
				customBodyRender: (value, tableMeta, updateValue) => {
					return <GiteNom value={value} />;
				},
			},
		},
		{
			name: 'status',
			label: 'Status',
			options: {
				filter: true,
				sort: true,
			},
		},
		{
			name: 'dateRes',
			label: 'Date de réservation',
			options: {
				filter: true,
				sort: true,
				sortOrder: 'desc',
			},
		},
		{
			name: 'dateArrivee',
			label: "Date d'arrivee",
			options: {
				filter: true,
				sort: true,
				customBodyRender: (value, tableMeta, updateValue) => {
					// console.log(value);
					// console.log(tableMeta.rowData[5]);
					return (
						<>
							<AfficheDate value={value} />
							<AfficheDate value={tableMeta.rowData[5]} />
						</>
					);
				},
			},
		},
		{
			name: 'dateDepart',
			label: 'Date de départ',

			options: {
				filter: true,
				sort: true,
				display: 'excluded',
			},
		},
		{
			name: 'Consulter',
			options: {
				sort: false,
				filter: false,
				customBodyRender: (value, tableMeta, updateValue) => {
					// console.log(tableMeta.rowData);
					return (
						<IconButton>
							<Link
								href={`/admin/reservation/${tableMeta.rowData[0]}`}>
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
		setRowProps: (row) => {
			//ajouter style selon le status
			for (const gite of gites) {
				if (row[2].props.value === gite._id) {
					for (const reservation of reservations) {
						if (reservation.status == 'Nouvelle réservation') {
							return {
								className: classes.nouveau,
								style: {
									background: gite.couleur1,
								},
							};
						} else {
							return {
								style: {
									background: gite.couleur1,
								},
							};
						}
					}
				}
			}
		},
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
				{newReservation > 0
					? `Vous avez ${newReservation} nouvelles réservations !`
					: `Aucune nouvelle réservation !`}
			</p>
			<MUIDataTable
				title={'Reservations'}
				data={reservations}
				columns={columns}
				options={options}
			/>
		</>
	);
};

export default withRouter(ListReservation);
