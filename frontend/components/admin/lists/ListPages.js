import { Table } from 'reactstrap';
import Link from 'next/link';

const ListPages = () => {
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
							<Link href={`/admin/gestionDivers/alentours`}>
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
							<Link href={`/admin/gestionDivers/FAQ`}>
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

export default ListPages;
