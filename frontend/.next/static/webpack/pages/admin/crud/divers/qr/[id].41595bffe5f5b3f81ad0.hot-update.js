webpackHotUpdate_N_E("pages/admin/crud/divers/qr/[id]",{

/***/ "./components/admin/FormUpdateQR.js":
/*!******************************************!*\
  !*** ./components/admin/FormUpdateQR.js ***!
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






var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\FormUpdateQR.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var FormUpdateQR = function FormUpdateQR(_ref) {
  _s();

  var preloadedValues = _ref.preloadedValues;
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_7__["getCookie"])('token');

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_8__["useForm"])({
    defaultValues: preloadedValues
  }),
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
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setValues(_objectSpread(_objectSpread({}, values), {}, {
                loading: true
              }));
              console.log('data vaut =>', data);
              updateQR(data, token).then(function (result) {
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
      return _ref2.apply(this, arguments);
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
              lineNumber: 54,
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
              lineNumber: 55,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "R\xE9ponse"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
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
              lineNumber: 66,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 5
      }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "alert alert-success",
        children: "La question/r\xE9ponse \xE0 bien \xE9t\xE9 ajout\xE9e, redirection en cours..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 6
      }, _this), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "alert alert-success",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Spinner"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 7
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 6
      }, _this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "alert alert-danger",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-info",
          children: "Modifier cette q/r"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 4
    }, _this)
  }, void 0, false);
};

_s(FormUpdateQR, "/lTrjN8Db/MW6gV9TJYa82zyd34=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_8__["useForm"]];
});

_c = FormUpdateQR;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(FormUpdateQR));

var _c, _c2;

$RefreshReg$(_c, "FormUpdateQR");
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9Gb3JtVXBkYXRlUVIuanMiXSwibmFtZXMiOlsiRm9ybVVwZGF0ZVFSIiwicHJlbG9hZGVkVmFsdWVzIiwidG9rZW4iLCJnZXRDb29raWUiLCJ1c2VGb3JtIiwiZGVmYXVsdFZhbHVlcyIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwid2F0Y2giLCJlcnJvcnMiLCJ1c2VTdGF0ZSIsInF1ZXN0aW9uIiwicmVwb25zZSIsInN1Y2Nlc3MiLCJsb2FkaW5nIiwiZXJyb3IiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJvblN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlUVIiLCJ0aGVuIiwicmVzdWx0Iiwic2V0VGltZW91dCIsIlJvdXRlciIsInB1c2giLCJyZXF1aXJlZCIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLGVBQXNCLFFBQXRCQSxlQUFzQjtBQUM3QyxNQUFNQyxLQUFLLEdBQUdDLHNFQUFTLENBQUMsT0FBRCxDQUF2Qjs7QUFENkMsaUJBR0tDLCtEQUFPLENBQUM7QUFDekRDLGlCQUFhLEVBQUVKO0FBRDBDLEdBQUQsQ0FIWjtBQUFBLE1BR3JDSyxRQUhxQyxZQUdyQ0EsUUFIcUM7QUFBQSxNQUczQkMsWUFIMkIsWUFHM0JBLFlBSDJCO0FBQUEsTUFHYkMsS0FIYSxZQUdiQSxLQUhhO0FBQUEsTUFHTkMsTUFITSxZQUdOQSxNQUhNOztBQUFBLGtCQU9qQkMsc0RBQVEsQ0FBQztBQUNwQ0MsWUFBUSxFQUFFLEVBRDBCO0FBRXBDQyxXQUFPLEVBQUUsRUFGMkI7QUFHcENDLFdBQU8sRUFBRSxFQUgyQjtBQUlwQ0MsV0FBTyxFQUFFLEtB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LG1CQVpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxFQTJCRWYsT0FBTyxpQkFDUDtBQUFLLGlCQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE1QkYsRUFpQ0VDLE9BQU8saUJBQ1A7QUFBSyxpQkFBUyxFQUFDLHFCQUFmO0FBQUEsK0JBQ0MscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFsQ0YsRUFzQ0VDLEtBQUssaUJBQUk7QUFBSyxpQkFBUyxFQUFDLG9CQUFmO0FBQUEsa0JBQXFDQTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdENYLGVBdUNDO0FBQUEsK0JBQ0M7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixtQkFBUyxFQUFDLGNBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXZDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxtQkFERDtBQWlEQSxDQXhGRDs7R0FBTWYsWTtVQUc2Q0ksdUQ7OztLQUg3Q0osWTtBQTBGUyxxRUFBQTZCLDhEQUFVLENBQUM3QixZQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvZGl2ZXJzL3FyL1tpZF0uNDE1OTViZmZlNWY1YjNmODFhZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVFSLCBsaXN0ZU9uZVFSIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IEZvcm1VcGRhdGVRUiA9ICh7IHByZWxvYWRlZFZhbHVlcyB9KSA9PiB7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblxyXG5cdGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgd2F0Y2gsIGVycm9ycyB9ID0gdXNlRm9ybSh7XHJcblx0XHRkZWZhdWx0VmFsdWVzOiBwcmVsb2FkZWRWYWx1ZXMsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRxdWVzdGlvbjogJycsXHJcblx0XHRyZXBvbnNlOiAnJyxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRlcnJvcjogJycsXHJcblx0fSk7XHJcblx0Y29uc3QgeyBxdWVzdGlvbiwgcmVwb25zZSwgc3VjY2VzcywgbG9hZGluZywgZXJyb3IgfSA9IHZhbHVlcztcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdFx0Y29uc29sZS5sb2coJ2RhdGEgdmF1dCA9PicsIGRhdGEpO1xyXG5cdFx0dXBkYXRlUVIoZGF0YSwgdG9rZW4pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygncmVzdWx0IHZhdXQgPT4nLCByZXN1bHQpO1xyXG5cdFx0XHRpZiAocmVzdWx0LmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3VuZSBncm9zc2UgZXJyZXVyJyk7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogcmVzdWx0LmVycm9yIH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRxdWVzdGlvbjogJycsXHJcblx0XHRcdFx0XHRyZXBvbnNlOiAnJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IHRydWUsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFJvdXRlci5wdXNoKCcvYWRtaW4vZ2VzdGlvbkRpdmVycy9GQVEnKTtcclxuXHRcdFx0XHR9LCAyMDAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtMTInPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+UXVlc3Rpb248L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J3F1ZXN0aW9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gdmFsdWU9e3F1ZXN0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRjb2xzPSczMCdcclxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9JzInPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+UsOpcG9uc2U8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J3JlcG9uc2UnXHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHQvLyB2YWx1ZT17cmVwb25zZX1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29scz0nMzAnXHJcblx0XHRcdFx0XHRcdFx0XHRyb3dzPSc1Jz48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdHtzdWNjZXNzICYmIChcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdhbGVydCBhbGVydC1zdWNjZXNzJz5cclxuXHRcdFx0XHRcdFx0TGEgcXVlc3Rpb24vcsOpcG9uc2Ugw6AgYmllbiDDqXTDqSBham91dMOpZSwgcmVkaXJlY3Rpb24gZW5cclxuXHRcdFx0XHRcdFx0Y291cnMuLi5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdFx0e2xvYWRpbmcgJiYgKFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MnPlxyXG5cdFx0XHRcdFx0XHQ8U3Bpbm5lciAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0XHR7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LWRhbmdlcic+e2Vycm9yfTwvZGl2Pn1cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnRuIGJ0bi1pbmZvJz5cclxuXHRcdFx0XHRcdFx0TW9kaWZpZXIgY2V0dGUgcS9yXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoRm9ybVVwZGF0ZVFSKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==