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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_18__);



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
      lineNumber: 22,
      columnNumber: 3
    }
  }), value === index && __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__["default"], {
    p: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      value = _useState[0],
      setValue = _useState[1];

  console.log(client);

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 4
    }
  }, __jsx(_components_auth_Admin__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Grid"], {
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
      lineNumber: 76,
      columnNumber: 8
    }
  }, "Gestion du client ", client.nom, " ", client.prenom, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
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
      lineNumber: 84,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["ButtonGroup"], {
    variant: "contained",
    color: "secondary",
    "aria-label": "contained primary button group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, "Bouton"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, "Bouton"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, "Bouton"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Button"], {
    variant: "contained",
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_18___default.a, {
    href: "/admin/clients",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
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
      lineNumber: 103,
      columnNumber: 10
    }
  }, "Retour"))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Paper"], {
    style: {
      padding: '15px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Grid"], {
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 8
    }
  }, "Informations tarifaires")), __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    position: "static",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
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
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    icon: __jsx(_material_ui_icons_ContactMail__WEBPACK_IMPORTED_MODULE_13___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }
    }),
    "aria-label": "Infos du client"
  }, a11yProps(0), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 10
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    icon: __jsx(_material_ui_icons_History__WEBPACK_IMPORTED_MODULE_14___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 17
      }
    }),
    "aria-label": "Historique du client"
  }, a11yProps(1), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 10
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    icon: __jsx(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_15___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }
    }),
    "aria-label": "Messagerie"
  }, a11yProps(2), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 10
    }
  })))), __jsx(TabPanel, {
    value: value,
    index: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 8
    }
  }, __jsx(_components_admin_forms_reservation_FormClient__WEBPACK_IMPORTED_MODULE_17__["default"], {
    preloadedValues: client,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  })), __jsx(TabPanel, {
    value: value,
    index: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 8
    }
  }), __jsx(TabPanel, {
    value: value,
    index: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vY2xpZW50cy8uanMiXSwibmFtZXMiOlsiVGFiUGFuZWwiLCJjaGlsZHJlbiIsInZhbHVlIiwiaW5kZXgiLCJvdGhlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJhbnkiLCJpc1JlcXVpcmVkIiwiYTExeVByb3BzIiwiaWQiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsIm1pbkhlaWdodCIsIkNsaWVudElkIiwiY2xpZW50Iiwicm91dGVyIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwic2V0VmFsdWUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsIm1hcmdpbiIsIm5vbSIsInByZW5vbSIsImNvbG9yIiwiX2lkIiwicGFkZGluZyIsInRleHREZWNvcmF0aW9uIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLFFBQVQsT0FBd0Q7QUFBQSxNQUFwQ0MsUUFBb0MsUUFBcENBLFFBQW9DO0FBQUEsTUFBMUJDLEtBQTBCLFFBQTFCQSxLQUEwQjtBQUFBLE1BQW5CQyxLQUFtQixRQUFuQkEsS0FBbUI7QUFBQSxNQUFUQyxLQUFTOztBQUN2RCxTQUNDO0FBQ0MsUUFBSSxFQUFDLFVBRE47QUFFQyxVQUFNLEVBQUVGLEtBQUssS0FBS0MsS0FGbkI7QUFHQyxNQUFFLHdDQUFpQ0EsS0FBakMsQ0FISDtBQUlDLHdEQUEyQ0EsS0FBM0M7QUFKRCxLQUtLQyxLQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQW5DRCxFQXNDQyxNQUFDLFFBQUQ7QUFBVSxTQUFLLEVBQUVuQixLQUFqQjtBQUF3QixTQUFLLEVBQUUsQ0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRDRCxFQXlDQyxNQUFDLFFBQUQ7QUFBVSxTQUFLLEVBQUVBLEtBQWpCO0FBQXdCLFNBQUssRUFBRSxDQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBekNELENBUEQsQ0ExQ0QsQ0FERCxDQURELENBREQ7QUE0R0EsQ0F0SEQ7O0dBQU1rQixRO1VBQ1dSLFM7OztNQURYUSxROztBQXFJUyxxRUFBQWtCLDhEQUFVLENBQUNsQixRQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NsaWVudHMvW2lkXS5kYmM2MzBmOWE0M2ExMzBlZDY2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkbWluSGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0FkbWluSGVhZGVyJztcclxuaW1wb3J0IEFkbWluIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYXV0aC9BZG1pbic7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XHJcbmltcG9ydCBUYWJzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYnMnO1xyXG5pbXBvcnQgVGFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XHJcbmltcG9ydCBDb250YWN0TWFpbEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NvbnRhY3RNYWlsJztcclxuaW1wb3J0IEhpc3RvcnlJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9IaXN0b3J5JztcclxuaW1wb3J0IENoYXRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGF0JztcclxuaW1wb3J0IHsgR3JpZCwgUGFwZXIsIEJ1dHRvbiwgQnV0dG9uR3JvdXAgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBGb3JtQ2xpZW50IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW4vZm9ybXMvcmVzZXJ2YXRpb24vRm9ybUNsaWVudCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRDbGllbnRCeUlkIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9jbGllbnRBY3Rpb25zJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmZ1bmN0aW9uIFRhYlBhbmVsKHsgY2hpbGRyZW4sIHZhbHVlLCBpbmRleCwgLi4ub3RoZXIgfSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdHJvbGU9J3RhYnBhbmVsJ1xyXG5cdFx0XHRoaWRkZW49e3ZhbHVlICE9PSBpbmRleH1cclxuXHRcdFx0aWQ9e2BzY3JvbGxhYmxlLXByZXZlbnQtdGFicGFuZWwtJHtpbmRleH1gfVxyXG5cdFx0XHRhcmlhLWxhYmVsbGVkYnk9e2BzY3JvbGxhYmxlLXByZXZlbnQtdGFiLSR7aW5kZXh9YH1cclxuXHRcdFx0ey4uLm90aGVyfT5cclxuXHRcdFx0e3ZhbHVlID09PSBpbmRleCAmJiAoXHJcblx0XHRcdFx0PEJveCBwPXszfT5cclxuXHRcdFx0XHRcdDxUeXBvZ3JhcGh5PntjaGlsZHJlbn08L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdCl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5UYWJQYW5lbC5wcm9wVHlwZXMgPSB7XHJcblx0Y2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG5cdGluZGV4OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXHJcblx0dmFsdWU6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGExMXlQcm9wcyhpbmRleCkge1xyXG5cdHJldHVybiB7XHJcblx0XHRpZDogYHNjcm9sbGFibGUtcHJldmVudC10YWItJHtpbmRleH1gLFxyXG5cdFx0J2FyaWEtY29udHJvbHMnOiBgc2Nyb2xsYWJsZS1wcmV2ZW50LXRhYnBhbmVsLSR7aW5kZXh9YCxcclxuXHR9O1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRyb290OiB7XHJcblx0XHRmbGV4R3JvdzogMSxcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjNTg1ODU4JyxcclxuXHRcdG1pbkhlaWdodDogJzUwdmgnLFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IENsaWVudElkID0gKHsgY2xpZW50LCByb3V0ZXIgfSkgPT4ge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuXHRjb25zb2xlLmxvZyhjbGllbnQpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XHJcblx0XHRzZXRWYWx1ZShuZXdWYWx1ZSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxBZG1pbkhlYWRlcj5cclxuXHRcdFx0XHQ8QWRtaW4+XHJcblx0XHRcdFx0XHR7LyogRmlsIGQnYXJpYW5lICovfVxyXG5cdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1JyBzdHlsZT17eyBtYXJnaW46ICcxMHB4JyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdEdlc3Rpb24gZHUgY2xpZW50IHtjbGllbnQubm9tfSB7Y2xpZW50LnByZW5vbX1cclxuXHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0I3tjbGllbnQuX2lkfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PEdyaWRcclxuXHRcdFx0XHRcdFx0Y29udGFpbmVyXHJcblx0XHRcdFx0XHRcdGRpcmVjdGlvbj0ncm93J1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5PSdzcGFjZS1iZXR3ZWVuJ1xyXG5cdFx0XHRcdFx0XHRhbGlnbkl0ZW1zPSdmbGV4LXN0YXJ0J1xyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBwYWRkaW5nOiAnOHB4JyB9fT5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXBcclxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yPSdzZWNvbmRhcnknXHJcblx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPSdjb250YWluZWQgcHJpbWFyeSBidXR0b24gZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbj5Cb3V0b248L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b24+Qm91dG9uPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uPkJvdXRvbjwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3ByaW1hcnknPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2FkbWluL2NsaWVudHMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICd3aGl0ZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0UmV0b3VyXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PFBhcGVyIHN0eWxlPXt7IHBhZGRpbmc6ICcxNXB4JyB9fT5cclxuXHRcdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyPlxyXG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdEluZm9ybWF0aW9ucyB0YXJpZmFpcmVzXHJcblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0XHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPSdzdGF0aWMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRhYnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3ZhbHVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdmdWxsV2lkdGgnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNjcm9sbEJ1dHRvbnM9J29mZidcclxuXHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0nY2xpZW50Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFRhYlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb249ezxDb250YWN0TWFpbEljb24gLz59XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0nSW5mb3MgZHUgY2xpZW50J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5hMTF5UHJvcHMoMCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUYWJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPXs8SGlzdG9yeUljb24gLz59XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0nSGlzdG9yaXF1ZSBkdSBjbGllbnQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLmExMXlQcm9wcygxKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFRhYlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb249ezxDaGF0SWNvbiAvPn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPSdNZXNzYWdlcmllJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5hMTF5UHJvcHMoMil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8VGFiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17PEhvdXNlSWNvbiAvPn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPSdMb2NhdGlvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4uYTExeVByb3BzKDMpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGFiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17PFJlY2VpcHRJY29uIC8+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J0NvbnRyYXQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLmExMXlQcm9wcyg0KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz4gKi99XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1RhYnM+XHJcblx0XHRcdFx0XHRcdFx0PC9BcHBCYXI+XHJcblx0XHRcdFx0XHRcdFx0PFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1DbGllbnQgcHJlbG9hZGVkVmFsdWVzPXtjbGllbnR9IC8+XHJcblx0XHRcdFx0XHRcdFx0PC9UYWJQYW5lbD5cclxuXHRcdFx0XHRcdFx0XHQ8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17MX0+XHJcblx0XHRcdFx0XHRcdFx0XHR7LyogPEZvcm1QYWllbWVudHMgLz4gKi99XHJcblx0XHRcdFx0XHRcdFx0PC9UYWJQYW5lbD5cclxuXHRcdFx0XHRcdFx0XHQ8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17Mn0+XHJcblx0XHRcdFx0XHRcdFx0XHR7LyogICovfVxyXG5cdFx0XHRcdFx0XHRcdDwvVGFiUGFuZWw+XHJcblx0XHRcdFx0XHRcdFx0ey8qIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXszfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtTG9jYXRpb24gcHJlbG9hZGVkVmFsdWVzPXtyZXNlcnZhdGlvbn0gLz5cclxuXHRcdFx0XHRcdFx0XHQ8L1RhYlBhbmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXs0fT5cclxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJhdCAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvVGFiUGFuZWw+ICovfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0PC9BZG1pbj5cclxuXHRcdFx0PC9BZG1pbkhlYWRlcj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuXHRjb25zdCB0b2tlbiA9IGNvbnRleHQucmVxLmNvb2tpZXMudG9rZW47XHJcblx0Y29uc3QgcmVzMSA9IGF3YWl0IGdldENsaWVudEJ5SWQoY29udGV4dC5wYXJhbXMuaWQsIHRva2VuKTtcclxuXHRjb25zdCBjbGllbnQgPSBhd2FpdCByZXMxO1xyXG5cdC8vIFJlY3VwIGNsaWVudCwgZ2l0ZSwgcGFpZW1lbnRcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGNsaWVudCxcclxuXHRcdH0sXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihDbGllbnRJZCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=