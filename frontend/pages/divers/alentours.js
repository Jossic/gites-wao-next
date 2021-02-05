import { listLiens } from '../../actions/pagesActions';
import Layout from '../../components/layout/Layout';
import { Carousel } from 'react-bootstrap';
import { listPhotosBySection } from '../../actions/giteActions';
import Image from 'next/image';

const Alentours = ({ liens, photos }) => {
	const carousel = () => {
		return photos.map((photo, i) => (
			<Carousel.Item key={i}>
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

	const listLiens = (categorie) => {
		const filteredLiens = liens.filter((lien) => {
			return lien.categorie === categorie;
		});
		return filteredLiens.map((link, i) => (
			<>
				<i class='fas fa-map-marker-alt'></i>{' '}
				<a
					href={link.lien}
					target='_blank'
					rel='noopener noreferrer'
					style={{ textDecoration: 'none', color: 'black' }}>
					{link.titre}
				</a>
				<hr />
			</>
		));
	};

	return (
		<Layout>
			<section
				className='accordion-section clearfix mt-3'
				aria-label='Question Accordions'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-6'>
							<h2>Alentours </h2>
							<p>
								Nous vous invitons à découvrir l’ensemble des
								produits de la marque collective Ardennes de
								France en téléchargeant la brochure ci dessous ,
								dans laquelle sont répertoriées les coordonnées
								de toutes les entreprises, qui au quotidien,
								participent à la valorisation de nos Ardennes.
							</p>
						</div>
						<div className='col-md-6'>
							<Carousel>{carousel()}</Carousel>
						</div>
					</div>
					<hr />
					<div className='row pt-5'>
						<div className='col-md-6'>
							<h3>
								Distractions et divertissements dans les
								Ardennes.
							</h3>
							{listLiens('ardennes')}
						</div>
						<div className='col-md-6'>
							<h3>
								Nous sommes à quelques km de la Belgique,
								découverte chez nos amis Belges.
							</h3>
							{listLiens('belgique')}
							<h3>et ailleurs !!!</h3>
							{listLiens('ailleurs')}
							<h3>
								Nous sommes à quelques km de la Meuse. Voici
								quelques activités chez nos voisins.
							</h3>
							{listLiens('meuse')}

							<h3>
								Et après toutes ces visites, vous pourrez
								terminer la journée dans la piscine et vous
								reposer au calme dans nos gîtes.
							</h3>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export async function getStaticProps(context) {
	// console.log(query);
	return listLiens().then((liens) => {
		if (liens.error) {
			console.log(liens.error);
		} else {
			return listPhotosBySection('alentours').then((photos) => {
				if (photos.error) {
					console.log(photos.error);
				} else {
					return { props: { liens, photos } };
				}
			});
		}
	});
}

export default Alentours;
