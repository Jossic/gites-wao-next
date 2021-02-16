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
import { IconButton } from '@material-ui/core';
import { removeReservation } from '../../../actions/reservationActions';
import { listeDesGites, listGiteById } from '../../../actions/giteActions';
import GiteNom from '../../../components/GiteNom';

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

	// const [gites, setGites] = useState();

	// const listerlesGites = () => {
	// 	listeDesGites().then((data) => {
	// 		console.log('data =>', data);
	// 		if (data.error) {
	// 			console.log(error);
	// 		} else {
	// 			setGites({ ...gites, data });
	// 		}
	// 	});
	// };

	// useEffect(() => {
	// 	listerlesGites();
	// }, []);

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
				filter: true,
				sort: true,
			},
		},
		{
			name: 'gite',
			label: 'Gite',
			options: {
				filter: true,
				sort: false,

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
				sort: false,
			},
		},
		{
			name: 'dateArrivee',
			label: "Date d'arrivee",
			options: {
				filter: true,
				sort: true,
			},
		},
		{
			name: 'dateDepart',
			label: 'Date de départ',
			options: {
				filter: true,
				sort: true,
			},
		},

		// {
		// 	name: 'msg',
		// 	label: 'Message',
		// 	options: {
		// 		filter: true,
		// 		sort: false,
		// 		customBodyRender: (value, tableMeta, updateValue) => {
		// 			return <p>{value.substring(0, 20) + '...'}</p>;
		// 		},
		// 	},
		// },
		// {
		// 	name: 'vu',
		// 	label: 'Non lu',
		// 	options: {
		// 		filter: true,
		// 		customBodyRender: (value, tableMeta, updateValue) => {
		// 			return (
		// 				!value && (
		// 					<FiberNewIcon
		// 						fontSize='large'
		// 						style={{ color: 'green' }}
		// 					/>
		// 				)
		// 			);
		// 		},
		// 	},
		// },
		// {
		// 	name: 'repondu',
		// 	label: 'Répondu',
		// 	options: {
		// 		filter: true,
		// 		customBodyRender: (value, tableMeta, updateValue) => {
		// 			return value ? (
		// 				<CheckBoxIcon />
		// 			) : (
		// 				<CheckBoxOutlineBlankIcon />
		// 			);
		// 		},
		// 	},
		// },
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
			//Mettre style selon la courleur du gîte et format brillant selon le status
			console.log('row =>', row[2].props.value); //Contient l'id de la ligne (du gîte)

			for (const gite of gites) {
				if (row[2].props.value === gite._id) {
					for (const reservation of reservations) {
						if (reservation.status == 'Nouvelle réservation') {
							console.log('oui oui');
							return {
								className: classes.nouveau,
								style: {
									background: gite.couleur1,
								},
							};
						} else {
							console.log('non non');
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
