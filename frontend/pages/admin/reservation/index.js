import AdminHeader from '../../../components/layout/AdminHeader';
import Admin from '../../../components/auth/Admin';
import ListReservation from '../../../components/admin/lists/ListReservation';

import {
	countNouvelleReservation,
	listAllReservations,
} from '../../../actions/reservationActions';

const Reservation = ({ reservations, newReservations }) => {
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
					/>
				</Admin>
			</AdminHeader>
		</>
	);
};

export async function getServerSideProps(context) {
	const res1 = await listAllReservations();
	const reservations = await res1;
	const res3 = await countNouvelleReservation();
	const newReservations = await res3;
	return {
		props: {
			reservations,
			newReservations,
		},
	};
}

export default Reservation;
