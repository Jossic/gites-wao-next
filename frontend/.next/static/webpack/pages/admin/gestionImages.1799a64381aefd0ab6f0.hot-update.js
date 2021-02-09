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
    }, "Selection..."), __jsx("optgroup", {
      label: "Gites",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 11
      }
    }, __jsx("option", {
      value: "exterieur",
      selected: photo.sectionAssociee === 'exterieur' && 'selected',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 12
      }
    }, "Ext\xE9rieur"), __jsx("option", {
      value: "piscine",
      selected: photo.sectionAssociee === 'piscine' && 'selected',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 12
      }
    }, "Piscine"), __jsx("option", {
      value: "interieur",
      selected: photo.sectionAssociee === 'interieur' && 'selected',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 12
      }
    }, "Int\xE9rieur")), __jsx("optgroup", {
      label: "Divers",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 11
      }
    }, __jsx("option", {
      value: "Autre",
      selected: photo.sectionAssociee === 'Autre' && 'selected',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 12
      }
    }, "Autres sections"), __jsx("option", {
      value: "avatar",
      selected: photo.sectionAssociee === 'avatar' && 'selected',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 12
      }
    }, "Avatar"), __jsx("option", {
      value: "vignettes",
      selected: photo.sectionAssociee === 'vignettes' && 'selected',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 12
      }
    }, "Vignettes"), __jsx("option", {
      value: "alentours",
      selected: photo.sectionAssociee === 'alentours' && 'selected',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 12
      }
    }, "Alentours")), __jsx("optgroup", {
      label: "Partenaires",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 11
      }
    }, partenaires.map(function (partenaire) {
      return __jsx("option", {
        value: partenaire.slug,
        selected: photo.sectionAssociee === partenaire.slug && 'selected',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 13
        }
      }, partenaire.nom);
    })))), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 9
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/admin/crud/gite/".concat(photo),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 10
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
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
        lineNumber: 296,
        columnNumber: 12
      }
    })))), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
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
        lineNumber: 303,
        columnNumber: 10
      }
    })));
  }))), success && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    color: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 6
    }
  }, "La/Les image(s) ont bien \xE9t\xE9 modifi\xE9e(s)"), loading && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Spinner"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 17
    }
  }), error && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    color: "danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 15
    }
  }, error), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    color: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0SW1hZ2VzLmpzIl0sIm5hbWVzIjpbIkxpc3RJbWFnZXMiLCJ1c2VTdGF0ZSIsInBob3RvcyIsInNldFBob3RvcyIsInRva2VuIiwiZ2V0Q29va2llIiwicGFydGVuYWlyZXMiLCJzZXRQYXJ0ZW5haXJlcyIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImNvbnRyb2wiLCJlcnJvcnMiLCJ1c2VGaWVsZEFycmF5IiwibmFtZSIsImZpZWxkcyIsImFwcGVuZCIsInJlbW92ZSIsIm5vbSIsImFsdCIsInRpdHJlQ2Fyb3VzZWwiLCJ0ZXh0ZUNhcm91c2VsIiwicGFnZSIsInNlY3Rpb24iLCJzdWNjZXNzIiwibG9hZGluZyIsImVycm9yIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiZ2l0ZXMiLCJzZXRHaXRlcyIsImxpc3REZXNQYXJ0ZW5haXJlcyIsIkxpc3RBbGxQYXJ0ZW5haXJlc05vbXMiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJsaXN0RGVzR2l0ZXMiLCJsaXN0R2l0ZXNOb21zIiwibGlzdGVyTGVzSW1hZ2VzIiwibGlzdGVEZXNJbWFnZXMiLCJ1c2VFZmZlY3QiLCJkZWxldGVDb25maXJtIiwic2x1ZyIsImFuc3dlciIsIndpbmRvdyIsImNvbmZpcm0iLCJvblN1Ym1pdCIsInNhdmVJbWFnZURhdGEiLCJyZXN1bHQiLCJtYXAiLCJwaG90byIsImluZGV4IiwicmVxdWlyZWQiLCJsb2NhdGlvbiIsIm1heEhlaWdodCIsIndpZHRoIiwiZ2l0ZSIsImkiLCJwYWdlQXNzb2NpZWUiLCJzZWN0aW9uQXNzb2NpZWUiLCJwYXJ0ZW5haXJlIiwiY29sb3IiLCJjdXJzb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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LGVBQU1wQixhQUFhLENBQUNTLEtBQUQsQ0FBbkI7QUFBQSxPQURWO0FBRUMsZUFBUyxFQUFDLGtCQUZYO0FBR0MsV0FBSyxFQUFFO0FBQ05XLGFBQUssRUFBRSxLQUREO0FBRU5DLGNBQU0sRUFBRTtBQUZGLE9BSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURELENBM0tELENBRFc7QUFBQSxHQUFYLENBREYsQ0FiRCxDQURELEVBd01FdkMsT0FBTyxJQUNQLE1BQUMsZ0RBQUQ7QUFBTyxTQUFLLEVBQUMsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlEQXpNRixFQTZNRUMsT0FBTyxJQUFJLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTdNYixFQThNRUMsS0FBSyxJQUFJLE1BQUMsZ0RBQUQ7QUFBTyxTQUFLLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVCQSxLQUF2QixDQTlNWCxFQStNQyxNQUFDLGlEQUFEO0FBQVEsU0FBSyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkEvTUQsQ0FERCxDQUREO0FBcU5BLENBdFREOztHQUFNMUIsVTtVQUkrQ1EsdUQsRUFDakJLLDZEOzs7S0FMOUJiLFU7QUF3VFNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2dlc3Rpb25JbWFnZXMuMTc5OWE2NDM4MWFlZmQwYWI2ZjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYmxlLCBCdXR0b24sIFNwaW5uZXIsIEFsZXJ0IH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7XHJcblx0bGlzdGVEZXNJbWFnZXMsXHJcblx0bGlzdEdpdGVzTm9tcyxcclxuXHRzYXZlSW1hZ2VEYXRhLFxyXG59IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VGaWVsZEFycmF5LCB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IExpc3RBbGxQYXJ0ZW5haXJlc05vbXMgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL3BhcnRlbmFpcmVzQWN0aW9ucyc7XHJcblxyXG5jb25zdCBMaXN0SW1hZ2VzID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtwaG90b3MsIHNldFBob3Rvc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblx0Y29uc3QgW3BhcnRlbmFpcmVzLCBzZXRQYXJ0ZW5haXJlc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBjb250cm9sLCBlcnJvcnMgfSA9IHVzZUZvcm0oKTtcclxuXHRjb25zdCB7IGZpZWxkcywgYXBwZW5kLCByZW1vdmUgfSA9IHVzZUZpZWxkQXJyYXkoe1xyXG5cdFx0Y29udHJvbCxcclxuXHRcdG5hbWU6ICdpdGVtcycsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRub206ICcnLFxyXG5cdFx0YWx0OiAnJyxcclxuXHRcdHRpdHJlQ2Fyb3VzZWw6ICcnLFxyXG5cdFx0dGV4dGVDYXJvdXNlbDogJycsXHJcblx0XHRwYWdlOiAnJyxcclxuXHRcdHNlY3Rpb246ICcnLFxyXG5cdFx0c3VjY2VzczogJycsXHJcblx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdGVycm9yOiAnJyxcclxuXHR9KTtcclxuXHRjb25zdCB7IHN1Y2Nlc3MsIGxvYWRpbmcsIGVycm9yIH0gPSB2YWx1ZXM7XHJcblxyXG5cdGNvbnN0IFtnaXRlcywgc2V0R2l0ZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHRjb25zdCBsaXN0RGVzUGFydGVuYWlyZXMgPSAoKSA9PiB7XHJcblx0XHRMaXN0QWxsUGFydGVuYWlyZXNOb21zKCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRQYXJ0ZW5haXJlcyguLi5wYXJ0ZW5haXJlcywgZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGxpc3REZXNHaXRlcyA9ICgpID0+IHtcclxuXHRcdGxpc3RHaXRlc05vbXMoKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldEdpdGVzKC4uLmdpdGVzLCBkYXRhKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbGlzdGVyTGVzSW1hZ2VzID0gKCkgPT4ge1xyXG5cdFx0bGlzdGVEZXNJbWFnZXModG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0UGhvdG9zKC4uLnBob3RvcywgZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsaXN0RGVzR2l0ZXMoKTtcclxuXHRcdGxpc3Rlckxlc0ltYWdlcygpO1xyXG5cdFx0bGlzdERlc1BhcnRlbmFpcmVzKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCBkZWxldGVDb25maXJtID0gKHNsdWcpID0+IHtcclxuXHRcdGxldCBhbnN3ZXIgPSB3aW5kb3cuY29uZmlybShcclxuXHRcdFx0J0NldHRlIG9ww6lyYXRpb24gZXN0IGlycsOpdmVyc2libGUsIEV0ZXMtdm91cyBzdXIgZGUgdm91bG9pciBzdXBwcmltZXIgY2V0IGFydGljbGUgPydcclxuXHRcdCk7XHJcblx0XHRpZiAoYW5zd2VyKSB7XHJcblx0XHRcdC8vIGRlbGV0ZUdpdGUoc2x1Zyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdTdXBwcmVzc2lvbicpO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0Y29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4ge1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdFx0Y29uc29sZS5sb2coJ2RhdGEgdmF1dCA9PicsIGRhdGEpO1xyXG5cclxuXHRcdHNhdmVJbWFnZURhdGEoZGF0YSwgdG9rZW4pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygncmVzdWx0IHZhdXQgPT4nLCByZXN1bHQpO1xyXG5cdFx0XHRpZiAocmVzdWx0LmVycm9yKSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogcmVzdWx0LmVycm9yIH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRub206ICcnLFxyXG5cdFx0XHRcdFx0YWx0OiAnJyxcclxuXHRcdFx0XHRcdHRpdHJlQ2Fyb3VzZWw6ICcnLFxyXG5cdFx0XHRcdFx0dGV4dGVDYXJvdXNlbDogJycsXHJcblx0XHRcdFx0XHRwYWdlOiAnJyxcclxuXHRcdFx0XHRcdHNlY3Rpb246ICcnLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdC8vIFx0Um91dGVyLnB1c2goJy9hZG1pbi9nZXN0aW9uRGl2ZXJzL0ZBUScpO1xyXG5cdFx0XHRcdC8vIH0sIDIwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG5cdFx0XHRcdDxUYWJsZT5cclxuXHRcdFx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD5Ob208L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD5QaG90bzwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPlRleHRlIGFsdGVybmF0aWY8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD5UaXRyZSBDYXJvdXNlbDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPlRleHRlIENhcm91c2VsPC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+UGFnZSBjb25jZXJuw6llPC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+U2VjdGlvbiBjb25jZXJuw6k8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aCBjb2xTcGFuPScyJz5BY3Rpb25zPC90aD5cclxuXHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFx0XHQ8dGJvZHk+XHJcblx0XHRcdFx0XHRcdHtwaG90b3MubWFwKChwaG90bywgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8dHIga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdtdC01Jz5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPXtgaXRlbXNbJHtpbmRleH1dLm5vbWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtwaG90by5ub219XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17cGhvdG8ubG9jYXRpb259XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1heEhlaWdodDogJ2F1dG8nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6ICc4MHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naW1nIGltZy1mbHVpZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9e3Bob3RvLm5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9e2BpdGVtc1ske2luZGV4fV0uYWx0YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e3Bob3RvLmFsdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9e2BpdGVtc1ske2luZGV4fV0udGl0cmVDYXJvdXNlbGB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtwaG90by50aXRyZUNhcm91c2VsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT17YGl0ZW1zWyR7aW5kZXh9XS50ZXh0ZUNhcm91c2VsYH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e3Bob3RvLnRleHRlQ2Fyb3VzZWx9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPXtgaXRlbXNbJHtpbmRleH1dLnBhZ2VgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY3VzdG9tLXNlbGVjdCBtci1zbS0yJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uPlNlbGVjdGlvbi4uLjwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtnaXRlcy5tYXAoKGdpdGUsIGkpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Z2l0ZS5zbHVnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RlZD17XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5zbHVnID09PVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGhvdG8ucGFnZUFzc29jaWVlICYmXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3NlbGVjdGVkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Z2l0ZS5ub219XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT0nQXV0cmUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RlZD17XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBob3RvLnBhZ2VBc3NvY2llZSA9PT1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnQXV0cmUnICYmICdzZWxlY3RlZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBdXRyZXMgcGFnZXNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9e2BpdGVtc1ske2luZGV4fV0uc2VjdGlvbmB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjdXN0b20tc2VsZWN0IG1yLXNtLTInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24+U2VsZWN0aW9uLi4uPC9vcHRpb24+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRncm91cCBsYWJlbD0nR2l0ZXMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT0nZXh0ZXJpZXVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RlZD17XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGhvdG8uc2VjdGlvbkFzc29jaWVlID09PVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2V4dGVyaWV1cicgJiZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnc2VsZWN0ZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEV4dMOpcmlldXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT0ncGlzY2luZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0ZWQ9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBob3RvLnNlY3Rpb25Bc3NvY2llZSA9PT1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdwaXNjaW5lJyAmJiAnc2VsZWN0ZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFBpc2NpbmVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT0naW50ZXJpZXVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RlZD17XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGhvdG8uc2VjdGlvbkFzc29jaWVlID09PVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2ludGVyaWV1cicgJiZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnc2VsZWN0ZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEludMOpcmlldXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0Z3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGdyb3VwIGxhYmVsPSdEaXZlcnMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT0nQXV0cmUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdGVkPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwaG90by5zZWN0aW9uQXNzb2NpZWUgPT09XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnQXV0cmUnICYmICdzZWxlY3RlZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QXV0cmVzIHNlY3Rpb25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9J2F2YXRhcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0ZWQ9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBob3RvLnNlY3Rpb25Bc3NvY2llZSA9PT1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdhdmF0YXInICYmICdzZWxlY3RlZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QXZhdGFyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9J3ZpZ25ldHRlcydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0ZWQ9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBob3RvLnNlY3Rpb25Bc3NvY2llZSA9PT1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd2aWduZXR0ZXMnICYmXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3NlbGVjdGVkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRWaWduZXR0ZXNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT0nYWxlbnRvdXJzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RlZD17XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGhvdG8uc2VjdGlvbkFzc29jaWVlID09PVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2FsZW50b3VycycgJiZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnc2VsZWN0ZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEFsZW50b3Vyc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRncm91cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0Z3JvdXAgbGFiZWw9J1BhcnRlbmFpcmVzJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtwYXJ0ZW5haXJlcy5tYXAoKHBhcnRlbmFpcmUpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtwYXJ0ZW5haXJlLnNsdWd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0ZWQ9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGhvdG8uc2VjdGlvbkFzc29jaWVlID09PVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYXJ0ZW5haXJlLnNsdWcgJiZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdzZWxlY3RlZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtwYXJ0ZW5haXJlLm5vbX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvYWRtaW4vY3J1ZC9naXRlLyR7cGhvdG99YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZhcyBmYS1wZW5jaWwtcnVsZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGNvbG9yOiAnb3JhbmdlJyB9fT48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGRlbGV0ZUNvbmZpcm0ocGhvdG8pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmFzIGZhLXRyYXNoLWFsdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdyZWQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdFx0PC9UYWJsZT5cclxuXHRcdFx0XHR7c3VjY2VzcyAmJiAoXHJcblx0XHRcdFx0XHQ8QWxlcnQgY29sb3I9J3N1Y2Nlc3MnPlxyXG5cdFx0XHRcdFx0XHRMYS9MZXMgaW1hZ2Uocykgb250IGJpZW4gw6l0w6kgbW9kaWZpw6llKHMpXHJcblx0XHRcdFx0XHQ8L0FsZXJ0PlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdFx0e2xvYWRpbmcgJiYgPFNwaW5uZXIgLz59XHJcblx0XHRcdFx0e2Vycm9yICYmIDxBbGVydCBjb2xvcj0nZGFuZ2VyJz57ZXJyb3J9PC9BbGVydD59XHJcblx0XHRcdFx0PEJ1dHRvbiBjb2xvcj0nc3VjY2Vzcyc+VmFsaWRlciBjZXMgaW5mb3M8L0J1dHRvbj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RJbWFnZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=