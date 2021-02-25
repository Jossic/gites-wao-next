import {
	afficheClient,
	getClientById,
} from '../../../../../actions/clientActions';
import { listGiteById } from '../../../../../actions/giteActions';
import { afficheReservation } from '../../../../../actions/reservationActions';
import Admin from '../../../../../components/auth/Admin';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid, Paper, Typography } from '@material-ui/core';
import Image from 'next/image';

const theme = createMuiTheme({
	palette: {
		type: 'light',
	},
});

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		width: '100%',
		margin: '10px',
	},
	paper: {
		height: 230,
		width: 500,
		backgroundColor: '#dddddd',
		textAlign: 'center',
	},
	paperTitle: {
		height: 30,
		width: '100%',
		backgroundColor: '#cccccc',
		textAlign: 'center',
	},
}));

const ReservationId = ({ reservation, client, gite }) => {
	const classes = useStyles();

	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<div className={classes.root}>
					<Grid container spacing={2} alignItems='flex-start'>
						<Grid item xs={2}>
							<Image
								className='d-block w-100'
								src={gite.vignetteLink}
								alt={gite.nom}
								width={500}
								height={375}
							/>
						</Grid>
						<Grid item xs={10}>
							<Typography
								variant='h5'
								component='h5'
								style={{ textAlign: 'center' }}>
								CONTRAT DE LOCATION EN MEUBLÉ SAISONNIER <br />{' '}
							</Typography>
							Madame, Monsieur. Suite à votre demande, je vous
							adresse le présent contrat de location dont 1
							exemplaire est à me retourner (par courrier ou mail)
							revêtu de votre signature et accompagné du montant
							de l’acompte (virement ou courrier). En espérant
							avoir le plaisir de vous accueillir prochainement,
							recevez mes sincères salutations.
						</Grid>
					</Grid>

					<Grid
						container
						direction='row'
						justify='space-around'
						spacing={4}
						alignItems='center'>
						<Grid item>
							<Paper className={classes.paper}>
								<Typography>Entre la société :</Typography>
								Siége social <br />
								SAS WAO <br />
								1 Route de Nouart <br />
								08240 Fossé, FRANCE <br />
								Courrier :{' '}
								<a href='mailto:contact@gites-wao.fr'>
									contact@gites-wao.fr
								</a>{' '}
								<br />
								Site internet :{' '}
								<a href='http://www.gites-wao.fr'>
									http://www.gites-wao.fr
								</a>{' '}
								<br />
								Tel : +33 (0)3 24 30 08 95 <br />
								IBAN : FR76 1020 6084 0398 3877 2925 093 <br />
								BIC : AGRIFRPP802 <br />
								TITULAIRE : SAS WAO <br />
							</Paper>
						</Grid>
						<Grid item>
							<Paper className={classes.paper}>
								<span>Et le locataire :</span>
								Qualité : <span>{client.civilite}</span>
								<br />
								Prénom et Nom :{' '}
								<span>
									{client.nom} {client.prenom}
								</span>
								<br />
								Adresse : <span>{client.adresse}</span>
								<br />
								CP & Ville :{' '}
								<span>
									{client.cp} {client.ville}
								</span>
								<br />
								Pays : <span>{client.pays}</span>
								<br />
								Téléphone : <span>{client.tel}</span>
								<br />
								Courrier : <span>{client.mail}</span>
								<br />
								<Typography>
									Pour la taxe de Séjour nombre de personnes :
								</Typography>
								Taxables :{' '}
								{reservation.nbPers - reservation.nbEnf} Non
								taxables : {reservation.nbEnf}
								<br />
							</Paper>
						</Grid>
					</Grid>
					<Grid>
						<Paper className={classes.paperTitle}></Paper>
					</Grid>
				</div>
			</ThemeProvider>
		</>
	);
};

export async function getServerSideProps(context) {
	// console.log('context', context.query.id);
	const res1 = await afficheReservation(context.query.id);
	const reservation = await res1;
	// console.log('reservation', reservation);
	const res2 = await listGiteById(reservation.gite);
	const gite = await res2;
	const res3 = await afficheClient(reservation.client);
	const client = await res3;

	return {
		props: {
			reservation,
			gite,
			client,
		},
	};
}

export default ReservationId;
