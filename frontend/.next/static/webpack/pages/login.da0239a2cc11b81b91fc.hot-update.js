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
    console.log('log user ', user);
    Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_3__["login"])(user).then(function (data) {
      if (data.error) {
        setvalues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error,
          loading: false
        }));
      } else {
        Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_3__["authenticate"])(data, function () {
          if (isAdmin) {
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
      lineNumber: 62,
      columnNumber: 13
    }, _this) : '';
  };

  var showError = function showError() {
    return error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-danger",
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }, _this) : '';
  };

  var showMessage = function showMessage() {
    return message ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-info",
      children: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
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
          lineNumber: 72,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
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
          lineNumber: 82,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary btn-lg",
          children: "Se connecter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 4
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [showError(), showLoading(), showMessage(), showForm && signinForm(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
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
          lineNumber: 110,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL0xvZ2luQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIlNpZ25pbkNvbXBvbmVudCIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImlzQWRtaW4iLCJlcnJvciIsImxvYWRpbmciLCJtZXNzYWdlIiwic2hvd0Zvcm0iLCJ2YWx1ZXMiLCJzZXR2YWx1ZXMiLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJwdXNoIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJsb2dpbiIsInRoZW4iLCJkYXRhIiwiYXV0aGVudGljYXRlIiwiaGFuZGxlQ2hhbmdlIiwidmFsIiwidGFyZ2V0IiwidmFsdWUiLCJzaG93TG9hZGluZyIsInNob3dFcnJvciIsInNob3dNZXNzYWdlIiwic2lnbmluRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUM7QUFDcENDLFNBQUssRUFBRSxFQUQ2QjtBQUVwQ0MsWUFBUSxFQUFFLEVBRjBCO0FBR3BDQyxXQUFPLEVBQUUsS0FIMkI7QUFJcENDLFNBQUssRUFBRSxFQUo2QjtBQUtwQ0MsV0FBTyxFQUFFLEtBTDJCO0FBTXBDQyxXQUFPLEVBQUUsRUFOMkI7QUFPcENDLFlBQVEsRUFBRTtBQVAwQixHQUFELENBRFA7QUFBQSxNQUN0QkMsTUFEc0I7QUFBQSxNQUNkQyxTQURjOztBQUFBLE1BWTVCUixLQVo0QixHQW1CekJPLE1BbkJ5QixDQVk1QlAsS0FaNEI7QUFBQSxNQWE1QkMsUUFiNEIsR0FtQnpCTSxNQW5CeUIsQ0FhNUJOLFFBYjRCO0FBQUEsTUFjNUJDLE9BZDRCLEdBbUJ6QkssTUFuQnlCLENBYzVCTCxPQWQ0QjtB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OTFmYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgYXV0aGVudGljYXRlLCBsb2dpbiB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuLy8gaW1wb3J0IExvZ2luR29vZ2xlIGZyb20gJy4vTG9naW5Hb29nbGUnO1xyXG5cclxuY29uc3QgU2lnbmluQ29tcG9uZW50ID0gKCkgPT4ge1xyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldHZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRlbWFpbDogJycsXHJcblx0XHRwYXNzd29yZDogJycsXHJcblx0XHRpc0FkbWluOiBmYWxzZSxcclxuXHRcdGVycm9yOiAnJyxcclxuXHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0bWVzc2FnZTogJycsXHJcblx0XHRzaG93Rm9ybTogdHJ1ZSxcclxuXHR9KTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0ZW1haWwsXHJcblx0XHRwYXNzd29yZCxcclxuXHRcdGlzQWRtaW4sXHJcblx0XHRlcnJvcixcclxuXHRcdGxvYWRpbmcsXHJcblx0XHRtZXNzYWdlLFxyXG5cdFx0c2hvd0Zvcm0sXHJcblx0fSA9IHZhbHVlcztcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlzQWRtaW4gJiYgUm91dGVyLnB1c2goJy8nKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0c2V0dmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlLCBlcnJvcjogZmFsc2UgfSk7XHJcblx0XHRjb25zdCB1c2VyID0geyBlbWFpbCwgcGFzc3dvcmQsIGlzQWRtaW4gfTtcclxuXHRcdGNvbnNvbGUubG9nKCdsb2cgdXNlciAnLCB1c2VyKTtcclxuXHJcblx0XHRsb2dpbih1c2VyKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0c2V0dmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciwgbG9hZGluZzogZmFsc2UgfSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0YXV0aGVudGljYXRlKGRhdGEsICgpID0+IHtcclxuXHRcdFx0XHRcdGlmIChpc0FkbWluKSB7XHJcblx0XHRcdFx0XHRcdFJvdXRlci5wdXNoKCcvYWRtaW4nKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdCdWb3VzIGRldmV6IGF2b2lyIGxlcyBkcm9pdHMgYWRtaW4gcG91ciBwb3V2b2lyIHZvdXMgY29ubmVjdGVyJ1xyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRSb3V0ZXIucHVzaCgnLycpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAodmFsKSA9PiAoZSkgPT4ge1xyXG5cdFx0c2V0dmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZmFsc2UsIFt2YWxdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzaG93TG9hZGluZyA9ICgpID0+XHJcblx0XHRsb2FkaW5nID8gPGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LWluZm8nPkxvYWRpbmcuLi48L2Rpdj4gOiAnJztcclxuXHRjb25zdCBzaG93RXJyb3IgPSAoKSA9PlxyXG5cdFx0ZXJyb3IgPyA8ZGl2IGNsYXNzTmFtZT0nYWxlcnQgYWxlcnQtZGFuZ2VyJz57ZXJyb3J9PC9kaXY+IDogJyc7XHJcblx0Y29uc3Qgc2hvd01lc3NhZ2UgPSAoKSA9PlxyXG5cdFx0bWVzc2FnZSA/IDxkaXYgY2xhc3NOYW1lPSdhbGVydCBhbGVydC1pbmZvJz57bWVzc2FnZX08L2Rpdj4gOiAnJztcclxuXHJcblx0Y29uc3Qgc2lnbmluRm9ybSA9ICgpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17ZW1haWx9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2VtYWlsJyl9XHJcblx0XHRcdFx0XHRcdHR5cGU9J2VtYWlsJ1xyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0VudHJleiB2b3RyZSBlbWFpbCdcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17cGFzc3dvcmR9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3Bhc3N3b3JkJyl9XHJcblx0XHRcdFx0XHRcdHR5cGU9J3Bhc3N3b3JkJ1xyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0VudHJleiB2b3RyZSBtb3QgZGUgcGFzc2UnXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeSBidG4tbGcnPlxyXG5cdFx0XHRcdFx0XHRTZSBjb25uZWN0ZXJcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7c2hvd0Vycm9yKCl9XHJcblx0XHRcdHtzaG93TG9hZGluZygpfVxyXG5cdFx0XHR7c2hvd01lc3NhZ2UoKX1cclxuXHRcdFx0ey8qIDxMb2dpbkdvb2dsZSAvPiAqL31cclxuXHRcdFx0e3Nob3dGb3JtICYmIHNpZ25pbkZvcm0oKX1cclxuXHRcdFx0PGJyIC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XHJcblx0XHRcdFx0PExpbmsgaHJlZj0nL2F1dGgvcGFzc3dvcmQvZm9yZ290Jz5cclxuXHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tc20nPlxyXG5cdFx0XHRcdFx0XHRNb3QgZGUgcGFzc2Ugb3VibGnDqSA/XHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduaW5Db21wb25lbnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=