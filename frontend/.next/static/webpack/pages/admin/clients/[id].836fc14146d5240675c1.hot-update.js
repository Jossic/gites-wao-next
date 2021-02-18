webpackHotUpdate_N_E("pages/admin/clients/[id]",{

/***/ "./pages/admin/clients/[id].js":
/*!*************************************!*\
  !*** ./pages/admin/clients/[id].js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/layout/AdminHeader */ "./components/layout/AdminHeader.js");
/* harmony import */ var _components_auth_Admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/auth/Admin */ "./components/auth/Admin.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_reservationActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../actions/reservationActions */ "./actions/reservationActions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_icons_ContactMail__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/ContactMail */ "./node_modules/@material-ui/icons/ContactMail.js");
/* harmony import */ var _material_ui_icons_ContactMail__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ContactMail__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_History__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/History */ "./node_modules/@material-ui/icons/History.js");
/* harmony import */ var _material_ui_icons_History__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_History__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Chat */ "./node_modules/@material-ui/icons/Chat.js");
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_admin_forms_reservation_FormClient__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../components/admin/forms/reservation/FormClient */ "./components/admin/forms/reservation/FormClient.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var _actions_clientActions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../actions/clientActions */ "./actions/clientActions.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_21__);



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
      lineNumber: 24,
      columnNumber: 3
    }
  }), value === index && __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13__["default"], {
    p: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 6
    }
  }, children)));
}

_c = TabPanel;
TabPanel.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node,
  index: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any.isRequired
};

function a11yProps(index) {
  return {
    id: "scrollable-prevent-tab-".concat(index),
    'aria-controls': "scrollable-prevent-tabpanel-".concat(index)
  };
}

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
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

  var router = _ref2.router;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      client = _useState2[0],
      setClient = _useState2[1];

  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_19__["getCookie"])('token');
  console.log(client);

  var listerUnClient = function listerUnClient() {
    Object(_actions_clientActions__WEBPACK_IMPORTED_MODULE_20__["getClientById"])(client._id, token).then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        setClient(data);
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    listerUnClient();
  }, []);

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 4
    }
  }, __jsx(_components_auth_Admin__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["Grid"], {
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "h5",
    style: {
      margin: '10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 8
    }
  }, "Gestion du client ", client.nom, " ", client.prenom, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, "#", client._id)))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["Grid"], {
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
      lineNumber: 102,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["ButtonGroup"], {
    variant: "contained",
    color: "secondary",
    "aria-label": "contained primary button group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, "Bouton"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, "Bouton"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, "Bouton"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["Button"], {
    variant: "contained",
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_21___default.a, {
    href: "/admin/clients",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
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
      lineNumber: 121,
      columnNumber: 10
    }
  }, "Retour"))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["Paper"], {
    style: {
      padding: '15px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["Grid"], {
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "h4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 8
    }
  }, "Informations tarifaires")), __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    position: "static",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: value,
    onChange: handleChange,
    variant: "fullWidth",
    scrollButtons: "off",
    "aria-label": "client",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    icon: __jsx(_material_ui_icons_ContactMail__WEBPACK_IMPORTED_MODULE_14___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }
    }),
    "aria-label": "Infos du client"
  }, a11yProps(0), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 10
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    icon: __jsx(_material_ui_icons_History__WEBPACK_IMPORTED_MODULE_15___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }
    }),
    "aria-label": "Historique du client"
  }, a11yProps(1), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 10
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    icon: __jsx(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_16___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 17
      }
    }),
    "aria-label": "Messagerie"
  }, a11yProps(2), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 10
    }
  })))), __jsx(TabPanel, {
    value: value,
    index: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 8
    }
  }, __jsx(_components_admin_forms_reservation_FormClient__WEBPACK_IMPORTED_MODULE_18__["default"], {
    preloadedValues: client,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  })), __jsx(TabPanel, {
    value: value,
    index: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 8
    }
  }), __jsx(TabPanel, {
    value: value,
    index: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 8
    }
  }))))));
}; // export async function getServerSideProps(context) {
// 	const token = context.req.cookies.token;
// 	const res1 = await listeOneReservation(context.params.id, token);
// 	const reservation = await res1;
// 	// Recup client, gite, paiement
// 	return {
// 		props: {
// 			reservation,
// 		},
// 	};
// }


_s(ClientId, "fcUe7kq7HWcQPEXmew1Ppv25UPo=", false, function () {
  return [useStyles];
});

_c2 = ClientId;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vY2xpZW50cy8uanMiXSwibmFtZXMiOlsiVGFiUGFuZWwiLCJjaGlsZHJlbiIsInZhbHVlIiwiaW5kZXgiLCJvdGhlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJhbnkiLCJpc1JlcXVpcmVkIiwiYTExeVByb3BzIiwiaWQiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsIm1pbkhlaWdodCIsIkNsaWVudElkIiwicm91dGVyIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwic2V0VmFsdWUiLCJjbGllbnQiLCJzZXRDbGllbnQiLCJ0b2tlbiIsImdldENvb2tpZSIsImNvbnNvbGUiLCJsb2ciLCJsaXN0ZXJVbkNsaWVudCIsImdldENsaWVudEJ5SWQiLCJfaWQiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsIm1hcmdpbiIsIm5vbSIsInByZW5vbSIsImNvbG9yIiwicGFkZGluZyIsInRleHREZWNvcmF0aW9uIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxPQUF3RDtBQUFBLE1BQXBDQyxRQUFvQyxRQUFwQ0EsUUFBb0M7QUFBQSxNQUExQkMsS0FBMEIsUUFBMUJBLEtBQTBCO0FBQUEsTUFBbkJDLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLE1BQVRDLEtBQVM7O0FBQ3ZELFNBQ0M7QUFDQyxRQUFJLEVBQUMsVUFETjtBQUVDLFVB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O0FBcUpTLHFFQUFBMkIsOERBQVUsQ0FBQzNCLFFBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY2xpZW50cy9baWRdLjgzNmZjMTQxNDZkNTI0MDY3NWMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRtaW5IZWFkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvQWRtaW5IZWFkZXInO1xyXG5pbXBvcnQgQWRtaW4gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9hdXRoL0FkbWluJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgbGlzdGVPbmVSZXNlcnZhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvcmVzZXJ2YXRpb25BY3Rpb25zJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IFRhYnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFicyc7XHJcbmltcG9ydCBUYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFiJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94JztcclxuaW1wb3J0IENvbnRhY3RNYWlsSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ29udGFjdE1haWwnO1xyXG5pbXBvcnQgSGlzdG9yeUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hpc3RvcnknO1xyXG5pbXBvcnQgQ2hhdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoYXQnO1xyXG5pbXBvcnQgeyBHcmlkLCBQYXBlciwgQnV0dG9uLCBCdXR0b25Hcm91cCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEZvcm1DbGllbnQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9yZXNlcnZhdGlvbi9Gb3JtQ2xpZW50JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IGdldENsaWVudEJ5SWQgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2NsaWVudEFjdGlvbnMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZnVuY3Rpb24gVGFiUGFuZWwoeyBjaGlsZHJlbiwgdmFsdWUsIGluZGV4LCAuLi5vdGhlciB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXZcclxuXHRcdFx0cm9sZT0ndGFicGFuZWwnXHJcblx0XHRcdGhpZGRlbj17dmFsdWUgIT09IGluZGV4fVxyXG5cdFx0XHRpZD17YHNjcm9sbGFibGUtcHJldmVudC10YWJwYW5lbC0ke2luZGV4fWB9XHJcblx0XHRcdGFyaWEtbGFiZWxsZWRieT17YHNjcm9sbGFibGUtcHJldmVudC10YWItJHtpbmRleH1gfVxyXG5cdFx0XHR7Li4ub3RoZXJ9PlxyXG5cdFx0XHR7dmFsdWUgPT09IGluZGV4ICYmIChcclxuXHRcdFx0XHQ8Qm94IHA9ezN9PlxyXG5cdFx0XHRcdFx0PFR5cG9ncmFwaHk+e2NoaWxkcmVufTwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0KX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcblRhYlBhbmVsLnByb3BUeXBlcyA9IHtcclxuXHRjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcblx0aW5kZXg6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcclxuXHR2YWx1ZTogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gYTExeVByb3BzKGluZGV4KSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGlkOiBgc2Nyb2xsYWJsZS1wcmV2ZW50LXRhYi0ke2luZGV4fWAsXHJcblx0XHQnYXJpYS1jb250cm9scyc6IGBzY3JvbGxhYmxlLXByZXZlbnQtdGFicGFuZWwtJHtpbmRleH1gLFxyXG5cdH07XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdGZsZXhHcm93OiAxLFxyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJyM1ODU4NTgnLFxyXG5cdFx0bWluSGVpZ2h0OiAnNTB2aCcsXHJcblx0fSxcclxufSkpO1xyXG5cclxuY29uc3QgQ2xpZW50SWQgPSAoeyByb3V0ZXIgfSkgPT4ge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuXHRjb25zdCBbY2xpZW50LCBzZXRDbGllbnRdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHRjb25zb2xlLmxvZyhjbGllbnQpO1xyXG5cdGNvbnN0IGxpc3RlclVuQ2xpZW50ID0gKCkgPT4ge1xyXG5cdFx0Z2V0Q2xpZW50QnlJZChjbGllbnQuX2lkLCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRDbGllbnQoZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsaXN0ZXJVbkNsaWVudCgpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG5cdFx0c2V0VmFsdWUobmV3VmFsdWUpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8QWRtaW5IZWFkZXI+XHJcblx0XHRcdFx0PEFkbWluPlxyXG5cdFx0XHRcdFx0ey8qIEZpbCBkJ2FyaWFuZSAqL31cclxuXHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lcj5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PSdoNScgc3R5bGU9e3sgbWFyZ2luOiAnMTBweCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRHZXN0aW9uIGR1IGNsaWVudCB7Y2xpZW50Lm5vbX0ge2NsaWVudC5wcmVub219XHJcblx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCN7Y2xpZW50Ll9pZH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDxHcmlkXHJcblx0XHRcdFx0XHRcdGNvbnRhaW5lclxyXG5cdFx0XHRcdFx0XHRkaXJlY3Rpb249J3JvdydcclxuXHRcdFx0XHRcdFx0anVzdGlmeT0nc3BhY2UtYmV0d2VlbidcclxuXHRcdFx0XHRcdFx0YWxpZ25JdGVtcz0nZmxleC1zdGFydCdcclxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgcGFkZGluZzogJzhweCcgfX0+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwXHJcblx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdjb250YWluZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcj0nc2Vjb25kYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0nY29udGFpbmVkIHByaW1hcnkgYnV0dG9uIGdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b24+Qm91dG9uPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uPkJvdXRvbjwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbj5Cb3V0b248L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdwcmltYXJ5Jz5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9hZG1pbi9jbGllbnRzJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dERlY29yYXRpb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAnd2hpdGUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFJldG91clxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDxQYXBlciBzdHlsZT17eyBwYWRkaW5nOiAnMTVweCcgfX0+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lcj5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PSdoNCc+XHJcblx0XHRcdFx0XHRcdFx0XHRJbmZvcm1hdGlvbnMgdGFyaWZhaXJlc1xyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcblx0XHRcdFx0XHRcdFx0PEFwcEJhciBwb3NpdGlvbj0nc3RhdGljJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxUYWJzXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt2YWx1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD0nZnVsbFdpZHRoJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzY3JvbGxCdXR0b25zPSdvZmYnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J2NsaWVudCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUYWJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPXs8Q29udGFjdE1haWxJY29uIC8+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J0luZm9zIGR1IGNsaWVudCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4uYTExeVByb3BzKDApfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGFiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17PEhpc3RvcnlJY29uIC8+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J0hpc3RvcmlxdWUgZHUgY2xpZW50J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5hMTF5UHJvcHMoMSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUYWJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPXs8Q2hhdEljb24gLz59XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0nTWVzc2FnZXJpZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4uYTExeVByb3BzKDIpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7LyogPFRhYlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb249ezxIb3VzZUljb24gLz59XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0nTG9jYXRpb24nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLmExMXlQcm9wcygzKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFRhYlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb249ezxSZWNlaXB0SWNvbiAvPn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPSdDb250cmF0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5hMTF5UHJvcHMoNCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+ICovfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9UYWJzPlxyXG5cdFx0XHRcdFx0XHRcdDwvQXBwQmFyPlxyXG5cdFx0XHRcdFx0XHRcdDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXswfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtQ2xpZW50IHByZWxvYWRlZFZhbHVlcz17Y2xpZW50fSAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvVGFiUGFuZWw+XHJcblx0XHRcdFx0XHRcdFx0PFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezF9PlxyXG5cdFx0XHRcdFx0XHRcdFx0ey8qIDxGb3JtUGFpZW1lbnRzIC8+ICovfVxyXG5cdFx0XHRcdFx0XHRcdDwvVGFiUGFuZWw+XHJcblx0XHRcdFx0XHRcdFx0PFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0ey8qICAqL31cclxuXHRcdFx0XHRcdFx0XHQ8L1RhYlBhbmVsPlxyXG5cdFx0XHRcdFx0XHRcdHsvKiA8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17M30+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUxvY2F0aW9uIHByZWxvYWRlZFZhbHVlcz17cmVzZXJ2YXRpb259IC8+XHJcblx0XHRcdFx0XHRcdFx0PC9UYWJQYW5lbD5cclxuXHRcdFx0XHRcdFx0XHQ8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17NH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyYXQgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L1RhYlBhbmVsPiAqL31cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdDwvQWRtaW4+XHJcblx0XHRcdDwvQWRtaW5IZWFkZXI+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbi8vIFx0Y29uc3QgdG9rZW4gPSBjb250ZXh0LnJlcS5jb29raWVzLnRva2VuO1xyXG4vLyBcdGNvbnN0IHJlczEgPSBhd2FpdCBsaXN0ZU9uZVJlc2VydmF0aW9uKGNvbnRleHQucGFyYW1zLmlkLCB0b2tlbik7XHJcbi8vIFx0Y29uc3QgcmVzZXJ2YXRpb24gPSBhd2FpdCByZXMxO1xyXG4vLyBcdC8vIFJlY3VwIGNsaWVudCwgZ2l0ZSwgcGFpZW1lbnRcclxuXHJcbi8vIFx0cmV0dXJuIHtcclxuLy8gXHRcdHByb3BzOiB7XHJcbi8vIFx0XHRcdHJlc2VydmF0aW9uLFxyXG4vLyBcdFx0fSxcclxuLy8gXHR9O1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKENsaWVudElkKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==