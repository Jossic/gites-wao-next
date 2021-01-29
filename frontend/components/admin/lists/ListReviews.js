import { Table } from 'reactstrap';
import { listReviews, removeReview } from '../../../actions/reviewActions';
import { useEffect, useState } from 'react';
import Note from '../Note';
import { getCookie } from '../../../actions/authActions';
import { Alert, Spinner } from 'reactstrap';
import Link from 'next/link';

const ListReviews = () => {
	const token = getCookie('token');
	const [reviews, setReviews] = useState([]);

	const [values, setvalues] = useState({
		loading: false,
		error: '',
		success: '',
		message: '',
	});

	const { loading, success, error, message } = values;

	const listerLesReviews = () => {
		listReviews().then((data) => {
			if (data.error) {
				console.log(error);
			} else {
				setReviews(...reviews, data);
			}
		});
	};

	useEffect(() => {
		listerLesReviews();
	}, [success]);

	const deleteReview = (id) => {
		setvalues({ ...values, loading: true });
		console.log('id', id);
		removeReview(id, token).then((data) => {
			console.log('data vaut', data);
			if (data.error) {
				setvalues({
					...values,
					loading: false,
					error: true,
					success: false,
				});
			} else {
				setvalues({
					...values,
					loading: false,
					error: '',
					success: true,
					message: data.message,
				});
			}
		});
	};

	const deleteConfirm = (id) => {
		let answer = window.confirm(
			'Cette opération est irréversible, Etes-vous sur de vouloir supprimer cet review ?'
		);
		if (answer) {
			deleteReview(id);
		}
	};

	return (
		<>
			{loading && <Spinner />}
			{success && <Alert color='success'>{message}</Alert>}
			{error && <Alert color='danger'>Une erreur est survenue</Alert>}
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

							<th>{review.giteConcerne}</th>
							<th>{`${review.commentaire.substring(
								0,
								18
							)}...`}</th>
							<th>
								<Note value={review.note} />
							</th>
							<th>
								<Link
									href={`/admin/crud/divers/review/${review._id}`}>
									<a>
										<i
											class='fas fa-pencil-ruler'
											style={{ color: 'orange' }}></i>
									</a>
								</Link>
							</th>
							<th>
								<i
									onClick={() => deleteConfirm(review._id)}
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
