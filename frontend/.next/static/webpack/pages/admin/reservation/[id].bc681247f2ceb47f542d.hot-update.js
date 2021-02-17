webpackHotUpdate_N_E("pages/admin/reservation/[id]",{

/***/ "./pages/admin/reservation/[id].js":
/*!*****************************************!*\
  !*** ./pages/admin/reservation/[id].js ***!
  \*****************************************/
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
/* harmony import */ var _material_ui_icons_Stars__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Stars */ "./node_modules/@material-ui/icons/Stars.js");
/* harmony import */ var _material_ui_icons_Stars__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Stars__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Euro__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Euro */ "./node_modules/@material-ui/icons/Euro.js");
/* harmony import */ var _material_ui_icons_Euro__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Euro__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_ContactMail__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/ContactMail */ "./node_modules/@material-ui/icons/ContactMail.js");
/* harmony import */ var _material_ui_icons_ContactMail__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ContactMail__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_House__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/House */ "./node_modules/@material-ui/icons/House.js");
/* harmony import */ var _material_ui_icons_House__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_House__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Receipt */ "./node_modules/@material-ui/icons/Receipt.js");
/* harmony import */ var _material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_admin_forms_reservation_FormStatus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../components/admin/forms/reservation/FormStatus */ "./components/admin/forms/reservation/FormStatus.js");
/* harmony import */ var _components_admin_forms_reservation_FormClient__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../components/admin/forms/reservation/FormClient */ "./components/admin/forms/reservation/FormClient.js");
/* harmony import */ var _components_admin_forms_reservation_FormLocation__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../components/admin/forms/reservation/FormLocation */ "./components/admin/forms/reservation/FormLocation.js");
/* harmony import */ var _components_admin_forms_reservation_FormPaiements__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../components/admin/forms/reservation/FormPaiements */ "./components/admin/forms/reservation/FormPaiements.js");
/* harmony import */ var _components_admin_forms_reservation_FormContrat__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../components/admin/forms/reservation/FormContrat */ "./components/admin/forms/reservation/FormContrat.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var _actions_clientActions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../actions/clientActions */ "./actions/clientActions.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_26__);



var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\admin\\reservation\\[id].js",
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
      lineNumber: 30,
      columnNumber: 3
    }
  }), value === index && __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__["default"], {
    p: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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

var ReservationId = function ReservationId(_ref2) {
  _s();

  var reservation = _ref2.reservation,
      router = _ref2.router;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      client = _useState2[0],
      setClient = _useState2[1];

  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_24__["getCookie"])('token');

  var listerUnClient = function listerUnClient() {
    Object(_actions_clientActions__WEBPACK_IMPORTED_MODULE_25__["getClientById"])(reservation.client, token).then(function (data) {
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
      lineNumber: 95,
      columnNumber: 4
    }
  }, __jsx(_components_auth_Admin__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h3",
    style: {
      margin: '10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 6
    }
  }, "Consultation de la r\xE9servation #", __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Button"], {
    variant: "contained",
    color: "primary",
    style: {
      "float": 'right'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/admin/reservation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 8
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, "Retour")))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Paper"], {
    style: {
      padding: '15px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Grid"], {
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 8
    }
  }, "Informations tarifaires")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Grid"], {
    container: true,
    justify: "center",
    spacing: 5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 8
    }
  }, "Total sans suppl\xE9ment"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 8
    }
  }, "Suppl\xE9ment"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 8
    }
  }, "Taxes diverses"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 8
    }
  }, "M\xE9nage"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 8
    }
  }, "Lit"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 8
    }
  }, "Animaux"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 8
    }
  }, "Remise"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 8
    }
  }, "Reste \xE0 payer")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Grid"], {
    container: true,
    justify: "center",
    spacing: 5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 8
    }
  }, "\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 8
    }
  }, "\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 8
    }
  }, "\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 8
    }
  }, "\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 8
    }
  }, "\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 8
    }
  }, "\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 8
    }
  }, "\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 8
    }
  }, "\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC\u20AC")), __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    position: "static",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: value,
    onChange: handleChange,
    variant: "fullWidth",
    scrollButtons: "off",
    "aria-label": "scrollable prevent tabs example",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    icon: __jsx(_material_ui_icons_Stars__WEBPACK_IMPORTED_MODULE_13___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 17
      }
    }),
    "aria-label": "Infos g\xE9n\xE9rales"
  }, a11yProps(0), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 10
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    icon: __jsx(_material_ui_icons_Euro__WEBPACK_IMPORTED_MODULE_14___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 17
      }
    }),
    "aria-label": "Paiements"
  }, a11yProps(1), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 10
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    icon: __jsx(_material_ui_icons_ContactMail__WEBPACK_IMPORTED_MODULE_15___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }
    }),
    "aria-label": "Client"
  }, a11yProps(2), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 10
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    icon: __jsx(_material_ui_icons_House__WEBPACK_IMPORTED_MODULE_16___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }
    }),
    "aria-label": "Location"
  }, a11yProps(3), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 10
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    icon: __jsx(_material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_17___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 17
      }
    }),
    "aria-label": "Contrat"
  }, a11yProps(4), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 10
    }
  })))), __jsx(TabPanel, {
    value: value,
    index: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 8
    }
  }, __jsx(_components_admin_forms_reservation_FormStatus__WEBPACK_IMPORTED_MODULE_19__["default"], {
    preloadedValues: reservation,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }
  })), __jsx(TabPanel, {
    value: value,
    index: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 8
    }
  }, __jsx(_components_admin_forms_reservation_FormPaiements__WEBPACK_IMPORTED_MODULE_22__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  })), __jsx(TabPanel, {
    value: value,
    index: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 8
    }
  }, __jsx(_components_admin_forms_reservation_FormClient__WEBPACK_IMPORTED_MODULE_20__["default"], {
    preloadedValues: client,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  })), __jsx(TabPanel, {
    value: value,
    index: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 8
    }
  }, __jsx(_components_admin_forms_reservation_FormLocation__WEBPACK_IMPORTED_MODULE_21__["default"], {
    preloadedValues: reservation,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 9
    }
  })), __jsx(TabPanel, {
    value: value,
    index: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 8
    }
  }, __jsx(_components_admin_forms_reservation_FormContrat__WEBPACK_IMPORTED_MODULE_23__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 9
    }
  })))))));
};

_s(ReservationId, "fcUe7kq7HWcQPEXmew1Ppv25UPo=", false, function () {
  return [useStyles];
});

_c2 = ReservationId;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(ReservationId));

var _c, _c2, _c3;

$RefreshReg$(_c, "TabPanel");
$RefreshReg$(_c2, "ReservationId");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24vLmpzIl0sIm5hbWVzIjpbIlRhYlBhbmVsIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsImluZGV4Iiwib3RoZXIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiYW55IiwiaXNSZXF1aXJlZCIsImExMXlQcm9wcyIsImlkIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93Iiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtaW5IZWlnaHQiLCJSZXNlcnZhdGlvbklkIiwicmVzZXJ2YXRpb24iLCJyb3V0ZXIiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJzZXRWYWx1ZSIsImNsaWVudCIsInNldENsaWVudCIsInRva2VuIiwiZ2V0Q29va2llIiwibGlzdGVyVW5DbGllbnQiLCJnZXRDbGllbnRCeUlkIiwidGhlbiIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwibWFyZ2luIiwicGFkZGluZyIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsT0FBd0Q7QUFBQSxNQUFwQ0MsUUFBb0MsUUFBcENBLFFBQW9DO0FBQUEsTUFBMUJDLEtBQTBCLFFBQTFCQSxLQUEwQjtBQUFBLE1BQW5CQyxLQUFtQixRQUFuQkEsS0FBbUI7QUFBQSxNQUFUQyxLQUFTOztBQUN2RCxTQUNDO0FBQ0MsUUFBSSxFQUFDLFVB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBTEQsRUFNQyxNQUFDLHVEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORCxFQU9DLE1BQUMsdURBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBELEVBUUMsTUFBQyx1REFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVJELENBTkQsRUFnQkMsTUFBQyx1REFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUMsUUFBeEI7QUFBaUMsV0FBTyxFQUFFLENBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHVEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOERBREQsRUFFQyxNQUFDLHVEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOERBRkQsRUFHQyxNQUFDLHVEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOERBSEQsRUFJQyxNQUFDLHVEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOERBSkQsRUFLQyxNQUFDLHVEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOERBTEQsRUFNQyxNQUFDLHVEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOERBTkQsRUFPQyxNQUFDLHVEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOERBUEQsRUFRQyxNQUFDLHVEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFB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LHlGQUFEO0FBQWMsbUJBQWUsRUFBRW1CLFdBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQTVDRCxFQStDQyxNQUFDLFFBQUQ7QUFBVSxTQUFLLEVBQUVuQixLQUFqQjtBQUF3QixTQUFLLEVBQUUsQ0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsd0ZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBL0NELENBMUJELENBZEQsQ0FERCxDQURELENBREQ7QUEwSEEsQ0FwSkQ7O0dBQU1rQixhO1VBQ1dSLFM7OztNQURYUSxhOztBQW1LUyxxRUFBQXVCLDhEQUFVLENBQUN2QixhQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL3Jlc2VydmF0aW9uL1tpZF0uYmM2ODEyNDdmMmNlYjQ3ZjU0MmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZG1pbkhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dC9BZG1pbkhlYWRlcic7XHJcbmltcG9ydCBBZG1pbiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2F1dGgvQWRtaW4nO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBsaXN0ZU9uZVJlc2VydmF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9yZXNlcnZhdGlvbkFjdGlvbnMnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgVGFicyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJzJztcclxuaW1wb3J0IFRhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnO1xyXG5pbXBvcnQgU3RhcnNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdGFycyc7XHJcbmltcG9ydCBFdXJvSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXVybyc7XHJcbmltcG9ydCBDb250YWN0TWFpbEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NvbnRhY3RNYWlsJztcclxuaW1wb3J0IEhvdXNlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSG91c2UnO1xyXG5pbXBvcnQgUmVjZWlwdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlY2VpcHQnO1xyXG5pbXBvcnQgeyBHcmlkLCBQYXBlciwgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgRm9ybVN0YXR1cyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2FkbWluL2Zvcm1zL3Jlc2VydmF0aW9uL0Zvcm1TdGF0dXMnO1xyXG5pbXBvcnQgRm9ybUNsaWVudCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2FkbWluL2Zvcm1zL3Jlc2VydmF0aW9uL0Zvcm1DbGllbnQnO1xyXG5pbXBvcnQgRm9ybUxvY2F0aW9uIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW4vZm9ybXMvcmVzZXJ2YXRpb24vRm9ybUxvY2F0aW9uJztcclxuaW1wb3J0IEZvcm1QYWllbWVudHMgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9yZXNlcnZhdGlvbi9Gb3JtUGFpZW1lbnRzJztcclxuaW1wb3J0IEZvcm1Db250cmF0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW4vZm9ybXMvcmVzZXJ2YXRpb24vRm9ybUNvbnRyYXQnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHsgZ2V0Q2xpZW50QnlJZCB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvY2xpZW50QWN0aW9ucyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5mdW5jdGlvbiBUYWJQYW5lbCh7IGNoaWxkcmVuLCB2YWx1ZSwgaW5kZXgsIC4uLm90aGVyIH0pIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRyb2xlPSd0YWJwYW5lbCdcclxuXHRcdFx0aGlkZGVuPXt2YWx1ZSAhPT0gaW5kZXh9XHJcblx0XHRcdGlkPXtgc2Nyb2xsYWJsZS1wcmV2ZW50LXRhYnBhbmVsLSR7aW5kZXh9YH1cclxuXHRcdFx0YXJpYS1sYWJlbGxlZGJ5PXtgc2Nyb2xsYWJsZS1wcmV2ZW50LXRhYi0ke2luZGV4fWB9XHJcblx0XHRcdHsuLi5vdGhlcn0+XHJcblx0XHRcdHt2YWx1ZSA9PT0gaW5kZXggJiYgKFxyXG5cdFx0XHRcdDxCb3ggcD17M30+XHJcblx0XHRcdFx0XHQ8VHlwb2dyYXBoeT57Y2hpbGRyZW59PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuVGFiUGFuZWwucHJvcFR5cGVzID0ge1xyXG5cdGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuXHRpbmRleDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxyXG5cdHZhbHVlOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBhMTF5UHJvcHMoaW5kZXgpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0aWQ6IGBzY3JvbGxhYmxlLXByZXZlbnQtdGFiLSR7aW5kZXh9YCxcclxuXHRcdCdhcmlhLWNvbnRyb2xzJzogYHNjcm9sbGFibGUtcHJldmVudC10YWJwYW5lbC0ke2luZGV4fWAsXHJcblx0fTtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0cm9vdDoge1xyXG5cdFx0ZmxleEdyb3c6IDEsXHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnIzU4NTg1OCcsXHJcblx0XHRtaW5IZWlnaHQ6ICc1MHZoJyxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5jb25zdCBSZXNlcnZhdGlvbklkID0gKHsgcmVzZXJ2YXRpb24sIHJvdXRlciB9KSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoMCk7XHJcblxyXG5cdGNvbnN0IFtjbGllbnQsIHNldENsaWVudF0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cclxuXHRjb25zdCBsaXN0ZXJVbkNsaWVudCA9ICgpID0+IHtcclxuXHRcdGdldENsaWVudEJ5SWQocmVzZXJ2YXRpb24uY2xpZW50LCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRDbGllbnQoZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsaXN0ZXJVbkNsaWVudCgpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG5cdFx0c2V0VmFsdWUobmV3VmFsdWUpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8QWRtaW5IZWFkZXI+XHJcblx0XHRcdFx0PEFkbWluPlxyXG5cdFx0XHRcdFx0ey8qIEZpbCBkJ2FyaWFuZSAqL31cclxuXHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gzJyBzdHlsZT17eyBtYXJnaW46ICcxMHB4JyB9fT5cclxuXHRcdFx0XHRcdFx0Q29uc3VsdGF0aW9uIGRlIGxhIHLDqXNlcnZhdGlvbiAjXHJcblx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHR2YXJpYW50PSdjb250YWluZWQnXHJcblx0XHRcdFx0XHRcdFx0Y29sb3I9J3ByaW1hcnknXHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2FkbWluL3Jlc2VydmF0aW9uJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxhPlJldG91cjwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cclxuXHRcdFx0XHRcdDxQYXBlciBzdHlsZT17eyBwYWRkaW5nOiAnMTVweCcgfX0+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lcj5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PSdoNCc+XHJcblx0XHRcdFx0XHRcdFx0XHRJbmZvcm1hdGlvbnMgdGFyaWZhaXJlc1xyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXIganVzdGlmeT0nY2VudGVyJyBzcGFjaW5nPXs1fT5cclxuXHRcdFx0XHRcdFx0XHQ8R3JpZCBpdGVtPlRvdGFsIHNhbnMgc3VwcGzDqW1lbnQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdFx0PEdyaWQgaXRlbT5TdXBwbMOpbWVudDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8R3JpZCBpdGVtPlRheGVzIGRpdmVyc2VzPC9HcmlkPlxyXG5cdFx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0+TcOpbmFnZTwvR3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8R3JpZCBpdGVtPkxpdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8R3JpZCBpdGVtPkFuaW1hdXg8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdFx0PEdyaWQgaXRlbT5SZW1pc2U8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdFx0PEdyaWQgaXRlbT5SZXN0ZSDDoCBwYXllcjwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXIganVzdGlmeT0nY2VudGVyJyBzcGFjaW5nPXs1fT5cclxuXHRcdFx0XHRcdFx0XHQ8R3JpZCBpdGVtPuKCrOKCrOKCrOKCrOKCrOKCrOKCrOKCrOKCrDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8R3JpZCBpdGVtPuKCrOKCrOKCrOKCrOKCrOKCrOKCrOKCrOKCrDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8R3JpZCBpdGVtPuKCrOKCrOKCrOKCrOKCrOKCrOKCrOKCrOKCrDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8R3JpZCBpdGVtPuKCrOKCrOKCrOKCrOKCrOKCrOKCrOKCrOKCrDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8R3JpZCBpdGVtPuKCrOKCrOKCrOKCrOKCrOKCrOKCrOKCrOKCrDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8R3JpZCBpdGVtPuKCrOKCrOKCrOKCrOKCrOKCrOKCrOKCrOKCrDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8R3JpZCBpdGVtPuKCrOKCrOKCrOKCrOKCrOKCrOKCrOKCrOKCrDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8R3JpZCBpdGVtPuKCrOKCrOKCrOKCrOKCrOKCrOKCrOKCrOKCrDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0XHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPSdzdGF0aWMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRhYnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3ZhbHVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdmdWxsV2lkdGgnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNjcm9sbEJ1dHRvbnM9J29mZidcclxuXHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0nc2Nyb2xsYWJsZSBwcmV2ZW50IHRhYnMgZXhhbXBsZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUYWJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPXs8U3RhcnNJY29uIC8+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J0luZm9zIGfDqW7DqXJhbGVzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5hMTF5UHJvcHMoMCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUYWJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPXs8RXVyb0ljb24gLz59XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0nUGFpZW1lbnRzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5hMTF5UHJvcHMoMSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUYWJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPXs8Q29udGFjdE1haWxJY29uIC8+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J0NsaWVudCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4uYTExeVByb3BzKDIpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGFiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17PEhvdXNlSWNvbiAvPn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPSdMb2NhdGlvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4uYTExeVByb3BzKDMpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGFiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17PFJlY2VpcHRJY29uIC8+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J0NvbnRyYXQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLmExMXlQcm9wcyg0KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvVGFicz5cclxuXHRcdFx0XHRcdFx0XHQ8L0FwcEJhcj5cclxuXHRcdFx0XHRcdFx0XHQ8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17MH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybVN0YXR1cyBwcmVsb2FkZWRWYWx1ZXM9e3Jlc2VydmF0aW9ufSAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvVGFiUGFuZWw+XHJcblx0XHRcdFx0XHRcdFx0PFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezF9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1QYWllbWVudHMgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L1RhYlBhbmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXsyfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtQ2xpZW50IHByZWxvYWRlZFZhbHVlcz17Y2xpZW50fSAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvVGFiUGFuZWw+XHJcblx0XHRcdFx0XHRcdFx0PFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezN9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1Mb2NhdGlvbiBwcmVsb2FkZWRWYWx1ZXM9e3Jlc2VydmF0aW9ufSAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvVGFiUGFuZWw+XHJcblx0XHRcdFx0XHRcdFx0PFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1Db250cmF0IC8+XHJcblx0XHRcdFx0XHRcdFx0PC9UYWJQYW5lbD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cclxuXHRcdFx0XHRcdHsvKiBcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR7c3VjY2VzcyAmJiAoXHJcblx0XHRcdFx0XHRcdDxTbmFja2JhclxyXG5cdFx0XHRcdFx0XHRcdG9wZW49e29wZW59XHJcblx0XHRcdFx0XHRcdFx0YXV0b0hpZGVEdXJhdGlvbj17NjAwMH1cclxuXHRcdFx0XHRcdFx0XHRvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XHJcblx0XHRcdFx0XHRcdFx0PEFsZXJ0IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBzZXZlcml0eT0nc3VjY2Vzcyc+XHJcblx0XHRcdFx0XHRcdFx0XHR7dGV4dH1cclxuXHRcdFx0XHRcdFx0XHQ8L0FsZXJ0PlxyXG5cdFx0XHRcdFx0XHQ8L1NuYWNrYmFyPlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdHtsb2FkaW5nICYmIDxDaXJjdWxhclByb2dyZXNzIC8+fVxyXG5cdFx0XHRcdFx0e2Vycm9yICYmIChcclxuXHRcdFx0XHRcdFx0PFNuYWNrYmFyXHJcblx0XHRcdFx0XHRcdFx0b3Blbj17b3Blbn1cclxuXHRcdFx0XHRcdFx0XHRhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cclxuXHRcdFx0XHRcdFx0XHQ8QWxlcnQgb25DbG9zZT17aGFuZGxlQ2xvc2V9IHNldmVyaXR5PSdlcnJvcic+XHJcblx0XHRcdFx0XHRcdFx0XHR7ZXJyb3J9XHJcblx0XHRcdFx0XHRcdFx0PC9BbGVydD5cclxuXHRcdFx0XHRcdFx0PC9TbmFja2Jhcj5cclxuXHRcdFx0XHRcdCl9ICovfVxyXG5cdFx0XHRcdDwvQWRtaW4+XHJcblx0XHRcdDwvQWRtaW5IZWFkZXI+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcblx0Y29uc3QgdG9rZW4gPSBjb250ZXh0LnJlcS5jb29raWVzLnRva2VuO1xyXG5cdGNvbnN0IHJlczEgPSBhd2FpdCBsaXN0ZU9uZVJlc2VydmF0aW9uKGNvbnRleHQucGFyYW1zLmlkLCB0b2tlbik7XHJcblx0Y29uc3QgcmVzZXJ2YXRpb24gPSBhd2FpdCByZXMxO1xyXG5cdC8vIFJlY3VwIGNsaWVudCwgZ2l0ZSwgcGFpZW1lbnRcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHJlc2VydmF0aW9uLFxyXG5cdFx0fSxcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFJlc2VydmF0aW9uSWQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9