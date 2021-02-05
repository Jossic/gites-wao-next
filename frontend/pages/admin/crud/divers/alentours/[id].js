import { useEffect, useState } from 'react';
import { listeOneLien } from '../../../../../actions/pagesActions';
import FormUpdateLien from '../../../../../components/admin/forms/FormUpdateLien';
import Admin from '../../../../../components/auth/Admin';
import AdminHeader from '../../../../../components/layout/AdminHeader';
import { withRouter } from 'next/router';
import { Spinner } from 'reactstrap';
import { getCookie } from '../../../../../actions/authActions';

const ModifPageAlentours = ({ router }) => {
	const [data, setData] = useState(null);
	const token = getCookie('token');

	useEffect(() => {
		const fetchData = async () => {
			setData(await listeOneLien(router.query.id, token));
		};
		fetchData();
	}, []);

	return (
		<>
			<AdminHeader>
				<Admin>
					<h2>Formulaire de modification d'un lien</h2>
					{data ? (
						<FormUpdateLien preloadedValues={data} />
					) : (
						<Spinner />
					)}
				</Admin>
			</AdminHeader>
		</>
	);
};

export default withRouter(ModifPageAlentours);
