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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/authActions */ "./actions/authActions.js");




var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\FormAddImages.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var FormCreateGite = function FormCreateGite() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    nom: '',
    photos: '',
    error: '',
    success: '',
    loading: false,
    formData: ''
  }),
      values = _useState[0],
      setValues = _useState[1];

  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_4__["getCookie"])('token');
  var nom = values.nom,
      photos = values.photos,
      formData = values.formData;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      formData: new FormData()
    }));
  }, []);

  var handleChange = function handleChange(name) {
    return function (e) {
      formData.set(name, e.target.files);
      setValues(_objectSpread(_objectSpread({}, values), {}, {
        photos: e.target.files,
        formData: formData,
        error: ''
      }));
    };
  };

  var envoiPhoto = function envoiPhoto(e) {
    e.preventDefault();
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      loading: true
    }));
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_3__["savePhotos"])(formData, token).then(function (data) {
      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error
        }));
      } else {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          nom: '',
          error: '',
          photos: '',
          success: "Les photos ont bien \xE9t\xE9 envoy\xE9es",
          loading: false
        }));
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: envoiPhoto,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-8"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
            className: "border p-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
              className: "w-auto",
              children: "Images"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "btn btn-outline-info",
                children: ["Photos", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  onChange: handleChange('photos'),
                  type: "file",
                  accept: "image/*",
                  multiple: true,
                  hidden: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-info",
          children: "Ajouter ces images"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }, _this)
  }, void 0, false);
};

_s(FormCreateGite, "QF4LNm7F9AoYe23qUV9NfmFYQag=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9Gb3JtQWRkSW1hZ2VzLmpzIl0sIm5hbWVzIjpbIkZvcm1DcmVhdGVHaXRlIiwidXNlU3RhdGUiLCJub20iLCJwaG90b3MiLCJlcnJvciIsInN1Y2Nlc3MiLCJsb2FkaW5nIiwiZm9ybURhdGEiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ0b2tlbiIsImdldENvb2tpZSIsInVzZUVmZmVjdCIsIkZvcm1EYXRhIiwiaGFuZGxlQ2hhbmdlIiwibmFtZSIsImUiLCJzZXQiLCJ0YXJnZXQiLCJmaWxlcyIsImVudm9pUGhvdG8iLCJwcmV2ZW50RGVmYXVsdCIsInNhdmVQaG90b3MiLCJ0aGVuIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUFBOztBQUFBLGtCQUNBQyxzREFBUSxDQUFDO0FBQ3BDQyxPQUFHLEVBQUUsRUFEK0I7QUFFcENDLFVBQU0sRUFBRSxFQUY0QjtBQUdwQ0MsU0FBSyxFQUFFLEVBSDZCO0FBSXBDQyxXQUFPLEVBQUUsRUFKMkI7QUFLcENDLFdBQU8sRUFBRSxLQUwyQjtBQU1wQ0MsWUFBUSxFQUFFO0FBTjBCLEdBQUQsQ0FEUjtBQUFBLE1BQ3JCQyxNQURxQjtBQUFBLE1BQ2JDLFNBRGE7O0FBVTVCLE1BQU1DLEtBQUssR0FBR0Msc0VBQVMsQ0FBQyxPQUFELENBQXZCO0FBVjRCLE1BV3BCVCxHQVhvQixHQVdNTSxNQVhOLENBV3BCTixHQVhvQjtBQUFBLE1BV2ZDLE1BWGUsR0FXTUssTUFYTixDQVdmTCxNQVhlO0FBQUEsTUFXUEksUUFYTyxHQVdNQyxNQVhOLENBV1BELFFBWE87QUFhNUJLLHlEQUFTLENBQUMsWUFBTTtBQUNmSCxhQUFTLGlDQUFNRCxNQUFOO0FBQWNELGNBQVEsRUFBRSxJQUFJTSxRQUFKO0FBQXhCLE9BQVQ7QUFDQSxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLElBQUQ7QUFBQSxXQUFVLFVBQUNDLENBQUQsRUFBTztBQUNyQ1QsY0FBUSxDQUFDVSxHQUFULENBQWFGLElBQWIsRUFBbUJDLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUE1QjtBQUNBVixlQUFTLGlDQUFNRCxNQUFOO0FBQWNMLGNBQU0sRUFBRWEsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQS9CO0FBQXNDWixnQkFBUSxFQUFSQSxRQUF0QztBQUFnREgsYUFBSyxFQUFFO0FBQXZELFNBQVQ7QUFDQSxLQUhvQjtBQUFBLEdBQXJCOztBQUtBLE1BQU1nQixVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDSixDQUFELEVBQU87QUFDekJBLEtBQUMsQ0FBQ0ssY0FBRjtBQUNBWixhQUFTLGlDQUFNRCxNQUFOO0FBQWNGLGFBQU8sRUFBRTtBQUF2QixPQUFUO0FBQ0FnQiwyRUFBVSxDQUFDZixRQUFELEVBQVdHLEtBQVgsQ0FBVixDQUE0QmEsSUFBNUIsQ0FBaUMsVUFBQ0MsSUFBRCxFQUFVO0FBQzFDLFVBQUlBLElBQUksQ0FBQ3BCLEtBQVQsRUFBZ0I7QUFDZkssaUJBQVMsaUNBQU1ELE1BQU47QUFBY0osZUFBSyxFQUFFb0IsSUFBSSxDQUFDcEI7QUFBMUIsV0FBVDtBQUNBLE9BRkQsTUFFTztBQUNOSyxpQkFBUyxpQ0FDTEQsTUFESztBQUVSTixhQUFHLEVBQUUsRUFGRztBQUdSRSxlQUFLLEVBQUUsRUFIQztBQUlSRCxnQkFBTSxFQUFFLEVBSkE7QUFLUkUsaUJBQU8sNkNBTEM7QUFNUkMsaUJBQU8sRUFBRTtBQU5ELFdBQVQ7QUFRQTtBQUNELEtBYkQ7QUFjQSxHQWpCRDs7QUFrQkEsc0JBQ0M7QUFBQSwyQkFDQztBQUFNLGNBQVEsRUFBRWMsVUFBaEI7QUFBQSw4QkFDQztBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLGdDQUNDO0FBQUssbUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFFQztBQUFLLG1CQUFTLEVBQUMsVUFBZjtBQUFBLGlDQUNDO0FBQVUscUJBQVMsRUFBQyxZQUFwQjtBQUFBLG9DQUNDO0FBQVEsdUJBQVMsRUFBQyxRQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUVDO0FBQUssdUJBQVMsRUFBQyxZQUFmO0FBQUEscUNBQ0M7QUFBTyx5QkFBUyxFQUFDLHNCQUFqQjtBQUFBLGtEQUVDO0FBQ0MsMEJBQVEsRUFBRU4sWUFBWSxDQUFDLFFBQUQsQ0FEdkI7QUFFQyxzQkFBSSxFQUFDLE1BRk47QUFHQyx3QkFBTSxFQUFDLFNBSFI7QUFJQywwQkFBUSxNQUpUO0FBS0Msd0JBQU07QUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQXFCQztBQUFBLCtCQUNDO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBc0IsbUJBQVMsRUFBQyxjQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsbUJBREQ7QUErQkEsQ0F2RUQ7O0dBQU1kLGM7O0tBQUFBLGM7QUF5RVNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvaW1hZ2VzL2FkZC45ODgyYzg1MTkxN2M2NmMyMjY5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc2F2ZVBob3RvcyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuXHJcbmNvbnN0IEZvcm1DcmVhdGVHaXRlID0gKCkgPT4ge1xyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRub206ICcnLFxyXG5cdFx0cGhvdG9zOiAnJyxcclxuXHRcdGVycm9yOiAnJyxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRmb3JtRGF0YTogJycsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cdGNvbnN0IHsgbm9tLCBwaG90b3MsIGZvcm1EYXRhIH0gPSB2YWx1ZXM7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGZvcm1EYXRhOiBuZXcgRm9ybURhdGEoKSB9KTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IChuYW1lKSA9PiAoZSkgPT4ge1xyXG5cdFx0Zm9ybURhdGEuc2V0KG5hbWUsIGUudGFyZ2V0LmZpbGVzKTtcclxuXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgcGhvdG9zOiBlLnRhcmdldC5maWxlcywgZm9ybURhdGEsIGVycm9yOiAnJyB9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBlbnZvaVBob3RvID0gKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHRcdHNhdmVQaG90b3MoZm9ybURhdGEsIHRva2VuKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciB9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0bm9tOiAnJyxcclxuXHRcdFx0XHRcdGVycm9yOiAnJyxcclxuXHRcdFx0XHRcdHBob3RvczogJycsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBgTGVzIHBob3RvcyBvbnQgYmllbiDDqXTDqSBlbnZvecOpZXNgLFxyXG5cdFx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxmb3JtIG9uU3VibWl0PXtlbnZvaVBob3RvfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtOCc+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTQnPlxyXG5cdFx0XHRcdFx0XHQ8ZmllbGRzZXQgY2xhc3NOYW1lPSdib3JkZXIgcC0yJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGVnZW5kIGNsYXNzTmFtZT0ndy1hdXRvJz5JbWFnZXM8L2xlZ2VuZD5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdidG4gYnRuLW91dGxpbmUtaW5mbyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFBob3Rvc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwaG90b3MnKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdmaWxlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFjY2VwdD0naW1hZ2UvKidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtdWx0aXBsZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhpZGRlblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9maWVsZHNldD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG4gYnRuLWluZm8nPlxyXG5cdFx0XHRcdFx0XHRBam91dGVyIGNlcyBpbWFnZXNcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUNyZWF0ZUdpdGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=