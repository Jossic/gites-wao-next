import FormAddImages from '../../../../components/admin/FormAddImages';
import Admin from '../../../../components/auth/Admin';
import AdminHeader from '../../../../components/layout/AdminHeader';

const gestionPages = () => {
	return (
		<>
			<AdminHeader>
				<Admin>
					<h2>Formulaire d'ajout des images</h2>
					<FormAddImages />
				</Admin>
			</AdminHeader>
		</>
	);
};

export default gestionPages;
