import AdminHeader from '../../components/layout/AdminHeader';

const index = () => {
	return (
		<AdminHeader>
			<h2>Reste à faire</h2>
			<ul>
				<li>Rendu de la page gîte</li>
				<li>Gérer correctement les photos des carousel</li>
				<li>
					Preloaded value sur list des images (voir sur update QR)
				</li>
				<li>Donner la possibilité d'agrandir l'image dans un modal</li>

				<li>
					Permettre d'ajouter un tri sur les photos (par page et par
					section)
				</li>
				<li>Rendu de la page accueil</li>
				<li>Rendu de la page alentours</li>
				<li>Update et delete gite</li>
				<li>gestion des fichiers</li>
				<li>
					gestion des reviews : Preload valeur du select pour update
				</li>
				<li>update & delete image</li>
				<li>Permettre l'affichage des images ajoutée sur S3</li>
				<li>
					Renvoyer les messages du formulaire de contact dans l'espace
					admin avec pastille nouveau message
				</li>
				<li>Améliorer affichage sous menu</li>
				<li>Rendu des pages partenaires</li>
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
