// import { useEffect, useState } from 'react';
// import { listeOneReview } from '../../../../../actions/reviewActions';
// import FormUpdateReview from '../../../../../components/admin/forms/FormUpdateReview';
// import Admin from '../../../../../components/auth/Admin';
// import AdminHeader from '../../../../../components/layout/AdminHeader';
// import { withRouter } from 'next/router';
// import { Spinner } from 'reactstrap';
// import { getCookie } from '../../../../../actions/authActions';

// const gestionPages = ({ router }) => {
// 	const [data, setData] = useState(null);
// 	const token = getCookie('token');

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			setData(await listeOneReview(router.query.id, token));
// 		};
// 		fetchData();
// 	}, []);

// 	return (
// 		<>
// 			<AdminHeader>
// 				<Admin>
// 					<h2>Formulaire de modification d'une review</h2>
// 					{data ? (
// 						<FormUpdateReview preloadedValues={data} />
// 					) : (
// 						<Spinner />
// 					)}
// 				</Admin>
// 			</AdminHeader>
// 		</>
// 	);
// };

// export default withRouter(gestionPages);
