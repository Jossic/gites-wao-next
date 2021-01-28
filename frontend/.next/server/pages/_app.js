module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/authActions.js":
/*!********************************!*\
  !*** ./actions/authActions.js ***!
  \********************************/
/*! exports provided: login, logout, setCookie, removeCookie, getCookie, setLocalStorage, removeLocalStorage, authenticate, isAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocalStorage", function() { return setLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLocalStorage", function() { return removeLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticate", function() { return authenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAuth", function() { return isAuth; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);



 // export const handleResponse = (response) => {
// 	if (response.status === 401) {
// 		signout(() => {
// 			Router.push({
// 				pathname: '/login',
// 				query: {
// 					message:
// 						'Votre cession à expiré, merci de vous reconnecter.',
// 				},
// 			});
// 		});
// 	} else {
// 		return;
// 	}
// };

const login = user => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/admin/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const logout = next => {
  removeCookie('token');
  removeLocalStorage('user');
  next();
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/admin/logout`, {
    method: 'GET'
  }).then(response => {
    console.log('Vous êtes maintenant déconnecté');
  }).catch(err => {
    console.log(err);
  });
};
const setCookie = (key, value) => {
  if (false) {}
};
const removeCookie = key => {
  if (false) {}
};
const getCookie = key => {
  if (false) {}
};
const setLocalStorage = (key, value) => {
  if (false) {}
};
const removeLocalStorage = key => {
  if (false) {}
};
const authenticate = (data, next) => {
  setCookie('token', data.token);
  const {
    name,
    email,
    isAdmin,
    _id
  } = data;
  const user = {
    name,
    email,
    isAdmin,
    _id
  }; // console.log('user dans authenticate', user);

  setLocalStorage('user', user);
  next();
};
const isAuth = () => {
  if (false) {}
};

/***/ }),

/***/ "./components/store.js":
/*!*****************************!*\
  !*** ./components/store.js ***!
  \*****************************/
/*! exports provided: wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_giteReducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/giteReducers */ "./reducers/giteReducers.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  QRList: _reducers_giteReducers__WEBPACK_IMPORTED_MODULE_4__["QRListReducer"],
  QRDelete: _reducers_giteReducers__WEBPACK_IMPORTED_MODULE_4__["QRDeleteReducer"],
  QRCreate: _reducers_giteReducers__WEBPACK_IMPORTED_MODULE_4__["QRCreateReducer"],
  QRUpdate: _reducers_giteReducers__WEBPACK_IMPORTED_MODULE_4__["QRUpdateReducer"]
}); // create your reducer

const reducer = (state, action) => {
  if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]) {
    const nextState = _objectSpread(_objectSpread({}, state), action.payload); //   if (state.count) nextState.count = state.count // preserve count value on client side navigation


    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

var isNode = typeof module !== 'undefined';
let userInfoFromStorage = null;

if (!isNode) {
  userInfoFromStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
}

const userTokenFromCookie = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_2__["getCookie"])('token') ? JSON.parse(Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_2__["getCookie"])('token')) : null; // const userInfoFromStorage = localStorage.getItem('user')
// 	? JSON.parse(localStorage.getItem('user'))
// 	: null;

const initialState = {
  userLogin: {
    token: userTokenFromCookie,
    user: userInfoFromStorage
  }
}; // create a makeStore function

const makeStore = context => Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer); // export an assembled wrapper


const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["createWrapper"])(makeStore, {
  debug: true
});

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: API, APP_NAME, DOMAIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_NAME", function() { return APP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAIN", function() { return DOMAIN; });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);

const {
  publicRuntimeConfig
} = next_config__WEBPACK_IMPORTED_MODULE_0___default()();
const API = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.API_PRODUCTION : publicRuntimeConfig.API_DEVELOPMENT;
const APP_NAME = publicRuntimeConfig.APP_NAME;
const DOMAIN = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.DOMAIN_PRODUCTION : publicRuntimeConfig.DOMAIN_DEVELOPMENT;

/***/ }),

/***/ "./constants/giteConstants.js":
/*!************************************!*\
  !*** ./constants/giteConstants.js ***!
  \************************************/
/*! exports provided: QR_LIST_REQUEST, QR_LIST_SUCCESS, QR_LIST_FAIL, QR_DELETE_REQUEST, QR_DELETE_SUCCESS, QR_DELETE_FAIL, QR_CREATE_REQUEST, QR_CREATE_SUCCESS, QR_CREATE_FAIL, QR_CREATE_RESET, QR_UPDATE_REQUEST, QR_UPDATE_SUCCESS, QR_UPDATE_FAIL, QR_UPDATE_RESET, GITE_LIST_REQUEST, GITE_LIST_SUCCESS, GITE_LIST_FAIL, GITE_DETAILS_REQUEST, GITE_DETAILS_SUCCESS, GITE_DETAILS_FAIL, GITE_DELETE_REQUEST, GITE_DELETE_SUCCESS, GITE_DELETE_FAIL, GITE_CREATE_REQUEST, GITE_CREATE_SUCCESS, GITE_CREATE_FAIL, GITE_CREATE_RESET, GITE_UPDATE_REQUEST, GITE_UPDATE_SUCCESS, GITE_UPDATE_FAIL, GITE_UPDATE_RESET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QR_LIST_REQUEST", function() { return QR_LIST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QR_LIST_SUCCESS", function() { return QR_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QR_LIST_FAIL", function() { return QR_LIST_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QR_DELETE_REQUEST", function() { return QR_DELETE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QR_DELETE_SUCCESS", function() { return QR_DELETE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QR_DELETE_FAIL", function() { return QR_DELETE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QR_CREATE_REQUEST", function() { return QR_CREATE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QR_CREATE_SUCCESS", function() { return QR_CREATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QR_CREATE_FAIL", function() { return QR_CREATE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QR_CREATE_RESET", function() { return QR_CREATE_RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QR_UPDATE_REQUEST", function() { return QR_UPDATE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QR_UPDATE_SUCCESS", function() { return QR_UPDATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QR_UPDATE_FAIL", function() { return QR_UPDATE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QR_UPDATE_RESET", function() { return QR_UPDATE_RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GITE_LIST_REQUEST", function() { return GITE_LIST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GITE_LIST_SUCCESS", function() { return GITE_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GITE_LIST_FAIL", function() { return GITE_LIST_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GITE_DETAILS_REQUEST", function() { return GITE_DETAILS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GITE_DETAILS_SUCCESS", function() { return GITE_DETAILS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GITE_DETAILS_FAIL", function() { return GITE_DETAILS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GITE_DELETE_REQUEST", function() { return GITE_DELETE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GITE_DELETE_SUCCESS", function() { return GITE_DELETE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GITE_DELETE_FAIL", function() { return GITE_DELETE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GITE_CREATE_REQUEST", function() { return GITE_CREATE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GITE_CREATE_SUCCESS", function() { return GITE_CREATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GITE_CREATE_FAIL", function() { return GITE_CREATE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GITE_CREATE_RESET", function() { return GITE_CREATE_RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GITE_UPDATE_REQUEST", function() { return GITE_UPDATE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GITE_UPDATE_SUCCESS", function() { return GITE_UPDATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GITE_UPDATE_FAIL", function() { return GITE_UPDATE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GITE_UPDATE_RESET", function() { return GITE_UPDATE_RESET; });
const QR_LIST_REQUEST = 'QR_LIST_REQUEST';
const QR_LIST_SUCCESS = 'QR_LIST_SUCCESS';
const QR_LIST_FAIL = 'QR_LIST_FAIL'; // export const QR_DETAILS_REQUEST = 'QR_DETAILS_REQUEST';
// export const QR_DETAILS_SUCCESS = 'QR_DETAILS_SUCCESS';
// export const QR_DETAILS_FAIL = 'QR_DETAILS_FAIL';

const QR_DELETE_REQUEST = 'QR_DELETE_REQUEST';
const QR_DELETE_SUCCESS = 'QR_DELETE_SUCCESS';
const QR_DELETE_FAIL = 'QR_DELETE_FAIL';
const QR_CREATE_REQUEST = 'QR_CREATE_REQUEST';
const QR_CREATE_SUCCESS = 'QR_CREATE_SUCCESS';
const QR_CREATE_FAIL = 'QR_CREATE_FAIL';
const QR_CREATE_RESET = 'QR_CREATE_RESET';
const QR_UPDATE_REQUEST = 'QR_UPDATE_REQUEST';
const QR_UPDATE_SUCCESS = 'QR_UPDATE_SUCCESS';
const QR_UPDATE_FAIL = 'QR_UPDATE_FAIL';
const QR_UPDATE_RESET = 'QR_UPDATE_RESET';
const GITE_LIST_REQUEST = 'GITE_LIST_REQUEST';
const GITE_LIST_SUCCESS = 'GITE_LIST_SUCCESS';
const GITE_LIST_FAIL = 'GITE_LIST_FAIL';
const GITE_DETAILS_REQUEST = 'GITE_DETAILS_REQUEST';
const GITE_DETAILS_SUCCESS = 'GITE_DETAILS_SUCCESS';
const GITE_DETAILS_FAIL = 'GITE_DETAILS_FAIL';
const GITE_DELETE_REQUEST = 'GITE_DELETE_REQUEST';
const GITE_DELETE_SUCCESS = 'GITE_DELETE_SUCCESS';
const GITE_DELETE_FAIL = 'GITE_DELETE_FAIL';
const GITE_CREATE_REQUEST = 'GITE_CREATE_REQUEST';
const GITE_CREATE_SUCCESS = 'GITE_CREATE_SUCCESS';
const GITE_CREATE_FAIL = 'GITE_CREATE_FAIL';
const GITE_CREATE_RESET = 'GITE_CREATE_RESET';
const GITE_UPDATE_REQUEST = 'GITE_UPDATE_REQUEST';
const GITE_UPDATE_SUCCESS = 'GITE_UPDATE_SUCCESS';
const GITE_UPDATE_FAIL = 'GITE_UPDATE_FAIL';
const GITE_UPDATE_RESET = 'GITE_UPDATE_RESET';

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/store */ "./components/store.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// pages/_app.js





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "/styles/globals.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
      integrity: "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj",
      crossOrigin: "anonymous"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js",
      integrity: "sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx",
      crossOrigin: "anonymous"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
      integrity: "sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==",
      crossOrigin: "anonymous"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (_components_store__WEBPACK_IMPORTED_MODULE_3__["wrapper"].withRedux(MyApp));

/***/ }),

/***/ "./reducers/giteReducers.js":
/*!**********************************!*\
  !*** ./reducers/giteReducers.js ***!
  \**********************************/
/*! exports provided: QRListReducer, QRDeleteReducer, QRCreateReducer, QRUpdateReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRListReducer", function() { return QRListReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRDeleteReducer", function() { return QRDeleteReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRCreateReducer", function() { return QRCreateReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRUpdateReducer", function() { return QRUpdateReducer; });
/* harmony import */ var _constants_giteConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/giteConstants */ "./constants/giteConstants.js");

const QRListReducer = (state = {
  QRs: []
}, action) => {
  switch (action.type) {
    case _constants_giteConstants__WEBPACK_IMPORTED_MODULE_0__["QR_LIST_REQUEST"]:
      return {
        loading: true,
        QRs: []
      };

    case _constants_giteConstants__WEBPACK_IMPORTED_MODULE_0__["QR_LIST_SUCCESS"]:
      return {
        loading: false,
        QRs: action.payload.QRs // pages: action.payload.pages,
        // page: action.payload.page,

      };

    case _constants_giteConstants__WEBPACK_IMPORTED_MODULE_0__["QR_LIST_FAIL"]:
      return {
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
const QRDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case _constants_giteConstants__WEBPACK_IMPORTED_MODULE_0__["QR_DELETE_REQUEST"]:
      return {
        loading: true
      };

    case _constants_giteConstants__WEBPACK_IMPORTED_MODULE_0__["QR_DELETE_SUCCESS"]:
      return {
        loading: false,
        success: true
      };

    case _constants_giteConstants__WEBPACK_IMPORTED_MODULE_0__["QR_DELETE_FAIL"]:
      return {
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
const QRCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case _constants_giteConstants__WEBPACK_IMPORTED_MODULE_0__["QR_CREATE_REQUEST"]:
      return {
        loading: true
      };

    case _constants_giteConstants__WEBPACK_IMPORTED_MODULE_0__["QR_CREATE_SUCCESS"]:
      return {
        loading: false,
        success: true,
        QR: action.payload
      };

    case _constants_giteConstants__WEBPACK_IMPORTED_MODULE_0__["QR_CREATE_FAIL"]:
      return {
        loading: false,
        error: action.payload
      };

    case _constants_giteConstants__WEBPACK_IMPORTED_MODULE_0__["QR_CREATE_RESET"]:
      return {};

    default:
      return state;
  }
};
const QRUpdateReducer = (state = {
  QR: {}
}, action) => {
  switch (action.type) {
    case _constants_giteConstants__WEBPACK_IMPORTED_MODULE_0__["QR_UPDATE_REQUEST"]:
      return {
        loading: true
      };

    case _constants_giteConstants__WEBPACK_IMPORTED_MODULE_0__["QR_UPDATE_SUCCESS"]:
      return {
        loading: false,
        success: true,
        QR: action.payload
      };

    case _constants_giteConstants__WEBPACK_IMPORTED_MODULE_0__["QR_UPDATE_FAIL"]:
      return {
        loading: false,
        error: action.payload
      };

    case _constants_giteConstants__WEBPACK_IMPORTED_MODULE_0__["QR_UPDATE_RESET"]:
      return {
        QR: {}
      };

    default:
      return state;
  }
};

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9hdXRoQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvZ2l0ZUNvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2dpdGVSZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9jb25maWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiJdLCJuYW1lcyI6WyJsb2dpbiIsInVzZXIiLCJmZXRjaCIsIkFQSSIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJsb2dvdXQiLCJuZXh0IiwicmVtb3ZlQ29va2llIiwicmVtb3ZlTG9jYWxTdG9yYWdlIiwic2V0Q29va2llIiwia2V5IiwidmFsdWUiLCJnZXRDb29raWUiLCJzZXRMb2NhbFN0b3JhZ2UiLCJhdXRoZW50aWNhdGUiLCJkYXRhIiwidG9rZW4iLCJuYW1lIiwiZW1haWwiLCJpc0FkbWluIiwiX2lkIiwiaXNBdXRoIiwiY29tYmluZWRSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiUVJMaXN0IiwiUVJMaXN0UmVkdWNlciIsIlFSRGVsZXRlIiwiUVJEZWxldGVSZWR1Y2VyIiwiUVJDcmVhdGUiLCJRUkNyZWF0ZVJlZHVjZXIiLCJRUlVwZGF0ZSIsIlFSVXBkYXRlUmVkdWNlciIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwibmV4dFN0YXRlIiwicGF5bG9hZCIsImlzTm9kZSIsIm1vZHVsZSIsInVzZXJJbmZvRnJvbVN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2UiLCJ1c2VyVG9rZW5Gcm9tQ29va2llIiwiaW5pdGlhbFN0YXRlIiwidXNlckxvZ2luIiwibWFrZVN0b3JlIiwiY29udGV4dCIsImNyZWF0ZVN0b3JlIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsInB1YmxpY1J1bnRpbWVDb25maWciLCJnZXRDb25maWciLCJQUk9EVUNUSU9OIiwiQVBJX1BST0RVQ1RJT04iLCJBUElfREVWRUxPUE1FTlQiLCJBUFBfTkFNRSIsIkRPTUFJTiIsIkRPTUFJTl9QUk9EVUNUSU9OIiwiRE9NQUlOX0RFVkVMT1BNRU5UIiwiUVJfTElTVF9SRVFVRVNUIiwiUVJfTElTVF9TVUNDRVNTIiwiUVJfTElTVF9GQUlMIiwiUVJfREVMRVRFX1JFUVVFU1QiLCJRUl9ERUxFVEVfU1VDQ0VTUyIsIlFSX0RFTEVURV9GQUlMIiwiUVJfQ1JFQVRFX1JFUVVFU1QiLCJRUl9DUkVBVEVfU1VDQ0VTUyIsIlFSX0NSRUFURV9GQUlMIiwiUVJfQ1JFQVRFX1JFU0VUIiwiUVJfVVBEQVRFX1JFUVVFU1QiLCJRUl9VUERBVEVfU1VDQ0VTUyIsIlFSX1VQREFURV9GQUlMIiwiUVJfVVBEQVRFX1JFU0VUIiwiR0lURV9MSVNUX1JFUVVFU1QiLCJHSVRFX0xJU1RfU1VDQ0VTUyIsIkdJVEVfTElTVF9GQUlMIiwiR0lURV9ERVRBSUxTX1JFUVVFU1QiLCJHSVRFX0RFVEFJTFNfU1VDQ0VTUyIsIkdJVEVfREVUQUlMU19GQUlMIiwiR0lURV9ERUxFVEVfUkVRVUVTVCIsIkdJVEVfREVMRVRFX1NVQ0NFU1MiLCJHSVRFX0RFTEVURV9GQUlMIiwiR0lURV9DUkVBVEVfUkVRVUVTVCIsIkdJVEVfQ1JFQVRFX1NVQ0NFU1MiLCJHSVRFX0NSRUFURV9GQUlMIiwiR0lURV9DUkVBVEVfUkVTRVQiLCJHSVRFX1VQREFURV9SRVFVRVNUIiwiR0lURV9VUERBVEVfU1VDQ0VTUyIsIkdJVEVfVVBEQVRFX0ZBSUwiLCJHSVRFX1VQREFURV9SRVNFVCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwid2l0aFJlZHV4IiwiUVJzIiwibG9hZGluZyIsImVycm9yIiwic3VjY2VzcyIsIlFSIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sTUFBTUEsS0FBSyxHQUFJQyxJQUFELElBQVU7QUFDOUIsU0FBT0MsdURBQUssQ0FBRSxHQUFFQywyQ0FBSSxjQUFSLEVBQXVCO0FBQ2xDQyxVQUFNLEVBQUUsTUFEMEI7QUFFbENDLFdBQU8sRUFBRTtBQUNSQyxZQUFNLEVBQUUsa0JBREE7QUFFUixzQkFBZ0I7QUFGUixLQUZ5QjtBQU1sQ0MsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVIsSUFBZjtBQU40QixHQUF2QixDQUFMLENBUUxTLElBUkssQ0FRQ0MsUUFBRCxJQUFjO0FBQ25CLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0EsR0FWSyxFQVdMQyxLQVhLLENBV0VDLEdBQUQsSUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FYVixDQUFQO0FBWUEsQ0FiTTtBQWVBLE1BQU1HLE1BQU0sR0FBSUMsSUFBRCxJQUFVO0FBQy9CQyxjQUFZLENBQUMsT0FBRCxDQUFaO0FBQ0FDLG9CQUFrQixDQUFDLE1BQUQsQ0FBbEI7QUFDQUYsTUFBSTtBQUVKLFNBQU9oQix1REFBSyxDQUFFLEdBQUVDLDJDQUFJLGVBQVIsRUFBd0I7QUFDbkNDLFVBQU0sRUFBRTtBQUQyQixHQUF4QixDQUFMLENBR0xNLElBSEssQ0FHQ0MsUUFBRCxJQUFjO0FBQ25CSSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxpQ0FBWjtBQUNBLEdBTEssRUFNTEgsS0FOSyxDQU1FQyxHQUFELElBQVM7QUFDZkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQSxHQVJLLENBQVA7QUFTQSxDQWRNO0FBZ0JBLE1BQU1PLFNBQVMsR0FBRyxDQUFDQyxHQUFELEVBQU1DLEtBQU4sS0FBZ0I7QUFDeEMsYUFBcUIsRUFJcEI7QUFDRCxDQU5NO0FBUUEsTUFBTUosWUFBWSxHQUFJRyxHQUFELElBQVM7QUFDcEMsYUFBcUIsRUFJcEI7QUFDRCxDQU5NO0FBUUEsTUFBTUUsU0FBUyxHQUFJRixHQUFELElBQVM7QUFDakMsYUFBcUIsRUFFcEI7QUFDRCxDQUpNO0FBTUEsTUFBTUcsZUFBZSxHQUFHLENBQUNILEdBQUQsRUFBTUMsS0FBTixLQUFnQjtBQUM5QyxhQUFxQixFQUVwQjtBQUNELENBSk07QUFNQSxNQUFNSCxrQkFBa0IsR0FBSUUsR0FBRCxJQUFTO0FBQzFDLGFBQXFCLEVBRXBCO0FBQ0QsQ0FKTTtBQU1BLE1BQU1JLFlBQVksR0FBRyxDQUFDQyxJQUFELEVBQU9ULElBQVAsS0FBZ0I7QUFDM0NHLFdBQVMsQ0FBQyxPQUFELEVBQVVNLElBQUksQ0FBQ0MsS0FBZixDQUFUO0FBQ0EsUUFBTTtBQUFFQyxRQUFGO0FBQVFDLFNBQVI7QUFBZUMsV0FBZjtBQUF3QkM7QUFBeEIsTUFBZ0NMLElBQXRDO0FBQ0EsUUFBTTFCLElBQUksR0FBRztBQUFFNEIsUUFBRjtBQUFRQyxTQUFSO0FBQWVDLFdBQWY7QUFBd0JDO0FBQXhCLEdBQWIsQ0FIMkMsQ0FJM0M7O0FBQ0FQLGlCQUFlLENBQUMsTUFBRCxFQUFTeEIsSUFBVCxDQUFmO0FBQ0FpQixNQUFJO0FBQ0osQ0FQTTtBQVNBLE1BQU1lLE1BQU0sR0FBRyxNQUFNO0FBQzNCLGFBQXFCLEVBU3BCO0FBQ0QsQ0FYTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0ZQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQSxNQUFNQyxlQUFlLEdBQUdDLDZEQUFlLENBQUM7QUFDdkNDLFFBQU0sRUFBRUMsb0VBRCtCO0FBRXZDQyxVQUFRLEVBQUVDLHNFQUY2QjtBQUd2Q0MsVUFBUSxFQUFFQyxzRUFINkI7QUFJdkNDLFVBQVEsRUFBRUMsc0VBQWVBO0FBSmMsQ0FBRCxDQUF2QyxDLENBT0E7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUNsQyxNQUFJQSxNQUFNLENBQUNDLElBQVAsS0FBZ0JDLDBEQUFwQixFQUE2QjtBQUM1QixVQUFNQyxTQUFTLG1DQUNYSixLQURXLEdBRVhDLE1BQU0sQ0FBQ0ksT0FGSSxDQUFmLENBRDRCLENBSzVCOzs7QUFDQSxXQUFPRCxTQUFQO0FBQ0EsR0FQRCxNQU9PO0FBQ04sV0FBT2YsZUFBZSxDQUFDVyxLQUFELEVBQVFDLE1BQVIsQ0FBdEI7QUFDQTtBQUNELENBWEQ7O0FBYUEsSUFBSUssTUFBTSxHQUFHLE9BQU9DLE1BQVAsS0FBa0IsV0FBL0I7QUFDQSxJQUFJQyxtQkFBbUIsR0FBRyxJQUExQjs7QUFDQSxJQUFJLENBQUNGLE1BQUwsRUFBYTtBQUNaRSxxQkFBbUIsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLElBQ25CL0MsSUFBSSxDQUFDZ0QsS0FBTCxDQUFXRixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBWCxDQURtQixHQUVuQixJQUZIO0FBR0E7O0FBQ0QsTUFBTUUsbUJBQW1CLEdBQUdqQyxzRUFBUyxDQUFDLE9BQUQsQ0FBVCxHQUN6QmhCLElBQUksQ0FBQ2dELEtBQUwsQ0FBV2hDLHNFQUFTLENBQUMsT0FBRCxDQUFwQixDQUR5QixHQUV6QixJQUZILEMsQ0FJQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTWtDLFlBQVksR0FBRztBQUNwQkMsV0FBUyxFQUFFO0FBQUUvQixTQUFLLEVBQUU2QixtQkFBVDtBQUE4QnhELFFBQUksRUFBRW9EO0FBQXBDO0FBRFMsQ0FBckIsQyxDQUlBOztBQUNBLE1BQU1PLFNBQVMsR0FBSUMsT0FBRCxJQUFhQyx5REFBVyxDQUFDbEIsT0FBRCxDQUExQyxDLENBRUE7OztBQUNPLE1BQU1tQixPQUFPLEdBQUdDLHdFQUFhLENBQUNKLFNBQUQsRUFBWTtBQUFFSyxPQUFLLEVBQUU7QUFBVCxDQUFaLENBQTdCLEM7Ozs7Ozs7Ozs7OztBQ3ZEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLE1BQU07QUFBRUM7QUFBRixJQUEwQkMsa0RBQVMsRUFBekM7QUFFTyxNQUFNaEUsR0FBRyxHQUFHK0QsbUJBQW1CLENBQUNFLFVBQXBCLEdBQ2hCRixtQkFBbUIsQ0FBQ0csY0FESixHQUVoQkgsbUJBQW1CLENBQUNJLGVBRmhCO0FBSUEsTUFBTUMsUUFBUSxHQUFHTCxtQkFBbUIsQ0FBQ0ssUUFBckM7QUFFQSxNQUFNQyxNQUFNLEdBQUdOLG1CQUFtQixDQUFDRSxVQUFwQixHQUNuQkYsbUJBQW1CLENBQUNPLGlCQURELEdBRW5CUCxtQkFBbUIsQ0FBQ1Esa0JBRmhCLEM7Ozs7Ozs7Ozs7OztBQ1RQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLFlBQVksR0FBRyxjQUFyQixDLENBRVA7QUFDQTtBQUNBOztBQUVPLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFFQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUVBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUVBLE1BQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLE1BQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUVBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUVBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUVBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNDLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN4QyxzQkFDQztBQUFBLDRCQUNDLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0M7QUFDQyxZQUFJLEVBQUMsVUFETjtBQUVDLGVBQU8sRUFBQztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUtDO0FBQU0sV0FBRyxFQUFDLFlBQVY7QUFBdUIsWUFBSSxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQVFDLHFFQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJELGVBVUM7QUFDQyxTQUFHLEVBQUMsa0RBREw7QUFFQyxlQUFTLEVBQUMseUVBRlg7QUFHQyxpQkFBVyxFQUFDO0FBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZELGVBY0M7QUFDQyxTQUFHLEVBQUMsOEVBREw7QUFFQyxlQUFTLEVBQUMseUVBRlg7QUFHQyxpQkFBVyxFQUFDO0FBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRELGVBa0JDO0FBQ0MsU0FBRyxFQUFDLFlBREw7QUFFQyxVQUFJLEVBQUMsNEVBRk47QUFHQyxlQUFTLEVBQUMsaUdBSFg7QUFJQyxpQkFBVyxFQUFDO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCRDtBQUFBLGtCQUREO0FBMkJBOztBQUVjN0Msd0hBQU8sQ0FBQzhDLFNBQVIsQ0FBa0JILEtBQWxCLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDcENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0JPLE1BQU1yRSxhQUFhLEdBQUcsQ0FBQ1EsS0FBSyxHQUFHO0FBQUVpRSxLQUFHLEVBQUU7QUFBUCxDQUFULEVBQXNCaEUsTUFBdEIsS0FBaUM7QUFDN0QsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0MsU0FBSzRCLHdFQUFMO0FBQ0MsYUFBTztBQUFFb0MsZUFBTyxFQUFFLElBQVg7QUFBaUJELFdBQUcsRUFBRTtBQUF0QixPQUFQOztBQUNELFNBQUtsQyx3RUFBTDtBQUNDLGFBQU87QUFDTm1DLGVBQU8sRUFBRSxLQURIO0FBRU5ELFdBQUcsRUFBRWhFLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlNEQsR0FGZCxDQUdOO0FBQ0E7O0FBSk0sT0FBUDs7QUFNRCxTQUFLakMscUVBQUw7QUFDQyxhQUFPO0FBQUVrQyxlQUFPLEVBQUUsS0FBWDtBQUFrQkMsYUFBSyxFQUFFbEUsTUFBTSxDQUFDSTtBQUFoQyxPQUFQOztBQUNEO0FBQ0MsYUFBT0wsS0FBUDtBQWJGO0FBZUEsQ0FoQk07QUFrQkEsTUFBTU4sZUFBZSxHQUFHLENBQUNNLEtBQUssR0FBRyxFQUFULEVBQWFDLE1BQWIsS0FBd0I7QUFDdEQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0MsU0FBSytCLDBFQUFMO0FBQ0MsYUFBTztBQUNOaUMsZUFBTyxFQUFFO0FBREgsT0FBUDs7QUFHRCxTQUFLaEMsMEVBQUw7QUFDQyxhQUFPO0FBQ05nQyxlQUFPLEVBQUUsS0FESDtBQUVORSxlQUFPLEVBQUU7QUFGSCxPQUFQOztBQUlELFNBQUtqQyx1RUFBTDtBQUNDLGFBQU87QUFDTitCLGVBQU8sRUFBRSxLQURIO0FBRU5DLGFBQUssRUFBRWxFLE1BQU0sQ0FBQ0k7QUFGUixPQUFQOztBQUlEO0FBQ0MsYUFBT0wsS0FBUDtBQWhCRjtBQWtCQSxDQW5CTTtBQXFCQSxNQUFNSixlQUFlLEdBQUcsQ0FBQ0ksS0FBSyxHQUFHLEVBQVQsRUFBYUMsTUFBYixLQUF3QjtBQUN0RCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDQyxTQUFLa0MsMEVBQUw7QUFDQyxhQUFPO0FBQ044QixlQUFPLEVBQUU7QUFESCxPQUFQOztBQUdELFNBQUs3QiwwRUFBTDtBQUNDLGFBQU87QUFDTjZCLGVBQU8sRUFBRSxLQURIO0FBRU5FLGVBQU8sRUFBRSxJQUZIO0FBR05DLFVBQUUsRUFBRXBFLE1BQU0sQ0FBQ0k7QUFITCxPQUFQOztBQUtELFNBQUtpQyx1RUFBTDtBQUNDLGFBQU87QUFDTjRCLGVBQU8sRUFBRSxLQURIO0FBRU5DLGFBQUssRUFBRWxFLE1BQU0sQ0FBQ0k7QUFGUixPQUFQOztBQUlELFNBQUtrQyx3RUFBTDtBQUNDLGFBQU8sRUFBUDs7QUFDRDtBQUNDLGFBQU92QyxLQUFQO0FBbkJGO0FBcUJBLENBdEJNO0FBd0JBLE1BQU1GLGVBQWUsR0FBRyxDQUFDRSxLQUFLLEdBQUc7QUFBRXFFLElBQUUsRUFBRTtBQUFOLENBQVQsRUFBcUJwRSxNQUFyQixLQUFnQztBQUM5RCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDQyxTQUFLc0MsMEVBQUw7QUFDQyxhQUFPO0FBQ04wQixlQUFPLEVBQUU7QUFESCxPQUFQOztBQUdELFNBQUt6QiwwRUFBTDtBQUNDLGFBQU87QUFDTnlCLGVBQU8sRUFBRSxLQURIO0FBRU5FLGVBQU8sRUFBRSxJQUZIO0FBR05DLFVBQUUsRUFBRXBFLE1BQU0sQ0FBQ0k7QUFITCxPQUFQOztBQUtELFNBQUtxQyx1RUFBTDtBQUNDLGFBQU87QUFDTndCLGVBQU8sRUFBRSxLQURIO0FBRU5DLGFBQUssRUFBRWxFLE1BQU0sQ0FBQ0k7QUFGUixPQUFQOztBQUlELFNBQUtzQyx3RUFBTDtBQUNDLGFBQU87QUFDTjBCLFVBQUUsRUFBRTtBQURFLE9BQVA7O0FBR0Q7QUFDQyxhQUFPckUsS0FBUDtBQXJCRjtBQXVCQSxDQXhCTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZQLDZDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgaGFuZGxlUmVzcG9uc2UgPSAocmVzcG9uc2UpID0+IHtcclxuLy8gXHRpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuLy8gXHRcdHNpZ25vdXQoKCkgPT4ge1xyXG4vLyBcdFx0XHRSb3V0ZXIucHVzaCh7XHJcbi8vIFx0XHRcdFx0cGF0aG5hbWU6ICcvbG9naW4nLFxyXG4vLyBcdFx0XHRcdHF1ZXJ5OiB7XHJcbi8vIFx0XHRcdFx0XHRtZXNzYWdlOlxyXG4vLyBcdFx0XHRcdFx0XHQnVm90cmUgY2Vzc2lvbiDDoCBleHBpcsOpLCBtZXJjaSBkZSB2b3VzIHJlY29ubmVjdGVyLicsXHJcbi8vIFx0XHRcdFx0fSxcclxuLy8gXHRcdFx0fSk7XHJcbi8vIFx0XHR9KTtcclxuLy8gXHR9IGVsc2Uge1xyXG4vLyBcdFx0cmV0dXJuO1xyXG4vLyBcdH1cclxuLy8gfTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbiA9ICh1c2VyKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vYWRtaW4vbG9naW5gLCB7XHJcblx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHR9LFxyXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkodXNlciksXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAobmV4dCkgPT4ge1xyXG5cdHJlbW92ZUNvb2tpZSgndG9rZW4nKTtcclxuXHRyZW1vdmVMb2NhbFN0b3JhZ2UoJ3VzZXInKTtcclxuXHRuZXh0KCk7XHJcblxyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L2FkbWluL2xvZ291dGAsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnVm91cyDDqnRlcyBtYWludGVuYW50IGTDqWNvbm5lY3TDqScpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0XHR9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG5cdGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuXHRcdGNvb2tpZS5zZXQoa2V5LCB2YWx1ZSwge1xyXG5cdFx0XHRleHBpcmVzOiAxLFxyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvb2tpZSA9IChrZXkpID0+IHtcclxuXHRpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcblx0XHRjb29raWUucmVtb3ZlKGtleSwge1xyXG5cdFx0XHRleHBpcmVzOiAxLFxyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IChrZXkpID0+IHtcclxuXHRpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcblx0XHRyZXR1cm4gY29va2llLmdldChrZXkpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRMb2NhbFN0b3JhZ2UgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG5cdGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlTG9jYWxTdG9yYWdlID0gKGtleSkgPT4ge1xyXG5cdGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuXHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhlbnRpY2F0ZSA9IChkYXRhLCBuZXh0KSA9PiB7XHJcblx0c2V0Q29va2llKCd0b2tlbicsIGRhdGEudG9rZW4pO1xyXG5cdGNvbnN0IHsgbmFtZSwgZW1haWwsIGlzQWRtaW4sIF9pZCB9ID0gZGF0YTtcclxuXHRjb25zdCB1c2VyID0geyBuYW1lLCBlbWFpbCwgaXNBZG1pbiwgX2lkIH07XHJcblx0Ly8gY29uc29sZS5sb2coJ3VzZXIgZGFucyBhdXRoZW50aWNhdGUnLCB1c2VyKTtcclxuXHRzZXRMb2NhbFN0b3JhZ2UoJ3VzZXInLCB1c2VyKTtcclxuXHRuZXh0KCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaXNBdXRoID0gKCkgPT4ge1xyXG5cdGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuXHRcdGNvbnN0IGNvb2tpZUNoZWNrZWQgPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblx0XHRpZiAoY29va2llQ2hlY2tlZCkge1xyXG5cdFx0XHRpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkge1xyXG5cdFx0XHRcdHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciwgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuaW1wb3J0IHtcclxuXHRRUkNyZWF0ZVJlZHVjZXIsXHJcblx0UVJEZWxldGVSZWR1Y2VyLFxyXG5cdFFSTGlzdFJlZHVjZXIsXHJcblx0UVJVcGRhdGVSZWR1Y2VyLFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL2dpdGVSZWR1Y2Vycyc7XHJcblxyXG5jb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG5cdFFSTGlzdDogUVJMaXN0UmVkdWNlcixcclxuXHRRUkRlbGV0ZTogUVJEZWxldGVSZWR1Y2VyLFxyXG5cdFFSQ3JlYXRlOiBRUkNyZWF0ZVJlZHVjZXIsXHJcblx0UVJVcGRhdGU6IFFSVXBkYXRlUmVkdWNlcixcclxufSk7XHJcblxyXG4vLyBjcmVhdGUgeW91ciByZWR1Y2VyXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdGlmIChhY3Rpb24udHlwZSA9PT0gSFlEUkFURSkge1xyXG5cdFx0Y29uc3QgbmV4dFN0YXRlID0ge1xyXG5cdFx0XHQuLi5zdGF0ZSwgLy8gdXNlIHByZXZpb3VzIHN0YXRlXHJcblx0XHRcdC4uLmFjdGlvbi5wYXlsb2FkLCAvLyBhcHBseSBkZWx0YSBmcm9tIGh5ZHJhdGlvblxyXG5cdFx0fTtcclxuXHRcdC8vICAgaWYgKHN0YXRlLmNvdW50KSBuZXh0U3RhdGUuY291bnQgPSBzdGF0ZS5jb3VudCAvLyBwcmVzZXJ2ZSBjb3VudCB2YWx1ZSBvbiBjbGllbnQgc2lkZSBuYXZpZ2F0aW9uXHJcblx0XHRyZXR1cm4gbmV4dFN0YXRlO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gY29tYmluZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG5cdH1cclxufTtcclxuXHJcbnZhciBpc05vZGUgPSB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJztcclxubGV0IHVzZXJJbmZvRnJvbVN0b3JhZ2UgPSBudWxsO1xyXG5pZiAoIWlzTm9kZSkge1xyXG5cdHVzZXJJbmZvRnJvbVN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpXHJcblx0XHQ/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSlcclxuXHRcdDogbnVsbDtcclxufVxyXG5jb25zdCB1c2VyVG9rZW5Gcm9tQ29va2llID0gZ2V0Q29va2llKCd0b2tlbicpXHJcblx0PyBKU09OLnBhcnNlKGdldENvb2tpZSgndG9rZW4nKSlcclxuXHQ6IG51bGw7XHJcblxyXG4vLyBjb25zdCB1c2VySW5mb0Zyb21TdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKVxyXG4vLyBcdD8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxyXG4vLyBcdDogbnVsbDtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHR1c2VyTG9naW46IHsgdG9rZW46IHVzZXJUb2tlbkZyb21Db29raWUsIHVzZXI6IHVzZXJJbmZvRnJvbVN0b3JhZ2UgfSxcclxufTtcclxuXHJcbi8vIGNyZWF0ZSBhIG1ha2VTdG9yZSBmdW5jdGlvblxyXG5jb25zdCBtYWtlU3RvcmUgPSAoY29udGV4dCkgPT4gY3JlYXRlU3RvcmUocmVkdWNlcik7XHJcblxyXG4vLyBleHBvcnQgYW4gYXNzZW1ibGVkIHdyYXBwZXJcclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSwgeyBkZWJ1ZzogdHJ1ZSB9KTtcclxuIiwiaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZyc7XHJcbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XHJcblxyXG5leHBvcnQgY29uc3QgQVBJID0gcHVibGljUnVudGltZUNvbmZpZy5QUk9EVUNUSU9OXHJcblx0PyBwdWJsaWNSdW50aW1lQ29uZmlnLkFQSV9QUk9EVUNUSU9OXHJcblx0OiBwdWJsaWNSdW50aW1lQ29uZmlnLkFQSV9ERVZFTE9QTUVOVDtcclxuXHJcbmV4cG9ydCBjb25zdCBBUFBfTkFNRSA9IHB1YmxpY1J1bnRpbWVDb25maWcuQVBQX05BTUU7XHJcblxyXG5leHBvcnQgY29uc3QgRE9NQUlOID0gcHVibGljUnVudGltZUNvbmZpZy5QUk9EVUNUSU9OXHJcblx0PyBwdWJsaWNSdW50aW1lQ29uZmlnLkRPTUFJTl9QUk9EVUNUSU9OXHJcblx0OiBwdWJsaWNSdW50aW1lQ29uZmlnLkRPTUFJTl9ERVZFTE9QTUVOVDtcclxuIiwiZXhwb3J0IGNvbnN0IFFSX0xJU1RfUkVRVUVTVCA9ICdRUl9MSVNUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUVJfTElTVF9TVUNDRVNTID0gJ1FSX0xJU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBRUl9MSVNUX0ZBSUwgPSAnUVJfTElTVF9GQUlMJztcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBRUl9ERVRBSUxTX1JFUVVFU1QgPSAnUVJfREVUQUlMU19SRVFVRVNUJztcclxuLy8gZXhwb3J0IGNvbnN0IFFSX0RFVEFJTFNfU1VDQ0VTUyA9ICdRUl9ERVRBSUxTX1NVQ0NFU1MnO1xyXG4vLyBleHBvcnQgY29uc3QgUVJfREVUQUlMU19GQUlMID0gJ1FSX0RFVEFJTFNfRkFJTCc7XHJcblxyXG5leHBvcnQgY29uc3QgUVJfREVMRVRFX1JFUVVFU1QgPSAnUVJfREVMRVRFX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUVJfREVMRVRFX1NVQ0NFU1MgPSAnUVJfREVMRVRFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUVJfREVMRVRFX0ZBSUwgPSAnUVJfREVMRVRFX0ZBSUwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFFSX0NSRUFURV9SRVFVRVNUID0gJ1FSX0NSRUFURV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFFSX0NSRUFURV9TVUNDRVNTID0gJ1FSX0NSRUFURV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFFSX0NSRUFURV9GQUlMID0gJ1FSX0NSRUFURV9GQUlMJztcclxuZXhwb3J0IGNvbnN0IFFSX0NSRUFURV9SRVNFVCA9ICdRUl9DUkVBVEVfUkVTRVQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFFSX1VQREFURV9SRVFVRVNUID0gJ1FSX1VQREFURV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFFSX1VQREFURV9TVUNDRVNTID0gJ1FSX1VQREFURV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFFSX1VQREFURV9GQUlMID0gJ1FSX1VQREFURV9GQUlMJztcclxuZXhwb3J0IGNvbnN0IFFSX1VQREFURV9SRVNFVCA9ICdRUl9VUERBVEVfUkVTRVQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdJVEVfTElTVF9SRVFVRVNUID0gJ0dJVEVfTElTVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEdJVEVfTElTVF9TVUNDRVNTID0gJ0dJVEVfTElTVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEdJVEVfTElTVF9GQUlMID0gJ0dJVEVfTElTVF9GQUlMJztcclxuXHJcbmV4cG9ydCBjb25zdCBHSVRFX0RFVEFJTFNfUkVRVUVTVCA9ICdHSVRFX0RFVEFJTFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBHSVRFX0RFVEFJTFNfU1VDQ0VTUyA9ICdHSVRFX0RFVEFJTFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBHSVRFX0RFVEFJTFNfRkFJTCA9ICdHSVRFX0RFVEFJTFNfRkFJTCc7XHJcblxyXG5leHBvcnQgY29uc3QgR0lURV9ERUxFVEVfUkVRVUVTVCA9ICdHSVRFX0RFTEVURV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEdJVEVfREVMRVRFX1NVQ0NFU1MgPSAnR0lURV9ERUxFVEVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBHSVRFX0RFTEVURV9GQUlMID0gJ0dJVEVfREVMRVRFX0ZBSUwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdJVEVfQ1JFQVRFX1JFUVVFU1QgPSAnR0lURV9DUkVBVEVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBHSVRFX0NSRUFURV9TVUNDRVNTID0gJ0dJVEVfQ1JFQVRFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgR0lURV9DUkVBVEVfRkFJTCA9ICdHSVRFX0NSRUFURV9GQUlMJztcclxuZXhwb3J0IGNvbnN0IEdJVEVfQ1JFQVRFX1JFU0VUID0gJ0dJVEVfQ1JFQVRFX1JFU0VUJztcclxuXHJcbmV4cG9ydCBjb25zdCBHSVRFX1VQREFURV9SRVFVRVNUID0gJ0dJVEVfVVBEQVRFX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgR0lURV9VUERBVEVfU1VDQ0VTUyA9ICdHSVRFX1VQREFURV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEdJVEVfVVBEQVRFX0ZBSUwgPSAnR0lURV9VUERBVEVfRkFJTCc7XHJcbmV4cG9ydCBjb25zdCBHSVRFX1VQREFURV9SRVNFVCA9ICdHSVRFX1VQREFURV9SRVNFVCc7XHJcbiIsIi8vIHBhZ2VzL19hcHAuanNcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3RvcmUnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PG1ldGFcclxuXHRcdFx0XHRcdG5hbWU9J3ZpZXdwb3J0J1xyXG5cdFx0XHRcdFx0Y29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCdcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0nL3N0eWxlcy9nbG9iYWxzLmNzcycgLz5cclxuXHRcdFx0PC9IZWFkPlxyXG5cdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcblxyXG5cdFx0XHQ8c2NyaXB0XHJcblx0XHRcdFx0c3JjPSdodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy41LjEuc2xpbS5taW4uanMnXHJcblx0XHRcdFx0aW50ZWdyaXR5PSdzaGEzODQtRGZYZHoyaHRQSDBsc1NTczVuQ1RwdWovenk0QytPR3BhbW9GVnkzOE1WQm5FK0liYlZZVWV3K09yQ1hhUmtmaidcclxuXHRcdFx0XHRjcm9zc09yaWdpbj0nYW5vbnltb3VzJz48L3NjcmlwdD5cclxuXHRcdFx0PHNjcmlwdFxyXG5cdFx0XHRcdHNyYz0naHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANC41LjMvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qcydcclxuXHRcdFx0XHRpbnRlZ3JpdHk9J3NoYTM4NC1obytqN2p5V0s4Zk5RZStBMTJIYjhBaFJxMjZMclovSnBjVUdHT24rWTdSc3dlTnJ0Ti90RTNNb0s3WmVaRHl4J1xyXG5cdFx0XHRcdGNyb3NzT3JpZ2luPSdhbm9ueW1vdXMnPjwvc2NyaXB0PlxyXG5cdFx0XHQ8bGlua1xyXG5cdFx0XHRcdHJlbD0nc3R5bGVzaGVldCdcclxuXHRcdFx0XHRocmVmPSdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNS4yL2Nzcy9hbGwubWluLmNzcydcclxuXHRcdFx0XHRpbnRlZ3JpdHk9J3NoYTUxMi1ISzVmZ0xCTCt4dTZkbS9JaTN6NHhobFNVeVpnVFQ5dHVjL2hTcnR3NnV6Sk92Z1JyMmE5anl4eFQxZWx5K0IreEZBbUpLVlNUYnBNL0N1TDdxeE84dz09J1xyXG5cdFx0XHRcdGNyb3NzT3JpZ2luPSdhbm9ueW1vdXMnXHJcblx0XHRcdC8+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XHJcbiIsImltcG9ydCB7XHJcblx0UVJfTElTVF9SRVFVRVNULFxyXG5cdFFSX0xJU1RfU1VDQ0VTUyxcclxuXHRRUl9MSVNUX0ZBSUwsXHJcblx0Ly8gUVJfREVUQUlMU19SRVFVRVNULFxyXG5cdC8vIFFSX0RFVEFJTFNfU1VDQ0VTUyxcclxuXHQvLyBRUl9ERVRBSUxTX0ZBSUwsXHJcblx0UVJfREVMRVRFX1JFUVVFU1QsXHJcblx0UVJfREVMRVRFX1NVQ0NFU1MsXHJcblx0UVJfREVMRVRFX0ZBSUwsXHJcblx0UVJfQ1JFQVRFX1JFUVVFU1QsXHJcblx0UVJfQ1JFQVRFX1NVQ0NFU1MsXHJcblx0UVJfQ1JFQVRFX0ZBSUwsXHJcblx0UVJfQ1JFQVRFX1JFU0VULFxyXG5cdFFSX1VQREFURV9SRVFVRVNULFxyXG5cdFFSX1VQREFURV9TVUNDRVNTLFxyXG5cdFFSX1VQREFURV9GQUlMLFxyXG5cdFFSX1VQREFURV9SRVNFVCxcclxufSBmcm9tICcuLi9jb25zdGFudHMvZ2l0ZUNvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgUVJMaXN0UmVkdWNlciA9IChzdGF0ZSA9IHsgUVJzOiBbXSB9LCBhY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFFSX0xJU1RfUkVRVUVTVDpcclxuXHRcdFx0cmV0dXJuIHsgbG9hZGluZzogdHJ1ZSwgUVJzOiBbXSB9O1xyXG5cdFx0Y2FzZSBRUl9MSVNUX1NVQ0NFU1M6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0UVJzOiBhY3Rpb24ucGF5bG9hZC5RUnMsXHJcblx0XHRcdFx0Ly8gcGFnZXM6IGFjdGlvbi5wYXlsb2FkLnBhZ2VzLFxyXG5cdFx0XHRcdC8vIHBhZ2U6IGFjdGlvbi5wYXlsb2FkLnBhZ2UsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFFSX0xJU1RfRkFJTDpcclxuXHRcdFx0cmV0dXJuIHsgbG9hZGluZzogZmFsc2UsIGVycm9yOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBRUkRlbGV0ZVJlZHVjZXIgPSAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBRUl9ERUxFVEVfUkVRVUVTVDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRsb2FkaW5nOiB0cnVlLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBRUl9ERUxFVEVfU1VDQ0VTUzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRzdWNjZXNzOiB0cnVlLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBRUl9ERUxFVEVfRkFJTDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRlcnJvcjogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFFSQ3JlYXRlUmVkdWNlciA9IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFFSX0NSRUFURV9SRVFVRVNUOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGxvYWRpbmc6IHRydWUsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFFSX0NSRUFURV9TVUNDRVNTOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IHRydWUsXHJcblx0XHRcdFx0UVI6IGFjdGlvbi5wYXlsb2FkLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBRUl9DUkVBVEVfRkFJTDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRlcnJvcjogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFFSX0NSRUFURV9SRVNFVDpcclxuXHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBRUlVwZGF0ZVJlZHVjZXIgPSAoc3RhdGUgPSB7IFFSOiB7fSB9LCBhY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFFSX1VQREFURV9SRVFVRVNUOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGxvYWRpbmc6IHRydWUsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFFSX1VQREFURV9TVUNDRVNTOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IHRydWUsXHJcblx0XHRcdFx0UVI6IGFjdGlvbi5wYXlsb2FkLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBRUl9VUERBVEVfRkFJTDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRlcnJvcjogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFFSX1VQREFURV9SRVNFVDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRRUjoge30sXHJcblx0XHRcdH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==