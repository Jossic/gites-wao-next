import { listGitesNoms } from '../actions/giteActions';
import Layout from '../components/layout/Layout';
import ReservationForm from '../components/reservation/ReservationForm';

const Reservation = ({ gites }) => {
	return (
		<Layout>
			<ReservationForm gites={gites} />
		</Layout>
	);
};

export async function getStaticProps(context) {
	return listGitesNoms().then((gites) => {
		if (gites.error) {
			console.log(gites.error);
		} else {
			return { props: { gites } };
		}
	});
}

export default Reservation;
