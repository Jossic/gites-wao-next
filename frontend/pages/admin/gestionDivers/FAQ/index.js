import AdminHeader from '../../../../components/layout/AdminHeader';
import Link from 'next/link';
import ListQR from '../../../../components/admin/ListQR';
import Admin from '../../../../components/auth/Admin';

const FAQ = () => {
	return (
		<>
			<AdminHeader>
				<Admin>
					<h2>Gestion de la page FAQ</h2>

					<Link href='/admin/crud/divers/qr/create'>
						<a className='btn btn-info btn-lg mb-3 mt-3 float-right'>
							Créer une question réponse
						</a>
					</Link>
					<hr />
					<h3>Liste des Q/R</h3>
					<ListQR />
				</Admin>
			</AdminHeader>
		</>
	);
};

export default FAQ;
