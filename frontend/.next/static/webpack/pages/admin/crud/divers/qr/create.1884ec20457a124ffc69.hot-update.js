webpackHotUpdate_N_E("pages/admin/crud/divers/qr/create",{

/***/ "./components/admin/FormCreateQR.js":
/*!******************************************!*\
  !*** ./components/admin/FormCreateQR.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\FormCreateQR.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var FormCreateGite = function FormCreateGite() {
  _s();

  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_7__["getCookie"])('token');

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_8__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      watch = _useForm.watch,
      errors = _useForm.errors;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    question: '',
    reponse: '',
    success: '',
    loading: false,
    error: ''
  }),
      values = _useState[0],
      setValues = _useState[1];

  var question = values.question,
      reponse = values.reponse,
      success = values.success,
      loading = values.loading,
      error = values.error;

  var onSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setValues(_objectSpread(_objectSpread({}, values), {}, {
                loading: true
              }));
              console.log('data vaut =>', data);
              Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_5__["createQR"])(data, token).then(function (result) {
                console.log('result vaut =>', result);

                if (result.error) {
                  console.log('une grosse erreur');
                  setValues(_objectSpread(_objectSpread({}, values), {}, {
                    error: result.error
                  }));
                } else {
                  setValues(_objectSpread(_objectSpread({}, values), {}, {
                    question: '',
                    reponse: '',
                    success: true,
                    loading: false
                  }));
                  setTimeout(function () {
                    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/admin/gestionDivers/FAQ');
                  }, 2000);
                }
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: handleSubmit(onSubmit),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-12",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Question"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              type: "text",
              name: "question",
              ref: register({
                required: true
              }) // value={question}
              ,
              className: "form-control",
              cols: "30",
              rows: "2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "R\xE9ponse"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              type: "text",
              name: "reponse",
              ref: register({
                required: true
              }) // value={reponse}
              ,
              className: "form-control",
              cols: "30",
              rows: "5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "alert alert-success",
        children: "La question/r\xE9ponse \xE0 bien \xE9t\xE9 ajout\xE9e, redirection en cours..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 6
      }, _this), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "alert alert-success",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Spinner"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 7
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 6
      }, _this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "alert alert-danger",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-info",
          children: "Cr\xE9er cette q/r"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }, _this)
  }, void 0, false);
};

_s(FormCreateGite, "/lTrjN8Db/MW6gV9TJYa82zyd34=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_8__["useForm"]];
});

_c = FormCreateGite;
/* harmony default export */ __webpack_exports__["default"] = (FormCreateGite);

var _c;

$RefreshReg$(_c, "FormCreateGite");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9Gb3JtQ3JlYXRlUVIuanMiXSwibmFtZXMiOlsiRm9ybUNyZWF0ZUdpdGUiLCJ0b2tlbiIsImdldENvb2tpZSIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsIndhdGNoIiwiZXJyb3JzIiwidXNlU3RhdGUiLCJxdWVzdGlvbiIsInJlcG9uc2UiLCJzdWNjZXNzIiwibG9hZGluZyIsImVycm9yIiwidmFsdWVzIiwic2V0VmFsdWVzIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZVFSIiwidGhlbiIsInJlc3VsdCIsInNldFRpbWVvdXQiLCJSb3V0ZXIiLCJwdXNoIiwicmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFDNUIsTUFBTUMsS0FBSyxHQUFHQyxzRUFBUyxDQUFDLE9BQUQsQ0FBdkI7O0FBRDRCLGlCQUVzQkMsK0RBQU8sRUFGN0I7QUFBQSxNQUVwQkMsUUFGb0IsWUFFcEJBLFFBRm9CO0FBQUEsTUFFVkMsWUFGVSxZQUVWQSxZQUZVO0FBQUEsTUFFSUMsS0FGSixZQUVJQSxLQUZKO0FBQUEsTUFFV0MsTUFGWCxZQUVXQSxNQUZYOztBQUFBLGtCQUlBQyxzREFBUSxDQUFDO0FBQ3BDQyxZQUFRLEVBQUUsRUFEMEI7QUFFcENDLFdBQU8sRUFBRSxFQUYyQjtBQUdwQ0MsV0FBTyxFQUFFLEVBSDJCO0FBSXBDQyxXQUFPLEVBQUUsS0FKMkI7QUFLcENDLFNBQUssRUFBRTtBQUw2QixHQUFELENBSlI7QUFBQSxNQUlyQkMsTUFKcUI7QUFBQSxNQUliQyxTQUphOztBQUFBLE1BV3BCTixRQVhvQixHQVcyQkssTUFYM0IsQ0FXcEJMLFFBWG9CO0FB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QTtBQUFBO0FBQUE7QUFBQSxlQTVCRixFQWlDRUMsT0FBTyxpQkFDUDtBQUFLLGlCQUFTLEVBQUMscUJBQWY7QUFBQSwrQkFDQyxxRUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxDRixFQXNDRUMsS0FBSyxpQkFBSTtBQUFLLGlCQUFTLEVBQUMsb0JBQWY7QUFBQSxrQkFBcUNBO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0Q1gsZUF1Q0M7QUFBQSwrQkFDQztBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLG1CQUFTLEVBQUMsY0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdkNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELG1CQUREO0FBaURBLENBckZEOztHQUFNYixjO1VBRTZDRyx1RDs7O0tBRjdDSCxjO0FBdUZTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9jcnVkL2RpdmVycy9xci9jcmVhdGUuMTg4NGVjMjA0NTdhMTI0ZmZjNjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVFSIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IEZvcm1DcmVhdGVHaXRlID0gKCkgPT4ge1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cdGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgd2F0Y2gsIGVycm9ycyB9ID0gdXNlRm9ybSgpO1xyXG5cclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0cXVlc3Rpb246ICcnLFxyXG5cdFx0cmVwb25zZTogJycsXHJcblx0XHRzdWNjZXNzOiAnJyxcclxuXHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0ZXJyb3I6ICcnLFxyXG5cdH0pO1xyXG5cdGNvbnN0IHsgcXVlc3Rpb24sIHJlcG9uc2UsIHN1Y2Nlc3MsIGxvYWRpbmcsIGVycm9yIH0gPSB2YWx1ZXM7XHJcblxyXG5cdGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcclxuXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHRcdGNvbnNvbGUubG9nKCdkYXRhIHZhdXQgPT4nLCBkYXRhKTtcclxuXHRcdGNyZWF0ZVFSKGRhdGEsIHRva2VuKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3Jlc3VsdCB2YXV0ID0+JywgcmVzdWx0KTtcclxuXHRcdFx0aWYgKHJlc3VsdC5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCd1bmUgZ3Jvc3NlIGVycmV1cicpO1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IHJlc3VsdC5lcnJvciB9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0cXVlc3Rpb246ICcnLFxyXG5cdFx0XHRcdFx0cmVwb25zZTogJycsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiB0cnVlLFxyXG5cdFx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRSb3V0ZXIucHVzaCgnL2FkbWluL2dlc3Rpb25EaXZlcnMvRkFRJyk7XHJcblx0XHRcdFx0fSwgMjAwMCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTEyJz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlF1ZXN0aW9uPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWFcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPSdxdWVzdGlvbidcclxuXHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHRcdC8vIHZhbHVlPXtxdWVzdGlvbn1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29scz0nMzAnXHJcblx0XHRcdFx0XHRcdFx0XHRyb3dzPScyJz48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlLDqXBvbnNlPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWFcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPSdyZXBvbnNlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gdmFsdWU9e3JlcG9uc2V9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdGNvbHM9JzMwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cm93cz0nNSc+PC90ZXh0YXJlYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR7c3VjY2VzcyAmJiAoXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYWxlcnQgYWxlcnQtc3VjY2Vzcyc+XHJcblx0XHRcdFx0XHRcdExhIHF1ZXN0aW9uL3LDqXBvbnNlIMOgIGJpZW4gw6l0w6kgYWpvdXTDqWUsIHJlZGlyZWN0aW9uIGVuXHJcblx0XHRcdFx0XHRcdGNvdXJzLi4uXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHRcdHtsb2FkaW5nICYmIChcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdhbGVydCBhbGVydC1zdWNjZXNzJz5cclxuXHRcdFx0XHRcdFx0PFNwaW5uZXIgLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdFx0e2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPSdhbGVydCBhbGVydC1kYW5nZXInPntlcnJvcn08L2Rpdj59XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0biBidG4taW5mbyc+XHJcblx0XHRcdFx0XHRcdENyw6llciBjZXR0ZSBxL3JcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUNyZWF0ZUdpdGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=