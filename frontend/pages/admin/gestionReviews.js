import AdminHeader from '../../components/layout/AdminHeader';
import Link from 'next/link';
import ListReviews from '../../components/admin/lists/ListReviews';
import Admin from '../../components/auth/Admin';

const gestionReviews = () => {
	return (
		<>
			<AdminHeader>
				<Admin>
					<h2>Gestion des reviews</h2>

					<Link href='/admin/crud/divers/review/create'>
						<a className='btn btn-info btn-lg mb-3 mt-3 float-right'>
							Ajouter une review
						</a>
					</Link>
					<hr />
					<h3>Liste des Reviews</h3>
					<ListReviews />
				</Admin>
			</AdminHeader>
		</>
	);
};

export default gestionReviews;
