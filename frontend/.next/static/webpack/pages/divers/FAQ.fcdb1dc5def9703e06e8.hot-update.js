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
      qrs = _useState[0],
      setQrs = _useState[1];

  var listeLesQR = function listeLesQR(params) {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_3__["listeDesQR"])().then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        setQrs.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(qrs).concat([data]));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    listeLesQR();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      "class": "accordion-section clearfix mt-3",
      "aria-label": "Question Accordions",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        "class": "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Questions fr\xE9quentes "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 6
        }, _this), qrs.map(function (qr) {
          /*#__PURE__*/
          Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "panel-group",
            id: "accordion",
            role: "tablist",
            "aria-multiselectable": "true",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              "class": "panel panel-default",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                "class": "panel-heading p-3 mb-3",
                role: "tab",
                id: "heading0",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  "class": "panel-title",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    "class": "collapsed",
                    role: "button",
                    title: "",
                    "data-toggle": "collapse",
                    "data-parent": "#accordion",
                    href: "#collapse0",
                    "aria-expanded": "true",
                    "aria-controls": "collapse0",
                    children: ["yrdy", qr.question]
                  }, void 0, true, {
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
                id: "collapse0",
                "class": "panel-collapse collapse",
                role: "tabpanel",
                "aria-labelledby": "heading0",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  "class": "panel-body px-3 mb-4",
                  children: qr.reponse
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 7
          }, _this);
        })]
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

_s(FAQ, "VNraBg9Mry85idA1g9jaJbG+HHQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGl2ZXJzL0ZBUS5qcyJdLCJuYW1lcyI6WyJGQVEiLCJ1c2VTdGF0ZSIsInFycyIsInNldFFycyIsImxpc3RlTGVzUVIiLCJwYXJhbXMiLCJsaXN0ZURlc1FSIiwidGhlbiIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJtYXAiLCJxciIsInF1ZXN0aW9uIiwicmVwb25zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0tDLHNEQUFRLENBQUMsRUFBRCxDQURiO0FBQUEsTUFDVkMsR0FEVTtBQUFBLE1BQ0xDLE1BREs7O0FBR2pCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLE1BQUQsRUFBWTtBQUM5QkMsMkVBQVUsR0FBR0MsSUFBYixDQUFrQixVQUFDQyxJQUFELEVBQVU7QUFDM0IsVUFBSUEsSUFBSSxDQUFDQyxLQUFULEVBQWdCO0FBQ2ZDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0EsT0FGRCxNQUVPO0FBQ05OLGNBQU0sTUFBTixzR0FBVUQsR0FBVixVQUFlTSxJQUFmO0FBQ0E7QUFDRCxLQU5EO0FBT0EsR0FSRDs7QUFVQUkseURBQVMsQ0FBQyxZQUFNO0FBQ2ZSLGNBQVU7QUFDVixHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0MscUVBQUMsaUVBQUQ7QUFBQSwyQkFDQztBQUNDLGVBQU0saUNBRFA7QUFFQyxvQkFBVyxxQkFGWjtBQUFBLDZCQUdDO0FBQUssaUJBQU0sV0FBWDtBQUFBLGdDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELEVBRUVGLEdBQUcsQ0FBQ1csR0FBSixDQUFRLFVBQUNDLEVBQUQsRUFBUTtBQUNoQjtBQUFBO0FBQ0MscUJBQU0sYUFEUDtBQUVDLGNBQUUsRUFBQyxXQUZKO0FBR0MsZ0JBQUksRUFBQyxTQUhOO0FBSUMsb0NBQXFCLE1BSnRCO0FBQUEsbUNBS0M7QUFBSyx1QkFBTSxxQkFBWDtBQUFBLHNDQUNDO0FBQ0MseUJBQU0sd0JBRFA7QUFFQyxvQkFBSSxFQUFDLEtBRk47QUFHQyxrQkFBRSxFQUFDLFVBSEo7QUFBQSx1Q0FJQztBQUFJLDJCQUFNLGFBQVY7QUFBQSx5Q0FDQztBQUNDLDZCQUFNLFdBRFA7QUFFQyx3QkFBSSxFQUFDLFFBRk47QUFHQyx5QkFBSyxFQUFDLEVBSFA7QUFJQyxtQ0FBWSxVQUpiO0FBS0MsbUNBQVksWUFMYjtBQU1DLHdCQUFJLEVBQUMsWUFOTjtBQU9DLHFDQUFjLE1BUGY7QUFRQyxxQ0FBYyxXQVJmO0FBQUEsdUNBVUVBLEVBQUUsQ0FBQ0MsUUFWTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERCxlQW9CQztBQUNDLGtCQUFFLEVBQUMsV0FESjtBQUVDLHlCQUFNLHlCQUZQO0FBR0Msb0JBQUksRUFBQyxVQUhOO0FBSUMsbUNBQWdCLFVBSmpCO0FBQUEsdUNBS0M7QUFBSywyQkFBTSxzQkFBWDtBQUFBLDRCQUNFRCxFQUFFLENBQUNFO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBcEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFvQ0EsU0FyQ0EsQ0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBaURBLENBbEVEOztHQUFNaEIsRzs7S0FBQUEsRztBQW9FU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGl2ZXJzL0ZBUS5mY2RiMWRjNWRlZjk3MDNlMDZlOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQnO1xyXG5pbXBvcnQgeyBsaXN0ZURlc1FSIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBGQVEgPSAoKSA9PiB7XHJcblx0Y29uc3QgW3Fycywgc2V0UXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgbGlzdGVMZXNRUiA9IChwYXJhbXMpID0+IHtcclxuXHRcdGxpc3RlRGVzUVIoKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFFycyguLi5xcnMsIGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGlzdGVMZXNRUigpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQ+XHJcblx0XHRcdDxzZWN0aW9uXHJcblx0XHRcdFx0Y2xhc3M9J2FjY29yZGlvbi1zZWN0aW9uIGNsZWFyZml4IG10LTMnXHJcblx0XHRcdFx0YXJpYS1sYWJlbD0nUXVlc3Rpb24gQWNjb3JkaW9ucyc+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz0nY29udGFpbmVyJz5cclxuXHRcdFx0XHRcdDxoMj5RdWVzdGlvbnMgZnLDqXF1ZW50ZXMgPC9oMj5cclxuXHRcdFx0XHRcdHtxcnMubWFwKChxcikgPT4ge1xyXG5cdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3M9J3BhbmVsLWdyb3VwJ1xyXG5cdFx0XHRcdFx0XHRcdGlkPSdhY2NvcmRpb24nXHJcblx0XHRcdFx0XHRcdFx0cm9sZT0ndGFibGlzdCdcclxuXHRcdFx0XHRcdFx0XHRhcmlhLW11bHRpc2VsZWN0YWJsZT0ndHJ1ZSc+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz0ncGFuZWwgcGFuZWwtZGVmYXVsdCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPSdwYW5lbC1oZWFkaW5nIHAtMyBtYi0zJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyb2xlPSd0YWInXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSdoZWFkaW5nMCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzcz0ncGFuZWwtdGl0bGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz0nY29sbGFwc2VkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cm9sZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9JydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtdG9nZ2xlPSdjb2xsYXBzZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtcGFyZW50PScjYWNjb3JkaW9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZj0nI2NvbGxhcHNlMCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtZXhwYW5kZWQ9J3RydWUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWNvbnRyb2xzPSdjb2xsYXBzZTAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eXJkeVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3FyLnF1ZXN0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9oMz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD0nY29sbGFwc2UwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz0ncGFuZWwtY29sbGFwc2UgY29sbGFwc2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHJvbGU9J3RhYnBhbmVsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsbGVkYnk9J2hlYWRpbmcwJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz0ncGFuZWwtYm9keSBweC0zIG1iLTQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtxci5yZXBvbnNlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj47XHJcblx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZBUTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==