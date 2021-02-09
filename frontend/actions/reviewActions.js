import fetch from 'isomorphic-fetch';
import { API } from '../config';
import axios from 'axios';

export const createReview = (review, token) => {
	console.log('dans action', review);
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
	return fetch(`${API}/reviews`, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const listReviewsBySlug = async (slug) => {
	try {
		const { data } = await axios.get(`${API}/reviews/${slug}`);
		// console.log(data);
		return data;
	} catch (error) {
		console.error(error);
	}
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
