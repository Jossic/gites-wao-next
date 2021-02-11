import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const listAllMessages = () => {
	return fetch(`${API}/message`, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const listMessageById = (id) => {
	return fetch(`${API}/message/${id}`, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const countMessageNonLus = () => {
	return fetch(`${API}/message/count`, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const createMessage = (message) => {
	return fetch(`${API}/message`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(message),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const removeMessage = (id, token) => {
	return fetch(`${API}/message/${id}`, {
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

export const addResponse = (response, id, token) => {
	return fetch(`${API}/message/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(response),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const setVu = (id, token) => {
	return fetch(`${API}/message/${id}/vu`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		// body: JSON.stringify(response),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};
