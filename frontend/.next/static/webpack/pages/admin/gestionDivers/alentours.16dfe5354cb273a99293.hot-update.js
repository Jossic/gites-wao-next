webpackHotUpdate_N_E("pages/admin/gestionDivers/alentours",{

/***/ "./components/admin/lists/ListAlentours.js":
/*!*************************************************!*\
  !*** ./components/admin/lists/ListAlentours.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\lists\\ListAlentours.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var ListAlentours = function ListAlentours() {
  _s();

  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_6__["getCookie"])('token');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      alentours = _useState[0],
      setAlentours = _useState[1];

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

  var listerLesQR = function listerLesQR() {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_4__["listeDesQR"])().then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        setAlentours.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(alentours).concat([data]));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    listerLesQR();
  }, [success]);

  var deleteQR = function deleteQR(id) {
    setvalues(_objectSpread(_objectSpread({}, values), {}, {
      loading: true
    }));
    console.log('id', id);
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_4__["removeQR"])(id, token).then(function (data) {
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
    var answer = window.confirm("Cette op\xE9ration est irr\xE9versible, Etes-vous sur de vouloir supprimer la question avec l'id ".concat(id, " ?"));

    if (answer) {
      deleteQR(id);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, loading && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Spinner"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 16
    }
  }), success && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    color: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 16
    }
  }, message), error && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    color: "danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 14
    }
  }, "Une erreur est survenue"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Table"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 4
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 6
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, "Id"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, "Titre"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, "Lien"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, "Cat\xE9gorie"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, "Actif"), __jsx("th", {
    colSpan: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, "Actions"))), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }, alentours.map(function (alentour) {
    return __jsx("tr", {
      className: "mt-5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 7
      }
    }, __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 8
      }
    }, alentour._id), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 8
      }
    }, alentour.titre), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 8
      }
    }, alentour.lien), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 8
      }
    }, alentour.categorie), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 8
      }
    }, alentour.actif && 'actif'), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 8
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/admin/crud/divers/alentours/".concat(alentour._id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
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
        lineNumber: 97,
        columnNumber: 11
      }
    })))), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 8
      }
    }, __jsx("i", {
      onClick: function onClick() {
        return deleteConfirm(alentour._id);
      },
      className: "fas fa-trash-alt",
      style: {
        color: 'red',
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }
    })));
  }))));
};

_s(ListAlentours, "5e/B601e1KbhQiudiUa7XwtZJuw=");

_c = ListAlentours;
/* harmony default export */ __webpack_exports__["default"] = (ListAlentours);

var _c;

$RefreshReg$(_c, "ListAlentours");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0QWxlbnRvdXJzLmpzIl0sIm5hbWVzIjpbIkxpc3RBbGVudG91cnMiLCJ0b2tlbiIsImdldENvb2tpZSIsInVzZVN0YXRlIiwiYWxlbnRvdXJzIiwic2V0QWxlbnRvdXJzIiwibG9hZGluZyIsImVycm9yIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJ2YWx1ZXMiLCJzZXR2YWx1ZXMiLCJsaXN0ZXJMZXNRUiIsImxpc3RlRGVzUVIiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJkZWxldGVRUiIsImlkIiwicmVtb3ZlUVIiLCJkZWxldGVDb25maXJtIiwiYW5zd2VyIiwid2luZG93IiwiY29uZmlybSIsIm1hcCIsImFsZW50b3VyIiwiX2lkIiwidGl0cmUiLCJsaWVuIiwiY2F0ZWdvcmllIiwiYWN0aWYiLCJjb2xvciIsImN1cnNvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQzNCLE1BQU1DLEtBQUssR0FBR0Msc0VBQVMsQ0FBQyxPQUFELENBQXZCOztBQUQyQixrQkFFT0Msc0RBQVEsQ0FBQyxFQUFELENBRmY7QUFBQSxNQUVwQkMsU0FGb0I7QUFBQSxNQUVUQyxZQUZTOztBQUFBLG1CQUlDRixzREFBUSxDQUFDO0FBQ3BDRyxXQUFPLEVBQUUsS0FEMkI7QUFFcENDLFNBQUssRUFBRSxFQUY2QjtBQUdwQ0MsV0FBTyxFQUFFLEVBSDJCO0FBSXBDQyxXQUFPLEVBQUU7QUFKMkIsR0FBRCxDQUpUO0FBQUEsTUFJcEJDLE1BSm9CO0FBQUEsTUFJWkMsU0FKWTs7QUFBQSxNQVduQkwsT0FYbUIsR0FXa0JJLE1BWGxCLENBV25CSixPQVhtQjtBQUFBLE1BV1ZF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QSxPQURWO0FBRUMsZUFBUyxFQUFDLGtCQUZYO0FBR0MsV0FBSyxFQUFFO0FBQ05LLGFBQUssRUFBRSxLQUREO0FBRU5DLGNBQU0sRUFBRTtBQUZGLE9BSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURELENBaEJELENBRGM7QUFBQSxHQUFkLENBREYsQ0FaRCxDQUpELENBREQ7QUFrREEsQ0E3R0Q7O0dBQU1sQyxhOztLQUFBQSxhO0FBK0dTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9nZXN0aW9uRGl2ZXJzL2FsZW50b3Vycy4xNmRmZTUzNTRjYjI3M2E5OTI5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFibGUgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgbGlzdGVEZXNRUiwgcmVtb3ZlUVIgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IEFsZXJ0LCBTcGlubmVyIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgTGlzdEFsZW50b3VycyA9ICgpID0+IHtcclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHRjb25zdCBbYWxlbnRvdXJzLCBzZXRBbGVudG91cnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHRjb25zdCBbdmFsdWVzLCBzZXR2YWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRlcnJvcjogJycsXHJcblx0XHRzdWNjZXNzOiAnJyxcclxuXHRcdG1lc3NhZ2U6ICcnLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCB7IGxvYWRpbmcsIHN1Y2Nlc3MsIGVycm9yLCBtZXNzYWdlIH0gPSB2YWx1ZXM7XHJcblxyXG5cdGNvbnN0IGxpc3Rlckxlc1FSID0gKCkgPT4ge1xyXG5cdFx0bGlzdGVEZXNRUigpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0QWxlbnRvdXJzKC4uLmFsZW50b3VycywgZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsaXN0ZXJMZXNRUigpO1xyXG5cdH0sIFtzdWNjZXNzXSk7XHJcblxyXG5cdGNvbnN0IGRlbGV0ZVFSID0gKGlkKSA9PiB7XHJcblx0XHRzZXR2YWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUgfSk7XHJcblx0XHRjb25zb2xlLmxvZygnaWQnLCBpZCk7XHJcblx0XHRyZW1vdmVRUihpZCwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXR2YWx1ZXMoe1xyXG5cdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0XHRlcnJvcjogdHJ1ZSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZhbHNlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldHZhbHVlcyh7XHJcblx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRcdGVycm9yOiAnJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IHRydWUsXHJcblx0XHRcdFx0XHRtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRlbGV0ZUNvbmZpcm0gPSAoaWQpID0+IHtcclxuXHRcdGxldCBhbnN3ZXIgPSB3aW5kb3cuY29uZmlybShcclxuXHRcdFx0YENldHRlIG9ww6lyYXRpb24gZXN0IGlycsOpdmVyc2libGUsIEV0ZXMtdm91cyBzdXIgZGUgdm91bG9pciBzdXBwcmltZXIgbGEgcXVlc3Rpb24gYXZlYyBsJ2lkICR7aWR9ID9gXHJcblx0XHQpO1xyXG5cdFx0aWYgKGFuc3dlcikge1xyXG5cdFx0XHRkZWxldGVRUihpZCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHtsb2FkaW5nICYmIDxTcGlubmVyIC8+fVxyXG5cdFx0XHR7c3VjY2VzcyAmJiA8QWxlcnQgY29sb3I9J3N1Y2Nlc3MnPnttZXNzYWdlfTwvQWxlcnQ+fVxyXG5cdFx0XHR7ZXJyb3IgJiYgPEFsZXJ0IGNvbG9yPSdkYW5nZXInPlVuZSBlcnJldXIgZXN0IHN1cnZlbnVlPC9BbGVydD59XHJcblx0XHRcdDxUYWJsZT5cclxuXHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0aD5JZDwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5UaXRyZTwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5MaWVuPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPkNhdMOpZ29yaWU8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+QWN0aWY8L3RoPlxyXG5cclxuXHRcdFx0XHRcdFx0PHRoIGNvbFNwYW49JzInPkFjdGlvbnM8L3RoPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdHthbGVudG91cnMubWFwKChhbGVudG91cikgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8dHIgY2xhc3NOYW1lPSdtdC01Jz5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+e2FsZW50b3VyLl9pZH08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD57YWxlbnRvdXIudGl0cmV9PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+e2FsZW50b3VyLmxpZW59PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+e2FsZW50b3VyLmNhdGVnb3JpZX08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD57YWxlbnRvdXIuYWN0aWYgJiYgJ2FjdGlmJ308L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rXHJcblx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9e2AvYWRtaW4vY3J1ZC9kaXZlcnMvYWxlbnRvdXJzLyR7YWxlbnRvdXIuX2lkfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmYXMgZmEtcGVuY2lsLXJ1bGVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgY29sb3I6ICdvcmFuZ2UnIH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZGVsZXRlQ29uZmlybShhbGVudG91ci5faWQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZhcyBmYS10cmFzaC1hbHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdyZWQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnNvcjogJ3BvaW50ZXInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT48L2k+XHJcblx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdDwvVGFibGU+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdEFsZW50b3VycztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==