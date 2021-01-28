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
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_giteReducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/giteReducers */ "./reducers/giteReducers.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  QRList: _reducers_giteReducers__WEBPACK_IMPORTED_MODULE_5__["QRListReducer"],
  QRDelete: _reducers_giteReducers__WEBPACK_IMPORTED_MODULE_5__["QRDeleteReducer"],
  QRCreate: _reducers_giteReducers__WEBPACK_IMPORTED_MODULE_5__["QRCreateReducer"],
  QRUpdate: _reducers_giteReducers__WEBPACK_IMPORTED_MODULE_5__["QRUpdateReducer"]
}); // create your reducer

var reducer = function reducer(state, action) {
  if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["HYDRATE"]) {
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

var userTokenFromCookie = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_3__["getCookie"])('token') ? JSON.parse(Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_3__["getCookie"])('token')) : null; // const userInfoFromStorage = localStorage.getItem('user')
// 	? JSON.parse(localStorage.getItem('user'))
// 	: null;

var initialState = {
  userLogin: {
    token: userTokenFromCookie,
    user: userInfoFromStorage
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJRUkxpc3QiLCJRUkxpc3RSZWR1Y2VyIiwiUVJEZWxldGUiLCJRUkRlbGV0ZVJlZHVjZXIiLCJRUkNyZWF0ZSIsIlFSQ3JlYXRlUmVkdWNlciIsIlFSVXBkYXRlIiwiUVJVcGRhdGVSZWR1Y2VyIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJuZXh0U3RhdGUiLCJwYXlsb2FkIiwiaXNOb2RlIiwibW9kdWxlIiwidXNlckluZm9Gcm9tU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJ1c2VyVG9rZW5Gcm9tQ29va2llIiwiZ2V0Q29va2llIiwiaW5pdGlhbFN0YXRlIiwidXNlckxvZ2luIiwidG9rZW4iLCJ1c2VyIiwibWFrZVN0b3JlIiwiY29udGV4dCIsImNyZWF0ZVN0b3JlIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQSxJQUFNQSxlQUFlLEdBQUdDLDZEQUFlLENBQUM7QUFDdkNDLFFBQU0sRUFBRUMsb0VBRCtCO0FBRXZDQyxVQUFRLEVBQUVDLHNFQUY2QjtBQUd2Q0MsVUFBUSxFQUFFQyxzRUFINkI7QUFJdkNDLFVBQVEsRUFBRUMsc0VBQWVBO0FBSmMsQ0FBRCxDQUF2QyxDLENBT0E7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ2xDLE1BQUlBLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQkMsMERBQXBCLEVBQTZCO0FBQzVCLFFBQU1DLFNBQVMsbUNBQ1hKLEtBRFcsR0FFWEMsTUFBTSxDQUFDSSxPQUZJLENBQWYsQ0FENEIsQ0FLNUI7OztBQUNBLFdBQU9ELFNBQVA7QUFDQSxHQVBELE1BT087QUFDTixXQUFPZixlQUFlLENBQUNXLEtBQUQsRUFBUUMsTUFBUixDQUF0QjtBQUNBO0FBQ0QsQ0FYRDs7QUFhQSxJQUFJSyxNQUFNLEdBQUcsT0FBT0MsTUFBUCxLQUFrQixXQUEvQjtBQUNBLElBQUlDLG1CQUFtQixHQUFHLElBQTFCOztBQUNBLElBQUksQ0FBQ0YsTUFBTCxFQUFhO0FBQ1pFLHFCQUFtQixHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsSUFDbkJDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBWCxDQURtQixHQUVuQixJQUZIO0FBR0E7O0FBQ0QsSUFBTUcsbUJBQW1CLEdBQUdDLHNFQUFTLENBQUMsT0FBRCxDQUFULEdBQ3pCSCxJQUFJLENBQUNDLEtBQUwsQ0FBV0Usc0VBQVMsQ0FBQyxPQUFELENBQXBCLENBRHlCLEdBRXpCLElBRkgsQyxDQUlBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxZQUFZLEdBQUc7QUFDcEJDLFdBQVMsRUFBRTtBQUFFQyxTQUFLLEVBQUVKLG1CQUFUO0FBQThCSyxRQUFJLEVBQUVWO0FBQXBDO0FBRFMsQ0FBckIsQyxDQUlBOztBQUNBLElBQU1XLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE9BQUQ7QUFBQSxTQUFhQyx5REFBVyxDQUFDdEIsT0FBRCxDQUF4QjtBQUFBLENBQWxCLEMsQ0FFQTs7O0FBQ08sSUFBTXVCLE9BQU8sR0FBR0Msd0VBQWEsQ0FBQ0osU0FBRCxFQUFZO0FBQUVLLE9BQUssRUFBRTtBQUFULENBQVosQ0FBN0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yZjhmYjMyODU2MGRjNzBjM2M1Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciwgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuaW1wb3J0IHtcclxuXHRRUkNyZWF0ZVJlZHVjZXIsXHJcblx0UVJEZWxldGVSZWR1Y2VyLFxyXG5cdFFSTGlzdFJlZHVjZXIsXHJcblx0UVJVcGRhdGVSZWR1Y2VyLFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL2dpdGVSZWR1Y2Vycyc7XHJcblxyXG5jb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG5cdFFSTGlzdDogUVJMaXN0UmVkdWNlcixcclxuXHRRUkRlbGV0ZTogUVJEZWxldGVSZWR1Y2VyLFxyXG5cdFFSQ3JlYXRlOiBRUkNyZWF0ZVJlZHVjZXIsXHJcblx0UVJVcGRhdGU6IFFSVXBkYXRlUmVkdWNlcixcclxufSk7XHJcblxyXG4vLyBjcmVhdGUgeW91ciByZWR1Y2VyXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdGlmIChhY3Rpb24udHlwZSA9PT0gSFlEUkFURSkge1xyXG5cdFx0Y29uc3QgbmV4dFN0YXRlID0ge1xyXG5cdFx0XHQuLi5zdGF0ZSwgLy8gdXNlIHByZXZpb3VzIHN0YXRlXHJcblx0XHRcdC4uLmFjdGlvbi5wYXlsb2FkLCAvLyBhcHBseSBkZWx0YSBmcm9tIGh5ZHJhdGlvblxyXG5cdFx0fTtcclxuXHRcdC8vICAgaWYgKHN0YXRlLmNvdW50KSBuZXh0U3RhdGUuY291bnQgPSBzdGF0ZS5jb3VudCAvLyBwcmVzZXJ2ZSBjb3VudCB2YWx1ZSBvbiBjbGllbnQgc2lkZSBuYXZpZ2F0aW9uXHJcblx0XHRyZXR1cm4gbmV4dFN0YXRlO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gY29tYmluZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG5cdH1cclxufTtcclxuXHJcbnZhciBpc05vZGUgPSB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJztcclxubGV0IHVzZXJJbmZvRnJvbVN0b3JhZ2UgPSBudWxsO1xyXG5pZiAoIWlzTm9kZSkge1xyXG5cdHVzZXJJbmZvRnJvbVN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpXHJcblx0XHQ/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSlcclxuXHRcdDogbnVsbDtcclxufVxyXG5jb25zdCB1c2VyVG9rZW5Gcm9tQ29va2llID0gZ2V0Q29va2llKCd0b2tlbicpXHJcblx0PyBKU09OLnBhcnNlKGdldENvb2tpZSgndG9rZW4nKSlcclxuXHQ6IG51bGw7XHJcblxyXG4vLyBjb25zdCB1c2VySW5mb0Zyb21TdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKVxyXG4vLyBcdD8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxyXG4vLyBcdDogbnVsbDtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHR1c2VyTG9naW46IHsgdG9rZW46IHVzZXJUb2tlbkZyb21Db29raWUsIHVzZXI6IHVzZXJJbmZvRnJvbVN0b3JhZ2UgfSxcclxufTtcclxuXHJcbi8vIGNyZWF0ZSBhIG1ha2VTdG9yZSBmdW5jdGlvblxyXG5jb25zdCBtYWtlU3RvcmUgPSAoY29udGV4dCkgPT4gY3JlYXRlU3RvcmUocmVkdWNlcik7XHJcblxyXG4vLyBleHBvcnQgYW4gYXNzZW1ibGVkIHdyYXBwZXJcclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSwgeyBkZWJ1ZzogdHJ1ZSB9KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==