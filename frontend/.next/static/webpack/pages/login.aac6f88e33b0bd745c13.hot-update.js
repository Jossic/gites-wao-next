webpackHotUpdate_N_E("pages/login",{

/***/ "./components/auth/LoginComponent.js":
/*!*******************************************!*\
  !*** ./components/auth/LoginComponent.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\auth\\LoginComponent.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 // import LoginGoogle from './LoginGoogle';

var SigninComponent = function SigninComponent() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    email: '',
    password: '',
    isAdmin: false,
    error: '',
    loading: false,
    message: '',
    showForm: true
  }),
      values = _useState[0],
      setvalues = _useState[1];

  var email = values.email,
      password = values.password,
      isAdmin = values.isAdmin,
      error = values.error,
      loading = values.loading,
      message = values.message,
      showForm = values.showForm;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    isAdmin && next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
  }, []);

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setvalues(_objectSpread(_objectSpread({}, values), {}, {
      loading: true,
      error: false
    }));
    var user = {
      email: email,
      password: password,
      isAdmin: isAdmin
    };
    Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_2__["login"])(user).then(function (data) {
      if (data.error) {
        setvalues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error,
          loading: false
        }));
      } else {
        Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_2__["authenticate"])(data, function () {
          if (Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_2__["isAuth"])() && data.isAdmin) {
            next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/admin');
          } else {
            console.log('Vous devez avoir les droits admin pour pouvoir vous connecter');
            next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
          }
        });
      }
    });
  };

  var handleChange = function handleChange(val) {
    return function (e) {
      setvalues(_objectSpread(_objectSpread({}, values), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
        error: false
      }, val, e.target.value)));
    };
  };

  var showLoading = function showLoading() {
    return loading ? __jsx("div", {
      className: "alert alert-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }
    }, "Loading...") : '';
  };

  var showError = function showError() {
    return error ? __jsx("div", {
      className: "alert alert-danger",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }
    }, error) : '';
  };

  var showMessage = function showMessage() {
    return message ? __jsx("div", {
      className: "alert alert-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }, message) : '';
  };

  var signinForm = function signinForm() {
    return __jsx("form", {
      onSubmit: handleSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 4
      }
    }, __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 5
      }
    }, __jsx("input", {
      value: email,
      onChange: handleChange('email'),
      type: "email",
      defaultValue: "jossic.lapierre@gmail.com",
      className: "form-control",
      placeholder: "Entrez votre email",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 6
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 5
      }
    }, __jsx("input", {
      value: password,
      onChange: handleChange('password'),
      defaultValue: "123456",
      type: "password",
      className: "form-control",
      placeholder: "Entrez votre mot de passe",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 6
      }
    })), __jsx("div", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 5
      }
    }, __jsx("button", {
      className: "btn btn-primary btn-lg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 6
      }
    }, "Se connecter")));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, showError(), showLoading(), showMessage(), showForm && signinForm(), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 4
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/auth/password/forgot",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, __jsx("a", {
    className: "btn btn-outline-danger btn-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 6
    }
  }, "Mot de passe oubli\xE9 ?"))));
};

_s(SigninComponent, "aWsLRcTxEkwuMWCcymZMcgLkhIU=");

_c = SigninComponent;
/* harmony default export */ __webpack_exports__["default"] = (SigninComponent);

var _c;

$RefreshReg$(_c, "SigninComponent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL0xvZ2luQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIlNpZ25pbkNvbXBvbmVudCIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImlzQWRtaW4iLCJlcnJvciIsImxvYWRpbmciLCJtZXNzYWdlIiwic2hvd0Zvcm0iLCJ2YWx1ZXMiLCJzZXR2YWx1ZXMiLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJwdXNoIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlciIsImxvZ2luIiwidGhlbiIsImRhdGEiLCJhdXRoZW50aWNhdGUiLCJpc0F1dGgiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwidmFsIiwidGFyZ2V0IiwidmFsdWUiLCJzaG93TG9hZGluZyIsInNob3dFcnJvciIsInNob3dNZXNzYWdlIiwic2lnbmluRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFBQSxrQkFDREMsc0RBQVEsQ0FBQztBQUNwQ0MsU0FBSyxFQUFFLEVBRDZCO0FBRXBDQyxZQUFRLEVBQUUsRUFGMEI7QUFHcENDLFdBQU8sRUFBRSxLQUgyQjtBQUlwQ0MsU0FBSyxFQUFFLEVBSjZCO0FBS3BDQyxXQUFPLEVBQUUsS0FMMkI7QUFNcENDLFdBQU8sRUFBRSxFQU4yQjtBQU9wQ0MsWUFBUSxFQUFFO0FBUDBCLEdBQUQsQ0FEUDtBQUFBLE1BQ3RCQyxNQURzQjtBQUFBLE1BQ2RDLFNBRGM7O0FBQUEsTUFZNUJSLEtBWjRCLEdBbUJ6Qk8sTUFuQnlCLENBWTVCUCxLQVo0QjtBQUFBLE1BYTVCQyxRQWI0QixHQW1CekJNLE1BbkJ5QixDQWE1Qk4sUUFiNEI7QUFBQSxNQWM1QkMsT0FkNEIsR0FtQnpCSyxNQW5CeUIsQ0FjNUJM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QUE7QUFBQTtBQUFBO0FBQUEsZ0NBREQsQ0FERCxDQVBELENBREQ7QUFpQkEsQ0EvR0Q7O0dBQU1oQyxlOztLQUFBQSxlO0FBaUhTQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi5hYWM2Zjg4ZTMzYjBiZDc0NWMxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgYXV0aGVudGljYXRlLCBpc0F1dGgsIGxvZ2luIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG4vLyBpbXBvcnQgTG9naW5Hb29nbGUgZnJvbSAnLi9Mb2dpbkdvb2dsZSc7XHJcblxyXG5jb25zdCBTaWduaW5Db21wb25lbnQgPSAoKSA9PiB7XHJcblx0Y29uc3QgW3ZhbHVlcywgc2V0dmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuXHRcdGVtYWlsOiAnJyxcclxuXHRcdHBhc3N3b3JkOiAnJyxcclxuXHRcdGlzQWRtaW46IGZhbHNlLFxyXG5cdFx0ZXJyb3I6ICcnLFxyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRtZXNzYWdlOiAnJyxcclxuXHRcdHNob3dGb3JtOiB0cnVlLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRlbWFpbCxcclxuXHRcdHBhc3N3b3JkLFxyXG5cdFx0aXNBZG1pbixcclxuXHRcdGVycm9yLFxyXG5cdFx0bG9hZGluZyxcclxuXHRcdG1lc3NhZ2UsXHJcblx0XHRzaG93Rm9ybSxcclxuXHR9ID0gdmFsdWVzO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aXNBZG1pbiAmJiBSb3V0ZXIucHVzaCgnLycpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRzZXR2YWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUsIGVycm9yOiBmYWxzZSB9KTtcclxuXHRcdGNvbnN0IHVzZXIgPSB7IGVtYWlsLCBwYXNzd29yZCwgaXNBZG1pbiB9O1xyXG5cclxuXHRcdGxvZ2luKHVzZXIpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXR2YWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yLCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRhdXRoZW50aWNhdGUoZGF0YSwgKCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGlzQXV0aCgpICYmIGRhdGEuaXNBZG1pbikge1xyXG5cdFx0XHRcdFx0XHRSb3V0ZXIucHVzaCgnL2FkbWluJyk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHQnVm91cyBkZXZleiBhdm9pciBsZXMgZHJvaXRzIGFkbWluIHBvdXIgcG91dm9pciB2b3VzIGNvbm5lY3RlcidcclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0Um91dGVyLnB1c2goJy8nKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKHZhbCkgPT4gKGUpID0+IHtcclxuXHRcdHNldHZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGZhbHNlLCBbdmFsXTogZS50YXJnZXQudmFsdWUgfSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc2hvd0xvYWRpbmcgPSAoKSA9PlxyXG5cdFx0bG9hZGluZyA/IDxkaXYgY2xhc3NOYW1lPSdhbGVydCBhbGVydC1pbmZvJz5Mb2FkaW5nLi4uPC9kaXY+IDogJyc7XHJcblx0Y29uc3Qgc2hvd0Vycm9yID0gKCkgPT5cclxuXHRcdGVycm9yID8gPGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LWRhbmdlcic+e2Vycm9yfTwvZGl2PiA6ICcnO1xyXG5cdGNvbnN0IHNob3dNZXNzYWdlID0gKCkgPT5cclxuXHRcdG1lc3NhZ2UgPyA8ZGl2IGNsYXNzTmFtZT0nYWxlcnQgYWxlcnQtaW5mbyc+e21lc3NhZ2V9PC9kaXY+IDogJyc7XHJcblxyXG5cdGNvbnN0IHNpZ25pbkZvcm0gPSAoKSA9PiB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dmFsdWU9e2VtYWlsfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdlbWFpbCcpfVxyXG5cdFx0XHRcdFx0XHR0eXBlPSdlbWFpbCdcclxuXHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPSdqb3NzaWMubGFwaWVycmVAZ21haWwuY29tJ1xyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0VudHJleiB2b3RyZSBlbWFpbCdcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17cGFzc3dvcmR9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3Bhc3N3b3JkJyl9XHJcblx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT0nMTIzNDU2J1xyXG5cdFx0XHRcdFx0XHR0eXBlPSdwYXNzd29yZCdcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdFbnRyZXogdm90cmUgbW90IGRlIHBhc3NlJ1xyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnkgYnRuLWxnJz5cclxuXHRcdFx0XHRcdFx0U2UgY29ubmVjdGVyXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e3Nob3dFcnJvcigpfVxyXG5cdFx0XHR7c2hvd0xvYWRpbmcoKX1cclxuXHRcdFx0e3Nob3dNZXNzYWdlKCl9XHJcblx0XHRcdHsvKiA8TG9naW5Hb29nbGUgLz4gKi99XHJcblx0XHRcdHtzaG93Rm9ybSAmJiBzaWduaW5Gb3JtKCl9XHJcblx0XHRcdDxiciAvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxyXG5cdFx0XHRcdDxMaW5rIGhyZWY9Jy9hdXRoL3Bhc3N3b3JkL2ZvcmdvdCc+XHJcblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9J2J0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtJz5cclxuXHRcdFx0XHRcdFx0TW90IGRlIHBhc3NlIG91Ymxpw6kgP1xyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbmluQ29tcG9uZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9