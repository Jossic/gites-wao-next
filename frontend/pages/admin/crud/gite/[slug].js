import { useEffect, useState } from 'react';
import FormUpdateGite from '../../../../components/admin/forms/FormUpdateGite';
import Admin from '../../../../components/auth/Admin';
import AdminHeader from '../../../../components/layout/AdminHeader';
import { withRouter } from 'next/router';
import { Spinner } from 'reactstrap';
import { listGiteDetails } from '../../../../actions/giteActions';

const gestionGite = ({ router }) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			setData(await listGiteDetails(router.query.slug));
		};
		fetchData();
	}, []);

	return (
		<>
			<AdminHeader>
				<Admin>
					<h2>Formulaire de modification d'un gîte</h2>
					{data ? (
						<FormUpdateGite preloadedValues={data} />
					) : (
						<Spinner />
					)}
				</Admin>
			</AdminHeader>
		</>
	);
};

export default withRouter(gestionGite);
