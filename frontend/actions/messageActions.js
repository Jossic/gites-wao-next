import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const listMessages = () => {
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

export const createMessage = (message) => {
	console.log('dans action', message);
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
