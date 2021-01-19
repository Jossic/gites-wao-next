import FormCreateGite from '../../../../components/admin/FormCreateGite';
import Admin from '../../../../components/auth/Admin';
import AdminHeader from '../../../../components/layout/AdminHeader';

const gestionPages = () => {
	return (
		<>
			<AdminHeader>
				<Admin>
					<h2>Formulaire de création d'un gîte</h2>
					<FormCreateGite />
				</Admin>
			</AdminHeader>
		</>
	);
};

export default gestionPages;
