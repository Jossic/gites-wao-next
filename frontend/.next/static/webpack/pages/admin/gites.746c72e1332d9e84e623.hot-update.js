webpackHotUpdate_N_E("pages/admin/gites",{

/***/ "./components/admin/lists/ListGites.js":
/*!*********************************************!*\
  !*** ./components/admin/lists/ListGites.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config */ "./config.js");
/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mui-datatables */ "./node_modules/mui-datatables/dist/index.js");
/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mui_datatables__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Widgets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Widgets */ "./node_modules/@material-ui/icons/Widgets.js");
/* harmony import */ var _material_ui_icons_Widgets__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Widgets__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _HOC_Snackbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../HOC/Snackbar */ "./components/HOC/Snackbar.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_icons_CheckBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/CheckBox */ "./node_modules/@material-ui/icons/CheckBox.js");
/* harmony import */ var _material_ui_icons_CheckBox__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckBox__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_CheckBoxOutlineBlank__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/CheckBoxOutlineBlank */ "./node_modules/@material-ui/icons/CheckBoxOutlineBlank.js");
/* harmony import */ var _material_ui_icons_CheckBoxOutlineBlank__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckBoxOutlineBlank__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/DeleteForever */ "./node_modules/@material-ui/icons/DeleteForever.js");
/* harmony import */ var _material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");
var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\lists\\ListGites.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



















var ListGites = function ListGites(_ref) {
  _s();

  var gites = _ref.gites,
      router = _ref.router,
      snackbarShowMessage = _ref.snackbarShowMessage;
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_15__["getCookie"])('token');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var removeGite = function removeGite(slug) {
    setLoading(true);
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_2__["deleteGite"])(slug, token).then(function (data) {
      if (data.error) {
        setLoading(false);
        snackbarShowMessage("".concat(data.error));
      } else {
        setLoading(false);
        snackbarShowMessage("".concat(data.text), 'success');
        setTimeout(function () {
          router.reload();
        }, 3000);
      }
    });
  };

  var deleteConfirm = function deleteConfirm(slug) {
    if (true) {
      var answer = window.confirm("Vous \xEAtes sur le point de supprimer le g\xEEte ".concat(slug, ", \xEAtes-vous s\xFBr ?"));

      if (answer) {
        removeGite(slug);
      }
    }
  };

  var columns = [{
    name: '_id',
    label: '#',
    options: {
      filter: true,
      sort: true // display: false,

    }
  }, {
    name: 'nom',
    label: 'Nom',
    options: {
      filter: true,
      sort: true
    }
  }, {
    name: 'slug',
    label: 'Slug',
    options: {
      filter: true,
      sort: true,
      display: 'none'
    }
  }, {
    name: 'tarifDeBase',
    label: 'Tarif de base',
    options: {
      filter: true,
      sort: false
    }
  }, {
    name: 'capaciteMax',
    label: 'Capacité',
    options: {
      filter: true,
      sort: false
    }
  }, {
    name: 'vignette',
    label: 'Vignette',
    options: {
      filter: false,
      sort: false,
      customBodyRender: function customBodyRender(value, tableMeta, updateValue) {
        console.log('vignette vaut =>', tableMeta);

        var _iterator = _createForOfIteratorHelper(gites),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var gite = _step.value;

            if (tableMeta.rowData[2] === gite.slug) {
              return __jsx(next_image__WEBPACK_IMPORTED_MODULE_14___default.a, {
                src: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/gite/photo/").concat(gite.slug),
                alt: "vignette ".concat(gite.slug),
                width: 75,
                height: 75,
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 9
                }
              });
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  }, {
    name: 'actif',
    label: 'Visible',
    options: {
      filter: true,
      customBodyRender: function customBodyRender(value, tableMeta, updateValue) {
        return value ? __jsx(_material_ui_icons_CheckBox__WEBPACK_IMPORTED_MODULE_10___default.a, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 7
          }
        }) : __jsx(_material_ui_icons_CheckBoxOutlineBlank__WEBPACK_IMPORTED_MODULE_11___default.a, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 7
          }
        });
      }
    }
  }, {
    name: 'Consulter',
    options: {
      sort: false,
      filter: false,
      customBodyRender: function customBodyRender(value, tableMeta, updateValue) {
        // console.log(tableMeta.rowData);
        return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 7
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
          href: "/admin/gite/".concat(tableMeta.rowData[0]),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 8
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 9
          }
        }, __jsx(_material_ui_icons_Widgets__WEBPACK_IMPORTED_MODULE_6___default.a, {
          fontSize: "large",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143,
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
        return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 7
          }
        }, __jsx(_material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_12___default.a, {
          style: {
            fontSize: '30px',
            color: 'red'
          },
          onClick: function onClick() {
            return deleteConfirm(tableMeta.rowData[2]);
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158,
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
      console.log('row vaut', row[2]);

      var _iterator2 = _createForOfIteratorHelper(gites),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var gite = _step2.value;

          if (row[2] === gite.slug) {
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
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, loading && __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 16
    }
  }), __jsx(mui_datatables__WEBPACK_IMPORTED_MODULE_4___default.a, {
    title: 'Liste des gîtes',
    data: gites,
    columns: columns,
    options: options,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 4
    }
  }));
};

_s(ListGites, "/Rjh5rPqCCqf0XYnTUk9ZNavw3Q=");

_c = ListGites;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(_c2 = Object(_HOC_Snackbar__WEBPACK_IMPORTED_MODULE_8__["withSnackbar"])(ListGites)));

var _c, _c2, _c3;

$RefreshReg$(_c, "ListGites");
$RefreshReg$(_c2, "%default%$withRouter");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0R2l0ZXMuanMiXSwibmFtZXMiOlsiTGlzdEdpdGVzIiwiZ2l0ZXMiLCJyb3V0ZXIiLCJzbmFja2JhclNob3dNZXNzYWdlIiwidG9rZW4iLCJnZXRDb29raWUiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVtb3ZlR2l0ZSIsInNsdWciLCJkZWxldGVHaXRlIiwidGhlbiIsImRhdGEiLCJlcnJvciIsInRleHQiLCJzZXRUaW1lb3V0IiwicmVsb2FkIiwiZGVsZXRlQ29uZmlybSIsImFuc3dlciIsIndpbmRvdyIsImNvbmZpcm0iLCJjb2x1bW5zIiwibmFtZSIsImxhYmVsIiwib3B0aW9ucyIsImZpbHRlciIsInNvcnQiLCJkaXNwbGF5IiwiY3VzdG9tQm9keVJlbmRlciIsInZhbHVlIiwidGFibGVNZXRhIiwidXBkYXRlVmFsdWUiLCJjb25zb2xlIiwibG9nIiwiZ2l0ZSIsInJvd0RhdGEiLCJBUEkiLCJmb250U2l6ZSIsImNvbG9yIiwiZmlsdGVyVHlwZSIsInNlbGVjdGFibGVSb3dzIiwic2V0Um93UHJvcHMiLCJyb3ciLCJzdHlsZSIsImJhY2tncm91bmQiLCJjb3VsZXVyMSIsIndpdGhSb3V0ZXIiLCJ3aXRoU25hY2tiYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQTRDO0FBQUE7O0FBQUEsTUFBekNDLEtBQXlDLFFBQXpDQSxLQUF5QztBQUFBLE1BQWxDQyxNQUFrQyxRQUFsQ0EsTUFBa0M7QUFBQSxNQUExQkMsbUJBQTBCLFFBQTFCQSxtQkFBMEI7QUFDN0QsTUFB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TyxJQUFJLE1BQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURiLEVBR0MsTUFBQyxxREFBRDtBQUNDLFNBQUssRUFBRSxpQkFEUjtBQUVDLFFBQUksRUFBRU4sS0FGUDtBQUdDLFdBQU8sRUFBRXFCLE9BSFY7QUFJQyxXQUFPLEVBQUVHLE9BSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhELENBREQ7QUE0REEsQ0F6T0Q7O0dBQU16QixTOztLQUFBQSxTO0FBMk9TLHFFQUFBK0MsOERBQVUsT0FBQ0Msa0VBQVksQ0FBQ2hELFNBQUQsQ0FBYixDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9naXRlcy43NDZjNzJlMTMzMmQ5ZTg0ZTYyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFibGUgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgZGVsZXRlR2l0ZSwgbGlzdGVEZXNHaXRlcyB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xyXG5pbXBvcnQgTVVJRGF0YVRhYmxlIGZyb20gJ211aS1kYXRhdGFibGVzJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFdpZGdldHNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9XaWRnZXRzJztcclxuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgd2l0aFNuYWNrYmFyIH0gZnJvbSAnLi4vLi4vSE9DL1NuYWNrYmFyJztcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XHJcbmltcG9ydCBDaGVja0JveEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrQm94JztcclxuaW1wb3J0IENoZWNrQm94T3V0bGluZUJsYW5rSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2tCb3hPdXRsaW5lQmxhbmsnO1xyXG5pbXBvcnQgRGVsZXRlRm9yZXZlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZUZvcmV2ZXInO1xyXG5pbXBvcnQgeyBBbGVydCwgU3Bpbm5lciB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5cclxuY29uc3QgTGlzdEdpdGVzID0gKHsgZ2l0ZXMsIHJvdXRlciwgc25hY2tiYXJTaG93TWVzc2FnZSB9KSA9PiB7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblxyXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Y29uc3QgcmVtb3ZlR2l0ZSA9IChzbHVnKSA9PiB7XHJcblx0XHRzZXRMb2FkaW5nKHRydWUpO1xyXG5cdFx0ZGVsZXRlR2l0ZShzbHVnLCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xyXG5cdFx0XHRcdHNuYWNrYmFyU2hvd01lc3NhZ2UoYCR7ZGF0YS5lcnJvcn1gKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0XHRzbmFja2JhclNob3dNZXNzYWdlKGAke2RhdGEudGV4dH1gLCAnc3VjY2VzcycpO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0cm91dGVyLnJlbG9hZCgpO1xyXG5cdFx0XHRcdH0sIDMwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBkZWxldGVDb25maXJtID0gKHNsdWcpID0+IHtcclxuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRsZXQgYW5zd2VyID0gd2luZG93LmNvbmZpcm0oXHJcblx0XHRcdFx0YFZvdXMgw6p0ZXMgc3VyIGxlIHBvaW50IGRlIHN1cHByaW1lciBsZSBnw650ZSAke3NsdWd9LCDDqnRlcy12b3VzIHPDu3IgP2BcclxuXHRcdFx0KTtcclxuXHRcdFx0aWYgKGFuc3dlcikge1xyXG5cdFx0XHRcdHJlbW92ZUdpdGUoc2x1Zyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBjb2x1bW5zID0gW1xyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnX2lkJyxcclxuXHRcdFx0bGFiZWw6ICcjJyxcclxuXHRcdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcdGZpbHRlcjogdHJ1ZSxcclxuXHRcdFx0XHRzb3J0OiB0cnVlLFxyXG5cdFx0XHRcdC8vIGRpc3BsYXk6IGZhbHNlLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ25vbScsXHJcblx0XHRcdGxhYmVsOiAnTm9tJyxcclxuXHRcdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcdGZpbHRlcjogdHJ1ZSxcclxuXHRcdFx0XHRzb3J0OiB0cnVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ3NsdWcnLFxyXG5cdFx0XHRsYWJlbDogJ1NsdWcnLFxyXG5cdFx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFx0ZmlsdGVyOiB0cnVlLFxyXG5cdFx0XHRcdHNvcnQ6IHRydWUsXHJcblx0XHRcdFx0ZGlzcGxheTogJ25vbmUnLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ3RhcmlmRGVCYXNlJyxcclxuXHRcdFx0bGFiZWw6ICdUYXJpZiBkZSBiYXNlJyxcclxuXHRcdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcdGZpbHRlcjogdHJ1ZSxcclxuXHRcdFx0XHRzb3J0OiBmYWxzZSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdjYXBhY2l0ZU1heCcsXHJcblx0XHRcdGxhYmVsOiAnQ2FwYWNpdMOpJyxcclxuXHRcdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcdGZpbHRlcjogdHJ1ZSxcclxuXHRcdFx0XHRzb3J0OiBmYWxzZSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAndmlnbmV0dGUnLFxyXG5cdFx0XHRsYWJlbDogJ1ZpZ25ldHRlJyxcclxuXHRcdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcdGZpbHRlcjogZmFsc2UsXHJcblx0XHRcdFx0c29ydDogZmFsc2UsXHJcblx0XHRcdFx0Y3VzdG9tQm9keVJlbmRlcjogKHZhbHVlLCB0YWJsZU1ldGEsIHVwZGF0ZVZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygndmlnbmV0dGUgdmF1dCA9PicsIHRhYmxlTWV0YSk7XHJcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGdpdGUgb2YgZ2l0ZXMpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHRhYmxlTWV0YS5yb3dEYXRhWzJdID09PSBnaXRlLnNsdWcpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNyYz17YCR7QVBJfS9naXRlL3Bob3RvLyR7Z2l0ZS5zbHVnfWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFsdD17YHZpZ25ldHRlICR7Z2l0ZS5zbHVnfWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPXs3NX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXs3NX1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnYWN0aWYnLFxyXG5cdFx0XHRsYWJlbDogJ1Zpc2libGUnLFxyXG5cdFx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFx0ZmlsdGVyOiB0cnVlLFxyXG5cdFx0XHRcdGN1c3RvbUJvZHlSZW5kZXI6ICh2YWx1ZSwgdGFibGVNZXRhLCB1cGRhdGVWYWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHZhbHVlID8gKFxyXG5cdFx0XHRcdFx0XHQ8Q2hlY2tCb3hJY29uIC8+XHJcblx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHQ8Q2hlY2tCb3hPdXRsaW5lQmxhbmtJY29uIC8+XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnQ29uc3VsdGVyJyxcclxuXHRcdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcdHNvcnQ6IGZhbHNlLFxyXG5cdFx0XHRcdGZpbHRlcjogZmFsc2UsXHJcblx0XHRcdFx0Y3VzdG9tQm9keVJlbmRlcjogKHZhbHVlLCB0YWJsZU1ldGEsIHVwZGF0ZVZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0YWJsZU1ldGEucm93RGF0YSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgL2FkbWluL2dpdGUvJHt0YWJsZU1ldGEucm93RGF0YVswXX1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8V2lkZ2V0c0ljb24gZm9udFNpemU9J2xhcmdlJyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PC9JY29uQnV0dG9uPlxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ1N1cHByJyxcclxuXHRcdFx0b3B0aW9uczoge1xyXG5cdFx0XHRcdGN1c3RvbUJvZHlSZW5kZXI6ICh2YWx1ZSwgdGFibGVNZXRhLCB1cGRhdGVWYWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codGFibGVNZXRhLnJvd0RhdGEpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PEljb25CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PERlbGV0ZUZvcmV2ZXJJY29uXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZTogJzMwcHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3JlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVsZXRlQ29uZmlybSh0YWJsZU1ldGEucm93RGF0YVsyXSlcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdF07XHJcblxyXG5cdGNvbnN0IG9wdGlvbnMgPSB7XHJcblx0XHRmaWx0ZXJUeXBlOiAnY2hlY2tib3gnLFxyXG5cdFx0c2VsZWN0YWJsZVJvd3M6ICdub25lJyxcclxuXHRcdHNldFJvd1Byb3BzOiAocm93KSA9PiB7XHJcblx0XHRcdC8vYWpvdXRlciBzdHlsZSBzZWxvbiBsZSBzdGF0dXNcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JvdyB2YXV0Jywgcm93WzJdKTtcclxuXHRcdFx0Zm9yIChjb25zdCBnaXRlIG9mIGdpdGVzKSB7XHJcblx0XHRcdFx0aWYgKHJvd1syXSA9PT0gZ2l0ZS5zbHVnKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0XHRzdHlsZToge1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGdpdGUuY291bGV1cjEsXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e2xvYWRpbmcgJiYgPENpcmN1bGFyUHJvZ3Jlc3MgLz59XHJcblxyXG5cdFx0XHQ8TVVJRGF0YVRhYmxlXHJcblx0XHRcdFx0dGl0bGU9eydMaXN0ZSBkZXMgZ8OudGVzJ31cclxuXHRcdFx0XHRkYXRhPXtnaXRlc31cclxuXHRcdFx0XHRjb2x1bW5zPXtjb2x1bW5zfVxyXG5cdFx0XHRcdG9wdGlvbnM9e29wdGlvbnN9XHJcblx0XHRcdC8+XHJcblx0XHRcdHsvKiA8VGFibGU+XHJcblx0XHRcdFx0PHRoZWFkPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGg+IzwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5Ob208L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+VmlnbmV0dGU8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+Q2FwYWNpdMOpPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoIGNvbFNwYW49JzInPkFjdGlvbnM8L3RoPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdHtnaXRlcy5tYXAoKGdpdGUpID0+IChcclxuXHRcdFx0XHRcdFx0PHRyXHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBnaXRlLmNvdWxldXIxIH19XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdtdC01Jz5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+e2dpdGUuX2lkfTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPntnaXRlLm5vbX08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtgJHtBUEl9L2dpdGUvcGhvdG8vJHtnaXRlLnNsdWd9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWF4SGVpZ2h0OiAnYXV0bycsIHdpZHRoOiAnMTAwJScgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdpbWcgaW1nLWZsdWlkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ9e2dpdGUubm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD57Z2l0ZS5jYXBhY2l0ZX08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvYWRtaW4vY3J1ZC9naXRlLyR7Z2l0ZS5zbHVnfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmYXMgZmEtcGVuY2lsLXJ1bGVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgY29sb3I6ICdvcmFuZ2UnIH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZGVsZXRlQ29uZmlybShnaXRlLnNsdWcpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZhcyBmYS10cmFzaC1hbHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdyZWQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnNvcjogJ3BvaW50ZXInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT48L2k+XHJcblx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdDwvVGFibGU+ICovfVxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIod2l0aFNuYWNrYmFyKExpc3RHaXRlcykpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9