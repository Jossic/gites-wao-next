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

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      formState = _useForm.formState;

  var isSubmitting = formState.isSubmitting;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      gites = _useState[0],
      setGites = _useState[1];

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
                lineNumber: 72,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                name: "gite",
                ref: register,
                className: "custom-select mr-sm-2",
                id: "inlineFormCustomSelect",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  selected: true,
                  children: "Selection"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 10
                }, _this), gites.map(function (gite, i) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: gite.nom,
                    children: gite.nom
                  }, i, false, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 11
                  }, _this);
                }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "Autre",
                  children: "Autres pages"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
            className: "border p-2 mt-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
              className: "w-auto",
              children: "Ajout d'images"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "btn btn-outline-info",
                children: ["Photos", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  ref: register,
                  name: "photos",
                  type: "file",
                  accept: "image/*",
                  multiple: true,
                  hidden: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-info mt-3",
          children: "Ajouter ces images"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 4
    }, _this)
  }, void 0, false);
};

_s(FormCreateGite, "qu9rr0KRYK6+npp6TKhsmJFJLxE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9Gb3JtQWRkSW1hZ2VzLmpzIl0sIm5hbWVzIjpbIkZvcm1DcmVhdGVHaXRlIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiaXNTdWJtaXR0aW5nIiwidXNlU3RhdGUiLCJnaXRlcyIsInNldEdpdGVzIiwibGlzdERlc0dpdGVzIiwibGlzdEdpdGVzTm9tcyIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwidG9rZW4iLCJnZXRDb29raWUiLCJvblN1Ym1pdCIsImVudm9pUGhvdG8iLCJlIiwibWFwIiwiZ2l0ZSIsImkiLCJub20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUFBOztBQUFBLGlCQUNrQkMsK0RBQU8sRUFEekI7QUFBQSxNQUNwQkMsUUFEb0IsWUFDcEJBLFFBRG9CO0FBQUEsTUFDVkMsWUFEVSxZQUNWQSxZQURVO0FBQUEsTUFDSUMsU0FESixZQUNJQSxTQURKOztBQUFBLE1BRXBCQyxZQUZvQixHQUVIRCxTQUZHLENBRXBCQyxZQUZvQjs7QUFBQSxrQkFJRkMsc0RBQVEsQ0FBQyxFQUFELENBSk47QUFBQSxNQUlyQkMsS0FKcUI7QUFBQSxNQUlkQyxRQUpjOztBQU01QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQzFCQyw4RUFBYSxHQUFHQyxJQUFoQixDQUFxQixVQUFDQyxJQUFELEVBQVU7QUFDOUIsVUFBSUEsSUFBSSxDQUFDQyxLQUFULEVBQWdCO0FBQ2ZDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0EsT0FGRCxNQUVPO0FBQ05MLGdCQUFRLE1BQVIsc0dBQVlELEtBQVosVUFBbUJLLElBQW5CO0FB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QUF1REEsQ0EvR0Q7O0dBQU1GLGM7VUFDeUNDLHVEOzs7S0FEekNELGM7QUFpSFNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvaW1hZ2VzL2FkZC40NTVjN2IzNzJmNzlmZWM3YTBiZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc2F2ZVBob3RvcyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCB7IGxpc3RHaXRlc05vbXMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuY29uc3QgRm9ybUNyZWF0ZUdpdGUgPSAoKSA9PiB7XHJcblx0Y29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBmb3JtU3RhdGUgfSA9IHVzZUZvcm0oKTtcclxuXHRjb25zdCB7IGlzU3VibWl0dGluZyB9ID0gZm9ybVN0YXRlO1xyXG5cclxuXHRjb25zdCBbZ2l0ZXMsIHNldEdpdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgbGlzdERlc0dpdGVzID0gKCkgPT4ge1xyXG5cdFx0bGlzdEdpdGVzTm9tcygpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0R2l0ZXMoLi4uZ2l0ZXMsIGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGlzdERlc0dpdGVzKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHJcblx0Ly8gY29uc3QgaGFuZGxlQ2hhbmdlID0gKG5hbWUpID0+IChlKSA9PiB7XHJcblx0Ly8gXHRmb3JtRGF0YS5zZXQobmFtZSwgZS50YXJnZXQuZmlsZXMpO1xyXG5cdC8vIFx0c2V0VmFsdWVzKHtcclxuXHQvLyBcdFx0Li4udmFsdWVzLFxyXG5cdC8vIFx0XHRwaG90b3M6IGUudGFyZ2V0LmZpbGVzWzBdLFxyXG5cdC8vIFx0XHRmb3JtRGF0YSxcclxuXHQvLyBcdFx0ZXJyb3I6ICcnLFxyXG5cdC8vIFx0fSk7XHJcblx0Ly8gfTtcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZW52b2lQaG90byA9IChlKSA9PiB7XHJcblx0XHQvLyBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQvLyBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUgfSk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcblx0XHQvLyBzYXZlUGhvdG9zKGZvcm1EYXRhLCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0Ly8gXHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0Ly8gXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3IgfSk7XHJcblx0XHQvLyBcdH0gZWxzZSB7XHJcblx0XHQvLyBcdFx0c2V0VmFsdWVzKHtcclxuXHRcdC8vIFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdC8vIFx0XHRcdG5vbTogJycsXHJcblx0XHQvLyBcdFx0XHRlcnJvcjogJycsXHJcblx0XHQvLyBcdFx0XHRwaG90b3M6ICcnLFxyXG5cdFx0Ly8gXHRcdFx0c3VjY2VzczogYExlcyBwaG90b3Mgb250IGJpZW4gw6l0w6kgZW52b3nDqWVzYCxcclxuXHRcdC8vIFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0Ly8gXHRcdH0pO1xyXG5cdFx0Ly8gXHR9XHJcblx0XHQvLyB9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtOCc+PC9kaXY+ICovfVxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC00Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tcm93IGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1hdXRvIG15LTEnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nbXItc20tMidcclxuXHRcdFx0XHRcdFx0XHRcdFx0aHRtbEZvcj0naW5saW5lRm9ybUN1c3RvbVNlbGVjdCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEfDrnRlL1NlY3Rpb24gY29uY2VybsOpXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNlbGVjdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdnaXRlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2N1c3RvbS1zZWxlY3QgbXItc20tMidcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J2lubGluZUZvcm1DdXN0b21TZWxlY3QnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHNlbGVjdGVkPlNlbGVjdGlvbjwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Z2l0ZXMubWFwKChnaXRlLCBpKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtnaXRlLm5vbX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Z2l0ZS5ub219XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPSdBdXRyZSc+QXV0cmVzIHBhZ2VzPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzc05hbWU9J2JvcmRlciBwLTIgbXQtMyc+XHJcblx0XHRcdFx0XHRcdFx0PGxlZ2VuZCBjbGFzc05hbWU9J3ctYXV0byc+QWpvdXQgZCdpbWFnZXM8L2xlZ2VuZD5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nYnRuIGJ0bi1vdXRsaW5lLWluZm8nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRQaG90b3NcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdwaG90b3MnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nZmlsZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhY2NlcHQ9J2ltYWdlLyonXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bXVsdGlwbGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoaWRkZW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZmllbGRzZXQ+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnRuIGJ0bi1pbmZvIG10LTMnPlxyXG5cdFx0XHRcdFx0XHRBam91dGVyIGNlcyBpbWFnZXNcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUNyZWF0ZUdpdGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=