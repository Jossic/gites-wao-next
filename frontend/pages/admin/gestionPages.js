import AdminHeader from '../../components/layout/AdminHeader';
import Link from 'next/link';
import { Button } from 'reactstrap';
import ListGites from '../../components/admin/lists/ListGites';
import Admin from '../../components/auth/Admin';

const gestionPages = () => {
	return (
		<>
			<AdminHeader>
				<Admin>
					<h2>Gestion des pages liées aux gîtes</h2>

					<Link href='/admin/crud/gite/create'>
						<a className='btn btn-info btn-lg mb-3 mt-3 float-right'>
							Créer un gîte
						</a>
					</Link>
					<hr />
					<h3>Liste des pages diverses</h3>
					<ListGites />
				</Admin>
			</AdminHeader>
		</>
	);
};

export default gestionPages;
