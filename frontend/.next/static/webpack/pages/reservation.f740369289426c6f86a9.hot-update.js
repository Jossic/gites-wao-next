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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])({
    Step1: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Step1__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 10
    }, _this),
    Step2: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Step2__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 10
    }, _this),
    Step3: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Step3__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 10
    }, _this),
    Recap: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Recap__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 10
    }, _this)
  }),
      components = _useState2[0],
      setComponents = _useState2[1];

  var showComponent = function showComponent(components) {
    setComponents({
      displayedTable: components
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    listDesGites();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Step1__WEBPACK_IMPORTED_MODULE_3__["default"], {
        gites: gites
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Step2__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Step3__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Recap__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 3
  }, _this);
};

_s(ReservationForm, "NFxHuUkR/A4i2H3J7J/U9HEPVBs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXNlcnZhdGlvbi9SZXNlcnZhdGlvbkZvcm0uanMiXSwibmFtZXMiOlsiUmVzZXJ2YXRpb25Gb3JtIiwidXNlU3RhdGUiLCJnaXRlcyIsInNldEdpdGVzIiwibGlzdERlc0dpdGVzIiwibGlzdEdpdGVzTm9tcyIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiU3RlcDEiLCJTdGVwMiIsIlN0ZXAzIiwiUmVjYXAiLCJjb21wb25lbnRzIiwic2V0Q29tcG9uZW50cyIsInNob3dDb21wb25lbnQiLCJkaXNwbGF5ZWRUYWJsZSIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFBQSxrQkFDSEMsc0RBQVEsQ0FBQyxFQUFELENBREw7QUFBQSxNQUN0QkMsS0FEc0I7QUFBQSxNQUNmQyxRQURlOztBQUc3QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQzFCQyw4RUFBYSxHQUFHQyxJQUFoQixDQUFxQixVQUFDQyxJQUFELEVBQVU7QUFDOUIsVUFBSUEsSUFBSSxDQUFDQyxLQUFULEVBQWdCO0FBQ2ZDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0EsT0FGRCxNQUVPO0FBQ05MLGdCQUFRLE1BQVIsc0dBQVlELEtBQVosVUFBbUJLLElBQW5CO0FBQ0E7QUFDRCxLQU5EO0FBT0EsR0FSRDs7QUFINkIsbUJBYU9OLHNEQUFRLENBQUM7QUFDNUNVLFNBQUssZUFBRSxxRUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRHFDO0FBRTVDQyxTQUFLLGVBQUUscUVBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZxQztBQUc1Q0MsU0FBSyxlQUFFLHFFQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIcUM7QUFJNUNDLFNBQUssZUFBRSxxRUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSnFDLEdBQUQsQ0FiZjtBQUFBLE1BYXRCQyxVQWJzQjtBQUFBLE1BYVZDLGFBYlU7O0FBb0I3QixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNGLFVBQUQsRUFBZ0I7QUFDckNDLGlCQUFhLENBQUM7QUFBRUUsb0JBQWMsRUFBRUg7QUFBbEIsS0FBRCxDQUFiO0FBQ0EsR0FGRDs7QUFJQUkseURBQVMsQ0FBQyxZQUFNO0FBQ2ZmLGdCQUFZO0FBQ1osR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNDO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSwyQkFDQztBQUFBLDhCQUNDLHFFQUFDLDhDQUFEO0FBQU8sYUFBSyxFQUFFRjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVDLHFFQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRCxlQUdDLHFFQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRCxlQUlDLHFFQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFVQSxDQXRDRDs7R0FBTUYsZTs7S0FBQUEsZTtBQXdDU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzZXJ2YXRpb24uZjc0MDM2OTI4OTQyNmM2Zjg2YTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpc3RHaXRlc05vbXMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IFN0ZXAxIGZyb20gJy4vU3RlcDEnO1xyXG5pbXBvcnQgU3RlcDIgZnJvbSAnLi9TdGVwMic7XHJcbmltcG9ydCBTdGVwMyBmcm9tICcuL1N0ZXAzJztcclxuaW1wb3J0IFJlY2FwIGZyb20gJy4vUmVjYXAnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgUmVzZXJ2YXRpb25Gb3JtID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtnaXRlcywgc2V0R2l0ZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHRjb25zdCBsaXN0RGVzR2l0ZXMgPSAoKSA9PiB7XHJcblx0XHRsaXN0R2l0ZXNOb21zKCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRHaXRlcyguLi5naXRlcywgZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IFtjb21wb25lbnRzLCBzZXRDb21wb25lbnRzXSA9IHVzZVN0YXRlKHtcclxuXHRcdFN0ZXAxOiA8U3RlcDEgLz4sXHJcblx0XHRTdGVwMjogPFN0ZXAyIC8+LFxyXG5cdFx0U3RlcDM6IDxTdGVwMyAvPixcclxuXHRcdFJlY2FwOiA8UmVjYXAgLz4sXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHNob3dDb21wb25lbnQgPSAoY29tcG9uZW50cykgPT4ge1xyXG5cdFx0c2V0Q29tcG9uZW50cyh7IGRpc3BsYXllZFRhYmxlOiBjb21wb25lbnRzIH0pO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsaXN0RGVzR2l0ZXMoKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0PGZvcm0+XHJcblx0XHRcdFx0PFN0ZXAxIGdpdGVzPXtnaXRlc30gLz5cclxuXHRcdFx0XHQ8U3RlcDIgLz5cclxuXHRcdFx0XHQ8U3RlcDMgLz5cclxuXHRcdFx0XHQ8UmVjYXAgLz5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VydmF0aW9uRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==