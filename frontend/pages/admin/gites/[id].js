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
import ChatIcon from '@material-ui/icons/Chat';
import { Grid, Paper, Button, ButtonGroup } from '@material-ui/core';
import { useState } from 'react';
import Link from 'next/link';
import { getCookie } from '../../../actions/authActions';
import { getUserById } from '../../../actions/userActions';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import FormUpdateUser from '../../../components/admin/forms/FormUpdateUser';
import FormDroits from '../../../components/admin/forms/FormDroits';

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

const UserId = ({ user, router }) => {
	const classes = useStyles();
	const token = getCookie('token');
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<AdminHeader>
				<Admin>
					{/* Fil d'ariane */}
					<Grid container>
						<Grid item>
							<Typography variant='h5' style={{ margin: '10px' }}>
								Gestion de l'utilisateur {user.name}
								<Typography style={{ color: 'red' }}>
									#{user._id}
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
								<Button>Bouton</Button>
								<Button>Bouton</Button>
								<Button>Bouton</Button>
							</ButtonGroup>
						</Grid>
						<Grid item>
							<Button variant='contained' color='primary'>
								<Link href='/admin/users'>
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
							<Typography variant='h4'>Informations</Typography>
						</Grid>

						<div className={classes.root}>
							<AppBar position='static'>
								<Tabs
									value={value}
									onChange={handleChange}
									variant='fullWidth'
									scrollButtons='off'
									aria-label='user'>
									<Tab
										icon={<VpnKeyIcon />}
										aria-label='Gestion des droits'
										{...a11yProps(0)}
									/>
									<Tab
										icon={<ContactMailIcon />}
										aria-label='Formulaire de modifications'
										{...a11yProps(1)}
									/>
									<Tab
										icon={<ChatIcon />}
										aria-label='Messagerie'
										{...a11yProps(2)}
									/>
								</Tabs>
							</AppBar>
							<TabPanel value={value} index={0}>
								<FormDroits />
							</TabPanel>
							<TabPanel value={value} index={1}>
								<FormUpdateUser user={user} />
							</TabPanel>
							<TabPanel value={value} index={2}>
								{/*  */}
							</TabPanel>
						</div>
					</Paper>
				</Admin>
			</AdminHeader>
		</>
	);
};

export async function getServerSideProps(context) {
	const token = context.req.cookies.token;
	const res1 = await getUserById(context.params.id, token);
	const user = await res1;

	return {
		props: {
			user,
		},
	};
}

export default withRouter(UserId);
