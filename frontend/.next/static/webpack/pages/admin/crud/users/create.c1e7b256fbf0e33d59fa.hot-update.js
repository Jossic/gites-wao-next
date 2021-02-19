webpackHotUpdate_N_E("pages/admin/crud/users/create",{

/***/ "./components/admin/forms/FormCreateUser.js":
/*!**************************************************!*\
  !*** ./components/admin/forms/FormCreateUser.js ***!
  \**************************************************/
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
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var _HOC_Snackbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../HOC/Snackbar */ "./components/HOC/Snackbar.js");



var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\forms\\FormCreateUser.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







 // function Alert(props) {
// 	return <MuiAlert elevation={6} variant='filled' {...props} />;
// }

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
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

var FormCreateUser = function FormCreateUser(_ref) {
  _s();

  var snackbarShowMessage = _ref.snackbarShowMessage;
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_7__["getCookie"])('token');
  var classes = useStyles();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"])({// defaultValues: ,
  }),
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
              createUser(data, token).then(function (result) {
                console.log('result', result);

                if (result.error) {
                  setLoading(false);
                  snackbarShowMessage("".concat(result.error));
                } else {
                  setLoading(false);
                  snackbarShowMessage("".concat(result.message), 'success');
                  setTimeout(function () {
                    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/admin/users', null, {
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
      lineNumber: 66,
      columnNumber: 16
    }
  }), __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    className: classes.textField,
    inputRef: register,
    name: "name",
    id: "standard-number",
    label: "Nom",
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    className: classes.textField,
    inputRef: register,
    name: "email",
    type: "mail",
    id: "standard-number",
    label: "Mail",
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    className: classes.textField,
    inputRef: register,
    name: "password",
    type: "password",
    id: "standard-number",
    label: "Mot de passe",
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    direction: "row",
    justify: "center",
    alignItems: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControlLabel"], {
    control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
      inputRef: register,
      name: "isAdmin",
      defaultChecked: true,
      color: "primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 8
      }
    }),
    label: "Admin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
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
      lineNumber: 119,
      columnNumber: 5
    }
  }, "Cr\xE9er cet utilisateur")));
};

_s(FormCreateUser, "c4DIMrXnHQLcMVhm41ACupA/Y/E=", false, function () {
  return [useStyles, react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"]];
});

_c = FormCreateUser;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(_c2 = Object(_HOC_Snackbar__WEBPACK_IMPORTED_MODULE_8__["withSnackbar"])(FormCreateUser)));

var _c, _c2, _c3;

$RefreshReg$(_c, "FormCreateUser");
$RefreshReg$(_c2, "%default%$withRouter");
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9Gb3JtQ3JlYXRlVXNlci5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJidXR0b24iLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJtYXJnaW5Ub3AiLCJ3aWR0aCIsImZvcm1Db250cm9sIiwibWFyZ2luIiwidGV4dEZpZWxkIiwiRm9ybUNyZWF0ZVVzZXIiLCJzbmFja2JhclNob3dNZXNzYWdlIiwidG9rZW4iLCJnZXRDb29raWUiLCJjbGFzc2VzIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm9uU3VibWl0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVVc2VyIiwidGhlbiIsInJlc3VsdCIsImVycm9yIiwibWVzc2FnZSIsInNldFRpbWVvdXQiLCJSb3V0ZXIiLCJwdXNoIiwic2hhbGxvdyIsInNocmluayIsIndpdGhSb3V0ZXIiLCJ3aXRoU25hY2tiYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3hDQyxVQUFNLEVBQUU7QUFDUEMsaUJBQVcsRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZCxDQUROO0FBRVBDLGVBQVMsRUFBRUosS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZCxDQUZKO0FBR1BFLFdBQUssRUFBRTtBQUhBLEtBRGdDO0FBTXhDQyxlQUFXLEVBQUU7QUFDWkMsWUFBTSxFQUFFUCxLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkLENBREk7QUFFWkUsV0FBSyxFQUFFO0FBRkssS0FOMkI7QUFVeENH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O0FBR0MsUUFBSSxFQUFDLFVBSE47QUFJQyxRQUFJLEVBQUMsVUFKTjtBQUtDLE1BQUUsRUFBQyxpQkFMSjtBQU1DLFNBQUssRUFBQyxjQU5QO0FBT0MsbUJBQWUsRUFBRTtBQUNoQmtCLFlBQU0sRUFBRTtBQURRLEtBUGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0QkQsRUFrQ0MsTUFBQyxzREFBRDtBQUNDLGFBQVMsTUFEVjtBQUVDLGFBQVMsRUFBQyxLQUZYO0FBR0MsV0FBTyxFQUFDLFFBSFQ7QUFJQyxjQUFVLEVBQUMsUUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0MsTUFBQyxrRUFBRDtBQUNDLFdBQU8sRUFDTixNQUFDLHdEQUFEO0FBQ0MsY0FBUSxFQUFFbEIsUUFEWDtBQUVDLFVBQUksRUFBQyxTQUZOO0FBR0Msb0JBQWMsTUFIZjtBQUlDLFdBQUssRUFBQyxTQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRjtBQVNDLFNBQUssRUFBQyxPQVRQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRCxDQWxDRCxFQW1EQyxNQUFDLHdEQUFEO0FBQ0MsUUFBSSxFQUFDLFFBRE47QUFFQyxXQUFPLEVBQUMsV0FGVDtBQUdDLFNBQUssRUFBQyxTQUhQO0FBSUMsYUFBUyxFQUFFRixPQUFPLENBQUNaLE1BSnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBbkRELENBSEQsQ0FERDtBQWlFQSxDQTVGRDs7R0FBTVEsYztVQUVXWCxTLEVBQ21CZ0IsdUQ7OztLQUg5QkwsYztBQThGUyxxRUFBQXlCLDhEQUFVLE9BQUNDLGtFQUFZLENBQUMxQixjQUFELENBQWIsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC91c2Vycy9jcmVhdGUuYzFlN2IyNTZmYmYwZTMzZDU5ZmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0QnV0dG9uLFxyXG5cdENpcmN1bGFyUHJvZ3Jlc3MsXHJcblx0U3dpdGNoLFxyXG5cdEZvcm1Db250cm9sTGFiZWwsXHJcblx0VGV4dEZpZWxkLFxyXG5cdEdyaWQsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHdpdGhTbmFja2JhciB9IGZyb20gJy4uLy4uL0hPQy9TbmFja2Jhcic7XHJcblxyXG4vLyBmdW5jdGlvbiBBbGVydChwcm9wcykge1xyXG4vLyBcdHJldHVybiA8TXVpQWxlcnQgZWxldmF0aW9uPXs2fSB2YXJpYW50PSdmaWxsZWQnIHsuLi5wcm9wc30gLz47XHJcbi8vIH1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdGJ1dHRvbjoge1xyXG5cdFx0bWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdH0sXHJcblx0Zm9ybUNvbnRyb2w6IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdHdpZHRoOiAnODAlJyxcclxuXHR9LFxyXG5cdHRleHRGaWVsZDoge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0d2lkdGg6ICc4MCUnLFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEZvcm1DcmVhdGVVc2VyID0gKHsgc25hY2tiYXJTaG93TWVzc2FnZSB9KSA9PiB7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybSh7XHJcblx0XHQvLyBkZWZhdWx0VmFsdWVzOiAsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRzZXRMb2FkaW5nKHRydWUpO1xyXG5cdFx0Y3JlYXRlVXNlcihkYXRhLCB0b2tlbikudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZXN1bHQnLCByZXN1bHQpO1xyXG5cdFx0XHRpZiAocmVzdWx0LmVycm9yKSB7XHJcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHRcdFx0c25hY2tiYXJTaG93TWVzc2FnZShgJHtyZXN1bHQuZXJyb3J9YCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHRcdFx0c25hY2tiYXJTaG93TWVzc2FnZShgJHtyZXN1bHQubWVzc2FnZX1gLCAnc3VjY2VzcycpO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Um91dGVyLnB1c2goJy9hZG1pbi91c2VycycsIG51bGwsIHsgc2hhbGxvdzogdHJ1ZSB9KTtcclxuXHRcdFx0XHR9LCAzMDAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHtsb2FkaW5nICYmIDxDaXJjdWxhclByb2dyZXNzIC8+fVxyXG5cclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSduYW1lJ1xyXG5cdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdGxhYmVsPSdOb20nXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSdlbWFpbCdcclxuXHRcdFx0XHRcdHR5cGU9J21haWwnXHJcblx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J01haWwnXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSdwYXNzd29yZCdcclxuXHRcdFx0XHRcdHR5cGU9J3Bhc3N3b3JkJ1xyXG5cdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdGxhYmVsPSdNb3QgZGUgcGFzc2UnXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdFx0Y29udGFpbmVyXHJcblx0XHRcdFx0XHRkaXJlY3Rpb249J3JvdydcclxuXHRcdFx0XHRcdGp1c3RpZnk9J2NlbnRlcidcclxuXHRcdFx0XHRcdGFsaWduSXRlbXM9J2NlbnRlcic+XHJcblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xMYWJlbFxyXG5cdFx0XHRcdFx0XHRjb250cm9sPXtcclxuXHRcdFx0XHRcdFx0XHQ8U3dpdGNoXHJcblx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPSdpc0FkbWluJ1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdENoZWNrZWRcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yPSdwcmltYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9J0FkbWluJ1xyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0dHlwZT0nc3VibWl0J1xyXG5cdFx0XHRcdFx0dmFyaWFudD0nY29udGFpbmVkJ1xyXG5cdFx0XHRcdFx0Y29sb3I9J3ByaW1hcnknXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdENyw6llciBjZXQgdXRpbGlzYXRldXJcclxuXHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIod2l0aFNuYWNrYmFyKEZvcm1DcmVhdGVVc2VyKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=