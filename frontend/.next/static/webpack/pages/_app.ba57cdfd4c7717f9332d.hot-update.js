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

var reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
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

var isNode = typeof module !== 'undefined';

if (!isNode) {
  var _userInfoFromStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
}

var userTokenFromCookie = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_2__["getCookie"])('token') ? JSON.parse(Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_2__["getCookie"])('token')) : null; // const userInfoFromStorage = localStorage.getItem('user')
// 	? JSON.parse(localStorage.getItem('user'))
// 	: null;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiUVJMaXN0IiwiUVJMaXN0UmVkdWNlciIsIlFSRGVsZXRlIiwiUVJEZWxldGVSZWR1Y2VyIiwiUVJDcmVhdGUiLCJRUkNyZWF0ZVJlZHVjZXIiLCJRUlVwZGF0ZSIsIlFSVXBkYXRlUmVkdWNlciIsImlzTm9kZSIsIm1vZHVsZSIsInVzZXJJbmZvRnJvbVN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwidXNlclRva2VuRnJvbUNvb2tpZSIsImdldENvb2tpZSIsImluaXRpYWxTdGF0ZSIsInVzZXJMb2dpbiIsInRva2VuIiwidXNlciIsIm1ha2VTdG9yZSIsImNvbnRleHQiLCJjcmVhdGVTdG9yZSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FRQTs7QUFDQSxJQUFNQSxPQUFPLEdBQUdDLDZEQUFlLENBQUM7QUFDL0JDLFFBQU0sRUFBRUMsb0VBRHVCO0FBRS9CQyxVQUFRLEVBQUVDLHNFQUZxQjtBQUcvQkMsVUFBUSxFQUFFQyxzRUFIcUI7QUFJL0JDLFVBQVEsRUFBRUMsc0VBQWVBO0FBSk0sQ0FBRCxDQUEvQixDLENBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUMsTUFBTSxHQUFHLE9BQU9DLE1BQVAsS0FBa0IsV0FBL0I7O0FBRUEsSUFBSSxDQUFDRCxNQUFMLEVBQWE7QUFDWixNQUFNRSxvQkFBbUIsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLElBQ3pCQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLENBQVgsQ0FEeUIsR0FFekIsSUFGSDtBQUdBOztBQUNELElBQU1HLG1CQUFtQixHQUFHQyxzRUFBUyxDQUFDLE9BQUQsQ0FBVCxHQUN6QkgsSUFBSSxDQUFDQyxLQUFMLENBQVdFLHNFQUFTLENBQUMsT0FBRCxDQUFwQixDQUR5QixHQUV6QixJQUZILEMsQ0FJQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsWUFBWSxHQUFHO0FBQ3BCQyxXQUFTLEVBQUU7QUFBRUMsU0FBSyxFQUFFSixtQkFBVDtBQUE4QkssUUFBSSxFQUFFVjtBQUFwQztBQURTLENBQXJCLEMsQ0FJQTs7QUFDQSxJQUFNVyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxPQUFEO0FBQUEsU0FBYUMseURBQVcsQ0FBQ3pCLE9BQUQsRUFBVW1CLFlBQVYsQ0FBeEI7QUFBQSxDQUFsQixDLENBRUE7OztBQUNPLElBQU1PLE9BQU8sR0FBR0Msd0VBQWEsQ0FBQ0osU0FBRCxFQUFZO0FBQUVLLE9BQUssRUFBRTtBQUFULENBQVosQ0FBN0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iYTU3Y2RmZDRjNzcxN2Y5MzMyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciwgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuaW1wb3J0IHtcclxuXHRRUkNyZWF0ZVJlZHVjZXIsXHJcblx0UVJEZWxldGVSZWR1Y2VyLFxyXG5cdFFSTGlzdFJlZHVjZXIsXHJcblx0UVJVcGRhdGVSZWR1Y2VyLFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL2dpdGVSZWR1Y2Vycyc7XHJcblxyXG4vLyBjcmVhdGUgeW91ciByZWR1Y2VyXHJcbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG5cdFFSTGlzdDogUVJMaXN0UmVkdWNlcixcclxuXHRRUkRlbGV0ZTogUVJEZWxldGVSZWR1Y2VyLFxyXG5cdFFSQ3JlYXRlOiBRUkNyZWF0ZVJlZHVjZXIsXHJcblx0UVJVcGRhdGU6IFFSVXBkYXRlUmVkdWNlcixcclxufSk7XHJcblxyXG4vLyAoc3RhdGUgPSB7IHRpY2s6ICdpbml0JyB9LCBhY3Rpb24pID0+IHtcclxuLy8gXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbi8vIFx0XHRjYXNlIEhZRFJBVEU6XHJcbi8vIFx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG4vLyBcdFx0Y2FzZSAnVElDSyc6XHJcbi8vIFx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCB0aWNrOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4vLyBcdFx0ZGVmYXVsdDpcclxuLy8gXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG4vLyBcdH1cclxuLy8gfTtcclxudmFyIGlzTm9kZSA9IHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnO1xyXG5cclxuaWYgKCFpc05vZGUpIHtcclxuXHRjb25zdCB1c2VySW5mb0Zyb21TdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKVxyXG5cdFx0PyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpXHJcblx0XHQ6IG51bGw7XHJcbn1cclxuY29uc3QgdXNlclRva2VuRnJvbUNvb2tpZSA9IGdldENvb2tpZSgndG9rZW4nKVxyXG5cdD8gSlNPTi5wYXJzZShnZXRDb29raWUoJ3Rva2VuJykpXHJcblx0OiBudWxsO1xyXG5cclxuLy8gY29uc3QgdXNlckluZm9Gcm9tU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJylcclxuLy8gXHQ/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSlcclxuLy8gXHQ6IG51bGw7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0dXNlckxvZ2luOiB7IHRva2VuOiB1c2VyVG9rZW5Gcm9tQ29va2llLCB1c2VyOiB1c2VySW5mb0Zyb21TdG9yYWdlIH0sXHJcbn07XHJcblxyXG4vLyBjcmVhdGUgYSBtYWtlU3RvcmUgZnVuY3Rpb25cclxuY29uc3QgbWFrZVN0b3JlID0gKGNvbnRleHQpID0+IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4vLyBleHBvcnQgYW4gYXNzZW1ibGVkIHdyYXBwZXJcclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSwgeyBkZWJ1ZzogdHJ1ZSB9KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==