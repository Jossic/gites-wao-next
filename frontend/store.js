import { useMemo } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getCookie } from './actions/authActions';
import {
	QRCreateReducer,
	QRDeleteReducer,
	QRListReducer,
	QRUpdateReducer,
} from './reducers/giteReducers';

let store;

var isNode = typeof module !== 'undefined';
let userInfoFromStorage = null;
if (!isNode) {
	userInfoFromStorage = localStorage.getItem('user')
		? JSON.parse(localStorage.getItem('user'))
		: null;
}
const userTokenFromCookie = getCookie('token')
	? JSON.parse(getCookie('token'))
	: null;

const initialState = {
	// userLogin: { token: userTokenFromCookie, user: userInfoFromStorage },
};

const combinedReducer = combineReducers({
	QRList: QRListReducer,
	QRDelete: QRDeleteReducer,
	QRCreate: QRCreateReducer,
	QRUpdate: QRUpdateReducer,
});

function initStore(preloadedState = initialState) {
	return createStore(
		combinedReducer,
		preloadedState,
		composeWithDevTools(applyMiddleware())
	);
}

export const initializeStore = (preloadedState) => {
	let _store = store ?? initStore(preloadedState);

	// After navigating to a page with an initial Redux state, merge that state
	// with the current state in the store, and create a new store
	if (preloadedState && store) {
		_store = initStore({
			...store.getState(),
			...preloadedState,
		});
		// Reset the current store
		store = undefined;
	}

	// For SSG and SSR always create a new store
	if (typeof window === 'undefined') return _store;
	// Create the store once in the client
	if (!store) store = _store;

	return _store;
};

export function useStore(initialState) {
	const store = useMemo(() => initializeStore(initialState), [initialState]);
	return store;
}

// const userInfoFromStorage = localStorage.getItem('user')
// 	? JSON.parse(localStorage.getItem('user'))
// 	: null;
