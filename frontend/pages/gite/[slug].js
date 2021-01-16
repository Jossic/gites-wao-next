import Head from 'next/head';
// import Link from 'next/link';
import Layout from '../../components/layout/Layout';
import { API, DOMAIN, APP_NAME } from '../../config';
import { listGiteDetails } from '../../actions/giteActions';

const Gite = ({ gite, query }) => {
	const head = () => (
		<Head>
			<title>
				{APP_NAME} | {gite.nom}{' '}
			</title>
			<meta name='description' content={gite.mdesc} />
			<link rel='canonical' href={`${DOMAIN}/blogs/${query.slug}`} />
			<meta property='og:title' content={`${gite.nom} | ${APP_NAME}`} />
			<meta property='og:description' content={gite.mdesc} />
			<meta property='og:type' content='website' />
			<meta property='og:url' content={`${DOMAIN}/blogs/${query.slug}`} />
			<meta property='og:site_name' content={`${APP_NAME}`} />

			<meta property='og:site_name' content={APP_NAME} />

			<meta
				property='og:image'
				content={`${API}/blog/photo/${gite.slug}`}
			/>
			<meta
				property='og:image:secure_url'
				content={`${API}/gite/photo/${gite.slug}`}
			/>
			<meta property='og:image:type' content='image/jpg' />
			{/* <meta property='fb:app_id' content={`${FB_APP_ID}`} /> */}
		</Head>
	);

	return (
		<>
			{head()}
			<Layout>
				<h2>Infos du gite</h2>
				{/* {JSON.stringify(gite)} */}
			</Layout>
		</>
	);
};

Gite.getInitialProps = ({ query }) => {
	console.log(query);
	return listGiteDetails(query.slug).then((data) => {
		if (data.error) {
			console.log(data.error);
		} else {
			return { gite: data, query };
		}
	});
};

export default Gite;
