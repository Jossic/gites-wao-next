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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\FormAddImages.js",
    _this = undefined,
    _s = $RefreshSig$();








var FormCreateGite = function FormCreateGite() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
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
        alt: ""
      }, photo, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, _this);
    });
  };

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      formState = _useForm.formState;

  var isSubmitting = formState.isSubmitting;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      gites = _useState2[0],
      setGites = _useState2[1];

  var listDesGites = function listDesGites() {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_3__["listGitesNoms"])().then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        setGites.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(gites).concat([data]));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    listDesGites();
  }, []);
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_4__["getCookie"])('token'); // const handleChange = (name) => (e) => {
  // 	formData.set(name, e.target.files);
  // 	setValues({
  // 		...values,
  // 		photos: e.target.files[0],
  // 		formData,
  // 		error: '',
  // 	});
  // };

  var onSubmit = function onSubmit(data) {
    console.log(data);
  };

  var envoiPhoto = function envoiPhoto(e) {// e.preventDefault();
    // setValues({ ...values, loading: true });
    // console.log(formData);
    // savePhotos(formData, token).then((data) => {
    // 	if (data.error) {
    // 		setValues({ ...values, error: data.error });
    // 	} else {
    // 		setValues({
    // 			...values,
    // 			nom: '',
    // 			error: '',
    // 			photos: '',
    // 			success: `Les photos ont bien été envoyées`,
    // 			loading: false,
    // 		});
    // 	}
    // });
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
                lineNumber: 97,
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
                  lineNumber: 107,
                  columnNumber: 10
                }, _this), gites.map(function (gite, i) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: gite.nom,
                    children: gite.nom
                  }, i, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 11
                  }, _this);
                }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "Autre",
                  children: "Autres pages"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
            className: "border p-2 mt-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
              className: "w-auto",
              children: "Ajout d'images"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
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
                  lineNumber: 123,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          disabled: isSubmitting,
          className: "btn btn-info mt-3",
          children: "Ajouter ces images"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "result",
      children: renderPhotos(selectedFiles)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_s(FormCreateGite, "6JuKTzsVK3AJYuTiHcG7euk99qY=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9Gb3JtQWRkSW1hZ2VzLmpzIl0sIm5hbWVzIjpbIkZvcm1DcmVhdGVHaXRlIiwidXNlU3RhdGUiLCJzZWxlY3RlZEZpbGVzIiwic2V0U2VsZWN0ZWRGaWxlcyIsImhhbmRsZUltYWdlQ2hhbmdlIiwiZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZXNBcnJheSIsIkFycmF5IiwiZnJvbSIsIm1hcCIsImZpbGUiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJwcmV2SW1hZ2VzIiwiY29uY2F0IiwicmV2b2tlT2JqZWN0VVJMIiwicmVuZGVyUGhvdG9zIiwic291cmNlIiwiY29uc29sZSIsImxvZyIsInBob3RvIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiaXNTdWJtaXR0aW5nIiwiZ2l0ZXMiLCJzZXRHaXRlcyIsImxpc3REZXNHaXRlcyIsImxpc3RHaXRlc05vbXMiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwidXNlRWZmZWN0IiwidG9rZW4iLCJnZXRDb29raWUiLCJvblN1Ym1pdCIsImVudm9pUGhvdG8iLCJyZXF1aXJlZCIsImdpdGUiLCJpIiwibm9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFBQSxrQkFDY0Msc0RBQVEsQ0FBQyxFQUFELENBRHRCO0FBQUEsTUFDckJDLGFBRHFCO0FBQUEsTUFDTkMsZ0JBRE07O0FBRzVCLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ2hDO0FBQ0EsUUFBSUEsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQWIsRUFBb0I7QUFDbkIsVUFBTUMsVUFBVSxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBV0ws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QTtBQUFBO0FBQUE7QUFBQSx5QkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF2QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBOENDO0FBQUEsK0JBQ0M7QUFDQyxjQUFJLEVBQUMsUUFETjtBQUVDLGtCQUFRLEVBQUViLFlBRlg7QUFHQyxtQkFBUyxFQUFDLG1CQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTlDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQXdEQztBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsZ0JBQXlCVCxZQUFZLENBQUNoQixhQUFEO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4REQ7QUFBQSxrQkFERDtBQTREQSxDQTdJRDs7R0FBTUYsYztVQTBCeUN1Qix1RDs7O0tBMUJ6Q3ZCLGM7QUErSVNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvaW1hZ2VzL2FkZC41ZTVjMWI0MDY2ZGZlMjhmZGVlOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc2F2ZVBob3RvcyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCB7IGxpc3RHaXRlc05vbXMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuY29uc3QgRm9ybUNyZWF0ZUdpdGUgPSAoKSA9PiB7XHJcblx0Y29uc3QgW3NlbGVjdGVkRmlsZXMsIHNldFNlbGVjdGVkRmlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVJbWFnZUNoYW5nZSA9IChlKSA9PiB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhlLnRhcmdldC5maWxlc1tdKVxyXG5cdFx0aWYgKGUudGFyZ2V0LmZpbGVzKSB7XHJcblx0XHRcdGNvbnN0IGZpbGVzQXJyYXkgPSBBcnJheS5mcm9tKGUudGFyZ2V0LmZpbGVzKS5tYXAoKGZpbGUpID0+XHJcblx0XHRcdFx0VVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKVxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJmaWxlc0FycmF5OiBcIiwgZmlsZXNBcnJheSk7XHJcblxyXG5cdFx0XHRzZXRTZWxlY3RlZEZpbGVzKChwcmV2SW1hZ2VzKSA9PiBwcmV2SW1hZ2VzLmNvbmNhdChmaWxlc0FycmF5KSk7XHJcblx0XHRcdEFycmF5LmZyb20oZS50YXJnZXQuZmlsZXMpLm1hcChcclxuXHRcdFx0XHQoZmlsZSkgPT4gVVJMLnJldm9rZU9iamVjdFVSTChmaWxlKSAvLyBhdm9pZCBtZW1vcnkgbGVha1xyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IHJlbmRlclBob3RvcyA9IChzb3VyY2UpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKCdzb3VyY2U6ICcsIHNvdXJjZSk7XHJcblx0XHRyZXR1cm4gc291cmNlLm1hcCgocGhvdG8pID0+IHtcclxuXHRcdFx0cmV0dXJuIDxpbWcgc3JjPXtwaG90b30gYWx0PScnIGtleT17cGhvdG99IC8+O1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBmb3JtU3RhdGUgfSA9IHVzZUZvcm0oKTtcclxuXHRjb25zdCB7IGlzU3VibWl0dGluZyB9ID0gZm9ybVN0YXRlO1xyXG5cclxuXHRjb25zdCBbZ2l0ZXMsIHNldEdpdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgbGlzdERlc0dpdGVzID0gKCkgPT4ge1xyXG5cdFx0bGlzdEdpdGVzTm9tcygpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0R2l0ZXMoLi4uZ2l0ZXMsIGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGlzdERlc0dpdGVzKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHJcblx0Ly8gY29uc3QgaGFuZGxlQ2hhbmdlID0gKG5hbWUpID0+IChlKSA9PiB7XHJcblx0Ly8gXHRmb3JtRGF0YS5zZXQobmFtZSwgZS50YXJnZXQuZmlsZXMpO1xyXG5cdC8vIFx0c2V0VmFsdWVzKHtcclxuXHQvLyBcdFx0Li4udmFsdWVzLFxyXG5cdC8vIFx0XHRwaG90b3M6IGUudGFyZ2V0LmZpbGVzWzBdLFxyXG5cdC8vIFx0XHRmb3JtRGF0YSxcclxuXHQvLyBcdFx0ZXJyb3I6ICcnLFxyXG5cdC8vIFx0fSk7XHJcblx0Ly8gfTtcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZW52b2lQaG90byA9IChlKSA9PiB7XHJcblx0XHQvLyBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQvLyBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUgfSk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcblx0XHQvLyBzYXZlUGhvdG9zKGZvcm1EYXRhLCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0Ly8gXHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0Ly8gXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3IgfSk7XHJcblx0XHQvLyBcdH0gZWxzZSB7XHJcblx0XHQvLyBcdFx0c2V0VmFsdWVzKHtcclxuXHRcdC8vIFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdC8vIFx0XHRcdG5vbTogJycsXHJcblx0XHQvLyBcdFx0XHRlcnJvcjogJycsXHJcblx0XHQvLyBcdFx0XHRwaG90b3M6ICcnLFxyXG5cdFx0Ly8gXHRcdFx0c3VjY2VzczogYExlcyBwaG90b3Mgb250IGJpZW4gw6l0w6kgZW52b3nDqWVzYCxcclxuXHRcdC8vIFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0Ly8gXHRcdH0pO1xyXG5cdFx0Ly8gXHR9XHJcblx0XHQvLyB9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtOCc+PC9kaXY+ICovfVxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC00Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tcm93IGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1hdXRvIG15LTEnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nbXItc20tMidcclxuXHRcdFx0XHRcdFx0XHRcdFx0aHRtbEZvcj0naW5saW5lRm9ybUN1c3RvbVNlbGVjdCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEfDrnRlL1NlY3Rpb24gY29uY2VybsOpXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNlbGVjdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdnaXRlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY3VzdG9tLXNlbGVjdCBtci1zbS0yJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD0naW5saW5lRm9ybUN1c3RvbVNlbGVjdCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gc2VsZWN0ZWQ+U2VsZWN0aW9uLi4uPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtnaXRlcy5tYXAoKGdpdGUsIGkpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGtleT17aX0gdmFsdWU9e2dpdGUubm9tfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtnaXRlLm5vbX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9J0F1dHJlJz5BdXRyZXMgcGFnZXM8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzTmFtZT0nYm9yZGVyIHAtMiBtdC0zJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGVnZW5kIGNsYXNzTmFtZT0ndy1hdXRvJz5Bam91dCBkJ2ltYWdlczwvbGVnZW5kPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdidG4gYnRuLW91dGxpbmUtaW5mbyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFBob3Rvc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlSW1hZ2VDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J3Bob3RvcydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdmaWxlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFjY2VwdD0naW1hZ2UvKidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtdWx0aXBsZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhpZGRlblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9maWVsZHNldD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdHR5cGU9J3N1Ym1pdCdcclxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2lzU3VibWl0dGluZ31cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdidG4gYnRuLWluZm8gbXQtMyc+XHJcblx0XHRcdFx0XHRcdEFqb3V0ZXIgY2VzIGltYWdlc1xyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jlc3VsdCc+e3JlbmRlclBob3RvcyhzZWxlY3RlZEZpbGVzKX08L2Rpdj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtQ3JlYXRlR2l0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==