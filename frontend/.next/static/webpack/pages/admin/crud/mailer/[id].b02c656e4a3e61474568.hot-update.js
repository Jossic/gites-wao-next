webpackHotUpdate_N_E("pages/admin/crud/mailer/[id]",{

/***/ "./components/admin/forms/FormUpdateMailer.js":
/*!****************************************************!*\
  !*** ./components/admin/forms/FormUpdateMailer.js ***!
  \****************************************************/
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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util_quill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/quill */ "./util/quill.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var _actions_mailerActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../actions/mailerActions */ "./actions/mailerActions.js");
/* harmony import */ var _HOC_Snackbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../HOC/Snackbar */ "./components/HOC/Snackbar.js");



var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\forms\\FormUpdateMailer.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c = function _c() {
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









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  return {
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

var FormUpdateMailer = function FormUpdateMailer(_ref) {
  _s();

  var snackbarShowMessage = _ref.snackbarShowMessage,
      preloadedValues = _ref.preloadedValues,
      router = _ref.router;
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_9__["getCookie"])('token');
  var classes = useStyles();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_8__["useForm"])({
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
              console.log(data);
              setLoading(true);
              Object(_actions_mailerActions__WEBPACK_IMPORTED_MODULE_10__["updateMailer"])(data, router.query.id, token).then(function (result) {
                console.log('result', result);

                if (result.error) {
                  setLoading(false);
                  snackbarShowMessage("".concat(result.error));
                } else {
                  setLoading(false);
                  snackbarShowMessage("".concat(result.message), 'success');
                  setTimeout(function () {
                    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/admin/mailer', null, {
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, loading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CircularProgress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 16
    }
  }), __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
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
      lineNumber: 75,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
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
      lineNumber: 85,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
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
      lineNumber: 95,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["InputLabel"], {
    shrink: true,
    id: "demo-simple-select-placeholder-label-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 6
    }
  }, "\"Corps du mail - Pour ajouter une variable, il faut l'ajouter dans les balises suivantes : $", "Liste des variables disponibles : client, reservation, gite", __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    style: {
      margin: '10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "contained",
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 8
    }
  }, "client.nom"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "contained",
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 8
    }
  }, "client.firstname"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "contained",
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 8
    }
  }, "client.address"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "contained",
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 8
    }
  }, "client.zip"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "contained",
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 8
    }
  }, "client.city"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "contained",
    color: "default",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 8
    }
  }, "booking.arrival"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "contained",
    color: "default",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 8
    }
  }, "booking.end"))), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_8__["Controller"], {
    style: {
      paddingTop: '60px',
      minHeight: '300px'
    },
    as: ReactQuill,
    control: control,
    name: "corps",
    theme: "snow",
    placeholder: "Corps du mail ici...",
    modules: _util_quill__WEBPACK_IMPORTED_MODULE_5__["QuillModules"],
    formats: _util_quill__WEBPACK_IMPORTED_MODULE_5__["QuillFormats"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 6
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["InputLabel"], {
    shrink: true,
    id: "demo-simple-select-placeholder-label-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 6
    }
  }, "D\xE9clencheur"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_8__["Controller"], {
    control: control,
    name: "declencheur",
    as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Select"], {
      id: "declencheur-select",
      defaultValue: "Envoi manuel",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListSubheader"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }
    }, "Manuel"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
      value: "Envoi manuel",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }
    }, "Envoi manuel"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListSubheader"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }
    }, "Date"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
      value: "7 jours avant arriv\xE9e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 9
      }
    }, "7 jours avant arriv\xE9e"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
      value: "7 jours apr\xE8s le d\xE9part",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 9
      }
    }, "7 jours apr\xE8s le d\xE9part"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListSubheader"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 9
      }
    }, "Action"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
      value: "\xE0 la validation du contrat",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }
    }, "\xE0 la validation du contrat"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
      value: "Autre exemple",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }
    }, "Autre exemple")),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 6
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    direction: "row",
    justify: "center",
    alignItems: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControlLabel"], {
    control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
      inputRef: register,
      name: "actif",
      color: "primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 8
      }
    }),
    label: "Actif",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 6
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "submit",
    variant: "contained",
    color: "primary",
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 5
    }
  }, "Modifier ce mailer")));
};

_s(FormUpdateMailer, "NSb/IjwBRs0Z2pwsvTKodBJavPg=", false, function () {
  return [useStyles, react_hook_form__WEBPACK_IMPORTED_MODULE_8__["useForm"]];
});

_c3 = FormUpdateMailer;
/* harmony default export */ __webpack_exports__["default"] = (_c5 = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(_c4 = Object(_HOC_Snackbar__WEBPACK_IMPORTED_MODULE_11__["withSnackbar"])(FormUpdateMailer)));

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "ReactQuill$dynamic");
$RefreshReg$(_c2, "ReactQuill");
$RefreshReg$(_c3, "FormUpdateMailer");
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9Gb3JtVXBkYXRlTWFpbGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0UXVpbGwiLCJkeW5hbWljIiwic3NyIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiYnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwibWFyZ2luVG9wIiwid2lkdGgiLCJmb3JtQ29udHJvbCIsIm1hcmdpbiIsInRleHRGaWVsZCIsIkZvcm1VcGRhdGVNYWlsZXIiLCJzbmFja2JhclNob3dNZXNzYWdlIiwicHJlbG9hZGVkVmFsdWVzIiwicm91dGVyIiwidG9rZW4iLCJnZXRDb29raWUiLCJjbGFzc2VzIiwidXNlRm9ybSIsImRlZmF1bHRWYWx1ZXMiLCJjb250cm9sIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZU1haWxlciIsInF1ZXJ5IiwiaWQiLCJ0aGVuIiwicmVzdWx0IiwiZXJyb3IiLCJtZXNzYWdlIiwic2V0VGltZW91dCIsIlJvdXRlciIsInB1c2giLCJzaGFsbG93Iiwic2hyaW5rIiwicGFkZGluZ1RvcCIsIm1pbkhlaWdodCIsIlF1aWxsTW9kdWxlcyIsIlF1aWxsRm9ybWF0cyIsIndpdGhSb3V0ZXIiLCJ3aXRoU25hY2tiYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBY0E7QUFDQSxJQUFNQSxVQUFVLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLGdKQUFOO0FBQUEsQ0FBRCxFQUE4QjtBQUFFQyxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUE7QUFBQSxrQ0FBaEIsNERBQWdCO0FBQUE7QUFBQSxjQUFoQixhQUFnQjtBQUFBO0FBQUEsQ0FBOUIsQ0FBMUI7TUFBTUYsVTtBQUNOO0FB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LHVDQWZELEVBa0JDLE1BQUMsMERBQUQ7QUFBVSxXQUFLLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFsQkQsQ0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkQsQ0E1RUQsRUFnSEMsTUFBQyxzREFBRDtBQUNDLGFBQVMsTUFEVjtBQUVDLGFBQVMsRUFBQyxLQUZYO0FBR0MsV0FBTyxFQUFDLFFBSFQ7QUFJQyxjQUFVLEVBQUMsUUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0MsTUFBQyxrRUFBRDtBQUNDLFdBQU8sRUFDTixNQUFDLHdEQUFEO0FBQ0MsY0FBUSxFQUFFQyxRQURYO0FBRUMsVUFBSSxFQUFDLE9BRk47QUFHQyxXQUFLLEVBQUMsU0FIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkY7QUFRQyxTQUFLLEVBQUMsT0FSUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEQsQ0FoSEQsRUFnSUMsTUFBQyx3REFBRDtBQUNDLFFBQUksRUFBQyxRQUROO0FBRUMsV0FBTyxFQUFDLFdBRlQ7QUFHQyxTQUFLLEVBQUMsU0FIUDtBQUlDLGFBQVMsRUFBRUosT0FBTyxDQUFDZCxNQUpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQWhJRCxDQUhELENBREQ7QUE4SUEsQ0F6S0Q7O0dBQU1RLGdCO1VBRVdYLFMsRUFDNEJrQix1RDs7O01BSHZDUCxnQjtBQTJLUyxxRUFBQW1DLDhEQUFVLE9BQUNDLG1FQUFZLENBQUNwQyxnQkFBRCxDQUFiLENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvbWFpbGVyL1tpZF0uYjAyYzY1NmU0YTNlNjE0NzQ1NjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0QnV0dG9uLFxyXG5cdENpcmN1bGFyUHJvZ3Jlc3MsXHJcblx0Rm9ybUNvbnRyb2wsXHJcblx0SW5wdXRMYWJlbCxcclxuXHRNZW51SXRlbSxcclxuXHRTZWxlY3QsXHJcblx0U3dpdGNoLFxyXG5cdEZvcm1Db250cm9sTGFiZWwsXHJcblx0VGV4dEZpZWxkLFxyXG5cdEdyaWQsXHJcblx0TGlzdFN1YmhlYWRlcixcclxuXHRCdXR0b25Hcm91cCxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmNvbnN0IFJlYWN0UXVpbGwgPSBkeW5hbWljKCgpID0+IGltcG9ydCgncmVhY3QtcXVpbGwnKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5pbXBvcnQgeyBRdWlsbE1vZHVsZXMsIFF1aWxsRm9ybWF0cyB9IGZyb20gJy4uLy4uLy4uL3V0aWwvcXVpbGwnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHsgdXBkYXRlTWFpbGVyIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9tYWlsZXJBY3Rpb25zJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHdpdGhTbmFja2JhciB9IGZyb20gJy4uLy4uL0hPQy9TbmFja2Jhcic7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRidXR0b246IHtcclxuXHRcdG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHR9LFxyXG5cdGZvcm1Db250cm9sOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHR3aWR0aDogJzgwJScsXHJcblx0fSxcclxuXHR0ZXh0RmllbGQ6IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdHdpZHRoOiAnODAlJyxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5jb25zdCBGb3JtVXBkYXRlTWFpbGVyID0gKHsgc25hY2tiYXJTaG93TWVzc2FnZSwgcHJlbG9hZGVkVmFsdWVzLCByb3V0ZXIgfSkgPT4ge1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRjb25zdCB7IGNvbnRyb2wsIHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm0oe1xyXG5cdFx0ZGVmYXVsdFZhbHVlczogcHJlbG9hZGVkVmFsdWVzLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0c2V0TG9hZGluZyh0cnVlKTtcclxuXHRcdHVwZGF0ZU1haWxlcihkYXRhLCByb3V0ZXIucXVlcnkuaWQsIHRva2VuKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3Jlc3VsdCcsIHJlc3VsdCk7XHJcblx0XHRcdGlmIChyZXN1bHQuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0XHRzbmFja2JhclNob3dNZXNzYWdlKGAke3Jlc3VsdC5lcnJvcn1gKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0XHRzbmFja2JhclNob3dNZXNzYWdlKGAke3Jlc3VsdC5tZXNzYWdlfWAsICdzdWNjZXNzJyk7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRSb3V0ZXIucHVzaCgnL2FkbWluL21haWxlcicsIG51bGwsIHsgc2hhbGxvdzogdHJ1ZSB9KTtcclxuXHRcdFx0XHR9LCAzMDAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHtsb2FkaW5nICYmIDxDaXJjdWxhclByb2dyZXNzIC8+fVxyXG5cclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSdub20nXHJcblx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J05vbSdcclxuXHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdG5hbWU9J2Rlc2NyaXB0aW9uJ1xyXG5cdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdGxhYmVsPSdEZXNjcmlwdGlvbidcclxuXHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdG5hbWU9J3N1amV0J1xyXG5cdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdGxhYmVsPSdTdWpldCdcclxuXHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0PElucHV0TGFiZWxcclxuXHRcdFx0XHRcdFx0c2hyaW5rXHJcblx0XHRcdFx0XHRcdGlkPSdkZW1vLXNpbXBsZS1zZWxlY3QtcGxhY2Vob2xkZXItbGFiZWwtbGFiZWwnPlxyXG5cdFx0XHRcdFx0XHRcIkNvcnBzIGR1IG1haWwgLSBQb3VyIGFqb3V0ZXIgdW5lIHZhcmlhYmxlLCBpbCBmYXV0XHJcblx0XHRcdFx0XHRcdGwnYWpvdXRlciBkYW5zIGxlcyBiYWxpc2VzIHN1aXZhbnRlcyA6ICR7fVxyXG5cdFx0XHRcdFx0XHRMaXN0ZSBkZXMgdmFyaWFibGVzIGRpc3BvbmlibGVzIDogY2xpZW50LCByZXNlcnZhdGlvbixcclxuXHRcdFx0XHRcdFx0Z2l0ZVxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgbWFyZ2luOiAnMTBweCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdwcmltYXJ5Jz5cclxuXHRcdFx0XHRcdFx0XHRcdGNsaWVudC5ub21cclxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3ByaW1hcnknPlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xpZW50LmZpcnN0bmFtZVxyXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0ncHJpbWFyeSc+XHJcblx0XHRcdFx0XHRcdFx0XHRjbGllbnQuYWRkcmVzc1xyXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0ncHJpbWFyeSc+XHJcblx0XHRcdFx0XHRcdFx0XHRjbGllbnQuemlwXHJcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdwcmltYXJ5Jz5cclxuXHRcdFx0XHRcdFx0XHRcdGNsaWVudC5jaXR5XHJcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdkZWZhdWx0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdGJvb2tpbmcuYXJyaXZhbFxyXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0nZGVmYXVsdCc+XHJcblx0XHRcdFx0XHRcdFx0XHRib29raW5nLmVuZFxyXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBwYWRkaW5nVG9wOiAnNjBweCcsIG1pbkhlaWdodDogJzMwMHB4JyB9fVxyXG5cdFx0XHRcdFx0XHRhcz17UmVhY3RRdWlsbH1cclxuXHRcdFx0XHRcdFx0Y29udHJvbD17Y29udHJvbH1cclxuXHRcdFx0XHRcdFx0bmFtZT0nY29ycHMnXHJcblx0XHRcdFx0XHRcdHRoZW1lPSdzbm93J1xyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nQ29ycHMgZHUgbWFpbCBpY2kuLi4nXHJcblx0XHRcdFx0XHRcdG1vZHVsZXM9e1F1aWxsTW9kdWxlc31cclxuXHRcdFx0XHRcdFx0Zm9ybWF0cz17UXVpbGxGb3JtYXRzfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdDxJbnB1dExhYmVsXHJcblx0XHRcdFx0XHRcdHNocmlua1xyXG5cdFx0XHRcdFx0XHRpZD0nZGVtby1zaW1wbGUtc2VsZWN0LXBsYWNlaG9sZGVyLWxhYmVsLWxhYmVsJz5cclxuXHRcdFx0XHRcdFx0RMOpY2xlbmNoZXVyXHJcblx0XHRcdFx0XHQ8L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0XHRuYW1lPSdkZWNsZW5jaGV1cidcclxuXHRcdFx0XHRcdFx0YXM9e1xyXG5cdFx0XHRcdFx0XHRcdDxTZWxlY3RcclxuXHRcdFx0XHRcdFx0XHRcdGlkPSdkZWNsZW5jaGV1ci1zZWxlY3QnXHJcblx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9J0Vudm9pIG1hbnVlbCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGlzdFN1YmhlYWRlcj5NYW51ZWw8L0xpc3RTdWJoZWFkZXI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J0Vudm9pIG1hbnVlbCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEVudm9pIG1hbnVlbFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaXN0U3ViaGVhZGVyPkRhdGU8L0xpc3RTdWJoZWFkZXI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9Jzcgam91cnMgYXZhbnQgYXJyaXbDqWUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ3IGpvdXJzIGF2YW50IGFycml2w6llXHJcblx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSc3IGpvdXJzIGFwcsOocyBsZSBkw6lwYXJ0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0NyBqb3VycyBhcHLDqHMgbGUgZMOpcGFydFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaXN0U3ViaGVhZGVyPkFjdGlvbjwvTGlzdFN1YmhlYWRlcj5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nw6AgbGEgdmFsaWRhdGlvbiBkdSBjb250cmF0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0w6AgbGEgdmFsaWRhdGlvbiBkdSBjb250cmF0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdBdXRyZSBleGVtcGxlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0QXV0cmUgZXhlbXBsZVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8L1NlbGVjdD5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cclxuXHRcdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdFx0Y29udGFpbmVyXHJcblx0XHRcdFx0XHRkaXJlY3Rpb249J3JvdydcclxuXHRcdFx0XHRcdGp1c3RpZnk9J2NlbnRlcidcclxuXHRcdFx0XHRcdGFsaWduSXRlbXM9J2NlbnRlcic+XHJcblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xMYWJlbFxyXG5cdFx0XHRcdFx0XHRjb250cm9sPXtcclxuXHRcdFx0XHRcdFx0XHQ8U3dpdGNoXHJcblx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPSdhY3RpZidcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yPSdwcmltYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9J0FjdGlmJ1xyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0dHlwZT0nc3VibWl0J1xyXG5cdFx0XHRcdFx0dmFyaWFudD0nY29udGFpbmVkJ1xyXG5cdFx0XHRcdFx0Y29sb3I9J3ByaW1hcnknXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdE1vZGlmaWVyIGNlIG1haWxlclxyXG5cdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcih3aXRoU25hY2tiYXIoRm9ybVVwZGF0ZU1haWxlcikpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9