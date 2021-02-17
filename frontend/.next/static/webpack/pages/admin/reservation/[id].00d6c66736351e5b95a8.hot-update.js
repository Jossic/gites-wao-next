webpackHotUpdate_N_E("pages/admin/reservation/[id]",{

/***/ "./components/admin/forms/reservation/FormLocation.js":
/*!************************************************************!*\
  !*** ./components/admin/forms/reservation/FormLocation.js ***!
  \************************************************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _actions_reservationActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../actions/reservationActions */ "./actions/reservationActions.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../actions/authActions */ "./actions/authActions.js");





var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\forms\\reservation\\FormLocation.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function Alert(props) {
  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    elevation: 6,
    variant: "filled"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }));
}

_c = Alert;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
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
      margin: theme.spacing(1)
    },
    textField: {
      margin: theme.spacing(1)
    }
  };
});

var FormLocation = function FormLocation(_ref) {
  _s();

  var preloadedValues = _ref.preloadedValues;
  console.log(preloadedValues);
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_11__["getCookie"])('token');
  var classes = useStyles();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_9__["useForm"])({
    defaultValues: preloadedValues
  }),
      control = _useForm.control,
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

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
              Object(_actions_reservationActions__WEBPACK_IMPORTED_MODULE_10__["updateReservation"])(data, router.query.id, token).then(function (result) {
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, loading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["CircularProgress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 16
    }
  }), success && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Snackbar"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 6
    }
  }, message)), error && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Snackbar"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 6
    }
  }, error)), __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    justify: "space-around",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
    inputRef: register,
    name: "nbPers",
    id: "standard-number",
    label: "Nombre de personnes total",
    type: "number",
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 6
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
    inputRef: register,
    name: "nbEnf",
    id: "standard-number",
    label: "Dont enfants de moins de 18 ans",
    type: "number",
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 6
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    justify: "space-around",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
    inputRef: register,
    name: "dateArrivee",
    id: "standard-number",
    label: "Date de d\xE9but",
    type: "date",
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
    inputRef: register,
    name: "dateDepart",
    id: "standard-number",
    label: "Date de fin",
    type: "date",
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    component: "fieldset",
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormLabel"], {
    component: "legend",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 6
    }
  }, "Merci d'indiquer si vous nous avez d\xE9ja contact\xE9 par :"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    justify: "space-around",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }, __jsx(FormControlLabel, {
    control: __jsx(Checkbox, {
      name: "contactMail",
      inputRef: register,
      defaultValue: false,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 10
      }
    }),
    label: "Mail",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 8
    }
  }), __jsx(FormControlLabel, {
    control: __jsx(Checkbox, {
      name: "contactTel",
      inputRef: register,
      defaultValue: false,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 10
      }
    }),
    label: "T\xE9l\xE9phone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 8
    }
  }), __jsx(FormControlLabel, {
    control: __jsx(Checkbox, {
      name: "contactAbritel",
      inputRef: register,
      defaultValue: false,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 10
      }
    }),
    label: "Abritel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 8
    }
  }), __jsx(FormControlLabel, {
    control: __jsx(Checkbox, {
      name: "contactLeboncoin",
      inputRef: register,
      defaultValue: false,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 10
      }
    }),
    label: "Leboncoin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 8
    }
  }), __jsx(FormControlLabel, {
    control: __jsx(Checkbox, {
      name: "contactAutre",
      inputRef: register,
      defaultValue: false,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 10
      }
    }),
    label: "Autre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 8
    }
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    justify: "space-around",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
    inputRef: register,
    name: "nbChien",
    id: "standard-number",
    label: "Nombre de chien ? (3\u20AC/jour/animal)",
    type: "number",
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 6
    }
  }), __jsx(FormControlLabel, {
    control: __jsx(Switch, {
      inputRef: register,
      checked: true,
      name: "litFait",
      color: "primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 8
      }
    }),
    label: "Souhaitez-vous l'option lit fait \xE0 l'arriv\xE9e ?",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
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
      lineNumber: 240,
      columnNumber: 5
    }
  }, "Valider les modifications")));
};

_s(FormLocation, "zr1a146LZmsHJTvXJhIz7eYGYcM=", false, function () {
  return [useStyles, react_hook_form__WEBPACK_IMPORTED_MODULE_9__["useForm"]];
});

_c2 = FormLocation;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(FormLocation));

var _c, _c2, _c3;

$RefreshReg$(_c, "Alert");
$RefreshReg$(_c2, "FormLocation");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9yZXNlcnZhdGlvbi9Gb3JtTG9jYXRpb24uanMiXSwibmFtZXMiOlsiQWxlcnQiLCJwcm9wcyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsImJ1dHRvbiIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsIm1hcmdpblRvcCIsImZvcm1Db250cm9sIiwibWFyZ2luIiwidGV4dEZpZWxkIiwiRm9ybUxvY2F0aW9uIiwicHJlbG9hZGVkVmFsdWVzIiwiY29uc29sZSIsImxvZyIsInRva2VuIiwiZ2V0Q29va2llIiwiY2xhc3NlcyIsInVzZUZvcm0iLCJkZWZhdWx0VmFsdWVzIiwiY29udHJvbCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic3VjY2VzcyIsImVycm9yIiwibWVzc2FnZSIsInZhbHVlcyIsInNldFZhbHVlcyIsIm9uU3VibWl0IiwiZGF0YSIsInVwZGF0ZVJlc2VydmF0aW9uIiwicm91dGVyIiwicXVlcnkiLCJpZCIsInRoZW4iLCJyZXN1bHQiLCJvcGVuIiwiaGFuZGxlQ2xvc2UiLCJzaHJpbmsiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUNyQixTQUFPLE1BQUMsOERBQUQ7QUFBVSxhQUFTLEVBQUUsQ0FBckI7QUFBd0IsV0FBTyxFQUFDO0FBQWhDLEtBQTZDQSxLQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVA7QUFDQTs7S0FGUUQsSztBQUlULElBQU1FLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN4Q0Ms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QUMsU0FIUDtBQUlDLGFBQVMsRUFBRUosT0FBTyxDQUFDYixNQUpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQXpJRCxDQXRCRCxDQUREO0FBMEtBLENBOU1EOztHQUFNTyxZO1VBR1daLFMsRUFDNEJtQix1RDs7O01BSnZDUCxZO0FBZ05TLHFFQUFBOEIsOERBQVUsQ0FBQzlCLFlBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24vW2lkXS4wMGQ2YzY2NzM2MzUxZTViOTVhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHRCdXR0b24sXHJcblx0Q2lyY3VsYXJQcm9ncmVzcyxcclxuXHRGb3JtQ29udHJvbCxcclxuXHRGb3JtR3JvdXAsXHJcblx0Rm9ybUxhYmVsLFxyXG5cdEdyaWQsXHJcblx0SW5wdXRMYWJlbCxcclxuXHRNZW51SXRlbSxcclxuXHRTZWxlY3QsXHJcblx0U25hY2tiYXIsXHJcblx0VGV4dGFyZWFBdXRvc2l6ZSxcclxuXHRUZXh0RmllbGQsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IE11aUFsZXJ0IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQWxlcnQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCB7IHVwZGF0ZVJlc2VydmF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vYWN0aW9ucy9yZXNlcnZhdGlvbkFjdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIEFsZXJ0KHByb3BzKSB7XHJcblx0cmV0dXJuIDxNdWlBbGVydCBlbGV2YXRpb249ezZ9IHZhcmlhbnQ9J2ZpbGxlZCcgey4uLnByb3BzfSAvPjtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0cm9vdDoge1xyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHR9LFxyXG5cdGJ1dHRvbjoge1xyXG5cdFx0bWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdH0sXHJcblx0Zm9ybUNvbnRyb2w6IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuXHR9LFxyXG5cdHRleHRGaWVsZDoge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEZvcm1Mb2NhdGlvbiA9ICh7IHByZWxvYWRlZFZhbHVlcyB9KSA9PiB7XHJcblx0Y29uc29sZS5sb2cocHJlbG9hZGVkVmFsdWVzKTtcclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0Y29uc3QgeyBjb250cm9sLCByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKHtcclxuXHRcdGRlZmF1bHRWYWx1ZXM6IHByZWxvYWRlZFZhbHVlcyxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuXHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0c3VjY2VzczogJycsXHJcblx0XHRlcnJvcjogJycsXHJcblx0XHRtZXNzYWdlOiAnJyxcclxuXHR9KTtcclxuXHRjb25zdCB7IHN1Y2Nlc3MsIGxvYWRpbmcsIGVycm9yLCBtZXNzYWdlIH0gPSB2YWx1ZXM7XHJcblxyXG5cdGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdFx0dXBkYXRlUmVzZXJ2YXRpb24oZGF0YSwgcm91dGVyLnF1ZXJ5LmlkLCB0b2tlbikudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHRcdGlmIChyZXN1bHQuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiByZXN1bHQuZXJyb3IgfSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IHRydWUsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IHJlc3VsdC5tZXNzYWdlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdC8vIFx0Um91dGVyLnB1c2goJy9hZG1pbi9nZXN0aW9uRGl2ZXJzL3BhcnRlbmFpcmVzJyk7XHJcblx0XHRcdFx0Ly8gfSwgMzAwMCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7bG9hZGluZyAmJiA8Q2lyY3VsYXJQcm9ncmVzcyAvPn1cclxuXHRcdFx0e3N1Y2Nlc3MgJiYgKFxyXG5cdFx0XHRcdDxTbmFja2JhclxyXG5cdFx0XHRcdFx0b3Blbj17b3Blbn1cclxuXHRcdFx0XHRcdGF1dG9IaWRlRHVyYXRpb249ezYwMDB9XHJcblx0XHRcdFx0XHRvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XHJcblx0XHRcdFx0XHQ8QWxlcnQgb25DbG9zZT17aGFuZGxlQ2xvc2V9IHNldmVyaXR5PSdzdWNjZXNzJz5cclxuXHRcdFx0XHRcdFx0e21lc3NhZ2V9XHJcblx0XHRcdFx0XHQ8L0FsZXJ0PlxyXG5cdFx0XHRcdDwvU25hY2tiYXI+XHJcblx0XHRcdCl9XHJcblx0XHRcdHtlcnJvciAmJiAoXHJcblx0XHRcdFx0PFNuYWNrYmFyXHJcblx0XHRcdFx0XHRvcGVuPXtvcGVufVxyXG5cdFx0XHRcdFx0YXV0b0hpZGVEdXJhdGlvbj17NjAwMH1cclxuXHRcdFx0XHRcdG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cclxuXHRcdFx0XHRcdDxBbGVydCBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gc2V2ZXJpdHk9J2Vycm9yJz5cclxuXHRcdFx0XHRcdFx0e2Vycm9yfVxyXG5cdFx0XHRcdFx0PC9BbGVydD5cclxuXHRcdFx0XHQ8L1NuYWNrYmFyPlxyXG5cdFx0XHQpfVxyXG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J3NwYWNlLWFyb3VuZCc+XHJcblx0XHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0bmFtZT0nbmJQZXJzJ1xyXG5cdFx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0XHRsYWJlbD0nTm9tYnJlIGRlIHBlcnNvbm5lcyB0b3RhbCdcclxuXHRcdFx0XHRcdFx0dHlwZT0nbnVtYmVyJ1xyXG5cdFx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdG5hbWU9J25iRW5mJ1xyXG5cdFx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0XHRsYWJlbD0nRG9udCBlbmZhbnRzIGRlIG1vaW5zIGRlIDE4IGFucydcclxuXHRcdFx0XHRcdFx0dHlwZT0nbnVtYmVyJ1xyXG5cdFx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J3NwYWNlLWFyb3VuZCc+XHJcblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRuYW1lPSdkYXRlQXJyaXZlZSdcclxuXHRcdFx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPSdEYXRlIGRlIGTDqWJ1dCdcclxuXHRcdFx0XHRcdFx0XHR0eXBlPSdkYXRlJ1xyXG5cdFx0XHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cclxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdG5hbWU9J2RhdGVEZXBhcnQnXHJcblx0XHRcdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdFx0XHRsYWJlbD0nRGF0ZSBkZSBmaW4nXHJcblx0XHRcdFx0XHRcdFx0dHlwZT0nZGF0ZSdcclxuXHRcdFx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblxyXG5cdFx0XHRcdDxGb3JtQ29udHJvbFxyXG5cdFx0XHRcdFx0Y29tcG9uZW50PSdmaWVsZHNldCdcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHQ8Rm9ybUxhYmVsIGNvbXBvbmVudD0nbGVnZW5kJz5cclxuXHRcdFx0XHRcdFx0TWVyY2kgZCdpbmRpcXVlciBzaSB2b3VzIG5vdXMgYXZleiBkw6lqYSBjb250YWN0w6kgcGFyIDpcclxuXHRcdFx0XHRcdDwvRm9ybUxhYmVsPlxyXG5cdFx0XHRcdFx0PEZvcm1Hcm91cD5cclxuXHRcdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J3NwYWNlLWFyb3VuZCc+XHJcblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sTGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRyb2w9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2hlY2tib3hcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdjb250YWN0TWFpbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPSdNYWlsJ1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sTGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRyb2w9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2hlY2tib3hcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdjb250YWN0VGVsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2ZhbHNlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9J1TDqWzDqXBob25lJ1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sTGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRyb2w9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2hlY2tib3hcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdjb250YWN0QWJyaXRlbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPSdBYnJpdGVsJ1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sTGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRyb2w9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2hlY2tib3hcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdjb250YWN0TGVib25jb2luJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2ZhbHNlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9J0xlYm9uY29pbidcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250cm9sPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PENoZWNrYm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nY29udGFjdEF1dHJlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2ZhbHNlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9J0F1dHJlJ1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0ey8qIDxGb3JtSGVscGVyVGV4dD5CZSBjYXJlZnVsPC9Gb3JtSGVscGVyVGV4dD4gKi99XHJcblx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXIganVzdGlmeT0nc3BhY2UtYXJvdW5kJz5cclxuXHRcdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRuYW1lPSduYkNoaWVuJ1xyXG5cdFx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0XHRsYWJlbD0nTm9tYnJlIGRlIGNoaWVuID8gKDPigqwvam91ci9hbmltYWwpJ1xyXG5cdFx0XHRcdFx0XHR0eXBlPSdudW1iZXInXHJcblx0XHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xMYWJlbFxyXG5cdFx0XHRcdFx0XHRjb250cm9sPXtcclxuXHRcdFx0XHRcdFx0XHQ8U3dpdGNoXHJcblx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT0nbGl0RmFpdCdcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yPSdwcmltYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9XCJTb3VoYWl0ZXotdm91cyBsJ29wdGlvbiBsaXQgZmFpdCDDoCBsJ2Fycml2w6llID9cIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0dHlwZT0nc3VibWl0J1xyXG5cdFx0XHRcdFx0dmFyaWFudD0nY29udGFpbmVkJ1xyXG5cdFx0XHRcdFx0Y29sb3I9J3ByaW1hcnknXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdFZhbGlkZXIgbGVzIG1vZGlmaWNhdGlvbnNcclxuXHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoRm9ybUxvY2F0aW9uKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==