webpackHotUpdate_N_E("pages/divers/FAQ",{

/***/ "./pages/divers/FAQ.js":
/*!*****************************!*\
  !*** ./pages/divers/FAQ.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\divers\\FAQ.js",
    _this = undefined,
    _s = $RefreshSig$();





var FAQ = function FAQ() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      QRs = _useState[0],
      setQRs = _useState[1];

  var listerLesQR = function listerLesQR() {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_3__["listeDesQR"])().then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        setQRs.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(QRs).concat([data]));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    listerLesQR();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "accordion-section clearfix mt-3",
      "aria-label": "Question Accordions",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Questions fr\xE9quentes "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "panel-group",
          id: "accordion",
          role: "tablist",
          "aria-multiselectable": "true",
          children: QRs.map(function (QR, i) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "panel panel-default",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "panel-heading p-3 mb-3",
                role: "tab",
                id: "heading".concat(i),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  className: "panel-title",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    className: "collapsed",
                    role: "button",
                    title: "",
                    "data-toggle": "collapse",
                    "data-parent": "#accordion",
                    href: "#collapse".concat(i),
                    "aria-expanded": "true",
                    "aria-controls": "collapse".concat(i),
                    children: QR.question
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 41,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                id: "collapse".concat(i),
                className: "panel-collapse collapse",
                role: "tabpanel",
                "aria-labelledby": "heading".concat(i),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "panel-body px-3 mb-4",
                  children: QR.reponse
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 9
              }, _this)]
            }, i, true, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 8
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 3
  }, _this);
};

_s(FAQ, "sPR5HjPgWv9WhmiXrJRzstd0dIY=");

_c = FAQ;
/* harmony default export */ __webpack_exports__["default"] = (FAQ);

var _c;

$RefreshReg$(_c, "FAQ");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGl2ZXJzL0ZBUS5qcyJdLCJuYW1lcyI6WyJGQVEiLCJ1c2VTdGF0ZSIsIlFScyIsInNldFFScyIsImxpc3Rlckxlc1FSIiwibGlzdGVEZXNRUiIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwibWFwIiwiUVIiLCJpIiwicXVlc3Rpb24iLCJyZXBvbnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFBQTs7QUFBQSxrQkFDS0Msc0RBQVEsQ0FBQyxFQUFELENBRGI7QUFBQSxNQUNWQyxHQURVO0FBQUEsTUFDTEMsTUFESzs7QUFHakIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN6QkMsMkVBQVUsR0FBR0MsSUFBYixDQUFrQixVQUFDQyxJQUFELEVBQVU7QUFDM0IsVUFBSUEsSUFBSSxDQUFDQyxLQUFULEVBQWdCO0FBQ2ZDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0EsT0FGRCxNQUVPO0FBQ05MLGNBQU0sTUFBTixzR0FBVUQsR0FBVixVQUFlSyxJQUFmO0FBQ0E7QUFDRCxLQU5EO0FBT0EsR0FSRDs7QUFVQUkseURBQVMsQ0FBQyxZQUFNO0FBQ2ZQLGVBQVc7QUFDWCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0MscUVBQUMsaUVBQUQ7QUFBQSwyQkFDQztBQUNDLGVBQVMsRUFBQyxpQ0FEWDtBQUVDLG9CQUFXLHFCQUZaO0FBQUEsNkJBR0M7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxnQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUVDO0FBQ0MsbUJBQVMsRUFBQyxhQURYO0FBRUMsWUFBRSxFQUFDLFdBRko7QUFHQyxjQUFJLEVBQUMsU0FITjtBQUlDLGtDQUFxQixNQUp0QjtBQUFBLG9CQUtFRixHQUFHLENBQUNVLEdBQUosQ0FBUSxVQUFDQyxFQUFELEVBQUtDLENBQUw7QUFBQSxnQ0FDUjtBQUFLLHVCQUFTLEVBQUMscUJBQWY7QUFBQSxzQ0FDQztBQUNDLHlCQUFTLEVBQUMsd0JBRFg7QUFFQyxvQkFBSSxFQUFDLEtBRk47QUFHQyxrQkFBRSxtQkFBWUEsQ0FBWixDQUhIO0FBQUEsdUNBSUM7QUFBSSwyQkFBUyxFQUFDLGFBQWQ7QUFBQSx5Q0FDQztBQUNDLDZCQUFTLEVBQUMsV0FEWDtBQUVDLHdCQUFJLEVBQUMsUUFGTjtBQUdDLHlCQUFLLEVBQUMsRUFIUDtBQUlDLG1DQUFZLFVBSmI7QUFLQyxtQ0FBWSxZQUxiO0FBTUMsd0JBQUkscUJBQWNBLENBQWQsQ0FOTDtBQU9DLHFDQUFjLE1BUGY7QUFRQyx1REFBMEJBLENBQTFCLENBUkQ7QUFBQSw4QkFTRUQsRUFBRSxDQUFDRTtBQVRMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERCxlQW1CQztBQUNDLGtCQUFFLG9CQUFhRCxDQUFiLENBREg7QUFFQyx5QkFBUyxFQUFDLHlCQUZYO0FBR0Msb0JBQUksRUFBQyxVQUhOO0FBSUMsb0RBQTJCQSxDQUEzQixDQUpEO0FBQUEsdUNBS0M7QUFBSywyQkFBUyxFQUFDLHNCQUFmO0FBQUEsNEJBQ0VELEVBQUUsQ0FBQ0c7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFuQkQ7QUFBQSxlQUEwQ0YsQ0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEUTtBQUFBLFdBQVI7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFnREEsQ0FqRUQ7O0dBQU1kLEc7O0tBQUFBLEc7QUFtRVNBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RpdmVycy9GQVEuODA4OGQwYzJhODFkY2ZmZWEyNTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0JztcclxuaW1wb3J0IHsgbGlzdGVEZXNRUiB9IGZyb20gJy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgRkFRID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtRUnMsIHNldFFSc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdGNvbnN0IGxpc3Rlckxlc1FSID0gKCkgPT4ge1xyXG5cdFx0bGlzdGVEZXNRUigpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0UVJzKC4uLlFScywgZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsaXN0ZXJMZXNRUigpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQ+XHJcblx0XHRcdDxzZWN0aW9uXHJcblx0XHRcdFx0Y2xhc3NOYW1lPSdhY2NvcmRpb24tc2VjdGlvbiBjbGVhcmZpeCBtdC0zJ1xyXG5cdFx0XHRcdGFyaWEtbGFiZWw9J1F1ZXN0aW9uIEFjY29yZGlvbnMnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHRcdFx0PGgyPlF1ZXN0aW9ucyBmcsOpcXVlbnRlcyA8L2gyPlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J3BhbmVsLWdyb3VwJ1xyXG5cdFx0XHRcdFx0XHRpZD0nYWNjb3JkaW9uJ1xyXG5cdFx0XHRcdFx0XHRyb2xlPSd0YWJsaXN0J1xyXG5cdFx0XHRcdFx0XHRhcmlhLW11bHRpc2VsZWN0YWJsZT0ndHJ1ZSc+XHJcblx0XHRcdFx0XHRcdHtRUnMubWFwKChRUiwgaSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYW5lbCBwYW5lbC1kZWZhdWx0JyBrZXk9e2l9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3BhbmVsLWhlYWRpbmcgcC0zIG1iLTMnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHJvbGU9J3RhYidcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9e2BoZWFkaW5nJHtpfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdwYW5lbC10aXRsZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY29sbGFwc2VkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cm9sZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9JydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtdG9nZ2xlPSdjb2xsYXBzZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtcGFyZW50PScjYWNjb3JkaW9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZj17YCNjb2xsYXBzZSR7aX1gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD0ndHJ1ZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtY29udHJvbHM9e2Bjb2xsYXBzZSR7aX1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtRUi5xdWVzdGlvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvaDM+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9e2Bjb2xsYXBzZSR7aX1gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3BhbmVsLWNvbGxhcHNlIGNvbGxhcHNlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyb2xlPSd0YWJwYW5lbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbGxlZGJ5PXtgaGVhZGluZyR7aX1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhbmVsLWJvZHkgcHgtMyBtYi00Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7UVIucmVwb25zZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZBUTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==