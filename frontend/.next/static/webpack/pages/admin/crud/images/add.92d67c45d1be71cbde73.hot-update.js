webpackHotUpdate_N_E("pages/admin/crud/images/add",{

/***/ "./actions/uploadActions.js":
/*!**********************************!*\
  !*** ./actions/uploadActions.js ***!
  \**********************************/
/*! exports provided: uploadPhoto, uploadPhotoData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadPhoto", function() { return uploadPhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadPhotoData", function() { return uploadPhotoData; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");



var uploadPhoto = function uploadPhoto(infos, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/upload-image"), {
    method: 'POST',
    headers: {
      Accept: 'multipart/form-data',
      Authorization: "Bearer ".concat(token)
    },
    body: infos
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var uploadPhotoData = function uploadPhotoData(infos, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/upload-image"), {
    method: 'POST',
    headers: {
      Accept: 'multipart/form-data',
      Authorization: "Bearer ".concat(token)
    },
    body: infos
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};

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

/***/ }),

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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_uploadActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/uploadActions */ "./actions/uploadActions.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");







var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\FormAddImages.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var FormCreateGite = function FormCreateGite() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
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

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_8__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      formState = _useForm.formState;

  var isSubmitting = formState.isSubmitting;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    success: '',
    loading: false,
    error: ''
  }),
      values = _useState2[0],
      setValues = _useState2[1];

  var loading = values.loading,
      success = values.success,
      error = values.error;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      gites = _useState3[0],
      setGites = _useState3[1];

  var listDesGites = function listDesGites() {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_9__["listGitesNoms"])().then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        setGites.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(gites).concat([data]));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    listDesGites();
  }, []);
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_7__["getCookie"])('token');

  var onSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(data) {
      var formData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              formData = new FormData();
              formData.append('photo', data.photo[0]); // formData.append('alt', data.alt);
              // formData.append('nom', data.nom);
              // formData.append('page', data.page);
              // formData.append('section', data.section);

              setValues(_objectSpread(_objectSpread({}, values), {}, {
                loading: true
              }));
              console.log('formData vaut =>', formData);
              Object(_actions_uploadActions__WEBPACK_IMPORTED_MODULE_6__["uploadPhoto"])(formData, token).then(function (result) {
                if (result.error) {
                  setValues(_objectSpread(_objectSpread({}, values), {}, {
                    error: result.error
                  }));
                } else {
                  Object(_actions_uploadActions__WEBPACK_IMPORTED_MODULE_6__["uploadPhotoData"])(data, tolen).then(function (result2) {
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

            case 5:
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
                  lineNumber: 112,
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
                      lineNumber: 119,
                      columnNumber: 12
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 117,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
                className: "border p-2 mt-3",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
                  className: "w-auto",
                  children: "Concerne la page et section"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 10
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  className: "mr-sm-2 pt-2",
                  htmlFor: "inlineFormCustomSelect",
                  children: "Page associ\xE9e"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
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
                    lineNumber: 146,
                    columnNumber: 11
                  }, _this), gites.map(function (gite, i) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                      value: gite.slug,
                      children: gite.nom
                    }, i, false, {
                      fileName: _jsxFileName,
                      lineNumber: 148,
                      columnNumber: 12
                    }, _this);
                  }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "Autre",
                    children: "Autres pages"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 152,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 10
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  className: "mr-sm-2 pt-2",
                  htmlFor: "inlineFormCustomSelect",
                  children: "Section associ\xE9e"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
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
                    lineNumber: 166,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "Autre",
                    children: "Autres sections"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 167,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "presentation",
                    children: "Pr\xE9sentation"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 170,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "piscine",
                    children: "Piscine"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 173,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "interieur",
                    children: "Int\xE9rieur"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
                className: "border p-2 mt-3",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
                  className: "w-auto",
                  children: "Infos de l'image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 10
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    className: "text-muted",
                    children: "Nom de l'image"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 184,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    className: "form-control",
                    ref: register,
                    type: "text",
                    name: "nom"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 187,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 183,
                  columnNumber: 10
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    className: "text-muted",
                    children: "Texte alternatif"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 195,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    className: "form-control",
                    ref: register,
                    type: "text",
                    name: "alt"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 198,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 194,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "result col-md-6",
          children: renderPhotos(selectedFiles)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          disabled: isSubmitting,
          className: "btn btn-info mt-3",
          children: "Ajouter ces images"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 4
    }, _this), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Spinner"], {
      color: "dark"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 16
    }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Alert"], {
      color: "success",
      children: "Les photos ont bien \xE9t\xE9 envoy\xE9es"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 5
    }, _this)]
  }, void 0, true);
};

_s(FormCreateGite, "mRrLi0SUix61DrZqkzeh8Np8QS0=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy91cGxvYWRBY3Rpb25zLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FkbWluL0Zvcm1BZGRJbWFnZXMuanMiXSwibmFtZXMiOlsidXBsb2FkUGhvdG8iLCJpbmZvcyIsInRva2VuIiwiZmV0Y2giLCJBUEkiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInVwbG9hZFBob3RvRGF0YSIsIkZvcm1DcmVhdGVHaXRlIiwidXNlU3RhdGUiLCJzZWxlY3RlZEZpbGVzIiwic2V0U2VsZWN0ZWRGaWxlcyIsImhhbmRsZUltYWdlQ2hhbmdlIiwiZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZXNBcnJheSIsIkFycmF5IiwiZnJvbSIsIm1hcCIsImZpbGUiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJwcmV2SW1hZ2VzIiwiY29uY2F0IiwicmV2b2tlT2JqZWN0VVJMIiwicmVuZGVyUGhvdG9zIiwic291cmNlIiwicGhvdG8iLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJmb3JtU3RhdGUiLCJpc1N1Ym1pdHRpbmciLCJzdWNjZXNzIiwibG9hZGluZyIsImVycm9yIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiZ2l0ZXMiLCJzZXRHaXRlcyIsImxpc3REZXNHaXRlcyIsImxpc3RHaXRlc05vbXMiLCJkYXRhIiwidXNlRWZmZWN0IiwiZ2V0Q29va2llIiwib25TdWJtaXQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicmVzdWx0IiwidG9sZW4iLCJyZXN1bHQyIiwic2V0VGltZW91dCIsIlJvdXRlciIsInB1c2giLCJyZXF1aXJlZCIsImdpdGUiLCJpIiwic2x1ZyIsIm5vbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFB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dUdDO0FBQUssbUJBQVMsRUFBQyxpQkFBZjtBQUFBLG9CQUNFSixZQUFZLENBQUNoQixhQUFEO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2R0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFpSEM7QUFBQSwrQkFDQztBQUNDLGNBQUksRUFBQyxRQUROO0FBRUMsa0JBQVEsRUFBRXVCLFlBRlg7QUFHQyxtQkFBUyxFQUFDLG1CQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxFQTJIRUUsT0FBTyxpQkFBSSxxRUFBQyxtREFBRDtBQUFTLFdBQUssRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEzSGIsRUE0SEVELE9BQU8saUJBQ1AscUVBQUMsaURBQUQ7QUFBTyxXQUFLLEVBQUMsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTdIRjtBQUFBLGtCQUREO0FBa0lBLENBak9EOztHQUFNMUIsYztVQW1DeUNxQix1RDs7O0tBbkN6Q3JCLGM7QUFtT1NBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvaW1hZ2VzL2FkZC45MmQ2N2M0NWQxYmU3MWNiZGU3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwbG9hZFBob3RvID0gKGluZm9zLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3VwbG9hZC1pbWFnZWAsIHtcclxuXHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBY2NlcHQ6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdFx0Ym9keTogaW5mb3MsXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGxvYWRQaG90b0RhdGEgPSAoaW5mb3MsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vdXBsb2FkLWltYWdlYCwge1xyXG5cdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEFjY2VwdDogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0XHRib2R5OiBpbmZvcyxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1cGxvYWRQaG90bywgdXBsb2FkUGhvdG9EYXRhIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy91cGxvYWRBY3Rpb25zJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgeyBsaXN0R2l0ZXNOb21zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCB7IFNwaW5uZXIsIEFsZXJ0IH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5jb25zdCBGb3JtQ3JlYXRlR2l0ZSA9ICgpID0+IHtcclxuXHRjb25zdCBbc2VsZWN0ZWRGaWxlcywgc2V0U2VsZWN0ZWRGaWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUltYWdlQ2hhbmdlID0gKGUpID0+IHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmZpbGVzW10pXHJcblx0XHRpZiAoZS50YXJnZXQuZmlsZXMpIHtcclxuXHRcdFx0Y29uc3QgZmlsZXNBcnJheSA9IEFycmF5LmZyb20oZS50YXJnZXQuZmlsZXMpLm1hcCgoZmlsZSkgPT5cclxuXHRcdFx0XHRVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcImZpbGVzQXJyYXk6IFwiLCBmaWxlc0FycmF5KTtcclxuXHJcblx0XHRcdHNldFNlbGVjdGVkRmlsZXMoKHByZXZJbWFnZXMpID0+IHByZXZJbWFnZXMuY29uY2F0KGZpbGVzQXJyYXkpKTtcclxuXHRcdFx0QXJyYXkuZnJvbShlLnRhcmdldC5maWxlcykubWFwKFxyXG5cdFx0XHRcdChmaWxlKSA9PiBVUkwucmV2b2tlT2JqZWN0VVJMKGZpbGUpIC8vIGF2b2lkIG1lbW9yeSBsZWFrXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgcmVuZGVyUGhvdG9zID0gKHNvdXJjZSkgPT4ge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ3NvdXJjZTogJywgc291cmNlKTtcclxuXHRcdHJldHVybiBzb3VyY2UubWFwKChwaG90bykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdHNyYz17cGhvdG99XHJcblx0XHRcdFx0XHRhbHQ9JydcclxuXHRcdFx0XHRcdGtleT17cGhvdG99XHJcblx0XHRcdFx0XHR3aWR0aD17MzIwfVxyXG5cdFx0XHRcdFx0aGVpZ2h0PXsxODB9XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J2ltZy10aHVtYm5haWwnXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZm9ybVN0YXRlIH0gPSB1c2VGb3JtKCk7XHJcblx0Y29uc3QgeyBpc1N1Ym1pdHRpbmcgfSA9IGZvcm1TdGF0ZTtcclxuXHJcblx0Y29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRlcnJvcjogJycsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHsgbG9hZGluZywgc3VjY2VzcywgZXJyb3IgfSA9IHZhbHVlcztcclxuXHRjb25zdCBbZ2l0ZXMsIHNldEdpdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgbGlzdERlc0dpdGVzID0gKCkgPT4ge1xyXG5cdFx0bGlzdEdpdGVzTm9tcygpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0R2l0ZXMoLi4uZ2l0ZXMsIGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGlzdERlc0dpdGVzKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG5cdFx0bGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblx0XHRmb3JtRGF0YS5hcHBlbmQoJ3Bob3RvJywgZGF0YS5waG90b1swXSk7XHJcblx0XHQvLyBmb3JtRGF0YS5hcHBlbmQoJ2FsdCcsIGRhdGEuYWx0KTtcclxuXHRcdC8vIGZvcm1EYXRhLmFwcGVuZCgnbm9tJywgZGF0YS5ub20pO1xyXG5cdFx0Ly8gZm9ybURhdGEuYXBwZW5kKCdwYWdlJywgZGF0YS5wYWdlKTtcclxuXHRcdC8vIGZvcm1EYXRhLmFwcGVuZCgnc2VjdGlvbicsIGRhdGEuc2VjdGlvbik7XHJcblx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUgfSk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coJ2Zvcm1EYXRhIHZhdXQgPT4nLCBmb3JtRGF0YSk7XHJcblxyXG5cdFx0dXBsb2FkUGhvdG8oZm9ybURhdGEsIHRva2VuKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0aWYgKHJlc3VsdC5lcnJvcikge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IHJlc3VsdC5lcnJvciB9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR1cGxvYWRQaG90b0RhdGEoZGF0YSwgdG9sZW4pLnRoZW4oKHJlc3VsdDIpID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXN1bHQyLmVycm9yKSB7XHJcblx0XHRcdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IHJlc3VsdDIuZXJyb3IgfSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6ICdMZXMgaW5mb3JtYXRpb25zIG9udCBiaWVuIMOpdMOpIGVudm95w6llcycsXHJcblx0XHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0Um91dGVyLnB1c2goJy9hZG1pbi9nZXN0aW9uSW1hZ2VzJyk7XHJcblx0XHRcdFx0XHR9LCAzMDAwKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTgnPjwvZGl2PiAqL31cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLXJvdyBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtYXV0byBteS0xJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzc05hbWU9J2JvcmRlciBwLTIgbXQtMyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsZWdlbmQgY2xhc3NOYW1lPSd3LWF1dG8nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEFqb3V0IGQnaW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9sZWdlbmQ+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nYnRuIGJ0bi1vdXRsaW5lLWluZm8nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0UGhvdG9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlSW1hZ2VDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0ncGhvdG8nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J2ZpbGUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFjY2VwdD0naW1hZ2UvKidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGlkZGVuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9maWVsZHNldD5cclxuXHRcdFx0XHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzc05hbWU9J2JvcmRlciBwLTIgbXQtMyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsZWdlbmQgY2xhc3NOYW1lPSd3LWF1dG8nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdENvbmNlcm5lIGxhIHBhZ2UgZXQgc2VjdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xlZ2VuZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdtci1zbS0yIHB0LTInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aHRtbEZvcj0naW5saW5lRm9ybUN1c3RvbVNlbGVjdCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0UGFnZSBhc3NvY2nDqWVcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J3BhZ2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY3VzdG9tLXNlbGVjdCBtci1zbS0yJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkPSdpbmxpbmVGb3JtQ3VzdG9tU2VsZWN0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHNlbGVjdGVkPlNlbGVjdGlvbi4uLjwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtnaXRlcy5tYXAoKGdpdGUsIGkpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17Z2l0ZS5zbHVnfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2dpdGUubm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nQXV0cmUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QXV0cmVzIHBhZ2VzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J21yLXNtLTIgcHQtMidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRodG1sRm9yPSdpbmxpbmVGb3JtQ3VzdG9tU2VsZWN0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRTZWN0aW9uIGFzc29jacOpZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nc2VjdGlvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjdXN0b20tc2VsZWN0IG1yLXNtLTInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9J2lubGluZUZvcm1DdXN0b21TZWxlY3QnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gc2VsZWN0ZWQ+U2VsZWN0aW9uLi4uPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nQXV0cmUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QXV0cmVzIHNlY3Rpb25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0ncHJlc2VudGF0aW9uJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFByw6lzZW50YXRpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPSdwaXNjaW5lJz5QaXNjaW5lPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0naW50ZXJpZXVyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEludMOpcmlldXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzTmFtZT0nYm9yZGVyIHAtMiBtdC0zJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxlZ2VuZCBjbGFzc05hbWU9J3ctYXV0byc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0SW5mb3MgZGUgbCdpbWFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xlZ2VuZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Tm9tIGRlIGwnaW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J25vbSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0VGV4dGUgYWx0ZXJuYXRpZlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nYWx0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9maWVsZHNldD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZXN1bHQgY29sLW1kLTYnPlxyXG5cdFx0XHRcdFx0XHR7cmVuZGVyUGhvdG9zKHNlbGVjdGVkRmlsZXMpfVxyXG5cdFx0XHRcdFx0XHR7LyogXHJcblx0XHRcdFx0XHRcdDxwPk5vbSBkZSBsYSBwaG90bzwvcD5cclxuXHRcdFx0XHRcdFx0PHA+VGV4dGUgYWx0ZXJuYXRpZjwvcD5cclxuXHRcdFx0XHRcdFx0PHA+Q29uY2VybmUgbGEgcGFnZTwvcD5cclxuXHRcdFx0XHRcdFx0PHA+Q29uY2VybmUgbGEgc2VjdGlvbjwvcD4gKi99XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHR0eXBlPSdzdWJtaXQnXHJcblx0XHRcdFx0XHRcdGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYnRuIGJ0bi1pbmZvIG10LTMnPlxyXG5cdFx0XHRcdFx0XHRBam91dGVyIGNlcyBpbWFnZXNcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdHtsb2FkaW5nICYmIDxTcGlubmVyIGNvbG9yPSdkYXJrJyAvPn1cclxuXHRcdFx0e3N1Y2Nlc3MgJiYgKFxyXG5cdFx0XHRcdDxBbGVydCBjb2xvcj0nc3VjY2Vzcyc+TGVzIHBob3RvcyBvbnQgYmllbiDDqXTDqSBlbnZvecOpZXM8L0FsZXJ0PlxyXG5cdFx0XHQpfVxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1DcmVhdGVHaXRlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9