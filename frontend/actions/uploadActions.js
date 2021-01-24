import axios from 'axios';
import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const uploadPhoto = (infos, token) => {
	return fetch(`${API}/upload-image`, {
		method: 'POST',
		headers: {
			Accept: 'multipart/form-data',
			Authorization: `Bearer ${token}`,
		},
		body: infos,
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const uploadPhotoData = (infos, token) => {
	return fetch(`${API}/upload-image-data`, {
		method: 'POST',
		headers: {
			Accept: 'multipart/form-data',
			Authorization: `Bearer ${token}`,
		},
		body: infos,
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};
