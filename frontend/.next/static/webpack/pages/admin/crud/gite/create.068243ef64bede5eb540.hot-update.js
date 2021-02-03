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

  var onSubmit = function onSubmit(data) {
    return console.log(data);
  };

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
              lineNumber: 110,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              value: nom,
              className: "form-control",
              onChange: handleChange('nom')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Meta Title"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              value: mtitle,
              className: "form-control",
              onChange: handleChange('mtitle')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "M\xE9ta-Description (pr\xE9sentation SEO du g\xEEte pour Google)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              type: "text",
              value: presGiteSEO,
              className: "form-control",
              onChange: handleChange('presGiteSEO'),
              cols: "30",
              rows: "4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Texte du g\xEEte"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              type: "text",
              value: texte,
              className: "form-control",
              onChange: handleChange('texte'),
              cols: "30",
              rows: "4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Texte de l'ext\xE9rieur"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              type: "text",
              value: texteExterieur,
              className: "form-control",
              onChange: handleChange('texteExterieur'),
              cols: "30",
              rows: "4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Texte de l'int\xE9rieur"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              type: "text",
              value: texteInterieur,
              className: "form-control",
              onChange: handleChange('texteInterieur'),
              cols: "30",
              rows: "4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Texte de la piscine"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              type: "text",
              value: textePiscine,
              className: "form-control",
              onChange: handleChange('textePiscine'),
              cols: "30",
              rows: "4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
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
              children: "D\xE9tail du g\xEEte"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              type: "text",
              value: detailGite,
              className: "form-control",
              onChange: handleChange('detailGite'),
              cols: "30",
              rows: "4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Capacit\xE9 du g\xEEte"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "number",
              value: capacite,
              className: "form-control",
              onChange: handleChange('capacite')
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
              children: "Equipement ext\xE9rieur (s\xE9parer par une virgule)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              value: equipementExterieur,
              className: "form-control",
              onChange: handleChange('equipementExterieur')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Equipement int\xE9rieur (s\xE9parer par une virgule)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              value: equipementInterieur,
              className: "form-control",
              onChange: handleChange('equipementInterieur')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Equipement Piscine (s\xE9parer par une virgule)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              value: equipementPiscine,
              className: "form-control",
              onChange: handleChange('equipementPiscine')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
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
              lineNumber: 259,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "text-muted",
                children: "Lien vid\xE9o YouTube"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 261,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                value: videoLink,
                className: "form-control",
                onChange: handleChange('videoLink')
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 264,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "text-muted",
                children: "Lien du calendrier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 272,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                value: calendrierLink,
                className: "form-control",
                onChange: handleChange('calendrierLink')
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 275,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
            className: "border p-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
              className: "w-auto",
              children: "Couleurs"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 298,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "text-muted",
                children: "Couleur de fond"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 300,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "color",
                value: couleur1,
                className: "form-control",
                onChange: handleChange('couleur1')
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 303,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 299,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "text-muted",
                children: "Couleur du texte (noir par d\xE9fault)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 311,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "color",
                value: couleur2,
                className: "form-control",
                onChange: handleChange('couleur2')
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 314,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 310,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 5
      }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "alert alert-success",
        children: "Le g\xEEte a bien \xE9t\xE9 ajout\xE9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 6
      }, _this), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "alert alert-success",
        children: "Chargement en cours..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 6
      }, _this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "alert alert-danger",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-info",
          children: "Cr\xE9er ce g\xEEte"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
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

/***/ }),

/***/ "./node_modules/react-hook-form/dist/index.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/react-hook-form/dist/index.esm.js ***!
  \********************************************************/
/*! exports provided: Controller, FormProvider, appendErrors, get, transformToNestObject, useController, useFieldArray, useForm, useFormContext, useWatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProvider", function() { return FormProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendErrors", function() { return appendErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformToNestObject", function() { return transformToNestObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useController", function() { return useController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFieldArray", function() { return useFieldArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForm", function() { return useForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFormContext", function() { return useFormContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWatch", function() { return useWatch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var isHTMLElement = (value) => value instanceof HTMLElement;

const EVENTS = {
    BLUR: 'blur',
    CHANGE: 'change',
    INPUT: 'input',
};
const VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
};
const SELECT = 'select';
const UNDEFINED = 'undefined';
const INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
};

function attachEventListeners({ ref }, shouldAttachChangeEvent, handleChange) {
    if (isHTMLElement(ref) && handleChange) {
        ref.addEventListener(shouldAttachChangeEvent ? EVENTS.CHANGE : EVENTS.INPUT, handleChange);
        ref.addEventListener(EVENTS.BLUR, handleChange);
    }
}

var isNullOrUndefined = (value) => value == null;

const isObjectType = (value) => typeof value === 'object';
var isObject = (value) => !isNullOrUndefined(value) &&
    !Array.isArray(value) &&
    isObjectType(value) &&
    !(value instanceof Date);

var isKey = (value) => /^\w*$/.test(value);

var compact = (value) => value.filter(Boolean);

var stringToPath = (input) => compact(input
    .replace(/["|']/g, '')
    .replace(/\[/g, '.')
    .replace(/\]/g, '')
    .split('.'));

function set(object, path, value) {
    let index = -1;
    const tempPath = isKey(path) ? [path] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while (++index < length) {
        const key = tempPath[index];
        let newValue = value;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue =
                isObject(objValue) || Array.isArray(objValue)
                    ? objValue
                    : !isNaN(+tempPath[index + 1])
                        ? []
                        : {};
        }
        object[key] = newValue;
        object = object[key];
    }
    return object;
}

var transformToNestObject = (data, value = {}) => {
    for (const key in data) {
        !isKey(key) ? set(value, key, data[key]) : (value[key] = data[key]);
    }
    return value;
};

var isUndefined = (val) => val === undefined;

var get = (obj = {}, path, defaultValue) => {
    const result = compact(path.split(/[,[\].]+?/)).reduce((result, key) => (isNullOrUndefined(result) ? result : result[key]), obj);
    return isUndefined(result) || result === obj
        ? isUndefined(obj[path])
            ? defaultValue
            : obj[path]
        : result;
};

var focusOnErrorField = (fields, fieldErrors) => {
    for (const key in fields) {
        if (get(fieldErrors, key)) {
            const field = fields[key];
            if (field) {
                if (field.ref.focus && isUndefined(field.ref.focus())) {
                    break;
                }
                else if (field.options) {
                    field.options[0].ref.focus();
                    break;
                }
            }
        }
    }
};

var removeAllEventListeners = (ref, validateWithStateUpdate) => {
    if (isHTMLElement(ref) && ref.removeEventListener) {
        ref.removeEventListener(EVENTS.INPUT, validateWithStateUpdate);
        ref.removeEventListener(EVENTS.CHANGE, validateWithStateUpdate);
        ref.removeEventListener(EVENTS.BLUR, validateWithStateUpdate);
    }
};

const defaultReturn = {
    isValid: false,
    value: '',
};
var getRadioValue = (options) => Array.isArray(options)
    ? options.reduce((previous, option) => option && option.ref.checked
        ? {
            isValid: true,
            value: option.ref.value,
        }
        : previous, defaultReturn)
    : defaultReturn;

var getMultipleSelectValue = (options) => [...options]
    .filter(({ selected }) => selected)
    .map(({ value }) => value);

var isRadioInput = (element) => element.type === 'radio';

var isFileInput = (element) => element.type === 'file';

var isCheckBoxInput = (element) => element.type === 'checkbox';

var isMultipleSelect = (element) => element.type === `${SELECT}-multiple`;

const defaultResult = {
    value: false,
    isValid: false,
};
const validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
    if (Array.isArray(options)) {
        if (options.length > 1) {
            const values = options
                .filter((option) => option && option.ref.checked)
                .map(({ ref: { value } }) => value);
            return { value: values, isValid: !!values.length };
        }
        const { checked, value, attributes } = options[0].ref;
        return checked
            ? attributes && !isUndefined(attributes.value)
                ? isUndefined(value) || value === ''
                    ? validResult
                    : { value: value, isValid: true }
                : validResult
            : defaultResult;
    }
    return defaultResult;
};

function getFieldValue(fieldsRef, name, shallowFieldsStateRef, excludeDisabled) {
    const field = fieldsRef.current[name];
    if (field) {
        const { ref: { value, disabled }, ref, valueAsNumber, valueAsDate, setValueAs, } = field;
        if (disabled && excludeDisabled) {
            return;
        }
        if (isFileInput(ref)) {
            return ref.files;
        }
        if (isRadioInput(ref)) {
            return getRadioValue(field.options).value;
        }
        if (isMultipleSelect(ref)) {
            return getMultipleSelectValue(ref.options);
        }
        if (isCheckBoxInput(ref)) {
            return getCheckboxValue(field.options).value;
        }
        return valueAsNumber
            ? +value
            : valueAsDate
                ? ref.valueAsDate
                : setValueAs
                    ? setValueAs(value)
                    : value;
    }
    if (shallowFieldsStateRef) {
        return get(shallowFieldsStateRef.current, name);
    }
}

function isDetached(element) {
    if (!element) {
        return true;
    }
    if (!(element instanceof HTMLElement) ||
        element.nodeType === Node.DOCUMENT_NODE) {
        return false;
    }
    return isDetached(element.parentNode);
}

var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;

var isBoolean = (value) => typeof value === 'boolean';

function baseGet(object, updatePath) {
    const length = updatePath.slice(0, -1).length;
    let index = 0;
    while (index < length) {
        object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return object;
}
function unset(object, path) {
    const updatePath = isKey(path) ? [path] : stringToPath(path);
    const childObject = updatePath.length == 1 ? object : baseGet(object, updatePath);
    const key = updatePath[updatePath.length - 1];
    let previousObjRef;
    if (childObject) {
        delete childObject[key];
    }
    for (let k = 0; k < updatePath.slice(0, -1).length; k++) {
        let index = -1;
        let objectRef;
        const currentPaths = updatePath.slice(0, -(k + 1));
        const currentPathsLength = currentPaths.length - 1;
        if (k > 0) {
            previousObjRef = object;
        }
        while (++index < currentPaths.length) {
            const item = currentPaths[index];
            objectRef = objectRef ? objectRef[item] : object[item];
            if (currentPathsLength === index &&
                ((isObject(objectRef) && isEmptyObject(objectRef)) ||
                    (Array.isArray(objectRef) &&
                        !objectRef.filter((data) => (isObject(data) && !isEmptyObject(data)) || isBoolean(data)).length))) {
                previousObjRef ? delete previousObjRef[item] : delete object[item];
            }
            previousObjRef = objectRef;
        }
    }
    return object;
}

const isSameRef = (fieldValue, ref) => fieldValue && fieldValue.ref === ref;
function findRemovedFieldAndRemoveListener(fieldsRef, handleChange, field, shallowFieldsStateRef, shouldUnregister, forceDelete) {
    const { ref, ref: { name }, } = field;
    const fieldRef = fieldsRef.current[name];
    if (!shouldUnregister) {
        const value = getFieldValue(fieldsRef, name, shallowFieldsStateRef);
        !isUndefined(value) && set(shallowFieldsStateRef.current, name, value);
    }
    if (!ref.type || !fieldRef) {
        delete fieldsRef.current[name];
        return;
    }
    if (isRadioInput(ref) || isCheckBoxInput(ref)) {
        if (Array.isArray(fieldRef.options) && fieldRef.options.length) {
            compact(fieldRef.options).forEach((option = {}, index) => {
                if ((isDetached(option.ref) && isSameRef(option, option.ref)) ||
                    forceDelete) {
                    removeAllEventListeners(option.ref, handleChange);
                    unset(fieldRef.options, `[${index}]`);
                }
            });
            if (fieldRef.options && !compact(fieldRef.options).length) {
                delete fieldsRef.current[name];
            }
        }
        else {
            delete fieldsRef.current[name];
        }
    }
    else if ((isDetached(ref) && isSameRef(fieldRef, ref)) || forceDelete) {
        removeAllEventListeners(ref, handleChange);
        delete fieldsRef.current[name];
    }
}

var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);

function deepMerge(target, source) {
    if (isPrimitive(target) || isPrimitive(source)) {
        return source;
    }
    for (const key in source) {
        const targetValue = target[key];
        const sourceValue = source[key];
        try {
            target[key] =
                (isObject(targetValue) && isObject(sourceValue)) ||
                    (Array.isArray(targetValue) && Array.isArray(sourceValue))
                    ? deepMerge(targetValue, sourceValue)
                    : sourceValue;
        }
        catch (_a) { }
    }
    return target;
}

function deepEqual(object1, object2, isErrorObject) {
    if (isPrimitive(object1) ||
        isPrimitive(object2) ||
        object1 instanceof Date ||
        object2 instanceof Date) {
        return object1 === object2;
    }
    if (!Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(object1)) {
        const keys1 = Object.keys(object1);
        const keys2 = Object.keys(object2);
        if (keys1.length !== keys2.length) {
            return false;
        }
        for (const key of keys1) {
            const val1 = object1[key];
            if (!(isErrorObject && key === 'ref')) {
                const val2 = object2[key];
                if ((isObject(val1) || Array.isArray(val1)) &&
                    (isObject(val2) || Array.isArray(val2))
                    ? !deepEqual(val1, val2, isErrorObject)
                    : val1 !== val2) {
                    return false;
                }
            }
        }
    }
    return true;
}

function setDirtyFields(values, defaultValues, dirtyFields, parentNode, parentName) {
    let index = -1;
    while (++index < values.length) {
        for (const key in values[index]) {
            if (Array.isArray(values[index][key])) {
                !dirtyFields[index] && (dirtyFields[index] = {});
                dirtyFields[index][key] = [];
                setDirtyFields(values[index][key], get(defaultValues[index] || {}, key, []), dirtyFields[index][key], dirtyFields[index], key);
            }
            else {
                deepEqual(get(defaultValues[index] || {}, key), values[index][key])
                    ? set(dirtyFields[index] || {}, key)
                    : (dirtyFields[index] = Object.assign(Object.assign({}, dirtyFields[index]), { [key]: true }));
            }
        }
        parentNode &&
            !dirtyFields.length &&
            delete parentNode[parentName];
    }
    return dirtyFields;
}
var setFieldArrayDirtyFields = (values, defaultValues, dirtyFields) => deepMerge(setDirtyFields(values, defaultValues, dirtyFields.slice(0, values.length)), setDirtyFields(defaultValues, values, dirtyFields.slice(0, values.length)));

var isString = (value) => typeof value === 'string';

var getFieldsValues = (fieldsRef, shallowFieldsState, shouldUnregister, excludeDisabled, search) => {
    const output = {};
    for (const name in fieldsRef.current) {
        if (isUndefined(search) ||
            (isString(search)
                ? name.startsWith(search)
                : Array.isArray(search) && search.find((data) => name.startsWith(data)))) {
            output[name] = getFieldValue(fieldsRef, name, undefined, excludeDisabled);
        }
    }
    return shouldUnregister
        ? transformToNestObject(output)
        : deepMerge(shallowFieldsState, transformToNestObject(output));
};

var isErrorStateChanged = ({ errors, name, error, validFields, fieldsWithValidation, }) => {
    const isValid = isUndefined(error);
    const previousError = get(errors, name);
    return ((isValid && !!previousError) ||
        (!isValid && !deepEqual(previousError, error, true)) ||
        (isValid && get(fieldsWithValidation, name) && !get(validFields, name)));
};

var isRegex = (value) => value instanceof RegExp;

var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData)
    ? validationData
    : {
        value: validationData,
        message: '',
    };

var isFunction = (value) => typeof value === 'function';

var isMessage = (value) => isString(value) || Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(value);

function getValidateError(result, ref, type = 'validate') {
    if (isMessage(result) || (isBoolean(result) && !result)) {
        return {
            type,
            message: isMessage(result) ? result : '',
            ref,
        };
    }
}

var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria
    ? Object.assign(Object.assign({}, errors[name]), { types: Object.assign(Object.assign({}, (errors[name] && errors[name].types ? errors[name].types : {})), { [type]: message || true }) }) : {};

var validateField = async (fieldsRef, validateAllFieldCriteria, { ref, ref: { value }, options, required, maxLength, minLength, min, max, pattern, validate, }, shallowFieldsStateRef) => {
    const name = ref.name;
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = value === '';
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = Object.assign({ type: exceedMax ? maxType : minType, message,
            ref }, (exceedMax
            ? appendErrorsCurry(maxType, message)
            : appendErrorsCurry(minType, message)));
    };
    if (required &&
        ((!isRadio && !isCheckBox && (isEmpty || isNullOrUndefined(value))) ||
            (isBoolean(value) && !value) ||
            (isCheckBox && !getCheckboxValue(options).isValid) ||
            (isRadio && !getRadioValue(options).isValid))) {
        const { value, message } = isMessage(required)
            ? { value: !!required, message: required }
            : getValueAndMessage(required);
        if (value) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.required, message, ref: isRadioOrCheckbox
                    ? ((fieldsRef.current[name].options || [])[0] || {}).ref
                    : ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.required, message));
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if ((!isNullOrUndefined(min) || !isNullOrUndefined(max)) && value !== '') {
        let exceedMax;
        let exceedMin;
        const maxOutput = getValueAndMessage(max);
        const minOutput = getValueAndMessage(min);
        if (!isNaN(value)) {
            const valueNumber = ref.valueAsNumber || parseFloat(value);
            if (!isNullOrUndefined(maxOutput.value)) {
                exceedMax = valueNumber > maxOutput.value;
            }
            if (!isNullOrUndefined(minOutput.value)) {
                exceedMin = valueNumber < minOutput.value;
            }
        }
        else {
            const valueDate = ref.valueAsDate || new Date(value);
            if (isString(maxOutput.value)) {
                exceedMax = valueDate > new Date(maxOutput.value);
            }
            if (isString(minOutput.value)) {
                exceedMin = valueDate < new Date(minOutput.value);
            }
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (isString(value) && !isEmpty && (maxLength || minLength)) {
        const maxLengthOutput = getValueAndMessage(maxLength);
        const minLengthOutput = getValueAndMessage(minLength);
        const exceedMax = !isNullOrUndefined(maxLengthOutput.value) &&
            value.length > maxLengthOutput.value;
        const exceedMin = !isNullOrUndefined(minLengthOutput.value) &&
            value.length < minLengthOutput.value;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (isString(value) && pattern && !isEmpty) {
        const { value: patternValue, message } = getValueAndMessage(pattern);
        if (isRegex(patternValue) && !patternValue.test(value)) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.pattern, message,
                ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message));
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (validate) {
        const fieldValue = getFieldValue(fieldsRef, name, shallowFieldsStateRef);
        const validateRef = isRadioOrCheckbox && options ? options[0].ref : ref;
        if (isFunction(validate)) {
            const result = await validate(fieldValue);
            const validateError = getValidateError(result, validateRef);
            if (validateError) {
                error[name] = Object.assign(Object.assign({}, validateError), appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message));
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
        else if (isObject(validate)) {
            let validationResult = {};
            for (const [key, validateFunction] of Object.entries(validate)) {
                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                    break;
                }
                const validateResult = await validateFunction(fieldValue);
                const validateError = getValidateError(validateResult, validateRef, key);
                if (validateError) {
                    validationResult = Object.assign(Object.assign({}, validateError), appendErrorsCurry(key, validateError.message));
                    if (validateAllFieldCriteria) {
                        error[name] = validationResult;
                    }
                }
            }
            if (!isEmptyObject(validationResult)) {
                error[name] = Object.assign({ ref: validateRef }, validationResult);
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
    }
    return error;
};

const getPath = (rootPath, values, paths = []) => {
    for (const property in values) {
        const rootName = (rootPath +
            (isObject(values)
                ? `.${property}`
                : `[${property}]`));
        isPrimitive(values[property])
            ? paths.push(rootName)
            : getPath(rootName, values[property], paths);
    }
    return paths;
};

var assignWatchFields = (fieldValues, fieldName, watchFields, inputValue, isSingleField) => {
    let value = undefined;
    watchFields.add(fieldName);
    if (!isEmptyObject(fieldValues)) {
        value = get(fieldValues, fieldName);
        if (isObject(value) || Array.isArray(value)) {
            getPath(fieldName, value).forEach((name) => watchFields.add(name));
        }
    }
    return isUndefined(value)
        ? isSingleField
            ? inputValue
            : get(inputValue, fieldName)
        : value;
};

var skipValidation = ({ isOnBlur, isOnChange, isOnTouch, isTouched, isReValidateOnBlur, isReValidateOnChange, isBlurEvent, isSubmitted, isOnAll, }) => {
    if (isOnAll) {
        return false;
    }
    else if (!isSubmitted && isOnTouch) {
        return !(isTouched || isBlurEvent);
    }
    else if (isSubmitted ? isReValidateOnBlur : isOnBlur) {
        return !isBlurEvent;
    }
    else if (isSubmitted ? isReValidateOnChange : isOnChange) {
        return isBlurEvent;
    }
    return true;
};

var getFieldArrayParentName = (name) => name.substring(0, name.indexOf('['));

const isMatchFieldArrayName = (name, searchName) => RegExp(`^${searchName}([|.)\\d+`.replace(/\[/g, '\\[').replace(/\]/g, '\\]')).test(name);
var isNameInFieldArray = (names, name) => [...names].some((current) => isMatchFieldArrayName(name, current));

var isSelectInput = (element) => element.type === `${SELECT}-one`;

function onDomRemove(fieldsRef, removeFieldEventListenerAndRef) {
    const observer = new MutationObserver(() => {
        for (const field of Object.values(fieldsRef.current)) {
            if (field && field.options) {
                for (const option of field.options) {
                    if (option && option.ref && isDetached(option.ref)) {
                        removeFieldEventListenerAndRef(field);
                    }
                }
            }
            else if (field && isDetached(field.ref)) {
                removeFieldEventListenerAndRef(field);
            }
        }
    });
    observer.observe(window.document, {
        childList: true,
        subtree: true,
    });
    return observer;
}

var isWeb = typeof window !== UNDEFINED && typeof document !== UNDEFINED;

function cloneObject(data) {
    let copy;
    if (isPrimitive(data) ||
        (isWeb && (data instanceof File || isHTMLElement(data)))) {
        return data;
    }
    if (data instanceof Date) {
        copy = new Date(data.getTime());
        return copy;
    }
    if (data instanceof Set) {
        copy = new Set();
        for (const item of data) {
            copy.add(item);
        }
        return copy;
    }
    if (data instanceof Map) {
        copy = new Map();
        for (const key of data.keys()) {
            copy.set(key, cloneObject(data.get(key)));
        }
        return copy;
    }
    copy = Array.isArray(data) ? [] : {};
    for (const key in data) {
        copy[key] = cloneObject(data[key]);
    }
    return copy;
}

var modeChecker = (mode) => ({
    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
    isOnBlur: mode === VALIDATION_MODE.onBlur,
    isOnChange: mode === VALIDATION_MODE.onChange,
    isOnAll: mode === VALIDATION_MODE.all,
    isOnTouch: mode === VALIDATION_MODE.onTouched,
});

var isRadioOrCheckboxFunction = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);

const isWindowUndefined = typeof window === UNDEFINED;
const isProxyEnabled = isWeb ? 'Proxy' in window : typeof Proxy !== UNDEFINED;
function useForm({ mode = VALIDATION_MODE.onSubmit, reValidateMode = VALIDATION_MODE.onChange, resolver, context, defaultValues = {}, shouldFocusError = true, shouldUnregister = true, criteriaMode, } = {}) {
    const fieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const fieldArrayDefaultValuesRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const fieldArrayValuesRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const watchFieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Set());
    const useWatchFieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const useWatchRenderFunctionsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const fieldsWithValidationRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const validFieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const defaultValuesRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(defaultValues);
    const isUnMount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    const isWatchAllRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    const handleChangeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    const shallowFieldsStateRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const resetFieldArrayFunctionRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const contextRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(context);
    const resolverRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(resolver);
    const fieldArrayNamesRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Set());
    const modeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(modeChecker(mode));
    const { isOnSubmit, isOnTouch } = modeRef.current;
    const isValidateAllFieldCriteria = criteriaMode === VALIDATION_MODE.all;
    const [formState, setFormState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
        isDirty: false,
        isValidating: false,
        dirtyFields: {},
        isSubmitted: false,
        submitCount: 0,
        touched: {},
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: !isOnSubmit,
        errors: {},
    });
    const readFormStateRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        isDirty: !isProxyEnabled,
        dirtyFields: !isProxyEnabled,
        touched: !isProxyEnabled || isOnTouch,
        isValidating: !isProxyEnabled,
        isSubmitting: !isProxyEnabled,
        isValid: !isProxyEnabled,
    });
    const formStateRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(formState);
    const observerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    const { isOnBlur: isReValidateOnBlur, isOnChange: isReValidateOnChange, } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(modeChecker(reValidateMode)).current;
    contextRef.current = context;
    resolverRef.current = resolver;
    formStateRef.current = formState;
    shallowFieldsStateRef.current = shouldUnregister
        ? {}
        : isEmptyObject(shallowFieldsStateRef.current)
            ? cloneObject(defaultValues)
            : shallowFieldsStateRef.current;
    const updateFormState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((state = {}) => {
        if (!isUnMount.current) {
            formStateRef.current = Object.assign(Object.assign({}, formStateRef.current), state);
            setFormState(formStateRef.current);
        }
    }, []);
    const updateIsValidating = () => readFormStateRef.current.isValidating &&
        updateFormState({
            isValidating: true,
        });
    const shouldRenderBaseOnError = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, error, shouldRender = false, state = {}, isValid) => {
        let shouldReRender = shouldRender ||
            isErrorStateChanged({
                errors: formStateRef.current.errors,
                error,
                name,
                validFields: validFieldsRef.current,
                fieldsWithValidation: fieldsWithValidationRef.current,
            });
        const previousError = get(formStateRef.current.errors, name);
        if (error) {
            unset(validFieldsRef.current, name);
            shouldReRender =
                shouldReRender ||
                    !previousError ||
                    !deepEqual(previousError, error, true);
            set(formStateRef.current.errors, name, error);
        }
        else {
            if (get(fieldsWithValidationRef.current, name) || resolverRef.current) {
                set(validFieldsRef.current, name, true);
                shouldReRender = shouldReRender || previousError;
            }
            unset(formStateRef.current.errors, name);
        }
        if ((shouldReRender && !isNullOrUndefined(shouldRender)) ||
            !isEmptyObject(state) ||
            readFormStateRef.current.isValidating) {
            updateFormState(Object.assign(Object.assign(Object.assign({}, state), (resolverRef.current ? { isValid: !!isValid } : {})), { isValidating: false }));
        }
    }, []);
    const setFieldValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, rawValue) => {
        const { ref, options } = fieldsRef.current[name];
        const value = isWeb && isHTMLElement(ref) && isNullOrUndefined(rawValue)
            ? ''
            : rawValue;
        if (isRadioInput(ref)) {
            (options || []).forEach(({ ref: radioRef }) => (radioRef.checked = radioRef.value === value));
        }
        else if (isFileInput(ref) && !isString(value)) {
            ref.files = value;
        }
        else if (isMultipleSelect(ref)) {
            [...ref.options].forEach((selectRef) => (selectRef.selected = value.includes(selectRef.value)));
        }
        else if (isCheckBoxInput(ref) && options) {
            options.length > 1
                ? options.forEach(({ ref: checkboxRef }) => (checkboxRef.checked = Array.isArray(value)
                    ? !!value.find((data) => data === checkboxRef.value)
                    : value === checkboxRef.value))
                : (options[0].ref.checked = !!value);
        }
        else {
            ref.value = value;
        }
    }, []);
    const isFormDirty = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, data) => {
        if (readFormStateRef.current.isDirty) {
            const formValues = getValues();
            name && data && set(formValues, name, data);
            return !deepEqual(formValues, defaultValuesRef.current);
        }
        return false;
    }, []);
    const updateAndGetDirtyState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, shouldRender = true) => {
        if (readFormStateRef.current.isDirty ||
            readFormStateRef.current.dirtyFields) {
            const isFieldDirty = !deepEqual(get(defaultValuesRef.current, name), getFieldValue(fieldsRef, name, shallowFieldsStateRef));
            const isDirtyFieldExist = get(formStateRef.current.dirtyFields, name);
            const previousIsDirty = formStateRef.current.isDirty;
            isFieldDirty
                ? set(formStateRef.current.dirtyFields, name, true)
                : unset(formStateRef.current.dirtyFields, name);
            const state = {
                isDirty: isFormDirty(),
                dirtyFields: formStateRef.current.dirtyFields,
            };
            const isChanged = (readFormStateRef.current.isDirty &&
                previousIsDirty !== state.isDirty) ||
                (readFormStateRef.current.dirtyFields &&
                    isDirtyFieldExist !== get(formStateRef.current.dirtyFields, name));
            isChanged && shouldRender && updateFormState(state);
            return isChanged ? state : {};
        }
        return {};
    }, []);
    const executeValidation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (name, skipReRender) => {
        if (true) {
            if (!fieldsRef.current[name]) {
                console.warn('📋 Field is missing with `name` attribute: ', name);
                return false;
            }
        }
        const error = (await validateField(fieldsRef, isValidateAllFieldCriteria, fieldsRef.current[name], shallowFieldsStateRef))[name];
        shouldRenderBaseOnError(name, error, skipReRender);
        return isUndefined(error);
    }, [shouldRenderBaseOnError, isValidateAllFieldCriteria]);
    const executeSchemaOrResolverValidation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (names) => {
        const { errors } = await resolverRef.current(getValues(), contextRef.current, isValidateAllFieldCriteria);
        const previousFormIsValid = formStateRef.current.isValid;
        if (Array.isArray(names)) {
            const isInputsValid = names
                .map((name) => {
                const error = get(errors, name);
                error
                    ? set(formStateRef.current.errors, name, error)
                    : unset(formStateRef.current.errors, name);
                return !error;
            })
                .every(Boolean);
            updateFormState({
                isValid: isEmptyObject(errors),
                isValidating: false,
            });
            return isInputsValid;
        }
        else {
            const error = get(errors, names);
            shouldRenderBaseOnError(names, error, previousFormIsValid !== isEmptyObject(errors), {}, isEmptyObject(errors));
            return !error;
        }
    }, [shouldRenderBaseOnError, isValidateAllFieldCriteria]);
    const trigger = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (name) => {
        const fields = name || Object.keys(fieldsRef.current);
        updateIsValidating();
        if (resolverRef.current) {
            return executeSchemaOrResolverValidation(fields);
        }
        if (Array.isArray(fields)) {
            !name && (formStateRef.current.errors = {});
            const result = await Promise.all(fields.map(async (data) => await executeValidation(data, null)));
            updateFormState({
                isValidating: false,
            });
            return result.every(Boolean);
        }
        return await executeValidation(fields);
    }, [executeSchemaOrResolverValidation, executeValidation]);
    const setInternalValues = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, value, { shouldDirty, shouldValidate }) => {
        const data = {};
        set(data, name, value);
        for (const fieldName of getPath(name, value)) {
            if (fieldsRef.current[fieldName]) {
                setFieldValue(fieldName, get(data, fieldName));
                shouldDirty && updateAndGetDirtyState(fieldName);
                shouldValidate && trigger(fieldName);
            }
        }
    }, [trigger, setFieldValue, updateAndGetDirtyState]);
    const setInternalValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, value, config) => {
        !shouldUnregister &&
            !isPrimitive(value) &&
            set(shallowFieldsStateRef.current, name, Object.assign({}, value));
        if (fieldsRef.current[name]) {
            setFieldValue(name, value);
            config.shouldDirty && updateAndGetDirtyState(name);
            config.shouldValidate && trigger(name);
        }
        else if (!isPrimitive(value)) {
            setInternalValues(name, value, config);
            if (fieldArrayNamesRef.current.has(name)) {
                const parentName = getFieldArrayParentName(name) || name;
                set(fieldArrayDefaultValuesRef.current, name, value);
                resetFieldArrayFunctionRef.current[parentName]({
                    [parentName]: get(fieldArrayDefaultValuesRef.current, parentName),
                });
                if ((readFormStateRef.current.isDirty ||
                    readFormStateRef.current.dirtyFields) &&
                    config.shouldDirty) {
                    set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(value, get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
                    updateFormState({
                        isDirty: !deepEqual(Object.assign(Object.assign({}, getValues()), { [name]: value }), defaultValuesRef.current),
                    });
                }
            }
        }
        !shouldUnregister && set(shallowFieldsStateRef.current, name, value);
    }, [updateAndGetDirtyState, setFieldValue, setInternalValues]);
    const isFieldWatched = (name) => isWatchAllRef.current ||
        watchFieldsRef.current.has(name) ||
        watchFieldsRef.current.has((name.match(/\w+/) || [])[0]);
    const renderWatchedInputs = (name) => {
        let found = true;
        if (!isEmptyObject(useWatchFieldsRef.current)) {
            for (const key in useWatchFieldsRef.current) {
                if (!name ||
                    !useWatchFieldsRef.current[key].size ||
                    useWatchFieldsRef.current[key].has(name) ||
                    useWatchFieldsRef.current[key].has(getFieldArrayParentName(name))) {
                    useWatchRenderFunctionsRef.current[key]();
                    found = false;
                }
            }
        }
        return found;
    };
    function setValue(name, value, config) {
        setInternalValue(name, value, config || {});
        isFieldWatched(name) && updateFormState();
        renderWatchedInputs(name);
    }
    handleChangeRef.current = handleChangeRef.current
        ? handleChangeRef.current
        : async ({ type, target }) => {
            let name = target.name;
            const field = fieldsRef.current[name];
            let error;
            let isValid;
            if (field) {
                const isBlurEvent = type === EVENTS.BLUR;
                const shouldSkipValidation = skipValidation(Object.assign({ isBlurEvent,
                    isReValidateOnChange,
                    isReValidateOnBlur, isTouched: !!get(formStateRef.current.touched, name), isSubmitted: formStateRef.current.isSubmitted }, modeRef.current));
                let state = updateAndGetDirtyState(name, false);
                let shouldRender = !isEmptyObject(state) ||
                    (!isBlurEvent && isFieldWatched(name));
                if (isBlurEvent &&
                    !get(formStateRef.current.touched, name) &&
                    readFormStateRef.current.touched) {
                    set(formStateRef.current.touched, name, true);
                    state = Object.assign(Object.assign({}, state), { touched: formStateRef.current.touched });
                }
                if (!shouldUnregister && isCheckBoxInput(target)) {
                    set(shallowFieldsStateRef.current, name, getFieldValue(fieldsRef, name));
                }
                if (shouldSkipValidation) {
                    !isBlurEvent && renderWatchedInputs(name);
                    return ((!isEmptyObject(state) ||
                        (shouldRender && isEmptyObject(state))) &&
                        updateFormState(state));
                }
                updateIsValidating();
                if (resolverRef.current) {
                    const { errors } = await resolverRef.current(getValues(), contextRef.current, isValidateAllFieldCriteria);
                    const previousFormIsValid = formStateRef.current.isValid;
                    error = get(errors, name);
                    if (isCheckBoxInput(target) &&
                        !error &&
                        resolverRef.current) {
                        const parentNodeName = getFieldArrayParentName(name);
                        const currentError = get(errors, parentNodeName, {});
                        currentError.type &&
                            currentError.message &&
                            (error = currentError);
                        if (parentNodeName &&
                            (currentError ||
                                get(formStateRef.current.errors, parentNodeName))) {
                            name = parentNodeName;
                        }
                    }
                    isValid = isEmptyObject(errors);
                    previousFormIsValid !== isValid && (shouldRender = true);
                }
                else {
                    error = (await validateField(fieldsRef, isValidateAllFieldCriteria, field, shallowFieldsStateRef))[name];
                }
                !isBlurEvent && renderWatchedInputs(name);
                shouldRenderBaseOnError(name, error, shouldRender, state, isValid);
            }
        };
    function setFieldArrayDefaultValues(data) {
        if (!shouldUnregister) {
            let copy = cloneObject(data);
            for (const value of fieldArrayNamesRef.current) {
                if (isKey(value) && !copy[value]) {
                    copy = Object.assign(Object.assign({}, copy), { [value]: [] });
                }
            }
            return copy;
        }
        return data;
    }
    function getValues(payload) {
        if (isString(payload)) {
            return getFieldValue(fieldsRef, payload, shallowFieldsStateRef);
        }
        if (Array.isArray(payload)) {
            const data = {};
            for (const name of payload) {
                set(data, name, getFieldValue(fieldsRef, name, shallowFieldsStateRef));
            }
            return data;
        }
        return setFieldArrayDefaultValues(getFieldsValues(fieldsRef, cloneObject(shallowFieldsStateRef.current), shouldUnregister));
    }
    const validateResolver = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (values = {}) => {
        const { errors } = await resolverRef.current(Object.assign(Object.assign({}, getValues()), values), contextRef.current, isValidateAllFieldCriteria);
        const isValid = isEmptyObject(errors);
        formStateRef.current.isValid !== isValid &&
            updateFormState({
                isValid,
            });
    }, [isValidateAllFieldCriteria]);
    const removeFieldEventListener = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((field, forceDelete) => findRemovedFieldAndRemoveListener(fieldsRef, handleChangeRef.current, field, shallowFieldsStateRef, shouldUnregister, forceDelete), [shouldUnregister]);
    const updateWatchedValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name) => {
        if (isWatchAllRef.current) {
            updateFormState();
        }
        else {
            for (const watchField of watchFieldsRef.current) {
                if (watchField.startsWith(name)) {
                    updateFormState();
                    break;
                }
            }
            renderWatchedInputs(name);
        }
    }, []);
    const removeFieldEventListenerAndRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((field, forceDelete) => {
        if (field) {
            removeFieldEventListener(field, forceDelete);
            if (shouldUnregister && !compact(field.options || []).length) {
                unset(validFieldsRef.current, field.ref.name);
                unset(fieldsWithValidationRef.current, field.ref.name);
                unset(formStateRef.current.errors, field.ref.name);
                set(formStateRef.current.dirtyFields, field.ref.name, true);
                updateFormState({
                    isDirty: isFormDirty(),
                });
                readFormStateRef.current.isValid &&
                    resolverRef.current &&
                    validateResolver();
                updateWatchedValue(field.ref.name);
            }
        }
    }, [validateResolver, removeFieldEventListener]);
    function clearErrors(name) {
        name &&
            (Array.isArray(name) ? name : [name]).forEach((inputName) => fieldsRef.current[inputName] && isKey(inputName)
                ? delete formStateRef.current.errors[inputName]
                : unset(formStateRef.current.errors, inputName));
        updateFormState({
            errors: name ? formStateRef.current.errors : {},
        });
    }
    function setError(name, error) {
        const ref = (fieldsRef.current[name] || {}).ref;
        set(formStateRef.current.errors, name, Object.assign(Object.assign({}, error), { ref }));
        updateFormState({
            isValid: false,
        });
        error.shouldFocus && ref && ref.focus && ref.focus();
    }
    const watchInternal = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((fieldNames, defaultValue, watchId) => {
        const watchFields = watchId
            ? useWatchFieldsRef.current[watchId]
            : watchFieldsRef.current;
        let fieldValues = getFieldsValues(fieldsRef, cloneObject(shallowFieldsStateRef.current), shouldUnregister, false, fieldNames);
        if (isString(fieldNames)) {
            if (fieldArrayNamesRef.current.has(fieldNames)) {
                const fieldArrayValue = get(fieldArrayValuesRef.current, fieldNames, []);
                fieldValues =
                    !fieldArrayValue.length ||
                        fieldArrayValue.length !==
                            compact(get(fieldValues, fieldNames, [])).length
                        ? fieldArrayValuesRef.current
                        : fieldValues;
            }
            return assignWatchFields(fieldValues, fieldNames, watchFields, isUndefined(get(defaultValuesRef.current, fieldNames))
                ? defaultValue
                : get(defaultValuesRef.current, fieldNames), true);
        }
        const combinedDefaultValues = isUndefined(defaultValue)
            ? defaultValuesRef.current
            : defaultValue;
        if (Array.isArray(fieldNames)) {
            return fieldNames.reduce((previous, name) => (Object.assign(Object.assign({}, previous), { [name]: assignWatchFields(fieldValues, name, watchFields, combinedDefaultValues) })), {});
        }
        isWatchAllRef.current = isUndefined(watchId);
        return transformToNestObject((!isEmptyObject(fieldValues) && fieldValues) ||
            combinedDefaultValues);
    }, []);
    function watch(fieldNames, defaultValue) {
        return watchInternal(fieldNames, defaultValue);
    }
    function unregister(name) {
        for (const fieldName of Array.isArray(name) ? name : [name]) {
            removeFieldEventListenerAndRef(fieldsRef.current[fieldName], true);
        }
    }
    function registerFieldRef(ref, options = {}) {
        if (true) {
            if (!ref.name) {
                return console.warn('📋 Field is missing `name` attribute', ref, `https://react-hook-form.com/api#useForm`);
            }
            if (fieldArrayNamesRef.current.has(ref.name.split(/\[\d+\]$/)[0]) &&
                !RegExp(`^${ref.name.split(/\[\d+\]$/)[0]}[\\d+].\\w+`
                    .replace(/\[/g, '\\[')
                    .replace(/\]/g, '\\]')).test(ref.name)) {
                return console.warn('📋 `name` prop should be in object shape: name="test[index].name"', ref, 'https://react-hook-form.com/api#useFieldArray');
            }
        }
        const { name, type, value } = ref;
        const fieldRefAndValidationOptions = Object.assign({ ref }, options);
        const fields = fieldsRef.current;
        const isRadioOrCheckbox = isRadioOrCheckboxFunction(ref);
        const isFieldArray = isNameInFieldArray(fieldArrayNamesRef.current, name);
        const compareRef = (currentRef) => isWeb && (!isHTMLElement(ref) || currentRef === ref);
        let field = fields[name];
        let isEmptyDefaultValue = true;
        let defaultValue;
        if (field &&
            (isRadioOrCheckbox
                ? Array.isArray(field.options) &&
                    compact(field.options).find((option) => {
                        return value === option.ref.value && compareRef(option.ref);
                    })
                : compareRef(field.ref))) {
            fields[name] = Object.assign(Object.assign({}, field), options);
            return;
        }
        if (type) {
            field = isRadioOrCheckbox
                ? Object.assign({ options: [
                        ...compact((field && field.options) || []),
                        {
                            ref,
                        },
                    ], ref: { type, name } }, options) : Object.assign({}, fieldRefAndValidationOptions);
        }
        else {
            field = fieldRefAndValidationOptions;
        }
        fields[name] = field;
        const isEmptyUnmountFields = isUndefined(get(shallowFieldsStateRef.current, name));
        if (!isEmptyObject(defaultValuesRef.current) || !isEmptyUnmountFields) {
            defaultValue = get(isEmptyUnmountFields
                ? defaultValuesRef.current
                : shallowFieldsStateRef.current, name);
            isEmptyDefaultValue = isUndefined(defaultValue);
            if (!isEmptyDefaultValue && !isFieldArray) {
                setFieldValue(name, defaultValue);
            }
        }
        if (!isEmptyObject(options)) {
            set(fieldsWithValidationRef.current, name, true);
            if (!isOnSubmit && readFormStateRef.current.isValid) {
                validateField(fieldsRef, isValidateAllFieldCriteria, field, shallowFieldsStateRef).then((error) => {
                    const previousFormIsValid = formStateRef.current.isValid;
                    isEmptyObject(error)
                        ? set(validFieldsRef.current, name, true)
                        : unset(validFieldsRef.current, name);
                    previousFormIsValid !== isEmptyObject(error) && updateFormState();
                });
            }
        }
        if (shouldUnregister && !(isFieldArray && isEmptyDefaultValue)) {
            !isFieldArray && unset(formStateRef.current.dirtyFields, name);
        }
        if (type) {
            attachEventListeners(isRadioOrCheckbox && field.options
                ? field.options[field.options.length - 1]
                : field, isRadioOrCheckbox || isSelectInput(ref), handleChangeRef.current);
        }
    }
    function register(refOrRegisterOptions, options) {
        if (!isWindowUndefined) {
            if (isString(refOrRegisterOptions)) {
                registerFieldRef({ name: refOrRegisterOptions }, options);
            }
            else if (isObject(refOrRegisterOptions) &&
                'name' in refOrRegisterOptions) {
                registerFieldRef(refOrRegisterOptions, options);
            }
            else {
                return (ref) => ref && registerFieldRef(ref, refOrRegisterOptions);
            }
        }
    }
    const handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((onValid, onInvalid) => async (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
            e.persist();
        }
        let fieldErrors = {};
        let fieldValues = setFieldArrayDefaultValues(getFieldsValues(fieldsRef, cloneObject(shallowFieldsStateRef.current), shouldUnregister, true));
        readFormStateRef.current.isSubmitting &&
            updateFormState({
                isSubmitting: true,
            });
        try {
            if (resolverRef.current) {
                const { errors, values } = await resolverRef.current(fieldValues, contextRef.current, isValidateAllFieldCriteria);
                formStateRef.current.errors = fieldErrors = errors;
                fieldValues = values;
            }
            else {
                for (const field of Object.values(fieldsRef.current)) {
                    if (field) {
                        const { name } = field.ref;
                        const fieldError = await validateField(fieldsRef, isValidateAllFieldCriteria, field, shallowFieldsStateRef);
                        if (fieldError[name]) {
                            set(fieldErrors, name, fieldError[name]);
                            unset(validFieldsRef.current, name);
                        }
                        else if (get(fieldsWithValidationRef.current, name)) {
                            unset(formStateRef.current.errors, name);
                            set(validFieldsRef.current, name, true);
                        }
                    }
                }
            }
            if (isEmptyObject(fieldErrors) &&
                Object.keys(formStateRef.current.errors).every((name) => name in fieldsRef.current)) {
                updateFormState({
                    errors: {},
                    isSubmitting: true,
                });
                await onValid(fieldValues, e);
            }
            else {
                formStateRef.current.errors = Object.assign(Object.assign({}, formStateRef.current.errors), fieldErrors);
                onInvalid && (await onInvalid(formStateRef.current.errors, e));
                shouldFocusError &&
                    focusOnErrorField(fieldsRef.current, formStateRef.current.errors);
            }
        }
        finally {
            formStateRef.current.isSubmitting = false;
            updateFormState({
                isSubmitted: true,
                isSubmitting: false,
                isSubmitSuccessful: isEmptyObject(formStateRef.current.errors),
                submitCount: formStateRef.current.submitCount + 1,
            });
        }
    }, [shouldFocusError, isValidateAllFieldCriteria]);
    const resetRefs = ({ errors, isDirty, isSubmitted, touched, isValid, submitCount, dirtyFields, }) => {
        if (!isValid) {
            validFieldsRef.current = {};
            fieldsWithValidationRef.current = {};
        }
        fieldArrayDefaultValuesRef.current = {};
        watchFieldsRef.current = new Set();
        isWatchAllRef.current = false;
        updateFormState({
            submitCount: submitCount ? formStateRef.current.submitCount : 0,
            isDirty: isDirty ? formStateRef.current.isDirty : false,
            isSubmitted: isSubmitted ? formStateRef.current.isSubmitted : false,
            isValid: isValid ? formStateRef.current.isValid : false,
            dirtyFields: dirtyFields ? formStateRef.current.dirtyFields : {},
            touched: touched ? formStateRef.current.touched : {},
            errors: errors ? formStateRef.current.errors : {},
            isSubmitting: false,
            isSubmitSuccessful: false,
        });
    };
    const reset = (values, omitResetState = {}) => {
        if (isWeb) {
            for (const field of Object.values(fieldsRef.current)) {
                if (field) {
                    const { ref, options } = field;
                    const inputRef = isRadioOrCheckboxFunction(ref) && Array.isArray(options)
                        ? options[0].ref
                        : ref;
                    if (isHTMLElement(inputRef)) {
                        try {
                            inputRef.closest('form').reset();
                            break;
                        }
                        catch (_a) { }
                    }
                }
            }
        }
        fieldsRef.current = {};
        defaultValuesRef.current = Object.assign({}, (values || defaultValuesRef.current));
        values && renderWatchedInputs('');
        Object.values(resetFieldArrayFunctionRef.current).forEach((resetFieldArray) => isFunction(resetFieldArray) && resetFieldArray());
        shallowFieldsStateRef.current = shouldUnregister
            ? {}
            : cloneObject(values || defaultValuesRef.current);
        resetRefs(omitResetState);
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        resolver && readFormStateRef.current.isValid && validateResolver();
        observerRef.current =
            observerRef.current || !isWeb
                ? observerRef.current
                : onDomRemove(fieldsRef, removeFieldEventListenerAndRef);
    }, [removeFieldEventListenerAndRef, defaultValuesRef.current]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => () => {
        observerRef.current && observerRef.current.disconnect();
        isUnMount.current = true;
        if (true) {
            return;
        }
        Object.values(fieldsRef.current).forEach((field) => removeFieldEventListenerAndRef(field, true));
    }, []);
    if (!resolver && readFormStateRef.current.isValid) {
        formState.isValid =
            deepEqual(validFieldsRef.current, fieldsWithValidationRef.current) &&
                isEmptyObject(formStateRef.current.errors);
    }
    const commonProps = {
        trigger,
        setValue: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(setValue, [setInternalValue, trigger]),
        getValues: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(getValues, []),
        register: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(register, [defaultValuesRef.current]),
        unregister: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(unregister, []),
        formState: isProxyEnabled
            ? new Proxy(formState, {
                get: (obj, prop) => {
                    if (true) {
                        if (prop === 'isValid' && isOnSubmit) {
                            console.warn('📋 `formState.isValid` is applicable with `onTouched`, `onChange` or `onBlur` mode. https://react-hook-form.com/api#formState');
                        }
                    }
                    if (prop in obj) {
                        readFormStateRef.current[prop] = true;
                        return obj[prop];
                    }
                    return undefined;
                },
            })
            : formState,
    };
    const control = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => (Object.assign({ isFormDirty,
        updateWatchedValue,
        shouldUnregister,
        updateFormState,
        removeFieldEventListener,
        watchInternal, mode: modeRef.current, reValidateMode: {
            isReValidateOnBlur,
            isReValidateOnChange,
        }, validateResolver: resolver ? validateResolver : undefined, fieldsRef,
        resetFieldArrayFunctionRef,
        useWatchFieldsRef,
        useWatchRenderFunctionsRef,
        fieldArrayDefaultValuesRef,
        validFieldsRef,
        fieldsWithValidationRef,
        fieldArrayNamesRef,
        readFormStateRef,
        formStateRef,
        defaultValuesRef,
        shallowFieldsStateRef,
        fieldArrayValuesRef }, commonProps)), [
        defaultValuesRef.current,
        updateWatchedValue,
        shouldUnregister,
        removeFieldEventListener,
        watchInternal,
    ]);
    return Object.assign({ watch,
        control,
        handleSubmit, reset: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(reset, []), clearErrors: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(clearErrors, []), setError: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(setError, []), errors: formState.errors }, commonProps);
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const FormContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
FormContext.displayName = 'RHFContext';
const useFormContext = () => Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(FormContext);
const FormProvider = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormContext.Provider, { value: Object.assign({}, props) }, children));
};

var generateId = () => {
    const d = typeof performance === UNDEFINED ? Date.now() : performance.now() * 1000;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16 + d) % 16 | 0;
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
};

function removeAtIndexes(data, indexes) {
    let i = 0;
    const temp = [...data];
    for (const index of indexes) {
        temp.splice(index - i, 1);
        i++;
    }
    return compact(temp).length ? temp : [];
}
var removeArrayAt = (data, index) => isUndefined(index)
    ? []
    : removeAtIndexes(data, (Array.isArray(index) ? index : [index]).sort());

var moveArrayAt = (data, from, to) => {
    if (Array.isArray(data)) {
        if (isUndefined(data[to])) {
            data[to] = undefined;
        }
        data.splice(to, 0, data.splice(from, 1)[0]);
        return data;
    }
    return [];
};

var swapArrayAt = (data, indexA, indexB) => {
    const temp = [data[indexB], data[indexA]];
    data[indexA] = temp[0];
    data[indexB] = temp[1];
};

function prepend(data, value) {
    return [...(Array.isArray(value) ? value : [value || undefined]), ...data];
}

function insert(data, index, value) {
    return [
        ...data.slice(0, index),
        ...(Array.isArray(value) ? value : [value || undefined]),
        ...data.slice(index),
    ];
}

var fillEmptyArray = (value) => Array.isArray(value) ? Array(value.length).fill(undefined) : undefined;

var fillBooleanArray = (value) => (Array.isArray(value) ? value : [value]).map((data) => {
    if (isObject(data)) {
        const object = {};
        for (const key in data) {
            object[key] = true;
        }
        return object;
    }
    return true;
});

const mapIds = (values = [], keyName, skipWarn) => {
    if (true) {
        if (!skipWarn) {
            for (const value of values) {
                if (typeof value === 'object') {
                    if (keyName in value) {
                        console.warn(`📋 useFieldArray fieldValues contain the keyName \`${keyName}\` which is reserved for use by useFieldArray. https://react-hook-form.com/api#useFieldArray`);
                        break;
                    }
                }
                else {
                    console.warn(`📋 useFieldArray input's name should be in object shape instead of flat array. https://react-hook-form.com/api#useFieldArray`);
                    break;
                }
            }
        }
    }
    return values.map((value) => (Object.assign({ [keyName]: value[keyName] || generateId() }, value)));
};
const useFieldArray = ({ control, name, keyName = 'id', }) => {
    const methods = useFormContext();
    if (true) {
        if (!control && !methods) {
            throw new Error('📋 useFieldArray is missing `control` prop. https://react-hook-form.com/api#useFieldArray');
        }
    }
    const focusIndexRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(-1);
    const { isFormDirty, updateWatchedValue, resetFieldArrayFunctionRef, fieldArrayNamesRef, fieldsRef, defaultValuesRef, removeFieldEventListener, formStateRef, shallowFieldsStateRef, updateFormState, readFormStateRef, validFieldsRef, fieldsWithValidationRef, fieldArrayDefaultValuesRef, validateResolver, getValues, shouldUnregister, fieldArrayValuesRef, } = control || methods.control;
    const getDefaultValues = (values) => get(shouldUnregister ? values : shallowFieldsStateRef.current, name, []);
    const fieldArrayParentName = getFieldArrayParentName(name);
    const memoizedDefaultValues = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([
        ...(get(fieldArrayDefaultValuesRef.current, fieldArrayParentName)
            ? getDefaultValues(fieldArrayDefaultValuesRef.current)
            : getDefaultValues(defaultValuesRef.current)),
    ]);
    const [fields, setFields] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(mapIds(memoizedDefaultValues.current, keyName));
    set(fieldArrayValuesRef.current, name, fields);
    const omitKey = (fields) => fields.map((_a = {}) => {
        var _b = keyName, omitted = _a[_b], rest = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
        return rest;
    });
    fieldArrayNamesRef.current.add(name);
    const getFieldArrayValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => get(fieldArrayValuesRef.current, name, []), [name]);
    const getCurrentFieldsValues = () => mapIds(get(getValues(), name, getFieldArrayValue()).map((item, index) => (Object.assign(Object.assign({}, getFieldArrayValue()[index]), item))), keyName, true);
    fieldArrayNamesRef.current.add(name);
    if (fieldArrayParentName &&
        !get(fieldArrayDefaultValuesRef.current, fieldArrayParentName)) {
        set(fieldArrayDefaultValuesRef.current, fieldArrayParentName, cloneObject(get(defaultValuesRef.current, fieldArrayParentName)));
    }
    const setFieldAndValidState = (fieldsValues) => {
        setFields(fieldsValues);
        set(fieldArrayValuesRef.current, name, fieldsValues);
        if (readFormStateRef.current.isValid && validateResolver) {
            const values = getValues();
            set(values, name, fieldsValues);
            validateResolver(values);
        }
    };
    const resetFields = () => {
        for (const key in fieldsRef.current) {
            if (isMatchFieldArrayName(key, name)) {
                removeFieldEventListener(fieldsRef.current[key], true);
                delete fieldsRef.current[key];
            }
        }
    };
    const cleanup = (ref) => !compact(get(ref, name, [])).length && unset(ref, name);
    const updateDirtyFieldsWithDefaultValues = (updatedFieldArrayValues) => {
        if (updatedFieldArrayValues) {
            set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(omitKey(updatedFieldArrayValues), get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
        }
    };
    const batchStateUpdate = (method, args, updatedFieldValues, updatedFormValues = [], shouldSet = true, shouldUpdateValid = false) => {
        if (get(shallowFieldsStateRef.current, name)) {
            const output = method(get(shallowFieldsStateRef.current, name), args.argA, args.argB);
            shouldSet && set(shallowFieldsStateRef.current, name, output);
        }
        if (get(fieldArrayDefaultValuesRef.current, name)) {
            const output = method(get(fieldArrayDefaultValuesRef.current, name), args.argA, args.argB);
            shouldSet && set(fieldArrayDefaultValuesRef.current, name, output);
        }
        if (Array.isArray(get(formStateRef.current.errors, name))) {
            const output = method(get(formStateRef.current.errors, name), args.argA, args.argB);
            shouldSet && set(formStateRef.current.errors, name, output);
            cleanup(formStateRef.current.errors);
        }
        if (readFormStateRef.current.touched &&
            get(formStateRef.current.touched, name)) {
            const output = method(get(formStateRef.current.touched, name), args.argA, args.argB);
            shouldSet && set(formStateRef.current.touched, name, output);
            cleanup(formStateRef.current.touched);
        }
        if (readFormStateRef.current.dirtyFields ||
            readFormStateRef.current.isDirty) {
            set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(omitKey(updatedFormValues), get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
            updateDirtyFieldsWithDefaultValues(updatedFieldValues);
            cleanup(formStateRef.current.dirtyFields);
        }
        if (shouldUpdateValid &&
            readFormStateRef.current.isValid &&
            !validateResolver) {
            set(validFieldsRef.current, name, method(get(validFieldsRef.current, name, []), args.argA));
            cleanup(validFieldsRef.current);
            set(fieldsWithValidationRef.current, name, method(get(fieldsWithValidationRef.current, name, []), args.argA));
            cleanup(fieldsWithValidationRef.current);
        }
        updateFormState({
            isDirty: isFormDirty(name, omitKey(updatedFormValues)),
        });
    };
    const append = (value, shouldFocus = true) => {
        const appendValue = Array.isArray(value) ? value : [value];
        const updateFormValues = [
            ...getCurrentFieldsValues(),
            ...mapIds(appendValue, keyName),
        ];
        setFieldAndValidState(updateFormValues);
        if (readFormStateRef.current.dirtyFields ||
            readFormStateRef.current.isDirty) {
            updateDirtyFieldsWithDefaultValues(updateFormValues);
            updateFormState({
                isDirty: true,
                dirtyFields: formStateRef.current.dirtyFields,
            });
        }
        !shouldUnregister &&
            set(shallowFieldsStateRef.current, name, [
                ...(get(shallowFieldsStateRef.current, name) || []),
                ...cloneObject(appendValue),
            ]);
        focusIndexRef.current = shouldFocus
            ? get(fieldArrayValuesRef.current, name).length - 1
            : -1;
    };
    const prepend$1 = (value, shouldFocus = true) => {
        const emptyArray = fillEmptyArray(value);
        const updatedFieldArrayValues = prepend(getCurrentFieldsValues(), mapIds(Array.isArray(value) ? value : [value], keyName));
        setFieldAndValidState(updatedFieldArrayValues);
        resetFields();
        batchStateUpdate(prepend, {
            argA: emptyArray,
            argC: fillBooleanArray(value),
        }, updatedFieldArrayValues);
        focusIndexRef.current = shouldFocus ? 0 : -1;
    };
    const remove = (index) => {
        const fieldValues = getCurrentFieldsValues();
        const updatedFieldValues = removeArrayAt(fieldValues, index);
        setFieldAndValidState(updatedFieldValues);
        resetFields();
        batchStateUpdate(removeArrayAt, {
            argA: index,
            argC: index,
        }, updatedFieldValues, removeArrayAt(fieldValues, index), true, true);
    };
    const insert$1 = (index, value, shouldFocus = true) => {
        const emptyArray = fillEmptyArray(value);
        const fieldValues = getCurrentFieldsValues();
        const updatedFieldArrayValues = insert(fieldValues, index, mapIds(Array.isArray(value) ? value : [value], keyName));
        setFieldAndValidState(updatedFieldArrayValues);
        resetFields();
        batchStateUpdate(insert, {
            argA: index,
            argB: emptyArray,
            argC: index,
            argD: fillBooleanArray(value),
        }, updatedFieldArrayValues, insert(fieldValues, index));
        focusIndexRef.current = shouldFocus ? index : -1;
    };
    const swap = (indexA, indexB) => {
        const fieldValues = getCurrentFieldsValues();
        swapArrayAt(fieldValues, indexA, indexB);
        resetFields();
        setFieldAndValidState([...fieldValues]);
        batchStateUpdate(swapArrayAt, {
            argA: indexA,
            argB: indexB,
            argC: indexA,
            argD: indexB,
        }, undefined, fieldValues, false);
    };
    const move = (from, to) => {
        const fieldValues = getCurrentFieldsValues();
        moveArrayAt(fieldValues, from, to);
        resetFields();
        setFieldAndValidState([...fieldValues]);
        batchStateUpdate(moveArrayAt, {
            argA: from,
            argB: to,
            argC: from,
            argD: to,
        }, undefined, fieldValues, false);
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (true) {
            if (!name) {
                console.warn('📋 useFieldArray is missing `name` attribute. https://react-hook-form.com/api#useFieldArray');
            }
        }
        const defaultValues = get(fieldArrayDefaultValuesRef.current, name);
        if (defaultValues && fields.length < defaultValues.length) {
            set(fieldArrayDefaultValuesRef.current, name, defaultValues.slice(1));
        }
        updateWatchedValue(name);
        if (focusIndexRef.current > -1) {
            for (const key in fieldsRef.current) {
                const field = fieldsRef.current[key];
                if (key.startsWith(`${name}[${focusIndexRef.current}]`) &&
                    field.ref.focus) {
                    field.ref.focus();
                    break;
                }
            }
        }
        focusIndexRef.current = -1;
    }, [fields, name]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        const resetFunctions = resetFieldArrayFunctionRef.current;
        const fieldArrayNames = fieldArrayNamesRef.current;
        if (!getFieldArrayParentName(name)) {
            resetFunctions[name] = (data) => {
                resetFields();
                !data && unset(fieldArrayDefaultValuesRef.current, name);
                unset(shallowFieldsStateRef.current, name);
                memoizedDefaultValues.current = get(data || defaultValuesRef.current, name);
                setFields(mapIds(memoizedDefaultValues.current, keyName));
            };
        }
        return () => {
            if (true) {
                return;
            }
            resetFields();
            delete resetFunctions[name];
            unset(fieldArrayValuesRef, name);
            fieldArrayNames.delete(name);
        };
    }, []);
    return {
        swap: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(swap, [name]),
        move: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(move, [name]),
        prepend: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(prepend$1, [name]),
        append: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(append, [name]),
        remove: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(remove, [name]),
        insert: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(insert$1, [name]),
        fields,
    };
};

var getInputValue = (event) => isPrimitive(event) ||
    !isObject(event.target) ||
    (isObject(event.target) && !event.type)
    ? event
    : isUndefined(event.target.value)
        ? event.target.checked
        : event.target.value;

function useController({ name, rules, defaultValue, control, onFocus, }) {
    const methods = useFormContext();
    if (true) {
        if (!control && !methods) {
            throw new Error('📋 Controller is missing `control` prop. https://react-hook-form.com/api#Controller');
        }
    }
    const { defaultValuesRef, setValue, register, unregister, trigger, mode, reValidateMode: { isReValidateOnBlur, isReValidateOnChange }, formState, formStateRef: { current: { isSubmitted, touched, errors }, }, updateFormState, readFormStateRef, fieldsRef, fieldArrayNamesRef, shallowFieldsStateRef, } = control || methods.control;
    const isNotFieldArray = !isNameInFieldArray(fieldArrayNamesRef.current, name);
    const getInitialValue = () => !isUndefined(get(shallowFieldsStateRef.current, name)) && isNotFieldArray
        ? get(shallowFieldsStateRef.current, name)
        : isUndefined(defaultValue)
            ? get(defaultValuesRef.current, name)
            : defaultValue;
    const [value, setInputStateValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getInitialValue());
    const valueRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
    const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        focus: () => null,
    });
    const onFocusRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(onFocus ||
        (() => {
            if (isFunction(ref.current.focus)) {
                ref.current.focus();
            }
            if (true) {
                if (!isFunction(ref.current.focus)) {
                    console.warn(`📋 'ref' from Controller render prop must be attached to a React component or a DOM Element whose ref provides a 'focus()' method`);
                }
            }
        }));
    const shouldValidate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((isBlurEvent) => !skipValidation(Object.assign({ isBlurEvent,
        isReValidateOnBlur,
        isReValidateOnChange,
        isSubmitted, isTouched: !!get(touched, name) }, mode)), [
        isReValidateOnBlur,
        isReValidateOnChange,
        isSubmitted,
        touched,
        name,
        mode,
    ]);
    const commonTask = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(([event]) => {
        const data = getInputValue(event);
        setInputStateValue(data);
        valueRef.current = data;
        return data;
    }, []);
    const registerField = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((shouldUpdateValue) => {
        if (true) {
            if (!name) {
                return console.warn('📋 Field is missing `name` prop. https://react-hook-form.com/api#Controller');
            }
        }
        if (fieldsRef.current[name]) {
            fieldsRef.current[name] = Object.assign({ ref: fieldsRef.current[name].ref }, rules);
        }
        else {
            register(Object.defineProperties({
                name,
                focus: onFocusRef.current,
            }, {
                value: {
                    set(data) {
                        setInputStateValue(data);
                        valueRef.current = data;
                    },
                    get() {
                        return valueRef.current;
                    },
                },
            }), rules);
            shouldUpdateValue = isUndefined(get(defaultValuesRef.current, name));
        }
        shouldUpdateValue &&
            isNotFieldArray &&
            setInputStateValue(getInitialValue());
    }, [rules, name, register]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => () => unregister(name), [name]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (true) {
            if (isUndefined(value)) {
                console.warn(`📋 ${name} is missing in the 'defaultValue' prop of either its Controller (https://react-hook-form.com/api#Controller) or useForm (https://react-hook-form.com/api#useForm)`);
            }
            if (!isNotFieldArray && isUndefined(defaultValue)) {
                console.warn('📋 Controller is missing `defaultValue` prop when using `useFieldArray`. https://react-hook-form.com/api#Controller');
            }
        }
        registerField();
    }, [registerField]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        !fieldsRef.current[name] && registerField(true);
    });
    const onBlur = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
        if (readFormStateRef.current.touched && !get(touched, name)) {
            set(touched, name, true);
            updateFormState({
                touched,
            });
        }
        shouldValidate(true) && trigger(name);
    }, [name, updateFormState, shouldValidate, trigger, readFormStateRef]);
    const onChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((...event) => setValue(name, commonTask(event), {
        shouldValidate: shouldValidate(),
        shouldDirty: true,
    }), [setValue, name, shouldValidate]);
    return {
        field: {
            onChange,
            onBlur,
            name,
            value,
            ref,
        },
        meta: Object.defineProperties({
            invalid: !!get(errors, name),
        }, {
            isDirty: {
                get() {
                    return !!get(formState.dirtyFields, name);
                },
            },
            isTouched: {
                get() {
                    return !!get(formState.touched, name);
                },
            },
        }),
    };
}

function useWatch({ control, name, defaultValue, }) {
    const methods = useFormContext();
    if (true) {
        if (!control && !methods) {
            throw new Error('📋 useWatch is missing `control` prop. https://react-hook-form.com/api#useWatch');
        }
    }
    const { useWatchFieldsRef, useWatchRenderFunctionsRef, watchInternal, defaultValuesRef, } = control || methods.control;
    const updateValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])()[1];
    const idRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    const defaultValueRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(defaultValue);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (true) {
            if (name === '') {
                console.warn('📋 useWatch is missing `name` attribute. https://react-hook-form.com/api#useWatch');
            }
        }
        const id = (idRef.current = generateId());
        const watchFieldsHookRender = useWatchRenderFunctionsRef.current;
        const watchFieldsHook = useWatchFieldsRef.current;
        watchFieldsHook[id] = new Set();
        watchFieldsHookRender[id] = () => updateValue({});
        watchInternal(name, defaultValueRef.current, id);
        return () => {
            delete watchFieldsHook[id];
            delete watchFieldsHookRender[id];
        };
    }, [
        name,
        useWatchRenderFunctionsRef,
        useWatchFieldsRef,
        watchInternal,
        defaultValueRef,
    ]);
    return idRef.current
        ? watchInternal(name, defaultValueRef.current, idRef.current)
        : isUndefined(defaultValue)
            ? isString(name)
                ? get(defaultValuesRef.current, name)
                : Array.isArray(name)
                    ? name.reduce((previous, inputName) => (Object.assign(Object.assign({}, previous), { [inputName]: get(defaultValuesRef.current, inputName) })), {})
                    : defaultValuesRef.current
            : defaultValue;
}

const Controller = (props) => {
    const { rules, as, render, defaultValue, control, onFocus } = props, rest = __rest(props, ["rules", "as", "render", "defaultValue", "control", "onFocus"]);
    const { field, meta } = useController(props);
    const componentProps = Object.assign(Object.assign({}, rest), field);
    return as
        ? Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(as)
            ? Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(as, componentProps)
            : Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(as, componentProps)
        : render
            ? render(field, meta)
            : null;
};


//# sourceMappingURL=index.esm.js.map


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9Gb3JtQ3JlYXRlR2l0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWhvb2stZm9ybS9kaXN0L2luZGV4LmVzbS5qcyJdLCJuYW1lcyI6WyJGb3JtQ3JlYXRlR2l0ZSIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsIndhdGNoIiwiZXJyb3JzIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwibm9tIiwibXRpdGxlIiwicHJlc0dpdGVTRU8iLCJ0ZXh0ZUV4dGVyaWV1ciIsImVxdWlwZW1lbnRFeHRlcmlldXIiLCJ0ZXh0ZUludGVyaWV1ciIsImVxdWlwZW1lbnRJbnRlcmlldXIiLCJ0ZXh0ZVBpc2NpbmUiLCJlcXVpcGVtZW50UGlzY2luZSIsInRleHRlIiwiZGV0YWlsR2l0ZSIsImNhcGFjaXRlIiwidmlkZW9MaW5rIiwiY2FsZW5kcmllckxpbmsiLCJjb3VsZXVyMSIsImNvdWxldXIyIiwiZXJyb3IiLCJzdWNjZXNzIiwibG9hZGluZyIsImZvcm1EYXRhIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidG9rZW4iLCJnZXRDb29raWUiLCJ1c2VFZmZlY3QiLCJGb3JtRGF0YSIsImhhbmRsZUNoYW5nZSIsIm5hbWUiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJzZXQiLCJjcmVlckdpdGUiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZUdpdGUiLCJ0aGVuIiwicGRmIiwic2V0VGltZW91dCIsIlJvdXRlciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQUE7O0FBQUEsaUJBQ3NCQywrREFBTyxFQUQ3QjtBQUFBLE1BQ3BCQyxRQURvQixZQUNwQkEsUUFE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O0FBQ2I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTs7QUFFQSxtQkFBbUIsK0JBQStCO0FBQ2xEO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsa0ZBQWtGO0FBQzdGLHdCQUF3QixzREFBUTtBQUNoQyxrQkFBa0Isb0RBQU07QUFDeEIsNEJBQTRCLG9EQUFNO0FBQ2xDLElBQUksdURBQVM7QUFDYixZQUFZLElBQXFDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRkFBMEYsY0FBYyx3REFBd0QsTUFBTTtBQUN0SztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLG9EQUFvRDtBQUMvRCxXQUFXLGNBQWM7QUFDekIseURBQXlEO0FBQ3pEO0FBQ0EsVUFBVSw0REFBYztBQUN4QixjQUFjLDBEQUFZO0FBQzFCLGNBQWMsMkRBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRStJO0FBQy9JIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvZ2l0ZS9jcmVhdGUuMDY4MjQzZWY2NGJlZGU1ZWI1NDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZUdpdGUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IEZvcm1DcmVhdGVHaXRlID0gKCkgPT4ge1xyXG5cdGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgd2F0Y2gsIGVycm9ycyB9ID0gdXNlRm9ybSgpO1xyXG5cdGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0bm9tOiAnJyxcclxuXHRcdG10aXRsZTogJycsXHJcblx0XHRwcmVzR2l0ZVNFTzogJycsXHJcblx0XHR0ZXh0ZUV4dGVyaWV1cjogJycsXHJcblx0XHRlcXVpcGVtZW50RXh0ZXJpZXVyOiAnJyxcclxuXHRcdHRleHRlSW50ZXJpZXVyOiAnJyxcclxuXHRcdGVxdWlwZW1lbnRJbnRlcmlldXI6ICcnLFxyXG5cdFx0dGV4dGVQaXNjaW5lOiAnJyxcclxuXHRcdGVxdWlwZW1lbnRQaXNjaW5lOiAnJyxcclxuXHRcdHRleHRlOiAnJyxcclxuXHRcdGRldGFpbEdpdGU6ICcnLFxyXG5cdFx0Y2FwYWNpdGU6ICcnLFxyXG5cdFx0dmlkZW9MaW5rOiAnJyxcclxuXHRcdGNhbGVuZHJpZXJMaW5rOiAnJyxcclxuXHRcdGNvdWxldXIxOiAnI0FBQUFBQScsXHJcblx0XHRjb3VsZXVyMjogJyMxMTExMTEnLFxyXG5cdFx0ZXJyb3I6ICcnLFxyXG5cdFx0c3VjY2VzczogJycsXHJcblx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdGZvcm1EYXRhOiAnJyxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblx0Y29uc3Qge1xyXG5cdFx0bm9tLFxyXG5cdFx0bXRpdGxlLFxyXG5cdFx0cHJlc0dpdGVTRU8sXHJcblx0XHR0ZXh0ZUV4dGVyaWV1cixcclxuXHRcdGVxdWlwZW1lbnRFeHRlcmlldXIsXHJcblx0XHR0ZXh0ZUludGVyaWV1cixcclxuXHRcdGVxdWlwZW1lbnRJbnRlcmlldXIsXHJcblx0XHR0ZXh0ZVBpc2NpbmUsXHJcblx0XHRlcXVpcGVtZW50UGlzY2luZSxcclxuXHRcdHRleHRlLFxyXG5cdFx0ZGV0YWlsR2l0ZSxcclxuXHRcdGNhcGFjaXRlLFxyXG5cdFx0dmlkZW9MaW5rLFxyXG5cdFx0Y2FsZW5kcmllckxpbmssXHJcblx0XHRjb3VsZXVyMSxcclxuXHRcdGNvdWxldXIyLFxyXG5cdFx0ZXJyb3IsXHJcblx0XHRzdWNjZXNzLFxyXG5cdFx0bG9hZGluZyxcclxuXHRcdGZvcm1EYXRhLFxyXG5cdH0gPSB2YWx1ZXM7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGZvcm1EYXRhOiBuZXcgRm9ybURhdGEoKSB9KTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IChuYW1lKSA9PiAoZSkgPT4ge1xyXG5cdFx0bGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcblxyXG5cdFx0Zm9ybURhdGEuc2V0KG5hbWUsIHZhbHVlKTtcclxuXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgW25hbWVdOiB2YWx1ZSwgZm9ybURhdGEsIGVycm9yOiAnJyB9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBjcmVlckdpdGUgPSAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdFx0Y3JlYXRlR2l0ZShmb3JtRGF0YSwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yIH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRub206ICcnLFxyXG5cdFx0XHRcdFx0bXRpdGxlOiAnJyxcclxuXHRcdFx0XHRcdHByZXNHaXRlU0VPOiAnJyxcclxuXHRcdFx0XHRcdHRleHRlOiAnJyxcclxuXHRcdFx0XHRcdHRleHRlRXh0ZXJpZXVyOiAnJyxcclxuXHRcdFx0XHRcdGVxdWlwZW1lbnRFeHRlcmlldXI6ICcnLFxyXG5cdFx0XHRcdFx0dGV4dGVJbnRlcmlldXI6ICcnLFxyXG5cdFx0XHRcdFx0ZXF1aXBlbWVudEludGVyaWV1cjogJycsXHJcblx0XHRcdFx0XHR0ZXh0ZVBpc2NpbmU6ICcnLFxyXG5cdFx0XHRcdFx0ZXF1aXBlbWVudFBpc2NpbmU6ICcnLFxyXG5cdFx0XHRcdFx0ZGV0YWlsR2l0ZTogJycsXHJcblx0XHRcdFx0XHRjYXBhY2l0ZTogJycsXHJcblx0XHRcdFx0XHR2aWRlb0xpbms6ICcnLFxyXG5cdFx0XHRcdFx0Y2FsZW5kcmllckxpbms6ICcnLFxyXG5cdFx0XHRcdFx0cGRmOiAnJyxcclxuXHRcdFx0XHRcdGNvdWxldXIxOiAnI0ZGRkZGRicsXHJcblx0XHRcdFx0XHRjb3VsZXVyMjogJyMxMTExMTEnLFxyXG5cdFx0XHRcdFx0ZXJyb3I6ICcnLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogJ0xlIGfDrnRlIGEgYmllbiDDqXTDqSBham91dMOpJyxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Um91dGVyLnB1c2goJy9hZG1pbi9nZXN0aW9uUGFnZXMnKTtcclxuXHRcdFx0XHR9LCAzMDAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2NyZWVyR2l0ZX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTgnPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+Tm9tIGR1IGfDrnRlPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17bm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdub20nKX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPk1ldGEgVGl0bGU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXttdGl0bGV9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ210aXRsZScpfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRNw6l0YS1EZXNjcmlwdGlvbiAocHLDqXNlbnRhdGlvbiBTRU8gZHUgZ8OudGUgcG91clxyXG5cdFx0XHRcdFx0XHRcdFx0R29vZ2xlKVxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3ByZXNHaXRlU0VPfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwcmVzR2l0ZVNFTycpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y29scz0nMzAnXHJcblx0XHRcdFx0XHRcdFx0XHRyb3dzPSc0Jz48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5UZXh0ZSBkdSBnw650ZTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RleHRlfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCd0ZXh0ZScpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y29scz0nMzAnXHJcblx0XHRcdFx0XHRcdFx0XHRyb3dzPSc0Jz48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0VGV4dGUgZGUgbCdleHTDqXJpZXVyXHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWFcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGV4dGVFeHRlcmlldXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3RleHRlRXh0ZXJpZXVyJyl9XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xzPSczMCdcclxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9JzQnPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRUZXh0ZSBkZSBsJ2ludMOpcmlldXJcclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0ZXh0ZUludGVyaWV1cn1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgndGV4dGVJbnRlcmlldXInKX1cclxuXHRcdFx0XHRcdFx0XHRcdGNvbHM9JzMwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cm93cz0nNCc+PC90ZXh0YXJlYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5cclxuXHRcdFx0XHRcdFx0XHRcdFRleHRlIGRlIGxhIHBpc2NpbmVcclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0ZXh0ZVBpc2NpbmV9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3RleHRlUGlzY2luZScpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y29scz0nMzAnXHJcblx0XHRcdFx0XHRcdFx0XHRyb3dzPSc0Jz48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPkTDqXRhaWwgZHUgZ8OudGU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtkZXRhaWxHaXRlfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdkZXRhaWxHaXRlJyl9XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xzPSczMCdcclxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9JzQnPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRDYXBhY2l0w6kgZHUgZ8OudGVcclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0nbnVtYmVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2NhcGFjaXRlfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdjYXBhY2l0ZScpfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRFcXVpcGVtZW50IGV4dMOpcmlldXIgKHPDqXBhcmVyIHBhciB1bmUgdmlyZ3VsZSlcclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtlcXVpcGVtZW50RXh0ZXJpZXVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdlcXVpcGVtZW50RXh0ZXJpZXVyJyl9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5cclxuXHRcdFx0XHRcdFx0XHRcdEVxdWlwZW1lbnQgaW50w6lyaWV1ciAoc8OpcGFyZXIgcGFyIHVuZSB2aXJndWxlKVxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2VxdWlwZW1lbnRJbnRlcmlldXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2VxdWlwZW1lbnRJbnRlcmlldXInKX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0RXF1aXBlbWVudCBQaXNjaW5lIChzw6lwYXJlciBwYXIgdW5lIHZpcmd1bGUpXHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17ZXF1aXBlbWVudFBpc2NpbmV9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2VxdWlwZW1lbnRQaXNjaW5lJyl9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNCc+XHJcblx0XHRcdFx0XHRcdHsvKiA8ZmllbGRzZXQgY2xhc3NOYW1lPSdib3JkZXIgcC0yJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGVnZW5kIGNsYXNzTmFtZT0ndy1hdXRvJz5JbWFnZXM8L2xlZ2VuZD5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdidG4gYnRuLW91dGxpbmUtaW5mbyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFBob3Rvc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwaG90b3MnKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdmaWxlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFjY2VwdD0naW1hZ2UvKidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtdWx0aXBsZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhpZGRlblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9maWVsZHNldD4gKi99XHJcblx0XHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzc05hbWU9J2JvcmRlciBwLTInPlxyXG5cdFx0XHRcdFx0XHRcdDxsZWdlbmQgY2xhc3NOYW1lPSd3LWF1dG8nPkxpZW5zPC9sZWdlbmQ+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdExpZW4gdmlkw6lvIFlvdVR1YmVcclxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3ZpZGVvTGlua31cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3ZpZGVvTGluaycpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0TGllbiBkdSBjYWxlbmRyaWVyXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtjYWxlbmRyaWVyTGlua31cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2NhbGVuZHJpZXJMaW5rJyl9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxyXG5cdFx0XHRcdFx0XHR7LyogPGZpZWxkc2V0IGNsYXNzTmFtZT0nYm9yZGVyIHAtMic+XHJcblx0XHRcdFx0XHRcdFx0PGxlZ2VuZCBjbGFzc05hbWU9J3ctYXV0byc+RmljaGllcnM8L2xlZ2VuZD5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdidG4gYnRuLW91dGxpbmUtaW5mbyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEZpY2hpZXJzIFBERlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwZGYnKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdmaWxlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFjY2VwdD0nLnBkZidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoaWRkZW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZmllbGRzZXQ+ICovfVxyXG5cdFx0XHRcdFx0XHQ8ZmllbGRzZXQgY2xhc3NOYW1lPSdib3JkZXIgcC0yJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGVnZW5kIGNsYXNzTmFtZT0ndy1hdXRvJz5Db3VsZXVyczwvbGVnZW5kPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRDb3VsZXVyIGRlIGZvbmRcclxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nY29sb3InXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtjb3VsZXVyMX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2NvdWxldXIxJyl9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRDb3VsZXVyIGR1IHRleHRlIChub2lyIHBhciBkw6lmYXVsdClcclxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nY29sb3InXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtjb3VsZXVyMn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2NvdWxldXIyJyl9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0e3N1Y2Nlc3MgJiYgKFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MnPlxyXG5cdFx0XHRcdFx0XHRMZSBnw650ZSBhIGJpZW4gw6l0w6kgYWpvdXTDqVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0XHR7bG9hZGluZyAmJiAoXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYWxlcnQgYWxlcnQtc3VjY2Vzcyc+XHJcblx0XHRcdFx0XHRcdENoYXJnZW1lbnQgZW4gY291cnMuLi5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdFx0e2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPSdhbGVydCBhbGVydC1kYW5nZXInPntlcnJvcn08L2Rpdj59XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0biBidG4taW5mbyc+XHJcblx0XHRcdFx0XHRcdENyw6llciBjZSBnw650ZVxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtQ3JlYXRlR2l0ZTtcclxuIiwiaW1wb3J0IHsgaXNWYWxpZEVsZW1lbnQsIHVzZVJlZiwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIGNyZWF0ZUVsZW1lbnQsIGNsb25lRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcblxudmFyIGlzSFRNTEVsZW1lbnQgPSAodmFsdWUpID0+IHZhbHVlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG5cbmNvbnN0IEVWRU5UUyA9IHtcclxuICAgIEJMVVI6ICdibHVyJyxcclxuICAgIENIQU5HRTogJ2NoYW5nZScsXHJcbiAgICBJTlBVVDogJ2lucHV0JyxcclxufTtcclxuY29uc3QgVkFMSURBVElPTl9NT0RFID0ge1xyXG4gICAgb25CbHVyOiAnb25CbHVyJyxcclxuICAgIG9uQ2hhbmdlOiAnb25DaGFuZ2UnLFxyXG4gICAgb25TdWJtaXQ6ICdvblN1Ym1pdCcsXHJcbiAgICBvblRvdWNoZWQ6ICdvblRvdWNoZWQnLFxyXG4gICAgYWxsOiAnYWxsJyxcclxufTtcclxuY29uc3QgU0VMRUNUID0gJ3NlbGVjdCc7XHJcbmNvbnN0IFVOREVGSU5FRCA9ICd1bmRlZmluZWQnO1xyXG5jb25zdCBJTlBVVF9WQUxJREFUSU9OX1JVTEVTID0ge1xyXG4gICAgbWF4OiAnbWF4JyxcclxuICAgIG1pbjogJ21pbicsXHJcbiAgICBtYXhMZW5ndGg6ICdtYXhMZW5ndGgnLFxyXG4gICAgbWluTGVuZ3RoOiAnbWluTGVuZ3RoJyxcclxuICAgIHBhdHRlcm46ICdwYXR0ZXJuJyxcclxuICAgIHJlcXVpcmVkOiAncmVxdWlyZWQnLFxyXG4gICAgdmFsaWRhdGU6ICd2YWxpZGF0ZScsXHJcbn07XG5cbmZ1bmN0aW9uIGF0dGFjaEV2ZW50TGlzdGVuZXJzKHsgcmVmIH0sIHNob3VsZEF0dGFjaENoYW5nZUV2ZW50LCBoYW5kbGVDaGFuZ2UpIHtcclxuICAgIGlmIChpc0hUTUxFbGVtZW50KHJlZikgJiYgaGFuZGxlQ2hhbmdlKSB7XHJcbiAgICAgICAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoc2hvdWxkQXR0YWNoQ2hhbmdlRXZlbnQgPyBFVkVOVFMuQ0hBTkdFIDogRVZFTlRTLklOUFVULCBoYW5kbGVDaGFuZ2UpO1xyXG4gICAgICAgIHJlZi5hZGRFdmVudExpc3RlbmVyKEVWRU5UUy5CTFVSLCBoYW5kbGVDaGFuZ2UpO1xyXG4gICAgfVxyXG59XG5cbnZhciBpc051bGxPclVuZGVmaW5lZCA9ICh2YWx1ZSkgPT4gdmFsdWUgPT0gbnVsbDtcblxuY29uc3QgaXNPYmplY3RUeXBlID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnO1xyXG52YXIgaXNPYmplY3QgPSAodmFsdWUpID0+ICFpc051bGxPclVuZGVmaW5lZCh2YWx1ZSkgJiZcclxuICAgICFBcnJheS5pc0FycmF5KHZhbHVlKSAmJlxyXG4gICAgaXNPYmplY3RUeXBlKHZhbHVlKSAmJlxyXG4gICAgISh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpO1xuXG52YXIgaXNLZXkgPSAodmFsdWUpID0+IC9eXFx3KiQvLnRlc3QodmFsdWUpO1xuXG52YXIgY29tcGFjdCA9ICh2YWx1ZSkgPT4gdmFsdWUuZmlsdGVyKEJvb2xlYW4pO1xuXG52YXIgc3RyaW5nVG9QYXRoID0gKGlucHV0KSA9PiBjb21wYWN0KGlucHV0XHJcbiAgICAucmVwbGFjZSgvW1wifCddL2csICcnKVxyXG4gICAgLnJlcGxhY2UoL1xcWy9nLCAnLicpXHJcbiAgICAucmVwbGFjZSgvXFxdL2csICcnKVxyXG4gICAgLnNwbGl0KCcuJykpO1xuXG5mdW5jdGlvbiBzZXQob2JqZWN0LCBwYXRoLCB2YWx1ZSkge1xyXG4gICAgbGV0IGluZGV4ID0gLTE7XHJcbiAgICBjb25zdCB0ZW1wUGF0aCA9IGlzS2V5KHBhdGgpID8gW3BhdGhdIDogc3RyaW5nVG9QYXRoKHBhdGgpO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gdGVtcFBhdGgubGVuZ3RoO1xyXG4gICAgY29uc3QgbGFzdEluZGV4ID0gbGVuZ3RoIC0gMTtcclxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gdGVtcFBhdGhbaW5kZXhdO1xyXG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gbGFzdEluZGV4KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9ialZhbHVlID0gb2JqZWN0W2tleV07XHJcbiAgICAgICAgICAgIG5ld1ZhbHVlID1cclxuICAgICAgICAgICAgICAgIGlzT2JqZWN0KG9ialZhbHVlKSB8fCBBcnJheS5pc0FycmF5KG9ialZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgID8gb2JqVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICA6ICFpc05hTigrdGVtcFBhdGhbaW5kZXggKyAxXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYmplY3Rba2V5XSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIG9iamVjdCA9IG9iamVjdFtrZXldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iamVjdDtcclxufVxuXG52YXIgdHJhbnNmb3JtVG9OZXN0T2JqZWN0ID0gKGRhdGEsIHZhbHVlID0ge30pID0+IHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcclxuICAgICAgICAhaXNLZXkoa2V5KSA/IHNldCh2YWx1ZSwga2V5LCBkYXRhW2tleV0pIDogKHZhbHVlW2tleV0gPSBkYXRhW2tleV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59O1xuXG52YXIgaXNVbmRlZmluZWQgPSAodmFsKSA9PiB2YWwgPT09IHVuZGVmaW5lZDtcblxudmFyIGdldCA9IChvYmogPSB7fSwgcGF0aCwgZGVmYXVsdFZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBjb21wYWN0KHBhdGguc3BsaXQoL1ssW1xcXS5dKz8vKSkucmVkdWNlKChyZXN1bHQsIGtleSkgPT4gKGlzTnVsbE9yVW5kZWZpbmVkKHJlc3VsdCkgPyByZXN1bHQgOiByZXN1bHRba2V5XSksIG9iaik7XHJcbiAgICByZXR1cm4gaXNVbmRlZmluZWQocmVzdWx0KSB8fCByZXN1bHQgPT09IG9ialxyXG4gICAgICAgID8gaXNVbmRlZmluZWQob2JqW3BhdGhdKVxyXG4gICAgICAgICAgICA/IGRlZmF1bHRWYWx1ZVxyXG4gICAgICAgICAgICA6IG9ialtwYXRoXVxyXG4gICAgICAgIDogcmVzdWx0O1xyXG59O1xuXG52YXIgZm9jdXNPbkVycm9yRmllbGQgPSAoZmllbGRzLCBmaWVsZEVycm9ycykgPT4ge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZmllbGRzKSB7XHJcbiAgICAgICAgaWYgKGdldChmaWVsZEVycm9ycywga2V5KSkge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1trZXldO1xyXG4gICAgICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWVsZC5yZWYuZm9jdXMgJiYgaXNVbmRlZmluZWQoZmllbGQucmVmLmZvY3VzKCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChmaWVsZC5vcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQub3B0aW9uc1swXS5yZWYuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcblxudmFyIHJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzID0gKHJlZiwgdmFsaWRhdGVXaXRoU3RhdGVVcGRhdGUpID0+IHtcclxuICAgIGlmIChpc0hUTUxFbGVtZW50KHJlZikgJiYgcmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICByZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcihFVkVOVFMuSU5QVVQsIHZhbGlkYXRlV2l0aFN0YXRlVXBkYXRlKTtcclxuICAgICAgICByZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcihFVkVOVFMuQ0hBTkdFLCB2YWxpZGF0ZVdpdGhTdGF0ZVVwZGF0ZSk7XHJcbiAgICAgICAgcmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoRVZFTlRTLkJMVVIsIHZhbGlkYXRlV2l0aFN0YXRlVXBkYXRlKTtcclxuICAgIH1cclxufTtcblxuY29uc3QgZGVmYXVsdFJldHVybiA9IHtcclxuICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgdmFsdWU6ICcnLFxyXG59O1xyXG52YXIgZ2V0UmFkaW9WYWx1ZSA9IChvcHRpb25zKSA9PiBBcnJheS5pc0FycmF5KG9wdGlvbnMpXHJcbiAgICA/IG9wdGlvbnMucmVkdWNlKChwcmV2aW91cywgb3B0aW9uKSA9PiBvcHRpb24gJiYgb3B0aW9uLnJlZi5jaGVja2VkXHJcbiAgICAgICAgPyB7XHJcbiAgICAgICAgICAgIGlzVmFsaWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiBvcHRpb24ucmVmLnZhbHVlLFxyXG4gICAgICAgIH1cclxuICAgICAgICA6IHByZXZpb3VzLCBkZWZhdWx0UmV0dXJuKVxyXG4gICAgOiBkZWZhdWx0UmV0dXJuO1xuXG52YXIgZ2V0TXVsdGlwbGVTZWxlY3RWYWx1ZSA9IChvcHRpb25zKSA9PiBbLi4ub3B0aW9uc11cclxuICAgIC5maWx0ZXIoKHsgc2VsZWN0ZWQgfSkgPT4gc2VsZWN0ZWQpXHJcbiAgICAubWFwKCh7IHZhbHVlIH0pID0+IHZhbHVlKTtcblxudmFyIGlzUmFkaW9JbnB1dCA9IChlbGVtZW50KSA9PiBlbGVtZW50LnR5cGUgPT09ICdyYWRpbyc7XG5cbnZhciBpc0ZpbGVJbnB1dCA9IChlbGVtZW50KSA9PiBlbGVtZW50LnR5cGUgPT09ICdmaWxlJztcblxudmFyIGlzQ2hlY2tCb3hJbnB1dCA9IChlbGVtZW50KSA9PiBlbGVtZW50LnR5cGUgPT09ICdjaGVja2JveCc7XG5cbnZhciBpc011bHRpcGxlU2VsZWN0ID0gKGVsZW1lbnQpID0+IGVsZW1lbnQudHlwZSA9PT0gYCR7U0VMRUNUfS1tdWx0aXBsZWA7XG5cbmNvbnN0IGRlZmF1bHRSZXN1bHQgPSB7XHJcbiAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICBpc1ZhbGlkOiBmYWxzZSxcclxufTtcclxuY29uc3QgdmFsaWRSZXN1bHQgPSB7IHZhbHVlOiB0cnVlLCBpc1ZhbGlkOiB0cnVlIH07XHJcbnZhciBnZXRDaGVja2JveFZhbHVlID0gKG9wdGlvbnMpID0+IHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBvcHRpb25zXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbiAmJiBvcHRpb24ucmVmLmNoZWNrZWQpXHJcbiAgICAgICAgICAgICAgICAubWFwKCh7IHJlZjogeyB2YWx1ZSB9IH0pID0+IHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlcywgaXNWYWxpZDogISF2YWx1ZXMubGVuZ3RoIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHsgY2hlY2tlZCwgdmFsdWUsIGF0dHJpYnV0ZXMgfSA9IG9wdGlvbnNbMF0ucmVmO1xyXG4gICAgICAgIHJldHVybiBjaGVja2VkXHJcbiAgICAgICAgICAgID8gYXR0cmlidXRlcyAmJiAhaXNVbmRlZmluZWQoYXR0cmlidXRlcy52YWx1ZSlcclxuICAgICAgICAgICAgICAgID8gaXNVbmRlZmluZWQodmFsdWUpIHx8IHZhbHVlID09PSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgID8gdmFsaWRSZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICA6IHsgdmFsdWU6IHZhbHVlLCBpc1ZhbGlkOiB0cnVlIH1cclxuICAgICAgICAgICAgICAgIDogdmFsaWRSZXN1bHRcclxuICAgICAgICAgICAgOiBkZWZhdWx0UmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRlZmF1bHRSZXN1bHQ7XHJcbn07XG5cbmZ1bmN0aW9uIGdldEZpZWxkVmFsdWUoZmllbGRzUmVmLCBuYW1lLCBzaGFsbG93RmllbGRzU3RhdGVSZWYsIGV4Y2x1ZGVEaXNhYmxlZCkge1xyXG4gICAgY29uc3QgZmllbGQgPSBmaWVsZHNSZWYuY3VycmVudFtuYW1lXTtcclxuICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgIGNvbnN0IHsgcmVmOiB7IHZhbHVlLCBkaXNhYmxlZCB9LCByZWYsIHZhbHVlQXNOdW1iZXIsIHZhbHVlQXNEYXRlLCBzZXRWYWx1ZUFzLCB9ID0gZmllbGQ7XHJcbiAgICAgICAgaWYgKGRpc2FibGVkICYmIGV4Y2x1ZGVEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0ZpbGVJbnB1dChyZWYpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWYuZmlsZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1JhZGlvSW5wdXQocmVmKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0UmFkaW9WYWx1ZShmaWVsZC5vcHRpb25zKS52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTXVsdGlwbGVTZWxlY3QocmVmKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0TXVsdGlwbGVTZWxlY3RWYWx1ZShyZWYub3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0NoZWNrQm94SW5wdXQocmVmKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0Q2hlY2tib3hWYWx1ZShmaWVsZC5vcHRpb25zKS52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlQXNOdW1iZXJcclxuICAgICAgICAgICAgPyArdmFsdWVcclxuICAgICAgICAgICAgOiB2YWx1ZUFzRGF0ZVxyXG4gICAgICAgICAgICAgICAgPyByZWYudmFsdWVBc0RhdGVcclxuICAgICAgICAgICAgICAgIDogc2V0VmFsdWVBc1xyXG4gICAgICAgICAgICAgICAgICAgID8gc2V0VmFsdWVBcyh2YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICA6IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHNoYWxsb3dGaWVsZHNTdGF0ZVJlZikge1xyXG4gICAgICAgIHJldHVybiBnZXQoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQsIG5hbWUpO1xyXG4gICAgfVxyXG59XG5cbmZ1bmN0aW9uIGlzRGV0YWNoZWQoZWxlbWVudCkge1xyXG4gICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8XHJcbiAgICAgICAgZWxlbWVudC5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzRGV0YWNoZWQoZWxlbWVudC5wYXJlbnROb2RlKTtcclxufVxuXG52YXIgaXNFbXB0eU9iamVjdCA9ICh2YWx1ZSkgPT4gaXNPYmplY3QodmFsdWUpICYmICFPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoO1xuXG52YXIgaXNCb29sZWFuID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcblxuZnVuY3Rpb24gYmFzZUdldChvYmplY3QsIHVwZGF0ZVBhdGgpIHtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHVwZGF0ZVBhdGguc2xpY2UoMCwgLTEpLmxlbmd0aDtcclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcclxuICAgICAgICBvYmplY3QgPSBpc1VuZGVmaW5lZChvYmplY3QpID8gaW5kZXgrKyA6IG9iamVjdFt1cGRhdGVQYXRoW2luZGV4KytdXTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmplY3Q7XHJcbn1cclxuZnVuY3Rpb24gdW5zZXQob2JqZWN0LCBwYXRoKSB7XHJcbiAgICBjb25zdCB1cGRhdGVQYXRoID0gaXNLZXkocGF0aCkgPyBbcGF0aF0gOiBzdHJpbmdUb1BhdGgocGF0aCk7XHJcbiAgICBjb25zdCBjaGlsZE9iamVjdCA9IHVwZGF0ZVBhdGgubGVuZ3RoID09IDEgPyBvYmplY3QgOiBiYXNlR2V0KG9iamVjdCwgdXBkYXRlUGF0aCk7XHJcbiAgICBjb25zdCBrZXkgPSB1cGRhdGVQYXRoW3VwZGF0ZVBhdGgubGVuZ3RoIC0gMV07XHJcbiAgICBsZXQgcHJldmlvdXNPYmpSZWY7XHJcbiAgICBpZiAoY2hpbGRPYmplY3QpIHtcclxuICAgICAgICBkZWxldGUgY2hpbGRPYmplY3Rba2V5XTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgdXBkYXRlUGF0aC5zbGljZSgwLCAtMSkubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICBsZXQgaW5kZXggPSAtMTtcclxuICAgICAgICBsZXQgb2JqZWN0UmVmO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXRocyA9IHVwZGF0ZVBhdGguc2xpY2UoMCwgLShrICsgMSkpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXRoc0xlbmd0aCA9IGN1cnJlbnRQYXRocy5sZW5ndGggLSAxO1xyXG4gICAgICAgIGlmIChrID4gMCkge1xyXG4gICAgICAgICAgICBwcmV2aW91c09ialJlZiA9IG9iamVjdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKCsraW5kZXggPCBjdXJyZW50UGF0aHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBjdXJyZW50UGF0aHNbaW5kZXhdO1xyXG4gICAgICAgICAgICBvYmplY3RSZWYgPSBvYmplY3RSZWYgPyBvYmplY3RSZWZbaXRlbV0gOiBvYmplY3RbaXRlbV07XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50UGF0aHNMZW5ndGggPT09IGluZGV4ICYmXHJcbiAgICAgICAgICAgICAgICAoKGlzT2JqZWN0KG9iamVjdFJlZikgJiYgaXNFbXB0eU9iamVjdChvYmplY3RSZWYpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIChBcnJheS5pc0FycmF5KG9iamVjdFJlZikgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgIW9iamVjdFJlZi5maWx0ZXIoKGRhdGEpID0+IChpc09iamVjdChkYXRhKSAmJiAhaXNFbXB0eU9iamVjdChkYXRhKSkgfHwgaXNCb29sZWFuKGRhdGEpKS5sZW5ndGgpKSkge1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNPYmpSZWYgPyBkZWxldGUgcHJldmlvdXNPYmpSZWZbaXRlbV0gOiBkZWxldGUgb2JqZWN0W2l0ZW1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByZXZpb3VzT2JqUmVmID0gb2JqZWN0UmVmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvYmplY3Q7XHJcbn1cblxuY29uc3QgaXNTYW1lUmVmID0gKGZpZWxkVmFsdWUsIHJlZikgPT4gZmllbGRWYWx1ZSAmJiBmaWVsZFZhbHVlLnJlZiA9PT0gcmVmO1xyXG5mdW5jdGlvbiBmaW5kUmVtb3ZlZEZpZWxkQW5kUmVtb3ZlTGlzdGVuZXIoZmllbGRzUmVmLCBoYW5kbGVDaGFuZ2UsIGZpZWxkLCBzaGFsbG93RmllbGRzU3RhdGVSZWYsIHNob3VsZFVucmVnaXN0ZXIsIGZvcmNlRGVsZXRlKSB7XHJcbiAgICBjb25zdCB7IHJlZiwgcmVmOiB7IG5hbWUgfSwgfSA9IGZpZWxkO1xyXG4gICAgY29uc3QgZmllbGRSZWYgPSBmaWVsZHNSZWYuY3VycmVudFtuYW1lXTtcclxuICAgIGlmICghc2hvdWxkVW5yZWdpc3Rlcikge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0RmllbGRWYWx1ZShmaWVsZHNSZWYsIG5hbWUsIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZik7XHJcbiAgICAgICAgIWlzVW5kZWZpbmVkKHZhbHVlKSAmJiBzZXQoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQsIG5hbWUsIHZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmICghcmVmLnR5cGUgfHwgIWZpZWxkUmVmKSB7XHJcbiAgICAgICAgZGVsZXRlIGZpZWxkc1JlZi5jdXJyZW50W25hbWVdO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChpc1JhZGlvSW5wdXQocmVmKSB8fCBpc0NoZWNrQm94SW5wdXQocmVmKSkge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpZWxkUmVmLm9wdGlvbnMpICYmIGZpZWxkUmVmLm9wdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbXBhY3QoZmllbGRSZWYub3B0aW9ucykuZm9yRWFjaCgob3B0aW9uID0ge30sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGlzRGV0YWNoZWQob3B0aW9uLnJlZikgJiYgaXNTYW1lUmVmKG9wdGlvbiwgb3B0aW9uLnJlZikpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yY2VEZWxldGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVBbGxFdmVudExpc3RlbmVycyhvcHRpb24ucmVmLCBoYW5kbGVDaGFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVuc2V0KGZpZWxkUmVmLm9wdGlvbnMsIGBbJHtpbmRleH1dYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoZmllbGRSZWYub3B0aW9ucyAmJiAhY29tcGFjdChmaWVsZFJlZi5vcHRpb25zKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBmaWVsZHNSZWYuY3VycmVudFtuYW1lXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZGVsZXRlIGZpZWxkc1JlZi5jdXJyZW50W25hbWVdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKChpc0RldGFjaGVkKHJlZikgJiYgaXNTYW1lUmVmKGZpZWxkUmVmLCByZWYpKSB8fCBmb3JjZURlbGV0ZSkge1xyXG4gICAgICAgIHJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzKHJlZiwgaGFuZGxlQ2hhbmdlKTtcclxuICAgICAgICBkZWxldGUgZmllbGRzUmVmLmN1cnJlbnRbbmFtZV07XHJcbiAgICB9XHJcbn1cblxudmFyIGlzUHJpbWl0aXZlID0gKHZhbHVlKSA9PiBpc051bGxPclVuZGVmaW5lZCh2YWx1ZSkgfHwgIWlzT2JqZWN0VHlwZSh2YWx1ZSk7XG5cbmZ1bmN0aW9uIGRlZXBNZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xyXG4gICAgaWYgKGlzUHJpbWl0aXZlKHRhcmdldCkgfHwgaXNQcmltaXRpdmUoc291cmNlKSkge1xyXG4gICAgICAgIHJldHVybiBzb3VyY2U7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcclxuICAgICAgICBjb25zdCB0YXJnZXRWYWx1ZSA9IHRhcmdldFtrZXldO1xyXG4gICAgICAgIGNvbnN0IHNvdXJjZVZhbHVlID0gc291cmNlW2tleV07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPVxyXG4gICAgICAgICAgICAgICAgKGlzT2JqZWN0KHRhcmdldFZhbHVlKSAmJiBpc09iamVjdChzb3VyY2VWYWx1ZSkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKEFycmF5LmlzQXJyYXkodGFyZ2V0VmFsdWUpICYmIEFycmF5LmlzQXJyYXkoc291cmNlVmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgICAgID8gZGVlcE1lcmdlKHRhcmdldFZhbHVlLCBzb3VyY2VWYWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICA6IHNvdXJjZVZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoX2EpIHsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufVxuXG5mdW5jdGlvbiBkZWVwRXF1YWwob2JqZWN0MSwgb2JqZWN0MiwgaXNFcnJvck9iamVjdCkge1xyXG4gICAgaWYgKGlzUHJpbWl0aXZlKG9iamVjdDEpIHx8XHJcbiAgICAgICAgaXNQcmltaXRpdmUob2JqZWN0MikgfHxcclxuICAgICAgICBvYmplY3QxIGluc3RhbmNlb2YgRGF0ZSB8fFxyXG4gICAgICAgIG9iamVjdDIgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iamVjdDEgPT09IG9iamVjdDI7XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzVmFsaWRFbGVtZW50KG9iamVjdDEpKSB7XHJcbiAgICAgICAgY29uc3Qga2V5czEgPSBPYmplY3Qua2V5cyhvYmplY3QxKTtcclxuICAgICAgICBjb25zdCBrZXlzMiA9IE9iamVjdC5rZXlzKG9iamVjdDIpO1xyXG4gICAgICAgIGlmIChrZXlzMS5sZW5ndGggIT09IGtleXMyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbDEgPSBvYmplY3QxW2tleV07XHJcbiAgICAgICAgICAgIGlmICghKGlzRXJyb3JPYmplY3QgJiYga2V5ID09PSAncmVmJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbDIgPSBvYmplY3QyW2tleV07XHJcbiAgICAgICAgICAgICAgICBpZiAoKGlzT2JqZWN0KHZhbDEpIHx8IEFycmF5LmlzQXJyYXkodmFsMSkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKGlzT2JqZWN0KHZhbDIpIHx8IEFycmF5LmlzQXJyYXkodmFsMikpXHJcbiAgICAgICAgICAgICAgICAgICAgPyAhZGVlcEVxdWFsKHZhbDEsIHZhbDIsIGlzRXJyb3JPYmplY3QpXHJcbiAgICAgICAgICAgICAgICAgICAgOiB2YWwxICE9PSB2YWwyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cblxuZnVuY3Rpb24gc2V0RGlydHlGaWVsZHModmFsdWVzLCBkZWZhdWx0VmFsdWVzLCBkaXJ0eUZpZWxkcywgcGFyZW50Tm9kZSwgcGFyZW50TmFtZSkge1xyXG4gICAgbGV0IGluZGV4ID0gLTE7XHJcbiAgICB3aGlsZSAoKytpbmRleCA8IHZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWx1ZXNbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlc1tpbmRleF1ba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgICFkaXJ0eUZpZWxkc1tpbmRleF0gJiYgKGRpcnR5RmllbGRzW2luZGV4XSA9IHt9KTtcclxuICAgICAgICAgICAgICAgIGRpcnR5RmllbGRzW2luZGV4XVtrZXldID0gW107XHJcbiAgICAgICAgICAgICAgICBzZXREaXJ0eUZpZWxkcyh2YWx1ZXNbaW5kZXhdW2tleV0sIGdldChkZWZhdWx0VmFsdWVzW2luZGV4XSB8fCB7fSwga2V5LCBbXSksIGRpcnR5RmllbGRzW2luZGV4XVtrZXldLCBkaXJ0eUZpZWxkc1tpbmRleF0sIGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZWVwRXF1YWwoZ2V0KGRlZmF1bHRWYWx1ZXNbaW5kZXhdIHx8IHt9LCBrZXkpLCB2YWx1ZXNbaW5kZXhdW2tleV0pXHJcbiAgICAgICAgICAgICAgICAgICAgPyBzZXQoZGlydHlGaWVsZHNbaW5kZXhdIHx8IHt9LCBrZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgOiAoZGlydHlGaWVsZHNbaW5kZXhdID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkaXJ0eUZpZWxkc1tpbmRleF0pLCB7IFtrZXldOiB0cnVlIH0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJlbnROb2RlICYmXHJcbiAgICAgICAgICAgICFkaXJ0eUZpZWxkcy5sZW5ndGggJiZcclxuICAgICAgICAgICAgZGVsZXRlIHBhcmVudE5vZGVbcGFyZW50TmFtZV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGlydHlGaWVsZHM7XHJcbn1cclxudmFyIHNldEZpZWxkQXJyYXlEaXJ0eUZpZWxkcyA9ICh2YWx1ZXMsIGRlZmF1bHRWYWx1ZXMsIGRpcnR5RmllbGRzKSA9PiBkZWVwTWVyZ2Uoc2V0RGlydHlGaWVsZHModmFsdWVzLCBkZWZhdWx0VmFsdWVzLCBkaXJ0eUZpZWxkcy5zbGljZSgwLCB2YWx1ZXMubGVuZ3RoKSksIHNldERpcnR5RmllbGRzKGRlZmF1bHRWYWx1ZXMsIHZhbHVlcywgZGlydHlGaWVsZHMuc2xpY2UoMCwgdmFsdWVzLmxlbmd0aCkpKTtcblxudmFyIGlzU3RyaW5nID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuXG52YXIgZ2V0RmllbGRzVmFsdWVzID0gKGZpZWxkc1JlZiwgc2hhbGxvd0ZpZWxkc1N0YXRlLCBzaG91bGRVbnJlZ2lzdGVyLCBleGNsdWRlRGlzYWJsZWQsIHNlYXJjaCkgPT4ge1xyXG4gICAgY29uc3Qgb3V0cHV0ID0ge307XHJcbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gZmllbGRzUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBpZiAoaXNVbmRlZmluZWQoc2VhcmNoKSB8fFxyXG4gICAgICAgICAgICAoaXNTdHJpbmcoc2VhcmNoKVxyXG4gICAgICAgICAgICAgICAgPyBuYW1lLnN0YXJ0c1dpdGgoc2VhcmNoKVxyXG4gICAgICAgICAgICAgICAgOiBBcnJheS5pc0FycmF5KHNlYXJjaCkgJiYgc2VhcmNoLmZpbmQoKGRhdGEpID0+IG5hbWUuc3RhcnRzV2l0aChkYXRhKSkpKSB7XHJcbiAgICAgICAgICAgIG91dHB1dFtuYW1lXSA9IGdldEZpZWxkVmFsdWUoZmllbGRzUmVmLCBuYW1lLCB1bmRlZmluZWQsIGV4Y2x1ZGVEaXNhYmxlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNob3VsZFVucmVnaXN0ZXJcclxuICAgICAgICA/IHRyYW5zZm9ybVRvTmVzdE9iamVjdChvdXRwdXQpXHJcbiAgICAgICAgOiBkZWVwTWVyZ2Uoc2hhbGxvd0ZpZWxkc1N0YXRlLCB0cmFuc2Zvcm1Ub05lc3RPYmplY3Qob3V0cHV0KSk7XHJcbn07XG5cbnZhciBpc0Vycm9yU3RhdGVDaGFuZ2VkID0gKHsgZXJyb3JzLCBuYW1lLCBlcnJvciwgdmFsaWRGaWVsZHMsIGZpZWxkc1dpdGhWYWxpZGF0aW9uLCB9KSA9PiB7XHJcbiAgICBjb25zdCBpc1ZhbGlkID0gaXNVbmRlZmluZWQoZXJyb3IpO1xyXG4gICAgY29uc3QgcHJldmlvdXNFcnJvciA9IGdldChlcnJvcnMsIG5hbWUpO1xyXG4gICAgcmV0dXJuICgoaXNWYWxpZCAmJiAhIXByZXZpb3VzRXJyb3IpIHx8XHJcbiAgICAgICAgKCFpc1ZhbGlkICYmICFkZWVwRXF1YWwocHJldmlvdXNFcnJvciwgZXJyb3IsIHRydWUpKSB8fFxyXG4gICAgICAgIChpc1ZhbGlkICYmIGdldChmaWVsZHNXaXRoVmFsaWRhdGlvbiwgbmFtZSkgJiYgIWdldCh2YWxpZEZpZWxkcywgbmFtZSkpKTtcclxufTtcblxudmFyIGlzUmVnZXggPSAodmFsdWUpID0+IHZhbHVlIGluc3RhbmNlb2YgUmVnRXhwO1xuXG52YXIgZ2V0VmFsdWVBbmRNZXNzYWdlID0gKHZhbGlkYXRpb25EYXRhKSA9PiBpc09iamVjdCh2YWxpZGF0aW9uRGF0YSkgJiYgIWlzUmVnZXgodmFsaWRhdGlvbkRhdGEpXHJcbiAgICA/IHZhbGlkYXRpb25EYXRhXHJcbiAgICA6IHtcclxuICAgICAgICB2YWx1ZTogdmFsaWRhdGlvbkRhdGEsXHJcbiAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICB9O1xuXG52YXIgaXNGdW5jdGlvbiA9ICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xuXG52YXIgaXNNZXNzYWdlID0gKHZhbHVlKSA9PiBpc1N0cmluZyh2YWx1ZSkgfHwgaXNWYWxpZEVsZW1lbnQodmFsdWUpO1xuXG5mdW5jdGlvbiBnZXRWYWxpZGF0ZUVycm9yKHJlc3VsdCwgcmVmLCB0eXBlID0gJ3ZhbGlkYXRlJykge1xyXG4gICAgaWYgKGlzTWVzc2FnZShyZXN1bHQpIHx8IChpc0Jvb2xlYW4ocmVzdWx0KSAmJiAhcmVzdWx0KSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGlzTWVzc2FnZShyZXN1bHQpID8gcmVzdWx0IDogJycsXHJcbiAgICAgICAgICAgIHJlZixcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XG5cbnZhciBhcHBlbmRFcnJvcnMgPSAobmFtZSwgdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCBlcnJvcnMsIHR5cGUsIG1lc3NhZ2UpID0+IHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYVxyXG4gICAgPyBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGVycm9yc1tuYW1lXSksIHsgdHlwZXM6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgKGVycm9yc1tuYW1lXSAmJiBlcnJvcnNbbmFtZV0udHlwZXMgPyBlcnJvcnNbbmFtZV0udHlwZXMgOiB7fSkpLCB7IFt0eXBlXTogbWVzc2FnZSB8fCB0cnVlIH0pIH0pIDoge307XG5cbnZhciB2YWxpZGF0ZUZpZWxkID0gYXN5bmMgKGZpZWxkc1JlZiwgdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCB7IHJlZiwgcmVmOiB7IHZhbHVlIH0sIG9wdGlvbnMsIHJlcXVpcmVkLCBtYXhMZW5ndGgsIG1pbkxlbmd0aCwgbWluLCBtYXgsIHBhdHRlcm4sIHZhbGlkYXRlLCB9LCBzaGFsbG93RmllbGRzU3RhdGVSZWYpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSByZWYubmFtZTtcclxuICAgIGNvbnN0IGVycm9yID0ge307XHJcbiAgICBjb25zdCBpc1JhZGlvID0gaXNSYWRpb0lucHV0KHJlZik7XHJcbiAgICBjb25zdCBpc0NoZWNrQm94ID0gaXNDaGVja0JveElucHV0KHJlZik7XHJcbiAgICBjb25zdCBpc1JhZGlvT3JDaGVja2JveCA9IGlzUmFkaW8gfHwgaXNDaGVja0JveDtcclxuICAgIGNvbnN0IGlzRW1wdHkgPSB2YWx1ZSA9PT0gJyc7XHJcbiAgICBjb25zdCBhcHBlbmRFcnJvcnNDdXJyeSA9IGFwcGVuZEVycm9ycy5iaW5kKG51bGwsIG5hbWUsIHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgZXJyb3IpO1xyXG4gICAgY29uc3QgZ2V0TWluTWF4TWVzc2FnZSA9IChleGNlZWRNYXgsIG1heExlbmd0aE1lc3NhZ2UsIG1pbkxlbmd0aE1lc3NhZ2UsIG1heFR5cGUgPSBJTlBVVF9WQUxJREFUSU9OX1JVTEVTLm1heExlbmd0aCwgbWluVHlwZSA9IElOUFVUX1ZBTElEQVRJT05fUlVMRVMubWluTGVuZ3RoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGV4Y2VlZE1heCA/IG1heExlbmd0aE1lc3NhZ2UgOiBtaW5MZW5ndGhNZXNzYWdlO1xyXG4gICAgICAgIGVycm9yW25hbWVdID0gT2JqZWN0LmFzc2lnbih7IHR5cGU6IGV4Y2VlZE1heCA/IG1heFR5cGUgOiBtaW5UeXBlLCBtZXNzYWdlLFxyXG4gICAgICAgICAgICByZWYgfSwgKGV4Y2VlZE1heFxyXG4gICAgICAgICAgICA/IGFwcGVuZEVycm9yc0N1cnJ5KG1heFR5cGUsIG1lc3NhZ2UpXHJcbiAgICAgICAgICAgIDogYXBwZW5kRXJyb3JzQ3VycnkobWluVHlwZSwgbWVzc2FnZSkpKTtcclxuICAgIH07XHJcbiAgICBpZiAocmVxdWlyZWQgJiZcclxuICAgICAgICAoKCFpc1JhZGlvICYmICFpc0NoZWNrQm94ICYmIChpc0VtcHR5IHx8IGlzTnVsbE9yVW5kZWZpbmVkKHZhbHVlKSkpIHx8XHJcbiAgICAgICAgICAgIChpc0Jvb2xlYW4odmFsdWUpICYmICF2YWx1ZSkgfHxcclxuICAgICAgICAgICAgKGlzQ2hlY2tCb3ggJiYgIWdldENoZWNrYm94VmFsdWUob3B0aW9ucykuaXNWYWxpZCkgfHxcclxuICAgICAgICAgICAgKGlzUmFkaW8gJiYgIWdldFJhZGlvVmFsdWUob3B0aW9ucykuaXNWYWxpZCkpKSB7XHJcbiAgICAgICAgY29uc3QgeyB2YWx1ZSwgbWVzc2FnZSB9ID0gaXNNZXNzYWdlKHJlcXVpcmVkKVxyXG4gICAgICAgICAgICA/IHsgdmFsdWU6ICEhcmVxdWlyZWQsIG1lc3NhZ2U6IHJlcXVpcmVkIH1cclxuICAgICAgICAgICAgOiBnZXRWYWx1ZUFuZE1lc3NhZ2UocmVxdWlyZWQpO1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBlcnJvcltuYW1lXSA9IE9iamVjdC5hc3NpZ24oeyB0eXBlOiBJTlBVVF9WQUxJREFUSU9OX1JVTEVTLnJlcXVpcmVkLCBtZXNzYWdlLCByZWY6IGlzUmFkaW9PckNoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgPyAoKGZpZWxkc1JlZi5jdXJyZW50W25hbWVdLm9wdGlvbnMgfHwgW10pWzBdIHx8IHt9KS5yZWZcclxuICAgICAgICAgICAgICAgICAgICA6IHJlZiB9LCBhcHBlbmRFcnJvcnNDdXJyeShJTlBVVF9WQUxJREFUSU9OX1JVTEVTLnJlcXVpcmVkLCBtZXNzYWdlKSk7XHJcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoKCFpc051bGxPclVuZGVmaW5lZChtaW4pIHx8ICFpc051bGxPclVuZGVmaW5lZChtYXgpKSAmJiB2YWx1ZSAhPT0gJycpIHtcclxuICAgICAgICBsZXQgZXhjZWVkTWF4O1xyXG4gICAgICAgIGxldCBleGNlZWRNaW47XHJcbiAgICAgICAgY29uc3QgbWF4T3V0cHV0ID0gZ2V0VmFsdWVBbmRNZXNzYWdlKG1heCk7XHJcbiAgICAgICAgY29uc3QgbWluT3V0cHV0ID0gZ2V0VmFsdWVBbmRNZXNzYWdlKG1pbik7XHJcbiAgICAgICAgaWYgKCFpc05hTih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVOdW1iZXIgPSByZWYudmFsdWVBc051bWJlciB8fCBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKCFpc051bGxPclVuZGVmaW5lZChtYXhPdXRwdXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBleGNlZWRNYXggPSB2YWx1ZU51bWJlciA+IG1heE91dHB1dC52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKG1pbk91dHB1dC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGV4Y2VlZE1pbiA9IHZhbHVlTnVtYmVyIDwgbWluT3V0cHV0LnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZURhdGUgPSByZWYudmFsdWVBc0RhdGUgfHwgbmV3IERhdGUodmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoaXNTdHJpbmcobWF4T3V0cHV0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgZXhjZWVkTWF4ID0gdmFsdWVEYXRlID4gbmV3IERhdGUobWF4T3V0cHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNTdHJpbmcobWluT3V0cHV0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgZXhjZWVkTWluID0gdmFsdWVEYXRlIDwgbmV3IERhdGUobWluT3V0cHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXhjZWVkTWF4IHx8IGV4Y2VlZE1pbikge1xyXG4gICAgICAgICAgICBnZXRNaW5NYXhNZXNzYWdlKCEhZXhjZWVkTWF4LCBtYXhPdXRwdXQubWVzc2FnZSwgbWluT3V0cHV0Lm1lc3NhZ2UsIElOUFVUX1ZBTElEQVRJT05fUlVMRVMubWF4LCBJTlBVVF9WQUxJREFUSU9OX1JVTEVTLm1pbik7XHJcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoaXNTdHJpbmcodmFsdWUpICYmICFpc0VtcHR5ICYmIChtYXhMZW5ndGggfHwgbWluTGVuZ3RoKSkge1xyXG4gICAgICAgIGNvbnN0IG1heExlbmd0aE91dHB1dCA9IGdldFZhbHVlQW5kTWVzc2FnZShtYXhMZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IG1pbkxlbmd0aE91dHB1dCA9IGdldFZhbHVlQW5kTWVzc2FnZShtaW5MZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGV4Y2VlZE1heCA9ICFpc051bGxPclVuZGVmaW5lZChtYXhMZW5ndGhPdXRwdXQudmFsdWUpICYmXHJcbiAgICAgICAgICAgIHZhbHVlLmxlbmd0aCA+IG1heExlbmd0aE91dHB1dC52YWx1ZTtcclxuICAgICAgICBjb25zdCBleGNlZWRNaW4gPSAhaXNOdWxsT3JVbmRlZmluZWQobWluTGVuZ3RoT3V0cHV0LnZhbHVlKSAmJlxyXG4gICAgICAgICAgICB2YWx1ZS5sZW5ndGggPCBtaW5MZW5ndGhPdXRwdXQudmFsdWU7XHJcbiAgICAgICAgaWYgKGV4Y2VlZE1heCB8fCBleGNlZWRNaW4pIHtcclxuICAgICAgICAgICAgZ2V0TWluTWF4TWVzc2FnZShleGNlZWRNYXgsIG1heExlbmd0aE91dHB1dC5tZXNzYWdlLCBtaW5MZW5ndGhPdXRwdXQubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIHBhdHRlcm4gJiYgIWlzRW1wdHkpIHtcclxuICAgICAgICBjb25zdCB7IHZhbHVlOiBwYXR0ZXJuVmFsdWUsIG1lc3NhZ2UgfSA9IGdldFZhbHVlQW5kTWVzc2FnZShwYXR0ZXJuKTtcclxuICAgICAgICBpZiAoaXNSZWdleChwYXR0ZXJuVmFsdWUpICYmICFwYXR0ZXJuVmFsdWUudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgZXJyb3JbbmFtZV0gPSBPYmplY3QuYXNzaWduKHsgdHlwZTogSU5QVVRfVkFMSURBVElPTl9SVUxFUy5wYXR0ZXJuLCBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgcmVmIH0sIGFwcGVuZEVycm9yc0N1cnJ5KElOUFVUX1ZBTElEQVRJT05fUlVMRVMucGF0dGVybiwgbWVzc2FnZSkpO1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHZhbGlkYXRlKSB7XHJcbiAgICAgICAgY29uc3QgZmllbGRWYWx1ZSA9IGdldEZpZWxkVmFsdWUoZmllbGRzUmVmLCBuYW1lLCBzaGFsbG93RmllbGRzU3RhdGVSZWYpO1xyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRlUmVmID0gaXNSYWRpb09yQ2hlY2tib3ggJiYgb3B0aW9ucyA/IG9wdGlvbnNbMF0ucmVmIDogcmVmO1xyXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKHZhbGlkYXRlKSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB2YWxpZGF0ZShmaWVsZFZhbHVlKTtcclxuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVFcnJvciA9IGdldFZhbGlkYXRlRXJyb3IocmVzdWx0LCB2YWxpZGF0ZVJlZik7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZUVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcltuYW1lXSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdmFsaWRhdGVFcnJvciksIGFwcGVuZEVycm9yc0N1cnJ5KElOUFVUX1ZBTElEQVRJT05fUlVMRVMudmFsaWRhdGUsIHZhbGlkYXRlRXJyb3IubWVzc2FnZSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNPYmplY3QodmFsaWRhdGUpKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWxpZGF0aW9uUmVzdWx0ID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsaWRhdGVGdW5jdGlvbl0gb2YgT2JqZWN0LmVudHJpZXModmFsaWRhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzRW1wdHlPYmplY3QodmFsaWRhdGlvblJlc3VsdCkgJiYgIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVSZXN1bHQgPSBhd2FpdCB2YWxpZGF0ZUZ1bmN0aW9uKGZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVFcnJvciA9IGdldFZhbGlkYXRlRXJyb3IodmFsaWRhdGVSZXN1bHQsIHZhbGlkYXRlUmVmLCBrZXkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uUmVzdWx0ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB2YWxpZGF0ZUVycm9yKSwgYXBwZW5kRXJyb3JzQ3Vycnkoa2V5LCB2YWxpZGF0ZUVycm9yLm1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yW25hbWVdID0gdmFsaWRhdGlvblJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFpc0VtcHR5T2JqZWN0KHZhbGlkYXRpb25SZXN1bHQpKSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcltuYW1lXSA9IE9iamVjdC5hc3NpZ24oeyByZWY6IHZhbGlkYXRlUmVmIH0sIHZhbGlkYXRpb25SZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbn07XG5cbmNvbnN0IGdldFBhdGggPSAocm9vdFBhdGgsIHZhbHVlcywgcGF0aHMgPSBbXSkgPT4ge1xyXG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiB2YWx1ZXMpIHtcclxuICAgICAgICBjb25zdCByb290TmFtZSA9IChyb290UGF0aCArXHJcbiAgICAgICAgICAgIChpc09iamVjdCh2YWx1ZXMpXHJcbiAgICAgICAgICAgICAgICA/IGAuJHtwcm9wZXJ0eX1gXHJcbiAgICAgICAgICAgICAgICA6IGBbJHtwcm9wZXJ0eX1dYCkpO1xyXG4gICAgICAgIGlzUHJpbWl0aXZlKHZhbHVlc1twcm9wZXJ0eV0pXHJcbiAgICAgICAgICAgID8gcGF0aHMucHVzaChyb290TmFtZSlcclxuICAgICAgICAgICAgOiBnZXRQYXRoKHJvb3ROYW1lLCB2YWx1ZXNbcHJvcGVydHldLCBwYXRocyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGF0aHM7XHJcbn07XG5cbnZhciBhc3NpZ25XYXRjaEZpZWxkcyA9IChmaWVsZFZhbHVlcywgZmllbGROYW1lLCB3YXRjaEZpZWxkcywgaW5wdXRWYWx1ZSwgaXNTaW5nbGVGaWVsZCkgPT4ge1xyXG4gICAgbGV0IHZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgd2F0Y2hGaWVsZHMuYWRkKGZpZWxkTmFtZSk7XHJcbiAgICBpZiAoIWlzRW1wdHlPYmplY3QoZmllbGRWYWx1ZXMpKSB7XHJcbiAgICAgICAgdmFsdWUgPSBnZXQoZmllbGRWYWx1ZXMsIGZpZWxkTmFtZSk7XHJcbiAgICAgICAgaWYgKGlzT2JqZWN0KHZhbHVlKSB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICBnZXRQYXRoKGZpZWxkTmFtZSwgdmFsdWUpLmZvckVhY2goKG5hbWUpID0+IHdhdGNoRmllbGRzLmFkZChuYW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzVW5kZWZpbmVkKHZhbHVlKVxyXG4gICAgICAgID8gaXNTaW5nbGVGaWVsZFxyXG4gICAgICAgICAgICA/IGlucHV0VmFsdWVcclxuICAgICAgICAgICAgOiBnZXQoaW5wdXRWYWx1ZSwgZmllbGROYW1lKVxyXG4gICAgICAgIDogdmFsdWU7XHJcbn07XG5cbnZhciBza2lwVmFsaWRhdGlvbiA9ICh7IGlzT25CbHVyLCBpc09uQ2hhbmdlLCBpc09uVG91Y2gsIGlzVG91Y2hlZCwgaXNSZVZhbGlkYXRlT25CbHVyLCBpc1JlVmFsaWRhdGVPbkNoYW5nZSwgaXNCbHVyRXZlbnQsIGlzU3VibWl0dGVkLCBpc09uQWxsLCB9KSA9PiB7XHJcbiAgICBpZiAoaXNPbkFsbCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCFpc1N1Ym1pdHRlZCAmJiBpc09uVG91Y2gpIHtcclxuICAgICAgICByZXR1cm4gIShpc1RvdWNoZWQgfHwgaXNCbHVyRXZlbnQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNTdWJtaXR0ZWQgPyBpc1JlVmFsaWRhdGVPbkJsdXIgOiBpc09uQmx1cikge1xyXG4gICAgICAgIHJldHVybiAhaXNCbHVyRXZlbnQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpc1N1Ym1pdHRlZCA/IGlzUmVWYWxpZGF0ZU9uQ2hhbmdlIDogaXNPbkNoYW5nZSkge1xyXG4gICAgICAgIHJldHVybiBpc0JsdXJFdmVudDtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59O1xuXG52YXIgZ2V0RmllbGRBcnJheVBhcmVudE5hbWUgPSAobmFtZSkgPT4gbmFtZS5zdWJzdHJpbmcoMCwgbmFtZS5pbmRleE9mKCdbJykpO1xuXG5jb25zdCBpc01hdGNoRmllbGRBcnJheU5hbWUgPSAobmFtZSwgc2VhcmNoTmFtZSkgPT4gUmVnRXhwKGBeJHtzZWFyY2hOYW1lfShbfC4pXFxcXGQrYC5yZXBsYWNlKC9cXFsvZywgJ1xcXFxbJykucmVwbGFjZSgvXFxdL2csICdcXFxcXScpKS50ZXN0KG5hbWUpO1xyXG52YXIgaXNOYW1lSW5GaWVsZEFycmF5ID0gKG5hbWVzLCBuYW1lKSA9PiBbLi4ubmFtZXNdLnNvbWUoKGN1cnJlbnQpID0+IGlzTWF0Y2hGaWVsZEFycmF5TmFtZShuYW1lLCBjdXJyZW50KSk7XG5cbnZhciBpc1NlbGVjdElucHV0ID0gKGVsZW1lbnQpID0+IGVsZW1lbnQudHlwZSA9PT0gYCR7U0VMRUNUfS1vbmVgO1xuXG5mdW5jdGlvbiBvbkRvbVJlbW92ZShmaWVsZHNSZWYsIHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lckFuZFJlZikge1xyXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBPYmplY3QudmFsdWVzKGZpZWxkc1JlZi5jdXJyZW50KSkge1xyXG4gICAgICAgICAgICBpZiAoZmllbGQgJiYgZmllbGQub3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBvcHRpb24gb2YgZmllbGQub3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLnJlZiAmJiBpc0RldGFjaGVkKG9wdGlvbi5yZWYpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lckFuZFJlZihmaWVsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGZpZWxkICYmIGlzRGV0YWNoZWQoZmllbGQucmVmKSkge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyQW5kUmVmKGZpZWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZSh3aW5kb3cuZG9jdW1lbnQsIHtcclxuICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgc3VidHJlZTogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG9ic2VydmVyO1xyXG59XG5cbnZhciBpc1dlYiA9IHR5cGVvZiB3aW5kb3cgIT09IFVOREVGSU5FRCAmJiB0eXBlb2YgZG9jdW1lbnQgIT09IFVOREVGSU5FRDtcblxuZnVuY3Rpb24gY2xvbmVPYmplY3QoZGF0YSkge1xyXG4gICAgbGV0IGNvcHk7XHJcbiAgICBpZiAoaXNQcmltaXRpdmUoZGF0YSkgfHxcclxuICAgICAgICAoaXNXZWIgJiYgKGRhdGEgaW5zdGFuY2VvZiBGaWxlIHx8IGlzSFRNTEVsZW1lbnQoZGF0YSkpKSkge1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgY29weSA9IG5ldyBEYXRlKGRhdGEuZ2V0VGltZSgpKTtcclxuICAgICAgICByZXR1cm4gY29weTtcclxuICAgIH1cclxuICAgIGlmIChkYXRhIGluc3RhbmNlb2YgU2V0KSB7XHJcbiAgICAgICAgY29weSA9IG5ldyBTZXQoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xyXG4gICAgICAgICAgICBjb3B5LmFkZChpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvcHk7XHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIE1hcCkge1xyXG4gICAgICAgIGNvcHkgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgZGF0YS5rZXlzKCkpIHtcclxuICAgICAgICAgICAgY29weS5zZXQoa2V5LCBjbG9uZU9iamVjdChkYXRhLmdldChrZXkpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb3B5O1xyXG4gICAgfVxyXG4gICAgY29weSA9IEFycmF5LmlzQXJyYXkoZGF0YSkgPyBbXSA6IHt9O1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgIGNvcHlba2V5XSA9IGNsb25lT2JqZWN0KGRhdGFba2V5XSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29weTtcclxufVxuXG52YXIgbW9kZUNoZWNrZXIgPSAobW9kZSkgPT4gKHtcclxuICAgIGlzT25TdWJtaXQ6ICFtb2RlIHx8IG1vZGUgPT09IFZBTElEQVRJT05fTU9ERS5vblN1Ym1pdCxcclxuICAgIGlzT25CbHVyOiBtb2RlID09PSBWQUxJREFUSU9OX01PREUub25CbHVyLFxyXG4gICAgaXNPbkNoYW5nZTogbW9kZSA9PT0gVkFMSURBVElPTl9NT0RFLm9uQ2hhbmdlLFxyXG4gICAgaXNPbkFsbDogbW9kZSA9PT0gVkFMSURBVElPTl9NT0RFLmFsbCxcclxuICAgIGlzT25Ub3VjaDogbW9kZSA9PT0gVkFMSURBVElPTl9NT0RFLm9uVG91Y2hlZCxcclxufSk7XG5cbnZhciBpc1JhZGlvT3JDaGVja2JveEZ1bmN0aW9uID0gKHJlZikgPT4gaXNSYWRpb0lucHV0KHJlZikgfHwgaXNDaGVja0JveElucHV0KHJlZik7XG5cbmNvbnN0IGlzV2luZG93VW5kZWZpbmVkID0gdHlwZW9mIHdpbmRvdyA9PT0gVU5ERUZJTkVEO1xyXG5jb25zdCBpc1Byb3h5RW5hYmxlZCA9IGlzV2ViID8gJ1Byb3h5JyBpbiB3aW5kb3cgOiB0eXBlb2YgUHJveHkgIT09IFVOREVGSU5FRDtcclxuZnVuY3Rpb24gdXNlRm9ybSh7IG1vZGUgPSBWQUxJREFUSU9OX01PREUub25TdWJtaXQsIHJlVmFsaWRhdGVNb2RlID0gVkFMSURBVElPTl9NT0RFLm9uQ2hhbmdlLCByZXNvbHZlciwgY29udGV4dCwgZGVmYXVsdFZhbHVlcyA9IHt9LCBzaG91bGRGb2N1c0Vycm9yID0gdHJ1ZSwgc2hvdWxkVW5yZWdpc3RlciA9IHRydWUsIGNyaXRlcmlhTW9kZSwgfSA9IHt9KSB7XHJcbiAgICBjb25zdCBmaWVsZHNSZWYgPSB1c2VSZWYoe30pO1xyXG4gICAgY29uc3QgZmllbGRBcnJheURlZmF1bHRWYWx1ZXNSZWYgPSB1c2VSZWYoe30pO1xyXG4gICAgY29uc3QgZmllbGRBcnJheVZhbHVlc1JlZiA9IHVzZVJlZih7fSk7XHJcbiAgICBjb25zdCB3YXRjaEZpZWxkc1JlZiA9IHVzZVJlZihuZXcgU2V0KCkpO1xyXG4gICAgY29uc3QgdXNlV2F0Y2hGaWVsZHNSZWYgPSB1c2VSZWYoe30pO1xyXG4gICAgY29uc3QgdXNlV2F0Y2hSZW5kZXJGdW5jdGlvbnNSZWYgPSB1c2VSZWYoe30pO1xyXG4gICAgY29uc3QgZmllbGRzV2l0aFZhbGlkYXRpb25SZWYgPSB1c2VSZWYoe30pO1xyXG4gICAgY29uc3QgdmFsaWRGaWVsZHNSZWYgPSB1c2VSZWYoe30pO1xyXG4gICAgY29uc3QgZGVmYXVsdFZhbHVlc1JlZiA9IHVzZVJlZihkZWZhdWx0VmFsdWVzKTtcclxuICAgIGNvbnN0IGlzVW5Nb3VudCA9IHVzZVJlZihmYWxzZSk7XHJcbiAgICBjb25zdCBpc1dhdGNoQWxsUmVmID0gdXNlUmVmKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVJlZiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3Qgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmID0gdXNlUmVmKHt9KTtcclxuICAgIGNvbnN0IHJlc2V0RmllbGRBcnJheUZ1bmN0aW9uUmVmID0gdXNlUmVmKHt9KTtcclxuICAgIGNvbnN0IGNvbnRleHRSZWYgPSB1c2VSZWYoY29udGV4dCk7XHJcbiAgICBjb25zdCByZXNvbHZlclJlZiA9IHVzZVJlZihyZXNvbHZlcik7XHJcbiAgICBjb25zdCBmaWVsZEFycmF5TmFtZXNSZWYgPSB1c2VSZWYobmV3IFNldCgpKTtcclxuICAgIGNvbnN0IG1vZGVSZWYgPSB1c2VSZWYobW9kZUNoZWNrZXIobW9kZSkpO1xyXG4gICAgY29uc3QgeyBpc09uU3VibWl0LCBpc09uVG91Y2ggfSA9IG1vZGVSZWYuY3VycmVudDtcclxuICAgIGNvbnN0IGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhID0gY3JpdGVyaWFNb2RlID09PSBWQUxJREFUSU9OX01PREUuYWxsO1xyXG4gICAgY29uc3QgW2Zvcm1TdGF0ZSwgc2V0Rm9ybVN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBpc0RpcnR5OiBmYWxzZSxcclxuICAgICAgICBpc1ZhbGlkYXRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGRpcnR5RmllbGRzOiB7fSxcclxuICAgICAgICBpc1N1Ym1pdHRlZDogZmFsc2UsXHJcbiAgICAgICAgc3VibWl0Q291bnQ6IDAsXHJcbiAgICAgICAgdG91Y2hlZDoge30sXHJcbiAgICAgICAgaXNTdWJtaXR0aW5nOiBmYWxzZSxcclxuICAgICAgICBpc1N1Ym1pdFN1Y2Nlc3NmdWw6IGZhbHNlLFxyXG4gICAgICAgIGlzVmFsaWQ6ICFpc09uU3VibWl0LFxyXG4gICAgICAgIGVycm9yczoge30sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJlYWRGb3JtU3RhdGVSZWYgPSB1c2VSZWYoe1xyXG4gICAgICAgIGlzRGlydHk6ICFpc1Byb3h5RW5hYmxlZCxcclxuICAgICAgICBkaXJ0eUZpZWxkczogIWlzUHJveHlFbmFibGVkLFxyXG4gICAgICAgIHRvdWNoZWQ6ICFpc1Byb3h5RW5hYmxlZCB8fCBpc09uVG91Y2gsXHJcbiAgICAgICAgaXNWYWxpZGF0aW5nOiAhaXNQcm94eUVuYWJsZWQsXHJcbiAgICAgICAgaXNTdWJtaXR0aW5nOiAhaXNQcm94eUVuYWJsZWQsXHJcbiAgICAgICAgaXNWYWxpZDogIWlzUHJveHlFbmFibGVkLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBmb3JtU3RhdGVSZWYgPSB1c2VSZWYoZm9ybVN0YXRlKTtcclxuICAgIGNvbnN0IG9ic2VydmVyUmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCB7IGlzT25CbHVyOiBpc1JlVmFsaWRhdGVPbkJsdXIsIGlzT25DaGFuZ2U6IGlzUmVWYWxpZGF0ZU9uQ2hhbmdlLCB9ID0gdXNlUmVmKG1vZGVDaGVja2VyKHJlVmFsaWRhdGVNb2RlKSkuY3VycmVudDtcclxuICAgIGNvbnRleHRSZWYuY3VycmVudCA9IGNvbnRleHQ7XHJcbiAgICByZXNvbHZlclJlZi5jdXJyZW50ID0gcmVzb2x2ZXI7XHJcbiAgICBmb3JtU3RhdGVSZWYuY3VycmVudCA9IGZvcm1TdGF0ZTtcclxuICAgIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50ID0gc2hvdWxkVW5yZWdpc3RlclxyXG4gICAgICAgID8ge31cclxuICAgICAgICA6IGlzRW1wdHlPYmplY3Qoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQpXHJcbiAgICAgICAgICAgID8gY2xvbmVPYmplY3QoZGVmYXVsdFZhbHVlcylcclxuICAgICAgICAgICAgOiBzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudDtcclxuICAgIGNvbnN0IHVwZGF0ZUZvcm1TdGF0ZSA9IHVzZUNhbGxiYWNrKChzdGF0ZSA9IHt9KSA9PiB7XHJcbiAgICAgICAgaWYgKCFpc1VuTW91bnQuY3VycmVudCkge1xyXG4gICAgICAgICAgICBmb3JtU3RhdGVSZWYuY3VycmVudCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZm9ybVN0YXRlUmVmLmN1cnJlbnQpLCBzdGF0ZSk7XHJcbiAgICAgICAgICAgIHNldEZvcm1TdGF0ZShmb3JtU3RhdGVSZWYuY3VycmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgdXBkYXRlSXNWYWxpZGF0aW5nID0gKCkgPT4gcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWRhdGluZyAmJlxyXG4gICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzVmFsaWRhdGluZzogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgIGNvbnN0IHNob3VsZFJlbmRlckJhc2VPbkVycm9yID0gdXNlQ2FsbGJhY2soKG5hbWUsIGVycm9yLCBzaG91bGRSZW5kZXIgPSBmYWxzZSwgc3RhdGUgPSB7fSwgaXNWYWxpZCkgPT4ge1xyXG4gICAgICAgIGxldCBzaG91bGRSZVJlbmRlciA9IHNob3VsZFJlbmRlciB8fFxyXG4gICAgICAgICAgICBpc0Vycm9yU3RhdGVDaGFuZ2VkKHtcclxuICAgICAgICAgICAgICAgIGVycm9yczogZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLFxyXG4gICAgICAgICAgICAgICAgZXJyb3IsXHJcbiAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRGaWVsZHM6IHZhbGlkRmllbGRzUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgICAgICAgICBmaWVsZHNXaXRoVmFsaWRhdGlvbjogZmllbGRzV2l0aFZhbGlkYXRpb25SZWYuY3VycmVudCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNFcnJvciA9IGdldChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMsIG5hbWUpO1xyXG4gICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICB1bnNldCh2YWxpZEZpZWxkc1JlZi5jdXJyZW50LCBuYW1lKTtcclxuICAgICAgICAgICAgc2hvdWxkUmVSZW5kZXIgPVxyXG4gICAgICAgICAgICAgICAgc2hvdWxkUmVSZW5kZXIgfHxcclxuICAgICAgICAgICAgICAgICAgICAhcHJldmlvdXNFcnJvciB8fFxyXG4gICAgICAgICAgICAgICAgICAgICFkZWVwRXF1YWwocHJldmlvdXNFcnJvciwgZXJyb3IsIHRydWUpO1xyXG4gICAgICAgICAgICBzZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBuYW1lLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZ2V0KGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLmN1cnJlbnQsIG5hbWUpIHx8IHJlc29sdmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHNldCh2YWxpZEZpZWxkc1JlZi5jdXJyZW50LCBuYW1lLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHNob3VsZFJlUmVuZGVyID0gc2hvdWxkUmVSZW5kZXIgfHwgcHJldmlvdXNFcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1bnNldChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMsIG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHNob3VsZFJlUmVuZGVyICYmICFpc051bGxPclVuZGVmaW5lZChzaG91bGRSZW5kZXIpKSB8fFxyXG4gICAgICAgICAgICAhaXNFbXB0eU9iamVjdChzdGF0ZSkgfHxcclxuICAgICAgICAgICAgcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWRhdGluZykge1xyXG4gICAgICAgICAgICB1cGRhdGVGb3JtU3RhdGUoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKSwgKHJlc29sdmVyUmVmLmN1cnJlbnQgPyB7IGlzVmFsaWQ6ICEhaXNWYWxpZCB9IDoge30pKSwgeyBpc1ZhbGlkYXRpbmc6IGZhbHNlIH0pKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBzZXRGaWVsZFZhbHVlID0gdXNlQ2FsbGJhY2soKG5hbWUsIHJhd1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyByZWYsIG9wdGlvbnMgfSA9IGZpZWxkc1JlZi5jdXJyZW50W25hbWVdO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gaXNXZWIgJiYgaXNIVE1MRWxlbWVudChyZWYpICYmIGlzTnVsbE9yVW5kZWZpbmVkKHJhd1ZhbHVlKVxyXG4gICAgICAgICAgICA/ICcnXHJcbiAgICAgICAgICAgIDogcmF3VmFsdWU7XHJcbiAgICAgICAgaWYgKGlzUmFkaW9JbnB1dChyZWYpKSB7XHJcbiAgICAgICAgICAgIChvcHRpb25zIHx8IFtdKS5mb3JFYWNoKCh7IHJlZjogcmFkaW9SZWYgfSkgPT4gKHJhZGlvUmVmLmNoZWNrZWQgPSByYWRpb1JlZi52YWx1ZSA9PT0gdmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNGaWxlSW5wdXQocmVmKSAmJiAhaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJlZi5maWxlcyA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc011bHRpcGxlU2VsZWN0KHJlZikpIHtcclxuICAgICAgICAgICAgWy4uLnJlZi5vcHRpb25zXS5mb3JFYWNoKChzZWxlY3RSZWYpID0+IChzZWxlY3RSZWYuc2VsZWN0ZWQgPSB2YWx1ZS5pbmNsdWRlcyhzZWxlY3RSZWYudmFsdWUpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlzQ2hlY2tCb3hJbnB1dChyZWYpICYmIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5sZW5ndGggPiAxXHJcbiAgICAgICAgICAgICAgICA/IG9wdGlvbnMuZm9yRWFjaCgoeyByZWY6IGNoZWNrYm94UmVmIH0pID0+IChjaGVja2JveFJlZi5jaGVja2VkID0gQXJyYXkuaXNBcnJheSh2YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICA/ICEhdmFsdWUuZmluZCgoZGF0YSkgPT4gZGF0YSA9PT0gY2hlY2tib3hSZWYudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgOiB2YWx1ZSA9PT0gY2hlY2tib3hSZWYudmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgOiAob3B0aW9uc1swXS5yZWYuY2hlY2tlZCA9ICEhdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVmLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgaXNGb3JtRGlydHkgPSB1c2VDYWxsYmFjaygobmFtZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmIChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNEaXJ0eSkge1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtVmFsdWVzID0gZ2V0VmFsdWVzKCk7XHJcbiAgICAgICAgICAgIG5hbWUgJiYgZGF0YSAmJiBzZXQoZm9ybVZhbHVlcywgbmFtZSwgZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiAhZGVlcEVxdWFsKGZvcm1WYWx1ZXMsIGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHVwZGF0ZUFuZEdldERpcnR5U3RhdGUgPSB1c2VDYWxsYmFjaygobmFtZSwgc2hvdWxkUmVuZGVyID0gdHJ1ZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNEaXJ0eSB8fFxyXG4gICAgICAgICAgICByZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMpIHtcclxuICAgICAgICAgICAgY29uc3QgaXNGaWVsZERpcnR5ID0gIWRlZXBFcXVhbChnZXQoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lKSwgZ2V0RmllbGRWYWx1ZShmaWVsZHNSZWYsIG5hbWUsIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZikpO1xyXG4gICAgICAgICAgICBjb25zdCBpc0RpcnR5RmllbGRFeGlzdCA9IGdldChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcywgbmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzSXNEaXJ0eSA9IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzRGlydHk7XHJcbiAgICAgICAgICAgIGlzRmllbGREaXJ0eVxyXG4gICAgICAgICAgICAgICAgPyBzZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMsIG5hbWUsIHRydWUpXHJcbiAgICAgICAgICAgICAgICA6IHVuc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzLCBuYW1lKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICBpc0RpcnR5OiBpc0Zvcm1EaXJ0eSgpLFxyXG4gICAgICAgICAgICAgICAgZGlydHlGaWVsZHM6IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBpc0NoYW5nZWQgPSAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzRGlydHkgJiZcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzSXNEaXJ0eSAhPT0gc3RhdGUuaXNEaXJ0eSkgfHxcclxuICAgICAgICAgICAgICAgIChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMgJiZcclxuICAgICAgICAgICAgICAgICAgICBpc0RpcnR5RmllbGRFeGlzdCAhPT0gZ2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzLCBuYW1lKSk7XHJcbiAgICAgICAgICAgIGlzQ2hhbmdlZCAmJiBzaG91bGRSZW5kZXIgJiYgdXBkYXRlRm9ybVN0YXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGlzQ2hhbmdlZCA/IHN0YXRlIDoge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IGV4ZWN1dGVWYWxpZGF0aW9uID0gdXNlQ2FsbGJhY2soYXN5bmMgKG5hbWUsIHNraXBSZVJlbmRlcikgPT4ge1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGlmICghZmllbGRzUmVmLmN1cnJlbnRbbmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybign8J+TiyBGaWVsZCBpcyBtaXNzaW5nIHdpdGggYG5hbWVgIGF0dHJpYnV0ZTogJywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZXJyb3IgPSAoYXdhaXQgdmFsaWRhdGVGaWVsZChmaWVsZHNSZWYsIGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCBmaWVsZHNSZWYuY3VycmVudFtuYW1lXSwgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmKSlbbmFtZV07XHJcbiAgICAgICAgc2hvdWxkUmVuZGVyQmFzZU9uRXJyb3IobmFtZSwgZXJyb3IsIHNraXBSZVJlbmRlcik7XHJcbiAgICAgICAgcmV0dXJuIGlzVW5kZWZpbmVkKGVycm9yKTtcclxuICAgIH0sIFtzaG91bGRSZW5kZXJCYXNlT25FcnJvciwgaXNWYWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWFdKTtcclxuICAgIGNvbnN0IGV4ZWN1dGVTY2hlbWFPclJlc29sdmVyVmFsaWRhdGlvbiA9IHVzZUNhbGxiYWNrKGFzeW5jIChuYW1lcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZXJyb3JzIH0gPSBhd2FpdCByZXNvbHZlclJlZi5jdXJyZW50KGdldFZhbHVlcygpLCBjb250ZXh0UmVmLmN1cnJlbnQsIGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKTtcclxuICAgICAgICBjb25zdCBwcmV2aW91c0Zvcm1Jc1ZhbGlkID0gZm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZDtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShuYW1lcykpIHtcclxuICAgICAgICAgICAgY29uc3QgaXNJbnB1dHNWYWxpZCA9IG5hbWVzXHJcbiAgICAgICAgICAgICAgICAubWFwKChuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IGdldChlcnJvcnMsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICA/IHNldChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMsIG5hbWUsIGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgIDogdW5zZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhZXJyb3I7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuZXZlcnkoQm9vbGVhbik7XHJcbiAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkOiBpc0VtcHR5T2JqZWN0KGVycm9ycyksXHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkYXRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGlzSW5wdXRzVmFsaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IGdldChlcnJvcnMsIG5hbWVzKTtcclxuICAgICAgICAgICAgc2hvdWxkUmVuZGVyQmFzZU9uRXJyb3IobmFtZXMsIGVycm9yLCBwcmV2aW91c0Zvcm1Jc1ZhbGlkICE9PSBpc0VtcHR5T2JqZWN0KGVycm9ycyksIHt9LCBpc0VtcHR5T2JqZWN0KGVycm9ycykpO1xyXG4gICAgICAgICAgICByZXR1cm4gIWVycm9yO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtzaG91bGRSZW5kZXJCYXNlT25FcnJvciwgaXNWYWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWFdKTtcclxuICAgIGNvbnN0IHRyaWdnZXIgPSB1c2VDYWxsYmFjayhhc3luYyAobmFtZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IG5hbWUgfHwgT2JqZWN0LmtleXMoZmllbGRzUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgIHVwZGF0ZUlzVmFsaWRhdGluZygpO1xyXG4gICAgICAgIGlmIChyZXNvbHZlclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleGVjdXRlU2NoZW1hT3JSZXNvbHZlclZhbGlkYXRpb24oZmllbGRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGRzKSkge1xyXG4gICAgICAgICAgICAhbmFtZSAmJiAoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzID0ge30pO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLmFsbChmaWVsZHMubWFwKGFzeW5jIChkYXRhKSA9PiBhd2FpdCBleGVjdXRlVmFsaWRhdGlvbihkYXRhLCBudWxsKSkpO1xyXG4gICAgICAgICAgICB1cGRhdGVGb3JtU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNWYWxpZGF0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuZXZlcnkoQm9vbGVhbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhd2FpdCBleGVjdXRlVmFsaWRhdGlvbihmaWVsZHMpO1xyXG4gICAgfSwgW2V4ZWN1dGVTY2hlbWFPclJlc29sdmVyVmFsaWRhdGlvbiwgZXhlY3V0ZVZhbGlkYXRpb25dKTtcclxuICAgIGNvbnN0IHNldEludGVybmFsVmFsdWVzID0gdXNlQ2FsbGJhY2soKG5hbWUsIHZhbHVlLCB7IHNob3VsZERpcnR5LCBzaG91bGRWYWxpZGF0ZSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHt9O1xyXG4gICAgICAgIHNldChkYXRhLCBuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgZm9yIChjb25zdCBmaWVsZE5hbWUgb2YgZ2V0UGF0aChuYW1lLCB2YWx1ZSkpIHtcclxuICAgICAgICAgICAgaWYgKGZpZWxkc1JlZi5jdXJyZW50W2ZpZWxkTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWUoZmllbGROYW1lLCBnZXQoZGF0YSwgZmllbGROYW1lKSk7XHJcbiAgICAgICAgICAgICAgICBzaG91bGREaXJ0eSAmJiB1cGRhdGVBbmRHZXREaXJ0eVN0YXRlKGZpZWxkTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBzaG91bGRWYWxpZGF0ZSAmJiB0cmlnZ2VyKGZpZWxkTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbdHJpZ2dlciwgc2V0RmllbGRWYWx1ZSwgdXBkYXRlQW5kR2V0RGlydHlTdGF0ZV0pO1xyXG4gICAgY29uc3Qgc2V0SW50ZXJuYWxWYWx1ZSA9IHVzZUNhbGxiYWNrKChuYW1lLCB2YWx1ZSwgY29uZmlnKSA9PiB7XHJcbiAgICAgICAgIXNob3VsZFVucmVnaXN0ZXIgJiZcclxuICAgICAgICAgICAgIWlzUHJpbWl0aXZlKHZhbHVlKSAmJlxyXG4gICAgICAgICAgICBzZXQoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQsIG5hbWUsIE9iamVjdC5hc3NpZ24oe30sIHZhbHVlKSk7XHJcbiAgICAgICAgaWYgKGZpZWxkc1JlZi5jdXJyZW50W25hbWVdKSB7XHJcbiAgICAgICAgICAgIHNldEZpZWxkVmFsdWUobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICBjb25maWcuc2hvdWxkRGlydHkgJiYgdXBkYXRlQW5kR2V0RGlydHlTdGF0ZShuYW1lKTtcclxuICAgICAgICAgICAgY29uZmlnLnNob3VsZFZhbGlkYXRlICYmIHRyaWdnZXIobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFpc1ByaW1pdGl2ZSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgc2V0SW50ZXJuYWxWYWx1ZXMobmFtZSwgdmFsdWUsIGNvbmZpZyk7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZEFycmF5TmFtZXNSZWYuY3VycmVudC5oYXMobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudE5hbWUgPSBnZXRGaWVsZEFycmF5UGFyZW50TmFtZShuYW1lKSB8fCBuYW1lO1xyXG4gICAgICAgICAgICAgICAgc2V0KGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIG5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHJlc2V0RmllbGRBcnJheUZ1bmN0aW9uUmVmLmN1cnJlbnRbcGFyZW50TmFtZV0oe1xyXG4gICAgICAgICAgICAgICAgICAgIFtwYXJlbnROYW1lXTogZ2V0KGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIHBhcmVudE5hbWUpLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5pc0RpcnR5IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5zaG91bGREaXJ0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcywgbmFtZSwgc2V0RmllbGRBcnJheURpcnR5RmllbGRzKHZhbHVlLCBnZXQoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lLCBbXSksIGdldChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcywgbmFtZSwgW10pKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybVN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXJ0eTogIWRlZXBFcXVhbChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGdldFZhbHVlcygpKSwgeyBbbmFtZV06IHZhbHVlIH0pLCBkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICFzaG91bGRVbnJlZ2lzdGVyICYmIHNldChzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCwgbmFtZSwgdmFsdWUpO1xyXG4gICAgfSwgW3VwZGF0ZUFuZEdldERpcnR5U3RhdGUsIHNldEZpZWxkVmFsdWUsIHNldEludGVybmFsVmFsdWVzXSk7XHJcbiAgICBjb25zdCBpc0ZpZWxkV2F0Y2hlZCA9IChuYW1lKSA9PiBpc1dhdGNoQWxsUmVmLmN1cnJlbnQgfHxcclxuICAgICAgICB3YXRjaEZpZWxkc1JlZi5jdXJyZW50LmhhcyhuYW1lKSB8fFxyXG4gICAgICAgIHdhdGNoRmllbGRzUmVmLmN1cnJlbnQuaGFzKChuYW1lLm1hdGNoKC9cXHcrLykgfHwgW10pWzBdKTtcclxuICAgIGNvbnN0IHJlbmRlcldhdGNoZWRJbnB1dHMgPSAobmFtZSkgPT4ge1xyXG4gICAgICAgIGxldCBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKCFpc0VtcHR5T2JqZWN0KHVzZVdhdGNoRmllbGRzUmVmLmN1cnJlbnQpKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHVzZVdhdGNoRmllbGRzUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmICghbmFtZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICF1c2VXYXRjaEZpZWxkc1JlZi5jdXJyZW50W2tleV0uc2l6ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZVdhdGNoRmllbGRzUmVmLmN1cnJlbnRba2V5XS5oYXMobmFtZSkgfHxcclxuICAgICAgICAgICAgICAgICAgICB1c2VXYXRjaEZpZWxkc1JlZi5jdXJyZW50W2tleV0uaGFzKGdldEZpZWxkQXJyYXlQYXJlbnROYW1lKG5hbWUpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZVdhdGNoUmVuZGVyRnVuY3Rpb25zUmVmLmN1cnJlbnRba2V5XSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZvdW5kO1xyXG4gICAgfTtcclxuICAgIGZ1bmN0aW9uIHNldFZhbHVlKG5hbWUsIHZhbHVlLCBjb25maWcpIHtcclxuICAgICAgICBzZXRJbnRlcm5hbFZhbHVlKG5hbWUsIHZhbHVlLCBjb25maWcgfHwge30pO1xyXG4gICAgICAgIGlzRmllbGRXYXRjaGVkKG5hbWUpICYmIHVwZGF0ZUZvcm1TdGF0ZSgpO1xyXG4gICAgICAgIHJlbmRlcldhdGNoZWRJbnB1dHMobmFtZSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVDaGFuZ2VSZWYuY3VycmVudCA9IGhhbmRsZUNoYW5nZVJlZi5jdXJyZW50XHJcbiAgICAgICAgPyBoYW5kbGVDaGFuZ2VSZWYuY3VycmVudFxyXG4gICAgICAgIDogYXN5bmMgKHsgdHlwZSwgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICAgICAgbGV0IG5hbWUgPSB0YXJnZXQubmFtZTtcclxuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNSZWYuY3VycmVudFtuYW1lXTtcclxuICAgICAgICAgICAgbGV0IGVycm9yO1xyXG4gICAgICAgICAgICBsZXQgaXNWYWxpZDtcclxuICAgICAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0JsdXJFdmVudCA9IHR5cGUgPT09IEVWRU5UUy5CTFVSO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2tpcFZhbGlkYXRpb24gPSBza2lwVmFsaWRhdGlvbihPYmplY3QuYXNzaWduKHsgaXNCbHVyRXZlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZVZhbGlkYXRlT25DaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZVZhbGlkYXRlT25CbHVyLCBpc1RvdWNoZWQ6ICEhZ2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWQsIG5hbWUpLCBpc1N1Ym1pdHRlZDogZm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNTdWJtaXR0ZWQgfSwgbW9kZVJlZi5jdXJyZW50KSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RhdGUgPSB1cGRhdGVBbmRHZXREaXJ0eVN0YXRlKG5hbWUsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGxldCBzaG91bGRSZW5kZXIgPSAhaXNFbXB0eU9iamVjdChzdGF0ZSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoIWlzQmx1ckV2ZW50ICYmIGlzRmllbGRXYXRjaGVkKG5hbWUpKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc0JsdXJFdmVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFnZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQudG91Y2hlZCwgbmFtZSkgJiZcclxuICAgICAgICAgICAgICAgICAgICByZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQudG91Y2hlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldChmb3JtU3RhdGVSZWYuY3VycmVudC50b3VjaGVkLCBuYW1lLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpLCB7IHRvdWNoZWQ6IGZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWQgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNob3VsZFVucmVnaXN0ZXIgJiYgaXNDaGVja0JveElucHV0KHRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXQoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQsIG5hbWUsIGdldEZpZWxkVmFsdWUoZmllbGRzUmVmLCBuYW1lKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkU2tpcFZhbGlkYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAhaXNCbHVyRXZlbnQgJiYgcmVuZGVyV2F0Y2hlZElucHV0cyhuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCghaXNFbXB0eU9iamVjdChzdGF0ZSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHNob3VsZFJlbmRlciAmJiBpc0VtcHR5T2JqZWN0KHN0YXRlKSkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZShzdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlSXNWYWxpZGF0aW5nKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3JzIH0gPSBhd2FpdCByZXNvbHZlclJlZi5jdXJyZW50KGdldFZhbHVlcygpLCBjb250ZXh0UmVmLmN1cnJlbnQsIGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c0Zvcm1Jc1ZhbGlkID0gZm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZDtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGdldChlcnJvcnMsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0NoZWNrQm94SW5wdXQodGFyZ2V0KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhZXJyb3IgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnROb2RlTmFtZSA9IGdldEZpZWxkQXJyYXlQYXJlbnROYW1lKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RXJyb3IgPSBnZXQoZXJyb3JzLCBwYXJlbnROb2RlTmFtZSwge30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RXJyb3IudHlwZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEVycm9yLm1lc3NhZ2UgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvciA9IGN1cnJlbnRFcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnROb2RlTmFtZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGN1cnJlbnRFcnJvciB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMsIHBhcmVudE5vZGVOYW1lKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBwYXJlbnROb2RlTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNFbXB0eU9iamVjdChlcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzRm9ybUlzVmFsaWQgIT09IGlzVmFsaWQgJiYgKHNob3VsZFJlbmRlciA9IHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSAoYXdhaXQgdmFsaWRhdGVGaWVsZChmaWVsZHNSZWYsIGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCBmaWVsZCwgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmKSlbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAhaXNCbHVyRXZlbnQgJiYgcmVuZGVyV2F0Y2hlZElucHV0cyhuYW1lKTtcclxuICAgICAgICAgICAgICAgIHNob3VsZFJlbmRlckJhc2VPbkVycm9yKG5hbWUsIGVycm9yLCBzaG91bGRSZW5kZXIsIHN0YXRlLCBpc1ZhbGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICBmdW5jdGlvbiBzZXRGaWVsZEFycmF5RGVmYXVsdFZhbHVlcyhkYXRhKSB7XHJcbiAgICAgICAgaWYgKCFzaG91bGRVbnJlZ2lzdGVyKSB7XHJcbiAgICAgICAgICAgIGxldCBjb3B5ID0gY2xvbmVPYmplY3QoZGF0YSk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgZmllbGRBcnJheU5hbWVzUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0tleSh2YWx1ZSkgJiYgIWNvcHlbdmFsdWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29weSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29weSksIHsgW3ZhbHVlXTogW10gfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvcHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0VmFsdWVzKHBheWxvYWQpIHtcclxuICAgICAgICBpZiAoaXNTdHJpbmcocGF5bG9hZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdldEZpZWxkVmFsdWUoZmllbGRzUmVmLCBwYXlsb2FkLCBzaGFsbG93RmllbGRzU3RhdGVSZWYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXlsb2FkKSkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBwYXlsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICBzZXQoZGF0YSwgbmFtZSwgZ2V0RmllbGRWYWx1ZShmaWVsZHNSZWYsIG5hbWUsIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2V0RmllbGRBcnJheURlZmF1bHRWYWx1ZXMoZ2V0RmllbGRzVmFsdWVzKGZpZWxkc1JlZiwgY2xvbmVPYmplY3Qoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQpLCBzaG91bGRVbnJlZ2lzdGVyKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB2YWxpZGF0ZVJlc29sdmVyID0gdXNlQ2FsbGJhY2soYXN5bmMgKHZhbHVlcyA9IHt9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBlcnJvcnMgfSA9IGF3YWl0IHJlc29sdmVyUmVmLmN1cnJlbnQoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBnZXRWYWx1ZXMoKSksIHZhbHVlcyksIGNvbnRleHRSZWYuY3VycmVudCwgaXNWYWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEpO1xyXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSBpc0VtcHR5T2JqZWN0KGVycm9ycyk7XHJcbiAgICAgICAgZm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZCAhPT0gaXNWYWxpZCAmJlxyXG4gICAgICAgICAgICB1cGRhdGVGb3JtU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNWYWxpZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LCBbaXNWYWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWFdKTtcclxuICAgIGNvbnN0IHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lciA9IHVzZUNhbGxiYWNrKChmaWVsZCwgZm9yY2VEZWxldGUpID0+IGZpbmRSZW1vdmVkRmllbGRBbmRSZW1vdmVMaXN0ZW5lcihmaWVsZHNSZWYsIGhhbmRsZUNoYW5nZVJlZi5jdXJyZW50LCBmaWVsZCwgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLCBzaG91bGRVbnJlZ2lzdGVyLCBmb3JjZURlbGV0ZSksIFtzaG91bGRVbnJlZ2lzdGVyXSk7XHJcbiAgICBjb25zdCB1cGRhdGVXYXRjaGVkVmFsdWUgPSB1c2VDYWxsYmFjaygobmFtZSkgPT4ge1xyXG4gICAgICAgIGlmIChpc1dhdGNoQWxsUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgdXBkYXRlRm9ybVN0YXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHdhdGNoRmllbGQgb2Ygd2F0Y2hGaWVsZHNSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHdhdGNoRmllbGQuc3RhcnRzV2l0aChuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlbmRlcldhdGNoZWRJbnB1dHMobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyQW5kUmVmID0gdXNlQ2FsbGJhY2soKGZpZWxkLCBmb3JjZURlbGV0ZSkgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXIoZmllbGQsIGZvcmNlRGVsZXRlKTtcclxuICAgICAgICAgICAgaWYgKHNob3VsZFVucmVnaXN0ZXIgJiYgIWNvbXBhY3QoZmllbGQub3B0aW9ucyB8fCBbXSkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB1bnNldCh2YWxpZEZpZWxkc1JlZi5jdXJyZW50LCBmaWVsZC5yZWYubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB1bnNldChmaWVsZHNXaXRoVmFsaWRhdGlvblJlZi5jdXJyZW50LCBmaWVsZC5yZWYubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB1bnNldChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMsIGZpZWxkLnJlZi5uYW1lKTtcclxuICAgICAgICAgICAgICAgIHNldChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcywgZmllbGQucmVmLm5hbWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlRm9ybVN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpc0RpcnR5OiBpc0Zvcm1EaXJ0eSgpLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVyUmVmLmN1cnJlbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZVJlc29sdmVyKCk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVXYXRjaGVkVmFsdWUoZmllbGQucmVmLm5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3ZhbGlkYXRlUmVzb2x2ZXIsIHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lcl0pO1xyXG4gICAgZnVuY3Rpb24gY2xlYXJFcnJvcnMobmFtZSkge1xyXG4gICAgICAgIG5hbWUgJiZcclxuICAgICAgICAgICAgKEFycmF5LmlzQXJyYXkobmFtZSkgPyBuYW1lIDogW25hbWVdKS5mb3JFYWNoKChpbnB1dE5hbWUpID0+IGZpZWxkc1JlZi5jdXJyZW50W2lucHV0TmFtZV0gJiYgaXNLZXkoaW5wdXROYW1lKVxyXG4gICAgICAgICAgICAgICAgPyBkZWxldGUgZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzW2lucHV0TmFtZV1cclxuICAgICAgICAgICAgICAgIDogdW5zZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBpbnB1dE5hbWUpKTtcclxuICAgICAgICB1cGRhdGVGb3JtU3RhdGUoe1xyXG4gICAgICAgICAgICBlcnJvcnM6IG5hbWUgPyBmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMgOiB7fSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldEVycm9yKG5hbWUsIGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgcmVmID0gKGZpZWxkc1JlZi5jdXJyZW50W25hbWVdIHx8IHt9KS5yZWY7XHJcbiAgICAgICAgc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycywgbmFtZSwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBlcnJvciksIHsgcmVmIH0pKTtcclxuICAgICAgICB1cGRhdGVGb3JtU3RhdGUoe1xyXG4gICAgICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBlcnJvci5zaG91bGRGb2N1cyAmJiByZWYgJiYgcmVmLmZvY3VzICYmIHJlZi5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgd2F0Y2hJbnRlcm5hbCA9IHVzZUNhbGxiYWNrKChmaWVsZE5hbWVzLCBkZWZhdWx0VmFsdWUsIHdhdGNoSWQpID0+IHtcclxuICAgICAgICBjb25zdCB3YXRjaEZpZWxkcyA9IHdhdGNoSWRcclxuICAgICAgICAgICAgPyB1c2VXYXRjaEZpZWxkc1JlZi5jdXJyZW50W3dhdGNoSWRdXHJcbiAgICAgICAgICAgIDogd2F0Y2hGaWVsZHNSZWYuY3VycmVudDtcclxuICAgICAgICBsZXQgZmllbGRWYWx1ZXMgPSBnZXRGaWVsZHNWYWx1ZXMoZmllbGRzUmVmLCBjbG9uZU9iamVjdChzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCksIHNob3VsZFVucmVnaXN0ZXIsIGZhbHNlLCBmaWVsZE5hbWVzKTtcclxuICAgICAgICBpZiAoaXNTdHJpbmcoZmllbGROYW1lcykpIHtcclxuICAgICAgICAgICAgaWYgKGZpZWxkQXJyYXlOYW1lc1JlZi5jdXJyZW50LmhhcyhmaWVsZE5hbWVzKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRBcnJheVZhbHVlID0gZ2V0KGZpZWxkQXJyYXlWYWx1ZXNSZWYuY3VycmVudCwgZmllbGROYW1lcywgW10pO1xyXG4gICAgICAgICAgICAgICAgZmllbGRWYWx1ZXMgPVxyXG4gICAgICAgICAgICAgICAgICAgICFmaWVsZEFycmF5VmFsdWUubGVuZ3RoIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkQXJyYXlWYWx1ZS5sZW5ndGggIT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYWN0KGdldChmaWVsZFZhbHVlcywgZmllbGROYW1lcywgW10pKS5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBmaWVsZEFycmF5VmFsdWVzUmVmLmN1cnJlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBmaWVsZFZhbHVlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXNzaWduV2F0Y2hGaWVsZHMoZmllbGRWYWx1ZXMsIGZpZWxkTmFtZXMsIHdhdGNoRmllbGRzLCBpc1VuZGVmaW5lZChnZXQoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBmaWVsZE5hbWVzKSlcclxuICAgICAgICAgICAgICAgID8gZGVmYXVsdFZhbHVlXHJcbiAgICAgICAgICAgICAgICA6IGdldChkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIGZpZWxkTmFtZXMpLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY29tYmluZWREZWZhdWx0VmFsdWVzID0gaXNVbmRlZmluZWQoZGVmYXVsdFZhbHVlKVxyXG4gICAgICAgICAgICA/IGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudFxyXG4gICAgICAgICAgICA6IGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWVsZE5hbWVzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmllbGROYW1lcy5yZWR1Y2UoKHByZXZpb3VzLCBuYW1lKSA9PiAoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwcmV2aW91cyksIHsgW25hbWVdOiBhc3NpZ25XYXRjaEZpZWxkcyhmaWVsZFZhbHVlcywgbmFtZSwgd2F0Y2hGaWVsZHMsIGNvbWJpbmVkRGVmYXVsdFZhbHVlcykgfSkpLCB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlzV2F0Y2hBbGxSZWYuY3VycmVudCA9IGlzVW5kZWZpbmVkKHdhdGNoSWQpO1xyXG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1Ub05lc3RPYmplY3QoKCFpc0VtcHR5T2JqZWN0KGZpZWxkVmFsdWVzKSAmJiBmaWVsZFZhbHVlcykgfHxcclxuICAgICAgICAgICAgY29tYmluZWREZWZhdWx0VmFsdWVzKTtcclxuICAgIH0sIFtdKTtcclxuICAgIGZ1bmN0aW9uIHdhdGNoKGZpZWxkTmFtZXMsIGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB3YXRjaEludGVybmFsKGZpZWxkTmFtZXMsIGRlZmF1bHRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1bnJlZ2lzdGVyKG5hbWUpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGZpZWxkTmFtZSBvZiBBcnJheS5pc0FycmF5KG5hbWUpID8gbmFtZSA6IFtuYW1lXSkge1xyXG4gICAgICAgICAgICByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXJBbmRSZWYoZmllbGRzUmVmLmN1cnJlbnRbZmllbGROYW1lXSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVnaXN0ZXJGaWVsZFJlZihyZWYsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGlmICghcmVmLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLndhcm4oJ/Cfk4sgRmllbGQgaXMgbWlzc2luZyBgbmFtZWAgYXR0cmlidXRlJywgcmVmLCBgaHR0cHM6Ly9yZWFjdC1ob29rLWZvcm0uY29tL2FwaSN1c2VGb3JtYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZpZWxkQXJyYXlOYW1lc1JlZi5jdXJyZW50LmhhcyhyZWYubmFtZS5zcGxpdCgvXFxbXFxkK1xcXSQvKVswXSkgJiZcclxuICAgICAgICAgICAgICAgICFSZWdFeHAoYF4ke3JlZi5uYW1lLnNwbGl0KC9cXFtcXGQrXFxdJC8pWzBdfVtcXFxcZCtdLlxcXFx3K2BcclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxbL2csICdcXFxcWycpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXS9nLCAnXFxcXF0nKSkudGVzdChyZWYubmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLndhcm4oJ/Cfk4sgYG5hbWVgIHByb3Agc2hvdWxkIGJlIGluIG9iamVjdCBzaGFwZTogbmFtZT1cInRlc3RbaW5kZXhdLm5hbWVcIicsIHJlZiwgJ2h0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjdXNlRmllbGRBcnJheScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdHlwZSwgdmFsdWUgfSA9IHJlZjtcclxuICAgICAgICBjb25zdCBmaWVsZFJlZkFuZFZhbGlkYXRpb25PcHRpb25zID0gT2JqZWN0LmFzc2lnbih7IHJlZiB9LCBvcHRpb25zKTtcclxuICAgICAgICBjb25zdCBmaWVsZHMgPSBmaWVsZHNSZWYuY3VycmVudDtcclxuICAgICAgICBjb25zdCBpc1JhZGlvT3JDaGVja2JveCA9IGlzUmFkaW9PckNoZWNrYm94RnVuY3Rpb24ocmVmKTtcclxuICAgICAgICBjb25zdCBpc0ZpZWxkQXJyYXkgPSBpc05hbWVJbkZpZWxkQXJyYXkoZmllbGRBcnJheU5hbWVzUmVmLmN1cnJlbnQsIG5hbWUpO1xyXG4gICAgICAgIGNvbnN0IGNvbXBhcmVSZWYgPSAoY3VycmVudFJlZikgPT4gaXNXZWIgJiYgKCFpc0hUTUxFbGVtZW50KHJlZikgfHwgY3VycmVudFJlZiA9PT0gcmVmKTtcclxuICAgICAgICBsZXQgZmllbGQgPSBmaWVsZHNbbmFtZV07XHJcbiAgICAgICAgbGV0IGlzRW1wdHlEZWZhdWx0VmFsdWUgPSB0cnVlO1xyXG4gICAgICAgIGxldCBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgaWYgKGZpZWxkICYmXHJcbiAgICAgICAgICAgIChpc1JhZGlvT3JDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgPyBBcnJheS5pc0FycmF5KGZpZWxkLm9wdGlvbnMpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGFjdChmaWVsZC5vcHRpb25zKS5maW5kKChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSBvcHRpb24ucmVmLnZhbHVlICYmIGNvbXBhcmVSZWYob3B0aW9uLnJlZik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIDogY29tcGFyZVJlZihmaWVsZC5yZWYpKSkge1xyXG4gICAgICAgICAgICBmaWVsZHNbbmFtZV0gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZpZWxkKSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGUpIHtcclxuICAgICAgICAgICAgZmllbGQgPSBpc1JhZGlvT3JDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgPyBPYmplY3QuYXNzaWduKHsgb3B0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jb21wYWN0KChmaWVsZCAmJiBmaWVsZC5vcHRpb25zKSB8fCBbXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdLCByZWY6IHsgdHlwZSwgbmFtZSB9IH0sIG9wdGlvbnMpIDogT2JqZWN0LmFzc2lnbih7fSwgZmllbGRSZWZBbmRWYWxpZGF0aW9uT3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmaWVsZCA9IGZpZWxkUmVmQW5kVmFsaWRhdGlvbk9wdGlvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpZWxkc1tuYW1lXSA9IGZpZWxkO1xyXG4gICAgICAgIGNvbnN0IGlzRW1wdHlVbm1vdW50RmllbGRzID0gaXNVbmRlZmluZWQoZ2V0KHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50LCBuYW1lKSk7XHJcbiAgICAgICAgaWYgKCFpc0VtcHR5T2JqZWN0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCkgfHwgIWlzRW1wdHlVbm1vdW50RmllbGRzKSB7XHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IGdldChpc0VtcHR5VW5tb3VudEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgPyBkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnRcclxuICAgICAgICAgICAgICAgIDogc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQsIG5hbWUpO1xyXG4gICAgICAgICAgICBpc0VtcHR5RGVmYXVsdFZhbHVlID0gaXNVbmRlZmluZWQoZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKCFpc0VtcHR5RGVmYXVsdFZhbHVlICYmICFpc0ZpZWxkQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWUobmFtZSwgZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWlzRW1wdHlPYmplY3Qob3B0aW9ucykpIHtcclxuICAgICAgICAgICAgc2V0KGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLmN1cnJlbnQsIG5hbWUsIHRydWUpO1xyXG4gICAgICAgICAgICBpZiAoIWlzT25TdWJtaXQgJiYgcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlRmllbGQoZmllbGRzUmVmLCBpc1ZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgZmllbGQsIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZikudGhlbigoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c0Zvcm1Jc1ZhbGlkID0gZm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZDtcclxuICAgICAgICAgICAgICAgICAgICBpc0VtcHR5T2JqZWN0KGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHNldCh2YWxpZEZpZWxkc1JlZi5jdXJyZW50LCBuYW1lLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHVuc2V0KHZhbGlkRmllbGRzUmVmLmN1cnJlbnQsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzRm9ybUlzVmFsaWQgIT09IGlzRW1wdHlPYmplY3QoZXJyb3IpICYmIHVwZGF0ZUZvcm1TdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNob3VsZFVucmVnaXN0ZXIgJiYgIShpc0ZpZWxkQXJyYXkgJiYgaXNFbXB0eURlZmF1bHRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgIWlzRmllbGRBcnJheSAmJiB1bnNldChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcywgbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGF0dGFjaEV2ZW50TGlzdGVuZXJzKGlzUmFkaW9PckNoZWNrYm94ICYmIGZpZWxkLm9wdGlvbnNcclxuICAgICAgICAgICAgICAgID8gZmllbGQub3B0aW9uc1tmaWVsZC5vcHRpb25zLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgICAgICAgICA6IGZpZWxkLCBpc1JhZGlvT3JDaGVja2JveCB8fCBpc1NlbGVjdElucHV0KHJlZiksIGhhbmRsZUNoYW5nZVJlZi5jdXJyZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZWdpc3RlcihyZWZPclJlZ2lzdGVyT3B0aW9ucywgb3B0aW9ucykge1xyXG4gICAgICAgIGlmICghaXNXaW5kb3dVbmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKGlzU3RyaW5nKHJlZk9yUmVnaXN0ZXJPcHRpb25zKSkge1xyXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJGaWVsZFJlZih7IG5hbWU6IHJlZk9yUmVnaXN0ZXJPcHRpb25zIH0sIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KHJlZk9yUmVnaXN0ZXJPcHRpb25zKSAmJlxyXG4gICAgICAgICAgICAgICAgJ25hbWUnIGluIHJlZk9yUmVnaXN0ZXJPcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICByZWdpc3RlckZpZWxkUmVmKHJlZk9yUmVnaXN0ZXJPcHRpb25zLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAocmVmKSA9PiByZWYgJiYgcmVnaXN0ZXJGaWVsZFJlZihyZWYsIHJlZk9yUmVnaXN0ZXJPcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IHVzZUNhbGxiYWNrKChvblZhbGlkLCBvbkludmFsaWQpID0+IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUgJiYgZS5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUucGVyc2lzdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZmllbGRFcnJvcnMgPSB7fTtcclxuICAgICAgICBsZXQgZmllbGRWYWx1ZXMgPSBzZXRGaWVsZEFycmF5RGVmYXVsdFZhbHVlcyhnZXRGaWVsZHNWYWx1ZXMoZmllbGRzUmVmLCBjbG9uZU9iamVjdChzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCksIHNob3VsZFVucmVnaXN0ZXIsIHRydWUpKTtcclxuICAgICAgICByZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNTdWJtaXR0aW5nICYmXHJcbiAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc1N1Ym1pdHRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNvbHZlclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9ycywgdmFsdWVzIH0gPSBhd2FpdCByZXNvbHZlclJlZi5jdXJyZW50KGZpZWxkVmFsdWVzLCBjb250ZXh0UmVmLmN1cnJlbnQsIGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKTtcclxuICAgICAgICAgICAgICAgIGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycyA9IGZpZWxkRXJyb3JzID0gZXJyb3JzO1xyXG4gICAgICAgICAgICAgICAgZmllbGRWYWx1ZXMgPSB2YWx1ZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIE9iamVjdC52YWx1ZXMoZmllbGRzUmVmLmN1cnJlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gZmllbGQucmVmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZEVycm9yID0gYXdhaXQgdmFsaWRhdGVGaWVsZChmaWVsZHNSZWYsIGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCBmaWVsZCwgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkRXJyb3JbbmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldChmaWVsZEVycm9ycywgbmFtZSwgZmllbGRFcnJvcltuYW1lXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnNldCh2YWxpZEZpZWxkc1JlZi5jdXJyZW50LCBuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChnZXQoZmllbGRzV2l0aFZhbGlkYXRpb25SZWYuY3VycmVudCwgbmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQodmFsaWRGaWVsZHNSZWYuY3VycmVudCwgbmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzRW1wdHlPYmplY3QoZmllbGRFcnJvcnMpICYmXHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMpLmV2ZXJ5KChuYW1lKSA9PiBuYW1lIGluIGZpZWxkc1JlZi5jdXJyZW50KSkge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlRm9ybVN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcnM6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIGlzU3VibWl0dGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgb25WYWxpZChmaWVsZFZhbHVlcywgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycyksIGZpZWxkRXJyb3JzKTtcclxuICAgICAgICAgICAgICAgIG9uSW52YWxpZCAmJiAoYXdhaXQgb25JbnZhbGlkKGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycywgZSkpO1xyXG4gICAgICAgICAgICAgICAgc2hvdWxkRm9jdXNFcnJvciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzT25FcnJvckZpZWxkKGZpZWxkc1JlZi5jdXJyZW50LCBmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICBmb3JtU3RhdGVSZWYuY3VycmVudC5pc1N1Ym1pdHRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdXBkYXRlRm9ybVN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzU3VibWl0dGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXNTdWJtaXR0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzU3VibWl0U3VjY2Vzc2Z1bDogaXNFbXB0eU9iamVjdChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMpLFxyXG4gICAgICAgICAgICAgICAgc3VibWl0Q291bnQ6IGZvcm1TdGF0ZVJlZi5jdXJyZW50LnN1Ym1pdENvdW50ICsgMSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Nob3VsZEZvY3VzRXJyb3IsIGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhXSk7XHJcbiAgICBjb25zdCByZXNldFJlZnMgPSAoeyBlcnJvcnMsIGlzRGlydHksIGlzU3VibWl0dGVkLCB0b3VjaGVkLCBpc1ZhbGlkLCBzdWJtaXRDb3VudCwgZGlydHlGaWVsZHMsIH0pID0+IHtcclxuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgICAgICAgdmFsaWRGaWVsZHNSZWYuY3VycmVudCA9IHt9O1xyXG4gICAgICAgICAgICBmaWVsZHNXaXRoVmFsaWRhdGlvblJlZi5jdXJyZW50ID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQgPSB7fTtcclxuICAgICAgICB3YXRjaEZpZWxkc1JlZi5jdXJyZW50ID0gbmV3IFNldCgpO1xyXG4gICAgICAgIGlzV2F0Y2hBbGxSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSh7XHJcbiAgICAgICAgICAgIHN1Ym1pdENvdW50OiBzdWJtaXRDb3VudCA/IGZvcm1TdGF0ZVJlZi5jdXJyZW50LnN1Ym1pdENvdW50IDogMCxcclxuICAgICAgICAgICAgaXNEaXJ0eTogaXNEaXJ0eSA/IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzRGlydHkgOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNTdWJtaXR0ZWQ6IGlzU3VibWl0dGVkID8gZm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNTdWJtaXR0ZWQgOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNWYWxpZDogaXNWYWxpZCA/IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWQgOiBmYWxzZSxcclxuICAgICAgICAgICAgZGlydHlGaWVsZHM6IGRpcnR5RmllbGRzID8gZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMgOiB7fSxcclxuICAgICAgICAgICAgdG91Y2hlZDogdG91Y2hlZCA/IGZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWQgOiB7fSxcclxuICAgICAgICAgICAgZXJyb3JzOiBlcnJvcnMgPyBmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMgOiB7fSxcclxuICAgICAgICAgICAgaXNTdWJtaXR0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNTdWJtaXRTdWNjZXNzZnVsOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCByZXNldCA9ICh2YWx1ZXMsIG9taXRSZXNldFN0YXRlID0ge30pID0+IHtcclxuICAgICAgICBpZiAoaXNXZWIpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBPYmplY3QudmFsdWVzKGZpZWxkc1JlZi5jdXJyZW50KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyByZWYsIG9wdGlvbnMgfSA9IGZpZWxkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0UmVmID0gaXNSYWRpb09yQ2hlY2tib3hGdW5jdGlvbihyZWYpICYmIEFycmF5LmlzQXJyYXkob3B0aW9ucylcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBvcHRpb25zWzBdLnJlZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHJlZjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNIVE1MRWxlbWVudChpbnB1dFJlZikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UmVmLmNsb3Nlc3QoJ2Zvcm0nKS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKF9hKSB7IH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZmllbGRzUmVmLmN1cnJlbnQgPSB7fTtcclxuICAgICAgICBkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQgPSBPYmplY3QuYXNzaWduKHt9LCAodmFsdWVzIHx8IGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCkpO1xyXG4gICAgICAgIHZhbHVlcyAmJiByZW5kZXJXYXRjaGVkSW5wdXRzKCcnKTtcclxuICAgICAgICBPYmplY3QudmFsdWVzKHJlc2V0RmllbGRBcnJheUZ1bmN0aW9uUmVmLmN1cnJlbnQpLmZvckVhY2goKHJlc2V0RmllbGRBcnJheSkgPT4gaXNGdW5jdGlvbihyZXNldEZpZWxkQXJyYXkpICYmIHJlc2V0RmllbGRBcnJheSgpKTtcclxuICAgICAgICBzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCA9IHNob3VsZFVucmVnaXN0ZXJcclxuICAgICAgICAgICAgPyB7fVxyXG4gICAgICAgICAgICA6IGNsb25lT2JqZWN0KHZhbHVlcyB8fCBkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgIHJlc2V0UmVmcyhvbWl0UmVzZXRTdGF0ZSk7XHJcbiAgICB9O1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICByZXNvbHZlciAmJiByZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZCAmJiB2YWxpZGF0ZVJlc29sdmVyKCk7XHJcbiAgICAgICAgb2JzZXJ2ZXJSZWYuY3VycmVudCA9XHJcbiAgICAgICAgICAgIG9ic2VydmVyUmVmLmN1cnJlbnQgfHwgIWlzV2ViXHJcbiAgICAgICAgICAgICAgICA/IG9ic2VydmVyUmVmLmN1cnJlbnRcclxuICAgICAgICAgICAgICAgIDogb25Eb21SZW1vdmUoZmllbGRzUmVmLCByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXJBbmRSZWYpO1xyXG4gICAgfSwgW3JlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lckFuZFJlZiwgZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50XSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4gKCkgPT4ge1xyXG4gICAgICAgIG9ic2VydmVyUmVmLmN1cnJlbnQgJiYgb2JzZXJ2ZXJSZWYuY3VycmVudC5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgaXNVbk1vdW50LmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhmaWVsZHNSZWYuY3VycmVudCkuZm9yRWFjaCgoZmllbGQpID0+IHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lckFuZFJlZihmaWVsZCwgdHJ1ZSkpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgaWYgKCFyZXNvbHZlciAmJiByZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZCkge1xyXG4gICAgICAgIGZvcm1TdGF0ZS5pc1ZhbGlkID1cclxuICAgICAgICAgICAgZGVlcEVxdWFsKHZhbGlkRmllbGRzUmVmLmN1cnJlbnQsIGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLmN1cnJlbnQpICYmXHJcbiAgICAgICAgICAgICAgICBpc0VtcHR5T2JqZWN0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb21tb25Qcm9wcyA9IHtcclxuICAgICAgICB0cmlnZ2VyLFxyXG4gICAgICAgIHNldFZhbHVlOiB1c2VDYWxsYmFjayhzZXRWYWx1ZSwgW3NldEludGVybmFsVmFsdWUsIHRyaWdnZXJdKSxcclxuICAgICAgICBnZXRWYWx1ZXM6IHVzZUNhbGxiYWNrKGdldFZhbHVlcywgW10pLFxyXG4gICAgICAgIHJlZ2lzdGVyOiB1c2VDYWxsYmFjayhyZWdpc3RlciwgW2RlZmF1bHRWYWx1ZXNSZWYuY3VycmVudF0pLFxyXG4gICAgICAgIHVucmVnaXN0ZXI6IHVzZUNhbGxiYWNrKHVucmVnaXN0ZXIsIFtdKSxcclxuICAgICAgICBmb3JtU3RhdGU6IGlzUHJveHlFbmFibGVkXHJcbiAgICAgICAgICAgID8gbmV3IFByb3h5KGZvcm1TdGF0ZSwge1xyXG4gICAgICAgICAgICAgICAgZ2V0OiAob2JqLCBwcm9wKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09ICdpc1ZhbGlkJyAmJiBpc09uU3VibWl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ/Cfk4sgYGZvcm1TdGF0ZS5pc1ZhbGlkYCBpcyBhcHBsaWNhYmxlIHdpdGggYG9uVG91Y2hlZGAsIGBvbkNoYW5nZWAgb3IgYG9uQmx1cmAgbW9kZS4gaHR0cHM6Ly9yZWFjdC1ob29rLWZvcm0uY29tL2FwaSNmb3JtU3RhdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCBpbiBvYmopIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50W3Byb3BdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9ialtwcm9wXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIDogZm9ybVN0YXRlLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IGNvbnRyb2wgPSB1c2VNZW1vKCgpID0+IChPYmplY3QuYXNzaWduKHsgaXNGb3JtRGlydHksXHJcbiAgICAgICAgdXBkYXRlV2F0Y2hlZFZhbHVlLFxyXG4gICAgICAgIHNob3VsZFVucmVnaXN0ZXIsXHJcbiAgICAgICAgdXBkYXRlRm9ybVN0YXRlLFxyXG4gICAgICAgIHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lcixcclxuICAgICAgICB3YXRjaEludGVybmFsLCBtb2RlOiBtb2RlUmVmLmN1cnJlbnQsIHJlVmFsaWRhdGVNb2RlOiB7XHJcbiAgICAgICAgICAgIGlzUmVWYWxpZGF0ZU9uQmx1cixcclxuICAgICAgICAgICAgaXNSZVZhbGlkYXRlT25DaGFuZ2UsXHJcbiAgICAgICAgfSwgdmFsaWRhdGVSZXNvbHZlcjogcmVzb2x2ZXIgPyB2YWxpZGF0ZVJlc29sdmVyIDogdW5kZWZpbmVkLCBmaWVsZHNSZWYsXHJcbiAgICAgICAgcmVzZXRGaWVsZEFycmF5RnVuY3Rpb25SZWYsXHJcbiAgICAgICAgdXNlV2F0Y2hGaWVsZHNSZWYsXHJcbiAgICAgICAgdXNlV2F0Y2hSZW5kZXJGdW5jdGlvbnNSZWYsXHJcbiAgICAgICAgZmllbGRBcnJheURlZmF1bHRWYWx1ZXNSZWYsXHJcbiAgICAgICAgdmFsaWRGaWVsZHNSZWYsXHJcbiAgICAgICAgZmllbGRzV2l0aFZhbGlkYXRpb25SZWYsXHJcbiAgICAgICAgZmllbGRBcnJheU5hbWVzUmVmLFxyXG4gICAgICAgIHJlYWRGb3JtU3RhdGVSZWYsXHJcbiAgICAgICAgZm9ybVN0YXRlUmVmLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZXNSZWYsXHJcbiAgICAgICAgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLFxyXG4gICAgICAgIGZpZWxkQXJyYXlWYWx1ZXNSZWYgfSwgY29tbW9uUHJvcHMpKSwgW1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCxcclxuICAgICAgICB1cGRhdGVXYXRjaGVkVmFsdWUsXHJcbiAgICAgICAgc2hvdWxkVW5yZWdpc3RlcixcclxuICAgICAgICByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXIsXHJcbiAgICAgICAgd2F0Y2hJbnRlcm5hbCxcclxuICAgIF0pO1xyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyB3YXRjaCxcclxuICAgICAgICBjb250cm9sLFxyXG4gICAgICAgIGhhbmRsZVN1Ym1pdCwgcmVzZXQ6IHVzZUNhbGxiYWNrKHJlc2V0LCBbXSksIGNsZWFyRXJyb3JzOiB1c2VDYWxsYmFjayhjbGVhckVycm9ycywgW10pLCBzZXRFcnJvcjogdXNlQ2FsbGJhY2soc2V0RXJyb3IsIFtdKSwgZXJyb3JzOiBmb3JtU3RhdGUuZXJyb3JzIH0sIGNvbW1vblByb3BzKTtcclxufVxuXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XG5cbmNvbnN0IEZvcm1Db250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuRm9ybUNvbnRleHQuZGlzcGxheU5hbWUgPSAnUkhGQ29udGV4dCc7XHJcbmNvbnN0IHVzZUZvcm1Db250ZXh0ID0gKCkgPT4gdXNlQ29udGV4dChGb3JtQ29udGV4dCk7XHJcbmNvbnN0IEZvcm1Qcm92aWRlciA9IChfYSkgPT4ge1xyXG4gICAgdmFyIHsgY2hpbGRyZW4gfSA9IF9hLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wiY2hpbGRyZW5cIl0pO1xyXG4gICAgcmV0dXJuIChjcmVhdGVFbGVtZW50KEZvcm1Db250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykgfSwgY2hpbGRyZW4pKTtcclxufTtcblxudmFyIGdlbmVyYXRlSWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkID0gdHlwZW9mIHBlcmZvcm1hbmNlID09PSBVTkRFRklORUQgPyBEYXRlLm5vdygpIDogcGVyZm9ybWFuY2Uubm93KCkgKiAxMDAwO1xyXG4gICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgKGMpID0+IHtcclxuICAgICAgICBjb25zdCByID0gKE1hdGgucmFuZG9tKCkgKiAxNiArIGQpICUgMTYgfCAwO1xyXG4gICAgICAgIHJldHVybiAoYyA9PSAneCcgPyByIDogKHIgJiAweDMpIHwgMHg4KS50b1N0cmluZygxNik7XHJcbiAgICB9KTtcclxufTtcblxuZnVuY3Rpb24gcmVtb3ZlQXRJbmRleGVzKGRhdGEsIGluZGV4ZXMpIHtcclxuICAgIGxldCBpID0gMDtcclxuICAgIGNvbnN0IHRlbXAgPSBbLi4uZGF0YV07XHJcbiAgICBmb3IgKGNvbnN0IGluZGV4IG9mIGluZGV4ZXMpIHtcclxuICAgICAgICB0ZW1wLnNwbGljZShpbmRleCAtIGksIDEpO1xyXG4gICAgICAgIGkrKztcclxuICAgIH1cclxuICAgIHJldHVybiBjb21wYWN0KHRlbXApLmxlbmd0aCA/IHRlbXAgOiBbXTtcclxufVxyXG52YXIgcmVtb3ZlQXJyYXlBdCA9IChkYXRhLCBpbmRleCkgPT4gaXNVbmRlZmluZWQoaW5kZXgpXHJcbiAgICA/IFtdXHJcbiAgICA6IHJlbW92ZUF0SW5kZXhlcyhkYXRhLCAoQXJyYXkuaXNBcnJheShpbmRleCkgPyBpbmRleCA6IFtpbmRleF0pLnNvcnQoKSk7XG5cbnZhciBtb3ZlQXJyYXlBdCA9IChkYXRhLCBmcm9tLCB0bykgPT4ge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcclxuICAgICAgICBpZiAoaXNVbmRlZmluZWQoZGF0YVt0b10pKSB7XHJcbiAgICAgICAgICAgIGRhdGFbdG9dID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhLnNwbGljZSh0bywgMCwgZGF0YS5zcGxpY2UoZnJvbSwgMSlbMF0pO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG59O1xuXG52YXIgc3dhcEFycmF5QXQgPSAoZGF0YSwgaW5kZXhBLCBpbmRleEIpID0+IHtcclxuICAgIGNvbnN0IHRlbXAgPSBbZGF0YVtpbmRleEJdLCBkYXRhW2luZGV4QV1dO1xyXG4gICAgZGF0YVtpbmRleEFdID0gdGVtcFswXTtcclxuICAgIGRhdGFbaW5kZXhCXSA9IHRlbXBbMV07XHJcbn07XG5cbmZ1bmN0aW9uIHByZXBlbmQoZGF0YSwgdmFsdWUpIHtcclxuICAgIHJldHVybiBbLi4uKEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWUgfHwgdW5kZWZpbmVkXSksIC4uLmRhdGFdO1xyXG59XG5cbmZ1bmN0aW9uIGluc2VydChkYXRhLCBpbmRleCwgdmFsdWUpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgLi4uZGF0YS5zbGljZSgwLCBpbmRleCksXHJcbiAgICAgICAgLi4uKEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWUgfHwgdW5kZWZpbmVkXSksXHJcbiAgICAgICAgLi4uZGF0YS5zbGljZShpbmRleCksXHJcbiAgICBdO1xyXG59XG5cbnZhciBmaWxsRW1wdHlBcnJheSA9ICh2YWx1ZSkgPT4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyBBcnJheSh2YWx1ZS5sZW5ndGgpLmZpbGwodW5kZWZpbmVkKSA6IHVuZGVmaW5lZDtcblxudmFyIGZpbGxCb29sZWFuQXJyYXkgPSAodmFsdWUpID0+IChBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXSkubWFwKChkYXRhKSA9PiB7XHJcbiAgICBpZiAoaXNPYmplY3QoZGF0YSkpIHtcclxuICAgICAgICBjb25zdCBvYmplY3QgPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgIG9iamVjdFtrZXldID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcblxuY29uc3QgbWFwSWRzID0gKHZhbHVlcyA9IFtdLCBrZXlOYW1lLCBza2lwV2FybikgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICBpZiAoIXNraXBXYXJuKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXlOYW1lIGluIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybihg8J+TiyB1c2VGaWVsZEFycmF5IGZpZWxkVmFsdWVzIGNvbnRhaW4gdGhlIGtleU5hbWUgXFxgJHtrZXlOYW1lfVxcYCB3aGljaCBpcyByZXNlcnZlZCBmb3IgdXNlIGJ5IHVzZUZpZWxkQXJyYXkuIGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjdXNlRmllbGRBcnJheWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYPCfk4sgdXNlRmllbGRBcnJheSBpbnB1dCdzIG5hbWUgc2hvdWxkIGJlIGluIG9iamVjdCBzaGFwZSBpbnN0ZWFkIG9mIGZsYXQgYXJyYXkuIGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjdXNlRmllbGRBcnJheWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlcy5tYXAoKHZhbHVlKSA9PiAoT2JqZWN0LmFzc2lnbih7IFtrZXlOYW1lXTogdmFsdWVba2V5TmFtZV0gfHwgZ2VuZXJhdGVJZCgpIH0sIHZhbHVlKSkpO1xyXG59O1xyXG5jb25zdCB1c2VGaWVsZEFycmF5ID0gKHsgY29udHJvbCwgbmFtZSwga2V5TmFtZSA9ICdpZCcsIH0pID0+IHtcclxuICAgIGNvbnN0IG1ldGhvZHMgPSB1c2VGb3JtQ29udGV4dCgpO1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICBpZiAoIWNvbnRyb2wgJiYgIW1ldGhvZHMpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfwn5OLIHVzZUZpZWxkQXJyYXkgaXMgbWlzc2luZyBgY29udHJvbGAgcHJvcC4gaHR0cHM6Ly9yZWFjdC1ob29rLWZvcm0uY29tL2FwaSN1c2VGaWVsZEFycmF5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgZm9jdXNJbmRleFJlZiA9IHVzZVJlZigtMSk7XHJcbiAgICBjb25zdCB7IGlzRm9ybURpcnR5LCB1cGRhdGVXYXRjaGVkVmFsdWUsIHJlc2V0RmllbGRBcnJheUZ1bmN0aW9uUmVmLCBmaWVsZEFycmF5TmFtZXNSZWYsIGZpZWxkc1JlZiwgZGVmYXVsdFZhbHVlc1JlZiwgcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyLCBmb3JtU3RhdGVSZWYsIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZiwgdXBkYXRlRm9ybVN0YXRlLCByZWFkRm9ybVN0YXRlUmVmLCB2YWxpZEZpZWxkc1JlZiwgZmllbGRzV2l0aFZhbGlkYXRpb25SZWYsIGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLCB2YWxpZGF0ZVJlc29sdmVyLCBnZXRWYWx1ZXMsIHNob3VsZFVucmVnaXN0ZXIsIGZpZWxkQXJyYXlWYWx1ZXNSZWYsIH0gPSBjb250cm9sIHx8IG1ldGhvZHMuY29udHJvbDtcclxuICAgIGNvbnN0IGdldERlZmF1bHRWYWx1ZXMgPSAodmFsdWVzKSA9PiBnZXQoc2hvdWxkVW5yZWdpc3RlciA/IHZhbHVlcyA6IHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50LCBuYW1lLCBbXSk7XHJcbiAgICBjb25zdCBmaWVsZEFycmF5UGFyZW50TmFtZSA9IGdldEZpZWxkQXJyYXlQYXJlbnROYW1lKG5hbWUpO1xyXG4gICAgY29uc3QgbWVtb2l6ZWREZWZhdWx0VmFsdWVzID0gdXNlUmVmKFtcclxuICAgICAgICAuLi4oZ2V0KGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIGZpZWxkQXJyYXlQYXJlbnROYW1lKVxyXG4gICAgICAgICAgICA/IGdldERlZmF1bHRWYWx1ZXMoZmllbGRBcnJheURlZmF1bHRWYWx1ZXNSZWYuY3VycmVudClcclxuICAgICAgICAgICAgOiBnZXREZWZhdWx0VmFsdWVzKGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCkpLFxyXG4gICAgXSk7XHJcbiAgICBjb25zdCBbZmllbGRzLCBzZXRGaWVsZHNdID0gdXNlU3RhdGUobWFwSWRzKG1lbW9pemVkRGVmYXVsdFZhbHVlcy5jdXJyZW50LCBrZXlOYW1lKSk7XHJcbiAgICBzZXQoZmllbGRBcnJheVZhbHVlc1JlZi5jdXJyZW50LCBuYW1lLCBmaWVsZHMpO1xyXG4gICAgY29uc3Qgb21pdEtleSA9IChmaWVsZHMpID0+IGZpZWxkcy5tYXAoKF9hID0ge30pID0+IHtcclxuICAgICAgICB2YXIgX2IgPSBrZXlOYW1lLCBvbWl0dGVkID0gX2FbX2JdLCByZXN0ID0gX19yZXN0KF9hLCBbdHlwZW9mIF9iID09PSBcInN5bWJvbFwiID8gX2IgOiBfYiArIFwiXCJdKTtcclxuICAgICAgICByZXR1cm4gcmVzdDtcclxuICAgIH0pO1xyXG4gICAgZmllbGRBcnJheU5hbWVzUmVmLmN1cnJlbnQuYWRkKG5hbWUpO1xyXG4gICAgY29uc3QgZ2V0RmllbGRBcnJheVZhbHVlID0gdXNlQ2FsbGJhY2soKCkgPT4gZ2V0KGZpZWxkQXJyYXlWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSwgW10pLCBbbmFtZV0pO1xyXG4gICAgY29uc3QgZ2V0Q3VycmVudEZpZWxkc1ZhbHVlcyA9ICgpID0+IG1hcElkcyhnZXQoZ2V0VmFsdWVzKCksIG5hbWUsIGdldEZpZWxkQXJyYXlWYWx1ZSgpKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBnZXRGaWVsZEFycmF5VmFsdWUoKVtpbmRleF0pLCBpdGVtKSkpLCBrZXlOYW1lLCB0cnVlKTtcclxuICAgIGZpZWxkQXJyYXlOYW1lc1JlZi5jdXJyZW50LmFkZChuYW1lKTtcclxuICAgIGlmIChmaWVsZEFycmF5UGFyZW50TmFtZSAmJlxyXG4gICAgICAgICFnZXQoZmllbGRBcnJheURlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgZmllbGRBcnJheVBhcmVudE5hbWUpKSB7XHJcbiAgICAgICAgc2V0KGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIGZpZWxkQXJyYXlQYXJlbnROYW1lLCBjbG9uZU9iamVjdChnZXQoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBmaWVsZEFycmF5UGFyZW50TmFtZSkpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNldEZpZWxkQW5kVmFsaWRTdGF0ZSA9IChmaWVsZHNWYWx1ZXMpID0+IHtcclxuICAgICAgICBzZXRGaWVsZHMoZmllbGRzVmFsdWVzKTtcclxuICAgICAgICBzZXQoZmllbGRBcnJheVZhbHVlc1JlZi5jdXJyZW50LCBuYW1lLCBmaWVsZHNWYWx1ZXMpO1xyXG4gICAgICAgIGlmIChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZCAmJiB2YWxpZGF0ZVJlc29sdmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IGdldFZhbHVlcygpO1xyXG4gICAgICAgICAgICBzZXQodmFsdWVzLCBuYW1lLCBmaWVsZHNWYWx1ZXMpO1xyXG4gICAgICAgICAgICB2YWxpZGF0ZVJlc29sdmVyKHZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlc2V0RmllbGRzID0gKCkgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGZpZWxkc1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChpc01hdGNoRmllbGRBcnJheU5hbWUoa2V5LCBuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyKGZpZWxkc1JlZi5jdXJyZW50W2tleV0sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGZpZWxkc1JlZi5jdXJyZW50W2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgY2xlYW51cCA9IChyZWYpID0+ICFjb21wYWN0KGdldChyZWYsIG5hbWUsIFtdKSkubGVuZ3RoICYmIHVuc2V0KHJlZiwgbmFtZSk7XHJcbiAgICBjb25zdCB1cGRhdGVEaXJ0eUZpZWxkc1dpdGhEZWZhdWx0VmFsdWVzID0gKHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzKSB7XHJcbiAgICAgICAgICAgIHNldChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcywgbmFtZSwgc2V0RmllbGRBcnJheURpcnR5RmllbGRzKG9taXRLZXkodXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMpLCBnZXQoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lLCBbXSksIGdldChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcywgbmFtZSwgW10pKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGJhdGNoU3RhdGVVcGRhdGUgPSAobWV0aG9kLCBhcmdzLCB1cGRhdGVkRmllbGRWYWx1ZXMsIHVwZGF0ZWRGb3JtVmFsdWVzID0gW10sIHNob3VsZFNldCA9IHRydWUsIHNob3VsZFVwZGF0ZVZhbGlkID0gZmFsc2UpID0+IHtcclxuICAgICAgICBpZiAoZ2V0KHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50LCBuYW1lKSkge1xyXG4gICAgICAgICAgICBjb25zdCBvdXRwdXQgPSBtZXRob2QoZ2V0KHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50LCBuYW1lKSwgYXJncy5hcmdBLCBhcmdzLmFyZ0IpO1xyXG4gICAgICAgICAgICBzaG91bGRTZXQgJiYgc2V0KHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50LCBuYW1lLCBvdXRwdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2V0KGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIG5hbWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dHB1dCA9IG1ldGhvZChnZXQoZmllbGRBcnJheURlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSksIGFyZ3MuYXJnQSwgYXJncy5hcmdCKTtcclxuICAgICAgICAgICAgc2hvdWxkU2V0ICYmIHNldChmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lLCBvdXRwdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShnZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBuYW1lKSkpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3V0cHV0ID0gbWV0aG9kKGdldChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMsIG5hbWUpLCBhcmdzLmFyZ0EsIGFyZ3MuYXJnQik7XHJcbiAgICAgICAgICAgIHNob3VsZFNldCAmJiBzZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBuYW1lLCBvdXRwdXQpO1xyXG4gICAgICAgICAgICBjbGVhbnVwKGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQudG91Y2hlZCAmJlxyXG4gICAgICAgICAgICBnZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQudG91Y2hlZCwgbmFtZSkpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3V0cHV0ID0gbWV0aG9kKGdldChmb3JtU3RhdGVSZWYuY3VycmVudC50b3VjaGVkLCBuYW1lKSwgYXJncy5hcmdBLCBhcmdzLmFyZ0IpO1xyXG4gICAgICAgICAgICBzaG91bGRTZXQgJiYgc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWQsIG5hbWUsIG91dHB1dCk7XHJcbiAgICAgICAgICAgIGNsZWFudXAoZm9ybVN0YXRlUmVmLmN1cnJlbnQudG91Y2hlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMgfHxcclxuICAgICAgICAgICAgcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzRGlydHkpIHtcclxuICAgICAgICAgICAgc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzLCBuYW1lLCBzZXRGaWVsZEFycmF5RGlydHlGaWVsZHMob21pdEtleSh1cGRhdGVkRm9ybVZhbHVlcyksIGdldChkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIG5hbWUsIFtdKSwgZ2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzLCBuYW1lLCBbXSkpKTtcclxuICAgICAgICAgICAgdXBkYXRlRGlydHlGaWVsZHNXaXRoRGVmYXVsdFZhbHVlcyh1cGRhdGVkRmllbGRWYWx1ZXMpO1xyXG4gICAgICAgICAgICBjbGVhbnVwKGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNob3VsZFVwZGF0ZVZhbGlkICYmXHJcbiAgICAgICAgICAgIHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5pc1ZhbGlkICYmXHJcbiAgICAgICAgICAgICF2YWxpZGF0ZVJlc29sdmVyKSB7XHJcbiAgICAgICAgICAgIHNldCh2YWxpZEZpZWxkc1JlZi5jdXJyZW50LCBuYW1lLCBtZXRob2QoZ2V0KHZhbGlkRmllbGRzUmVmLmN1cnJlbnQsIG5hbWUsIFtdKSwgYXJncy5hcmdBKSk7XHJcbiAgICAgICAgICAgIGNsZWFudXAodmFsaWRGaWVsZHNSZWYuY3VycmVudCk7XHJcbiAgICAgICAgICAgIHNldChmaWVsZHNXaXRoVmFsaWRhdGlvblJlZi5jdXJyZW50LCBuYW1lLCBtZXRob2QoZ2V0KGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLmN1cnJlbnQsIG5hbWUsIFtdKSwgYXJncy5hcmdBKSk7XHJcbiAgICAgICAgICAgIGNsZWFudXAoZmllbGRzV2l0aFZhbGlkYXRpb25SZWYuY3VycmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzRGlydHk6IGlzRm9ybURpcnR5KG5hbWUsIG9taXRLZXkodXBkYXRlZEZvcm1WYWx1ZXMpKSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBhcHBlbmQgPSAodmFsdWUsIHNob3VsZEZvY3VzID0gdHJ1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFwcGVuZFZhbHVlID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XHJcbiAgICAgICAgY29uc3QgdXBkYXRlRm9ybVZhbHVlcyA9IFtcclxuICAgICAgICAgICAgLi4uZ2V0Q3VycmVudEZpZWxkc1ZhbHVlcygpLFxyXG4gICAgICAgICAgICAuLi5tYXBJZHMoYXBwZW5kVmFsdWUsIGtleU5hbWUpLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgc2V0RmllbGRBbmRWYWxpZFN0YXRlKHVwZGF0ZUZvcm1WYWx1ZXMpO1xyXG4gICAgICAgIGlmIChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMgfHxcclxuICAgICAgICAgICAgcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzRGlydHkpIHtcclxuICAgICAgICAgICAgdXBkYXRlRGlydHlGaWVsZHNXaXRoRGVmYXVsdFZhbHVlcyh1cGRhdGVGb3JtVmFsdWVzKTtcclxuICAgICAgICAgICAgdXBkYXRlRm9ybVN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzRGlydHk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkaXJ0eUZpZWxkczogZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAhc2hvdWxkVW5yZWdpc3RlciAmJlxyXG4gICAgICAgICAgICBzZXQoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQsIG5hbWUsIFtcclxuICAgICAgICAgICAgICAgIC4uLihnZXQoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQsIG5hbWUpIHx8IFtdKSxcclxuICAgICAgICAgICAgICAgIC4uLmNsb25lT2JqZWN0KGFwcGVuZFZhbHVlKSxcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgZm9jdXNJbmRleFJlZi5jdXJyZW50ID0gc2hvdWxkRm9jdXNcclxuICAgICAgICAgICAgPyBnZXQoZmllbGRBcnJheVZhbHVlc1JlZi5jdXJyZW50LCBuYW1lKS5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIDogLTE7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcHJlcGVuZCQxID0gKHZhbHVlLCBzaG91bGRGb2N1cyA9IHRydWUpID0+IHtcclxuICAgICAgICBjb25zdCBlbXB0eUFycmF5ID0gZmlsbEVtcHR5QXJyYXkodmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzID0gcHJlcGVuZChnZXRDdXJyZW50RmllbGRzVmFsdWVzKCksIG1hcElkcyhBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXSwga2V5TmFtZSkpO1xyXG4gICAgICAgIHNldEZpZWxkQW5kVmFsaWRTdGF0ZSh1cGRhdGVkRmllbGRBcnJheVZhbHVlcyk7XHJcbiAgICAgICAgcmVzZXRGaWVsZHMoKTtcclxuICAgICAgICBiYXRjaFN0YXRlVXBkYXRlKHByZXBlbmQsIHtcclxuICAgICAgICAgICAgYXJnQTogZW1wdHlBcnJheSxcclxuICAgICAgICAgICAgYXJnQzogZmlsbEJvb2xlYW5BcnJheSh2YWx1ZSksXHJcbiAgICAgICAgfSwgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMpO1xyXG4gICAgICAgIGZvY3VzSW5kZXhSZWYuY3VycmVudCA9IHNob3VsZEZvY3VzID8gMCA6IC0xO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlbW92ZSA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkVmFsdWVzID0gZ2V0Q3VycmVudEZpZWxkc1ZhbHVlcygpO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRGaWVsZFZhbHVlcyA9IHJlbW92ZUFycmF5QXQoZmllbGRWYWx1ZXMsIGluZGV4KTtcclxuICAgICAgICBzZXRGaWVsZEFuZFZhbGlkU3RhdGUodXBkYXRlZEZpZWxkVmFsdWVzKTtcclxuICAgICAgICByZXNldEZpZWxkcygpO1xyXG4gICAgICAgIGJhdGNoU3RhdGVVcGRhdGUocmVtb3ZlQXJyYXlBdCwge1xyXG4gICAgICAgICAgICBhcmdBOiBpbmRleCxcclxuICAgICAgICAgICAgYXJnQzogaW5kZXgsXHJcbiAgICAgICAgfSwgdXBkYXRlZEZpZWxkVmFsdWVzLCByZW1vdmVBcnJheUF0KGZpZWxkVmFsdWVzLCBpbmRleCksIHRydWUsIHRydWUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGluc2VydCQxID0gKGluZGV4LCB2YWx1ZSwgc2hvdWxkRm9jdXMgPSB0cnVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZW1wdHlBcnJheSA9IGZpbGxFbXB0eUFycmF5KHZhbHVlKTtcclxuICAgICAgICBjb25zdCBmaWVsZFZhbHVlcyA9IGdldEN1cnJlbnRGaWVsZHNWYWx1ZXMoKTtcclxuICAgICAgICBjb25zdCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcyA9IGluc2VydChmaWVsZFZhbHVlcywgaW5kZXgsIG1hcElkcyhBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXSwga2V5TmFtZSkpO1xyXG4gICAgICAgIHNldEZpZWxkQW5kVmFsaWRTdGF0ZSh1cGRhdGVkRmllbGRBcnJheVZhbHVlcyk7XHJcbiAgICAgICAgcmVzZXRGaWVsZHMoKTtcclxuICAgICAgICBiYXRjaFN0YXRlVXBkYXRlKGluc2VydCwge1xyXG4gICAgICAgICAgICBhcmdBOiBpbmRleCxcclxuICAgICAgICAgICAgYXJnQjogZW1wdHlBcnJheSxcclxuICAgICAgICAgICAgYXJnQzogaW5kZXgsXHJcbiAgICAgICAgICAgIGFyZ0Q6IGZpbGxCb29sZWFuQXJyYXkodmFsdWUpLFxyXG4gICAgICAgIH0sIHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzLCBpbnNlcnQoZmllbGRWYWx1ZXMsIGluZGV4KSk7XHJcbiAgICAgICAgZm9jdXNJbmRleFJlZi5jdXJyZW50ID0gc2hvdWxkRm9jdXMgPyBpbmRleCA6IC0xO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHN3YXAgPSAoaW5kZXhBLCBpbmRleEIpID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZFZhbHVlcyA9IGdldEN1cnJlbnRGaWVsZHNWYWx1ZXMoKTtcclxuICAgICAgICBzd2FwQXJyYXlBdChmaWVsZFZhbHVlcywgaW5kZXhBLCBpbmRleEIpO1xyXG4gICAgICAgIHJlc2V0RmllbGRzKCk7XHJcbiAgICAgICAgc2V0RmllbGRBbmRWYWxpZFN0YXRlKFsuLi5maWVsZFZhbHVlc10pO1xyXG4gICAgICAgIGJhdGNoU3RhdGVVcGRhdGUoc3dhcEFycmF5QXQsIHtcclxuICAgICAgICAgICAgYXJnQTogaW5kZXhBLFxyXG4gICAgICAgICAgICBhcmdCOiBpbmRleEIsXHJcbiAgICAgICAgICAgIGFyZ0M6IGluZGV4QSxcclxuICAgICAgICAgICAgYXJnRDogaW5kZXhCLFxyXG4gICAgICAgIH0sIHVuZGVmaW5lZCwgZmllbGRWYWx1ZXMsIGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBtb3ZlID0gKGZyb20sIHRvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGRWYWx1ZXMgPSBnZXRDdXJyZW50RmllbGRzVmFsdWVzKCk7XHJcbiAgICAgICAgbW92ZUFycmF5QXQoZmllbGRWYWx1ZXMsIGZyb20sIHRvKTtcclxuICAgICAgICByZXNldEZpZWxkcygpO1xyXG4gICAgICAgIHNldEZpZWxkQW5kVmFsaWRTdGF0ZShbLi4uZmllbGRWYWx1ZXNdKTtcclxuICAgICAgICBiYXRjaFN0YXRlVXBkYXRlKG1vdmVBcnJheUF0LCB7XHJcbiAgICAgICAgICAgIGFyZ0E6IGZyb20sXHJcbiAgICAgICAgICAgIGFyZ0I6IHRvLFxyXG4gICAgICAgICAgICBhcmdDOiBmcm9tLFxyXG4gICAgICAgICAgICBhcmdEOiB0byxcclxuICAgICAgICB9LCB1bmRlZmluZWQsIGZpZWxkVmFsdWVzLCBmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICBpZiAoIW5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybign8J+TiyB1c2VGaWVsZEFycmF5IGlzIG1pc3NpbmcgYG5hbWVgIGF0dHJpYnV0ZS4gaHR0cHM6Ly9yZWFjdC1ob29rLWZvcm0uY29tL2FwaSN1c2VGaWVsZEFycmF5Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlcyA9IGdldChmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lKTtcclxuICAgICAgICBpZiAoZGVmYXVsdFZhbHVlcyAmJiBmaWVsZHMubGVuZ3RoIDwgZGVmYXVsdFZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc2V0KGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIG5hbWUsIGRlZmF1bHRWYWx1ZXMuc2xpY2UoMSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1cGRhdGVXYXRjaGVkVmFsdWUobmFtZSk7XHJcbiAgICAgICAgaWYgKGZvY3VzSW5kZXhSZWYuY3VycmVudCA+IC0xKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGZpZWxkc1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1JlZi5jdXJyZW50W2tleV07XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoYCR7bmFtZX1bJHtmb2N1c0luZGV4UmVmLmN1cnJlbnR9XWApICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQucmVmLmZvY3VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQucmVmLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9jdXNJbmRleFJlZi5jdXJyZW50ID0gLTE7XHJcbiAgICB9LCBbZmllbGRzLCBuYW1lXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc2V0RnVuY3Rpb25zID0gcmVzZXRGaWVsZEFycmF5RnVuY3Rpb25SZWYuY3VycmVudDtcclxuICAgICAgICBjb25zdCBmaWVsZEFycmF5TmFtZXMgPSBmaWVsZEFycmF5TmFtZXNSZWYuY3VycmVudDtcclxuICAgICAgICBpZiAoIWdldEZpZWxkQXJyYXlQYXJlbnROYW1lKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJlc2V0RnVuY3Rpb25zW25hbWVdID0gKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc2V0RmllbGRzKCk7XHJcbiAgICAgICAgICAgICAgICAhZGF0YSAmJiB1bnNldChmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIHVuc2V0KHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50LCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIG1lbW9pemVkRGVmYXVsdFZhbHVlcy5jdXJyZW50ID0gZ2V0KGRhdGEgfHwgZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIHNldEZpZWxkcyhtYXBJZHMobWVtb2l6ZWREZWZhdWx0VmFsdWVzLmN1cnJlbnQsIGtleU5hbWUpKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNldEZpZWxkcygpO1xyXG4gICAgICAgICAgICBkZWxldGUgcmVzZXRGdW5jdGlvbnNbbmFtZV07XHJcbiAgICAgICAgICAgIHVuc2V0KGZpZWxkQXJyYXlWYWx1ZXNSZWYsIG5hbWUpO1xyXG4gICAgICAgICAgICBmaWVsZEFycmF5TmFtZXMuZGVsZXRlKG5hbWUpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHN3YXA6IHVzZUNhbGxiYWNrKHN3YXAsIFtuYW1lXSksXHJcbiAgICAgICAgbW92ZTogdXNlQ2FsbGJhY2sobW92ZSwgW25hbWVdKSxcclxuICAgICAgICBwcmVwZW5kOiB1c2VDYWxsYmFjayhwcmVwZW5kJDEsIFtuYW1lXSksXHJcbiAgICAgICAgYXBwZW5kOiB1c2VDYWxsYmFjayhhcHBlbmQsIFtuYW1lXSksXHJcbiAgICAgICAgcmVtb3ZlOiB1c2VDYWxsYmFjayhyZW1vdmUsIFtuYW1lXSksXHJcbiAgICAgICAgaW5zZXJ0OiB1c2VDYWxsYmFjayhpbnNlcnQkMSwgW25hbWVdKSxcclxuICAgICAgICBmaWVsZHMsXHJcbiAgICB9O1xyXG59O1xuXG52YXIgZ2V0SW5wdXRWYWx1ZSA9IChldmVudCkgPT4gaXNQcmltaXRpdmUoZXZlbnQpIHx8XHJcbiAgICAhaXNPYmplY3QoZXZlbnQudGFyZ2V0KSB8fFxyXG4gICAgKGlzT2JqZWN0KGV2ZW50LnRhcmdldCkgJiYgIWV2ZW50LnR5cGUpXHJcbiAgICA/IGV2ZW50XHJcbiAgICA6IGlzVW5kZWZpbmVkKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICA/IGV2ZW50LnRhcmdldC5jaGVja2VkXHJcbiAgICAgICAgOiBldmVudC50YXJnZXQudmFsdWU7XG5cbmZ1bmN0aW9uIHVzZUNvbnRyb2xsZXIoeyBuYW1lLCBydWxlcywgZGVmYXVsdFZhbHVlLCBjb250cm9sLCBvbkZvY3VzLCB9KSB7XHJcbiAgICBjb25zdCBtZXRob2RzID0gdXNlRm9ybUNvbnRleHQoKTtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgaWYgKCFjb250cm9sICYmICFtZXRob2RzKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcign8J+TiyBDb250cm9sbGVyIGlzIG1pc3NpbmcgYGNvbnRyb2xgIHByb3AuIGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjQ29udHJvbGxlcicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHsgZGVmYXVsdFZhbHVlc1JlZiwgc2V0VmFsdWUsIHJlZ2lzdGVyLCB1bnJlZ2lzdGVyLCB0cmlnZ2VyLCBtb2RlLCByZVZhbGlkYXRlTW9kZTogeyBpc1JlVmFsaWRhdGVPbkJsdXIsIGlzUmVWYWxpZGF0ZU9uQ2hhbmdlIH0sIGZvcm1TdGF0ZSwgZm9ybVN0YXRlUmVmOiB7IGN1cnJlbnQ6IHsgaXNTdWJtaXR0ZWQsIHRvdWNoZWQsIGVycm9ycyB9LCB9LCB1cGRhdGVGb3JtU3RhdGUsIHJlYWRGb3JtU3RhdGVSZWYsIGZpZWxkc1JlZiwgZmllbGRBcnJheU5hbWVzUmVmLCBzaGFsbG93RmllbGRzU3RhdGVSZWYsIH0gPSBjb250cm9sIHx8IG1ldGhvZHMuY29udHJvbDtcclxuICAgIGNvbnN0IGlzTm90RmllbGRBcnJheSA9ICFpc05hbWVJbkZpZWxkQXJyYXkoZmllbGRBcnJheU5hbWVzUmVmLmN1cnJlbnQsIG5hbWUpO1xyXG4gICAgY29uc3QgZ2V0SW5pdGlhbFZhbHVlID0gKCkgPT4gIWlzVW5kZWZpbmVkKGdldChzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCwgbmFtZSkpICYmIGlzTm90RmllbGRBcnJheVxyXG4gICAgICAgID8gZ2V0KHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50LCBuYW1lKVxyXG4gICAgICAgIDogaXNVbmRlZmluZWQoZGVmYXVsdFZhbHVlKVxyXG4gICAgICAgICAgICA/IGdldChkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIG5hbWUpXHJcbiAgICAgICAgICAgIDogZGVmYXVsdFZhbHVlO1xyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRJbnB1dFN0YXRlVmFsdWVdID0gdXNlU3RhdGUoZ2V0SW5pdGlhbFZhbHVlKCkpO1xyXG4gICAgY29uc3QgdmFsdWVSZWYgPSB1c2VSZWYodmFsdWUpO1xyXG4gICAgY29uc3QgcmVmID0gdXNlUmVmKHtcclxuICAgICAgICBmb2N1czogKCkgPT4gbnVsbCxcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgb25Gb2N1c1JlZiA9IHVzZVJlZihvbkZvY3VzIHx8XHJcbiAgICAgICAgKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24ocmVmLmN1cnJlbnQuZm9jdXMpKSB7XHJcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudC5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzRnVuY3Rpb24ocmVmLmN1cnJlbnQuZm9jdXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGDwn5OLICdyZWYnIGZyb20gQ29udHJvbGxlciByZW5kZXIgcHJvcCBtdXN0IGJlIGF0dGFjaGVkIHRvIGEgUmVhY3QgY29tcG9uZW50IG9yIGEgRE9NIEVsZW1lbnQgd2hvc2UgcmVmIHByb3ZpZGVzIGEgJ2ZvY3VzKCknIG1ldGhvZGApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgY29uc3Qgc2hvdWxkVmFsaWRhdGUgPSB1c2VDYWxsYmFjaygoaXNCbHVyRXZlbnQpID0+ICFza2lwVmFsaWRhdGlvbihPYmplY3QuYXNzaWduKHsgaXNCbHVyRXZlbnQsXHJcbiAgICAgICAgaXNSZVZhbGlkYXRlT25CbHVyLFxyXG4gICAgICAgIGlzUmVWYWxpZGF0ZU9uQ2hhbmdlLFxyXG4gICAgICAgIGlzU3VibWl0dGVkLCBpc1RvdWNoZWQ6ICEhZ2V0KHRvdWNoZWQsIG5hbWUpIH0sIG1vZGUpKSwgW1xyXG4gICAgICAgIGlzUmVWYWxpZGF0ZU9uQmx1cixcclxuICAgICAgICBpc1JlVmFsaWRhdGVPbkNoYW5nZSxcclxuICAgICAgICBpc1N1Ym1pdHRlZCxcclxuICAgICAgICB0b3VjaGVkLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgbW9kZSxcclxuICAgIF0pO1xyXG4gICAgY29uc3QgY29tbW9uVGFzayA9IHVzZUNhbGxiYWNrKChbZXZlbnRdKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGdldElucHV0VmFsdWUoZXZlbnQpO1xyXG4gICAgICAgIHNldElucHV0U3RhdGVWYWx1ZShkYXRhKTtcclxuICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gZGF0YTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHJlZ2lzdGVyRmllbGQgPSB1c2VDYWxsYmFjaygoc2hvdWxkVXBkYXRlVmFsdWUpID0+IHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICBpZiAoIW5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLndhcm4oJ/Cfk4sgRmllbGQgaXMgbWlzc2luZyBgbmFtZWAgcHJvcC4gaHR0cHM6Ly9yZWFjdC1ob29rLWZvcm0uY29tL2FwaSNDb250cm9sbGVyJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpZWxkc1JlZi5jdXJyZW50W25hbWVdKSB7XHJcbiAgICAgICAgICAgIGZpZWxkc1JlZi5jdXJyZW50W25hbWVdID0gT2JqZWN0LmFzc2lnbih7IHJlZjogZmllbGRzUmVmLmN1cnJlbnRbbmFtZV0ucmVmIH0sIHJ1bGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlZ2lzdGVyKE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHtcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICBmb2N1czogb25Gb2N1c1JlZi5jdXJyZW50LFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0U3RhdGVWYWx1ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVJlZi5jdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KSwgcnVsZXMpO1xyXG4gICAgICAgICAgICBzaG91bGRVcGRhdGVWYWx1ZSA9IGlzVW5kZWZpbmVkKGdldChkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIG5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2hvdWxkVXBkYXRlVmFsdWUgJiZcclxuICAgICAgICAgICAgaXNOb3RGaWVsZEFycmF5ICYmXHJcbiAgICAgICAgICAgIHNldElucHV0U3RhdGVWYWx1ZShnZXRJbml0aWFsVmFsdWUoKSk7XHJcbiAgICB9LCBbcnVsZXMsIG5hbWUsIHJlZ2lzdGVyXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4gKCkgPT4gdW5yZWdpc3RlcihuYW1lKSwgW25hbWVdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGDwn5OLICR7bmFtZX0gaXMgbWlzc2luZyBpbiB0aGUgJ2RlZmF1bHRWYWx1ZScgcHJvcCBvZiBlaXRoZXIgaXRzIENvbnRyb2xsZXIgKGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjQ29udHJvbGxlcikgb3IgdXNlRm9ybSAoaHR0cHM6Ly9yZWFjdC1ob29rLWZvcm0uY29tL2FwaSN1c2VGb3JtKWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaXNOb3RGaWVsZEFycmF5ICYmIGlzVW5kZWZpbmVkKGRlZmF1bHRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybign8J+TiyBDb250cm9sbGVyIGlzIG1pc3NpbmcgYGRlZmF1bHRWYWx1ZWAgcHJvcCB3aGVuIHVzaW5nIGB1c2VGaWVsZEFycmF5YC4gaHR0cHM6Ly9yZWFjdC1ob29rLWZvcm0uY29tL2FwaSNDb250cm9sbGVyJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVnaXN0ZXJGaWVsZCgpO1xyXG4gICAgfSwgW3JlZ2lzdGVyRmllbGRdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgIWZpZWxkc1JlZi5jdXJyZW50W25hbWVdICYmIHJlZ2lzdGVyRmllbGQodHJ1ZSk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG9uQmx1ciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpZiAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWQgJiYgIWdldCh0b3VjaGVkLCBuYW1lKSkge1xyXG4gICAgICAgICAgICBzZXQodG91Y2hlZCwgbmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB0b3VjaGVkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2hvdWxkVmFsaWRhdGUodHJ1ZSkgJiYgdHJpZ2dlcihuYW1lKTtcclxuICAgIH0sIFtuYW1lLCB1cGRhdGVGb3JtU3RhdGUsIHNob3VsZFZhbGlkYXRlLCB0cmlnZ2VyLCByZWFkRm9ybVN0YXRlUmVmXSk7XHJcbiAgICBjb25zdCBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKCguLi5ldmVudCkgPT4gc2V0VmFsdWUobmFtZSwgY29tbW9uVGFzayhldmVudCksIHtcclxuICAgICAgICBzaG91bGRWYWxpZGF0ZTogc2hvdWxkVmFsaWRhdGUoKSxcclxuICAgICAgICBzaG91bGREaXJ0eTogdHJ1ZSxcclxuICAgIH0pLCBbc2V0VmFsdWUsIG5hbWUsIHNob3VsZFZhbGlkYXRlXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZpZWxkOiB7XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlLFxyXG4gICAgICAgICAgICBvbkJsdXIsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICByZWYsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRhOiBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh7XHJcbiAgICAgICAgICAgIGludmFsaWQ6ICEhZ2V0KGVycm9ycywgbmFtZSksXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpc0RpcnR5OiB7XHJcbiAgICAgICAgICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhZ2V0KGZvcm1TdGF0ZS5kaXJ0eUZpZWxkcywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpc1RvdWNoZWQ6IHtcclxuICAgICAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gISFnZXQoZm9ybVN0YXRlLnRvdWNoZWQsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KSxcclxuICAgIH07XHJcbn1cblxuZnVuY3Rpb24gdXNlV2F0Y2goeyBjb250cm9sLCBuYW1lLCBkZWZhdWx0VmFsdWUsIH0pIHtcclxuICAgIGNvbnN0IG1ldGhvZHMgPSB1c2VGb3JtQ29udGV4dCgpO1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICBpZiAoIWNvbnRyb2wgJiYgIW1ldGhvZHMpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfwn5OLIHVzZVdhdGNoIGlzIG1pc3NpbmcgYGNvbnRyb2xgIHByb3AuIGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjdXNlV2F0Y2gnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCB7IHVzZVdhdGNoRmllbGRzUmVmLCB1c2VXYXRjaFJlbmRlckZ1bmN0aW9uc1JlZiwgd2F0Y2hJbnRlcm5hbCwgZGVmYXVsdFZhbHVlc1JlZiwgfSA9IGNvbnRyb2wgfHwgbWV0aG9kcy5jb250cm9sO1xyXG4gICAgY29uc3QgdXBkYXRlVmFsdWUgPSB1c2VTdGF0ZSgpWzFdO1xyXG4gICAgY29uc3QgaWRSZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGRlZmF1bHRWYWx1ZVJlZiA9IHVzZVJlZihkZWZhdWx0VmFsdWUpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybign8J+TiyB1c2VXYXRjaCBpcyBtaXNzaW5nIGBuYW1lYCBhdHRyaWJ1dGUuIGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjdXNlV2F0Y2gnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpZCA9IChpZFJlZi5jdXJyZW50ID0gZ2VuZXJhdGVJZCgpKTtcclxuICAgICAgICBjb25zdCB3YXRjaEZpZWxkc0hvb2tSZW5kZXIgPSB1c2VXYXRjaFJlbmRlckZ1bmN0aW9uc1JlZi5jdXJyZW50O1xyXG4gICAgICAgIGNvbnN0IHdhdGNoRmllbGRzSG9vayA9IHVzZVdhdGNoRmllbGRzUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgd2F0Y2hGaWVsZHNIb29rW2lkXSA9IG5ldyBTZXQoKTtcclxuICAgICAgICB3YXRjaEZpZWxkc0hvb2tSZW5kZXJbaWRdID0gKCkgPT4gdXBkYXRlVmFsdWUoe30pO1xyXG4gICAgICAgIHdhdGNoSW50ZXJuYWwobmFtZSwgZGVmYXVsdFZhbHVlUmVmLmN1cnJlbnQsIGlkKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBkZWxldGUgd2F0Y2hGaWVsZHNIb29rW2lkXTtcclxuICAgICAgICAgICAgZGVsZXRlIHdhdGNoRmllbGRzSG9va1JlbmRlcltpZF07XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIHVzZVdhdGNoUmVuZGVyRnVuY3Rpb25zUmVmLFxyXG4gICAgICAgIHVzZVdhdGNoRmllbGRzUmVmLFxyXG4gICAgICAgIHdhdGNoSW50ZXJuYWwsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlUmVmLFxyXG4gICAgXSk7XHJcbiAgICByZXR1cm4gaWRSZWYuY3VycmVudFxyXG4gICAgICAgID8gd2F0Y2hJbnRlcm5hbChuYW1lLCBkZWZhdWx0VmFsdWVSZWYuY3VycmVudCwgaWRSZWYuY3VycmVudClcclxuICAgICAgICA6IGlzVW5kZWZpbmVkKGRlZmF1bHRWYWx1ZSlcclxuICAgICAgICAgICAgPyBpc1N0cmluZyhuYW1lKVxyXG4gICAgICAgICAgICAgICAgPyBnZXQoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lKVxyXG4gICAgICAgICAgICAgICAgOiBBcnJheS5pc0FycmF5KG5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBuYW1lLnJlZHVjZSgocHJldmlvdXMsIGlucHV0TmFtZSkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcHJldmlvdXMpLCB7IFtpbnB1dE5hbWVdOiBnZXQoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBpbnB1dE5hbWUpIH0pKSwge30pXHJcbiAgICAgICAgICAgICAgICAgICAgOiBkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnRcclxuICAgICAgICAgICAgOiBkZWZhdWx0VmFsdWU7XHJcbn1cblxuY29uc3QgQ29udHJvbGxlciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBydWxlcywgYXMsIHJlbmRlciwgZGVmYXVsdFZhbHVlLCBjb250cm9sLCBvbkZvY3VzIH0gPSBwcm9wcywgcmVzdCA9IF9fcmVzdChwcm9wcywgW1wicnVsZXNcIiwgXCJhc1wiLCBcInJlbmRlclwiLCBcImRlZmF1bHRWYWx1ZVwiLCBcImNvbnRyb2xcIiwgXCJvbkZvY3VzXCJdKTtcclxuICAgIGNvbnN0IHsgZmllbGQsIG1ldGEgfSA9IHVzZUNvbnRyb2xsZXIocHJvcHMpO1xyXG4gICAgY29uc3QgY29tcG9uZW50UHJvcHMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHJlc3QpLCBmaWVsZCk7XHJcbiAgICByZXR1cm4gYXNcclxuICAgICAgICA/IGlzVmFsaWRFbGVtZW50KGFzKVxyXG4gICAgICAgICAgICA/IGNsb25lRWxlbWVudChhcywgY29tcG9uZW50UHJvcHMpXHJcbiAgICAgICAgICAgIDogY3JlYXRlRWxlbWVudChhcywgY29tcG9uZW50UHJvcHMpXHJcbiAgICAgICAgOiByZW5kZXJcclxuICAgICAgICAgICAgPyByZW5kZXIoZmllbGQsIG1ldGEpXHJcbiAgICAgICAgICAgIDogbnVsbDtcclxufTtcblxuZXhwb3J0IHsgQ29udHJvbGxlciwgRm9ybVByb3ZpZGVyLCBhcHBlbmRFcnJvcnMsIGdldCwgdHJhbnNmb3JtVG9OZXN0T2JqZWN0LCB1c2VDb250cm9sbGVyLCB1c2VGaWVsZEFycmF5LCB1c2VGb3JtLCB1c2VGb3JtQ29udGV4dCwgdXNlV2F0Y2ggfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiJdLCJzb3VyY2VSb290IjoiIn0=