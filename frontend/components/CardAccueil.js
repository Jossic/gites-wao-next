import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Button,
} from 'reactstrap';
import Link from 'next/link';

const CardAccueil = () => {
	return (
		<section>
			<div className='card-deck'>
				<Card>
					<CardImg
						alt='...'
						src='/images/manola-accueil.jpg'
						top></CardImg>
					<CardBody>
						<CardTitle>Gite Manola</CardTitle>
						<CardText>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Est assumenda laboriosam ullam commodi amet
							impedit?
						</CardText>
						<CardText>
							<Link href='/'>
								<a className='btn btn-info'>En savoir plus</a>
							</Link>
						</CardText>
					</CardBody>
				</Card>
				<Card>
					<CardImg
						alt='...'
						src='/images/brinchette-accueil.jpg'
						top></CardImg>
					<CardBody>
						<CardTitle>Gite Brinchette</CardTitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Doloremque qui assumenda ut non iusto quo.
						</CardText>
						<CardText>
							<Link href='/'>
								<a className='btn btn-info'>En savoir plus</a>
							</Link>
						</CardText>
					</CardBody>
				</Card>
				<Card>
					<CardImg
						alt='...'
						src='/images/lauberoye-accueil.jpg'
						top></CardImg>
					<CardBody>
						<CardTitle>Gite Lauberoye</CardTitle>
						<CardText>
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Sint dolorum odit veritatis perspiciatis, ea
							nihil.
						</CardText>
						<CardText>
							<Link href='/'>
								<a className='btn btn-info'>En savoir plus</a>
							</Link>
						</CardText>
					</CardBody>
				</Card>
				<Card>
					<CardImg
						alt='...'
						src='/images/petit-nay-accueil.jpg'
						top></CardImg>
					<CardBody>
						<CardTitle>Gite Petit Nay</CardTitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Consequatur rerum voluptatem nam mollitia
							temporibus explicabo.
						</CardText>
						<CardText>
							<Link href='/'>
								<a className='btn btn-info'>En savoir plus</a>
							</Link>
						</CardText>
					</CardBody>
				</Card>
			</div>
		</section>
	);
};

export default CardAccueil;
