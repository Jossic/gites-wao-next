import { useEffect, useState } from 'react';
// import { APP_NAME } from '../config';
import NProgress from 'nprogress';
// import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
// import gites from '../../data';
import Image from 'next/image';
import fetch from 'isomorphic-fetch';
import { isAuth, logout } from '../../actions/authActions';
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

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	const [gites, setGites] = useState([]);

	const listDesGites = () => {
		listGitesNoms().then((data) => {
			if (data.error) {
				console.log(error);
			} else {
				setGites(...gites, data);
			}
		});
	};

	useEffect(() => {
		listDesGites();
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
									Tarifs
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
								<DropdownItem>Restauration</DropdownItem>
								<DropdownItem>Terroir</DropdownItem>
								<DropdownItem>Adresses utiles</DropdownItem>
								<DropdownItem>Festi'buz</DropdownItem>
								<DropdownItem>Labels</DropdownItem>
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
