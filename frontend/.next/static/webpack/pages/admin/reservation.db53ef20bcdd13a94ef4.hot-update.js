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
            lineNumber: 127,
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
            lineNumber: 211,
            columnNumber: 7
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/admin/reservation/".concat(tableMeta.rowData[0]),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 8
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 9
          }
        }, __jsx(_material_ui_icons_Reply__WEBPACK_IMPORTED_MODULE_9___default.a, {
          fontSize: "large",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 10
          }
        })))) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["IconButton"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 7
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/admin/reservation/".concat(tableMeta.rowData[0]),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 8
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 9
          }
        }, __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_13___default.a, {
          fontSize: "large",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224,
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
            lineNumber: 238,
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
            lineNumber: 239,
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
      console.log('row =>', row);
      console.log('dataIndex =>', dataIndex);
      console.log('rowIndex =>', rowIndex);
    }
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, loading && __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 16
    }
  }), success && __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_15__["default"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 5
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 6
    }
  }, message)), error && __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_15__["default"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 5
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 6
    }
  }, error)), __jsx("p", {
    style: {
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
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
      lineNumber: 293,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0UmVzZXJ2YXRpb24uanMiXSwibmFtZXMiOlsiQWxlcnQiLCJwcm9wcyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJMaXN0UmVzZXJ2YXRpb24iLCJyZXNlcnZhdGlvbnMiLCJuZXdSZXNlcnZhdGlvbiIsInJvdXRlciIsImNsYXNzZXMiLCJ0b2tlbiIsImdldENvb2tpZSIsInVzZVN0YXRlIiwibG9hZGluZyIsImVycm9yIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJ2YWx1ZXMiLCJzZXR2YWx1ZXMiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZUNsb3NlIiwiZXZlbnQiLCJyZWFzb24iLCJkZWxldGVSZXNlcnZhdGlvbiIsImlkIiwicmVtb3ZlUmVzZXJ2YXRpb24iLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwicmVsb2FkIiwiZGVsZXRlQ29uZmlybSIsImFuc3dlciIsIndpbmRvdyIsImNvbmZpcm0iLCJjb2x1bW5zIiwibmFtZSIsImxhYmVsIiwib3B0aW9ucyIsImZpbHRlciIsInNvcnQiLCJjdXN0b21Cb2R5UmVuZGVyIiwidmFsdWUiLCJ0YWJsZU1ldGEiLCJ1cGRhdGVWYWx1ZSIsInJvd0RhdGEiLCJmb250U2l6ZSIsImNvbG9yIiwiZmlsdGVyVHlwZSIsInNlbGVjdGFibGVSb3dzIiwic2V0Um93UHJvcHMiLCJyb3ciLCJkYXRhSW5kZXgiLCJyb3dJbmRleCIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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RUFBRUQsWUFGUDtBQUdDLFdBQU8sRUFBRStCLE9BSFY7QUFJQyxXQUFPLEVBQUVHLE9BSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNCRCxDQUREO0FBb0NBLENBdlFEOztHQUFNbkMsZTtVQUNXUCxTOzs7TUFEWE8sZTtBQXlRUyxxRUFBQW1ELCtEQUFVLENBQUNuRCxlQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL3Jlc2VydmF0aW9uLmRiNTNlZjIwYmNkZDEzYTk0ZWY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBUYWJsZSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHsgcmVtb3ZlTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvbWVzc2FnZUFjdGlvbnMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IE1VSURhdGFUYWJsZSBmcm9tICdtdWktZGF0YXRhYmxlcyc7XHJcbi8vIGltcG9ydCBBZGRCb3hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGRCb3gnO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJztcclxuaW1wb3J0IFJlcGx5SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUmVwbHknO1xyXG5pbXBvcnQgRmliZXJOZXdJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GaWJlck5ldyc7XHJcbmltcG9ydCBDaGVja0JveEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrQm94JztcclxuaW1wb3J0IENoZWNrQm94T3V0bGluZUJsYW5rSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2tCb3hPdXRsaW5lQmxhbmsnO1xyXG5pbXBvcnQgVmlzaWJpbGl0eUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Zpc2liaWxpdHknO1xyXG5pbXBvcnQgRGVsZXRlRm9yZXZlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZUZvcmV2ZXInO1xyXG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXInO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTXVpQWxlcnQgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BbGVydCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBJY29uQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyByZW1vdmVSZXNlcnZhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvcmVzZXJ2YXRpb25BY3Rpb25zJztcclxuaW1wb3J0IHsgbGlzdGVEZXNHaXRlcywgbGlzdEdpdGVCeUlkIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCBHaXRlTm9tIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvR2l0ZU5vbSc7XHJcblxyXG5mdW5jdGlvbiBBbGVydChwcm9wcykge1xyXG5cdHJldHVybiA8TXVpQWxlcnQgZWxldmF0aW9uPXs2fSB2YXJpYW50PSdmaWxsZWQnIHsuLi5wcm9wc30gLz47XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHQnJiA+ICogKyAqJzoge1xyXG5cdFx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0XHR9LFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IExpc3RSZXNlcnZhdGlvbiA9ICh7IHJlc2VydmF0aW9ucywgbmV3UmVzZXJ2YXRpb24sIHJvdXRlciB9KSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHJcblx0Ly9Bam91dGVyIGxlIGRlbGV0ZSBldCBtdWx0aXBsZSBkZWxldGVcclxuXHRjb25zdCBbdmFsdWVzLCBzZXR2YWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRlcnJvcjogJycsXHJcblx0XHRzdWNjZXNzOiAnJyxcclxuXHRcdG1lc3NhZ2U6ICcnLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdGNvbnN0IHsgbG9hZGluZywgc3VjY2VzcywgZXJyb3IsIG1lc3NhZ2UgfSA9IHZhbHVlcztcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2xvc2UgPSAoZXZlbnQsIHJlYXNvbikgPT4ge1xyXG5cdFx0aWYgKHJlYXNvbiA9PT0gJ2NsaWNrYXdheScpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNldHZhbHVlcyh7IC4uLnZhbHVlcywgc3VjY2VzczogZmFsc2UsIGVycm9yOiBmYWxzZSB9KTtcclxuXHRcdHNldE9wZW4oZmFsc2UpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRlbGV0ZVJlc2VydmF0aW9uID0gKGlkKSA9PiB7XHJcblx0XHRzZXR2YWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUgfSk7XHJcblx0XHRyZW1vdmVSZXNlcnZhdGlvbihpZCwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2RhdGEgdmF1dCcsIGRhdGEpO1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdHNldHZhbHVlcyh7XHJcblx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRcdGVycm9yOiB0cnVlLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogZmFsc2UsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0dmFsdWVzKHtcclxuXHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdG9wZW46IHRydWUsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRcdGVycm9yOiAnJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IHRydWUsXHJcblx0XHRcdFx0XHRtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRyb3V0ZXIucmVsb2FkKCk7XHJcblx0XHRcdFx0fSwgMzAwMCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRlbGV0ZUNvbmZpcm0gPSAoaWQpID0+IHtcclxuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRsZXQgYW5zd2VyID0gd2luZG93LmNvbmZpcm0oXHJcblx0XHRcdFx0YFN1cHByZXNzaW9uIGRlIGxhIHLDqXNlcnZhdGlvbiAke2lkfSwgw6p0ZXMtdm91cyBzw7tyID9gXHJcblx0XHRcdCk7XHJcblx0XHRcdGlmIChhbnN3ZXIpIHtcclxuXHRcdFx0XHRkZWxldGVSZXNlcnZhdGlvbihpZCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBjb2x1bW5zID0gW1xyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnX2lkJyxcclxuXHRcdFx0bGFiZWw6ICcjJyxcclxuXHRcdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcdGZpbHRlcjogdHJ1ZSxcclxuXHRcdFx0XHRzb3J0OiB0cnVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ2NsaWVudCcsXHJcblx0XHRcdGxhYmVsOiAnQ2xpZW50JyxcclxuXHRcdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcdGZpbHRlcjogdHJ1ZSxcclxuXHRcdFx0XHRzb3J0OiB0cnVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ2dpdGUnLFxyXG5cdFx0XHRsYWJlbDogJ0dpdGUnLFxyXG5cdFx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFx0ZmlsdGVyOiB0cnVlLFxyXG5cdFx0XHRcdHNvcnQ6IGZhbHNlLFxyXG5cclxuXHRcdFx0XHRjdXN0b21Cb2R5UmVuZGVyOiAodmFsdWUsIHRhYmxlTWV0YSwgdXBkYXRlVmFsdWUpID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiA8R2l0ZU5vbSB2YWx1ZT17dmFsdWV9IC8+O1xyXG5cclxuXHRcdFx0XHRcdC8vIHJldHVybiBnaXRlcy5tYXAoKGdpdGUpID0+IHtcclxuXHRcdFx0XHRcdC8vIFx0Y29uc29sZS5sb2coJ2xlIGdpdGUgPT4nLCBnaXRlLl9pZCA9PT0gdmFsdWUpO1xyXG5cdFx0XHRcdFx0Ly8gXHQ8cD57dmFsdWUgPT09IGdpdGUuX2lkICYmIGdpdGUuc2x1Z308L3A+O1xyXG5cdFx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdzdGF0dXMnLFxyXG5cdFx0XHRsYWJlbDogJ1N0YXR1cycsXHJcblx0XHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0XHRmaWx0ZXI6IHRydWUsXHJcblx0XHRcdFx0c29ydDogZmFsc2UsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnZGF0ZUFycml2ZWUnLFxyXG5cdFx0XHRsYWJlbDogXCJEYXRlIGQnYXJyaXZlZVwiLFxyXG5cdFx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFx0ZmlsdGVyOiB0cnVlLFxyXG5cdFx0XHRcdHNvcnQ6IGZhbHNlLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ2RhdGVEZXBhcnQnLFxyXG5cdFx0XHRsYWJlbDogJ0RhdGUgZGUgZMOpcGFydCcsXHJcblx0XHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0XHRmaWx0ZXI6IHRydWUsXHJcblx0XHRcdFx0c29ydDogZmFsc2UsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIHtcclxuXHRcdC8vIFx0bmFtZTogJ21zZycsXHJcblx0XHQvLyBcdGxhYmVsOiAnTWVzc2FnZScsXHJcblx0XHQvLyBcdG9wdGlvbnM6IHtcclxuXHRcdC8vIFx0XHRmaWx0ZXI6IHRydWUsXHJcblx0XHQvLyBcdFx0c29ydDogZmFsc2UsXHJcblx0XHQvLyBcdFx0Y3VzdG9tQm9keVJlbmRlcjogKHZhbHVlLCB0YWJsZU1ldGEsIHVwZGF0ZVZhbHVlKSA9PiB7XHJcblx0XHQvLyBcdFx0XHRyZXR1cm4gPHA+e3ZhbHVlLnN1YnN0cmluZygwLCAyMCkgKyAnLi4uJ308L3A+O1xyXG5cdFx0Ly8gXHRcdH0sXHJcblx0XHQvLyBcdH0sXHJcblx0XHQvLyB9LFxyXG5cdFx0Ly8ge1xyXG5cdFx0Ly8gXHRuYW1lOiAndnUnLFxyXG5cdFx0Ly8gXHRsYWJlbDogJ05vbiBsdScsXHJcblx0XHQvLyBcdG9wdGlvbnM6IHtcclxuXHRcdC8vIFx0XHRmaWx0ZXI6IHRydWUsXHJcblx0XHQvLyBcdFx0Y3VzdG9tQm9keVJlbmRlcjogKHZhbHVlLCB0YWJsZU1ldGEsIHVwZGF0ZVZhbHVlKSA9PiB7XHJcblx0XHQvLyBcdFx0XHRyZXR1cm4gKFxyXG5cdFx0Ly8gXHRcdFx0XHQhdmFsdWUgJiYgKFxyXG5cdFx0Ly8gXHRcdFx0XHRcdDxGaWJlck5ld0ljb25cclxuXHRcdC8vIFx0XHRcdFx0XHRcdGZvbnRTaXplPSdsYXJnZSdcclxuXHRcdC8vIFx0XHRcdFx0XHRcdHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19XHJcblx0XHQvLyBcdFx0XHRcdFx0Lz5cclxuXHRcdC8vIFx0XHRcdFx0KVxyXG5cdFx0Ly8gXHRcdFx0KTtcclxuXHRcdC8vIFx0XHR9LFxyXG5cdFx0Ly8gXHR9LFxyXG5cdFx0Ly8gfSxcclxuXHRcdC8vIHtcclxuXHRcdC8vIFx0bmFtZTogJ3JlcG9uZHUnLFxyXG5cdFx0Ly8gXHRsYWJlbDogJ1LDqXBvbmR1JyxcclxuXHRcdC8vIFx0b3B0aW9uczoge1xyXG5cdFx0Ly8gXHRcdGZpbHRlcjogdHJ1ZSxcclxuXHRcdC8vIFx0XHRjdXN0b21Cb2R5UmVuZGVyOiAodmFsdWUsIHRhYmxlTWV0YSwgdXBkYXRlVmFsdWUpID0+IHtcclxuXHRcdC8vIFx0XHRcdHJldHVybiB2YWx1ZSA/IChcclxuXHRcdC8vIFx0XHRcdFx0PENoZWNrQm94SWNvbiAvPlxyXG5cdFx0Ly8gXHRcdFx0KSA6IChcclxuXHRcdC8vIFx0XHRcdFx0PENoZWNrQm94T3V0bGluZUJsYW5rSWNvbiAvPlxyXG5cdFx0Ly8gXHRcdFx0KTtcclxuXHRcdC8vIFx0XHR9LFxyXG5cdFx0Ly8gXHR9LFxyXG5cdFx0Ly8gfSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ0NvbnN1bHRlcicsXHJcblx0XHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0XHRzb3J0OiBmYWxzZSxcclxuXHRcdFx0XHRmaWx0ZXI6IGZhbHNlLFxyXG5cdFx0XHRcdGN1c3RvbUJvZHlSZW5kZXI6ICh2YWx1ZSwgdGFibGVNZXRhLCB1cGRhdGVWYWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codGFibGVNZXRhLnJvd0RhdGEpO1xyXG5cdFx0XHRcdFx0cmV0dXJuICF0YWJsZU1ldGEucm93RGF0YVs2XSA/IChcclxuXHRcdFx0XHRcdFx0PEljb25CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9e2AvYWRtaW4vcmVzZXJ2YXRpb24vJHt0YWJsZU1ldGEucm93RGF0YVswXX1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8UmVwbHlJY29uIGZvbnRTaXplPSdsYXJnZScgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdDwvSWNvbkJ1dHRvbj5cclxuXHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdDxJY29uQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rXHJcblx0XHRcdFx0XHRcdFx0XHRocmVmPXtgL2FkbWluL3Jlc2VydmF0aW9uLyR7dGFibGVNZXRhLnJvd0RhdGFbMF19YH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFZpc2liaWxpdHlJY29uIGZvbnRTaXplPSdsYXJnZScgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdDwvSWNvbkJ1dHRvbj5cclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdTdXBwcicsXHJcblx0XHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0XHRjdXN0b21Cb2R5UmVuZGVyOiAodmFsdWUsIHRhYmxlTWV0YSwgdXBkYXRlVmFsdWUpID0+IHtcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRhYmxlTWV0YS5yb3dEYXRhKTtcclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdDxJY29uQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDxEZWxldGVGb3JldmVySWNvblxyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6ICczMHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdyZWQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRlbGV0ZUNvbmZpcm0odGFibGVNZXRhLnJvd0RhdGFbMF0pXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9JY29uQnV0dG9uPlxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRdO1xyXG5cclxuXHRjb25zdCBvcHRpb25zID0ge1xyXG5cdFx0ZmlsdGVyVHlwZTogJ2NoZWNrYm94JyxcclxuXHRcdHNlbGVjdGFibGVSb3dzOiAnbm9uZScsXHJcblx0XHRzZXRSb3dQcm9wczogKHJvdywgZGF0YUluZGV4LCByb3dJbmRleCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygncm93ID0+Jywgcm93KTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2RhdGFJbmRleCA9PicsIGRhdGFJbmRleCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdyb3dJbmRleCA9PicsIHJvd0luZGV4KTtcclxuXHRcdH0sXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHtsb2FkaW5nICYmIDxDaXJjdWxhclByb2dyZXNzIC8+fVxyXG5cdFx0XHR7c3VjY2VzcyAmJiAoXHJcblx0XHRcdFx0PFNuYWNrYmFyXHJcblx0XHRcdFx0XHRvcGVuPXtvcGVufVxyXG5cdFx0XHRcdFx0YXV0b0hpZGVEdXJhdGlvbj17NjAwMH1cclxuXHRcdFx0XHRcdG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cclxuXHRcdFx0XHRcdDxBbGVydCBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gc2V2ZXJpdHk9J3N1Y2Nlc3MnPlxyXG5cdFx0XHRcdFx0XHR7bWVzc2FnZX1cclxuXHRcdFx0XHRcdDwvQWxlcnQ+XHJcblx0XHRcdFx0PC9TbmFja2Jhcj5cclxuXHRcdFx0KX1cclxuXHRcdFx0e2Vycm9yICYmIChcclxuXHRcdFx0XHQ8U25hY2tiYXJcclxuXHRcdFx0XHRcdG9wZW49e29wZW59XHJcblx0XHRcdFx0XHRhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfVxyXG5cdFx0XHRcdFx0b25DbG9zZT17aGFuZGxlQ2xvc2V9PlxyXG5cdFx0XHRcdFx0PEFsZXJ0IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBzZXZlcml0eT0nZXJyb3InPlxyXG5cdFx0XHRcdFx0XHR7ZXJyb3J9XHJcblx0XHRcdFx0XHQ8L0FsZXJ0PlxyXG5cdFx0XHRcdDwvU25hY2tiYXI+XHJcblx0XHRcdCl9XHJcblx0XHRcdDxwIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19PlxyXG5cdFx0XHRcdHtuZXdSZXNlcnZhdGlvbiA+IDBcclxuXHRcdFx0XHRcdD8gYFZvdXMgYXZleiAke25ld1Jlc2VydmF0aW9ufSBub3V2ZWxsZXMgcsOpc2VydmF0aW9ucyAhYFxyXG5cdFx0XHRcdFx0OiBgQXVjdW5lIG5vdXZlbGxlIHLDqXNlcnZhdGlvbiAhYH1cclxuXHRcdFx0PC9wPlxyXG5cdFx0XHQ8TVVJRGF0YVRhYmxlXHJcblx0XHRcdFx0dGl0bGU9eydSZXNlcnZhdGlvbnMnfVxyXG5cdFx0XHRcdGRhdGE9e3Jlc2VydmF0aW9uc31cclxuXHRcdFx0XHRjb2x1bW5zPXtjb2x1bW5zfVxyXG5cdFx0XHRcdG9wdGlvbnM9e29wdGlvbnN9XHJcblx0XHRcdC8+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihMaXN0UmVzZXJ2YXRpb24pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9