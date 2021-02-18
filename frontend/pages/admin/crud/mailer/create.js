import Admin from '../../../../components/auth/Admin';
import AdminHeader from '../../../../components/layout/AdminHeader';
import FormCreateMailer from '../../../../components/admin/forms/FormCreateMailer';
import { Button, Grid } from '@material-ui/core';
import BackspaceIcon from '@material-ui/icons/Backspace';
import Link from 'next/link';
const create = () => {
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
					<FormCreateMailer />
				</Admin>
			</AdminHeader>
		</>
	);
};

export default create;
