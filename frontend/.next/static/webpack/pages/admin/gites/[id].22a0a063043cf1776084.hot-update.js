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
      gite = _ref.gite,
      preloadedValues = _ref.preloadedValues;

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
    label: "Equipement ext\xE9rieur (s\xE9parer les \xE9quipements par une virgule \",\").",
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
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9naXRlcy9Gb3JtSW5mb3NQYWdlc1VwZGF0ZS5qcyJdLCJuYW1lcyI6WyJGb3JtSW5mb3NQYWdlcyIsImNsYXNzZXMiLCJyZWdpc3RlciIsImdpdGUiLCJwcmVsb2FkZWRWYWx1ZXMiLCJ1c2VTdGF0ZSIsInRpdGxlIiwic2V0VGl0bGUiLCJtZGVzYyIsInNldE1kZXNjIiwidGV4dEZpZWxkIiwiZSIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIiwic2hyaW5rIiwiYnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUFrRDtBQUFBOztBQUFBLE1BQS9DQyxPQUErQyxRQUEvQ0EsT0FBK0M7QUFBQSxNQUF0Q0MsUUFBc0MsUUFBdENBLFFBQXNDO0FBQUEsTUFBNUJDLElBQTRCLFFBQTVCQSxJQUE0QjtBQUFBLE1BQXRCQyxlQUFzQixRQUF0QkEsZUFBc0I7O0FBQUEsa0JBQzlDQyxzREFBUSxDQUFDLEVBQUQsQ0FEc0M7QUFBQSxNQUNqRUMsS0FEaUU7QUFBQSxNQUMxREMsUUFEMEQ7O0FBQUEsbUJBRTlDRixzREFBUSxDQUFDLEdBQUQsQ0FGc0M7QUFBQSxNQUVqRUcsS0FGaUU7QUFBQSxNQUUxREMsUUFGMEQ7O0FBSXhFLFNBQ0MsbUVBQ0MsTUFBQywyREFBRDtBQUNDLGFBQVMsRUFBRVIsT0FBTyxDQUFDUyxTQURwQjtBQUVDLFlBQVEsRUFBRVIsUUFGWDtBQUdDLFFBQUksRUFBQyxRQUhOO0FBSUMsTUFBRSxFQUFDLGlCQUpKO0FBS0MsWUFBUSxFQUFFLGtCQUFDUyxDQUFEO0FBQUEsYUFBT0osUUFBUSxDQUFDLEtBQUtJLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULENBQWVDLE1BQXJCLENBQWY7QUFBQSxLQUxYO0FBTUMsU0FBSyw4R0FBaUdSLEtBQWpHLENBTk47QUFP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QUFLLEVBQUMsd0NBUFA7QUFRQyxtQkFBZSxFQUFFO0FBQ2hCYSxZQUFNLEVBQUU7QUFEUSxLQVJsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakZELEVBNkZDLE1BQUMsMkRBQUQ7QUFDQyxhQUFTLEVBQUVkLE9BQU8sQ0FBQ1MsU0FEcEI7QUFFQyxZQUFRLEVBQUVSLFFBRlg7QUFHQyxRQUFJLEVBQUMsbUJBSE47QUFJQyxNQUFFLEVBQUMsaUJBSko7QUFLQyxTQUFLLEVBQUMsMEVBTFA7QUFNQyxtQkFBZSxFQUFFO0FBQ2hCYSxZQUFNLEVBQUU7QUFEUSxLQU5sQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBN0ZELEVBdUdDLE1BQUMsMkRBQUQ7QUFDQyxhQUFTLEVBQUVkLE9BQU8sQ0FBQ1MsU0FEcEI7QUFFQyxZQUFRLEVBQUVSLFFBRlg7QUFHQyxRQUFJLEVBQUMsT0FITjtBQUlDLGFBQVMsTUFKVjtBQUtDLFFBQUksRUFBRSxDQUxQO0FBTUMsTUFBRSxFQUFDLGlCQU5KO0FBT0MsU0FBSyxFQUFDLHVCQVBQO0FBUUMsbUJBQWUsRUFBRTtBQUNoQmEsWUFBTSxFQUFFO0FBRFEsS0FSbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZHRCxFQW1IQyxNQUFDLHdEQUFEO0FBQ0MsUUFBSSxFQUFDLFFBRE47QUFFQyxXQUFPLEVBQUMsV0FGVDtBQUdDLFNBQUssRUFBQyxTQUhQO0FBSUMsYUFBUyxFQUFFZCxPQUFPLENBQUNlLE1BSnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBbkhELENBREQ7QUE2SEEsQ0FqSUQ7O0dBQU1oQixjOztLQUFBQSxjO0FBbUlTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9naXRlcy9baWRdLjIyYTBhMDYzMDQzY2YxNzc2MDg0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIFRleHRGaWVsZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBGb3JtSW5mb3NQYWdlcyA9ICh7IGNsYXNzZXMsIHJlZ2lzdGVyLCBnaXRlLCBwcmVsb2FkZWRWYWx1ZXMgfSkgPT4ge1xyXG5cdGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoNzApO1xyXG5cdGNvbnN0IFttZGVzYywgc2V0TWRlc2NdID0gdXNlU3RhdGUoMTYwKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRuYW1lPSdtdGl0bGUnXHJcblx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKDcwIC0gZS50YXJnZXQudmFsdWUubGVuZ3RoKX1cclxuXHRcdFx0XHRsYWJlbD17YE1ldGEgVGl0bGUgLSBQb3NzaWJsZSBkZSBtZXR0cmUgZW4gYXV0b21hdGlxdWUgw6l2ZW50dWVsbGVtZW50IChFbnRyZSA1MCBldCA3MCBjYXJhY3TDqHJlcykgLSAke3RpdGxlfWB9XHJcblx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdG5hbWU9J3ByZXNHaXRlU0VPJ1xyXG5cdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRNZGVzYygxNjAgLSBlLnRhcmdldC52YWx1ZS5sZW5ndGgpfVxyXG5cdFx0XHRcdG11bHRpbGluZVxyXG5cdFx0XHRcdHJvd3M9ezN9XHJcblx0XHRcdFx0bGFiZWw9e2BUZXh0ZSBwb3VyIGxhIHByw6lzZW50YXRpb24gU0VPIGR1IGfDrnRlIHF1aSBhcGFyYWl0cmEgZGFucyBsZXMgU0VSUCBHb29nbGUgKGVudmlyb24gMTUwLTE2MCBjYXJhY3TDqHJlcykgLSAke21kZXNjfWB9XHJcblx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdG5hbWU9J2RldGFpbEdpdGUnXHJcblx0XHRcdFx0bXVsdGlsaW5lXHJcblx0XHRcdFx0cm93cz17M31cclxuXHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdGxhYmVsPSdEZXNjcmlwdGlmIGR1IGfDrnRlIChpZGVtIGNpLWRlc3N1cyBtYWlzIHBvc3NpYmxlIHBsdXMgbG9uZyknXHJcblx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdG5hbWU9J3RleHRlRXh0ZXJpZXVyJ1xyXG5cdFx0XHRcdG11bHRpbGluZVxyXG5cdFx0XHRcdHJvd3M9ezN9XHJcblx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRsYWJlbD1cIlRleHRlIGRlIHByw6lzZW50YXRpb24gZGUgbCdleHRlcmlldXIgZHUgZ8OudGVcIlxyXG5cdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRuYW1lPSdlcXVpcGVtZW50RXh0ZXJpZXVyJ1xyXG5cdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0bGFiZWw9J0VxdWlwZW1lbnQgZXh0w6lyaWV1ciAoc8OpcGFyZXIgbGVzIMOpcXVpcGVtZW50cyBwYXIgdW5lIHZpcmd1bGUgXCIsXCIpLidcclxuXHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuXHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0bmFtZT0ndGV4dGVJbnRlcmlldXInXHJcblx0XHRcdFx0bXVsdGlsaW5lXHJcblx0XHRcdFx0cm93cz17M31cclxuXHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdGxhYmVsPVwiVGV4dGUgZGUgcHLDqXNlbnRhdGlvbiBkZSBsJ2ludGVyaWV1ciBkdSBnw650ZVwiXHJcblx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdG5hbWU9J2VxdWlwZW1lbnRJbnRlcmlldXInXHJcblx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRsYWJlbD0nZXF1aXBlbWVudEludGVyaWV1ciAoc8OpcGFyZXIgbGVzIMOpcXVpcGVtZW50cyBwYXIgdW5lIHZpcmd1bGUgXCIsXCIpLidcclxuXHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuXHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0bmFtZT0ndGV4dGVQaXNjaW5lJ1xyXG5cdFx0XHRcdG11bHRpbGluZVxyXG5cdFx0XHRcdHJvd3M9ezN9XHJcblx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRsYWJlbD0nVGV4dGUgZGUgcHLDqXNlbnRhdGlvbiBkZSBsYSBwaXNjaW5lJ1xyXG5cdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRuYW1lPSdlcXVpcGVtZW50UGlzY2luZSdcclxuXHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdGxhYmVsPSdlcXVpcGVtZW50UGlzY2luZSAoc8OpcGFyZXIgbGVzIMOpcXVpcGVtZW50cyBwYXIgdW5lIHZpcmd1bGUgXCIsXCIpLidcclxuXHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuXHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0bmFtZT0ndGV4dGUnXHJcblx0XHRcdFx0bXVsdGlsaW5lXHJcblx0XHRcdFx0cm93cz17M31cclxuXHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdGxhYmVsPSdUZXh0ZSDDoCBkw6lmaW5pcidcclxuXHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0dHlwZT0nc3VibWl0J1xyXG5cdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRjb2xvcj0ncHJpbWFyeSdcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRWYWxpZGVyIGxlcyBtb2RpZmljYXRpb25zXHJcblx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1JbmZvc1BhZ2VzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9