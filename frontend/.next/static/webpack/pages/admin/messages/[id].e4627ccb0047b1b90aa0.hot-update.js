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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
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





var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\admin\\messages\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




















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

  var _useState = useState({
    loading: false,
    success: '',
    error: '',
    message: ''
  }),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var question = values.question,
      reponse = values.reponse,
      success = values.success,
      loading = values.loading,
      error = values.error; //Envoyer la réponse
  //UseEffect mettant vu à true au chargement de la page
  //Afficher la réponse en dessous du message

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    Object(_actions_messageActions__WEBPACK_IMPORTED_MODULE_8__["setVu"])(router.query.id, token);
  }, []);

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setValues(_objectSpread(_objectSpread({}, values), {}, {
                loading: true
              }));
              console.log('data vaut =>', data);
              createReview(data, token).then(function (result) {
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
                    message: result.text
                  }));
                  setTimeout(function () {
                    Router.push('/admin/messages');
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
      lineNumber: 100,
      columnNumber: 4
    }
  }, __jsx(_components_auth_Admin__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }
  }, __jsx("h2", {
    style: {
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 6
    }
  }, "Consultation du message de ", message.nom), __jsx(next_link__WEBPACK_IMPORTED_MODULE_21___default.a, {
    href: "/admin/messages",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 6
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
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
      lineNumber: 108,
      columnNumber: 8
    }
  }))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 6
    }
  }), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "h5",
    component: "h5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 8
    }
  }, "Envoy\xE9 par ", message.nom), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: classes.title,
    color: "textSecondary",
    gutterBottom: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 8
    }
  }, "le", ' ', dayjs__WEBPACK_IMPORTED_MODULE_7___default()(message.createdAt).format('DD/MM/YYYY à HH:mm')), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: classes.pos,
    color: "textSecondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 8
    }
  }, "Coordonn\xE9es :", ' ', __jsx("a", {
    href: "mailto:".concat(message.mail),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }, message.mail), ' ', "/ 0", "".concat(message.tel.toString().substring(0, 1), " ").concat(message.tel.toString().substring(1, 3), " ").concat(message.tel.toString().substring(3, 5), " ").concat(message.tel.toString().substring(5, 7), " ").concat(message.tel.toString().substring(7, 9))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "body2",
    component: "p",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 8
    }
  }, "Message :", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }), message.msg)), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__["default"], {
    component: "form",
    className: classes.rootPaper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 8
    }
  }, __jsx("form", {
    className: classes.rootPaper,
    onSubmit: handleSubmit(onSubmit),
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_17__["default"], {
    style: {
      width: '100%'
    },
    "aria-label": "reponse",
    placeholder: "R\xE9ponse",
    rowsMin: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 10
    }
  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.divider,
    orientation: "vertical",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
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
      lineNumber: 186,
      columnNumber: 10
    }
  }, __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 11
    }
  })))))))));
};

_s(MessageId, "uvkJHolt9gAUi0e0sALrQB/T5Cs=", false, function () {
  return [useStyles, react_hook_form__WEBPACK_IMPORTED_MODULE_22__["useForm"]];
});

_c = MessageId;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_19__["withRouter"])(MessageId));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vbWVzc2FnZXMvLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJkYXJrVGhlbWUiLCJyb290IiwibWluV2lkdGgiLCJyb290UGFwZXIiLCJwYWRkaW5nIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImJ1bGxldCIsIm1hcmdpbiIsInRyYW5zZm9ybSIsInRpdGxlIiwiZm9udFNpemUiLCJwb3MiLCJtYXJnaW5Cb3R0b20iLCJpY29uQnV0dG9uIiwiaW5wdXQiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsImZsZXgiLCJkaXZpZGVyIiwiaGVpZ2h0IiwiTWVzc2FnZUlkIiwibWVzc2FnZSIsInJvdXRlciIsImNsYXNzZXMiLCJ0b2tlbiIsImdldENvb2tpZSIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInVzZVN0YXRlIiwibG9hZGluZyIsInN1Y2Nlc3MiLCJlcnJvciIsInZhbHVlcyIsInNldFZhbHVlcyIsInF1ZXN0aW9uIiwicmVwb25zZSIsInVzZUVmZmVjdCIsInNldFZ1IiwicXVlcnkiLCJpZCIsIm9uU3VibWl0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVSZXZpZXciLCJ0aGVuIiwicmVzdWx0IiwidGV4dCIsInNldFRpbWVvdXQiLCJSb3V0ZXIiLCJwdXNoIiwiY29sb3IiLCJub20iLCJwb3NpdGlvbiIsImRheWpzIiwiY3JlYXRlZEF0IiwiZm9ybWF0IiwibWFpbCIsInRlbCIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwibXNnIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LE1BQUMscUVBQUQ7QUFDQyxRQUFJLEVBQUMsUUFETjtBQUVDLFNBQUssRUFBQyxTQUZQO0FBR0MsYUFBUyxFQUFFSyxPQUFPLENBQUNWLFVBSHBCO0FBSUMsa0JBQVcsU0FKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0MsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEQsQ0FkRCxDQUhELENBREQsQ0FyREQsQ0FkRCxDQURELENBREQsQ0FERDtBQXVHQSxDQWpKRDs7R0FBTU8sUztVQUNXekIsUyxFQUVtQitCLHdEOzs7S0FIOUJOLFM7O0FBOEpTLHFFQUFBMkMsK0RBQVUsQ0FBQzNDLFNBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vbWVzc2FnZXMvW2lkXS5lNDYyN2NjYjAwNDdiMWI5MGFhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkbWluSGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0FkbWluSGVhZGVyJztcclxuaW1wb3J0IEFkbWluIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYXV0aC9BZG1pbic7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCB7IGxpc3RNZXNzYWdlQnlJZCwgc2V0VnUgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL21lc3NhZ2VBY3Rpb25zJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgU2VuZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlbmQnO1xyXG5pbXBvcnQgVGV4dGFyZWFBdXRvc2l6ZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0YXJlYUF1dG9zaXplJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEJhY2tzcGFjZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0JhY2tzcGFjZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoZGFya1RoZW1lKSA9PiAoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdG1pbldpZHRoOiAyNzUsXHJcblx0fSxcclxuXHRyb290UGFwZXI6IHtcclxuXHRcdHBhZGRpbmc6ICc2cHggNHB4JyxcclxuXHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJyMyMTI1MjknLFxyXG5cdH0sXHJcblx0YnVsbGV0OiB7XHJcblx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuXHRcdG1hcmdpbjogJzAgMnB4JyxcclxuXHRcdHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknLFxyXG5cdH0sXHJcblx0dGl0bGU6IHtcclxuXHRcdGZvbnRTaXplOiAxNCxcclxuXHR9LFxyXG5cdHBvczoge1xyXG5cdFx0bWFyZ2luQm90dG9tOiAxMixcclxuXHR9LFxyXG5cdGljb25CdXR0b246IHtcclxuXHRcdHBhZGRpbmc6IDEwLFxyXG5cdH0sXHJcblx0aW5wdXQ6IHtcclxuXHRcdG1hcmdpbkxlZnQ6IGRhcmtUaGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0ZmxleDogMSxcclxuXHR9LFxyXG5cdGRpdmlkZXI6IHtcclxuXHRcdGhlaWdodDogMjgsXHJcblx0XHRtYXJnaW46IDQsXHJcblx0fSxcclxufSkpO1xyXG5cclxuY29uc3QgTWVzc2FnZUlkID0gKHsgbWVzc2FnZSwgcm91dGVyIH0pID0+IHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblx0Y29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKCk7XHJcblxyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0ZXJyb3I6ICcnLFxyXG5cdFx0bWVzc2FnZTogJycsXHJcblx0fSk7XHJcblx0Y29uc3QgeyBxdWVzdGlvbiwgcmVwb25zZSwgc3VjY2VzcywgbG9hZGluZywgZXJyb3IgfSA9IHZhbHVlcztcclxuXHQvL0Vudm95ZXIgbGEgcsOpcG9uc2VcclxuXHQvL1VzZUVmZmVjdCBtZXR0YW50IHZ1IMOgIHRydWUgYXUgY2hhcmdlbWVudCBkZSBsYSBwYWdlXHJcblx0Ly9BZmZpY2hlciBsYSByw6lwb25zZSBlbiBkZXNzb3VzIGR1IG1lc3NhZ2VcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldFZ1KHJvdXRlci5xdWVyeS5pZCwgdG9rZW4pO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdFx0Y29uc29sZS5sb2coJ2RhdGEgdmF1dCA9PicsIGRhdGEpO1xyXG5cdFx0Y3JlYXRlUmV2aWV3KGRhdGEsIHRva2VuKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3Jlc3VsdCB2YXV0ID0+JywgcmVzdWx0KTtcclxuXHRcdFx0aWYgKHJlc3VsdC5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCd1bmUgZ3Jvc3NlIGVycmV1cicpO1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IHJlc3VsdC5lcnJvciB9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogcmVzdWx0LnRleHQsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRSb3V0ZXIucHVzaCgnL2FkbWluL21lc3NhZ2VzJyk7XHJcblx0XHRcdFx0fSwgMzAwMCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8QWRtaW5IZWFkZXI+XHJcblx0XHRcdFx0PEFkbWluPlxyXG5cdFx0XHRcdFx0ey8qIEZpbCBkJ2FyaWFuZSAqL31cclxuXHRcdFx0XHRcdDxoMiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT5cclxuXHRcdFx0XHRcdFx0Q29uc3VsdGF0aW9uIGR1IG1lc3NhZ2UgZGUge21lc3NhZ2Uubm9tfVxyXG5cdFx0XHRcdFx0PC9oMj5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9hZG1pbi9tZXNzYWdlcyc+XHJcblx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdDxCYWNrc3BhY2VJY29uXHJcblx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZT0nbGFyZ2UnXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0XHRcdFx0PENhcmRDb250ZW50PlxyXG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1JyBjb21wb25lbnQ9J2g1Jz5cclxuXHRcdFx0XHRcdFx0XHRcdEVudm95w6kgcGFyIHttZXNzYWdlLm5vbX1cclxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHlcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yPSd0ZXh0U2Vjb25kYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdFx0Z3V0dGVyQm90dG9tPlxyXG5cdFx0XHRcdFx0XHRcdFx0bGV7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0e2RheWpzKG1lc3NhZ2UuY3JlYXRlZEF0KS5mb3JtYXQoXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdERC9NTS9ZWVlZIMOgIEhIOm1tJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMucG9zfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I9J3RleHRTZWNvbmRhcnknPlxyXG5cdFx0XHRcdFx0XHRcdFx0Q29vcmRvbm7DqWVzIDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj17YG1haWx0bzoke21lc3NhZ2UubWFpbH1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e21lc3NhZ2UubWFpbH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvYT57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0LyAwXHJcblx0XHRcdFx0XHRcdFx0XHR7YCR7bWVzc2FnZS50ZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnRvU3RyaW5nKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnN1YnN0cmluZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDFcclxuXHRcdFx0XHRcdFx0XHRcdFx0KX0gJHttZXNzYWdlLnRlbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQudG9TdHJpbmcoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuc3Vic3RyaW5nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDEsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0M1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQpfSAke21lc3NhZ2UudGVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdC50b1N0cmluZygpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5zdWJzdHJpbmcoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0MyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ1XHJcblx0XHRcdFx0XHRcdFx0XHRcdCl9ICR7bWVzc2FnZS50ZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnRvU3RyaW5nKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnN1YnN0cmluZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ1LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDdcclxuXHRcdFx0XHRcdFx0XHRcdFx0KX0gJHttZXNzYWdlLnRlbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQudG9TdHJpbmcoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuc3Vic3RyaW5nKDcsIDkpfWB9XHJcblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkyJyBjb21wb25lbnQ9J3AnPlxyXG5cdFx0XHRcdFx0XHRcdFx0TWVzc2FnZSA6XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdHttZXNzYWdlLm1zZ31cclxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdDwvQ2FyZENvbnRlbnQ+XHJcblx0XHRcdFx0XHRcdDxDYXJkQ29udGVudD5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXJcclxuXHRcdFx0XHRcdFx0XHRcdGNvbXBvbmVudD0nZm9ybSdcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290UGFwZXJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGZvcm1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnJvb3RQYXBlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGF1dG9Db21wbGV0ZT0nb2ZmJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFRleHRhcmVhQXV0b3NpemVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0ncmVwb25zZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nUsOpcG9uc2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cm93c01pbj17Nn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PERpdmlkZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuZGl2aWRlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcmllbnRhdGlvbj0ndmVydGljYWwnXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxJY29uQnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nc3VibWl0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yPSdwcmltYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uQnV0dG9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J0Vudm95ZXInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxTZW5kSWNvbiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0PC9DYXJkQ29udGVudD5cclxuXHRcdFx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0XHQ8L0FkbWluPlxyXG5cdFx0XHQ8L0FkbWluSGVhZGVyPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG5cdGNvbnN0IHJlczEgPSBhd2FpdCBsaXN0TWVzc2FnZUJ5SWQoY29udGV4dC5wYXJhbXMuaWQpO1xyXG5cdGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCByZXMxO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0bWVzc2FnZSxcclxuXHRcdH0sXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihNZXNzYWdlSWQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9