webpackHotUpdate_N_E("pages/tarifs",{

/***/ "./components/admin/forms/FormCalculTarif.js":
/*!***************************************************!*\
  !*** ./components/admin/forms/FormCalculTarif.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");


var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\forms\\FormCalculTarif.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    form: {
      width: '70%',
      margin: theme.spacing(2)
    },
    root: {
      width: '80%'
    },
    button: {
      margin: theme.spacing(2),
      width: '80%'
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

var FormCalculTarif = function FormCalculTarif(_ref) {
  _s();

  var gites = _ref.gites;

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"])(),
      control = _useForm.control,
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      selectedDateDebut = _React$useState2[0],
      setSelectedDateDebut = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      selectedDateFin = _React$useState4[0],
      setSelectedDateFin = _React$useState4[1];

  var handleDateChangeDebut = function handleDateChangeDebut(date) {
    setSelectedDateDebut(date);
  };

  var handleDateChangeFin = function handleDateChangeFin(date) {
    setSelectedDateFin(date);
  };

  var onSubmit = function onSubmit(data) {
    console.log(data);
  };

  return __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    className: classes.form,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 3
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
    shrink: true,
    id: "demo-simple-select-placeholder-label-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, "Gite"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["Controller"], {
    control: control,
    name: "gite",
    as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
      id: "declencheur-select",
      defaultValue: "Envoi manuel",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 7
      }
    }, gites.map(function (gite) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
        value: gite.slug,
        key: gite.slug,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 9
        }
      }, gite.nom);
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 4
    }
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_6__["MuiPickersUtilsProvider"], {
    utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_6__["KeyboardDatePicker"], {
    inputRef: register,
    margin: "normal",
    id: "date-picker-dialog",
    name: "dateDebut",
    label: "Date de d\xE9but",
    format: "MM/dd/yyyy",
    defaultValue: "",
    value: selectedDateDebut,
    onChange: handleDateChangeDebut,
    KeyboardButtonProps: {
      'aria-label': 'change date'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 6
    }
  }), __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_6__["KeyboardDatePicker"], {
    inputRef: register // disableToolbar
    ,
    name: "dateFin",
    format: "MM/dd/yyyy",
    margin: "normal",
    id: "date-picker-inline",
    label: "Date de fin",
    defaultValue: "",
    value: selectedDateFin,
    onChange: handleDateChangeFin,
    KeyboardButtonProps: {
      'aria-label': 'change date'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 6
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    className: classes.textField,
    inputRef: register,
    name: "npPers",
    type: "number",
    id: "standard-number",
    label: "Nombre de personnes au total",
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 4
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    className: classes.textField,
    inputRef: register,
    name: "nbEnf",
    type: "number",
    id: "standard-number",
    label: "Nombre d'enfants -18 ans",
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 4
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    className: classes.textField,
    inputRef: register,
    name: "nbChien",
    type: "number",
    id: "standard-number",
    label: "Chiens (3\u20AC/j/animal)",
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 4
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "submit",
    variant: "contained",
    color: "primary",
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 4
    }
  }, "Calculer le tarif"));
};

_s(FormCalculTarif, "SJkItSDUKDykikJDd9ADwtY9rJM=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"], useStyles];
});

_c = FormCalculTarif;
/* harmony default export */ __webpack_exports__["default"] = (FormCalculTarif);

var _c;

$RefreshReg$(_c, "FormCalculTarif");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9Gb3JtQ2FsY3VsVGFyaWYuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiZm9ybSIsIndpZHRoIiwibWFyZ2luIiwic3BhY2luZyIsInJvb3QiLCJidXR0b24iLCJmb3JtQ29udHJvbCIsInRleHRGaWVsZCIsIkZvcm1DYWxjdWxUYXJpZiIsImdpdGVzIiwidXNlRm9ybSIsImNvbnRyb2wiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwic2VsZWN0ZWREYXRlRGVidXQiLCJzZXRTZWxlY3RlZERhdGVEZWJ1dCIsInNlbGVjdGVkRGF0ZUZpbiIsInNldFNlbGVjdGVkRGF0ZUZpbiIsImhhbmRsZURhdGVDaGFuZ2VEZWJ1dCIsImRhdGUiLCJoYW5kbGVEYXRlQ2hhbmdlRmluIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImdpdGUiLCJzbHVnIiwibm9tIiwiRGF0ZUZuc1V0aWxzIiwic2hyaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBTUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3hDQyxRQUFJLEVBQUU7QUFDTEMsV0FBSyxFQUFFLEtBREY7QUFFTEMsWUFBTSxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkO0FBRkgsS0FEa0M7QUFLeENDLFFBQUksRUFBRTtBQUNMSCxXQUFLLEVBQUU7QUFERixLQUxrQztBQVF4Q0ksVUFBTSxFQUFFO0FBQ1BILFlBQU0sRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxDQUREO0FBRVBGLFdBQUssRUFBRTtBQUZBLEtBUmdDO0FBWXhDSyxlQUFXLEVBQUU7QUFDWkosWUFBTSxF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RUFBRTtBQUNoQnFCLFlBQU0sRUFBRTtBQURRLEtBUGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0RUQsRUFpRkMsTUFBQywyREFBRDtBQUNDLGFBQVMsRUFBRW5CLE9BQU8sQ0FBQ1AsU0FEcEI7QUFFQyxZQUFRLEVBQUVLLFFBRlg7QUFHQyxRQUFJLEVBQUMsU0FITjtBQUlDLFFBQUksRUFBQyxRQUpOO0FBS0MsTUFBRSxFQUFDLGlCQUxKO0FBTUMsU0FBSyxFQUFDLDJCQU5QO0FBT0MsbUJBQWUsRUFBRTtBQUNoQnFCLFlBQU0sRUFBRTtBQURRLEtBUGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqRkQsRUE2RkMsTUFBQyx3REFBRDtBQUNDLFFBQUksRUFBQyxRQUROO0FBRUMsV0FBTyxFQUFDLFdBRlQ7QUFHQyxTQUFLLEVBQUMsU0FIUDtBQUlDLGFBQVMsRUFBRW5CLE9BQU8sQ0FBQ1QsTUFKcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkE3RkQsQ0FERDtBQXVHQSxDQXpIRDs7R0FBTUcsZTtVQUN1Q0UsdUQsRUFDNUJiLFM7OztLQUZYVyxlO0FBMkhTQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90YXJpZnMuZTMxYTEyODhhODgyMWE2ZTI4MTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRlRm5zVXRpbHMgZnJvbSAnQGRhdGUtaW8vZGF0ZS1mbnMnO1xyXG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHtcclxuXHRCdXR0b24sXHJcblx0Rm9ybUNvbnRyb2wsXHJcblx0SW5wdXRMYWJlbCxcclxuXHRNZW51SXRlbSxcclxuXHRTZWxlY3QsXHJcblx0VGV4dEZpZWxkLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7XHJcblx0TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIsXHJcblx0S2V5Ym9hcmRUaW1lUGlja2VyLFxyXG5cdEtleWJvYXJkRGF0ZVBpY2tlcixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvcGlja2Vycyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRmb3JtOiB7XHJcblx0XHR3aWR0aDogJzcwJScsXHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0fSxcclxuXHRyb290OiB7XHJcblx0XHR3aWR0aDogJzgwJScsXHJcblx0fSxcclxuXHRidXR0b246IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygyKSxcclxuXHRcdHdpZHRoOiAnODAlJyxcclxuXHR9LFxyXG5cdGZvcm1Db250cm9sOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHR3aWR0aDogJzgwJScsXHJcblx0fSxcclxuXHR0ZXh0RmllbGQ6IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdHdpZHRoOiAnODAlJyxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5jb25zdCBGb3JtQ2FsY3VsVGFyaWYgPSAoeyBnaXRlcyB9KSA9PiB7XHJcblx0Y29uc3QgeyBjb250cm9sLCByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKCk7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IFtzZWxlY3RlZERhdGVEZWJ1dCwgc2V0U2VsZWN0ZWREYXRlRGVidXRdID0gUmVhY3QudXNlU3RhdGUoKTtcclxuXHRjb25zdCBbc2VsZWN0ZWREYXRlRmluLCBzZXRTZWxlY3RlZERhdGVGaW5dID0gUmVhY3QudXNlU3RhdGUoKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlRGF0ZUNoYW5nZURlYnV0ID0gKGRhdGUpID0+IHtcclxuXHRcdHNldFNlbGVjdGVkRGF0ZURlYnV0KGRhdGUpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZURhdGVDaGFuZ2VGaW4gPSAoZGF0ZSkgPT4ge1xyXG5cdFx0c2V0U2VsZWN0ZWREYXRlRmluKGRhdGUpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PlxyXG5cdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHQ8SW5wdXRMYWJlbFxyXG5cdFx0XHRcdFx0c2hyaW5rXHJcblx0XHRcdFx0XHRpZD0nZGVtby1zaW1wbGUtc2VsZWN0LXBsYWNlaG9sZGVyLWxhYmVsLWxhYmVsJz5cclxuXHRcdFx0XHRcdEdpdGVcclxuXHRcdFx0XHQ8L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0PENvbnRyb2xsZXJcclxuXHRcdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0XHRuYW1lPSdnaXRlJ1xyXG5cdFx0XHRcdFx0YXM9e1xyXG5cdFx0XHRcdFx0XHQ8U2VsZWN0XHJcblx0XHRcdFx0XHRcdFx0aWQ9J2RlY2xlbmNoZXVyLXNlbGVjdCdcclxuXHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9J0Vudm9pIG1hbnVlbCc+XHJcblx0XHRcdFx0XHRcdFx0e2dpdGVzLm1hcCgoZ2l0ZSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPXtnaXRlLnNsdWd9IGtleT17Z2l0ZS5zbHVnfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2dpdGUubm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PC9TZWxlY3Q+XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHJcblx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdDxNdWlQaWNrZXJzVXRpbHNQcm92aWRlciB1dGlscz17RGF0ZUZuc1V0aWxzfT5cclxuXHRcdFx0XHRcdDxLZXlib2FyZERhdGVQaWNrZXJcclxuXHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRtYXJnaW49J25vcm1hbCdcclxuXHRcdFx0XHRcdFx0aWQ9J2RhdGUtcGlja2VyLWRpYWxvZydcclxuXHRcdFx0XHRcdFx0bmFtZT0nZGF0ZURlYnV0J1xyXG5cdFx0XHRcdFx0XHRsYWJlbD0nRGF0ZSBkZSBkw6lidXQnXHJcblx0XHRcdFx0XHRcdGZvcm1hdD0nTU0vZGQveXl5eSdcclxuXHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPScnXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtzZWxlY3RlZERhdGVEZWJ1dH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZURhdGVDaGFuZ2VEZWJ1dH1cclxuXHRcdFx0XHRcdFx0S2V5Ym9hcmRCdXR0b25Qcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRcdCdhcmlhLWxhYmVsJzogJ2NoYW5nZSBkYXRlJyxcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8S2V5Ym9hcmREYXRlUGlja2VyXHJcblx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0Ly8gZGlzYWJsZVRvb2xiYXJcclxuXHRcdFx0XHRcdFx0bmFtZT0nZGF0ZUZpbidcclxuXHRcdFx0XHRcdFx0Zm9ybWF0PSdNTS9kZC95eXl5J1xyXG5cdFx0XHRcdFx0XHRtYXJnaW49J25vcm1hbCdcclxuXHRcdFx0XHRcdFx0aWQ9J2RhdGUtcGlja2VyLWlubGluZSdcclxuXHRcdFx0XHRcdFx0bGFiZWw9J0RhdGUgZGUgZmluJ1xyXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9JydcclxuXHRcdFx0XHRcdFx0dmFsdWU9e3NlbGVjdGVkRGF0ZUZpbn1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZURhdGVDaGFuZ2VGaW59XHJcblx0XHRcdFx0XHRcdEtleWJvYXJkQnV0dG9uUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6ICdjaGFuZ2UgZGF0ZScsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXI+XHJcblx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblxyXG5cdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuXHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0bmFtZT0nbnBQZXJzJ1xyXG5cdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdGxhYmVsPSdOb21icmUgZGUgcGVyc29ubmVzIGF1IHRvdGFsJ1xyXG5cdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblxyXG5cdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuXHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0bmFtZT0nbmJFbmYnXHJcblx0XHRcdFx0dHlwZT0nbnVtYmVyJ1xyXG5cdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0bGFiZWw9XCJOb21icmUgZCdlbmZhbnRzIC0xOCBhbnNcIlxyXG5cdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRuYW1lPSduYkNoaWVuJ1xyXG5cdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdGxhYmVsPSdDaGllbnMgKDPigqwvai9hbmltYWwpJ1xyXG5cdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblxyXG5cdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0dHlwZT0nc3VibWl0J1xyXG5cdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRjb2xvcj0ncHJpbWFyeSdcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRDYWxjdWxlciBsZSB0YXJpZlxyXG5cdFx0XHQ8L0J1dHRvbj5cclxuXHRcdDwvZm9ybT5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUNhbGN1bFRhcmlmO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9