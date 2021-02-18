import AdminHeader from '../../../components/layout/AdminHeader';
import Admin from '../../../components/auth/Admin';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import HistoryIcon from '@material-ui/icons/History';
import ChatIcon from '@material-ui/icons/Chat';
import { Grid, Paper, Button, ButtonGroup } from '@material-ui/core';
import FormClient from '../../../components/admin/forms/reservation/FormClient';
import { useState } from 'react';
import { getClientById, envoiEmail } from '../../../actions/clientActions';
import Link from 'next/link';
import { getCookie } from '../../../actions/authActions';

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
}));

const ClientId = ({ client, router }) => {
	const classes = useStyles();
	const token = getCookie('token');
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const envoiMail = () => {
		envoiEmail(router.query.id, token).then((data) => {
			console.log('data vaut', data);
			if (data.error) {
				console.log(data.error);
			} else {
				console.log('message envoyé');
			}
		});
	};

	return (
		<>
			<AdminHeader>
				<Admin>
					{/* Fil d'ariane */}
					<Grid container>
						<Grid item>
							<Typography variant='h5' style={{ margin: '10px' }}>
								Gestion du client {client.nom} {client.prenom}
								<Typography style={{ color: 'red' }}>
									#{client._id}
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
								<Button onClick={envoiMail}>
									Envoyer mail
								</Button>
								<Button>Bouton</Button>
								<Button>Bouton</Button>
							</ButtonGroup>
						</Grid>
						<Grid item>
							<Button variant='contained' color='primary'>
								<Link href='/admin/clients'>
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

						<div className={classes.root}>
							<AppBar position='static'>
								<Tabs
									value={value}
									onChange={handleChange}
									variant='fullWidth'
									scrollButtons='off'
									aria-label='client'>
									<Tab
										icon={<ContactMailIcon />}
										aria-label='Infos du client'
										{...a11yProps(0)}
									/>
									<Tab
										icon={<HistoryIcon />}
										aria-label='Historique du client'
										{...a11yProps(1)}
									/>
									<Tab
										icon={<ChatIcon />}
										aria-label='Messagerie'
										{...a11yProps(2)}
									/>
									{/* <Tab
										icon={<HouseIcon />}
										aria-label='Location'
										{...a11yProps(3)}
									/>
									<Tab
										icon={<ReceiptIcon />}
										aria-label='Contrat'
										{...a11yProps(4)}
									/> */}
								</Tabs>
							</AppBar>
							<TabPanel value={value} index={0}>
								<FormClient preloadedValues={client} />
							</TabPanel>
							<TabPanel value={value} index={1}>
								{/* <FormPaiements /> */}
							</TabPanel>
							<TabPanel value={value} index={2}>
								{/*  */}
							</TabPanel>
							{/* <TabPanel value={value} index={3}>
								<FormLocation preloadedValues={reservation} />
							</TabPanel>
							<TabPanel value={value} index={4}>
								<FormContrat />
							</TabPanel> */}
						</div>
					</Paper>
				</Admin>
			</AdminHeader>
		</>
	);
};

export async function getServerSideProps(context) {
	const token = context.req.cookies.token;
	const res1 = await getClientById(context.params.id, token);
	const client = await res1;
	// Recup client, gite, paiement

	return {
		props: {
			client,
		},
	};
}

export default withRouter(ClientId);
