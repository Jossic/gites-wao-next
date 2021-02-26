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
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-render-html */ "react-render-html");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\admin\\reservation\\[id]\\contract\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["createMuiTheme"])({
  palette: {
    type: 'light'
  }
});

const ReservationId = ({
  reservation,
  client,
  gite
}) => {
  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
    root: {
      flexGrow: 1,
      width: '100%'
    },
    paper: {
      height: 230,
      width: 480,
      backgroundColor: '#dddddd',
      textAlign: 'center'
    },
    paperTitle: {
      height: 30,
      marginTop: '10px',
      width: '100%',
      backgroundColor: '#cccccc',
      textAlign: 'center'
    },
    paperTitleColor: {
      height: 30,
      marginTop: '10px',
      marginBottom: '10px',
      width: '100%',
      backgroundColor: `${gite.couleur1}`,
      textAlign: 'center'
    },
    typoSouligne: {
      fontWeight: 'bold',
      fontSize: '18px',
      marginBottom: '10px',
      textDecoration: 'underline'
    }
  }));
  const classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
    theme: theme,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    container: true,
    spacing: 1,
    alignItems: "flex-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: "d-block w-100",
    src: gite.vignetteLink,
    alt: gite.nom,
    width: 500,
    height: 375,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 8
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 10,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
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
      lineNumber: 75,
      columnNumber: 8
    }
  }, "CONTRAT DE LOCATION EN MEUBL\xC9 SAISONNIER ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 50
    }
  }), ' '), "Madame, Monsieur. Suite \xE0 votre demande, je vous adresse le pr\xE9sent contrat de location dont 1 exemplaire est \xE0 me retourner (par courrier ou mail) rev\xEAtu de votre signature et accompagn\xE9 du montant de l\u2019acompte (virement ou courrier). En esp\xE9rant avoir le plaisir de vous accueillir prochainement, recevez mes sinc\xE8res salutations.")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    container: true,
    direction: "row",
    justify: "space-between",
    spacing: 4,
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Paper"], {
    className: classes.paper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, "Entre la soci\xE9t\xE9 :"), "Si\xE9ge social ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 22
    }
  }), "SAS WAO ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }), "1 Route de Nouart ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 27
    }
  }), "08240 Foss\xE9, FRANCE ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 29
    }
  }), "Courrier :", ' ', __jsx("a", {
    href: "mailto:contact@gites-wao.fr",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, "contact@gites-wao.fr"), ' ', __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }), "Site internet :", ' ', __jsx("a", {
    href: "http://www.gites-wao.fr",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, "http://www.gites-wao.fr"), ' ', __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }), "Tel : +33 (0)3 24 30 08 95 ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 36
    }
  }), "IBAN : FR76 1020 6084 0398 3877 2925 093 ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 50
    }
  }), "BIC : AGRIFRPP802 ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 27
    }
  }), "TITULAIRE : SAS WAO ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 29
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Paper"], {
    className: classes.paper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 8
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, "Et le locataire :"), " ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 40
    }
  }), "Qualit\xE9 : ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 19
    }
  }, client.civilite), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }), "Pr\xE9nom et Nom :", ' ', __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }, client.nom, " ", client.prenom), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }), "Adresse : ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 19
    }
  }, client.adresse), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }), "CP & Ville :", ' ', __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, client.cp, " ", client.ville), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }), "Pays : ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 16
    }
  }, client.pays), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }), "T\xE9l\xE9phone : ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }, client.tel), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }), "Courrier : ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 20
    }
  }, client.mail), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  }, "Pour la taxe de S\xE9jour nombre de personnes :"), "Taxables :", ' ', reservation.nbPers - reservation.nbEnf, " - Non taxables : ", reservation.nbEnf, __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 9
    }
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Paper"], {
    className: classes.paperTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }
  }, "CONDITIONS DE LOCATION")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Paper"], {
    className: classes.paperTitleColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }
  }, "D\xE9signation des lieux et descriptif du logement")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 6
    }
  }, __jsx("p", {
    className: classes.lineHeight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }, gite.ctDesignationTitre), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    className: classes.typoSouligne,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }
  }, "Principales caract\xE9ristiques :"), __jsx("div", {
    className: "editor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }
  }, react_render_html__WEBPACK_IMPORTED_MODULE_8___default()(gite.ctPrincipCarac)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    className: classes.typoSouligne,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }
  }, "Situation du logement dans la localit\xE9 :"), __jsx("div", {
    className: "editor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }
  }, react_render_html__WEBPACK_IMPORTED_MODULE_8___default()(gite.ctSituLog)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    className: classes.typoSouligne,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 7
    }
  }, "Description du logement :"), __jsx("div", {
    className: "editor",
    style: {
      marginBottom: '70px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }
  }, react_render_html__WEBPACK_IMPORTED_MODULE_8___default()(gite.ctDescLog)), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Paper"], {
    className: classes.paperTitleColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 9
    }
  }, "Dur\xE9e de la location :")), __jsx("p", {
    className: classes.lineHeightP,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 8
    }
  }, "La pr\xE9sente location est consentie et accept\xE9e pour une dur\xE9e de : 2 nuit\xE9es Elle commence le vendredi 27 ao\xFBt 2021 \xE0 partir de 17h et se terminera le dimanche 29 ao\xFBt 2021 au plus tard \xE0 17h Elle ne pourra en aucun cas \xEAtre prorog\xE9e, sauf accord \xE9crit et pr\xE9alable du propri\xE9taire. Pour nous permettre de nous organiser, (le g\xEEte est \xE0 4 km de l\u2019habitation principale du propri\xE9taire), vous devez nous avertir quelques jours \xE0 l'avance de votre heure d'arriv\xE9e (par mail ou t\xE9l\xE9phone).")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Paper"], {
    className: classes.paperTitleColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 8
    }
  }, "Prix en Euros")), __jsx("p", {
    className: classes.lineHeightP,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 9
    }
  }, "La pr\xE9sente location saisonni\xE8re a lieu moyennant la somme de (minimum fixe de base)"), __jsx("span", {
    style: {
      float: 'right',
      backgroundColor: 'yellow'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 9
    }
  }, reservation.totalTarifBase, ",00 \u20AC")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 9
    }
  }, "Tarif par personne suppl\xE9mentaire au-del\xE0 du minimum fixe : ", gite.supplementParPers, " \u20AC par nuit et par personne, soit :", ' ', reservation.nbPersSup), __jsx("span", {
    style: {
      float: 'right',
      backgroundColor: 'yellow'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 9
    }
  }, reservation.totalTarifSuppl, ",00 \u20AC")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 9
    }
  }, "Il comprend les charges (t\xE9l\xE9vision, eau, \xE9lectricit\xE9), le m\xE9nage et la fourniture des draps et taies")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 9
    }
  }, "Suppl\xE9ment par animal 3 \u20AC par jour."), __jsx("span", {
    style: {
      float: 'right',
      backgroundColor: 'yellow'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 9
    }
  }, "Forfait lits faits \xE0 l'arriv\xE9e :", ' ', gite.ftLit, "\u20AC/personne"), __jsx("span", {
    style: {
      float: 'right',
      backgroundColor: 'yellow'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 9
    }
  }, reservation.totalFtLit, ",00 \u20AC")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 9
    }
  }, "Taxes diverses calcul\xE9es sur Nbre de personnes de + de 18 ans :", ' ', reservation.nbEnf, " Nbre nuit\xE9es :", reservation.nbNuites), __jsx("span", {
    style: {
      float: 'right',
      backgroundColor: 'yellow'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'right'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 9
    }
  }, "R\xE9glement \xE0 transmettre avec votre contrat sign\xE9 (selon les modalit\xE9s ci-apr\xE8s) \xE0 titre d'acompte :"), __jsx("span", {
    style: {
      float: 'right',
      backgroundColor: 'yellow'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 9
    }
  }, reservation.resteAPayer, ",00 \u20AC")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 9
    }
  }, "soit par virement (IBAN dans partie soci\xE9t\xE9), ou ch\xE8que \xE0 l'ordre de SAS WAO, ou ch\xE8ques vacances (envoi au si\xE8ge social)"), __jsx("span", {
    style: {
      float: 'right',
      backgroundColor: 'yellow'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 9
    }
  }, "Nous demandons un envoi en recommand\xE9 uniquement pour les ch\xE8ques vacances."), __jsx("span", {
    style: {
      float: 'right',
      backgroundColor: 'yellow'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 9
    }
  }, "Apr\xE8s votre s\xE9jour un scan de la caution d\xE9truite vous sera transmis par courriel, sauf en cas de d\xE9g\xE2ts."), __jsx("span", {
    style: {
      float: 'right',
      backgroundColor: 'yellow'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 9
    }
  }, reservation.mtCaution, ",00 \u20AC")), __jsx("span", {
    style: {
      fontWeight: 'bold',
      textDecoration: 'underline'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 8
    }
  }, "La r\xE9servation deviendra effective d\xE8s lors que le locataire aura retourn\xE9 un exemplaire dat\xE9 et sign\xE9 du pr\xE9sent contrat avant le 04/05/2020 accompagn\xE9 du ch\xE8que. Au-del\xE0 de cette date, la r\xE9servation sera caduque et le propri\xE9taire disposera librement du logement.")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Paper"], {
    className: classes.paperTitleColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 8
    }
  }, "Assurances")), __jsx("p", {
    style: {
      fontSize: '16px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 7
    }
  }, "Le locataire doit v\xE9rifier si son contrat d\u2019habitation principale pr\xE9voit l\u2019extension vill\xE9giature en responsabilit\xE9 civile. Dans l\u2019hypoth\xE8se contraire, il peut intervenir aupr\xE8s de sa compagnie d\u2019assurance et r\xE9clamer l\u2019extension de la garantie pour la p\xE9riode de la location, ou bien souscrire un contrat particulier au titre des clauses vill\xE9giature. Derri\xE8re le g\xEEte se trouve un ruisseau et un \xE9tang, par mesure de s\xE9curit\xE9, Les enfants devront toujours \xEAtre accompagn\xE9s d\u2019un adulte et le propri\xE9taire ne peut en aucun cas \xEAtre tenu pour responsable des accidents qui pourraient y survenir. De m\xEAme pour l\u2019aire de jeu du g\xEEte, les enfants qui l\u2019utilisent doivent \xEAtre sous la surveillance des parents."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Paper"], {
    className: classes.paperTitleColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 8
    }
  }, "Etat des lieux et inventaire")), __jsx("p", {
    className: classes.lineHeightP,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 7
    }
  }, "Le document pour l\u2019\xE9tat des lieux se trouve dans le cahier d\u2019explication du g\xEEte. Ce contrat fait office d'inventaire. Pour \xE9viter toute contestation le locataire voudra bien contr\xF4ler et signaler toute anomalie dans les 24 heures. Pass\xE9 ce d\xE9lai, les biens lou\xE9s seront consid\xE9r\xE9s comme exempts de dommages \xE0 l\u2019entr\xE9e du locataire. Celui-ci sera responsable de toute d\xE9t\xE9rioration ou perte pouvant survenir \xE0 ce mobilier ainsi qu\u2019aux divers mat\xE9riels de l\u2019espace piscine et d\xE9tente."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Paper"], {
    className: classes.paperTitleColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 8
    }
  }, "Jouissance des lieux")), __jsx("p", {
    className: classes.lineHeightP,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 7
    }
  }, "Le locataire entretiendra les lieux lou\xE9s et les rendra en bon \xE9tat de propret\xE9. Il veillera \xE0 ce que la tranquillit\xE9 du voisinage ne soit pas troubl\xE9e. La sous location est interdite au preneur, m\xEAme \xE0 titre gratuit, sous peine de r\xE9siliation du contrat. L\u2019installation de tentes ou le stationnement de caravanes sur le terrain de la propri\xE9t\xE9 lou\xE9e est interdit, sauf accord pr\xE9alable du propri\xE9taire. L\u2019utilisateur s\u2019engage \xE0 ne pas utiliser le service WI-FI \xE0 des fins illicites, interdites ou ill\xE9gales (entre autres respect de la loi Hadopi). Le loueur, \xE0 la demande de tiers et/ou de toute autorit\xE9 comp\xE9tente, se r\xE9serve le droit de suspendre temporairement ou de mani\xE8re d\xE9finitive toute utilisation du service sans que sa responsabilit\xE9 ne puisse \xEAtre recherch\xE9e et sans que l\u2019utilisateur ne puisse revendiquer une quelconque indemnisation ou r\xE9paration. En aucun cas le loueur ne peut \xEAtre tenue de r\xE9parer les pr\xE9judices directs et/ou indirects subis du fait de l\u2019utilisation du service par l\u2019utilisateur, ce dernier reconnaissant que le loueur ne peut pas \xEAtre responsable des contenus auquel acc\xE8de l\u2019utilisateur et que l\u2019accessibilit\xE9 aux contenus et services n\u2019est pas garantie et peut \xEAtre suspendue sans pr\xE9avis."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Paper"], {
    className: classes.paperTitleColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 8
    }
  }, "Clause r\xE9solutoire")), __jsx("p", {
    className: classes.lineHeightP,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 7
    }
  }, "A d\xE9faut de paiement aux \xE9ch\xE9ances fix\xE9es ou en cas d\u2019inex\xE9cution d\u2019une des clauses du pr\xE9sent engagement et cinq jours francs apr\xE8s une simple sommation par lettre recommand\xE9e rest\xE9e infructueuse, le pr\xE9sent contrat sera imm\xE9diatement r\xE9sili\xE9 et le bailleur pourra se pr\xE9valoir de l\u2019article 1590 du Code civil pour conserver les acomptes vers\xE9s \xE0 titre des premiers dommages-int\xE9r\xEAts."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Paper"], {
    className: classes.paperTitleColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 8
    }
  }, "Annulation")), __jsx("p", {
    className: classes.lineHeightP,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 7
    }
  }, "La signature du contrat engage les deux parties de fa\xE7on d\xE9finitive. Si le locataire renonce \xE0 la location 60 jours avant l\u2019arriv\xE9e, l\u2019acompte est rembours\xE9. Entre 1 jour et 60 jours si nous r\xE9ussissons \xE0 relouer, l\u2019acompte est \xE9galement rembours\xE9. Sinon l\u2019acompte est perdu."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Paper"], {
    className: classes.paperTitleColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466,
      columnNumber: 8
    }
  }, "Election de domicile")), __jsx("p", {
    className: classes.lineHeightP,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 7
    }
  }, "Pour l\u2019ex\xE9cution des pr\xE9sentes, le propri\xE9taire et le locataire font \xE9lection de domicile dans leurs domiciles respectifs. Toutefois en cas de litige, le tribunal des lieux lou\xE9s sera seul comp\xE9tent.")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    container: true,
    direction: "row",
    justify: "space-between",
    spacing: 4,
    alignItems: "flex-end",
    style: {
      marginTop: '20px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 8
    }
  }, "Fait en deux exemplaires \xE0 Foss\xE9 le ", Date.now()), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 8
    }
  }, "Signature du propri\xE9taire,")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 8
    }
  }, "J\u2019ai pris connaissance des conditions de location ci-dessus"), __jsx("p", {
    style: {
      marginBottom: '20px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 8
    }
  }, "Date :"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 8
    }
  }, "Signature du locataire (pr\xE9c\xE9d\xE9 de la mention lu et approuv\xE9)"))))));
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

/***/ }),

/***/ "react-render-html":
/*!************************************!*\
  !*** external "react-render-html" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-render-html");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2F1dGhBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2FjdGlvbnMvY2xpZW50QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2dpdGVBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2FjdGlvbnMvcmVzZXJ2YXRpb25BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXV0aC9BZG1pbi5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2ltYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FkbWluL3Jlc2VydmF0aW9uLy9jb250cmFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9jb25maWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVuZGVyLWh0bWxcIiJdLCJuYW1lcyI6WyJoYW5kbGVSZXNwb25zZSIsInJlc3BvbnNlIiwic3RhdHVzIiwic2lnbm91dCIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwibWVzc2FnZSIsImxvZ2luIiwidXNlciIsImZldGNoIiwiQVBJIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsImpzb24iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJsb2dvdXQiLCJuZXh0IiwicmVtb3ZlQ29va2llIiwicmVtb3ZlTG9jYWxTdG9yYWdlIiwic2V0Q29va2llIiwia2V5IiwidmFsdWUiLCJnZXRDb29raWUiLCJzZXRMb2NhbFN0b3JhZ2UiLCJhdXRoZW50aWNhdGUiLCJkYXRhIiwidG9rZW4iLCJuYW1lIiwiZW1haWwiLCJpc0FkbWluIiwiX2lkIiwiaXNBdXRoIiwibGlzdEFsbENsaWVudHMiLCJBdXRob3JpemF0aW9uIiwiZ2V0Q2xpZW50QnlJZCIsImlkIiwiYWZmaWNoZUNsaWVudCIsInJlbW92ZUNsaWVudCIsInVwZGF0ZUNsaWVudCIsImNsaWVudCIsImVudm9pRW1haWwiLCJsaXN0R2l0ZURldGFpbHMiLCJzbHVnIiwiYXhpb3MiLCJnZXQiLCJlcnJvciIsImxpc3RlRGVzR2l0ZXMiLCJsaXN0ZURlc0ltYWdlcyIsInNhdmVJbWFnZURhdGEiLCJwaG90b3MiLCJsaXN0R2l0ZXNOb21zIiwibGlzdEdpdGVCeUlkIiwiY3JlYXRlR2l0ZSIsImdpdGUiLCJkZWxldGVHaXRlIiwidXBkYXRlR2l0ZSIsImNyZWF0ZVFSIiwicXIiLCJsaXN0ZU9uZVFSIiwibGlzdGVEZXNRUiIsInJlbW92ZVFSIiwidXBkYXRlUVIiLCJsaXN0UGhvdG9zQnlOb20iLCJub20iLCJsaXN0UGhvdG9zQnlTZWN0aW9uIiwic2VjdGlvbiIsImxpc3RQaG90b3NCeUlkIiwiY3JlYXRlUmVzZXJ2YXRpb24iLCJyZXNlcnZhdGlvbiIsImNyZWF0ZUNvbnRyYWN0IiwibGlzdEFsbFJlc2VydmF0aW9ucyIsImNvdW50Tm91dmVsbGVSZXNlcnZhdGlvbiIsImxpc3RlT25lUmVzZXJ2YXRpb24iLCJhZmZpY2hlUmVzZXJ2YXRpb24iLCJyZW1vdmVSZXNlcnZhdGlvbiIsInVwZGF0ZVJlc2VydmF0aW9uIiwiQWRtaW4iLCJjaGlsZHJlbiIsInVzZUVmZmVjdCIsInB1YmxpY1J1bnRpbWVDb25maWciLCJnZXRDb25maWciLCJQUk9EVUNUSU9OIiwiQVBJX1BST0RVQ1RJT04iLCJBUElfREVWRUxPUE1FTlQiLCJBUFBfTkFNRSIsIkRPTUFJTiIsIkRPTUFJTl9QUk9EVUNUSU9OIiwiRE9NQUlOX0RFVkVMT1BNRU5UIiwiUkVDQVBUQ0hBX1NFQ1JFVF9LRVkiLCJnbG9iYWwiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsImxvYWRlcnMiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiZGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwibG9hZGVyIiwicGF0aCIsImRvbWFpbnMiLCJwcm9jZXNzIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImEiLCJsYXlvdXQiLCJ3aWR0aHMiLCJraW5kIiwid2lkdGgiLCJ3IiwicCIsInNyY1NldCIsInNpemVzIiwiZ2V0V2lkdGhzIiwibGFzdCIsInNyYyIsImkiLCJwYXJzZUludCIsImxvYWQiLCJyb290IiwiVkFMSURfTE9BREVSUyIsImNvbmZpZ0xvYWRlciIsInVub3B0aW1pemVkIiwicHJpb3JpdHkiLCJhbGwiLCJyZXN0IiwidW5zaXplZCIsIkJvb2xlYW4iLCJsb2FkaW5nIiwiaXNMYXp5Iiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid2lkdGhJbnQiLCJnZXRJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaW1nU3R5bGUiLCJ2aXNpYmlsaXR5IiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwiZGlzcGxheSIsImhlaWdodCIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJpc05hTiIsIndyYXBwZXJTdHlsZSIsIm92ZXJmbG93Iiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nQXR0cmlidXRlcyIsImdlbmVyYXRlSW1nQXR0cnMiLCJxdWFsaXR5IiwicGFyYW1zIiwicGFyYW1zU3RyaW5nIiwibm9ybWFsaXplU3JjIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImNvbmZpZ0RvbWFpbnMiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJEYXRlIiwic2V0VGltZW91dCIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwic2V0UmVmIiwiZWwiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsIm9wdGlvbnMiLCJpbnN0YW5jZSIsImVudHJpZXMiLCJlbnRyeSIsImNhbGxiYWNrIiwidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInBhbGV0dGUiLCJ0eXBlIiwiUmVzZXJ2YXRpb25JZCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJmbGV4R3JvdyIsInBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwidGV4dEFsaWduIiwicGFwZXJUaXRsZSIsIm1hcmdpblRvcCIsInBhcGVyVGl0bGVDb2xvciIsIm1hcmdpbkJvdHRvbSIsImNvdWxldXIxIiwidHlwb1NvdWxpZ25lIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwidGV4dERlY29yYXRpb24iLCJjbGFzc2VzIiwidmlnbmV0dGVMaW5rIiwiY2l2aWxpdGUiLCJwcmVub20iLCJhZHJlc3NlIiwiY3AiLCJ2aWxsZSIsInBheXMiLCJ0ZWwiLCJtYWlsIiwibmJQZXJzIiwibmJFbmYiLCJsaW5lSGVpZ2h0IiwiY3REZXNpZ25hdGlvblRpdHJlIiwicmVuZGVySFRNTCIsImN0UHJpbmNpcENhcmFjIiwiY3RTaXR1TG9nIiwiY3REZXNjTG9nIiwibGluZUhlaWdodFAiLCJmbG9hdCIsInRvdGFsVGFyaWZCYXNlIiwic3VwcGxlbWVudFBhclBlcnMiLCJuYlBlcnNTdXAiLCJ0b3RhbFRhcmlmU3VwcGwiLCJmdExpdCIsInRvdGFsRnRMaXQiLCJuYk51aXRlcyIsInJlc3RlQVBheWVyIiwibXRDYXV0aW9uIiwibm93IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInJlczEiLCJyZXMyIiwicmVzMyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QUFDQSxRQUFNaUMsV0FBVyxHQUFHLE1BQU1tTCxJQUExQixDQUhpRCxDQUlqRDs7QUFDQSxRQUFNQyxJQUFJLEdBQUcsTUFBTXJNLHlFQUFZLENBQUNpQixXQUFXLENBQUNmLElBQWIsQ0FBL0I7QUFDQSxRQUFNQSxJQUFJLEdBQUcsTUFBTW1NLElBQW5CO0FBQ0EsUUFBTUMsSUFBSSxHQUFHLE1BQU1yTiw0RUFBYSxDQUFDZ0MsV0FBVyxDQUFDN0IsTUFBYixDQUFoQztBQUNBLFFBQU1BLE1BQU0sR0FBRyxNQUFNa04sSUFBckI7QUFFQSxTQUFPO0FBQ05DLFNBQUssRUFBRTtBQUNOdEwsaUJBRE07QUFFTmYsVUFGTTtBQUdOZDtBQUhNO0FBREQsR0FBUDtBQU9BO0FBRWNnSyw0RUFBZixFOzs7Ozs7Ozs7OztBQy9nQkEsOEM7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24vW2lkXS9jb250cmFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24vW2lkXS9jb250cmFjdC9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZVJlc3BvbnNlID0gKHJlc3BvbnNlKSA9PiB7XHJcblx0aWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcblx0XHRzaWdub3V0KCgpID0+IHtcclxuXHRcdFx0Um91dGVyLnB1c2goe1xyXG5cdFx0XHRcdHBhdGhuYW1lOiAnL2xvZ2luJyxcclxuXHRcdFx0XHRxdWVyeToge1xyXG5cdFx0XHRcdFx0bWVzc2FnZTpcclxuXHRcdFx0XHRcdFx0J1ZvdHJlIGNlc3Npb24gw6AgZXhwaXLDqSwgbWVyY2kgZGUgdm91cyByZWNvbm5lY3Rlci4nLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW4gPSAodXNlcikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L2FkbWluL2xvZ2luYCwge1xyXG5cdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0fSxcclxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKG5leHQpID0+IHtcclxuXHRyZW1vdmVDb29raWUoJ3Rva2VuJyk7XHJcblx0cmVtb3ZlTG9jYWxTdG9yYWdlKCd1c2VyJyk7XHJcblx0bmV4dCgpO1xyXG5cclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9hZG1pbi9sb2dvdXRgLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ1ZvdXMgw6p0ZXMgbWFpbnRlbmFudCBkw6ljb25uZWN0w6knKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG5cdFx0fSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q29va2llID0gKGtleSwgdmFsdWUpID0+IHtcclxuXHRpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcblx0XHRjb29raWUuc2V0KGtleSwgdmFsdWUsIHtcclxuXHRcdFx0ZXhwaXJlczogMTAsXHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ29va2llID0gKGtleSkgPT4ge1xyXG5cdGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuXHRcdGNvb2tpZS5yZW1vdmUoa2V5LCB7XHJcblx0XHRcdGV4cGlyZXM6IDEsXHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29va2llID0gKGtleSkgPT4ge1xyXG5cdGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuXHRcdHJldHVybiBjb29raWUuZ2V0KGtleSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldExvY2FsU3RvcmFnZSA9IChrZXksIHZhbHVlKSA9PiB7XHJcblx0aWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVMb2NhbFN0b3JhZ2UgPSAoa2V5KSA9PiB7XHJcblx0aWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG5cdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aGVudGljYXRlID0gKGRhdGEsIG5leHQpID0+IHtcclxuXHRzZXRDb29raWUoJ3Rva2VuJywgZGF0YS50b2tlbik7XHJcblx0Y29uc3QgeyBuYW1lLCBlbWFpbCwgaXNBZG1pbiwgX2lkIH0gPSBkYXRhO1xyXG5cdGNvbnN0IHVzZXIgPSB7IG5hbWUsIGVtYWlsLCBpc0FkbWluLCBfaWQgfTtcclxuXHQvLyBjb25zb2xlLmxvZygndXNlciBkYW5zIGF1dGhlbnRpY2F0ZScsIHVzZXIpO1xyXG5cdHNldExvY2FsU3RvcmFnZSgndXNlcicsIHVzZXIpO1xyXG5cdG5leHQoKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpc0F1dGggPSAoKSA9PiB7XHJcblx0aWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG5cdFx0Y29uc3QgY29va2llQ2hlY2tlZCA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHRcdGlmIChjb29raWVDaGVja2VkKSB7XHJcblx0XHRcdGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSB7XHJcblx0XHRcdFx0cmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4uL2NvbmZpZyc7XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdEFsbENsaWVudHMgPSAodG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9jbGllbnRgLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBjb3VudE5vdXZlbGxlUmVzZXJ2YXRpb24gPSAoKSA9PiB7XHJcbi8vIFx0cmV0dXJuIGZldGNoKGAke0FQSX0vcmVzZXJ2YXRpb24vY291bnRgLCB7XHJcbi8vIFx0XHRtZXRob2Q6ICdHRVQnLFxyXG4vLyBcdH0pXHJcbi8vIFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuLy8gXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuLy8gXHRcdH0pXHJcbi8vIFx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbi8vIH07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2xpZW50QnlJZCA9IChpZCwgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9jbGllbnQvJHtpZH1gLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZmZpY2hlQ2xpZW50ID0gKGlkKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vY2xpZW50LyR7aWR9YCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNsaWVudCA9IChpZCwgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9jbGllbnQvJHtpZH1gLCB7XHJcblx0XHRtZXRob2Q6ICdERUxFVEUnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVDbGllbnQgPSAoY2xpZW50LCBpZCwgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9jbGllbnQvJHtpZH1gLCB7XHJcblx0XHRtZXRob2Q6ICdQVVQnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShjbGllbnQpLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZW52b2lFbWFpbCA9IChpZCwgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9jbGllbnQvJHtpZH0vbWFpbGVyYCwge1xyXG5cdFx0bWV0aG9kOiAnUFVUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0R2l0ZURldGFpbHMgPSBhc3luYyAoc2x1ZykgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgJHtBUEl9L2dpdGUvJHtzbHVnfWApO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRyZXR1cm4gZGF0YTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RlRGVzR2l0ZXMgPSAoKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vZ2l0ZXNgLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdGVEZXNJbWFnZXMgPSAoKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vcGhvdG9zYCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNhdmVJbWFnZURhdGEgPSAocGhvdG9zLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3VwbG9hZC1pbWFnZXNgLCB7XHJcblx0XHRtZXRob2Q6ICdQVVQnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShwaG90b3MpLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0Ly8gaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0R2l0ZXNOb21zID0gKCkgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L2dpdGVzL25vbXNgLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdEdpdGVCeUlkID0gKGlkKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vZ2l0ZS9pZC8ke2lkfWAsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVHaXRlID0gKGdpdGUsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vZ2l0ZWAsIHtcclxuXHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShnaXRlKSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdC8vIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlR2l0ZSA9IChzbHVnLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L2dpdGUvJHtzbHVnfWAsIHtcclxuXHRcdG1ldGhvZDogJ0RFTEVURScsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHQvLyBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUdpdGUgPSAoZ2l0ZSwgaWQsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vZ2l0ZS8ke2lkfWAsIHtcclxuXHRcdG1ldGhvZDogJ1BVVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KGdpdGUpLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0Ly8gaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVRUiA9IChxciwgdG9rZW4pID0+IHtcclxuXHRjb25zb2xlLmxvZygnZGFuIGFjdGlvbicsIHFyKTtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9xcmAsIHtcclxuXHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkocXIpLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0Ly8gaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0ZU9uZVFSID0gKGlkLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3FyLyR7aWR9YCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdGVEZXNRUiA9ICgpID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9xcmAsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVRUiA9IChpZCwgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9xci8ke2lkfWAsIHtcclxuXHRcdG1ldGhvZDogJ0RFTEVURScsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVRUiA9IChxciwgaWQsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vcXIvJHtpZH1gLCB7XHJcblx0XHRtZXRob2Q6ICdQVVQnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShxciksXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHQvLyBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RQaG90b3NCeU5vbSA9IGFzeW5jIChub20pID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJfS9waG90b3MvJHtub219YCk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdHJldHVybiBkYXRhO1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdFBob3Rvc0J5U2VjdGlvbiA9IGFzeW5jIChzZWN0aW9uKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSX0vcGhvdG9zL3NlY3Rpb24vJHtzZWN0aW9ufWApO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRyZXR1cm4gZGF0YTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RQaG90b3NCeUlkID0gYXN5bmMgKGlkKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSX0vcGhvdG8vJHtpZH1gKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdH1cclxufTtcclxuIiwiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlc2VydmF0aW9uID0gKHJlc2VydmF0aW9uKSA9PiB7XHJcblx0Y29uc29sZS5sb2coJ2RhbnMgYWN0aW9uJywgcmVzZXJ2YXRpb24pO1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3Jlc2VydmF0aW9uYCwge1xyXG5cdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHR9LFxyXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkocmVzZXJ2YXRpb24pLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBjcmVhdGVDb250cmFjdCA9IChyZXNlcnZhdGlvbikgPT4ge1xyXG5cdGNvbnNvbGUubG9nKCdkYW5zIGFjdGlvbiBjcmVhdGVDb250cmFjdCcsIHJlc2VydmF0aW9uKTtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXNlcnZhdGlvbi9jb250cmFjdC86cmVzZXJ2YXRpb25gLCB7XHJcblx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0Ly8gQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkocmVzZXJ2YXRpb24pLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdEFsbFJlc2VydmF0aW9ucyA9ICh0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3Jlc2VydmF0aW9uYCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY291bnROb3V2ZWxsZVJlc2VydmF0aW9uID0gKCkgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3Jlc2VydmF0aW9uL2NvdW50YCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RlT25lUmVzZXJ2YXRpb24gPSAoaWQsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vcmVzZXJ2YXRpb24vJHtpZH1gLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZmZpY2hlUmVzZXJ2YXRpb24gPSAoaWQpID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXNlcnZhdGlvbi8ke2lkfS9jb250cmFjdGAsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVSZXNlcnZhdGlvbiA9IChpZCwgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXNlcnZhdGlvbi8ke2lkfWAsIHtcclxuXHRcdG1ldGhvZDogJ0RFTEVURScsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVJlc2VydmF0aW9uID0gKHJlc2VydmF0aW9uLCBpZCwgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXNlcnZhdGlvbi8ke2lkfWAsIHtcclxuXHRcdG1ldGhvZDogJ1BVVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlc2VydmF0aW9uKSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBpc0F1dGggfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuXHJcbmNvbnN0IEFkbWluID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoIWlzQXV0aCgpKSB7XHJcblx0XHRcdFJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuXHRcdH0gZWxzZSBpZiAoaXNBdXRoKCkuaXNBZG1pbiA9PT0gZmFsc2UpIHtcclxuXHRcdFx0Um91dGVyLnB1c2goJy9sb2dpbicpO1xyXG5cdFx0fVxyXG5cdH0sIFtdKTtcclxuXHRyZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW47XHJcbiIsImltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnO1xyXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFQSSA9IHB1YmxpY1J1bnRpbWVDb25maWcuUFJPRFVDVElPTlxyXG5cdD8gcHVibGljUnVudGltZUNvbmZpZy5BUElfUFJPRFVDVElPTlxyXG5cdDogcHVibGljUnVudGltZUNvbmZpZy5BUElfREVWRUxPUE1FTlQ7XHJcblxyXG5leHBvcnQgY29uc3QgQVBQX05BTUUgPSBwdWJsaWNSdW50aW1lQ29uZmlnLkFQUF9OQU1FO1xyXG5cclxuZXhwb3J0IGNvbnN0IERPTUFJTiA9IHB1YmxpY1J1bnRpbWVDb25maWcuUFJPRFVDVElPTlxyXG5cdD8gcHVibGljUnVudGltZUNvbmZpZy5ET01BSU5fUFJPRFVDVElPTlxyXG5cdDogcHVibGljUnVudGltZUNvbmZpZy5ET01BSU5fREVWRUxPUE1FTlQ7XHJcblxyXG5leHBvcnQgY29uc3QgUkVDQVBUQ0hBX1NFQ1JFVF9LRVkgPSBwdWJsaWNSdW50aW1lQ29uZmlnLlJFQ0FQVENIQV9TRUNSRVRfS0VZO1xyXG4iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvaGVhZCdcbmltcG9ydCB7IHRvQmFzZTY0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQnXG5pbXBvcnQge1xuICBJbWFnZUNvbmZpZyxcbiAgaW1hZ2VDb25maWdEZWZhdWx0LFxuICBMb2FkZXJWYWx1ZSxcbiAgVkFMSURfTE9BREVSUyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZydcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gIDsoZ2xvYmFsIGFzIGFueSkuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZVxufVxuXG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFsnbGF6eScsICdlYWdlcicsIHVuZGVmaW5lZF0gYXMgY29uc3RcbnR5cGUgTG9hZGluZ1ZhbHVlID0gdHlwZW9mIFZBTElEX0xPQURJTkdfVkFMVUVTW251bWJlcl1cblxuZXhwb3J0IHR5cGUgSW1hZ2VMb2FkZXIgPSAocmVzb2x2ZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyUHJvcHMgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHdpZHRoOiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxufVxuXG50eXBlIERlZmF1bHRJbWFnZUxvYWRlclByb3BzID0gSW1hZ2VMb2FkZXJQcm9wcyAmIHsgcm9vdDogc3RyaW5nIH1cblxuY29uc3QgbG9hZGVycyA9IG5ldyBNYXA8XG4gIExvYWRlclZhbHVlLFxuICAocHJvcHM6IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKSA9PiBzdHJpbmdcbj4oW1xuICBbJ2ltZ2l4JywgaW1naXhMb2FkZXJdLFxuICBbJ2Nsb3VkaW5hcnknLCBjbG91ZGluYXJ5TG9hZGVyXSxcbiAgWydha2FtYWknLCBha2FtYWlMb2FkZXJdLFxuICBbJ2RlZmF1bHQnLCBkZWZhdWx0TG9hZGVyXSxcbl0pXG5cbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICdmaWxsJyxcbiAgJ2ZpeGVkJyxcbiAgJ2ludHJpbnNpYycsXG4gICdyZXNwb25zaXZlJyxcbiAgdW5kZWZpbmVkLFxuXSBhcyBjb25zdFxudHlwZSBMYXlvdXRWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MQVlPVVRfVkFMVUVTW251bWJlcl1cblxudHlwZSBJbWdFbGVtZW50U3R5bGUgPSBOb25OdWxsYWJsZTxKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddWydzdHlsZSddPlxuXG5leHBvcnQgdHlwZSBJbWFnZVByb3BzID0gT21pdDxcbiAgSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXSxcbiAgJ3NyYycgfCAnc3JjU2V0JyB8ICdyZWYnIHwgJ3dpZHRoJyB8ICdoZWlnaHQnIHwgJ2xvYWRpbmcnIHwgJ3N0eWxlJ1xuPiAmIHtcbiAgc3JjOiBzdHJpbmdcbiAgbG9hZGVyPzogSW1hZ2VMb2FkZXJcbiAgcXVhbGl0eT86IG51bWJlciB8IHN0cmluZ1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9hZGluZz86IExvYWRpbmdWYWx1ZVxuICB1bm9wdGltaXplZD86IGJvb2xlYW5cbiAgb2JqZWN0Rml0PzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RGaXQnXVxuICBvYmplY3RQb3NpdGlvbj86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0UG9zaXRpb24nXVxufSAmIChcbiAgICB8IHtcbiAgICAgICAgd2lkdGg/OiBuZXZlclxuICAgICAgICBoZWlnaHQ/OiBuZXZlclxuICAgICAgICAvKiogQGRlcHJlY2F0ZWQgVXNlIGBsYXlvdXQ9XCJmaWxsXCJgIGluc3RlYWQgKi9cbiAgICAgICAgdW5zaXplZDogdHJ1ZVxuICAgICAgfVxuICAgIHwgeyB3aWR0aD86IG5ldmVyOyBoZWlnaHQ/OiBuZXZlcjsgbGF5b3V0OiAnZmlsbCcgfVxuICAgIHwge1xuICAgICAgICB3aWR0aDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGxheW91dD86IEV4Y2x1ZGU8TGF5b3V0VmFsdWUsICdmaWxsJz5cbiAgICAgIH1cbiAgKVxuXG5jb25zdCB7XG4gIGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyxcbiAgbG9hZGVyOiBjb25maWdMb2FkZXIsXG4gIHBhdGg6IGNvbmZpZ1BhdGgsXG4gIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMsXG59ID1cbiAgKChwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyBhcyBhbnkpIGFzIEltYWdlQ29uZmlnKSB8fCBpbWFnZUNvbmZpZ0RlZmF1bHRcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbLi4uY29uZmlnRGV2aWNlU2l6ZXMsIC4uLmNvbmZpZ0ltYWdlU2l6ZXNdXG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcbmFsbFNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuXG5mdW5jdGlvbiBnZXRXaWR0aHMoXG4gIHdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQsXG4gIGxheW91dDogTGF5b3V0VmFsdWVcbik6IHsgd2lkdGhzOiBudW1iZXJbXTsga2luZDogJ3cnIHwgJ3gnIH0ge1xuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fFxuICAgIGxheW91dCA9PT0gJ2ZpbGwnIHx8XG4gICAgbGF5b3V0ID09PSAncmVzcG9uc2l2ZSdcbiAgKSB7XG4gICAgcmV0dXJuIHsgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcywga2luZDogJ3cnIH1cbiAgfVxuXG4gIGNvbnN0IHdpZHRocyA9IFtcbiAgICAuLi5uZXcgU2V0KFxuICAgICAgLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbiAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4gICAgICAvLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgIC8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbiAgICAgIC8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgW3dpZHRoLCB3aWR0aCAqIDIgLyosIHdpZHRoICogMyovXS5tYXAoXG4gICAgICAgICh3KSA9PiBhbGxTaXplcy5maW5kKChwKSA9PiBwID49IHcpIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICApXG4gICAgKSxcbiAgXVxuICByZXR1cm4geyB3aWR0aHMsIGtpbmQ6ICd4JyB9XG59XG5cbnR5cGUgR2VuSW1nQXR0cnNEYXRhID0ge1xuICBzcmM6IHN0cmluZ1xuICB1bm9wdGltaXplZDogYm9vbGVhblxuICBsYXlvdXQ6IExheW91dFZhbHVlXG4gIGxvYWRlcjogSW1hZ2VMb2FkZXJcbiAgd2lkdGg/OiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxuICBzaXplcz86IHN0cmluZ1xufVxuXG50eXBlIEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICBzcmM6IHN0cmluZ1xuICBzcmNTZXQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBzaXplczogc3RyaW5nIHwgdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoe1xuICBzcmMsXG4gIHVub3B0aW1pemVkLFxuICBsYXlvdXQsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxuICBzaXplcyxcbiAgbG9hZGVyLFxufTogR2VuSW1nQXR0cnNEYXRhKTogR2VuSW1nQXR0cnNSZXN1bHQge1xuICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICByZXR1cm4geyBzcmMsIHNyY1NldDogdW5kZWZpbmVkLCBzaXplczogdW5kZWZpbmVkIH1cbiAgfVxuXG4gIGNvbnN0IHsgd2lkdGhzLCBraW5kIH0gPSBnZXRXaWR0aHMod2lkdGgsIGxheW91dClcbiAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxXG5cbiAgcmV0dXJuIHtcbiAgICBzcmM6IGxvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHdpZHRoc1tsYXN0XSB9KSxcbiAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICBzcmNTZXQ6IHdpZHRoc1xuICAgICAgLm1hcChcbiAgICAgICAgKHcsIGkpID0+XG4gICAgICAgICAgYCR7bG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogdyB9KX0gJHtcbiAgICAgICAgICAgIGtpbmQgPT09ICd3JyA/IHcgOiBpICsgMVxuICAgICAgICAgIH0ke2tpbmR9YFxuICAgICAgKVxuICAgICAgLmpvaW4oJywgJyksXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0SW50KHg6IHVua25vd24pOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHhcbiAgfVxuICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzOiBJbWFnZUxvYWRlclByb3BzKSB7XG4gIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpXG4gIGlmIChsb2FkKSB7XG4gICAgcmV0dXJuIGxvYWQoeyByb290OiBjb25maWdQYXRoLCAuLi5sb2FkZXJQcm9wcyB9KVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7VkFMSURfTE9BREVSUy5qb2luKFxuICAgICAgJywgJ1xuICAgICl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlKHtcbiAgc3JjLFxuICBzaXplcyxcbiAgdW5vcHRpbWl6ZWQgPSBmYWxzZSxcbiAgcHJpb3JpdHkgPSBmYWxzZSxcbiAgbG9hZGluZyxcbiAgY2xhc3NOYW1lLFxuICBxdWFsaXR5LFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBvYmplY3RGaXQsXG4gIG9iamVjdFBvc2l0aW9uLFxuICBsb2FkZXIgPSBkZWZhdWx0SW1hZ2VMb2FkZXIsXG4gIC4uLmFsbFxufTogSW1hZ2VQcm9wcykge1xuICBsZXQgcmVzdDogUGFydGlhbDxJbWFnZVByb3BzPiA9IGFsbFxuICBsZXQgbGF5b3V0OiBOb25OdWxsYWJsZTxMYXlvdXRWYWx1ZT4gPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnXG4gIGxldCB1bnNpemVkID0gZmFsc2VcbiAgaWYgKCd1bnNpemVkJyBpbiByZXN0KSB7XG4gICAgdW5zaXplZCA9IEJvb2xlYW4ocmVzdC51bnNpemVkKVxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsndW5zaXplZCddXG4gIH0gZWxzZSBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dFxuXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXNyYykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICh1bnNpemVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBkZXByZWNhdGVkIFwidW5zaXplZFwiIHByb3BlcnR5LCB3aGljaCB3YXMgcmVtb3ZlZCBpbiBmYXZvciBvZiB0aGUgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHlgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGlzTGF6eSA9XG4gICAgIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKVxuICBpZiAoc3JjICYmIHNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICB1bm9wdGltaXplZCA9IHRydWVcbiAgICBpc0xhenkgPSBmYWxzZVxuICB9XG5cbiAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSB1c2VJbnRlcnNlY3Rpb248SFRNTEltYWdlRWxlbWVudD4oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gICAgZGlzYWJsZWQ6ICFpc0xhenksXG4gIH0pXG4gIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZFxuXG4gIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKVxuICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KVxuICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpXG5cbiAgbGV0IHdyYXBwZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdmc6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBsZXQgaW1nU3R5bGU6IEltZ0VsZW1lbnRTdHlsZSB8IHVuZGVmaW5lZCA9IHtcbiAgICB2aXNpYmlsaXR5OiBpc1Zpc2libGUgPyAnaW5oZXJpdCcgOiAnaGlkZGVuJyxcblxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICByaWdodDogMCxcblxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgbWFyZ2luOiAnYXV0bycsXG5cbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgbWF4SGVpZ2h0OiAnMTAwJScsXG5cbiAgICBvYmplY3RGaXQsXG4gICAgb2JqZWN0UG9zaXRpb24sXG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCAhPT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50XG4gICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgXG4gICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0geyBkaXNwbGF5OiAnYmxvY2snLCBib3hTaXppbmc6ICdib3JkZXItYm94JywgcGFkZGluZ1RvcCB9XG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICB9XG4gICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gXG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnQsXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCA9PT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG5cbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHJpZ2h0OiAwLFxuXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGltZ0F0dHJpYnV0ZXM6IEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICAgIHNyYzpcbiAgICAgICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgIHNpemVzOiB1bmRlZmluZWQsXG4gIH1cblxuICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgc3JjLFxuICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICBsYXlvdXQsXG4gICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgc2l6ZXMsXG4gICAgICBsb2FkZXIsXG4gICAgfSlcbiAgfVxuXG4gIGlmICh1bnNpemVkKSB7XG4gICAgd3JhcHBlclN0eWxlID0gdW5kZWZpbmVkXG4gICAgc2l6ZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIGltZ1N0eWxlID0gdW5kZWZpbmVkXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt3cmFwcGVyU3R5bGV9PlxuICAgICAge3NpemVyU3R5bGUgPyAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3NpemVyU3R5bGV9PlxuICAgICAgICAgIHtzaXplclN2ZyA/IChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgc3JjPXtgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke3RvQmFzZTY0KHNpemVyU3ZnKX1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIDxpbWdcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIHsuLi5pbWdBdHRyaWJ1dGVzfVxuICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHJlZj17c2V0UmVmfVxuICAgICAgICBzdHlsZT17aW1nU3R5bGV9XG4gICAgICAvPlxuICAgICAge3ByaW9yaXR5ID8gKFxuICAgICAgICAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgICAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAga2V5PXtcbiAgICAgICAgICAgICAgJ19fbmltZy0nICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmMgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyY1NldCArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgYXM9XCJpbWFnZVwiXG4gICAgICAgICAgICBocmVmPXtpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjfVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc3Jjc2V0PXtpbWdBdHRyaWJ1dGVzLnNyY1NldH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc2l6ZXM9e2ltZ0F0dHJpYnV0ZXMuc2l6ZXN9XG4gICAgICAgICAgPjwvbGluaz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy9CVUlMVCBJTiBMT0FERVJTXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmM6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyY1xufVxuXG5mdW5jdGlvbiBpbWdpeExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuICBjb25zdCBwYXJhbXMgPSBbJ2F1dG89Zm9ybWF0JywgJ2ZpdD1tYXgnLCAndz0nICsgd2lkdGhdXG4gIGxldCBwYXJhbXNTdHJpbmcgPSAnJ1xuICBpZiAocXVhbGl0eSkge1xuICAgIHBhcmFtcy5wdXNoKCdxPScgKyBxdWFsaXR5KVxuICB9XG5cbiAgaWYgKHBhcmFtcy5sZW5ndGgpIHtcbiAgICBwYXJhbXNTdHJpbmcgPSAnPycgKyBwYXJhbXMuam9pbignJicpXG4gIH1cbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gXG59XG5cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QsIHNyYywgd2lkdGggfTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YFxufVxuXG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgY29uc3QgcGFyYW1zID0gWydmX2F1dG8nLCAnY19saW1pdCcsICd3XycgKyB3aWR0aCwgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJyldXG4gIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nXG4gIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW11cblxuICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgIGlmICghc3JjKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpXG4gICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpXG5cbiAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbihcbiAgICAgICAgICAnLCAnXG4gICAgICAgICl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgc3JjLCB3aWR0aCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoJy8nKSAmJiBjb25maWdEb21haW5zKSB7XG4gICAgICBsZXQgcGFyc2VkU3JjOiBVUkxcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKCFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICtcbiAgICAgICAgICAgIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL2Vyci5zaC9uZXh0LmpzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxufVxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICB9XG59XG5cbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0SWRsZUNhbGxiYWNrXG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgcmVxdWVzdElkbGVDYWxsYmFjayBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsImltcG9ydCB7XHJcblx0YWZmaWNoZUNsaWVudCxcclxuXHRnZXRDbGllbnRCeUlkLFxyXG59IGZyb20gJy4uLy4uLy4uLy4uLy4uL2FjdGlvbnMvY2xpZW50QWN0aW9ucyc7XHJcbmltcG9ydCB7IGxpc3RHaXRlQnlJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5pbXBvcnQgeyBhZmZpY2hlUmVzZXJ2YXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9hY3Rpb25zL3Jlc2VydmF0aW9uQWN0aW9ucyc7XHJcbmltcG9ydCBBZG1pbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2F1dGgvQWRtaW4nO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IHsgR3JpZCwgUGFwZXIsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCByZW5kZXJIVE1MIGZyb20gJ3JlYWN0LXJlbmRlci1odG1sJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcblx0cGFsZXR0ZToge1xyXG5cdFx0dHlwZTogJ2xpZ2h0JyxcclxuXHR9LFxyXG59KTtcclxuXHJcbmNvbnN0IFJlc2VydmF0aW9uSWQgPSAoeyByZXNlcnZhdGlvbiwgY2xpZW50LCBnaXRlIH0pID0+IHtcclxuXHRjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRcdHJvb3Q6IHtcclxuXHRcdFx0ZmxleEdyb3c6IDEsXHJcblx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHR9LFxyXG5cdFx0cGFwZXI6IHtcclxuXHRcdFx0aGVpZ2h0OiAyMzAsXHJcblx0XHRcdHdpZHRoOiA0ODAsXHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogJyNkZGRkZGQnLFxyXG5cdFx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG5cdFx0fSxcclxuXHRcdHBhcGVyVGl0bGU6IHtcclxuXHRcdFx0aGVpZ2h0OiAzMCxcclxuXHRcdFx0bWFyZ2luVG9wOiAnMTBweCcsXHJcblx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogJyNjY2NjY2MnLFxyXG5cdFx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG5cdFx0fSxcclxuXHRcdHBhcGVyVGl0bGVDb2xvcjoge1xyXG5cdFx0XHRoZWlnaHQ6IDMwLFxyXG5cdFx0XHRtYXJnaW5Ub3A6ICcxMHB4JyxcclxuXHRcdFx0bWFyZ2luQm90dG9tOiAnMTBweCcsXHJcblx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogYCR7Z2l0ZS5jb3VsZXVyMX1gLFxyXG5cdFx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG5cdFx0fSxcclxuXHRcdHR5cG9Tb3VsaWduZToge1xyXG5cdFx0XHRmb250V2VpZ2h0OiAnYm9sZCcsXHJcblx0XHRcdGZvbnRTaXplOiAnMThweCcsXHJcblx0XHRcdG1hcmdpbkJvdHRvbTogJzEwcHgnLFxyXG5cdFx0XHR0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXHJcblx0XHR9LFxyXG5cdH0pKTtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG5cdFx0XHRcdDxDc3NCYXNlbGluZSAvPlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfSBhbGlnbkl0ZW1zPSdmbGV4LXN0YXJ0Jz5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17Mn0+XHJcblx0XHRcdFx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2QtYmxvY2sgdy0xMDAnXHJcblx0XHRcdFx0XHRcdFx0XHRzcmM9e2dpdGUudmlnbmV0dGVMaW5rfVxyXG5cdFx0XHRcdFx0XHRcdFx0YWx0PXtnaXRlLm5vbX1cclxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoPXs1MDB9XHJcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9ezM3NX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEwfT5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeVxyXG5cdFx0XHRcdFx0XHRcdFx0dmFyaWFudD0naDUnXHJcblx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnQ9J2g1J1xyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdENPTlRSQVQgREUgTE9DQVRJT04gRU4gTUVVQkzDiSBTQUlTT05OSUVSIDxiciAvPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdE1hZGFtZSwgTW9uc2lldXIuIFN1aXRlIMOgIHZvdHJlIGRlbWFuZGUsIGplIHZvdXNcclxuXHRcdFx0XHRcdFx0XHRhZHJlc3NlIGxlIHByw6lzZW50IGNvbnRyYXQgZGUgbG9jYXRpb24gZG9udCAxXHJcblx0XHRcdFx0XHRcdFx0ZXhlbXBsYWlyZSBlc3Qgw6AgbWUgcmV0b3VybmVyIChwYXIgY291cnJpZXIgb3UgbWFpbClcclxuXHRcdFx0XHRcdFx0XHRyZXbDqnR1IGRlIHZvdHJlIHNpZ25hdHVyZSBldCBhY2NvbXBhZ27DqSBkdSBtb250YW50XHJcblx0XHRcdFx0XHRcdFx0ZGUgbOKAmWFjb21wdGUgKHZpcmVtZW50IG91IGNvdXJyaWVyKS4gRW4gZXNww6lyYW50XHJcblx0XHRcdFx0XHRcdFx0YXZvaXIgbGUgcGxhaXNpciBkZSB2b3VzIGFjY3VlaWxsaXIgcHJvY2hhaW5lbWVudCxcclxuXHRcdFx0XHRcdFx0XHRyZWNldmV6IG1lcyBzaW5jw6hyZXMgc2FsdXRhdGlvbnMuXHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHJcblx0XHRcdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdFx0XHRjb250YWluZXJcclxuXHRcdFx0XHRcdFx0ZGlyZWN0aW9uPSdyb3cnXHJcblx0XHRcdFx0XHRcdGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nXHJcblx0XHRcdFx0XHRcdHNwYWNpbmc9ezR9XHJcblx0XHRcdFx0XHRcdGFsaWduSXRlbXM9J2NlbnRlcic+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeT5FbnRyZSBsYSBzb2Npw6l0w6kgOjwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHRcdFNpw6lnZSBzb2NpYWwgPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRTQVMgV0FPIDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0MSBSb3V0ZSBkZSBOb3VhcnQgPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQwODI0MCBGb3Nzw6ksIEZSQU5DRSA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdENvdXJyaWVyIDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj0nbWFpbHRvOmNvbnRhY3RAZ2l0ZXMtd2FvLmZyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGFjdEBnaXRlcy13YW8uZnJcclxuXHRcdFx0XHRcdFx0XHRcdDwvYT57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRTaXRlIGludGVybmV0IDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj0naHR0cDovL3d3dy5naXRlcy13YW8uZnInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRodHRwOi8vd3d3LmdpdGVzLXdhby5mclxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFRlbCA6ICszMyAoMCkzIDI0IDMwIDA4IDk1IDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0SUJBTiA6IEZSNzYgMTAyMCA2MDg0IDAzOTggMzg3NyAyOTI1IDA5MyA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdEJJQyA6IEFHUklGUlBQODAyIDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0VElUVUxBSVJFIDogU0FTIFdBTyA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5FdCBsZSBsb2NhdGFpcmUgOjwvc3Bhbj4gPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRRdWFsaXTDqSA6IDxzcGFuPntjbGllbnQuY2l2aWxpdGV9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRQcsOpbm9tIGV0IE5vbSA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Y2xpZW50Lm5vbX0ge2NsaWVudC5wcmVub219XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdEFkcmVzc2UgOiA8c3Bhbj57Y2xpZW50LmFkcmVzc2V9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRDUCAmIFZpbGxlIDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtjbGllbnQuY3B9IHtjbGllbnQudmlsbGV9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFBheXMgOiA8c3Bhbj57Y2xpZW50LnBheXN9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRUw6lsw6lwaG9uZSA6IDxzcGFuPntjbGllbnQudGVsfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0Q291cnJpZXIgOiA8c3Bhbj57Y2xpZW50Lm1haWx9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0UG91ciBsYSB0YXhlIGRlIFPDqWpvdXIgbm9tYnJlIGRlIHBlcnNvbm5lcyA6XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0XHRUYXhhYmxlcyA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi5uYlBlcnMgLSByZXNlcnZhdGlvbi5uYkVuZn0gLSBOb25cclxuXHRcdFx0XHRcdFx0XHRcdHRheGFibGVzIDoge3Jlc2VydmF0aW9uLm5iRW5mfVxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZX0+XHJcblx0XHRcdFx0XHRcdFx0Q09ORElUSU9OUyBERSBMT0NBVElPTlxyXG5cdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZUNvbG9yfT5cclxuXHRcdFx0XHRcdFx0XHREw6lzaWduYXRpb24gZGVzIGxpZXV4IGV0IGRlc2NyaXB0aWYgZHUgbG9nZW1lbnRcclxuXHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMubGluZUhlaWdodH0+XHJcblx0XHRcdFx0XHRcdFx0e2dpdGUuY3REZXNpZ25hdGlvblRpdHJlfVxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblxyXG5cdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudHlwb1NvdWxpZ25lfT5cclxuXHRcdFx0XHRcdFx0XHRQcmluY2lwYWxlcyBjYXJhY3TDqXJpc3RpcXVlcyA6XHJcblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2VkaXRvcic+XHJcblx0XHRcdFx0XHRcdFx0e3JlbmRlckhUTUwoZ2l0ZS5jdFByaW5jaXBDYXJhYyl9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudHlwb1NvdWxpZ25lfT5cclxuXHRcdFx0XHRcdFx0XHRTaXR1YXRpb24gZHUgbG9nZW1lbnQgZGFucyBsYSBsb2NhbGl0w6kgOlxyXG5cdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdlZGl0b3InPlxyXG5cdFx0XHRcdFx0XHRcdHtyZW5kZXJIVE1MKGdpdGUuY3RTaXR1TG9nKX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBvU291bGlnbmV9PlxyXG5cdFx0XHRcdFx0XHRcdERlc2NyaXB0aW9uIGR1IGxvZ2VtZW50IDpcclxuXHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdlZGl0b3InXHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnNzBweCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0e3JlbmRlckhUTUwoZ2l0ZS5jdERlc2NMb2cpfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZUNvbG9yfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0RHVyw6llIGRlIGxhIGxvY2F0aW9uIDpcclxuXHRcdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMubGluZUhlaWdodFB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0TGEgcHLDqXNlbnRlIGxvY2F0aW9uIGVzdCBjb25zZW50aWUgZXQgYWNjZXB0w6llXHJcblx0XHRcdFx0XHRcdFx0XHRwb3VyIHVuZSBkdXLDqWUgZGUgOiAyIG51aXTDqWVzIEVsbGUgY29tbWVuY2UgbGVcclxuXHRcdFx0XHRcdFx0XHRcdHZlbmRyZWRpIDI3IGFvw7t0IDIwMjEgw6AgcGFydGlyIGRlIDE3aCBldCBzZVxyXG5cdFx0XHRcdFx0XHRcdFx0dGVybWluZXJhIGxlIGRpbWFuY2hlIDI5IGFvw7t0IDIwMjEgYXUgcGx1cyB0YXJkXHJcblx0XHRcdFx0XHRcdFx0XHTDoCAxN2ggRWxsZSBuZSBwb3VycmEgZW4gYXVjdW4gY2FzIMOqdHJlIHByb3JvZ8OpZSxcclxuXHRcdFx0XHRcdFx0XHRcdHNhdWYgYWNjb3JkIMOpY3JpdCBldCBwcsOpYWxhYmxlIGR1IHByb3ByacOpdGFpcmUuXHJcblx0XHRcdFx0XHRcdFx0XHRQb3VyIG5vdXMgcGVybWV0dHJlIGRlIG5vdXMgb3JnYW5pc2VyLCAobGUgZ8OudGVcclxuXHRcdFx0XHRcdFx0XHRcdGVzdCDDoCA0IGttIGRlIGzigJloYWJpdGF0aW9uIHByaW5jaXBhbGUgZHVcclxuXHRcdFx0XHRcdFx0XHRcdHByb3ByacOpdGFpcmUpLCB2b3VzIGRldmV6IG5vdXMgYXZlcnRpciBxdWVscXVlc1xyXG5cdFx0XHRcdFx0XHRcdFx0am91cnMgw6AgbCdhdmFuY2UgZGUgdm90cmUgaGV1cmUgZCdhcnJpdsOpZSAocGFyXHJcblx0XHRcdFx0XHRcdFx0XHRtYWlsIG91IHTDqWzDqXBob25lKS5cclxuXHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyVGl0bGVDb2xvcn0+XHJcblx0XHRcdFx0XHRcdFx0XHRQcml4IGVuIEV1cm9zXHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmVIZWlnaHRQfT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdExhIHByw6lzZW50ZSBsb2NhdGlvbiBzYWlzb25uacOocmUgYSBsaWV1XHJcblx0XHRcdFx0XHRcdFx0XHRcdG1veWVubmFudCBsYSBzb21tZSBkZSAobWluaW11bSBmaXhlIGRlIGJhc2UpXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsb2F0OiAncmlnaHQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3llbGxvdycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24udG90YWxUYXJpZkJhc2V9LDAwIOKCrFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0VGFyaWYgcGFyIHBlcnNvbm5lIHN1cHBsw6ltZW50YWlyZSBhdS1kZWzDoCBkdVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRtaW5pbXVtIGZpeGUgOiB7Z2l0ZS5zdXBwbGVtZW50UGFyUGVyc30g4oKsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhciBudWl0IGV0IHBhciBwZXJzb25uZSwgc29pdCA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLm5iUGVyc1N1cH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxvYXQ6ICdyaWdodCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAneWVsbG93JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi50b3RhbFRhcmlmU3VwcGx9LDAwIOKCrFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0SWwgY29tcHJlbmQgbGVzIGNoYXJnZXMgKHTDqWzDqXZpc2lvbiwgZWF1LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHTDqWxlY3RyaWNpdMOpKSwgbGUgbcOpbmFnZSBldCBsYSBmb3Vybml0dXJlIGRlc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkcmFwcyBldCB0YWllc1xyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0U3VwcGzDqW1lbnQgcGFyIGFuaW1hbCAzIOKCrCBwYXIgam91ci5cclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxvYXQ6ICdyaWdodCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAneWVsbG93JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsvKiB7cmVzZXJ2YXRpb24ufSAqL31cclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEZvcmZhaXQgbGl0cyBmYWl0cyDDoCBsJ2Fycml2w6llIDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Z2l0ZS5mdExpdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx04oKsL3BlcnNvbm5lXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsb2F0OiAncmlnaHQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3llbGxvdycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24udG90YWxGdExpdH0sMDAg4oKsXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRUYXhlcyBkaXZlcnNlcyBjYWxjdWzDqWVzIHN1ciBOYnJlIGRlXHJcblx0XHRcdFx0XHRcdFx0XHRcdHBlcnNvbm5lcyBkZSArIGRlIDE4IGFucyA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLm5iRW5mfSBOYnJlIG51aXTDqWVzIDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLm5iTnVpdGVzfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbG9hdDogJ3JpZ2h0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0ey8qIHtyZXNlcnZhdGlvbi59ICovfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFLDqWdsZW1lbnQgw6AgdHJhbnNtZXR0cmUgYXZlYyB2b3RyZSBjb250cmF0XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNpZ27DqSAoc2Vsb24gbGVzIG1vZGFsaXTDqXMgY2ktYXByw6hzKSDDoCB0aXRyZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkJ2Fjb21wdGUgOlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbG9hdDogJ3JpZ2h0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLnJlc3RlQVBheWVyfSwwMCDigqxcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNvaXQgcGFyIHZpcmVtZW50IChJQkFOIGRhbnMgcGFydGllXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNvY2nDqXTDqSksIG91IGNow6hxdWUgw6AgbCdvcmRyZSBkZSBTQVMgV0FPLCBvdVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjaMOocXVlcyB2YWNhbmNlcyAoZW52b2kgYXUgc2nDqGdlIHNvY2lhbClcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxvYXQ6ICdyaWdodCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAneWVsbG93JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsvKiB7cmVzZXJ2YXRpb24ufSBWb2lyIHBvdXIgbW9udGFudCBkZSBsJ2Fjb21wdGUgKi99XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHROb3VzIGRlbWFuZG9ucyB1biBlbnZvaSBlbiByZWNvbW1hbmTDqVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR1bmlxdWVtZW50IHBvdXIgbGVzIGNow6hxdWVzIHZhY2FuY2VzLlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbG9hdDogJ3JpZ2h0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0ey8qIHtyZXNlcnZhdGlvbi59ICovfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0QXByw6hzIHZvdHJlIHPDqWpvdXIgdW4gc2NhbiBkZSBsYSBjYXV0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdGTDqXRydWl0ZSB2b3VzIHNlcmEgdHJhbnNtaXMgcGFyIGNvdXJyaWVsLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzYXVmIGVuIGNhcyBkZSBkw6lnw6J0cy5cclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxvYXQ6ICdyaWdodCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAneWVsbG93JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi5tdENhdXRpb259LDAwIOKCrFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250V2VpZ2h0OiAnYm9sZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcclxuXHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0TGEgcsOpc2VydmF0aW9uIGRldmllbmRyYSBlZmZlY3RpdmUgZMOocyBsb3JzIHF1ZVxyXG5cdFx0XHRcdFx0XHRcdFx0bGUgbG9jYXRhaXJlIGF1cmEgcmV0b3VybsOpIHVuIGV4ZW1wbGFpcmUgZGF0w6kgZXRcclxuXHRcdFx0XHRcdFx0XHRcdHNpZ27DqSBkdSBwcsOpc2VudCBjb250cmF0IGF2YW50IGxlIDA0LzA1LzIwMjBcclxuXHRcdFx0XHRcdFx0XHRcdGFjY29tcGFnbsOpIGR1IGNow6hxdWUuIEF1LWRlbMOgIGRlIGNldHRlIGRhdGUsIGxhXHJcblx0XHRcdFx0XHRcdFx0XHRyw6lzZXJ2YXRpb24gc2VyYSBjYWR1cXVlIGV0IGxlIHByb3ByacOpdGFpcmVcclxuXHRcdFx0XHRcdFx0XHRcdGRpc3Bvc2VyYSBsaWJyZW1lbnQgZHUgbG9nZW1lbnQuXHJcblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZUNvbG9yfT5cclxuXHRcdFx0XHRcdFx0XHRcdEFzc3VyYW5jZXNcclxuXHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMTZweCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0TGUgbG9jYXRhaXJlIGRvaXQgdsOpcmlmaWVyIHNpIHNvbiBjb250cmF0XHJcblx0XHRcdFx0XHRcdFx0ZOKAmWhhYml0YXRpb24gcHJpbmNpcGFsZSBwcsOpdm9pdCBs4oCZZXh0ZW5zaW9uXHJcblx0XHRcdFx0XHRcdFx0dmlsbMOpZ2lhdHVyZSBlbiByZXNwb25zYWJpbGl0w6kgY2l2aWxlLiBEYW5zXHJcblx0XHRcdFx0XHRcdFx0bOKAmWh5cG90aMOoc2UgY29udHJhaXJlLCBpbCBwZXV0IGludGVydmVuaXIgYXVwcsOocyBkZVxyXG5cdFx0XHRcdFx0XHRcdHNhIGNvbXBhZ25pZSBk4oCZYXNzdXJhbmNlIGV0IHLDqWNsYW1lciBs4oCZZXh0ZW5zaW9uIGRlXHJcblx0XHRcdFx0XHRcdFx0bGEgZ2FyYW50aWUgcG91ciBsYSBww6lyaW9kZSBkZSBsYSBsb2NhdGlvbiwgb3UgYmllblxyXG5cdFx0XHRcdFx0XHRcdHNvdXNjcmlyZSB1biBjb250cmF0IHBhcnRpY3VsaWVyIGF1IHRpdHJlIGRlc1xyXG5cdFx0XHRcdFx0XHRcdGNsYXVzZXMgdmlsbMOpZ2lhdHVyZS4gRGVycmnDqHJlIGxlIGfDrnRlIHNlIHRyb3V2ZSB1blxyXG5cdFx0XHRcdFx0XHRcdHJ1aXNzZWF1IGV0IHVuIMOpdGFuZywgcGFyIG1lc3VyZSBkZSBzw6ljdXJpdMOpLCBMZXNcclxuXHRcdFx0XHRcdFx0XHRlbmZhbnRzIGRldnJvbnQgdG91am91cnMgw6p0cmUgYWNjb21wYWduw6lzIGTigJl1blxyXG5cdFx0XHRcdFx0XHRcdGFkdWx0ZSBldCBsZSBwcm9wcmnDqXRhaXJlIG5lIHBldXQgZW4gYXVjdW4gY2FzIMOqdHJlXHJcblx0XHRcdFx0XHRcdFx0dGVudSBwb3VyIHJlc3BvbnNhYmxlIGRlcyBhY2NpZGVudHMgcXVpIHBvdXJyYWllbnQgeVxyXG5cdFx0XHRcdFx0XHRcdHN1cnZlbmlyLiBEZSBtw6ptZSBwb3VyIGzigJlhaXJlIGRlIGpldSBkdSBnw650ZSwgbGVzXHJcblx0XHRcdFx0XHRcdFx0ZW5mYW50cyBxdWkgbOKAmXV0aWxpc2VudCBkb2l2ZW50IMOqdHJlIHNvdXMgbGFcclxuXHRcdFx0XHRcdFx0XHRzdXJ2ZWlsbGFuY2UgZGVzIHBhcmVudHMuXHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHJcblx0XHRcdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZUNvbG9yfT5cclxuXHRcdFx0XHRcdFx0XHRcdEV0YXQgZGVzIGxpZXV4IGV0IGludmVudGFpcmVcclxuXHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5lSGVpZ2h0UH0+XHJcblx0XHRcdFx0XHRcdFx0TGUgZG9jdW1lbnQgcG91ciBs4oCZw6l0YXQgZGVzIGxpZXV4IHNlIHRyb3V2ZSBkYW5zIGxlXHJcblx0XHRcdFx0XHRcdFx0Y2FoaWVyIGTigJlleHBsaWNhdGlvbiBkdSBnw650ZS4gQ2UgY29udHJhdCBmYWl0IG9mZmljZVxyXG5cdFx0XHRcdFx0XHRcdGQnaW52ZW50YWlyZS4gUG91ciDDqXZpdGVyIHRvdXRlIGNvbnRlc3RhdGlvbiBsZVxyXG5cdFx0XHRcdFx0XHRcdGxvY2F0YWlyZSB2b3VkcmEgYmllbiBjb250csO0bGVyIGV0IHNpZ25hbGVyIHRvdXRlXHJcblx0XHRcdFx0XHRcdFx0YW5vbWFsaWUgZGFucyBsZXMgMjQgaGV1cmVzLiBQYXNzw6kgY2UgZMOpbGFpLCBsZXNcclxuXHRcdFx0XHRcdFx0XHRiaWVucyBsb3XDqXMgc2Vyb250IGNvbnNpZMOpcsOpcyBjb21tZSBleGVtcHRzIGRlXHJcblx0XHRcdFx0XHRcdFx0ZG9tbWFnZXMgw6AgbOKAmWVudHLDqWUgZHUgbG9jYXRhaXJlLiBDZWx1aS1jaSBzZXJhXHJcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2FibGUgZGUgdG91dGUgZMOpdMOpcmlvcmF0aW9uIG91IHBlcnRlIHBvdXZhbnRcclxuXHRcdFx0XHRcdFx0XHRzdXJ2ZW5pciDDoCBjZSBtb2JpbGllciBhaW5zaSBxdeKAmWF1eCBkaXZlcnMgbWF0w6lyaWVsc1xyXG5cdFx0XHRcdFx0XHRcdGRlIGzigJllc3BhY2UgcGlzY2luZSBldCBkw6l0ZW50ZS5cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlclRpdGxlQ29sb3J9PlxyXG5cdFx0XHRcdFx0XHRcdFx0Sm91aXNzYW5jZSBkZXMgbGlldXhcclxuXHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5lSGVpZ2h0UH0+XHJcblx0XHRcdFx0XHRcdFx0TGUgbG9jYXRhaXJlIGVudHJldGllbmRyYSBsZXMgbGlldXggbG91w6lzIGV0IGxlc1xyXG5cdFx0XHRcdFx0XHRcdHJlbmRyYSBlbiBib24gw6l0YXQgZGUgcHJvcHJldMOpLiBJbCB2ZWlsbGVyYSDDoCBjZSBxdWVcclxuXHRcdFx0XHRcdFx0XHRsYSB0cmFucXVpbGxpdMOpIGR1IHZvaXNpbmFnZSBuZSBzb2l0IHBhcyB0cm91YmzDqWUuXHJcblx0XHRcdFx0XHRcdFx0TGEgc291cyBsb2NhdGlvbiBlc3QgaW50ZXJkaXRlIGF1IHByZW5ldXIsIG3Dqm1lIMOgXHJcblx0XHRcdFx0XHRcdFx0dGl0cmUgZ3JhdHVpdCwgc291cyBwZWluZSBkZSByw6lzaWxpYXRpb24gZHUgY29udHJhdC5cclxuXHRcdFx0XHRcdFx0XHRM4oCZaW5zdGFsbGF0aW9uIGRlIHRlbnRlcyBvdSBsZSBzdGF0aW9ubmVtZW50IGRlXHJcblx0XHRcdFx0XHRcdFx0Y2FyYXZhbmVzIHN1ciBsZSB0ZXJyYWluIGRlIGxhIHByb3ByacOpdMOpIGxvdcOpZSBlc3RcclxuXHRcdFx0XHRcdFx0XHRpbnRlcmRpdCwgc2F1ZiBhY2NvcmQgcHLDqWFsYWJsZSBkdSBwcm9wcmnDqXRhaXJlLlxyXG5cdFx0XHRcdFx0XHRcdEzigJl1dGlsaXNhdGV1ciBz4oCZZW5nYWdlIMOgIG5lIHBhcyB1dGlsaXNlciBsZSBzZXJ2aWNlXHJcblx0XHRcdFx0XHRcdFx0V0ktRkkgw6AgZGVzIGZpbnMgaWxsaWNpdGVzLCBpbnRlcmRpdGVzIG91IGlsbMOpZ2FsZXNcclxuXHRcdFx0XHRcdFx0XHQoZW50cmUgYXV0cmVzIHJlc3BlY3QgZGUgbGEgbG9pIEhhZG9waSkuIExlIGxvdWV1cixcclxuXHRcdFx0XHRcdFx0XHTDoCBsYSBkZW1hbmRlIGRlIHRpZXJzIGV0L291IGRlIHRvdXRlIGF1dG9yaXTDqVxyXG5cdFx0XHRcdFx0XHRcdGNvbXDDqXRlbnRlLCBzZSByw6lzZXJ2ZSBsZSBkcm9pdCBkZSBzdXNwZW5kcmVcclxuXHRcdFx0XHRcdFx0XHR0ZW1wb3JhaXJlbWVudCBvdSBkZSBtYW5pw6hyZSBkw6lmaW5pdGl2ZSB0b3V0ZVxyXG5cdFx0XHRcdFx0XHRcdHV0aWxpc2F0aW9uIGR1IHNlcnZpY2Ugc2FucyBxdWUgc2EgcmVzcG9uc2FiaWxpdMOpIG5lXHJcblx0XHRcdFx0XHRcdFx0cHVpc3NlIMOqdHJlIHJlY2hlcmNow6llIGV0IHNhbnMgcXVlIGzigJl1dGlsaXNhdGV1ciBuZVxyXG5cdFx0XHRcdFx0XHRcdHB1aXNzZSByZXZlbmRpcXVlciB1bmUgcXVlbGNvbnF1ZSBpbmRlbW5pc2F0aW9uIG91XHJcblx0XHRcdFx0XHRcdFx0csOpcGFyYXRpb24uIEVuIGF1Y3VuIGNhcyBsZSBsb3VldXIgbmUgcGV1dCDDqnRyZVxyXG5cdFx0XHRcdFx0XHRcdHRlbnVlIGRlIHLDqXBhcmVyIGxlcyBwcsOpanVkaWNlcyBkaXJlY3RzIGV0L291XHJcblx0XHRcdFx0XHRcdFx0aW5kaXJlY3RzIHN1YmlzIGR1IGZhaXQgZGUgbOKAmXV0aWxpc2F0aW9uIGR1IHNlcnZpY2VcclxuXHRcdFx0XHRcdFx0XHRwYXIgbOKAmXV0aWxpc2F0ZXVyLCBjZSBkZXJuaWVyIHJlY29ubmFpc3NhbnQgcXVlIGxlXHJcblx0XHRcdFx0XHRcdFx0bG91ZXVyIG5lIHBldXQgcGFzIMOqdHJlIHJlc3BvbnNhYmxlIGRlcyBjb250ZW51c1xyXG5cdFx0XHRcdFx0XHRcdGF1cXVlbCBhY2PDqGRlIGzigJl1dGlsaXNhdGV1ciBldCBxdWUgbOKAmWFjY2Vzc2liaWxpdMOpXHJcblx0XHRcdFx0XHRcdFx0YXV4IGNvbnRlbnVzIGV0IHNlcnZpY2VzIG7igJllc3QgcGFzIGdhcmFudGllIGV0IHBldXRcclxuXHRcdFx0XHRcdFx0XHTDqnRyZSBzdXNwZW5kdWUgc2FucyBwcsOpYXZpcy5cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlclRpdGxlQ29sb3J9PlxyXG5cdFx0XHRcdFx0XHRcdFx0Q2xhdXNlIHLDqXNvbHV0b2lyZVxyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmVIZWlnaHRQfT5cclxuXHRcdFx0XHRcdFx0XHRBIGTDqWZhdXQgZGUgcGFpZW1lbnQgYXV4IMOpY2jDqWFuY2VzIGZpeMOpZXMgb3UgZW4gY2FzXHJcblx0XHRcdFx0XHRcdFx0ZOKAmWluZXjDqWN1dGlvbiBk4oCZdW5lIGRlcyBjbGF1c2VzIGR1IHByw6lzZW50XHJcblx0XHRcdFx0XHRcdFx0ZW5nYWdlbWVudCBldCBjaW5xIGpvdXJzIGZyYW5jcyBhcHLDqHMgdW5lIHNpbXBsZVxyXG5cdFx0XHRcdFx0XHRcdHNvbW1hdGlvbiBwYXIgbGV0dHJlIHJlY29tbWFuZMOpZSByZXN0w6llXHJcblx0XHRcdFx0XHRcdFx0aW5mcnVjdHVldXNlLCBsZSBwcsOpc2VudCBjb250cmF0IHNlcmEgaW1tw6lkaWF0ZW1lbnRcclxuXHRcdFx0XHRcdFx0XHRyw6lzaWxpw6kgZXQgbGUgYmFpbGxldXIgcG91cnJhIHNlIHByw6l2YWxvaXIgZGVcclxuXHRcdFx0XHRcdFx0XHRs4oCZYXJ0aWNsZSAxNTkwIGR1IENvZGUgY2l2aWwgcG91ciBjb25zZXJ2ZXIgbGVzXHJcblx0XHRcdFx0XHRcdFx0YWNvbXB0ZXMgdmVyc8OpcyDDoCB0aXRyZSBkZXMgcHJlbWllcnNcclxuXHRcdFx0XHRcdFx0XHRkb21tYWdlcy1pbnTDqXLDqnRzLlxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblxyXG5cdFx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyVGl0bGVDb2xvcn0+XHJcblx0XHRcdFx0XHRcdFx0XHRBbm51bGF0aW9uXHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMubGluZUhlaWdodFB9PlxyXG5cdFx0XHRcdFx0XHRcdExhIHNpZ25hdHVyZSBkdSBjb250cmF0IGVuZ2FnZSBsZXMgZGV1eCBwYXJ0aWVzIGRlXHJcblx0XHRcdFx0XHRcdFx0ZmHDp29uIGTDqWZpbml0aXZlLiBTaSBsZSBsb2NhdGFpcmUgcmVub25jZSDDoCBsYVxyXG5cdFx0XHRcdFx0XHRcdGxvY2F0aW9uIDYwIGpvdXJzIGF2YW50IGzigJlhcnJpdsOpZSwgbOKAmWFjb21wdGUgZXN0XHJcblx0XHRcdFx0XHRcdFx0cmVtYm91cnPDqS4gRW50cmUgMSBqb3VyIGV0IDYwIGpvdXJzIHNpIG5vdXNcclxuXHRcdFx0XHRcdFx0XHRyw6l1c3Npc3NvbnMgw6AgcmVsb3VlciwgbOKAmWFjb21wdGUgZXN0IMOpZ2FsZW1lbnRcclxuXHRcdFx0XHRcdFx0XHRyZW1ib3Vyc8OpLiBTaW5vbiBs4oCZYWNvbXB0ZSBlc3QgcGVyZHUuXHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHJcblx0XHRcdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZUNvbG9yfT5cclxuXHRcdFx0XHRcdFx0XHRcdEVsZWN0aW9uIGRlIGRvbWljaWxlXHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMubGluZUhlaWdodFB9PlxyXG5cdFx0XHRcdFx0XHRcdFBvdXIgbOKAmWV4w6ljdXRpb24gZGVzIHByw6lzZW50ZXMsIGxlIHByb3ByacOpdGFpcmUgZXRcclxuXHRcdFx0XHRcdFx0XHRsZSBsb2NhdGFpcmUgZm9udCDDqWxlY3Rpb24gZGUgZG9taWNpbGUgZGFucyBsZXVyc1xyXG5cdFx0XHRcdFx0XHRcdGRvbWljaWxlcyByZXNwZWN0aWZzLiBUb3V0ZWZvaXMgZW4gY2FzIGRlIGxpdGlnZSwgbGVcclxuXHRcdFx0XHRcdFx0XHR0cmlidW5hbCBkZXMgbGlldXggbG91w6lzIHNlcmEgc2V1bCBjb21ww6l0ZW50LlxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblxyXG5cdFx0XHRcdFx0PEdyaWRcclxuXHRcdFx0XHRcdFx0Y29udGFpbmVyXHJcblx0XHRcdFx0XHRcdGRpcmVjdGlvbj0ncm93J1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5PSdzcGFjZS1iZXR3ZWVuJ1xyXG5cdFx0XHRcdFx0XHRzcGFjaW5nPXs0fVxyXG5cdFx0XHRcdFx0XHRhbGlnbkl0ZW1zPSdmbGV4LWVuZCdcclxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgbWFyZ2luVG9wOiAnMjBweCcgfX0+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHRGYWl0IGVuIGRldXggZXhlbXBsYWlyZXMgw6AgRm9zc8OpIGxlIHtEYXRlLm5vdygpfVxyXG5cdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8cD5TaWduYXR1cmUgZHUgcHJvcHJpw6l0YWlyZSw8L3A+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdErigJlhaSBwcmlzIGNvbm5haXNzYW5jZSBkZXMgY29uZGl0aW9ucyBkZVxyXG5cdFx0XHRcdFx0XHRcdFx0bG9jYXRpb24gY2ktZGVzc3VzXHJcblx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxwIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzIwcHgnIH19PkRhdGUgOjwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFNpZ25hdHVyZSBkdSBsb2NhdGFpcmUgKHByw6ljw6lkw6kgZGUgbGEgbWVudGlvbiBsdVxyXG5cdFx0XHRcdFx0XHRcdFx0ZXQgYXBwcm91dsOpKVxyXG5cdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L1RoZW1lUHJvdmlkZXI+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcblx0Ly8gY29uc29sZS5sb2coJ2NvbnRleHQnLCBjb250ZXh0LnF1ZXJ5LmlkKTtcclxuXHRjb25zdCByZXMxID0gYXdhaXQgYWZmaWNoZVJlc2VydmF0aW9uKGNvbnRleHQucXVlcnkuaWQpO1xyXG5cdGNvbnN0IHJlc2VydmF0aW9uID0gYXdhaXQgcmVzMTtcclxuXHQvLyBjb25zb2xlLmxvZygncmVzZXJ2YXRpb24nLCByZXNlcnZhdGlvbik7XHJcblx0Y29uc3QgcmVzMiA9IGF3YWl0IGxpc3RHaXRlQnlJZChyZXNlcnZhdGlvbi5naXRlKTtcclxuXHRjb25zdCBnaXRlID0gYXdhaXQgcmVzMjtcclxuXHRjb25zdCByZXMzID0gYXdhaXQgYWZmaWNoZUNsaWVudChyZXNlcnZhdGlvbi5jbGllbnQpO1xyXG5cdGNvbnN0IGNsaWVudCA9IGF3YWl0IHJlczM7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRyZXNlcnZhdGlvbixcclxuXHRcdFx0Z2l0ZSxcclxuXHRcdFx0Y2xpZW50LFxyXG5cdFx0fSxcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlcnZhdGlvbklkO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy1mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVuZGVyLWh0bWxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==