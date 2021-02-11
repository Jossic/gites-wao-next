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
  }, "Coordonn\xE9es : ", "<a>mailto:".concat(message.mail, "</a>"), ' ', "/ 0", "".concat(message.tel.toString().substring(0, 1), " ").concat(message.tel.toString().substring(1, 3), " ").concat(message.tel.toString().substring(3, 5), " ").concat(message.tel.toString().substring(5, 7), " ").concat(message.tel.toString().substring(7, 9))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "body2",
    component: "p",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 8
    }
  }, "Message :", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }), message.msg)), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "standard-basic",
    label: "R\xE9ponse",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 8
    }
  }, __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  })))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vbWVzc2FnZXMvLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwibWluV2lkdGgiLCJidWxsZXQiLCJkaXNwbGF5IiwibWFyZ2luIiwidHJhbnNmb3JtIiwidGl0bGUiLCJmb250U2l6ZSIsInBvcyIsIm1hcmdpbkJvdHRvbSIsIk1lc3NhZ2VJZCIsIm1lc3NhZ2UiLCJjbGFzc2VzIiwiY29sb3IiLCJub20iLCJkYXlqcyIsImNyZWF0ZWRBdCIsImZvcm1hdCIsIm1haWwiLCJ0ZWwiLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsIm1zZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUM1QkMsTUFBSSxFQUFFO0FBQ0xDLFlBQVEsRUFBRTtBQURMLEdBRHNCO0FBSTVCQyxRQUFNLEVBQUU7QUFDUEMsV0FBTyxFQUFFLGNBREY7QUFFUEMsVUFBTSxFQUFFLE9BRkQ7QUFHUEMsYUFBUyxFQUFFO0FBSEosR0FKb0I7QUFTNUJDLE9BQUssRUFBRTtBQUNOQyxZQUFRLEVBQUU7QUFESixHQVRxQjtBQVk1QkMsS0FBRyxFQUFFO0FBQ0pDLGdCQUFZLEVBQUU7QUFEVjtBQVp1QixDQUFELENBQTVCOztBQWlCQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFpQjtBQUFBOztBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUNsQyxNQUFNQyxPQUFPLEdBQUdkLFNBQVMsRUFBekI7QUFFQSxTQUNDLG1FQUNDLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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bWVzc2FnZXMvW2lkXS44YjkyZGE1OTQ5YTI1MGY5MTk5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkbWluSGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0FkbWluSGVhZGVyJztcclxuaW1wb3J0IEFkbWluIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYXV0aC9BZG1pbic7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCB7IGxpc3RNZXNzYWdlQnlJZCB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvbWVzc2FnZUFjdGlvbnMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucyc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IFNlbmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZW5kJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdG1pbldpZHRoOiAyNzUsXHJcblx0fSxcclxuXHRidWxsZXQ6IHtcclxuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG5cdFx0bWFyZ2luOiAnMCAycHgnLFxyXG5cdFx0dHJhbnNmb3JtOiAnc2NhbGUoMC44KScsXHJcblx0fSxcclxuXHR0aXRsZToge1xyXG5cdFx0Zm9udFNpemU6IDE0LFxyXG5cdH0sXHJcblx0cG9zOiB7XHJcblx0XHRtYXJnaW5Cb3R0b206IDEyLFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuY29uc3QgTWVzc2FnZUlkID0gKHsgbWVzc2FnZSB9KSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PEFkbWluSGVhZGVyPlxyXG5cdFx0XHRcdDxBZG1pbj5cclxuXHRcdFx0XHRcdHsvKiBGaWwgZCdhcmlhbmUgKi99XHJcblx0XHRcdFx0XHQ8aDIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+XHJcblx0XHRcdFx0XHRcdENvbnN1bHRhdGlvbiBkdSBtZXNzYWdlIGRlIHttZXNzYWdlLm5vbX1cclxuXHRcdFx0XHRcdDwvaDI+XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0XHRcdFx0PENhcmRDb250ZW50PlxyXG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1JyBjb21wb25lbnQ9J2g1Jz5cclxuXHRcdFx0XHRcdFx0XHRcdEVudm95w6kgcGFyIHttZXNzYWdlLm5vbX1cclxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHlcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yPSd0ZXh0U2Vjb25kYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdFx0Z3V0dGVyQm90dG9tPlxyXG5cdFx0XHRcdFx0XHRcdFx0RW52b3nDqSBsZXsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHR7ZGF5anMobWVzc2FnZS5jcmVhdGVkQXQpLmZvcm1hdChcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0REL01NL1lZWVkgw6AgSEg6bW0nXHJcblx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHJcblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHlcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5wb3N9XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcj0ndGV4dFNlY29uZGFyeSc+XHJcblx0XHRcdFx0XHRcdFx0XHRDb29yZG9ubsOpZXMgOiB7YDxhPm1haWx0bzoke21lc3NhZ2UubWFpbH08L2E+YH17JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0LyAwXHJcblx0XHRcdFx0XHRcdFx0XHR7YCR7bWVzc2FnZS50ZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnRvU3RyaW5nKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnN1YnN0cmluZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDFcclxuXHRcdFx0XHRcdFx0XHRcdFx0KX0gJHttZXNzYWdlLnRlbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQudG9TdHJpbmcoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuc3Vic3RyaW5nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDEsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0M1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQpfSAke21lc3NhZ2UudGVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdC50b1N0cmluZygpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5zdWJzdHJpbmcoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0MyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ1XHJcblx0XHRcdFx0XHRcdFx0XHRcdCl9ICR7bWVzc2FnZS50ZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnRvU3RyaW5nKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnN1YnN0cmluZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ1LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDdcclxuXHRcdFx0XHRcdFx0XHRcdFx0KX0gJHttZXNzYWdlLnRlbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQudG9TdHJpbmcoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuc3Vic3RyaW5nKDcsIDkpfWB9XHJcblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkyJyBjb21wb25lbnQ9J3AnPlxyXG5cdFx0XHRcdFx0XHRcdFx0TWVzc2FnZSA6XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdHttZXNzYWdlLm1zZ31cclxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdDwvQ2FyZENvbnRlbnQ+XHJcblx0XHRcdFx0XHRcdDxDYXJkQWN0aW9ucz5cclxuXHRcdFx0XHRcdFx0XHQ8Zm9ybVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9XHJcblx0XHRcdFx0XHRcdFx0XHRub1ZhbGlkYXRlXHJcblx0XHRcdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9J29mZic+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSdzdGFuZGFyZC1iYXNpYydcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9J1LDqXBvbnNlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBzaXplPSdzbWFsbCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8U2VuZEljb24gLz5cclxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9DYXJkQWN0aW9ucz5cclxuXHRcdFx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0XHQ8L0FkbWluPlxyXG5cdFx0XHQ8L0FkbWluSGVhZGVyPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG5cdGNvbnN0IHJlczEgPSBhd2FpdCBsaXN0TWVzc2FnZUJ5SWQoY29udGV4dC5wYXJhbXMuaWQpO1xyXG5cdGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCByZXMxO1xyXG5cdGNvbnNvbGUubG9nKCdtZXNzYWdlJywgbWVzc2FnZSk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRtZXNzYWdlLFxyXG5cdFx0fSxcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlSWQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=