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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_uploadActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/uploadActions */ "./actions/uploadActions.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\FormAddImages.js",
    _this = undefined,
    _s = $RefreshSig$();

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var FormCreateGite = function FormCreateGite() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      selectedFiles = _useState[0],
      setSelectedFiles = _useState[1];

  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_5__["getCookie"])('token');

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    success: '',
    loading: false,
    error: '',
    formData: ''
  }),
      values = _useState2[0],
      setValues = _useState2[1];

  var loading = values.loading,
      success = values.success,
      error = values.error,
      formData = values.formData;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      formData: new FormData()
    }));
  }, []);

  var handleImageChange = function handleImageChange(e) {
    var _iterator = _createForOfIteratorHelper(e.target.files),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var file = _step.value;
        formData.append('photos', file);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var _iterator2 = _createForOfIteratorHelper(formData),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _step2$value = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_step2.value, 2),
            key = _step2$value[0],
            value = _step2$value[1];

        console.log("".concat(key, ": ").concat(value));
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    if (e.target.files) {
      var filesArray = Array.from(e.target.files).map(function (file) {
        return URL.createObjectURL(file);
      });
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
    return source.map(function (photo) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: photo,
        alt: "",
        width: 320,
        height: 180,
        className: "img-thumbnail"
      }, photo, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, _this);
    });
  };

  var addPhoto = function addPhoto(e) {
    e.preventDefault();
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      loading: true
    }));
    Object(_actions_uploadActions__WEBPACK_IMPORTED_MODULE_4__["uploadPhoto"])(formData, token).then(function (data) {
      console.log('data vaut =>', data);

      if (data.error) {
        console.log('une grosse erreur');
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error
        }));
      } else {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          success: true,
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
      onSubmit: addPhoto,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-3",
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
                  lineNumber: 91,
                  columnNumber: 10
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "form-group",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    className: "btn btn-outline-info",
                    children: ["Photo", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      onChange: handleImageChange,
                      name: "photos",
                      type: "file",
                      accept: "image/*",
                      multiple: true,
                      hidden: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 98,
                      columnNumber: 12
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  type: "submit",
                  className: "btn btn-info mt-3",
                  children: "Ajouter les images"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 198,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "result col-md-9",
          children: renderPhotos(selectedFiles)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 4
    }, _this), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Spinner"], {
      color: "dark"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 16
    }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
      color: "success",
      children: "La photo a bien \xE9t\xE9 envoy\xE9e"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 5
    }, _this)]
  }, void 0, true);
};

_s(FormCreateGite, "mi+AkknsXa1evSueSUGoZ/yewWY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9Gb3JtQWRkSW1hZ2VzLmpzIl0sIm5hbWVzIjpbIkZvcm1DcmVhdGVHaXRlIiwidXNlU3RhdGUiLCJzZWxlY3RlZEZpbGVzIiwic2V0U2VsZWN0ZWRGaWxlcyIsInRva2VuIiwiZ2V0Q29va2llIiwic3VjY2VzcyIsImxvYWRpbmciLCJlcnJvciIsImZvcm1EYXRhIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlRWZmZWN0IiwiRm9ybURhdGEiLCJoYW5kbGVJbWFnZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImZpbGUiLCJhcHBlbmQiLCJrZXkiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJmaWxlc0FycmF5IiwiQXJyYXkiLCJmcm9tIiwibWFwIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicHJldkltYWdlcyIsImNvbmNhdCIsInJldm9rZU9iamVjdFVSTCIsInJlbmRlclBob3RvcyIsInNvdXJjZSIsInBob3RvIiwiYWRkUGhvdG8iLCJwcmV2ZW50RGVmYXVsdCIsInVwbG9hZFBob3RvIiwidGhlbiIsImRhdGEiLCJzZXRUaW1lb3V0IiwiUm91dGVyIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQUE7O0FBQUEsa0JBQ2NDLHNEQUFRLENBQUMsRUFBRCxDQUR0QjtBQUFBLE1BQ3JCQyxhQURxQjtBQUFBLE1BQ05DLGdCQURNOztBQUU1QixNQUFNQyxLQUFLLEdBQUdDLHNFQUFTLENBQUMsT0FBRCxDQUF2Qjs7QUFGNEIsbUJBSUFKLHNEQUFRLENBQUM7QUFDcENLLFdBQU8sRUFBRSxFQUQyQjtBQUVwQ0MsV0FBTyxFQUFFLEtBRjJCO0FBR3BDQyxTQUFLLEVBQUUsRUFINkI7QUFJcENDLFlBQVEsRUFBRTtB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QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQTVHRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRCxlQTBIQztBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBQSxvQkFDRW1CLFlBQVksQ0FBQy9CLGFBQUQ7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsRUFzSUVLLE9BQU8saUJBQUkscUVBQUMsa0RBQUQ7QUFBUyxXQUFLLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdEliLEVBdUlFRCxPQUFPLGlCQUNQLHFFQUFDLGdEQUFEO0FBQU8sV0FBSyxFQUFDLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4SUY7QUFBQSxrQkFERDtBQTZJQSxDQXhORDs7R0FBTU4sYzs7S0FBQUEsYztBQTBOU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9pbWFnZXMvYWRkLjUyYTUwYWFjMjllYjcyMzhiMjBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1cGxvYWRQaG90byB9IGZyb20gJy4uLy4uL2FjdGlvbnMvdXBsb2FkQWN0aW9ucyc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgU3Bpbm5lciwgQWxlcnQgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmNvbnN0IEZvcm1DcmVhdGVHaXRlID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtzZWxlY3RlZEZpbGVzLCBzZXRTZWxlY3RlZEZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHJcblx0Y29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRlcnJvcjogJycsXHJcblx0XHRmb3JtRGF0YTogJycsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHsgbG9hZGluZywgc3VjY2VzcywgZXJyb3IsIGZvcm1EYXRhIH0gPSB2YWx1ZXM7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGZvcm1EYXRhOiBuZXcgRm9ybURhdGEoKSB9KTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUltYWdlQ2hhbmdlID0gKGUpID0+IHtcclxuXHRcdGZvciAoY29uc3QgZmlsZSBvZiBlLnRhcmdldC5maWxlcykge1xyXG5cdFx0XHRmb3JtRGF0YS5hcHBlbmQoJ3Bob3RvcycsIGZpbGUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIGZvcm1EYXRhKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGAke2tleX06ICR7dmFsdWV9YCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGUudGFyZ2V0LmZpbGVzKSB7XHJcblx0XHRcdGNvbnN0IGZpbGVzQXJyYXkgPSBBcnJheS5mcm9tKGUudGFyZ2V0LmZpbGVzKS5tYXAoKGZpbGUpID0+XHJcblx0XHRcdFx0VVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKVxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0c2V0U2VsZWN0ZWRGaWxlcygocHJldkltYWdlcykgPT4gcHJldkltYWdlcy5jb25jYXQoZmlsZXNBcnJheSkpO1xyXG5cdFx0XHRBcnJheS5mcm9tKGUudGFyZ2V0LmZpbGVzKS5tYXAoXHJcblx0XHRcdFx0KGZpbGUpID0+IFVSTC5yZXZva2VPYmplY3RVUkwoZmlsZSkgLy8gYXZvaWQgbWVtb3J5IGxlYWtcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCByZW5kZXJQaG90b3MgPSAoc291cmNlKSA9PiB7XHJcblx0XHRyZXR1cm4gc291cmNlLm1hcCgocGhvdG8pID0+IHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRzcmM9e3Bob3RvfVxyXG5cdFx0XHRcdFx0YWx0PScnXHJcblx0XHRcdFx0XHRrZXk9e3Bob3RvfVxyXG5cdFx0XHRcdFx0d2lkdGg9ezMyMH1cclxuXHRcdFx0XHRcdGhlaWdodD17MTgwfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdpbWctdGh1bWJuYWlsJ1xyXG5cdFx0XHRcdC8+XHJcblx0XHRcdCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBhZGRQaG90byA9IChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUgfSk7XHJcblxyXG5cdFx0dXBsb2FkUGhvdG8oZm9ybURhdGEsIHRva2VuKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdkYXRhIHZhdXQgPT4nLCBkYXRhKTtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygndW5lIGdyb3NzZSBlcnJldXInKTtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yIH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiB0cnVlLFxyXG5cdFx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRSb3V0ZXIucHVzaCgnL2FkbWluL2dlc3Rpb25JbWFnZXMnKTtcclxuXHRcdFx0XHR9LCAzMDAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxmb3JtIG9uU3VibWl0PXthZGRQaG90b30+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9J2NvbC1tZC04Jz48L2Rpdj4gKi99XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTMnPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1yb3cgYWxpZ24taXRlbXMtY2VudGVyJz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLWF1dG8gbXktMSc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZmllbGRzZXQgY2xhc3NOYW1lPSdib3JkZXIgcC0yIG10LTMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGVnZW5kIGNsYXNzTmFtZT0ndy1hdXRvJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRBam91dCBkJ2ltYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGVnZW5kPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2J0biBidG4tb3V0bGluZS1pbmZvJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFBob3RvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUltYWdlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdwaG90b3MnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J2ZpbGUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFjY2VwdD0naW1hZ2UvKidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bXVsdGlwbGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGlkZGVuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9maWVsZHNldD5cclxuXHRcdFx0XHRcdFx0XHRcdHsvKiA8ZmllbGRzZXQgY2xhc3NOYW1lPSdib3JkZXIgcC0yIG10LTMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGVnZW5kIGNsYXNzTmFtZT0ndy1hdXRvJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRDb25jZXJuZSBsYSBwYWdlIGV0IHNlY3Rpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9sZWdlbmQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nbXItc20tMiBwdC0yJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGh0bWxGb3I9J2lubGluZUZvcm1DdXN0b21TZWxlY3QnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFBhZ2UgYXNzb2Npw6llXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3RcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdwYWdlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY3VzdG9tLXNlbGVjdCBtci1zbS0yJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldFBhZ2UoZS50YXJnZXQudmFsdWUpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkPSdpbmxpbmVGb3JtQ3VzdG9tU2VsZWN0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGRlZmF1bHRWYWx1ZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFNlbGVjdGlvbi4uLlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtnaXRlcy5tYXAoKGdpdGUsIGkpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17Z2l0ZS5zbHVnfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2dpdGUubm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nQXV0cmUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QXV0cmVzIHBhZ2VzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J21yLXNtLTIgcHQtMidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRodG1sRm9yPSdpbmxpbmVGb3JtQ3VzdG9tU2VsZWN0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRTZWN0aW9uIGFzc29jacOpZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nc2VjdGlvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRTZWN0aW9uKGUudGFyZ2V0LnZhbHVlKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2N1c3RvbS1zZWxlY3QgbXItc20tMidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZD0naW5saW5lRm9ybUN1c3RvbVNlbGVjdCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBkZWZhdWx0VmFsdWU+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTZWxlY3Rpb24uLi5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPSdBdXRyZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBdXRyZXMgc2VjdGlvbnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPSdwcmVzZW50YXRpb24nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0UHLDqXNlbnRhdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9J3Bpc2NpbmUnPlBpc2NpbmU8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPSdpbnRlcmlldXInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0SW50w6lyaWV1clxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZmllbGRzZXQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZmllbGRzZXQgY2xhc3NOYW1lPSdib3JkZXIgcC0yIG10LTMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGVnZW5kIGNsYXNzTmFtZT0ndy1hdXRvJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRJbmZvcyBkZSBsJ2ltYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGVnZW5kPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHROb20gZGUgbCdpbWFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0Tm9tKGUudGFyZ2V0LnZhbHVlKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J25vbSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtub219XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFRleHRlIGFsdGVybmF0aWZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEFsdChlLnRhcmdldC52YWx1ZSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdhbHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17YWx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9maWVsZHNldD4gKi99XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nc3VibWl0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYnRuIGJ0bi1pbmZvIG10LTMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEFqb3V0ZXIgbGVzIGltYWdlc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jlc3VsdCBjb2wtbWQtOSc+XHJcblx0XHRcdFx0XHRcdHtyZW5kZXJQaG90b3Moc2VsZWN0ZWRGaWxlcyl9XHJcblx0XHRcdFx0XHRcdHsvKiBcclxuXHRcdFx0XHRcdFx0PHA+Tm9tIGRlIGxhIHBob3RvPC9wPlxyXG5cdFx0XHRcdFx0XHQ8cD5UZXh0ZSBhbHRlcm5hdGlmPC9wPlxyXG5cdFx0XHRcdFx0XHQ8cD5Db25jZXJuZSBsYSBwYWdlPC9wPlxyXG5cdFx0XHRcdFx0XHQ8cD5Db25jZXJuZSBsYSBzZWN0aW9uPC9wPiAqL31cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdHtsb2FkaW5nICYmIDxTcGlubmVyIGNvbG9yPSdkYXJrJyAvPn1cclxuXHRcdFx0e3N1Y2Nlc3MgJiYgKFxyXG5cdFx0XHRcdDxBbGVydCBjb2xvcj0nc3VjY2Vzcyc+TGEgcGhvdG8gYSBiaWVuIMOpdMOpIGVudm95w6llPC9BbGVydD5cclxuXHRcdFx0KX1cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtQ3JlYXRlR2l0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==