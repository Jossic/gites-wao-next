import AdminHeader from '../../../components/layout/AdminHeader';
import Admin from '../../../components/auth/Admin';
import ListMailer from '../../../components/admin/lists/ListMailer';
import { listAllMailers } from '../../../actions/mailerActions';

const Mailer = ({ mailers }) => {
	//
	return (
		<>
			<AdminHeader>
				<Admin>
					{/* Fil d'ariane */}
					<h2 style={{ color: 'white' }}>Liste des mailers</h2>

					<hr />
					<ListMailer mailers={mailers} />
				</Admin>
			</AdminHeader>
		</>
	);
};

export async function getServerSideProps(context) {
	const token = context.req.cookies.token;
	console.log(token);
	const res1 = await listAllMailers(token);
	console.log(res1);
	const mailers = await res1;

	return {
		props: {
			mailers,
		},
	};
}

export default Mailer;
