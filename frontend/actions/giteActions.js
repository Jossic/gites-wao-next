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

export const listeDesImages = () => {
	return fetch(`${API}/photos`, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const saveImageData = (photos, token) => {
	return fetch(`${API}/upload-images`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(photos),
	})
		.then((response) => {
			// handleResponse(response);
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
};

export const createGite = (gite, token) => {
	return fetch(`${API}/gite`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(gite),
	})
		.then((response) => {
			// handleResponse(response);
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const deleteGite = (slug, token) => {
	return fetch(`${API}/gite/${slug}`, {
		method: 'DELETE',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})
		.then((response) => {
			// handleResponse(response);
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const updateGite = (gite, slug, token) => {
	return fetch(`${API}/gite/${slug}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(gite),
	})
		.then((response) => {
			// handleResponse(response);
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const createQR = (qr, token) => {
	console.log('dan action', qr);
	return fetch(`${API}/qr`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(qr),
	})
		.then((response) => {
			// handleResponse(response);
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const listeOneQR = (id, token) => {
	return fetch(`${API}/qr/${id}`, {
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

export const listeDesQR = () => {
	return fetch(`${API}/qr`, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const removeQR = (id, token) => {
	return fetch(`${API}/qr/${id}`, {
		method: 'DELETE',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const updateQR = (qr, id, token) => {
	return fetch(`${API}/qr/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(qr),
	})
		.then((response) => {
			// handleResponse(response);
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const listPhotosByNom = async (nom) => {
	try {
		const { data } = await axios.get(`${API}/photos/${nom}`);
		// console.log(data);
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const listPhotosBySection = async (section) => {
	try {
		const { data } = await axios.get(`${API}/photos/section/${section}`);
		// console.log(data);
		return data;
	} catch (error) {
		console.error(error);
	}
};
