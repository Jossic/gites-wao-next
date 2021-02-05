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
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, loading && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Spinner"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 16
    }
  }), success && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    color: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 16
    }
  }, message), error && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    color: "danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 14
    }
  }, "Une erreur est survenue"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Table"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 4
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 6
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, "#ID"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, "Cat\xE9gorie/sous-menu"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, "Pr\xE9sentation"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, "Actif"), __jsx("th", {
    colSpan: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, "Actions"))), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }, partenaires.map(function (partenaire, i) {
    return __jsx("tr", {
      className: "mt-5",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 7
      }
    }, __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 8
      }
    }, partenaire._id), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 8
      }
    }, partenaire.nom), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 8
      }
    }, partenaire.presPartenaire), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
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
        lineNumber: 95,
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
        lineNumber: 99,
        columnNumber: 10
      }
    })), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 8
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/admin/gestionDivers/alentours",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
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
        lineNumber: 107,
        columnNumber: 11
      }
    })))), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 8
      }
    }, __jsx("i", {
      onClick: function onClick() {
        return deleteConfirm(partenaire._id);
      },
      className: "fas fa-trash-alt",
      style: {
        color: 'red',
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0UGFydGVuYWlyZXMuanMiXSwibmFtZXMiOlsiTGlzdFBhcnRlbmFpcmVzIiwidG9rZW4iLCJnZXRDb29raWUiLCJ1c2VTdGF0ZSIsInBhcnRlbmFpcmVzIiwic2V0UGFydGVuYWlyZSIsImxvYWRpbmciLCJlcnJvciIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwidmFsdWVzIiwic2V0dmFsdWVzIiwibGlzdGVyTGVzUGFydGVuYWlyZXMiLCJMaXN0QWxsUGFydGVuYWlyZXMiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJkZWxldGVQYXJ0ZW5haXJlIiwiaWQiLCJyZW1vdmVQYXJ0ZW5haXJlIiwiZGVsZXRlQ29uZmlybSIsImFuc3dlciIsIndpbmRvdyIsImNvbmZpcm0iLCJtYXAiLCJwYXJ0ZW5haXJlIiwiaSIsIl9pZCIsIm5vbSIsInByZXNQYXJ0ZW5haXJlIiwiYWN0aWYiLCJjb2xvciIsImN1cnNvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFDN0IsTUFBTUMsS0FBSyxHQUFHQyxzRUFBUyxDQUFDLE9BQUQsQ0FBdkI7O0FBRDZCLGtCQUdRQyxzREFBUSxDQUFDLEVBQUQsQ0FIaEI7QUFBQSxNQUd0QkMsV0FIc0I7QUFBQSxNQUdUQyxhQUhTOztBQUFBLG1CQUtERixzREFBUSxDQUFDO0FBQ3BDRyxXQUFPLEVBQUUsS0FEMkI7QUFFcENDLFNBQUssRUFBRSxFQUY2QjtBQUdwQ0MsV0FBTyxFQUFFLEVBSDJCO0FBSXBDQyxXQUFPLEVBQUU7QUFKMkIsR0FBRCxDQUxQO0FBQUEsTUFLdEJDLE1BTHNCO0FBQUEsTUFLZEMsU0FMYzs7QUFBQSxNQVlyQkwsT0FacUIs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QUFLLEVBQUU7QUFBRUEsYUFBSyxFQUFFO0FBQVQsT0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREQsQ0FERCxDQURELENBZkQsRUF3QkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDO0FBQ0MsYUFBTyxFQUFFO0FBQUEsZUFDUlgsYUFBYSxDQUFDSyxVQUFVLENBQUNFLEdBQVosQ0FETDtBQUFBLE9BRFY7QUFJQyxlQUFTLEVBQUMsa0JBSlg7QUFLQyxXQUFLLEVBQUU7QUFDTkksYUFBSyxFQUFFLEtBREQ7QUFFTkMsY0FBTSxFQUFFO0FBRkYsT0FMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREQsQ0F4QkQsQ0FEZ0I7QUFBQSxHQUFoQixDQURGLENBVkQsQ0FKRCxDQUREO0FBMERBLENBdkhEOztHQUFNbEMsZTs7S0FBQUEsZTtBQXlIU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vZ2VzdGlvbkRpdmVycy9wYXJ0ZW5haXJlcy4yZmM0YzY3NDQwNDM5MTkzMDZjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFibGUgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IEFsZXJ0LCBTcGlubmVyIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7XHJcblx0TGlzdEFsbFBhcnRlbmFpcmVzLFxyXG5cdHJlbW92ZVBhcnRlbmFpcmUsXHJcbn0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9wYXJ0ZW5haXJlc0FjdGlvbnMnO1xyXG5cclxuY29uc3QgTGlzdFBhcnRlbmFpcmVzID0gKCkgPT4ge1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cclxuXHRjb25zdCBbcGFydGVuYWlyZXMsIHNldFBhcnRlbmFpcmVdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHRjb25zdCBbdmFsdWVzLCBzZXR2YWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRlcnJvcjogJycsXHJcblx0XHRzdWNjZXNzOiAnJyxcclxuXHRcdG1lc3NhZ2U6ICcnLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCB7IGxvYWRpbmcsIHN1Y2Nlc3MsIGVycm9yLCBtZXNzYWdlIH0gPSB2YWx1ZXM7XHJcblxyXG5cdGNvbnN0IGxpc3Rlckxlc1BhcnRlbmFpcmVzID0gKCkgPT4ge1xyXG5cdFx0TGlzdEFsbFBhcnRlbmFpcmVzKCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRQYXJ0ZW5haXJlKC4uLnBhcnRlbmFpcmVzLCBkYXRhKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxpc3Rlckxlc1BhcnRlbmFpcmVzKCk7XHJcblx0fSwgW3N1Y2Nlc3NdKTtcclxuXHJcblx0Y29uc3QgZGVsZXRlUGFydGVuYWlyZSA9IChpZCkgPT4ge1xyXG5cdFx0c2V0dmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdFx0Y29uc29sZS5sb2coJ2lkJywgaWQpO1xyXG5cdFx0cmVtb3ZlUGFydGVuYWlyZShpZCwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2RhdGEgdmF1dCcsIGRhdGEpO1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdHNldHZhbHVlcyh7XHJcblx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRcdGVycm9yOiB0cnVlLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogZmFsc2UsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0dmFsdWVzKHtcclxuXHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdFx0ZXJyb3I6ICcnLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IGRhdGEubWVzc2FnZSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZGVsZXRlQ29uZmlybSA9IChpZCkgPT4ge1xyXG5cdFx0bGV0IGFuc3dlciA9IHdpbmRvdy5jb25maXJtKFxyXG5cdFx0XHRgU3VwcHJlc3Npb24gZHUgcGFydGVuYWlyZSAke2lkfSwgw6p0ZXMtdm91cyBzw7tyID9gXHJcblx0XHQpO1xyXG5cdFx0aWYgKGFuc3dlcikge1xyXG5cdFx0XHRkZWxldGVQYXJ0ZW5haXJlKGlkKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e2xvYWRpbmcgJiYgPFNwaW5uZXIgLz59XHJcblx0XHRcdHtzdWNjZXNzICYmIDxBbGVydCBjb2xvcj0nc3VjY2Vzcyc+e21lc3NhZ2V9PC9BbGVydD59XHJcblx0XHRcdHtlcnJvciAmJiA8QWxlcnQgY29sb3I9J2Rhbmdlcic+VW5lIGVycmV1ciBlc3Qgc3VydmVudWU8L0FsZXJ0Pn1cclxuXHRcdFx0PFRhYmxlPlxyXG5cdFx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRoPiNJRDwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5DYXTDqWdvcmllL3NvdXMtbWVudTwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5QcsOpc2VudGF0aW9uPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPkFjdGlmPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoIGNvbFNwYW49JzInPkFjdGlvbnM8L3RoPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdHtwYXJ0ZW5haXJlcy5tYXAoKHBhcnRlbmFpcmUsIGkpID0+IChcclxuXHRcdFx0XHRcdFx0PHRyIGNsYXNzTmFtZT0nbXQtNScga2V5PXtpfT5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+e3BhcnRlbmFpcmUuX2lkfTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPntwYXJ0ZW5haXJlLm5vbX08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD57cGFydGVuYWlyZS5wcmVzUGFydGVuYWlyZX08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdHtwYXJ0ZW5haXJlLmFjdGlmID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPSdmYXMgZmEtY2hlY2stc3F1YXJlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9J2ZhcyBmYS10aW1lcydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvYWRtaW4vZ2VzdGlvbkRpdmVycy9hbGVudG91cnNgfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmFzIGZhLXBlbmNpbC1ydWxlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGNvbG9yOiAnb3JhbmdlJyB9fT48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVsZXRlQ29uZmlybShwYXJ0ZW5haXJlLl9pZClcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZhcyBmYS10cmFzaC1hbHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdyZWQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnNvcjogJ3BvaW50ZXInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT48L2k+XHJcblx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdDwvVGFibGU+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdFBhcnRlbmFpcmVzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9