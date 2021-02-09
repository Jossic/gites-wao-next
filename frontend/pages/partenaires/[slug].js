import Head from 'next/head';
import React from 'react';
import Layout from '../../components/layout/Layout';
import { API, DOMAIN, APP_NAME } from '../../config';
import Image from 'next/image';
import {
	Jumbotron,
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
} from 'reactstrap';
import {
	ListAllPartenairesNoms,
	listePartenaireBySlug,
} from '../../actions/partenairesActions';

const Partenaire = ({ categorie }) => {
	const head = () => (
		<Head>
			<title>
				{APP_NAME} | {categorie.nom}{' '}
			</title>
			<meta name='description' content={categorie.mdesc} />
			<link rel='canonical' href={`${DOMAIN}/gite/${categorie.slug}`} />
			<meta
				property='og:title'
				content={`${categorie.nom} | ${APP_NAME}`}
			/>
			<meta property='og:description' content={categorie.mdesc} />
			<meta property='og:type' content='website' />
			<meta
				property='og:url'
				content={`${DOMAIN}/gite/${categorie.slug}`}
			/>
			<meta property='og:site_name' content={`${APP_NAME}`} />

			<meta property='og:site_name' content={APP_NAME} />

			<meta
				property='og:image'
				content={`${API}/blog/photo/${categorie.slug}`}
			/>
			<meta
				property='og:image:secure_url'
				content={`${API}/gite/photo/${categorie.slug}`}
			/>
			<meta property='og:image:type' content='image/jpg' />
		</Head>
	);

	const jumbotron = () => (
		<section>
			<div className='container'>
				<Jumbotron>
					<h1 className='display-3'>
						Nos partenaires dans la catégorie {categorie.nom}
					</h1>
					<p className='lead'>{categorie.presSection}</p>
					<hr className='my-2' />
					<p>{categorie.presPartenaire}</p>
					<p className='lead'></p>
				</Jumbotron>
			</div>
		</section>
	);

	const card = () => {
		return (
			<div>
				<Card>
					<CardImg
						top
						width='100%'
						src='/assets/318x180.svg'
						alt='Card image cap'
					/>
					<CardBody>
						<CardTitle tag='h5'>Card title</CardTitle>
						<CardSubtitle tag='h6' className='mb-2 text-muted'>
							Card subtitle
						</CardSubtitle>
						<CardText>
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</CardText>
						<Button>Button</Button>
					</CardBody>
				</Card>
			</div>
		);
	};

	return (
		<>
			{head()}
			<Layout>
				{/* {JSON.stringify(gite)} */}
				{jumbotron()}
				<hr />
				{card()}
			</Layout>
		</>
	);
};

export async function getStaticPaths() {
	//lister les noms de

	const partenairesNoms = await ListAllPartenairesNoms();
	return {
		paths: partenairesNoms.map((nom) => {
			return {
				params: { id: nom._id, slug: nom.slug },
			};
		}),
		fallback: false,
	};
}

export async function getStaticProps(context) {
	return listePartenaireBySlug(context.params.slug).then((categorie) => {
		if (categorie.error) {
			console.log(categorie.error);
		} else {
			return { props: { categorie } };
		}
	});
}

export default Partenaire;
