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
import NProgress from 'nprogress';
import Link from 'next/link';
import Router from 'next/router';

import '../../node_modules/nprogress/nprogress.css';

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const AdminHeader = ({ children }) => {
	return (
		<>
			<div className='d-flex' id='wrapper'>
				<div className='bg-dark border-right' id='sidebar-wrapper'>
					<div className='sidebar-heading text-white'>
						Les Gîtes WAO
					</div>
					<div className='sidebar-header'>
						<div className='user-pic'>
							<img
								className='img-responsive img-rounded'
								src='/images/logov4-1024x496.png'
								alt='User picture'
							/>
						</div>
						<div className='user-info text-white text-center pb-3'>
							<span className='user-name'>
								Martine
								<strong> Lapierre</strong>
							</span>
							<br />
							<span className='user-role'>Administrateur</span>
							<br />
							<span className='user-status'>
								<i className='fa fa-circle'></i>
								<span>Connecté</span>
							</span>
						</div>
					</div>
					<div className='list-group list-group-flush'>
						<Link href='/admin'>
							<a className='list-group-item list-group-item-action text-white bg-dark'>
								<i className='fas fa-tachometer-alt'></i>{' '}
								Dashboard
							</a>
						</Link>
						<Link href='/admin'>
							<a className='list-group-item list-group-item-action text-white bg-dark'>
								<i className='fas fa-chart-line'></i> Vue
								d'ensemble
							</a>
						</Link>

						<div className='accordion' id='accordionExample'>
							<div className='card text-white bg-dark'>
								<div className='card-header' id='headingOne'>
									<h2 className='mb-0'>
										<button
											className='btn btn-link btn-block text-left text-white collapsed'
											type='button'
											data-toggle='collapse'
											data-target='#collapseOne'
											aria-expanded='false'
											aria-controls='collapseOne'>
											<i className='fas fa-igloo'></i>{' '}
											Gestion des gîtes
										</button>
									</h2>
								</div>

								<div
									id='collapseOne'
									className='collapse show'
									aria-labelledby='headingOne'
									data-parent='#accordionExample'>
									{/* <div className='card-body'> */}
									<Link href='/admin/gestionPages'>
										<a className='list-group-item list-group-item-action text-white bg-secondary'>
											<i className='fas fa-arrow-right'></i>{' '}
											Gestion des gîtes
										</a>
									</Link>
									<Link href='/admin/gestionImages'>
										<a className='list-group-item list-group-item-action text-white bg-secondary'>
											<i className='fas fa-arrow-right'></i>{' '}
											Gestion des images
										</a>
									</Link>
									<Link href='/admin/gestionFichiers'>
										<a className='list-group-item list-group-item-action text-white bg-secondary'>
											<i className='fas fa-arrow-right'></i>{' '}
											Gestion des fichiers
										</a>
									</Link>
									<Link href='/admin/gestionReviews'>
										<a className='list-group-item list-group-item-action text-white bg-secondary'>
											<i className='fas fa-arrow-right'></i>{' '}
											Gestion des reviews
										</a>
									</Link>
									{/* </div> */}
								</div>
							</div>
							<div className='card text-white bg-dark'>
								<div className='card-header' id='headingTwo'>
									<h2 className='mb-0'>
										<button
											className='btn btn-link btn-block text-left text-white collapsed'
											type='button'
											data-toggle='collapse'
											data-target='#collapseTwo'
											aria-expanded='false'
											aria-controls='collapseTwo'>
											<i className='far fa-file-alt'></i>{' '}
											Gestion des pages
										</button>
									</h2>
								</div>
								<div
									id='collapseTwo'
									className='collapse'
									aria-labelledby='headingTwo'
									data-parent='#accordionExample'>
									{/* <div className='card-body'>
										Some placeholder content for the second
										accordion panel. This panel is hidden by
										default.
									</div> */}
									<Link href='/admin/gestionDivers'>
										<a className='list-group-item list-group-item-action text-white bg-secondary'>
											<i className='fas fa-arrow-right'></i>{' '}
											Gestion des pages
										</a>
									</Link>
								</div>
							</div>
							<div className='card text-white bg-dark'>
								<div className='card-header' id='headingThree'>
									<h2 className='mb-0'>
										<button
											className='btn btn-link btn-block text-left text-white collapsed'
											type='button'
											data-toggle='collapse'
											data-target='#collapseThree'
											aria-expanded='false'
											aria-controls='collapseThree'>
											<i className='fas fa-bed'></i>{' '}
											Gestion des locations
										</button>
									</h2>
								</div>
								<div
									id='collapseThree'
									className='collapse'
									aria-labelledby='headingThree'
									data-parent='#accordionExample'>
									{/* <div className='card-body'>
										And lastly, the placeholder content for
										the third and final accordion panel.
										This panel is hidden by default.
									</div> */}
									<Link href='/admin'>
										<a className='list-group-item list-group-item-action text-white bg-secondary'>
											<i className='fas fa-arrow-right'></i>{' '}
											Gestion des locations
										</a>
									</Link>
								</div>
							</div>
						</div>

						<Link href='/admin'>
							<a className='list-group-item list-group-item-action text-white bg-dark'>
								<i className='fas fa-user-friends'></i> Gestion
								des utilisateurs
							</a>
						</Link>
						<Link href='/admin'>
							<a className='list-group-item list-group-item-action text-white bg-dark'>
								<i className='fas fa-bed'></i> Gestion des mails
							</a>
						</Link>
						<Link href='/admin'>
							<a className='list-group-item list-group-item-action text-white bg-dark'>
								<i className='fas fa-user-tag'></i> Gestion des
								clients
							</a>
						</Link>
					</div>
				</div>

				<div id='page-content-wrapper'>
					<nav className='navbar navbar-expand-lg navbar-dark bg-dark border-bottom'>
						<button className='btn btn-primary' id='menu-toggle'>
							Toggle Menu
						</button>

						<button
							className='navbar-toggler'
							type='button'
							data-toggle='collapse'
							data-target='#navbarSupportedContent'
							aria-controls='navbarSupportedContent'
							aria-expanded='false'
							aria-label='Toggle navigation'>
							<span className='navbar-toggler-icon'></span>
						</button>

						<div
							className='collapse navbar-collapse'
							id='navbarSupportedContent'>
							<ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
								<li className='nav-item active'>
									<a className='nav-link' href='/admin'>
										Admin{' '}
										<span className='sr-only'>
											(current)
										</span>
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href='/'>
										Voir le site
									</a>
								</li>
								<li className='nav-item dropdown'>
									<a
										className='nav-link dropdown-toggle'
										href='#'
										id='navbarDropdown'
										role='button'
										data-toggle='dropdown'
										aria-haspopup='true'
										aria-expanded='false'>
										Dropdown
									</a>
									<div
										className='dropdown-menu dropdown-menu-right'
										aria-labelledby='navbarDropdown'>
										<a className='dropdown-item' href='#'>
											Action
										</a>
										<a className='dropdown-item' href='#'>
											Another action
										</a>
										<div className='dropdown-divider'></div>
										<a className='dropdown-item' href='#'>
											Something else here
										</a>
									</div>
								</li>
							</ul>
						</div>
					</nav>

					<div className='container-fluid'>{children}</div>
				</div>
			</div>
		</>
	);
};

export default AdminHeader;
