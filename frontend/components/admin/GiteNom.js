import { useState, useEffect } from 'react';
import { listGiteById } from '../../actions/giteActions';

const GiteNom = ({ value }) => {
	const [gite, setGite] = useState({});

	const ListerUnGite = () => {
		listGiteById(value).then((data) => {
			if (data.error) {
				console.log(error);
			} else {
				setGite(data);
			}
		});
	};

	useEffect(() => {
		ListerUnGite();
	}, []);

	return <>{gite.nom}</>;
};

export default GiteNom;
