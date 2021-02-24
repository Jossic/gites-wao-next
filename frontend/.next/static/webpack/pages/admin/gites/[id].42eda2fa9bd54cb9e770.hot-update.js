webpackHotUpdate_N_E("pages/admin/gites/[id]",{

/***/ "./components/admin/forms/gites/FormInfosContrat.js":
/*!**********************************************************!*\
  !*** ./components/admin/forms/gites/FormInfosContrat.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _actions_reservationActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../actions/reservationActions */ "./actions/reservationActions.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _util_quill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../util/quill */ "./util/quill.js");
/* harmony import */ var _HOC_Snackbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../HOC/Snackbar */ "./components/HOC/Snackbar.js");



var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\forms\\gites\\FormInfosContrat.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-quill */ "./node_modules/react-quill/lib/index.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-quill */ "./node_modules/react-quill/lib/index.js")];
    },
    modules: ['react-quill']
  }
});
_c2 = ReactQuill;


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    root: {
      width: '100%'
    },
    button: {
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(2),
      width: '100%'
    },
    formControl: {
      margin: theme.spacing(1),
      width: '100%'
    },
    textField: {
      margin: theme.spacing(1),
      width: '100%'
    }
  };
});

var FormInfosContrat = function FormInfosContrat(_ref) {
  _s();

  var snackbarShowMessage = _ref.snackbarShowMessage,
      preloadedValues = _ref.preloadedValues;
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_8__["getCookie"])('token');
  var classes = useStyles();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"])({
    defaultValues: preloadedValues
  }),
      control = _useForm.control,
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    heureArrivee: 'à partir de 17h',
    heureDepart: 'à partir de 17h'
  }),
      values = _useState[0],
      setValues = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(data);
              setLoading(true);
              updateGite(data, router.query.id, token).then(function (result) {
                if (result.error) {
                  setLoading(false);
                  snackbarShowMessage("".concat(result.error));
                } else {
                  setLoading(false);
                  snackbarShowMessage("".concat(result.message), 'success');
                }
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, loading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CircularProgress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 16
    }
  }), __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    inputRef: register,
    name: "ctDesignationTitre",
    id: "standard-number",
    label: "Premi\xE8re ligne de la d\xE9signation des lieux",
    multiline: true,
    rows: 2,
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 6
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["InputLabel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 6
    }
  }, "Partie principales caract\xE9ristiques de la s\xE9gination des lieux"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["Controller"], {
    style: {
      paddingTop: '60px',
      minHeight: '300px'
    },
    as: ReactQuill,
    control: control,
    name: "ctPrincipCarac",
    placeholder: "Corps du mail ici...",
    modules: _util_quill__WEBPACK_IMPORTED_MODULE_10__["QuillModules"],
    formats: _util_quill__WEBPACK_IMPORTED_MODULE_10__["QuillFormats"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 6
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["InputLabel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 6
    }
  }, "Partie situation du logement"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["Controller"], {
    style: {
      paddingTop: '60px',
      minHeight: '300px'
    },
    as: ReactQuill,
    control: control,
    name: "ctSituLog",
    placeholder: "Corps du mail ici...",
    modules: _util_quill__WEBPACK_IMPORTED_MODULE_10__["QuillModules"],
    formats: _util_quill__WEBPACK_IMPORTED_MODULE_10__["QuillFormats"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 6
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["InputLabel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 6
    }
  }, "Partie descriptif du logement "), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["Controller"], {
    style: {
      paddingTop: '60px',
      minHeight: '300px'
    },
    as: ReactQuill,
    control: control,
    name: "ctDescLog",
    placeholder: "Corps du mail ici...",
    modules: _util_quill__WEBPACK_IMPORTED_MODULE_10__["QuillModules"],
    formats: _util_quill__WEBPACK_IMPORTED_MODULE_10__["QuillFormats"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 6
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    className: classes.textField,
    inputRef: register,
    name: "nbKmDeLaMaison",
    id: "standard-number",
    label: "Nombre de km \xE0 partir de la maison pour la partie dur\xE9e de la loc",
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "submit",
    variant: "contained",
    color: "primary",
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 5
    }
  }, "Valider les modifications")));
};

_s(FormInfosContrat, "X9v0TUvnuGOOfAP3pc0pfeAnI+Q=", false, function () {
  return [useStyles, react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"]];
});

_c3 = FormInfosContrat;
/* harmony default export */ __webpack_exports__["default"] = (_c5 = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(_c4 = Object(_HOC_Snackbar__WEBPACK_IMPORTED_MODULE_11__["withSnackbar"])(FormInfosContrat)));

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "ReactQuill$dynamic");
$RefreshReg$(_c2, "ReactQuill");
$RefreshReg$(_c3, "FormInfosContrat");
$RefreshReg$(_c4, "%default%$withRouter");
$RefreshReg$(_c5, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9naXRlcy9Gb3JtSW5mb3NDb250cmF0LmpzIl0sIm5hbWVzIjpbIlJlYWN0UXVpbGwiLCJkeW5hbWljIiwic3NyIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwiYnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwibWFyZ2luVG9wIiwiZm9ybUNvbnRyb2wiLCJtYXJnaW4iLCJ0ZXh0RmllbGQiLCJGb3JtSW5mb3NDb250cmF0Iiwic25hY2tiYXJTaG93TWVzc2FnZSIsInByZWxvYWRlZFZhbHVlcyIsInRva2VuIiwiZ2V0Q29va2llIiwiY2xhc3NlcyIsInVzZUZvcm0iLCJkZWZhdWx0VmFsdWVzIiwiY29udHJvbCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwidXNlU3RhdGUiLCJoZXVyZUFycml2ZWUiLCJoZXVyZURlcGFydCIsInZhbHVlcyIsInNldFZhbHVlcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZUdpdGUiLCJyb3V0ZXIiLCJxdWVyeSIsImlkIiwidGhlbiIsInJlc3VsdCIsImVycm9yIiwibWVzc2FnZSIsInNocmluayIsInBhZGRpbmdUb3AiLCJtaW5IZWlnaHQiLCJRdWlsbE1vZHVsZXMiLCJRdWlsbEZvcm1hdHMiLCJ3aXRoUm91dGVyIiwid2l0aFNuYWNrYmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsVUFBVSxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSxnSkFBTjtBQUFBLENBQUQsRUFBOEI7QUFBRUMsS0FBRyxFQUFFLEtBQVA7QUFBQTtBQUFBO0FBQUEsa0NBQWhCLDREQUFnQjtBQUFBO0FB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QUFBQTtBQUFBLGlDQWhFRCxDQUhELENBREQ7QUE4RUEsQ0ExR0Q7O0dBQU1PLGdCO1VBRVdaLFMsRUFDNEJrQix1RDs7O01BSHZDTixnQjtBQTRHUyxxRUFBQW1DLDhEQUFVLE9BQUNDLG1FQUFZLENBQUNwQyxnQkFBRCxDQUFiLENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2dpdGVzL1tpZF0uNDJlZGEyZmE5YmQ1NGNiOWU3NzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0QnV0dG9uLFxyXG5cdENpcmN1bGFyUHJvZ3Jlc3MsXHJcblx0Rm9ybUNvbnRyb2wsXHJcblx0SW5wdXRMYWJlbCxcclxuXHRUZXh0RmllbGQsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgeyB1cGRhdGVSZXNlcnZhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL2FjdGlvbnMvcmVzZXJ2YXRpb25BY3Rpb25zJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmNvbnN0IFJlYWN0UXVpbGwgPSBkeW5hbWljKCgpID0+IGltcG9ydCgncmVhY3QtcXVpbGwnKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5pbXBvcnQgeyBRdWlsbE1vZHVsZXMsIFF1aWxsRm9ybWF0cyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvcXVpbGwnO1xyXG5pbXBvcnQgeyB3aXRoU25hY2tiYXIgfSBmcm9tICcuLi8uLi8uLi9IT0MvU25hY2tiYXInO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0cm9vdDoge1xyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHR9LFxyXG5cdGJ1dHRvbjoge1xyXG5cdFx0bWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdH0sXHJcblx0Zm9ybUNvbnRyb2w6IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0fSxcclxuXHR0ZXh0RmllbGQ6IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0fSxcclxufSkpO1xyXG5cclxuY29uc3QgRm9ybUluZm9zQ29udHJhdCA9ICh7IHNuYWNrYmFyU2hvd01lc3NhZ2UsIHByZWxvYWRlZFZhbHVlcyB9KSA9PiB7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IHsgY29udHJvbCwgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybSh7XHJcblx0XHRkZWZhdWx0VmFsdWVzOiBwcmVsb2FkZWRWYWx1ZXMsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRoZXVyZUFycml2ZWU6ICfDoCBwYXJ0aXIgZGUgMTdoJyxcclxuXHRcdGhldXJlRGVwYXJ0OiAnw6AgcGFydGlyIGRlIDE3aCcsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRzZXRMb2FkaW5nKHRydWUpO1xyXG5cdFx0dXBkYXRlR2l0ZShkYXRhLCByb3V0ZXIucXVlcnkuaWQsIHRva2VuKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0aWYgKHJlc3VsdC5lcnJvcikge1xyXG5cdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xyXG5cdFx0XHRcdHNuYWNrYmFyU2hvd01lc3NhZ2UoYCR7cmVzdWx0LmVycm9yfWApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xyXG5cdFx0XHRcdHNuYWNrYmFyU2hvd01lc3NhZ2UoYCR7cmVzdWx0Lm1lc3NhZ2V9YCwgJ3N1Y2Nlc3MnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHtsb2FkaW5nICYmIDxDaXJjdWxhclByb2dyZXNzIC8+fVxyXG5cclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG5cdFx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdG5hbWU9J2N0RGVzaWduYXRpb25UaXRyZSdcclxuXHRcdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdFx0bGFiZWw9J1ByZW1pw6hyZSBsaWduZSBkZSBsYSBkw6lzaWduYXRpb24gZGVzIGxpZXV4J1xyXG5cdFx0XHRcdFx0XHRtdWx0aWxpbmVcclxuXHRcdFx0XHRcdFx0cm93cz17Mn1cclxuXHRcdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0PElucHV0TGFiZWw+XHJcblx0XHRcdFx0XHRcdFBhcnRpZSBwcmluY2lwYWxlcyBjYXJhY3TDqXJpc3RpcXVlcyBkZSBsYSBzw6lnaW5hdGlvbiBkZXNcclxuXHRcdFx0XHRcdFx0bGlldXhcclxuXHRcdFx0XHRcdDwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IHBhZGRpbmdUb3A6ICc2MHB4JywgbWluSGVpZ2h0OiAnMzAwcHgnIH19XHJcblx0XHRcdFx0XHRcdGFzPXtSZWFjdFF1aWxsfVxyXG5cdFx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0XHRuYW1lPSdjdFByaW5jaXBDYXJhYydcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0NvcnBzIGR1IG1haWwgaWNpLi4uJ1xyXG5cdFx0XHRcdFx0XHRtb2R1bGVzPXtRdWlsbE1vZHVsZXN9XHJcblx0XHRcdFx0XHRcdGZvcm1hdHM9e1F1aWxsRm9ybWF0c31cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdDxJbnB1dExhYmVsPlBhcnRpZSBzaXR1YXRpb24gZHUgbG9nZW1lbnQ8L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBwYWRkaW5nVG9wOiAnNjBweCcsIG1pbkhlaWdodDogJzMwMHB4JyB9fVxyXG5cdFx0XHRcdFx0XHRhcz17UmVhY3RRdWlsbH1cclxuXHRcdFx0XHRcdFx0Y29udHJvbD17Y29udHJvbH1cclxuXHRcdFx0XHRcdFx0bmFtZT0nY3RTaXR1TG9nJ1xyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nQ29ycHMgZHUgbWFpbCBpY2kuLi4nXHJcblx0XHRcdFx0XHRcdG1vZHVsZXM9e1F1aWxsTW9kdWxlc31cclxuXHRcdFx0XHRcdFx0Zm9ybWF0cz17UXVpbGxGb3JtYXRzfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0PElucHV0TGFiZWw+UGFydGllIGRlc2NyaXB0aWYgZHUgbG9nZW1lbnQgPC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdFx0PENvbnRyb2xsZXJcclxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgcGFkZGluZ1RvcDogJzYwcHgnLCBtaW5IZWlnaHQ6ICczMDBweCcgfX1cclxuXHRcdFx0XHRcdFx0YXM9e1JlYWN0UXVpbGx9XHJcblx0XHRcdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0XHRcdG5hbWU9J2N0RGVzY0xvZydcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0NvcnBzIGR1IG1haWwgaWNpLi4uJ1xyXG5cdFx0XHRcdFx0XHRtb2R1bGVzPXtRdWlsbE1vZHVsZXN9XHJcblx0XHRcdFx0XHRcdGZvcm1hdHM9e1F1aWxsRm9ybWF0c31cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0bmFtZT0nbmJLbURlTGFNYWlzb24nXHJcblx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J05vbWJyZSBkZSBrbSDDoCBwYXJ0aXIgZGUgbGEgbWFpc29uIHBvdXIgbGEgcGFydGllIGR1csOpZSBkZSBsYSBsb2MnXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHR0eXBlPSdzdWJtaXQnXHJcblx0XHRcdFx0XHR2YXJpYW50PSdjb250YWluZWQnXHJcblx0XHRcdFx0XHRjb2xvcj0ncHJpbWFyeSdcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0VmFsaWRlciBsZXMgbW9kaWZpY2F0aW9uc1xyXG5cdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcih3aXRoU25hY2tiYXIoRm9ybUluZm9zQ29udHJhdCkpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9