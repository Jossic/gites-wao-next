webpackHotUpdate_N_E("pages/admin/gites/[id]",{

/***/ "./components/admin/forms/gites/FormInfosPagesUpdate.js":
/*!**************************************************************!*\
  !*** ./components/admin/forms/gites/FormInfosPagesUpdate.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\forms\\gites\\FormInfosPagesUpdate.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var FormInfosPages = function FormInfosPages(_ref) {
  _s();

  var classes = _ref.classes,
      register = _ref.register,
      gite = _ref.gite;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(70),
      title = _useState[0],
      setTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(160),
      mdesc = _useState2[0],
      setMdesc = _useState2[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    className: classes.textField,
    inputRef: register,
    name: "mtitle",
    id: "standard-number",
    onChange: function onChange(e) {
      return setTitle(70 - e.target.value.length);
    },
    label: "Meta Title - Possible de mettre en automatique \xE9ventuellement (Entre 50 et 70 caract\xE8res) - ".concat(title),
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    className: classes.textField,
    inputRef: register,
    name: "presGiteSEO",
    id: "standard-number",
    onChange: function onChange(e) {
      return setMdesc(160 - e.target.value.length);
    },
    multiline: true,
    rows: 3,
    label: "Texte pour la pr\xE9sentation SEO du g\xEEte qui aparaitra dans les SERP Google (environ 150-160 caract\xE8res) - ".concat(mdesc),
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    className: classes.textField,
    inputRef: register,
    name: "detailGite",
    multiline: true,
    rows: 3,
    id: "standard-number",
    label: "Descriptif du g\xEEte (idem ci-dessus mais possible plus long)",
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    className: classes.textField,
    inputRef: register,
    name: "texteExterieur",
    multiline: true,
    rows: 3,
    id: "standard-number",
    label: "Texte de pr\xE9sentation de l'exterieur du g\xEEte",
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    className: classes.textField,
    inputRef: register,
    name: "equipementExterieur",
    id: "standard-number",
    label: "equipementExterieur (s\xE9parer les \xE9quipements par une virgule \",\").",
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 4
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    className: classes.textField,
    inputRef: register,
    name: "texteInterieur",
    multiline: true,
    rows: 3,
    id: "standard-number",
    label: "Texte de pr\xE9sentation de l'interieur du g\xEEte",
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 4
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    className: classes.textField,
    inputRef: register,
    name: "equipementInterieur",
    id: "standard-number",
    label: "equipementInterieur (s\xE9parer les \xE9quipements par une virgule \",\").",
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 4
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    className: classes.textField,
    inputRef: register,
    name: "textePiscine",
    multiline: true,
    rows: 3,
    id: "standard-number",
    label: "Texte de pr\xE9sentation de la piscine",
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 4
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    className: classes.textField,
    inputRef: register,
    name: "equipementPiscine",
    id: "standard-number",
    label: "equipementPiscine (s\xE9parer les \xE9quipements par une virgule \",\").",
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 4
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    className: classes.textField,
    inputRef: register,
    name: "texte",
    multiline: true,
    rows: 3,
    id: "standard-number",
    label: "Texte \xE0 d\xE9finir",
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 4
    }
  }), __jsx(Button, {
    type: "submit",
    variant: "contained",
    color: "primary",
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 4
    }
  }, "Valider les modifications"));
};

_s(FormInfosPages, "l0JHcmOZfJfJiSHwEelWSHZuRf0=");

_c = FormInfosPages;
/* harmony default export */ __webpack_exports__["default"] = (FormInfosPages);

var _c;

$RefreshReg$(_c, "FormInfosPages");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9naXRlcy9Gb3JtSW5mb3NQYWdlc1VwZGF0ZS5qcyJdLCJuYW1lcyI6WyJGb3JtSW5mb3NQYWdlcyIsImNsYXNzZXMiLCJyZWdpc3RlciIsImdpdGUiLCJ1c2VTdGF0ZSIsInRpdGxlIiwic2V0VGl0bGUiLCJtZGVzYyIsInNldE1kZXNjIiwidGV4dEZpZWxkIiwiZSIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIiwic2hyaW5rIiwiYnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUFpQztBQUFBOztBQUFBLE1BQTlCQyxPQUE4QixRQUE5QkEsT0FBOEI7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLGtCQUM3QkMsc0RBQVEsQ0FBQyxFQUFELENBRHFCO0FBQUEsTUFDaERDLEtBRGdEO0FBQUEsTUFDekNDLFFBRHlDOztBQUFBLG1CQUU3QkYsc0RBQVEsQ0FBQyxHQUFELENBRnFCO0FBQUEsTUFFaERHLEtBRmdEO0FBQUEsTUFFekNDLFFBRnlDOztBQUl2RCxTQUNDLG1FQUNDLE1BQUMsMkRBQUQ7QUFDQyxhQUFTLEVBQUVQLE9BQU8sQ0FBQ1EsU0FEcEI7QUFFQyxZQUFRLEVBQUVQLFFBRlg7QUFHQyxRQUFJLEVBQUMsUUFITjtBQUlDLE1BQUUsRUFBQyxpQkFKSjtBQUtDLFlBQVEsRUFBRSxrQkFBQ1EsQ0FBRDtBQUFBLGFBQU9KLFFBQVEsQ0FBQyxLQUFLSSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxNQUFyQixDQUFmO0FBQUEsS0FMWDtBQU1DLFNBQUssOEdBQWlHUixLQUFqRyxDQU5OO0FBT0MsbUJBQWUsRUFBRTtBQUNoQlMsWUFBTSxFQUFFO0FBRFEsS0FQbEI7QUFBQTtBQUFBO0FB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S0FSbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpGRCxFQTZGQyxNQUFDLDJEQUFEO0FBQ0MsYUFBUyxFQUFFYixPQUFPLENBQUNRLFNBRHBCO0FBRUMsWUFBUSxFQUFFUCxRQUZYO0FBR0MsUUFBSSxFQUFDLG1CQUhOO0FBSUMsTUFBRSxFQUFDLGlCQUpKO0FBS0MsU0FBSyxFQUFDLDBFQUxQO0FBTUMsbUJBQWUsRUFBRTtBQUNoQlksWUFBTSxFQUFFO0FBRFEsS0FObEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTdGRCxFQXVHQyxNQUFDLDJEQUFEO0FBQ0MsYUFBUyxFQUFFYixPQUFPLENBQUNRLFNBRHBCO0FBRUMsWUFBUSxFQUFFUCxRQUZYO0FBR0MsUUFBSSxFQUFDLE9BSE47QUFJQyxhQUFTLE1BSlY7QUFLQyxRQUFJLEVBQUUsQ0FMUDtBQU1DLE1BQUUsRUFBQyxpQkFOSjtBQU9DLFNBQUssRUFBQyx1QkFQUDtBQVFDLG1CQUFlLEVBQUU7QUFDaEJZLFlBQU0sRUFBRTtBQURRLEtBUmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2R0QsRUFtSEMsTUFBQyxNQUFEO0FBQ0MsUUFBSSxFQUFDLFFBRE47QUFFQyxXQUFPLEVBQUMsV0FGVDtBQUdDLFNBQUssRUFBQyxTQUhQO0FBSUMsYUFBUyxFQUFFYixPQUFPLENBQUNjLE1BSnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBbkhELENBREQ7QUE2SEEsQ0FqSUQ7O0dBQU1mLGM7O0tBQUFBLGM7QUFtSVNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2dpdGVzL1tpZF0uYjM5YzA4YzFkNDBiYWEzZmVhMTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Db250cm9sTGFiZWwsIFN3aXRjaCwgVGV4dEZpZWxkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEZvcm1JbmZvc1BhZ2VzID0gKHsgY2xhc3NlcywgcmVnaXN0ZXIsIGdpdGUgfSkgPT4ge1xyXG5cdGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoNzApO1xyXG5cdGNvbnN0IFttZGVzYywgc2V0TWRlc2NdID0gdXNlU3RhdGUoMTYwKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRuYW1lPSdtdGl0bGUnXHJcblx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKDcwIC0gZS50YXJnZXQudmFsdWUubGVuZ3RoKX1cclxuXHRcdFx0XHRsYWJlbD17YE1ldGEgVGl0bGUgLSBQb3NzaWJsZSBkZSBtZXR0cmUgZW4gYXV0b21hdGlxdWUgw6l2ZW50dWVsbGVtZW50IChFbnRyZSA1MCBldCA3MCBjYXJhY3TDqHJlcykgLSAke3RpdGxlfWB9XHJcblx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdG5hbWU9J3ByZXNHaXRlU0VPJ1xyXG5cdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRNZGVzYygxNjAgLSBlLnRhcmdldC52YWx1ZS5sZW5ndGgpfVxyXG5cdFx0XHRcdG11bHRpbGluZVxyXG5cdFx0XHRcdHJvd3M9ezN9XHJcblx0XHRcdFx0bGFiZWw9e2BUZXh0ZSBwb3VyIGxhIHByw6lzZW50YXRpb24gU0VPIGR1IGfDrnRlIHF1aSBhcGFyYWl0cmEgZGFucyBsZXMgU0VSUCBHb29nbGUgKGVudmlyb24gMTUwLTE2MCBjYXJhY3TDqHJlcykgLSAke21kZXNjfWB9XHJcblx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdG5hbWU9J2RldGFpbEdpdGUnXHJcblx0XHRcdFx0bXVsdGlsaW5lXHJcblx0XHRcdFx0cm93cz17M31cclxuXHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdGxhYmVsPSdEZXNjcmlwdGlmIGR1IGfDrnRlIChpZGVtIGNpLWRlc3N1cyBtYWlzIHBvc3NpYmxlIHBsdXMgbG9uZyknXHJcblx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdG5hbWU9J3RleHRlRXh0ZXJpZXVyJ1xyXG5cdFx0XHRcdG11bHRpbGluZVxyXG5cdFx0XHRcdHJvd3M9ezN9XHJcblx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRsYWJlbD1cIlRleHRlIGRlIHByw6lzZW50YXRpb24gZGUgbCdleHRlcmlldXIgZHUgZ8OudGVcIlxyXG5cdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRuYW1lPSdlcXVpcGVtZW50RXh0ZXJpZXVyJ1xyXG5cdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0bGFiZWw9J2VxdWlwZW1lbnRFeHRlcmlldXIgKHPDqXBhcmVyIGxlcyDDqXF1aXBlbWVudHMgcGFyIHVuZSB2aXJndWxlIFwiLFwiKS4nXHJcblx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdG5hbWU9J3RleHRlSW50ZXJpZXVyJ1xyXG5cdFx0XHRcdG11bHRpbGluZVxyXG5cdFx0XHRcdHJvd3M9ezN9XHJcblx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRsYWJlbD1cIlRleHRlIGRlIHByw6lzZW50YXRpb24gZGUgbCdpbnRlcmlldXIgZHUgZ8OudGVcIlxyXG5cdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRuYW1lPSdlcXVpcGVtZW50SW50ZXJpZXVyJ1xyXG5cdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0bGFiZWw9J2VxdWlwZW1lbnRJbnRlcmlldXIgKHPDqXBhcmVyIGxlcyDDqXF1aXBlbWVudHMgcGFyIHVuZSB2aXJndWxlIFwiLFwiKS4nXHJcblx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdG5hbWU9J3RleHRlUGlzY2luZSdcclxuXHRcdFx0XHRtdWx0aWxpbmVcclxuXHRcdFx0XHRyb3dzPXszfVxyXG5cdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0bGFiZWw9J1RleHRlIGRlIHByw6lzZW50YXRpb24gZGUgbGEgcGlzY2luZSdcclxuXHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuXHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0bmFtZT0nZXF1aXBlbWVudFBpc2NpbmUnXHJcblx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRsYWJlbD0nZXF1aXBlbWVudFBpc2NpbmUgKHPDqXBhcmVyIGxlcyDDqXF1aXBlbWVudHMgcGFyIHVuZSB2aXJndWxlIFwiLFwiKS4nXHJcblx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdG5hbWU9J3RleHRlJ1xyXG5cdFx0XHRcdG11bHRpbGluZVxyXG5cdFx0XHRcdHJvd3M9ezN9XHJcblx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRsYWJlbD0nVGV4dGUgw6AgZMOpZmluaXInXHJcblx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdHR5cGU9J3N1Ym1pdCdcclxuXHRcdFx0XHR2YXJpYW50PSdjb250YWluZWQnXHJcblx0XHRcdFx0Y29sb3I9J3ByaW1hcnknXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0VmFsaWRlciBsZXMgbW9kaWZpY2F0aW9uc1xyXG5cdFx0XHQ8L0J1dHRvbj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtSW5mb3NQYWdlcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==