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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _actions_reservationActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../actions/reservationActions */ "./actions/reservationActions.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _util_quill__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../util/quill */ "./util/quill.js");
/* harmony import */ var _material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/CheckCircleOutline */ "./node_modules/@material-ui/icons/CheckCircleOutline.js");
/* harmony import */ var _material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_12__);




var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\forms\\gites\\FormInfosContrat.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(_c = function _c() {
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


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
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

var FormInfosContrat = function FormInfosContrat(_ref) {
  _s();

  var preloadedValues = _ref.preloadedValues;

  var CustomButton = function CustomButton() {
    return __jsx(_material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 29
      }
    });
  };

  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_9__["getCookie"])('token');
  var classes = useStyles();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["useForm"])({
    defaultValues: preloadedValues
  }),
      control = _useForm.control,
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  function insertStar() {
    var cursorPosition = quill.getSelection().index;
    quill.insertText(cursorPosition, '✔');
    quill.setSelection(cursorPosition + 1);
  }

  var CustomToolbar = function CustomToolbar() {
    return __jsx("div", {
      id: "toolbar",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 3
      }
    }, __jsx("select", {
      className: "ql-header",
      defaultValue: '',
      onChange: function onChange(e) {
        return e.persist();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 4
      }
    }, __jsx("option", {
      value: "1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 5
      }
    }), __jsx("option", {
      value: "2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 5
      }
    }), __jsx("option", {
      selected: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }
    })), __jsx("button", {
      className: "ql-bold",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 4
      }
    }), __jsx("button", {
      className: "ql-italic",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 4
      }
    }), __jsx("select", {
      className: "ql-color",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 4
      }
    }, __jsx("option", {
      value: "red",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 5
      }
    }), __jsx("option", {
      value: "green",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }
    }), __jsx("option", {
      value: "blue",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }
    }), __jsx("option", {
      value: "orange",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 5
      }
    }), __jsx("option", {
      value: "violet",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 5
      }
    }), __jsx("option", {
      value: "#d0d1d2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 5
      }
    }), __jsx("option", {
      selected: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 5
      }
    })), __jsx("button", {
      className: "ql-insertStar",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 4
      }
    }, __jsx(CustomButton, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 5
      }
    })));
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    heureArrivee: 'à partir de 17h',
    heureDepart: 'à partir de 17h',
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
              Object(_actions_reservationActions__WEBPACK_IMPORTED_MODULE_8__["updateReservation"])(data, router.query.id, token).then(function (result) {
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, loading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CircularProgress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 16
    }
  }), __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }
  }, __jsx(CustomToolbar, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 6
    }
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["Controller"], {
    style: {
      paddingTop: '60px',
      minHeight: '300px'
    },
    as: ReactQuill,
    control: control,
    name: "ctDesignationTitre",
    placeholder: "Corps du mail ici...",
    modules: _util_quill__WEBPACK_IMPORTED_MODULE_11__["QuillModules"],
    formats: _util_quill__WEBPACK_IMPORTED_MODULE_11__["QuillFormats"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 6
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["Controller"], {
    style: {
      paddingTop: '60px',
      minHeight: '300px'
    },
    as: ReactQuill,
    control: control,
    name: "ctPrincipCarac",
    placeholder: "Corps du mail ici...",
    modules: _util_quill__WEBPACK_IMPORTED_MODULE_11__["QuillModules"],
    formats: _util_quill__WEBPACK_IMPORTED_MODULE_11__["QuillFormats"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 6
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 5
    }
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["Controller"], {
    style: {
      paddingTop: '60px',
      minHeight: '300px'
    },
    as: ReactQuill,
    control: control,
    name: "ctSituLog",
    placeholder: "Corps du mail ici...",
    modules: _util_quill__WEBPACK_IMPORTED_MODULE_11__["QuillModules"],
    formats: _util_quill__WEBPACK_IMPORTED_MODULE_11__["QuillFormats"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 6
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 5
    }
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["Controller"], {
    style: {
      paddingTop: '60px',
      minHeight: '300px'
    },
    as: ReactQuill,
    control: control,
    name: "ctDescLog",
    placeholder: "Corps du mail ici...",
    modules: _util_quill__WEBPACK_IMPORTED_MODULE_11__["QuillModules"],
    formats: _util_quill__WEBPACK_IMPORTED_MODULE_11__["QuillFormats"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 6
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 5
    }
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["Controller"], {
    style: {
      paddingTop: '60px',
      minHeight: '300px'
    },
    as: ReactQuill,
    control: control,
    name: "ctDureeLoc",
    placeholder: "Corps du mail ici...",
    modules: _util_quill__WEBPACK_IMPORTED_MODULE_11__["QuillModules"],
    formats: _util_quill__WEBPACK_IMPORTED_MODULE_11__["QuillFormats"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 6
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "submit",
    variant: "contained",
    color: "primary",
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 5
    }
  }, "Valider les modifications")));
};

_s(FormInfosContrat, "VlCXejWhzpTqMH6gPVCUOk37/i4=", false, function () {
  return [useStyles, react_hook_form__WEBPACK_IMPORTED_MODULE_7__["useForm"]];
});

_c3 = FormInfosContrat;
/* harmony default export */ __webpack_exports__["default"] = (_c4 = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(FormInfosContrat));

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "ReactQuill$dynamic");
$RefreshReg$(_c2, "ReactQuill");
$RefreshReg$(_c3, "FormInfosContrat");
$RefreshReg$(_c4, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9naXRlcy9Gb3JtSW5mb3NDb250cmF0LmpzIl0sIm5hbWVzIjpbIlJlYWN0UXVpbGwiLCJkeW5hbWljIiwic3NyIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwiYnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwibWFyZ2luVG9wIiwiZm9ybUNvbnRyb2wiLCJtYXJnaW4iLCJ0ZXh0RmllbGQiLCJGb3JtSW5mb3NDb250cmF0IiwicHJlbG9hZGVkVmFsdWVzIiwiQ3VzdG9tQnV0dG9uIiwidG9rZW4iLCJnZXRDb29raWUiLCJjbGFzc2VzIiwidXNlRm9ybSIsImRlZmF1bHRWYWx1ZXMiLCJjb250cm9sIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJpbnNlcnRTdGFyIiwiY3Vyc29yUG9zaXRpb24iLCJxdWlsbCIsImdldFNlbGVjdGlvbiIsImluZGV4IiwiaW5zZXJ0VGV4dCIsInNldFNlbGVjdGlvbiIsIkN1c3RvbVRvb2xiYXIiLCJlIiwicGVyc2lzdCIsInVzZVN0YXRlIiwiaGV1cmVBcnJpdmVlIiwiaGV1cmVEZXBhcnQiLCJsb2FkaW5nIiwic3VjY2VzcyIsImVycm9yIiwibWVzc2FnZSIsInZhbHVlcyIsInNldFZhbHVlcyIsIm9uU3VibWl0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVSZXNlcnZhdGlvbiIsInJvdXRlciIsInF1ZXJ5IiwiaWQiLCJ0aGVuIiwicmVzdWx0IiwicGFkZGluZ1RvcCIsIm1pbkhlaWdodCIsIlF1aWxsTW9kdWxlcyIsIlF1aWxsRm9ybWF0cyIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFVBQVUsR0FBR0Ms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SyxFQUFDLFNBSFA7QUFJQyxhQUFTLEVBQUV0QyxPQUFPLENBQUNaLE1BSnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBckpELENBSEQsQ0FERDtBQW1LQSxDQTFPRDs7R0FBTU8sZ0I7VUFHV1osUyxFQUM0QmtCLHVEOzs7TUFKdkNOLGdCO0FBNE9TLHFFQUFBNEMsOERBQVUsQ0FBQzVDLGdCQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2dpdGVzL1tpZF0uZGViMmZkZDE4MDI1YjUxOTEwYzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgQ2lyY3VsYXJQcm9ncmVzcywgRm9ybUNvbnRyb2wgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgeyB1cGRhdGVSZXNlcnZhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL2FjdGlvbnMvcmVzZXJ2YXRpb25BY3Rpb25zJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmNvbnN0IFJlYWN0UXVpbGwgPSBkeW5hbWljKCgpID0+IGltcG9ydCgncmVhY3QtcXVpbGwnKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5pbXBvcnQgeyBRdWlsbE1vZHVsZXMsIFF1aWxsRm9ybWF0cyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvcXVpbGwnO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVPdXRsaW5lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2tDaXJjbGVPdXRsaW5lJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0fSxcclxuXHRidXR0b246IHtcclxuXHRcdG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHR9LFxyXG5cdGZvcm1Db250cm9sOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0fSxcclxuXHR0ZXh0RmllbGQ6IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5jb25zdCBGb3JtSW5mb3NDb250cmF0ID0gKHsgcHJlbG9hZGVkVmFsdWVzIH0pID0+IHtcclxuXHRjb25zdCBDdXN0b21CdXR0b24gPSAoKSA9PiA8Q2hlY2tDaXJjbGVPdXRsaW5lSWNvbiAvPjtcclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0Y29uc3QgeyBjb250cm9sLCByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKHtcclxuXHRcdGRlZmF1bHRWYWx1ZXM6IHByZWxvYWRlZFZhbHVlcyxcclxuXHR9KTtcclxuXHJcblx0ZnVuY3Rpb24gaW5zZXJ0U3RhcigpIHtcclxuXHRcdGNvbnN0IGN1cnNvclBvc2l0aW9uID0gcXVpbGwuZ2V0U2VsZWN0aW9uKCkuaW5kZXg7XHJcblx0XHRxdWlsbC5pbnNlcnRUZXh0KGN1cnNvclBvc2l0aW9uLCAn4pyUJyk7XHJcblx0XHRxdWlsbC5zZXRTZWxlY3Rpb24oY3Vyc29yUG9zaXRpb24gKyAxKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IEN1c3RvbVRvb2xiYXIgPSAoKSA9PiAoXHJcblx0XHQ8ZGl2IGlkPSd0b29sYmFyJz5cclxuXHRcdFx0PHNlbGVjdFxyXG5cdFx0XHRcdGNsYXNzTmFtZT0ncWwtaGVhZGVyJ1xyXG5cdFx0XHRcdGRlZmF1bHRWYWx1ZT17Jyd9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBlLnBlcnNpc3QoKX0+XHJcblx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nMScgLz5cclxuXHRcdFx0XHQ8b3B0aW9uIHZhbHVlPScyJyAvPlxyXG5cdFx0XHRcdDxvcHRpb24gc2VsZWN0ZWQgLz5cclxuXHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdDxidXR0b24gY2xhc3NOYW1lPSdxbC1ib2xkJyAvPlxyXG5cdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0ncWwtaXRhbGljJyAvPlxyXG5cdFx0XHQ8c2VsZWN0IGNsYXNzTmFtZT0ncWwtY29sb3InPlxyXG5cdFx0XHRcdDxvcHRpb24gdmFsdWU9J3JlZCcgLz5cclxuXHRcdFx0XHQ8b3B0aW9uIHZhbHVlPSdncmVlbicgLz5cclxuXHRcdFx0XHQ8b3B0aW9uIHZhbHVlPSdibHVlJyAvPlxyXG5cdFx0XHRcdDxvcHRpb24gdmFsdWU9J29yYW5nZScgLz5cclxuXHRcdFx0XHQ8b3B0aW9uIHZhbHVlPSd2aW9sZXQnIC8+XHJcblx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nI2QwZDFkMicgLz5cclxuXHRcdFx0XHQ8b3B0aW9uIHNlbGVjdGVkIC8+XHJcblx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0ncWwtaW5zZXJ0U3Rhcic+XHJcblx0XHRcdFx0PEN1c3RvbUJ1dHRvbiAvPlxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRoZXVyZUFycml2ZWU6ICfDoCBwYXJ0aXIgZGUgMTdoJyxcclxuXHRcdGhldXJlRGVwYXJ0OiAnw6AgcGFydGlyIGRlIDE3aCcsXHJcblx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0ZXJyb3I6ICcnLFxyXG5cdFx0bWVzc2FnZTogJycsXHJcblx0fSk7XHJcblx0Y29uc3QgeyBzdWNjZXNzLCBsb2FkaW5nLCBlcnJvciwgbWVzc2FnZSB9ID0gdmFsdWVzO1xyXG5cclxuXHRjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChkYXRhKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHRcdHVwZGF0ZVJlc2VydmF0aW9uKGRhdGEsIHJvdXRlci5xdWVyeS5pZCwgdG9rZW4pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRpZiAocmVzdWx0LmVycm9yKSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogcmVzdWx0LmVycm9yIH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiB0cnVlLFxyXG5cdFx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0XHRtZXNzYWdlOiByZXN1bHQubWVzc2FnZSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHQvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHQvLyBcdFJvdXRlci5wdXNoKCcvYWRtaW4vZ2VzdGlvbkRpdmVycy9wYXJ0ZW5haXJlcycpO1xyXG5cdFx0XHRcdC8vIH0sIDMwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e2xvYWRpbmcgJiYgPENpcmN1bGFyUHJvZ3Jlc3MgLz59XHJcblxyXG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcblx0XHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHQ8Q3VzdG9tVG9vbGJhciAvPlxyXG5cdFx0XHRcdFx0PENvbnRyb2xsZXJcclxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgcGFkZGluZ1RvcDogJzYwcHgnLCBtaW5IZWlnaHQ6ICczMDBweCcgfX1cclxuXHRcdFx0XHRcdFx0YXM9e1JlYWN0UXVpbGx9XHJcblx0XHRcdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0XHRcdG5hbWU9J2N0RGVzaWduYXRpb25UaXRyZSdcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0NvcnBzIGR1IG1haWwgaWNpLi4uJ1xyXG5cdFx0XHRcdFx0XHRtb2R1bGVzPXtRdWlsbE1vZHVsZXN9XHJcblx0XHRcdFx0XHRcdGZvcm1hdHM9e1F1aWxsRm9ybWF0c31cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IHBhZGRpbmdUb3A6ICc2MHB4JywgbWluSGVpZ2h0OiAnMzAwcHgnIH19XHJcblx0XHRcdFx0XHRcdGFzPXtSZWFjdFF1aWxsfVxyXG5cdFx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0XHRuYW1lPSdjdFByaW5jaXBDYXJhYydcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0NvcnBzIGR1IG1haWwgaWNpLi4uJ1xyXG5cdFx0XHRcdFx0XHRtb2R1bGVzPXtRdWlsbE1vZHVsZXN9XHJcblx0XHRcdFx0XHRcdGZvcm1hdHM9e1F1aWxsRm9ybWF0c31cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IHBhZGRpbmdUb3A6ICc2MHB4JywgbWluSGVpZ2h0OiAnMzAwcHgnIH19XHJcblx0XHRcdFx0XHRcdGFzPXtSZWFjdFF1aWxsfVxyXG5cdFx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0XHRuYW1lPSdjdFNpdHVMb2cnXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdDb3JwcyBkdSBtYWlsIGljaS4uLidcclxuXHRcdFx0XHRcdFx0bW9kdWxlcz17UXVpbGxNb2R1bGVzfVxyXG5cdFx0XHRcdFx0XHRmb3JtYXRzPXtRdWlsbEZvcm1hdHN9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBwYWRkaW5nVG9wOiAnNjBweCcsIG1pbkhlaWdodDogJzMwMHB4JyB9fVxyXG5cdFx0XHRcdFx0XHRhcz17UmVhY3RRdWlsbH1cclxuXHRcdFx0XHRcdFx0Y29udHJvbD17Y29udHJvbH1cclxuXHRcdFx0XHRcdFx0bmFtZT0nY3REZXNjTG9nJ1xyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nQ29ycHMgZHUgbWFpbCBpY2kuLi4nXHJcblx0XHRcdFx0XHRcdG1vZHVsZXM9e1F1aWxsTW9kdWxlc31cclxuXHRcdFx0XHRcdFx0Zm9ybWF0cz17UXVpbGxGb3JtYXRzfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0PENvbnRyb2xsZXJcclxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgcGFkZGluZ1RvcDogJzYwcHgnLCBtaW5IZWlnaHQ6ICczMDBweCcgfX1cclxuXHRcdFx0XHRcdFx0YXM9e1JlYWN0UXVpbGx9XHJcblx0XHRcdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0XHRcdG5hbWU9J2N0RHVyZWVMb2MnXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdDb3JwcyBkdSBtYWlsIGljaS4uLidcclxuXHRcdFx0XHRcdFx0bW9kdWxlcz17UXVpbGxNb2R1bGVzfVxyXG5cdFx0XHRcdFx0XHRmb3JtYXRzPXtRdWlsbEZvcm1hdHN9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0ey8qIDxFZGl0b3IgdmFsdWU9Jycgb25DaGFuZ2U9eyh2KSA9PiBjb25zb2xlLmxvZyh2KX0gLz4gKi99XHJcblxyXG5cdFx0XHRcdHsvKiA8Q0tFZGl0b3JcclxuXHRcdFx0XHRcdGVkaXRvcj17Q2xhc3NpY0VkaXRvcn1cclxuXHRcdFx0XHRcdGRhdGE9JzxwPkhlbGxvIGZyb20gQ0tFZGl0b3IgNSE8L3A+J1xyXG5cdFx0XHRcdFx0b25SZWFkeT17KGVkaXRvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHQvLyBZb3UgY2FuIHN0b3JlIHRoZSBcImVkaXRvclwiIGFuZCB1c2Ugd2hlbiBpdCBpcyBuZWVkZWQuXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFZGl0b3IgaXMgcmVhZHkgdG8gdXNlIScsIGVkaXRvcik7XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhldmVudCwgZWRpdG9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGRhdGEgPSBlZGl0b3IuZ2V0RGF0YSgpO1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh7IGV2ZW50LCBlZGl0b3IsIGRhdGEgfSk7XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0b25CbHVyPXsoZXZlbnQsIGVkaXRvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQmx1ci4nLCBlZGl0b3IpO1xyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdG9uRm9jdXM9eyhldmVudCwgZWRpdG9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdGb2N1cy4nLCBlZGl0b3IpO1xyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxDS0VkaXRvclxyXG5cdFx0XHRcdFx0ZWRpdG9yPXtDbGFzc2ljRWRpdG9yfVxyXG5cdFx0XHRcdFx0ZGF0YT0nPHA+SGVsbG8gZnJvbSBDS0VkaXRvciA1ITwvcD4nXHJcblx0XHRcdFx0XHRvblJlYWR5PXsoZWRpdG9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdC8vIFlvdSBjYW4gc3RvcmUgdGhlIFwiZWRpdG9yXCIgYW5kIHVzZSB3aGVuIGl0IGlzIG5lZWRlZC5cclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0VkaXRvciBpcyByZWFkeSB0byB1c2UhJywgZWRpdG9yKTtcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50LCBlZGl0b3IpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgZGF0YSA9IGVkaXRvci5nZXREYXRhKCk7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHsgZXZlbnQsIGVkaXRvciwgZGF0YSB9KTtcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRvbkJsdXI9eyhldmVudCwgZWRpdG9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdCbHVyLicsIGVkaXRvcik7XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0b25Gb2N1cz17KGV2ZW50LCBlZGl0b3IpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0ZvY3VzLicsIGVkaXRvcik7XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PENLRWRpdG9yXHJcblx0XHRcdFx0XHRlZGl0b3I9e0NsYXNzaWNFZGl0b3J9XHJcblx0XHRcdFx0XHRkYXRhPSc8cD5IZWxsbyBmcm9tIENLRWRpdG9yIDUhPC9wPidcclxuXHRcdFx0XHRcdG9uUmVhZHk9eyhlZGl0b3IpID0+IHtcclxuXHRcdFx0XHRcdFx0Ly8gWW91IGNhbiBzdG9yZSB0aGUgXCJlZGl0b3JcIiBhbmQgdXNlIHdoZW4gaXQgaXMgbmVlZGVkLlxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRWRpdG9yIGlzIHJlYWR5IHRvIHVzZSEnLCBlZGl0b3IpO1xyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnQsIGVkaXRvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBkYXRhID0gZWRpdG9yLmdldERhdGEoKTtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coeyBldmVudCwgZWRpdG9yLCBkYXRhIH0pO1xyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdG9uQmx1cj17KGV2ZW50LCBlZGl0b3IpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0JsdXIuJywgZWRpdG9yKTtcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRvbkZvY3VzPXsoZXZlbnQsIGVkaXRvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRm9jdXMuJywgZWRpdG9yKTtcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8Q0tFZGl0b3JcclxuXHRcdFx0XHRcdGVkaXRvcj17Q2xhc3NpY0VkaXRvcn1cclxuXHRcdFx0XHRcdGRhdGE9JzxwPkhlbGxvIGZyb20gQ0tFZGl0b3IgNSE8L3A+J1xyXG5cdFx0XHRcdFx0b25SZWFkeT17KGVkaXRvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHQvLyBZb3UgY2FuIHN0b3JlIHRoZSBcImVkaXRvclwiIGFuZCB1c2Ugd2hlbiBpdCBpcyBuZWVkZWQuXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFZGl0b3IgaXMgcmVhZHkgdG8gdXNlIScsIGVkaXRvcik7XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhldmVudCwgZWRpdG9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGRhdGEgPSBlZGl0b3IuZ2V0RGF0YSgpO1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh7IGV2ZW50LCBlZGl0b3IsIGRhdGEgfSk7XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0b25CbHVyPXsoZXZlbnQsIGVkaXRvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQmx1ci4nLCBlZGl0b3IpO1xyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdG9uRm9jdXM9eyhldmVudCwgZWRpdG9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdGb2N1cy4nLCBlZGl0b3IpO1xyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxDS0VkaXRvclxyXG5cdFx0XHRcdFx0ZWRpdG9yPXtDbGFzc2ljRWRpdG9yfVxyXG5cdFx0XHRcdFx0ZGF0YT0nPHA+SGVsbG8gZnJvbSBDS0VkaXRvciA1ITwvcD4nXHJcblx0XHRcdFx0XHRvblJlYWR5PXsoZWRpdG9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdC8vIFlvdSBjYW4gc3RvcmUgdGhlIFwiZWRpdG9yXCIgYW5kIHVzZSB3aGVuIGl0IGlzIG5lZWRlZC5cclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0VkaXRvciBpcyByZWFkeSB0byB1c2UhJywgZWRpdG9yKTtcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50LCBlZGl0b3IpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgZGF0YSA9IGVkaXRvci5nZXREYXRhKCk7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHsgZXZlbnQsIGVkaXRvciwgZGF0YSB9KTtcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRvbkJsdXI9eyhldmVudCwgZWRpdG9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdCbHVyLicsIGVkaXRvcik7XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0b25Gb2N1cz17KGV2ZW50LCBlZGl0b3IpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0ZvY3VzLicsIGVkaXRvcik7XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+ICovfVxyXG5cdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdHR5cGU9J3N1Ym1pdCdcclxuXHRcdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRcdGNvbG9yPSdwcmltYXJ5J1xyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0XHRWYWxpZGVyIGxlcyBtb2RpZmljYXRpb25zXHJcblx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEZvcm1JbmZvc0NvbnRyYXQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9