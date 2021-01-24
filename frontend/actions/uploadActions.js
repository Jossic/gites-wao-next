import axios from 'axios';
import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const savePhoto = (photos, token) => {
	return fetch(`${API}/upload-images`, {
		method: 'PUT',
		headers: {
			Accept: 'multipart/form-data',
			Authorization: `Bearer ${token}`,
		},
		body: photos,
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};
