import FormCreatePartenaire from '../../../../../components/admin/forms/FormCreatePartenaire';
import Admin from '../../../../../components/auth/Admin';
import AdminHeader from '../../../../../components/layout/AdminHeader';

const gestionPages = () => {
	return (
		<>
			<AdminHeader>
				<Admin>
					<h2>Formulaire d'ajout d'un partenaire</h2>
					<FormCreatePartenaire />
				</Admin>
			</AdminHeader>
		</>
	);
};

export default gestionPages;
