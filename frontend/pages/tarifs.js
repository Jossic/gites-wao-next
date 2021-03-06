import Layout from '../components/layout/Layout';
import { listeDesGites } from '../actions/giteActions';
import FormCalculTarif from '../components/admin/forms/FormCalculTarif';

const Tarifs = ({ gites }) => {
	return (
		<Layout>
			<FormCalculTarif gites={gites} />
		</Layout>
	);
};

export async function getServerSideProps(context) {
	const res1 = await listeDesGites();
	const gites = await res1;

	return {
		props: {
			gites,
		},
	};
}

export default Tarifs;
