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
  }, "Contrat de location"), __jsx("p", {
    id: "transition-modal-description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 9
    }
  }, __jsx("embed", {
    type: "application/pdf",
    src: pdf,
    width: "300",
    height: "600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24vL2luZGV4LmpzIl0sIm5hbWVzIjpbIlBkZlZpZXdlciIsImR5bmFtaWMiLCJzc3IiLCJUYWJQYW5lbCIsImNoaWxkcmVuIiwidmFsdWUiLCJpbmRleCIsIm90aGVyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImFueSIsImlzUmVxdWlyZWQiLCJhMTF5UHJvcHMiLCJpZCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwibWluSGVpZ2h0IiwibW9kYWwiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFwZXIiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsImJvcmRlciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJwYWRkaW5nIiwic3BhY2luZyIsIlJlc2VydmF0aW9uSWQiLCJyZXNlcnZhdGlvbiIsInJvdXRlciIsInNuYWNrYmFyU2hvd01lc3NhZ2UiLCJjbGFzc2VzIiwidG9rZW4iLCJnZXRDb29raWUiLCJ1c2VTdGF0ZSIsInNldFZhbHVlIiwicGRmIiwic2V0UGRmIiwiY2xpZW50Iiwic2V0Q2xpZW50IiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VGb3JtIiwiZGVmYXVsdFZhbHVlcyIsImNvbnRyb2wiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsIlJlYWN0Iiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xvc2UiLCJsaXN0ZXJVbkNsaWVudCIsImdldENsaWVudEJ5SWQiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImdlbmVyYXRlQ29udHJhY3QiLCJjcmVhdGVDb250cmFjdCIsIl9pZCIsInJlc3VsdCIsInVwZGF0ZWRSZXNlcnZhdGlvbiIsInBkZkxpbmsiLCJtZXNzYWdlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsIm9uU3VibWl0IiwidXBkYXRlR2l0ZSIsInF1ZXJ5Iiwic2V0VGltZW91dCIsIlJvdXRlciIsInJlbG9hZCIsIm1hcmdpbiIsImNvbG9yIiwiY2l2aWxpdGUiLCJub20iLCJwcmVub20iLCJ0ZXh0RGVjb3JhdGlvbiIsIlBhcGVyIiwidGFibGUiLCJ0b3RhbFRhcmlmQmFzZSIsInRvdGFsVGFyaWZTdXBwbCIsInRheGVTZWpvdXIiLCJ0b3RhbFRmTWVuYWdlIiwidG90YWxGdExpdCIsIm10QW5pbWF1eCIsInJlbWlzZSIsInJlc3RlQVBheWVyIiwiQmFja2Ryb3AiLCJ0aW1lb3V0Iiwid2l0aFJvdXRlciIsIndpdGhTbmFja2JhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0RBQU8sTUFDeEI7QUFBQSxTQUFNLDhKQUFOO0FBQUEsQ0FEd0IsRUFFeEI7QUFBRUMsS0FBRyxFQUFFLEtBQVA7QUFBQTtBQUFBO0FBQUEsa0NBRGEsK0VBQ2I7QUFBQTtBQUFBLGNBRGEsd0NBQ2I7QUFBQTtBQUFBLENBRndCLENBQXpCO01BQU1GLFM7QUFJTjtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNHLFFBQVQsT0FBd0Q7QUFBQSxNQUFwQ0MsUUFBb0MsUUFBcENBLFFBQW9DO0FBQUEsTUFBMUJDLEtBQTBCLFFBQTFCQSxLQUEwQjtBQUFBLE1BQW5CQyxLQUFtQixRQUFuQkEsS0FBbUI7QUFBQSxNQUFUQyxLQUFTOztBQUN2RCxTQUNDO0FBQ0Ms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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRCxDQUpELENBREQsQ0FYRCxDQXZLRCxDQURELENBREQsQ0FERDtBQWdOQSxDQWhTRDs7R0FBTVQsYTtVQUNXcEIsUyxFQVM0Qm1DLHVEOzs7TUFWdkNmLGE7O0FBK1NTLHFFQUFBbUUsOERBQVUsT0FBQ0MsOEVBQVksQ0FBQ3BFLGFBQUQsQ0FBYixDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9yZXNlcnZhdGlvbi9baWRdLmFhNTNhYzkzZWQyYjU5N2ZhZDNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRtaW5IZWFkZXIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvQWRtaW5IZWFkZXInO1xyXG5pbXBvcnQgQWRtaW4gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9hdXRoL0FkbWluJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtcclxuXHRjcmVhdGVDb250cmFjdCxcclxuXHRsaXN0ZU9uZVJlc2VydmF0aW9uLFxyXG59IGZyb20gJy4uLy4uLy4uLy4uL2FjdGlvbnMvcmVzZXJ2YXRpb25BY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XHJcbmltcG9ydCBUYWJzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYnMnO1xyXG5pbXBvcnQgVGFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XHJcbmltcG9ydCBTdGFyc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJzJztcclxuaW1wb3J0IEV1cm9JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FdXJvJztcclxuaW1wb3J0IENvbnRhY3RNYWlsSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ29udGFjdE1haWwnO1xyXG5pbXBvcnQgSG91c2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ib3VzZSc7XHJcbmltcG9ydCBSZWNlaXB0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUmVjZWlwdCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCbG9iIGZyb20gJ2Jsb2InO1xyXG5cclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuXHJcbmNvbnN0IFBkZlZpZXdlciA9IGR5bmFtaWMoXHJcblx0KCkgPT4gaW1wb3J0KCcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2FkbWluL1BERlZpZXdlcicpLFxyXG5cdHsgc3NyOiBmYWxzZSB9XHJcbik7XHJcbmltcG9ydCB7XHJcblx0R3JpZCxcclxuXHRQYXBlcixcclxuXHRCdXR0b24sXHJcblx0QnV0dG9uR3JvdXAsXHJcblx0VGFibGUsXHJcblx0VGFibGVCb2R5LFxyXG5cdFRhYmxlQ2VsbCxcclxuXHRUYWJsZUNvbnRhaW5lcixcclxuXHRUYWJsZUhlYWQsXHJcblx0TW9kYWwsXHJcblx0QmFja2Ryb3AsXHJcblx0RmFkZSxcclxuXHRUYWJsZVJvdyxcclxuXHRDaXJjdWxhclByb2dyZXNzLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmltcG9ydCBGb3JtU3RhdHVzIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW4vZm9ybXMvcmVzZXJ2YXRpb24vRm9ybVN0YXR1cyc7XHJcbmltcG9ydCBGb3JtQ2xpZW50IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW4vZm9ybXMvcmVzZXJ2YXRpb24vRm9ybUNsaWVudCc7XHJcbmltcG9ydCBGb3JtTG9jYXRpb24gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9yZXNlcnZhdGlvbi9Gb3JtTG9jYXRpb24nO1xyXG5pbXBvcnQgRm9ybVBhaWVtZW50cyBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2FkbWluL2Zvcm1zL3Jlc2VydmF0aW9uL0Zvcm1QYWllbWVudHMnO1xyXG5pbXBvcnQgRm9ybUNvbnRyYXQgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9yZXNlcnZhdGlvbi9Gb3JtQ29udHJhdCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHdpdGhTbmFja2JhciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvSE9DL1NuYWNrYmFyJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IGdldENsaWVudEJ5SWQgfSBmcm9tICcuLi8uLi8uLi8uLi9hY3Rpb25zL2NsaWVudEFjdGlvbnMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmZ1bmN0aW9uIFRhYlBhbmVsKHsgY2hpbGRyZW4sIHZhbHVlLCBpbmRleCwgLi4ub3RoZXIgfSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdHJvbGU9J3RhYnBhbmVsJ1xyXG5cdFx0XHRoaWRkZW49e3ZhbHVlICE9PSBpbmRleH1cclxuXHRcdFx0aWQ9e2BzY3JvbGxhYmxlLXByZXZlbnQtdGFicGFuZWwtJHtpbmRleH1gfVxyXG5cdFx0XHRhcmlhLWxhYmVsbGVkYnk9e2BzY3JvbGxhYmxlLXByZXZlbnQtdGFiLSR7aW5kZXh9YH1cclxuXHRcdFx0ey4uLm90aGVyfT5cclxuXHRcdFx0e3ZhbHVlID09PSBpbmRleCAmJiAoXHJcblx0XHRcdFx0PEJveCBwPXszfT5cclxuXHRcdFx0XHRcdDxUeXBvZ3JhcGh5PntjaGlsZHJlbn08L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdCl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5UYWJQYW5lbC5wcm9wVHlwZXMgPSB7XHJcblx0Y2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG5cdGluZGV4OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXHJcblx0dmFsdWU6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGExMXlQcm9wcyhpbmRleCkge1xyXG5cdHJldHVybiB7XHJcblx0XHRpZDogYHNjcm9sbGFibGUtcHJldmVudC10YWItJHtpbmRleH1gLFxyXG5cdFx0J2FyaWEtY29udHJvbHMnOiBgc2Nyb2xsYWJsZS1wcmV2ZW50LXRhYnBhbmVsLSR7aW5kZXh9YCxcclxuXHR9O1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRyb290OiB7XHJcblx0XHRmbGV4R3JvdzogMSxcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjNTg1ODU4JyxcclxuXHRcdG1pbkhlaWdodDogJzUwdmgnLFxyXG5cdH0sXHJcblx0bW9kYWw6IHtcclxuXHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cdH0sXHJcblx0cGFwZXI6IHtcclxuXHRcdGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG5cdFx0Ym9yZGVyOiAnMnB4IHNvbGlkICMwMDAnLFxyXG5cdFx0Ym94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzVdLFxyXG5cdFx0cGFkZGluZzogdGhlbWUuc3BhY2luZygyLCA0LCAzKSxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5jb25zdCBSZXNlcnZhdGlvbklkID0gKHsgcmVzZXJ2YXRpb24sIHJvdXRlciwgc25hY2tiYXJTaG93TWVzc2FnZSB9KSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cdGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoMCk7XHJcblxyXG5cdGNvbnN0IFtwZGYsIHNldFBkZl0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG5cdGNvbnN0IFtjbGllbnQsIHNldENsaWVudF0gPSB1c2VTdGF0ZSh7fSk7XHJcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHRjb25zdCB7IGNvbnRyb2wsIHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm0oe1xyXG5cdFx0ZGVmYXVsdFZhbHVlczogcmVzZXJ2YXRpb24sXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuXHRcdHNldE9wZW4odHJ1ZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcblx0XHRzZXRPcGVuKGZhbHNlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBsaXN0ZXJVbkNsaWVudCA9ICgpID0+IHtcclxuXHRcdGdldENsaWVudEJ5SWQocmVzZXJ2YXRpb24uY2xpZW50LCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRDbGllbnQoZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsaXN0ZXJVbkNsaWVudCgpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc3QgZ2VuZXJhdGVDb250cmFjdCA9ICgpID0+IHtcclxuXHRcdHNldExvYWRpbmcodHJ1ZSk7XHJcblx0XHRjcmVhdGVDb250cmFjdChyZXNlcnZhdGlvbi5faWQpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnbG9nJywgcmVzdWx0LnVwZGF0ZWRSZXNlcnZhdGlvbi5wZGZMaW5rKTtcclxuXHRcdFx0aWYgKHJlc3VsdC5lcnJvcikge1xyXG5cdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xyXG5cdFx0XHRcdHNuYWNrYmFyU2hvd01lc3NhZ2UoYCR7cmVzdWx0LmVycm9yfWApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFBkZihyZXN1bHQudXBkYXRlZFJlc2VydmF0aW9uLnBkZkxpbmspO1xyXG5cdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xyXG5cdFx0XHRcdHNuYWNrYmFyU2hvd01lc3NhZ2UoYCR7cmVzdWx0Lm1lc3NhZ2V9YCwgJ3N1Y2Nlc3MnKTtcclxuXHRcdFx0XHRzZXRPcGVuKHRydWUpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdwZGYnLCBwZGYpO1xyXG5cdFx0XHRcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdC8vIFx0Um91dGVyLnJlbG9hZCgpO1xyXG5cdFx0XHRcdC8vIH0sIDMwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XHJcblx0XHRzZXRWYWx1ZShuZXdWYWx1ZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRzZXRMb2FkaW5nKHRydWUpO1xyXG5cdFx0dXBkYXRlR2l0ZShkYXRhLCByb3V0ZXIucXVlcnkuaWQsIHRva2VuKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3Jlc3VsdCcsIHJlc3VsdCk7XHJcblx0XHRcdGlmIChyZXN1bHQuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0XHRzbmFja2JhclNob3dNZXNzYWdlKGAke3Jlc3VsdC5lcnJvcn1gKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0XHRzbmFja2JhclNob3dNZXNzYWdlKGAke3Jlc3VsdC5tZXNzYWdlfWAsICdzdWNjZXNzJyk7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRSb3V0ZXIucmVsb2FkKCk7XHJcblx0XHRcdFx0fSwgMzAwMCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8QWRtaW5IZWFkZXI+XHJcblx0XHRcdFx0PEFkbWluPlxyXG5cdFx0XHRcdFx0ey8qIEZpbCBkJ2FyaWFuZSAqL31cclxuXHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lcj5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PSdoNScgc3R5bGU9e3sgbWFyZ2luOiAnMTBweCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRDb25zdWx0YXRpb24gZGUgbGEgcsOpc2VydmF0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCN7cmVzZXJ2YXRpb24uX2lkfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtjbGllbnQuY2l2aWxpdGV9IHtjbGllbnQubm9tfXsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtjbGllbnQucHJlbm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PEdyaWRcclxuXHRcdFx0XHRcdFx0Y29udGFpbmVyXHJcblx0XHRcdFx0XHRcdGRpcmVjdGlvbj0ncm93J1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5PSdzcGFjZS1iZXR3ZWVuJ1xyXG5cdFx0XHRcdFx0XHRhbGlnbkl0ZW1zPSdmbGV4LXN0YXJ0J1xyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBwYWRkaW5nOiAnOHB4JyB9fT5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXBcclxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yPSdzZWNvbmRhcnknXHJcblx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPSdjb250YWluZWQgcHJpbWFyeSBidXR0b24gZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXtnZW5lcmF0ZUNvbnRyYWN0fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2xvYWRpbmcgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PENpcmN1bGFyUHJvZ3Jlc3MgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnR8OpbsOpcmVyIENvbnRyYXQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b24+R8OpbsOpcmVyIEZhY3R1cmU8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b24+TWFpbCBwbGF0ZWZvcm1lPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uPkRlbWFuZGVyIHBhaWVtZW50PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0ncHJpbWFyeSc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvYWRtaW4vcmVzZXJ2YXRpb24nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICd3aGl0ZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0UmV0b3VyXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PFBhcGVyIHN0eWxlPXt7IHBhZGRpbmc6ICcxNXB4JyB9fT5cclxuXHRcdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyPlxyXG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdEluZm9ybWF0aW9ucyB0YXJpZmFpcmVzXHJcblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cclxuXHRcdFx0XHRcdFx0XHQ8VGFibGVcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX1cclxuXHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J3NpbXBsZSB0YWJsZSc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VGFibGVIZWFkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVSb3c+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFRvdGFsIHNhbnMgc3VwcGzDqW1lbnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPlN1cHBsw6ltZW50PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5UYXhlcyBkaXZlcnNlczwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+TcOpbmFnZTwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+TGl0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5BbmltYXV4PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5SZW1pc2U8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPlJlc3RlIMOgIHBheWVyPC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGVSb3c+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlSGVhZD5cclxuXHRcdFx0XHRcdFx0XHRcdDxUYWJsZUJvZHk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZVJvdz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLnRvdGFsVGFyaWZCYXNlfeKCrFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24udG90YWxUYXJpZlN1cHBsfeKCrFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24udGF4ZVNlam91cn3igqxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLnRvdGFsVGZNZW5hZ2V94oKsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi50b3RhbEZ0TGl0feKCrFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24ubXRBbmltYXV4feKCrFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24ucmVtaXNlfeKCrFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24ucmVzdGVBUGF5ZXJ94oKsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGVSb3c+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlQm9keT5cclxuXHRcdFx0XHRcdFx0XHQ8L1RhYmxlPlxyXG5cdFx0XHRcdFx0XHQ8L1RhYmxlQ29udGFpbmVyPlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcblx0XHRcdFx0XHRcdFx0PEFwcEJhciBwb3NpdGlvbj0nc3RhdGljJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxUYWJzXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt2YWx1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD0nZnVsbFdpZHRoJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzY3JvbGxCdXR0b25zPSdvZmYnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J3Njcm9sbGFibGUgcHJldmVudCB0YWJzIGV4YW1wbGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGFiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17PFN0YXJzSWNvbiAvPn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPSdJbmZvcyBnw6luw6lyYWxlcydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4uYTExeVByb3BzKDApfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGFiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17PEV1cm9JY29uIC8+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J1BhaWVtZW50cydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4uYTExeVByb3BzKDEpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGFiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17PENvbnRhY3RNYWlsSWNvbiAvPn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPSdDbGllbnQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLmExMXlQcm9wcygyKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFRhYlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb249ezxIb3VzZUljb24gLz59XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0nTG9jYXRpb24nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLmExMXlQcm9wcygzKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFRhYlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb249ezxSZWNlaXB0SWNvbiAvPn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPSdDb250cmF0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5hMTF5UHJvcHMoNCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1RhYnM+XHJcblx0XHRcdFx0XHRcdFx0PC9BcHBCYXI+XHJcblx0XHRcdFx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybVN0YXR1cyBwcmVsb2FkZWRWYWx1ZXM9e3Jlc2VydmF0aW9ufSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9UYWJQYW5lbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXsxfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm1QYWllbWVudHMgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvVGFiUGFuZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17Mn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtQ2xpZW50IHByZWxvYWRlZFZhbHVlcz17Y2xpZW50fSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9UYWJQYW5lbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXszfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm1Mb2NhdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByZWxvYWRlZFZhbHVlcz17cmVzZXJ2YXRpb259XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1RhYlBhbmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyYXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcmVsb2FkZWRWYWx1ZXM9e3Jlc2VydmF0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9UYWJQYW5lbD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9QYXBlcj5cclxuXHJcblx0XHRcdFx0XHQ8TW9kYWxcclxuXHRcdFx0XHRcdFx0YXJpYS1sYWJlbGxlZGJ5PSd0cmFuc2l0aW9uLW1vZGFsLXRpdGxlJ1xyXG5cdFx0XHRcdFx0XHRhcmlhLWRlc2NyaWJlZGJ5PSd0cmFuc2l0aW9uLW1vZGFsLWRlc2NyaXB0aW9uJ1xyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMubW9kYWx9XHJcblx0XHRcdFx0XHRcdG9wZW49e29wZW59XHJcblx0XHRcdFx0XHRcdG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG5cdFx0XHRcdFx0XHRjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG5cdFx0XHRcdFx0XHRCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcblx0XHRcdFx0XHRcdEJhY2tkcm9wUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHR0aW1lb3V0OiA1MDAsXHJcblx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHQ8RmFkZSBpbj17b3Blbn0+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGgyIGlkPSd0cmFuc2l0aW9uLW1vZGFsLXRpdGxlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Q29udHJhdCBkZSBsb2NhdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0PC9oMj5cclxuXHRcdFx0XHRcdFx0XHRcdDxwIGlkPSd0cmFuc2l0aW9uLW1vZGFsLWRlc2NyaXB0aW9uJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0ey8qIDxQZGZWaWV3ZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxlPXtwZGZ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg9ezUwMH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYWdlTnVtYmVyPXsyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPiAqL31cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8b2JqZWN0IHR5cGU9J2FwcGxpY2F0aW9uL3BkZicgZGF0YT17cGRmfSAvPiAqL31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGVtYmVkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nYXBwbGljYXRpb24vcGRmJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17cGRmfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPSczMDAnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PSc2MDAnXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvRmFkZT5cclxuXHRcdFx0XHRcdDwvTW9kYWw+XHJcblx0XHRcdFx0PC9BZG1pbj5cclxuXHRcdFx0PC9BZG1pbkhlYWRlcj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuXHRjb25zdCB0b2tlbiA9IGNvbnRleHQucmVxLmNvb2tpZXMudG9rZW47XHJcblx0Y29uc3QgcmVzMSA9IGF3YWl0IGxpc3RlT25lUmVzZXJ2YXRpb24oY29udGV4dC5wYXJhbXMuaWQsIHRva2VuKTtcclxuXHRjb25zdCByZXNlcnZhdGlvbiA9IGF3YWl0IHJlczE7XHJcblx0Ly8gUmVjdXAgY2xpZW50LCBnaXRlLCBwYWllbWVudFxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0cmVzZXJ2YXRpb24sXHJcblx0XHR9LFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIod2l0aFNuYWNrYmFyKFJlc2VydmF0aW9uSWQpKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==