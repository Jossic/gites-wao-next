import FormCreatePartenaires from '../../../../../components/admin/forms/FormCreatePartenaires';
import Admin from '../../../../../components/auth/Admin';
import AdminHeader from '../../../../../components/layout/AdminHeader';

const gestionPages = () => {
	return (
		<>
			<AdminHeader>
				<Admin>
					<h2>Formulaire d'ajout d'un partenaire</h2>
					<FormCreatePartenaires />
				</Admin>
			</AdminHeader>
		</>
	);
};

export default gestionPages;
