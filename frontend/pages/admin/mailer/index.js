import AdminHeader from '../../../components/layout/AdminHeader';
import Admin from '../../../components/auth/Admin';
import ListMailer from '../../../components/admin/lists/ListMailer';
import { listAllMailers } from '../../../actions/mailerActions';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Button, Grid } from '@material-ui/core';
import Link from 'next/link';

const Mailer = ({ mailers }) => {
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
								Liste des mailers
							</h2>
						</Grid>
						<Grid item>
							<Button variant='contained' color='primary'>
								<Link href='/admin/crud/mailer/create'>
									<a
										style={{
											textDecoration: 'none',
											color: 'white',
										}}>
										<AddBoxIcon /> Ajouter
									</a>
								</Link>
							</Button>
						</Grid>
					</Grid>
					<hr />
					<ListMailer mailers={mailers} />
				</Admin>
			</AdminHeader>
		</>
	);
};

export async function getServerSideProps(context) {
	const token = context.req.cookies.token;
	const res1 = await listAllMailers(token);
	const mailers = await res1;

	return {
		props: {
			mailers,
		},
	};
}

export default Mailer;
