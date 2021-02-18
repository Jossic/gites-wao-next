webpackHotUpdate_N_E("pages/admin/crud/mailer/create",{

/***/ "./components/HOC/Snackbar.js":
/*!************************************!*\
  !*** ./components/HOC/Snackbar.js ***!
  \************************************/
/*! exports provided: withSnackbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withSnackbar", function() { return withSnackbar; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Slide */ "./node_modules/@material-ui/core/esm/Slide/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");


var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\HOC\\Snackbar.js",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function Alert(props) {
  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    elevation: 6,
    variant: "filled"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }));
}

_c = Alert;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2)
      }
    }
  };
});
var withSnackbar = forwardRef(function (WrappedComponent) {
  var _s = $RefreshSig$();

  return _s(function (props) {
    _s();

    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        open = _useState[0],
        setOpen = _useState[1];

    var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('Snackbar'),
        message = _useState2[0],
        setMessage = _useState2[1];

    var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(6000),
        duration = _useState3[0],
        setDuration = _useState3[1];

    var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('success'),
        severity = _useState4[0],
        setSeverity = _useState4[1];
    /** error | warning | info */


    var classes = useStyles();

    var showMessage = function showMessage(message) {
      var severity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'error';
      var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6000;
      setMessage(message);
      setSeverity(severity);
      setDuration(duration);
      setOpen(true);
    };

    var handleClose = function handleClose(event, reason) {
      if (reason === 'clickaway') {
        return;
      }

      setOpen(false);
    };

    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      snackbarShowMessage: showMessage,
      ref: ref,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }
    })), __jsx("div", {
      className: classes.root,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      },
      autoHideDuration: duration,
      open: open,
      onClose: handleClose,
      TransitionComponent: _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_3__["default"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 6
      }
    }, __jsx(Alert, {
      variant: "filled",
      onClose: handleClose,
      severity: severity,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 7
      }
    }, message))));
  }, "5XbwIG1tcNGGw8a7UQs9qDQGMH0=", false, function () {
    return [useStyles];
  });
});

var _c;

$RefreshReg$(_c, "Alert");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IT0MvU25hY2tiYXIuanMiXSwibmFtZXMiOlsiQWxlcnQiLCJwcm9wcyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJ3aXRoU25hY2tiYXIiLCJmb3J3YXJkUmVmIiwiV3JhcHBlZENvbXBvbmVudCIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImR1cmF0aW9uIiwic2V0RHVyYXRpb24iLCJzZXZlcml0eSIsInNldFNldmVyaXR5IiwiY2xhc3NlcyIsInNob3dNZXNzYWdlIiwiaGFuZGxlQ2xvc2UiLCJldmVudCIsInJlYXNvbiIsInJlZiIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIlNsaWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFDckIsU0FBTyxNQUFDLDhEQUFEO0FBQVUsYUFBUyxFQUFFLENBQXJCO0FBQXdCLFdBQU8sRUFBQztBQUFoQyxLQUE2Q0EsS0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFQO0FBQ0E7O0tBRlFELEs7QUFJVCxJQUFNRSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDeENDLFFBQUksRUFBRTtBQUNMQyxXQUFLLEVBQUUsTUFERjtBQUVMLG1CQUFhO0FBQ1pDLGlCQUFTLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQ7QUFEQztBQUZSO0FBRGtDLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBU08sSUFBTUMsWUFBWSxHQUFHQyxVQUFVLENBQUMsVUFBQ0MsZ0JBQUQsRUFBc0I7QUFBQTs7QUFDNUQsWUFBTyxVQUFDVixLQUFELEVBQVc7QUFBQTs7QUFBQSxvQkFDT1csc0RBQVEsQ0FBQyxLQUFELENBRGY7QUFBQSxRQUNWQyxJQURVO0FBQUEsUUFDSkMsT0FESTs7QUFBQSxxQkFFYUYsc0RBQVEsQ0FBQyxVQUFELENBRnJCO0FBQUEsUUFFVkcsT0FGVTtBQUFBLFFBRURDLFVBRkM7O0FBQUEscUJBR2VKLHNEQUFRLENBQUMsSUFBRCxDQUh2QjtBQUFBLFFBR1ZLLFFBSFU7QUFBQSxRQUdBQyxXQUhBOztBQUFBLHFCQUllTixzREFBUSxDQUN2QyxTQUR1QyxDQUp2QjtBQUFBLFFBSVZPLFFBSlU7QUFBQSxRQUlBQyxXQUpBO0FBTWQ7OztBQUVILFFBQU1DLE9BQU8sR0FBR25CLFNBQVMsRUFBekI7O0FBQ0EsUUFBTW9CLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNQLE9BQUQsRUFBa0Q7QUFBQSxVQUF4Q0ksUUFBd0MsdUVBQTdCLE9BQTZCO0FBQUEsVUFBcEJGLFFBQW9CLHVFQUFULElBQVM7QUFDckVELGdCQUFVLENBQUNELE9BQUQsQ0FBVjtBQUNBSyxpQkFBVyxDQUFDRCxRQUFELENBQVg7QUFDQUQsaUJBQVcsQ0FBQ0QsUUFBRCxDQUFYO0FBQ0FILGFBQU8sQ0FBQyxJQUFELENBQVA7QUFDQSxLQUxEOztBQU9BLFFBQU1TLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUN0QyxVQUFJQSxNQUFNLEtBQUssV0FBZixFQUE0QjtBQUMzQjtBQUNBOztBQUNEWCxhQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0EsS0FMRDs7QUFPQSxXQUNDLG1FQUNDLE1BQUMsZ0JBQUQseUZBQ0tiLEtBREw7QUFFQyx5QkFBbUIsRUFBRXFCLFdBRnRCO0FBR0MsU0FBRyxFQUFFSSxHQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERCxFQU1DO0FBQUssZUFBUyxFQUFFTCxPQUFPLENBQUNoQixJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0MsTUFBQyxrRUFBRDtBQUNDLGtCQUFZLEVBQUU7QUFDYnNCLGdCQUFRLEVBQUUsUUFERztBQUViQyxrQkFBVSxFQUFFO0FBRkMsT0FEZjtBQUtDLHNCQUFnQixFQUFFWCxRQUxuQjtBQU1DLFVBQUksRUFBRUosSUFOUDtBQU9DLGFBQU8sRUFBRVUsV0FQVjtBQVFDLHlCQUFtQixFQUFFTSwrREFSdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVNDLE1BQUMsS0FBRDtBQUNDLGFBQU8sRUFBQyxRQURUO0FBRUMsYUFBTyxFQUFFTixXQUZWO0FBR0MsY0FBUSxFQUFFSixRQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJRUosT0FKRixDQVRELENBREQsQ0FORCxDQUREO0FBMkJBLEdBbEREO0FBQUEsWUFRaUJiLFNBUmpCO0FBQUE7QUFtREEsQ0FwRHFDLENBQS9CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvbWFpbGVyL2NyZWF0ZS5iYzA5YjY1NGJlMGViMDIxMWFlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXInO1xyXG5pbXBvcnQgU2xpZGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGUnO1xyXG5pbXBvcnQgTXVpQWxlcnQgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BbGVydCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuZnVuY3Rpb24gQWxlcnQocHJvcHMpIHtcclxuXHRyZXR1cm4gPE11aUFsZXJ0IGVsZXZhdGlvbj17Nn0gdmFyaWFudD0nZmlsbGVkJyB7Li4ucHJvcHN9IC8+O1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRyb290OiB7XHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0JyYgPiAqICsgKic6IHtcclxuXHRcdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdFx0fSxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgY29uc3Qgd2l0aFNuYWNrYmFyID0gZm9yd2FyZFJlZigoV3JhcHBlZENvbXBvbmVudCkgPT4ge1xyXG5cdHJldHVybiAocHJvcHMpID0+IHtcclxuXHRcdGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRcdGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCdTbmFja2JhcicpO1xyXG5cdFx0Y29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZSg2MDAwKTtcclxuXHRcdGNvbnN0IFtzZXZlcml0eSwgc2V0U2V2ZXJpdHldID0gdXNlU3RhdGUoXHJcblx0XHRcdCdzdWNjZXNzJ1xyXG5cdFx0KTsgLyoqIGVycm9yIHwgd2FybmluZyB8IGluZm8gKi9cclxuXHJcblx0XHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0XHRjb25zdCBzaG93TWVzc2FnZSA9IChtZXNzYWdlLCBzZXZlcml0eSA9ICdlcnJvcicsIGR1cmF0aW9uID0gNjAwMCkgPT4ge1xyXG5cdFx0XHRzZXRNZXNzYWdlKG1lc3NhZ2UpO1xyXG5cdFx0XHRzZXRTZXZlcml0eShzZXZlcml0eSk7XHJcblx0XHRcdHNldER1cmF0aW9uKGR1cmF0aW9uKTtcclxuXHRcdFx0c2V0T3Blbih0cnVlKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgaGFuZGxlQ2xvc2UgPSAoZXZlbnQsIHJlYXNvbikgPT4ge1xyXG5cdFx0XHRpZiAocmVhc29uID09PSAnY2xpY2thd2F5Jykge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHRzZXRPcGVuKGZhbHNlKTtcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHQ8V3JhcHBlZENvbXBvbmVudFxyXG5cdFx0XHRcdFx0ey4uLnByb3BzfVxyXG5cdFx0XHRcdFx0c25hY2tiYXJTaG93TWVzc2FnZT17c2hvd01lc3NhZ2V9XHJcblx0XHRcdFx0XHRyZWY9e3JlZn1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG5cdFx0XHRcdFx0PFNuYWNrYmFyXHJcblx0XHRcdFx0XHRcdGFuY2hvck9yaWdpbj17e1xyXG5cdFx0XHRcdFx0XHRcdHZlcnRpY2FsOiAnYm90dG9tJyxcclxuXHRcdFx0XHRcdFx0XHRob3Jpem9udGFsOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0YXV0b0hpZGVEdXJhdGlvbj17ZHVyYXRpb259XHJcblx0XHRcdFx0XHRcdG9wZW49e29wZW59XHJcblx0XHRcdFx0XHRcdG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG5cdFx0XHRcdFx0XHRUcmFuc2l0aW9uQ29tcG9uZW50PXtTbGlkZX0+XHJcblx0XHRcdFx0XHRcdDxBbGVydFxyXG5cdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J2ZpbGxlZCdcclxuXHRcdFx0XHRcdFx0XHRvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuXHRcdFx0XHRcdFx0XHRzZXZlcml0eT17c2V2ZXJpdHl9PlxyXG5cdFx0XHRcdFx0XHRcdHttZXNzYWdlfVxyXG5cdFx0XHRcdFx0XHQ8L0FsZXJ0PlxyXG5cdFx0XHRcdFx0PC9TbmFja2Jhcj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH07XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9