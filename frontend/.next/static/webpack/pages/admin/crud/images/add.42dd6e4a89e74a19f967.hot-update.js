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
      // return <img src={photo} alt='' key={photo} />;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
        src: photo,
        alt: "photo",
        width: 320,
        height: 180
      }, photo, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
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
                    value: gite.nom,
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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "result",
      children: renderPhotos(selectedFiles)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 155,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9Gb3JtQWRkSW1hZ2VzLmpzIl0sIm5hbWVzIjpbIkZvcm1DcmVhdGVHaXRlIiwidXNlU3RhdGUiLCJzZWxlY3RlZEZpbGVzIiwic2V0U2VsZWN0ZWRGaWxlcyIsImhhbmRsZUltYWdlQ2hhbmdlIiwiZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZXNBcnJheSIsIkFycmF5IiwiZnJvbSIsIm1hcCIsImZpbGUiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJwcmV2SW1hZ2VzIiwiY29uY2F0IiwicmV2b2tlT2JqZWN0VVJMIiwicmVuZGVyUGhvdG9zIiwic291cmNlIiwiY29uc29sZSIsImxvZyIsInBob3RvIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiaXNTdWJtaXR0aW5nIiwiZ2l0ZXMiLCJzZXRHaXRlcyIsImxpc3REZXNHaXRlcyIsImxpc3RHaXRlc05vbXMiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwidXNlRWZmZWN0IiwidG9rZW4iLCJnZXRDb29raWUiLCJvblN1Ym1pdCIsImVudm9pUGhvdG8iLCJyZXF1aXJlZCIsImdpdGUiLCJpIiwibm9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFBQSxrQkFDY0Msc0RBQVEsQ0FBQyxFQUFELENBRHRCO0FBQUEsTUFDckJDLGFBRHFCO0FBQUEsTUFDTkMsZ0JBRE07O0FBRzVCLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ2hDO0FBQ0EsUUFBSUEsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQWIsRUFBb0I7QUFDbkIsVUFBTUMsVUFBVSxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBV0ws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Qyx3QkFBTSxFQUFDLFNBTFI7QUFNQywwQkFBUSxNQU5UO0FBT0Msd0JBQU07QUFQUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXZCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUE4Q0M7QUFBQSwrQkFDQztBQUNDLGNBQUksRUFBQyxRQUROO0FBRUMsa0JBQVEsRUFBRWIsWUFGWDtBQUdDLG1CQUFTLEVBQUMsbUJBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBOUNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBd0RDO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSxnQkFBeUJULFlBQVksQ0FBQ2hCLGFBQUQ7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhERDtBQUFBLGtCQUREO0FBNERBLENBdEpEOztHQUFNRixjO1VBbUN5Q3VCLHVEOzs7S0FuQ3pDdkIsYztBQXdKU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9pbWFnZXMvYWRkLjQyZGQ2ZTRhODllNzRhMTlmOTY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBzYXZlUGhvdG9zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHsgbGlzdEdpdGVzTm9tcyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5jb25zdCBGb3JtQ3JlYXRlR2l0ZSA9ICgpID0+IHtcclxuXHRjb25zdCBbc2VsZWN0ZWRGaWxlcywgc2V0U2VsZWN0ZWRGaWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUltYWdlQ2hhbmdlID0gKGUpID0+IHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmZpbGVzW10pXHJcblx0XHRpZiAoZS50YXJnZXQuZmlsZXMpIHtcclxuXHRcdFx0Y29uc3QgZmlsZXNBcnJheSA9IEFycmF5LmZyb20oZS50YXJnZXQuZmlsZXMpLm1hcCgoZmlsZSkgPT5cclxuXHRcdFx0XHRVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcImZpbGVzQXJyYXk6IFwiLCBmaWxlc0FycmF5KTtcclxuXHJcblx0XHRcdHNldFNlbGVjdGVkRmlsZXMoKHByZXZJbWFnZXMpID0+IHByZXZJbWFnZXMuY29uY2F0KGZpbGVzQXJyYXkpKTtcclxuXHRcdFx0QXJyYXkuZnJvbShlLnRhcmdldC5maWxlcykubWFwKFxyXG5cdFx0XHRcdChmaWxlKSA9PiBVUkwucmV2b2tlT2JqZWN0VVJMKGZpbGUpIC8vIGF2b2lkIG1lbW9yeSBsZWFrXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgcmVuZGVyUGhvdG9zID0gKHNvdXJjZSkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coJ3NvdXJjZTogJywgc291cmNlKTtcclxuXHRcdHJldHVybiBzb3VyY2UubWFwKChwaG90bykgPT4ge1xyXG5cdFx0XHQvLyByZXR1cm4gPGltZyBzcmM9e3Bob3RvfSBhbHQ9Jycga2V5PXtwaG90b30gLz47XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRzcmM9e3Bob3RvfVxyXG5cdFx0XHRcdFx0YWx0PSdwaG90bydcclxuXHRcdFx0XHRcdGtleT17cGhvdG99XHJcblx0XHRcdFx0XHR3aWR0aD17MzIwfVxyXG5cdFx0XHRcdFx0aGVpZ2h0PXsxODB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZm9ybVN0YXRlIH0gPSB1c2VGb3JtKCk7XHJcblx0Y29uc3QgeyBpc1N1Ym1pdHRpbmcgfSA9IGZvcm1TdGF0ZTtcclxuXHJcblx0Y29uc3QgW2dpdGVzLCBzZXRHaXRlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdGNvbnN0IGxpc3REZXNHaXRlcyA9ICgpID0+IHtcclxuXHRcdGxpc3RHaXRlc05vbXMoKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldEdpdGVzKC4uLmdpdGVzLCBkYXRhKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxpc3REZXNHaXRlcygpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblxyXG5cdC8vIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChuYW1lKSA9PiAoZSkgPT4ge1xyXG5cdC8vIFx0Zm9ybURhdGEuc2V0KG5hbWUsIGUudGFyZ2V0LmZpbGVzKTtcclxuXHQvLyBcdHNldFZhbHVlcyh7XHJcblx0Ly8gXHRcdC4uLnZhbHVlcyxcclxuXHQvLyBcdFx0cGhvdG9zOiBlLnRhcmdldC5maWxlc1swXSxcclxuXHQvLyBcdFx0Zm9ybURhdGEsXHJcblx0Ly8gXHRcdGVycm9yOiAnJyxcclxuXHQvLyBcdH0pO1xyXG5cdC8vIH07XHJcblxyXG5cdGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGVudm9pUGhvdG8gPSAoZSkgPT4ge1xyXG5cdFx0Ly8gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Ly8gc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG5cdFx0Ly8gc2F2ZVBob3Rvcyhmb3JtRGF0YSwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdC8vIFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdC8vIFx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yIH0pO1xyXG5cdFx0Ly8gXHR9IGVsc2Uge1xyXG5cdFx0Ly8gXHRcdHNldFZhbHVlcyh7XHJcblx0XHQvLyBcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHQvLyBcdFx0XHRub206ICcnLFxyXG5cdFx0Ly8gXHRcdFx0ZXJyb3I6ICcnLFxyXG5cdFx0Ly8gXHRcdFx0cGhvdG9zOiAnJyxcclxuXHRcdC8vIFx0XHRcdHN1Y2Nlc3M6IGBMZXMgcGhvdG9zIG9udCBiaWVuIMOpdMOpIGVudm95w6llc2AsXHJcblx0XHQvLyBcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdC8vIFx0XHR9KTtcclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gfSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTgnPjwvZGl2PiAqL31cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNCc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLXJvdyBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtYXV0byBteS0xJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J21yLXNtLTInXHJcblx0XHRcdFx0XHRcdFx0XHRcdGh0bWxGb3I9J2lubGluZUZvcm1DdXN0b21TZWxlY3QnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRHw650ZS9TZWN0aW9uIGNvbmNlcm7DqVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxzZWxlY3RcclxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nZ2l0ZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2N1c3RvbS1zZWxlY3QgbXItc20tMidcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J2lubGluZUZvcm1DdXN0b21TZWxlY3QnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHNlbGVjdGVkPlNlbGVjdGlvbi4uLjwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Z2l0ZXMubWFwKChnaXRlLCBpKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtnaXRlLm5vbX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Z2l0ZS5ub219XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPSdBdXRyZSc+QXV0cmVzIHBhZ2VzPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzc05hbWU9J2JvcmRlciBwLTIgbXQtMyc+XHJcblx0XHRcdFx0XHRcdFx0PGxlZ2VuZCBjbGFzc05hbWU9J3ctYXV0byc+QWpvdXQgZCdpbWFnZXM8L2xlZ2VuZD5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nYnRuIGJ0bi1vdXRsaW5lLWluZm8nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRQaG90b3NcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUltYWdlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdwaG90b3MnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nZmlsZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhY2NlcHQ9J2ltYWdlLyonXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bXVsdGlwbGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoaWRkZW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZmllbGRzZXQ+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHR0eXBlPSdzdWJtaXQnXHJcblx0XHRcdFx0XHRcdGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYnRuIGJ0bi1pbmZvIG10LTMnPlxyXG5cdFx0XHRcdFx0XHRBam91dGVyIGNlcyBpbWFnZXNcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZXN1bHQnPntyZW5kZXJQaG90b3Moc2VsZWN0ZWRGaWxlcyl9PC9kaXY+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUNyZWF0ZUdpdGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=