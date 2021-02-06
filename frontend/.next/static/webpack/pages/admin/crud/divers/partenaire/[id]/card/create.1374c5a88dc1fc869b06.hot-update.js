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










var FormCreatePartenaireCard = function FormCreatePartenaireCard(_ref) {
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
    Object(_actions_partenairesActions__WEBPACK_IMPORTED_MODULE_8__["listePartenaireById"])(router.query.id, token).then(function (result) {
      console.log('result.slug', result.slug);

      if (result.error) {
        console.log(error);
      } else {
        Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_11__["listPhotosBySection"])(result.slug).then(function (data) {
          console.log('photo =>', data);

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
              console.log('data onsubmit', data);
              setValues(_objectSpread(_objectSpread({}, values), {}, {
                loading: true
              }));
              Object(_actions_partenairesActions__WEBPACK_IMPORTED_MODULE_8__["createPartenaireCard"])(data, router.query.id, token).then(function (result) {
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
  })), photos.map(function (photo, i) {
    var _jsx;

    return __jsx("div", {
      "class": "form-check form-check-inline",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 8
      }
    }, __jsx("input", {
      "class": "form-check-input",
      type: "radio",
      name: "image",
      id: "check".concat(i),
      value: photo,
      ref: register(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }
    }), __jsx("label", {
      "class": "form-check-label",
      htmlFor: "check".concat(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }
    }, __jsx("img", (_jsx = {
      className: "d-block w-100",
      src: photo.location,
      alt: photo.alt,
      style: {
        height: '150px',
        width: '200px'
      }
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "className", "img img-fluid"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "__source", {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 10
    }), _jsx))));
  }), __jsx("div", {
    className: "custom-control custom-switch",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
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
      lineNumber: 170,
      columnNumber: 8
    }
  }), __jsx("label", {
    className: "custom-control-label pb-3",
    "for": "flexSwitchCheckDefault",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 8
    }
  }, "Actif")))), success && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Alert"], {
    color: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 6
    }
  }, "Le partenaire a bien \xE9t\xE9 ajout\xE9, redirection en cours..."), loading && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Spinner"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 17
    }
  }), error && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Alert"], {
    color: "danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 15
    }
  }, error), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 5
    }
  }, __jsx("button", {
    type: "submit",
    className: "btn btn-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 6
    }
  }, "Cr\xE9er ce partenaire"))));
};

_s(FormCreatePartenaireCard, "EAyXqLL+hJYXt9b7c7fH54Lsnog=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"]];
});

_c = FormCreatePartenaireCard;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(FormCreatePartenaireCard));

var _c, _c2;

$RefreshReg$(_c, "FormCreatePartenaireCard");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9Gb3JtQ3JlYXRlUGFydGVuYWlyZUNhcmQuanMiXSwibmFtZXMiOlsiRm9ybUNyZWF0ZVBhcnRlbmFpcmVDYXJkIiwicm91dGVyIiwidG9rZW4iLCJnZXRDb29raWUiLCJ1c2VTdGF0ZSIsInBob3RvcyIsInNldFBob3RvcyIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInRpdHJlIiwibWFpbCIsInRlbCIsImFkcmVzc2UiLCJ0ZXh0ZSIsInNpdGUiLCJpbWFnZSIsImFjdGlmIiwibG9hZGluZyIsInN1Y2Nlc3MiLCJlcnJvciIsInZhbHVlcyIsInNldFZhbHVlcyIsImxpc3Rlckxlc0ltYWdlcyIsImxpc3RlUGFydGVuYWlyZUJ5SWQiLCJxdWVyeSIsImlkIiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJzbHVnIiwibGlzdFBob3Rvc0J5U2VjdGlvbiIsImRhdGEiLCJ1c2VFZmZlY3QiLCJvblN1Ym1pdCIsImNyZWF0ZVBhcnRlbmFpcmVDYXJkIiwic2V0VGltZW91dCIsIlJvdXRlciIsInB1c2giLCJyZXF1aXJlZCIsIm1hcCIsInBob3RvIiwiaSIsImxvY2F0aW9uIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLE9BQWdCO0FBQUE7O0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBQ2hELE1BQU1DLEtBQUssR0FBR0Msc0VBQVMsQ0FBQyxPQUFELENBQXZCOztBQURnRCxrQkFFcEJDLHNEQUFRLENBQUMsRUFBRCxDQUZZO0FBQUEsTUFFekNDLE1BRnlDO0FBQUEsTUFFakNDLFNBRmlD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LEtBQ0M7QUFBTyxhQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURELEVBRUM7QUFDQyxRQUFJLEVBQUMsS0FETjtBQUVDLFFBQUksRUFBQyxLQUZOO0FBR0MsT0FBRyxFQUFFQSxRQUFRLEVBSGQ7QUFJQyxhQUFTLEVBQUMsY0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsQ0F0QkQsRUErQkM7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBTyxhQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELEVBRUM7QUFDQyxRQUFJLEVBQUMsTUFETjtBQUVDLFFBQUksRUFBQyxTQUZOO0FBR0MsT0FBRyxFQUFFQSxRQUFRLEVBSGQ7QUFJQyxhQUFTLEVBQUMsY0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsQ0EvQkQsRUF3Q0M7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBTyxhQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELEVBRUM7QUFDQyxRQUFJLEVBQUMsTUFETjtBQUVDLFFBQUksRUFBQyxPQUZOO0FBR0MsT0FBRyxFQUFFQSxRQUFRLEVBSGQ7QUFJQyxhQUFTLEVBQUMsY0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsQ0F4Q0QsRUFpREM7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBTyxhQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELEVBRUM7QUFDQyxRQUFJLEVBQUMsTUFETjtBQUVDLFFBQUksRUFBQyxNQUZOO0FBR0MsT0FBRyxFQUFFQSxRQUFRLEVBSGQ7QUFJQyxhQUFTLEVBQUMsY0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsQ0FqREQsRUEyREVILE1BQU0sQ0FBQ29DLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVFDLENBQVI7QUFBQTs7QUFBQSxXQUNYO0FBQUssZUFBTSw4QkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFDQyxlQUFNLGtCQURQO0FBRUMsVUFBSSxFQUFDLE9BRk47QUFHQyxVQUFJLEVBQUMsT0FITjtBQUlDLFFBQUUsaUJBQVVBLENBQVYsQ0FKSDtBQUtDLFdBQUssRUFBRUQsS0FMUjtBQU1DLFNBQUcsRUFBRWxDLFFBQVEsRUFOZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREQsRUFTQztBQUNDLGVBQU0sa0JBRFA7QUFFQyxhQUFPLGlCQUFVbUMsQ0FBVixDQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FHQztBQUNDLGVBQVMsRUFBQyxlQURYO0FBRUMsU0FBRyxFQUFFRCxLQUFLLENBQUNFLFFBRlo7QUFHQyxTQUFHLEVBQUVGLEtBQUssQ0FBQ0csR0FIWjtBQUlDLFdBQUssRUFBRTtBQUNOQyxjQUFNLEVBQUUsT0FERjtBQUVOQyxhQUFLLEVBQUU7QUFGRDtBQUpSLG9IQVFXLGVBUlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhELENBVEQsQ0FEVztBQUFBLEdBQVgsQ0EzREYsRUF3RkM7QUFBSyxhQUFTLEVBQUMsOEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQ0MsYUFBUyxFQUFDLHNCQURYO0FBRUMsUUFBSSxFQUFDLFVBRk47QUFHQyxRQUFJLEVBQUMsT0FITjtBQUlDLE1BQUUsRUFBQyx3QkFKSjtBQUtDLE9BQUcsRUFBRXZDLFFBQVEsRUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFRQztBQUNDLGFBQVMsRUFBQywyQkFEWDtBQUVDLFdBQUksd0JBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJELENBeEZELENBREQsQ0FERCxFQTBHRVcsT0FBTyxJQUNQLE1BQUMsZ0RBQUQ7QUFBTyxTQUFLLEVBQUMsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlFQTNHRixFQStHRUQsT0FBTyxJQUFJLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQS9HYixFQWdIRUUsS0FBSyxJQUFJLE1BQUMsZ0RBQUQ7QUFBTyxTQUFLLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVCQSxLQUF2QixDQWhIWCxFQWlIQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUMsY0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFERCxDQWpIRCxDQURELENBREQ7QUEySEEsQ0EzTEQ7O0dBQU1wQix3QjtVQUk4Qk8sdUQ7OztLQUo5QlAsd0I7QUE2TFMscUVBQUFnRCw4REFBVSxDQUFDaEQsd0JBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9kaXZlcnMvcGFydGVuYWlyZS9baWRdL2NhcmQvY3JlYXRlLjEzNzRjNWE4OGRjMWZjODY5YjA2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7XHJcblx0Y3JlYXRlUGFydGVuYWlyZUNhcmQsXHJcblx0bGlzdGVQYXJ0ZW5haXJlQnlJZCxcclxufSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL3BhcnRlbmFpcmVzQWN0aW9ucyc7XHJcbmltcG9ydCB7IEFsZXJ0LCBTcGlubmVyIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgbGlzdFBob3Rvc0J5U2VjdGlvbiB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5cclxuY29uc3QgRm9ybUNyZWF0ZVBhcnRlbmFpcmVDYXJkID0gKHsgcm91dGVyIH0pID0+IHtcclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHRjb25zdCBbcGhvdG9zLCBzZXRQaG90b3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHRjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm0oKTtcclxuXHJcblx0Y29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuXHRcdHRpdHJlOiAnJyxcclxuXHRcdG1haWw6ICcnLFxyXG5cdFx0dGVsOiAnJyxcclxuXHRcdGFkcmVzc2U6ICcnLFxyXG5cdFx0dGV4dGU6ICcnLFxyXG5cdFx0c2l0ZTogJycsXHJcblx0XHRpbWFnZTogJycsXHJcblx0XHRhY3RpZjogJycsXHJcblx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0ZXJyb3I6ICcnLFxyXG5cdH0pO1xyXG5cdGNvbnN0IHsgc3VjY2VzcywgbG9hZGluZywgZXJyb3IgfSA9IHZhbHVlcztcclxuXHJcblx0Y29uc3QgbGlzdGVyTGVzSW1hZ2VzID0gKCkgPT4ge1xyXG5cdFx0bGlzdGVQYXJ0ZW5haXJlQnlJZChyb3V0ZXIucXVlcnkuaWQsIHRva2VuKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3Jlc3VsdC5zbHVnJywgcmVzdWx0LnNsdWcpO1xyXG5cdFx0XHRpZiAocmVzdWx0LmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGxpc3RQaG90b3NCeVNlY3Rpb24ocmVzdWx0LnNsdWcpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdwaG90byA9PicsIGRhdGEpO1xyXG5cdFx0XHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0c2V0UGhvdG9zKC4uLnBob3RvcywgZGF0YSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsaXN0ZXJMZXNJbWFnZXMoKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKCdkYXRhIG9uc3VibWl0JywgZGF0YSk7XHJcblx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUgfSk7XHJcblx0XHRjcmVhdGVQYXJ0ZW5haXJlQ2FyZChkYXRhLCByb3V0ZXIucXVlcnkuaWQsIHRva2VuKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0aWYgKHJlc3VsdC5lcnJvcikge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IHJlc3VsdC5lcnJvciB9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Um91dGVyLnB1c2goXHJcblx0XHRcdFx0XHRcdGAvYWRtaW4vZ2VzdGlvbkRpdmVycy9wYXJ0ZW5haXJlcy9tYW5hZ2UvJHtyb3V0ZXIucXVlcnkuaWR9YFxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9LCAzMDAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtMTInPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+XHJcblx0XHRcdFx0XHRcdFx0XHROb20gZHUgcGFydGVuYWlyZVxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT0ndGl0cmUnXHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPk1haWw8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0nbWFpbCdcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J21haWwnXHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKCl9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5UZWw8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGVsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT0ndGVsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3RlcigpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5BZHJlc3NlPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPSdhZHJlc3NlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3RlcigpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5UZXh0ZTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT0ndGV4dGUnXHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKCl9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlNpdGU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J3NpdGUnXHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKCl9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdHtwaG90b3MubWFwKChwaG90bywgaSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9J2Zvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPSdmb3JtLWNoZWNrLWlucHV0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdyYWRpbydcclxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0naW1hZ2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPXtgY2hlY2ske2l9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3Bob3RvfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKCl9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPSdmb3JtLWNoZWNrLWxhYmVsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRodG1sRm9yPXtgY2hlY2ske2l9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2QtYmxvY2sgdy0xMDAnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtwaG90by5sb2NhdGlvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9e3Bob3RvLmFsdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAnMTUwcHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6ICcyMDBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ltZyBpbWctZmx1aWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gd2lkdGg9ezIwMH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBoZWlnaHQ9ezE1MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2N1c3RvbS1jb250cm9sIGN1c3RvbS1zd2l0Y2gnPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjdXN0b20tY29udHJvbC1pbnB1dCdcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J2NoZWNrYm94J1xyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT0nYWN0aWYnXHJcblx0XHRcdFx0XHRcdFx0XHRpZD0nZmxleFN3aXRjaENoZWNrRGVmYXVsdCdcclxuXHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoKX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjdXN0b20tY29udHJvbC1sYWJlbCBwYi0zJ1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yPSdmbGV4U3dpdGNoQ2hlY2tEZWZhdWx0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdEFjdGlmXHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR7c3VjY2VzcyAmJiAoXHJcblx0XHRcdFx0XHQ8QWxlcnQgY29sb3I9J3N1Y2Nlc3MnPlxyXG5cdFx0XHRcdFx0XHRMZSBwYXJ0ZW5haXJlIGEgYmllbiDDqXTDqSBham91dMOpLCByZWRpcmVjdGlvbiBlbiBjb3Vycy4uLlxyXG5cdFx0XHRcdFx0PC9BbGVydD5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHRcdHtsb2FkaW5nICYmIDxTcGlubmVyIC8+fVxyXG5cdFx0XHRcdHtlcnJvciAmJiA8QWxlcnQgY29sb3I9J2Rhbmdlcic+e2Vycm9yfTwvQWxlcnQ+fVxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG4gYnRuLWluZm8nPlxyXG5cdFx0XHRcdFx0XHRDcsOpZXIgY2UgcGFydGVuYWlyZVxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEZvcm1DcmVhdGVQYXJ0ZW5haXJlQ2FyZCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=