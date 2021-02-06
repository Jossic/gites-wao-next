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
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_6__["getCookie"])('token');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      ident = _useState[0],
      setIdent = _useState[1];

  var initId = function initId() {
    console.log('router.id', router.query.id);

    if (router.query.id) {
      Object(_actions_partenairesActions__WEBPACK_IMPORTED_MODULE_5__["listePartenaireById"])(router.query.id, token).then(function (data) {
        console.log('data vaut =>', data);

        if (data.error) {
          console.log(data.error);
        } else {
          setIdent({
            ident: data._id
          });
        }
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    initId();
  }, []); //Récupérer la catégorie

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }
  }, __jsx(_components_auth_Admin__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 6
    }
  }, "Gestion des partenaires"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin/crud/divers/partenaire/".concat(ident, "/card/create"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 6
    }
  }, __jsx("a", {
    className: "btn btn-info btn-lg mb-3 mt-3 float-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, "Cr\xE9er un partenaire")), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 6
    }
  }))));
};

_s(GestionPartenairesCards, "eP9TBlM6bQeS3rwz7vmIMhumgl4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vZ2VzdGlvbkRpdmVycy9wYXJ0ZW5haXJlcy9tYW5hZ2UvLmpzIl0sIm5hbWVzIjpbIkdlc3Rpb25QYXJ0ZW5haXJlc0NhcmRzIiwicm91dGVyIiwidG9rZW4iLCJnZXRDb29raWUiLCJ1c2VTdGF0ZSIsImlkZW50Iiwic2V0SWRlbnQiLCJpbml0SWQiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJpZCIsImxpc3RlUGFydGVuYWlyZUJ5SWQiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiX2lkIiwidXNlRWZmZWN0Iiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUMvQyxNQUFNQyxLQUFLLEdBQUdDLHNFQUFTLENBQUMsT0FBRCxDQUF2Qjs7QUFEK0Msa0JBRXJCQyxzREFBUSxFQUZhO0FBQUEsTUFFeENDLEtBRndDO0FBQUEsTUFFakNDLFFBRmlDOztBQUkvQyxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ3BCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCUixNQUFNLENBQUNTLEtBQVAsQ0FBYUMsRUFBdEM7O0FBQ0EsUUFBSVYsTUFBTSxDQUFDUyxLQUFQLENBQWFDLEVBQWpCLEVBQXFCO0FBQ3BCQyw2RkFBbUIsQ0FBQ1gsTUFBTSxDQUFDUyxLQUFQLENBQWFDLEVBQWQsRUFBa0JULEtBQWxCLENBQW5CLENBQTRDVyxJQUE1QyxDQUFpRCxVQUFDQyxJQUFELEVBQVU7QUFDMUROLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJLLElBQTVCOztBQUNBLFlBQUlBLElBQUksQ0FBQ0MsS0FBVCxFQUFnQjtBQUNmUCxpQkFBTyxDQUFDQyxHQUFSLENBQVlLLElBQUksQ0FBQ0MsS0FBakI7QUFDQSxTQUZELE1BRU87QUFDTlQsa0JBQVEsQ0FBQztBQUFFRCxpQkFBSyxFQUFFUyxJQUFJLENBQUNFO0FBQWQsV0FBRCxDQUFSO0FBQ0E7QUFDRCxPQVBEO0FBUUE7QUFDRCxHQVpEOztBQWNBQyx5REFBUyxDQUFDLFlBQU07QUFDZlYsVUFBTTtBQUNOLEdBRlEsRUFFTixFQUZNLENBQVQsQ0FsQitDLENBcUIvQzs7QUFDQSxTQUNDLG1FQUNDLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREQsRUFFQyxNQUFDLGdEQUFEO0FBQ0MsUUFBSSwwQ0FBbUNGLEtBQW5DLGlCQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFQztBQUFHLGFBQVMsRUFBQywyQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUZELENBRkQsRUFTQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEQsQ0FERCxDQURELENBREQ7QUFtQkEsQ0F6Q0Q7O0dBQU1MLHVCOztLQUFBQSx1QjtBQTJDUyxxRUFBQWtCLDhEQUFVLENBQUNsQix1QkFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9nZXN0aW9uRGl2ZXJzL3BhcnRlbmFpcmVzL21hbmFnZS9baWRdLjM3NmZlZTZmOGZiNzQwOWVjZGRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRtaW5IZWFkZXIgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvQWRtaW5IZWFkZXInO1xyXG4vLyBpbXBvcnQgTGlzdFBhcnRlbmFpcmVzQ2FyZHMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0UGFydGVuYWlyZXNDYXJkcyc7XHJcbmltcG9ydCBBZG1pbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2F1dGgvQWRtaW4nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbGlzdGVQYXJ0ZW5haXJlQnlJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2FjdGlvbnMvcGFydGVuYWlyZXNBY3Rpb25zJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcblxyXG5jb25zdCBHZXN0aW9uUGFydGVuYWlyZXNDYXJkcyA9ICh7IHJvdXRlciB9KSA9PiB7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblx0Y29uc3QgW2lkZW50LCBzZXRJZGVudF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuXHRjb25zdCBpbml0SWQgPSAoKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZygncm91dGVyLmlkJywgcm91dGVyLnF1ZXJ5LmlkKTtcclxuXHRcdGlmIChyb3V0ZXIucXVlcnkuaWQpIHtcclxuXHRcdFx0bGlzdGVQYXJ0ZW5haXJlQnlJZChyb3V0ZXIucXVlcnkuaWQsIHRva2VuKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2RhdGEgdmF1dCA9PicsIGRhdGEpO1xyXG5cdFx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0c2V0SWRlbnQoeyBpZGVudDogZGF0YS5faWQgfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aW5pdElkKCk7XHJcblx0fSwgW10pO1xyXG5cdC8vUsOpY3Vww6lyZXIgbGEgY2F0w6lnb3JpZVxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8QWRtaW5IZWFkZXI+XHJcblx0XHRcdFx0PEFkbWluPlxyXG5cdFx0XHRcdFx0PGgyPkdlc3Rpb24gZGVzIHBhcnRlbmFpcmVzPC9oMj5cclxuXHRcdFx0XHRcdDxMaW5rXHJcblx0XHRcdFx0XHRcdGhyZWY9e2AvYWRtaW4vY3J1ZC9kaXZlcnMvcGFydGVuYWlyZS8ke2lkZW50fS9jYXJkL2NyZWF0ZWB9PlxyXG5cdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9J2J0biBidG4taW5mbyBidG4tbGcgbWItMyBtdC0zIGZsb2F0LXJpZ2h0Jz5cclxuXHRcdFx0XHRcdFx0XHRDcsOpZXIgdW4gcGFydGVuYWlyZVxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblxyXG5cdFx0XHRcdFx0PGhyIC8+XHJcblxyXG5cdFx0XHRcdFx0ey8qIDxMaXN0UGFydGVuYWlyZXNDYXJkcyAvPiAqL31cclxuXHRcdFx0XHQ8L0FkbWluPlxyXG5cdFx0XHQ8L0FkbWluSGVhZGVyPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoR2VzdGlvblBhcnRlbmFpcmVzQ2FyZHMpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9