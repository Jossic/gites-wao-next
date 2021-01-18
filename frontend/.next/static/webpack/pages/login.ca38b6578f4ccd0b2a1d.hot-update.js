webpackHotUpdate_N_E("pages/login",{

/***/ "./components/auth/LoginComponent.js":
/*!*******************************************!*\
  !*** ./components/auth/LoginComponent.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\auth\\LoginComponent.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 // import LoginGoogle from './LoginGoogle';

var SigninComponent = function SigninComponent() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
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
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    isAdmin && next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
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
    Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_3__["login"])(user).then(function (data) {
      if (data.error) {
        setvalues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error,
          loading: false
        }));
      } else {
        Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_3__["authenticate"])(data, function () {
          if (Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_3__["isAuth"])() && data.isAdmin) {
            next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/admin');
          } else {
            console.log('Vous devez avoir les droits admin pour pouvoir vous connecter');
            next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
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
      lineNumber: 61,
      columnNumber: 13
    }, _this) : '';
  };

  var showError = function showError() {
    return error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-danger",
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }, _this) : '';
  };

  var showMessage = function showMessage() {
    return message ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-info",
      children: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
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
          lineNumber: 71,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
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
          lineNumber: 81,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary btn-lg",
          children: "Se connecter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 4
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [showError(), showLoading(), showMessage(), showForm && signinForm(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "text-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/auth/password/forgot",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "btn btn-outline-danger btn-sm",
          children: "Mot de passe oubli\xE9 ?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL0xvZ2luQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIlNpZ25pbkNvbXBvbmVudCIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImlzQWRtaW4iLCJlcnJvciIsImxvYWRpbmciLCJtZXNzYWdlIiwic2hvd0Zvcm0iLCJ2YWx1ZXMiLCJzZXR2YWx1ZXMiLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJwdXNoIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlciIsImxvZ2luIiwidGhlbiIsImRhdGEiLCJhdXRoZW50aWNhdGUiLCJpc0F1dGgiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwidmFsIiwidGFyZ2V0IiwidmFsdWUiLCJzaG93TG9hZGluZyIsInNob3dFcnJvciIsInNob3dNZXNzYWdlIiwic2lnbmluRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUM7QUFDcENDLFNBQUssRUFBRSxFQUQ2QjtBQUVwQ0MsWUFBUSxFQUFFLEVBRjBCO0FBR3BDQyxXQUFPLEVBQUUsS0FIMkI7QUFJcENDLFNBQUssRUFBRSxFQUo2QjtBQUtwQ0MsV0FBTyxFQUFFLEtBTDJCO0FBTXBDQyxXQUFPLEVBQUUsRUFOMkI7QUFPcENDLFlBQVEsRUFBRTtBQVAwQixHQUFELENBRFA7QUFBQSxNQUN0QkMsTUFEc0I7QUFBQSxNQUNkQyxTQURjOztBQUFBLE1BWTVCUixLQVo0QixHQW1CekJPLE1BbkJ5QixDQVk1QlAsS0FaNEI7QUFBQSxNQWE1QkMsUUFiNEIsR0FtQnpCTSxNQW5CeUIsQ0FhNUJOLFFBYjRCO0FBQUEsTUFjNUJDLE9BZDRCLEdBbUJ6QkssTUFuQnlCLENBYzVC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ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGF1dGhlbnRpY2F0ZSwgaXNBdXRoLCBsb2dpbiB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuLy8gaW1wb3J0IExvZ2luR29vZ2xlIGZyb20gJy4vTG9naW5Hb29nbGUnO1xyXG5cclxuY29uc3QgU2lnbmluQ29tcG9uZW50ID0gKCkgPT4ge1xyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldHZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRlbWFpbDogJycsXHJcblx0XHRwYXNzd29yZDogJycsXHJcblx0XHRpc0FkbWluOiBmYWxzZSxcclxuXHRcdGVycm9yOiAnJyxcclxuXHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0bWVzc2FnZTogJycsXHJcblx0XHRzaG93Rm9ybTogdHJ1ZSxcclxuXHR9KTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0ZW1haWwsXHJcblx0XHRwYXNzd29yZCxcclxuXHRcdGlzQWRtaW4sXHJcblx0XHRlcnJvcixcclxuXHRcdGxvYWRpbmcsXHJcblx0XHRtZXNzYWdlLFxyXG5cdFx0c2hvd0Zvcm0sXHJcblx0fSA9IHZhbHVlcztcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlzQWRtaW4gJiYgUm91dGVyLnB1c2goJy8nKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0c2V0dmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlLCBlcnJvcjogZmFsc2UgfSk7XHJcblx0XHRjb25zdCB1c2VyID0geyBlbWFpbCwgcGFzc3dvcmQsIGlzQWRtaW4gfTtcclxuXHJcblx0XHRsb2dpbih1c2VyKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0c2V0dmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciwgbG9hZGluZzogZmFsc2UgfSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0YXV0aGVudGljYXRlKGRhdGEsICgpID0+IHtcclxuXHRcdFx0XHRcdGlmIChpc0F1dGgoKSAmJiBkYXRhLmlzQWRtaW4pIHtcclxuXHRcdFx0XHRcdFx0Um91dGVyLnB1c2goJy9hZG1pbicpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0J1ZvdXMgZGV2ZXogYXZvaXIgbGVzIGRyb2l0cyBhZG1pbiBwb3VyIHBvdXZvaXIgdm91cyBjb25uZWN0ZXInXHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFJvdXRlci5wdXNoKCcvJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh2YWwpID0+IChlKSA9PiB7XHJcblx0XHRzZXR2YWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBmYWxzZSwgW3ZhbF06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNob3dMb2FkaW5nID0gKCkgPT5cclxuXHRcdGxvYWRpbmcgPyA8ZGl2IGNsYXNzTmFtZT0nYWxlcnQgYWxlcnQtaW5mbyc+TG9hZGluZy4uLjwvZGl2PiA6ICcnO1xyXG5cdGNvbnN0IHNob3dFcnJvciA9ICgpID0+XHJcblx0XHRlcnJvciA/IDxkaXYgY2xhc3NOYW1lPSdhbGVydCBhbGVydC1kYW5nZXInPntlcnJvcn08L2Rpdj4gOiAnJztcclxuXHRjb25zdCBzaG93TWVzc2FnZSA9ICgpID0+XHJcblx0XHRtZXNzYWdlID8gPGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LWluZm8nPnttZXNzYWdlfTwvZGl2PiA6ICcnO1xyXG5cclxuXHRjb25zdCBzaWduaW5Gb3JtID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHZhbHVlPXtlbWFpbH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnZW1haWwnKX1cclxuXHRcdFx0XHRcdFx0dHlwZT0nZW1haWwnXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nRW50cmV6IHZvdHJlIGVtYWlsJ1xyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHZhbHVlPXtwYXNzd29yZH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncGFzc3dvcmQnKX1cclxuXHRcdFx0XHRcdFx0dHlwZT0ncGFzc3dvcmQnXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nRW50cmV6IHZvdHJlIG1vdCBkZSBwYXNzZSdcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZyc+XHJcblx0XHRcdFx0XHRcdFNlIGNvbm5lY3RlclxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHtzaG93RXJyb3IoKX1cclxuXHRcdFx0e3Nob3dMb2FkaW5nKCl9XHJcblx0XHRcdHtzaG93TWVzc2FnZSgpfVxyXG5cdFx0XHR7LyogPExvZ2luR29vZ2xlIC8+ICovfVxyXG5cdFx0XHR7c2hvd0Zvcm0gJiYgc2lnbmluRm9ybSgpfVxyXG5cdFx0XHQ8YnIgLz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cclxuXHRcdFx0XHQ8TGluayBocmVmPScvYXV0aC9wYXNzd29yZC9mb3Jnb3QnPlxyXG5cdFx0XHRcdFx0PGEgY2xhc3NOYW1lPSdidG4gYnRuLW91dGxpbmUtZGFuZ2VyIGJ0bi1zbSc+XHJcblx0XHRcdFx0XHRcdE1vdCBkZSBwYXNzZSBvdWJsacOpID9cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25pbkNvbXBvbmVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==