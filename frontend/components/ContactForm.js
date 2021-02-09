import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Spinner } from 'reactstrap';
import ReCAPTCHA from 'react-google-recaptcha';
import { RECAPTCHA_SECRET_KEY } from '../config';
import { createMessage } from '../actions/messageActions';
import Router from 'next/router';

const ContactForm = () => {
	const { register, handleSubmit } = useForm({
		defaultValues: {
			nom: 'Test',
			mail: 'mail@mail.com',
			tel: '0606060606',
			msg: 'lorem lorem',
		},
	});
	const reRef = useRef();

	const [values, setValues] = useState({
		loading: false,
		success: '',
		error: '',
		text: '',
	});
	const { success, loading, error, text } = values;

	const onSubmit = async (data) => {
		data.token = await reRef.current.executeAsync();
		reRef.current.reset();
		setValues({ ...values, loading: true });
		createMessage(data).then((result) => {
			if (result.error) {
				setValues({ ...values, error: result.error });
			} else {
				setValues({
					...values,
					success: true,
					loading: false,
					text: result.text,
				});
				setTimeout(() => {
					Router.push('/');
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
							<label htmlFor='exampleFormControlInput1'>
								Téléphone
							</label>
							<input
								type='tel'
								className='form-control'
								name='tel'
								ref={register({ required: true })}
							/>
						</div>

						<div className='form-group'>
							<label htmlFor='exampleFormControlTextarea1'>
								Votre message
							</label>
							<textarea
								className='form-control'
								name='msg'
								rows='3'
								ref={register({ required: true })}></textarea>
						</div>
						<ReCAPTCHA
							sitekey={RECAPTCHA_SECRET_KEY}
							ref={reRef}
							size='invisible'
							// onChange={onChange}
						/>
						{success && <Alert color='success'>{text}</Alert>}
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
