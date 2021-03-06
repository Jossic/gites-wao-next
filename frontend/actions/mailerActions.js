import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const listAllMailers = (token) => {
	return fetch(`${API}/mailer`, {
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

export const listMailerById = (id, token) => {
	return fetch(`${API}/mailer/${id}`, {
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

export const createMailer = (mailer, token) => {
	return fetch(`${API}/mailer`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
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

export const updateMailer = (mailer, id, token) => {
	return fetch(`${API}/mailer/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(mailer),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};
