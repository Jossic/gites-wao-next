webpackHotUpdate_N_E("pages/gite/[slug]",{

/***/ "./components/ContactForm.js":
/*!***********************************!*\
  !*** ./components/ContactForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");


var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\ContactForm.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var ContactForm = function ContactForm() {
  _s();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    loading: false,
    success: '',
    error: '',
    message: ''
  }),
      values = _useState[0],
      setValues = _useState[1];

  var success = values.success,
      loading = values.loading,
      error = values.error,
      message = values.message;

  var onSubmit = function onSubmit(data) {
    console.log(data);
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      loading: true
    }));
    createPartenaire(data, token).then(function (result) {
      if (result.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: result.error
        }));
      } else {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          success: true,
          loading: false,
          message: data.message
        }));
        setTimeout(function () {
          Router.push('/admin/gestionDivers/partenaires');
        }, 3000);
      }
    });
  };

  return __jsx("div", {
    className: "container mt-5 mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 3
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }
  }, "Contactez-nous"), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "col-md-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 6
    }
  }, "Vous souhaitez plus d'informations sur nos g\xEEtes, n'h\xE9sitez pas \xE0 nous contacter"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 6
    }
  }, "Entreprise : SAS WAO ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 28
    }
  }), " 1 route de Nouart ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 53
    }
  }), ' ', "08240 FOSS\xC9"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 6
    }
  }, "T\xE9l\xE9phone : ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }
  }), " Martine : 03 24 30 08 65 ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 51
    }
  }), " Jonas : 06 .. .. .. ..", ' '), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 6
    }
  }, "Mail :", ' ', __jsx("a", {
    href: "mailto:contact@gites-wao.fr",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, "contact@gites-wao.fr"))), __jsx("div", {
    className: "col-md-7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "exampleFormControlInput1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 8
    }
  }, "Nom pr\xE9nom"), __jsx("input", {
    type: "text",
    className: "form-control",
    name: "nom",
    ref: register({
      required: true
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 8
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "exampleFormControlInput1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 8
    }
  }, "Mail"), __jsx("input", {
    type: "email",
    className: "form-control",
    name: "mail",
    ref: register({
      required: true
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 8
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "exampleFormControlTextarea1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 8
    }
  }, "Votre message"), __jsx("textarea", {
    className: "form-control",
    name: "message",
    rows: "3",
    ref: register({
      required: true
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 8
    }
  })), success && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    color: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 19
    }
  }, message), loading && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Spinner"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 19
    }
  }), error && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    color: "danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, error), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, __jsx("button", {
    type: "submit",
    className: "btn btn-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 8
    }
  }, "Cr\xE9er cette cat\xE9gorie"))))));
};

_s(ContactForm, "ajM2Ty5/VUjbtfil4t4U7vha9G4=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"]];
});

_c = ContactForm;
/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

var _c;

$RefreshReg$(_c, "ContactForm");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0Rm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWN0Rm9ybSIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInVzZVN0YXRlIiwibG9hZGluZyIsInN1Y2Nlc3MiLCJlcnJvciIsIm1lc3NhZ2UiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJvblN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlUGFydGVuYWlyZSIsInRva2VuIiwidGhlbiIsInJlc3VsdCIsInNldFRpbWVvdXQiLCJSb3V0ZXIiLCJwdXNoIiwicmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxpQkFDVUMsK0RBQU8sRUFEakI7QUFBQSxNQUNqQkMsUUFEaUIsWUFDakJBLFFBRGlCO0FBQUEsTUFDUEMsWUFETyxZQUNQQSxZQURPOztBQUFBLGtCQUdHQyxzREFBUSxDQUFDO0FBQ3BDQyxXQUFPLEVBQUUsS0FEMkI7QUFFcENDLFdBQU8sRUFBRSxFQUYyQjtBQUdwQ0MsU0FBSyxFQUFFLEVBSDZCO0FBSXBDQyxXQUFPLEVBQUU7QUFKMkIsR0FBRCxDQUhYO0FBQUEsTUFHbEJDLE1BSGtCO0FBQUEsTUFHVkMsU0FIVTs7QUFBQSxNQVNqQkosT0FUaUIsR0FTb0JHLE1BVHBCLENBU2pCSCxPQVRpQjtBQUFBLE1BU1JELE9BVFEsR0FTb0JJLE1BVHBCLENBU1JKLE9BVFE7QUFBQSxNQVNDRSxLQVRELEdBU29CRSxNQVRwQixDQVNDRixLQVREO0FBQUEsTUFTUUMsT0FUUixHQVNvQkMsTUFUcEIsQ0FTUUQsT0FUUjs7QUFXekIsTUFBTUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRCxFQUFVO0FBQzFCQyxXQUFPLENBQUNDLEdBQVIsQ0FB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dGljL3dlYnBhY2svcGFnZXMvZ2l0ZS9bc2x1Z10uNzY1YWViNjgxNjQxZjMxNDAyNWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHsgQWxlcnQsIFNwaW5uZXIgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmNvbnN0IENvbnRhY3RGb3JtID0gKCkgPT4ge1xyXG5cdGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybSgpO1xyXG5cclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRzdWNjZXNzOiAnJyxcclxuXHRcdGVycm9yOiAnJyxcclxuXHRcdG1lc3NhZ2U6ICcnLFxyXG5cdH0pO1xyXG5cdGNvbnN0IHsgc3VjY2VzcywgbG9hZGluZywgZXJyb3IsIG1lc3NhZ2UgfSA9IHZhbHVlcztcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUgfSk7XHJcblx0XHRjcmVhdGVQYXJ0ZW5haXJlKGRhdGEsIHRva2VuKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0aWYgKHJlc3VsdC5lcnJvcikge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IHJlc3VsdC5lcnJvciB9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogZGF0YS5tZXNzYWdlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Um91dGVyLnB1c2goJy9hZG1pbi9nZXN0aW9uRGl2ZXJzL3BhcnRlbmFpcmVzJyk7XHJcblx0XHRcdFx0fSwgMzAwMCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIG10LTUgbWItNSc+XHJcblx0XHRcdDxoMj5Db250YWN0ZXotbm91czwvaDI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNSc+XHJcblx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0Vm91cyBzb3VoYWl0ZXogcGx1cyBkJ2luZm9ybWF0aW9ucyBzdXIgbm9zIGfDrnRlcyxcclxuXHRcdFx0XHRcdFx0bidow6lzaXRleiBwYXMgw6Agbm91cyBjb250YWN0ZXJcclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRFbnRyZXByaXNlIDogU0FTIFdBTyA8YnIgLz4gMSByb3V0ZSBkZSBOb3VhcnQgPGJyIC8+eycgJ31cclxuXHRcdFx0XHRcdFx0MDgyNDAgRk9TU8OJXHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0VMOpbMOpcGhvbmUgOiA8YnIgLz4gTWFydGluZSA6IDAzIDI0IDMwIDA4IDY1IDxiciAvPiBKb25hc1xyXG5cdFx0XHRcdFx0XHQ6IDA2IC4uIC4uIC4uIC4ueycgJ31cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRNYWlsIDp7JyAnfVxyXG5cdFx0XHRcdFx0XHQ8YSBocmVmPSdtYWlsdG86Y29udGFjdEBnaXRlcy13YW8uZnInPlxyXG5cdFx0XHRcdFx0XHRcdGNvbnRhY3RAZ2l0ZXMtd2FvLmZyXHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTcnPlxyXG5cdFx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9J2V4YW1wbGVGb3JtQ29udHJvbElucHV0MSc+XHJcblx0XHRcdFx0XHRcdFx0XHROb20gcHLDqW5vbVxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPSdub20nXHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj0nZXhhbXBsZUZvcm1Db250cm9sSW5wdXQxJz5cclxuXHRcdFx0XHRcdFx0XHRcdE1haWxcclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0nZW1haWwnXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J21haWwnXHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9J2V4YW1wbGVGb3JtQ29udHJvbFRleHRhcmVhMSc+XHJcblx0XHRcdFx0XHRcdFx0XHRWb3RyZSBtZXNzYWdlXHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWFcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT0nbWVzc2FnZSdcclxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9JzMnXHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9PjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHR7c3VjY2VzcyAmJiA8QWxlcnQgY29sb3I9J3N1Y2Nlc3MnPnttZXNzYWdlfTwvQWxlcnQ+fVxyXG5cdFx0XHRcdFx0XHR7bG9hZGluZyAmJiA8U3Bpbm5lciAvPn1cclxuXHRcdFx0XHRcdFx0e2Vycm9yICYmIDxBbGVydCBjb2xvcj0nZGFuZ2VyJz57ZXJyb3J9PC9BbGVydD59XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0biBidG4taW5mbyc+XHJcblx0XHRcdFx0XHRcdFx0XHRDcsOpZXIgY2V0dGUgY2F0w6lnb3JpZVxyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=