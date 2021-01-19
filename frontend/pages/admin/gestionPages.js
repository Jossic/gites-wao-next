import AdminHeader from '../../components/layout/AdminHeader';
import Link from 'next/link';
import { Button } from 'reactstrap';
import ListGites from '../../components/admin/ListGites';

const gestionPages = () => {
	return (
		<>
			<AdminHeader>
				<h2>Gestion des pages liées aux gîtes</h2>

				<Button className='mb-5'>Ajouter un gîte</Button>
				<hr />
				<h3>Liste des gîtes</h3>
				<ListGites />
			</AdminHeader>
		</>
	);
};

export default gestionPages;
