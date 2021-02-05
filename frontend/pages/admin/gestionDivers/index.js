import AdminHeader from '../../../components/layout/AdminHeader';

import ListPages from '../../../components/admin/lists/ListPages';
import Admin from '../../../components/auth/Admin';

const gestionDivers = () => {
	return (
		<>
			<AdminHeader>
				<Admin>
					<h2>Gestion des pages liées aux gîtes</h2>

					<hr />
					<h3>Liste des pages diverses</h3>
					<ListPages />
				</Admin>
			</AdminHeader>
		</>
	);
};

export default gestionDivers;
