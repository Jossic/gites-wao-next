import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { API, DOMAIN, APP_NAME } from '../../config';
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Controller,
	Thumbs,
} from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Controller, Thumbs]);
import {
	listGiteDetails,
	listGitesNoms,
	listPhotosByNom,
} from '../../actions/giteActions';
import Image from 'next/image';
import { Carousel } from 'react-bootstrap';
import ContactForm from '../../components/ContactForm';
import { listReviewsBySlug } from '../../actions/reviewActions';
import Note from '../../components/admin/Note';
import { Paper, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

const Gite = ({ gite, photos, reviews }) => {
	const classes = useStyles();
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

	const [state, setState] = useState({ open: false });
	const handleClick = () => {
		setState({ open: true });
	};

	const couleurGite = gite.couleur1;
	const [thumbsSwiperExt, setThumbsSwiperExt] = useState(null);
	const [thumbsSwiperInt, setThumbsSwiperInt] = useState(null);
	const [thumbsSwiperPis, setThumbsSwiperPis] = useState(null);

	const jumbotron = () => (
		<section>
			<Paper
				className={classes.paper}
				style={{ padding: '10px', marginTop: '10px' }}>
				<Typography
					variant='h2'
					component='h1'
					style={{ color: `${gite.couleur1}` }}>
					Présentation du gîte {gite.nom}
				</Typography>
				<Typography
					variant='subtitle1'
					component='p'
					style={{ color: `${gite.couleur1}` }}>
					{gite.presGiteSEO}
				</Typography>

				<hr className='my-2' />
				<p>{gite.texte}</p>
				<p className='lead'></p>
			</Paper>
		</section>
	);

	const carousel = (section) => {
		const filteredPhotos = photos.filter((photo) => {
			return photo.sectionAssociee === section;
		});
		return filteredPhotos.map((photo, i) => (
			<SwiperSlide
				key={`slide-${i}`}
				tag='li'
				style={{ listStyle: 'none' }}>
				<Image
					// className='d-block w-100'
					src={photo.location}
					alt={photo.alt}
					style={{ listStyle: 'none' }}
					layout='responsive'
					width={500}
					height={375}
				/>
				{/* <span style={{ position: 'relative', bottom: '30px' }}>
					Texte
				</span> */}
				<div
					class='carousel-caption d-none d-md-block'
					style={{ backgroundColor: 'rgba(72,72,72,0.6' }}>
					<Typography variant='h5' component='h5'>
						{photo.titreCarousel}
					</Typography>
					<Typography variant='body1' component='p'>
						{photo.texteCarousel}
					</Typography>
				</div>
			</SwiperSlide>
		));
	};
	const vignette = (section) => {
		const filteredPhotos = photos.filter((photo) => {
			return photo.sectionAssociee === section;
		});
		return filteredPhotos.map((photo, i) => (
			<SwiperSlide
				key={`slide-${i}`}
				tag='li'
				style={{ listStyle: 'none' }}>
				<Image
					// className='d-block w-100'
					src={photo.location}
					alt={photo.alt}
					style={{ listStyle: 'none' }}
					layout='responsive'
					width={500}
					height={375}
				/>
			</SwiperSlide>
		));
	};

	const sectionExterieur = () => (
		<Paper
			style={{
				padding: '10px',
				marginTop: '10px',
			}}>
			<Typography
				variant='h3'
				component='h2'
				style={{
					textAlign: 'center',
					marginBottom: '10px',
					backgroundColor: `${gite.couleur1}`,
				}}>
				Extérieur
			</Typography>
			<Grid
				container
				direction='row'
				justify='space-around'
				alignItems='flex-start'
				spacing={3}>
				<Grid item md={6} xs={12}>
					<Swiper
						id='mainExt'
						spaceBetween={0}
						slidesPerView={1}
						thumbs={{ swiper: thumbsSwiperExt }}
						navigation
						pagination={{ clickable: true }}
						scrollbar={{ draggable: true }}
						onSwiper={setThumbsSwiperExt}
						watchSlidesVisibility
						watchSlidesProgress
						// onSlideChange={() => console.log('slide change')}
					>
						{carousel('exterieur')}
					</Swiper>
					<Swiper
						id='thumbsExt'
						spaceBetween={5}
						slidesPerView={5}
						onSwiper={setThumbsSwiperExt}>
						{vignette('exterieur')}
					</Swiper>
				</Grid>
				<Grid
					item
					md={6}
					xs={12}
					style={{ paddingLeft: '20px', paddingRight: '20px' }}>
					<Typography
						variant='body1'
						component='p'
						style={{ textAlign: 'center' }}>
						{gite.texteExterieur}
					</Typography>
					<hr />
					<Typography
						variant='h6'
						component='h3'
						style={{ marginBottom: '10px' }}>
						Liste des équipements :
					</Typography>
					<ul>
						{gite.equipementExterieur.map((equipement) => (
							<li>{equipement}</li>
						))}
					</ul>
				</Grid>
			</Grid>
		</Paper>
	);

	const sectionInterieur = () => (
		<Paper style={{ padding: '10px', marginTop: '10px' }}>
			<Typography
				variant='h3'
				component='h2'
				style={{
					textAlign: 'center',
					marginBottom: '10px',
					backgroundColor: `${gite.couleur1}`,
				}}>
				Intérieur
			</Typography>
			<Grid
				container
				direction='row'
				justify='space-around'
				alignItems='flex-start'
				spacing={3}>
				<Grid
					item
					md={6}
					xs={12}
					style={{ paddingLeft: '20px', paddingRight: '20px' }}>
					<Typography
						variant='body1'
						component='p'
						style={{ textAlign: 'center' }}>
						{gite.texteInterieur}
					</Typography>
					<hr />
					<Typography
						variant='h6'
						component='h3'
						style={{ marginBottom: '10px' }}>
						Liste des équipements :
					</Typography>
					<ul>
						{gite.equipementInterieur.map((equipement) => (
							<li>{equipement}</li>
						))}
					</ul>
				</Grid>
				<Grid item md={6} xs={12}>
					<Swiper
						id='mainInt'
						spaceBetween={0}
						slidesPerView={1}
						thumbs={{ swiper: thumbsSwiperInt }}
						navigation
						pagination={{ clickable: true }}
						scrollbar={{ draggable: true }}
						onSwiper={setThumbsSwiperInt}
						watchSlidesVisibility
						watchSlidesProgress
						onReachEnd={(swiper) => (swiper.activeIndex = 0)}
						// onSlideChange={() => console.log('slide change')}
					>
						{carousel('interieur')}
					</Swiper>
					<Swiper
						id='thumbsInt'
						spaceBetween={5}
						slidesPerView={5}
						watchSlidesVisibility
						watchSlidesProgress
						onSwiper={setThumbsSwiperInt}>
						{vignette('interieur')}
					</Swiper>
				</Grid>
			</Grid>
		</Paper>
	);

	const sectionPiscine = () => (
		<Paper style={{ padding: '10px', marginTop: '10px' }}>
			<Typography
				variant='h3'
				component='h2'
				style={{
					textAlign: 'center',
					marginBottom: '10px',
					backgroundColor: `${gite.couleur1}`,
				}}>
				Piscine
			</Typography>

			<Grid
				container
				direction='row'
				justify='space-around'
				alignItems='flex-start'
				spacing={3}>
				<Grid item md={6} xs={12}>
					<Swiper
						id='mainPis'
						spaceBetween={0}
						slidesPerView={1}
						thumbs={{ swiper: thumbsSwiperPis }}
						navigation
						pagination={{ clickable: true }}
						scrollbar={{ draggable: true }}
						onSwiper={setThumbsSwiperPis}
						watchSlidesVisibility
						watchSlidesProgress
						// onSlideChange={() => console.log('slide change')}
					>
						{carousel('piscine')}
					</Swiper>
					<Swiper
						id='thumbsPis'
						spaceBetween={5}
						slidesPerView={5}
						onSwiper={setThumbsSwiperPis}>
						{vignette('piscine')}
					</Swiper>
				</Grid>
				<Grid
					item
					md={6}
					xs={12}
					style={{ paddingLeft: '20px', paddingRight: '20px' }}>
					<Typography
						variant='body1'
						component='p'
						style={{ textAlign: 'center' }}>
						{gite.textePiscine}
					</Typography>
					<hr />
					<Typography
						variant='h6'
						component='h3'
						style={{ marginBottom: '10px' }}>
						Liste des équipements :
					</Typography>
					<ul>
						{gite.equipementPiscine.map((equipement) => (
							<li>{equipement}</li>
						))}
					</ul>
				</Grid>
			</Grid>
		</Paper>
	);

	const carouselReviews = () =>
		reviews.map((review, i) => (
			<SwiperSlide
				key={`slide-${i}`}
				style={{ border: '1px solid #717171', margin: '8px' }}>
				<div style={{ margin: '5px' }}>
					<p>{review.commentaire}</p>
					<hr />
					<p>
						<Note value={review.note} />
					</p>
					<h4>{review.client}</h4>
				</div>
			</SwiperSlide>
		));

	const sectionReviews = () => (
		<Paper style={{ padding: '10px', marginTop: '10px' }}>
			<Typography
				variant='h3'
				component='h2'
				style={{
					textAlign: 'center',
					marginBottom: '10px',
					backgroundColor: `${gite.couleur1}`,
				}}>
				Ce que nos clients disent de ce gîte
			</Typography>
			<Swiper
				id='mainPis'
				style={{ padding: '10px' }}
				spaceBetween={20}
				slidesPerView={3}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={() => console.log('swipe')}
				watchSlidesVisibility
				watchSlidesProgress
				// onSlideChange={() => console.log('slide change')}
			>
				{carouselReviews()}
			</Swiper>
		</Paper>
	);

	const sectionVideoContact = () => (
		<Paper style={{ padding: '10px', marginTop: '10px' }}>
			<Grid
				container
				direction='row'
				justify='space-around'
				alignItems='flex-start'
				spacing={3}>
				<Grid item md={6} xs={12}>
					<h2 className='text-center'>Tour du gîte en vidéo</h2>
					<div
						className='mt-5'
						dangerouslySetInnerHTML={afficheVideo()}
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<h2 className='text-center'>Ecrivez-nous !</h2>
					<ContactForm />
				</Grid>
			</Grid>
		</Paper>
	);

	const sectionCalendrier = () => (
		<Paper style={{ padding: '10px', marginTop: '10px' }}>
			<h2 className='text-center'>Calendrier des disponibilités</h2>
			<div dangerouslySetInnerHTML={afficheCalendrier()} />
		</Paper>
	);

	const sectionMap = () => (
		<Paper style={{ padding: '10px', marginTop: '10px' }}>
			<h2 className='text-center'>
				Itinéraire conseillé depuis votre position
			</h2>
			<p>Affiche la map ici</p>
		</Paper>
	);

	return (
		<>
			{head()}
			<Layout>
				<Container>
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
					{/* {console.log(reviews)} */}
					{sectionReviews()}
					<hr />
					{sectionVideoContact()}
					<hr />
					{sectionCalendrier()}
					<hr />
					{sectionMap()}
				</Container>
			</Layout>
		</>
	);
};

export async function getStaticPaths() {
	//lister les noms de gites
	const gitesNom = await listGitesNoms();
	return {
		paths: gitesNom.map((nom) => {
			return {
				params: { id: nom._id, slug: nom.slug },
			};
		}),
		fallback: false,
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
