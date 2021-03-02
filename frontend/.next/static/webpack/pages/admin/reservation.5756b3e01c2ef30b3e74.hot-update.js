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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mui-datatables */ "./node_modules/mui-datatables/dist/index.js");
/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mui_datatables__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "./node_modules/@material-ui/icons/Visibility.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/DeleteForever */ "./node_modules/@material-ui/icons/DeleteForever.js");
/* harmony import */ var _material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _actions_reservationActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../actions/reservationActions */ "./actions/reservationActions.js");
/* harmony import */ var _components_admin_GiteNom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/admin/GiteNom */ "./components/admin/GiteNom.js");
/* harmony import */ var _components_admin_ClientNom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../components/admin/ClientNom */ "./components/admin/ClientNom.js");
/* harmony import */ var _AfficheDate__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../AfficheDate */ "./components/admin/AfficheDate.js");



var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\lists\\ListReservation.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



















function Alert(props) {
  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    elevation: 6,
    variant: "filled"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }));
}

_c = Alert;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2)
      }
    },
    nouveau: {
      boxShadow: '-1px 2px 5px 1px rgba(0, 0, 0, 0.7), -1px 2px 25px rgba(255, 255, 255, 0.8) inset'
    }
  };
});

var ListReservation = function ListReservation(_ref) {
  _s();

  var reservations = _ref.reservations,
      newReservation = _ref.newReservation,
      gites = _ref.gites,
      router = _ref.router;
  var classes = useStyles();
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_4__["getCookie"])('token');

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
    Object(_actions_reservationActions__WEBPACK_IMPORTED_MODULE_14__["removeReservation"])(id, token).then(function (data) {
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
      // Voir pour ajouter un custom filter sur le nom du client
      sort: true,
      // Voir pour ajouter un custom sort sur le nom du client
      customBodyRender: function customBodyRender(value, tableMeta, updateValue) {
        return __jsx(_components_admin_ClientNom__WEBPACK_IMPORTED_MODULE_16__["default"], {
          value: value,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }
        });
      }
    }
  }, {
    name: 'gite',
    label: 'Gite',
    options: {
      filter: true,
      // Voir pour ajouter un custom filter sur le nom du gîte
      sort: true,
      // Voir pour ajouter un custom sort sur le nom du gîte
      customBodyRender: function customBodyRender(value, tableMeta, updateValue) {
        return __jsx(_components_admin_GiteNom__WEBPACK_IMPORTED_MODULE_15__["default"], {
          value: value,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }
        });
      }
    }
  }, {
    name: 'status',
    label: 'Status',
    options: {
      filter: true,
      sort: true
    }
  }, {
    name: 'dateRes',
    label: 'Date de réservation',
    options: {
      filter: true,
      sort: true,
      sortDirection: 'desc'
    }
  }, {
    name: 'dateArrivee',
    label: "Date d'arrivee",
    options: {
      filter: true,
      sort: true,
      customBodyRender: function customBodyRender(value, tableMeta, updateValue) {
        // console.log(value);
        // console.log(tableMeta.rowData[6]);
        return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_AfficheDate__WEBPACK_IMPORTED_MODULE_17__["default"], {
          value: value,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 8
          }
        }), __jsx(_AfficheDate__WEBPACK_IMPORTED_MODULE_17__["default"], {
          value: tableMeta.rowData[6],
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 8
          }
        }));
      }
    }
  }, {
    name: 'dateDepart',
    label: 'Date de départ',
    options: {
      filter: true,
      sort: true,
      display: 'excluded'
    }
  }, {
    name: 'Consulter',
    options: {
      sort: false,
      filter: false,
      customBodyRender: function customBodyRender(value, tableMeta, updateValue) {
        // console.log(tableMeta.rowData);
        return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["IconButton"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 7
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/admin/reservation/".concat(tableMeta.rowData[0]),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 8
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 9
          }
        }, __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_8___default.a, {
          fontSize: "large",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187,
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
        return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["IconButton"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 7
          }
        }, __jsx(_material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_9___default.a, {
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
            lineNumber: 202,
            columnNumber: 8
          }
        }));
      }
    }
  }];
  var options = {
    filterType: 'checkbox',
    selectableRows: 'none',
    setRowProps: function setRowProps(row) {
      //ajouter style selon le status
      var _iterator = _createForOfIteratorHelper(gites),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var gite = _step.value;

          if (row[2].props.value === gite._id) {
            var _iterator2 = _createForOfIteratorHelper(reservations),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var reservation = _step2.value;
                console.log(reservation);

                if (reservation.status === 'Nouvelle réservation') {
                  return {
                    className: classes.nouveau,
                    style: {
                      background: gite.couleur1
                    }
                  };
                } else {
                  return {
                    style: {
                      background: gite.couleur1
                    }
                  };
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, loading && __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 16
    }
  }), success && __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 5
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 6
    }
  }, message)), error && __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 5
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 6
    }
  }, error)), __jsx("p", {
    style: {
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 4
    }
  }, newReservation > 0 ? "Vous avez ".concat(newReservation, " nouvelles r\xE9servations !") : "Aucune nouvelle r\xE9servation !"), __jsx(mui_datatables__WEBPACK_IMPORTED_MODULE_6___default.a, {
    title: 'Reservations',
    data: reservations,
    columns: columns,
    options: options,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 4
    }
  }));
};

_s(ListReservation, "pwuWGrWnYv+O9Ikzt7MRfmAKFAs=", false, function () {
  return [useStyles];
});

_c2 = ListReservation;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(ListReservation));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0UmVzZXJ2YXRpb24uanMiXSwibmFtZXMiOlsiQWxlcnQiLCJwcm9wcyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJub3V2ZWF1IiwiYm94U2hhZG93IiwiTGlzdFJlc2VydmF0aW9uIiwicmVzZXJ2YXRpb25zIiwibmV3UmVzZXJ2YXRpb24iLCJnaXRlcyIsInJvdXRlciIsImNsYXNzZXMiLCJ0b2tlbiIsImdldENvb2tpZSIsInVzZVN0YXRlIiwibG9hZGluZyIsImVycm9yIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJ2YWx1ZXMiLCJzZXR2YWx1ZXMiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZUNsb3NlIiwiZXZlbnQiLCJyZWFzb24iLCJkZWxldGVSZXNlcnZhdGlvbiIsImlkIiwicmVtb3ZlUmVzZXJ2YXRpb24iLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwicmVsb2FkIiwiZGVsZXRlQ29uZmlybSIsImFuc3dlciIsIndpbmRvdyIsImNvbmZpcm0iLCJjb2x1bW5zIiwibmFtZSIsImxhYmVsIiwib3B0aW9ucyIsImZpbHRlciIsInNvcnQiLCJjdXN0b21Cb2R5UmVuZGVyIiwidmFsdWUiLCJ0YWJsZU1ldGEiLCJ1cGRhdGVWYWx1ZSIsInNvcnREaXJlY3Rpb24iLCJyb3dEYXRhIiwiZGlzcGxheSIsImZvbnRTaXplIiwiY29sb3IiLCJmaWx0ZXJUeXBlIiwic2VsZWN0YWJsZVJvd3MiLCJzZXRSb3dQcm9wcyIsInJvdyIsImdpdGUiLCJfaWQiLCJyZXNlcnZhdGlvbiIsInN0YXR1cyIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZCIsImNvdWxldXIxIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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RUFBRSxJQUZuQjtBQUdDLFdBQU8sRUFBRUUsV0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUMsTUFBQyxLQUFEO0FBQU8sV0FBTyxFQUFFQSxXQUFoQjtBQUE2QixZQUFRLEVBQUMsU0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFTCxPQURGLENBSkQsQ0FIRixFQVlFRixLQUFLLElBQ0wsTUFBQyxtRUFBRDtBQUNDLFFBQUksRUFBRUssSUFEUDtBQUVDLG9CQUFnQixFQUFFLElBRm5CO0FBR0MsV0FBTyxFQUFFRSxXQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJQyxNQUFDLEtBQUQ7QUFBTyxXQUFPLEVBQUVBLFdBQWhCO0FBQTZCLFlBQVEsRUFBQyxPQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VQLEtBREYsQ0FKRCxDQWJGLEVBc0JDO0FBQUcsU0FBSyxFQUFFO0FBQUVxQyxXQUFLLEVBQUU7QUFBVCxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTdDLGNBQWMsR0FBRyxDQUFqQix1QkFDZUEsY0FEZixzRUFERixDQXRCRCxFQTJCQyxNQUFDLHFEQUFEO0FBQ0MsU0FBSyxFQUFFLGNBRFI7QUFFQyxRQUFJLEVBQUVELFlBRlA7QUFHQyxXQUFPLEVBQUVnQyxPQUhWO0FBSUMsV0FBTyxFQUFFRyxPQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQkQsQ0FERDtBQW9DQSxDQXZQRDs7R0FBTXBDLGU7VUFDV1QsUzs7O01BRFhTLGU7QUF5UFMscUVBQUE0RCwrREFBVSxDQUFDNUQsZUFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9yZXNlcnZhdGlvbi41NzU2YjNlMDFjMmVmMzBiM2U3NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IE1VSURhdGFUYWJsZSBmcm9tICdtdWktZGF0YXRhYmxlcyc7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xyXG5pbXBvcnQgVmlzaWJpbGl0eUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Zpc2liaWxpdHknO1xyXG5pbXBvcnQgRGVsZXRlRm9yZXZlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZUZvcmV2ZXInO1xyXG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXInO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTXVpQWxlcnQgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BbGVydCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBJY29uQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyByZW1vdmVSZXNlcnZhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvcmVzZXJ2YXRpb25BY3Rpb25zJztcclxuaW1wb3J0IEdpdGVOb20gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9hZG1pbi9HaXRlTm9tJztcclxuaW1wb3J0IENsaWVudE5vbSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2FkbWluL0NsaWVudE5vbSc7XHJcbmltcG9ydCBBZmZpY2hlRGF0ZSBmcm9tICcuLi9BZmZpY2hlRGF0ZSc7XHJcblxyXG5mdW5jdGlvbiBBbGVydChwcm9wcykge1xyXG5cdHJldHVybiA8TXVpQWxlcnQgZWxldmF0aW9uPXs2fSB2YXJpYW50PSdmaWxsZWQnIHsuLi5wcm9wc30gLz47XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHQnJiA+ICogKyAqJzoge1xyXG5cdFx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0bm91dmVhdToge1xyXG5cdFx0Ym94U2hhZG93OlxyXG5cdFx0XHQnLTFweCAycHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNyksIC0xcHggMnB4IDI1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpIGluc2V0JyxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5jb25zdCBMaXN0UmVzZXJ2YXRpb24gPSAoeyByZXNlcnZhdGlvbnMsIG5ld1Jlc2VydmF0aW9uLCBnaXRlcywgcm91dGVyIH0pID0+IHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cclxuXHRjb25zdCBbdmFsdWVzLCBzZXR2YWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRlcnJvcjogJycsXHJcblx0XHRzdWNjZXNzOiAnJyxcclxuXHRcdG1lc3NhZ2U6ICcnLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdGNvbnN0IHsgbG9hZGluZywgc3VjY2VzcywgZXJyb3IsIG1lc3NhZ2UgfSA9IHZhbHVlcztcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2xvc2UgPSAoZXZlbnQsIHJlYXNvbikgPT4ge1xyXG5cdFx0aWYgKHJlYXNvbiA9PT0gJ2NsaWNrYXdheScpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNldHZhbHVlcyh7IC4uLnZhbHVlcywgc3VjY2VzczogZmFsc2UsIGVycm9yOiBmYWxzZSB9KTtcclxuXHRcdHNldE9wZW4oZmFsc2UpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRlbGV0ZVJlc2VydmF0aW9uID0gKGlkKSA9PiB7XHJcblx0XHRzZXR2YWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUgfSk7XHJcblx0XHRyZW1vdmVSZXNlcnZhdGlvbihpZCwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2RhdGEgdmF1dCcsIGRhdGEpO1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdHNldHZhbHVlcyh7XHJcblx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRcdGVycm9yOiB0cnVlLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogZmFsc2UsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0dmFsdWVzKHtcclxuXHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdG9wZW46IHRydWUsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRcdGVycm9yOiAnJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IHRydWUsXHJcblx0XHRcdFx0XHRtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRyb3V0ZXIucmVsb2FkKCk7XHJcblx0XHRcdFx0fSwgMzAwMCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRlbGV0ZUNvbmZpcm0gPSAoaWQpID0+IHtcclxuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRsZXQgYW5zd2VyID0gd2luZG93LmNvbmZpcm0oXHJcblx0XHRcdFx0YFN1cHByZXNzaW9uIGRlIGxhIHLDqXNlcnZhdGlvbiAke2lkfSwgw6p0ZXMtdm91cyBzw7tyID9gXHJcblx0XHRcdCk7XHJcblx0XHRcdGlmIChhbnN3ZXIpIHtcclxuXHRcdFx0XHRkZWxldGVSZXNlcnZhdGlvbihpZCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBjb2x1bW5zID0gW1xyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnX2lkJyxcclxuXHRcdFx0bGFiZWw6ICcjJyxcclxuXHRcdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcdGZpbHRlcjogdHJ1ZSxcclxuXHRcdFx0XHRzb3J0OiB0cnVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ2NsaWVudCcsXHJcblx0XHRcdGxhYmVsOiAnQ2xpZW50JyxcclxuXHRcdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcdGZpbHRlcjogdHJ1ZSwgLy8gVm9pciBwb3VyIGFqb3V0ZXIgdW4gY3VzdG9tIGZpbHRlciBzdXIgbGUgbm9tIGR1IGNsaWVudFxyXG5cdFx0XHRcdHNvcnQ6IHRydWUsIC8vIFZvaXIgcG91ciBham91dGVyIHVuIGN1c3RvbSBzb3J0IHN1ciBsZSBub20gZHUgY2xpZW50XHJcblx0XHRcdFx0Y3VzdG9tQm9keVJlbmRlcjogKHZhbHVlLCB0YWJsZU1ldGEsIHVwZGF0ZVZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gPENsaWVudE5vbSB2YWx1ZT17dmFsdWV9IC8+O1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnZ2l0ZScsXHJcblx0XHRcdGxhYmVsOiAnR2l0ZScsXHJcblx0XHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0XHRmaWx0ZXI6IHRydWUsIC8vIFZvaXIgcG91ciBham91dGVyIHVuIGN1c3RvbSBmaWx0ZXIgc3VyIGxlIG5vbSBkdSBnw650ZVxyXG5cdFx0XHRcdHNvcnQ6IHRydWUsIC8vIFZvaXIgcG91ciBham91dGVyIHVuIGN1c3RvbSBzb3J0IHN1ciBsZSBub20gZHUgZ8OudGVcclxuXHRcdFx0XHRjdXN0b21Cb2R5UmVuZGVyOiAodmFsdWUsIHRhYmxlTWV0YSwgdXBkYXRlVmFsdWUpID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiA8R2l0ZU5vbSB2YWx1ZT17dmFsdWV9IC8+O1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnc3RhdHVzJyxcclxuXHRcdFx0bGFiZWw6ICdTdGF0dXMnLFxyXG5cdFx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFx0ZmlsdGVyOiB0cnVlLFxyXG5cdFx0XHRcdHNvcnQ6IHRydWUsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnZGF0ZVJlcycsXHJcblx0XHRcdGxhYmVsOiAnRGF0ZSBkZSByw6lzZXJ2YXRpb24nLFxyXG5cdFx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFx0ZmlsdGVyOiB0cnVlLFxyXG5cdFx0XHRcdHNvcnQ6IHRydWUsXHJcblx0XHRcdFx0c29ydERpcmVjdGlvbjogJ2Rlc2MnLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ2RhdGVBcnJpdmVlJyxcclxuXHRcdFx0bGFiZWw6IFwiRGF0ZSBkJ2Fycml2ZWVcIixcclxuXHRcdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcdGZpbHRlcjogdHJ1ZSxcclxuXHRcdFx0XHRzb3J0OiB0cnVlLFxyXG5cdFx0XHRcdGN1c3RvbUJvZHlSZW5kZXI6ICh2YWx1ZSwgdGFibGVNZXRhLCB1cGRhdGVWYWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codmFsdWUpO1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codGFibGVNZXRhLnJvd0RhdGFbNl0pO1xyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHQ8QWZmaWNoZURhdGUgdmFsdWU9e3ZhbHVlfSAvPlxyXG5cdFx0XHRcdFx0XHRcdDxBZmZpY2hlRGF0ZSB2YWx1ZT17dGFibGVNZXRhLnJvd0RhdGFbNl19IC8+XHJcblx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ2RhdGVEZXBhcnQnLFxyXG5cdFx0XHRsYWJlbDogJ0RhdGUgZGUgZMOpcGFydCcsXHJcblxyXG5cdFx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFx0ZmlsdGVyOiB0cnVlLFxyXG5cdFx0XHRcdHNvcnQ6IHRydWUsXHJcblx0XHRcdFx0ZGlzcGxheTogJ2V4Y2x1ZGVkJyxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdDb25zdWx0ZXInLFxyXG5cdFx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFx0c29ydDogZmFsc2UsXHJcblx0XHRcdFx0ZmlsdGVyOiBmYWxzZSxcclxuXHRcdFx0XHRjdXN0b21Cb2R5UmVuZGVyOiAodmFsdWUsIHRhYmxlTWV0YSwgdXBkYXRlVmFsdWUpID0+IHtcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRhYmxlTWV0YS5yb3dEYXRhKTtcclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdDxJY29uQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rXHJcblx0XHRcdFx0XHRcdFx0XHRocmVmPXtgL2FkbWluL3Jlc2VydmF0aW9uLyR7dGFibGVNZXRhLnJvd0RhdGFbMF19YH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFZpc2liaWxpdHlJY29uIGZvbnRTaXplPSdsYXJnZScgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdDwvSWNvbkJ1dHRvbj5cclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdTdXBwcicsXHJcblx0XHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0XHRjdXN0b21Cb2R5UmVuZGVyOiAodmFsdWUsIHRhYmxlTWV0YSwgdXBkYXRlVmFsdWUpID0+IHtcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRhYmxlTWV0YS5yb3dEYXRhKTtcclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdDxJY29uQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDxEZWxldGVGb3JldmVySWNvblxyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6ICczMHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdyZWQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRlbGV0ZUNvbmZpcm0odGFibGVNZXRhLnJvd0RhdGFbMF0pXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9JY29uQnV0dG9uPlxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRdO1xyXG5cclxuXHRjb25zdCBvcHRpb25zID0ge1xyXG5cdFx0ZmlsdGVyVHlwZTogJ2NoZWNrYm94JyxcclxuXHRcdHNlbGVjdGFibGVSb3dzOiAnbm9uZScsXHJcblx0XHRzZXRSb3dQcm9wczogKHJvdykgPT4ge1xyXG5cdFx0XHQvL2Fqb3V0ZXIgc3R5bGUgc2Vsb24gbGUgc3RhdHVzXHJcblx0XHRcdGZvciAoY29uc3QgZ2l0ZSBvZiBnaXRlcykge1xyXG5cdFx0XHRcdGlmIChyb3dbMl0ucHJvcHMudmFsdWUgPT09IGdpdGUuX2lkKSB7XHJcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHJlc2VydmF0aW9uIG9mIHJlc2VydmF0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXNlcnZhdGlvbik7XHJcblx0XHRcdFx0XHRcdGlmIChyZXNlcnZhdGlvbi5zdGF0dXMgPT09ICdOb3V2ZWxsZSByw6lzZXJ2YXRpb24nKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZTogY2xhc3Nlcy5ub3V2ZWF1LFxyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogZ2l0ZS5jb3VsZXVyMSxcclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogZ2l0ZS5jb3VsZXVyMSxcclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e2xvYWRpbmcgJiYgPENpcmN1bGFyUHJvZ3Jlc3MgLz59XHJcblx0XHRcdHtzdWNjZXNzICYmIChcclxuXHRcdFx0XHQ8U25hY2tiYXJcclxuXHRcdFx0XHRcdG9wZW49e29wZW59XHJcblx0XHRcdFx0XHRhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfVxyXG5cdFx0XHRcdFx0b25DbG9zZT17aGFuZGxlQ2xvc2V9PlxyXG5cdFx0XHRcdFx0PEFsZXJ0IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBzZXZlcml0eT0nc3VjY2Vzcyc+XHJcblx0XHRcdFx0XHRcdHttZXNzYWdlfVxyXG5cdFx0XHRcdFx0PC9BbGVydD5cclxuXHRcdFx0XHQ8L1NuYWNrYmFyPlxyXG5cdFx0XHQpfVxyXG5cdFx0XHR7ZXJyb3IgJiYgKFxyXG5cdFx0XHRcdDxTbmFja2JhclxyXG5cdFx0XHRcdFx0b3Blbj17b3Blbn1cclxuXHRcdFx0XHRcdGF1dG9IaWRlRHVyYXRpb249ezYwMDB9XHJcblx0XHRcdFx0XHRvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XHJcblx0XHRcdFx0XHQ8QWxlcnQgb25DbG9zZT17aGFuZGxlQ2xvc2V9IHNldmVyaXR5PSdlcnJvcic+XHJcblx0XHRcdFx0XHRcdHtlcnJvcn1cclxuXHRcdFx0XHRcdDwvQWxlcnQ+XHJcblx0XHRcdFx0PC9TbmFja2Jhcj5cclxuXHRcdFx0KX1cclxuXHRcdFx0PHAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+XHJcblx0XHRcdFx0e25ld1Jlc2VydmF0aW9uID4gMFxyXG5cdFx0XHRcdFx0PyBgVm91cyBhdmV6ICR7bmV3UmVzZXJ2YXRpb259IG5vdXZlbGxlcyByw6lzZXJ2YXRpb25zICFgXHJcblx0XHRcdFx0XHQ6IGBBdWN1bmUgbm91dmVsbGUgcsOpc2VydmF0aW9uICFgfVxyXG5cdFx0XHQ8L3A+XHJcblx0XHRcdDxNVUlEYXRhVGFibGVcclxuXHRcdFx0XHR0aXRsZT17J1Jlc2VydmF0aW9ucyd9XHJcblx0XHRcdFx0ZGF0YT17cmVzZXJ2YXRpb25zfVxyXG5cdFx0XHRcdGNvbHVtbnM9e2NvbHVtbnN9XHJcblx0XHRcdFx0b3B0aW9ucz17b3B0aW9uc31cclxuXHRcdFx0Lz5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKExpc3RSZXNlcnZhdGlvbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=