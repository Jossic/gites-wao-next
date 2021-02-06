webpackHotUpdate_N_E("pages/admin/crud/divers/partenaire/[id]/card/create",{

/***/ "./components/admin/forms/FormCreatePartenaireCard.js":
/*!************************************************************!*\
  !*** ./components/admin/forms/FormCreatePartenaireCard.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _actions_partenairesActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../actions/partenairesActions */ "./actions/partenairesActions.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../actions/giteActions */ "./actions/giteActions.js");





var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\forms\\FormCreatePartenaireCard.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var FormCreatePartenaire = function FormCreatePartenaire(_ref) {
  _s();

  var router = _ref.router;
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_5__["getCookie"])('token');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      photos = _useState[0],
      setPhotos = _useState[1];

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    titre: '',
    mail: '',
    tel: '',
    adresse: '',
    texte: '',
    site: '',
    image: '',
    actif: '',
    loading: false,
    success: '',
    error: ''
  }),
      values = _useState2[0],
      setValues = _useState2[1];

  var success = values.success,
      loading = values.loading,
      error = values.error;

  var listerLesImages = function listerLesImages() {
    //recup Section
    Object(_actions_partenairesActions__WEBPACK_IMPORTED_MODULE_8__["listePartenaireById"])(router.query.id, token).then(function (result) {
      console.log('result.slug', result.slug);

      if (result.error) {
        console.log(error);
      } else {
        Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_11__["listPhotosBySection"])(result.slug).then(function (data) {
          if (data.error) {
            console.log(error);
          } else {
            setPhotos.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(photos).concat([data]));
          }
        });
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    listerLesImages();
  }, []);

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(data);
              setValues(_objectSpread(_objectSpread({}, values), {}, {
                loading: true
              }));
              Object(_actions_partenairesActions__WEBPACK_IMPORTED_MODULE_8__["createPartenaire"])(data, token).then(function (result) {
                if (result.error) {
                  setValues(_objectSpread(_objectSpread({}, values), {}, {
                    error: result.error
                  }));
                } else {
                  setValues(_objectSpread(_objectSpread({}, values), {}, {
                    success: true,
                    loading: false
                  }));
                  setTimeout(function () {
                    Router.push("/admin/gestionDivers/partenaires/manage/".concat(router.query.id));
                  }, 3000);
                }
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "col-md-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 8
    }
  }, "Nom du partenaire"), __jsx("input", {
    type: "text",
    name: "titre",
    ref: register({
      required: true
    }),
    className: "form-control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 8
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 8
    }
  }, "Mail"), __jsx("input", {
    type: "mail",
    name: "mail",
    ref: register(),
    className: "form-control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 8
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 8
    }
  }, "Tel"), __jsx("input", {
    type: "tel",
    name: "tel",
    ref: register(),
    className: "form-control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 8
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 8
    }
  }, "Adresse"), __jsx("input", {
    type: "text",
    name: "adresse",
    ref: register(),
    className: "form-control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 8
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 8
    }
  }, "Texte"), __jsx("input", {
    type: "text",
    name: "texte",
    ref: register(),
    className: "form-control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 8
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 8
    }
  }, "Site"), __jsx("input", {
    type: "text",
    name: "site",
    ref: register(),
    className: "form-control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 8
    }
  })), __jsx("select", {
    name: "",
    id: "",
    ref: register(),
    className: "selectpicker",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }
  }, photos.map(function (photo, i) {
    return __jsx("div", {
      "class": "form-check form-check-inline",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }
    }, __jsx("input", {
      "class": "form-check-input",
      type: "radio",
      name: "inlineRadioOptions",
      id: "inlineRadio1",
      value: "option1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 10
      }
    }), __jsx("label", {
      "class": "form-check-label",
      "for": "inlineRadio1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 10
      }
    }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_10___default.a, {
      className: "d-block w-100",
      src: photo.location,
      alt: photo.alt,
      width: 500,
      height: 375,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 11
      }
    })));
  })), __jsx("div", {
    className: "custom-control custom-switch",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }
  }, __jsx("input", {
    className: "custom-control-input",
    type: "checkbox",
    name: "actif",
    id: "flexSwitchCheckDefault",
    ref: register(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 8
    }
  }), __jsx("label", {
    className: "custom-control-label pb-3",
    "for": "flexSwitchCheckDefault",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 8
    }
  }, "Actif")))), success && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Alert"], {
    color: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 6
    }
  }, "La cat\xE9gorie a bien \xE9t\xE9 ajout\xE9e, redirection en cours..."), loading && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Spinner"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 17
    }
  }), error && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Alert"], {
    color: "danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 15
    }
  }, error), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 5
    }
  }, __jsx("button", {
    type: "submit",
    className: "btn btn-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 6
    }
  }, "Cr\xE9er cette cat\xE9gorie"))));
};

_s(FormCreatePartenaire, "EAyXqLL+hJYXt9b7c7fH54Lsnog=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"]];
});

_c = FormCreatePartenaire;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(FormCreatePartenaire));

var _c, _c2;

$RefreshReg$(_c, "FormCreatePartenaire");
$RefreshReg$(_c2, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9Gb3JtQ3JlYXRlUGFydGVuYWlyZUNhcmQuanMiXSwibmFtZXMiOlsiRm9ybUNyZWF0ZVBhcnRlbmFpcmUiLCJyb3V0ZXIiLCJ0b2tlbiIsImdldENvb2tpZSIsInVzZVN0YXRlIiwicGhvdG9zIiwic2V0UGhvdG9zIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwidGl0cmUiLCJtYWlsIiwidGVsIiwiYWRyZXNzZSIsInRleHRlIiwic2l0ZSIsImltYWdlIiwiYWN0aWYiLCJsb2FkaW5nIiwic3VjY2VzcyIsImVycm9yIiwidmFsdWVzIiwic2V0VmFsdWVzIiwibGlzdGVyTGVzSW1hZ2VzIiwibGlzdGVQYXJ0ZW5haXJlQnlJZCIsInF1ZXJ5IiwiaWQiLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInNsdWciLCJsaXN0UGhvdG9zQnlTZWN0aW9uIiwiZGF0YSIsInVzZUVmZmVjdCIsIm9uU3VibWl0IiwiY3JlYXRlUGFydGVuYWlyZSIsInNldFRpbWVvdXQiLCJSb3V0ZXIiLCJwdXNoIiwicmVxdWlyZWQiLCJtYXAiLCJwaG90byIsImkiLCJsb2NhdGlvbiIsImFsdCIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsT0FBZ0I7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDNUMsTUFBTUMsS0FBSyxHQUFHQyxzRUFBUyxDQUFDLE9BQUQsQ0FBdkI7O0FBRDRDLGtCQUVoQkMsc0RBQVEsQ0FBQyxFQUFELENBRlE7QUFBQSxNQUVyQ0MsTUFGcUM7QUFBQSxNQUU3QkMsU0FGNkI7O0FBQUEsaUJBSVRDLCtEQUFPLEVBSkU7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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkQsQ0F2RkQsQ0FERCxDQURELEVBeUdFVyxPQUFPLElBQ1AsTUFBQyxnREFBRDtBQUFPLFNBQUssRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBMUdGLEVBOEdFRCxPQUFPLElBQUksTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBOUdiLEVBK0dFRSxLQUFLLElBQUksTUFBQyxnREFBRDtBQUFPLFNBQUssRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUJBLEtBQXZCLENBL0dYLEVBZ0hDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLGFBQVMsRUFBQyxjQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURELENBaEhELENBREQsQ0FERDtBQTBIQSxDQTFMRDs7R0FBTXBCLG9CO1VBSThCTyx1RDs7O0tBSjlCUCxvQjtBQTRMUyxxRUFBQThDLDhEQUFVLENBQUM5QyxvQkFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9jcnVkL2RpdmVycy9wYXJ0ZW5haXJlL1tpZF0vY2FyZC9jcmVhdGUuM2ZjNzg4MjY2MDdlODcwOGFiMjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtcclxuXHRjcmVhdGVQYXJ0ZW5haXJlLFxyXG5cdGxpc3RlUGFydGVuYWlyZUJ5SWQsXHJcbn0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9wYXJ0ZW5haXJlc0FjdGlvbnMnO1xyXG5pbXBvcnQgeyBBbGVydCwgU3Bpbm5lciB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IGxpc3RQaG90b3NCeVNlY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuXHJcbmNvbnN0IEZvcm1DcmVhdGVQYXJ0ZW5haXJlID0gKHsgcm91dGVyIH0pID0+IHtcclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHRjb25zdCBbcGhvdG9zLCBzZXRQaG90b3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHRjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm0oKTtcclxuXHJcblx0Y29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuXHRcdHRpdHJlOiAnJyxcclxuXHRcdG1haWw6ICcnLFxyXG5cdFx0dGVsOiAnJyxcclxuXHRcdGFkcmVzc2U6ICcnLFxyXG5cdFx0dGV4dGU6ICcnLFxyXG5cdFx0c2l0ZTogJycsXHJcblx0XHRpbWFnZTogJycsXHJcblx0XHRhY3RpZjogJycsXHJcblx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0ZXJyb3I6ICcnLFxyXG5cdH0pO1xyXG5cdGNvbnN0IHsgc3VjY2VzcywgbG9hZGluZywgZXJyb3IgfSA9IHZhbHVlcztcclxuXHJcblx0Y29uc3QgbGlzdGVyTGVzSW1hZ2VzID0gKCkgPT4ge1xyXG5cdFx0Ly9yZWN1cCBTZWN0aW9uXHJcblx0XHRsaXN0ZVBhcnRlbmFpcmVCeUlkKHJvdXRlci5xdWVyeS5pZCwgdG9rZW4pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygncmVzdWx0LnNsdWcnLCByZXN1bHQuc2x1Zyk7XHJcblx0XHRcdGlmIChyZXN1bHQuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bGlzdFBob3Rvc0J5U2VjdGlvbihyZXN1bHQuc2x1ZykudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0c2V0UGhvdG9zKC4uLnBob3RvcywgZGF0YSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsaXN0ZXJMZXNJbWFnZXMoKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdFx0Y3JlYXRlUGFydGVuYWlyZShkYXRhLCB0b2tlbikudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHRcdGlmIChyZXN1bHQuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiByZXN1bHQuZXJyb3IgfSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IHRydWUsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFJvdXRlci5wdXNoKFxyXG5cdFx0XHRcdFx0XHRgL2FkbWluL2dlc3Rpb25EaXZlcnMvcGFydGVuYWlyZXMvbWFuYWdlLyR7cm91dGVyLnF1ZXJ5LmlkfWBcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSwgMzAwMCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTEyJz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0Tm9tIGR1IHBhcnRlbmFpcmVcclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J3RpdHJlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5NYWlsPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J21haWwnXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPSdtYWlsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3RlcigpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+VGVsPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RlbCdcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J3RlbCdcclxuXHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoKX1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+QWRyZXNzZTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT0nYWRyZXNzZSdcclxuXHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoKX1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+VGV4dGU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J3RleHRlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3RlcigpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5TaXRlPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPSdzaXRlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3RlcigpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxzZWxlY3RcclxuXHRcdFx0XHRcdFx0XHRuYW1lPScnXHJcblx0XHRcdFx0XHRcdFx0aWQ9JydcclxuXHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKCl9XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdzZWxlY3RwaWNrZXInPlxyXG5cdFx0XHRcdFx0XHRcdHtwaG90b3MubWFwKChwaG90bywgaSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz0nZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPSdmb3JtLWNoZWNrLWlucHV0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3JhZGlvJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J2lubGluZVJhZGlvT3B0aW9ucydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZD0naW5saW5lUmFkaW8xJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPSdvcHRpb24xJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz0nZm9ybS1jaGVjay1sYWJlbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb3I9J2lubGluZVJhZGlvMSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2QtYmxvY2sgdy0xMDAnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e3Bob3RvLmxvY2F0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PXtwaG90by5hbHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD17NTAwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXszNzV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjdXN0b20tY29udHJvbCBjdXN0b20tc3dpdGNoJz5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY3VzdG9tLWNvbnRyb2wtaW5wdXQnXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSdjaGVja2JveCdcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J2FjdGlmJ1xyXG5cdFx0XHRcdFx0XHRcdFx0aWQ9J2ZsZXhTd2l0Y2hDaGVja0RlZmF1bHQnXHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKCl9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY3VzdG9tLWNvbnRyb2wtbGFiZWwgcGItMydcclxuXHRcdFx0XHRcdFx0XHRcdGZvcj0nZmxleFN3aXRjaENoZWNrRGVmYXVsdCc+XHJcblx0XHRcdFx0XHRcdFx0XHRBY3RpZlxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0e3N1Y2Nlc3MgJiYgKFxyXG5cdFx0XHRcdFx0PEFsZXJ0IGNvbG9yPSdzdWNjZXNzJz5cclxuXHRcdFx0XHRcdFx0TGEgY2F0w6lnb3JpZSBhIGJpZW4gw6l0w6kgYWpvdXTDqWUsIHJlZGlyZWN0aW9uIGVuIGNvdXJzLi4uXHJcblx0XHRcdFx0XHQ8L0FsZXJ0PlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdFx0e2xvYWRpbmcgJiYgPFNwaW5uZXIgLz59XHJcblx0XHRcdFx0e2Vycm9yICYmIDxBbGVydCBjb2xvcj0nZGFuZ2VyJz57ZXJyb3J9PC9BbGVydD59XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0biBidG4taW5mbyc+XHJcblx0XHRcdFx0XHRcdENyw6llciBjZXR0ZSBjYXTDqWdvcmllXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoRm9ybUNyZWF0ZVBhcnRlbmFpcmUpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9