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


 // create your reducer

var reducer = combineReducers({
  QRList: QRListReducer,
  QRDelete: QRDeleteReducer,
  QRCreate: QRCreateReducer,
  QRUpdate: QRUpdateReducer
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiUVJMaXN0IiwiUVJMaXN0UmVkdWNlciIsIlFSRGVsZXRlIiwiUVJEZWxldGVSZWR1Y2VyIiwiUVJDcmVhdGUiLCJRUkNyZWF0ZVJlZHVjZXIiLCJRUlVwZGF0ZSIsIlFSVXBkYXRlUmVkdWNlciIsInVzZXJJbmZvRnJvbVN0b3JhZ2UiLCJnZXRDb29raWUiLCJKU09OIiwicGFyc2UiLCJpbml0aWFsU3RhdGUiLCJ1c2VyTG9naW4iLCJ0b2tlbiIsIm1ha2VTdG9yZSIsImNvbnRleHQiLCJjcmVhdGVTdG9yZSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtDQUdBOztBQUNBLElBQU1BLE9BQU8sR0FBR0MsZUFBZSxDQUFDO0FBQy9CQyxRQUFNLEVBQUVDLGFBRHVCO0FBRS9CQyxVQUFRLEVBQUVDLGVBRnFCO0FBRy9CQyxVQUFRLEVBQUVDLGVBSHFCO0FBSS9CQyxVQUFRLEVBQUVDO0FBSnFCLENBQUQsQ0FBL0IsQyxDQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1DLG1CQUFtQixHQUFHQyxzRUFBUyxDQUFDLE9BQUQsQ0FBVCxHQUN6QkMsSUFBSSxDQUFDQyxLQUFMLENBQVdGLHNFQUFTLENBQUMsT0FBRCxDQUFwQixDQUR5QixHQUV6QixJQUZIO0FBSUEsSUFBTUcsWUFBWSxHQUFHO0FBQ3BCQyxXQUFTLEVBQUU7QUFBRUMsU0FBSyxFQUFFTjtBQUFUO0FBRFMsQ0FBckIsQyxDQUlBOztBQUNBLElBQU1PLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE9BQUQ7QUFBQSxTQUFhQyx5REFBVyxDQUFDbkIsT0FBRCxFQUFVYyxZQUFWLENBQXhCO0FBQUEsQ0FBbEIsQyxDQUVBOzs7QUFDTyxJQUFNTSxPQUFPLEdBQUdDLHdFQUFhLENBQUNKLFNBQUQsRUFBWTtBQUFFSyxPQUFLLEVBQUU7QUFBVCxDQUFaLENBQTdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMGVjZTZmZDU1Y2RjYzZlODQxOTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyLCBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcblxyXG4vLyBjcmVhdGUgeW91ciByZWR1Y2VyXHJcbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG5cdFFSTGlzdDogUVJMaXN0UmVkdWNlcixcclxuXHRRUkRlbGV0ZTogUVJEZWxldGVSZWR1Y2VyLFxyXG5cdFFSQ3JlYXRlOiBRUkNyZWF0ZVJlZHVjZXIsXHJcblx0UVJVcGRhdGU6IFFSVXBkYXRlUmVkdWNlcixcclxufSk7XHJcblxyXG4vLyAoc3RhdGUgPSB7IHRpY2s6ICdpbml0JyB9LCBhY3Rpb24pID0+IHtcclxuLy8gXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbi8vIFx0XHRjYXNlIEhZRFJBVEU6XHJcbi8vIFx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG4vLyBcdFx0Y2FzZSAnVElDSyc6XHJcbi8vIFx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCB0aWNrOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4vLyBcdFx0ZGVmYXVsdDpcclxuLy8gXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG4vLyBcdH1cclxuLy8gfTtcclxuXHJcbmNvbnN0IHVzZXJJbmZvRnJvbVN0b3JhZ2UgPSBnZXRDb29raWUoJ3Rva2VuJylcclxuXHQ/IEpTT04ucGFyc2UoZ2V0Q29va2llKCd0b2tlbicpKVxyXG5cdDogbnVsbDtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHR1c2VyTG9naW46IHsgdG9rZW46IHVzZXJJbmZvRnJvbVN0b3JhZ2UgfSxcclxufTtcclxuXHJcbi8vIGNyZWF0ZSBhIG1ha2VTdG9yZSBmdW5jdGlvblxyXG5jb25zdCBtYWtlU3RvcmUgPSAoY29udGV4dCkgPT4gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbi8vIGV4cG9ydCBhbiBhc3NlbWJsZWQgd3JhcHBlclxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlLCB7IGRlYnVnOiB0cnVlIH0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9