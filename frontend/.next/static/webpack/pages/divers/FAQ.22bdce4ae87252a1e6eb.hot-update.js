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
          lineNumber: 28,
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
                className: "panel-collapse collapse",
                role: "tabpanel",
                "aria-labelledby": "heading0",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "panel-body px-3 mb-4",
                  children: qr.reponse
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGl2ZXJzL0ZBUS5qcyJdLCJuYW1lcyI6WyJGQVEiLCJ1c2VTdGF0ZSIsInFycyIsInNldFFycyIsImxpc3RlTGVzUVIiLCJsaXN0ZURlc1FSIiwidGhlbiIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJtYXAiLCJxciIsInF1ZXN0aW9uIiwicmVwb25zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0tDLHNEQUFRLENBQUMsRUFBRCxDQURiO0FBQUEsTUFDVkMsR0FEVTtBQUFBLE1BQ0xDLE1BREs7O0FBR2pCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDeEJDLDJFQUFVLEdBQUdDLElBQWIsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzNCLFVBQUlBLElBQUksQ0FBQ0MsS0FBVCxFQUFnQjtBQUNmQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLE9BRkQsTUFFTztBQUNOTCxjQUFNLE1BQU4sc0dBQVVELEdBQVYsVUFBZUssSUFBZjtBQUNBO0FBQ0QsS0FORDtBQU9BLEdBUkQ7O0FBVUFJLHlEQUFTLENBQUMsWUFBTTtBQUNmUCxjQUFVO0FBQ1YsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNDLHFFQUFDLGlFQUFEO0FBQUEsMkJBQ0M7QUFDQyxlQUFTLEVBQUMsaUNBRFg7QUFFQyxvQkFBVyxxQkFGWjtBQUFBLDZCQUdDO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsZ0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsRUFFRUYsR0FBRyxDQUFDVSxHQUFKLENBQVEsVUFBQ0MsRUFBRCxFQUFRO0FBQ2hCO0FBQUE7QUFDQyxxQkFBUyxFQUFDLGFBRFg7QUFFQyxjQUFFLEVBQUMsV0FGSjtBQUdDLGdCQUFJLEVBQUMsU0FITjtBQUlDLG9DQUFxQixNQUp0QjtBQUFBLG1DQUtDO0FBQUssdUJBQVMsRUFBQyxxQkFBZjtBQUFBLHNDQUNDO0FBQ0MseUJBQVMsRUFBQyx3QkFEWDtBQUVDLG9CQUFJLEVBQUMsS0FGTjtBQUdDLGtCQUFFLEVBQUMsVUFISjtBQUFBLHVDQUlDO0FBQUksMkJBQVMsRUFBQyxhQUFkO0FBQUEseUNBQ0M7QUFDQyw2QkFBUyxFQUFDLFdBRFg7QUFFQyx3QkFBSSxFQUFDLFFBRk47QUFHQyx5QkFBSyxFQUFDLEVBSFA7QUFJQyxtQ0FBWSxVQUpiO0FBS0MsbUNBQVksWUFMYjtBQU1DLHdCQUFJLEVBQUMsWUFOTjtBQU9DLHFDQUFjLE1BUGY7QUFRQyxxQ0FBYyxXQVJmO0FBQUEsOEJBU0VBLEVBQUUsQ0FBQ0M7QUFUTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREQsZUFtQkM7QUFDQyxrQkFBRSxFQUFDLFdBREo7QUFFQyx5QkFBUyxFQUFDLHlCQUZYO0FBR0Msb0JBQUksRUFBQyxVQUhOO0FBSUMsbUNBQWdCLFVBSmpCO0FBQUEsdUNBS0M7QUFBSywyQkFBUyxFQUFDLHNCQUFmO0FBQUEsNEJBQ0VELEVBQUUsQ0FBQ0U7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFuQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1DQSxTQXBDQSxDQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFnREEsQ0FqRUQ7O0dBQU1mLEc7O0tBQUFBLEc7QUFtRVNBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RpdmVycy9GQVEuMjJiZGNlNGFlODcyNTJhMWU2ZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0JztcclxuaW1wb3J0IHsgbGlzdGVEZXNRUiB9IGZyb20gJy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgRkFRID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtxcnMsIHNldFFyc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdGNvbnN0IGxpc3RlTGVzUVIgPSAoKSA9PiB7XHJcblx0XHRsaXN0ZURlc1FSKCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRRcnMoLi4ucXJzLCBkYXRhKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxpc3RlTGVzUVIoKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8TGF5b3V0PlxyXG5cdFx0XHQ8c2VjdGlvblxyXG5cdFx0XHRcdGNsYXNzTmFtZT0nYWNjb3JkaW9uLXNlY3Rpb24gY2xlYXJmaXggbXQtMydcclxuXHRcdFx0XHRhcmlhLWxhYmVsPSdRdWVzdGlvbiBBY2NvcmRpb25zJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0XHRcdDxoMj5RdWVzdGlvbnMgZnLDqXF1ZW50ZXMgPC9oMj5cclxuXHRcdFx0XHRcdHtxcnMubWFwKChxcikgPT4ge1xyXG5cdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdwYW5lbC1ncm91cCdcclxuXHRcdFx0XHRcdFx0XHRpZD0nYWNjb3JkaW9uJ1xyXG5cdFx0XHRcdFx0XHRcdHJvbGU9J3RhYmxpc3QnXHJcblx0XHRcdFx0XHRcdFx0YXJpYS1tdWx0aXNlbGVjdGFibGU9J3RydWUnPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYW5lbCBwYW5lbC1kZWZhdWx0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdwYW5lbC1oZWFkaW5nIHAtMyBtYi0zJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyb2xlPSd0YWInXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSdoZWFkaW5nMCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9J3BhbmVsLXRpdGxlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjb2xsYXBzZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyb2xlPSdidXR0b24nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT0nJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS10b2dnbGU9J2NvbGxhcHNlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS1wYXJlbnQ9JyNhY2NvcmRpb24nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPScjY29sbGFwc2UwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD0ndHJ1ZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtY29udHJvbHM9J2NvbGxhcHNlMCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cXIucXVlc3Rpb259XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2gzPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSdjb2xsYXBzZTAnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncGFuZWwtY29sbGFwc2UgY29sbGFwc2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHJvbGU9J3RhYnBhbmVsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsbGVkYnk9J2hlYWRpbmcwJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhbmVsLWJvZHkgcHgtMyBtYi00Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7cXIucmVwb25zZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+O1xyXG5cdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdDwvTGF5b3V0PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGQVE7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=