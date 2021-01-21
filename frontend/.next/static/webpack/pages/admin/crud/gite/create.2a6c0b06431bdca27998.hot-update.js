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
        setValues({
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
        });
        console.log('Tout est ok');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9Gb3JtQ3JlYXRlR2l0ZS5qcyJdLCJuYW1lcyI6WyJGb3JtQ3JlYXRlR2l0ZSIsInVzZVN0YXRlIiwibm9tIiwibXRpdGxlIiwicHJlc0dpdGVTRU8iLCJ0ZXh0ZTEiLCJkZXRhaWxHaXRlIiwiY2FwYWNpdGUiLCJ2aWRlb0xpbmsiLCJjYWxlbmRyaWVyTGluayIsImNvdWxldXIxIiwiY291bGV1cjIiLCJlcnJvciIsInN1Y2Nlc3MiLCJsb2FkaW5nIiwiZm9ybURhdGEiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ0b2tlbiIsImdldENvb2tpZSIsInVzZUVmZmVjdCIsIkZvcm1EYXRhIiwiaGFuZGxlQ2hhbmdlIiwibmFtZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInNldCIsImNyZWVyR2l0ZSIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlR2l0ZSIsInRoZW4iLCJkYXRhIiwicGRmIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUFBOztBQUFBLGtCQUNBQyxzREFBUSxDQUFDO0FBQ3BDQyxPQUFHLEVBQUUsRUFEK0I7QUFFcENDLFVBQU0sRUFBRSxFQUY0QjtBQUdwQ0MsZUFBVyxFQUFFLEVBSHVCO0FBSXBDQyxVQUFNLEVBQUUsRUFKNEI7QUFLcENDLGNBQVUsRUFBRSxFQUx3QjtBQU1wQ0MsWUFBUSxFQUFFLEVBTjBCO0FBT3BDQyxhQUFTLEVBQUUsRUFQeUI7QUFRcENDLGtCQUFjLEVBQUUsRUFSb0I7QUFTcENDLFlBQVEsRUFBRSxFQVQwQjtBQVVwQ0MsWUFBUSxFQUFFLEVBVjBCO0FBV3BDQyxTQUFLLEVBQUUsRUFYNkI7QUFZcENDLFdBQU8sRUFBRSxFQVoyQjtBQWFwQ0MsV0FBTyxFQUFFLEtBYjJCO0FBY3BDQyxZQUFRLEVBQUU7QUFkMEIsR0FBRCxDQURSO0FBQUEsTUFDckJDLE1BRHFCO0FBQUEsTUFDYkMsU0FEYTs7QUFrQjVCLE1BQU1DLEtBQUssR0FBR0Msc0VBQVMsQ0FBQyxPQUFELENBQXZCO0FBbEI0QixNQW1CcEJQLEtBbkJvQixHQW1Ca0JJLE1BbkJsQixDQW1CcEJKLEtBbkJvQjtBQUFBLE1BbUJiQyxPQW5CYSxHQW1Ca0JHLE1BbkJsQixDQW1CYkgsT0FuQmE7QUFBQSxNQW1CSkMsT0FuQkksR0FtQmtCRSxNQW5CbEIsQ0FtQkpGLE9BbkJJO0FBQUEsTUFtQktDLFFBbkJMLEdBbUJrQkMsTUFuQmxCLENBbUJLRCxRQW5CTDtBQXFCNUJLLHlEQUFTLENBQUMsWUFBTTtBQUNmSCxhQUFTLGlDQUFNRCxNQUFOO0FBQWNELGNBQVEsRUFBRSxJQUFJTSxRQUFKO0FBQXhCLE9BQVQ7QUFDQSxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLElBQUQ7QUFBQSxXQUFVLFVBQUNDLENBQUQsRUFBTztBQUFBOztBQUNyQyxVQUFJQyxLQUFLLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTRCxLQUFyQjtBQUVBVixjQUFRLENBQUNZLEdBQVQsQ0FBYUosSUFBYixFQUFtQkUsS0FBbkI7QUFDQVIsZUFBUyxpQ0FBTUQsTUFBTix1SUFBZU8sSUFBZixFQUFzQkUsS0FBdEIseUhBQTZCVixRQUE3QixzSEFBOEMsRUFBOUMsb0JBQVQ7QUFDQSxLQUxvQjtBQUFBLEdBQXJCOztBQU9BLE1BQU1hLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNKLENBQUQsRUFBTztBQUN4QkEsS0FBQyxDQUFDSyxjQUFGO0FBQ0FaLGFBQVMsaUNBQU1ELE1BQU47QUFBY0YsYUFBTyxFQUFFO0FBQXZCLE9BQVQ7QUFDQWdCLDJFQUFVLENBQUNmLFFBQUQsRUFBV0csS0FBWCxDQUFWLENBQTRCYSxJQUE1QixDQUFpQyxVQUFDQyxJQUFELEVBQVU7QUFDMUMsVUFBSUEsSUFBSSxDQUFDcEIsS0FBVCxFQUFnQjtBQUNmSyxpQkFBUyxpQ0FBTUQsTUFBTjtBQUFjSixlQUFLLEVBQUVvQixJQUFJLENBQUNwQjtBQUExQixXQUFUO0FBQ0EsT0FGRCxNQUVPO0FBQ05LLGlCQUFTLENBQUM7QUFDVGYsYUFBRyxFQUFFLEVBREk7QUFFVEMsZ0JBQU0sRUFBRSxFQUZDO0FBR1RDLHFCQUFXLEVBQUUsRUFISjtBQUlUQyxnQkFBTSxFQUFFLEVBSkM7QUFLVEMsb0JBQVUsRUFBRSxFQUxIO0FBTVRDLGtCQUFRLEVBQUUsRUFORDtBQU9UQyxtQkFBUyxFQUFFLEVBUEY7QUFRVEMsd0JBQWMsRUFBRSxFQVJQO0FBU1R3QixhQUFHLEVBQUUsRUFUSTtBQVVUdkIsa0JBQVEsRUFBRSxFQVZEO0FBV1RDLGtCQUFRLEVBQUUsRUFYRDtBQVlUQyxlQUFLLEVBQUUsRUFaRTtBQWFUQyxpQkFBTyxFQUFFLEVBYkE7QUFjVEMsaUJBQU8sRUFBRTtBQWRBLFNBQUQsQ0FBVDtBQWdCQW9CLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQTtBQUNELEtBdEJEO0FBdUJBLEdBMUJEOztBQTJCQSxzQkFDQztBQUFBLDJCQUNDO0FBQU0sY0FBUSxFQUFFUCxTQUFoQjtBQUFBLDhCQUNDO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsZ0NBQ0M7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxrQ0FDQztBQUFLLHFCQUFTLEVBQUMsWUFBZjtBQUFBLG9DQUNDO0FBQU8sdUJBQVMsRUFBQyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUVDO0FBQ0Msa0JBQUksRUFBQyxNQUROO0FBRUMsdUJBQVMsRUFBQyxjQUZYO0FBR0Msc0JBQVEsRUFBRU4sWUFBWSxDQUFDLEtBQUQ7QUFIdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFTQztBQUFLLHFCQUFTLEVBQUMsWUFBZjtBQUFBLG9DQUNDO0FBQU8sdUJBQVMsRUFBQyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUVDO0FBQ0Msa0JBQUksRUFBQyxNQUROO0FBRUMsdUJBQVMsRUFBQyxjQUZYO0FBR0Msc0JBQVEsRUFBRUEsWUFBWSxDQUFDLFFBQUQ7QUFIdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEQsZUFpQkM7QUFBSyxxQkFBUyxFQUFDLFlBQWY7QUFBQSxvQ0FDQztBQUFPLHVCQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFLQztBQUNDLGtCQUFJLEVBQUMsTUFETjtBQUVDLHVCQUFTLEVBQUMsY0FGWDtBQUdDLHNCQUFRLEVBQUVBLFlBQVksQ0FBQyxhQUFELENBSHZCO0FBSUMsa0JBQUksRUFBQyxJQUpOO0FBS0Msa0JBQUksRUFBQztBQUxOO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWpCRCxlQThCQztBQUFLLHFCQUFTLEVBQUMsWUFBZjtBQUFBLG9DQUNDO0FBQU8sdUJBQVMsRUFBQyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUVDO0FBQ0Msa0JBQUksRUFBQyxNQUROO0FBRUMsdUJBQVMsRUFBQyxjQUZYO0FBR0Msc0JBQVEsRUFBRUEsWUFBWSxDQUFDLFFBQUQsQ0FIdkI7QUFJQyxrQkFBSSxFQUFDLElBSk47QUFLQyxrQkFBSSxFQUFDO0FBTE47QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBOUJELGVBdUNDO0FBQUsscUJBQVMsRUFBQyxZQUFmO0FBQUEsb0NBQ0M7QUFBTyx1QkFBUyxFQUFDLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBRUM7QUFDQyxrQkFBSSxFQUFDLE1BRE47QUFFQyx1QkFBUyxFQUFDLGNBRlg7QUFHQyxzQkFBUSxFQUFFQSxZQUFZLENBQUMsWUFBRCxDQUh2QjtBQUlDLGtCQUFJLEVBQUMsSUFKTjtBQUtDLGtCQUFJLEVBQUM7QUFMTjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF2Q0QsZUFnREM7QUFBSyxxQkFBUyxFQUFDLFlBQWY7QUFBQSxvQ0FDQztBQUFPLHVCQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFJQztBQUNDLGtCQUFJLEVBQUMsUUFETjtBQUVDLHVCQUFTLEVBQUMsY0FGWDtBQUdDLHNCQUFRLEVBQUVBLFlBQVksQ0FBQyxVQUFEO0FBSHZCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWhERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUE0REM7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxrQ0FnQkM7QUFBVSxxQkFBUyxFQUFDLFlBQXBCO0FBQUEsb0NBQ0M7QUFBUSx1QkFBUyxFQUFDLFFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBRUM7QUFBSyx1QkFBUyxFQUFDLFlBQWY7QUFBQSxzQ0FDQztBQUFPLHlCQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREQsZUFJQztBQUNDLG9CQUFJLEVBQUMsTUFETjtBQUVDLHlCQUFTLEVBQUMsY0FGWDtBQUdDLHdCQUFRLEVBQUVBLFlBQVksQ0FBQyxXQUFEO0FBSHZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZELGVBWUM7QUFBSyx1QkFBUyxFQUFDLFlBQWY7QUFBQSxzQ0FDQztBQUFPLHlCQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREQsZUFJQztBQUNDLG9CQUFJLEVBQUMsTUFETjtBQUVDLHlCQUFTLEVBQUMsY0FGWDtBQUdDLHdCQUFRLEVBQUVBLFlBQVksQ0FBQyxnQkFBRDtBQUh2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFaRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaEJELGVBcURDO0FBQVUscUJBQVMsRUFBQyxZQUFwQjtBQUFBLG9DQUNDO0FBQVEsdUJBQVMsRUFBQyxRQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUVDO0FBQUssdUJBQVMsRUFBQyxZQUFmO0FBQUEsc0NBQ0M7QUFBTyx5QkFBUyxFQUFDLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURELGVBSUM7QUFDQyxvQkFBSSxFQUFDLE9BRE47QUFFQyx5QkFBUyxFQUFDLGNBRlg7QUFHQyx3QkFBUSxFQUFFQSxZQUFZLENBQUMsVUFBRDtBQUh2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRCxlQVlDO0FBQUssdUJBQVMsRUFBQyxZQUFmO0FBQUEsc0NBQ0M7QUFBTyx5QkFBUyxFQUFDLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURELGVBSUM7QUFDQyxvQkFBSSxFQUFDLE9BRE47QUFFQyx5QkFBUyxFQUFDLGNBRlg7QUFHQyx3QkFBUSxFQUFFQSxZQUFZLENBQUMsVUFBRDtBQUh2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFaRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBckREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE1REQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsRUEySUVULE9BQU8saUJBQ1A7QUFBSyxpQkFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBNUlGLEVBZ0pFRCxLQUFLLGlCQUFJO0FBQUssaUJBQVMsRUFBQyxxQkFBZjtBQUFBLGtCQUFzQ0E7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhKWCxlQWlKQztBQUFBLCtCQUNDO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBc0IsbUJBQVMsRUFBQyxjQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsbUJBREQ7QUEySkEsQ0F0TkQ7O0dBQU1aLGM7O0tBQUFBLGM7QUF3TlNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvZ2l0ZS9jcmVhdGUuMmE2YzBiMDY0MzFiZGNhMjc5OTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZUdpdGUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcblxyXG5jb25zdCBGb3JtQ3JlYXRlR2l0ZSA9ICgpID0+IHtcclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0bm9tOiAnJyxcclxuXHRcdG10aXRsZTogJycsXHJcblx0XHRwcmVzR2l0ZVNFTzogJycsXHJcblx0XHR0ZXh0ZTE6ICcnLFxyXG5cdFx0ZGV0YWlsR2l0ZTogJycsXHJcblx0XHRjYXBhY2l0ZTogJycsXHJcblx0XHR2aWRlb0xpbms6ICcnLFxyXG5cdFx0Y2FsZW5kcmllckxpbms6ICcnLFxyXG5cdFx0Y291bGV1cjE6ICcnLFxyXG5cdFx0Y291bGV1cjI6ICcnLFxyXG5cdFx0ZXJyb3I6ICcnLFxyXG5cdFx0c3VjY2VzczogJycsXHJcblx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdGZvcm1EYXRhOiAnJyxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblx0Y29uc3QgeyBlcnJvciwgc3VjY2VzcywgbG9hZGluZywgZm9ybURhdGEgfSA9IHZhbHVlcztcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZm9ybURhdGE6IG5ldyBGb3JtRGF0YSgpIH0pO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKG5hbWUpID0+IChlKSA9PiB7XHJcblx0XHRsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuXHJcblx0XHRmb3JtRGF0YS5zZXQobmFtZSwgdmFsdWUpO1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBbbmFtZV06IHZhbHVlLCBmb3JtRGF0YSwgZXJyb3I6ICcnIH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNyZWVyR2l0ZSA9IChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUgfSk7XHJcblx0XHRjcmVhdGVHaXRlKGZvcm1EYXRhLCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3IgfSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdG5vbTogJycsXHJcblx0XHRcdFx0XHRtdGl0bGU6ICcnLFxyXG5cdFx0XHRcdFx0cHJlc0dpdGVTRU86ICcnLFxyXG5cdFx0XHRcdFx0dGV4dGUxOiAnJyxcclxuXHRcdFx0XHRcdGRldGFpbEdpdGU6ICcnLFxyXG5cdFx0XHRcdFx0Y2FwYWNpdGU6ICcnLFxyXG5cdFx0XHRcdFx0dmlkZW9MaW5rOiAnJyxcclxuXHRcdFx0XHRcdGNhbGVuZHJpZXJMaW5rOiAnJyxcclxuXHRcdFx0XHRcdHBkZjogJycsXHJcblx0XHRcdFx0XHRjb3VsZXVyMTogJycsXHJcblx0XHRcdFx0XHRjb3VsZXVyMjogJycsXHJcblx0XHRcdFx0XHRlcnJvcjogJycsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiAnJyxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdUb3V0IGVzdCBvaycpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17Y3JlZXJHaXRlfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtOCc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5Ob20gZHUgZ8OudGU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbm9tJyl9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5NZXRhIFRpdGxlPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ210aXRsZScpfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRNw6l0YS1EZXNjcmlwdGlvbiAocHLDqXNlbnRhdGlvbiBTRU8gZHUgZ8OudGUgcG91clxyXG5cdFx0XHRcdFx0XHRcdFx0R29vZ2xlKVxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwcmVzR2l0ZVNFTycpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y29scz0nMzAnXHJcblx0XHRcdFx0XHRcdFx0XHRyb3dzPSc0Jz48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5UZXh0ZSBkdSBnw650ZTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCd0ZXh0ZTEnKX1cclxuXHRcdFx0XHRcdFx0XHRcdGNvbHM9JzMwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cm93cz0nNCc+PC90ZXh0YXJlYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5Ew6l0YWlsIGR1IGfDrnRlPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWFcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2RldGFpbEdpdGUnKX1cclxuXHRcdFx0XHRcdFx0XHRcdGNvbHM9JzMwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cm93cz0nNCc+PC90ZXh0YXJlYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5cclxuXHRcdFx0XHRcdFx0XHRcdENhcGFjaXTDqSBkdSBnw650ZVxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSdudW1iZXInXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2NhcGFjaXRlJyl9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNCc+XHJcblx0XHRcdFx0XHRcdHsvKiA8ZmllbGRzZXQgY2xhc3NOYW1lPSdib3JkZXIgcC0yJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGVnZW5kIGNsYXNzTmFtZT0ndy1hdXRvJz5JbWFnZXM8L2xlZ2VuZD5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdidG4gYnRuLW91dGxpbmUtaW5mbyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFBob3Rvc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwaG90b3MnKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdmaWxlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFjY2VwdD0naW1hZ2UvKidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtdWx0aXBsZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhpZGRlblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9maWVsZHNldD4gKi99XHJcblx0XHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzc05hbWU9J2JvcmRlciBwLTInPlxyXG5cdFx0XHRcdFx0XHRcdDxsZWdlbmQgY2xhc3NOYW1lPSd3LWF1dG8nPkxpZW5zPC9sZWdlbmQ+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdExpZW4gdmlkw6lvIFlvdVR1YmVcclxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3ZpZGVvTGluaycpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0TGllbiBkdSBjYWxlbmRyaWVyXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdjYWxlbmRyaWVyTGluaycpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9maWVsZHNldD5cclxuXHRcdFx0XHRcdFx0ey8qIDxmaWVsZHNldCBjbGFzc05hbWU9J2JvcmRlciBwLTInPlxyXG5cdFx0XHRcdFx0XHRcdDxsZWdlbmQgY2xhc3NOYW1lPSd3LWF1dG8nPkZpY2hpZXJzPC9sZWdlbmQ+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nYnRuIGJ0bi1vdXRsaW5lLWluZm8nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRGaWNoaWVycyBQREZcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncGRmJyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nZmlsZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhY2NlcHQ9Jy5wZGYnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aGlkZGVuXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2ZpZWxkc2V0PiAqL31cclxuXHRcdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzTmFtZT0nYm9yZGVyIHAtMic+XHJcblx0XHRcdFx0XHRcdFx0PGxlZ2VuZCBjbGFzc05hbWU9J3ctYXV0byc+Q291bGV1cnM8L2xlZ2VuZD5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Q291bGV1ciBkZSBmb25kXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J2NvbG9yJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnY291bGV1cjEnKX1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdENvdWxldXIgZHUgdGV4dGUgKG5vaXIpXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J2NvbG9yJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnY291bGV1cjInKX1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZmllbGRzZXQ+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR7c3VjY2VzcyAmJiAoXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYWxlcnQgYWxlcnQtc3VjY2Vzcyc+XHJcblx0XHRcdFx0XHRcdExlIGfDrnRlIGEgYmllbiDDqXTDqSBham91dMOpXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHRcdHtlcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT0nYWxlcnQgYWxlcnQtc3VjY2Vzcyc+e2Vycm9yfTwvZGl2Pn1cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnRuIGJ0bi1pbmZvJz5cclxuXHRcdFx0XHRcdFx0Q3LDqWVyIGNlIGfDrnRlXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1DcmVhdGVHaXRlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9