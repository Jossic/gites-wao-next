webpackHotUpdate_N_E("pages/admin/gestionDivers/partenaires/manage/[id]",{

/***/ "./pages/admin/gestionDivers/partenaires/manage/[id].js":
/*!**************************************************************!*\
  !*** ./pages/admin/gestionDivers/partenaires/manage/[id].js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/layout/AdminHeader */ "./components/layout/AdminHeader.js");
/* harmony import */ var _components_auth_Admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../components/auth/Admin */ "./components/auth/Admin.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_partenairesActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../actions/partenairesActions */ "./actions/partenairesActions.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../actions/authActions */ "./actions/authActions.js");


var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\admin\\gestionDivers\\partenaires\\manage\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // import ListPartenairesCards from '../../../../../components/admin/lists/ListPartenairesCards';









var GestionPartenairesCards = function GestionPartenairesCards(_ref) {
  _s();

  var router = _ref.router;
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_7__["getCookie"])('token');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      ident = _useState[0],
      setIdent = _useState[1];

  var initId = function initId() {
    console.log('router.id', router.query.id);

    if (router.query.id) {
      Object(_actions_partenairesActions__WEBPACK_IMPORTED_MODULE_6__["listePartenaireById"])(router.query.id, token).then(function (data) {
        if (data.error) {
          console.log(data.error);
        } else {
          setIdent(_objectSpread(_objectSpread({}, ident), {}, {
            data: data
          }));
        }
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    initId();
  }, []); //Récupérer la catégorie

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }
  }, __jsx(_components_auth_Admin__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
  }, "Gestion des partenaires"), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 6
    }
  }))));
};

_s(GestionPartenairesCards, "eP9TBlM6bQeS3rwz7vmIMhumgl4=");

_c = GestionPartenairesCards;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(GestionPartenairesCards));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vZ2VzdGlvbkRpdmVycy9wYXJ0ZW5haXJlcy9tYW5hZ2UvLmpzIl0sIm5hbWVzIjpbIkdlc3Rpb25QYXJ0ZW5haXJlc0NhcmRzIiwicm91dGVyIiwidG9rZW4iLCJnZXRDb29raWUiLCJ1c2VTdGF0ZSIsImlkZW50Iiwic2V0SWRlbnQiLCJpbml0SWQiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJpZCIsImxpc3RlUGFydGVuYWlyZUJ5SWQiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwidXNlRWZmZWN0Iiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLE9BQWdCO0FBQUE7O0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBQy9DLE1BQU1DLEtBQUssR0FBR0Msc0VBQVMsQ0FBQyxPQUFELENBQXZCOztBQUQrQyxrQkFFckJDLHNEQUFRLEVBRmE7QUFBQSxNQUV4Q0MsS0FGd0M7QUFBQSxNQUVqQ0MsUUFGaUM7O0FBSS9DLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDcEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJSLE1BQU0sQ0FBQ1MsS0FBUCxDQUFhQyxFQUF0Qzs7QUFDQSxRQUFJVixNQUFNLENBQUNTLEtBQVAsQ0FBYUMsRUFBakIsRUFBcUI7QUFDcEJDLDZGQUFtQixDQUFDWCxNQUFNLENBQUNTLEtBQVAsQ0FBYUMsRUFBZCxFQUFrQlQsS0FBbEIsQ0FBbkIsQ0FBNENXLElBQTVDLENBQWlELFVBQUNDLElBQUQsRUFBVTtBQUMxRCxZQUFJQSxJQUFJLENBQUNDLEtBQVQsRUFBZ0I7QUFDZlAsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZSyxJQUFJLENBQUNDLEtBQWpCO0FBQ0EsU0FGRCxNQUVPO0FBQ05ULGtCQUFRLGlDQUFNRCxLQUFOO0FBQWFTLGdCQUFJLEVBQUpBO0FBQWIsYUFBUjtBQUNBO0FBQ0QsT0FORDtBQU9BO0FBQ0QsR0FYRDs7QUFhQUUseURBQVMsQ0FBQyxZQUFNO0FBQ2ZULFVBQU07QUFDTixHQUZRLEVBRU4sRUFGTSxDQUFULENBakIrQyxDQW9CL0M7O0FBQ0EsU0FDQyxtRUFDQyxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURELEVBU0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRELENBREQsQ0FERCxDQUREO0FBbUJBLENBeENEOztHQUFNUCx1Qjs7S0FBQUEsdUI7QUEwQ1MscUVBQUFpQiw4REFBVSxDQUFDakIsdUJBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vZ2VzdGlvbkRpdmVycy9wYXJ0ZW5haXJlcy9tYW5hZ2UvW2lkXS5hMDc3MDVhYTVhZWEzYTMxZGFhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkbWluSGVhZGVyIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0FkbWluSGVhZGVyJztcclxuLy8gaW1wb3J0IExpc3RQYXJ0ZW5haXJlc0NhcmRzIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW4vbGlzdHMvTGlzdFBhcnRlbmFpcmVzQ2FyZHMnO1xyXG5pbXBvcnQgQWRtaW4gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9hdXRoL0FkbWluJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGxpc3RlUGFydGVuYWlyZUJ5SWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9hY3Rpb25zL3BhcnRlbmFpcmVzQWN0aW9ucyc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5cclxuY29uc3QgR2VzdGlvblBhcnRlbmFpcmVzQ2FyZHMgPSAoeyByb3V0ZXIgfSkgPT4ge1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cdGNvbnN0IFtpZGVudCwgc2V0SWRlbnRdID0gdXNlU3RhdGUoKTtcclxuXHJcblx0Y29uc3QgaW5pdElkID0gKCkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coJ3JvdXRlci5pZCcsIHJvdXRlci5xdWVyeS5pZCk7XHJcblx0XHRpZiAocm91dGVyLnF1ZXJ5LmlkKSB7XHJcblx0XHRcdGxpc3RlUGFydGVuYWlyZUJ5SWQocm91dGVyLnF1ZXJ5LmlkLCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0c2V0SWRlbnQoeyAuLi5pZGVudCwgZGF0YSB9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpbml0SWQoKTtcclxuXHR9LCBbXSk7XHJcblx0Ly9Sw6ljdXDDqXJlciBsYSBjYXTDqWdvcmllXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxBZG1pbkhlYWRlcj5cclxuXHRcdFx0XHQ8QWRtaW4+XHJcblx0XHRcdFx0XHQ8aDI+R2VzdGlvbiBkZXMgcGFydGVuYWlyZXM8L2gyPlxyXG5cdFx0XHRcdFx0ey8qIDxMaW5rXHJcblx0XHRcdFx0XHRcdGhyZWY9e2AvYWRtaW4vY3J1ZC9kaXZlcnMvcGFydGVuYWlyZS8ke2lkfS9jYXJkL2NyZWF0ZWB9PlxyXG5cdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9J2J0biBidG4taW5mbyBidG4tbGcgbWItMyBtdC0zIGZsb2F0LXJpZ2h0Jz5cclxuXHRcdFx0XHRcdFx0XHRDcsOpZXIgdW4gcGFydGVuYWlyZVxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+ICovfVxyXG5cclxuXHRcdFx0XHRcdDxociAvPlxyXG5cclxuXHRcdFx0XHRcdHsvKiA8TGlzdFBhcnRlbmFpcmVzQ2FyZHMgLz4gKi99XHJcblx0XHRcdFx0PC9BZG1pbj5cclxuXHRcdFx0PC9BZG1pbkhlYWRlcj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEdlc3Rpb25QYXJ0ZW5haXJlc0NhcmRzKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==