import FormCreateLien from '../../../../../components/admin/forms/FormCreateLien';
import Admin from '../../../../../components/auth/Admin';
import AdminHeader from '../../../../../components/layout/AdminHeader';

const gestionPages = () => {
	return (
		<>
			<AdminHeader>
				<Admin>
					<h2>
						Formulaire de création d'un lien de la partie
						'Alentours'
					</h2>
					<FormCreateLien />
				</Admin>
			</AdminHeader>
		</>
	);
};

export default gestionPages;
