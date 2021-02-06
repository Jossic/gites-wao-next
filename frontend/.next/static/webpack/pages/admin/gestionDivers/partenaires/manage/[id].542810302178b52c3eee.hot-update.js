webpackHotUpdate_N_E("pages/admin/gestionDivers/partenaires/manage/[id]",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

/***/ "./pages/admin/gestionDivers/partenaires/manage/[id].js":
/*!**************************************************************!*\
  !*** ./pages/admin/gestionDivers/partenaires/manage/[id].js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/layout/AdminHeader */ "./components/layout/AdminHeader.js");
/* harmony import */ var _components_auth_Admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/auth/Admin */ "./components/auth/Admin.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_partenairesActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../actions/partenairesActions */ "./actions/partenairesActions.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../actions/authActions */ "./actions/authActions.js");
var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\admin\\gestionDivers\\partenaires\\manage\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import ListPartenairesCards from '../../../../../components/admin/lists/ListPartenairesCards';









var GestionPartenairesCards = function GestionPartenairesCards(_ref) {
  _s();

  var router = _ref.router;
  // const token = getCookie('token');
  // const [ident, setIdent] = useState();
  // const initId = () => {
  // 	console.log('router.id', router.query.id);
  // 	if (router.query.id) {
  // 		listePartenaireById(router.query.id, token).then((data) => {
  // 			if (data.error) {
  // 				console.log(data.error);
  // 			} else {
  // 				setIdent({ ...ident, data });
  // 			}
  // 		});
  // 	}
  // };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    initId();
  }, []); //Récupérer la catégorie

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }
  }, __jsx(_components_auth_Admin__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 6
    }
  }, "Gestion des partenaires"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin/crud/divers/partenaire/".concat(router.query.id, "/card/create"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 6
    }
  }, __jsx("a", {
    className: "btn btn-info btn-lg mb-3 mt-3 float-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, "Cr\xE9er un partenaire")), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 6
    }
  }))));
};

_s(GestionPartenairesCards, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = GestionPartenairesCards;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(GestionPartenairesCards));

var _c, _c2;

$RefreshReg$(_c, "GestionPartenairesCards");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vZ2VzdGlvbkRpdmVycy9wYXJ0ZW5haXJlcy9tYW5hZ2UvLmpzIl0sIm5hbWVzIjpbIkdlc3Rpb25QYXJ0ZW5haXJlc0NhcmRzIiwicm91dGVyIiwidXNlRWZmZWN0IiwiaW5pdElkIiwicXVlcnkiLCJpZCIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsT0FBZ0I7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDL0M7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZkMsVUFBTTtBQUNOLEdBRlEsRUFFTixFQUZNLENBQVQsQ0FqQitDLENBb0IvQzs7QUFDQSxTQUNDLG1FQUNDLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREQsRUFFQyxNQUFDLGdEQUFEO0FBQ0MsUUFBSSwwQ0FBbUNGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxFQUFoRCxpQkFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUM7QUFBRyxhQUFTLEVBQUMsMkNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFGRCxDQUZELEVBU0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRELENBREQsQ0FERCxDQUREO0FBbUJBLENBeENEOztHQUFNTCx1Qjs7S0FBQUEsdUI7QUEwQ1MscUVBQUFNLDhEQUFVLENBQUNOLHVCQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2dlc3Rpb25EaXZlcnMvcGFydGVuYWlyZXMvbWFuYWdlL1tpZF0uNTQyODEwMzAyMTc4YjUyYzNlZWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZG1pbkhlYWRlciBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2xheW91dC9BZG1pbkhlYWRlcic7XHJcbi8vIGltcG9ydCBMaXN0UGFydGVuYWlyZXNDYXJkcyBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2FkbWluL2xpc3RzL0xpc3RQYXJ0ZW5haXJlc0NhcmRzJztcclxuaW1wb3J0IEFkbWluIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYXV0aC9BZG1pbic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBsaXN0ZVBhcnRlbmFpcmVCeUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vYWN0aW9ucy9wYXJ0ZW5haXJlc0FjdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuXHJcbmNvbnN0IEdlc3Rpb25QYXJ0ZW5haXJlc0NhcmRzID0gKHsgcm91dGVyIH0pID0+IHtcclxuXHQvLyBjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHQvLyBjb25zdCBbaWRlbnQsIHNldElkZW50XSA9IHVzZVN0YXRlKCk7XHJcblxyXG5cdC8vIGNvbnN0IGluaXRJZCA9ICgpID0+IHtcclxuXHQvLyBcdGNvbnNvbGUubG9nKCdyb3V0ZXIuaWQnLCByb3V0ZXIucXVlcnkuaWQpO1xyXG5cdC8vIFx0aWYgKHJvdXRlci5xdWVyeS5pZCkge1xyXG5cdC8vIFx0XHRsaXN0ZVBhcnRlbmFpcmVCeUlkKHJvdXRlci5xdWVyeS5pZCwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuXHQvLyBcdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdC8vIFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcblx0Ly8gXHRcdFx0fSBlbHNlIHtcclxuXHQvLyBcdFx0XHRcdHNldElkZW50KHsgLi4uaWRlbnQsIGRhdGEgfSk7XHJcblx0Ly8gXHRcdFx0fVxyXG5cdC8vIFx0XHR9KTtcclxuXHQvLyBcdH1cclxuXHQvLyB9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aW5pdElkKCk7XHJcblx0fSwgW10pO1xyXG5cdC8vUsOpY3Vww6lyZXIgbGEgY2F0w6lnb3JpZVxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8QWRtaW5IZWFkZXI+XHJcblx0XHRcdFx0PEFkbWluPlxyXG5cdFx0XHRcdFx0PGgyPkdlc3Rpb24gZGVzIHBhcnRlbmFpcmVzPC9oMj5cclxuXHRcdFx0XHRcdDxMaW5rXHJcblx0XHRcdFx0XHRcdGhyZWY9e2AvYWRtaW4vY3J1ZC9kaXZlcnMvcGFydGVuYWlyZS8ke3JvdXRlci5xdWVyeS5pZH0vY2FyZC9jcmVhdGVgfT5cclxuXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPSdidG4gYnRuLWluZm8gYnRuLWxnIG1iLTMgbXQtMyBmbG9hdC1yaWdodCc+XHJcblx0XHRcdFx0XHRcdFx0Q3LDqWVyIHVuIHBhcnRlbmFpcmVcclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cclxuXHRcdFx0XHRcdDxociAvPlxyXG5cclxuXHRcdFx0XHRcdHsvKiA8TGlzdFBhcnRlbmFpcmVzQ2FyZHMgLz4gKi99XHJcblx0XHRcdFx0PC9BZG1pbj5cclxuXHRcdFx0PC9BZG1pbkhlYWRlcj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEdlc3Rpb25QYXJ0ZW5haXJlc0NhcmRzKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==