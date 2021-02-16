webpackHotUpdate_N_E("pages/admin/reservation",{

/***/ "./components/GiteNom.js":
/*!*******************************!*\
  !*** ./components/GiteNom.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/giteActions */ "./actions/giteActions.js");


var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\GiteNom.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var GiteNom = function GiteNom(_ref) {
  _s();

  var value = _ref.value;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      gite = _useState[0],
      setGite = _useState[1];

  var ListerUnGite = function ListerUnGite() {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_2__["listGiteById"])(value).then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        setGite.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(gite).concat([data]));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    ListerUnGite();
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, gite && gite.nom);
};

_s(GiteNom, "DHiuFCDFuUJFW4NFkc/ccCrjXIU=");

_c = GiteNom;
/* harmony default export */ __webpack_exports__["default"] = (GiteNom);

var _c;

$RefreshReg$(_c, "GiteNom");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HaXRlTm9tLmpzIl0sIm5hbWVzIjpbIkdpdGVOb20iLCJ2YWx1ZSIsInVzZVN0YXRlIiwiZ2l0ZSIsInNldEdpdGUiLCJMaXN0ZXJVbkdpdGUiLCJsaXN0R2l0ZUJ5SWQiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIm5vbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQUEsa0JBQ05DLHNEQUFRLENBQUMsRUFBRCxDQURGO0FBQUEsTUFDdkJDLElBRHVCO0FBQUEsTUFDakJDLE9BRGlCOztBQUU5QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQzFCQyw2RUFBWSxDQUFDTCxLQUFELENBQVosQ0FBb0JNLElBQXBCLENBQXlCLFVBQUNDLElBQUQsRUFBVTtBQUNsQyxVQUFJQSxJQUFJLENBQUNDLEtBQVQsRUFBZ0I7QUFDZkMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQSxPQUZELE1BRU87QUFDTkwsZUFBTyxNQUFQLHNHQUFXRCxJQUFYLFVBQWlCSyxJQUFqQjtBQUNBO0FBQ0QsS0FORDtBQU9BLEdBUkQ7O0FBVUFJLHlEQUFTLENBQUMsWUFBTTtBQUNmUCxnQkFBWTtBQUNaLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTUYsSUFBSSxJQUFJQSxJQUFJLENBQUNVLEdBQW5CLENBQVA7QUFDQSxDQWpCRDs7R0FBTWIsTzs7S0FBQUEsTztBQW1CU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24uM2Q1NTRhZjJhNjIwNGNhOGFiMTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGxpc3RHaXRlQnlJZCB9IGZyb20gJy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5cclxuY29uc3QgR2l0ZU5vbSA9ICh7IHZhbHVlIH0pID0+IHtcclxuXHRjb25zdCBbZ2l0ZSwgc2V0R2l0ZV0gPSB1c2VTdGF0ZSh7fSk7XHJcblx0Y29uc3QgTGlzdGVyVW5HaXRlID0gKCkgPT4ge1xyXG5cdFx0bGlzdEdpdGVCeUlkKHZhbHVlKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldEdpdGUoLi4uZ2l0ZSwgZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRMaXN0ZXJVbkdpdGUoKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiA8ZGl2PntnaXRlICYmIGdpdGUubm9tfTwvZGl2PjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdpdGVOb207XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=