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

export const ListAllPartenairesNoms = () => {
	return fetch(`${API}/divers/partenaires/noms`, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const listePartenaireById = (id) => {
	return fetch(`${API}/divers/partenaire/${id}`, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const listePartenaireBySlug = (slug) => {
	return fetch(`${API}/divers/partenaire/slug/${slug}`, {
		method: 'GET',
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

export const ListAllPartenaireCards = (id) => {
	return fetch(`${API}/divers/partenaire/${id}/cards`, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const listePartenaireCardById = (id, idCard) => {
	return fetch(`${API}/divers/partenaire/${id}/card/${idCard}`, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const createPartenaireCard = (partenaireCard, id, token) => {
	return fetch(`${API}/divers/partenaire/${id}/card`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(partenaireCard),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const updatePartenaireCard = (partenaireCard, id, idCard, token) => {
	return fetch(`${API}/divers/partenaire/${id}/card/${idCard}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(partenaireCard),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const removePartenaireCard = (id, idCard, token) => {
	return fetch(`${API}/divers/partenaire/${id}/card/${idCard}`, {
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
