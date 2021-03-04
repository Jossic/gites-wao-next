import AdminHeader from '../../components/layout/AdminHeader';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		...theme.typography.button,
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(1),
		width: '110px',
		textAlign: 'center',
	},
}));

const Changelog = () => {
	const classes = useStyles();
	return (
		<AdminHeader>
			{/* <span className={classes.root}>Added</span> 
			<span className={classes.root}>Changed</span> 
			<span className={classes.root}>Deprecated</span> 
			<span className={classes.root}>Removed</span> 
			<span className={classes.root}>Fixed</span>  */}
			<ul>
				<Typography variant='h4' component='h4'>
					Unreleased
				</Typography>

				<li>
					<span className={classes.root}>Unreleased</span> Mise en
					forme des pages du site partie visible par le client
				</li>
				<li>
					<span className={classes.root}>Unreleased</span> Update
					reservation controller et gérer les remises
				</li>
				<li>
					<span className={classes.root}>Unreleased</span> Permettre
					d'ajouter un tri sur les photos (par page et par section)
				</li>
				<li>
					<span className={classes.root}>Unreleased</span> Génération
					d'un contrat : Télécharger le contrat en pdf ->
					Prévisualisation dans modal et confirmation envoi au client
					(exemple mail reçu transféré avec insertion du contrat).
					Ajouter référence du contrat pour virement Ajouter dans le
					corps du mail le lien pour générer le paiement
				</li>
				<li>
					<span className={classes.root}>Unreleased</span> Génération
					une facture : Télécharger la facture en xls
				</li>
				<li>
					<span className={classes.root}>Unreleased</span> gestion des
					fichiers
				</li>
				<li>
					<span className={classes.root}>Unreleased</span> update &
					delete image
				</li>

				<li>
					<span className={classes.root}>Unreleased</span> Améliorer
					affichage sous menu
				</li>

				<li>
					<span className={classes.root}>Unreleased</span> Intégration
					Tidio
				</li>
				<li>
					<span className={classes.root}>Unreleased</span> Gestion des
					mails automatiques
				</li>

				<li>
					<span className={classes.root}>Unreleased</span> Affichage
					du dashboard
				</li>
				<li>
					<span className={classes.root}>Unreleased</span> (Gestion
					des réservation / clients)
				</li>
			</ul>
			<Typography variant='h4' component='h4'>
				New functionnality
			</Typography>
			<ul>
				<li>
					<span className={classes.root}>Added</span> 02/03/2021 -
					11:30 - Affichage du pdf lors du clic pour la génération du
					contrat et envoi du mail avec le contrat en pièce jointe au
					client.
				</li>
				<li>
					<span className={classes.root}>Added</span> 24/02/2021 -
					21:46 - Dans la partie gîte, ajout d'un 5eme onglet pour
					ajouter certaines informations personnalisées sur le contrat
				</li>
				<li>
					<span className={classes.root}>Added</span> Partie gestion
					des utilisateurs, création, modification, suppression.
				</li>
				<li>
					<span className={classes.root}>Added</span> Affichage
					correct de l'utilisateur connecté en haut à droite de
					l'admin dashboard.
				</li>
				<li>
					<span className={classes.root}>Added</span> Page reserver -
					Reservation fonctionnelle avec calcul du tarif et mail
					envoyé directement.
				</li>
				<li>
					<span className={classes.root}>Added</span> Page tarif -
					Simulation fonctionnelle sur la majorité des cas.
				</li>
				<li>
					<span className={classes.root}>Added</span> Renvoyer les
					messages du formulaire de contact dans l'espace admin avec
					pastille nouveau message.
				</li>
			</ul>
			<Typography variant='h4' component='h4'>
				Updated
			</Typography>
			<ul>
				<li>
					<span className={classes.root}>Changed</span> 03/03/2021 -
					22:30 - Contrôles sur la soumission du formulaire de
					réservation ajouté avec récapitulatif final à mettre en
					forme
				</li>
				<li>
					<span className={classes.root}>Changed</span> 02/03/2021 -
					17:00 - Affichage du listing des équipements corrigé
				</li>
				<li>
					<span className={classes.root}>Changed</span> Gestion des
					réservations - Tri sur date de réservation et sur status
				</li>
				{/*<li>
					<span className={classes.root}>Changed</span> Page reserver
				</li>
				<li>
					<span className={classes.root}>Changed</span> Page tarif
				</li> */}
			</ul>

			<ul>
				<Typography variant='h4' component='h4'>
					To fixe
				</Typography>

				<li>
					<span className={classes.root}>To fixe</span> Formulaire de
					réservation, enpécher la soumission si certaines conditions
					ne sont pas remplies.
				</li>
				<li>
					<span className={classes.root}>To fixe</span> Gestion des
					réservations - Corriger le tri sur client et sur gîte
				</li>
				<li>
					<span className={classes.root}>To fixe</span> Réservations -
					Afficher le tarif avec le récap avant de valider la
					réservation
				</li>
				<li>
					<span className={classes.root}>To fixe</span> Gestion des
					mailers - récupéré les variables pour les gérer
					dynamiquement.
				</li>
			</ul>
		</AdminHeader>
	);
};

export default Changelog;
