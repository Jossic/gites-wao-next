import { useEffect, useState } from 'react';
import { Spinner, Alert } from 'reactstrap';
import { getCookie } from '../../../actions/authActions';
import { useForm } from 'react-hook-form';
import Router from 'next/router';
import { withRouter } from 'next/router';
import { listeOneLien, updateLien } from '../../../actions/pagesActions';

const FormUpdateReview = ({ preloadedValues, router }) => {
	const token = getCookie('token');

	const { register, handleSubmit } = useForm({
		defaultValues: preloadedValues,
	});

	const [values, setValues] = useState({
		titre: '',
		lien: '',
		categorie: '',
		actif: '',
		success: '',
		loading: false,
		error: '',
	});
	const { success, loading, error } = values;

	const listDetailLien = () => {
		const ident = router.query.id;
		listeOneLien(ident, token).then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				setValues({ ...values, data });
			}
		});
	};

	useEffect(() => {
		listDetailLien();
	}, []);

	const onSubmit = async (data) => {
		setValues({ ...values, loading: true });
		console.log('data vaut =>', data);
		updateLien(data, router.query.id, token).then((result) => {
			console.log('result vaut =>', result);
			if (result.error) {
				console.log('une grosse erreur');
				setValues({ ...values, error: result.error });
			} else {
				setValues({
					...values,
					success: true,
					loading: false,
				});
				setTimeout(() => {
					Router.push('/admin/gestionDivers/alentours');
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
							<label className='text-muted'>Texte du lien</label>
							<input
								type='text'
								name='titre'
								ref={register({ required: true })}
								className='form-control'
							/>
						</div>
						<div className='form-group'>
							<label className='text-muted'>Lien</label>
							<input
								type='text'
								name='lien'
								ref={register({ required: true })}
								className='form-control'
							/>
						</div>

						<div className='form-group'>
							<label className='text-muted'>Catégorie</label>
							<select
								ref={register({ required: true })}
								name='categorie'
								className='custom-select mr-sm-2'>
								<option value=''>Catégorie...</option>
								<option value='ardennes'>Ardennes</option>
								<option value='belgique'>Belgique</option>
								<option value='ailleurs'>Ailleurs</option>
								<option value='meuse'>Meuse</option>
							</select>
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
						Le lien a bien été modifié, redirection en cours...
					</Alert>
				)}
				{loading && <Spinner />}
				{error && <Alert color='danger'>{error}</Alert>}
				<div>
					<button type='submit' className='btn btn-info'>
						Modifier ce lien
					</button>
				</div>
			</form>
		</>
	);
};

export default withRouter(FormUpdateReview);
