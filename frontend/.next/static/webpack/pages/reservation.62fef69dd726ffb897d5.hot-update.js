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
/* harmony import */ var _Step1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Step1 */ "./components/reservation/Step1.js");
/* harmony import */ var _Step2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Step2 */ "./components/reservation/Step2.js");
/* harmony import */ var _Step3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Step3 */ "./components/reservation/Step3.js");
/* harmony import */ var _Recap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Recap */ "./components/reservation/Recap.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\reservation\\ReservationForm.js",
    _this = undefined,
    _s = $RefreshSig$();








var ReservationForm = function ReservationForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]),
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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])('Step 2'),
      components = _useState2[0],
      setComponents = _useState2[1];

  var handlePrec = function handlePrec(comp) {};

  var handleSuiv = function handleSuiv(comp) {};

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    listDesGites();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      children: [components === 'Step 1' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Step1__WEBPACK_IMPORTED_MODULE_3__["default"], {
        gites: gites,
        suivant: handleSuiv('Step 2')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 6
      }, _this), components === 'Step 2' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Step2__WEBPACK_IMPORTED_MODULE_4__["default"], {
        precedent: handlePrec('Step 1'),
        suivant: handleSuiv('Step 3')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 6
      }, _this), components === 'Step 3' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Step3__WEBPACK_IMPORTED_MODULE_5__["default"], {
        precedent: handlePrec('Step 2'),
        suivant: handleSuiv('Recap')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 6
      }, _this), components === 'Recap' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Recap__WEBPACK_IMPORTED_MODULE_6__["default"], {
        precedent: handlePrec('Step 3')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 6
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 3
  }, _this);
};

_s(ReservationForm, "MgBgI7hcD27ABencY508Cfk3qj4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXNlcnZhdGlvbi9SZXNlcnZhdGlvbkZvcm0uanMiXSwibmFtZXMiOlsiUmVzZXJ2YXRpb25Gb3JtIiwidXNlU3RhdGUiLCJnaXRlcyIsInNldEdpdGVzIiwibGlzdERlc0dpdGVzIiwibGlzdEdpdGVzTm9tcyIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50cyIsInNldENvbXBvbmVudHMiLCJoYW5kbGVQcmVjIiwiY29tcCIsImhhbmRsZVN1aXYiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0hDLHNEQUFRLENBQUMsRUFBRCxDQURMO0FBQUEsTUFDdEJDLEtBRHNCO0FBQUEsTUFDZkMsUUFEZTs7QUFHN0IsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUMxQkMsOEVBQWEsR0FBR0MsSUFBaEIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFVO0FBQzlCLFVBQUlBLElBQUksQ0FBQ0MsS0FBVCxFQUFnQjtBQUNmQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLE9BRkQsTUFFTztBQUNOTCxnQkFBUSxNQUFSLHNHQUFZRCxLQUFaLFVBQW1CSyxJQUFuQjtBQUNBO0FBQ0QsS0FORDtBQU9BLEdBUkQ7O0FBSDZCLG1CQWFPTixzREFBUSxDQUFDLFFBQUQsQ0FiZjtBQUFBLE1BYXRCVSxVQWJzQjtBQUFBLE1BYVZDLGFBYlU7O0FBZTdCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBVSxDQUFFLENBQS9COztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNELElBQUQsRUFBVSxDQUFFLENBQS9COztBQUVBRSx5REFBUyxDQUFDLFlBQU07QUFDZlosZ0JBQVk7QUFDWixHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0M7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDJCQUNDO0FBQUEsaUJBQ0VPLFVBQVUsS0FBSyxRQUFmLGlCQUNBLHFFQUFDLDhDQUFEO0FBQU8sYUFBSyxFQUFFVCxLQUFkO0FBQXFCLGVBQU8sRUFBRWEsVUFBVSxDQUFDLFFBQUQ7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLEVBSUVKLFVBQVUsS0FBSyxRQUFmLGlCQUNBLHFFQUFDLDhDQUFEO0FBQ0MsaUJBQVMsRUFBRUUsVUFBVSxDQUFDLFFBQUQsQ0FEdEI7QUFFQyxlQUFPLEVBQUVFLFVBQVUsQ0FBQyxRQUFEO0FBRnBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixFQVVFSixVQUFVLEtBQUssUUFBZixpQkFDQSxxRUFBQyw4Q0FBRDtBQUNDLGlCQUFTLEVBQUVFLFVBQVUsQ0FBQyxRQUFELENBRHRCO0FBRUMsZUFBTyxFQUFFRSxVQUFVLENBQUMsT0FBRDtBQUZwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEYsRUFnQkVKLFVBQVUsS0FBSyxPQUFmLGlCQUNBLHFFQUFDLDhDQUFEO0FBQU8saUJBQVMsRUFBRUUsVUFBVSxDQUFDLFFBQUQ7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUF3QkEsQ0EvQ0Q7O0dBQU1iLGU7O0tBQUFBLGU7QUFpRFNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jlc2VydmF0aW9uLjYyZmVmNjlkZDcyNmZmYjg5N2Q1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0R2l0ZXNOb21zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCBTdGVwMSBmcm9tICcuL1N0ZXAxJztcclxuaW1wb3J0IFN0ZXAyIGZyb20gJy4vU3RlcDInO1xyXG5pbXBvcnQgU3RlcDMgZnJvbSAnLi9TdGVwMyc7XHJcbmltcG9ydCBSZWNhcCBmcm9tICcuL1JlY2FwJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFJlc2VydmF0aW9uRm9ybSA9ICgpID0+IHtcclxuXHRjb25zdCBbZ2l0ZXMsIHNldEdpdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgbGlzdERlc0dpdGVzID0gKCkgPT4ge1xyXG5cdFx0bGlzdEdpdGVzTm9tcygpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0R2l0ZXMoLi4uZ2l0ZXMsIGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBbY29tcG9uZW50cywgc2V0Q29tcG9uZW50c10gPSB1c2VTdGF0ZSgnU3RlcCAyJyk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZVByZWMgPSAoY29tcCkgPT4ge307XHJcblxyXG5cdGNvbnN0IGhhbmRsZVN1aXYgPSAoY29tcCkgPT4ge307XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsaXN0RGVzR2l0ZXMoKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0PGZvcm0+XHJcblx0XHRcdFx0e2NvbXBvbmVudHMgPT09ICdTdGVwIDEnICYmIChcclxuXHRcdFx0XHRcdDxTdGVwMSBnaXRlcz17Z2l0ZXN9IHN1aXZhbnQ9e2hhbmRsZVN1aXYoJ1N0ZXAgMicpfSAvPlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdFx0e2NvbXBvbmVudHMgPT09ICdTdGVwIDInICYmIChcclxuXHRcdFx0XHRcdDxTdGVwMlxyXG5cdFx0XHRcdFx0XHRwcmVjZWRlbnQ9e2hhbmRsZVByZWMoJ1N0ZXAgMScpfVxyXG5cdFx0XHRcdFx0XHRzdWl2YW50PXtoYW5kbGVTdWl2KCdTdGVwIDMnKX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0XHR7Y29tcG9uZW50cyA9PT0gJ1N0ZXAgMycgJiYgKFxyXG5cdFx0XHRcdFx0PFN0ZXAzXHJcblx0XHRcdFx0XHRcdHByZWNlZGVudD17aGFuZGxlUHJlYygnU3RlcCAyJyl9XHJcblx0XHRcdFx0XHRcdHN1aXZhbnQ9e2hhbmRsZVN1aXYoJ1JlY2FwJyl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdFx0e2NvbXBvbmVudHMgPT09ICdSZWNhcCcgJiYgKFxyXG5cdFx0XHRcdFx0PFJlY2FwIHByZWNlZGVudD17aGFuZGxlUHJlYygnU3RlcCAzJyl9IC8+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VydmF0aW9uRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==