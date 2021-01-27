import { Button } from 'reactstrap';

const Step3 = ({ precedent, suivant }) => {
	return (
		<div className='d-none'>
			<h2>Vos coordonnées</h2>
			<div className='form-row mb-3'>
				<div className='col-2'>
					<select class='form-control' id='exampleFormControlSelect1'>
						<option>Mr & Mme</option>
						<option>Mr</option>
						<option>Mme</option>
						<option>Entreprise</option>
						<option>Association</option>
					</select>
				</div>

				<div className='col-5'>
					<input type='text' class='form-control' placeholder='Nom' />
				</div>
				<div className='col-5'>
					<input
						type='text'
						class='form-control'
						placeholder='Prénom'
					/>
				</div>
			</div>
			<div class='form-row mb-3'>
				<div class='col-5'>
					<input
						type='text'
						class='form-control'
						placeholder='Adresse'
					/>
				</div>
				<div class='col-2'>
					<input
						type='text'
						class='form-control'
						placeholder='Code Postal'
					/>
				</div>
				<div class='col-3'>
					<input
						type='text'
						class='form-control'
						placeholder='Ville'
					/>
				</div>
				<div class='col'>
					<input
						type='text'
						class='form-control'
						placeholder='Pays'
					/>
				</div>
			</div>
			<div class='form-row'>
				<div class='col-5'>
					<input
						type='tel'
						pattern='[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}'
						class='form-control'
						placeholder='Téléphone'
					/>
				</div>
				<div class='col-7'>
					<input
						type='mail'
						class='form-control'
						placeholder='Email'
					/>
				</div>
			</div>
			<Button onClick={precedent}>Précédent</Button>
			<Button onClick={suivant}>Suivant</Button>
		</div>
	);
};

export default Step3;
