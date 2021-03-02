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
/* harmony import */ var blob__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! blob */ "./node_modules/blob/main.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_admin_forms_reservation_FormStatus__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../components/admin/forms/reservation/FormStatus */ "./components/admin/forms/reservation/FormStatus.js");
/* harmony import */ var _components_admin_forms_reservation_FormClient__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../components/admin/forms/reservation/FormClient */ "./components/admin/forms/reservation/FormClient.js");
/* harmony import */ var _components_admin_forms_reservation_FormLocation__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../components/admin/forms/reservation/FormLocation */ "./components/admin/forms/reservation/FormLocation.js");
/* harmony import */ var _components_admin_forms_reservation_FormPaiements__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../components/admin/forms/reservation/FormPaiements */ "./components/admin/forms/reservation/FormPaiements.js");
/* harmony import */ var _components_admin_forms_reservation_FormContrat__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../components/admin/forms/reservation/FormContrat */ "./components/admin/forms/reservation/FormContrat.js");
/* harmony import */ var _components_HOC_Snackbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../../components/HOC/Snackbar */ "./components/HOC/Snackbar.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var _actions_clientActions__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../../actions/clientActions */ "./actions/clientActions.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_34__);






var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\admin\\reservation\\[id]\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement;




















var PdfViewer = next_dynamic__WEBPACK_IMPORTED_MODULE_24___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../../../components/admin/PDFViewer */ "./components/admin/PDFViewer.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../../../components/admin/PDFViewer */ "./components/admin/PDFViewer.js")];
    },
    modules: ['../../../../components/admin/PDFViewer']
  }
});
_c2 = PdfViewer;













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
      lineNumber: 61,
      columnNumber: 3
    }
  }), value === index && __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_16__["default"], {
    p: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 6
    }
  }, children)));
}

_c3 = TabPanel;
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
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_32__["getCookie"])('token');

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
    Object(_actions_clientActions__WEBPACK_IMPORTED_MODULE_33__["getClientById"])(reservation.client, token).then(function (data) {
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
      lineNumber: 191,
      columnNumber: 4
    }
  }, __jsx(_components_auth_Admin__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Grid"], {
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
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
      lineNumber: 196,
      columnNumber: 8
    }
  }, "Consultation de la r\xE9servation", __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 9
    }
  }, "#", reservation._id), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
    style: {
      color: 'green'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 9
    }
  }, client.civilite, " ", client.nom, ' ', client.prenom)))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Grid"], {
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
      lineNumber: 208,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["ButtonGroup"], {
    variant: "contained",
    color: "secondary",
    "aria-label": "contained primary button group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Button"], {
    onClick: generateContract,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 9
    }
  }, loading ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["CircularProgress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 11
    }
  }) : 'Générer Contrat'), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 9
    }
  }, "G\xE9n\xE9rer Facture"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 9
    }
  }, "Mail plateforme"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 9
    }
  }, "Demander paiement"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Button"], {
    variant: "contained",
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_34___default.a, {
    href: "/admin/reservation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
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
      lineNumber: 234,
      columnNumber: 10
    }
  }, "Retour"))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Paper"], {
    style: {
      padding: '15px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Grid"], {
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
    variant: "h4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 8
    }
  }, "Informations tarifaires")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableContainer"], {
    component: _material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Paper"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Table"], {
    className: classes.table,
    "aria-label": "simple table",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableHead"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableRow"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 10
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 11
    }
  }, "Total sans suppl\xE9ment"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 11
    }
  }, "Suppl\xE9ment"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 11
    }
  }, "Taxes diverses"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 11
    }
  }, "M\xE9nage"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 11
    }
  }, "Lit"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 11
    }
  }, "Animaux"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 11
    }
  }, "Remise"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 11
    }
  }, "Reste \xE0 payer"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableRow"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 10
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 11
    }
  }, reservation.totalTarifBase, "\u20AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 11
    }
  }, reservation.totalTarifSuppl, "\u20AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 11
    }
  }, reservation.taxeSejour, "\u20AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 11
    }
  }, reservation.totalTfMenage, "\u20AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 11
    }
  }, reservation.totalFtLit, "\u20AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 11
    }
  }, reservation.mtAnimaux, "\u20AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 11
    }
  }, reservation.remise, "\u20AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 11
    }
  }, reservation.resteAPayer, "\u20AC"))))), __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_12__["default"], {
    position: "static",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
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
      lineNumber: 302,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    icon: __jsx(_material_ui_icons_Stars__WEBPACK_IMPORTED_MODULE_17___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 17
      }
    }),
    "aria-label": "Infos g\xE9n\xE9rales"
  }, a11yProps(0), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 10
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    icon: __jsx(_material_ui_icons_Euro__WEBPACK_IMPORTED_MODULE_18___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 17
      }
    }),
    "aria-label": "Paiements"
  }, a11yProps(1), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 10
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    icon: __jsx(_material_ui_icons_ContactMail__WEBPACK_IMPORTED_MODULE_19___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 17
      }
    }),
    "aria-label": "Client"
  }, a11yProps(2), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 10
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    icon: __jsx(_material_ui_icons_House__WEBPACK_IMPORTED_MODULE_20___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 17
      }
    }),
    "aria-label": "Location"
  }, a11yProps(3), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 10
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    icon: __jsx(_material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_21___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 17
      }
    }),
    "aria-label": "Contrat"
  }, a11yProps(4), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 10
    }
  })))), __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 8
    }
  }, __jsx(TabPanel, {
    value: value,
    index: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 9
    }
  }, __jsx(_components_admin_forms_reservation_FormStatus__WEBPACK_IMPORTED_MODULE_26__["default"], {
    preloadedValues: reservation,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 10
    }
  })), __jsx(TabPanel, {
    value: value,
    index: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 9
    }
  }, __jsx(_components_admin_forms_reservation_FormPaiements__WEBPACK_IMPORTED_MODULE_29__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 10
    }
  })), __jsx(TabPanel, {
    value: value,
    index: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 9
    }
  }, __jsx(_components_admin_forms_reservation_FormClient__WEBPACK_IMPORTED_MODULE_27__["default"], {
    preloadedValues: client,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 10
    }
  })), __jsx(TabPanel, {
    value: value,
    index: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 9
    }
  }, __jsx(_components_admin_forms_reservation_FormLocation__WEBPACK_IMPORTED_MODULE_28__["default"], {
    preloadedValues: reservation,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 10
    }
  })), __jsx(TabPanel, {
    value: value,
    index: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 9
    }
  }, __jsx(_components_admin_forms_reservation_FormContrat__WEBPACK_IMPORTED_MODULE_30__["default"], {
    preloadedValues: reservation,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 10
    }
  }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Modal"], {
    "aria-labelledby": "transition-modal-title",
    "aria-describedby": "transition-modal-description",
    className: classes.modal,
    open: open,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Backdrop"],
    BackdropProps: {
      timeout: 500
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Fade"], {
    "in": open,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.paper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 8
    }
  }, __jsx("h2", {
    id: "transition-modal-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 9
    }
  }, "Transition modal"), __jsx("p", {
    id: "transition-modal-description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 9
    }
  }, __jsx(PdfViewer, {
    file: pdf,
    width: 500,
    pageNumber: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 10
    }
  }))))))));
};

_s(ReservationId, "ESba5heoagsoae6mqEejrfgbQBQ=", false, function () {
  return [useStyles, react_hook_form__WEBPACK_IMPORTED_MODULE_9__["useForm"]];
});

_c4 = ReservationId;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (_c6 = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(_c5 = Object(_components_HOC_Snackbar__WEBPACK_IMPORTED_MODULE_31__["withSnackbar"])(ReservationId)));

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "PdfViewer$dynamic");
$RefreshReg$(_c2, "PdfViewer");
$RefreshReg$(_c3, "TabPanel");
$RefreshReg$(_c4, "ReservationId");
$RefreshReg$(_c5, "%default%$withRouter");
$RefreshReg$(_c6, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24vL2luZGV4LmpzIl0sIm5hbWVzIjpbIlBkZlZpZXdlciIsImR5bmFtaWMiLCJzc3IiLCJUYWJQYW5lbCIsImNoaWxkcmVuIiwidmFsdWUiLCJpbmRleCIsIm90aGVyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImFueSIsImlzUmVxdWlyZWQiLCJhMTF5UHJvcHMiLCJpZCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwibWluSGVpZ2h0IiwibW9kYWwiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFwZXIiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsImJvcmRlciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJwYWRkaW5nIiwic3BhY2luZyIsIlJlc2VydmF0aW9uSWQiLCJyZXNlcnZhdGlvbiIsInJvdXRlciIsInNuYWNrYmFyU2hvd01lc3NhZ2UiLCJjbGFzc2VzIiwidG9rZW4iLCJnZXRDb29raWUiLCJ1c2VTdGF0ZSIsInNldFZhbHVlIiwicGRmIiwic2V0UGRmIiwiY2xpZW50Iiwic2V0Q2xpZW50IiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VGb3JtIiwiZGVmYXVsdFZhbHVlcyIsImNvbnRyb2wiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsIlJlYWN0Iiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xvc2UiLCJsaXN0ZXJVbkNsaWVudCIsImdldENsaWVudEJ5SWQiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImdlbmVyYXRlQ29udHJhY3QiLCJjcmVhdGVDb250cmFjdCIsIl9pZCIsInJlc3VsdCIsInVwZGF0ZWRSZXNlcnZhdGlvbiIsInBkZkxpbmsiLCJtZXNzYWdlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsIm9uU3VibWl0IiwidXBkYXRlR2l0ZSIsInF1ZXJ5Iiwic2V0VGltZW91dCIsIlJvdXRlciIsInJlbG9hZCIsIm1hcmdpbiIsImNvbG9yIiwiY2l2aWxpdGUiLCJub20iLCJwcmVub20iLCJ0ZXh0RGVjb3JhdGlvbiIsIlBhcGVyIiwidGFibGUiLCJ0b3RhbFRhcmlmQmFzZSIsInRvdGFsVGFyaWZTdXBwbCIsInRheGVTZWpvdXIiLCJ0b3RhbFRmTWVuYWdlIiwidG90YWxGdExpdCIsIm10QW5pbWF1eCIsInJlbWlzZSIsInJlc3RlQVBheWVyIiwiQmFja2Ryb3AiLCJ0aW1lb3V0Iiwid2l0aFJvdXRlciIsIndpdGhTbmFja2JhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0RBQU8sTUFDeEI7QUFBQSxTQUFNLDhKQUFOO0FBQUEsQ0FEd0IsRUFFeEI7QUFBRUMsS0FBRyxFQUFFLEtBQVA7QUFBQTtBQUFBO0FBQUEsa0NBRGEsK0VBQ2I7QUFBQTtBQUFBLGNBRGEsd0NBQ2I7QUFBQTtBQUFBLENBRndCLENBQXpCO01BQU1GLFM7QUFJTjtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNHLFFBQVQsT0FBd0Q7QUFBQSxNQUFwQ0MsUUFBb0MsUUFBcENBLFFBQW9DO0FBQUEsTUFBMUJDLEtBQTBCLFFBQTFCQSxLQUEwQjtBQUFBLE1BQW5CQyxLQUFtQixRQUFuQkEsS0FBbUI7QUFBQSxNQUFUQyxLQUFTOztBQUN2RCxTQUNDO0FBQ0Ms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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FKRCxDQURELENBWEQsQ0F2S0QsQ0FERCxDQURELENBREQ7QUEwTUEsQ0ExUkQ7O0dBQU1ULGE7VUFDV3BCLFMsRUFTNEJtQyx1RDs7O01BVnZDZixhOztBQXlTUyxxRUFBQW1FLDhEQUFVLE9BQUNDLDhFQUFZLENBQUNwRSxhQUFELENBQWIsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24vW2lkXS43YTJjMWYzMGQ2NTcwMmI4YjQ5MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkbWluSGVhZGVyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0FkbWluSGVhZGVyJztcclxuaW1wb3J0IEFkbWluIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYXV0aC9BZG1pbic7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7XHJcblx0Y3JlYXRlQ29udHJhY3QsXHJcblx0bGlzdGVPbmVSZXNlcnZhdGlvbixcclxufSBmcm9tICcuLi8uLi8uLi8uLi9hY3Rpb25zL3Jlc2VydmF0aW9uQWN0aW9ucyc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgVGFicyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJzJztcclxuaW1wb3J0IFRhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnO1xyXG5pbXBvcnQgU3RhcnNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdGFycyc7XHJcbmltcG9ydCBFdXJvSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXVybyc7XHJcbmltcG9ydCBDb250YWN0TWFpbEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NvbnRhY3RNYWlsJztcclxuaW1wb3J0IEhvdXNlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSG91c2UnO1xyXG5pbXBvcnQgUmVjZWlwdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlY2VpcHQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmxvYiBmcm9tICdibG9iJztcclxuXHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcblxyXG5jb25zdCBQZGZWaWV3ZXIgPSBkeW5hbWljKFxyXG5cdCgpID0+IGltcG9ydCgnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9hZG1pbi9QREZWaWV3ZXInKSxcclxuXHR7IHNzcjogZmFsc2UgfVxyXG4pO1xyXG5pbXBvcnQge1xyXG5cdEdyaWQsXHJcblx0UGFwZXIsXHJcblx0QnV0dG9uLFxyXG5cdEJ1dHRvbkdyb3VwLFxyXG5cdFRhYmxlLFxyXG5cdFRhYmxlQm9keSxcclxuXHRUYWJsZUNlbGwsXHJcblx0VGFibGVDb250YWluZXIsXHJcblx0VGFibGVIZWFkLFxyXG5cdE1vZGFsLFxyXG5cdEJhY2tkcm9wLFxyXG5cdEZhZGUsXHJcblx0VGFibGVSb3csXHJcblx0Q2lyY3VsYXJQcm9ncmVzcyxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5pbXBvcnQgRm9ybVN0YXR1cyBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2FkbWluL2Zvcm1zL3Jlc2VydmF0aW9uL0Zvcm1TdGF0dXMnO1xyXG5pbXBvcnQgRm9ybUNsaWVudCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2FkbWluL2Zvcm1zL3Jlc2VydmF0aW9uL0Zvcm1DbGllbnQnO1xyXG5pbXBvcnQgRm9ybUxvY2F0aW9uIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW4vZm9ybXMvcmVzZXJ2YXRpb24vRm9ybUxvY2F0aW9uJztcclxuaW1wb3J0IEZvcm1QYWllbWVudHMgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9yZXNlcnZhdGlvbi9Gb3JtUGFpZW1lbnRzJztcclxuaW1wb3J0IEZvcm1Db250cmF0IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW4vZm9ybXMvcmVzZXJ2YXRpb24vRm9ybUNvbnRyYXQnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB3aXRoU25hY2tiYXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL0hPQy9TbmFja2Jhcic7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRDbGllbnRCeUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vYWN0aW9ucy9jbGllbnRBY3Rpb25zJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5mdW5jdGlvbiBUYWJQYW5lbCh7IGNoaWxkcmVuLCB2YWx1ZSwgaW5kZXgsIC4uLm90aGVyIH0pIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRyb2xlPSd0YWJwYW5lbCdcclxuXHRcdFx0aGlkZGVuPXt2YWx1ZSAhPT0gaW5kZXh9XHJcblx0XHRcdGlkPXtgc2Nyb2xsYWJsZS1wcmV2ZW50LXRhYnBhbmVsLSR7aW5kZXh9YH1cclxuXHRcdFx0YXJpYS1sYWJlbGxlZGJ5PXtgc2Nyb2xsYWJsZS1wcmV2ZW50LXRhYi0ke2luZGV4fWB9XHJcblx0XHRcdHsuLi5vdGhlcn0+XHJcblx0XHRcdHt2YWx1ZSA9PT0gaW5kZXggJiYgKFxyXG5cdFx0XHRcdDxCb3ggcD17M30+XHJcblx0XHRcdFx0XHQ8VHlwb2dyYXBoeT57Y2hpbGRyZW59PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuVGFiUGFuZWwucHJvcFR5cGVzID0ge1xyXG5cdGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuXHRpbmRleDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxyXG5cdHZhbHVlOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBhMTF5UHJvcHMoaW5kZXgpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0aWQ6IGBzY3JvbGxhYmxlLXByZXZlbnQtdGFiLSR7aW5kZXh9YCxcclxuXHRcdCdhcmlhLWNvbnRyb2xzJzogYHNjcm9sbGFibGUtcHJldmVudC10YWJwYW5lbC0ke2luZGV4fWAsXHJcblx0fTtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0cm9vdDoge1xyXG5cdFx0ZmxleEdyb3c6IDEsXHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnIzU4NTg1OCcsXHJcblx0XHRtaW5IZWlnaHQ6ICc1MHZoJyxcclxuXHR9LFxyXG5cdG1vZGFsOiB7XHJcblx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuXHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuXHR9LFxyXG5cdHBhcGVyOiB7XHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuXHRcdGJvcmRlcjogJzJweCBzb2xpZCAjMDAwJyxcclxuXHRcdGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcclxuXHRcdHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXHJcblx0fSxcclxufSkpO1xyXG5cclxuY29uc3QgUmVzZXJ2YXRpb25JZCA9ICh7IHJlc2VydmF0aW9uLCByb3V0ZXIsIHNuYWNrYmFyU2hvd01lc3NhZ2UgfSkgPT4ge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHRjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuXHRjb25zdCBbcGRmLCBzZXRQZGZdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuXHRjb25zdCBbY2xpZW50LCBzZXRDbGllbnRdID0gdXNlU3RhdGUoe30pO1xyXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Y29uc3QgeyBjb250cm9sLCByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKHtcclxuXHRcdGRlZmF1bHRWYWx1ZXM6IHJlc2VydmF0aW9uLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcblx0XHRzZXRPcGVuKHRydWUpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG5cdFx0c2V0T3BlbihmYWxzZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbGlzdGVyVW5DbGllbnQgPSAoKSA9PiB7XHJcblx0XHRnZXRDbGllbnRCeUlkKHJlc2VydmF0aW9uLmNsaWVudCwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0Q2xpZW50KGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGlzdGVyVW5DbGllbnQoKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnN0IGdlbmVyYXRlQ29udHJhY3QgPSAoKSA9PiB7XHJcblx0XHRzZXRMb2FkaW5nKHRydWUpO1xyXG5cdFx0Y3JlYXRlQ29udHJhY3QocmVzZXJ2YXRpb24uX2lkKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2xvZycsIHJlc3VsdC51cGRhdGVkUmVzZXJ2YXRpb24ucGRmTGluayk7XHJcblx0XHRcdGlmIChyZXN1bHQuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0XHRzbmFja2JhclNob3dNZXNzYWdlKGAke3Jlc3VsdC5lcnJvcn1gKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRQZGYocmVzdWx0LnVwZGF0ZWRSZXNlcnZhdGlvbi5wZGZMaW5rKTtcclxuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0XHRzbmFja2JhclNob3dNZXNzYWdlKGAke3Jlc3VsdC5tZXNzYWdlfWAsICdzdWNjZXNzJyk7XHJcblx0XHRcdFx0c2V0T3Blbih0cnVlKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygncGRmJywgcGRmKTtcclxuXHRcdFx0XHQvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHQvLyBcdFJvdXRlci5yZWxvYWQoKTtcclxuXHRcdFx0XHQvLyB9LCAzMDAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG5cdFx0c2V0VmFsdWUobmV3VmFsdWUpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0c2V0TG9hZGluZyh0cnVlKTtcclxuXHRcdHVwZGF0ZUdpdGUoZGF0YSwgcm91dGVyLnF1ZXJ5LmlkLCB0b2tlbikudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZXN1bHQnLCByZXN1bHQpO1xyXG5cdFx0XHRpZiAocmVzdWx0LmVycm9yKSB7XHJcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHRcdFx0c25hY2tiYXJTaG93TWVzc2FnZShgJHtyZXN1bHQuZXJyb3J9YCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHRcdFx0c25hY2tiYXJTaG93TWVzc2FnZShgJHtyZXN1bHQubWVzc2FnZX1gLCAnc3VjY2VzcycpO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Um91dGVyLnJlbG9hZCgpO1xyXG5cdFx0XHRcdH0sIDMwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PEFkbWluSGVhZGVyPlxyXG5cdFx0XHRcdDxBZG1pbj5cclxuXHRcdFx0XHRcdHsvKiBGaWwgZCdhcmlhbmUgKi99XHJcblx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXI+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD0naDUnIHN0eWxlPXt7IG1hcmdpbjogJzEwcHgnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0Q29uc3VsdGF0aW9uIGRlIGxhIHLDqXNlcnZhdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQje3Jlc2VydmF0aW9uLl9pZH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Y2xpZW50LmNpdmlsaXRlfSB7Y2xpZW50Lm5vbX17JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Y2xpZW50LnByZW5vbX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDxHcmlkXHJcblx0XHRcdFx0XHRcdGNvbnRhaW5lclxyXG5cdFx0XHRcdFx0XHRkaXJlY3Rpb249J3JvdydcclxuXHRcdFx0XHRcdFx0anVzdGlmeT0nc3BhY2UtYmV0d2VlbidcclxuXHRcdFx0XHRcdFx0YWxpZ25JdGVtcz0nZmxleC1zdGFydCdcclxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgcGFkZGluZzogJzhweCcgfX0+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwXHJcblx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdjb250YWluZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcj0nc2Vjb25kYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0nY29udGFpbmVkIHByaW1hcnkgYnV0dG9uIGdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17Z2VuZXJhdGVDb250cmFjdH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtsb2FkaW5nID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxDaXJjdWxhclByb2dyZXNzIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0J0fDqW7DqXJlciBDb250cmF0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uPkfDqW7DqXJlciBGYWN0dXJlPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uPk1haWwgcGxhdGVmb3JtZTwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbj5EZW1hbmRlciBwYWllbWVudDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3ByaW1hcnknPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2FkbWluL3Jlc2VydmF0aW9uJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dERlY29yYXRpb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAnd2hpdGUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFJldG91clxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDxQYXBlciBzdHlsZT17eyBwYWRkaW5nOiAnMTVweCcgfX0+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lcj5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PSdoNCc+XHJcblx0XHRcdFx0XHRcdFx0XHRJbmZvcm1hdGlvbnMgdGFyaWZhaXJlc1xyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XHJcblx0XHRcdFx0XHRcdFx0PFRhYmxlXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9XHJcblx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPSdzaW1wbGUgdGFibGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRhYmxlSGVhZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlUm93PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRUb3RhbCBzYW5zIHN1cHBsw6ltZW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5TdXBwbMOpbWVudDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+VGF4ZXMgZGl2ZXJzZXM8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPk3DqW5hZ2U8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPkxpdDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+QW5pbWF1eDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+UmVtaXNlPC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5SZXN0ZSDDoCBwYXllcjwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlUm93PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUhlYWQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VGFibGVCb2R5PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVSb3c+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi50b3RhbFRhcmlmQmFzZX3igqxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLnRvdGFsVGFyaWZTdXBwbH3igqxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLnRheGVTZWpvdXJ94oKsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi50b3RhbFRmTWVuYWdlfeKCrFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24udG90YWxGdExpdH3igqxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLm10QW5pbWF1eH3igqxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLnJlbWlzZX3igqxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLnJlc3RlQVBheWVyfeKCrFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlUm93PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUJvZHk+XHJcblx0XHRcdFx0XHRcdFx0PC9UYWJsZT5cclxuXHRcdFx0XHRcdFx0PC9UYWJsZUNvbnRhaW5lcj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG5cdFx0XHRcdFx0XHRcdDxBcHBCYXIgcG9zaXRpb249J3N0YXRpYyc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VGFic1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dmFsdWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J2Z1bGxXaWR0aCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2Nyb2xsQnV0dG9ucz0nb2ZmJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPSdzY3JvbGxhYmxlIHByZXZlbnQgdGFicyBleGFtcGxlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFRhYlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb249ezxTdGFyc0ljb24gLz59XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0nSW5mb3MgZ8OpbsOpcmFsZXMnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLmExMXlQcm9wcygwKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFRhYlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb249ezxFdXJvSWNvbiAvPn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPSdQYWllbWVudHMnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLmExMXlQcm9wcygxKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFRhYlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb249ezxDb250YWN0TWFpbEljb24gLz59XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0nQ2xpZW50J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5hMTF5UHJvcHMoMil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUYWJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPXs8SG91c2VJY29uIC8+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J0xvY2F0aW9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5hMTF5UHJvcHMoMyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUYWJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPXs8UmVjZWlwdEljb24gLz59XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0nQ29udHJhdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4uYTExeVByb3BzKDQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9UYWJzPlxyXG5cdFx0XHRcdFx0XHRcdDwvQXBwQmFyPlxyXG5cdFx0XHRcdFx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXswfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm1TdGF0dXMgcHJlbG9hZGVkVmFsdWVzPXtyZXNlcnZhdGlvbn0gLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvVGFiUGFuZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17MX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtUGFpZW1lbnRzIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1RhYlBhbmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNsaWVudCBwcmVsb2FkZWRWYWx1ZXM9e2NsaWVudH0gLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvVGFiUGFuZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17M30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtTG9jYXRpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcmVsb2FkZWRWYWx1ZXM9e3Jlc2VydmF0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9UYWJQYW5lbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXs0fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm1Db250cmF0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJlbG9hZGVkVmFsdWVzPXtyZXNlcnZhdGlvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvVGFiUGFuZWw+XHJcblx0XHRcdFx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvUGFwZXI+XHJcblxyXG5cdFx0XHRcdFx0PE1vZGFsXHJcblx0XHRcdFx0XHRcdGFyaWEtbGFiZWxsZWRieT0ndHJhbnNpdGlvbi1tb2RhbC10aXRsZSdcclxuXHRcdFx0XHRcdFx0YXJpYS1kZXNjcmliZWRieT0ndHJhbnNpdGlvbi1tb2RhbC1kZXNjcmlwdGlvbidcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfVxyXG5cdFx0XHRcdFx0XHRvcGVuPXtvcGVufVxyXG5cdFx0XHRcdFx0XHRvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuXHRcdFx0XHRcdFx0Y2xvc2VBZnRlclRyYW5zaXRpb25cclxuXHRcdFx0XHRcdFx0QmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG5cdFx0XHRcdFx0XHRCYWNrZHJvcFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdFx0dGltZW91dDogNTAwLFxyXG5cdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0PEZhZGUgaW49e29wZW59PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxoMiBpZD0ndHJhbnNpdGlvbi1tb2RhbC10aXRsZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFRyYW5zaXRpb24gbW9kYWxcclxuXHRcdFx0XHRcdFx0XHRcdDwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cCBpZD0ndHJhbnNpdGlvbi1tb2RhbC1kZXNjcmlwdGlvbic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxQZGZWaWV3ZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxlPXtwZGZ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg9ezUwMH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYWdlTnVtYmVyPXsyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0ey8qIDxpZnJhbWUgc3JjPXtwZGZ9IC8+ICovfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L0ZhZGU+XHJcblx0XHRcdFx0XHQ8L01vZGFsPlxyXG5cdFx0XHRcdDwvQWRtaW4+XHJcblx0XHRcdDwvQWRtaW5IZWFkZXI+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcblx0Y29uc3QgdG9rZW4gPSBjb250ZXh0LnJlcS5jb29raWVzLnRva2VuO1xyXG5cdGNvbnN0IHJlczEgPSBhd2FpdCBsaXN0ZU9uZVJlc2VydmF0aW9uKGNvbnRleHQucGFyYW1zLmlkLCB0b2tlbik7XHJcblx0Y29uc3QgcmVzZXJ2YXRpb24gPSBhd2FpdCByZXMxO1xyXG5cdC8vIFJlY3VwIGNsaWVudCwgZ2l0ZSwgcGFpZW1lbnRcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHJlc2VydmF0aW9uLFxyXG5cdFx0fSxcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKHdpdGhTbmFja2JhcihSZXNlcnZhdGlvbklkKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=