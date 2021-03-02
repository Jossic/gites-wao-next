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
import renderHTML from 'react-render-html';
import Image from 'next/image';

const theme = createMuiTheme({
	palette: {
		type: 'light',
	},
});

const ReservationId = ({ reservation, client, gite }) => {
	const useStyles = makeStyles((theme) => ({
		root: {
			flexGrow: 1,
			width: '100%',
		},
		paper: {
			height: 230,
			width: 480,
			backgroundColor: '#dddddd',
			textAlign: 'center',
		},
		paperTitle: {
			height: 30,
			marginTop: '10px',
			width: '100%',
			backgroundColor: '#cccccc',
			textAlign: 'center',
		},
		paperTitleColor: {
			height: 30,
			marginTop: '10px',
			marginBottom: '10px',
			width: '100%',
			backgroundColor: `${gite.couleur1}`,
			textAlign: 'center',
		},
		typoSouligne: {
			fontWeight: 'bold',
			fontSize: '18px',
			marginBottom: '10px',
			textDecoration: 'underline',
		},
	}));
	const classes = useStyles();

	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<div className={classes.root}>
					<Grid container spacing={1} alignItems='flex-start'>
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
						justify='space-between'
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
								<span>Et le locataire :</span> <br />
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
								{reservation.nbPers - reservation.nbEnf} - Non
								taxables : {reservation.nbEnf}
								<br />
							</Paper>
						</Grid>
					</Grid>
					<Grid>
						<Paper className={classes.paperTitle}>
							CONDITIONS DE LOCATION
						</Paper>
					</Grid>
					<Grid>
						<Paper className={classes.paperTitleColor}>
							Désignation des lieux et descriptif du logement
						</Paper>
					</Grid>
					<Grid>
						<p className={classes.lineHeight}>
							{gite.ctDesignationTitre}
						</p>

						<Typography className={classes.typoSouligne}>
							Principales caractéristiques :
						</Typography>
						<div className='editor'>
							{renderHTML(gite.ctPrincipCarac)}
						</div>
						<Typography className={classes.typoSouligne}>
							Situation du logement dans la localité :
						</Typography>
						<div className='editor'>
							{renderHTML(gite.ctSituLog)}
						</div>
						<Typography className={classes.typoSouligne}>
							Description du logement :
						</Typography>
						<div
							className='editor'
							style={{ marginBottom: '70px' }}>
							{renderHTML(gite.ctDescLog)}
						</div>
						<div>
							<Grid>
								<Paper className={classes.paperTitleColor}>
									Durée de la location :
								</Paper>
							</Grid>

							<p className={classes.lineHeightP}>
								La présente location est consentie et acceptée
								pour une durée de :{' '}
								<span style={{ backgroundColor: 'yellow' }}>
									2 nuitées
								</span>
								. <br /> Elle commence le{' '}
								<span style={{ backgroundColor: 'yellow' }}>
									{reservation.dateArrivee}{' '}
									{reservation.heureArrivee}
								</span>{' '}
								et se terminera le{' '}
								<span style={{ backgroundColor: 'yellow' }}>
									{reservation.dateDepart}{' '}
									{reservation.heureDepart}
								</span>
								. Elle ne pourra en aucun cas être prorogée,
								sauf accord écrit et préalable du propriétaire.
								Pour nous permettre de nous organiser, (le gîte
								est à {gite.nbKmDeLaMaison} km de l’habitation
								principale du propriétaire), vous devez nous
								avertir quelques jours à l'avance de votre heure
								d'arrivée (par mail ou téléphone).
							</p>
						</div>
						<Grid>
							<Paper className={classes.paperTitleColor}>
								Prix en Euros
							</Paper>
						</Grid>

						<p className={classes.lineHeightP}>
							<div>
								<span style={{ textAlign: 'left' }}>
									La présente location saisonnière a lieu
									moyennant la somme de (minimum fixe de base)
								</span>
								<span
									style={{
										float: 'right',
										backgroundColor: 'yellow',
									}}>
									{reservation.totalTarifBase},00 €
								</span>
							</div>
							<div>
								<span style={{ textAlign: 'left' }}>
									Tarif par personne supplémentaire au-delà du
									minimum fixe :{' '}
									<span
										style={{
											color: 'red',
										}}>
										{gite.supplementParPers},00 €
									</span>{' '}
									par nuit et par personne, soit :{' '}
									<span
										style={{
											color: 'red',
										}}>
										{reservation.nbPersSup}
									</span>
								</span>
								<span
									style={{
										float: 'right',
										backgroundColor: 'yellow',
									}}>
									{reservation.totalTarifSuppl},00 €
								</span>
							</div>
							<div>
								<span style={{ textAlign: 'left' }}>
									Il comprend les charges (télévision, eau,
									électricité), le ménage et la fourniture des
									draps et taies
								</span>
							</div>
							<div>
								<span style={{ textAlign: 'left' }}>
									Supplément par animal{' '}
									<span
										style={{
											color: 'red',
										}}>
										3 €
									</span>{' '}
									par jour. Pour{' '}
									<span
										style={{
											color: 'red',
										}}>
										{reservation.nbChien}
									</span>
								</span>
								<span
									style={{
										float: 'right',
										backgroundColor: 'yellow',
									}}>
									{reservation.mtAnimaux},00 €
								</span>
							</div>
							<div>
								<span style={{ textAlign: 'left' }}>
									Forfait lits faits à l'arrivée :{' '}
									<span
										style={{
											color: 'red',
										}}>
										{gite.ftLit},00 €/personne
									</span>
								</span>
								<span
									style={{
										float: 'right',
										backgroundColor: 'yellow',
									}}>
									{reservation.totalFtLit},00 €
								</span>
							</div>

							<div>
								<span
									style={{
										position: 'relative',
										left: '870px',
										fontWeight: 'bold',
									}}>
									Soit la somme de:
								</span>
								<span
									style={{
										float: 'right',
										backgroundColor: 'yellow',
										fontWeight: 'bold',
									}}>
									{reservation.resteAPayer},00 €
								</span>
							</div>
							<div>
								<span
									style={{
										position: 'relative',
										left: '350px',
										fontWeight: 'bold',
									}}>
									Réglement à transmettre avec votre contrat
									signé (selon les modalités ci-après){' '}
									<span
										style={{
											color: 'red',
											textDecoration: 'underline',
										}}>
										à titre d'acompte
									</span>
									:
								</span>
								<span
									style={{
										float: 'right',
										backgroundColor: 'yellow',
									}}>
									{reservation.acompte},00 €
								</span>
							</div>
							<div>
								<span style={{ textAlign: 'left' }}>
									soit par virement (IBAN dans partie
									société), ou chèque à l'ordre de{' '}
									<span
										style={{
											color: 'red',
											fontWeight: 'bold',
											textDecoration: 'underline',
										}}>
										SAS WAO
									</span>
									, ou chèques vacances (envoi au siège
									social)
								</span>
							</div>
							<div>
								<span style={{ textAlign: 'left' }}>
									Taxes diverses calculées sur le nombre
									d'adultes, soit :{' '}
									<span
										style={{
											color: 'red',
										}}>
										{reservation.nbPers - reservation.nbEnf}{' '}
									</span>
									pour{' '}
									<span
										style={{
											color: 'red',
										}}>
										{reservation.nbNuites}{' '}
									</span>
									nuitées
								</span>
								<span
									style={{
										float: 'right',
										backgroundColor: 'yellow',
									}}>
									{/* {reservation.} */},00 €
								</span>
							</div>
							<div>
								<span style={{ textAlign: 'left' }}>
									Nous demandons un envoi en recommandé
									uniquement pour les chèques vacances.
								</span>
								<span
									style={{
										position: 'relative',
										left: '260px',
										fontWeight: 'bold',
									}}>
									solde à régler à votre arrivée :
								</span>
								<span
									style={{
										float: 'right',
										backgroundColor: '#FFB6C1',
									}}>
									{reservation.resteAPayer -
										reservation.acompte +
										reservation.taxeSejour}
									,00 €
								</span>
							</div>
							<div>
								<span style={{ textAlign: 'left' }}>
									Après votre séjour un scan de la caution
									détruite vous sera transmis par courriel,
									sauf en cas de dégâts.
								</span>
								<span
									style={{
										float: 'right',
										backgroundColor: 'yellow',
									}}>
									{reservation.mtCaution},00 €
								</span>
							</div>
							<span
								style={{
									fontWeight: 'bold',
									textDecoration: 'underline',
								}}>
								La réservation deviendra effective dès lors que
								le locataire aura retourné un exemplaire daté et
								signé du présent contrat avant le (DATE A VOIR)
								accompagné du chèque. Au-delà de cette date, la
								réservation sera caduque et le propriétaire
								disposera librement du logement.
							</span>
						</p>
						<Grid>
							<Paper className={classes.paperTitleColor}>
								Assurances
							</Paper>
						</Grid>
						<p style={{ fontSize: '16px' }}>
							Le locataire doit vérifier si son contrat
							d’habitation principale prévoit l’extension
							villégiature en responsabilité civile. Dans
							l’hypothèse contraire, il peut intervenir auprès de
							sa compagnie d’assurance et réclamer l’extension de
							la garantie pour la période de la location, ou bien
							souscrire un contrat particulier au titre des
							clauses villégiature. Derrière le gîte se trouve un
							ruisseau et un étang, par mesure de sécurité, Les
							enfants devront toujours être accompagnés d’un
							adulte et le propriétaire ne peut en aucun cas être
							tenu pour responsable des accidents qui pourraient y
							survenir. De même pour l’aire de jeu du gîte, les
							enfants qui l’utilisent doivent être sous la
							surveillance des parents.
						</p>

						<Grid>
							<Paper className={classes.paperTitleColor}>
								Etat des lieux et inventaire
							</Paper>
						</Grid>
						<p className={classes.lineHeightP}>
							Le document pour l’état des lieux se trouve dans le
							cahier d’explication du gîte. Ce contrat fait office
							d'inventaire. Pour éviter toute contestation le
							locataire voudra bien contrôler et signaler toute
							anomalie dans les 24 heures. Passé ce délai, les
							biens loués seront considérés comme exempts de
							dommages à l’entrée du locataire. Celui-ci sera
							responsable de toute détérioration ou perte pouvant
							survenir à ce mobilier ainsi qu’aux divers matériels
							de l’espace piscine et détente.
						</p>

						<Grid>
							<Paper className={classes.paperTitleColor}>
								Jouissance des lieux
							</Paper>
						</Grid>
						<p className={classes.lineHeightP}>
							Le locataire entretiendra les lieux loués et les
							rendra en bon état de propreté. Il veillera à ce que
							la tranquillité du voisinage ne soit pas troublée.
							La sous location est interdite au preneur, même à
							titre gratuit, sous peine de résiliation du contrat.
							L’installation de tentes ou le stationnement de
							caravanes sur le terrain de la propriété louée est
							interdit, sauf accord préalable du propriétaire.
							L’utilisateur s’engage à ne pas utiliser le service
							WI-FI à des fins illicites, interdites ou illégales
							(entre autres respect de la loi Hadopi). Le loueur,
							à la demande de tiers et/ou de toute autorité
							compétente, se réserve le droit de suspendre
							temporairement ou de manière définitive toute
							utilisation du service sans que sa responsabilité ne
							puisse être recherchée et sans que l’utilisateur ne
							puisse revendiquer une quelconque indemnisation ou
							réparation. En aucun cas le loueur ne peut être
							tenue de réparer les préjudices directs et/ou
							indirects subis du fait de l’utilisation du service
							par l’utilisateur, ce dernier reconnaissant que le
							loueur ne peut pas être responsable des contenus
							auquel accède l’utilisateur et que l’accessibilité
							aux contenus et services n’est pas garantie et peut
							être suspendue sans préavis.
						</p>

						<Grid>
							<Paper className={classes.paperTitleColor}>
								Clause résolutoire
							</Paper>
						</Grid>
						<p className={classes.lineHeightP}>
							A défaut de paiement aux échéances fixées ou en cas
							d’inexécution d’une des clauses du présent
							engagement et cinq jours francs après une simple
							sommation par lettre recommandée restée
							infructueuse, le présent contrat sera immédiatement
							résilié et le bailleur pourra se prévaloir de
							l’article 1590 du Code civil pour conserver les
							acomptes versés à titre des premiers
							dommages-intérêts.
						</p>

						<Grid>
							<Paper className={classes.paperTitleColor}>
								Annulation
							</Paper>
						</Grid>
						<p className={classes.lineHeightP}>
							La signature du contrat engage les deux parties de
							façon définitive. Si le locataire renonce à la
							location 60 jours avant l’arrivée, l’acompte est
							remboursé. Entre 1 jour et 60 jours si nous
							réussissons à relouer, l’acompte est également
							remboursé. Sinon l’acompte est perdu.
						</p>

						<Grid>
							<Paper className={classes.paperTitleColor}>
								Election de domicile
							</Paper>
						</Grid>
						<p className={classes.lineHeightP}>
							Pour l’exécution des présentes, le propriétaire et
							le locataire font élection de domicile dans leurs
							domiciles respectifs. Toutefois en cas de litige, le
							tribunal des lieux loués sera seul compétent.
						</p>
					</Grid>

					<Grid
						container
						direction='row'
						justify='space-between'
						spacing={4}
						alignItems='flex-end'
						style={{ marginTop: '20px' }}>
						<Grid item>
							<p>
								Fait en deux exemplaires à Fossé le {Date.now()}
							</p>
							<p>Signature du propriétaire,</p>
						</Grid>
						<Grid item>
							<p>
								J’ai pris connaissance des conditions de
								location ci-dessus
							</p>
							<p style={{ marginBottom: '20px' }}>Date :</p>
							<p>
								Signature du locataire (précédé de la mention lu
								et approuvé)
							</p>
						</Grid>
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
