import Admin from '../../../../components/auth/Admin';
import AdminHeader from '../../../../components/layout/AdminHeader';
import FormCreateMailer from '../../../../components/admin/forms/FormCreateMailer';

const create = () => {
	return (
		<>
			<AdminHeader>
				<Admin>
					<h2>Formulaire d'ajout d'un mailer</h2>
					<FormCreateMailer />
				</Admin>
			</AdminHeader>
		</>
	);
};

export default create;
