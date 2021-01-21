import { useEffect, useState } from 'react';
import { savePhotos } from '../../actions/giteActions';
import { getCookie } from '../../actions/authActions';

const FormCreateGite = () => {
	const [values, setValues] = useState({
		nom: '',
		photos: '',
		error: '',
		success: '',
		loading: false,
		formData: '',
	});

	const token = getCookie('token');
	const { nom, photos, formData } = values;

	useEffect(() => {
		setValues({ ...values, formData: new FormData() });
	}, []);

	const handleChange = (name) => (e) => {
		formData.set(name, e.target.files);
		setValues({ ...values, photos: e.target.files, formData, error: '' });
	};

	const envoiPhoto = (e) => {
		e.preventDefault();
		setValues({ ...values, loading: true });
		console.log(formData);
		savePhotos(formData, token).then((data) => {
			if (data.error) {
				setValues({ ...values, error: data.error });
			} else {
				setValues({
					...values,
					nom: '',
					error: '',
					photos: '',
					success: `Les photos ont bien été envoyées`,
					loading: false,
				});
			}
		});
	};
	return (
		<>
			<form onSubmit={envoiPhoto}>
				<div className='row'>
					<div className='col-md-8'></div>
					<div className='col-md-4'>
						<fieldset className='border p-2'>
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
						</fieldset>
					</div>
				</div>
				<div>
					<button type='submit' className='btn btn-info'>
						Ajouter ces images
					</button>
				</div>
			</form>
		</>
	);
};

export default FormCreateGite;
