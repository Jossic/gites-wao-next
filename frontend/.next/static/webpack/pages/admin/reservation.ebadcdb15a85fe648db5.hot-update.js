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
/* harmony import */ var _material_ui_icons_NotInterested__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/NotInterested */ "./node_modules/@material-ui/icons/NotInterested.js");
/* harmony import */ var _material_ui_icons_NotInterested__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NotInterested__WEBPACK_IMPORTED_MODULE_8__);
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
      lineNumber: 42,
      columnNumber: 4
    }
  }, __jsx(StyledBadge, {
    badgeContent: client.nbReserv,
    color: "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(_material_ui_icons_AssignmentInd__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 6
    }
  }))), nbVenu === 0 ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
    "aria-label": "venu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx(StyledBadge, {
    badgeContent: client.nbVenu,
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 6
    }
  }, __jsx(_material_ui_icons_NotInterested__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }))) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
    "aria-label": "venu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx(StyledBadge, {
    badgeContent: client.nbVenu,
    color: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 6
    }
  }, __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9DbGllbnROb20uanMiXSwibmFtZXMiOlsiU3R5bGVkQmFkZ2UiLCJ3aXRoU3R5bGVzIiwidGhlbWUiLCJiYWRnZSIsInJpZ2h0IiwidG9wIiwiYm9yZGVyIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsInBhZGRpbmciLCJCYWRnZSIsIkNsaWVudE5vbSIsInZhbHVlIiwidXNlU3RhdGUiLCJjbGllbnQiLCJzZXRDbGllbnQiLCJ0b2tlbiIsImdldENvb2tpZSIsImxpc3RlclVuQ2xpZW50IiwiZ2V0Q2xpZW50QnlJZCIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0Iiwibm9tIiwicHJlbm9tIiwibmJSZXNlcnYiLCJuYlZlbnUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUMxQ0MsU0FBSyxFQUFFO0FBQ05DLFdBQUssRUFBRSxDQUFDLENBREY7QUFFTkMsU0FBRyxFQUFFLEVBRkM7QUFHTkMsWUFBTSxzQkFBZUosS0FBSyxDQUFDSyxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDLEtBQXhDLENBSEE7QUFJTkMsYUFBTyxFQUFFO0FBSkg7QUFEbUMsR0FBWjtBQUFBLENBQUQsQ0FBVixDQU9oQkMsK0RBUGdCLENBQXBCOztBQVNBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQUEsa0JBQ0pDLHNEQUFRLENBQUMsRUFBRCxDQURKO0FBQUEsTUFDekJDLE1BRHlCO0FBQUEsTUFDakJDLFNBRGlCOztBQUdoQyxNQUFNQyxLQUFLLEdBQUdDLHNFQUFTLENBQUMsT0FBRCxDQUF2Qjs7QUFFQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDNUJDLGdGQUFhLENBQUNQLEtBQUQsRUFBUUksS0FBUixDQUFiLENBQTRCSSxJQUE1QixDQUFpQyxVQUFDQyxJQUFELEVBQVU7QUFDMUMsVUFBSUEsSUFBSSxDQUFDQyxLQUFULEVBQWdCO0FBQ2ZDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0EsT0FGRCxNQUVPO0FBQ05QLGlCQUFTLENBQUNNLElBQUQsQ0FBVDtBQUNBO0FBQ0QsS0FORDtBQU9BLEdBUkQ7O0FBVUFJLHlEQUFTLENBQUMsWUFBTTtBQUNmUCxrQkFBYztBQUNkLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxTQUNDLG1FQUNFSixNQUFNLENBQUNZLEdBRFQsT0FDZVosTUFBTSxDQUFDYSxNQUR0QixFQUM4QixHQUQ5QixFQUVDLE1BQUMsNERBQUQ7QUFBWSxrQkFBVyxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxXQUFEO0FBQWEsZ0JBQVksRUFBRWIsTUFBTSxDQUFDYyxRQUFsQztBQUE0QyxTQUFLLEVBQUMsV0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREQsQ0FGRCxFQU9FQyxNQUFNLEtBQUssQ0FBWCxHQUNBLE1BQUMsNERBQUQ7QUFBWSxrQkFBVyxNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxXQUFEO0FBQWEsZ0JBQVksRUFBRWYsTUFBTSxDQUFDZSxNQUFsQztBQUEwQyxTQUFLLEVBQUMsU0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREQsQ0FEQSxHQU9BLE1BQUMsNERBQUQ7QUFBWSxrQkFBVyxNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxXQUFEO0FBQWEsZ0JBQVksRUFBRWYsTUFBTSxDQUFDZSxNQUFsQztBQUEwQyxTQUFLLEVBQUMsU0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREQsQ0FkRixDQUREO0FBdUJBLENBMUNEOztHQUFNbEIsUzs7S0FBQUEsUztBQTRDU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24uZWJhZGNkYjE1YTg1ZmU2NDhkYjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRDbGllbnRCeUlkIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jbGllbnRBY3Rpb25zJztcclxuaW1wb3J0IEFzc2lnbm1lbnRJbmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Bc3NpZ25tZW50SW5kJztcclxuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEJhZGdlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhZGdlJztcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDaGVja0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrJztcclxuaW1wb3J0IE5vdEludGVyZXN0ZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ob3RJbnRlcmVzdGVkJztcclxuXHJcbmNvbnN0IFN0eWxlZEJhZGdlID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0YmFkZ2U6IHtcclxuXHRcdHJpZ2h0OiAtMyxcclxuXHRcdHRvcDogMTMsXHJcblx0XHRib3JkZXI6IGAycHggc29saWQgJHt0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXJ9YCxcclxuXHRcdHBhZGRpbmc6ICcwIDRweCcsXHJcblx0fSxcclxufSkpKEJhZGdlKTtcclxuXHJcbmNvbnN0IENsaWVudE5vbSA9ICh7IHZhbHVlIH0pID0+IHtcclxuXHRjb25zdCBbY2xpZW50LCBzZXRDbGllbnRdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHJcblx0Y29uc3QgbGlzdGVyVW5DbGllbnQgPSAoKSA9PiB7XHJcblx0XHRnZXRDbGllbnRCeUlkKHZhbHVlLCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRDbGllbnQoZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsaXN0ZXJVbkNsaWVudCgpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHtjbGllbnQubm9tfSB7Y2xpZW50LnByZW5vbX17JyAnfVxyXG5cdFx0XHQ8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPSdyZXMnPlxyXG5cdFx0XHRcdDxTdHlsZWRCYWRnZSBiYWRnZUNvbnRlbnQ9e2NsaWVudC5uYlJlc2Vydn0gY29sb3I9J3NlY29uZGFyeSc+XHJcblx0XHRcdFx0XHQ8QXNzaWdubWVudEluZEljb24gLz5cclxuXHRcdFx0XHQ8L1N0eWxlZEJhZGdlPlxyXG5cdFx0XHQ8L0ljb25CdXR0b24+XHJcblx0XHRcdHtuYlZlbnUgPT09IDAgPyAoXHJcblx0XHRcdFx0PEljb25CdXR0b24gYXJpYS1sYWJlbD0ndmVudSc+XHJcblx0XHRcdFx0XHQ8U3R5bGVkQmFkZ2UgYmFkZ2VDb250ZW50PXtjbGllbnQubmJWZW51fSBjb2xvcj0ncHJpbWFyeSc+XHJcblx0XHRcdFx0XHRcdDxOb3RJbnRlcmVzdGVkSWNvbiAvPlxyXG5cdFx0XHRcdFx0PC9TdHlsZWRCYWRnZT5cclxuXHRcdFx0XHQ8L0ljb25CdXR0b24+XHJcblx0XHRcdCkgOiAoXHJcblx0XHRcdFx0PEljb25CdXR0b24gYXJpYS1sYWJlbD0ndmVudSc+XHJcblx0XHRcdFx0XHQ8U3R5bGVkQmFkZ2UgYmFkZ2VDb250ZW50PXtjbGllbnQubmJWZW51fSBjb2xvcj0ncHJpbWFyeSc+XHJcblx0XHRcdFx0XHRcdDxDaGVja0ljb24gLz5cclxuXHRcdFx0XHRcdDwvU3R5bGVkQmFkZ2U+XHJcblx0XHRcdFx0PC9JY29uQnV0dG9uPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudE5vbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==