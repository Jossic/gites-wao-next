import FormCreateGite from '../../../../components/admin/FormCreateGite';
import AdminHeader from '../../../../components/layout/AdminHeader';

const gestionPages = () => {
	return (
		<>
			<AdminHeader>
				<h2>Formulaire de création d'un gîte</h2>
				<FormCreateGite />
			</AdminHeader>
		</>
	);
};

export default gestionPages;
