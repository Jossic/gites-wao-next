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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiUVJMaXN0IiwiUVJMaXN0UmVkdWNlciIsIlFSRGVsZXRlIiwiUVJEZWxldGVSZWR1Y2VyIiwiUVJDcmVhdGUiLCJRUkNyZWF0ZVJlZHVjZXIiLCJRUlVwZGF0ZSIsIlFSVXBkYXRlUmVkdWNlciIsImlzTm9kZSIsIm1vZHVsZSIsInVzZXJJbmZvRnJvbVN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwidXNlclRva2VuRnJvbUNvb2tpZSIsImdldENvb2tpZSIsImluaXRpYWxTdGF0ZSIsInVzZXJMb2dpbiIsInRva2VuIiwidXNlciIsIm1ha2VTdG9yZSIsImNvbnRleHQiLCJjcmVhdGVTdG9yZSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FRQTs7QUFDQSxJQUFNQSxPQUFPLEdBQUdDLDZEQUFlLENBQUM7QUFDL0JDLFFBQU0sRUFBRUMsb0VBRHVCO0FBRS9CQyxVQUFRLEVBQUVDLHNFQUZxQjtBQUcvQkMsVUFBUSxFQUFFQyxzRUFIcUI7QUFJL0JDLFVBQVEsRUFBRUMsc0VBQWVBO0FBSk0sQ0FBRCxDQUEvQixDLENBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUMsTUFBTSxHQUFHLE9BQU9DLE1BQVAsS0FBa0IsV0FBL0I7O0FBRUEsSUFBSSxDQUFDRCxNQUFMLEVBQWE7QUFDWixNQUFNRSxvQkFBbUIsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLElBQ3pCQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLENBQVgsQ0FEeUIsR0FFekIsSUFGSDtBQUdBOztBQUNELElBQU1HLG1CQUFtQixHQUFHQyxzRUFBUyxDQUFDLE9BQUQsQ0FBVCxHQUN6QkgsSUFBSSxDQUFDQyxLQUFMLENBQVdFLHNFQUFTLENBQUMsT0FBRCxDQUFwQixDQUR5QixHQUV6QixJQUZIO0FBSUEsSUFBTU4sbUJBQW1CLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixJQUN6QkMsSUFBSSxDQUFDQyxLQUFMLENBQVdILFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixDQUFYLENBRHlCLEdBRXpCLElBRkg7QUFJQSxJQUFNSyxZQUFZLEdBQUc7QUFDcEJDLFdBQVMsRUFBRTtBQUFFQyxTQUFLLEVBQUVKLG1CQUFUO0FBQThCSyxRQUFJLEVBQUVWO0FBQXBDO0FBRFMsQ0FBckIsQyxDQUlBOztBQUNBLElBQU1XLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE9BQUQ7QUFBQSxTQUFhQyx5REFBVyxDQUFDekIsT0FBRCxFQUFVbUIsWUFBVixDQUF4QjtBQUFBLENBQWxCLEMsQ0FFQTs7O0FBQ08sSUFBTU8sT0FBTyxHQUFHQyx3RUFBYSxDQUFDSixTQUFELEVBQVk7QUFBRUssT0FBSyxFQUFFO0FBQVQsQ0FBWixDQUE3QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjY4ZTZiMWIxZjU0YTFlNzk4OWIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyLCBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQge1xyXG5cdFFSQ3JlYXRlUmVkdWNlcixcclxuXHRRUkRlbGV0ZVJlZHVjZXIsXHJcblx0UVJMaXN0UmVkdWNlcixcclxuXHRRUlVwZGF0ZVJlZHVjZXIsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvZ2l0ZVJlZHVjZXJzJztcclxuXHJcbi8vIGNyZWF0ZSB5b3VyIHJlZHVjZXJcclxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcblx0UVJMaXN0OiBRUkxpc3RSZWR1Y2VyLFxyXG5cdFFSRGVsZXRlOiBRUkRlbGV0ZVJlZHVjZXIsXHJcblx0UVJDcmVhdGU6IFFSQ3JlYXRlUmVkdWNlcixcclxuXHRRUlVwZGF0ZTogUVJVcGRhdGVSZWR1Y2VyLFxyXG59KTtcclxuXHJcbi8vIChzdGF0ZSA9IHsgdGljazogJ2luaXQnIH0sIGFjdGlvbikgPT4ge1xyXG4vLyBcdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuLy8gXHRcdGNhc2UgSFlEUkFURTpcclxuLy8gXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbi8vIFx0XHRjYXNlICdUSUNLJzpcclxuLy8gXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHRpY2s6IGFjdGlvbi5wYXlsb2FkIH07XHJcbi8vIFx0XHRkZWZhdWx0OlxyXG4vLyBcdFx0XHRyZXR1cm4gc3RhdGU7XHJcbi8vIFx0fVxyXG4vLyB9O1xyXG52YXIgaXNOb2RlID0gdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCc7XHJcblxyXG5pZiAoIWlzTm9kZSkge1xyXG5cdGNvbnN0IHVzZXJJbmZvRnJvbVN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpXHJcblx0XHQ/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSlcclxuXHRcdDogbnVsbDtcclxufVxyXG5jb25zdCB1c2VyVG9rZW5Gcm9tQ29va2llID0gZ2V0Q29va2llKCd0b2tlbicpXHJcblx0PyBKU09OLnBhcnNlKGdldENvb2tpZSgndG9rZW4nKSlcclxuXHQ6IG51bGw7XHJcblxyXG5jb25zdCB1c2VySW5mb0Zyb21TdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKVxyXG5cdD8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxyXG5cdDogbnVsbDtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHR1c2VyTG9naW46IHsgdG9rZW46IHVzZXJUb2tlbkZyb21Db29raWUsIHVzZXI6IHVzZXJJbmZvRnJvbVN0b3JhZ2UgfSxcclxufTtcclxuXHJcbi8vIGNyZWF0ZSBhIG1ha2VTdG9yZSBmdW5jdGlvblxyXG5jb25zdCBtYWtlU3RvcmUgPSAoY29udGV4dCkgPT4gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbi8vIGV4cG9ydCBhbiBhc3NlbWJsZWQgd3JhcHBlclxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlLCB7IGRlYnVnOiB0cnVlIH0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9