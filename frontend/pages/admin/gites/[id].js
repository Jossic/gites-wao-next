import AdminHeader from '../../../components/layout/AdminHeader';
import Admin from '../../../components/auth/Admin';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid, Paper, Button, ButtonGroup } from '@material-ui/core';
import { useState } from 'react';
import PictureInPictureAltIcon from '@material-ui/icons/PictureInPictureAlt';
import StarsIcon from '@material-ui/icons/Stars';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Link from 'next/link';
import { withSnackbar } from '../../../components/HOC/Snackbar';
import PageviewIcon from '@material-ui/icons/Pageview';
import { listGiteById, updateGite } from '../../../actions/giteActions';
import FormInfosGeneUpdate from '../../../components/admin/forms/gites/FormInfosGeneUpdate';
import FormInfosDiversesUpdate from '../../../components/admin/forms/gites/FormInfosDiversesUpdate';
import FormInfosPratiquesUpdate from '../../../components/admin/forms/gites/FormInfosPratiquesUpdate';
import FormInfosPagesUpdate from '../../../components/admin/forms/gites/FormInfosPagesUpdate';
import { getCookie } from '../../../actions/authActions';
import Router from 'next/router';
import ReceiptIcon from '@material-ui/icons/Receipt';
import FormInfosContrat from '../../../components/admin/forms/gites/FormInfosContrat';

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
	button: {
		marginRight: theme.spacing(1),
		marginTop: theme.spacing(2),
		width: '100%',
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: '100%',
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	textField: {
		margin: theme.spacing(1),
		width: '100%',
	},
}));

const GiteId = ({ gite, router, snackbarShowMessage }) => {
	const classes = useStyles();
	const [value, setValue] = useState(0);
	const token = getCookie('token');
	const [loading, setLoading] = useState(false);
	const { control, register, handleSubmit } = useForm({
		defaultValues: gite,
	});
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
					<Grid container>
						<Grid item>
							<Typography variant='h5' style={{ margin: '10px' }}>
								Gestion du gîte {gite.nom}
								<Typography style={{ color: 'red' }}>
									#{gite._id}
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
								<Link href='/admin/gites'>
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
										icon={<StarsIcon />}
										aria-label='Infos générales'
										{...a11yProps(0)}
									/>
									<Tab
										icon={<PictureInPictureAltIcon />}
										aria-label='Infos diverses'
										{...a11yProps(1)}
									/>
									<Tab
										icon={<MonetizationOnIcon />}
										aria-label='Infos pratiques/tarifs'
										{...a11yProps(2)}
									/>
									<Tab
										icon={<PageviewIcon />}
										aria-label='Infos pages/SEO'
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
									<FormInfosGeneUpdate
										classes={classes}
										preloadedValues={gite}
										register={register}
									/>
								</TabPanel>
								<TabPanel value={value} index={1}>
									<FormInfosDiversesUpdate
										classes={classes}
										preloadedValues={gite}
										register={register}
									/>
								</TabPanel>
								<TabPanel value={value} index={2}>
									<FormInfosPratiquesUpdate
										classes={classes}
										preloadedValues={gite}
										register={register}
									/>
								</TabPanel>
								<TabPanel value={value} index={3}>
									<FormInfosPagesUpdate
										classes={classes}
										preloadedValues={gite}
										register={register}
									/>
								</TabPanel>
								<TabPanel value={value} index={4}>
									<FormInfosContrat
										lasses={classes}
										preloadedValues={gite}
										register={register}
									/>
								</TabPanel>
							</form>
						</div>
					</Paper>
				</Admin>
			</AdminHeader>
		</>
	);
};

export async function getServerSideProps(context) {
	const res1 = await listGiteById(context.params.id);
	const gite = await res1;

	return {
		props: {
			gite,
		},
	};
}

export default withRouter(withSnackbar(GiteId));
