import { Table } from 'reactstrap';
import { listeDesGites } from '../../actions/giteActions';
import { useEffect, useState } from 'react';
import { API } from '../../config';

const ListGites = () => {
	const [gites, setGites] = useState([]);

	const listerLesGites = () => {
		listeDesGites().then((data) => {
			if (data.error) {
				console.log(error);
			} else {
				console.log('on est ok');
				setGites(...gites, data);
			}
		});
	};

	useEffect(() => {
		listerLesGites();
	}, []);

	return (
		<>
			<Table>
				<thead>
					<tr>
						<th>#</th>
						<th>Nom</th>
						<th>Vignette</th>
						<th>Capacité</th>
						<th colSpan='2'>Actions</th>
					</tr>
				</thead>
				<tbody>
					{gites.map((gite) => (
						<tr
							style={{ backgroundColor: gite.couleur1 }}
							className='mt-5'>
							<th>{gite._id}</th>
							<th>{gite.nom}</th>
							<th>
								<img
									src={`${API}/gite/photo/${gite.slug}`}
									style={{ maxHeight: 'auto', width: '100%' }}
									className='img img-fluid'
									alt={gite.nom}
								/>
							</th>
							<th>{gite.capacite}</th>
							<th>
								<i class='fas fa-pencil-ruler'></i>
							</th>
							<th>
								<i class='fas fa-trash-alt'></i>
							</th>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
};

export async function getStaticProps(context) {
	const res = await fetch('http://localhost:8000/api/gites');
	const gites = await res.json();

	return {
		props: {
			gites,
		},
	};
}

export default ListGites;
