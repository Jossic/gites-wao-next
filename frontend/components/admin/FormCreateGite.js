import { useEffect, useState } from 'react';
import { createGite } from '../../actions/giteActions';
import { getCookie } from '../../actions/authActions';
import Router from 'next/router';

const FormCreateGite = () => {
	const [values, setValues] = useState({
		nom: '',
		mtitle: '',
		presGiteSEO: '',
		texte1: '',
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
		texte1,
		detailGite,
		capacite,
		videoLink,
		calendrierLink,
		pdf,
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

	const handleChange = (name) => (e) => {
		let value = e.target.value;

		formData.set(name, value);
		setValues({ ...values, [name]: value, formData, error: '' });
	};

	const creerGite = (e) => {
		e.preventDefault();
		setValues({ ...values, loading: true });
		createGite(formData, token).then((data) => {
			if (data.error) {
				setValues({ ...values, error: data.error });
			} else {
				setValues({
					nom: '',
					mtitle: '',
					presGiteSEO: '',
					texte1: '',
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
			<form onSubmit={creerGite}>
				<div className='row'>
					<div className='col-md-8'>
						<div className='form-group'>
							<label className='text-muted'>Nom du gîte</label>
							<input
								type='text'
								value={nom}
								className='form-control'
								onChange={handleChange('nom')}
							/>
						</div>
						<div className='form-group'>
							<label className='text-muted'>Meta Title</label>
							<input
								type='text'
								value={mtitle}
								className='form-control'
								onChange={handleChange('mtitle')}
							/>
						</div>
						<div className='form-group'>
							<label className='text-muted'>
								Méta-Description (présentation SEO du gîte pour
								Google)
							</label>
							<textarea
								type='text'
								value={presGiteSEO}
								className='form-control'
								onChange={handleChange('presGiteSEO')}
								cols='30'
								rows='4'></textarea>
						</div>

						<div className='form-group'>
							<label className='text-muted'>Texte du gîte</label>
							<textarea
								type='text'
								value={texte1}
								className='form-control'
								onChange={handleChange('texte1')}
								cols='30'
								rows='4'></textarea>
						</div>
						<div className='form-group'>
							<label className='text-muted'>Détail du gîte</label>
							<textarea
								type='text'
								value={detailGite}
								className='form-control'
								onChange={handleChange('detailGite')}
								cols='30'
								rows='4'></textarea>
						</div>
						<div className='form-group'>
							<label className='text-muted'>
								Capacité du gîte
							</label>
							<input
								type='number'
								value={capacite}
								className='form-control'
								onChange={handleChange('capacite')}
							/>
						</div>
					</div>
					<div className='col-md-4'>
						{/* <fieldset className='border p-2'>
							<legend className='w-auto'>Images</legend>
							<div className='form-group'>
								<label className='btn btn-outline-info'>
									Photos
									<input
										onChange={handleChange('photos')}
										type='file'
										accept='image/*'
										multiple
										hidden
									/>
								</label>
							</div>
						</fieldset> */}
						<fieldset className='border p-2'>
							<legend className='w-auto'>Liens</legend>
							<div className='form-group'>
								<label className='text-muted'>
									Lien vidéo YouTube
								</label>
								<input
									type='text'
									value={videoLink}
									className='form-control'
									onChange={handleChange('videoLink')}
								/>
							</div>
							<div className='form-group'>
								<label className='text-muted'>
									Lien du calendrier
								</label>
								<input
									type='text'
									value={calendrierLink}
									className='form-control'
									onChange={handleChange('calendrierLink')}
								/>
							</div>
						</fieldset>
						{/* <fieldset className='border p-2'>
							<legend className='w-auto'>Fichiers</legend>
							<div className='form-group'>
								<label className='btn btn-outline-info'>
									Fichiers PDF
									<input
										onChange={handleChange('pdf')}
										type='file'
										accept='.pdf'
										hidden
									/>
								</label>
							</div>
						</fieldset> */}
						<fieldset className='border p-2'>
							<legend className='w-auto'>Couleurs</legend>
							<div className='form-group'>
								<label className='text-muted'>
									Couleur de fond
								</label>
								<input
									type='color'
									value={couleur1}
									className='form-control'
									onChange={handleChange('couleur1')}
								/>
							</div>
							<div className='form-group'>
								<label className='text-muted'>
									Couleur du texte (noir par défault)
								</label>
								<input
									type='color'
									value={couleur2}
									className='form-control'
									onChange={handleChange('couleur2')}
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
