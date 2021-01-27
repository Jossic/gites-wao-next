import { listGitesNoms } from '../../actions/giteActions';
import React from 'react';
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

	const ref = React.createRef();

	const [components, setComponents] = useState('Step 1');

	const handlePrec = (comp) => {};

	const handleSuiv = (comp) => {};

	useEffect(() => {
		listDesGites();
	}, []);

	return (
		<div className='container'>
			<form>
				{components === 'Step 1' && (
					<Step1
						ref={ref}
						gites={gites}
						suivant={handleSuiv('Step 2')}
					/>
				)}
				{components === 'Step 2' && (
					<Step2
						ref={ref}
						precedent={handlePrec('Step 1')}
						suivant={handleSuiv('Step 3')}
					/>
				)}
				{components === 'Step 3' && (
					<Step3
						ref={ref}
						precedent={handlePrec('Step 2')}
						suivant={handleSuiv('Recap')}
					/>
				)}
				{components === 'Recap' && (
					<Recap ref={ref} precedent={handlePrec('Step 3')} />
				)}
			</form>
		</div>
	);
};

export default ReservationForm;
