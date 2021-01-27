import { Button } from 'reactstrap';

const Recap = ({ precedent }) => {
	return (
		<div className='d-none'>
			<h2>Récapitulatif</h2>

			<Button onClick={precedent}>Précédent</Button>
			{/* <Button onClick={suivant}>Suivant</Button> */}
		</div>
	);
};

export default Recap;
