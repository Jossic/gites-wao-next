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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
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
    }, _this)
  }, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9Gb3JtQWRkSW1hZ2VzLmpzIl0sIm5hbWVzIjpbIkZvcm1DcmVhdGVHaXRlIiwidXNlU3RhdGUiLCJzZWxlY3RlZEZpbGVzIiwic2V0U2VsZWN0ZWRGaWxlcyIsImhhbmRsZUltYWdlQ2hhbmdlIiwiZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZXNBcnJheSIsIkFycmF5IiwiZnJvbSIsIm1hcCIsImZpbGUiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJwcmV2SW1hZ2VzIiwiY29uY2F0IiwicmV2b2tlT2JqZWN0VVJMIiwicmVuZGVyUGhvdG9zIiwic291cmNlIiwiY29uc29sZSIsImxvZyIsInBob3RvIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiaXNTdWJtaXR0aW5nIiwiZ2l0ZXMiLCJzZXRHaXRlcyIsImxpc3REZXNHaXRlcyIsImxpc3RHaXRlc05vbXMiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwidXNlRWZmZWN0IiwidG9rZW4iLCJnZXRDb29raWUiLCJvblN1Ym1pdCIsImVudm9pUGhvdG8iLCJyZXF1aXJlZCIsImdpdGUiLCJpIiwibm9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFBQSxrQkFDY0Msc0RBQVEsQ0FBQyxFQUFELENBRHRCO0FBQUEsTUFDckJDLGFBRHFCO0FBQUEsTUFDTkMsZ0JBRE07O0FBRzVCLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ2hDO0FBQ0EsUUFBSUEsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQWIsRUFBb0I7QUFDbkIsVUFBTUMsVUFBVSxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBV0wsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQXBCLEVBQTJCSSxHQUEzQixDQUErQixVQUFDQyxJQUFEO0FBQUEsZUFDakRDLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQkYsSUFBcEIsQ0FEaUQ7QUFBQSxPQUEvQixDQUFuQixDQURtQixDQUtuQjs7QUFFQVQsc0JBQWdCLENBQUMsVUFBQ1ksVUFBRDtBQUFBLGVBQWdCQSxVQUFVLENBQUNDLE1BQVgsQ0FBa0JSLFVBQWxCLENBQWhCO0FBQUEsT0FBRCxDQUFoQjtBQUNBQyxXQUFLLENBQUNDLElBQU4sQ0FBV0wsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQXBCLEVBQTJCSSxHQUEzQixDQUNDLFVBQUNDLElBQUQ7QUFBQSxlQUFVQyxHQUFHLENBQUNJLGVBQUosQ0FBb0JMLElBQXBCLENBQVY7QUFBQSxPQURELENBQ3FDO0FBRHJDO0FBR0E7QUFDRCxHQWREOztBQWdCQSxNQUFNTSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxNQUFELEVBQVk7QUFDaENDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JGLE1BQXhCO0FBQ0EsV0FBT0EsTUFBTSxDQUFDUixHQUFQLENBQVcsVUFBQ1csS0FBRCxFQUFXO0FBQzVCLDBCQUFPO0FBQUssV0FBRyxFQUFFQSxLQUFWO0FBQWlCLFdBQUcsRUFBQztBQUFyQixTQUE2QkEsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0EsS0FGTSxDQUFQO0FBR0EsR0FMRDs7QUFuQjRCLGlCQTBCa0JDLCtEQUFPLEVBMUJ6QjtBQUFBLE1BMEJwQkMsUUExQm9CLFlBMEJwQkEsUUExQm9CO0FBQUEsTUEwQlZDLFlBMUJVLFlBMEJWQSxZQTFCVTtBQUFBLE1BMEJJQyxTQTFCSixZQTBCSUEsU0ExQko7O0FBQUEsTUEyQnBCQyxZQTNCb0IsR0EyQkhELFNBM0JHLENBMkJwQkMsWUEzQm9COztBQUFBLG1CQTZCRjFCLHNEQUFRLENBQUMsRUFBRCxDQTdCTjtBQUFBLE1BNkJyQjJCLEtBN0JxQjtBQUFBLE1BNkJkQyxRQTdCYzs7QUErQjVCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDMUJDLDhFQUFhLEdBQUdDLElBQWhCLENBQXFCLFVBQUNDLElBQUQsRUFBVTtBQUM5QixVQUFJQSxJQUFJLENBQUNDLEtBQVQsRUFBZ0I7QUFDZmQsZUFBTyxDQUFDQyxHQUFSLENBQVlhLEtBQVo7QUFDQSxPQUZELE1BRU87QUFDTkwsZ0JBQVEsTUFBUixzR0FBWUQsS0FBWixVQUFtQkssSUFBbkI7QUFDQTtBQUNELEtBTkQ7QUFPQSxHQVJEOztBQVVBRSx5REFBUyxDQUFDLFlBQU07QUFDZkwsZ0JBQVk7QUFDWixHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsTUFBTU0sS0FBSyxHQUFHQyxzRUFBUyxDQUFDLE9BQUQsQ0FBdkIsQ0E3QzRCLENBK0M1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0wsSUFBRCxFQUFVO0FBQzFCYixXQUFPLENBQUNDLEdBQVIsQ0FBWVksSUFBWjtBQUNBLEdBRkQ7O0FBSUEsTUFBTU0sVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ2xDLENBQUQsRUFBTyxDQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FsQkQ7O0FBb0JBLHNCQUNDO0FBQUEsMkJBQ0M7QUFBTSxjQUFRLEVBQUVvQixZQUFZLENBQUNhLFFBQUQsQ0FBNUI7QUFBQSw4QkFDQztBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLCtCQUVDO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEsa0NBQ0M7QUFBSyxxQkFBUyxFQUFDLDZCQUFmO0FBQUEsbUNBQ0M7QUFBSyx1QkFBUyxFQUFDLGVBQWY7QUFBQSxzQ0FDQztBQUNDLHlCQUFTLEVBQUMsU0FEWDtBQUVDLHVCQUFPLEVBQUMsd0JBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREQsZUFNQztBQUNDLG9CQUFJLEVBQUMsTUFETjtBQUVDLG1CQUFHLEVBQUVkLFFBQVEsQ0FBQztBQUFFZ0IsMEJBQVEsRUFBRTtBQUFaLGlCQUFELENBRmQ7QUFHQyx5QkFBUyxFQUFDLHVCQUhYO0FBSUMsa0JBQUUsRUFBQyx3QkFKSjtBQUFBLHdDQUtDO0FBQVEsMEJBQVEsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEQsRUFNRVosS0FBSyxDQUFDakIsR0FBTixDQUFVLFVBQUM4QixJQUFELEVBQU9DLENBQVA7QUFBQSxzQ0FDVjtBQUFnQix5QkFBSyxFQUFFRCxJQUFJLENBQUNFLEdBQTVCO0FBQUEsOEJBQ0VGLElBQUksQ0FBQ0U7QUFEUCxxQkFBYUQsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURVO0FBQUEsaUJBQVYsQ0FORixlQVdDO0FBQVEsdUJBQUssRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBdUJDO0FBQVUscUJBQVMsRUFBQyxpQkFBcEI7QUFBQSxvQ0FDQztBQUFRLHVCQUFTLEVBQUMsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFHQztBQUFLLHVCQUFTLEVBQUMsWUFBZjtBQUFBLHFDQUNDO0FBQU8seUJBQVMsRUFBQyxzQkFBakI7QUFBQSxrREFFQztBQUNDLDBCQUFRLEVBQUV0QyxpQkFEWDtBQUVDLHFCQUFHLEVBQUVvQixRQUFRLENBQUM7QUFBRWdCLDRCQUFRLEVBQUU7QUFBWixtQkFBRCxDQUZkO0FBR0Msc0JBQUksRUFBQyxRQUhOO0FBSUMsc0JBQUksRUFBQyxNQUpOO0FBS0Msd0JBQU0sRUFBQyxTQUxSO0FBTUMsMEJBQVEsTUFOVDtBQU9DLHdCQUFNO0FBUFA7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF2QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBOENDO0FBQUEsK0JBQ0M7QUFDQyxjQUFJLEVBQUMsUUFETjtBQUVDLGtCQUFRLEVBQUViLFlBRlg7QUFHQyxtQkFBUyxFQUFDLG1CQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTlDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxtQkFERDtBQTJEQSxDQTVJRDs7R0FBTTNCLGM7VUEwQnlDdUIsdUQ7OztLQTFCekN2QixjO0FBOElTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9jcnVkL2ltYWdlcy9hZGQuNjQ3ZDA2NjczYjc2YWJhMzkwZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHNhdmVQaG90b3MgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgeyBsaXN0R2l0ZXNOb21zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcbmNvbnN0IEZvcm1DcmVhdGVHaXRlID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtzZWxlY3RlZEZpbGVzLCBzZXRTZWxlY3RlZEZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlSW1hZ2VDaGFuZ2UgPSAoZSkgPT4ge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coZS50YXJnZXQuZmlsZXNbXSlcclxuXHRcdGlmIChlLnRhcmdldC5maWxlcykge1xyXG5cdFx0XHRjb25zdCBmaWxlc0FycmF5ID0gQXJyYXkuZnJvbShlLnRhcmdldC5maWxlcykubWFwKChmaWxlKSA9PlxyXG5cdFx0XHRcdFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSlcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKFwiZmlsZXNBcnJheTogXCIsIGZpbGVzQXJyYXkpO1xyXG5cclxuXHRcdFx0c2V0U2VsZWN0ZWRGaWxlcygocHJldkltYWdlcykgPT4gcHJldkltYWdlcy5jb25jYXQoZmlsZXNBcnJheSkpO1xyXG5cdFx0XHRBcnJheS5mcm9tKGUudGFyZ2V0LmZpbGVzKS5tYXAoXHJcblx0XHRcdFx0KGZpbGUpID0+IFVSTC5yZXZva2VPYmplY3RVUkwoZmlsZSkgLy8gYXZvaWQgbWVtb3J5IGxlYWtcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCByZW5kZXJQaG90b3MgPSAoc291cmNlKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZygnc291cmNlOiAnLCBzb3VyY2UpO1xyXG5cdFx0cmV0dXJuIHNvdXJjZS5tYXAoKHBob3RvKSA9PiB7XHJcblx0XHRcdHJldHVybiA8aW1nIHNyYz17cGhvdG99IGFsdD0nJyBrZXk9e3Bob3RvfSAvPjtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZm9ybVN0YXRlIH0gPSB1c2VGb3JtKCk7XHJcblx0Y29uc3QgeyBpc1N1Ym1pdHRpbmcgfSA9IGZvcm1TdGF0ZTtcclxuXHJcblx0Y29uc3QgW2dpdGVzLCBzZXRHaXRlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdGNvbnN0IGxpc3REZXNHaXRlcyA9ICgpID0+IHtcclxuXHRcdGxpc3RHaXRlc05vbXMoKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldEdpdGVzKC4uLmdpdGVzLCBkYXRhKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxpc3REZXNHaXRlcygpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblxyXG5cdC8vIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChuYW1lKSA9PiAoZSkgPT4ge1xyXG5cdC8vIFx0Zm9ybURhdGEuc2V0KG5hbWUsIGUudGFyZ2V0LmZpbGVzKTtcclxuXHQvLyBcdHNldFZhbHVlcyh7XHJcblx0Ly8gXHRcdC4uLnZhbHVlcyxcclxuXHQvLyBcdFx0cGhvdG9zOiBlLnRhcmdldC5maWxlc1swXSxcclxuXHQvLyBcdFx0Zm9ybURhdGEsXHJcblx0Ly8gXHRcdGVycm9yOiAnJyxcclxuXHQvLyBcdH0pO1xyXG5cdC8vIH07XHJcblxyXG5cdGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGVudm9pUGhvdG8gPSAoZSkgPT4ge1xyXG5cdFx0Ly8gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Ly8gc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG5cdFx0Ly8gc2F2ZVBob3Rvcyhmb3JtRGF0YSwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdC8vIFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdC8vIFx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yIH0pO1xyXG5cdFx0Ly8gXHR9IGVsc2Uge1xyXG5cdFx0Ly8gXHRcdHNldFZhbHVlcyh7XHJcblx0XHQvLyBcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHQvLyBcdFx0XHRub206ICcnLFxyXG5cdFx0Ly8gXHRcdFx0ZXJyb3I6ICcnLFxyXG5cdFx0Ly8gXHRcdFx0cGhvdG9zOiAnJyxcclxuXHRcdC8vIFx0XHRcdHN1Y2Nlc3M6IGBMZXMgcGhvdG9zIG9udCBiaWVuIMOpdMOpIGVudm95w6llc2AsXHJcblx0XHQvLyBcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdC8vIFx0XHR9KTtcclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gfSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTgnPjwvZGl2PiAqL31cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNCc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLXJvdyBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtYXV0byBteS0xJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J21yLXNtLTInXHJcblx0XHRcdFx0XHRcdFx0XHRcdGh0bWxGb3I9J2lubGluZUZvcm1DdXN0b21TZWxlY3QnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRHw650ZS9TZWN0aW9uIGNvbmNlcm7DqVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxzZWxlY3RcclxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nZ2l0ZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2N1c3RvbS1zZWxlY3QgbXItc20tMidcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J2lubGluZUZvcm1DdXN0b21TZWxlY3QnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHNlbGVjdGVkPlNlbGVjdGlvbi4uLjwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Z2l0ZXMubWFwKChnaXRlLCBpKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtnaXRlLm5vbX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Z2l0ZS5ub219XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPSdBdXRyZSc+QXV0cmVzIHBhZ2VzPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzc05hbWU9J2JvcmRlciBwLTIgbXQtMyc+XHJcblx0XHRcdFx0XHRcdFx0PGxlZ2VuZCBjbGFzc05hbWU9J3ctYXV0byc+QWpvdXQgZCdpbWFnZXM8L2xlZ2VuZD5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nYnRuIGJ0bi1vdXRsaW5lLWluZm8nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRQaG90b3NcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUltYWdlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdwaG90b3MnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nZmlsZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhY2NlcHQ9J2ltYWdlLyonXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bXVsdGlwbGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoaWRkZW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZmllbGRzZXQ+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHR0eXBlPSdzdWJtaXQnXHJcblx0XHRcdFx0XHRcdGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYnRuIGJ0bi1pbmZvIG10LTMnPlxyXG5cdFx0XHRcdFx0XHRBam91dGVyIGNlcyBpbWFnZXNcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUNyZWF0ZUdpdGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=