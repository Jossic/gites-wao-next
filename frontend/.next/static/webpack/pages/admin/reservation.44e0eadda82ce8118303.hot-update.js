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
          console.log('row[2].props.value', row[2].props.value);

          if (row[2].props.value === gite._id) {
            console.log('au dessus du map', reservations);

            var _iterator2 = _createForOfIteratorHelper(reservations),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var reservation = _step2.value;
                console.log('dans le for ', reservation);

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
      lineNumber: 252,
      columnNumber: 16
    }
  }), success && __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 5
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 6
    }
  }, message)), error && __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 5
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 6
    }
  }, error)), __jsx("p", {
    style: {
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
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
      lineNumber: 278,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0UmVzZXJ2YXRpb24uanMiXSwibmFtZXMiOlsiQWxlcnQiLCJwcm9wcyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJub3V2ZWF1IiwiYm94U2hhZG93IiwiTGlzdFJlc2VydmF0aW9uIiwicmVzZXJ2YXRpb25zIiwibmV3UmVzZXJ2YXRpb24iLCJnaXRlcyIsInJvdXRlciIsImNsYXNzZXMiLCJ0b2tlbiIsImdldENvb2tpZSIsInVzZVN0YXRlIiwibG9hZGluZyIsImVycm9yIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJ2YWx1ZXMiLCJzZXR2YWx1ZXMiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZUNsb3NlIiwiZXZlbnQiLCJyZWFzb24iLCJkZWxldGVSZXNlcnZhdGlvbiIsImlkIiwicmVtb3ZlUmVzZXJ2YXRpb24iLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwicmVsb2FkIiwiZGVsZXRlQ29uZmlybSIsImFuc3dlciIsIndpbmRvdyIsImNvbmZpcm0iLCJjb2x1bW5zIiwibmFtZSIsImxhYmVsIiwib3B0aW9ucyIsImZpbHRlciIsInNvcnQiLCJjdXN0b21Cb2R5UmVuZGVyIiwidmFsdWUiLCJ0YWJsZU1ldGEiLCJ1cGRhdGVWYWx1ZSIsInNvcnREaXJlY3Rpb24iLCJyb3dEYXRhIiwiZGlzcGxheSIsImZvbnRTaXplIiwiY29sb3IiLCJmaWx0ZXJUeXBlIiwic2VsZWN0YWJsZVJvd3MiLCJzZXRSb3dQcm9wcyIsInJvdyIsImdpdGUiLCJfaWQiLCJyZXNlcnZhdGlvbiIsInN0YXR1cyIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZCIsImNvdWxldXIxIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFBNEQsK0RBQVUsQ0FBQzVELGVBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24uNDRlMGVhZGRhODJjZTgxMTgzMDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBNVUlEYXRhVGFibGUgZnJvbSAnbXVpLWRhdGF0YWJsZXMnO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJztcclxuaW1wb3J0IFZpc2liaWxpdHlJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9WaXNpYmlsaXR5JztcclxuaW1wb3J0IERlbGV0ZUZvcmV2ZXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EZWxldGVGb3JldmVyJztcclxuaW1wb3J0IFNuYWNrYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IE11aUFsZXJ0IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQWxlcnQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgcmVtb3ZlUmVzZXJ2YXRpb24gfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL3Jlc2VydmF0aW9uQWN0aW9ucyc7XHJcbmltcG9ydCBHaXRlTm9tIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW4vR2l0ZU5vbSc7XHJcbmltcG9ydCBDbGllbnROb20gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9hZG1pbi9DbGllbnROb20nO1xyXG5pbXBvcnQgQWZmaWNoZURhdGUgZnJvbSAnLi4vQWZmaWNoZURhdGUnO1xyXG5cclxuZnVuY3Rpb24gQWxlcnQocHJvcHMpIHtcclxuXHRyZXR1cm4gPE11aUFsZXJ0IGVsZXZhdGlvbj17Nn0gdmFyaWFudD0nZmlsbGVkJyB7Li4ucHJvcHN9IC8+O1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRyb290OiB7XHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0JyYgPiAqICsgKic6IHtcclxuXHRcdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdG5vdXZlYXU6IHtcclxuXHRcdGJveFNoYWRvdzpcclxuXHRcdFx0Jy0xcHggMnB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjcpLCAtMXB4IDJweCAyNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSBpbnNldCcsXHJcblx0fSxcclxufSkpO1xyXG5cclxuY29uc3QgTGlzdFJlc2VydmF0aW9uID0gKHsgcmVzZXJ2YXRpb25zLCBuZXdSZXNlcnZhdGlvbiwgZ2l0ZXMsIHJvdXRlciB9KSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHJcblx0Y29uc3QgW3ZhbHVlcywgc2V0dmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuXHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0ZXJyb3I6ICcnLFxyXG5cdFx0c3VjY2VzczogJycsXHJcblx0XHRtZXNzYWdlOiAnJyxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHRjb25zdCB7IGxvYWRpbmcsIHN1Y2Nlc3MsIGVycm9yLCBtZXNzYWdlIH0gPSB2YWx1ZXM7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNsb3NlID0gKGV2ZW50LCByZWFzb24pID0+IHtcclxuXHRcdGlmIChyZWFzb24gPT09ICdjbGlja2F3YXknKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRzZXR2YWx1ZXMoeyAuLi52YWx1ZXMsIHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZmFsc2UgfSk7XHJcblx0XHRzZXRPcGVuKGZhbHNlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBkZWxldGVSZXNlcnZhdGlvbiA9IChpZCkgPT4ge1xyXG5cdFx0c2V0dmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdFx0cmVtb3ZlUmVzZXJ2YXRpb24oaWQsIHRva2VuKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdkYXRhIHZhdXQnLCBkYXRhKTtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXR2YWx1ZXMoe1xyXG5cdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0XHRlcnJvcjogdHJ1ZSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZhbHNlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldHZhbHVlcyh7XHJcblx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRvcGVuOiB0cnVlLFxyXG5cdFx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0XHRlcnJvcjogJycsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiB0cnVlLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogZGF0YS5tZXNzYWdlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0cm91dGVyLnJlbG9hZCgpO1xyXG5cdFx0XHRcdH0sIDMwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBkZWxldGVDb25maXJtID0gKGlkKSA9PiB7XHJcblx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0bGV0IGFuc3dlciA9IHdpbmRvdy5jb25maXJtKFxyXG5cdFx0XHRcdGBTdXBwcmVzc2lvbiBkZSBsYSByw6lzZXJ2YXRpb24gJHtpZH0sIMOqdGVzLXZvdXMgc8O7ciA/YFxyXG5cdFx0XHQpO1xyXG5cdFx0XHRpZiAoYW5zd2VyKSB7XHJcblx0XHRcdFx0ZGVsZXRlUmVzZXJ2YXRpb24oaWQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY29sdW1ucyA9IFtcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ19pZCcsXHJcblx0XHRcdGxhYmVsOiAnIycsXHJcblx0XHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0XHRmaWx0ZXI6IHRydWUsXHJcblx0XHRcdFx0c29ydDogdHJ1ZSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdjbGllbnQnLFxyXG5cdFx0XHRsYWJlbDogJ0NsaWVudCcsXHJcblx0XHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0XHRmaWx0ZXI6IHRydWUsIC8vIFZvaXIgcG91ciBham91dGVyIHVuIGN1c3RvbSBmaWx0ZXIgc3VyIGxlIG5vbSBkdSBjbGllbnRcclxuXHRcdFx0XHRzb3J0OiB0cnVlLCAvLyBWb2lyIHBvdXIgYWpvdXRlciB1biBjdXN0b20gc29ydCBzdXIgbGUgbm9tIGR1IGNsaWVudFxyXG5cdFx0XHRcdGN1c3RvbUJvZHlSZW5kZXI6ICh2YWx1ZSwgdGFibGVNZXRhLCB1cGRhdGVWYWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDxDbGllbnROb20gdmFsdWU9e3ZhbHVlfSAvPjtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ2dpdGUnLFxyXG5cdFx0XHRsYWJlbDogJ0dpdGUnLFxyXG5cdFx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFx0ZmlsdGVyOiB0cnVlLCAvLyBWb2lyIHBvdXIgYWpvdXRlciB1biBjdXN0b20gZmlsdGVyIHN1ciBsZSBub20gZHUgZ8OudGVcclxuXHRcdFx0XHRzb3J0OiB0cnVlLCAvLyBWb2lyIHBvdXIgYWpvdXRlciB1biBjdXN0b20gc29ydCBzdXIgbGUgbm9tIGR1IGfDrnRlXHJcblx0XHRcdFx0Y3VzdG9tQm9keVJlbmRlcjogKHZhbHVlLCB0YWJsZU1ldGEsIHVwZGF0ZVZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gPEdpdGVOb20gdmFsdWU9e3ZhbHVlfSAvPjtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ3N0YXR1cycsXHJcblx0XHRcdGxhYmVsOiAnU3RhdHVzJyxcclxuXHRcdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcdGZpbHRlcjogdHJ1ZSxcclxuXHRcdFx0XHRzb3J0OiB0cnVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ2RhdGVSZXMnLFxyXG5cdFx0XHRsYWJlbDogJ0RhdGUgZGUgcsOpc2VydmF0aW9uJyxcclxuXHRcdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcdGZpbHRlcjogdHJ1ZSxcclxuXHRcdFx0XHRzb3J0OiB0cnVlLFxyXG5cdFx0XHRcdHNvcnREaXJlY3Rpb246ICdkZXNjJyxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdkYXRlQXJyaXZlZScsXHJcblx0XHRcdGxhYmVsOiBcIkRhdGUgZCdhcnJpdmVlXCIsXHJcblx0XHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0XHRmaWx0ZXI6IHRydWUsXHJcblx0XHRcdFx0c29ydDogdHJ1ZSxcclxuXHRcdFx0XHRjdXN0b21Cb2R5UmVuZGVyOiAodmFsdWUsIHRhYmxlTWV0YSwgdXBkYXRlVmFsdWUpID0+IHtcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRhYmxlTWV0YS5yb3dEYXRhWzZdKTtcclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0PEFmZmljaGVEYXRlIHZhbHVlPXt2YWx1ZX0gLz5cclxuXHRcdFx0XHRcdFx0XHQ8QWZmaWNoZURhdGUgdmFsdWU9e3RhYmxlTWV0YS5yb3dEYXRhWzZdfSAvPlxyXG5cdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdkYXRlRGVwYXJ0JyxcclxuXHRcdFx0bGFiZWw6ICdEYXRlIGRlIGTDqXBhcnQnLFxyXG5cclxuXHRcdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcdGZpbHRlcjogdHJ1ZSxcclxuXHRcdFx0XHRzb3J0OiB0cnVlLFxyXG5cdFx0XHRcdGRpc3BsYXk6ICdleGNsdWRlZCcsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnQ29uc3VsdGVyJyxcclxuXHRcdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcdHNvcnQ6IGZhbHNlLFxyXG5cdFx0XHRcdGZpbHRlcjogZmFsc2UsXHJcblx0XHRcdFx0Y3VzdG9tQm9keVJlbmRlcjogKHZhbHVlLCB0YWJsZU1ldGEsIHVwZGF0ZVZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0YWJsZU1ldGEucm93RGF0YSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8TGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0aHJlZj17YC9hZG1pbi9yZXNlcnZhdGlvbi8ke3RhYmxlTWV0YS5yb3dEYXRhWzBdfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxWaXNpYmlsaXR5SWNvbiBmb250U2l6ZT0nbGFyZ2UnIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnU3VwcHInLFxyXG5cdFx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFx0Y3VzdG9tQm9keVJlbmRlcjogKHZhbHVlLCB0YWJsZU1ldGEsIHVwZGF0ZVZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0YWJsZU1ldGEucm93RGF0YSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8RGVsZXRlRm9yZXZlckljb25cclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiAnMzBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAncmVkJyxcclxuXHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWxldGVDb25maXJtKHRhYmxlTWV0YS5yb3dEYXRhWzBdKVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvSWNvbkJ1dHRvbj5cclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XTtcclxuXHJcblx0Y29uc3Qgb3B0aW9ucyA9IHtcclxuXHRcdGZpbHRlclR5cGU6ICdjaGVja2JveCcsXHJcblx0XHRzZWxlY3RhYmxlUm93czogJ25vbmUnLFxyXG5cdFx0c2V0Um93UHJvcHM6IChyb3cpID0+IHtcclxuXHRcdFx0Ly9ham91dGVyIHN0eWxlIHNlbG9uIGxlIHN0YXR1c1xyXG5cdFx0XHRmb3IgKGNvbnN0IGdpdGUgb2YgZ2l0ZXMpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygncm93WzJdLnByb3BzLnZhbHVlJywgcm93WzJdLnByb3BzLnZhbHVlKTtcclxuXHRcdFx0XHRpZiAocm93WzJdLnByb3BzLnZhbHVlID09PSBnaXRlLl9pZCkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2F1IGRlc3N1cyBkdSBtYXAnLCByZXNlcnZhdGlvbnMpO1xyXG5cclxuXHRcdFx0XHRcdGZvciAoY29uc3QgcmVzZXJ2YXRpb24gb2YgcmVzZXJ2YXRpb25zKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdkYW5zIGxlIGZvciAnLCByZXNlcnZhdGlvbik7XHJcblx0XHRcdFx0XHRcdGlmIChyZXNlcnZhdGlvbi5zdGF0dXMgPT09ICdOb3V2ZWxsZSByw6lzZXJ2YXRpb24nKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZTogY2xhc3Nlcy5ub3V2ZWF1LFxyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogZ2l0ZS5jb3VsZXVyMSxcclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogZ2l0ZS5jb3VsZXVyMSxcclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e2xvYWRpbmcgJiYgPENpcmN1bGFyUHJvZ3Jlc3MgLz59XHJcblx0XHRcdHtzdWNjZXNzICYmIChcclxuXHRcdFx0XHQ8U25hY2tiYXJcclxuXHRcdFx0XHRcdG9wZW49e29wZW59XHJcblx0XHRcdFx0XHRhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfVxyXG5cdFx0XHRcdFx0b25DbG9zZT17aGFuZGxlQ2xvc2V9PlxyXG5cdFx0XHRcdFx0PEFsZXJ0IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBzZXZlcml0eT0nc3VjY2Vzcyc+XHJcblx0XHRcdFx0XHRcdHttZXNzYWdlfVxyXG5cdFx0XHRcdFx0PC9BbGVydD5cclxuXHRcdFx0XHQ8L1NuYWNrYmFyPlxyXG5cdFx0XHQpfVxyXG5cdFx0XHR7ZXJyb3IgJiYgKFxyXG5cdFx0XHRcdDxTbmFja2JhclxyXG5cdFx0XHRcdFx0b3Blbj17b3Blbn1cclxuXHRcdFx0XHRcdGF1dG9IaWRlRHVyYXRpb249ezYwMDB9XHJcblx0XHRcdFx0XHRvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XHJcblx0XHRcdFx0XHQ8QWxlcnQgb25DbG9zZT17aGFuZGxlQ2xvc2V9IHNldmVyaXR5PSdlcnJvcic+XHJcblx0XHRcdFx0XHRcdHtlcnJvcn1cclxuXHRcdFx0XHRcdDwvQWxlcnQ+XHJcblx0XHRcdFx0PC9TbmFja2Jhcj5cclxuXHRcdFx0KX1cclxuXHRcdFx0PHAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+XHJcblx0XHRcdFx0e25ld1Jlc2VydmF0aW9uID4gMFxyXG5cdFx0XHRcdFx0PyBgVm91cyBhdmV6ICR7bmV3UmVzZXJ2YXRpb259IG5vdXZlbGxlcyByw6lzZXJ2YXRpb25zICFgXHJcblx0XHRcdFx0XHQ6IGBBdWN1bmUgbm91dmVsbGUgcsOpc2VydmF0aW9uICFgfVxyXG5cdFx0XHQ8L3A+XHJcblx0XHRcdDxNVUlEYXRhVGFibGVcclxuXHRcdFx0XHR0aXRsZT17J1Jlc2VydmF0aW9ucyd9XHJcblx0XHRcdFx0ZGF0YT17cmVzZXJ2YXRpb25zfVxyXG5cdFx0XHRcdGNvbHVtbnM9e2NvbHVtbnN9XHJcblx0XHRcdFx0b3B0aW9ucz17b3B0aW9uc31cclxuXHRcdFx0Lz5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKExpc3RSZXNlcnZhdGlvbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=