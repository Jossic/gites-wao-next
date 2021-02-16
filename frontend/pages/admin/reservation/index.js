import AdminHeader from '../../../components/layout/AdminHeader';
import Admin from '../../../components/auth/Admin';
import ListReservation from '../../../components/admin/lists/ListReservation';

import {
	countNouvelleReservation,
	listAllReservations,
} from '../../../actions/reservationActions';
import { getCookie } from '../../../actions/authActions';
import { listeDesGites } from '../../../actions/giteActions';

const Reservation = ({ reservations, newReservations, gites }) => {
	//
	return (
		<>
			<AdminHeader>
				<Admin>
					{/* Fil d'ariane */}
					<h2 style={{ color: 'white' }}>
						Consulter les réservations
					</h2>

					<hr />
					<ListReservation
						reservations={reservations}
						newReservations={newReservations}
						gites={gites}
					/>
				</Admin>
			</AdminHeader>
		</>
	);
};

export async function getServerSideProps(context) {
	const token = context.req.cookies.token;
	const res1 = await listAllReservations(token);
	const reservations = await res1;
	const res2 = await countNouvelleReservation();
	const newReservations = await res2;
	const res3 = await listeDesGites();
	const gites = await res3;
	// const res2 = await countNouvelleReservation();
	// const clients = await res2;
	return {
		props: {
			reservations,
			newReservations,
			gites,
		},
	};
}

export default Reservation;
