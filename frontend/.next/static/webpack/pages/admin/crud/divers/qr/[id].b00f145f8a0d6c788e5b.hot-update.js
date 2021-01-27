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

  var token = getCookie('token');
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = setData;
                _context.next = 3;
                return Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_4__["listeOneQR"])(router.query.id, token);

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
          lineNumber: 24,
          columnNumber: 6
        }, _this), data ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_admin_FormUpdateQR__WEBPACK_IMPORTED_MODULE_5__["default"], {
          preloadedValues: data
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 7
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Spinner"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vY3J1ZC9kaXZlcnMvcXIvLmpzIl0sIm5hbWVzIjpbImdlc3Rpb25QYWdlcyIsInJvdXRlciIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ0b2tlbiIsImdldENvb2tpZSIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsImxpc3RlT25lUVIiLCJxdWVyeSIsImlkIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWdCO0FBQUE7O0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUFBLGtCQUNaQyxzREFBUSxDQUFDLElBQUQsQ0FESTtBQUFBLE1BQzdCQyxJQUQ2QjtBQUFBLE1BQ3ZCQyxPQUR1Qjs7QUFFcEMsTUFBTUMsS0FBSyxHQUFHQyxTQUFTLENBQUMsT0FBRCxDQUF2QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZixRQUFNQyxTQUFTO0FBQUEsbU1BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUNqQkosT0FEaUI7QUFBQTtBQUFBLHVCQUNISyx1RUFBVSxDQUFDUixNQUFNLENBQUNTLEtBQVAsQ0FBYUMsRUFBZCxFQUFrQk4sS0FBbEIsQ0FEUDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVEcsU0FBUztBQUFBO0FBQUE7QUFBQSxPQUFmOztBQUdBQSxhQUFTO0FBQ1QsR0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU9BLHNCQUNDO0FBQUEsMkJBQ0MscUVBQUMsc0VBQUQ7QUFBQSw2QkFDQyxxRUFBQyw4REFBRDtBQUFBLGdDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELEVBRUVMLElBQUksZ0JBQ0oscUVBQUMsc0VBQUQ7QUFBYyx5QkFBZSxFQUFFQTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURJLGdCQUdKLHFFQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELG1CQUREO0FBY0EsQ0F6QkQ7O0dBQU1ILFk7O0FBMkJTWSw2SEFBVSxDQUFDWixZQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvZGl2ZXJzL3FyL1tpZF0uYjAwZjE0NWY4YTBkNmM3ODhlNWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGxpc3RlT25lUVIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IEZvcm1VcGRhdGVRUiBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2FkbWluL0Zvcm1VcGRhdGVRUic7XHJcbmltcG9ydCBBZG1pbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2F1dGgvQWRtaW4nO1xyXG5pbXBvcnQgQWRtaW5IZWFkZXIgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvQWRtaW5IZWFkZXInO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5jb25zdCBnZXN0aW9uUGFnZXMgPSAoeyByb3V0ZXIgfSkgPT4ge1xyXG5cdGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRzZXREYXRhKGF3YWl0IGxpc3RlT25lUVIocm91dGVyLnF1ZXJ5LmlkLCB0b2tlbikpO1xyXG5cdFx0fTtcclxuXHRcdGZldGNoRGF0YSgpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxBZG1pbkhlYWRlcj5cclxuXHRcdFx0XHQ8QWRtaW4+XHJcblx0XHRcdFx0XHQ8aDI+Rm9ybXVsYWlyZSBkZSBtb2RpZmljYXRpb24gZCd1bmUgcXVlc3Rpb24vcsOpcG9uc2U8L2gyPlxyXG5cdFx0XHRcdFx0e2RhdGEgPyAoXHJcblx0XHRcdFx0XHRcdDxGb3JtVXBkYXRlUVIgcHJlbG9hZGVkVmFsdWVzPXtkYXRhfSAvPlxyXG5cdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0PFNwaW5uZXIgLz5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0PC9BZG1pbj5cclxuXHRcdFx0PC9BZG1pbkhlYWRlcj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGdlc3Rpb25QYWdlcyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=