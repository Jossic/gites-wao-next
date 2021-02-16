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
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var _actions_messageActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../actions/messageActions */ "./actions/messageActions.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mui-datatables */ "./node_modules/mui-datatables/dist/index.js");
/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mui_datatables__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_icons_Reply__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Reply */ "./node_modules/@material-ui/icons/Reply.js");
/* harmony import */ var _material_ui_icons_Reply__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Reply__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_FiberNew__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/FiberNew */ "./node_modules/@material-ui/icons/FiberNew.js");
/* harmony import */ var _material_ui_icons_FiberNew__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FiberNew__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_CheckBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/CheckBox */ "./node_modules/@material-ui/icons/CheckBox.js");
/* harmony import */ var _material_ui_icons_CheckBox__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckBox__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_CheckBoxOutlineBlank__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/CheckBoxOutlineBlank */ "./node_modules/@material-ui/icons/CheckBoxOutlineBlank.js");
/* harmony import */ var _material_ui_icons_CheckBoxOutlineBlank__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckBoxOutlineBlank__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "./node_modules/@material-ui/icons/Visibility.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/DeleteForever */ "./node_modules/@material-ui/icons/DeleteForever.js");
/* harmony import */ var _material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _actions_reservationActions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../actions/reservationActions */ "./actions/reservationActions.js");
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var _components_GiteNom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../components/GiteNom */ "./components/GiteNom.js");



var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\lists\\ListReservation.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import { Table } from 'reactstrap';





 // import AddBoxIcon from '@material-ui/icons/AddBox';

















function Alert(props) {
  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_17__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
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
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
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
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_4__["getCookie"])('token');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      gites = _useState[0],
      setGites = _useState[1];

  var listerlesGites = function listerlesGites() {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_20__["listeDesGites"])().then(function (data) {
      console.log('data =>', data);

      if (data.error) {
        console.log(error);
      } else {
        setGites(_objectSpread(_objectSpread({}, gites), {}, {
          data: data
        }));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    listerlesGites();
  }, []); //Ajouter le delete et multiple delete

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    loading: false,
    error: '',
    success: '',
    message: ''
  }),
      values = _useState2[0],
      setvalues = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
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
    Object(_actions_reservationActions__WEBPACK_IMPORTED_MODULE_19__["removeReservation"])(id, token).then(function (data) {
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
        return __jsx(_components_GiteNom__WEBPACK_IMPORTED_MODULE_21__["default"], {
          value: value,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144,
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
        return !tableMeta.rowData[6] ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["IconButton"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 7
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/admin/reservation/".concat(tableMeta.rowData[0]),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 8
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 9
          }
        }, __jsx(_material_ui_icons_Reply__WEBPACK_IMPORTED_MODULE_9___default.a, {
          fontSize: "large",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 10
          }
        })))) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["IconButton"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 7
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/admin/reservation/".concat(tableMeta.rowData[0]),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 238,
            columnNumber: 8
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 9
          }
        }, __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_13___default.a, {
          fontSize: "large",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241,
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
        return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["IconButton"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 7
          }
        }, __jsx(_material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_14___default.a, {
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
            lineNumber: 256,
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, loading && __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 16
    }
  }), success && __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_15__["default"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 5
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 6
    }
  }, message)), error && __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_15__["default"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 5
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 6
    }
  }, error)), __jsx("p", {
    style: {
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 4
    }
  }, newReservation > 0 ? "Vous avez ".concat(newReservation, " nouvelles r\xE9servations !") : "Aucune nouvelle r\xE9servation !"), __jsx(mui_datatables__WEBPACK_IMPORTED_MODULE_7___default.a, {
    title: 'Reservations',
    data: reservations,
    columns: columns,
    options: options,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 4
    }
  }));
};

_s(ListReservation, "bNbU4q2Kb9/cKgd+aUTFYom5TEY=", false, function () {
  return [useStyles];
});

_c2 = ListReservation;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = Object(next_router__WEBPACK_IMPORTED_MODULE_16__["withRouter"])(ListReservation));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0UmVzZXJ2YXRpb24uanMiXSwibmFtZXMiOlsiQWxlcnQiLCJwcm9wcyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJMaXN0UmVzZXJ2YXRpb24iLCJyZXNlcnZhdGlvbnMiLCJuZXdSZXNlcnZhdGlvbiIsInJvdXRlciIsImNsYXNzZXMiLCJ0b2tlbiIsImdldENvb2tpZSIsInVzZVN0YXRlIiwiZ2l0ZXMiLCJzZXRHaXRlcyIsImxpc3Rlcmxlc0dpdGVzIiwibGlzdGVEZXNHaXRlcyIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwidXNlRWZmZWN0IiwibG9hZGluZyIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwidmFsdWVzIiwic2V0dmFsdWVzIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVDbG9zZSIsImV2ZW50IiwicmVhc29uIiwiZGVsZXRlUmVzZXJ2YXRpb24iLCJpZCIsInJlbW92ZVJlc2VydmF0aW9uIiwic2V0VGltZW91dCIsInJlbG9hZCIsImRlbGV0ZUNvbmZpcm0iLCJhbnN3ZXIiLCJ3aW5kb3ciLCJjb25maXJtIiwiY29sdW1ucyIsIm5hbWUiLCJsYWJlbCIsIm9wdGlvbnMiLCJmaWx0ZXIiLCJzb3J0IiwiY3VzdG9tQm9keVJlbmRlciIsInZhbHVlIiwidGFibGVNZXRhIiwidXBkYXRlVmFsdWUiLCJyb3dEYXRhIiwiZm9udFNpemUiLCJjb2xvciIsImZpbHRlclR5cGUiLCJzZWxlY3RhYmxlUm93cyIsInNldFJvd1Byb3BzIiwicm93IiwiZGF0YUluZGV4Iiwicm93SW5kZXgiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFD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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUMsTUFBQyxLQUFEO0FBQU8sV0FBTyxFQUFFQSxXQUFoQjtBQUE2QixZQUFRLEVBQUMsU0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFTCxPQURGLENBSkQsQ0FIRixFQVlFSixLQUFLLElBQ0wsTUFBQyxtRUFBRDtBQUNDLFFBQUksRUFBRU8sSUFEUDtBQUVDLG9CQUFnQixFQUFFLElBRm5CO0FBR0MsV0FBTyxFQUFFRSxXQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJQyxNQUFDLEtBQUQ7QUFBTyxXQUFPLEVBQUVBLFdBQWhCO0FBQTZCLFlBQVEsRUFBQyxPQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VULEtBREYsQ0FKRCxDQWJGLEVBc0JDO0FBQUcsU0FBSyxFQUFFO0FBQUVpQyxXQUFLLEVBQUU7QUFBVCxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRS9DLGNBQWMsR0FBRyxDQUFqQix1QkFDZUEsY0FEZixzRUFERixDQXRCRCxFQTJCQyxNQUFDLHFEQUFEO0FBQ0MsU0FBSyxFQUFFLGNBRFI7QUFFQyxRQUFJLEVBQUVELFlBRlA7QUFHQyxXQUFPLEVBQUVvQyxPQUhWO0FBSUMsV0FBTyxFQUFFRyxPQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQkQsQ0FERDtBQW9DQSxDQW5TRDs7R0FBTXhDLGU7VUFDV1AsUzs7O01BRFhPLGU7QUFxU1MscUVBQUF3RCwrREFBVSxDQUFDeEQsZUFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9yZXNlcnZhdGlvbi5iMzhiYzZkZDBiN2NlZDY3OGJhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgVGFibGUgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IHJlbW92ZU1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL21lc3NhZ2VBY3Rpb25zJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBNVUlEYXRhVGFibGUgZnJvbSAnbXVpLWRhdGF0YWJsZXMnO1xyXG4vLyBpbXBvcnQgQWRkQm94SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkQm94JztcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XHJcbmltcG9ydCBSZXBseUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlcGx5JztcclxuaW1wb3J0IEZpYmVyTmV3SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmliZXJOZXcnO1xyXG5pbXBvcnQgQ2hlY2tCb3hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGVja0JveCc7XHJcbmltcG9ydCBDaGVja0JveE91dGxpbmVCbGFua0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrQm94T3V0bGluZUJsYW5rJztcclxuaW1wb3J0IFZpc2liaWxpdHlJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9WaXNpYmlsaXR5JztcclxuaW1wb3J0IERlbGV0ZUZvcmV2ZXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EZWxldGVGb3JldmVyJztcclxuaW1wb3J0IFNuYWNrYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IE11aUFsZXJ0IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQWxlcnQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgcmVtb3ZlUmVzZXJ2YXRpb24gfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL3Jlc2VydmF0aW9uQWN0aW9ucyc7XHJcbmltcG9ydCB7IGxpc3RlRGVzR2l0ZXMsIGxpc3RHaXRlQnlJZCB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5pbXBvcnQgR2l0ZU5vbSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0dpdGVOb20nO1xyXG5cclxuZnVuY3Rpb24gQWxlcnQocHJvcHMpIHtcclxuXHRyZXR1cm4gPE11aUFsZXJ0IGVsZXZhdGlvbj17Nn0gdmFyaWFudD0nZmlsbGVkJyB7Li4ucHJvcHN9IC8+O1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRyb290OiB7XHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0JyYgPiAqICsgKic6IHtcclxuXHRcdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdFx0fSxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5jb25zdCBMaXN0UmVzZXJ2YXRpb24gPSAoeyByZXNlcnZhdGlvbnMsIG5ld1Jlc2VydmF0aW9uLCByb3V0ZXIgfSkgPT4ge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblxyXG5cdGNvbnN0IFtnaXRlcywgc2V0R2l0ZXNdID0gdXNlU3RhdGUoKTtcclxuXHJcblx0Y29uc3QgbGlzdGVybGVzR2l0ZXMgPSAoKSA9PiB7XHJcblx0XHRsaXN0ZURlc0dpdGVzKCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZGF0YSA9PicsIGRhdGEpO1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRHaXRlcyh7IC4uLmdpdGVzLCBkYXRhIH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGlzdGVybGVzR2l0ZXMoKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdC8vQWpvdXRlciBsZSBkZWxldGUgZXQgbXVsdGlwbGUgZGVsZXRlXHJcblx0Y29uc3QgW3ZhbHVlcywgc2V0dmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuXHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0ZXJyb3I6ICcnLFxyXG5cdFx0c3VjY2VzczogJycsXHJcblx0XHRtZXNzYWdlOiAnJyxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHRjb25zdCB7IGxvYWRpbmcsIHN1Y2Nlc3MsIGVycm9yLCBtZXNzYWdlIH0gPSB2YWx1ZXM7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNsb3NlID0gKGV2ZW50LCByZWFzb24pID0+IHtcclxuXHRcdGlmIChyZWFzb24gPT09ICdjbGlja2F3YXknKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRzZXR2YWx1ZXMoeyAuLi52YWx1ZXMsIHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZmFsc2UgfSk7XHJcblx0XHRzZXRPcGVuKGZhbHNlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBkZWxldGVSZXNlcnZhdGlvbiA9IChpZCkgPT4ge1xyXG5cdFx0c2V0dmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdFx0cmVtb3ZlUmVzZXJ2YXRpb24oaWQsIHRva2VuKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdkYXRhIHZhdXQnLCBkYXRhKTtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXR2YWx1ZXMoe1xyXG5cdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0XHRlcnJvcjogdHJ1ZSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZhbHNlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldHZhbHVlcyh7XHJcblx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRvcGVuOiB0cnVlLFxyXG5cdFx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0XHRlcnJvcjogJycsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiB0cnVlLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogZGF0YS5tZXNzYWdlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0cm91dGVyLnJlbG9hZCgpO1xyXG5cdFx0XHRcdH0sIDMwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBkZWxldGVDb25maXJtID0gKGlkKSA9PiB7XHJcblx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0bGV0IGFuc3dlciA9IHdpbmRvdy5jb25maXJtKFxyXG5cdFx0XHRcdGBTdXBwcmVzc2lvbiBkZSBsYSByw6lzZXJ2YXRpb24gJHtpZH0sIMOqdGVzLXZvdXMgc8O7ciA/YFxyXG5cdFx0XHQpO1xyXG5cdFx0XHRpZiAoYW5zd2VyKSB7XHJcblx0XHRcdFx0ZGVsZXRlUmVzZXJ2YXRpb24oaWQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY29sdW1ucyA9IFtcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ19pZCcsXHJcblx0XHRcdGxhYmVsOiAnIycsXHJcblx0XHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0XHRmaWx0ZXI6IHRydWUsXHJcblx0XHRcdFx0c29ydDogdHJ1ZSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdjbGllbnQnLFxyXG5cdFx0XHRsYWJlbDogJ0NsaWVudCcsXHJcblx0XHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0XHRmaWx0ZXI6IHRydWUsXHJcblx0XHRcdFx0c29ydDogdHJ1ZSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdnaXRlJyxcclxuXHRcdFx0bGFiZWw6ICdHaXRlJyxcclxuXHRcdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcdGZpbHRlcjogdHJ1ZSxcclxuXHRcdFx0XHRzb3J0OiBmYWxzZSxcclxuXHJcblx0XHRcdFx0Y3VzdG9tQm9keVJlbmRlcjogKHZhbHVlLCB0YWJsZU1ldGEsIHVwZGF0ZVZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gPEdpdGVOb20gdmFsdWU9e3ZhbHVlfSAvPjtcclxuXHJcblx0XHRcdFx0XHQvLyByZXR1cm4gZ2l0ZXMubWFwKChnaXRlKSA9PiB7XHJcblx0XHRcdFx0XHQvLyBcdGNvbnNvbGUubG9nKCdsZSBnaXRlID0+JywgZ2l0ZS5faWQgPT09IHZhbHVlKTtcclxuXHRcdFx0XHRcdC8vIFx0PHA+e3ZhbHVlID09PSBnaXRlLl9pZCAmJiBnaXRlLnNsdWd9PC9wPjtcclxuXHRcdFx0XHRcdC8vIH0pO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnc3RhdHVzJyxcclxuXHRcdFx0bGFiZWw6ICdTdGF0dXMnLFxyXG5cdFx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFx0ZmlsdGVyOiB0cnVlLFxyXG5cdFx0XHRcdHNvcnQ6IGZhbHNlLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ2RhdGVBcnJpdmVlJyxcclxuXHRcdFx0bGFiZWw6IFwiRGF0ZSBkJ2Fycml2ZWVcIixcclxuXHRcdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcdGZpbHRlcjogdHJ1ZSxcclxuXHRcdFx0XHRzb3J0OiBmYWxzZSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdkYXRlRGVwYXJ0JyxcclxuXHRcdFx0bGFiZWw6ICdEYXRlIGRlIGTDqXBhcnQnLFxyXG5cdFx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFx0ZmlsdGVyOiB0cnVlLFxyXG5cdFx0XHRcdHNvcnQ6IGZhbHNlLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHJcblx0XHQvLyB7XHJcblx0XHQvLyBcdG5hbWU6ICdtc2cnLFxyXG5cdFx0Ly8gXHRsYWJlbDogJ01lc3NhZ2UnLFxyXG5cdFx0Ly8gXHRvcHRpb25zOiB7XHJcblx0XHQvLyBcdFx0ZmlsdGVyOiB0cnVlLFxyXG5cdFx0Ly8gXHRcdHNvcnQ6IGZhbHNlLFxyXG5cdFx0Ly8gXHRcdGN1c3RvbUJvZHlSZW5kZXI6ICh2YWx1ZSwgdGFibGVNZXRhLCB1cGRhdGVWYWx1ZSkgPT4ge1xyXG5cdFx0Ly8gXHRcdFx0cmV0dXJuIDxwPnt2YWx1ZS5zdWJzdHJpbmcoMCwgMjApICsgJy4uLid9PC9wPjtcclxuXHRcdC8vIFx0XHR9LFxyXG5cdFx0Ly8gXHR9LFxyXG5cdFx0Ly8gfSxcclxuXHRcdC8vIHtcclxuXHRcdC8vIFx0bmFtZTogJ3Z1JyxcclxuXHRcdC8vIFx0bGFiZWw6ICdOb24gbHUnLFxyXG5cdFx0Ly8gXHRvcHRpb25zOiB7XHJcblx0XHQvLyBcdFx0ZmlsdGVyOiB0cnVlLFxyXG5cdFx0Ly8gXHRcdGN1c3RvbUJvZHlSZW5kZXI6ICh2YWx1ZSwgdGFibGVNZXRhLCB1cGRhdGVWYWx1ZSkgPT4ge1xyXG5cdFx0Ly8gXHRcdFx0cmV0dXJuIChcclxuXHRcdC8vIFx0XHRcdFx0IXZhbHVlICYmIChcclxuXHRcdC8vIFx0XHRcdFx0XHQ8RmliZXJOZXdJY29uXHJcblx0XHQvLyBcdFx0XHRcdFx0XHRmb250U2l6ZT0nbGFyZ2UnXHJcblx0XHQvLyBcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fVxyXG5cdFx0Ly8gXHRcdFx0XHRcdC8+XHJcblx0XHQvLyBcdFx0XHRcdClcclxuXHRcdC8vIFx0XHRcdCk7XHJcblx0XHQvLyBcdFx0fSxcclxuXHRcdC8vIFx0fSxcclxuXHRcdC8vIH0sXHJcblx0XHQvLyB7XHJcblx0XHQvLyBcdG5hbWU6ICdyZXBvbmR1JyxcclxuXHRcdC8vIFx0bGFiZWw6ICdSw6lwb25kdScsXHJcblx0XHQvLyBcdG9wdGlvbnM6IHtcclxuXHRcdC8vIFx0XHRmaWx0ZXI6IHRydWUsXHJcblx0XHQvLyBcdFx0Y3VzdG9tQm9keVJlbmRlcjogKHZhbHVlLCB0YWJsZU1ldGEsIHVwZGF0ZVZhbHVlKSA9PiB7XHJcblx0XHQvLyBcdFx0XHRyZXR1cm4gdmFsdWUgPyAoXHJcblx0XHQvLyBcdFx0XHRcdDxDaGVja0JveEljb24gLz5cclxuXHRcdC8vIFx0XHRcdCkgOiAoXHJcblx0XHQvLyBcdFx0XHRcdDxDaGVja0JveE91dGxpbmVCbGFua0ljb24gLz5cclxuXHRcdC8vIFx0XHRcdCk7XHJcblx0XHQvLyBcdFx0fSxcclxuXHRcdC8vIFx0fSxcclxuXHRcdC8vIH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdDb25zdWx0ZXInLFxyXG5cdFx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFx0c29ydDogZmFsc2UsXHJcblx0XHRcdFx0ZmlsdGVyOiBmYWxzZSxcclxuXHRcdFx0XHRjdXN0b21Cb2R5UmVuZGVyOiAodmFsdWUsIHRhYmxlTWV0YSwgdXBkYXRlVmFsdWUpID0+IHtcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRhYmxlTWV0YS5yb3dEYXRhKTtcclxuXHRcdFx0XHRcdHJldHVybiAhdGFibGVNZXRhLnJvd0RhdGFbNl0gPyAoXHJcblx0XHRcdFx0XHRcdDxJY29uQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rXHJcblx0XHRcdFx0XHRcdFx0XHRocmVmPXtgL2FkbWluL3Jlc2VydmF0aW9uLyR7dGFibGVNZXRhLnJvd0RhdGFbMF19YH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFJlcGx5SWNvbiBmb250U2l6ZT0nbGFyZ2UnIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XHJcblx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8TGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0aHJlZj17YC9hZG1pbi9yZXNlcnZhdGlvbi8ke3RhYmxlTWV0YS5yb3dEYXRhWzBdfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxWaXNpYmlsaXR5SWNvbiBmb250U2l6ZT0nbGFyZ2UnIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnU3VwcHInLFxyXG5cdFx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFx0Y3VzdG9tQm9keVJlbmRlcjogKHZhbHVlLCB0YWJsZU1ldGEsIHVwZGF0ZVZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0YWJsZU1ldGEucm93RGF0YSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8RGVsZXRlRm9yZXZlckljb25cclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiAnMzBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAncmVkJyxcclxuXHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWxldGVDb25maXJtKHRhYmxlTWV0YS5yb3dEYXRhWzBdKVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvSWNvbkJ1dHRvbj5cclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XTtcclxuXHJcblx0Y29uc3Qgb3B0aW9ucyA9IHtcclxuXHRcdGZpbHRlclR5cGU6ICdjaGVja2JveCcsXHJcblx0XHRzZWxlY3RhYmxlUm93czogJ25vbmUnLFxyXG5cdFx0c2V0Um93UHJvcHM6IChyb3csIGRhdGFJbmRleCwgcm93SW5kZXgpID0+IHtcclxuXHRcdFx0Ly9NZXR0cmUgc3R5bGUgc2Vsb24gbGEgY291cmxldXIgZHUgZ8OudGUgZXQgZm9ybWF0IGJyaWxsYW50IHNlbG9uIGxlIHN0YXR1c1xyXG5cdFx0XHRjb25zb2xlLmxvZygncm93ID0+Jywgcm93WzJdLnByb3BzLnZhbHVlKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2dpdGVzID0+JywgZ2l0ZXMpO1xyXG5cclxuXHRcdFx0Ly8gZ2l0ZXMubWFwKChnaXRlKSA9PiB7XHJcblx0XHRcdC8vIFx0Y29uc29sZS5sb2coJ2dpdGUgOicsIGdpdGUpO1xyXG5cdFx0XHQvLyBcdGNvbnNvbGUubG9nKCdpZCBkdSBnaXRlIDonLCBnaXRlLl9pZCk7XHJcblx0XHRcdC8vIFx0aWYgKHJvd1syXS5wcm9wcy52YWx1ZSA9PT0gZ2l0ZS5faWQpIHtcclxuXHRcdFx0Ly8gXHRcdHJldHVybiB7IHN0eWxlOiB7IGJhY2tncm91bmQ6IGdpdGUuY291bGV1cjEgfSB9O1xyXG5cdFx0XHQvLyBcdH1cclxuXHRcdFx0Ly8gfSk7XHJcblxyXG5cdFx0XHQvLyBjb25zb2xlLmxvZygnZGF0YUluZGV4ID0+JywgZGF0YUluZGV4KTtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ3Jvd0luZGV4ID0+Jywgcm93SW5kZXgpO1xyXG5cdFx0fSxcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e2xvYWRpbmcgJiYgPENpcmN1bGFyUHJvZ3Jlc3MgLz59XHJcblx0XHRcdHtzdWNjZXNzICYmIChcclxuXHRcdFx0XHQ8U25hY2tiYXJcclxuXHRcdFx0XHRcdG9wZW49e29wZW59XHJcblx0XHRcdFx0XHRhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfVxyXG5cdFx0XHRcdFx0b25DbG9zZT17aGFuZGxlQ2xvc2V9PlxyXG5cdFx0XHRcdFx0PEFsZXJ0IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBzZXZlcml0eT0nc3VjY2Vzcyc+XHJcblx0XHRcdFx0XHRcdHttZXNzYWdlfVxyXG5cdFx0XHRcdFx0PC9BbGVydD5cclxuXHRcdFx0XHQ8L1NuYWNrYmFyPlxyXG5cdFx0XHQpfVxyXG5cdFx0XHR7ZXJyb3IgJiYgKFxyXG5cdFx0XHRcdDxTbmFja2JhclxyXG5cdFx0XHRcdFx0b3Blbj17b3Blbn1cclxuXHRcdFx0XHRcdGF1dG9IaWRlRHVyYXRpb249ezYwMDB9XHJcblx0XHRcdFx0XHRvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XHJcblx0XHRcdFx0XHQ8QWxlcnQgb25DbG9zZT17aGFuZGxlQ2xvc2V9IHNldmVyaXR5PSdlcnJvcic+XHJcblx0XHRcdFx0XHRcdHtlcnJvcn1cclxuXHRcdFx0XHRcdDwvQWxlcnQ+XHJcblx0XHRcdFx0PC9TbmFja2Jhcj5cclxuXHRcdFx0KX1cclxuXHRcdFx0PHAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+XHJcblx0XHRcdFx0e25ld1Jlc2VydmF0aW9uID4gMFxyXG5cdFx0XHRcdFx0PyBgVm91cyBhdmV6ICR7bmV3UmVzZXJ2YXRpb259IG5vdXZlbGxlcyByw6lzZXJ2YXRpb25zICFgXHJcblx0XHRcdFx0XHQ6IGBBdWN1bmUgbm91dmVsbGUgcsOpc2VydmF0aW9uICFgfVxyXG5cdFx0XHQ8L3A+XHJcblx0XHRcdDxNVUlEYXRhVGFibGVcclxuXHRcdFx0XHR0aXRsZT17J1Jlc2VydmF0aW9ucyd9XHJcblx0XHRcdFx0ZGF0YT17cmVzZXJ2YXRpb25zfVxyXG5cdFx0XHRcdGNvbHVtbnM9e2NvbHVtbnN9XHJcblx0XHRcdFx0b3B0aW9ucz17b3B0aW9uc31cclxuXHRcdFx0Lz5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKExpc3RSZXNlcnZhdGlvbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=