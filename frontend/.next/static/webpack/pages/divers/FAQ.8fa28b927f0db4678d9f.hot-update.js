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
        setQr.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(qrs).concat([data]));
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
                    children: "Question"
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
                id: "collapse0",
                "class": "panel-collapse collapse",
                role: "tabpanel",
                "aria-labelledby": "heading0",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  "class": "panel-body px-3 mb-4",
                  children: "R\xE9ponse"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGl2ZXJzL0ZBUS5qcyJdLCJuYW1lcyI6WyJGQVEiLCJ1c2VTdGF0ZSIsInFycyIsInNldFFycyIsImxpc3RlTGVzUVIiLCJwYXJhbXMiLCJsaXN0ZURlc1FSIiwidGhlbiIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzZXRRciIsInVzZUVmZmVjdCIsIm1hcCIsInFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFBQTs7QUFBQSxrQkFDS0Msc0RBQVEsQ0FBQyxFQUFELENBRGI7QUFBQSxNQUNWQyxHQURVO0FBQUEsTUFDTEMsTUFESzs7QUFHakIsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsTUFBRCxFQUFZO0FBQzlCQywyRUFBVSxHQUFHQyxJQUFiLENBQWtCLFVBQUNDLElBQUQsRUFBVTtBQUMzQixVQUFJQSxJQUFJLENBQUNDLEtBQVQsRUFBZ0I7QUFDZkMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQSxPQUZELE1BRU87QUFDTkcsYUFBSyxNQUFMLHNHQUFTVixHQUFULFVBQWNNLElBQWQ7QUFDQTtBQUNELEtBTkQ7QUFPQSxHQVJEOztBQVVBSyx5REFBUyxDQUFDLFlBQU07QUFDZlQsY0FBVTtBQUNWLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDQyxxRUFBQyxpRUFBRDtBQUFBLDJCQUNDO0FBQ0MsZUFBTSxpQ0FEUDtBQUVDLG9CQUFXLHFCQUZaO0FBQUEsNkJBR0M7QUFBSyxpQkFBTSxXQUFYO0FBQUEsZ0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsRUFFRUYsR0FBRyxDQUFDWSxHQUFKLENBQVEsVUFBQ0MsRUFBRCxFQUFRO0FBQ2hCO0FBQUE7QUFDQyxxQkFBTSxhQURQO0FBRUMsY0FBRSxFQUFDLFdBRko7QUFHQyxnQkFBSSxFQUFDLFNBSE47QUFJQyxvQ0FBcUIsTUFKdEI7QUFBQSxtQ0FLQztBQUFLLHVCQUFNLHFCQUFYO0FBQUEsc0NBQ0M7QUFDQyx5QkFBTSx3QkFEUDtBQUVDLG9CQUFJLEVBQUMsS0FGTjtBQUdDLGtCQUFFLEVBQUMsVUFISjtBQUFBLHVDQUlDO0FBQUksMkJBQU0sYUFBVjtBQUFBLHlDQUNDO0FBQ0MsNkJBQU0sV0FEUDtBQUVDLHdCQUFJLEVBQUMsUUFGTjtBQUdDLHlCQUFLLEVBQUMsRUFIUDtBQUlDLG1DQUFZLFVBSmI7QUFLQyxtQ0FBWSxZQUxiO0FBTUMsd0JBQUksRUFBQyxZQU5OO0FBT0MscUNBQWMsTUFQZjtBQVFDLHFDQUFjLFdBUmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERCxlQW1CQztBQUNDLGtCQUFFLEVBQUMsV0FESjtBQUVDLHlCQUFNLHlCQUZQO0FBR0Msb0JBQUksRUFBQyxVQUhOO0FBSUMsbUNBQWdCLFVBSmpCO0FBQUEsdUNBS0M7QUFBSywyQkFBTSxzQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBbkJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtQ0EsU0FwQ0EsQ0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBZ0RBLENBakVEOztHQUFNZixHOztLQUFBQSxHO0FBbUVTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kaXZlcnMvRkFRLjhmYTI4YjkyN2YwZGI0Njc4ZDlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCc7XHJcbmltcG9ydCB7IGxpc3RlRGVzUVIgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEZBUSA9ICgpID0+IHtcclxuXHRjb25zdCBbcXJzLCBzZXRRcnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHRjb25zdCBsaXN0ZUxlc1FSID0gKHBhcmFtcykgPT4ge1xyXG5cdFx0bGlzdGVEZXNRUigpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0UXIoLi4ucXJzLCBkYXRhKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxpc3RlTGVzUVIoKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8TGF5b3V0PlxyXG5cdFx0XHQ8c2VjdGlvblxyXG5cdFx0XHRcdGNsYXNzPSdhY2NvcmRpb24tc2VjdGlvbiBjbGVhcmZpeCBtdC0zJ1xyXG5cdFx0XHRcdGFyaWEtbGFiZWw9J1F1ZXN0aW9uIEFjY29yZGlvbnMnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9J2NvbnRhaW5lcic+XHJcblx0XHRcdFx0XHQ8aDI+UXVlc3Rpb25zIGZyw6lxdWVudGVzIDwvaDI+XHJcblx0XHRcdFx0XHR7cXJzLm1hcCgocXIpID0+IHtcclxuXHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzPSdwYW5lbC1ncm91cCdcclxuXHRcdFx0XHRcdFx0XHRpZD0nYWNjb3JkaW9uJ1xyXG5cdFx0XHRcdFx0XHRcdHJvbGU9J3RhYmxpc3QnXHJcblx0XHRcdFx0XHRcdFx0YXJpYS1tdWx0aXNlbGVjdGFibGU9J3RydWUnPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9J3BhbmVsIHBhbmVsLWRlZmF1bHQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz0ncGFuZWwtaGVhZGluZyBwLTMgbWItMydcclxuXHRcdFx0XHRcdFx0XHRcdFx0cm9sZT0ndGFiJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD0naGVhZGluZzAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3M9J3BhbmVsLXRpdGxlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9J2NvbGxhcHNlZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJvbGU9J2J1dHRvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPScnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXRvZ2dsZT0nY29sbGFwc2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXBhcmVudD0nI2FjY29yZGlvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9JyNjb2xsYXBzZTAnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWV4cGFuZGVkPSd0cnVlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1jb250cm9scz0nY29sbGFwc2UwJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFF1ZXN0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2gzPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSdjb2xsYXBzZTAnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPSdwYW5lbC1jb2xsYXBzZSBjb2xsYXBzZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0cm9sZT0ndGFicGFuZWwnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWxsZWRieT0naGVhZGluZzAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPSdwYW5lbC1ib2R5IHB4LTMgbWItNCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0UsOpcG9uc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+O1xyXG5cdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdDwvTGF5b3V0PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGQVE7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=