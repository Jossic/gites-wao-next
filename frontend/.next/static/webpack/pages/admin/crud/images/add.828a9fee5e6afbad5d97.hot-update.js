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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





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
          next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/admin/gestionImages');
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
    }, _this), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Spinner"], {
      color: "dark"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 16
    }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Alert"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9Gb3JtQWRkSW1hZ2VzLmpzIl0sIm5hbWVzIjpbIkZvcm1DcmVhdGVHaXRlIiwidXNlU3RhdGUiLCJzZWxlY3RlZEZpbGVzIiwic2V0U2VsZWN0ZWRGaWxlcyIsInRva2VuIiwiZ2V0Q29va2llIiwic3VjY2VzcyIsImxvYWRpbmciLCJlcnJvciIsImZvcm1EYXRhIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlRWZmZWN0IiwiRm9ybURhdGEiLCJoYW5kbGVJbWFnZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImZpbGUiLCJhcHBlbmQiLCJrZXkiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJmaWxlc0FycmF5IiwiQXJyYXkiLCJmcm9tIiwibWFwIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicHJldkltYWdlcyIsImNvbmNhdCIsInJldm9rZU9iamVjdFVSTCIsInJlbmRlclBob3RvcyIsInNvdXJjZSIsInBob3RvIiwiYWRkUGhvdG8iLCJwcmV2ZW50RGVmYXVsdCIsInVwbG9hZFBob3RvIiwidGhlbiIsImRhdGEiLCJzZXRUaW1lb3V0IiwiUm91dGVyIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUFBOztBQUFBLGtCQUNjQyxzREFBUSxDQUFDLEVBQUQsQ0FEdEI7QUFBQSxNQUNyQkMsYUFEcUI7QUFBQSxNQUNOQyxnQkFETTs7QUFFNUIsTUFBTUMsS0FBSyxHQUFHQyxzRUFBUyxDQUFDLE9BQUQsQ0FBdkI7O0FBRjRCLG1CQUlBSixzREFBUSxDQUFDO0FBQ3BDSyxXQUFPLEVBQUUsRUFEMkI7QUFFcENDLFdBQU8sRUFBRSxLQUYyQjtBQUdwQ0MsU0FBSyxFQUFFLEVBSDZCO0FBSXBDQyxZQUFRLEVBQUU7QUFKMEIsR0FBRCxDQUpSO0FBQUEsTUFJckJDLE1BSnFCO0FBQUEsTUFJYkMsU0FKYTs7QUFBQSxNQVdwQkosT0FYb0IsR0FXa0JHLE1BWGxCLENBV3BCSCxPQVhvQjtBQUFBLE1BV1hELE9BWFcsR0FXa0JJLE1BWGxCLENBV1hKLE9BWFc7QUFBQSxNQVdGRSxLQVhFLEdBV2tCRSxNQVhsQixDQVdGRixLQVhFO0FBQUEsTUFXS0MsUUFYTCxHQVdrQkMsTUFYbEIsQ0FXS0QsUUFYTDtBQWE1QkcseURBQVMsQ0FBQyxZQUFNO0FBQ2ZELGFBQVMsaUNBQU1ELE1BQU47QUFBY0QsY0FBUSxFQUFFLElBQUlJLFFBQUo7QUFBeEIsT0FBVDtBQUNBLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxDQUFELEVBQU87QUFBQSwrQ0FDYkEsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBREk7QUFBQTs7QUFBQTtBQUNoQywwREFBbUM7QUFBQSxZQUF4QkMsSUFBd0I7QUFDbENULGdCQUFRLENBQUNVLE1BQVQsQ0FBZ0IsUUFBaEIsRUFBMEJELElBQTFCO0FBQ0E7QUFIK0I7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxnREFLTFQsUUFMSztBQUFBOztBQUFBO0FBS2hDLDZEQUFxQztBQUFBO0FBQUEsWUFBekJXLEdBQXlCO0FBQUEsWUFBcEJDLEtBQW9COztBQUNwQ0MsZUFBTyxDQUFDQyxHQUFSLFdBQWVILEdBQWYsZUFBdUJDLEtBQXZCO0FBQ0E7QUFQK0I7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTaEMsUUFBSU4sQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQWIsRUFBb0I7QUFDbkIsVUFBTU8sVUFBVSxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBV1gsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQXBCLEVBQTJCVSxHQUEzQixDQUErQixVQUFDVCxJQUFEO0FBQUEsZUFDakRVLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQlgsSUFBcEIsQ0FEaUQ7QUFBQSxPQUEvQixDQUFuQjtBQUlBZixzQkFBZ0IsQ0FBQyxVQUFDMkIsVUFBRDtBQUFBLGVBQWdCQSxVQUFVLENBQUNDLE1BQVgsQ0FBa0JQLFVBQWxCLENBQWhCO0FBQUEsT0FBRCxDQUFoQjtBQUNBQyxXQUFLLENBQUNDLElBQU4sQ0FBV1gsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQXBCLEVBQTJCVSxHQUEzQixDQUNDLFVBQUNULElBQUQ7QUFBQSxlQUFVVSxHQUFHLENBQUNJLGVBQUosQ0FBb0JkLElBQXBCLENBQVY7QUFBQSxPQURELENBQ3FDO0FBRHJDO0FBR0E7QUFDRCxHQW5CRDs7QUFxQkEsTUFBTWUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsTUFBRCxFQUFZO0FBQ2hDLFdBQU9BLE1BQU0sQ0FBQ1AsR0FBUCxDQUFXLFVBQUNRLEtBQUQsRUFBVztBQUM1QiwwQkFDQztBQUNDLFdBQUcsRUFBRUEsS0FETjtBQUVDLFdBQUcsRUFBQyxFQUZMO0FBSUMsYUFBSyxFQUFFLEdBSlI7QUFLQyxjQUFNLEVBQUUsR0FMVDtBQU1DLGlCQUFTLEVBQUM7QUFOWCxTQUdNQSxLQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQVVBLEtBWE0sQ0FBUDtBQVlBLEdBYkQ7O0FBZUEsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ3JCLENBQUQsRUFBTztBQUN2QkEsS0FBQyxDQUFDc0IsY0FBRjtBQUNBMUIsYUFBUyxpQ0FBTUQsTUFBTjtBQUFjSCxhQUFPLEVBQUU7QUFBdkIsT0FBVDtBQUVBK0IsOEVBQVcsQ0FBQzdCLFFBQUQsRUFBV0wsS0FBWCxDQUFYLENBQTZCbUMsSUFBN0IsQ0FBa0MsVUFBQ0MsSUFBRCxFQUFVO0FBQzNDbEIsYUFBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QmlCLElBQTVCOztBQUNBLFVBQUlBLElBQUksQ0FBQ2hDLEtBQVQsRUFBZ0I7QUFDZmMsZUFBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFDQVosaUJBQVMsaUNBQU1ELE1BQU47QUFBY0YsZUFBSyxFQUFFZ0MsSUFBSSxDQUFDaEM7QUFBMUIsV0FBVDtBQUNBLE9BSEQsTUFHTztBQUNORyxpQkFBUyxpQ0FDTEQsTUFESztBQUVSSixpQkFBTyxFQUFFLElBRkQ7QUFHUkMsaUJBQU8sRUFBRTtBQUhELFdBQVQ7QUFLQWtDLGtCQUFVLENBQUMsWUFBTTtBQUNoQkMsNERBQU0sQ0FBQ0MsSUFBUCxDQUFZLHNCQUFaO0FBQ0EsU0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdBO0FBQ0QsS0FmRDtBQWdCQSxHQXBCRDs7QUFzQkEsc0JBQ0M7QUFBQSw0QkFDQztBQUFNLGNBQVEsRUFBRVAsUUFBaEI7QUFBQSw2QkFDQztBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLGdDQUVDO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEsaUNBQ0M7QUFBSyxxQkFBUyxFQUFDLDZCQUFmO0FBQUEsbUNBQ0M7QUFBSyx1QkFBUyxFQUFDLGVBQWY7QUFBQSxzQ0FDQztBQUFVLHlCQUFTLEVBQUMsaUJBQXBCO0FBQUEsd0NBQ0M7QUFBUSwyQkFBUyxFQUFDLFFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURELGVBS0M7QUFBSywyQkFBUyxFQUFDLFlBQWY7QUFBQSx5Q0FDQztBQUFPLDZCQUFTLEVBQUMsc0JBQWpCO0FBQUEscURBRUM7QUFDQyw4QkFBUSxFQUFFdEIsaUJBRFg7QUFFQywwQkFBSSxFQUFDLFFBRk47QUFHQywwQkFBSSxFQUFDLE1BSE47QUFJQyw0QkFBTSxFQUFDLFNBSlI7QUFLQyw4QkFBUSxNQUxUO0FBTUMsNEJBQU07QUFOUDtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURELGVBNEdDO0FBQUEsdUNBQ0M7QUFDQyxzQkFBSSxFQUFDLFFBRE47QUFFQywyQkFBUyxFQUFDLG1CQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkE1R0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkQsZUEwSEM7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsb0JBQ0VtQixZQUFZLENBQUMvQixhQUFEO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELEVBc0lFSyxPQUFPLGlCQUFJLHFFQUFDLGtEQUFEO0FBQVMsV0FBSyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRJYixFQXVJRUQsT0FBTyxpQkFDUCxxRUFBQyxnREFBRDtBQUFPLFdBQUssRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeElGO0FBQUEsa0JBREQ7QUE2SUEsQ0F4TkQ7O0dBQU1OLGM7O0tBQUFBLGM7QUEwTlNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvaW1hZ2VzL2FkZC44MjhhOWZlZTVlNmFmYmFkNWQ5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXBsb2FkUGhvdG8gfSBmcm9tICcuLi8uLi9hY3Rpb25zL3VwbG9hZEFjdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IFNwaW5uZXIsIEFsZXJ0IH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5jb25zdCBGb3JtQ3JlYXRlR2l0ZSA9ICgpID0+IHtcclxuXHRjb25zdCBbc2VsZWN0ZWRGaWxlcywgc2V0U2VsZWN0ZWRGaWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblxyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRzdWNjZXNzOiAnJyxcclxuXHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0ZXJyb3I6ICcnLFxyXG5cdFx0Zm9ybURhdGE6ICcnLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCB7IGxvYWRpbmcsIHN1Y2Nlc3MsIGVycm9yLCBmb3JtRGF0YSB9ID0gdmFsdWVzO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBmb3JtRGF0YTogbmV3IEZvcm1EYXRhKCkgfSk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVJbWFnZUNoYW5nZSA9IChlKSA9PiB7XHJcblx0XHRmb3IgKGNvbnN0IGZpbGUgb2YgZS50YXJnZXQuZmlsZXMpIHtcclxuXHRcdFx0Zm9ybURhdGEuYXBwZW5kKCdwaG90b3MnLCBmaWxlKTtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBmb3JtRGF0YSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhgJHtrZXl9OiAke3ZhbHVlfWApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChlLnRhcmdldC5maWxlcykge1xyXG5cdFx0XHRjb25zdCBmaWxlc0FycmF5ID0gQXJyYXkuZnJvbShlLnRhcmdldC5maWxlcykubWFwKChmaWxlKSA9PlxyXG5cdFx0XHRcdFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSlcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdHNldFNlbGVjdGVkRmlsZXMoKHByZXZJbWFnZXMpID0+IHByZXZJbWFnZXMuY29uY2F0KGZpbGVzQXJyYXkpKTtcclxuXHRcdFx0QXJyYXkuZnJvbShlLnRhcmdldC5maWxlcykubWFwKFxyXG5cdFx0XHRcdChmaWxlKSA9PiBVUkwucmV2b2tlT2JqZWN0VVJMKGZpbGUpIC8vIGF2b2lkIG1lbW9yeSBsZWFrXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgcmVuZGVyUGhvdG9zID0gKHNvdXJjZSkgPT4ge1xyXG5cdFx0cmV0dXJuIHNvdXJjZS5tYXAoKHBob3RvKSA9PiB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0c3JjPXtwaG90b31cclxuXHRcdFx0XHRcdGFsdD0nJ1xyXG5cdFx0XHRcdFx0a2V5PXtwaG90b31cclxuXHRcdFx0XHRcdHdpZHRoPXszMjB9XHJcblx0XHRcdFx0XHRoZWlnaHQ9ezE4MH1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT0naW1nLXRodW1ibmFpbCdcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgYWRkUGhvdG8gPSAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cclxuXHRcdHVwbG9hZFBob3RvKGZvcm1EYXRhLCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZGF0YSB2YXV0ID0+JywgZGF0YSk7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3VuZSBncm9zc2UgZXJyZXVyJyk7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciB9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Um91dGVyLnB1c2goJy9hZG1pbi9nZXN0aW9uSW1hZ2VzJyk7XHJcblx0XHRcdFx0fSwgMzAwMCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17YWRkUGhvdG99PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtOCc+PC9kaXY+ICovfVxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC0zJz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tcm93IGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1hdXRvIG15LTEnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzTmFtZT0nYm9yZGVyIHAtMiBtdC0zJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxlZ2VuZCBjbGFzc05hbWU9J3ctYXV0byc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0QWpvdXQgZCdpbWFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xlZ2VuZD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdidG4gYnRuLW91dGxpbmUtaW5mbyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRQaG90b1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVJbWFnZUNoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0ncGhvdG9zJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdmaWxlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhY2NlcHQ9J2ltYWdlLyonXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG11bHRpcGxlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhpZGRlblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZmllbGRzZXQ+XHJcblx0XHRcdFx0XHRcdFx0XHR7LyogPGZpZWxkc2V0IGNsYXNzTmFtZT0nYm9yZGVyIHAtMiBtdC0zJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxlZ2VuZCBjbGFzc05hbWU9J3ctYXV0byc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Q29uY2VybmUgbGEgcGFnZSBldCBzZWN0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGVnZW5kPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J21yLXNtLTIgcHQtMidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRodG1sRm9yPSdpbmxpbmVGb3JtQ3VzdG9tU2VsZWN0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRQYWdlIGFzc29jacOpZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0ncGFnZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2N1c3RvbS1zZWxlY3QgbXItc20tMidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRQYWdlKGUudGFyZ2V0LnZhbHVlKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZD0naW5saW5lRm9ybUN1c3RvbVNlbGVjdCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBkZWZhdWx0VmFsdWU+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTZWxlY3Rpb24uLi5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Z2l0ZXMubWFwKChnaXRlLCBpKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGtleT17aX0gdmFsdWU9e2dpdGUuc2x1Z30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtnaXRlLm5vbX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9J0F1dHJlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEF1dHJlcyBwYWdlc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdtci1zbS0yIHB0LTInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aHRtbEZvcj0naW5saW5lRm9ybUN1c3RvbVNlbGVjdCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0U2VjdGlvbiBhc3NvY2nDqWVcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J3NlY3Rpb24nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0U2VjdGlvbihlLnRhcmdldC52YWx1ZSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjdXN0b20tc2VsZWN0IG1yLXNtLTInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9J2lubGluZUZvcm1DdXN0b21TZWxlY3QnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gZGVmYXVsdFZhbHVlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0U2VsZWN0aW9uLi4uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nQXV0cmUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QXV0cmVzIHNlY3Rpb25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0ncHJlc2VudGF0aW9uJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFByw6lzZW50YXRpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPSdwaXNjaW5lJz5QaXNjaW5lPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0naW50ZXJpZXVyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEludMOpcmlldXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzTmFtZT0nYm9yZGVyIHAtMiBtdC0zJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxlZ2VuZCBjbGFzc05hbWU9J3ctYXV0byc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0SW5mb3MgZGUgbCdpbWFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xlZ2VuZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Tm9tIGRlIGwnaW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldE5vbShlLnRhcmdldC52YWx1ZSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdub20nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17bm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRUZXh0ZSBhbHRlcm5hdGlmXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBbHQoZS50YXJnZXQudmFsdWUpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nYWx0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2FsdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZmllbGRzZXQ+ICovfVxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3N1Ym1pdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2J0biBidG4taW5mbyBtdC0zJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRBam91dGVyIGxlcyBpbWFnZXNcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZXN1bHQgY29sLW1kLTknPlxyXG5cdFx0XHRcdFx0XHR7cmVuZGVyUGhvdG9zKHNlbGVjdGVkRmlsZXMpfVxyXG5cdFx0XHRcdFx0XHR7LyogXHJcblx0XHRcdFx0XHRcdDxwPk5vbSBkZSBsYSBwaG90bzwvcD5cclxuXHRcdFx0XHRcdFx0PHA+VGV4dGUgYWx0ZXJuYXRpZjwvcD5cclxuXHRcdFx0XHRcdFx0PHA+Q29uY2VybmUgbGEgcGFnZTwvcD5cclxuXHRcdFx0XHRcdFx0PHA+Q29uY2VybmUgbGEgc2VjdGlvbjwvcD4gKi99XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0XHR7bG9hZGluZyAmJiA8U3Bpbm5lciBjb2xvcj0nZGFyaycgLz59XHJcblx0XHRcdHtzdWNjZXNzICYmIChcclxuXHRcdFx0XHQ8QWxlcnQgY29sb3I9J3N1Y2Nlc3MnPkxhIHBob3RvIGEgYmllbiDDqXTDqSBlbnZvecOpZTwvQWxlcnQ+XHJcblx0XHRcdCl9XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUNyZWF0ZUdpdGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=