webpackHotUpdate_N_E("pages/admin/reservation/[id]",{

/***/ "./components/admin/forms/reservation/FormStatus.js":
/*!**********************************************************!*\
  !*** ./components/admin/forms/reservation/FormStatus.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _actions_reservationActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../actions/reservationActions */ "./actions/reservationActions.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");






var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\forms\\reservation\\FormStatus.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












function Alert(props) {
  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({
    elevation: 6,
    variant: "filled"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }));
}

_c = Alert;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  return {
    root: {
      width: '100%'
    },
    button: {
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(2)
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: '100%'
    },
    textField: {
      margin: theme.spacing(1),
      width: '25ch'
    }
  };
});

var FormStatus = function FormStatus(_ref) {
  _s();

  var preloadedValues = _ref.preloadedValues,
      generateContract = _ref.generateContract;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      selectedDateRes = _React$useState2[0],
      setSelectedDateRes = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      selectedDateContrat = _React$useState4[0],
      setSelectedDateContrat = _React$useState4[1];

  console.log(preloadedValues.dateContrat);

  var handleDateChangeRes = function handleDateChangeRes(date) {
    setSelectedDateRes(date);
  };

  var handleDateChangeContrat = function handleDateChangeContrat(date) {
    setSelectedDateContrat(date);
  };

  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_12__["getCookie"])('token');
  var classes = useStyles();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_10__["useForm"])({
    defaultValues: preloadedValues
  }),
      control = _useForm.control,
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
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
              Object(_actions_reservationActions__WEBPACK_IMPORTED_MODULE_11__["updateReservation"])(data, router.query.id, token).then(function (result) {
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
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, loading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CircularProgress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 16
    }
  }), success && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Snackbar"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 6
    }
  }, message)), error && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Snackbar"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 6
    }
  }, error)), __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 6
    }
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_14__["MuiPickersUtilsProvider"], {
    utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_13__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_14__["KeyboardDatePicker"], {
    inputRef: register,
    disableToolbar: true,
    variant: "inline",
    name: "dateRes",
    format: "MM/dd/yyyy",
    margin: "normal",
    id: "date-picker-inline",
    label: "Date de r\xE9servation",
    value: selectedDateRes,
    onChange: handleDateChangeRes,
    KeyboardButtonProps: {
      'aria-label': 'change date'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 8
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["InputLabel"], {
    shrink: true,
    id: "demo-simple-select-placeholder-label-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }
  }, "Status de la r\xE9servation"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_10__["Controller"], {
    control: control,
    name: "status",
    as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Select"], {
      id: "status-select",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
      value: "Nouvelle r\xE9servation",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 10
      }
    }, "Nouvelle r\xE9servation"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
      value: "Contrat envoy\xE9",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 10
      }
    }, "Contrat envoy\xE9"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
      value: "Acompte/Contrat re\xE7u",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 10
      }
    }, "Acompte/Contrat re\xE7u"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
      value: "Relance contrat non re\xE7u",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 10
      }
    }, "Relance contrat non re\xE7u"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
      value: "Reservation termin\xE9e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 10
      }
    }, "Reservation termin\xE9e"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
      value: "Reservation/Contrat annul\xE9e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 10
      }
    }, "Reservation/Contrat annul\xE9e")),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
    inputRef: register,
    name: "infoCompl",
    id: "standard-number",
    label: "Message du locataire",
    multiline: true,
    rows: 3,
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
    inputRef: register,
    name: "commentaire",
    id: "standard-number",
    label: "Note sp\xE9cifique",
    multiline: true,
    rows: 2,
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 7
    }
  })), !preloadedValues.dateContrat ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_14__["MuiPickersUtilsProvider"], {
    utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_13__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 8
    }
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_14__["KeyboardDatePicker"], {
    inputRef: register,
    disableToolbar: true,
    variant: "inline",
    name: "dateContrat",
    disabled: true,
    format: "dd/MM/yyyy",
    margin: "normal",
    id: "date-picker-inline",
    label: "Date de g\xE9n\xE9ration du contrat",
    value: selectedDateContrat,
    onChange: handleDateChangeContrat,
    KeyboardButtonProps: {
      'aria-label': 'change date'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 9
    }
  }))) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    onClick: generateContract,
    variant: "contained",
    color: "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 7
    }
  }, "G\xE9n\xE9rer le contrat")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    type: "submit",
    variant: "contained",
    color: "primary",
    style: {
      width: '100%'
    },
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 5
    }
  }, "Valider les modifications")));
};

_s(FormStatus, "k0cvJzEpUo+6PE5WbZysTAbjBSE=", false, function () {
  return [useStyles, react_hook_form__WEBPACK_IMPORTED_MODULE_10__["useForm"]];
});

_c2 = FormStatus;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(FormStatus));

var _c, _c2, _c3;

$RefreshReg$(_c, "Alert");
$RefreshReg$(_c2, "FormStatus");
$RefreshReg$(_c3, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9yZXNlcnZhdGlvbi9Gb3JtU3RhdHVzLmpzIl0sIm5hbWVzIjpbIkFsZXJ0IiwicHJvcHMiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290Iiwid2lkdGgiLCJidXR0b24iLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJtYXJnaW5Ub3AiLCJmb3JtQ29udHJvbCIsIm1hcmdpbiIsIm1pbldpZHRoIiwidGV4dEZpZWxkIiwiRm9ybVN0YXR1cyIsInByZWxvYWRlZFZhbHVlcyIsImdlbmVyYXRlQ29udHJhY3QiLCJSZWFjdCIsInVzZVN0YXRlIiwic2VsZWN0ZWREYXRlUmVzIiwic2V0U2VsZWN0ZWREYXRlUmVzIiwic2VsZWN0ZWREYXRlQ29udHJhdCIsInNldFNlbGVjdGVkRGF0ZUNvbnRyYXQiLCJjb25zb2xlIiwibG9nIiwiZGF0ZUNvbnRyYXQiLCJoYW5kbGVEYXRlQ2hhbmdlUmVzIiwiZGF0ZSIsImhhbmRsZURhdGVDaGFuZ2VDb250cmF0IiwidG9rZW4iLCJnZXRDb29raWUiLCJjbGFzc2VzIiwidXNlRm9ybSIsImRlZmF1bHRWYWx1ZXMiLCJjb250cm9sIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJsb2FkaW5nIiwic3VjY2VzcyIsImVycm9yIiwibWVzc2FnZSIsInZhbHVlcyIsInNldFZhbHVlcyIsIm9uU3VibWl0IiwiZGF0YSIsInVwZGF0ZVJlc2VydmF0aW9uIiwicm91dGVyIiwicXVlcnkiLCJpZCIsInRoZW4iLCJyZXN1bHQiLCJvcGVuIiwiaGFuZGxlQ2xvc2UiLCJEYXRlRm5zVXRpbHMiLCJzaHJpbmsiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBTUEsU0FB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YztBQURNLEtBWnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURELENBREEsR0FzQkEsTUFBQyx3REFBRDtBQUNDLFdBQU8sRUFBRVosZ0JBRFY7QUFFQyxXQUFPLEVBQUMsV0FGVDtBQUdDLFNBQUssRUFBQyxXQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBMUdGLENBREQsRUFvSEMsTUFBQyx3REFBRDtBQUNDLFFBQUksRUFBQyxRQUROO0FBRUMsV0FBTyxFQUFDLFdBRlQ7QUFHQyxTQUFLLEVBQUMsU0FIUDtBQUlDLFNBQUssRUFBRTtBQUFFWCxXQUFLLEVBQUU7QUFBVCxLQUpSO0FBS0MsYUFBUyxFQUFFMEIsT0FBTyxDQUFDekIsTUFMcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FwSEQsQ0F0QkQsQ0FERDtBQXNKQSxDQW5NRDs7R0FBTVEsVTtVQVlXYixTLEVBQzRCK0Isd0Q7OztNQWJ2Q2xCLFU7QUFxTVMscUVBQUF5Qyw4REFBVSxDQUFDekMsVUFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9yZXNlcnZhdGlvbi9baWRdLjU5NTg2YzkxYzRkMzFjY2FkOTg0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG5cdEJ1dHRvbixcclxuXHRDaXJjdWxhclByb2dyZXNzLFxyXG5cdEZvcm1Db250cm9sLFxyXG5cdEdyaWQsXHJcblx0SW5wdXRMYWJlbCxcclxuXHRNZW51SXRlbSxcclxuXHRTZWxlY3QsXHJcblx0U25hY2tiYXIsXHJcblx0VGV4dGFyZWFBdXRvc2l6ZSxcclxuXHRUZXh0RmllbGQsXHJcblx0VHlwb2dyYXBoeSxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgTXVpQWxlcnQgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BbGVydCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHsgdXBkYXRlUmVzZXJ2YXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9hY3Rpb25zL3Jlc2VydmF0aW9uQWN0aW9ucyc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5cclxuaW1wb3J0IERhdGVGbnNVdGlscyBmcm9tICdAZGF0ZS1pby9kYXRlLWZucyc7XHJcbmltcG9ydCB7XHJcblx0TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIsXHJcblx0S2V5Ym9hcmRUaW1lUGlja2VyLFxyXG5cdEtleWJvYXJkRGF0ZVBpY2tlcixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvcGlja2Vycyc7XHJcblxyXG5mdW5jdGlvbiBBbGVydChwcm9wcykge1xyXG5cdHJldHVybiA8TXVpQWxlcnQgZWxldmF0aW9uPXs2fSB2YXJpYW50PSdmaWxsZWQnIHsuLi5wcm9wc30gLz47XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0fSxcclxuXHRidXR0b246IHtcclxuXHRcdG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdH0sXHJcblx0Zm9ybUNvbnRyb2w6IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdG1pbldpZHRoOiAnMTAwJScsXHJcblx0fSxcclxuXHR0ZXh0RmllbGQ6IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdHdpZHRoOiAnMjVjaCcsXHJcblx0fSxcclxufSkpO1xyXG5cclxuY29uc3QgRm9ybVN0YXR1cyA9ICh7IHByZWxvYWRlZFZhbHVlcywgZ2VuZXJhdGVDb250cmFjdCB9KSA9PiB7XHJcblx0Y29uc3QgW3NlbGVjdGVkRGF0ZVJlcywgc2V0U2VsZWN0ZWREYXRlUmVzXSA9IFJlYWN0LnVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW3NlbGVjdGVkRGF0ZUNvbnRyYXQsIHNldFNlbGVjdGVkRGF0ZUNvbnRyYXRdID0gUmVhY3QudXNlU3RhdGUoKTtcclxuXHRjb25zb2xlLmxvZyhwcmVsb2FkZWRWYWx1ZXMuZGF0ZUNvbnRyYXQpO1xyXG5cdGNvbnN0IGhhbmRsZURhdGVDaGFuZ2VSZXMgPSAoZGF0ZSkgPT4ge1xyXG5cdFx0c2V0U2VsZWN0ZWREYXRlUmVzKGRhdGUpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZURhdGVDaGFuZ2VDb250cmF0ID0gKGRhdGUpID0+IHtcclxuXHRcdHNldFNlbGVjdGVkRGF0ZUNvbnRyYXQoZGF0ZSk7XHJcblx0fTtcclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0Y29uc3QgeyBjb250cm9sLCByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKHtcclxuXHRcdGRlZmF1bHRWYWx1ZXM6IHByZWxvYWRlZFZhbHVlcyxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuXHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0c3VjY2VzczogJycsXHJcblx0XHRlcnJvcjogJycsXHJcblx0XHRtZXNzYWdlOiAnJyxcclxuXHR9KTtcclxuXHRjb25zdCB7IHN1Y2Nlc3MsIGxvYWRpbmcsIGVycm9yLCBtZXNzYWdlIH0gPSB2YWx1ZXM7XHJcblxyXG5cdGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdFx0dXBkYXRlUmVzZXJ2YXRpb24oZGF0YSwgcm91dGVyLnF1ZXJ5LmlkLCB0b2tlbikudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHRcdGlmIChyZXN1bHQuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiByZXN1bHQuZXJyb3IgfSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IHRydWUsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IHJlc3VsdC5tZXNzYWdlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdC8vIFx0Um91dGVyLnB1c2goJy9hZG1pbi9nZXN0aW9uRGl2ZXJzL3BhcnRlbmFpcmVzJyk7XHJcblx0XHRcdFx0Ly8gfSwgMzAwMCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7bG9hZGluZyAmJiA8Q2lyY3VsYXJQcm9ncmVzcyAvPn1cclxuXHRcdFx0e3N1Y2Nlc3MgJiYgKFxyXG5cdFx0XHRcdDxTbmFja2JhclxyXG5cdFx0XHRcdFx0b3Blbj17b3Blbn1cclxuXHRcdFx0XHRcdGF1dG9IaWRlRHVyYXRpb249ezYwMDB9XHJcblx0XHRcdFx0XHRvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XHJcblx0XHRcdFx0XHQ8QWxlcnQgb25DbG9zZT17aGFuZGxlQ2xvc2V9IHNldmVyaXR5PSdzdWNjZXNzJz5cclxuXHRcdFx0XHRcdFx0e21lc3NhZ2V9XHJcblx0XHRcdFx0XHQ8L0FsZXJ0PlxyXG5cdFx0XHRcdDwvU25hY2tiYXI+XHJcblx0XHRcdCl9XHJcblx0XHRcdHtlcnJvciAmJiAoXHJcblx0XHRcdFx0PFNuYWNrYmFyXHJcblx0XHRcdFx0XHRvcGVuPXtvcGVufVxyXG5cdFx0XHRcdFx0YXV0b0hpZGVEdXJhdGlvbj17NjAwMH1cclxuXHRcdFx0XHRcdG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cclxuXHRcdFx0XHRcdDxBbGVydCBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gc2V2ZXJpdHk9J2Vycm9yJz5cclxuXHRcdFx0XHRcdFx0e2Vycm9yfVxyXG5cdFx0XHRcdFx0PC9BbGVydD5cclxuXHRcdFx0XHQ8L1NuYWNrYmFyPlxyXG5cdFx0XHQpfVxyXG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyPlxyXG5cdFx0XHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHRcdDxNdWlQaWNrZXJzVXRpbHNQcm92aWRlciB1dGlscz17RGF0ZUZuc1V0aWxzfT5cclxuXHRcdFx0XHRcdFx0XHQ8S2V5Ym9hcmREYXRlUGlja2VyXHJcblx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlVG9vbGJhclxyXG5cdFx0XHRcdFx0XHRcdFx0dmFyaWFudD0naW5saW5lJ1xyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT0nZGF0ZVJlcydcclxuXHRcdFx0XHRcdFx0XHRcdGZvcm1hdD0nTU0vZGQveXl5eSdcclxuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbj0nbm9ybWFsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0aWQ9J2RhdGUtcGlja2VyLWlubGluZSdcclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPSdEYXRlIGRlIHLDqXNlcnZhdGlvbidcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtzZWxlY3RlZERhdGVSZXN9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlRGF0ZUNoYW5nZVJlc31cclxuXHRcdFx0XHRcdFx0XHRcdEtleWJvYXJkQnV0dG9uUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0J2FyaWEtbGFiZWwnOiAnY2hhbmdlIGRhdGUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L011aVBpY2tlcnNVdGlsc1Byb3ZpZGVyPlxyXG5cdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHJcblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdFx0PElucHV0TGFiZWxcclxuXHRcdFx0XHRcdFx0XHRzaHJpbmtcclxuXHRcdFx0XHRcdFx0XHRpZD0nZGVtby1zaW1wbGUtc2VsZWN0LXBsYWNlaG9sZGVyLWxhYmVsLWxhYmVsJz5cclxuXHRcdFx0XHRcdFx0XHRTdGF0dXMgZGUgbGEgcsOpc2VydmF0aW9uXHJcblx0XHRcdFx0XHRcdDwvSW5wdXRMYWJlbD5cclxuXHJcblx0XHRcdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRcdFx0Y29udHJvbD17Y29udHJvbH1cclxuXHRcdFx0XHRcdFx0XHRuYW1lPSdzdGF0dXMnXHJcblx0XHRcdFx0XHRcdFx0YXM9e1xyXG5cdFx0XHRcdFx0XHRcdFx0PFNlbGVjdCBpZD0nc3RhdHVzLXNlbGVjdCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nTm91dmVsbGUgcsOpc2VydmF0aW9uJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHROb3V2ZWxsZSByw6lzZXJ2YXRpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdDb250cmF0IGVudm95w6knPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdENvbnRyYXQgZW52b3nDqVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J0Fjb21wdGUvQ29udHJhdCByZcOndSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0QWNvbXB0ZS9Db250cmF0IHJlw6d1XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nUmVsYW5jZSBjb250cmF0IG5vbiByZcOndSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0UmVsYW5jZSBjb250cmF0IG5vbiByZcOndVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J1Jlc2VydmF0aW9uIHRlcm1pbsOpZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0UmVzZXJ2YXRpb24gdGVybWluw6llXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nUmVzZXJ2YXRpb24vQ29udHJhdCBhbm51bMOpZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0UmVzZXJ2YXRpb24vQ29udHJhdCBhbm51bMOpZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9TZWxlY3Q+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHJcblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRuYW1lPSdpbmZvQ29tcGwnXHJcblx0XHRcdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdFx0XHRsYWJlbD0nTWVzc2FnZSBkdSBsb2NhdGFpcmUnXHJcblx0XHRcdFx0XHRcdFx0bXVsdGlsaW5lXHJcblx0XHRcdFx0XHRcdFx0cm93cz17M31cclxuXHRcdFx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHJcblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRuYW1lPSdjb21tZW50YWlyZSdcclxuXHRcdFx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPSdOb3RlIHNww6ljaWZpcXVlJ1xyXG5cdFx0XHRcdFx0XHRcdG11bHRpbGluZVxyXG5cdFx0XHRcdFx0XHRcdHJvd3M9ezJ9XHJcblx0XHRcdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblxyXG5cdFx0XHRcdFx0eyFwcmVsb2FkZWRWYWx1ZXMuZGF0ZUNvbnRyYXQgPyAoXHJcblx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0XHRcdDxNdWlQaWNrZXJzVXRpbHNQcm92aWRlciB1dGlscz17RGF0ZUZuc1V0aWxzfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxLZXlib2FyZERhdGVQaWNrZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlVG9vbGJhclxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdpbmxpbmUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J2RhdGVDb250cmF0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb3JtYXQ9J2RkL01NL3l5eXknXHJcblx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbj0nbm9ybWFsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD0nZGF0ZS1waWNrZXItaW5saW5lJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD0nRGF0ZSBkZSBnw6luw6lyYXRpb24gZHUgY29udHJhdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3NlbGVjdGVkRGF0ZUNvbnRyYXR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVEYXRlQ2hhbmdlQ29udHJhdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0S2V5Ym9hcmRCdXR0b25Qcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdhcmlhLWxhYmVsJzogJ2NoYW5nZSBkYXRlJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9NdWlQaWNrZXJzVXRpbHNQcm92aWRlcj5cclxuXHRcdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtnZW5lcmF0ZUNvbnRyYWN0fVxyXG5cdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRcdFx0XHRjb2xvcj0nc2Vjb25kYXJ5Jz5cclxuXHRcdFx0XHRcdFx0XHRHw6luw6lyZXIgbGUgY29udHJhdFxyXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cclxuXHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHR0eXBlPSdzdWJtaXQnXHJcblx0XHRcdFx0XHR2YXJpYW50PSdjb250YWluZWQnXHJcblx0XHRcdFx0XHRjb2xvcj0ncHJpbWFyeSdcclxuXHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0VmFsaWRlciBsZXMgbW9kaWZpY2F0aW9uc1xyXG5cdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihGb3JtU3RhdHVzKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==