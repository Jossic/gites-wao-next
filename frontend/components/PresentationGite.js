import Image from 'next/image';
import { Button } from 'reactstrap';

const PresentationGite = () => {
	return (
		<section>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6'>
						<Image
							src='/images/logo wao.png'
							alt='Picture of the author'
							width={500}
							height={500}
						/>
					</div>
					<div className='col-md-6'>
						<h2>Présentation de nos propriétés</h2>
						<hr />
						<p>
							Nos 4 gîtes d’une capacité de 2 à 55 personnes sont
							là pour vous accueillir.
						</p>
						<p>
							Nous sommes situés au Sud Est des Ardennes, à 4 km
							de Buzancy le chef lieu de canton où vous pourrez
							trouver les principaux commerces, à 40 km de Sedan
							et son château fort, à 85 km de Reims et ses caves,
							à 60 km de Verdun et son histoire. Proche de la
							frontière Belge et du Luxembourg vous pourrez y
							faire une virée. Loin des soucis des grandes villes,
							nos gîtes sont situés dans des petits villages où le
							calme est assuré, vous pourrez faire de belles
							balades à pied ou à vélo au milieu des vallées et
							des forêts. Idéal pour famille avec enfants et
							animaux.
						</p>
						<p>
							Faites découvrir nos gîtes à vos amis en
							téléchargeant la brochure.
						</p>
						<hr />
						<Button>Télécharger la brochure</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PresentationGite;
