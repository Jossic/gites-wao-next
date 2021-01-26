import { Table } from 'reactstrap';
import { listeDesGites } from '../../actions/giteActions';
import { useEffect, useState } from 'react';
import { API } from '../../config';
import Link from 'next/link';

const ListPages = () => {
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
						<th>Nom de la page</th>
						<th>Menu</th>
						{/* <th>Vignette</th>
						<th>Capacité</th> */}
						<th colSpan='2'>Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr className='mt-5'>
						<th>Alentours</th>
						<th>Divers</th>
						<th></th>
						<th></th>
						<th>
							<Link href={`/admin/crud/gite/${''}`}>
								<a>
									<i
										className='fas fa-pencil-ruler'
										style={{ color: 'orange' }}></i>
								</a>
							</Link>
						</th>
						<th>
							<i
								onClick={() => deleteConfirm('')}
								className='fas fa-trash-alt'
								style={{
									color: 'red',
									cursor: 'pointer',
								}}></i>
						</th>
					</tr>
					<tr className='mt-5'>
						<th>F.A.Q.</th>
						<th>Divers</th>
						<th></th>
						<th></th>
						<th>
							<Link href={`/admin/crud/gite/${''}`}>
								<a>
									<i
										className='fas fa-pencil-ruler'
										style={{ color: 'orange' }}></i>
								</a>
							</Link>
						</th>
						<th>
							<i
								onClick={() => deleteConfirm('')}
								className='fas fa-trash-alt'
								style={{
									color: 'red',
									cursor: 'pointer',
								}}></i>
						</th>
					</tr>
					<tr className='mt-5'>
						<th>Restauration</th>
						<th>Partenaires</th>
						<th></th>
						<th></th>
						<th>
							<Link href={`/admin/crud/gite/${''}`}>
								<a>
									<i
										className='fas fa-pencil-ruler'
										style={{ color: 'orange' }}></i>
								</a>
							</Link>
						</th>
						<th>
							<i
								onClick={() => deleteConfirm('')}
								className='fas fa-trash-alt'
								style={{
									color: 'red',
									cursor: 'pointer',
								}}></i>
						</th>
					</tr>
					<tr className='mt-5'>
						<th>Terroir</th>
						<th>Partenaires</th>
						<th></th>
						<th></th>
						<th>
							<Link href={`/admin/crud/gite/${''}`}>
								<a>
									<i
										className='fas fa-pencil-ruler'
										style={{ color: 'orange' }}></i>
								</a>
							</Link>
						</th>
						<th>
							<i
								onClick={() => deleteConfirm('')}
								className='fas fa-trash-alt'
								style={{
									color: 'red',
									cursor: 'pointer',
								}}></i>
						</th>
					</tr>
					<tr className='mt-5'>
						<th>Adresses utiles</th>
						<th>Partenaires</th>
						<th></th>
						<th></th>
						<th>
							<Link href={`/admin/crud/gite/${''}`}>
								<a>
									<i
										className='fas fa-pencil-ruler'
										style={{ color: 'orange' }}></i>
								</a>
							</Link>
						</th>
						<th>
							<i
								onClick={() => deleteConfirm('')}
								className='fas fa-trash-alt'
								style={{
									color: 'red',
									cursor: 'pointer',
								}}></i>
						</th>
					</tr>
					<tr className='mt-5'>
						<th>Festi'Buz</th>
						<th>Partenaires</th>
						<th></th>
						<th></th>
						<th>
							<Link href={`/admin/crud/gite/${''}`}>
								<a>
									<i
										className='fas fa-pencil-ruler'
										style={{ color: 'orange' }}></i>
								</a>
							</Link>
						</th>
						<th>
							<i
								onClick={() => deleteConfirm('')}
								className='fas fa-trash-alt'
								style={{
									color: 'red',
									cursor: 'pointer',
								}}></i>
						</th>
					</tr>
					<tr className='mt-5'>
						<th>Labels</th>
						<th>Partenaires</th>
						<th></th>
						<th></th>
						<th>
							<Link href={`/admin/crud/gite/${''}`}>
								<a>
									<i
										className='fas fa-pencil-ruler'
										style={{ color: 'orange' }}></i>
								</a>
							</Link>
						</th>
						<th>
							<i
								onClick={() => deleteConfirm('')}
								className='fas fa-trash-alt'
								style={{
									color: 'red',
									cursor: 'pointer',
								}}></i>
						</th>
					</tr>
					<tr className='mt-5'>
						<th>Contact</th>
						<th>Contact</th>
						<th></th>
						<th></th>
						<th>
							<Link href={`/admin/crud/gite/${''}`}>
								<a>
									<i
										className='fas fa-pencil-ruler'
										style={{ color: 'orange' }}></i>
								</a>
							</Link>
						</th>
						<th>
							<i
								onClick={() => deleteConfirm('')}
								className='fas fa-trash-alt'
								style={{
									color: 'red',
									cursor: 'pointer',
								}}></i>
						</th>
					</tr>
					<tr className='mt-5'>
						<th>Reserver</th>
						<th>Reserver</th>
						<th></th>
						<th></th>
						<th>
							<Link href={`/admin/crud/gite/${''}`}>
								<a>
									<i
										className='fas fa-pencil-ruler'
										style={{ color: 'orange' }}></i>
								</a>
							</Link>
						</th>
						<th>
							<i
								onClick={() => deleteConfirm('')}
								className='fas fa-trash-alt'
								style={{
									color: 'red',
									cursor: 'pointer',
								}}></i>
						</th>
					</tr>
					<tr className='mt-5'>
						<th>Tarifs</th>
						<th>Tarifs</th>
						<th></th>
						<th></th>
						<th>
							<Link href={`/admin/crud/gite/${''}`}>
								<a>
									<i
										className='fas fa-pencil-ruler'
										style={{ color: 'orange' }}></i>
								</a>
							</Link>
						</th>
						<th>
							<i
								onClick={() => deleteConfirm('')}
								className='fas fa-trash-alt'
								style={{
									color: 'red',
									cursor: 'pointer',
								}}></i>
						</th>
					</tr>
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

export default ListPages;
