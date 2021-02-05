import AdminHeader from '../../../../../components/layout/AdminHeader';
import ListPartenairesCards from '../../../../../components/admin/lists/ListPartenairesCards';
import Admin from '../../../../../components/auth/Admin';
import Link from 'next/link';

const GestionPartenairesCards = () => {
	//Récupérer la catégorie
	return (
		<>
			<AdminHeader>
				<Admin>
					<h2>Gestion des partenaires</h2>
					<Link
						href={`/admin/crud/divers/partenaire/${id}/card/create`}>
						<a className='btn btn-info btn-lg mb-3 mt-3 float-right'>
							Créer un partenaire
						</a>
					</Link>

					<hr />

					<ListPartenairesCards />
				</Admin>
			</AdminHeader>
		</>
	);
};

export default GestionPartenairesCards;
