webpackHotUpdate_N_E("pages/admin/crud/gite/[slug]",{

/***/ "./components/admin/forms/FormUpdateGite.js":
/*!**************************************************!*\
  !*** ./components/admin/forms/FormUpdateGite.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");




var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\forms\\FormUpdateGite.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var FormUpdateGite = function FormUpdateGite(_ref) {
  _s();

  var preloadedValues = _ref.preloadedValues,
      router = _ref.router;
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_5__["getCookie"])('token');

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["useForm"])({
    defaultValues: preloadedValues
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    nom: '',
    mtitle: '',
    presGiteSEO: '',
    texteExterieur: '',
    equipementExterieur: '',
    texteInterieur: '',
    equipementInterieur: '',
    textePiscine: '',
    equipementPiscine: '',
    texte: '',
    detailGite: '',
    capacite: '',
    videoLink: '',
    calendrierLink: '',
    couleur1: '#AAAAAA',
    couleur2: '#111111',
    error: '',
    success: '',
    loading: false,
    formData: ''
  }),
      values = _useState[0],
      setValues = _useState[1];

  var nom = values.nom,
      mtitle = values.mtitle,
      presGiteSEO = values.presGiteSEO,
      texteExterieur = values.texteExterieur,
      equipementExterieur = values.equipementExterieur,
      texteInterieur = values.texteInterieur,
      equipementInterieur = values.equipementInterieur,
      textePiscine = values.textePiscine,
      equipementPiscine = values.equipementPiscine,
      texte = values.texte,
      detailGite = values.detailGite,
      capacite = values.capacite,
      videoLink = values.videoLink,
      calendrierLink = values.calendrierLink,
      couleur1 = values.couleur1,
      couleur2 = values.couleur2,
      error = values.error,
      success = values.success,
      loading = values.loading,
      formData = values.formData;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      formData: new FormData()
    }));
  }, []);

  var onSubmit = function onSubmit(data) {
    e.preventDefault();
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      loading: true
    }));
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_3__["updateGite"])(formData, token).then(function (data) {
      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error
        }));
      } else {
        setValues({
          nom: '',
          mtitle: '',
          presGiteSEO: '',
          texte: '',
          texteExterieur: '',
          equipementExterieur: '',
          texteInterieur: '',
          equipementInterieur: '',
          textePiscine: '',
          equipementPiscine: '',
          detailGite: '',
          capacite: '',
          videoLink: '',
          calendrierLink: '',
          pdf: '',
          couleur1: '#FFFFFF',
          couleur2: '#111111',
          error: '',
          success: 'Le gîte a bien été ajouté',
          loading: false
        });
        setTimeout(function () {
          next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/admin/gestionPages');
        }, 3000);
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: handleSubmit(onSubmit),
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
              lineNumber: 106,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              name: 'nom',
              className: "form-control",
              ref: register({
                required: true
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Meta Title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              name: 'mtitle',
              className: "form-control",
              ref: register({
                required: true
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "M\xE9ta-Description (pr\xE9sentation SEO du g\xEEte pour Google)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              type: "text",
              name: 'presGiteSEO',
              className: "form-control",
              ref: register({
                required: true
              }),
              cols: "30",
              rows: "4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Texte du g\xEEte"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              type: "text",
              name: 'texte',
              className: "form-control",
              ref: register(),
              cols: "30",
              rows: "4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Texte de l'ext\xE9rieur"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              type: "text",
              name: 'texteExterieur',
              className: "form-control",
              ref: register(),
              cols: "30",
              rows: "4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Texte de l'int\xE9rieur"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              type: "text",
              name: 'texteInterieur',
              className: "form-control",
              ref: register(),
              cols: "30",
              rows: "4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Texte de la piscine"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              type: "text",
              name: 'textePiscine',
              className: "form-control",
              ref: register(),
              cols: "30",
              rows: "4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "D\xE9tail du g\xEEte"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              type: "text",
              name: 'detailGite',
              className: "form-control",
              ref: register(),
              cols: "30",
              rows: "4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Capacit\xE9 du g\xEEte"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "number",
              name: 'capacite',
              className: "form-control",
              ref: register({
                required: true
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Equipement ext\xE9rieur (s\xE9parer par une virgule)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              name: 'equipementExterieur',
              className: "form-control",
              ref: register()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Equipement int\xE9rieur (s\xE9parer par une virgule)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              name: 'equipementInterieur',
              className: "form-control",
              ref: register()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Equipement Piscine (s\xE9parer par une virgule)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              name: 'equipementPiscine',
              className: "form-control",
              ref: register()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
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
              lineNumber: 240,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "text-muted",
                children: "Lien vid\xE9o YouTube"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 242,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                name: 'videoLink',
                className: "form-control",
                ref: register()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 245,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "text-muted",
                children: "Lien du calendrier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 253,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                name: 'calendrierLink',
                className: "form-control",
                ref: register()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 256,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
            className: "border p-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
              className: "w-auto",
              children: "Couleurs"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "text-muted",
                children: "Couleur de fond"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 268,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "color",
                name: 'couleur1',
                className: "form-control",
                ref: register({
                  required: true
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 271,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 267,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "text-muted",
                children: "Couleur du texte (noir par d\xE9fault)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 279,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "color",
                name: 'couleur2',
                className: "form-control",
                ref: register({
                  required: true
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 282,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 278,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 5
      }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Alert"], {
        color: "success",
        children: "Le g\xEEte a bien \xE9t\xE9 ajout\xE9, redirection en cours..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 6
      }, _this), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Spinner"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 17
      }, _this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Alert"], {
        color: "danger",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-info",
          children: "Modifier ce g\xEEte"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 4
    }, _this)
  }, void 0, false);
};

_s(FormUpdateGite, "+VswWLN7shQyL42YlujOzUO7SYI=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_7__["useForm"]];
});

_c = FormUpdateGite;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(FormUpdateGite));

var _c, _c2;

$RefreshReg$(_c, "FormUpdateGite");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9Gb3JtVXBkYXRlR2l0ZS5qcyJdLCJuYW1lcyI6WyJGb3JtVXBkYXRlR2l0ZSIsInByZWxvYWRlZFZhbHVlcyIsInJvdXRlciIsInRva2VuIiwiZ2V0Q29va2llIiwidXNlRm9ybSIsImRlZmF1bHRWYWx1ZXMiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInVzZVN0YXRlIiwibm9tIiwibXRpdGxlIiwicHJlc0dpdGVTRU8iLCJ0ZXh0ZUV4dGVyaWV1ciIsImVxdWlwZW1lbnRFeHRlcmlldXIiLCJ0ZXh0ZUludGVyaWV1ciIsImVxdWlwZW1lbnRJbnRlcmlldXIiLCJ0ZXh0ZVBpc2NpbmUiLCJlcXVpcGVtZW50UGlzY2luZSIsInRleHRlIiwiZGV0YWlsR2l0ZSIsImNhcGFjaXRlIiwidmlkZW9MaW5rIiwiY2FsZW5kcmllckxpbmsiLCJjb3VsZXVyMSIsImNvdWxldXIyIiwiZXJyb3IiLCJzdWNjZXNzIiwibG9hZGluZyIsImZvcm1EYXRhIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlRWZmZWN0IiwiRm9ybURhdGEiLCJvblN1Ym1pdCIsImRhdGEiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1cGRhdGVHaXRlIiwidGhlbiIsInBkZiIsInNldFRpbWVvdXQiLCJSb3V0ZXIiLCJwdXNoIiwicmVxdWlyZWQiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUFpQztBQUFBOztBQUFBLE1BQTlCQyxlQUE4QixRQUE5QkEsZUFBOEI7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDdkQsTUFBTUMsS0FBSyxHQUFHQyxzRUFBUyxDQUFDLE9BQUQsQ0FBdkI7O0FBRHVELGlCQUVwQkMsK0RBQU8s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QUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9naXRlL1tzbHVnXS5mZmM5NTk3ZTZmYWYxOTFmMjVkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlR2l0ZSwgdXBkYXRlR2l0ZSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5pbXBvcnQgeyBTcGlubmVyLCBBbGVydCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgRm9ybVVwZGF0ZUdpdGUgPSAoeyBwcmVsb2FkZWRWYWx1ZXMsIHJvdXRlciB9KSA9PiB7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblx0Y29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKHtcclxuXHRcdGRlZmF1bHRWYWx1ZXM6IHByZWxvYWRlZFZhbHVlcyxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuXHRcdG5vbTogJycsXHJcblx0XHRtdGl0bGU6ICcnLFxyXG5cdFx0cHJlc0dpdGVTRU86ICcnLFxyXG5cdFx0dGV4dGVFeHRlcmlldXI6ICcnLFxyXG5cdFx0ZXF1aXBlbWVudEV4dGVyaWV1cjogJycsXHJcblx0XHR0ZXh0ZUludGVyaWV1cjogJycsXHJcblx0XHRlcXVpcGVtZW50SW50ZXJpZXVyOiAnJyxcclxuXHRcdHRleHRlUGlzY2luZTogJycsXHJcblx0XHRlcXVpcGVtZW50UGlzY2luZTogJycsXHJcblx0XHR0ZXh0ZTogJycsXHJcblx0XHRkZXRhaWxHaXRlOiAnJyxcclxuXHRcdGNhcGFjaXRlOiAnJyxcclxuXHRcdHZpZGVvTGluazogJycsXHJcblx0XHRjYWxlbmRyaWVyTGluazogJycsXHJcblx0XHRjb3VsZXVyMTogJyNBQUFBQUEnLFxyXG5cdFx0Y291bGV1cjI6ICcjMTExMTExJyxcclxuXHRcdGVycm9yOiAnJyxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRmb3JtRGF0YTogJycsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdG5vbSxcclxuXHRcdG10aXRsZSxcclxuXHRcdHByZXNHaXRlU0VPLFxyXG5cdFx0dGV4dGVFeHRlcmlldXIsXHJcblx0XHRlcXVpcGVtZW50RXh0ZXJpZXVyLFxyXG5cdFx0dGV4dGVJbnRlcmlldXIsXHJcblx0XHRlcXVpcGVtZW50SW50ZXJpZXVyLFxyXG5cdFx0dGV4dGVQaXNjaW5lLFxyXG5cdFx0ZXF1aXBlbWVudFBpc2NpbmUsXHJcblx0XHR0ZXh0ZSxcclxuXHRcdGRldGFpbEdpdGUsXHJcblx0XHRjYXBhY2l0ZSxcclxuXHRcdHZpZGVvTGluayxcclxuXHRcdGNhbGVuZHJpZXJMaW5rLFxyXG5cdFx0Y291bGV1cjEsXHJcblx0XHRjb3VsZXVyMixcclxuXHRcdGVycm9yLFxyXG5cdFx0c3VjY2VzcyxcclxuXHRcdGxvYWRpbmcsXHJcblx0XHRmb3JtRGF0YSxcclxuXHR9ID0gdmFsdWVzO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBmb3JtRGF0YTogbmV3IEZvcm1EYXRhKCkgfSk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCBvblN1Ym1pdCA9IChkYXRhKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUgfSk7XHJcblx0XHR1cGRhdGVHaXRlKGZvcm1EYXRhLCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3IgfSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdG5vbTogJycsXHJcblx0XHRcdFx0XHRtdGl0bGU6ICcnLFxyXG5cdFx0XHRcdFx0cHJlc0dpdGVTRU86ICcnLFxyXG5cdFx0XHRcdFx0dGV4dGU6ICcnLFxyXG5cdFx0XHRcdFx0dGV4dGVFeHRlcmlldXI6ICcnLFxyXG5cdFx0XHRcdFx0ZXF1aXBlbWVudEV4dGVyaWV1cjogJycsXHJcblx0XHRcdFx0XHR0ZXh0ZUludGVyaWV1cjogJycsXHJcblx0XHRcdFx0XHRlcXVpcGVtZW50SW50ZXJpZXVyOiAnJyxcclxuXHRcdFx0XHRcdHRleHRlUGlzY2luZTogJycsXHJcblx0XHRcdFx0XHRlcXVpcGVtZW50UGlzY2luZTogJycsXHJcblx0XHRcdFx0XHRkZXRhaWxHaXRlOiAnJyxcclxuXHRcdFx0XHRcdGNhcGFjaXRlOiAnJyxcclxuXHRcdFx0XHRcdHZpZGVvTGluazogJycsXHJcblx0XHRcdFx0XHRjYWxlbmRyaWVyTGluazogJycsXHJcblx0XHRcdFx0XHRwZGY6ICcnLFxyXG5cdFx0XHRcdFx0Y291bGV1cjE6ICcjRkZGRkZGJyxcclxuXHRcdFx0XHRcdGNvdWxldXIyOiAnIzExMTExMScsXHJcblx0XHRcdFx0XHRlcnJvcjogJycsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiAnTGUgZ8OudGUgYSBiaWVuIMOpdMOpIGFqb3V0w6knLFxyXG5cdFx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRSb3V0ZXIucHVzaCgnL2FkbWluL2dlc3Rpb25QYWdlcycpO1xyXG5cdFx0XHRcdH0sIDMwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTgnPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+Tm9tIGR1IGfDrnRlPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPXsnbm9tJ31cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+TWV0YSBUaXRsZTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT17J210aXRsZSd9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0TcOpdGEtRGVzY3JpcHRpb24gKHByw6lzZW50YXRpb24gU0VPIGR1IGfDrnRlIHBvdXJcclxuXHRcdFx0XHRcdFx0XHRcdEdvb2dsZSlcclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9eydwcmVzR2l0ZVNFTyd9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHRcdGNvbHM9JzMwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cm93cz0nNCc+PC90ZXh0YXJlYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+VGV4dGUgZHUgZ8OudGU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9eyd0ZXh0ZSd9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoKX1cclxuXHRcdFx0XHRcdFx0XHRcdGNvbHM9JzMwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cm93cz0nNCc+PC90ZXh0YXJlYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5cclxuXHRcdFx0XHRcdFx0XHRcdFRleHRlIGRlIGwnZXh0w6lyaWV1clxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT17J3RleHRlRXh0ZXJpZXVyJ31cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3RlcigpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y29scz0nMzAnXHJcblx0XHRcdFx0XHRcdFx0XHRyb3dzPSc0Jz48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0VGV4dGUgZGUgbCdpbnTDqXJpZXVyXHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWFcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPXsndGV4dGVJbnRlcmlldXInfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKCl9XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xzPSczMCdcclxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9JzQnPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRUZXh0ZSBkZSBsYSBwaXNjaW5lXHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWFcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPXsndGV4dGVQaXNjaW5lJ31cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3RlcigpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y29scz0nMzAnXHJcblx0XHRcdFx0XHRcdFx0XHRyb3dzPSc0Jz48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPkTDqXRhaWwgZHUgZ8OudGU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9eydkZXRhaWxHaXRlJ31cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3RlcigpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y29scz0nMzAnXHJcblx0XHRcdFx0XHRcdFx0XHRyb3dzPSc0Jz48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0Q2FwYWNpdMOpIGR1IGfDrnRlXHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9eydjYXBhY2l0ZSd9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0RXF1aXBlbWVudCBleHTDqXJpZXVyIChzw6lwYXJlciBwYXIgdW5lIHZpcmd1bGUpXHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPXsnZXF1aXBlbWVudEV4dGVyaWV1cid9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoKX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0RXF1aXBlbWVudCBpbnTDqXJpZXVyIChzw6lwYXJlciBwYXIgdW5lIHZpcmd1bGUpXHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPXsnZXF1aXBlbWVudEludGVyaWV1cid9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoKX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0RXF1aXBlbWVudCBQaXNjaW5lIChzw6lwYXJlciBwYXIgdW5lIHZpcmd1bGUpXHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPXsnZXF1aXBlbWVudFBpc2NpbmUnfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKCl9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNCc+XHJcblx0XHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzc05hbWU9J2JvcmRlciBwLTInPlxyXG5cdFx0XHRcdFx0XHRcdDxsZWdlbmQgY2xhc3NOYW1lPSd3LWF1dG8nPkxpZW5zPC9sZWdlbmQ+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdExpZW4gdmlkw6lvIFlvdVR1YmVcclxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT17J3ZpZGVvTGluayd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKCl9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRMaWVuIGR1IGNhbGVuZHJpZXJcclxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT17J2NhbGVuZHJpZXJMaW5rJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoKX1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZmllbGRzZXQ+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZmllbGRzZXQgY2xhc3NOYW1lPSdib3JkZXIgcC0yJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGVnZW5kIGNsYXNzTmFtZT0ndy1hdXRvJz5Db3VsZXVyczwvbGVnZW5kPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRDb3VsZXVyIGRlIGZvbmRcclxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nY29sb3InXHJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9eydjb3VsZXVyMSd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRDb3VsZXVyIGR1IHRleHRlIChub2lyIHBhciBkw6lmYXVsdClcclxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nY29sb3InXHJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9eydjb3VsZXVyMid9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0e3N1Y2Nlc3MgJiYgKFxyXG5cdFx0XHRcdFx0PEFsZXJ0IGNvbG9yPSdzdWNjZXNzJz5cclxuXHRcdFx0XHRcdFx0TGUgZ8OudGUgYSBiaWVuIMOpdMOpIGFqb3V0w6ksIHJlZGlyZWN0aW9uIGVuIGNvdXJzLi4uXHJcblx0XHRcdFx0XHQ8L0FsZXJ0PlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdFx0e2xvYWRpbmcgJiYgPFNwaW5uZXIgLz59XHJcblx0XHRcdFx0e2Vycm9yICYmIDxBbGVydCBjb2xvcj0nZGFuZ2VyJz57ZXJyb3J9PC9BbGVydD59XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0biBidG4taW5mbyc+XHJcblx0XHRcdFx0XHRcdE1vZGlmaWVyIGNlIGfDrnRlXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoRm9ybVVwZGF0ZUdpdGUpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9