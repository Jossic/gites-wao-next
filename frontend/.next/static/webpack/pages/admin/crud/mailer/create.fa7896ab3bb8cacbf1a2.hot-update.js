webpackHotUpdate_N_E("pages/admin/crud/mailer/create",{

/***/ "./components/admin/forms/FormCreateMailer.js":
/*!****************************************************!*\
  !*** ./components/admin/forms/FormCreateMailer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _util_quill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../util/quill */ "./util/quill.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var _actions_mailerActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../actions/mailerActions */ "./actions/mailerActions.js");
/* harmony import */ var _HOC_Snackbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../HOC/Snackbar */ "./components/HOC/Snackbar.js");





var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\forms\\FormCreateMailer.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(_c = function _c() {
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











function Alert(props) {
  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    elevation: 6,
    variant: "filled"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }));
}

_c3 = Alert;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(function (theme) {
  return {
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2)
      }
    },
    button: {
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(2),
      width: '100%'
    },
    formControl: {
      margin: theme.spacing(1),
      width: '80%'
    },
    textField: {
      margin: theme.spacing(1),
      width: '80%'
    }
  };
});

var FormCreateMailer = function FormCreateMailer(_ref) {
  _s();

  var snackbarShowMessage = _ref.snackbarShowMessage;
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_12__["getCookie"])('token');
  console.log('snackbarShowMessage->', snackbarShowMessage);
  var classes = useStyles();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_11__["useForm"])({// defaultValues: ,
  }),
      control = _useForm.control,
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit; // const [open, setOpen] = useState(false);


  var handleClose = function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    loading: false,
    success: '',
    error: '',
    message: ''
  }),
      values = _useState[0],
      setValues = _useState[1];

  var success = values.success,
      loading = values.loading,
      error = values.error,
      message = values.message;

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(data);
              setValues(_objectSpread(_objectSpread({}, values), {}, {
                loading: true
              }));
              Object(_actions_mailerActions__WEBPACK_IMPORTED_MODULE_13__["createMailer"])(data, token).then(function (result) {
                console.log('result', result);

                if (result.error) {
                  setValues(_objectSpread(_objectSpread({}, values), {}, {
                    error: result.error
                  })); // setOpen(true);

                  snackbarShowMessage("error");
                } else {
                  setValues(_objectSpread(_objectSpread({}, values), {}, {
                    success: true,
                    loading: false,
                    message: result.message
                  })); // setOpen(true);

                  snackbarShowMessage("".concat(message), 'success');
                  setTimeout(function () {
                    next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/admin/mailer', null, {
                      shallow: true
                    });
                  }, 3000);
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, loading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["CircularProgress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 16
    }
  }), __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
    className: classes.textField,
    inputRef: register,
    name: "nom",
    id: "standard-number",
    label: "Nom",
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
    className: classes.textField,
    inputRef: register,
    name: "description",
    id: "standard-number",
    label: "Description",
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
    className: classes.textField,
    inputRef: register,
    name: "sujet",
    id: "standard-number",
    label: "Sujet",
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["InputLabel"], {
    shrink: true,
    id: "demo-simple-select-placeholder-label-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 6
    }
  }, "\"Corps du mail - Pour ajouter une variable, il faut l'ajouter dans les balises suivantes : $", "Liste des variables disponibles : client, reservation, gite"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_11__["Controller"], {
    style: {
      paddingTop: '30px'
    },
    as: ReactQuill,
    control: control,
    name: "corps",
    theme: "snow",
    placeholder: "Corps du mail ici...",
    modules: _util_quill__WEBPACK_IMPORTED_MODULE_7__["QuillModules"],
    formats: _util_quill__WEBPACK_IMPORTED_MODULE_7__["QuillFormats"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 6
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    direction: "row",
    justify: "center",
    alignItems: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["InputLabel"], {
    shrink: true,
    id: "demo-simple-select-placeholder-label-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 8
    }
  }, "D\xE9clencheur (date)"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_11__["Controller"], {
    control: control,
    name: "declencheur",
    as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Select"], {
      id: "declencheur-select",
      defaultValue: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 10
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ListSubheader"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 11
      }
    }, "Manuel"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
      value: "Envoi manuel",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 11
      }
    }, "Envoi manuel"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ListSubheader"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 11
      }
    }, "Date"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
      value: "7 jours avant arriv\xE9e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 11
      }
    }, "7 jours avant arriv\xE9e"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
      value: "7 jours apr\xE8s le d\xE9part",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 11
      }
    }, "7 jours apr\xE8s le d\xE9part"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ListSubheader"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 11
      }
    }, "Action"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
      value: "\xE0 la validation du contrat",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 11
      }
    }, "\xE0 la validation du contrat"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
      value: "Autre exemple",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 11
      }
    }, "Autre exemple")),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 8
    }
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    direction: "row",
    justify: "center",
    alignItems: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControlLabel"], {
    control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Switch"], {
      inputRef: register // checked={true}
      ,
      name: "actif",
      defaultChecked: true,
      color: "primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 8
      }
    }),
    label: "Actif",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 6
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    type: "submit",
    variant: "contained",
    color: "primary",
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 5
    }
  }, "Cr\xE9er ce mailer")));
};

_s(FormCreateMailer, "zr1a146LZmsHJTvXJhIz7eYGYcM=", false, function () {
  return [useStyles, react_hook_form__WEBPACK_IMPORTED_MODULE_11__["useForm"]];
});

_c4 = FormCreateMailer;
/* harmony default export */ __webpack_exports__["default"] = (_c6 = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(_c5 = Object(_HOC_Snackbar__WEBPACK_IMPORTED_MODULE_14__["withSnackbar"])(FormCreateMailer)));

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "ReactQuill$dynamic");
$RefreshReg$(_c2, "ReactQuill");
$RefreshReg$(_c3, "Alert");
$RefreshReg$(_c4, "FormCreateMailer");
$RefreshReg$(_c5, "%default%$withRouter");
$RefreshReg$(_c6, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9Gb3JtQ3JlYXRlTWFpbGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0UXVpbGwiLCJkeW5hbWljIiwic3NyIiwiQWxlcnQiLCJwcm9wcyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJidXR0b24iLCJtYXJnaW5SaWdodCIsImZvcm1Db250cm9sIiwibWFyZ2luIiwidGV4dEZpZWxkIiwiRm9ybUNyZWF0ZU1haWxlciIsInNuYWNrYmFyU2hvd01lc3NhZ2UiLCJ0b2tlbiIsImdldENvb2tpZSIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIiwidXNlRm9ybSIsImNvbnRyb2wiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNsb3NlIiwiZXZlbnQiLCJyZWFzb24iLCJzZXRPcGVuIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic3VjY2VzcyIsImVycm9yIiwibWVzc2FnZSIsInZhbHVlcyIsInNldFZhbHVlcyIsIm9uU3VibWl0IiwiZGF0YSIsImNyZWF0ZU1haWxlciIsInRoZW4iLCJyZXN1bHQiLCJzZXRUaW1lb3V0IiwiUm91dGVyIiwicHVzaCIsInNoYWxsb3ciLCJzaHJpbmsiLCJwYWRkaW5nVG9wIiwiUXVpbGxNb2R1bGVzIiwiUXVpbGxGb3JtYXRzIiwid2l0aFJvdXRlciIsIndpdGhTbmFja2JhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBY0E7QUFDQSxJQUFNQSxVQUFVLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLGdKQUFOO0FBQUEsQ0FBRCxFQUE4QjtBQUFFQyxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUE7QUFBQSxrQ0FBaEIsNERBQWdCO0FBQUE7QUFBQSxjQUFoQixhQUFnQjtBQUFBO0FBQUEsQ0FB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Z0I7QUEyTVMscUVBQUFtQyw4REFBVSxPQUFDQyxtRUFBWSxDQUFDcEMsZ0JBQUQsQ0FBYixDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9jcnVkL21haWxlci9jcmVhdGUuZmE3ODk2YWIzYmI4Y2FjYmYxYTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0QnV0dG9uLFxyXG5cdENpcmN1bGFyUHJvZ3Jlc3MsXHJcblx0Rm9ybUNvbnRyb2wsXHJcblx0SW5wdXRMYWJlbCxcclxuXHRNZW51SXRlbSxcclxuXHRTZWxlY3QsXHJcblx0U25hY2tiYXIsXHJcblx0U3dpdGNoLFxyXG5cdEZvcm1Db250cm9sTGFiZWwsXHJcblx0VGV4dEZpZWxkLFxyXG5cdEdyaWQsXHJcblx0TGlzdFN1YmhlYWRlcixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmNvbnN0IFJlYWN0UXVpbGwgPSBkeW5hbWljKCgpID0+IGltcG9ydCgncmVhY3QtcXVpbGwnKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5pbXBvcnQgeyBRdWlsbE1vZHVsZXMsIFF1aWxsRm9ybWF0cyB9IGZyb20gJy4uLy4uLy4uL3V0aWwvcXVpbGwnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IE11aUFsZXJ0IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQWxlcnQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgeyBjcmVhdGVNYWlsZXIgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL21haWxlckFjdGlvbnMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgd2l0aFNuYWNrYmFyIH0gZnJvbSAnLi4vLi4vSE9DL1NuYWNrYmFyJztcclxuXHJcbmZ1bmN0aW9uIEFsZXJ0KHByb3BzKSB7XHJcblx0cmV0dXJuIDxNdWlBbGVydCBlbGV2YXRpb249ezZ9IHZhcmlhbnQ9J2ZpbGxlZCcgey4uLnByb3BzfSAvPjtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0cm9vdDoge1xyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdCcmID4gKiArIConOiB7XHJcblx0XHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRidXR0b246IHtcclxuXHRcdG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHR9LFxyXG5cdGZvcm1Db250cm9sOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHR3aWR0aDogJzgwJScsXHJcblx0fSxcclxuXHR0ZXh0RmllbGQ6IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdHdpZHRoOiAnODAlJyxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5jb25zdCBGb3JtQ3JlYXRlTWFpbGVyID0gKHsgc25hY2tiYXJTaG93TWVzc2FnZSB9KSA9PiB7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblx0Y29uc29sZS5sb2coJ3NuYWNrYmFyU2hvd01lc3NhZ2UtPicsIHNuYWNrYmFyU2hvd01lc3NhZ2UpO1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRjb25zdCB7IGNvbnRyb2wsIHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm0oe1xyXG5cdFx0Ly8gZGVmYXVsdFZhbHVlczogLFxyXG5cdH0pO1xyXG5cdC8vIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2xvc2UgPSAoZXZlbnQsIHJlYXNvbikgPT4ge1xyXG5cdFx0aWYgKHJlYXNvbiA9PT0gJ2NsaWNrYXdheScpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNldE9wZW4oZmFsc2UpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0ZXJyb3I6ICcnLFxyXG5cdFx0bWVzc2FnZTogJycsXHJcblx0fSk7XHJcblx0Y29uc3QgeyBzdWNjZXNzLCBsb2FkaW5nLCBlcnJvciwgbWVzc2FnZSB9ID0gdmFsdWVzO1xyXG5cclxuXHRjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChkYXRhKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHRcdGNyZWF0ZU1haWxlcihkYXRhLCB0b2tlbikudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZXN1bHQnLCByZXN1bHQpO1xyXG5cdFx0XHRpZiAocmVzdWx0LmVycm9yKSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogcmVzdWx0LmVycm9yIH0pO1xyXG5cdFx0XHRcdC8vIHNldE9wZW4odHJ1ZSk7XHJcblx0XHRcdFx0c25hY2tiYXJTaG93TWVzc2FnZShgZXJyb3JgKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogcmVzdWx0Lm1lc3NhZ2UsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ly8gc2V0T3Blbih0cnVlKTtcclxuXHRcdFx0XHRzbmFja2JhclNob3dNZXNzYWdlKGAke21lc3NhZ2V9YCwgJ3N1Y2Nlc3MnKTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFJvdXRlci5wdXNoKCcvYWRtaW4vbWFpbGVyJywgbnVsbCwgeyBzaGFsbG93OiB0cnVlIH0pO1xyXG5cdFx0XHRcdH0sIDMwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e2xvYWRpbmcgJiYgPENpcmN1bGFyUHJvZ3Jlc3MgLz59XHJcblx0XHRcdHsvKiB7c3VjY2VzcyAmJiAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcblx0XHRcdFx0XHQ8U25hY2tiYXJcclxuXHRcdFx0XHRcdFx0b3Blbj17b3Blbn1cclxuXHRcdFx0XHRcdFx0YXV0b0hpZGVEdXJhdGlvbj17NjAwMH1cclxuXHRcdFx0XHRcdFx0b25DbG9zZT17aGFuZGxlQ2xvc2V9PlxyXG5cdFx0XHRcdFx0XHQ8QWxlcnQgb25DbG9zZT17aGFuZGxlQ2xvc2V9IHNldmVyaXR5PSdzdWNjZXNzJz5cclxuXHRcdFx0XHRcdFx0XHR7bWVzc2FnZX1cclxuXHRcdFx0XHRcdFx0PC9BbGVydD5cclxuXHRcdFx0XHRcdDwvU25hY2tiYXI+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCl9XHJcblx0XHRcdHtlcnJvciAmJiAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcblx0XHRcdFx0XHQ8U25hY2tiYXJcclxuXHRcdFx0XHRcdFx0b3Blbj17b3Blbn1cclxuXHRcdFx0XHRcdFx0YXV0b0hpZGVEdXJhdGlvbj17NjAwMH1cclxuXHRcdFx0XHRcdFx0b25DbG9zZT17aGFuZGxlQ2xvc2V9PlxyXG5cdFx0XHRcdFx0XHQ8QWxlcnQgb25DbG9zZT17aGFuZGxlQ2xvc2V9IHNldmVyaXR5PSdlcnJvcic+XHJcblx0XHRcdFx0XHRcdFx0e2Vycm9yfVxyXG5cdFx0XHRcdFx0XHQ8L0FsZXJ0PlxyXG5cdFx0XHRcdFx0PC9TbmFja2Jhcj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KX0gKi99XHJcblx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0bmFtZT0nbm9tJ1xyXG5cdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdGxhYmVsPSdOb20nXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSdkZXNjcmlwdGlvbidcclxuXHRcdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0XHRsYWJlbD0nRGVzY3JpcHRpb24nXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSdzdWpldCdcclxuXHRcdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0XHRsYWJlbD0nU3VqZXQnXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdDxJbnB1dExhYmVsXHJcblx0XHRcdFx0XHRcdHNocmlua1xyXG5cdFx0XHRcdFx0XHRpZD0nZGVtby1zaW1wbGUtc2VsZWN0LXBsYWNlaG9sZGVyLWxhYmVsLWxhYmVsJz5cclxuXHRcdFx0XHRcdFx0XCJDb3JwcyBkdSBtYWlsIC0gUG91ciBham91dGVyIHVuZSB2YXJpYWJsZSwgaWwgZmF1dFxyXG5cdFx0XHRcdFx0XHRsJ2Fqb3V0ZXIgZGFucyBsZXMgYmFsaXNlcyBzdWl2YW50ZXMgOiAke31cclxuXHRcdFx0XHRcdFx0TGlzdGUgZGVzIHZhcmlhYmxlcyBkaXNwb25pYmxlcyA6IGNsaWVudCwgcmVzZXJ2YXRpb24sXHJcblx0XHRcdFx0XHRcdGdpdGVcclxuXHRcdFx0XHRcdDwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IHBhZGRpbmdUb3A6ICczMHB4JyB9fVxyXG5cdFx0XHRcdFx0XHRhcz17UmVhY3RRdWlsbH1cclxuXHRcdFx0XHRcdFx0Y29udHJvbD17Y29udHJvbH1cclxuXHRcdFx0XHRcdFx0bmFtZT0nY29ycHMnXHJcblx0XHRcdFx0XHRcdHRoZW1lPSdzbm93J1xyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nQ29ycHMgZHUgbWFpbCBpY2kuLi4nXHJcblx0XHRcdFx0XHRcdG1vZHVsZXM9e1F1aWxsTW9kdWxlc31cclxuXHRcdFx0XHRcdFx0Zm9ybWF0cz17UXVpbGxGb3JtYXRzfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cclxuXHRcdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdFx0Y29udGFpbmVyXHJcblx0XHRcdFx0XHRkaXJlY3Rpb249J3JvdydcclxuXHRcdFx0XHRcdGp1c3RpZnk9J2NlbnRlcidcclxuXHRcdFx0XHRcdGFsaWduSXRlbXM9J2NlbnRlcic+XHJcblx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxyXG5cdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdFx0XHQ8SW5wdXRMYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0c2hyaW5rXHJcblx0XHRcdFx0XHRcdFx0XHRpZD0nZGVtby1zaW1wbGUtc2VsZWN0LXBsYWNlaG9sZGVyLWxhYmVsLWxhYmVsJz5cclxuXHRcdFx0XHRcdFx0XHRcdETDqWNsZW5jaGV1ciAoZGF0ZSlcclxuXHRcdFx0XHRcdFx0XHQ8L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PENvbnRyb2xsZXJcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPSdkZWNsZW5jaGV1cidcclxuXHRcdFx0XHRcdFx0XHRcdGFzPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PFNlbGVjdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkPSdkZWNsZW5jaGV1ci1zZWxlY3QnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPScnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaXN0U3ViaGVhZGVyPk1hbnVlbDwvTGlzdFN1YmhlYWRlcj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J0Vudm9pIG1hbnVlbCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRFbnZvaSBtYW51ZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaXN0U3ViaGVhZGVyPkRhdGU8L0xpc3RTdWJoZWFkZXI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSc3IGpvdXJzIGF2YW50IGFycml2w6llJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcgam91cnMgYXZhbnQgYXJyaXbDqWVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nNyBqb3VycyBhcHLDqHMgbGUgZMOpcGFydCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ3IGpvdXJzIGFwcsOocyBsZSBkw6lwYXJ0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGlzdFN1YmhlYWRlcj5BY3Rpb248L0xpc3RTdWJoZWFkZXI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSfDoCBsYSB2YWxpZGF0aW9uIGR1IGNvbnRyYXQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0w6AgbGEgdmFsaWRhdGlvbiBkdSBjb250cmF0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J0F1dHJlIGV4ZW1wbGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QXV0cmUgZXhlbXBsZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvU2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkXHJcblx0XHRcdFx0XHRjb250YWluZXJcclxuXHRcdFx0XHRcdGRpcmVjdGlvbj0ncm93J1xyXG5cdFx0XHRcdFx0anVzdGlmeT0nY2VudGVyJ1xyXG5cdFx0XHRcdFx0YWxpZ25JdGVtcz0nY2VudGVyJz5cclxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsXHJcblx0XHRcdFx0XHRcdGNvbnRyb2w9e1xyXG5cdFx0XHRcdFx0XHRcdDxTd2l0Y2hcclxuXHRcdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdC8vIGNoZWNrZWQ9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPSdhY3RpZidcclxuXHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRDaGVja2VkXHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcj0ncHJpbWFyeSdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGxhYmVsPSdBY3RpZidcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdHR5cGU9J3N1Ym1pdCdcclxuXHRcdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRcdGNvbG9yPSdwcmltYXJ5J1xyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0XHRDcsOpZXIgY2UgbWFpbGVyXHJcblx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKHdpdGhTbmFja2JhcihGb3JtQ3JlYXRlTWFpbGVyKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=