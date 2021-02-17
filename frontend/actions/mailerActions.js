import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const listAllMailers = () => {
	return fetch(`${API}/mailer`, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const listMailerById = (id) => {
	return fetch(`${API}/mailer/${id}`, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const createMailer = (mailer) => {
	return fetch(`${API}/mailer`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(mailer),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const removeMailer = (id, token) => {
	return fetch(`${API}/mailer/${id}`, {
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

export const updateMailer = (response, id, token) => {
	return fetch(`${API}/mailer/${id}`, {
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
