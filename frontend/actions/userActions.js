import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const listAllUsers = (token) => {
	return fetch(`${API}/user`, {
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

// export const countNouvelleReservation = () => {
// 	return fetch(`${API}/reservation/count`, {
// 		method: 'GET',
// 	})
// 		.then((response) => {
// 			return response.json();
// 		})
// 		.catch((err) => console.log(err));
// };

export const getUserById = (id, token) => {
	return fetch(`${API}/user/${id}`, {
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

export const removeUser = (id, token) => {
	return fetch(`${API}/user/${id}`, {
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

export const updateUser = (user, id, token) => {
	return fetch(`${API}/user/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(user),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};
