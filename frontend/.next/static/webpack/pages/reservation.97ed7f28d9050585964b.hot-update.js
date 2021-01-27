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
      children: components[displayedTable]
    }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXNlcnZhdGlvbi9SZXNlcnZhdGlvbkZvcm0uanMiXSwibmFtZXMiOlsiUmVzZXJ2YXRpb25Gb3JtIiwidXNlU3RhdGUiLCJnaXRlcyIsInNldEdpdGVzIiwibGlzdERlc0dpdGVzIiwibGlzdEdpdGVzTm9tcyIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiU3RlcDEiLCJTdGVwMiIsIlN0ZXAzIiwiUmVjYXAiLCJjb21wb25lbnRzIiwic2V0Q29tcG9uZW50cyIsInNob3dDb21wb25lbnQiLCJkaXNwbGF5ZWRUYWJsZSIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFBQSxrQkFDSEMsc0RBQVEsQ0FBQyxFQUFELENBREw7QUFBQSxNQUN0QkMsS0FEc0I7QUFBQSxNQUNmQyxRQURlOztBQUc3QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQzFCQyw4RUFBYSxHQUFHQyxJQUFoQixDQUFxQixVQUFDQyxJQUFELEVBQVU7QUFDOUIsVUFBSUEsSUFBSSxDQUFDQyxLQUFULEVBQWdCO0FBQ2ZDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0EsT0FGRCxNQUVPO0FBQ05MLGdCQUFRLE1BQVIsc0dBQVlELEtBQVosVUFBbUJLLElBQW5CO0FBQ0E7QUFDRCxLQU5EO0FBT0EsR0FSRDs7QUFINkIsbUJBYU9OLHNEQUFRLENBQUM7QUFDNUNVLFNBQUssZUFBRSxxRUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRHFDO0FBRTVDQyxTQUFLLGVBQUUscUVBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZxQztBQUc1Q0MsU0FBSyxlQUFFLHFFQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIcUM7QUFJNUNDLFNBQUssZUFBRSxxRUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSnFDLEdBQUQsQ0FiZjtBQUFBLE1BYXRCQyxVQWJzQjtBQUFBLE1BYVZDLGFBYlU7O0FBb0I3QixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNGLFVBQUQsRUFBZ0I7QUFDckNDLGlCQUFhLENBQUM7QUFBRUUsb0JBQWMsRUFBRUg7QUFBbEIsS0FBRCxDQUFiO0FBQ0EsR0FGRDs7QUFJQUkseURBQVMsQ0FBQyxZQUFNO0FBQ2ZmLGdCQUFZO0FBQ1osR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNDO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSwyQkFDQztBQUFBLGdCQUNFVyxVQUFVLENBQUNHLGNBQUQ7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBV0EsQ0F2Q0Q7O0dBQU1sQixlOztLQUFBQSxlO0FBeUNTQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXNlcnZhdGlvbi45N2VkN2YyOGQ5MDUwNTg1OTY0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGlzdEdpdGVzTm9tcyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5pbXBvcnQgU3RlcDEgZnJvbSAnLi9TdGVwMSc7XHJcbmltcG9ydCBTdGVwMiBmcm9tICcuL1N0ZXAyJztcclxuaW1wb3J0IFN0ZXAzIGZyb20gJy4vU3RlcDMnO1xyXG5pbXBvcnQgUmVjYXAgZnJvbSAnLi9SZWNhcCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBSZXNlcnZhdGlvbkZvcm0gPSAoKSA9PiB7XHJcblx0Y29uc3QgW2dpdGVzLCBzZXRHaXRlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdGNvbnN0IGxpc3REZXNHaXRlcyA9ICgpID0+IHtcclxuXHRcdGxpc3RHaXRlc05vbXMoKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldEdpdGVzKC4uLmdpdGVzLCBkYXRhKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgW2NvbXBvbmVudHMsIHNldENvbXBvbmVudHNdID0gdXNlU3RhdGUoe1xyXG5cdFx0U3RlcDE6IDxTdGVwMSAvPixcclxuXHRcdFN0ZXAyOiA8U3RlcDIgLz4sXHJcblx0XHRTdGVwMzogPFN0ZXAzIC8+LFxyXG5cdFx0UmVjYXA6IDxSZWNhcCAvPixcclxuXHR9KTtcclxuXHJcblx0Y29uc3Qgc2hvd0NvbXBvbmVudCA9IChjb21wb25lbnRzKSA9PiB7XHJcblx0XHRzZXRDb21wb25lbnRzKHsgZGlzcGxheWVkVGFibGU6IGNvbXBvbmVudHMgfSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxpc3REZXNHaXRlcygpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHQ8Zm9ybT5cclxuXHRcdFx0XHR7Y29tcG9uZW50c1tkaXNwbGF5ZWRUYWJsZV19XHJcblx0XHRcdFx0ey8qIDxTdGVwMSBnaXRlcz17Z2l0ZXN9IC8+XHJcblx0XHRcdFx0PFN0ZXAyIC8+XHJcblx0XHRcdFx0PFN0ZXAzIC8+XHJcblx0XHRcdFx0PFJlY2FwIC8+ICovfVxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZXJ2YXRpb25Gb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9