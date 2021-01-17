import Layout from '../components/layout/Layout';
import { withRouter } from 'next/router';
import Link from 'next/link';
import LoginComponent from '../components/auth/LoginComponent';

const Login = ({ router }) => {
	// const showRedirectMessage = () => {
	// 	if (router.query.message) {
	// 		return (
	// 			<div className='alert alert-danger'>{router.query.message}</div>
	// 		);
	// 	} else {
	// 		return;
	// 	}
	// };
	return (
		<Layout>
			<div className='container-fluid'>
				<h2 className='text-center pt-4 pb-4'>Se connecter</h2>
				<p className='text-center mark'>
					Identifiants test admin: jossic.lapierre@gmail.com 123456
				</p>

				<div className='row'>
					<div className='col-md-6 offset-md-3'>
						{/* {showRedirectMessage()} */}
					</div>
				</div>
				<div className='row'>
					<div className='col-md-6 offset-md-3'>
						<LoginComponent />
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default withRouter(Login);
