import { listGitesNoms } from '../../actions/giteActions';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Recap from './Recap';
import { useEffect, useState } from 'react';

const ReservationForm = () => {
	const [gites, setGites] = useState([]);

	const listDesGites = () => {
		listGitesNoms().then((data) => {
			if (data.error) {
				console.log(error);
			} else {
				setGites(...gites, data);
			}
		});
	};

	const [components, setComponents] = useState({
		Step1: <Step1 />,
		Step2: <Step2 />,
		Step3: <Step3 />,
		Recap: <Recap />,
	});

	const showComponent = (components) => {
		setComponents({ displayedTable: components });
	};

	useEffect(() => {
		listDesGites();
	}, []);

	return (
		<div className='container'>
			<form>
				{components[displayedTable]}
				{/* <Step1 gites={gites} />
				<Step2 />
				<Step3 />
				<Recap /> */}
			</form>
		</div>
	);
};

export default ReservationForm;
