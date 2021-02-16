import AdminHeader from '../../../components/layout/AdminHeader';
import Admin from '../../../components/auth/Admin';
import { withRouter } from 'next/router';
import { listeOneReservation } from '../../../actions/reservationActions';
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
import { Grid, Paper } from '@material-ui/core';
import FormStatus from '../../../components/admin/forms/reservation/FormStatus';
import FormClient from '../../../components/admin/forms/reservation/FormClient';
import FormLocation from '../../../components/admin/forms/reservation/FormLocation';
import FormPaiements from '../../../components/admin/forms/reservation/FormPaiements';
import FormContrat from '../../../components/admin/forms/reservation/FormContrat';

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
		backgroundColor: theme.palette.background.paper,
		minHeight: '50vh',
	},
}));

const ReservationId = ({ reservation, router }) => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<AdminHeader>
				<Admin>
					{/* Fil d'ariane */}
					<h2 style={{ color: 'white' }}>
						Consultation de la réservation #
					</h2>
					<Paper>
						<Grid container>
							<Typography variant='h4'>
								Informations tarifaires
							</Typography>
						</Grid>
						<Grid container justify='center' spacing={5}>
							<Grid item>Total sans supplément</Grid>
							<Grid item>Supplément</Grid>
							<Grid item>Taxes diverses</Grid>
							<Grid item>Ménage</Grid>
							<Grid item>Lit</Grid>
							<Grid item>Animaux</Grid>
							<Grid item>Remise</Grid>
							<Grid item>Reste à payer</Grid>
						</Grid>
						<Grid container justify='center' spacing={5}>
							<Grid item>€€€€€€€€€</Grid>
							<Grid item>€€€€€€€€€</Grid>
							<Grid item>€€€€€€€€€</Grid>
							<Grid item>€€€€€€€€€</Grid>
							<Grid item>€€€€€€€€€</Grid>
							<Grid item>€€€€€€€€€</Grid>
							<Grid item>€€€€€€€€€</Grid>
							<Grid item>€€€€€€€€€</Grid>
						</Grid>
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
							<TabPanel value={value} index={0}>
								<FormStatus />
							</TabPanel>
							<TabPanel value={value} index={1}>
								<FormPaiements />
							</TabPanel>
							<TabPanel value={value} index={2}>
								<FormClient />
							</TabPanel>
							<TabPanel value={value} index={3}>
								<FormLocation />
							</TabPanel>
							<TabPanel value={value} index={4}>
								<FormContrat />
							</TabPanel>
						</div>
					</Paper>

					{/* 					
					{success && (
						<Snackbar
							open={open}
							autoHideDuration={6000}
							onClose={handleClose}>
							<Alert onClose={handleClose} severity='success'>
								{text}
							</Alert>
						</Snackbar>
					)}
					{loading && <CircularProgress />}
					{error && (
						<Snackbar
							open={open}
							autoHideDuration={6000}
							onClose={handleClose}>
							<Alert onClose={handleClose} severity='error'>
								{error}
							</Alert>
						</Snackbar>
					)} */}
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

export default withRouter(ReservationId);