webpackHotUpdate_N_E("pages/_app",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: initializeStore, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/authActions */ "./actions/authActions.js");
/* harmony import */ var _reducers_giteReducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/giteReducers */ "./reducers/giteReducers.js");


var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var store;
var isNode = typeof module !== 'undefined';
var userInfoFromStorage = null;

if (!isNode) {
  userInfoFromStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
}

var userTokenFromCookie = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_4__["getCookie"])('token') ? JSON.parse(Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_4__["getCookie"])('token')) : null;
var initialState = {// userLogin: { token: userTokenFromCookie, user: userInfoFromStorage },
};
var combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  QRList: _reducers_giteReducers__WEBPACK_IMPORTED_MODULE_5__["QRListReducer"],
  QRDelete: _reducers_giteReducers__WEBPACK_IMPORTED_MODULE_5__["QRDeleteReducer"],
  QRCreate: _reducers_giteReducers__WEBPACK_IMPORTED_MODULE_5__["QRCreateReducer"],
  QRUpdate: _reducers_giteReducers__WEBPACK_IMPORTED_MODULE_5__["QRUpdateReducer"]
});

function initStore() {
  var preloadedState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(combinedReducer, preloadedState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])()));
}

var initializeStore = function initializeStore(preloadedState) {
  var _store2;

  var _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store


  if (preloadedState && store) {
    _store = initStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState)); // Reset the current store

    store = undefined;
  } // For SSG and SSR always create a new store


  if (false) {} // Create the store once in the client

  if (!store) store = _store;
  return _store;
};
function useStore(initialState) {
  _s();

  var store = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return initializeStore(initialState);
  }, [initialState]);
  return store;
} // const userInfoFromStorage = localStorage.getItem('user')
// 	? JSON.parse(localStorage.getItem('user'))
// 	: null;

_s(useStore, "K8ucUnUnAgJZGJWAL9Ze8IHCmoQ=");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanMiXSwibmFtZXMiOlsic3RvcmUiLCJpc05vZGUiLCJtb2R1bGUiLCJ1c2VySW5mb0Zyb21TdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInVzZXJUb2tlbkZyb21Db29raWUiLCJnZXRDb29raWUiLCJpbml0aWFsU3RhdGUiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJRUkxpc3QiLCJRUkxpc3RSZWR1Y2VyIiwiUVJEZWxldGUiLCJRUkRlbGV0ZVJlZHVjZXIiLCJRUkNyZWF0ZSIsIlFSQ3JlYXRlUmVkdWNlciIsIlFSVXBkYXRlIiwiUVJVcGRhdGVSZWR1Y2VyIiwiaW5pdFN0b3JlIiwicHJlbG9hZGVkU3RhdGUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJpbml0aWFsaXplU3RvcmUiLCJfc3RvcmUiLCJnZXRTdGF0ZSIsInVuZGVmaW5lZCIsInVzZVN0b3JlIiwidXNlTWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0EsSUFBSUEsS0FBSjtBQUVBLElBQUlDLE1BQU0sR0FBRyxPQUFPQyxNQUFQLEtBQWtCLFdBQS9CO0FBQ0EsSUFBSUMsbUJBQW1CLEdBQUcsSUFBMUI7O0FBQ0EsSUFBSSxDQUFDRixNQUFMLEVBQWE7QUFDWkUscUJBQW1CLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixJQUNuQkMsSUFBSSxDQUFDQyxLQUFMLENBQVdILFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixDQUFYLENBRG1CLEdBRW5CLElBRkg7QUFHQTs7QUFDRCxJQUFNRyxtQkFBbUIsR0FBR0Msc0VBQVMsQ0FBQyxPQUFELENBQVQsR0FDekJILElBQUksQ0FBQ0MsS0FBTCxDQUFXRSxzRUFBUyxDQUFDLE9BQUQsQ0FBcEIsQ0FEeUIsR0FFekIsSUFGSDtBQUlBLElBQU1DLFlBQVksR0FBRyxDQUNwQjtBQURvQixDQUFyQjtBQUlBLElBQU1DLGVBQWUsR0FBR0MsNkRBQWUsQ0FBQztBQUN2Q0MsUUFBTSxFQUFFQyxvRUFEK0I7QUFFdkNDLFVBQVEsRUFBRUMsc0VBRjZCO0FBR3ZDQyxVQUFRLEVBQUVDLHNFQUg2QjtBQUl2Q0MsVUFBUSxFQUFFQyxzRUFBZUE7QUFKYyxDQUFELENBQXZDOztBQU9BLFNBQVNDLFNBQVQsR0FBa0Q7QUFBQSxNQUEvQkMsY0FBK0IsdUVBQWRaLFlBQWM7QUFDakQsU0FBT2EseURBQVcsQ0FDakJaLGVBRGlCLEVBRWpCVyxjQUZpQixFQUdqQkUsb0ZBQW1CLENBQUNDLDZEQUFlLEVBQWhCLENBSEYsQ0FBbEI7QUFLQTs7QUFFTSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNKLGNBQUQsRUFBb0I7QUFBQTs7QUFDbEQsTUFBSUssTUFBTSxjQUFHM0IsS0FBSCw2Q0FBWXFCLFNBQVMsQ0FBQ0MsY0FBRCxDQUEvQixDQURrRCxDQUdsRDtBQUNBOzs7QUFDQSxNQUFJQSxjQUFjLElBQUl0QixLQUF0QixFQUE2QjtBQUM1QjJCLFVBQU0sR0FBR04sU0FBUyxpQ0FDZHJCLEtBQUssQ0FBQzRCLFFBQU4sRUFEYyxHQUVkTixjQUZjLEVBQWxCLENBRDRCLENBSzVCOztBQUNBdEIsU0FBSyxHQUFHNkIsU0FBUjtBQUNBLEdBWmlELENBY2xEOzs7QUFDQSxhQUFtQyxFQWZlLENBZ0JsRDs7QUFDQSxNQUFJLENBQUM3QixLQUFMLEVBQVlBLEtBQUssR0FBRzJCLE1BQVI7QUFFWixTQUFPQSxNQUFQO0FBQ0EsQ0FwQk07QUFzQkEsU0FBU0csUUFBVCxDQUFrQnBCLFlBQWxCLEVBQWdDO0FBQUE7O0FBQ3RDLE1BQU1WLEtBQUssR0FBRytCLHFEQUFPLENBQUM7QUFBQSxXQUFNTCxlQUFlLENBQUNoQixZQUFELENBQXJCO0FBQUEsR0FBRCxFQUFzQyxDQUFDQSxZQUFELENBQXRDLENBQXJCO0FBQ0EsU0FBT1YsS0FBUDtBQUNBLEMsQ0FFRDtBQUNBO0FBQ0E7O0dBUGdCOEIsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmI3N2I0OTcwMGUwMzk1NmY2ODg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQge1xyXG5cdFFSQ3JlYXRlUmVkdWNlcixcclxuXHRRUkRlbGV0ZVJlZHVjZXIsXHJcblx0UVJMaXN0UmVkdWNlcixcclxuXHRRUlVwZGF0ZVJlZHVjZXIsXHJcbn0gZnJvbSAnLi9yZWR1Y2Vycy9naXRlUmVkdWNlcnMnO1xyXG5cclxubGV0IHN0b3JlO1xyXG5cclxudmFyIGlzTm9kZSA9IHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnO1xyXG5sZXQgdXNlckluZm9Gcm9tU3RvcmFnZSA9IG51bGw7XHJcbmlmICghaXNOb2RlKSB7XHJcblx0dXNlckluZm9Gcm9tU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJylcclxuXHRcdD8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxyXG5cdFx0OiBudWxsO1xyXG59XHJcbmNvbnN0IHVzZXJUb2tlbkZyb21Db29raWUgPSBnZXRDb29raWUoJ3Rva2VuJylcclxuXHQ/IEpTT04ucGFyc2UoZ2V0Q29va2llKCd0b2tlbicpKVxyXG5cdDogbnVsbDtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHQvLyB1c2VyTG9naW46IHsgdG9rZW46IHVzZXJUb2tlbkZyb21Db29raWUsIHVzZXI6IHVzZXJJbmZvRnJvbVN0b3JhZ2UgfSxcclxufTtcclxuXHJcbmNvbnN0IGNvbWJpbmVkUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcblx0UVJMaXN0OiBRUkxpc3RSZWR1Y2VyLFxyXG5cdFFSRGVsZXRlOiBRUkRlbGV0ZVJlZHVjZXIsXHJcblx0UVJDcmVhdGU6IFFSQ3JlYXRlUmVkdWNlcixcclxuXHRRUlVwZGF0ZTogUVJVcGRhdGVSZWR1Y2VyLFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZSA9IGluaXRpYWxTdGF0ZSkge1xyXG5cdHJldHVybiBjcmVhdGVTdG9yZShcclxuXHRcdGNvbWJpbmVkUmVkdWNlcixcclxuXHRcdHByZWxvYWRlZFN0YXRlLFxyXG5cdFx0Y29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoKSlcclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZVN0b3JlID0gKHByZWxvYWRlZFN0YXRlKSA9PiB7XHJcblx0bGV0IF9zdG9yZSA9IHN0b3JlID8/IGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZSk7XHJcblxyXG5cdC8vIEFmdGVyIG5hdmlnYXRpbmcgdG8gYSBwYWdlIHdpdGggYW4gaW5pdGlhbCBSZWR1eCBzdGF0ZSwgbWVyZ2UgdGhhdCBzdGF0ZVxyXG5cdC8vIHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgaW4gdGhlIHN0b3JlLCBhbmQgY3JlYXRlIGEgbmV3IHN0b3JlXHJcblx0aWYgKHByZWxvYWRlZFN0YXRlICYmIHN0b3JlKSB7XHJcblx0XHRfc3RvcmUgPSBpbml0U3RvcmUoe1xyXG5cdFx0XHQuLi5zdG9yZS5nZXRTdGF0ZSgpLFxyXG5cdFx0XHQuLi5wcmVsb2FkZWRTdGF0ZSxcclxuXHRcdH0pO1xyXG5cdFx0Ly8gUmVzZXQgdGhlIGN1cnJlbnQgc3RvcmVcclxuXHRcdHN0b3JlID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblx0Ly8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgc3RvcmVcclxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfc3RvcmU7XHJcblx0Ly8gQ3JlYXRlIHRoZSBzdG9yZSBvbmNlIGluIHRoZSBjbGllbnRcclxuXHRpZiAoIXN0b3JlKSBzdG9yZSA9IF9zdG9yZTtcclxuXHJcblx0cmV0dXJuIF9zdG9yZTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VTdG9yZShpbml0aWFsU3RhdGUpIHtcclxuXHRjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKTtcclxuXHRyZXR1cm4gc3RvcmU7XHJcbn1cclxuXHJcbi8vIGNvbnN0IHVzZXJJbmZvRnJvbVN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpXHJcbi8vIFx0PyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpXHJcbi8vIFx0OiBudWxsO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9