import { useEffect, useState } from 'react';
import { authenticate, isAuth, login } from '../../actions/authActions';
import Router from 'next/router';
import Link from 'next/link';
// import LoginGoogle from './LoginGoogle';

const SigninComponent = () => {
	const [values, setvalues] = useState({
		email: '',
		password: '',
		isAdmin: false,
		error: '',
		loading: false,
		message: '',
		showForm: true,
	});

	const {
		email,
		password,
		isAdmin,
		error,
		loading,
		message,
		showForm,
	} = values;

	useEffect(() => {
		isAuth() && Router.push('/');
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		setvalues({ ...values, loading: true, error: false });
		const user = { email, password };

		login(user).then((data) => {
			if (data.error) {
				setvalues({ ...values, error: data.error, loading: false });
			} else {
				authenticate(data, () => {
					if (isAuth() && isAdmin) {
						Router.push('/admin');
					} else {
						Router.push('/user');
					}
				});
			}
		});
	};

	const handleChange = (val) => (e) => {
		setvalues({ ...values, error: false, [val]: e.target.value });
	};

	const showLoading = () =>
		loading ? <div className='alert alert-info'>Loading...</div> : '';
	const showError = () =>
		error ? <div className='alert alert-danger'>{error}</div> : '';
	const showMessage = () =>
		message ? <div className='alert alert-info'>{message}</div> : '';

	const signinForm = () => {
		return (
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<input
						value={email}
						onChange={handleChange('email')}
						type='email'
						className='form-control'
						placeholder='Entrez votre email'
					/>
				</div>

				<div className='form-group'>
					<input
						value={password}
						onChange={handleChange('password')}
						type='password'
						className='form-control'
						placeholder='Entrez votre mot de passe'
					/>
				</div>

				<div className='text-center'>
					<button className='btn btn-primary btn-lg'>
						Se connecter
					</button>
				</div>
			</form>
		);
	};

	return (
		<>
			{showError()}
			{showLoading()}
			{showMessage()}
			{/* <LoginGoogle /> */}
			{showForm && signinForm()}
			<br />
			<div className='text-center'>
				<Link href='/auth/password/forgot'>
					<a className='btn btn-outline-danger btn-sm'>
						Mot de passe oublié ?
					</a>
				</Link>
			</div>
		</>
	);
};

export default SigninComponent;
