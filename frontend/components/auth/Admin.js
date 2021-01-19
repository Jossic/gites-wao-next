import { useEffect } from 'react';
import Router from 'next/router';
import { isAuth } from '../../actions/authActions';

const Admin = ({ children }) => {
	useEffect(() => {
		if (!isAuth()) {
			Router.push('/login');
		} else if (isAuth().isAdmin === false) {
			Router.push('/login');
		}
	}, []);
	return <>{children}</>;
};

export default Admin;
