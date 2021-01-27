import { Button } from 'reactstrap';

const Step2 = ({ precedent, suivant }) => {
	return (
		<div className='d-none'>
			<h2>Informations supplémentaires</h2>
			<fieldset
				style={{ border: '1px solid black' }}
				className='pl-3 pb-3'>
				<legend>
					{' '}
					<h3>
						Merci d'indiquer si vous nous avez déja contacté par :
					</h3>
				</legend>
				<div className='row'>
					<div className='col'>
						<div className='form-check'>
							<input
								className='form-check-input'
								type='checkbox'
								value=''
								id='defaultCheck1'
							/>
							<label
								className='form-check-label'
								htmlFor='defaultCheck1'>
								Mail
							</label>
						</div>
					</div>
					<div className='col'>
						<div className='form-check'>
							<input
								className='form-check-input'
								type='checkbox'
								value=''
								id='defaultCheck1'
							/>
							<label
								className='form-check-label'
								htmlFor='defaultCheck1'>
								Téléphone
							</label>
						</div>
					</div>
					<div className='col'>
						<div className='form-check'>
							<input
								className='form-check-input'
								type='checkbox'
								value=''
								id='defaultCheck1'
							/>
							<label
								className='form-check-label'
								htmlFor='defaultCheck1'>
								Abritel
							</label>
						</div>
					</div>
					<div className='col'>
						<div className='form-check'>
							<input
								className='form-check-input'
								type='checkbox'
								value=''
								id='defaultCheck1'
							/>
							<label
								className='form-check-label'
								htmlFor='defaultCheck1'>
								Leboncoin
							</label>
						</div>
					</div>
					<div className='col'>
						<div className='form-check'>
							<input
								className='form-check-input'
								type='checkbox'
								value=''
								id='defaultCheck1'
							/>
							<label
								className='form-check-label'
								htmlFor='defaultCheck1'>
								Autre
							</label>
						</div>
					</div>
				</div>
			</fieldset>
			<fieldset
				style={{ border: '1px solid black' }}
				className='pl-3 pb-3'>
				<legend>
					{' '}
					<h3>
						S'il y a des chiens, merci d'indiquer leur nombre
						(3€/jour/animal)
					</h3>
				</legend>
				<div className='form-group'>
					<input type='number' className='form-control' />
				</div>
			</fieldset>
			<fieldset
				style={{ border: '1px solid black' }}
				className='pl-3 pb-3'>
				<legend>
					{' '}
					<h3>Souhaitez-vous l'option lit fait à l'arrivée ?</h3>
				</legend>
				<div className='form-check'>
					<input
						className='form-check-input'
						type='radio'
						name='exampleRadios'
						id='exampleRadios1'
						value='option1'
						checked
					/>
					<label
						className='form-check-label'
						htmlFor='exampleRadios1'>
						Oui
					</label>
				</div>
				<div className='form-check'>
					<input
						className='form-check-input'
						type='radio'
						name='exampleRadios'
						id='exampleRadios2'
						value='option2'
					/>
					<label
						className='form-check-label'
						htmlFor='exampleRadios2'>
						Non
					</label>
				</div>
			</fieldset>
			<Button onClick={precedent}>Précédent</Button>
			<Button onClick={suivant}>Suivant</Button>
		</div>
	);
};

export default Step2;
