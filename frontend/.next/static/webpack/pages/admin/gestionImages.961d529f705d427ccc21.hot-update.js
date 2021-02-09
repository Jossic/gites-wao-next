webpackHotUpdate_N_E("pages/admin/gestionImages",{

/***/ "./components/admin/lists/ListImages.js":
/*!**********************************************!*\
  !*** ./components/admin/lists/ListImages.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config */ "./config.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var _actions_partenairesActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../actions/partenairesActions */ "./actions/partenairesActions.js");



var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\lists\\ListImages.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var ListImages = function ListImages() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      photos = _useState[0],
      setPhotos = _useState[1];

  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_9__["getCookie"])('token');

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      partenaires = _useState2[0],
      setPartenaires = _useState2[1];

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_8__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      control = _useForm.control,
      errors = _useForm.errors;

  var _useFieldArray = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_8__["useFieldArray"])({
    control: control,
    name: 'items'
  }),
      fields = _useFieldArray.fields,
      append = _useFieldArray.append,
      remove = _useFieldArray.remove;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    nom: '',
    alt: '',
    titreCarousel: '',
    texteCarousel: '',
    page: '',
    section: '',
    success: '',
    loading: false,
    error: ''
  }),
      values = _useState3[0],
      setValues = _useState3[1];

  var success = values.success,
      loading = values.loading,
      error = values.error;

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      gites = _useState4[0],
      setGites = _useState4[1];

  var listDesPartenaires = function listDesPartenaires() {
    Object(_actions_partenairesActions__WEBPACK_IMPORTED_MODULE_10__["ListAllPartenairesNoms"])().then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        setPartenaires.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(partenaires).concat([data]));
      }
    });
  };

  var listDesGites = function listDesGites() {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_4__["listGitesNoms"])().then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        setGites.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(gites).concat([data]));
      }
    });
  };

  var listerLesImages = function listerLesImages() {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_4__["listeDesImages"])(token).then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        setPhotos.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(photos).concat([data]));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    listDesGites();
    listerLesImages();
    listDesPartenaires();
  }, []);

  var deleteConfirm = function deleteConfirm(slug) {
    var answer = window.confirm('Cette opération est irréversible, Etes-vous sur de vouloir supprimer cet article ?');

    if (answer) {
      // deleteGite(slug);
      console.log('Suppression');
    }
  };

  var onSubmit = function onSubmit(data) {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      loading: true
    }));
    console.log('data vaut =>', data);
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_4__["saveImageData"])(data, token).then(function (result) {
      console.log('result vaut =>', result);

      if (result.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: result.error
        }));
      } else {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          nom: '',
          alt: '',
          titreCarousel: '',
          texteCarousel: '',
          page: '',
          section: '',
          success: true,
          loading: false
        })); // setTimeout(() => {
        // 	Router.push('/admin/gestionDivers/FAQ');
        // }, 2000);
      }
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 4
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Table"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 6
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 8
    }
  }, "Nom"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 8
    }
  }, "Photo"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 8
    }
  }, "Texte alternatif"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 8
    }
  }, "Titre Carousel"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 8
    }
  }, "Texte Carousel"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 8
    }
  }, "Page concern\xE9e"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 8
    }
  }, "Section concern\xE9"), __jsx("th", {
    colSpan: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 8
    }
  }, "Actions"))), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 6
    }
  }, photos.map(function (photo, index) {
    return __jsx("tr", {
      key: index,
      className: "mt-5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 8
      }
    }, __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }
    }, __jsx("input", {
      className: "form-control",
      type: "text",
      name: "items[".concat(index, "].nom"),
      defaultValue: photo.nom,
      ref: register({
        required: true
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 10
      }
    })), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }
    }, __jsx("img", {
      src: photo.location,
      style: {
        maxHeight: 'auto',
        width: '80px'
      },
      className: "img img-fluid",
      alt: photo.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 10
      }
    })), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }
    }, __jsx("input", {
      className: "form-control",
      type: "text",
      name: "items[".concat(index, "].alt"),
      defaultValue: photo.alt,
      ref: register({
        required: true
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 10
      }
    })), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }
    }, __jsx("input", {
      className: "form-control",
      type: "text",
      name: "items[".concat(index, "].titreCarousel"),
      defaultValue: photo.titreCarousel,
      ref: register({
        required: true
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 10
      }
    })), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }
    }, __jsx("input", {
      className: "form-control",
      type: "text",
      name: "items[".concat(index, "].texteCarousel"),
      defaultValue: photo.texteCarousel,
      ref: register({
        required: true
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 10
      }
    })), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }
    }, __jsx("select", {
      ref: register({
        required: true
      }),
      name: "items[".concat(index, "].page"),
      className: "custom-select mr-sm-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 10
      }
    }, __jsx("option", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 11
      }
    }, "Selection..."), gites.map(function (gite, i) {
      return __jsx("option", {
        key: i,
        value: gite.slug,
        selected: gite.slug === photo.pageAssociee && 'selected',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 12
        }
      }, gite.nom);
    }), __jsx("option", {
      value: "Autre",
      selected: photo.pageAssociee === 'Autre' && 'selected',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 11
      }
    }, "Autres pages"))), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }
    }, __jsx("select", {
      ref: register({
        required: true
      }),
      name: "items[".concat(index, "].section"),
      className: "custom-select mr-sm-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 10
      }
    }, __jsx("option", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 11
      }
    }, "Selection..."), __jsx("option", {
      value: "Autre",
      selected: photo.sectionAssociee === 'Autre' && 'selected',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 11
      }
    }, "Autres sections"), __jsx("option", {
      value: "exterieur",
      selected: photo.sectionAssociee === 'exterieur' && 'selected',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 11
      }
    }, "Ext\xE9rieur"), __jsx("option", {
      value: "piscine",
      selected: photo.sectionAssociee === 'piscine' && 'selected',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 11
      }
    }, "Piscine"), __jsx("option", {
      value: "interieur",
      selected: photo.sectionAssociee === 'interieur' && 'selected',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 11
      }
    }, "Int\xE9rieur"), __jsx("option", {
      value: "avatar",
      selected: photo.sectionAssociee === 'avatar' && 'selected',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 11
      }
    }, "Avatar"), __jsx("option", {
      value: "vignettes",
      selected: photo.sectionAssociee === 'vignettes' && 'selected',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 11
      }
    }, "Vignettes"), __jsx("option", {
      value: "alentours",
      selected: photo.sectionAssociee === 'alentours' && 'selected',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 11
      }
    }, "Alentours"), __jsx("optgroup", {
      label: "Partenaires",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 11
      }
    }, partenaires.map(function (partenaire) {
      return __jsx("option", {
        value: partenaire.slug,
        selected: photo.sectionAssociee === partenaire.slug && 'selected',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 13
        }
      }, partenaire.nom);
    })))), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 9
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/admin/crud/gite/".concat(photo),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 10
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 11
      }
    }, __jsx("i", {
      className: "fas fa-pencil-ruler",
      style: {
        color: 'orange'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 12
      }
    })))), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 9
      }
    }, __jsx("i", {
      onClick: function onClick() {
        return deleteConfirm(photo);
      },
      className: "fas fa-trash-alt",
      style: {
        color: 'red',
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 10
      }
    })));
  }))), success && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    color: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 6
    }
  }, "La/Les image(s) ont bien \xE9t\xE9 modifi\xE9e(s)"), loading && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Spinner"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 17
    }
  }), error && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    color: "danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 15
    }
  }, error), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    color: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 5
    }
  }, "Valider ces infos")));
};

_s(ListImages, "6U6gKjr0QznS982meJ8/SLTPy+A=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_8__["useForm"], react_hook_form__WEBPACK_IMPORTED_MODULE_8__["useFieldArray"]];
});

_c = ListImages;
/* harmony default export */ __webpack_exports__["default"] = (ListImages);

var _c;

$RefreshReg$(_c, "ListImages");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0SW1hZ2VzLmpzIl0sIm5hbWVzIjpbIkxpc3RJbWFnZXMiLCJ1c2VTdGF0ZSIsInBob3RvcyIsInNldFBob3RvcyIsInRva2VuIiwiZ2V0Q29va2llIiwicGFydGVuYWlyZXMiLCJzZXRQYXJ0ZW5haXJlcyIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImNvbnRyb2wiLCJlcnJvcnMiLCJ1c2VGaWVsZEFycmF5IiwibmFtZSIsImZpZWxkcyIsImFwcGVuZCIsInJlbW92ZSIsIm5vbSIsImFsdCIsInRpdHJlQ2Fyb3VzZWwiLCJ0ZXh0ZUNhcm91c2VsIiwicGFnZSIsInNlY3Rpb24iLCJzdWNjZXNzIiwibG9hZGluZyIsImVycm9yIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiZ2l0ZXMiLCJzZXRHaXRlcyIsImxpc3REZXNQYXJ0ZW5haXJlcyIsIkxpc3RBbGxQYXJ0ZW5haXJlc05vbXMiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJsaXN0RGVzR2l0ZXMiLCJsaXN0R2l0ZXNOb21zIiwibGlzdGVyTGVzSW1hZ2VzIiwibGlzdGVEZXNJbWFnZXMiLCJ1c2VFZmZlY3QiLCJkZWxldGVDb25maXJtIiwic2x1ZyIsImFuc3dlciIsIndpbmRvdyIsImNvbmZpcm0iLCJvblN1Ym1pdCIsInNhdmVJbWFnZURhdGEiLCJyZXN1bHQiLCJtYXAiLCJwaG90byIsImluZGV4IiwicmVxdWlyZWQiLCJsb2NhdGlvbiIsIm1heEhlaWdodCIsIndpZHRoIiwiZ2l0ZSIsImkiLCJwYWdlQXNzb2NpZWUiLCJzZWN0aW9uQXNzb2NpZWUiLCJwYXJ0ZW5haXJlIiwiY29sb3IiLCJjdXJzb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQSxrQkFDSUMsc0RBQVEsQ0FBQyxFQUFELENBRFo7QUFBQSxNQUNqQkMsTUFEaUI7QUFBQSxNQUNUQyxTQURTOztBQUV4QixNQUFNQyxLQUFLLEdBQUdDLHNFQUFTLENBQUMsT0FBRCxDQUF2Qjs7QUFGd0IsbUJBR2NKLHNEQUFRLENBQUMsRUFBRCxDQUh0QjtBQUFBLE1BR2pCSyxXQUhpQjtBQUFBLE1BR0pDLGNBSEk7O0FBQUEsaUJBSTRCQywrREFBTyxFQUpuQztBQUFBLE1BSWhCQyxRQUpnQixZQUloQkEsUUFKZ0I7QUFBQSxNQUlOQyxZQUpNLFlBSU5BLFlBSk07QUFBQSxNQUlRQyxPQUpSLFlBSVFBLE9BSlI7QUFBQSxNQUlpQkMsTUFKakIsWUFJaUJBLE1BSmpCOztBQUFBLHVCQUtXQyxxRUFBYSxDQUFDO0FBQ2hERixXQUFPLEVBQVBBLE9BRGdEO0FBRWhERyxRQUFJLEVBQUU7QUFGMEMsR0FBRCxDQUx4QjtBQUFBLE1BS2hCQyxNQUxnQixrQkFLaEJBLE1BTGdCO0FBQUEsTUFLUkMsTUFMUSxrQkFLUkEsTUFMUTtBQUFBLE1BS0FDLE1BTEEsa0JBS0FBLE1BTEE7O0FBQUEsbUJBVUloQixzREFBUSxDQUFDO0FBQ3BDaUIsT0FBRyxFQUFFLEVBRCtCO0FBRXBDQyxPQUFHLEVBQUUsRUFGK0I7QUFHcENDLGlCQUFhLEVBQUUsRUFIcUI7QUFJcENDLGlCQUFhLEVBQUUsRUFKcUI7QUFLcENDLFFBQUksRUFBRSxFQUw4QjtBQU1wQ0MsV0FBTyxFQUFFLEVBTjJCO0FBT3BDQyxXQUFPLEVBQUUsRUFQMkI7QUFRcENDLFdBQU8sRUFBRSxLQVIyQjtBQVNwQ0MsU0FBSyxFQUFFO0FBVDZCLEdBQUQsQ0FWWjtBQUFBLE1BVWpCQyxNQVZpQjtBQUFBLE1BVVRDLFNBVlM7O0FBQUEsTUFxQmhCSixPQXJCZ0IsR0FxQllHLE1BckJaLENBcUJoQkgsT0FyQmdCO0FBQUEsTUFxQlBDLE9BckJPLEdBcUJZRSxNQXJCWixDQXFCUEYsT0FyQk87QUFBQSxNQXFCRUMsS0FyQkYsR0FxQllDLE1BckJaLENBcUJFRCxLQXJCRjs7QUFBQSxtQkF1QkV6QixzREFBUSxDQUFDLEVBQUQsQ0F2QlY7QUFBQSxNQXVCakI0QixLQXZCaUI7QUFBQSxNQXVCVkMsUUF2QlU7O0FBeUJ4QixNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDaENDLCtGQUFzQixHQUFHQyxJQUF6QixDQUE4QixVQUFDQyxJQUFELEVBQVU7QUFDdkMsVUFBSUEsSUFBSSxDQUFDUixLQUFULEVBQWdCO0FBQ2ZTLGVBQU8sQ0FBQ0MsR0FBUixDQUFZVixLQUFaO0FBQ0EsT0FGRCxNQUVPO0FBQ05uQixzQkFBYyxNQUFkLHNHQUFrQkQsV0FBbEIsVUFBK0I0QixJQUEvQjtBQUNBO0FBQ0QsS0FORDtBQU9BLEdBUkQ7O0FBVUEsTUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUMxQkMsOEVBQWEsR0FBR0wsSUFBaEIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFVO0FBQzlCLFVBQUlBLElBQUksQ0FBQ1IsS0FBVCxFQUFnQjtBQUNmUyxlQUFPLENBQUNDLEdBQVIsQ0FBWVYsS0FBWjtBQUNBLE9BRkQsTUFFTztBQUNOSSxnQkFBUSxNQUFSLHNHQUFZRCxLQUFaLFVBQW1CSyxJQUFuQjtBQUNBO0FBQ0QsS0FORDtBQU9BLEdBUkQ7O0FBVUEsTUFBTUssZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzdCQywrRUFBYyxDQUFDcEMsS0FBRCxDQUFkLENBQXNCNkIsSUFBdEIsQ0FBMkIsVUFBQ0MsSUFBRCxFQUFVO0FBQ3BDLFVBQUlBLElBQUksQ0FBQ1IsS0FBVCxFQUFnQjtBQUNmUyxlQUFPLENBQUNDLEdBQVIsQ0FBWVYsS0FBWjtBQUNBLE9BRkQsTUFFTztBQUNOdkIsaUJBQVMsTUFBVCxzR0FBYUQsTUFBYixVQUFxQmdDLElBQXJCO0FBQ0E7QUFDRCxLQU5EO0FBT0EsR0FSRDs7QUFVQU8seURBQVMsQ0FBQyxZQUFNO0FBQ2ZKLGdCQUFZO0FBQ1pFLG1CQUFlO0FBQ2ZSLHNCQUFrQjtBQUNsQixHQUpRLEVBSU4sRUFKTSxDQUFUOztBQU1BLE1BQU1XLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsSUFBRCxFQUFVO0FBQy9CLFFBQUlDLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxPQUFQLENBQ1osb0ZBRFksQ0FBYjs7QUFHQSxRQUFJRixNQUFKLEVBQVk7QUFDWDtBQUNBVCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0E7QUFDRCxHQVJEOztBQVNBLE1BQU1XLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNiLElBQUQsRUFBVTtBQUMxQk4sYUFBUyxpQ0FBTUQsTUFBTjtBQUFjRixhQUFPLEVBQUU7QUFBdkIsT0FBVDtBQUNBVSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCRixJQUE1QjtBQUVBYyw4RUFBYSxDQUFDZCxJQUFELEVBQU85QixLQUFQLENBQWIsQ0FBMkI2QixJQUEzQixDQUFnQyxVQUFDZ0IsTUFBRCxFQUFZO0FBQzNDZCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QmEsTUFBOUI7O0FBQ0EsVUFBSUEsTUFBTSxDQUFDdkIsS0FBWCxFQUFrQjtBQUNqQkUsaUJBQVMsaUNBQU1ELE1BQU47QUFBY0QsZUFBSyxFQUFFdUIsTUFBTSxDQUFDdkI7QUFBNUIsV0FBVDtBQUNBLE9BRkQsTUFFTztBQUNORSxpQkFBUyxpQ0FDTEQsTUFESztBQUVSVCxhQUFHLEVBQUUsRUFGRztBQUdSQyxhQUFHLEVBQUUsRUFIRztBQUlSQyx1QkFBYSxFQUFFLEVBSlA7QUFLUkMsdUJBQWEsRUFBRSxFQUxQO0FBTVJDLGNBQUksRUFBRSxFQU5FO0FBT1JDLGlCQUFPLEVBQUUsRUFQRDtBQVFSQyxpQkFBTyxFQUFFLElBUkQ7QUFTUkMsaUJBQU8sRUFBRTtBQVRELFdBQVQsQ0FETSxDQVlOO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsS0FwQkQ7QUFxQkEsR0F6QkQ7O0FBMkJBLFNBQ0MsbUVBQ0M7QUFBTSxZQUFRLEVBQUVmLFlBQVksQ0FBQ3FDLFFBQUQsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURELEVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZELEVBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFIRCxFQUlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkQsRUFLQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxELEVBTUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFORCxFQU9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBUEQsRUFRQztBQUFJLFdBQU8sRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRCxDQURELENBREQsRUFhQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U3QyxNQUFNLENBQUNnRCxHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsV0FDWDtBQUFJLFNBQUcsRUFBRUEsS0FBVDtBQUFnQixlQUFTLEVBQUMsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQztBQUNDLGVBQVMsRUFBQyxjQURYO0FBRUMsVUFBSSxFQUFDLE1BRk47QUFHQyxVQUFJLGtCQUFXQSxLQUFYLFVBSEw7QUFJQyxrQkFBWSxFQUFFRCxLQUFLLENBQUNqQyxHQUpyQjtBQUtDLFNBQUcsRUFBRVQsUUFBUSxDQUFDO0FBQUU0QyxnQkFBUSxFQUFFO0FBQVosT0FBRCxDQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERCxDQURELEVBVUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDO0FBQ0MsU0FBRyxFQUFFRixLQUFLLENBQUNHLFFBRFo7QUFFQyxXQUFLLEVBQUU7QUFDTkMsaUJBQVMsRUFBRSxNQURMO0FBRU5DLGFBQUssRUFBRTtBQUZELE9BRlI7QUFNQyxlQUFTLEVBQUMsZUFOWDtBQU9DLFNBQUcsRUFBRUwsS0FBSyxDQUFDckMsSUFQWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREQsQ0FWRCxFQXFCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFDQyxlQUFTLEVBQUMsY0FEWDtBQUVDLFVBQUksRUFBQyxNQUZOO0FBR0MsVUFBSSxrQkFBV3NDLEtBQVgsVUFITDtBQUlDLGtCQUFZLEVBQUVELEtBQUssQ0FBQ2hDLEdBSnJCO0FBS0MsU0FBRyxFQUFFVixRQUFRLENBQUM7QUFBRTRDLGdCQUFRLEVBQUU7QUFBWixPQUFELENBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURELENBckJELEVBOEJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQztBQUNDLGVBQVMsRUFBQyxjQURYO0FBRUMsVUFBSSxFQUFDLE1BRk47QUFHQyxVQUFJLGtCQUFXRCxLQUFYLG9CQUhMO0FBSUMsa0JBQVksRUFBRUQsS0FBSyxDQUFDL0IsYUFKckI7QUFLQyxTQUFHLEVBQUVYLFFBQVEsQ0FBQztBQUFFNEMsZ0JBQVEsRUFBRTtBQUFaLE9BQUQsQ0FMZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREQsQ0E5QkQsRUF1Q0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDO0FBQ0MsZUFBUyxFQUFDLGNBRFg7QUFFQyxVQUFJLEVBQUMsTUFGTjtBQUdDLFVBQUksa0JBQVdELEtBQVgsb0JBSEw7QUFJQyxrQkFBWSxFQUFFRCxLQUFLLENBQUM5QixhQUpyQjtBQUtDLFNBQUcsRUFBRVosUUFBUSxDQUFDO0FBQUU0QyxnQkFBUSxFQUFFO0FBQVosT0FBRCxDQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERCxDQXZDRCxFQWdEQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFDQyxTQUFHLEVBQUU1QyxRQUFRLENBQUM7QUFBRTRDLGdCQUFRLEVBQUU7QUFBWixPQUFELENBRGQ7QUFFQyxVQUFJLGtCQUFXRCxLQUFYLFdBRkw7QUFHQyxlQUFTLEVBQUMsdUJBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkQsRUFLRXZCLEtBQUssQ0FBQ3FCLEdBQU4sQ0FBVSxVQUFDTyxJQUFELEVBQU9DLENBQVA7QUFBQSxhQUNWO0FBQ0MsV0FBRyxFQUFFQSxDQUROO0FBRUMsYUFBSyxFQUFFRCxJQUFJLENBQUNkLElBRmI7QUFHQyxnQkFBUSxFQUNQYyxJQUFJLENBQUNkLElBQUwsS0FDQ1EsS0FBSyxDQUFDUSxZQURQLElBRUEsVUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBUUVGLElBQUksQ0FBQ3ZDLEdBUlAsQ0FEVTtBQUFBLEtBQVYsQ0FMRixFQWlCQztBQUNDLFdBQUssRUFBQyxPQURQO0FBRUMsY0FBUSxFQUNQaUMsS0FBSyxDQUFDUSxZQUFOLEtBQ0MsT0FERCxJQUNZLFVBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFqQkQsQ0FERCxDQWhERCxFQTRFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFDQyxTQUFHLEVBQUVsRCxRQUFRLENBQUM7QUFBRTRDLGdCQUFRLEVBQUU7QUFBWixPQUFELENBRGQ7QUFFQyxVQUFJLGtCQUFXRCxLQUFYLGNBRkw7QUFHQyxlQUFTLEVBQUMsdUJBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkQsRUFLQztBQUNDLFdBQUssRUFBQyxPQURQO0FBRUMsY0FBUSxFQUNQRCxLQUFLLENBQUNTLGVBQU4sS0FDQyxPQURELElBQ1ksVUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxELEVBYUM7QUFDQyxXQUFLLEVBQUMsV0FEUDtBQUVDLGNBQVEsRUFDUFQsS0FBSyxDQUFDUyxlQUFOLEtBQ0MsV0FERCxJQUNnQixVQUpsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWJELEVBcUJDO0FBQ0MsV0FBSyxFQUFDLFNBRFA7QUFFQyxjQUFRLEVBQ1BULEtBQUssQ0FBQ1MsZUFBTixLQUNDLFNBREQsSUFDYyxVQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJCRCxFQTZCQztBQUNDLFdBQUssRUFBQyxXQURQO0FBRUMsY0FBUSxFQUNQVCxLQUFLLENBQUNTLGVBQU4sS0FDQyxXQURELElBQ2dCLFVBSmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBN0JELEVBcUNDO0FBQ0MsV0FBSyxFQUFDLFFBRFA7QUFFQyxjQUFRLEVBQ1BULEtBQUssQ0FBQ1MsZUFBTixLQUNDLFFBREQsSUFDYSxVQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckNELEVBNkNDO0FBQ0MsV0FBSyxFQUFDLFdBRFA7QUFFQyxjQUFRLEVBQ1BULEtBQUssQ0FBQ1MsZUFBTixLQUNDLFdBREQsSUFDZ0IsVUFKbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE3Q0QsRUFxREM7QUFDQyxXQUFLLEVBQUMsV0FEUDtBQUVDLGNBQVEsRUFDUFQsS0FBSyxDQUFDUyxlQUFOLEtBQ0MsV0FERCxJQUNnQixVQUpsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXJERCxFQTZEQztBQUFVLFdBQUssRUFBQyxhQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0V0RCxXQUFXLENBQUM0QyxHQUFaLENBQWdCLFVBQUNXLFVBQUQ7QUFBQSxhQUNoQjtBQUNDLGFBQUssRUFBRUEsVUFBVSxDQUFDbEIsSUFEbkI7QUFFQyxnQkFBUSxFQUNQUSxLQUFLLENBQUNTLGVBQU4sS0FDQ0MsVUFBVSxDQUFDbEIsSUFEWixJQUVBLFVBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU9Fa0IsVUFBVSxDQUFDM0MsR0FQYixDQURnQjtBQUFBLEtBQWhCLENBREYsQ0E3REQsQ0FERCxDQTVFRCxFQXlKQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0MsTUFBQyxnREFBRDtBQUFNLFVBQUksNkJBQXNCaUMsS0FBdEIsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDO0FBQ0MsZUFBUyxFQUFDLHFCQURYO0FBRUMsV0FBSyxFQUFFO0FBQUVXLGFBQUssRUFBRTtBQUFULE9BRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURELENBREQsQ0FERCxDQXpKRCxFQWtLQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFDQyxhQUFPLEVBQUU7QUFBQSxlQUFNcEIsYUFBYSxDQUFDUyxLQUFELENBQW5CO0FBQUEsT0FEVjtBQUVDLGVBQVMsRUFBQyxrQkFGWDtBQUdDLFdBQUssRUFBRTtBQUNOVyxhQUFLLEVBQUUsS0FERDtBQUVOQyxjQUFNLEVBQUU7QUFGRixPQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERCxDQWxLRCxDQURXO0FBQUEsR0FBWCxDQURGLENBYkQsQ0FERCxFQStMRXZDLE9BQU8sSUFDUCxNQUFDLGdEQUFEO0FBQU8sU0FBSyxFQUFDLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5REFoTUYsRUFvTUVDLE9BQU8sSUFBSSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwTWIsRUFxTUVDLEtBQUssSUFBSSxNQUFDLGdEQUFEO0FBQU8sU0FBSyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1QkEsS0FBdkIsQ0FyTVgsRUFzTUMsTUFBQyxpREFBRDtBQUFRLFNBQUssRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBdE1ELENBREQsQ0FERDtBQTRNQSxDQTdTRDs7R0FBTTFCLFU7VUFJK0NRLHVELEVBQ2pCSyw2RDs7O0tBTDlCYixVO0FBK1NTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9nZXN0aW9uSW1hZ2VzLjk2MWQ1MjlmNzA1ZDQyN2NjYzIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWJsZSwgQnV0dG9uLCBTcGlubmVyLCBBbGVydCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQge1xyXG5cdGxpc3RlRGVzSW1hZ2VzLFxyXG5cdGxpc3RHaXRlc05vbXMsXHJcblx0c2F2ZUltYWdlRGF0YSxcclxufSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnO1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlRmllbGRBcnJheSwgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgeyBMaXN0QWxsUGFydGVuYWlyZXNOb21zIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9wYXJ0ZW5haXJlc0FjdGlvbnMnO1xyXG5cclxuY29uc3QgTGlzdEltYWdlcyA9ICgpID0+IHtcclxuXHRjb25zdCBbcGhvdG9zLCBzZXRQaG90b3NdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cdGNvbnN0IFtwYXJ0ZW5haXJlcywgc2V0UGFydGVuYWlyZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgY29udHJvbCwgZXJyb3JzIH0gPSB1c2VGb3JtKCk7XHJcblx0Y29uc3QgeyBmaWVsZHMsIGFwcGVuZCwgcmVtb3ZlIH0gPSB1c2VGaWVsZEFycmF5KHtcclxuXHRcdGNvbnRyb2wsXHJcblx0XHRuYW1lOiAnaXRlbXMnLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0bm9tOiAnJyxcclxuXHRcdGFsdDogJycsXHJcblx0XHR0aXRyZUNhcm91c2VsOiAnJyxcclxuXHRcdHRleHRlQ2Fyb3VzZWw6ICcnLFxyXG5cdFx0cGFnZTogJycsXHJcblx0XHRzZWN0aW9uOiAnJyxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRlcnJvcjogJycsXHJcblx0fSk7XHJcblx0Y29uc3QgeyBzdWNjZXNzLCBsb2FkaW5nLCBlcnJvciB9ID0gdmFsdWVzO1xyXG5cclxuXHRjb25zdCBbZ2l0ZXMsIHNldEdpdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgbGlzdERlc1BhcnRlbmFpcmVzID0gKCkgPT4ge1xyXG5cdFx0TGlzdEFsbFBhcnRlbmFpcmVzTm9tcygpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0UGFydGVuYWlyZXMoLi4ucGFydGVuYWlyZXMsIGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBsaXN0RGVzR2l0ZXMgPSAoKSA9PiB7XHJcblx0XHRsaXN0R2l0ZXNOb21zKCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRHaXRlcyguLi5naXRlcywgZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGxpc3Rlckxlc0ltYWdlcyA9ICgpID0+IHtcclxuXHRcdGxpc3RlRGVzSW1hZ2VzKHRva2VuKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFBob3RvcyguLi5waG90b3MsIGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGlzdERlc0dpdGVzKCk7XHJcblx0XHRsaXN0ZXJMZXNJbWFnZXMoKTtcclxuXHRcdGxpc3REZXNQYXJ0ZW5haXJlcygpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc3QgZGVsZXRlQ29uZmlybSA9IChzbHVnKSA9PiB7XHJcblx0XHRsZXQgYW5zd2VyID0gd2luZG93LmNvbmZpcm0oXHJcblx0XHRcdCdDZXR0ZSBvcMOpcmF0aW9uIGVzdCBpcnLDqXZlcnNpYmxlLCBFdGVzLXZvdXMgc3VyIGRlIHZvdWxvaXIgc3VwcHJpbWVyIGNldCBhcnRpY2xlID8nXHJcblx0XHQpO1xyXG5cdFx0aWYgKGFuc3dlcikge1xyXG5cdFx0XHQvLyBkZWxldGVHaXRlKHNsdWcpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnU3VwcHJlc3Npb24nKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IHtcclxuXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHRcdGNvbnNvbGUubG9nKCdkYXRhIHZhdXQgPT4nLCBkYXRhKTtcclxuXHJcblx0XHRzYXZlSW1hZ2VEYXRhKGRhdGEsIHRva2VuKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3Jlc3VsdCB2YXV0ID0+JywgcmVzdWx0KTtcclxuXHRcdFx0aWYgKHJlc3VsdC5lcnJvcikge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IHJlc3VsdC5lcnJvciB9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0bm9tOiAnJyxcclxuXHRcdFx0XHRcdGFsdDogJycsXHJcblx0XHRcdFx0XHR0aXRyZUNhcm91c2VsOiAnJyxcclxuXHRcdFx0XHRcdHRleHRlQ2Fyb3VzZWw6ICcnLFxyXG5cdFx0XHRcdFx0cGFnZTogJycsXHJcblx0XHRcdFx0XHRzZWN0aW9uOiAnJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IHRydWUsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHQvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHQvLyBcdFJvdXRlci5wdXNoKCcvYWRtaW4vZ2VzdGlvbkRpdmVycy9GQVEnKTtcclxuXHRcdFx0XHQvLyB9LCAyMDAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuXHRcdFx0XHQ8VGFibGU+XHJcblx0XHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+Tm9tPC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+UGhvdG88L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD5UZXh0ZSBhbHRlcm5hdGlmPC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+VGl0cmUgQ2Fyb3VzZWw8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD5UZXh0ZSBDYXJvdXNlbDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPlBhZ2UgY29uY2VybsOpZTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPlNlY3Rpb24gY29uY2VybsOpPC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGggY29sU3Bhbj0nMic+QWN0aW9uczwvdGg+XHJcblx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0XHR7cGhvdG9zLm1hcCgocGhvdG8sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PHRyIGtleT17aW5kZXh9IGNsYXNzTmFtZT0nbXQtNSc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT17YGl0ZW1zWyR7aW5kZXh9XS5ub21gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17cGhvdG8ubm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e3Bob3RvLmxvY2F0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXhIZWlnaHQ6ICdhdXRvJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAnODBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ltZyBpbWctZmx1aWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PXtwaG90by5uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPXtgaXRlbXNbJHtpbmRleH1dLmFsdGB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtwaG90by5hbHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPXtgaXRlbXNbJHtpbmRleH1dLnRpdHJlQ2Fyb3VzZWxgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17cGhvdG8udGl0cmVDYXJvdXNlbH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9e2BpdGVtc1ske2luZGV4fV0udGV4dGVDYXJvdXNlbGB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtwaG90by50ZXh0ZUNhcm91c2VsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3RcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT17YGl0ZW1zWyR7aW5kZXh9XS5wYWdlYH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2N1c3RvbS1zZWxlY3QgbXItc20tMic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbj5TZWxlY3Rpb24uLi48L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Z2l0ZXMubWFwKChnaXRlLCBpKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17aX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2dpdGUuc2x1Z31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0ZWQ9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuc2x1ZyA9PT1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBob3RvLnBhZ2VBc3NvY2llZSAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdzZWxlY3RlZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2dpdGUubm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9J0F1dHJlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0ZWQ9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwaG90by5wYWdlQXNzb2NpZWUgPT09XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J0F1dHJlJyAmJiAnc2VsZWN0ZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QXV0cmVzIHBhZ2VzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPXtgaXRlbXNbJHtpbmRleH1dLnNlY3Rpb25gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY3VzdG9tLXNlbGVjdCBtci1zbS0yJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uPlNlbGVjdGlvbi4uLjwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPSdBdXRyZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdGVkPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGhvdG8uc2VjdGlvbkFzc29jaWVlID09PVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdBdXRyZScgJiYgJ3NlbGVjdGVkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEF1dHJlcyBzZWN0aW9uc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPSdleHRlcmlldXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RlZD17XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBob3RvLnNlY3Rpb25Bc3NvY2llZSA9PT1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnZXh0ZXJpZXVyJyAmJiAnc2VsZWN0ZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0RXh0w6lyaWV1clxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPSdwaXNjaW5lJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0ZWQ9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwaG90by5zZWN0aW9uQXNzb2NpZWUgPT09XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3Bpc2NpbmUnICYmICdzZWxlY3RlZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRQaXNjaW5lXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9J2ludGVyaWV1cidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdGVkPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGhvdG8uc2VjdGlvbkFzc29jaWVlID09PVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdpbnRlcmlldXInICYmICdzZWxlY3RlZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRJbnTDqXJpZXVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9J2F2YXRhcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdGVkPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGhvdG8uc2VjdGlvbkFzc29jaWVlID09PVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdhdmF0YXInICYmICdzZWxlY3RlZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBdmF0YXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT0ndmlnbmV0dGVzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0ZWQ9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwaG90by5zZWN0aW9uQXNzb2NpZWUgPT09XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3ZpZ25ldHRlcycgJiYgJ3NlbGVjdGVkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFZpZ25ldHRlc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPSdhbGVudG91cnMnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RlZD17XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBob3RvLnNlY3Rpb25Bc3NvY2llZSA9PT1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnYWxlbnRvdXJzJyAmJiAnc2VsZWN0ZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QWxlbnRvdXJzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGdyb3VwIGxhYmVsPSdQYXJ0ZW5haXJlcyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cGFydGVuYWlyZXMubWFwKChwYXJ0ZW5haXJlKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17cGFydGVuYWlyZS5zbHVnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdGVkPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBob3RvLnNlY3Rpb25Bc3NvY2llZSA9PT1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFydGVuYWlyZS5zbHVnICYmXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnc2VsZWN0ZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cGFydGVuYWlyZS5ub219XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRncm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgL2FkbWluL2NydWQvZ2l0ZS8ke3Bob3RvfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmYXMgZmEtcGVuY2lsLXJ1bGVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogJ29yYW5nZScgfX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBkZWxldGVDb25maXJtKHBob3RvKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZhcyBmYS10cmFzaC1hbHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAncmVkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnNvcjogJ3BvaW50ZXInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHRcdDwvVGFibGU+XHJcblx0XHRcdFx0e3N1Y2Nlc3MgJiYgKFxyXG5cdFx0XHRcdFx0PEFsZXJ0IGNvbG9yPSdzdWNjZXNzJz5cclxuXHRcdFx0XHRcdFx0TGEvTGVzIGltYWdlKHMpIG9udCBiaWVuIMOpdMOpIG1vZGlmacOpZShzKVxyXG5cdFx0XHRcdFx0PC9BbGVydD5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHRcdHtsb2FkaW5nICYmIDxTcGlubmVyIC8+fVxyXG5cdFx0XHRcdHtlcnJvciAmJiA8QWxlcnQgY29sb3I9J2Rhbmdlcic+e2Vycm9yfTwvQWxlcnQ+fVxyXG5cdFx0XHRcdDxCdXR0b24gY29sb3I9J3N1Y2Nlc3MnPlZhbGlkZXIgY2VzIGluZm9zPC9CdXR0b24+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0SW1hZ2VzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9