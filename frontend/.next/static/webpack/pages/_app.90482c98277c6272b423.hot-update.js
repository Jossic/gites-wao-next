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
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_giteReducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/giteReducers */ "./reducers/giteReducers.js");




 // create your reducer

var reducer = combineReducers({
  QRList: _reducers_giteReducers__WEBPACK_IMPORTED_MODULE_4__["QRListReducer"],
  QRDelete: _reducers_giteReducers__WEBPACK_IMPORTED_MODULE_4__["QRDeleteReducer"],
  QRCreate: _reducers_giteReducers__WEBPACK_IMPORTED_MODULE_4__["QRCreateReducer"],
  QRUpdate: _reducers_giteReducers__WEBPACK_IMPORTED_MODULE_4__["QRUpdateReducer"]
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

/***/ "./node_modules/redux-devtools-extension/index.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-devtools-extension/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compose = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js").compose;

exports.__esModule = true;
exports.composeWithDevTools = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    function() {
      if (arguments.length === 0) return undefined;
      if (typeof arguments[0] === 'object') return compose;
      return compose.apply(null, arguments);
    }
);

exports.devToolsEnhancer = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__ :
    function() { return function(noop) { return noop; } }
);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdG9yZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiUVJMaXN0IiwiUVJMaXN0UmVkdWNlciIsIlFSRGVsZXRlIiwiUVJEZWxldGVSZWR1Y2VyIiwiUVJDcmVhdGUiLCJRUkNyZWF0ZVJlZHVjZXIiLCJRUlVwZGF0ZSIsIlFSVXBkYXRlUmVkdWNlciIsInVzZXJJbmZvRnJvbVN0b3JhZ2UiLCJnZXRDb29raWUiLCJKU09OIiwicGFyc2UiLCJpbml0aWFsU3RhdGUiLCJ1c2VyTG9naW4iLCJ0b2tlbiIsIm1ha2VTdG9yZSIsImNvbnRleHQiLCJjcmVhdGVTdG9yZSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FRQTs7QUFDQSxJQUFNQSxPQUFPLEdBQUdDLGVBQWUsQ0FBQztBQUMvQkMsUUFBTSxFQUFFQyxvRUFEdUI7QUFFL0JDLFVBQVEsRUFBRUMsc0VBRnFCO0FBRy9CQyxVQUFRLEVBQUVDLHNFQUhxQjtBQUkvQkMsVUFBUSxFQUFFQyxzRUFBZUE7QUFKTSxDQUFELENBQS9CLEMsQ0FPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxtQkFBbUIsR0FBR0Msc0VBQVMsQ0FBQyxPQUFELENBQVQsR0FDekJDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixzRUFBUyxDQUFDLE9BQUQsQ0FBcEIsQ0FEeUIsR0FFekIsSUFGSDtBQUlBLElBQU1HLFlBQVksR0FBRztBQUNwQkMsV0FBUyxFQUFFO0FBQUVDLFNBQUssRUFBRU47QUFBVDtBQURTLENBQXJCLEMsQ0FJQTs7QUFDQSxJQUFNTyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxPQUFEO0FBQUEsU0FBYUMseURBQVcsQ0FBQ25CLE9BQUQsRUFBVWMsWUFBVixDQUF4QjtBQUFBLENBQWxCLEMsQ0FFQTs7O0FBQ08sSUFBTU0sT0FBTyxHQUFHQyx3RUFBYSxDQUFDSixTQUFELEVBQVk7QUFBRUssT0FBSyxFQUFFO0FBQVQsQ0FBWixDQUE3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNNOztBQUViLGNBQWMsbUJBQU8sQ0FBQywrQ0FBTzs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHdCQUF3QixhQUFhLEVBQUU7QUFDdkQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45MDQ4MmM5ODI3N2M2MjcyYjQyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIsIEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCB7XHJcblx0UVJDcmVhdGVSZWR1Y2VyLFxyXG5cdFFSRGVsZXRlUmVkdWNlcixcclxuXHRRUkxpc3RSZWR1Y2VyLFxyXG5cdFFSVXBkYXRlUmVkdWNlcixcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9naXRlUmVkdWNlcnMnO1xyXG5cclxuLy8gY3JlYXRlIHlvdXIgcmVkdWNlclxyXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuXHRRUkxpc3Q6IFFSTGlzdFJlZHVjZXIsXHJcblx0UVJEZWxldGU6IFFSRGVsZXRlUmVkdWNlcixcclxuXHRRUkNyZWF0ZTogUVJDcmVhdGVSZWR1Y2VyLFxyXG5cdFFSVXBkYXRlOiBRUlVwZGF0ZVJlZHVjZXIsXHJcbn0pO1xyXG5cclxuLy8gKHN0YXRlID0geyB0aWNrOiAnaW5pdCcgfSwgYWN0aW9uKSA9PiB7XHJcbi8vIFx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4vLyBcdFx0Y2FzZSBIWURSQVRFOlxyXG4vLyBcdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuLy8gXHRcdGNhc2UgJ1RJQ0snOlxyXG4vLyBcdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgdGljazogYWN0aW9uLnBheWxvYWQgfTtcclxuLy8gXHRcdGRlZmF1bHQ6XHJcbi8vIFx0XHRcdHJldHVybiBzdGF0ZTtcclxuLy8gXHR9XHJcbi8vIH07XHJcblxyXG5jb25zdCB1c2VySW5mb0Zyb21TdG9yYWdlID0gZ2V0Q29va2llKCd0b2tlbicpXHJcblx0PyBKU09OLnBhcnNlKGdldENvb2tpZSgndG9rZW4nKSlcclxuXHQ6IG51bGw7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0dXNlckxvZ2luOiB7IHRva2VuOiB1c2VySW5mb0Zyb21TdG9yYWdlIH0sXHJcbn07XHJcblxyXG4vLyBjcmVhdGUgYSBtYWtlU3RvcmUgZnVuY3Rpb25cclxuY29uc3QgbWFrZVN0b3JlID0gKGNvbnRleHQpID0+IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4vLyBleHBvcnQgYW4gYXNzZW1ibGVkIHdyYXBwZXJcclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSwgeyBkZWJ1ZzogdHJ1ZSB9KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjb21wb3NlID0gcmVxdWlyZSgncmVkdXgnKS5jb21wb3NlO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jb21wb3NlV2l0aERldlRvb2xzID0gKFxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fID9cbiAgICB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIDpcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdvYmplY3QnKSByZXR1cm4gY29tcG9zZTtcbiAgICAgIHJldHVybiBjb21wb3NlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuKTtcblxuZXhwb3J0cy5kZXZUb29sc0VuaGFuY2VyID0gKFxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyA/XG4gICAgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gOlxuICAgIGZ1bmN0aW9uKCkgeyByZXR1cm4gZnVuY3Rpb24obm9vcCkgeyByZXR1cm4gbm9vcDsgfSB9XG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==