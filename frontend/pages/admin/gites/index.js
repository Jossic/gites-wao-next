import AdminHeader from '../../../components/layout/AdminHeader';
import Link from 'next/link';
import { Button, Grid } from '@material-ui/core';
import ListGites from '../../../components/admin/lists/ListGites';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Admin from '../../../components/auth/Admin';
import { listeDesGites } from '../../../actions/giteActions';

const Gites = ({ gites }) => {
	return (
		<>
			<AdminHeader>
				<Admin>
					{/* Fil d'ariane */}
					<Grid
						container
						direction='row'
						justify='space-between'
						alignItems='center'
						style={{ padding: '10px' }}>
						<Grid item>
							<h2 style={{ color: 'white' }}>
								Gestion des infos liées aux gîtes
							</h2>
						</Grid>
						<Grid item>
							<Button variant='contained' color='primary'>
								<Link href='/admin/crud/gite/create'>
									<a
										style={{
											textDecoration: 'none',
											color: 'white',
										}}>
										<AddBoxIcon /> Créer
									</a>
								</Link>
							</Button>
						</Grid>
					</Grid>
					<hr />
					<ListGites gites={gites} />
				</Admin>
			</AdminHeader>
		</>
	);
};

export async function getServerSideProps(context) {
	const res1 = await listeDesGites();
	const gites = await res1;

	return {
		props: {
			gites,
		},
	};
}

export default Gites;
