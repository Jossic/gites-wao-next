import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid, Paper } from '@material-ui/core';
import Link from '@material-ui/core/Link';

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary'>
			{'Copyright © '}
			<Link color='inherit' href='https://www.gites-wao.fr/'>
				SAS WAO
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '30vh',
	},
	main: {
		marginTop: theme.spacing(8),
		marginBottom: theme.spacing(2),
	},
	footer: {
		padding: theme.spacing(3, 2),
		marginTop: 'auto',
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[800],
	},
}));

const Footer = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Container component='main' className={classes.main} maxWidth='md'>
				<Grid
					container
					direction='row'
					justify='space-around'
					alignItems='center'
					style={{ border: '10px red solid', width: '100%' }}>
					<Grid item xs={12} sm={6}>
						<Typography variant='h4' component='h3' gutterBottom>
							N'hésitez pas à nous contacter
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Typography variant='h4' component='h3' gutterBottom>
							INFORMATIONS DE CONTACT
						</Typography>
						<Typography variant='body1' component='h3' gutterBottom>
							Email : contact@gites-wao.fr <br />
							Tel : 03 24 30 08 95 <br />
							Jonas : 06 23 81 91 49 <br />
							Martine : 06 17 91 31 39 <br />
						</Typography>
					</Grid>
				</Grid>
			</Container>
			<footer className={classes.footer}>
				<Container maxWidth='sm'>
					<Typography variant='body1'>Les gîtes WAO</Typography>
					<Copyright />
				</Container>
			</footer>
		</div>
	);
};

export default Footer;
