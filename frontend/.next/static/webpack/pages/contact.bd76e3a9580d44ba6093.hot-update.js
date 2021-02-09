webpackHotUpdate_N_E("pages/contact",{

/***/ "./components/ContactForm.js":
/*!***********************************!*\
  !*** ./components/ContactForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");



var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\ContactForm.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var ContactForm = function ContactForm() {
  _s();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var _useState = useState({
    loading: false,
    success: '',
    error: ''
  }),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var success = values.success,
      loading = values.loading,
      error = values.error;

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
          loading: false
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
      lineNumber: 34,
      columnNumber: 3
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }
  }, "Contactez-nous"), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "col-md-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 6
    }
  }, "Vous souhaitez plus d'informations sur nos g\xEEtes, n'h\xE9sitez pas \xE0 nous contacter"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 6
    }
  }, "Entreprise : SAS WAO ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 28
    }
  }), " 1 route de Nouart ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 53
    }
  }), ' ', "08240 FOSS\xC9"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 6
    }
  }, "T\xE9l\xE9phone : ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 19
    }
  }), " Martine : 03 24 30 08 65 ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 51
    }
  }), " Jonas : 06 .. .. .. ..", ' '), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 6
    }
  }, "Mail :", ' ', __jsx("a", {
    href: "mailto:contact@gites-wao.fr",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, "contact@gites-wao.fr"))), __jsx("div", {
    className: "col-md-7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "exampleFormControlInput1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
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
      lineNumber: 63,
      columnNumber: 8
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "exampleFormControlInput1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
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
      lineNumber: 74,
      columnNumber: 8
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "exampleFormControlTextarea1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
      lineNumber: 86,
      columnNumber: 8
    }
  }))))));
};

_s(ContactForm, "L+vE8B/wG/v0VFkgNuMX8L8U5Q4=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0Rm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWN0Rm9ybSIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInVzZVN0YXRlIiwibG9hZGluZyIsInN1Y2Nlc3MiLCJlcnJvciIsInZhbHVlcyIsInNldFZhbHVlcyIsIm9uU3VibWl0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVQYXJ0ZW5haXJlIiwidG9rZW4iLCJ0aGVuIiwicmVzdWx0Iiwic2V0VGltZW91dCIsIlJvdXRlciIsInB1c2giLCJyZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGlCQUNVQywrREFBTyxFQURqQjtBQUFBLE1BQ2pCQyxRQURpQixZQUNqQkEsUUFEaUI7QUFBQSxNQUNQQyxZQURPLFlBQ1BBLFlBRE87O0FBQUEsa0JBR0dDLFFBQVEsQ0FBQztBQUNwQ0MsV0FBTyxFQUFFLEtBRDJCO0FBRXBDQyxXQUFPLEVBQUUsRUFGMkI7QUFHcENDLFNBQUssRUFBRTtBQUg2QixHQUFELENBSFg7QUFBQTtBQUFBLE1BR2xCQyxNQUhrQjtBQUFBLE1BR1ZDLFNBSFU7O0FBQUEsTUFRakJILE9BUmlCLEdBUVdFLE1BUlgsQ0FRakJGLE9BUmlCO0FBQUEsTUFRUkQsT0FSUSxHQVFXRyxNQVJYLENBUVJILE9BUlE7QUFBQSxNQVFDRSxLQVJELEdBUVdDLE1BUlgsQ0FRQ0QsS0FSRDs7QUFVekIsTUFBTUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRCxFQUFVO0FBQzFCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBRixhQUFTLGlDQUFNRCxNQUFOO0FBQWNILGFBQU8sRUFBRTtBQUF2QixPQUFUO0FBQ0FTLG9CQUFnQixDQUFDSCxJ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QUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFPLFdBQU8sRUFBQyw2QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELEVBSUM7QUFDQyxhQUFTLEVBQUMsY0FEWDtBQUVDLFFBQUksRUFBQyxTQUZOO0FBR0MsUUFBSSxFQUFDLEdBSE47QUFJQyxPQUFHLEVBQUVuQixRQUFRLENBQUM7QUFBRW1CLGNBQVEsRUFBRTtBQUFaLEtBQUQsQ0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkQsQ0F4QkQsQ0FERCxDQXJCRCxDQUZELENBREQ7QUFnRUEsQ0E3RkQ7O0dBQU1yQixXO1VBQzhCQyx1RDs7O0tBRDlCRCxXO0FBK0ZTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb250YWN0LmJkNzZlM2E5NTgwZDQ0YmE2MDkzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHsgQWxlcnQsIFNwaW5uZXIgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmNvbnN0IENvbnRhY3RGb3JtID0gKCkgPT4ge1xyXG5cdGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybSgpO1xyXG5cclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRzdWNjZXNzOiAnJyxcclxuXHRcdGVycm9yOiAnJyxcclxuXHR9KTtcclxuXHRjb25zdCB7IHN1Y2Nlc3MsIGxvYWRpbmcsIGVycm9yIH0gPSB2YWx1ZXM7XHJcblxyXG5cdGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdFx0Y3JlYXRlUGFydGVuYWlyZShkYXRhLCB0b2tlbikudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHRcdGlmIChyZXN1bHQuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiByZXN1bHQuZXJyb3IgfSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IHRydWUsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFJvdXRlci5wdXNoKCcvYWRtaW4vZ2VzdGlvbkRpdmVycy9wYXJ0ZW5haXJlcycpO1xyXG5cdFx0XHRcdH0sIDMwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBtdC01IG1iLTUnPlxyXG5cdFx0XHQ8aDI+Q29udGFjdGV6LW5vdXM8L2gyPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTUnPlxyXG5cdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFZvdXMgc291aGFpdGV6IHBsdXMgZCdpbmZvcm1hdGlvbnMgc3VyIG5vcyBnw650ZXMsXHJcblx0XHRcdFx0XHRcdG4naMOpc2l0ZXogcGFzIMOgIG5vdXMgY29udGFjdGVyXHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0RW50cmVwcmlzZSA6IFNBUyBXQU8gPGJyIC8+IDEgcm91dGUgZGUgTm91YXJ0IDxiciAvPnsnICd9XHJcblx0XHRcdFx0XHRcdDA4MjQwIEZPU1PDiVxyXG5cdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFTDqWzDqXBob25lIDogPGJyIC8+IE1hcnRpbmUgOiAwMyAyNCAzMCAwOCA2NSA8YnIgLz4gSm9uYXNcclxuXHRcdFx0XHRcdFx0OiAwNiAuLiAuLiAuLiAuLnsnICd9XHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0TWFpbCA6eycgJ31cclxuXHRcdFx0XHRcdFx0PGEgaHJlZj0nbWFpbHRvOmNvbnRhY3RAZ2l0ZXMtd2FvLmZyJz5cclxuXHRcdFx0XHRcdFx0XHRjb250YWN0QGdpdGVzLXdhby5mclxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC03Jz5cclxuXHRcdFx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPSdleGFtcGxlRm9ybUNvbnRyb2xJbnB1dDEnPlxyXG5cdFx0XHRcdFx0XHRcdFx0Tm9tIHByw6lub21cclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT0nbm9tJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9J2V4YW1wbGVGb3JtQ29udHJvbElucHV0MSc+XHJcblx0XHRcdFx0XHRcdFx0XHRNYWlsXHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J2VtYWlsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPSdtYWlsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPSdleGFtcGxlRm9ybUNvbnRyb2xUZXh0YXJlYTEnPlxyXG5cdFx0XHRcdFx0XHRcdFx0Vm90cmUgbWVzc2FnZVxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J21lc3NhZ2UnXHJcblx0XHRcdFx0XHRcdFx0XHRyb3dzPSczJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfT48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=