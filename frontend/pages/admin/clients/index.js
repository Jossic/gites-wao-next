import AdminHeader from '../../../components/layout/AdminHeader';
import Admin from '../../../components/auth/Admin';
import ListClients from '../../../components/admin/lists/ListClients';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Button, Grid } from '@material-ui/core';
import Link from 'next/link';
import { listAllClients } from '../../../actions/clientActions';

const Client = ({ clients }) => {
	//
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
								Liste des clients
							</h2>
						</Grid>
						<Grid item>
							{/* <Button variant='contained' color='primary'>
								<Link href='/admin/crud/mailer/create'>
									<a
										style={{
											textDecoration: 'none',
											color: 'white',
										}}>
										<AddBoxIcon /> Ajouter
									</a>
								</Link>
							</Button> */}
						</Grid>
					</Grid>
					<hr />
					<ListClients clients={clients} />
				</Admin>
			</AdminHeader>
		</>
	);
};

export async function getServerSideProps(context) {
	const token = context.req.cookies.token;
	const res1 = await listAllClients(token);
	const clients = await res1;

	return {
		props: {
			clients,
		},
	};
}

export default Client;
