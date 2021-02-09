import { useEffect, useState } from 'react';
import { listePartenaireById } from '../../../../../actions/partenaireActions';
// import FormUpdatePartenaire from '../../../../../components/admin/forms/FormUpdatePartenaire';
import Admin from '../../../../../components/auth/Admin';
import AdminHeader from '../../../../../components/layout/AdminHeader';
import { withRouter } from 'next/router';
import { Spinner } from 'reactstrap';
import { getCookie } from '../../../../../actions/authActions';

const updatePartenaire = ({ router }) => {
	const [data, setData] = useState(null);
	const token = getCookie('token');

	useEffect(() => {
		const fetchData = async () => {
			setData(await listePartenaireById(router.query.id));
		};
		fetchData();
	}, []);

	return (
		<>
			<AdminHeader>
				<Admin>
					<h2>Formulaire de modification d'un partenaire</h2>
					{data ? (
						<FormUpdatePartenaire preloadedValues={data} />
					) : (
						<Spinner />
					)}
				</Admin>
			</AdminHeader>
		</>
	);
};

export default withRouter(updatePartenaire);
