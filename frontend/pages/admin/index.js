import AdminHeader from '../../components/layout/AdminHeader';

const index = () => {
	return (
		<AdminHeader>
			<h2>Reste à faire</h2>
			<ul>
				<li>Rendu de la page gîte</li>
				<li>
					Permettre d'ajouter un tri sur les photos (par page et par
					section)
				</li>
				<li>Rendu de la page accueil</li>
				<li>
					Génération d'un contrat : Télécharger le contrat en pdf ->
					Prévisualisation dans modal et confirmation envoi au client
					(exemple mail reçu transféré avec insertion du contrat).
					Ajouter référence du contrat pour virement Ajouter dans le
					corps du mail le lien pour générer le paiement
				</li>
				<li>Génération une facture : Télécharger la facture en xls</li>
				<li>gestion des fichiers</li>
				<li>update & delete image</li>
				<li>
					Renvoyer les messages du formulaire de contact dans l'espace
					admin avec pastille nouveau message
				</li>
				<li>Améliorer affichage sous menu</li>
				<li>Page reserver</li>
				<li>Page tarif</li>
				<li>Intégration Tidio</li>
				<li>Gestion des mails automatiques</li>
				<li>Gestion des utilisateurs</li>
				<li>Affichage du dashboard</li>
				<li>(Gestion des réservation / clients)</li>
				<li>Rendu de l'utilisateur dans le haut</li>
			</ul>
		</AdminHeader>
	);
};

export default index;
