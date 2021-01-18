import {
	Container,
	Row,
	Navbar,
	Nav,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	Col,
	NavItem,
	NavLink,
} from 'reactstrap';
import Link from 'next/link';

const AdminHeader = ({ children }) => {
	return (
		<>
			<Container fluid>
				<Row style={{ Height: '5vh' }} className='bg-secondary'>
					text
				</Row>
				<Row style={{ Height: '100%' }} className='flex-fill'>
					<Col
						md={4}
						style={{ maxWidth: '30vh' }}
						className='bg-dark text-white'>
						<div className='navbar navbar-inverse'>
							{/* <div className='brand'>utilisateur</div> */}
							{/* <hr /> */}
							<ul>
								<li>
									<Link href='/admin'>
										<a>Accueil</a>
									</Link>
								</li>
								<hr />
								<li>
									<Link href='/admin/gestionPages'>
										<a>Gestion des pages</a>
									</Link>
								</li>
								<hr />
								<li>
									<Link href='/admin/gestionDivers'>
										<a>Gestion des divers</a>
									</Link>
								</li>
								<hr />
								<li>
									<Link href='/'>
										<a>Lien$</a>
									</Link>
								</li>
								<hr />
								<li>
									<Link href='/'>
										<a>Lien$</a>
									</Link>
								</li>
								<hr />
								<li>
									<Link href='/'>
										<a>Lien$</a>
									</Link>
								</li>
								<hr />
								<li>
									<Link href='/'>
										<a>Lien$</a>
									</Link>
								</li>
								<hr />
								<li>
									<Link href='/'>
										<a>Lien$</a>
									</Link>
								</li>
								<hr />
								<li>
									<Link href='/'>
										<a>Lien$</a>
									</Link>
								</li>
								<hr />
								<li>
									<Link href='/'>
										<a>Lien$</a>
									</Link>
								</li>
								<hr />
								<li>
									<Link href='/'>
										<a>Lien$</a>
									</Link>
								</li>
								<hr />
								<li>
									<Link href='/'>
										<a>Lien$</a>
									</Link>
								</li>
								<hr />
								<li>
									<Link href='/'>
										<a>Lien$</a>
									</Link>
								</li>
								<hr />
								<li>
									<Link href='/'>
										<a>Lien$</a>
									</Link>
								</li>
								<hr />
							</ul>
						</div>
					</Col>
					<Col md={8}>{children}</Col>
				</Row>
				<Row
					style={{
						Height: '5vh',
						position: 'fixed',
						bottom: '0',
						width: '100%',
					}}
					className='bg-secondary'>
					text
				</Row>
			</Container>
		</>
	);
};

export default AdminHeader;
