import { useState, useEffect } from 'react';
import { getCookie } from '../../actions/authActions';
import { getClientById } from '../../actions/clientActions';

const ClientNom = ({ value }) => {
	const [client, setClient] = useState({});

	const token = getCookie('token');

	const listerUnClient = () => {
		getClientById(value).then((data, token) => {
			if (data.error) {
				console.log(error);
			} else {
				setClient(data);
			}
		});
	};

	useEffect(() => {
		listerUnClient();
	}, []);

	return <>{client.nom}</>;
};

export default ClientNom;
