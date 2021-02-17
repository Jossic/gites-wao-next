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
      lineNumber: 19,
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
            lineNumber: 114,
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
            lineNumber: 125,
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
      sort: false
    }
  }, {
    name: 'dateArrivee',
    label: "Date d'arrivee",
    options: {
      filter: true,
      sort: true,
      customBodyRender: function customBodyRender(value, tableMeta, updateValue) {
        console.log(value);
        console.log(tableMeta);
        return;
      }
    }
  }, {
    name: 'dateDepart',
    label: 'Date de départ',
    options: {
      filter: true,
      sort: true
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
            lineNumber: 166,
            columnNumber: 7
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/admin/reservation/".concat(tableMeta.rowData[0]),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 8
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 9
          }
        }, __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_8___default.a, {
          fontSize: "large",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170,
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
            lineNumber: 184,
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
            lineNumber: 185,
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

                if (reservation.status == 'Nouvelle réservation') {
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
      lineNumber: 231,
      columnNumber: 16
    }
  }), success && __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 5
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 6
    }
  }, message)), error && __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 5
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 6
    }
  }, error)), __jsx("p", {
    style: {
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
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
      lineNumber: 257,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0UmVzZXJ2YXRpb24uanMiXSwibmFtZXMiOlsiQWxlcnQiLCJwcm9wcyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJub3V2ZWF1IiwiYm94U2hhZG93IiwiTGlzdFJlc2VydmF0aW9uIiwicmVzZXJ2YXRpb25zIiwibmV3UmVzZXJ2YXRpb24iLCJnaXRlcyIsInJvdXRlciIsImNsYXNzZXMiLCJ0b2tlbiIsImdldENvb2tpZSIsInVzZVN0YXRlIiwibG9hZGluZyIsImVycm9yIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJ2YWx1ZXMiLCJzZXR2YWx1ZXMiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZUNsb3NlIiwiZXZlbnQiLCJyZWFzb24iLCJkZWxldGVSZXNlcnZhdGlvbiIsImlkIiwicmVtb3ZlUmVzZXJ2YXRpb24iLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwicmVsb2FkIiwiZGVsZXRlQ29uZmlybSIsImFuc3dlciIsIndpbmRvdyIsImNvbmZpcm0iLCJjb2x1bW5zIiwibmFtZSIsImxhYmVsIiwib3B0aW9ucyIsImZpbHRlciIsInNvcnQiLCJjdXN0b21Cb2R5UmVuZGVyIiwidmFsdWUiLCJ0YWJsZU1ldGEiLCJ1cGRhdGVWYWx1ZSIsInJvd0RhdGEiLCJmb250U2l6ZSIsImNvbG9yIiwiZmlsdGVyVHlwZSIsInNlbGVjdGFibGVSb3dzIiwic2V0Um93UHJvcHMiLCJyb3ciLCJnaXRlIiwiX2lkIiwicmVzZXJ2YXRpb24iLCJzdGF0dXMiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmQiLCJjb3VsZXVyMSIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRVAsS0FERixDQUpELENBYkYsRUFzQkM7QUFBRyxTQUFLLEVBQUU7QUFBRW1DLFdBQUssRUFBRTtBQUFULEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFM0MsY0FBYyxHQUFHLENBQWpCLHVCQUNlQSxjQURmLHNFQURGLENBdEJELEVBMkJDLE1BQUMscURBQUQ7QUFDQyxTQUFLLEVBQUUsY0FEUjtBQUVDLFFBQUksRUFBRUQsWUFGUDtBQUdDLFdBQU8sRUFBRWdDLE9BSFY7QUFJQyxXQUFPLEVBQUVHLE9BSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNCRCxDQUREO0FBb0NBLENBdE9EOztHQUFNcEMsZTtVQUNXVCxTOzs7TUFEWFMsZTtBQXdPUyxxRUFBQTBELCtEQUFVLENBQUMxRCxlQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL3Jlc2VydmF0aW9uLjIyYTIwNGQzZGVjYjFiNDQ0OTI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgTVVJRGF0YVRhYmxlIGZyb20gJ211aS1kYXRhdGFibGVzJztcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XHJcbmltcG9ydCBWaXNpYmlsaXR5SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVmlzaWJpbGl0eSc7XHJcbmltcG9ydCBEZWxldGVGb3JldmVySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlRm9yZXZlcic7XHJcbmltcG9ydCBTbmFja2JhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2Jhcic7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBNdWlBbGVydCBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IHJlbW92ZVJlc2VydmF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9yZXNlcnZhdGlvbkFjdGlvbnMnO1xyXG5pbXBvcnQgR2l0ZU5vbSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2FkbWluL0dpdGVOb20nO1xyXG5pbXBvcnQgQ2xpZW50Tm9tIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW4vQ2xpZW50Tm9tJztcclxuXHJcbmZ1bmN0aW9uIEFsZXJ0KHByb3BzKSB7XHJcblx0cmV0dXJuIDxNdWlBbGVydCBlbGV2YXRpb249ezZ9IHZhcmlhbnQ9J2ZpbGxlZCcgey4uLnByb3BzfSAvPjtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0cm9vdDoge1xyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdCcmID4gKiArIConOiB7XHJcblx0XHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRub3V2ZWF1OiB7XHJcblx0XHRib3hTaGFkb3c6XHJcblx0XHRcdCctMXB4IDJweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC43KSwgLTFweCAycHggMjVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCkgaW5zZXQnLFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IExpc3RSZXNlcnZhdGlvbiA9ICh7IHJlc2VydmF0aW9ucywgbmV3UmVzZXJ2YXRpb24sIGdpdGVzLCByb3V0ZXIgfSkgPT4ge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblxyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldHZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdGVycm9yOiAnJyxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0bWVzc2FnZTogJycsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Y29uc3QgeyBsb2FkaW5nLCBzdWNjZXNzLCBlcnJvciwgbWVzc2FnZSB9ID0gdmFsdWVzO1xyXG5cclxuXHRjb25zdCBoYW5kbGVDbG9zZSA9IChldmVudCwgcmVhc29uKSA9PiB7XHJcblx0XHRpZiAocmVhc29uID09PSAnY2xpY2thd2F5Jykge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0dmFsdWVzKHsgLi4udmFsdWVzLCBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGZhbHNlIH0pO1xyXG5cdFx0c2V0T3BlbihmYWxzZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZGVsZXRlUmVzZXJ2YXRpb24gPSAoaWQpID0+IHtcclxuXHRcdHNldHZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHRcdHJlbW92ZVJlc2VydmF0aW9uKGlkLCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZGF0YSB2YXV0JywgZGF0YSk7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0c2V0dmFsdWVzKHtcclxuXHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdFx0ZXJyb3I6IHRydWUsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmYWxzZSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXR2YWx1ZXMoe1xyXG5cdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0b3BlbjogdHJ1ZSxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdFx0ZXJyb3I6ICcnLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IGRhdGEubWVzc2FnZSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHJvdXRlci5yZWxvYWQoKTtcclxuXHRcdFx0XHR9LCAzMDAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZGVsZXRlQ29uZmlybSA9IChpZCkgPT4ge1xyXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdGxldCBhbnN3ZXIgPSB3aW5kb3cuY29uZmlybShcclxuXHRcdFx0XHRgU3VwcHJlc3Npb24gZGUgbGEgcsOpc2VydmF0aW9uICR7aWR9LCDDqnRlcy12b3VzIHPDu3IgP2BcclxuXHRcdFx0KTtcclxuXHRcdFx0aWYgKGFuc3dlcikge1xyXG5cdFx0XHRcdGRlbGV0ZVJlc2VydmF0aW9uKGlkKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNvbHVtbnMgPSBbXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdfaWQnLFxyXG5cdFx0XHRsYWJlbDogJyMnLFxyXG5cdFx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFx0ZmlsdGVyOiB0cnVlLFxyXG5cdFx0XHRcdHNvcnQ6IHRydWUsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnY2xpZW50JyxcclxuXHRcdFx0bGFiZWw6ICdDbGllbnQnLFxyXG5cdFx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFx0ZmlsdGVyOiB0cnVlLCAvLyBWb2lyIHBvdXIgYWpvdXRlciB1biBjdXN0b20gZmlsdGVyIHN1ciBsZSBub20gZHUgY2xpZW50XHJcblx0XHRcdFx0c29ydDogdHJ1ZSwgLy8gVm9pciBwb3VyIGFqb3V0ZXIgdW4gY3VzdG9tIHNvcnQgc3VyIGxlIG5vbSBkdSBjbGllbnRcclxuXHRcdFx0XHRjdXN0b21Cb2R5UmVuZGVyOiAodmFsdWUsIHRhYmxlTWV0YSwgdXBkYXRlVmFsdWUpID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiA8Q2xpZW50Tm9tIHZhbHVlPXt2YWx1ZX0gLz47XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdnaXRlJyxcclxuXHRcdFx0bGFiZWw6ICdHaXRlJyxcclxuXHRcdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcdGZpbHRlcjogdHJ1ZSwgLy8gVm9pciBwb3VyIGFqb3V0ZXIgdW4gY3VzdG9tIGZpbHRlciBzdXIgbGUgbm9tIGR1IGfDrnRlXHJcblx0XHRcdFx0c29ydDogdHJ1ZSwgLy8gVm9pciBwb3VyIGFqb3V0ZXIgdW4gY3VzdG9tIHNvcnQgc3VyIGxlIG5vbSBkdSBnw650ZVxyXG5cdFx0XHRcdGN1c3RvbUJvZHlSZW5kZXI6ICh2YWx1ZSwgdGFibGVNZXRhLCB1cGRhdGVWYWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDxHaXRlTm9tIHZhbHVlPXt2YWx1ZX0gLz47XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdzdGF0dXMnLFxyXG5cdFx0XHRsYWJlbDogJ1N0YXR1cycsXHJcblx0XHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0XHRmaWx0ZXI6IHRydWUsXHJcblx0XHRcdFx0c29ydDogZmFsc2UsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnZGF0ZUFycml2ZWUnLFxyXG5cdFx0XHRsYWJlbDogXCJEYXRlIGQnYXJyaXZlZVwiLFxyXG5cdFx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFx0ZmlsdGVyOiB0cnVlLFxyXG5cdFx0XHRcdHNvcnQ6IHRydWUsXHJcblx0XHRcdFx0Y3VzdG9tQm9keVJlbmRlcjogKHZhbHVlLCB0YWJsZU1ldGEsIHVwZGF0ZVZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh2YWx1ZSk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh0YWJsZU1ldGEpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnZGF0ZURlcGFydCcsXHJcblx0XHRcdGxhYmVsOiAnRGF0ZSBkZSBkw6lwYXJ0JyxcclxuXHRcdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcdGZpbHRlcjogdHJ1ZSxcclxuXHRcdFx0XHRzb3J0OiB0cnVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ0NvbnN1bHRlcicsXHJcblx0XHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0XHRzb3J0OiBmYWxzZSxcclxuXHRcdFx0XHRmaWx0ZXI6IGZhbHNlLFxyXG5cdFx0XHRcdGN1c3RvbUJvZHlSZW5kZXI6ICh2YWx1ZSwgdGFibGVNZXRhLCB1cGRhdGVWYWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codGFibGVNZXRhLnJvd0RhdGEpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PEljb25CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9e2AvYWRtaW4vcmVzZXJ2YXRpb24vJHt0YWJsZU1ldGEucm93RGF0YVswXX1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VmlzaWJpbGl0eUljb24gZm9udFNpemU9J2xhcmdlJyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PC9JY29uQnV0dG9uPlxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ1N1cHByJyxcclxuXHRcdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcdGN1c3RvbUJvZHlSZW5kZXI6ICh2YWx1ZSwgdGFibGVNZXRhLCB1cGRhdGVWYWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codGFibGVNZXRhLnJvd0RhdGEpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PEljb25CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PERlbGV0ZUZvcmV2ZXJJY29uXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZTogJzMwcHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3JlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVsZXRlQ29uZmlybSh0YWJsZU1ldGEucm93RGF0YVswXSlcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdF07XHJcblxyXG5cdGNvbnN0IG9wdGlvbnMgPSB7XHJcblx0XHRmaWx0ZXJUeXBlOiAnY2hlY2tib3gnLFxyXG5cdFx0c2VsZWN0YWJsZVJvd3M6ICdub25lJyxcclxuXHRcdHNldFJvd1Byb3BzOiAocm93KSA9PiB7XHJcblx0XHRcdC8vYWpvdXRlciBzdHlsZSBzZWxvbiBsZSBzdGF0dXNcclxuXHRcdFx0Zm9yIChjb25zdCBnaXRlIG9mIGdpdGVzKSB7XHJcblx0XHRcdFx0aWYgKHJvd1syXS5wcm9wcy52YWx1ZSA9PT0gZ2l0ZS5faWQpIHtcclxuXHRcdFx0XHRcdGZvciAoY29uc3QgcmVzZXJ2YXRpb24gb2YgcmVzZXJ2YXRpb25zKSB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXNlcnZhdGlvbi5zdGF0dXMgPT0gJ05vdXZlbGxlIHLDqXNlcnZhdGlvbicpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiBjbGFzc2VzLm5vdXZlYXUsXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZToge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBnaXRlLmNvdWxldXIxLFxyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZToge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBnaXRlLmNvdWxldXIxLFxyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7bG9hZGluZyAmJiA8Q2lyY3VsYXJQcm9ncmVzcyAvPn1cclxuXHRcdFx0e3N1Y2Nlc3MgJiYgKFxyXG5cdFx0XHRcdDxTbmFja2JhclxyXG5cdFx0XHRcdFx0b3Blbj17b3Blbn1cclxuXHRcdFx0XHRcdGF1dG9IaWRlRHVyYXRpb249ezYwMDB9XHJcblx0XHRcdFx0XHRvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XHJcblx0XHRcdFx0XHQ8QWxlcnQgb25DbG9zZT17aGFuZGxlQ2xvc2V9IHNldmVyaXR5PSdzdWNjZXNzJz5cclxuXHRcdFx0XHRcdFx0e21lc3NhZ2V9XHJcblx0XHRcdFx0XHQ8L0FsZXJ0PlxyXG5cdFx0XHRcdDwvU25hY2tiYXI+XHJcblx0XHRcdCl9XHJcblx0XHRcdHtlcnJvciAmJiAoXHJcblx0XHRcdFx0PFNuYWNrYmFyXHJcblx0XHRcdFx0XHRvcGVuPXtvcGVufVxyXG5cdFx0XHRcdFx0YXV0b0hpZGVEdXJhdGlvbj17NjAwMH1cclxuXHRcdFx0XHRcdG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cclxuXHRcdFx0XHRcdDxBbGVydCBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gc2V2ZXJpdHk9J2Vycm9yJz5cclxuXHRcdFx0XHRcdFx0e2Vycm9yfVxyXG5cdFx0XHRcdFx0PC9BbGVydD5cclxuXHRcdFx0XHQ8L1NuYWNrYmFyPlxyXG5cdFx0XHQpfVxyXG5cdFx0XHQ8cCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT5cclxuXHRcdFx0XHR7bmV3UmVzZXJ2YXRpb24gPiAwXHJcblx0XHRcdFx0XHQ/IGBWb3VzIGF2ZXogJHtuZXdSZXNlcnZhdGlvbn0gbm91dmVsbGVzIHLDqXNlcnZhdGlvbnMgIWBcclxuXHRcdFx0XHRcdDogYEF1Y3VuZSBub3V2ZWxsZSByw6lzZXJ2YXRpb24gIWB9XHJcblx0XHRcdDwvcD5cclxuXHRcdFx0PE1VSURhdGFUYWJsZVxyXG5cdFx0XHRcdHRpdGxlPXsnUmVzZXJ2YXRpb25zJ31cclxuXHRcdFx0XHRkYXRhPXtyZXNlcnZhdGlvbnN9XHJcblx0XHRcdFx0Y29sdW1ucz17Y29sdW1uc31cclxuXHRcdFx0XHRvcHRpb25zPXtvcHRpb25zfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoTGlzdFJlc2VydmF0aW9uKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==