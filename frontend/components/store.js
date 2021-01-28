import { createStore, combineReducers } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { getCookie } from '../actions/authActions';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
	QRCreateReducer,
	QRDeleteReducer,
	QRListReducer,
	QRUpdateReducer,
} from '../reducers/giteReducers';

const combinedReducer = combineReducers({
	QRList: QRListReducer,
	QRDelete: QRDeleteReducer,
	QRCreate: QRCreateReducer,
	QRUpdate: QRUpdateReducer,
});

// create your reducer
const reducer = (state, action) => {
	if (action.type === HYDRATE) {
		const nextState = {
			...state, // use previous state
			...action.payload, // apply delta from hydration
		};
		//   if (state.count) nextState.count = state.count // preserve count value on client side navigation
		return nextState;
	} else {
		return combinedReducer(state, action);
	}
};

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

// const userInfoFromStorage = localStorage.getItem('user')
// 	? JSON.parse(localStorage.getItem('user'))
// 	: null;

const initialState = {
	userLogin: { token: userTokenFromCookie, user: userInfoFromStorage },
};

// create a makeStore function
const makeStore = (context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });
