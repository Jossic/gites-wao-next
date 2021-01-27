import { Button } from 'reactstrap';

const Step1 = ({ gites, suivant }) => {
	return (
		<div className=''>
			<h2>Informations sur la location</h2>

			<div class='form-group'>
				<label htmlFor='exampleFormControlSelect1'>
					Example select
				</label>
				<select class='form-control' id='exampleFormControlSelect1'>
					{gites.map((gite, i) => (
						<option key={i} value={gite.slug}>
							{gite.nom}
						</option>
					))}
				</select>
			</div>
			<div class='form-group'>
				<label>Nombre de personnes total</label>
				<input type='number' class='form-control' />
			</div>
			<div class='form-group'>
				<label>Dont enfants de moins de 18 ans</label>
				<input type='number' class='form-control' />
			</div>
			<div class='form-group'>
				<label>Date d'arrivée</label>
				<input type='date' class='form-control' />
			</div>
			<div class='form-group'>
				<label>Date de départ</label>
				<input type='date' class='form-control' />
			</div>
			{/* <Button onClick={precedent}>Précédent</Button> */}
			<Button onClick={suivant}>Suivant</Button>
		</div>
	);
};

export default Step1;
