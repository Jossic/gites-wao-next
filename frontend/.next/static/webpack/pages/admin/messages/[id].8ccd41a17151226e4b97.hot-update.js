webpackHotUpdate_N_E("pages/admin/messages/[id]",{

/***/ "./pages/admin/messages/[id].js":
/*!**************************************!*\
  !*** ./pages/admin/messages/[id].js ***!
  \**************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/layout/AdminHeader */ "./components/layout/AdminHeader.js");
/* harmony import */ var _components_auth_Admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/auth/Admin */ "./components/auth/Admin.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Send */ "./node_modules/@material-ui/icons/Send.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\admin\\messages\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

var MessageId = function MessageId(_ref) {
  _s();

  var message = _ref.message;
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }
  }, __jsx(_components_auth_Admin__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("h2", {
    style: {
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 6
    }
  }, "Consultation du message de ", message.nom), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 6
    }
  }), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h5",
    component: "h5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 8
    }
  }, "Envoy\xE9 par ", message.nom), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.title,
    color: "textSecondary",
    gutterBottom: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 8
    }
  }, "Envoy\xE9 le", ' ', dayjs__WEBPACK_IMPORTED_MODULE_3___default()(message.createdAt).format('DD/MM/YYYY à HH:mm')), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.pos,
    color: "textSecondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 8
    }
  }, "Coordonn\xE9es :", ' ', __jsx("a", {
    href: "mailto:".concat(message.mail),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, message.mail), ' ', "/ 0", "".concat(message.tel.toString().substring(0, 1), " ").concat(message.tel.toString().substring(1, 3), " ").concat(message.tel.toString().substring(3, 5), " ").concat(message.tel.toString().substring(5, 7), " ").concat(message.tel.toString().substring(7, 9))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "body2",
    component: "p",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 8
    }
  }, "Message :", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }), message.msg)), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, __jsx("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "outlined-full-width",
    label: "Message",
    style: {
      margin: 8
    },
    placeholder: "R\xE9ponse",
    fullWidth: true,
    margin: "normal",
    InputLabelProps: {
      shrink: true
    },
    variant: "outlined",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }), __jsx(Divider, {
    className: classes.divider,
    orientation: "vertical",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }), __jsx(IconButton, {
    type: "submit",
    color: "primary",
    className: classes.iconButton,
    "aria-label": "directions",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 10
    }
  }))))))));
};

_s(MessageId, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = MessageId;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (MessageId);

var _c;

$RefreshReg$(_c, "MessageId");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vbWVzc2FnZXMvLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwibWluV2lkdGgiLCJidWxsZXQiLCJkaXNwbGF5IiwibWFyZ2luIiwidHJhbnNmb3JtIiwidGl0bGUiLCJmb250U2l6ZSIsInBvcyIsIm1hcmdpbkJvdHRvbSIsIk1lc3NhZ2VJZCIsIm1lc3NhZ2UiLCJjbGFzc2VzIiwiY29sb3IiLCJub20iLCJkYXlqcyIsImNyZWF0ZWRBdCIsImZvcm1hdCIsIm1haWwiLCJ0ZWwiLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsIm1zZyIsInNocmluayIsImRpdmlkZXIiLCJpY29uQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQzVCQyxNQUFJLEVBQUU7QUFDTEMsWUFBUSxFQUFFO0FBREwsR0FEc0I7QUFJNUJDLFFBQU0sRUFBRTtBQUNQQyxXQUFPLEVBQUUsY0FERjtBQUVQQyxVQUFNLEVBQUUsT0FGRDtBQUdQQyxhQUFTLEVBQUU7QUFISixHQUpvQjtBQVM1QkMsT0FBSyxFQUFFO0FBQ05DLFlBQVEsRUFBRTtBQURKLEdBVHFCO0FBWTVCQyxLQUFHLEVBQUU7QUFDSkMsZ0JBQVksRUFBRTtBQURWO0FBWnVCLENBQUQsQ0FBNUI7O0FBaUJBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWlCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ2xDLE1BQU1DLE9BQU8sR0FBR2QsU0FBUyxFQUF6QjtBQUVBLFNBQ0MsbUVBQ0MsTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUM7QUFBSSxTQUFLLEVBQUU7QUFBRWUsV0FBSyxFQUFFO0FBQVQsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQUM2QkYsT0FBTyxDQUFDRyxHQURyQyxDQUZELEVBS0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxELEVBTUMsTUFBQyw4REFBRDtBQUFNLGFBQVMsRUFBRUYsT0FBTyxDQUFDWixJQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxvRUFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUF5QixhQUFTLEVBQUMsSUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDYVcsT0FBTyxDQUFDRyxHQURyQixDQURELEVBSUMsTUFBQyxvRUFBRDtBQUNDLGFBQVMsRUFBRUYsT0FBTyxDQUFDTixLQURwQjtBQUVDLFNBQUssRUFBQyxlQUZQO0FBR0MsZ0JBQVksTUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUlXLEdBSlgsRUFLRVMsNENBQUssQ0FBQ0osT0FBTyxDQUFDSyxTQUFULENBQUwsQ0FBeUJDLE1BQXpCLENBQ0Esb0JBREEsQ0FMRixDQUpELEVBY0MsTUFBQyxvRUFBRDtBQUNDLGFBQVMsRUFBRUwsT0FBTyxDQUFDSixHQURwQjtBQUVDLFNBQUssRUFBQyxlQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBR2UsR0FIZixFQUlDO0FBQUcsUUFBSSxtQkFBWUcsT0FBTyxDQUFDTyxJQUFwQixDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRVAsT0FBTyxDQUFDTyxJQURWLENBSkQsRUFNTSxHQU5OLG1CQVFLUCxPQUFPLENBQUNRLEdBQVIsQ0FDRkMsUUFERSxHQUVGQyxTQUZFLENBR0YsQ0FIRSxFQUlGLENBSkUsQ0FSTCxjQWFPVixPQUFPLENBQUNRLEdBQVIsQ0FDSkMsUUFESSxHQUVKQyxTQUZJLENBR0osQ0FISSxFQUlKLENBSkksQ0FiUCxjQWtCT1YsT0FBTyxDQUFDUSxHQUFSLENBQ0pDLFFBREksR0FFSkMsU0FGSSxDQUdKLENBSEksRUFJSixDQUpJLENBbEJQLGNBdUJPVixPQUFPLENBQUNRLEdBQVIsQ0FDSkMsUUFESSxHQUVKQyxTQUZJLENBR0osQ0FISSxFQUlKLENBSkksQ0F2QlAsY0E0Qk9WLE9BQU8sQ0FBQ1EsR0FBUixDQUNKQyxRQURJLEdBRUpDLFNBRkksQ0FFTSxDQUZOLEVBRVMsQ0FGVCxDQTVCUCxFQWRELEVBOENDLE1BQUMsb0VBQUQ7QUFBWSxXQUFPLEVBQUMsT0FBcEI7QUFBNEIsYUFBUyxFQUFDLEdBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZELEVBR0VWLE9BQU8sQ0FBQ1csR0FIVixDQTlDRCxDQURELEVBcURDLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQ0MsYUFBUyxFQUFFVixPQUFPLENBQUNaLElBRHBCO0FBRUMsY0FBVSxNQUZYO0FBR0MsZ0JBQVksRUFBQyxLQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJQyxNQUFDLG9FQUFEO0FBQ0MsTUFBRSxFQUFDLHFCQURKO0FBRUMsU0FBSyxFQUFDLFNBRlA7QUFHQyxTQUFLLEVBQUU7QUFBRUksWUFBTSxFQUFFO0FBQVYsS0FIUjtBQUlDLGVBQVcsRUFBQyxZQUpiO0FBS0MsYUFBUyxNQUxWO0FBTUMsVUFBTSxFQUFDLFFBTlI7QUFPQyxtQkFBZSxFQUFFO0FBQ2hCbUIsWUFBTSxFQUFFO0FBRFEsS0FQbEI7QUFVQyxXQUFPLEVBQUMsVUFWVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkQsRUFnQkMsTUFBQyxPQUFEO0FBQ0MsYUFBUyxFQUFFWCxPQUFPLENBQUNZLE9BRHBCO0FBRUMsZUFBVyxFQUFDLFVBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRCxFQW9CQyxNQUFDLFVBQUQ7QUFDQyxRQUFJLEVBQUMsUUFETjtBQUVDLFNBQUssRUFBQyxTQUZQO0FBR0MsYUFBUyxFQUFFWixPQUFPLENBQUNhLFVBSHBCO0FBSUMsa0JBQVcsWUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0MsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEQsQ0FwQkQsQ0FERCxDQXJERCxDQU5ELENBREQsQ0FERCxDQUREO0FBaUdBLENBcEdEOztHQUFNZixTO1VBQ1daLFM7OztLQURYWSxTOztBQWtIU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vbWVzc2FnZXMvW2lkXS44Y2NkNDFhMTcxNTEyMjZlNGI5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkbWluSGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0FkbWluSGVhZGVyJztcclxuaW1wb3J0IEFkbWluIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYXV0aC9BZG1pbic7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCB7IGxpc3RNZXNzYWdlQnlJZCB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvbWVzc2FnZUFjdGlvbnMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucyc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IFNlbmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZW5kJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdG1pbldpZHRoOiAyNzUsXHJcblx0fSxcclxuXHRidWxsZXQ6IHtcclxuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG5cdFx0bWFyZ2luOiAnMCAycHgnLFxyXG5cdFx0dHJhbnNmb3JtOiAnc2NhbGUoMC44KScsXHJcblx0fSxcclxuXHR0aXRsZToge1xyXG5cdFx0Zm9udFNpemU6IDE0LFxyXG5cdH0sXHJcblx0cG9zOiB7XHJcblx0XHRtYXJnaW5Cb3R0b206IDEyLFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuY29uc3QgTWVzc2FnZUlkID0gKHsgbWVzc2FnZSB9KSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PEFkbWluSGVhZGVyPlxyXG5cdFx0XHRcdDxBZG1pbj5cclxuXHRcdFx0XHRcdHsvKiBGaWwgZCdhcmlhbmUgKi99XHJcblx0XHRcdFx0XHQ8aDIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+XHJcblx0XHRcdFx0XHRcdENvbnN1bHRhdGlvbiBkdSBtZXNzYWdlIGRlIHttZXNzYWdlLm5vbX1cclxuXHRcdFx0XHRcdDwvaDI+XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0XHRcdFx0PENhcmRDb250ZW50PlxyXG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1JyBjb21wb25lbnQ9J2g1Jz5cclxuXHRcdFx0XHRcdFx0XHRcdEVudm95w6kgcGFyIHttZXNzYWdlLm5vbX1cclxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHlcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yPSd0ZXh0U2Vjb25kYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdFx0Z3V0dGVyQm90dG9tPlxyXG5cdFx0XHRcdFx0XHRcdFx0RW52b3nDqSBsZXsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHR7ZGF5anMobWVzc2FnZS5jcmVhdGVkQXQpLmZvcm1hdChcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0REL01NL1lZWVkgw6AgSEg6bW0nXHJcblx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHJcblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHlcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5wb3N9XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcj0ndGV4dFNlY29uZGFyeSc+XHJcblx0XHRcdFx0XHRcdFx0XHRDb29yZG9ubsOpZXMgOnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtgbWFpbHRvOiR7bWVzc2FnZS5tYWlsfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7bWVzc2FnZS5tYWlsfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHQvIDBcclxuXHRcdFx0XHRcdFx0XHRcdHtgJHttZXNzYWdlLnRlbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQudG9TdHJpbmcoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuc3Vic3RyaW5nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0MVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpfSAke21lc3NhZ2UudGVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdC50b1N0cmluZygpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5zdWJzdHJpbmcoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0MSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQzXHJcblx0XHRcdFx0XHRcdFx0XHRcdCl9ICR7bWVzc2FnZS50ZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnRvU3RyaW5nKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnN1YnN0cmluZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDVcclxuXHRcdFx0XHRcdFx0XHRcdFx0KX0gJHttZXNzYWdlLnRlbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQudG9TdHJpbmcoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuc3Vic3RyaW5nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0N1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQpfSAke21lc3NhZ2UudGVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdC50b1N0cmluZygpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5zdWJzdHJpbmcoNywgOSl9YH1cclxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTInIGNvbXBvbmVudD0ncCc+XHJcblx0XHRcdFx0XHRcdFx0XHRNZXNzYWdlIDpcclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0e21lc3NhZ2UubXNnfVxyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0PC9DYXJkQ29udGVudD5cclxuXHRcdFx0XHRcdFx0PENhcmRDb250ZW50PlxyXG5cdFx0XHRcdFx0XHRcdDxmb3JtXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMucm9vdH1cclxuXHRcdFx0XHRcdFx0XHRcdG5vVmFsaWRhdGVcclxuXHRcdFx0XHRcdFx0XHRcdGF1dG9Db21wbGV0ZT0nb2ZmJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J291dGxpbmVkLWZ1bGwtd2lkdGgnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPSdNZXNzYWdlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBtYXJnaW46IDggfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J1LDqXBvbnNlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmdWxsV2lkdGhcclxuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luPSdub3JtYWwnXHJcblx0XHRcdFx0XHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD0nb3V0bGluZWQnXHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PERpdmlkZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmRpdmlkZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9yaWVudGF0aW9uPSd2ZXJ0aWNhbCdcclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdzdWJtaXQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yPSdwcmltYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkJ1dHRvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0nZGlyZWN0aW9ucyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxTZW5kSWNvbiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9JY29uQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHRcdFx0PC9DYXJkQ29udGVudD5cclxuXHRcdFx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0XHQ8L0FkbWluPlxyXG5cdFx0XHQ8L0FkbWluSGVhZGVyPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG5cdGNvbnN0IHJlczEgPSBhd2FpdCBsaXN0TWVzc2FnZUJ5SWQoY29udGV4dC5wYXJhbXMuaWQpO1xyXG5cdGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCByZXMxO1xyXG5cdGNvbnNvbGUubG9nKCdtZXNzYWdlJywgbWVzc2FnZSk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRtZXNzYWdlLFxyXG5cdFx0fSxcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlSWQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=