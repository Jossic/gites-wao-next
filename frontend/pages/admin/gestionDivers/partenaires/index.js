import AdminHeader from '../../../../components/layout/AdminHeader';
import ListPartenaires from '../../../../components/admin/lists/ListPartenaires';
import Admin from '../../../../components/auth/Admin';
import Link from 'next/link';

const gestionPartenaires = () => {
	return (
		<>
			<AdminHeader>
				<Admin>
					<h2>Gestion des partenaires</h2>

					<Link href='/admin/crud/divers/partenaire/create'>
						<a className='btn btn-info btn-lg mb-3 mt-3 float-right'>
							Ajouter un partenaire
						</a>
					</Link>

					<hr />
					<h3>Liste des partenaires</h3>
					<ListPartenaires />
				</Admin>
			</AdminHeader>
		</>
	);
};

export default gestionPartenaires;
