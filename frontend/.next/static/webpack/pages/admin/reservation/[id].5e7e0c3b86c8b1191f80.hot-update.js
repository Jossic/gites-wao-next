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
      lineNumber: 60,
      columnNumber: 3
    }
  }), value === index && __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_16__["default"], {
    p: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
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
    Object(_actions_reservationActions__WEBPACK_IMPORTED_MODULE_8__["createContract"])(reservation).then(function (result) {
      console.log('result pdf', result.pdf);

      if (result.error) {
        setLoading(false);
        snackbarShowMessage("".concat(result.error));
      } else {
        var blobPDF = new blob__WEBPACK_IMPORTED_MODULE_23__["default"]([result.pdf], {
          type: 'application/pdf'
        });
        console.log('blob pdf', blobPDF);
        setLoading(false);
        snackbarShowMessage("".concat(result.message), 'success');
        setPdf(blobPDF);
        setOpen(true); // setTimeout(() => {
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
      lineNumber: 193,
      columnNumber: 4
    }
  }, __jsx(_components_auth_Admin__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Grid"], {
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
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
      lineNumber: 198,
      columnNumber: 8
    }
  }, "Consultation de la r\xE9servation", __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 9
    }
  }, "#", reservation._id), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
    style: {
      color: 'green'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
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
      lineNumber: 210,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["ButtonGroup"], {
    variant: "contained",
    color: "secondary",
    "aria-label": "contained primary button group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Button"], {
    onClick: generateContract,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 9
    }
  }, "G\xE9n\xE9rer Contrat"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 9
    }
  }, "G\xE9n\xE9rer Facture"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 9
    }
  }, "Mail plateforme"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 9
    }
  }, "Demander paiement"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Button"], {
    variant: "contained",
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_34___default.a, {
    href: "/admin/reservation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
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
      lineNumber: 232,
      columnNumber: 10
    }
  }, "Retour"))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Paper"], {
    style: {
      padding: '15px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Grid"], {
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
    variant: "h4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 8
    }
  }, "Informations tarifaires")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableContainer"], {
    component: _material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Paper"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Table"], {
    className: classes.table,
    "aria-label": "simple table",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableHead"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableRow"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 10
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 11
    }
  }, "Total sans suppl\xE9ment"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 11
    }
  }, "Suppl\xE9ment"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 11
    }
  }, "Taxes diverses"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 11
    }
  }, "M\xE9nage"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 11
    }
  }, "Lit"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 11
    }
  }, "Animaux"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 11
    }
  }, "Remise"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 11
    }
  }, "Reste \xE0 payer"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableRow"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 10
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 11
    }
  }, reservation.totalTarifBase, "\u20AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 11
    }
  }, reservation.totalTarifSuppl, "\u20AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 11
    }
  }, reservation.taxeSejour, "\u20AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 11
    }
  }, reservation.totalTfMenage, "\u20AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 11
    }
  }, reservation.totalFtLit, "\u20AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 11
    }
  }, reservation.mtAnimaux, "\u20AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 11
    }
  }, reservation.remise, "\u20AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TableCell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 11
    }
  }, reservation.resteAPayer, "\u20AC"))))), __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_12__["default"], {
    position: "static",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
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
      lineNumber: 300,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    icon: __jsx(_material_ui_icons_Stars__WEBPACK_IMPORTED_MODULE_17___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 17
      }
    }),
    "aria-label": "Infos g\xE9n\xE9rales"
  }, a11yProps(0), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 10
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    icon: __jsx(_material_ui_icons_Euro__WEBPACK_IMPORTED_MODULE_18___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 17
      }
    }),
    "aria-label": "Paiements"
  }, a11yProps(1), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 10
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    icon: __jsx(_material_ui_icons_ContactMail__WEBPACK_IMPORTED_MODULE_19___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 17
      }
    }),
    "aria-label": "Client"
  }, a11yProps(2), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 10
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    icon: __jsx(_material_ui_icons_House__WEBPACK_IMPORTED_MODULE_20___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 17
      }
    }),
    "aria-label": "Location"
  }, a11yProps(3), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 10
    }
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    icon: __jsx(_material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_21___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 17
      }
    }),
    "aria-label": "Contrat"
  }, a11yProps(4), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 10
    }
  })))), __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 8
    }
  }, __jsx(TabPanel, {
    value: value,
    index: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 9
    }
  }, __jsx(_components_admin_forms_reservation_FormStatus__WEBPACK_IMPORTED_MODULE_26__["default"], {
    preloadedValues: reservation,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 10
    }
  })), __jsx(TabPanel, {
    value: value,
    index: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 9
    }
  }, __jsx(_components_admin_forms_reservation_FormPaiements__WEBPACK_IMPORTED_MODULE_29__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 10
    }
  })), __jsx(TabPanel, {
    value: value,
    index: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 9
    }
  }, __jsx(_components_admin_forms_reservation_FormClient__WEBPACK_IMPORTED_MODULE_27__["default"], {
    preloadedValues: client,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 10
    }
  })), __jsx(TabPanel, {
    value: value,
    index: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 9
    }
  }, __jsx(_components_admin_forms_reservation_FormLocation__WEBPACK_IMPORTED_MODULE_28__["default"], {
    preloadedValues: reservation,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 10
    }
  })), __jsx(TabPanel, {
    value: value,
    index: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 9
    }
  }, __jsx(_components_admin_forms_reservation_FormContrat__WEBPACK_IMPORTED_MODULE_30__["default"], {
    preloadedValues: reservation,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
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
      lineNumber: 357,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Fade"], {
    "in": open,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.paper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 8
    }
  }, __jsx("h2", {
    id: "transition-modal-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 9
    }
  }, "Transition modal"), __jsx("p", {
    id: "transition-modal-description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 9
    }
  }, __jsx("iframe", {
    src: pdf.data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24vL2luZGV4LmpzIl0sIm5hbWVzIjpbIlBkZlZpZXdlciIsImR5bmFtaWMiLCJzc3IiLCJUYWJQYW5lbCIsImNoaWxkcmVuIiwidmFsdWUiLCJpbmRleCIsIm90aGVyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImFueSIsImlzUmVxdWlyZWQiLCJhMTF5UHJvcHMiLCJpZCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwibWluSGVpZ2h0IiwibW9kYWwiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFwZXIiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsImJvcmRlciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJwYWRkaW5nIiwic3BhY2luZyIsIlJlc2VydmF0aW9uSWQiLCJyZXNlcnZhdGlvbiIsInJvdXRlciIsInNuYWNrYmFyU2hvd01lc3NhZ2UiLCJjbGFzc2VzIiwidG9rZW4iLCJnZXRDb29raWUiLCJ1c2VTdGF0ZSIsInNldFZhbHVlIiwicGRmIiwic2V0UGRmIiwiY2xpZW50Iiwic2V0Q2xpZW50IiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VGb3JtIiwiZGVmYXVsdFZhbHVlcyIsImNvbnRyb2wiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsIlJlYWN0Iiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xvc2UiLCJsaXN0ZXJVbkNsaWVudCIsImdldENsaWVudEJ5SWQiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImdlbmVyYXRlQ29udHJhY3QiLCJjcmVhdGVDb250cmFjdCIsInJlc3VsdCIsImJsb2JQREYiLCJCbG9iIiwidHlwZSIsIm1lc3NhZ2UiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwib25TdWJtaXQiLCJ1cGRhdGVHaXRlIiwicXVlcnkiLCJzZXRUaW1lb3V0IiwiUm91dGVyIiwicmVsb2FkIiwibWFyZ2luIiwiY29sb3IiLCJfaWQiLCJjaXZpbGl0ZSIsIm5vbSIsInByZW5vbSIsInRleHREZWNvcmF0aW9uIiwiUGFwZXIiLCJ0YWJsZSIsInRvdGFsVGFyaWZCYXNlIiwidG90YWxUYXJpZlN1cHBsIiwidGF4ZVNlam91ciIsInRvdGFsVGZNZW5hZ2UiLCJ0b3RhbEZ0TGl0IiwibXRBbmltYXV4IiwicmVtaXNlIiwicmVzdGVBUGF5ZXIiLCJCYWNrZHJvcCIsInRpbWVvdXQiLCJ3aXRoUm91dGVyIiwid2l0aFNuYWNrYmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvREFBTyxNQUN4QjtBQUFBLFNBQU0sOEpBQU47QUFBQSxDQUR3QixFQUV4QjtBQUFFQyxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUE7QUFBQSxrQ0FEYSwrRUFDYjtBQUFBO0FBQUEsY0FEYSx3Q0FDYjtBQUFBO0FBQUEsQ0FGd0IsQ0FBekI7TUFBTUYsUztBQUlOO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0csUUFBVCxPQUF3RDtBQUFBLE1BQXBDQyxRQUFvQyxRQUFwQ0EsUUFBb0M7QUFBQSxNQUExQkMsS0FBMEIsUUFBMUJBLEtBQTBCO0FBQUEsTUFBbkJDLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLE1BQVRDLEtBQVM7O0FBQ3ZELFNBQ0M7QUFDQyxRQUFJLEVB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O0FBZ01BLENBblJEOztHQUFNNUIsYTtVQUNXcEIsUyxFQVM0Qm1DLHVEOzs7TUFWdkNmLGE7O0FBa1NTLHFFQUFBb0UsOERBQVUsT0FBQ0MsOEVBQVksQ0FBQ3JFLGFBQUQsQ0FBYixDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9yZXNlcnZhdGlvbi9baWRdLjVlN2UwYzNiODZjOGIxMTkxZjgwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRtaW5IZWFkZXIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvQWRtaW5IZWFkZXInO1xyXG5pbXBvcnQgQWRtaW4gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9hdXRoL0FkbWluJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtcclxuXHRjcmVhdGVDb250cmFjdCxcclxuXHRsaXN0ZU9uZVJlc2VydmF0aW9uLFxyXG59IGZyb20gJy4uLy4uLy4uLy4uL2FjdGlvbnMvcmVzZXJ2YXRpb25BY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XHJcbmltcG9ydCBUYWJzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYnMnO1xyXG5pbXBvcnQgVGFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XHJcbmltcG9ydCBTdGFyc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJzJztcclxuaW1wb3J0IEV1cm9JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FdXJvJztcclxuaW1wb3J0IENvbnRhY3RNYWlsSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ29udGFjdE1haWwnO1xyXG5pbXBvcnQgSG91c2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ib3VzZSc7XHJcbmltcG9ydCBSZWNlaXB0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUmVjZWlwdCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCbG9iIGZyb20gJ2Jsb2InO1xyXG5cclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuXHJcbmNvbnN0IFBkZlZpZXdlciA9IGR5bmFtaWMoXHJcblx0KCkgPT4gaW1wb3J0KCcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2FkbWluL1BERlZpZXdlcicpLFxyXG5cdHsgc3NyOiBmYWxzZSB9XHJcbik7XHJcbmltcG9ydCB7XHJcblx0R3JpZCxcclxuXHRQYXBlcixcclxuXHRCdXR0b24sXHJcblx0QnV0dG9uR3JvdXAsXHJcblx0VGFibGUsXHJcblx0VGFibGVCb2R5LFxyXG5cdFRhYmxlQ2VsbCxcclxuXHRUYWJsZUNvbnRhaW5lcixcclxuXHRUYWJsZUhlYWQsXHJcblx0TW9kYWwsXHJcblx0QmFja2Ryb3AsXHJcblx0RmFkZSxcclxuXHRUYWJsZVJvdyxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5pbXBvcnQgRm9ybVN0YXR1cyBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2FkbWluL2Zvcm1zL3Jlc2VydmF0aW9uL0Zvcm1TdGF0dXMnO1xyXG5pbXBvcnQgRm9ybUNsaWVudCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2FkbWluL2Zvcm1zL3Jlc2VydmF0aW9uL0Zvcm1DbGllbnQnO1xyXG5pbXBvcnQgRm9ybUxvY2F0aW9uIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW4vZm9ybXMvcmVzZXJ2YXRpb24vRm9ybUxvY2F0aW9uJztcclxuaW1wb3J0IEZvcm1QYWllbWVudHMgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9yZXNlcnZhdGlvbi9Gb3JtUGFpZW1lbnRzJztcclxuaW1wb3J0IEZvcm1Db250cmF0IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW4vZm9ybXMvcmVzZXJ2YXRpb24vRm9ybUNvbnRyYXQnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB3aXRoU25hY2tiYXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL0hPQy9TbmFja2Jhcic7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRDbGllbnRCeUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vYWN0aW9ucy9jbGllbnRBY3Rpb25zJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5mdW5jdGlvbiBUYWJQYW5lbCh7IGNoaWxkcmVuLCB2YWx1ZSwgaW5kZXgsIC4uLm90aGVyIH0pIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRyb2xlPSd0YWJwYW5lbCdcclxuXHRcdFx0aGlkZGVuPXt2YWx1ZSAhPT0gaW5kZXh9XHJcblx0XHRcdGlkPXtgc2Nyb2xsYWJsZS1wcmV2ZW50LXRhYnBhbmVsLSR7aW5kZXh9YH1cclxuXHRcdFx0YXJpYS1sYWJlbGxlZGJ5PXtgc2Nyb2xsYWJsZS1wcmV2ZW50LXRhYi0ke2luZGV4fWB9XHJcblx0XHRcdHsuLi5vdGhlcn0+XHJcblx0XHRcdHt2YWx1ZSA9PT0gaW5kZXggJiYgKFxyXG5cdFx0XHRcdDxCb3ggcD17M30+XHJcblx0XHRcdFx0XHQ8VHlwb2dyYXBoeT57Y2hpbGRyZW59PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuVGFiUGFuZWwucHJvcFR5cGVzID0ge1xyXG5cdGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuXHRpbmRleDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxyXG5cdHZhbHVlOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBhMTF5UHJvcHMoaW5kZXgpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0aWQ6IGBzY3JvbGxhYmxlLXByZXZlbnQtdGFiLSR7aW5kZXh9YCxcclxuXHRcdCdhcmlhLWNvbnRyb2xzJzogYHNjcm9sbGFibGUtcHJldmVudC10YWJwYW5lbC0ke2luZGV4fWAsXHJcblx0fTtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0cm9vdDoge1xyXG5cdFx0ZmxleEdyb3c6IDEsXHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnIzU4NTg1OCcsXHJcblx0XHRtaW5IZWlnaHQ6ICc1MHZoJyxcclxuXHR9LFxyXG5cdG1vZGFsOiB7XHJcblx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuXHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuXHR9LFxyXG5cdHBhcGVyOiB7XHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuXHRcdGJvcmRlcjogJzJweCBzb2xpZCAjMDAwJyxcclxuXHRcdGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcclxuXHRcdHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXHJcblx0fSxcclxufSkpO1xyXG5cclxuY29uc3QgUmVzZXJ2YXRpb25JZCA9ICh7IHJlc2VydmF0aW9uLCByb3V0ZXIsIHNuYWNrYmFyU2hvd01lc3NhZ2UgfSkgPT4ge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHRjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuXHRjb25zdCBbcGRmLCBzZXRQZGZdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuXHRjb25zdCBbY2xpZW50LCBzZXRDbGllbnRdID0gdXNlU3RhdGUoe30pO1xyXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Y29uc3QgeyBjb250cm9sLCByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKHtcclxuXHRcdGRlZmF1bHRWYWx1ZXM6IHJlc2VydmF0aW9uLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcblx0XHRzZXRPcGVuKHRydWUpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG5cdFx0c2V0T3BlbihmYWxzZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbGlzdGVyVW5DbGllbnQgPSAoKSA9PiB7XHJcblx0XHRnZXRDbGllbnRCeUlkKHJlc2VydmF0aW9uLmNsaWVudCwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0Q2xpZW50KGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGlzdGVyVW5DbGllbnQoKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnN0IGdlbmVyYXRlQ29udHJhY3QgPSAoKSA9PiB7XHJcblx0XHRzZXRMb2FkaW5nKHRydWUpO1xyXG5cdFx0Y3JlYXRlQ29udHJhY3QocmVzZXJ2YXRpb24pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygncmVzdWx0IHBkZicsIHJlc3VsdC5wZGYpO1xyXG5cdFx0XHRpZiAocmVzdWx0LmVycm9yKSB7XHJcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHRcdFx0c25hY2tiYXJTaG93TWVzc2FnZShgJHtyZXN1bHQuZXJyb3J9YCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29uc3QgYmxvYlBERiA9IG5ldyBCbG9iKFtyZXN1bHQucGRmXSwge1xyXG5cdFx0XHRcdFx0dHlwZTogJ2FwcGxpY2F0aW9uL3BkZicsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2Jsb2IgcGRmJywgYmxvYlBERik7XHJcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHRcdFx0c25hY2tiYXJTaG93TWVzc2FnZShgJHtyZXN1bHQubWVzc2FnZX1gLCAnc3VjY2VzcycpO1xyXG5cdFx0XHRcdHNldFBkZihibG9iUERGKTtcclxuXHRcdFx0XHRzZXRPcGVuKHRydWUpO1xyXG5cdFx0XHRcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdC8vIFx0Um91dGVyLnJlbG9hZCgpO1xyXG5cdFx0XHRcdC8vIH0sIDMwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XHJcblx0XHRzZXRWYWx1ZShuZXdWYWx1ZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRzZXRMb2FkaW5nKHRydWUpO1xyXG5cdFx0dXBkYXRlR2l0ZShkYXRhLCByb3V0ZXIucXVlcnkuaWQsIHRva2VuKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3Jlc3VsdCcsIHJlc3VsdCk7XHJcblx0XHRcdGlmIChyZXN1bHQuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0XHRzbmFja2JhclNob3dNZXNzYWdlKGAke3Jlc3VsdC5lcnJvcn1gKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0XHRzbmFja2JhclNob3dNZXNzYWdlKGAke3Jlc3VsdC5tZXNzYWdlfWAsICdzdWNjZXNzJyk7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRSb3V0ZXIucmVsb2FkKCk7XHJcblx0XHRcdFx0fSwgMzAwMCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8QWRtaW5IZWFkZXI+XHJcblx0XHRcdFx0PEFkbWluPlxyXG5cdFx0XHRcdFx0ey8qIEZpbCBkJ2FyaWFuZSAqL31cclxuXHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lcj5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PSdoNScgc3R5bGU9e3sgbWFyZ2luOiAnMTBweCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRDb25zdWx0YXRpb24gZGUgbGEgcsOpc2VydmF0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCN7cmVzZXJ2YXRpb24uX2lkfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtjbGllbnQuY2l2aWxpdGV9IHtjbGllbnQubm9tfXsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtjbGllbnQucHJlbm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PEdyaWRcclxuXHRcdFx0XHRcdFx0Y29udGFpbmVyXHJcblx0XHRcdFx0XHRcdGRpcmVjdGlvbj0ncm93J1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5PSdzcGFjZS1iZXR3ZWVuJ1xyXG5cdFx0XHRcdFx0XHRhbGlnbkl0ZW1zPSdmbGV4LXN0YXJ0J1xyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBwYWRkaW5nOiAnOHB4JyB9fT5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXBcclxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yPSdzZWNvbmRhcnknXHJcblx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPSdjb250YWluZWQgcHJpbWFyeSBidXR0b24gZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXtnZW5lcmF0ZUNvbnRyYWN0fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0R8OpbsOpcmVyIENvbnRyYXRcclxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbj5Hw6luw6lyZXIgRmFjdHVyZTwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbj5NYWlsIHBsYXRlZm9ybWU8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b24+RGVtYW5kZXIgcGFpZW1lbnQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdwcmltYXJ5Jz5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9hZG1pbi9yZXNlcnZhdGlvbic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3doaXRlJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRSZXRvdXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8UGFwZXIgc3R5bGU9e3sgcGFkZGluZzogJzE1cHgnIH19PlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXI+XHJcblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD0naDQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0SW5mb3JtYXRpb25zIHRhcmlmYWlyZXNcclxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxyXG5cdFx0XHRcdFx0XHRcdDxUYWJsZVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0nc2ltcGxlIHRhYmxlJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxUYWJsZUhlYWQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZVJvdz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0VG90YWwgc2FucyBzdXBwbMOpbWVudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+U3VwcGzDqW1lbnQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPlRheGVzIGRpdmVyc2VzPC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5Nw6luYWdlPC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5MaXQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPkFuaW1hdXg8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPlJlbWlzZTwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+UmVzdGUgw6AgcGF5ZXI8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZVJvdz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvVGFibGVIZWFkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRhYmxlQm9keT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlUm93PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24udG90YWxUYXJpZkJhc2V94oKsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi50b3RhbFRhcmlmU3VwcGx94oKsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi50YXhlU2Vqb3VyfeKCrFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24udG90YWxUZk1lbmFnZX3igqxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLnRvdGFsRnRMaXR94oKsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi5tdEFuaW1hdXh94oKsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi5yZW1pc2V94oKsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi5yZXN0ZUFQYXllcn3igqxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZVJvdz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvVGFibGVCb2R5PlxyXG5cdFx0XHRcdFx0XHRcdDwvVGFibGU+XHJcblx0XHRcdFx0XHRcdDwvVGFibGVDb250YWluZXI+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0XHRcdFx0XHQ8QXBwQmFyIHBvc2l0aW9uPSdzdGF0aWMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRhYnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3ZhbHVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdmdWxsV2lkdGgnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNjcm9sbEJ1dHRvbnM9J29mZidcclxuXHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0nc2Nyb2xsYWJsZSBwcmV2ZW50IHRhYnMgZXhhbXBsZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUYWJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPXs8U3RhcnNJY29uIC8+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J0luZm9zIGfDqW7DqXJhbGVzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5hMTF5UHJvcHMoMCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUYWJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPXs8RXVyb0ljb24gLz59XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0nUGFpZW1lbnRzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5hMTF5UHJvcHMoMSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUYWJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPXs8Q29udGFjdE1haWxJY29uIC8+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J0NsaWVudCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4uYTExeVByb3BzKDIpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGFiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17PEhvdXNlSWNvbiAvPn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPSdMb2NhdGlvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4uYTExeVByb3BzKDMpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGFiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17PFJlY2VpcHRJY29uIC8+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J0NvbnRyYXQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLmExMXlQcm9wcyg0KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvVGFicz5cclxuXHRcdFx0XHRcdFx0XHQ8L0FwcEJhcj5cclxuXHRcdFx0XHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17MH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtU3RhdHVzIHByZWxvYWRlZFZhbHVlcz17cmVzZXJ2YXRpb259IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1RhYlBhbmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezF9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybVBhaWVtZW50cyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9UYWJQYW5lbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXsyfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm1DbGllbnQgcHJlbG9hZGVkVmFsdWVzPXtjbGllbnR9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1RhYlBhbmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezN9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUxvY2F0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJlbG9hZGVkVmFsdWVzPXtyZXNlcnZhdGlvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvVGFiUGFuZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17NH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJhdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByZWxvYWRlZFZhbHVlcz17cmVzZXJ2YXRpb259XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1RhYlBhbmVsPlxyXG5cdFx0XHRcdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cclxuXHRcdFx0XHRcdDxNb2RhbFxyXG5cdFx0XHRcdFx0XHRhcmlhLWxhYmVsbGVkYnk9J3RyYW5zaXRpb24tbW9kYWwtdGl0bGUnXHJcblx0XHRcdFx0XHRcdGFyaWEtZGVzY3JpYmVkYnk9J3RyYW5zaXRpb24tbW9kYWwtZGVzY3JpcHRpb24nXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH1cclxuXHRcdFx0XHRcdFx0b3Blbj17b3Blbn1cclxuXHRcdFx0XHRcdFx0b25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcblx0XHRcdFx0XHRcdGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcblx0XHRcdFx0XHRcdEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuXHRcdFx0XHRcdFx0QmFja2Ryb3BQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRcdHRpbWVvdXQ6IDUwMCxcclxuXHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdDxGYWRlIGluPXtvcGVufT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDIgaWQ9J3RyYW5zaXRpb24tbW9kYWwtdGl0bGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRUcmFuc2l0aW9uIG1vZGFsXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgaWQ9J3RyYW5zaXRpb24tbW9kYWwtZGVzY3JpcHRpb24nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aWZyYW1lIHNyYz17cGRmLmRhdGF9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvRmFkZT5cclxuXHRcdFx0XHRcdDwvTW9kYWw+XHJcblx0XHRcdFx0PC9BZG1pbj5cclxuXHRcdFx0PC9BZG1pbkhlYWRlcj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuXHRjb25zdCB0b2tlbiA9IGNvbnRleHQucmVxLmNvb2tpZXMudG9rZW47XHJcblx0Y29uc3QgcmVzMSA9IGF3YWl0IGxpc3RlT25lUmVzZXJ2YXRpb24oY29udGV4dC5wYXJhbXMuaWQsIHRva2VuKTtcclxuXHRjb25zdCByZXNlcnZhdGlvbiA9IGF3YWl0IHJlczE7XHJcblx0Ly8gUmVjdXAgY2xpZW50LCBnaXRlLCBwYWllbWVudFxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0cmVzZXJ2YXRpb24sXHJcblx0XHR9LFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIod2l0aFNuYWNrYmFyKFJlc2VydmF0aW9uSWQpKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==