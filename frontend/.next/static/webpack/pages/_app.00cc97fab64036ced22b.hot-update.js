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
var initialState = {
  userLogin: {
    token: userTokenFromCookie,
    user: userInfoFromStorage
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanMiXSwibmFtZXMiOlsic3RvcmUiLCJpc05vZGUiLCJtb2R1bGUiLCJ1c2VySW5mb0Zyb21TdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInVzZXJUb2tlbkZyb21Db29raWUiLCJnZXRDb29raWUiLCJpbml0aWFsU3RhdGUiLCJ1c2VyTG9naW4iLCJ0b2tlbiIsInVzZXIiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJRUkxpc3QiLCJRUkxpc3RSZWR1Y2VyIiwiUVJEZWxldGUiLCJRUkRlbGV0ZVJlZHVjZXIiLCJRUkNyZWF0ZSIsIlFSQ3JlYXRlUmVkdWNlciIsIlFSVXBkYXRlIiwiUVJVcGRhdGVSZWR1Y2VyIiwiaW5pdFN0b3JlIiwicHJlbG9hZGVkU3RhdGUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJpbml0aWFsaXplU3RvcmUiLCJfc3RvcmUiLCJnZXRTdGF0ZSIsInVuZGVmaW5lZCIsInVzZVN0b3JlIiwidXNlTWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0EsSUFBSUEsS0FBSjtBQUVBLElBQUlDLE1BQU0sR0FBRyxPQUFPQyxNQUFQLEtBQWtCLFdBQS9CO0FBQ0EsSUFBSUMsbUJBQW1CLEdBQUcsSUFBMUI7O0FBQ0EsSUFBSSxDQUFDRixNQUFMLEVBQWE7QUFDWkUscUJBQW1CLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixJQUNuQkMsSUFBSSxDQUFDQyxLQUFMLENBQVdILFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixDQUFYLENBRG1CLEdBRW5CLElBRkg7QUFHQTs7QUFDRCxJQUFNRyxtQkFBbUIsR0FBR0Msc0VBQVMsQ0FBQyxPQUFELENBQVQsR0FDekJILElBQUksQ0FBQ0MsS0FBTCxDQUFXRSxzRUFBUyxDQUFDLE9BQUQsQ0FBcEIsQ0FEeUIsR0FFekIsSUFGSDtBQUlBLElBQU1DLFlBQVksR0FBRztBQUNwQkMsV0FBUyxFQUFFO0FBQUVDLFNBQUssRUFBRUosbUJBQVQ7QUFBOEJLLFFBQUksRUFBRVY7QUFBcEM7QUFEUyxDQUFyQjtBQUlBLElBQU1XLGVBQWUsR0FBR0MsNkRBQWUsQ0FBQztBQUN2Q0MsUUFBTSxFQUFFQyxvRUFEK0I7QUFFdkNDLFVBQVEsRUFBRUMsc0VBRjZCO0FBR3ZDQyxVQUFRLEVBQUVDLHNFQUg2QjtBQUl2Q0MsVUFBUSxFQUFFQyxzRUFBZUE7QUFKYyxDQUFELENBQXZDOztBQU9BLFNBQVNDLFNBQVQsR0FBa0Q7QUFBQSxNQUEvQkMsY0FBK0IsdUVBQWRmLFlBQWM7QUFDakQsU0FBT2dCLHlEQUFXLENBQ2pCWixlQURpQixFQUVqQlcsY0FGaUIsRUFHakJFLG9GQUFtQixDQUFDQyw2REFBZSxFQUFoQixDQUhGLENBQWxCO0FBS0E7O0FBRU0sSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDSixjQUFELEVBQW9CO0FBQUE7O0FBQ2xELE1BQUlLLE1BQU0sY0FBRzlCLEtBQUgsNkNBQVl3QixTQUFTLENBQUNDLGNBQUQsQ0FBL0IsQ0FEa0QsQ0FHbEQ7QUFDQTs7O0FBQ0EsTUFBSUEsY0FBYyxJQUFJekIsS0FBdEIsRUFBNkI7QUFDNUI4QixVQUFNLEdBQUdOLFNBQVMsaUNBQ2R4QixLQUFLLENBQUMrQixRQUFOLEVBRGMsR0FFZE4sY0FGYyxFQUFsQixDQUQ0QixDQUs1Qjs7QUFDQXpCLFNBQUssR0FBR2dDLFNBQVI7QUFDQSxHQVppRCxDQWNsRDs7O0FBQ0EsYUFBbUMsRUFmZSxDQWdCbEQ7O0FBQ0EsTUFBSSxDQUFDaEMsS0FBTCxFQUFZQSxLQUFLLEdBQUc4QixNQUFSO0FBRVosU0FBT0EsTUFBUDtBQUNBLENBcEJNO0FBc0JBLFNBQVNHLFFBQVQsQ0FBa0J2QixZQUFsQixFQUFnQztBQUFBOztBQUN0QyxNQUFNVixLQUFLLEdBQUdrQyxxREFBTyxDQUFDO0FBQUEsV0FBTUwsZUFBZSxDQUFDbkIsWUFBRCxDQUFyQjtBQUFBLEdBQUQsRUFBc0MsQ0FBQ0EsWUFBRCxDQUF0QyxDQUFyQjtBQUNBLFNBQU9WLEtBQVA7QUFDQSxDLENBRUQ7QUFDQTtBQUNBOztHQVBnQmlDLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wMGNjOTdmYWI2NDAzNmNlZDIyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHtcclxuXHRRUkNyZWF0ZVJlZHVjZXIsXHJcblx0UVJEZWxldGVSZWR1Y2VyLFxyXG5cdFFSTGlzdFJlZHVjZXIsXHJcblx0UVJVcGRhdGVSZWR1Y2VyLFxyXG59IGZyb20gJy4vcmVkdWNlcnMvZ2l0ZVJlZHVjZXJzJztcclxuXHJcbmxldCBzdG9yZTtcclxuXHJcbnZhciBpc05vZGUgPSB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJztcclxubGV0IHVzZXJJbmZvRnJvbVN0b3JhZ2UgPSBudWxsO1xyXG5pZiAoIWlzTm9kZSkge1xyXG5cdHVzZXJJbmZvRnJvbVN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpXHJcblx0XHQ/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSlcclxuXHRcdDogbnVsbDtcclxufVxyXG5jb25zdCB1c2VyVG9rZW5Gcm9tQ29va2llID0gZ2V0Q29va2llKCd0b2tlbicpXHJcblx0PyBKU09OLnBhcnNlKGdldENvb2tpZSgndG9rZW4nKSlcclxuXHQ6IG51bGw7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0dXNlckxvZ2luOiB7IHRva2VuOiB1c2VyVG9rZW5Gcm9tQ29va2llLCB1c2VyOiB1c2VySW5mb0Zyb21TdG9yYWdlIH0sXHJcbn07XHJcblxyXG5jb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG5cdFFSTGlzdDogUVJMaXN0UmVkdWNlcixcclxuXHRRUkRlbGV0ZTogUVJEZWxldGVSZWR1Y2VyLFxyXG5cdFFSQ3JlYXRlOiBRUkNyZWF0ZVJlZHVjZXIsXHJcblx0UVJVcGRhdGU6IFFSVXBkYXRlUmVkdWNlcixcclxufSk7XHJcblxyXG5mdW5jdGlvbiBpbml0U3RvcmUocHJlbG9hZGVkU3RhdGUgPSBpbml0aWFsU3RhdGUpIHtcclxuXHRyZXR1cm4gY3JlYXRlU3RvcmUoXHJcblx0XHRjb21iaW5lZFJlZHVjZXIsXHJcblx0XHRwcmVsb2FkZWRTdGF0ZSxcclxuXHRcdGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKCkpXHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVTdG9yZSA9IChwcmVsb2FkZWRTdGF0ZSkgPT4ge1xyXG5cdGxldCBfc3RvcmUgPSBzdG9yZSA/PyBpbml0U3RvcmUocHJlbG9hZGVkU3RhdGUpO1xyXG5cclxuXHQvLyBBZnRlciBuYXZpZ2F0aW5nIHRvIGEgcGFnZSB3aXRoIGFuIGluaXRpYWwgUmVkdXggc3RhdGUsIG1lcmdlIHRoYXQgc3RhdGVcclxuXHQvLyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGluIHRoZSBzdG9yZSwgYW5kIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG5cdGlmIChwcmVsb2FkZWRTdGF0ZSAmJiBzdG9yZSkge1xyXG5cdFx0X3N0b3JlID0gaW5pdFN0b3JlKHtcclxuXHRcdFx0Li4uc3RvcmUuZ2V0U3RhdGUoKSxcclxuXHRcdFx0Li4ucHJlbG9hZGVkU3RhdGUsXHJcblx0XHR9KTtcclxuXHRcdC8vIFJlc2V0IHRoZSBjdXJyZW50IHN0b3JlXHJcblx0XHRzdG9yZSA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cdC8vIEZvciBTU0cgYW5kIFNTUiBhbHdheXMgY3JlYXRlIGEgbmV3IHN0b3JlXHJcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX3N0b3JlO1xyXG5cdC8vIENyZWF0ZSB0aGUgc3RvcmUgb25jZSBpbiB0aGUgY2xpZW50XHJcblx0aWYgKCFzdG9yZSkgc3RvcmUgPSBfc3RvcmU7XHJcblxyXG5cdHJldHVybiBfc3RvcmU7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XHJcblx0Y29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSk7XHJcblx0cmV0dXJuIHN0b3JlO1xyXG59XHJcblxyXG4vLyBjb25zdCB1c2VySW5mb0Zyb21TdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKVxyXG4vLyBcdD8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxyXG4vLyBcdDogbnVsbDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==