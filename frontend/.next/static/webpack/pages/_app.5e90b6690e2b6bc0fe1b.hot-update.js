webpackHotUpdate_N_E("pages/_app",{

/***/ "./actions/authActions.js":
/*!********************************!*\
  !*** ./actions/authActions.js ***!
  \********************************/
/*! exports provided: login, logout, setCookie, removeCookie, getCookie, setLocalStorage, removeLocalStorage, authenticate, isAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocalStorage", function() { return setLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLocalStorage", function() { return removeLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticate", function() { return authenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAuth", function() { return isAuth; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
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

var login = function login(user) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/admin/login"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var logout = function logout(next) {
  removeCookie('token');
  removeLocalStorage('user');
  next();
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/admin/logout"), {
    method: 'GET'
  }).then(function (response) {
    console.log('Vous êtes maintenant déconnecté');
  })["catch"](function (err) {
    console.log(err);
  });
};
var setCookie = function setCookie(key, value) {
  if (true) {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set(key, value, {
      expires: 1
    });
  }
};
var removeCookie = function removeCookie(key) {
  if (true) {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove(key, {
      expires: 1
    });
  }
};
var getCookie = function getCookie(key) {
  if (true) {
    return js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(key);
  }
};
var setLocalStorage = function setLocalStorage(key, value) {
  if (true) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
var removeLocalStorage = function removeLocalStorage(key) {
  if (true) {
    localStorage.removeItem(key);
  }
};
var authenticate = function authenticate(data, next) {
  setCookie('token', data.token);
  var name = data.name,
      email = data.email,
      isAdmin = data.isAdmin,
      _id = data._id;
  var user = {
    name: name,
    email: email,
    isAdmin: isAdmin,
    _id: _id
  }; // console.log('user dans authenticate', user);

  setLocalStorage('user', user);
  next();
};
var isAuth = function isAuth() {
  if (true) {
    var cookieChecked = getCookie('token');

    if (cookieChecked) {
      if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'));
      } else {
        return false;
      }
    }
  }
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/store.js":
/*!*****************************!*\
  !*** ./components/store.js ***!
  \*****************************/
/*! exports provided: wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/authActions */ "./actions/authActions.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // create your reducer

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    tick: 'init'
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), action.payload);

    case 'TICK':
      return _objectSpread(_objectSpread({}, state), {}, {
        tick: action.payload
      });

    default:
      return state;
  }
};

var userInfoFromStorage = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_3__["getCookie"])('token') ? JSON.parse(Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_3__["getCookie"])('token')) : null;
var initialState = {
  userLogin: {
    token: userInfoFromStorage
  }
}; // create a makeStore function

var makeStore = function makeStore(context) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducer);
}; // export an assembled wrapper


var wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["createWrapper"])(makeStore, {
  debug: true
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: API, APP_NAME, DOMAIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_NAME", function() { return APP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAIN", function() { return DOMAIN; });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/config */ "./node_modules/next/config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);


var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_0___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var API = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.API_PRODUCTION : publicRuntimeConfig.API_DEVELOPMENT;
var APP_NAME = publicRuntimeConfig.APP_NAME;
var DOMAIN = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.DOMAIN_PRODUCTION : publicRuntimeConfig.DOMAIN_DEVELOPMENT;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js":
/*!***************************************************************!*\
  !*** ./node_modules/isomorphic-fetch/fetch-npm-browserify.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(/*! whatwg-fetch */ "./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js");
module.exports = self.fetch.bind(self);


/***/ }),

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "./node_modules/next/config.js":
/*!*************************************!*\
  !*** ./node_modules/next/config.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/runtime-config */ "./node_modules/next/dist/next-server/lib/runtime-config.js")


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals self */exports.Headers=self.Headers;exports.Request=self.Request;exports.Response=self.Response;exports.fetch=self.fetch;
//# sourceMappingURL=whatwg-fetch.js.map

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9hdXRoQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdG9yZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29uZmlnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1mZXRjaC9mZXRjaC1ucG0tYnJvd3NlcmlmeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2pzLWNvb2tpZS9zcmMvanMuY29va2llLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9jb25maWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL2ZldGNoL3doYXR3Zy1mZXRjaC5qcyJdLCJuYW1lcyI6WyJsb2dpbiIsInVzZXIiLCJmZXRjaCIsIkFQSSIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibG9nb3V0IiwibmV4dCIsInJlbW92ZUNvb2tpZSIsInJlbW92ZUxvY2FsU3RvcmFnZSIsInNldENvb2tpZSIsImtleSIsInZhbHVlIiwiY29va2llIiwic2V0IiwiZXhwaXJlcyIsInJlbW92ZSIsImdldENvb2tpZSIsImdldCIsInNldExvY2FsU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiYXV0aGVudGljYXRlIiwiZGF0YSIsInRva2VuIiwibmFtZSIsImVtYWlsIiwiaXNBZG1pbiIsIl9pZCIsImlzQXV0aCIsImNvb2tpZUNoZWNrZWQiLCJnZXRJdGVtIiwicGFyc2UiLCJyZWR1Y2VyIiwic3RhdGUiLCJ0aWNrIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJwYXlsb2FkIiwidXNlckluZm9Gcm9tU3RvcmFnZSIsImluaXRpYWxTdGF0ZSIsInVzZXJMb2dpbiIsIm1ha2VTdG9yZSIsImNvbnRleHQiLCJjcmVhdGVTdG9yZSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJnZXRDb25maWciLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwiUFJPRFVDVElPTiIsIkFQSV9QUk9EVUNUSU9OIiwiQVBJX0RFVkVMT1BNRU5UIiwiQVBQX05BTUUiLCJET01BSU4iLCJET01BSU5fUFJPRFVDVElPTiIsIkRPTUFJTl9ERVZFTE9QTUVOVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsSUFBRCxFQUFVO0FBQzlCLFNBQU9DLHVEQUFLLFdBQUlDLDJDQUFKLG1CQUF1QjtBQUNsQ0MsVUFBTSxFQUFFLE1BRDBCO0FBRWxDQyxXQUFPLEVBQUU7QUFDUkMsWUFBTSxFQUFFLGtCQURBO0FBRVIsc0JBQWdCO0FBRlIsS0FGeUI7QUFNbENDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVSLElBQWY7QUFONEIsR0FBdkIsQ0FBTCxDQVFMUyxJQVJLLENBUUEsVUFBQ0MsUUFBRCxFQUFjO0FBQ25CLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0EsR0FWSyxXQVdDLFVBQUNDLEdBQUQ7QUFBQSxXQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFUO0FBQUEsR0FYRCxDQUFQO0FBWUEsQ0FiTTtBQWVBLElBQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLElBQUQsRUFBVTtBQUMvQkMsY0FBWSxDQUFD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RTtBQUNyRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDs7QUFFQSxTQUFTLG9CQUFvQjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0IsQ0FBQzs7Ozs7Ozs7Ozs7O0FDbEtELGlCQUFpQixtQkFBTyxDQUFDLHlHQUF1Qzs7Ozs7Ozs7Ozs7OztBQ0FuRCwrQ0FBK0MsNkJBQTZCLCtCQUErQjtBQUN4SCx3QyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjVlOTBiNjY5MGUyYjZiYzBmZTFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgaGFuZGxlUmVzcG9uc2UgPSAocmVzcG9uc2UpID0+IHtcclxuLy8gXHRpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuLy8gXHRcdHNpZ25vdXQoKCkgPT4ge1xyXG4vLyBcdFx0XHRSb3V0ZXIucHVzaCh7XHJcbi8vIFx0XHRcdFx0cGF0aG5hbWU6ICcvbG9naW4nLFxyXG4vLyBcdFx0XHRcdHF1ZXJ5OiB7XHJcbi8vIFx0XHRcdFx0XHRtZXNzYWdlOlxyXG4vLyBcdFx0XHRcdFx0XHQnVm90cmUgY2Vzc2lvbiDDoCBleHBpcsOpLCBtZXJjaSBkZSB2b3VzIHJlY29ubmVjdGVyLicsXHJcbi8vIFx0XHRcdFx0fSxcclxuLy8gXHRcdFx0fSk7XHJcbi8vIFx0XHR9KTtcclxuLy8gXHR9IGVsc2Uge1xyXG4vLyBcdFx0cmV0dXJuO1xyXG4vLyBcdH1cclxuLy8gfTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbiA9ICh1c2VyKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vYWRtaW4vbG9naW5gLCB7XHJcblx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHR9LFxyXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkodXNlciksXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAobmV4dCkgPT4ge1xyXG5cdHJlbW92ZUNvb2tpZSgndG9rZW4nKTtcclxuXHRyZW1vdmVMb2NhbFN0b3JhZ2UoJ3VzZXInKTtcclxuXHRuZXh0KCk7XHJcblxyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L2FkbWluL2xvZ291dGAsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnVm91cyDDqnRlcyBtYWludGVuYW50IGTDqWNvbm5lY3TDqScpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0XHR9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG5cdGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuXHRcdGNvb2tpZS5zZXQoa2V5LCB2YWx1ZSwge1xyXG5cdFx0XHRleHBpcmVzOiAxLFxyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvb2tpZSA9IChrZXkpID0+IHtcclxuXHRpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcblx0XHRjb29raWUucmVtb3ZlKGtleSwge1xyXG5cdFx0XHRleHBpcmVzOiAxLFxyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IChrZXkpID0+IHtcclxuXHRpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcblx0XHRyZXR1cm4gY29va2llLmdldChrZXkpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRMb2NhbFN0b3JhZ2UgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG5cdGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlTG9jYWxTdG9yYWdlID0gKGtleSkgPT4ge1xyXG5cdGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuXHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhlbnRpY2F0ZSA9IChkYXRhLCBuZXh0KSA9PiB7XHJcblx0c2V0Q29va2llKCd0b2tlbicsIGRhdGEudG9rZW4pO1xyXG5cdGNvbnN0IHsgbmFtZSwgZW1haWwsIGlzQWRtaW4sIF9pZCB9ID0gZGF0YTtcclxuXHRjb25zdCB1c2VyID0geyBuYW1lLCBlbWFpbCwgaXNBZG1pbiwgX2lkIH07XHJcblx0Ly8gY29uc29sZS5sb2coJ3VzZXIgZGFucyBhdXRoZW50aWNhdGUnLCB1c2VyKTtcclxuXHRzZXRMb2NhbFN0b3JhZ2UoJ3VzZXInLCB1c2VyKTtcclxuXHRuZXh0KCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaXNBdXRoID0gKCkgPT4ge1xyXG5cdGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuXHRcdGNvbnN0IGNvb2tpZUNoZWNrZWQgPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblx0XHRpZiAoY29va2llQ2hlY2tlZCkge1xyXG5cdFx0XHRpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkge1xyXG5cdFx0XHRcdHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIsIEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuXHJcbi8vIGNyZWF0ZSB5b3VyIHJlZHVjZXJcclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IHsgdGljazogJ2luaXQnIH0sIGFjdGlvbikgPT4ge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgSFlEUkFURTpcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcblx0XHRjYXNlICdUSUNLJzpcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHRpY2s6IGFjdGlvbi5wYXlsb2FkIH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgdXNlckluZm9Gcm9tU3RvcmFnZSA9IGdldENvb2tpZSgndG9rZW4nKVxyXG5cdD8gSlNPTi5wYXJzZShnZXRDb29raWUoJ3Rva2VuJykpXHJcblx0OiBudWxsO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdHVzZXJMb2dpbjogeyB0b2tlbjogdXNlckluZm9Gcm9tU3RvcmFnZSB9LFxyXG59O1xyXG5cclxuLy8gY3JlYXRlIGEgbWFrZVN0b3JlIGZ1bmN0aW9uXHJcbmNvbnN0IG1ha2VTdG9yZSA9IChjb250ZXh0KSA9PiBjcmVhdGVTdG9yZShyZWR1Y2VyKTtcclxuXHJcbi8vIGV4cG9ydCBhbiBhc3NlbWJsZWQgd3JhcHBlclxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlLCB7IGRlYnVnOiB0cnVlIH0pO1xyXG4iLCJpbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcclxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBBUEkgPSBwdWJsaWNSdW50aW1lQ29uZmlnLlBST0RVQ1RJT05cclxuXHQ/IHB1YmxpY1J1bnRpbWVDb25maWcuQVBJX1BST0RVQ1RJT05cclxuXHQ6IHB1YmxpY1J1bnRpbWVDb25maWcuQVBJX0RFVkVMT1BNRU5UO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFQUF9OQU1FID0gcHVibGljUnVudGltZUNvbmZpZy5BUFBfTkFNRTtcclxuXHJcbmV4cG9ydCBjb25zdCBET01BSU4gPSBwdWJsaWNSdW50aW1lQ29uZmlnLlBST0RVQ1RJT05cclxuXHQ/IHB1YmxpY1J1bnRpbWVDb25maWcuRE9NQUlOX1BST0RVQ1RJT05cclxuXHQ6IHB1YmxpY1J1bnRpbWVDb25maWcuRE9NQUlOX0RFVkVMT1BNRU5UO1xyXG4iLCIvLyB0aGUgd2hhdHdnLWZldGNoIHBvbHlmaWxsIGluc3RhbGxzIHRoZSBmZXRjaCgpIGZ1bmN0aW9uXG4vLyBvbiB0aGUgZ2xvYmFsIG9iamVjdCAod2luZG93IG9yIHNlbGYpXG4vL1xuLy8gUmV0dXJuIHRoYXQgYXMgdGhlIGV4cG9ydCBmb3IgdXNlIGluIFdlYnBhY2ssIEJyb3dzZXJpZnkgZXRjLlxucmVxdWlyZSgnd2hhdHdnLWZldGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHNlbGYuZmV0Y2guYmluZChzZWxmKTtcbiIsIi8qIVxuICogSmF2YVNjcmlwdCBDb29raWUgdjIuMi4xXG4gKiBodHRwczovL2dpdGh1Yi5jb20vanMtY29va2llL2pzLWNvb2tpZVxuICpcbiAqIENvcHlyaWdodCAyMDA2LCAyMDE1IEtsYXVzIEhhcnRsICYgRmFnbmVyIEJyYWNrXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuOyhmdW5jdGlvbiAoZmFjdG9yeSkge1xuXHR2YXIgcmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyO1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKCFyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIpIHtcblx0XHR2YXIgT2xkQ29va2llcyA9IHdpbmRvdy5Db29raWVzO1xuXHRcdHZhciBhcGkgPSB3aW5kb3cuQ29va2llcyA9IGZhY3RvcnkoKTtcblx0XHRhcGkubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHdpbmRvdy5Db29raWVzID0gT2xkQ29va2llcztcblx0XHRcdHJldHVybiBhcGk7XG5cdFx0fTtcblx0fVxufShmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIGV4dGVuZCAoKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHZhciByZXN1bHQgPSB7fTtcblx0XHRmb3IgKDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGF0dHJpYnV0ZXMgPSBhcmd1bWVudHNbIGkgXTtcblx0XHRcdGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRcdHJlc3VsdFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZnVuY3Rpb24gZGVjb2RlIChzKSB7XG5cdFx0cmV0dXJuIHMucmVwbGFjZSgvKCVbMC05QS1aXXsyfSkrL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cdH1cblxuXHRmdW5jdGlvbiBpbml0IChjb252ZXJ0ZXIpIHtcblx0XHRmdW5jdGlvbiBhcGkoKSB7fVxuXG5cdFx0ZnVuY3Rpb24gc2V0IChrZXksIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGF0dHJpYnV0ZXMgPSBleHRlbmQoe1xuXHRcdFx0XHRwYXRoOiAnLydcblx0XHRcdH0sIGFwaS5kZWZhdWx0cywgYXR0cmlidXRlcyk7XG5cblx0XHRcdGlmICh0eXBlb2YgYXR0cmlidXRlcy5leHBpcmVzID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRhdHRyaWJ1dGVzLmV4cGlyZXMgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpICogMSArIGF0dHJpYnV0ZXMuZXhwaXJlcyAqIDg2NGUrNSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFdlJ3JlIHVzaW5nIFwiZXhwaXJlc1wiIGJlY2F1c2UgXCJtYXgtYWdlXCIgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxuXHRcdFx0YXR0cmlidXRlcy5leHBpcmVzID0gYXR0cmlidXRlcy5leHBpcmVzID8gYXR0cmlidXRlcy5leHBpcmVzLnRvVVRDU3RyaW5nKCkgOiAnJztcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0XHRcdFx0aWYgKC9eW1xce1xcW10vLnRlc3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdHZhbHVlID0gcmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7fVxuXG5cdFx0XHR2YWx1ZSA9IGNvbnZlcnRlci53cml0ZSA/XG5cdFx0XHRcdGNvbnZlcnRlci53cml0ZSh2YWx1ZSwga2V5KSA6XG5cdFx0XHRcdGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodmFsdWUpKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDNBfDNDfDNFfDNEfDJGfDNGfDQwfDVCfDVEfDVFfDYwfDdCfDdEfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXG5cdFx0XHRrZXkgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGtleSkpXG5cdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDVFfDYwfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpXG5cdFx0XHRcdC5yZXBsYWNlKC9bXFwoXFwpXS9nLCBlc2NhcGUpO1xuXG5cdFx0XHR2YXIgc3RyaW5naWZpZWRBdHRyaWJ1dGVzID0gJyc7XG5cdFx0XHRmb3IgKHZhciBhdHRyaWJ1dGVOYW1lIGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0aWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc7ICcgKyBhdHRyaWJ1dGVOYW1lO1xuXHRcdFx0XHRpZiAoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ29uc2lkZXJzIFJGQyA2MjY1IHNlY3Rpb24gNS4yOlxuXHRcdFx0XHQvLyAuLi5cblx0XHRcdFx0Ly8gMy4gIElmIHRoZSByZW1haW5pbmcgdW5wYXJzZWQtYXR0cmlidXRlcyBjb250YWlucyBhICV4M0IgKFwiO1wiKVxuXHRcdFx0XHQvLyAgICAgY2hhcmFjdGVyOlxuXHRcdFx0XHQvLyBDb25zdW1lIHRoZSBjaGFyYWN0ZXJzIG9mIHRoZSB1bnBhcnNlZC1hdHRyaWJ1dGVzIHVwIHRvLFxuXHRcdFx0XHQvLyBub3QgaW5jbHVkaW5nLCB0aGUgZmlyc3QgJXgzQiAoXCI7XCIpIGNoYXJhY3Rlci5cblx0XHRcdFx0Ly8gLi4uXG5cdFx0XHRcdHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnPScgKyBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdLnNwbGl0KCc7JylbMF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoZG9jdW1lbnQuY29va2llID0ga2V5ICsgJz0nICsgdmFsdWUgKyBzdHJpbmdpZmllZEF0dHJpYnV0ZXMpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGdldCAoa2V5LCBqc29uKSB7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBqYXIgPSB7fTtcblx0XHRcdC8vIFRvIHByZXZlbnQgdGhlIGZvciBsb29wIGluIHRoZSBmaXJzdCBwbGFjZSBhc3NpZ24gYW4gZW1wdHkgYXJyYXlcblx0XHRcdC8vIGluIGNhc2UgdGhlcmUgYXJlIG5vIGNvb2tpZXMgYXQgYWxsLlxuXHRcdFx0dmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUgPyBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykgOiBbXTtcblx0XHRcdHZhciBpID0gMDtcblxuXHRcdFx0Zm9yICg7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJ0cyA9IGNvb2tpZXNbaV0uc3BsaXQoJz0nKTtcblx0XHRcdFx0dmFyIGNvb2tpZSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJz0nKTtcblxuXHRcdFx0XHRpZiAoIWpzb24gJiYgY29va2llLmNoYXJBdCgwKSA9PT0gJ1wiJykge1xuXHRcdFx0XHRcdGNvb2tpZSA9IGNvb2tpZS5zbGljZSgxLCAtMSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhciBuYW1lID0gZGVjb2RlKHBhcnRzWzBdKTtcblx0XHRcdFx0XHRjb29raWUgPSAoY29udmVydGVyLnJlYWQgfHwgY29udmVydGVyKShjb29raWUsIG5hbWUpIHx8XG5cdFx0XHRcdFx0XHRkZWNvZGUoY29va2llKTtcblxuXHRcdFx0XHRcdGlmIChqc29uKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRjb29raWUgPSBKU09OLnBhcnNlKGNvb2tpZSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGphcltuYW1lXSA9IGNvb2tpZTtcblxuXHRcdFx0XHRcdGlmIChrZXkgPT09IG5hbWUpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGtleSA/IGphcltrZXldIDogamFyO1xuXHRcdH1cblxuXHRcdGFwaS5zZXQgPSBzZXQ7XG5cdFx0YXBpLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBnZXQoa2V5LCBmYWxzZSAvKiByZWFkIGFzIHJhdyAqLyk7XG5cdFx0fTtcblx0XHRhcGkuZ2V0SlNPTiA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBnZXQoa2V5LCB0cnVlIC8qIHJlYWQgYXMganNvbiAqLyk7XG5cdFx0fTtcblx0XHRhcGkucmVtb3ZlID0gZnVuY3Rpb24gKGtleSwgYXR0cmlidXRlcykge1xuXHRcdFx0c2V0KGtleSwgJycsIGV4dGVuZChhdHRyaWJ1dGVzLCB7XG5cdFx0XHRcdGV4cGlyZXM6IC0xXG5cdFx0XHR9KSk7XG5cdFx0fTtcblxuXHRcdGFwaS5kZWZhdWx0cyA9IHt9O1xuXG5cdFx0YXBpLndpdGhDb252ZXJ0ZXIgPSBpbml0O1xuXG5cdFx0cmV0dXJuIGFwaTtcblx0fVxuXG5cdHJldHVybiBpbml0KGZ1bmN0aW9uICgpIHt9KTtcbn0pKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L25leHQtc2VydmVyL2xpYi9ydW50aW1lLWNvbmZpZycpXG4iLCJcInVzZSBzdHJpY3RcIjsvKiBnbG9iYWxzIHNlbGYgKi9leHBvcnRzLkhlYWRlcnM9c2VsZi5IZWFkZXJzO2V4cG9ydHMuUmVxdWVzdD1zZWxmLlJlcXVlc3Q7ZXhwb3J0cy5SZXNwb25zZT1zZWxmLlJlc3BvbnNlO2V4cG9ydHMuZmV0Y2g9c2VsZi5mZXRjaDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdoYXR3Zy1mZXRjaC5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9