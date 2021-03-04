import { useEffect, useState } from 'react';
import NProgress from 'nprogress';
import Link from 'next/link';
import Image from 'next/image';
import { isAuth } from '../../actions/authActions';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
} from 'reactstrap';
import { listGitesNoms } from '../../actions/giteActions';
import Router from 'next/router';

import '../../node_modules/nprogress/nprogress.css';
import { ListAllPartenairesNoms } from '../../actions/partenairesActions';

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	const [gites, setGites] = useState([]);
	const [partenaires, setPartenaires] = useState([]);

	const listDesGites = () => {
		listGitesNoms().then((data) => {
			if (data.error) {
				console.log(error);
			} else {
				setGites(...gites, data);
			}
		});
	};

	const listDesPartenaires = () => {
		ListAllPartenairesNoms().then((data) => {
			if (data.error) {
				console.log(error);
			} else {
				setPartenaires(...partenaires, data);
			}
		});
	};

	useEffect(() => {
		listDesGites();
		listDesPartenaires();
	}, []);

	return (
		<div>
			<Navbar color='dark' dark expand='md'>
				<NavbarBrand href='/'>
					<Image
						src='/images/logo wao.png'
						width='80px'
						height='35px'
					/>
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className='mr-auto' navbar>
						{gites.map((gite, i) => (
							<Link href={`/gite/${gite.slug}`} key={i}>
								<NavItem>
									<NavLink style={{ cursor: 'pointer' }}>
										{gite.nom}
									</NavLink>
								</NavItem>
							</Link>
						))}

						<Link href='/tarifs'>
							<NavItem>
								<NavLink style={{ cursor: 'pointer' }}>
									Devis
								</NavLink>
							</NavItem>
						</Link>

						<Link href='/reservation'>
							<NavItem>
								<NavLink style={{ cursor: 'pointer' }}>
									Réserver
								</NavLink>
							</NavItem>
						</Link>

						<Link href='/contact'>
							<NavItem>
								<NavLink style={{ cursor: 'pointer' }}>
									Contact
								</NavLink>
							</NavItem>
						</Link>

						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Divers
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>
									<Link href='/divers/alentours'>
										<NavItem>
											<NavLink
												style={{
													cursor: 'pointer',
													color: 'black',
												}}>
												Alentours{' '}
											</NavLink>
										</NavItem>
									</Link>
								</DropdownItem>
								<DropdownItem>
									<Link href='/divers/FAQ'>
										<NavItem>
											<NavLink
												style={{
													cursor: 'pointer',
													color: 'black',
												}}>
												F.A.Q.
											</NavLink>
										</NavItem>
									</Link>
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>

						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Partenaires
							</DropdownToggle>
							<DropdownMenu right>
								{partenaires.map((partenaire) => (
									<Link
										href={`/partenaires/${partenaire.slug}`}>
										<NavItem>
											<NavLink
												style={{ cursor: 'pointer' }}>
												<DropdownItem>
													{partenaire.nom}
												</DropdownItem>
											</NavLink>
										</NavItem>
									</Link>
								))}
							</DropdownMenu>
						</UncontrolledDropdown>
						{!isAuth() && (
							<Link href='/login'>
								<NavItem>
									<NavLink style={{ cursor: 'pointer' }}>
										Connexion
									</NavLink>
								</NavItem>
							</Link>
						)}
						{isAuth() && isAuth().isAdmin && (
							<Link href='/admin'>
								<NavItem>
									<NavLink style={{ cursor: 'pointer' }}>
										Admin
									</NavLink>
								</NavItem>
							</Link>
						)}
					</Nav>
					<NavbarText>Les Gites Wao</NavbarText>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
