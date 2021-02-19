import AdminHeader from '../../../components/layout/AdminHeader';
import Admin from '../../../components/auth/Admin';
import ListUsers from '../../../components/admin/lists/ListUsers';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Button, Grid } from '@material-ui/core';
import Link from 'next/link';
import { listAllUsers } from '../../../actions/userActions';

const Users = ({ users }) => {
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
								Liste des utilisateurs
							</h2>
						</Grid>
						<Grid item>
							<Button variant='contained' color='primary'>
								<Link href='/admin/crud/users/create'>
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
					<ListUsers users={users} />
				</Admin>
			</AdminHeader>
		</>
	);
};

export async function getServerSideProps(context) {
	const token = context.req.cookies.token;
	const res1 = await listAllUsers(token);
	const users = await res1;

	return {
		props: {
			users,
		},
	};
}

export default Users;
