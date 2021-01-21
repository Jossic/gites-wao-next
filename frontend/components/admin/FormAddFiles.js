import { useEffect, useState } from 'react';
import { createGite } from '../../actions/giteActions';
import { getCookie } from '../../actions/authActions';

const FormCreateGite = () => {
	const [values, setValues] = useState({
		nom: '',
		mtitle: '',
		presGiteSEO: '',
		texte1: '',
		detailGite: '',
		capacite: '',
		giteLogo: '',
		imagesCarrousel: '',
		autresImages: '',
		videoLink: '',
		calendrierLink: '',
		pdf: '',
		couleur1: '',
		couleur2: '',
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
		photos,
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
		console.log(e.target.value);
		let value;
		if (name === 'photos') {
			console.log(e.target);
			value = e.target.file[0];
		} else {
			value = e.target.value;
		}

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
					...values,
					nom: '',
					mtitle: '',
					presGiteSEO: '',
					texte1: '',
					detailGite: '',
					capacite: '',
					photos: '',
					videoLink: '',
					calendrierLink: '',
					pdf: '',
					couleur1: '',
					couleur2: '',
					error: '',
					success: `Le gite "${data.nom}" a bien été ajouté`,
					loading: false,
				});
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
								className='form-control'
								onChange={handleChange('nom')}
							/>
						</div>
						<div className='form-group'>
							<label className='text-muted'>Meta Title</label>
							<input
								type='text'
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
								className='form-control'
								onChange={handleChange('presGiteSEO')}
								cols='30'
								rows='4'></textarea>
						</div>

						<div className='form-group'>
							<label className='text-muted'>Texte du gîte</label>
							<textarea
								type='text'
								className='form-control'
								onChange={handleChange('texte1')}
								cols='30'
								rows='4'></textarea>
						</div>
						<div className='form-group'>
							<label className='text-muted'>Détail du gîte</label>
							<textarea
								type='text'
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
									className='form-control'
									onChange={handleChange('couleur1')}
								/>
							</div>
							<div className='form-group'>
								<label className='text-muted'>
									Couleur du texte (noir)
								</label>
								<input
									type='color'
									className='form-control'
									onChange={handleChange('couleur2')}
								/>
							</div>
						</fieldset>
					</div>
				</div>
				<div>
					<button type='submit' className='btn btn-info'>
						Ajouter ces fichiers
					</button>
				</div>
			</form>
		</>
	);
};

export default FormCreateGite;
