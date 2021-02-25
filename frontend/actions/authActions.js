import fetch from 'isomorphic-fetch';
import { API } from '../config';
import cookie from 'js-cookie';
import Router from 'next/router';

export const handleResponse = (response) => {
	if (response.status === 401) {
		signout(() => {
			Router.push({
				pathname: '/login',
				query: {
					message:
						'Votre cession à expiré, merci de vous reconnecter.',
				},
			});
		});
	} else {
		return;
	}
};

export const login = (user) => {
	return fetch(`${API}/admin/login`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const logout = (next) => {
	removeCookie('token');
	removeLocalStorage('user');
	next();

	return fetch(`${API}/admin/logout`, {
		method: 'GET',
	})
		.then((response) => {
			console.log('Vous êtes maintenant déconnecté');
		})
		.catch((err) => {
			console.log(err);
		});
};

export const setCookie = (key, value) => {
	if (process.browser) {
		cookie.set(key, value, {
			expires: 10,
		});
	}
};

export const removeCookie = (key) => {
	if (process.browser) {
		cookie.remove(key, {
			expires: 1,
		});
	}
};

export const getCookie = (key) => {
	if (process.browser) {
		return cookie.get(key);
	}
};

export const setLocalStorage = (key, value) => {
	if (process.browser) {
		localStorage.setItem(key, JSON.stringify(value));
	}
};

export const removeLocalStorage = (key) => {
	if (process.browser) {
		localStorage.removeItem(key);
	}
};

export const authenticate = (data, next) => {
	setCookie('token', data.token);
	const { name, email, isAdmin, _id } = data;
	const user = { name, email, isAdmin, _id };
	// console.log('user dans authenticate', user);
	setLocalStorage('user', user);
	next();
};

export const isAuth = () => {
	if (process.browser) {
		const cookieChecked = getCookie('token');
		if (cookieChecked) {
			if (localStorage.getItem('user')) {
				return JSON.parse(localStorage.getItem('user'));
			} else {
				return false;
			}
		}
	}
};
