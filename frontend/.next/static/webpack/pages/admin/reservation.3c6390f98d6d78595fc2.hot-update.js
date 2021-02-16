webpackHotUpdate_N_E("pages/admin/reservation",{

/***/ "./components/admin/ClientNom.js":
/*!***************************************!*\
  !*** ./components/admin/ClientNom.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var _actions_clientActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/clientActions */ "./actions/clientActions.js");
/* harmony import */ var _material_ui_icons_AssignmentInd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/AssignmentInd */ "./node_modules/@material-ui/icons/AssignmentInd.js");
/* harmony import */ var _material_ui_icons_AssignmentInd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AssignmentInd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Badge */ "./node_modules/@material-ui/core/esm/Badge/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Check */ "./node_modules/@material-ui/icons/Check.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\ClientNom.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var StyledBadge = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(function (theme) {
  return {
    badge: {
      right: -3,
      top: 13,
      border: "2px solid ".concat(theme.palette.background.paper),
      padding: '0 4px'
    }
  };
})(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_5__["default"]);

var ClientNom = function ClientNom(_ref) {
  _s();

  var value = _ref.value;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      client = _useState[0],
      setClient = _useState[1];

  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_1__["getCookie"])('token');

  var listerUnClient = function listerUnClient() {
    Object(_actions_clientActions__WEBPACK_IMPORTED_MODULE_2__["getClientById"])(value, token).then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        setClient(data);
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    listerUnClient();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, client.nom, " ", client.prenom, ' ', __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
    "aria-label": "res",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }
  }, __jsx(StyledBadge, {
    badgeContent: client.nbReserv,
    color: "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(_material_ui_icons_AssignmentInd__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 6
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
    "aria-label": "venu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }
  }, __jsx(StyledBadge, {
    badgeContent: client.nbVenu,
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 6
    }
  }))));
};

_s(ClientNom, "+nal9z9aTbELRqsFFzmitvrNN3s=");

_c = ClientNom;
/* harmony default export */ __webpack_exports__["default"] = (ClientNom);

var _c;

$RefreshReg$(_c, "ClientNom");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9DbGllbnROb20uanMiXSwibmFtZXMiOlsiU3R5bGVkQmFkZ2UiLCJ3aXRoU3R5bGVzIiwidGhlbWUiLCJiYWRnZSIsInJpZ2h0IiwidG9wIiwiYm9yZGVyIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsInBhZGRpbmciLCJCYWRnZSIsIkNsaWVudE5vbSIsInZhbHVlIiwidXNlU3RhdGUiLCJjbGllbnQiLCJzZXRDbGllbnQiLCJ0b2tlbiIsImdldENvb2tpZSIsImxpc3RlclVuQ2xpZW50IiwiZ2V0Q2xpZW50QnlJZCIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0Iiwibm9tIiwicHJlbm9tIiwibmJSZXNlcnYiLCJuYlZlbnUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQzFDQyxTQUFLLEVBQUU7QUFDTkMsV0FBSyxFQUFFLENBQUMsQ0FERjtBQUVOQyxTQUFHLEVBQUUsRUFGQztBQUdOQyxZQUFNLHNCQUFlSixLQUFLLENBQUNLLE9BQU4sQ0FBY0MsVUFBZCxDQUF5QkMsS0FBeEMsQ0FIQTtBQUlOQyxhQUFPLEVBQUU7QUFKSDtBQURtQyxHQUFaO0FBQUEsQ0FBRCxDQUFWLENBT2hCQywrREFQZ0IsQ0FBcEI7O0FBU0EsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxrQkFDSkMsc0RBQVEsQ0FBQyxFQUFELENBREo7QUFBQSxNQUN6QkMsTUFEeUI7QUFBQSxNQUNqQkMsU0FEaUI7O0FBR2hDLE1BQU1DLEtBQUssR0FBR0Msc0VBQVMsQ0FBQyxPQUFELENBQXZCOztBQUVBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUM1QkMsZ0ZBQWEsQ0FBQ1AsS0FBRCxFQUFRSSxLQUFSLENBQWIsQ0FBNEJJLElBQTVCLENBQWlDLFVBQUNDLElBQUQsRUFBVTtBQUMxQyxVQUFJQSxJQUFJLENBQUNDLEtBQVQsRUFBZ0I7QUFDZkMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQSxPQUZELE1BRU87QUFDTlAsaUJBQVMsQ0FBQ00sSUFBRCxDQUFUO0FBQ0E7QUFDRCxLQU5EO0FBT0EsR0FSRDs7QUFVQUkseURBQVMsQ0FBQyxZQUFNO0FBQ2ZQLGtCQUFjO0FBQ2QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLFNBQ0MsbUVBQ0VKLE1BQU0sQ0FBQ1ksR0FEVCxPQUNlWixNQUFNLENBQUNhLE1BRHRCLEVBQzhCLEdBRDlCLEVBRUMsTUFBQyw0REFBRDtBQUFZLGtCQUFXLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLFdBQUQ7QUFBYSxnQkFBWSxFQUFFYixNQUFNLENBQUNjLFFBQWxDO0FBQTRDLFNBQUssRUFBQyxXQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FERCxDQUZELEVBT0MsTUFBQyw0REFBRDtBQUFZLGtCQUFXLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLFdBQUQ7QUFBYSxnQkFBWSxFQUFFZCxNQUFNLENBQUNlLE1BQWxDO0FBQTBDLFNBQUssRUFBQyxTQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FERCxDQVBELENBREQ7QUFlQSxDQWxDRDs7R0FBTWxCLFM7O0tBQUFBLFM7QUFvQ1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL3Jlc2VydmF0aW9uLjNjNjM5MGY5OGQ2ZDc4NTk1ZmMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHsgZ2V0Q2xpZW50QnlJZCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY2xpZW50QWN0aW9ucyc7XHJcbmltcG9ydCBBc3NpZ25tZW50SW5kSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXNzaWdubWVudEluZCc7XHJcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBCYWRnZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CYWRnZSc7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ2hlY2tJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGVjayc7XHJcblxyXG5jb25zdCBTdHlsZWRCYWRnZSA9IHdpdGhTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdGJhZGdlOiB7XHJcblx0XHRyaWdodDogLTMsXHJcblx0XHR0b3A6IDEzLFxyXG5cdFx0Ym9yZGVyOiBgMnB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyfWAsXHJcblx0XHRwYWRkaW5nOiAnMCA0cHgnLFxyXG5cdH0sXHJcbn0pKShCYWRnZSk7XHJcblxyXG5jb25zdCBDbGllbnROb20gPSAoeyB2YWx1ZSB9KSA9PiB7XHJcblx0Y29uc3QgW2NsaWVudCwgc2V0Q2xpZW50XSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblxyXG5cdGNvbnN0IGxpc3RlclVuQ2xpZW50ID0gKCkgPT4ge1xyXG5cdFx0Z2V0Q2xpZW50QnlJZCh2YWx1ZSwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0Q2xpZW50KGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGlzdGVyVW5DbGllbnQoKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7Y2xpZW50Lm5vbX0ge2NsaWVudC5wcmVub219eycgJ31cclxuXHRcdFx0PEljb25CdXR0b24gYXJpYS1sYWJlbD0ncmVzJz5cclxuXHRcdFx0XHQ8U3R5bGVkQmFkZ2UgYmFkZ2VDb250ZW50PXtjbGllbnQubmJSZXNlcnZ9IGNvbG9yPSdzZWNvbmRhcnknPlxyXG5cdFx0XHRcdFx0PEFzc2lnbm1lbnRJbmRJY29uIC8+XHJcblx0XHRcdFx0PC9TdHlsZWRCYWRnZT5cclxuXHRcdFx0PC9JY29uQnV0dG9uPlxyXG5cdFx0XHQ8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPSd2ZW51Jz5cclxuXHRcdFx0XHQ8U3R5bGVkQmFkZ2UgYmFkZ2VDb250ZW50PXtjbGllbnQubmJWZW51fSBjb2xvcj0ncHJpbWFyeSc+XHJcblx0XHRcdFx0XHQ8Q2hlY2tJY29uIC8+XHJcblx0XHRcdFx0PC9TdHlsZWRCYWRnZT5cclxuXHRcdFx0PC9JY29uQnV0dG9uPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudE5vbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==