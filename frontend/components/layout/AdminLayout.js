import AdminHeader from './AdminHeader';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<>
			<AdminHeader />
			{children}
		</>
	);
};

export default Layout;
