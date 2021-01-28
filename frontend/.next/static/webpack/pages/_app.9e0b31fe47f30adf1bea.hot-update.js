webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/store.js":
/*!*****************************!*\
  !*** ./components/store.js ***!
  \*****************************/
/*! exports provided: wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var _reducers_giteReducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/giteReducers */ "./reducers/giteReducers.js");



 // create your reducer

var reducer = combineReducers({
  QRList: _reducers_giteReducers__WEBPACK_IMPORTED_MODULE_3__["QRListReducer"],
  QRDelete: _reducers_giteReducers__WEBPACK_IMPORTED_MODULE_3__["QRDeleteReducer"],
  QRCreate: _reducers_giteReducers__WEBPACK_IMPORTED_MODULE_3__["QRCreateReducer"],
  QRUpdate: _reducers_giteReducers__WEBPACK_IMPORTED_MODULE_3__["QRUpdateReducer"]
}); // (state = { tick: 'init' }, action) => {
// 	switch (action.type) {
// 		case HYDRATE:
// 			return { ...state, ...action.payload };
// 		case 'TICK':
// 			return { ...state, tick: action.payload };
// 		default:
// 			return state;
// 	}
// };

var userInfoFromStorage = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_2__["getCookie"])('token') ? JSON.parse(Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_2__["getCookie"])('token')) : null;
var initialState = {
  userLogin: {
    token: userInfoFromStorage
  }
}; // create a makeStore function

var makeStore = function makeStore(context) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState);
}; // export an assembled wrapper


var wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["createWrapper"])(makeStore, {
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

/***/ "./constants/giteConstants.js":
/*!************************************!*\
  !*** ./constants/giteConstants.js ***!
  \************************************/
/*! exports provided: QR_LIST_REQUEST, QR_LIST_SUCCESS, QR_LIST_FAIL, QR_DELETE_REQUEST, QR_DELETE_SUCCESS, QR_DELETE_FAIL, QR_CREATE_REQUEST, QR_CREATE_SUCCESS, QR_CREATE_FAIL, QR_CREATE_RESET, QR_UPDATE_REQUEST, QR_UPDATE_SUCCESS, QR_UPDATE_FAIL, QR_UPDATE_RESET, GITE_LIST_REQUEST, GITE_LIST_SUCCESS, GITE_LIST_FAIL, GITE_DETAILS_REQUEST, GITE_DETAILS_SUCCESS, GITE_DETAILS_FAIL, GITE_DELETE_REQUEST, GITE_DELETE_SUCCESS, GITE_DELETE_FAIL, GITE_CREATE_REQUEST, GITE_CREATE_SUCCESS, GITE_CREATE_FAIL, GITE_CREATE_RESET, GITE_UPDATE_REQUEST, GITE_UPDATE_SUCCESS, GITE_UPDATE_FAIL, GITE_UPDATE_RESET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QR_LIST_REQUEST", function() { return QR_LIST_REQUEST; });
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
var QR_LIST_REQUEST = 'QR_LIST_REQUEST';
var QR_LIST_SUCCESS = 'QR_LIST_SUCCESS';
var QR_LIST_FAIL = 'QR_LIST_FAIL'; // export const QR_DETAILS_REQUEST = 'QR_DETAILS_REQUEST';
// export const QR_DETAILS_SUCCESS = 'QR_DETAILS_SUCCESS';
// export const QR_DETAILS_FAIL = 'QR_DETAILS_FAIL';

var QR_DELETE_REQUEST = 'QR_DELETE_REQUEST';
var QR_DELETE_SUCCESS = 'QR_DELETE_SUCCESS';
var QR_DELETE_FAIL = 'QR_DELETE_FAIL';
var QR_CREATE_REQUEST = 'QR_CREATE_REQUEST';
var QR_CREATE_SUCCESS = 'QR_CREATE_SUCCESS';
var QR_CREATE_FAIL = 'QR_CREATE_FAIL';
var QR_CREATE_RESET = 'QR_CREATE_RESET';
var QR_UPDATE_REQUEST = 'QR_UPDATE_REQUEST';
var QR_UPDATE_SUCCESS = 'QR_UPDATE_SUCCESS';
var QR_UPDATE_FAIL = 'QR_UPDATE_FAIL';
var QR_UPDATE_RESET = 'QR_UPDATE_RESET';
var GITE_LIST_REQUEST = 'GITE_LIST_REQUEST';
var GITE_LIST_SUCCESS = 'GITE_LIST_SUCCESS';
var GITE_LIST_FAIL = 'GITE_LIST_FAIL';
var GITE_DETAILS_REQUEST = 'GITE_DETAILS_REQUEST';
var GITE_DETAILS_SUCCESS = 'GITE_DETAILS_SUCCESS';
var GITE_DETAILS_FAIL = 'GITE_DETAILS_FAIL';
var GITE_DELETE_REQUEST = 'GITE_DELETE_REQUEST';
var GITE_DELETE_SUCCESS = 'GITE_DELETE_SUCCESS';
var GITE_DELETE_FAIL = 'GITE_DELETE_FAIL';
var GITE_CREATE_REQUEST = 'GITE_CREATE_REQUEST';
var GITE_CREATE_SUCCESS = 'GITE_CREATE_SUCCESS';
var GITE_CREATE_FAIL = 'GITE_CREATE_FAIL';
var GITE_CREATE_RESET = 'GITE_CREATE_RESET';
var GITE_UPDATE_REQUEST = 'GITE_UPDATE_REQUEST';
var GITE_UPDATE_SUCCESS = 'GITE_UPDATE_SUCCESS';
var GITE_UPDATE_FAIL = 'GITE_UPDATE_FAIL';
var GITE_UPDATE_RESET = 'GITE_UPDATE_RESET';

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

/***/ "./reducers/giteReducers.js":
/*!**********************************!*\
  !*** ./reducers/giteReducers.js ***!
  \**********************************/
/*! exports provided: QRListReducer, QRDeleteReducer, QRCreateReducer, QRUpdateReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRListReducer", function() { return QRListReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRDeleteReducer", function() { return QRDeleteReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRCreateReducer", function() { return QRCreateReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRUpdateReducer", function() { return QRUpdateReducer; });
/* harmony import */ var _constants_giteConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/giteConstants */ "./constants/giteConstants.js");

var QRListReducer = function QRListReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    QRs: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

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
_c = QRListReducer;
var QRDeleteReducer = function QRDeleteReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

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
_c2 = QRDeleteReducer;
var QRCreateReducer = function QRCreateReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

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
_c3 = QRCreateReducer;
var QRUpdateReducer = function QRUpdateReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    QR: {}
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

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
_c4 = QRUpdateReducer;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "QRListReducer");
$RefreshReg$(_c2, "QRDeleteReducer");
$RefreshReg$(_c3, "QRCreateReducer");
$RefreshReg$(_c4, "QRUpdateReducer");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdG9yZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL2dpdGVDb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL2dpdGVSZWR1Y2Vycy5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiUVJMaXN0IiwiUVJMaXN0UmVkdWNlciIsIlFSRGVsZXRlIiwiUVJEZWxldGVSZWR1Y2VyIiwiUVJDcmVhdGUiLCJRUkNyZWF0ZVJlZHVjZXIiLCJRUlVwZGF0ZSIsIlFSVXBkYXRlUmVkdWNlciIsInVzZXJJbmZvRnJvbVN0b3JhZ2UiLCJnZXRDb29raWUiLCJKU09OIiwicGFyc2UiLCJpbml0aWFsU3RhdGUiLCJ1c2VyTG9naW4iLCJ0b2tlbiIsIm1ha2VTdG9yZSIsImNvbnRleHQiLCJjcmVhdGVTdG9yZSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJRUl9MSVNUX1JFUVVFU1QiLCJRUl9MSVNUX1NVQ0NFU1MiLCJRUl9MSVNUX0ZBSUwiLCJRUl9ERUxFVEVfUkVRVUVTVCIsIlFSX0RFTEVURV9TVUNDRVNTIiwiUVJfREVMRVRFX0ZBSUwiLCJRUl9DUkVBVEVfUkVRVUVTVCIsIlFSX0NSRUFURV9TVUNDRVNTIiwiUVJfQ1JFQVRFX0ZBSUwiLCJRUl9DUkVBVEVfUkVTRVQiLCJRUl9VUERBVEVfUkVRVUVTVCIsIlFSX1VQREFURV9TVUNDRVNTIiwiUVJfVVBEQVRFX0ZBSUwiLCJRUl9VUERBVEVfUkVTRVQiLCJHSVRFX0xJU1RfUkVRVUVTVCIsIkdJVEVfTElTVF9TVUNDRVNTIiwiR0lURV9MSVNUX0ZBSUwiLCJHSVRFX0RFVEFJTFNfUkVRVUVTVCIsIkdJVEVfREVUQUlMU19TVUNDRVNTIiwiR0lURV9ERVRBSUxTX0ZBSUwiLCJHSVRFX0RFTEVURV9SRVFVRVNUIiwiR0lURV9ERUxFVEVfU1VDQ0VTUyIsIkdJVEVfREVMRVRFX0ZBSUwiLCJHSVRFX0NSRUFURV9SRVFVRVNUIiwiR0lURV9DUkVBVEVfU1VDQ0VTUyIsIkdJVEVfQ1JFQVRFX0ZBSUwiLCJHSVRFX0NSRUFURV9SRVNFVCIsIkdJVEVfVVBEQVRFX1JFUVVFU1QiLCJHSVRFX1VQREFURV9TVUNDRVNTIiwiR0lURV9VUERBVEVfRkFJTCIsIkdJVEVfVVBEQVRFX1JFU0VUIiwic3RhdGUiLCJRUnMiLCJhY3Rpb24iLCJ0eXBlIiwibG9hZGluZyIsInBheWxvYWQiLCJlcnJvciIsInN1Y2Nlc3MiLCJRUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtDQVFBOztBQUNBLElBQU1BLE9BQU8sR0FBR0MsZUFBZSxDQUFDO0FBQy9CQyxRQUFNLEVBQUVDLG9FQUR1QjtBQUUvQkMsVUFBUSxFQUFFQyxzRUFGcUI7QUFHL0JDLFVBQVEsRUFBRUMsc0VBSHFCO0FBSS9CQyxVQUFRLEVBQUVDLHNFQUFlQTtBQUpNLENBQUQsQ0FBL0IsQyxDQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1DLG1CQUFtQixHQUFHQyxzRUFBUyxDQUFDLE9BQUQsQ0FBVCxHQUN6QkMsSUFBSSxDQUFDQyxLQUFMLENBQVdGLHNFQUFTLENBQUMsT0FBRCxDQUFwQixDQUR5QixHQUV6QixJQUZIO0FBSUEsSUFBTUcsWUFBWSxHQUFHO0FBQ3BCQyxXQUFTLEVBQUU7QUFBRUMsU0FBSyxFQUFFTjtBQUFUO0FBRFMsQ0FBckIsQyxDQUlBOztBQUNBLElBQU1PLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE9BQUQ7QUFBQSxTQUFhQyx5REFBVyxDQUFDbkIsT0FBRCxFQUFVYyxZQUFWLENBQXhCO0FBQUEsQ0FBbEIsQyxDQUVBOzs7QUFDTyxJQUFNTSxPQUFPLEdBQUdDLHdFQUFhLENBQUNKLFNBQUQsRUFBWTtBQUFFSyxPQUFLLEVBQUU7QUFBVCxDQUFaLENBQTdCOzs7Ozs7Ozs7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SUFBZjtBQUNDLFNBQUt4QiwwRUFBTDtBQUNDLGFBQU87QUFDTnlCLGVBQU8sRUFBRTtBQURILE9BQVA7O0FBR0QsU0FBS3hCLDBFQUFMO0FBQ0MsYUFBTztBQUNOd0IsZUFBTyxFQUFFLEtBREg7QUFFTkcsZUFBTyxFQUFFLElBRkg7QUFHTkMsVUFBRSxFQUFFTixNQUFNLENBQUNHO0FBSEwsT0FBUDs7QUFLRCxTQUFLeEIsdUVBQUw7QUFDQyxhQUFPO0FBQ051QixlQUFPLEVBQUUsS0FESDtBQUVORSxhQUFLLEVBQUVKLE1BQU0sQ0FBQ0c7QUFGUixPQUFQOztBQUlELFNBQUt2Qix3RUFBTDtBQUNDLGFBQU87QUFDTjBCLFVBQUUsRUFBRTtBQURFLE9BQVA7O0FBR0Q7QUFDQyxhQUFPUixLQUFQO0FBckJGO0FBdUJBLENBeEJNO01BQU03QyxlIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOWUwYjMxZmU0N2YzMGFkZjFiZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyLCBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7XHJcblx0UVJDcmVhdGVSZWR1Y2VyLFxyXG5cdFFSRGVsZXRlUmVkdWNlcixcclxuXHRRUkxpc3RSZWR1Y2VyLFxyXG5cdFFSVXBkYXRlUmVkdWNlcixcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9naXRlUmVkdWNlcnMnO1xyXG5cclxuLy8gY3JlYXRlIHlvdXIgcmVkdWNlclxyXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuXHRRUkxpc3Q6IFFSTGlzdFJlZHVjZXIsXHJcblx0UVJEZWxldGU6IFFSRGVsZXRlUmVkdWNlcixcclxuXHRRUkNyZWF0ZTogUVJDcmVhdGVSZWR1Y2VyLFxyXG5cdFFSVXBkYXRlOiBRUlVwZGF0ZVJlZHVjZXIsXHJcbn0pO1xyXG5cclxuLy8gKHN0YXRlID0geyB0aWNrOiAnaW5pdCcgfSwgYWN0aW9uKSA9PiB7XHJcbi8vIFx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4vLyBcdFx0Y2FzZSBIWURSQVRFOlxyXG4vLyBcdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuLy8gXHRcdGNhc2UgJ1RJQ0snOlxyXG4vLyBcdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgdGljazogYWN0aW9uLnBheWxvYWQgfTtcclxuLy8gXHRcdGRlZmF1bHQ6XHJcbi8vIFx0XHRcdHJldHVybiBzdGF0ZTtcclxuLy8gXHR9XHJcbi8vIH07XHJcblxyXG5jb25zdCB1c2VySW5mb0Zyb21TdG9yYWdlID0gZ2V0Q29va2llKCd0b2tlbicpXHJcblx0PyBKU09OLnBhcnNlKGdldENvb2tpZSgndG9rZW4nKSlcclxuXHQ6IG51bGw7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0dXNlckxvZ2luOiB7IHRva2VuOiB1c2VySW5mb0Zyb21TdG9yYWdlIH0sXHJcbn07XHJcblxyXG4vLyBjcmVhdGUgYSBtYWtlU3RvcmUgZnVuY3Rpb25cclxuY29uc3QgbWFrZVN0b3JlID0gKGNvbnRleHQpID0+IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4vLyBleHBvcnQgYW4gYXNzZW1ibGVkIHdyYXBwZXJcclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSwgeyBkZWJ1ZzogdHJ1ZSB9KTtcclxuIiwiZXhwb3J0IGNvbnN0IFFSX0xJU1RfUkVRVUVTVCA9ICdRUl9MSVNUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUVJfTElTVF9TVUNDRVNTID0gJ1FSX0xJU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBRUl9MSVNUX0ZBSUwgPSAnUVJfTElTVF9GQUlMJztcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBRUl9ERVRBSUxTX1JFUVVFU1QgPSAnUVJfREVUQUlMU19SRVFVRVNUJztcclxuLy8gZXhwb3J0IGNvbnN0IFFSX0RFVEFJTFNfU1VDQ0VTUyA9ICdRUl9ERVRBSUxTX1NVQ0NFU1MnO1xyXG4vLyBleHBvcnQgY29uc3QgUVJfREVUQUlMU19GQUlMID0gJ1FSX0RFVEFJTFNfRkFJTCc7XHJcblxyXG5leHBvcnQgY29uc3QgUVJfREVMRVRFX1JFUVVFU1QgPSAnUVJfREVMRVRFX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUVJfREVMRVRFX1NVQ0NFU1MgPSAnUVJfREVMRVRFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUVJfREVMRVRFX0ZBSUwgPSAnUVJfREVMRVRFX0ZBSUwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFFSX0NSRUFURV9SRVFVRVNUID0gJ1FSX0NSRUFURV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFFSX0NSRUFURV9TVUNDRVNTID0gJ1FSX0NSRUFURV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFFSX0NSRUFURV9GQUlMID0gJ1FSX0NSRUFURV9GQUlMJztcclxuZXhwb3J0IGNvbnN0IFFSX0NSRUFURV9SRVNFVCA9ICdRUl9DUkVBVEVfUkVTRVQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFFSX1VQREFURV9SRVFVRVNUID0gJ1FSX1VQREFURV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFFSX1VQREFURV9TVUNDRVNTID0gJ1FSX1VQREFURV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFFSX1VQREFURV9GQUlMID0gJ1FSX1VQREFURV9GQUlMJztcclxuZXhwb3J0IGNvbnN0IFFSX1VQREFURV9SRVNFVCA9ICdRUl9VUERBVEVfUkVTRVQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdJVEVfTElTVF9SRVFVRVNUID0gJ0dJVEVfTElTVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEdJVEVfTElTVF9TVUNDRVNTID0gJ0dJVEVfTElTVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEdJVEVfTElTVF9GQUlMID0gJ0dJVEVfTElTVF9GQUlMJztcclxuXHJcbmV4cG9ydCBjb25zdCBHSVRFX0RFVEFJTFNfUkVRVUVTVCA9ICdHSVRFX0RFVEFJTFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBHSVRFX0RFVEFJTFNfU1VDQ0VTUyA9ICdHSVRFX0RFVEFJTFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBHSVRFX0RFVEFJTFNfRkFJTCA9ICdHSVRFX0RFVEFJTFNfRkFJTCc7XHJcblxyXG5leHBvcnQgY29uc3QgR0lURV9ERUxFVEVfUkVRVUVTVCA9ICdHSVRFX0RFTEVURV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEdJVEVfREVMRVRFX1NVQ0NFU1MgPSAnR0lURV9ERUxFVEVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBHSVRFX0RFTEVURV9GQUlMID0gJ0dJVEVfREVMRVRFX0ZBSUwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdJVEVfQ1JFQVRFX1JFUVVFU1QgPSAnR0lURV9DUkVBVEVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBHSVRFX0NSRUFURV9TVUNDRVNTID0gJ0dJVEVfQ1JFQVRFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgR0lURV9DUkVBVEVfRkFJTCA9ICdHSVRFX0NSRUFURV9GQUlMJztcclxuZXhwb3J0IGNvbnN0IEdJVEVfQ1JFQVRFX1JFU0VUID0gJ0dJVEVfQ1JFQVRFX1JFU0VUJztcclxuXHJcbmV4cG9ydCBjb25zdCBHSVRFX1VQREFURV9SRVFVRVNUID0gJ0dJVEVfVVBEQVRFX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgR0lURV9VUERBVEVfU1VDQ0VTUyA9ICdHSVRFX1VQREFURV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEdJVEVfVVBEQVRFX0ZBSUwgPSAnR0lURV9VUERBVEVfRkFJTCc7XHJcbmV4cG9ydCBjb25zdCBHSVRFX1VQREFURV9SRVNFVCA9ICdHSVRFX1VQREFURV9SRVNFVCc7XHJcbiIsImltcG9ydCB7XHJcblx0UVJfTElTVF9SRVFVRVNULFxyXG5cdFFSX0xJU1RfU1VDQ0VTUyxcclxuXHRRUl9MSVNUX0ZBSUwsXHJcblx0Ly8gUVJfREVUQUlMU19SRVFVRVNULFxyXG5cdC8vIFFSX0RFVEFJTFNfU1VDQ0VTUyxcclxuXHQvLyBRUl9ERVRBSUxTX0ZBSUwsXHJcblx0UVJfREVMRVRFX1JFUVVFU1QsXHJcblx0UVJfREVMRVRFX1NVQ0NFU1MsXHJcblx0UVJfREVMRVRFX0ZBSUwsXHJcblx0UVJfQ1JFQVRFX1JFUVVFU1QsXHJcblx0UVJfQ1JFQVRFX1NVQ0NFU1MsXHJcblx0UVJfQ1JFQVRFX0ZBSUwsXHJcblx0UVJfQ1JFQVRFX1JFU0VULFxyXG5cdFFSX1VQREFURV9SRVFVRVNULFxyXG5cdFFSX1VQREFURV9TVUNDRVNTLFxyXG5cdFFSX1VQREFURV9GQUlMLFxyXG5cdFFSX1VQREFURV9SRVNFVCxcclxufSBmcm9tICcuLi9jb25zdGFudHMvZ2l0ZUNvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgUVJMaXN0UmVkdWNlciA9IChzdGF0ZSA9IHsgUVJzOiBbXSB9LCBhY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFFSX0xJU1RfUkVRVUVTVDpcclxuXHRcdFx0cmV0dXJuIHsgbG9hZGluZzogdHJ1ZSwgUVJzOiBbXSB9O1xyXG5cdFx0Y2FzZSBRUl9MSVNUX1NVQ0NFU1M6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0UVJzOiBhY3Rpb24ucGF5bG9hZC5RUnMsXHJcblx0XHRcdFx0Ly8gcGFnZXM6IGFjdGlvbi5wYXlsb2FkLnBhZ2VzLFxyXG5cdFx0XHRcdC8vIHBhZ2U6IGFjdGlvbi5wYXlsb2FkLnBhZ2UsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFFSX0xJU1RfRkFJTDpcclxuXHRcdFx0cmV0dXJuIHsgbG9hZGluZzogZmFsc2UsIGVycm9yOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBRUkRlbGV0ZVJlZHVjZXIgPSAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBRUl9ERUxFVEVfUkVRVUVTVDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRsb2FkaW5nOiB0cnVlLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBRUl9ERUxFVEVfU1VDQ0VTUzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRzdWNjZXNzOiB0cnVlLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBRUl9ERUxFVEVfRkFJTDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRlcnJvcjogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFFSQ3JlYXRlUmVkdWNlciA9IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFFSX0NSRUFURV9SRVFVRVNUOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGxvYWRpbmc6IHRydWUsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFFSX0NSRUFURV9TVUNDRVNTOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IHRydWUsXHJcblx0XHRcdFx0UVI6IGFjdGlvbi5wYXlsb2FkLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBRUl9DUkVBVEVfRkFJTDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRlcnJvcjogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFFSX0NSRUFURV9SRVNFVDpcclxuXHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBRUlVwZGF0ZVJlZHVjZXIgPSAoc3RhdGUgPSB7IFFSOiB7fSB9LCBhY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFFSX1VQREFURV9SRVFVRVNUOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGxvYWRpbmc6IHRydWUsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFFSX1VQREFURV9TVUNDRVNTOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IHRydWUsXHJcblx0XHRcdFx0UVI6IGFjdGlvbi5wYXlsb2FkLFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBRUl9VUERBVEVfRkFJTDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRlcnJvcjogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFFSX1VQREFURV9SRVNFVDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRRUjoge30sXHJcblx0XHRcdH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9