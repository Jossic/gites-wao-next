import Head from 'next/head';
// import Link from 'next/link';
import Layout from '../../components/layout/Layout';
import { API, DOMAIN, APP_NAME } from '../../config';
import { listeDesImages, listGiteDetails } from '../../actions/giteActions';
import Image from 'next/image';
import { Jumbotron } from 'reactstrap';
import { Carousel } from 'react-bootstrap';
import { useState } from 'react';
import ContactForm from '../../components/ContactForm';

const Gite = ({ gite, photos }) => {
	const head = () => (
		<Head>
			<title>
				{APP_NAME} | {gite.nom}{' '}
			</title>
			<meta name='description' content={gite.mdesc} />
			<link rel='canonical' href={`${DOMAIN}/gite/${gite.slug}`} />
			<meta property='og:title' content={`${gite.nom} | ${APP_NAME}`} />
			<meta property='og:description' content={gite.mdesc} />
			<meta property='og:type' content='website' />
			<meta property='og:url' content={`${DOMAIN}/gite/${gite.slug}`} />
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
	const afficheCalendrier = () => {
		return { __html: gite.calendrierLink };
	};
	const afficheVideo = () => {
		return { __html: gite.videoLink };
	};

	// const [activeIndex, setActiveIndex] = useState(0);
	// const [animating, setAnimating] = useState(false);

	// const next = () => {
	// 	if (animating) return;
	// 	const nextIndex =
	// 		activeIndex === photos.length - 1 ? 0 : activeIndex + 1;
	// 	setActiveIndex(nextIndex);
	// };

	// const previous = () => {
	// 	if (animating) return;
	// 	const nextIndex =
	// 		activeIndex === 0 ? photos.length - 1 : activeIndex - 1;
	// 	setActiveIndex(nextIndex);
	// };

	// const goToIndex = (newIndex) => {
	// 	if (animating) return;
	// 	setActiveIndex(newIndex);
	// };

	const jumbotron = () => (
		<section>
			<div className='container'>
				<Jumbotron>
					<h1 className='display-3'>
						Présentation du gîte {gite.nom}
					</h1>
					<p className='lead'>{gite.presGiteSEO}</p>
					<hr className='my-2' />
					<p>
						It uses utility classes for typography and spacing to
						space content out within the larger container.
					</p>
					<p className='lead'></p>
				</Jumbotron>
			</div>
		</section>
	);

	const carousel = (section) => {
		console.log(gite);
		// let currentSection;
		// if (section === 'exterieur') {
		// 	currentSection = 'exterieur';
		// } else if (section === 'piscine') {
		// 	currentSection = 'piscine';
		// } else if (section === 'interieur') {
		// 	currentSection = 'interieur';
		// }
		photos.map((photo) => {
			return (
				<Carousel.Item>
					<Image
						src={photo.location}
						alt={photo.alt}
						width={500}
						height={375}
					/>
					<Carousel.Caption>
						<h4>{photo.titreCarousel}</h4>
						<p>{photo.texteCarousel}</p>
					</Carousel.Caption>
				</Carousel.Item>
			);
		});
	};
	const sectionExterieur = () => (
		<div className='container'>
			<section>
				<h2 className='text-center'>Partie extérieur</h2>
				<div className='row'>
					<div className='col-md-6'>
						<Carousel>{carousel('exterieur')}</Carousel>
					</div>
					<div className='col-md-6'>{gite.texteExterieur}</div>
				</div>
			</section>
		</div>
	);

	const sectionInterieur = () => (
		<div className='container'>
			<section>
				<h2 className='text-center'>Partie intérieur</h2>
				<div className='row'>
					<div className='col-md-6'>{gite.texteInterieur}</div>
					<div className='col-md-6'>
						<Carousel>{carousel('interieur')}</Carousel>
					</div>
				</div>
			</section>
		</div>
	);

	const sectionPiscine = () => (
		<div className='container'>
			<section>
				<h2 className='text-center'>Partie piscine</h2>
				<div className='row'>
					<div className='col-md-6'>
						<Carousel>{carousel('piscine')}</Carousel>
					</div>
					<div className='col-md-6'>{gite.textePiscine}</div>
				</div>
			</section>
		</div>
	);

	const sectionReview = () => (
		<div className='container'>
			<section>
				<h2 className='text-center'>
					Ce que nos clients disent de ce gîte
				</h2>
				<div className='row'>
					<p>Liste des reviews</p>
				</div>
			</section>
		</div>
	);

	const sectionVideoContact = () => (
		<div className='container'>
			<section>
				<div className='row'>
					<div className='col-md-6'>
						<h2 className='text-center'>Tour du gîte en vidéo</h2>
						<div
							className='mt-5'
							dangerouslySetInnerHTML={afficheVideo()}
						/>
					</div>
					<div className='col-md-6'>
						<h2 className='text-center'>Ecrivez-nous !</h2>
						<ContactForm />
					</div>
				</div>
			</section>
		</div>
	);

	const sectionCalendrier = () => (
		<div className='container text-center'>
			<section>
				<h2 className='text-center'>Calendrier des disponibilités</h2>
				<div dangerouslySetInnerHTML={afficheCalendrier()} />
			</section>
		</div>
	);

	const sectionMap = () => (
		<div className='container text-center'>
			<section>
				<h2 className='text-center'>
					Itinéraire conseillé depuis votre position
				</h2>
				<p>Affiche la map ici</p>
			</section>
		</div>
	);

	return (
		<>
			{head()}
			<Layout>
				{/* <h2>Infos du gite</h2> */}
				{/* {JSON.stringify(gite)} */}
				{jumbotron()}
				{sectionExterieur()}
				{sectionInterieur()}
				{sectionPiscine()}
				{sectionReview()}
				{sectionVideoContact()}
				{sectionCalendrier()}
				{sectionMap()}
			</Layout>
		</>
	);
};

export async function getStaticPaths() {
	//lister les noms de gites
	return {
		paths: [
			{ params: { slug: 'manola' } }, // See the "paths" section below
			{ params: { slug: 'brinchette' } }, // See the "paths" section below
			{ params: { slug: 'lauberoye' } }, // See the "paths" section below
			{ params: { slug: 'petit-nay' } }, // See the "paths" section below
		],
		fallback: true,
	};
}

export async function getStaticProps(context) {
	// console.log(query);
	return listGiteDetails(context.params.slug).then((gite) => {
		if (gite.error) {
			console.log(gite.error);
		} else {
			return listeDesImages().then((photos) => {
				if (photos.error) {
					console.log(photos.error);
				} else {
					return { props: { gite, photos } };
				}
			});
		}
	});
}

export default Gite;
