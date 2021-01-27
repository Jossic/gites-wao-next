webpackHotUpdate_N_E("pages/reservation",{

/***/ "./components/reservation/ReservationForm.js":
/*!***************************************************!*\
  !*** ./components/reservation/ReservationForm.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Step1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Step1 */ "./components/reservation/Step1.js");
/* harmony import */ var _Step2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Step2 */ "./components/reservation/Step2.js");
/* harmony import */ var _Step3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Step3 */ "./components/reservation/Step3.js");
/* harmony import */ var _Recap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Recap */ "./components/reservation/Recap.js");



var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\reservation\\ReservationForm.js",
    _this = undefined,
    _s = $RefreshSig$();









var ReservationForm = function ReservationForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      gites = _useState[0],
      setGites = _useState[1];

  var listDesGites = function listDesGites() {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_2__["listGitesNoms"])().then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        setGites.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(gites).concat([data]));
      }
    });
  };

  var ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createRef();

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('Step 3'),
      components = _useState2[0],
      setComponents = _useState2[1];

  var handlePrec = function handlePrec(comp) {};

  var handleSuiv = function handleSuiv(comp) {};

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    listDesGites();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      children: [components === 'Step 1' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Step1__WEBPACK_IMPORTED_MODULE_4__["default"], {
        ref: ref,
        gites: gites,
        suivant: handleSuiv('Step 2')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 6
      }, _this), components === 'Step 2' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Step2__WEBPACK_IMPORTED_MODULE_5__["default"], {
        ref: ref,
        precedent: handlePrec('Step 1'),
        suivant: handleSuiv('Step 3')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 6
      }, _this), components === 'Step 3' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Step3__WEBPACK_IMPORTED_MODULE_6__["default"], {
        ref: ref,
        precedent: handlePrec('Step 2'),
        suivant: handleSuiv('Recap')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 6
      }, _this), components === 'Recap' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Recap__WEBPACK_IMPORTED_MODULE_7__["default"], {
        ref: ref,
        precedent: handlePrec('Step 3')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 6
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 3
  }, _this);
};

_s(ReservationForm, "AqBAjfBhY6+6T5pgO4tb+oUJuzE=");

_c = ReservationForm;
/* harmony default export */ __webpack_exports__["default"] = (ReservationForm);

var _c;

$RefreshReg$(_c, "ReservationForm");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXNlcnZhdGlvbi9SZXNlcnZhdGlvbkZvcm0uanMiXSwibmFtZXMiOlsiUmVzZXJ2YXRpb25Gb3JtIiwidXNlU3RhdGUiLCJnaXRlcyIsInNldEdpdGVzIiwibGlzdERlc0dpdGVzIiwibGlzdEdpdGVzTm9tcyIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJjb21wb25lbnRzIiwic2V0Q29tcG9uZW50cyIsImhhbmRsZVByZWMiLCJjb21wIiwiaGFuZGxlU3VpdiIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLEVBQUQsQ0FETDtBQUFBLE1BQ3RCQyxLQURzQjtBQUFBLE1BQ2ZDLFFBRGU7O0FBRzdCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDMUJDLDhFQUFhLEdBQUdDLElBQWhCLENBQXFCLFVBQUNDLElBQUQsRUFBVTtBQUM5QixVQUFJQSxJQUFJLENBQUNDLEtBQVQsRUFBZ0I7QUFDZkMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQSxPQUZELE1BRU87QUFDTkwsZ0JBQVEsTUFBUixzR0FBWUQsS0FBWixVQUFtQkssSUFBbkI7QUFDQTtBQUNELEtBTkQ7QUFPQSxHQVJEOztBQVVBLE1BQU1JLEdBQUcsZ0JBQUdDLDRDQUFLLENBQUNDLFNBQU4sRUFBWjs7QUFiNkIsbUJBZU9aLHNEQUFRLENBQUMsUUFBRCxDQWZmO0FBQUEsTUFldEJhLFVBZnNCO0FBQUEsTUFlVkMsYUFmVTs7QUFpQjdCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBVSxDQUFFLENBQS9COztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNELElBQUQsRUFBVSxDQUFFLENBQS9COztBQUVBRSx5REFBUyxDQUFDLFlBQU07QUFDZmYsZ0JBQVk7QUFDWixHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0M7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDJCQUNDO0FBQUEsaUJBQ0VVLFVBQVUsS0FBSyxRQUFmLGlCQUNBLHFFQUFDLDhDQUFEO0FBQ0MsV0FBRyxFQUFFSCxHQUROO0FBRUMsYUFBSyxFQUFFVCxLQUZSO0FBR0MsZUFBTyxFQUFFZ0IsVUFBVSxDQUFDLFFBQUQ7QUFIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLEVBUUVKLFVBQVUsS0FBSyxRQUFmLGlCQUNBLHFFQUFDLDhDQUFEO0FBQ0MsV0FBRyxFQUFFSCxHQUROO0FBRUMsaUJBQVMsRUFBRUssVUFBVSxDQUFDLFFBQUQsQ0FGdEI7QUFHQyxlQUFPLEVBQUVFLFVBQVUsQ0FBQyxRQUFEO0FBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURixFQWVFSixVQUFVLEtBQUssUUFBZixpQkFDQSxxRUFBQyw4Q0FBRDtBQUNDLFdBQUcsRUFBRUgsR0FETjtBQUVDLGlCQUFTLEVBQUVLLFVBQVUsQ0FBQyxRQUFELENBRnRCO0FBR0MsZUFBTyxFQUFFRSxVQUFVLENBQUMsT0FBRDtBQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEJGLEVBc0JFSixVQUFVLEtBQUssT0FBZixpQkFDQSxxRUFBQyw4Q0FBRDtBQUFPLFdBQUcsRUFBRUgsR0FBWjtBQUFpQixpQkFBUyxFQUFFSyxVQUFVLENBQUMsUUFBRDtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQThCQSxDQXZERDs7R0FBTWhCLGU7O0tBQUFBLGU7QUF5RFNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jlc2VydmF0aW9uLjA3MTQwZjQ5OTAxNjFiNWQ3OGNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0R2l0ZXNOb21zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTdGVwMSBmcm9tICcuL1N0ZXAxJztcclxuaW1wb3J0IFN0ZXAyIGZyb20gJy4vU3RlcDInO1xyXG5pbXBvcnQgU3RlcDMgZnJvbSAnLi9TdGVwMyc7XHJcbmltcG9ydCBSZWNhcCBmcm9tICcuL1JlY2FwJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFJlc2VydmF0aW9uRm9ybSA9ICgpID0+IHtcclxuXHRjb25zdCBbZ2l0ZXMsIHNldEdpdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgbGlzdERlc0dpdGVzID0gKCkgPT4ge1xyXG5cdFx0bGlzdEdpdGVzTm9tcygpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0R2l0ZXMoLi4uZ2l0ZXMsIGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCByZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuXHJcblx0Y29uc3QgW2NvbXBvbmVudHMsIHNldENvbXBvbmVudHNdID0gdXNlU3RhdGUoJ1N0ZXAgMycpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVQcmVjID0gKGNvbXApID0+IHt9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVTdWl2ID0gKGNvbXApID0+IHt9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGlzdERlc0dpdGVzKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblx0XHRcdDxmb3JtPlxyXG5cdFx0XHRcdHtjb21wb25lbnRzID09PSAnU3RlcCAxJyAmJiAoXHJcblx0XHRcdFx0XHQ8U3RlcDFcclxuXHRcdFx0XHRcdFx0cmVmPXtyZWZ9XHJcblx0XHRcdFx0XHRcdGdpdGVzPXtnaXRlc31cclxuXHRcdFx0XHRcdFx0c3VpdmFudD17aGFuZGxlU3VpdignU3RlcCAyJyl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdFx0e2NvbXBvbmVudHMgPT09ICdTdGVwIDInICYmIChcclxuXHRcdFx0XHRcdDxTdGVwMlxyXG5cdFx0XHRcdFx0XHRyZWY9e3JlZn1cclxuXHRcdFx0XHRcdFx0cHJlY2VkZW50PXtoYW5kbGVQcmVjKCdTdGVwIDEnKX1cclxuXHRcdFx0XHRcdFx0c3VpdmFudD17aGFuZGxlU3VpdignU3RlcCAzJyl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdFx0e2NvbXBvbmVudHMgPT09ICdTdGVwIDMnICYmIChcclxuXHRcdFx0XHRcdDxTdGVwM1xyXG5cdFx0XHRcdFx0XHRyZWY9e3JlZn1cclxuXHRcdFx0XHRcdFx0cHJlY2VkZW50PXtoYW5kbGVQcmVjKCdTdGVwIDInKX1cclxuXHRcdFx0XHRcdFx0c3VpdmFudD17aGFuZGxlU3VpdignUmVjYXAnKX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0XHR7Y29tcG9uZW50cyA9PT0gJ1JlY2FwJyAmJiAoXHJcblx0XHRcdFx0XHQ8UmVjYXAgcmVmPXtyZWZ9IHByZWNlZGVudD17aGFuZGxlUHJlYygnU3RlcCAzJyl9IC8+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VydmF0aW9uRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==