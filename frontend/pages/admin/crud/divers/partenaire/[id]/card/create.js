import { withRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getCookie } from '../../../../../../../actions/authActions';
import { listePartenaireById } from '../../../../../../../actions/partenairesActions';
import FormCreatePartenaireCard from '../../../../../../../components/admin/forms/FormCreatePartenaireCard';
import Admin from '../../../../../../../components/auth/Admin';
import AdminHeader from '../../../../../../../components/layout/AdminHeader';

const CreateCard = ({ router }) => {
	const token = getCookie('token');
	const [categorie, setCategorie] = useState('');

	const recupCategorie = () => {
		//recup Section
		listePartenaireById(router.query.id, token).then((result) => {
			console.log('result', result);
			if (result.error) {
				console.log(error);
			} else {
				setCategorie(result);
			}
		});
	};

	useEffect(() => {
		recupCategorie();
	}, []);

	return (
		<>
			<AdminHeader>
				<Admin>
					<h2>
						Formulaire d'ajout d'un partenaire pour la catégorie{' '}
						{categorie.slug}
					</h2>
					<FormCreatePartenaireCard />
				</Admin>
			</AdminHeader>
		</>
	);
};

export default withRouter(CreateCard);
