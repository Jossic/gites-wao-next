import AdminHeader from '../../../components/layout/AdminHeader';
import Admin from '../../../components/auth/Admin';
import ListMessages from '../../../components/admin/lists/ListMessages';

const Message = () => {
	return (
		<>
			<AdminHeader>
				<Admin>
					<h2>Consulter les messages reçus</h2>

					<hr />
					<ListMessages />
				</Admin>
			</AdminHeader>
		</>
	);
};

export default Message;
