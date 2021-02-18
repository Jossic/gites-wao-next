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
      lineNumber: 26,
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
      width: '80%',
      "float": 'center'
    },
    textField: {
      margin: theme.spacing(1),
      width: '80%'
    }
  };
});

var FormCreateMailer = function FormCreateMailer() {
  _s();

  // const blogFromLS = () => {
  // 	if (typeof window === 'undefined') {
  // 		return false;
  // 	}
  // 	if (localStorage.getItem('blog')) {
  // 		return JSON.parse(localStorage.getItem('blog'));
  // 	} else {
  // 		return false;
  // 	}
  // };
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_12__["getCookie"])('token');
  var classes = useStyles();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_11__["useForm"])({// defaultValues: ,
  }),
      control = _useForm.control,
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit; // const [corps, setCorps] = useState(blogFromLS());


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      corps = _useState[0],
      setCorps = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      open = _useState2[0],
      setOpen = _useState2[1];

  var handleClose = function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    loading: false,
    success: '',
    error: '',
    message: ''
  }),
      values = _useState3[0],
      setValues = _useState3[1];

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
                if (result.error) {
                  setValues(_objectSpread(_objectSpread({}, values), {}, {
                    error: result.error
                  }));
                } else {
                  setValues(_objectSpread(_objectSpread({}, values), {}, {
                    success: true,
                    loading: false,
                    message: result.message
                  }));
                  setBody(''); // setTimeout(() => {
                  // 	Router.push('/admin/gestionDivers/partenaires');
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
      lineNumber: 113,
      columnNumber: 16
    }
  }), success && __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Snackbar"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 6
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, message))), error && __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Snackbar"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 6
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }, error))), __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
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
      lineNumber: 139,
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
      lineNumber: 149,
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
      lineNumber: 159,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["InputLabel"], {
    shrink: true,
    id: "demo-simple-select-placeholder-label-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 6
    }
  }, "Corps du mail"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_11__["Controller"], {
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
      lineNumber: 185,
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
      lineNumber: 196,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["InputLabel"], {
    shrink: true,
    id: "demo-simple-select-placeholder-label-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 8
    }
  }, "D\xE9clencheur (date)"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_11__["Controller"], {
    control: control,
    name: "declencheurDate",
    as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Select"], {
      id: "civilite-select",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 10
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
      value: "7 jours avant arriv\xE9e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 11
      }
    }, "7 jours avant arriv\xE9e"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
      value: "7 jours apr\xE8s le d\xE9part",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 11
      }
    }, "7 jours apr\xE8s le d\xE9part")),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 8
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["InputLabel"], {
    shrink: true,
    id: "demo-simple-select-placeholder-label-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 8
    }
  }, "D\xE9clencheur (action)"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_11__["Controller"], {
    control: control,
    name: "declencheurAction",
    as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Select"], {
      id: "civilite-select",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 10
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
      value: "\xE0 la validation du contrat",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 11
      }
    }, "\xE0 la validation du contrat"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
      value: "Autre exemple",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 11
      }
    }, "Autre exemple")),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
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
      lineNumber: 249,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControlLabel"], {
    control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Switch"], {
      inputRef: register,
      checked: true,
      name: "actif",
      color: "primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 8
      }
    }),
    label: "Actif",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
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
      lineNumber: 266,
      columnNumber: 5
    }
  }, "Valider les modifications")));
};

_s(FormCreateMailer, "nLntEFsp24N35yIRJWLBrHC3EKE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9Gb3JtQ3JlYXRlTWFpbGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0UXVpbGwiLCJkeW5hbWljIiwic3NyIiwiQWxlcnQiLCJwcm9wcyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJidXR0b24iLCJtYXJnaW5SaWdodCIsImZvcm1Db250cm9sIiwibWFyZ2luIiwidGV4dEZpZWxkIiwiRm9ybUNyZWF0ZU1haWxlciIsInRva2VuIiwiZ2V0Q29va2llIiwiY2xhc3NlcyIsInVzZUZvcm0iLCJjb250cm9sIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ1c2VTdGF0ZSIsImNvcnBzIiwic2V0Q29ycHMiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZUNsb3NlIiwiZXZlbnQiLCJyZWFzb24iLCJsb2FkaW5nIiwic3VjY2VzcyIsImVycm9yIiwibWVzc2FnZSIsInZhbHVlcyIsInNldFZhbHVlcyIsIm9uU3VibWl0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVNYWlsZXIiLCJ0aGVuIiwicmVzdWx0Iiwic2V0Qm9keSIsInNocmluayIsIlF1aWxsTW9kdWxlcyIsIlF1aWxsRm9ybWF0cyIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBYUE7QUFDQSxJQUFNQSxVQUFVLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLGdKQUFOO0FBQUEsQ0FBRCxFQUE4QjtBQUFFQyxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUE7QUFBQSxrQ0FBaEIsNERBQWdCO0FBQUE7QUFBQSxjQUFoQixhQUFnQjtBQUFBO0FBQUEsQ0FBOUIsQ0FBMUI7TUFBTUYsVTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0csS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQ3JCLFNBQU8sTUFBQywrREFBRDtBQUFVLGFBQVMsRUFBRSxDQUFyQjtBQUF3QixXQUFPLEVBQUM7QUFBaEMsS0FBNkNBLEtBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUDtBQUNBOztNQUZRRCxLO0FBSVQsSUFBTUUsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3hDQyxRQUFJLEVBQUU7QUFDTEMsV0FBSyxFQUFFLE1BREY7QUFFTCxtQkFBYTtBQUNaQyxpQkFBUyxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkO0FBREM7QUFGUixLQURrQztBQU94Q0MsVUFBTSxFQUFFO0FBQ1BDLGlCQUFXLEVBQUVOLEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsQ0FETjtBQUVQRCxlQUFTLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsQ0FGSjtBQUdQRixXQUFLLEVBQUU7QUFIQSxLQVBnQztBQVl4Q0ssZUFBVyxFQUFFO0FBQ1pDLFlBQU0sRUFBRVIsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxDQURJO0FBRVpGLFdBQUssRUFBRSxLQUZLO0FBR1osZUFBTztBQUhLLEtBWjJCO0FBaUJ4Q08sYUFBUyxFQUFFO0FBQ1ZELFlBQU0sRUFBRVIsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxDQURFO0FBRVZGLFdBQUssRUFBRTtBQUZHO0FBakI2QixHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUF1QkEsSUFBTVEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQUE7O0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUMsS0FBSyxHQUFHQyx1RUFBUyxDQUFDLE9BQUQsQ0FBdkI7QUFDQSxNQUFNQyxPQUFPLEdBQUdmLFNBQVMsRUFBekI7O0FBZDhCLGlCQWVjZ0IsZ0VBQU8sQ0FBQyxDQUNuRDtBQURtRCxHQUFELENBZnJCO0FBQUEsTUFldEJDLE9BZnNCLFlBZXRCQSxPQWZzQjtBQUFBLE1BZWJDLFFBZmEsWUFlYkEsUUFmYTtBQUFBLE1BZUhDLFlBZkcsWUFlSEEsWUFmRyxFQWtCOUI7OztBQWxCOEIsa0JBbUJKQyxzREFBUSxFQW5CSjtBQUFBLE1BbUJ2QkMsS0FuQnVCO0FBQUEsTUFtQmhCQyxRQW5CZ0I7O0FBQUEsbUJBb0JORixzREFBUSxDQUFDLEtBQUQsQ0FwQkY7QUFBQSxNQW9CdkJHLElBcEJ1QjtBQUFBLE1Bb0JqQkMsT0FwQmlCOztBQXNCOUIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3RDLFFBQUlBLE1BQU0sS0FBSyxXQUFmLEVBQTRCO0FBQzNCO0FBQ0E7O0FBRURILFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDQSxHQU5EOztBQXRCOEIsbUJBOEJGSixzREFBUSxDQUFDO0FBQ3BDUSxXQUFPLEVBQUUsS0FEMkI7QUFFcENDLFdBQU8sRUFBRSxFQUYyQjtBQUdwQ0MsU0FBSyxFQUFFLEVBSDZCO0FBSXBDQyxXQUFPLEVBQUU7QUFKMkIsR0FBRCxDQTlCTjtBQUFBLE1BOEJ2QkMsTUE5QnVCO0FBQUEsTUE4QmZDLFNBOUJlOztBQUFBLE1Bb0N0QkosT0FwQ3NCLEdBb0NlRyxNQXBDZixDQW9DdEJILE9BcENzQjtBQUFBLE1Bb0NiRCxPQXBDYSxHQW9DZUksTUFwQ2YsQ0FvQ2JKLE9BcENhO0FBQUEsTUFvQ0pFLEtBcENJLEdBb0NlRSxNQXBDZixDQW9DSkYsS0FwQ0k7QUFBQSxNQW9DR0MsT0FwQ0gsR0FvQ2VDLE1BcENmLENBb0NHRCxPQXBDSDs7QUFzQzlCLE1BQU1HLFFBQVE7QUFBQSxnTUFBRyxpQkFBT0MsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQUYsdUJBQVMsaUNBQU1ELE1BQU47QUFBY0osdUJBQU8sRUFBRTtBQUF2QixpQkFBVDtBQUNBVSwwRkFBWSxDQUFDSCxJQUFELEVBQU90QixLQUFQLENBQVosQ0FBMEIwQixJQUExQixDQUErQixVQUFDQyxNQUFELEVBQVk7QUFDMUMsb0JBQUlBLE1BQU0sQ0FBQ1YsS0FBWCxFQUFrQjtBQUNqQkcsMkJBQVMsaUNBQU1ELE1BQU47QUFBY0YseUJBQUssRUFBRVUsTUFBTSxDQUFDVjtBQUE1QixxQkFBVDtBQUNBLGlCQUZELE1BRU87QUFDTkcsMkJBQVMsaUNBQ0xELE1BREs7QUFFUkgsMkJBQU8sRUFBRSxJQUZEO0FBR1JELDJCQUFPLEVBQUUsS0FIRDtBQUlSRywyQkFBTyxFQUFFUyxNQUFNLENBQUNUO0FBSlIscUJBQVQ7QUFNQVUseUJBQU8sQ0FBQyxFQUFELENBQVAsQ0FQTSxDQVFOO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsZUFmRDs7QUFIZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUlAsUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQXFCQSxTQUNDLG1FQUNFTixPQUFPLElBQUksTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRGIsRUFFRUMsT0FBTyxJQUNQO0FBQUssYUFBUyxFQUFFZCxPQUFPLENBQUNaLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDBEQUFEO0FBQ0MsUUFBSSxFQUFFb0IsSUFEUDtBQUVDLG9CQUFnQixFQUFFLElBRm5CO0FBR0MsV0FBTyxFQUFFRSxXQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJQyxNQUFDLEtBQUQ7QUFBTyxXQUFPLEVBQUVBLFdBQWhCO0FBQTZCLFlBQVEsRUFBQyxTQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VNLE9BREYsQ0FKRCxDQURELENBSEYsRUFjRUQsS0FBSyxJQUNMO0FBQUssYUFBUyxFQUFFZixPQUFPLENBQUNaLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDBEQUFEO0FBQ0MsUUFBSSxFQUFFb0IsSUFEUDtBQUVDLG9CQUFnQixFQUFFLElBRm5CO0FBR0MsV0FBTyxFQUFFRSxXQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJQyxNQUFDLEtBQUQ7QUFBTyxXQUFPLEVBQUVBLFdBQWhCO0FBQTZCLFlBQVEsRUFBQyxPQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VLLEtBREYsQ0FKRCxDQURELENBZkYsRUEwQkM7QUFBTSxZQUFRLEVBQUVYLFlBQVksQ0FBQ2UsUUFBRCxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywyREFBRDtBQUNDLGFBQVMsRUFBRW5CLE9BQU8sQ0FBQ0osU0FEcEI7QUFFQyxZQUFRLEVBQUVPLFFBRlg7QUFHQyxRQUFJLEVBQUMsS0FITjtBQUlDLE1BQUUsRUFBQyxpQkFKSjtBQUtDLFNBQUssRUFBQyxLQUxQO0FBTUMsbUJBQWUsRUFBRTtBQUNoQndCLFlBQU0sRUFBRTtBQURRLEtBTmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQVdDLE1BQUMsMkRBQUQ7QUFDQyxhQUFTLEVBQUUzQixPQUFPLENBQUNKLFNBRHBCO0FBRUMsWUFBUSxFQUFFTyxRQUZYO0FBR0MsUUFBSSxFQUFDLGFBSE47QUFJQyxNQUFFLEVBQUMsaUJBSko7QUFLQyxTQUFLLEVBQUMsYUFMUDtBQU1DLG1CQUFlLEVBQUU7QUFDaEJ3QixZQUFNLEVBQUU7QUFEUSxLQU5sQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEQsRUFxQkMsTUFBQywyREFBRDtBQUNDLGFBQVMsRUFBRTNCLE9BQU8sQ0FBQ0osU0FEcEI7QUFFQyxZQUFRLEVBQUVPLFFBRlg7QUFHQyxRQUFJLEVBQUMsT0FITjtBQUlDLE1BQUUsRUFBQyxpQkFKSjtBQUtDLFNBQUssRUFBQyxPQUxQO0FBTUMsbUJBQWUsRUFBRTtBQUNoQndCLFlBQU0sRUFBRTtBQURRLEtBTmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQkQsRUF5Q0MsTUFBQyw2REFBRDtBQUFhLGFBQVMsRUFBRTNCLE9BQU8sQ0FBQ04sV0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsNERBQUQ7QUFDQyxVQUFNLE1BRFA7QUFFQyxNQUFFLEVBQUMsNENBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxFQU1DLE1BQUMsMkRBQUQ7QUFDQyxNQUFFLEVBQUVkLFVBREw7QUFFQyxXQUFPLEVBQUVzQixPQUZWO0FBR0MsUUFBSSxFQUFDLE9BSE47QUFJQyxTQUFLLEVBQUMsTUFKUDtBQUtDLGVBQVcsRUFBQyxzQkFMYjtBQU1DLFdBQU8sRUFBRTBCLHdEQU5WO0FBT0MsV0FBTyxFQUFFQyx3REFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkQsQ0F6Q0QsRUEwREMsTUFBQyxzREFBRDtBQUNDLGFBQVMsTUFEVjtBQUVDLGFBQVMsRUFBQyxLQUZYO0FBR0MsV0FBTyxFQUFDLFFBSFQ7QUFJQyxjQUFVLEVBQUMsUUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0MsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyw2REFBRDtBQUFhLGFBQVMsRUFBRTdCLE9BQU8sQ0FBQ04sV0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsNERBQUQ7QUFDQyxVQUFNLE1BRFA7QUFFQyxNQUFFLEVBQUMsNENBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERCxFQU1DLE1BQUMsMkRBQUQ7QUFDQyxXQUFPLEVBQUVRLE9BRFY7QUFFQyxRQUFJLEVBQUMsaUJBRk47QUFHQyxNQUFFLEVBQ0QsTUFBQyx3REFBRDtBQUFRLFFBQUUsRUFBQyxpQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0MsTUFBQywwREFBRDtBQUFVLFdBQUssRUFBQywwQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERCxFQUlDLE1BQUMsMERBQUQ7QUFBVSxXQUFLLEVBQUMsK0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBSkQsQ0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkQsQ0FERCxDQUxELEVBNkJDLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsNkRBQUQ7QUFBYSxhQUFTLEVBQUVGLE9BQU8sQ0FBQ04sV0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsNERBQUQ7QUFDQyxVQUFNLE1BRFA7QUFFQyxNQUFFLEVBQUMsNENBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERCxFQU1DLE1BQUMsMkRBQUQ7QUFDQyxXQUFPLEVBQUVRLE9BRFY7QUFFQyxRQUFJLEVBQUMsbUJBRk47QUFHQyxNQUFFLEVBQ0QsTUFBQyx3REFBRDtBQUFRLFFBQUUsRUFBQyxpQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0MsTUFBQywwREFBRDtBQUFVLFdBQUssRUFBQywrQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FERCxFQUlDLE1BQUMsMERBQUQ7QUFBVSxXQUFLLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRCxDQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORCxDQURELENBN0JELENBMURELEVBK0dDLE1BQUMsc0RBQUQ7QUFDQyxhQUFTLE1BRFY7QUFFQyxhQUFTLEVBQUMsS0FGWDtBQUdDLFdBQU8sRUFBQyxRQUhUO0FBSUMsY0FBVSxFQUFDLFFBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtDLE1BQUMsa0VBQUQ7QUFDQyxXQUFPLEVBQ04sTUFBQyx3REFBRDtBQUNDLGNBQVEsRUFBRUMsUUFEWDtBQUVDLGFBQU8sRUFBRSxJQUZWO0FBR0MsVUFBSSxFQUFDLE9BSE47QUFJQyxXQUFLLEVBQUMsU0FKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkY7QUFTQyxTQUFLLEVBQUMsT0FUUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEQsQ0EvR0QsRUFnSUMsTUFBQyx3REFBRDtBQUNDLFFBQUksRUFBQyxRQUROO0FBRUMsV0FBTyxFQUFDLFdBRlQ7QUFHQyxTQUFLLEVBQUMsU0FIUDtBQUlDLGFBQVMsRUFBRUgsT0FBTyxDQUFDUixNQUpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQWhJRCxDQTFCRCxDQUREO0FBcUtBLENBaE9EOztHQUFNSyxnQjtVQWNXWixTLEVBQzRCZ0Isd0Q7OztNQWZ2Q0osZ0I7QUFrT1MscUVBQUFpQyw4REFBVSxDQUFDakMsZ0JBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9tYWlsZXIvY3JlYXRlLjFiNmJjOTc1ZTQ5NWQ2MWMzYjJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG5cdEJ1dHRvbixcclxuXHRDaXJjdWxhclByb2dyZXNzLFxyXG5cdEZvcm1Db250cm9sLFxyXG5cdElucHV0TGFiZWwsXHJcblx0TWVudUl0ZW0sXHJcblx0U2VsZWN0LFxyXG5cdFNuYWNrYmFyLFxyXG5cdFN3aXRjaCxcclxuXHRGb3JtQ29udHJvbExhYmVsLFxyXG5cdFRleHRGaWVsZCxcclxuXHRHcmlkLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuY29uc3QgUmVhY3RRdWlsbCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1xdWlsbCcpLCB7IHNzcjogZmFsc2UgfSk7XHJcbmltcG9ydCB7IFF1aWxsTW9kdWxlcywgUXVpbGxGb3JtYXRzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9xdWlsbCc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgTXVpQWxlcnQgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BbGVydCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IGNyZWF0ZU1haWxlciB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvbWFpbGVyQWN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBBbGVydChwcm9wcykge1xyXG5cdHJldHVybiA8TXVpQWxlcnQgZWxldmF0aW9uPXs2fSB2YXJpYW50PSdmaWxsZWQnIHsuLi5wcm9wc30gLz47XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHQnJiA+ICogKyAqJzoge1xyXG5cdFx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0YnV0dG9uOiB7XHJcblx0XHRtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0fSxcclxuXHRmb3JtQ29udHJvbDoge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0d2lkdGg6ICc4MCUnLFxyXG5cdFx0ZmxvYXQ6ICdjZW50ZXInLFxyXG5cdH0sXHJcblx0dGV4dEZpZWxkOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHR3aWR0aDogJzgwJScsXHJcblx0fSxcclxufSkpO1xyXG5cclxuY29uc3QgRm9ybUNyZWF0ZU1haWxlciA9ICgpID0+IHtcclxuXHQvLyBjb25zdCBibG9nRnJvbUxTID0gKCkgPT4ge1xyXG5cdC8vIFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcblx0Ly8gXHRcdHJldHVybiBmYWxzZTtcclxuXHQvLyBcdH1cclxuXHJcblx0Ly8gXHRpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jsb2cnKSkge1xyXG5cdC8vIFx0XHRyZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmxvZycpKTtcclxuXHQvLyBcdH0gZWxzZSB7XHJcblx0Ly8gXHRcdHJldHVybiBmYWxzZTtcclxuXHQvLyBcdH1cclxuXHQvLyB9O1xyXG5cclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0Y29uc3QgeyBjb250cm9sLCByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKHtcclxuXHRcdC8vIGRlZmF1bHRWYWx1ZXM6ICxcclxuXHR9KTtcclxuXHQvLyBjb25zdCBbY29ycHMsIHNldENvcnBzXSA9IHVzZVN0YXRlKGJsb2dGcm9tTFMoKSk7XHJcblx0Y29uc3QgW2NvcnBzLCBzZXRDb3Jwc10gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2xvc2UgPSAoZXZlbnQsIHJlYXNvbikgPT4ge1xyXG5cdFx0aWYgKHJlYXNvbiA9PT0gJ2NsaWNrYXdheScpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNldE9wZW4oZmFsc2UpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0ZXJyb3I6ICcnLFxyXG5cdFx0bWVzc2FnZTogJycsXHJcblx0fSk7XHJcblx0Y29uc3QgeyBzdWNjZXNzLCBsb2FkaW5nLCBlcnJvciwgbWVzc2FnZSB9ID0gdmFsdWVzO1xyXG5cclxuXHRjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChkYXRhKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHRcdGNyZWF0ZU1haWxlcihkYXRhLCB0b2tlbikudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHRcdGlmIChyZXN1bHQuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiByZXN1bHQuZXJyb3IgfSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IHRydWUsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IHJlc3VsdC5tZXNzYWdlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNldEJvZHkoJycpO1xyXG5cdFx0XHRcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdC8vIFx0Um91dGVyLnB1c2goJy9hZG1pbi9nZXN0aW9uRGl2ZXJzL3BhcnRlbmFpcmVzJyk7XHJcblx0XHRcdFx0Ly8gfSwgMzAwMCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7bG9hZGluZyAmJiA8Q2lyY3VsYXJQcm9ncmVzcyAvPn1cclxuXHRcdFx0e3N1Y2Nlc3MgJiYgKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG5cdFx0XHRcdFx0PFNuYWNrYmFyXHJcblx0XHRcdFx0XHRcdG9wZW49e29wZW59XHJcblx0XHRcdFx0XHRcdGF1dG9IaWRlRHVyYXRpb249ezYwMDB9XHJcblx0XHRcdFx0XHRcdG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cclxuXHRcdFx0XHRcdFx0PEFsZXJ0IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBzZXZlcml0eT0nc3VjY2Vzcyc+XHJcblx0XHRcdFx0XHRcdFx0e21lc3NhZ2V9XHJcblx0XHRcdFx0XHRcdDwvQWxlcnQ+XHJcblx0XHRcdFx0XHQ8L1NuYWNrYmFyPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpfVxyXG5cdFx0XHR7ZXJyb3IgJiYgKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG5cdFx0XHRcdFx0PFNuYWNrYmFyXHJcblx0XHRcdFx0XHRcdG9wZW49e29wZW59XHJcblx0XHRcdFx0XHRcdGF1dG9IaWRlRHVyYXRpb249ezYwMDB9XHJcblx0XHRcdFx0XHRcdG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cclxuXHRcdFx0XHRcdFx0PEFsZXJ0IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBzZXZlcml0eT0nZXJyb3InPlxyXG5cdFx0XHRcdFx0XHRcdHtlcnJvcn1cclxuXHRcdFx0XHRcdFx0PC9BbGVydD5cclxuXHRcdFx0XHRcdDwvU25hY2tiYXI+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCl9XHJcblx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0bmFtZT0nbm9tJ1xyXG5cdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdGxhYmVsPSdOb20nXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSdkZXNjcmlwdGlvbidcclxuXHRcdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0XHRsYWJlbD0nRGVzY3JpcHRpb24nXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSdzdWpldCdcclxuXHRcdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0XHRsYWJlbD0nU3VqZXQnXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHsvKiA8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0bmFtZT0nY29ycHMnXHJcblx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J0NvcnBzJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz4gKi99XHJcblx0XHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHQ8SW5wdXRMYWJlbFxyXG5cdFx0XHRcdFx0XHRzaHJpbmtcclxuXHRcdFx0XHRcdFx0aWQ9J2RlbW8tc2ltcGxlLXNlbGVjdC1wbGFjZWhvbGRlci1sYWJlbC1sYWJlbCc+XHJcblx0XHRcdFx0XHRcdENvcnBzIGR1IG1haWxcclxuXHRcdFx0XHRcdDwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRcdGFzPXtSZWFjdFF1aWxsfVxyXG5cdFx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0XHRuYW1lPSdjb3JwcydcclxuXHRcdFx0XHRcdFx0dGhlbWU9J3Nub3cnXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdDb3JwcyBkdSBtYWlsIGljaS4uLidcclxuXHRcdFx0XHRcdFx0bW9kdWxlcz17UXVpbGxNb2R1bGVzfVxyXG5cdFx0XHRcdFx0XHRmb3JtYXRzPXtRdWlsbEZvcm1hdHN9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblxyXG5cdFx0XHRcdDxHcmlkXHJcblx0XHRcdFx0XHRjb250YWluZXJcclxuXHRcdFx0XHRcdGRpcmVjdGlvbj0ncm93J1xyXG5cdFx0XHRcdFx0anVzdGlmeT0nY2VudGVyJ1xyXG5cdFx0XHRcdFx0YWxpZ25JdGVtcz0nY2VudGVyJz5cclxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0+XHJcblx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0XHRcdDxJbnB1dExhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRzaHJpbmtcclxuXHRcdFx0XHRcdFx0XHRcdGlkPSdkZW1vLXNpbXBsZS1zZWxlY3QtcGxhY2Vob2xkZXItbGFiZWwtbGFiZWwnPlxyXG5cdFx0XHRcdFx0XHRcdFx0RMOpY2xlbmNoZXVyIChkYXRlKVxyXG5cdFx0XHRcdFx0XHRcdDwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udHJvbD17Y29udHJvbH1cclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J2RlY2xlbmNoZXVyRGF0ZSdcclxuXHRcdFx0XHRcdFx0XHRcdGFzPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PFNlbGVjdCBpZD0nY2l2aWxpdGUtc2VsZWN0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9Jzcgam91cnMgYXZhbnQgYXJyaXbDqWUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NyBqb3VycyBhdmFudCBhcnJpdsOpZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSc3IGpvdXJzIGFwcsOocyBsZSBkw6lwYXJ0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcgam91cnMgYXByw6hzIGxlIGTDqXBhcnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1NlbGVjdD5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cclxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0+XHJcblx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0XHRcdDxJbnB1dExhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRzaHJpbmtcclxuXHRcdFx0XHRcdFx0XHRcdGlkPSdkZW1vLXNpbXBsZS1zZWxlY3QtcGxhY2Vob2xkZXItbGFiZWwtbGFiZWwnPlxyXG5cdFx0XHRcdFx0XHRcdFx0RMOpY2xlbmNoZXVyIChhY3Rpb24pXHJcblx0XHRcdFx0XHRcdFx0PC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT0nZGVjbGVuY2hldXJBY3Rpb24nXHJcblx0XHRcdFx0XHRcdFx0XHRhcz17XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxTZWxlY3QgaWQ9J2NpdmlsaXRlLXNlbGVjdCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSfDoCBsYSB2YWxpZGF0aW9uIGR1IGNvbnRyYXQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0w6AgbGEgdmFsaWRhdGlvbiBkdSBjb250cmF0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J0F1dHJlIGV4ZW1wbGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QXV0cmUgZXhlbXBsZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvU2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkXHJcblx0XHRcdFx0XHRjb250YWluZXJcclxuXHRcdFx0XHRcdGRpcmVjdGlvbj0ncm93J1xyXG5cdFx0XHRcdFx0anVzdGlmeT0nY2VudGVyJ1xyXG5cdFx0XHRcdFx0YWxpZ25JdGVtcz0nY2VudGVyJz5cclxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsXHJcblx0XHRcdFx0XHRcdGNvbnRyb2w9e1xyXG5cdFx0XHRcdFx0XHRcdDxTd2l0Y2hcclxuXHRcdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPSdhY3RpZidcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yPSdwcmltYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9J0FjdGlmJ1xyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0dHlwZT0nc3VibWl0J1xyXG5cdFx0XHRcdFx0dmFyaWFudD0nY29udGFpbmVkJ1xyXG5cdFx0XHRcdFx0Y29sb3I9J3ByaW1hcnknXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdFZhbGlkZXIgbGVzIG1vZGlmaWNhdGlvbnNcclxuXHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoRm9ybUNyZWF0ZU1haWxlcik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=