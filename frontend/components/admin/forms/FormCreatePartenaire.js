import { useState } from 'react';
import { getCookie } from '../../../actions/authActions';
import { useForm } from 'react-hook-form';
import Router from 'next/router';
import { createPartenaire } from '../../../actions/partenairesActions';
import { Alert, Spinner } from 'reactstrap';

const FormCreatePartenaire = () => {
	const token = getCookie('token');
	const { register, handleSubmit } = useForm();

	const [values, setValues] = useState({
		nom: '',
		presPartenaire: '',
		actif: '',
		loading: false,
		success: '',
		error: '',
	});
	const { success, loading, error } = values;

	const onSubmit = async (data) => {
		console.log(data);
		setValues({ ...values, loading: true });
		createPartenaire(data, token).then((result) => {
			if (result.error) {
				setValues({ ...values, error: result.error });
			} else {
				setValues({
					...values,
					success: true,
					loading: false,
				});
				setTimeout(() => {
					Router.push('/admin/gestionDivers/partenaires');
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
								Texte du lien (Catégorie)
							</label>
							<input
								type='text'
								name='nom'
								ref={register({ required: true })}
								className='form-control'
							/>
						</div>
						<div className='form-group'>
							<label className='text-muted'>
								Descriptif (facultatif)
							</label>
							<input
								type='text'
								name='presPartenaire'
								ref={register()}
								className='form-control'
							/>
						</div>

						<div className='custom-control custom-switch'>
							<input
								className='custom-control-input'
								type='checkbox'
								name='actif'
								id='flexSwitchCheckDefault'
								ref={register()}
							/>
							<label
								className='custom-control-label pb-3'
								for='flexSwitchCheckDefault'>
								Actif
							</label>
						</div>
					</div>
				</div>
				{success && (
					<Alert color='success'>
						La catégorie a bien été ajoutée, redirection en cours...
					</Alert>
				)}
				{loading && <Spinner />}
				{error && <Alert color='danger'>{error}</Alert>}
				<div>
					<button type='submit' className='btn btn-info'>
						Créer cette catégorie
					</button>
				</div>
			</form>
		</>
	);
};

export default FormCreatePartenaire;
