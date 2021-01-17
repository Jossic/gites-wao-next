webpackHotUpdate_N_E("pages/login",{

/***/ "./components/auth/SigninComponent.js":
/*!********************************************!*\
  !*** ./components/auth/SigninComponent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\auth\\SigninComponent.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // import { authenticate, isAuth, signin } from '../../actions/authAction';


 // import LoginGoogle from './LoginGoogle';

var SigninComponent = function SigninComponent() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    email: '',
    password: '',
    error: '',
    loading: false,
    message: '',
    showForm: true
  }),
      values = _useState[0],
      setvalues = _useState[1];

  var email = values.email,
      password = values.password,
      error = values.error,
      loading = values.loading,
      message = values.message,
      showForm = values.showForm;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    isAuth() && next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
  }, []);

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setvalues(_objectSpread(_objectSpread({}, values), {}, {
      loading: true,
      error: false
    }));
    var user = {
      email: email,
      password: password
    };
    signin(user).then(function (data) {
      if (data.error) {
        setvalues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error,
          loading: false
        }));
      } else {
        authenticate(data, function () {
          if (isAuth() && isAuth().role === 1) {
            next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/admin');
          } else {
            next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/user');
          }
        });
      }
    });
  };

  var handleChange = function handleChange(val) {
    return function (e) {
      setvalues(_objectSpread(_objectSpread({}, values), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
        error: false
      }, val, e.target.value)));
    };
  };

  var showLoading = function showLoading() {
    return loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-info",
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, _this) : '';
  };

  var showError = function showError() {
    return error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-danger",
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }, _this) : '';
  };

  var showMessage = function showMessage() {
    return message ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-info",
      children: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, _this) : '';
  };

  var signinForm = function signinForm() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          value: email,
          onChange: handleChange('email'),
          type: "email",
          className: "form-control",
          placeholder: "Entrez votre email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-group",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          value: password,
          onChange: handleChange('password'),
          type: "password",
          className: "form-control",
          placeholder: "Entrez votre mot de passe"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary btn-lg",
          children: "Se connecter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 4
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [showError(), showLoading(), showMessage(), showForm && signinForm(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "text-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/auth/password/forgot",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "btn btn-outline-danger btn-sm",
          children: "Mot de passe oubli\xE9 ?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_s(SigninComponent, "FPdBbZ8bLHCCLR0M4ImMjSNL+04=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL1NpZ25pbkNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJTaWduaW5Db21wb25lbnQiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJlcnJvciIsImxvYWRpbmciLCJtZXNzYWdlIiwic2hvd0Zvcm0iLCJ2YWx1ZXMiLCJzZXR2YWx1ZXMiLCJ1c2VFZmZlY3QiLCJpc0F1dGgiLCJSb3V0ZXIiLCJwdXNoIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlciIsInNpZ25pbiIsInRoZW4iLCJkYXRhIiwiYXV0aGVudGljYXRlIiwicm9sZSIsImhhbmRsZUNoYW5nZSIsInZhbCIsInRhcmdldCIsInZhbHVlIiwic2hvd0xvYWRpbmciLCJzaG93RXJyb3IiLCJzaG93TWVzc2FnZSIsInNpZ25pbkZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7Q0FFQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFBQSxrQkFDREMsc0RBQVEsQ0FBQztBQUNwQ0MsU0FBSyxFQUFFLEVBRDZCO0FBRXBDQyxZQUFRLEVBQUUsRUFGMEI7QUFHcENDLFNBQUssRUFBRSxFQUg2QjtBQUlwQ0MsV0FBTyxFQUFFLEtBSjJCO0FBS3BDQyxXQUFPLEVBQUUsRUFMMkI7QUFNcENDLFlBQVEsRUFBRTtBQU4wQixHQUFELENBRFA7QUFBQSxNQUN0QkMsTUFEc0I7QUFBQSxNQUNkQyxTQURjOztBQUFBLE1BVXJCUCxLQVZxQixHQVVrQ00sTUFWbEMsQ0FVckJOLEtBVnFCO0FBQUEsTUFVZEMsUUFWYyxHQVVrQ0ssTUFWbEMsQ0FVZEwsUUFWYztBQUFBLE1BVUpDLEtBVkksR0FVa0NJLE1BVmxDLENBVUpKLEtBVkk7QUFBQSxNQVVHQyxPQVZILEdBVWtDRyxNQVZsQyxDQVVHSCxPQVZIO0FBQUEsTUFVWUMs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VUFBRCxDQUZ2QjtBQUdDLGNBQUksRUFBQyxVQUhOO0FBSUMsbUJBQVMsRUFBQyxjQUpYO0FBS0MscUJBQVcsRUFBQztBQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEQsZUFxQkM7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQSwrQkFDQztBQUFRLG1CQUFTLEVBQUMsd0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERDtBQTZCQSxHQTlCRDs7QUFnQ0Esc0JBQ0M7QUFBQSxlQUNFSyxTQUFTLEVBRFgsRUFFRUQsV0FBVyxFQUZiLEVBR0VFLFdBQVcsRUFIYixFQUtFdEIsUUFBUSxJQUFJdUIsVUFBVSxFQUx4QixlQU1DO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORCxlQU9DO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSw2QkFDQyxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyx1QkFBWDtBQUFBLCtCQUNDO0FBQUcsbUJBQVMsRUFBQywrQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEQ7QUFBQSxrQkFERDtBQWlCQSxDQWpHRDs7R0FBTTlCLGU7O0tBQUFBLGU7QUFtR1NBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjcyZDZhYWIxZjRjNWZjMTUxYzU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgeyBhdXRoZW50aWNhdGUsIGlzQXV0aCwgc2lnbmluIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9uJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbi8vIGltcG9ydCBMb2dpbkdvb2dsZSBmcm9tICcuL0xvZ2luR29vZ2xlJztcclxuXHJcbmNvbnN0IFNpZ25pbkNvbXBvbmVudCA9ICgpID0+IHtcclxuXHRjb25zdCBbdmFsdWVzLCBzZXR2YWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0ZW1haWw6ICcnLFxyXG5cdFx0cGFzc3dvcmQ6ICcnLFxyXG5cdFx0ZXJyb3I6ICcnLFxyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRtZXNzYWdlOiAnJyxcclxuXHRcdHNob3dGb3JtOiB0cnVlLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCB7IGVtYWlsLCBwYXNzd29yZCwgZXJyb3IsIGxvYWRpbmcsIG1lc3NhZ2UsIHNob3dGb3JtIH0gPSB2YWx1ZXM7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpc0F1dGgoKSAmJiBSb3V0ZXIucHVzaCgnLycpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRzZXR2YWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUsIGVycm9yOiBmYWxzZSB9KTtcclxuXHRcdGNvbnN0IHVzZXIgPSB7IGVtYWlsLCBwYXNzd29yZCB9O1xyXG5cclxuXHRcdHNpZ25pbih1c2VyKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0c2V0dmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciwgbG9hZGluZzogZmFsc2UgfSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0YXV0aGVudGljYXRlKGRhdGEsICgpID0+IHtcclxuXHRcdFx0XHRcdGlmIChpc0F1dGgoKSAmJiBpc0F1dGgoKS5yb2xlID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdFJvdXRlci5wdXNoKCcvYWRtaW4nKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFJvdXRlci5wdXNoKCcvdXNlcicpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAodmFsKSA9PiAoZSkgPT4ge1xyXG5cdFx0c2V0dmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZmFsc2UsIFt2YWxdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzaG93TG9hZGluZyA9ICgpID0+XHJcblx0XHRsb2FkaW5nID8gPGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LWluZm8nPkxvYWRpbmcuLi48L2Rpdj4gOiAnJztcclxuXHRjb25zdCBzaG93RXJyb3IgPSAoKSA9PlxyXG5cdFx0ZXJyb3IgPyA8ZGl2IGNsYXNzTmFtZT0nYWxlcnQgYWxlcnQtZGFuZ2VyJz57ZXJyb3J9PC9kaXY+IDogJyc7XHJcblx0Y29uc3Qgc2hvd01lc3NhZ2UgPSAoKSA9PlxyXG5cdFx0bWVzc2FnZSA/IDxkaXYgY2xhc3NOYW1lPSdhbGVydCBhbGVydC1pbmZvJz57bWVzc2FnZX08L2Rpdj4gOiAnJztcclxuXHJcblx0Y29uc3Qgc2lnbmluRm9ybSA9ICgpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17ZW1haWx9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2VtYWlsJyl9XHJcblx0XHRcdFx0XHRcdHR5cGU9J2VtYWlsJ1xyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0VudHJleiB2b3RyZSBlbWFpbCdcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17cGFzc3dvcmR9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3Bhc3N3b3JkJyl9XHJcblx0XHRcdFx0XHRcdHR5cGU9J3Bhc3N3b3JkJ1xyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0VudHJleiB2b3RyZSBtb3QgZGUgcGFzc2UnXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeSBidG4tbGcnPlxyXG5cdFx0XHRcdFx0XHRTZSBjb25uZWN0ZXJcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7c2hvd0Vycm9yKCl9XHJcblx0XHRcdHtzaG93TG9hZGluZygpfVxyXG5cdFx0XHR7c2hvd01lc3NhZ2UoKX1cclxuXHRcdFx0ey8qIDxMb2dpbkdvb2dsZSAvPiAqL31cclxuXHRcdFx0e3Nob3dGb3JtICYmIHNpZ25pbkZvcm0oKX1cclxuXHRcdFx0PGJyIC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XHJcblx0XHRcdFx0PExpbmsgaHJlZj0nL2F1dGgvcGFzc3dvcmQvZm9yZ290Jz5cclxuXHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tc20nPlxyXG5cdFx0XHRcdFx0XHRNb3QgZGUgcGFzc2Ugb3VibGnDqSA/XHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduaW5Db21wb25lbnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=