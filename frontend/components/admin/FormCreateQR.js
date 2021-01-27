import { useEffect, useState } from 'react';
import { createQR } from '../../actions/giteActions';
import { Spinner } from 'reactstrap';
import { getCookie } from '../../actions/authActions';
import { useForm } from 'react-hook-form';
import Router from 'next/router';

const FormCreateGite = () => {
	const token = getCookie('token');
	const { register, handleSubmit, watch, errors } = useForm();

	const [values, setValues] = useState({
		question: '',
		reponse: '',
		success: '',
		loading: false,
		error: '',
	});
	const { question, reponse, success, loading, error } = values;

	const onSubmit = (data) => {
		setValues({ ...values, loading: true });
		console.log(data);
		createQR(data, token).then((result) => {
			console.log('result vaut =>', result);
			if (result.error) {
				console.log('une grosse erreur');
				setValues({ ...values, error: result.error });
			} else {
				setValues({
					...values,
					question: '',
					reponse: '',
					success: true,
					loading: false,
				});
				setTimeout(() => {
					Router.push('/admin/gestionDivers/FAQ');
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
							<label className='text-muted'>Question</label>
							<textarea
								type='text'
								name='question'
								ref={register({ required: true })}
								// value={question}
								className='form-control'
								cols='30'
								rows='2'></textarea>
						</div>
						<div className='form-group'>
							<label className='text-muted'>Réponse</label>
							<textarea
								type='text'
								name='reponse'
								ref={register({ required: true })}
								// value={reponse}
								className='form-control'
								cols='30'
								rows='5'></textarea>
						</div>
					</div>
				</div>
				{success && (
					<div className='alert alert-success'>
						La question/réponse à bien été ajoutée
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
						Créer cette q/r
					</button>
				</div>
			</form>
		</>
	);
};

export default FormCreateGite;
