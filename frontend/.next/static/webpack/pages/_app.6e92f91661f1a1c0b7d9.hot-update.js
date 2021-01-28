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





 // create your reducer

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    tick: 'init'
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), action.payload);

    case 'TICK':
      return _objectSpread(_objectSpread({}, state), {}, {
        tick: action.payload
      });

    default:
      return state;
  }
}; // combineReducers({
// 	QRList: QRListReducer,
// 	QRDelete: QRDeleteReducer,
// 	QRCreate: QRCreateReducer,
// 	QRUpdate: QRUpdateReducer,
// });


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwic3RhdGUiLCJ0aWNrIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJwYXlsb2FkIiwiaXNOb2RlIiwibW9kdWxlIiwidXNlckluZm9Gcm9tU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJ1c2VyVG9rZW5Gcm9tQ29va2llIiwiZ2V0Q29va2llIiwiaW5pdGlhbFN0YXRlIiwidXNlckxvZ2luIiwidG9rZW4iLCJ1c2VyIiwibWFrZVN0b3JlIiwiY29udGV4dCIsImNyZWF0ZVN0b3JlIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBUUE7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBc0M7QUFBQSxNQUFyQ0MsS0FBcUMsdUVBQTdCO0FBQUVDLFFBQUksRUFBRTtBQUFSLEdBQTZCO0FBQUEsTUFBWEMsTUFBVzs7QUFDckQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0MsU0FBS0MsMERBQUw7QUFDQyw2Q0FBWUosS0FBWixHQUFzQkUsTUFBTSxDQUFDRyxPQUE3Qjs7QUFDRCxTQUFLLE1BQUw7QUFDQyw2Q0FBWUwsS0FBWjtBQUFtQkMsWUFBSSxFQUFFQyxNQUFNLENBQUNHO0FBQWhDOztBQUNEO0FBQ0MsYUFBT0wsS0FBUDtBQU5GO0FBUUEsQ0FURCxDLENBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFJTSxNQUFNLEdBQUcsT0FBT0MsTUFBUCxLQUFrQixXQUEvQjtBQUNBLElBQUlDLG1CQUFtQixHQUFHLElBQTFCOztBQUNBLElBQUksQ0FBQ0YsTUFBTCxFQUFhO0FBQ1pFLHFCQUFtQixHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsSUFDbkJDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBWCxDQURtQixHQUVuQixJQUZIO0FBR0E7O0FBQ0QsSUFBTUcsbUJBQW1CLEdBQUdDLHNFQUFTLENBQUMsT0FBRCxDQUFULEdBQ3pCSCxJQUFJLENBQUNDLEtBQUwsQ0FBV0Usc0VBQVMsQ0FBQyxPQUFELENBQXBCLENBRHlCLEdBRXpCLElBRkgsQyxDQUlBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxZQUFZLEdBQUc7QUFDcEJDLFdBQVMsRUFBRTtBQUFFQyxTQUFLLEVBQUVKLG1CQUFUO0FBQThCSyxRQUFJLEVBQUVWO0FBQXBDO0FBRFMsQ0FBckIsQyxDQUlBOztBQUNBLElBQU1XLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE9BQUQ7QUFBQSxTQUFhQyx5REFBVyxDQUFDdEIsT0FBRCxDQUF4QjtBQUFBLENBQWxCLEMsQ0FFQTs7O0FBQ08sSUFBTXVCLE9BQU8sR0FBR0Msd0VBQWEsQ0FBQ0osU0FBRCxFQUFZO0FBQUVLLE9BQUssRUFBRTtBQUFULENBQVosQ0FBN0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42ZTkyZjkxNjYxZjFhMWMwYjdkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciwgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuaW1wb3J0IHtcclxuXHRRUkNyZWF0ZVJlZHVjZXIsXHJcblx0UVJEZWxldGVSZWR1Y2VyLFxyXG5cdFFSTGlzdFJlZHVjZXIsXHJcblx0UVJVcGRhdGVSZWR1Y2VyLFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL2dpdGVSZWR1Y2Vycyc7XHJcblxyXG4vLyBjcmVhdGUgeW91ciByZWR1Y2VyXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSB7IHRpY2s6ICdpbml0JyB9LCBhY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEhZRFJBVEU6XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG5cdFx0Y2FzZSAnVElDSyc6XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCB0aWNrOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufTtcclxuXHJcbi8vIGNvbWJpbmVSZWR1Y2Vycyh7XHJcbi8vIFx0UVJMaXN0OiBRUkxpc3RSZWR1Y2VyLFxyXG4vLyBcdFFSRGVsZXRlOiBRUkRlbGV0ZVJlZHVjZXIsXHJcbi8vIFx0UVJDcmVhdGU6IFFSQ3JlYXRlUmVkdWNlcixcclxuLy8gXHRRUlVwZGF0ZTogUVJVcGRhdGVSZWR1Y2VyLFxyXG4vLyB9KTtcclxuXHJcbnZhciBpc05vZGUgPSB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJztcclxubGV0IHVzZXJJbmZvRnJvbVN0b3JhZ2UgPSBudWxsO1xyXG5pZiAoIWlzTm9kZSkge1xyXG5cdHVzZXJJbmZvRnJvbVN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpXHJcblx0XHQ/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSlcclxuXHRcdDogbnVsbDtcclxufVxyXG5jb25zdCB1c2VyVG9rZW5Gcm9tQ29va2llID0gZ2V0Q29va2llKCd0b2tlbicpXHJcblx0PyBKU09OLnBhcnNlKGdldENvb2tpZSgndG9rZW4nKSlcclxuXHQ6IG51bGw7XHJcblxyXG4vLyBjb25zdCB1c2VySW5mb0Zyb21TdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKVxyXG4vLyBcdD8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxyXG4vLyBcdDogbnVsbDtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHR1c2VyTG9naW46IHsgdG9rZW46IHVzZXJUb2tlbkZyb21Db29raWUsIHVzZXI6IHVzZXJJbmZvRnJvbVN0b3JhZ2UgfSxcclxufTtcclxuXHJcbi8vIGNyZWF0ZSBhIG1ha2VTdG9yZSBmdW5jdGlvblxyXG5jb25zdCBtYWtlU3RvcmUgPSAoY29udGV4dCkgPT4gY3JlYXRlU3RvcmUocmVkdWNlcik7XHJcblxyXG4vLyBleHBvcnQgYW4gYXNzZW1ibGVkIHdyYXBwZXJcclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSwgeyBkZWJ1ZzogdHJ1ZSB9KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==