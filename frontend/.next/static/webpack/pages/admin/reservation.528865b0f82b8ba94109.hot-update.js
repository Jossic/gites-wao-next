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
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_4__["getCookie"])('token'); //Ajouter le delete et multiple delete

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    loading: false,
    error: '',
    success: '',
    message: ''
  }),
      values = _useState[0],
      setvalues = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      open = _useState2[0],
      setOpen = _useState2[1];

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
            lineNumber: 126,
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
            lineNumber: 210,
            columnNumber: 7
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/admin/reservation/".concat(tableMeta.rowData[0]),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 8
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 9
          }
        }, __jsx(_material_ui_icons_Reply__WEBPACK_IMPORTED_MODULE_9___default.a, {
          fontSize: "large",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 10
          }
        })))) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["IconButton"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 7
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/admin/reservation/".concat(tableMeta.rowData[0]),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 8
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 9
          }
        }, __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_13___default.a, {
          fontSize: "large",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223,
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
            lineNumber: 237,
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
            lineNumber: 238,
            columnNumber: 8
          }
        }));
      }
    }
  }];
  var options = {
    filterType: 'checkbox',
    selectableRows: 'none'
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, loading && __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 16
    }
  }), success && __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_15__["default"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 5
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 6
    }
  }, message)), error && __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_15__["default"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 5
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 6
    }
  }, error)), __jsx("p", {
    style: {
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
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
      lineNumber: 287,
      columnNumber: 4
    }
  }));
};

_s(ListReservation, "pwuWGrWnYv+O9Ikzt7MRfmAKFAs=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0UmVzZXJ2YXRpb24uanMiXSwibmFtZXMiOlsiQWxlcnQiLCJwcm9wcyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJMaXN0UmVzZXJ2YXRpb24iLCJyZXNlcnZhdGlvbnMiLCJuZXdSZXNlcnZhdGlvbiIsInJvdXRlciIsImNsYXNzZXMiLCJ0b2tlbiIsImdldENvb2tpZSIsInVzZVN0YXRlIiwibG9hZGluZyIsImVycm9yIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJ2YWx1ZXMiLCJzZXR2YWx1ZXMiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZUNsb3NlIiwiZXZlbnQiLCJyZWFzb24iLCJkZWxldGVSZXNlcnZhdGlvbiIsImlkIiwicmVtb3ZlUmVzZXJ2YXRpb24iLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwicmVsb2FkIiwiZGVsZXRlQ29uZmlybSIsImFuc3dlciIsIndpbmRvdyIsImNvbmZpcm0iLCJjb2x1bW5zIiwibmFtZSIsImxhYmVsIiwib3B0aW9ucyIsImZpbHRlciIsInNvcnQiLCJjdXN0b21Cb2R5UmVuZGVyIiwidmFsdWUiLCJ0YWJsZU1ldGEiLCJ1cGRhdGVWYWx1ZSIsInJvd0RhdGEiLCJmb250U2l6ZSIsImNvbG9yIiwiZmlsdGVyVHlwZSIsInNlbGVjdGFibGVSb3dzIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtB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UCxNQUFDLG1FQUFEO0FBQ0MsUUFBSSxFQUFFSSxJQURQO0FBRUMsb0JBQWdCLEVBQUUsSUFGbkI7QUFHQyxXQUFPLEVBQUVFLFdBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlDLE1BQUMsS0FBRDtBQUFPLFdBQU8sRUFBRUEsV0FBaEI7QUFBNkIsWUFBUSxFQUFDLFNBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRUwsT0FERixDQUpELENBSEYsRUFZRUYsS0FBSyxJQUNMLE1BQUMsbUVBQUQ7QUFDQyxRQUFJLEVBQUVLLElBRFA7QUFFQyxvQkFBZ0IsRUFBRSxJQUZuQjtBQUdDLFdBQU8sRUFBRUUsV0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUMsTUFBQyxLQUFEO0FBQU8sV0FBTyxFQUFFQSxXQUFoQjtBQUE2QixZQUFRLEVBQUMsT0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFUCxLQURGLENBSkQsQ0FiRixFQXNCQztBQUFHLFNBQUssRUFBRTtBQUFFbUMsV0FBSyxFQUFFO0FBQVQsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UxQyxjQUFjLEdBQUcsQ0FBakIsdUJBQ2VBLGNBRGYsc0VBREYsQ0F0QkQsRUEyQkMsTUFBQyxxREFBRDtBQUNDLFNBQUssRUFBRSxjQURSO0FBRUMsUUFBSSxFQUFFRCxZQUZQO0FBR0MsV0FBTyxFQUFFK0IsT0FIVjtBQUlDLFdBQU8sRUFBRUcsT0FKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0JELENBREQ7QUFvQ0EsQ0FqUUQ7O0dBQU1uQyxlO1VBQ1dQLFM7OztNQURYTyxlO0FBbVFTLHFFQUFBK0MsK0RBQVUsQ0FBQy9DLGVBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24uNTI4ODY1YjBmODJiOGJhOTQxMDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IFRhYmxlIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgeyByZW1vdmVNZXNzYWdlIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9tZXNzYWdlQWN0aW9ucyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgTVVJRGF0YVRhYmxlIGZyb20gJ211aS1kYXRhdGFibGVzJztcclxuLy8gaW1wb3J0IEFkZEJveEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZEJveCc7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xyXG5pbXBvcnQgUmVwbHlJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZXBseSc7XHJcbmltcG9ydCBGaWJlck5ld0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ZpYmVyTmV3JztcclxuaW1wb3J0IENoZWNrQm94SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2tCb3gnO1xyXG5pbXBvcnQgQ2hlY2tCb3hPdXRsaW5lQmxhbmtJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGVja0JveE91dGxpbmVCbGFuayc7XHJcbmltcG9ydCBWaXNpYmlsaXR5SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVmlzaWJpbGl0eSc7XHJcbmltcG9ydCBEZWxldGVGb3JldmVySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlRm9yZXZlcic7XHJcbmltcG9ydCBTbmFja2JhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2Jhcic7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBNdWlBbGVydCBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IHJlbW92ZVJlc2VydmF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9yZXNlcnZhdGlvbkFjdGlvbnMnO1xyXG5pbXBvcnQgeyBsaXN0ZURlc0dpdGVzLCBsaXN0R2l0ZUJ5SWQgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IEdpdGVOb20gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9HaXRlTm9tJztcclxuXHJcbmZ1bmN0aW9uIEFsZXJ0KHByb3BzKSB7XHJcblx0cmV0dXJuIDxNdWlBbGVydCBlbGV2YXRpb249ezZ9IHZhcmlhbnQ9J2ZpbGxlZCcgey4uLnByb3BzfSAvPjtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0cm9vdDoge1xyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdCcmID4gKiArIConOiB7XHJcblx0XHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuXHRcdH0sXHJcblx0fSxcclxufSkpO1xyXG5cclxuY29uc3QgTGlzdFJlc2VydmF0aW9uID0gKHsgcmVzZXJ2YXRpb25zLCBuZXdSZXNlcnZhdGlvbiwgcm91dGVyIH0pID0+IHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cclxuXHQvL0Fqb3V0ZXIgbGUgZGVsZXRlIGV0IG11bHRpcGxlIGRlbGV0ZVxyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldHZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdGVycm9yOiAnJyxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0bWVzc2FnZTogJycsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Y29uc3QgeyBsb2FkaW5nLCBzdWNjZXNzLCBlcnJvciwgbWVzc2FnZSB9ID0gdmFsdWVzO1xyXG5cclxuXHRjb25zdCBoYW5kbGVDbG9zZSA9IChldmVudCwgcmVhc29uKSA9PiB7XHJcblx0XHRpZiAocmVhc29uID09PSAnY2xpY2thd2F5Jykge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0dmFsdWVzKHsgLi4udmFsdWVzLCBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGZhbHNlIH0pO1xyXG5cdFx0c2V0T3BlbihmYWxzZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZGVsZXRlUmVzZXJ2YXRpb24gPSAoaWQpID0+IHtcclxuXHRcdHNldHZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHRcdHJlbW92ZVJlc2VydmF0aW9uKGlkLCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZGF0YSB2YXV0JywgZGF0YSk7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0c2V0dmFsdWVzKHtcclxuXHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdFx0ZXJyb3I6IHRydWUsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmYWxzZSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXR2YWx1ZXMoe1xyXG5cdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0b3BlbjogdHJ1ZSxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdFx0ZXJyb3I6ICcnLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IGRhdGEubWVzc2FnZSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHJvdXRlci5yZWxvYWQoKTtcclxuXHRcdFx0XHR9LCAzMDAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZGVsZXRlQ29uZmlybSA9IChpZCkgPT4ge1xyXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdGxldCBhbnN3ZXIgPSB3aW5kb3cuY29uZmlybShcclxuXHRcdFx0XHRgU3VwcHJlc3Npb24gZGUgbGEgcsOpc2VydmF0aW9uICR7aWR9LCDDqnRlcy12b3VzIHPDu3IgP2BcclxuXHRcdFx0KTtcclxuXHRcdFx0aWYgKGFuc3dlcikge1xyXG5cdFx0XHRcdGRlbGV0ZVJlc2VydmF0aW9uKGlkKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNvbHVtbnMgPSBbXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdfaWQnLFxyXG5cdFx0XHRsYWJlbDogJyMnLFxyXG5cdFx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFx0ZmlsdGVyOiB0cnVlLFxyXG5cdFx0XHRcdHNvcnQ6IHRydWUsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnY2xpZW50JyxcclxuXHRcdFx0bGFiZWw6ICdDbGllbnQnLFxyXG5cdFx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFx0ZmlsdGVyOiB0cnVlLFxyXG5cdFx0XHRcdHNvcnQ6IHRydWUsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnZ2l0ZScsXHJcblx0XHRcdGxhYmVsOiAnR2l0ZScsXHJcblx0XHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0XHRmaWx0ZXI6IHRydWUsXHJcblx0XHRcdFx0c29ydDogZmFsc2UsXHJcblx0XHRcdFx0Y3VzdG9tQm9keVJlbmRlcjogKHZhbHVlLCB0YWJsZU1ldGEsIHVwZGF0ZVZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gPEdpdGVOb20gdmFsdWU9e3ZhbHVlfSAvPjtcclxuXHJcblx0XHRcdFx0XHQvLyByZXR1cm4gZ2l0ZXMubWFwKChnaXRlKSA9PiB7XHJcblx0XHRcdFx0XHQvLyBcdGNvbnNvbGUubG9nKCdsZSBnaXRlID0+JywgZ2l0ZS5faWQgPT09IHZhbHVlKTtcclxuXHRcdFx0XHRcdC8vIFx0PHA+e3ZhbHVlID09PSBnaXRlLl9pZCAmJiBnaXRlLnNsdWd9PC9wPjtcclxuXHRcdFx0XHRcdC8vIH0pO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnc3RhdHVzJyxcclxuXHRcdFx0bGFiZWw6ICdTdGF0dXMnLFxyXG5cdFx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFx0ZmlsdGVyOiB0cnVlLFxyXG5cdFx0XHRcdHNvcnQ6IGZhbHNlLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ2RhdGVBcnJpdmVlJyxcclxuXHRcdFx0bGFiZWw6IFwiRGF0ZSBkJ2Fycml2ZWVcIixcclxuXHRcdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcdGZpbHRlcjogdHJ1ZSxcclxuXHRcdFx0XHRzb3J0OiBmYWxzZSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdkYXRlRGVwYXJ0JyxcclxuXHRcdFx0bGFiZWw6ICdEYXRlIGRlIGTDqXBhcnQnLFxyXG5cdFx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFx0ZmlsdGVyOiB0cnVlLFxyXG5cdFx0XHRcdHNvcnQ6IGZhbHNlLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHJcblx0XHQvLyB7XHJcblx0XHQvLyBcdG5hbWU6ICdtc2cnLFxyXG5cdFx0Ly8gXHRsYWJlbDogJ01lc3NhZ2UnLFxyXG5cdFx0Ly8gXHRvcHRpb25zOiB7XHJcblx0XHQvLyBcdFx0ZmlsdGVyOiB0cnVlLFxyXG5cdFx0Ly8gXHRcdHNvcnQ6IGZhbHNlLFxyXG5cdFx0Ly8gXHRcdGN1c3RvbUJvZHlSZW5kZXI6ICh2YWx1ZSwgdGFibGVNZXRhLCB1cGRhdGVWYWx1ZSkgPT4ge1xyXG5cdFx0Ly8gXHRcdFx0cmV0dXJuIDxwPnt2YWx1ZS5zdWJzdHJpbmcoMCwgMjApICsgJy4uLid9PC9wPjtcclxuXHRcdC8vIFx0XHR9LFxyXG5cdFx0Ly8gXHR9LFxyXG5cdFx0Ly8gfSxcclxuXHRcdC8vIHtcclxuXHRcdC8vIFx0bmFtZTogJ3Z1JyxcclxuXHRcdC8vIFx0bGFiZWw6ICdOb24gbHUnLFxyXG5cdFx0Ly8gXHRvcHRpb25zOiB7XHJcblx0XHQvLyBcdFx0ZmlsdGVyOiB0cnVlLFxyXG5cdFx0Ly8gXHRcdGN1c3RvbUJvZHlSZW5kZXI6ICh2YWx1ZSwgdGFibGVNZXRhLCB1cGRhdGVWYWx1ZSkgPT4ge1xyXG5cdFx0Ly8gXHRcdFx0cmV0dXJuIChcclxuXHRcdC8vIFx0XHRcdFx0IXZhbHVlICYmIChcclxuXHRcdC8vIFx0XHRcdFx0XHQ8RmliZXJOZXdJY29uXHJcblx0XHQvLyBcdFx0XHRcdFx0XHRmb250U2l6ZT0nbGFyZ2UnXHJcblx0XHQvLyBcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fVxyXG5cdFx0Ly8gXHRcdFx0XHRcdC8+XHJcblx0XHQvLyBcdFx0XHRcdClcclxuXHRcdC8vIFx0XHRcdCk7XHJcblx0XHQvLyBcdFx0fSxcclxuXHRcdC8vIFx0fSxcclxuXHRcdC8vIH0sXHJcblx0XHQvLyB7XHJcblx0XHQvLyBcdG5hbWU6ICdyZXBvbmR1JyxcclxuXHRcdC8vIFx0bGFiZWw6ICdSw6lwb25kdScsXHJcblx0XHQvLyBcdG9wdGlvbnM6IHtcclxuXHRcdC8vIFx0XHRmaWx0ZXI6IHRydWUsXHJcblx0XHQvLyBcdFx0Y3VzdG9tQm9keVJlbmRlcjogKHZhbHVlLCB0YWJsZU1ldGEsIHVwZGF0ZVZhbHVlKSA9PiB7XHJcblx0XHQvLyBcdFx0XHRyZXR1cm4gdmFsdWUgPyAoXHJcblx0XHQvLyBcdFx0XHRcdDxDaGVja0JveEljb24gLz5cclxuXHRcdC8vIFx0XHRcdCkgOiAoXHJcblx0XHQvLyBcdFx0XHRcdDxDaGVja0JveE91dGxpbmVCbGFua0ljb24gLz5cclxuXHRcdC8vIFx0XHRcdCk7XHJcblx0XHQvLyBcdFx0fSxcclxuXHRcdC8vIFx0fSxcclxuXHRcdC8vIH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdDb25zdWx0ZXInLFxyXG5cdFx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFx0c29ydDogZmFsc2UsXHJcblx0XHRcdFx0ZmlsdGVyOiBmYWxzZSxcclxuXHRcdFx0XHRjdXN0b21Cb2R5UmVuZGVyOiAodmFsdWUsIHRhYmxlTWV0YSwgdXBkYXRlVmFsdWUpID0+IHtcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRhYmxlTWV0YS5yb3dEYXRhKTtcclxuXHRcdFx0XHRcdHJldHVybiAhdGFibGVNZXRhLnJvd0RhdGFbNl0gPyAoXHJcblx0XHRcdFx0XHRcdDxJY29uQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rXHJcblx0XHRcdFx0XHRcdFx0XHRocmVmPXtgL2FkbWluL3Jlc2VydmF0aW9uLyR7dGFibGVNZXRhLnJvd0RhdGFbMF19YH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFJlcGx5SWNvbiBmb250U2l6ZT0nbGFyZ2UnIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XHJcblx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8TGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0aHJlZj17YC9hZG1pbi9yZXNlcnZhdGlvbi8ke3RhYmxlTWV0YS5yb3dEYXRhWzBdfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxWaXNpYmlsaXR5SWNvbiBmb250U2l6ZT0nbGFyZ2UnIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnU3VwcHInLFxyXG5cdFx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFx0Y3VzdG9tQm9keVJlbmRlcjogKHZhbHVlLCB0YWJsZU1ldGEsIHVwZGF0ZVZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0YWJsZU1ldGEucm93RGF0YSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8RGVsZXRlRm9yZXZlckljb25cclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiAnMzBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAncmVkJyxcclxuXHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWxldGVDb25maXJtKHRhYmxlTWV0YS5yb3dEYXRhWzBdKVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvSWNvbkJ1dHRvbj5cclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XTtcclxuXHJcblx0Y29uc3Qgb3B0aW9ucyA9IHtcclxuXHRcdGZpbHRlclR5cGU6ICdjaGVja2JveCcsXHJcblx0XHRzZWxlY3RhYmxlUm93czogJ25vbmUnLFxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7bG9hZGluZyAmJiA8Q2lyY3VsYXJQcm9ncmVzcyAvPn1cclxuXHRcdFx0e3N1Y2Nlc3MgJiYgKFxyXG5cdFx0XHRcdDxTbmFja2JhclxyXG5cdFx0XHRcdFx0b3Blbj17b3Blbn1cclxuXHRcdFx0XHRcdGF1dG9IaWRlRHVyYXRpb249ezYwMDB9XHJcblx0XHRcdFx0XHRvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XHJcblx0XHRcdFx0XHQ8QWxlcnQgb25DbG9zZT17aGFuZGxlQ2xvc2V9IHNldmVyaXR5PSdzdWNjZXNzJz5cclxuXHRcdFx0XHRcdFx0e21lc3NhZ2V9XHJcblx0XHRcdFx0XHQ8L0FsZXJ0PlxyXG5cdFx0XHRcdDwvU25hY2tiYXI+XHJcblx0XHRcdCl9XHJcblx0XHRcdHtlcnJvciAmJiAoXHJcblx0XHRcdFx0PFNuYWNrYmFyXHJcblx0XHRcdFx0XHRvcGVuPXtvcGVufVxyXG5cdFx0XHRcdFx0YXV0b0hpZGVEdXJhdGlvbj17NjAwMH1cclxuXHRcdFx0XHRcdG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cclxuXHRcdFx0XHRcdDxBbGVydCBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gc2V2ZXJpdHk9J2Vycm9yJz5cclxuXHRcdFx0XHRcdFx0e2Vycm9yfVxyXG5cdFx0XHRcdFx0PC9BbGVydD5cclxuXHRcdFx0XHQ8L1NuYWNrYmFyPlxyXG5cdFx0XHQpfVxyXG5cdFx0XHQ8cCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT5cclxuXHRcdFx0XHR7bmV3UmVzZXJ2YXRpb24gPiAwXHJcblx0XHRcdFx0XHQ/IGBWb3VzIGF2ZXogJHtuZXdSZXNlcnZhdGlvbn0gbm91dmVsbGVzIHLDqXNlcnZhdGlvbnMgIWBcclxuXHRcdFx0XHRcdDogYEF1Y3VuZSBub3V2ZWxsZSByw6lzZXJ2YXRpb24gIWB9XHJcblx0XHRcdDwvcD5cclxuXHRcdFx0PE1VSURhdGFUYWJsZVxyXG5cdFx0XHRcdHRpdGxlPXsnUmVzZXJ2YXRpb25zJ31cclxuXHRcdFx0XHRkYXRhPXtyZXNlcnZhdGlvbnN9XHJcblx0XHRcdFx0Y29sdW1ucz17Y29sdW1uc31cclxuXHRcdFx0XHRvcHRpb25zPXtvcHRpb25zfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoTGlzdFJlc2VydmF0aW9uKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==