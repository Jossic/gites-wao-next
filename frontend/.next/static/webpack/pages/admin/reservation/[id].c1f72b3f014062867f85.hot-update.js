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

  console.log(preloadedValues);

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
    format: "MM/dd/yyyy",
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
      lineNumber: 225,
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
      lineNumber: 234,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9yZXNlcnZhdGlvbi9Gb3JtU3RhdHVzLmpzIl0sIm5hbWVzIjpbIkFsZXJ0IiwicHJvcHMiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290Iiwid2lkdGgiLCJidXR0b24iLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJtYXJnaW5Ub3AiLCJmb3JtQ29udHJvbCIsIm1hcmdpbiIsIm1pbldpZHRoIiwidGV4dEZpZWxkIiwiRm9ybVN0YXR1cyIsInByZWxvYWRlZFZhbHVlcyIsImdlbmVyYXRlQ29udHJhY3QiLCJSZWFjdCIsInVzZVN0YXRlIiwic2VsZWN0ZWREYXRlUmVzIiwic2V0U2VsZWN0ZWREYXRlUmVzIiwic2VsZWN0ZWREYXRlQ29udHJhdCIsInNldFNlbGVjdGVkRGF0ZUNvbnRyYXQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRGF0ZUNoYW5nZVJlcyIsImRhdGUiLCJoYW5kbGVEYXRlQ2hhbmdlQ29udHJhdCIsInRva2VuIiwiZ2V0Q29va2llIiwiY2xhc3NlcyIsInVzZUZvcm0iLCJkZWZhdWx0VmFsdWVzIiwiY29udHJvbCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwibG9hZGluZyIsInN1Y2Nlc3MiLCJlcnJvciIsIm1lc3NhZ2UiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJvblN1Ym1pdCIsImRhdGEiLCJ1cGRhdGVSZXNlcnZhdGlvbiIsInJvdXRlciIsInF1ZXJ5IiwiaWQiLCJ0aGVuIiwicmVzdWx0Iiwib3BlbiIsImhhbmRsZUNsb3NlIiwiRGF0ZUZuc1V0aWxzIiwic2hyaW5rIiwiZGF0ZUNvbnRyYXQiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBTUEsU0FB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FERCxDQURBLEdBcUJBLE1BQUMsd0RBQUQ7QUFDQyxXQUFPLEVBQUVYLGdCQURWO0FBRUMsV0FBTyxFQUFDLFdBRlQ7QUFHQyxTQUFLLEVBQUMsV0FIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQXpHRixDQURELEVBbUhDLE1BQUMsd0RBQUQ7QUFDQyxRQUFJLEVBQUMsUUFETjtBQUVDLFdBQU8sRUFBQyxXQUZUO0FBR0MsU0FBSyxFQUFDLFNBSFA7QUFJQyxTQUFLLEVBQUU7QUFBRVgsV0FBSyxFQUFFO0FBQVQsS0FKUjtBQUtDLGFBQVMsRUFBRXlCLE9BQU8sQ0FBQ3hCLE1BTHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBbkhELENBdEJELENBREQ7QUFxSkEsQ0FsTUQ7O0dBQU1RLFU7VUFZV2IsUyxFQUM0QjhCLHdEOzs7TUFidkNqQixVO0FBb01TLHFFQUFBeUMsOERBQVUsQ0FBQ3pDLFVBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24vW2lkXS5jMWY3MmIzZjAxNDA2Mjg2N2Y4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHRCdXR0b24sXHJcblx0Q2lyY3VsYXJQcm9ncmVzcyxcclxuXHRGb3JtQ29udHJvbCxcclxuXHRHcmlkLFxyXG5cdElucHV0TGFiZWwsXHJcblx0TWVudUl0ZW0sXHJcblx0U2VsZWN0LFxyXG5cdFNuYWNrYmFyLFxyXG5cdFRleHRhcmVhQXV0b3NpemUsXHJcblx0VGV4dEZpZWxkLFxyXG5cdFR5cG9ncmFwaHksXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IE11aUFsZXJ0IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQWxlcnQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCB7IHVwZGF0ZVJlc2VydmF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vYWN0aW9ucy9yZXNlcnZhdGlvbkFjdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuXHJcbmltcG9ydCBEYXRlRm5zVXRpbHMgZnJvbSAnQGRhdGUtaW8vZGF0ZS1mbnMnO1xyXG5pbXBvcnQge1xyXG5cdE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLFxyXG5cdEtleWJvYXJkVGltZVBpY2tlcixcclxuXHRLZXlib2FyZERhdGVQaWNrZXIsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL3BpY2tlcnMnO1xyXG5cclxuZnVuY3Rpb24gQWxlcnQocHJvcHMpIHtcclxuXHRyZXR1cm4gPE11aUFsZXJ0IGVsZXZhdGlvbj17Nn0gdmFyaWFudD0nZmlsbGVkJyB7Li4ucHJvcHN9IC8+O1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRyb290OiB7XHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdH0sXHJcblx0YnV0dG9uOiB7XHJcblx0XHRtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuXHR9LFxyXG5cdGZvcm1Db250cm9sOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHRtaW5XaWR0aDogJzEwMCUnLFxyXG5cdH0sXHJcblx0dGV4dEZpZWxkOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHR3aWR0aDogJzI1Y2gnLFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEZvcm1TdGF0dXMgPSAoeyBwcmVsb2FkZWRWYWx1ZXMsIGdlbmVyYXRlQ29udHJhY3QgfSkgPT4ge1xyXG5cdGNvbnN0IFtzZWxlY3RlZERhdGVSZXMsIHNldFNlbGVjdGVkRGF0ZVJlc10gPSBSZWFjdC51c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtzZWxlY3RlZERhdGVDb250cmF0LCBzZXRTZWxlY3RlZERhdGVDb250cmF0XSA9IFJlYWN0LnVzZVN0YXRlKCk7XHJcblx0Y29uc29sZS5sb2cocHJlbG9hZGVkVmFsdWVzKTtcclxuXHRjb25zdCBoYW5kbGVEYXRlQ2hhbmdlUmVzID0gKGRhdGUpID0+IHtcclxuXHRcdHNldFNlbGVjdGVkRGF0ZVJlcyhkYXRlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVEYXRlQ2hhbmdlQ29udHJhdCA9IChkYXRlKSA9PiB7XHJcblx0XHRzZXRTZWxlY3RlZERhdGVDb250cmF0KGRhdGUpO1xyXG5cdH07XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IHsgY29udHJvbCwgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybSh7XHJcblx0XHRkZWZhdWx0VmFsdWVzOiBwcmVsb2FkZWRWYWx1ZXMsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0ZXJyb3I6ICcnLFxyXG5cdFx0bWVzc2FnZTogJycsXHJcblx0fSk7XHJcblx0Y29uc3QgeyBzdWNjZXNzLCBsb2FkaW5nLCBlcnJvciwgbWVzc2FnZSB9ID0gdmFsdWVzO1xyXG5cclxuXHRjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChkYXRhKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHRcdHVwZGF0ZVJlc2VydmF0aW9uKGRhdGEsIHJvdXRlci5xdWVyeS5pZCwgdG9rZW4pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRpZiAocmVzdWx0LmVycm9yKSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogcmVzdWx0LmVycm9yIH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiB0cnVlLFxyXG5cdFx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0XHRtZXNzYWdlOiByZXN1bHQubWVzc2FnZSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHQvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHQvLyBcdFJvdXRlci5wdXNoKCcvYWRtaW4vZ2VzdGlvbkRpdmVycy9wYXJ0ZW5haXJlcycpO1xyXG5cdFx0XHRcdC8vIH0sIDMwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e2xvYWRpbmcgJiYgPENpcmN1bGFyUHJvZ3Jlc3MgLz59XHJcblx0XHRcdHtzdWNjZXNzICYmIChcclxuXHRcdFx0XHQ8U25hY2tiYXJcclxuXHRcdFx0XHRcdG9wZW49e29wZW59XHJcblx0XHRcdFx0XHRhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfVxyXG5cdFx0XHRcdFx0b25DbG9zZT17aGFuZGxlQ2xvc2V9PlxyXG5cdFx0XHRcdFx0PEFsZXJ0IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBzZXZlcml0eT0nc3VjY2Vzcyc+XHJcblx0XHRcdFx0XHRcdHttZXNzYWdlfVxyXG5cdFx0XHRcdFx0PC9BbGVydD5cclxuXHRcdFx0XHQ8L1NuYWNrYmFyPlxyXG5cdFx0XHQpfVxyXG5cdFx0XHR7ZXJyb3IgJiYgKFxyXG5cdFx0XHRcdDxTbmFja2JhclxyXG5cdFx0XHRcdFx0b3Blbj17b3Blbn1cclxuXHRcdFx0XHRcdGF1dG9IaWRlRHVyYXRpb249ezYwMDB9XHJcblx0XHRcdFx0XHRvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XHJcblx0XHRcdFx0XHQ8QWxlcnQgb25DbG9zZT17aGFuZGxlQ2xvc2V9IHNldmVyaXR5PSdlcnJvcic+XHJcblx0XHRcdFx0XHRcdHtlcnJvcn1cclxuXHRcdFx0XHRcdDwvQWxlcnQ+XHJcblx0XHRcdFx0PC9TbmFja2Jhcj5cclxuXHRcdFx0KX1cclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lcj5cclxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0XHQ8TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIgdXRpbHM9e0RhdGVGbnNVdGlsc30+XHJcblx0XHRcdFx0XHRcdFx0PEtleWJvYXJkRGF0ZVBpY2tlclxyXG5cdFx0XHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZVRvb2xiYXJcclxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J2lubGluZSdcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J2RhdGVSZXMnXHJcblx0XHRcdFx0XHRcdFx0XHRmb3JtYXQ9J01NL2RkL3l5eXknXHJcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW49J25vcm1hbCdcclxuXHRcdFx0XHRcdFx0XHRcdGlkPSdkYXRlLXBpY2tlci1pbmxpbmUnXHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD0nRGF0ZSBkZSByw6lzZXJ2YXRpb24nXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17c2VsZWN0ZWREYXRlUmVzfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZURhdGVDaGFuZ2VSZXN9XHJcblx0XHRcdFx0XHRcdFx0XHRLZXlib2FyZEJ1dHRvblByb3BzPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCdhcmlhLWxhYmVsJzogJ2NoYW5nZSBkYXRlJyxcclxuXHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9NdWlQaWNrZXJzVXRpbHNQcm92aWRlcj5cclxuXHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblxyXG5cdFx0XHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHRcdDxJbnB1dExhYmVsXHJcblx0XHRcdFx0XHRcdFx0c2hyaW5rXHJcblx0XHRcdFx0XHRcdFx0aWQ9J2RlbW8tc2ltcGxlLXNlbGVjdC1wbGFjZWhvbGRlci1sYWJlbC1sYWJlbCc+XHJcblx0XHRcdFx0XHRcdFx0U3RhdHVzIGRlIGxhIHLDqXNlcnZhdGlvblxyXG5cdFx0XHRcdFx0XHQ8L0lucHV0TGFiZWw+XHJcblxyXG5cdFx0XHRcdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0XHRcdFx0bmFtZT0nc3RhdHVzJ1xyXG5cdFx0XHRcdFx0XHRcdGFzPXtcclxuXHRcdFx0XHRcdFx0XHRcdDxTZWxlY3QgaWQ9J3N0YXR1cy1zZWxlY3QnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J05vdXZlbGxlIHLDqXNlcnZhdGlvbic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Tm91dmVsbGUgcsOpc2VydmF0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nQ29udHJhdCBlbnZvecOpJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRDb250cmF0IGVudm95w6lcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdBY29tcHRlL0NvbnRyYXQgcmXDp3UnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEFjb21wdGUvQ29udHJhdCByZcOndVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J1JlbGFuY2UgY29udHJhdCBub24gcmXDp3UnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFJlbGFuY2UgY29udHJhdCBub24gcmXDp3VcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdSZXNlcnZhdGlvbiB0ZXJtaW7DqWUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFJlc2VydmF0aW9uIHRlcm1pbsOpZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J1Jlc2VydmF0aW9uL0NvbnRyYXQgYW5udWzDqWUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFJlc2VydmF0aW9uL0NvbnRyYXQgYW5udWzDqWVcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvU2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblxyXG5cdFx0XHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0bmFtZT0naW5mb0NvbXBsJ1xyXG5cdFx0XHRcdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9J01lc3NhZ2UgZHUgbG9jYXRhaXJlJ1xyXG5cdFx0XHRcdFx0XHRcdG11bHRpbGluZVxyXG5cdFx0XHRcdFx0XHRcdHJvd3M9ezN9XHJcblx0XHRcdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblxyXG5cdFx0XHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0bmFtZT0nY29tbWVudGFpcmUnXHJcblx0XHRcdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdFx0XHRsYWJlbD0nTm90ZSBzcMOpY2lmaXF1ZSdcclxuXHRcdFx0XHRcdFx0XHRtdWx0aWxpbmVcclxuXHRcdFx0XHRcdFx0XHRyb3dzPXsyfVxyXG5cdFx0XHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cclxuXHRcdFx0XHRcdHshcHJlbG9hZGVkVmFsdWVzLmRhdGVDb250cmF0ID8gKFxyXG5cdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdFx0XHQ8TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIgdXRpbHM9e0RhdGVGbnNVdGlsc30+XHJcblx0XHRcdFx0XHRcdFx0XHQ8S2V5Ym9hcmREYXRlUGlja2VyXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZVRvb2xiYXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD0naW5saW5lJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdkYXRlQ29udHJhdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9ybWF0PSdNTS9kZC95eXl5J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW49J25vcm1hbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J2RhdGUtcGlja2VyLWlubGluZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9J0RhdGUgZGUgZ8OpbsOpcmF0aW9uIGR1IGNvbnRyYXQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtzZWxlY3RlZERhdGVDb250cmF0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlRGF0ZUNoYW5nZUNvbnRyYXR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdEtleWJvYXJkQnV0dG9uUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6ICdjaGFuZ2UgZGF0ZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXI+XHJcblx0XHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17Z2VuZXJhdGVDb250cmFjdH1cclxuXHRcdFx0XHRcdFx0XHR2YXJpYW50PSdjb250YWluZWQnXHJcblx0XHRcdFx0XHRcdFx0Y29sb3I9J3NlY29uZGFyeSc+XHJcblx0XHRcdFx0XHRcdFx0R8OpbsOpcmVyIGxlIGNvbnRyYXRcclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0dHlwZT0nc3VibWl0J1xyXG5cdFx0XHRcdFx0dmFyaWFudD0nY29udGFpbmVkJ1xyXG5cdFx0XHRcdFx0Y29sb3I9J3ByaW1hcnknXHJcblx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdFZhbGlkZXIgbGVzIG1vZGlmaWNhdGlvbnNcclxuXHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoRm9ybVN0YXR1cyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=