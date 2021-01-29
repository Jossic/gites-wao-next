import { useEffect, useState } from 'react';
import { listGitesNoms } from '../../../actions/giteActions';
import { Spinner } from 'reactstrap';
import { getCookie } from '../../../actions/authActions';
import { useForm } from 'react-hook-form';
import Router from 'next/router';
import { createReview } from '../../../actions/reviewActions';

const FormCreateReviews = () => {
	const token = getCookie('token');
	const { register, handleSubmit } = useForm();

	const [gites, setGites] = useState([]);

	const listDesGites = () => {
		listGitesNoms().then((data) => {
			if (data.error) {
				console.log(error);
			} else {
				setGites(...gites, data);
			}
		});
	};

	useEffect(() => {
		listDesGites();
	}, []);

	const [values, setValues] = useState({
		client: '',
		note: '',
		commentaire: '',
		giteConcerne: '',
		loading: false,
		success: '',
		error: '',
	});
	const { question, reponse, success, loading, error } = values;

	const onSubmit = async (data) => {
		setValues({ ...values, loading: true });
		console.log('data vaut =>', data);
		createReview(data, token).then((result) => {
			console.log('result vaut =>', result);
			if (result.error) {
				console.log('une grosse erreur');
				setValues({ ...values, error: result.error });
			} else {
				setValues({
					...values,
					client: '',
					note: '',
					commentaire: '',
					giteConcerne: '',
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
								className='custom-select mr-sm-2'
								id='inlineFormCustomSelect'>
								<option defaultValue>Gîte...</option>
								{gites.map((gite, i) => (
									<option key={i} value={gite.slug}>
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
								className='custom-select mr-sm-2'
								id='inlineFormCustomSelect'>
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
					<div className='alert alert-success'>
						La review a bien été ajoutée, redirection en cours...
					</div>
				)}
				{loading && (
					<div className='alert alert-success'>
						<Spinner />
					</div>
				)}
				{error && <div className='alert alert-danger'>{error}</div>}
				<div>
					<button type='submit' className='btn btn-info'>
						Créer ce commentaire
					</button>
				</div>
			</form>
		</>
	);
};

export default FormCreateReviews;
