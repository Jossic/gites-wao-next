import AdminHeader from '../../../../components/layout/AdminHeader';
import Link from 'next/link';
import ListAlentours from '../../../../components/admin/lists/ListAlentours';
import Admin from '../../../../components/auth/Admin';
import { listLiens } from '../../../../actions/pagesActions';

const Alentours = () => {
	return (
		<>
			<AdminHeader>
				<Admin>
					<h2>Gestion de la page Alentours</h2>

					<Link href='/admin/crud/divers/alentours/create'>
						<a className='btn btn-info btn-lg mb-3 mt-3 float-right'>
							Ajouter un lien
						</a>
					</Link>
					<hr />
					<h3>Liste des liens</h3>
					<ListAlentours />
				</Admin>
			</AdminHeader>
		</>
	);
};

export default Alentours;
