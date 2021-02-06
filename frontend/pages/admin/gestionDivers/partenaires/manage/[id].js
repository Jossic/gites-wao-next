import AdminHeader from '../../../../../components/layout/AdminHeader';
import ListPartenairesCards from '../../../../../components/admin/lists/ListPartenairesCards';
import Admin from '../../../../../components/auth/Admin';
import Link from 'next/link';
import { withRouter } from 'next/router';

const GestionPartenairesCards = ({ router }) => {
	return (
		<>
			<AdminHeader>
				<Admin>
					<h2>Gestion des partenaires</h2>
					<Link
						href={`/admin/crud/divers/partenaire/${router.query.id}/card/create`}>
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

export default withRouter(GestionPartenairesCards);
