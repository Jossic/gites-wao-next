import FormUpdateQR from '../../../../../components/admin/FormUpdateQR';
import Admin from '../../../../../components/auth/Admin';
import AdminHeader from '../../../../../components/layout/AdminHeader';

const gestionPages = () => {
	return (
		<>
			<AdminHeader>
				<Admin>
					<h2>Formulaire de modification d'une question/réponse</h2>
					<FormUpdateQR />
				</Admin>
			</AdminHeader>
		</>
	);
};

export default gestionPages;
