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
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\FormCreateGite.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var FormCreateGite = function FormCreateGite() {
  _s();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      watch = _useForm.watch,
      errors = _useForm.errors;

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

  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_4__["getCookie"])('token');
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
  }, []); // const handleChange = (name) => (e) => {
  // 	let value = e.target.value;
  // 	formData.set(name, value);
  // 	setValues({ ...values, [name]: value, formData, error: '' });
  // };

  var onSubmit = function onSubmit(data) {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      loading: true
    }));
    console.log(data);
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
              lineNumber: 144,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              value: nom,
              className: "form-control",
              ref: register({
                required: true
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Meta Title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              value: mtitle,
              className: "form-control",
              ref: register({
                required: true
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "M\xE9ta-Description (pr\xE9sentation SEO du g\xEEte pour Google)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              type: "text",
              value: presGiteSEO,
              className: "form-control",
              ref: register({
                required: true
              }),
              cols: "30",
              rows: "4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Texte du g\xEEte"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              type: "text",
              value: texte,
              className: "form-control",
              ref: register(),
              cols: "30",
              rows: "4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Texte de l'ext\xE9rieur"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              type: "text",
              value: texteExterieur,
              className: "form-control",
              ref: register(),
              cols: "30",
              rows: "4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Texte de l'int\xE9rieur"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              type: "text",
              value: texteInterieur,
              className: "form-control",
              ref: register(),
              cols: "30",
              rows: "4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Texte de la piscine"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              type: "text",
              value: textePiscine,
              className: "form-control",
              ref: register(),
              cols: "30",
              rows: "4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "D\xE9tail du g\xEEte"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              type: "text",
              value: detailGite,
              className: "form-control",
              ref: register(),
              cols: "30",
              rows: "4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Capacit\xE9 du g\xEEte"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "number",
              value: capacite,
              className: "form-control",
              ref: register({
                required: true
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 235,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Equipement ext\xE9rieur (s\xE9parer par une virgule)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 243,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              value: equipementExterieur,
              className: "form-control",
              ref: register()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Equipement int\xE9rieur (s\xE9parer par une virgule)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              value: equipementInterieur,
              className: "form-control",
              ref: register()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 257,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Equipement Piscine (s\xE9parer par une virgule)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              value: equipementPiscine,
              className: "form-control",
              ref: register()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 268,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 142,
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
              lineNumber: 278,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "text-muted",
                children: "Lien vid\xE9o YouTube"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 280,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                value: videoLink,
                className: "form-control",
                ref: register()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 283,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "text-muted",
                children: "Lien du calendrier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 291,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                value: calendrierLink,
                className: "form-control",
                ref: register()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 294,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 290,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 277,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
            className: "border p-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
              className: "w-auto",
              children: "Couleurs"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 304,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "text-muted",
                children: "Couleur de fond"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 306,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "color",
                value: couleur1,
                className: "form-control",
                ref: register({
                  required: true
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 309,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 305,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "text-muted",
                children: "Couleur du texte (noir par d\xE9fault)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 317,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "color",
                value: couleur2,
                className: "form-control",
                ref: register({
                  required: true
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 320,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 316,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 303,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 5
      }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "alert alert-success",
        children: "Le g\xEEte a bien \xE9t\xE9 ajout\xE9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 6
      }, _this), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "alert alert-success",
        children: "Chargement en cours..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 6
      }, _this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "alert alert-danger",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-info",
          children: "Cr\xE9er ce g\xEEte"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 342,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 4
    }, _this)
  }, void 0, false);
};

_s(FormCreateGite, "rB4Ihj/pGN2eWuvZ9eMZRwxFz/k=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9Gb3JtQ3JlYXRlR2l0ZS5qcyJdLCJuYW1lcyI6WyJGb3JtQ3JlYXRlR2l0ZSIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsIndhdGNoIiwiZXJyb3JzIiwidXNlU3RhdGUiLCJub20iLCJtdGl0bGUiLCJwcmVzR2l0ZVNFTyIsInRleHRlRXh0ZXJpZXVyIiwiZXF1aXBlbWVudEV4dGVyaWV1ciIsInRleHRlSW50ZXJpZXVyIiwiZXF1aXBlbWVudEludGVyaWV1ciIsInRleHRlUGlzY2luZSIsImVxdWlwZW1lbnRQaXNjaW5lIiwidGV4dGUiLCJkZXRhaWxHaXRlIiwiY2FwYWNpdGUiLCJ2aWRlb0xpbmsiLCJjYWxlbmRyaWVyTGluayIsImNvdWxldXIxIiwiY291bGV1cjIiLCJlcnJvciIsInN1Y2Nlc3MiLCJsb2FkaW5nIiwiZm9ybURhdGEiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ0b2tlbiIsImdldENvb2tpZSIsInVzZUVmZmVjdCIsIkZvcm1EYXRhIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUdpdGUiLCJ0aGVuIiwicGRmIiwic2V0VGltZW91dCIsIlJvdXRlciIsInB1c2giLCJjcmVlckdpdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFBQSxpQkFDc0JDLCtEQUFPLEVBRDdCO0FBQUEsTUFDcEJDLFFBRG9CLFlBQ3BCQSxRQURvQjtBQUFBLE1BQ1ZDLFlBRFUsWUFDVkEsWUFEVTtBQUFBLE1BQ0lDLEtBREosWUFDSUEsS0FESjtBQUFBLE1BQ1dDLE1BRFgsWUFDV0EsTUFEWDs7QUFBQSxrQkFHQUMsc0RB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cGFnZXMvYWRtaW4vY3J1ZC9naXRlL2NyZWF0ZS40MDZmMzdmYWI1YzNlMjRiYmZjOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlR2l0ZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgRm9ybUNyZWF0ZUdpdGUgPSAoKSA9PiB7XHJcblx0Y29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCB3YXRjaCwgZXJyb3JzIH0gPSB1c2VGb3JtKCk7XHJcblxyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRub206ICcnLFxyXG5cdFx0bXRpdGxlOiAnJyxcclxuXHRcdHByZXNHaXRlU0VPOiAnJyxcclxuXHRcdHRleHRlRXh0ZXJpZXVyOiAnJyxcclxuXHRcdGVxdWlwZW1lbnRFeHRlcmlldXI6ICcnLFxyXG5cdFx0dGV4dGVJbnRlcmlldXI6ICcnLFxyXG5cdFx0ZXF1aXBlbWVudEludGVyaWV1cjogJycsXHJcblx0XHR0ZXh0ZVBpc2NpbmU6ICcnLFxyXG5cdFx0ZXF1aXBlbWVudFBpc2NpbmU6ICcnLFxyXG5cdFx0dGV4dGU6ICcnLFxyXG5cdFx0ZGV0YWlsR2l0ZTogJycsXHJcblx0XHRjYXBhY2l0ZTogJycsXHJcblx0XHR2aWRlb0xpbms6ICcnLFxyXG5cdFx0Y2FsZW5kcmllckxpbms6ICcnLFxyXG5cdFx0Y291bGV1cjE6ICcjQUFBQUFBJyxcclxuXHRcdGNvdWxldXIyOiAnIzExMTExMScsXHJcblx0XHRlcnJvcjogJycsXHJcblx0XHRzdWNjZXNzOiAnJyxcclxuXHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0Zm9ybURhdGE6ICcnLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHRjb25zdCB7XHJcblx0XHRub20sXHJcblx0XHRtdGl0bGUsXHJcblx0XHRwcmVzR2l0ZVNFTyxcclxuXHRcdHRleHRlRXh0ZXJpZXVyLFxyXG5cdFx0ZXF1aXBlbWVudEV4dGVyaWV1cixcclxuXHRcdHRleHRlSW50ZXJpZXVyLFxyXG5cdFx0ZXF1aXBlbWVudEludGVyaWV1cixcclxuXHRcdHRleHRlUGlzY2luZSxcclxuXHRcdGVxdWlwZW1lbnRQaXNjaW5lLFxyXG5cdFx0dGV4dGUsXHJcblx0XHRkZXRhaWxHaXRlLFxyXG5cdFx0Y2FwYWNpdGUsXHJcblx0XHR2aWRlb0xpbmssXHJcblx0XHRjYWxlbmRyaWVyTGluayxcclxuXHRcdGNvdWxldXIxLFxyXG5cdFx0Y291bGV1cjIsXHJcblx0XHRlcnJvcixcclxuXHRcdHN1Y2Nlc3MsXHJcblx0XHRsb2FkaW5nLFxyXG5cdFx0Zm9ybURhdGEsXHJcblx0fSA9IHZhbHVlcztcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZm9ybURhdGE6IG5ldyBGb3JtRGF0YSgpIH0pO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Ly8gY29uc3QgaGFuZGxlQ2hhbmdlID0gKG5hbWUpID0+IChlKSA9PiB7XHJcblx0Ly8gXHRsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuXHJcblx0Ly8gXHRmb3JtRGF0YS5zZXQobmFtZSwgdmFsdWUpO1xyXG5cdC8vIFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBbbmFtZV06IHZhbHVlLCBmb3JtRGF0YSwgZXJyb3I6ICcnIH0pO1xyXG5cdC8vIH07XHJcblxyXG5cdGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IHtcclxuXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0Y3JlYXRlR2l0ZShmb3JtRGF0YSwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yIH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRub206ICcnLFxyXG5cdFx0XHRcdFx0bXRpdGxlOiAnJyxcclxuXHRcdFx0XHRcdHByZXNHaXRlU0VPOiAnJyxcclxuXHRcdFx0XHRcdHRleHRlOiAnJyxcclxuXHRcdFx0XHRcdHRleHRlRXh0ZXJpZXVyOiAnJyxcclxuXHRcdFx0XHRcdGVxdWlwZW1lbnRFeHRlcmlldXI6ICcnLFxyXG5cdFx0XHRcdFx0dGV4dGVJbnRlcmlldXI6ICcnLFxyXG5cdFx0XHRcdFx0ZXF1aXBlbWVudEludGVyaWV1cjogJycsXHJcblx0XHRcdFx0XHR0ZXh0ZVBpc2NpbmU6ICcnLFxyXG5cdFx0XHRcdFx0ZXF1aXBlbWVudFBpc2NpbmU6ICcnLFxyXG5cdFx0XHRcdFx0ZGV0YWlsR2l0ZTogJycsXHJcblx0XHRcdFx0XHRjYXBhY2l0ZTogJycsXHJcblx0XHRcdFx0XHR2aWRlb0xpbms6ICcnLFxyXG5cdFx0XHRcdFx0Y2FsZW5kcmllckxpbms6ICcnLFxyXG5cdFx0XHRcdFx0cGRmOiAnJyxcclxuXHRcdFx0XHRcdGNvdWxldXIxOiAnI0ZGRkZGRicsXHJcblx0XHRcdFx0XHRjb3VsZXVyMjogJyMxMTExMTEnLFxyXG5cdFx0XHRcdFx0ZXJyb3I6ICcnLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogJ0xlIGfDrnRlIGEgYmllbiDDqXTDqSBham91dMOpJyxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Um91dGVyLnB1c2goJy9hZG1pbi9nZXN0aW9uUGFnZXMnKTtcclxuXHRcdFx0XHR9LCAzMDAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHRjb25zdCBjcmVlckdpdGUgPSAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdFx0Y3JlYXRlR2l0ZShmb3JtRGF0YSwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yIH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRub206ICcnLFxyXG5cdFx0XHRcdFx0bXRpdGxlOiAnJyxcclxuXHRcdFx0XHRcdHByZXNHaXRlU0VPOiAnJyxcclxuXHRcdFx0XHRcdHRleHRlOiAnJyxcclxuXHRcdFx0XHRcdHRleHRlRXh0ZXJpZXVyOiAnJyxcclxuXHRcdFx0XHRcdGVxdWlwZW1lbnRFeHRlcmlldXI6ICcnLFxyXG5cdFx0XHRcdFx0dGV4dGVJbnRlcmlldXI6ICcnLFxyXG5cdFx0XHRcdFx0ZXF1aXBlbWVudEludGVyaWV1cjogJycsXHJcblx0XHRcdFx0XHR0ZXh0ZVBpc2NpbmU6ICcnLFxyXG5cdFx0XHRcdFx0ZXF1aXBlbWVudFBpc2NpbmU6ICcnLFxyXG5cdFx0XHRcdFx0ZGV0YWlsR2l0ZTogJycsXHJcblx0XHRcdFx0XHRjYXBhY2l0ZTogJycsXHJcblx0XHRcdFx0XHR2aWRlb0xpbms6ICcnLFxyXG5cdFx0XHRcdFx0Y2FsZW5kcmllckxpbms6ICcnLFxyXG5cdFx0XHRcdFx0cGRmOiAnJyxcclxuXHRcdFx0XHRcdGNvdWxldXIxOiAnI0ZGRkZGRicsXHJcblx0XHRcdFx0XHRjb3VsZXVyMjogJyMxMTExMTEnLFxyXG5cdFx0XHRcdFx0ZXJyb3I6ICcnLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogJ0xlIGfDrnRlIGEgYmllbiDDqXTDqSBham91dMOpJyxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Um91dGVyLnB1c2goJy9hZG1pbi9nZXN0aW9uUGFnZXMnKTtcclxuXHRcdFx0XHR9LCAzMDAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC04Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPk5vbSBkdSBnw650ZTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e25vbX1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+TWV0YSBUaXRsZTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e210aXRsZX1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRNw6l0YS1EZXNjcmlwdGlvbiAocHLDqXNlbnRhdGlvbiBTRU8gZHUgZ8OudGUgcG91clxyXG5cdFx0XHRcdFx0XHRcdFx0R29vZ2xlKVxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3ByZXNHaXRlU0VPfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xzPSczMCdcclxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9JzQnPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlRleHRlIGR1IGfDrnRlPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWFcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGV4dGV9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoKX1cclxuXHRcdFx0XHRcdFx0XHRcdGNvbHM9JzMwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cm93cz0nNCc+PC90ZXh0YXJlYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5cclxuXHRcdFx0XHRcdFx0XHRcdFRleHRlIGRlIGwnZXh0w6lyaWV1clxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RleHRlRXh0ZXJpZXVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKCl9XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xzPSczMCdcclxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9JzQnPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRUZXh0ZSBkZSBsJ2ludMOpcmlldXJcclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0ZXh0ZUludGVyaWV1cn1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3RlcigpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y29scz0nMzAnXHJcblx0XHRcdFx0XHRcdFx0XHRyb3dzPSc0Jz48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0VGV4dGUgZGUgbGEgcGlzY2luZVxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RleHRlUGlzY2luZX1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3RlcigpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y29scz0nMzAnXHJcblx0XHRcdFx0XHRcdFx0XHRyb3dzPSc0Jz48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPkTDqXRhaWwgZHUgZ8OudGU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtkZXRhaWxHaXRlfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKCl9XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xzPSczMCdcclxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9JzQnPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRDYXBhY2l0w6kgZHUgZ8OudGVcclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0nbnVtYmVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2NhcGFjaXRlfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5cclxuXHRcdFx0XHRcdFx0XHRcdEVxdWlwZW1lbnQgZXh0w6lyaWV1ciAoc8OpcGFyZXIgcGFyIHVuZSB2aXJndWxlKVxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2VxdWlwZW1lbnRFeHRlcmlldXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoKX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0RXF1aXBlbWVudCBpbnTDqXJpZXVyIChzw6lwYXJlciBwYXIgdW5lIHZpcmd1bGUpXHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17ZXF1aXBlbWVudEludGVyaWV1cn1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3RlcigpfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRFcXVpcGVtZW50IFBpc2NpbmUgKHPDqXBhcmVyIHBhciB1bmUgdmlyZ3VsZSlcclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtlcXVpcGVtZW50UGlzY2luZX1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3RlcigpfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTQnPlxyXG5cdFx0XHRcdFx0XHQ8ZmllbGRzZXQgY2xhc3NOYW1lPSdib3JkZXIgcC0yJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGVnZW5kIGNsYXNzTmFtZT0ndy1hdXRvJz5MaWVuczwvbGVnZW5kPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRMaWVuIHZpZMOpbyBZb3VUdWJlXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt2aWRlb0xpbmt9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKCl9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRMaWVuIGR1IGNhbGVuZHJpZXJcclxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2NhbGVuZHJpZXJMaW5rfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3RlcigpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9maWVsZHNldD5cclxuXHJcblx0XHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzc05hbWU9J2JvcmRlciBwLTInPlxyXG5cdFx0XHRcdFx0XHRcdDxsZWdlbmQgY2xhc3NOYW1lPSd3LWF1dG8nPkNvdWxldXJzPC9sZWdlbmQ+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdENvdWxldXIgZGUgZm9uZFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdjb2xvcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2NvdWxldXIxfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Q291bGV1ciBkdSB0ZXh0ZSAobm9pciBwYXIgZMOpZmF1bHQpXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J2NvbG9yJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Y291bGV1cjJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0e3N1Y2Nlc3MgJiYgKFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MnPlxyXG5cdFx0XHRcdFx0XHRMZSBnw650ZSBhIGJpZW4gw6l0w6kgYWpvdXTDqVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0XHR7bG9hZGluZyAmJiAoXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYWxlcnQgYWxlcnQtc3VjY2Vzcyc+XHJcblx0XHRcdFx0XHRcdENoYXJnZW1lbnQgZW4gY291cnMuLi5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdFx0e2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPSdhbGVydCBhbGVydC1kYW5nZXInPntlcnJvcn08L2Rpdj59XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0biBidG4taW5mbyc+XHJcblx0XHRcdFx0XHRcdENyw6llciBjZSBnw650ZVxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtQ3JlYXRlR2l0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==