import AdminHeader from '../../../../components/layout/AdminHeader';
import Admin from '../../../../components/auth/Admin';
import { withRouter } from 'next/router';
import {
	createContract,
	listeOneReservation,
	sendContract,
} from '../../../../actions/reservationActions';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import StarsIcon from '@material-ui/icons/Stars';
import EuroIcon from '@material-ui/icons/Euro';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import HouseIcon from '@material-ui/icons/House';
import ReceiptIcon from '@material-ui/icons/Receipt';
import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import {
	Grid,
	Paper,
	Button,
	ButtonGroup,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	Modal,
	Backdrop,
	Fade,
	TableRow,
	CircularProgress,
} from '@material-ui/core';

import FormStatus from '../../../../components/admin/forms/reservation/FormStatus';
import FormClient from '../../../../components/admin/forms/reservation/FormClient';
import FormLocation from '../../../../components/admin/forms/reservation/FormLocation';
import FormPaiements from '../../../../components/admin/forms/reservation/FormPaiements';
import FormContrat from '../../../../components/admin/forms/reservation/FormContrat';
import { useEffect, useState } from 'react';
import { withSnackbar } from '../../../../components/HOC/Snackbar';
import { getCookie } from '../../../../actions/authActions';
import { getClientById } from '../../../../actions/clientActions';
import Link from 'next/link';
import Router from 'next/router';

function TabPanel({ children, value, index, ...other }) {
	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`scrollable-prevent-tabpanel-${index}`}
			aria-labelledby={`scrollable-prevent-tab-${index}`}
			{...other}>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `scrollable-prevent-tab-${index}`,
		'aria-controls': `scrollable-prevent-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		width: '100%',
		backgroundColor: '#585858',
		minHeight: '50vh',
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

const ReservationId = ({ reservation, router, snackbarShowMessage }) => {
	const classes = useStyles();
	const token = getCookie('token');
	const [value, setValue] = useState(0);

	const [pdf, setPdf] = useState({});

	const [client, setClient] = useState({});
	const [loading, setLoading] = useState(false);

	const { control, register, handleSubmit } = useForm({
		defaultValues: reservation,
	});

	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const listerUnClient = () => {
		getClientById(reservation.client, token).then((data) => {
			if (data.error) {
				console.log(error);
			} else {
				setClient(data);
			}
		});
	};

	useEffect(() => {
		listerUnClient();
	}, []);

	const generateContract = () => {
		setLoading(true);
		createContract(reservation._id).then((result) => {
			console.log('log', result.updatedReservation.pdfLink);
			if (result.error) {
				setLoading(false);
				snackbarShowMessage(`${result.error}`);
			} else {
				setPdf(result.updatedReservation.pdfLink);
				setLoading(false);
				snackbarShowMessage(`${result.message}`, 'success');
				setOpen(true);
				console.log('pdf', pdf);
				// setTimeout(() => {
				// 	Router.reload();
				// }, 3000);
			}
		});
	};

	const envoiContract = () => {
		setLoading(true);
		sendContract(reservation._id, token).then((result) => {
			console.log('log', result);
			if (result.error) {
				setLoading(false);
				snackbarShowMessage(`${result.error}`);
			} else {
				setLoading(false);
				snackbarShowMessage(`${result.message}`, 'success');
				setOpen(false);
				// setTimeout(() => {
				// 	Router.reload();
				// }, 3000);
			}
		});
	};

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const onSubmit = async (data) => {
		console.log(data);
		setLoading(true);
		updateGite(data, router.query.id, token).then((result) => {
			console.log('result', result);
			if (result.error) {
				setLoading(false);
				snackbarShowMessage(`${result.error}`);
			} else {
				setLoading(false);
				snackbarShowMessage(`${result.message}`, 'success');
				setTimeout(() => {
					Router.reload();
				}, 3000);
			}
		});
	};

	return (
		<>
			<AdminHeader>
				<Admin>
					{/* Fil d'ariane */}
					{loading && <CircularProgress />}
					<Grid container>
						<Grid item>
							<Typography variant='h5' style={{ margin: '10px' }}>
								Consultation de la réservation
								<Typography style={{ color: 'red' }}>
									#{reservation._id}
								</Typography>
								<Typography style={{ color: 'green' }}>
									{client.civilite} {client.nom}{' '}
									{client.prenom}
								</Typography>
							</Typography>
						</Grid>
					</Grid>
					<Grid
						container
						direction='row'
						justify='space-between'
						alignItems='flex-start'
						style={{ padding: '8px' }}>
						<Grid item>
							<ButtonGroup
								variant='contained'
								color='secondary'
								aria-label='contained primary button group'>
								<Button onClick={generateContract}>
									Générer Contrat
								</Button>
								<Button>Générer Facture</Button>
								<Button>Mail plateforme</Button>
								<Button>Demander paiement</Button>
							</ButtonGroup>
						</Grid>
						<Grid item>
							<Button variant='contained' color='primary'>
								<Link href='/admin/reservation'>
									<a
										style={{
											textDecoration: 'none',
											color: 'white',
										}}>
										Retour
									</a>
								</Link>
							</Button>
						</Grid>
					</Grid>
					<Paper style={{ padding: '15px' }}>
						<Grid container>
							<Typography variant='h4'>
								Informations tarifaires
							</Typography>
						</Grid>
						<TableContainer component={Paper}>
							<Table
								className={classes.table}
								aria-label='simple table'>
								<TableHead>
									<TableRow>
										<TableCell>
											Total sans supplément
										</TableCell>
										<TableCell>Supplément</TableCell>
										<TableCell>Taxes diverses</TableCell>
										<TableCell>Ménage</TableCell>
										<TableCell>Lit</TableCell>
										<TableCell>Animaux</TableCell>
										<TableCell>Remise</TableCell>
										<TableCell>Reste à payer</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow>
										<TableCell>
											{reservation.totalTarifBase}€
										</TableCell>
										<TableCell>
											{reservation.totalTarifSuppl}€
										</TableCell>
										<TableCell>
											{reservation.taxeSejour}€
										</TableCell>
										<TableCell>
											{reservation.totalTfMenage}€
										</TableCell>
										<TableCell>
											{reservation.totalFtLit}€
										</TableCell>
										<TableCell>
											{reservation.mtAnimaux}€
										</TableCell>
										<TableCell>
											{reservation.remise}€
										</TableCell>
										<TableCell>
											{reservation.resteAPayer}€
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</TableContainer>

						<div className={classes.root}>
							<AppBar position='static'>
								<Tabs
									value={value}
									onChange={handleChange}
									variant='fullWidth'
									scrollButtons='off'
									aria-label='scrollable prevent tabs example'>
									<Tab
										icon={<StarsIcon />}
										aria-label='Infos générales'
										{...a11yProps(0)}
									/>
									<Tab
										icon={<EuroIcon />}
										aria-label='Paiements'
										{...a11yProps(1)}
									/>
									<Tab
										icon={<ContactMailIcon />}
										aria-label='Client'
										{...a11yProps(2)}
									/>
									<Tab
										icon={<HouseIcon />}
										aria-label='Location'
										{...a11yProps(3)}
									/>
									<Tab
										icon={<ReceiptIcon />}
										aria-label='Contrat'
										{...a11yProps(4)}
									/>
								</Tabs>
							</AppBar>
							<form onSubmit={handleSubmit(onSubmit)}>
								<TabPanel value={value} index={0}>
									<FormStatus
										generateContract={generateContract}
										preloadedValues={reservation}
									/>
								</TabPanel>
								<TabPanel value={value} index={1}>
									<FormPaiements />
								</TabPanel>
								<TabPanel value={value} index={2}>
									<FormClient preloadedValues={client} />
								</TabPanel>
								<TabPanel value={value} index={3}>
									<FormLocation
										preloadedValues={reservation}
									/>
								</TabPanel>
								<TabPanel value={value} index={4}>
									<FormContrat
										preloadedValues={reservation}
									/>
								</TabPanel>
							</form>
						</div>
					</Paper>

					<Modal
						aria-labelledby='transition-modal-title'
						aria-describedby='transition-modal-description'
						className={classes.modal}
						open={open}
						onClose={handleClose}
						closeAfterTransition
						BackdropComponent={Backdrop}
						BackdropProps={{
							timeout: 500,
						}}>
						<Fade in={open}>
							<div
								className={classes.paper}
								style={{ width: '70%', height: '90%' }}>
								<Grid
									container
									direction='row'
									justify='space-between'
									alignItems='flex-start'
									style={{ marginBottom: '10px' }}>
									<Grid>
										<h4 id='transition-modal-title'>
											Contrat pour la réservation #
											{reservation._id} de {client.nom}{' '}
											{client.prenom}
										</h4>
									</Grid>
									<Grid>
										<Button
											onClick={envoiContract}
											variant='contained'
											color='primary'
											style={{}}>
											<EmailIcon /> Envoyer
										</Button>
									</Grid>
								</Grid>
								<p
									id='transition-modal-description'
									style={{ width: '100%', height: '95%' }}>
									<embed
										style={{
											width: '100%',
											height: '100%',
										}}
										type='application/pdf'
										src={pdf}
										// width='600'
										// height='600'
									/>
								</p>
							</div>
						</Fade>
					</Modal>
				</Admin>
			</AdminHeader>
		</>
	);
};

export async function getServerSideProps(context) {
	const token = context.req.cookies.token;
	const res1 = await listeOneReservation(context.params.id, token);
	const reservation = await res1;
	// Recup client, gite, paiement

	return {
		props: {
			reservation,
		},
	};
}

export default withRouter(withSnackbar(ReservationId));
