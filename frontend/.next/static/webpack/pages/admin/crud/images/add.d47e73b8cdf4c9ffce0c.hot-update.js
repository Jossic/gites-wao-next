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
    var formData = new FormData();
    formData.append('photo', data.photo[0]); // formData.append('alt', data.alt);
    // formData.append('nom', data.nom);
    // formData.append('page', data.page);
    // formData.append('section', data.section);

    setValues(_objectSpread(_objectSpread({}, values), {}, {
      loading: true
    }));
    console.log('formData vaut =>', formData);
    Object(_actions_uploadActions__WEBPACK_IMPORTED_MODULE_4__["uploadPhoto"])(formData, token).then(function (result) {
      if (result.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: result.error
        }));
      } else {
        console.log('data donne ici =>', data);
        Object(_actions_uploadActions__WEBPACK_IMPORTED_MODULE_4__["uploadPhotoData"])(data, token).then(function (result2) {
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
                  lineNumber: 113,
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
                      lineNumber: 120,
                      columnNumber: 12
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 118,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
                className: "border p-2 mt-3",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
                  className: "w-auto",
                  children: "Concerne la page et section"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 10
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  className: "mr-sm-2 pt-2",
                  htmlFor: "inlineFormCustomSelect",
                  children: "Page associ\xE9e"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
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
                    lineNumber: 147,
                    columnNumber: 11
                  }, _this), gites.map(function (gite, i) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                      value: gite.slug,
                      children: gite.nom
                    }, i, false, {
                      fileName: _jsxFileName,
                      lineNumber: 149,
                      columnNumber: 12
                    }, _this);
                  }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "Autre",
                    children: "Autres pages"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 153,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 10
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  className: "mr-sm-2 pt-2",
                  htmlFor: "inlineFormCustomSelect",
                  children: "Section associ\xE9e"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
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
                    lineNumber: 167,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "Autre",
                    children: "Autres sections"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 168,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "presentation",
                    children: "Pr\xE9sentation"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 171,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "piscine",
                    children: "Piscine"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "interieur",
                    children: "Int\xE9rieur"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 175,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
                className: "border p-2 mt-3",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
                  className: "w-auto",
                  children: "Infos de l'image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 181,
                  columnNumber: 10
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    className: "text-muted",
                    children: "Nom de l'image"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 185,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    className: "form-control",
                    ref: register,
                    type: "text",
                    name: "nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 188,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 10
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    className: "text-muted",
                    children: "Texte alternatif"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 196,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    className: "form-control",
                    ref: register,
                    type: "text",
                    name: "alt"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 199,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "result col-md-6",
          children: renderPhotos(selectedFiles)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          disabled: isSubmitting,
          className: "btn btn-info mt-3",
          children: "Ajouter ces images"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 4
    }, _this), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Spinner"], {
      color: "dark"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 16
    }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Alert"], {
      color: "success",
      children: "Les photos ont bien \xE9t\xE9 envoy\xE9es"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 230,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9Gb3JtQWRkSW1hZ2VzLmpzIl0sIm5hbWVzIjpbIkZvcm1DcmVhdGVHaXRlIiwidXNlU3RhdGUiLCJzZWxlY3RlZEZpbGVzIiwic2V0U2VsZWN0ZWRGaWxlcyIsImhhbmRsZUltYWdlQ2hhbmdlIiwiZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZXNBcnJheSIsIkFycmF5IiwiZnJvbSIsIm1hcCIsImZpbGUiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJwcmV2SW1hZ2VzIiwiY29uY2F0IiwicmV2b2tlT2JqZWN0VVJMIiwicmVuZGVyUGhvdG9zIiwic291cmNlIiwicGhvdG8iLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJmb3JtU3RhdGUiLCJpc1N1Ym1pdHRpbmciLCJzdWNjZXNzIiwibG9hZGluZyIsImVycm9yIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiZ2l0ZXMiLCJzZXRHaXRlcyIsImxpc3REZXNHaXRlcyIsImxpc3RHaXRlc05vbXMiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsImdldENvb2tpZSIsIm9uU3VibWl0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInVwbG9hZFBob3RvIiwicmVzdWx0IiwidXBsb2FkUGhvdG9EYXRhIiwicmVzdWx0MiIsInNldFRpbWVvdXQiLCJSb3V0ZXIiLCJwdXNoIiwicmVxdWlyZWQiLCJnaXRlIiwiaSIsInNsdWciLCJub20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUFBOztBQUFBLGtCQUNjQyxzREFBUSxDQUFDLEVBQUQsQ0FEdEI7QUFBQSxNQUNyQkMsYUFEcUI7QUFBQSxNQUNOQyxnQkFE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QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELEVBMkhFRSxPQUFPLGlCQUFJLHFFQUFDLGtEQUFEO0FBQVMsV0FBSyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTNIYixFQTRIRUQsT0FBTyxpQkFDUCxxRUFBQyxnREFBRDtBQUFPLFdBQUssRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0hGO0FBQUEsa0JBREQ7QUFrSUEsQ0FsT0Q7O0dBQU0xQixjO1VBbUN5Q3FCLHVEOzs7S0FuQ3pDckIsYztBQW9PU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9pbWFnZXMvYWRkLmQ0N2U3M2I4Y2RmNGM5ZmZjZTBjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1cGxvYWRQaG90bywgdXBsb2FkUGhvdG9EYXRhIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy91cGxvYWRBY3Rpb25zJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgeyBsaXN0R2l0ZXNOb21zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCB7IFNwaW5uZXIsIEFsZXJ0IH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5jb25zdCBGb3JtQ3JlYXRlR2l0ZSA9ICgpID0+IHtcclxuXHRjb25zdCBbc2VsZWN0ZWRGaWxlcywgc2V0U2VsZWN0ZWRGaWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUltYWdlQ2hhbmdlID0gKGUpID0+IHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmZpbGVzW10pXHJcblx0XHRpZiAoZS50YXJnZXQuZmlsZXMpIHtcclxuXHRcdFx0Y29uc3QgZmlsZXNBcnJheSA9IEFycmF5LmZyb20oZS50YXJnZXQuZmlsZXMpLm1hcCgoZmlsZSkgPT5cclxuXHRcdFx0XHRVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcImZpbGVzQXJyYXk6IFwiLCBmaWxlc0FycmF5KTtcclxuXHJcblx0XHRcdHNldFNlbGVjdGVkRmlsZXMoKHByZXZJbWFnZXMpID0+IHByZXZJbWFnZXMuY29uY2F0KGZpbGVzQXJyYXkpKTtcclxuXHRcdFx0QXJyYXkuZnJvbShlLnRhcmdldC5maWxlcykubWFwKFxyXG5cdFx0XHRcdChmaWxlKSA9PiBVUkwucmV2b2tlT2JqZWN0VVJMKGZpbGUpIC8vIGF2b2lkIG1lbW9yeSBsZWFrXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgcmVuZGVyUGhvdG9zID0gKHNvdXJjZSkgPT4ge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ3NvdXJjZTogJywgc291cmNlKTtcclxuXHRcdHJldHVybiBzb3VyY2UubWFwKChwaG90bykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdHNyYz17cGhvdG99XHJcblx0XHRcdFx0XHRhbHQ9JydcclxuXHRcdFx0XHRcdGtleT17cGhvdG99XHJcblx0XHRcdFx0XHR3aWR0aD17MzIwfVxyXG5cdFx0XHRcdFx0aGVpZ2h0PXsxODB9XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J2ltZy10aHVtYm5haWwnXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZm9ybVN0YXRlIH0gPSB1c2VGb3JtKCk7XHJcblx0Y29uc3QgeyBpc1N1Ym1pdHRpbmcgfSA9IGZvcm1TdGF0ZTtcclxuXHJcblx0Y29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRlcnJvcjogJycsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHsgbG9hZGluZywgc3VjY2VzcywgZXJyb3IgfSA9IHZhbHVlcztcclxuXHRjb25zdCBbZ2l0ZXMsIHNldEdpdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgbGlzdERlc0dpdGVzID0gKCkgPT4ge1xyXG5cdFx0bGlzdEdpdGVzTm9tcygpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0R2l0ZXMoLi4uZ2l0ZXMsIGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGlzdERlc0dpdGVzKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4ge1xyXG5cdFx0bGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblx0XHRmb3JtRGF0YS5hcHBlbmQoJ3Bob3RvJywgZGF0YS5waG90b1swXSk7XHJcblx0XHQvLyBmb3JtRGF0YS5hcHBlbmQoJ2FsdCcsIGRhdGEuYWx0KTtcclxuXHRcdC8vIGZvcm1EYXRhLmFwcGVuZCgnbm9tJywgZGF0YS5ub20pO1xyXG5cdFx0Ly8gZm9ybURhdGEuYXBwZW5kKCdwYWdlJywgZGF0YS5wYWdlKTtcclxuXHRcdC8vIGZvcm1EYXRhLmFwcGVuZCgnc2VjdGlvbicsIGRhdGEuc2VjdGlvbik7XHJcblx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUgfSk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coJ2Zvcm1EYXRhIHZhdXQgPT4nLCBmb3JtRGF0YSk7XHJcblxyXG5cdFx0dXBsb2FkUGhvdG8oZm9ybURhdGEsIHRva2VuKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0aWYgKHJlc3VsdC5lcnJvcikge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IHJlc3VsdC5lcnJvciB9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnZGF0YSBkb25uZSBpY2kgPT4nLCBkYXRhKTtcclxuXHRcdFx0XHR1cGxvYWRQaG90b0RhdGEoZGF0YSwgdG9rZW4pLnRoZW4oKHJlc3VsdDIpID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXN1bHQyLmVycm9yKSB7XHJcblx0XHRcdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IHJlc3VsdDIuZXJyb3IgfSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6ICdMZXMgaW5mb3JtYXRpb25zIG9udCBiaWVuIMOpdMOpIGVudm95w6llcycsXHJcblx0XHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0Um91dGVyLnB1c2goJy9hZG1pbi9nZXN0aW9uSW1hZ2VzJyk7XHJcblx0XHRcdFx0XHR9LCAzMDAwKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTgnPjwvZGl2PiAqL31cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLXJvdyBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtYXV0byBteS0xJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzc05hbWU9J2JvcmRlciBwLTIgbXQtMyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsZWdlbmQgY2xhc3NOYW1lPSd3LWF1dG8nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEFqb3V0IGQnaW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9sZWdlbmQ+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nYnRuIGJ0bi1vdXRsaW5lLWluZm8nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0UGhvdG9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlSW1hZ2VDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0ncGhvdG8nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J2ZpbGUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFjY2VwdD0naW1hZ2UvKidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGlkZGVuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9maWVsZHNldD5cclxuXHRcdFx0XHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzc05hbWU9J2JvcmRlciBwLTIgbXQtMyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsZWdlbmQgY2xhc3NOYW1lPSd3LWF1dG8nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdENvbmNlcm5lIGxhIHBhZ2UgZXQgc2VjdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xlZ2VuZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdtci1zbS0yIHB0LTInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aHRtbEZvcj0naW5saW5lRm9ybUN1c3RvbVNlbGVjdCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0UGFnZSBhc3NvY2nDqWVcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J3BhZ2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY3VzdG9tLXNlbGVjdCBtci1zbS0yJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkPSdpbmxpbmVGb3JtQ3VzdG9tU2VsZWN0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHNlbGVjdGVkPlNlbGVjdGlvbi4uLjwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtnaXRlcy5tYXAoKGdpdGUsIGkpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17Z2l0ZS5zbHVnfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2dpdGUubm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nQXV0cmUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QXV0cmVzIHBhZ2VzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J21yLXNtLTIgcHQtMidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRodG1sRm9yPSdpbmxpbmVGb3JtQ3VzdG9tU2VsZWN0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRTZWN0aW9uIGFzc29jacOpZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nc2VjdGlvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjdXN0b20tc2VsZWN0IG1yLXNtLTInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9J2lubGluZUZvcm1DdXN0b21TZWxlY3QnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gc2VsZWN0ZWQ+U2VsZWN0aW9uLi4uPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nQXV0cmUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QXV0cmVzIHNlY3Rpb25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0ncHJlc2VudGF0aW9uJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFByw6lzZW50YXRpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPSdwaXNjaW5lJz5QaXNjaW5lPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0naW50ZXJpZXVyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEludMOpcmlldXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzTmFtZT0nYm9yZGVyIHAtMiBtdC0zJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxlZ2VuZCBjbGFzc05hbWU9J3ctYXV0byc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0SW5mb3MgZGUgbCdpbWFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xlZ2VuZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Tm9tIGRlIGwnaW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J25vbSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0VGV4dGUgYWx0ZXJuYXRpZlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nYWx0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9maWVsZHNldD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZXN1bHQgY29sLW1kLTYnPlxyXG5cdFx0XHRcdFx0XHR7cmVuZGVyUGhvdG9zKHNlbGVjdGVkRmlsZXMpfVxyXG5cdFx0XHRcdFx0XHR7LyogXHJcblx0XHRcdFx0XHRcdDxwPk5vbSBkZSBsYSBwaG90bzwvcD5cclxuXHRcdFx0XHRcdFx0PHA+VGV4dGUgYWx0ZXJuYXRpZjwvcD5cclxuXHRcdFx0XHRcdFx0PHA+Q29uY2VybmUgbGEgcGFnZTwvcD5cclxuXHRcdFx0XHRcdFx0PHA+Q29uY2VybmUgbGEgc2VjdGlvbjwvcD4gKi99XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHR0eXBlPSdzdWJtaXQnXHJcblx0XHRcdFx0XHRcdGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYnRuIGJ0bi1pbmZvIG10LTMnPlxyXG5cdFx0XHRcdFx0XHRBam91dGVyIGNlcyBpbWFnZXNcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdHtsb2FkaW5nICYmIDxTcGlubmVyIGNvbG9yPSdkYXJrJyAvPn1cclxuXHRcdFx0e3N1Y2Nlc3MgJiYgKFxyXG5cdFx0XHRcdDxBbGVydCBjb2xvcj0nc3VjY2Vzcyc+TGVzIHBob3RvcyBvbnQgYmllbiDDqXTDqSBlbnZvecOpZXM8L0FsZXJ0PlxyXG5cdFx0XHQpfVxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1DcmVhdGVHaXRlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9