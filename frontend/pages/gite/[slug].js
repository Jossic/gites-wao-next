import Head from 'next/head';
import React from 'react';
import Layout from '../../components/layout/Layout';
import { API, DOMAIN, APP_NAME } from '../../config';
import { listGiteDetails, listPhotosByNom } from '../../actions/giteActions';
import Image from 'next/image';
import { Jumbotron } from 'reactstrap';
import { Carousel } from 'react-bootstrap';
import ContactForm from '../../components/ContactForm';
import { listReviewsBySlug } from '../../actions/reviewActions';
import Note from '../../components/admin/Note';

const Gite = React.forwardRef(({ gite, photos, reviews }, ref) => {
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
		const filteredPhotos = photos.filter((photo) => {
			return photo.sectionAssociee === section;
		});
		return filteredPhotos.map((photo, i) => (
			<Carousel.Item key={i} ref={ref}>
				<Image
					className='d-block w-100'
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
		));
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

	const carouselReviews = () =>
		reviews.map((review, i) => (
			<Carousel.Item key={i}>
				<Image
					className='d-block w-100'
					src={'/images/grey.jpg'}
					alt={'texte'}
					width={2000}
					height={800}
				/>
				<Carousel.Caption>
					<p style={{ marginTop: '-250px' }}>{review.commentaire}</p>
					<hr />
					<p>
						<Note value={review.note} />
					</p>
					<h4>{review.client}</h4>
				</Carousel.Caption>
			</Carousel.Item>
		));

	const sectionReviews = () => (
		<div className='container'>
			<section>
				<h2 className='text-center'>
					Ce que nos clients disent de ce gîte
				</h2>

				<Carousel>{carouselReviews()}</Carousel>
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
				<hr />
				{sectionExterieur()}
				<hr />
				{sectionInterieur()}
				<hr />
				{sectionPiscine()}
				<hr />
				{console.log(reviews)}
				{sectionReviews()}
				<hr />
				{sectionVideoContact()}
				<hr />
				{sectionCalendrier()}
				<hr />
				{sectionMap()}
			</Layout>
		</>
	);
});

export async function getStaticPaths() {
	//lister les noms de gites
	return {
		paths: [
			{ params: { slug: 'manola' } },
			{ params: { slug: 'brinchette' } },
			{ params: { slug: 'lauberoye' } },
			{ params: { slug: 'petit-nay' } },
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
			return listPhotosByNom(gite.slug).then((photos) => {
				if (photos.error) {
					console.log(photos.error);
				} else {
					return listReviewsBySlug(gite.slug).then((reviews) => {
						if (reviews.error) {
							console.log(reviews.error);
						} else {
							return { props: { gite, photos, reviews } };
						}
					});
				}
			});
		}
	});
}

export default Gite;
