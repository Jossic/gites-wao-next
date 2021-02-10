webpackHotUpdate_N_E("pages/admin/messages",{

/***/ "./components/admin/lists/ListMessages.js":
/*!************************************************!*\
  !*** ./components/admin/lists/ListMessages.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _actions_messageActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../actions/messageActions */ "./actions/messageActions.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");


var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\lists\\ListMessages.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import { Table } from 'reactstrap';













var ListMessages = function ListMessages(_ref) {
  _s();

  var messages = _ref.messages,
      newMessages = _ref.newMessages;
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_3__["getCookie"])('token');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    loading: false,
    error: '',
    success: '',
    message: ''
  }),
      values = _useState[0],
      setvalues = _useState[1];

  var loading = values.loading,
      success = values.success,
      error = values.error,
      message = values.message;

  var deleteMessage = function deleteMessage(id) {
    setvalues(_objectSpread(_objectSpread({}, values), {}, {
      loading: true
    }));
    Object(_actions_messageActions__WEBPACK_IMPORTED_MODULE_5__["removeMessage"])(id, token).then(function (data) {
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
          message: data.text
        }));
      }
    });
  };

  var deleteConfirm = function deleteConfirm(id) {
    var answer = window.confirm("Suppression du message ".concat(id, ", \xEAtes-vous s\xFBr ?"));

    if (answer) {
      deleteMessage(id);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, loading && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Spinner"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 16
    }
  }), success && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Alert"], {
    color: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 16
    }
  }, message), error && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Alert"], {
    color: "danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 14
    }
  }, "Une erreur est survenue"), __jsx("p", {
    style: {
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 4
    }
  }, "Vous avez ", newMessages, " non lus !"), __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__["default"],
    style: {
      backgroundColor: '#282c34'
    },
    height: "100%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "aria-label": "simple table",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 8
    }
  }, "#ID"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 8
    }
  }, "Nom"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 8
    }
  }, "Mail"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 8
    }
  }, "Tel"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 8
    }
  }, "Message"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
    colSpan: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 8
    }
  }, "R\xE9pondre/Suppr"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 6
    }
  }, messages.map(function (msge, i) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__["default"] // style={
    // 	!msge.vu
    // 		? {
    // 				backgroundColor: '#56e8ff',
    // 				paddingBottom: '20px',
    // 				boxShadow:
    // 					'-1px 2px 5px 1px rgba(0,0,0,0.7), -1px 2px 20px rgba(255,255,255,0.6) inset',
    // 		  }
    // 		: {
    // 				backgroundColor: '#adedff',
    // 				paddingBottom: '20px',
    // 		  }
    // }
    , {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }
    }, msge._id), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }
    }, msge.nom), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }
    }, msge.mail), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }
    }, msge.tel), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }
    }, msge.msg), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/admin/message/repondre/".concat(msge._id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 10
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 11
      }
    }, __jsx("i", {
      className: "fas fa-reply",
      style: {
        color: 'blue'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 12
      }
    })))), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
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
        lineNumber: 120,
        columnNumber: 10
      }
    })));
  })))));
};

_s(ListMessages, "zHNVKE/1KnZVwaUJtFjyUiSK/O0=");

_c = ListMessages;
/* harmony default export */ __webpack_exports__["default"] = (ListMessages);

var _c;

$RefreshReg$(_c, "ListMessages");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0TWVzc2FnZXMuanMiXSwibmFtZXMiOlsiTGlzdE1lc3NhZ2VzIiwibWVzc2FnZXMiLCJuZXdNZXNzYWdlcyIsInRva2VuIiwiZ2V0Q29va2llIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJzdWNjZXNzIiwibWVzc2FnZSIsInZhbHVlcyIsInNldHZhbHVlcyIsImRlbGV0ZU1lc3NhZ2UiLCJpZCIsInJlbW92ZU1lc3NhZ2UiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwiZGVsZXRlQ29uZmlybSIsImFuc3dlciIsIndpbmRvdyIsImNvbmZpcm0iLCJjb2xvciIsIlBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwibWFwIiwibXNnZSIsImkiLCJfaWQiLCJub20iLCJtYWlsIiwidGVsIiwibXNnIiwicGFydGVuYWlyZSIsImN1cnNvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBK0I7QUFBQTs7QUFBQSxNQUE1QkMsUUFBNEIsUUFBNUJBLFFBQTRCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUNuRCxNQUFNQyxLQUFLLEdBQUdDLHNFQUFTLENBQUMsT0FBRCxDQUF2Qjs7QUFEbUQsa0JBR3ZCQyxzREFBUSxDQUFDO0FBQ3BDQyxXQUFPLEVBQUUsS0FEMkI7QUFFcENDLFNBQUssRUFBRSxFQUY2QjtBQUdwQ0MsV0FBTyxFQUFFLEVBSDJCO0FBSXBDQyxXQUFPLEVBQUU7QUFKMkIsR0FBRCxDQUhlO0FBQUEsTUFHNUNDLE1BSDRDO0FBQUEsTUFHcENDLFNBSG9DOztBQUFBLE1BVTNDTCxPQVYyQyxHQVVO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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFDQyxlQUFTLEVBQUMsY0FEWDtBQUVDLFdBQUssRUFBRTtBQUFFTixhQUFLLEVBQUU7QUFBVCxPQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERCxDQUZELENBREQsQ0FyQkQsRUErQkMsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFDQyxhQUFPLEVBQUU7QUFBQSxlQUNSSixhQUFhLENBQUNlLFVBQVUsQ0FBQ0wsR0FBWixDQURMO0FBQUEsT0FEVjtBQUlDLGVBQVMsRUFBQyxrQkFKWDtBQUtDLFdBQUssRUFBRTtBQUNOTixhQUFLLEVBQUUsS0FERDtBQUVOWSxjQUFNLEVBQUU7QUFGRixPQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERCxDQS9CRCxDQURhO0FBQUEsR0FBYixDQURGLENBakJELENBSkQsQ0FMRCxDQUREO0FBOEVBLENBMUhEOztHQUFNcEMsWTs7S0FBQUEsWTtBQTRIU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vbWVzc2FnZXMuZWRhNmNiODA4OTM1ZDc3YzE2ZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IFRhYmxlIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgeyBBbGVydCwgU3Bpbm5lciB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyByZW1vdmVNZXNzYWdlIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9tZXNzYWdlQWN0aW9ucyc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XHJcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcclxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xyXG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXInO1xyXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcblxyXG5jb25zdCBMaXN0TWVzc2FnZXMgPSAoeyBtZXNzYWdlcywgbmV3TWVzc2FnZXMgfSkgPT4ge1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cclxuXHRjb25zdCBbdmFsdWVzLCBzZXR2YWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRlcnJvcjogJycsXHJcblx0XHRzdWNjZXNzOiAnJyxcclxuXHRcdG1lc3NhZ2U6ICcnLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCB7IGxvYWRpbmcsIHN1Y2Nlc3MsIGVycm9yLCBtZXNzYWdlIH0gPSB2YWx1ZXM7XHJcblxyXG5cdGNvbnN0IGRlbGV0ZU1lc3NhZ2UgPSAoaWQpID0+IHtcclxuXHRcdHNldHZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHRcdHJlbW92ZU1lc3NhZ2UoaWQsIHRva2VuKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdkYXRhIHZhdXQnLCBkYXRhKTtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXR2YWx1ZXMoe1xyXG5cdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0XHRlcnJvcjogdHJ1ZSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZhbHNlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldHZhbHVlcyh7XHJcblx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRcdGVycm9yOiAnJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IHRydWUsXHJcblx0XHRcdFx0XHRtZXNzYWdlOiBkYXRhLnRleHQsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRlbGV0ZUNvbmZpcm0gPSAoaWQpID0+IHtcclxuXHRcdGxldCBhbnN3ZXIgPSB3aW5kb3cuY29uZmlybShcclxuXHRcdFx0YFN1cHByZXNzaW9uIGR1IG1lc3NhZ2UgJHtpZH0sIMOqdGVzLXZvdXMgc8O7ciA/YFxyXG5cdFx0KTtcclxuXHRcdGlmIChhbnN3ZXIpIHtcclxuXHRcdFx0ZGVsZXRlTWVzc2FnZShpZCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHtsb2FkaW5nICYmIDxTcGlubmVyIC8+fVxyXG5cdFx0XHR7c3VjY2VzcyAmJiA8QWxlcnQgY29sb3I9J3N1Y2Nlc3MnPnttZXNzYWdlfTwvQWxlcnQ+fVxyXG5cdFx0XHR7ZXJyb3IgJiYgPEFsZXJ0IGNvbG9yPSdkYW5nZXInPlVuZSBlcnJldXIgZXN0IHN1cnZlbnVlPC9BbGVydD59XHJcblx0XHRcdDxwIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19PlZvdXMgYXZleiB7bmV3TWVzc2FnZXN9IG5vbiBsdXMgITwvcD5cclxuXHRcdFx0PFRhYmxlQ29udGFpbmVyXHJcblx0XHRcdFx0Y29tcG9uZW50PXtQYXBlcn1cclxuXHRcdFx0XHRzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMjgyYzM0JyB9fVxyXG5cdFx0XHRcdGhlaWdodD0nMTAwJSc+XHJcblx0XHRcdFx0PFRhYmxlIGFyaWEtbGFiZWw9J3NpbXBsZSB0YWJsZSc+XHJcblx0XHRcdFx0XHR7Lyogc3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0bWFyZ2luVG9wOiAnMzBweCcsXHJcblx0XHRcdFx0XHRcdGJvcmRlckNvbGxhcHNlOiAnc2VwYXJhdGUnLFxyXG5cdFx0XHRcdFx0XHRib3JkZXJTcGFjaW5nOiAnMCAxMHB4JyxcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICd3aGl0ZScsXHJcblx0XHRcdFx0XHR9fT4gKi99XHJcblx0XHRcdFx0XHQ8VGFibGVIZWFkPlxyXG5cdFx0XHRcdFx0XHQ8VGFibGVSb3c+XHJcblx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD4jSUQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPk5vbTwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+TWFpbDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+VGVsPC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5NZXNzYWdlPC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbCBjb2xTcGFuPScyJz5Sw6lwb25kcmUvU3VwcHI8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0PC9UYWJsZVJvdz5cclxuXHRcdFx0XHRcdDwvVGFibGVIZWFkPlxyXG5cdFx0XHRcdFx0PFRhYmxlQm9keT5cclxuXHRcdFx0XHRcdFx0e21lc3NhZ2VzLm1hcCgobXNnZSwgaSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxUYWJsZVJvd1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gc3R5bGU9e1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHQhbXNnZS52dVxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRcdD8ge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjNTZlOGZmJyxcclxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0XHRcdFx0cGFkZGluZ0JvdHRvbTogJzIwcHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRcdFx0XHRib3hTaGFkb3c6XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0XHRcdFx0Jy0xcHggMnB4IDVweCAxcHggcmdiYSgwLDAsMCwwLjcpLCAtMXB4IDJweCAyMHB4IHJnYmEoMjU1LDI1NSwyNTUsMC42KSBpbnNldCcsXHJcblx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0ICB9XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0OiB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJyNhZGVkZmYnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRcdFx0XHRwYWRkaW5nQm90dG9tOiAnMjBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0ICB9XHJcblx0XHRcdFx0XHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0XHRcdFx0XHRrZXk9e2l9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD57bXNnZS5faWR9PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPnttc2dlLm5vbX08L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+e21zZ2UubWFpbH08L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+e21zZ2UudGVsfTwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD57bXNnZS5tc2d9PC9UYWJsZUNlbGw+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPXtgL2FkbWluL21lc3NhZ2UvcmVwb25kcmUvJHttc2dlLl9pZH1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmFzIGZhLXJlcGx5J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogJ2JsdWUnIH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVsZXRlQ29uZmlybShwYXJ0ZW5haXJlLl9pZClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmYXMgZmEtdHJhc2gtYWx0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3JlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjdXJzb3I6ICdwb2ludGVyJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHQ8L1RhYmxlUm93PlxyXG5cdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdDwvVGFibGVCb2R5PlxyXG5cdFx0XHRcdDwvVGFibGU+XHJcblx0XHRcdDwvVGFibGVDb250YWluZXI+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdE1lc3NhZ2VzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9