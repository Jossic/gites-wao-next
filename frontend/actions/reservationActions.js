import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const createReservation = (reservation) => {
	console.log('dans action', reservation);
	return fetch(`${API}/reservation`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(reservation),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const listAllReservations = (token) => {
	return fetch(`${API}/reservation`, {
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

export const countNouvelleReservation = () => {
	return fetch(`${API}/reservation/count`, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const listeOneReservation = (id, token) => {
	return fetch(`${API}/reservation/${id}`, {
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

export const removeReservation = (id, token) => {
	return fetch(`${API}/reservation/${id}`, {
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

export const updateReservation = (reservation, id, token) => {
	return fetch(`${API}/reservation/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(reservation),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};
