webpackHotUpdate_N_E("pages/admin/crud/gite/create",{

/***/ "./components/admin/FormCreateGite.js":
/*!********************************************!*\
  !*** ./components/admin/FormCreateGite.js ***!
  \********************************************/
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




var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\FormCreateGite.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var FormCreateGite = function FormCreateGite() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    nom: '',
    mtitle: '',
    presGiteSEO: '',
    texte1: '',
    detailGite: '',
    capacite: '',
    videoLink: '',
    calendrierLink: '',
    couleur1: '',
    couleur2: '',
    error: '',
    success: '',
    loading: false,
    formData: ''
  }),
      values = _useState[0],
      setValues = _useState[1];

  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_4__["getCookie"])('token');
  var error = values.error,
      success = values.success,
      loading = values.loading,
      formData = values.formData;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      formData: new FormData()
    }));
  }, []);

  var handleChange = function handleChange(name) {
    return function (e) {
      var _objectSpread2;

      var value = e.target.value;
      formData.set(name, value);
      setValues(_objectSpread(_objectSpread({}, values), {}, (_objectSpread2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, name, value), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, "formData", formData), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, "error", ''), _objectSpread2)));
    };
  };

  var creerGite = function creerGite(e) {
    e.preventDefault();
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      loading: true
    }));
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_3__["createGite"])(formData, token).then(function (data) {
      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error
        }));
      } else {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          nom: '',
          mtitle: '',
          presGiteSEO: '',
          texte1: '',
          detailGite: '',
          capacite: '',
          videoLink: '',
          calendrierLink: '',
          pdf: '',
          couleur1: '',
          couleur2: '',
          error: '',
          success: '',
          loading: false
        }));
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: creerGite,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-8",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Nom du g\xEEte"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              className: "form-control",
              onChange: handleChange('nom')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Meta Title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              className: "form-control",
              onChange: handleChange('mtitle')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "M\xE9ta-Description (pr\xE9sentation SEO du g\xEEte pour Google)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              type: "text",
              className: "form-control",
              onChange: handleChange('presGiteSEO'),
              cols: "30",
              rows: "4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Texte du g\xEEte"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              type: "text",
              className: "form-control",
              onChange: handleChange('texte1'),
              cols: "30",
              rows: "4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "D\xE9tail du g\xEEte"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              type: "text",
              className: "form-control",
              onChange: handleChange('detailGite'),
              cols: "30",
              rows: "4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Capacit\xE9 du g\xEEte"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "number",
              className: "form-control",
              onChange: handleChange('capacite')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
            className: "border p-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
              className: "w-auto",
              children: "Liens"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "text-muted",
                children: "Lien vid\xE9o YouTube"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                className: "form-control",
                onChange: handleChange('videoLink')
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "text-muted",
                children: "Lien du calendrier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                className: "form-control",
                onChange: handleChange('calendrierLink')
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
            className: "border p-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
              className: "w-auto",
              children: "Couleurs"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "text-muted",
                children: "Couleur de fond"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "color",
                className: "form-control",
                onChange: handleChange('couleur1')
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "text-muted",
                children: "Couleur du texte (noir)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "color",
                className: "form-control",
                onChange: handleChange('couleur2')
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 5
      }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "alert alert-success",
        children: "Le g\xEEte a bien \xE9t\xE9 ajout\xE9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 6
      }, _this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "alert alert-success",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-info",
          children: "Cr\xE9er ce g\xEEte"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 4
    }, _this)
  }, void 0, false);
};

_s(FormCreateGite, "+XdlIlRMiR8F1Ha612BY/+/VEc0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9Gb3JtQ3JlYXRlR2l0ZS5qcyJdLCJuYW1lcyI6WyJGb3JtQ3JlYXRlR2l0ZSIsInVzZVN0YXRlIiwibm9tIiwibXRpdGxlIiwicHJlc0dpdGVTRU8iLCJ0ZXh0ZTEiLCJkZXRhaWxHaXRlIiwiY2FwYWNpdGUiLCJ2aWRlb0xpbmsiLCJjYWxlbmRyaWVyTGluayIsImNvdWxldXIxIiwiY291bGV1cjIiLCJlcnJvciIsInN1Y2Nlc3MiLCJsb2FkaW5nIiwiZm9ybURhdGEiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ0b2tlbiIsImdldENvb2tpZSIsInVzZUVmZmVjdCIsIkZvcm1EYXRhIiwiaGFuZGxlQ2hhbmdlIiwibmFtZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInNldCIsImNyZWVyR2l0ZSIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlR2l0ZSIsInRoZW4iLCJkYXRhIiwicGRmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0FDLHNEQUFRLENBQUM7QUFDcENDLE9BQUcsRUFBRSxFQUQrQjtBQUVwQ0MsVUFBTSxFQUFFLEVBRjRCO0FBR3BDQyxlQUFXLEVBQUUsRUFIdUI7QUFJcENDLFVBQU0sRUFBRSxFQUo0QjtBQUtwQ0MsY0FBVSxFQUFFLEVBTHdCO0FBTXBDQyxZQUFRLEVBQUUsRUFOMEI7QUFPcENDLGFBQVMsRUFBRSxFQVB5QjtBQVFwQ0Msa0JBQWMsRUFBRSxFQVJvQjtBQVNwQ0MsWUFBUSxFQUFFLEVBVDBCO0FBVXBDQyxZQUFRLEVBQUUsRUFWMEI7QUFXcENDLFNBQUssRUFBRSxFQVg2QjtBQVlwQ0MsV0FBTyxFQUFFLEVBWjJCO0FBYXBDQyxXQUFPLEVBQUUsS0FiMkI7QUFjcENDLFlBQVEsRUFBRTtBQWQwQixHQUFELENB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SlgsZUFpSkM7QUFBQSwrQkFDQztBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLG1CQUFTLEVBQUMsY0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELG1CQUREO0FBMkpBLENBdE5EOztHQUFNWixjOztLQUFBQSxjO0FBd05TQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9jcnVkL2dpdGUvY3JlYXRlLjkyZDYyZmU2ZjUzODAzODJjNmYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVHaXRlIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5cclxuY29uc3QgRm9ybUNyZWF0ZUdpdGUgPSAoKSA9PiB7XHJcblx0Y29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuXHRcdG5vbTogJycsXHJcblx0XHRtdGl0bGU6ICcnLFxyXG5cdFx0cHJlc0dpdGVTRU86ICcnLFxyXG5cdFx0dGV4dGUxOiAnJyxcclxuXHRcdGRldGFpbEdpdGU6ICcnLFxyXG5cdFx0Y2FwYWNpdGU6ICcnLFxyXG5cdFx0dmlkZW9MaW5rOiAnJyxcclxuXHRcdGNhbGVuZHJpZXJMaW5rOiAnJyxcclxuXHRcdGNvdWxldXIxOiAnJyxcclxuXHRcdGNvdWxldXIyOiAnJyxcclxuXHRcdGVycm9yOiAnJyxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRmb3JtRGF0YTogJycsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cdGNvbnN0IHsgZXJyb3IsIHN1Y2Nlc3MsIGxvYWRpbmcsIGZvcm1EYXRhIH0gPSB2YWx1ZXM7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGZvcm1EYXRhOiBuZXcgRm9ybURhdGEoKSB9KTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IChuYW1lKSA9PiAoZSkgPT4ge1xyXG5cdFx0bGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcblxyXG5cdFx0Zm9ybURhdGEuc2V0KG5hbWUsIHZhbHVlKTtcclxuXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgW25hbWVdOiB2YWx1ZSwgZm9ybURhdGEsIGVycm9yOiAnJyB9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBjcmVlckdpdGUgPSAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdFx0Y3JlYXRlR2l0ZShmb3JtRGF0YSwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yIH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRub206ICcnLFxyXG5cdFx0XHRcdFx0bXRpdGxlOiAnJyxcclxuXHRcdFx0XHRcdHByZXNHaXRlU0VPOiAnJyxcclxuXHRcdFx0XHRcdHRleHRlMTogJycsXHJcblx0XHRcdFx0XHRkZXRhaWxHaXRlOiAnJyxcclxuXHRcdFx0XHRcdGNhcGFjaXRlOiAnJyxcclxuXHRcdFx0XHRcdHZpZGVvTGluazogJycsXHJcblx0XHRcdFx0XHRjYWxlbmRyaWVyTGluazogJycsXHJcblx0XHRcdFx0XHRwZGY6ICcnLFxyXG5cdFx0XHRcdFx0Y291bGV1cjE6ICcnLFxyXG5cdFx0XHRcdFx0Y291bGV1cjI6ICcnLFxyXG5cdFx0XHRcdFx0ZXJyb3I6ICcnLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogJycsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2NyZWVyR2l0ZX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTgnPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+Tm9tIGR1IGfDrnRlPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ25vbScpfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+TWV0YSBUaXRsZTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdtdGl0bGUnKX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0TcOpdGEtRGVzY3JpcHRpb24gKHByw6lzZW50YXRpb24gU0VPIGR1IGfDrnRlIHBvdXJcclxuXHRcdFx0XHRcdFx0XHRcdEdvb2dsZSlcclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncHJlc0dpdGVTRU8nKX1cclxuXHRcdFx0XHRcdFx0XHRcdGNvbHM9JzMwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cm93cz0nNCc+PC90ZXh0YXJlYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+VGV4dGUgZHUgZ8OudGU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgndGV4dGUxJyl9XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xzPSczMCdcclxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9JzQnPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+RMOpdGFpbCBkdSBnw650ZTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdkZXRhaWxHaXRlJyl9XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xzPSczMCdcclxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9JzQnPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRDYXBhY2l0w6kgZHUgZ8OudGVcclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0nbnVtYmVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdjYXBhY2l0ZScpfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTQnPlxyXG5cdFx0XHRcdFx0XHR7LyogPGZpZWxkc2V0IGNsYXNzTmFtZT0nYm9yZGVyIHAtMic+XHJcblx0XHRcdFx0XHRcdFx0PGxlZ2VuZCBjbGFzc05hbWU9J3ctYXV0byc+SW1hZ2VzPC9sZWdlbmQ+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nYnRuIGJ0bi1vdXRsaW5lLWluZm8nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRQaG90b3NcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncGhvdG9zJyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nZmlsZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhY2NlcHQ9J2ltYWdlLyonXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bXVsdGlwbGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoaWRkZW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZmllbGRzZXQ+ICovfVxyXG5cdFx0XHRcdFx0XHQ8ZmllbGRzZXQgY2xhc3NOYW1lPSdib3JkZXIgcC0yJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGVnZW5kIGNsYXNzTmFtZT0ndy1hdXRvJz5MaWVuczwvbGVnZW5kPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRMaWVuIHZpZMOpbyBZb3VUdWJlXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCd2aWRlb0xpbmsnKX1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdExpZW4gZHUgY2FsZW5kcmllclxyXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnY2FsZW5kcmllckxpbmsnKX1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZmllbGRzZXQ+XHJcblx0XHRcdFx0XHRcdHsvKiA8ZmllbGRzZXQgY2xhc3NOYW1lPSdib3JkZXIgcC0yJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGVnZW5kIGNsYXNzTmFtZT0ndy1hdXRvJz5GaWNoaWVyczwvbGVnZW5kPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2J0biBidG4tb3V0bGluZS1pbmZvJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0RmljaGllcnMgUERGXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3BkZicpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J2ZpbGUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWNjZXB0PScucGRmJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhpZGRlblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9maWVsZHNldD4gKi99XHJcblx0XHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzc05hbWU9J2JvcmRlciBwLTInPlxyXG5cdFx0XHRcdFx0XHRcdDxsZWdlbmQgY2xhc3NOYW1lPSd3LWF1dG8nPkNvdWxldXJzPC9sZWdlbmQ+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdENvdWxldXIgZGUgZm9uZFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdjb2xvcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2NvdWxldXIxJyl9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRDb3VsZXVyIGR1IHRleHRlIChub2lyKVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdjb2xvcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2NvdWxldXIyJyl9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0e3N1Y2Nlc3MgJiYgKFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MnPlxyXG5cdFx0XHRcdFx0XHRMZSBnw650ZSBhIGJpZW4gw6l0w6kgYWpvdXTDqVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0XHR7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MnPntlcnJvcn08L2Rpdj59XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0biBidG4taW5mbyc+XHJcblx0XHRcdFx0XHRcdENyw6llciBjZSBnw650ZVxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtQ3JlYXRlR2l0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==