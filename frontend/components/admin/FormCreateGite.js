import { useEffect, useState } from 'react';
import { createGite } from '../../actions/giteActions';
import { getCookie } from '../../actions/authActions';
import { useForm } from 'react-hook-form';
import Router from 'next/router';

const FormCreateGite = () => {
	const { register, handleSubmit, watch, errors } = useForm();

	const [values, setValues] = useState({
		nom: '',
		mtitle: '',
		presGiteSEO: '',
		texteExterieur: '',
		equipementExterieur: '',
		texteInterieur: '',
		equipementInterieur: '',
		textePiscine: '',
		equipementPiscine: '',
		texte: '',
		detailGite: '',
		capacite: '',
		videoLink: '',
		calendrierLink: '',
		couleur1: '#AAAAAA',
		couleur2: '#111111',
		error: '',
		success: '',
		loading: false,
		formData: '',
	});

	const token = getCookie('token');
	const {
		nom,
		mtitle,
		presGiteSEO,
		texteExterieur,
		equipementExterieur,
		texteInterieur,
		equipementInterieur,
		textePiscine,
		equipementPiscine,
		texte,
		detailGite,
		capacite,
		videoLink,
		calendrierLink,
		couleur1,
		couleur2,
		error,
		success,
		loading,
		formData,
	} = values;

	useEffect(() => {
		setValues({ ...values, formData: new FormData() });
	}, []);

	// const handleChange = (name) => (e) => {
	// 	let value = e.target.value;

	// 	formData.set(name, value);
	// 	setValues({ ...values, [name]: value, formData, error: '' });
	// };

	const onSubmit = (data) => {
		setValues({ ...values, loading: true });
		console.log(data);
		createGite(data, token).then((data) => {
			if (data.error) {
				setValues({ ...values, error: data.error });
			} else {
				setValues({
					nom: '',
					mtitle: '',
					presGiteSEO: '',
					texte: '',
					texteExterieur: '',
					equipementExterieur: '',
					texteInterieur: '',
					equipementInterieur: '',
					textePiscine: '',
					equipementPiscine: '',
					detailGite: '',
					capacite: '',
					videoLink: '',
					calendrierLink: '',
					pdf: '',
					couleur1: '#FFFFFF',
					couleur2: '#111111',
					error: '',
					success: 'Le gîte a bien été ajouté',
					loading: false,
				});
				setTimeout(() => {
					Router.push('/admin/gestionPages');
				}, 3000);
			}
		});
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='row'>
					<div className='col-md-8'>
						<div className='form-group'>
							<label className='text-muted'>Nom du gîte</label>
							<input
								type='text'
								name={'nom'}
								className='form-control'
								ref={register({ required: true })}
							/>
						</div>
						<div className='form-group'>
							<label className='text-muted'>Meta Title</label>
							<input
								type='text'
								name={'mtitle'}
								className='form-control'
								ref={register({ required: true })}
							/>
						</div>
						<div className='form-group'>
							<label className='text-muted'>
								Méta-Description (présentation SEO du gîte pour
								Google)
							</label>
							<textarea
								type='text'
								name={'presGiteSEO'}
								className='form-control'
								ref={register({ required: true })}
								cols='30'
								rows='4'></textarea>
						</div>

						<div className='form-group'>
							<label className='text-muted'>Texte du gîte</label>
							<textarea
								type='text'
								name={'texte'}
								className='form-control'
								ref={register()}
								cols='30'
								rows='4'></textarea>
						</div>
						<div className='form-group'>
							<label className='text-muted'>
								Texte de l'extérieur
							</label>
							<textarea
								type='text'
								name={'texteExterieur'}
								className='form-control'
								ref={register()}
								cols='30'
								rows='4'></textarea>
						</div>
						<div className='form-group'>
							<label className='text-muted'>
								Texte de l'intérieur
							</label>
							<textarea
								type='text'
								name={'texteInterieur'}
								className='form-control'
								ref={register()}
								cols='30'
								rows='4'></textarea>
						</div>
						<div className='form-group'>
							<label className='text-muted'>
								Texte de la piscine
							</label>
							<textarea
								type='text'
								name={'textePiscine'}
								className='form-control'
								ref={register()}
								cols='30'
								rows='4'></textarea>
						</div>
						<div className='form-group'>
							<label className='text-muted'>Détail du gîte</label>
							<textarea
								type='text'
								name={'detailGite'}
								className='form-control'
								ref={register()}
								cols='30'
								rows='4'></textarea>
						</div>
						<div className='form-group'>
							<label className='text-muted'>
								Capacité du gîte
							</label>
							<input
								type='number'
								name={'capacite'}
								className='form-control'
								ref={register({ required: true })}
							/>
						</div>
						<div className='form-group'>
							<label className='text-muted'>
								Equipement extérieur (séparer par une virgule)
							</label>
							<input
								type='text'
								name={'equipementExterieur'}
								className='form-control'
								ref={register()}
							/>
						</div>
						<div className='form-group'>
							<label className='text-muted'>
								Equipement intérieur (séparer par une virgule)
							</label>
							<input
								type='text'
								name={'equipementInterieur'}
								className='form-control'
								ref={register()}
							/>
						</div>
						<div className='form-group'>
							<label className='text-muted'>
								Equipement Piscine (séparer par une virgule)
							</label>
							<input
								type='text'
								name={'equipementPiscine'}
								className='form-control'
								ref={register()}
							/>
						</div>
					</div>
					<div className='col-md-4'>
						<fieldset className='border p-2'>
							<legend className='w-auto'>Liens</legend>
							<div className='form-group'>
								<label className='text-muted'>
									Lien vidéo YouTube
								</label>
								<input
									type='text'
									name={'videoLink'}
									className='form-control'
									ref={register()}
								/>
							</div>
							<div className='form-group'>
								<label className='text-muted'>
									Lien du calendrier
								</label>
								<input
									type='text'
									name={'calendrierLink'}
									className='form-control'
									ref={register()}
								/>
							</div>
						</fieldset>

						<fieldset className='border p-2'>
							<legend className='w-auto'>Couleurs</legend>
							<div className='form-group'>
								<label className='text-muted'>
									Couleur de fond
								</label>
								<input
									type='color'
									name={'couleur1'}
									className='form-control'
									ref={register({ required: true })}
								/>
							</div>
							<div className='form-group'>
								<label className='text-muted'>
									Couleur du texte (noir par défault)
								</label>
								<input
									type='color'
									name={'couleur2'}
									className='form-control'
									ref={register({ required: true })}
								/>
							</div>
						</fieldset>
					</div>
				</div>
				{success && (
					<div className='alert alert-success'>
						Le gîte a bien été ajouté
					</div>
				)}
				{loading && (
					<div className='alert alert-success'>
						Chargement en cours...
					</div>
				)}
				{error && <div className='alert alert-danger'>{error}</div>}
				<div>
					<button type='submit' className='btn btn-info'>
						Créer ce gîte
					</button>
				</div>
			</form>
		</>
	);
};

export default FormCreateGite;
