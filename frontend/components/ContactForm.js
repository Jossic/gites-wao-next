import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Spinner } from 'reactstrap';

const ContactForm = () => {
	const { register, handleSubmit } = useForm();

	const [values, setValues] = useState({
		loading: false,
		success: '',
		error: '',
		message: '',
	});
	const { success, loading, error, message } = values;

	const onSubmit = (data) => {
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
					message: data.message,
				});
				setTimeout(() => {
					Router.push('/admin/gestionDivers/partenaires');
				}, 3000);
			}
		});
	};

	return (
		<div className='container mt-5 mb-5'>
			<h2>Contactez-nous</h2>
			<div className='row'>
				<div className='col-md-5'>
					<p>
						Vous souhaitez plus d'informations sur nos gîtes,
						n'hésitez pas à nous contacter
					</p>
					<p>
						Entreprise : SAS WAO <br /> 1 route de Nouart <br />{' '}
						08240 FOSSÉ
					</p>
					<p>
						Téléphone : <br /> Martine : 03 24 30 08 65 <br /> Jonas
						: 06 .. .. .. ..{' '}
					</p>
					<p>
						Mail :{' '}
						<a href='mailto:contact@gites-wao.fr'>
							contact@gites-wao.fr
						</a>
					</p>
				</div>
				<div className='col-md-7'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='form-group'>
							<label htmlFor='exampleFormControlInput1'>
								Nom prénom
							</label>
							<input
								type='text'
								className='form-control'
								name='nom'
								ref={register({ required: true })}
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='exampleFormControlInput1'>
								Mail
							</label>
							<input
								type='email'
								className='form-control'
								name='mail'
								ref={register({ required: true })}
							/>
						</div>

						<div className='form-group'>
							<label htmlFor='exampleFormControlTextarea1'>
								Votre message
							</label>
							<textarea
								className='form-control'
								name='message'
								rows='3'
								ref={register({ required: true })}></textarea>
						</div>
						{success && <Alert color='success'>{message}</Alert>}
						{loading && <Spinner />}
						{error && <Alert color='danger'>{error}</Alert>}

						<div>
							<button type='submit' className='btn btn-info'>
								Envoyer
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
