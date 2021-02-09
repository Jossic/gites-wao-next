import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import { API, DOMAIN, APP_NAME } from '../../config';
import Image from 'next/image';
import {
	Card,
	Button,
	CardImg,
	CardTitle,
	CardText,
	CardDeck,
	CardSubtitle,
	CardBody,
	Jumbotron,
} from 'reactstrap';
import Link from 'next/link';
import {
	ListAllPartenaireCards,
	ListAllPartenairesNoms,
	listePartenaireBySlug,
} from '../../actions/partenairesActions';
import { listPhotosBySection } from '../../actions/giteActions';
import image from 'next/image';

const Partenaire = ({ categorie, partenaires, photos }) => {
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

	const photoInfos = (id) => {
		return photos.map(
			(photo) =>
				photo._id === id && (
					<Image
						className='d-block w-100'
						src={photo.location}
						alt={photo.alt}
						width={200}
						height={150}
					/>
				)
		);
	};

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

	const card = () => (
		<CardDeck>
			{partenaires.map((partenaire) => (
				<div>
					<Card
						style={{
							width: '18rem',
							minHeight: '25rem',
							margin: '10px',
						}}>
						{photoInfos(partenaire.image)}
						<CardBody>
							<CardTitle tag='h5'>{partenaire.titre}</CardTitle>
							<CardSubtitle tag='h6' className='mb-2 text-muted'>
								{/* Card subtitle */}
							</CardSubtitle>
							<CardText>
								{partenaire.mail && (
									<a href={`mailto:${partenaire.mail}`}>
										{partenaire.mail}
									</a>
								)}
								{partenaire.tel && <p>0{partenaire.tel}</p>}
								{partenaire.adresse && (
									<p>{partenaire.adresse}</p>
								)}
								{partenaire.texte && <p>{partenaire.texte}</p>}
								{/* </p>} */}
							</CardText>
							{partenaire.site && (
								<Link href={partenaire.site}>
									<a className='btn btn-info'>
										<i class='fas fa-globe'></i>
									</a>
								</Link>
							)}
						</CardBody>
					</Card>
				</div>
			))}
		</CardDeck>
	);

	return (
		<>
			{head()}
			<Layout>
				{/* {JSON.stringify(gite)} */}
				{jumbotron()}
				<hr />
				<div className='container'>{card()}</div>
			</Layout>
		</>
	);
};

export async function getStaticPaths() {
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
			return ListAllPartenaireCards(categorie._id).then((partenaires) => {
				if (partenaires.error) {
					console.log(partenaires.error);
				} else {
					return listPhotosBySection(categorie.slug).then(
						(photos) => {
							if (photos.error) {
								console.log(photos.error);
							} else {
								return {
									props: { categorie, partenaires, photos },
								};
							}
						}
					);
				}
			});
		}
	});
}

export default Partenaire;
