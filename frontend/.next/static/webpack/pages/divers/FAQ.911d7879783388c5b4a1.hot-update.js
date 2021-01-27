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
      qr = _useState[0],
      setQr = _useState[1];

  var listeLesQR = function listeLesQR(params) {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_3__["listeDesQR"])().then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        setGites.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(gites).concat([data]));
      }
    });
  };

  useEffect(function () {
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
                  children: "Question"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              id: "collapse0",
              "class": "panel-collapse collapse",
              role: "tabpanel",
              "aria-labelledby": "heading0",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                "class": "panel-body px-3 mb-4",
                children: "R\xE9ponse"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 7
          }, _this)
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

_s(FAQ, "PhpTJIGBtNEa8aiE69iWcYzndj8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGl2ZXJzL0ZBUS5qcyJdLCJuYW1lcyI6WyJGQVEiLCJ1c2VTdGF0ZSIsInFyIiwic2V0UXIiLCJsaXN0ZUxlc1FSIiwicGFyYW1zIiwibGlzdGVEZXNRUiIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic2V0R2l0ZXMiLCJnaXRlcyIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0dDLHNEQUFRLENBQUMsRUFBRCxDQURYO0FBQUEsTUFDVkMsRUFEVTtBQUFBLE1BQ05DLEtBRE07O0FBR2pCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLE1BQUQsRUFBWTtBQUM5QkMsMkVBQVUsR0FBR0MsSUFBYixDQUFrQixVQUFDQyxJQUFELEVBQVU7QUFDM0IsVUFBSUEsSUFBSSxDQUFDQyxLQUFULEVBQWdCO0FBQ2ZDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0EsT0FGRCxNQUVPO0FBQ05HLGdCQUFRLE1BQVIsc0dBQVlDLEtBQVosVUFBbUJMLElBQW5CO0FBQ0E7QUFDRCxLQU5EO0FBT0EsR0FSRDs7QUFVQU0sV0FBUyxDQUFDLFlBQU07QUFDZlYsY0FBVTtBQUNWLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDQyxxRUFBQyxpRUFBRDtBQUFBLDJCQUNDO0FBQ0MsZUFBTSxpQ0FEUDtBQUVDLG9CQUFXLHFCQUZaO0FBQUEsNkJBR0M7QUFBSyxpQkFBTSxXQUFYO0FBQUEsZ0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFFQztBQUNDLG1CQUFNLGFBRFA7QUFFQyxZQUFFLEVBQUMsV0FGSjtBQUdDLGNBQUksRUFBQyxTQUhOO0FBSUMsa0NBQXFCLE1BSnRCO0FBQUEsaUNBS0M7QUFBSyxxQkFBTSxxQkFBWDtBQUFBLG9DQUNDO0FBQ0MsdUJBQU0sd0JBRFA7QUFFQyxrQkFBSSxFQUFDLEtBRk47QUFHQyxnQkFBRSxFQUFDLFVBSEo7QUFBQSxxQ0FJQztBQUFJLHlCQUFNLGFBQVY7QUFBQSx1Q0FDQztBQUNDLDJCQUFNLFdBRFA7QUFFQyxzQkFBSSxFQUFDLFFBRk47QUFHQyx1QkFBSyxFQUFDLEVBSFA7QUFJQyxpQ0FBWSxVQUpiO0FBS0MsaUNBQVksWUFMYjtBQU1DLHNCQUFJLEVBQUMsWUFOTjtBQU9DLG1DQUFjLE1BUGY7QUFRQyxtQ0FBYyxXQVJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFtQkM7QUFDQyxnQkFBRSxFQUFDLFdBREo7QUFFQyx1QkFBTSx5QkFGUDtBQUdDLGtCQUFJLEVBQUMsVUFITjtBQUlDLGlDQUFnQixVQUpqQjtBQUFBLHFDQUtDO0FBQUsseUJBQU0sc0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQW5CRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUE0Q0EsQ0E3REQ7O0dBQU1KLEc7O0tBQUFBLEc7QUErRFNBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RpdmVycy9GQVEuOTExZDc4Nzk3ODMzODhjNWI0YTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0JztcclxuaW1wb3J0IHsgbGlzdGVEZXNRUiB9IGZyb20gJy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEZBUSA9ICgpID0+IHtcclxuXHRjb25zdCBbcXIsIHNldFFyXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgbGlzdGVMZXNRUiA9IChwYXJhbXMpID0+IHtcclxuXHRcdGxpc3RlRGVzUVIoKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldEdpdGVzKC4uLmdpdGVzLCBkYXRhKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxpc3RlTGVzUVIoKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8TGF5b3V0PlxyXG5cdFx0XHQ8c2VjdGlvblxyXG5cdFx0XHRcdGNsYXNzPSdhY2NvcmRpb24tc2VjdGlvbiBjbGVhcmZpeCBtdC0zJ1xyXG5cdFx0XHRcdGFyaWEtbGFiZWw9J1F1ZXN0aW9uIEFjY29yZGlvbnMnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9J2NvbnRhaW5lcic+XHJcblx0XHRcdFx0XHQ8aDI+UXVlc3Rpb25zIGZyw6lxdWVudGVzIDwvaDI+XHJcblx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdGNsYXNzPSdwYW5lbC1ncm91cCdcclxuXHRcdFx0XHRcdFx0aWQ9J2FjY29yZGlvbidcclxuXHRcdFx0XHRcdFx0cm9sZT0ndGFibGlzdCdcclxuXHRcdFx0XHRcdFx0YXJpYS1tdWx0aXNlbGVjdGFibGU9J3RydWUnPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPSdwYW5lbCBwYW5lbC1kZWZhdWx0Jz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz0ncGFuZWwtaGVhZGluZyBwLTMgbWItMydcclxuXHRcdFx0XHRcdFx0XHRcdHJvbGU9J3RhYidcclxuXHRcdFx0XHRcdFx0XHRcdGlkPSdoZWFkaW5nMCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3M9J3BhbmVsLXRpdGxlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz0nY29sbGFwc2VkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJvbGU9J2J1dHRvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT0nJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtdG9nZ2xlPSdjb2xsYXBzZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXBhcmVudD0nI2FjY29yZGlvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPScjY29sbGFwc2UwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtZXhwYW5kZWQ9J3RydWUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1jb250cm9scz0nY29sbGFwc2UwJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRRdWVzdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2gzPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdGlkPSdjb2xsYXBzZTAnXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz0ncGFuZWwtY29sbGFwc2UgY29sbGFwc2UnXHJcblx0XHRcdFx0XHRcdFx0XHRyb2xlPSd0YWJwYW5lbCdcclxuXHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWxsZWRieT0naGVhZGluZzAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz0ncGFuZWwtYm9keSBweC0zIG1iLTQnPlLDqXBvbnNlPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdDwvTGF5b3V0PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGQVE7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=