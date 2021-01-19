import axios from 'axios';
import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const listGiteDetails = async (slug) => {
	try {
		const { data } = await axios.get(`${API}/gite/${slug}`);
		// console.log(data);
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const listeDesGites = () => {
	return fetch(`${API}/gites`, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const listGitesNoms = () => {
	return fetch(`${API}/gites/noms`, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));

	// try {
	// 	const { data } = await axios.get(`${API}/gite`);
	// 	return data;
	// } catch (error) {
	// 	console.error(error);
	// }
};
