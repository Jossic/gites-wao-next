module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/admin/reservation/[id]/contract/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "./actions/authActions.js":
/*!********************************!*\
  !*** ./actions/authActions.js ***!
  \********************************/
/*! exports provided: handleResponse, login, logout, setCookie, removeCookie, getCookie, setLocalStorage, removeLocalStorage, authenticate, isAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleResponse", function() { return handleResponse; });
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




const handleResponse = response => {
  if (response.status === 401) {
    signout(() => {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
        pathname: '/login',
        query: {
          message: 'Votre cession à expiré, merci de vous reconnecter.'
        }
      });
    });
  } else {
    return;
  }
};
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

/***/ "./actions/clientActions.js":
/*!**********************************!*\
  !*** ./actions/clientActions.js ***!
  \**********************************/
/*! exports provided: listAllClients, getClientById, afficheClient, removeClient, updateClient, envoiEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listAllClients", function() { return listAllClients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientById", function() { return getClientById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afficheClient", function() { return afficheClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClient", function() { return removeClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateClient", function() { return updateClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "envoiEmail", function() { return envoiEmail; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");


const listAllClients = token => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/client`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
}; // export const countNouvelleReservation = () => {
// 	return fetch(`${API}/reservation/count`, {
// 		method: 'GET',
// 	})
// 		.then((response) => {
// 			return response.json();
// 		})
// 		.catch((err) => console.log(err));
// };

const getClientById = (id, token) => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/client/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const afficheClient = id => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/client/${id}`, {
    method: 'GET'
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const removeClient = (id, token) => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/client/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const updateClient = (client, id, token) => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/client/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(client)
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const envoiEmail = (id, token) => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/client/${id}/mailer`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};

/***/ }),

/***/ "./actions/giteActions.js":
/*!********************************!*\
  !*** ./actions/giteActions.js ***!
  \********************************/
/*! exports provided: listGiteDetails, listeDesGites, listeDesImages, saveImageData, listGitesNoms, listGiteById, createGite, deleteGite, updateGite, createQR, listeOneQR, listeDesQR, removeQR, updateQR, listPhotosByNom, listPhotosBySection, listPhotosById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listGiteDetails", function() { return listGiteDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listeDesGites", function() { return listeDesGites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listeDesImages", function() { return listeDesImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveImageData", function() { return saveImageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listGitesNoms", function() { return listGitesNoms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listGiteById", function() { return listGiteById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGite", function() { return createGite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteGite", function() { return deleteGite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGite", function() { return updateGite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createQR", function() { return createQR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listeOneQR", function() { return listeOneQR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listeDesQR", function() { return listeDesQR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeQR", function() { return removeQR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateQR", function() { return updateQR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listPhotosByNom", function() { return listPhotosByNom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listPhotosBySection", function() { return listPhotosBySection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listPhotosById", function() { return listPhotosById; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");



const listGiteDetails = async slug => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/gite/${slug}`); // console.log(data);

    return data;
  } catch (error) {
    console.error(error);
  }
};
const listeDesGites = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/gites`, {
    method: 'GET'
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const listeDesImages = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/photos`, {
    method: 'GET'
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const saveImageData = (photos, token) => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/upload-images`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(photos)
  }).then(response => {
    // handleResponse(response);
    return response.json();
  }).catch(err => console.log(err));
};
const listGitesNoms = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/gites/noms`, {
    method: 'GET'
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const listGiteById = id => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/gite/id/${id}`, {
    method: 'GET'
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const createGite = (gite, token) => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/gite`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(gite)
  }).then(response => {
    // handleResponse(response);
    return response.json();
  }).catch(err => console.log(err));
};
const deleteGite = (slug, token) => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/gite/${slug}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    // handleResponse(response);
    return response.json();
  }).catch(err => console.log(err));
};
const updateGite = (gite, id, token) => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/gite/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(gite)
  }).then(response => {
    // handleResponse(response);
    return response.json();
  }).catch(err => console.log(err));
};
const createQR = (qr, token) => {
  console.log('dan action', qr);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/qr`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(qr)
  }).then(response => {
    // handleResponse(response);
    return response.json();
  }).catch(err => console.log(err));
};
const listeOneQR = (id, token) => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/qr/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const listeDesQR = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/qr`, {
    method: 'GET'
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const removeQR = (id, token) => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/qr/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const updateQR = (qr, id, token) => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/qr/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(qr)
  }).then(response => {
    // handleResponse(response);
    return response.json();
  }).catch(err => console.log(err));
};
const listPhotosByNom = async nom => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/photos/${nom}`); // console.log(data);

    return data;
  } catch (error) {
    console.error(error);
  }
};
const listPhotosBySection = async section => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/photos/section/${section}`); // console.log(data);

    return data;
  } catch (error) {
    console.error(error);
  }
};
const listPhotosById = async id => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/photo/${id}`); // console.log(data);

    return data;
  } catch (error) {
    console.error(error);
  }
};

/***/ }),

/***/ "./actions/reservationActions.js":
/*!***************************************!*\
  !*** ./actions/reservationActions.js ***!
  \***************************************/
/*! exports provided: createReservation, createContract, listAllReservations, countNouvelleReservation, listeOneReservation, afficheReservation, removeReservation, updateReservation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReservation", function() { return createReservation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContract", function() { return createContract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listAllReservations", function() { return listAllReservations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countNouvelleReservation", function() { return countNouvelleReservation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listeOneReservation", function() { return listeOneReservation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afficheReservation", function() { return afficheReservation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeReservation", function() { return removeReservation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateReservation", function() { return updateReservation; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");


const createReservation = reservation => {
  console.log('dans action', reservation);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/reservation`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reservation)
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const createContract = reservation => {
  console.log('dans action createContract', reservation);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/reservation/contract/:reservation`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // Authorization: `Bearer ${token}`,

    },
    body: JSON.stringify(reservation)
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const listAllReservations = token => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/reservation`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const countNouvelleReservation = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/reservation/count`, {
    method: 'GET'
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const listeOneReservation = (id, token) => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/reservation/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const afficheReservation = id => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/reservation/${id}/contract`, {
    method: 'GET'
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const removeReservation = (id, token) => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/reservation/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const updateReservation = (reservation, id, token) => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/reservation/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(reservation)
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};

/***/ }),

/***/ "./components/auth/Admin.js":
/*!**********************************!*\
  !*** ./components/auth/Admin.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/authActions */ "./actions/authActions.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Admin = ({
  children
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_2__["isAuth"])()) {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/login');
    } else if (Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_2__["isAuth"])().isAdmin === false) {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/login');
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Admin);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: API, APP_NAME, DOMAIN, RECAPTCHA_SECRET_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_NAME", function() { return APP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAIN", function() { return DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECAPTCHA_SECRET_KEY", function() { return RECAPTCHA_SECRET_KEY; });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);

const {
  publicRuntimeConfig
} = next_config__WEBPACK_IMPORTED_MODULE_0___default()();
const API = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.API_PRODUCTION : publicRuntimeConfig.API_DEVELOPMENT;
const APP_NAME = publicRuntimeConfig.APP_NAME;
const DOMAIN = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.DOMAIN_PRODUCTION : publicRuntimeConfig.DOMAIN_DEVELOPMENT;
const RECAPTCHA_SECRET_KEY = publicRuntimeConfig.RECAPTCHA_SECRET_KEY;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":["gites-wao.s3.amazonaws.com","gites-wao.s3.eu-west-3.amazonaws.com"]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout) {
  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout);
  const last = widths.length - 1;
  return {
    src: loader({
      src,
      quality,
      width: widths[last]
    }),
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', ')
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: isVisible ? 'inherit' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://err.sh/next.js/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./pages/admin/reservation/[id]/contract/index.js":
/*!********************************************************!*\
  !*** ./pages/admin/reservation/[id]/contract/index.js ***!
  \********************************************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_clientActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../actions/clientActions */ "./actions/clientActions.js");
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var _actions_reservationActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../actions/reservationActions */ "./actions/reservationActions.js");
/* harmony import */ var _components_auth_Admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../components/auth/Admin */ "./components/auth/Admin.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\admin\\reservation\\[id]\\contract\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["createMuiTheme"])({
  palette: {
    type: 'light'
  }
});
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    margin: '10px'
  },
  paper: {
    height: 230,
    width: 500,
    backgroundColor: '#dddddd',
    textAlign: 'center'
  },
  paperTitle: {
    height: 30,
    width: '100%',
    backgroundColor: '#cccccc',
    textAlign: 'center'
  }
}));

const ReservationId = ({
  reservation,
  client,
  gite
}) => {
  const classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
    theme: theme,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    container: true,
    spacing: 2,
    alignItems: "flex-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: "d-block w-100",
    src: gite.vignetteLink,
    alt: gite.nom,
    width: 500,
    height: 375,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 8
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 10,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    variant: "h5",
    component: "h5",
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 8
    }
  }, "CONTRAT DE LOCATION EN MEUBL\xC9 SAISONNIER ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 50
    }
  }), ' '), "Madame, Monsieur. Suite \xE0 votre demande, je vous adresse le pr\xE9sent contrat de location dont 1 exemplaire est \xE0 me retourner (par courrier ou mail) rev\xEAtu de votre signature et accompagn\xE9 du montant de l\u2019acompte (virement ou courrier). En esp\xE9rant avoir le plaisir de vous accueillir prochainement, recevez mes sinc\xE8res salutations.")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    container: true,
    direction: "row",
    justify: "space-around",
    spacing: 4,
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Paper"], {
    className: classes.paper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, "Entre la soci\xE9t\xE9 :"), "Si\xE9ge social ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 22
    }
  }), "SAS WAO ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }), "1 Route de Nouart ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 27
    }
  }), "08240 Foss\xE9, FRANCE ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 29
    }
  }), "Courrier :", ' ', __jsx("a", {
    href: "mailto:contact@gites-wao.fr",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, "contact@gites-wao.fr"), ' ', __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }), "Site internet :", ' ', __jsx("a", {
    href: "http://www.gites-wao.fr",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, "http://www.gites-wao.fr"), ' ', __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }), "Tel : +33 (0)3 24 30 08 95 ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 36
    }
  }), "IBAN : FR76 1020 6084 0398 3877 2925 093 ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 50
    }
  }), "BIC : AGRIFRPP802 ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 27
    }
  }), "TITULAIRE : SAS WAO ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 29
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Paper"], {
    className: classes.paper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 8
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, "Et le locataire :"), "Qualit\xE9 : ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 19
    }
  }, client.civilite), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }), "Pr\xE9nom et Nom :", ' ', __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, client.nom, " ", client.prenom), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }), "Adresse : ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 19
    }
  }, client.adresse), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }), "CP & Ville :", ' ', __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, client.cp, " ", client.ville), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }), "Pays : ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 16
    }
  }, client.pays), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }), "T\xE9l\xE9phone : ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    }
  }, client.tel), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }), "Courrier : ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 20
    }
  }, client.mail), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, "Pour la taxe de S\xE9jour nombre de personnes :"), "Taxables :", ' ', reservation.nbPers - reservation.nbEnf, " Non taxables : ", reservation.nbEnf, __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Paper"], {
    className: classes.paperTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  })))));
};

async function getServerSideProps(context) {
  // console.log('context', context.query.id);
  const res1 = await Object(_actions_reservationActions__WEBPACK_IMPORTED_MODULE_3__["afficheReservation"])(context.query.id);
  const reservation = await res1; // console.log('reservation', reservation);

  const res2 = await Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_2__["listGiteById"])(reservation.gite);
  const gite = await res2;
  const res3 = await Object(_actions_clientActions__WEBPACK_IMPORTED_MODULE_1__["afficheClient"])(reservation.client);
  const client = await res3;
  return {
    props: {
      reservation,
      gite,
      client
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (ReservationId);

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2F1dGhBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2FjdGlvbnMvY2xpZW50QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2dpdGVBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2FjdGlvbnMvcmVzZXJ2YXRpb25BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXV0aC9BZG1pbi5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2ltYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FkbWluL3Jlc2VydmF0aW9uLy9jb250cmFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9jb25maWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiaGFuZGxlUmVzcG9uc2UiLCJyZXNwb25zZSIsInN0YXR1cyIsInNpZ25vdXQiLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsIm1lc3NhZ2UiLCJsb2dpbiIsInVzZXIiLCJmZXRjaCIsIkFQSSIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJqc29uIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibG9nb3V0IiwibmV4dCIsInJlbW92ZUNvb2tpZSIsInJlbW92ZUxvY2FsU3RvcmFnZSIsInNldENvb2tpZSIsImtleSIsInZhbHVlIiwiZ2V0Q29va2llIiwic2V0TG9jYWxTdG9yYWdlIiwiYXV0aGVudGljYXRlIiwiZGF0YSIsInRva2VuIiwibmFtZSIsImVtYWlsIiwiaXNBZG1pbiIsIl9pZCIsImlzQXV0aCIsImxpc3RBbGxDbGllbnRzIiwiQXV0aG9yaXphdGlvbiIsImdldENsaWVudEJ5SWQiLCJpZCIsImFmZmljaGVDbGllbnQiLCJyZW1vdmVDbGllbnQiLCJ1cGRhdGVDbGllbnQiLCJjbGllbnQiLCJlbnZvaUVtYWlsIiwibGlzdEdpdGVEZXRhaWxzIiwic2x1ZyIsImF4aW9zIiwiZ2V0IiwiZXJyb3IiLCJsaXN0ZURlc0dpdGVzIiwibGlzdGVEZXNJbWFnZXMiLCJzYXZlSW1hZ2VEYXRhIiwicGhvdG9zIiwibGlzdEdpdGVzTm9tcyIsImxpc3RHaXRlQnlJZCIsImNyZWF0ZUdpdGUiLCJnaXRlIiwiZGVsZXRlR2l0ZSIsInVwZGF0ZUdpdGUiLCJjcmVhdGVRUiIsInFyIiwibGlzdGVPbmVRUiIsImxpc3RlRGVzUVIiLCJyZW1vdmVRUiIsInVwZGF0ZVFSIiwibGlzdFBob3Rvc0J5Tm9tIiwibm9tIiwibGlzdFBob3Rvc0J5U2VjdGlvbiIsInNlY3Rpb24iLCJsaXN0UGhvdG9zQnlJZCIsImNyZWF0ZVJlc2VydmF0aW9uIiwicmVzZXJ2YXRpb24iLCJjcmVhdGVDb250cmFjdCIsImxpc3RBbGxSZXNlcnZhdGlvbnMiLCJjb3VudE5vdXZlbGxlUmVzZXJ2YXRpb24iLCJsaXN0ZU9uZVJlc2VydmF0aW9uIiwiYWZmaWNoZVJlc2VydmF0aW9uIiwicmVtb3ZlUmVzZXJ2YXRpb24iLCJ1cGRhdGVSZXNlcnZhdGlvbiIsIkFkbWluIiwiY2hpbGRyZW4iLCJ1c2VFZmZlY3QiLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwiZ2V0Q29uZmlnIiwiUFJPRFVDVElPTiIsIkFQSV9QUk9EVUNUSU9OIiwiQVBJX0RFVkVMT1BNRU5UIiwiQVBQX05BTUUiLCJET01BSU4iLCJET01BSU5fUFJPRFVDVElPTiIsIkRPTUFJTl9ERVZFTE9QTUVOVCIsIlJFQ0FQVENIQV9TRUNSRVRfS0VZIiwiZ2xvYmFsIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJsb2FkZXJzIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImRldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImxvYWRlciIsInBhdGgiLCJkb21haW5zIiwicHJvY2VzcyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJhIiwibGF5b3V0Iiwid2lkdGhzIiwia2luZCIsIndpZHRoIiwidyIsInAiLCJzcmNTZXQiLCJzaXplcyIsImdldFdpZHRocyIsImxhc3QiLCJzcmMiLCJpIiwicGFyc2VJbnQiLCJsb2FkIiwicm9vdCIsIlZBTElEX0xPQURFUlMiLCJjb25maWdMb2FkZXIiLCJ1bm9wdGltaXplZCIsInByaW9yaXR5IiwiYWxsIiwicmVzdCIsInVuc2l6ZWQiLCJCb29sZWFuIiwibG9hZGluZyIsImlzTGF6eSIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndpZHRoSW50IiwiZ2V0SW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImltZ1N0eWxlIiwidmlzaWJpbGl0eSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJoZWlnaHQiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaXNOYU4iLCJ3cmFwcGVyU3R5bGUiLCJvdmVyZmxvdyIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ0F0dHJpYnV0ZXMiLCJnZW5lcmF0ZUltZ0F0dHJzIiwicXVhbGl0eSIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm5vcm1hbGl6ZVNyYyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJjb25maWdEb21haW5zIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInNldFJlZiIsImVsIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJvcHRpb25zIiwiaW5zdGFuY2UiLCJlbnRyaWVzIiwiZW50cnkiLCJjYWxsYmFjayIsInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwidHlwZSIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJmbGV4R3JvdyIsInBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwidGV4dEFsaWduIiwicGFwZXJUaXRsZSIsIlJlc2VydmF0aW9uSWQiLCJjbGFzc2VzIiwidmlnbmV0dGVMaW5rIiwiY2l2aWxpdGUiLCJwcmVub20iLCJhZHJlc3NlIiwiY3AiLCJ2aWxsZSIsInBheXMiLCJ0ZWwiLCJtYWlsIiwibmJQZXJzIiwibmJFbmYiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVzMSIsInJlczIiLCJyZXMzIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFD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dURBQUQ7QUFBTyxhQUFTLEVBQUVYLE9BQU8sQ0FBQ0YsVUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBMUZELENBSEQsQ0FERCxDQUREO0FBc0dBLENBekdEOztBQTJHTyxlQUFlYyxrQkFBZixDQUFrQ0MsT0FBbEMsRUFBMkM7QUFDakQ7QUFDQSxRQUFNQyxJQUFJLEdBQUcsTUFBTXBKLHNGQUFrQixDQUFDbUosT0FBTyxDQUFDL04sS0FBUixDQUFjc0MsRUFBZixDQUFyQztBQUNBLFFBQU1pQyxXQUFXLEdBQUcsTUFBTXlKLElBQTFCLENBSGlELENBSWpEOztBQUNBLFFBQU1DLElBQUksR0FBRyxNQUFNM0sseUVBQVksQ0FBQ2lCLFdBQVcsQ0FBQ2YsSUFBYixDQUEvQjtBQUNBLFFBQU1BLElBQUksR0FBRyxNQUFNeUssSUFBbkI7QUFDQSxRQUFNQyxJQUFJLEdBQUcsTUFBTTNMLDRFQUFhLENBQUNnQyxXQUFXLENBQUM3QixNQUFiLENBQWhDO0FBQ0EsUUFBTUEsTUFBTSxHQUFHLE1BQU13TCxJQUFyQjtBQUVBLFNBQU87QUFDTkMsU0FBSyxFQUFFO0FBQ041SixpQkFETTtBQUVOZixVQUZNO0FBR05kO0FBSE07QUFERCxHQUFQO0FBT0E7QUFFY3VLLDRFQUFmLEU7Ozs7Ozs7Ozs7O0FDdEtBLDhDOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2FkbWluL3Jlc2VydmF0aW9uL1tpZF0vY29udHJhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FkbWluL3Jlc2VydmF0aW9uL1tpZF0vY29udHJhY3QvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVSZXNwb25zZSA9IChyZXNwb25zZSkgPT4ge1xyXG5cdGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG5cdFx0c2lnbm91dCgoKSA9PiB7XHJcblx0XHRcdFJvdXRlci5wdXNoKHtcclxuXHRcdFx0XHRwYXRobmFtZTogJy9sb2dpbicsXHJcblx0XHRcdFx0cXVlcnk6IHtcclxuXHRcdFx0XHRcdG1lc3NhZ2U6XHJcblx0XHRcdFx0XHRcdCdWb3RyZSBjZXNzaW9uIMOgIGV4cGlyw6ksIG1lcmNpIGRlIHZvdXMgcmVjb25uZWN0ZXIuJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKHVzZXIpID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9hZG1pbi9sb2dpbmAsIHtcclxuXHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdH0sXHJcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dCA9IChuZXh0KSA9PiB7XHJcblx0cmVtb3ZlQ29va2llKCd0b2tlbicpO1xyXG5cdHJlbW92ZUxvY2FsU3RvcmFnZSgndXNlcicpO1xyXG5cdG5leHQoKTtcclxuXHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vYWRtaW4vbG9nb3V0YCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdWb3VzIMOqdGVzIG1haW50ZW5hbnQgZMOpY29ubmVjdMOpJyk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHRcdH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldENvb2tpZSA9IChrZXksIHZhbHVlKSA9PiB7XHJcblx0aWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG5cdFx0Y29va2llLnNldChrZXksIHZhbHVlLCB7XHJcblx0XHRcdGV4cGlyZXM6IDEwLFxyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvb2tpZSA9IChrZXkpID0+IHtcclxuXHRpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcblx0XHRjb29raWUucmVtb3ZlKGtleSwge1xyXG5cdFx0XHRleHBpcmVzOiAxLFxyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IChrZXkpID0+IHtcclxuXHRpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcblx0XHRyZXR1cm4gY29va2llLmdldChrZXkpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRMb2NhbFN0b3JhZ2UgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG5cdGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlTG9jYWxTdG9yYWdlID0gKGtleSkgPT4ge1xyXG5cdGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuXHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhlbnRpY2F0ZSA9IChkYXRhLCBuZXh0KSA9PiB7XHJcblx0c2V0Q29va2llKCd0b2tlbicsIGRhdGEudG9rZW4pO1xyXG5cdGNvbnN0IHsgbmFtZSwgZW1haWwsIGlzQWRtaW4sIF9pZCB9ID0gZGF0YTtcclxuXHRjb25zdCB1c2VyID0geyBuYW1lLCBlbWFpbCwgaXNBZG1pbiwgX2lkIH07XHJcblx0Ly8gY29uc29sZS5sb2coJ3VzZXIgZGFucyBhdXRoZW50aWNhdGUnLCB1c2VyKTtcclxuXHRzZXRMb2NhbFN0b3JhZ2UoJ3VzZXInLCB1c2VyKTtcclxuXHRuZXh0KCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaXNBdXRoID0gKCkgPT4ge1xyXG5cdGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuXHRcdGNvbnN0IGNvb2tpZUNoZWNrZWQgPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblx0XHRpZiAoY29va2llQ2hlY2tlZCkge1xyXG5cdFx0XHRpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkge1xyXG5cdFx0XHRcdHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuIiwiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RBbGxDbGllbnRzID0gKHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vY2xpZW50YCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgY291bnROb3V2ZWxsZVJlc2VydmF0aW9uID0gKCkgPT4ge1xyXG4vLyBcdHJldHVybiBmZXRjaChgJHtBUEl9L3Jlc2VydmF0aW9uL2NvdW50YCwge1xyXG4vLyBcdFx0bWV0aG9kOiAnR0VUJyxcclxuLy8gXHR9KVxyXG4vLyBcdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbi8vIFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbi8vIFx0XHR9KVxyXG4vLyBcdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENsaWVudEJ5SWQgPSAoaWQsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vY2xpZW50LyR7aWR9YCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWZmaWNoZUNsaWVudCA9IChpZCkgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L2NsaWVudC8ke2lkfWAsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVDbGllbnQgPSAoaWQsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vY2xpZW50LyR7aWR9YCwge1xyXG5cdFx0bWV0aG9kOiAnREVMRVRFJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlQ2xpZW50ID0gKGNsaWVudCwgaWQsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vY2xpZW50LyR7aWR9YCwge1xyXG5cdFx0bWV0aG9kOiAnUFVUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoY2xpZW50KSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudm9pRW1haWwgPSAoaWQsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vY2xpZW50LyR7aWR9L21haWxlcmAsIHtcclxuXHRcdG1ldGhvZDogJ1BVVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4uL2NvbmZpZyc7XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdEdpdGVEZXRhaWxzID0gYXN5bmMgKHNsdWcpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJfS9naXRlLyR7c2x1Z31gKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0ZURlc0dpdGVzID0gKCkgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L2dpdGVzYCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RlRGVzSW1hZ2VzID0gKCkgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3Bob3Rvc2AsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzYXZlSW1hZ2VEYXRhID0gKHBob3RvcywgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS91cGxvYWQtaW1hZ2VzYCwge1xyXG5cdFx0bWV0aG9kOiAnUFVUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkocGhvdG9zKSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdC8vIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdEdpdGVzTm9tcyA9ICgpID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9naXRlcy9ub21zYCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RHaXRlQnlJZCA9IChpZCkgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L2dpdGUvaWQvJHtpZH1gLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlR2l0ZSA9IChnaXRlLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L2dpdGVgLCB7XHJcblx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoZ2l0ZSksXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHQvLyBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUdpdGUgPSAoc2x1ZywgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9naXRlLyR7c2x1Z31gLCB7XHJcblx0XHRtZXRob2Q6ICdERUxFVEUnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0Ly8gaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVHaXRlID0gKGdpdGUsIGlkLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L2dpdGUvJHtpZH1gLCB7XHJcblx0XHRtZXRob2Q6ICdQVVQnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShnaXRlKSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdC8vIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlUVIgPSAocXIsIHRva2VuKSA9PiB7XHJcblx0Y29uc29sZS5sb2coJ2RhbiBhY3Rpb24nLCBxcik7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vcXJgLCB7XHJcblx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHFyKSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdC8vIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdGVPbmVRUiA9IChpZCwgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9xci8ke2lkfWAsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RlRGVzUVIgPSAoKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vcXJgLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlUVIgPSAoaWQsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vcXIvJHtpZH1gLCB7XHJcblx0XHRtZXRob2Q6ICdERUxFVEUnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlUVIgPSAocXIsIGlkLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3FyLyR7aWR9YCwge1xyXG5cdFx0bWV0aG9kOiAnUFVUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkocXIpLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0Ly8gaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0UGhvdG9zQnlOb20gPSBhc3luYyAobm9tKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSX0vcGhvdG9zLyR7bm9tfWApO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRyZXR1cm4gZGF0YTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RQaG90b3NCeVNlY3Rpb24gPSBhc3luYyAoc2VjdGlvbikgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgJHtBUEl9L3Bob3Rvcy9zZWN0aW9uLyR7c2VjdGlvbn1gKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0UGhvdG9zQnlJZCA9IGFzeW5jIChpZCkgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgJHtBUEl9L3Bob3RvLyR7aWR9YCk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdHJldHVybiBkYXRhO1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHR9XHJcbn07XHJcbiIsImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVSZXNlcnZhdGlvbiA9IChyZXNlcnZhdGlvbikgPT4ge1xyXG5cdGNvbnNvbGUubG9nKCdkYW5zIGFjdGlvbicsIHJlc2VydmF0aW9uKTtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXNlcnZhdGlvbmAsIHtcclxuXHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0fSxcclxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlc2VydmF0aW9uKSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5leHBvcnQgY29uc3QgY3JlYXRlQ29udHJhY3QgPSAocmVzZXJ2YXRpb24pID0+IHtcclxuXHRjb25zb2xlLmxvZygnZGFucyBhY3Rpb24gY3JlYXRlQ29udHJhY3QnLCByZXNlcnZhdGlvbik7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vcmVzZXJ2YXRpb24vY29udHJhY3QvOnJlc2VydmF0aW9uYCwge1xyXG5cdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdC8vIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlc2VydmF0aW9uKSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RBbGxSZXNlcnZhdGlvbnMgPSAodG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXNlcnZhdGlvbmAsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvdW50Tm91dmVsbGVSZXNlcnZhdGlvbiA9ICgpID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXNlcnZhdGlvbi9jb3VudGAsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0ZU9uZVJlc2VydmF0aW9uID0gKGlkLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3Jlc2VydmF0aW9uLyR7aWR9YCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWZmaWNoZVJlc2VydmF0aW9uID0gKGlkKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vcmVzZXJ2YXRpb24vJHtpZH0vY29udHJhY3RgLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlUmVzZXJ2YXRpb24gPSAoaWQsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vcmVzZXJ2YXRpb24vJHtpZH1gLCB7XHJcblx0XHRtZXRob2Q6ICdERUxFVEUnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVSZXNlcnZhdGlvbiA9IChyZXNlcnZhdGlvbiwgaWQsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vcmVzZXJ2YXRpb24vJHtpZH1gLCB7XHJcblx0XHRtZXRob2Q6ICdQVVQnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShyZXNlcnZhdGlvbiksXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgaXNBdXRoIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcblxyXG5jb25zdCBBZG1pbiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKCFpc0F1dGgoKSkge1xyXG5cdFx0XHRSb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcblx0XHR9IGVsc2UgaWYgKGlzQXV0aCgpLmlzQWRtaW4gPT09IGZhbHNlKSB7XHJcblx0XHRcdFJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuXHRcdH1cclxuXHR9LCBbXSk7XHJcblx0cmV0dXJuIDw+e2NoaWxkcmVufTwvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluO1xyXG4iLCJpbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcclxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBBUEkgPSBwdWJsaWNSdW50aW1lQ29uZmlnLlBST0RVQ1RJT05cclxuXHQ/IHB1YmxpY1J1bnRpbWVDb25maWcuQVBJX1BST0RVQ1RJT05cclxuXHQ6IHB1YmxpY1J1bnRpbWVDb25maWcuQVBJX0RFVkVMT1BNRU5UO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFQUF9OQU1FID0gcHVibGljUnVudGltZUNvbmZpZy5BUFBfTkFNRTtcclxuXHJcbmV4cG9ydCBjb25zdCBET01BSU4gPSBwdWJsaWNSdW50aW1lQ29uZmlnLlBST0RVQ1RJT05cclxuXHQ/IHB1YmxpY1J1bnRpbWVDb25maWcuRE9NQUlOX1BST0RVQ1RJT05cclxuXHQ6IHB1YmxpY1J1bnRpbWVDb25maWcuRE9NQUlOX0RFVkVMT1BNRU5UO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFQ0FQVENIQV9TRUNSRVRfS0VZID0gcHVibGljUnVudGltZUNvbmZpZy5SRUNBUFRDSEFfU0VDUkVUX0tFWTtcclxuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQnXG5pbXBvcnQgeyB0b0Jhc2U2NCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0J1xuaW1wb3J0IHtcbiAgSW1hZ2VDb25maWcsXG4gIGltYWdlQ29uZmlnRGVmYXVsdCxcbiAgTG9hZGVyVmFsdWUsXG4gIFZBTElEX0xPQURFUlMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcnXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICA7KGdsb2JhbCBhcyBhbnkpLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWVcbn1cblxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbJ2xhenknLCAnZWFnZXInLCB1bmRlZmluZWRdIGFzIGNvbnN0XG50eXBlIExvYWRpbmdWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MT0FESU5HX1ZBTFVFU1tudW1iZXJdXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyID0gKHJlc29sdmVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlclByb3BzID0ge1xuICBzcmM6IHN0cmluZ1xuICB3aWR0aDogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbn1cblxudHlwZSBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyA9IEltYWdlTG9hZGVyUHJvcHMgJiB7IHJvb3Q6IHN0cmluZyB9XG5cbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwPFxuICBMb2FkZXJWYWx1ZSxcbiAgKHByb3BzOiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG4+KFtcbiAgWydpbWdpeCcsIGltZ2l4TG9hZGVyXSxcbiAgWydjbG91ZGluYXJ5JywgY2xvdWRpbmFyeUxvYWRlcl0sXG4gIFsnYWthbWFpJywgYWthbWFpTG9hZGVyXSxcbiAgWydkZWZhdWx0JywgZGVmYXVsdExvYWRlcl0sXG5dKVxuXG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAnZmlsbCcsXG4gICdmaXhlZCcsXG4gICdpbnRyaW5zaWMnLFxuICAncmVzcG9uc2l2ZScsXG4gIHVuZGVmaW5lZCxcbl0gYXMgY29uc3RcbnR5cGUgTGF5b3V0VmFsdWUgPSB0eXBlb2YgVkFMSURfTEFZT1VUX1ZBTFVFU1tudW1iZXJdXG5cbnR5cGUgSW1nRWxlbWVudFN0eWxlID0gTm9uTnVsbGFibGU8SlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXVsnc3R5bGUnXT5cblxuZXhwb3J0IHR5cGUgSW1hZ2VQcm9wcyA9IE9taXQ8XG4gIEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ10sXG4gICdzcmMnIHwgJ3NyY1NldCcgfCAncmVmJyB8ICd3aWR0aCcgfCAnaGVpZ2h0JyB8ICdsb2FkaW5nJyB8ICdzdHlsZSdcbj4gJiB7XG4gIHNyYzogc3RyaW5nXG4gIGxvYWRlcj86IEltYWdlTG9hZGVyXG4gIHF1YWxpdHk/OiBudW1iZXIgfCBzdHJpbmdcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvYWRpbmc/OiBMb2FkaW5nVmFsdWVcbiAgdW5vcHRpbWl6ZWQ/OiBib29sZWFuXG4gIG9iamVjdEZpdD86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0Rml0J11cbiAgb2JqZWN0UG9zaXRpb24/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdFBvc2l0aW9uJ11cbn0gJiAoXG4gICAgfCB7XG4gICAgICAgIHdpZHRoPzogbmV2ZXJcbiAgICAgICAgaGVpZ2h0PzogbmV2ZXJcbiAgICAgICAgLyoqIEBkZXByZWNhdGVkIFVzZSBgbGF5b3V0PVwiZmlsbFwiYCBpbnN0ZWFkICovXG4gICAgICAgIHVuc2l6ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB8IHsgd2lkdGg/OiBuZXZlcjsgaGVpZ2h0PzogbmV2ZXI7IGxheW91dDogJ2ZpbGwnIH1cbiAgICB8IHtcbiAgICAgICAgd2lkdGg6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBoZWlnaHQ6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBsYXlvdXQ/OiBFeGNsdWRlPExheW91dFZhbHVlLCAnZmlsbCc+XG4gICAgICB9XG4gIClcblxuY29uc3Qge1xuICBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMsXG4gIGxvYWRlcjogY29uZmlnTG9hZGVyLFxuICBwYXRoOiBjb25maWdQYXRoLFxuICBkb21haW5zOiBjb25maWdEb21haW5zLFxufSA9XG4gICgocHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgYXMgYW55KSBhcyBJbWFnZUNvbmZpZykgfHwgaW1hZ2VDb25maWdEZWZhdWx0XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gWy4uLmNvbmZpZ0RldmljZVNpemVzLCAuLi5jb25maWdJbWFnZVNpemVzXVxuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5hbGxTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcblxuZnVuY3Rpb24gZ2V0V2lkdGhzKFxuICB3aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkLFxuICBsYXlvdXQ6IExheW91dFZhbHVlXG4pOiB7IHdpZHRoczogbnVtYmVyW107IGtpbmQ6ICd3JyB8ICd4JyB9IHtcbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHxcbiAgICBsYXlvdXQgPT09ICdmaWxsJyB8fFxuICAgIGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnXG4gICkge1xuICAgIHJldHVybiB7IHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cblxuICBjb25zdCB3aWR0aHMgPSBbXG4gICAgLi4ubmV3IFNldChcbiAgICAgIC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgIFt3aWR0aCwgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqL10ubWFwKFxuICAgICAgICAodykgPT4gYWxsU2l6ZXMuZmluZCgocCkgPT4gcCA+PSB3KSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgKVxuICAgICksXG4gIF1cbiAgcmV0dXJuIHsgd2lkdGhzLCBraW5kOiAneCcgfVxufVxuXG50eXBlIEdlbkltZ0F0dHJzRGF0YSA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgdW5vcHRpbWl6ZWQ6IGJvb2xlYW5cbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZVxuICBsb2FkZXI6IEltYWdlTG9hZGVyXG4gIHdpZHRoPzogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbiAgc2l6ZXM/OiBzdHJpbmdcbn1cblxudHlwZSBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgc3JjU2V0OiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgc3JjLFxuICB1bm9wdGltaXplZCxcbiAgbGF5b3V0LFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbiAgc2l6ZXMsXG4gIGxvYWRlcixcbn06IEdlbkltZ0F0dHJzRGF0YSk6IEdlbkltZ0F0dHJzUmVzdWx0IHtcbiAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgcmV0dXJuIHsgc3JjLCBzcmNTZXQ6IHVuZGVmaW5lZCwgc2l6ZXM6IHVuZGVmaW5lZCB9XG4gIH1cblxuICBjb25zdCB7IHdpZHRocywga2luZCB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQpXG4gIGNvbnN0IGxhc3QgPSB3aWR0aHMubGVuZ3RoIC0gMVxuXG4gIHJldHVybiB7XG4gICAgc3JjOiBsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3aWR0aHNbbGFzdF0gfSksXG4gICAgc2l6ZXM6ICFzaXplcyAmJiBraW5kID09PSAndycgPyAnMTAwdncnIDogc2l6ZXMsXG4gICAgc3JjU2V0OiB3aWR0aHNcbiAgICAgIC5tYXAoXG4gICAgICAgICh3LCBpKSA9PlxuICAgICAgICAgIGAke2xvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHcgfSl9ICR7XG4gICAgICAgICAgICBraW5kID09PSAndycgPyB3IDogaSArIDFcbiAgICAgICAgICB9JHtraW5kfWBcbiAgICAgIClcbiAgICAgIC5qb2luKCcsICcpLFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEludCh4OiB1bmtub3duKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB4XG4gIH1cbiAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZUludCh4LCAxMClcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykge1xuICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKVxuICBpZiAobG9hZCkge1xuICAgIHJldHVybiBsb2FkKHsgcm9vdDogY29uZmlnUGF0aCwgLi4ubG9hZGVyUHJvcHMgfSlcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke1ZBTElEX0xPQURFUlMuam9pbihcbiAgICAgICcsICdcbiAgICApfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7XG4gIHNyYyxcbiAgc2l6ZXMsXG4gIHVub3B0aW1pemVkID0gZmFsc2UsXG4gIHByaW9yaXR5ID0gZmFsc2UsXG4gIGxvYWRpbmcsXG4gIGNsYXNzTmFtZSxcbiAgcXVhbGl0eSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgb2JqZWN0Rml0LFxuICBvYmplY3RQb3NpdGlvbixcbiAgbG9hZGVyID0gZGVmYXVsdEltYWdlTG9hZGVyLFxuICAuLi5hbGxcbn06IEltYWdlUHJvcHMpIHtcbiAgbGV0IHJlc3Q6IFBhcnRpYWw8SW1hZ2VQcm9wcz4gPSBhbGxcbiAgbGV0IGxheW91dDogTm9uTnVsbGFibGU8TGF5b3V0VmFsdWU+ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJ1xuICBsZXQgdW5zaXplZCA9IGZhbHNlXG4gIGlmICgndW5zaXplZCcgaW4gcmVzdCkge1xuICAgIHVuc2l6ZWQgPSBCb29sZWFuKHJlc3QudW5zaXplZClcbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ3Vuc2l6ZWQnXVxuICB9IGVsc2UgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXRcblxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsnbGF5b3V0J11cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAodW5zaXplZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgZGVwcmVjYXRlZCBcInVuc2l6ZWRcIiBwcm9wZXJ0eSwgd2hpY2ggd2FzIHJlbW92ZWQgaW4gZmF2b3Igb2YgdGhlIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5YFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpc0xhenkgPVxuICAgICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJylcbiAgaWYgKHNyYyAmJiBzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgdW5vcHRpbWl6ZWQgPSB0cnVlXG4gICAgaXNMYXp5ID0gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gdXNlSW50ZXJzZWN0aW9uPEhUTUxJbWFnZUVsZW1lbnQ+KHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICAgIGRpc2FibGVkOiAhaXNMYXp5LFxuICB9KVxuICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWRcblxuICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aClcbiAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodClcbiAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KVxuXG4gIGxldCB3cmFwcGVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3ZnOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgbGV0IGltZ1N0eWxlOiBJbWdFbGVtZW50U3R5bGUgfCB1bmRlZmluZWQgPSB7XG4gICAgdmlzaWJpbGl0eTogaXNWaXNpYmxlID8gJ2luaGVyaXQnIDogJ2hpZGRlbicsXG5cbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBib3R0b206IDAsXG4gICAgcmlnaHQ6IDAsXG5cbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIG1heEhlaWdodDogJzEwMCUnLFxuXG4gICAgb2JqZWN0Rml0LFxuICAgIG9iamVjdFBvc2l0aW9uLFxuICB9XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgIT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgY29uc3QgcXVvdGllbnQgPSBoZWlnaHRJbnQgLyB3aWR0aEludFxuICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYFxuICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHsgZGlzcGxheTogJ2Jsb2NrJywgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIHBhZGRpbmdUb3AgfVxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW50cmluc2ljJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YFxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0SW50LFxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgPT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICByaWdodDogMCxcblxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBtYXJnaW46IDAsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpbWdBdHRyaWJ1dGVzOiBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgICBzcmM6XG4gICAgICAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICBzaXplczogdW5kZWZpbmVkLFxuICB9XG5cbiAgaWYgKGlzVmlzaWJsZSkge1xuICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgIHNyYyxcbiAgICAgIHVub3B0aW1pemVkLFxuICAgICAgbGF5b3V0LFxuICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgIHNpemVzLFxuICAgICAgbG9hZGVyLFxuICAgIH0pXG4gIH1cblxuICBpZiAodW5zaXplZCkge1xuICAgIHdyYXBwZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIHNpemVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBpbWdTdHlsZSA9IHVuZGVmaW5lZFxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17d3JhcHBlclN0eWxlfT5cbiAgICAgIHtzaXplclN0eWxlID8gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzaXplclN0eWxlfT5cbiAgICAgICAgICB7c2l6ZXJTdmcgPyAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17dHJ1ZX1cbiAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgIHNyYz17YGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHt0b0Jhc2U2NChzaXplclN2Zyl9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8aW1nXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICB7Li4uaW1nQXR0cmlidXRlc31cbiAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICByZWY9e3NldFJlZn1cbiAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgLz5cbiAgICAgIHtwcmlvcml0eSA/IChcbiAgICAgICAgLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgICAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAgICAgLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuICAgICAgICAvL1xuICAgICAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGtleT17XG4gICAgICAgICAgICAgICdfX25pbWctJyArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc3JjICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmNTZXQgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNpemVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgIGFzPVwiaW1hZ2VcIlxuICAgICAgICAgICAgaHJlZj17aW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyY31cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgICAgICBpbWFnZXNyY3NldD17aW1nQXR0cmlidXRlcy5zcmNTZXR9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgICAgICBpbWFnZXNpemVzPXtpbWdBdHRyaWJ1dGVzLnNpemVzfVxuICAgICAgICAgID48L2xpbms+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vQlVJTFQgSU4gTE9BREVSU1xuXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmNcbn1cblxuZnVuY3Rpb24gaW1naXhMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbiAgY29uc3QgcGFyYW1zID0gWydhdXRvPWZvcm1hdCcsICdmaXQ9bWF4JywgJ3c9JyArIHdpZHRoXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gJydcbiAgaWYgKHF1YWxpdHkpIHtcbiAgICBwYXJhbXMucHVzaCgncT0nICsgcXVhbGl0eSlcbiAgfVxuXG4gIGlmIChwYXJhbXMubGVuZ3RoKSB7XG4gICAgcGFyYW1zU3RyaW5nID0gJz8nICsgcGFyYW1zLmpvaW4oJyYnKVxuICB9XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9JHtwYXJhbXNTdHJpbmd9YFxufVxuXG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290LCBzcmMsIHdpZHRoIH06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWBcbn1cblxuZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gIGNvbnN0IHBhcmFtcyA9IFsnZl9hdXRvJywgJ2NfbGltaXQnLCAnd18nICsgd2lkdGgsICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJ1xuICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWBcbn1cblxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdXG5cbiAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKVxuICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKVxuXG4gICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oXG4gICAgICAgICAgJywgJ1xuICAgICAgICApfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHNyYywgd2lkdGgsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgbGV0IHBhcnNlZFNyYzogVVJMXG4gICAgICB0cnkge1xuICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmICghY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArXG4gICAgICAgICAgICBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbn1cbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdElkbGVDYWxsYmFja1xuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJpbXBvcnQge1xyXG5cdGFmZmljaGVDbGllbnQsXHJcblx0Z2V0Q2xpZW50QnlJZCxcclxufSBmcm9tICcuLi8uLi8uLi8uLi8uLi9hY3Rpb25zL2NsaWVudEFjdGlvbnMnO1xyXG5pbXBvcnQgeyBsaXN0R2l0ZUJ5SWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IHsgYWZmaWNoZVJlc2VydmF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vYWN0aW9ucy9yZXNlcnZhdGlvbkFjdGlvbnMnO1xyXG5pbXBvcnQgQWRtaW4gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9hdXRoL0FkbWluJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCB7IEdyaWQsIFBhcGVyLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcclxuXHRwYWxldHRlOiB7XHJcblx0XHR0eXBlOiAnbGlnaHQnLFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0cm9vdDoge1xyXG5cdFx0ZmxleEdyb3c6IDEsXHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0bWFyZ2luOiAnMTBweCcsXHJcblx0fSxcclxuXHRwYXBlcjoge1xyXG5cdFx0aGVpZ2h0OiAyMzAsXHJcblx0XHR3aWR0aDogNTAwLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnI2RkZGRkZCcsXHJcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG5cdH0sXHJcblx0cGFwZXJUaXRsZToge1xyXG5cdFx0aGVpZ2h0OiAzMCxcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjY2NjY2NjJyxcclxuXHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXHJcblx0fSxcclxufSkpO1xyXG5cclxuY29uc3QgUmVzZXJ2YXRpb25JZCA9ICh7IHJlc2VydmF0aW9uLCBjbGllbnQsIGdpdGUgfSkgPT4ge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcblx0XHRcdFx0PENzc0Jhc2VsaW5lIC8+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG5cdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IGFsaWduSXRlbXM9J2ZsZXgtc3RhcnQnPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsyfT5cclxuXHRcdFx0XHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZC1ibG9jayB3LTEwMCdcclxuXHRcdFx0XHRcdFx0XHRcdHNyYz17Z2l0ZS52aWduZXR0ZUxpbmt9XHJcblx0XHRcdFx0XHRcdFx0XHRhbHQ9e2dpdGUubm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg9ezUwMH1cclxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodD17Mzc1fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTB9PlxyXG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5XHJcblx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdoNSdcclxuXHRcdFx0XHRcdFx0XHRcdGNvbXBvbmVudD0naDUnXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0Q09OVFJBVCBERSBMT0NBVElPTiBFTiBNRVVCTMOJIFNBSVNPTk5JRVIgPGJyIC8+eycgJ31cclxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0TWFkYW1lLCBNb25zaWV1ci4gU3VpdGUgw6Agdm90cmUgZGVtYW5kZSwgamUgdm91c1xyXG5cdFx0XHRcdFx0XHRcdGFkcmVzc2UgbGUgcHLDqXNlbnQgY29udHJhdCBkZSBsb2NhdGlvbiBkb250IDFcclxuXHRcdFx0XHRcdFx0XHRleGVtcGxhaXJlIGVzdCDDoCBtZSByZXRvdXJuZXIgKHBhciBjb3VycmllciBvdSBtYWlsKVxyXG5cdFx0XHRcdFx0XHRcdHJldsOqdHUgZGUgdm90cmUgc2lnbmF0dXJlIGV0IGFjY29tcGFnbsOpIGR1IG1vbnRhbnRcclxuXHRcdFx0XHRcdFx0XHRkZSBs4oCZYWNvbXB0ZSAodmlyZW1lbnQgb3UgY291cnJpZXIpLiBFbiBlc3DDqXJhbnRcclxuXHRcdFx0XHRcdFx0XHRhdm9pciBsZSBwbGFpc2lyIGRlIHZvdXMgYWNjdWVpbGxpciBwcm9jaGFpbmVtZW50LFxyXG5cdFx0XHRcdFx0XHRcdHJlY2V2ZXogbWVzIHNpbmPDqHJlcyBzYWx1dGF0aW9ucy5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cclxuXHRcdFx0XHRcdDxHcmlkXHJcblx0XHRcdFx0XHRcdGNvbnRhaW5lclxyXG5cdFx0XHRcdFx0XHRkaXJlY3Rpb249J3JvdydcclxuXHRcdFx0XHRcdFx0anVzdGlmeT0nc3BhY2UtYXJvdW5kJ1xyXG5cdFx0XHRcdFx0XHRzcGFjaW5nPXs0fVxyXG5cdFx0XHRcdFx0XHRhbGlnbkl0ZW1zPSdjZW50ZXInPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHk+RW50cmUgbGEgc29jacOpdMOpIDo8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0XHRTacOpZ2Ugc29jaWFsIDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0U0FTIFdBTyA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDEgUm91dGUgZGUgTm91YXJ0IDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0MDgyNDAgRm9zc8OpLCBGUkFOQ0UgPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRDb3VycmllciA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9J21haWx0bzpjb250YWN0QGdpdGVzLXdhby5mcic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRhY3RAZ2l0ZXMtd2FvLmZyXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0U2l0ZSBpbnRlcm5ldCA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9J2h0dHA6Ly93d3cuZ2l0ZXMtd2FvLmZyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0aHR0cDovL3d3dy5naXRlcy13YW8uZnJcclxuXHRcdFx0XHRcdFx0XHRcdDwvYT57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRUZWwgOiArMzMgKDApMyAyNCAzMCAwOCA5NSA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdElCQU4gOiBGUjc2IDEwMjAgNjA4NCAwMzk4IDM4NzcgMjkyNSAwOTMgPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRCSUMgOiBBR1JJRlJQUDgwMiA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFRJVFVMQUlSRSA6IFNBUyBXQU8gPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+RXQgbGUgbG9jYXRhaXJlIDo8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRRdWFsaXTDqSA6IDxzcGFuPntjbGllbnQuY2l2aWxpdGV9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRQcsOpbm9tIGV0IE5vbSA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Y2xpZW50Lm5vbX0ge2NsaWVudC5wcmVub219XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdEFkcmVzc2UgOiA8c3Bhbj57Y2xpZW50LmFkcmVzc2V9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRDUCAmIFZpbGxlIDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtjbGllbnQuY3B9IHtjbGllbnQudmlsbGV9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFBheXMgOiA8c3Bhbj57Y2xpZW50LnBheXN9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRUw6lsw6lwaG9uZSA6IDxzcGFuPntjbGllbnQudGVsfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0Q291cnJpZXIgOiA8c3Bhbj57Y2xpZW50Lm1haWx9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0UG91ciBsYSB0YXhlIGRlIFPDqWpvdXIgbm9tYnJlIGRlIHBlcnNvbm5lcyA6XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0XHRUYXhhYmxlcyA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi5uYlBlcnMgLSByZXNlcnZhdGlvbi5uYkVuZn0gTm9uXHJcblx0XHRcdFx0XHRcdFx0XHR0YXhhYmxlcyA6IHtyZXNlcnZhdGlvbi5uYkVuZn1cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyVGl0bGV9PjwvUGFwZXI+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvVGhlbWVQcm92aWRlcj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuXHQvLyBjb25zb2xlLmxvZygnY29udGV4dCcsIGNvbnRleHQucXVlcnkuaWQpO1xyXG5cdGNvbnN0IHJlczEgPSBhd2FpdCBhZmZpY2hlUmVzZXJ2YXRpb24oY29udGV4dC5xdWVyeS5pZCk7XHJcblx0Y29uc3QgcmVzZXJ2YXRpb24gPSBhd2FpdCByZXMxO1xyXG5cdC8vIGNvbnNvbGUubG9nKCdyZXNlcnZhdGlvbicsIHJlc2VydmF0aW9uKTtcclxuXHRjb25zdCByZXMyID0gYXdhaXQgbGlzdEdpdGVCeUlkKHJlc2VydmF0aW9uLmdpdGUpO1xyXG5cdGNvbnN0IGdpdGUgPSBhd2FpdCByZXMyO1xyXG5cdGNvbnN0IHJlczMgPSBhd2FpdCBhZmZpY2hlQ2xpZW50KHJlc2VydmF0aW9uLmNsaWVudCk7XHJcblx0Y29uc3QgY2xpZW50ID0gYXdhaXQgcmVzMztcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHJlc2VydmF0aW9uLFxyXG5cdFx0XHRnaXRlLFxyXG5cdFx0XHRjbGllbnQsXHJcblx0XHR9LFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VydmF0aW9uSWQ7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9