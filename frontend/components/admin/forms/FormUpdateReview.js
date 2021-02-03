import { useEffect, useState } from 'react';
import { listeOneReview, updateReview } from '../../../actions/reviewActions';
import { Spinner, Alert } from 'reactstrap';
import { listGitesNoms } from '../../../actions/giteActions';
import { getCookie } from '../../../actions/authActions';
import { useForm } from 'react-hook-form';
import Router from 'next/router';
import { withRouter } from 'next/router';

const FormUpdateReview = ({ preloadedValues, router }) => {
	const token = getCookie('token');

	const { register, handleSubmit } = useForm({
		defaultValues: preloadedValues,
	});

	const [values, setValues] = useState({
		client: '',
		giteConcerne: '',
		commentaire: '',
		note: '',
		success: '',
		loading: false,
		error: '',
	});
	const { success, loading, error, giteConcerne } = values;
	const [gites, setGites] = useState([]);

	const listDesGites = () => {
		listGitesNoms().then((data) => {
			console.log('id', router.query.id);
			// console.log('data nom vaut', data);
			if (data.error) {
				console.log(error);
			} else {
				setGites(...gites, data);
			}
		});
	};

	const listDetailReview = () => {
		console.log('id', router.query.id);
		const ident = router.query.id;
		listeOneReview(ident, token).then((data) => {
			console.log('data review vaut', data.giteConcerne);
			if (data.error) {
				console.log(data.error);
			} else {
				const giteConc = data.giteConcerne;
				setValues({ ...values, giteConcerne: giteConc });
			}
		});
	};

	useEffect(() => {
		listDetailReview();
		listDesGites();
	}, []);

	const onSubmit = async (data) => {
		setValues({ ...values, loading: true });
		console.log('data vaut =>', data);
		updateReview(data, router.query.id, token).then((result) => {
			console.log('result vaut =>', result);
			if (result.error) {
				console.log('une grosse erreur');
				setValues({ ...values, error: result.error });
			} else {
				setValues({
					...values,
					client: '',
					giteConcerne: '',
					commentaire: '',
					note: '',
					success: true,
					loading: false,
				});
				setTimeout(() => {
					Router.push('/admin/gestionReviews');
				}, 3000);
			}
		});
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='row'>
					<div className='col-md-12'>
						<div className='form-group'>
							<label className='text-muted'>
								Selection du gîte*
							</label>
							<select
								ref={register({ required: true })}
								name='giteConcerne'
								// value={giteConcerne}
								className='custom-select mr-sm-2'>
								<option value=''>Gîte...</option>
								{gites.map((gite, i) => (
									<option
										key={i}
										value={gite.slug}
										selected={
											gite.slug === giteConcerne &&
											'selected'
										}>
										{gite.nom}
									</option>
								))}
							</select>
						</div>
						<div className='form-group'>
							<label className='text-muted'>
								Nom & première lettre du prénom du client (pour
								l'anonymat des commentaires)*
							</label>
							<input
								type='text'
								name='client'
								ref={register({ required: true })}
								// value={client}
								className='form-control'
								c
							/>
						</div>
						<div className='form-group'>
							<label className='text-muted'>Note sur 5 *</label>
							<select
								ref={register({ required: true })}
								name='note'
								className='custom-select mr-sm-2'>
								<option value=''>Votre note...</option>
								<option value='1'>1 - Très mauvais</option>
								<option value='2'>2 - Mauvais</option>
								<option value='3'>3 - Moyen</option>
								<option value='4'>4 - Bon</option>
								<option value='5'>5 - Très bon</option>
							</select>
						</div>
						<div className='form-group'>
							<label className='text-muted'>Commentaire</label>
							<textarea
								type='text'
								name='commentaire'
								ref={register()}
								// value={commentaire}
								className='form-control'
								cols='30'
								rows='5'></textarea>
						</div>
					</div>
				</div>
				{success && (
					<Alert color='success'>
						La review a bien été modifiée, redirection en cours...
					</Alert>
				)}
				{loading && (
					<div className='alert alert-success'>
						<Spinner />
					</div>
				)}
				{error && <Alert color='success'>{error}</Alert>}
				<div>
					<button type='submit' className='btn btn-info'>
						Créer ce commentaire
					</button>
				</div>
			</form>
		</>
	);
};

// export async function getServerSideProps(context) {
// 	listeOneReview().then((data) => {
// 		if (data.error) {
// 			console.log(data.error);
// 		} else {
// 			return {
// 				props: {
// 					gite: data,
// 				},
// 			};
// 		}
// 	});
// }

export default withRouter(FormUpdateReview);
