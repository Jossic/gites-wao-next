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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");







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
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_6__["listGitesNoms"])().then(function (data) {
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
      var slug, formData, info;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setValues(_objectSpread(_objectSpread({}, values), {}, {
                loading: true
              }));
              slug = data.gite;
              formData = new FormData();
              info = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(data.photos);
              console.log('info vaut =>', info);
              console.log('data vaut =>', data);
              info.map(function (photo) {
                return formData.append('photos', photo);
              });
              console.log('formData vaut =>', formData);
              Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_6__["updateGite"])(formData, slug, token).then(function (result) {
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

            case 9:
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
                lineNumber: 106,
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
                  lineNumber: 116,
                  columnNumber: 10
                }, _this), gites.map(function (gite, i) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: gite.slug,
                    children: gite.nom
                  }, i, false, {
                    fileName: _jsxFileName,
                    lineNumber: 118,
                    columnNumber: 11
                  }, _this);
                }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "Autre",
                  children: "Autres pages"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
            className: "border p-2 mt-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
              className: "w-auto",
              children: "Ajout d'images"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
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
                  lineNumber: 132,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          disabled: isSubmitting,
          className: "btn btn-info mt-3",
          children: "Ajouter ces images"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 4
    }, _this), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Spinner"], {
      color: "dark"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 16
    }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Alert"], {
      color: "success",
      children: "Les photos ont bien \xE9t\xE9 envoy\xE9es"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "result",
      children: renderPhotos(selectedFiles)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 4
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9Gb3JtQWRkSW1hZ2VzLmpzIl0sIm5hbWVzIjpbIkZvcm1DcmVhdGVHaXRlIiwidXNlU3RhdGUiLCJzZWxlY3RlZEZpbGVzIiwic2V0U2VsZWN0ZWRGaWxlcyIsImhhbmRsZUltYWdlQ2hhbmdlIiwiZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZXNBcnJheSIsIkFycmF5IiwiZnJvbSIsIm1hcCIsImZpbGUiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJwcmV2SW1hZ2VzIiwiY29uY2F0IiwicmV2b2tlT2JqZWN0VVJMIiwicmVuZGVyUGhvdG9zIiwic291cmNlIiwicGhvdG8iLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJmb3JtU3RhdGUiLCJpc1N1Ym1pdHRpbmciLCJzdWNjZXNzIiwibG9hZGluZyIsImVycm9yIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiZ2l0ZXMiLCJzZXRHaXRlcyIsImxpc3REZXNHaXRlcyIsImxpc3RHaXRlc05vbXMiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsImdldENvb2tpZSIsIm9uU3VibWl0Iiwic2x1ZyIsImdpdGUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiaW5mbyIsInBob3RvcyIsImFwcGVuZCIsInVwZGF0ZUdpdGUiLCJyZXN1bHQiLCJzZXRUaW1lb3V0IiwiUm91dGVyIiwicHVzaCIsInJlcXVpcmVkIiwiaSIsIm5vbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUFBOztBQUFBLGtCQUNjQyxzREFBUSxDQUFDLEVBQUQsQ0FEdEI7QUFBQSxNQUNyQkMsYUFEcUI7QUFBQSxNQUNOQyxnQkFETTs7QUFHNUIs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Y2RhYTY4NTgxYTE5MTMzMzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVwZGF0ZUdpdGUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgeyBsaXN0R2l0ZXNOb21zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCB7IFNwaW5uZXIsIEFsZXJ0IH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5jb25zdCBGb3JtQ3JlYXRlR2l0ZSA9ICgpID0+IHtcclxuXHRjb25zdCBbc2VsZWN0ZWRGaWxlcywgc2V0U2VsZWN0ZWRGaWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUltYWdlQ2hhbmdlID0gKGUpID0+IHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmZpbGVzW10pXHJcblx0XHRpZiAoZS50YXJnZXQuZmlsZXMpIHtcclxuXHRcdFx0Y29uc3QgZmlsZXNBcnJheSA9IEFycmF5LmZyb20oZS50YXJnZXQuZmlsZXMpLm1hcCgoZmlsZSkgPT5cclxuXHRcdFx0XHRVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcImZpbGVzQXJyYXk6IFwiLCBmaWxlc0FycmF5KTtcclxuXHJcblx0XHRcdHNldFNlbGVjdGVkRmlsZXMoKHByZXZJbWFnZXMpID0+IHByZXZJbWFnZXMuY29uY2F0KGZpbGVzQXJyYXkpKTtcclxuXHRcdFx0QXJyYXkuZnJvbShlLnRhcmdldC5maWxlcykubWFwKFxyXG5cdFx0XHRcdChmaWxlKSA9PiBVUkwucmV2b2tlT2JqZWN0VVJMKGZpbGUpIC8vIGF2b2lkIG1lbW9yeSBsZWFrXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgcmVuZGVyUGhvdG9zID0gKHNvdXJjZSkgPT4ge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ3NvdXJjZTogJywgc291cmNlKTtcclxuXHRcdHJldHVybiBzb3VyY2UubWFwKChwaG90bykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdHNyYz17cGhvdG99XHJcblx0XHRcdFx0XHRhbHQ9JydcclxuXHRcdFx0XHRcdGtleT17cGhvdG99XHJcblx0XHRcdFx0XHR3aWR0aD17MzIwfVxyXG5cdFx0XHRcdFx0aGVpZ2h0PXsxODB9XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J2ltZy10aHVtYm5haWwnXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZm9ybVN0YXRlIH0gPSB1c2VGb3JtKCk7XHJcblx0Y29uc3QgeyBpc1N1Ym1pdHRpbmcgfSA9IGZvcm1TdGF0ZTtcclxuXHJcblx0Y29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRlcnJvcjogJycsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHsgbG9hZGluZywgc3VjY2VzcywgZXJyb3IgfSA9IHZhbHVlcztcclxuXHRjb25zdCBbZ2l0ZXMsIHNldEdpdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgbGlzdERlc0dpdGVzID0gKCkgPT4ge1xyXG5cdFx0bGlzdEdpdGVzTm9tcygpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0R2l0ZXMoLi4uZ2l0ZXMsIGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGlzdERlc0dpdGVzKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdFx0Y29uc3Qgc2x1ZyA9IGRhdGEuZ2l0ZTtcclxuXHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblx0XHRjb25zdCBpbmZvID0gWy4uLmRhdGEucGhvdG9zXTtcclxuXHRcdGNvbnNvbGUubG9nKCdpbmZvIHZhdXQgPT4nLCBpbmZvKTtcclxuXHRcdGNvbnNvbGUubG9nKCdkYXRhIHZhdXQgPT4nLCBkYXRhKTtcclxuXHRcdGluZm8ubWFwKChwaG90bykgPT4gZm9ybURhdGEuYXBwZW5kKCdwaG90b3MnLCBwaG90bykpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKCdmb3JtRGF0YSB2YXV0ID0+JywgZm9ybURhdGEpO1xyXG5cclxuXHRcdHVwZGF0ZUdpdGUoZm9ybURhdGEsIHNsdWcsIHRva2VuKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0aWYgKHJlc3VsdC5lcnJvcikge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IHJlc3VsdC5lcnJvciB9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogJ0xlcyBwaG90b3Mgb250IGJpZW4gw6l0w6kgZW52b3nDqWVzJyxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Um91dGVyLnB1c2goJy9hZG1pbi9nZXN0aW9uSW1hZ2VzJyk7XHJcblx0XHRcdFx0fSwgMzAwMCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9J2NvbC1tZC04Jz48L2Rpdj4gKi99XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTQnPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1yb3cgYWxpZ24taXRlbXMtY2VudGVyJz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLWF1dG8gbXktMSc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdtci1zbS0yJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRodG1sRm9yPSdpbmxpbmVGb3JtQ3VzdG9tU2VsZWN0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0R8OudGUvU2VjdGlvbiBjb25jZXJuw6lcclxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0XHJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J2dpdGUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjdXN0b20tc2VsZWN0IG1yLXNtLTInXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSdpbmxpbmVGb3JtQ3VzdG9tU2VsZWN0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBzZWxlY3RlZD5TZWxlY3Rpb24uLi48L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2dpdGVzLm1hcCgoZ2l0ZSwgaSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17Z2l0ZS5zbHVnfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtnaXRlLm5vbX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9J0F1dHJlJz5BdXRyZXMgcGFnZXM8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzTmFtZT0nYm9yZGVyIHAtMiBtdC0zJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGVnZW5kIGNsYXNzTmFtZT0ndy1hdXRvJz5Bam91dCBkJ2ltYWdlczwvbGVnZW5kPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdidG4gYnRuLW91dGxpbmUtaW5mbyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFBob3Rvc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlSW1hZ2VDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J3Bob3RvcydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdmaWxlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFjY2VwdD0naW1hZ2UvKidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtdWx0aXBsZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhpZGRlblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9maWVsZHNldD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdHR5cGU9J3N1Ym1pdCdcclxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2lzU3VibWl0dGluZ31cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdidG4gYnRuLWluZm8gbXQtMyc+XHJcblx0XHRcdFx0XHRcdEFqb3V0ZXIgY2VzIGltYWdlc1xyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdFx0e2xvYWRpbmcgJiYgPFNwaW5uZXIgY29sb3I9J2RhcmsnIC8+fVxyXG5cdFx0XHR7c3VjY2VzcyAmJiAoXHJcblx0XHRcdFx0PEFsZXJ0IGNvbG9yPSdzdWNjZXNzJz5MZXMgcGhvdG9zIG9udCBiaWVuIMOpdMOpIGVudm95w6llczwvQWxlcnQ+XHJcblx0XHRcdCl9XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZXN1bHQnPntyZW5kZXJQaG90b3Moc2VsZWN0ZWRGaWxlcyl9PC9kaXY+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUNyZWF0ZUdpdGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=