import AdminHeader from '../../../../../components/layout/AdminHeader';
import ListPartenairesCards from '../../../../../components/admin/lists/ListPartenairesCards';
import Admin from '../../../../../components/auth/Admin';
import Link from 'next/link';
import { withRouter } from 'next/router';
import {
	ListAllPartenaireCards,
	listePartenaireById,
} from '../../../../../actions/partenairesActions';
import { getCookie } from '../../../../../actions/authActions';

const GestionPartenairesCards = ({
	partenaireCards,
	categorie,
	partenaireId,
}) => {
	return (
		<>
			<AdminHeader>
				<Admin>
					<h2>Gestion des partenaires</h2>
					<Link
						href={`/admin/crud/divers/partenaire/${partenaireId}/card/create`}>
						<a className='btn btn-info btn-lg mb-3 mt-3 float-right'>
							Créer un partenaire
						</a>
					</Link>

					<hr />

					<ListPartenairesCards
						partenaireCards={partenaireCards}
						categorie={categorie}
						partenaireId={partenaireId}
					/>
				</Admin>
			</AdminHeader>
		</>
	);
};

export async function getServerSideProps(context) {
	const token = getCookie('token');
	const res1 = await ListAllPartenaireCards(context.params.id);
	const partenaireCards = await res1;
	const res2 = await listePartenaireById(context.params.id, token);
	const categorie = await res2;
	return {
		props: { partenaireCards, categorie, partenaireId: context.params.id },
	};
}

export default withRouter(GestionPartenairesCards);
