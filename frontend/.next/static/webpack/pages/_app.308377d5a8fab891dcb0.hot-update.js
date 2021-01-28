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

var userTokenFromCookie = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_2__["getCookie"])('token') ? JSON.parse(Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_2__["getCookie"])('token')) : null;
var userInfoFromStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
var initialState = {
  userLogin: {
    token: userTokenFromCookie,
    user: userInfoFromStorage
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiUVJMaXN0IiwiUVJMaXN0UmVkdWNlciIsIlFSRGVsZXRlIiwiUVJEZWxldGVSZWR1Y2VyIiwiUVJDcmVhdGUiLCJRUkNyZWF0ZVJlZHVjZXIiLCJRUlVwZGF0ZSIsIlFSVXBkYXRlUmVkdWNlciIsInVzZXJUb2tlbkZyb21Db29raWUiLCJnZXRDb29raWUiLCJKU09OIiwicGFyc2UiLCJ1c2VySW5mb0Zyb21TdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImluaXRpYWxTdGF0ZSIsInVzZXJMb2dpbiIsInRva2VuIiwidXNlciIsIm1ha2VTdG9yZSIsImNvbnRleHQiLCJjcmVhdGVTdG9yZSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FRQTs7QUFDQSxJQUFNQSxPQUFPLEdBQUdDLGVBQWUsQ0FBQztBQUMvQkMsUUFBTSxFQUFFQyxvRUFEdUI7QUFFL0JDLFVBQVEsRUFBRUMsc0VBRnFCO0FBRy9CQyxVQUFRLEVBQUVDLHNFQUhxQjtBQUkvQkMsVUFBUSxFQUFFQyxzRUFBZUE7QUFKTSxDQUFELENBQS9CLEMsQ0FPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxtQkFBbUIsR0FBR0Msc0VBQVMsQ0FBQyxPQUFELENBQVQsR0FDekJDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixzRUFBUyxDQUFDLE9BQUQsQ0FBcEIsQ0FEeUIsR0FFekIsSUFGSDtBQUlBLElBQU1HLG1CQUFtQixHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsSUFDekJKLElBQUksQ0FBQ0MsS0FBTCxDQUFXRSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBWCxDQUR5QixHQUV6QixJQUZIO0FBSUEsSUFBTUMsWUFBWSxHQUFHO0FBQ3BCQyxXQUFTLEVBQUU7QUFBRUMsU0FBSyxFQUFFVCxtQkFBVDtBQUE4QlUsUUFBSSxFQUFFTjtBQUFwQztBQURTLENBQXJCLEMsQ0FJQTs7QUFDQSxJQUFNTyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxPQUFEO0FBQUEsU0FBYUMseURBQVcsQ0FBQ3ZCLE9BQUQsRUFBVWlCLFlBQVYsQ0FBeEI7QUFBQSxDQUFsQixDLENBRUE7OztBQUNPLElBQU1PLE9BQU8sR0FBR0Msd0VBQWEsQ0FBQ0osU0FBRCxFQUFZO0FBQUVLLE9BQUssRUFBRTtBQUFULENBQVosQ0FBN0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zMDgzNzdkNWE4ZmFiODkxZGNiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIsIEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCB7XHJcblx0UVJDcmVhdGVSZWR1Y2VyLFxyXG5cdFFSRGVsZXRlUmVkdWNlcixcclxuXHRRUkxpc3RSZWR1Y2VyLFxyXG5cdFFSVXBkYXRlUmVkdWNlcixcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9naXRlUmVkdWNlcnMnO1xyXG5cclxuLy8gY3JlYXRlIHlvdXIgcmVkdWNlclxyXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuXHRRUkxpc3Q6IFFSTGlzdFJlZHVjZXIsXHJcblx0UVJEZWxldGU6IFFSRGVsZXRlUmVkdWNlcixcclxuXHRRUkNyZWF0ZTogUVJDcmVhdGVSZWR1Y2VyLFxyXG5cdFFSVXBkYXRlOiBRUlVwZGF0ZVJlZHVjZXIsXHJcbn0pO1xyXG5cclxuLy8gKHN0YXRlID0geyB0aWNrOiAnaW5pdCcgfSwgYWN0aW9uKSA9PiB7XHJcbi8vIFx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4vLyBcdFx0Y2FzZSBIWURSQVRFOlxyXG4vLyBcdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuLy8gXHRcdGNhc2UgJ1RJQ0snOlxyXG4vLyBcdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgdGljazogYWN0aW9uLnBheWxvYWQgfTtcclxuLy8gXHRcdGRlZmF1bHQ6XHJcbi8vIFx0XHRcdHJldHVybiBzdGF0ZTtcclxuLy8gXHR9XHJcbi8vIH07XHJcblxyXG5jb25zdCB1c2VyVG9rZW5Gcm9tQ29va2llID0gZ2V0Q29va2llKCd0b2tlbicpXHJcblx0PyBKU09OLnBhcnNlKGdldENvb2tpZSgndG9rZW4nKSlcclxuXHQ6IG51bGw7XHJcblxyXG5jb25zdCB1c2VySW5mb0Zyb21TdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKVxyXG5cdD8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxyXG5cdDogbnVsbDtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHR1c2VyTG9naW46IHsgdG9rZW46IHVzZXJUb2tlbkZyb21Db29raWUsIHVzZXI6IHVzZXJJbmZvRnJvbVN0b3JhZ2UgfSxcclxufTtcclxuXHJcbi8vIGNyZWF0ZSBhIG1ha2VTdG9yZSBmdW5jdGlvblxyXG5jb25zdCBtYWtlU3RvcmUgPSAoY29udGV4dCkgPT4gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbi8vIGV4cG9ydCBhbiBhc3NlbWJsZWQgd3JhcHBlclxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlLCB7IGRlYnVnOiB0cnVlIH0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9