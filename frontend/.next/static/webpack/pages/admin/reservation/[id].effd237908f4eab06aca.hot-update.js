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
  }, __jsx("object", {
    src: pdf,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24vL2luZGV4LmpzIl0sIm5hbWVzIjpbIlBkZlZpZXdlciIsImR5bmFtaWMiLCJzc3IiLCJUYWJQYW5lbCIsImNoaWxkcmVuIiwidmFsdWUiLCJpbmRleCIsIm90aGVyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImFueSIsImlzUmVxdWlyZWQiLCJhMTF5UHJvcHMiLCJpZCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwibWluSGVpZ2h0IiwibW9kYWwiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFwZXIiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsImJvcmRlciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJwYWRkaW5nIiwic3BhY2luZyIsIlJlc2VydmF0aW9uSWQiLCJyZXNlcnZhdGlvbiIsInJvdXRlciIsInNuYWNrYmFyU2hvd01lc3NhZ2UiLCJjbGFzc2VzIiwidG9rZW4iLCJnZXRDb29raWUiLCJ1c2VTdGF0ZSIsInNldFZhbHVlIiwicGRmIiwic2V0UGRmIiwiY2xpZW50Iiwic2V0Q2xpZW50IiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VGb3JtIiwiZGVmYXVsdFZhbHVlcyIsImNvbnRyb2wiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsIlJlYWN0Iiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xvc2UiLCJsaXN0ZXJVbkNsaWVudCIsImdldENsaWVudEJ5SWQiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImdlbmVyYXRlQ29udHJhY3QiLCJjcmVhdGVDb250cmFjdCIsIl9pZCIsInJlc3VsdCIsInVwZGF0ZWRSZXNlcnZhdGlvbiIsInBkZkxpbmsiLCJtZXNzYWdlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsIm9uU3VibWl0IiwidXBkYXRlR2l0ZSIsInF1ZXJ5Iiwic2V0VGltZW91dCIsIlJvdXRlciIsInJlbG9hZCIsIm1hcmdpbiIsImNvbG9yIiwiY2l2aWxpdGUiLCJub20iLCJwcmVub20iLCJ0ZXh0RGVjb3JhdGlvbiIsIlBhcGVyIiwidGFibGUiLCJ0b3RhbFRhcmlmQmFzZSIsInRvdGFsVGFyaWZTdXBwbCIsInRheGVTZWpvdXIiLCJ0b3RhbFRmTWVuYWdlIiwidG90YWxGdExpdCIsIm10QW5pbWF1eCIsInJlbWlzZSIsInJlc3RlQVBheWVyIiwiQmFja2Ryb3AiLCJ0aW1lb3V0Iiwid2l0aFJvdXRlciIsIndpdGhTbmFja2JhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0RBQU8sTUFDeEI7QUFBQSxTQUFNLDhKQUFOO0FBQUEsQ0FEd0IsRUFFeEI7QUFBRUMsS0FBRyxFQUFFLEtBQVA7QUFBQTtBQUFBO0FBQUEsa0NBRGEsK0VBQ2I7QUFBQTtBQUFBLGNBRGEsd0NBQ2I7QUFBQTtBQUFBLENBRndCLENBQXpCO01BQU1GLFM7QUFJTjtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNHLFFBQVQsT0FBd0Q7QUFBQSxNQUFwQ0MsUUFBb0MsUUFBcENBLFFBQW9DO0FBQUEsTUFBMUJDLEtBQTBCLFFBQTFCQSxLQUEwQjtBQUFBLE1BQW5CQyxLQUFtQixRQUFuQkEsS0FBbUI7QUFBQSxNQUFUQyxLQUFTOztBQUN2RCxTQUNDO0FBQ0Ms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REQsQ0FERCxDQUREO0FBME1BLENBMVJEOztHQUFNVCxhO1VBQ1dwQixTLEVBUzRCbUMsdUQ7OztNQVZ2Q2YsYTs7QUF5U1MscUVBQUFtRSw4REFBVSxPQUFDQyw4RUFBWSxDQUFDcEUsYUFBRCxDQUFiLENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL3Jlc2VydmF0aW9uL1tpZF0uZWZmZDIzNzkwOGY0ZWFiMDZhY2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZG1pbkhlYWRlciBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2xheW91dC9BZG1pbkhlYWRlcic7XHJcbmltcG9ydCBBZG1pbiBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2F1dGgvQWRtaW4nO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge1xyXG5cdGNyZWF0ZUNvbnRyYWN0LFxyXG5cdGxpc3RlT25lUmVzZXJ2YXRpb24sXHJcbn0gZnJvbSAnLi4vLi4vLi4vLi4vYWN0aW9ucy9yZXNlcnZhdGlvbkFjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IFRhYnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFicyc7XHJcbmltcG9ydCBUYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFiJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94JztcclxuaW1wb3J0IFN0YXJzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhcnMnO1xyXG5pbXBvcnQgRXVyb0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V1cm8nO1xyXG5pbXBvcnQgQ29udGFjdE1haWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Db250YWN0TWFpbCc7XHJcbmltcG9ydCBIb3VzZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hvdXNlJztcclxuaW1wb3J0IFJlY2VpcHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZWNlaXB0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJsb2IgZnJvbSAnYmxvYic7XHJcblxyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5cclxuY29uc3QgUGRmVmlld2VyID0gZHluYW1pYyhcclxuXHQoKSA9PiBpbXBvcnQoJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW4vUERGVmlld2VyJyksXHJcblx0eyBzc3I6IGZhbHNlIH1cclxuKTtcclxuaW1wb3J0IHtcclxuXHRHcmlkLFxyXG5cdFBhcGVyLFxyXG5cdEJ1dHRvbixcclxuXHRCdXR0b25Hcm91cCxcclxuXHRUYWJsZSxcclxuXHRUYWJsZUJvZHksXHJcblx0VGFibGVDZWxsLFxyXG5cdFRhYmxlQ29udGFpbmVyLFxyXG5cdFRhYmxlSGVhZCxcclxuXHRNb2RhbCxcclxuXHRCYWNrZHJvcCxcclxuXHRGYWRlLFxyXG5cdFRhYmxlUm93LFxyXG5cdENpcmN1bGFyUHJvZ3Jlc3MsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuaW1wb3J0IEZvcm1TdGF0dXMgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9yZXNlcnZhdGlvbi9Gb3JtU3RhdHVzJztcclxuaW1wb3J0IEZvcm1DbGllbnQgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9yZXNlcnZhdGlvbi9Gb3JtQ2xpZW50JztcclxuaW1wb3J0IEZvcm1Mb2NhdGlvbiBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2FkbWluL2Zvcm1zL3Jlc2VydmF0aW9uL0Zvcm1Mb2NhdGlvbic7XHJcbmltcG9ydCBGb3JtUGFpZW1lbnRzIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW4vZm9ybXMvcmVzZXJ2YXRpb24vRm9ybVBhaWVtZW50cyc7XHJcbmltcG9ydCBGb3JtQ29udHJhdCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2FkbWluL2Zvcm1zL3Jlc2VydmF0aW9uL0Zvcm1Db250cmF0JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgd2l0aFNuYWNrYmFyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9IT0MvU25hY2tiYXInO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHsgZ2V0Q2xpZW50QnlJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2FjdGlvbnMvY2xpZW50QWN0aW9ucyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZnVuY3Rpb24gVGFiUGFuZWwoeyBjaGlsZHJlbiwgdmFsdWUsIGluZGV4LCAuLi5vdGhlciB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXZcclxuXHRcdFx0cm9sZT0ndGFicGFuZWwnXHJcblx0XHRcdGhpZGRlbj17dmFsdWUgIT09IGluZGV4fVxyXG5cdFx0XHRpZD17YHNjcm9sbGFibGUtcHJldmVudC10YWJwYW5lbC0ke2luZGV4fWB9XHJcblx0XHRcdGFyaWEtbGFiZWxsZWRieT17YHNjcm9sbGFibGUtcHJldmVudC10YWItJHtpbmRleH1gfVxyXG5cdFx0XHR7Li4ub3RoZXJ9PlxyXG5cdFx0XHR7dmFsdWUgPT09IGluZGV4ICYmIChcclxuXHRcdFx0XHQ8Qm94IHA9ezN9PlxyXG5cdFx0XHRcdFx0PFR5cG9ncmFwaHk+e2NoaWxkcmVufTwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0KX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcblRhYlBhbmVsLnByb3BUeXBlcyA9IHtcclxuXHRjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcblx0aW5kZXg6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcclxuXHR2YWx1ZTogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gYTExeVByb3BzKGluZGV4KSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGlkOiBgc2Nyb2xsYWJsZS1wcmV2ZW50LXRhYi0ke2luZGV4fWAsXHJcblx0XHQnYXJpYS1jb250cm9scyc6IGBzY3JvbGxhYmxlLXByZXZlbnQtdGFicGFuZWwtJHtpbmRleH1gLFxyXG5cdH07XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdGZsZXhHcm93OiAxLFxyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJyM1ODU4NTgnLFxyXG5cdFx0bWluSGVpZ2h0OiAnNTB2aCcsXHJcblx0fSxcclxuXHRtb2RhbDoge1xyXG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblx0fSxcclxuXHRwYXBlcjoge1xyXG5cdFx0YmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcblx0XHRib3JkZXI6ICcycHggc29saWQgIzAwMCcsXHJcblx0XHRib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXHJcblx0XHRwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IFJlc2VydmF0aW9uSWQgPSAoeyByZXNlcnZhdGlvbiwgcm91dGVyLCBzbmFja2JhclNob3dNZXNzYWdlIH0pID0+IHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblx0Y29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcblx0Y29uc3QgW3BkZiwgc2V0UGRmXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcblx0Y29uc3QgW2NsaWVudCwgc2V0Q2xpZW50XSA9IHVzZVN0YXRlKHt9KTtcclxuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdGNvbnN0IHsgY29udHJvbCwgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybSh7XHJcblx0XHRkZWZhdWx0VmFsdWVzOiByZXNlcnZhdGlvbixcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG5cdFx0c2V0T3Blbih0cnVlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuXHRcdHNldE9wZW4oZmFsc2UpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGxpc3RlclVuQ2xpZW50ID0gKCkgPT4ge1xyXG5cdFx0Z2V0Q2xpZW50QnlJZChyZXNlcnZhdGlvbi5jbGllbnQsIHRva2VuKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldENsaWVudChkYXRhKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxpc3RlclVuQ2xpZW50KCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCBnZW5lcmF0ZUNvbnRyYWN0ID0gKCkgPT4ge1xyXG5cdFx0c2V0TG9hZGluZyh0cnVlKTtcclxuXHRcdGNyZWF0ZUNvbnRyYWN0KHJlc2VydmF0aW9uLl9pZCkudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdsb2cnLCByZXN1bHQudXBkYXRlZFJlc2VydmF0aW9uLnBkZkxpbmspO1xyXG5cdFx0XHRpZiAocmVzdWx0LmVycm9yKSB7XHJcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHRcdFx0c25hY2tiYXJTaG93TWVzc2FnZShgJHtyZXN1bHQuZXJyb3J9YCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0UGRmKHJlc3VsdC51cGRhdGVkUmVzZXJ2YXRpb24ucGRmTGluayk7XHJcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHRcdFx0c25hY2tiYXJTaG93TWVzc2FnZShgJHtyZXN1bHQubWVzc2FnZX1gLCAnc3VjY2VzcycpO1xyXG5cdFx0XHRcdHNldE9wZW4odHJ1ZSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3BkZicsIHBkZik7XHJcblx0XHRcdFx0Ly8gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0Ly8gXHRSb3V0ZXIucmVsb2FkKCk7XHJcblx0XHRcdFx0Ly8gfSwgMzAwMCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuXHRcdHNldFZhbHVlKG5ld1ZhbHVlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChkYXRhKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdHNldExvYWRpbmcodHJ1ZSk7XHJcblx0XHR1cGRhdGVHaXRlKGRhdGEsIHJvdXRlci5xdWVyeS5pZCwgdG9rZW4pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygncmVzdWx0JywgcmVzdWx0KTtcclxuXHRcdFx0aWYgKHJlc3VsdC5lcnJvcikge1xyXG5cdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xyXG5cdFx0XHRcdHNuYWNrYmFyU2hvd01lc3NhZ2UoYCR7cmVzdWx0LmVycm9yfWApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xyXG5cdFx0XHRcdHNuYWNrYmFyU2hvd01lc3NhZ2UoYCR7cmVzdWx0Lm1lc3NhZ2V9YCwgJ3N1Y2Nlc3MnKTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFJvdXRlci5yZWxvYWQoKTtcclxuXHRcdFx0XHR9LCAzMDAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxBZG1pbkhlYWRlcj5cclxuXHRcdFx0XHQ8QWRtaW4+XHJcblx0XHRcdFx0XHR7LyogRmlsIGQnYXJpYW5lICovfVxyXG5cdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1JyBzdHlsZT17eyBtYXJnaW46ICcxMHB4JyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdENvbnN1bHRhdGlvbiBkZSBsYSByw6lzZXJ2YXRpb25cclxuXHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0I3tyZXNlcnZhdGlvbi5faWR9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2NsaWVudC5jaXZpbGl0ZX0ge2NsaWVudC5ub219eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2NsaWVudC5wcmVub219XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdFx0XHRjb250YWluZXJcclxuXHRcdFx0XHRcdFx0ZGlyZWN0aW9uPSdyb3cnXHJcblx0XHRcdFx0XHRcdGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nXHJcblx0XHRcdFx0XHRcdGFsaWduSXRlbXM9J2ZsZXgtc3RhcnQnXHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IHBhZGRpbmc6ICc4cHgnIH19PlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b25Hcm91cFxyXG5cdFx0XHRcdFx0XHRcdFx0dmFyaWFudD0nY29udGFpbmVkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I9J3NlY29uZGFyeSdcclxuXHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J2NvbnRhaW5lZCBwcmltYXJ5IGJ1dHRvbiBncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e2dlbmVyYXRlQ29udHJhY3R9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7bG9hZGluZyA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Q2lyY3VsYXJQcm9ncmVzcyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdHw6luw6lyZXIgQ29udHJhdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbj5Hw6luw6lyZXIgRmFjdHVyZTwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbj5NYWlsIHBsYXRlZm9ybWU8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b24+RGVtYW5kZXIgcGFpZW1lbnQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdwcmltYXJ5Jz5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9hZG1pbi9yZXNlcnZhdGlvbic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3doaXRlJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRSZXRvdXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8UGFwZXIgc3R5bGU9e3sgcGFkZGluZzogJzE1cHgnIH19PlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXI+XHJcblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD0naDQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0SW5mb3JtYXRpb25zIHRhcmlmYWlyZXNcclxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxyXG5cdFx0XHRcdFx0XHRcdDxUYWJsZVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0nc2ltcGxlIHRhYmxlJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxUYWJsZUhlYWQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZVJvdz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0VG90YWwgc2FucyBzdXBwbMOpbWVudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+U3VwcGzDqW1lbnQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPlRheGVzIGRpdmVyc2VzPC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5Nw6luYWdlPC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5MaXQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPkFuaW1hdXg8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPlJlbWlzZTwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+UmVzdGUgw6AgcGF5ZXI8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZVJvdz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvVGFibGVIZWFkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRhYmxlQm9keT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlUm93PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24udG90YWxUYXJpZkJhc2V94oKsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi50b3RhbFRhcmlmU3VwcGx94oKsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi50YXhlU2Vqb3VyfeKCrFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24udG90YWxUZk1lbmFnZX3igqxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLnRvdGFsRnRMaXR94oKsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi5tdEFuaW1hdXh94oKsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi5yZW1pc2V94oKsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi5yZXN0ZUFQYXllcn3igqxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZVJvdz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvVGFibGVCb2R5PlxyXG5cdFx0XHRcdFx0XHRcdDwvVGFibGU+XHJcblx0XHRcdFx0XHRcdDwvVGFibGVDb250YWluZXI+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0XHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPSdzdGF0aWMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRhYnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3ZhbHVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdmdWxsV2lkdGgnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNjcm9sbEJ1dHRvbnM9J29mZidcclxuXHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0nc2Nyb2xsYWJsZSBwcmV2ZW50IHRhYnMgZXhhbXBsZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUYWJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPXs8U3RhcnNJY29uIC8+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J0luZm9zIGfDqW7DqXJhbGVzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5hMTF5UHJvcHMoMCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUYWJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPXs8RXVyb0ljb24gLz59XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0nUGFpZW1lbnRzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5hMTF5UHJvcHMoMSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUYWJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPXs8Q29udGFjdE1haWxJY29uIC8+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J0NsaWVudCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4uYTExeVByb3BzKDIpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGFiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17PEhvdXNlSWNvbiAvPn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPSdMb2NhdGlvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4uYTExeVByb3BzKDMpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGFiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17PFJlY2VpcHRJY29uIC8+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J0NvbnRyYXQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLmExMXlQcm9wcyg0KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvVGFicz5cclxuXHRcdFx0XHRcdFx0XHQ8L0FwcEJhcj5cclxuXHRcdFx0XHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17MH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtU3RhdHVzIHByZWxvYWRlZFZhbHVlcz17cmVzZXJ2YXRpb259IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1RhYlBhbmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezF9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybVBhaWVtZW50cyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9UYWJQYW5lbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXsyfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm1DbGllbnQgcHJlbG9hZGVkVmFsdWVzPXtjbGllbnR9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1RhYlBhbmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezN9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUxvY2F0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJlbG9hZGVkVmFsdWVzPXtyZXNlcnZhdGlvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvVGFiUGFuZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17NH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJhdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByZWxvYWRlZFZhbHVlcz17cmVzZXJ2YXRpb259XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1RhYlBhbmVsPlxyXG5cdFx0XHRcdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cclxuXHRcdFx0XHRcdDxNb2RhbFxyXG5cdFx0XHRcdFx0XHRhcmlhLWxhYmVsbGVkYnk9J3RyYW5zaXRpb24tbW9kYWwtdGl0bGUnXHJcblx0XHRcdFx0XHRcdGFyaWEtZGVzY3JpYmVkYnk9J3RyYW5zaXRpb24tbW9kYWwtZGVzY3JpcHRpb24nXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH1cclxuXHRcdFx0XHRcdFx0b3Blbj17b3Blbn1cclxuXHRcdFx0XHRcdFx0b25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcblx0XHRcdFx0XHRcdGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcblx0XHRcdFx0XHRcdEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuXHRcdFx0XHRcdFx0QmFja2Ryb3BQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRcdHRpbWVvdXQ6IDUwMCxcclxuXHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdDxGYWRlIGluPXtvcGVufT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDIgaWQ9J3RyYW5zaXRpb24tbW9kYWwtdGl0bGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRUcmFuc2l0aW9uIG1vZGFsXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgaWQ9J3RyYW5zaXRpb24tbW9kYWwtZGVzY3JpcHRpb24nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7LyogPFBkZlZpZXdlclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGU9e3BkZn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD17NTAwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhZ2VOdW1iZXI9ezJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+ICovfVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PG9iamVjdCBzcmM9e3BkZn0gLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9GYWRlPlxyXG5cdFx0XHRcdFx0PC9Nb2RhbD5cclxuXHRcdFx0XHQ8L0FkbWluPlxyXG5cdFx0XHQ8L0FkbWluSGVhZGVyPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG5cdGNvbnN0IHRva2VuID0gY29udGV4dC5yZXEuY29va2llcy50b2tlbjtcclxuXHRjb25zdCByZXMxID0gYXdhaXQgbGlzdGVPbmVSZXNlcnZhdGlvbihjb250ZXh0LnBhcmFtcy5pZCwgdG9rZW4pO1xyXG5cdGNvbnN0IHJlc2VydmF0aW9uID0gYXdhaXQgcmVzMTtcclxuXHQvLyBSZWN1cCBjbGllbnQsIGdpdGUsIHBhaWVtZW50XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRyZXNlcnZhdGlvbixcclxuXHRcdH0sXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcih3aXRoU25hY2tiYXIoUmVzZXJ2YXRpb25JZCkpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9