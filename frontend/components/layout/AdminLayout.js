import AdminHeader from './AdminHeader';
import Footer from './Footer';

const AdminLayout = ({ children }) => {
	return (
		<>
			<AdminHeader />
			{children}
		</>
	);
};

export default AdminLayout;
