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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers_giteReducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/giteReducers */ "./reducers/giteReducers.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var bindMiddleware = function bindMiddleware(middleware) {
  if (true) {
    var _require = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js"),
        _composeWithDevTools = _require.composeWithDevTools;

    return _composeWithDevTools(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"].apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(middleware)));
  }

  return redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"].apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(middleware));
};

var combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  QRList: _reducers_giteReducers__WEBPACK_IMPORTED_MODULE_7__["QRListReducer"],
  QRDelete: _reducers_giteReducers__WEBPACK_IMPORTED_MODULE_7__["QRDeleteReducer"],
  QRCreate: _reducers_giteReducers__WEBPACK_IMPORTED_MODULE_7__["QRCreateReducer"],
  QRUpdate: _reducers_giteReducers__WEBPACK_IMPORTED_MODULE_7__["QRUpdateReducer"]
}); // create your reducer

var reducer = function reducer(state, action) {
  console.log('action.type', action.type);

  if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__["HYDRATE"]) {
    var nextState = _objectSpread(_objectSpread({}, state), action.payload); //   if (state.count) nextState.count = state.count // preserve count value on client side navigation


    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

var isNode = typeof module !== 'undefined';
var userInfoFromStorage = null;

if (!isNode) {
  userInfoFromStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
}

var userTokenFromCookie = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_4__["getCookie"])('token') ? JSON.parse(Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_4__["getCookie"])('token')) : null; // const userInfoFromStorage = localStorage.getItem('user')
// 	? JSON.parse(localStorage.getItem('user'))
// 	: null;
// const initialState = {
// 	userLogin: { token: userTokenFromCookie, user: userInfoFromStorage },
// };
// create a makeStore function

var initStore = function initStore() {
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(reducer, bindMiddleware([redux_thunk__WEBPACK_IMPORTED_MODULE_6__["default"]]));
};

var wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__["createWrapper"])(initStore, {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJiaW5kTWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJyZXF1aXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsImNvbWJpbmVkUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsIlFSTGlzdCIsIlFSTGlzdFJlZHVjZXIiLCJRUkRlbGV0ZSIsIlFSRGVsZXRlUmVkdWNlciIsIlFSQ3JlYXRlIiwiUVJDcmVhdGVSZWR1Y2VyIiwiUVJVcGRhdGUiLCJRUlVwZGF0ZVJlZHVjZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwidHlwZSIsIkhZRFJBVEUiLCJuZXh0U3RhdGUiLCJwYXlsb2FkIiwiaXNOb2RlIiwibW9kdWxlIiwidXNlckluZm9Gcm9tU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJ1c2VyVG9rZW5Gcm9tQ29va2llIiwiZ2V0Q29va2llIiwiaW5pdFN0b3JlIiwiY3JlYXRlU3RvcmUiLCJ0aHVua01pZGRsZXdhcmUiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsVUFBRCxFQUFnQjtBQUN0QyxZQUEyQztBQUFBLG1CQUNWQyxtQkFBTyxDQUFDLGtGQUFELENBREc7QUFBQSxRQUNsQ0Msb0JBRGtDLFlBQ2xDQSxtQkFEa0M7O0FBRTFDLFdBQU9BLG9CQUFtQixDQUFDQyxxREFBZSxNQUFmLHNHQUFtQkgsVUFBbkIsRUFBRCxDQUExQjtBQUNBOztBQUNELFNBQU9HLHFEQUFlLE1BQWYsc0dBQW1CSCxVQUFuQixFQUFQO0FBQ0EsQ0FORDs7QUFRQSxJQUFNSSxlQUFlLEdBQUdDLDZEQUFlLENBQUM7QUFDdkNDLFFBQU0sRUFBRUMsb0VBRCtCO0FBRXZDQyxVQUFRLEVBQUVDLHNFQUY2QjtBQUd2Q0MsVUFBUSxFQUFFQyxzRUFINkI7QUFJdkNDLFVBQVEsRUFBRUMsc0VBQWVBO0FBSmMsQ0FBRCxDQUF2QyxDLENBT0E7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ2xDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCRixNQUFNLENBQUNHLElBQWxDOztBQUNBLE1BQUlILE1BQU0sQ0FBQ0csSUFBUCxLQUFnQkMsMERBQXBCLEVBQTZCO0FBQzVCLFFBQU1DLFNBQVMsbUNBQ1hOLEtBRFcsR0FFWEMsTUFBTSxDQUFDTSxPQUZJLENBQWYsQ0FENEIsQ0FLNUI7OztBQUNBLFdBQU9ELFNBQVA7QUFDQSxHQVBELE1BT087QUFDTixXQUFPakIsZUFBZSxDQUFDVyxLQUFELEVBQVFDLE1BQVIsQ0FBdEI7QUFDQTtBQUNELENBWkQ7O0FBY0EsSUFBSU8sTUFBTSxHQUFHLE9BQU9DLE1BQVAsS0FBa0IsV0FBL0I7QUFDQSxJQUFJQyxtQkFBbUIsR0FBRyxJQUExQjs7QUFDQSxJQUFJLENBQUNGLE1BQUwsRUFBYTtBQUNaRSxxQkFBbUIsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLElBQ25CQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLENBQVgsQ0FEbUIsR0FFbkIsSUFGSDtBQUdBOztBQUNELElBQU1HLG1CQUFtQixHQUFHQyxzRUFBUyxDQUFDLE9BQUQsQ0FBVCxHQUN6QkgsSUFBSSxDQUFDQyxLQUFMLENBQVdFLHNFQUFTLENBQUMsT0FBRCxDQUFwQixDQUR5QixHQUV6QixJQUZILEMsQ0FJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3ZCLFNBQU9DLHlEQUFXLENBQUNuQixPQUFELEVBQVVmLGNBQWMsQ0FBQyxDQUFDbUMsbURBQUQsQ0FBRCxDQUF4QixDQUFsQjtBQUNBLENBRkQ7O0FBSU8sSUFBTUMsT0FBTyxHQUFHQyx3RUFBYSxDQUFDSixTQUFELEVBQVk7QUFBRUssT0FBSyxFQUFFO0FBQVQsQ0FBWixDQUE3QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjMzZmE4ZmEyMWU4MmJmYjllNmE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIsIEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQge1xyXG5cdFFSQ3JlYXRlUmVkdWNlcixcclxuXHRRUkRlbGV0ZVJlZHVjZXIsXHJcblx0UVJMaXN0UmVkdWNlcixcclxuXHRRUlVwZGF0ZVJlZHVjZXIsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvZ2l0ZVJlZHVjZXJzJztcclxuXHJcbmNvbnN0IGJpbmRNaWRkbGV3YXJlID0gKG1pZGRsZXdhcmUpID0+IHtcclxuXHRpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG5cdFx0Y29uc3QgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gPSByZXF1aXJlKCdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nKTtcclxuXHRcdHJldHVybiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSk7XHJcblx0fVxyXG5cdHJldHVybiBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSk7XHJcbn07XHJcblxyXG5jb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG5cdFFSTGlzdDogUVJMaXN0UmVkdWNlcixcclxuXHRRUkRlbGV0ZTogUVJEZWxldGVSZWR1Y2VyLFxyXG5cdFFSQ3JlYXRlOiBRUkNyZWF0ZVJlZHVjZXIsXHJcblx0UVJVcGRhdGU6IFFSVXBkYXRlUmVkdWNlcixcclxufSk7XHJcblxyXG4vLyBjcmVhdGUgeW91ciByZWR1Y2VyXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdGNvbnNvbGUubG9nKCdhY3Rpb24udHlwZScsIGFjdGlvbi50eXBlKTtcclxuXHRpZiAoYWN0aW9uLnR5cGUgPT09IEhZRFJBVEUpIHtcclxuXHRcdGNvbnN0IG5leHRTdGF0ZSA9IHtcclxuXHRcdFx0Li4uc3RhdGUsIC8vIHVzZSBwcmV2aW91cyBzdGF0ZVxyXG5cdFx0XHQuLi5hY3Rpb24ucGF5bG9hZCwgLy8gYXBwbHkgZGVsdGEgZnJvbSBoeWRyYXRpb25cclxuXHRcdH07XHJcblx0XHQvLyAgIGlmIChzdGF0ZS5jb3VudCkgbmV4dFN0YXRlLmNvdW50ID0gc3RhdGUuY291bnQgLy8gcHJlc2VydmUgY291bnQgdmFsdWUgb24gY2xpZW50IHNpZGUgbmF2aWdhdGlvblxyXG5cdFx0cmV0dXJuIG5leHRTdGF0ZTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIGNvbWJpbmVkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcclxuXHR9XHJcbn07XHJcblxyXG52YXIgaXNOb2RlID0gdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCc7XHJcbmxldCB1c2VySW5mb0Zyb21TdG9yYWdlID0gbnVsbDtcclxuaWYgKCFpc05vZGUpIHtcclxuXHR1c2VySW5mb0Zyb21TdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKVxyXG5cdFx0PyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpXHJcblx0XHQ6IG51bGw7XHJcbn1cclxuY29uc3QgdXNlclRva2VuRnJvbUNvb2tpZSA9IGdldENvb2tpZSgndG9rZW4nKVxyXG5cdD8gSlNPTi5wYXJzZShnZXRDb29raWUoJ3Rva2VuJykpXHJcblx0OiBudWxsO1xyXG5cclxuLy8gY29uc3QgdXNlckluZm9Gcm9tU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJylcclxuLy8gXHQ/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSlcclxuLy8gXHQ6IG51bGw7XHJcblxyXG4vLyBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbi8vIFx0dXNlckxvZ2luOiB7IHRva2VuOiB1c2VyVG9rZW5Gcm9tQ29va2llLCB1c2VyOiB1c2VySW5mb0Zyb21TdG9yYWdlIH0sXHJcbi8vIH07XHJcblxyXG4vLyBjcmVhdGUgYSBtYWtlU3RvcmUgZnVuY3Rpb25cclxuY29uc3QgaW5pdFN0b3JlID0gKCkgPT4ge1xyXG5cdHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBiaW5kTWlkZGxld2FyZShbdGh1bmtNaWRkbGV3YXJlXSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGluaXRTdG9yZSwgeyBkZWJ1ZzogdHJ1ZSB9KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==