import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const getCalendarById = (calendarId, dateDebut, dateFin) => {
	return fetch(`${API}/calendar/${calendarId}/${dateDebut}/${dateFin}`, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};
export const getDejaLoue = (calendarId, dateDebut, dateFin) => {
	return fetch(`${API}/calendar/loue/${calendarId}/${dateDebut}/${dateFin}`, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const getVacances = (dateDebut, dateFin) => {
	return fetch(`${API}/calendar/${dateDebut}/${dateFin}`, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

// export const getClientById = (id, token) => {
// 	return fetch(`${API}/calendar/${id}`, {
// 		method: 'GET',
// 		headers: {
// 			Authorization: `Bearer ${token}`,
// 		},
// 	})
// 		.then((response) => {
// 			return response.json();
// 		})
// 		.catch((err) => console.log(err));
// };
