import AdminHeader from '../../../../components/layout/AdminHeader';
import ListPartenaires from '../../../../components/admin/lists/ListPartenaires';
import Admin from '../../../../components/auth/Admin';
import Link from 'next/link';

const gestionPartenaires = () => {
	return (
		<>
			<AdminHeader>
				<Admin>
					<h2>Gestion des catégories de partenaires</h2>

					<Link href='/admin/crud/divers/partenaire/create'>
						<a className='btn btn-info btn-lg mb-3 mt-3 float-right'>
							Ajouter une catégorie
						</a>
					</Link>

					<hr />
					<h3>Liste des catégories</h3>
					<ListPartenaires />
				</Admin>
			</AdminHeader>
		</>
	);
};

export default gestionPartenaires;
