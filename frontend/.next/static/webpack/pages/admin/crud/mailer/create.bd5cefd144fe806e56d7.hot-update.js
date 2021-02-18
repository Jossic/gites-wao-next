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
      lineNumber: 28,
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

var FormCreateMailer = function FormCreateMailer() {
  _s();

  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_12__["getCookie"])('token');
  var classes = useStyles();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_11__["useForm"])({// defaultValues: ,
  }),
      control = _useForm.control,
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var handleClose = function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    loading: false,
    success: '',
    error: '',
    message: ''
  }),
      values = _useState2[0],
      setValues = _useState2[1];

  var success = values.success,
      loading = values.loading,
      error = values.error,
      message = values.message;

  var onSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
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
                  }));
                } else {
                  setValues(_objectSpread(_objectSpread({}, values), {}, {
                    success: true,
                    loading: false,
                    message: result.message
                  })); // setTimeout(() => {
                  // 	Router.push('/admin/mailer');
                  // }, 3000);
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
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, loading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["CircularProgress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 16
    }
  }), success && __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Snackbar"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 6
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, message))), error && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Snackbar"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 6
    }
  }, error)), __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
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
      lineNumber: 124,
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
      lineNumber: 134,
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
      lineNumber: 144,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["InputLabel"], {
    shrink: true,
    id: "demo-simple-select-placeholder-label-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
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
      lineNumber: 164,
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
      lineNumber: 176,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["InputLabel"], {
    shrink: true,
    id: "demo-simple-select-placeholder-label-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
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
        lineNumber: 192,
        columnNumber: 10
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ListSubheader"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 11
      }
    }, "Manuel"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
      value: "Envoi manuel",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 11
      }
    }, "Envoi manuel"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ListSubheader"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 11
      }
    }, "Date"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
      value: "7 jours avant arriv\xE9e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 11
      }
    }, "7 jours avant arriv\xE9e"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
      value: "7 jours apr\xE8s le d\xE9part",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 11
      }
    }, "7 jours apr\xE8s le d\xE9part"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ListSubheader"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 11
      }
    }, "Action"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
      value: "\xE0 la validation du contrat",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 11
      }
    }, "\xE0 la validation du contrat"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
      value: "Autre exemple",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 11
      }
    }, "Autre exemple")),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
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
      lineNumber: 219,
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
        lineNumber: 226,
        columnNumber: 8
      }
    }),
    label: "Actif",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
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
      lineNumber: 237,
      columnNumber: 5
    }
  }, "Cr\xE9er ce mailer")));
};

_s(FormCreateMailer, "D0am+AIXScUrcZlsJrUiPBcn2jY=", false, function () {
  return [useStyles, react_hook_form__WEBPACK_IMPORTED_MODULE_11__["useForm"]];
});

_c4 = FormCreateMailer;
/* harmony default export */ __webpack_exports__["default"] = (_c5 = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(FormCreateMailer));

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "ReactQuill$dynamic");
$RefreshReg$(_c2, "ReactQuill");
$RefreshReg$(_c3, "Alert");
$RefreshReg$(_c4, "FormCreateMailer");
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9Gb3JtQ3JlYXRlTWFpbGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0UXVpbGwiLCJkeW5hbWljIiwic3NyIiwiQWxlcnQiLCJwcm9wcyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJidXR0b24iLCJtYXJnaW5SaWdodCIsImZvcm1Db250cm9sIiwibWFyZ2luIiwidGV4dEZpZWxkIiwiRm9ybUNyZWF0ZU1haWxlciIsInRva2VuIiwiZ2V0Q29va2llIiwiY2xhc3NlcyIsInVzZUZvcm0iLCJjb250cm9sIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlQ2xvc2UiLCJldmVudCIsInJlYXNvbiIsImxvYWRpbmciLCJzdWNjZXNzIiwiZXJyb3IiLCJtZXNzYWdlIiwidmFsdWVzIiwic2V0VmFsdWVzIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZU1haWxlciIsInRoZW4iLCJyZXN1bHQiLCJzaHJpbmsiLCJwYWRkaW5nVG9wIiwiUXVpbGxNb2R1bGVzIiwiUXVpbGxGb3JtYXRzIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFjQTtBQUNBLElBQU1BLFVBQVUsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sZ0pBQU47QUFBQSxDQUFELEVBQThCO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQUFoQiw0REFBZ0I7QUFBQTtBQUFBLGNBQWhCLGFBQWdCO0FBQUE7QUFBQSxDQUE5QixDQUExQjtNQUFNRixVO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEQsQ0FoR0QsRUFrSEMsTUFBQyx3REFBRDtBQUNDLFFBQUksRUFBQyxRQUROO0FBRUMsV0FBTyxFQUFDLFdBRlQ7QUFHQyxTQUFLLEVBQUMsU0FIUDtBQUlDLGFBQVMsRUFBRUgsT0FBTyxDQUFDUixNQUpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQWxIRCxDQXhCRCxDQUREO0FBcUpBLENBbE1EOztHQUFNSyxnQjtVQUVXWixTLEVBQzRCZ0Isd0Q7OztNQUh2Q0osZ0I7QUFvTVMscUVBQUErQiw4REFBVSxDQUFDL0IsZ0JBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9tYWlsZXIvY3JlYXRlLmJkNWNlZmQxNDRmZTgwNmU1NmQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG5cdEJ1dHRvbixcclxuXHRDaXJjdWxhclByb2dyZXNzLFxyXG5cdEZvcm1Db250cm9sLFxyXG5cdElucHV0TGFiZWwsXHJcblx0TWVudUl0ZW0sXHJcblx0U2VsZWN0LFxyXG5cdFNuYWNrYmFyLFxyXG5cdFN3aXRjaCxcclxuXHRGb3JtQ29udHJvbExhYmVsLFxyXG5cdFRleHRGaWVsZCxcclxuXHRHcmlkLFxyXG5cdExpc3RTdWJoZWFkZXIsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5jb25zdCBSZWFjdFF1aWxsID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LXF1aWxsJyksIHsgc3NyOiBmYWxzZSB9KTtcclxuaW1wb3J0IHsgUXVpbGxNb2R1bGVzLCBRdWlsbEZvcm1hdHMgfSBmcm9tICcuLi8uLi8uLi91dGlsL3F1aWxsJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBNdWlBbGVydCBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHsgY3JlYXRlTWFpbGVyIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9tYWlsZXJBY3Rpb25zJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5mdW5jdGlvbiBBbGVydChwcm9wcykge1xyXG5cdHJldHVybiA8TXVpQWxlcnQgZWxldmF0aW9uPXs2fSB2YXJpYW50PSdmaWxsZWQnIHsuLi5wcm9wc30gLz47XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHQnJiA+ICogKyAqJzoge1xyXG5cdFx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0YnV0dG9uOiB7XHJcblx0XHRtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0fSxcclxuXHRmb3JtQ29udHJvbDoge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0d2lkdGg6ICc4MCUnLFxyXG5cdH0sXHJcblx0dGV4dEZpZWxkOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHR3aWR0aDogJzgwJScsXHJcblx0fSxcclxufSkpO1xyXG5cclxuY29uc3QgRm9ybUNyZWF0ZU1haWxlciA9ICgpID0+IHtcclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0Y29uc3QgeyBjb250cm9sLCByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKHtcclxuXHRcdC8vIGRlZmF1bHRWYWx1ZXM6ICxcclxuXHR9KTtcclxuXHRjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNsb3NlID0gKGV2ZW50LCByZWFzb24pID0+IHtcclxuXHRcdGlmIChyZWFzb24gPT09ICdjbGlja2F3YXknKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRzZXRPcGVuKGZhbHNlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRzdWNjZXNzOiAnJyxcclxuXHRcdGVycm9yOiAnJyxcclxuXHRcdG1lc3NhZ2U6ICcnLFxyXG5cdH0pO1xyXG5cdGNvbnN0IHsgc3VjY2VzcywgbG9hZGluZywgZXJyb3IsIG1lc3NhZ2UgfSA9IHZhbHVlcztcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUgfSk7XHJcblx0XHRjcmVhdGVNYWlsZXIoZGF0YSwgdG9rZW4pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygncmVzdWx0JywgcmVzdWx0KTtcclxuXHRcdFx0aWYgKHJlc3VsdC5lcnJvcikge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IHJlc3VsdC5lcnJvciB9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogcmVzdWx0Lm1lc3NhZ2UsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ly8gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0Ly8gXHRSb3V0ZXIucHVzaCgnL2FkbWluL21haWxlcicpO1xyXG5cdFx0XHRcdC8vIH0sIDMwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e2xvYWRpbmcgJiYgPENpcmN1bGFyUHJvZ3Jlc3MgLz59XHJcblx0XHRcdHtzdWNjZXNzICYmIChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0XHRcdDxTbmFja2JhclxyXG5cdFx0XHRcdFx0XHRvcGVuPXtvcGVufVxyXG5cdFx0XHRcdFx0XHRhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfVxyXG5cdFx0XHRcdFx0XHRvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XHJcblx0XHRcdFx0XHRcdDxBbGVydCBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gc2V2ZXJpdHk9J3N1Y2Nlc3MnPlxyXG5cdFx0XHRcdFx0XHRcdHttZXNzYWdlfVxyXG5cdFx0XHRcdFx0XHQ8L0FsZXJ0PlxyXG5cdFx0XHRcdFx0PC9TbmFja2Jhcj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KX1cclxuXHRcdFx0e2Vycm9yICYmIChcclxuXHRcdFx0XHQ8U25hY2tiYXJcclxuXHRcdFx0XHRcdG9wZW49e29wZW59XHJcblx0XHRcdFx0XHRhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfVxyXG5cdFx0XHRcdFx0b25DbG9zZT17aGFuZGxlQ2xvc2V9PlxyXG5cdFx0XHRcdFx0PEFsZXJ0IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBzZXZlcml0eT0nZXJyb3InPlxyXG5cdFx0XHRcdFx0XHR7ZXJyb3J9XHJcblx0XHRcdFx0XHQ8L0FsZXJ0PlxyXG5cdFx0XHRcdDwvU25hY2tiYXI+XHJcblx0XHRcdCl9XHJcblx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0bmFtZT0nbm9tJ1xyXG5cdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdGxhYmVsPSdOb20nXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSdkZXNjcmlwdGlvbidcclxuXHRcdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0XHRsYWJlbD0nRGVzY3JpcHRpb24nXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSdzdWpldCdcclxuXHRcdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0XHRsYWJlbD0nU3VqZXQnXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdDxJbnB1dExhYmVsXHJcblx0XHRcdFx0XHRcdHNocmlua1xyXG5cdFx0XHRcdFx0XHRpZD0nZGVtby1zaW1wbGUtc2VsZWN0LXBsYWNlaG9sZGVyLWxhYmVsLWxhYmVsJz5cclxuXHRcdFx0XHRcdFx0XCJDb3JwcyBkdSBtYWlsIC0gUG91ciBham91dGVyIHVuZSB2YXJpYWJsZSwgaWwgZmF1dFxyXG5cdFx0XHRcdFx0XHRsJ2Fqb3V0ZXIgZGFucyBsZXMgYmFsaXNlcyBzdWl2YW50ZXMgOiAke31cclxuXHRcdFx0XHRcdFx0TGlzdGUgZGVzIHZhcmlhYmxlcyBkaXNwb25pYmxlcyA6IGNsaWVudCwgcmVzZXJ2YXRpb24sXHJcblx0XHRcdFx0XHRcdGdpdGVcclxuXHRcdFx0XHRcdDwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IHBhZGRpbmdUb3A6ICczMHB4JyB9fVxyXG5cdFx0XHRcdFx0XHRhcz17UmVhY3RRdWlsbH1cclxuXHRcdFx0XHRcdFx0Y29udHJvbD17Y29udHJvbH1cclxuXHRcdFx0XHRcdFx0bmFtZT0nY29ycHMnXHJcblx0XHRcdFx0XHRcdHRoZW1lPSdzbm93J1xyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nQ29ycHMgZHUgbWFpbCBpY2kuLi4nXHJcblx0XHRcdFx0XHRcdG1vZHVsZXM9e1F1aWxsTW9kdWxlc31cclxuXHRcdFx0XHRcdFx0Zm9ybWF0cz17UXVpbGxGb3JtYXRzfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cclxuXHRcdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdFx0Y29udGFpbmVyXHJcblx0XHRcdFx0XHRkaXJlY3Rpb249J3JvdydcclxuXHRcdFx0XHRcdGp1c3RpZnk9J2NlbnRlcidcclxuXHRcdFx0XHRcdGFsaWduSXRlbXM9J2NlbnRlcic+XHJcblx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxyXG5cdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdFx0XHQ8SW5wdXRMYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0c2hyaW5rXHJcblx0XHRcdFx0XHRcdFx0XHRpZD0nZGVtby1zaW1wbGUtc2VsZWN0LXBsYWNlaG9sZGVyLWxhYmVsLWxhYmVsJz5cclxuXHRcdFx0XHRcdFx0XHRcdETDqWNsZW5jaGV1ciAoZGF0ZSlcclxuXHRcdFx0XHRcdFx0XHQ8L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PENvbnRyb2xsZXJcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPSdkZWNsZW5jaGV1cidcclxuXHRcdFx0XHRcdFx0XHRcdGFzPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PFNlbGVjdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkPSdkZWNsZW5jaGV1ci1zZWxlY3QnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPScnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaXN0U3ViaGVhZGVyPk1hbnVlbDwvTGlzdFN1YmhlYWRlcj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J0Vudm9pIG1hbnVlbCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRFbnZvaSBtYW51ZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaXN0U3ViaGVhZGVyPkRhdGU8L0xpc3RTdWJoZWFkZXI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSc3IGpvdXJzIGF2YW50IGFycml2w6llJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcgam91cnMgYXZhbnQgYXJyaXbDqWVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nNyBqb3VycyBhcHLDqHMgbGUgZMOpcGFydCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ3IGpvdXJzIGFwcsOocyBsZSBkw6lwYXJ0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGlzdFN1YmhlYWRlcj5BY3Rpb248L0xpc3RTdWJoZWFkZXI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSfDoCBsYSB2YWxpZGF0aW9uIGR1IGNvbnRyYXQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0w6AgbGEgdmFsaWRhdGlvbiBkdSBjb250cmF0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J0F1dHJlIGV4ZW1wbGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QXV0cmUgZXhlbXBsZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvU2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkXHJcblx0XHRcdFx0XHRjb250YWluZXJcclxuXHRcdFx0XHRcdGRpcmVjdGlvbj0ncm93J1xyXG5cdFx0XHRcdFx0anVzdGlmeT0nY2VudGVyJ1xyXG5cdFx0XHRcdFx0YWxpZ25JdGVtcz0nY2VudGVyJz5cclxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsXHJcblx0XHRcdFx0XHRcdGNvbnRyb2w9e1xyXG5cdFx0XHRcdFx0XHRcdDxTd2l0Y2hcclxuXHRcdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdC8vIGNoZWNrZWQ9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPSdhY3RpZidcclxuXHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRDaGVja2VkXHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcj0ncHJpbWFyeSdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGxhYmVsPSdBY3RpZidcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdHR5cGU9J3N1Ym1pdCdcclxuXHRcdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRcdGNvbG9yPSdwcmltYXJ5J1xyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0XHRDcsOpZXIgY2UgbWFpbGVyXHJcblx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEZvcm1DcmVhdGVNYWlsZXIpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9