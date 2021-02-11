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
/* harmony import */ var _actions_messageActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/messageActions */ "./actions/messageActions.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Send */ "./node_modules/@material-ui/icons/Send.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TextareaAutosize */ "./node_modules/@material-ui/core/esm/TextareaAutosize/index.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Backspace__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Backspace */ "./node_modules/@material-ui/icons/Backspace.js");
/* harmony import */ var _material_ui_icons_Backspace__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Backspace__WEBPACK_IMPORTED_MODULE_16__);
var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\admin\\messages\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (darkTheme) {
  return {
    root: {
      minWidth: 275
    },
    rootPaper: {
      padding: '6px 4px',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#212529'
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
    },
    iconButton: {
      padding: 10
    },
    input: {
      marginLeft: darkTheme.spacing(1),
      flex: 1
    },
    divider: {
      height: 28,
      margin: 4
    }
  };
});

var MessageId = function MessageId(_ref) {
  _s();

  var message = _ref.message,
      router = _ref.router;
  var classes = useStyles();
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_14__["getCookie"])('token'); //Envoyer la réponse
  //UseEffect mettant vu à true au chargement de la page
  //Afficher la réponse en dessous du message

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_actions_messageActions__WEBPACK_IMPORTED_MODULE_4__["setVu"])(router.query.id, token);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 4
    }
  }, __jsx(_components_auth_Admin__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, __jsx("h2", {
    style: {
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 6
    }
  }, "Consultation du message de ", message.nom), __jsx(Link, {
    href: "/admin/message",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 6
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_Backspace__WEBPACK_IMPORTED_MODULE_16___default.a, {
    fontSize: "large",
    style: {
      "float": 'right'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 8
    }
  }))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 6
    }
  }), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h5",
    component: "h5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 8
    }
  }, "Envoy\xE9 par ", message.nom), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.title,
    color: "textSecondary",
    gutterBottom: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 8
    }
  }, "le", ' ', dayjs__WEBPACK_IMPORTED_MODULE_3___default()(message.createdAt).format('DD/MM/YYYY à HH:mm')), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.pos,
    color: "textSecondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 8
    }
  }, "Coordonn\xE9es :", ' ', __jsx("a", {
    href: "mailto:".concat(message.mail),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, message.mail), ' ', "/ 0", "".concat(message.tel.toString().substring(0, 1), " ").concat(message.tel.toString().substring(1, 3), " ").concat(message.tel.toString().substring(3, 5), " ").concat(message.tel.toString().substring(5, 7), " ").concat(message.tel.toString().substring(7, 9))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "body2",
    component: "p",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 8
    }
  }, "Message :", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }), message.msg)), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "form",
    className: classes.rootPaper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 8
    }
  }, __jsx("form", {
    className: classes.rootPaper,
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_13__["default"], {
    style: {
      width: '100%'
    },
    "aria-label": "reponse",
    placeholder: "R\xE9ponse",
    rowsMin: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 10
    }
  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.divider,
    orientation: "vertical",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 10
    }
  }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
    type: "submit",
    color: "primary",
    className: classes.iconButton,
    "aria-label": "Envoyer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 10
    }
  }, __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 11
    }
  })))))))));
};

_s(MessageId, "OAQf9SHEQQsOOZKjohcuI3tGtQ0=", false, function () {
  return [useStyles];
});

_c = MessageId;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_15__["withRouter"])(MessageId));

var _c, _c2;

$RefreshReg$(_c, "MessageId");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vbWVzc2FnZXMvLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJkYXJrVGhlbWUiLCJyb290IiwibWluV2lkdGgiLCJyb290UGFwZXIiLCJwYWRkaW5nIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImJ1bGxldCIsIm1hcmdpbiIsInRyYW5zZm9ybSIsInRpdGxlIiwiZm9udFNpemUiLCJwb3MiLCJtYXJnaW5Cb3R0b20iLCJpY29uQnV0dG9uIiwiaW5wdXQiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsImZsZXgiLCJkaXZpZGVyIiwiaGVpZ2h0IiwiTWVzc2FnZUlkIiwibWVzc2FnZSIsInJvdXRlciIsImNsYXNzZXMiLCJ0b2tlbiIsImdldENvb2tpZSIsInVzZUVmZmVjdCIsInNldFZ1IiwicXVlcnkiLCJpZCIsImNvbG9yIiwibm9tIiwiZGF5anMiLCJjcmVhdGVkQXQiLCJmb3JtYXQiLCJtYWlsIiwidGVsIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJtc2ciLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxTQUFEO0FBQUEsU0FBZ0I7QUFDNUNDLFFBQUksRUFBRTtBQUNMQyxjQUFRLEVBQUU7QUFETCxLQURzQztBQUk1Q0MsYUFBUyxFQUFFO0FBQ1ZDLGFBQU8sRUFBRSxTQURDO0FBRVZDLGFBQU8sRUFBRSxNQUZDO0FBR1ZDLGdCQUFVLEVBQUUsUUFIRjtBQUlWQyxXQUFLLEVBQUUsTUFKRztBQUtWQyxxQkFBZSxFQUFFO0FBTFAsS0FK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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlDLE1BQUMsMkVBQUQ7QUFDQyxTQUFLLEVBQUU7QUFBRUksV0FBSyxFQUFFO0FBQVQsS0FEUjtBQUVDLGtCQUFXLFNBRlo7QUFHQyxlQUFXLEVBQUMsWUFIYjtBQUlDLFdBQU8sRUFBRSxDQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRCxFQVVDLE1BQUMsa0VBQUQ7QUFDQyxhQUFTLEVBQUVtQixPQUFPLENBQUNMLE9BRHBCO0FBRUMsZUFBVyxFQUFDLFVBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZELEVBY0MsTUFBQyxxRUFBRDtBQUNDLFFBQUksRUFBQyxRQUROO0FBRUMsU0FBSyxFQUFDLFNBRlA7QUFHQyxhQUFTLEVBQUVLLE9BQU8sQ0FBQ1YsVUFIcEI7QUFJQyxrQkFBVyxTQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLQyxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRCxDQWRELENBSEQsQ0FERCxDQXJERCxDQWRELENBREQsQ0FERCxDQUREO0FBdUdBLENBbEhEOztHQUFNTyxTO1VBQ1d6QixTOzs7S0FEWHlCLFM7O0FBZ0lTLHFFQUFBb0IsK0RBQVUsQ0FBQ3BCLFNBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vbWVzc2FnZXMvW2lkXS4xYTJlOWQ0OWQ5NzVlZDcyMTc0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkbWluSGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0FkbWluSGVhZGVyJztcclxuaW1wb3J0IEFkbWluIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYXV0aC9BZG1pbic7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCB7IGxpc3RNZXNzYWdlQnlJZCwgc2V0VnUgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL21lc3NhZ2VBY3Rpb25zJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgU2VuZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlbmQnO1xyXG5pbXBvcnQgVGV4dGFyZWFBdXRvc2l6ZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0YXJlYUF1dG9zaXplJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEJhY2tzcGFjZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0JhY2tzcGFjZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKChkYXJrVGhlbWUpID0+ICh7XHJcblx0cm9vdDoge1xyXG5cdFx0bWluV2lkdGg6IDI3NSxcclxuXHR9LFxyXG5cdHJvb3RQYXBlcjoge1xyXG5cdFx0cGFkZGluZzogJzZweCA0cHgnLFxyXG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnIzIxMjUyOScsXHJcblx0fSxcclxuXHRidWxsZXQ6IHtcclxuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG5cdFx0bWFyZ2luOiAnMCAycHgnLFxyXG5cdFx0dHJhbnNmb3JtOiAnc2NhbGUoMC44KScsXHJcblx0fSxcclxuXHR0aXRsZToge1xyXG5cdFx0Zm9udFNpemU6IDE0LFxyXG5cdH0sXHJcblx0cG9zOiB7XHJcblx0XHRtYXJnaW5Cb3R0b206IDEyLFxyXG5cdH0sXHJcblx0aWNvbkJ1dHRvbjoge1xyXG5cdFx0cGFkZGluZzogMTAsXHJcblx0fSxcclxuXHRpbnB1dDoge1xyXG5cdFx0bWFyZ2luTGVmdDogZGFya1RoZW1lLnNwYWNpbmcoMSksXHJcblx0XHRmbGV4OiAxLFxyXG5cdH0sXHJcblx0ZGl2aWRlcjoge1xyXG5cdFx0aGVpZ2h0OiAyOCxcclxuXHRcdG1hcmdpbjogNCxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5jb25zdCBNZXNzYWdlSWQgPSAoeyBtZXNzYWdlLCByb3V0ZXIgfSkgPT4ge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHQvL0Vudm95ZXIgbGEgcsOpcG9uc2VcclxuXHQvL1VzZUVmZmVjdCBtZXR0YW50IHZ1IMOgIHRydWUgYXUgY2hhcmdlbWVudCBkZSBsYSBwYWdlXHJcblx0Ly9BZmZpY2hlciBsYSByw6lwb25zZSBlbiBkZXNzb3VzIGR1IG1lc3NhZ2VcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldFZ1KHJvdXRlci5xdWVyeS5pZCwgdG9rZW4pO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxBZG1pbkhlYWRlcj5cclxuXHRcdFx0XHQ8QWRtaW4+XHJcblx0XHRcdFx0XHR7LyogRmlsIGQnYXJpYW5lICovfVxyXG5cdFx0XHRcdFx0PGgyIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19PlxyXG5cdFx0XHRcdFx0XHRDb25zdWx0YXRpb24gZHUgbWVzc2FnZSBkZSB7bWVzc2FnZS5ub219XHJcblx0XHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj0nL2FkbWluL21lc3NhZ2UnPlxyXG5cdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHQ8QmFja3NwYWNlSWNvblxyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU9J2xhcmdlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0XHRcdFx0PENhcmRDb250ZW50PlxyXG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1JyBjb21wb25lbnQ9J2g1Jz5cclxuXHRcdFx0XHRcdFx0XHRcdEVudm95w6kgcGFyIHttZXNzYWdlLm5vbX1cclxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHlcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yPSd0ZXh0U2Vjb25kYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdFx0Z3V0dGVyQm90dG9tPlxyXG5cdFx0XHRcdFx0XHRcdFx0bGV7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0e2RheWpzKG1lc3NhZ2UuY3JlYXRlZEF0KS5mb3JtYXQoXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdERC9NTS9ZWVlZIMOgIEhIOm1tJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMucG9zfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I9J3RleHRTZWNvbmRhcnknPlxyXG5cdFx0XHRcdFx0XHRcdFx0Q29vcmRvbm7DqWVzIDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj17YG1haWx0bzoke21lc3NhZ2UubWFpbH1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e21lc3NhZ2UubWFpbH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvYT57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0LyAwXHJcblx0XHRcdFx0XHRcdFx0XHR7YCR7bWVzc2FnZS50ZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnRvU3RyaW5nKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnN1YnN0cmluZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDFcclxuXHRcdFx0XHRcdFx0XHRcdFx0KX0gJHttZXNzYWdlLnRlbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQudG9TdHJpbmcoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuc3Vic3RyaW5nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDEsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0M1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQpfSAke21lc3NhZ2UudGVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdC50b1N0cmluZygpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5zdWJzdHJpbmcoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0MyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ1XHJcblx0XHRcdFx0XHRcdFx0XHRcdCl9ICR7bWVzc2FnZS50ZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnRvU3RyaW5nKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnN1YnN0cmluZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ1LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDdcclxuXHRcdFx0XHRcdFx0XHRcdFx0KX0gJHttZXNzYWdlLnRlbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQudG9TdHJpbmcoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuc3Vic3RyaW5nKDcsIDkpfWB9XHJcblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkyJyBjb21wb25lbnQ9J3AnPlxyXG5cdFx0XHRcdFx0XHRcdFx0TWVzc2FnZSA6XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdHttZXNzYWdlLm1zZ31cclxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdDwvQ2FyZENvbnRlbnQ+XHJcblx0XHRcdFx0XHRcdDxDYXJkQ29udGVudD5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXJcclxuXHRcdFx0XHRcdFx0XHRcdGNvbXBvbmVudD0nZm9ybSdcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290UGFwZXJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGZvcm1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnJvb3RQYXBlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0bm9WYWxpZGF0ZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9J29mZic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0YXJlYUF1dG9zaXplXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J3JlcG9uc2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J1LDqXBvbnNlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJvd3NNaW49ezZ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxEaXZpZGVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmRpdmlkZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3JpZW50YXRpb249J3ZlcnRpY2FsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3N1Ym1pdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcj0ncHJpbWFyeSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkJ1dHRvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPSdFbnZveWVyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8U2VuZEljb24gLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9JY29uQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvQ2FyZENvbnRlbnQ+XHJcblx0XHRcdFx0XHQ8L0NhcmQ+XHJcblx0XHRcdFx0PC9BZG1pbj5cclxuXHRcdFx0PC9BZG1pbkhlYWRlcj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuXHRjb25zdCByZXMxID0gYXdhaXQgbGlzdE1lc3NhZ2VCeUlkKGNvbnRleHQucGFyYW1zLmlkKTtcclxuXHRjb25zdCBtZXNzYWdlID0gYXdhaXQgcmVzMTtcclxuXHRjb25zb2xlLmxvZygnbWVzc2FnZScsIG1lc3NhZ2UpO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0bWVzc2FnZSxcclxuXHRcdH0sXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihNZXNzYWdlSWQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9