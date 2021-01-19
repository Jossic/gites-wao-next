import { createGite } from '../../actions/giteActions';

const FormCreateGite = () => {
	const handleChange = () => {
		//
	};

	const creerGite = (e) => {
		e.preventDefault();
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
								value={'nom'}
								onChange={handleChange('nom')}
							/>
						</div>
						<div className='form-group'>
							<label className='text-muted'>Meta Title</label>
							<input
								type='text'
								className='form-control'
								value={'mtitle'}
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
								value={'presGiteSEO'}
								onChange={handleChange('presGiteSEO')}
								cols='30'
								rows='4'></textarea>
						</div>

						<div className='form-group'>
							<label className='text-muted'>Texte du gîte</label>
							<input
								type='text'
								className='form-control'
								value={'texte1'}
								onChange={handleChange('texte1')}
							/>
						</div>
						<div className='form-group'>
							<label className='text-muted'>Détail du gîte</label>
							<input
								type='text'
								className='form-control'
								value={'detailGite'}
								onChange={handleChange('detailGite')}
							/>
						</div>
						<div className='form-group'>
							<label className='text-muted'>
								Capacité du gîte
							</label>
							<input
								type='text'
								className='form-control'
								value={'capacite'}
								onChange={handleChange('capacite')}
							/>
						</div>
					</div>
					<div className='col-md-4'>
						<div className='form-group'>
							<label className='btn btn-outline-info'>
								Vignette du gîte
								<input
									onChange={handleChange('giteLogo')}
									type='file'
									accept='image/*'
									hidden
								/>
							</label>
						</div>
						<div className='form-group'>
							<label className='btn btn-outline-info'>
								Images du Carrousel
								<input
									onChange={handleChange('imagesCarrousel')}
									type='file'
									accept='image/*'
									hidden
								/>
							</label>
						</div>
						<div className='form-group'>
							<label className='btn btn-outline-info'>
								Les autres images
								<input
									onChange={handleChange('autresImages')}
									type='file'
									accept='image/*'
									hidden
								/>
							</label>
						</div>
						<div className='form-group'>
							<label className='text-muted'>
								Lien vidéo YouTube
							</label>
							<input
								type='text'
								className='form-control'
								value={'videoLink'}
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
								value={'calendrierLink'}
								onChange={handleChange('calendrierLink')}
							/>
						</div>
						<div className='form-group'>
							<label className='btn btn-outline-info'>
								Fichiers PDF
								<input
									onChange={handleChange('pdf')}
									type='file'
									accept='image/*'
									hidden
								/>
							</label>
						</div>
						<div className='form-group'>
							<label className='text-muted'>
								Couleur de fond
							</label>
							<input
								type='color'
								className='form-control'
								value={'couleur1'}
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
								value={'couleur2'}
								onChange={handleChange('couleur2')}
							/>
						</div>
					</div>
				</div>
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
