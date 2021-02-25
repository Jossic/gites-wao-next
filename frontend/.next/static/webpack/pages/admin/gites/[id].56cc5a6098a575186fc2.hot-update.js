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
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _util_quill__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../util/quill */ "./util/quill.js");
/* harmony import */ var _HOC_Snackbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../HOC/Snackbar */ "./components/HOC/Snackbar.js");
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../actions/giteActions */ "./actions/giteActions.js");



var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\forms\\gites\\FormInfosContrat.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(_c = function _c() {
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
      preloadedValues = _ref.preloadedValues,
      router = _ref.router;
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_7__["getCookie"])('token');
  var classes = useStyles();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"])({
    defaultValues: preloadedValues
  }),
      control = _useForm.control,
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data.ctPrincipCarac = editor.getContents();
              data.ctSituLog = editor.getContents();
              data.ctDescLog = editor.getContents();
              console.log('data vaut', data);
              setLoading(true);
              Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_11__["updateGite"])(data, router.query.id, token).then(function (result) {
                if (result.error) {
                  setLoading(false);
                  snackbarShowMessage("".concat(result.error));
                } else {
                  setLoading(false);
                  snackbarShowMessage("".concat(result.message), 'success');
                }
              });

            case 6:
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
      lineNumber: 66,
      columnNumber: 16
    }
  }), __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
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
      lineNumber: 70,
      columnNumber: 6
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["InputLabel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
    modules: _util_quill__WEBPACK_IMPORTED_MODULE_9__["QuillModules"],
    formats: _util_quill__WEBPACK_IMPORTED_MODULE_9__["QuillFormats"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 6
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["InputLabel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 6
    }
  }, "Partie situation du logement"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["Controller"], {
    control: control,
    name: "ctSituLog",
    render: function render(_ref3) {
      var _onChange = _ref3.onChange,
          onBlur = _ref3.onBlur,
          value = _ref3.value;
      return __jsx(ReactQuill, {
        theme: "snow",
        onChange: function onChange(description, delta, source, editor) {
          return _onChange(ctSituLog);
        },
        value: value || '',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 8
        }
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 6
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["InputLabel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
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
    modules: _util_quill__WEBPACK_IMPORTED_MODULE_9__["QuillModules"],
    formats: _util_quill__WEBPACK_IMPORTED_MODULE_9__["QuillFormats"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
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
      lineNumber: 138,
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
      lineNumber: 149,
      columnNumber: 5
    }
  }, "Valider les modifications")));
};

_s(FormInfosContrat, "NSb/IjwBRs0Z2pwsvTKodBJavPg=", false, function () {
  return [useStyles, react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"]];
});

_c3 = FormInfosContrat;
/* harmony default export */ __webpack_exports__["default"] = (_c5 = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(_c4 = Object(_HOC_Snackbar__WEBPACK_IMPORTED_MODULE_10__["withSnackbar"])(FormInfosContrat)));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9naXRlcy9Gb3JtSW5mb3NDb250cmF0LmpzIl0sIm5hbWVzIjpbIlJlYWN0UXVpbGwiLCJkeW5hbWljIiwic3NyIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwiYnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwibWFyZ2luVG9wIiwiZm9ybUNvbnRyb2wiLCJtYXJnaW4iLCJ0ZXh0RmllbGQiLCJGb3JtSW5mb3NDb250cmF0Iiwic25hY2tiYXJTaG93TWVzc2FnZSIsInByZWxvYWRlZFZhbHVlcyIsInJvdXRlciIsInRva2VuIiwiZ2V0Q29va2llIiwiY2xhc3NlcyIsInVzZUZvcm0iLCJkZWZhdWx0VmFsdWVzIiwiY29udHJvbCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm9uU3VibWl0IiwiZGF0YSIsImN0UHJpbmNpcENhcmFjIiwiZWRpdG9yIiwiZ2V0Q29udGVudHMiLCJjdFNpdHVMb2ciLCJjdERlc2NMb2ciLCJjb25zb2xlIiwibG9nIiwidXBkYXRlR2l0ZSIsInF1ZXJ5IiwiaWQiLCJ0aGVuIiwicmVzdWx0IiwiZXJyb3IiLCJtZXNzYWdlIiwic2hyaW5rIiwicGFkZGluZ1RvcCIsIm1pbkhlaWdodCIsIlF1aWxsTW9kdWxlcyIsIlF1aWxsRm9ybWF0cyIsIm9uQ2hhbmdlIiwib25CbHVyIiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsImRlbHRhIiwic291cmNlIiwid2l0aFJvdXRlciIsIndpdGhTbmFja2JhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxVQUFVLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLGdKQUFOO0FBQUEs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LE9BQU8sQ0FBQ1AsU0FEcEI7QUFFQyxZQUFRLEVBQUVXLFFBRlg7QUFHQyxRQUFJLEVBQUMsZ0JBSE47QUFJQyxNQUFFLEVBQUMsaUJBSko7QUFLQyxTQUFLLEVBQUMseUVBTFA7QUFNQyxtQkFBZSxFQUFFO0FBQ2hCcUIsWUFBTSxFQUFFO0FBRFEsS0FObEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRFRCxFQWlGQyxNQUFDLHdEQUFEO0FBQ0MsUUFBSSxFQUFDLFFBRE47QUFFQyxXQUFPLEVBQUMsV0FGVDtBQUdDLFNBQUssRUFBQyxTQUhQO0FBSUMsYUFBUyxFQUFFekIsT0FBTyxDQUFDYixNQUpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQWpGRCxDQUhELENBREQ7QUErRkEsQ0F6SEQ7O0dBQU1PLGdCO1VBRVdaLFMsRUFDNEJtQix1RDs7O01BSHZDUCxnQjtBQTJIUyxxRUFBQTBDLDhEQUFVLE9BQUNDLG1FQUFZLENBQUMzQyxnQkFBRCxDQUFiLENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2dpdGVzL1tpZF0uNTZjYzVhNjA5OGE1NzUxODZmYzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0QnV0dG9uLFxyXG5cdENpcmN1bGFyUHJvZ3Jlc3MsXHJcblx0Rm9ybUNvbnRyb2wsXHJcblx0SW5wdXRMYWJlbCxcclxuXHRUZXh0RmllbGQsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuY29uc3QgUmVhY3RRdWlsbCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1xdWlsbCcpLCB7IHNzcjogZmFsc2UgfSk7XHJcbmltcG9ydCB7IFF1aWxsTW9kdWxlcywgUXVpbGxGb3JtYXRzIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9xdWlsbCc7XHJcbmltcG9ydCB7IHdpdGhTbmFja2JhciB9IGZyb20gJy4uLy4uLy4uL0hPQy9TbmFja2Jhcic7XHJcbmltcG9ydCB7IHVwZGF0ZUdpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0fSxcclxuXHRidXR0b246IHtcclxuXHRcdG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHR9LFxyXG5cdGZvcm1Db250cm9sOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdH0sXHJcblx0dGV4dEZpZWxkOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEZvcm1JbmZvc0NvbnRyYXQgPSAoeyBzbmFja2JhclNob3dNZXNzYWdlLCBwcmVsb2FkZWRWYWx1ZXMsIHJvdXRlciB9KSA9PiB7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IHsgY29udHJvbCwgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybSh7XHJcblx0XHRkZWZhdWx0VmFsdWVzOiBwcmVsb2FkZWRWYWx1ZXMsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG5cdFx0ZGF0YS5jdFByaW5jaXBDYXJhYyA9IGVkaXRvci5nZXRDb250ZW50cygpO1xyXG5cdFx0ZGF0YS5jdFNpdHVMb2cgPSBlZGl0b3IuZ2V0Q29udGVudHMoKTtcclxuXHRcdGRhdGEuY3REZXNjTG9nID0gZWRpdG9yLmdldENvbnRlbnRzKCk7XHJcblx0XHRjb25zb2xlLmxvZygnZGF0YSB2YXV0JywgZGF0YSk7XHJcblx0XHRzZXRMb2FkaW5nKHRydWUpO1xyXG5cdFx0dXBkYXRlR2l0ZShkYXRhLCByb3V0ZXIucXVlcnkuaWQsIHRva2VuKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0aWYgKHJlc3VsdC5lcnJvcikge1xyXG5cdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xyXG5cdFx0XHRcdHNuYWNrYmFyU2hvd01lc3NhZ2UoYCR7cmVzdWx0LmVycm9yfWApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xyXG5cdFx0XHRcdHNuYWNrYmFyU2hvd01lc3NhZ2UoYCR7cmVzdWx0Lm1lc3NhZ2V9YCwgJ3N1Y2Nlc3MnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHtsb2FkaW5nICYmIDxDaXJjdWxhclByb2dyZXNzIC8+fVxyXG5cclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG5cdFx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdG5hbWU9J2N0RGVzaWduYXRpb25UaXRyZSdcclxuXHRcdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdFx0bGFiZWw9J1ByZW1pw6hyZSBsaWduZSBkZSBsYSBkw6lzaWduYXRpb24gZGVzIGxpZXV4J1xyXG5cdFx0XHRcdFx0XHRtdWx0aWxpbmVcclxuXHRcdFx0XHRcdFx0cm93cz17Mn1cclxuXHRcdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0PElucHV0TGFiZWw+XHJcblx0XHRcdFx0XHRcdFBhcnRpZSBwcmluY2lwYWxlcyBjYXJhY3TDqXJpc3RpcXVlcyBkZSBsYSBzw6lnaW5hdGlvbiBkZXNcclxuXHRcdFx0XHRcdFx0bGlldXhcclxuXHRcdFx0XHRcdDwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IHBhZGRpbmdUb3A6ICc2MHB4JywgbWluSGVpZ2h0OiAnMzAwcHgnIH19XHJcblx0XHRcdFx0XHRcdGFzPXtSZWFjdFF1aWxsfVxyXG5cdFx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0XHRuYW1lPSdjdFByaW5jaXBDYXJhYydcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0NvcnBzIGR1IG1haWwgaWNpLi4uJ1xyXG5cdFx0XHRcdFx0XHRtb2R1bGVzPXtRdWlsbE1vZHVsZXN9XHJcblx0XHRcdFx0XHRcdGZvcm1hdHM9e1F1aWxsRm9ybWF0c31cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdDxJbnB1dExhYmVsPlBhcnRpZSBzaXR1YXRpb24gZHUgbG9nZW1lbnQ8L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0XHRuYW1lPSdjdFNpdHVMb2cnXHJcblx0XHRcdFx0XHRcdHJlbmRlcj17KHsgb25DaGFuZ2UsIG9uQmx1ciwgdmFsdWUgfSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxSZWFjdFF1aWxsXHJcblx0XHRcdFx0XHRcdFx0XHR0aGVtZT0nc25vdydcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWx0YSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0c291cmNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRlZGl0b3JcclxuXHRcdFx0XHRcdFx0XHRcdCkgPT4gb25DaGFuZ2UoY3RTaXR1TG9nKX1cclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt2YWx1ZSB8fCAnJ31cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0XHR7LyogPENvbnRyb2xsZXJcclxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgcGFkZGluZ1RvcDogJzYwcHgnLCBtaW5IZWlnaHQ6ICczMDBweCcgfX1cclxuXHRcdFx0XHRcdFx0YXM9e1JlYWN0UXVpbGx9XHJcblx0XHRcdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0XHRcdG5hbWU9J2N0U2l0dUxvZydcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0NvcnBzIGR1IG1haWwgaWNpLi4uJ1xyXG5cdFx0XHRcdFx0XHRtb2R1bGVzPXtRdWlsbE1vZHVsZXN9XHJcblx0XHRcdFx0XHRcdGZvcm1hdHM9e1F1aWxsRm9ybWF0c31cclxuXHRcdFx0XHRcdC8+ICovfVxyXG5cdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHQ8SW5wdXRMYWJlbD5QYXJ0aWUgZGVzY3JpcHRpZiBkdSBsb2dlbWVudCA8L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBwYWRkaW5nVG9wOiAnNjBweCcsIG1pbkhlaWdodDogJzMwMHB4JyB9fVxyXG5cdFx0XHRcdFx0XHRhcz17UmVhY3RRdWlsbH1cclxuXHRcdFx0XHRcdFx0Y29udHJvbD17Y29udHJvbH1cclxuXHRcdFx0XHRcdFx0bmFtZT0nY3REZXNjTG9nJ1xyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nQ29ycHMgZHUgbWFpbCBpY2kuLi4nXHJcblx0XHRcdFx0XHRcdG1vZHVsZXM9e1F1aWxsTW9kdWxlc31cclxuXHRcdFx0XHRcdFx0Zm9ybWF0cz17UXVpbGxGb3JtYXRzfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSduYkttRGVMYU1haXNvbidcclxuXHRcdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0XHRsYWJlbD0nTm9tYnJlIGRlIGttIMOgIHBhcnRpciBkZSBsYSBtYWlzb24gcG91ciBsYSBwYXJ0aWUgZHVyw6llIGRlIGxhIGxvYydcclxuXHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdHR5cGU9J3N1Ym1pdCdcclxuXHRcdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRcdGNvbG9yPSdwcmltYXJ5J1xyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0XHRWYWxpZGVyIGxlcyBtb2RpZmljYXRpb25zXHJcblx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKHdpdGhTbmFja2JhcihGb3JtSW5mb3NDb250cmF0KSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=