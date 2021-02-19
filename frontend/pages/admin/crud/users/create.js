import Admin from '../../../../components/auth/Admin';
import AdminHeader from '../../../../components/layout/AdminHeader';
import { Button, Grid } from '@material-ui/core';
import BackspaceIcon from '@material-ui/icons/Backspace';
import Link from 'next/link';
import FormCreateUser from '../../../../components/admin/forms/FormCreateUser';

const CreateUser = () => {
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
								Formulaire d'ajout d'un utilisateur
							</h2>
						</Grid>
						<Grid item>
							<Button variant='contained' color='primary'>
								<Link href='/admin/users'>
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
					<FormCreateUser />
				</Admin>
			</AdminHeader>
		</>
	);
};

export default CreateUser;
