import FormCreateQR from '../../../../../components/admin/FormCreateQR';
import Admin from '../../../../../components/auth/Admin';
import AdminHeader from '../../../../../components/layout/AdminHeader';

const gestionPages = () => {
	return (
		<>
			<AdminHeader>
				<Admin>
					<h2>Formulaire de création d'une question/réponse</h2>
					<FormCreateQR />
				</Admin>
			</AdminHeader>
		</>
	);
};

export default gestionPages;
