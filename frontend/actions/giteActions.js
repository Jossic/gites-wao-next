import axios from 'axios';
import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const listGiteDetails = async (slug) => {
	// return fetch(`${API}/gite/${slug}`, {
	// 	method: 'GET',
	// })
	// 	.then((response) => {
	// 		console.log(response);
	// 		return response.json();
	// 	})
	// 	.catch((err) => console.log(err));

	try {
		const { data } = await axios.get(`${API}/gite/${slug}`);
		console.log(data);
		return data;
	} catch (error) {
		console.error(error);
	}
};
