import Layout from '../components/layout/Layout';
import Link from 'next/link';

import CardAccueil from '../components/CardAccueil';
import PresentationGite from '../components/PresentationGite';
import SimpleMap from '../components/SimpleMap';

const Index = () => {
	return (
		<Layout>
			<CardAccueil />
			<PresentationGite />
			<SimpleMap />
		</Layout>
	);
};

export default Index;
