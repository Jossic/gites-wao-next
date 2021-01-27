import { useEffect, useState } from 'react';
import { listeOneQR } from '../../../../../actions/giteActions';
import FormUpdateQR from '../../../../../components/admin/FormUpdateQR';
import Admin from '../../../../../components/auth/Admin';
import AdminHeader from '../../../../../components/layout/AdminHeader';
import { withRouter } from 'next/router';
import { Spinner } from 'reactstrap';
import { getCookie } from '../../../../../actions/authActions';

const gestionPages = ({ router }) => {
	const [data, setData] = useState(null);
	const token = getCookie('token');

	useEffect(() => {
		const fetchData = async () => {
			setData(await listeOneQR(router.query.id, token));
		};
		fetchData();
	}, []);

	return (
		<>
			<AdminHeader>
				<Admin>
					<h2>Formulaire de modification d'une question/réponse</h2>
					{data ? (
						<FormUpdateQR preloadedValues={data} />
					) : (
						<Spinner />
					)}
				</Admin>
			</AdminHeader>
		</>
	);
};

export default withRouter(gestionPages);
