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
/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\FormUpdateQR.js",
    _this = undefined,
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var FormUpdateQR = function FormUpdateQR(_ref) {
  _s2();

  var _s = $RefreshSig$();

  var router = _ref.router;
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_8__["getCookie"])('token');
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(_s(function () {
    _s();

    initQR();

    var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_9__["useForm"])({
      defaultValues: preloadedValues
    }),
        register = _useForm.register,
        handleSubmit = _useForm.handleSubmit,
        watch = _useForm.watch,
        errors = _useForm.errors;
  }, "+Nrz0BYUZDnkIuhmBbPsJSfSlWM=", false, function () {
    return [react_hook_form__WEBPACK_IMPORTED_MODULE_9__["useForm"]];
  }), [router]);

  var initQR = function initQR(params) {
    var preloadedValues = {};

    if (router.query.id) {
      Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_6__["listeOneQR"])(router.query.id).then(function (data) {
        if (data.error) {
          console.log(data.error);
        } else {
          preloadedValues = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_4__["default"])("preloadedValues"), {
            question: data.question,
            reponse: data.reponse
          }); // setValues({
          // 	...values,
          // 	question: data.question,
          // 	reponse: data.reponse,
          // });
        }
      });
    }
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
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
                    next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/admin/gestionDivers/FAQ');
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
              lineNumber: 78,
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
              lineNumber: 79,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "R\xE9ponse"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
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
              lineNumber: 90,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 5
      }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "alert alert-success",
        children: "La question/r\xE9ponse \xE0 bien \xE9t\xE9 ajout\xE9e, redirection en cours..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 6
      }, _this), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "alert alert-success",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Spinner"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 7
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 6
      }, _this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "alert alert-danger",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-info",
          children: "Cr\xE9er cette q/r"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 4
    }, _this)
  }, void 0, false);
};

_s2(FormUpdateQR, "cV9mPFBJSe3bqnNBO8UCfl5kqVs=");

_c = FormUpdateQR;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(FormUpdateQR));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9Gb3JtVXBkYXRlUVIuanMiXSwibmFtZXMiOlsiRm9ybVVwZGF0ZVFSIiwicm91dGVyIiwidG9rZW4iLCJnZXRDb29raWUiLCJ1c2VFZmZlY3QiLCJpbml0UVIiLCJ1c2VGb3JtIiwiZGVmYXVsdFZhbHVlcyIsInByZWxvYWRlZFZhbHVlcyIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwid2F0Y2giLCJlcnJvcnMiLCJwYXJhbXMiLCJxdWVyeSIsImlkIiwibGlzdGVPbmVRUiIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicXVlc3Rpb24iLCJyZXBvbnNlIiwidXNlU3RhdGUiLCJzdWNjZXNzIiwibG9hZGluZyIsInZhbHVlcyIsInNldFZhbHVlcyIsIm9uU3VibWl0IiwidXBkYXRlUVIiLCJyZXN1bHQiLCJzZXRUaW1lb3V0IiwiUm91dGVyIiwicHVzaCIsInJlcXVpcmVkIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFnQjtBQUFBOztBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUNwQyxNQUFNQyxLQUFLLEdBQUdDLHNFQUFTLENBQUMsT0FBRCxDQUF2QjtBQUVBQyx5REFBUyxJQUFDLFlBQU07QUFBQTs7QUFDZkMsVUFBTTs7QUFEUyxtQkFFbUNDLCtEQUFPLENBQUM7QUFDekRDLG1CQUFhLEVBQUVDO0FBRDBDLEtBQUQsQ0FGMUM7QUFBQSxRQUVQQyxRQUZPLFlBRVBBLFFBRk87QUFBQSxRQUVHQyxZQUZILFlBRUdBLFlBRkg7QUFBQSxRQUVpQkMsS0FGakIsWUFFaUJBLEtBRmpCO0FBQUEsUUFFd0JDLE1BRnhCLFlBRXdCQSxNQUZ4QjtBQUtm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RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbENGLEVBc0NFUCxLQUFLLGlCQUFJO0FBQUssaUJBQVMsRUFBQyxvQkFBZjtBQUFBLGtCQUFxQ0E7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRDWCxlQXVDQztBQUFBLCtCQUNDO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBc0IsbUJBQVMsRUFBQyxjQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2Q0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsbUJBREQ7QUFpREEsQ0FoSEQ7O0lBQU1uQixZOztLQUFBQSxZO0FBa0hTLHFFQUFBb0MsK0RBQVUsQ0FBQ3BDLFlBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9kaXZlcnMvcXIvW2lkXS4wNjdmY2NmYjBmYWVlYThhNjZkZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlUVIsIGxpc3RlT25lUVIgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgRm9ybVVwZGF0ZVFSID0gKHsgcm91dGVyIH0pID0+IHtcclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGluaXRRUigpO1xyXG5cdFx0Y29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCB3YXRjaCwgZXJyb3JzIH0gPSB1c2VGb3JtKHtcclxuXHRcdFx0ZGVmYXVsdFZhbHVlczogcHJlbG9hZGVkVmFsdWVzLFxyXG5cdFx0fSk7XHJcblx0fSwgW3JvdXRlcl0pO1xyXG5cclxuXHRjb25zdCBpbml0UVIgPSAocGFyYW1zKSA9PiB7XHJcblx0XHRjb25zdCBwcmVsb2FkZWRWYWx1ZXMgPSB7fTtcclxuXHRcdGlmIChyb3V0ZXIucXVlcnkuaWQpIHtcclxuXHRcdFx0bGlzdGVPbmVRUihyb3V0ZXIucXVlcnkuaWQpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHByZWxvYWRlZFZhbHVlcyA9IHtcclxuXHRcdFx0XHRcdFx0cXVlc3Rpb246IGRhdGEucXVlc3Rpb24sXHJcblx0XHRcdFx0XHRcdHJlcG9uc2U6IGRhdGEucmVwb25zZSxcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHQvLyBzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0Ly8gXHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHQvLyBcdHF1ZXN0aW9uOiBkYXRhLnF1ZXN0aW9uLFxyXG5cdFx0XHRcdFx0Ly8gXHRyZXBvbnNlOiBkYXRhLnJlcG9uc2UsXHJcblx0XHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRxdWVzdGlvbjogJycsXHJcblx0XHRyZXBvbnNlOiAnJyxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRlcnJvcjogJycsXHJcblx0fSk7XHJcblx0Y29uc3QgeyBxdWVzdGlvbiwgcmVwb25zZSwgc3VjY2VzcywgbG9hZGluZywgZXJyb3IgfSA9IHZhbHVlcztcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdFx0Y29uc29sZS5sb2coJ2RhdGEgdmF1dCA9PicsIGRhdGEpO1xyXG5cdFx0dXBkYXRlUVIoZGF0YSwgdG9rZW4pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygncmVzdWx0IHZhdXQgPT4nLCByZXN1bHQpO1xyXG5cdFx0XHRpZiAocmVzdWx0LmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3VuZSBncm9zc2UgZXJyZXVyJyk7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogcmVzdWx0LmVycm9yIH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRxdWVzdGlvbjogJycsXHJcblx0XHRcdFx0XHRyZXBvbnNlOiAnJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IHRydWUsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFJvdXRlci5wdXNoKCcvYWRtaW4vZ2VzdGlvbkRpdmVycy9GQVEnKTtcclxuXHRcdFx0XHR9LCAyMDAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtMTInPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+UXVlc3Rpb248L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J3F1ZXN0aW9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gdmFsdWU9e3F1ZXN0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRjb2xzPSczMCdcclxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9JzInPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+UsOpcG9uc2U8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J3JlcG9uc2UnXHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHQvLyB2YWx1ZT17cmVwb25zZX1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29scz0nMzAnXHJcblx0XHRcdFx0XHRcdFx0XHRyb3dzPSc1Jz48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdHtzdWNjZXNzICYmIChcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdhbGVydCBhbGVydC1zdWNjZXNzJz5cclxuXHRcdFx0XHRcdFx0TGEgcXVlc3Rpb24vcsOpcG9uc2Ugw6AgYmllbiDDqXTDqSBham91dMOpZSwgcmVkaXJlY3Rpb24gZW5cclxuXHRcdFx0XHRcdFx0Y291cnMuLi5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdFx0e2xvYWRpbmcgJiYgKFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MnPlxyXG5cdFx0XHRcdFx0XHQ8U3Bpbm5lciAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0XHR7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LWRhbmdlcic+e2Vycm9yfTwvZGl2Pn1cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnRuIGJ0bi1pbmZvJz5cclxuXHRcdFx0XHRcdFx0Q3LDqWVyIGNldHRlIHEvclxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEZvcm1VcGRhdGVRUik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=