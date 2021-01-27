import { useEffect, useState } from 'react';
import { updateQR } from '../../actions/giteActions';
import { Spinner } from 'reactstrap';
import { getCookie } from '../../actions/authActions';
import { useForm } from 'react-hook-form';
import Router from 'next/router';
import { withRouter } from 'next/router';

const FormUpdateQR = ({ preloadedValues, router }) => {
	const token = getCookie('token');

	const { register, handleSubmit } = useForm({
		defaultValues: preloadedValues,
	});

	const [values, setValues] = useState({
		question: '',
		reponse: '',
		success: '',
		loading: false,
		error: '',
	});
	const { success, loading, error } = values;

	const onSubmit = async (data) => {
		setValues({ ...values, loading: true });
		console.log('data vaut =>', data);
		updateQR(data, router.query.id, token).then((result) => {
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
				}, 2000);
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
								className='form-control'
								cols='30'
								rows='5'></textarea>
						</div>
					</div>
				</div>
				{success && (
					<div className='alert alert-success'>
						La question/réponse à bien été modifiée, redirection en
						cours...
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
						Modifier cette q/r
					</button>
				</div>
			</form>
		</>
	);
};

export default withRouter(FormUpdateQR);
