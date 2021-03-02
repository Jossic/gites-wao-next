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
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\forms\\gites\\FormInfosPagesUpdate.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var FormInfosPages = function FormInfosPages(_ref) {
  _s();

  var classes = _ref.classes,
      register = _ref.register,
      preloadedValues = _ref.preloadedValues;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(70),
      title = _useState[0],
      setTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(160),
      mdesc = _useState2[0],
      setMdesc = _useState2[1];

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])({
    equipementExterieur: equipementExterieur.toString()
  }),
      handleSubmit = _useForm.handleSubmit;

  console.log('values', preloadedValues);
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
      lineNumber: 15,
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
      lineNumber: 26,
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
      lineNumber: 39,
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
      lineNumber: 51,
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
      lineNumber: 63,
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
      lineNumber: 73,
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
      lineNumber: 85,
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
      lineNumber: 95,
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
      lineNumber: 107,
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
      lineNumber: 117,
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
      lineNumber: 129,
      columnNumber: 4
    }
  }, "Valider les modifications"));
};

_s(FormInfosPages, "Q+VoRquvNSa8Z9Od4hgrw5tiuY8=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9naXRlcy9Gb3JtSW5mb3NQYWdlc1VwZGF0ZS5qcyJdLCJuYW1lcyI6WyJGb3JtSW5mb3NQYWdlcyIsImNsYXNzZXMiLCJyZWdpc3RlciIsInByZWxvYWRlZFZhbHVlcyIsInVzZVN0YXRlIiwidGl0bGUiLCJzZXRUaXRsZSIsIm1kZXNjIiwic2V0TWRlc2MiLCJ1c2VGb3JtIiwiZXF1aXBlbWVudEV4dGVyaWV1ciIsInRvU3RyaW5nIiwiaGFuZGxlU3VibWl0IiwiY29uc29sZSIsImxvZyIsInRleHRGaWVsZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsInNocmluayIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBNEM7QUFBQTs7QUFBQSxNQUF6Q0MsT0FBeUMsUUFBekNBLE9BQXlDO0FBQUEsTUFBaENDLFFBQWdDLFFBQWhDQSxRQUFnQztBQUFBLE1BQXRCQyxlQUFzQixRQUF0QkEsZUFBc0I7O0FBQUEsa0JBQ3hDQyxzREFBUSxDQUFDLEVBQUQsQ0FEZ0M7QUFBQSxNQUMzREMsS0FEMkQ7QUFBQSxNQUNwREMsUUFEb0Q7O0FBQUEsbUJBRXhDRixzREFBUSxDQUFDLEdBQUQsQ0FGZ0M7QUFBQSxNQUUzREcsS0FGMkQ7QUFBQSxNQUVwREMsUUFGb0Q7O0FBQUEsaUJBR3pDQywrREFBTyxDQUFDO0FBQ2hDQyx1QkFBbUIsRUFBRUEsbUJBQW1CLENBQUNDLFFBQXBCO0FBRFcsR0FBRCxDQUhrQztBQUFBLE1BRzFEQyxZQUgwRCxZQUcxREEsWUFIMEQ7O0FBTWxFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCWCxlQUF0QjtBQUVBLFNBQ0MsbUVBQ0MsTUFBQywyREFBRDtBQUNDLGFBQVMsRUFBRUYsT0FBTyxDQUFDYyxTQURwQjtBQUVD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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQW5IRCxDQUREO0FBNkhBLENBcklEOztHQUFNckIsYztVQUdvQlMsdUQ7OztLQUhwQlQsYztBQXVJU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vZ2l0ZXMvW2lkXS5hMWUwY2RkOTE0YTRkOWMxOTcwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBUZXh0RmllbGQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuXHJcbmNvbnN0IEZvcm1JbmZvc1BhZ2VzID0gKHsgY2xhc3NlcywgcmVnaXN0ZXIsIHByZWxvYWRlZFZhbHVlcyB9KSA9PiB7XHJcblx0Y29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSg3MCk7XHJcblx0Y29uc3QgW21kZXNjLCBzZXRNZGVzY10gPSB1c2VTdGF0ZSgxNjApO1xyXG5cdGNvbnN0IHsgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKHtcclxuXHRcdGVxdWlwZW1lbnRFeHRlcmlldXI6IGVxdWlwZW1lbnRFeHRlcmlldXIudG9TdHJpbmcoKSxcclxuXHR9KTtcclxuXHRjb25zb2xlLmxvZygndmFsdWVzJywgcHJlbG9hZGVkVmFsdWVzKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRuYW1lPSdtdGl0bGUnXHJcblx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKDcwIC0gZS50YXJnZXQudmFsdWUubGVuZ3RoKX1cclxuXHRcdFx0XHRsYWJlbD17YE1ldGEgVGl0bGUgLSBQb3NzaWJsZSBkZSBtZXR0cmUgZW4gYXV0b21hdGlxdWUgw6l2ZW50dWVsbGVtZW50IChFbnRyZSA1MCBldCA3MCBjYXJhY3TDqHJlcykgLSAke3RpdGxlfWB9XHJcblx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdG5hbWU9J3ByZXNHaXRlU0VPJ1xyXG5cdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRNZGVzYygxNjAgLSBlLnRhcmdldC52YWx1ZS5sZW5ndGgpfVxyXG5cdFx0XHRcdG11bHRpbGluZVxyXG5cdFx0XHRcdHJvd3M9ezN9XHJcblx0XHRcdFx0bGFiZWw9e2BUZXh0ZSBwb3VyIGxhIHByw6lzZW50YXRpb24gU0VPIGR1IGfDrnRlIHF1aSBhcGFyYWl0cmEgZGFucyBsZXMgU0VSUCBHb29nbGUgKGVudmlyb24gMTUwLTE2MCBjYXJhY3TDqHJlcykgLSAke21kZXNjfWB9XHJcblx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdG5hbWU9J2RldGFpbEdpdGUnXHJcblx0XHRcdFx0bXVsdGlsaW5lXHJcblx0XHRcdFx0cm93cz17M31cclxuXHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdGxhYmVsPSdEZXNjcmlwdGlmIGR1IGfDrnRlIChpZGVtIGNpLWRlc3N1cyBtYWlzIHBvc3NpYmxlIHBsdXMgbG9uZyknXHJcblx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdG5hbWU9J3RleHRlRXh0ZXJpZXVyJ1xyXG5cdFx0XHRcdG11bHRpbGluZVxyXG5cdFx0XHRcdHJvd3M9ezN9XHJcblx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRsYWJlbD1cIlRleHRlIGRlIHByw6lzZW50YXRpb24gZGUgbCdleHRlcmlldXIgZHUgZ8OudGVcIlxyXG5cdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRuYW1lPSdlcXVpcGVtZW50RXh0ZXJpZXVyJ1xyXG5cdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0bGFiZWw9J0VxdWlwZW1lbnQgZXh0w6lyaWV1ciAoc8OpcGFyZXIgbGVzIMOpcXVpcGVtZW50cyBwYXIgdW5lIHZpcmd1bGUgXCIsXCIpLidcclxuXHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuXHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0bmFtZT0ndGV4dGVJbnRlcmlldXInXHJcblx0XHRcdFx0bXVsdGlsaW5lXHJcblx0XHRcdFx0cm93cz17M31cclxuXHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdGxhYmVsPVwiVGV4dGUgZGUgcHLDqXNlbnRhdGlvbiBkZSBsJ2ludGVyaWV1ciBkdSBnw650ZVwiXHJcblx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdG5hbWU9J2VxdWlwZW1lbnRJbnRlcmlldXInXHJcblx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRsYWJlbD0nZXF1aXBlbWVudEludGVyaWV1ciAoc8OpcGFyZXIgbGVzIMOpcXVpcGVtZW50cyBwYXIgdW5lIHZpcmd1bGUgXCIsXCIpLidcclxuXHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuXHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0bmFtZT0ndGV4dGVQaXNjaW5lJ1xyXG5cdFx0XHRcdG11bHRpbGluZVxyXG5cdFx0XHRcdHJvd3M9ezN9XHJcblx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRsYWJlbD0nVGV4dGUgZGUgcHLDqXNlbnRhdGlvbiBkZSBsYSBwaXNjaW5lJ1xyXG5cdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRuYW1lPSdlcXVpcGVtZW50UGlzY2luZSdcclxuXHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdGxhYmVsPSdlcXVpcGVtZW50UGlzY2luZSAoc8OpcGFyZXIgbGVzIMOpcXVpcGVtZW50cyBwYXIgdW5lIHZpcmd1bGUgXCIsXCIpLidcclxuXHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuXHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0bmFtZT0ndGV4dGUnXHJcblx0XHRcdFx0bXVsdGlsaW5lXHJcblx0XHRcdFx0cm93cz17M31cclxuXHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdGxhYmVsPSdUZXh0ZSDDoCBkw6lmaW5pcidcclxuXHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0dHlwZT0nc3VibWl0J1xyXG5cdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRjb2xvcj0ncHJpbWFyeSdcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRWYWxpZGVyIGxlcyBtb2RpZmljYXRpb25zXHJcblx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1JbmZvc1BhZ2VzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9