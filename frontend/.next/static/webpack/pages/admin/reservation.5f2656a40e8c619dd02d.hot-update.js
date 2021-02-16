webpackHotUpdate_N_E("pages/admin/reservation",{

/***/ "./components/admin/lists/ListReservation.js":
/*!***************************************************!*\
  !*** ./components/admin/lists/ListReservation.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var _actions_messageActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../actions/messageActions */ "./actions/messageActions.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mui-datatables */ "./node_modules/mui-datatables/dist/index.js");
/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mui_datatables__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_icons_Reply__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Reply */ "./node_modules/@material-ui/icons/Reply.js");
/* harmony import */ var _material_ui_icons_Reply__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Reply__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_FiberNew__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/FiberNew */ "./node_modules/@material-ui/icons/FiberNew.js");
/* harmony import */ var _material_ui_icons_FiberNew__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FiberNew__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_CheckBox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/CheckBox */ "./node_modules/@material-ui/icons/CheckBox.js");
/* harmony import */ var _material_ui_icons_CheckBox__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckBox__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_CheckBoxOutlineBlank__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/CheckBoxOutlineBlank */ "./node_modules/@material-ui/icons/CheckBoxOutlineBlank.js");
/* harmony import */ var _material_ui_icons_CheckBoxOutlineBlank__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckBoxOutlineBlank__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "./node_modules/@material-ui/icons/Visibility.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/DeleteForever */ "./node_modules/@material-ui/icons/DeleteForever.js");
/* harmony import */ var _material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _actions_reservationActions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../actions/reservationActions */ "./actions/reservationActions.js");
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var _components_GiteNom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../components/GiteNom */ "./components/GiteNom.js");




var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\lists\\ListReservation.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import { Table } from 'reactstrap';





 // import AddBoxIcon from '@material-ui/icons/AddBox';

















function Alert(props) {
  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_18__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    elevation: 6,
    variant: "filled"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }));
}

_c = Alert;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  return {
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2)
      }
    }
  };
});

var ListReservation = function ListReservation(_ref) {
  _s();

  var reservations = _ref.reservations,
      newReservation = _ref.newReservation,
      router = _ref.router;
  var classes = useStyles();
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_5__["getCookie"])('token');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      gites = _useState[0],
      setGites = _useState[1];

  var listeDesGites = function listeDesGites() {
    listeDesGites().then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        setGites([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(gites), [data]));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    listeDesGites();
  }, []); //Ajouter le delete et multiple delete

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    loading: false,
    error: '',
    success: '',
    message: ''
  }),
      values = _useState2[0],
      setvalues = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      open = _useState3[0],
      setOpen = _useState3[1];

  var loading = values.loading,
      success = values.success,
      error = values.error,
      message = values.message;

  var handleClose = function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setvalues(_objectSpread(_objectSpread({}, values), {}, {
      success: false,
      error: false
    }));
    setOpen(false);
  };

  var deleteReservation = function deleteReservation(id) {
    setvalues(_objectSpread(_objectSpread({}, values), {}, {
      loading: true
    }));
    Object(_actions_reservationActions__WEBPACK_IMPORTED_MODULE_20__["removeReservation"])(id, token).then(function (data) {
      console.log('data vaut', data);

      if (data.error) {
        setvalues(_objectSpread(_objectSpread({}, values), {}, {
          loading: false,
          error: true,
          success: false
        }));
      } else {
        setvalues(_objectSpread(_objectSpread({}, values), {}, {
          open: true,
          loading: false,
          error: '',
          success: true,
          message: data.message
        }));
        setTimeout(function () {
          router.reload();
        }, 3000);
      }
    });
  };

  var deleteConfirm = function deleteConfirm(id) {
    if (true) {
      var answer = window.confirm("Suppression de la r\xE9servation ".concat(id, ", \xEAtes-vous s\xFBr ?"));

      if (answer) {
        deleteReservation(id);
      }
    }
  };

  var columns = [{
    name: '_id',
    label: '#',
    options: {
      filter: true,
      sort: true
    }
  }, {
    name: 'client',
    label: 'Client',
    options: {
      filter: true,
      sort: true
    }
  }, {
    name: 'gite',
    label: 'Gite',
    options: {
      filter: true,
      sort: false,
      customBodyRender: function customBodyRender(value, tableMeta, updateValue) {
        return __jsx(_components_GiteNom__WEBPACK_IMPORTED_MODULE_22__["default"], {
          value: value,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }
        }); // return gites.map((gite) => {
        // 	console.log('le gite =>', gite._id === value);
        // 	<p>{value === gite._id && gite.slug}</p>;
        // });
      }
    }
  }, {
    name: 'status',
    label: 'Status',
    options: {
      filter: true,
      sort: false
    }
  }, {
    name: 'dateArrivee',
    label: "Date d'arrivee",
    options: {
      filter: true,
      sort: false
    }
  }, {
    name: 'dateDepart',
    label: 'Date de départ',
    options: {
      filter: true,
      sort: false
    }
  }, // {
  // 	name: 'msg',
  // 	label: 'Message',
  // 	options: {
  // 		filter: true,
  // 		sort: false,
  // 		customBodyRender: (value, tableMeta, updateValue) => {
  // 			return <p>{value.substring(0, 20) + '...'}</p>;
  // 		},
  // 	},
  // },
  // {
  // 	name: 'vu',
  // 	label: 'Non lu',
  // 	options: {
  // 		filter: true,
  // 		customBodyRender: (value, tableMeta, updateValue) => {
  // 			return (
  // 				!value && (
  // 					<FiberNewIcon
  // 						fontSize='large'
  // 						style={{ color: 'green' }}
  // 					/>
  // 				)
  // 			);
  // 		},
  // 	},
  // },
  // {
  // 	name: 'repondu',
  // 	label: 'Répondu',
  // 	options: {
  // 		filter: true,
  // 		customBodyRender: (value, tableMeta, updateValue) => {
  // 			return value ? (
  // 				<CheckBoxIcon />
  // 			) : (
  // 				<CheckBoxOutlineBlankIcon />
  // 			);
  // 		},
  // 	},
  // },
  {
    name: 'Consulter',
    options: {
      sort: false,
      filter: false,
      customBodyRender: function customBodyRender(value, tableMeta, updateValue) {
        // console.log(tableMeta.rowData);
        return !tableMeta.rowData[6] ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["IconButton"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 7
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/admin/reservation/".concat(tableMeta.rowData[0]),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 8
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 9
          }
        }, __jsx(_material_ui_icons_Reply__WEBPACK_IMPORTED_MODULE_10___default.a, {
          fontSize: "large",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 10
          }
        })))) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["IconButton"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 7
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/admin/reservation/".concat(tableMeta.rowData[0]),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 8
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 9
          }
        }, __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_14___default.a, {
          fontSize: "large",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 10
          }
        }))));
      }
    }
  }, {
    name: 'Suppr',
    options: {
      customBodyRender: function customBodyRender(value, tableMeta, updateValue) {
        // console.log(tableMeta.rowData);
        return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["IconButton"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 254,
            columnNumber: 7
          }
        }, __jsx(_material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_15___default.a, {
          style: {
            fontSize: '30px',
            color: 'red'
          },
          onClick: function onClick() {
            return deleteConfirm(tableMeta.rowData[0]);
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 8
          }
        }));
      }
    }
  }];
  var options = {
    filterType: 'checkbox',
    selectableRows: 'none',
    setRowProps: function setRowProps(row, dataIndex, rowIndex) {
      //Mettre style selon la courleur du gîte et format brillant selon le status
      console.log('row =>', row[2].props.value);
      console.log('gites =>', gites); // gites.map((gite) => {
      // 	console.log('gite :', gite);
      // 	console.log('id du gite :', gite._id);
      // 	if (row[2].props.value === gite._id) {
      // 		return { style: { background: gite.couleur1 } };
      // 	}
      // });
      // console.log('dataIndex =>', dataIndex);
      // console.log('rowIndex =>', rowIndex);
    }
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, loading && __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 16
    }
  }), success && __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_16__["default"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 5
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 6
    }
  }, message)), error && __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_16__["default"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 5
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 6
    }
  }, error)), __jsx("p", {
    style: {
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 4
    }
  }, newReservation > 0 ? "Vous avez ".concat(newReservation, " nouvelles r\xE9servations !") : "Aucune nouvelle r\xE9servation !"), __jsx(mui_datatables__WEBPACK_IMPORTED_MODULE_8___default.a, {
    title: 'Reservations',
    data: reservations,
    columns: columns,
    options: options,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 4
    }
  }));
};

_s(ListReservation, "cx4FAZ0U3Y0bi+cX1kV+/JUNW0U=", false, function () {
  return [useStyles];
});

_c2 = ListReservation;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = Object(next_router__WEBPACK_IMPORTED_MODULE_17__["withRouter"])(ListReservation));

var _c, _c2, _c3;

$RefreshReg$(_c, "Alert");
$RefreshReg$(_c2, "ListReservation");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0UmVzZXJ2YXRpb24uanMiXSwibmFtZXMiOlsiQWxlcnQiLCJwcm9wcyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJMaXN0UmVzZXJ2YXRpb24iLCJyZXNlcnZhdGlvbnMiLCJuZXdSZXNlcnZhdGlvbiIsInJvdXRlciIsImNsYXNzZXMiLCJ0b2tlbiIsImdldENvb2tpZSIsInVzZVN0YXRlIiwiZ2l0ZXMiLCJzZXRHaXRlcyIsImxpc3RlRGVzR2l0ZXMiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImxvYWRpbmciLCJzdWNjZXNzIiwibWVzc2FnZSIsInZhbHVlcyIsInNldHZhbHVlcyIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlQ2xvc2UiLCJldmVudCIsInJlYXNvbiIsImRlbGV0ZVJlc2VydmF0aW9uIiwiaWQiLCJyZW1vdmVSZXNlcnZhdGlvbiIsInNldFRpbWVvdXQiLCJyZWxvYWQiLCJkZWxldGVDb25maXJtIiwiYW5zd2VyIiwid2luZG93IiwiY29uZmlybSIsImNvbHVtbnMiLCJuYW1lIiwibGFiZWwiLCJvcHRpb25zIiwiZmlsdGVyIiwic29ydCIsImN1c3RvbUJvZHlSZW5kZXIiLCJ2YWx1ZSIsInRhYmxlTWV0YSIsInVwZGF0ZVZhbHVlIiwicm93RGF0YSIsImZvbnRTaXplIiwiY29sb3IiLCJmaWx0ZXJUeXBlIiwic2VsZWN0YWJsZVJvd3MiLCJzZXRSb3dQcm9wcyIsInJvdyIsImRhdGFJbmRleCIsInJvd0luZGV4Iiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FF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QSxXQUFoQjtBQUE2QixZQUFRLEVBQUMsU0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFTCxPQURGLENBSkQsQ0FIRixFQVlFTixLQUFLLElBQ0wsTUFBQyxtRUFBRDtBQUNDLFFBQUksRUFBRVMsSUFEUDtBQUVDLG9CQUFnQixFQUFFLElBRm5CO0FBR0MsV0FBTyxFQUFFRSxXQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJQyxNQUFDLEtBQUQ7QUFBTyxXQUFPLEVBQUVBLFdBQWhCO0FBQTZCLFlBQVEsRUFBQyxPQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VYLEtBREYsQ0FKRCxDQWJGLEVBc0JDO0FBQUcsU0FBSyxFQUFFO0FBQUVtQyxXQUFLLEVBQUU7QUFBVCxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTlDLGNBQWMsR0FBRyxDQUFqQix1QkFDZUEsY0FEZixzRUFERixDQXRCRCxFQTJCQyxNQUFDLHFEQUFEO0FBQ0MsU0FBSyxFQUFFLGNBRFI7QUFFQyxRQUFJLEVBQUVELFlBRlA7QUFHQyxXQUFPLEVBQUVtQyxPQUhWO0FBSUMsV0FBTyxFQUFFRyxPQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQkQsQ0FERDtBQW9DQSxDQWxTRDs7R0FBTXZDLGU7VUFDV1AsUzs7O01BRFhPLGU7QUFvU1MscUVBQUF1RCwrREFBVSxDQUFDdkQsZUFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9yZXNlcnZhdGlvbi41ZjI2NTZhNDBlOGM2MTlkZDAyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgVGFibGUgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IHJlbW92ZU1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL21lc3NhZ2VBY3Rpb25zJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBNVUlEYXRhVGFibGUgZnJvbSAnbXVpLWRhdGF0YWJsZXMnO1xyXG4vLyBpbXBvcnQgQWRkQm94SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkQm94JztcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XHJcbmltcG9ydCBSZXBseUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlcGx5JztcclxuaW1wb3J0IEZpYmVyTmV3SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmliZXJOZXcnO1xyXG5pbXBvcnQgQ2hlY2tCb3hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGVja0JveCc7XHJcbmltcG9ydCBDaGVja0JveE91dGxpbmVCbGFua0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrQm94T3V0bGluZUJsYW5rJztcclxuaW1wb3J0IFZpc2liaWxpdHlJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9WaXNpYmlsaXR5JztcclxuaW1wb3J0IERlbGV0ZUZvcmV2ZXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EZWxldGVGb3JldmVyJztcclxuaW1wb3J0IFNuYWNrYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IE11aUFsZXJ0IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQWxlcnQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgcmVtb3ZlUmVzZXJ2YXRpb24gfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL3Jlc2VydmF0aW9uQWN0aW9ucyc7XHJcbmltcG9ydCB7IGxpc3RlRGVzR2l0ZXMsIGxpc3RHaXRlQnlJZCB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5pbXBvcnQgR2l0ZU5vbSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0dpdGVOb20nO1xyXG5cclxuZnVuY3Rpb24gQWxlcnQocHJvcHMpIHtcclxuXHRyZXR1cm4gPE11aUFsZXJ0IGVsZXZhdGlvbj17Nn0gdmFyaWFudD0nZmlsbGVkJyB7Li4ucHJvcHN9IC8+O1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRyb290OiB7XHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0JyYgPiAqICsgKic6IHtcclxuXHRcdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdFx0fSxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5jb25zdCBMaXN0UmVzZXJ2YXRpb24gPSAoeyByZXNlcnZhdGlvbnMsIG5ld1Jlc2VydmF0aW9uLCByb3V0ZXIgfSkgPT4ge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblxyXG5cdGNvbnN0IFtnaXRlcywgc2V0R2l0ZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHRjb25zdCBsaXN0ZURlc0dpdGVzID0gKCkgPT4ge1xyXG5cdFx0bGlzdGVEZXNHaXRlcygpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0R2l0ZXMoWy4uLmdpdGVzLCBkYXRhXSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsaXN0ZURlc0dpdGVzKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHQvL0Fqb3V0ZXIgbGUgZGVsZXRlIGV0IG11bHRpcGxlIGRlbGV0ZVxyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldHZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdGVycm9yOiAnJyxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0bWVzc2FnZTogJycsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Y29uc3QgeyBsb2FkaW5nLCBzdWNjZXNzLCBlcnJvciwgbWVzc2FnZSB9ID0gdmFsdWVzO1xyXG5cclxuXHRjb25zdCBoYW5kbGVDbG9zZSA9IChldmVudCwgcmVhc29uKSA9PiB7XHJcblx0XHRpZiAocmVhc29uID09PSAnY2xpY2thd2F5Jykge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0dmFsdWVzKHsgLi4udmFsdWVzLCBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGZhbHNlIH0pO1xyXG5cdFx0c2V0T3BlbihmYWxzZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZGVsZXRlUmVzZXJ2YXRpb24gPSAoaWQpID0+IHtcclxuXHRcdHNldHZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHRcdHJlbW92ZVJlc2VydmF0aW9uKGlkLCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZGF0YSB2YXV0JywgZGF0YSk7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0c2V0dmFsdWVzKHtcclxuXHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdFx0ZXJyb3I6IHRydWUsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmYWxzZSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXR2YWx1ZXMoe1xyXG5cdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0b3BlbjogdHJ1ZSxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdFx0ZXJyb3I6ICcnLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IGRhdGEubWVzc2FnZSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHJvdXRlci5yZWxvYWQoKTtcclxuXHRcdFx0XHR9LCAzMDAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZGVsZXRlQ29uZmlybSA9IChpZCkgPT4ge1xyXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdGxldCBhbnN3ZXIgPSB3aW5kb3cuY29uZmlybShcclxuXHRcdFx0XHRgU3VwcHJlc3Npb24gZGUgbGEgcsOpc2VydmF0aW9uICR7aWR9LCDDqnRlcy12b3VzIHPDu3IgP2BcclxuXHRcdFx0KTtcclxuXHRcdFx0aWYgKGFuc3dlcikge1xyXG5cdFx0XHRcdGRlbGV0ZVJlc2VydmF0aW9uKGlkKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNvbHVtbnMgPSBbXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdfaWQnLFxyXG5cdFx0XHRsYWJlbDogJyMnLFxyXG5cdFx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFx0ZmlsdGVyOiB0cnVlLFxyXG5cdFx0XHRcdHNvcnQ6IHRydWUsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnY2xpZW50JyxcclxuXHRcdFx0bGFiZWw6ICdDbGllbnQnLFxyXG5cdFx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFx0ZmlsdGVyOiB0cnVlLFxyXG5cdFx0XHRcdHNvcnQ6IHRydWUsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnZ2l0ZScsXHJcblx0XHRcdGxhYmVsOiAnR2l0ZScsXHJcblx0XHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0XHRmaWx0ZXI6IHRydWUsXHJcblx0XHRcdFx0c29ydDogZmFsc2UsXHJcblxyXG5cdFx0XHRcdGN1c3RvbUJvZHlSZW5kZXI6ICh2YWx1ZSwgdGFibGVNZXRhLCB1cGRhdGVWYWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDxHaXRlTm9tIHZhbHVlPXt2YWx1ZX0gLz47XHJcblxyXG5cdFx0XHRcdFx0Ly8gcmV0dXJuIGdpdGVzLm1hcCgoZ2l0ZSkgPT4ge1xyXG5cdFx0XHRcdFx0Ly8gXHRjb25zb2xlLmxvZygnbGUgZ2l0ZSA9PicsIGdpdGUuX2lkID09PSB2YWx1ZSk7XHJcblx0XHRcdFx0XHQvLyBcdDxwPnt2YWx1ZSA9PT0gZ2l0ZS5faWQgJiYgZ2l0ZS5zbHVnfTwvcD47XHJcblx0XHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ3N0YXR1cycsXHJcblx0XHRcdGxhYmVsOiAnU3RhdHVzJyxcclxuXHRcdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcdGZpbHRlcjogdHJ1ZSxcclxuXHRcdFx0XHRzb3J0OiBmYWxzZSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdkYXRlQXJyaXZlZScsXHJcblx0XHRcdGxhYmVsOiBcIkRhdGUgZCdhcnJpdmVlXCIsXHJcblx0XHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0XHRmaWx0ZXI6IHRydWUsXHJcblx0XHRcdFx0c29ydDogZmFsc2UsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnZGF0ZURlcGFydCcsXHJcblx0XHRcdGxhYmVsOiAnRGF0ZSBkZSBkw6lwYXJ0JyxcclxuXHRcdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcdGZpbHRlcjogdHJ1ZSxcclxuXHRcdFx0XHRzb3J0OiBmYWxzZSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8ge1xyXG5cdFx0Ly8gXHRuYW1lOiAnbXNnJyxcclxuXHRcdC8vIFx0bGFiZWw6ICdNZXNzYWdlJyxcclxuXHRcdC8vIFx0b3B0aW9uczoge1xyXG5cdFx0Ly8gXHRcdGZpbHRlcjogdHJ1ZSxcclxuXHRcdC8vIFx0XHRzb3J0OiBmYWxzZSxcclxuXHRcdC8vIFx0XHRjdXN0b21Cb2R5UmVuZGVyOiAodmFsdWUsIHRhYmxlTWV0YSwgdXBkYXRlVmFsdWUpID0+IHtcclxuXHRcdC8vIFx0XHRcdHJldHVybiA8cD57dmFsdWUuc3Vic3RyaW5nKDAsIDIwKSArICcuLi4nfTwvcD47XHJcblx0XHQvLyBcdFx0fSxcclxuXHRcdC8vIFx0fSxcclxuXHRcdC8vIH0sXHJcblx0XHQvLyB7XHJcblx0XHQvLyBcdG5hbWU6ICd2dScsXHJcblx0XHQvLyBcdGxhYmVsOiAnTm9uIGx1JyxcclxuXHRcdC8vIFx0b3B0aW9uczoge1xyXG5cdFx0Ly8gXHRcdGZpbHRlcjogdHJ1ZSxcclxuXHRcdC8vIFx0XHRjdXN0b21Cb2R5UmVuZGVyOiAodmFsdWUsIHRhYmxlTWV0YSwgdXBkYXRlVmFsdWUpID0+IHtcclxuXHRcdC8vIFx0XHRcdHJldHVybiAoXHJcblx0XHQvLyBcdFx0XHRcdCF2YWx1ZSAmJiAoXHJcblx0XHQvLyBcdFx0XHRcdFx0PEZpYmVyTmV3SWNvblxyXG5cdFx0Ly8gXHRcdFx0XHRcdFx0Zm9udFNpemU9J2xhcmdlJ1xyXG5cdFx0Ly8gXHRcdFx0XHRcdFx0c3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX1cclxuXHRcdC8vIFx0XHRcdFx0XHQvPlxyXG5cdFx0Ly8gXHRcdFx0XHQpXHJcblx0XHQvLyBcdFx0XHQpO1xyXG5cdFx0Ly8gXHRcdH0sXHJcblx0XHQvLyBcdH0sXHJcblx0XHQvLyB9LFxyXG5cdFx0Ly8ge1xyXG5cdFx0Ly8gXHRuYW1lOiAncmVwb25kdScsXHJcblx0XHQvLyBcdGxhYmVsOiAnUsOpcG9uZHUnLFxyXG5cdFx0Ly8gXHRvcHRpb25zOiB7XHJcblx0XHQvLyBcdFx0ZmlsdGVyOiB0cnVlLFxyXG5cdFx0Ly8gXHRcdGN1c3RvbUJvZHlSZW5kZXI6ICh2YWx1ZSwgdGFibGVNZXRhLCB1cGRhdGVWYWx1ZSkgPT4ge1xyXG5cdFx0Ly8gXHRcdFx0cmV0dXJuIHZhbHVlID8gKFxyXG5cdFx0Ly8gXHRcdFx0XHQ8Q2hlY2tCb3hJY29uIC8+XHJcblx0XHQvLyBcdFx0XHQpIDogKFxyXG5cdFx0Ly8gXHRcdFx0XHQ8Q2hlY2tCb3hPdXRsaW5lQmxhbmtJY29uIC8+XHJcblx0XHQvLyBcdFx0XHQpO1xyXG5cdFx0Ly8gXHRcdH0sXHJcblx0XHQvLyBcdH0sXHJcblx0XHQvLyB9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnQ29uc3VsdGVyJyxcclxuXHRcdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcdHNvcnQ6IGZhbHNlLFxyXG5cdFx0XHRcdGZpbHRlcjogZmFsc2UsXHJcblx0XHRcdFx0Y3VzdG9tQm9keVJlbmRlcjogKHZhbHVlLCB0YWJsZU1ldGEsIHVwZGF0ZVZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0YWJsZU1ldGEucm93RGF0YSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gIXRhYmxlTWV0YS5yb3dEYXRhWzZdID8gKFxyXG5cdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8TGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0aHJlZj17YC9hZG1pbi9yZXNlcnZhdGlvbi8ke3RhYmxlTWV0YS5yb3dEYXRhWzBdfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxSZXBseUljb24gZm9udFNpemU9J2xhcmdlJyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PC9JY29uQnV0dG9uPlxyXG5cdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0PEljb25CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9e2AvYWRtaW4vcmVzZXJ2YXRpb24vJHt0YWJsZU1ldGEucm93RGF0YVswXX1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VmlzaWJpbGl0eUljb24gZm9udFNpemU9J2xhcmdlJyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PC9JY29uQnV0dG9uPlxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ1N1cHByJyxcclxuXHRcdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcdGN1c3RvbUJvZHlSZW5kZXI6ICh2YWx1ZSwgdGFibGVNZXRhLCB1cGRhdGVWYWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codGFibGVNZXRhLnJvd0RhdGEpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PEljb25CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PERlbGV0ZUZvcmV2ZXJJY29uXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZTogJzMwcHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3JlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVsZXRlQ29uZmlybSh0YWJsZU1ldGEucm93RGF0YVswXSlcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdF07XHJcblxyXG5cdGNvbnN0IG9wdGlvbnMgPSB7XHJcblx0XHRmaWx0ZXJUeXBlOiAnY2hlY2tib3gnLFxyXG5cdFx0c2VsZWN0YWJsZVJvd3M6ICdub25lJyxcclxuXHRcdHNldFJvd1Byb3BzOiAocm93LCBkYXRhSW5kZXgsIHJvd0luZGV4KSA9PiB7XHJcblx0XHRcdC8vTWV0dHJlIHN0eWxlIHNlbG9uIGxhIGNvdXJsZXVyIGR1IGfDrnRlIGV0IGZvcm1hdCBicmlsbGFudCBzZWxvbiBsZSBzdGF0dXNcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JvdyA9PicsIHJvd1syXS5wcm9wcy52YWx1ZSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdnaXRlcyA9PicsIGdpdGVzKTtcclxuXHJcblx0XHRcdC8vIGdpdGVzLm1hcCgoZ2l0ZSkgPT4ge1xyXG5cdFx0XHQvLyBcdGNvbnNvbGUubG9nKCdnaXRlIDonLCBnaXRlKTtcclxuXHRcdFx0Ly8gXHRjb25zb2xlLmxvZygnaWQgZHUgZ2l0ZSA6JywgZ2l0ZS5faWQpO1xyXG5cdFx0XHQvLyBcdGlmIChyb3dbMl0ucHJvcHMudmFsdWUgPT09IGdpdGUuX2lkKSB7XHJcblx0XHRcdC8vIFx0XHRyZXR1cm4geyBzdHlsZTogeyBiYWNrZ3JvdW5kOiBnaXRlLmNvdWxldXIxIH0gfTtcclxuXHRcdFx0Ly8gXHR9XHJcblx0XHRcdC8vIH0pO1xyXG5cclxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ2RhdGFJbmRleCA9PicsIGRhdGFJbmRleCk7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdyb3dJbmRleCA9PicsIHJvd0luZGV4KTtcclxuXHRcdH0sXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHtsb2FkaW5nICYmIDxDaXJjdWxhclByb2dyZXNzIC8+fVxyXG5cdFx0XHR7c3VjY2VzcyAmJiAoXHJcblx0XHRcdFx0PFNuYWNrYmFyXHJcblx0XHRcdFx0XHRvcGVuPXtvcGVufVxyXG5cdFx0XHRcdFx0YXV0b0hpZGVEdXJhdGlvbj17NjAwMH1cclxuXHRcdFx0XHRcdG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cclxuXHRcdFx0XHRcdDxBbGVydCBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gc2V2ZXJpdHk9J3N1Y2Nlc3MnPlxyXG5cdFx0XHRcdFx0XHR7bWVzc2FnZX1cclxuXHRcdFx0XHRcdDwvQWxlcnQ+XHJcblx0XHRcdFx0PC9TbmFja2Jhcj5cclxuXHRcdFx0KX1cclxuXHRcdFx0e2Vycm9yICYmIChcclxuXHRcdFx0XHQ8U25hY2tiYXJcclxuXHRcdFx0XHRcdG9wZW49e29wZW59XHJcblx0XHRcdFx0XHRhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfVxyXG5cdFx0XHRcdFx0b25DbG9zZT17aGFuZGxlQ2xvc2V9PlxyXG5cdFx0XHRcdFx0PEFsZXJ0IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBzZXZlcml0eT0nZXJyb3InPlxyXG5cdFx0XHRcdFx0XHR7ZXJyb3J9XHJcblx0XHRcdFx0XHQ8L0FsZXJ0PlxyXG5cdFx0XHRcdDwvU25hY2tiYXI+XHJcblx0XHRcdCl9XHJcblx0XHRcdDxwIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19PlxyXG5cdFx0XHRcdHtuZXdSZXNlcnZhdGlvbiA+IDBcclxuXHRcdFx0XHRcdD8gYFZvdXMgYXZleiAke25ld1Jlc2VydmF0aW9ufSBub3V2ZWxsZXMgcsOpc2VydmF0aW9ucyAhYFxyXG5cdFx0XHRcdFx0OiBgQXVjdW5lIG5vdXZlbGxlIHLDqXNlcnZhdGlvbiAhYH1cclxuXHRcdFx0PC9wPlxyXG5cdFx0XHQ8TVVJRGF0YVRhYmxlXHJcblx0XHRcdFx0dGl0bGU9eydSZXNlcnZhdGlvbnMnfVxyXG5cdFx0XHRcdGRhdGE9e3Jlc2VydmF0aW9uc31cclxuXHRcdFx0XHRjb2x1bW5zPXtjb2x1bW5zfVxyXG5cdFx0XHRcdG9wdGlvbnM9e29wdGlvbnN9XHJcblx0XHRcdC8+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihMaXN0UmVzZXJ2YXRpb24pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9