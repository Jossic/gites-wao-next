import FormCreateReviews from '../../../../components/admin/FormCreateReviews';
import Admin from '../../../../components/auth/Admin';
import AdminHeader from '../../../../components/layout/AdminHeader';

const gestionPages = () => {
	return (
		<>
			<AdminHeader>
				<Admin>
					<h2>Formulaire d'ajout d'une reviews manuelle</h2>
					<FormCreateReviews />
				</Admin>
			</AdminHeader>
		</>
	);
};

export default gestionPages;
