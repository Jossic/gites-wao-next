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
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _actions_reservationActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../actions/reservationActions */ "./actions/reservationActions.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _util_quill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../util/quill */ "./util/quill.js");
/* harmony import */ var _HOC_Snackbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../HOC/Snackbar */ "./components/HOC/Snackbar.js");



var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\forms\\gites\\FormInfosContrat.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(_c = function _c() {
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


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
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

  var snackbarShowMessage = _ref.snackbarShowMessage,
      preloadedValues = _ref.preloadedValues;
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_8__["getCookie"])('token');
  var classes = useStyles();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"])({
    defaultValues: preloadedValues
  }),
      control = _useForm.control,
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    heureArrivee: 'à partir de 17h',
    heureDepart: 'à partir de 17h'
  }),
      values = _useState[0],
      setValues = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(data);
              setLoading(true);
              Object(_actions_reservationActions__WEBPACK_IMPORTED_MODULE_7__["updateReservation"])(data, router.query.id, token).then(function (result) {
                if (result.error) {
                  setLoading(false);
                  snackbarShowMessage("".concat(result.error));
                } else {
                  setLoading(false);
                  snackbarShowMessage("".concat(result.message), 'success'); // setTimeout(() => {
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, loading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CircularProgress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 16
    }
  }), __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["Controller"], {
    style: {
      paddingTop: '60px',
      minHeight: '300px'
    },
    as: ReactQuill,
    control: control,
    name: "ctDesignationTitre",
    placeholder: "Corps du mail ici...",
    modules: _util_quill__WEBPACK_IMPORTED_MODULE_10__["QuillModules"],
    formats: _util_quill__WEBPACK_IMPORTED_MODULE_10__["QuillFormats"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 6
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["Controller"], {
    style: {
      paddingTop: '60px',
      minHeight: '300px'
    },
    as: ReactQuill,
    control: control,
    name: "ctPrincipCarac",
    placeholder: "Corps du mail ici...",
    modules: _util_quill__WEBPACK_IMPORTED_MODULE_10__["QuillModules"],
    formats: _util_quill__WEBPACK_IMPORTED_MODULE_10__["QuillFormats"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 6
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["Controller"], {
    style: {
      paddingTop: '60px',
      minHeight: '300px'
    },
    as: ReactQuill,
    control: control,
    name: "ctSituLog",
    placeholder: "Corps du mail ici...",
    modules: _util_quill__WEBPACK_IMPORTED_MODULE_10__["QuillModules"],
    formats: _util_quill__WEBPACK_IMPORTED_MODULE_10__["QuillFormats"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 6
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["Controller"], {
    style: {
      paddingTop: '60px',
      minHeight: '300px'
    },
    as: ReactQuill,
    control: control,
    name: "ctDescLog",
    placeholder: "Corps du mail ici...",
    modules: _util_quill__WEBPACK_IMPORTED_MODULE_10__["QuillModules"],
    formats: _util_quill__WEBPACK_IMPORTED_MODULE_10__["QuillFormats"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 6
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["Controller"], {
    style: {
      paddingTop: '60px',
      minHeight: '300px'
    },
    as: ReactQuill,
    control: control,
    name: "ctDureeLoc",
    placeholder: "Corps du mail ici...",
    modules: _util_quill__WEBPACK_IMPORTED_MODULE_10__["QuillModules"],
    formats: _util_quill__WEBPACK_IMPORTED_MODULE_10__["QuillFormats"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
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
      lineNumber: 122,
      columnNumber: 5
    }
  }, "Valider les modifications")));
};

_s(FormInfosContrat, "X9v0TUvnuGOOfAP3pc0pfeAnI+Q=", false, function () {
  return [useStyles, react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"]];
});

_c3 = FormInfosContrat;
/* harmony default export */ __webpack_exports__["default"] = (_c5 = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(_c4 = Object(_HOC_Snackbar__WEBPACK_IMPORTED_MODULE_11__["withSnackbar"])(FormInfosContrat)));

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "ReactQuill$dynamic");
$RefreshReg$(_c2, "ReactQuill");
$RefreshReg$(_c3, "FormInfosContrat");
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9naXRlcy9Gb3JtSW5mb3NDb250cmF0LmpzIl0sIm5hbWVzIjpbIlJlYWN0UXVpbGwiLCJkeW5hbWljIiwic3NyIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwiYnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwibWFyZ2luVG9wIiwiZm9ybUNvbnRyb2wiLCJtYXJnaW4iLCJ0ZXh0RmllbGQiLCJGb3JtSW5mb3NDb250cmF0Iiwic25hY2tiYXJTaG93TWVzc2FnZSIsInByZWxvYWRlZFZhbHVlcyIsInRva2VuIiwiZ2V0Q29va2llIiwiY2xhc3NlcyIsInVzZUZvcm0iLCJkZWZhdWx0VmFsdWVzIiwiY29udHJvbCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwidXNlU3RhdGUiLCJoZXVyZUFycml2ZWUiLCJoZXVyZURlcGFydCIsInZhbHVlcyIsInNldFZhbHVlcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZVJlc2VydmF0aW9uIiwicm91dGVyIiwicXVlcnkiLCJpZCIsInRoZW4iLCJyZXN1bHQiLCJlcnJvciIsIm1lc3NhZ2UiLCJwYWRkaW5nVG9wIiwibWluSGVpZ2h0IiwiUXVpbGxNb2R1bGVzIiwiUXVpbGxGb3JtYXRzIiwid2l0aFJvdXRlciIsIndpdGhTbmFja2JhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFVBQVUsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sZ0pBQU47QUFBQSxDQUFELEVBQThCO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQUFoQiw0REFBZ0I7QUFBQTtBQUFB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R0Q7O0dBQU1PLGdCO1VBRVdaLFMsRUFDNEJrQix1RDs7O01BSHZDTixnQjtBQXdHUyxxRUFBQWtDLDhEQUFVLE9BQUNDLG1FQUFZLENBQUNuQyxnQkFBRCxDQUFiLENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2dpdGVzL1tpZF0uY2RmMTgzMjlhZGFkM2Q0YmM0OTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgQ2lyY3VsYXJQcm9ncmVzcywgRm9ybUNvbnRyb2wgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCB7IHVwZGF0ZVJlc2VydmF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vYWN0aW9ucy9yZXNlcnZhdGlvbkFjdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuY29uc3QgUmVhY3RRdWlsbCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1xdWlsbCcpLCB7IHNzcjogZmFsc2UgfSk7XHJcbmltcG9ydCB7IFF1aWxsTW9kdWxlcywgUXVpbGxGb3JtYXRzIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9xdWlsbCc7XHJcbmltcG9ydCB7IHdpdGhTbmFja2JhciB9IGZyb20gJy4uLy4uLy4uL0hPQy9TbmFja2Jhcic7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRyb290OiB7XHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdH0sXHJcblx0YnV0dG9uOiB7XHJcblx0XHRtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0fSxcclxuXHRmb3JtQ29udHJvbDoge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdH0sXHJcblx0dGV4dEZpZWxkOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0fSxcclxufSkpO1xyXG5cclxuY29uc3QgRm9ybUluZm9zQ29udHJhdCA9ICh7IHNuYWNrYmFyU2hvd01lc3NhZ2UsIHByZWxvYWRlZFZhbHVlcyB9KSA9PiB7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IHsgY29udHJvbCwgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybSh7XHJcblx0XHRkZWZhdWx0VmFsdWVzOiBwcmVsb2FkZWRWYWx1ZXMsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRoZXVyZUFycml2ZWU6ICfDoCBwYXJ0aXIgZGUgMTdoJyxcclxuXHRcdGhldXJlRGVwYXJ0OiAnw6AgcGFydGlyIGRlIDE3aCcsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRzZXRMb2FkaW5nKHRydWUpO1xyXG5cdFx0dXBkYXRlUmVzZXJ2YXRpb24oZGF0YSwgcm91dGVyLnF1ZXJ5LmlkLCB0b2tlbikudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHRcdGlmIChyZXN1bHQuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0XHRzbmFja2JhclNob3dNZXNzYWdlKGAke3Jlc3VsdC5lcnJvcn1gKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0XHRzbmFja2JhclNob3dNZXNzYWdlKGAke3Jlc3VsdC5tZXNzYWdlfWAsICdzdWNjZXNzJyk7XHJcblx0XHRcdFx0Ly8gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0Ly8gXHRSb3V0ZXIucHVzaCgnL2FkbWluL2dlc3Rpb25EaXZlcnMvcGFydGVuYWlyZXMnKTtcclxuXHRcdFx0XHQvLyB9LCAzMDAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHtsb2FkaW5nICYmIDxDaXJjdWxhclByb2dyZXNzIC8+fVxyXG5cclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG5cdFx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0PENvbnRyb2xsZXJcclxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgcGFkZGluZ1RvcDogJzYwcHgnLCBtaW5IZWlnaHQ6ICczMDBweCcgfX1cclxuXHRcdFx0XHRcdFx0YXM9e1JlYWN0UXVpbGx9XHJcblx0XHRcdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0XHRcdG5hbWU9J2N0RGVzaWduYXRpb25UaXRyZSdcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0NvcnBzIGR1IG1haWwgaWNpLi4uJ1xyXG5cdFx0XHRcdFx0XHRtb2R1bGVzPXtRdWlsbE1vZHVsZXN9XHJcblx0XHRcdFx0XHRcdGZvcm1hdHM9e1F1aWxsRm9ybWF0c31cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IHBhZGRpbmdUb3A6ICc2MHB4JywgbWluSGVpZ2h0OiAnMzAwcHgnIH19XHJcblx0XHRcdFx0XHRcdGFzPXtSZWFjdFF1aWxsfVxyXG5cdFx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0XHRuYW1lPSdjdFByaW5jaXBDYXJhYydcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0NvcnBzIGR1IG1haWwgaWNpLi4uJ1xyXG5cdFx0XHRcdFx0XHRtb2R1bGVzPXtRdWlsbE1vZHVsZXN9XHJcblx0XHRcdFx0XHRcdGZvcm1hdHM9e1F1aWxsRm9ybWF0c31cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IHBhZGRpbmdUb3A6ICc2MHB4JywgbWluSGVpZ2h0OiAnMzAwcHgnIH19XHJcblx0XHRcdFx0XHRcdGFzPXtSZWFjdFF1aWxsfVxyXG5cdFx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0XHRuYW1lPSdjdFNpdHVMb2cnXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdDb3JwcyBkdSBtYWlsIGljaS4uLidcclxuXHRcdFx0XHRcdFx0bW9kdWxlcz17UXVpbGxNb2R1bGVzfVxyXG5cdFx0XHRcdFx0XHRmb3JtYXRzPXtRdWlsbEZvcm1hdHN9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBwYWRkaW5nVG9wOiAnNjBweCcsIG1pbkhlaWdodDogJzMwMHB4JyB9fVxyXG5cdFx0XHRcdFx0XHRhcz17UmVhY3RRdWlsbH1cclxuXHRcdFx0XHRcdFx0Y29udHJvbD17Y29udHJvbH1cclxuXHRcdFx0XHRcdFx0bmFtZT0nY3REZXNjTG9nJ1xyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nQ29ycHMgZHUgbWFpbCBpY2kuLi4nXHJcblx0XHRcdFx0XHRcdG1vZHVsZXM9e1F1aWxsTW9kdWxlc31cclxuXHRcdFx0XHRcdFx0Zm9ybWF0cz17UXVpbGxGb3JtYXRzfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0PENvbnRyb2xsZXJcclxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgcGFkZGluZ1RvcDogJzYwcHgnLCBtaW5IZWlnaHQ6ICczMDBweCcgfX1cclxuXHRcdFx0XHRcdFx0YXM9e1JlYWN0UXVpbGx9XHJcblx0XHRcdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0XHRcdG5hbWU9J2N0RHVyZWVMb2MnXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdDb3JwcyBkdSBtYWlsIGljaS4uLidcclxuXHRcdFx0XHRcdFx0bW9kdWxlcz17UXVpbGxNb2R1bGVzfVxyXG5cdFx0XHRcdFx0XHRmb3JtYXRzPXtRdWlsbEZvcm1hdHN9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblxyXG5cdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdHR5cGU9J3N1Ym1pdCdcclxuXHRcdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRcdGNvbG9yPSdwcmltYXJ5J1xyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0XHRWYWxpZGVyIGxlcyBtb2RpZmljYXRpb25zXHJcblx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKHdpdGhTbmFja2JhcihGb3JtSW5mb3NDb250cmF0KSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=