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
    root: {
      width: '100%'
    },
    button: {
      margin: theme.spacing(2),
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 3
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
    shrink: true,
    id: "demo-simple-select-placeholder-label-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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
        lineNumber: 66,
        columnNumber: 7
      }
    }, gites.map(function (gite) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
        value: gite.slug,
        key: gite.slug,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 9
        }
      }, gite.nom);
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 4
    }
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_6__["MuiPickersUtilsProvider"], {
    utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_6__["KeyboardDatePicker"], {
    inputRef: register,
    disableToolbar: true,
    variant: "inline",
    name: "dateDebut",
    format: "MM/dd/yyyy",
    margin: "normal",
    id: "date-picker-inline",
    label: "Date de r\xE9servation",
    value: selectedDateDebut,
    onChange: handleDateChangeDebut,
    KeyboardButtonProps: {
      'aria-label': 'change date'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 6
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 4
    }
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_6__["MuiPickersUtilsProvider"], {
    utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_6__["KeyboardDatePicker"], {
    inputRef: register,
    disableToolbar: true,
    variant: "inline",
    name: "dateFin",
    format: "MM/dd/yyyy",
    margin: "normal",
    id: "date-picker-inline",
    label: "Date de r\xE9servation",
    value: selectedDateFin,
    onChange: handleDateChangeFin,
    KeyboardButtonProps: {
      'aria-label': 'change date'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
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
      lineNumber: 119,
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
      lineNumber: 131,
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
      lineNumber: 142,
      columnNumber: 4
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9Gb3JtQ2FsY3VsVGFyaWYuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwiYnV0dG9uIiwibWFyZ2luIiwic3BhY2luZyIsImZvcm1Db250cm9sIiwidGV4dEZpZWxkIiwiRm9ybUNhbGN1bFRhcmlmIiwiZ2l0ZXMiLCJ1c2VGb3JtIiwiY29udHJvbCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiY2xhc3NlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZWxlY3RlZERhdGVEZWJ1dCIsInNldFNlbGVjdGVkRGF0ZURlYnV0Iiwic2VsZWN0ZWREYXRlRmluIiwic2V0U2VsZWN0ZWREYXRlRmluIiwiaGFuZGxlRGF0ZUNoYW5nZURlYnV0IiwiZGF0ZSIsImhhbmRsZURhdGVDaGFuZ2VGaW4iLCJvblN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiZ2l0ZSIsInNsdWciLCJub20iLCJEYXRlRm5zVXRpbHMiLCJzaHJpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFNQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDeENDLFFBQUksRUFBRTtBQUNMQyxXQUFLLEVBQUU7QUFERixLQURrQztBQUl4Q0MsVUFBTSxFQUFFO0FBQ1BDLFlBQU0sRUFBRUosS0FBSyxDQUFDSyxPQUFOLENBQWMsQ0FBZCxDQUREO0FBRVBILFdBQUssRUFBRTtBQUZBLEtBSmdDO0FBUXhDSSxlQUFXLEVBQUU7QUFDWkYsWUFBTSxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBYyxDQUFkLENBREk7QUFFWkgsV0FBSyxFQUFFO0FBRkssS0FSMkI7QUFZeENLLGFBQVMsRUFBRTtBQUNWSCxZQUFNLEVBQUVKLEtB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LFFBSk47QUFLQyxNQUFFLEVBQUMsaUJBTEo7QUFNQyxTQUFLLEVBQUMsMEJBTlA7QUFPQyxtQkFBZSxFQUFFO0FBQ2hCcUIsWUFBTSxFQUFFO0FBRFEsS0FQbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVFRCxFQXVGQyxNQUFDLDJEQUFEO0FBQ0MsYUFBUyxFQUFFbkIsT0FBTyxDQUFDUCxTQURwQjtBQUVDLFlBQVEsRUFBRUssUUFGWDtBQUdDLFFBQUksRUFBQyxTQUhOO0FBSUMsUUFBSSxFQUFDLFFBSk47QUFLQyxNQUFFLEVBQUMsaUJBTEo7QUFNQyxTQUFLLEVBQUMsMkJBTlA7QUFPQyxtQkFBZSxFQUFFO0FBQ2hCcUIsWUFBTSxFQUFFO0FBRFEsS0FQbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZGRCxFQW1HQyxNQUFDLHdEQUFEO0FBQVEsYUFBUyxFQUFFbkIsT0FBTyxDQUFDWCxNQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQW5HRCxDQUREO0FBdUdBLENBekhEOztHQUFNSyxlO1VBQ3VDRSx1RCxFQUM1QlosUzs7O0tBRlhVLGU7QUEySFNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rhcmlmcy42NThjMmNmMDhhNjkwYzA2Y2UzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGVGbnNVdGlscyBmcm9tICdAZGF0ZS1pby9kYXRlLWZucyc7XHJcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQge1xyXG5cdEJ1dHRvbixcclxuXHRGb3JtQ29udHJvbCxcclxuXHRJbnB1dExhYmVsLFxyXG5cdE1lbnVJdGVtLFxyXG5cdFNlbGVjdCxcclxuXHRUZXh0RmllbGQsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtcclxuXHRNdWlQaWNrZXJzVXRpbHNQcm92aWRlcixcclxuXHRLZXlib2FyZFRpbWVQaWNrZXIsXHJcblx0S2V5Ym9hcmREYXRlUGlja2VyLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9waWNrZXJzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0fSxcclxuXHRidXR0b246IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygyKSxcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0fSxcclxuXHRmb3JtQ29udHJvbDoge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHR9LFxyXG5cdHRleHRGaWVsZDoge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5jb25zdCBGb3JtQ2FsY3VsVGFyaWYgPSAoeyBnaXRlcyB9KSA9PiB7XHJcblx0Y29uc3QgeyBjb250cm9sLCByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKCk7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IFtzZWxlY3RlZERhdGVEZWJ1dCwgc2V0U2VsZWN0ZWREYXRlRGVidXRdID0gUmVhY3QudXNlU3RhdGUoKTtcclxuXHRjb25zdCBbc2VsZWN0ZWREYXRlRmluLCBzZXRTZWxlY3RlZERhdGVGaW5dID0gUmVhY3QudXNlU3RhdGUoKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlRGF0ZUNoYW5nZURlYnV0ID0gKGRhdGUpID0+IHtcclxuXHRcdHNldFNlbGVjdGVkRGF0ZURlYnV0KGRhdGUpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZURhdGVDaGFuZ2VGaW4gPSAoZGF0ZSkgPT4ge1xyXG5cdFx0c2V0U2VsZWN0ZWREYXRlRmluKGRhdGUpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcblx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdDxJbnB1dExhYmVsXHJcblx0XHRcdFx0XHRzaHJpbmtcclxuXHRcdFx0XHRcdGlkPSdkZW1vLXNpbXBsZS1zZWxlY3QtcGxhY2Vob2xkZXItbGFiZWwtbGFiZWwnPlxyXG5cdFx0XHRcdFx0R2l0ZVxyXG5cdFx0XHRcdDwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdFx0Y29udHJvbD17Y29udHJvbH1cclxuXHRcdFx0XHRcdG5hbWU9J2dpdGUnXHJcblx0XHRcdFx0XHRhcz17XHJcblx0XHRcdFx0XHRcdDxTZWxlY3RcclxuXHRcdFx0XHRcdFx0XHRpZD0nZGVjbGVuY2hldXItc2VsZWN0J1xyXG5cdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT0nRW52b2kgbWFudWVsJz5cclxuXHRcdFx0XHRcdFx0XHR7Z2l0ZXMubWFwKChnaXRlKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9e2dpdGUuc2x1Z30ga2V5PXtnaXRlLnNsdWd9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Z2l0ZS5ub219XHJcblx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHQ8L1NlbGVjdD5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cclxuXHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0PE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyIHV0aWxzPXtEYXRlRm5zVXRpbHN9PlxyXG5cdFx0XHRcdFx0PEtleWJvYXJkRGF0ZVBpY2tlclxyXG5cdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdGRpc2FibGVUb29sYmFyXHJcblx0XHRcdFx0XHRcdHZhcmlhbnQ9J2lubGluZSdcclxuXHRcdFx0XHRcdFx0bmFtZT0nZGF0ZURlYnV0J1xyXG5cdFx0XHRcdFx0XHRmb3JtYXQ9J01NL2RkL3l5eXknXHJcblx0XHRcdFx0XHRcdG1hcmdpbj0nbm9ybWFsJ1xyXG5cdFx0XHRcdFx0XHRpZD0nZGF0ZS1waWNrZXItaW5saW5lJ1xyXG5cdFx0XHRcdFx0XHRsYWJlbD0nRGF0ZSBkZSByw6lzZXJ2YXRpb24nXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtzZWxlY3RlZERhdGVEZWJ1dH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZURhdGVDaGFuZ2VEZWJ1dH1cclxuXHRcdFx0XHRcdFx0S2V5Ym9hcmRCdXR0b25Qcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRcdCdhcmlhLWxhYmVsJzogJ2NoYW5nZSBkYXRlJyxcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9NdWlQaWNrZXJzVXRpbHNQcm92aWRlcj5cclxuXHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHJcblx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdDxNdWlQaWNrZXJzVXRpbHNQcm92aWRlciB1dGlscz17RGF0ZUZuc1V0aWxzfT5cclxuXHRcdFx0XHRcdDxLZXlib2FyZERhdGVQaWNrZXJcclxuXHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRkaXNhYmxlVG9vbGJhclxyXG5cdFx0XHRcdFx0XHR2YXJpYW50PSdpbmxpbmUnXHJcblx0XHRcdFx0XHRcdG5hbWU9J2RhdGVGaW4nXHJcblx0XHRcdFx0XHRcdGZvcm1hdD0nTU0vZGQveXl5eSdcclxuXHRcdFx0XHRcdFx0bWFyZ2luPSdub3JtYWwnXHJcblx0XHRcdFx0XHRcdGlkPSdkYXRlLXBpY2tlci1pbmxpbmUnXHJcblx0XHRcdFx0XHRcdGxhYmVsPSdEYXRlIGRlIHLDqXNlcnZhdGlvbidcclxuXHRcdFx0XHRcdFx0dmFsdWU9e3NlbGVjdGVkRGF0ZUZpbn1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZURhdGVDaGFuZ2VGaW59XHJcblx0XHRcdFx0XHRcdEtleWJvYXJkQnV0dG9uUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6ICdjaGFuZ2UgZGF0ZScsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXI+XHJcblx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblxyXG5cdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuXHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0bmFtZT0nbnBQZXJzJ1xyXG5cdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdGxhYmVsPSdOb21icmUgZGUgcGVyc29ubmVzIGF1IHRvdGFsJ1xyXG5cdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblxyXG5cdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuXHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0bmFtZT0nbmJFbmYnXHJcblx0XHRcdFx0dHlwZT0nbnVtYmVyJ1xyXG5cdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0bGFiZWw9XCJOb21icmUgZCdlbmZhbnRzIC0xOCBhbnNcIlxyXG5cdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRuYW1lPSduYkNoaWVuJ1xyXG5cdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdGxhYmVsPSdDaGllbnMgKDPigqwvai9hbmltYWwpJ1xyXG5cdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblxyXG5cdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PkNhbGN1bGVyIGxlIHRhcmlmPC9CdXR0b24+XHJcblx0XHQ8L2Zvcm0+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1DYWxjdWxUYXJpZjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==