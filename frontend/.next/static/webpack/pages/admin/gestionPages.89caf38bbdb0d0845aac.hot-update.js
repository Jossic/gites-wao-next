webpackHotUpdate_N_E("pages/admin/gestionPages",{

/***/ "./components/admin/ListPages.js":
/*!***************************************!*\
  !*** ./components/admin/ListPages.js ***!
  \***************************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\ListGites.js",
    _this = undefined,
    _s = $RefreshSig$();







var ListGites = function ListGites() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      gites = _useState[0],
      setGites = _useState[1];

  var listerLesGites = function listerLesGites() {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_5__["listeDesGites"])().then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        console.log('on est ok');
        setGites.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(gites).concat([data]));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    listerLesGites();
  }, []);

  var deleteConfirm = function deleteConfirm(slug) {
    var answer = window.confirm('Cette opération est irréversible, Etes-vous sur de vouloir supprimer cet article ?');

    if (answer) {
      // deleteGite(slug);
      console.log('Suppression');
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Table"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("thead", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: "#"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: "Nom"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: "Vignette"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: "Capacit\xE9"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            colSpan: "2",
            children: "Actions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tbody", {
        children: gites.map(function (gite) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
            style: {
              backgroundColor: gite.couleur1
            },
            className: "mt-5",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: gite._id
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: gite.nom
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
                src: "".concat(_config__WEBPACK_IMPORTED_MODULE_7__["API"], "/gite/photo/").concat(gite.slug),
                style: {
                  maxHeight: 'auto',
                  width: '100%'
                },
                className: "img img-fluid",
                alt: gite.nom
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: gite.capacite
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
                href: "/admin/crud/gite/".concat(gite.slug),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                    "class": "fas fa-pencil-ruler",
                    style: {
                      color: 'orange'
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                onClick: function onClick() {
                  return deleteConfirm(gite.slug);
                },
                "class": "fas fa-trash-alt",
                style: {
                  color: 'red',
                  cursor: 'pointer'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 7
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, _this)
  }, void 0, false);
};

_s(ListGites, "VnZGPSOPv8g7M6DQvTHCZV4X37Y=");

_c = ListGites;
function getStaticProps(_x) {
  return _getStaticProps.apply(this, arguments);
}

function _getStaticProps() {
  _getStaticProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var res, gites;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('http://localhost:8000/api/gites');

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            gites = _context.sent;
            return _context.abrupt("return", {
              props: {
                gites: gites
              }
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getStaticProps.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (ListGites);

var _c;

$RefreshReg$(_c, "ListGites");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/admin/gestionPages.js":
/*!*************************************!*\
  !*** ./pages/admin/gestionPages.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout/AdminHeader */ "./components/layout/AdminHeader.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_admin_ListPages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/admin/ListPages */ "./components/admin/ListPages.js");
/* harmony import */ var _components_auth_Admin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/auth/Admin */ "./components/auth/Admin.js");



var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\admin\\gestionPages.js",
    _this = undefined;







var gestionPages = function gestionPages() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_auth_Admin__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Gestion des pages li\xE9es aux g\xEEtes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/admin/crud/gite/create",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "btn btn-info btn-lg mb-3 mt-3 float-right",
            children: "Cr\xE9er un g\xEEte"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "Liste des g\xEEtes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_admin_ListPages__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, _this)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (gestionPages);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9MaXN0R2l0ZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkbWluL2dlc3Rpb25QYWdlcy5qcyJdLCJuYW1lcyI6WyJMaXN0R2l0ZXMiLCJ1c2VTdGF0ZSIsImdpdGVzIiwic2V0R2l0ZXMiLCJsaXN0ZXJMZXNHaXRlcyIsImxpc3RlRGVzR2l0ZXMiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImRlbGV0ZUNvbmZpcm0iLCJzbHVnIiwiYW5zd2VyIiwid2luZG93IiwiY29uZmlybSIsIm1hcCIsImdpdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb3VsZXVyMSIsIl9pZCIsIm5vbSIsIkFQSSIsIm1heEhlaWdodCIsIndpZHRoIiwiY2FwYWNpdGUiLCJjb2xvciIsImN1cnNvciIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsImZldGNoIiwicmVzIiwianNvbiIsInByb3BzIiwiZ2VzdGlvblBhZ2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNHQyxzREFBUSxDQUFDLEVBQUQsQ0FEWDtBQUFBLE1BQ2hCQyxLQURnQjtBQUFBLE1BQ1RDLFFBRFM7O0FBR3ZCLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUM1QkMsOEVBQWEsR0FBR0MsSUFBaEIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFVO0FBQzlCLFVBQUlBLElBQUksQ0FBQ0MsS0FBVCxFQUFnQjtBQUNmQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLE9BRkQsTUFFTztBQUNOQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0FQLGdCQUFRLE1BQVIsc0dBQVlELEtBQVosVUFBbUJLLElBQW5CO0FBQ0E7QUFDRCxLQVBEO0FBUUEsR0FURDs7QUFXQUkseURBQVMsQ0FBQyxZQUFNO0FBQ2ZQLGtCQUFjO0FBQ2QsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFNUSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLElBQUQsRUFBVTtBQUMvQixRQUFJQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxDQUNaLG9GQURZLENBQWI7O0FBR0EsUUFBSUYsTUFBSixFQUFZO0FBQ1g7QUFDQUwsYUFBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBO0FBQ0QsR0FSRDs7QUFVQSxzQkFDQztBQUFBLDJCQUNDLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0M7QUFBQSwrQkFDQztBQUFBLGtDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkQsZUFHQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRCxlQUlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpELGVBS0M7QUFBSSxtQkFBTyxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBVUM7QUFBQSxrQkFDRVIsS0FBSyxDQUFDZSxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLDhCQUNWO0FBQ0MsaUJBQUssRUFBRTtBQUFFQyw2QkFBZSxFQUFFRCxJQUFJLENBQUNFO0FBQXhCLGFBRFI7QUFFQyxxQkFBUyxFQUFDLE1BRlg7QUFBQSxvQ0FHQztBQUFBLHdCQUFLRixJQUFJLENBQUNHO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRCxlQUlDO0FBQUEsd0JBQUtILElBQUksQ0FBQ0k7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpELGVBS0M7QUFBQSxxQ0FDQztBQUNDLG1CQUFHLFlBQUtDLDJDQUFMLHlCQUF1QkwsSUFBSSxDQUFDTCxJQUE1QixDQURKO0FBRUMscUJBQUssRUFBRTtBQUFFVywyQkFBUyxFQUFFLE1BQWI7QUFBcUJDLHVCQUFLLEVBQUU7QUFBNUIsaUJBRlI7QUFHQyx5QkFBUyxFQUFDLGVBSFg7QUFJQyxtQkFBRyxFQUFFUCxJQUFJLENBQUNJO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEQsZUFhQztBQUFBLHdCQUFLSixJQUFJLENBQUNRO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFiRCxlQWNDO0FBQUEscUNBQ0MscUVBQUMsZ0RBQUQ7QUFBTSxvQkFBSSw2QkFBc0JSLElBQUksQ0FBQ0wsSUFBM0IsQ0FBVjtBQUFBLHVDQUNDO0FBQUEseUNBQ0M7QUFDQyw2QkFBTSxxQkFEUDtBQUVDLHlCQUFLLEVBQUU7QUFBRWMsMkJBQUssRUFBRTtBQUFUO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFkRCxlQXVCQztBQUFBLHFDQUNDO0FBQ0MsdUJBQU8sRUFBRTtBQUFBLHlCQUFNZixhQUFhLENBQUNNLElBQUksQ0FBQ0wsSUFBTixDQUFuQjtBQUFBLGlCQURWO0FBRUMseUJBQU0sa0JBRlA7QUFHQyxxQkFBSyxFQUFFO0FBQ05jLHVCQUFLLEVBQUUsS0FERDtBQUVOQyx3QkFBTSxFQUFFO0FBRkY7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF2QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURVO0FBQUEsU0FBVjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxtQkFERDtBQW9EQSxDQWhGRDs7R0FBTTVCLFM7O0tBQUFBLFM7QUFrRkMsU0FBZTZCLGNBQXRCO0FBQUE7QUFBQTs7O3FNQUFPLGlCQUE4QkMsT0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDWUMsS0FBSyxDQUFDLGlDQUFELENBRGpCOztBQUFBO0FBQ0FDLGVBREE7QUFBQTtBQUFBLG1CQUVjQSxHQUFHLENBQUNDLElBQUosRUFGZDs7QUFBQTtBQUVBL0IsaUJBRkE7QUFBQSw2Q0FJQztBQUNOZ0MsbUJBQUssRUFBRTtBQUNOaEMscUJBQUssRUFBTEE7QUFETTtBQURELGFBSkQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQVdRRix3RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1tQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQzFCLHNCQUNDO0FBQUEsMkJBQ0MscUVBQUMsc0VBQUQ7QUFBQSw2QkFDQyxxRUFBQyw4REFBRDtBQUFBLGdDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBR0MscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMseUJBQVg7QUFBQSxpQ0FDQztBQUFHLHFCQUFTLEVBQUMsMkNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhELGVBUUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRCxlQVNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRELGVBVUMscUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsbUJBREQ7QUFrQkEsQ0FuQkQ7O0FBcUJlQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9nZXN0aW9uUGFnZXMuODljYWYzOGJiZGIwZDA4NDVhYWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYmxlIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IGxpc3RlRGVzR2l0ZXMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IExpc3RHaXRlcyA9ICgpID0+IHtcclxuXHRjb25zdCBbZ2l0ZXMsIHNldEdpdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgbGlzdGVyTGVzR2l0ZXMgPSAoKSA9PiB7XHJcblx0XHRsaXN0ZURlc0dpdGVzKCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnb24gZXN0IG9rJyk7XHJcblx0XHRcdFx0c2V0R2l0ZXMoLi4uZ2l0ZXMsIGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGlzdGVyTGVzR2l0ZXMoKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnN0IGRlbGV0ZUNvbmZpcm0gPSAoc2x1ZykgPT4ge1xyXG5cdFx0bGV0IGFuc3dlciA9IHdpbmRvdy5jb25maXJtKFxyXG5cdFx0XHQnQ2V0dGUgb3DDqXJhdGlvbiBlc3QgaXJyw6l2ZXJzaWJsZSwgRXRlcy12b3VzIHN1ciBkZSB2b3Vsb2lyIHN1cHByaW1lciBjZXQgYXJ0aWNsZSA/J1xyXG5cdFx0KTtcclxuXHRcdGlmIChhbnN3ZXIpIHtcclxuXHRcdFx0Ly8gZGVsZXRlR2l0ZShzbHVnKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ1N1cHByZXNzaW9uJyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxUYWJsZT5cclxuXHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0aD4jPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPk5vbTwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5WaWduZXR0ZTwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5DYXBhY2l0w6k8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGggY29sU3Bhbj0nMic+QWN0aW9uczwvdGg+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0e2dpdGVzLm1hcCgoZ2l0ZSkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8dHJcclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGdpdGUuY291bGV1cjEgfX1cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J210LTUnPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD57Z2l0ZS5faWR9PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+e2dpdGUubm9tfTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2Ake0FQSX0vZ2l0ZS9waG90by8ke2dpdGUuc2x1Z31gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBtYXhIZWlnaHQ6ICdhdXRvJywgd2lkdGg6ICcxMDAlJyB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ltZyBpbWctZmx1aWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFsdD17Z2l0ZS5ub219XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPntnaXRlLmNhcGFjaXRlfTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC9hZG1pbi9jcnVkL2dpdGUvJHtnaXRlLnNsdWd9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz0nZmFzIGZhLXBlbmNpbC1ydWxlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGNvbG9yOiAnb3JhbmdlJyB9fT48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGRlbGV0ZUNvbmZpcm0oZ2l0ZS5zbHVnKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9J2ZhcyBmYS10cmFzaC1hbHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdyZWQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnNvcjogJ3BvaW50ZXInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT48L2k+XHJcblx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdDwvVGFibGU+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9naXRlcycpO1xyXG5cdGNvbnN0IGdpdGVzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGdpdGVzLFxyXG5cdFx0fSxcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0R2l0ZXM7XHJcbiIsImltcG9ydCBBZG1pbkhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9BZG1pbkhlYWRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgTGlzdFBhZ2VzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYWRtaW4vTGlzdFBhZ2VzJztcclxuaW1wb3J0IEFkbWluIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYXV0aC9BZG1pbic7XHJcblxyXG5jb25zdCBnZXN0aW9uUGFnZXMgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxBZG1pbkhlYWRlcj5cclxuXHRcdFx0XHQ8QWRtaW4+XHJcblx0XHRcdFx0XHQ8aDI+R2VzdGlvbiBkZXMgcGFnZXMgbGnDqWVzIGF1eCBnw650ZXM8L2gyPlxyXG5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9hZG1pbi9jcnVkL2dpdGUvY3JlYXRlJz5cclxuXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPSdidG4gYnRuLWluZm8gYnRuLWxnIG1iLTMgbXQtMyBmbG9hdC1yaWdodCc+XHJcblx0XHRcdFx0XHRcdFx0Q3LDqWVyIHVuIGfDrnRlXHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0PGgzPkxpc3RlIGRlcyBnw650ZXM8L2gzPlxyXG5cdFx0XHRcdFx0PExpc3RQYWdlcyAvPlxyXG5cdFx0XHRcdDwvQWRtaW4+XHJcblx0XHRcdDwvQWRtaW5IZWFkZXI+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2VzdGlvblBhZ2VzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9