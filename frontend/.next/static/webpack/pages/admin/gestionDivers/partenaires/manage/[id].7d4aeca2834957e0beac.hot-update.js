webpackHotUpdate_N_E("pages/admin/gestionDivers/partenaires/manage/[id]",{

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
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import ListPartenairesCards from '../../../../../components/admin/lists/ListPartenairesCards';









var GestionPartenairesCards = function GestionPartenairesCards(_ref) {
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
  // useEffect(() => {
  // 	initId();
  // }, []);
  //Récupérer la catégorie
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vZ2VzdGlvbkRpdmVycy9wYXJ0ZW5haXJlcy9tYW5hZ2UvLmpzIl0sIm5hbWVzIjpbIkdlc3Rpb25QYXJ0ZW5haXJlc0NhcmRzIiwicm91dGVyIiwicXVlcnkiLCJpZCIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixPQUFnQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUMvQztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUNDLG1FQUNDLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREQsRUFFQyxNQUFDLGdEQUFEO0FBQ0MsUUFBSSwwQ0FBbUNBLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhQyxFQUFoRCxpQkFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUM7QUFBRyxhQUFTLEVBQUMsMkNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFGRCxDQUZELEVBU0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRELENBREQsQ0FERCxDQUREO0FBbUJBLENBeENEOztLQUFNSCx1QjtBQTBDUyxxRUFBQUksOERBQVUsQ0FBQ0osdUJBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vZ2VzdGlvbkRpdmVycy9wYXJ0ZW5haXJlcy9tYW5hZ2UvW2lkXS43ZDRhZWNhMjgzNDk1N2UwYmVhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkbWluSGVhZGVyIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0FkbWluSGVhZGVyJztcclxuLy8gaW1wb3J0IExpc3RQYXJ0ZW5haXJlc0NhcmRzIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW4vbGlzdHMvTGlzdFBhcnRlbmFpcmVzQ2FyZHMnO1xyXG5pbXBvcnQgQWRtaW4gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9hdXRoL0FkbWluJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGxpc3RlUGFydGVuYWlyZUJ5SWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9hY3Rpb25zL3BhcnRlbmFpcmVzQWN0aW9ucyc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5cclxuY29uc3QgR2VzdGlvblBhcnRlbmFpcmVzQ2FyZHMgPSAoeyByb3V0ZXIgfSkgPT4ge1xyXG5cdC8vIGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cdC8vIGNvbnN0IFtpZGVudCwgc2V0SWRlbnRdID0gdXNlU3RhdGUoKTtcclxuXHJcblx0Ly8gY29uc3QgaW5pdElkID0gKCkgPT4ge1xyXG5cdC8vIFx0Y29uc29sZS5sb2coJ3JvdXRlci5pZCcsIHJvdXRlci5xdWVyeS5pZCk7XHJcblx0Ly8gXHRpZiAocm91dGVyLnF1ZXJ5LmlkKSB7XHJcblx0Ly8gXHRcdGxpc3RlUGFydGVuYWlyZUJ5SWQocm91dGVyLnF1ZXJ5LmlkLCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdC8vIFx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0Ly8gXHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuXHQvLyBcdFx0XHR9IGVsc2Uge1xyXG5cdC8vIFx0XHRcdFx0c2V0SWRlbnQoeyAuLi5pZGVudCwgZGF0YSB9KTtcclxuXHQvLyBcdFx0XHR9XHJcblx0Ly8gXHRcdH0pO1xyXG5cdC8vIFx0fVxyXG5cdC8vIH07XHJcblxyXG5cdC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0Ly8gXHRpbml0SWQoKTtcclxuXHQvLyB9LCBbXSk7XHJcblx0Ly9Sw6ljdXDDqXJlciBsYSBjYXTDqWdvcmllXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxBZG1pbkhlYWRlcj5cclxuXHRcdFx0XHQ8QWRtaW4+XHJcblx0XHRcdFx0XHQ8aDI+R2VzdGlvbiBkZXMgcGFydGVuYWlyZXM8L2gyPlxyXG5cdFx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdFx0aHJlZj17YC9hZG1pbi9jcnVkL2RpdmVycy9wYXJ0ZW5haXJlLyR7cm91dGVyLnF1ZXJ5LmlkfS9jYXJkL2NyZWF0ZWB9PlxyXG5cdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9J2J0biBidG4taW5mbyBidG4tbGcgbWItMyBtdC0zIGZsb2F0LXJpZ2h0Jz5cclxuXHRcdFx0XHRcdFx0XHRDcsOpZXIgdW4gcGFydGVuYWlyZVxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblxyXG5cdFx0XHRcdFx0PGhyIC8+XHJcblxyXG5cdFx0XHRcdFx0ey8qIDxMaXN0UGFydGVuYWlyZXNDYXJkcyAvPiAqL31cclxuXHRcdFx0XHQ8L0FkbWluPlxyXG5cdFx0XHQ8L0FkbWluSGVhZGVyPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoR2VzdGlvblBhcnRlbmFpcmVzQ2FyZHMpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9