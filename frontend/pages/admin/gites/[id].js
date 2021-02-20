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
import { Grid, Paper, Button, ButtonGroup } from '@material-ui/core';
import { useState } from 'react';
import PictureInPictureAltIcon from '@material-ui/icons/PictureInPictureAlt';
import StarsIcon from '@material-ui/icons/Stars';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Link from 'next/link';
import PageviewIcon from '@material-ui/icons/Pageview';
import { listGiteById } from '../../../actions/giteActions';
import FormInfosGene from '../../../components/admin/forms/gites/FormInfosGene';
import FormInfosDiverses from '../../../components/admin/forms/gites/FormInfosDiverses';
import FormInfosPratiques from '../../../components/admin/forms/gites/FormInfosPratiques';
import FormInfosPages from '../../../components/admin/forms/gites/FormInfosPages';

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

const GiteId = ({ gite, router }) => {
	const classes = useStyles();
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
									{/* <Tab
										icon={<PageviewIcon />}
										aria-label='Infos pages/SEO'
										{...a11yProps(2)}
									/> */}
								</Tabs>
							</AppBar>
							<TabPanel value={value} index={0}>
								<FormInfosGene />
							</TabPanel>
							<TabPanel value={value} index={1}>
								<FormInfosDiverses />
							</TabPanel>
							<TabPanel value={value} index={2}>
								<FormInfosPratiques />
							</TabPanel>
							<TabPanel value={value} index={3}>
								<FormInfosPages />
							</TabPanel>
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

export default withRouter(GiteId);
