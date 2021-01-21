import { Table } from 'reactstrap';
import { listeDesImagesParGite } from '../../actions/giteActions';
import { useEffect, useState } from 'react';
import { API } from '../../config';
import Link from 'next/link';

const ListImages = () => {
	const [gites, setGites] = useState([]);

	const listerLesImages = () => {
		// listeDesImagesParGite().then((data) => {
		// 	if (data.error) {
		// 		console.log(error);
		// 	} else {
		// 		console.log('on est ok');
		// 		setGites(...gites, data);
		// 	}
		// });
	};

	useEffect(() => {
		listerLesImages();
	}, []);

	const deleteConfirm = (slug) => {
		let answer = window.confirm(
			'Cette opération est irréversible, Etes-vous sur de vouloir supprimer cet article ?'
		);
		if (answer) {
			// deleteGite(slug);
			console.log('Suppression');
		}
	};

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
								<Link href={`/admin/crud/gite/${gite.slug}`}>
									<a>
										<i
											class='fas fa-pencil-ruler'
											style={{ color: 'orange' }}></i>
									</a>
								</Link>
							</th>
							<th>
								<i
									onClick={() => deleteConfirm(gite.slug)}
									class='fas fa-trash-alt'
									style={{
										color: 'red',
										cursor: 'pointer',
									}}></i>
							</th>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
};

export default ListImages;
