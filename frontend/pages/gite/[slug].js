import Head from 'next/head';
// import Link from 'next/link';
import Layout from '../../components/layout/Layout';
import { API, DOMAIN, APP_NAME } from '../../config';
import { listGiteDetails } from '../../actions/giteActions';
import Image from 'next/image';
import {
	Jumbotron,
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption,
} from 'reactstrap';
import { useState } from 'react';

const Gite = ({ gite, query }) => {
	const photos = [
		{
			location:
				'https://gites-wao.s3.amazonaws.com/OpvcUJi1EH-P1010186.jpg',
			nom: 'P1010186.jpg',
			texteImg: 'lorem lorem lorem',
		},
		{
			location:
				'https://gites-wao.s3.amazonaws.com/NUKKUUtUDm-P1090714.jpg',
			nom: 'P1090714.jpg',
			texteImg: 'lorem lorem lorem',
		},
		{
			location:
				'https://gites-wao.s3.amazonaws.com/ibRGvozgYu-P1090716.jpg',
			nom: 'P1090716.jpg',
			texteImg: 'lorem lorem lorem',
		},
	];

	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex =
			activeIndex === photos.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex =
			activeIndex === 0 ? photos.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
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
					<p className='lead'>
						{/* <Button color='primary'>Learn More</Button> */}
					</p>
				</Jumbotron>
			</div>
		</section>
	);

	const carousel = (nom) =>
		photos.map((photo) => {
			return (
				<CarouselItem
					onExiting={() => setAnimating(true)}
					onExited={() => setAnimating(false)}
					key={photo.location}>
					<Image
						src={photo.location}
						alt={photo.nom}
						width={500}
						height={500}
					/>
					<CarouselCaption
						captionText={photo.texteImg}
						captionHeader={photo.texteImg}
					/>
				</CarouselItem>
			);
		});

	const sectionExterieur = () => (
		<div className='container'>
			<section>
				<div className='row'>
					<div className='col-md-6'>
						<Carousel
							activeIndex={activeIndex}
							next={next}
							previous={previous}>
							<CarouselIndicators
								items={photos}
								activeIndex={activeIndex}
								onClickHandler={goToIndex}
							/>
							{carousel('exterieur')}
							<CarouselControl
								direction='prev'
								directionText='Previous'
								onClickHandler={previous}
							/>
							<CarouselControl
								direction='next'
								directionText='Next'
								onClickHandler={next}
							/>
						</Carousel>
					</div>
					<div className='col-md-6'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Natus delectus ipsa, corrupti minus totam nobis non
						ducimus earum, possimus consectetur sequi suscipit
						soluta beatae deserunt similique eaque est? Porro iusto
						voluptatem ipsum optio obcaecati, est quasi corporis
						quibusdam autem animi at tenetur omnis eveniet eaque
						exercitationem dolores. Quod, reprehenderit commodi!
					</div>
				</div>
			</section>
		</div>
	);

	const sectionInterieur = () => (
		<div className='container'>
			<section>
				<div className='row'>
					<div className='col-md-6'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Omnis dolorum quas asperiores deserunt debitis accusamus
						amet ipsa dolores quisquam iusto veniam officiis vitae
						tempore repudiandae quaerat cumque facilis, ab saepe,
						eveniet voluptas odit perspiciatis alias. Sunt, beatae!
						Officiis voluptas, adipisci repudiandae quaerat, atque
						consequuntur ducimus, accusantium velit sint eum
						dolores.
					</div>
					<div className='col-md-6'>
						<Carousel
							activeIndex={activeIndex}
							next={next}
							previous={previous}>
							<CarouselIndicators
								items={photos}
								activeIndex={activeIndex}
								onClickHandler={goToIndex}
							/>
							{carousel('interieur')}
							<CarouselControl
								direction='prev'
								directionText='Previous'
								onClickHandler={previous}
							/>
							<CarouselControl
								direction='next'
								directionText='Next'
								onClickHandler={next}
							/>
						</Carousel>
					</div>
				</div>
			</section>
		</div>
	);

	const sectionPiscine = () => (
		<div className='container'>
			<section>
				<div className='row'>
					<div className='col-md-6'>
						<Carousel
							activeIndex={activeIndex}
							next={next}
							previous={previous}>
							<CarouselIndicators
								items={photos}
								activeIndex={activeIndex}
								onClickHandler={goToIndex}
							/>
							{carousel('piscine')}
							<CarouselControl
								direction='prev'
								directionText='Previous'
								onClickHandler={previous}
							/>
							<CarouselControl
								direction='next'
								directionText='Next'
								onClickHandler={next}
							/>
						</Carousel>
					</div>
					<div className='col-md-6'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Corporis delectus vitae numquam optio, a dignissimos,
						commodi at eum, placeat obcaecati amet iure ipsa fuga
						dolor facilis sint? Voluptatem consequatur vero
						voluptates vitae recusandae vel, ab qui molestiae
						pariatur quis, debitis aut impedit commodi nulla fugit
						incidunt blanditiis hic a cupiditate.
					</div>
				</div>
			</section>
		</div>
	);

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
				{JSON.stringify(gite)}
				{jumbotron()}
				{sectionExterieur()}
				{sectionInterieur()}
				{sectionPiscine()}
			</Layout>
		</>
	);
};

Gite.getInitialProps = ({ query }) => {
	// console.log(query);
	return listGiteDetails(query.slug).then((data) => {
		if (data.error) {
			console.log(data.error);
		} else {
			return { gite: data, query };
		}
	});
};

export default Gite;
