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
              // setValues({ ...values, loading: true });
              console.log('data vaut =>', data); // addResponse(data, router.query.id, token).then((result) => {
              // 	console.log('result vaut =>', result);
              // 	if (result.error) {
              // 		console.log('une grosse erreur');
              // 		setValues({ ...values, error: result.error });
              // 	} else {
              // 		setValues({
              // 			...values,
              // 			success: true,
              // 			loading: false,
              // 			open: true,
              // 			message: result.text,
              // 		});
              // 		setTimeout(() => {
              // 			Router.push('/admin/messages');
              // 		}, 3000);
              // 	}
              // });

            case 1:
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
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_22__["Controller"], {
    name: "firstName",
    control: control,
    defaultValue: "",
    render: function render(_ref3) {
      var onChange = _ref3.onChange,
          value = _ref3.value;
      return __jsx(_material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_17__["default"], {
        style: {
          width: '100%'
        },
        "aria-label": "reponse",
        name: "reponse",
        placeholder: "R\xE9ponse",
        rowsMin: 6,
        onChange: onChange,
        value: value,
        inputRef: register,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 12
        }
      });
    },
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
      lineNumber: 216,
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
      lineNumber: 220,
      columnNumber: 10
    }
  }, __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 11
    }
  })))))), success && __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_24__["default"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 7
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 8
    }
  }, text)), loading && __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_23__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 18
    }
  }), error && __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_24__["default"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 7
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vbWVzc2FnZXMvLmpzIl0sIm5hbWVzIjpbIkFsZXJ0IiwicHJvcHMiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiZGFya1RoZW1lIiwicm9vdCIsIm1pbldpZHRoIiwicm9vdFBhcGVyIiwicGFkZGluZyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJidWxsZXQiLCJtYXJnaW4iLCJ0cmFuc2Zvcm0iLCJ0aXRsZSIsImZvbnRTaXplIiwicG9zIiwibWFyZ2luQm90dG9tIiwiaWNvbkJ1dHRvbiIsImlucHV0IiwibWFyZ2luTGVmdCIsInNwYWNpbmciLCJmbGV4IiwiZGl2aWRlciIsImhlaWdodCIsIk1lc3NhZ2VJZCIsIm1lc3NhZ2UiLCJyb3V0ZXIiLCJjbGFzc2VzIiwidG9rZW4iLCJnZXRDb29raWUiLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJsb2FkaW5nIiwic3VjY2VzcyIsImVycm9yIiwidGV4dCIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZUVmZmVjdCIsInNldFZ1IiwicXVlcnkiLCJpZCIsImhhbmRsZUNsb3NlIiwiZXZlbnQiLCJyZWFzb24iLCJvblN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY29sb3IiLCJub20iLCJwb3NpdGlvbiIsImRheWpzIiwiY3JlYXRlZEF0IiwiZm9ybWF0IiwibWFpbCIsInRlbCIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwibXNnIiwiY29udHJvbCIsIm9uQ2hhbmdlIiwidmFsdWUiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFBNkIsWUFBUSxFQUFDLE9BQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRVIsS0FERixDQUpELENBeEhGLENBREQsQ0FERCxDQUREO0FBd0lBLENBNUxEOztHQUFNYixTO1VBQ1d6QixTLEVBRW1CK0Isd0Q7OztNQUg5Qk4sUzs7QUF5TVMscUVBQUEwQywrREFBVSxDQUFDMUMsU0FBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9tZXNzYWdlcy9baWRdLjQxN2U4Mjc1ZTRhYjgyZTI2OTIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRtaW5IZWFkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvQWRtaW5IZWFkZXInO1xyXG5pbXBvcnQgQWRtaW4gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9hdXRoL0FkbWluJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IHtcclxuXHRhZGRSZXNwb25zZSxcclxuXHRsaXN0TWVzc2FnZUJ5SWQsXHJcblx0c2V0VnUsXHJcbn0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9tZXNzYWdlQWN0aW9ucyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IFNlbmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZW5kJztcclxuaW1wb3J0IFRleHRhcmVhQXV0b3NpemUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dGFyZWFBdXRvc2l6ZSc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgQmFja3NwYWNlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQmFja3NwYWNlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xyXG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXInO1xyXG5pbXBvcnQgTXVpQWxlcnQgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BbGVydCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZnVuY3Rpb24gQWxlcnQocHJvcHMpIHtcclxuXHRyZXR1cm4gPE11aUFsZXJ0IGVsZXZhdGlvbj17Nn0gdmFyaWFudD0nZmlsbGVkJyB7Li4ucHJvcHN9IC8+O1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKChkYXJrVGhlbWUpID0+ICh7XHJcblx0cm9vdDoge1xyXG5cdFx0bWluV2lkdGg6IDI3NSxcclxuXHR9LFxyXG5cdHJvb3RQYXBlcjoge1xyXG5cdFx0cGFkZGluZzogJzZweCA0cHgnLFxyXG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnIzIxMjUyOScsXHJcblx0fSxcclxuXHRidWxsZXQ6IHtcclxuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG5cdFx0bWFyZ2luOiAnMCAycHgnLFxyXG5cdFx0dHJhbnNmb3JtOiAnc2NhbGUoMC44KScsXHJcblx0fSxcclxuXHR0aXRsZToge1xyXG5cdFx0Zm9udFNpemU6IDE0LFxyXG5cdH0sXHJcblx0cG9zOiB7XHJcblx0XHRtYXJnaW5Cb3R0b206IDEyLFxyXG5cdH0sXHJcblx0aWNvbkJ1dHRvbjoge1xyXG5cdFx0cGFkZGluZzogMTAsXHJcblx0fSxcclxuXHRpbnB1dDoge1xyXG5cdFx0bWFyZ2luTGVmdDogZGFya1RoZW1lLnNwYWNpbmcoMSksXHJcblx0XHRmbGV4OiAxLFxyXG5cdH0sXHJcblx0ZGl2aWRlcjoge1xyXG5cdFx0aGVpZ2h0OiAyOCxcclxuXHRcdG1hcmdpbjogNCxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5jb25zdCBNZXNzYWdlSWQgPSAoeyBtZXNzYWdlLCByb3V0ZXIgfSkgPT4ge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHRjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm0oKTtcclxuXHJcblx0Y29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuXHRcdG9wZW46IGZhbHNlLFxyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRzdWNjZXNzOiAnJyxcclxuXHRcdGVycm9yOiAnJyxcclxuXHRcdHRleHQ6ICcnLFxyXG5cdH0pO1xyXG5cdGNvbnN0IHsgc3VjY2VzcywgbG9hZGluZywgZXJyb3IsIHRleHQgfSA9IHZhbHVlcztcclxuXHQvL0Vudm95ZXIgbGEgcsOpcG9uc2VcclxuXHQvL1VzZUVmZmVjdCBtZXR0YW50IHZ1IMOgIHRydWUgYXUgY2hhcmdlbWVudCBkZSBsYSBwYWdlXHJcblx0Ly9BZmZpY2hlciBsYSByw6lwb25zZSBlbiBkZXNzb3VzIGR1IG1lc3NhZ2VcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldFZ1KHJvdXRlci5xdWVyeS5pZCwgdG9rZW4pO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2xvc2UgPSAoZXZlbnQsIHJlYXNvbikgPT4ge1xyXG5cdFx0aWYgKHJlYXNvbiA9PT0gJ2NsaWNrYXdheScpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgb3BlbjogZmFsc2UgfSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG5cdFx0Ly8gc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdFx0Y29uc29sZS5sb2coJ2RhdGEgdmF1dCA9PicsIGRhdGEpO1xyXG5cdFx0Ly8gYWRkUmVzcG9uc2UoZGF0YSwgcm91dGVyLnF1ZXJ5LmlkLCB0b2tlbikudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHQvLyBcdGNvbnNvbGUubG9nKCdyZXN1bHQgdmF1dCA9PicsIHJlc3VsdCk7XHJcblx0XHQvLyBcdGlmIChyZXN1bHQuZXJyb3IpIHtcclxuXHRcdC8vIFx0XHRjb25zb2xlLmxvZygndW5lIGdyb3NzZSBlcnJldXInKTtcclxuXHRcdC8vIFx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiByZXN1bHQuZXJyb3IgfSk7XHJcblx0XHQvLyBcdH0gZWxzZSB7XHJcblx0XHQvLyBcdFx0c2V0VmFsdWVzKHtcclxuXHRcdC8vIFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdC8vIFx0XHRcdHN1Y2Nlc3M6IHRydWUsXHJcblx0XHQvLyBcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdC8vIFx0XHRcdG9wZW46IHRydWUsXHJcblx0XHQvLyBcdFx0XHRtZXNzYWdlOiByZXN1bHQudGV4dCxcclxuXHRcdC8vIFx0XHR9KTtcclxuXHRcdC8vIFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdC8vIFx0XHRcdFJvdXRlci5wdXNoKCcvYWRtaW4vbWVzc2FnZXMnKTtcclxuXHRcdC8vIFx0XHR9LCAzMDAwKTtcclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gfSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxBZG1pbkhlYWRlcj5cclxuXHRcdFx0XHQ8QWRtaW4+XHJcblx0XHRcdFx0XHR7LyogRmlsIGQnYXJpYW5lICovfVxyXG5cdFx0XHRcdFx0PGgyIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19PlxyXG5cdFx0XHRcdFx0XHRDb25zdWx0YXRpb24gZHUgbWVzc2FnZSBkZSB7bWVzc2FnZS5ub219XHJcblx0XHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj0nL2FkbWluL21lc3NhZ2VzJz5cclxuXHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0PEJhY2tzcGFjZUljb25cclxuXHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplPSdsYXJnZSdcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0PENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG5cdFx0XHRcdFx0XHQ8Q2FyZENvbnRlbnQ+XHJcblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD0naDUnIGNvbXBvbmVudD0naDUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0RW52b3nDqSBwYXIge21lc3NhZ2Uubm9tfVxyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I9J3RleHRTZWNvbmRhcnknXHJcblx0XHRcdFx0XHRcdFx0XHRndXR0ZXJCb3R0b20+XHJcblx0XHRcdFx0XHRcdFx0XHRsZXsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHR7ZGF5anMobWVzc2FnZS5jcmVhdGVkQXQpLmZvcm1hdChcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0REL01NL1lZWVkgw6AgSEg6bW0nXHJcblx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHJcblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHlcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5wb3N9XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcj0ndGV4dFNlY29uZGFyeSc+XHJcblx0XHRcdFx0XHRcdFx0XHRDb29yZG9ubsOpZXMgOnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtgbWFpbHRvOiR7bWVzc2FnZS5tYWlsfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7bWVzc2FnZS5tYWlsfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHQvIDBcclxuXHRcdFx0XHRcdFx0XHRcdHtgJHttZXNzYWdlLnRlbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQudG9TdHJpbmcoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuc3Vic3RyaW5nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0MVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpfSAke21lc3NhZ2UudGVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdC50b1N0cmluZygpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5zdWJzdHJpbmcoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0MSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQzXHJcblx0XHRcdFx0XHRcdFx0XHRcdCl9ICR7bWVzc2FnZS50ZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnRvU3RyaW5nKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnN1YnN0cmluZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDVcclxuXHRcdFx0XHRcdFx0XHRcdFx0KX0gJHttZXNzYWdlLnRlbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQudG9TdHJpbmcoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuc3Vic3RyaW5nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0N1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQpfSAke21lc3NhZ2UudGVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdC50b1N0cmluZygpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5zdWJzdHJpbmcoNywgOSl9YH1cclxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTInIGNvbXBvbmVudD0ncCc+XHJcblx0XHRcdFx0XHRcdFx0XHRNZXNzYWdlIDpcclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0e21lc3NhZ2UubXNnfVxyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0PC9DYXJkQ29udGVudD5cclxuXHRcdFx0XHRcdFx0PENhcmRDb250ZW50PlxyXG5cdFx0XHRcdFx0XHRcdDxQYXBlclxyXG5cdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50PSdmb3JtJ1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnJvb3RQYXBlcn0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Zm9ybVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMucm9vdFBhcGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0YXV0b0NvbXBsZXRlPSdvZmYnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J2ZpcnN0TmFtZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT0nJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17KHsgb25DaGFuZ2UsIHZhbHVlIH0pID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0YXJlYUF1dG9zaXplXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0ncmVwb25zZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0ncmVwb25zZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J1LDqXBvbnNlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyb3dzTWluPXs2fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17b25DaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt2YWx1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PERpdmlkZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuZGl2aWRlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcmllbnRhdGlvbj0ndmVydGljYWwnXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxJY29uQnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nc3VibWl0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yPSdwcmltYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uQnV0dG9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J0Vudm95ZXInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxTZW5kSWNvbiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0PC9DYXJkQ29udGVudD5cclxuXHRcdFx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0XHRcdHtzdWNjZXNzICYmIChcclxuXHRcdFx0XHRcdFx0PFNuYWNrYmFyXHJcblx0XHRcdFx0XHRcdFx0b3Blbj17b3Blbn1cclxuXHRcdFx0XHRcdFx0XHRhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cclxuXHRcdFx0XHRcdFx0XHQ8QWxlcnQgb25DbG9zZT17aGFuZGxlQ2xvc2V9IHNldmVyaXR5PSdzdWNjZXNzJz5cclxuXHRcdFx0XHRcdFx0XHRcdHt0ZXh0fVxyXG5cdFx0XHRcdFx0XHRcdDwvQWxlcnQ+XHJcblx0XHRcdFx0XHRcdDwvU25hY2tiYXI+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0e2xvYWRpbmcgJiYgPENpcmN1bGFyUHJvZ3Jlc3MgLz59XHJcblx0XHRcdFx0XHR7ZXJyb3IgJiYgKFxyXG5cdFx0XHRcdFx0XHQ8U25hY2tiYXJcclxuXHRcdFx0XHRcdFx0XHRvcGVuPXtvcGVufVxyXG5cdFx0XHRcdFx0XHRcdGF1dG9IaWRlRHVyYXRpb249ezYwMDB9XHJcblx0XHRcdFx0XHRcdFx0b25DbG9zZT17aGFuZGxlQ2xvc2V9PlxyXG5cdFx0XHRcdFx0XHRcdDxBbGVydCBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gc2V2ZXJpdHk9J2Vycm9yJz5cclxuXHRcdFx0XHRcdFx0XHRcdHtlcnJvcn1cclxuXHRcdFx0XHRcdFx0XHQ8L0FsZXJ0PlxyXG5cdFx0XHRcdFx0XHQ8L1NuYWNrYmFyPlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHQ8L0FkbWluPlxyXG5cdFx0XHQ8L0FkbWluSGVhZGVyPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG5cdGNvbnN0IHJlczEgPSBhd2FpdCBsaXN0TWVzc2FnZUJ5SWQoY29udGV4dC5wYXJhbXMuaWQpO1xyXG5cdGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCByZXMxO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0bWVzc2FnZSxcclxuXHRcdH0sXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihNZXNzYWdlSWQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9