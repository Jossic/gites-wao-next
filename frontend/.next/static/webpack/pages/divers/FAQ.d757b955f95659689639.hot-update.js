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

  var listeLesQR = function listeLesQR() {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_3__["listeDesQR"])().then(function (data) {
      console.log(data);

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
      className: "accordion-section clearfix mt-3",
      "aria-label": "Question Accordions",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Questions fr\xE9quentes "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 6
        }, _this), qrs.map(function (qr) {
          /*#__PURE__*/
          Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "panel-group",
            id: "accordion",
            role: "tablist",
            "aria-multiselectable": "true",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "panel panel-default",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "panel-heading p-3 mb-3",
                role: "tab",
                id: "heading0",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  className: "panel-title",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    className: "collapsed",
                    role: "button",
                    title: "",
                    "data-toggle": "collapse",
                    "data-parent": "#accordion",
                    href: "#collapse0",
                    "aria-expanded": "true",
                    "aria-controls": "collapse0",
                    children: qr.question
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                id: "collapse0",
                className: "panel-collapse collapse",
                role: "tabpanel",
                "aria-labelledby": "heading0",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "panel-body px-3 mb-4",
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
              lineNumber: 36,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 7
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGl2ZXJzL0ZBUS5qcyJdLCJuYW1lcyI6WyJGQVEiLCJ1c2VTdGF0ZSIsInFycyIsInNldFFycyIsImxpc3RlTGVzUVIiLCJsaXN0ZURlc1FSIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJ1c2VFZmZlY3QiLCJtYXAiLCJxciIsInF1ZXN0aW9uIiwicmVwb25zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0tDLHNEQUFRLENBQUMsRUFBRCxDQURiO0FBQUEsTUFDVkMsR0FEVTtBQUFBLE1BQ0xDLE1BREs7O0FBR2pCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDeEJDLDJFQUFVLEdBQUdDLElBQWIsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzNCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjs7QUFDQSxVQUFJQSxJQUFJLENBQUNHLEtBQVQsRUFBZ0I7QUFDZkYsZUFBTyxDQUFDQyxHQUFSLENBQVlDLEtBQVo7QUFDQSxPQUZELE1BRU87QUFDTlAsY0FBTSxNQUFOLHNHQUFVRCxHQUFWLFVBQWVLLElBQWY7QUFDQTtBQUNELEtBUEQ7QUFRQSxHQVREOztBQVdBSSx5REFBUyxDQUFDLFlBQU07QUFDZlAsY0FBVTtBQUNWLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDQyxxRUFBQyxpRUFBRDtBQUFBLDJCQUNDO0FBQ0MsZUFBUyxFQUFDLGlDQURYO0FBRUMsb0JBQVcscUJBRlo7QUFBQSw2QkFHQztBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLGdDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELEVBRUVGLEdBQUcsQ0FBQ1UsR0FBSixDQUFRLFVBQUNDLEVBQUQsRUFBUTtBQUNoQjtBQUFBO0FBQ0MscUJBQVMsRUFBQyxhQURYO0FBRUMsY0FBRSxFQUFDLFdBRko7QUFHQyxnQkFBSSxFQUFDLFNBSE47QUFJQyxvQ0FBcUIsTUFKdEI7QUFBQSxtQ0FLQztBQUFLLHVCQUFTLEVBQUMscUJBQWY7QUFBQSxzQ0FDQztBQUNDLHlCQUFTLEVBQUMsd0JBRFg7QUFFQyxvQkFBSSxFQUFDLEtBRk47QUFHQyxrQkFBRSxFQUFDLFVBSEo7QUFBQSx1Q0FJQztBQUFJLDJCQUFTLEVBQUMsYUFBZDtBQUFBLHlDQUNDO0FBQ0MsNkJBQVMsRUFBQyxXQURYO0FBRUMsd0JBQUksRUFBQyxRQUZOO0FBR0MseUJBQUssRUFBQyxFQUhQO0FBSUMsbUNBQVksVUFKYjtBQUtDLG1DQUFZLFlBTGI7QUFNQyx3QkFBSSxFQUFDLFlBTk47QUFPQyxxQ0FBYyxNQVBmO0FBUUMscUNBQWMsV0FSZjtBQUFBLDhCQVNFQSxFQUFFLENBQUNDO0FBVEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURELGVBbUJDO0FBQ0Msa0JBQUUsRUFBQyxXQURKO0FBRUMseUJBQVMsRUFBQyx5QkFGWDtBQUdDLG9CQUFJLEVBQUMsVUFITjtBQUlDLG1DQUFnQixVQUpqQjtBQUFBLHVDQUtDO0FBQUssMkJBQVMsRUFBQyxzQkFBZjtBQUFBLDRCQUNFRCxFQUFFLENBQUNFO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBbkJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtQ0EsU0FwQ0EsQ0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBZ0RBLENBbEVEOztHQUFNZixHOztLQUFBQSxHO0FBb0VTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kaXZlcnMvRkFRLmQ3NTdiOTU1Zjk1NjU5Njg5NjM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCc7XHJcbmltcG9ydCB7IGxpc3RlRGVzUVIgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEZBUSA9ICgpID0+IHtcclxuXHRjb25zdCBbcXJzLCBzZXRRcnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHRjb25zdCBsaXN0ZUxlc1FSID0gKCkgPT4ge1xyXG5cdFx0bGlzdGVEZXNRUigpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFFycyguLi5xcnMsIGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGlzdGVMZXNRUigpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQ+XHJcblx0XHRcdDxzZWN0aW9uXHJcblx0XHRcdFx0Y2xhc3NOYW1lPSdhY2NvcmRpb24tc2VjdGlvbiBjbGVhcmZpeCBtdC0zJ1xyXG5cdFx0XHRcdGFyaWEtbGFiZWw9J1F1ZXN0aW9uIEFjY29yZGlvbnMnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHRcdFx0PGgyPlF1ZXN0aW9ucyBmcsOpcXVlbnRlcyA8L2gyPlxyXG5cdFx0XHRcdFx0e3Fycy5tYXAoKHFyKSA9PiB7XHJcblx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3BhbmVsLWdyb3VwJ1xyXG5cdFx0XHRcdFx0XHRcdGlkPSdhY2NvcmRpb24nXHJcblx0XHRcdFx0XHRcdFx0cm9sZT0ndGFibGlzdCdcclxuXHRcdFx0XHRcdFx0XHRhcmlhLW11bHRpc2VsZWN0YWJsZT0ndHJ1ZSc+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhbmVsIHBhbmVsLWRlZmF1bHQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3BhbmVsLWhlYWRpbmcgcC0zIG1iLTMnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHJvbGU9J3RhYidcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J2hlYWRpbmcwJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0ncGFuZWwtdGl0bGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2NvbGxhcHNlZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJvbGU9J2J1dHRvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPScnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXRvZ2dsZT0nY29sbGFwc2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXBhcmVudD0nI2FjY29yZGlvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9JyNjb2xsYXBzZTAnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWV4cGFuZGVkPSd0cnVlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1jb250cm9scz0nY29sbGFwc2UwJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtxci5xdWVzdGlvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvaDM+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J2NvbGxhcHNlMCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdwYW5lbC1jb2xsYXBzZSBjb2xsYXBzZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0cm9sZT0ndGFicGFuZWwnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWxsZWRieT0naGVhZGluZzAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFuZWwtYm9keSBweC0zIG1iLTQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtxci5yZXBvbnNlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj47XHJcblx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZBUTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==