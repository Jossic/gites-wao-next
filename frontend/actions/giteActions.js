import axios from 'axios';
import fetch from 'isomorphic-fetch';
import { API } from '../config';
import {
	QR_LIST_REQUEST,
	QR_LIST_SUCCESS,
	QR_LIST_FAIL,
	// QR_DETAILS_REQUEST,
	// QR_DETAILS_SUCCESS,
	// QR_DETAILS_FAIL,
	QR_DELETE_REQUEST,
	QR_DELETE_SUCCESS,
	QR_DELETE_FAIL,
	QR_CREATE_REQUEST,
	QR_CREATE_SUCCESS,
	QR_CREATE_FAIL,
	QR_UPDATE_REQUEST,
	QR_UPDATE_SUCCESS,
	QR_UPDATE_FAIL,
} from '../constants/giteConstants';

export const listGiteDetails = async (slug) => {
	try {
		const { data } = await axios.get(`${API}/gite/${slug}`);
		// console.log(data);
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const listeDesGites = () => {
	return fetch(`${API}/gites`, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const listeDesImages = (token) => {
	return fetch(`${API}/photos`, {
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

export const saveImageData = (photos, token) => {
	return fetch(`${API}/upload-images`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(photos),
	})
		.then((response) => {
			// handleResponse(response);
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const listGitesNoms = () => {
	return fetch(`${API}/gites/noms`, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));

	// try {
	// 	const { data } = await axios.get(`${API}/gite`);
	// 	return data;
	// } catch (error) {
	// 	console.error(error);
	// }
};

export const createGite = (gite, token) => {
	return fetch(`${API}/gite`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(gite),
	})
		.then((response) => {
			// handleResponse(response);
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const deleteGite = (slug, token) => {
	return fetch(`${API}/gite/${slug}`, {
		method: 'DELETE',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})
		.then((response) => {
			// handleResponse(response);
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const updateGite = (gite, slug, token) => {
	return fetch(`${API}/gite/${slug}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(gite),
	})
		.then((response) => {
			// handleResponse(response);
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const createQR = (qr, token) => {
	console.log('dan action', qr);
	return fetch(`${API}/qr`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(qr),
	})
		.then((response) => {
			// handleResponse(response);
			return response.json();
		})
		.catch((err) => console.log(err));
};

// export const createQR = (token) => async (dispatch, getState) => {
// 	try {
// 		dispatch({
// 			type: QR_CREATE_REQUEST,
// 		});

// 		const {
// 			userToken: { userInfo },
// 		} = getState();

// 		const config = {
// 			headers: {
// 				Authorization: `Bearer ${userInfo.token}`,
// 			},
// 		};

// 		const { data } = await axios.post(`${API}/qr`, {}, config);

// 		dispatch({
// 			type: QR_CREATE_SUCCESS,
// 			payload: data,
// 		});
// 	} catch (e) {
// 		dispatch({
// 			type: QR_CREATE_FAIL,
// 			payload:
// 				e.response && e.response.data.message
// 					? e.response.data.message
// 					: e.message,
// 		});
// 	}
// };

export const listeOneQR = (id, token) => {
	return fetch(`${API}/qr/${id}`, {
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

// export const listeDesQR = () => async (dispatch) => {
// 	try {
// 		dispatch({ type: QR_LIST_REQUEST });

// 		const { data } = await axios.get(`${API}/qr`);

// 		dispatch({
// 			type: QR_LIST_SUCCESS,
// 			payload: data,
// 		});
// 	} catch (error) {
// 		dispatch({
// 			type: QR_LIST_FAIL,
// 			payload:
// 				error.response && error.response.data.message
// 					? error.response.data.message
// 					: error.message,
// 		});
// 	}
// };

export const listeDesQR = () => {
	return fetch(`${API}/qr`, {
		method: 'GET',
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const removeQR = (id, token) => {
	return fetch(`${API}/qr/${id}`, {
		method: 'DELETE',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const updateQR = (qr, id, token) => {
	return fetch(`${API}/qr/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(qr),
	})
		.then((response) => {
			// handleResponse(response);
			return response.json();
		})
		.catch((err) => console.log(err));
};
