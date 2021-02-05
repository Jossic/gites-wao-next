webpackHotUpdate_N_E("pages/divers/alentours",{

/***/ "./pages/divers/alentours.js":
/*!***********************************!*\
  !*** ./pages/divers/alentours.js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout/Layout */ "./components/layout/Layout.js");
var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\divers\\alentours.js",
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Alentours = function Alentours(_ref) {
  var liens = _ref.liens;
  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx("section", {
    className: "accordion-section clearfix mt-3",
    "aria-label": "Question Accordions",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }
  }, "Questions fr\xE9quentes "), __jsx("div", {
    className: "panel-group",
    id: "accordion",
    role: "tablist",
    "aria-multiselectable": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }
  }, QRs.map(function (QR, i) {
    return __jsx("div", {
      className: "panel panel-default",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 8
      }
    }, __jsx("div", {
      className: "panel-heading p-3 mb-3",
      role: "tab",
      id: "heading".concat(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, __jsx("h3", {
      className: "panel-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 10
      }
    }, __jsx("a", {
      className: "collapsed lead",
      role: "button",
      title: "",
      "data-toggle": "collapse",
      "data-parent": "#accordion",
      href: "#collapse".concat(i),
      "aria-expanded": "true",
      "aria-controls": "collapse".concat(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }, QR.question))), __jsx("div", {
      id: "collapse".concat(i),
      className: "panel-collapse collapse",
      role: "tabpanel",
      "aria-labelledby": "heading".concat(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "panel-body px-3 mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 10
      }
    }, QR.reponse)));
  })))));
};

_c = Alentours;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Alentours);

var _c;

$RefreshReg$(_c, "Alentours");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGl2ZXJzL2FsZW50b3Vycy5qcyJdLCJuYW1lcyI6WyJBbGVudG91cnMiLCJsaWVucyIsIlFScyIsIm1hcCIsIlFSIiwiaSIsInF1ZXN0aW9uIiwicmVwb25zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFlO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ2hDLFNBQ0MsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFDQyxhQUFTLEVBQUMsaUNBRFg7QUFFQyxrQkFBVyxxQkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0M7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FERCxFQUVDO0FBQ0MsYUFBUyxFQUFDLGFBRFg7QUFFQyxNQUFFLEVBQUMsV0FGSjtBQUdDLFFBQUksRUFBQyxTQUhOO0FBSUMsNEJBQXFCLE1BSnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRUMsR0FBRyxDQUFDQyxHQUFKLENBQVEsVUFBQ0MsRUFBRCxFQUFLQyxDQUFMO0FBQUEsV0FDUjtBQUFLLGVBQVMsRUFBQyxxQkFBZjtBQUFxQyxTQUFHLEVBQUVBLENBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQztBQUNDLGVBQVMsRUFBQyx3QkFEWDtBQUVDLFVBQUksRUFBQyxLQUZOO0FBR0MsUUFBRSxtQkFBWUEsQ0FBWixDQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJQztBQUFJLGVBQVMsRUFBQyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQztBQUNDLGVBQVMsRUFBQyxnQkFEWDtBQUVDLFVBQUksRUFBQyxRQUZOO0FBR0MsV0FBSyxFQUFDLEVBSFA7QUFJQyxxQkFBWSxVQUpiO0FBS0MscUJBQVksWUFMYjtBQU1DLFVBQUkscUJBQWNBLENBQWQsQ0FOTDtBQU9DLHVCQUFjLE1BUGY7QUFRQyx5Q0FBMEJBLENBQTFCLENBUkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVNFRCxFQUFFLENBQUNFLFFBVEwsQ0FERCxDQUpELENBREQsRUFtQkM7QUFDQyxRQUFFLG9CQUFhRCxDQUFiLENBREg7QUFFQyxlQUFTLEVBQUMseUJBRlg7QUFHQyxVQUFJLEVBQUMsVUFITjtBQUlDLDBDQUEyQkEsQ0FBM0IsQ0FKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BS0M7QUFBSyxlQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFRCxFQUFFLENBQUNHLE9BREwsQ0FMRCxDQW5CRCxDQURRO0FBQUEsR0FBUixDQUxGLENBRkQsQ0FIRCxDQURELENBREQ7QUFnREEsQ0FqREQ7O0tBQU1QLFM7O0FBOERTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kaXZlcnMvYWxlbnRvdXJzLmE5NjhjNTgwYjcxOGViNjhjMWE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0TGllbnMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3BhZ2VzQWN0aW9ucyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0JztcclxuXHJcbmNvbnN0IEFsZW50b3VycyA9ICh7IGxpZW5zIH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PExheW91dD5cclxuXHRcdFx0PHNlY3Rpb25cclxuXHRcdFx0XHRjbGFzc05hbWU9J2FjY29yZGlvbi1zZWN0aW9uIGNsZWFyZml4IG10LTMnXHJcblx0XHRcdFx0YXJpYS1sYWJlbD0nUXVlc3Rpb24gQWNjb3JkaW9ucyc+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblx0XHRcdFx0XHQ8aDI+UXVlc3Rpb25zIGZyw6lxdWVudGVzIDwvaDI+XHJcblx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncGFuZWwtZ3JvdXAnXHJcblx0XHRcdFx0XHRcdGlkPSdhY2NvcmRpb24nXHJcblx0XHRcdFx0XHRcdHJvbGU9J3RhYmxpc3QnXHJcblx0XHRcdFx0XHRcdGFyaWEtbXVsdGlzZWxlY3RhYmxlPSd0cnVlJz5cclxuXHRcdFx0XHRcdFx0e1FScy5tYXAoKFFSLCBpKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhbmVsIHBhbmVsLWRlZmF1bHQnIGtleT17aX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncGFuZWwtaGVhZGluZyBwLTMgbWItMydcclxuXHRcdFx0XHRcdFx0XHRcdFx0cm9sZT0ndGFiJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD17YGhlYWRpbmcke2l9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9J3BhbmVsLXRpdGxlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjb2xsYXBzZWQgbGVhZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJvbGU9J2J1dHRvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPScnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXRvZ2dsZT0nY29sbGFwc2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXBhcmVudD0nI2FjY29yZGlvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9e2AjY29sbGFwc2Uke2l9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtZXhwYW5kZWQ9J3RydWUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWNvbnRyb2xzPXtgY29sbGFwc2Uke2l9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7UVIucXVlc3Rpb259XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2gzPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPXtgY29sbGFwc2Uke2l9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdwYW5lbC1jb2xsYXBzZSBjb2xsYXBzZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0cm9sZT0ndGFicGFuZWwnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWxsZWRieT17YGhlYWRpbmcke2l9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYW5lbC1ib2R5IHB4LTMgbWItNCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1FSLnJlcG9uc2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdDwvTGF5b3V0PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG5cdC8vIGNvbnNvbGUubG9nKHF1ZXJ5KTtcclxuXHRyZXR1cm4gbGlzdExpZW5zKCkudGhlbigobGllbnMpID0+IHtcclxuXHRcdGlmIChsaWVucy5lcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhsaWVucy5lcnJvcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4geyBwcm9wczogeyBsaWVucyB9IH07XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsZW50b3VycztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==