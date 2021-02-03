webpackHotUpdate_N_E("pages/admin/gestionImages",{

/***/ "./components/admin/lists/ListImages.js":
/*!**********************************************!*\
  !*** ./components/admin/lists/ListImages.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../config */ "./config.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");





var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\lists\\ListImages.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var ListImages = function ListImages() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      photos = _useState[0],
      setPhotos = _useState[1];

  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_10__["getCookie"])('token');

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_9__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      control = _useForm.control,
      errors = _useForm.errors;

  var _useFieldArray = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_9__["useFieldArray"])({
    control: control,
    name: 'items'
  }),
      fields = _useFieldArray.fields,
      append = _useFieldArray.append,
      remove = _useFieldArray.remove;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({
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
      values = _useState2[0],
      setValues = _useState2[1];

  var success = values.success,
      loading = values.loading,
      error = values.error;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      gites = _useState3[0],
      setGites = _useState3[1];

  var listDesGites = function listDesGites() {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_4__["listGitesNoms"])().then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        setGites.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(gites).concat([data]));
      }
    });
  };

  var listerLesImages = function listerLesImages() {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_4__["listeDesImages"])(token).then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        setPhotos.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(photos).concat([data]));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    listDesGites();
    listerLesImages();
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
        console.log('une grosse erreur');
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: handleSubmit(onSubmit),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Table"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Nom"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Photo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Texte alternatif"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Titre Carousel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Texte Carousel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Page concern\xE9e"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Section concern\xE9"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              colSpan: "2",
              children: "Actions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: photos.map(function (photo, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              className: "mt-5",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  className: "form-control",
                  type: "text",
                  name: "items[".concat(index, "].nom"),
                  defaultValue: photo.nom,
                  ref: register({
                    required: true
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: photo.location,
                  style: {
                    maxHeight: 'auto',
                    width: '80px'
                  },
                  className: "img img-fluid",
                  alt: photo.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  className: "form-control",
                  type: "text",
                  name: "items[".concat(index, "].alt"),
                  defaultValue: photo.alt,
                  ref: register({
                    required: true
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  className: "form-control",
                  type: "text",
                  name: "items[".concat(index, "].titreCarousel"),
                  defaultValue: photo.titreCarousel,
                  ref: register({
                    required: true
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  className: "form-control",
                  type: "text",
                  name: "items[".concat(index, "].texteCarousel"),
                  defaultValue: photo.texteCarousel,
                  ref: register({
                    required: true
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 159,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  children: ["Selectionn\xE9 :", ' ', photo.pageAssociee && photo.pageAssociee]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 168,
                  columnNumber: 10
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                  defaultValue: photo.pageAssociee,
                  ref: register({
                    required: true
                  }),
                  name: "items[".concat(index, "].page"),
                  className: "custom-select mr-sm-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    children: "Selection..."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 178,
                    columnNumber: 11
                  }, _this), gites.map(function (gite, i) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                      value: gite.slug,
                      children: gite.nom
                    }, i, false, {
                      fileName: _jsxFileName,
                      lineNumber: 180,
                      columnNumber: 12
                    }, _this);
                  }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "Autre",
                    children: "Autres pages"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 184,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  children: ["Selectionn\xE9 :", ' ', photo.sectionAssociee && photo.sectionAssociee]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 190,
                  columnNumber: 10
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                  ref: register({
                    required: true
                  }),
                  name: "items[".concat(index, "].section"),
                  className: "custom-select mr-sm-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    defaultValue: true,
                    children: "Selection..."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 199,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "Autre",
                    children: "Autres sections"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 202,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "exterieur",
                    children: "Ext\xE9rieur"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 205,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "piscine",
                    children: "Piscine"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 208,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "interieur",
                    children: "Int\xE9rieur"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 209,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "avatar",
                    children: "Avatar"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 212,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "avatar",
                    children: "Vignettes"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 213,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
                  href: "/admin/crud/gite/".concat(photo),
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                      className: "fas fa-pencil-ruler",
                      style: {
                        color: 'orange'
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 221,
                      columnNumber: 12
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 220,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 219,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  onClick: function onClick() {
                    return deleteConfirm(photo);
                  },
                  className: "fas fa-trash-alt",
                  style: {
                    color: 'red',
                    cursor: 'pointer'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 228,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 9
              }, _this)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 8
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 5
      }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "alert alert-success",
        children: "La/Les image(s) ont bien \xE9t\xE9 modifi\xE9e(s)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 6
      }, _this), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "alert alert-success",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Spinner"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 7
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 6
      }, _this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "alert alert-danger",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        color: "success",
        children: "Valider ces infos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 4
    }, _this)
  }, void 0, false);
};

_s(ListImages, "0GyfcPd8VQ83Gy3vQ80w9nGFqWg=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_9__["useForm"], react_hook_form__WEBPACK_IMPORTED_MODULE_9__["useFieldArray"]];
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

module.exports = _taggedTemplateLiteral;

/***/ }),

/***/ "./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stylis */ "./node_modules/@emotion/cache/node_modules/stylis/dist/stylis.mjs");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js");





var last = function last(arr) {
  return arr.length ? arr[arr.length - 1] : null;
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (Object(stylis__WEBPACK_IMPORTED_MODULE_1__["token"])(character)) {
      case 0:
        // &\f
        if (character === 38 && Object(stylis__WEBPACK_IMPORTED_MODULE_1__["peek"])() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += Object(stylis__WEBPACK_IMPORTED_MODULE_1__["identifier"])(stylis__WEBPACK_IMPORTED_MODULE_1__["position"] - 1);
        break;

      case 2:
        parsed[index] += Object(stylis__WEBPACK_IMPORTED_MODULE_1__["delimit"])(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = Object(stylis__WEBPACK_IMPORTED_MODULE_1__["peek"])() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += Object(stylis__WEBPACK_IMPORTED_MODULE_1__["from"])(character);
    }
  } while (character = Object(stylis__WEBPACK_IMPORTED_MODULE_1__["next"])());

  return parsed;
};

var getRules = function getRules(value, points) {
  return Object(stylis__WEBPACK_IMPORTED_MODULE_1__["dealloc"])(toRules(Object(stylis__WEBPACK_IMPORTED_MODULE_1__["alloc"])(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // .length indicates if this rule contains pseudo or not
  !element.length) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';

var isIgnoringComment = function isIgnoringComment(element) {
  return !!element && element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};

var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
  return function (element, index, children) {
    if (element.type !== 'rule') return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);

    if (unsafePseudoClasses && cache.compat !== true) {
      var prevElement = index > 0 ? children[index - 1] : null;

      if (prevElement && isIgnoringComment(last(prevElement.children))) {
        return;
      }

      unsafePseudoClasses.forEach(function (unsafePseudoClass) {
        console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
      });
    }
  };
};

var isImportRule = function isImportRule(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};

var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }

  return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user


var nullifyElement = function nullifyElement(element) {
  element.type = '';
  element.value = '';
  element["return"] = '';
  element.children = '';
  element.props = '';
};

var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }

  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};

var defaultStylisPlugins = [stylis__WEBPACK_IMPORTED_MODULE_1__["prefixer"]];

var createCache = function createCache(options) {
  var key = options.key;

  if ( true && !key) {
    throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\n" + "If multiple caches share the same key they might \"fight\" for each other's style elements.");
  }

  if ( key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to

    Array.prototype.forEach.call(ssrStyles, function (node) {
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  if (true) {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;
  var nodesToHydrate = [];

  {
    container = options.container || document.head;
    Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' ');

      if (attrib[0] !== key) {
        return;
      } // $FlowFixMe


      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  if (true) {
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
      get compat() {
        return cache.compat;
      }

    }), incorrectImportAlarm);
  }

  {
    var currentSheet;
    var finalizingPlugins = [stylis__WEBPACK_IMPORTED_MODULE_1__["stringify"],  true ? function (element) {
      if (!element.root) {
        if (element["return"]) {
          currentSheet.insert(element["return"]);
        } else if (element.value && element.type !== stylis__WEBPACK_IMPORTED_MODULE_1__["COMMENT"]) {
          // insert empty rule in non-production environments
          // so @emotion/jest can grab `key` from the (JS)DOM for caches without any rules inserted yet
          currentSheet.insert(element.value + "{}");
        }
      }
    } : undefined];
    var serializer = Object(stylis__WEBPACK_IMPORTED_MODULE_1__["middleware"])(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return Object(stylis__WEBPACK_IMPORTED_MODULE_1__["serialize"])(Object(stylis__WEBPACK_IMPORTED_MODULE_1__["compile"])(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      if ( true && serialized.map !== undefined) {
        currentSheet = {
          insert: function insert(rule) {
            sheet.insert(rule + serialized.map);
          }
        };
      }

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }

  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"]({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

/* harmony default export */ __webpack_exports__["default"] = (createCache);


/***/ }),

/***/ "./node_modules/@emotion/cache/node_modules/stylis/dist/stylis.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/@emotion/cache/node_modules/stylis/dist/stylis.mjs ***!
  \*************************************************************************/
/*! exports provided: CHARSET, COMMENT, COUNTER_STYLE, DECLARATION, DOCUMENT, FONT_FACE, FONT_FEATURE_VALUES, IMPORT, KEYFRAMES, MEDIA, MOZ, MS, NAMESPACE, PAGE, RULESET, SUPPORTS, VIEWPORT, WEBKIT, abs, alloc, append, caret, char, character, characters, charat, column, combine, comment, commenter, compile, copy, dealloc, declaration, delimit, delimiter, from, hash, identifier, indexof, length, line, match, middleware, namespace, next, node, parse, peek, position, prefix, prefixer, replace, ruleset, rulesheet, serialize, sizeof, slice, stringify, strlen, substr, token, tokenize, tokenizer, trim, whitespace */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHARSET", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMENT", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTER_STYLE", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECLARATION", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCUMENT", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_FACE", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_FEATURE_VALUES", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMPORT", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYFRAMES", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOZ", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MS", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAMESPACE", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RULESET", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORTS", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBKIT", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alloc", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caret", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "char", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "character", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "characters", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charat", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "column", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combine", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comment", function() { return ce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commenter", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return ee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dealloc", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "declaration", function() { return ne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delimit", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delimiter", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identifier", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexof", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "line", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "middleware", function() { return ie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return le; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "next", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "node", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return re; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "peek", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "position", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return te; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixer", function() { return oe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ruleset", function() { return ae; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rulesheet", function() { return fe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serialize", function() { return se; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeof", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return ue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strlen", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "substr", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "token", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenize", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenizer", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trim", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whitespace", function() { return W; });
var e="-ms-";var r="-moz-";var a="-webkit-";var c="comm";var n="rule";var t="decl";var s="@page";var u="@media";var i="@import";var f="@charset";var o="@viewport";var l="@supports";var v="@document";var h="@namespace";var p="@keyframes";var w="@font-face";var b="@counter-style";var $="@font-feature-values";var k=Math.abs;var d=String.fromCharCode;function m(e,r){return(((r<<2^z(e,0))<<2^z(e,1))<<2^z(e,2))<<2^z(e,3)}function g(e){return e.trim()}function x(e,r){return(e=r.exec(e))?e[0]:e}function y(e,r,a){return e.replace(r,a)}function j(e,r){return e.indexOf(r)}function z(e,r){return e.charCodeAt(r)|0}function C(e,r,a){return e.slice(r,a)}function A(e){return e.length}function M(e){return e.length}function O(e,r){return r.push(e),e}function S(e,r){return e.map(r).join("")}var q=1;var B=1;var D=0;var E=0;var F=0;var G="";function H(e,r,a,c,n,t,s){return{value:e,root:r,parent:a,type:c,props:n,children:t,line:q,column:B,length:s,return:""}}function I(e,r,a){return H(e,r.root,r.parent,a,r.props,r.children,0)}function J(){return F}function K(){F=E<D?z(G,E++):0;if(B++,F===10)B=1,q++;return F}function L(){return z(G,E)}function N(){return E}function P(e,r){return C(G,e,r)}function Q(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function R(e){return q=B=1,D=A(G=e),E=0,[]}function T(e){return G="",e}function U(e){return g(P(E-1,Y(e===91?e+2:e===40?e+1:e)))}function V(e){return T(X(R(e)))}function W(e){while(F=L())if(F<33)K();else break;return Q(e)>2||Q(F)>3?"":" "}function X(e){while(K())switch(Q(F)){case 0:O(_(E-1),e);break;case 2:O(U(F),e);break;default:O(d(F),e)}return e}function Y(e){while(K())switch(F){case e:return E;case 34:case 39:return Y(e===34||e===39?e:F);case 40:if(e===41)Y(e);break;case 92:K();break}return E}function Z(e,r){while(K())if(e+F===47+10)break;else if(e+F===42+42&&L()===47)break;return"/*"+P(r,E-1)+"*"+d(e===47?e:K())}function _(e){while(!Q(L()))K();return P(e,E)}function ee(e){return T(re("",null,null,null,[""],e=R(e),0,[0],e))}function re(e,r,a,c,n,t,s,u,i){var f=0;var o=0;var l=s;var v=0;var h=0;var p=0;var w=1;var b=1;var $=1;var k=0;var m="";var g=n;var x=t;var j=c;var z=m;while(b)switch(p=k,k=K()){case 34:case 39:case 91:case 40:z+=U(k);break;case 9:case 10:case 13:case 32:z+=W(p);break;case 47:switch(L()){case 42:case 47:O(ce(Z(K(),N()),r,a),i);break;default:z+="/"}break;case 123*w:u[f++]=A(z)*$;case 125*w:case 59:case 0:switch(k){case 0:case 125:b=0;case 59+o:if(h>0&&A(z)-l)O(h>32?ne(z+";",c,a,l-1):ne(y(z," ","")+";",c,a,l-2),i);break;case 59:z+=";";default:O(j=ae(z,r,a,f,o,n,u,m,g=[],x=[],l),t);if(k===123)if(o===0)re(z,r,j,j,g,t,l,u,x);else switch(v){case 100:case 109:case 115:re(e,j,j,c&&O(ae(e,j,j,0,0,n,u,m,n,g=[],l),x),n,x,l,u,c?g:x);break;default:re(z,j,j,j,[""],x,l,u,x)}}f=o=h=0,w=$=1,m=z="",l=s;break;case 58:l=1+A(z),h=p;default:switch(z+=d(k),k*w){case 38:$=o>0?1:(z+="\f",-1);break;case 44:u[f++]=(A(z)-1)*$,$=1;break;case 64:if(L()===45)z+=U(K());v=L(),o=A(m=z+=_(N())),k++;break;case 45:if(p===45&&A(z)==2)w=0}}return t}function ae(e,r,a,c,t,s,u,i,f,o,l){var v=t-1;var h=t===0?s:[""];var p=M(h);for(var w=0,b=0,$=0;w<c;++w)for(var d=0,m=C(e,v+1,v=k(b=u[w])),x=e;d<p;++d)if(x=g(b>0?h[d]+" "+m:y(m,/&\f/g,h[d])))f[$++]=x;return H(e,r,a,t===0?n:i,f,o,l)}function ce(e,r,a){return H(e,r,a,c,d(J()),C(e,2,-2),0)}function ne(e,r,a,c){return H(e,r,a,t,C(e,0,c),C(e,c+1,-1),c)}function te(c,n){switch(m(c,n)){case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return a+c+c;case 5349:case 4246:case 4810:case 6968:case 2756:return a+c+r+c+e+c+c;case 6828:case 4268:return a+c+e+c+c;case 6165:return a+c+e+"flex-"+c+c;case 5187:return a+c+y(c,/(\w+).+(:[^]+)/,a+"box-$1$2"+e+"flex-$1$2")+c;case 5443:return a+c+e+"flex-item-"+y(c,/flex-|-self/,"")+c;case 4675:return a+c+e+"flex-line-pack"+y(c,/align-content|flex-|-self/,"")+c;case 5548:return a+c+e+y(c,"shrink","negative")+c;case 5292:return a+c+e+y(c,"basis","preferred-size")+c;case 6060:return a+"box-"+y(c,"-grow","")+a+c+e+y(c,"grow","positive")+c;case 4554:return a+y(c,/([^-])(transform)/g,"$1"+a+"$2")+c;case 6187:return y(y(y(c,/(zoom-|grab)/,a+"$1"),/(image-set)/,a+"$1"),c,"")+c;case 5495:case 3959:return y(c,/(image-set\([^]*)/,a+"$1"+"$`$1");case 4968:return y(y(c,/(.+:)(flex-)?(.*)/,a+"box-pack:$3"+e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+a+c+c;case 4095:case 3583:case 4068:case 2532:return y(c,/(.+)-inline(.+)/,a+"$1$2")+c;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(A(c)-1-n>6)switch(z(c,n+1)){case 102:n=z(c,n+3);case 109:return y(c,/(.+:)(.+)-([^]+)/,"$1"+a+"$2-$3"+"$1"+r+(n==108?"$3":"$2-$3"))+c;case 115:return~j(c,"stretch")?te(y(c,"stretch","fill-available"),n)+c:c}break;case 4949:if(z(c,n+1)!==115)break;case 6444:switch(z(c,A(c)-3-(~j(c,"!important")&&10))){case 107:case 111:return y(c,c,a+c)+c;case 101:return y(c,/(.+:)([^;!]+)(;|!.+)?/,"$1"+a+(z(c,14)===45?"inline-":"")+"box$3"+"$1"+a+"$2$3"+"$1"+e+"$2box$3")+c}break;case 5936:switch(z(c,n+11)){case 114:return a+c+e+y(c,/[svh]\w+-[tblr]{2}/,"tb")+c;case 108:return a+c+e+y(c,/[svh]\w+-[tblr]{2}/,"tb-rl")+c;case 45:return a+c+e+y(c,/[svh]\w+-[tblr]{2}/,"lr")+c}return a+c+e+c+c}return c}function se(e,r){var a="";var c=M(e);for(var n=0;n<c;n++)a+=r(e[n],n,e,r)||"";return a}function ue(e,r,a,s){switch(e.type){case i:case t:return e.return=e.return||e.value;case c:return"";case n:e.value=e.props.join(",")}return A(a=se(e.children,s))?e.return=e.value+"{"+a+"}":""}function ie(e){var r=M(e);return function(a,c,n,t){var s="";for(var u=0;u<r;u++)s+=e[u](a,c,n,t)||"";return s}}function fe(e){return function(r){if(!r.root)if(r=r.return)e(r)}}function oe(c,s,u,i){if(!c.return)switch(c.type){case t:c.return=te(c.value,c.length);break;case p:return se([I(y(c.value,"@","@"+a),c,"")],i);case n:if(c.length)return S(c.props,(function(n){switch(x(n,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return se([I(y(n,/:(read-\w+)/,":"+r+"$1"),c,"")],i);case"::placeholder":return se([I(y(n,/:(plac\w+)/,":"+a+"input-$1"),c,""),I(y(n,/:(plac\w+)/,":"+r+"$1"),c,""),I(y(n,/:(plac\w+)/,e+"input-$1"),c,"")],i)}return""}))}}function le(e){switch(e.type){case n:e.props=e.props.map((function(r){return S(V(r),(function(r,a,c){switch(z(r,0)){case 12:return C(r,1,A(r));case 0:case 40:case 43:case 62:case 126:return r;case 58:if(c[a+1]==="global")c[a+1]="",c[a+2]="\f"+C(c[a+2],a=1,-1);case 32:return a===1?"":r;default:switch(a){case 0:e=r;return M(c)>1?"":r;case a=M(c)-1:case 2:return a===2?r+e+e:r+e;default:return r}}}))}))}}
//# sourceMappingURL=stylis.mjs.map


/***/ }),

/***/ "./node_modules/@emotion/hash/dist/hash.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/hash.browser.esm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmur2);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/react/dist/emotion-element-4fbd89c5.browser.esm.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@emotion/react/dist/emotion-element-4fbd89c5.browser.esm.js ***!
  \**********************************************************************************/
/*! exports provided: C, E, T, a, b, c, h, u, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CacheProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return Emotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return withTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createEmotionProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hasOwnProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return useTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return withEmotionCache; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");
/* harmony import */ var _isolated_hoist_non_react_statics_do_not_use_this_in_your_code_dist_emotion_react_isolated_hoist_non_react_statics_do_not_use_this_in_your_code_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isolated-hoist-non-react-statics-do-not-use-this-in-your-code/dist/emotion-react-isolated-hoist-non-react-statics-do-not-use-this-in-your-code.browser.esm.js */ "./node_modules/@emotion/react/isolated-hoist-non-react-statics-do-not-use-this-in-your-code/dist/emotion-react-isolated-hoist-non-react-statics-do-not-use-this-in-your-code.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js");








var hasOwnProperty = Object.prototype.hasOwnProperty;

var EmotionCacheContext = /* #__PURE__ */Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_1__["default"])({
  key: 'css'
}) : null);
var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  // $FlowFixMe
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
    // the cache will never be null in the browser
    var cache = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

var ThemeContext = /* #__PURE__ */Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
var useTheme = function useTheme() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ThemeContext);
};

var getTheme = function getTheme(outerTheme, theme) {
  if (typeof theme === 'function') {
    var mergedTheme = theme(outerTheme);

    if ( true && (mergedTheme == null || typeof mergedTheme !== 'object' || Array.isArray(mergedTheme))) {
      throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
    }

    return mergedTheme;
  }

  if ( true && (theme == null || typeof theme !== 'object' || Array.isArray(theme))) {
    throw new Error('[ThemeProvider] Please make your theme prop a plain object');
  }

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, outerTheme, {}, theme);
};

var createCacheWithTheme = /* #__PURE__ */Object(_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__["default"])(function (outerTheme) {
  return Object(_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__["default"])(function (theme) {
    return getTheme(outerTheme, theme);
  });
});
var ThemeProvider = function ThemeProvider(props) {
  var theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ThemeContext);

  if (props.theme !== theme) {
    theme = createCacheWithTheme(theme)(props.theme);
  }

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ThemeContext.Provider, {
    value: theme
  }, props.children);
};
function withTheme(Component) {
  var componentName = Component.displayName || Component.name || 'Component';

  var render = function render(props, ref) {
    var theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ThemeContext);
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      theme: theme,
      ref: ref
    }, props));
  }; // $FlowFixMe


  var WithTheme = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(render);
  WithTheme.displayName = "WithTheme(" + componentName + ")";
  return Object(_isolated_hoist_non_react_statics_do_not_use_this_in_your_code_dist_emotion_react_isolated_hoist_non_react_statics_do_not_use_this_in_your_code_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["default"])(WithTheme, Component);
}

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if ( true && typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + props.css + "`");
  }

  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type;

  if (true) {
    var error = new Error();

    if (error.stack) {
      // chrome
      var match = error.stack.match(/at (?:Object\.|Module\.|)(?:jsx|createEmotionProps).*\n\s+at (?:Object\.|)([A-Z][A-Za-z0-9$]+) /);

      if (!match) {
        // safari and firefox
        match = error.stack.match(/.*\n([A-Z][A-Za-z0-9$]+)@/);
      }

      if (match) {
        newProps[labelPropName] = sanitizeIdentifier(match[1]);
      }
    }
  }

  return newProps;
};
var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
  var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_5__["getRegisteredStyles"])(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_6__["serializeStyles"])(registeredStyles, undefined, typeof cssProp === 'function' || Array.isArray(cssProp) ? Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ThemeContext) : undefined);

  if ( true && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_6__["serializeStyles"])([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  var rules = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_5__["insertStyles"])(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( false || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(type, newProps);

  return ele;
});

if (true) {
  Emotion.displayName = 'EmotionCssPropInternal';
}




/***/ }),

/***/ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js ***!
  \***********************************************************************/
/*! exports provided: CacheProvider, ThemeContext, ThemeProvider, useTheme, withEmotionCache, withTheme, ClassNames, Global, createElement, css, jsx, keyframes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassNames", function() { return ClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");
/* harmony import */ var _emotion_element_4fbd89c5_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emotion-element-4fbd89c5.browser.esm.js */ "./node_modules/@emotion/react/dist/emotion-element-4fbd89c5.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheProvider", function() { return _emotion_element_4fbd89c5_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["C"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return _emotion_element_4fbd89c5_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["T"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return _emotion_element_4fbd89c5_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return _emotion_element_4fbd89c5_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["u"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withEmotionCache", function() { return _emotion_element_4fbd89c5_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["w"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return _emotion_element_4fbd89c5_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["b"]; });

/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _isolated_hoist_non_react_statics_do_not_use_this_in_your_code_dist_emotion_react_isolated_hoist_non_react_statics_do_not_use_this_in_your_code_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../isolated-hoist-non-react-statics-do-not-use-this-in-your-code/dist/emotion-react-isolated-hoist-non-react-statics-do-not-use-this-in-your-code.browser.esm.js */ "./node_modules/@emotion/react/isolated-hoist-non-react-statics-do-not-use-this-in-your-code/dist/emotion-react-isolated-hoist-non-react-statics-do-not-use-this-in-your-code.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js");
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js");












var pkg = {
	name: "@emotion/react",
	version: "11.1.4",
	main: "dist/emotion-react.cjs.js",
	module: "dist/emotion-react.esm.js",
	browser: {
		"./dist/emotion-react.cjs.js": "./dist/emotion-react.browser.cjs.js",
		"./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
	},
	types: "types/index.d.ts",
	files: [
		"src",
		"dist",
		"jsx-runtime",
		"jsx-dev-runtime",
		"isolated-hoist-non-react-statics-do-not-use-this-in-your-code",
		"types/*.d.ts",
		"macro.js",
		"macro.d.ts",
		"macro.js.flow"
	],
	sideEffects: false,
	author: "mitchellhamilton <mitchell@mitchellhamilton.me>",
	license: "MIT",
	scripts: {
		"test:typescript": "dtslint types"
	},
	dependencies: {
		"@babel/runtime": "^7.7.2",
		"@emotion/cache": "^11.1.3",
		"@emotion/serialize": "^1.0.0",
		"@emotion/sheet": "^1.0.1",
		"@emotion/utils": "^1.0.0",
		"@emotion/weak-memoize": "^0.2.5",
		"hoist-non-react-statics": "^3.3.1"
	},
	peerDependencies: {
		"@babel/core": "^7.0.0",
		react: ">=16.8.0"
	},
	peerDependenciesMeta: {
		"@babel/core": {
			optional: true
		},
		"@types/react": {
			optional: true
		}
	},
	devDependencies: {
		"@babel/core": "^7.7.2",
		"@emotion/css": "11.1.3",
		"@emotion/css-prettifier": "1.0.0",
		"@emotion/server": "11.0.0",
		"@emotion/styled": "11.0.0",
		"@types/react": "^16.9.11",
		dtslint: "^0.3.0",
		"html-tag-names": "^1.1.2",
		react: "16.14.0",
		"svg-tag-names": "^1.1.1"
	},
	repository: "https://github.com/emotion-js/emotion/tree/master/packages/react",
	publishConfig: {
		access: "public"
	},
	"umd:main": "dist/emotion-react.umd.min.js",
	preconstruct: {
		entrypoints: [
			"./index.js",
			"./jsx-runtime.js",
			"./jsx-dev-runtime.js",
			"./isolated-hoist-non-react-statics-do-not-use-this-in-your-code.js"
		],
		umdName: "emotionReact"
	}
};

var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !_emotion_element_4fbd89c5_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["h"].call(props, 'css')) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"].apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = _emotion_element_4fbd89c5_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["E"];
  createElementArgArray[1] = Object(_emotion_element_4fbd89c5_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["c"])(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"].apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global = /* #__PURE__ */Object(_emotion_element_4fbd89c5_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["w"])(function (props, cache) {
  if ( true && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;
  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_8__["serializeStyles"])([styles], undefined, typeof styles === 'function' || Array.isArray(styles) ? Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_emotion_element_4fbd89c5_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["T"]) : undefined);
  // but it is based on a constant that will never change at runtime
  // it's effectively like having two implementations and switching them out
  // so it's not actually breaking anything


  var sheetRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    var key = cache.key + "-global";
    var sheet = new _emotion_sheet__WEBPACK_IMPORTED_MODULE_9__["StyleSheet"]({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    }); // $FlowFixMe

    var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }

    if (node !== null) {
      sheet.hydrate([node]);
    }

    sheetRef.current = sheet;
    return function () {
      sheet.flush();
    };
  }, [cache]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    if (serialized.next !== undefined) {
      // insert keyframes
      Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_7__["insertStyles"])(cache, serialized.next, true);
    }

    var sheet = sheetRef.current;

    if (sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }

    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});

if (true) {
  Global.displayName = 'EmotionGlobal';
}

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_8__["serializeStyles"])(args);
}

var keyframes = function keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            if ( true && arg.styles !== undefined && arg.name !== undefined) {
              console.error('You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n' + '`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.');
            }

            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_7__["getRegisteredStyles"])(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = /* #__PURE__ */Object(_emotion_element_4fbd89c5_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["w"])(function (props, cache) {
  var hasRendered = false;

  var css = function css() {
    if (hasRendered && "development" !== 'production') {
      throw new Error('css can only be used during render');
    }

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_8__["serializeStyles"])(args, cache.registered);

    {
      Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_7__["insertStyles"])(cache, serialized, false);
    }

    return cache.key + "-" + serialized.name;
  };

  var cx = function cx() {
    if (hasRendered && "development" !== 'production') {
      throw new Error('cx can only be used during render');
    }

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return merge(cache.registered, css, classnames(args));
  };

  var content = {
    css: css,
    cx: cx,
    theme: Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_emotion_element_4fbd89c5_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["T"])
  };
  var ele = props.children(content);
  hasRendered = true;

  return ele;
});

if (true) {
  ClassNames.displayName = 'EmotionClassNames';
}

if (true) {
  var isBrowser = "object" !== 'undefined'; // #1727 for some reason Jest evaluates modules twice if some consuming module gets mocked with jest.mock

  var isJest = typeof jest !== 'undefined';

  if (isBrowser && !isJest) {
    var globalContext = isBrowser ? window : global;
    var globalKey = "__EMOTION_REACT_" + pkg.version.split('.')[0] + "__";

    if (globalContext[globalKey]) {
      console.warn('You are loading @emotion/react when it is already loaded. Running ' + 'multiple instances may cause problems. This can happen if multiple ' + 'versions are used, or if multiple builds of the same version are ' + 'used.');
    }

    globalContext[globalKey] = true;
  }
}



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@emotion/react/isolated-hoist-non-react-statics-do-not-use-this-in-your-code/dist/emotion-react-isolated-hoist-non-react-statics-do-not-use-this-in-your-code.browser.esm.js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@emotion/react/isolated-hoist-non-react-statics-do-not-use-this-in-your-code/dist/emotion-react-isolated-hoist-non-react-statics-do-not-use-this-in-your-code.browser.esm.js ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__);


// this file isolates this package that is not tree-shakeable
// and if this module doesn't actually contain any logic of its own
// then Rollup just use 'hoist-non-react-statics' directly in other chunks

var hoistNonReactStatics = (function (targetComponent, sourceComponent) {
  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default()(targetComponent, sourceComponent);
});

/* harmony default export */ __webpack_exports__["default"] = (hoistNonReactStatics);


/***/ }),

/***/ "./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: serializeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeStyles", function() { return serializeStyles; });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/hash.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js");




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if ( true && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if ( true && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else if (true) {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if ( true && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (true) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    if ( true && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {
      if ( true && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (true) {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = Object(_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(styles) + identifierName;

  if (true) {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ "./node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js ***!
  \***********************************************************************/
/*! exports provided: StyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheet", function() { return StyleSheet; });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        before = _this.prepend ? _this.container.firstChild : _this.before;
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? "development" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (true) {
      var isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;

      if (isImportRule && this._alreadyInsertedOrderInsensitiveRule) {
        // this would only cause problem in speedy mode
        // but we don't want enabling speedy to affect the observable behavior
        // so we report this error at all times
        console.error("You're attempting to insert the following rule:\n" + rule + '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.');
      }
      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
    }

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if ( true && !/:(-moz-placeholder|-ms-input-placeholder|-moz-read-write|-moz-read-only){/.test(rule)) {
          console.error("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;

    if (true) {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };

  return StyleSheet;
}();




/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js ***!
  \***********************************************************************/
/*! exports provided: getRegisteredStyles, insertStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStyles", function() { return insertStyles; });
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false ) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (weakMemoize);


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (newInputs[i] !== lastInputs[i]) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);


/***/ }),

/***/ "./node_modules/react-input-autosize/lib/AutosizeInput.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-input-autosize/lib/AutosizeInput.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizerStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	visibility: 'hidden',
	height: 0,
	overflow: 'scroll',
	whiteSpace: 'pre'
};

var INPUT_PROPS_BLACKLIST = ['extraWidth', 'injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'];

var cleanInputProps = function cleanInputProps(inputProps) {
	INPUT_PROPS_BLACKLIST.forEach(function (field) {
		return delete inputProps[field];
	});
	return inputProps;
};

var copyStyles = function copyStyles(styles, node) {
	node.style.fontSize = styles.fontSize;
	node.style.fontFamily = styles.fontFamily;
	node.style.fontWeight = styles.fontWeight;
	node.style.fontStyle = styles.fontStyle;
	node.style.letterSpacing = styles.letterSpacing;
	node.style.textTransform = styles.textTransform;
};

var isIE = typeof window !== 'undefined' && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;

var generateId = function generateId() {
	// we only need an auto-generated ID for stylesheet injection, which is only
	// used for IE. so if the browser is not IE, this should return undefined.
	return isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;
};

var AutosizeInput = function (_Component) {
	_inherits(AutosizeInput, _Component);

	_createClass(AutosizeInput, null, [{
		key: 'getDerivedStateFromProps',
		value: function getDerivedStateFromProps(props, state) {
			var id = props.id;

			return id !== state.prevId ? { inputId: id || generateId(), prevId: id } : null;
		}
	}]);

	function AutosizeInput(props) {
		_classCallCheck(this, AutosizeInput);

		var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

		_this.inputRef = function (el) {
			_this.input = el;
			if (typeof _this.props.inputRef === 'function') {
				_this.props.inputRef(el);
			}
		};

		_this.placeHolderSizerRef = function (el) {
			_this.placeHolderSizer = el;
		};

		_this.sizerRef = function (el) {
			_this.sizer = el;
		};

		_this.state = {
			inputWidth: props.minWidth,
			inputId: props.id || generateId(),
			prevId: props.id
		};
		return _this;
	}

	_createClass(AutosizeInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.mounted = true;
			this.copyInputStyles();
			this.updateInputWidth();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.inputWidth !== this.state.inputWidth) {
				if (typeof this.props.onAutosize === 'function') {
					this.props.onAutosize(this.state.inputWidth);
				}
			}
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.mounted = false;
		}
	}, {
		key: 'copyInputStyles',
		value: function copyInputStyles() {
			if (!this.mounted || !window.getComputedStyle) {
				return;
			}
			var inputStyles = this.input && window.getComputedStyle(this.input);
			if (!inputStyles) {
				return;
			}
			copyStyles(inputStyles, this.sizer);
			if (this.placeHolderSizer) {
				copyStyles(inputStyles, this.placeHolderSizer);
			}
		}
	}, {
		key: 'updateInputWidth',
		value: function updateInputWidth() {
			if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = void 0;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.sizer.scrollWidth + 2;
			}
			// add extraWidth to the detected width. for number types, this defaults to 16 to allow for the stepper UI
			var extraWidth = this.props.type === 'number' && this.props.extraWidth === undefined ? 16 : parseInt(this.props.extraWidth) || 0;
			newInputWidth += extraWidth;
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		}
	}, {
		key: 'getInput',
		value: function getInput() {
			return this.input;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.input.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.input.blur();
		}
	}, {
		key: 'select',
		value: function select() {
			this.input.select();
		}
	}, {
		key: 'renderStyles',
		value: function renderStyles() {
			// this method injects styles to hide IE's clear indicator, which messes
			// with input size detection. the stylesheet is only injected when the
			// browser is IE, and can also be disabled by the `injectStyles` prop.
			var injectStyles = this.props.injectStyles;

			return isIE && injectStyles ? _react2.default.createElement('style', { dangerouslySetInnerHTML: {
					__html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}'
				} }) : null;
		}
	}, {
		key: 'render',
		value: function render() {
			var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
				if (previousValue !== null && previousValue !== undefined) {
					return previousValue;
				}
				return currentValue;
			});

			var wrapperStyle = _extends({}, this.props.style);
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';

			var inputStyle = _extends({
				boxSizing: 'content-box',
				width: this.state.inputWidth + 'px'
			}, this.props.inputStyle);

			var inputProps = _objectWithoutProperties(this.props, []);

			cleanInputProps(inputProps);
			inputProps.className = this.props.inputClassName;
			inputProps.id = this.state.inputId;
			inputProps.style = inputStyle;

			return _react2.default.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				this.renderStyles(),
				_react2.default.createElement('input', _extends({}, inputProps, { ref: this.inputRef })),
				_react2.default.createElement(
					'div',
					{ ref: this.sizerRef, style: sizerStyle },
					sizerValue
				),
				this.props.placeholder ? _react2.default.createElement(
					'div',
					{ ref: this.placeHolderSizerRef, style: sizerStyle },
					this.props.placeholder
				) : null
			);
		}
	}]);

	return AutosizeInput;
}(_react.Component);

AutosizeInput.propTypes = {
	className: _propTypes2.default.string, // className for the outer element
	defaultValue: _propTypes2.default.any, // default field value
	extraWidth: _propTypes2.default.oneOfType([// additional width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	id: _propTypes2.default.string, // id to use for the input, can be set for consistent snapshots
	injectStyles: _propTypes2.default.bool, // inject the custom stylesheet to hide clear UI, defaults to true
	inputClassName: _propTypes2.default.string, // className for the input element
	inputRef: _propTypes2.default.func, // ref callback for the input element
	inputStyle: _propTypes2.default.object, // css styles for the input element
	minWidth: _propTypes2.default.oneOfType([// minimum width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
	onChange: _propTypes2.default.func, // onChange handler: function(event) {}
	placeholder: _propTypes2.default.string, // placeholder text
	placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
	style: _propTypes2.default.object, // css styles for the outer element
	value: _propTypes2.default.any // field value
};
AutosizeInput.defaultProps = {
	minWidth: 1,
	injectStyles: true
};

exports.default = AutosizeInput;

/***/ }),

/***/ "./node_modules/react-select/dist/Select-d53e3329.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-select/dist/Select-d53e3329.browser.esm.js ***!
  \***********************************************************************/
/*! exports provided: S, a, c, d, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return mergeStyles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index-8b64410c.browser.esm.js */ "./node_modules/react-select/dist/index-8b64410c.browser.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");













var diacritics = [{
  base: 'A',
  letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
}, {
  base: 'AA',
  letters: "\uA732"
}, {
  base: 'AE',
  letters: "\xC6\u01FC\u01E2"
}, {
  base: 'AO',
  letters: "\uA734"
}, {
  base: 'AU',
  letters: "\uA736"
}, {
  base: 'AV',
  letters: "\uA738\uA73A"
}, {
  base: 'AY',
  letters: "\uA73C"
}, {
  base: 'B',
  letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
}, {
  base: 'C',
  letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
}, {
  base: 'D',
  letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"
}, {
  base: 'DZ',
  letters: "\u01F1\u01C4"
}, {
  base: 'Dz',
  letters: "\u01F2\u01C5"
}, {
  base: 'E',
  letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
}, {
  base: 'F',
  letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
}, {
  base: 'G',
  letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
}, {
  base: 'H',
  letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
}, {
  base: 'I',
  letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
}, {
  base: 'J',
  letters: "J\u24BF\uFF2A\u0134\u0248"
}, {
  base: 'K',
  letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
}, {
  base: 'L',
  letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
}, {
  base: 'LJ',
  letters: "\u01C7"
}, {
  base: 'Lj',
  letters: "\u01C8"
}, {
  base: 'M',
  letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
}, {
  base: 'N',
  letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
}, {
  base: 'NJ',
  letters: "\u01CA"
}, {
  base: 'Nj',
  letters: "\u01CB"
}, {
  base: 'O',
  letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
}, {
  base: 'OI',
  letters: "\u01A2"
}, {
  base: 'OO',
  letters: "\uA74E"
}, {
  base: 'OU',
  letters: "\u0222"
}, {
  base: 'P',
  letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
}, {
  base: 'Q',
  letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
}, {
  base: 'R',
  letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
}, {
  base: 'S',
  letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
}, {
  base: 'T',
  letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
}, {
  base: 'TZ',
  letters: "\uA728"
}, {
  base: 'U',
  letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
}, {
  base: 'V',
  letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
}, {
  base: 'VY',
  letters: "\uA760"
}, {
  base: 'W',
  letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
}, {
  base: 'X',
  letters: "X\u24CD\uFF38\u1E8A\u1E8C"
}, {
  base: 'Y',
  letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
}, {
  base: 'Z',
  letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
}, {
  base: 'a',
  letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
}, {
  base: 'aa',
  letters: "\uA733"
}, {
  base: 'ae',
  letters: "\xE6\u01FD\u01E3"
}, {
  base: 'ao',
  letters: "\uA735"
}, {
  base: 'au',
  letters: "\uA737"
}, {
  base: 'av',
  letters: "\uA739\uA73B"
}, {
  base: 'ay',
  letters: "\uA73D"
}, {
  base: 'b',
  letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
}, {
  base: 'c',
  letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
}, {
  base: 'd',
  letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
}, {
  base: 'dz',
  letters: "\u01F3\u01C6"
}, {
  base: 'e',
  letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
}, {
  base: 'f',
  letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
}, {
  base: 'g',
  letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
}, {
  base: 'h',
  letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
}, {
  base: 'hv',
  letters: "\u0195"
}, {
  base: 'i',
  letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
}, {
  base: 'j',
  letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
}, {
  base: 'k',
  letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
}, {
  base: 'l',
  letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
}, {
  base: 'lj',
  letters: "\u01C9"
}, {
  base: 'm',
  letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
}, {
  base: 'n',
  letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
}, {
  base: 'nj',
  letters: "\u01CC"
}, {
  base: 'o',
  letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
}, {
  base: 'oi',
  letters: "\u01A3"
}, {
  base: 'ou',
  letters: "\u0223"
}, {
  base: 'oo',
  letters: "\uA74F"
}, {
  base: 'p',
  letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
}, {
  base: 'q',
  letters: "q\u24E0\uFF51\u024B\uA757\uA759"
}, {
  base: 'r',
  letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
}, {
  base: 's',
  letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
}, {
  base: 't',
  letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
}, {
  base: 'tz',
  letters: "\uA729"
}, {
  base: 'u',
  letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
}, {
  base: 'v',
  letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
}, {
  base: 'vy',
  letters: "\uA761"
}, {
  base: 'w',
  letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
}, {
  base: 'x',
  letters: "x\u24E7\uFF58\u1E8B\u1E8D"
}, {
  base: 'y',
  letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
}, {
  base: 'z',
  letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
}];
var anyDiacritic = new RegExp('[' + diacritics.map(function (d) {
  return d.letters;
}).join('') + ']', 'g');
var diacriticToBase = {};

for (var i = 0; i < diacritics.length; i++) {
  var diacritic = diacritics[i];

  for (var j = 0; j < diacritic.letters.length; j++) {
    diacriticToBase[diacritic.letters[j]] = diacritic.base;
  }
}

var stripDiacritics = function stripDiacritics(str) {
  return str.replace(anyDiacritic, function (match) {
    return diacriticToBase[match];
  });
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var trimString = function trimString(str) {
  return str.replace(/^\s+|\s+$/g, '');
};

var defaultStringify = function defaultStringify(option) {
  return "".concat(option.label, " ").concat(option.value);
};

var createFilter = function createFilter(config) {
  return function (option, rawInput) {
    var _ignoreCase$ignoreAcc = _objectSpread({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: 'any'
    }, config),
        ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
        ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
        stringify = _ignoreCase$ignoreAcc.stringify,
        trim = _ignoreCase$ignoreAcc.trim,
        matchFrom = _ignoreCase$ignoreAcc.matchFrom;

    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);

    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }

    if (ignoreAccents) {
      input = stripDiacritics(input);
      candidate = stripDiacritics(candidate);
    }

    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref =  false ? undefined : {
  name: "1f43avz-a11yText-A11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFJIiwiZmlsZSI6IkExMXlUZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgdHlwZSBFbGVtZW50Q29uZmlnIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuXG4vLyBBc3Npc3RpdmUgdGV4dCB0byBkZXNjcmliZSB2aXN1YWwgZWxlbWVudHMuIEhpZGRlbiBmb3Igc2lnaHRlZCB1c2Vycy5cbmNvbnN0IEExMXlUZXh0ID0gKHByb3BzOiBFbGVtZW50Q29uZmlnPCdzcGFuJz4pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var A11yText = function A11yText(props) {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_9__["jsx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: _ref
  }, props));
};

function DummyInput(_ref) {
  var inProp = _ref.in,
      out = _ref.out,
      onExited = _ref.onExited,
      appear = _ref.appear,
      enter = _ref.enter,
      exit = _ref.exit,
      innerRef = _ref.innerRef,
      emotion = _ref.emotion,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_11__["default"])(_ref, ["in", "out", "onExited", "appear", "enter", "exit", "innerRef", "emotion"]);

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_9__["jsx"])("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: innerRef
  }, props, {
    css: /*#__PURE__*/Object(_emotion_react__WEBPACK_IMPORTED_MODULE_9__["css"])({
      label: 'dummyInput',
      // get rid of any default styles
      background: 0,
      border: 0,
      fontSize: 'inherit',
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: 'transparent',
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: 'relative',
      transform: 'scale(0)'
    },  false ? undefined : ";label:DummyInput;",  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJNIiwiZmlsZSI6IkR1bW15SW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIER1bW15SW5wdXQoe1xuICBpbjogaW5Qcm9wLFxuICBvdXQsXG4gIG9uRXhpdGVkLFxuICBhcHBlYXIsXG4gIGVudGVyLFxuICBleGl0LFxuICBpbm5lclJlZixcbiAgZW1vdGlvbixcbiAgLi4ucHJvcHNcbn06IGFueSkge1xuICByZXR1cm4gKFxuICAgIDxpbnB1dFxuICAgICAgcmVmPXtpbm5lclJlZn1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGNzcz17e1xuICAgICAgICBsYWJlbDogJ2R1bW15SW5wdXQnLFxuICAgICAgICAvLyBnZXQgcmlkIG9mIGFueSBkZWZhdWx0IHN0eWxlc1xuICAgICAgICBiYWNrZ3JvdW5kOiAwLFxuICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICAgIG91dGxpbmU6IDAsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgd2l0aG91dCBgd2lkdGhgIGJyb3dzZXJzIHdvbid0IGFsbG93IGZvY3VzXG4gICAgICAgIHdpZHRoOiAxLFxuXG4gICAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gZGVza3RvcFxuICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIG1vYmlsZSB3aGlsc3QgbWFpbnRhaW5pbmcgXCJzY3JvbGwgaW50byB2aWV3XCIgYmVoYXZpb3VyXG4gICAgICAgIGxlZnQ6IC0xMDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwKScsXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59XG4iXX0= */")
  }));
}

var cancelScroll = function cancelScroll(event) {
  event.preventDefault();
  event.stopPropagation();
};

function useScrollCapture(_ref) {
  var isEnabled = _ref.isEnabled,
      onBottomArrive = _ref.onBottomArrive,
      onBottomLeave = _ref.onBottomLeave,
      onTopArrive = _ref.onTopArrive,
      onTopLeave = _ref.onTopLeave;
  var isBottom = Object(react__WEBPACK_IMPORTED_MODULE_8__["useRef"])(false);
  var isTop = Object(react__WEBPACK_IMPORTED_MODULE_8__["useRef"])(false);
  var touchStart = Object(react__WEBPACK_IMPORTED_MODULE_8__["useRef"])(0);
  var scrollTarget = Object(react__WEBPACK_IMPORTED_MODULE_8__["useRef"])(null);
  var handleEventDelta = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function (event, delta) {
    // Reference should never be `null` at this point, but flow complains otherwise
    if (scrollTarget.current === null) return;
    var _scrollTarget$current = scrollTarget.current,
        scrollTop = _scrollTarget$current.scrollTop,
        scrollHeight = _scrollTarget$current.scrollHeight,
        clientHeight = _scrollTarget$current.clientHeight;
    var target = scrollTarget.current;
    var isDeltaPositive = delta > 0;
    var availableScroll = scrollHeight - clientHeight - scrollTop;
    var shouldCancelScroll = false; // reset bottom/top flags

    if (availableScroll > delta && isBottom.current) {
      if (onBottomLeave) onBottomLeave(event);
      isBottom.current = false;
    }

    if (isDeltaPositive && isTop.current) {
      if (onTopLeave) onTopLeave(event);
      isTop.current = false;
    } // bottom limit


    if (isDeltaPositive && delta > availableScroll) {
      if (onBottomArrive && !isBottom.current) {
        onBottomArrive(event);
      }

      target.scrollTop = scrollHeight;
      shouldCancelScroll = true;
      isBottom.current = true; // top limit
    } else if (!isDeltaPositive && -delta > scrollTop) {
      if (onTopArrive && !isTop.current) {
        onTopArrive(event);
      }

      target.scrollTop = 0;
      shouldCancelScroll = true;
      isTop.current = true;
    } // cancel scroll


    if (shouldCancelScroll) {
      cancelScroll(event);
    }
  }, []);
  var onWheel = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function (event) {
    handleEventDelta(event, event.deltaY);
  }, [handleEventDelta]);
  var onTouchStart = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function (event) {
    // set touch start so we can calculate touchmove delta
    touchStart.current = event.changedTouches[0].clientY;
  }, []);
  var onTouchMove = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function (event) {
    var deltaY = touchStart.current - event.changedTouches[0].clientY;
    handleEventDelta(event, deltaY);
  }, [handleEventDelta]);
  var startListening = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function (el) {
    // bail early if no element is available to attach to
    if (!el) return; // all the if statements are to appease Flow 😢

    if (typeof el.addEventListener === 'function') {
      el.addEventListener('wheel', onWheel, false);
    }

    if (typeof el.addEventListener === 'function') {
      el.addEventListener('touchstart', onTouchStart, false);
    }

    if (typeof el.addEventListener === 'function') {
      el.addEventListener('touchmove', onTouchMove, false);
    }
  }, [onTouchMove, onTouchStart, onWheel]);
  var stopListening = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function (el) {
    // bail early if no element is available to detach from
    if (!el) return; // all the if statements are to appease Flow 😢

    if (typeof el.removeEventListener === 'function') {
      el.removeEventListener('wheel', onWheel, false);
    }

    if (typeof el.removeEventListener === 'function') {
      el.removeEventListener('touchstart', onTouchStart, false);
    }

    if (typeof el.removeEventListener === 'function') {
      el.removeEventListener('touchmove', onTouchMove, false);
    }
  }, [onTouchMove, onTouchStart, onWheel]);
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    if (!isEnabled) return;
    var element = scrollTarget.current;
    startListening(element);
    return function () {
      stopListening(element);
    };
  }, [isEnabled, startListening, stopListening]);
  return function (element) {
    scrollTarget.current = element;
  };
}

var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
var LOCK_STYLES = {
  boxSizing: 'border-box',
  // account for possible declaration `width: 100%;` on body
  overflow: 'hidden',
  position: 'relative',
  height: '100%'
};

function preventTouchMove(e) {
  e.preventDefault();
}

function allowTouchMove(e) {
  e.stopPropagation();
}

function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;

  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
} // `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface


function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

var canUseDOM = !!( window.document && window.document.createElement);
var activeScrollLocks = 0;
var listenerOptions = {
  capture: false,
  passive: false
};
function useScrollLock(_ref) {
  var isEnabled = _ref.isEnabled,
      _ref$accountForScroll = _ref.accountForScrollbars,
      accountForScrollbars = _ref$accountForScroll === void 0 ? true : _ref$accountForScroll;
  var originalStyles = Object(react__WEBPACK_IMPORTED_MODULE_8__["useRef"])({});
  var scrollTarget = Object(react__WEBPACK_IMPORTED_MODULE_8__["useRef"])(null);
  var addScrollLock = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function (touchScrollTarget) {
    if (!canUseDOM) return;
    var target = document.body;
    var targetStyle = target && target.style;

    if (accountForScrollbars) {
      // store any styles already applied to the body
      STYLE_KEYS.forEach(function (key) {
        var val = targetStyle && targetStyle[key];
        originalStyles.current[key] = val;
      });
    } // apply the lock styles and padding if this is the first scroll lock


    if (accountForScrollbars && activeScrollLocks < 1) {
      var currentPadding = parseInt(originalStyles.current.paddingRight, 10) || 0;
      var clientWidth = document.body ? document.body.clientWidth : 0;
      var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
      Object.keys(LOCK_STYLES).forEach(function (key) {
        var val = LOCK_STYLES[key];

        if (targetStyle) {
          targetStyle[key] = val;
        }
      });

      if (targetStyle) {
        targetStyle.paddingRight = "".concat(adjustedPadding, "px");
      }
    } // account for touch devices


    if (target && isTouchDevice()) {
      // Mobile Safari ignores { overflow: hidden } declaration on the body.
      target.addEventListener('touchmove', preventTouchMove, listenerOptions); // Allow scroll on provided target

      if (touchScrollTarget) {
        touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, listenerOptions);
        touchScrollTarget.addEventListener('touchmove', allowTouchMove, listenerOptions);
      }
    } // increment active scroll locks


    activeScrollLocks += 1;
  }, []);
  var removeScrollLock = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function (touchScrollTarget) {
    if (!canUseDOM) return;
    var target = document.body;
    var targetStyle = target && target.style; // safely decrement active scroll locks

    activeScrollLocks = Math.max(activeScrollLocks - 1, 0); // reapply original body styles, if any

    if (accountForScrollbars && activeScrollLocks < 1) {
      STYLE_KEYS.forEach(function (key) {
        var val = originalStyles.current[key];

        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
    } // remove touch listeners


    if (target && isTouchDevice()) {
      target.removeEventListener('touchmove', preventTouchMove, listenerOptions);

      if (touchScrollTarget) {
        touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, listenerOptions);
        touchScrollTarget.removeEventListener('touchmove', allowTouchMove, listenerOptions);
      }
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    if (!isEnabled) return;
    var element = scrollTarget.current;
    addScrollLock(element);
    return function () {
      removeScrollLock(element);
    };
  }, [isEnabled, addScrollLock, removeScrollLock]);
  return function (element) {
    scrollTarget.current = element;
  };
}

function _EMOTION_STRINGIFIED_CSS_ERROR__$1() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var blurSelectInput = function blurSelectInput() {
  return document.activeElement && document.activeElement.blur();
};

var _ref2 =  false ? undefined : {
  name: "bp8cua-ScrollManager",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RVIiwiZmlsZSI6IlNjcm9sbE1hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdHlwZSBFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVNjcm9sbENhcHR1cmUgZnJvbSAnLi91c2VTY3JvbGxDYXB0dXJlJztcbmltcG9ydCB1c2VTY3JvbGxMb2NrIGZyb20gJy4vdXNlU2Nyb2xsTG9jayc7XG5cbnR5cGUgUmVmQ2FsbGJhY2s8VD4gPSAoVCB8IG51bGwpID0+IHZvaWQ7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiAoUmVmQ2FsbGJhY2s8SFRNTEVsZW1lbnQ+KSA9PiBFbGVtZW50PCo+LFxuICBsb2NrRW5hYmxlZDogYm9vbGVhbixcbiAgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW4sXG4gIG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MRWxlbWVudD4pID0+IHZvaWQsXG4gIG9uQm90dG9tTGVhdmU/OiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxFbGVtZW50PikgPT4gdm9pZCxcbiAgb25Ub3BBcnJpdmU/OiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxFbGVtZW50PikgPT4gdm9pZCxcbiAgb25Ub3BMZWF2ZT86IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB2b2lkLFxufTtcblxuY29uc3QgYmx1clNlbGVjdElucHV0ID0gKCkgPT5cbiAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Nyb2xsTWFuYWdlcih7XG4gIGNoaWxkcmVuLFxuICBsb2NrRW5hYmxlZCxcbiAgY2FwdHVyZUVuYWJsZWQgPSB0cnVlLFxuICBvbkJvdHRvbUFycml2ZSxcbiAgb25Cb3R0b21MZWF2ZSxcbiAgb25Ub3BBcnJpdmUsXG4gIG9uVG9wTGVhdmUsXG59OiBQcm9wcykge1xuICBjb25zdCBzZXRTY3JvbGxDYXB0dXJlVGFyZ2V0ID0gdXNlU2Nyb2xsQ2FwdHVyZSh7XG4gICAgaXNFbmFibGVkOiBjYXB0dXJlRW5hYmxlZCxcbiAgICBvbkJvdHRvbUFycml2ZSxcbiAgICBvbkJvdHRvbUxlYXZlLFxuICAgIG9uVG9wQXJyaXZlLFxuICAgIG9uVG9wTGVhdmUsXG4gIH0pO1xuICBjb25zdCBzZXRTY3JvbGxMb2NrVGFyZ2V0ID0gdXNlU2Nyb2xsTG9jayh7IGlzRW5hYmxlZDogbG9ja0VuYWJsZWQgfSk7XG5cbiAgY29uc3QgdGFyZ2V0UmVmID0gZWxlbWVudCA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};

function ScrollManager(_ref) {
  var children = _ref.children,
      lockEnabled = _ref.lockEnabled,
      _ref$captureEnabled = _ref.captureEnabled,
      captureEnabled = _ref$captureEnabled === void 0 ? true : _ref$captureEnabled,
      onBottomArrive = _ref.onBottomArrive,
      onBottomLeave = _ref.onBottomLeave,
      onTopArrive = _ref.onTopArrive,
      onTopLeave = _ref.onTopLeave;
  var setScrollCaptureTarget = useScrollCapture({
    isEnabled: captureEnabled,
    onBottomArrive: onBottomArrive,
    onBottomLeave: onBottomLeave,
    onTopArrive: onTopArrive,
    onTopLeave: onTopLeave
  });
  var setScrollLockTarget = useScrollLock({
    isEnabled: lockEnabled
  });

  var targetRef = function targetRef(element) {
    setScrollCaptureTarget(element);
    setScrollLockTarget(element);
  };

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_9__["jsx"])(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, lockEnabled && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    onClick: blurSelectInput,
    css: _ref2
  }), children(targetRef));
}

var instructionsAriaMessage = function instructionsAriaMessage(event) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isSearchable = context.isSearchable,
      isMulti = context.isMulti,
      label = context.label,
      isDisabled = context.isDisabled,
      tabSelectsValue = context.tabSelectsValue;

  switch (event) {
    case 'menu':
      return "Use Up and Down to choose options".concat(isDisabled ? '' : ', press Enter to select the currently focused option', ", press Escape to exit the menu").concat(tabSelectsValue ? ', press Tab to select the option and exit the menu' : '', ".");

    case 'input':
      return "".concat(label ? label : 'Select', " is focused ").concat(isSearchable ? ',type to refine list' : '', ", press Down to open the menu, ").concat(isMulti ? ' press left to focus selected values' : '');

    case 'value':
      return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
  }
};
var valueEventAriaMessage = function valueEventAriaMessage(event, context) {
  var value = context.value,
      isDisabled = context.isDisabled;
  if (!value) return;

  switch (event) {
    case 'deselect-option':
    case 'pop-value':
    case 'remove-value':
      return "option ".concat(value, ", deselected.");

    case 'select-option':
      return isDisabled ? "option ".concat(value, " is disabled. Select another option.") : "option ".concat(value, ", selected.");
  }
};
var valueFocusAriaMessage = function valueFocusAriaMessage(_ref) {
  var focusedValue = _ref.focusedValue,
      getOptionLabel = _ref.getOptionLabel,
      selectValue = _ref.selectValue;
  return "value ".concat(getOptionLabel(focusedValue), " focused, ").concat(selectValue.indexOf(focusedValue) + 1, " of ").concat(selectValue.length, ".");
};
var optionFocusAriaMessage = function optionFocusAriaMessage(_ref2) {
  var focusedOption = _ref2.focusedOption,
      getOptionLabel = _ref2.getOptionLabel,
      options = _ref2.options;
  return "option ".concat(getOptionLabel(focusedOption), " focused").concat(focusedOption.isDisabled ? ' disabled' : '', ", ").concat(options.indexOf(focusedOption) + 1, " of ").concat(options.length, ".");
};
var resultsAriaMessage = function resultsAriaMessage(_ref3) {
  var inputValue = _ref3.inputValue,
      screenReaderMessage = _ref3.screenReaderMessage;
  return "".concat(screenReaderMessage).concat(inputValue ? ' for search term ' + inputValue : '', ".");
};

var formatGroupLabel = function formatGroupLabel(group) {
  return group.label;
};
var getOptionLabel = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue = function getOptionValue(option) {
  return option.value;
};
var isOptionDisabled = function isOptionDisabled(option) {
  return !!option.isDisabled;
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var defaultStyles = {
  clearIndicator: _index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["c"],
  container: _index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["a"],
  control: _index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["b"],
  dropdownIndicator: _index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["d"],
  group: _index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["g"],
  groupHeading: _index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["e"],
  indicatorsContainer: _index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["i"],
  indicatorSeparator: _index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["f"],
  input: _index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["h"],
  loadingIndicator: _index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["l"],
  loadingMessage: _index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["j"],
  menu: _index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["m"],
  menuList: _index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["k"],
  menuPortal: _index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["n"],
  multiValue: _index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["o"],
  multiValueLabel: _index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["p"],
  multiValueRemove: _index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["q"],
  noOptionsMessage: _index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["r"],
  option: _index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["s"],
  placeholder: _index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["t"],
  singleValue: _index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["u"],
  valueContainer: _index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["v"]
}; // Merge Utility
// Allows consumers to extend a base Select with additional styles

function mergeStyles(source) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // initialize with source styles
  var styles = _objectSpread$1({}, source); // massage in target styles


  Object.keys(target).forEach(function (key) {
    if (source[key]) {
      styles[key] = function (rsCss, props) {
        return target[key](source[key](rsCss, props), props);
      };
    } else {
      styles[key] = target[key];
    }
  });
  return styles;
}

var colors = {
  primary: '#2684FF',
  primary75: '#4C9AFF',
  primary50: '#B2D4FF',
  primary25: '#DEEBFF',
  danger: '#DE350B',
  dangerLight: '#FFBDAD',
  neutral0: 'hsl(0, 0%, 100%)',
  neutral5: 'hsl(0, 0%, 95%)',
  neutral10: 'hsl(0, 0%, 90%)',
  neutral20: 'hsl(0, 0%, 80%)',
  neutral30: 'hsl(0, 0%, 70%)',
  neutral40: 'hsl(0, 0%, 60%)',
  neutral50: 'hsl(0, 0%, 50%)',
  neutral60: 'hsl(0, 0%, 40%)',
  neutral70: 'hsl(0, 0%, 30%)',
  neutral80: 'hsl(0, 0%, 20%)',
  neutral90: 'hsl(0, 0%, 10%)'
};
var borderRadius = 4; // Used to calculate consistent margin/padding on elements

var baseUnit = 4; // The minimum height of the control

var controlHeight = 38; // The amount of space between the control and menu */

var menuGutter = baseUnit * 2;
var spacing = {
  baseUnit: baseUnit,
  controlHeight: controlHeight,
  menuGutter: menuGutter
};
var defaultTheme = {
  borderRadius: borderRadius,
  colors: colors,
  spacing: spacing
};

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var defaultProps = {
  backspaceRemovesValue: true,
  blurInputOnSelect: Object(_index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["w"])(),
  captureMenuScroll: !Object(_index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["w"])(),
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel: formatGroupLabel,
  getOptionLabel: getOptionLabel,
  getOptionValue: getOptionValue,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled: isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return 'Loading...';
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !Object(_index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["x"])(),
  noOptionsMessage: function noOptionsMessage() {
    return 'No options';
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: 'Select...',
  screenReaderStatus: function screenReaderStatus(_ref) {
    var count = _ref.count;
    return "".concat(count, " result").concat(count !== 1 ? 's' : '', " available");
  },
  styles: {},
  tabIndex: '0',
  tabSelectsValue: true
};

function toCategorizedOption(props, option, selectValue, index) {
  var isDisabled = _isOptionDisabled(props, option, selectValue);

  var isSelected = _isOptionSelected(props, option, selectValue);

  var label = getOptionLabel$1(props, option);
  var value = getOptionValue$1(props, option);
  return {
    type: 'option',
    data: option,
    isDisabled: isDisabled,
    isSelected: isSelected,
    label: label,
    value: value,
    index: index
  };
}

function buildCategorizedOptions(props, selectValue) {
  return props.options.map(function (groupOrOption, groupOrOptionIndex) {
    if (groupOrOption.options) {
      var categorizedOptions = groupOrOption.options.map(function (option, optionIndex) {
        return toCategorizedOption(props, option, selectValue, optionIndex);
      }).filter(function (categorizedOption) {
        return isFocusable(props, categorizedOption);
      });
      return categorizedOptions.length > 0 ? {
        type: 'group',
        data: groupOrOption,
        options: categorizedOptions,
        index: groupOrOptionIndex
      } : undefined;
    }

    var categorizedOption = toCategorizedOption(props, groupOrOption, selectValue, groupOrOptionIndex);
    return isFocusable(props, categorizedOption) ? categorizedOption : undefined;
  }) // Flow limitation (see https://github.com/facebook/flow/issues/1414)
  .filter(function (categorizedOption) {
    return !!categorizedOption;
  });
}

function buildFocusableOptionsFromCategorizedOptions(categorizedOptions) {
  return categorizedOptions.reduce(function (optionsAccumulator, categorizedOption) {
    if (categorizedOption.type === 'group') {
      optionsAccumulator.push.apply(optionsAccumulator, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__["default"])(categorizedOption.data.options));
    } else {
      optionsAccumulator.push(categorizedOption.data);
    }

    return optionsAccumulator;
  }, []);
}

function buildFocusableOptions(props, selectValue) {
  return buildFocusableOptionsFromCategorizedOptions(buildCategorizedOptions(props, selectValue));
}

function isFocusable(props, categorizedOption) {
  var _props$inputValue = props.inputValue,
      inputValue = _props$inputValue === void 0 ? '' : _props$inputValue;
  var data = categorizedOption.data,
      isSelected = categorizedOption.isSelected,
      label = categorizedOption.label,
      value = categorizedOption.value;
  return (!shouldHideSelectedOptions(props) || !isSelected) && _filterOption(props, {
    label: label,
    value: value,
    data: data
  }, inputValue);
}

function getNextFocusedValue(state, nextSelectValue) {
  var focusedValue = state.focusedValue,
      lastSelectValue = state.selectValue;
  var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);

  if (lastFocusedIndex > -1) {
    var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);

    if (nextFocusedIndex > -1) {
      // the focused value is still in the selectValue, return it
      return focusedValue;
    } else if (lastFocusedIndex < nextSelectValue.length) {
      // the focusedValue is not present in the next selectValue array by
      // reference, so return the new value at the same index
      return nextSelectValue[lastFocusedIndex];
    }
  }

  return null;
}

function getNextFocusedOption(state, options) {
  var lastFocusedOption = state.focusedOption;
  return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
}

var getOptionLabel$1 = function getOptionLabel(props, data) {
  return props.getOptionLabel(data);
};

var getOptionValue$1 = function getOptionValue(props, data) {
  return props.getOptionValue(data);
};

function _isOptionDisabled(props, option, selectValue) {
  return typeof props.isOptionDisabled === 'function' ? props.isOptionDisabled(option, selectValue) : false;
}

function _isOptionSelected(props, option, selectValue) {
  if (selectValue.indexOf(option) > -1) return true;

  if (typeof props.isOptionSelected === 'function') {
    return props.isOptionSelected(option, selectValue);
  }

  var candidate = getOptionValue$1(props, option);
  return selectValue.some(function (i) {
    return getOptionValue$1(props, i) === candidate;
  });
}

function _filterOption(props, option, inputValue) {
  return props.filterOption ? props.filterOption(option, inputValue) : true;
}

var shouldHideSelectedOptions = function shouldHideSelectedOptions(props) {
  var hideSelectedOptions = props.hideSelectedOptions,
      isMulti = props.isMulti;
  if (hideSelectedOptions === undefined) return isMulti;
  return hideSelectedOptions;
};

var instanceId = 1;

var Select = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Select, _Component);

  var _super = _createSuper(Select);

  // Misc. Instance Properties
  // ------------------------------
  // TODO
  // Refs
  // ------------------------------
  // Lifecycle
  // ------------------------------
  function Select(_props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Select);

    _this = _super.call(this, _props);
    _this.state = {
      ariaLiveSelection: '',
      ariaLiveContext: '',
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      selectValue: [],
      clearFocusValueOnUpdate: false,
      inputIsHiddenAfterUpdate: undefined,
      prevProps: undefined
    };
    _this.blockOptionHover = false;
    _this.isComposing = false;
    _this.commonProps = void 0;
    _this.initialTouchX = 0;
    _this.initialTouchY = 0;
    _this.instancePrefix = '';
    _this.openAfterFocus = false;
    _this.scrollToFocusedOptionOnUpdate = false;
    _this.userIsDragging = void 0;
    _this.controlRef = null;

    _this.getControlRef = function (ref) {
      _this.controlRef = ref;
    };

    _this.focusedOptionRef = null;

    _this.getFocusedOptionRef = function (ref) {
      _this.focusedOptionRef = ref;
    };

    _this.menuListRef = null;

    _this.getMenuListRef = function (ref) {
      _this.menuListRef = ref;
    };

    _this.inputRef = null;

    _this.getInputRef = function (ref) {
      _this.inputRef = ref;
    };

    _this.focus = _this.focusInput;
    _this.blur = _this.blurInput;

    _this.onChange = function (newValue, actionMeta) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          name = _this$props.name;
      onChange(newValue, _objectSpread$2(_objectSpread$2({}, actionMeta), {}, {
        name: name
      }));
    };

    _this.setValue = function (newValue) {
      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'set-value';
      var option = arguments.length > 2 ? arguments[2] : undefined;
      var _this$props2 = _this.props,
          closeMenuOnSelect = _this$props2.closeMenuOnSelect,
          isMulti = _this$props2.isMulti;

      _this.onInputChange('', {
        action: 'set-value'
      });

      if (closeMenuOnSelect) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });

        _this.onMenuClose();
      } // when the select value should change, we should reset focusedValue


      _this.setState({
        clearFocusValueOnUpdate: true
      });

      _this.onChange(newValue, {
        action: action,
        option: option
      });
    };

    _this.selectOption = function (newValue) {
      var _this$props3 = _this.props,
          blurInputOnSelect = _this$props3.blurInputOnSelect,
          isMulti = _this$props3.isMulti;
      var selectValue = _this.state.selectValue;

      if (isMulti) {
        if (_this.isOptionSelected(newValue, selectValue)) {
          var candidate = _this.getOptionValue(newValue);

          _this.setValue(selectValue.filter(function (i) {
            return _this.getOptionValue(i) !== candidate;
          }), 'deselect-option', newValue);

          _this.announceAriaLiveSelection({
            event: 'deselect-option',
            context: {
              value: _this.getOptionLabel(newValue)
            }
          });
        } else {
          if (!_this.isOptionDisabled(newValue, selectValue)) {
            _this.setValue([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__["default"])(selectValue), [newValue]), 'select-option', newValue);

            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue)
              }
            });
          } else {
            // announce that option is disabled
            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue),
                isDisabled: true
              }
            });
          }
        }
      } else {
        if (!_this.isOptionDisabled(newValue, selectValue)) {
          _this.setValue(newValue, 'select-option');

          _this.announceAriaLiveSelection({
            event: 'select-option',
            context: {
              value: _this.getOptionLabel(newValue)
            }
          });
        } else {
          // announce that option is disabled
          _this.announceAriaLiveSelection({
            event: 'select-option',
            context: {
              value: _this.getOptionLabel(newValue),
              isDisabled: true
            }
          });
        }
      }

      if (blurInputOnSelect) {
        _this.blurInput();
      }
    };

    _this.removeValue = function (removedValue) {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;

      var candidate = _this.getOptionValue(removedValue);

      var newValueArray = selectValue.filter(function (i) {
        return _this.getOptionValue(i) !== candidate;
      });
      var newValue = isMulti ? newValueArray : newValueArray.length > 0 ? newValueArray[0] : null;

      _this.onChange(newValue, {
        action: 'remove-value',
        removedValue: removedValue
      });

      _this.announceAriaLiveSelection({
        event: 'remove-value',
        context: {
          value: removedValue ? _this.getOptionLabel(removedValue) : ''
        }
      });

      _this.focusInput();
    };

    _this.clearValue = function () {
      _this.onChange(_this.props.isMulti ? [] : null, {
        action: 'clear'
      });
    };

    _this.popValue = function () {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];
      var newValueArray = selectValue.slice(0, selectValue.length - 1);
      var newValue = isMulti ? newValueArray : newValueArray.length > 0 ? newValueArray[0] : null;

      _this.announceAriaLiveSelection({
        event: 'pop-value',
        context: {
          value: lastSelectedValue ? _this.getOptionLabel(lastSelectedValue) : ''
        }
      });

      _this.onChange(newValue, {
        action: 'pop-value',
        removedValue: lastSelectedValue
      });
    };

    _this.getValue = function () {
      return _this.state.selectValue;
    };

    _this.cx = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["y"].apply(void 0, [_this.props.classNamePrefix].concat(args));
    };

    _this.getOptionLabel = function (data) {
      return getOptionLabel$1(_this.props, data);
    };

    _this.getOptionValue = function (data) {
      return getOptionValue$1(_this.props, data);
    };

    _this.getStyles = function (key, props) {
      var base = defaultStyles[key](props);
      base.boxSizing = 'border-box';
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    };

    _this.getElementId = function (element) {
      return "".concat(_this.instancePrefix, "-").concat(element);
    };

    _this.getComponents = function () {
      return Object(_index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["z"])(_this.props);
    };

    _this.buildCategorizedOptions = function () {
      return buildCategorizedOptions(_this.props, _this.state.selectValue);
    };

    _this.getCategorizedOptions = function () {
      return _this.props.menuIsOpen ? _this.buildCategorizedOptions() : [];
    };

    _this.buildFocusableOptions = function () {
      return buildFocusableOptionsFromCategorizedOptions(_this.buildCategorizedOptions());
    };

    _this.getFocusableOptions = function () {
      return _this.props.menuIsOpen ? _this.buildFocusableOptions() : [];
    };

    _this.announceAriaLiveSelection = function (_ref2) {
      var event = _ref2.event,
          context = _ref2.context;

      _this.setState({
        ariaLiveSelection: valueEventAriaMessage(event, context)
      });
    };

    _this.announceAriaLiveContext = function (_ref3) {
      var event = _ref3.event,
          context = _ref3.context;

      _this.setState({
        ariaLiveContext: instructionsAriaMessage(event, _objectSpread$2(_objectSpread$2({}, context), {}, {
          label: _this.props['aria-label']
        }))
      });
    };

    _this.onMenuMouseDown = function (event) {
      if (event.button !== 0) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();

      _this.focusInput();
    };

    _this.onMenuMouseMove = function (event) {
      _this.blockOptionHover = false;
    };

    _this.onControlMouseDown = function (event) {
      var openMenuOnClick = _this.props.openMenuOnClick;

      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }

        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu('first');
        }
      } else {
        if ( // $FlowFixMe
        event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
          _this.onMenuClose();
        }
      }

      if ( // $FlowFixMe
      event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
        event.preventDefault();
      }
    };

    _this.onDropdownIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      if (_this.props.isDisabled) return;
      var _this$props4 = _this.props,
          isMulti = _this$props4.isMulti,
          menuIsOpen = _this$props4.menuIsOpen;

      _this.focusInput();

      if (menuIsOpen) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });

        _this.onMenuClose();
      } else {
        _this.openMenu('first');
      }

      event.preventDefault();
      event.stopPropagation();
    };

    _this.onClearIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      _this.clearValue();

      event.stopPropagation();
      _this.openAfterFocus = false;

      if (event.type === 'touchend') {
        _this.focusInput();
      } else {
        setTimeout(function () {
          return _this.focusInput();
        });
      }
    };

    _this.onScroll = function (event) {
      if (typeof _this.props.closeMenuOnScroll === 'boolean') {
        if (event.target instanceof HTMLElement && Object(_index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["A"])(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === 'function') {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    };

    _this.onCompositionStart = function () {
      _this.isComposing = true;
    };

    _this.onCompositionEnd = function () {
      _this.isComposing = false;
    };

    _this.onTouchStart = function (_ref4) {
      var touches = _ref4.touches;
      var touch = touches && touches.item(0);

      if (!touch) {
        return;
      }

      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    };

    _this.onTouchMove = function (_ref5) {
      var touches = _ref5.touches;
      var touch = touches && touches.item(0);

      if (!touch) {
        return;
      }

      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    };

    _this.onTouchEnd = function (event) {
      if (_this.userIsDragging) return; // close the menu if the user taps outside
      // we're checking on event.target here instead of event.currentTarget, because we want to assert information
      // on events on child elements, not the document (which we've attached this handler to).

      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      } // reset move vars


      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    };

    _this.onControlTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onControlMouseDown(event);
    };

    _this.onClearIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onClearIndicatorMouseDown(event);
    };

    _this.onDropdownIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onDropdownIndicatorMouseDown(event);
    };

    _this.handleInputChange = function (event) {
      var inputValue = event.currentTarget.value;

      _this.setState({
        inputIsHiddenAfterUpdate: false
      });

      _this.onInputChange(inputValue, {
        action: 'input-change'
      });

      if (!_this.props.menuIsOpen) {
        _this.onMenuOpen();
      }
    };

    _this.onInputFocus = function (event) {
      var _this$props5 = _this.props,
          isSearchable = _this$props5.isSearchable,
          isMulti = _this$props5.isMulti;

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }

      _this.setState({
        inputIsHiddenAfterUpdate: false
      });

      _this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });

      _this.setState({
        isFocused: true
      });

      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu('first');
      }

      _this.openAfterFocus = false;
    };

    _this.onInputBlur = function (event) {
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();

        return;
      }

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }

      _this.onInputChange('', {
        action: 'input-blur'
      });

      _this.onMenuClose();

      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    };

    _this.onOptionHover = function (focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }

      _this.setState({
        focusedOption: focusedOption
      });
    };

    _this.shouldHideSelectedOptions = function () {
      return shouldHideSelectedOptions(_this.props);
    };

    _this.onKeyDown = function (event) {
      var _this$props6 = _this.props,
          isMulti = _this$props6.isMulti,
          backspaceRemovesValue = _this$props6.backspaceRemovesValue,
          escapeClearsValue = _this$props6.escapeClearsValue,
          inputValue = _this$props6.inputValue,
          isClearable = _this$props6.isClearable,
          isDisabled = _this$props6.isDisabled,
          menuIsOpen = _this$props6.menuIsOpen,
          onKeyDown = _this$props6.onKeyDown,
          tabSelectsValue = _this$props6.tabSelectsValue,
          openMenuOnFocus = _this$props6.openMenuOnFocus;
      var _this$state = _this.state,
          focusedOption = _this$state.focusedOption,
          focusedValue = _this$state.focusedValue,
          selectValue = _this$state.selectValue;
      if (isDisabled) return;

      if (typeof onKeyDown === 'function') {
        onKeyDown(event);

        if (event.defaultPrevented) {
          return;
        }
      } // Block option hover events when the user has just pressed a key


      _this.blockOptionHover = true;

      switch (event.key) {
        case 'ArrowLeft':
          if (!isMulti || inputValue) return;

          _this.focusValue('previous');

          break;

        case 'ArrowRight':
          if (!isMulti || inputValue) return;

          _this.focusValue('next');

          break;

        case 'Delete':
        case 'Backspace':
          if (inputValue) return;

          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue) return;

            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }

          break;

        case 'Tab':
          if (_this.isComposing) return;

          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || // don't capture the event if the menu opens on focus and the focused
          // option is already selected; it breaks the flow of navigation
          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }

          _this.selectOption(focusedOption);

          break;

        case 'Enter':
          if (event.keyCode === 229) {
            // ignore the keydown event from an Input Method Editor(IME)
            // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
            break;
          }

          if (menuIsOpen) {
            if (!focusedOption) return;
            if (_this.isComposing) return;

            _this.selectOption(focusedOption);

            break;
          }

          return;

        case 'Escape':
          if (menuIsOpen) {
            _this.setState({
              inputIsHiddenAfterUpdate: false
            });

            _this.onInputChange('', {
              action: 'menu-close'
            });

            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }

          break;

        case ' ':
          // space
          if (inputValue) {
            return;
          }

          if (!menuIsOpen) {
            _this.openMenu('first');

            break;
          }

          if (!focusedOption) return;

          _this.selectOption(focusedOption);

          break;

        case 'ArrowUp':
          if (menuIsOpen) {
            _this.focusOption('up');
          } else {
            _this.openMenu('last');
          }

          break;

        case 'ArrowDown':
          if (menuIsOpen) {
            _this.focusOption('down');
          } else {
            _this.openMenu('first');
          }

          break;

        case 'PageUp':
          if (!menuIsOpen) return;

          _this.focusOption('pageup');

          break;

        case 'PageDown':
          if (!menuIsOpen) return;

          _this.focusOption('pagedown');

          break;

        case 'Home':
          if (!menuIsOpen) return;

          _this.focusOption('first');

          break;

        case 'End':
          if (!menuIsOpen) return;

          _this.focusOption('last');

          break;

        default:
          return;
      }

      event.preventDefault();
    };

    _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);
    _this.state.selectValue = Object(_index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["B"])(_props.value);
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();

      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        // Listen to all scroll events, and filter them out inside of 'onScroll'
        document.addEventListener('scroll', this.onScroll, true);
      }

      if (this.props.autoFocus) {
        this.focusInput();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props7 = this.props,
          isDisabled = _this$props7.isDisabled,
          menuIsOpen = _this$props7.menuIsOpen;
      var isFocused = this.state.isFocused;

      if ( // ensure focus is restored correctly when the control becomes enabled
      isFocused && !isDisabled && prevProps.isDisabled || // ensure focus is on the Input when the menu opens
      isFocused && menuIsOpen && !prevProps.menuIsOpen) {
        this.focusInput();
      }

      if (isFocused && isDisabled && !prevProps.isDisabled) {
        // ensure select state gets blurred in case Select is programatically disabled while focused
        this.setState({
          isFocused: false
        }, this.onMenuClose);
      } // scroll the focused option into view if necessary


      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        Object(_index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["C"])(this.menuListRef, this.focusedOptionRef);
        this.scrollToFocusedOptionOnUpdate = false;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener('scroll', this.onScroll, true);
    } // ==============================
    // Consumer Handlers
    // ==============================

  }, {
    key: "onMenuOpen",
    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function onMenuClose() {
      var _this$props8 = this.props,
          isSearchable = _this$props8.isSearchable,
          isMulti = _this$props8.isMulti;
      this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });
      this.onInputChange('', {
        action: 'menu-close'
      });
      this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    } // ==============================
    // Methods
    // ==============================

  }, {
    key: "focusInput",
    value: function focusInput() {
      if (!this.inputRef) return;
      this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function blurInput() {
      if (!this.inputRef) return;
      this.inputRef.blur();
    } // aliased for consumers

  }, {
    key: "openMenu",
    value: function openMenu(focusOption) {
      var _this2 = this;

      var _this$state2 = this.state,
          selectValue = _this$state2.selectValue,
          isFocused = _this$state2.isFocused;
      var focusableOptions = this.buildFocusableOptions();
      var _this$props9 = this.props,
          isMulti = _this$props9.isMulti,
          tabSelectsValue = _this$props9.tabSelectsValue;
      var openAtIndex = focusOption === 'first' ? 0 : focusableOptions.length - 1;

      if (!isMulti) {
        var selectedIndex = focusableOptions.indexOf(selectValue[0]);

        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      } // only scroll if the menu isn't already open


      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
      this.setState({
        inputIsHiddenAfterUpdate: false,
        focusedValue: null,
        focusedOption: focusableOptions[openAtIndex]
      }, function () {
        _this2.onMenuOpen();

        _this2.announceAriaLiveContext({
          event: 'menu',
          context: {
            tabSelectsValue: tabSelectsValue
          }
        });
      });
    }
  }, {
    key: "focusValue",
    value: function focusValue(direction) {
      var _this$props10 = this.props,
          isMulti = _this$props10.isMulti,
          isSearchable = _this$props10.isSearchable;
      var _this$state3 = this.state,
          selectValue = _this$state3.selectValue,
          focusedValue = _this$state3.focusedValue; // Only multiselects support value focusing

      if (!isMulti) return;
      this.setState({
        focusedOption: null
      });
      var focusedIndex = selectValue.indexOf(focusedValue);

      if (!focusedValue) {
        focusedIndex = -1;
        this.announceAriaLiveContext({
          event: 'value'
        });
      }

      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length) return;

      switch (direction) {
        case 'previous':
          if (focusedIndex === 0) {
            // don't cycle from the start to the end
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            // if nothing is focused, focus the last value first
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }

          break;

        case 'next':
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }

          break;
      }

      if (nextFocus === -1) {
        this.announceAriaLiveContext({
          event: 'input',
          context: {
            isSearchable: isSearchable,
            isMulti: isMulti
          }
        });
      }

      this.setState({
        inputIsHidden: nextFocus !== -1,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: "focusOption",
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'first';
      var _this$props11 = this.props,
          pageSize = _this$props11.pageSize,
          tabSelectsValue = _this$props11.tabSelectsValue;
      var _this$state4 = this.state,
          focusedOption = _this$state4.focusedOption,
          selectValue = _this$state4.selectValue;
      var options = this.getFocusableOptions();
      if (!options.length) return;
      var nextFocus = 0; // handles 'first'

      var focusedIndex = options.indexOf(focusedOption);

      if (!focusedOption) {
        focusedIndex = -1;
        this.announceAriaLiveContext({
          event: 'menu',
          context: {
            tabSelectsValue: tabSelectsValue
          }
        });
      }

      if (direction === 'up') {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
      } else if (direction === 'down') {
        nextFocus = (focusedIndex + 1) % options.length;
      } else if (direction === 'pageup') {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0) nextFocus = 0;
      } else if (direction === 'pagedown') {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options.length - 1) nextFocus = options.length - 1;
      } else if (direction === 'last') {
        nextFocus = options.length - 1;
      }

      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options[nextFocus],
        focusedValue: null
      });
      this.announceAriaLiveContext({
        event: 'menu',
        context: {
          isDisabled: this.isOptionDisabled(options[nextFocus], selectValue),
          tabSelectsValue: tabSelectsValue
        }
      });
    }
  }, {
    key: "getTheme",
    // ==============================
    // Getters
    // ==============================
    value: function getTheme() {
      // Use the default theme if there are no customizations.
      if (!this.props.theme) {
        return defaultTheme;
      } // If the theme prop is a function, assume the function
      // knows how to merge the passed-in default theme with
      // its own modifications.


      if (typeof this.props.theme === 'function') {
        return this.props.theme(defaultTheme);
      } // Otherwise, if a plain theme object was passed in,
      // overlay it with the default theme.


      return _objectSpread$2(_objectSpread$2({}, defaultTheme), this.props.theme);
    }
  }, {
    key: "getCommonProps",
    value: function getCommonProps() {
      var clearValue = this.clearValue,
          cx = this.cx,
          getStyles = this.getStyles,
          getValue = this.getValue,
          setValue = this.setValue,
          selectOption = this.selectOption,
          props = this.props;
      var isMulti = props.isMulti,
          isRtl = props.isRtl,
          options = props.options;
      var hasValue = this.hasValue();
      return {
        cx: cx,
        clearValue: clearValue,
        getStyles: getStyles,
        getValue: getValue,
        hasValue: hasValue,
        isMulti: isMulti,
        isRtl: isRtl,
        options: options,
        selectOption: selectOption,
        setValue: setValue,
        selectProps: props,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      var selectValue = this.state.selectValue;
      return selectValue.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function hasOptions() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "countOptions",
    value: function countOptions() {
      return this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function isClearable() {
      var _this$props12 = this.props,
          isClearable = _this$props12.isClearable,
          isMulti = _this$props12.isMulti; // single select, by default, IS NOT clearable
      // multi select, by default, IS clearable

      if (isClearable === undefined) return isMulti;
      return isClearable;
    }
  }, {
    key: "isOptionDisabled",
    value: function isOptionDisabled(option, selectValue) {
      return _isOptionDisabled(this.props, option, selectValue);
    }
  }, {
    key: "isOptionSelected",
    value: function isOptionSelected(option, selectValue) {
      return _isOptionSelected(this.props, option, selectValue);
    }
  }, {
    key: "filterOption",
    value: function filterOption(option, inputValue) {
      return _filterOption(this.props, option, inputValue);
    }
  }, {
    key: "formatOptionLabel",
    value: function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === 'function') {
        var inputValue = this.props.inputValue;
        var selectValue = this.state.selectValue;
        return this.props.formatOptionLabel(data, {
          context: context,
          inputValue: inputValue,
          selectValue: selectValue
        });
      } else {
        return this.getOptionLabel(data);
      }
    }
  }, {
    key: "formatGroupLabel",
    value: function formatGroupLabel(data) {
      return this.props.formatGroupLabel(data);
    } // ==============================
    // Mouse Handlers
    // ==============================

  }, {
    key: "startListeningComposition",
    // ==============================
    // Composition Handlers
    // ==============================
    value: function startListeningComposition() {
      if (document && document.addEventListener) {
        document.addEventListener('compositionstart', this.onCompositionStart, false);
        document.addEventListener('compositionend', this.onCompositionEnd, false);
      }
    }
  }, {
    key: "stopListeningComposition",
    value: function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener('compositionstart', this.onCompositionStart);
        document.removeEventListener('compositionend', this.onCompositionEnd);
      }
    }
  }, {
    key: "startListeningToTouch",
    // ==============================
    // Touch Handlers
    // ==============================
    value: function startListeningToTouch() {
      if (document && document.addEventListener) {
        document.addEventListener('touchstart', this.onTouchStart, false);
        document.addEventListener('touchmove', this.onTouchMove, false);
        document.addEventListener('touchend', this.onTouchEnd, false);
      }
    }
  }, {
    key: "stopListeningToTouch",
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener('touchstart', this.onTouchStart);
        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchend', this.onTouchEnd);
      }
    }
  }, {
    key: "constructAriaLiveMessage",
    // ==============================
    // Renderers
    // ==============================
    value: function constructAriaLiveMessage() {
      var _this$state5 = this.state,
          ariaLiveContext = _this$state5.ariaLiveContext,
          selectValue = _this$state5.selectValue,
          focusedValue = _this$state5.focusedValue,
          focusedOption = _this$state5.focusedOption;
      var _this$props13 = this.props,
          options = _this$props13.options,
          menuIsOpen = _this$props13.menuIsOpen,
          inputValue = _this$props13.inputValue,
          screenReaderStatus = _this$props13.screenReaderStatus; // An aria live message representing the currently focused value in the select.

      var focusedValueMsg = focusedValue ? valueFocusAriaMessage({
        focusedValue: focusedValue,
        getOptionLabel: this.getOptionLabel,
        selectValue: selectValue
      }) : ''; // An aria live message representing the currently focused option in the select.

      var focusedOptionMsg = focusedOption && menuIsOpen ? optionFocusAriaMessage({
        focusedOption: focusedOption,
        getOptionLabel: this.getOptionLabel,
        options: options
      }) : ''; // An aria live message representing the set of focusable results and current searchterm/inputvalue.

      var resultsMsg = resultsAriaMessage({
        inputValue: inputValue,
        screenReaderMessage: screenReaderStatus({
          count: this.countOptions()
        })
      });
      return "".concat(focusedValueMsg, " ").concat(focusedOptionMsg, " ").concat(resultsMsg, " ").concat(ariaLiveContext);
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this$props14 = this.props,
          isDisabled = _this$props14.isDisabled,
          isSearchable = _this$props14.isSearchable,
          inputId = _this$props14.inputId,
          inputValue = _this$props14.inputValue,
          tabIndex = _this$props14.tabIndex,
          form = _this$props14.form;

      var _this$getComponents = this.getComponents(),
          Input = _this$getComponents.Input;

      var inputIsHidden = this.state.inputIsHidden;
      var id = inputId || this.getElementId('input'); // aria attributes makes the JSX "noisy", separated for clarity

      var ariaAttributes = {
        'aria-autocomplete': 'list',
        'aria-label': this.props['aria-label'],
        'aria-labelledby': this.props['aria-labelledby']
      };

      if (!isSearchable) {
        // use a dummy input to maintain focus/blur functionality
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(DummyInput, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          id: id,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: _index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["D"],
          onFocus: this.onInputFocus,
          readOnly: true,
          disabled: isDisabled,
          tabIndex: tabIndex,
          form: form,
          value: ""
        }, ariaAttributes));
      }

      var _this$commonProps = this.commonProps,
          cx = _this$commonProps.cx,
          theme = _this$commonProps.theme,
          selectProps = _this$commonProps.selectProps;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Input, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        autoCapitalize: "none",
        autoComplete: "off",
        autoCorrect: "off",
        cx: cx,
        getStyles: this.getStyles,
        id: id,
        innerRef: this.getInputRef,
        isDisabled: isDisabled,
        isHidden: inputIsHidden,
        onBlur: this.onInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.onInputFocus,
        selectProps: selectProps,
        spellCheck: "false",
        tabIndex: tabIndex,
        form: form,
        theme: theme,
        type: "text",
        value: inputValue
      }, ariaAttributes));
    }
  }, {
    key: "renderPlaceholderOrValue",
    value: function renderPlaceholderOrValue() {
      var _this3 = this;

      var _this$getComponents2 = this.getComponents(),
          MultiValue = _this$getComponents2.MultiValue,
          MultiValueContainer = _this$getComponents2.MultiValueContainer,
          MultiValueLabel = _this$getComponents2.MultiValueLabel,
          MultiValueRemove = _this$getComponents2.MultiValueRemove,
          SingleValue = _this$getComponents2.SingleValue,
          Placeholder = _this$getComponents2.Placeholder;

      var commonProps = this.commonProps;
      var _this$props15 = this.props,
          controlShouldRenderValue = _this$props15.controlShouldRenderValue,
          isDisabled = _this$props15.isDisabled,
          isMulti = _this$props15.isMulti,
          inputValue = _this$props15.inputValue,
          placeholder = _this$props15.placeholder;
      var _this$state6 = this.state,
          selectValue = _this$state6.selectValue,
          focusedValue = _this$state6.focusedValue,
          isFocused = _this$state6.isFocused;

      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Placeholder, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
          key: "placeholder",
          isDisabled: isDisabled,
          isFocused: isFocused
        }), placeholder);
      }

      if (isMulti) {
        var selectValues = selectValue.map(function (opt, index) {
          var isOptionFocused = opt === focusedValue;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MultiValue, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
            components: {
              Container: MultiValueContainer,
              Label: MultiValueLabel,
              Remove: MultiValueRemove
            },
            isFocused: isOptionFocused,
            isDisabled: isDisabled,
            key: "".concat(_this3.getOptionValue(opt)).concat(index),
            index: index,
            removeProps: {
              onClick: function onClick() {
                return _this3.removeValue(opt);
              },
              onTouchEnd: function onTouchEnd() {
                return _this3.removeValue(opt);
              },
              onMouseDown: function onMouseDown(e) {
                e.preventDefault();
                e.stopPropagation();
              }
            },
            data: opt
          }), _this3.formatOptionLabel(opt, 'value'));
        });
        return selectValues;
      }

      if (inputValue) {
        return null;
      }

      var singleValue = selectValue[0];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(SingleValue, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        data: singleValue,
        isDisabled: isDisabled
      }), this.formatOptionLabel(singleValue, 'value'));
    }
  }, {
    key: "renderClearIndicator",
    value: function renderClearIndicator() {
      var _this$getComponents3 = this.getComponents(),
          ClearIndicator = _this$getComponents3.ClearIndicator;

      var commonProps = this.commonProps;
      var _this$props16 = this.props,
          isDisabled = _this$props16.isDisabled,
          isLoading = _this$props16.isLoading;
      var isFocused = this.state.isFocused;

      if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }

      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ClearIndicator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        innerProps: innerProps,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function renderLoadingIndicator() {
      var _this$getComponents4 = this.getComponents(),
          LoadingIndicator = _this$getComponents4.LoadingIndicator;

      var commonProps = this.commonProps;
      var _this$props17 = this.props,
          isDisabled = _this$props17.isDisabled,
          isLoading = _this$props17.isLoading;
      var isFocused = this.state.isFocused;
      if (!LoadingIndicator || !isLoading) return null;
      var innerProps = {
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(LoadingIndicator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function renderIndicatorSeparator() {
      var _this$getComponents5 = this.getComponents(),
          DropdownIndicator = _this$getComponents5.DropdownIndicator,
          IndicatorSeparator = _this$getComponents5.IndicatorSeparator; // separator doesn't make sense without the dropdown indicator


      if (!DropdownIndicator || !IndicatorSeparator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(IndicatorSeparator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function renderDropdownIndicator() {
      var _this$getComponents6 = this.getComponents(),
          DropdownIndicator = _this$getComponents6.DropdownIndicator;

      if (!DropdownIndicator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(DropdownIndicator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this4 = this;

      var _this$getComponents7 = this.getComponents(),
          Group = _this$getComponents7.Group,
          GroupHeading = _this$getComponents7.GroupHeading,
          Menu = _this$getComponents7.Menu,
          MenuList = _this$getComponents7.MenuList,
          MenuPortal = _this$getComponents7.MenuPortal,
          LoadingMessage = _this$getComponents7.LoadingMessage,
          NoOptionsMessage = _this$getComponents7.NoOptionsMessage,
          Option = _this$getComponents7.Option;

      var commonProps = this.commonProps;
      var focusedOption = this.state.focusedOption;
      var _this$props18 = this.props,
          captureMenuScroll = _this$props18.captureMenuScroll,
          inputValue = _this$props18.inputValue,
          isLoading = _this$props18.isLoading,
          loadingMessage = _this$props18.loadingMessage,
          minMenuHeight = _this$props18.minMenuHeight,
          maxMenuHeight = _this$props18.maxMenuHeight,
          menuIsOpen = _this$props18.menuIsOpen,
          menuPlacement = _this$props18.menuPlacement,
          menuPosition = _this$props18.menuPosition,
          menuPortalTarget = _this$props18.menuPortalTarget,
          menuShouldBlockScroll = _this$props18.menuShouldBlockScroll,
          menuShouldScrollIntoView = _this$props18.menuShouldScrollIntoView,
          noOptionsMessage = _this$props18.noOptionsMessage,
          onMenuScrollToTop = _this$props18.onMenuScrollToTop,
          onMenuScrollToBottom = _this$props18.onMenuScrollToBottom;
      if (!menuIsOpen) return null; // TODO: Internal Option Type here

      var render = function render(props, id) {
        var type = props.type,
            data = props.data,
            isDisabled = props.isDisabled,
            isSelected = props.isSelected,
            label = props.label,
            value = props.value;
        var isFocused = focusedOption === data;
        var onHover = isDisabled ? undefined : function () {
          return _this4.onOptionHover(data);
        };
        var onSelect = isDisabled ? undefined : function () {
          return _this4.selectOption(data);
        };
        var optionId = "".concat(_this4.getElementId('option'), "-").concat(id);
        var innerProps = {
          id: optionId,
          onClick: onSelect,
          onMouseMove: onHover,
          onMouseOver: onHover,
          tabIndex: -1
        };
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Option, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
          innerProps: innerProps,
          data: data,
          isDisabled: isDisabled,
          isSelected: isSelected,
          key: optionId,
          label: label,
          type: type,
          value: value,
          isFocused: isFocused,
          innerRef: isFocused ? _this4.getFocusedOptionRef : undefined
        }), _this4.formatOptionLabel(props.data, 'menu'));
      };

      var menuUI;

      if (this.hasOptions()) {
        menuUI = this.getCategorizedOptions().map(function (item) {
          if (item.type === 'group') {
            var data = item.data,
                options = item.options,
                groupIndex = item.index;
            var groupId = "".concat(_this4.getElementId('group'), "-").concat(groupIndex);
            var headingId = "".concat(groupId, "-heading");
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Group, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
              key: groupId,
              data: data,
              options: options,
              Heading: GroupHeading,
              headingProps: {
                id: headingId,
                data: item.data
              },
              label: _this4.formatGroupLabel(item.data)
            }), item.options.map(function (option) {
              return render(option, "".concat(groupIndex, "-").concat(option.index));
            }));
          } else if (item.type === 'option') {
            return render(item, "".concat(item.index));
          }
        });
      } else if (isLoading) {
        var message = loadingMessage({
          inputValue: inputValue
        });
        if (message === null) return null;
        menuUI = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(LoadingMessage, commonProps, message);
      } else {
        var _message = noOptionsMessage({
          inputValue: inputValue
        });

        if (_message === null) return null;
        menuUI = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(NoOptionsMessage, commonProps, _message);
      }

      var menuPlacementProps = {
        minMenuHeight: minMenuHeight,
        maxMenuHeight: maxMenuHeight,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition,
        menuShouldScrollIntoView: menuShouldScrollIntoView
      };
      var menuElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["M"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, menuPlacementProps), function (_ref6) {
        var ref = _ref6.ref,
            _ref6$placerProps = _ref6.placerProps,
            placement = _ref6$placerProps.placement,
            maxHeight = _ref6$placerProps.maxHeight;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Menu, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, menuPlacementProps, {
          innerRef: ref,
          innerProps: {
            onMouseDown: _this4.onMenuMouseDown,
            onMouseMove: _this4.onMenuMouseMove
          },
          isLoading: isLoading,
          placement: placement
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ScrollManager, {
          captureEnabled: captureMenuScroll,
          onTopArrive: onMenuScrollToTop,
          onBottomArrive: onMenuScrollToBottom,
          lockEnabled: menuShouldBlockScroll
        }, function (scrollTargetRef) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MenuList, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
            innerRef: function innerRef(instance) {
              _this4.getMenuListRef(instance);

              scrollTargetRef(instance);
            },
            isLoading: isLoading,
            maxHeight: maxHeight
          }), menuUI);
        }));
      }); // positioning behaviour is almost identical for portalled and fixed,
      // so we use the same component. the actual portalling logic is forked
      // within the component based on `menuPosition`

      return menuPortalTarget || menuPosition === 'fixed' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MenuPortal, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        appendTo: menuPortalTarget,
        controlElement: this.controlRef,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition
      }), menuElement) : menuElement;
    }
  }, {
    key: "renderFormField",
    value: function renderFormField() {
      var _this5 = this;

      var _this$props19 = this.props,
          delimiter = _this$props19.delimiter,
          isDisabled = _this$props19.isDisabled,
          isMulti = _this$props19.isMulti,
          name = _this$props19.name;
      var selectValue = this.state.selectValue;
      if (!name || isDisabled) return;

      if (isMulti) {
        if (delimiter) {
          var value = selectValue.map(function (opt) {
            return _this5.getOptionValue(opt);
          }).join(delimiter);
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
            name: name,
            type: "hidden",
            value: value
          });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
              key: "i-".concat(i),
              name: name,
              type: "hidden",
              value: _this5.getOptionValue(opt)
            });
          }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
            name: name,
            type: "hidden"
          });
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, input);
        }
      } else {
        var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
          name: name,
          type: "hidden",
          value: _value
        });
      }
    }
  }, {
    key: "renderLiveRegion",
    value: function renderLiveRegion() {
      if (!this.state.isFocused) return null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(A11yText, {
        "aria-live": "polite"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "aria-selection-event"
      }, "\xA0", this.state.ariaLiveSelection), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "aria-context"
      }, "\xA0", this.constructAriaLiveMessage()));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$getComponents8 = this.getComponents(),
          Control = _this$getComponents8.Control,
          IndicatorsContainer = _this$getComponents8.IndicatorsContainer,
          SelectContainer = _this$getComponents8.SelectContainer,
          ValueContainer = _this$getComponents8.ValueContainer;

      var _this$props20 = this.props,
          className = _this$props20.className,
          id = _this$props20.id,
          isDisabled = _this$props20.isDisabled,
          menuIsOpen = _this$props20.menuIsOpen;
      var isFocused = this.state.isFocused;
      var commonProps = this.commonProps = this.getCommonProps();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(SelectContainer, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        className: className,
        innerProps: {
          id: id,
          onKeyDown: this.onKeyDown
        },
        isDisabled: isDisabled,
        isFocused: isFocused
      }), this.renderLiveRegion(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Control, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: isDisabled,
        isFocused: isFocused,
        menuIsOpen: menuIsOpen
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ValueContainer, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderPlaceholderOrValue(), this.renderInput()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(IndicatorsContainer, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var prevProps = state.prevProps,
          clearFocusValueOnUpdate = state.clearFocusValueOnUpdate,
          inputIsHiddenAfterUpdate = state.inputIsHiddenAfterUpdate;
      var options = props.options,
          value = props.value,
          menuIsOpen = props.menuIsOpen,
          inputValue = props.inputValue;
      var newMenuOptionsState = {};

      if (prevProps && (value !== prevProps.value || options !== prevProps.options || menuIsOpen !== prevProps.menuIsOpen || inputValue !== prevProps.inputValue)) {
        var selectValue = Object(_index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["B"])(value);
        var focusableOptions = menuIsOpen ? buildFocusableOptions(props, selectValue) : [];
        var focusedValue = clearFocusValueOnUpdate ? getNextFocusedValue(state, selectValue) : null;
        var focusedOption = getNextFocusedOption(state, focusableOptions);
        newMenuOptionsState = {
          selectValue: selectValue,
          focusedOption: focusedOption,
          focusedValue: focusedValue,
          clearFocusValueOnUpdate: false
        };
      } // some updates should toggle the state of the input visibility


      var newInputIsHiddenState = inputIsHiddenAfterUpdate != null && props !== prevProps ? {
        inputIsHidden: inputIsHiddenAfterUpdate,
        inputIsHiddenAfterUpdate: undefined
      } : {};
      return _objectSpread$2(_objectSpread$2(_objectSpread$2({}, newMenuOptionsState), newInputIsHiddenState), {}, {
        prevProps: props
      });
    }
  }]);

  return Select;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Select.defaultProps = defaultProps;




/***/ }),

/***/ "./node_modules/react-select/dist/index-8b64410c.browser.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-select/dist/index-8b64410c.browser.esm.js ***!
  \**********************************************************************/
/*! exports provided: A, B, C, D, E, F, M, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return isDocumentElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return cleanValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return scrollIntoView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return handleInputChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return MenuPlacer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return containerCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clearIndicatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return dropdownIndicatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return groupHeadingCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return indicatorSeparatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return groupCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return inputCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return indicatorsContainerCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return loadingMessageCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return menuListCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return loadingIndicatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return menuCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return menuPortalCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return multiValueCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return multiValueLabelCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return multiValueRemoveCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return noOptionsMessageCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return optionCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return placeholderCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return css$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return valueContainerCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return isTouchCapable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return isMobileDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return classNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return defaultComponents; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-input-autosize */ "./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_13__);















// ==============================
// NO OP
// ==============================
var noop = function noop() {};
// Class Name Prefixer
// ==============================

/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-select__comp react-select__comp--some'
*/

function applyPrefixToName(prefix, name) {
  if (!name) {
    return prefix;
  } else if (name[0] === '-') {
    return prefix + name;
  } else {
    return prefix + '__' + name;
  }
}

function classNames(prefix, state, className) {
  var arr = [className];

  if (state && prefix) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("".concat(applyPrefixToName(prefix, key)));
      }
    }
  }

  return arr.filter(function (i) {
    return i;
  }).map(function (i) {
    return String(i).trim();
  }).join(' ');
} // ==============================
// Clean Value
// ==============================

var cleanValue = function cleanValue(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_10__["default"])(value) === 'object' && value !== null) return [value];
  return [];
}; // ==============================
// Handle Input Change
// ==============================

function handleInputChange(inputValue, actionMeta, onInputChange) {
  if (onInputChange) {
    var newValue = onInputChange(inputValue, actionMeta);
    if (typeof newValue === 'string') return newValue;
  }

  return inputValue;
} // ==============================
// Scroll Helpers
// ==============================

function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
} // Normalized Scroll Top
// ------------------------------

function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }

  return el.scrollTop;
}
function scrollTo(el, top) {
  // with a scroll distance, we perform scroll on the element
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }

  el.scrollTop = top;
} // Get Scroll Parent
// ------------------------------

function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === 'absolute';
  var overflowRx = /(auto|scroll)/;
  var docEl = document.documentElement; // suck it, flow...

  if (style.position === 'fixed') return docEl;

  for (var parent = element; parent = parent.parentElement;) {
    style = getComputedStyle(parent);

    if (excludeStaticParent && style.position === 'static') {
      continue;
    }

    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }

  return docEl;
} // Animated Scroll To
// ------------------------------

/**
  @param t: time (elapsed)
  @param b: initial value
  @param c: amount of change
  @param d: duration
*/

function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;

  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);

    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      callback(element);
    }
  }

  animateScroll();
} // Scroll Into View
// ------------------------------

function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;

  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
} // ==============================
// Get bounding client object
// ==============================
// cannot get keys using array notation with DOMRect

function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}
// Touch Capability Detector
// ==============================

function isTouchCapable() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
} // ==============================
// Mobile Device Detector
// ==============================

function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
function getMenuPlacement(_ref) {
  var maxHeight = _ref.maxHeight,
      menuEl = _ref.menuEl,
      minHeight = _ref.minHeight,
      placement = _ref.placement,
      shouldScroll = _ref.shouldScroll,
      isFixedPosition = _ref.isFixedPosition,
      theme = _ref.theme;
  var spacing = theme.spacing;
  var scrollParent = getScrollParent(menuEl);
  var defaultState = {
    placement: 'bottom',
    maxHeight: maxHeight
  }; // something went wrong, return default state

  if (!menuEl || !menuEl.offsetParent) return defaultState; // we can't trust `scrollParent.scrollHeight` --> it may increase when
  // the menu is rendered

  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
      scrollHeight = _scrollParent$getBoun.height;

  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
      menuBottom = _menuEl$getBoundingCl.bottom,
      menuHeight = _menuEl$getBoundingCl.height,
      menuTop = _menuEl$getBoundingCl.top;

  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
      containerTop = _menuEl$offsetParent$.top;

  var viewHeight = window.innerHeight;
  var scrollTop = getScrollTop(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;

  switch (placement) {
    case 'auto':
    case 'bottom':
      // 1: the menu will fit, do nothing
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }

        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        } // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.


        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: 'bottom',
          maxHeight: constrainedHeight
        };
      } // 4. Forked beviour when there isn't enough space below
      // AUTO: flip the menu, render above


      if (placement === 'auto' || isFixedPosition) {
        // may need to be constrained after flipping
        var _constrainedHeight = maxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;

        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - spacing.controlHeight, maxHeight);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight
        };
      } // BOTTOM: allow browser to increase scrollable area and immediately set scroll


      if (placement === 'bottom') {
        scrollTo(scrollParent, scrollDown);
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      }

      break;

    case 'top':
      // 1: the menu will fit, do nothing
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = maxHeight; // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.

        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }

        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight2
        };
      } // 4. not enough space, the browser WILL NOT increase scrollable area when
      // absolutely positioned element rendered above the viewport (only below).
      // Flip the menu, render below


      return {
        placement: 'bottom',
        maxHeight: maxHeight
      };

    default:
      throw new Error("Invalid placement provided \"".concat(placement, "\"."));
  } // fulfil contract with flow: implicit return value of undefined


  return defaultState;
} // Menu Component
// ------------------------------

function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: 'top',
    top: 'bottom'
  };
  return placement ? placementToCSSProp[placement] : 'bottom';
}

var coercePlacement = function coercePlacement(p) {
  return p === 'auto' ? 'bottom' : p;
};

var menuCSS = function menuCSS(_ref2) {
  var _ref3;

  var placement = _ref2.placement,
      _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      spacing = _ref2$theme.spacing,
      colors = _ref2$theme.colors;
  return _ref3 = {
    label: 'menu'
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, alignToControl(placement), '100%'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, "backgroundColor", colors.neutral0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, "borderRadius", borderRadius), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, "boxShadow", '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, "marginBottom", spacing.menuGutter), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, "marginTop", spacing.menuGutter), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, "position", 'absolute'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, "width", '100%'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, "zIndex", 1), _ref3;
};
var PortalPlacementContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_7__["createContext"])({
  getPortalPlacement: null
}); // NOTE: internal only

var MenuPlacer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MenuPlacer, _Component);

  var _super = _createSuper(MenuPlacer);

  function MenuPlacer() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MenuPlacer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      maxHeight: _this.props.maxMenuHeight,
      placement: null
    };

    _this.getPlacement = function (ref) {
      var _this$props = _this.props,
          minMenuHeight = _this$props.minMenuHeight,
          maxMenuHeight = _this$props.maxMenuHeight,
          menuPlacement = _this$props.menuPlacement,
          menuPosition = _this$props.menuPosition,
          menuShouldScrollIntoView = _this$props.menuShouldScrollIntoView,
          theme = _this$props.theme;
      if (!ref) return; // DO NOT scroll if position is fixed

      var isFixedPosition = menuPosition === 'fixed';
      var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
      var state = getMenuPlacement({
        maxHeight: maxMenuHeight,
        menuEl: ref,
        minHeight: minMenuHeight,
        placement: menuPlacement,
        shouldScroll: shouldScroll,
        isFixedPosition: isFixedPosition,
        theme: theme
      });
      var getPortalPlacement = _this.context.getPortalPlacement;
      if (getPortalPlacement) getPortalPlacement(state);

      _this.setState(state);
    };

    _this.getUpdatedProps = function () {
      var menuPlacement = _this.props.menuPlacement;
      var placement = _this.state.placement || coercePlacement(menuPlacement);
      return _objectSpread(_objectSpread({}, _this.props), {}, {
        placement: placement,
        maxHeight: _this.state.maxHeight
      });
    };

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MenuPlacer, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children({
        ref: this.getPlacement,
        placerProps: this.getUpdatedProps()
      });
    }
  }]);

  return MenuPlacer;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);
MenuPlacer.contextType = PortalPlacementContext;

var Menu = function Menu(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('menu', props),
    className: cx({
      menu: true
    }, className)
  }, innerProps, {
    ref: innerRef
  }), children);
};
// Menu List
// ==============================

var menuListCSS = function menuListCSS(_ref4) {
  var maxHeight = _ref4.maxHeight,
      baseUnit = _ref4.theme.spacing.baseUnit;
  return {
    maxHeight: maxHeight,
    overflowY: 'auto',
    paddingBottom: baseUnit,
    paddingTop: baseUnit,
    position: 'relative',
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: 'touch'
  };
};
var MenuList = function MenuList(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isMulti = props.isMulti,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('menuList', props),
    className: cx({
      'menu-list': true,
      'menu-list--is-multi': isMulti
    }, className),
    ref: innerRef
  }, innerProps), children);
}; // ==============================
// Menu Notices
// ==============================

var noticeCSS = function noticeCSS(_ref5) {
  var _ref5$theme = _ref5.theme,
      baseUnit = _ref5$theme.spacing.baseUnit,
      colors = _ref5$theme.colors;
  return {
    color: colors.neutral40,
    padding: "".concat(baseUnit * 2, "px ").concat(baseUnit * 3, "px"),
    textAlign: 'center'
  };
};

var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var NoOptionsMessage = function NoOptionsMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('noOptionsMessage', props),
    className: cx({
      'menu-notice': true,
      'menu-notice--no-options': true
    }, className)
  }, innerProps), children);
};
NoOptionsMessage.defaultProps = {
  children: 'No options'
};
var LoadingMessage = function LoadingMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('loadingMessage', props),
    className: cx({
      'menu-notice': true,
      'menu-notice--loading': true
    }, className)
  }, innerProps), children);
};
LoadingMessage.defaultProps = {
  children: 'Loading...'
}; // ==============================
// Menu Portal
// ==============================

var menuPortalCSS = function menuPortalCSS(_ref6) {
  var rect = _ref6.rect,
      offset = _ref6.offset,
      position = _ref6.position;
  return {
    left: rect.left,
    position: position,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};
var MenuPortal = /*#__PURE__*/function (_Component2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MenuPortal, _Component2);

  var _super2 = _createSuper(MenuPortal);

  function MenuPortal() {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MenuPortal);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));
    _this2.state = {
      placement: null
    };

    _this2.getPortalPlacement = function (_ref7) {
      var placement = _ref7.placement;
      var initialPlacement = coercePlacement(_this2.props.menuPlacement); // avoid re-renders if the placement has not changed

      if (placement !== initialPlacement) {
        _this2.setState({
          placement: placement
        });
      }
    };

    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MenuPortal, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          appendTo = _this$props2.appendTo,
          children = _this$props2.children,
          controlElement = _this$props2.controlElement,
          menuPlacement = _this$props2.menuPlacement,
          position = _this$props2.menuPosition,
          getStyles = _this$props2.getStyles;
      var isFixed = position === 'fixed'; // bail early if required elements aren't present

      if (!appendTo && !isFixed || !controlElement) {
        return null;
      }

      var placement = this.state.placement || coercePlacement(menuPlacement);
      var rect = getBoundingClientObj(controlElement);
      var scrollDistance = isFixed ? 0 : window.pageYOffset;
      var offset = rect[placement] + scrollDistance;
      var state = {
        offset: offset,
        position: position,
        rect: rect
      }; // same wrapper element whether fixed or portalled

      var menuWrapper = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        css: getStyles('menuPortal', state)
      }, children);
      return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(PortalPlacementContext.Provider, {
        value: {
          getPortalPlacement: this.getPortalPlacement
        }
      }, appendTo ? /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_9__["createPortal"])(menuWrapper, appendTo) : menuWrapper);
    }
  }]);

  return MenuPortal;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var containerCSS = function containerCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isRtl = _ref.isRtl;
  return {
    label: 'container',
    direction: isRtl ? 'rtl' : null,
    pointerEvents: isDisabled ? 'none' : null,
    // cancel mouse events when disabled
    position: 'relative'
  };
};
var SelectContainer = function SelectContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      isRtl = props.isRtl;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('container', props),
    className: cx({
      '--is-disabled': isDisabled,
      '--is-rtl': isRtl
    }, className)
  }, innerProps), children);
}; // ==============================
// Value Container
// ==============================

var valueContainerCSS = function valueContainerCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    padding: "".concat(spacing.baseUnit / 2, "px ").concat(spacing.baseUnit * 2, "px"),
    WebkitOverflowScrolling: 'touch',
    position: 'relative',
    overflow: 'hidden'
  };
};
var ValueContainer = function ValueContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      isMulti = props.isMulti,
      getStyles = props.getStyles,
      hasValue = props.hasValue;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
    css: getStyles('valueContainer', props),
    className: cx({
      'value-container': true,
      'value-container--is-multi': isMulti,
      'value-container--has-value': hasValue
    }, className)
  }, children);
}; // ==============================
// Indicator Container
// ==============================

var indicatorsContainerCSS = function indicatorsContainerCSS() {
  return {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexShrink: 0
  };
};
var IndicatorsContainer = function IndicatorsContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
    css: getStyles('indicatorsContainer', props),
    className: cx({
      indicators: true
    }, className)
  }, children);
};

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_12__["default"])(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref2 =  false ? undefined : {
  name: "tj5bde-Svg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JJIiwiZmlsZSI6ImluZGljYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB0eXBlIE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHR5cGUgeyBDb21tb25Qcm9wcywgVGhlbWUgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBJY29uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IFN2ZyA9ICh7IHNpemUsIC4uLnByb3BzIH06IHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IENyb3NzSWNvbiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxTdmcgc2l6ZT17MjB9IHsuLi5wcm9wc30+XG4gICAgPHBhdGggZD1cIk0xNC4zNDggMTQuODQ5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwbC0yLjY1MS0zLjAzMC0yLjY1MSAzLjAyOWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMC0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOSAwLTEuNjk3bDIuNzU4LTMuMTUtMi43NTktMy4xNTJjLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI4IDAtMS42OTdzMS4yMjgtMC40NjkgMS42OTcgMGwyLjY1MiAzLjAzMSAyLjY1MS0zLjAzMWMwLjQ2OS0wLjQ2OSAxLjIyOC0wLjQ2OSAxLjY5NyAwczAuNDY5IDEuMjI5IDAgMS42OTdsLTIuNzU4IDMuMTUyIDIuNzU4IDMuMTVjMC40NjkgMC40NjkgMC40NjkgMS4yMjkgMCAxLjY5OHpcIiAvPlxuICA8L1N2Zz5cbik7XG5leHBvcnQgY29uc3QgRG93bkNoZXZyb24gPSAocHJvcHM6IGFueSkgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCB0eXBlIEluZGljYXRvclByb3BzID0gQ29tbW9uUHJvcHMgJiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuOiBOb2RlLFxuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IGFueSxcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgLyoqIFdoZXRoZXIgdGhlIHRleHQgaXMgcmlnaHQgdG8gbGVmdCAqL1xuICBpc1J0bDogYm9vbGVhbixcbn07XG5cbmNvbnN0IGJhc2VDU1MgPSAoe1xuICBpc0ZvY3VzZWQsXG4gIHRoZW1lOiB7XG4gICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIGNvbG9ycyxcbiAgfSxcbn06IEluZGljYXRvclByb3BzKSA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG5cbiAgJzpob3Zlcic6IHtcbiAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBEcm9wZG93bkluZGljYXRvciA9IChwcm9wczogSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdkcm9wZG93bkluZGljYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IChwcm9wczogSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdjbGVhckluZGljYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPENyb3NzSWNvbiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VwYXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBTZXBhcmF0b3JTdGF0ZSA9IHsgaXNEaXNhYmxlZDogYm9vbGVhbiB9O1xuXG5leHBvcnQgY29uc3QgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gKHtcbiAgaXNEaXNhYmxlZCxcbiAgdGhlbWU6IHtcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgY29sb3JzLFxuICB9LFxufTogQ29tbW9uUHJvcHMgJiBTZXBhcmF0b3JTdGF0ZSkgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgd2lkdGg6IDEsXG59KTtcblxuZXhwb3J0IGNvbnN0IEluZGljYXRvclNlcGFyYXRvciA9IChwcm9wczogSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdpbmRpY2F0b3JTZXBhcmF0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KHsgJ2luZGljYXRvci1zZXBhcmF0b3InOiB0cnVlIH0sIGNsYXNzTmFtZSl9XG4gICAgLz5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTG9hZGluZ1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IGxvYWRpbmdEb3RBbmltYXRpb25zID0ga2V5ZnJhbWVzYFxuICAwJSwgODAlLCAxMDAlIHsgb3BhY2l0eTogMDsgfVxuICA0MCUgeyBvcGFjaXR5OiAxOyB9XG5gO1xuXG5leHBvcnQgY29uc3QgbG9hZGluZ0luZGljYXRvckNTUyA9ICh7XG4gIGlzRm9jdXNlZCxcbiAgc2l6ZSxcbiAgdGhlbWU6IHtcbiAgICBjb2xvcnMsXG4gICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICB9LFxufToge1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW4sXG4gIHNpemU6IG51bWJlcixcbiAgdGhlbWU6IFRoZW1lLFxufSkgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgZm9udFNpemU6IHNpemUsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG1hcmdpblJpZ2h0OiBzaXplLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbn0pO1xuXG50eXBlIERvdFByb3BzID0geyBkZWxheTogbnVtYmVyLCBvZmZzZXQ6IGJvb2xlYW4gfTtcbmNvbnN0IExvYWRpbmdEb3QgPSAoeyBkZWxheSwgb2Zmc2V0IH06IERvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiBudWxsLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgIH19XG4gIC8+XG4pO1xuXG5leHBvcnQgdHlwZSBMb2FkaW5nSWNvblByb3BzID0ge1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IGFueSxcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgLyoqIFdoZXRoZXIgdGhlIHRleHQgaXMgcmlnaHQgdG8gbGVmdCAqL1xuICBpc1J0bDogYm9vbGVhbixcbn0gJiBDb21tb25Qcm9wcyAmIHtcbiAgICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgICBzaXplOiBudW1iZXIsXG4gIH07XG5leHBvcnQgY29uc3QgTG9hZGluZ0luZGljYXRvciA9IChwcm9wczogTG9hZGluZ0ljb25Qcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcywgaXNSdGwgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmlubmVyUHJvcHN9XG4gICAgICBjc3M9e2dldFN0eWxlcygnbG9hZGluZ0luZGljYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5Mb2FkaW5nSW5kaWNhdG9yLmRlZmF1bHRQcm9wcyA9IHsgc2l6ZTogNCB9O1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

// ==============================
// Dropdown & Clear Icons
// ==============================
var Svg = function Svg(_ref) {
  var size = _ref.size,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_11__["default"])(_ref, ["size"]);

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("svg", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: _ref2
  }, props));
};

var CrossIcon = function CrossIcon(props) {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Svg, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    size: 20
  }, props), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var DownChevron = function DownChevron(props) {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Svg, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    size: 20
  }, props), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}; // ==============================
// Dropdown & Clear Buttons
// ==============================

var baseCSS = function baseCSS(_ref3) {
  var isFocused = _ref3.isFocused,
      _ref3$theme = _ref3.theme,
      baseUnit = _ref3$theme.spacing.baseUnit,
      colors = _ref3$theme.colors;
  return {
    label: 'indicatorContainer',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    ':hover': {
      color: isFocused ? colors.neutral80 : colors.neutral40
    }
  };
};

var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, innerProps, {
    css: getStyles('dropdownIndicator', props),
    className: cx({
      indicator: true,
      'dropdown-indicator': true
    }, className)
  }), children || Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, innerProps, {
    css: getStyles('clearIndicator', props),
    className: cx({
      indicator: true,
      'clear-indicator': true
    }, className)
  }), children || Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(CrossIcon, null));
}; // ==============================
// Separator
// ==============================

var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref4) {
  var isDisabled = _ref4.isDisabled,
      _ref4$theme = _ref4.theme,
      baseUnit = _ref4$theme.spacing.baseUnit,
      colors = _ref4$theme.colors;
  return {
    label: 'indicatorSeparator',
    alignSelf: 'stretch',
    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
    marginBottom: baseUnit * 2,
    marginTop: baseUnit * 2,
    width: 1
  };
};
var IndicatorSeparator = function IndicatorSeparator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, innerProps, {
    css: getStyles('indicatorSeparator', props),
    className: cx({
      'indicator-separator': true
    }, className)
  }));
}; // ==============================
// Loading
// ==============================

var loadingDotAnimations = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["keyframes"])(_templateObject());
var loadingIndicatorCSS = function loadingIndicatorCSS(_ref5) {
  var isFocused = _ref5.isFocused,
      size = _ref5.size,
      _ref5$theme = _ref5.theme,
      colors = _ref5$theme.colors,
      baseUnit = _ref5$theme.spacing.baseUnit;
  return {
    label: 'loadingIndicator',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    alignSelf: 'center',
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: 'center',
    verticalAlign: 'middle'
  };
};

var LoadingDot = function LoadingDot(_ref6) {
  var delay = _ref6.delay,
      offset = _ref6.offset;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("span", {
    css: /*#__PURE__*/Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["css"])({
      animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
      backgroundColor: 'currentColor',
      borderRadius: '1em',
      display: 'inline-block',
      marginLeft: offset ? '1em' : null,
      height: '1em',
      verticalAlign: 'top',
      width: '1em'
    },  false ? undefined : ";label:LoadingDot;",  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0xJIiwiZmlsZSI6ImluZGljYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB0eXBlIE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHR5cGUgeyBDb21tb25Qcm9wcywgVGhlbWUgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBJY29uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IFN2ZyA9ICh7IHNpemUsIC4uLnByb3BzIH06IHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IENyb3NzSWNvbiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxTdmcgc2l6ZT17MjB9IHsuLi5wcm9wc30+XG4gICAgPHBhdGggZD1cIk0xNC4zNDggMTQuODQ5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwbC0yLjY1MS0zLjAzMC0yLjY1MSAzLjAyOWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMC0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOSAwLTEuNjk3bDIuNzU4LTMuMTUtMi43NTktMy4xNTJjLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI4IDAtMS42OTdzMS4yMjgtMC40NjkgMS42OTcgMGwyLjY1MiAzLjAzMSAyLjY1MS0zLjAzMWMwLjQ2OS0wLjQ2OSAxLjIyOC0wLjQ2OSAxLjY5NyAwczAuNDY5IDEuMjI5IDAgMS42OTdsLTIuNzU4IDMuMTUyIDIuNzU4IDMuMTVjMC40NjkgMC40NjkgMC40NjkgMS4yMjkgMCAxLjY5OHpcIiAvPlxuICA8L1N2Zz5cbik7XG5leHBvcnQgY29uc3QgRG93bkNoZXZyb24gPSAocHJvcHM6IGFueSkgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCB0eXBlIEluZGljYXRvclByb3BzID0gQ29tbW9uUHJvcHMgJiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuOiBOb2RlLFxuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IGFueSxcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgLyoqIFdoZXRoZXIgdGhlIHRleHQgaXMgcmlnaHQgdG8gbGVmdCAqL1xuICBpc1J0bDogYm9vbGVhbixcbn07XG5cbmNvbnN0IGJhc2VDU1MgPSAoe1xuICBpc0ZvY3VzZWQsXG4gIHRoZW1lOiB7XG4gICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIGNvbG9ycyxcbiAgfSxcbn06IEluZGljYXRvclByb3BzKSA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG5cbiAgJzpob3Zlcic6IHtcbiAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBEcm9wZG93bkluZGljYXRvciA9IChwcm9wczogSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdkcm9wZG93bkluZGljYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IChwcm9wczogSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdjbGVhckluZGljYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPENyb3NzSWNvbiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VwYXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBTZXBhcmF0b3JTdGF0ZSA9IHsgaXNEaXNhYmxlZDogYm9vbGVhbiB9O1xuXG5leHBvcnQgY29uc3QgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gKHtcbiAgaXNEaXNhYmxlZCxcbiAgdGhlbWU6IHtcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgY29sb3JzLFxuICB9LFxufTogQ29tbW9uUHJvcHMgJiBTZXBhcmF0b3JTdGF0ZSkgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgd2lkdGg6IDEsXG59KTtcblxuZXhwb3J0IGNvbnN0IEluZGljYXRvclNlcGFyYXRvciA9IChwcm9wczogSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdpbmRpY2F0b3JTZXBhcmF0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KHsgJ2luZGljYXRvci1zZXBhcmF0b3InOiB0cnVlIH0sIGNsYXNzTmFtZSl9XG4gICAgLz5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTG9hZGluZ1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IGxvYWRpbmdEb3RBbmltYXRpb25zID0ga2V5ZnJhbWVzYFxuICAwJSwgODAlLCAxMDAlIHsgb3BhY2l0eTogMDsgfVxuICA0MCUgeyBvcGFjaXR5OiAxOyB9XG5gO1xuXG5leHBvcnQgY29uc3QgbG9hZGluZ0luZGljYXRvckNTUyA9ICh7XG4gIGlzRm9jdXNlZCxcbiAgc2l6ZSxcbiAgdGhlbWU6IHtcbiAgICBjb2xvcnMsXG4gICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICB9LFxufToge1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW4sXG4gIHNpemU6IG51bWJlcixcbiAgdGhlbWU6IFRoZW1lLFxufSkgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgZm9udFNpemU6IHNpemUsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG1hcmdpblJpZ2h0OiBzaXplLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbn0pO1xuXG50eXBlIERvdFByb3BzID0geyBkZWxheTogbnVtYmVyLCBvZmZzZXQ6IGJvb2xlYW4gfTtcbmNvbnN0IExvYWRpbmdEb3QgPSAoeyBkZWxheSwgb2Zmc2V0IH06IERvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiBudWxsLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgIH19XG4gIC8+XG4pO1xuXG5leHBvcnQgdHlwZSBMb2FkaW5nSWNvblByb3BzID0ge1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IGFueSxcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgLyoqIFdoZXRoZXIgdGhlIHRleHQgaXMgcmlnaHQgdG8gbGVmdCAqL1xuICBpc1J0bDogYm9vbGVhbixcbn0gJiBDb21tb25Qcm9wcyAmIHtcbiAgICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgICBzaXplOiBudW1iZXIsXG4gIH07XG5leHBvcnQgY29uc3QgTG9hZGluZ0luZGljYXRvciA9IChwcm9wczogTG9hZGluZ0ljb25Qcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcywgaXNSdGwgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmlubmVyUHJvcHN9XG4gICAgICBjc3M9e2dldFN0eWxlcygnbG9hZGluZ0luZGljYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5Mb2FkaW5nSW5kaWNhdG9yLmRlZmF1bHRQcm9wcyA9IHsgc2l6ZTogNCB9O1xuIl19 */")
  });
};

var LoadingIndicator = function LoadingIndicator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isRtl = props.isRtl;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, innerProps, {
    css: getStyles('loadingIndicator', props),
    className: cx({
      indicator: true,
      'loading-indicator': true
    }, className)
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(LoadingDot, {
    delay: 0,
    offset: isRtl
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(LoadingDot, {
    delay: 160,
    offset: true
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(LoadingDot, {
    delay: 320,
    offset: !isRtl
  }));
};
LoadingIndicator.defaultProps = {
  size: 4
};

var css = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      _ref$theme = _ref.theme,
      colors = _ref$theme.colors,
      borderRadius = _ref$theme.borderRadius,
      spacing = _ref$theme.spacing;
  return {
    label: 'control',
    alignItems: 'center',
    backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
    borderRadius: borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : null,
    cursor: 'default',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: spacing.controlHeight,
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms',
    '&:hover': {
      borderColor: isFocused ? colors.primary : colors.neutral30
    }
  };
};

var Control = function Control(props) {
  var children = props.children,
      cx = props.cx,
      getStyles = props.getStyles,
      className = props.className,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      innerRef = props.innerRef,
      innerProps = props.innerProps,
      menuIsOpen = props.menuIsOpen;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: innerRef,
    css: getStyles('control', props),
    className: cx({
      control: true,
      'control--is-disabled': isDisabled,
      'control--is-focused': isFocused,
      'control--menu-is-open': menuIsOpen
    }, className)
  }, innerProps), children);
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var groupCSS = function groupCSS(_ref) {
  var spacing = _ref.theme.spacing;
  return {
    paddingBottom: spacing.baseUnit * 2,
    paddingTop: spacing.baseUnit * 2
  };
};

var Group = function Group(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      Heading = props.Heading,
      headingProps = props.headingProps,
      label = props.label,
      theme = props.theme,
      selectProps = props.selectProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
    css: getStyles('group', props),
    className: cx({
      group: true
    }, className)
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Heading, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, headingProps, {
    selectProps: selectProps,
    theme: theme,
    getStyles: getStyles,
    cx: cx
  }), label), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", null, children));
};

var groupHeadingCSS = function groupHeadingCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    label: 'group',
    color: '#999',
    cursor: 'default',
    display: 'block',
    fontSize: '75%',
    fontWeight: '500',
    marginBottom: '0.25em',
    paddingLeft: spacing.baseUnit * 3,
    paddingRight: spacing.baseUnit * 3,
    textTransform: 'uppercase'
  };
};
var GroupHeading = function GroupHeading(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      theme = props.theme,
      selectProps = props.selectProps,
      cleanProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_11__["default"])(props, ["className", "cx", "getStyles", "theme", "selectProps"]);

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('groupHeading', _objectSpread$1({
      theme: theme
    }, cleanProps)),
    className: cx({
      'group-heading': true
    }, className)
  }, cleanProps));
};

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var inputCSS = function inputCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    margin: spacing.baseUnit / 2,
    paddingBottom: spacing.baseUnit / 2,
    paddingTop: spacing.baseUnit / 2,
    visibility: isDisabled ? 'hidden' : 'visible',
    color: colors.neutral80
  };
};

var inputStyle = function inputStyle(isHidden) {
  return {
    label: 'input',
    background: 0,
    border: 0,
    fontSize: 'inherit',
    opacity: isHidden ? 0 : 1,
    outline: 0,
    padding: 0,
    color: 'inherit'
  };
};

var Input = function Input(_ref2) {
  var className = _ref2.className,
      cx = _ref2.cx,
      getStyles = _ref2.getStyles,
      innerRef = _ref2.innerRef,
      isHidden = _ref2.isHidden,
      isDisabled = _ref2.isDisabled,
      theme = _ref2.theme,
      selectProps = _ref2.selectProps,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_11__["default"])(_ref2, ["className", "cx", "getStyles", "innerRef", "isHidden", "isDisabled", "theme", "selectProps"]);

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
    css: getStyles('input', _objectSpread$2({
      theme: theme
    }, props))
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(react_input_autosize__WEBPACK_IMPORTED_MODULE_13___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: cx({
      input: true
    }, className),
    inputRef: innerRef,
    inputStyle: inputStyle(isHidden),
    disabled: isDisabled
  }, props)));
};

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var multiValueCSS = function multiValueCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      borderRadius = _ref$theme.borderRadius,
      colors = _ref$theme.colors;
  return {
    label: 'multiValue',
    backgroundColor: colors.neutral10,
    borderRadius: borderRadius / 2,
    display: 'flex',
    margin: spacing.baseUnit / 2,
    minWidth: 0 // resolves flex/text-overflow bug

  };
};
var multiValueLabelCSS = function multiValueLabelCSS(_ref2) {
  var _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      colors = _ref2$theme.colors,
      cropWithEllipsis = _ref2.cropWithEllipsis;
  return {
    borderRadius: borderRadius / 2,
    color: colors.neutral80,
    fontSize: '85%',
    overflow: 'hidden',
    padding: 3,
    paddingLeft: 6,
    textOverflow: cropWithEllipsis ? 'ellipsis' : null,
    whiteSpace: 'nowrap'
  };
};
var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3) {
  var _ref3$theme = _ref3.theme,
      spacing = _ref3$theme.spacing,
      borderRadius = _ref3$theme.borderRadius,
      colors = _ref3$theme.colors,
      isFocused = _ref3.isFocused;
  return {
    alignItems: 'center',
    borderRadius: borderRadius / 2,
    backgroundColor: isFocused && colors.dangerLight,
    display: 'flex',
    paddingLeft: spacing.baseUnit,
    paddingRight: spacing.baseUnit,
    ':hover': {
      backgroundColor: colors.dangerLight,
      color: colors.danger
    }
  };
};
var MultiValueGeneric = function MultiValueGeneric(_ref4) {
  var children = _ref4.children,
      innerProps = _ref4.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", innerProps, children);
};
var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;
function MultiValueRemove(_ref5) {
  var children = _ref5.children,
      innerProps = _ref5.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", innerProps, children || Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(CrossIcon, {
    size: 14
  }));
}

var MultiValue = function MultiValue(props) {
  var children = props.children,
      className = props.className,
      components = props.components,
      cx = props.cx,
      data = props.data,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      removeProps = props.removeProps,
      selectProps = props.selectProps;
  var Container = components.Container,
      Label = components.Label,
      Remove = components.Remove;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["ClassNames"], null, function (_ref6) {
    var css = _ref6.css,
        emotionCx = _ref6.cx;
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Container, {
      data: data,
      innerProps: _objectSpread$3(_objectSpread$3({}, innerProps), {}, {
        className: emotionCx(css(getStyles('multiValue', props)), cx({
          'multi-value': true,
          'multi-value--is-disabled': isDisabled
        }, className))
      }),
      selectProps: selectProps
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Label, {
      data: data,
      innerProps: {
        className: emotionCx(css(getStyles('multiValueLabel', props)), cx({
          'multi-value__label': true
        }, className))
      },
      selectProps: selectProps
    }, children), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Remove, {
      data: data,
      innerProps: _objectSpread$3({
        className: emotionCx(css(getStyles('multiValueRemove', props)), cx({
          'multi-value__remove': true
        }, className))
      }, removeProps),
      selectProps: selectProps
    }));
  });
};

MultiValue.defaultProps = {
  cropWithEllipsis: true
};

var optionCSS = function optionCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      isSelected = _ref.isSelected,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'option',
    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
    cursor: 'default',
    display: 'block',
    fontSize: 'inherit',
    padding: "".concat(spacing.baseUnit * 2, "px ").concat(spacing.baseUnit * 3, "px"),
    width: '100%',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    // provide some affordance on touch devices
    ':active': {
      backgroundColor: !isDisabled && (isSelected ? colors.primary : colors.primary50)
    }
  };
};

var Option = function Option(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      isSelected = props.isSelected,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('option', props),
    className: cx({
      option: true,
      'option--is-disabled': isDisabled,
      'option--is-focused': isFocused,
      'option--is-selected': isSelected
    }, className),
    ref: innerRef
  }, innerProps), children);
};

var placeholderCSS = function placeholderCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'placeholder',
    color: colors.neutral50,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var Placeholder = function Placeholder(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('placeholder', props),
    className: cx({
      placeholder: true
    }, className)
  }, innerProps), children);
};

var css$1 = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'singleValue',
    color: isDisabled ? colors.neutral40 : colors.neutral80,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    maxWidth: "calc(100% - ".concat(spacing.baseUnit * 2, "px)"),
    overflow: 'hidden',
    position: 'absolute',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var SingleValue = function SingleValue(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      innerProps = props.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('singleValue', props),
    className: cx({
      'single-value': true,
      'single-value--is-disabled': isDisabled
    }, className)
  }, innerProps), children);
};

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var components = {
  ClearIndicator: ClearIndicator,
  Control: Control,
  DropdownIndicator: DropdownIndicator,
  DownChevron: DownChevron,
  CrossIcon: CrossIcon,
  Group: Group,
  GroupHeading: GroupHeading,
  IndicatorsContainer: IndicatorsContainer,
  IndicatorSeparator: IndicatorSeparator,
  Input: Input,
  LoadingIndicator: LoadingIndicator,
  Menu: Menu,
  MenuList: MenuList,
  MenuPortal: MenuPortal,
  LoadingMessage: LoadingMessage,
  NoOptionsMessage: NoOptionsMessage,
  MultiValue: MultiValue,
  MultiValueContainer: MultiValueContainer,
  MultiValueLabel: MultiValueLabel,
  MultiValueRemove: MultiValueRemove,
  Option: Option,
  Placeholder: Placeholder,
  SelectContainer: SelectContainer,
  SingleValue: SingleValue,
  ValueContainer: ValueContainer
};
var defaultComponents = function defaultComponents(props) {
  return _objectSpread$4(_objectSpread$4({}, components), props.components);
};




/***/ }),

/***/ "./node_modules/react-select/dist/react-select.browser.esm.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-select/dist/react-select.browser.esm.js ***!
  \********************************************************************/
/*! exports provided: components, createFilter, defaultTheme, mergeStyles, default, NonceProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonceProvider", function() { return NonceProvider; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index-8b64410c.browser.esm.js */ "./node_modules/react-select/dist/index-8b64410c.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _index_8b64410c_browser_esm_js__WEBPACK_IMPORTED_MODULE_12__["E"]; });

/* harmony import */ var _Select_d53e3329_browser_esm_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Select-d53e3329.browser.esm.js */ "./node_modules/react-select/dist/Select-d53e3329.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFilter", function() { return _Select_d53e3329_browser_esm_js__WEBPACK_IMPORTED_MODULE_13__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTheme", function() { return _Select_d53e3329_browser_esm_js__WEBPACK_IMPORTED_MODULE_13__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return _Select_d53e3329_browser_esm_js__WEBPACK_IMPORTED_MODULE_13__["m"]; });

/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-input-autosize */ "./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _stateManager_66a21f68_browser_esm_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./stateManager-66a21f68.browser.esm.js */ "./node_modules/react-select/dist/stateManager-66a21f68.browser.esm.js");
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");






















function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var NonceProvider = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NonceProvider, _Component);

  var _super = _createSuper(NonceProvider);

  function NonceProvider(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, NonceProvider);

    _this = _super.call(this, props);

    _this.createEmotionCache = function (nonce, key) {
      return Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_18__["default"])({
        nonce: nonce,
        key: key
      });
    };

    _this.createEmotionCache = Object(memoize_one__WEBPACK_IMPORTED_MODULE_19__["default"])(_this.createEmotionCache);
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(NonceProvider, [{
    key: "render",
    value: function render() {
      var emotionCache = this.createEmotionCache(this.props.nonce, this.props.cacheKey);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_emotion_react__WEBPACK_IMPORTED_MODULE_9__["CacheProvider"], {
        value: emotionCache
      }, this.props.children);
    }
  }]);

  return NonceProvider;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var index = Object(_stateManager_66a21f68_browser_esm_js__WEBPACK_IMPORTED_MODULE_17__["m"])(_Select_d53e3329_browser_esm_js__WEBPACK_IMPORTED_MODULE_13__["S"]);

/* harmony default export */ __webpack_exports__["default"] = (index);



/***/ }),

/***/ "./node_modules/react-select/dist/stateManager-66a21f68.browser.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-select/dist/stateManager-66a21f68.browser.esm.js ***!
  \*****************************************************************************/
/*! exports provided: m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return manageState; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var defaultProps = {
  defaultInputValue: '',
  defaultMenuIsOpen: false,
  defaultValue: null
};

var manageState = function manageState(SelectComponent) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(StateManager, _Component);

    var _super = _createSuper(StateManager);

    function StateManager() {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, StateManager);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      _this.select = void 0;
      _this.state = {
        inputValue: _this.props.inputValue !== undefined ? _this.props.inputValue : _this.props.defaultInputValue,
        menuIsOpen: _this.props.menuIsOpen !== undefined ? _this.props.menuIsOpen : _this.props.defaultMenuIsOpen,
        value: _this.props.value !== undefined ? _this.props.value : _this.props.defaultValue
      };

      _this.onChange = function (value, actionMeta) {
        _this.callProp('onChange', value, actionMeta);

        _this.setState({
          value: value
        });
      };

      _this.onInputChange = function (value, actionMeta) {
        // TODO: for backwards compatibility, we allow the prop to return a new
        // value, but now inputValue is a controllable prop we probably shouldn't
        var newValue = _this.callProp('onInputChange', value, actionMeta);

        _this.setState({
          inputValue: newValue !== undefined ? newValue : value
        });
      };

      _this.onMenuOpen = function () {
        _this.callProp('onMenuOpen');

        _this.setState({
          menuIsOpen: true
        });
      };

      _this.onMenuClose = function () {
        _this.callProp('onMenuClose');

        _this.setState({
          menuIsOpen: false
        });
      };

      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(StateManager, [{
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      } // FIXME: untyped flow code, return any

    }, {
      key: "getProp",
      value: function getProp(key) {
        return this.props[key] !== undefined ? this.props[key] : this.state[key];
      } // FIXME: untyped flow code, return any

    }, {
      key: "callProp",
      value: function callProp(name) {
        if (typeof this.props[name] === 'function') {
          var _this$props;

          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          return (_this$props = this.props)[name].apply(_this$props, args);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            defaultInputValue = _this$props2.defaultInputValue,
            defaultMenuIsOpen = _this$props2.defaultMenuIsOpen,
            defaultValue = _this$props2.defaultValue,
            props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__["default"])(_this$props2, ["defaultInputValue", "defaultMenuIsOpen", "defaultValue"]);

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SelectComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
          ref: function ref(_ref) {
            _this2.select = _ref;
          },
          inputValue: this.getProp('inputValue'),
          menuIsOpen: this.getProp('menuIsOpen'),
          onChange: this.onChange,
          onInputChange: this.onInputChange,
          onMenuClose: this.onMenuClose,
          onMenuOpen: this.onMenuOpen,
          value: this.getProp('value')
        }));
      }
    }]);

    return StateManager;
  }(react__WEBPACK_IMPORTED_MODULE_6__["Component"]), _class.defaultProps = defaultProps, _temp;
};




/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0SW1hZ2VzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2NhY2hlL2Rpc3QvZW1vdGlvbi1jYWNoZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2NhY2hlL25vZGVfbW9kdWxlcy9zdHlsaXMvZGlzdC9zdHlsaXMubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vaGFzaC9kaXN0L2hhc2guYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvZW1vdGlvbi1tZW1vaXplLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vcmVhY3QvZGlzdC9lbW90aW9uLWVsZW1lbnQtNGZiZDg5YzUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9yZWFjdC9kaXN0L2Vtb3Rpb24tcmVhY3QuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9yZWFjdC9pc29sYXRlZC1ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy1kby1ub3QtdXNlLXRoaXMtaW4teW91ci1jb2RlL2Rpc3QvZW1vdGlvbi1yZWFjdC1pc29sYXRlZC1ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy1kby1ub3QtdXNlLXRoaXMtaW4teW91ci1jb2RlLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vc2VyaWFsaXplL2Rpc3QvZW1vdGlvbi1zZXJpYWxpemUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zaGVldC9kaXN0L2Vtb3Rpb24tc2hlZXQuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91bml0bGVzcy9kaXN0L3VuaXRsZXNzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vdXRpbHMvZGlzdC9lbW90aW9uLXV0aWxzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vd2Vhay1tZW1vaXplL2Rpc3Qvd2Vhay1tZW1vaXplLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tZW1vaXplLW9uZS9kaXN0L21lbW9pemUtb25lLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LWF1dG9zaXplL2xpYi9BdXRvc2l6ZUlucHV0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2Rpc3QvU2VsZWN0LWQ1M2UzMzI5LmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2Rpc3QvaW5kZXgtOGI2NDQxMGMuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvZGlzdC9yZWFjdC1zZWxlY3QuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvZGlzdC9zdGF0ZU1hbmFnZXItNjZhMjFmNjguYnJvd3Nlci5lc20uanMiXSwibmFtZXMiOlsiTGlzdEltYWdlcyIsInVzZVN0YXRlIiwicGhvdG9zIiwic2V0UGhvdG9zIiwidG9rZW4iLCJnZXRDb29raWUiLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJjb250cm9sIiwiZXJyb3JzIiwidXNlRmllbGRBcnJheSIsIm5hbWUiLCJmaWVsZHMiLCJhcHBlbmQiLCJyZW1vdmUiLCJub20iLCJhbHQiLCJ0aXRyZUNhcm91c2VsIiwidGV4dGVDYXJvdXNlbCIsInBhZ2UiLCJzZWN0aW9uIiwic3VjY2VzcyIsImxvYWRpbmciLCJlcnJvciIsInZhbHVlcyIsInNldFZhbHVlcyIsImdpdGVzIiwic2V0R2l0ZXMiLCJsaXN0RGVzR2l0ZXMiLCJsaXN0R2l0ZXNOb21zIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibGlzdGVyTGVzSW1hZ2VzIiwibGlzdGVEZXNJbWFnZXMiLCJ1c2VFZmZlY3QiLCJkZWxldGVDb25maXJtIiwic2x1ZyIsImFuc3dlciIsIndpbmRvdyIsImNvbmZpcm0iLCJvblN1Ym1pdCIsInNhdmVJbWFnZURhdGEiLCJyZXN1bHQiLCJtYXAiLCJwaG90byIsImluZGV4IiwicmVxdWlyZWQiLCJsb2NhdGlvbiIsIm1heEhlaWdodCIsIndpZHRoIiwicGFnZUFzc29jaWVlIiwiZ2l0ZSIsImkiLCJzZWN0aW9uQXNzb2NpZWUiLCJjb2xvciIsImN1cnNvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQSxrQkFDSUMsc0RBQVEsQ0FBQyxFQUFELENBRFo7QUFBQSxNQUNqQkMsTUFEaUI7QUFBQSxNQUNUQyxTQURTOztBQUV4QixNQUFNQyxLQUFLLEdBQUdDLHVFQUFTLENBQUMsT0FBRCxDQUF2Qjs7QUFGd0IsaUJBRzRCQywrREFBTyxFQUhuQztBQUFBLE1BR2hCQyxRQUhnQixZQUdoQkEsUUFIZ0I7QUFBQSxNQUdOQyxZQUhNLFlBR05BLFlBSE07QUFBQSxNQUdRQyxPQUhSLFlB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RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsMENBQTBDO0FBQzNFO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5RUFBeUU7QUFDekUsMkRBQTJELGVBQWU7QUFDMUUsS0FBSyxFQUFFO0FBQ1A7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKLGlDQUFpQztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHVEQUF1RDtBQUM1RDtBQUNBLHNEQUFzRCxlQUFlLHFCQUFxQjtBQUMxRjtBQUNBO0FBQ0EsTUFBTSx3Q0FBd0M7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1EQUFtRDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0M7Ozs7Ozs7Ozs7OztBQzVRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRDtBQUNjO0FBQ0E7QUFDTjtBQUNOO0FBQ2tDO0FBQ3RCO0FBQ007QUFDTDtBQUMvQjtBQUNtb0I7QUFDbmxCOztBQUUxRjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtB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QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxFQUFFLG1GQUFTOztBQUVYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLHlGQUFlOztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGlCQUFpQjtBQUM1RTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNB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QUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLHlFQUFVO0FBQ3hDO0FBQ0E7O0FBRUEsRUFBRSxzRkFBWTtBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87OztBQUdQO0FBQ0EsUUFBUSx5RUFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCOztBQUV4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7OztBQUdBLCtDQUErQztBQUMvQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7O0FBRWhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxPQUFPOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxPQUFPOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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QUFHLENBQUMsK0NBQVM7QUFDYjs7QUFFNEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vZ2VzdGlvbkltYWdlcy5jMTQyZTdiZTdjNDg4MDNmZDY3Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFibGUsIEJ1dHRvbiwgU3Bpbm5lciB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQge1xyXG5cdGxpc3RlRGVzSW1hZ2VzLFxyXG5cdGxpc3RHaXRlc05vbXMsXHJcblx0c2F2ZUltYWdlRGF0YSxcclxufSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnO1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlRmllbGRBcnJheSwgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5cclxuY29uc3QgTGlzdEltYWdlcyA9ICgpID0+IHtcclxuXHRjb25zdCBbcGhvdG9zLCBzZXRQaG90b3NdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cdGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgY29udHJvbCwgZXJyb3JzIH0gPSB1c2VGb3JtKCk7XHJcblx0Y29uc3QgeyBmaWVsZHMsIGFwcGVuZCwgcmVtb3ZlIH0gPSB1c2VGaWVsZEFycmF5KHtcclxuXHRcdGNvbnRyb2wsXHJcblx0XHRuYW1lOiAnaXRlbXMnLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0bm9tOiAnJyxcclxuXHRcdGFsdDogJycsXHJcblx0XHR0aXRyZUNhcm91c2VsOiAnJyxcclxuXHRcdHRleHRlQ2Fyb3VzZWw6ICcnLFxyXG5cdFx0cGFnZTogJycsXHJcblx0XHRzZWN0aW9uOiAnJyxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRlcnJvcjogJycsXHJcblx0fSk7XHJcblx0Y29uc3QgeyBzdWNjZXNzLCBsb2FkaW5nLCBlcnJvciB9ID0gdmFsdWVzO1xyXG5cclxuXHRjb25zdCBbZ2l0ZXMsIHNldEdpdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgbGlzdERlc0dpdGVzID0gKCkgPT4ge1xyXG5cdFx0bGlzdEdpdGVzTm9tcygpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0R2l0ZXMoLi4uZ2l0ZXMsIGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBsaXN0ZXJMZXNJbWFnZXMgPSAoKSA9PiB7XHJcblx0XHRsaXN0ZURlc0ltYWdlcyh0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRQaG90b3MoLi4ucGhvdG9zLCBkYXRhKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxpc3REZXNHaXRlcygpO1xyXG5cdFx0bGlzdGVyTGVzSW1hZ2VzKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCBkZWxldGVDb25maXJtID0gKHNsdWcpID0+IHtcclxuXHRcdGxldCBhbnN3ZXIgPSB3aW5kb3cuY29uZmlybShcclxuXHRcdFx0J0NldHRlIG9ww6lyYXRpb24gZXN0IGlycsOpdmVyc2libGUsIEV0ZXMtdm91cyBzdXIgZGUgdm91bG9pciBzdXBwcmltZXIgY2V0IGFydGljbGUgPydcclxuXHRcdCk7XHJcblx0XHRpZiAoYW5zd2VyKSB7XHJcblx0XHRcdC8vIGRlbGV0ZUdpdGUoc2x1Zyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdTdXBwcmVzc2lvbicpO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0Y29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4ge1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdFx0Y29uc29sZS5sb2coJ2RhdGEgdmF1dCA9PicsIGRhdGEpO1xyXG5cclxuXHRcdHNhdmVJbWFnZURhdGEoZGF0YSwgdG9rZW4pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygncmVzdWx0IHZhdXQgPT4nLCByZXN1bHQpO1xyXG5cdFx0XHRpZiAocmVzdWx0LmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3VuZSBncm9zc2UgZXJyZXVyJyk7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogcmVzdWx0LmVycm9yIH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRub206ICcnLFxyXG5cdFx0XHRcdFx0YWx0OiAnJyxcclxuXHRcdFx0XHRcdHRpdHJlQ2Fyb3VzZWw6ICcnLFxyXG5cdFx0XHRcdFx0dGV4dGVDYXJvdXNlbDogJycsXHJcblx0XHRcdFx0XHRwYWdlOiAnJyxcclxuXHRcdFx0XHRcdHNlY3Rpb246ICcnLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdC8vIFx0Um91dGVyLnB1c2goJy9hZG1pbi9nZXN0aW9uRGl2ZXJzL0ZBUScpO1xyXG5cdFx0XHRcdC8vIH0sIDIwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG5cdFx0XHRcdDxUYWJsZT5cclxuXHRcdFx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD5Ob208L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD5QaG90bzwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPlRleHRlIGFsdGVybmF0aWY8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD5UaXRyZSBDYXJvdXNlbDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPlRleHRlIENhcm91c2VsPC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+UGFnZSBjb25jZXJuw6llPC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+U2VjdGlvbiBjb25jZXJuw6k8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aCBjb2xTcGFuPScyJz5BY3Rpb25zPC90aD5cclxuXHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFx0XHQ8dGJvZHk+XHJcblx0XHRcdFx0XHRcdHtwaG90b3MubWFwKChwaG90bywgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8dHIga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdtdC01Jz5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPXtgaXRlbXNbJHtpbmRleH1dLm5vbWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtwaG90by5ub219XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17cGhvdG8ubG9jYXRpb259XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1heEhlaWdodDogJ2F1dG8nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6ICc4MHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naW1nIGltZy1mbHVpZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9e3Bob3RvLm5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9e2BpdGVtc1ske2luZGV4fV0uYWx0YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e3Bob3RvLmFsdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9e2BpdGVtc1ske2luZGV4fV0udGl0cmVDYXJvdXNlbGB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtwaG90by50aXRyZUNhcm91c2VsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT17YGl0ZW1zWyR7aW5kZXh9XS50ZXh0ZUNhcm91c2VsYH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e3Bob3RvLnRleHRlQ2Fyb3VzZWx9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFNlbGVjdGlvbm7DqSA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7cGhvdG8ucGFnZUFzc29jaWVlICYmXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwaG90by5wYWdlQXNzb2NpZWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3RcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e3Bob3RvLnBhZ2VBc3NvY2llZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT17YGl0ZW1zWyR7aW5kZXh9XS5wYWdlYH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2N1c3RvbS1zZWxlY3QgbXItc20tMic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbj5TZWxlY3Rpb24uLi48L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Z2l0ZXMubWFwKChnaXRlLCBpKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGtleT17aX0gdmFsdWU9e2dpdGUuc2x1Z30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtnaXRlLm5vbX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9J0F1dHJlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEF1dHJlcyBwYWdlc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRTZWxlY3Rpb25uw6kgOnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3Bob3RvLnNlY3Rpb25Bc3NvY2llZSAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGhvdG8uc2VjdGlvbkFzc29jaWVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9e2BpdGVtc1ske2luZGV4fV0uc2VjdGlvbmB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjdXN0b20tc2VsZWN0IG1yLXNtLTInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gZGVmYXVsdFZhbHVlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0U2VsZWN0aW9uLi4uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nQXV0cmUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QXV0cmVzIHNlY3Rpb25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nZXh0ZXJpZXVyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEV4dMOpcmlldXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPSdwaXNjaW5lJz5QaXNjaW5lPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0naW50ZXJpZXVyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEludMOpcmlldXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPSdhdmF0YXInPkF2YXRhcjwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9J2F2YXRhcic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRWaWduZXR0ZXNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgL2FkbWluL2NydWQvZ2l0ZS8ke3Bob3RvfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmYXMgZmEtcGVuY2lsLXJ1bGVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogJ29yYW5nZScgfX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBkZWxldGVDb25maXJtKHBob3RvKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZhcyBmYS10cmFzaC1hbHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAncmVkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnNvcjogJ3BvaW50ZXInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHRcdDwvVGFibGU+XHJcblx0XHRcdFx0e3N1Y2Nlc3MgJiYgKFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MnPlxyXG5cdFx0XHRcdFx0XHRMYS9MZXMgaW1hZ2Uocykgb250IGJpZW4gw6l0w6kgbW9kaWZpw6llKHMpXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHRcdHtsb2FkaW5nICYmIChcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdhbGVydCBhbGVydC1zdWNjZXNzJz5cclxuXHRcdFx0XHRcdFx0PFNwaW5uZXIgLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdFx0e2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPSdhbGVydCBhbGVydC1kYW5nZXInPntlcnJvcn08L2Rpdj59XHJcblx0XHRcdFx0PEJ1dHRvbiBjb2xvcj0nc3VjY2Vzcyc+VmFsaWRlciBjZXMgaW5mb3M8L0J1dHRvbj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RJbWFnZXM7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59IiwiaW1wb3J0IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChzdHJpbmdzLCByYXcpIHtcbiAgaWYgKCFyYXcpIHtcbiAgICByYXcgPSBzdHJpbmdzLnNsaWNlKDApO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RyaW5ncywge1xuICAgIHJhdzoge1xuICAgICAgdmFsdWU6IE9iamVjdC5mcmVlemUocmF3KVxuICAgIH1cbiAgfSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn0iLCJ2YXIgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSA9IHJlcXVpcmUoXCIuL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXM7IiwiZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChzdHJpbmdzLCByYXcpIHtcbiAgaWYgKCFyYXcpIHtcbiAgICByYXcgPSBzdHJpbmdzLnNsaWNlKDApO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RyaW5ncywge1xuICAgIHJhdzoge1xuICAgICAgdmFsdWU6IE9iamVjdC5mcmVlemUocmF3KVxuICAgIH1cbiAgfSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWw7IiwiaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gJ0BlbW90aW9uL3NoZWV0JztcbmltcG9ydCB7IGRlYWxsb2MsIGFsbG9jLCBuZXh0LCB0b2tlbiwgZnJvbSwgcGVlaywgZGVsaW1pdCwgaWRlbnRpZmllciwgcG9zaXRpb24sIHN0cmluZ2lmeSwgQ09NTUVOVCwgcnVsZXNoZWV0LCBtaWRkbGV3YXJlLCBwcmVmaXhlciwgc2VyaWFsaXplLCBjb21waWxlIH0gZnJvbSAnc3R5bGlzJztcbmltcG9ydCAnQGVtb3Rpb24vd2Vhay1tZW1vaXplJztcbmltcG9ydCAnQGVtb3Rpb24vbWVtb2l6ZSc7XG5cbnZhciBsYXN0ID0gZnVuY3Rpb24gbGFzdChhcnIpIHtcbiAgcmV0dXJuIGFyci5sZW5ndGggPyBhcnJbYXJyLmxlbmd0aCAtIDFdIDogbnVsbDtcbn07XG5cbnZhciB0b1J1bGVzID0gZnVuY3Rpb24gdG9SdWxlcyhwYXJzZWQsIHBvaW50cykge1xuICAvLyBwcmV0ZW5kIHdlJ3ZlIHN0YXJ0ZWQgd2l0aCBhIGNvbW1hXG4gIHZhciBpbmRleCA9IC0xO1xuICB2YXIgY2hhcmFjdGVyID0gNDQ7XG5cbiAgZG8ge1xuICAgIHN3aXRjaCAodG9rZW4oY2hhcmFjdGVyKSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICAvLyAmXFxmXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IDM4ICYmIHBlZWsoKSA9PT0gMTIpIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIG5vdCAxMDAlIGNvcnJlY3QsIHdlIGRvbid0IGFjY291bnQgZm9yIGxpdGVyYWwgc2VxdWVuY2VzIGhlcmUgLSBsaWtlIGZvciBleGFtcGxlIHF1b3RlZCBzdHJpbmdzXG4gICAgICAgICAgLy8gc3R5bGlzIGluc2VydHMgXFxmIGFmdGVyICYgdG8ga25vdyB3aGVuICYgd2hlcmUgaXQgc2hvdWxkIHJlcGxhY2UgdGhpcyBzZXF1ZW5jZSB3aXRoIHRoZSBjb250ZXh0IHNlbGVjdG9yXG4gICAgICAgICAgLy8gYW5kIHdoZW4gaXQgc2hvdWxkIGp1c3QgY29uY2F0ZW5hdGUgdGhlIG91dGVyIGFuZCBpbm5lciBzZWxlY3RvcnNcbiAgICAgICAgICAvLyBpdCdzIHZlcnkgdW5saWtlbHkgZm9yIHRoaXMgc2VxdWVuY2UgdG8gYWN0dWFsbHkgYXBwZWFyIGluIGEgZGlmZmVyZW50IGNvbnRleHQsIHNvIHdlIGp1c3QgbGV2ZXJhZ2UgdGhpcyBmYWN0IGhlcmVcbiAgICAgICAgICBwb2ludHNbaW5kZXhdID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcnNlZFtpbmRleF0gKz0gaWRlbnRpZmllcihwb3NpdGlvbiAtIDEpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICBwYXJzZWRbaW5kZXhdICs9IGRlbGltaXQoY2hhcmFjdGVyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgNDpcbiAgICAgICAgLy8gY29tbWFcbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gNDQpIHtcbiAgICAgICAgICAvLyBjb2xvblxuICAgICAgICAgIHBhcnNlZFsrK2luZGV4XSA9IHBlZWsoKSA9PT0gNTggPyAnJlxcZicgOiAnJztcbiAgICAgICAgICBwb2ludHNbaW5kZXhdID0gcGFyc2VkW2luZGV4XS5sZW5ndGg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgLy8gZmFsbHRocm91Z2hcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcGFyc2VkW2luZGV4XSArPSBmcm9tKGNoYXJhY3Rlcik7XG4gICAgfVxuICB9IHdoaWxlIChjaGFyYWN0ZXIgPSBuZXh0KCkpO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuXG52YXIgZ2V0UnVsZXMgPSBmdW5jdGlvbiBnZXRSdWxlcyh2YWx1ZSwgcG9pbnRzKSB7XG4gIHJldHVybiBkZWFsbG9jKHRvUnVsZXMoYWxsb2ModmFsdWUpLCBwb2ludHMpKTtcbn07IC8vIFdlYWtTZXQgd291bGQgYmUgbW9yZSBhcHByb3ByaWF0ZSwgYnV0IG9ubHkgV2Vha01hcCBpcyBzdXBwb3J0ZWQgaW4gSUUxMVxuXG5cbnZhciBmaXhlZEVsZW1lbnRzID0gLyogI19fUFVSRV9fICovbmV3IFdlYWtNYXAoKTtcbnZhciBjb21wYXQgPSBmdW5jdGlvbiBjb21wYXQoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC50eXBlICE9PSAncnVsZScgfHwgIWVsZW1lbnQucGFyZW50IHx8IC8vIC5sZW5ndGggaW5kaWNhdGVzIGlmIHRoaXMgcnVsZSBjb250YWlucyBwc2V1ZG8gb3Igbm90XG4gICFlbGVtZW50Lmxlbmd0aCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB2YWx1ZSA9IGVsZW1lbnQudmFsdWUsXG4gICAgICBwYXJlbnQgPSBlbGVtZW50LnBhcmVudDtcbiAgdmFyIGlzSW1wbGljaXRSdWxlID0gZWxlbWVudC5jb2x1bW4gPT09IHBhcmVudC5jb2x1bW4gJiYgZWxlbWVudC5saW5lID09PSBwYXJlbnQubGluZTtcblxuICB3aGlsZSAocGFyZW50LnR5cGUgIT09ICdydWxlJykge1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgaWYgKCFwYXJlbnQpIHJldHVybjtcbiAgfSAvLyBzaG9ydC1jaXJjdWl0IGZvciB0aGUgc2ltcGxlc3QgY2FzZVxuXG5cbiAgaWYgKGVsZW1lbnQucHJvcHMubGVuZ3RoID09PSAxICYmIHZhbHVlLmNoYXJDb2RlQXQoMCkgIT09IDU4XG4gIC8qIGNvbG9uICovXG4gICYmICFmaXhlZEVsZW1lbnRzLmdldChwYXJlbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIGlmIHRoaXMgaXMgYW4gaW1wbGljaXRseSBpbnNlcnRlZCBydWxlICh0aGUgb25lIGVhZ2VybHkgaW5zZXJ0ZWQgYXQgdGhlIGVhY2ggbmV3IG5lc3RlZCBsZXZlbClcbiAgLy8gdGhlbiB0aGUgcHJvcHMgaGFzIGFscmVhZHkgYmVlbiBtYW5pcHVsYXRlZCBiZWZvcmVoYW5kIGFzIHRoZXkgdGhhdCBhcnJheSBpcyBzaGFyZWQgYmV0d2VlbiBpdCBhbmQgaXRzIFwicnVsZSBwYXJlbnRcIlxuXG5cbiAgaWYgKGlzSW1wbGljaXRSdWxlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZml4ZWRFbGVtZW50cy5zZXQoZWxlbWVudCwgdHJ1ZSk7XG4gIHZhciBwb2ludHMgPSBbXTtcbiAgdmFyIHJ1bGVzID0gZ2V0UnVsZXModmFsdWUsIHBvaW50cyk7XG4gIHZhciBwYXJlbnRSdWxlcyA9IHBhcmVudC5wcm9wcztcblxuICBmb3IgKHZhciBpID0gMCwgayA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGFyZW50UnVsZXMubGVuZ3RoOyBqKyssIGsrKykge1xuICAgICAgZWxlbWVudC5wcm9wc1trXSA9IHBvaW50c1tpXSA/IHJ1bGVzW2ldLnJlcGxhY2UoLyZcXGYvZywgcGFyZW50UnVsZXNbal0pIDogcGFyZW50UnVsZXNbal0gKyBcIiBcIiArIHJ1bGVzW2ldO1xuICAgIH1cbiAgfVxufTtcbnZhciByZW1vdmVMYWJlbCA9IGZ1bmN0aW9uIHJlbW92ZUxhYmVsKGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2RlY2wnKSB7XG4gICAgdmFyIHZhbHVlID0gZWxlbWVudC52YWx1ZTtcblxuICAgIGlmICggLy8gY2hhcmNvZGUgZm9yIGxcbiAgICB2YWx1ZS5jaGFyQ29kZUF0KDApID09PSAxMDggJiYgLy8gY2hhcmNvZGUgZm9yIGJcbiAgICB2YWx1ZS5jaGFyQ29kZUF0KDIpID09PSA5OCkge1xuICAgICAgLy8gdGhpcyBpZ25vcmVzIGxhYmVsXG4gICAgICBlbGVtZW50W1wicmV0dXJuXCJdID0gJyc7XG4gICAgICBlbGVtZW50LnZhbHVlID0gJyc7XG4gICAgfVxuICB9XG59O1xudmFyIGlnbm9yZUZsYWcgPSAnZW1vdGlvbi1kaXNhYmxlLXNlcnZlci1yZW5kZXJpbmctdW5zYWZlLXNlbGVjdG9yLXdhcm5pbmctcGxlYXNlLWRvLW5vdC11c2UtdGhpcy10aGUtd2FybmluZy1leGlzdHMtZm9yLWEtcmVhc29uJztcblxudmFyIGlzSWdub3JpbmdDb21tZW50ID0gZnVuY3Rpb24gaXNJZ25vcmluZ0NvbW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gISFlbGVtZW50ICYmIGVsZW1lbnQudHlwZSA9PT0gJ2NvbW0nICYmIGVsZW1lbnQuY2hpbGRyZW4uaW5kZXhPZihpZ25vcmVGbGFnKSA+IC0xO1xufTtcblxudmFyIGNyZWF0ZVVuc2FmZVNlbGVjdG9yc0FsYXJtID0gZnVuY3Rpb24gY3JlYXRlVW5zYWZlU2VsZWN0b3JzQWxhcm0oY2FjaGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4pIHtcbiAgICBpZiAoZWxlbWVudC50eXBlICE9PSAncnVsZScpIHJldHVybjtcbiAgICB2YXIgdW5zYWZlUHNldWRvQ2xhc3NlcyA9IGVsZW1lbnQudmFsdWUubWF0Y2goLyg6Zmlyc3R8Om50aHw6bnRoLWxhc3QpLWNoaWxkL2cpO1xuXG4gICAgaWYgKHVuc2FmZVBzZXVkb0NsYXNzZXMgJiYgY2FjaGUuY29tcGF0ICE9PSB0cnVlKSB7XG4gICAgICB2YXIgcHJldkVsZW1lbnQgPSBpbmRleCA+IDAgPyBjaGlsZHJlbltpbmRleCAtIDFdIDogbnVsbDtcblxuICAgICAgaWYgKHByZXZFbGVtZW50ICYmIGlzSWdub3JpbmdDb21tZW50KGxhc3QocHJldkVsZW1lbnQuY2hpbGRyZW4pKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVuc2FmZVBzZXVkb0NsYXNzZXMuZm9yRWFjaChmdW5jdGlvbiAodW5zYWZlUHNldWRvQ2xhc3MpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZSBwc2V1ZG8gY2xhc3MgXFxcIlwiICsgdW5zYWZlUHNldWRvQ2xhc3MgKyBcIlxcXCIgaXMgcG90ZW50aWFsbHkgdW5zYWZlIHdoZW4gZG9pbmcgc2VydmVyLXNpZGUgcmVuZGVyaW5nLiBUcnkgY2hhbmdpbmcgaXQgdG8gXFxcIlwiICsgdW5zYWZlUHNldWRvQ2xhc3Muc3BsaXQoJy1jaGlsZCcpWzBdICsgXCItb2YtdHlwZVxcXCIuXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufTtcblxudmFyIGlzSW1wb3J0UnVsZSA9IGZ1bmN0aW9uIGlzSW1wb3J0UnVsZShlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50LnR5cGUuY2hhckNvZGVBdCgxKSA9PT0gMTA1ICYmIGVsZW1lbnQudHlwZS5jaGFyQ29kZUF0KDApID09PSA2NDtcbn07XG5cbnZhciBpc1ByZXBlbmRlZFdpdGhSZWd1bGFyUnVsZXMgPSBmdW5jdGlvbiBpc1ByZXBlbmRlZFdpdGhSZWd1bGFyUnVsZXMoaW5kZXgsIGNoaWxkcmVuKSB7XG4gIGZvciAodmFyIGkgPSBpbmRleCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKCFpc0ltcG9ydFJ1bGUoY2hpbGRyZW5baV0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59OyAvLyB1c2UgdGhpcyB0byByZW1vdmUgaW5jb3JyZWN0IGVsZW1lbnRzIGZyb20gZnVydGhlciBwcm9jZXNzaW5nXG4vLyBzbyB0aGV5IGRvbid0IGdldCBoYW5kZWQgdG8gdGhlIGBzaGVldGAgKG9yIGFueXRoaW5nIGVsc2UpXG4vLyBhcyB0aGF0IGNvdWxkIHBvdGVudGlhbGx5IGxlYWQgdG8gYWRkaXRpb25hbCBsb2dzIHdoaWNoIGluIHR1cm4gY291bGQgYmUgb3ZlcmhlbG1pbmcgdG8gdGhlIHVzZXJcblxuXG52YXIgbnVsbGlmeUVsZW1lbnQgPSBmdW5jdGlvbiBudWxsaWZ5RWxlbWVudChlbGVtZW50KSB7XG4gIGVsZW1lbnQudHlwZSA9ICcnO1xuICBlbGVtZW50LnZhbHVlID0gJyc7XG4gIGVsZW1lbnRbXCJyZXR1cm5cIl0gPSAnJztcbiAgZWxlbWVudC5jaGlsZHJlbiA9ICcnO1xuICBlbGVtZW50LnByb3BzID0gJyc7XG59O1xuXG52YXIgaW5jb3JyZWN0SW1wb3J0QWxhcm0gPSBmdW5jdGlvbiBpbmNvcnJlY3RJbXBvcnRBbGFybShlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4pIHtcbiAgaWYgKCFpc0ltcG9ydFJ1bGUoZWxlbWVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZWxlbWVudC5wYXJlbnQpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiYEBpbXBvcnRgIHJ1bGVzIGNhbid0IGJlIG5lc3RlZCBpbnNpZGUgb3RoZXIgcnVsZXMuIFBsZWFzZSBtb3ZlIGl0IHRvIHRoZSB0b3AgbGV2ZWwgYW5kIHB1dCBpdCBiZWZvcmUgcmVndWxhciBydWxlcy4gS2VlcCBpbiBtaW5kIHRoYXQgdGhleSBjYW4gb25seSBiZSB1c2VkIHdpdGhpbiBnbG9iYWwgc3R5bGVzLlwiKTtcbiAgICBudWxsaWZ5RWxlbWVudChlbGVtZW50KTtcbiAgfSBlbHNlIGlmIChpc1ByZXBlbmRlZFdpdGhSZWd1bGFyUnVsZXMoaW5kZXgsIGNoaWxkcmVuKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJgQGltcG9ydGAgcnVsZXMgY2FuJ3QgYmUgYWZ0ZXIgb3RoZXIgcnVsZXMuIFBsZWFzZSBwdXQgeW91ciBgQGltcG9ydGAgcnVsZXMgYmVmb3JlIHlvdXIgb3RoZXIgcnVsZXMuXCIpO1xuICAgIG51bGxpZnlFbGVtZW50KGVsZW1lbnQpO1xuICB9XG59O1xuXG52YXIgZGVmYXVsdFN0eWxpc1BsdWdpbnMgPSBbcHJlZml4ZXJdO1xuXG52YXIgY3JlYXRlQ2FjaGUgPSBmdW5jdGlvbiBjcmVhdGVDYWNoZShvcHRpb25zKSB7XG4gIHZhciBrZXkgPSBvcHRpb25zLmtleTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAha2V5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGhhdmUgdG8gY29uZmlndXJlIGBrZXlgIGZvciB5b3VyIGNhY2hlLiBQbGVhc2UgbWFrZSBzdXJlIGl0J3MgdW5pcXVlIChhbmQgbm90IGVxdWFsIHRvICdjc3MnKSBhcyBpdCdzIHVzZWQgZm9yIGxpbmtpbmcgc3R5bGVzIHRvIHlvdXIgY2FjaGUuXFxuXCIgKyBcIklmIG11bHRpcGxlIGNhY2hlcyBzaGFyZSB0aGUgc2FtZSBrZXkgdGhleSBtaWdodCBcXFwiZmlnaHRcXFwiIGZvciBlYWNoIG90aGVyJ3Mgc3R5bGUgZWxlbWVudHMuXCIpO1xuICB9XG5cbiAgaWYgKCBrZXkgPT09ICdjc3MnKSB7XG4gICAgdmFyIHNzclN0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVtkYXRhLWVtb3Rpb25dOm5vdChbZGF0YS1zXSlcIik7IC8vIGdldCBTU1JlZCBzdHlsZXMgb3V0IG9mIHRoZSB3YXkgb2YgUmVhY3QncyBoeWRyYXRpb25cbiAgICAvLyBkb2N1bWVudC5oZWFkIGlzIGEgc2FmZSBwbGFjZSB0byBtb3ZlIHRoZW0gdG9cblxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoc3NyU3R5bGVzLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXMnLCAnJyk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgc3R5bGlzUGx1Z2lucyA9IG9wdGlvbnMuc3R5bGlzUGx1Z2lucyB8fCBkZWZhdWx0U3R5bGlzUGx1Z2lucztcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICBpZiAoL1teYS16LV0vLnRlc3Qoa2V5KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRW1vdGlvbiBrZXkgbXVzdCBvbmx5IGNvbnRhaW4gbG93ZXIgY2FzZSBhbHBoYWJldGljYWwgY2hhcmFjdGVycyBhbmQgLSBidXQgXFxcIlwiICsga2V5ICsgXCJcXFwiIHdhcyBwYXNzZWRcIik7XG4gICAgfVxuICB9XG5cbiAgdmFyIGluc2VydGVkID0ge307IC8vICRGbG93Rml4TWVcblxuICB2YXIgY29udGFpbmVyO1xuICB2YXIgbm9kZXNUb0h5ZHJhdGUgPSBbXTtcblxuICB7XG4gICAgY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXIgfHwgZG9jdW1lbnQuaGVhZDtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVtkYXRhLWVtb3Rpb25dXCIpLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgdmFyIGF0dHJpYiA9IG5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1lbW90aW9uXCIpLnNwbGl0KCcgJyk7XG5cbiAgICAgIGlmIChhdHRyaWJbMF0gIT09IGtleSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGF0dHJpYi5sZW5ndGg7IGkrKykge1xuICAgICAgICBpbnNlcnRlZFthdHRyaWJbaV1dID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgbm9kZXNUb0h5ZHJhdGUucHVzaChub2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBfaW5zZXJ0O1xuXG4gIHZhciBvbW5pcHJlc2VudFBsdWdpbnMgPSBbY29tcGF0LCByZW1vdmVMYWJlbF07XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBvbW5pcHJlc2VudFBsdWdpbnMucHVzaChjcmVhdGVVbnNhZmVTZWxlY3RvcnNBbGFybSh7XG4gICAgICBnZXQgY29tcGF0KCkge1xuICAgICAgICByZXR1cm4gY2FjaGUuY29tcGF0O1xuICAgICAgfVxuXG4gICAgfSksIGluY29ycmVjdEltcG9ydEFsYXJtKTtcbiAgfVxuXG4gIHtcbiAgICB2YXIgY3VycmVudFNoZWV0O1xuICAgIHZhciBmaW5hbGl6aW5nUGx1Z2lucyA9IFtzdHJpbmdpZnksIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgaWYgKCFlbGVtZW50LnJvb3QpIHtcbiAgICAgICAgaWYgKGVsZW1lbnRbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICBjdXJyZW50U2hlZXQuaW5zZXJ0KGVsZW1lbnRbXCJyZXR1cm5cIl0pO1xuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQudmFsdWUgJiYgZWxlbWVudC50eXBlICE9PSBDT01NRU5UKSB7XG4gICAgICAgICAgLy8gaW5zZXJ0IGVtcHR5IHJ1bGUgaW4gbm9uLXByb2R1Y3Rpb24gZW52aXJvbm1lbnRzXG4gICAgICAgICAgLy8gc28gQGVtb3Rpb24vamVzdCBjYW4gZ3JhYiBga2V5YCBmcm9tIHRoZSAoSlMpRE9NIGZvciBjYWNoZXMgd2l0aG91dCBhbnkgcnVsZXMgaW5zZXJ0ZWQgeWV0XG4gICAgICAgICAgY3VycmVudFNoZWV0Lmluc2VydChlbGVtZW50LnZhbHVlICsgXCJ7fVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gOiBydWxlc2hlZXQoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgIGN1cnJlbnRTaGVldC5pbnNlcnQocnVsZSk7XG4gICAgfSldO1xuICAgIHZhciBzZXJpYWxpemVyID0gbWlkZGxld2FyZShvbW5pcHJlc2VudFBsdWdpbnMuY29uY2F0KHN0eWxpc1BsdWdpbnMsIGZpbmFsaXppbmdQbHVnaW5zKSk7XG5cbiAgICB2YXIgc3R5bGlzID0gZnVuY3Rpb24gc3R5bGlzKHN0eWxlcykge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZShjb21waWxlKHN0eWxlcyksIHNlcmlhbGl6ZXIpO1xuICAgIH07XG5cbiAgICBfaW5zZXJ0ID0gZnVuY3Rpb24gaW5zZXJ0KHNlbGVjdG9yLCBzZXJpYWxpemVkLCBzaGVldCwgc2hvdWxkQ2FjaGUpIHtcbiAgICAgIGN1cnJlbnRTaGVldCA9IHNoZWV0O1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBzZXJpYWxpemVkLm1hcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGN1cnJlbnRTaGVldCA9IHtcbiAgICAgICAgICBpbnNlcnQ6IGZ1bmN0aW9uIGluc2VydChydWxlKSB7XG4gICAgICAgICAgICBzaGVldC5pbnNlcnQocnVsZSArIHNlcmlhbGl6ZWQubWFwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHN0eWxpcyhzZWxlY3RvciA/IHNlbGVjdG9yICsgXCJ7XCIgKyBzZXJpYWxpemVkLnN0eWxlcyArIFwifVwiIDogc2VyaWFsaXplZC5zdHlsZXMpO1xuXG4gICAgICBpZiAoc2hvdWxkQ2FjaGUpIHtcbiAgICAgICAgY2FjaGUuaW5zZXJ0ZWRbc2VyaWFsaXplZC5uYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IHtcbiAgICBrZXk6IGtleSxcbiAgICBzaGVldDogbmV3IFN0eWxlU2hlZXQoe1xuICAgICAga2V5OiBrZXksXG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgIG5vbmNlOiBvcHRpb25zLm5vbmNlLFxuICAgICAgc3BlZWR5OiBvcHRpb25zLnNwZWVkeSxcbiAgICAgIHByZXBlbmQ6IG9wdGlvbnMucHJlcGVuZFxuICAgIH0pLFxuICAgIG5vbmNlOiBvcHRpb25zLm5vbmNlLFxuICAgIGluc2VydGVkOiBpbnNlcnRlZCxcbiAgICByZWdpc3RlcmVkOiB7fSxcbiAgICBpbnNlcnQ6IF9pbnNlcnRcbiAgfTtcbiAgY2FjaGUuc2hlZXQuaHlkcmF0ZShub2Rlc1RvSHlkcmF0ZSk7XG4gIHJldHVybiBjYWNoZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNhY2hlO1xuIiwidmFyIGU9XCItbXMtXCI7dmFyIHI9XCItbW96LVwiO3ZhciBhPVwiLXdlYmtpdC1cIjt2YXIgYz1cImNvbW1cIjt2YXIgbj1cInJ1bGVcIjt2YXIgdD1cImRlY2xcIjt2YXIgcz1cIkBwYWdlXCI7dmFyIHU9XCJAbWVkaWFcIjt2YXIgaT1cIkBpbXBvcnRcIjt2YXIgZj1cIkBjaGFyc2V0XCI7dmFyIG89XCJAdmlld3BvcnRcIjt2YXIgbD1cIkBzdXBwb3J0c1wiO3ZhciB2PVwiQGRvY3VtZW50XCI7dmFyIGg9XCJAbmFtZXNwYWNlXCI7dmFyIHA9XCJAa2V5ZnJhbWVzXCI7dmFyIHc9XCJAZm9udC1mYWNlXCI7dmFyIGI9XCJAY291bnRlci1zdHlsZVwiO3ZhciAkPVwiQGZvbnQtZmVhdHVyZS12YWx1ZXNcIjt2YXIgaz1NYXRoLmFiczt2YXIgZD1TdHJpbmcuZnJvbUNoYXJDb2RlO2Z1bmN0aW9uIG0oZSxyKXtyZXR1cm4oKChyPDwyXnooZSwwKSk8PDJeeihlLDEpKTw8Ml56KGUsMikpPDwyXnooZSwzKX1mdW5jdGlvbiBnKGUpe3JldHVybiBlLnRyaW0oKX1mdW5jdGlvbiB4KGUscil7cmV0dXJuKGU9ci5leGVjKGUpKT9lWzBdOmV9ZnVuY3Rpb24geShlLHIsYSl7cmV0dXJuIGUucmVwbGFjZShyLGEpfWZ1bmN0aW9uIGooZSxyKXtyZXR1cm4gZS5pbmRleE9mKHIpfWZ1bmN0aW9uIHooZSxyKXtyZXR1cm4gZS5jaGFyQ29kZUF0KHIpfDB9ZnVuY3Rpb24gQyhlLHIsYSl7cmV0dXJuIGUuc2xpY2UocixhKX1mdW5jdGlvbiBBKGUpe3JldHVybiBlLmxlbmd0aH1mdW5jdGlvbiBNKGUpe3JldHVybiBlLmxlbmd0aH1mdW5jdGlvbiBPKGUscil7cmV0dXJuIHIucHVzaChlKSxlfWZ1bmN0aW9uIFMoZSxyKXtyZXR1cm4gZS5tYXAocikuam9pbihcIlwiKX12YXIgcT0xO3ZhciBCPTE7dmFyIEQ9MDt2YXIgRT0wO3ZhciBGPTA7dmFyIEc9XCJcIjtmdW5jdGlvbiBIKGUscixhLGMsbix0LHMpe3JldHVybnt2YWx1ZTplLHJvb3Q6cixwYXJlbnQ6YSx0eXBlOmMscHJvcHM6bixjaGlsZHJlbjp0LGxpbmU6cSxjb2x1bW46QixsZW5ndGg6cyxyZXR1cm46XCJcIn19ZnVuY3Rpb24gSShlLHIsYSl7cmV0dXJuIEgoZSxyLnJvb3Qsci5wYXJlbnQsYSxyLnByb3BzLHIuY2hpbGRyZW4sMCl9ZnVuY3Rpb24gSigpe3JldHVybiBGfWZ1bmN0aW9uIEsoKXtGPUU8RD96KEcsRSsrKTowO2lmKEIrKyxGPT09MTApQj0xLHErKztyZXR1cm4gRn1mdW5jdGlvbiBMKCl7cmV0dXJuIHooRyxFKX1mdW5jdGlvbiBOKCl7cmV0dXJuIEV9ZnVuY3Rpb24gUChlLHIpe3JldHVybiBDKEcsZSxyKX1mdW5jdGlvbiBRKGUpe3N3aXRjaChlKXtjYXNlIDA6Y2FzZSA5OmNhc2UgMTA6Y2FzZSAxMzpjYXNlIDMyOnJldHVybiA1O2Nhc2UgMzM6Y2FzZSA0MzpjYXNlIDQ0OmNhc2UgNDc6Y2FzZSA2MjpjYXNlIDY0OmNhc2UgMTI2OmNhc2UgNTk6Y2FzZSAxMjM6Y2FzZSAxMjU6cmV0dXJuIDQ7Y2FzZSA1ODpyZXR1cm4gMztjYXNlIDM0OmNhc2UgMzk6Y2FzZSA0MDpjYXNlIDkxOnJldHVybiAyO2Nhc2UgNDE6Y2FzZSA5MzpyZXR1cm4gMX1yZXR1cm4gMH1mdW5jdGlvbiBSKGUpe3JldHVybiBxPUI9MSxEPUEoRz1lKSxFPTAsW119ZnVuY3Rpb24gVChlKXtyZXR1cm4gRz1cIlwiLGV9ZnVuY3Rpb24gVShlKXtyZXR1cm4gZyhQKEUtMSxZKGU9PT05MT9lKzI6ZT09PTQwP2UrMTplKSkpfWZ1bmN0aW9uIFYoZSl7cmV0dXJuIFQoWChSKGUpKSl9ZnVuY3Rpb24gVyhlKXt3aGlsZShGPUwoKSlpZihGPDMzKUsoKTtlbHNlIGJyZWFrO3JldHVybiBRKGUpPjJ8fFEoRik+Mz9cIlwiOlwiIFwifWZ1bmN0aW9uIFgoZSl7d2hpbGUoSygpKXN3aXRjaChRKEYpKXtjYXNlIDA6TyhfKEUtMSksZSk7YnJlYWs7Y2FzZSAyOk8oVShGKSxlKTticmVhaztkZWZhdWx0Ok8oZChGKSxlKX1yZXR1cm4gZX1mdW5jdGlvbiBZKGUpe3doaWxlKEsoKSlzd2l0Y2goRil7Y2FzZSBlOnJldHVybiBFO2Nhc2UgMzQ6Y2FzZSAzOTpyZXR1cm4gWShlPT09MzR8fGU9PT0zOT9lOkYpO2Nhc2UgNDA6aWYoZT09PTQxKVkoZSk7YnJlYWs7Y2FzZSA5MjpLKCk7YnJlYWt9cmV0dXJuIEV9ZnVuY3Rpb24gWihlLHIpe3doaWxlKEsoKSlpZihlK0Y9PT00NysxMClicmVhaztlbHNlIGlmKGUrRj09PTQyKzQyJiZMKCk9PT00NylicmVhaztyZXR1cm5cIi8qXCIrUChyLEUtMSkrXCIqXCIrZChlPT09NDc/ZTpLKCkpfWZ1bmN0aW9uIF8oZSl7d2hpbGUoIVEoTCgpKSlLKCk7cmV0dXJuIFAoZSxFKX1mdW5jdGlvbiBlZShlKXtyZXR1cm4gVChyZShcIlwiLG51bGwsbnVsbCxudWxsLFtcIlwiXSxlPVIoZSksMCxbMF0sZSkpfWZ1bmN0aW9uIHJlKGUscixhLGMsbix0LHMsdSxpKXt2YXIgZj0wO3ZhciBvPTA7dmFyIGw9czt2YXIgdj0wO3ZhciBoPTA7dmFyIHA9MDt2YXIgdz0xO3ZhciBiPTE7dmFyICQ9MTt2YXIgaz0wO3ZhciBtPVwiXCI7dmFyIGc9bjt2YXIgeD10O3ZhciBqPWM7dmFyIHo9bTt3aGlsZShiKXN3aXRjaChwPWssaz1LKCkpe2Nhc2UgMzQ6Y2FzZSAzOTpjYXNlIDkxOmNhc2UgNDA6eis9VShrKTticmVhaztjYXNlIDk6Y2FzZSAxMDpjYXNlIDEzOmNhc2UgMzI6eis9VyhwKTticmVhaztjYXNlIDQ3OnN3aXRjaChMKCkpe2Nhc2UgNDI6Y2FzZSA0NzpPKGNlKFooSygpLE4oKSkscixhKSxpKTticmVhaztkZWZhdWx0OnorPVwiL1wifWJyZWFrO2Nhc2UgMTIzKnc6dVtmKytdPUEoeikqJDtjYXNlIDEyNSp3OmNhc2UgNTk6Y2FzZSAwOnN3aXRjaChrKXtjYXNlIDA6Y2FzZSAxMjU6Yj0wO2Nhc2UgNTkrbzppZihoPjAmJkEoeiktbClPKGg+MzI/bmUoeitcIjtcIixjLGEsbC0xKTpuZSh5KHosXCIgXCIsXCJcIikrXCI7XCIsYyxhLGwtMiksaSk7YnJlYWs7Y2FzZSA1OTp6Kz1cIjtcIjtkZWZhdWx0Ok8oaj1hZSh6LHIsYSxmLG8sbix1LG0sZz1bXSx4PVtdLGwpLHQpO2lmKGs9PT0xMjMpaWYobz09PTApcmUoeixyLGosaixnLHQsbCx1LHgpO2Vsc2Ugc3dpdGNoKHYpe2Nhc2UgMTAwOmNhc2UgMTA5OmNhc2UgMTE1OnJlKGUsaixqLGMmJk8oYWUoZSxqLGosMCwwLG4sdSxtLG4sZz1bXSxsKSx4KSxuLHgsbCx1LGM/Zzp4KTticmVhaztkZWZhdWx0OnJlKHosaixqLGosW1wiXCJdLHgsbCx1LHgpfX1mPW89aD0wLHc9JD0xLG09ej1cIlwiLGw9czticmVhaztjYXNlIDU4Omw9MStBKHopLGg9cDtkZWZhdWx0OnN3aXRjaCh6Kz1kKGspLGsqdyl7Y2FzZSAzODokPW8+MD8xOih6Kz1cIlxcZlwiLC0xKTticmVhaztjYXNlIDQ0OnVbZisrXT0oQSh6KS0xKSokLCQ9MTticmVhaztjYXNlIDY0OmlmKEwoKT09PTQ1KXorPVUoSygpKTt2PUwoKSxvPUEobT16Kz1fKE4oKSkpLGsrKzticmVhaztjYXNlIDQ1OmlmKHA9PT00NSYmQSh6KT09Mil3PTB9fXJldHVybiB0fWZ1bmN0aW9uIGFlKGUscixhLGMsdCxzLHUsaSxmLG8sbCl7dmFyIHY9dC0xO3ZhciBoPXQ9PT0wP3M6W1wiXCJdO3ZhciBwPU0oaCk7Zm9yKHZhciB3PTAsYj0wLCQ9MDt3PGM7Kyt3KWZvcih2YXIgZD0wLG09QyhlLHYrMSx2PWsoYj11W3ddKSkseD1lO2Q8cDsrK2QpaWYoeD1nKGI+MD9oW2RdK1wiIFwiK206eShtLC8mXFxmL2csaFtkXSkpKWZbJCsrXT14O3JldHVybiBIKGUscixhLHQ9PT0wP246aSxmLG8sbCl9ZnVuY3Rpb24gY2UoZSxyLGEpe3JldHVybiBIKGUscixhLGMsZChKKCkpLEMoZSwyLC0yKSwwKX1mdW5jdGlvbiBuZShlLHIsYSxjKXtyZXR1cm4gSChlLHIsYSx0LEMoZSwwLGMpLEMoZSxjKzEsLTEpLGMpfWZ1bmN0aW9uIHRlKGMsbil7c3dpdGNoKG0oYyxuKSl7Y2FzZSA1NzM3OmNhc2UgNDIwMTpjYXNlIDMxNzc6Y2FzZSAzNDMzOmNhc2UgMTY0MTpjYXNlIDQ0NTc6Y2FzZSAyOTIxOmNhc2UgNTU3MjpjYXNlIDYzNTY6Y2FzZSA1ODQ0OmNhc2UgMzE5MTpjYXNlIDY2NDU6Y2FzZSAzMDA1OmNhc2UgNjM5MTpjYXNlIDU4Nzk6Y2FzZSA1NjIzOmNhc2UgNjEzNTpjYXNlIDQ1OTk6Y2FzZSA0ODU1OmNhc2UgNDIxNTpjYXNlIDYzODk6Y2FzZSA1MTA5OmNhc2UgNTM2NTpjYXNlIDU2MjE6Y2FzZSAzODI5OnJldHVybiBhK2MrYztjYXNlIDUzNDk6Y2FzZSA0MjQ2OmNhc2UgNDgxMDpjYXNlIDY5Njg6Y2FzZSAyNzU2OnJldHVybiBhK2MrcitjK2UrYytjO2Nhc2UgNjgyODpjYXNlIDQyNjg6cmV0dXJuIGErYytlK2MrYztjYXNlIDYxNjU6cmV0dXJuIGErYytlK1wiZmxleC1cIitjK2M7Y2FzZSA1MTg3OnJldHVybiBhK2MreShjLC8oXFx3KykuKyg6W15dKykvLGErXCJib3gtJDEkMlwiK2UrXCJmbGV4LSQxJDJcIikrYztjYXNlIDU0NDM6cmV0dXJuIGErYytlK1wiZmxleC1pdGVtLVwiK3koYywvZmxleC18LXNlbGYvLFwiXCIpK2M7Y2FzZSA0Njc1OnJldHVybiBhK2MrZStcImZsZXgtbGluZS1wYWNrXCIreShjLC9hbGlnbi1jb250ZW50fGZsZXgtfC1zZWxmLyxcIlwiKStjO2Nhc2UgNTU0ODpyZXR1cm4gYStjK2UreShjLFwic2hyaW5rXCIsXCJuZWdhdGl2ZVwiKStjO2Nhc2UgNTI5MjpyZXR1cm4gYStjK2UreShjLFwiYmFzaXNcIixcInByZWZlcnJlZC1zaXplXCIpK2M7Y2FzZSA2MDYwOnJldHVybiBhK1wiYm94LVwiK3koYyxcIi1ncm93XCIsXCJcIikrYStjK2UreShjLFwiZ3Jvd1wiLFwicG9zaXRpdmVcIikrYztjYXNlIDQ1NTQ6cmV0dXJuIGEreShjLC8oW14tXSkodHJhbnNmb3JtKS9nLFwiJDFcIithK1wiJDJcIikrYztjYXNlIDYxODc6cmV0dXJuIHkoeSh5KGMsLyh6b29tLXxncmFiKS8sYStcIiQxXCIpLC8oaW1hZ2Utc2V0KS8sYStcIiQxXCIpLGMsXCJcIikrYztjYXNlIDU0OTU6Y2FzZSAzOTU5OnJldHVybiB5KGMsLyhpbWFnZS1zZXRcXChbXl0qKS8sYStcIiQxXCIrXCIkYCQxXCIpO2Nhc2UgNDk2ODpyZXR1cm4geSh5KGMsLyguKzopKGZsZXgtKT8oLiopLyxhK1wiYm94LXBhY2s6JDNcIitlK1wiZmxleC1wYWNrOiQzXCIpLC9zListYlteO10rLyxcImp1c3RpZnlcIikrYStjK2M7Y2FzZSA0MDk1OmNhc2UgMzU4MzpjYXNlIDQwNjg6Y2FzZSAyNTMyOnJldHVybiB5KGMsLyguKyktaW5saW5lKC4rKS8sYStcIiQxJDJcIikrYztjYXNlIDgxMTY6Y2FzZSA3MDU5OmNhc2UgNTc1MzpjYXNlIDU1MzU6Y2FzZSA1NDQ1OmNhc2UgNTcwMTpjYXNlIDQ5MzM6Y2FzZSA0Njc3OmNhc2UgNTUzMzpjYXNlIDU3ODk6Y2FzZSA1MDIxOmNhc2UgNDc2NTppZihBKGMpLTEtbj42KXN3aXRjaCh6KGMsbisxKSl7Y2FzZSAxMDI6bj16KGMsbiszKTtjYXNlIDEwOTpyZXR1cm4geShjLC8oLis6KSguKyktKFteXSspLyxcIiQxXCIrYStcIiQyLSQzXCIrXCIkMVwiK3IrKG49PTEwOD9cIiQzXCI6XCIkMi0kM1wiKSkrYztjYXNlIDExNTpyZXR1cm5+aihjLFwic3RyZXRjaFwiKT90ZSh5KGMsXCJzdHJldGNoXCIsXCJmaWxsLWF2YWlsYWJsZVwiKSxuKStjOmN9YnJlYWs7Y2FzZSA0OTQ5OmlmKHooYyxuKzEpIT09MTE1KWJyZWFrO2Nhc2UgNjQ0NDpzd2l0Y2goeihjLEEoYyktMy0ofmooYyxcIiFpbXBvcnRhbnRcIikmJjEwKSkpe2Nhc2UgMTA3OmNhc2UgMTExOnJldHVybiB5KGMsYyxhK2MpK2M7Y2FzZSAxMDE6cmV0dXJuIHkoYywvKC4rOikoW147IV0rKSg7fCEuKyk/LyxcIiQxXCIrYSsoeihjLDE0KT09PTQ1P1wiaW5saW5lLVwiOlwiXCIpK1wiYm94JDNcIitcIiQxXCIrYStcIiQyJDNcIitcIiQxXCIrZStcIiQyYm94JDNcIikrY31icmVhaztjYXNlIDU5MzY6c3dpdGNoKHooYyxuKzExKSl7Y2FzZSAxMTQ6cmV0dXJuIGErYytlK3koYywvW3N2aF1cXHcrLVt0YmxyXXsyfS8sXCJ0YlwiKStjO2Nhc2UgMTA4OnJldHVybiBhK2MrZSt5KGMsL1tzdmhdXFx3Ky1bdGJscl17Mn0vLFwidGItcmxcIikrYztjYXNlIDQ1OnJldHVybiBhK2MrZSt5KGMsL1tzdmhdXFx3Ky1bdGJscl17Mn0vLFwibHJcIikrY31yZXR1cm4gYStjK2UrYytjfXJldHVybiBjfWZ1bmN0aW9uIHNlKGUscil7dmFyIGE9XCJcIjt2YXIgYz1NKGUpO2Zvcih2YXIgbj0wO248YztuKyspYSs9cihlW25dLG4sZSxyKXx8XCJcIjtyZXR1cm4gYX1mdW5jdGlvbiB1ZShlLHIsYSxzKXtzd2l0Y2goZS50eXBlKXtjYXNlIGk6Y2FzZSB0OnJldHVybiBlLnJldHVybj1lLnJldHVybnx8ZS52YWx1ZTtjYXNlIGM6cmV0dXJuXCJcIjtjYXNlIG46ZS52YWx1ZT1lLnByb3BzLmpvaW4oXCIsXCIpfXJldHVybiBBKGE9c2UoZS5jaGlsZHJlbixzKSk/ZS5yZXR1cm49ZS52YWx1ZStcIntcIithK1wifVwiOlwiXCJ9ZnVuY3Rpb24gaWUoZSl7dmFyIHI9TShlKTtyZXR1cm4gZnVuY3Rpb24oYSxjLG4sdCl7dmFyIHM9XCJcIjtmb3IodmFyIHU9MDt1PHI7dSsrKXMrPWVbdV0oYSxjLG4sdCl8fFwiXCI7cmV0dXJuIHN9fWZ1bmN0aW9uIGZlKGUpe3JldHVybiBmdW5jdGlvbihyKXtpZighci5yb290KWlmKHI9ci5yZXR1cm4pZShyKX19ZnVuY3Rpb24gb2UoYyxzLHUsaSl7aWYoIWMucmV0dXJuKXN3aXRjaChjLnR5cGUpe2Nhc2UgdDpjLnJldHVybj10ZShjLnZhbHVlLGMubGVuZ3RoKTticmVhaztjYXNlIHA6cmV0dXJuIHNlKFtJKHkoYy52YWx1ZSxcIkBcIixcIkBcIithKSxjLFwiXCIpXSxpKTtjYXNlIG46aWYoYy5sZW5ndGgpcmV0dXJuIFMoYy5wcm9wcywoZnVuY3Rpb24obil7c3dpdGNoKHgobiwvKDo6cGxhY1xcdyt8OnJlYWQtXFx3KykvKSl7Y2FzZVwiOnJlYWQtb25seVwiOmNhc2VcIjpyZWFkLXdyaXRlXCI6cmV0dXJuIHNlKFtJKHkobiwvOihyZWFkLVxcdyspLyxcIjpcIityK1wiJDFcIiksYyxcIlwiKV0saSk7Y2FzZVwiOjpwbGFjZWhvbGRlclwiOnJldHVybiBzZShbSSh5KG4sLzoocGxhY1xcdyspLyxcIjpcIithK1wiaW5wdXQtJDFcIiksYyxcIlwiKSxJKHkobiwvOihwbGFjXFx3KykvLFwiOlwiK3IrXCIkMVwiKSxjLFwiXCIpLEkoeShuLC86KHBsYWNcXHcrKS8sZStcImlucHV0LSQxXCIpLGMsXCJcIildLGkpfXJldHVyblwiXCJ9KSl9fWZ1bmN0aW9uIGxlKGUpe3N3aXRjaChlLnR5cGUpe2Nhc2UgbjplLnByb3BzPWUucHJvcHMubWFwKChmdW5jdGlvbihyKXtyZXR1cm4gUyhWKHIpLChmdW5jdGlvbihyLGEsYyl7c3dpdGNoKHoociwwKSl7Y2FzZSAxMjpyZXR1cm4gQyhyLDEsQShyKSk7Y2FzZSAwOmNhc2UgNDA6Y2FzZSA0MzpjYXNlIDYyOmNhc2UgMTI2OnJldHVybiByO2Nhc2UgNTg6aWYoY1thKzFdPT09XCJnbG9iYWxcIiljW2ErMV09XCJcIixjW2ErMl09XCJcXGZcIitDKGNbYSsyXSxhPTEsLTEpO2Nhc2UgMzI6cmV0dXJuIGE9PT0xP1wiXCI6cjtkZWZhdWx0OnN3aXRjaChhKXtjYXNlIDA6ZT1yO3JldHVybiBNKGMpPjE/XCJcIjpyO2Nhc2UgYT1NKGMpLTE6Y2FzZSAyOnJldHVybiBhPT09Mj9yK2UrZTpyK2U7ZGVmYXVsdDpyZXR1cm4gcn19fSkpfSkpfX1leHBvcnR7ZiBhcyBDSEFSU0VULGMgYXMgQ09NTUVOVCxiIGFzIENPVU5URVJfU1RZTEUsdCBhcyBERUNMQVJBVElPTix2IGFzIERPQ1VNRU5ULHcgYXMgRk9OVF9GQUNFLCQgYXMgRk9OVF9GRUFUVVJFX1ZBTFVFUyxpIGFzIElNUE9SVCxwIGFzIEtFWUZSQU1FUyx1IGFzIE1FRElBLHIgYXMgTU9aLGUgYXMgTVMsaCBhcyBOQU1FU1BBQ0UscyBhcyBQQUdFLG4gYXMgUlVMRVNFVCxsIGFzIFNVUFBPUlRTLG8gYXMgVklFV1BPUlQsYSBhcyBXRUJLSVQsayBhcyBhYnMsUiBhcyBhbGxvYyxPIGFzIGFwcGVuZCxOIGFzIGNhcmV0LEogYXMgY2hhcixGIGFzIGNoYXJhY3RlcixHIGFzIGNoYXJhY3RlcnMseiBhcyBjaGFyYXQsQiBhcyBjb2x1bW4sUyBhcyBjb21iaW5lLGNlIGFzIGNvbW1lbnQsWiBhcyBjb21tZW50ZXIsZWUgYXMgY29tcGlsZSxJIGFzIGNvcHksVCBhcyBkZWFsbG9jLG5lIGFzIGRlY2xhcmF0aW9uLFUgYXMgZGVsaW1pdCxZIGFzIGRlbGltaXRlcixkIGFzIGZyb20sbSBhcyBoYXNoLF8gYXMgaWRlbnRpZmllcixqIGFzIGluZGV4b2YsRCBhcyBsZW5ndGgscSBhcyBsaW5lLHggYXMgbWF0Y2gsaWUgYXMgbWlkZGxld2FyZSxsZSBhcyBuYW1lc3BhY2UsSyBhcyBuZXh0LEggYXMgbm9kZSxyZSBhcyBwYXJzZSxMIGFzIHBlZWssRSBhcyBwb3NpdGlvbix0ZSBhcyBwcmVmaXgsb2UgYXMgcHJlZml4ZXIseSBhcyByZXBsYWNlLGFlIGFzIHJ1bGVzZXQsZmUgYXMgcnVsZXNoZWV0LHNlIGFzIHNlcmlhbGl6ZSxNIGFzIHNpemVvZixQIGFzIHNsaWNlLHVlIGFzIHN0cmluZ2lmeSxBIGFzIHN0cmxlbixDIGFzIHN1YnN0cixRIGFzIHRva2VuLFYgYXMgdG9rZW5pemUsWCBhcyB0b2tlbml6ZXIsZyBhcyB0cmltLFcgYXMgd2hpdGVzcGFjZX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsaXMubWpzLm1hcFxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9nYXJ5Y291cnQvbXVybXVyaGFzaC1qc1xuLy8gUG9ydGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2FhcHBsZWJ5L3NtaGFzaGVyL2Jsb2IvNjFhMDUzMGYyODI3N2YyZTg1MGJmYzM5NjAwY2U2MWQwMmI1MThkZS9zcmMvTXVybXVySGFzaDIuY3BwI0wzNy1MODZcbmZ1bmN0aW9uIG11cm11cjIoc3RyKSB7XG4gIC8vICdtJyBhbmQgJ3InIGFyZSBtaXhpbmcgY29uc3RhbnRzIGdlbmVyYXRlZCBvZmZsaW5lLlxuICAvLyBUaGV5J3JlIG5vdCByZWFsbHkgJ21hZ2ljJywgdGhleSBqdXN0IGhhcHBlbiB0byB3b3JrIHdlbGwuXG4gIC8vIGNvbnN0IG0gPSAweDViZDFlOTk1O1xuICAvLyBjb25zdCByID0gMjQ7XG4gIC8vIEluaXRpYWxpemUgdGhlIGhhc2hcbiAgdmFyIGggPSAwOyAvLyBNaXggNCBieXRlcyBhdCBhIHRpbWUgaW50byB0aGUgaGFzaFxuXG4gIHZhciBrLFxuICAgICAgaSA9IDAsXG4gICAgICBsZW4gPSBzdHIubGVuZ3RoO1xuXG4gIGZvciAoOyBsZW4gPj0gNDsgKytpLCBsZW4gLT0gNCkge1xuICAgIGsgPSBzdHIuY2hhckNvZGVBdChpKSAmIDB4ZmYgfCAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDggfCAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDE2IHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCAyNDtcbiAgICBrID1cbiAgICAvKiBNYXRoLmltdWwoaywgbSk6ICovXG4gICAgKGsgJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoayA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgICBrIF49XG4gICAgLyogayA+Pj4gcjogKi9cbiAgICBrID4+PiAyNDtcbiAgICBoID1cbiAgICAvKiBNYXRoLmltdWwoaywgbSk6ICovXG4gICAgKGsgJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoayA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KSBeXG4gICAgLyogTWF0aC5pbXVsKGgsIG0pOiAqL1xuICAgIChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGggPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XG4gIH0gLy8gSGFuZGxlIHRoZSBsYXN0IGZldyBieXRlcyBvZiB0aGUgaW5wdXQgYXJyYXlcblxuXG4gIHN3aXRjaCAobGVuKSB7XG4gICAgY2FzZSAzOlxuICAgICAgaCBePSAoc3RyLmNoYXJDb2RlQXQoaSArIDIpICYgMHhmZikgPDwgMTY7XG5cbiAgICBjYXNlIDI6XG4gICAgICBoIF49IChzdHIuY2hhckNvZGVBdChpICsgMSkgJiAweGZmKSA8PCA4O1xuXG4gICAgY2FzZSAxOlxuICAgICAgaCBePSBzdHIuY2hhckNvZGVBdChpKSAmIDB4ZmY7XG4gICAgICBoID1cbiAgICAgIC8qIE1hdGguaW11bChoLCBtKTogKi9cbiAgICAgIChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGggPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XG4gIH0gLy8gRG8gYSBmZXcgZmluYWwgbWl4ZXMgb2YgdGhlIGhhc2ggdG8gZW5zdXJlIHRoZSBsYXN0IGZld1xuICAvLyBieXRlcyBhcmUgd2VsbC1pbmNvcnBvcmF0ZWQuXG5cblxuICBoIF49IGggPj4+IDEzO1xuICBoID1cbiAgLyogTWF0aC5pbXVsKGgsIG0pOiAqL1xuICAoaCAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChoID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICByZXR1cm4gKChoIF4gaCA+Pj4gMTUpID4+PiAwKS50b1N0cmluZygzNik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG11cm11cjI7XG4iLCJmdW5jdGlvbiBtZW1vaXplKGZuKSB7XG4gIHZhciBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGNhY2hlW2FyZ10gPT09IHVuZGVmaW5lZCkgY2FjaGVbYXJnXSA9IGZuKGFyZyk7XG4gICAgcmV0dXJuIGNhY2hlW2FyZ107XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemU7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBmb3J3YXJkUmVmLCB1c2VDb250ZXh0LCBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNyZWF0ZUNhY2hlIGZyb20gJ0BlbW90aW9uL2NhY2hlJztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCB3ZWFrTWVtb2l6ZSBmcm9tICdAZW1vdGlvbi93ZWFrLW1lbW9pemUnO1xuaW1wb3J0IGhvaXN0Tm9uUmVhY3RTdGF0aWNzIGZyb20gJy4uL2lzb2xhdGVkLWhvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLWRvLW5vdC11c2UtdGhpcy1pbi15b3VyLWNvZGUvZGlzdC9lbW90aW9uLXJlYWN0LWlzb2xhdGVkLWhvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLWRvLW5vdC11c2UtdGhpcy1pbi15b3VyLWNvZGUuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgZ2V0UmVnaXN0ZXJlZFN0eWxlcywgaW5zZXJ0U3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vdXRpbHMnO1xuaW1wb3J0IHsgc2VyaWFsaXplU3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vc2VyaWFsaXplJztcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIEVtb3Rpb25DYWNoZUNvbnRleHQgPSAvKiAjX19QVVJFX18gKi9jcmVhdGVDb250ZXh0KCAvLyB3ZSdyZSBkb2luZyB0aGlzIHRvIGF2b2lkIHByZWNvbnN0cnVjdCdzIGRlYWQgY29kZSBlbGltaW5hdGlvbiBpbiB0aGlzIG9uZSBjYXNlXG4vLyBiZWNhdXNlIHRoaXMgbW9kdWxlIGlzIHByaW1hcmlseSBpbnRlbmRlZCBmb3IgdGhlIGJyb3dzZXIgYW5kIG5vZGVcbi8vIGJ1dCBpdCdzIGFsc28gcmVxdWlyZWQgaW4gcmVhY3QgbmF0aXZlIGFuZCBzaW1pbGFyIGVudmlyb25tZW50cyBzb21ldGltZXNcbi8vIGFuZCB3ZSBjb3VsZCBoYXZlIGEgc3BlY2lhbCBidWlsZCBqdXN0IGZvciB0aGF0XG4vLyBidXQgdGhpcyBpcyBtdWNoIGVhc2llciBhbmQgdGhlIG5hdGl2ZSBwYWNrYWdlc1xuLy8gbWlnaHQgdXNlIGEgZGlmZmVyZW50IHRoZW1lIGNvbnRleHQgaW4gdGhlIGZ1dHVyZSBhbnl3YXlcbnR5cGVvZiBIVE1MRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgPyAvKiAjX19QVVJFX18gKi9jcmVhdGVDYWNoZSh7XG4gIGtleTogJ2Nzcydcbn0pIDogbnVsbCk7XG52YXIgQ2FjaGVQcm92aWRlciA9IEVtb3Rpb25DYWNoZUNvbnRleHQuUHJvdmlkZXI7XG5cbnZhciB3aXRoRW1vdGlvbkNhY2hlID0gZnVuY3Rpb24gd2l0aEVtb3Rpb25DYWNoZShmdW5jKSB7XG4gIC8vICRGbG93Rml4TWVcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gICAgLy8gdGhlIGNhY2hlIHdpbGwgbmV2ZXIgYmUgbnVsbCBpbiB0aGUgYnJvd3NlclxuICAgIHZhciBjYWNoZSA9IHVzZUNvbnRleHQoRW1vdGlvbkNhY2hlQ29udGV4dCk7XG4gICAgcmV0dXJuIGZ1bmMocHJvcHMsIGNhY2hlLCByZWYpO1xuICB9KTtcbn07XG5cbnZhciBUaGVtZUNvbnRleHQgPSAvKiAjX19QVVJFX18gKi9jcmVhdGVDb250ZXh0KHt9KTtcbnZhciB1c2VUaGVtZSA9IGZ1bmN0aW9uIHVzZVRoZW1lKCkge1xuICByZXR1cm4gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xufTtcblxudmFyIGdldFRoZW1lID0gZnVuY3Rpb24gZ2V0VGhlbWUob3V0ZXJUaGVtZSwgdGhlbWUpIHtcbiAgaWYgKHR5cGVvZiB0aGVtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBtZXJnZWRUaGVtZSA9IHRoZW1lKG91dGVyVGhlbWUpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgKG1lcmdlZFRoZW1lID09IG51bGwgfHwgdHlwZW9mIG1lcmdlZFRoZW1lICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KG1lcmdlZFRoZW1lKSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignW1RoZW1lUHJvdmlkZXJdIFBsZWFzZSByZXR1cm4gYW4gb2JqZWN0IGZyb20geW91ciB0aGVtZSBmdW5jdGlvbiwgaS5lLiB0aGVtZT17KCkgPT4gKHt9KX0hJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlZFRoZW1lO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgKHRoZW1lID09IG51bGwgfHwgdHlwZW9mIHRoZW1lICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KHRoZW1lKSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1tUaGVtZVByb3ZpZGVyXSBQbGVhc2UgbWFrZSB5b3VyIHRoZW1lIHByb3AgYSBwbGFpbiBvYmplY3QnKTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgb3V0ZXJUaGVtZSwge30sIHRoZW1lKTtcbn07XG5cbnZhciBjcmVhdGVDYWNoZVdpdGhUaGVtZSA9IC8qICNfX1BVUkVfXyAqL3dlYWtNZW1vaXplKGZ1bmN0aW9uIChvdXRlclRoZW1lKSB7XG4gIHJldHVybiB3ZWFrTWVtb2l6ZShmdW5jdGlvbiAodGhlbWUpIHtcbiAgICByZXR1cm4gZ2V0VGhlbWUob3V0ZXJUaGVtZSwgdGhlbWUpO1xuICB9KTtcbn0pO1xudmFyIFRoZW1lUHJvdmlkZXIgPSBmdW5jdGlvbiBUaGVtZVByb3ZpZGVyKHByb3BzKSB7XG4gIHZhciB0aGVtZSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcblxuICBpZiAocHJvcHMudGhlbWUgIT09IHRoZW1lKSB7XG4gICAgdGhlbWUgPSBjcmVhdGVDYWNoZVdpdGhUaGVtZSh0aGVtZSkocHJvcHMudGhlbWUpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KFRoZW1lQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiB0aGVtZVxuICB9LCBwcm9wcy5jaGlsZHJlbik7XG59O1xuZnVuY3Rpb24gd2l0aFRoZW1lKENvbXBvbmVudCkge1xuICB2YXIgY29tcG9uZW50TmFtZSA9IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcblxuICB2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHByb3BzLCByZWYpIHtcbiAgICB2YXIgdGhlbWUgPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgdGhlbWU6IHRoZW1lLFxuICAgICAgcmVmOiByZWZcbiAgICB9LCBwcm9wcykpO1xuICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICB2YXIgV2l0aFRoZW1lID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYocmVuZGVyKTtcbiAgV2l0aFRoZW1lLmRpc3BsYXlOYW1lID0gXCJXaXRoVGhlbWUoXCIgKyBjb21wb25lbnROYW1lICsgXCIpXCI7XG4gIHJldHVybiBob2lzdE5vblJlYWN0U3RhdGljcyhXaXRoVGhlbWUsIENvbXBvbmVudCk7XG59XG5cbi8vIHRodXMgd2Ugb25seSBuZWVkIHRvIHJlcGxhY2Ugd2hhdCBpcyBhIHZhbGlkIGNoYXJhY3RlciBmb3IgSlMsIGJ1dCBub3QgZm9yIENTU1xuXG52YXIgc2FuaXRpemVJZGVudGlmaWVyID0gZnVuY3Rpb24gc2FuaXRpemVJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgcmV0dXJuIGlkZW50aWZpZXIucmVwbGFjZSgvXFwkL2csICctJyk7XG59O1xuXG52YXIgdHlwZVByb3BOYW1lID0gJ19fRU1PVElPTl9UWVBFX1BMRUFTRV9ET19OT1RfVVNFX18nO1xudmFyIGxhYmVsUHJvcE5hbWUgPSAnX19FTU9USU9OX0xBQkVMX1BMRUFTRV9ET19OT1RfVVNFX18nO1xudmFyIGNyZWF0ZUVtb3Rpb25Qcm9wcyA9IGZ1bmN0aW9uIGNyZWF0ZUVtb3Rpb25Qcm9wcyh0eXBlLCBwcm9wcykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgcHJvcHMuY3NzID09PSAnc3RyaW5nJyAmJiAvLyBjaGVjayBpZiB0aGVyZSBpcyBhIGNzcyBkZWNsYXJhdGlvblxuICBwcm9wcy5jc3MuaW5kZXhPZignOicpICE9PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlN0cmluZ3MgYXJlIG5vdCBhbGxvd2VkIGFzIGNzcyBwcm9wIHZhbHVlcywgcGxlYXNlIHdyYXAgaXQgaW4gYSBjc3MgdGVtcGxhdGUgbGl0ZXJhbCBmcm9tICdAZW1vdGlvbi9yZWFjdCcgbGlrZSB0aGlzOiBjc3NgXCIgKyBwcm9wcy5jc3MgKyBcImBcIik7XG4gIH1cblxuICB2YXIgbmV3UHJvcHMgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywga2V5KSkge1xuICAgICAgbmV3UHJvcHNba2V5XSA9IHByb3BzW2tleV07XG4gICAgfVxuICB9XG5cbiAgbmV3UHJvcHNbdHlwZVByb3BOYW1lXSA9IHR5cGU7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblxuICAgIGlmIChlcnJvci5zdGFjaykge1xuICAgICAgLy8gY2hyb21lXG4gICAgICB2YXIgbWF0Y2ggPSBlcnJvci5zdGFjay5tYXRjaCgvYXQgKD86T2JqZWN0XFwufE1vZHVsZVxcLnwpKD86anN4fGNyZWF0ZUVtb3Rpb25Qcm9wcykuKlxcblxccythdCAoPzpPYmplY3RcXC58KShbQS1aXVtBLVphLXowLTkkXSspIC8pO1xuXG4gICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgIC8vIHNhZmFyaSBhbmQgZmlyZWZveFxuICAgICAgICBtYXRjaCA9IGVycm9yLnN0YWNrLm1hdGNoKC8uKlxcbihbQS1aXVtBLVphLXowLTkkXSspQC8pO1xuICAgICAgfVxuXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgbmV3UHJvcHNbbGFiZWxQcm9wTmFtZV0gPSBzYW5pdGl6ZUlkZW50aWZpZXIobWF0Y2hbMV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdQcm9wcztcbn07XG52YXIgRW1vdGlvbiA9IC8qICNfX1BVUkVfXyAqL3dpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjYWNoZSwgcmVmKSB7XG4gIHZhciBjc3NQcm9wID0gcHJvcHMuY3NzOyAvLyBzbyB0aGF0IHVzaW5nIGBjc3NgIGZyb20gYGVtb3Rpb25gIGFuZCBwYXNzaW5nIHRoZSByZXN1bHQgdG8gdGhlIGNzcyBwcm9wIHdvcmtzXG4gIC8vIG5vdCBwYXNzaW5nIHRoZSByZWdpc3RlcmVkIGNhY2hlIHRvIHNlcmlhbGl6ZVN0eWxlcyBiZWNhdXNlIGl0IHdvdWxkXG4gIC8vIG1ha2UgY2VydGFpbiBiYWJlbCBvcHRpbWlzYXRpb25zIG5vdCBwb3NzaWJsZVxuXG4gIGlmICh0eXBlb2YgY3NzUHJvcCA9PT0gJ3N0cmluZycgJiYgY2FjaGUucmVnaXN0ZXJlZFtjc3NQcm9wXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY3NzUHJvcCA9IGNhY2hlLnJlZ2lzdGVyZWRbY3NzUHJvcF07XG4gIH1cblxuICB2YXIgdHlwZSA9IHByb3BzW3R5cGVQcm9wTmFtZV07XG4gIHZhciByZWdpc3RlcmVkU3R5bGVzID0gW2Nzc1Byb3BdO1xuICB2YXIgY2xhc3NOYW1lID0gJyc7XG5cbiAgaWYgKHR5cGVvZiBwcm9wcy5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgY2xhc3NOYW1lID0gZ2V0UmVnaXN0ZXJlZFN0eWxlcyhjYWNoZS5yZWdpc3RlcmVkLCByZWdpc3RlcmVkU3R5bGVzLCBwcm9wcy5jbGFzc05hbWUpO1xuICB9IGVsc2UgaWYgKHByb3BzLmNsYXNzTmFtZSAhPSBudWxsKSB7XG4gICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lICsgXCIgXCI7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZVN0eWxlcyhyZWdpc3RlcmVkU3R5bGVzLCB1bmRlZmluZWQsIHR5cGVvZiBjc3NQcm9wID09PSAnZnVuY3Rpb24nIHx8IEFycmF5LmlzQXJyYXkoY3NzUHJvcCkgPyB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCkgOiB1bmRlZmluZWQpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHNlcmlhbGl6ZWQubmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgdmFyIGxhYmVsRnJvbVN0YWNrID0gcHJvcHNbbGFiZWxQcm9wTmFtZV07XG5cbiAgICBpZiAobGFiZWxGcm9tU3RhY2spIHtcbiAgICAgIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoW3NlcmlhbGl6ZWQsICdsYWJlbDonICsgbGFiZWxGcm9tU3RhY2sgKyAnOyddKTtcbiAgICB9XG4gIH1cblxuICB2YXIgcnVsZXMgPSBpbnNlcnRTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyk7XG4gIGNsYXNzTmFtZSArPSBjYWNoZS5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcbiAgdmFyIG5ld1Byb3BzID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwocHJvcHMsIGtleSkgJiYga2V5ICE9PSAnY3NzJyAmJiBrZXkgIT09IHR5cGVQcm9wTmFtZSAmJiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyB8fCBrZXkgIT09IGxhYmVsUHJvcE5hbWUpKSB7XG4gICAgICBuZXdQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICB9XG4gIH1cblxuICBuZXdQcm9wcy5yZWYgPSByZWY7XG4gIG5ld1Byb3BzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgdmFyIGVsZSA9IC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KHR5cGUsIG5ld1Byb3BzKTtcblxuICByZXR1cm4gZWxlO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIEVtb3Rpb24uZGlzcGxheU5hbWUgPSAnRW1vdGlvbkNzc1Byb3BJbnRlcm5hbCc7XG59XG5cbmV4cG9ydCB7IENhY2hlUHJvdmlkZXIgYXMgQywgRW1vdGlvbiBhcyBFLCBUaGVtZUNvbnRleHQgYXMgVCwgVGhlbWVQcm92aWRlciBhcyBhLCB3aXRoVGhlbWUgYXMgYiwgY3JlYXRlRW1vdGlvblByb3BzIGFzIGMsIGhhc093blByb3BlcnR5IGFzIGgsIHVzZVRoZW1lIGFzIHUsIHdpdGhFbW90aW9uQ2FjaGUgYXMgdyB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgdXNlQ29udGV4dCwgdXNlUmVmLCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ0BlbW90aW9uL2NhY2hlJztcbmltcG9ydCB7IGggYXMgaGFzT3duUHJvcGVydHksIEUgYXMgRW1vdGlvbiwgYyBhcyBjcmVhdGVFbW90aW9uUHJvcHMsIHcgYXMgd2l0aEVtb3Rpb25DYWNoZSwgVCBhcyBUaGVtZUNvbnRleHQgfSBmcm9tICcuL2Vtb3Rpb24tZWxlbWVudC00ZmJkODljNS5icm93c2VyLmVzbS5qcyc7XG5leHBvcnQgeyBDIGFzIENhY2hlUHJvdmlkZXIsIFQgYXMgVGhlbWVDb250ZXh0LCBhIGFzIFRoZW1lUHJvdmlkZXIsIHUgYXMgdXNlVGhlbWUsIHcgYXMgd2l0aEVtb3Rpb25DYWNoZSwgYiBhcyB3aXRoVGhlbWUgfSBmcm9tICcuL2Vtb3Rpb24tZWxlbWVudC00ZmJkODljNS5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgJ0BlbW90aW9uL3dlYWstbWVtb2l6ZSc7XG5pbXBvcnQgJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcbmltcG9ydCAnLi4vaXNvbGF0ZWQtaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MtZG8tbm90LXVzZS10aGlzLWluLXlvdXItY29kZS9kaXN0L2Vtb3Rpb24tcmVhY3QtaXNvbGF0ZWQtaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MtZG8tbm90LXVzZS10aGlzLWluLXlvdXItY29kZS5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBpbnNlcnRTdHlsZXMsIGdldFJlZ2lzdGVyZWRTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi91dGlscyc7XG5pbXBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi9zZXJpYWxpemUnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gJ0BlbW90aW9uL3NoZWV0JztcblxudmFyIHBrZyA9IHtcblx0bmFtZTogXCJAZW1vdGlvbi9yZWFjdFwiLFxuXHR2ZXJzaW9uOiBcIjExLjEuNFwiLFxuXHRtYWluOiBcImRpc3QvZW1vdGlvbi1yZWFjdC5janMuanNcIixcblx0bW9kdWxlOiBcImRpc3QvZW1vdGlvbi1yZWFjdC5lc20uanNcIixcblx0YnJvd3Nlcjoge1xuXHRcdFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3QuY2pzLmpzXCI6IFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3QuYnJvd3Nlci5janMuanNcIixcblx0XHRcIi4vZGlzdC9lbW90aW9uLXJlYWN0LmVzbS5qc1wiOiBcIi4vZGlzdC9lbW90aW9uLXJlYWN0LmJyb3dzZXIuZXNtLmpzXCJcblx0fSxcblx0dHlwZXM6IFwidHlwZXMvaW5kZXguZC50c1wiLFxuXHRmaWxlczogW1xuXHRcdFwic3JjXCIsXG5cdFx0XCJkaXN0XCIsXG5cdFx0XCJqc3gtcnVudGltZVwiLFxuXHRcdFwianN4LWRldi1ydW50aW1lXCIsXG5cdFx0XCJpc29sYXRlZC1ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy1kby1ub3QtdXNlLXRoaXMtaW4teW91ci1jb2RlXCIsXG5cdFx0XCJ0eXBlcy8qLmQudHNcIixcblx0XHRcIm1hY3JvLmpzXCIsXG5cdFx0XCJtYWNyby5kLnRzXCIsXG5cdFx0XCJtYWNyby5qcy5mbG93XCJcblx0XSxcblx0c2lkZUVmZmVjdHM6IGZhbHNlLFxuXHRhdXRob3I6IFwibWl0Y2hlbGxoYW1pbHRvbiA8bWl0Y2hlbGxAbWl0Y2hlbGxoYW1pbHRvbi5tZT5cIixcblx0bGljZW5zZTogXCJNSVRcIixcblx0c2NyaXB0czoge1xuXHRcdFwidGVzdDp0eXBlc2NyaXB0XCI6IFwiZHRzbGludCB0eXBlc1wiXG5cdH0sXG5cdGRlcGVuZGVuY2llczoge1xuXHRcdFwiQGJhYmVsL3J1bnRpbWVcIjogXCJeNy43LjJcIixcblx0XHRcIkBlbW90aW9uL2NhY2hlXCI6IFwiXjExLjEuM1wiLFxuXHRcdFwiQGVtb3Rpb24vc2VyaWFsaXplXCI6IFwiXjEuMC4wXCIsXG5cdFx0XCJAZW1vdGlvbi9zaGVldFwiOiBcIl4xLjAuMVwiLFxuXHRcdFwiQGVtb3Rpb24vdXRpbHNcIjogXCJeMS4wLjBcIixcblx0XHRcIkBlbW90aW9uL3dlYWstbWVtb2l6ZVwiOiBcIl4wLjIuNVwiLFxuXHRcdFwiaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3NcIjogXCJeMy4zLjFcIlxuXHR9LFxuXHRwZWVyRGVwZW5kZW5jaWVzOiB7XG5cdFx0XCJAYmFiZWwvY29yZVwiOiBcIl43LjAuMFwiLFxuXHRcdHJlYWN0OiBcIj49MTYuOC4wXCJcblx0fSxcblx0cGVlckRlcGVuZGVuY2llc01ldGE6IHtcblx0XHRcIkBiYWJlbC9jb3JlXCI6IHtcblx0XHRcdG9wdGlvbmFsOiB0cnVlXG5cdFx0fSxcblx0XHRcIkB0eXBlcy9yZWFjdFwiOiB7XG5cdFx0XHRvcHRpb25hbDogdHJ1ZVxuXHRcdH1cblx0fSxcblx0ZGV2RGVwZW5kZW5jaWVzOiB7XG5cdFx0XCJAYmFiZWwvY29yZVwiOiBcIl43LjcuMlwiLFxuXHRcdFwiQGVtb3Rpb24vY3NzXCI6IFwiMTEuMS4zXCIsXG5cdFx0XCJAZW1vdGlvbi9jc3MtcHJldHRpZmllclwiOiBcIjEuMC4wXCIsXG5cdFx0XCJAZW1vdGlvbi9zZXJ2ZXJcIjogXCIxMS4wLjBcIixcblx0XHRcIkBlbW90aW9uL3N0eWxlZFwiOiBcIjExLjAuMFwiLFxuXHRcdFwiQHR5cGVzL3JlYWN0XCI6IFwiXjE2LjkuMTFcIixcblx0XHRkdHNsaW50OiBcIl4wLjMuMFwiLFxuXHRcdFwiaHRtbC10YWctbmFtZXNcIjogXCJeMS4xLjJcIixcblx0XHRyZWFjdDogXCIxNi4xNC4wXCIsXG5cdFx0XCJzdmctdGFnLW5hbWVzXCI6IFwiXjEuMS4xXCJcblx0fSxcblx0cmVwb3NpdG9yeTogXCJodHRwczovL2dpdGh1Yi5jb20vZW1vdGlvbi1qcy9lbW90aW9uL3RyZWUvbWFzdGVyL3BhY2thZ2VzL3JlYWN0XCIsXG5cdHB1Ymxpc2hDb25maWc6IHtcblx0XHRhY2Nlc3M6IFwicHVibGljXCJcblx0fSxcblx0XCJ1bWQ6bWFpblwiOiBcImRpc3QvZW1vdGlvbi1yZWFjdC51bWQubWluLmpzXCIsXG5cdHByZWNvbnN0cnVjdDoge1xuXHRcdGVudHJ5cG9pbnRzOiBbXG5cdFx0XHRcIi4vaW5kZXguanNcIixcblx0XHRcdFwiLi9qc3gtcnVudGltZS5qc1wiLFxuXHRcdFx0XCIuL2pzeC1kZXYtcnVudGltZS5qc1wiLFxuXHRcdFx0XCIuL2lzb2xhdGVkLWhvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLWRvLW5vdC11c2UtdGhpcy1pbi15b3VyLWNvZGUuanNcIlxuXHRcdF0sXG5cdFx0dW1kTmFtZTogXCJlbW90aW9uUmVhY3RcIlxuXHR9XG59O1xuXG52YXIganN4ID0gZnVuY3Rpb24ganN4KHR5cGUsIHByb3BzKSB7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG4gIGlmIChwcm9wcyA9PSBudWxsIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCAnY3NzJykpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgfVxuXG4gIHZhciBhcmdzTGVuZ3RoID0gYXJncy5sZW5ndGg7XG4gIHZhciBjcmVhdGVFbGVtZW50QXJnQXJyYXkgPSBuZXcgQXJyYXkoYXJnc0xlbmd0aCk7XG4gIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVswXSA9IEVtb3Rpb247XG4gIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVsxXSA9IGNyZWF0ZUVtb3Rpb25Qcm9wcyh0eXBlLCBwcm9wcyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmdzTGVuZ3RoOyBpKyspIHtcbiAgICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbaV0gPSBhcmdzW2ldO1xuICB9IC8vICRGbG93Rml4TWVcblxuXG4gIHJldHVybiBjcmVhdGVFbGVtZW50LmFwcGx5KG51bGwsIGNyZWF0ZUVsZW1lbnRBcmdBcnJheSk7XG59O1xuXG52YXIgd2FybmVkQWJvdXRDc3NQcm9wRm9yR2xvYmFsID0gZmFsc2U7IC8vIG1haW50YWluIHBsYWNlIG92ZXIgcmVyZW5kZXJzLlxuLy8gaW5pdGlhbCByZW5kZXIgZnJvbSBicm93c2VyLCBpbnNlcnRCZWZvcmUgY29udGV4dC5zaGVldC50YWdzWzBdIG9yIGlmIGEgc3R5bGUgaGFzbid0IGJlZW4gaW5zZXJ0ZWQgdGhlcmUgeWV0LCBhcHBlbmRDaGlsZFxuLy8gaW5pdGlhbCBjbGllbnQtc2lkZSByZW5kZXIgZnJvbSBTU1IsIHVzZSBwbGFjZSBvZiBoeWRyYXRpbmcgdGFnXG5cbnZhciBHbG9iYWwgPSAvKiAjX19QVVJFX18gKi93aXRoRW1vdGlvbkNhY2hlKGZ1bmN0aW9uIChwcm9wcywgY2FjaGUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIXdhcm5lZEFib3V0Q3NzUHJvcEZvckdsb2JhbCAmJiAoIC8vIGNoZWNrIGZvciBjbGFzc05hbWUgYXMgd2VsbCBzaW5jZSB0aGUgdXNlciBpc1xuICAvLyBwcm9iYWJseSB1c2luZyB0aGUgY3VzdG9tIGNyZWF0ZUVsZW1lbnQgd2hpY2hcbiAgLy8gbWVhbnMgaXQgd2lsbCBiZSB0dXJuZWQgaW50byBhIGNsYXNzTmFtZSBwcm9wXG4gIC8vICRGbG93Rml4TWUgSSBkb24ndCByZWFsbHkgd2FudCB0byBhZGQgaXQgdG8gdGhlIHR5cGUgc2luY2UgaXQgc2hvdWxkbid0IGJlIHVzZWRcbiAgcHJvcHMuY2xhc3NOYW1lIHx8IHByb3BzLmNzcykpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiSXQgbG9va3MgbGlrZSB5b3UncmUgdXNpbmcgdGhlIGNzcyBwcm9wIG9uIEdsb2JhbCwgZGlkIHlvdSBtZWFuIHRvIHVzZSB0aGUgc3R5bGVzIHByb3AgaW5zdGVhZD9cIik7XG4gICAgd2FybmVkQWJvdXRDc3NQcm9wRm9yR2xvYmFsID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBwcm9wcy5zdHlsZXM7XG4gIHZhciBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKFtzdHlsZXNdLCB1bmRlZmluZWQsIHR5cGVvZiBzdHlsZXMgPT09ICdmdW5jdGlvbicgfHwgQXJyYXkuaXNBcnJheShzdHlsZXMpID8gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpIDogdW5kZWZpbmVkKTtcbiAgLy8gYnV0IGl0IGlzIGJhc2VkIG9uIGEgY29uc3RhbnQgdGhhdCB3aWxsIG5ldmVyIGNoYW5nZSBhdCBydW50aW1lXG4gIC8vIGl0J3MgZWZmZWN0aXZlbHkgbGlrZSBoYXZpbmcgdHdvIGltcGxlbWVudGF0aW9ucyBhbmQgc3dpdGNoaW5nIHRoZW0gb3V0XG4gIC8vIHNvIGl0J3Mgbm90IGFjdHVhbGx5IGJyZWFraW5nIGFueXRoaW5nXG5cblxuICB2YXIgc2hlZXRSZWYgPSB1c2VSZWYoKTtcbiAgdXNlTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIga2V5ID0gY2FjaGUua2V5ICsgXCItZ2xvYmFsXCI7XG4gICAgdmFyIHNoZWV0ID0gbmV3IFN0eWxlU2hlZXQoe1xuICAgICAga2V5OiBrZXksXG4gICAgICBub25jZTogY2FjaGUuc2hlZXQubm9uY2UsXG4gICAgICBjb250YWluZXI6IGNhY2hlLnNoZWV0LmNvbnRhaW5lcixcbiAgICAgIHNwZWVkeTogY2FjaGUuc2hlZXQuaXNTcGVlZHlcbiAgICB9KTsgLy8gJEZsb3dGaXhNZVxuXG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3R5bGVbZGF0YS1lbW90aW9uPVxcXCJcIiArIGtleSArIFwiIFwiICsgc2VyaWFsaXplZC5uYW1lICsgXCJcXFwiXVwiKTtcblxuICAgIGlmIChjYWNoZS5zaGVldC50YWdzLmxlbmd0aCkge1xuICAgICAgc2hlZXQuYmVmb3JlID0gY2FjaGUuc2hlZXQudGFnc1swXTtcbiAgICB9XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgc2hlZXQuaHlkcmF0ZShbbm9kZV0pO1xuICAgIH1cblxuICAgIHNoZWV0UmVmLmN1cnJlbnQgPSBzaGVldDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgc2hlZXQuZmx1c2goKTtcbiAgICB9O1xuICB9LCBbY2FjaGVdKTtcbiAgdXNlTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2VyaWFsaXplZC5uZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGluc2VydCBrZXlmcmFtZXNcbiAgICAgIGluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZC5uZXh0LCB0cnVlKTtcbiAgICB9XG5cbiAgICB2YXIgc2hlZXQgPSBzaGVldFJlZi5jdXJyZW50O1xuXG4gICAgaWYgKHNoZWV0LnRhZ3MubGVuZ3RoKSB7XG4gICAgICAvLyBpZiB0aGlzIGRvZXNuJ3QgZXhpc3QgdGhlbiBpdCB3aWxsIGJlIG51bGwgc28gdGhlIHN0eWxlIGVsZW1lbnQgd2lsbCBiZSBhcHBlbmRlZFxuICAgICAgdmFyIGVsZW1lbnQgPSBzaGVldC50YWdzW3NoZWV0LnRhZ3MubGVuZ3RoIC0gMV0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgc2hlZXQuYmVmb3JlID0gZWxlbWVudDtcbiAgICAgIHNoZWV0LmZsdXNoKCk7XG4gICAgfVxuXG4gICAgY2FjaGUuaW5zZXJ0KFwiXCIsIHNlcmlhbGl6ZWQsIHNoZWV0LCBmYWxzZSk7XG4gIH0sIFtjYWNoZSwgc2VyaWFsaXplZC5uYW1lXSk7XG4gIHJldHVybiBudWxsO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIEdsb2JhbC5kaXNwbGF5TmFtZSA9ICdFbW90aW9uR2xvYmFsJztcbn1cblxuZnVuY3Rpb24gY3NzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIHNlcmlhbGl6ZVN0eWxlcyhhcmdzKTtcbn1cblxudmFyIGtleWZyYW1lcyA9IGZ1bmN0aW9uIGtleWZyYW1lcygpIHtcbiAgdmFyIGluc2VydGFibGUgPSBjc3MuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICB2YXIgbmFtZSA9IFwiYW5pbWF0aW9uLVwiICsgaW5zZXJ0YWJsZS5uYW1lOyAvLyAkRmxvd0ZpeE1lXG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIHN0eWxlczogXCJAa2V5ZnJhbWVzIFwiICsgbmFtZSArIFwie1wiICsgaW5zZXJ0YWJsZS5zdHlsZXMgKyBcIn1cIixcbiAgICBhbmltOiAxLFxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiBcIl9FTU9fXCIgKyB0aGlzLm5hbWUgKyBcIl9cIiArIHRoaXMuc3R5bGVzICsgXCJfRU1PX1wiO1xuICAgIH1cbiAgfTtcbn07XG5cbnZhciBjbGFzc25hbWVzID0gZnVuY3Rpb24gY2xhc3NuYW1lcyhhcmdzKSB7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgY2xzID0gJyc7XG5cbiAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBhcmcgPSBhcmdzW2ldO1xuICAgIGlmIChhcmcgPT0gbnVsbCkgY29udGludWU7XG4gICAgdmFyIHRvQWRkID0gdm9pZCAwO1xuXG4gICAgc3dpdGNoICh0eXBlb2YgYXJnKSB7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG4gICAgICAgICAgICB0b0FkZCA9IGNsYXNzbmFtZXMoYXJnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgYXJnLnN0eWxlcyAhPT0gdW5kZWZpbmVkICYmIGFyZy5uYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignWW91IGhhdmUgcGFzc2VkIHN0eWxlcyBjcmVhdGVkIHdpdGggYGNzc2AgZnJvbSBgQGVtb3Rpb24vcmVhY3RgIHBhY2thZ2UgdG8gdGhlIGBjeGAuXFxuJyArICdgY3hgIGlzIG1lYW50IHRvIGNvbXBvc2UgY2xhc3MgbmFtZXMgKHN0cmluZ3MpIHNvIHlvdSBzaG91bGQgY29udmVydCB0aG9zZSBzdHlsZXMgdG8gYSBjbGFzcyBuYW1lIGJ5IHBhc3NpbmcgdGhlbSB0byB0aGUgYGNzc2AgcmVjZWl2ZWQgZnJvbSA8Q2xhc3NOYW1lcy8+IGNvbXBvbmVudC4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdG9BZGQgPSAnJztcblxuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBhcmcpIHtcbiAgICAgICAgICAgICAgaWYgKGFyZ1trXSAmJiBrKSB7XG4gICAgICAgICAgICAgICAgdG9BZGQgJiYgKHRvQWRkICs9ICcgJyk7XG4gICAgICAgICAgICAgICAgdG9BZGQgKz0gaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHtcbiAgICAgICAgICB0b0FkZCA9IGFyZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b0FkZCkge1xuICAgICAgY2xzICYmIChjbHMgKz0gJyAnKTtcbiAgICAgIGNscyArPSB0b0FkZDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2xzO1xufTtcblxuZnVuY3Rpb24gbWVyZ2UocmVnaXN0ZXJlZCwgY3NzLCBjbGFzc05hbWUpIHtcbiAgdmFyIHJlZ2lzdGVyZWRTdHlsZXMgPSBbXTtcbiAgdmFyIHJhd0NsYXNzTmFtZSA9IGdldFJlZ2lzdGVyZWRTdHlsZXMocmVnaXN0ZXJlZCwgcmVnaXN0ZXJlZFN0eWxlcywgY2xhc3NOYW1lKTtcblxuICBpZiAocmVnaXN0ZXJlZFN0eWxlcy5sZW5ndGggPCAyKSB7XG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIHJldHVybiByYXdDbGFzc05hbWUgKyBjc3MocmVnaXN0ZXJlZFN0eWxlcyk7XG59XG5cbnZhciBDbGFzc05hbWVzID0gLyogI19fUFVSRV9fICovd2l0aEVtb3Rpb25DYWNoZShmdW5jdGlvbiAocHJvcHMsIGNhY2hlKSB7XG4gIHZhciBoYXNSZW5kZXJlZCA9IGZhbHNlO1xuXG4gIHZhciBjc3MgPSBmdW5jdGlvbiBjc3MoKSB7XG4gICAgaWYgKGhhc1JlbmRlcmVkICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3NzIGNhbiBvbmx5IGJlIHVzZWQgZHVyaW5nIHJlbmRlcicpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZVN0eWxlcyhhcmdzLCBjYWNoZS5yZWdpc3RlcmVkKTtcblxuICAgIHtcbiAgICAgIGluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiBjYWNoZS5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcbiAgfTtcblxuICB2YXIgY3ggPSBmdW5jdGlvbiBjeCgpIHtcbiAgICBpZiAoaGFzUmVuZGVyZWQgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjeCBjYW4gb25seSBiZSB1c2VkIGR1cmluZyByZW5kZXInKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2UoY2FjaGUucmVnaXN0ZXJlZCwgY3NzLCBjbGFzc25hbWVzKGFyZ3MpKTtcbiAgfTtcblxuICB2YXIgY29udGVudCA9IHtcbiAgICBjc3M6IGNzcyxcbiAgICBjeDogY3gsXG4gICAgdGhlbWU6IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KVxuICB9O1xuICB2YXIgZWxlID0gcHJvcHMuY2hpbGRyZW4oY29udGVudCk7XG4gIGhhc1JlbmRlcmVkID0gdHJ1ZTtcblxuICByZXR1cm4gZWxlO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIENsYXNzTmFtZXMuZGlzcGxheU5hbWUgPSAnRW1vdGlvbkNsYXNzTmFtZXMnO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgaXNCcm93c2VyID0gXCJvYmplY3RcIiAhPT0gJ3VuZGVmaW5lZCc7IC8vICMxNzI3IGZvciBzb21lIHJlYXNvbiBKZXN0IGV2YWx1YXRlcyBtb2R1bGVzIHR3aWNlIGlmIHNvbWUgY29uc3VtaW5nIG1vZHVsZSBnZXRzIG1vY2tlZCB3aXRoIGplc3QubW9ja1xuXG4gIHZhciBpc0plc3QgPSB0eXBlb2YgamVzdCAhPT0gJ3VuZGVmaW5lZCc7XG5cbiAgaWYgKGlzQnJvd3NlciAmJiAhaXNKZXN0KSB7XG4gICAgdmFyIGdsb2JhbENvbnRleHQgPSBpc0Jyb3dzZXIgPyB3aW5kb3cgOiBnbG9iYWw7XG4gICAgdmFyIGdsb2JhbEtleSA9IFwiX19FTU9USU9OX1JFQUNUX1wiICsgcGtnLnZlcnNpb24uc3BsaXQoJy4nKVswXSArIFwiX19cIjtcblxuICAgIGlmIChnbG9iYWxDb250ZXh0W2dsb2JhbEtleV0pIHtcbiAgICAgIGNvbnNvbGUud2FybignWW91IGFyZSBsb2FkaW5nIEBlbW90aW9uL3JlYWN0IHdoZW4gaXQgaXMgYWxyZWFkeSBsb2FkZWQuIFJ1bm5pbmcgJyArICdtdWx0aXBsZSBpbnN0YW5jZXMgbWF5IGNhdXNlIHByb2JsZW1zLiBUaGlzIGNhbiBoYXBwZW4gaWYgbXVsdGlwbGUgJyArICd2ZXJzaW9ucyBhcmUgdXNlZCwgb3IgaWYgbXVsdGlwbGUgYnVpbGRzIG9mIHRoZSBzYW1lIHZlcnNpb24gYXJlICcgKyAndXNlZC4nKTtcbiAgICB9XG5cbiAgICBnbG9iYWxDb250ZXh0W2dsb2JhbEtleV0gPSB0cnVlO1xuICB9XG59XG5cbmV4cG9ydCB7IENsYXNzTmFtZXMsIEdsb2JhbCwganN4IGFzIGNyZWF0ZUVsZW1lbnQsIGNzcywganN4LCBrZXlmcmFtZXMgfTtcbiIsImltcG9ydCBob2lzdE5vblJlYWN0U3RhdGljcyQxIGZyb20gJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcblxuLy8gdGhpcyBmaWxlIGlzb2xhdGVzIHRoaXMgcGFja2FnZSB0aGF0IGlzIG5vdCB0cmVlLXNoYWtlYWJsZVxuLy8gYW5kIGlmIHRoaXMgbW9kdWxlIGRvZXNuJ3QgYWN0dWFsbHkgY29udGFpbiBhbnkgbG9naWMgb2YgaXRzIG93blxuLy8gdGhlbiBSb2xsdXAganVzdCB1c2UgJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJyBkaXJlY3RseSBpbiBvdGhlciBjaHVua3NcblxudmFyIGhvaXN0Tm9uUmVhY3RTdGF0aWNzID0gKGZ1bmN0aW9uICh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCkge1xuICByZXR1cm4gaG9pc3ROb25SZWFjdFN0YXRpY3MkMSh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaG9pc3ROb25SZWFjdFN0YXRpY3M7XG4iLCJpbXBvcnQgaGFzaFN0cmluZyBmcm9tICdAZW1vdGlvbi9oYXNoJztcbmltcG9ydCB1bml0bGVzcyBmcm9tICdAZW1vdGlvbi91bml0bGVzcyc7XG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIElMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SID0gXCJZb3UgaGF2ZSBpbGxlZ2FsIGVzY2FwZSBzZXF1ZW5jZSBpbiB5b3VyIHRlbXBsYXRlIGxpdGVyYWwsIG1vc3QgbGlrZWx5IGluc2lkZSBjb250ZW50J3MgcHJvcGVydHkgdmFsdWUuXFxuQmVjYXVzZSB5b3Ugd3JpdGUgeW91ciBDU1MgaW5zaWRlIGEgSmF2YVNjcmlwdCBzdHJpbmcgeW91IGFjdHVhbGx5IGhhdmUgdG8gZG8gZG91YmxlIGVzY2FwaW5nLCBzbyBmb3IgZXhhbXBsZSBcXFwiY29udGVudDogJ1xcXFwwMGQ3JztcXFwiIHNob3VsZCBiZWNvbWUgXFxcImNvbnRlbnQ6ICdcXFxcXFxcXDAwZDcnO1xcXCIuXFxuWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgdGhpcyBoZXJlOlxcbmh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL1RlbXBsYXRlX2xpdGVyYWxzI0VTMjAxOF9yZXZpc2lvbl9vZl9pbGxlZ2FsX2VzY2FwZV9zZXF1ZW5jZXNcIjtcbnZhciBVTkRFRklORURfQVNfT0JKRUNUX0tFWV9FUlJPUiA9IFwiWW91IGhhdmUgcGFzc2VkIGluIGZhbHN5IHZhbHVlIGFzIHN0eWxlIG9iamVjdCdzIGtleSAoY2FuIGhhcHBlbiB3aGVuIGluIGV4YW1wbGUgeW91IHBhc3MgdW5leHBvcnRlZCBjb21wb25lbnQgYXMgY29tcHV0ZWQga2V5KS5cIjtcbnZhciBoeXBoZW5hdGVSZWdleCA9IC9bQS1aXXxebXMvZztcbnZhciBhbmltYXRpb25SZWdleCA9IC9fRU1PXyhbXl9dKz8pXyhbXl0qPylfRU1PXy9nO1xuXG52YXIgaXNDdXN0b21Qcm9wZXJ0eSA9IGZ1bmN0aW9uIGlzQ3VzdG9tUHJvcGVydHkocHJvcGVydHkpIHtcbiAgcmV0dXJuIHByb3BlcnR5LmNoYXJDb2RlQXQoMSkgPT09IDQ1O1xufTtcblxudmFyIGlzUHJvY2Vzc2FibGVWYWx1ZSA9IGZ1bmN0aW9uIGlzUHJvY2Vzc2FibGVWYWx1ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgIT09ICdib29sZWFuJztcbn07XG5cbnZhciBwcm9jZXNzU3R5bGVOYW1lID0gLyogI19fUFVSRV9fICovbWVtb2l6ZShmdW5jdGlvbiAoc3R5bGVOYW1lKSB7XG4gIHJldHVybiBpc0N1c3RvbVByb3BlcnR5KHN0eWxlTmFtZSkgPyBzdHlsZU5hbWUgOiBzdHlsZU5hbWUucmVwbGFjZShoeXBoZW5hdGVSZWdleCwgJy0kJicpLnRvTG93ZXJDYXNlKCk7XG59KTtcblxudmFyIHByb2Nlc3NTdHlsZVZhbHVlID0gZnVuY3Rpb24gcHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZSkge1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ2FuaW1hdGlvbic6XG4gICAgY2FzZSAnYW5pbWF0aW9uTmFtZSc6XG4gICAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoYW5pbWF0aW9uUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCwgcDEsIHAyKSB7XG4gICAgICAgICAgICBjdXJzb3IgPSB7XG4gICAgICAgICAgICAgIG5hbWU6IHAxLFxuICAgICAgICAgICAgICBzdHlsZXM6IHAyLFxuICAgICAgICAgICAgICBuZXh0OiBjdXJzb3JcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gcDE7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIGlmICh1bml0bGVzc1trZXldICE9PSAxICYmICFpc0N1c3RvbVByb3BlcnR5KGtleSkgJiYgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSAhPT0gMCkge1xuICAgIHJldHVybiB2YWx1ZSArICdweCc7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgY29udGVudFZhbHVlUGF0dGVybiA9IC8oYXR0cnxjYWxjfGNvdW50ZXJzP3x1cmwpXFwoLztcbiAgdmFyIGNvbnRlbnRWYWx1ZXMgPSBbJ25vcm1hbCcsICdub25lJywgJ2NvdW50ZXInLCAnb3Blbi1xdW90ZScsICdjbG9zZS1xdW90ZScsICduby1vcGVuLXF1b3RlJywgJ25vLWNsb3NlLXF1b3RlJywgJ2luaXRpYWwnLCAnaW5oZXJpdCcsICd1bnNldCddO1xuICB2YXIgb2xkUHJvY2Vzc1N0eWxlVmFsdWUgPSBwcm9jZXNzU3R5bGVWYWx1ZTtcbiAgdmFyIG1zUGF0dGVybiA9IC9eLW1zLS87XG4gIHZhciBoeXBoZW5QYXR0ZXJuID0gLy0oLikvZztcbiAgdmFyIGh5cGhlbmF0ZWRDYWNoZSA9IHt9O1xuXG4gIHByb2Nlc3NTdHlsZVZhbHVlID0gZnVuY3Rpb24gcHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgPT09ICdjb250ZW50Jykge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgfHwgY29udGVudFZhbHVlcy5pbmRleE9mKHZhbHVlKSA9PT0gLTEgJiYgIWNvbnRlbnRWYWx1ZVBhdHRlcm4udGVzdCh2YWx1ZSkgJiYgKHZhbHVlLmNoYXJBdCgwKSAhPT0gdmFsdWUuY2hhckF0KHZhbHVlLmxlbmd0aCAtIDEpIHx8IHZhbHVlLmNoYXJBdCgwKSAhPT0gJ1wiJyAmJiB2YWx1ZS5jaGFyQXQoMCkgIT09IFwiJ1wiKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3Ugc2VlbSB0byBiZSB1c2luZyBhIHZhbHVlIGZvciAnY29udGVudCcgd2l0aG91dCBxdW90ZXMsIHRyeSByZXBsYWNpbmcgaXQgd2l0aCBgY29udGVudDogJ1xcXCJcIiArIHZhbHVlICsgXCJcXFwiJ2BcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByb2Nlc3NlZCA9IG9sZFByb2Nlc3NTdHlsZVZhbHVlKGtleSwgdmFsdWUpO1xuXG4gICAgaWYgKHByb2Nlc3NlZCAhPT0gJycgJiYgIWlzQ3VzdG9tUHJvcGVydHkoa2V5KSAmJiBrZXkuaW5kZXhPZignLScpICE9PSAtMSAmJiBoeXBoZW5hdGVkQ2FjaGVba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBoeXBoZW5hdGVkQ2FjaGVba2V5XSA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKFwiVXNpbmcga2ViYWItY2FzZSBmb3IgY3NzIHByb3BlcnRpZXMgaW4gb2JqZWN0cyBpcyBub3Qgc3VwcG9ydGVkLiBEaWQgeW91IG1lYW4gXCIgKyBrZXkucmVwbGFjZShtc1BhdHRlcm4sICdtcy0nKS5yZXBsYWNlKGh5cGhlblBhdHRlcm4sIGZ1bmN0aW9uIChzdHIsIF9jaGFyKSB7XG4gICAgICAgIHJldHVybiBfY2hhci50b1VwcGVyQ2FzZSgpO1xuICAgICAgfSkgKyBcIj9cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2Nlc3NlZDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgaW50ZXJwb2xhdGlvbikge1xuICBpZiAoaW50ZXJwb2xhdGlvbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKGludGVycG9sYXRpb24uX19lbW90aW9uX3N0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaW50ZXJwb2xhdGlvbi50b1N0cmluZygpID09PSAnTk9fQ09NUE9ORU5UX1NFTEVDVE9SJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQgc2VsZWN0b3JzIGNhbiBvbmx5IGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBAZW1vdGlvbi9iYWJlbC1wbHVnaW4uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGludGVycG9sYXRpb247XG4gIH1cblxuICBzd2l0Y2ggKHR5cGVvZiBpbnRlcnBvbGF0aW9uKSB7XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICB7XG4gICAgICAgIGlmIChpbnRlcnBvbGF0aW9uLmFuaW0gPT09IDEpIHtcbiAgICAgICAgICBjdXJzb3IgPSB7XG4gICAgICAgICAgICBuYW1lOiBpbnRlcnBvbGF0aW9uLm5hbWUsXG4gICAgICAgICAgICBzdHlsZXM6IGludGVycG9sYXRpb24uc3R5bGVzLFxuICAgICAgICAgICAgbmV4dDogY3Vyc29yXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gaW50ZXJwb2xhdGlvbi5uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGludGVycG9sYXRpb24uc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YXIgbmV4dCA9IGludGVycG9sYXRpb24ubmV4dDtcblxuICAgICAgICAgIGlmIChuZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIG5vdCB0aGUgbW9zdCBlZmZpY2llbnQgdGhpbmcgZXZlciBidXQgdGhpcyBpcyBhIHByZXR0eSByYXJlIGNhc2VcbiAgICAgICAgICAgIC8vIGFuZCB0aGVyZSB3aWxsIGJlIHZlcnkgZmV3IGl0ZXJhdGlvbnMgb2YgdGhpcyBnZW5lcmFsbHlcbiAgICAgICAgICAgIHdoaWxlIChuZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgY3Vyc29yID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IG5leHQubmFtZSxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IG5leHQuc3R5bGVzLFxuICAgICAgICAgICAgICAgIG5leHQ6IGN1cnNvclxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBuZXh0ID0gbmV4dC5uZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzdHlsZXMgPSBpbnRlcnBvbGF0aW9uLnN0eWxlcyArIFwiO1wiO1xuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaW50ZXJwb2xhdGlvbi5tYXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc3R5bGVzICs9IGludGVycG9sYXRpb24ubWFwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3JlYXRlU3RyaW5nRnJvbU9iamVjdChtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgaW50ZXJwb2xhdGlvbik7XG4gICAgICB9XG5cbiAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICB7XG4gICAgICAgIGlmIChtZXJnZWRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIHByZXZpb3VzQ3Vyc29yID0gY3Vyc29yO1xuICAgICAgICAgIHZhciByZXN1bHQgPSBpbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzKTtcbiAgICAgICAgICBjdXJzb3IgPSBwcmV2aW91c0N1cnNvcjtcbiAgICAgICAgICByZXR1cm4gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgcmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRnVuY3Rpb25zIHRoYXQgYXJlIGludGVycG9sYXRlZCBpbiBjc3MgY2FsbHMgd2lsbCBiZSBzdHJpbmdpZmllZC5cXG4nICsgJ0lmIHlvdSB3YW50IHRvIGhhdmUgYSBjc3MgY2FsbCBiYXNlZCBvbiBwcm9wcywgY3JlYXRlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgY3NzIGNhbGwgbGlrZSB0aGlzXFxuJyArICdsZXQgZHluYW1pY1N0eWxlID0gKHByb3BzKSA9PiBjc3NgY29sb3I6ICR7cHJvcHMuY29sb3J9YFxcbicgKyAnSXQgY2FuIGJlIGNhbGxlZCBkaXJlY3RseSB3aXRoIHByb3BzIG9yIGludGVycG9sYXRlZCBpbiBhIHN0eWxlZCBjYWxsIGxpa2UgdGhpc1xcbicgKyBcImxldCBTb21lQ29tcG9uZW50ID0gc3R5bGVkKCdkaXYnKWAke2R5bmFtaWNTdHlsZX1gXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFyIG1hdGNoZWQgPSBbXTtcbiAgICAgICAgdmFyIHJlcGxhY2VkID0gaW50ZXJwb2xhdGlvbi5yZXBsYWNlKGFuaW1hdGlvblJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gsIHAxLCBwMikge1xuICAgICAgICAgIHZhciBmYWtlVmFyTmFtZSA9IFwiYW5pbWF0aW9uXCIgKyBtYXRjaGVkLmxlbmd0aDtcbiAgICAgICAgICBtYXRjaGVkLnB1c2goXCJjb25zdCBcIiArIGZha2VWYXJOYW1lICsgXCIgPSBrZXlmcmFtZXNgXCIgKyBwMi5yZXBsYWNlKC9eQGtleWZyYW1lcyBhbmltYXRpb24tXFx3Ky8sICcnKSArIFwiYFwiKTtcbiAgICAgICAgICByZXR1cm4gXCIke1wiICsgZmFrZVZhck5hbWUgKyBcIn1cIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZWQubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignYGtleWZyYW1lc2Agb3V0cHV0IGdvdCBpbnRlcnBvbGF0ZWQgaW50byBwbGFpbiBzdHJpbmcsIHBsZWFzZSB3cmFwIGl0IHdpdGggYGNzc2AuXFxuXFxuJyArICdJbnN0ZWFkIG9mIGRvaW5nIHRoaXM6XFxuXFxuJyArIFtdLmNvbmNhdChtYXRjaGVkLCBbXCJgXCIgKyByZXBsYWNlZCArIFwiYFwiXSkuam9pbignXFxuJykgKyAnXFxuXFxuWW91IHNob3VsZCB3cmFwIGl0IHdpdGggYGNzc2AgbGlrZSB0aGlzOlxcblxcbicgKyAoXCJjc3NgXCIgKyByZXBsYWNlZCArIFwiYFwiKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gIH0gLy8gZmluYWxpemUgc3RyaW5nIHZhbHVlcyAocmVndWxhciBzdHJpbmdzIGFuZCBmdW5jdGlvbnMgaW50ZXJwb2xhdGVkIGludG8gY3NzIGNhbGxzKVxuXG5cbiAgaWYgKHJlZ2lzdGVyZWQgPT0gbnVsbCkge1xuICAgIHJldHVybiBpbnRlcnBvbGF0aW9uO1xuICB9XG5cbiAgdmFyIGNhY2hlZCA9IHJlZ2lzdGVyZWRbaW50ZXJwb2xhdGlvbl07XG4gIHJldHVybiBjYWNoZWQgIT09IHVuZGVmaW5lZCA/IGNhY2hlZCA6IGludGVycG9sYXRpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0cmluZ0Zyb21PYmplY3QobWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIG9iaikge1xuICB2YXIgc3RyaW5nID0gJyc7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzdHJpbmcgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgb2JqW2ldKSArIFwiO1wiO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBfa2V5IGluIG9iaikge1xuICAgICAgdmFyIHZhbHVlID0gb2JqW19rZXldO1xuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAocmVnaXN0ZXJlZCAhPSBudWxsICYmIHJlZ2lzdGVyZWRbdmFsdWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdHJpbmcgKz0gX2tleSArIFwie1wiICsgcmVnaXN0ZXJlZFt2YWx1ZV0gKyBcIn1cIjtcbiAgICAgICAgfSBlbHNlIGlmIChpc1Byb2Nlc3NhYmxlVmFsdWUodmFsdWUpKSB7XG4gICAgICAgICAgc3RyaW5nICs9IHByb2Nlc3NTdHlsZU5hbWUoX2tleSkgKyBcIjpcIiArIHByb2Nlc3NTdHlsZVZhbHVlKF9rZXksIHZhbHVlKSArIFwiO1wiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoX2tleSA9PT0gJ05PX0NPTVBPTkVOVF9TRUxFQ1RPUicgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IHNlbGVjdG9ycyBjYW4gb25seSBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggQGVtb3Rpb24vYmFiZWwtcGx1Z2luLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHR5cGVvZiB2YWx1ZVswXSA9PT0gJ3N0cmluZycgJiYgKHJlZ2lzdGVyZWQgPT0gbnVsbCB8fCByZWdpc3RlcmVkW3ZhbHVlWzBdXSA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB2YWx1ZS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGlmIChpc1Byb2Nlc3NhYmxlVmFsdWUodmFsdWVbX2ldKSkge1xuICAgICAgICAgICAgICBzdHJpbmcgKz0gcHJvY2Vzc1N0eWxlTmFtZShfa2V5KSArIFwiOlwiICsgcHJvY2Vzc1N0eWxlVmFsdWUoX2tleSwgdmFsdWVbX2ldKSArIFwiO1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaW50ZXJwb2xhdGVkID0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgdmFsdWUpO1xuXG4gICAgICAgICAgc3dpdGNoIChfa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdhbmltYXRpb24nOlxuICAgICAgICAgICAgY2FzZSAnYW5pbWF0aW9uTmFtZSc6XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gcHJvY2Vzc1N0eWxlTmFtZShfa2V5KSArIFwiOlwiICsgaW50ZXJwb2xhdGVkICsgXCI7XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF9rZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFVOREVGSU5FRF9BU19PQkpFQ1RfS0VZX0VSUk9SKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gX2tleSArIFwie1wiICsgaW50ZXJwb2xhdGVkICsgXCJ9XCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG52YXIgbGFiZWxQYXR0ZXJuID0gL2xhYmVsOlxccyooW15cXHM7XFxue10rKVxccyo7L2c7XG52YXIgc291cmNlTWFwUGF0dGVybjtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgc291cmNlTWFwUGF0dGVybiA9IC9cXC9cXCojXFxzc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uXFwvanNvbjtcXFMrXFxzK1xcKlxcLy9nO1xufSAvLyB0aGlzIGlzIHRoZSBjdXJzb3IgZm9yIGtleWZyYW1lc1xuLy8ga2V5ZnJhbWVzIGFyZSBzdG9yZWQgb24gdGhlIFNlcmlhbGl6ZWRTdHlsZXMgb2JqZWN0IGFzIGEgbGlua2VkIGxpc3RcblxuXG52YXIgY3Vyc29yO1xudmFyIHNlcmlhbGl6ZVN0eWxlcyA9IGZ1bmN0aW9uIHNlcmlhbGl6ZVN0eWxlcyhhcmdzLCByZWdpc3RlcmVkLCBtZXJnZWRQcm9wcykge1xuICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZ3NbMF0gPT09ICdvYmplY3QnICYmIGFyZ3NbMF0gIT09IG51bGwgJiYgYXJnc1swXS5zdHlsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBhcmdzWzBdO1xuICB9XG5cbiAgdmFyIHN0cmluZ01vZGUgPSB0cnVlO1xuICB2YXIgc3R5bGVzID0gJyc7XG4gIGN1cnNvciA9IHVuZGVmaW5lZDtcbiAgdmFyIHN0cmluZ3MgPSBhcmdzWzBdO1xuXG4gIGlmIChzdHJpbmdzID09IG51bGwgfHwgc3RyaW5ncy5yYXcgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0cmluZ01vZGUgPSBmYWxzZTtcbiAgICBzdHlsZXMgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgc3RyaW5ncyk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc3RyaW5nc1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLmVycm9yKElMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SKTtcbiAgICB9XG5cbiAgICBzdHlsZXMgKz0gc3RyaW5nc1swXTtcbiAgfSAvLyB3ZSBzdGFydCBhdCAxIHNpbmNlIHdlJ3ZlIGFscmVhZHkgaGFuZGxlZCB0aGUgZmlyc3QgYXJnXG5cblxuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBzdHlsZXMgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgYXJnc1tpXSk7XG5cbiAgICBpZiAoc3RyaW5nTW9kZSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc3RyaW5nc1tpXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoSUxMRUdBTF9FU0NBUEVfU0VRVUVOQ0VfRVJST1IpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXMgKz0gc3RyaW5nc1tpXTtcbiAgICB9XG4gIH1cblxuICB2YXIgc291cmNlTWFwO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgc3R5bGVzID0gc3R5bGVzLnJlcGxhY2Uoc291cmNlTWFwUGF0dGVybiwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICBzb3VyY2VNYXAgPSBtYXRjaDtcbiAgICAgIHJldHVybiAnJztcbiAgICB9KTtcbiAgfSAvLyB1c2luZyBhIGdsb2JhbCByZWdleCB3aXRoIC5leGVjIGlzIHN0YXRlZnVsIHNvIGxhc3RJbmRleCBoYXMgdG8gYmUgcmVzZXQgZWFjaCB0aW1lXG5cblxuICBsYWJlbFBhdHRlcm4ubGFzdEluZGV4ID0gMDtcbiAgdmFyIGlkZW50aWZpZXJOYW1lID0gJyc7XG4gIHZhciBtYXRjaDsgLy8gaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81YjgwOWMyY2YyOTQ5ODAwYTBmNjFmYjVcblxuICB3aGlsZSAoKG1hdGNoID0gbGFiZWxQYXR0ZXJuLmV4ZWMoc3R5bGVzKSkgIT09IG51bGwpIHtcbiAgICBpZGVudGlmaWVyTmFtZSArPSAnLScgKyAvLyAkRmxvd0ZpeE1lIHdlIGtub3cgaXQncyBub3QgbnVsbFxuICAgIG1hdGNoWzFdO1xuICB9XG5cbiAgdmFyIG5hbWUgPSBoYXNoU3RyaW5nKHN0eWxlcykgKyBpZGVudGlmaWVyTmFtZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vICRGbG93Rml4TWUgU2VyaWFsaXplZFN0eWxlcyB0eXBlIGRvZXNuJ3QgaGF2ZSB0b1N0cmluZyBwcm9wZXJ0eSAoYW5kIHdlIGRvbid0IHdhbnQgdG8gYWRkIGl0KVxuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgICBtYXA6IHNvdXJjZU1hcCxcbiAgICAgIG5leHQ6IGN1cnNvcixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFwiWW91IGhhdmUgdHJpZWQgdG8gc3RyaW5naWZ5IG9iamVjdCByZXR1cm5lZCBmcm9tIGBjc3NgIGZ1bmN0aW9uLiBJdCBpc24ndCBzdXBwb3NlZCB0byBiZSB1c2VkIGRpcmVjdGx5IChlLmcuIGFzIHZhbHVlIG9mIHRoZSBgY2xhc3NOYW1lYCBwcm9wKSwgYnV0IHJhdGhlciBoYW5kZWQgdG8gZW1vdGlvbiBzbyBpdCBjYW4gaGFuZGxlIGl0IChlLmcuIGFzIHZhbHVlIG9mIGBjc3NgIHByb3ApLlwiO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgbmV4dDogY3Vyc29yXG4gIH07XG59O1xuXG5leHBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfTtcbiIsIi8qXG5cbkJhc2VkIG9mZiBnbGFtb3IncyBTdHlsZVNoZWV0LCB0aGFua3MgU3VuaWwg4p2k77iPXG5cbmhpZ2ggcGVyZm9ybWFuY2UgU3R5bGVTaGVldCBmb3IgY3NzLWluLWpzIHN5c3RlbXNcblxuLSB1c2VzIG11bHRpcGxlIHN0eWxlIHRhZ3MgYmVoaW5kIHRoZSBzY2VuZXMgZm9yIG1pbGxpb25zIG9mIHJ1bGVzXG4tIHVzZXMgYGluc2VydFJ1bGVgIGZvciBhcHBlbmRpbmcgaW4gcHJvZHVjdGlvbiBmb3IgKm11Y2gqIGZhc3RlciBwZXJmb3JtYW5jZVxuXG4vLyB1c2FnZVxuXG5pbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSAnQGVtb3Rpb24vc2hlZXQnXG5cbmxldCBzdHlsZVNoZWV0ID0gbmV3IFN0eWxlU2hlZXQoeyBrZXk6ICcnLCBjb250YWluZXI6IGRvY3VtZW50LmhlYWQgfSlcblxuc3R5bGVTaGVldC5pbnNlcnQoJyNib3ggeyBib3JkZXI6IDFweCBzb2xpZCByZWQ7IH0nKVxuLSBhcHBlbmRzIGEgY3NzIHJ1bGUgaW50byB0aGUgc3R5bGVzaGVldFxuXG5zdHlsZVNoZWV0LmZsdXNoKClcbi0gZW1wdGllcyB0aGUgc3R5bGVzaGVldCBvZiBhbGwgaXRzIGNvbnRlbnRzXG5cbiovXG4vLyAkRmxvd0ZpeE1lXG5mdW5jdGlvbiBzaGVldEZvclRhZyh0YWcpIHtcbiAgaWYgKHRhZy5zaGVldCkge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICByZXR1cm4gdGFnLnNoZWV0O1xuICB9IC8vIHRoaXMgd2VpcmRuZXNzIGJyb3VnaHQgdG8geW91IGJ5IGZpcmVmb3hcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChkb2N1bWVudC5zdHlsZVNoZWV0c1tpXS5vd25lck5vZGUgPT09IHRhZykge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgcmV0dXJuIGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdGFnLnNldEF0dHJpYnV0ZSgnZGF0YS1lbW90aW9uJywgb3B0aW9ucy5rZXkpO1xuXG4gIGlmIChvcHRpb25zLm5vbmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB0YWcuc2V0QXR0cmlidXRlKCdub25jZScsIG9wdGlvbnMubm9uY2UpO1xuICB9XG5cbiAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSk7XG4gIHRhZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtcycsICcnKTtcbiAgcmV0dXJuIHRhZztcbn1cblxudmFyIFN0eWxlU2hlZXQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHlsZVNoZWV0KG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy5faW5zZXJ0VGFnID0gZnVuY3Rpb24gKHRhZykge1xuICAgICAgdmFyIGJlZm9yZTtcblxuICAgICAgaWYgKF90aGlzLnRhZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGJlZm9yZSA9IF90aGlzLnByZXBlbmQgPyBfdGhpcy5jb250YWluZXIuZmlyc3RDaGlsZCA6IF90aGlzLmJlZm9yZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJlZm9yZSA9IF90aGlzLnRhZ3NbX3RoaXMudGFncy5sZW5ndGggLSAxXS5uZXh0U2libGluZztcbiAgICAgIH1cblxuICAgICAgX3RoaXMuY29udGFpbmVyLmluc2VydEJlZm9yZSh0YWcsIGJlZm9yZSk7XG5cbiAgICAgIF90aGlzLnRhZ3MucHVzaCh0YWcpO1xuICAgIH07XG5cbiAgICB0aGlzLmlzU3BlZWR5ID0gb3B0aW9ucy5zcGVlZHkgPT09IHVuZGVmaW5lZCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgOiBvcHRpb25zLnNwZWVkeTtcbiAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgICB0aGlzLmN0ciA9IDA7XG4gICAgdGhpcy5ub25jZSA9IG9wdGlvbnMubm9uY2U7IC8vIGtleSBpcyB0aGUgdmFsdWUgb2YgdGhlIGRhdGEtZW1vdGlvbiBhdHRyaWJ1dGUsIGl0J3MgdXNlZCB0byBpZGVudGlmeSBkaWZmZXJlbnQgc2hlZXRzXG5cbiAgICB0aGlzLmtleSA9IG9wdGlvbnMua2V5O1xuICAgIHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXI7XG4gICAgdGhpcy5wcmVwZW5kID0gb3B0aW9ucy5wcmVwZW5kO1xuICAgIHRoaXMuYmVmb3JlID0gbnVsbDtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTdHlsZVNoZWV0LnByb3RvdHlwZTtcblxuICBfcHJvdG8uaHlkcmF0ZSA9IGZ1bmN0aW9uIGh5ZHJhdGUobm9kZXMpIHtcbiAgICBub2Rlcy5mb3JFYWNoKHRoaXMuX2luc2VydFRhZyk7XG4gIH07XG5cbiAgX3Byb3RvLmluc2VydCA9IGZ1bmN0aW9uIGluc2VydChydWxlKSB7XG4gICAgLy8gdGhlIG1heCBsZW5ndGggaXMgaG93IG1hbnkgcnVsZXMgd2UgaGF2ZSBwZXIgc3R5bGUgdGFnLCBpdCdzIDY1MDAwIGluIHNwZWVkeSBtb2RlXG4gICAgLy8gaXQncyAxIGluIGRldiBiZWNhdXNlIHdlIGluc2VydCBzb3VyY2UgbWFwcyB0aGF0IG1hcCBhIHNpbmdsZSBydWxlIHRvIGEgbG9jYXRpb25cbiAgICAvLyBhbmQgeW91IGNhbiBvbmx5IGhhdmUgb25lIHNvdXJjZSBtYXAgcGVyIHN0eWxlIHRhZ1xuICAgIGlmICh0aGlzLmN0ciAlICh0aGlzLmlzU3BlZWR5ID8gNjUwMDAgOiAxKSA9PT0gMCkge1xuICAgICAgdGhpcy5faW5zZXJ0VGFnKGNyZWF0ZVN0eWxlRWxlbWVudCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdmFyIHRhZyA9IHRoaXMudGFnc1t0aGlzLnRhZ3MubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIGlzSW1wb3J0UnVsZSA9IHJ1bGUuY2hhckNvZGVBdCgwKSA9PT0gNjQgJiYgcnVsZS5jaGFyQ29kZUF0KDEpID09PSAxMDU7XG5cbiAgICAgIGlmIChpc0ltcG9ydFJ1bGUgJiYgdGhpcy5fYWxyZWFkeUluc2VydGVkT3JkZXJJbnNlbnNpdGl2ZVJ1bGUpIHtcbiAgICAgICAgLy8gdGhpcyB3b3VsZCBvbmx5IGNhdXNlIHByb2JsZW0gaW4gc3BlZWR5IG1vZGVcbiAgICAgICAgLy8gYnV0IHdlIGRvbid0IHdhbnQgZW5hYmxpbmcgc3BlZWR5IHRvIGFmZmVjdCB0aGUgb2JzZXJ2YWJsZSBiZWhhdmlvclxuICAgICAgICAvLyBzbyB3ZSByZXBvcnQgdGhpcyBlcnJvciBhdCBhbGwgdGltZXNcbiAgICAgICAgY29uc29sZS5lcnJvcihcIllvdSdyZSBhdHRlbXB0aW5nIHRvIGluc2VydCB0aGUgZm9sbG93aW5nIHJ1bGU6XFxuXCIgKyBydWxlICsgJ1xcblxcbmBAaW1wb3J0YCBydWxlcyBtdXN0IGJlIGJlZm9yZSBhbGwgb3RoZXIgdHlwZXMgb2YgcnVsZXMgaW4gYSBzdHlsZXNoZWV0IGJ1dCBvdGhlciBydWxlcyBoYXZlIGFscmVhZHkgYmVlbiBpbnNlcnRlZC4gUGxlYXNlIGVuc3VyZSB0aGF0IGBAaW1wb3J0YCBydWxlcyBhcmUgYmVmb3JlIGFsbCBvdGhlciBydWxlcy4nKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2FscmVhZHlJbnNlcnRlZE9yZGVySW5zZW5zaXRpdmVSdWxlID0gdGhpcy5fYWxyZWFkeUluc2VydGVkT3JkZXJJbnNlbnNpdGl2ZVJ1bGUgfHwgIWlzSW1wb3J0UnVsZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1NwZWVkeSkge1xuICAgICAgdmFyIHNoZWV0ID0gc2hlZXRGb3JUYWcodGFnKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgdWx0cmFmYXN0IHZlcnNpb24sIHdvcmtzIGFjcm9zcyBicm93c2Vyc1xuICAgICAgICAvLyB0aGUgYmlnIGRyYXdiYWNrIGlzIHRoYXQgdGhlIGNzcyB3b24ndCBiZSBlZGl0YWJsZSBpbiBkZXZ0b29sc1xuICAgICAgICBzaGVldC5pbnNlcnRSdWxlKHJ1bGUsIHNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICEvOigtbW96LXBsYWNlaG9sZGVyfC1tcy1pbnB1dC1wbGFjZWhvbGRlcnwtbW96LXJlYWQtd3JpdGV8LW1vei1yZWFkLW9ubHkpey8udGVzdChydWxlKSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSB3YXMgYSBwcm9ibGVtIGluc2VydGluZyB0aGUgZm9sbG93aW5nIHJ1bGU6IFxcXCJcIiArIHJ1bGUgKyBcIlxcXCJcIiwgZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHJ1bGUpKTtcbiAgICB9XG5cbiAgICB0aGlzLmN0cisrO1xuICB9O1xuXG4gIF9wcm90by5mbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICB0aGlzLnRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICByZXR1cm4gdGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFnKTtcbiAgICB9KTtcbiAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgICB0aGlzLmN0ciA9IDA7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhpcy5fYWxyZWFkeUluc2VydGVkT3JkZXJJbnNlbnNpdGl2ZVJ1bGUgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFN0eWxlU2hlZXQ7XG59KCk7XG5cbmV4cG9ydCB7IFN0eWxlU2hlZXQgfTtcbiIsInZhciB1bml0bGVzc0tleXMgPSB7XG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAxLFxuICBib3JkZXJJbWFnZU91dHNldDogMSxcbiAgYm9yZGVySW1hZ2VTbGljZTogMSxcbiAgYm9yZGVySW1hZ2VXaWR0aDogMSxcbiAgYm94RmxleDogMSxcbiAgYm94RmxleEdyb3VwOiAxLFxuICBib3hPcmRpbmFsR3JvdXA6IDEsXG4gIGNvbHVtbkNvdW50OiAxLFxuICBjb2x1bW5zOiAxLFxuICBmbGV4OiAxLFxuICBmbGV4R3JvdzogMSxcbiAgZmxleFBvc2l0aXZlOiAxLFxuICBmbGV4U2hyaW5rOiAxLFxuICBmbGV4TmVnYXRpdmU6IDEsXG4gIGZsZXhPcmRlcjogMSxcbiAgZ3JpZFJvdzogMSxcbiAgZ3JpZFJvd0VuZDogMSxcbiAgZ3JpZFJvd1NwYW46IDEsXG4gIGdyaWRSb3dTdGFydDogMSxcbiAgZ3JpZENvbHVtbjogMSxcbiAgZ3JpZENvbHVtbkVuZDogMSxcbiAgZ3JpZENvbHVtblNwYW46IDEsXG4gIGdyaWRDb2x1bW5TdGFydDogMSxcbiAgbXNHcmlkUm93OiAxLFxuICBtc0dyaWRSb3dTcGFuOiAxLFxuICBtc0dyaWRDb2x1bW46IDEsXG4gIG1zR3JpZENvbHVtblNwYW46IDEsXG4gIGZvbnRXZWlnaHQ6IDEsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG9wYWNpdHk6IDEsXG4gIG9yZGVyOiAxLFxuICBvcnBoYW5zOiAxLFxuICB0YWJTaXplOiAxLFxuICB3aWRvd3M6IDEsXG4gIHpJbmRleDogMSxcbiAgem9vbTogMSxcbiAgV2Via2l0TGluZUNsYW1wOiAxLFxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiAxLFxuICBmbG9vZE9wYWNpdHk6IDEsXG4gIHN0b3BPcGFjaXR5OiAxLFxuICBzdHJva2VEYXNoYXJyYXk6IDEsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IDEsXG4gIHN0cm9rZU1pdGVybGltaXQ6IDEsXG4gIHN0cm9rZU9wYWNpdHk6IDEsXG4gIHN0cm9rZVdpZHRoOiAxXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1bml0bGVzc0tleXM7XG4iLCJ2YXIgaXNCcm93c2VyID0gXCJvYmplY3RcIiAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiBnZXRSZWdpc3RlcmVkU3R5bGVzKHJlZ2lzdGVyZWQsIHJlZ2lzdGVyZWRTdHlsZXMsIGNsYXNzTmFtZXMpIHtcbiAgdmFyIHJhd0NsYXNzTmFtZSA9ICcnO1xuICBjbGFzc05hbWVzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgaWYgKHJlZ2lzdGVyZWRbY2xhc3NOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZWdpc3RlcmVkU3R5bGVzLnB1c2gocmVnaXN0ZXJlZFtjbGFzc05hbWVdICsgXCI7XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByYXdDbGFzc05hbWUgKz0gY2xhc3NOYW1lICsgXCIgXCI7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJhd0NsYXNzTmFtZTtcbn1cbnZhciBpbnNlcnRTdHlsZXMgPSBmdW5jdGlvbiBpbnNlcnRTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGlzU3RyaW5nVGFnKSB7XG4gIHZhciBjbGFzc05hbWUgPSBjYWNoZS5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcblxuICBpZiAoIC8vIHdlIG9ubHkgbmVlZCB0byBhZGQgdGhlIHN0eWxlcyB0byB0aGUgcmVnaXN0ZXJlZCBjYWNoZSBpZiB0aGVcbiAgLy8gY2xhc3MgbmFtZSBjb3VsZCBiZSB1c2VkIGZ1cnRoZXIgZG93blxuICAvLyB0aGUgdHJlZSBidXQgaWYgaXQncyBhIHN0cmluZyB0YWcsIHdlIGtub3cgaXQgd29uJ3RcbiAgLy8gc28gd2UgZG9uJ3QgaGF2ZSB0byBhZGQgaXQgdG8gcmVnaXN0ZXJlZCBjYWNoZS5cbiAgLy8gdGhpcyBpbXByb3ZlcyBtZW1vcnkgdXNhZ2Ugc2luY2Ugd2UgY2FuIGF2b2lkIHN0b3JpbmcgdGhlIHdob2xlIHN0eWxlIHN0cmluZ1xuICAoaXNTdHJpbmdUYWcgPT09IGZhbHNlIHx8IC8vIHdlIG5lZWQgdG8gYWx3YXlzIHN0b3JlIGl0IGlmIHdlJ3JlIGluIGNvbXBhdCBtb2RlIGFuZFxuICAvLyBpbiBub2RlIHNpbmNlIGVtb3Rpb24tc2VydmVyIHJlbGllcyBvbiB3aGV0aGVyIGEgc3R5bGUgaXMgaW5cbiAgLy8gdGhlIHJlZ2lzdGVyZWQgY2FjaGUgdG8ga25vdyB3aGV0aGVyIGEgc3R5bGUgaXMgZ2xvYmFsIG9yIG5vdFxuICAvLyBhbHNvLCBub3RlIHRoYXQgdGhpcyBjaGVjayB3aWxsIGJlIGRlYWQgY29kZSBlbGltaW5hdGVkIGluIHRoZSBicm93c2VyXG4gIGlzQnJvd3NlciA9PT0gZmFsc2UgKSAmJiBjYWNoZS5yZWdpc3RlcmVkW2NsYXNzTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgIGNhY2hlLnJlZ2lzdGVyZWRbY2xhc3NOYW1lXSA9IHNlcmlhbGl6ZWQuc3R5bGVzO1xuICB9XG5cbiAgaWYgKGNhY2hlLmluc2VydGVkW3NlcmlhbGl6ZWQubmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBjdXJyZW50ID0gc2VyaWFsaXplZDtcblxuICAgIGRvIHtcbiAgICAgIHZhciBtYXliZVN0eWxlcyA9IGNhY2hlLmluc2VydChzZXJpYWxpemVkID09PSBjdXJyZW50ID8gXCIuXCIgKyBjbGFzc05hbWUgOiAnJywgY3VycmVudCwgY2FjaGUuc2hlZXQsIHRydWUpO1xuXG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH0gd2hpbGUgKGN1cnJlbnQgIT09IHVuZGVmaW5lZCk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGdldFJlZ2lzdGVyZWRTdHlsZXMsIGluc2VydFN0eWxlcyB9O1xuIiwidmFyIHdlYWtNZW1vaXplID0gZnVuY3Rpb24gd2Vha01lbW9pemUoZnVuYykge1xuICAvLyAkRmxvd0ZpeE1lIGZsb3cgZG9lc24ndCBpbmNsdWRlIGFsbCBub24tcHJpbWl0aXZlIHR5cGVzIGFzIGFsbG93ZWQgZm9yIHdlYWttYXBzXG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGNhY2hlLmhhcyhhcmcpKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGFyZyk7XG4gICAgfVxuXG4gICAgdmFyIHJldCA9IGZ1bmMoYXJnKTtcbiAgICBjYWNoZS5zZXQoYXJnLCByZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3ZWFrTWVtb2l6ZTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4vKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gIGNvbnRleHRUeXBlOiB0cnVlLFxuICBjb250ZXh0VHlwZXM6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gIG1peGluczogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gIG5hbWU6IHRydWUsXG4gIGxlbmd0aDogdHJ1ZSxcbiAgcHJvdG90eXBlOiB0cnVlLFxuICBjYWxsZXI6IHRydWUsXG4gIGNhbGxlZTogdHJ1ZSxcbiAgYXJndW1lbnRzOiB0cnVlLFxuICBhcml0eTogdHJ1ZVxufTtcbnZhciBGT1JXQVJEX1JFRl9TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICByZW5kZXI6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZVxufTtcbnZhciBNRU1PX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIGNvbXBhcmU6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBUWVBFX1NUQVRJQ1MgPSB7fTtcblRZUEVfU1RBVElDU1tyZWFjdElzLkZvcndhcmRSZWZdID0gRk9SV0FSRF9SRUZfU1RBVElDUztcblRZUEVfU1RBVElDU1tyZWFjdElzLk1lbW9dID0gTUVNT19TVEFUSUNTO1xuXG5mdW5jdGlvbiBnZXRTdGF0aWNzKGNvbXBvbmVudCkge1xuICAvLyBSZWFjdCB2MTYuMTEgYW5kIGJlbG93XG4gIGlmIChyZWFjdElzLmlzTWVtbyhjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIE1FTU9fU1RBVElDUztcbiAgfSAvLyBSZWFjdCB2MTYuMTIgYW5kIGFib3ZlXG5cblxuICByZXR1cm4gVFlQRV9TVEFUSUNTW2NvbXBvbmVudFsnJCR0eXBlb2YnXV0gfHwgUkVBQ1RfU1RBVElDUztcbn1cblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcbiAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICB2YXIgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldFN0YXRpY3MgPSBnZXRTdGF0aWNzKHRhcmdldENvbXBvbmVudCk7XG4gICAgdmFyIHNvdXJjZVN0YXRpY3MgPSBnZXRTdGF0aWNzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAhKGJsYWNrbGlzdCAmJiBibGFja2xpc3Rba2V5XSkgJiYgIShzb3VyY2VTdGF0aWNzICYmIHNvdXJjZVN0YXRpY3Nba2V5XSkgJiYgISh0YXJnZXRTdGF0aWNzICYmIHRhcmdldFN0YXRpY3Nba2V5XSkpIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gQXZvaWQgZmFpbHVyZXMgZnJvbSByZWFkLW9ubHkgcHJvcGVydGllc1xuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuIiwiZnVuY3Rpb24gYXJlSW5wdXRzRXF1YWwobmV3SW5wdXRzLCBsYXN0SW5wdXRzKSB7XG4gICAgaWYgKG5ld0lucHV0cy5sZW5ndGggIT09IGxhc3RJbnB1dHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdJbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG5ld0lucHV0c1tpXSAhPT0gbGFzdElucHV0c1tpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBtZW1vaXplT25lKHJlc3VsdEZuLCBpc0VxdWFsKSB7XG4gICAgaWYgKGlzRXF1YWwgPT09IHZvaWQgMCkgeyBpc0VxdWFsID0gYXJlSW5wdXRzRXF1YWw7IH1cbiAgICB2YXIgbGFzdFRoaXM7XG4gICAgdmFyIGxhc3RBcmdzID0gW107XG4gICAgdmFyIGxhc3RSZXN1bHQ7XG4gICAgdmFyIGNhbGxlZE9uY2UgPSBmYWxzZTtcbiAgICBmdW5jdGlvbiBtZW1vaXplZCgpIHtcbiAgICAgICAgdmFyIG5ld0FyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG5ld0FyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FsbGVkT25jZSAmJiBsYXN0VGhpcyA9PT0gdGhpcyAmJiBpc0VxdWFsKG5ld0FyZ3MsIGxhc3RBcmdzKSkge1xuICAgICAgICAgICAgcmV0dXJuIGxhc3RSZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdFJlc3VsdCA9IHJlc3VsdEZuLmFwcGx5KHRoaXMsIG5ld0FyZ3MpO1xuICAgICAgICBjYWxsZWRPbmNlID0gdHJ1ZTtcbiAgICAgICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgICAgICBsYXN0QXJncyA9IG5ld0FyZ3M7XG4gICAgICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICAgIH1cbiAgICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemVPbmU7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgc2l6ZXJTdHlsZSA9IHtcblx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdHRvcDogMCxcblx0bGVmdDogMCxcblx0dmlzaWJpbGl0eTogJ2hpZGRlbicsXG5cdGhlaWdodDogMCxcblx0b3ZlcmZsb3c6ICdzY3JvbGwnLFxuXHR3aGl0ZVNwYWNlOiAncHJlJ1xufTtcblxudmFyIElOUFVUX1BST1BTX0JMQUNLTElTVCA9IFsnZXh0cmFXaWR0aCcsICdpbmplY3RTdHlsZXMnLCAnaW5wdXRDbGFzc05hbWUnLCAnaW5wdXRSZWYnLCAnaW5wdXRTdHlsZScsICdtaW5XaWR0aCcsICdvbkF1dG9zaXplJywgJ3BsYWNlaG9sZGVySXNNaW5XaWR0aCddO1xuXG52YXIgY2xlYW5JbnB1dFByb3BzID0gZnVuY3Rpb24gY2xlYW5JbnB1dFByb3BzKGlucHV0UHJvcHMpIHtcblx0SU5QVVRfUFJPUFNfQkxBQ0tMSVNULmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XG5cdFx0cmV0dXJuIGRlbGV0ZSBpbnB1dFByb3BzW2ZpZWxkXTtcblx0fSk7XG5cdHJldHVybiBpbnB1dFByb3BzO1xufTtcblxudmFyIGNvcHlTdHlsZXMgPSBmdW5jdGlvbiBjb3B5U3R5bGVzKHN0eWxlcywgbm9kZSkge1xuXHRub2RlLnN0eWxlLmZvbnRTaXplID0gc3R5bGVzLmZvbnRTaXplO1xuXHRub2RlLnN0eWxlLmZvbnRGYW1pbHkgPSBzdHlsZXMuZm9udEZhbWlseTtcblx0bm9kZS5zdHlsZS5mb250V2VpZ2h0ID0gc3R5bGVzLmZvbnRXZWlnaHQ7XG5cdG5vZGUuc3R5bGUuZm9udFN0eWxlID0gc3R5bGVzLmZvbnRTdHlsZTtcblx0bm9kZS5zdHlsZS5sZXR0ZXJTcGFjaW5nID0gc3R5bGVzLmxldHRlclNwYWNpbmc7XG5cdG5vZGUuc3R5bGUudGV4dFRyYW5zZm9ybSA9IHN0eWxlcy50ZXh0VHJhbnNmb3JtO1xufTtcblxudmFyIGlzSUUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubmF2aWdhdG9yID8gL01TSUUgfFRyaWRlbnRcXC98RWRnZVxcLy8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkgOiBmYWxzZTtcblxudmFyIGdlbmVyYXRlSWQgPSBmdW5jdGlvbiBnZW5lcmF0ZUlkKCkge1xuXHQvLyB3ZSBvbmx5IG5lZWQgYW4gYXV0by1nZW5lcmF0ZWQgSUQgZm9yIHN0eWxlc2hlZXQgaW5qZWN0aW9uLCB3aGljaCBpcyBvbmx5XG5cdC8vIHVzZWQgZm9yIElFLiBzbyBpZiB0aGUgYnJvd3NlciBpcyBub3QgSUUsIHRoaXMgc2hvdWxkIHJldHVybiB1bmRlZmluZWQuXG5cdHJldHVybiBpc0lFID8gJ18nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDEyKSA6IHVuZGVmaW5lZDtcbn07XG5cbnZhciBBdXRvc2l6ZUlucHV0ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcblx0X2luaGVyaXRzKEF1dG9zaXplSW5wdXQsIF9Db21wb25lbnQpO1xuXG5cdF9jcmVhdGVDbGFzcyhBdXRvc2l6ZUlucHV0LCBudWxsLCBbe1xuXHRcdGtleTogJ2dldERlcml2ZWRTdGF0ZUZyb21Qcm9wcycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcblx0XHRcdHZhciBpZCA9IHByb3BzLmlkO1xuXG5cdFx0XHRyZXR1cm4gaWQgIT09IHN0YXRlLnByZXZJZCA/IHsgaW5wdXRJZDogaWQgfHwgZ2VuZXJhdGVJZCgpLCBwcmV2SWQ6IGlkIH0gOiBudWxsO1xuXHRcdH1cblx0fV0pO1xuXG5cdGZ1bmN0aW9uIEF1dG9zaXplSW5wdXQocHJvcHMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXV0b3NpemVJbnB1dCk7XG5cblx0XHR2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQXV0b3NpemVJbnB1dC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEF1dG9zaXplSW5wdXQpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cblx0XHRfdGhpcy5pbnB1dFJlZiA9IGZ1bmN0aW9uIChlbCkge1xuXHRcdFx0X3RoaXMuaW5wdXQgPSBlbDtcblx0XHRcdGlmICh0eXBlb2YgX3RoaXMucHJvcHMuaW5wdXRSZWYgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0X3RoaXMucHJvcHMuaW5wdXRSZWYoZWwpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRfdGhpcy5wbGFjZUhvbGRlclNpemVyUmVmID0gZnVuY3Rpb24gKGVsKSB7XG5cdFx0XHRfdGhpcy5wbGFjZUhvbGRlclNpemVyID0gZWw7XG5cdFx0fTtcblxuXHRcdF90aGlzLnNpemVyUmVmID0gZnVuY3Rpb24gKGVsKSB7XG5cdFx0XHRfdGhpcy5zaXplciA9IGVsO1xuXHRcdH07XG5cblx0XHRfdGhpcy5zdGF0ZSA9IHtcblx0XHRcdGlucHV0V2lkdGg6IHByb3BzLm1pbldpZHRoLFxuXHRcdFx0aW5wdXRJZDogcHJvcHMuaWQgfHwgZ2VuZXJhdGVJZCgpLFxuXHRcdFx0cHJldklkOiBwcm9wcy5pZFxuXHRcdH07XG5cdFx0cmV0dXJuIF90aGlzO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKEF1dG9zaXplSW5wdXQsIFt7XG5cdFx0a2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRcdHRoaXMubW91bnRlZCA9IHRydWU7XG5cdFx0XHR0aGlzLmNvcHlJbnB1dFN0eWxlcygpO1xuXHRcdFx0dGhpcy51cGRhdGVJbnB1dFdpZHRoKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG5cdFx0XHRpZiAocHJldlN0YXRlLmlucHV0V2lkdGggIT09IHRoaXMuc3RhdGUuaW5wdXRXaWR0aCkge1xuXHRcdFx0XHRpZiAodHlwZW9mIHRoaXMucHJvcHMub25BdXRvc2l6ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdHRoaXMucHJvcHMub25BdXRvc2l6ZSh0aGlzLnN0YXRlLmlucHV0V2lkdGgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnVwZGF0ZUlucHV0V2lkdGgoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdFx0dGhpcy5tb3VudGVkID0gZmFsc2U7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY29weUlucHV0U3R5bGVzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29weUlucHV0U3R5bGVzKCkge1xuXHRcdFx0aWYgKCF0aGlzLm1vdW50ZWQgfHwgIXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHZhciBpbnB1dFN0eWxlcyA9IHRoaXMuaW5wdXQgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5pbnB1dCk7XG5cdFx0XHRpZiAoIWlucHV0U3R5bGVzKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvcHlTdHlsZXMoaW5wdXRTdHlsZXMsIHRoaXMuc2l6ZXIpO1xuXHRcdFx0aWYgKHRoaXMucGxhY2VIb2xkZXJTaXplcikge1xuXHRcdFx0XHRjb3B5U3R5bGVzKGlucHV0U3R5bGVzLCB0aGlzLnBsYWNlSG9sZGVyU2l6ZXIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3VwZGF0ZUlucHV0V2lkdGgnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVJbnB1dFdpZHRoKCkge1xuXHRcdFx0aWYgKCF0aGlzLm1vdW50ZWQgfHwgIXRoaXMuc2l6ZXIgfHwgdHlwZW9mIHRoaXMuc2l6ZXIuc2Nyb2xsV2lkdGggPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHZhciBuZXdJbnB1dFdpZHRoID0gdm9pZCAwO1xuXHRcdFx0aWYgKHRoaXMucHJvcHMucGxhY2Vob2xkZXIgJiYgKCF0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMucHJvcHMudmFsdWUgJiYgdGhpcy5wcm9wcy5wbGFjZWhvbGRlcklzTWluV2lkdGgpKSB7XG5cdFx0XHRcdG5ld0lucHV0V2lkdGggPSBNYXRoLm1heCh0aGlzLnNpemVyLnNjcm9sbFdpZHRoLCB0aGlzLnBsYWNlSG9sZGVyU2l6ZXIuc2Nyb2xsV2lkdGgpICsgMjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5ld0lucHV0V2lkdGggPSB0aGlzLnNpemVyLnNjcm9sbFdpZHRoICsgMjtcblx0XHRcdH1cblx0XHRcdC8vIGFkZCBleHRyYVdpZHRoIHRvIHRoZSBkZXRlY3RlZCB3aWR0aC4gZm9yIG51bWJlciB0eXBlcywgdGhpcyBkZWZhdWx0cyB0byAxNiB0byBhbGxvdyBmb3IgdGhlIHN0ZXBwZXIgVUlcblx0XHRcdHZhciBleHRyYVdpZHRoID0gdGhpcy5wcm9wcy50eXBlID09PSAnbnVtYmVyJyAmJiB0aGlzLnByb3BzLmV4dHJhV2lkdGggPT09IHVuZGVmaW5lZCA/IDE2IDogcGFyc2VJbnQodGhpcy5wcm9wcy5leHRyYVdpZHRoKSB8fCAwO1xuXHRcdFx0bmV3SW5wdXRXaWR0aCArPSBleHRyYVdpZHRoO1xuXHRcdFx0aWYgKG5ld0lucHV0V2lkdGggPCB0aGlzLnByb3BzLm1pbldpZHRoKSB7XG5cdFx0XHRcdG5ld0lucHV0V2lkdGggPSB0aGlzLnByb3BzLm1pbldpZHRoO1xuXHRcdFx0fVxuXHRcdFx0aWYgKG5ld0lucHV0V2lkdGggIT09IHRoaXMuc3RhdGUuaW5wdXRXaWR0aCkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRpbnB1dFdpZHRoOiBuZXdJbnB1dFdpZHRoXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2dldElucHV0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0SW5wdXQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5pbnB1dDtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmb2N1cycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuXHRcdFx0dGhpcy5pbnB1dC5mb2N1cygpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2JsdXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge1xuXHRcdFx0dGhpcy5pbnB1dC5ibHVyKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnc2VsZWN0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gc2VsZWN0KCkge1xuXHRcdFx0dGhpcy5pbnB1dC5zZWxlY3QoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXJTdHlsZXMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXJTdHlsZXMoKSB7XG5cdFx0XHQvLyB0aGlzIG1ldGhvZCBpbmplY3RzIHN0eWxlcyB0byBoaWRlIElFJ3MgY2xlYXIgaW5kaWNhdG9yLCB3aGljaCBtZXNzZXNcblx0XHRcdC8vIHdpdGggaW5wdXQgc2l6ZSBkZXRlY3Rpb24uIHRoZSBzdHlsZXNoZWV0IGlzIG9ubHkgaW5qZWN0ZWQgd2hlbiB0aGVcblx0XHRcdC8vIGJyb3dzZXIgaXMgSUUsIGFuZCBjYW4gYWxzbyBiZSBkaXNhYmxlZCBieSB0aGUgYGluamVjdFN0eWxlc2AgcHJvcC5cblx0XHRcdHZhciBpbmplY3RTdHlsZXMgPSB0aGlzLnByb3BzLmluamVjdFN0eWxlcztcblxuXHRcdFx0cmV0dXJuIGlzSUUgJiYgaW5qZWN0U3R5bGVzID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJywgeyBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuXHRcdFx0XHRcdF9faHRtbDogJ2lucHV0IycgKyB0aGlzLnN0YXRlLmlucHV0SWQgKyAnOjotbXMtY2xlYXIge2Rpc3BsYXk6IG5vbmU7fSdcblx0XHRcdFx0fSB9KSA6IG51bGw7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0dmFyIHNpemVyVmFsdWUgPSBbdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUsIHRoaXMucHJvcHMudmFsdWUsICcnXS5yZWR1Y2UoZnVuY3Rpb24gKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkge1xuXHRcdFx0XHRpZiAocHJldmlvdXNWYWx1ZSAhPT0gbnVsbCAmJiBwcmV2aW91c1ZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gcHJldmlvdXNWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gY3VycmVudFZhbHVlO1xuXHRcdFx0fSk7XG5cblx0XHRcdHZhciB3cmFwcGVyU3R5bGUgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcy5zdHlsZSk7XG5cdFx0XHRpZiAoIXdyYXBwZXJTdHlsZS5kaXNwbGF5KSB3cmFwcGVyU3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuXG5cdFx0XHR2YXIgaW5wdXRTdHlsZSA9IF9leHRlbmRzKHtcblx0XHRcdFx0Ym94U2l6aW5nOiAnY29udGVudC1ib3gnLFxuXHRcdFx0XHR3aWR0aDogdGhpcy5zdGF0ZS5pbnB1dFdpZHRoICsgJ3B4J1xuXHRcdFx0fSwgdGhpcy5wcm9wcy5pbnB1dFN0eWxlKTtcblxuXHRcdFx0dmFyIGlucHV0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXModGhpcy5wcm9wcywgW10pO1xuXG5cdFx0XHRjbGVhbklucHV0UHJvcHMoaW5wdXRQcm9wcyk7XG5cdFx0XHRpbnB1dFByb3BzLmNsYXNzTmFtZSA9IHRoaXMucHJvcHMuaW5wdXRDbGFzc05hbWU7XG5cdFx0XHRpbnB1dFByb3BzLmlkID0gdGhpcy5zdGF0ZS5pbnB1dElkO1xuXHRcdFx0aW5wdXRQcm9wcy5zdHlsZSA9IGlucHV0U3R5bGU7XG5cblx0XHRcdHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzTmFtZSwgc3R5bGU6IHdyYXBwZXJTdHlsZSB9LFxuXHRcdFx0XHR0aGlzLnJlbmRlclN0eWxlcygpLFxuXHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBfZXh0ZW5kcyh7fSwgaW5wdXRQcm9wcywgeyByZWY6IHRoaXMuaW5wdXRSZWYgfSkpLFxuXHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHR7IHJlZjogdGhpcy5zaXplclJlZiwgc3R5bGU6IHNpemVyU3R5bGUgfSxcblx0XHRcdFx0XHRzaXplclZhbHVlXG5cdFx0XHRcdCksXG5cdFx0XHRcdHRoaXMucHJvcHMucGxhY2Vob2xkZXIgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHR7IHJlZjogdGhpcy5wbGFjZUhvbGRlclNpemVyUmVmLCBzdHlsZTogc2l6ZXJTdHlsZSB9LFxuXHRcdFx0XHRcdHRoaXMucHJvcHMucGxhY2Vob2xkZXJcblx0XHRcdFx0KSA6IG51bGxcblx0XHRcdCk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIEF1dG9zaXplSW5wdXQ7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5BdXRvc2l6ZUlucHV0LnByb3BUeXBlcyA9IHtcblx0Y2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgLy8gY2xhc3NOYW1lIGZvciB0aGUgb3V0ZXIgZWxlbWVudFxuXHRkZWZhdWx0VmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55LCAvLyBkZWZhdWx0IGZpZWxkIHZhbHVlXG5cdGV4dHJhV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFsvLyBhZGRpdGlvbmFsIHdpZHRoIGZvciBpbnB1dCBlbGVtZW50XG5cdF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLCBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ10pLFxuXHRpZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIC8vIGlkIHRvIHVzZSBmb3IgdGhlIGlucHV0LCBjYW4gYmUgc2V0IGZvciBjb25zaXN0ZW50IHNuYXBzaG90c1xuXHRpbmplY3RTdHlsZXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gaW5qZWN0IHRoZSBjdXN0b20gc3R5bGVzaGVldCB0byBoaWRlIGNsZWFyIFVJLCBkZWZhdWx0cyB0byB0cnVlXG5cdGlucHV0Q2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgLy8gY2xhc3NOYW1lIGZvciB0aGUgaW5wdXQgZWxlbWVudFxuXHRpbnB1dFJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCAvLyByZWYgY2FsbGJhY2sgZm9yIHRoZSBpbnB1dCBlbGVtZW50XG5cdGlucHV0U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LCAvLyBjc3Mgc3R5bGVzIGZvciB0aGUgaW5wdXQgZWxlbWVudFxuXHRtaW5XaWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoWy8vIG1pbmltdW0gd2lkdGggZm9yIGlucHV0IGVsZW1lbnRcblx0X3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsIF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXSksXG5cdG9uQXV0b3NpemU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gb25BdXRvc2l6ZSBoYW5kbGVyOiBmdW5jdGlvbihuZXdXaWR0aCkge31cblx0b25DaGFuZ2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gb25DaGFuZ2UgaGFuZGxlcjogZnVuY3Rpb24oZXZlbnQpIHt9XG5cdHBsYWNlaG9sZGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgLy8gcGxhY2Vob2xkZXIgdGV4dFxuXHRwbGFjZWhvbGRlcklzTWluV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gZG9uJ3QgY29sbGFwc2Ugc2l6ZSB0byBsZXNzIHRoYW4gdGhlIHBsYWNlaG9sZGVyXG5cdHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCwgLy8gY3NzIHN0eWxlcyBmb3IgdGhlIG91dGVyIGVsZW1lbnRcblx0dmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55IC8vIGZpZWxkIHZhbHVlXG59O1xuQXV0b3NpemVJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG5cdG1pbldpZHRoOiAxLFxuXHRpbmplY3RTdHlsZXM6IHRydWVcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEF1dG9zaXplSW5wdXQ7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2dldFByb3RvdHlwZU9mIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mJztcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXknO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyBjIGFzIGNsZWFySW5kaWNhdG9yQ1NTLCBhIGFzIGNvbnRhaW5lckNTUywgYiBhcyBjc3MkMSwgZCBhcyBkcm9wZG93bkluZGljYXRvckNTUywgZyBhcyBncm91cENTUywgZSBhcyBncm91cEhlYWRpbmdDU1MsIGkgYXMgaW5kaWNhdG9yc0NvbnRhaW5lckNTUywgZiBhcyBpbmRpY2F0b3JTZXBhcmF0b3JDU1MsIGggYXMgaW5wdXRDU1MsIGwgYXMgbG9hZGluZ0luZGljYXRvckNTUywgaiBhcyBsb2FkaW5nTWVzc2FnZUNTUywgbSBhcyBtZW51Q1NTLCBrIGFzIG1lbnVMaXN0Q1NTLCBuIGFzIG1lbnVQb3J0YWxDU1MsIG8gYXMgbXVsdGlWYWx1ZUNTUywgcCBhcyBtdWx0aVZhbHVlTGFiZWxDU1MsIHEgYXMgbXVsdGlWYWx1ZVJlbW92ZUNTUywgciBhcyBub09wdGlvbnNNZXNzYWdlQ1NTLCBzIGFzIG9wdGlvbkNTUywgdCBhcyBwbGFjZWhvbGRlckNTUywgdSBhcyBjc3MkMiwgdiBhcyB2YWx1ZUNvbnRhaW5lckNTUywgdyBhcyBpc1RvdWNoQ2FwYWJsZSwgeCBhcyBpc01vYmlsZURldmljZSwgeSBhcyBjbGFzc05hbWVzLCB6IGFzIGRlZmF1bHRDb21wb25lbnRzLCBBIGFzIGlzRG9jdW1lbnRFbGVtZW50LCBCIGFzIGNsZWFuVmFsdWUsIEMgYXMgc2Nyb2xsSW50b1ZpZXcsIEQgYXMgbm9vcCwgTSBhcyBNZW51UGxhY2VyIH0gZnJvbSAnLi9pbmRleC04YjY0NDEwYy5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcblxudmFyIGRpYWNyaXRpY3MgPSBbe1xuICBiYXNlOiAnQScsXG4gIGxldHRlcnM6IFwiQVxcdTI0QjZcXHVGRjIxXFx4QzBcXHhDMVxceEMyXFx1MUVBNlxcdTFFQTRcXHUxRUFBXFx1MUVBOFxceEMzXFx1MDEwMFxcdTAxMDJcXHUxRUIwXFx1MUVBRVxcdTFFQjRcXHUxRUIyXFx1MDIyNlxcdTAxRTBcXHhDNFxcdTAxREVcXHUxRUEyXFx4QzVcXHUwMUZBXFx1MDFDRFxcdTAyMDBcXHUwMjAyXFx1MUVBMFxcdTFFQUNcXHUxRUI2XFx1MUUwMFxcdTAxMDRcXHUwMjNBXFx1MkM2RlwiXG59LCB7XG4gIGJhc2U6ICdBQScsXG4gIGxldHRlcnM6IFwiXFx1QTczMlwiXG59LCB7XG4gIGJhc2U6ICdBRScsXG4gIGxldHRlcnM6IFwiXFx4QzZcXHUwMUZDXFx1MDFFMlwiXG59LCB7XG4gIGJhc2U6ICdBTycsXG4gIGxldHRlcnM6IFwiXFx1QTczNFwiXG59LCB7XG4gIGJhc2U6ICdBVScsXG4gIGxldHRlcnM6IFwiXFx1QTczNlwiXG59LCB7XG4gIGJhc2U6ICdBVicsXG4gIGxldHRlcnM6IFwiXFx1QTczOFxcdUE3M0FcIlxufSwge1xuICBiYXNlOiAnQVknLFxuICBsZXR0ZXJzOiBcIlxcdUE3M0NcIlxufSwge1xuICBiYXNlOiAnQicsXG4gIGxldHRlcnM6IFwiQlxcdTI0QjdcXHVGRjIyXFx1MUUwMlxcdTFFMDRcXHUxRTA2XFx1MDI0M1xcdTAxODJcXHUwMTgxXCJcbn0sIHtcbiAgYmFzZTogJ0MnLFxuICBsZXR0ZXJzOiBcIkNcXHUyNEI4XFx1RkYyM1xcdTAxMDZcXHUwMTA4XFx1MDEwQVxcdTAxMENcXHhDN1xcdTFFMDhcXHUwMTg3XFx1MDIzQlxcdUE3M0VcIlxufSwge1xuICBiYXNlOiAnRCcsXG4gIGxldHRlcnM6IFwiRFxcdTI0QjlcXHVGRjI0XFx1MUUwQVxcdTAxMEVcXHUxRTBDXFx1MUUxMFxcdTFFMTJcXHUxRTBFXFx1MDExMFxcdTAxOEJcXHUwMThBXFx1MDE4OVxcdUE3NzlcIlxufSwge1xuICBiYXNlOiAnRFonLFxuICBsZXR0ZXJzOiBcIlxcdTAxRjFcXHUwMUM0XCJcbn0sIHtcbiAgYmFzZTogJ0R6JyxcbiAgbGV0dGVyczogXCJcXHUwMUYyXFx1MDFDNVwiXG59LCB7XG4gIGJhc2U6ICdFJyxcbiAgbGV0dGVyczogXCJFXFx1MjRCQVxcdUZGMjVcXHhDOFxceEM5XFx4Q0FcXHUxRUMwXFx1MUVCRVxcdTFFQzRcXHUxRUMyXFx1MUVCQ1xcdTAxMTJcXHUxRTE0XFx1MUUxNlxcdTAxMTRcXHUwMTE2XFx4Q0JcXHUxRUJBXFx1MDExQVxcdTAyMDRcXHUwMjA2XFx1MUVCOFxcdTFFQzZcXHUwMjI4XFx1MUUxQ1xcdTAxMThcXHUxRTE4XFx1MUUxQVxcdTAxOTBcXHUwMThFXCJcbn0sIHtcbiAgYmFzZTogJ0YnLFxuICBsZXR0ZXJzOiBcIkZcXHUyNEJCXFx1RkYyNlxcdTFFMUVcXHUwMTkxXFx1QTc3QlwiXG59LCB7XG4gIGJhc2U6ICdHJyxcbiAgbGV0dGVyczogXCJHXFx1MjRCQ1xcdUZGMjdcXHUwMUY0XFx1MDExQ1xcdTFFMjBcXHUwMTFFXFx1MDEyMFxcdTAxRTZcXHUwMTIyXFx1MDFFNFxcdTAxOTNcXHVBN0EwXFx1QTc3RFxcdUE3N0VcIlxufSwge1xuICBiYXNlOiAnSCcsXG4gIGxldHRlcnM6IFwiSFxcdTI0QkRcXHVGRjI4XFx1MDEyNFxcdTFFMjJcXHUxRTI2XFx1MDIxRVxcdTFFMjRcXHUxRTI4XFx1MUUyQVxcdTAxMjZcXHUyQzY3XFx1MkM3NVxcdUE3OERcIlxufSwge1xuICBiYXNlOiAnSScsXG4gIGxldHRlcnM6IFwiSVxcdTI0QkVcXHVGRjI5XFx4Q0NcXHhDRFxceENFXFx1MDEyOFxcdTAxMkFcXHUwMTJDXFx1MDEzMFxceENGXFx1MUUyRVxcdTFFQzhcXHUwMUNGXFx1MDIwOFxcdTAyMEFcXHUxRUNBXFx1MDEyRVxcdTFFMkNcXHUwMTk3XCJcbn0sIHtcbiAgYmFzZTogJ0onLFxuICBsZXR0ZXJzOiBcIkpcXHUyNEJGXFx1RkYyQVxcdTAxMzRcXHUwMjQ4XCJcbn0sIHtcbiAgYmFzZTogJ0snLFxuICBsZXR0ZXJzOiBcIktcXHUyNEMwXFx1RkYyQlxcdTFFMzBcXHUwMUU4XFx1MUUzMlxcdTAxMzZcXHUxRTM0XFx1MDE5OFxcdTJDNjlcXHVBNzQwXFx1QTc0MlxcdUE3NDRcXHVBN0EyXCJcbn0sIHtcbiAgYmFzZTogJ0wnLFxuICBsZXR0ZXJzOiBcIkxcXHUyNEMxXFx1RkYyQ1xcdTAxM0ZcXHUwMTM5XFx1MDEzRFxcdTFFMzZcXHUxRTM4XFx1MDEzQlxcdTFFM0NcXHUxRTNBXFx1MDE0MVxcdTAyM0RcXHUyQzYyXFx1MkM2MFxcdUE3NDhcXHVBNzQ2XFx1QTc4MFwiXG59LCB7XG4gIGJhc2U6ICdMSicsXG4gIGxldHRlcnM6IFwiXFx1MDFDN1wiXG59LCB7XG4gIGJhc2U6ICdMaicsXG4gIGxldHRlcnM6IFwiXFx1MDFDOFwiXG59LCB7XG4gIGJhc2U6ICdNJyxcbiAgbGV0dGVyczogXCJNXFx1MjRDMlxcdUZGMkRcXHUxRTNFXFx1MUU0MFxcdTFFNDJcXHUyQzZFXFx1MDE5Q1wiXG59LCB7XG4gIGJhc2U6ICdOJyxcbiAgbGV0dGVyczogXCJOXFx1MjRDM1xcdUZGMkVcXHUwMUY4XFx1MDE0M1xceEQxXFx1MUU0NFxcdTAxNDdcXHUxRTQ2XFx1MDE0NVxcdTFFNEFcXHUxRTQ4XFx1MDIyMFxcdTAxOURcXHVBNzkwXFx1QTdBNFwiXG59LCB7XG4gIGJhc2U6ICdOSicsXG4gIGxldHRlcnM6IFwiXFx1MDFDQVwiXG59LCB7XG4gIGJhc2U6ICdOaicsXG4gIGxldHRlcnM6IFwiXFx1MDFDQlwiXG59LCB7XG4gIGJhc2U6ICdPJyxcbiAgbGV0dGVyczogXCJPXFx1MjRDNFxcdUZGMkZcXHhEMlxceEQzXFx4RDRcXHUxRUQyXFx1MUVEMFxcdTFFRDZcXHUxRUQ0XFx4RDVcXHUxRTRDXFx1MDIyQ1xcdTFFNEVcXHUwMTRDXFx1MUU1MFxcdTFFNTJcXHUwMTRFXFx1MDIyRVxcdTAyMzBcXHhENlxcdTAyMkFcXHUxRUNFXFx1MDE1MFxcdTAxRDFcXHUwMjBDXFx1MDIwRVxcdTAxQTBcXHUxRURDXFx1MUVEQVxcdTFFRTBcXHUxRURFXFx1MUVFMlxcdTFFQ0NcXHUxRUQ4XFx1MDFFQVxcdTAxRUNcXHhEOFxcdTAxRkVcXHUwMTg2XFx1MDE5RlxcdUE3NEFcXHVBNzRDXCJcbn0sIHtcbiAgYmFzZTogJ09JJyxcbiAgbGV0dGVyczogXCJcXHUwMUEyXCJcbn0sIHtcbiAgYmFzZTogJ09PJyxcbiAgbGV0dGVyczogXCJcXHVBNzRFXCJcbn0sIHtcbiAgYmFzZTogJ09VJyxcbiAgbGV0dGVyczogXCJcXHUwMjIyXCJcbn0sIHtcbiAgYmFzZTogJ1AnLFxuICBsZXR0ZXJzOiBcIlBcXHUyNEM1XFx1RkYzMFxcdTFFNTRcXHUxRTU2XFx1MDFBNFxcdTJDNjNcXHVBNzUwXFx1QTc1MlxcdUE3NTRcIlxufSwge1xuICBiYXNlOiAnUScsXG4gIGxldHRlcnM6IFwiUVxcdTI0QzZcXHVGRjMxXFx1QTc1NlxcdUE3NThcXHUwMjRBXCJcbn0sIHtcbiAgYmFzZTogJ1InLFxuICBsZXR0ZXJzOiBcIlJcXHUyNEM3XFx1RkYzMlxcdTAxNTRcXHUxRTU4XFx1MDE1OFxcdTAyMTBcXHUwMjEyXFx1MUU1QVxcdTFFNUNcXHUwMTU2XFx1MUU1RVxcdTAyNENcXHUyQzY0XFx1QTc1QVxcdUE3QTZcXHVBNzgyXCJcbn0sIHtcbiAgYmFzZTogJ1MnLFxuICBsZXR0ZXJzOiBcIlNcXHUyNEM4XFx1RkYzM1xcdTFFOUVcXHUwMTVBXFx1MUU2NFxcdTAxNUNcXHUxRTYwXFx1MDE2MFxcdTFFNjZcXHUxRTYyXFx1MUU2OFxcdTAyMThcXHUwMTVFXFx1MkM3RVxcdUE3QThcXHVBNzg0XCJcbn0sIHtcbiAgYmFzZTogJ1QnLFxuICBsZXR0ZXJzOiBcIlRcXHUyNEM5XFx1RkYzNFxcdTFFNkFcXHUwMTY0XFx1MUU2Q1xcdTAyMUFcXHUwMTYyXFx1MUU3MFxcdTFFNkVcXHUwMTY2XFx1MDFBQ1xcdTAxQUVcXHUwMjNFXFx1QTc4NlwiXG59LCB7XG4gIGJhc2U6ICdUWicsXG4gIGxldHRlcnM6IFwiXFx1QTcyOFwiXG59LCB7XG4gIGJhc2U6ICdVJyxcbiAgbGV0dGVyczogXCJVXFx1MjRDQVxcdUZGMzVcXHhEOVxceERBXFx4REJcXHUwMTY4XFx1MUU3OFxcdTAxNkFcXHUxRTdBXFx1MDE2Q1xceERDXFx1MDFEQlxcdTAxRDdcXHUwMUQ1XFx1MDFEOVxcdTFFRTZcXHUwMTZFXFx1MDE3MFxcdTAxRDNcXHUwMjE0XFx1MDIxNlxcdTAxQUZcXHUxRUVBXFx1MUVFOFxcdTFFRUVcXHUxRUVDXFx1MUVGMFxcdTFFRTRcXHUxRTcyXFx1MDE3MlxcdTFFNzZcXHUxRTc0XFx1MDI0NFwiXG59LCB7XG4gIGJhc2U6ICdWJyxcbiAgbGV0dGVyczogXCJWXFx1MjRDQlxcdUZGMzZcXHUxRTdDXFx1MUU3RVxcdTAxQjJcXHVBNzVFXFx1MDI0NVwiXG59LCB7XG4gIGJhc2U6ICdWWScsXG4gIGxldHRlcnM6IFwiXFx1QTc2MFwiXG59LCB7XG4gIGJhc2U6ICdXJyxcbiAgbGV0dGVyczogXCJXXFx1MjRDQ1xcdUZGMzdcXHUxRTgwXFx1MUU4MlxcdTAxNzRcXHUxRTg2XFx1MUU4NFxcdTFFODhcXHUyQzcyXCJcbn0sIHtcbiAgYmFzZTogJ1gnLFxuICBsZXR0ZXJzOiBcIlhcXHUyNENEXFx1RkYzOFxcdTFFOEFcXHUxRThDXCJcbn0sIHtcbiAgYmFzZTogJ1knLFxuICBsZXR0ZXJzOiBcIllcXHUyNENFXFx1RkYzOVxcdTFFRjJcXHhERFxcdTAxNzZcXHUxRUY4XFx1MDIzMlxcdTFFOEVcXHUwMTc4XFx1MUVGNlxcdTFFRjRcXHUwMUIzXFx1MDI0RVxcdTFFRkVcIlxufSwge1xuICBiYXNlOiAnWicsXG4gIGxldHRlcnM6IFwiWlxcdTI0Q0ZcXHVGRjNBXFx1MDE3OVxcdTFFOTBcXHUwMTdCXFx1MDE3RFxcdTFFOTJcXHUxRTk0XFx1MDFCNVxcdTAyMjRcXHUyQzdGXFx1MkM2QlxcdUE3NjJcIlxufSwge1xuICBiYXNlOiAnYScsXG4gIGxldHRlcnM6IFwiYVxcdTI0RDBcXHVGRjQxXFx1MUU5QVxceEUwXFx4RTFcXHhFMlxcdTFFQTdcXHUxRUE1XFx1MUVBQlxcdTFFQTlcXHhFM1xcdTAxMDFcXHUwMTAzXFx1MUVCMVxcdTFFQUZcXHUxRUI1XFx1MUVCM1xcdTAyMjdcXHUwMUUxXFx4RTRcXHUwMURGXFx1MUVBM1xceEU1XFx1MDFGQlxcdTAxQ0VcXHUwMjAxXFx1MDIwM1xcdTFFQTFcXHUxRUFEXFx1MUVCN1xcdTFFMDFcXHUwMTA1XFx1MkM2NVxcdTAyNTBcIlxufSwge1xuICBiYXNlOiAnYWEnLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzNcIlxufSwge1xuICBiYXNlOiAnYWUnLFxuICBsZXR0ZXJzOiBcIlxceEU2XFx1MDFGRFxcdTAxRTNcIlxufSwge1xuICBiYXNlOiAnYW8nLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzVcIlxufSwge1xuICBiYXNlOiAnYXUnLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzdcIlxufSwge1xuICBiYXNlOiAnYXYnLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzlcXHVBNzNCXCJcbn0sIHtcbiAgYmFzZTogJ2F5JyxcbiAgbGV0dGVyczogXCJcXHVBNzNEXCJcbn0sIHtcbiAgYmFzZTogJ2InLFxuICBsZXR0ZXJzOiBcImJcXHUyNEQxXFx1RkY0MlxcdTFFMDNcXHUxRTA1XFx1MUUwN1xcdTAxODBcXHUwMTgzXFx1MDI1M1wiXG59LCB7XG4gIGJhc2U6ICdjJyxcbiAgbGV0dGVyczogXCJjXFx1MjREMlxcdUZGNDNcXHUwMTA3XFx1MDEwOVxcdTAxMEJcXHUwMTBEXFx4RTdcXHUxRTA5XFx1MDE4OFxcdTAyM0NcXHVBNzNGXFx1MjE4NFwiXG59LCB7XG4gIGJhc2U6ICdkJyxcbiAgbGV0dGVyczogXCJkXFx1MjREM1xcdUZGNDRcXHUxRTBCXFx1MDEwRlxcdTFFMERcXHUxRTExXFx1MUUxM1xcdTFFMEZcXHUwMTExXFx1MDE4Q1xcdTAyNTZcXHUwMjU3XFx1QTc3QVwiXG59LCB7XG4gIGJhc2U6ICdkeicsXG4gIGxldHRlcnM6IFwiXFx1MDFGM1xcdTAxQzZcIlxufSwge1xuICBiYXNlOiAnZScsXG4gIGxldHRlcnM6IFwiZVxcdTI0RDRcXHVGRjQ1XFx4RThcXHhFOVxceEVBXFx1MUVDMVxcdTFFQkZcXHUxRUM1XFx1MUVDM1xcdTFFQkRcXHUwMTEzXFx1MUUxNVxcdTFFMTdcXHUwMTE1XFx1MDExN1xceEVCXFx1MUVCQlxcdTAxMUJcXHUwMjA1XFx1MDIwN1xcdTFFQjlcXHUxRUM3XFx1MDIyOVxcdTFFMURcXHUwMTE5XFx1MUUxOVxcdTFFMUJcXHUwMjQ3XFx1MDI1QlxcdTAxRERcIlxufSwge1xuICBiYXNlOiAnZicsXG4gIGxldHRlcnM6IFwiZlxcdTI0RDVcXHVGRjQ2XFx1MUUxRlxcdTAxOTJcXHVBNzdDXCJcbn0sIHtcbiAgYmFzZTogJ2cnLFxuICBsZXR0ZXJzOiBcImdcXHUyNEQ2XFx1RkY0N1xcdTAxRjVcXHUwMTFEXFx1MUUyMVxcdTAxMUZcXHUwMTIxXFx1MDFFN1xcdTAxMjNcXHUwMUU1XFx1MDI2MFxcdUE3QTFcXHUxRDc5XFx1QTc3RlwiXG59LCB7XG4gIGJhc2U6ICdoJyxcbiAgbGV0dGVyczogXCJoXFx1MjREN1xcdUZGNDhcXHUwMTI1XFx1MUUyM1xcdTFFMjdcXHUwMjFGXFx1MUUyNVxcdTFFMjlcXHUxRTJCXFx1MUU5NlxcdTAxMjdcXHUyQzY4XFx1MkM3NlxcdTAyNjVcIlxufSwge1xuICBiYXNlOiAnaHYnLFxuICBsZXR0ZXJzOiBcIlxcdTAxOTVcIlxufSwge1xuICBiYXNlOiAnaScsXG4gIGxldHRlcnM6IFwiaVxcdTI0RDhcXHVGRjQ5XFx4RUNcXHhFRFxceEVFXFx1MDEyOVxcdTAxMkJcXHUwMTJEXFx4RUZcXHUxRTJGXFx1MUVDOVxcdTAxRDBcXHUwMjA5XFx1MDIwQlxcdTFFQ0JcXHUwMTJGXFx1MUUyRFxcdTAyNjhcXHUwMTMxXCJcbn0sIHtcbiAgYmFzZTogJ2onLFxuICBsZXR0ZXJzOiBcImpcXHUyNEQ5XFx1RkY0QVxcdTAxMzVcXHUwMUYwXFx1MDI0OVwiXG59LCB7XG4gIGJhc2U6ICdrJyxcbiAgbGV0dGVyczogXCJrXFx1MjREQVxcdUZGNEJcXHUxRTMxXFx1MDFFOVxcdTFFMzNcXHUwMTM3XFx1MUUzNVxcdTAxOTlcXHUyQzZBXFx1QTc0MVxcdUE3NDNcXHVBNzQ1XFx1QTdBM1wiXG59LCB7XG4gIGJhc2U6ICdsJyxcbiAgbGV0dGVyczogXCJsXFx1MjREQlxcdUZGNENcXHUwMTQwXFx1MDEzQVxcdTAxM0VcXHUxRTM3XFx1MUUzOVxcdTAxM0NcXHUxRTNEXFx1MUUzQlxcdTAxN0ZcXHUwMTQyXFx1MDE5QVxcdTAyNkJcXHUyQzYxXFx1QTc0OVxcdUE3ODFcXHVBNzQ3XCJcbn0sIHtcbiAgYmFzZTogJ2xqJyxcbiAgbGV0dGVyczogXCJcXHUwMUM5XCJcbn0sIHtcbiAgYmFzZTogJ20nLFxuICBsZXR0ZXJzOiBcIm1cXHUyNERDXFx1RkY0RFxcdTFFM0ZcXHUxRTQxXFx1MUU0M1xcdTAyNzFcXHUwMjZGXCJcbn0sIHtcbiAgYmFzZTogJ24nLFxuICBsZXR0ZXJzOiBcIm5cXHUyNEREXFx1RkY0RVxcdTAxRjlcXHUwMTQ0XFx4RjFcXHUxRTQ1XFx1MDE0OFxcdTFFNDdcXHUwMTQ2XFx1MUU0QlxcdTFFNDlcXHUwMTlFXFx1MDI3MlxcdTAxNDlcXHVBNzkxXFx1QTdBNVwiXG59LCB7XG4gIGJhc2U6ICduaicsXG4gIGxldHRlcnM6IFwiXFx1MDFDQ1wiXG59LCB7XG4gIGJhc2U6ICdvJyxcbiAgbGV0dGVyczogXCJvXFx1MjRERVxcdUZGNEZcXHhGMlxceEYzXFx4RjRcXHUxRUQzXFx1MUVEMVxcdTFFRDdcXHUxRUQ1XFx4RjVcXHUxRTREXFx1MDIyRFxcdTFFNEZcXHUwMTREXFx1MUU1MVxcdTFFNTNcXHUwMTRGXFx1MDIyRlxcdTAyMzFcXHhGNlxcdTAyMkJcXHUxRUNGXFx1MDE1MVxcdTAxRDJcXHUwMjBEXFx1MDIwRlxcdTAxQTFcXHUxRUREXFx1MUVEQlxcdTFFRTFcXHUxRURGXFx1MUVFM1xcdTFFQ0RcXHUxRUQ5XFx1MDFFQlxcdTAxRURcXHhGOFxcdTAxRkZcXHUwMjU0XFx1QTc0QlxcdUE3NERcXHUwMjc1XCJcbn0sIHtcbiAgYmFzZTogJ29pJyxcbiAgbGV0dGVyczogXCJcXHUwMUEzXCJcbn0sIHtcbiAgYmFzZTogJ291JyxcbiAgbGV0dGVyczogXCJcXHUwMjIzXCJcbn0sIHtcbiAgYmFzZTogJ29vJyxcbiAgbGV0dGVyczogXCJcXHVBNzRGXCJcbn0sIHtcbiAgYmFzZTogJ3AnLFxuICBsZXR0ZXJzOiBcInBcXHUyNERGXFx1RkY1MFxcdTFFNTVcXHUxRTU3XFx1MDFBNVxcdTFEN0RcXHVBNzUxXFx1QTc1M1xcdUE3NTVcIlxufSwge1xuICBiYXNlOiAncScsXG4gIGxldHRlcnM6IFwicVxcdTI0RTBcXHVGRjUxXFx1MDI0QlxcdUE3NTdcXHVBNzU5XCJcbn0sIHtcbiAgYmFzZTogJ3InLFxuICBsZXR0ZXJzOiBcInJcXHUyNEUxXFx1RkY1MlxcdTAxNTVcXHUxRTU5XFx1MDE1OVxcdTAyMTFcXHUwMjEzXFx1MUU1QlxcdTFFNURcXHUwMTU3XFx1MUU1RlxcdTAyNERcXHUwMjdEXFx1QTc1QlxcdUE3QTdcXHVBNzgzXCJcbn0sIHtcbiAgYmFzZTogJ3MnLFxuICBsZXR0ZXJzOiBcInNcXHUyNEUyXFx1RkY1M1xceERGXFx1MDE1QlxcdTFFNjVcXHUwMTVEXFx1MUU2MVxcdTAxNjFcXHUxRTY3XFx1MUU2M1xcdTFFNjlcXHUwMjE5XFx1MDE1RlxcdTAyM0ZcXHVBN0E5XFx1QTc4NVxcdTFFOUJcIlxufSwge1xuICBiYXNlOiAndCcsXG4gIGxldHRlcnM6IFwidFxcdTI0RTNcXHVGRjU0XFx1MUU2QlxcdTFFOTdcXHUwMTY1XFx1MUU2RFxcdTAyMUJcXHUwMTYzXFx1MUU3MVxcdTFFNkZcXHUwMTY3XFx1MDFBRFxcdTAyODhcXHUyQzY2XFx1QTc4N1wiXG59LCB7XG4gIGJhc2U6ICd0eicsXG4gIGxldHRlcnM6IFwiXFx1QTcyOVwiXG59LCB7XG4gIGJhc2U6ICd1JyxcbiAgbGV0dGVyczogXCJ1XFx1MjRFNFxcdUZGNTVcXHhGOVxceEZBXFx4RkJcXHUwMTY5XFx1MUU3OVxcdTAxNkJcXHUxRTdCXFx1MDE2RFxceEZDXFx1MDFEQ1xcdTAxRDhcXHUwMUQ2XFx1MDFEQVxcdTFFRTdcXHUwMTZGXFx1MDE3MVxcdTAxRDRcXHUwMjE1XFx1MDIxN1xcdTAxQjBcXHUxRUVCXFx1MUVFOVxcdTFFRUZcXHUxRUVEXFx1MUVGMVxcdTFFRTVcXHUxRTczXFx1MDE3M1xcdTFFNzdcXHUxRTc1XFx1MDI4OVwiXG59LCB7XG4gIGJhc2U6ICd2JyxcbiAgbGV0dGVyczogXCJ2XFx1MjRFNVxcdUZGNTZcXHUxRTdEXFx1MUU3RlxcdTAyOEJcXHVBNzVGXFx1MDI4Q1wiXG59LCB7XG4gIGJhc2U6ICd2eScsXG4gIGxldHRlcnM6IFwiXFx1QTc2MVwiXG59LCB7XG4gIGJhc2U6ICd3JyxcbiAgbGV0dGVyczogXCJ3XFx1MjRFNlxcdUZGNTdcXHUxRTgxXFx1MUU4M1xcdTAxNzVcXHUxRTg3XFx1MUU4NVxcdTFFOThcXHUxRTg5XFx1MkM3M1wiXG59LCB7XG4gIGJhc2U6ICd4JyxcbiAgbGV0dGVyczogXCJ4XFx1MjRFN1xcdUZGNThcXHUxRThCXFx1MUU4RFwiXG59LCB7XG4gIGJhc2U6ICd5JyxcbiAgbGV0dGVyczogXCJ5XFx1MjRFOFxcdUZGNTlcXHUxRUYzXFx4RkRcXHUwMTc3XFx1MUVGOVxcdTAyMzNcXHUxRThGXFx4RkZcXHUxRUY3XFx1MUU5OVxcdTFFRjVcXHUwMUI0XFx1MDI0RlxcdTFFRkZcIlxufSwge1xuICBiYXNlOiAneicsXG4gIGxldHRlcnM6IFwielxcdTI0RTlcXHVGRjVBXFx1MDE3QVxcdTFFOTFcXHUwMTdDXFx1MDE3RVxcdTFFOTNcXHUxRTk1XFx1MDFCNlxcdTAyMjVcXHUwMjQwXFx1MkM2Q1xcdUE3NjNcIlxufV07XG52YXIgYW55RGlhY3JpdGljID0gbmV3IFJlZ0V4cCgnWycgKyBkaWFjcml0aWNzLm1hcChmdW5jdGlvbiAoZCkge1xuICByZXR1cm4gZC5sZXR0ZXJzO1xufSkuam9pbignJykgKyAnXScsICdnJyk7XG52YXIgZGlhY3JpdGljVG9CYXNlID0ge307XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgZGlhY3JpdGljcy5sZW5ndGg7IGkrKykge1xuICB2YXIgZGlhY3JpdGljID0gZGlhY3JpdGljc1tpXTtcblxuICBmb3IgKHZhciBqID0gMDsgaiA8IGRpYWNyaXRpYy5sZXR0ZXJzLmxlbmd0aDsgaisrKSB7XG4gICAgZGlhY3JpdGljVG9CYXNlW2RpYWNyaXRpYy5sZXR0ZXJzW2pdXSA9IGRpYWNyaXRpYy5iYXNlO1xuICB9XG59XG5cbnZhciBzdHJpcERpYWNyaXRpY3MgPSBmdW5jdGlvbiBzdHJpcERpYWNyaXRpY3Moc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShhbnlEaWFjcml0aWMsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBkaWFjcml0aWNUb0Jhc2VbbWF0Y2hdO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgdHJpbVN0cmluZyA9IGZ1bmN0aW9uIHRyaW1TdHJpbmcoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xufTtcblxudmFyIGRlZmF1bHRTdHJpbmdpZnkgPSBmdW5jdGlvbiBkZWZhdWx0U3RyaW5naWZ5KG9wdGlvbikge1xuICByZXR1cm4gXCJcIi5jb25jYXQob3B0aW9uLmxhYmVsLCBcIiBcIikuY29uY2F0KG9wdGlvbi52YWx1ZSk7XG59O1xuXG52YXIgY3JlYXRlRmlsdGVyID0gZnVuY3Rpb24gY3JlYXRlRmlsdGVyKGNvbmZpZykge1xuICByZXR1cm4gZnVuY3Rpb24gKG9wdGlvbiwgcmF3SW5wdXQpIHtcbiAgICB2YXIgX2lnbm9yZUNhc2UkaWdub3JlQWNjID0gX29iamVjdFNwcmVhZCh7XG4gICAgICBpZ25vcmVDYXNlOiB0cnVlLFxuICAgICAgaWdub3JlQWNjZW50czogdHJ1ZSxcbiAgICAgIHN0cmluZ2lmeTogZGVmYXVsdFN0cmluZ2lmeSxcbiAgICAgIHRyaW06IHRydWUsXG4gICAgICBtYXRjaEZyb206ICdhbnknXG4gICAgfSwgY29uZmlnKSxcbiAgICAgICAgaWdub3JlQ2FzZSA9IF9pZ25vcmVDYXNlJGlnbm9yZUFjYy5pZ25vcmVDYXNlLFxuICAgICAgICBpZ25vcmVBY2NlbnRzID0gX2lnbm9yZUNhc2UkaWdub3JlQWNjLmlnbm9yZUFjY2VudHMsXG4gICAgICAgIHN0cmluZ2lmeSA9IF9pZ25vcmVDYXNlJGlnbm9yZUFjYy5zdHJpbmdpZnksXG4gICAgICAgIHRyaW0gPSBfaWdub3JlQ2FzZSRpZ25vcmVBY2MudHJpbSxcbiAgICAgICAgbWF0Y2hGcm9tID0gX2lnbm9yZUNhc2UkaWdub3JlQWNjLm1hdGNoRnJvbTtcblxuICAgIHZhciBpbnB1dCA9IHRyaW0gPyB0cmltU3RyaW5nKHJhd0lucHV0KSA6IHJhd0lucHV0O1xuICAgIHZhciBjYW5kaWRhdGUgPSB0cmltID8gdHJpbVN0cmluZyhzdHJpbmdpZnkob3B0aW9uKSkgOiBzdHJpbmdpZnkob3B0aW9uKTtcblxuICAgIGlmIChpZ25vcmVDYXNlKSB7XG4gICAgICBpbnB1dCA9IGlucHV0LnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYW5kaWRhdGUgPSBjYW5kaWRhdGUudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBpZiAoaWdub3JlQWNjZW50cykge1xuICAgICAgaW5wdXQgPSBzdHJpcERpYWNyaXRpY3MoaW5wdXQpO1xuICAgICAgY2FuZGlkYXRlID0gc3RyaXBEaWFjcml0aWNzKGNhbmRpZGF0ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoRnJvbSA9PT0gJ3N0YXJ0JyA/IGNhbmRpZGF0ZS5zdWJzdHIoMCwgaW5wdXQubGVuZ3RoKSA9PT0gaW5wdXQgOiBjYW5kaWRhdGUuaW5kZXhPZihpbnB1dCkgPiAtMTtcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIF9FTU9USU9OX1NUUklOR0lGSUVEX0NTU19FUlJPUl9fKCkgeyByZXR1cm4gXCJZb3UgaGF2ZSB0cmllZCB0byBzdHJpbmdpZnkgb2JqZWN0IHJldHVybmVkIGZyb20gYGNzc2AgZnVuY3Rpb24uIEl0IGlzbid0IHN1cHBvc2VkIHRvIGJlIHVzZWQgZGlyZWN0bHkgKGUuZy4gYXMgdmFsdWUgb2YgdGhlIGBjbGFzc05hbWVgIHByb3ApLCBidXQgcmF0aGVyIGhhbmRlZCB0byBlbW90aW9uIHNvIGl0IGNhbiBoYW5kbGUgaXQgKGUuZy4gYXMgdmFsdWUgb2YgYGNzc2AgcHJvcCkuXCI7IH1cblxudmFyIF9yZWYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIG5hbWU6IFwiN3BnMGNqLWExMXlUZXh0XCIsXG4gIHN0eWxlczogXCJsYWJlbDphMTF5VGV4dDt6LWluZGV4Ojk5OTk7Ym9yZGVyOjA7Y2xpcDpyZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7aGVpZ2h0OjFweDt3aWR0aDoxcHg7cG9zaXRpb246YWJzb2x1dGU7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6MDt3aGl0ZS1zcGFjZTpub3dyYXBcIlxufSA6IHtcbiAgbmFtZTogXCIxZjQzYXZ6LWExMXlUZXh0LUExMXlUZXh0XCIsXG4gIHN0eWxlczogXCJsYWJlbDphMTF5VGV4dDt6LWluZGV4Ojk5OTk7Ym9yZGVyOjA7Y2xpcDpyZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7aGVpZ2h0OjFweDt3aWR0aDoxcHg7cG9zaXRpb246YWJzb2x1dGU7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6MDt3aGl0ZS1zcGFjZTpub3dyYXA7bGFiZWw6QTExeVRleHQ7XCIsXG4gIG1hcDogXCIvKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa0V4TVhsVVpYaDBMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVZGSklpd2labWxzWlNJNklrRXhNWGxVWlhoMExtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHk4Z1FHWnNiM2RjYmk4cUtpQkFhbk40SUdwemVDQXFMMXh1YVcxd2IzSjBJSHNnZEhsd1pTQkZiR1Z0Wlc1MFEyOXVabWxuSUgwZ1puSnZiU0FuY21WaFkzUW5PMXh1YVcxd2IzSjBJSHNnYW5ONElIMGdabkp2YlNBblFHVnRiM1JwYjI0dmNtVmhZM1FuTzF4dVhHNHZMeUJCYzNOcGMzUnBkbVVnZEdWNGRDQjBieUJrWlhOamNtbGlaU0IyYVhOMVlXd2daV3hsYldWdWRITXVJRWhwWkdSbGJpQm1iM0lnYzJsbmFIUmxaQ0IxYzJWeWN5NWNibU52Ym5OMElFRXhNWGxVWlhoMElEMGdLSEJ5YjNCek9pQkZiR1Z0Wlc1MFEyOXVabWxuUENkemNHRnVKejRwSUQwK0lDaGNiaUFnUEhOd1lXNWNiaUFnSUNCamMzTTllM3RjYmlBZ0lDQWdJR3hoWW1Wc09pQW5ZVEV4ZVZSbGVIUW5MRnh1SUNBZ0lDQWdla2x1WkdWNE9pQTVPVGs1TEZ4dUlDQWdJQ0FnWW05eVpHVnlPaUF3TEZ4dUlDQWdJQ0FnWTJ4cGNEb2dKM0psWTNRb01YQjRMQ0F4Y0hnc0lERndlQ3dnTVhCNEtTY3NYRzRnSUNBZ0lDQm9aV2xuYUhRNklERXNYRzRnSUNBZ0lDQjNhV1IwYURvZ01TeGNiaUFnSUNBZ0lIQnZjMmwwYVc5dU9pQW5ZV0p6YjJ4MWRHVW5MRnh1SUNBZ0lDQWdiM1psY21ac2IzYzZJQ2RvYVdSa1pXNG5MRnh1SUNBZ0lDQWdjR0ZrWkdsdVp6b2dNQ3hjYmlBZ0lDQWdJSGRvYVhSbFUzQmhZMlU2SUNkdWIzZHlZWEFuTEZ4dUlDQWdJSDE5WEc0Z0lDQWdleTR1TG5CeWIzQnpmVnh1SUNBdlBseHVLVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnUVRFeGVWUmxlSFE3WEc0aVhYMD0gKi9cIixcbiAgdG9TdHJpbmc6IF9FTU9USU9OX1NUUklOR0lGSUVEX0NTU19FUlJPUl9fXG59O1xuXG52YXIgQTExeVRleHQgPSBmdW5jdGlvbiBBMTF5VGV4dChwcm9wcykge1xuICByZXR1cm4ganN4KFwic3BhblwiLCBfZXh0ZW5kcyh7XG4gICAgY3NzOiBfcmVmXG4gIH0sIHByb3BzKSk7XG59O1xuXG5mdW5jdGlvbiBEdW1teUlucHV0KF9yZWYpIHtcbiAgdmFyIGluUHJvcCA9IF9yZWYuaW4sXG4gICAgICBvdXQgPSBfcmVmLm91dCxcbiAgICAgIG9uRXhpdGVkID0gX3JlZi5vbkV4aXRlZCxcbiAgICAgIGFwcGVhciA9IF9yZWYuYXBwZWFyLFxuICAgICAgZW50ZXIgPSBfcmVmLmVudGVyLFxuICAgICAgZXhpdCA9IF9yZWYuZXhpdCxcbiAgICAgIGlubmVyUmVmID0gX3JlZi5pbm5lclJlZixcbiAgICAgIGVtb3Rpb24gPSBfcmVmLmVtb3Rpb24sXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJpblwiLCBcIm91dFwiLCBcIm9uRXhpdGVkXCIsIFwiYXBwZWFyXCIsIFwiZW50ZXJcIiwgXCJleGl0XCIsIFwiaW5uZXJSZWZcIiwgXCJlbW90aW9uXCJdKTtcblxuICByZXR1cm4ganN4KFwiaW5wdXRcIiwgX2V4dGVuZHMoe1xuICAgIHJlZjogaW5uZXJSZWZcbiAgfSwgcHJvcHMsIHtcbiAgICBjc3M6IC8qI19fUFVSRV9fKi9jc3Moe1xuICAgICAgbGFiZWw6ICdkdW1teUlucHV0JyxcbiAgICAgIC8vIGdldCByaWQgb2YgYW55IGRlZmF1bHQgc3R5bGVzXG4gICAgICBiYWNrZ3JvdW5kOiAwLFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICAgIG91dGxpbmU6IDAsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgLy8gaW1wb3J0YW50ISB3aXRob3V0IGB3aWR0aGAgYnJvd3NlcnMgd29uJ3QgYWxsb3cgZm9jdXNcbiAgICAgIHdpZHRoOiAxLFxuICAgICAgLy8gcmVtb3ZlIGN1cnNvciBvbiBkZXNrdG9wXG4gICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gbW9iaWxlIHdoaWxzdCBtYWludGFpbmluZyBcInNjcm9sbCBpbnRvIHZpZXdcIiBiZWhhdmlvdXJcbiAgICAgIGxlZnQ6IC0xMDAsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwKSdcbiAgICB9LCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBcIlwiIDogXCI7bGFiZWw6RHVtbXlJbnB1dDtcIiwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gXCJcIiA6IFwiLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtSMWJXMTVTVzV3ZFhRdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJiVUpOSWl3aVptbHNaU0k2SWtSMWJXMTVTVzV3ZFhRdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2THlCQVpteHZkMXh1THlvcUlFQnFjM2dnYW5ONElDb3ZYRzVwYlhCdmNuUWdleUJxYzNnZ2ZTQm1jbTl0SUNkQVpXMXZkR2x2Ymk5eVpXRmpkQ2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1SUVSMWJXMTVTVzV3ZFhRb2UxeHVJQ0JwYmpvZ2FXNVFjbTl3TEZ4dUlDQnZkWFFzWEc0Z0lHOXVSWGhwZEdWa0xGeHVJQ0JoY0hCbFlYSXNYRzRnSUdWdWRHVnlMRnh1SUNCbGVHbDBMRnh1SUNCcGJtNWxjbEpsWml4Y2JpQWdaVzF2ZEdsdmJpeGNiaUFnTGk0dWNISnZjSE5jYm4wNklHRnVlU2tnZTF4dUlDQnlaWFIxY200Z0tGeHVJQ0FnSUR4cGJuQjFkRnh1SUNBZ0lDQWdjbVZtUFh0cGJtNWxjbEpsWm4xY2JpQWdJQ0FnSUhzdUxpNXdjbTl3YzMxY2JpQWdJQ0FnSUdOemN6MTdlMXh1SUNBZ0lDQWdJQ0JzWVdKbGJEb2dKMlIxYlcxNVNXNXdkWFFuTEZ4dUlDQWdJQ0FnSUNBdkx5Qm5aWFFnY21sa0lHOW1JR0Z1ZVNCa1pXWmhkV3gwSUhOMGVXeGxjMXh1SUNBZ0lDQWdJQ0JpWVdOclozSnZkVzVrT2lBd0xGeHVJQ0FnSUNBZ0lDQmliM0prWlhJNklEQXNYRzRnSUNBZ0lDQWdJR1p2Ym5SVGFYcGxPaUFuYVc1b1pYSnBkQ2NzWEc0Z0lDQWdJQ0FnSUc5MWRHeHBibVU2SURBc1hHNGdJQ0FnSUNBZ0lIQmhaR1JwYm1jNklEQXNYRzRnSUNBZ0lDQWdJQzh2SUdsdGNHOXlkR0Z1ZENFZ2QybDBhRzkxZENCZ2QybGtkR2hnSUdKeWIzZHpaWEp6SUhkdmJpZDBJR0ZzYkc5M0lHWnZZM1Z6WEc0Z0lDQWdJQ0FnSUhkcFpIUm9PaUF4TEZ4dVhHNGdJQ0FnSUNBZ0lDOHZJSEpsYlc5MlpTQmpkWEp6YjNJZ2IyNGdaR1Z6YTNSdmNGeHVJQ0FnSUNBZ0lDQmpiMnh2Y2pvZ0ozUnlZVzV6Y0dGeVpXNTBKeXhjYmx4dUlDQWdJQ0FnSUNBdkx5QnlaVzF2ZG1VZ1kzVnljMjl5SUc5dUlHMXZZbWxzWlNCM2FHbHNjM1FnYldGcGJuUmhhVzVwYm1jZ1hDSnpZM0p2Ykd3Z2FXNTBieUIyYVdWM1hDSWdZbVZvWVhacGIzVnlYRzRnSUNBZ0lDQWdJR3hsWm5RNklDMHhNREFzWEc0Z0lDQWdJQ0FnSUc5d1lXTnBkSGs2SURBc1hHNGdJQ0FnSUNBZ0lIQnZjMmwwYVc5dU9pQW5jbVZzWVhScGRtVW5MRnh1SUNBZ0lDQWdJQ0IwY21GdWMyWnZjbTA2SUNkelkyRnNaU2d3S1Njc1hHNGdJQ0FnSUNCOWZWeHVJQ0FnSUM4K1hHNGdJQ2s3WEc1OVhHNGlYWDA9ICovXCIpXG4gIH0pKTtcbn1cblxudmFyIGNhbmNlbFNjcm9sbCA9IGZ1bmN0aW9uIGNhbmNlbFNjcm9sbChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn07XG5cbmZ1bmN0aW9uIHVzZVNjcm9sbENhcHR1cmUoX3JlZikge1xuICB2YXIgaXNFbmFibGVkID0gX3JlZi5pc0VuYWJsZWQsXG4gICAgICBvbkJvdHRvbUFycml2ZSA9IF9yZWYub25Cb3R0b21BcnJpdmUsXG4gICAgICBvbkJvdHRvbUxlYXZlID0gX3JlZi5vbkJvdHRvbUxlYXZlLFxuICAgICAgb25Ub3BBcnJpdmUgPSBfcmVmLm9uVG9wQXJyaXZlLFxuICAgICAgb25Ub3BMZWF2ZSA9IF9yZWYub25Ub3BMZWF2ZTtcbiAgdmFyIGlzQm90dG9tID0gdXNlUmVmKGZhbHNlKTtcbiAgdmFyIGlzVG9wID0gdXNlUmVmKGZhbHNlKTtcbiAgdmFyIHRvdWNoU3RhcnQgPSB1c2VSZWYoMCk7XG4gIHZhciBzY3JvbGxUYXJnZXQgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBoYW5kbGVFdmVudERlbHRhID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50LCBkZWx0YSkge1xuICAgIC8vIFJlZmVyZW5jZSBzaG91bGQgbmV2ZXIgYmUgYG51bGxgIGF0IHRoaXMgcG9pbnQsIGJ1dCBmbG93IGNvbXBsYWlucyBvdGhlcndpc2VcbiAgICBpZiAoc2Nyb2xsVGFyZ2V0LmN1cnJlbnQgPT09IG51bGwpIHJldHVybjtcbiAgICB2YXIgX3Njcm9sbFRhcmdldCRjdXJyZW50ID0gc2Nyb2xsVGFyZ2V0LmN1cnJlbnQsXG4gICAgICAgIHNjcm9sbFRvcCA9IF9zY3JvbGxUYXJnZXQkY3VycmVudC5zY3JvbGxUb3AsXG4gICAgICAgIHNjcm9sbEhlaWdodCA9IF9zY3JvbGxUYXJnZXQkY3VycmVudC5zY3JvbGxIZWlnaHQsXG4gICAgICAgIGNsaWVudEhlaWdodCA9IF9zY3JvbGxUYXJnZXQkY3VycmVudC5jbGllbnRIZWlnaHQ7XG4gICAgdmFyIHRhcmdldCA9IHNjcm9sbFRhcmdldC5jdXJyZW50O1xuICAgIHZhciBpc0RlbHRhUG9zaXRpdmUgPSBkZWx0YSA+IDA7XG4gICAgdmFyIGF2YWlsYWJsZVNjcm9sbCA9IHNjcm9sbEhlaWdodCAtIGNsaWVudEhlaWdodCAtIHNjcm9sbFRvcDtcbiAgICB2YXIgc2hvdWxkQ2FuY2VsU2Nyb2xsID0gZmFsc2U7IC8vIHJlc2V0IGJvdHRvbS90b3AgZmxhZ3NcblxuICAgIGlmIChhdmFpbGFibGVTY3JvbGwgPiBkZWx0YSAmJiBpc0JvdHRvbS5jdXJyZW50KSB7XG4gICAgICBpZiAob25Cb3R0b21MZWF2ZSkgb25Cb3R0b21MZWF2ZShldmVudCk7XG4gICAgICBpc0JvdHRvbS5jdXJyZW50ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGlzRGVsdGFQb3NpdGl2ZSAmJiBpc1RvcC5jdXJyZW50KSB7XG4gICAgICBpZiAob25Ub3BMZWF2ZSkgb25Ub3BMZWF2ZShldmVudCk7XG4gICAgICBpc1RvcC5jdXJyZW50ID0gZmFsc2U7XG4gICAgfSAvLyBib3R0b20gbGltaXRcblxuXG4gICAgaWYgKGlzRGVsdGFQb3NpdGl2ZSAmJiBkZWx0YSA+IGF2YWlsYWJsZVNjcm9sbCkge1xuICAgICAgaWYgKG9uQm90dG9tQXJyaXZlICYmICFpc0JvdHRvbS5jdXJyZW50KSB7XG4gICAgICAgIG9uQm90dG9tQXJyaXZlKGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgdGFyZ2V0LnNjcm9sbFRvcCA9IHNjcm9sbEhlaWdodDtcbiAgICAgIHNob3VsZENhbmNlbFNjcm9sbCA9IHRydWU7XG4gICAgICBpc0JvdHRvbS5jdXJyZW50ID0gdHJ1ZTsgLy8gdG9wIGxpbWl0XG4gICAgfSBlbHNlIGlmICghaXNEZWx0YVBvc2l0aXZlICYmIC1kZWx0YSA+IHNjcm9sbFRvcCkge1xuICAgICAgaWYgKG9uVG9wQXJyaXZlICYmICFpc1RvcC5jdXJyZW50KSB7XG4gICAgICAgIG9uVG9wQXJyaXZlKGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgdGFyZ2V0LnNjcm9sbFRvcCA9IDA7XG4gICAgICBzaG91bGRDYW5jZWxTY3JvbGwgPSB0cnVlO1xuICAgICAgaXNUb3AuY3VycmVudCA9IHRydWU7XG4gICAgfSAvLyBjYW5jZWwgc2Nyb2xsXG5cblxuICAgIGlmIChzaG91bGRDYW5jZWxTY3JvbGwpIHtcbiAgICAgIGNhbmNlbFNjcm9sbChldmVudCk7XG4gICAgfVxuICB9LCBbXSk7XG4gIHZhciBvbldoZWVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaGFuZGxlRXZlbnREZWx0YShldmVudCwgZXZlbnQuZGVsdGFZKTtcbiAgfSwgW2hhbmRsZUV2ZW50RGVsdGFdKTtcbiAgdmFyIG9uVG91Y2hTdGFydCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vIHNldCB0b3VjaCBzdGFydCBzbyB3ZSBjYW4gY2FsY3VsYXRlIHRvdWNobW92ZSBkZWx0YVxuICAgIHRvdWNoU3RhcnQuY3VycmVudCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XG4gIH0sIFtdKTtcbiAgdmFyIG9uVG91Y2hNb3ZlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIGRlbHRhWSA9IHRvdWNoU3RhcnQuY3VycmVudCAtIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XG4gICAgaGFuZGxlRXZlbnREZWx0YShldmVudCwgZGVsdGFZKTtcbiAgfSwgW2hhbmRsZUV2ZW50RGVsdGFdKTtcbiAgdmFyIHN0YXJ0TGlzdGVuaW5nID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGVsKSB7XG4gICAgLy8gYmFpbCBlYXJseSBpZiBubyBlbGVtZW50IGlzIGF2YWlsYWJsZSB0byBhdHRhY2ggdG9cbiAgICBpZiAoIWVsKSByZXR1cm47IC8vIGFsbCB0aGUgaWYgc3RhdGVtZW50cyBhcmUgdG8gYXBwZWFzZSBGbG93IPCfmKJcblxuICAgIGlmICh0eXBlb2YgZWwuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBvbldoZWVsLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBlbC5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBlbC5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UpO1xuICAgIH1cbiAgfSwgW29uVG91Y2hNb3ZlLCBvblRvdWNoU3RhcnQsIG9uV2hlZWxdKTtcbiAgdmFyIHN0b3BMaXN0ZW5pbmcgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoZWwpIHtcbiAgICAvLyBiYWlsIGVhcmx5IGlmIG5vIGVsZW1lbnQgaXMgYXZhaWxhYmxlIHRvIGRldGFjaCBmcm9tXG4gICAgaWYgKCFlbCkgcmV0dXJuOyAvLyBhbGwgdGhlIGlmIHN0YXRlbWVudHMgYXJlIHRvIGFwcGVhc2UgRmxvdyDwn5iiXG5cbiAgICBpZiAodHlwZW9mIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgb25XaGVlbCwgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlKTtcbiAgICB9XG4gIH0sIFtvblRvdWNoTW92ZSwgb25Ub3VjaFN0YXJ0LCBvbldoZWVsXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFpc0VuYWJsZWQpIHJldHVybjtcbiAgICB2YXIgZWxlbWVudCA9IHNjcm9sbFRhcmdldC5jdXJyZW50O1xuICAgIHN0YXJ0TGlzdGVuaW5nKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBzdG9wTGlzdGVuaW5nKGVsZW1lbnQpO1xuICAgIH07XG4gIH0sIFtpc0VuYWJsZWQsIHN0YXJ0TGlzdGVuaW5nLCBzdG9wTGlzdGVuaW5nXSk7XG4gIHJldHVybiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHNjcm9sbFRhcmdldC5jdXJyZW50ID0gZWxlbWVudDtcbiAgfTtcbn1cblxudmFyIFNUWUxFX0tFWVMgPSBbJ2JveFNpemluZycsICdoZWlnaHQnLCAnb3ZlcmZsb3cnLCAncGFkZGluZ1JpZ2h0JywgJ3Bvc2l0aW9uJ107XG52YXIgTE9DS19TVFlMRVMgPSB7XG4gIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAvLyBhY2NvdW50IGZvciBwb3NzaWJsZSBkZWNsYXJhdGlvbiBgd2lkdGg6IDEwMCU7YCBvbiBib2R5XG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIGhlaWdodDogJzEwMCUnXG59O1xuXG5mdW5jdGlvbiBwcmV2ZW50VG91Y2hNb3ZlKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBhbGxvd1RvdWNoTW92ZShlKSB7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG59XG5cbmZ1bmN0aW9uIHByZXZlbnRJbmVydGlhU2Nyb2xsKCkge1xuICB2YXIgdG9wID0gdGhpcy5zY3JvbGxUb3A7XG4gIHZhciB0b3RhbFNjcm9sbCA9IHRoaXMuc2Nyb2xsSGVpZ2h0O1xuICB2YXIgY3VycmVudFNjcm9sbCA9IHRvcCArIHRoaXMub2Zmc2V0SGVpZ2h0O1xuXG4gIGlmICh0b3AgPT09IDApIHtcbiAgICB0aGlzLnNjcm9sbFRvcCA9IDE7XG4gIH0gZWxzZSBpZiAoY3VycmVudFNjcm9sbCA9PT0gdG90YWxTY3JvbGwpIHtcbiAgICB0aGlzLnNjcm9sbFRvcCA9IHRvcCAtIDE7XG4gIH1cbn0gLy8gYG9udG91Y2hzdGFydGAgY2hlY2sgd29ya3Mgb24gbW9zdCBicm93c2Vyc1xuLy8gYG1heFRvdWNoUG9pbnRzYCB3b3JrcyBvbiBJRTEwLzExIGFuZCBTdXJmYWNlXG5cblxuZnVuY3Rpb24gaXNUb3VjaERldmljZSgpIHtcbiAgcmV0dXJuICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHM7XG59XG5cbnZhciBjYW5Vc2VET00gPSAhISggd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbnZhciBhY3RpdmVTY3JvbGxMb2NrcyA9IDA7XG52YXIgbGlzdGVuZXJPcHRpb25zID0ge1xuICBjYXB0dXJlOiBmYWxzZSxcbiAgcGFzc2l2ZTogZmFsc2Vcbn07XG5mdW5jdGlvbiB1c2VTY3JvbGxMb2NrKF9yZWYpIHtcbiAgdmFyIGlzRW5hYmxlZCA9IF9yZWYuaXNFbmFibGVkLFxuICAgICAgX3JlZiRhY2NvdW50Rm9yU2Nyb2xsID0gX3JlZi5hY2NvdW50Rm9yU2Nyb2xsYmFycyxcbiAgICAgIGFjY291bnRGb3JTY3JvbGxiYXJzID0gX3JlZiRhY2NvdW50Rm9yU2Nyb2xsID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiRhY2NvdW50Rm9yU2Nyb2xsO1xuICB2YXIgb3JpZ2luYWxTdHlsZXMgPSB1c2VSZWYoe30pO1xuICB2YXIgc2Nyb2xsVGFyZ2V0ID0gdXNlUmVmKG51bGwpO1xuICB2YXIgYWRkU2Nyb2xsTG9jayA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh0b3VjaFNjcm9sbFRhcmdldCkge1xuICAgIGlmICghY2FuVXNlRE9NKSByZXR1cm47XG4gICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LmJvZHk7XG4gICAgdmFyIHRhcmdldFN0eWxlID0gdGFyZ2V0ICYmIHRhcmdldC5zdHlsZTtcblxuICAgIGlmIChhY2NvdW50Rm9yU2Nyb2xsYmFycykge1xuICAgICAgLy8gc3RvcmUgYW55IHN0eWxlcyBhbHJlYWR5IGFwcGxpZWQgdG8gdGhlIGJvZHlcbiAgICAgIFNUWUxFX0tFWVMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWwgPSB0YXJnZXRTdHlsZSAmJiB0YXJnZXRTdHlsZVtrZXldO1xuICAgICAgICBvcmlnaW5hbFN0eWxlcy5jdXJyZW50W2tleV0gPSB2YWw7XG4gICAgICB9KTtcbiAgICB9IC8vIGFwcGx5IHRoZSBsb2NrIHN0eWxlcyBhbmQgcGFkZGluZyBpZiB0aGlzIGlzIHRoZSBmaXJzdCBzY3JvbGwgbG9ja1xuXG5cbiAgICBpZiAoYWNjb3VudEZvclNjcm9sbGJhcnMgJiYgYWN0aXZlU2Nyb2xsTG9ja3MgPCAxKSB7XG4gICAgICB2YXIgY3VycmVudFBhZGRpbmcgPSBwYXJzZUludChvcmlnaW5hbFN0eWxlcy5jdXJyZW50LnBhZGRpbmdSaWdodCwgMTApIHx8IDA7XG4gICAgICB2YXIgY2xpZW50V2lkdGggPSBkb2N1bWVudC5ib2R5ID8gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA6IDA7XG4gICAgICB2YXIgYWRqdXN0ZWRQYWRkaW5nID0gd2luZG93LmlubmVyV2lkdGggLSBjbGllbnRXaWR0aCArIGN1cnJlbnRQYWRkaW5nIHx8IDA7XG4gICAgICBPYmplY3Qua2V5cyhMT0NLX1NUWUxFUykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWwgPSBMT0NLX1NUWUxFU1trZXldO1xuXG4gICAgICAgIGlmICh0YXJnZXRTdHlsZSkge1xuICAgICAgICAgIHRhcmdldFN0eWxlW2tleV0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGFyZ2V0U3R5bGUpIHtcbiAgICAgICAgdGFyZ2V0U3R5bGUucGFkZGluZ1JpZ2h0ID0gXCJcIi5jb25jYXQoYWRqdXN0ZWRQYWRkaW5nLCBcInB4XCIpO1xuICAgICAgfVxuICAgIH0gLy8gYWNjb3VudCBmb3IgdG91Y2ggZGV2aWNlc1xuXG5cbiAgICBpZiAodGFyZ2V0ICYmIGlzVG91Y2hEZXZpY2UoKSkge1xuICAgICAgLy8gTW9iaWxlIFNhZmFyaSBpZ25vcmVzIHsgb3ZlcmZsb3c6IGhpZGRlbiB9IGRlY2xhcmF0aW9uIG9uIHRoZSBib2R5LlxuICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHByZXZlbnRUb3VjaE1vdmUsIGxpc3RlbmVyT3B0aW9ucyk7IC8vIEFsbG93IHNjcm9sbCBvbiBwcm92aWRlZCB0YXJnZXRcblxuICAgICAgaWYgKHRvdWNoU2Nyb2xsVGFyZ2V0KSB7XG4gICAgICAgIHRvdWNoU2Nyb2xsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBwcmV2ZW50SW5lcnRpYVNjcm9sbCwgbGlzdGVuZXJPcHRpb25zKTtcbiAgICAgICAgdG91Y2hTY3JvbGxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgYWxsb3dUb3VjaE1vdmUsIGxpc3RlbmVyT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSAvLyBpbmNyZW1lbnQgYWN0aXZlIHNjcm9sbCBsb2Nrc1xuXG5cbiAgICBhY3RpdmVTY3JvbGxMb2NrcyArPSAxO1xuICB9LCBbXSk7XG4gIHZhciByZW1vdmVTY3JvbGxMb2NrID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHRvdWNoU2Nyb2xsVGFyZ2V0KSB7XG4gICAgaWYgKCFjYW5Vc2VET00pIHJldHVybjtcbiAgICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQuYm9keTtcbiAgICB2YXIgdGFyZ2V0U3R5bGUgPSB0YXJnZXQgJiYgdGFyZ2V0LnN0eWxlOyAvLyBzYWZlbHkgZGVjcmVtZW50IGFjdGl2ZSBzY3JvbGwgbG9ja3NcblxuICAgIGFjdGl2ZVNjcm9sbExvY2tzID0gTWF0aC5tYXgoYWN0aXZlU2Nyb2xsTG9ja3MgLSAxLCAwKTsgLy8gcmVhcHBseSBvcmlnaW5hbCBib2R5IHN0eWxlcywgaWYgYW55XG5cbiAgICBpZiAoYWNjb3VudEZvclNjcm9sbGJhcnMgJiYgYWN0aXZlU2Nyb2xsTG9ja3MgPCAxKSB7XG4gICAgICBTVFlMRV9LRVlTLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdmFsID0gb3JpZ2luYWxTdHlsZXMuY3VycmVudFtrZXldO1xuXG4gICAgICAgIGlmICh0YXJnZXRTdHlsZSkge1xuICAgICAgICAgIHRhcmdldFN0eWxlW2tleV0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gLy8gcmVtb3ZlIHRvdWNoIGxpc3RlbmVyc1xuXG5cbiAgICBpZiAodGFyZ2V0ICYmIGlzVG91Y2hEZXZpY2UoKSkge1xuICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHByZXZlbnRUb3VjaE1vdmUsIGxpc3RlbmVyT3B0aW9ucyk7XG5cbiAgICAgIGlmICh0b3VjaFNjcm9sbFRhcmdldCkge1xuICAgICAgICB0b3VjaFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgcHJldmVudEluZXJ0aWFTY3JvbGwsIGxpc3RlbmVyT3B0aW9ucyk7XG4gICAgICAgIHRvdWNoU2Nyb2xsVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGFsbG93VG91Y2hNb3ZlLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW10pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghaXNFbmFibGVkKSByZXR1cm47XG4gICAgdmFyIGVsZW1lbnQgPSBzY3JvbGxUYXJnZXQuY3VycmVudDtcbiAgICBhZGRTY3JvbGxMb2NrKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZW1vdmVTY3JvbGxMb2NrKGVsZW1lbnQpO1xuICAgIH07XG4gIH0sIFtpc0VuYWJsZWQsIGFkZFNjcm9sbExvY2ssIHJlbW92ZVNjcm9sbExvY2tdKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgc2Nyb2xsVGFyZ2V0LmN1cnJlbnQgPSBlbGVtZW50O1xuICB9O1xufVxuXG5mdW5jdGlvbiBfRU1PVElPTl9TVFJJTkdJRklFRF9DU1NfRVJST1JfXyQxKCkgeyByZXR1cm4gXCJZb3UgaGF2ZSB0cmllZCB0byBzdHJpbmdpZnkgb2JqZWN0IHJldHVybmVkIGZyb20gYGNzc2AgZnVuY3Rpb24uIEl0IGlzbid0IHN1cHBvc2VkIHRvIGJlIHVzZWQgZGlyZWN0bHkgKGUuZy4gYXMgdmFsdWUgb2YgdGhlIGBjbGFzc05hbWVgIHByb3ApLCBidXQgcmF0aGVyIGhhbmRlZCB0byBlbW90aW9uIHNvIGl0IGNhbiBoYW5kbGUgaXQgKGUuZy4gYXMgdmFsdWUgb2YgYGNzc2AgcHJvcCkuXCI7IH1cblxudmFyIGJsdXJTZWxlY3RJbnB1dCA9IGZ1bmN0aW9uIGJsdXJTZWxlY3RJbnB1dCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG59O1xuXG52YXIgX3JlZjIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIG5hbWU6IFwiMWtmZGIwZVwiLFxuICBzdHlsZXM6IFwicG9zaXRpb246Zml4ZWQ7bGVmdDowO2JvdHRvbTowO3JpZ2h0OjA7dG9wOjBcIlxufSA6IHtcbiAgbmFtZTogXCJicDhjdWEtU2Nyb2xsTWFuYWdlclwiLFxuICBzdHlsZXM6IFwicG9zaXRpb246Zml4ZWQ7bGVmdDowO2JvdHRvbTowO3JpZ2h0OjA7dG9wOjA7bGFiZWw6U2Nyb2xsTWFuYWdlcjtcIixcbiAgbWFwOiBcIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklsTmpjbTlzYkUxaGJtRm5aWEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQmEwUlZJaXdpWm1sc1pTSTZJbE5qY205c2JFMWhibUZuWlhJdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2THlCQVpteHZkMXh1THlvcUlFQnFjM2dnYW5ONElDb3ZYRzVwYlhCdmNuUWdleUJxYzNnZ2ZTQm1jbTl0SUNkQVpXMXZkR2x2Ymk5eVpXRmpkQ2M3WEc1cGJYQnZjblFnVW1WaFkzUXNJSHNnZEhsd1pTQkZiR1Z0Wlc1MElIMGdabkp2YlNBbmNtVmhZM1FuTzF4dWFXMXdiM0owSUhWelpWTmpjbTlzYkVOaGNIUjFjbVVnWm5KdmJTQW5MaTkxYzJWVFkzSnZiR3hEWVhCMGRYSmxKenRjYm1sdGNHOXlkQ0IxYzJWVFkzSnZiR3hNYjJOcklHWnliMjBnSnk0dmRYTmxVMk55YjJ4c1RHOWpheWM3WEc1Y2JuUjVjR1VnVW1WbVEyRnNiR0poWTJzOFZENGdQU0FvVkNCOElHNTFiR3dwSUQwK0lIWnZhV1E3WEc1Y2JuUjVjR1VnVUhKdmNITWdQU0I3WEc0Z0lHTm9hV3hrY21WdU9pQW9VbVZtUTJGc2JHSmhZMnM4U0ZSTlRFVnNaVzFsYm5RK0tTQTlQaUJGYkdWdFpXNTBQQ28rTEZ4dUlDQnNiMk5yUlc1aFlteGxaRG9nWW05dmJHVmhiaXhjYmlBZ1kyRndkSFZ5WlVWdVlXSnNaV1E2SUdKdmIyeGxZVzRzWEc0Z0lHOXVRbTkwZEc5dFFYSnlhWFpsUHpvZ0tHVjJaVzUwT2lCVGVXNTBhR1YwYVdORmRtVnVkRHhJVkUxTVJXeGxiV1Z1ZEQ0cElEMCtJSFp2YVdRc1hHNGdJRzl1UW05MGRHOXRUR1ZoZG1VL09pQW9aWFpsYm5RNklGTjViblJvWlhScFkwVjJaVzUwUEVoVVRVeEZiR1Z0Wlc1MFBpa2dQVDRnZG05cFpDeGNiaUFnYjI1VWIzQkJjbkpwZG1VL09pQW9aWFpsYm5RNklGTjViblJvWlhScFkwVjJaVzUwUEVoVVRVeEZiR1Z0Wlc1MFBpa2dQVDRnZG05cFpDeGNiaUFnYjI1VWIzQk1aV0YyWlQ4NklDaGxkbVZ1ZERvZ1UzbHVkR2hsZEdsalJYWmxiblE4U0ZSTlRFVnNaVzFsYm5RK0tTQTlQaUIyYjJsa0xGeHVmVHRjYmx4dVkyOXVjM1FnWW14MWNsTmxiR1ZqZEVsdWNIVjBJRDBnS0NrZ1BUNWNiaUFnWkc5amRXMWxiblF1WVdOMGFYWmxSV3hsYldWdWRDQW1KaUJrYjJOMWJXVnVkQzVoWTNScGRtVkZiR1Z0Wlc1MExtSnNkWElvS1R0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0Z1UyTnliMnhzVFdGdVlXZGxjaWg3WEc0Z0lHTm9hV3hrY21WdUxGeHVJQ0JzYjJOclJXNWhZbXhsWkN4Y2JpQWdZMkZ3ZEhWeVpVVnVZV0pzWldRZ1BTQjBjblZsTEZ4dUlDQnZia0p2ZEhSdmJVRnljbWwyWlN4Y2JpQWdiMjVDYjNSMGIyMU1aV0YyWlN4Y2JpQWdiMjVVYjNCQmNuSnBkbVVzWEc0Z0lHOXVWRzl3VEdWaGRtVXNYRzU5T2lCUWNtOXdjeWtnZTF4dUlDQmpiMjV6ZENCelpYUlRZM0p2Ykd4RFlYQjBkWEpsVkdGeVoyVjBJRDBnZFhObFUyTnliMnhzUTJGd2RIVnlaU2g3WEc0Z0lDQWdhWE5GYm1GaWJHVmtPaUJqWVhCMGRYSmxSVzVoWW14bFpDeGNiaUFnSUNCdmJrSnZkSFJ2YlVGeWNtbDJaU3hjYmlBZ0lDQnZia0p2ZEhSdmJVeGxZWFpsTEZ4dUlDQWdJRzl1Vkc5d1FYSnlhWFpsTEZ4dUlDQWdJRzl1Vkc5d1RHVmhkbVVzWEc0Z0lIMHBPMXh1SUNCamIyNXpkQ0J6WlhSVFkzSnZiR3hNYjJOclZHRnlaMlYwSUQwZ2RYTmxVMk55YjJ4c1RHOWpheWg3SUdselJXNWhZbXhsWkRvZ2JHOWphMFZ1WVdKc1pXUWdmU2s3WEc1Y2JpQWdZMjl1YzNRZ2RHRnlaMlYwVW1WbUlEMGdaV3hsYldWdWRDQTlQaUI3WEc0Z0lDQWdjMlYwVTJOeWIyeHNRMkZ3ZEhWeVpWUmhjbWRsZENobGJHVnRaVzUwS1R0Y2JpQWdJQ0J6WlhSVFkzSnZiR3hNYjJOclZHRnlaMlYwS0dWc1pXMWxiblFwTzF4dUlDQjlPMXh1WEc0Z0lISmxkSFZ5YmlBb1hHNGdJQ0FnUEZKbFlXTjBMa1p5WVdkdFpXNTBQbHh1SUNBZ0lDQWdlMnh2WTJ0RmJtRmliR1ZrSUNZbUlDaGNiaUFnSUNBZ0lDQWdQR1JwZGx4dUlDQWdJQ0FnSUNBZ0lHOXVRMnhwWTJzOWUySnNkWEpUWld4bFkzUkpibkIxZEgxY2JpQWdJQ0FnSUNBZ0lDQmpjM005ZTNzZ2NHOXphWFJwYjI0NklDZG1hWGhsWkNjc0lHeGxablE2SURBc0lHSnZkSFJ2YlRvZ01Dd2djbWxuYUhRNklEQXNJSFJ2Y0RvZ01DQjlmVnh1SUNBZ0lDQWdJQ0F2UGx4dUlDQWdJQ0FnS1gxY2JpQWdJQ0FnSUh0amFHbHNaSEpsYmloMFlYSm5aWFJTWldZcGZWeHVJQ0FnSUR3dlVtVmhZM1F1Um5KaFoyMWxiblErWEc0Z0lDazdYRzU5WEc0aVhYMD0gKi9cIixcbiAgdG9TdHJpbmc6IF9FTU9USU9OX1NUUklOR0lGSUVEX0NTU19FUlJPUl9fJDFcbn07XG5cbmZ1bmN0aW9uIFNjcm9sbE1hbmFnZXIoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgbG9ja0VuYWJsZWQgPSBfcmVmLmxvY2tFbmFibGVkLFxuICAgICAgX3JlZiRjYXB0dXJlRW5hYmxlZCA9IF9yZWYuY2FwdHVyZUVuYWJsZWQsXG4gICAgICBjYXB0dXJlRW5hYmxlZCA9IF9yZWYkY2FwdHVyZUVuYWJsZWQgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmJGNhcHR1cmVFbmFibGVkLFxuICAgICAgb25Cb3R0b21BcnJpdmUgPSBfcmVmLm9uQm90dG9tQXJyaXZlLFxuICAgICAgb25Cb3R0b21MZWF2ZSA9IF9yZWYub25Cb3R0b21MZWF2ZSxcbiAgICAgIG9uVG9wQXJyaXZlID0gX3JlZi5vblRvcEFycml2ZSxcbiAgICAgIG9uVG9wTGVhdmUgPSBfcmVmLm9uVG9wTGVhdmU7XG4gIHZhciBzZXRTY3JvbGxDYXB0dXJlVGFyZ2V0ID0gdXNlU2Nyb2xsQ2FwdHVyZSh7XG4gICAgaXNFbmFibGVkOiBjYXB0dXJlRW5hYmxlZCxcbiAgICBvbkJvdHRvbUFycml2ZTogb25Cb3R0b21BcnJpdmUsXG4gICAgb25Cb3R0b21MZWF2ZTogb25Cb3R0b21MZWF2ZSxcbiAgICBvblRvcEFycml2ZTogb25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZTogb25Ub3BMZWF2ZVxuICB9KTtcbiAgdmFyIHNldFNjcm9sbExvY2tUYXJnZXQgPSB1c2VTY3JvbGxMb2NrKHtcbiAgICBpc0VuYWJsZWQ6IGxvY2tFbmFibGVkXG4gIH0pO1xuXG4gIHZhciB0YXJnZXRSZWYgPSBmdW5jdGlvbiB0YXJnZXRSZWYoZWxlbWVudCkge1xuICAgIHNldFNjcm9sbENhcHR1cmVUYXJnZXQoZWxlbWVudCk7XG4gICAgc2V0U2Nyb2xsTG9ja1RhcmdldChlbGVtZW50KTtcbiAgfTtcblxuICByZXR1cm4ganN4KFJlYWN0LkZyYWdtZW50LCBudWxsLCBsb2NrRW5hYmxlZCAmJiBqc3goXCJkaXZcIiwge1xuICAgIG9uQ2xpY2s6IGJsdXJTZWxlY3RJbnB1dCxcbiAgICBjc3M6IF9yZWYyXG4gIH0pLCBjaGlsZHJlbih0YXJnZXRSZWYpKTtcbn1cblxudmFyIGluc3RydWN0aW9uc0FyaWFNZXNzYWdlID0gZnVuY3Rpb24gaW5zdHJ1Y3Rpb25zQXJpYU1lc3NhZ2UoZXZlbnQpIHtcbiAgdmFyIGNvbnRleHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgaXNTZWFyY2hhYmxlID0gY29udGV4dC5pc1NlYXJjaGFibGUsXG4gICAgICBpc011bHRpID0gY29udGV4dC5pc011bHRpLFxuICAgICAgbGFiZWwgPSBjb250ZXh0LmxhYmVsLFxuICAgICAgaXNEaXNhYmxlZCA9IGNvbnRleHQuaXNEaXNhYmxlZCxcbiAgICAgIHRhYlNlbGVjdHNWYWx1ZSA9IGNvbnRleHQudGFiU2VsZWN0c1ZhbHVlO1xuXG4gIHN3aXRjaCAoZXZlbnQpIHtcbiAgICBjYXNlICdtZW51JzpcbiAgICAgIHJldHVybiBcIlVzZSBVcCBhbmQgRG93biB0byBjaG9vc2Ugb3B0aW9uc1wiLmNvbmNhdChpc0Rpc2FibGVkID8gJycgOiAnLCBwcmVzcyBFbnRlciB0byBzZWxlY3QgdGhlIGN1cnJlbnRseSBmb2N1c2VkIG9wdGlvbicsIFwiLCBwcmVzcyBFc2NhcGUgdG8gZXhpdCB0aGUgbWVudVwiKS5jb25jYXQodGFiU2VsZWN0c1ZhbHVlID8gJywgcHJlc3MgVGFiIHRvIHNlbGVjdCB0aGUgb3B0aW9uIGFuZCBleGl0IHRoZSBtZW51JyA6ICcnLCBcIi5cIik7XG5cbiAgICBjYXNlICdpbnB1dCc6XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQobGFiZWwgPyBsYWJlbCA6ICdTZWxlY3QnLCBcIiBpcyBmb2N1c2VkIFwiKS5jb25jYXQoaXNTZWFyY2hhYmxlID8gJyx0eXBlIHRvIHJlZmluZSBsaXN0JyA6ICcnLCBcIiwgcHJlc3MgRG93biB0byBvcGVuIHRoZSBtZW51LCBcIikuY29uY2F0KGlzTXVsdGkgPyAnIHByZXNzIGxlZnQgdG8gZm9jdXMgc2VsZWN0ZWQgdmFsdWVzJyA6ICcnKTtcblxuICAgIGNhc2UgJ3ZhbHVlJzpcbiAgICAgIHJldHVybiAnVXNlIGxlZnQgYW5kIHJpZ2h0IHRvIHRvZ2dsZSBiZXR3ZWVuIGZvY3VzZWQgdmFsdWVzLCBwcmVzcyBCYWNrc3BhY2UgdG8gcmVtb3ZlIHRoZSBjdXJyZW50bHkgZm9jdXNlZCB2YWx1ZSc7XG4gIH1cbn07XG52YXIgdmFsdWVFdmVudEFyaWFNZXNzYWdlID0gZnVuY3Rpb24gdmFsdWVFdmVudEFyaWFNZXNzYWdlKGV2ZW50LCBjb250ZXh0KSB7XG4gIHZhciB2YWx1ZSA9IGNvbnRleHQudmFsdWUsXG4gICAgICBpc0Rpc2FibGVkID0gY29udGV4dC5pc0Rpc2FibGVkO1xuICBpZiAoIXZhbHVlKSByZXR1cm47XG5cbiAgc3dpdGNoIChldmVudCkge1xuICAgIGNhc2UgJ2Rlc2VsZWN0LW9wdGlvbic6XG4gICAgY2FzZSAncG9wLXZhbHVlJzpcbiAgICBjYXNlICdyZW1vdmUtdmFsdWUnOlxuICAgICAgcmV0dXJuIFwib3B0aW9uIFwiLmNvbmNhdCh2YWx1ZSwgXCIsIGRlc2VsZWN0ZWQuXCIpO1xuXG4gICAgY2FzZSAnc2VsZWN0LW9wdGlvbic6XG4gICAgICByZXR1cm4gaXNEaXNhYmxlZCA/IFwib3B0aW9uIFwiLmNvbmNhdCh2YWx1ZSwgXCIgaXMgZGlzYWJsZWQuIFNlbGVjdCBhbm90aGVyIG9wdGlvbi5cIikgOiBcIm9wdGlvbiBcIi5jb25jYXQodmFsdWUsIFwiLCBzZWxlY3RlZC5cIik7XG4gIH1cbn07XG52YXIgdmFsdWVGb2N1c0FyaWFNZXNzYWdlID0gZnVuY3Rpb24gdmFsdWVGb2N1c0FyaWFNZXNzYWdlKF9yZWYpIHtcbiAgdmFyIGZvY3VzZWRWYWx1ZSA9IF9yZWYuZm9jdXNlZFZhbHVlLFxuICAgICAgZ2V0T3B0aW9uTGFiZWwgPSBfcmVmLmdldE9wdGlvbkxhYmVsLFxuICAgICAgc2VsZWN0VmFsdWUgPSBfcmVmLnNlbGVjdFZhbHVlO1xuICByZXR1cm4gXCJ2YWx1ZSBcIi5jb25jYXQoZ2V0T3B0aW9uTGFiZWwoZm9jdXNlZFZhbHVlKSwgXCIgZm9jdXNlZCwgXCIpLmNvbmNhdChzZWxlY3RWYWx1ZS5pbmRleE9mKGZvY3VzZWRWYWx1ZSkgKyAxLCBcIiBvZiBcIikuY29uY2F0KHNlbGVjdFZhbHVlLmxlbmd0aCwgXCIuXCIpO1xufTtcbnZhciBvcHRpb25Gb2N1c0FyaWFNZXNzYWdlID0gZnVuY3Rpb24gb3B0aW9uRm9jdXNBcmlhTWVzc2FnZShfcmVmMikge1xuICB2YXIgZm9jdXNlZE9wdGlvbiA9IF9yZWYyLmZvY3VzZWRPcHRpb24sXG4gICAgICBnZXRPcHRpb25MYWJlbCA9IF9yZWYyLmdldE9wdGlvbkxhYmVsLFxuICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnM7XG4gIHJldHVybiBcIm9wdGlvbiBcIi5jb25jYXQoZ2V0T3B0aW9uTGFiZWwoZm9jdXNlZE9wdGlvbiksIFwiIGZvY3VzZWRcIikuY29uY2F0KGZvY3VzZWRPcHRpb24uaXNEaXNhYmxlZCA/ICcgZGlzYWJsZWQnIDogJycsIFwiLCBcIikuY29uY2F0KG9wdGlvbnMuaW5kZXhPZihmb2N1c2VkT3B0aW9uKSArIDEsIFwiIG9mIFwiKS5jb25jYXQob3B0aW9ucy5sZW5ndGgsIFwiLlwiKTtcbn07XG52YXIgcmVzdWx0c0FyaWFNZXNzYWdlID0gZnVuY3Rpb24gcmVzdWx0c0FyaWFNZXNzYWdlKF9yZWYzKSB7XG4gIHZhciBpbnB1dFZhbHVlID0gX3JlZjMuaW5wdXRWYWx1ZSxcbiAgICAgIHNjcmVlblJlYWRlck1lc3NhZ2UgPSBfcmVmMy5zY3JlZW5SZWFkZXJNZXNzYWdlO1xuICByZXR1cm4gXCJcIi5jb25jYXQoc2NyZWVuUmVhZGVyTWVzc2FnZSkuY29uY2F0KGlucHV0VmFsdWUgPyAnIGZvciBzZWFyY2ggdGVybSAnICsgaW5wdXRWYWx1ZSA6ICcnLCBcIi5cIik7XG59O1xuXG52YXIgZm9ybWF0R3JvdXBMYWJlbCA9IGZ1bmN0aW9uIGZvcm1hdEdyb3VwTGFiZWwoZ3JvdXApIHtcbiAgcmV0dXJuIGdyb3VwLmxhYmVsO1xufTtcbnZhciBnZXRPcHRpb25MYWJlbCA9IGZ1bmN0aW9uIGdldE9wdGlvbkxhYmVsKG9wdGlvbikge1xuICByZXR1cm4gb3B0aW9uLmxhYmVsO1xufTtcbnZhciBnZXRPcHRpb25WYWx1ZSA9IGZ1bmN0aW9uIGdldE9wdGlvblZhbHVlKG9wdGlvbikge1xuICByZXR1cm4gb3B0aW9uLnZhbHVlO1xufTtcbnZhciBpc09wdGlvbkRpc2FibGVkID0gZnVuY3Rpb24gaXNPcHRpb25EaXNhYmxlZChvcHRpb24pIHtcbiAgcmV0dXJuICEhb3B0aW9uLmlzRGlzYWJsZWQ7XG59O1xuXG5mdW5jdGlvbiBvd25LZXlzJDEob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkMSh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzJDEoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyQxKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxudmFyIGRlZmF1bHRTdHlsZXMgPSB7XG4gIGNsZWFySW5kaWNhdG9yOiBjbGVhckluZGljYXRvckNTUyxcbiAgY29udGFpbmVyOiBjb250YWluZXJDU1MsXG4gIGNvbnRyb2w6IGNzcyQxLFxuICBkcm9wZG93bkluZGljYXRvcjogZHJvcGRvd25JbmRpY2F0b3JDU1MsXG4gIGdyb3VwOiBncm91cENTUyxcbiAgZ3JvdXBIZWFkaW5nOiBncm91cEhlYWRpbmdDU1MsXG4gIGluZGljYXRvcnNDb250YWluZXI6IGluZGljYXRvcnNDb250YWluZXJDU1MsXG4gIGluZGljYXRvclNlcGFyYXRvcjogaW5kaWNhdG9yU2VwYXJhdG9yQ1NTLFxuICBpbnB1dDogaW5wdXRDU1MsXG4gIGxvYWRpbmdJbmRpY2F0b3I6IGxvYWRpbmdJbmRpY2F0b3JDU1MsXG4gIGxvYWRpbmdNZXNzYWdlOiBsb2FkaW5nTWVzc2FnZUNTUyxcbiAgbWVudTogbWVudUNTUyxcbiAgbWVudUxpc3Q6IG1lbnVMaXN0Q1NTLFxuICBtZW51UG9ydGFsOiBtZW51UG9ydGFsQ1NTLFxuICBtdWx0aVZhbHVlOiBtdWx0aVZhbHVlQ1NTLFxuICBtdWx0aVZhbHVlTGFiZWw6IG11bHRpVmFsdWVMYWJlbENTUyxcbiAgbXVsdGlWYWx1ZVJlbW92ZTogbXVsdGlWYWx1ZVJlbW92ZUNTUyxcbiAgbm9PcHRpb25zTWVzc2FnZTogbm9PcHRpb25zTWVzc2FnZUNTUyxcbiAgb3B0aW9uOiBvcHRpb25DU1MsXG4gIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlckNTUyxcbiAgc2luZ2xlVmFsdWU6IGNzcyQyLFxuICB2YWx1ZUNvbnRhaW5lcjogdmFsdWVDb250YWluZXJDU1Ncbn07IC8vIE1lcmdlIFV0aWxpdHlcbi8vIEFsbG93cyBjb25zdW1lcnMgdG8gZXh0ZW5kIGEgYmFzZSBTZWxlY3Qgd2l0aCBhZGRpdGlvbmFsIHN0eWxlc1xuXG5mdW5jdGlvbiBtZXJnZVN0eWxlcyhzb3VyY2UpIHtcbiAgdmFyIHRhcmdldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgLy8gaW5pdGlhbGl6ZSB3aXRoIHNvdXJjZSBzdHlsZXNcbiAgdmFyIHN0eWxlcyA9IF9vYmplY3RTcHJlYWQkMSh7fSwgc291cmNlKTsgLy8gbWFzc2FnZSBpbiB0YXJnZXQgc3R5bGVzXG5cblxuICBPYmplY3Qua2V5cyh0YXJnZXQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChzb3VyY2Vba2V5XSkge1xuICAgICAgc3R5bGVzW2tleV0gPSBmdW5jdGlvbiAocnNDc3MsIHByb3BzKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XShzb3VyY2Vba2V5XShyc0NzcywgcHJvcHMpLCBwcm9wcyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNba2V5XSA9IHRhcmdldFtrZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzdHlsZXM7XG59XG5cbnZhciBjb2xvcnMgPSB7XG4gIHByaW1hcnk6ICcjMjY4NEZGJyxcbiAgcHJpbWFyeTc1OiAnIzRDOUFGRicsXG4gIHByaW1hcnk1MDogJyNCMkQ0RkYnLFxuICBwcmltYXJ5MjU6ICcjREVFQkZGJyxcbiAgZGFuZ2VyOiAnI0RFMzUwQicsXG4gIGRhbmdlckxpZ2h0OiAnI0ZGQkRBRCcsXG4gIG5ldXRyYWwwOiAnaHNsKDAsIDAlLCAxMDAlKScsXG4gIG5ldXRyYWw1OiAnaHNsKDAsIDAlLCA5NSUpJyxcbiAgbmV1dHJhbDEwOiAnaHNsKDAsIDAlLCA5MCUpJyxcbiAgbmV1dHJhbDIwOiAnaHNsKDAsIDAlLCA4MCUpJyxcbiAgbmV1dHJhbDMwOiAnaHNsKDAsIDAlLCA3MCUpJyxcbiAgbmV1dHJhbDQwOiAnaHNsKDAsIDAlLCA2MCUpJyxcbiAgbmV1dHJhbDUwOiAnaHNsKDAsIDAlLCA1MCUpJyxcbiAgbmV1dHJhbDYwOiAnaHNsKDAsIDAlLCA0MCUpJyxcbiAgbmV1dHJhbDcwOiAnaHNsKDAsIDAlLCAzMCUpJyxcbiAgbmV1dHJhbDgwOiAnaHNsKDAsIDAlLCAyMCUpJyxcbiAgbmV1dHJhbDkwOiAnaHNsKDAsIDAlLCAxMCUpJ1xufTtcbnZhciBib3JkZXJSYWRpdXMgPSA0OyAvLyBVc2VkIHRvIGNhbGN1bGF0ZSBjb25zaXN0ZW50IG1hcmdpbi9wYWRkaW5nIG9uIGVsZW1lbnRzXG5cbnZhciBiYXNlVW5pdCA9IDQ7IC8vIFRoZSBtaW5pbXVtIGhlaWdodCBvZiB0aGUgY29udHJvbFxuXG52YXIgY29udHJvbEhlaWdodCA9IDM4OyAvLyBUaGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gdGhlIGNvbnRyb2wgYW5kIG1lbnUgKi9cblxudmFyIG1lbnVHdXR0ZXIgPSBiYXNlVW5pdCAqIDI7XG52YXIgc3BhY2luZyA9IHtcbiAgYmFzZVVuaXQ6IGJhc2VVbml0LFxuICBjb250cm9sSGVpZ2h0OiBjb250cm9sSGVpZ2h0LFxuICBtZW51R3V0dGVyOiBtZW51R3V0dGVyXG59O1xudmFyIGRlZmF1bHRUaGVtZSA9IHtcbiAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gIGNvbG9yczogY29sb3JzLFxuICBzcGFjaW5nOiBzcGFjaW5nXG59O1xuXG5mdW5jdGlvbiBvd25LZXlzJDIob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkMih0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzJDIoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyQyKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBiYWNrc3BhY2VSZW1vdmVzVmFsdWU6IHRydWUsXG4gIGJsdXJJbnB1dE9uU2VsZWN0OiBpc1RvdWNoQ2FwYWJsZSgpLFxuICBjYXB0dXJlTWVudVNjcm9sbDogIWlzVG91Y2hDYXBhYmxlKCksXG4gIGNsb3NlTWVudU9uU2VsZWN0OiB0cnVlLFxuICBjbG9zZU1lbnVPblNjcm9sbDogZmFsc2UsXG4gIGNvbXBvbmVudHM6IHt9LFxuICBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWU6IHRydWUsXG4gIGVzY2FwZUNsZWFyc1ZhbHVlOiBmYWxzZSxcbiAgZmlsdGVyT3B0aW9uOiBjcmVhdGVGaWx0ZXIoKSxcbiAgZm9ybWF0R3JvdXBMYWJlbDogZm9ybWF0R3JvdXBMYWJlbCxcbiAgZ2V0T3B0aW9uTGFiZWw6IGdldE9wdGlvbkxhYmVsLFxuICBnZXRPcHRpb25WYWx1ZTogZ2V0T3B0aW9uVmFsdWUsXG4gIGlzRGlzYWJsZWQ6IGZhbHNlLFxuICBpc0xvYWRpbmc6IGZhbHNlLFxuICBpc011bHRpOiBmYWxzZSxcbiAgaXNSdGw6IGZhbHNlLFxuICBpc1NlYXJjaGFibGU6IHRydWUsXG4gIGlzT3B0aW9uRGlzYWJsZWQ6IGlzT3B0aW9uRGlzYWJsZWQsXG4gIGxvYWRpbmdNZXNzYWdlOiBmdW5jdGlvbiBsb2FkaW5nTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gJ0xvYWRpbmcuLi4nO1xuICB9LFxuICBtYXhNZW51SGVpZ2h0OiAzMDAsXG4gIG1pbk1lbnVIZWlnaHQ6IDE0MCxcbiAgbWVudUlzT3BlbjogZmFsc2UsXG4gIG1lbnVQbGFjZW1lbnQ6ICdib3R0b20nLFxuICBtZW51UG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIG1lbnVTaG91bGRCbG9ja1Njcm9sbDogZmFsc2UsXG4gIG1lbnVTaG91bGRTY3JvbGxJbnRvVmlldzogIWlzTW9iaWxlRGV2aWNlKCksXG4gIG5vT3B0aW9uc01lc3NhZ2U6IGZ1bmN0aW9uIG5vT3B0aW9uc01lc3NhZ2UoKSB7XG4gICAgcmV0dXJuICdObyBvcHRpb25zJztcbiAgfSxcbiAgb3Blbk1lbnVPbkZvY3VzOiBmYWxzZSxcbiAgb3Blbk1lbnVPbkNsaWNrOiB0cnVlLFxuICBvcHRpb25zOiBbXSxcbiAgcGFnZVNpemU6IDUsXG4gIHBsYWNlaG9sZGVyOiAnU2VsZWN0Li4uJyxcbiAgc2NyZWVuUmVhZGVyU3RhdHVzOiBmdW5jdGlvbiBzY3JlZW5SZWFkZXJTdGF0dXMoX3JlZikge1xuICAgIHZhciBjb3VudCA9IF9yZWYuY291bnQ7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KGNvdW50LCBcIiByZXN1bHRcIikuY29uY2F0KGNvdW50ICE9PSAxID8gJ3MnIDogJycsIFwiIGF2YWlsYWJsZVwiKTtcbiAgfSxcbiAgc3R5bGVzOiB7fSxcbiAgdGFiSW5kZXg6ICcwJyxcbiAgdGFiU2VsZWN0c1ZhbHVlOiB0cnVlXG59O1xuXG5mdW5jdGlvbiB0b0NhdGVnb3JpemVkT3B0aW9uKHByb3BzLCBvcHRpb24sIHNlbGVjdFZhbHVlLCBpbmRleCkge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9pc09wdGlvbkRpc2FibGVkKHByb3BzLCBvcHRpb24sIHNlbGVjdFZhbHVlKTtcblxuICB2YXIgaXNTZWxlY3RlZCA9IF9pc09wdGlvblNlbGVjdGVkKHByb3BzLCBvcHRpb24sIHNlbGVjdFZhbHVlKTtcblxuICB2YXIgbGFiZWwgPSBnZXRPcHRpb25MYWJlbCQxKHByb3BzLCBvcHRpb24pO1xuICB2YXIgdmFsdWUgPSBnZXRPcHRpb25WYWx1ZSQxKHByb3BzLCBvcHRpb24pO1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdvcHRpb24nLFxuICAgIGRhdGE6IG9wdGlvbixcbiAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgIGlzU2VsZWN0ZWQ6IGlzU2VsZWN0ZWQsXG4gICAgbGFiZWw6IGxhYmVsLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBpbmRleDogaW5kZXhcbiAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGRDYXRlZ29yaXplZE9wdGlvbnMocHJvcHMsIHNlbGVjdFZhbHVlKSB7XG4gIHJldHVybiBwcm9wcy5vcHRpb25zLm1hcChmdW5jdGlvbiAoZ3JvdXBPck9wdGlvbiwgZ3JvdXBPck9wdGlvbkluZGV4KSB7XG4gICAgaWYgKGdyb3VwT3JPcHRpb24ub3B0aW9ucykge1xuICAgICAgdmFyIGNhdGVnb3JpemVkT3B0aW9ucyA9IGdyb3VwT3JPcHRpb24ub3B0aW9ucy5tYXAoZnVuY3Rpb24gKG9wdGlvbiwgb3B0aW9uSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRvQ2F0ZWdvcml6ZWRPcHRpb24ocHJvcHMsIG9wdGlvbiwgc2VsZWN0VmFsdWUsIG9wdGlvbkluZGV4KTtcbiAgICAgIH0pLmZpbHRlcihmdW5jdGlvbiAoY2F0ZWdvcml6ZWRPcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIGlzRm9jdXNhYmxlKHByb3BzLCBjYXRlZ29yaXplZE9wdGlvbik7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjYXRlZ29yaXplZE9wdGlvbnMubGVuZ3RoID4gMCA/IHtcbiAgICAgICAgdHlwZTogJ2dyb3VwJyxcbiAgICAgICAgZGF0YTogZ3JvdXBPck9wdGlvbixcbiAgICAgICAgb3B0aW9uczogY2F0ZWdvcml6ZWRPcHRpb25zLFxuICAgICAgICBpbmRleDogZ3JvdXBPck9wdGlvbkluZGV4XG4gICAgICB9IDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHZhciBjYXRlZ29yaXplZE9wdGlvbiA9IHRvQ2F0ZWdvcml6ZWRPcHRpb24ocHJvcHMsIGdyb3VwT3JPcHRpb24sIHNlbGVjdFZhbHVlLCBncm91cE9yT3B0aW9uSW5kZXgpO1xuICAgIHJldHVybiBpc0ZvY3VzYWJsZShwcm9wcywgY2F0ZWdvcml6ZWRPcHRpb24pID8gY2F0ZWdvcml6ZWRPcHRpb24gOiB1bmRlZmluZWQ7XG4gIH0pIC8vIEZsb3cgbGltaXRhdGlvbiAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy8xNDE0KVxuICAuZmlsdGVyKGZ1bmN0aW9uIChjYXRlZ29yaXplZE9wdGlvbikge1xuICAgIHJldHVybiAhIWNhdGVnb3JpemVkT3B0aW9uO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYnVpbGRGb2N1c2FibGVPcHRpb25zRnJvbUNhdGVnb3JpemVkT3B0aW9ucyhjYXRlZ29yaXplZE9wdGlvbnMpIHtcbiAgcmV0dXJuIGNhdGVnb3JpemVkT3B0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKG9wdGlvbnNBY2N1bXVsYXRvciwgY2F0ZWdvcml6ZWRPcHRpb24pIHtcbiAgICBpZiAoY2F0ZWdvcml6ZWRPcHRpb24udHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgb3B0aW9uc0FjY3VtdWxhdG9yLnB1c2guYXBwbHkob3B0aW9uc0FjY3VtdWxhdG9yLCBfdG9Db25zdW1hYmxlQXJyYXkoY2F0ZWdvcml6ZWRPcHRpb24uZGF0YS5vcHRpb25zKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnNBY2N1bXVsYXRvci5wdXNoKGNhdGVnb3JpemVkT3B0aW9uLmRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zQWNjdW11bGF0b3I7XG4gIH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRGb2N1c2FibGVPcHRpb25zKHByb3BzLCBzZWxlY3RWYWx1ZSkge1xuICByZXR1cm4gYnVpbGRGb2N1c2FibGVPcHRpb25zRnJvbUNhdGVnb3JpemVkT3B0aW9ucyhidWlsZENhdGVnb3JpemVkT3B0aW9ucyhwcm9wcywgc2VsZWN0VmFsdWUpKTtcbn1cblxuZnVuY3Rpb24gaXNGb2N1c2FibGUocHJvcHMsIGNhdGVnb3JpemVkT3B0aW9uKSB7XG4gIHZhciBfcHJvcHMkaW5wdXRWYWx1ZSA9IHByb3BzLmlucHV0VmFsdWUsXG4gICAgICBpbnB1dFZhbHVlID0gX3Byb3BzJGlucHV0VmFsdWUgPT09IHZvaWQgMCA/ICcnIDogX3Byb3BzJGlucHV0VmFsdWU7XG4gIHZhciBkYXRhID0gY2F0ZWdvcml6ZWRPcHRpb24uZGF0YSxcbiAgICAgIGlzU2VsZWN0ZWQgPSBjYXRlZ29yaXplZE9wdGlvbi5pc1NlbGVjdGVkLFxuICAgICAgbGFiZWwgPSBjYXRlZ29yaXplZE9wdGlvbi5sYWJlbCxcbiAgICAgIHZhbHVlID0gY2F0ZWdvcml6ZWRPcHRpb24udmFsdWU7XG4gIHJldHVybiAoIXNob3VsZEhpZGVTZWxlY3RlZE9wdGlvbnMocHJvcHMpIHx8ICFpc1NlbGVjdGVkKSAmJiBfZmlsdGVyT3B0aW9uKHByb3BzLCB7XG4gICAgbGFiZWw6IGxhYmVsLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBkYXRhOiBkYXRhXG4gIH0sIGlucHV0VmFsdWUpO1xufVxuXG5mdW5jdGlvbiBnZXROZXh0Rm9jdXNlZFZhbHVlKHN0YXRlLCBuZXh0U2VsZWN0VmFsdWUpIHtcbiAgdmFyIGZvY3VzZWRWYWx1ZSA9IHN0YXRlLmZvY3VzZWRWYWx1ZSxcbiAgICAgIGxhc3RTZWxlY3RWYWx1ZSA9IHN0YXRlLnNlbGVjdFZhbHVlO1xuICB2YXIgbGFzdEZvY3VzZWRJbmRleCA9IGxhc3RTZWxlY3RWYWx1ZS5pbmRleE9mKGZvY3VzZWRWYWx1ZSk7XG5cbiAgaWYgKGxhc3RGb2N1c2VkSW5kZXggPiAtMSkge1xuICAgIHZhciBuZXh0Rm9jdXNlZEluZGV4ID0gbmV4dFNlbGVjdFZhbHVlLmluZGV4T2YoZm9jdXNlZFZhbHVlKTtcblxuICAgIGlmIChuZXh0Rm9jdXNlZEluZGV4ID4gLTEpIHtcbiAgICAgIC8vIHRoZSBmb2N1c2VkIHZhbHVlIGlzIHN0aWxsIGluIHRoZSBzZWxlY3RWYWx1ZSwgcmV0dXJuIGl0XG4gICAgICByZXR1cm4gZm9jdXNlZFZhbHVlO1xuICAgIH0gZWxzZSBpZiAobGFzdEZvY3VzZWRJbmRleCA8IG5leHRTZWxlY3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgIC8vIHRoZSBmb2N1c2VkVmFsdWUgaXMgbm90IHByZXNlbnQgaW4gdGhlIG5leHQgc2VsZWN0VmFsdWUgYXJyYXkgYnlcbiAgICAgIC8vIHJlZmVyZW5jZSwgc28gcmV0dXJuIHRoZSBuZXcgdmFsdWUgYXQgdGhlIHNhbWUgaW5kZXhcbiAgICAgIHJldHVybiBuZXh0U2VsZWN0VmFsdWVbbGFzdEZvY3VzZWRJbmRleF07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldE5leHRGb2N1c2VkT3B0aW9uKHN0YXRlLCBvcHRpb25zKSB7XG4gIHZhciBsYXN0Rm9jdXNlZE9wdGlvbiA9IHN0YXRlLmZvY3VzZWRPcHRpb247XG4gIHJldHVybiBsYXN0Rm9jdXNlZE9wdGlvbiAmJiBvcHRpb25zLmluZGV4T2YobGFzdEZvY3VzZWRPcHRpb24pID4gLTEgPyBsYXN0Rm9jdXNlZE9wdGlvbiA6IG9wdGlvbnNbMF07XG59XG5cbnZhciBnZXRPcHRpb25MYWJlbCQxID0gZnVuY3Rpb24gZ2V0T3B0aW9uTGFiZWwocHJvcHMsIGRhdGEpIHtcbiAgcmV0dXJuIHByb3BzLmdldE9wdGlvbkxhYmVsKGRhdGEpO1xufTtcblxudmFyIGdldE9wdGlvblZhbHVlJDEgPSBmdW5jdGlvbiBnZXRPcHRpb25WYWx1ZShwcm9wcywgZGF0YSkge1xuICByZXR1cm4gcHJvcHMuZ2V0T3B0aW9uVmFsdWUoZGF0YSk7XG59O1xuXG5mdW5jdGlvbiBfaXNPcHRpb25EaXNhYmxlZChwcm9wcywgb3B0aW9uLCBzZWxlY3RWYWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHByb3BzLmlzT3B0aW9uRGlzYWJsZWQgPT09ICdmdW5jdGlvbicgPyBwcm9wcy5pc09wdGlvbkRpc2FibGVkKG9wdGlvbiwgc2VsZWN0VmFsdWUpIDogZmFsc2U7XG59XG5cbmZ1bmN0aW9uIF9pc09wdGlvblNlbGVjdGVkKHByb3BzLCBvcHRpb24sIHNlbGVjdFZhbHVlKSB7XG4gIGlmIChzZWxlY3RWYWx1ZS5pbmRleE9mKG9wdGlvbikgPiAtMSkgcmV0dXJuIHRydWU7XG5cbiAgaWYgKHR5cGVvZiBwcm9wcy5pc09wdGlvblNlbGVjdGVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHByb3BzLmlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uLCBzZWxlY3RWYWx1ZSk7XG4gIH1cblxuICB2YXIgY2FuZGlkYXRlID0gZ2V0T3B0aW9uVmFsdWUkMShwcm9wcywgb3B0aW9uKTtcbiAgcmV0dXJuIHNlbGVjdFZhbHVlLnNvbWUoZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gZ2V0T3B0aW9uVmFsdWUkMShwcm9wcywgaSkgPT09IGNhbmRpZGF0ZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIF9maWx0ZXJPcHRpb24ocHJvcHMsIG9wdGlvbiwgaW5wdXRWYWx1ZSkge1xuICByZXR1cm4gcHJvcHMuZmlsdGVyT3B0aW9uID8gcHJvcHMuZmlsdGVyT3B0aW9uKG9wdGlvbiwgaW5wdXRWYWx1ZSkgOiB0cnVlO1xufVxuXG52YXIgc2hvdWxkSGlkZVNlbGVjdGVkT3B0aW9ucyA9IGZ1bmN0aW9uIHNob3VsZEhpZGVTZWxlY3RlZE9wdGlvbnMocHJvcHMpIHtcbiAgdmFyIGhpZGVTZWxlY3RlZE9wdGlvbnMgPSBwcm9wcy5oaWRlU2VsZWN0ZWRPcHRpb25zLFxuICAgICAgaXNNdWx0aSA9IHByb3BzLmlzTXVsdGk7XG4gIGlmIChoaWRlU2VsZWN0ZWRPcHRpb25zID09PSB1bmRlZmluZWQpIHJldHVybiBpc011bHRpO1xuICByZXR1cm4gaGlkZVNlbGVjdGVkT3B0aW9ucztcbn07XG5cbnZhciBpbnN0YW5jZUlkID0gMTtcblxudmFyIFNlbGVjdCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU2VsZWN0LCBfQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFNlbGVjdCk7XG5cbiAgLy8gTWlzYy4gSW5zdGFuY2UgUHJvcGVydGllc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gVE9ET1xuICAvLyBSZWZzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBMaWZlY3ljbGVcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGZ1bmN0aW9uIFNlbGVjdChfcHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VsZWN0KTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgX3Byb3BzKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFyaWFMaXZlU2VsZWN0aW9uOiAnJyxcbiAgICAgIGFyaWFMaXZlQ29udGV4dDogJycsXG4gICAgICBmb2N1c2VkT3B0aW9uOiBudWxsLFxuICAgICAgZm9jdXNlZFZhbHVlOiBudWxsLFxuICAgICAgaW5wdXRJc0hpZGRlbjogZmFsc2UsXG4gICAgICBpc0ZvY3VzZWQ6IGZhbHNlLFxuICAgICAgc2VsZWN0VmFsdWU6IFtdLFxuICAgICAgY2xlYXJGb2N1c1ZhbHVlT25VcGRhdGU6IGZhbHNlLFxuICAgICAgaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlOiB1bmRlZmluZWQsXG4gICAgICBwcmV2UHJvcHM6IHVuZGVmaW5lZFxuICAgIH07XG4gICAgX3RoaXMuYmxvY2tPcHRpb25Ib3ZlciA9IGZhbHNlO1xuICAgIF90aGlzLmlzQ29tcG9zaW5nID0gZmFsc2U7XG4gICAgX3RoaXMuY29tbW9uUHJvcHMgPSB2b2lkIDA7XG4gICAgX3RoaXMuaW5pdGlhbFRvdWNoWCA9IDA7XG4gICAgX3RoaXMuaW5pdGlhbFRvdWNoWSA9IDA7XG4gICAgX3RoaXMuaW5zdGFuY2VQcmVmaXggPSAnJztcbiAgICBfdGhpcy5vcGVuQWZ0ZXJGb2N1cyA9IGZhbHNlO1xuICAgIF90aGlzLnNjcm9sbFRvRm9jdXNlZE9wdGlvbk9uVXBkYXRlID0gZmFsc2U7XG4gICAgX3RoaXMudXNlcklzRHJhZ2dpbmcgPSB2b2lkIDA7XG4gICAgX3RoaXMuY29udHJvbFJlZiA9IG51bGw7XG5cbiAgICBfdGhpcy5nZXRDb250cm9sUmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgX3RoaXMuY29udHJvbFJlZiA9IHJlZjtcbiAgICB9O1xuXG4gICAgX3RoaXMuZm9jdXNlZE9wdGlvblJlZiA9IG51bGw7XG5cbiAgICBfdGhpcy5nZXRGb2N1c2VkT3B0aW9uUmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgX3RoaXMuZm9jdXNlZE9wdGlvblJlZiA9IHJlZjtcbiAgICB9O1xuXG4gICAgX3RoaXMubWVudUxpc3RSZWYgPSBudWxsO1xuXG4gICAgX3RoaXMuZ2V0TWVudUxpc3RSZWYgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgICBfdGhpcy5tZW51TGlzdFJlZiA9IHJlZjtcbiAgICB9O1xuXG4gICAgX3RoaXMuaW5wdXRSZWYgPSBudWxsO1xuXG4gICAgX3RoaXMuZ2V0SW5wdXRSZWYgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgICBfdGhpcy5pbnB1dFJlZiA9IHJlZjtcbiAgICB9O1xuXG4gICAgX3RoaXMuZm9jdXMgPSBfdGhpcy5mb2N1c0lucHV0O1xuICAgIF90aGlzLmJsdXIgPSBfdGhpcy5ibHVySW5wdXQ7XG5cbiAgICBfdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgYWN0aW9uTWV0YSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgb25DaGFuZ2UgPSBfdGhpcyRwcm9wcy5vbkNoYW5nZSxcbiAgICAgICAgICBuYW1lID0gX3RoaXMkcHJvcHMubmFtZTtcbiAgICAgIG9uQ2hhbmdlKG5ld1ZhbHVlLCBfb2JqZWN0U3ByZWFkJDIoX29iamVjdFNwcmVhZCQyKHt9LCBhY3Rpb25NZXRhKSwge30sIHtcbiAgICAgICAgbmFtZTogbmFtZVxuICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBfdGhpcy5zZXRWYWx1ZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJ3NldC12YWx1ZSc7XG4gICAgICB2YXIgb3B0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgY2xvc2VNZW51T25TZWxlY3QgPSBfdGhpcyRwcm9wczIuY2xvc2VNZW51T25TZWxlY3QsXG4gICAgICAgICAgaXNNdWx0aSA9IF90aGlzJHByb3BzMi5pc011bHRpO1xuXG4gICAgICBfdGhpcy5vbklucHV0Q2hhbmdlKCcnLCB7XG4gICAgICAgIGFjdGlvbjogJ3NldC12YWx1ZSdcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoY2xvc2VNZW51T25TZWxlY3QpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZTogIWlzTXVsdGlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMub25NZW51Q2xvc2UoKTtcbiAgICAgIH0gLy8gd2hlbiB0aGUgc2VsZWN0IHZhbHVlIHNob3VsZCBjaGFuZ2UsIHdlIHNob3VsZCByZXNldCBmb2N1c2VkVmFsdWVcblxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNsZWFyRm9jdXNWYWx1ZU9uVXBkYXRlOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgX3RoaXMub25DaGFuZ2UobmV3VmFsdWUsIHtcbiAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgIG9wdGlvbjogb3B0aW9uXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2VsZWN0T3B0aW9uID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgYmx1cklucHV0T25TZWxlY3QgPSBfdGhpcyRwcm9wczMuYmx1cklucHV0T25TZWxlY3QsXG4gICAgICAgICAgaXNNdWx0aSA9IF90aGlzJHByb3BzMy5pc011bHRpO1xuICAgICAgdmFyIHNlbGVjdFZhbHVlID0gX3RoaXMuc3RhdGUuc2VsZWN0VmFsdWU7XG5cbiAgICAgIGlmIChpc011bHRpKSB7XG4gICAgICAgIGlmIChfdGhpcy5pc09wdGlvblNlbGVjdGVkKG5ld1ZhbHVlLCBzZWxlY3RWYWx1ZSkpIHtcbiAgICAgICAgICB2YXIgY2FuZGlkYXRlID0gX3RoaXMuZ2V0T3B0aW9uVmFsdWUobmV3VmFsdWUpO1xuXG4gICAgICAgICAgX3RoaXMuc2V0VmFsdWUoc2VsZWN0VmFsdWUuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuZ2V0T3B0aW9uVmFsdWUoaSkgIT09IGNhbmRpZGF0ZTtcbiAgICAgICAgICB9KSwgJ2Rlc2VsZWN0LW9wdGlvbicsIG5ld1ZhbHVlKTtcblxuICAgICAgICAgIF90aGlzLmFubm91bmNlQXJpYUxpdmVTZWxlY3Rpb24oe1xuICAgICAgICAgICAgZXZlbnQ6ICdkZXNlbGVjdC1vcHRpb24nLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3RoaXMuZ2V0T3B0aW9uTGFiZWwobmV3VmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCFfdGhpcy5pc09wdGlvbkRpc2FibGVkKG5ld1ZhbHVlLCBzZWxlY3RWYWx1ZSkpIHtcbiAgICAgICAgICAgIF90aGlzLnNldFZhbHVlKFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoc2VsZWN0VmFsdWUpLCBbbmV3VmFsdWVdKSwgJ3NlbGVjdC1vcHRpb24nLCBuZXdWYWx1ZSk7XG5cbiAgICAgICAgICAgIF90aGlzLmFubm91bmNlQXJpYUxpdmVTZWxlY3Rpb24oe1xuICAgICAgICAgICAgICBldmVudDogJ3NlbGVjdC1vcHRpb24nLFxuICAgICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF90aGlzLmdldE9wdGlvbkxhYmVsKG5ld1ZhbHVlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYW5ub3VuY2UgdGhhdCBvcHRpb24gaXMgZGlzYWJsZWRcbiAgICAgICAgICAgIF90aGlzLmFubm91bmNlQXJpYUxpdmVTZWxlY3Rpb24oe1xuICAgICAgICAgICAgICBldmVudDogJ3NlbGVjdC1vcHRpb24nLFxuICAgICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF90aGlzLmdldE9wdGlvbkxhYmVsKG5ld1ZhbHVlKSxcbiAgICAgICAgICAgICAgICBpc0Rpc2FibGVkOiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFfdGhpcy5pc09wdGlvbkRpc2FibGVkKG5ld1ZhbHVlLCBzZWxlY3RWYWx1ZSkpIHtcbiAgICAgICAgICBfdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSwgJ3NlbGVjdC1vcHRpb24nKTtcblxuICAgICAgICAgIF90aGlzLmFubm91bmNlQXJpYUxpdmVTZWxlY3Rpb24oe1xuICAgICAgICAgICAgZXZlbnQ6ICdzZWxlY3Qtb3B0aW9uJyxcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF90aGlzLmdldE9wdGlvbkxhYmVsKG5ld1ZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGFubm91bmNlIHRoYXQgb3B0aW9uIGlzIGRpc2FibGVkXG4gICAgICAgICAgX3RoaXMuYW5ub3VuY2VBcmlhTGl2ZVNlbGVjdGlvbih7XG4gICAgICAgICAgICBldmVudDogJ3NlbGVjdC1vcHRpb24nLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3RoaXMuZ2V0T3B0aW9uTGFiZWwobmV3VmFsdWUpLFxuICAgICAgICAgICAgICBpc0Rpc2FibGVkOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGJsdXJJbnB1dE9uU2VsZWN0KSB7XG4gICAgICAgIF90aGlzLmJsdXJJbnB1dCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5yZW1vdmVWYWx1ZSA9IGZ1bmN0aW9uIChyZW1vdmVkVmFsdWUpIHtcbiAgICAgIHZhciBpc011bHRpID0gX3RoaXMucHJvcHMuaXNNdWx0aTtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IF90aGlzLnN0YXRlLnNlbGVjdFZhbHVlO1xuXG4gICAgICB2YXIgY2FuZGlkYXRlID0gX3RoaXMuZ2V0T3B0aW9uVmFsdWUocmVtb3ZlZFZhbHVlKTtcblxuICAgICAgdmFyIG5ld1ZhbHVlQXJyYXkgPSBzZWxlY3RWYWx1ZS5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmdldE9wdGlvblZhbHVlKGkpICE9PSBjYW5kaWRhdGU7XG4gICAgICB9KTtcbiAgICAgIHZhciBuZXdWYWx1ZSA9IGlzTXVsdGkgPyBuZXdWYWx1ZUFycmF5IDogbmV3VmFsdWVBcnJheS5sZW5ndGggPiAwID8gbmV3VmFsdWVBcnJheVswXSA6IG51bGw7XG5cbiAgICAgIF90aGlzLm9uQ2hhbmdlKG5ld1ZhbHVlLCB7XG4gICAgICAgIGFjdGlvbjogJ3JlbW92ZS12YWx1ZScsXG4gICAgICAgIHJlbW92ZWRWYWx1ZTogcmVtb3ZlZFZhbHVlXG4gICAgICB9KTtcblxuICAgICAgX3RoaXMuYW5ub3VuY2VBcmlhTGl2ZVNlbGVjdGlvbih7XG4gICAgICAgIGV2ZW50OiAncmVtb3ZlLXZhbHVlJyxcbiAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgIHZhbHVlOiByZW1vdmVkVmFsdWUgPyBfdGhpcy5nZXRPcHRpb25MYWJlbChyZW1vdmVkVmFsdWUpIDogJydcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLmZvY3VzSW5wdXQoKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuY2xlYXJWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLm9uQ2hhbmdlKF90aGlzLnByb3BzLmlzTXVsdGkgPyBbXSA6IG51bGwsIHtcbiAgICAgICAgYWN0aW9uOiAnY2xlYXInXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMucG9wVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaXNNdWx0aSA9IF90aGlzLnByb3BzLmlzTXVsdGk7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSBfdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcbiAgICAgIHZhciBsYXN0U2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdFZhbHVlW3NlbGVjdFZhbHVlLmxlbmd0aCAtIDFdO1xuICAgICAgdmFyIG5ld1ZhbHVlQXJyYXkgPSBzZWxlY3RWYWx1ZS5zbGljZSgwLCBzZWxlY3RWYWx1ZS5sZW5ndGggLSAxKTtcbiAgICAgIHZhciBuZXdWYWx1ZSA9IGlzTXVsdGkgPyBuZXdWYWx1ZUFycmF5IDogbmV3VmFsdWVBcnJheS5sZW5ndGggPiAwID8gbmV3VmFsdWVBcnJheVswXSA6IG51bGw7XG5cbiAgICAgIF90aGlzLmFubm91bmNlQXJpYUxpdmVTZWxlY3Rpb24oe1xuICAgICAgICBldmVudDogJ3BvcC12YWx1ZScsXG4gICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICB2YWx1ZTogbGFzdFNlbGVjdGVkVmFsdWUgPyBfdGhpcy5nZXRPcHRpb25MYWJlbChsYXN0U2VsZWN0ZWRWYWx1ZSkgOiAnJ1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgX3RoaXMub25DaGFuZ2UobmV3VmFsdWUsIHtcbiAgICAgICAgYWN0aW9uOiAncG9wLXZhbHVlJyxcbiAgICAgICAgcmVtb3ZlZFZhbHVlOiBsYXN0U2VsZWN0ZWRWYWx1ZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLmdldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnN0YXRlLnNlbGVjdFZhbHVlO1xuICAgIH07XG5cbiAgICBfdGhpcy5jeCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2xhc3NOYW1lcy5hcHBseSh2b2lkIDAsIFtfdGhpcy5wcm9wcy5jbGFzc05hbWVQcmVmaXhdLmNvbmNhdChhcmdzKSk7XG4gICAgfTtcblxuICAgIF90aGlzLmdldE9wdGlvbkxhYmVsID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHJldHVybiBnZXRPcHRpb25MYWJlbCQxKF90aGlzLnByb3BzLCBkYXRhKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0T3B0aW9uVmFsdWUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgcmV0dXJuIGdldE9wdGlvblZhbHVlJDEoX3RoaXMucHJvcHMsIGRhdGEpO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRTdHlsZXMgPSBmdW5jdGlvbiAoa2V5LCBwcm9wcykge1xuICAgICAgdmFyIGJhc2UgPSBkZWZhdWx0U3R5bGVzW2tleV0ocHJvcHMpO1xuICAgICAgYmFzZS5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG4gICAgICB2YXIgY3VzdG9tID0gX3RoaXMucHJvcHMuc3R5bGVzW2tleV07XG4gICAgICByZXR1cm4gY3VzdG9tID8gY3VzdG9tKGJhc2UsIHByb3BzKSA6IGJhc2U7XG4gICAgfTtcblxuICAgIF90aGlzLmdldEVsZW1lbnRJZCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQoX3RoaXMuaW5zdGFuY2VQcmVmaXgsIFwiLVwiKS5jb25jYXQoZWxlbWVudCk7XG4gICAgfTtcblxuICAgIF90aGlzLmdldENvbXBvbmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdENvbXBvbmVudHMoX3RoaXMucHJvcHMpO1xuICAgIH07XG5cbiAgICBfdGhpcy5idWlsZENhdGVnb3JpemVkT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBidWlsZENhdGVnb3JpemVkT3B0aW9ucyhfdGhpcy5wcm9wcywgX3RoaXMuc3RhdGUuc2VsZWN0VmFsdWUpO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRDYXRlZ29yaXplZE9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMubWVudUlzT3BlbiA/IF90aGlzLmJ1aWxkQ2F0ZWdvcml6ZWRPcHRpb25zKCkgOiBbXTtcbiAgICB9O1xuXG4gICAgX3RoaXMuYnVpbGRGb2N1c2FibGVPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGJ1aWxkRm9jdXNhYmxlT3B0aW9uc0Zyb21DYXRlZ29yaXplZE9wdGlvbnMoX3RoaXMuYnVpbGRDYXRlZ29yaXplZE9wdGlvbnMoKSk7XG4gICAgfTtcblxuICAgIF90aGlzLmdldEZvY3VzYWJsZU9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMubWVudUlzT3BlbiA/IF90aGlzLmJ1aWxkRm9jdXNhYmxlT3B0aW9ucygpIDogW107XG4gICAgfTtcblxuICAgIF90aGlzLmFubm91bmNlQXJpYUxpdmVTZWxlY3Rpb24gPSBmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgIHZhciBldmVudCA9IF9yZWYyLmV2ZW50LFxuICAgICAgICAgIGNvbnRleHQgPSBfcmVmMi5jb250ZXh0O1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFyaWFMaXZlU2VsZWN0aW9uOiB2YWx1ZUV2ZW50QXJpYU1lc3NhZ2UoZXZlbnQsIGNvbnRleHQpXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuYW5ub3VuY2VBcmlhTGl2ZUNvbnRleHQgPSBmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgIHZhciBldmVudCA9IF9yZWYzLmV2ZW50LFxuICAgICAgICAgIGNvbnRleHQgPSBfcmVmMy5jb250ZXh0O1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFyaWFMaXZlQ29udGV4dDogaW5zdHJ1Y3Rpb25zQXJpYU1lc3NhZ2UoZXZlbnQsIF9vYmplY3RTcHJlYWQkMihfb2JqZWN0U3ByZWFkJDIoe30sIGNvbnRleHQpLCB7fSwge1xuICAgICAgICAgIGxhYmVsOiBfdGhpcy5wcm9wc1snYXJpYS1sYWJlbCddXG4gICAgICAgIH0pKVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLm9uTWVudU1vdXNlRG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgX3RoaXMuZm9jdXNJbnB1dCgpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbk1lbnVNb3VzZU1vdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLmJsb2NrT3B0aW9uSG92ZXIgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25Db250cm9sTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgb3Blbk1lbnVPbkNsaWNrID0gX3RoaXMucHJvcHMub3Blbk1lbnVPbkNsaWNrO1xuXG4gICAgICBpZiAoIV90aGlzLnN0YXRlLmlzRm9jdXNlZCkge1xuICAgICAgICBpZiAob3Blbk1lbnVPbkNsaWNrKSB7XG4gICAgICAgICAgX3RoaXMub3BlbkFmdGVyRm9jdXMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuZm9jdXNJbnB1dCgpO1xuICAgICAgfSBlbHNlIGlmICghX3RoaXMucHJvcHMubWVudUlzT3Blbikge1xuICAgICAgICBpZiAob3Blbk1lbnVPbkNsaWNrKSB7XG4gICAgICAgICAgX3RoaXMub3Blbk1lbnUoJ2ZpcnN0Jyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICggLy8gJEZsb3dGaXhNZVxuICAgICAgICBldmVudC50YXJnZXQudGFnTmFtZSAhPT0gJ0lOUFVUJyAmJiBldmVudC50YXJnZXQudGFnTmFtZSAhPT0gJ1RFWFRBUkVBJykge1xuICAgICAgICAgIF90aGlzLm9uTWVudUNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCAvLyAkRmxvd0ZpeE1lXG4gICAgICBldmVudC50YXJnZXQudGFnTmFtZSAhPT0gJ0lOUFVUJyAmJiBldmVudC50YXJnZXQudGFnTmFtZSAhPT0gJ1RFWFRBUkVBJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkRyb3Bkb3duSW5kaWNhdG9yTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBpZ25vcmUgbW91c2UgZXZlbnRzIHRoYXQgd2VyZW4ndCB0cmlnZ2VyZWQgYnkgdGhlIHByaW1hcnkgYnV0dG9uXG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgZXZlbnQuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLmlzRGlzYWJsZWQpIHJldHVybjtcbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBpc011bHRpID0gX3RoaXMkcHJvcHM0LmlzTXVsdGksXG4gICAgICAgICAgbWVudUlzT3BlbiA9IF90aGlzJHByb3BzNC5tZW51SXNPcGVuO1xuXG4gICAgICBfdGhpcy5mb2N1c0lucHV0KCk7XG5cbiAgICAgIGlmIChtZW51SXNPcGVuKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGU6ICFpc011bHRpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzLm9uTWVudUNsb3NlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5vcGVuTWVudSgnZmlyc3QnKTtcbiAgICAgIH1cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbkNsZWFySW5kaWNhdG9yTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBpZ25vcmUgbW91c2UgZXZlbnRzIHRoYXQgd2VyZW4ndCB0cmlnZ2VyZWQgYnkgdGhlIHByaW1hcnkgYnV0dG9uXG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgZXZlbnQuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuY2xlYXJWYWx1ZSgpO1xuXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIF90aGlzLm9wZW5BZnRlckZvY3VzID0gZmFsc2U7XG5cbiAgICAgIGlmIChldmVudC50eXBlID09PSAndG91Y2hlbmQnKSB7XG4gICAgICAgIF90aGlzLmZvY3VzSW5wdXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5mb2N1c0lucHV0KCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vblNjcm9sbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKHR5cGVvZiBfdGhpcy5wcm9wcy5jbG9zZU1lbnVPblNjcm9sbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBpc0RvY3VtZW50RWxlbWVudChldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgX3RoaXMucHJvcHMub25NZW51Q2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgX3RoaXMucHJvcHMuY2xvc2VNZW51T25TY3JvbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLmNsb3NlTWVudU9uU2Nyb2xsKGV2ZW50KSkge1xuICAgICAgICAgIF90aGlzLnByb3BzLm9uTWVudUNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25Db21wb3NpdGlvblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuaXNDb21wb3NpbmcgPSB0cnVlO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbkNvbXBvc2l0aW9uRW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuaXNDb21wb3NpbmcgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24gKF9yZWY0KSB7XG4gICAgICB2YXIgdG91Y2hlcyA9IF9yZWY0LnRvdWNoZXM7XG4gICAgICB2YXIgdG91Y2ggPSB0b3VjaGVzICYmIHRvdWNoZXMuaXRlbSgwKTtcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmluaXRpYWxUb3VjaFggPSB0b3VjaC5jbGllbnRYO1xuICAgICAgX3RoaXMuaW5pdGlhbFRvdWNoWSA9IHRvdWNoLmNsaWVudFk7XG4gICAgICBfdGhpcy51c2VySXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBfdGhpcy5vblRvdWNoTW92ZSA9IGZ1bmN0aW9uIChfcmVmNSkge1xuICAgICAgdmFyIHRvdWNoZXMgPSBfcmVmNS50b3VjaGVzO1xuICAgICAgdmFyIHRvdWNoID0gdG91Y2hlcyAmJiB0b3VjaGVzLml0ZW0oMCk7XG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGVsdGFYID0gTWF0aC5hYnModG91Y2guY2xpZW50WCAtIF90aGlzLmluaXRpYWxUb3VjaFgpO1xuICAgICAgdmFyIGRlbHRhWSA9IE1hdGguYWJzKHRvdWNoLmNsaWVudFkgLSBfdGhpcy5pbml0aWFsVG91Y2hZKTtcbiAgICAgIHZhciBtb3ZlVGhyZXNob2xkID0gNTtcbiAgICAgIF90aGlzLnVzZXJJc0RyYWdnaW5nID0gZGVsdGFYID4gbW92ZVRocmVzaG9sZCB8fCBkZWx0YVkgPiBtb3ZlVGhyZXNob2xkO1xuICAgIH07XG5cbiAgICBfdGhpcy5vblRvdWNoRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMudXNlcklzRHJhZ2dpbmcpIHJldHVybjsgLy8gY2xvc2UgdGhlIG1lbnUgaWYgdGhlIHVzZXIgdGFwcyBvdXRzaWRlXG4gICAgICAvLyB3ZSdyZSBjaGVja2luZyBvbiBldmVudC50YXJnZXQgaGVyZSBpbnN0ZWFkIG9mIGV2ZW50LmN1cnJlbnRUYXJnZXQsIGJlY2F1c2Ugd2Ugd2FudCB0byBhc3NlcnQgaW5mb3JtYXRpb25cbiAgICAgIC8vIG9uIGV2ZW50cyBvbiBjaGlsZCBlbGVtZW50cywgbm90IHRoZSBkb2N1bWVudCAod2hpY2ggd2UndmUgYXR0YWNoZWQgdGhpcyBoYW5kbGVyIHRvKS5cblxuICAgICAgaWYgKF90aGlzLmNvbnRyb2xSZWYgJiYgIV90aGlzLmNvbnRyb2xSZWYuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiBfdGhpcy5tZW51TGlzdFJlZiAmJiAhX3RoaXMubWVudUxpc3RSZWYuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICBfdGhpcy5ibHVySW5wdXQoKTtcbiAgICAgIH0gLy8gcmVzZXQgbW92ZSB2YXJzXG5cblxuICAgICAgX3RoaXMuaW5pdGlhbFRvdWNoWCA9IDA7XG4gICAgICBfdGhpcy5pbml0aWFsVG91Y2hZID0gMDtcbiAgICB9O1xuXG4gICAgX3RoaXMub25Db250cm9sVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy51c2VySXNEcmFnZ2luZykgcmV0dXJuO1xuXG4gICAgICBfdGhpcy5vbkNvbnRyb2xNb3VzZURvd24oZXZlbnQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbkNsZWFySW5kaWNhdG9yVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy51c2VySXNEcmFnZ2luZykgcmV0dXJuO1xuXG4gICAgICBfdGhpcy5vbkNsZWFySW5kaWNhdG9yTW91c2VEb3duKGV2ZW50KTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25Ecm9wZG93bkluZGljYXRvclRvdWNoRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMudXNlcklzRHJhZ2dpbmcpIHJldHVybjtcblxuICAgICAgX3RoaXMub25Ecm9wZG93bkluZGljYXRvck1vdXNlRG93bihldmVudCk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgaW5wdXRWYWx1ZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLm9uSW5wdXRDaGFuZ2UoaW5wdXRWYWx1ZSwge1xuICAgICAgICBhY3Rpb246ICdpbnB1dC1jaGFuZ2UnXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5tZW51SXNPcGVuKSB7XG4gICAgICAgIF90aGlzLm9uTWVudU9wZW4oKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25JbnB1dEZvY3VzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgaXNTZWFyY2hhYmxlID0gX3RoaXMkcHJvcHM1LmlzU2VhcmNoYWJsZSxcbiAgICAgICAgICBpc011bHRpID0gX3RoaXMkcHJvcHM1LmlzTXVsdGk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkZvY3VzKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRm9jdXMoZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZTogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy5hbm5vdW5jZUFyaWFMaXZlQ29udGV4dCh7XG4gICAgICAgIGV2ZW50OiAnaW5wdXQnLFxuICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgaXNTZWFyY2hhYmxlOiBpc1NlYXJjaGFibGUsXG4gICAgICAgICAgaXNNdWx0aTogaXNNdWx0aVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc0ZvY3VzZWQ6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoX3RoaXMub3BlbkFmdGVyRm9jdXMgfHwgX3RoaXMucHJvcHMub3Blbk1lbnVPbkZvY3VzKSB7XG4gICAgICAgIF90aGlzLm9wZW5NZW51KCdmaXJzdCcpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5vcGVuQWZ0ZXJGb2N1cyA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbklucHV0Qmx1ciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLm1lbnVMaXN0UmVmICYmIF90aGlzLm1lbnVMaXN0UmVmLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgIF90aGlzLmlucHV0UmVmLmZvY3VzKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQmx1cihldmVudCk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLm9uSW5wdXRDaGFuZ2UoJycsIHtcbiAgICAgICAgYWN0aW9uOiAnaW5wdXQtYmx1cidcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy5vbk1lbnVDbG9zZSgpO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzZWRWYWx1ZTogbnVsbCxcbiAgICAgICAgaXNGb2N1c2VkOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLm9uT3B0aW9uSG92ZXIgPSBmdW5jdGlvbiAoZm9jdXNlZE9wdGlvbikge1xuICAgICAgaWYgKF90aGlzLmJsb2NrT3B0aW9uSG92ZXIgfHwgX3RoaXMuc3RhdGUuZm9jdXNlZE9wdGlvbiA9PT0gZm9jdXNlZE9wdGlvbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZE9wdGlvbjogZm9jdXNlZE9wdGlvblxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLnNob3VsZEhpZGVTZWxlY3RlZE9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gc2hvdWxkSGlkZVNlbGVjdGVkT3B0aW9ucyhfdGhpcy5wcm9wcyk7XG4gICAgfTtcblxuICAgIF90aGlzLm9uS2V5RG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczYuaXNNdWx0aSxcbiAgICAgICAgICBiYWNrc3BhY2VSZW1vdmVzVmFsdWUgPSBfdGhpcyRwcm9wczYuYmFja3NwYWNlUmVtb3Zlc1ZhbHVlLFxuICAgICAgICAgIGVzY2FwZUNsZWFyc1ZhbHVlID0gX3RoaXMkcHJvcHM2LmVzY2FwZUNsZWFyc1ZhbHVlLFxuICAgICAgICAgIGlucHV0VmFsdWUgPSBfdGhpcyRwcm9wczYuaW5wdXRWYWx1ZSxcbiAgICAgICAgICBpc0NsZWFyYWJsZSA9IF90aGlzJHByb3BzNi5pc0NsZWFyYWJsZSxcbiAgICAgICAgICBpc0Rpc2FibGVkID0gX3RoaXMkcHJvcHM2LmlzRGlzYWJsZWQsXG4gICAgICAgICAgbWVudUlzT3BlbiA9IF90aGlzJHByb3BzNi5tZW51SXNPcGVuLFxuICAgICAgICAgIG9uS2V5RG93biA9IF90aGlzJHByb3BzNi5vbktleURvd24sXG4gICAgICAgICAgdGFiU2VsZWN0c1ZhbHVlID0gX3RoaXMkcHJvcHM2LnRhYlNlbGVjdHNWYWx1ZSxcbiAgICAgICAgICBvcGVuTWVudU9uRm9jdXMgPSBfdGhpcyRwcm9wczYub3Blbk1lbnVPbkZvY3VzO1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gX3RoaXMuc3RhdGUsXG4gICAgICAgICAgZm9jdXNlZE9wdGlvbiA9IF90aGlzJHN0YXRlLmZvY3VzZWRPcHRpb24sXG4gICAgICAgICAgZm9jdXNlZFZhbHVlID0gX3RoaXMkc3RhdGUuZm9jdXNlZFZhbHVlLFxuICAgICAgICAgIHNlbGVjdFZhbHVlID0gX3RoaXMkc3RhdGUuc2VsZWN0VmFsdWU7XG4gICAgICBpZiAoaXNEaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgICBpZiAodHlwZW9mIG9uS2V5RG93biA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvbktleURvd24oZXZlbnQpO1xuXG4gICAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IC8vIEJsb2NrIG9wdGlvbiBob3ZlciBldmVudHMgd2hlbiB0aGUgdXNlciBoYXMganVzdCBwcmVzc2VkIGEga2V5XG5cblxuICAgICAgX3RoaXMuYmxvY2tPcHRpb25Ib3ZlciA9IHRydWU7XG5cbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgaWYgKCFpc011bHRpIHx8IGlucHV0VmFsdWUpIHJldHVybjtcblxuICAgICAgICAgIF90aGlzLmZvY3VzVmFsdWUoJ3ByZXZpb3VzJyk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICBpZiAoIWlzTXVsdGkgfHwgaW5wdXRWYWx1ZSkgcmV0dXJuO1xuXG4gICAgICAgICAgX3RoaXMuZm9jdXNWYWx1ZSgnbmV4dCcpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnRGVsZXRlJzpcbiAgICAgICAgY2FzZSAnQmFja3NwYWNlJzpcbiAgICAgICAgICBpZiAoaW5wdXRWYWx1ZSkgcmV0dXJuO1xuXG4gICAgICAgICAgaWYgKGZvY3VzZWRWYWx1ZSkge1xuICAgICAgICAgICAgX3RoaXMucmVtb3ZlVmFsdWUoZm9jdXNlZFZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFiYWNrc3BhY2VSZW1vdmVzVmFsdWUpIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKGlzTXVsdGkpIHtcbiAgICAgICAgICAgICAgX3RoaXMucG9wVmFsdWUoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNDbGVhcmFibGUpIHtcbiAgICAgICAgICAgICAgX3RoaXMuY2xlYXJWYWx1ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ1RhYic6XG4gICAgICAgICAgaWYgKF90aGlzLmlzQ29tcG9zaW5nKSByZXR1cm47XG5cbiAgICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkgfHwgIW1lbnVJc09wZW4gfHwgIXRhYlNlbGVjdHNWYWx1ZSB8fCAhZm9jdXNlZE9wdGlvbiB8fCAvLyBkb24ndCBjYXB0dXJlIHRoZSBldmVudCBpZiB0aGUgbWVudSBvcGVucyBvbiBmb2N1cyBhbmQgdGhlIGZvY3VzZWRcbiAgICAgICAgICAvLyBvcHRpb24gaXMgYWxyZWFkeSBzZWxlY3RlZDsgaXQgYnJlYWtzIHRoZSBmbG93IG9mIG5hdmlnYXRpb25cbiAgICAgICAgICBvcGVuTWVudU9uRm9jdXMgJiYgX3RoaXMuaXNPcHRpb25TZWxlY3RlZChmb2N1c2VkT3B0aW9uLCBzZWxlY3RWYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpcy5zZWxlY3RPcHRpb24oZm9jdXNlZE9wdGlvbik7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDIyOSkge1xuICAgICAgICAgICAgLy8gaWdub3JlIHRoZSBrZXlkb3duIGV2ZW50IGZyb20gYW4gSW5wdXQgTWV0aG9kIEVkaXRvcihJTUUpXG4gICAgICAgICAgICAvLyByZWYuIGh0dHBzOi8vd3d3LnczLm9yZy9UUi91aWV2ZW50cy8jZGV0ZXJtaW5lLWtleWRvd24ta2V5dXAta2V5Q29kZVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG1lbnVJc09wZW4pIHtcbiAgICAgICAgICAgIGlmICghZm9jdXNlZE9wdGlvbikgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKF90aGlzLmlzQ29tcG9zaW5nKSByZXR1cm47XG5cbiAgICAgICAgICAgIF90aGlzLnNlbGVjdE9wdGlvbihmb2N1c2VkT3B0aW9uKTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICAgICAgaWYgKG1lbnVJc09wZW4pIHtcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF90aGlzLm9uSW5wdXRDaGFuZ2UoJycsIHtcbiAgICAgICAgICAgICAgYWN0aW9uOiAnbWVudS1jbG9zZSdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfdGhpcy5vbk1lbnVDbG9zZSgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDbGVhcmFibGUgJiYgZXNjYXBlQ2xlYXJzVmFsdWUpIHtcbiAgICAgICAgICAgIF90aGlzLmNsZWFyVmFsdWUoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICAvLyBzcGFjZVxuICAgICAgICAgIGlmIChpbnB1dFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFtZW51SXNPcGVuKSB7XG4gICAgICAgICAgICBfdGhpcy5vcGVuTWVudSgnZmlyc3QnKTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFmb2N1c2VkT3B0aW9uKSByZXR1cm47XG5cbiAgICAgICAgICBfdGhpcy5zZWxlY3RPcHRpb24oZm9jdXNlZE9wdGlvbik7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICBpZiAobWVudUlzT3Blbikge1xuICAgICAgICAgICAgX3RoaXMuZm9jdXNPcHRpb24oJ3VwJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLm9wZW5NZW51KCdsYXN0Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICBpZiAobWVudUlzT3Blbikge1xuICAgICAgICAgICAgX3RoaXMuZm9jdXNPcHRpb24oJ2Rvd24nKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMub3Blbk1lbnUoJ2ZpcnN0Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnUGFnZVVwJzpcbiAgICAgICAgICBpZiAoIW1lbnVJc09wZW4pIHJldHVybjtcblxuICAgICAgICAgIF90aGlzLmZvY3VzT3B0aW9uKCdwYWdldXAnKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ1BhZ2VEb3duJzpcbiAgICAgICAgICBpZiAoIW1lbnVJc09wZW4pIHJldHVybjtcblxuICAgICAgICAgIF90aGlzLmZvY3VzT3B0aW9uKCdwYWdlZG93bicpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgICAgaWYgKCFtZW51SXNPcGVuKSByZXR1cm47XG5cbiAgICAgICAgICBfdGhpcy5mb2N1c09wdGlvbignZmlyc3QnKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0VuZCc6XG4gICAgICAgICAgaWYgKCFtZW51SXNPcGVuKSByZXR1cm47XG5cbiAgICAgICAgICBfdGhpcy5mb2N1c09wdGlvbignbGFzdCcpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcblxuICAgIF90aGlzLmluc3RhbmNlUHJlZml4ID0gJ3JlYWN0LXNlbGVjdC0nICsgKF90aGlzLnByb3BzLmluc3RhbmNlSWQgfHwgKytpbnN0YW5jZUlkKTtcbiAgICBfdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZSA9IGNsZWFuVmFsdWUoX3Byb3BzLnZhbHVlKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU2VsZWN0LCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc3RhcnRMaXN0ZW5pbmdDb21wb3NpdGlvbigpO1xuICAgICAgdGhpcy5zdGFydExpc3RlbmluZ1RvVG91Y2goKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuY2xvc2VNZW51T25TY3JvbGwgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAvLyBMaXN0ZW4gdG8gYWxsIHNjcm9sbCBldmVudHMsIGFuZCBmaWx0ZXIgdGhlbSBvdXQgaW5zaWRlIG9mICdvblNjcm9sbCdcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmF1dG9Gb2N1cykge1xuICAgICAgICB0aGlzLmZvY3VzSW5wdXQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczcgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczcuaXNEaXNhYmxlZCxcbiAgICAgICAgICBtZW51SXNPcGVuID0gX3RoaXMkcHJvcHM3Lm1lbnVJc09wZW47XG4gICAgICB2YXIgaXNGb2N1c2VkID0gdGhpcy5zdGF0ZS5pc0ZvY3VzZWQ7XG5cbiAgICAgIGlmICggLy8gZW5zdXJlIGZvY3VzIGlzIHJlc3RvcmVkIGNvcnJlY3RseSB3aGVuIHRoZSBjb250cm9sIGJlY29tZXMgZW5hYmxlZFxuICAgICAgaXNGb2N1c2VkICYmICFpc0Rpc2FibGVkICYmIHByZXZQcm9wcy5pc0Rpc2FibGVkIHx8IC8vIGVuc3VyZSBmb2N1cyBpcyBvbiB0aGUgSW5wdXQgd2hlbiB0aGUgbWVudSBvcGVuc1xuICAgICAgaXNGb2N1c2VkICYmIG1lbnVJc09wZW4gJiYgIXByZXZQcm9wcy5tZW51SXNPcGVuKSB7XG4gICAgICAgIHRoaXMuZm9jdXNJbnB1dCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNGb2N1c2VkICYmIGlzRGlzYWJsZWQgJiYgIXByZXZQcm9wcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzZWxlY3Qgc3RhdGUgZ2V0cyBibHVycmVkIGluIGNhc2UgU2VsZWN0IGlzIHByb2dyYW1hdGljYWxseSBkaXNhYmxlZCB3aGlsZSBmb2N1c2VkXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlzRm9jdXNlZDogZmFsc2VcbiAgICAgICAgfSwgdGhpcy5vbk1lbnVDbG9zZSk7XG4gICAgICB9IC8vIHNjcm9sbCB0aGUgZm9jdXNlZCBvcHRpb24gaW50byB2aWV3IGlmIG5lY2Vzc2FyeVxuXG5cbiAgICAgIGlmICh0aGlzLm1lbnVMaXN0UmVmICYmIHRoaXMuZm9jdXNlZE9wdGlvblJlZiAmJiB0aGlzLnNjcm9sbFRvRm9jdXNlZE9wdGlvbk9uVXBkYXRlKSB7XG4gICAgICAgIHNjcm9sbEludG9WaWV3KHRoaXMubWVudUxpc3RSZWYsIHRoaXMuZm9jdXNlZE9wdGlvblJlZik7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9Gb2N1c2VkT3B0aW9uT25VcGRhdGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnN0b3BMaXN0ZW5pbmdDb21wb3NpdGlvbigpO1xuICAgICAgdGhpcy5zdG9wTGlzdGVuaW5nVG9Ub3VjaCgpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCwgdHJ1ZSk7XG4gICAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBDb25zdW1lciBIYW5kbGVyc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIH0sIHtcbiAgICBrZXk6IFwib25NZW51T3BlblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1lbnVPcGVuKCkge1xuICAgICAgdGhpcy5wcm9wcy5vbk1lbnVPcGVuKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uTWVudUNsb3NlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTWVudUNsb3NlKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzOCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaXNTZWFyY2hhYmxlID0gX3RoaXMkcHJvcHM4LmlzU2VhcmNoYWJsZSxcbiAgICAgICAgICBpc011bHRpID0gX3RoaXMkcHJvcHM4LmlzTXVsdGk7XG4gICAgICB0aGlzLmFubm91bmNlQXJpYUxpdmVDb250ZXh0KHtcbiAgICAgICAgZXZlbnQ6ICdpbnB1dCcsXG4gICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICBpc1NlYXJjaGFibGU6IGlzU2VhcmNoYWJsZSxcbiAgICAgICAgICBpc011bHRpOiBpc011bHRpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5vbklucHV0Q2hhbmdlKCcnLCB7XG4gICAgICAgIGFjdGlvbjogJ21lbnUtY2xvc2UnXG4gICAgICB9KTtcbiAgICAgIHRoaXMucHJvcHMub25NZW51Q2xvc2UoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25JbnB1dENoYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbklucHV0Q2hhbmdlKG5ld1ZhbHVlLCBhY3Rpb25NZXRhKSB7XG4gICAgICB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UobmV3VmFsdWUsIGFjdGlvbk1ldGEpO1xuICAgIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gTWV0aG9kc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIH0sIHtcbiAgICBrZXk6IFwiZm9jdXNJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1c0lucHV0KCkge1xuICAgICAgaWYgKCF0aGlzLmlucHV0UmVmKSByZXR1cm47XG4gICAgICB0aGlzLmlucHV0UmVmLmZvY3VzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJsdXJJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBibHVySW5wdXQoKSB7XG4gICAgICBpZiAoIXRoaXMuaW5wdXRSZWYpIHJldHVybjtcbiAgICAgIHRoaXMuaW5wdXRSZWYuYmx1cigpO1xuICAgIH0gLy8gYWxpYXNlZCBmb3IgY29uc3VtZXJzXG5cbiAgfSwge1xuICAgIGtleTogXCJvcGVuTWVudVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuTWVudShmb2N1c09wdGlvbikge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRzdGF0ZTIgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIHNlbGVjdFZhbHVlID0gX3RoaXMkc3RhdGUyLnNlbGVjdFZhbHVlLFxuICAgICAgICAgIGlzRm9jdXNlZCA9IF90aGlzJHN0YXRlMi5pc0ZvY3VzZWQ7XG4gICAgICB2YXIgZm9jdXNhYmxlT3B0aW9ucyA9IHRoaXMuYnVpbGRGb2N1c2FibGVPcHRpb25zKCk7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM5ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpc011bHRpID0gX3RoaXMkcHJvcHM5LmlzTXVsdGksXG4gICAgICAgICAgdGFiU2VsZWN0c1ZhbHVlID0gX3RoaXMkcHJvcHM5LnRhYlNlbGVjdHNWYWx1ZTtcbiAgICAgIHZhciBvcGVuQXRJbmRleCA9IGZvY3VzT3B0aW9uID09PSAnZmlyc3QnID8gMCA6IGZvY3VzYWJsZU9wdGlvbnMubGVuZ3RoIC0gMTtcblxuICAgICAgaWYgKCFpc011bHRpKSB7XG4gICAgICAgIHZhciBzZWxlY3RlZEluZGV4ID0gZm9jdXNhYmxlT3B0aW9ucy5pbmRleE9mKHNlbGVjdFZhbHVlWzBdKTtcblxuICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgb3BlbkF0SW5kZXggPSBzZWxlY3RlZEluZGV4O1xuICAgICAgICB9XG4gICAgICB9IC8vIG9ubHkgc2Nyb2xsIGlmIHRoZSBtZW51IGlzbid0IGFscmVhZHkgb3BlblxuXG5cbiAgICAgIHRoaXMuc2Nyb2xsVG9Gb2N1c2VkT3B0aW9uT25VcGRhdGUgPSAhKGlzRm9jdXNlZCAmJiB0aGlzLm1lbnVMaXN0UmVmKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGU6IGZhbHNlLFxuICAgICAgICBmb2N1c2VkVmFsdWU6IG51bGwsXG4gICAgICAgIGZvY3VzZWRPcHRpb246IGZvY3VzYWJsZU9wdGlvbnNbb3BlbkF0SW5kZXhdXG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5vbk1lbnVPcGVuKCk7XG5cbiAgICAgICAgX3RoaXMyLmFubm91bmNlQXJpYUxpdmVDb250ZXh0KHtcbiAgICAgICAgICBldmVudDogJ21lbnUnLFxuICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgIHRhYlNlbGVjdHNWYWx1ZTogdGFiU2VsZWN0c1ZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb2N1c1ZhbHVlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzVmFsdWUoZGlyZWN0aW9uKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMxMCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaXNNdWx0aSA9IF90aGlzJHByb3BzMTAuaXNNdWx0aSxcbiAgICAgICAgICBpc1NlYXJjaGFibGUgPSBfdGhpcyRwcm9wczEwLmlzU2VhcmNoYWJsZTtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZTMgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIHNlbGVjdFZhbHVlID0gX3RoaXMkc3RhdGUzLnNlbGVjdFZhbHVlLFxuICAgICAgICAgIGZvY3VzZWRWYWx1ZSA9IF90aGlzJHN0YXRlMy5mb2N1c2VkVmFsdWU7IC8vIE9ubHkgbXVsdGlzZWxlY3RzIHN1cHBvcnQgdmFsdWUgZm9jdXNpbmdcblxuICAgICAgaWYgKCFpc011bHRpKSByZXR1cm47XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZE9wdGlvbjogbnVsbFxuICAgICAgfSk7XG4gICAgICB2YXIgZm9jdXNlZEluZGV4ID0gc2VsZWN0VmFsdWUuaW5kZXhPZihmb2N1c2VkVmFsdWUpO1xuXG4gICAgICBpZiAoIWZvY3VzZWRWYWx1ZSkge1xuICAgICAgICBmb2N1c2VkSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5hbm5vdW5jZUFyaWFMaXZlQ29udGV4dCh7XG4gICAgICAgICAgZXZlbnQ6ICd2YWx1ZSdcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBsYXN0SW5kZXggPSBzZWxlY3RWYWx1ZS5sZW5ndGggLSAxO1xuICAgICAgdmFyIG5leHRGb2N1cyA9IC0xO1xuICAgICAgaWYgKCFzZWxlY3RWYWx1ZS5sZW5ndGgpIHJldHVybjtcblxuICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSAncHJldmlvdXMnOlxuICAgICAgICAgIGlmIChmb2N1c2VkSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIC8vIGRvbid0IGN5Y2xlIGZyb20gdGhlIHN0YXJ0IHRvIHRoZSBlbmRcbiAgICAgICAgICAgIG5leHRGb2N1cyA9IDA7XG4gICAgICAgICAgfSBlbHNlIGlmIChmb2N1c2VkSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAvLyBpZiBub3RoaW5nIGlzIGZvY3VzZWQsIGZvY3VzIHRoZSBsYXN0IHZhbHVlIGZpcnN0XG4gICAgICAgICAgICBuZXh0Rm9jdXMgPSBsYXN0SW5kZXg7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5leHRGb2N1cyA9IGZvY3VzZWRJbmRleCAtIDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbmV4dCc6XG4gICAgICAgICAgaWYgKGZvY3VzZWRJbmRleCA+IC0xICYmIGZvY3VzZWRJbmRleCA8IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgbmV4dEZvY3VzID0gZm9jdXNlZEluZGV4ICsgMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKG5leHRGb2N1cyA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5hbm5vdW5jZUFyaWFMaXZlQ29udGV4dCh7XG4gICAgICAgICAgZXZlbnQ6ICdpbnB1dCcsXG4gICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgaXNTZWFyY2hhYmxlOiBpc1NlYXJjaGFibGUsXG4gICAgICAgICAgICBpc011bHRpOiBpc011bHRpXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlucHV0SXNIaWRkZW46IG5leHRGb2N1cyAhPT0gLTEsXG4gICAgICAgIGZvY3VzZWRWYWx1ZTogc2VsZWN0VmFsdWVbbmV4dEZvY3VzXVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvY3VzT3B0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzT3B0aW9uKCkge1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJ2ZpcnN0JztcbiAgICAgIHZhciBfdGhpcyRwcm9wczExID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBwYWdlU2l6ZSA9IF90aGlzJHByb3BzMTEucGFnZVNpemUsXG4gICAgICAgICAgdGFiU2VsZWN0c1ZhbHVlID0gX3RoaXMkcHJvcHMxMS50YWJTZWxlY3RzVmFsdWU7XG4gICAgICB2YXIgX3RoaXMkc3RhdGU0ID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBmb2N1c2VkT3B0aW9uID0gX3RoaXMkc3RhdGU0LmZvY3VzZWRPcHRpb24sXG4gICAgICAgICAgc2VsZWN0VmFsdWUgPSBfdGhpcyRzdGF0ZTQuc2VsZWN0VmFsdWU7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMuZ2V0Rm9jdXNhYmxlT3B0aW9ucygpO1xuICAgICAgaWYgKCFvcHRpb25zLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgdmFyIG5leHRGb2N1cyA9IDA7IC8vIGhhbmRsZXMgJ2ZpcnN0J1xuXG4gICAgICB2YXIgZm9jdXNlZEluZGV4ID0gb3B0aW9ucy5pbmRleE9mKGZvY3VzZWRPcHRpb24pO1xuXG4gICAgICBpZiAoIWZvY3VzZWRPcHRpb24pIHtcbiAgICAgICAgZm9jdXNlZEluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMuYW5ub3VuY2VBcmlhTGl2ZUNvbnRleHQoe1xuICAgICAgICAgIGV2ZW50OiAnbWVudScsXG4gICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgdGFiU2VsZWN0c1ZhbHVlOiB0YWJTZWxlY3RzVmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAndXAnKSB7XG4gICAgICAgIG5leHRGb2N1cyA9IGZvY3VzZWRJbmRleCA+IDAgPyBmb2N1c2VkSW5kZXggLSAxIDogb3B0aW9ucy5sZW5ndGggLSAxO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdkb3duJykge1xuICAgICAgICBuZXh0Rm9jdXMgPSAoZm9jdXNlZEluZGV4ICsgMSkgJSBvcHRpb25zLmxlbmd0aDtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAncGFnZXVwJykge1xuICAgICAgICBuZXh0Rm9jdXMgPSBmb2N1c2VkSW5kZXggLSBwYWdlU2l6ZTtcbiAgICAgICAgaWYgKG5leHRGb2N1cyA8IDApIG5leHRGb2N1cyA9IDA7XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3BhZ2Vkb3duJykge1xuICAgICAgICBuZXh0Rm9jdXMgPSBmb2N1c2VkSW5kZXggKyBwYWdlU2l6ZTtcbiAgICAgICAgaWYgKG5leHRGb2N1cyA+IG9wdGlvbnMubGVuZ3RoIC0gMSkgbmV4dEZvY3VzID0gb3B0aW9ucy5sZW5ndGggLSAxO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdsYXN0Jykge1xuICAgICAgICBuZXh0Rm9jdXMgPSBvcHRpb25zLmxlbmd0aCAtIDE7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2Nyb2xsVG9Gb2N1c2VkT3B0aW9uT25VcGRhdGUgPSB0cnVlO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzZWRPcHRpb246IG9wdGlvbnNbbmV4dEZvY3VzXSxcbiAgICAgICAgZm9jdXNlZFZhbHVlOiBudWxsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuYW5ub3VuY2VBcmlhTGl2ZUNvbnRleHQoe1xuICAgICAgICBldmVudDogJ21lbnUnLFxuICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgaXNEaXNhYmxlZDogdGhpcy5pc09wdGlvbkRpc2FibGVkKG9wdGlvbnNbbmV4dEZvY3VzXSwgc2VsZWN0VmFsdWUpLFxuICAgICAgICAgIHRhYlNlbGVjdHNWYWx1ZTogdGFiU2VsZWN0c1ZhbHVlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRUaGVtZVwiLFxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIEdldHRlcnNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGhlbWUoKSB7XG4gICAgICAvLyBVc2UgdGhlIGRlZmF1bHQgdGhlbWUgaWYgdGhlcmUgYXJlIG5vIGN1c3RvbWl6YXRpb25zLlxuICAgICAgaWYgKCF0aGlzLnByb3BzLnRoZW1lKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VGhlbWU7XG4gICAgICB9IC8vIElmIHRoZSB0aGVtZSBwcm9wIGlzIGEgZnVuY3Rpb24sIGFzc3VtZSB0aGUgZnVuY3Rpb25cbiAgICAgIC8vIGtub3dzIGhvdyB0byBtZXJnZSB0aGUgcGFzc2VkLWluIGRlZmF1bHQgdGhlbWUgd2l0aFxuICAgICAgLy8gaXRzIG93biBtb2RpZmljYXRpb25zLlxuXG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy50aGVtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy50aGVtZShkZWZhdWx0VGhlbWUpO1xuICAgICAgfSAvLyBPdGhlcndpc2UsIGlmIGEgcGxhaW4gdGhlbWUgb2JqZWN0IHdhcyBwYXNzZWQgaW4sXG4gICAgICAvLyBvdmVybGF5IGl0IHdpdGggdGhlIGRlZmF1bHQgdGhlbWUuXG5cblxuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQkMihfb2JqZWN0U3ByZWFkJDIoe30sIGRlZmF1bHRUaGVtZSksIHRoaXMucHJvcHMudGhlbWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRDb21tb25Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb21tb25Qcm9wcygpIHtcbiAgICAgIHZhciBjbGVhclZhbHVlID0gdGhpcy5jbGVhclZhbHVlLFxuICAgICAgICAgIGN4ID0gdGhpcy5jeCxcbiAgICAgICAgICBnZXRTdHlsZXMgPSB0aGlzLmdldFN0eWxlcyxcbiAgICAgICAgICBnZXRWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUsXG4gICAgICAgICAgc2V0VmFsdWUgPSB0aGlzLnNldFZhbHVlLFxuICAgICAgICAgIHNlbGVjdE9wdGlvbiA9IHRoaXMuc2VsZWN0T3B0aW9uLFxuICAgICAgICAgIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBpc011bHRpID0gcHJvcHMuaXNNdWx0aSxcbiAgICAgICAgICBpc1J0bCA9IHByb3BzLmlzUnRsLFxuICAgICAgICAgIG9wdGlvbnMgPSBwcm9wcy5vcHRpb25zO1xuICAgICAgdmFyIGhhc1ZhbHVlID0gdGhpcy5oYXNWYWx1ZSgpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY3g6IGN4LFxuICAgICAgICBjbGVhclZhbHVlOiBjbGVhclZhbHVlLFxuICAgICAgICBnZXRTdHlsZXM6IGdldFN0eWxlcyxcbiAgICAgICAgZ2V0VmFsdWU6IGdldFZhbHVlLFxuICAgICAgICBoYXNWYWx1ZTogaGFzVmFsdWUsXG4gICAgICAgIGlzTXVsdGk6IGlzTXVsdGksXG4gICAgICAgIGlzUnRsOiBpc1J0bCxcbiAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgc2VsZWN0T3B0aW9uOiBzZWxlY3RPcHRpb24sXG4gICAgICAgIHNldFZhbHVlOiBzZXRWYWx1ZSxcbiAgICAgICAgc2VsZWN0UHJvcHM6IHByb3BzLFxuICAgICAgICB0aGVtZTogdGhpcy5nZXRUaGVtZSgpXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYXNWYWx1ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNWYWx1ZSgpIHtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IHRoaXMuc3RhdGUuc2VsZWN0VmFsdWU7XG4gICAgICByZXR1cm4gc2VsZWN0VmFsdWUubGVuZ3RoID4gMDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFzT3B0aW9uc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNPcHRpb25zKCkge1xuICAgICAgcmV0dXJuICEhdGhpcy5nZXRGb2N1c2FibGVPcHRpb25zKCkubGVuZ3RoO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb3VudE9wdGlvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY291bnRPcHRpb25zKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0Rm9jdXNhYmxlT3B0aW9ucygpLmxlbmd0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNDbGVhcmFibGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNDbGVhcmFibGUoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMxMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaXNDbGVhcmFibGUgPSBfdGhpcyRwcm9wczEyLmlzQ2xlYXJhYmxlLFxuICAgICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczEyLmlzTXVsdGk7IC8vIHNpbmdsZSBzZWxlY3QsIGJ5IGRlZmF1bHQsIElTIE5PVCBjbGVhcmFibGVcbiAgICAgIC8vIG11bHRpIHNlbGVjdCwgYnkgZGVmYXVsdCwgSVMgY2xlYXJhYmxlXG5cbiAgICAgIGlmIChpc0NsZWFyYWJsZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gaXNNdWx0aTtcbiAgICAgIHJldHVybiBpc0NsZWFyYWJsZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNPcHRpb25EaXNhYmxlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc09wdGlvbkRpc2FibGVkKG9wdGlvbiwgc2VsZWN0VmFsdWUpIHtcbiAgICAgIHJldHVybiBfaXNPcHRpb25EaXNhYmxlZCh0aGlzLnByb3BzLCBvcHRpb24sIHNlbGVjdFZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNPcHRpb25TZWxlY3RlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc09wdGlvblNlbGVjdGVkKG9wdGlvbiwgc2VsZWN0VmFsdWUpIHtcbiAgICAgIHJldHVybiBfaXNPcHRpb25TZWxlY3RlZCh0aGlzLnByb3BzLCBvcHRpb24sIHNlbGVjdFZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmlsdGVyT3B0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpbHRlck9wdGlvbihvcHRpb24sIGlucHV0VmFsdWUpIHtcbiAgICAgIHJldHVybiBfZmlsdGVyT3B0aW9uKHRoaXMucHJvcHMsIG9wdGlvbiwgaW5wdXRWYWx1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvcm1hdE9wdGlvbkxhYmVsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvcm1hdE9wdGlvbkxhYmVsKGRhdGEsIGNvbnRleHQpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5mb3JtYXRPcHRpb25MYWJlbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgaW5wdXRWYWx1ZSA9IHRoaXMucHJvcHMuaW5wdXRWYWx1ZTtcbiAgICAgICAgdmFyIHNlbGVjdFZhbHVlID0gdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZm9ybWF0T3B0aW9uTGFiZWwoZGF0YSwge1xuICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZSxcbiAgICAgICAgICBzZWxlY3RWYWx1ZTogc2VsZWN0VmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRPcHRpb25MYWJlbChkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZm9ybWF0R3JvdXBMYWJlbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JtYXRHcm91cExhYmVsKGRhdGEpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmZvcm1hdEdyb3VwTGFiZWwoZGF0YSk7XG4gICAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBNb3VzZSBIYW5kbGVyc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RhcnRMaXN0ZW5pbmdDb21wb3NpdGlvblwiLFxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIENvbXBvc2l0aW9uIEhhbmRsZXJzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0TGlzdGVuaW5nQ29tcG9zaXRpb24oKSB7XG4gICAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbnN0YXJ0JywgdGhpcy5vbkNvbXBvc2l0aW9uU3RhcnQsIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb25lbmQnLCB0aGlzLm9uQ29tcG9zaXRpb25FbmQsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RvcExpc3RlbmluZ0NvbXBvc2l0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BMaXN0ZW5pbmdDb21wb3NpdGlvbigpIHtcbiAgICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uc3RhcnQnLCB0aGlzLm9uQ29tcG9zaXRpb25TdGFydCk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uZW5kJywgdGhpcy5vbkNvbXBvc2l0aW9uRW5kKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhcnRMaXN0ZW5pbmdUb1RvdWNoXCIsXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gVG91Y2ggSGFuZGxlcnNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnRMaXN0ZW5pbmdUb1RvdWNoKCkge1xuICAgICAgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUsIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmQsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RvcExpc3RlbmluZ1RvVG91Y2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcExpc3RlbmluZ1RvVG91Y2goKSB7XG4gICAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb25zdHJ1Y3RBcmlhTGl2ZU1lc3NhZ2VcIixcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBSZW5kZXJlcnNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICB2YWx1ZTogZnVuY3Rpb24gY29uc3RydWN0QXJpYUxpdmVNZXNzYWdlKCkge1xuICAgICAgdmFyIF90aGlzJHN0YXRlNSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgYXJpYUxpdmVDb250ZXh0ID0gX3RoaXMkc3RhdGU1LmFyaWFMaXZlQ29udGV4dCxcbiAgICAgICAgICBzZWxlY3RWYWx1ZSA9IF90aGlzJHN0YXRlNS5zZWxlY3RWYWx1ZSxcbiAgICAgICAgICBmb2N1c2VkVmFsdWUgPSBfdGhpcyRzdGF0ZTUuZm9jdXNlZFZhbHVlLFxuICAgICAgICAgIGZvY3VzZWRPcHRpb24gPSBfdGhpcyRzdGF0ZTUuZm9jdXNlZE9wdGlvbjtcbiAgICAgIHZhciBfdGhpcyRwcm9wczEzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBvcHRpb25zID0gX3RoaXMkcHJvcHMxMy5vcHRpb25zLFxuICAgICAgICAgIG1lbnVJc09wZW4gPSBfdGhpcyRwcm9wczEzLm1lbnVJc09wZW4sXG4gICAgICAgICAgaW5wdXRWYWx1ZSA9IF90aGlzJHByb3BzMTMuaW5wdXRWYWx1ZSxcbiAgICAgICAgICBzY3JlZW5SZWFkZXJTdGF0dXMgPSBfdGhpcyRwcm9wczEzLnNjcmVlblJlYWRlclN0YXR1czsgLy8gQW4gYXJpYSBsaXZlIG1lc3NhZ2UgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50bHkgZm9jdXNlZCB2YWx1ZSBpbiB0aGUgc2VsZWN0LlxuXG4gICAgICB2YXIgZm9jdXNlZFZhbHVlTXNnID0gZm9jdXNlZFZhbHVlID8gdmFsdWVGb2N1c0FyaWFNZXNzYWdlKHtcbiAgICAgICAgZm9jdXNlZFZhbHVlOiBmb2N1c2VkVmFsdWUsXG4gICAgICAgIGdldE9wdGlvbkxhYmVsOiB0aGlzLmdldE9wdGlvbkxhYmVsLFxuICAgICAgICBzZWxlY3RWYWx1ZTogc2VsZWN0VmFsdWVcbiAgICAgIH0pIDogJyc7IC8vIEFuIGFyaWEgbGl2ZSBtZXNzYWdlIHJlcHJlc2VudGluZyB0aGUgY3VycmVudGx5IGZvY3VzZWQgb3B0aW9uIGluIHRoZSBzZWxlY3QuXG5cbiAgICAgIHZhciBmb2N1c2VkT3B0aW9uTXNnID0gZm9jdXNlZE9wdGlvbiAmJiBtZW51SXNPcGVuID8gb3B0aW9uRm9jdXNBcmlhTWVzc2FnZSh7XG4gICAgICAgIGZvY3VzZWRPcHRpb246IGZvY3VzZWRPcHRpb24sXG4gICAgICAgIGdldE9wdGlvbkxhYmVsOiB0aGlzLmdldE9wdGlvbkxhYmVsLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICB9KSA6ICcnOyAvLyBBbiBhcmlhIGxpdmUgbWVzc2FnZSByZXByZXNlbnRpbmcgdGhlIHNldCBvZiBmb2N1c2FibGUgcmVzdWx0cyBhbmQgY3VycmVudCBzZWFyY2h0ZXJtL2lucHV0dmFsdWUuXG5cbiAgICAgIHZhciByZXN1bHRzTXNnID0gcmVzdWx0c0FyaWFNZXNzYWdlKHtcbiAgICAgICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZSxcbiAgICAgICAgc2NyZWVuUmVhZGVyTWVzc2FnZTogc2NyZWVuUmVhZGVyU3RhdHVzKHtcbiAgICAgICAgICBjb3VudDogdGhpcy5jb3VudE9wdGlvbnMoKVxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQoZm9jdXNlZFZhbHVlTXNnLCBcIiBcIikuY29uY2F0KGZvY3VzZWRPcHRpb25Nc2csIFwiIFwiKS5jb25jYXQocmVzdWx0c01zZywgXCIgXCIpLmNvbmNhdChhcmlhTGl2ZUNvbnRleHQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJJbnB1dCgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczE0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpc0Rpc2FibGVkID0gX3RoaXMkcHJvcHMxNC5pc0Rpc2FibGVkLFxuICAgICAgICAgIGlzU2VhcmNoYWJsZSA9IF90aGlzJHByb3BzMTQuaXNTZWFyY2hhYmxlLFxuICAgICAgICAgIGlucHV0SWQgPSBfdGhpcyRwcm9wczE0LmlucHV0SWQsXG4gICAgICAgICAgaW5wdXRWYWx1ZSA9IF90aGlzJHByb3BzMTQuaW5wdXRWYWx1ZSxcbiAgICAgICAgICB0YWJJbmRleCA9IF90aGlzJHByb3BzMTQudGFiSW5kZXgsXG4gICAgICAgICAgZm9ybSA9IF90aGlzJHByb3BzMTQuZm9ybTtcblxuICAgICAgdmFyIF90aGlzJGdldENvbXBvbmVudHMgPSB0aGlzLmdldENvbXBvbmVudHMoKSxcbiAgICAgICAgICBJbnB1dCA9IF90aGlzJGdldENvbXBvbmVudHMuSW5wdXQ7XG5cbiAgICAgIHZhciBpbnB1dElzSGlkZGVuID0gdGhpcy5zdGF0ZS5pbnB1dElzSGlkZGVuO1xuICAgICAgdmFyIGlkID0gaW5wdXRJZCB8fCB0aGlzLmdldEVsZW1lbnRJZCgnaW5wdXQnKTsgLy8gYXJpYSBhdHRyaWJ1dGVzIG1ha2VzIHRoZSBKU1ggXCJub2lzeVwiLCBzZXBhcmF0ZWQgZm9yIGNsYXJpdHlcblxuICAgICAgdmFyIGFyaWFBdHRyaWJ1dGVzID0ge1xuICAgICAgICAnYXJpYS1hdXRvY29tcGxldGUnOiAnbGlzdCcsXG4gICAgICAgICdhcmlhLWxhYmVsJzogdGhpcy5wcm9wc1snYXJpYS1sYWJlbCddLFxuICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogdGhpcy5wcm9wc1snYXJpYS1sYWJlbGxlZGJ5J11cbiAgICAgIH07XG5cbiAgICAgIGlmICghaXNTZWFyY2hhYmxlKSB7XG4gICAgICAgIC8vIHVzZSBhIGR1bW15IGlucHV0IHRvIG1haW50YWluIGZvY3VzL2JsdXIgZnVuY3Rpb25hbGl0eVxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRHVtbXlJbnB1dCwgX2V4dGVuZHMoe1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBpbm5lclJlZjogdGhpcy5nZXRJbnB1dFJlZixcbiAgICAgICAgICBvbkJsdXI6IHRoaXMub25JbnB1dEJsdXIsXG4gICAgICAgICAgb25DaGFuZ2U6IG5vb3AsXG4gICAgICAgICAgb25Gb2N1czogdGhpcy5vbklucHV0Rm9jdXMsXG4gICAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgICAgZGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgICAgdGFiSW5kZXg6IHRhYkluZGV4LFxuICAgICAgICAgIGZvcm06IGZvcm0sXG4gICAgICAgICAgdmFsdWU6IFwiXCJcbiAgICAgICAgfSwgYXJpYUF0dHJpYnV0ZXMpKTtcbiAgICAgIH1cblxuICAgICAgdmFyIF90aGlzJGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcyxcbiAgICAgICAgICBjeCA9IF90aGlzJGNvbW1vblByb3BzLmN4LFxuICAgICAgICAgIHRoZW1lID0gX3RoaXMkY29tbW9uUHJvcHMudGhlbWUsXG4gICAgICAgICAgc2VsZWN0UHJvcHMgPSBfdGhpcyRjb21tb25Qcm9wcy5zZWxlY3RQcm9wcztcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgX2V4dGVuZHMoe1xuICAgICAgICBhdXRvQ2FwaXRhbGl6ZTogXCJub25lXCIsXG4gICAgICAgIGF1dG9Db21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgYXV0b0NvcnJlY3Q6IFwib2ZmXCIsXG4gICAgICAgIGN4OiBjeCxcbiAgICAgICAgZ2V0U3R5bGVzOiB0aGlzLmdldFN0eWxlcyxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBpbm5lclJlZjogdGhpcy5nZXRJbnB1dFJlZixcbiAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgaXNIaWRkZW46IGlucHV0SXNIaWRkZW4sXG4gICAgICAgIG9uQmx1cjogdGhpcy5vbklucHV0Qmx1cixcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UsXG4gICAgICAgIG9uRm9jdXM6IHRoaXMub25JbnB1dEZvY3VzLFxuICAgICAgICBzZWxlY3RQcm9wczogc2VsZWN0UHJvcHMsXG4gICAgICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIixcbiAgICAgICAgdGFiSW5kZXg6IHRhYkluZGV4LFxuICAgICAgICBmb3JtOiBmb3JtLFxuICAgICAgICB0aGVtZTogdGhlbWUsXG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICB2YWx1ZTogaW5wdXRWYWx1ZVxuICAgICAgfSwgYXJpYUF0dHJpYnV0ZXMpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyUGxhY2Vob2xkZXJPclZhbHVlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclBsYWNlaG9sZGVyT3JWYWx1ZSgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgX3RoaXMkZ2V0Q29tcG9uZW50czIgPSB0aGlzLmdldENvbXBvbmVudHMoKSxcbiAgICAgICAgICBNdWx0aVZhbHVlID0gX3RoaXMkZ2V0Q29tcG9uZW50czIuTXVsdGlWYWx1ZSxcbiAgICAgICAgICBNdWx0aVZhbHVlQ29udGFpbmVyID0gX3RoaXMkZ2V0Q29tcG9uZW50czIuTXVsdGlWYWx1ZUNvbnRhaW5lcixcbiAgICAgICAgICBNdWx0aVZhbHVlTGFiZWwgPSBfdGhpcyRnZXRDb21wb25lbnRzMi5NdWx0aVZhbHVlTGFiZWwsXG4gICAgICAgICAgTXVsdGlWYWx1ZVJlbW92ZSA9IF90aGlzJGdldENvbXBvbmVudHMyLk11bHRpVmFsdWVSZW1vdmUsXG4gICAgICAgICAgU2luZ2xlVmFsdWUgPSBfdGhpcyRnZXRDb21wb25lbnRzMi5TaW5nbGVWYWx1ZSxcbiAgICAgICAgICBQbGFjZWhvbGRlciA9IF90aGlzJGdldENvbXBvbmVudHMyLlBsYWNlaG9sZGVyO1xuXG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgICAgdmFyIF90aGlzJHByb3BzMTUgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZSA9IF90aGlzJHByb3BzMTUuY29udHJvbFNob3VsZFJlbmRlclZhbHVlLFxuICAgICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczE1LmlzRGlzYWJsZWQsXG4gICAgICAgICAgaXNNdWx0aSA9IF90aGlzJHByb3BzMTUuaXNNdWx0aSxcbiAgICAgICAgICBpbnB1dFZhbHVlID0gX3RoaXMkcHJvcHMxNS5pbnB1dFZhbHVlLFxuICAgICAgICAgIHBsYWNlaG9sZGVyID0gX3RoaXMkcHJvcHMxNS5wbGFjZWhvbGRlcjtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZTYgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIHNlbGVjdFZhbHVlID0gX3RoaXMkc3RhdGU2LnNlbGVjdFZhbHVlLFxuICAgICAgICAgIGZvY3VzZWRWYWx1ZSA9IF90aGlzJHN0YXRlNi5mb2N1c2VkVmFsdWUsXG4gICAgICAgICAgaXNGb2N1c2VkID0gX3RoaXMkc3RhdGU2LmlzRm9jdXNlZDtcblxuICAgICAgaWYgKCF0aGlzLmhhc1ZhbHVlKCkgfHwgIWNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZSkge1xuICAgICAgICByZXR1cm4gaW5wdXRWYWx1ZSA/IG51bGwgOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQbGFjZWhvbGRlciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgICAga2V5OiBcInBsYWNlaG9sZGVyXCIsXG4gICAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZFxuICAgICAgICB9KSwgcGxhY2Vob2xkZXIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNNdWx0aSkge1xuICAgICAgICB2YXIgc2VsZWN0VmFsdWVzID0gc2VsZWN0VmFsdWUubWFwKGZ1bmN0aW9uIChvcHQsIGluZGV4KSB7XG4gICAgICAgICAgdmFyIGlzT3B0aW9uRm9jdXNlZCA9IG9wdCA9PT0gZm9jdXNlZFZhbHVlO1xuICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNdWx0aVZhbHVlLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgQ29udGFpbmVyOiBNdWx0aVZhbHVlQ29udGFpbmVyLFxuICAgICAgICAgICAgICBMYWJlbDogTXVsdGlWYWx1ZUxhYmVsLFxuICAgICAgICAgICAgICBSZW1vdmU6IE11bHRpVmFsdWVSZW1vdmVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc0ZvY3VzZWQ6IGlzT3B0aW9uRm9jdXNlZCxcbiAgICAgICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgICAgICBrZXk6IFwiXCIuY29uY2F0KF90aGlzMy5nZXRPcHRpb25WYWx1ZShvcHQpKS5jb25jYXQoaW5kZXgpLFxuICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgcmVtb3ZlUHJvcHM6IHtcbiAgICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLnJlbW92ZVZhbHVlKG9wdCk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uVG91Y2hFbmQ6IGZ1bmN0aW9uIG9uVG91Y2hFbmQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5yZW1vdmVWYWx1ZShvcHQpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbk1vdXNlRG93bjogZnVuY3Rpb24gb25Nb3VzZURvd24oZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YTogb3B0XG4gICAgICAgICAgfSksIF90aGlzMy5mb3JtYXRPcHRpb25MYWJlbChvcHQsICd2YWx1ZScpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzZWxlY3RWYWx1ZXM7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbnB1dFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2luZ2xlVmFsdWUgPSBzZWxlY3RWYWx1ZVswXTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTaW5nbGVWYWx1ZSwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGRhdGE6IHNpbmdsZVZhbHVlLFxuICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkXG4gICAgICB9KSwgdGhpcy5mb3JtYXRPcHRpb25MYWJlbChzaW5nbGVWYWx1ZSwgJ3ZhbHVlJykpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJDbGVhckluZGljYXRvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJDbGVhckluZGljYXRvcigpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDb21wb25lbnRzMyA9IHRoaXMuZ2V0Q29tcG9uZW50cygpLFxuICAgICAgICAgIENsZWFySW5kaWNhdG9yID0gX3RoaXMkZ2V0Q29tcG9uZW50czMuQ2xlYXJJbmRpY2F0b3I7XG5cbiAgICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHM7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMxNiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaXNEaXNhYmxlZCA9IF90aGlzJHByb3BzMTYuaXNEaXNhYmxlZCxcbiAgICAgICAgICBpc0xvYWRpbmcgPSBfdGhpcyRwcm9wczE2LmlzTG9hZGluZztcbiAgICAgIHZhciBpc0ZvY3VzZWQgPSB0aGlzLnN0YXRlLmlzRm9jdXNlZDtcblxuICAgICAgaWYgKCF0aGlzLmlzQ2xlYXJhYmxlKCkgfHwgIUNsZWFySW5kaWNhdG9yIHx8IGlzRGlzYWJsZWQgfHwgIXRoaXMuaGFzVmFsdWUoKSB8fCBpc0xvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBpbm5lclByb3BzID0ge1xuICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5vbkNsZWFySW5kaWNhdG9yTW91c2VEb3duLFxuICAgICAgICBvblRvdWNoRW5kOiB0aGlzLm9uQ2xlYXJJbmRpY2F0b3JUb3VjaEVuZCxcbiAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICB9O1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENsZWFySW5kaWNhdG9yLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgaW5uZXJQcm9wczogaW5uZXJQcm9wcyxcbiAgICAgICAgaXNGb2N1c2VkOiBpc0ZvY3VzZWRcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyTG9hZGluZ0luZGljYXRvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJMb2FkaW5nSW5kaWNhdG9yKCkge1xuICAgICAgdmFyIF90aGlzJGdldENvbXBvbmVudHM0ID0gdGhpcy5nZXRDb21wb25lbnRzKCksXG4gICAgICAgICAgTG9hZGluZ0luZGljYXRvciA9IF90aGlzJGdldENvbXBvbmVudHM0LkxvYWRpbmdJbmRpY2F0b3I7XG5cbiAgICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHM7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMxNyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaXNEaXNhYmxlZCA9IF90aGlzJHByb3BzMTcuaXNEaXNhYmxlZCxcbiAgICAgICAgICBpc0xvYWRpbmcgPSBfdGhpcyRwcm9wczE3LmlzTG9hZGluZztcbiAgICAgIHZhciBpc0ZvY3VzZWQgPSB0aGlzLnN0YXRlLmlzRm9jdXNlZDtcbiAgICAgIGlmICghTG9hZGluZ0luZGljYXRvciB8fCAhaXNMb2FkaW5nKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciBpbm5lclByb3BzID0ge1xuICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgIH07XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZ0luZGljYXRvciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGlubmVyUHJvcHM6IGlubmVyUHJvcHMsXG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkXG4gICAgICB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckluZGljYXRvclNlcGFyYXRvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJJbmRpY2F0b3JTZXBhcmF0b3IoKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q29tcG9uZW50czUgPSB0aGlzLmdldENvbXBvbmVudHMoKSxcbiAgICAgICAgICBEcm9wZG93bkluZGljYXRvciA9IF90aGlzJGdldENvbXBvbmVudHM1LkRyb3Bkb3duSW5kaWNhdG9yLFxuICAgICAgICAgIEluZGljYXRvclNlcGFyYXRvciA9IF90aGlzJGdldENvbXBvbmVudHM1LkluZGljYXRvclNlcGFyYXRvcjsgLy8gc2VwYXJhdG9yIGRvZXNuJ3QgbWFrZSBzZW5zZSB3aXRob3V0IHRoZSBkcm9wZG93biBpbmRpY2F0b3JcblxuXG4gICAgICBpZiAoIURyb3Bkb3duSW5kaWNhdG9yIHx8ICFJbmRpY2F0b3JTZXBhcmF0b3IpIHJldHVybiBudWxsO1xuICAgICAgdmFyIGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcztcbiAgICAgIHZhciBpc0Rpc2FibGVkID0gdGhpcy5wcm9wcy5pc0Rpc2FibGVkO1xuICAgICAgdmFyIGlzRm9jdXNlZCA9IHRoaXMuc3RhdGUuaXNGb2N1c2VkO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEluZGljYXRvclNlcGFyYXRvciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkXG4gICAgICB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckRyb3Bkb3duSW5kaWNhdG9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckRyb3Bkb3duSW5kaWNhdG9yKCkge1xuICAgICAgdmFyIF90aGlzJGdldENvbXBvbmVudHM2ID0gdGhpcy5nZXRDb21wb25lbnRzKCksXG4gICAgICAgICAgRHJvcGRvd25JbmRpY2F0b3IgPSBfdGhpcyRnZXRDb21wb25lbnRzNi5Ecm9wZG93bkluZGljYXRvcjtcblxuICAgICAgaWYgKCFEcm9wZG93bkluZGljYXRvcikgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgICAgdmFyIGlzRGlzYWJsZWQgPSB0aGlzLnByb3BzLmlzRGlzYWJsZWQ7XG4gICAgICB2YXIgaXNGb2N1c2VkID0gdGhpcy5zdGF0ZS5pc0ZvY3VzZWQ7XG4gICAgICB2YXIgaW5uZXJQcm9wcyA9IHtcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMub25Ecm9wZG93bkluZGljYXRvck1vdXNlRG93bixcbiAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5vbkRyb3Bkb3duSW5kaWNhdG9yVG91Y2hFbmQsXG4gICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgfTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wZG93bkluZGljYXRvciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGlubmVyUHJvcHM6IGlubmVyUHJvcHMsXG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkXG4gICAgICB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlck1lbnVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgX3RoaXMkZ2V0Q29tcG9uZW50czcgPSB0aGlzLmdldENvbXBvbmVudHMoKSxcbiAgICAgICAgICBHcm91cCA9IF90aGlzJGdldENvbXBvbmVudHM3Lkdyb3VwLFxuICAgICAgICAgIEdyb3VwSGVhZGluZyA9IF90aGlzJGdldENvbXBvbmVudHM3Lkdyb3VwSGVhZGluZyxcbiAgICAgICAgICBNZW51ID0gX3RoaXMkZ2V0Q29tcG9uZW50czcuTWVudSxcbiAgICAgICAgICBNZW51TGlzdCA9IF90aGlzJGdldENvbXBvbmVudHM3Lk1lbnVMaXN0LFxuICAgICAgICAgIE1lbnVQb3J0YWwgPSBfdGhpcyRnZXRDb21wb25lbnRzNy5NZW51UG9ydGFsLFxuICAgICAgICAgIExvYWRpbmdNZXNzYWdlID0gX3RoaXMkZ2V0Q29tcG9uZW50czcuTG9hZGluZ01lc3NhZ2UsXG4gICAgICAgICAgTm9PcHRpb25zTWVzc2FnZSA9IF90aGlzJGdldENvbXBvbmVudHM3Lk5vT3B0aW9uc01lc3NhZ2UsXG4gICAgICAgICAgT3B0aW9uID0gX3RoaXMkZ2V0Q29tcG9uZW50czcuT3B0aW9uO1xuXG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgICAgdmFyIGZvY3VzZWRPcHRpb24gPSB0aGlzLnN0YXRlLmZvY3VzZWRPcHRpb247XG4gICAgICB2YXIgX3RoaXMkcHJvcHMxOCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2FwdHVyZU1lbnVTY3JvbGwgPSBfdGhpcyRwcm9wczE4LmNhcHR1cmVNZW51U2Nyb2xsLFxuICAgICAgICAgIGlucHV0VmFsdWUgPSBfdGhpcyRwcm9wczE4LmlucHV0VmFsdWUsXG4gICAgICAgICAgaXNMb2FkaW5nID0gX3RoaXMkcHJvcHMxOC5pc0xvYWRpbmcsXG4gICAgICAgICAgbG9hZGluZ01lc3NhZ2UgPSBfdGhpcyRwcm9wczE4LmxvYWRpbmdNZXNzYWdlLFxuICAgICAgICAgIG1pbk1lbnVIZWlnaHQgPSBfdGhpcyRwcm9wczE4Lm1pbk1lbnVIZWlnaHQsXG4gICAgICAgICAgbWF4TWVudUhlaWdodCA9IF90aGlzJHByb3BzMTgubWF4TWVudUhlaWdodCxcbiAgICAgICAgICBtZW51SXNPcGVuID0gX3RoaXMkcHJvcHMxOC5tZW51SXNPcGVuLFxuICAgICAgICAgIG1lbnVQbGFjZW1lbnQgPSBfdGhpcyRwcm9wczE4Lm1lbnVQbGFjZW1lbnQsXG4gICAgICAgICAgbWVudVBvc2l0aW9uID0gX3RoaXMkcHJvcHMxOC5tZW51UG9zaXRpb24sXG4gICAgICAgICAgbWVudVBvcnRhbFRhcmdldCA9IF90aGlzJHByb3BzMTgubWVudVBvcnRhbFRhcmdldCxcbiAgICAgICAgICBtZW51U2hvdWxkQmxvY2tTY3JvbGwgPSBfdGhpcyRwcm9wczE4Lm1lbnVTaG91bGRCbG9ja1Njcm9sbCxcbiAgICAgICAgICBtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcgPSBfdGhpcyRwcm9wczE4Lm1lbnVTaG91bGRTY3JvbGxJbnRvVmlldyxcbiAgICAgICAgICBub09wdGlvbnNNZXNzYWdlID0gX3RoaXMkcHJvcHMxOC5ub09wdGlvbnNNZXNzYWdlLFxuICAgICAgICAgIG9uTWVudVNjcm9sbFRvVG9wID0gX3RoaXMkcHJvcHMxOC5vbk1lbnVTY3JvbGxUb1RvcCxcbiAgICAgICAgICBvbk1lbnVTY3JvbGxUb0JvdHRvbSA9IF90aGlzJHByb3BzMTgub25NZW51U2Nyb2xsVG9Cb3R0b207XG4gICAgICBpZiAoIW1lbnVJc09wZW4pIHJldHVybiBudWxsOyAvLyBUT0RPOiBJbnRlcm5hbCBPcHRpb24gVHlwZSBoZXJlXG5cbiAgICAgIHZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIocHJvcHMsIGlkKSB7XG4gICAgICAgIHZhciB0eXBlID0gcHJvcHMudHlwZSxcbiAgICAgICAgICAgIGRhdGEgPSBwcm9wcy5kYXRhLFxuICAgICAgICAgICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgICAgICAgICBpc1NlbGVjdGVkID0gcHJvcHMuaXNTZWxlY3RlZCxcbiAgICAgICAgICAgIGxhYmVsID0gcHJvcHMubGFiZWwsXG4gICAgICAgICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlO1xuICAgICAgICB2YXIgaXNGb2N1c2VkID0gZm9jdXNlZE9wdGlvbiA9PT0gZGF0YTtcbiAgICAgICAgdmFyIG9uSG92ZXIgPSBpc0Rpc2FibGVkID8gdW5kZWZpbmVkIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczQub25PcHRpb25Ib3ZlcihkYXRhKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9uU2VsZWN0ID0gaXNEaXNhYmxlZCA/IHVuZGVmaW5lZCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM0LnNlbGVjdE9wdGlvbihkYXRhKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9wdGlvbklkID0gXCJcIi5jb25jYXQoX3RoaXM0LmdldEVsZW1lbnRJZCgnb3B0aW9uJyksIFwiLVwiKS5jb25jYXQoaWQpO1xuICAgICAgICB2YXIgaW5uZXJQcm9wcyA9IHtcbiAgICAgICAgICBpZDogb3B0aW9uSWQsXG4gICAgICAgICAgb25DbGljazogb25TZWxlY3QsXG4gICAgICAgICAgb25Nb3VzZU1vdmU6IG9uSG92ZXIsXG4gICAgICAgICAgb25Nb3VzZU92ZXI6IG9uSG92ZXIsXG4gICAgICAgICAgdGFiSW5kZXg6IC0xXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChPcHRpb24sIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICAgIGlubmVyUHJvcHM6IGlubmVyUHJvcHMsXG4gICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICAgIGlzU2VsZWN0ZWQ6IGlzU2VsZWN0ZWQsXG4gICAgICAgICAga2V5OiBvcHRpb25JZCxcbiAgICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgaXNGb2N1c2VkOiBpc0ZvY3VzZWQsXG4gICAgICAgICAgaW5uZXJSZWY6IGlzRm9jdXNlZCA/IF90aGlzNC5nZXRGb2N1c2VkT3B0aW9uUmVmIDogdW5kZWZpbmVkXG4gICAgICAgIH0pLCBfdGhpczQuZm9ybWF0T3B0aW9uTGFiZWwocHJvcHMuZGF0YSwgJ21lbnUnKSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgbWVudVVJO1xuXG4gICAgICBpZiAodGhpcy5oYXNPcHRpb25zKCkpIHtcbiAgICAgICAgbWVudVVJID0gdGhpcy5nZXRDYXRlZ29yaXplZE9wdGlvbnMoKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICBpZiAoaXRlbS50eXBlID09PSAnZ3JvdXAnKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IGl0ZW0uZGF0YSxcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gaXRlbS5vcHRpb25zLFxuICAgICAgICAgICAgICAgIGdyb3VwSW5kZXggPSBpdGVtLmluZGV4O1xuICAgICAgICAgICAgdmFyIGdyb3VwSWQgPSBcIlwiLmNvbmNhdChfdGhpczQuZ2V0RWxlbWVudElkKCdncm91cCcpLCBcIi1cIikuY29uY2F0KGdyb3VwSW5kZXgpO1xuICAgICAgICAgICAgdmFyIGhlYWRpbmdJZCA9IFwiXCIuY29uY2F0KGdyb3VwSWQsIFwiLWhlYWRpbmdcIik7XG4gICAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoR3JvdXAsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICAgICAgICBrZXk6IGdyb3VwSWQsXG4gICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgICAgICAgIEhlYWRpbmc6IEdyb3VwSGVhZGluZyxcbiAgICAgICAgICAgICAgaGVhZGluZ1Byb3BzOiB7XG4gICAgICAgICAgICAgICAgaWQ6IGhlYWRpbmdJZCxcbiAgICAgICAgICAgICAgICBkYXRhOiBpdGVtLmRhdGFcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbGFiZWw6IF90aGlzNC5mb3JtYXRHcm91cExhYmVsKGl0ZW0uZGF0YSlcbiAgICAgICAgICAgIH0pLCBpdGVtLm9wdGlvbnMubWFwKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcihvcHRpb24sIFwiXCIuY29uY2F0KGdyb3VwSW5kZXgsIFwiLVwiKS5jb25jYXQob3B0aW9uLmluZGV4KSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09ICdvcHRpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyKGl0ZW0sIFwiXCIuY29uY2F0KGl0ZW0uaW5kZXgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBsb2FkaW5nTWVzc2FnZSh7XG4gICAgICAgICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG1lc3NhZ2UgPT09IG51bGwpIHJldHVybiBudWxsO1xuICAgICAgICBtZW51VUkgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkaW5nTWVzc2FnZSwgY29tbW9uUHJvcHMsIG1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIF9tZXNzYWdlID0gbm9PcHRpb25zTWVzc2FnZSh7XG4gICAgICAgICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoX21lc3NhZ2UgPT09IG51bGwpIHJldHVybiBudWxsO1xuICAgICAgICBtZW51VUkgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChOb09wdGlvbnNNZXNzYWdlLCBjb21tb25Qcm9wcywgX21lc3NhZ2UpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbWVudVBsYWNlbWVudFByb3BzID0ge1xuICAgICAgICBtaW5NZW51SGVpZ2h0OiBtaW5NZW51SGVpZ2h0LFxuICAgICAgICBtYXhNZW51SGVpZ2h0OiBtYXhNZW51SGVpZ2h0LFxuICAgICAgICBtZW51UGxhY2VtZW50OiBtZW51UGxhY2VtZW50LFxuICAgICAgICBtZW51UG9zaXRpb246IG1lbnVQb3NpdGlvbixcbiAgICAgICAgbWVudVNob3VsZFNjcm9sbEludG9WaWV3OiBtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXdcbiAgICAgIH07XG4gICAgICB2YXIgbWVudUVsZW1lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNZW51UGxhY2VyLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIG1lbnVQbGFjZW1lbnRQcm9wcyksIGZ1bmN0aW9uIChfcmVmNikge1xuICAgICAgICB2YXIgcmVmID0gX3JlZjYucmVmLFxuICAgICAgICAgICAgX3JlZjYkcGxhY2VyUHJvcHMgPSBfcmVmNi5wbGFjZXJQcm9wcyxcbiAgICAgICAgICAgIHBsYWNlbWVudCA9IF9yZWY2JHBsYWNlclByb3BzLnBsYWNlbWVudCxcbiAgICAgICAgICAgIG1heEhlaWdodCA9IF9yZWY2JHBsYWNlclByb3BzLm1heEhlaWdodDtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1lbnUsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywgbWVudVBsYWNlbWVudFByb3BzLCB7XG4gICAgICAgICAgaW5uZXJSZWY6IHJlZixcbiAgICAgICAgICBpbm5lclByb3BzOiB7XG4gICAgICAgICAgICBvbk1vdXNlRG93bjogX3RoaXM0Lm9uTWVudU1vdXNlRG93bixcbiAgICAgICAgICAgIG9uTW91c2VNb3ZlOiBfdGhpczQub25NZW51TW91c2VNb3ZlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc0xvYWRpbmc6IGlzTG9hZGluZyxcbiAgICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICAgICAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2Nyb2xsTWFuYWdlciwge1xuICAgICAgICAgIGNhcHR1cmVFbmFibGVkOiBjYXB0dXJlTWVudVNjcm9sbCxcbiAgICAgICAgICBvblRvcEFycml2ZTogb25NZW51U2Nyb2xsVG9Ub3AsXG4gICAgICAgICAgb25Cb3R0b21BcnJpdmU6IG9uTWVudVNjcm9sbFRvQm90dG9tLFxuICAgICAgICAgIGxvY2tFbmFibGVkOiBtZW51U2hvdWxkQmxvY2tTY3JvbGxcbiAgICAgICAgfSwgZnVuY3Rpb24gKHNjcm9sbFRhcmdldFJlZikge1xuICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNZW51TGlzdCwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgICAgICBpbm5lclJlZjogZnVuY3Rpb24gaW5uZXJSZWYoaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgX3RoaXM0LmdldE1lbnVMaXN0UmVmKGluc3RhbmNlKTtcblxuICAgICAgICAgICAgICBzY3JvbGxUYXJnZXRSZWYoaW5zdGFuY2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzTG9hZGluZzogaXNMb2FkaW5nLFxuICAgICAgICAgICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHRcbiAgICAgICAgICB9KSwgbWVudVVJKTtcbiAgICAgICAgfSkpO1xuICAgICAgfSk7IC8vIHBvc2l0aW9uaW5nIGJlaGF2aW91ciBpcyBhbG1vc3QgaWRlbnRpY2FsIGZvciBwb3J0YWxsZWQgYW5kIGZpeGVkLFxuICAgICAgLy8gc28gd2UgdXNlIHRoZSBzYW1lIGNvbXBvbmVudC4gdGhlIGFjdHVhbCBwb3J0YWxsaW5nIGxvZ2ljIGlzIGZvcmtlZFxuICAgICAgLy8gd2l0aGluIHRoZSBjb21wb25lbnQgYmFzZWQgb24gYG1lbnVQb3NpdGlvbmBcblxuICAgICAgcmV0dXJuIG1lbnVQb3J0YWxUYXJnZXQgfHwgbWVudVBvc2l0aW9uID09PSAnZml4ZWQnID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudVBvcnRhbCwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGFwcGVuZFRvOiBtZW51UG9ydGFsVGFyZ2V0LFxuICAgICAgICBjb250cm9sRWxlbWVudDogdGhpcy5jb250cm9sUmVmLFxuICAgICAgICBtZW51UGxhY2VtZW50OiBtZW51UGxhY2VtZW50LFxuICAgICAgICBtZW51UG9zaXRpb246IG1lbnVQb3NpdGlvblxuICAgICAgfSksIG1lbnVFbGVtZW50KSA6IG1lbnVFbGVtZW50O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJGb3JtRmllbGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyRm9ybUZpZWxkKCkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczE5ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBkZWxpbWl0ZXIgPSBfdGhpcyRwcm9wczE5LmRlbGltaXRlcixcbiAgICAgICAgICBpc0Rpc2FibGVkID0gX3RoaXMkcHJvcHMxOS5pc0Rpc2FibGVkLFxuICAgICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczE5LmlzTXVsdGksXG4gICAgICAgICAgbmFtZSA9IF90aGlzJHByb3BzMTkubmFtZTtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IHRoaXMuc3RhdGUuc2VsZWN0VmFsdWU7XG4gICAgICBpZiAoIW5hbWUgfHwgaXNEaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgICBpZiAoaXNNdWx0aSkge1xuICAgICAgICBpZiAoZGVsaW1pdGVyKSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gc2VsZWN0VmFsdWUubWFwKGZ1bmN0aW9uIChvcHQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczUuZ2V0T3B0aW9uVmFsdWUob3B0KTtcbiAgICAgICAgICB9KS5qb2luKGRlbGltaXRlcik7XG4gICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHR5cGU6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaW5wdXQgPSBzZWxlY3RWYWx1ZS5sZW5ndGggPiAwID8gc2VsZWN0VmFsdWUubWFwKGZ1bmN0aW9uIChvcHQsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAga2V5OiBcImktXCIuY29uY2F0KGkpLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICB0eXBlOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3RoaXM1LmdldE9wdGlvblZhbHVlKG9wdClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgdHlwZTogXCJoaWRkZW5cIlxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBfdmFsdWUgPSBzZWxlY3RWYWx1ZVswXSA/IHRoaXMuZ2V0T3B0aW9uVmFsdWUoc2VsZWN0VmFsdWVbMF0pIDogJyc7XG5cbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgdHlwZTogXCJoaWRkZW5cIixcbiAgICAgICAgICB2YWx1ZTogX3ZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJMaXZlUmVnaW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckxpdmVSZWdpb24oKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUuaXNGb2N1c2VkKSByZXR1cm4gbnVsbDtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBMTF5VGV4dCwge1xuICAgICAgICBcImFyaWEtbGl2ZVwiOiBcInBvbGl0ZVwiXG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBpZDogXCJhcmlhLXNlbGVjdGlvbi1ldmVudFwiXG4gICAgICB9LCBcIlxceEEwXCIsIHRoaXMuc3RhdGUuYXJpYUxpdmVTZWxlY3Rpb24pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBpZDogXCJhcmlhLWNvbnRleHRcIlxuICAgICAgfSwgXCJcXHhBMFwiLCB0aGlzLmNvbnN0cnVjdEFyaWFMaXZlTWVzc2FnZSgpKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q29tcG9uZW50czggPSB0aGlzLmdldENvbXBvbmVudHMoKSxcbiAgICAgICAgICBDb250cm9sID0gX3RoaXMkZ2V0Q29tcG9uZW50czguQ29udHJvbCxcbiAgICAgICAgICBJbmRpY2F0b3JzQ29udGFpbmVyID0gX3RoaXMkZ2V0Q29tcG9uZW50czguSW5kaWNhdG9yc0NvbnRhaW5lcixcbiAgICAgICAgICBTZWxlY3RDb250YWluZXIgPSBfdGhpcyRnZXRDb21wb25lbnRzOC5TZWxlY3RDb250YWluZXIsXG4gICAgICAgICAgVmFsdWVDb250YWluZXIgPSBfdGhpcyRnZXRDb21wb25lbnRzOC5WYWx1ZUNvbnRhaW5lcjtcblxuICAgICAgdmFyIF90aGlzJHByb3BzMjAgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzMjAuY2xhc3NOYW1lLFxuICAgICAgICAgIGlkID0gX3RoaXMkcHJvcHMyMC5pZCxcbiAgICAgICAgICBpc0Rpc2FibGVkID0gX3RoaXMkcHJvcHMyMC5pc0Rpc2FibGVkLFxuICAgICAgICAgIG1lbnVJc09wZW4gPSBfdGhpcyRwcm9wczIwLm1lbnVJc09wZW47XG4gICAgICB2YXIgaXNGb2N1c2VkID0gdGhpcy5zdGF0ZS5pc0ZvY3VzZWQ7XG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzID0gdGhpcy5nZXRDb21tb25Qcm9wcygpO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdENvbnRhaW5lciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBpbm5lclByb3BzOiB7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIG9uS2V5RG93bjogdGhpcy5vbktleURvd25cbiAgICAgICAgfSxcbiAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgaXNGb2N1c2VkOiBpc0ZvY3VzZWRcbiAgICAgIH0pLCB0aGlzLnJlbmRlckxpdmVSZWdpb24oKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udHJvbCwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGlubmVyUmVmOiB0aGlzLmdldENvbnRyb2xSZWYsXG4gICAgICAgIGlubmVyUHJvcHM6IHtcbiAgICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5vbkNvbnRyb2xNb3VzZURvd24sXG4gICAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5vbkNvbnRyb2xUb3VjaEVuZFxuICAgICAgICB9LFxuICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZCxcbiAgICAgICAgbWVudUlzT3BlbjogbWVudUlzT3BlblxuICAgICAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFZhbHVlQ29udGFpbmVyLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZFxuICAgICAgfSksIHRoaXMucmVuZGVyUGxhY2Vob2xkZXJPclZhbHVlKCksIHRoaXMucmVuZGVySW5wdXQoKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEluZGljYXRvcnNDb250YWluZXIsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkXG4gICAgICB9KSwgdGhpcy5yZW5kZXJDbGVhckluZGljYXRvcigpLCB0aGlzLnJlbmRlckxvYWRpbmdJbmRpY2F0b3IoKSwgdGhpcy5yZW5kZXJJbmRpY2F0b3JTZXBhcmF0b3IoKSwgdGhpcy5yZW5kZXJEcm9wZG93bkluZGljYXRvcigpKSksIHRoaXMucmVuZGVyTWVudSgpLCB0aGlzLnJlbmRlckZvcm1GaWVsZCgpKTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgICAgdmFyIHByZXZQcm9wcyA9IHN0YXRlLnByZXZQcm9wcyxcbiAgICAgICAgICBjbGVhckZvY3VzVmFsdWVPblVwZGF0ZSA9IHN0YXRlLmNsZWFyRm9jdXNWYWx1ZU9uVXBkYXRlLFxuICAgICAgICAgIGlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZSA9IHN0YXRlLmlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZTtcbiAgICAgIHZhciBvcHRpb25zID0gcHJvcHMub3B0aW9ucyxcbiAgICAgICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgICAgIG1lbnVJc09wZW4gPSBwcm9wcy5tZW51SXNPcGVuLFxuICAgICAgICAgIGlucHV0VmFsdWUgPSBwcm9wcy5pbnB1dFZhbHVlO1xuICAgICAgdmFyIG5ld01lbnVPcHRpb25zU3RhdGUgPSB7fTtcblxuICAgICAgaWYgKHByZXZQcm9wcyAmJiAodmFsdWUgIT09IHByZXZQcm9wcy52YWx1ZSB8fCBvcHRpb25zICE9PSBwcmV2UHJvcHMub3B0aW9ucyB8fCBtZW51SXNPcGVuICE9PSBwcmV2UHJvcHMubWVudUlzT3BlbiB8fCBpbnB1dFZhbHVlICE9PSBwcmV2UHJvcHMuaW5wdXRWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHNlbGVjdFZhbHVlID0gY2xlYW5WYWx1ZSh2YWx1ZSk7XG4gICAgICAgIHZhciBmb2N1c2FibGVPcHRpb25zID0gbWVudUlzT3BlbiA/IGJ1aWxkRm9jdXNhYmxlT3B0aW9ucyhwcm9wcywgc2VsZWN0VmFsdWUpIDogW107XG4gICAgICAgIHZhciBmb2N1c2VkVmFsdWUgPSBjbGVhckZvY3VzVmFsdWVPblVwZGF0ZSA/IGdldE5leHRGb2N1c2VkVmFsdWUoc3RhdGUsIHNlbGVjdFZhbHVlKSA6IG51bGw7XG4gICAgICAgIHZhciBmb2N1c2VkT3B0aW9uID0gZ2V0TmV4dEZvY3VzZWRPcHRpb24oc3RhdGUsIGZvY3VzYWJsZU9wdGlvbnMpO1xuICAgICAgICBuZXdNZW51T3B0aW9uc1N0YXRlID0ge1xuICAgICAgICAgIHNlbGVjdFZhbHVlOiBzZWxlY3RWYWx1ZSxcbiAgICAgICAgICBmb2N1c2VkT3B0aW9uOiBmb2N1c2VkT3B0aW9uLFxuICAgICAgICAgIGZvY3VzZWRWYWx1ZTogZm9jdXNlZFZhbHVlLFxuICAgICAgICAgIGNsZWFyRm9jdXNWYWx1ZU9uVXBkYXRlOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgfSAvLyBzb21lIHVwZGF0ZXMgc2hvdWxkIHRvZ2dsZSB0aGUgc3RhdGUgb2YgdGhlIGlucHV0IHZpc2liaWxpdHlcblxuXG4gICAgICB2YXIgbmV3SW5wdXRJc0hpZGRlblN0YXRlID0gaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlICE9IG51bGwgJiYgcHJvcHMgIT09IHByZXZQcm9wcyA/IHtcbiAgICAgICAgaW5wdXRJc0hpZGRlbjogaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlLFxuICAgICAgICBpbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGU6IHVuZGVmaW5lZFxuICAgICAgfSA6IHt9O1xuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQkMihfb2JqZWN0U3ByZWFkJDIoX29iamVjdFNwcmVhZCQyKHt9LCBuZXdNZW51T3B0aW9uc1N0YXRlKSwgbmV3SW5wdXRJc0hpZGRlblN0YXRlKSwge30sIHtcbiAgICAgICAgcHJldlByb3BzOiBwcm9wc1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNlbGVjdDtcbn0oQ29tcG9uZW50KTtcblxuU2VsZWN0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IHsgU2VsZWN0IGFzIFMsIGRlZmF1bHRUaGVtZSBhcyBhLCBjcmVhdGVGaWx0ZXIgYXMgYywgZGVmYXVsdFByb3BzIGFzIGQsIG1lcmdlU3R5bGVzIGFzIG0gfTtcbiIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9nZXRQcm90b3R5cGVPZiBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZic7XG5pbXBvcnQgeyBDb21wb25lbnQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcywgY3NzIGFzIGNzcyQyLCBDbGFzc05hbWVzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBfdHlwZW9mIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZic7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbCc7XG5pbXBvcnQgQXV0b3NpemVJbnB1dCBmcm9tICdyZWFjdC1pbnB1dC1hdXRvc2l6ZSc7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTk8gT1Bcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG4vLyBDbGFzcyBOYW1lIFByZWZpeGVyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGNvbXBvbmVudCBzdGF0ZSBmb3Igc3R5bGluZyB3aXRoIGNsYXNzIG5hbWVzLlxuXG4gRXhwZWN0cyBhbiBhcnJheSBvZiBzdHJpbmdzIE9SIGEgc3RyaW5nL29iamVjdCBwYWlyOlxuIC0gY2xhc3NOYW1lKFsnY29tcCcsICdjb21wLWFyZycsICdjb21wLWFyZy0yJ10pXG4gICBAcmV0dXJucyAncmVhY3Qtc2VsZWN0X19jb21wIHJlYWN0LXNlbGVjdF9fY29tcC1hcmcgcmVhY3Qtc2VsZWN0X19jb21wLWFyZy0yJ1xuIC0gY2xhc3NOYW1lKCdjb21wJywgeyBzb21lOiB0cnVlLCBzdGF0ZTogZmFsc2UgfSlcbiAgIEByZXR1cm5zICdyZWFjdC1zZWxlY3RfX2NvbXAgcmVhY3Qtc2VsZWN0X19jb21wLS1zb21lJ1xuKi9cblxuZnVuY3Rpb24gYXBwbHlQcmVmaXhUb05hbWUocHJlZml4LCBuYW1lKSB7XG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiBwcmVmaXg7XG4gIH0gZWxzZSBpZiAobmFtZVswXSA9PT0gJy0nKSB7XG4gICAgcmV0dXJuIHByZWZpeCArIG5hbWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHByZWZpeCArICdfXycgKyBuYW1lO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsYXNzTmFtZXMocHJlZml4LCBzdGF0ZSwgY2xhc3NOYW1lKSB7XG4gIHZhciBhcnIgPSBbY2xhc3NOYW1lXTtcblxuICBpZiAoc3RhdGUgJiYgcHJlZml4KSB7XG4gICAgZm9yICh2YXIga2V5IGluIHN0YXRlKSB7XG4gICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBzdGF0ZVtrZXldKSB7XG4gICAgICAgIGFyci5wdXNoKFwiXCIuY29uY2F0KGFwcGx5UHJlZml4VG9OYW1lKHByZWZpeCwga2V5KSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcnIuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgcmV0dXJuIGk7XG4gIH0pLm1hcChmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBTdHJpbmcoaSkudHJpbSgpO1xuICB9KS5qb2luKCcgJyk7XG59IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ2xlYW4gVmFsdWVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgY2xlYW5WYWx1ZSA9IGZ1bmN0aW9uIGNsZWFuVmFsdWUodmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWUuZmlsdGVyKEJvb2xlYW4pO1xuICBpZiAoX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsKSByZXR1cm4gW3ZhbHVlXTtcbiAgcmV0dXJuIFtdO1xufTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBIYW5kbGUgSW5wdXQgQ2hhbmdlXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gaGFuZGxlSW5wdXRDaGFuZ2UoaW5wdXRWYWx1ZSwgYWN0aW9uTWV0YSwgb25JbnB1dENoYW5nZSkge1xuICBpZiAob25JbnB1dENoYW5nZSkge1xuICAgIHZhciBuZXdWYWx1ZSA9IG9uSW5wdXRDaGFuZ2UoaW5wdXRWYWx1ZSwgYWN0aW9uTWV0YSk7XG4gICAgaWYgKHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ3N0cmluZycpIHJldHVybiBuZXdWYWx1ZTtcbiAgfVxuXG4gIHJldHVybiBpbnB1dFZhbHVlO1xufSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNjcm9sbCBIZWxwZXJzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gaXNEb2N1bWVudEVsZW1lbnQoZWwpIHtcbiAgcmV0dXJuIFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHksIHdpbmRvd10uaW5kZXhPZihlbCkgPiAtMTtcbn0gLy8gTm9ybWFsaXplZCBTY3JvbGwgVG9wXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsVG9wKGVsKSB7XG4gIGlmIChpc0RvY3VtZW50RWxlbWVudChlbCkpIHtcbiAgICByZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICB9XG5cbiAgcmV0dXJuIGVsLnNjcm9sbFRvcDtcbn1cbmZ1bmN0aW9uIHNjcm9sbFRvKGVsLCB0b3ApIHtcbiAgLy8gd2l0aCBhIHNjcm9sbCBkaXN0YW5jZSwgd2UgcGVyZm9ybSBzY3JvbGwgb24gdGhlIGVsZW1lbnRcbiAgaWYgKGlzRG9jdW1lbnRFbGVtZW50KGVsKSkge1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCB0b3ApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsLnNjcm9sbFRvcCA9IHRvcDtcbn0gLy8gR2V0IFNjcm9sbCBQYXJlbnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICB2YXIgZXhjbHVkZVN0YXRpY1BhcmVudCA9IHN0eWxlLnBvc2l0aW9uID09PSAnYWJzb2x1dGUnO1xuICB2YXIgb3ZlcmZsb3dSeCA9IC8oYXV0b3xzY3JvbGwpLztcbiAgdmFyIGRvY0VsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyAvLyBzdWNrIGl0LCBmbG93Li4uXG5cbiAgaWYgKHN0eWxlLnBvc2l0aW9uID09PSAnZml4ZWQnKSByZXR1cm4gZG9jRWw7XG5cbiAgZm9yICh2YXIgcGFyZW50ID0gZWxlbWVudDsgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7KSB7XG4gICAgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHBhcmVudCk7XG5cbiAgICBpZiAoZXhjbHVkZVN0YXRpY1BhcmVudCAmJiBzdHlsZS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChvdmVyZmxvd1J4LnRlc3Qoc3R5bGUub3ZlcmZsb3cgKyBzdHlsZS5vdmVyZmxvd1kgKyBzdHlsZS5vdmVyZmxvd1gpKSB7XG4gICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkb2NFbDtcbn0gLy8gQW5pbWF0ZWQgU2Nyb2xsIFRvXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gIEBwYXJhbSB0OiB0aW1lIChlbGFwc2VkKVxuICBAcGFyYW0gYjogaW5pdGlhbCB2YWx1ZVxuICBAcGFyYW0gYzogYW1vdW50IG9mIGNoYW5nZVxuICBAcGFyYW0gZDogZHVyYXRpb25cbiovXG5cbmZ1bmN0aW9uIGVhc2VPdXRDdWJpYyh0LCBiLCBjLCBkKSB7XG4gIHJldHVybiBjICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiB0ICsgMSkgKyBiO1xufVxuXG5mdW5jdGlvbiBhbmltYXRlZFNjcm9sbFRvKGVsZW1lbnQsIHRvKSB7XG4gIHZhciBkdXJhdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogMjAwO1xuICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IG5vb3A7XG4gIHZhciBzdGFydCA9IGdldFNjcm9sbFRvcChlbGVtZW50KTtcbiAgdmFyIGNoYW5nZSA9IHRvIC0gc3RhcnQ7XG4gIHZhciBpbmNyZW1lbnQgPSAxMDtcbiAgdmFyIGN1cnJlbnRUaW1lID0gMDtcblxuICBmdW5jdGlvbiBhbmltYXRlU2Nyb2xsKCkge1xuICAgIGN1cnJlbnRUaW1lICs9IGluY3JlbWVudDtcbiAgICB2YXIgdmFsID0gZWFzZU91dEN1YmljKGN1cnJlbnRUaW1lLCBzdGFydCwgY2hhbmdlLCBkdXJhdGlvbik7XG4gICAgc2Nyb2xsVG8oZWxlbWVudCwgdmFsKTtcblxuICAgIGlmIChjdXJyZW50VGltZSA8IGR1cmF0aW9uKSB7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVTY3JvbGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBhbmltYXRlU2Nyb2xsKCk7XG59IC8vIFNjcm9sbCBJbnRvIFZpZXdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBzY3JvbGxJbnRvVmlldyhtZW51RWwsIGZvY3VzZWRFbCkge1xuICB2YXIgbWVudVJlY3QgPSBtZW51RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBmb2N1c2VkUmVjdCA9IGZvY3VzZWRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIG92ZXJTY3JvbGwgPSBmb2N1c2VkRWwub2Zmc2V0SGVpZ2h0IC8gMztcblxuICBpZiAoZm9jdXNlZFJlY3QuYm90dG9tICsgb3ZlclNjcm9sbCA+IG1lbnVSZWN0LmJvdHRvbSkge1xuICAgIHNjcm9sbFRvKG1lbnVFbCwgTWF0aC5taW4oZm9jdXNlZEVsLm9mZnNldFRvcCArIGZvY3VzZWRFbC5jbGllbnRIZWlnaHQgLSBtZW51RWwub2Zmc2V0SGVpZ2h0ICsgb3ZlclNjcm9sbCwgbWVudUVsLnNjcm9sbEhlaWdodCkpO1xuICB9IGVsc2UgaWYgKGZvY3VzZWRSZWN0LnRvcCAtIG92ZXJTY3JvbGwgPCBtZW51UmVjdC50b3ApIHtcbiAgICBzY3JvbGxUbyhtZW51RWwsIE1hdGgubWF4KGZvY3VzZWRFbC5vZmZzZXRUb3AgLSBvdmVyU2Nyb2xsLCAwKSk7XG4gIH1cbn0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBHZXQgYm91bmRpbmcgY2xpZW50IG9iamVjdFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBjYW5ub3QgZ2V0IGtleXMgdXNpbmcgYXJyYXkgbm90YXRpb24gd2l0aCBET01SZWN0XG5cbmZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50T2JqKGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4ge1xuICAgIGJvdHRvbTogcmVjdC5ib3R0b20sXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodCxcbiAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgcmlnaHQ6IHJlY3QucmlnaHQsXG4gICAgdG9wOiByZWN0LnRvcCxcbiAgICB3aWR0aDogcmVjdC53aWR0aFxuICB9O1xufVxuLy8gVG91Y2ggQ2FwYWJpbGl0eSBEZXRlY3RvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGlzVG91Y2hDYXBhYmxlKCkge1xuICB0cnkge1xuICAgIGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdUb3VjaEV2ZW50Jyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNb2JpbGUgRGV2aWNlIERldGVjdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gaXNNb2JpbGVEZXZpY2UoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuZnVuY3Rpb24gZ2V0TWVudVBsYWNlbWVudChfcmVmKSB7XG4gIHZhciBtYXhIZWlnaHQgPSBfcmVmLm1heEhlaWdodCxcbiAgICAgIG1lbnVFbCA9IF9yZWYubWVudUVsLFxuICAgICAgbWluSGVpZ2h0ID0gX3JlZi5taW5IZWlnaHQsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmLnBsYWNlbWVudCxcbiAgICAgIHNob3VsZFNjcm9sbCA9IF9yZWYuc2hvdWxkU2Nyb2xsLFxuICAgICAgaXNGaXhlZFBvc2l0aW9uID0gX3JlZi5pc0ZpeGVkUG9zaXRpb24sXG4gICAgICB0aGVtZSA9IF9yZWYudGhlbWU7XG4gIHZhciBzcGFjaW5nID0gdGhlbWUuc3BhY2luZztcbiAgdmFyIHNjcm9sbFBhcmVudCA9IGdldFNjcm9sbFBhcmVudChtZW51RWwpO1xuICB2YXIgZGVmYXVsdFN0YXRlID0ge1xuICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHRcbiAgfTsgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmcsIHJldHVybiBkZWZhdWx0IHN0YXRlXG5cbiAgaWYgKCFtZW51RWwgfHwgIW1lbnVFbC5vZmZzZXRQYXJlbnQpIHJldHVybiBkZWZhdWx0U3RhdGU7IC8vIHdlIGNhbid0IHRydXN0IGBzY3JvbGxQYXJlbnQuc2Nyb2xsSGVpZ2h0YCAtLT4gaXQgbWF5IGluY3JlYXNlIHdoZW5cbiAgLy8gdGhlIG1lbnUgaXMgcmVuZGVyZWRcblxuICB2YXIgX3Njcm9sbFBhcmVudCRnZXRCb3VuID0gc2Nyb2xsUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgc2Nyb2xsSGVpZ2h0ID0gX3Njcm9sbFBhcmVudCRnZXRCb3VuLmhlaWdodDtcblxuICB2YXIgX21lbnVFbCRnZXRCb3VuZGluZ0NsID0gbWVudUVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgbWVudUJvdHRvbSA9IF9tZW51RWwkZ2V0Qm91bmRpbmdDbC5ib3R0b20sXG4gICAgICBtZW51SGVpZ2h0ID0gX21lbnVFbCRnZXRCb3VuZGluZ0NsLmhlaWdodCxcbiAgICAgIG1lbnVUb3AgPSBfbWVudUVsJGdldEJvdW5kaW5nQ2wudG9wO1xuXG4gIHZhciBfbWVudUVsJG9mZnNldFBhcmVudCQgPSBtZW51RWwub2Zmc2V0UGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgY29udGFpbmVyVG9wID0gX21lbnVFbCRvZmZzZXRQYXJlbnQkLnRvcDtcblxuICB2YXIgdmlld0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgdmFyIHNjcm9sbFRvcCA9IGdldFNjcm9sbFRvcChzY3JvbGxQYXJlbnQpO1xuICB2YXIgbWFyZ2luQm90dG9tID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShtZW51RWwpLm1hcmdpbkJvdHRvbSwgMTApO1xuICB2YXIgbWFyZ2luVG9wID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShtZW51RWwpLm1hcmdpblRvcCwgMTApO1xuICB2YXIgdmlld1NwYWNlQWJvdmUgPSBjb250YWluZXJUb3AgLSBtYXJnaW5Ub3A7XG4gIHZhciB2aWV3U3BhY2VCZWxvdyA9IHZpZXdIZWlnaHQgLSBtZW51VG9wO1xuICB2YXIgc2Nyb2xsU3BhY2VBYm92ZSA9IHZpZXdTcGFjZUFib3ZlICsgc2Nyb2xsVG9wO1xuICB2YXIgc2Nyb2xsU3BhY2VCZWxvdyA9IHNjcm9sbEhlaWdodCAtIHNjcm9sbFRvcCAtIG1lbnVUb3A7XG4gIHZhciBzY3JvbGxEb3duID0gbWVudUJvdHRvbSAtIHZpZXdIZWlnaHQgKyBzY3JvbGxUb3AgKyBtYXJnaW5Cb3R0b207XG4gIHZhciBzY3JvbGxVcCA9IHNjcm9sbFRvcCArIG1lbnVUb3AgLSBtYXJnaW5Ub3A7XG4gIHZhciBzY3JvbGxEdXJhdGlvbiA9IDE2MDtcblxuICBzd2l0Y2ggKHBsYWNlbWVudCkge1xuICAgIGNhc2UgJ2F1dG8nOlxuICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAvLyAxOiB0aGUgbWVudSB3aWxsIGZpdCwgZG8gbm90aGluZ1xuICAgICAgaWYgKHZpZXdTcGFjZUJlbG93ID49IG1lbnVIZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9IC8vIDI6IHRoZSBtZW51IHdpbGwgZml0LCBpZiBzY3JvbGxlZFxuXG5cbiAgICAgIGlmIChzY3JvbGxTcGFjZUJlbG93ID49IG1lbnVIZWlnaHQgJiYgIWlzRml4ZWRQb3NpdGlvbikge1xuICAgICAgICBpZiAoc2hvdWxkU2Nyb2xsKSB7XG4gICAgICAgICAgYW5pbWF0ZWRTY3JvbGxUbyhzY3JvbGxQYXJlbnQsIHNjcm9sbERvd24sIHNjcm9sbER1cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodFxuICAgICAgICB9O1xuICAgICAgfSAvLyAzOiB0aGUgbWVudSB3aWxsIGZpdCwgaWYgY29uc3RyYWluZWRcblxuXG4gICAgICBpZiAoIWlzRml4ZWRQb3NpdGlvbiAmJiBzY3JvbGxTcGFjZUJlbG93ID49IG1pbkhlaWdodCB8fCBpc0ZpeGVkUG9zaXRpb24gJiYgdmlld1NwYWNlQmVsb3cgPj0gbWluSGVpZ2h0KSB7XG4gICAgICAgIGlmIChzaG91bGRTY3JvbGwpIHtcbiAgICAgICAgICBhbmltYXRlZFNjcm9sbFRvKHNjcm9sbFBhcmVudCwgc2Nyb2xsRG93biwgc2Nyb2xsRHVyYXRpb24pO1xuICAgICAgICB9IC8vIHdlIHdhbnQgdG8gcHJvdmlkZSBhcyBtdWNoIG9mIHRoZSBtZW51IGFzIHBvc3NpYmxlIHRvIHRoZSB1c2VyLFxuICAgICAgICAvLyBzbyBnaXZlIHRoZW0gd2hhdGV2ZXIgaXMgYXZhaWxhYmxlIGJlbG93IHJhdGhlciB0aGFuIHRoZSBtaW5IZWlnaHQuXG5cblxuICAgICAgICB2YXIgY29uc3RyYWluZWRIZWlnaHQgPSBpc0ZpeGVkUG9zaXRpb24gPyB2aWV3U3BhY2VCZWxvdyAtIG1hcmdpbkJvdHRvbSA6IHNjcm9sbFNwYWNlQmVsb3cgLSBtYXJnaW5Cb3R0b207XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IGNvbnN0cmFpbmVkSGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9IC8vIDQuIEZvcmtlZCBiZXZpb3VyIHdoZW4gdGhlcmUgaXNuJ3QgZW5vdWdoIHNwYWNlIGJlbG93XG4gICAgICAvLyBBVVRPOiBmbGlwIHRoZSBtZW51LCByZW5kZXIgYWJvdmVcblxuXG4gICAgICBpZiAocGxhY2VtZW50ID09PSAnYXV0bycgfHwgaXNGaXhlZFBvc2l0aW9uKSB7XG4gICAgICAgIC8vIG1heSBuZWVkIHRvIGJlIGNvbnN0cmFpbmVkIGFmdGVyIGZsaXBwaW5nXG4gICAgICAgIHZhciBfY29uc3RyYWluZWRIZWlnaHQgPSBtYXhIZWlnaHQ7XG4gICAgICAgIHZhciBzcGFjZUFib3ZlID0gaXNGaXhlZFBvc2l0aW9uID8gdmlld1NwYWNlQWJvdmUgOiBzY3JvbGxTcGFjZUFib3ZlO1xuXG4gICAgICAgIGlmIChzcGFjZUFib3ZlID49IG1pbkhlaWdodCkge1xuICAgICAgICAgIF9jb25zdHJhaW5lZEhlaWdodCA9IE1hdGgubWluKHNwYWNlQWJvdmUgLSBtYXJnaW5Cb3R0b20gLSBzcGFjaW5nLmNvbnRyb2xIZWlnaHQsIG1heEhlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBfY29uc3RyYWluZWRIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH0gLy8gQk9UVE9NOiBhbGxvdyBicm93c2VyIHRvIGluY3JlYXNlIHNjcm9sbGFibGUgYXJlYSBhbmQgaW1tZWRpYXRlbHkgc2V0IHNjcm9sbFxuXG5cbiAgICAgIGlmIChwbGFjZW1lbnQgPT09ICdib3R0b20nKSB7XG4gICAgICAgIHNjcm9sbFRvKHNjcm9sbFBhcmVudCwgc2Nyb2xsRG93bik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3RvcCc6XG4gICAgICAvLyAxOiB0aGUgbWVudSB3aWxsIGZpdCwgZG8gbm90aGluZ1xuICAgICAgaWYgKHZpZXdTcGFjZUFib3ZlID49IG1lbnVIZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9IC8vIDI6IHRoZSBtZW51IHdpbGwgZml0LCBpZiBzY3JvbGxlZFxuXG5cbiAgICAgIGlmIChzY3JvbGxTcGFjZUFib3ZlID49IG1lbnVIZWlnaHQgJiYgIWlzRml4ZWRQb3NpdGlvbikge1xuICAgICAgICBpZiAoc2hvdWxkU2Nyb2xsKSB7XG4gICAgICAgICAgYW5pbWF0ZWRTY3JvbGxUbyhzY3JvbGxQYXJlbnQsIHNjcm9sbFVwLCBzY3JvbGxEdXJhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH0gLy8gMzogdGhlIG1lbnUgd2lsbCBmaXQsIGlmIGNvbnN0cmFpbmVkXG5cblxuICAgICAgaWYgKCFpc0ZpeGVkUG9zaXRpb24gJiYgc2Nyb2xsU3BhY2VBYm92ZSA+PSBtaW5IZWlnaHQgfHwgaXNGaXhlZFBvc2l0aW9uICYmIHZpZXdTcGFjZUFib3ZlID49IG1pbkhlaWdodCkge1xuICAgICAgICB2YXIgX2NvbnN0cmFpbmVkSGVpZ2h0MiA9IG1heEhlaWdodDsgLy8gd2Ugd2FudCB0byBwcm92aWRlIGFzIG11Y2ggb2YgdGhlIG1lbnUgYXMgcG9zc2libGUgdG8gdGhlIHVzZXIsXG4gICAgICAgIC8vIHNvIGdpdmUgdGhlbSB3aGF0ZXZlciBpcyBhdmFpbGFibGUgYmVsb3cgcmF0aGVyIHRoYW4gdGhlIG1pbkhlaWdodC5cblxuICAgICAgICBpZiAoIWlzRml4ZWRQb3NpdGlvbiAmJiBzY3JvbGxTcGFjZUFib3ZlID49IG1pbkhlaWdodCB8fCBpc0ZpeGVkUG9zaXRpb24gJiYgdmlld1NwYWNlQWJvdmUgPj0gbWluSGVpZ2h0KSB7XG4gICAgICAgICAgX2NvbnN0cmFpbmVkSGVpZ2h0MiA9IGlzRml4ZWRQb3NpdGlvbiA/IHZpZXdTcGFjZUFib3ZlIC0gbWFyZ2luVG9wIDogc2Nyb2xsU3BhY2VBYm92ZSAtIG1hcmdpblRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaG91bGRTY3JvbGwpIHtcbiAgICAgICAgICBhbmltYXRlZFNjcm9sbFRvKHNjcm9sbFBhcmVudCwgc2Nyb2xsVXAsIHNjcm9sbER1cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IF9jb25zdHJhaW5lZEhlaWdodDJcbiAgICAgICAgfTtcbiAgICAgIH0gLy8gNC4gbm90IGVub3VnaCBzcGFjZSwgdGhlIGJyb3dzZXIgV0lMTCBOT1QgaW5jcmVhc2Ugc2Nyb2xsYWJsZSBhcmVhIHdoZW5cbiAgICAgIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZCBlbGVtZW50IHJlbmRlcmVkIGFib3ZlIHRoZSB2aWV3cG9ydCAob25seSBiZWxvdykuXG4gICAgICAvLyBGbGlwIHRoZSBtZW51LCByZW5kZXIgYmVsb3dcblxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodFxuICAgICAgfTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBsYWNlbWVudCBwcm92aWRlZCBcXFwiXCIuY29uY2F0KHBsYWNlbWVudCwgXCJcXFwiLlwiKSk7XG4gIH0gLy8gZnVsZmlsIGNvbnRyYWN0IHdpdGggZmxvdzogaW1wbGljaXQgcmV0dXJuIHZhbHVlIG9mIHVuZGVmaW5lZFxuXG5cbiAgcmV0dXJuIGRlZmF1bHRTdGF0ZTtcbn0gLy8gTWVudSBDb21wb25lbnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBhbGlnblRvQ29udHJvbChwbGFjZW1lbnQpIHtcbiAgdmFyIHBsYWNlbWVudFRvQ1NTUHJvcCA9IHtcbiAgICBib3R0b206ICd0b3AnLFxuICAgIHRvcDogJ2JvdHRvbSdcbiAgfTtcbiAgcmV0dXJuIHBsYWNlbWVudCA/IHBsYWNlbWVudFRvQ1NTUHJvcFtwbGFjZW1lbnRdIDogJ2JvdHRvbSc7XG59XG5cbnZhciBjb2VyY2VQbGFjZW1lbnQgPSBmdW5jdGlvbiBjb2VyY2VQbGFjZW1lbnQocCkge1xuICByZXR1cm4gcCA9PT0gJ2F1dG8nID8gJ2JvdHRvbScgOiBwO1xufTtcblxudmFyIG1lbnVDU1MgPSBmdW5jdGlvbiBtZW51Q1NTKF9yZWYyKSB7XG4gIHZhciBfcmVmMztcblxuICB2YXIgcGxhY2VtZW50ID0gX3JlZjIucGxhY2VtZW50LFxuICAgICAgX3JlZjIkdGhlbWUgPSBfcmVmMi50aGVtZSxcbiAgICAgIGJvcmRlclJhZGl1cyA9IF9yZWYyJHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgICAgIHNwYWNpbmcgPSBfcmVmMiR0aGVtZS5zcGFjaW5nLFxuICAgICAgY29sb3JzID0gX3JlZjIkdGhlbWUuY29sb3JzO1xuICByZXR1cm4gX3JlZjMgPSB7XG4gICAgbGFiZWw6ICdtZW51J1xuICB9LCBfZGVmaW5lUHJvcGVydHkoX3JlZjMsIGFsaWduVG9Db250cm9sKHBsYWNlbWVudCksICcxMDAlJyksIF9kZWZpbmVQcm9wZXJ0eShfcmVmMywgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgY29sb3JzLm5ldXRyYWwwKSwgX2RlZmluZVByb3BlcnR5KF9yZWYzLCBcImJvcmRlclJhZGl1c1wiLCBib3JkZXJSYWRpdXMpLCBfZGVmaW5lUHJvcGVydHkoX3JlZjMsIFwiYm94U2hhZG93XCIsICcwIDAgMCAxcHggaHNsYSgwLCAwJSwgMCUsIDAuMSksIDAgNHB4IDExcHggaHNsYSgwLCAwJSwgMCUsIDAuMSknKSwgX2RlZmluZVByb3BlcnR5KF9yZWYzLCBcIm1hcmdpbkJvdHRvbVwiLCBzcGFjaW5nLm1lbnVHdXR0ZXIpLCBfZGVmaW5lUHJvcGVydHkoX3JlZjMsIFwibWFyZ2luVG9wXCIsIHNwYWNpbmcubWVudUd1dHRlciksIF9kZWZpbmVQcm9wZXJ0eShfcmVmMywgXCJwb3NpdGlvblwiLCAnYWJzb2x1dGUnKSwgX2RlZmluZVByb3BlcnR5KF9yZWYzLCBcIndpZHRoXCIsICcxMDAlJyksIF9kZWZpbmVQcm9wZXJ0eShfcmVmMywgXCJ6SW5kZXhcIiwgMSksIF9yZWYzO1xufTtcbnZhciBQb3J0YWxQbGFjZW1lbnRDb250ZXh0ID0gLyojX19QVVJFX18qL2NyZWF0ZUNvbnRleHQoe1xuICBnZXRQb3J0YWxQbGFjZW1lbnQ6IG51bGxcbn0pOyAvLyBOT1RFOiBpbnRlcm5hbCBvbmx5XG5cbnZhciBNZW51UGxhY2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhNZW51UGxhY2VyLCBfQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1lbnVQbGFjZXIpO1xuXG4gIGZ1bmN0aW9uIE1lbnVQbGFjZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1lbnVQbGFjZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1heEhlaWdodDogX3RoaXMucHJvcHMubWF4TWVudUhlaWdodCxcbiAgICAgIHBsYWNlbWVudDogbnVsbFxuICAgIH07XG5cbiAgICBfdGhpcy5nZXRQbGFjZW1lbnQgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBtaW5NZW51SGVpZ2h0ID0gX3RoaXMkcHJvcHMubWluTWVudUhlaWdodCxcbiAgICAgICAgICBtYXhNZW51SGVpZ2h0ID0gX3RoaXMkcHJvcHMubWF4TWVudUhlaWdodCxcbiAgICAgICAgICBtZW51UGxhY2VtZW50ID0gX3RoaXMkcHJvcHMubWVudVBsYWNlbWVudCxcbiAgICAgICAgICBtZW51UG9zaXRpb24gPSBfdGhpcyRwcm9wcy5tZW51UG9zaXRpb24sXG4gICAgICAgICAgbWVudVNob3VsZFNjcm9sbEludG9WaWV3ID0gX3RoaXMkcHJvcHMubWVudVNob3VsZFNjcm9sbEludG9WaWV3LFxuICAgICAgICAgIHRoZW1lID0gX3RoaXMkcHJvcHMudGhlbWU7XG4gICAgICBpZiAoIXJlZikgcmV0dXJuOyAvLyBETyBOT1Qgc2Nyb2xsIGlmIHBvc2l0aW9uIGlzIGZpeGVkXG5cbiAgICAgIHZhciBpc0ZpeGVkUG9zaXRpb24gPSBtZW51UG9zaXRpb24gPT09ICdmaXhlZCc7XG4gICAgICB2YXIgc2hvdWxkU2Nyb2xsID0gbWVudVNob3VsZFNjcm9sbEludG9WaWV3ICYmICFpc0ZpeGVkUG9zaXRpb247XG4gICAgICB2YXIgc3RhdGUgPSBnZXRNZW51UGxhY2VtZW50KHtcbiAgICAgICAgbWF4SGVpZ2h0OiBtYXhNZW51SGVpZ2h0LFxuICAgICAgICBtZW51RWw6IHJlZixcbiAgICAgICAgbWluSGVpZ2h0OiBtaW5NZW51SGVpZ2h0LFxuICAgICAgICBwbGFjZW1lbnQ6IG1lbnVQbGFjZW1lbnQsXG4gICAgICAgIHNob3VsZFNjcm9sbDogc2hvdWxkU2Nyb2xsLFxuICAgICAgICBpc0ZpeGVkUG9zaXRpb246IGlzRml4ZWRQb3NpdGlvbixcbiAgICAgICAgdGhlbWU6IHRoZW1lXG4gICAgICB9KTtcbiAgICAgIHZhciBnZXRQb3J0YWxQbGFjZW1lbnQgPSBfdGhpcy5jb250ZXh0LmdldFBvcnRhbFBsYWNlbWVudDtcbiAgICAgIGlmIChnZXRQb3J0YWxQbGFjZW1lbnQpIGdldFBvcnRhbFBsYWNlbWVudChzdGF0ZSk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0VXBkYXRlZFByb3BzID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG1lbnVQbGFjZW1lbnQgPSBfdGhpcy5wcm9wcy5tZW51UGxhY2VtZW50O1xuICAgICAgdmFyIHBsYWNlbWVudCA9IF90aGlzLnN0YXRlLnBsYWNlbWVudCB8fCBjb2VyY2VQbGFjZW1lbnQobWVudVBsYWNlbWVudCk7XG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBfdGhpcy5wcm9wcyksIHt9LCB7XG4gICAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgICBtYXhIZWlnaHQ6IF90aGlzLnN0YXRlLm1heEhlaWdodFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNZW51UGxhY2VyLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICAgIHJldHVybiBjaGlsZHJlbih7XG4gICAgICAgIHJlZjogdGhpcy5nZXRQbGFjZW1lbnQsXG4gICAgICAgIHBsYWNlclByb3BzOiB0aGlzLmdldFVwZGF0ZWRQcm9wcygpXG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWVudVBsYWNlcjtcbn0oQ29tcG9uZW50KTtcbk1lbnVQbGFjZXIuY29udGV4dFR5cGUgPSBQb3J0YWxQbGFjZW1lbnRDb250ZXh0O1xuXG52YXIgTWVudSA9IGZ1bmN0aW9uIE1lbnUocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjc3M6IGdldFN0eWxlcygnbWVudScsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgIG1lbnU6IHRydWVcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGlubmVyUHJvcHMsIHtcbiAgICByZWY6IGlubmVyUmVmXG4gIH0pLCBjaGlsZHJlbik7XG59O1xuLy8gTWVudSBMaXN0XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIG1lbnVMaXN0Q1NTID0gZnVuY3Rpb24gbWVudUxpc3RDU1MoX3JlZjQpIHtcbiAgdmFyIG1heEhlaWdodCA9IF9yZWY0Lm1heEhlaWdodCxcbiAgICAgIGJhc2VVbml0ID0gX3JlZjQudGhlbWUuc3BhY2luZy5iYXNlVW5pdDtcbiAgcmV0dXJuIHtcbiAgICBtYXhIZWlnaHQ6IG1heEhlaWdodCxcbiAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICBwYWRkaW5nQm90dG9tOiBiYXNlVW5pdCxcbiAgICBwYWRkaW5nVG9wOiBiYXNlVW5pdCxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAvLyByZXF1aXJlZCBmb3Igb2Zmc2V0W0hlaWdodCwgVG9wXSA+IGtleWJvYXJkIHNjcm9sbFxuICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiAndG91Y2gnXG4gIH07XG59O1xudmFyIE1lbnVMaXN0ID0gZnVuY3Rpb24gTWVudUxpc3QocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaXNNdWx0aSA9IHByb3BzLmlzTXVsdGksXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdtZW51TGlzdCcsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICdtZW51LWxpc3QnOiB0cnVlLFxuICAgICAgJ21lbnUtbGlzdC0taXMtbXVsdGknOiBpc011bHRpXG4gICAgfSwgY2xhc3NOYW1lKSxcbiAgICByZWY6IGlubmVyUmVmXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lbnUgTm90aWNlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBub3RpY2VDU1MgPSBmdW5jdGlvbiBub3RpY2VDU1MoX3JlZjUpIHtcbiAgdmFyIF9yZWY1JHRoZW1lID0gX3JlZjUudGhlbWUsXG4gICAgICBiYXNlVW5pdCA9IF9yZWY1JHRoZW1lLnNwYWNpbmcuYmFzZVVuaXQsXG4gICAgICBjb2xvcnMgPSBfcmVmNSR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiB7XG4gICAgY29sb3I6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgcGFkZGluZzogXCJcIi5jb25jYXQoYmFzZVVuaXQgKiAyLCBcInB4IFwiKS5jb25jYXQoYmFzZVVuaXQgKiAzLCBcInB4XCIpLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgfTtcbn07XG5cbnZhciBub09wdGlvbnNNZXNzYWdlQ1NTID0gbm90aWNlQ1NTO1xudmFyIGxvYWRpbmdNZXNzYWdlQ1NTID0gbm90aWNlQ1NTO1xudmFyIE5vT3B0aW9uc01lc3NhZ2UgPSBmdW5jdGlvbiBOb09wdGlvbnNNZXNzYWdlKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjc3M6IGdldFN0eWxlcygnbm9PcHRpb25zTWVzc2FnZScsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICdtZW51LW5vdGljZSc6IHRydWUsXG4gICAgICAnbWVudS1ub3RpY2UtLW5vLW9wdGlvbnMnOiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcbk5vT3B0aW9uc01lc3NhZ2UuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogJ05vIG9wdGlvbnMnXG59O1xudmFyIExvYWRpbmdNZXNzYWdlID0gZnVuY3Rpb24gTG9hZGluZ01lc3NhZ2UocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdsb2FkaW5nTWVzc2FnZScsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICdtZW51LW5vdGljZSc6IHRydWUsXG4gICAgICAnbWVudS1ub3RpY2UtLWxvYWRpbmcnOiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcbkxvYWRpbmdNZXNzYWdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46ICdMb2FkaW5nLi4uJ1xufTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNZW51IFBvcnRhbFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBtZW51UG9ydGFsQ1NTID0gZnVuY3Rpb24gbWVudVBvcnRhbENTUyhfcmVmNikge1xuICB2YXIgcmVjdCA9IF9yZWY2LnJlY3QsXG4gICAgICBvZmZzZXQgPSBfcmVmNi5vZmZzZXQsXG4gICAgICBwb3NpdGlvbiA9IF9yZWY2LnBvc2l0aW9uO1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgdG9wOiBvZmZzZXQsXG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgekluZGV4OiAxXG4gIH07XG59O1xudmFyIE1lbnVQb3J0YWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQyKSB7XG4gIF9pbmhlcml0cyhNZW51UG9ydGFsLCBfQ29tcG9uZW50Mik7XG5cbiAgdmFyIF9zdXBlcjIgPSBfY3JlYXRlU3VwZXIoTWVudVBvcnRhbCk7XG5cbiAgZnVuY3Rpb24gTWVudVBvcnRhbCgpIHtcbiAgICB2YXIgX3RoaXMyO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1lbnVQb3J0YWwpO1xuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgX3RoaXMyID0gX3N1cGVyMi5jYWxsLmFwcGx5KF9zdXBlcjIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuICAgIF90aGlzMi5zdGF0ZSA9IHtcbiAgICAgIHBsYWNlbWVudDogbnVsbFxuICAgIH07XG5cbiAgICBfdGhpczIuZ2V0UG9ydGFsUGxhY2VtZW50ID0gZnVuY3Rpb24gKF9yZWY3KSB7XG4gICAgICB2YXIgcGxhY2VtZW50ID0gX3JlZjcucGxhY2VtZW50O1xuICAgICAgdmFyIGluaXRpYWxQbGFjZW1lbnQgPSBjb2VyY2VQbGFjZW1lbnQoX3RoaXMyLnByb3BzLm1lbnVQbGFjZW1lbnQpOyAvLyBhdm9pZCByZS1yZW5kZXJzIGlmIHRoZSBwbGFjZW1lbnQgaGFzIG5vdCBjaGFuZ2VkXG5cbiAgICAgIGlmIChwbGFjZW1lbnQgIT09IGluaXRpYWxQbGFjZW1lbnQpIHtcbiAgICAgICAgX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzMjtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNZW51UG9ydGFsLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYXBwZW5kVG8gPSBfdGhpcyRwcm9wczIuYXBwZW5kVG8sXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczIuY2hpbGRyZW4sXG4gICAgICAgICAgY29udHJvbEVsZW1lbnQgPSBfdGhpcyRwcm9wczIuY29udHJvbEVsZW1lbnQsXG4gICAgICAgICAgbWVudVBsYWNlbWVudCA9IF90aGlzJHByb3BzMi5tZW51UGxhY2VtZW50LFxuICAgICAgICAgIHBvc2l0aW9uID0gX3RoaXMkcHJvcHMyLm1lbnVQb3NpdGlvbixcbiAgICAgICAgICBnZXRTdHlsZXMgPSBfdGhpcyRwcm9wczIuZ2V0U3R5bGVzO1xuICAgICAgdmFyIGlzRml4ZWQgPSBwb3NpdGlvbiA9PT0gJ2ZpeGVkJzsgLy8gYmFpbCBlYXJseSBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmVuJ3QgcHJlc2VudFxuXG4gICAgICBpZiAoIWFwcGVuZFRvICYmICFpc0ZpeGVkIHx8ICFjb250cm9sRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHBsYWNlbWVudCA9IHRoaXMuc3RhdGUucGxhY2VtZW50IHx8IGNvZXJjZVBsYWNlbWVudChtZW51UGxhY2VtZW50KTtcbiAgICAgIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRPYmooY29udHJvbEVsZW1lbnQpO1xuICAgICAgdmFyIHNjcm9sbERpc3RhbmNlID0gaXNGaXhlZCA/IDAgOiB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICB2YXIgb2Zmc2V0ID0gcmVjdFtwbGFjZW1lbnRdICsgc2Nyb2xsRGlzdGFuY2U7XG4gICAgICB2YXIgc3RhdGUgPSB7XG4gICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICAgIHJlY3Q6IHJlY3RcbiAgICAgIH07IC8vIHNhbWUgd3JhcHBlciBlbGVtZW50IHdoZXRoZXIgZml4ZWQgb3IgcG9ydGFsbGVkXG5cbiAgICAgIHZhciBtZW51V3JhcHBlciA9IGpzeChcImRpdlwiLCB7XG4gICAgICAgIGNzczogZ2V0U3R5bGVzKCdtZW51UG9ydGFsJywgc3RhdGUpXG4gICAgICB9LCBjaGlsZHJlbik7XG4gICAgICByZXR1cm4ganN4KFBvcnRhbFBsYWNlbWVudENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICBnZXRQb3J0YWxQbGFjZW1lbnQ6IHRoaXMuZ2V0UG9ydGFsUGxhY2VtZW50XG4gICAgICAgIH1cbiAgICAgIH0sIGFwcGVuZFRvID8gLyojX19QVVJFX18qL2NyZWF0ZVBvcnRhbChtZW51V3JhcHBlciwgYXBwZW5kVG8pIDogbWVudVdyYXBwZXIpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNZW51UG9ydGFsO1xufShDb21wb25lbnQpO1xuXG52YXIgY29udGFpbmVyQ1NTID0gZnVuY3Rpb24gY29udGFpbmVyQ1NTKF9yZWYpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfcmVmLmlzRGlzYWJsZWQsXG4gICAgICBpc1J0bCA9IF9yZWYuaXNSdGw7XG4gIHJldHVybiB7XG4gICAgbGFiZWw6ICdjb250YWluZXInLFxuICAgIGRpcmVjdGlvbjogaXNSdGwgPyAncnRsJyA6IG51bGwsXG4gICAgcG9pbnRlckV2ZW50czogaXNEaXNhYmxlZCA/ICdub25lJyA6IG51bGwsXG4gICAgLy8gY2FuY2VsIG1vdXNlIGV2ZW50cyB3aGVuIGRpc2FibGVkXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfTtcbn07XG52YXIgU2VsZWN0Q29udGFpbmVyID0gZnVuY3Rpb24gU2VsZWN0Q29udGFpbmVyKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzLFxuICAgICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgICBpc1J0bCA9IHByb3BzLmlzUnRsO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjc3M6IGdldFN0eWxlcygnY29udGFpbmVyJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgJy0taXMtZGlzYWJsZWQnOiBpc0Rpc2FibGVkLFxuICAgICAgJy0taXMtcnRsJzogaXNSdGxcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFZhbHVlIENvbnRhaW5lclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciB2YWx1ZUNvbnRhaW5lckNTUyA9IGZ1bmN0aW9uIHZhbHVlQ29udGFpbmVyQ1NTKF9yZWYyKSB7XG4gIHZhciBzcGFjaW5nID0gX3JlZjIudGhlbWUuc3BhY2luZztcbiAgcmV0dXJuIHtcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleDogMSxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIHBhZGRpbmc6IFwiXCIuY29uY2F0KHNwYWNpbmcuYmFzZVVuaXQgLyAyLCBcInB4IFwiKS5jb25jYXQoc3BhY2luZy5iYXNlVW5pdCAqIDIsIFwicHhcIiksXG4gICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6ICd0b3VjaCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH07XG59O1xudmFyIFZhbHVlQ29udGFpbmVyID0gZnVuY3Rpb24gVmFsdWVDb250YWluZXIocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgaXNNdWx0aSA9IHByb3BzLmlzTXVsdGksXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBoYXNWYWx1ZSA9IHByb3BzLmhhc1ZhbHVlO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIHtcbiAgICBjc3M6IGdldFN0eWxlcygndmFsdWVDb250YWluZXInLCBwcm9wcyksXG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICAndmFsdWUtY29udGFpbmVyJzogdHJ1ZSxcbiAgICAgICd2YWx1ZS1jb250YWluZXItLWlzLW11bHRpJzogaXNNdWx0aSxcbiAgICAgICd2YWx1ZS1jb250YWluZXItLWhhcy12YWx1ZSc6IGhhc1ZhbHVlXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBjaGlsZHJlbik7XG59OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEluZGljYXRvciBDb250YWluZXJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgaW5kaWNhdG9yc0NvbnRhaW5lckNTUyA9IGZ1bmN0aW9uIGluZGljYXRvcnNDb250YWluZXJDU1MoKSB7XG4gIHJldHVybiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhTaHJpbms6IDBcbiAgfTtcbn07XG52YXIgSW5kaWNhdG9yc0NvbnRhaW5lciA9IGZ1bmN0aW9uIEluZGljYXRvcnNDb250YWluZXIocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIHtcbiAgICBjc3M6IGdldFN0eWxlcygnaW5kaWNhdG9yc0NvbnRhaW5lcicsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgIGluZGljYXRvcnM6IHRydWVcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGNoaWxkcmVuKTtcbn07XG5cbmZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdCgpIHtcbiAgdmFyIGRhdGEgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKFtcIlxcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cXG5cIl0pO1xuXG4gIF90ZW1wbGF0ZU9iamVjdCA9IGZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gX0VNT1RJT05fU1RSSU5HSUZJRURfQ1NTX0VSUk9SX18oKSB7IHJldHVybiBcIllvdSBoYXZlIHRyaWVkIHRvIHN0cmluZ2lmeSBvYmplY3QgcmV0dXJuZWQgZnJvbSBgY3NzYCBmdW5jdGlvbi4gSXQgaXNuJ3Qgc3VwcG9zZWQgdG8gYmUgdXNlZCBkaXJlY3RseSAoZS5nLiBhcyB2YWx1ZSBvZiB0aGUgYGNsYXNzTmFtZWAgcHJvcCksIGJ1dCByYXRoZXIgaGFuZGVkIHRvIGVtb3Rpb24gc28gaXQgY2FuIGhhbmRsZSBpdCAoZS5nLiBhcyB2YWx1ZSBvZiBgY3NzYCBwcm9wKS5cIjsgfVxuXG52YXIgX3JlZjIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIG5hbWU6IFwiOG1ta2NnXCIsXG4gIHN0eWxlczogXCJkaXNwbGF5OmlubGluZS1ibG9jaztmaWxsOmN1cnJlbnRDb2xvcjtsaW5lLWhlaWdodDoxO3N0cm9rZTpjdXJyZW50Q29sb3I7c3Ryb2tlLXdpZHRoOjBcIlxufSA6IHtcbiAgbmFtZTogXCJ0ajViZGUtU3ZnXCIsXG4gIHN0eWxlczogXCJkaXNwbGF5OmlubGluZS1ibG9jaztmaWxsOmN1cnJlbnRDb2xvcjtsaW5lLWhlaWdodDoxO3N0cm9rZTpjdXJyZW50Q29sb3I7c3Ryb2tlLXdpZHRoOjA7bGFiZWw6U3ZnO1wiLFxuICBtYXA6IFwiLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1sdVpHbGpZWFJ2Y25NdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJhMEpKSWl3aVptbHNaU0k2SW1sdVpHbGpZWFJ2Y25NdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2THlCQVpteHZkMXh1THlvcUlFQnFjM2dnYW5ONElDb3ZYRzVwYlhCdmNuUWdleUIwZVhCbElFNXZaR1VnZlNCbWNtOXRJQ2R5WldGamRDYzdYRzVwYlhCdmNuUWdleUJxYzNnc0lHdGxlV1p5WVcxbGN5QjlJR1p5YjIwZ0owQmxiVzkwYVc5dUwzSmxZV04wSnp0Y2JseHVhVzF3YjNKMElIUjVjR1VnZXlCRGIyMXRiMjVRY205d2N5d2dWR2hsYldVZ2ZTQm1jbTl0SUNjdUxpOTBlWEJsY3ljN1hHNWNiaTh2SUQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHVMeThnUkhKdmNHUnZkMjRnSmlCRGJHVmhjaUJKWTI5dWMxeHVMeThnUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhHNWNibU52Ym5OMElGTjJaeUE5SUNoN0lITnBlbVVzSUM0dUxuQnliM0J6SUgwNklIc2djMmw2WlRvZ2JuVnRZbVZ5SUgwcElEMCtJQ2hjYmlBZ1BITjJaMXh1SUNBZ0lHaGxhV2RvZEQxN2MybDZaWDFjYmlBZ0lDQjNhV1IwYUQxN2MybDZaWDFjYmlBZ0lDQjJhV1YzUW05NFBWd2lNQ0F3SURJd0lESXdYQ0pjYmlBZ0lDQmhjbWxoTFdocFpHUmxiajFjSW5SeWRXVmNJbHh1SUNBZ0lHWnZZM1Z6WVdKc1pUMWNJbVpoYkhObFhDSmNiaUFnSUNCamMzTTllM3RjYmlBZ0lDQWdJR1JwYzNCc1lYazZJQ2RwYm14cGJtVXRZbXh2WTJzbkxGeHVJQ0FnSUNBZ1ptbHNiRG9nSjJOMWNuSmxiblJEYjJ4dmNpY3NYRzRnSUNBZ0lDQnNhVzVsU0dWcFoyaDBPaUF4TEZ4dUlDQWdJQ0FnYzNSeWIydGxPaUFuWTNWeWNtVnVkRU52Ykc5eUp5eGNiaUFnSUNBZ0lITjBjbTlyWlZkcFpIUm9PaUF3TEZ4dUlDQWdJSDE5WEc0Z0lDQWdleTR1TG5CeWIzQnpmVnh1SUNBdlBseHVLVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJRU55YjNOelNXTnZiaUE5SUNod2NtOXdjem9nWVc1NUtTQTlQaUFvWEc0Z0lEeFRkbWNnYzJsNlpUMTdNakI5SUhzdUxpNXdjbTl3YzMwK1hHNGdJQ0FnUEhCaGRHZ2daRDFjSWsweE5DNHpORGdnTVRRdU9EUTVZeTB3TGpRMk9TQXdMalEyT1MweExqSXlPU0F3TGpRMk9TMHhMalk1TnlBd2JDMHlMalkxTVMwekxqQXpNQzB5TGpZMU1TQXpMakF5T1dNdE1DNDBOamtnTUM0ME5qa3RNUzR5TWprZ01DNDBOamt0TVM0Mk9UY2dNQzB3TGpRMk9TMHdMalEyT1Mwd0xqUTJPUzB4TGpJeU9TQXdMVEV1TmprM2JESXVOelU0TFRNdU1UVXRNaTQzTlRrdE15NHhOVEpqTFRBdU5EWTVMVEF1TkRZNUxUQXVORFk1TFRFdU1qSTRJREF0TVM0Mk9UZHpNUzR5TWpndE1DNDBOamtnTVM0Mk9UY2dNR3d5TGpZMU1pQXpMakF6TVNBeUxqWTFNUzB6TGpBek1XTXdMalEyT1Mwd0xqUTJPU0F4TGpJeU9DMHdMalEyT1NBeExqWTVOeUF3Y3pBdU5EWTVJREV1TWpJNUlEQWdNUzQyT1Rkc0xUSXVOelU0SURNdU1UVXlJREl1TnpVNElETXVNVFZqTUM0ME5qa2dNQzQwTmprZ01DNDBOamtnTVM0eU1qa2dNQ0F4TGpZNU9IcGNJaUF2UGx4dUlDQThMMU4yWno1Y2JpazdYRzVsZUhCdmNuUWdZMjl1YzNRZ1JHOTNia05vWlhaeWIyNGdQU0FvY0hKdmNITTZJR0Z1ZVNrZ1BUNGdLRnh1SUNBOFUzWm5JSE5wZW1VOWV6SXdmU0I3TGk0dWNISnZjSE45UGx4dUlDQWdJRHh3WVhSb0lHUTlYQ0pOTkM0MU1UWWdOeTQxTkRoak1DNDBNell0TUM0ME5EWWdNUzR3TkRNdE1DNDBPREVnTVM0MU56WWdNR3d6TGprd09DQXpMamMwTnlBekxqa3dPQzB6TGpjME4yTXdMalV6TXkwd0xqUTRNU0F4TGpFME1TMHdMalEwTmlBeExqVTNOQ0F3SURBdU5ETTJJREF1TkRRMUlEQXVOREE0SURFdU1UazNJREFnTVM0Mk1UVXRNQzQwTURZZ01DNDBNVGd0TkM0Mk9UVWdOQzQxTURJdE5DNDJPVFVnTkM0MU1ESXRNQzR5TVRjZ01DNHlNak10TUM0MU1ESWdNQzR6TXpVdE1DNDNPRGNnTUM0ek16VnpMVEF1TlRjdE1DNHhNVEl0TUM0M09Ea3RNQzR6TXpWak1DQXdMVFF1TWpnM0xUUXVNRGcwTFRRdU5qazFMVFF1TlRBeWN5MHdMalF6TmkweExqRTNJREF0TVM0Mk1UVjZYQ0lnTHo1Y2JpQWdQQzlUZG1jK1hHNHBPMXh1WEc0dkx5QTlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjYmk4dklFUnliM0JrYjNkdUlDWWdRMnhsWVhJZ1FuVjBkRzl1YzF4dUx5OGdQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEc1Y2JtVjRjRzl5ZENCMGVYQmxJRWx1WkdsallYUnZjbEJ5YjNCeklEMGdRMjl0Ylc5dVVISnZjSE1nSmlCN1hHNGdJQzhxS2lCVWFHVWdZMmhwYkdSeVpXNGdkRzhnWW1VZ2NtVnVaR1Z5WldRZ2FXNXphV1JsSUhSb1pTQnBibVJwWTJGMGIzSXVJQ292WEc0Z0lHTm9hV3hrY21WdU9pQk9iMlJsTEZ4dUlDQXZLaW9nVUhKdmNITWdkR2hoZENCM2FXeHNJR0psSUhCaGMzTmxaQ0J2YmlCMGJ5QjBhR1VnWTJocGJHUnlaVzR1SUNvdlhHNGdJR2x1Ym1WeVVISnZjSE02SUdGdWVTeGNiaUFnTHlvcUlGUm9aU0JtYjJOMWMyVmtJSE4wWVhSbElHOW1JSFJvWlNCelpXeGxZM1F1SUNvdlhHNGdJR2x6Um05amRYTmxaRG9nWW05dmJHVmhiaXhjYmlBZ0x5b3FJRmRvWlhSb1pYSWdkR2hsSUhSbGVIUWdhWE1nY21sbmFIUWdkRzhnYkdWbWRDQXFMMXh1SUNCcGMxSjBiRG9nWW05dmJHVmhiaXhjYm4wN1hHNWNibU52Ym5OMElHSmhjMlZEVTFNZ1BTQW9lMXh1SUNCcGMwWnZZM1Z6WldRc1hHNGdJSFJvWlcxbE9pQjdYRzRnSUNBZ2MzQmhZMmx1WnpvZ2V5QmlZWE5sVlc1cGRDQjlMRnh1SUNBZ0lHTnZiRzl5Y3l4Y2JpQWdmU3hjYm4wNklFbHVaR2xqWVhSdmNsQnliM0J6S1NBOVBpQW9lMXh1SUNCc1lXSmxiRG9nSjJsdVpHbGpZWFJ2Y2tOdmJuUmhhVzVsY2ljc1hHNGdJR052Ykc5eU9pQnBjMFp2WTNWelpXUWdQeUJqYjJ4dmNuTXVibVYxZEhKaGJEWXdJRG9nWTI5c2IzSnpMbTVsZFhSeVlXd3lNQ3hjYmlBZ1pHbHpjR3hoZVRvZ0oyWnNaWGduTEZ4dUlDQndZV1JrYVc1bk9pQmlZWE5sVlc1cGRDQXFJRElzWEc0Z0lIUnlZVzV6YVhScGIyNDZJQ2RqYjJ4dmNpQXhOVEJ0Y3ljc1hHNWNiaUFnSnpwb2IzWmxjaWM2SUh0Y2JpQWdJQ0JqYjJ4dmNqb2dhWE5HYjJOMWMyVmtJRDhnWTI5c2IzSnpMbTVsZFhSeVlXdzRNQ0E2SUdOdmJHOXljeTV1WlhWMGNtRnNOREFzWEc0Z0lIMHNYRzU5S1R0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdSeWIzQmtiM2R1U1c1a2FXTmhkRzl5UTFOVElEMGdZbUZ6WlVOVFV6dGNibVY0Y0c5eWRDQmpiMjV6ZENCRWNtOXdaRzkzYmtsdVpHbGpZWFJ2Y2lBOUlDaHdjbTl3Y3pvZ1NXNWthV05oZEc5eVVISnZjSE1wSUQwK0lIdGNiaUFnWTI5dWMzUWdleUJqYUdsc1pISmxiaXdnWTJ4aGMzTk9ZVzFsTENCamVDd2daMlYwVTNSNWJHVnpMQ0JwYm01bGNsQnliM0J6SUgwZ1BTQndjbTl3Y3p0Y2JpQWdjbVYwZFhKdUlDaGNiaUFnSUNBOFpHbDJYRzRnSUNBZ0lDQjdMaTR1YVc1dVpYSlFjbTl3YzMxY2JpQWdJQ0FnSUdOemN6MTdaMlYwVTNSNWJHVnpLQ2RrY205d1pHOTNia2x1WkdsallYUnZjaWNzSUhCeWIzQnpLWDFjYmlBZ0lDQWdJR05zWVhOelRtRnRaVDE3WTNnb1hHNGdJQ0FnSUNBZ0lIdGNiaUFnSUNBZ0lDQWdJQ0JwYm1ScFkyRjBiM0k2SUhSeWRXVXNYRzRnSUNBZ0lDQWdJQ0FnSjJSeWIzQmtiM2R1TFdsdVpHbGpZWFJ2Y2ljNklIUnlkV1VzWEc0Z0lDQWdJQ0FnSUgwc1hHNGdJQ0FnSUNBZ0lHTnNZWE56VG1GdFpWeHVJQ0FnSUNBZ0tYMWNiaUFnSUNBK1hHNGdJQ0FnSUNCN1kyaHBiR1J5Wlc0Z2ZId2dQRVJ2ZDI1RGFHVjJjbTl1SUM4K2ZWeHVJQ0FnSUR3dlpHbDJQbHh1SUNBcE8xeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR05zWldGeVNXNWthV05oZEc5eVExTlRJRDBnWW1GelpVTlRVenRjYm1WNGNHOXlkQ0JqYjI1emRDQkRiR1ZoY2tsdVpHbGpZWFJ2Y2lBOUlDaHdjbTl3Y3pvZ1NXNWthV05oZEc5eVVISnZjSE1wSUQwK0lIdGNiaUFnWTI5dWMzUWdleUJqYUdsc1pISmxiaXdnWTJ4aGMzTk9ZVzFsTENCamVDd2daMlYwVTNSNWJHVnpMQ0JwYm01bGNsQnliM0J6SUgwZ1BTQndjbTl3Y3p0Y2JpQWdjbVYwZFhKdUlDaGNiaUFnSUNBOFpHbDJYRzRnSUNBZ0lDQjdMaTR1YVc1dVpYSlFjbTl3YzMxY2JpQWdJQ0FnSUdOemN6MTdaMlYwVTNSNWJHVnpLQ2RqYkdWaGNrbHVaR2xqWVhSdmNpY3NJSEJ5YjNCektYMWNiaUFnSUNBZ0lHTnNZWE56VG1GdFpUMTdZM2dvWEc0Z0lDQWdJQ0FnSUh0Y2JpQWdJQ0FnSUNBZ0lDQnBibVJwWTJGMGIzSTZJSFJ5ZFdVc1hHNGdJQ0FnSUNBZ0lDQWdKMk5zWldGeUxXbHVaR2xqWVhSdmNpYzZJSFJ5ZFdVc1hHNGdJQ0FnSUNBZ0lIMHNYRzRnSUNBZ0lDQWdJR05zWVhOelRtRnRaVnh1SUNBZ0lDQWdLWDFjYmlBZ0lDQStYRzRnSUNBZ0lDQjdZMmhwYkdSeVpXNGdmSHdnUEVOeWIzTnpTV052YmlBdlBuMWNiaUFnSUNBOEwyUnBkajVjYmlBZ0tUdGNibjA3WEc1Y2JpOHZJRDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFZ4dUx5OGdVMlZ3WVhKaGRHOXlYRzR2THlBOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNibHh1ZEhsd1pTQlRaWEJoY21GMGIzSlRkR0YwWlNBOUlIc2dhWE5FYVhOaFlteGxaRG9nWW05dmJHVmhiaUI5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVc1a2FXTmhkRzl5VTJWd1lYSmhkRzl5UTFOVElEMGdLSHRjYmlBZ2FYTkVhWE5oWW14bFpDeGNiaUFnZEdobGJXVTZJSHRjYmlBZ0lDQnpjR0ZqYVc1bk9pQjdJR0poYzJWVmJtbDBJSDBzWEc0Z0lDQWdZMjlzYjNKekxGeHVJQ0I5TEZ4dWZUb2dRMjl0Ylc5dVVISnZjSE1nSmlCVFpYQmhjbUYwYjNKVGRHRjBaU2tnUFQ0Z0tIdGNiaUFnYkdGaVpXdzZJQ2RwYm1ScFkyRjBiM0pUWlhCaGNtRjBiM0luTEZ4dUlDQmhiR2xuYmxObGJHWTZJQ2R6ZEhKbGRHTm9KeXhjYmlBZ1ltRmphMmR5YjNWdVpFTnZiRzl5T2lCcGMwUnBjMkZpYkdWa0lEOGdZMjlzYjNKekxtNWxkWFJ5WVd3eE1DQTZJR052Ykc5eWN5NXVaWFYwY21Gc01qQXNYRzRnSUcxaGNtZHBia0p2ZEhSdmJUb2dZbUZ6WlZWdWFYUWdLaUF5TEZ4dUlDQnRZWEpuYVc1VWIzQTZJR0poYzJWVmJtbDBJQ29nTWl4Y2JpQWdkMmxrZEdnNklERXNYRzU5S1R0Y2JseHVaWGh3YjNKMElHTnZibk4wSUVsdVpHbGpZWFJ2Y2xObGNHRnlZWFJ2Y2lBOUlDaHdjbTl3Y3pvZ1NXNWthV05oZEc5eVVISnZjSE1wSUQwK0lIdGNiaUFnWTI5dWMzUWdleUJqYkdGemMwNWhiV1VzSUdONExDQm5aWFJUZEhsc1pYTXNJR2x1Ym1WeVVISnZjSE1nZlNBOUlIQnliM0J6TzF4dUlDQnlaWFIxY200Z0tGeHVJQ0FnSUR4emNHRnVYRzRnSUNBZ0lDQjdMaTR1YVc1dVpYSlFjbTl3YzMxY2JpQWdJQ0FnSUdOemN6MTdaMlYwVTNSNWJHVnpLQ2RwYm1ScFkyRjBiM0pUWlhCaGNtRjBiM0luTENCd2NtOXdjeWw5WEc0Z0lDQWdJQ0JqYkdGemMwNWhiV1U5ZTJONEtIc2dKMmx1WkdsallYUnZjaTF6WlhCaGNtRjBiM0luT2lCMGNuVmxJSDBzSUdOc1lYTnpUbUZ0WlNsOVhHNGdJQ0FnTHo1Y2JpQWdLVHRjYm4wN1hHNWNiaTh2SUQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHVMeThnVEc5aFpHbHVaMXh1THk4Z1BUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYRzVjYm1OdmJuTjBJR3h2WVdScGJtZEViM1JCYm1sdFlYUnBiMjV6SUQwZ2EyVjVabkpoYldWellGeHVJQ0F3SlN3Z09EQWxMQ0F4TURBbElIc2diM0JoWTJsMGVUb2dNRHNnZlZ4dUlDQTBNQ1VnZXlCdmNHRmphWFI1T2lBeE95QjlYRzVnTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYkc5aFpHbHVaMGx1WkdsallYUnZja05UVXlBOUlDaDdYRzRnSUdselJtOWpkWE5sWkN4Y2JpQWdjMmw2WlN4Y2JpQWdkR2hsYldVNklIdGNiaUFnSUNCamIyeHZjbk1zWEc0Z0lDQWdjM0JoWTJsdVp6b2dleUJpWVhObFZXNXBkQ0I5TEZ4dUlDQjlMRnh1ZlRvZ2UxeHVJQ0JwYzBadlkzVnpaV1E2SUdKdmIyeGxZVzRzWEc0Z0lITnBlbVU2SUc1MWJXSmxjaXhjYmlBZ2RHaGxiV1U2SUZSb1pXMWxMRnh1ZlNrZ1BUNGdLSHRjYmlBZ2JHRmlaV3c2SUNkc2IyRmthVzVuU1c1a2FXTmhkRzl5Snl4Y2JpQWdZMjlzYjNJNklHbHpSbTlqZFhObFpDQS9JR052Ykc5eWN5NXVaWFYwY21Gc05qQWdPaUJqYjJ4dmNuTXVibVYxZEhKaGJESXdMRnh1SUNCa2FYTndiR0Y1T2lBblpteGxlQ2NzWEc0Z0lIQmhaR1JwYm1jNklHSmhjMlZWYm1sMElDb2dNaXhjYmlBZ2RISmhibk5wZEdsdmJqb2dKMk52Ykc5eUlERTFNRzF6Snl4Y2JpQWdZV3hwWjI1VFpXeG1PaUFuWTJWdWRHVnlKeXhjYmlBZ1ptOXVkRk5wZW1VNklITnBlbVVzWEc0Z0lHeHBibVZJWldsbmFIUTZJREVzWEc0Z0lHMWhjbWRwYmxKcFoyaDBPaUJ6YVhwbExGeHVJQ0IwWlhoMFFXeHBaMjQ2SUNkalpXNTBaWEluTEZ4dUlDQjJaWEowYVdOaGJFRnNhV2R1T2lBbmJXbGtaR3hsSnl4Y2JuMHBPMXh1WEc1MGVYQmxJRVJ2ZEZCeWIzQnpJRDBnZXlCa1pXeGhlVG9nYm5WdFltVnlMQ0J2Wm1aelpYUTZJR0p2YjJ4bFlXNGdmVHRjYm1OdmJuTjBJRXh2WVdScGJtZEViM1FnUFNBb2V5QmtaV3hoZVN3Z2IyWm1jMlYwSUgwNklFUnZkRkJ5YjNCektTQTlQaUFvWEc0Z0lEeHpjR0Z1WEc0Z0lDQWdZM056UFh0N1hHNGdJQ0FnSUNCaGJtbHRZWFJwYjI0NklHQWtlMnh2WVdScGJtZEViM1JCYm1sdFlYUnBiMjV6ZlNBeGN5QmxZWE5sTFdsdUxXOTFkQ0FrZTJSbGJHRjVmVzF6SUdsdVptbHVhWFJsTzJBc1hHNGdJQ0FnSUNCaVlXTnJaM0p2ZFc1a1EyOXNiM0k2SUNkamRYSnlaVzUwUTI5c2IzSW5MRnh1SUNBZ0lDQWdZbTl5WkdWeVVtRmthWFZ6T2lBbk1XVnRKeXhjYmlBZ0lDQWdJR1JwYzNCc1lYazZJQ2RwYm14cGJtVXRZbXh2WTJzbkxGeHVJQ0FnSUNBZ2JXRnlaMmx1VEdWbWREb2diMlptYzJWMElEOGdKekZsYlNjZ09pQnVkV3hzTEZ4dUlDQWdJQ0FnYUdWcFoyaDBPaUFuTVdWdEp5eGNiaUFnSUNBZ0lIWmxjblJwWTJGc1FXeHBaMjQ2SUNkMGIzQW5MRnh1SUNBZ0lDQWdkMmxrZEdnNklDY3haVzBuTEZ4dUlDQWdJSDE5WEc0Z0lDOCtYRzRwTzF4dVhHNWxlSEJ2Y25RZ2RIbHdaU0JNYjJGa2FXNW5TV052YmxCeWIzQnpJRDBnZTF4dUlDQXZLaW9nVUhKdmNITWdkR2hoZENCM2FXeHNJR0psSUhCaGMzTmxaQ0J2YmlCMGJ5QjBhR1VnWTJocGJHUnlaVzR1SUNvdlhHNGdJR2x1Ym1WeVVISnZjSE02SUdGdWVTeGNiaUFnTHlvcUlGUm9aU0JtYjJOMWMyVmtJSE4wWVhSbElHOW1JSFJvWlNCelpXeGxZM1F1SUNvdlhHNGdJR2x6Um05amRYTmxaRG9nWW05dmJHVmhiaXhjYmlBZ0x5b3FJRmRvWlhSb1pYSWdkR2hsSUhSbGVIUWdhWE1nY21sbmFIUWdkRzhnYkdWbWRDQXFMMXh1SUNCcGMxSjBiRG9nWW05dmJHVmhiaXhjYm4wZ0ppQkRiMjF0YjI1UWNtOXdjeUFtSUh0Y2JpQWdJQ0F2S2lvZ1UyVjBJSE5wZW1VZ2IyWWdkR2hsSUdOdmJuUmhhVzVsY2k0Z0tpOWNiaUFnSUNCemFYcGxPaUJ1ZFcxaVpYSXNYRzRnSUgwN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnVEc5aFpHbHVaMGx1WkdsallYUnZjaUE5SUNod2NtOXdjem9nVEc5aFpHbHVaMGxqYjI1UWNtOXdjeWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQjdJR05zWVhOelRtRnRaU3dnWTNnc0lHZGxkRk4wZVd4bGN5d2dhVzV1WlhKUWNtOXdjeXdnYVhOU2RHd2dmU0E5SUhCeWIzQnpPMXh1WEc0Z0lISmxkSFZ5YmlBb1hHNGdJQ0FnUEdScGRseHVJQ0FnSUNBZ2V5NHVMbWx1Ym1WeVVISnZjSE45WEc0Z0lDQWdJQ0JqYzNNOWUyZGxkRk4wZVd4bGN5Z25iRzloWkdsdVowbHVaR2xqWVhSdmNpY3NJSEJ5YjNCektYMWNiaUFnSUNBZ0lHTnNZWE56VG1GdFpUMTdZM2dvWEc0Z0lDQWdJQ0FnSUh0Y2JpQWdJQ0FnSUNBZ0lDQnBibVJwWTJGMGIzSTZJSFJ5ZFdVc1hHNGdJQ0FnSUNBZ0lDQWdKMnh2WVdScGJtY3RhVzVrYVdOaGRHOXlKem9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnWTJ4aGMzTk9ZVzFsWEc0Z0lDQWdJQ0FwZlZ4dUlDQWdJRDVjYmlBZ0lDQWdJRHhNYjJGa2FXNW5SRzkwSUdSbGJHRjVQWHN3ZlNCdlptWnpaWFE5ZTJselVuUnNmU0F2UGx4dUlDQWdJQ0FnUEV4dllXUnBibWRFYjNRZ1pHVnNZWGs5ZXpFMk1IMGdiMlptYzJWMElDOCtYRzRnSUNBZ0lDQThURzloWkdsdVowUnZkQ0JrWld4aGVUMTdNekl3ZlNCdlptWnpaWFE5ZXlGcGMxSjBiSDBnTHo1Y2JpQWdJQ0E4TDJScGRqNWNiaUFnS1R0Y2JuMDdYRzVNYjJGa2FXNW5TVzVrYVdOaGRHOXlMbVJsWm1GMWJIUlFjbTl3Y3lBOUlIc2djMmw2WlRvZ05DQjlPMXh1SWwxOSAqL1wiLFxuICB0b1N0cmluZzogX0VNT1RJT05fU1RSSU5HSUZJRURfQ1NTX0VSUk9SX19cbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBJY29uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgU3ZnID0gZnVuY3Rpb24gU3ZnKF9yZWYpIHtcbiAgdmFyIHNpemUgPSBfcmVmLnNpemUsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJzaXplXCJdKTtcblxuICByZXR1cm4ganN4KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICBoZWlnaHQ6IHNpemUsXG4gICAgd2lkdGg6IHNpemUsXG4gICAgdmlld0JveDogXCIwIDAgMjAgMjBcIixcbiAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgIGZvY3VzYWJsZTogXCJmYWxzZVwiLFxuICAgIGNzczogX3JlZjJcbiAgfSwgcHJvcHMpKTtcbn07XG5cbnZhciBDcm9zc0ljb24gPSBmdW5jdGlvbiBDcm9zc0ljb24ocHJvcHMpIHtcbiAgcmV0dXJuIGpzeChTdmcsIF9leHRlbmRzKHtcbiAgICBzaXplOiAyMFxuICB9LCBwcm9wcyksIGpzeChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiXG4gIH0pKTtcbn07XG52YXIgRG93bkNoZXZyb24gPSBmdW5jdGlvbiBEb3duQ2hldnJvbihwcm9wcykge1xuICByZXR1cm4ganN4KFN2ZywgX2V4dGVuZHMoe1xuICAgIHNpemU6IDIwXG4gIH0sIHByb3BzKSwganN4KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCJcbiAgfSkpO1xufTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEJ1dHRvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgYmFzZUNTUyA9IGZ1bmN0aW9uIGJhc2VDU1MoX3JlZjMpIHtcbiAgdmFyIGlzRm9jdXNlZCA9IF9yZWYzLmlzRm9jdXNlZCxcbiAgICAgIF9yZWYzJHRoZW1lID0gX3JlZjMudGhlbWUsXG4gICAgICBiYXNlVW5pdCA9IF9yZWYzJHRoZW1lLnNwYWNpbmcuYmFzZVVuaXQsXG4gICAgICBjb2xvcnMgPSBfcmVmMyR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiB7XG4gICAgbGFiZWw6ICdpbmRpY2F0b3JDb250YWluZXInLFxuICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICAgIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDgwIDogY29sb3JzLm5ldXRyYWw0MFxuICAgIH1cbiAgfTtcbn07XG5cbnZhciBkcm9wZG93bkluZGljYXRvckNTUyA9IGJhc2VDU1M7XG52YXIgRHJvcGRvd25JbmRpY2F0b3IgPSBmdW5jdGlvbiBEcm9wZG93bkluZGljYXRvcihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgaW5uZXJQcm9wcywge1xuICAgIGNzczogZ2V0U3R5bGVzKCdkcm9wZG93bkluZGljYXRvcicsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9KSwgY2hpbGRyZW4gfHwganN4KERvd25DaGV2cm9uLCBudWxsKSk7XG59O1xudmFyIGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbnZhciBDbGVhckluZGljYXRvciA9IGZ1bmN0aW9uIENsZWFySW5kaWNhdG9yKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBpbm5lclByb3BzLCB7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ2NsZWFySW5kaWNhdG9yJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWVcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0pLCBjaGlsZHJlbiB8fCBqc3goQ3Jvc3NJY29uLCBudWxsKSk7XG59OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNlcGFyYXRvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSBmdW5jdGlvbiBpbmRpY2F0b3JTZXBhcmF0b3JDU1MoX3JlZjQpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfcmVmNC5pc0Rpc2FibGVkLFxuICAgICAgX3JlZjQkdGhlbWUgPSBfcmVmNC50aGVtZSxcbiAgICAgIGJhc2VVbml0ID0gX3JlZjQkdGhlbWUuc3BhY2luZy5iYXNlVW5pdCxcbiAgICAgIGNvbG9ycyA9IF9yZWY0JHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ2luZGljYXRvclNlcGFyYXRvcicsXG4gICAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgbWFyZ2luQm90dG9tOiBiYXNlVW5pdCAqIDIsXG4gICAgbWFyZ2luVG9wOiBiYXNlVW5pdCAqIDIsXG4gICAgd2lkdGg6IDFcbiAgfTtcbn07XG52YXIgSW5kaWNhdG9yU2VwYXJhdG9yID0gZnVuY3Rpb24gSW5kaWNhdG9yU2VwYXJhdG9yKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJzcGFuXCIsIF9leHRlbmRzKHt9LCBpbm5lclByb3BzLCB7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ2luZGljYXRvclNlcGFyYXRvcicsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZVxuICAgIH0sIGNsYXNzTmFtZSlcbiAgfSkpO1xufTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGxvYWRpbmdEb3RBbmltYXRpb25zID0ga2V5ZnJhbWVzKF90ZW1wbGF0ZU9iamVjdCgpKTtcbnZhciBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gZnVuY3Rpb24gbG9hZGluZ0luZGljYXRvckNTUyhfcmVmNSkge1xuICB2YXIgaXNGb2N1c2VkID0gX3JlZjUuaXNGb2N1c2VkLFxuICAgICAgc2l6ZSA9IF9yZWY1LnNpemUsXG4gICAgICBfcmVmNSR0aGVtZSA9IF9yZWY1LnRoZW1lLFxuICAgICAgY29sb3JzID0gX3JlZjUkdGhlbWUuY29sb3JzLFxuICAgICAgYmFzZVVuaXQgPSBfcmVmNSR0aGVtZS5zcGFjaW5nLmJhc2VVbml0O1xuICByZXR1cm4ge1xuICAgIGxhYmVsOiAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICAgIGZvbnRTaXplOiBzaXplLFxuICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ1xuICB9O1xufTtcblxudmFyIExvYWRpbmdEb3QgPSBmdW5jdGlvbiBMb2FkaW5nRG90KF9yZWY2KSB7XG4gIHZhciBkZWxheSA9IF9yZWY2LmRlbGF5LFxuICAgICAgb2Zmc2V0ID0gX3JlZjYub2Zmc2V0O1xuICByZXR1cm4ganN4KFwic3BhblwiLCB7XG4gICAgY3NzOiAvKiNfX1BVUkVfXyovY3NzJDIoe1xuICAgICAgYW5pbWF0aW9uOiBcIlwiLmNvbmNhdChsb2FkaW5nRG90QW5pbWF0aW9ucywgXCIgMXMgZWFzZS1pbi1vdXQgXCIpLmNvbmNhdChkZWxheSwgXCJtcyBpbmZpbml0ZTtcIiksXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiBudWxsLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nXG4gICAgfSwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gXCJcIiA6IFwiO2xhYmVsOkxvYWRpbmdEb3Q7XCIsIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IFwiXCIgOiBcIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltbHVaR2xqWVhSdmNuTXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCYzB4Sklpd2labWxzWlNJNkltbHVaR2xqWVhSdmNuTXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdkx5QkFabXh2ZDF4dUx5b3FJRUJxYzNnZ2FuTjRJQ292WEc1cGJYQnZjblFnZXlCMGVYQmxJRTV2WkdVZ2ZTQm1jbTl0SUNkeVpXRmpkQ2M3WEc1cGJYQnZjblFnZXlCcWMzZ3NJR3RsZVdaeVlXMWxjeUI5SUdaeWIyMGdKMEJsYlc5MGFXOXVMM0psWVdOMEp6dGNibHh1YVcxd2IzSjBJSFI1Y0dVZ2V5QkRiMjF0YjI1UWNtOXdjeXdnVkdobGJXVWdmU0JtY205dElDY3VMaTkwZVhCbGN5YzdYRzVjYmk4dklEMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh1THk4Z1JISnZjR1J2ZDI0Z0ppQkRiR1ZoY2lCSlkyOXVjMXh1THk4Z1BUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYRzVjYm1OdmJuTjBJRk4yWnlBOUlDaDdJSE5wZW1Vc0lDNHVMbkJ5YjNCeklIMDZJSHNnYzJsNlpUb2diblZ0WW1WeUlIMHBJRDArSUNoY2JpQWdQSE4yWjF4dUlDQWdJR2hsYVdkb2REMTdjMmw2WlgxY2JpQWdJQ0IzYVdSMGFEMTdjMmw2WlgxY2JpQWdJQ0IyYVdWM1FtOTRQVndpTUNBd0lESXdJREl3WENKY2JpQWdJQ0JoY21saExXaHBaR1JsYmoxY0luUnlkV1ZjSWx4dUlDQWdJR1p2WTNWellXSnNaVDFjSW1aaGJITmxYQ0pjYmlBZ0lDQmpjM005ZTN0Y2JpQWdJQ0FnSUdScGMzQnNZWGs2SUNkcGJteHBibVV0WW14dlkyc25MRnh1SUNBZ0lDQWdabWxzYkRvZ0oyTjFjbkpsYm5SRGIyeHZjaWNzWEc0Z0lDQWdJQ0JzYVc1bFNHVnBaMmgwT2lBeExGeHVJQ0FnSUNBZ2MzUnliMnRsT2lBblkzVnljbVZ1ZEVOdmJHOXlKeXhjYmlBZ0lDQWdJSE4wY205clpWZHBaSFJvT2lBd0xGeHVJQ0FnSUgxOVhHNGdJQ0FnZXk0dUxuQnliM0J6ZlZ4dUlDQXZQbHh1S1R0Y2JseHVaWGh3YjNKMElHTnZibk4wSUVOeWIzTnpTV052YmlBOUlDaHdjbTl3Y3pvZ1lXNTVLU0E5UGlBb1hHNGdJRHhUZG1jZ2MybDZaVDE3TWpCOUlIc3VMaTV3Y205d2MzMCtYRzRnSUNBZ1BIQmhkR2dnWkQxY0lrMHhOQzR6TkRnZ01UUXVPRFE1WXkwd0xqUTJPU0F3TGpRMk9TMHhMakl5T1NBd0xqUTJPUzB4TGpZNU55QXdiQzB5TGpZMU1TMHpMakF6TUMweUxqWTFNU0F6TGpBeU9XTXRNQzQwTmprZ01DNDBOamt0TVM0eU1qa2dNQzQwTmprdE1TNDJPVGNnTUMwd0xqUTJPUzB3TGpRMk9TMHdMalEyT1MweExqSXlPU0F3TFRFdU5qazNiREl1TnpVNExUTXVNVFV0TWk0M05Ua3RNeTR4TlRKakxUQXVORFk1TFRBdU5EWTVMVEF1TkRZNUxURXVNakk0SURBdE1TNDJPVGR6TVM0eU1qZ3RNQzQwTmprZ01TNDJPVGNnTUd3eUxqWTFNaUF6TGpBek1TQXlMalkxTVMwekxqQXpNV013TGpRMk9TMHdMalEyT1NBeExqSXlPQzB3TGpRMk9TQXhMalk1TnlBd2N6QXVORFk1SURFdU1qSTVJREFnTVM0Mk9UZHNMVEl1TnpVNElETXVNVFV5SURJdU56VTRJRE11TVRWak1DNDBOamtnTUM0ME5qa2dNQzQwTmprZ01TNHlNamtnTUNBeExqWTVPSHBjSWlBdlBseHVJQ0E4TDFOMlp6NWNiaWs3WEc1bGVIQnZjblFnWTI5dWMzUWdSRzkzYmtOb1pYWnliMjRnUFNBb2NISnZjSE02SUdGdWVTa2dQVDRnS0Z4dUlDQThVM1puSUhOcGVtVTllekl3ZlNCN0xpNHVjSEp2Y0hOOVBseHVJQ0FnSUR4d1lYUm9JR1E5WENKTk5DNDFNVFlnTnk0MU5EaGpNQzQwTXpZdE1DNDBORFlnTVM0d05ETXRNQzQwT0RFZ01TNDFOellnTUd3ekxqa3dPQ0F6TGpjME55QXpMamt3T0MwekxqYzBOMk13TGpVek15MHdMalE0TVNBeExqRTBNUzB3TGpRME5pQXhMalUzTkNBd0lEQXVORE0ySURBdU5EUTFJREF1TkRBNElERXVNVGszSURBZ01TNDJNVFV0TUM0ME1EWWdNQzQwTVRndE5DNDJPVFVnTkM0MU1ESXROQzQyT1RVZ05DNDFNREl0TUM0eU1UY2dNQzR5TWpNdE1DNDFNRElnTUM0ek16VXRNQzQzT0RjZ01DNHpNelZ6TFRBdU5UY3RNQzR4TVRJdE1DNDNPRGt0TUM0ek16VmpNQ0F3TFRRdU1qZzNMVFF1TURnMExUUXVOamsxTFRRdU5UQXljeTB3TGpRek5pMHhMakUzSURBdE1TNDJNVFY2WENJZ0x6NWNiaUFnUEM5VGRtYytYRzRwTzF4dVhHNHZMeUE5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2JpOHZJRVJ5YjNCa2IzZHVJQ1lnUTJ4bFlYSWdRblYwZEc5dWMxeHVMeThnUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhHNWNibVY0Y0c5eWRDQjBlWEJsSUVsdVpHbGpZWFJ2Y2xCeWIzQnpJRDBnUTI5dGJXOXVVSEp2Y0hNZ0ppQjdYRzRnSUM4cUtpQlVhR1VnWTJocGJHUnlaVzRnZEc4Z1ltVWdjbVZ1WkdWeVpXUWdhVzV6YVdSbElIUm9aU0JwYm1ScFkyRjBiM0l1SUNvdlhHNGdJR05vYVd4a2NtVnVPaUJPYjJSbExGeHVJQ0F2S2lvZ1VISnZjSE1nZEdoaGRDQjNhV3hzSUdKbElIQmhjM05sWkNCdmJpQjBieUIwYUdVZ1kyaHBiR1J5Wlc0dUlDb3ZYRzRnSUdsdWJtVnlVSEp2Y0hNNklHRnVlU3hjYmlBZ0x5b3FJRlJvWlNCbWIyTjFjMlZrSUhOMFlYUmxJRzltSUhSb1pTQnpaV3hsWTNRdUlDb3ZYRzRnSUdselJtOWpkWE5sWkRvZ1ltOXZiR1ZoYml4Y2JpQWdMeW9xSUZkb1pYUm9aWElnZEdobElIUmxlSFFnYVhNZ2NtbG5hSFFnZEc4Z2JHVm1kQ0FxTDF4dUlDQnBjMUowYkRvZ1ltOXZiR1ZoYml4Y2JuMDdYRzVjYm1OdmJuTjBJR0poYzJWRFUxTWdQU0FvZTF4dUlDQnBjMFp2WTNWelpXUXNYRzRnSUhSb1pXMWxPaUI3WEc0Z0lDQWdjM0JoWTJsdVp6b2dleUJpWVhObFZXNXBkQ0I5TEZ4dUlDQWdJR052Ykc5eWN5eGNiaUFnZlN4Y2JuMDZJRWx1WkdsallYUnZjbEJ5YjNCektTQTlQaUFvZTF4dUlDQnNZV0psYkRvZ0oybHVaR2xqWVhSdmNrTnZiblJoYVc1bGNpY3NYRzRnSUdOdmJHOXlPaUJwYzBadlkzVnpaV1FnUHlCamIyeHZjbk11Ym1WMWRISmhiRFl3SURvZ1kyOXNiM0p6TG01bGRYUnlZV3d5TUN4Y2JpQWdaR2x6Y0d4aGVUb2dKMlpzWlhnbkxGeHVJQ0J3WVdSa2FXNW5PaUJpWVhObFZXNXBkQ0FxSURJc1hHNGdJSFJ5WVc1emFYUnBiMjQ2SUNkamIyeHZjaUF4TlRCdGN5Y3NYRzVjYmlBZ0p6cG9iM1psY2ljNklIdGNiaUFnSUNCamIyeHZjam9nYVhOR2IyTjFjMlZrSUQ4Z1kyOXNiM0p6TG01bGRYUnlZV3c0TUNBNklHTnZiRzl5Y3k1dVpYVjBjbUZzTkRBc1hHNGdJSDBzWEc1OUtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHUnliM0JrYjNkdVNXNWthV05oZEc5eVExTlRJRDBnWW1GelpVTlRVenRjYm1WNGNHOXlkQ0JqYjI1emRDQkVjbTl3Wkc5M2JrbHVaR2xqWVhSdmNpQTlJQ2h3Y205d2N6b2dTVzVrYVdOaGRHOXlVSEp2Y0hNcElEMCtJSHRjYmlBZ1kyOXVjM1FnZXlCamFHbHNaSEpsYml3Z1kyeGhjM05PWVcxbExDQmplQ3dnWjJWMFUzUjViR1Z6TENCcGJtNWxjbEJ5YjNCeklIMGdQU0J3Y205d2N6dGNiaUFnY21WMGRYSnVJQ2hjYmlBZ0lDQThaR2wyWEc0Z0lDQWdJQ0I3TGk0dWFXNXVaWEpRY205d2MzMWNiaUFnSUNBZ0lHTnpjejE3WjJWMFUzUjViR1Z6S0Nka2NtOXdaRzkzYmtsdVpHbGpZWFJ2Y2ljc0lIQnliM0J6S1gxY2JpQWdJQ0FnSUdOc1lYTnpUbUZ0WlQxN1kzZ29YRzRnSUNBZ0lDQWdJSHRjYmlBZ0lDQWdJQ0FnSUNCcGJtUnBZMkYwYjNJNklIUnlkV1VzWEc0Z0lDQWdJQ0FnSUNBZ0oyUnliM0JrYjNkdUxXbHVaR2xqWVhSdmNpYzZJSFJ5ZFdVc1hHNGdJQ0FnSUNBZ0lIMHNYRzRnSUNBZ0lDQWdJR05zWVhOelRtRnRaVnh1SUNBZ0lDQWdLWDFjYmlBZ0lDQStYRzRnSUNBZ0lDQjdZMmhwYkdSeVpXNGdmSHdnUEVSdmQyNURhR1YyY205dUlDOCtmVnh1SUNBZ0lEd3ZaR2wyUGx4dUlDQXBPMXh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdOc1pXRnlTVzVrYVdOaGRHOXlRMU5USUQwZ1ltRnpaVU5UVXp0Y2JtVjRjRzl5ZENCamIyNXpkQ0JEYkdWaGNrbHVaR2xqWVhSdmNpQTlJQ2h3Y205d2N6b2dTVzVrYVdOaGRHOXlVSEp2Y0hNcElEMCtJSHRjYmlBZ1kyOXVjM1FnZXlCamFHbHNaSEpsYml3Z1kyeGhjM05PWVcxbExDQmplQ3dnWjJWMFUzUjViR1Z6TENCcGJtNWxjbEJ5YjNCeklIMGdQU0J3Y205d2N6dGNiaUFnY21WMGRYSnVJQ2hjYmlBZ0lDQThaR2wyWEc0Z0lDQWdJQ0I3TGk0dWFXNXVaWEpRY205d2MzMWNiaUFnSUNBZ0lHTnpjejE3WjJWMFUzUjViR1Z6S0NkamJHVmhja2x1WkdsallYUnZjaWNzSUhCeWIzQnpLWDFjYmlBZ0lDQWdJR05zWVhOelRtRnRaVDE3WTNnb1hHNGdJQ0FnSUNBZ0lIdGNiaUFnSUNBZ0lDQWdJQ0JwYm1ScFkyRjBiM0k2SUhSeWRXVXNYRzRnSUNBZ0lDQWdJQ0FnSjJOc1pXRnlMV2x1WkdsallYUnZjaWM2SUhSeWRXVXNYRzRnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUdOc1lYTnpUbUZ0WlZ4dUlDQWdJQ0FnS1gxY2JpQWdJQ0ErWEc0Z0lDQWdJQ0I3WTJocGJHUnlaVzRnZkh3Z1BFTnliM056U1dOdmJpQXZQbjFjYmlBZ0lDQThMMlJwZGo1Y2JpQWdLVHRjYm4wN1hHNWNiaTh2SUQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHVMeThnVTJWd1lYSmhkRzl5WEc0dkx5QTlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjYmx4dWRIbHdaU0JUWlhCaGNtRjBiM0pUZEdGMFpTQTlJSHNnYVhORWFYTmhZbXhsWkRvZ1ltOXZiR1ZoYmlCOU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2FXNWthV05oZEc5eVUyVndZWEpoZEc5eVExTlRJRDBnS0h0Y2JpQWdhWE5FYVhOaFlteGxaQ3hjYmlBZ2RHaGxiV1U2SUh0Y2JpQWdJQ0J6Y0dGamFXNW5PaUI3SUdKaGMyVlZibWwwSUgwc1hHNGdJQ0FnWTI5c2IzSnpMRnh1SUNCOUxGeHVmVG9nUTI5dGJXOXVVSEp2Y0hNZ0ppQlRaWEJoY21GMGIzSlRkR0YwWlNrZ1BUNGdLSHRjYmlBZ2JHRmlaV3c2SUNkcGJtUnBZMkYwYjNKVFpYQmhjbUYwYjNJbkxGeHVJQ0JoYkdsbmJsTmxiR1k2SUNkemRISmxkR05vSnl4Y2JpQWdZbUZqYTJkeWIzVnVaRU52Ykc5eU9pQnBjMFJwYzJGaWJHVmtJRDhnWTI5c2IzSnpMbTVsZFhSeVlXd3hNQ0E2SUdOdmJHOXljeTV1WlhWMGNtRnNNakFzWEc0Z0lHMWhjbWRwYmtKdmRIUnZiVG9nWW1GelpWVnVhWFFnS2lBeUxGeHVJQ0J0WVhKbmFXNVViM0E2SUdKaGMyVlZibWwwSUNvZ01peGNiaUFnZDJsa2RHZzZJREVzWEc1OUtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElFbHVaR2xqWVhSdmNsTmxjR0Z5WVhSdmNpQTlJQ2h3Y205d2N6b2dTVzVrYVdOaGRHOXlVSEp2Y0hNcElEMCtJSHRjYmlBZ1kyOXVjM1FnZXlCamJHRnpjMDVoYldVc0lHTjRMQ0JuWlhSVGRIbHNaWE1zSUdsdWJtVnlVSEp2Y0hNZ2ZTQTlJSEJ5YjNCek8xeHVJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lEeHpjR0Z1WEc0Z0lDQWdJQ0I3TGk0dWFXNXVaWEpRY205d2MzMWNiaUFnSUNBZ0lHTnpjejE3WjJWMFUzUjViR1Z6S0NkcGJtUnBZMkYwYjNKVFpYQmhjbUYwYjNJbkxDQndjbTl3Y3lsOVhHNGdJQ0FnSUNCamJHRnpjMDVoYldVOWUyTjRLSHNnSjJsdVpHbGpZWFJ2Y2kxelpYQmhjbUYwYjNJbk9pQjBjblZsSUgwc0lHTnNZWE56VG1GdFpTbDlYRzRnSUNBZ0x6NWNiaUFnS1R0Y2JuMDdYRzVjYmk4dklEMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh1THk4Z1RHOWhaR2x1WjF4dUx5OGdQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEc1Y2JtTnZibk4wSUd4dllXUnBibWRFYjNSQmJtbHRZWFJwYjI1eklEMGdhMlY1Wm5KaGJXVnpZRnh1SUNBd0pTd2dPREFsTENBeE1EQWxJSHNnYjNCaFkybDBlVG9nTURzZ2ZWeHVJQ0EwTUNVZ2V5QnZjR0ZqYVhSNU9pQXhPeUI5WEc1Z08xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2JHOWhaR2x1WjBsdVpHbGpZWFJ2Y2tOVFV5QTlJQ2g3WEc0Z0lHbHpSbTlqZFhObFpDeGNiaUFnYzJsNlpTeGNiaUFnZEdobGJXVTZJSHRjYmlBZ0lDQmpiMnh2Y25Nc1hHNGdJQ0FnYzNCaFkybHVaem9nZXlCaVlYTmxWVzVwZENCOUxGeHVJQ0I5TEZ4dWZUb2dlMXh1SUNCcGMwWnZZM1Z6WldRNklHSnZiMnhsWVc0c1hHNGdJSE5wZW1VNklHNTFiV0psY2l4Y2JpQWdkR2hsYldVNklGUm9aVzFsTEZ4dWZTa2dQVDRnS0h0Y2JpQWdiR0ZpWld3NklDZHNiMkZrYVc1blNXNWthV05oZEc5eUp5eGNiaUFnWTI5c2IzSTZJR2x6Um05amRYTmxaQ0EvSUdOdmJHOXljeTV1WlhWMGNtRnNOakFnT2lCamIyeHZjbk11Ym1WMWRISmhiREl3TEZ4dUlDQmthWE53YkdGNU9pQW5abXhsZUNjc1hHNGdJSEJoWkdScGJtYzZJR0poYzJWVmJtbDBJQ29nTWl4Y2JpQWdkSEpoYm5OcGRHbHZiam9nSjJOdmJHOXlJREUxTUcxekp5eGNiaUFnWVd4cFoyNVRaV3htT2lBblkyVnVkR1Z5Snl4Y2JpQWdabTl1ZEZOcGVtVTZJSE5wZW1Vc1hHNGdJR3hwYm1WSVpXbG5hSFE2SURFc1hHNGdJRzFoY21kcGJsSnBaMmgwT2lCemFYcGxMRnh1SUNCMFpYaDBRV3hwWjI0NklDZGpaVzUwWlhJbkxGeHVJQ0IyWlhKMGFXTmhiRUZzYVdkdU9pQW5iV2xrWkd4bEp5eGNibjBwTzF4dVhHNTBlWEJsSUVSdmRGQnliM0J6SUQwZ2V5QmtaV3hoZVRvZ2JuVnRZbVZ5TENCdlptWnpaWFE2SUdKdmIyeGxZVzRnZlR0Y2JtTnZibk4wSUV4dllXUnBibWRFYjNRZ1BTQW9leUJrWld4aGVTd2diMlptYzJWMElIMDZJRVJ2ZEZCeWIzQnpLU0E5UGlBb1hHNGdJRHh6Y0dGdVhHNGdJQ0FnWTNOelBYdDdYRzRnSUNBZ0lDQmhibWx0WVhScGIyNDZJR0FrZTJ4dllXUnBibWRFYjNSQmJtbHRZWFJwYjI1emZTQXhjeUJsWVhObExXbHVMVzkxZENBa2UyUmxiR0Y1ZlcxeklHbHVabWx1YVhSbE8yQXNYRzRnSUNBZ0lDQmlZV05yWjNKdmRXNWtRMjlzYjNJNklDZGpkWEp5Wlc1MFEyOXNiM0luTEZ4dUlDQWdJQ0FnWW05eVpHVnlVbUZrYVhWek9pQW5NV1Z0Snl4Y2JpQWdJQ0FnSUdScGMzQnNZWGs2SUNkcGJteHBibVV0WW14dlkyc25MRnh1SUNBZ0lDQWdiV0Z5WjJsdVRHVm1kRG9nYjJabWMyVjBJRDhnSnpGbGJTY2dPaUJ1ZFd4c0xGeHVJQ0FnSUNBZ2FHVnBaMmgwT2lBbk1XVnRKeXhjYmlBZ0lDQWdJSFpsY25ScFkyRnNRV3hwWjI0NklDZDBiM0FuTEZ4dUlDQWdJQ0FnZDJsa2RHZzZJQ2N4WlcwbkxGeHVJQ0FnSUgxOVhHNGdJQzgrWEc0cE8xeHVYRzVsZUhCdmNuUWdkSGx3WlNCTWIyRmthVzVuU1dOdmJsQnliM0J6SUQwZ2UxeHVJQ0F2S2lvZ1VISnZjSE1nZEdoaGRDQjNhV3hzSUdKbElIQmhjM05sWkNCdmJpQjBieUIwYUdVZ1kyaHBiR1J5Wlc0dUlDb3ZYRzRnSUdsdWJtVnlVSEp2Y0hNNklHRnVlU3hjYmlBZ0x5b3FJRlJvWlNCbWIyTjFjMlZrSUhOMFlYUmxJRzltSUhSb1pTQnpaV3hsWTNRdUlDb3ZYRzRnSUdselJtOWpkWE5sWkRvZ1ltOXZiR1ZoYml4Y2JpQWdMeW9xSUZkb1pYUm9aWElnZEdobElIUmxlSFFnYVhNZ2NtbG5hSFFnZEc4Z2JHVm1kQ0FxTDF4dUlDQnBjMUowYkRvZ1ltOXZiR1ZoYml4Y2JuMGdKaUJEYjIxdGIyNVFjbTl3Y3lBbUlIdGNiaUFnSUNBdktpb2dVMlYwSUhOcGVtVWdiMllnZEdobElHTnZiblJoYVc1bGNpNGdLaTljYmlBZ0lDQnphWHBsT2lCdWRXMWlaWElzWEc0Z0lIMDdYRzVsZUhCdmNuUWdZMjl1YzNRZ1RHOWhaR2x1WjBsdVpHbGpZWFJ2Y2lBOUlDaHdjbTl3Y3pvZ1RHOWhaR2x1WjBsamIyNVFjbTl3Y3lrZ1BUNGdlMXh1SUNCamIyNXpkQ0I3SUdOc1lYTnpUbUZ0WlN3Z1kzZ3NJR2RsZEZOMGVXeGxjeXdnYVc1dVpYSlFjbTl3Y3l3Z2FYTlNkR3dnZlNBOUlIQnliM0J6TzF4dVhHNGdJSEpsZEhWeWJpQW9YRzRnSUNBZ1BHUnBkbHh1SUNBZ0lDQWdleTR1TG1sdWJtVnlVSEp2Y0hOOVhHNGdJQ0FnSUNCamMzTTllMmRsZEZOMGVXeGxjeWduYkc5aFpHbHVaMGx1WkdsallYUnZjaWNzSUhCeWIzQnpLWDFjYmlBZ0lDQWdJR05zWVhOelRtRnRaVDE3WTNnb1hHNGdJQ0FnSUNBZ0lIdGNiaUFnSUNBZ0lDQWdJQ0JwYm1ScFkyRjBiM0k2SUhSeWRXVXNYRzRnSUNBZ0lDQWdJQ0FnSjJ4dllXUnBibWN0YVc1a2FXTmhkRzl5SnpvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ1kyeGhjM05PWVcxbFhHNGdJQ0FnSUNBcGZWeHVJQ0FnSUQ1Y2JpQWdJQ0FnSUR4TWIyRmthVzVuUkc5MElHUmxiR0Y1UFhzd2ZTQnZabVp6WlhROWUybHpVblJzZlNBdlBseHVJQ0FnSUNBZ1BFeHZZV1JwYm1kRWIzUWdaR1ZzWVhrOWV6RTJNSDBnYjJabWMyVjBJQzgrWEc0Z0lDQWdJQ0E4VEc5aFpHbHVaMFJ2ZENCa1pXeGhlVDE3TXpJd2ZTQnZabVp6WlhROWV5RnBjMUowYkgwZ0x6NWNiaUFnSUNBOEwyUnBkajVjYmlBZ0tUdGNibjA3WEc1TWIyRmthVzVuU1c1a2FXTmhkRzl5TG1SbFptRjFiSFJRY205d2N5QTlJSHNnYzJsNlpUb2dOQ0I5TzF4dUlsMTkgKi9cIilcbiAgfSk7XG59O1xuXG52YXIgTG9hZGluZ0luZGljYXRvciA9IGZ1bmN0aW9uIExvYWRpbmdJbmRpY2F0b3IocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcyxcbiAgICAgIGlzUnRsID0gcHJvcHMuaXNSdGw7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe30sIGlubmVyUHJvcHMsIHtcbiAgICBjc3M6IGdldFN0eWxlcygnbG9hZGluZ0luZGljYXRvcicsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWVcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0pLCBqc3goTG9hZGluZ0RvdCwge1xuICAgIGRlbGF5OiAwLFxuICAgIG9mZnNldDogaXNSdGxcbiAgfSksIGpzeChMb2FkaW5nRG90LCB7XG4gICAgZGVsYXk6IDE2MCxcbiAgICBvZmZzZXQ6IHRydWVcbiAgfSksIGpzeChMb2FkaW5nRG90LCB7XG4gICAgZGVsYXk6IDMyMCxcbiAgICBvZmZzZXQ6ICFpc1J0bFxuICB9KSk7XG59O1xuTG9hZGluZ0luZGljYXRvci5kZWZhdWx0UHJvcHMgPSB7XG4gIHNpemU6IDRcbn07XG5cbnZhciBjc3MgPSBmdW5jdGlvbiBjc3MoX3JlZikge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9yZWYuaXNEaXNhYmxlZCxcbiAgICAgIGlzRm9jdXNlZCA9IF9yZWYuaXNGb2N1c2VkLFxuICAgICAgX3JlZiR0aGVtZSA9IF9yZWYudGhlbWUsXG4gICAgICBjb2xvcnMgPSBfcmVmJHRoZW1lLmNvbG9ycyxcbiAgICAgIGJvcmRlclJhZGl1cyA9IF9yZWYkdGhlbWUuYm9yZGVyUmFkaXVzLFxuICAgICAgc3BhY2luZyA9IF9yZWYkdGhlbWUuc3BhY2luZztcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ2NvbnRyb2wnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGJhY2tncm91bmRDb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsNSA6IGNvbG9ycy5uZXV0cmFsMCxcbiAgICBib3JkZXJDb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsMTAgOiBpc0ZvY3VzZWQgPyBjb2xvcnMucHJpbWFyeSA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXG4gICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgYm94U2hhZG93OiBpc0ZvY3VzZWQgPyBcIjAgMCAwIDFweCBcIi5jb25jYXQoY29sb3JzLnByaW1hcnkpIDogbnVsbCxcbiAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIG1pbkhlaWdodDogc3BhY2luZy5jb250cm9sSGVpZ2h0LFxuICAgIG91dGxpbmU6ICcwICFpbXBvcnRhbnQnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMTAwbXMnLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYm9yZGVyQ29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5wcmltYXJ5IDogY29sb3JzLm5ldXRyYWwzMFxuICAgIH1cbiAgfTtcbn07XG5cbnZhciBDb250cm9sID0gZnVuY3Rpb24gQ29udHJvbChwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBpc0Rpc2FibGVkID0gcHJvcHMuaXNEaXNhYmxlZCxcbiAgICAgIGlzRm9jdXNlZCA9IHByb3BzLmlzRm9jdXNlZCxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcyxcbiAgICAgIG1lbnVJc09wZW4gPSBwcm9wcy5tZW51SXNPcGVuO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICByZWY6IGlubmVyUmVmLFxuICAgIGNzczogZ2V0U3R5bGVzKCdjb250cm9sJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgY29udHJvbDogdHJ1ZSxcbiAgICAgICdjb250cm9sLS1pcy1kaXNhYmxlZCc6IGlzRGlzYWJsZWQsXG4gICAgICAnY29udHJvbC0taXMtZm9jdXNlZCc6IGlzRm9jdXNlZCxcbiAgICAgICdjb250cm9sLS1tZW51LWlzLW9wZW4nOiBtZW51SXNPcGVuXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcblxuZnVuY3Rpb24gb3duS2V5cyQxKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDEodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQxKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkMShPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cbnZhciBncm91cENTUyA9IGZ1bmN0aW9uIGdyb3VwQ1NTKF9yZWYpIHtcbiAgdmFyIHNwYWNpbmcgPSBfcmVmLnRoZW1lLnNwYWNpbmc7XG4gIHJldHVybiB7XG4gICAgcGFkZGluZ0JvdHRvbTogc3BhY2luZy5iYXNlVW5pdCAqIDIsXG4gICAgcGFkZGluZ1RvcDogc3BhY2luZy5iYXNlVW5pdCAqIDJcbiAgfTtcbn07XG5cbnZhciBHcm91cCA9IGZ1bmN0aW9uIEdyb3VwKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIEhlYWRpbmcgPSBwcm9wcy5IZWFkaW5nLFxuICAgICAgaGVhZGluZ1Byb3BzID0gcHJvcHMuaGVhZGluZ1Byb3BzLFxuICAgICAgbGFiZWwgPSBwcm9wcy5sYWJlbCxcbiAgICAgIHRoZW1lID0gcHJvcHMudGhlbWUsXG4gICAgICBzZWxlY3RQcm9wcyA9IHByb3BzLnNlbGVjdFByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIHtcbiAgICBjc3M6IGdldFN0eWxlcygnZ3JvdXAnLCBwcm9wcyksXG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICBncm91cDogdHJ1ZVxuICAgIH0sIGNsYXNzTmFtZSlcbiAgfSwganN4KEhlYWRpbmcsIF9leHRlbmRzKHt9LCBoZWFkaW5nUHJvcHMsIHtcbiAgICBzZWxlY3RQcm9wczogc2VsZWN0UHJvcHMsXG4gICAgdGhlbWU6IHRoZW1lLFxuICAgIGdldFN0eWxlczogZ2V0U3R5bGVzLFxuICAgIGN4OiBjeFxuICB9KSwgbGFiZWwpLCBqc3goXCJkaXZcIiwgbnVsbCwgY2hpbGRyZW4pKTtcbn07XG5cbnZhciBncm91cEhlYWRpbmdDU1MgPSBmdW5jdGlvbiBncm91cEhlYWRpbmdDU1MoX3JlZjIpIHtcbiAgdmFyIHNwYWNpbmcgPSBfcmVmMi50aGVtZS5zcGFjaW5nO1xuICByZXR1cm4ge1xuICAgIGxhYmVsOiAnZ3JvdXAnLFxuICAgIGNvbG9yOiAnIzk5OScsXG4gICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBmb250U2l6ZTogJzc1JScsXG4gICAgZm9udFdlaWdodDogJzUwMCcsXG4gICAgbWFyZ2luQm90dG9tOiAnMC4yNWVtJyxcbiAgICBwYWRkaW5nTGVmdDogc3BhY2luZy5iYXNlVW5pdCAqIDMsXG4gICAgcGFkZGluZ1JpZ2h0OiBzcGFjaW5nLmJhc2VVbml0ICogMyxcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ1xuICB9O1xufTtcbnZhciBHcm91cEhlYWRpbmcgPSBmdW5jdGlvbiBHcm91cEhlYWRpbmcocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICB0aGVtZSA9IHByb3BzLnRoZW1lLFxuICAgICAgc2VsZWN0UHJvcHMgPSBwcm9wcy5zZWxlY3RQcm9wcyxcbiAgICAgIGNsZWFuUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNsYXNzTmFtZVwiLCBcImN4XCIsIFwiZ2V0U3R5bGVzXCIsIFwidGhlbWVcIiwgXCJzZWxlY3RQcm9wc1wiXSk7XG5cbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ2dyb3VwSGVhZGluZycsIF9vYmplY3RTcHJlYWQkMSh7XG4gICAgICB0aGVtZTogdGhlbWVcbiAgICB9LCBjbGVhblByb3BzKSksXG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICAnZ3JvdXAtaGVhZGluZyc6IHRydWVcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGNsZWFuUHJvcHMpKTtcbn07XG5cbmZ1bmN0aW9uIG93bktleXMkMihvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQyKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMkMihPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzJDIoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG52YXIgaW5wdXRDU1MgPSBmdW5jdGlvbiBpbnB1dENTUyhfcmVmKSB7XG4gIHZhciBpc0Rpc2FibGVkID0gX3JlZi5pc0Rpc2FibGVkLFxuICAgICAgX3JlZiR0aGVtZSA9IF9yZWYudGhlbWUsXG4gICAgICBzcGFjaW5nID0gX3JlZiR0aGVtZS5zcGFjaW5nLFxuICAgICAgY29sb3JzID0gX3JlZiR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiB7XG4gICAgbWFyZ2luOiBzcGFjaW5nLmJhc2VVbml0IC8gMixcbiAgICBwYWRkaW5nQm90dG9tOiBzcGFjaW5nLmJhc2VVbml0IC8gMixcbiAgICBwYWRkaW5nVG9wOiBzcGFjaW5nLmJhc2VVbml0IC8gMixcbiAgICB2aXNpYmlsaXR5OiBpc0Rpc2FibGVkID8gJ2hpZGRlbicgOiAndmlzaWJsZScsXG4gICAgY29sb3I6IGNvbG9ycy5uZXV0cmFsODBcbiAgfTtcbn07XG5cbnZhciBpbnB1dFN0eWxlID0gZnVuY3Rpb24gaW5wdXRTdHlsZShpc0hpZGRlbikge1xuICByZXR1cm4ge1xuICAgIGxhYmVsOiAnaW5wdXQnLFxuICAgIGJhY2tncm91bmQ6IDAsXG4gICAgYm9yZGVyOiAwLFxuICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgb3BhY2l0eTogaXNIaWRkZW4gPyAwIDogMSxcbiAgICBvdXRsaW5lOiAwLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgY29sb3I6ICdpbmhlcml0J1xuICB9O1xufTtcblxudmFyIElucHV0ID0gZnVuY3Rpb24gSW5wdXQoX3JlZjIpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IF9yZWYyLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gX3JlZjIuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBfcmVmMi5nZXRTdHlsZXMsXG4gICAgICBpbm5lclJlZiA9IF9yZWYyLmlubmVyUmVmLFxuICAgICAgaXNIaWRkZW4gPSBfcmVmMi5pc0hpZGRlbixcbiAgICAgIGlzRGlzYWJsZWQgPSBfcmVmMi5pc0Rpc2FibGVkLFxuICAgICAgdGhlbWUgPSBfcmVmMi50aGVtZSxcbiAgICAgIHNlbGVjdFByb3BzID0gX3JlZjIuc2VsZWN0UHJvcHMsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmMiwgW1wiY2xhc3NOYW1lXCIsIFwiY3hcIiwgXCJnZXRTdHlsZXNcIiwgXCJpbm5lclJlZlwiLCBcImlzSGlkZGVuXCIsIFwiaXNEaXNhYmxlZFwiLCBcInRoZW1lXCIsIFwic2VsZWN0UHJvcHNcIl0pO1xuXG4gIHJldHVybiBqc3goXCJkaXZcIiwge1xuICAgIGNzczogZ2V0U3R5bGVzKCdpbnB1dCcsIF9vYmplY3RTcHJlYWQkMih7XG4gICAgICB0aGVtZTogdGhlbWVcbiAgICB9LCBwcm9wcykpXG4gIH0sIGpzeChBdXRvc2l6ZUlucHV0LCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICBpbnB1dDogdHJ1ZVxuICAgIH0sIGNsYXNzTmFtZSksXG4gICAgaW5wdXRSZWY6IGlubmVyUmVmLFxuICAgIGlucHV0U3R5bGU6IGlucHV0U3R5bGUoaXNIaWRkZW4pLFxuICAgIGRpc2FibGVkOiBpc0Rpc2FibGVkXG4gIH0sIHByb3BzKSkpO1xufTtcblxuZnVuY3Rpb24gb3duS2V5cyQzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDModGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkMyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cbnZhciBtdWx0aVZhbHVlQ1NTID0gZnVuY3Rpb24gbXVsdGlWYWx1ZUNTUyhfcmVmKSB7XG4gIHZhciBfcmVmJHRoZW1lID0gX3JlZi50aGVtZSxcbiAgICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmcsXG4gICAgICBib3JkZXJSYWRpdXMgPSBfcmVmJHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgICAgIGNvbG9ycyA9IF9yZWYkdGhlbWUuY29sb3JzO1xuICByZXR1cm4ge1xuICAgIGxhYmVsOiAnbXVsdGlWYWx1ZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMubmV1dHJhbDEwLFxuICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzIC8gMixcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgbWFyZ2luOiBzcGFjaW5nLmJhc2VVbml0IC8gMixcbiAgICBtaW5XaWR0aDogMCAvLyByZXNvbHZlcyBmbGV4L3RleHQtb3ZlcmZsb3cgYnVnXG5cbiAgfTtcbn07XG52YXIgbXVsdGlWYWx1ZUxhYmVsQ1NTID0gZnVuY3Rpb24gbXVsdGlWYWx1ZUxhYmVsQ1NTKF9yZWYyKSB7XG4gIHZhciBfcmVmMiR0aGVtZSA9IF9yZWYyLnRoZW1lLFxuICAgICAgYm9yZGVyUmFkaXVzID0gX3JlZjIkdGhlbWUuYm9yZGVyUmFkaXVzLFxuICAgICAgY29sb3JzID0gX3JlZjIkdGhlbWUuY29sb3JzLFxuICAgICAgY3JvcFdpdGhFbGxpcHNpcyA9IF9yZWYyLmNyb3BXaXRoRWxsaXBzaXM7XG4gIHJldHVybiB7XG4gICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMgLyAyLFxuICAgIGNvbG9yOiBjb2xvcnMubmV1dHJhbDgwLFxuICAgIGZvbnRTaXplOiAnODUlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcGFkZGluZzogMyxcbiAgICBwYWRkaW5nTGVmdDogNixcbiAgICB0ZXh0T3ZlcmZsb3c6IGNyb3BXaXRoRWxsaXBzaXMgPyAnZWxsaXBzaXMnIDogbnVsbCxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICB9O1xufTtcbnZhciBtdWx0aVZhbHVlUmVtb3ZlQ1NTID0gZnVuY3Rpb24gbXVsdGlWYWx1ZVJlbW92ZUNTUyhfcmVmMykge1xuICB2YXIgX3JlZjMkdGhlbWUgPSBfcmVmMy50aGVtZSxcbiAgICAgIHNwYWNpbmcgPSBfcmVmMyR0aGVtZS5zcGFjaW5nLFxuICAgICAgYm9yZGVyUmFkaXVzID0gX3JlZjMkdGhlbWUuYm9yZGVyUmFkaXVzLFxuICAgICAgY29sb3JzID0gX3JlZjMkdGhlbWUuY29sb3JzLFxuICAgICAgaXNGb2N1c2VkID0gX3JlZjMuaXNGb2N1c2VkO1xuICByZXR1cm4ge1xuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzIC8gMixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzRm9jdXNlZCAmJiBjb2xvcnMuZGFuZ2VyTGlnaHQsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBhZGRpbmdMZWZ0OiBzcGFjaW5nLmJhc2VVbml0LFxuICAgIHBhZGRpbmdSaWdodDogc3BhY2luZy5iYXNlVW5pdCxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZGFuZ2VyTGlnaHQsXG4gICAgICBjb2xvcjogY29sb3JzLmRhbmdlclxuICAgIH1cbiAgfTtcbn07XG52YXIgTXVsdGlWYWx1ZUdlbmVyaWMgPSBmdW5jdGlvbiBNdWx0aVZhbHVlR2VuZXJpYyhfcmVmNCkge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmNC5jaGlsZHJlbixcbiAgICAgIGlubmVyUHJvcHMgPSBfcmVmNC5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIGlubmVyUHJvcHMsIGNoaWxkcmVuKTtcbn07XG52YXIgTXVsdGlWYWx1ZUNvbnRhaW5lciA9IE11bHRpVmFsdWVHZW5lcmljO1xudmFyIE11bHRpVmFsdWVMYWJlbCA9IE11bHRpVmFsdWVHZW5lcmljO1xuZnVuY3Rpb24gTXVsdGlWYWx1ZVJlbW92ZShfcmVmNSkge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmNS5jaGlsZHJlbixcbiAgICAgIGlubmVyUHJvcHMgPSBfcmVmNS5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIGlubmVyUHJvcHMsIGNoaWxkcmVuIHx8IGpzeChDcm9zc0ljb24sIHtcbiAgICBzaXplOiAxNFxuICB9KSk7XG59XG5cbnZhciBNdWx0aVZhbHVlID0gZnVuY3Rpb24gTXVsdGlWYWx1ZShwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNvbXBvbmVudHMgPSBwcm9wcy5jb21wb25lbnRzLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGRhdGEgPSBwcm9wcy5kYXRhLFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgICBpc0Rpc2FibGVkID0gcHJvcHMuaXNEaXNhYmxlZCxcbiAgICAgIHJlbW92ZVByb3BzID0gcHJvcHMucmVtb3ZlUHJvcHMsXG4gICAgICBzZWxlY3RQcm9wcyA9IHByb3BzLnNlbGVjdFByb3BzO1xuICB2YXIgQ29udGFpbmVyID0gY29tcG9uZW50cy5Db250YWluZXIsXG4gICAgICBMYWJlbCA9IGNvbXBvbmVudHMuTGFiZWwsXG4gICAgICBSZW1vdmUgPSBjb21wb25lbnRzLlJlbW92ZTtcbiAgcmV0dXJuIGpzeChDbGFzc05hbWVzLCBudWxsLCBmdW5jdGlvbiAoX3JlZjYpIHtcbiAgICB2YXIgY3NzID0gX3JlZjYuY3NzLFxuICAgICAgICBlbW90aW9uQ3ggPSBfcmVmNi5jeDtcbiAgICByZXR1cm4ganN4KENvbnRhaW5lciwge1xuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIGlubmVyUHJvcHM6IF9vYmplY3RTcHJlYWQkMyhfb2JqZWN0U3ByZWFkJDMoe30sIGlubmVyUHJvcHMpLCB7fSwge1xuICAgICAgICBjbGFzc05hbWU6IGVtb3Rpb25DeChjc3MoZ2V0U3R5bGVzKCdtdWx0aVZhbHVlJywgcHJvcHMpKSwgY3goe1xuICAgICAgICAgICdtdWx0aS12YWx1ZSc6IHRydWUsXG4gICAgICAgICAgJ211bHRpLXZhbHVlLS1pcy1kaXNhYmxlZCc6IGlzRGlzYWJsZWRcbiAgICAgICAgfSwgY2xhc3NOYW1lKSlcbiAgICAgIH0pLFxuICAgICAgc2VsZWN0UHJvcHM6IHNlbGVjdFByb3BzXG4gICAgfSwganN4KExhYmVsLCB7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgaW5uZXJQcm9wczoge1xuICAgICAgICBjbGFzc05hbWU6IGVtb3Rpb25DeChjc3MoZ2V0U3R5bGVzKCdtdWx0aVZhbHVlTGFiZWwnLCBwcm9wcykpLCBjeCh7XG4gICAgICAgICAgJ211bHRpLXZhbHVlX19sYWJlbCc6IHRydWVcbiAgICAgICAgfSwgY2xhc3NOYW1lKSlcbiAgICAgIH0sXG4gICAgICBzZWxlY3RQcm9wczogc2VsZWN0UHJvcHNcbiAgICB9LCBjaGlsZHJlbiksIGpzeChSZW1vdmUsIHtcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBpbm5lclByb3BzOiBfb2JqZWN0U3ByZWFkJDMoe1xuICAgICAgICBjbGFzc05hbWU6IGVtb3Rpb25DeChjc3MoZ2V0U3R5bGVzKCdtdWx0aVZhbHVlUmVtb3ZlJywgcHJvcHMpKSwgY3goe1xuICAgICAgICAgICdtdWx0aS12YWx1ZV9fcmVtb3ZlJzogdHJ1ZVxuICAgICAgICB9LCBjbGFzc05hbWUpKVxuICAgICAgfSwgcmVtb3ZlUHJvcHMpLFxuICAgICAgc2VsZWN0UHJvcHM6IHNlbGVjdFByb3BzXG4gICAgfSkpO1xuICB9KTtcbn07XG5cbk11bHRpVmFsdWUuZGVmYXVsdFByb3BzID0ge1xuICBjcm9wV2l0aEVsbGlwc2lzOiB0cnVlXG59O1xuXG52YXIgb3B0aW9uQ1NTID0gZnVuY3Rpb24gb3B0aW9uQ1NTKF9yZWYpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfcmVmLmlzRGlzYWJsZWQsXG4gICAgICBpc0ZvY3VzZWQgPSBfcmVmLmlzRm9jdXNlZCxcbiAgICAgIGlzU2VsZWN0ZWQgPSBfcmVmLmlzU2VsZWN0ZWQsXG4gICAgICBfcmVmJHRoZW1lID0gX3JlZi50aGVtZSxcbiAgICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmcsXG4gICAgICBjb2xvcnMgPSBfcmVmJHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ29wdGlvbicsXG4gICAgYmFja2dyb3VuZENvbG9yOiBpc1NlbGVjdGVkID8gY29sb3JzLnByaW1hcnkgOiBpc0ZvY3VzZWQgPyBjb2xvcnMucHJpbWFyeTI1IDogJ3RyYW5zcGFyZW50JyxcbiAgICBjb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsMjAgOiBpc1NlbGVjdGVkID8gY29sb3JzLm5ldXRyYWwwIDogJ2luaGVyaXQnLFxuICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICBwYWRkaW5nOiBcIlwiLmNvbmNhdChzcGFjaW5nLmJhc2VVbml0ICogMiwgXCJweCBcIikuY29uY2F0KHNwYWNpbmcuYmFzZVVuaXQgKiAzLCBcInB4XCIpLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIFdlYmtpdFRhcEhpZ2hsaWdodENvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXG4gICAgLy8gcHJvdmlkZSBzb21lIGFmZm9yZGFuY2Ugb24gdG91Y2ggZGV2aWNlc1xuICAgICc6YWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAhaXNEaXNhYmxlZCAmJiAoaXNTZWxlY3RlZCA/IGNvbG9ycy5wcmltYXJ5IDogY29sb3JzLnByaW1hcnk1MClcbiAgICB9XG4gIH07XG59O1xuXG52YXIgT3B0aW9uID0gZnVuY3Rpb24gT3B0aW9uKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlzRGlzYWJsZWQgPSBwcm9wcy5pc0Rpc2FibGVkLFxuICAgICAgaXNGb2N1c2VkID0gcHJvcHMuaXNGb2N1c2VkLFxuICAgICAgaXNTZWxlY3RlZCA9IHByb3BzLmlzU2VsZWN0ZWQsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdvcHRpb24nLCBwcm9wcyksXG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICBvcHRpb246IHRydWUsXG4gICAgICAnb3B0aW9uLS1pcy1kaXNhYmxlZCc6IGlzRGlzYWJsZWQsXG4gICAgICAnb3B0aW9uLS1pcy1mb2N1c2VkJzogaXNGb2N1c2VkLFxuICAgICAgJ29wdGlvbi0taXMtc2VsZWN0ZWQnOiBpc1NlbGVjdGVkXG4gICAgfSwgY2xhc3NOYW1lKSxcbiAgICByZWY6IGlubmVyUmVmXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xuXG52YXIgcGxhY2Vob2xkZXJDU1MgPSBmdW5jdGlvbiBwbGFjZWhvbGRlckNTUyhfcmVmKSB7XG4gIHZhciBfcmVmJHRoZW1lID0gX3JlZi50aGVtZSxcbiAgICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmcsXG4gICAgICBjb2xvcnMgPSBfcmVmJHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ3BsYWNlaG9sZGVyJyxcbiAgICBjb2xvcjogY29sb3JzLm5ldXRyYWw1MCxcbiAgICBtYXJnaW5MZWZ0OiBzcGFjaW5nLmJhc2VVbml0IC8gMixcbiAgICBtYXJnaW5SaWdodDogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnNTAlJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJ1xuICB9O1xufTtcblxudmFyIFBsYWNlaG9sZGVyID0gZnVuY3Rpb24gUGxhY2Vob2xkZXIocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdwbGFjZWhvbGRlcicsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgIHBsYWNlaG9sZGVyOiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcblxudmFyIGNzcyQxID0gZnVuY3Rpb24gY3NzKF9yZWYpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfcmVmLmlzRGlzYWJsZWQsXG4gICAgICBfcmVmJHRoZW1lID0gX3JlZi50aGVtZSxcbiAgICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmcsXG4gICAgICBjb2xvcnMgPSBfcmVmJHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ3NpbmdsZVZhbHVlJyxcbiAgICBjb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsNDAgOiBjb2xvcnMubmV1dHJhbDgwLFxuICAgIG1hcmdpbkxlZnQ6IHNwYWNpbmcuYmFzZVVuaXQgLyAyLFxuICAgIG1hcmdpblJpZ2h0OiBzcGFjaW5nLmJhc2VVbml0IC8gMixcbiAgICBtYXhXaWR0aDogXCJjYWxjKDEwMCUgLSBcIi5jb25jYXQoc3BhY2luZy5iYXNlVW5pdCAqIDIsIFwicHgpXCIpLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgdG9wOiAnNTAlJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJ1xuICB9O1xufTtcblxudmFyIFNpbmdsZVZhbHVlID0gZnVuY3Rpb24gU2luZ2xlVmFsdWUocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ3NpbmdsZVZhbHVlJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgJ3NpbmdsZS12YWx1ZSc6IHRydWUsXG4gICAgICAnc2luZ2xlLXZhbHVlLS1pcy1kaXNhYmxlZCc6IGlzRGlzYWJsZWRcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xuXG5mdW5jdGlvbiBvd25LZXlzJDQob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkNCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzJDQoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyQ0KE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxudmFyIGNvbXBvbmVudHMgPSB7XG4gIENsZWFySW5kaWNhdG9yOiBDbGVhckluZGljYXRvcixcbiAgQ29udHJvbDogQ29udHJvbCxcbiAgRHJvcGRvd25JbmRpY2F0b3I6IERyb3Bkb3duSW5kaWNhdG9yLFxuICBEb3duQ2hldnJvbjogRG93bkNoZXZyb24sXG4gIENyb3NzSWNvbjogQ3Jvc3NJY29uLFxuICBHcm91cDogR3JvdXAsXG4gIEdyb3VwSGVhZGluZzogR3JvdXBIZWFkaW5nLFxuICBJbmRpY2F0b3JzQ29udGFpbmVyOiBJbmRpY2F0b3JzQ29udGFpbmVyLFxuICBJbmRpY2F0b3JTZXBhcmF0b3I6IEluZGljYXRvclNlcGFyYXRvcixcbiAgSW5wdXQ6IElucHV0LFxuICBMb2FkaW5nSW5kaWNhdG9yOiBMb2FkaW5nSW5kaWNhdG9yLFxuICBNZW51OiBNZW51LFxuICBNZW51TGlzdDogTWVudUxpc3QsXG4gIE1lbnVQb3J0YWw6IE1lbnVQb3J0YWwsXG4gIExvYWRpbmdNZXNzYWdlOiBMb2FkaW5nTWVzc2FnZSxcbiAgTm9PcHRpb25zTWVzc2FnZTogTm9PcHRpb25zTWVzc2FnZSxcbiAgTXVsdGlWYWx1ZTogTXVsdGlWYWx1ZSxcbiAgTXVsdGlWYWx1ZUNvbnRhaW5lcjogTXVsdGlWYWx1ZUNvbnRhaW5lcixcbiAgTXVsdGlWYWx1ZUxhYmVsOiBNdWx0aVZhbHVlTGFiZWwsXG4gIE11bHRpVmFsdWVSZW1vdmU6IE11bHRpVmFsdWVSZW1vdmUsXG4gIE9wdGlvbjogT3B0aW9uLFxuICBQbGFjZWhvbGRlcjogUGxhY2Vob2xkZXIsXG4gIFNlbGVjdENvbnRhaW5lcjogU2VsZWN0Q29udGFpbmVyLFxuICBTaW5nbGVWYWx1ZTogU2luZ2xlVmFsdWUsXG4gIFZhbHVlQ29udGFpbmVyOiBWYWx1ZUNvbnRhaW5lclxufTtcbnZhciBkZWZhdWx0Q29tcG9uZW50cyA9IGZ1bmN0aW9uIGRlZmF1bHRDb21wb25lbnRzKHByb3BzKSB7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkJDQoX29iamVjdFNwcmVhZCQ0KHt9LCBjb21wb25lbnRzKSwgcHJvcHMuY29tcG9uZW50cyk7XG59O1xuXG5leHBvcnQgeyBpc0RvY3VtZW50RWxlbWVudCBhcyBBLCBjbGVhblZhbHVlIGFzIEIsIHNjcm9sbEludG9WaWV3IGFzIEMsIG5vb3AgYXMgRCwgY29tcG9uZW50cyBhcyBFLCBoYW5kbGVJbnB1dENoYW5nZSBhcyBGLCBNZW51UGxhY2VyIGFzIE0sIGNvbnRhaW5lckNTUyBhcyBhLCBjc3MgYXMgYiwgY2xlYXJJbmRpY2F0b3JDU1MgYXMgYywgZHJvcGRvd25JbmRpY2F0b3JDU1MgYXMgZCwgZ3JvdXBIZWFkaW5nQ1NTIGFzIGUsIGluZGljYXRvclNlcGFyYXRvckNTUyBhcyBmLCBncm91cENTUyBhcyBnLCBpbnB1dENTUyBhcyBoLCBpbmRpY2F0b3JzQ29udGFpbmVyQ1NTIGFzIGksIGxvYWRpbmdNZXNzYWdlQ1NTIGFzIGosIG1lbnVMaXN0Q1NTIGFzIGssIGxvYWRpbmdJbmRpY2F0b3JDU1MgYXMgbCwgbWVudUNTUyBhcyBtLCBtZW51UG9ydGFsQ1NTIGFzIG4sIG11bHRpVmFsdWVDU1MgYXMgbywgbXVsdGlWYWx1ZUxhYmVsQ1NTIGFzIHAsIG11bHRpVmFsdWVSZW1vdmVDU1MgYXMgcSwgbm9PcHRpb25zTWVzc2FnZUNTUyBhcyByLCBvcHRpb25DU1MgYXMgcywgcGxhY2Vob2xkZXJDU1MgYXMgdCwgY3NzJDEgYXMgdSwgdmFsdWVDb250YWluZXJDU1MgYXMgdiwgaXNUb3VjaENhcGFibGUgYXMgdywgaXNNb2JpbGVEZXZpY2UgYXMgeCwgY2xhc3NOYW1lcyBhcyB5LCBkZWZhdWx0Q29tcG9uZW50cyBhcyB6IH07XG4iLCJpbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9nZXRQcm90b3R5cGVPZiBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZic7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXknO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhY2hlUHJvdmlkZXIgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgJ3JlYWN0LWRvbSc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mJztcbmV4cG9ydCB7IEUgYXMgY29tcG9uZW50cyB9IGZyb20gJy4vaW5kZXgtOGI2NDQxMGMuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgUyBhcyBTZWxlY3QgfSBmcm9tICcuL1NlbGVjdC1kNTNlMzMyOS5icm93c2VyLmVzbS5qcyc7XG5leHBvcnQgeyBjIGFzIGNyZWF0ZUZpbHRlciwgYSBhcyBkZWZhdWx0VGhlbWUsIG0gYXMgbWVyZ2VTdHlsZXMgfSBmcm9tICcuL1NlbGVjdC1kNTNlMzMyOS5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbCc7XG5pbXBvcnQgJ3JlYWN0LWlucHV0LWF1dG9zaXplJztcbmltcG9ydCB7IG0gYXMgbWFuYWdlU3RhdGUgfSBmcm9tICcuL3N0YXRlTWFuYWdlci02NmEyMWY2OC5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSAnQGVtb3Rpb24vY2FjaGUnO1xuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSAnbWVtb2l6ZS1vbmUnO1xuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbnZhciBOb25jZVByb3ZpZGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhOb25jZVByb3ZpZGVyLCBfQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE5vbmNlUHJvdmlkZXIpO1xuXG4gIGZ1bmN0aW9uIE5vbmNlUHJvdmlkZXIocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm9uY2VQcm92aWRlcik7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcblxuICAgIF90aGlzLmNyZWF0ZUVtb3Rpb25DYWNoZSA9IGZ1bmN0aW9uIChub25jZSwga2V5KSB7XG4gICAgICByZXR1cm4gY3JlYXRlQ2FjaGUoe1xuICAgICAgICBub25jZTogbm9uY2UsXG4gICAgICAgIGtleToga2V5XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuY3JlYXRlRW1vdGlvbkNhY2hlID0gbWVtb2l6ZU9uZShfdGhpcy5jcmVhdGVFbW90aW9uQ2FjaGUpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhOb25jZVByb3ZpZGVyLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIGVtb3Rpb25DYWNoZSA9IHRoaXMuY3JlYXRlRW1vdGlvbkNhY2hlKHRoaXMucHJvcHMubm9uY2UsIHRoaXMucHJvcHMuY2FjaGVLZXkpO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENhY2hlUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IGVtb3Rpb25DYWNoZVxuICAgICAgfSwgdGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE5vbmNlUHJvdmlkZXI7XG59KENvbXBvbmVudCk7XG5cbnZhciBpbmRleCA9IG1hbmFnZVN0YXRlKFNlbGVjdCk7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuZXhwb3J0IHsgTm9uY2VQcm92aWRlciB9O1xuIiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9nZXRQcm90b3R5cGVPZiBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZic7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGRlZmF1bHRJbnB1dFZhbHVlOiAnJyxcbiAgZGVmYXVsdE1lbnVJc09wZW46IGZhbHNlLFxuICBkZWZhdWx0VmFsdWU6IG51bGxcbn07XG5cbnZhciBtYW5hZ2VTdGF0ZSA9IGZ1bmN0aW9uIG1hbmFnZVN0YXRlKFNlbGVjdENvbXBvbmVudCkge1xuICB2YXIgX2NsYXNzLCBfdGVtcDtcblxuICByZXR1cm4gX3RlbXAgPSBfY2xhc3MgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoU3RhdGVNYW5hZ2VyLCBfQ29tcG9uZW50KTtcblxuICAgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoU3RhdGVNYW5hZ2VyKTtcblxuICAgIGZ1bmN0aW9uIFN0YXRlTWFuYWdlcigpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YXRlTWFuYWdlcik7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG4gICAgICBfdGhpcy5zZWxlY3QgPSB2b2lkIDA7XG4gICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgaW5wdXRWYWx1ZTogX3RoaXMucHJvcHMuaW5wdXRWYWx1ZSAhPT0gdW5kZWZpbmVkID8gX3RoaXMucHJvcHMuaW5wdXRWYWx1ZSA6IF90aGlzLnByb3BzLmRlZmF1bHRJbnB1dFZhbHVlLFxuICAgICAgICBtZW51SXNPcGVuOiBfdGhpcy5wcm9wcy5tZW51SXNPcGVuICE9PSB1bmRlZmluZWQgPyBfdGhpcy5wcm9wcy5tZW51SXNPcGVuIDogX3RoaXMucHJvcHMuZGVmYXVsdE1lbnVJc09wZW4sXG4gICAgICAgIHZhbHVlOiBfdGhpcy5wcm9wcy52YWx1ZSAhPT0gdW5kZWZpbmVkID8gX3RoaXMucHJvcHMudmFsdWUgOiBfdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWVcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKHZhbHVlLCBhY3Rpb25NZXRhKSB7XG4gICAgICAgIF90aGlzLmNhbGxQcm9wKCdvbkNoYW5nZScsIHZhbHVlLCBhY3Rpb25NZXRhKTtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25JbnB1dENoYW5nZSA9IGZ1bmN0aW9uICh2YWx1ZSwgYWN0aW9uTWV0YSkge1xuICAgICAgICAvLyBUT0RPOiBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHdlIGFsbG93IHRoZSBwcm9wIHRvIHJldHVybiBhIG5ld1xuICAgICAgICAvLyB2YWx1ZSwgYnV0IG5vdyBpbnB1dFZhbHVlIGlzIGEgY29udHJvbGxhYmxlIHByb3Agd2UgcHJvYmFibHkgc2hvdWxkbid0XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IF90aGlzLmNhbGxQcm9wKCdvbklucHV0Q2hhbmdlJywgdmFsdWUsIGFjdGlvbk1ldGEpO1xuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpbnB1dFZhbHVlOiBuZXdWYWx1ZSAhPT0gdW5kZWZpbmVkID8gbmV3VmFsdWUgOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uTWVudU9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmNhbGxQcm9wKCdvbk1lbnVPcGVuJyk7XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1lbnVJc09wZW46IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbk1lbnVDbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuY2FsbFByb3AoJ29uTWVudUNsb3NlJyk7XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1lbnVJc09wZW46IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhTdGF0ZU1hbmFnZXIsIFt7XG4gICAgICBrZXk6IFwiZm9jdXNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYmx1clwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0LmJsdXIoKTtcbiAgICAgIH0gLy8gRklYTUU6IHVudHlwZWQgZmxvdyBjb2RlLCByZXR1cm4gYW55XG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0UHJvcFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFByb3Aoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzW2tleV0gIT09IHVuZGVmaW5lZCA/IHRoaXMucHJvcHNba2V5XSA6IHRoaXMuc3RhdGVba2V5XTtcbiAgICAgIH0gLy8gRklYTUU6IHVudHlwZWQgZmxvdyBjb2RlLCByZXR1cm4gYW55XG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2FsbFByb3BcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxsUHJvcChuYW1lKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wc1tuYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhciBfdGhpcyRwcm9wcztcblxuICAgICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAoX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzKVtuYW1lXS5hcHBseShfdGhpcyRwcm9wcywgYXJncyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGRlZmF1bHRJbnB1dFZhbHVlID0gX3RoaXMkcHJvcHMyLmRlZmF1bHRJbnB1dFZhbHVlLFxuICAgICAgICAgICAgZGVmYXVsdE1lbnVJc09wZW4gPSBfdGhpcyRwcm9wczIuZGVmYXVsdE1lbnVJc09wZW4sXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWUgPSBfdGhpcyRwcm9wczIuZGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3RoaXMkcHJvcHMyLCBbXCJkZWZhdWx0SW5wdXRWYWx1ZVwiLCBcImRlZmF1bHRNZW51SXNPcGVuXCIsIFwiZGVmYXVsdFZhbHVlXCJdKTtcblxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0Q29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihfcmVmKSB7XG4gICAgICAgICAgICBfdGhpczIuc2VsZWN0ID0gX3JlZjtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlucHV0VmFsdWU6IHRoaXMuZ2V0UHJvcCgnaW5wdXRWYWx1ZScpLFxuICAgICAgICAgIG1lbnVJc09wZW46IHRoaXMuZ2V0UHJvcCgnbWVudUlzT3BlbicpLFxuICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgICAgIG9uSW5wdXRDaGFuZ2U6IHRoaXMub25JbnB1dENoYW5nZSxcbiAgICAgICAgICBvbk1lbnVDbG9zZTogdGhpcy5vbk1lbnVDbG9zZSxcbiAgICAgICAgICBvbk1lbnVPcGVuOiB0aGlzLm9uTWVudU9wZW4sXG4gICAgICAgICAgdmFsdWU6IHRoaXMuZ2V0UHJvcCgndmFsdWUnKVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFN0YXRlTWFuYWdlcjtcbiAgfShDb21wb25lbnQpLCBfY2xhc3MuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzLCBfdGVtcDtcbn07XG5cbmV4cG9ydCB7IG1hbmFnZVN0YXRlIGFzIG0gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=