webpackHotUpdate_N_E("pages/admin/crud/images/add",{

/***/ "./components/admin/FormAddImages.js":
/*!*******************************************!*\
  !*** ./components/admin/FormAddImages.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\FormAddImages.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var FormCreateGite = function FormCreateGite() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      selectedFiles = _useState[0],
      setSelectedFiles = _useState[1];

  var handleImageChange = function handleImageChange(e) {
    // console.log(e.target.files[])
    if (e.target.files) {
      var filesArray = Array.from(e.target.files).map(function (file) {
        return URL.createObjectURL(file);
      }); // console.log("filesArray: ", filesArray);

      setSelectedFiles(function (prevImages) {
        return prevImages.concat(filesArray);
      });
      Array.from(e.target.files).map(function (file) {
        return URL.revokeObjectURL(file);
      } // avoid memory leak
      );
    }
  };

  var renderPhotos = function renderPhotos(source) {
    console.log('source: ', source);
    return source.map(function (photo) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: photo,
        alt: "",
        width: 320,
        height: 180,
        className: "img-thumbnail"
      }, photo, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }, _this);
    });
  };

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      formState = _useForm.formState;

  var isSubmitting = formState.isSubmitting;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    success: '',
    loading: false,
    error: ''
  }),
      values = _useState2[0],
      setValues = _useState2[1];

  var loading = values.loading,
      success = values.success,
      error = values.error;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      gites = _useState3[0],
      setGites = _useState3[1];

  var listDesGites = function listDesGites() {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_4__["listGitesNoms"])().then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        setGites.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(gites).concat([data]));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    listDesGites();
  }, []);
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_5__["getCookie"])('token');

  var onSubmit = function onSubmit(data) {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      loading: true
    }));
    console.log('data vaut =>', data);
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_4__["updateGite"])(data, token).then(function (result) {
      if (result.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: result.error
        }));
      } else {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          success: 'Les photos ont bien été envoyées',
          loading: false
        }));
        setTimeout(function () {
          Router.push('/admin/gestionImages');
        }, 3000);
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: handleSubmit(onSubmit),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-row align-items-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-auto my-1",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "mr-sm-2",
                htmlFor: "inlineFormCustomSelect",
                children: "G\xEEte/Section concern\xE9"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                name: "gite",
                ref: register({
                  required: true
                }),
                className: "custom-select mr-sm-2",
                id: "inlineFormCustomSelect",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  selected: true,
                  children: "Selection..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 10
                }, _this), gites.map(function (gite, i) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: gite.nom,
                    children: gite.nom
                  }, i, false, {
                    fileName: _jsxFileName,
                    lineNumber: 110,
                    columnNumber: 11
                  }, _this);
                }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "Autre",
                  children: "Autres pages"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
            className: "border p-2 mt-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
              className: "w-auto",
              children: "Ajout d'images"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "btn btn-outline-info",
                children: ["Photos", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  onChange: handleImageChange,
                  ref: register({
                    required: true
                  }),
                  name: "photos",
                  type: "file",
                  accept: "image/*",
                  multiple: true,
                  hidden: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          disabled: isSubmitting,
          className: "btn btn-info mt-3",
          children: "Ajouter ces images"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 4
    }, _this), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Spinner"], {
      color: "dark"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 16
    }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Alert"], {
      color: "success",
      children: "Les photos ont bien \xE9t\xE9 envoy\xE9es"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "result",
      children: renderPhotos(selectedFiles)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_s(FormCreateGite, "mRrLi0SUix61DrZqkzeh8Np8QS0=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9Gb3JtQWRkSW1hZ2VzLmpzIl0sIm5hbWVzIjpbIkZvcm1DcmVhdGVHaXRlIiwidXNlU3RhdGUiLCJzZWxlY3RlZEZpbGVzIiwic2V0U2VsZWN0ZWRGaWxlcyIsImhhbmRsZUltYWdlQ2hhbmdlIiwiZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZXNBcnJheSIsIkFycmF5IiwiZnJvbSIsIm1hcCIsImZpbGUiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJwcmV2SW1hZ2VzIiwiY29uY2F0IiwicmV2b2tlT2JqZWN0VVJMIiwicmVuZGVyUGhvdG9zIiwic291cmNlIiwiY29uc29sZSIsImxvZyIsInBob3RvIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiaXNTdWJtaXR0aW5nIiwic3VjY2VzcyIsImxvYWRpbmciLCJlcnJvciIsInZhbHVlcyIsInNldFZhbHVlcyIsImdpdGVzIiwic2V0R2l0ZXMiLCJsaXN0RGVzR2l0ZXMiLCJsaXN0R2l0ZXNOb21zIiwidGhlbiIsImRhdGEiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsImdldENvb2tpZSIsIm9uU3VibWl0IiwidXBkYXRlR2l0ZSIsInJlc3VsdCIsInNldFRpbWVvdXQiLCJSb3V0ZXIiLCJwdXNoIiwicmVxdWlyZWQiLCJnaXRlIiwiaSIsIm5vbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFBQSxrQkFDY0Msc0RBQVEsQ0FBQyxFQUFELENBRHRCO0FBQUEsTUFDckJDLGFBRHFCO0FBQUEsTUFDTkMsZ0JBRE07O0FBRzVCLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ2hDO0FBQ0Es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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTlDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxFQXdERUUsT0FBTyxpQkFBSSxxRUFBQyxrREFBRDtBQUFTLFdBQUssRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4RGIsRUF5REVELE9BQU8saUJBQ1AscUVBQUMsZ0RBQUQ7QUFBTyxXQUFLLEVBQUMsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFERixlQTREQztBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsZ0JBQXlCVixZQUFZLENBQUNoQixhQUFEO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1REQ7QUFBQSxrQkFERDtBQWdFQSxDQWxKRDs7R0FBTUYsYztVQW1DeUN1Qix1RDs7O0tBbkN6Q3ZCLGM7QUFvSlNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvaW1hZ2VzL2FkZC45N2FiOWExMDBmMTFmMDg3Y2ViNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXBkYXRlR2l0ZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCB7IGxpc3RHaXRlc05vbXMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IHsgU3Bpbm5lciwgQWxlcnQgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmNvbnN0IEZvcm1DcmVhdGVHaXRlID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtzZWxlY3RlZEZpbGVzLCBzZXRTZWxlY3RlZEZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlSW1hZ2VDaGFuZ2UgPSAoZSkgPT4ge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coZS50YXJnZXQuZmlsZXNbXSlcclxuXHRcdGlmIChlLnRhcmdldC5maWxlcykge1xyXG5cdFx0XHRjb25zdCBmaWxlc0FycmF5ID0gQXJyYXkuZnJvbShlLnRhcmdldC5maWxlcykubWFwKChmaWxlKSA9PlxyXG5cdFx0XHRcdFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSlcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKFwiZmlsZXNBcnJheTogXCIsIGZpbGVzQXJyYXkpO1xyXG5cclxuXHRcdFx0c2V0U2VsZWN0ZWRGaWxlcygocHJldkltYWdlcykgPT4gcHJldkltYWdlcy5jb25jYXQoZmlsZXNBcnJheSkpO1xyXG5cdFx0XHRBcnJheS5mcm9tKGUudGFyZ2V0LmZpbGVzKS5tYXAoXHJcblx0XHRcdFx0KGZpbGUpID0+IFVSTC5yZXZva2VPYmplY3RVUkwoZmlsZSkgLy8gYXZvaWQgbWVtb3J5IGxlYWtcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCByZW5kZXJQaG90b3MgPSAoc291cmNlKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZygnc291cmNlOiAnLCBzb3VyY2UpO1xyXG5cdFx0cmV0dXJuIHNvdXJjZS5tYXAoKHBob3RvKSA9PiB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0c3JjPXtwaG90b31cclxuXHRcdFx0XHRcdGFsdD0nJ1xyXG5cdFx0XHRcdFx0a2V5PXtwaG90b31cclxuXHRcdFx0XHRcdHdpZHRoPXszMjB9XHJcblx0XHRcdFx0XHRoZWlnaHQ9ezE4MH1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT0naW1nLXRodW1ibmFpbCdcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBmb3JtU3RhdGUgfSA9IHVzZUZvcm0oKTtcclxuXHRjb25zdCB7IGlzU3VibWl0dGluZyB9ID0gZm9ybVN0YXRlO1xyXG5cclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0c3VjY2VzczogJycsXHJcblx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdGVycm9yOiAnJyxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgeyBsb2FkaW5nLCBzdWNjZXNzLCBlcnJvciB9ID0gdmFsdWVzO1xyXG5cdGNvbnN0IFtnaXRlcywgc2V0R2l0ZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHRjb25zdCBsaXN0RGVzR2l0ZXMgPSAoKSA9PiB7XHJcblx0XHRsaXN0R2l0ZXNOb21zKCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRHaXRlcyguLi5naXRlcywgZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsaXN0RGVzR2l0ZXMoKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cclxuXHRjb25zdCBvblN1Ym1pdCA9IChkYXRhKSA9PiB7XHJcblx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUgfSk7XHJcblx0XHRjb25zb2xlLmxvZygnZGF0YSB2YXV0ID0+JywgZGF0YSk7XHJcblx0XHR1cGRhdGVHaXRlKGRhdGEsIHRva2VuKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0aWYgKHJlc3VsdC5lcnJvcikge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IHJlc3VsdC5lcnJvciB9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogJ0xlcyBwaG90b3Mgb250IGJpZW4gw6l0w6kgZW52b3nDqWVzJyxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Um91dGVyLnB1c2goJy9hZG1pbi9nZXN0aW9uSW1hZ2VzJyk7XHJcblx0XHRcdFx0fSwgMzAwMCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9J2NvbC1tZC04Jz48L2Rpdj4gKi99XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTQnPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1yb3cgYWxpZ24taXRlbXMtY2VudGVyJz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLWF1dG8gbXktMSc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdtci1zbS0yJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRodG1sRm9yPSdpbmxpbmVGb3JtQ3VzdG9tU2VsZWN0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0R8OudGUvU2VjdGlvbiBjb25jZXJuw6lcclxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0XHJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J2dpdGUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjdXN0b20tc2VsZWN0IG1yLXNtLTInXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSdpbmxpbmVGb3JtQ3VzdG9tU2VsZWN0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBzZWxlY3RlZD5TZWxlY3Rpb24uLi48L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2dpdGVzLm1hcCgoZ2l0ZSwgaSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17Z2l0ZS5ub219PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2dpdGUubm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nQXV0cmUnPkF1dHJlcyBwYWdlczwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZmllbGRzZXQgY2xhc3NOYW1lPSdib3JkZXIgcC0yIG10LTMnPlxyXG5cdFx0XHRcdFx0XHRcdDxsZWdlbmQgY2xhc3NOYW1lPSd3LWF1dG8nPkFqb3V0IGQnaW1hZ2VzPC9sZWdlbmQ+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2J0biBidG4tb3V0bGluZS1pbmZvJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0UGhvdG9zXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVJbWFnZUNoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0ncGhvdG9zJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J2ZpbGUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWNjZXB0PSdpbWFnZS8qJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG11bHRpcGxlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aGlkZGVuXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0dHlwZT0nc3VibWl0J1xyXG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2J0biBidG4taW5mbyBtdC0zJz5cclxuXHRcdFx0XHRcdFx0QWpvdXRlciBjZXMgaW1hZ2VzXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0XHR7bG9hZGluZyAmJiA8U3Bpbm5lciBjb2xvcj0nZGFyaycgLz59XHJcblx0XHRcdHtzdWNjZXNzICYmIChcclxuXHRcdFx0XHQ8QWxlcnQgY29sb3I9J3N1Y2Nlc3MnPkxlcyBwaG90b3Mgb250IGJpZW4gw6l0w6kgZW52b3nDqWVzPC9BbGVydD5cclxuXHRcdFx0KX1cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jlc3VsdCc+e3JlbmRlclBob3RvcyhzZWxlY3RlZEZpbGVzKX08L2Rpdj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtQ3JlYXRlR2l0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==