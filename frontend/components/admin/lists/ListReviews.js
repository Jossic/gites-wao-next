import { Table } from 'reactstrap';
import { listReviews } from '../../../actions/reviewActions';
import { useEffect, useState } from 'react';
import { API } from '../../../config';
import Link from 'next/link';

const ListReviews = () => {
	const [reviews, setReviews] = useState([]);

	const listerLesReviews = () => {
		listReviews().then((data) => {
			if (data.error) {
				console.log(error);
			} else {
				console.log('on est ok');
				setReviews(...reviews, data);
			}
		});
	};

	useEffect(() => {
		listerLesReviews();
	}, []);

	const deleteConfirm = (slug) => {
		let answer = window.confirm(
			'Cette opération est irréversible, Etes-vous sur de vouloir supprimer cet review ?'
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
						<th>Client</th>
						<th>Gîte</th>
						<th>Commentaire</th>
						<th>Note</th>
						<th colSpan='2'>Actions</th>
					</tr>
				</thead>
				<tbody>
					{reviews.map((review) => (
						<tr className='mt-5'>
							<th>{review._id}</th>
							<th>{review.client}</th>

							<th>{review.gite}</th>
							<th>{review.commentaire}</th>
							<th>{review.note}</th>
							<th>
								<Link href={`/admin/crud/review/${review.id}`}>
									<a>
										<i
											class='fas fa-pencil-ruler'
											style={{ color: 'orange' }}></i>
									</a>
								</Link>
							</th>
							<th>
								<i
									onClick={() => deleteConfirm(review.slug)}
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

export default ListReviews;
