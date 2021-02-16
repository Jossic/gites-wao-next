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
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var GiteNom = function GiteNom(_ref) {
  _s2();

  var _s = $RefreshSig$();

  var value = _ref.value;

  var ListerUnGite = function ListerUnGite() {
    _s();

    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
        gite = _useState[0],
        setGite = _useState[1];

    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_2__["listGiteById"])(value).then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        setGite.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(gite).concat([data]));
      }
    });
  };

  _s(ListerUnGite, "wHmquOFH4AN7Y9WoYl+SDF2DbeU=");

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    ListerUnGite();
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, gite && gite.nom);
};

_s2(GiteNom, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HaXRlTm9tLmpzIl0sIm5hbWVzIjpbIkdpdGVOb20iLCJ2YWx1ZSIsIkxpc3RlclVuR2l0ZSIsInVzZVN0YXRlIiwiZ2l0ZSIsInNldEdpdGUiLCJsaXN0R2l0ZUJ5SWQiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIm5vbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWU7QUFBQTs7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQzlCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFBQSxvQkFDRkMsc0RBQVEsQ0FBQyxFQUFELENBRE47QUFBQSxRQUNuQkMsSUFEbUI7QUFBQSxRQUNiQyxPQURhOztBQUcxQkMsNkVBQVksQ0FBQ0wsS0FBRCxDQUFaLENBQW9CTSxJQUFwQixDQUF5QixVQUFDQyxJQUFELEVBQVU7QUFDbEMsVUFBSUEsSUFBSSxDQUFDQyxLQUFULEVBQWdCO0FBQ2ZDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0EsT0FGRCxNQUVPO0FBQ05KLGVBQU8sTUFBUCxzR0FBV0QsSUFBWCxVQUFpQkksSUFBakI7QUFDQTtBQUNELEtBTkQ7QUFPQSxHQVZEOztBQUQ4QixLQUN4Qk4sWUFEd0I7O0FBYTlCVSx5REFBUyxDQUFDLFlBQU07QUFDZlYsZ0JBQVk7QUFDWixHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1FLElBQUksSUFBSUEsSUFBSSxDQUFDUyxHQUFuQixDQUFQO0FBQ0EsQ0FsQkQ7O0lBQU1iLE87O0tBQUFBLE87QUFvQlNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL3Jlc2VydmF0aW9uLjliNzg0OGFlYjk5MjIyZmRlOTYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBsaXN0R2l0ZUJ5SWQgfSBmcm9tICcuLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuXHJcbmNvbnN0IEdpdGVOb20gPSAoeyB2YWx1ZSB9KSA9PiB7XHJcblx0Y29uc3QgTGlzdGVyVW5HaXRlID0gKCkgPT4ge1xyXG5cdFx0Y29uc3QgW2dpdGUsIHNldEdpdGVdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuXHRcdGxpc3RHaXRlQnlJZCh2YWx1ZSkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRHaXRlKC4uLmdpdGUsIGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0TGlzdGVyVW5HaXRlKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gPGRpdj57Z2l0ZSAmJiBnaXRlLm5vbX08L2Rpdj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHaXRlTm9tO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9