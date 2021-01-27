webpackHotUpdate_N_E("pages/admin/crud/divers/qr/[id]",{

/***/ "./pages/admin/crud/divers/qr/[id].js":
/*!********************************************!*\
  !*** ./pages/admin/crud/divers/qr/[id].js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var _components_admin_FormUpdateQR__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../components/admin/FormUpdateQR */ "./components/admin/FormUpdateQR.js");
/* harmony import */ var _components_auth_Admin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../components/auth/Admin */ "./components/auth/Admin.js");
/* harmony import */ var _components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../components/layout/AdminHeader */ "./components/layout/AdminHeader.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\admin\\crud\\divers\\qr\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();









var gestionPages = function gestionPages(_ref) {
  _s();

  var router = _ref.router;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      data = _useState[0],
      setData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = setData;
                _context.next = 3;
                return Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_4__["listeOneQR"])(router.query.id);

              case 3:
                _context.t1 = _context.sent;
                (0, _context.t0)(_context.t1);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref2.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_auth_Admin__WEBPACK_IMPORTED_MODULE_6__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Formulaire de modification d'une question/r\xE9ponse"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 6
        }, _this), data ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_admin_FormUpdateQR__WEBPACK_IMPORTED_MODULE_5__["default"], {
          preloadedValues: data
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 7
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Spinner"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, _this)
  }, void 0, false);
};

_s(gestionPages, "fQZRxy/+nAZ7NLS1X4dVhrlp8Go=");

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(gestionPages));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vY3J1ZC9kaXZlcnMvcXIvLmpzIl0sIm5hbWVzIjpbImdlc3Rpb25QYWdlcyIsInJvdXRlciIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJmZXRjaERhdGEiLCJsaXN0ZU9uZVFSIiwicXVlcnkiLCJpZCIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFBQSxrQkFDWkMsc0RBQVEsQ0FBQyxJQUFELENBREk7QUFBQSxNQUM3QkMsSUFENkI7QUFBQSxNQUN2QkMsT0FEdUI7O0FBR3BDQyx5REFBUyxDQUFDLFlBQU07QUFDZixRQUFNQyxTQUFTO0FBQUEsbU1BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUNqQkYsT0FEaUI7QUFBQTtBQUFBLHVCQUNIRyx1RUFBVSxDQUFDTixNQUFNLENBQUNPLEtBQVAsQ0FBYUMsRUFBZCxDQURQOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFUSCxTQUFTO0FBQUE7QUFBQTtBQUFBLE9BQWY7O0FBR0FBLGFBQVM7QUFDVCxHQUxRLEVBS04sRUFMTSxDQUFUO0FBT0Esc0JBQ0M7QUFBQSwyQkFDQyxxRUFBQyxzRUFBRDtBQUFBLDZCQUNDLHFFQUFDLDhEQUFEO0FBQUEsZ0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsRUFFRUgsSUFBSSxnQkFDSixxRUFBQyxzRUFBRDtBQUFjLHlCQUFlLEVBQUVBO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREksZ0JBR0oscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsbUJBREQ7QUFjQSxDQXhCRDs7R0FBTUgsWTs7QUEwQlNVLDZIQUFVLENBQUNWLFlBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9kaXZlcnMvcXIvW2lkXS5mMTg5MGQ3YTE4ODM0ZmI2YjQyMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbGlzdGVPbmVRUiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5pbXBvcnQgRm9ybVVwZGF0ZVFSIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW4vRm9ybVVwZGF0ZVFSJztcclxuaW1wb3J0IEFkbWluIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYXV0aC9BZG1pbic7XHJcbmltcG9ydCBBZG1pbkhlYWRlciBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2xheW91dC9BZG1pbkhlYWRlcic7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmNvbnN0IGdlc3Rpb25QYWdlcyA9ICh7IHJvdXRlciB9KSA9PiB7XHJcblx0Y29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRcdHNldERhdGEoYXdhaXQgbGlzdGVPbmVRUihyb3V0ZXIucXVlcnkuaWQpKTtcclxuXHRcdH07XHJcblx0XHRmZXRjaERhdGEoKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8QWRtaW5IZWFkZXI+XHJcblx0XHRcdFx0PEFkbWluPlxyXG5cdFx0XHRcdFx0PGgyPkZvcm11bGFpcmUgZGUgbW9kaWZpY2F0aW9uIGQndW5lIHF1ZXN0aW9uL3LDqXBvbnNlPC9oMj5cclxuXHRcdFx0XHRcdHtkYXRhID8gKFxyXG5cdFx0XHRcdFx0XHQ8Rm9ybVVwZGF0ZVFSIHByZWxvYWRlZFZhbHVlcz17ZGF0YX0gLz5cclxuXHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdDxTcGlubmVyIC8+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdDwvQWRtaW4+XHJcblx0XHRcdDwvQWRtaW5IZWFkZXI+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihnZXN0aW9uUGFnZXMpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9