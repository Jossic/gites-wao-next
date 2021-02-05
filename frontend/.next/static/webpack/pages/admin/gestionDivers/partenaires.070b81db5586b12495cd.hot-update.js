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
  }, "Partenaires"), __jsx("th", {
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
    return __jsx("tr", {
      className: "mt-5",
      key: i,
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
    }, partenaire._id), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 8
      }
    }, partenaire.nom), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 8
      }
    }, partenaire.presPartenaire), __jsx("th", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0UGFydGVuYWlyZXMuanMiXSwibmFtZXMiOlsiTGlzdFBhcnRlbmFpcmVzIiwidG9rZW4iLCJnZXRDb29raWUiLCJ1c2VTdGF0ZSIsInBhcnRlbmFpcmVzIiwic2V0UGFydGVuYWlyZSIsImxvYWRpbmciLCJlcnJvciIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwidmFsdWVzIiwic2V0dmFsdWVzIiwibGlzdGVyTGVzUGFydGVuYWlyZXMiLCJMaXN0QWxsUGFydGVuYWlyZXMiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJkZWxldGVQYXJ0ZW5haXJlIiwiaWQiLCJyZW1vdmVQYXJ0ZW5haXJlIiwiZGVsZXRlQ29uZmlybSIsImFuc3dlciIsIndpbmRvdyIsImNvbmZpcm0iLCJtYXAiLCJwYXJ0ZW5haXJlIiwiaSIsIl9pZCIsIm5vbSIsInByZXNQYXJ0ZW5haXJlIiwiYWN0aWYiLCJjb2xvciIsImN1cnNvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFDN0IsTUFBTUMsS0FBSyxHQUFHQyxzRUFBUyxDQUFDLE9BQUQsQ0FBdkI7O0FBRDZCLGtCQUdRQyxzREFBUSxDQUFDLEVBQUQsQ0FIaEI7QUFBQSxNQUd0QkMsV0FIc0I7QUFBQSxNQUdUQyxhQUhTOztBQUFBLG1CQUtERixzREFBUSxDQUFDO0FBQ3BDRyxXQUFPLEVBQUUsS0FEMkI7QUFFcENDLFNBQUssRUFBRSxFQUY2QjtBQUdwQ0MsV0FBTyxFQUFFLEVBSDJCO0FBSXBDQyxXQUFPLEVBQUU7QUFKMkIsR0FBRCxDQUxQO0FBQUEsTUFLdEJDLE1BTHNCO0FBQUEsTUFLZEMsU0FMYzs7QUFBQSxNQVlyQkwsT0FacUIs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QTtBQUFBLE9BQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDO0FBQ0MsZUFBUyxFQUFDLHFCQURYO0FBRUMsV0FBSyxFQUFFO0FBQUVBLGFBQUssRUFBRTtBQUFULE9BRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURELENBREQsQ0FERCxDQWZELEVBd0JDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQztBQUNDLGFBQU8sRUFBRTtBQUFBLGVBQU1YLGFBQWEsQ0FBQyxFQUFELENBQW5CO0FBQUEsT0FEVjtBQUVDLGVBQVMsRUFBQyxrQkFGWDtBQUdDLFdBQUssRUFBRTtBQUNOVyxhQUFLLEVBQUUsS0FERDtBQUVOQyxjQUFNLEVBQUU7QUFGRixPQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERCxDQXhCRCxDQURnQjtBQUFBLEdBQWhCLENBREYsQ0FWRCxDQUpELENBREQ7QUF3REEsQ0F2SEQ7O0dBQU1sQyxlOztLQUFBQSxlO0FBeUhTQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9nZXN0aW9uRGl2ZXJzL3BhcnRlbmFpcmVzLjA3MGI4MWRiNTU4NmIxMjQ5NWNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWJsZSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHsgQWxlcnQsIFNwaW5uZXIgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHtcclxuXHRMaXN0QWxsUGFydGVuYWlyZXMsXHJcblx0cmVtb3ZlUGFydGVuYWlyZSxcclxufSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL3BhcnRlbmFpcmVzQWN0aW9ucyc7XHJcblxyXG5jb25zdCBMaXN0UGFydGVuYWlyZXMgPSAoKSA9PiB7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblxyXG5cdGNvbnN0IFtwYXJ0ZW5haXJlcywgc2V0UGFydGVuYWlyZV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldHZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdGVycm9yOiAnJyxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0bWVzc2FnZTogJycsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHsgbG9hZGluZywgc3VjY2VzcywgZXJyb3IsIG1lc3NhZ2UgfSA9IHZhbHVlcztcclxuXHJcblx0Y29uc3QgbGlzdGVyTGVzUGFydGVuYWlyZXMgPSAoKSA9PiB7XHJcblx0XHRMaXN0QWxsUGFydGVuYWlyZXMoKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdkYXRhIHBhcnRlbmFpcmUgdmF1dCA9PicsIGRhdGEpO1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRQYXJ0ZW5haXJlKC4uLnBhcnRlbmFpcmVzLCBkYXRhKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxpc3Rlckxlc1BhcnRlbmFpcmVzKCk7XHJcblx0fSwgW3N1Y2Nlc3NdKTtcclxuXHJcblx0Y29uc3QgZGVsZXRlUGFydGVuYWlyZSA9IChpZCkgPT4ge1xyXG5cdFx0c2V0dmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdFx0Y29uc29sZS5sb2coJ2lkJywgaWQpO1xyXG5cdFx0cmVtb3ZlUGFydGVuYWlyZShpZCwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2RhdGEgdmF1dCcsIGRhdGEpO1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdHNldHZhbHVlcyh7XHJcblx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRcdGVycm9yOiB0cnVlLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogZmFsc2UsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0dmFsdWVzKHtcclxuXHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdFx0ZXJyb3I6ICcnLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IGRhdGEubWVzc2FnZSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZGVsZXRlQ29uZmlybSA9IChpZCkgPT4ge1xyXG5cdFx0bGV0IGFuc3dlciA9IHdpbmRvdy5jb25maXJtKFxyXG5cdFx0XHRgU3VwcHJlc3Npb24gZHUgcGFydGVuYWlyZSAke2lkfSwgw6p0ZXMtdm91cyBzw7tyID9gXHJcblx0XHQpO1xyXG5cdFx0aWYgKGFuc3dlcikge1xyXG5cdFx0XHRkZWxldGVQYXJ0ZW5haXJlKGlkKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ1N1cHByZXNzaW9uJyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHtsb2FkaW5nICYmIDxTcGlubmVyIC8+fVxyXG5cdFx0XHR7c3VjY2VzcyAmJiA8QWxlcnQgY29sb3I9J3N1Y2Nlc3MnPnttZXNzYWdlfTwvQWxlcnQ+fVxyXG5cdFx0XHR7ZXJyb3IgJiYgPEFsZXJ0IGNvbG9yPSdkYW5nZXInPlVuZSBlcnJldXIgZXN0IHN1cnZlbnVlPC9BbGVydD59XHJcblx0XHRcdDxUYWJsZT5cclxuXHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0aD4jSUQ8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+UGFydGVuYWlyZXM8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+UHLDqXNlbnRhdGlvbjwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5BY3RpZjwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aCBjb2xTcGFuPScyJz5BY3Rpb25zPC90aD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0PC90aGVhZD5cclxuXHRcdFx0XHQ8dGJvZHk+XHJcblx0XHRcdFx0XHR7cGFydGVuYWlyZXMubWFwKChwYXJ0ZW5haXJlLCBpKSA9PiAoXHJcblx0XHRcdFx0XHRcdDx0ciBjbGFzc05hbWU9J210LTUnIGtleT17aX0+XHJcblx0XHRcdFx0XHRcdFx0PHRoPntwYXJ0ZW5haXJlLl9pZH08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD57cGFydGVuYWlyZS5ub219PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+e3BhcnRlbmFpcmUucHJlc1BhcnRlbmFpcmV9PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0XHR7cGFydGVuYWlyZS5hY3RpZiA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz0nZmFzIGZhLWNoZWNrLXNxdWFyZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPSdmYXMgZmEtdGltZXMnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgL2FkbWluL2dlc3Rpb25EaXZlcnMvYWxlbnRvdXJzYH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZhcyBmYS1wZW5jaWwtcnVsZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogJ29yYW5nZScgfX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBkZWxldGVDb25maXJtKCcnKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmYXMgZmEtdHJhc2gtYWx0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAncmVkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdXJzb3I6ICdwb2ludGVyJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHQ8L1RhYmxlPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RQYXJ0ZW5haXJlcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==