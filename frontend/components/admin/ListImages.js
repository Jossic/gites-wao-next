import { Table } from 'reactstrap';
import { listeDesImages } from '../../actions/giteActions';
import { useEffect, useState } from 'react';
import { API } from '../../config';
import Link from 'next/link';
import { getCookie } from '../../actions/authActions';

const ListImages = () => {
	const [photos, setPhotos] = useState([]);
	const token = getCookie('token');

	const listerLesImages = () => {
		listeDesImages(token).then((data) => {
			if (data.error) {
				console.log(error);
			} else {
				console.log('on est ok');
				setPhotos(...photos, data);
			}
		});
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
					{photos.map((photo) => (
						<tr className='mt-5'>
							<th>{photo._id}</th>
							<th>
								<img
									src={photo.location}
									style={{ maxHeight: 'auto', width: '100%' }}
									className='img img-fluid'
									alt={photo.name}
								/>
							</th>
							<th></th>
							<th></th>
							<th>
								<Link href={`/admin/crud/gite/${photo}`}>
									<a>
										<i
											class='fas fa-pencil-ruler'
											style={{ color: 'orange' }}></i>
									</a>
								</Link>
							</th>
							<th>
								<i
									onClick={() => deleteConfirm(photo)}
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
