import AdminHeader from '../../components/layout/AdminHeader';
import Link from 'next/link';
import ListImages from '../../components/admin/lists/ListImages';
import Admin from '../../components/auth/Admin';

const gestionPages = () => {
	return (
		<>
			<AdminHeader>
				<Admin>
					<h2>Gestion des images liées aux gîtes</h2>

					<Link href='/admin/crud/images/add'>
						<a className='btn btn-info btn-lg mb-3 mt-3 float-right'>
							Ajouter des images
						</a>
					</Link>
					<hr />
					<h3>Liste des images</h3>
					<ListImages />
				</Admin>
			</AdminHeader>
		</>
	);
};

export default gestionPages;
