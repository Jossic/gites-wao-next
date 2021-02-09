import { useEffect, useState } from 'react';
import { getCookie } from '../../../actions/authActions';
import { useForm } from 'react-hook-form';
import { withRouter } from 'next/router';
import Router from 'next/router';
import {
	createPartenaireCard,
	listePartenaireById,
} from '../../../actions/partenairesActions';
import { Alert, Spinner } from 'reactstrap';
import { listPhotosBySection } from '../../../actions/giteActions';

const FormCreatePartenaireCard = ({ router }) => {
	const token = getCookie('token');
	const [photos, setPhotos] = useState([]);

	const { register, handleSubmit } = useForm();

	const [values, setValues] = useState({
		titre: '',
		mail: '',
		tel: '',
		adresse: '',
		texte: '',
		site: '',
		image: '',
		actif: '',
		loading: false,
		success: '',
		error: '',
	});
	const { success, loading, error } = values;

	const listerLesImages = () => {
		listePartenaireById(router.query.id, token).then((result) => {
			if (result.error) {
				console.log(error);
			} else {
				listPhotosBySection(result.slug).then((data) => {
					if (data.error) {
						console.log(error);
					} else {
						setPhotos(...photos, data);
					}
				});
			}
		});
	};

	useEffect(() => {
		listerLesImages();
	}, []);

	const onSubmit = async (data) => {
		console.log('data onsubmit', data);
		setValues({ ...values, loading: true });
		createPartenaireCard(data, router.query.id, token).then((result) => {
			if (result.error) {
				setValues({ ...values, error: result.error });
			} else {
				setValues({
					...values,
					success: true,
					loading: false,
				});
				setTimeout(() => {
					Router.push(
						`/admin/gestionDivers/partenaires/manage/${router.query.id}`
					);
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
								Nom du partenaire
							</label>
							<input
								type='text'
								name='titre'
								ref={register({ required: true })}
								className='form-control'
							/>
						</div>
						<div className='form-group'>
							<label className='text-muted'>Mail</label>
							<input
								type='mail'
								name='mail'
								ref={register()}
								className='form-control'
							/>
						</div>

						<div className='form-group'>
							<label className='text-muted'>Tel</label>
							<input
								type='tel'
								name='tel'
								ref={register()}
								className='form-control'
							/>
						</div>
						<div className='form-group'>
							<label className='text-muted'>Adresse</label>
							<input
								type='text'
								name='adresse'
								ref={register()}
								className='form-control'
							/>
						</div>
						<div className='form-group'>
							<label className='text-muted'>Texte</label>
							<input
								type='text'
								name='texte'
								ref={register()}
								className='form-control'
							/>
						</div>
						<div className='form-group'>
							<label className='text-muted'>Site</label>
							<input
								type='text'
								name='site'
								ref={register()}
								className='form-control'
							/>
						</div>

						{photos.map((photo, i) => (
							<div class='form-check form-check-inline'>
								<input
									class='form-check-input'
									type='radio'
									name='image'
									id={`check${i}`}
									value={photo}
									ref={register()}
								/>
								<label
									class='form-check-label'
									htmlFor={`check${i}`}>
									<img
										className='d-block w-100'
										src={photo.location}
										alt={photo.alt}
										style={{
											height: '150px',
											width: '200px',
										}}
										className='img img-fluid'
										// width={200}
										// height={150}
									/>
								</label>
							</div>
						))}

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
						Le partenaire a bien été ajouté, redirection en cours...
					</Alert>
				)}
				{loading && <Spinner />}
				{error && <Alert color='danger'>{error}</Alert>}
				<div>
					<button type='submit' className='btn btn-info'>
						Créer ce partenaire
					</button>
				</div>
			</form>
		</>
	);
};

export default withRouter(FormCreatePartenaireCard);
