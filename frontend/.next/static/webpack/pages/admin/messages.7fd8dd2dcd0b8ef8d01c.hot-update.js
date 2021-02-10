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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _actions_messageActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../actions/messageActions */ "./actions/messageActions.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");


var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\lists\\ListMessages.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import { Table } from 'reactstrap';













var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  table: {
    minWidth: 650,
    color: white
  }
});

var ListMessages = function ListMessages(_ref) {
  _s();

  var messages = _ref.messages,
      newMessages = _ref.newMessages;
  var classes = useStyles();
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_4__["getCookie"])('token');

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
    Object(_actions_messageActions__WEBPACK_IMPORTED_MODULE_6__["removeMessage"])(id, token).then(function (data) {
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, loading && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Spinner"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 16
    }
  }), success && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Alert"], {
    color: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 16
    }
  }, message), error && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Alert"], {
    color: "danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 14
    }
  }, "Une erreur est survenue"), __jsx("p", {
    style: {
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 4
    }
  }, "Vous avez ", newMessages, " non lus !"), __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__["default"],
    style: {
      backgroundColor: '#282c34'
    },
    height: "100%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.table,
    "aria-label": "simple table",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 8
    }
  }, "#ID"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 8
    }
  }, "Nom"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 8
    }
  }, "Mail"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 8
    }
  }, "Tel"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 8
    }
  }, "Message"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    colSpan: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 8
    }
  }, "R\xE9pondre/Suppr"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 6
    }
  }, messages.map(function (msge, i) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__["default"] // style={
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
        lineNumber: 98,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }
    }, msge._id), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }
    }, msge.nom), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }
    }, msge.mail), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }
    }, msge.tel), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }
    }, msge.msg), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/admin/message/repondre/".concat(msge._id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 10
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
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
        lineNumber: 123,
        columnNumber: 12
      }
    })))), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
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
        lineNumber: 130,
        columnNumber: 10
      }
    })));
  })))));
};

_s(ListMessages, "7mxE2/Ou3GmEkJm/gfseeAcWxGg=", false, function () {
  return [useStyles];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0TWVzc2FnZXMuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRhYmxlIiwibWluV2lkdGgiLCJjb2xvciIsIndoaXRlIiwiTGlzdE1lc3NhZ2VzIiwibWVzc2FnZXMiLCJuZXdNZXNzYWdlcyIsImNsYXNzZXMiLCJ0b2tlbiIsImdldENvb2tpZSIsInVzZVN0YXRlIiwibG9hZGluZyIsImVycm9yIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJ2YWx1ZXMiLCJzZXR2YWx1ZXMiLCJkZWxldGVNZXNzYWdlIiwiaWQiLCJyZW1vdmVNZXNzYWdlIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidGV4dCIsImRlbGV0ZUNvbmZpcm0iLCJhbnN3ZXIiLCJ3aW5kb3ciLCJjb25maXJtIiwiUGFwZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXAiLCJtc2dlIiwiaSIsIl9pZCIsIm5vbSIsIm1haWwiLCJ0ZWwiLCJtc2ciLCJwYXJ0ZW5haXJlIiwiY3Vyc29yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUM1QkMsT0FBSyxFQUFFO0FBQ05DLFlBQVEsRUFBRSxHQURKO0FBRU5DLFNBQUssRUFBRUM7QUFGRDtBQURxQixDQUFELENBQTVCOztBQU9BLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQStCO0FBQUE7O0FBQUEsTUFBNUJDLFFBQTRCLFFBQTVCQSxRQUE0QjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7QUFDbkQsTUFBTUMsT0FBTyxHQUFHVCxTQUFTLEVBQXpCO0FBRUEsTUFBTVUsS0FBSyxHQUFHQyxzRUFBUyxDQUFDLE9BQUQsQ0FBdkI7O0FBSG1ELGtCQUt2QkMsc0RBQVEsQ0FBQztBQUNwQ0MsV0FBTyxFQUFFLEtBRDJCO0FBRXBDQyxTQUFLLEVBQUUsRUFGNkI7QUFHcENDLFdBQU8sRUFBRSxFQUgyQjtBQUlwQ0MsV0FBTyxFQUFFO0FBSjJCLEdBQUQsQ0FMZTtBQUFBLE1BSzVDQyxNQUw0QztBQUFBLE1BS3BDQyxTQUxvQzs7QUFBQSxNQVkzQ0wsT0FaMkMsR0FZTkksTUFaTSxDQVkzQ0osT0FaMkM7QUFBQSxNQVlsQ0UsT0Faa0MsR0FZTkUsTUFaTSxDQVlsQ0YsT0Faa0M7QUFBQSxNQVl6QkQsS0FaeUIsR0FZTkcsTUFaTSxDQVl6QkgsS0FaeUI7QUFBQSxNQVlsQkUsT0Faa0IsR0FZTkMsTUFaTSxDQVlsQkQsT0Faa0I7O0FBY25ELE1BQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsRUFBRCxFQUFRO0FBQzdCRixhQUFTLGlDQUFNRCxNQUFOO0FBQWNKLGFBQU8sRUFBRTtBQUF2QixPQUFUO0FBQ0FRLGlGQUFhLENBQUNELEVBQUQsRUFBS1YsS0FBTCxDQUFiLENBQXlCWSxJQUF6QixDQUE4QixVQUFDQyxJQUFELEVBQVU7QUFDdkNDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJGLElBQXpCOztBQUNBLFVBQUlBLElBQUksQ0FBQ1QsS0FBVCxFQUFnQjtBQUNmSSxpQkFBUyxpQ0FDTEQsTUFESztBQUVSSixpQkFBTyxFQUFFLEtBRkQ7QUFHUkMsZUFBSyxFQUFFLElBSEM7QUFJUkMsaUJBQU8sRUFBRTtBQUpELFdBQVQ7QUFNQSxPQVBELE1BT087QUFDTkcsaUJBQVMsaUNBQ0xELE1BREs7QUFFUkosaUJBQU8sRUFBRSxLQUZEO0FBR1JDLGVBQUssRUFBRSxFQUhDO0FBSVJDLGlCQUFPLEVBQUUsSUFKRDtBQUtSQyxpQkFBTyxFQUFFTyxJQUFJLENBQUNHO0FBTE4sV0FBVDtBQU9BO0FBQ0QsS0FsQkQ7QUFtQkEsR0FyQkQ7O0FBdUJBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ1AsRUFBRCxFQUFRO0FBQzdCLFFBQUlRLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxPQUFQLGtDQUNjVixFQURkLDZCQUFiOztBQUdBLFFBQUlRLE1BQUosRUFBWTtBQUNYVCxtQkFBYSxDQUFDQyxFQUFELENBQWI7QUFDQTtBQUNELEdBUEQ7O0FBU0EsU0FDQyxtRUFDRVAsT0FBTyxJQUFJLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURiLEVBRUVFLE9BQU8sSUFBSSxNQUFDLGdEQUFEO0FBQU8sU0FBSyxFQUFDLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3QkMsT0FBeEIsQ0FGYixFQUdFRixLQUFLLElBQUksTUFBQyxnREFBRDtBQUFPLFNBQUssRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBSFgsRUFJQztBQUFHLFNBQUssRUFBRTtBQUFFVixXQUFLLEVBQUU7QUFBVCxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXlDSSxXQUF6QyxlQUpELEVBS0MsTUFBQyx5RUFBRDtBQUNDLGFBQVMsRUFBRXVCLGdFQURaO0FBRUMsU0FBSyxFQUFFO0FBQUVDLHFCQUFlLEVBQUU7QUFBbkIsS0FGUjtBQUdDLFVBQU0sRUFBQyxNQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJQyxNQUFDLCtEQUFEO0FBQU8sYUFBUyxFQUFFdkIsT0FBTyxDQUFDUCxLQUExQjtBQUFpQyxrQkFBVyxjQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0MsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQsRUFFQyxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGRCxFQUdDLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhELEVBSUMsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSkQsRUFLQyxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRCxFQU1DLE1BQUMsbUVBQUQ7QUFBVyxXQUFPLEVBQUMsR0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFORCxDQURELENBUEQsRUFpQkMsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VLLFFBQVEsQ0FBQzBCLEdBQVQsQ0FBYSxVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxXQUNiLE1BQUMsbUVBQUQsQ0FDQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJEO0FBY0MsU0FBRyxFQUFFQSxDQWROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FlQyxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBWUQsSUFBSSxDQUFDRSxHQUFqQixDQWZELEVBZ0JDLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFZRixJQUFJLENBQUNHLEdBQWpCLENBaEJELEVBaUJDLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFZSCxJQUFJLENBQUNJLElBQWpCLENBakJELEVBa0JDLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFZSixJQUFJLENBQUNLLEdBQWpCLENBbEJELEVBbUJDLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFZTCxJQUFJLENBQUNNLEdBQWpCLENBbkJELEVBcUJDLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDLE1BQUMsZ0RBQUQ7QUFDQyxVQUFJLG9DQUE2Qk4sSUFBSSxDQUFDRSxHQUFsQyxDQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFDQyxlQUFTLEVBQUMsY0FEWDtBQUVDLFdBQUssRUFBRTtBQUFFaEMsYUFBSyxFQUFFO0FBQVQsT0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREQsQ0FGRCxDQURELENBckJELEVBK0JDLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDO0FBQ0MsYUFBTyxFQUFFO0FBQUEsZUFDUnVCLGFBQWEsQ0FBQ2MsVUFBVSxDQUFDTCxHQUFaLENBREw7QUFBQSxPQURWO0FBSUMsZUFBUyxFQUFDLGtCQUpYO0FBS0MsV0FBSyxFQUFFO0FBQ05oQyxhQUFLLEVBQUUsS0FERDtBQUVOc0MsY0FBTSxFQUFFO0FBRkYsT0FMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREQsQ0EvQkQsQ0FEYTtBQUFBLEdBQWIsQ0FERixDQWpCRCxDQUpELENBTEQsQ0FERDtBQThFQSxDQTVIRDs7R0FBTXBDLFk7VUFDV04sUzs7O0tBRFhNLFk7QUE4SFNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL21lc3NhZ2VzLjdmZDhkZDJkY2QwYjhlZjhkMDFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBUYWJsZSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB3aXRoVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHsgQWxlcnQsIFNwaW5uZXIgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgcmVtb3ZlTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvbWVzc2FnZUFjdGlvbnMnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcclxuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcblx0dGFibGU6IHtcclxuXHRcdG1pbldpZHRoOiA2NTAsXHJcblx0XHRjb2xvcjogd2hpdGUsXHJcblx0fSxcclxufSk7XHJcblxyXG5jb25zdCBMaXN0TWVzc2FnZXMgPSAoeyBtZXNzYWdlcywgbmV3TWVzc2FnZXMgfSkgPT4ge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblxyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldHZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdGVycm9yOiAnJyxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0bWVzc2FnZTogJycsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHsgbG9hZGluZywgc3VjY2VzcywgZXJyb3IsIG1lc3NhZ2UgfSA9IHZhbHVlcztcclxuXHJcblx0Y29uc3QgZGVsZXRlTWVzc2FnZSA9IChpZCkgPT4ge1xyXG5cdFx0c2V0dmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdFx0cmVtb3ZlTWVzc2FnZShpZCwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2RhdGEgdmF1dCcsIGRhdGEpO1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdHNldHZhbHVlcyh7XHJcblx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRcdGVycm9yOiB0cnVlLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogZmFsc2UsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0dmFsdWVzKHtcclxuXHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdFx0ZXJyb3I6ICcnLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IGRhdGEudGV4dCxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZGVsZXRlQ29uZmlybSA9IChpZCkgPT4ge1xyXG5cdFx0bGV0IGFuc3dlciA9IHdpbmRvdy5jb25maXJtKFxyXG5cdFx0XHRgU3VwcHJlc3Npb24gZHUgbWVzc2FnZSAke2lkfSwgw6p0ZXMtdm91cyBzw7tyID9gXHJcblx0XHQpO1xyXG5cdFx0aWYgKGFuc3dlcikge1xyXG5cdFx0XHRkZWxldGVNZXNzYWdlKGlkKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e2xvYWRpbmcgJiYgPFNwaW5uZXIgLz59XHJcblx0XHRcdHtzdWNjZXNzICYmIDxBbGVydCBjb2xvcj0nc3VjY2Vzcyc+e21lc3NhZ2V9PC9BbGVydD59XHJcblx0XHRcdHtlcnJvciAmJiA8QWxlcnQgY29sb3I9J2Rhbmdlcic+VW5lIGVycmV1ciBlc3Qgc3VydmVudWU8L0FsZXJ0Pn1cclxuXHRcdFx0PHAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+Vm91cyBhdmV6IHtuZXdNZXNzYWdlc30gbm9uIGx1cyAhPC9wPlxyXG5cdFx0XHQ8VGFibGVDb250YWluZXJcclxuXHRcdFx0XHRjb21wb25lbnQ9e1BhcGVyfVxyXG5cdFx0XHRcdHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMyODJjMzQnIH19XHJcblx0XHRcdFx0aGVpZ2h0PScxMDAlJz5cclxuXHRcdFx0XHQ8VGFibGUgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfSBhcmlhLWxhYmVsPSdzaW1wbGUgdGFibGUnPlxyXG5cdFx0XHRcdFx0ey8qIHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdG1hcmdpblRvcDogJzMwcHgnLFxyXG5cdFx0XHRcdFx0XHRib3JkZXJDb2xsYXBzZTogJ3NlcGFyYXRlJyxcclxuXHRcdFx0XHRcdFx0Ym9yZGVyU3BhY2luZzogJzAgMTBweCcsXHJcblx0XHRcdFx0XHRcdGNvbG9yOiAnd2hpdGUnLFxyXG5cdFx0XHRcdFx0fX0+ICovfVxyXG5cdFx0XHRcdFx0PFRhYmxlSGVhZD5cclxuXHRcdFx0XHRcdFx0PFRhYmxlUm93PlxyXG5cdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+I0lEPC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5Ob208L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPk1haWw8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPlRlbDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+TWVzc2FnZTwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGwgY29sU3Bhbj0nMic+UsOpcG9uZHJlL1N1cHByPC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdDwvVGFibGVSb3c+XHJcblx0XHRcdFx0XHQ8L1RhYmxlSGVhZD5cclxuXHRcdFx0XHRcdDxUYWJsZUJvZHk+XHJcblx0XHRcdFx0XHRcdHttZXNzYWdlcy5tYXAoKG1zZ2UsIGkpID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8VGFibGVSb3dcclxuXHRcdFx0XHRcdFx0XHRcdC8vIHN0eWxlPXtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0IW1zZ2UudnVcclxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0XHQ/IHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAnIzU2ZThmZicsXHJcblx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0XHRcdHBhZGRpbmdCb3R0b206ICcyMHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0XHRcdFx0Ym94U2hhZG93OlxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRcdFx0XHRcdCctMXB4IDJweCA1cHggMXB4IHJnYmEoMCwwLDAsMC43KSwgLTFweCAycHggMjBweCByZ2JhKDI1NSwyNTUsMjU1LDAuNikgaW5zZXQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRcdCAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRcdDoge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjYWRlZGZmJyxcclxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0XHRcdFx0cGFkZGluZ0JvdHRvbTogJzIwcHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRcdCAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtpfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+e21zZ2UuX2lkfTwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD57bXNnZS5ub219PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPnttc2dlLm1haWx9PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPnttc2dlLnRlbH08L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+e21zZ2UubXNnfTwvVGFibGVDZWxsPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZj17YC9hZG1pbi9tZXNzYWdlL3JlcG9uZHJlLyR7bXNnZS5faWR9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZhcyBmYS1yZXBseSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgY29sb3I6ICdibHVlJyB9fT48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlbGV0ZUNvbmZpcm0ocGFydGVuYWlyZS5faWQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmFzIGZhLXRyYXNoLWFsdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdyZWQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0PC9UYWJsZVJvdz5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8L1RhYmxlQm9keT5cclxuXHRcdFx0XHQ8L1RhYmxlPlxyXG5cdFx0XHQ8L1RhYmxlQ29udGFpbmVyPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RNZXNzYWdlcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==