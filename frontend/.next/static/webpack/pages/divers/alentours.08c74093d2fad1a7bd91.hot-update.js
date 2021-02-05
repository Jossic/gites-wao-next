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
  }, "Alentours "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }
  }, "Nous vous invitons \xE0 d\xE9couvrir l\u2019ensemble des produits de la marque collective Ardennes de France en t\xE9l\xE9chargeant la brochure ci dessous , dans laquelle sont r\xE9pertori\xE9es les coordonn\xE9es de toutes les entreprises, qui au quotidien, participent \xE0 la valorisation de nos Ardennes."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 6
    }
  }, "images Alentours"), __jsx("div", {
    className: "panel-group",
    id: "accordion",
    role: "tablist",
    "aria-multiselectable": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 6
    }
  }, QRs.map(function (QR, i) {
    return __jsx("div", {
      className: "panel panel-default",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 8
      }
    }, __jsx("div", {
      className: "panel-heading p-3 mb-3",
      role: "tab",
      id: "heading".concat(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }
    }, __jsx("h3", {
      className: "panel-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
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
        lineNumber: 33,
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
        lineNumber: 46,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "panel-body px-3 mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGl2ZXJzL2FsZW50b3Vycy5qcyJdLCJuYW1lcyI6WyJBbGVudG91cnMiLCJsaWVucyIsIlFScyIsIm1hcCIsIlFSIiwiaSIsInF1ZXN0aW9uIiwicmVwb25zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFlO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ2hDLFNBQ0MsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFDQyxhQUFTLEVBQUMsaUNBRFg7QUFFQyxrQkFBVyxxQkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0M7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxFQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNFRBRkQsRUFVQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVZELEVBV0M7QUFDQyxhQUFTLEVBQUMsYUFEWDtBQUVDLE1BQUUsRUFBQyxXQUZKO0FBR0MsUUFBSSxFQUFDLFNBSE47QUFJQyw0QkFBcUIsTUFKdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFQyxHQUFHLENBQUNDLEdBQUosQ0FBUSxVQUFDQyxFQUFELEVBQUtDLENBQUw7QUFBQSxXQUNSO0FBQUssZUFBUyxFQUFDLHFCQUFmO0FBQXFDLFNBQUcsRUFBRUEsQ0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDO0FBQ0MsZUFBUyxFQUFDLHdCQURYO0FBRUMsVUFBSSxFQUFDLEtBRk47QUFHQyxRQUFFLG1CQUFZQSxDQUFaLENBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlDO0FBQUksZUFBUyxFQUFDLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDO0FBQ0MsZUFBUyxFQUFDLGdCQURYO0FBRUMsVUFBSSxFQUFDLFFBRk47QUFHQyxXQUFLLEVBQUMsRUFIUDtBQUlDLHFCQUFZLFVBSmI7QUFLQyxxQkFBWSxZQUxiO0FBTUMsVUFBSSxxQkFBY0EsQ0FBZCxDQU5MO0FBT0MsdUJBQWMsTUFQZjtBQVFDLHlDQUEwQkEsQ0FBMUIsQ0FSRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BU0VELEVBQUUsQ0FBQ0UsUUFUTCxDQURELENBSkQsQ0FERCxFQW1CQztBQUNDLFFBQUUsb0JBQWFELENBQWIsQ0FESDtBQUVDLGVBQVMsRUFBQyx5QkFGWDtBQUdDLFVBQUksRUFBQyxVQUhOO0FBSUMsMENBQTJCQSxDQUEzQixDQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLQztBQUFLLGVBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0VELEVBQUUsQ0FBQ0csT0FETCxDQUxELENBbkJELENBRFE7QUFBQSxHQUFSLENBTEYsQ0FYRCxDQUhELENBREQsQ0FERDtBQXlEQSxDQTFERDs7S0FBTVAsUzs7QUF1RVNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RpdmVycy9hbGVudG91cnMuMDhjNzQwOTNkMmZhZDFhN2JkOTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpc3RMaWVucyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvcGFnZXNBY3Rpb25zJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQnO1xyXG5cclxuY29uc3QgQWxlbnRvdXJzID0gKHsgbGllbnMgfSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8TGF5b3V0PlxyXG5cdFx0XHQ8c2VjdGlvblxyXG5cdFx0XHRcdGNsYXNzTmFtZT0nYWNjb3JkaW9uLXNlY3Rpb24gY2xlYXJmaXggbXQtMydcclxuXHRcdFx0XHRhcmlhLWxhYmVsPSdRdWVzdGlvbiBBY2NvcmRpb25zJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0XHRcdDxoMj5BbGVudG91cnMgPC9oMj5cclxuXHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHROb3VzIHZvdXMgaW52aXRvbnMgw6AgZMOpY291dnJpciBs4oCZZW5zZW1ibGUgZGVzIHByb2R1aXRzXHJcblx0XHRcdFx0XHRcdGRlIGxhIG1hcnF1ZSBjb2xsZWN0aXZlIEFyZGVubmVzIGRlIEZyYW5jZSBlblxyXG5cdFx0XHRcdFx0XHR0w6lsw6ljaGFyZ2VhbnQgbGEgYnJvY2h1cmUgY2kgZGVzc291cyAsIGRhbnMgbGFxdWVsbGVcclxuXHRcdFx0XHRcdFx0c29udCByw6lwZXJ0b3Jpw6llcyBsZXMgY29vcmRvbm7DqWVzIGRlIHRvdXRlcyBsZXNcclxuXHRcdFx0XHRcdFx0ZW50cmVwcmlzZXMsIHF1aSBhdSBxdW90aWRpZW4sIHBhcnRpY2lwZW50IMOgIGxhXHJcblx0XHRcdFx0XHRcdHZhbG9yaXNhdGlvbiBkZSBub3MgQXJkZW5uZXMuXHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8cD5pbWFnZXMgQWxlbnRvdXJzPC9wPlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J3BhbmVsLWdyb3VwJ1xyXG5cdFx0XHRcdFx0XHRpZD0nYWNjb3JkaW9uJ1xyXG5cdFx0XHRcdFx0XHRyb2xlPSd0YWJsaXN0J1xyXG5cdFx0XHRcdFx0XHRhcmlhLW11bHRpc2VsZWN0YWJsZT0ndHJ1ZSc+XHJcblx0XHRcdFx0XHRcdHtRUnMubWFwKChRUiwgaSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwYW5lbCBwYW5lbC1kZWZhdWx0JyBrZXk9e2l9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3BhbmVsLWhlYWRpbmcgcC0zIG1iLTMnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHJvbGU9J3RhYidcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9e2BoZWFkaW5nJHtpfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSdwYW5lbC10aXRsZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY29sbGFwc2VkIGxlYWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyb2xlPSdidXR0b24nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT0nJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS10b2dnbGU9J2NvbGxhcHNlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS1wYXJlbnQ9JyNhY2NvcmRpb24nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPXtgI2NvbGxhcHNlJHtpfWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWV4cGFuZGVkPSd0cnVlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1jb250cm9scz17YGNvbGxhcHNlJHtpfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1FSLnF1ZXN0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9oMz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD17YGNvbGxhcHNlJHtpfWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncGFuZWwtY29sbGFwc2UgY29sbGFwc2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHJvbGU9J3RhYnBhbmVsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsbGVkYnk9e2BoZWFkaW5nJHtpfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncGFuZWwtYm9keSBweC0zIG1iLTQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtRUi5yZXBvbnNlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L0xheW91dD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuXHQvLyBjb25zb2xlLmxvZyhxdWVyeSk7XHJcblx0cmV0dXJuIGxpc3RMaWVucygpLnRoZW4oKGxpZW5zKSA9PiB7XHJcblx0XHRpZiAobGllbnMuZXJyb3IpIHtcclxuXHRcdFx0Y29uc29sZS5sb2cobGllbnMuZXJyb3IpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHsgcHJvcHM6IHsgbGllbnMgfSB9O1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGVudG91cnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=