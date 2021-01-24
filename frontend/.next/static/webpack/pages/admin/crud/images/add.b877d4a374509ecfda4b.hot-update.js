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
/* harmony import */ var _actions_uploadActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/uploadActions */ "./actions/uploadActions.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





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
    // console.log('source: ', source);
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
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_7__["listGitesNoms"])().then(function (data) {
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
    var formDataImage = new FormData();
    var formDataImageInfo = new FormData(); // formData.append('photo', data.photo[0]);

    formDataImageInfo.append('alt', data.alt);
    formDataImageInfo.append('nom', data.nom);
    formDataImageInfo.append('page', data.page);
    formDataImageInfo.append('section', data.section);
    formDataImage.append('photo', data.photo[0]);
    console.log('formData vaut =>', formData);
    Object(_actions_uploadActions__WEBPACK_IMPORTED_MODULE_4__["uploadPhotoData"])(formData, token).then(function (result) {
      if (result.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: result.error
        }));
      } else {
        console.log('data donne ici =>', data);
        Object(_actions_uploadActions__WEBPACK_IMPORTED_MODULE_4__["uploadPhoto"])(formData, token).then(function (result2) {
          if (result2.error) {
            setValues(_objectSpread(_objectSpread({}, values), {}, {
              error: result2.error
            }));
          }

          setValues(_objectSpread(_objectSpread({}, values), {}, {
            success: 'Les informations ont bien été envoyées',
            loading: false
          }));
          setTimeout(function () {
            Router.push('/admin/gestionImages');
          }, 3000);
        });
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: handleSubmit(onSubmit),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-6",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-row align-items-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-auto my-1",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
                className: "border p-2 mt-3",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
                  className: "w-auto",
                  children: "Ajout d'image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 10
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "form-group",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    className: "btn btn-outline-info",
                    children: ["Photo", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      onChange: handleImageChange,
                      ref: register({
                        required: true
                      }),
                      name: "photo",
                      type: "file",
                      accept: "image/*",
                      hidden: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 122,
                      columnNumber: 12
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
                className: "border p-2 mt-3",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
                  className: "w-auto",
                  children: "Concerne la page et section"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 10
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  className: "mr-sm-2 pt-2",
                  htmlFor: "inlineFormCustomSelect",
                  children: "Page associ\xE9e"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 10
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                  name: "page",
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
                    lineNumber: 149,
                    columnNumber: 11
                  }, _this), gites.map(function (gite, i) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                      value: gite.slug,
                      children: gite.nom
                    }, i, false, {
                      fileName: _jsxFileName,
                      lineNumber: 151,
                      columnNumber: 12
                    }, _this);
                  }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "Autre",
                    children: "Autres pages"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 10
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  className: "mr-sm-2 pt-2",
                  htmlFor: "inlineFormCustomSelect",
                  children: "Section associ\xE9e"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 159,
                  columnNumber: 10
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                  name: "section",
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
                    lineNumber: 169,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "Autre",
                    children: "Autres sections"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 170,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "presentation",
                    children: "Pr\xE9sentation"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 173,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "piscine",
                    children: "Piscine"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 176,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "interieur",
                    children: "Int\xE9rieur"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 177,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
                className: "border p-2 mt-3",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
                  className: "w-auto",
                  children: "Infos de l'image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 183,
                  columnNumber: 10
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    className: "text-muted",
                    children: "Nom de l'image"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 187,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    className: "form-control",
                    ref: register,
                    type: "text",
                    name: "nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 190,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 10
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    className: "text-muted",
                    children: "Texte alternatif"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 198,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    className: "form-control",
                    ref: register,
                    type: "text",
                    name: "alt"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 201,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 197,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "result col-md-6",
          children: renderPhotos(selectedFiles)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          disabled: isSubmitting,
          className: "btn btn-info mt-3",
          children: "Ajouter ces images"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 4
    }, _this), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Spinner"], {
      color: "dark"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 16
    }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Alert"], {
      color: "success",
      children: "Les photos ont bien \xE9t\xE9 envoy\xE9es"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9Gb3JtQWRkSW1hZ2VzLmpzIl0sIm5hbWVzIjpbIkZvcm1DcmVhdGVHaXRlIiwidXNlU3RhdGUiLCJzZWxlY3RlZEZpbGVzIiwic2V0U2VsZWN0ZWRGaWxlcyIsImhhbmRsZUltYWdlQ2hhbmdlIiwiZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZXNBcnJheSIsIkFycmF5IiwiZnJvbSIsIm1hcCIsImZpbGUiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJwcmV2SW1hZ2VzIiwiY29uY2F0IiwicmV2b2tlT2JqZWN0VVJMIiwicmVuZGVyUGhvdG9zIiwic291cmNlIiwicGhvdG8iLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJmb3JtU3RhdGUiLCJpc1N1Ym1pdHRpbmciLCJzdWNjZXNzIiwibG9hZGluZyIsImVycm9yIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiZ2l0ZXMiLCJzZXRHaXRlcyIsImxpc3REZXNHaXRlcyIsImxpc3RHaXRlc05vbXMiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsImdldENvb2tpZSIsIm9uU3VibWl0IiwiZm9ybURhdGFJbWFnZSIsIkZvcm1EYXRhIiwiZm9ybURhdGFJbWFnZUluZm8iLCJhcHBlbmQiLCJhbHQiLCJub20iLCJwYWdlIiwic2VjdGlvbiIsImZvcm1EYXRhIiwidXBsb2FkUGhvdG9EYXRhIiwicmVzdWx0IiwidXBsb2FkUGhvdG8iLCJyZXN1bHQyIiwic2V0VGltZW91dCIsIlJvdXRlciIsInB1c2giLCJyZXF1aXJlZCIsImdpdGUiLCJpIiwic2x1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQUE7O0FBQUEsa0JBQ2NDLHNEQUFRLENBQUMsRUFBRCxDQUR0QjtBQUFBLE1BQ3JCQyxhQURxQjtBQUFBLE1BQ05DLGdCQURNOztBQUc1QixNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLENBQUQsRUFBTztBQUNoQztBQUNBLFFBQUlBLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFiLEVBQW9CO0FBQ25CLFVBQU1DLFVBQVUsR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVdMLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFwQixFQUEyQkksR0FBM0IsQ0FBK0IsVUFBQ0MsSUFBRDtBQUFBLGVBQ2pEQyxHQUFHLENBQUNDLGVBQUosQ0FBb0JGLElBQXBCLENBRGlEO0FBQUEsT0FBL0IsQ0FBbkIsQ0FEbUIsQ0FLbkI7O0FBRUFULHNCQUFnQixDQUFDLFVBQUNZLFVBQUQ7QUFBQSxlQUFnQkEsVUFBVSxDQUFDQyxNQUFYLENBQWtCUixVQUFsQixDQUFoQjtBQUFBLE9BQUQsQ0FBaEI7QUFDQUMsV0FBSyxDQUFDQyxJQUFOLENBQVdMLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFwQixFQUEyQkksR0FBM0IsQ0FDQyxVQUFDQyxJQUFEO0FBQUEsZUFBVUMsR0FBRyxDQUFDSSxlQUFKLENBQW9CTCxJQUFwQixDQUFWO0FBQUEsT0FERCxDQUNxQztBQURyQztBQUdBO0FBQ0QsR0FkRDs7QUFnQkEsTUFBTU0sWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsTUFBRCxFQUFZO0FBQ2hDO0FBQ0EsV0FBT0EsTUFBTSxDQUFDUixHQUFQLENBQVcsVUFBQ1MsS0FBRCxFQUFXO0FBQzVCLDBCQUNDO0FBQ0MsV0FBRyxFQUFFQSxLQUROO0FBRUMsV0FBRyxFQUFDLEVBRkw7QUFJQyxhQUFLLEVBQUUsR0FKUjtBQUtDLGNBQU0sRUFBRSxHQUxUO0FBTUMsaUJBQVMsRUFBQztBQU5YLFNBR01BLEtBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBVUEsS0FYTSxDQUFQO0FBWUEsR0FkRDs7QUFuQjRCLGlCQW1Da0JDLCtEQUFPLEVBbkN6QjtBQUFBLE1BbUNwQkMsUUFuQ29CLFlBbUNwQkEsUUFuQ29CO0FBQUEsTUFtQ1ZDLFlBbkNVLFlBbUNWQSxZQW5DVTtBQUFBLE1BbUNJQyxTQW5DSixZQW1DSUEsU0FuQ0o7O0FBQUEsTUFvQ3BCQyxZQXBDb0IsR0FvQ0hELFNBcENHLENBb0NwQkMsWUFwQ29COztBQUFBLG1CQXNDQXhCLHNEQUFRLENBQUM7QUFDcEN5QixXQUFPLEVBQUUsRUFEMkI7QUFFcENDLFdBQU8sRUFBRSxLQUYyQjtBQUdwQ0MsU0FBSyxFQUFFO0FBSDZCLEdBQUQsQ0F0Q1I7QUFBQSxNQXNDckJDLE1BdENxQjtBQUFBLE1Bc0NiQyxTQXRDYTs7QUFBQSxNQTRDcEJILE9BNUNvQixHQTRDUUUsTUE1Q1IsQ0E0Q3BCRixPQTVDb0I7QUFBQSxNQTRDWEQsT0E1Q1csR0E0Q1FHLE1BNUNSLENBNENYSCxPQTVDVztBQUFBLE1BNENGRSxLQTVDRSxHQTRDUUMsTUE1Q1IsQ0E0Q0ZELEtBNUNFOztBQUFBLG1CQTZDRjNCLHNEQUFRLENBQUMsRUFBRCxDQTdDTjtBQUFBLE1BNkNyQjhCLEtBN0NxQjtBQUFBLE1BNkNkQyxRQTdDYzs7QUErQzVCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDMUJDLDhFQUFhLEdBQUdDLElBQWhCLENBQXFCLFVBQUNDLElBQUQsRUFBVTtBQUM5QixVQUFJQSxJQUFJLENBQUNSLEtBQVQsRUFBZ0I7QUFDZlMsZUFBTyxDQUFDQyxHQUFSLENBQVlWLEtBQVo7QUFDQSxPQUZELE1BRU87QUFDTkksZ0JBQVEsTUFBUixzR0FBWUQsS0FBWixVQUFtQkssSUFBbkI7QUFDQTtBQUNELEtBTkQ7QUFPQSxHQVJEOztBQVVBRyx5REFBUyxDQUFDLFlBQU07QUFDZk4sZ0JBQVk7QUFDWixHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsTUFBTU8sS0FBSyxHQUFHQyxzRUFBUyxDQUFDLE9BQUQsQ0FBdkI7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ04sSUFBRCxFQUFVO0FBQzFCTixhQUFTLGlDQUFNRCxNQUFOO0FBQWNGLGFBQU8sRUFBRTtBQUF2QixPQUFUO0FBQ0EsUUFBSWdCLGFBQWEsR0FBRyxJQUFJQyxRQUFKLEVBQXBCO0FBQ0EsUUFBSUMsaUJBQWlCLEdBQUcsSUFBSUQsUUFBSixFQUF4QixDQUgwQixDQUkxQjs7QUFDQUMscUJBQWlCLENBQUNDLE1BQWxCLENBQXlCLEtBQXpCLEVBQWdDVixJQUFJLENBQUNXLEdBQXJDO0FBQ0FGLHFCQUFpQixDQUFDQyxNQUFsQixDQUF5QixLQUF6QixFQUFnQ1YsSUFBSSxDQUFDWSxHQUFyQztBQUNBSCxxQkFBaUIsQ0FBQ0MsTUFBbEIsQ0FBeUIsTUFBekIsRUFBaUNWLElBQUksQ0FBQ2EsSUFBdEM7QUFDQUoscUJBQWlCLENBQUNDLE1BQWxCLENBQXlCLFNBQXpCLEVBQW9DVixJQUFJLENBQUNjLE9BQXpDO0FBQ0FQLGlCQUFhLENBQUNHLE1BQWQsQ0FBcUIsT0FBckIsRUFBOEJWLElBQUksQ0FBQ2hCLEtBQUwsQ0FBVyxDQUFYLENBQTlCO0FBRUFpQixXQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWixFQUFnQ2EsUUFBaEM7QUFFQUMsa0ZBQWUsQ0FBQ0QsUUFBRCxFQUFXWCxLQUFYLENBQWYsQ0FBaUNMLElBQWpDLENBQXNDLFVBQUNrQixNQUFELEVBQVk7QUFDakQsVUFBSUEsTUFBTSxDQUFDekIsS0FBWCxFQUFrQjtBQUNqQkUsaUJBQVMsaUNBQU1ELE1BQU47QUFBY0QsZUFBSyxFQUFFeUIsTUFBTSxDQUFDekI7QUFBNUIsV0FBVDtBQUNBLE9BRkQsTUFFTztBQUNOUyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0YsSUFBakM7QUFDQWtCLGtGQUFXLENBQUNILFFBQUQsRUFBV1gsS0FBWCxDQUFYLENBQTZCTCxJQUE3QixDQUFrQyxVQUFDb0IsT0FBRCxFQUFhO0FBQzlDLGNBQUlBLE9BQU8sQ0FBQzNCLEtBQVosRUFBbUI7QUFDbEJFLHFCQUFTLGlDQUFNRCxNQUFOO0FBQWNELG1CQUFLLEVBQUUyQixPQUFPLENBQUMzQjtBQUE3QixlQUFUO0FBQ0E7O0FBQ0RFLG1CQUFTLGlDQUNMRCxNQURLO0FBRVJILG1CQUFPLEVBQUUsd0NBRkQ7QUFHUkMsbUJBQU8sRUFBRTtBQUhELGFBQVQ7QUFLQTZCLG9CQUFVLENBQUMsWUFBTTtBQUNoQkMsa0JBQU0sQ0FBQ0MsSUFBUCxDQUFZLHNCQUFaO0FBQ0EsV0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdBLFNBWkQ7QUFhQTtBQUNELEtBbkJEO0FBb0JBLEdBakNEOztBQW1DQSxzQkFDQztBQUFBLDRCQUNDO0FBQU0sY0FBUSxFQUFFbkMsWUFBWSxDQUFDbUIsUUFBRCxDQUE1QjtBQUFBLDhCQUNDO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsZ0NBRUM7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxpQ0FDQztBQUFLLHFCQUFTLEVBQUMsNkJBQWY7QUFBQSxtQ0FDQztBQUFLLHVCQUFTLEVBQUMsZUFBZjtBQUFBLHNDQUNDO0FBQVUseUJBQVMsRUFBQyxpQkFBcEI7QUFBQSx3Q0FDQztBQUFRLDJCQUFTLEVBQUMsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREQsZUFLQztBQUFLLDJCQUFTLEVBQUMsWUFBZjtBQUFBLHlDQUNDO0FBQU8sNkJBQVMsRUFBQyxzQkFBakI7QUFBQSxxREFFQztBQUNDLDhCQUFRLEVBQUV0QyxpQkFEWDtBQUVDLHlCQUFHLEVBQUVrQixRQUFRLENBQUM7QUFDYnFDLGdDQUFRLEVBQUU7QUFERyx1QkFBRCxDQUZkO0FBS0MsMEJBQUksRUFBQyxPQUxOO0FBTUMsMEJBQUksRUFBQyxNQU5OO0FBT0MsNEJBQU0sRUFBQyxTQVBSO0FBUUMsNEJBQU07QUFSUDtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURELGVBc0JDO0FBQVUseUJBQVMsRUFBQyxpQkFBcEI7QUFBQSx3Q0FDQztBQUFRLDJCQUFTLEVBQUMsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREQsZUFJQztBQUNDLDJCQUFTLEVBQUMsY0FEWDtBQUVDLHlCQUFPLEVBQUMsd0JBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkQsZUFTQztBQUNDLHNCQUFJLEVBQUMsTUFETjtBQUVDLHFCQUFHLEVBQUVyQyxRQUFRLENBQUM7QUFBRXFDLDRCQUFRLEVBQUU7QUFBWixtQkFBRCxDQUZkO0FBR0MsMkJBQVMsRUFBQyx1QkFIWDtBQUlDLG9CQUFFLEVBQUMsd0JBSko7QUFBQSwwQ0FLQztBQUFRLDRCQUFRLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUxELEVBTUU1QixLQUFLLENBQUNwQixHQUFOLENBQVUsVUFBQ2lELElBQUQsRUFBT0MsQ0FBUDtBQUFBLHdDQUNWO0FBQWdCLDJCQUFLLEVBQUVELElBQUksQ0FBQ0UsSUFBNUI7QUFBQSxnQ0FDRUYsSUFBSSxDQUFDWjtBQURQLHVCQUFhYSxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRFU7QUFBQSxtQkFBVixDQU5GLGVBV0M7QUFBUSx5QkFBSyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVRELGVBd0JDO0FBQ0MsMkJBQVMsRUFBQyxjQURYO0FBRUMseUJBQU8sRUFBQyx3QkFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkF4QkQsZUE2QkM7QUFDQyxzQkFBSSxFQUFDLFNBRE47QUFFQyxxQkFBRyxFQUFFdkMsUUFBUSxDQUFDO0FBQUVxQyw0QkFBUSxFQUFFO0FBQVosbUJBQUQsQ0FGZDtBQUdDLDJCQUFTLEVBQUMsdUJBSFg7QUFJQyxvQkFBRSxFQUFDLHdCQUpKO0FBQUEsMENBS0M7QUFBUSw0QkFBUSxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFMRCxlQU1DO0FBQVEseUJBQUssRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQU5ELGVBU0M7QUFBUSx5QkFBSyxFQUFDLGNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBVEQsZUFZQztBQUFRLHlCQUFLLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFaRCxlQWFDO0FBQVEseUJBQUssRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQWJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkE3QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXRCRCxlQXFFQztBQUFVLHlCQUFTLEVBQUMsaUJBQXBCO0FBQUEsd0NBQ0M7QUFBUSwyQkFBUyxFQUFDLFFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURELGVBSUM7QUFBSywyQkFBUyxFQUFDLFlBQWY7QUFBQSwwQ0FDQztBQUFPLDZCQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREQsZUFJQztBQUNDLDZCQUFTLEVBQUMsY0FEWDtBQUVDLHVCQUFHLEVBQUVyQyxRQUZOO0FBR0Msd0JBQUksRUFBQyxNQUhOO0FBSUMsd0JBQUksRUFBQztBQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpELGVBZUM7QUFBSywyQkFBUyxFQUFDLFlBQWY7QUFBQSwwQ0FDQztBQUFPLDZCQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREQsZUFJQztBQUNDLDZCQUFTLEVBQUMsY0FEWDtBQUVDLHVCQUFHLEVBQUVBLFFBRk47QUFHQyx3QkFBSSxFQUFDLE1BSE47QUFJQyx3QkFBSSxFQUFDO0FBSk47QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBZkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXJFRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRCxlQXVHQztBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBQSxvQkFDRUosWUFBWSxDQUFDaEIsYUFBRDtBQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdkdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBaUhDO0FBQUEsK0JBQ0M7QUFDQyxjQUFJLEVBQUMsUUFETjtBQUVDLGtCQUFRLEVBQUV1QixZQUZYO0FBR0MsbUJBQVMsRUFBQyxtQkFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsRUEySEVFLE9BQU8saUJBQUkscUVBQUMsa0RBQUQ7QUFBUyxXQUFLLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBM0hiLEVBNEhFRCxPQUFPLGlCQUNQLHFFQUFDLGdEQUFEO0FBQU8sV0FBSyxFQUFDLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE3SEY7QUFBQSxrQkFERDtBQWtJQSxDQXBPRDs7R0FBTTFCLGM7VUFtQ3lDcUIsdUQ7OztLQW5DekNyQixjO0FBc09TQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9jcnVkL2ltYWdlcy9hZGQuYjg3N2Q0YTM3NDUwOWVjZmRhNGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVwbG9hZFBob3RvLCB1cGxvYWRQaG90b0RhdGEgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3VwbG9hZEFjdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCB7IGxpc3RHaXRlc05vbXMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IHsgU3Bpbm5lciwgQWxlcnQgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmNvbnN0IEZvcm1DcmVhdGVHaXRlID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtzZWxlY3RlZEZpbGVzLCBzZXRTZWxlY3RlZEZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlSW1hZ2VDaGFuZ2UgPSAoZSkgPT4ge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coZS50YXJnZXQuZmlsZXNbXSlcclxuXHRcdGlmIChlLnRhcmdldC5maWxlcykge1xyXG5cdFx0XHRjb25zdCBmaWxlc0FycmF5ID0gQXJyYXkuZnJvbShlLnRhcmdldC5maWxlcykubWFwKChmaWxlKSA9PlxyXG5cdFx0XHRcdFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSlcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKFwiZmlsZXNBcnJheTogXCIsIGZpbGVzQXJyYXkpO1xyXG5cclxuXHRcdFx0c2V0U2VsZWN0ZWRGaWxlcygocHJldkltYWdlcykgPT4gcHJldkltYWdlcy5jb25jYXQoZmlsZXNBcnJheSkpO1xyXG5cdFx0XHRBcnJheS5mcm9tKGUudGFyZ2V0LmZpbGVzKS5tYXAoXHJcblx0XHRcdFx0KGZpbGUpID0+IFVSTC5yZXZva2VPYmplY3RVUkwoZmlsZSkgLy8gYXZvaWQgbWVtb3J5IGxlYWtcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCByZW5kZXJQaG90b3MgPSAoc291cmNlKSA9PiB7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnc291cmNlOiAnLCBzb3VyY2UpO1xyXG5cdFx0cmV0dXJuIHNvdXJjZS5tYXAoKHBob3RvKSA9PiB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0c3JjPXtwaG90b31cclxuXHRcdFx0XHRcdGFsdD0nJ1xyXG5cdFx0XHRcdFx0a2V5PXtwaG90b31cclxuXHRcdFx0XHRcdHdpZHRoPXszMjB9XHJcblx0XHRcdFx0XHRoZWlnaHQ9ezE4MH1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT0naW1nLXRodW1ibmFpbCdcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBmb3JtU3RhdGUgfSA9IHVzZUZvcm0oKTtcclxuXHRjb25zdCB7IGlzU3VibWl0dGluZyB9ID0gZm9ybVN0YXRlO1xyXG5cclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0c3VjY2VzczogJycsXHJcblx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdGVycm9yOiAnJyxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgeyBsb2FkaW5nLCBzdWNjZXNzLCBlcnJvciB9ID0gdmFsdWVzO1xyXG5cdGNvbnN0IFtnaXRlcywgc2V0R2l0ZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHRjb25zdCBsaXN0RGVzR2l0ZXMgPSAoKSA9PiB7XHJcblx0XHRsaXN0R2l0ZXNOb21zKCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRHaXRlcyguLi5naXRlcywgZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsaXN0RGVzR2l0ZXMoKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cclxuXHRjb25zdCBvblN1Ym1pdCA9IChkYXRhKSA9PiB7XHJcblx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUgfSk7XHJcblx0XHRsZXQgZm9ybURhdGFJbWFnZSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cdFx0bGV0IGZvcm1EYXRhSW1hZ2VJbmZvID0gbmV3IEZvcm1EYXRhKCk7XHJcblx0XHQvLyBmb3JtRGF0YS5hcHBlbmQoJ3Bob3RvJywgZGF0YS5waG90b1swXSk7XHJcblx0XHRmb3JtRGF0YUltYWdlSW5mby5hcHBlbmQoJ2FsdCcsIGRhdGEuYWx0KTtcclxuXHRcdGZvcm1EYXRhSW1hZ2VJbmZvLmFwcGVuZCgnbm9tJywgZGF0YS5ub20pO1xyXG5cdFx0Zm9ybURhdGFJbWFnZUluZm8uYXBwZW5kKCdwYWdlJywgZGF0YS5wYWdlKTtcclxuXHRcdGZvcm1EYXRhSW1hZ2VJbmZvLmFwcGVuZCgnc2VjdGlvbicsIGRhdGEuc2VjdGlvbik7XHJcblx0XHRmb3JtRGF0YUltYWdlLmFwcGVuZCgncGhvdG8nLCBkYXRhLnBob3RvWzBdKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZygnZm9ybURhdGEgdmF1dCA9PicsIGZvcm1EYXRhKTtcclxuXHJcblx0XHR1cGxvYWRQaG90b0RhdGEoZm9ybURhdGEsIHRva2VuKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0aWYgKHJlc3VsdC5lcnJvcikge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IHJlc3VsdC5lcnJvciB9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnZGF0YSBkb25uZSBpY2kgPT4nLCBkYXRhKTtcclxuXHRcdFx0XHR1cGxvYWRQaG90byhmb3JtRGF0YSwgdG9rZW4pLnRoZW4oKHJlc3VsdDIpID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXN1bHQyLmVycm9yKSB7XHJcblx0XHRcdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IHJlc3VsdDIuZXJyb3IgfSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6ICdMZXMgaW5mb3JtYXRpb25zIG9udCBiaWVuIMOpdMOpIGVudm95w6llcycsXHJcblx0XHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0Um91dGVyLnB1c2goJy9hZG1pbi9nZXN0aW9uSW1hZ2VzJyk7XHJcblx0XHRcdFx0XHR9LCAzMDAwKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTgnPjwvZGl2PiAqL31cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLXJvdyBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtYXV0byBteS0xJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzc05hbWU9J2JvcmRlciBwLTIgbXQtMyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsZWdlbmQgY2xhc3NOYW1lPSd3LWF1dG8nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEFqb3V0IGQnaW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9sZWdlbmQ+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nYnRuIGJ0bi1vdXRsaW5lLWluZm8nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0UGhvdG9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlSW1hZ2VDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0ncGhvdG8nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J2ZpbGUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFjY2VwdD0naW1hZ2UvKidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGlkZGVuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9maWVsZHNldD5cclxuXHRcdFx0XHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzc05hbWU9J2JvcmRlciBwLTIgbXQtMyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsZWdlbmQgY2xhc3NOYW1lPSd3LWF1dG8nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdENvbmNlcm5lIGxhIHBhZ2UgZXQgc2VjdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xlZ2VuZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdtci1zbS0yIHB0LTInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aHRtbEZvcj0naW5saW5lRm9ybUN1c3RvbVNlbGVjdCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0UGFnZSBhc3NvY2nDqWVcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J3BhZ2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY3VzdG9tLXNlbGVjdCBtci1zbS0yJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkPSdpbmxpbmVGb3JtQ3VzdG9tU2VsZWN0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHNlbGVjdGVkPlNlbGVjdGlvbi4uLjwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtnaXRlcy5tYXAoKGdpdGUsIGkpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17Z2l0ZS5zbHVnfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2dpdGUubm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nQXV0cmUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QXV0cmVzIHBhZ2VzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J21yLXNtLTIgcHQtMidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRodG1sRm9yPSdpbmxpbmVGb3JtQ3VzdG9tU2VsZWN0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRTZWN0aW9uIGFzc29jacOpZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nc2VjdGlvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjdXN0b20tc2VsZWN0IG1yLXNtLTInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9J2lubGluZUZvcm1DdXN0b21TZWxlY3QnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gc2VsZWN0ZWQ+U2VsZWN0aW9uLi4uPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nQXV0cmUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QXV0cmVzIHNlY3Rpb25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0ncHJlc2VudGF0aW9uJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFByw6lzZW50YXRpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPSdwaXNjaW5lJz5QaXNjaW5lPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0naW50ZXJpZXVyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEludMOpcmlldXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzTmFtZT0nYm9yZGVyIHAtMiBtdC0zJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxlZ2VuZCBjbGFzc05hbWU9J3ctYXV0byc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0SW5mb3MgZGUgbCdpbWFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xlZ2VuZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Tm9tIGRlIGwnaW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J25vbSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0VGV4dGUgYWx0ZXJuYXRpZlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nYWx0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9maWVsZHNldD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZXN1bHQgY29sLW1kLTYnPlxyXG5cdFx0XHRcdFx0XHR7cmVuZGVyUGhvdG9zKHNlbGVjdGVkRmlsZXMpfVxyXG5cdFx0XHRcdFx0XHR7LyogXHJcblx0XHRcdFx0XHRcdDxwPk5vbSBkZSBsYSBwaG90bzwvcD5cclxuXHRcdFx0XHRcdFx0PHA+VGV4dGUgYWx0ZXJuYXRpZjwvcD5cclxuXHRcdFx0XHRcdFx0PHA+Q29uY2VybmUgbGEgcGFnZTwvcD5cclxuXHRcdFx0XHRcdFx0PHA+Q29uY2VybmUgbGEgc2VjdGlvbjwvcD4gKi99XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHR0eXBlPSdzdWJtaXQnXHJcblx0XHRcdFx0XHRcdGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYnRuIGJ0bi1pbmZvIG10LTMnPlxyXG5cdFx0XHRcdFx0XHRBam91dGVyIGNlcyBpbWFnZXNcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdHtsb2FkaW5nICYmIDxTcGlubmVyIGNvbG9yPSdkYXJrJyAvPn1cclxuXHRcdFx0e3N1Y2Nlc3MgJiYgKFxyXG5cdFx0XHRcdDxBbGVydCBjb2xvcj0nc3VjY2Vzcyc+TGVzIHBob3RvcyBvbnQgYmllbiDDqXTDqSBlbnZvecOpZXM8L0FsZXJ0PlxyXG5cdFx0XHQpfVxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1DcmVhdGVHaXRlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9