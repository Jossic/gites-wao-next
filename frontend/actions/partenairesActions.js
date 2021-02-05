import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const ListAllPartenaires = () => {
	return fetch(`${API}/divers/partenaires`, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const listePartenaireById = (id, token) => {
	return fetch(`${API}/divers/partenaire/${id}`, {
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

export const createPartenaire = (partenaire, token) => {
	return fetch(`${API}/divers/partenaire`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(partenaire),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

// export const listReviewsBySlug = async (slug) => {
// 	try {
// 		const { data } = await axios.get(`${API}/reviews/${slug}`);
// 		// console.log(data);
// 		return data;
// 	} catch (error) {
// 		console.error(error);
// 	}
// };

export const updatePartenaire = (partenaire, id, token) => {
	return fetch(`${API}/divers/partenaire/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(partenaire),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const removePartenaire = (id, token) => {
	return fetch(`${API}/divers/partenaire/${id}`, {
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
