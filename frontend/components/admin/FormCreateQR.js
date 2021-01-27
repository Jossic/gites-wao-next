import { useEffect, useState } from 'react';
import { createGite } from '../../actions/giteActions';
import { getCookie } from '../../actions/authActions';
import Router from 'next/router';

const FormCreateGite = () => {
	const token = getCookie('token');

	return (
		<>
			<form>
				<div className='row'>
					<div className='col-md-8'>
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
