import Admin from '../../../../components/auth/Admin';
import AdminHeader from '../../../../components/layout/AdminHeader';
import FormUpdateMailer from '../../../../components/admin/forms/FormUpdateMailer';
import { Button, Grid } from '@material-ui/core';
import BackspaceIcon from '@material-ui/icons/Backspace';
import Link from 'next/link';
import { listMailerById } from '../../../../actions/mailerActions';

const UpdateMailer = ({ mailer }) => {
	return (
		<>
			<AdminHeader>
				<Admin>
					<Grid
						container
						direction='row'
						justify='space-between'
						alignItems='center'
						style={{ padding: '10px' }}>
						<Grid item>
							<h2 style={{ color: 'white' }}>
								Formulaire d'ajout d'un mailer
							</h2>
						</Grid>
						<Grid item>
							<Button variant='contained' color='primary'>
								<Link href='/admin/mailer'>
									<a
										style={{
											textDecoration: 'none',
											color: 'white',
										}}>
										<BackspaceIcon /> Retour
									</a>
								</Link>
							</Button>
						</Grid>
					</Grid>
					<FormUpdateMailer preloadedValues={mailer} />
				</Admin>
			</AdminHeader>
		</>
	);
};

export async function getServerSideProps(context) {
	const token = context.req.cookies.token;
	const res1 = await listMailerById(context.params.id, token);
	const mailer = await res1;

	return {
		props: {
			mailer,
		},
	};
}

export default UpdateMailer;
