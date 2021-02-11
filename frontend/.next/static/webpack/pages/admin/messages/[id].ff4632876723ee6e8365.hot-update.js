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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/layout/AdminHeader */ "./components/layout/AdminHeader.js");
/* harmony import */ var _components_auth_Admin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/auth/Admin */ "./components/auth/Admin.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _actions_messageActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../actions/messageActions */ "./actions/messageActions.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Send */ "./node_modules/@material-ui/icons/Send.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/TextareaAutosize */ "./node_modules/@material-ui/core/esm/TextareaAutosize/index.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_Backspace__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/Backspace */ "./node_modules/@material-ui/icons/Backspace.js");
/* harmony import */ var _material_ui_icons_Backspace__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Backspace__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");





var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\admin\\messages\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

























function Alert(props) {
  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_25__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    elevation: 6,
    variant: "filled"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }));
}

_c = Alert;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(function (darkTheme) {
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
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_18__["getCookie"])('token');

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_22__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    open: false,
    loading: false,
    success: '',
    error: '',
    text: ''
  }),
      values = _useState[0],
      setValues = _useState[1];

  var success = values.success,
      loading = values.loading,
      error = values.error,
      text = values.text; //Envoyer la réponse
  //UseEffect mettant vu à true au chargement de la page
  //Afficher la réponse en dessous du message

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    Object(_actions_messageActions__WEBPACK_IMPORTED_MODULE_8__["setVu"])(router.query.id, token);
  }, []);

  var handleClose = function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setValues(_objectSpread(_objectSpread({}, values), {}, {
      open: false
    }));
  };

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setValues(_objectSpread(_objectSpread({}, values), {}, {
                loading: true
              }));
              console.log('data vaut =>', data);
              Object(_actions_messageActions__WEBPACK_IMPORTED_MODULE_8__["addResponse"])(data, router.query.id, token).then(function (result) {
                console.log('result vaut =>', result);

                if (result.error) {
                  console.log('une grosse erreur');
                  setValues(_objectSpread(_objectSpread({}, values), {}, {
                    error: result.error
                  }));
                } else {
                  setValues(_objectSpread(_objectSpread({}, values), {}, {
                    success: true,
                    loading: false,
                    open: true,
                    message: result.text
                  }));
                  setTimeout(function () {
                    next_router__WEBPACK_IMPORTED_MODULE_19___default.a.push('/admin/messages');
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 4
    }
  }, __jsx(_components_auth_Admin__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 5
    }
  }, __jsx("h2", {
    style: {
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 6
    }
  }, "Consultation du message de ", message.nom), __jsx(next_link__WEBPACK_IMPORTED_MODULE_21___default.a, {
    href: "/admin/messages",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 6
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_Backspace__WEBPACK_IMPORTED_MODULE_20___default.a, {
    fontSize: "large",
    style: {
      "float": 'right',
      position: 'relative'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 8
    }
  }))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 6
    }
  }), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "h5",
    component: "h5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 8
    }
  }, "Envoy\xE9 par ", message.nom), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: classes.title,
    color: "textSecondary",
    gutterBottom: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 8
    }
  }, "le", ' ', dayjs__WEBPACK_IMPORTED_MODULE_7___default()(message.createdAt).format('DD/MM/YYYY à HH:mm')), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: classes.pos,
    color: "textSecondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 8
    }
  }, "Coordonn\xE9es :", ' ', __jsx("a", {
    href: "mailto:".concat(message.mail),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }, message.mail), ' ', "/ 0", "".concat(message.tel.toString().substring(0, 1), " ").concat(message.tel.toString().substring(1, 3), " ").concat(message.tel.toString().substring(3, 5), " ").concat(message.tel.toString().substring(5, 7), " ").concat(message.tel.toString().substring(7, 9))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "body2",
    component: "p",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 8
    }
  }, "Message :", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 9
    }
  }), message.msg)), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__["default"], {
    component: "form",
    className: classes.rootPaper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 8
    }
  }, __jsx("form", {
    className: classes.rootPaper,
    onSubmit: handleSubmit(onSubmit),
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_17__["default"], {
    style: {
      width: '100%'
    },
    "aria-label": "reponse",
    name: "reponse",
    placeholder: "R\xE9ponse",
    rowsMin: 6,
    inputRef: register,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 10
    }
  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.divider,
    orientation: "vertical",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 10
    }
  }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
    type: "submit",
    color: "primary",
    className: classes.iconButton,
    "aria-label": "Envoyer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 10
    }
  }, __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 11
    }
  })))))), success && __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_24__["default"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 7
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 8
    }
  }, text)), loading && __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_23__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 18
    }
  }), error && __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_24__["default"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 7
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 8
    }
  }, error)))));
};

_s(MessageId, "NqdtYeacxPCVmdQH3M9SdhVC1YQ=", false, function () {
  return [useStyles, react_hook_form__WEBPACK_IMPORTED_MODULE_22__["useForm"]];
});

_c2 = MessageId;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = Object(next_router__WEBPACK_IMPORTED_MODULE_19__["withRouter"])(MessageId));

var _c, _c2, _c3;

$RefreshReg$(_c, "Alert");
$RefreshReg$(_c2, "MessageId");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vbWVzc2FnZXMvLmpzIl0sIm5hbWVzIjpbIkFsZXJ0IiwicHJvcHMiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiZGFya1RoZW1lIiwicm9vdCIsIm1pbldpZHRoIiwicm9vdFBhcGVyIiwicGFkZGluZyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJidWxsZXQiLCJtYXJnaW4iLCJ0cmFuc2Zvcm0iLCJ0aXRsZSIsImZvbnRTaXplIiwicG9zIiwibWFyZ2luQm90dG9tIiwiaWNvbkJ1dHRvbiIsImlucHV0IiwibWFyZ2luTGVmdCIsInNwYWNpbmciLCJmbGV4IiwiZGl2aWRlciIsImhlaWdodCIsIk1lc3NhZ2VJZCIsIm1lc3NhZ2UiLCJyb3V0ZXIiLCJjbGFzc2VzIiwidG9rZW4iLCJnZXRDb29raWUiLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJsb2FkaW5nIiwic3VjY2VzcyIsImVycm9yIiwidGV4dCIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZUVmZmVjdCIsInNldFZ1IiwicXVlcnkiLCJpZCIsImhhbmRsZUNsb3NlIiwiZXZlbnQiLCJyZWFzb24iLCJvblN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiYWRkUmVzcG9uc2UiLCJ0aGVuIiwicmVzdWx0Iiwic2V0VGltZW91dCIsIlJvdXRlciIsInB1c2giLCJjb2xvciIsIm5vbSIsInBvc2l0aW9uIiwiZGF5anMiLCJjcmVhdGVkQXQiLCJmb3JtYXQiLCJtYWlsIiwidGVsIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJtc2ciLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VQLElBREYsQ0FKRCxDQW5HRixFQTRHRUgsT0FBTyxJQUFJLE1BQUMsMkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVHYixFQTZHRUUsS0FBSyxJQUNMLE1BQUMsbUVBQUQ7QUFDQyxRQUFJLEVBQUVILElBRFA7QUFFQyxvQkFBZ0IsRUFBRSxJQUZuQjtBQUdDLFdBQU8sRUFBRVcsV0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUMsTUFBQyxLQUFEO0FBQU8sV0FBTyxFQUFFQSxXQUFoQjtBQUE2QixZQUFRLEVBQUMsT0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFUixLQURGLENBSkQsQ0E5R0YsQ0FERCxDQURELENBREQ7QUE4SEEsQ0FsTEQ7O0dBQU1iLFM7VUFDV3pCLFMsRUFFbUIrQix3RDs7O01BSDlCTixTOztBQStMUyxxRUFBQTZDLCtEQUFVLENBQUM3QyxTQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL21lc3NhZ2VzL1tpZF0uZmY0NjMyODc2NzIzZWU2ZTgzNjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZG1pbkhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dC9BZG1pbkhlYWRlcic7XHJcbmltcG9ydCBBZG1pbiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2F1dGgvQWRtaW4nO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQge1xyXG5cdGFkZFJlc3BvbnNlLFxyXG5cdGxpc3RNZXNzYWdlQnlJZCxcclxuXHRzZXRWdSxcclxufSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL21lc3NhZ2VBY3Rpb25zJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgU2VuZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlbmQnO1xyXG5pbXBvcnQgVGV4dGFyZWFBdXRvc2l6ZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0YXJlYUF1dG9zaXplJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBCYWNrc3BhY2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9CYWNrc3BhY2UnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XHJcbmltcG9ydCBTbmFja2JhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2Jhcic7XHJcbmltcG9ydCBNdWlBbGVydCBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5mdW5jdGlvbiBBbGVydChwcm9wcykge1xyXG5cdHJldHVybiA8TXVpQWxlcnQgZWxldmF0aW9uPXs2fSB2YXJpYW50PSdmaWxsZWQnIHsuLi5wcm9wc30gLz47XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKGRhcmtUaGVtZSkgPT4gKHtcclxuXHRyb290OiB7XHJcblx0XHRtaW5XaWR0aDogMjc1LFxyXG5cdH0sXHJcblx0cm9vdFBhcGVyOiB7XHJcblx0XHRwYWRkaW5nOiAnNnB4IDRweCcsXHJcblx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjMjEyNTI5JyxcclxuXHR9LFxyXG5cdGJ1bGxldDoge1xyXG5cdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcblx0XHRtYXJnaW46ICcwIDJweCcsXHJcblx0XHR0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJyxcclxuXHR9LFxyXG5cdHRpdGxlOiB7XHJcblx0XHRmb250U2l6ZTogMTQsXHJcblx0fSxcclxuXHRwb3M6IHtcclxuXHRcdG1hcmdpbkJvdHRvbTogMTIsXHJcblx0fSxcclxuXHRpY29uQnV0dG9uOiB7XHJcblx0XHRwYWRkaW5nOiAxMCxcclxuXHR9LFxyXG5cdGlucHV0OiB7XHJcblx0XHRtYXJnaW5MZWZ0OiBkYXJrVGhlbWUuc3BhY2luZygxKSxcclxuXHRcdGZsZXg6IDEsXHJcblx0fSxcclxuXHRkaXZpZGVyOiB7XHJcblx0XHRoZWlnaHQ6IDI4LFxyXG5cdFx0bWFyZ2luOiA0LFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IE1lc3NhZ2VJZCA9ICh7IG1lc3NhZ2UsIHJvdXRlciB9KSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cdGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybSgpO1xyXG5cclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0b3BlbjogZmFsc2UsXHJcblx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0ZXJyb3I6ICcnLFxyXG5cdFx0dGV4dDogJycsXHJcblx0fSk7XHJcblx0Y29uc3QgeyBzdWNjZXNzLCBsb2FkaW5nLCBlcnJvciwgdGV4dCB9ID0gdmFsdWVzO1xyXG5cdC8vRW52b3llciBsYSByw6lwb25zZVxyXG5cdC8vVXNlRWZmZWN0IG1ldHRhbnQgdnUgw6AgdHJ1ZSBhdSBjaGFyZ2VtZW50IGRlIGxhIHBhZ2VcclxuXHQvL0FmZmljaGVyIGxhIHLDqXBvbnNlIGVuIGRlc3NvdXMgZHUgbWVzc2FnZVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c2V0VnUocm91dGVyLnF1ZXJ5LmlkLCB0b2tlbik7XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVDbG9zZSA9IChldmVudCwgcmVhc29uKSA9PiB7XHJcblx0XHRpZiAocmVhc29uID09PSAnY2xpY2thd2F5Jykge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBvcGVuOiBmYWxzZSB9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChkYXRhKSA9PiB7XHJcblx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUgfSk7XHJcblx0XHRjb25zb2xlLmxvZygnZGF0YSB2YXV0ID0+JywgZGF0YSk7XHJcblx0XHRhZGRSZXNwb25zZShkYXRhLCByb3V0ZXIucXVlcnkuaWQsIHRva2VuKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3Jlc3VsdCB2YXV0ID0+JywgcmVzdWx0KTtcclxuXHRcdFx0aWYgKHJlc3VsdC5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCd1bmUgZ3Jvc3NlIGVycmV1cicpO1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IHJlc3VsdC5lcnJvciB9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdFx0b3BlbjogdHJ1ZSxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IHJlc3VsdC50ZXh0LFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Um91dGVyLnB1c2goJy9hZG1pbi9tZXNzYWdlcycpO1xyXG5cdFx0XHRcdH0sIDMwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PEFkbWluSGVhZGVyPlxyXG5cdFx0XHRcdDxBZG1pbj5cclxuXHRcdFx0XHRcdHsvKiBGaWwgZCdhcmlhbmUgKi99XHJcblx0XHRcdFx0XHQ8aDIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+XHJcblx0XHRcdFx0XHRcdENvbnN1bHRhdGlvbiBkdSBtZXNzYWdlIGRlIHttZXNzYWdlLm5vbX1cclxuXHRcdFx0XHRcdDwvaDI+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPScvYWRtaW4vbWVzc2FnZXMnPlxyXG5cdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHQ8QmFja3NwYWNlSWNvblxyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU9J2xhcmdlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHQ8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcblx0XHRcdFx0XHRcdDxDYXJkQ29udGVudD5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PSdoNScgY29tcG9uZW50PSdoNSc+XHJcblx0XHRcdFx0XHRcdFx0XHRFbnZvecOpIHBhciB7bWVzc2FnZS5ub219XHJcblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcj0ndGV4dFNlY29uZGFyeSdcclxuXHRcdFx0XHRcdFx0XHRcdGd1dHRlckJvdHRvbT5cclxuXHRcdFx0XHRcdFx0XHRcdGxleycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdHtkYXlqcyhtZXNzYWdlLmNyZWF0ZWRBdCkuZm9ybWF0KFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnREQvTU0vWVlZWSDDoCBISDptbSdcclxuXHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnBvc31cclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yPSd0ZXh0U2Vjb25kYXJ5Jz5cclxuXHRcdFx0XHRcdFx0XHRcdENvb3Jkb25uw6llcyA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2BtYWlsdG86JHttZXNzYWdlLm1haWx9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHttZXNzYWdlLm1haWx9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdC8gMFxyXG5cdFx0XHRcdFx0XHRcdFx0e2Ake21lc3NhZ2UudGVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdC50b1N0cmluZygpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5zdWJzdHJpbmcoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0MCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQxXHJcblx0XHRcdFx0XHRcdFx0XHRcdCl9ICR7bWVzc2FnZS50ZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnRvU3RyaW5nKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnN1YnN0cmluZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQxLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDNcclxuXHRcdFx0XHRcdFx0XHRcdFx0KX0gJHttZXNzYWdlLnRlbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQudG9TdHJpbmcoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuc3Vic3RyaW5nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0NVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpfSAke21lc3NhZ2UudGVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdC50b1N0cmluZygpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5zdWJzdHJpbmcoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0NSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ3XHJcblx0XHRcdFx0XHRcdFx0XHRcdCl9ICR7bWVzc2FnZS50ZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnRvU3RyaW5nKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnN1YnN0cmluZyg3LCA5KX1gfVxyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MicgY29tcG9uZW50PSdwJz5cclxuXHRcdFx0XHRcdFx0XHRcdE1lc3NhZ2UgOlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHR7bWVzc2FnZS5tc2d9XHJcblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHQ8L0NhcmRDb250ZW50PlxyXG5cdFx0XHRcdFx0XHQ8Q2FyZENvbnRlbnQ+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyXHJcblx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnQ9J2Zvcm0nXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMucm9vdFBhcGVyfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxmb3JtXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290UGFwZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9J29mZic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0YXJlYUF1dG9zaXplXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J3JlcG9uc2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0ncmVwb25zZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nUsOpcG9uc2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cm93c01pbj17Nn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxEaXZpZGVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmRpdmlkZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3JpZW50YXRpb249J3ZlcnRpY2FsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3N1Ym1pdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcj0ncHJpbWFyeSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkJ1dHRvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPSdFbnZveWVyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8U2VuZEljb24gLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9JY29uQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvQ2FyZENvbnRlbnQ+XHJcblx0XHRcdFx0XHQ8L0NhcmQ+XHJcblx0XHRcdFx0XHR7c3VjY2VzcyAmJiAoXHJcblx0XHRcdFx0XHRcdDxTbmFja2JhclxyXG5cdFx0XHRcdFx0XHRcdG9wZW49e29wZW59XHJcblx0XHRcdFx0XHRcdFx0YXV0b0hpZGVEdXJhdGlvbj17NjAwMH1cclxuXHRcdFx0XHRcdFx0XHRvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XHJcblx0XHRcdFx0XHRcdFx0PEFsZXJ0IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBzZXZlcml0eT0nc3VjY2Vzcyc+XHJcblx0XHRcdFx0XHRcdFx0XHR7dGV4dH1cclxuXHRcdFx0XHRcdFx0XHQ8L0FsZXJ0PlxyXG5cdFx0XHRcdFx0XHQ8L1NuYWNrYmFyPlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdHtsb2FkaW5nICYmIDxDaXJjdWxhclByb2dyZXNzIC8+fVxyXG5cdFx0XHRcdFx0e2Vycm9yICYmIChcclxuXHRcdFx0XHRcdFx0PFNuYWNrYmFyXHJcblx0XHRcdFx0XHRcdFx0b3Blbj17b3Blbn1cclxuXHRcdFx0XHRcdFx0XHRhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cclxuXHRcdFx0XHRcdFx0XHQ8QWxlcnQgb25DbG9zZT17aGFuZGxlQ2xvc2V9IHNldmVyaXR5PSdlcnJvcic+XHJcblx0XHRcdFx0XHRcdFx0XHR7ZXJyb3J9XHJcblx0XHRcdFx0XHRcdFx0PC9BbGVydD5cclxuXHRcdFx0XHRcdFx0PC9TbmFja2Jhcj5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0PC9BZG1pbj5cclxuXHRcdFx0PC9BZG1pbkhlYWRlcj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuXHRjb25zdCByZXMxID0gYXdhaXQgbGlzdE1lc3NhZ2VCeUlkKGNvbnRleHQucGFyYW1zLmlkKTtcclxuXHRjb25zdCBtZXNzYWdlID0gYXdhaXQgcmVzMTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdG1lc3NhZ2UsXHJcblx0XHR9LFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoTWVzc2FnZUlkKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==