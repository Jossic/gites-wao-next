import { withRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
	listePartenaireById,
	listePartenaireCardById,
} from '../../../../../../../actions/partenairesActions';
import FormUpdatePartenaireCard from '../../../../../../../components/admin/forms/FormUpdatePartenaireCard';
import Admin from '../../../../../../../components/auth/Admin';
import { Spinner } from 'reactstrap';
import AdminHeader from '../../../../../../../components/layout/AdminHeader';

const UpdateCard = ({ router }) => {
	// const token = getCookie('token');
	const [categorie, setCategorie] = useState('');

	const [data, setData] = useState(null);

	const recupCategorie = () => {
		listePartenaireById(router.query.id).then((result) => {
			if (result.error) {
				console.log(error);
			} else {
				setCategorie(result);
			}
		});
	};

	useEffect(() => {
		const fetchData = async () => {
			setData(
				await listePartenaireCardById(
					router.query.id,
					router.query.idCard
				)
			);
		};
		fetchData();
		recupCategorie();
	}, []);

	return (
		<>
			<AdminHeader>
				<Admin>
					<h2>
						Formulaire de modification d'un partenaire pour la
						catégorie {categorie.slug}
					</h2>
					{data ? (
						<FormUpdatePartenaireCard preloadedValues={data} />
					) : (
						<Spinner />
					)}
				</Admin>
			</AdminHeader>
		</>
	);
};

export default withRouter(UpdateCard);
