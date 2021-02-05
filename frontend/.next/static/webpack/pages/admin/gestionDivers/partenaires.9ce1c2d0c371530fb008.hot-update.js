webpackHotUpdate_N_E("pages/admin/gestionDivers/partenaires",{

/***/ "./components/admin/lists/ListPartenaires.js":
/*!***************************************************!*\
  !*** ./components/admin/lists/ListPartenaires.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var _actions_partenairesActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../actions/partenairesActions */ "./actions/partenairesActions.js");



var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\lists\\ListPartenaires.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var ListPartenaires = function ListPartenaires() {
  _s();

  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_5__["getCookie"])('token');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      partenaires = _useState[0],
      setPartenaire = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    loading: false,
    error: '',
    success: '',
    message: ''
  }),
      values = _useState2[0],
      setvalues = _useState2[1];

  var loading = values.loading,
      success = values.success,
      error = values.error,
      message = values.message;

  var listerLesPartenaires = function listerLesPartenaires() {
    Object(_actions_partenairesActions__WEBPACK_IMPORTED_MODULE_6__["ListAllPartenaires"])().then(function (data) {
      console.log('data partenaire vaut =>', data);

      if (data.error) {
        console.log(error);
      } else {
        setPartenaire.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(partenaires).concat([data]));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    listerLesPartenaires();
  }, [success]);

  var deletePartenaire = function deletePartenaire(id) {
    setvalues(_objectSpread(_objectSpread({}, values), {}, {
      loading: true
    }));
    console.log('id', id);
    Object(_actions_partenairesActions__WEBPACK_IMPORTED_MODULE_6__["removePartenaire"])(id, token).then(function (data) {
      console.log('data vaut', data);

      if (data.error) {
        setvalues(_objectSpread(_objectSpread({}, values), {}, {
          loading: false,
          error: true,
          success: false
        }));
      } else {
        setvalues(_objectSpread(_objectSpread({}, values), {}, {
          loading: false,
          error: '',
          success: true,
          message: data.message
        }));
      }
    });
  };

  var deleteConfirm = function deleteConfirm(id) {
    var answer = window.confirm("Suppression du partenaire ".concat(id, ", \xEAtes-vous s\xFBr ?"));

    if (answer) {
      deletePartenaire(id);
      console.log('Suppression');
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, loading && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Spinner"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 16
    }
  }), success && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    color: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 16
    }
  }, message), error && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    color: "danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 14
    }
  }, "Une erreur est survenue"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Table"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 4
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 6
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, "#ID"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, "Partenaire"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, "Pr\xE9sentation"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, "Actif"), __jsx("th", {
    colSpan: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, "Actions"))), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, partenaires.map(function (partenaire, i) {
    __jsx("tr", {
      className: "mt-5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 7
      }
    }, __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 8
      }
    }, "partenaire._id"), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 8
      }
    }, "partenaire.nom"), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 8
      }
    }, "partenaire.presPartenaire"), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 8
      }
    }, partenaire.actif ? __jsx("i", {
      "class": "fas fa-check-square",
      style: {
        color: 'green'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 10
      }
    }) : __jsx("i", {
      "class": "fas fa-times",
      style: {
        color: 'red'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 10
      }
    })), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 8
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/admin/gestionDivers/alentours",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 10
      }
    }, __jsx("i", {
      className: "fas fa-pencil-ruler",
      style: {
        color: 'orange'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 11
      }
    })))), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 8
      }
    }, __jsx("i", {
      onClick: function onClick() {
        return deleteConfirm('');
      },
      className: "fas fa-trash-alt",
      style: {
        color: 'red',
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }
    })));
  }))));
};

_s(ListPartenaires, "ih6E6KKoCQNUQukhj+FONTHVc0s=");

_c = ListPartenaires;
/* harmony default export */ __webpack_exports__["default"] = (ListPartenaires);

var _c;

$RefreshReg$(_c, "ListPartenaires");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0UGFydGVuYWlyZXMuanMiXSwibmFtZXMiOlsiTGlzdFBhcnRlbmFpcmVzIiwidG9rZW4iLCJnZXRDb29raWUiLCJ1c2VTdGF0ZSIsInBhcnRlbmFpcmVzIiwic2V0UGFydGVuYWlyZSIsImxvYWRpbmciLCJlcnJvciIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwidmFsdWVzIiwic2V0dmFsdWVzIiwibGlzdGVyTGVzUGFydGVuYWlyZXMiLCJMaXN0QWxsUGFydGVuYWlyZXMiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJkZWxldGVQYXJ0ZW5haXJlIiwiaWQiLCJyZW1vdmVQYXJ0ZW5haXJlIiwiZGVsZXRlQ29uZmlybSIsImFuc3dlciIsIndpbmRvdyIsImNvbmZpcm0iLCJtYXAiLCJwYXJ0ZW5haXJlIiwiaSIsImFjdGlmIiwiY29sb3IiLCJjdXJzb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0EsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUE7O0FBQzdCLE1BQU1DLEtBQUssR0FBR0Msc0VBQVMsQ0FBQyxPQUFELENBQXZCOztBQUQ2QixrQkFHUUMsc0RBQVEsQ0FBQyxFQUFELENBSGhCO0FBQUEsTUFHdEJDLFdBSHNCO0FBQUEsTUFHVEMsYUFIUzs7QUFBQSxtQkFLREYsc0RBQVEsQ0FBQztBQUNwQ0csV0FBTyxFQUFFLEtBRDJCO0FBRXBDQyxTQUFLLEVBQUUsRUFGNkI7QUFHcENDLFdBQU8sRUFBRSxFQUgyQjtBQUlwQ0MsV0FBTyxFQUFFO0FBSjJCLEdBQUQsQ0FMUDtBQUFBLE1BS3RCQyxNQUxzQjtBQUFBLE1BS2RDLFNBTGM7O0FBQUEsTUFZckJMLE9BWnFCLEdBWWdCSSxNQVpoQixDQVlyQkosT0FacUI7QUFBQSxNQVlaRSxPQVpZLEdBWWdCRSxNQVpoQixDQVlaRixPQVpZO0FBQUEsTUFZSEQsS0FaRyxHQVlnQkcsTUFaaEIsQ0FZSEgsS0FaRztBQUFBLE1BWUlFLE9BWkosR0FZZ0JDLE1BWmhCLENBWUlELE9BWko7O0FBYzdCLE1BQU1HLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUNsQ0MsMEZBQWtCLEdBQUdDLElBQXJCLENBQTBCLFVBQUNDLElBQUQsRUFBVTtBQUNuQ0MsYUFBTyxDQUFDQyxHQUFSLENBQVkseUJBQVosRUFBdUNGLElBQXZDOztBQUNBLFVBQUlBLElBQUksQ0FBQ1IsS0FBVCxFQUFnQjtBQUNmUyxlQUFPLENBQUNDLEdBQVIsQ0FBWVYsS0FBWjtBQUNBLE9BRkQsTUFFTztBQUNORixxQkFBYSxNQUFiLHNHQUFpQkQsV0FBakIsVUFBOEJXLElBQTlCO0FBQ0E7QUFDRCxLQVBEO0FBUUEsR0FURDs7QUFXQUcseURBQVMsQ0FBQyxZQUFNO0FBQ2ZOLHdCQUFvQjtBQUNwQixHQUZRLEVBRU4sQ0FBQ0osT0FBRCxDQUZNLENBQVQ7O0FBSUEsTUFBTVcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxFQUFELEVBQVE7QUFDaENULGFBQVMsaUNBQU1ELE1BQU47QUFBY0osYUFBTyxFQUFFO0FBQXZCLE9BQVQ7QUFDQVUsV0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWixFQUFrQkcsRUFBbEI7QUFDQUMsd0ZBQWdCLENBQUNELEVBQUQsRUFBS25CLEtBQUwsQ0FBaEIsQ0FBNEJhLElBQTVCLENBQWlDLFVBQUNDLElBQUQsRUFBVTtBQUMxQ0MsYUFBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QkYsSUFBekI7O0FBQ0EsVUFBSUEsSUFBSSxDQUFDUixLQUFULEVBQWdCO0FBQ2ZJLGlCQUFTLGlDQUNMRCxNQURLO0FBRVJKLGlCQUFPLEVBQUUsS0FGRDtBQUdSQyxlQUFLLEVBQUUsSUFIQztBQUlSQyxpQkFBTyxFQUFFO0FBSkQsV0FBVDtBQU1BLE9BUEQsTUFPTztBQUNORyxpQkFBUyxpQ0FDTEQsTUFESztBQUVSSixpQkFBTyxFQUFFLEtBRkQ7QUFHUkMsZUFBSyxFQUFFLEVBSEM7QUFJUkMsaUJBQU8sRUFBRSxJQUpEO0FBS1JDLGlCQUFPLEVBQUVNLElBQUksQ0FBQ047QUFMTixXQUFUO0FBT0E7QUFDRCxLQWxCRDtBQW1CQSxHQXRCRDs7QUF3QkEsTUFBTWEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDRixFQUFELEVBQVE7QUFDN0IsUUFBSUcsTUFBTSxHQUFHQyxNQUFNLENBQUNDLE9BQVAscUNBQ2lCTCxFQURqQiw2QkFBYjs7QUFHQSxRQUFJRyxNQUFKLEVBQVk7QUFDWEosc0JBQWdCLENBQUNDLEVBQUQsQ0FBaEI7QUFDQUosYUFBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBO0FBQ0QsR0FSRDs7QUFVQSxTQUNDLG1FQUNFWCxPQUFPLElBQUksTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRGIsRUFFRUUsT0FBTyxJQUFJLE1BQUMsZ0RBQUQ7QUFBTyxTQUFLLEVBQUMsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXdCQyxPQUF4QixDQUZiLEVBR0VGLEtBQUssSUFBSSxNQUFDLGdEQUFEO0FBQU8sU0FBSyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFIWCxFQUlDLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURELEVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRCxFQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEQsRUFJQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkQsRUFLQztBQUFJLFdBQU8sRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRCxDQURELENBREQsRUFVQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VILFdBQVcsQ0FBQ3NCLEdBQVosQ0FBZ0IsVUFBQ0MsVUFBRCxFQUFhQyxDQUFiLEVBQW1CO0FBQ25DO0FBQUksZUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREQsRUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZELEVBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FIRCxFQUlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRUQsVUFBVSxDQUFDRSxLQUFYLEdBQ0E7QUFDQyxlQUFNLHFCQURQO0FBRUMsV0FBSyxFQUFFO0FBQUVDLGFBQUssRUFBRTtBQUFULE9BRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURBLEdBS0E7QUFDQyxlQUFNLGNBRFA7QUFFQyxXQUFLLEVBQUU7QUFBRUEsYUFBSyxFQUFFO0FBQVQsT0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTkYsQ0FKRCxFQWVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQyxNQUFDLGdEQUFEO0FBQU0sVUFBSSxrQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDO0FBQ0MsZUFBUyxFQUFDLHFCQURYO0FBRUMsV0FBSyxFQUFFO0FBQUVBLGFBQUssRUFBRTtBQUFULE9BRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURELENBREQsQ0FERCxDQWZELEVBd0JDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQztBQUNDLGFBQU8sRUFBRTtBQUFBLGVBQU1SLGFBQWEsQ0FBQyxFQUFELENBQW5CO0FBQUEsT0FEVjtBQUVDLGVBQVMsRUFBQyxrQkFGWDtBQUdDLFdBQUssRUFBRTtBQUNOUSxhQUFLLEVBQUUsS0FERDtBQUVOQyxjQUFNLEVBQUU7QUFGRixPQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERCxDQXhCRDtBQWtDQSxHQW5DQSxDQURGLENBVkQsQ0FKRCxDQUREO0FBd0RBLENBdkhEOztHQUFNL0IsZTs7S0FBQUEsZTtBQXlIU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vZ2VzdGlvbkRpdmVycy9wYXJ0ZW5haXJlcy45Y2UxYzJkMGMzNzE1MzBmYjAwOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFibGUgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IEFsZXJ0LCBTcGlubmVyIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7XHJcblx0TGlzdEFsbFBhcnRlbmFpcmVzLFxyXG5cdHJlbW92ZVBhcnRlbmFpcmUsXHJcbn0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9wYXJ0ZW5haXJlc0FjdGlvbnMnO1xyXG5cclxuY29uc3QgTGlzdFBhcnRlbmFpcmVzID0gKCkgPT4ge1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cclxuXHRjb25zdCBbcGFydGVuYWlyZXMsIHNldFBhcnRlbmFpcmVdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHRjb25zdCBbdmFsdWVzLCBzZXR2YWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRlcnJvcjogJycsXHJcblx0XHRzdWNjZXNzOiAnJyxcclxuXHRcdG1lc3NhZ2U6ICcnLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCB7IGxvYWRpbmcsIHN1Y2Nlc3MsIGVycm9yLCBtZXNzYWdlIH0gPSB2YWx1ZXM7XHJcblxyXG5cdGNvbnN0IGxpc3Rlckxlc1BhcnRlbmFpcmVzID0gKCkgPT4ge1xyXG5cdFx0TGlzdEFsbFBhcnRlbmFpcmVzKCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZGF0YSBwYXJ0ZW5haXJlIHZhdXQgPT4nLCBkYXRhKTtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0UGFydGVuYWlyZSguLi5wYXJ0ZW5haXJlcywgZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsaXN0ZXJMZXNQYXJ0ZW5haXJlcygpO1xyXG5cdH0sIFtzdWNjZXNzXSk7XHJcblxyXG5cdGNvbnN0IGRlbGV0ZVBhcnRlbmFpcmUgPSAoaWQpID0+IHtcclxuXHRcdHNldHZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHRcdGNvbnNvbGUubG9nKCdpZCcsIGlkKTtcclxuXHRcdHJlbW92ZVBhcnRlbmFpcmUoaWQsIHRva2VuKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdkYXRhIHZhdXQnLCBkYXRhKTtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXR2YWx1ZXMoe1xyXG5cdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0XHRlcnJvcjogdHJ1ZSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZhbHNlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldHZhbHVlcyh7XHJcblx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRcdGVycm9yOiAnJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IHRydWUsXHJcblx0XHRcdFx0XHRtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRlbGV0ZUNvbmZpcm0gPSAoaWQpID0+IHtcclxuXHRcdGxldCBhbnN3ZXIgPSB3aW5kb3cuY29uZmlybShcclxuXHRcdFx0YFN1cHByZXNzaW9uIGR1IHBhcnRlbmFpcmUgJHtpZH0sIMOqdGVzLXZvdXMgc8O7ciA/YFxyXG5cdFx0KTtcclxuXHRcdGlmIChhbnN3ZXIpIHtcclxuXHRcdFx0ZGVsZXRlUGFydGVuYWlyZShpZCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdTdXBwcmVzc2lvbicpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7bG9hZGluZyAmJiA8U3Bpbm5lciAvPn1cclxuXHRcdFx0e3N1Y2Nlc3MgJiYgPEFsZXJ0IGNvbG9yPSdzdWNjZXNzJz57bWVzc2FnZX08L0FsZXJ0Pn1cclxuXHRcdFx0e2Vycm9yICYmIDxBbGVydCBjb2xvcj0nZGFuZ2VyJz5VbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZTwvQWxlcnQ+fVxyXG5cdFx0XHQ8VGFibGU+XHJcblx0XHRcdFx0PHRoZWFkPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGg+I0lEPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPlBhcnRlbmFpcmU8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+UHLDqXNlbnRhdGlvbjwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5BY3RpZjwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aCBjb2xTcGFuPScyJz5BY3Rpb25zPC90aD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0PC90aGVhZD5cclxuXHRcdFx0XHQ8dGJvZHk+XHJcblx0XHRcdFx0XHR7cGFydGVuYWlyZXMubWFwKChwYXJ0ZW5haXJlLCBpKSA9PiB7XHJcblx0XHRcdFx0XHRcdDx0ciBjbGFzc05hbWU9J210LTUnPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD5wYXJ0ZW5haXJlLl9pZDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPnBhcnRlbmFpcmUubm9tPC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+cGFydGVuYWlyZS5wcmVzUGFydGVuYWlyZTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0e3BhcnRlbmFpcmUuYWN0aWYgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9J2ZhcyBmYS1jaGVjay1zcXVhcmUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz0nZmFzIGZhLXRpbWVzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC9hZG1pbi9nZXN0aW9uRGl2ZXJzL2FsZW50b3Vyc2B9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmYXMgZmEtcGVuY2lsLXJ1bGVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgY29sb3I6ICdvcmFuZ2UnIH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZGVsZXRlQ29uZmlybSgnJyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmFzIGZhLXRyYXNoLWFsdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3JlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8L3RyPjtcclxuXHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdDwvVGFibGU+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdFBhcnRlbmFpcmVzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9