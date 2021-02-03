import fetch from 'isomorphic-fetch';
import { API } from '../config';
import axios from 'axios';

export const createReview = (review, token) => {
	console.log('dan action', review);
	return fetch(`${API}/review`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(review),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const listeOneReview = (id, token) => {
	return fetch(`${API}/review/${id}`, {
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

export const listReviews = () => {
	return fetch(`${API}/review`, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const removeReview = (id, token) => {
	return fetch(`${API}/review/${id}`, {
		method: 'DELETE',
		headers: {
			// Accept: 'application/json',
			// 'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const updateReview = (review, id, token) => {
	return fetch(`${API}/review/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(review),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};
