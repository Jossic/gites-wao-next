webpackHotUpdate_N_E("pages/admin/clients/[id]",{

/***/ "./pages/admin/clients/[id].js":
/*!*************************************!*\
  !*** ./pages/admin/clients/[id].js ***!
  \*************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/layout/AdminHeader */ "./components/layout/AdminHeader.js");
/* harmony import */ var _components_auth_Admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/auth/Admin */ "./components/auth/Admin.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_icons_ContactMail__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/ContactMail */ "./node_modules/@material-ui/icons/ContactMail.js");
/* harmony import */ var _material_ui_icons_ContactMail__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ContactMail__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_History__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/History */ "./node_modules/@material-ui/icons/History.js");
/* harmony import */ var _material_ui_icons_History__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_History__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Chat */ "./node_modules/@material-ui/icons/Chat.js");
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_admin_forms_reservation_FormClient__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../components/admin/forms/reservation/FormClient */ "./components/admin/forms/reservation/FormClient.js");
/* harmony import */ var _actions_clientActions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../actions/clientActions */ "./actions/clientActions.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");



var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\admin\\clients\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




















function TabPanel(_ref) {
  var children = _ref.children,
      value = _ref.value,
      index = _ref.index,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children", "value", "index"]);

  return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    role: "tabpanel",
    hidden: value !== index,
    id: "scrollable-prevent-tabpanel-".concat(index),
    "aria-labelledby": "scrollable-prevent-tab-".concat(index)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 3
    }
  }), value === index && __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__["default"], {
    p: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 6
    }
  }, children)));
}

_c = TabPanel;
TabPanel.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node,
  index: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any.isRequired
};

function a11yProps(index) {
  return {
    id: "scrollable-prevent-tab-".concat(index),
    'aria-controls': "scrollable-prevent-tabpanel-".concat(index)
  };
}

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: '#585858',
      minHeight: '50vh'
    }
  };
});

var ClientId = function ClientId(_ref2) {
  _s();

  var client = _ref2.client,
      router = _ref2.router;
  var classes = useStyles();
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_20__["getCookie"])('token');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      value = _useState[0],
      setValue = _useState[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  var envoiMail = function envoiMail() {
    Object(_actions_clientActions__WEBPACK_IMPORTED_MODULE_18__["envoiEmail"])(router.query.id, token).then(function (data) {
      console.log('data vaut', data);

      if (data.error) {
        console.log(data.error);
      } else {
        console.log('message envoyé');
      }
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 4
    }
  }, __jsx(_components_auth_Admin__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Grid"], {
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h5",
    style: {
      margin: '10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 8
    }
  }, "Gestion du client ", client.nom, " ", client.prenom, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, "#", client._id)))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Grid"], {
    container: true,
    direction: "row",
    justify: "space-between",
    alignItems: "flex-start",
    style: {
      padding: '8px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["ButtonGroup"], {
    variant: "contained",
    color: "secondary",
    "aria-label": "contained primary button group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Button"], {
    onClick: envoiMail,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, "Envoyer mail"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, "Bouton"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, "Bouton"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Button"], {
    variant: "contained",
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_19___default.a, {
    href: "/admin/clients",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx("a", {
    style: {
      textDecoration: 'none',
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 10
    }
  }, "Retour"))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Paper"], {
    style: {
      padding: '15px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Grid"], {
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 8
    }
  }, "Informations tarifaires")), __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    position: "static",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: value,
    onChange: handleChange,
    variant: "fullWidth",
    scrollButtons: "off",
    "aria-label": "client",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    icon: __jsx(_material_ui_icons_ContactMail__WEBPACK_IMPORTED_MODULE_13___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 17
      }
    }),
    "aria-label": "Infos du client"
  }, a11yProps(0), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 10
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    icon: __jsx(_material_ui_icons_History__WEBPACK_IMPORTED_MODULE_14___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }
    }),
    "aria-label": "Historique du client"
  }, a11yProps(1), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 10
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    icon: __jsx(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_15___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }
    }),
    "aria-label": "Messagerie"
  }, a11yProps(2), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 10
    }
  })))), __jsx(TabPanel, {
    value: value,
    index: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 8
    }
  }, __jsx(_components_admin_forms_reservation_FormClient__WEBPACK_IMPORTED_MODULE_17__["default"], {
    preloadedValues: client,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }
  })), __jsx(TabPanel, {
    value: value,
    index: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 8
    }
  }), __jsx(TabPanel, {
    value: value,
    index: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 8
    }
  }))))));
};

_s(ClientId, "BDkWVlEh8+DaKPHysXJ2gpEmtFI=", false, function () {
  return [useStyles];
});

_c2 = ClientId;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(ClientId));

var _c, _c2, _c3;

$RefreshReg$(_c, "TabPanel");
$RefreshReg$(_c2, "ClientId");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vY2xpZW50cy8uanMiXSwibmFtZXMiOlsiVGFiUGFuZWwiLCJjaGlsZHJlbiIsInZhbHVlIiwiaW5kZXgiLCJvdGhlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJhbnkiLCJpc1JlcXVpcmVkIiwiYTExeVByb3BzIiwiaWQiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsIm1pbkhlaWdodCIsIkNsaWVudElkIiwiY2xpZW50Iiwicm91dGVyIiwiY2xhc3NlcyIsInRva2VuIiwiZ2V0Q29va2llIiwidXNlU3RhdGUiLCJzZXRWYWx1ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJlbnZvaU1haWwiLCJlbnZvaUVtYWlsIiwicXVlcnkiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm1hcmdpbiIsIm5vbSIsInByZW5vbSIsImNvbG9yIiwiX2lkIiwicGFkZGluZyIsInRleHREZWNvcmF0aW9uIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsT0FBd0Q7QUFBQSxNQUFwQ0MsUUFBb0MsUUFBcENBLFFBQW9DO0FBQUEsTUFBMUJDLEtBQTBCLFFBQTFCQSxLQUEwQjtBQUFBLE1BQW5CQyxLQUFtQixRQUFuQkEsS0FBbUI7QUFBQSxNQUFUQyxLQUFTOztBQUN2RCxTQUNDO0FBQ0MsUUFBSSxFQUFDLFVBRE47QUFFQyxVQUFNLEVBQUVGLEtBQUssS0FBS0MsS0FGbkI7QUFH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RDtBQUNDLFFBQUksRUFBRSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEUDtBQUVDLGtCQUFXO0FBRlosS0FHS0EsU0FBUyxDQUFDLENBQUQsQ0FIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBWEQsRUFnQkMsTUFBQyw4REFBRDtBQUNDLFFBQUksRUFBRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEUDtBQUVDLGtCQUFXO0FBRlosS0FHS0EsU0FBUyxDQUFDLENBQUQsQ0FIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBaEJELENBREQsQ0FERCxFQW1DQyxNQUFDLFFBQUQ7QUFBVSxTQUFLLEVBQUVSLEtBQWpCO0FBQXdCLFNBQUssRUFBRSxDQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyx1RkFBRDtBQUFZLG1CQUFlLEVBQUVtQixNQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FuQ0QsRUFzQ0MsTUFBQyxRQUFEO0FBQVUsU0FBSyxFQUFFbkIsS0FBakI7QUFBd0IsU0FBSyxFQUFFLENBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0Q0QsRUF5Q0MsTUFBQyxRQUFEO0FBQVUsU0FBSyxFQUFFQSxLQUFqQjtBQUF3QixTQUFLLEVBQUUsQ0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpDRCxDQVBELENBNUNELENBREQsQ0FERCxDQUREO0FBOEdBLENBbElEOztHQUFNa0IsUTtVQUNXUixTOzs7TUFEWFEsUTs7QUFpSlMscUVBQUEwQiw4REFBVSxDQUFDMUIsUUFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9jbGllbnRzL1tpZF0uOWUzMjFiZjhmOGIxNWU1ZGM5MDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZG1pbkhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dC9BZG1pbkhlYWRlcic7XHJcbmltcG9ydCBBZG1pbiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2F1dGgvQWRtaW4nO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgVGFicyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJzJztcclxuaW1wb3J0IFRhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnO1xyXG5pbXBvcnQgQ29udGFjdE1haWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Db250YWN0TWFpbCc7XHJcbmltcG9ydCBIaXN0b3J5SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSGlzdG9yeSc7XHJcbmltcG9ydCBDaGF0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hhdCc7XHJcbmltcG9ydCB7IEdyaWQsIFBhcGVyLCBCdXR0b24sIEJ1dHRvbkdyb3VwIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgRm9ybUNsaWVudCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2FkbWluL2Zvcm1zL3Jlc2VydmF0aW9uL0Zvcm1DbGllbnQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZ2V0Q2xpZW50QnlJZCwgZW52b2lFbWFpbCB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvY2xpZW50QWN0aW9ucyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gVGFiUGFuZWwoeyBjaGlsZHJlbiwgdmFsdWUsIGluZGV4LCAuLi5vdGhlciB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXZcclxuXHRcdFx0cm9sZT0ndGFicGFuZWwnXHJcblx0XHRcdGhpZGRlbj17dmFsdWUgIT09IGluZGV4fVxyXG5cdFx0XHRpZD17YHNjcm9sbGFibGUtcHJldmVudC10YWJwYW5lbC0ke2luZGV4fWB9XHJcblx0XHRcdGFyaWEtbGFiZWxsZWRieT17YHNjcm9sbGFibGUtcHJldmVudC10YWItJHtpbmRleH1gfVxyXG5cdFx0XHR7Li4ub3RoZXJ9PlxyXG5cdFx0XHR7dmFsdWUgPT09IGluZGV4ICYmIChcclxuXHRcdFx0XHQ8Qm94IHA9ezN9PlxyXG5cdFx0XHRcdFx0PFR5cG9ncmFwaHk+e2NoaWxkcmVufTwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0KX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcblRhYlBhbmVsLnByb3BUeXBlcyA9IHtcclxuXHRjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcblx0aW5kZXg6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcclxuXHR2YWx1ZTogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gYTExeVByb3BzKGluZGV4KSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGlkOiBgc2Nyb2xsYWJsZS1wcmV2ZW50LXRhYi0ke2luZGV4fWAsXHJcblx0XHQnYXJpYS1jb250cm9scyc6IGBzY3JvbGxhYmxlLXByZXZlbnQtdGFicGFuZWwtJHtpbmRleH1gLFxyXG5cdH07XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdGZsZXhHcm93OiAxLFxyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJyM1ODU4NTgnLFxyXG5cdFx0bWluSGVpZ2h0OiAnNTB2aCcsXHJcblx0fSxcclxufSkpO1xyXG5cclxuY29uc3QgQ2xpZW50SWQgPSAoeyBjbGllbnQsIHJvdXRlciB9KSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cdGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoMCk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuXHRcdHNldFZhbHVlKG5ld1ZhbHVlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBlbnZvaU1haWwgPSAoKSA9PiB7XHJcblx0XHRlbnZvaUVtYWlsKHJvdXRlci5xdWVyeS5pZCwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2RhdGEgdmF1dCcsIGRhdGEpO1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdtZXNzYWdlIGVudm95w6knKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxBZG1pbkhlYWRlcj5cclxuXHRcdFx0XHQ8QWRtaW4+XHJcblx0XHRcdFx0XHR7LyogRmlsIGQnYXJpYW5lICovfVxyXG5cdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1JyBzdHlsZT17eyBtYXJnaW46ICcxMHB4JyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdEdlc3Rpb24gZHUgY2xpZW50IHtjbGllbnQubm9tfSB7Y2xpZW50LnByZW5vbX1cclxuXHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0I3tjbGllbnQuX2lkfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PEdyaWRcclxuXHRcdFx0XHRcdFx0Y29udGFpbmVyXHJcblx0XHRcdFx0XHRcdGRpcmVjdGlvbj0ncm93J1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5PSdzcGFjZS1iZXR3ZWVuJ1xyXG5cdFx0XHRcdFx0XHRhbGlnbkl0ZW1zPSdmbGV4LXN0YXJ0J1xyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBwYWRkaW5nOiAnOHB4JyB9fT5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXBcclxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yPSdzZWNvbmRhcnknXHJcblx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPSdjb250YWluZWQgcHJpbWFyeSBidXR0b24gZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXtlbnZvaU1haWx9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRFbnZveWVyIG1haWxcclxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbj5Cb3V0b248L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b24+Qm91dG9uPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0ncHJpbWFyeSc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvYWRtaW4vY2xpZW50cyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3doaXRlJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRSZXRvdXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8UGFwZXIgc3R5bGU9e3sgcGFkZGluZzogJzE1cHgnIH19PlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXI+XHJcblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD0naDQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0SW5mb3JtYXRpb25zIHRhcmlmYWlyZXNcclxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG5cdFx0XHRcdFx0XHRcdDxBcHBCYXIgcG9zaXRpb249J3N0YXRpYyc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VGFic1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dmFsdWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J2Z1bGxXaWR0aCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2Nyb2xsQnV0dG9ucz0nb2ZmJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPSdjbGllbnQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGFiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17PENvbnRhY3RNYWlsSWNvbiAvPn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPSdJbmZvcyBkdSBjbGllbnQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLmExMXlQcm9wcygwKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFRhYlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb249ezxIaXN0b3J5SWNvbiAvPn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPSdIaXN0b3JpcXVlIGR1IGNsaWVudCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4uYTExeVByb3BzKDEpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGFiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17PENoYXRJY29uIC8+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J01lc3NhZ2VyaWUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLmExMXlQcm9wcygyKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0ey8qIDxUYWJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPXs8SG91c2VJY29uIC8+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J0xvY2F0aW9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5hMTF5UHJvcHMoMyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUYWJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPXs8UmVjZWlwdEljb24gLz59XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0nQ29udHJhdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4uYTExeVByb3BzKDQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPiAqL31cclxuXHRcdFx0XHRcdFx0XHRcdDwvVGFicz5cclxuXHRcdFx0XHRcdFx0XHQ8L0FwcEJhcj5cclxuXHRcdFx0XHRcdFx0XHQ8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17MH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNsaWVudCBwcmVsb2FkZWRWYWx1ZXM9e2NsaWVudH0gLz5cclxuXHRcdFx0XHRcdFx0XHQ8L1RhYlBhbmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXsxfT5cclxuXHRcdFx0XHRcdFx0XHRcdHsvKiA8Rm9ybVBhaWVtZW50cyAvPiAqL31cclxuXHRcdFx0XHRcdFx0XHQ8L1RhYlBhbmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXsyfT5cclxuXHRcdFx0XHRcdFx0XHRcdHsvKiAgKi99XHJcblx0XHRcdFx0XHRcdFx0PC9UYWJQYW5lbD5cclxuXHRcdFx0XHRcdFx0XHR7LyogPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezN9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1Mb2NhdGlvbiBwcmVsb2FkZWRWYWx1ZXM9e3Jlc2VydmF0aW9ufSAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvVGFiUGFuZWw+XHJcblx0XHRcdFx0XHRcdFx0PFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1Db250cmF0IC8+XHJcblx0XHRcdFx0XHRcdFx0PC9UYWJQYW5lbD4gKi99XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHQ8L0FkbWluPlxyXG5cdFx0XHQ8L0FkbWluSGVhZGVyPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG5cdGNvbnN0IHRva2VuID0gY29udGV4dC5yZXEuY29va2llcy50b2tlbjtcclxuXHRjb25zdCByZXMxID0gYXdhaXQgZ2V0Q2xpZW50QnlJZChjb250ZXh0LnBhcmFtcy5pZCwgdG9rZW4pO1xyXG5cdGNvbnN0IGNsaWVudCA9IGF3YWl0IHJlczE7XHJcblx0Ly8gUmVjdXAgY2xpZW50LCBnaXRlLCBwYWllbWVudFxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0Y2xpZW50LFxyXG5cdFx0fSxcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKENsaWVudElkKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==