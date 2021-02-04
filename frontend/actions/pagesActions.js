import fetch from 'isomorphic-fetch';
import { API } from '../config';
import axios from 'axios';

export const listLiens = () => {
	return fetch(`${API}/divers/alentours`, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const listLiensByCategorie = async (categorie) => {
	try {
		const { data } = await axios.get(
			`${API}/divers/alentourss/${categorie}`
		);
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const listeOneLien = (id, token) => {
	return fetch(`${API}/divers/alentours/${id}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const createLien = (lien, token) => {
	console.log('dan action', lien);
	return fetch(`${API}/divers/alentours`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(lien),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const updateLien = (lien, id, token) => {
	return fetch(`${API}/divers/alentours/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(lien),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const removeLien = (id, token) => {
	return fetch(`${API}/divers/alentours/${id}`, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};
