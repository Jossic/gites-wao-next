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
	QR_CREATE_RESET,
	QR_UPDATE_REQUEST,
	QR_UPDATE_SUCCESS,
	QR_UPDATE_FAIL,
	QR_UPDATE_RESET,
} from '../constants/giteConstants';

export const QRListReducer = (state = { QRs: [] }, action) => {
	switch (action.type) {
		case QR_LIST_REQUEST:
			return { loading: true, QRs: [] };
		case QR_LIST_SUCCESS:
			return {
				loading: false,
				QRs: action.payload.QRs,
				// pages: action.payload.pages,
				// page: action.payload.page,
			};
		case QR_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const QRDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case QR_DELETE_REQUEST:
			return {
				loading: true,
			};
		case QR_DELETE_SUCCESS:
			return {
				loading: false,
				success: true,
			};
		case QR_DELETE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const QRCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case QR_CREATE_REQUEST:
			return {
				loading: true,
			};
		case QR_CREATE_SUCCESS:
			return {
				loading: false,
				success: true,
				QR: action.payload,
			};
		case QR_CREATE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case QR_CREATE_RESET:
			return {};
		default:
			return state;
	}
};

export const QRUpdateReducer = (state = { QR: {} }, action) => {
	switch (action.type) {
		case QR_UPDATE_REQUEST:
			return {
				loading: true,
			};
		case QR_UPDATE_SUCCESS:
			return {
				loading: false,
				success: true,
				QR: action.payload,
			};
		case QR_UPDATE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case QR_UPDATE_RESET:
			return {
				QR: {},
			};
		default:
			return state;
	}
};
