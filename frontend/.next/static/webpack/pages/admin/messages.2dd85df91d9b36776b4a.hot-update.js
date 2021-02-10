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
    minWidth: 650
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
      lineNumber: 70,
      columnNumber: 16
    }
  }), success && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Alert"], {
    color: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 16
    }
  }, message), error && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Alert"], {
    color: "danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 14
    }
  }, "Une erreur est survenue"), __jsx("p", {
    style: {
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
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
      lineNumber: 74,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      color: 'white'
    },
    className: classes.table,
    "aria-label": "simple table",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 8
    }
  }, "#ID"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 8
    }
  }, "Nom"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 8
    }
  }, "Mail"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 8
    }
  }, "Tel"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 8
    }
  }, "Message"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    colSpan: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 8
    }
  }, "R\xE9pondre/Suppr"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
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
        lineNumber: 100,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }
    }, msge._id), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }
    }, msge.nom), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }
    }, msge.mail), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }
    }, msge.tel), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }
    }, msge.msg), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/admin/message/repondre/".concat(msge._id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 10
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
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
        lineNumber: 125,
        columnNumber: 12
      }
    })))), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
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
        lineNumber: 132,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0TWVzc2FnZXMuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRhYmxlIiwibWluV2lkdGgiLCJMaXN0TWVzc2FnZXMiLCJtZXNzYWdlcyIsIm5ld01lc3NhZ2VzIiwiY2xhc3NlcyIsInRva2VuIiwiZ2V0Q29va2llIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJzdWNjZXNzIiwibWVzc2FnZSIsInZhbHVlcyIsInNldHZhbHVlcyIsImRlbGV0ZU1lc3NhZ2UiLCJpZCIsInJlbW92ZU1lc3NhZ2UiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwiZGVsZXRlQ29uZmlybSIsImFuc3dlciIsIndpbmRvdyIsImNvbmZpcm0iLCJjb2xvciIsIlBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwibWFwIiwibXNnZSIsImkiLCJfaWQiLCJub20iLCJtYWlsIiwidGVsIiwibXNnIiwicGFydGVuYWlyZSIsImN1cnNvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDNUJDLE9BQUssRUFBRTtBQUNOQyxZQUFRLEVBQUU7QUFESjtBQURxQixDQUFELENBQTVCOztBQU1BLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQStCO0FBQUE7O0FBQUEsTUFBNUJDLFFBQTRCLFFBQTVCQSxRQUE0QjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7QUFDbkQsTUFBTUMsT0FBTyxHQUFHUCxTQUFTLEVBQXpCO0FBRUEsTUFBTVEsS0FBSyxHQUFHQyxzRUFBUyxDQUFDLE9BQUQsQ0FBdkI7O0FBSG1E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R0FBakIsQ0FsQkQsRUFtQkMsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVlMLElBQUksQ0FBQ00sR0FBakIsQ0FuQkQsRUFxQkMsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0MsTUFBQyxnREFBRDtBQUNDLFVBQUksb0NBQTZCTixJQUFJLENBQUNFLEdBQWxDLENBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQztBQUNDLGVBQVMsRUFBQyxjQURYO0FBRUMsV0FBSyxFQUFFO0FBQUVOLGFBQUssRUFBRTtBQUFULE9BRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURELENBRkQsQ0FERCxDQXJCRCxFQStCQyxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQztBQUNDLGFBQU8sRUFBRTtBQUFBLGVBQ1JKLGFBQWEsQ0FBQ2UsVUFBVSxDQUFDTCxHQUFaLENBREw7QUFBQSxPQURWO0FBSUMsZUFBUyxFQUFDLGtCQUpYO0FBS0MsV0FBSyxFQUFFO0FBQ05OLGFBQUssRUFBRSxLQUREO0FBRU5ZLGNBQU0sRUFBRTtBQUZGLE9BTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURELENBL0JELENBRGE7QUFBQSxHQUFiLENBREYsQ0FwQkQsQ0FKRCxDQUxELENBREQ7QUFpRkEsQ0EvSEQ7O0dBQU1yQyxZO1VBQ1dKLFM7OztLQURYSSxZO0FBaUlTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9tZXNzYWdlcy4yZGQ4NWRmOTFkOWIzNjc3NmI0YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgVGFibGUgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgd2l0aFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IEFsZXJ0LCBTcGlubmVyIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IHJlbW92ZU1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL21lc3NhZ2VBY3Rpb25zJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XHJcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lcic7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG5cdHRhYmxlOiB7XHJcblx0XHRtaW5XaWR0aDogNjUwLFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuY29uc3QgTGlzdE1lc3NhZ2VzID0gKHsgbWVzc2FnZXMsIG5ld01lc3NhZ2VzIH0pID0+IHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cclxuXHRjb25zdCBbdmFsdWVzLCBzZXR2YWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRlcnJvcjogJycsXHJcblx0XHRzdWNjZXNzOiAnJyxcclxuXHRcdG1lc3NhZ2U6ICcnLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCB7IGxvYWRpbmcsIHN1Y2Nlc3MsIGVycm9yLCBtZXNzYWdlIH0gPSB2YWx1ZXM7XHJcblxyXG5cdGNvbnN0IGRlbGV0ZU1lc3NhZ2UgPSAoaWQpID0+IHtcclxuXHRcdHNldHZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHRcdHJlbW92ZU1lc3NhZ2UoaWQsIHRva2VuKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdkYXRhIHZhdXQnLCBkYXRhKTtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXR2YWx1ZXMoe1xyXG5cdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0XHRlcnJvcjogdHJ1ZSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZhbHNlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldHZhbHVlcyh7XHJcblx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRcdGVycm9yOiAnJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IHRydWUsXHJcblx0XHRcdFx0XHRtZXNzYWdlOiBkYXRhLnRleHQsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRlbGV0ZUNvbmZpcm0gPSAoaWQpID0+IHtcclxuXHRcdGxldCBhbnN3ZXIgPSB3aW5kb3cuY29uZmlybShcclxuXHRcdFx0YFN1cHByZXNzaW9uIGR1IG1lc3NhZ2UgJHtpZH0sIMOqdGVzLXZvdXMgc8O7ciA/YFxyXG5cdFx0KTtcclxuXHRcdGlmIChhbnN3ZXIpIHtcclxuXHRcdFx0ZGVsZXRlTWVzc2FnZShpZCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHtsb2FkaW5nICYmIDxTcGlubmVyIC8+fVxyXG5cdFx0XHR7c3VjY2VzcyAmJiA8QWxlcnQgY29sb3I9J3N1Y2Nlc3MnPnttZXNzYWdlfTwvQWxlcnQ+fVxyXG5cdFx0XHR7ZXJyb3IgJiYgPEFsZXJ0IGNvbG9yPSdkYW5nZXInPlVuZSBlcnJldXIgZXN0IHN1cnZlbnVlPC9BbGVydD59XHJcblx0XHRcdDxwIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19PlZvdXMgYXZleiB7bmV3TWVzc2FnZXN9IG5vbiBsdXMgITwvcD5cclxuXHRcdFx0PFRhYmxlQ29udGFpbmVyXHJcblx0XHRcdFx0Y29tcG9uZW50PXtQYXBlcn1cclxuXHRcdFx0XHRzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMjgyYzM0JyB9fVxyXG5cdFx0XHRcdGhlaWdodD0nMTAwJSc+XHJcblx0XHRcdFx0PFRhYmxlXHJcblx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfVxyXG5cdFx0XHRcdFx0YXJpYS1sYWJlbD0nc2ltcGxlIHRhYmxlJz5cclxuXHRcdFx0XHRcdHsvKiBzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRtYXJnaW5Ub3A6ICczMHB4JyxcclxuXHRcdFx0XHRcdFx0Ym9yZGVyQ29sbGFwc2U6ICdzZXBhcmF0ZScsXHJcblx0XHRcdFx0XHRcdGJvcmRlclNwYWNpbmc6ICcwIDEwcHgnLFxyXG5cdFx0XHRcdFx0XHRjb2xvcjogJ3doaXRlJyxcclxuXHRcdFx0XHRcdH19PiAqL31cclxuXHRcdFx0XHRcdDxUYWJsZUhlYWQ+XHJcblx0XHRcdFx0XHRcdDxUYWJsZVJvdz5cclxuXHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPiNJRDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+Tm9tPC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5NYWlsPC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD5UZWw8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPk1lc3NhZ2U8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsIGNvbFNwYW49JzInPlLDqXBvbmRyZS9TdXBwcjwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHQ8L1RhYmxlUm93PlxyXG5cdFx0XHRcdFx0PC9UYWJsZUhlYWQ+XHJcblx0XHRcdFx0XHQ8VGFibGVCb2R5PlxyXG5cdFx0XHRcdFx0XHR7bWVzc2FnZXMubWFwKChtc2dlLCBpKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PFRhYmxlUm93XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBzdHlsZT17XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBcdCFtc2dlLnZ1XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0PyB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJyM1NmU4ZmYnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRcdFx0XHRwYWRkaW5nQm90dG9tOiAnMjBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0XHRcdGJveFNoYWRvdzpcclxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0XHRcdFx0XHQnLTFweCAycHggNXB4IDFweCByZ2JhKDAsMCwwLDAuNyksIC0xcHggMnB4IDIwcHggcmdiYSgyNTUsMjU1LDI1NSwwLjYpIGluc2V0JyxcclxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0XHQgIH1cclxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0XHQ6IHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAnI2FkZWRmZicsXHJcblx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0XHRcdHBhZGRpbmdCb3R0b206ICcyMHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0XHQgIH1cclxuXHRcdFx0XHRcdFx0XHRcdC8vIH1cclxuXHRcdFx0XHRcdFx0XHRcdGtleT17aX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPnttc2dlLl9pZH08L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGw+e21zZ2Uubm9tfTwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD57bXNnZS5tYWlsfTwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbD57bXNnZS50ZWx9PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPnttc2dlLm1zZ308L1RhYmxlQ2VsbD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9e2AvYWRtaW4vbWVzc2FnZS9yZXBvbmRyZS8ke21zZ2UuX2lkfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmYXMgZmEtcmVwbHknXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGNvbG9yOiAnYmx1ZScgfX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZWxldGVDb25maXJtKHBhcnRlbmFpcmUuX2lkKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZhcyBmYS10cmFzaC1hbHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAncmVkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnNvcjogJ3BvaW50ZXInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdDwvVGFibGVSb3c+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PC9UYWJsZUJvZHk+XHJcblx0XHRcdFx0PC9UYWJsZT5cclxuXHRcdFx0PC9UYWJsZUNvbnRhaW5lcj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0TWVzc2FnZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=