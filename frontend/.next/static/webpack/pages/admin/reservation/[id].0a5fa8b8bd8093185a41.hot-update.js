webpackHotUpdate_N_E("pages/admin/reservation/[id]",{

/***/ "./pages/admin/reservation/[id]/index.js":
/*!***********************************************!*\
  !*** ./pages/admin/reservation/[id]/index.js ***!
  \***********************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/layout/AdminHeader */ "./components/layout/AdminHeader.js");
/* harmony import */ var _components_auth_Admin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/auth/Admin */ "./components/auth/Admin.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _actions_reservationActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../actions/reservationActions */ "./actions/reservationActions.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_icons_Stars__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Stars */ "./node_modules/@material-ui/icons/Stars.js");
/* harmony import */ var _material_ui_icons_Stars__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Stars__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_Euro__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Euro */ "./node_modules/@material-ui/icons/Euro.js");
/* harmony import */ var _material_ui_icons_Euro__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Euro__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_ContactMail__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/ContactMail */ "./node_modules/@material-ui/icons/ContactMail.js");
/* harmony import */ var _material_ui_icons_ContactMail__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ContactMail__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_House__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/House */ "./node_modules/@material-ui/icons/House.js");
/* harmony import */ var _material_ui_icons_House__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_House__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/Receipt */ "./node_modules/@material-ui/icons/Receipt.js");
/* harmony import */ var _material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/Email */ "./node_modules/@material-ui/icons/Email.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_admin_forms_reservation_FormStatus__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../components/admin/forms/reservation/FormStatus */ "./components/admin/forms/reservation/FormStatus.js");
/* harmony import */ var _components_admin_forms_reservation_FormClient__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../components/admin/forms/reservation/FormClient */ "./components/admin/forms/reservation/FormClient.js");
/* harmony import */ var _components_admin_forms_reservation_FormLocation__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../components/admin/forms/reservation/FormLocation */ "./components/admin/forms/reservation/FormLocation.js");
/* harmony import */ var _components_admin_forms_reservation_FormPaiements__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../components/admin/forms/reservation/FormPaiements */ "./components/admin/forms/reservation/FormPaiements.js");
/* harmony import */ var _components_admin_forms_reservation_FormContrat__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../components/admin/forms/reservation/FormContrat */ "./components/admin/forms/reservation/FormContrat.js");
/* harmony import */ var _components_HOC_Snackbar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../components/HOC/Snackbar */ "./components/HOC/Snackbar.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var _actions_clientActions__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../actions/clientActions */ "./actions/clientActions.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_33__);






var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\admin\\reservation\\[id]\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement;
































function TabPanel(_ref) {
  var children = _ref.children,
      value = _ref.value,
      index = _ref.index,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, ["children", "value", "index"]);

  return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    role: "tabpanel",
    hidden: value !== index,
    id: "scrollable-prevent-tabpanel-".concat(index),
    "aria-labelledby": "scrollable-prevent-tab-".concat(index)
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 3
    }
  }), value === index && __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_16__["default"], {
    p: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 6
    }
  }, children)));
}

_c = TabPanel;
TabPanel.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.node,
  index: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any.isRequired
};

function a11yProps(index) {
  return {
    id: "scrollable-prevent-tab-".concat(index),
    'aria-controls': "scrollable-prevent-tabpanel-".concat(index)
  };
}

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: '#585858',
      minHeight: '50vh'
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  };
});

var ReservationId = function ReservationId(_ref2) {
  _s();

  var reservation = _ref2.reservation,
      router = _ref2.router,
      snackbarShowMessage = _ref2.snackbarShowMessage;
  var classes = useStyles();
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_31__["getCookie"])('token');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_22__["useState"])(0),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_22__["useState"])({}),
      pdf = _useState2[0],
      setPdf = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_22__["useState"])({}),
      client = _useState3[0],
      setClient = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_22__["useState"])(false),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_9__["useForm"])({
    defaultValues: reservation
  }),
      control = _useForm.control,
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_22___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleOpen = function handleOpen() {
    setOpen(true);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  var listerUnClient = function listerUnClient() {
    Object(_actions_clientActions__WEBPACK_IMPORTED_MODULE_32__["getClientById"])(reservation.client, token).then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        setClient(data);
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_22__["useEffect"])(function () {
    listerUnClient();
  }, []);

  var generateContract = function generateContract() {
    setLoading(true);
    Object(_actions_reservationActions__WEBPACK_IMPORTED_MODULE_8__["createContract"])(reservation._id).then(function (result) {
      console.log('log', result.updatedReservation.pdfLink);

      if (result.error) {
        setLoading(false);
        snackbarShowMessage("".concat(result.error));
      } else {
        setPdf(result.updatedReservation.pdfLink);
        setLoading(false);
        snackbarShowMessage("".concat(result.message), 'success');
        setOpen(true);
        console.log('pdf', pdf); // setTimeout(() => {
        // 	Router.reload();
        // }, 3000);
      }
    });
  };

  var envoiContract = function envoiContract() {
    setLoading(true);
    sendContract(reservation._id, token).then(function (result) {
      console.log('log', result);

      if (result.error) {
        setLoading(false);
        snackbarShowMessage("".concat(result.error));
      } else {
        setPdf(result.updatedReservation.pdfLink);
        setLoading(false);
        snackbarShowMessage("".concat(result.message), 'success');
        setOpen(true);
        console.log('pdf', pdf); // setTimeout(() => {
        // 	Router.reload();
        // }, 3000);
      }
    });
  };

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  var onSubmit = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(data);
              setLoading(true);
              updateGite(data, router.query.id, token).then(function (result) {
                console.log('result', result);

                if (result.error) {
                  setLoading(false);
                  snackbarShowMessage("".concat(result.error));
                } else {
                  setLoading(false);
                  snackbarShowMessage("".concat(result.message), 'success');
                  setTimeout(function () {
                    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.reload();
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
      return _ref3.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_22___default.a.Fragment, null, __jsx(_components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 4
    }
  }, __jsx(_components_auth_Admin__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 5
    }
  }, loading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["CircularProgress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 18
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Grid"], {
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
    variant: "h5",
    style: {
      margin: '10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 8
    }
  }, "Consultation de la r\xE9servation", __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 9
    }
  }, "#", reservation._id), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
    style: {
      color: 'green'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 9
    }
  }, client.civilite, " ", client.nom, ' ', client.prenom)))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Grid"], {
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
      lineNumber: 222,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["ButtonGroup"], {
    variant: "contained",
    color: "secondary",
    "aria-label": "contained primary button group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Button"], {
    onClick: generateContract,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 9
    }
  }, "G\xE9n\xE9rer Contrat"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 9
    }
  }, "G\xE9n\xE9rer Facture"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 9
    }
  }, "Mail plateforme"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 9
    }
  }, "Demander paiement"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Button"], {
    variant: "contained",
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_33___default.a, {
    href: "/admin/reservation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
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
      lineNumber: 244,
      columnNumber: 10
    }
  }, "Retour"))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Paper"], {
    style: {
      padding: '15px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Grid"], {
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
    variant: "h4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 8
    }
  }, "Informations tarifaires")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TableContainer"], {
    component: _material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Paper"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Table"], {
    className: classes.table,
    "aria-label": "simple table",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TableHead"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TableRow"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 10
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 11
    }
  }, "Total sans suppl\xE9ment"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 11
    }
  }, "Suppl\xE9ment"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 11
    }
  }, "Taxes diverses"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 11
    }
  }, "M\xE9nage"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 11
    }
  }, "Lit"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 11
    }
  }, "Animaux"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 11
    }
  }, "Remise"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 11
    }
  }, "Reste \xE0 payer"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TableBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TableRow"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 10
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 11
    }
  }, reservation.totalTarifBase, "\u20AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 11
    }
  }, reservation.totalTarifSuppl, "\u20AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 11
    }
  }, reservation.taxeSejour, "\u20AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 11
    }
  }, reservation.totalTfMenage, "\u20AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 11
    }
  }, reservation.totalFtLit, "\u20AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 11
    }
  }, reservation.mtAnimaux, "\u20AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 11
    }
  }, reservation.remise, "\u20AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 11
    }
  }, reservation.resteAPayer, "\u20AC"))))), __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_12__["default"], {
    position: "static",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_13__["default"], {
    value: value,
    onChange: handleChange,
    variant: "fullWidth",
    scrollButtons: "off",
    "aria-label": "scrollable prevent tabs example",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    icon: __jsx(_material_ui_icons_Stars__WEBPACK_IMPORTED_MODULE_17___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 17
      }
    }),
    "aria-label": "Infos g\xE9n\xE9rales"
  }, a11yProps(0), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 10
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    icon: __jsx(_material_ui_icons_Euro__WEBPACK_IMPORTED_MODULE_18___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 17
      }
    }),
    "aria-label": "Paiements"
  }, a11yProps(1), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 10
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    icon: __jsx(_material_ui_icons_ContactMail__WEBPACK_IMPORTED_MODULE_19___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 17
      }
    }),
    "aria-label": "Client"
  }, a11yProps(2), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 10
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    icon: __jsx(_material_ui_icons_House__WEBPACK_IMPORTED_MODULE_20___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 17
      }
    }),
    "aria-label": "Location"
  }, a11yProps(3), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 10
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    icon: __jsx(_material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_21___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 17
      }
    }),
    "aria-label": "Contrat"
  }, a11yProps(4), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 10
    }
  })))), __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 8
    }
  }, __jsx(TabPanel, {
    value: value,
    index: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 9
    }
  }, __jsx(_components_admin_forms_reservation_FormStatus__WEBPACK_IMPORTED_MODULE_25__["default"], {
    preloadedValues: reservation,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 10
    }
  })), __jsx(TabPanel, {
    value: value,
    index: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 9
    }
  }, __jsx(_components_admin_forms_reservation_FormPaiements__WEBPACK_IMPORTED_MODULE_28__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 10
    }
  })), __jsx(TabPanel, {
    value: value,
    index: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 9
    }
  }, __jsx(_components_admin_forms_reservation_FormClient__WEBPACK_IMPORTED_MODULE_26__["default"], {
    preloadedValues: client,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 10
    }
  })), __jsx(TabPanel, {
    value: value,
    index: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 9
    }
  }, __jsx(_components_admin_forms_reservation_FormLocation__WEBPACK_IMPORTED_MODULE_27__["default"], {
    preloadedValues: reservation,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 10
    }
  })), __jsx(TabPanel, {
    value: value,
    index: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 9
    }
  }, __jsx(_components_admin_forms_reservation_FormContrat__WEBPACK_IMPORTED_MODULE_29__["default"], {
    preloadedValues: reservation,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 10
    }
  }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Modal"], {
    "aria-labelledby": "transition-modal-title",
    "aria-describedby": "transition-modal-description",
    className: classes.modal,
    open: open,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Backdrop"],
    BackdropProps: {
      timeout: 500
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Fade"], {
    "in": open,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.paper,
    style: {
      width: '70%',
      height: '90%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Grid"], {
    container: true,
    direction: "row",
    justify: "space-between",
    alignItems: "flex-start",
    style: {
      marginBottom: '10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 10
    }
  }, __jsx("h4", {
    id: "transition-modal-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 11
    }
  }, "Contrat pour la r\xE9servation #", reservation._id, " de ", client.nom, ' ', client.prenom)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 10
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Button"], {
    onClick: envoiContract,
    variant: "contained",
    color: "primary",
    style: {},
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_23___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 12
    }
  }), " Envoyer"))), __jsx("p", {
    id: "transition-modal-description",
    style: {
      width: '100%',
      height: '95%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 9
    }
  }, __jsx("embed", {
    style: {
      width: '100%',
      height: '100%'
    },
    type: "application/pdf",
    src: pdf // width='600'
    // height='600'
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 10
    }
  }))))))));
};

_s(ReservationId, "ESba5heoagsoae6mqEejrfgbQBQ=", false, function () {
  return [useStyles, react_hook_form__WEBPACK_IMPORTED_MODULE_9__["useForm"]];
});

_c2 = ReservationId;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (_c4 = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(_c3 = Object(_components_HOC_Snackbar__WEBPACK_IMPORTED_MODULE_30__["withSnackbar"])(ReservationId)));

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "TabPanel");
$RefreshReg$(_c2, "ReservationId");
$RefreshReg$(_c3, "%default%$withRouter");
$RefreshReg$(_c4, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24vL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRhYlBhbmVsIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsImluZGV4Iiwib3RoZXIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiYW55IiwiaXNSZXF1aXJlZCIsImExMXlQcm9wcyIsImlkIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93Iiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtaW5IZWlnaHQiLCJtb2RhbCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJwYXBlciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiYm94U2hhZG93Iiwic2hhZG93cyIsInBhZGRpbmciLCJzcGFjaW5nIiwiUmVzZXJ2YXRpb25JZCIsInJlc2VydmF0aW9uIiwicm91dGVyIiwic25hY2tiYXJTaG93TWVzc2FnZSIsImNsYXNzZXMiLCJ0b2tlbiIsImdldENvb2tpZSIsInVzZVN0YXRlIiwic2V0VmFsdWUiLCJwZGYiLCJzZXRQZGYiLCJjbGllbnQiLCJzZXRDbGllbnQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZUZvcm0iLCJkZWZhdWx0VmFsdWVzIiwiY29udHJvbCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiUmVhY3QiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZU9wZW4iLCJoYW5kbGVDbG9zZSIsImxpc3RlclVuQ2xpZW50IiwiZ2V0Q2xpZW50QnlJZCIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiZ2VuZXJhdGVDb250cmFjdCIsImNyZWF0ZUNvbnRyYWN0IiwiX2lkIiwicmVzdWx0IiwidXBkYXRlZFJlc2VydmF0aW9uIiwicGRmTGluayIsIm1lc3NhZ2UiLCJlbnZvaUNvbnRyYWN0Iiwic2VuZENvbnRyYWN0IiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsIm9uU3VibWl0IiwidXBkYXRlR2l0ZSIsInF1ZXJ5Iiwic2V0VGltZW91dCIsIlJvdXRlciIsInJlbG9hZCIsIm1hcmdpbiIsImNvbG9yIiwiY2l2aWxpdGUiLCJub20iLCJwcmVub20iLCJ0ZXh0RGVjb3JhdGlvbiIsIlBhcGVyIiwidGFibGUiLCJ0b3RhbFRhcmlmQmFzZSIsInRvdGFsVGFyaWZTdXBwbCIsInRheGVTZWpvdXIiLCJ0b3RhbFRmTWVuYWdlIiwidG90YWxGdExpdCIsIm10QW5pbWF1eCIsInJlbWlzZSIsInJlc3RlQVBheWVyIiwiQmFja2Ryb3AiLCJ0aW1lb3V0IiwiaGVpZ2h0IiwibWFyZ2luQm90dG9tIiwid2l0aFJvdXRlciIsIndpdGhTbmFja2JhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxPQUF3RDtBQUFBLE1BQXBDQyxRQUFvQyxRQUFwQ0EsUUFBb0M7QUFBQSxNQUExQkMsS0FBMEIsUUFBMUJBLEtBQTBCO0FBQUEsTUFBbkJDLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLE1BQVRDLEtBQVM7O0FBQ3ZELFNBQ0M7QUFDQyxRQUFJLEVBQUMsVUFETjtBQUVDLFVBQU0sRUFBRUYsS0FBSyxLQUFLQyxLQUZuQjtBQUdDLE1BQUUsd0NBQWlDQSxLQUFqQyxDQUhIO0FBSUMsd0RBQTJDQSxLQUEzQztBQUpELEtBS0tDLEtBTEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURELEVBSUMsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpELEVBS0MsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxELEVBTUMsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5ELEVBT0MsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBUEQsRUFRQyxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRCxFQVNDLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRELEVBVUMsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVZELENBREQsQ0FIRCxFQWlCQyxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRXpELFdBQVcsQ0FBQzBELGNBRGQsV0FERCxFQUlDLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFMUQsV0FBVyxDQUFDMkQsZUFEZCxXQUpELEVBT0MsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UzRCxXQUFXLENBQUM0RCxVQURkLFdBUEQsRUFVQyxNQUFDLDREQUFEO0FBQUE7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Q0FiRCxDQUhELEVBMEJDO0FBQ0MsTUFBRSxFQUFDLDhCQURKO0FBRUMsU0FBSyxFQUFFO0FBQUV2RCxXQUFLLEVBQUUsTUFBVDtBQUFpQm9GLFlBQU0sRUFBRTtBQUF6QixLQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHQztBQUNDLFNBQUssRUFBRTtBQUNOcEYsV0FBSyxFQUFFLE1BREQ7QUFFTm9GLFlBQU0sRUFBRTtBQUZGLEtBRFI7QUFLQyxRQUFJLEVBQUMsaUJBTE47QUFNQyxPQUFHLEVBQUU1RCxHQU5OLENBT0M7QUFDQTtBQVJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRCxDQTFCRCxDQURELENBWEQsQ0FwS0QsQ0FERCxDQURELENBREQ7QUFrT0EsQ0F0VUQ7O0dBQU1ULGE7VUFDV3BCLFMsRUFTNEJtQyx1RDs7O01BVnZDZixhOztBQXFWUyxxRUFBQXVFLDhEQUFVLE9BQUNDLDhFQUFZLENBQUN4RSxhQUFELENBQWIsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24vW2lkXS4wYTVmYThiOGJkODA5MzE4NWE0MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkbWluSGVhZGVyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0FkbWluSGVhZGVyJztcclxuaW1wb3J0IEFkbWluIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYXV0aC9BZG1pbic7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7XHJcblx0Y3JlYXRlQ29udHJhY3QsXHJcblx0bGlzdGVPbmVSZXNlcnZhdGlvbixcclxufSBmcm9tICcuLi8uLi8uLi8uLi9hY3Rpb25zL3Jlc2VydmF0aW9uQWN0aW9ucyc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgVGFicyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJzJztcclxuaW1wb3J0IFRhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnO1xyXG5pbXBvcnQgU3RhcnNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdGFycyc7XHJcbmltcG9ydCBFdXJvSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXVybyc7XHJcbmltcG9ydCBDb250YWN0TWFpbEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NvbnRhY3RNYWlsJztcclxuaW1wb3J0IEhvdXNlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSG91c2UnO1xyXG5pbXBvcnQgUmVjZWlwdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlY2VpcHQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRW1haWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FbWFpbCc7XHJcbmltcG9ydCB7XHJcblx0R3JpZCxcclxuXHRQYXBlcixcclxuXHRCdXR0b24sXHJcblx0QnV0dG9uR3JvdXAsXHJcblx0VGFibGUsXHJcblx0VGFibGVCb2R5LFxyXG5cdFRhYmxlQ2VsbCxcclxuXHRUYWJsZUNvbnRhaW5lcixcclxuXHRUYWJsZUhlYWQsXHJcblx0TW9kYWwsXHJcblx0QmFja2Ryb3AsXHJcblx0RmFkZSxcclxuXHRUYWJsZVJvdyxcclxuXHRDaXJjdWxhclByb2dyZXNzLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmltcG9ydCBGb3JtU3RhdHVzIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW4vZm9ybXMvcmVzZXJ2YXRpb24vRm9ybVN0YXR1cyc7XHJcbmltcG9ydCBGb3JtQ2xpZW50IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW4vZm9ybXMvcmVzZXJ2YXRpb24vRm9ybUNsaWVudCc7XHJcbmltcG9ydCBGb3JtTG9jYXRpb24gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9yZXNlcnZhdGlvbi9Gb3JtTG9jYXRpb24nO1xyXG5pbXBvcnQgRm9ybVBhaWVtZW50cyBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2FkbWluL2Zvcm1zL3Jlc2VydmF0aW9uL0Zvcm1QYWllbWVudHMnO1xyXG5pbXBvcnQgRm9ybUNvbnRyYXQgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9yZXNlcnZhdGlvbi9Gb3JtQ29udHJhdCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHdpdGhTbmFja2JhciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvSE9DL1NuYWNrYmFyJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IGdldENsaWVudEJ5SWQgfSBmcm9tICcuLi8uLi8uLi8uLi9hY3Rpb25zL2NsaWVudEFjdGlvbnMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmZ1bmN0aW9uIFRhYlBhbmVsKHsgY2hpbGRyZW4sIHZhbHVlLCBpbmRleCwgLi4ub3RoZXIgfSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdHJvbGU9J3RhYnBhbmVsJ1xyXG5cdFx0XHRoaWRkZW49e3ZhbHVlICE9PSBpbmRleH1cclxuXHRcdFx0aWQ9e2BzY3JvbGxhYmxlLXByZXZlbnQtdGFicGFuZWwtJHtpbmRleH1gfVxyXG5cdFx0XHRhcmlhLWxhYmVsbGVkYnk9e2BzY3JvbGxhYmxlLXByZXZlbnQtdGFiLSR7aW5kZXh9YH1cclxuXHRcdFx0ey4uLm90aGVyfT5cclxuXHRcdFx0e3ZhbHVlID09PSBpbmRleCAmJiAoXHJcblx0XHRcdFx0PEJveCBwPXszfT5cclxuXHRcdFx0XHRcdDxUeXBvZ3JhcGh5PntjaGlsZHJlbn08L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdCl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5UYWJQYW5lbC5wcm9wVHlwZXMgPSB7XHJcblx0Y2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG5cdGluZGV4OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXHJcblx0dmFsdWU6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGExMXlQcm9wcyhpbmRleCkge1xyXG5cdHJldHVybiB7XHJcblx0XHRpZDogYHNjcm9sbGFibGUtcHJldmVudC10YWItJHtpbmRleH1gLFxyXG5cdFx0J2FyaWEtY29udHJvbHMnOiBgc2Nyb2xsYWJsZS1wcmV2ZW50LXRhYnBhbmVsLSR7aW5kZXh9YCxcclxuXHR9O1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRyb290OiB7XHJcblx0XHRmbGV4R3JvdzogMSxcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjNTg1ODU4JyxcclxuXHRcdG1pbkhlaWdodDogJzUwdmgnLFxyXG5cdH0sXHJcblx0bW9kYWw6IHtcclxuXHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cdH0sXHJcblx0cGFwZXI6IHtcclxuXHRcdGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG5cdFx0Ym9yZGVyOiAnMnB4IHNvbGlkICMwMDAnLFxyXG5cdFx0Ym94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzVdLFxyXG5cdFx0cGFkZGluZzogdGhlbWUuc3BhY2luZygyLCA0LCAzKSxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5jb25zdCBSZXNlcnZhdGlvbklkID0gKHsgcmVzZXJ2YXRpb24sIHJvdXRlciwgc25hY2tiYXJTaG93TWVzc2FnZSB9KSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cdGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoMCk7XHJcblxyXG5cdGNvbnN0IFtwZGYsIHNldFBkZl0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG5cdGNvbnN0IFtjbGllbnQsIHNldENsaWVudF0gPSB1c2VTdGF0ZSh7fSk7XHJcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHRjb25zdCB7IGNvbnRyb2wsIHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm0oe1xyXG5cdFx0ZGVmYXVsdFZhbHVlczogcmVzZXJ2YXRpb24sXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuXHRcdHNldE9wZW4odHJ1ZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcblx0XHRzZXRPcGVuKGZhbHNlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBsaXN0ZXJVbkNsaWVudCA9ICgpID0+IHtcclxuXHRcdGdldENsaWVudEJ5SWQocmVzZXJ2YXRpb24uY2xpZW50LCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRDbGllbnQoZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsaXN0ZXJVbkNsaWVudCgpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc3QgZ2VuZXJhdGVDb250cmFjdCA9ICgpID0+IHtcclxuXHRcdHNldExvYWRpbmcodHJ1ZSk7XHJcblx0XHRjcmVhdGVDb250cmFjdChyZXNlcnZhdGlvbi5faWQpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnbG9nJywgcmVzdWx0LnVwZGF0ZWRSZXNlcnZhdGlvbi5wZGZMaW5rKTtcclxuXHRcdFx0aWYgKHJlc3VsdC5lcnJvcikge1xyXG5cdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xyXG5cdFx0XHRcdHNuYWNrYmFyU2hvd01lc3NhZ2UoYCR7cmVzdWx0LmVycm9yfWApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFBkZihyZXN1bHQudXBkYXRlZFJlc2VydmF0aW9uLnBkZkxpbmspO1xyXG5cdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xyXG5cdFx0XHRcdHNuYWNrYmFyU2hvd01lc3NhZ2UoYCR7cmVzdWx0Lm1lc3NhZ2V9YCwgJ3N1Y2Nlc3MnKTtcclxuXHRcdFx0XHRzZXRPcGVuKHRydWUpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdwZGYnLCBwZGYpO1xyXG5cdFx0XHRcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdC8vIFx0Um91dGVyLnJlbG9hZCgpO1xyXG5cdFx0XHRcdC8vIH0sIDMwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBlbnZvaUNvbnRyYWN0ID0gKCkgPT4ge1xyXG5cdFx0c2V0TG9hZGluZyh0cnVlKTtcclxuXHRcdHNlbmRDb250cmFjdChyZXNlcnZhdGlvbi5faWQsIHRva2VuKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2xvZycsIHJlc3VsdCk7XHJcblx0XHRcdGlmIChyZXN1bHQuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0XHRzbmFja2JhclNob3dNZXNzYWdlKGAke3Jlc3VsdC5lcnJvcn1gKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRQZGYocmVzdWx0LnVwZGF0ZWRSZXNlcnZhdGlvbi5wZGZMaW5rKTtcclxuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0XHRzbmFja2JhclNob3dNZXNzYWdlKGAke3Jlc3VsdC5tZXNzYWdlfWAsICdzdWNjZXNzJyk7XHJcblx0XHRcdFx0c2V0T3Blbih0cnVlKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygncGRmJywgcGRmKTtcclxuXHRcdFx0XHQvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHQvLyBcdFJvdXRlci5yZWxvYWQoKTtcclxuXHRcdFx0XHQvLyB9LCAzMDAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG5cdFx0c2V0VmFsdWUobmV3VmFsdWUpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0c2V0TG9hZGluZyh0cnVlKTtcclxuXHRcdHVwZGF0ZUdpdGUoZGF0YSwgcm91dGVyLnF1ZXJ5LmlkLCB0b2tlbikudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZXN1bHQnLCByZXN1bHQpO1xyXG5cdFx0XHRpZiAocmVzdWx0LmVycm9yKSB7XHJcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHRcdFx0c25hY2tiYXJTaG93TWVzc2FnZShgJHtyZXN1bHQuZXJyb3J9YCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHRcdFx0c25hY2tiYXJTaG93TWVzc2FnZShgJHtyZXN1bHQubWVzc2FnZX1gLCAnc3VjY2VzcycpO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Um91dGVyLnJlbG9hZCgpO1xyXG5cdFx0XHRcdH0sIDMwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PEFkbWluSGVhZGVyPlxyXG5cdFx0XHRcdDxBZG1pbj5cclxuXHRcdFx0XHRcdHsvKiBGaWwgZCdhcmlhbmUgKi99XHJcblx0XHRcdFx0XHR7bG9hZGluZyAmJiA8Q2lyY3VsYXJQcm9ncmVzcyAvPn1cclxuXHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lcj5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PSdoNScgc3R5bGU9e3sgbWFyZ2luOiAnMTBweCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRDb25zdWx0YXRpb24gZGUgbGEgcsOpc2VydmF0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCN7cmVzZXJ2YXRpb24uX2lkfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtjbGllbnQuY2l2aWxpdGV9IHtjbGllbnQubm9tfXsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtjbGllbnQucHJlbm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PEdyaWRcclxuXHRcdFx0XHRcdFx0Y29udGFpbmVyXHJcblx0XHRcdFx0XHRcdGRpcmVjdGlvbj0ncm93J1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5PSdzcGFjZS1iZXR3ZWVuJ1xyXG5cdFx0XHRcdFx0XHRhbGlnbkl0ZW1zPSdmbGV4LXN0YXJ0J1xyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBwYWRkaW5nOiAnOHB4JyB9fT5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXBcclxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yPSdzZWNvbmRhcnknXHJcblx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPSdjb250YWluZWQgcHJpbWFyeSBidXR0b24gZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXtnZW5lcmF0ZUNvbnRyYWN0fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0R8OpbsOpcmVyIENvbnRyYXRcclxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbj5Hw6luw6lyZXIgRmFjdHVyZTwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbj5NYWlsIHBsYXRlZm9ybWU8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b24+RGVtYW5kZXIgcGFpZW1lbnQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdwcmltYXJ5Jz5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9hZG1pbi9yZXNlcnZhdGlvbic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3doaXRlJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRSZXRvdXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8UGFwZXIgc3R5bGU9e3sgcGFkZGluZzogJzE1cHgnIH19PlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXI+XHJcblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD0naDQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0SW5mb3JtYXRpb25zIHRhcmlmYWlyZXNcclxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxyXG5cdFx0XHRcdFx0XHRcdDxUYWJsZVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0nc2ltcGxlIHRhYmxlJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxUYWJsZUhlYWQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZVJvdz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0VG90YWwgc2FucyBzdXBwbMOpbWVudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+U3VwcGzDqW1lbnQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPlRheGVzIGRpdmVyc2VzPC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5Nw6luYWdlPC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5MaXQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPkFuaW1hdXg8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPlJlbWlzZTwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+UmVzdGUgw6AgcGF5ZXI8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZVJvdz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvVGFibGVIZWFkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRhYmxlQm9keT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlUm93PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24udG90YWxUYXJpZkJhc2V94oKsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi50b3RhbFRhcmlmU3VwcGx94oKsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi50YXhlU2Vqb3VyfeKCrFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24udG90YWxUZk1lbmFnZX3igqxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLnRvdGFsRnRMaXR94oKsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi5tdEFuaW1hdXh94oKsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi5yZW1pc2V94oKsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi5yZXN0ZUFQYXllcn3igqxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZVJvdz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvVGFibGVCb2R5PlxyXG5cdFx0XHRcdFx0XHRcdDwvVGFibGU+XHJcblx0XHRcdFx0XHRcdDwvVGFibGVDb250YWluZXI+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0XHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPSdzdGF0aWMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRhYnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3ZhbHVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdmdWxsV2lkdGgnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNjcm9sbEJ1dHRvbnM9J29mZidcclxuXHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0nc2Nyb2xsYWJsZSBwcmV2ZW50IHRhYnMgZXhhbXBsZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUYWJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPXs8U3RhcnNJY29uIC8+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J0luZm9zIGfDqW7DqXJhbGVzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5hMTF5UHJvcHMoMCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUYWJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPXs8RXVyb0ljb24gLz59XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0nUGFpZW1lbnRzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5hMTF5UHJvcHMoMSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUYWJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPXs8Q29udGFjdE1haWxJY29uIC8+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J0NsaWVudCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4uYTExeVByb3BzKDIpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGFiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17PEhvdXNlSWNvbiAvPn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPSdMb2NhdGlvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4uYTExeVByb3BzKDMpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGFiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17PFJlY2VpcHRJY29uIC8+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J0NvbnRyYXQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLmExMXlQcm9wcyg0KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvVGFicz5cclxuXHRcdFx0XHRcdFx0XHQ8L0FwcEJhcj5cclxuXHRcdFx0XHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17MH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtU3RhdHVzIHByZWxvYWRlZFZhbHVlcz17cmVzZXJ2YXRpb259IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1RhYlBhbmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezF9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybVBhaWVtZW50cyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9UYWJQYW5lbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXsyfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm1DbGllbnQgcHJlbG9hZGVkVmFsdWVzPXtjbGllbnR9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1RhYlBhbmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezN9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUxvY2F0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJlbG9hZGVkVmFsdWVzPXtyZXNlcnZhdGlvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvVGFiUGFuZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17NH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJhdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByZWxvYWRlZFZhbHVlcz17cmVzZXJ2YXRpb259XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1RhYlBhbmVsPlxyXG5cdFx0XHRcdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cclxuXHRcdFx0XHRcdDxNb2RhbFxyXG5cdFx0XHRcdFx0XHRhcmlhLWxhYmVsbGVkYnk9J3RyYW5zaXRpb24tbW9kYWwtdGl0bGUnXHJcblx0XHRcdFx0XHRcdGFyaWEtZGVzY3JpYmVkYnk9J3RyYW5zaXRpb24tbW9kYWwtZGVzY3JpcHRpb24nXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH1cclxuXHRcdFx0XHRcdFx0b3Blbj17b3Blbn1cclxuXHRcdFx0XHRcdFx0b25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcblx0XHRcdFx0XHRcdGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcblx0XHRcdFx0XHRcdEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuXHRcdFx0XHRcdFx0QmFja2Ryb3BQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRcdHRpbWVvdXQ6IDUwMCxcclxuXHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdDxGYWRlIGluPXtvcGVufT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogJzcwJScsIGhlaWdodDogJzkwJScgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250YWluZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9uPSdyb3cnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM9J2ZsZXgtc3RhcnQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzEwcHgnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDQgaWQ9J3RyYW5zaXRpb24tbW9kYWwtdGl0bGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Q29udHJhdCBwb3VyIGxhIHLDqXNlcnZhdGlvbiAjXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24uX2lkfSBkZSB7Y2xpZW50Lm5vbX17JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2NsaWVudC5wcmVub219XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9oND5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtlbnZvaUNvbnRyYWN0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD0nY29udGFpbmVkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I9J3ByaW1hcnknXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e319PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEVtYWlsSWNvbiAvPiBFbnZveWVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0XHRcdDxwXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSd0cmFuc2l0aW9uLW1vZGFsLWRlc2NyaXB0aW9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICc5NSUnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZW1iZWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogJzEwMCUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nYXBwbGljYXRpb24vcGRmJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17cGRmfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHdpZHRoPSc2MDAnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gaGVpZ2h0PSc2MDAnXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvRmFkZT5cclxuXHRcdFx0XHRcdDwvTW9kYWw+XHJcblx0XHRcdFx0PC9BZG1pbj5cclxuXHRcdFx0PC9BZG1pbkhlYWRlcj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuXHRjb25zdCB0b2tlbiA9IGNvbnRleHQucmVxLmNvb2tpZXMudG9rZW47XHJcblx0Y29uc3QgcmVzMSA9IGF3YWl0IGxpc3RlT25lUmVzZXJ2YXRpb24oY29udGV4dC5wYXJhbXMuaWQsIHRva2VuKTtcclxuXHRjb25zdCByZXNlcnZhdGlvbiA9IGF3YWl0IHJlczE7XHJcblx0Ly8gUmVjdXAgY2xpZW50LCBnaXRlLCBwYWllbWVudFxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0cmVzZXJ2YXRpb24sXHJcblx0XHR9LFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIod2l0aFNuYWNrYmFyKFJlc2VydmF0aW9uSWQpKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==