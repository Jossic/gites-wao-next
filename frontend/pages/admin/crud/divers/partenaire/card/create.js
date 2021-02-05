import FormCreatePartenaireCard from '../../../../../../components/admin/forms/FormCreatePartenaireCard';
import Admin from '../../../../../../components/auth/Admin';
import AdminHeader from '../../../../../../components/layout/AdminHeader';

const gestionPages = () => {
	return (
		<>
			<AdminHeader>
				<Admin>
					<h2>Formulaire d'ajout d'un partenaire</h2>
					<FormCreatePartenaireCard />
				</Admin>
			</AdminHeader>
		</>
	);
};

export default gestionPages;
