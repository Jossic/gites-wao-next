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
              lineNumber: 110,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
              type: "text",
              ref: register,
              className: "form-control"
            }, "ref", register({
              required: true
            })), void 0, false, {
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
              ref: register({
                required: true
              })
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
              ref: register({
                required: true
              }),
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
              ref: register({
                required: true
              }),
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
              ref: register({
                required: true
              }),
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
              ref: register({
                required: true
              }),
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
              ref: register({
                required: true
              }),
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
              ref: register({
                required: true
              }),
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
              ref: register({
                required: true
              })
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
              ref: register({
                required: true
              })
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
              ref: register({
                required: true
              })
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
              ref: register({
                required: true
              })
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
              lineNumber: 244,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "text-muted",
                children: "Lien vid\xE9o YouTube"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 246,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                value: videoLink,
                className: "form-control",
                ref: register({
                  required: true
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 249,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 245,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "text-muted",
                children: "Lien du calendrier"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 257,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                value: calendrierLink,
                className: "form-control",
                ref: register({
                  required: true
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 260,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 256,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
            className: "border p-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("legend", {
              className: "w-auto",
              children: "Couleurs"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "text-muted",
                children: "Couleur de fond"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 272,
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
                lineNumber: 275,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "text-muted",
                children: "Couleur du texte (noir par d\xE9fault)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 283,
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
                lineNumber: 286,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 282,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 269,
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
        lineNumber: 297,
        columnNumber: 6
      }, _this), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "alert alert-success",
        children: "Chargement en cours..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 6
      }, _this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "alert alert-danger",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-info",
          children: "Cr\xE9er ce g\xEEte"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 307,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9Gb3JtQ3JlYXRlR2l0ZS5qcyJdLCJuYW1lcyI6WyJGb3JtQ3JlYXRlR2l0ZSIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsIndhdGNoIiwiZXJyb3JzIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwibm9tIiwibXRpdGxlIiwicHJlc0dpdGVTRU8iLCJ0ZXh0ZUV4dGVyaWV1ciIsImVxdWlwZW1lbnRFeHRlcmlldXIiLCJ0ZXh0ZUludGVyaWV1ciIsImVxdWlwZW1lbnRJbnRlcmlldXIiLCJ0ZXh0ZVBpc2NpbmUiLCJlcXVpcGVtZW50UGlzY2luZSIsInRleHRlIiwiZGV0YWlsR2l0ZSIsImNhcGFjaXRlIiwidmlkZW9MaW5rIiwiY2FsZW5kcmllckxpbmsiLCJjb3VsZXVyMSIsImNvdWxldXIyIiwiZXJyb3IiLCJzdWNjZXNzIiwibG9hZGluZyIsImZvcm1EYXRhIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidG9rZW4iLCJnZXRDb29raWUiLCJ1c2VFZmZlY3QiLCJGb3JtRGF0YSIsImhhbmRsZUNoYW5nZSIsIm5hbWUiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJzZXQiLCJjcmVlckdpdGUiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZUdpdGUiLCJ0aGVuIiwicGRmIiwic2V0VGltZW91dCIsIlJvdXRlciIsInB1c2giLCJyZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFBQSxpQkFDc0JDLCtEQUFPLEVBRDdCO0FBQUEsTUFDcEJDLFFBRG9CLFlBQ3BCQSxRQURvQjtBQUFBLE1BQ1ZDLFlBRFUsWUFDVkEsWUFEVTtBQUFBLE1BQ0lDLEtBREosWUFDSUEsS0FESjtBQUFBLE1BQ1dDLE1BRFgsWUFDV0EsTUFEWDs7QUFFNUIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRDtBQUFBLFdBQVVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaLENBQVY7QUFBQSxHQUFqQjs7QUFGNEIsa0JBSUFHLHNEQUFRLENBQUM7QUFDcENDLE9BQUcsRUFBRSxFQUQrQjtBQUVwQ0MsVUFBTSxFQUFFLEVBRjRCO0FBR3BDQyxlQUFXLEVBQUUsRUFIdUI7QUFJcENDLGtCQUFjLEVBQUUsRUFKb0I7QUFLcENDLHVCQUFtQixFQUFFLEVBTGU7QUFNcENDLGtCQUFjLEVBQUUsRUFOb0I7QUFPcENDLHVCQUFtQixFQUFFLEVBUGU7QUFRcENDLGdCQUFZLEVBQUUsRUFSc0I7QUFTcENDLHFCQUFpQixFQUFFLEVBVGlCO0FBVXBDQyxTQUFLLEVBQUUsRUFWNkI7QUFXcENDLGNBQVUsRUFBRSxFQVh3QjtBQVlwQ0MsWUFBUSxFQUFFLEVBWjBCO0FBYXBDQyxhQUFTLEVBQUUsRUFieUI7QUFjcENDLGtCQUFjLEVBQUUsRUFkb0I7QUFlcENDLFlBQVEsRUFBRSxTQWYwQjtBQWdCcENDLFlBQVEsRUFBRSxTQWhCMEI7QUFpQnBDQyxTQUFLLEVBQUUsRUFqQjZCO0FBa0JwQ0MsV0FBTyxFQUFFLEVBbEIyQjtBQW1CcENDLFdBQU8sRUFBRSxLQW5CMkI7QUFvQnBDQyxZQUFRLEVBQUU7QUFwQjBCLEdBQUQsQ0FKUjtBQUFBLE1BSXJCQyxNQUpxQjtBQUFBLE1BSWJDLFNBSmE7O0FBMkI1QixNQUFNQyxLQUFLLEdBQUdDLHNFQUFTLENBQUMsT0FBRCxDQUF2QjtBQTNCNEIsTUE2QjNCdkIsR0E3QjJCLEdBaUR4Qm9CLE1BakR3QixDQTZCM0JwQixHQTdCMkI7QUFBQSxNQThCM0JDLE1BOUIyQixHQWlEeEJtQixNQWpEd0IsQ0E4QjNCbkIsTUE5QjJCO0FBQUEsTUErQjNCQyxXQS9CMkIsR0FpRHhCa0IsTUFqRHdCLENBK0IzQmxCLFdBL0IyQjtBQUFBLE1BZ0MzQkMsY0FoQzJCLEdBaUR4QmlCLE1BakR3QixDQWdDM0JqQixjQWhDMkI7QUFBQSxNQWlDM0JDLG1CQWpDMkIsR0FpRHhCZ0IsTUFqRHdCLENBaUMzQmhCLG1CQWpDMkI7QUFBQSxNQWtDM0JDLGNBbEMyQixHQWlEeEJlLE1BakR3QixDQWtDM0JmLGNBbEMyQjtBQUFBLE1BbUMzQkMsbUJBbkMyQixHQWlEeEJjLE1BakR3QixDQW1DM0JkLG1CQW5DMkI7QUFBQSxNQW9DM0JDLFlBcEMyQixHQWlEeEJhLE1BakR3QixDQW9DM0JiLFlBcEMyQjtBQUFBLE1BcUMzQkMsaUJBckMyQixHQWlEeEJZLE1BakR3QixDQXFDM0JaLGlCQXJDMkI7QUFBQSxNQXNDM0JDLEtBdEMyQixHQWlEeEJXLE1BakR3QixDQXNDM0JYLEtBdEMyQjtBQUFBLE1BdUMzQkMsVUF2QzJCLEdBaUR4QlUsTUFqRHdCLENBdUMzQlYsVUF2QzJCO0FBQUEsTUF3QzNCQyxRQXhDMkIsR0FpRHhCUyxNQWpEd0IsQ0F3QzNCVCxRQXhDMkI7QUFBQSxNQXlDM0JDLFNBekMyQixHQWlEeEJRLE1BakR3QixDQXlDM0JSLFNBekMyQjtBQUFBLE1BMEMzQkMsY0ExQzJCLEdBaUR4Qk8sTUFqRHdCLENBMEMzQlAsY0ExQzJCO0FBQUEsTUEyQzNCQyxRQTNDMkIsR0FpRHhCTSxNQWpEd0IsQ0EyQzNCTixRQTNDMkI7QUFBQSxNQTRDM0JDLFFBNUMyQixHQWlEeEJLLE1BakR3QixDQTRDM0JMLFFBNUMyQjtBQUFBLE1BNkMzQkMsS0E3QzJCLEdBaUR4QkksTUFqRHdCLENBNkMzQkosS0E3QzJCO0FBQUEsTUE4QzNCQyxPQTlDMkIsR0FpRHhCRyxNQWpEd0IsQ0E4QzNCSCxPQTlDMkI7QUFBQSxNQStDM0JDLE9BL0MyQixHQWlEeEJFLE1BakR3QixDQStDM0JGLE9BL0MyQjtBQUFBLE1BZ0QzQkMsUUFoRDJCLEdBaUR4QkMsTUFqRHdCLENBZ0QzQkQsUUFoRDJCO0FBbUQ1QksseURBQVMsQ0FBQyxZQUFNO0FBQ2ZILGFBQVMsaUNBQU1ELE1BQU47QUFBY0QsY0FBUSxFQUFFLElBQUlNLFFBQUo7QUFBeEIsT0FBVDtBQUNBLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRDtBQUFBLFdBQVUsVUFBQ0MsQ0FBRCxFQUFPO0FBQUE7O0FBQ3JDLFVBQUlDLEtBQUssR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNELEtBQXJCO0FBRUFWLGNBQVEsQ0FBQ1ksR0FBVCxDQUFhSixJQUFiLEVBQW1CRSxLQUFuQjtBQUNBUixlQUFTLGlDQUFNRCxNQUFOLHVJQUFlTyxJQUFmLEVBQXNCRSxLQUF0Qix5SEFBNkJWLFFBQTdCLHNIQUE4QyxFQUE5QyxvQkFBVDtBQUNBLEtBTG9CO0FBQUEsR0FBckI7O0FBT0EsTUFBTWEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0osQ0FBRCxFQUFPO0FBQ3hCQSxLQUFDLENBQUNLLGNBQUY7QUFDQVosYUFBUyxpQ0FBTUQsTUFBTjtBQUFjRixhQUFPLEVBQUU7QUFBdkIsT0FBVDtBQUNBZ0IsMkVBQVUsQ0FBQ2YsUUFBRCxFQUFXRyxLQUFYLENBQVYsQ0FBNEJhLElBQTVCLENBQWlDLFVBQUN2QyxJQUFELEVBQVU7QUFDMUMsVUFBSUEsSUFBSSxDQUFDb0IsS0FBVCxFQUFnQjtBQUNmSyxpQkFBUyxpQ0FBTUQsTUFBTjtBQUFjSixlQUFLLEVBQUVwQixJQUFJLENBQUNvQjtBQUExQixXQUFUO0FBQ0EsT0FGRCxNQUVPO0FBQ05LLGlCQUFTLENBQUM7QUFDVHJCLGFBQUcsRUFBRSxFQURJO0FBRVRDLGdCQUFNLEVBQUUsRUFGQztBQUdUQyxxQkFBVyxFQUFFLEVBSEo7QUFJVE8sZUFBSyxFQUFFLEVBSkU7QUFLVE4sd0JBQWMsRUFBRSxFQUxQO0FBTVRDLDZCQUFtQixFQUFFLEVBTlo7QUFPVEMsd0JBQWMsRUFBRSxFQVBQO0FBUVRDLDZCQUFtQixFQUFFLEVBUlo7QUFTVEMsc0JBQVksRUFBRSxFQVRMO0FBVVRDLDJCQUFpQixFQUFFLEVBVlY7QUFXVEUsb0JBQVUsRUFBRSxFQVhIO0FBWVRDLGtCQUFRLEVBQUUsRUFaRDtBQWFUQyxtQkFBUyxFQUFFLEVBYkY7QUFjVEMsd0JBQWMsRUFBRSxFQWRQO0FBZVR1QixhQUFHLEVBQUUsRUFmSTtBQWdCVHRCLGtCQUFRLEVBQUUsU0FoQkQ7QUFpQlRDLGtCQUFRLEVBQUUsU0FqQkQ7QUFrQlRDLGVBQUssRUFBRSxFQWxCRTtBQW1CVEMsaUJBQU8sRUFBRSwyQkFuQkE7QUFvQlRDLGlCQUFPLEVBQUU7QUFwQkEsU0FBRCxDQUFUO0FBc0JBbUIsa0JBQVUsQ0FBQyxZQUFNO0FBQ2hCQyw0REFBTSxDQUFDQyxJQUFQLENBQVkscUJBQVo7QUFDQSxTQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0E7QUFDRCxLQTlCRDtBQStCQSxHQWxDRDs7QUFtQ0Esc0JBQ0M7QUFBQSwyQkFDQztBQUFNLGNBQVEsRUFBRS9DLFlBQVksQ0FBQ0csUUFBRCxDQUE1QjtBQUFBLDhCQUNDO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsZ0NBQ0M7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxrQ0FDQztBQUFLLHFCQUFTLEVBQUMsWUFBZjtBQUFBLG9DQUNDO0FBQU8sdUJBQVMsRUFBQyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUVDO0FBQ0Msa0JBQUksRUFBQyxNQUROO0FBRUMsaUJBQUcsRUFBRUosUUFGTjtBQUdDLHVCQUFTLEVBQUM7QUFIWCxzQkFJTUEsUUFBUSxDQUFDO0FBQUVpRCxzQkFBUSxFQUFFO0FBQVosYUFBRCxDQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBVUM7QUFBSyxxQkFBUyxFQUFDLFlBQWY7QUFBQSxvQ0FDQztBQUFPLHVCQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFFQztBQUNDLGtCQUFJLEVBQUMsTUFETjtBQUVDLG1CQUFLLEVBQUV2QyxNQUZSO0FBR0MsdUJBQVMsRUFBQyxjQUhYO0FBSUMsaUJBQUcsRUFBRVYsUUFBUSxDQUFDO0FBQUVpRCx3QkFBUSxFQUFFO0FBQVosZUFBRDtBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZELGVBbUJDO0FBQUsscUJBQVMsRUFBQyxZQUFmO0FBQUEsb0NBQ0M7QUFBTyx1QkFBUyxFQUFDLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBS0M7QUFDQyxrQkFBSSxFQUFDLE1BRE47QUFFQyxtQkFBSyxFQUFFdEMsV0FGUjtBQUdDLHVCQUFTLEVBQUMsY0FIWDtBQUlDLGlCQUFHLEVBQUVYLFFBQVEsQ0FBQztBQUFFaUQsd0JBQVEsRUFBRTtBQUFaLGVBQUQsQ0FKZDtBQUtDLGtCQUFJLEVBQUMsSUFMTjtBQU1DLGtCQUFJLEVBQUM7QUFOTjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuQkQsZUFpQ0M7QUFBSyxxQkFBUyxFQUFDLFlBQWY7QUFBQSxvQ0FDQztBQUFPLHVCQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFFQztBQUNDLGtCQUFJLEVBQUMsTUFETjtBQUVDLG1CQUFLLEVBQUUvQixLQUZSO0FBR0MsdUJBQVMsRUFBQyxjQUhYO0FBSUMsaUJBQUcsRUFBRWxCLFFBQVEsQ0FBQztBQUFFaUQsd0JBQVEsRUFBRTtBQUFaLGVBQUQsQ0FKZDtBQUtDLGtCQUFJLEVBQUMsSUFMTjtBQU1DLGtCQUFJLEVBQUM7QUFOTjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFqQ0QsZUEyQ0M7QUFBSyxxQkFBUyxFQUFDLFlBQWY7QUFBQSxvQ0FDQztBQUFPLHVCQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFJQztBQUNDLGtCQUFJLEVBQUMsTUFETjtBQUVDLG1CQUFLLEVBQUVyQyxjQUZSO0FBR0MsdUJBQVMsRUFBQyxjQUhYO0FBSUMsaUJBQUcsRUFBRVosUUFBUSxDQUFDO0FBQUVpRCx3QkFBUSxFQUFFO0FBQVosZUFBRCxDQUpkO0FBS0Msa0JBQUksRUFBQyxJQUxOO0FBTUMsa0JBQUksRUFBQztBQU5OO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTNDRCxlQXVEQztBQUFLLHFCQUFTLEVBQUMsWUFBZjtBQUFBLG9DQUNDO0FBQU8sdUJBQVMsRUFBQyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUlDO0FBQ0Msa0JBQUksRUFBQyxNQUROO0FBRUMsbUJBQUssRUFBRW5DLGNBRlI7QUFHQyx1QkFBUyxFQUFDLGNBSFg7QUFJQyxpQkFBRyxFQUFFZCxRQUFRLENBQUM7QUFBRWlELHdCQUFRLEVBQUU7QUFBWixlQUFELENBSmQ7QUFLQyxrQkFBSSxFQUFDLElBTE47QUFNQyxrQkFBSSxFQUFDO0FBTk47QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdkRELGVBbUVDO0FBQUsscUJBQVMsRUFBQyxZQUFmO0FBQUEsb0NBQ0M7QUFBTyx1QkFBUyxFQUFDLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBSUM7QUFDQyxrQkFBSSxFQUFDLE1BRE47QUFFQyxtQkFBSyxFQUFFakMsWUFGUjtBQUdDLHVCQUFTLEVBQUMsY0FIWDtBQUlDLGlCQUFHLEVBQUVoQixRQUFRLENBQUM7QUFBRWlELHdCQUFRLEVBQUU7QUFBWixlQUFELENBSmQ7QUFLQyxrQkFBSSxFQUFDLElBTE47QUFNQyxrQkFBSSxFQUFDO0FBTk47QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbkVELGVBK0VDO0FBQUsscUJBQVMsRUFBQyxZQUFmO0FBQUEsb0NBQ0M7QUFBTyx1QkFBUyxFQUFDLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBRUM7QUFDQyxrQkFBSSxFQUFDLE1BRE47QUFFQyxtQkFBSyxFQUFFOUIsVUFGUjtBQUdDLHVCQUFTLEVBQUMsY0FIWDtBQUlDLGlCQUFHLEVBQUVuQixRQUFRLENBQUM7QUFBRWlELHdCQUFRLEVBQUU7QUFBWixlQUFELENBSmQ7QUFLQyxrQkFBSSxFQUFDLElBTE47QUFNQyxrQkFBSSxFQUFDO0FBTk47QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBL0VELGVBeUZDO0FBQUsscUJBQVMsRUFBQyxZQUFmO0FBQUEsb0NBQ0M7QUFBTyx1QkFBUyxFQUFDLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBSUM7QUFDQyxrQkFBSSxFQUFDLFFBRE47QUFFQyxtQkFBSyxFQUFFN0IsUUFGUjtBQUdDLHVCQUFTLEVBQUMsY0FIWDtBQUlDLGlCQUFHLEVBQUVwQixRQUFRLENBQUM7QUFBRWlELHdCQUFRLEVBQUU7QUFBWixlQUFEO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBekZELGVBb0dDO0FBQUsscUJBQVMsRUFBQyxZQUFmO0FBQUEsb0NBQ0M7QUFBTyx1QkFBUyxFQUFDLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBSUM7QUFDQyxrQkFBSSxFQUFDLE1BRE47QUFFQyxtQkFBSyxFQUFFcEMsbUJBRlI7QUFHQyx1QkFBUyxFQUFDLGNBSFg7QUFJQyxpQkFBRyxFQUFFYixRQUFRLENBQUM7QUFBRWlELHdCQUFRLEVBQUU7QUFBWixlQUFEO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcEdELGVBK0dDO0FBQUsscUJBQVMsRUFBQyxZQUFmO0FBQUEsb0NBQ0M7QUFBTyx1QkFBUyxFQUFDLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBSUM7QUFDQyxrQkFBSSxFQUFDLE1BRE47QUFFQyxtQkFBSyxFQUFFbEMsbUJBRlI7QUFHQyx1QkFBUyxFQUFDLGNBSFg7QUFJQyxpQkFBRyxFQUFFZixRQUFRLENBQUM7QUFBRWlELHdCQUFRLEVBQUU7QUFBWixlQUFEO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBL0dELGVBMEhDO0FBQUsscUJBQVMsRUFBQyxZQUFmO0FBQUEsb0NBQ0M7QUFBTyx1QkFBUyxFQUFDLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBSUM7QUFDQyxrQkFBSSxFQUFDLE1BRE47QUFFQyxtQkFBSyxFQUFFaEMsaUJBRlI7QUFHQyx1QkFBUyxFQUFDLGNBSFg7QUFJQyxpQkFBRyxFQUFFakIsUUFBUSxDQUFDO0FBQUVpRCx3QkFBUSxFQUFFO0FBQVosZUFBRDtBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUF1SUM7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxrQ0FDQztBQUFVLHFCQUFTLEVBQUMsWUFBcEI7QUFBQSxvQ0FDQztBQUFRLHVCQUFTLEVBQUMsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFFQztBQUFLLHVCQUFTLEVBQUMsWUFBZjtBQUFBLHNDQUNDO0FBQU8seUJBQVMsRUFBQyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERCxlQUlDO0FBQ0Msb0JBQUksRUFBQyxNQUROO0FBRUMscUJBQUssRUFBRTVCLFNBRlI7QUFHQyx5QkFBUyxFQUFDLGNBSFg7QUFJQyxtQkFBRyxFQUFFckIsUUFBUSxDQUFDO0FBQUVpRCwwQkFBUSxFQUFFO0FBQVosaUJBQUQ7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRCxlQWFDO0FBQUssdUJBQVMsRUFBQyxZQUFmO0FBQUEsc0NBQ0M7QUFBTyx5QkFBUyxFQUFDLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURELGVBSUM7QUFDQyxvQkFBSSxFQUFDLE1BRE47QUFFQyxxQkFBSyxFQUFFM0IsY0FGUjtBQUdDLHlCQUFTLEVBQUMsY0FIWDtBQUlDLG1CQUFHLEVBQUV0QixRQUFRLENBQUM7QUFBRWlELDBCQUFRLEVBQUU7QUFBWixpQkFBRDtBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQTJCQztBQUFVLHFCQUFTLEVBQUMsWUFBcEI7QUFBQSxvQ0FDQztBQUFRLHVCQUFTLEVBQUMsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFFQztBQUFLLHVCQUFTLEVBQUMsWUFBZjtBQUFBLHNDQUNDO0FBQU8seUJBQVMsRUFBQyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERCxlQUlDO0FBQ0Msb0JBQUksRUFBQyxPQUROO0FBRUMscUJBQUssRUFBRTFCLFFBRlI7QUFHQyx5QkFBUyxFQUFDLGNBSFg7QUFJQyxtQkFBRyxFQUFFdkIsUUFBUSxDQUFDO0FBQUVpRCwwQkFBUSxFQUFFO0FBQVosaUJBQUQ7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRCxlQWFDO0FBQUssdUJBQVMsRUFBQyxZQUFmO0FBQUEsc0NBQ0M7QUFBTyx5QkFBUyxFQUFDLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURELGVBSUM7QUFDQyxvQkFBSSxFQUFDLE9BRE47QUFFQyxxQkFBSyxFQUFFekIsUUFGUjtBQUdDLHlCQUFTLEVBQUMsY0FIWDtBQUlDLG1CQUFHLEVBQUV4QixRQUFRLENBQUM7QUFBRWlELDBCQUFRLEVBQUU7QUFBWixpQkFBRDtBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkEzQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZJRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxFQThMRXZCLE9BQU8saUJBQ1A7QUFBSyxpQkFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBL0xGLEVBbU1FQyxPQUFPLGlCQUNQO0FBQUssaUJBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBNRixFQXdNRUYsS0FBSyxpQkFBSTtBQUFLLGlCQUFTLEVBQUMsb0JBQWY7QUFBQSxrQkFBcUNBO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF4TVgsZUF5TUM7QUFBQSwrQkFDQztBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLG1CQUFTLEVBQUMsY0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBek1EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELG1CQUREO0FBbU5BLENBcFREOztHQUFNM0IsYztVQUM2Q0MsdUQ7OztLQUQ3Q0QsYztBQXNUU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9naXRlL2NyZWF0ZS44ZWRlNGM3ZmNiOTI1M2NiMTMwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlR2l0ZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgRm9ybUNyZWF0ZUdpdGUgPSAoKSA9PiB7XHJcblx0Y29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCB3YXRjaCwgZXJyb3JzIH0gPSB1c2VGb3JtKCk7XHJcblx0Y29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4gY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRub206ICcnLFxyXG5cdFx0bXRpdGxlOiAnJyxcclxuXHRcdHByZXNHaXRlU0VPOiAnJyxcclxuXHRcdHRleHRlRXh0ZXJpZXVyOiAnJyxcclxuXHRcdGVxdWlwZW1lbnRFeHRlcmlldXI6ICcnLFxyXG5cdFx0dGV4dGVJbnRlcmlldXI6ICcnLFxyXG5cdFx0ZXF1aXBlbWVudEludGVyaWV1cjogJycsXHJcblx0XHR0ZXh0ZVBpc2NpbmU6ICcnLFxyXG5cdFx0ZXF1aXBlbWVudFBpc2NpbmU6ICcnLFxyXG5cdFx0dGV4dGU6ICcnLFxyXG5cdFx0ZGV0YWlsR2l0ZTogJycsXHJcblx0XHRjYXBhY2l0ZTogJycsXHJcblx0XHR2aWRlb0xpbms6ICcnLFxyXG5cdFx0Y2FsZW5kcmllckxpbms6ICcnLFxyXG5cdFx0Y291bGV1cjE6ICcjQUFBQUFBJyxcclxuXHRcdGNvdWxldXIyOiAnIzExMTExMScsXHJcblx0XHRlcnJvcjogJycsXHJcblx0XHRzdWNjZXNzOiAnJyxcclxuXHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0Zm9ybURhdGE6ICcnLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHRjb25zdCB7XHJcblx0XHRub20sXHJcblx0XHRtdGl0bGUsXHJcblx0XHRwcmVzR2l0ZVNFTyxcclxuXHRcdHRleHRlRXh0ZXJpZXVyLFxyXG5cdFx0ZXF1aXBlbWVudEV4dGVyaWV1cixcclxuXHRcdHRleHRlSW50ZXJpZXVyLFxyXG5cdFx0ZXF1aXBlbWVudEludGVyaWV1cixcclxuXHRcdHRleHRlUGlzY2luZSxcclxuXHRcdGVxdWlwZW1lbnRQaXNjaW5lLFxyXG5cdFx0dGV4dGUsXHJcblx0XHRkZXRhaWxHaXRlLFxyXG5cdFx0Y2FwYWNpdGUsXHJcblx0XHR2aWRlb0xpbmssXHJcblx0XHRjYWxlbmRyaWVyTGluayxcclxuXHRcdGNvdWxldXIxLFxyXG5cdFx0Y291bGV1cjIsXHJcblx0XHRlcnJvcixcclxuXHRcdHN1Y2Nlc3MsXHJcblx0XHRsb2FkaW5nLFxyXG5cdFx0Zm9ybURhdGEsXHJcblx0fSA9IHZhbHVlcztcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZm9ybURhdGE6IG5ldyBGb3JtRGF0YSgpIH0pO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKG5hbWUpID0+IChlKSA9PiB7XHJcblx0XHRsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuXHJcblx0XHRmb3JtRGF0YS5zZXQobmFtZSwgdmFsdWUpO1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBbbmFtZV06IHZhbHVlLCBmb3JtRGF0YSwgZXJyb3I6ICcnIH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNyZWVyR2l0ZSA9IChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUgfSk7XHJcblx0XHRjcmVhdGVHaXRlKGZvcm1EYXRhLCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3IgfSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdG5vbTogJycsXHJcblx0XHRcdFx0XHRtdGl0bGU6ICcnLFxyXG5cdFx0XHRcdFx0cHJlc0dpdGVTRU86ICcnLFxyXG5cdFx0XHRcdFx0dGV4dGU6ICcnLFxyXG5cdFx0XHRcdFx0dGV4dGVFeHRlcmlldXI6ICcnLFxyXG5cdFx0XHRcdFx0ZXF1aXBlbWVudEV4dGVyaWV1cjogJycsXHJcblx0XHRcdFx0XHR0ZXh0ZUludGVyaWV1cjogJycsXHJcblx0XHRcdFx0XHRlcXVpcGVtZW50SW50ZXJpZXVyOiAnJyxcclxuXHRcdFx0XHRcdHRleHRlUGlzY2luZTogJycsXHJcblx0XHRcdFx0XHRlcXVpcGVtZW50UGlzY2luZTogJycsXHJcblx0XHRcdFx0XHRkZXRhaWxHaXRlOiAnJyxcclxuXHRcdFx0XHRcdGNhcGFjaXRlOiAnJyxcclxuXHRcdFx0XHRcdHZpZGVvTGluazogJycsXHJcblx0XHRcdFx0XHRjYWxlbmRyaWVyTGluazogJycsXHJcblx0XHRcdFx0XHRwZGY6ICcnLFxyXG5cdFx0XHRcdFx0Y291bGV1cjE6ICcjRkZGRkZGJyxcclxuXHRcdFx0XHRcdGNvdWxldXIyOiAnIzExMTExMScsXHJcblx0XHRcdFx0XHRlcnJvcjogJycsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiAnTGUgZ8OudGUgYSBiaWVuIMOpdMOpIGFqb3V0w6knLFxyXG5cdFx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRSb3V0ZXIucHVzaCgnL2FkbWluL2dlc3Rpb25QYWdlcycpO1xyXG5cdFx0XHRcdH0sIDMwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTgnPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+Tm9tIGR1IGfDrnRlPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5NZXRhIFRpdGxlPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17bXRpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5cclxuXHRcdFx0XHRcdFx0XHRcdE3DqXRhLURlc2NyaXB0aW9uIChwcsOpc2VudGF0aW9uIFNFTyBkdSBnw650ZSBwb3VyXHJcblx0XHRcdFx0XHRcdFx0XHRHb29nbGUpXHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWFcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17cHJlc0dpdGVTRU99XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHRcdGNvbHM9JzMwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cm93cz0nNCc+PC90ZXh0YXJlYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+VGV4dGUgZHUgZ8OudGU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0ZXh0ZX1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y29scz0nMzAnXHJcblx0XHRcdFx0XHRcdFx0XHRyb3dzPSc0Jz48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0VGV4dGUgZGUgbCdleHTDqXJpZXVyXHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWFcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGV4dGVFeHRlcmlldXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHRcdGNvbHM9JzMwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cm93cz0nNCc+PC90ZXh0YXJlYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5cclxuXHRcdFx0XHRcdFx0XHRcdFRleHRlIGRlIGwnaW50w6lyaWV1clxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RleHRlSW50ZXJpZXVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xzPSczMCdcclxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9JzQnPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRUZXh0ZSBkZSBsYSBwaXNjaW5lXHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWFcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGV4dGVQaXNjaW5lfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xzPSczMCdcclxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9JzQnPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+RMOpdGFpbCBkdSBnw650ZTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2RldGFpbEdpdGV9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHRcdGNvbHM9JzMwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cm93cz0nNCc+PC90ZXh0YXJlYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5cclxuXHRcdFx0XHRcdFx0XHRcdENhcGFjaXTDqSBkdSBnw650ZVxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSdudW1iZXInXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Y2FwYWNpdGV9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0RXF1aXBlbWVudCBleHTDqXJpZXVyIChzw6lwYXJlciBwYXIgdW5lIHZpcmd1bGUpXHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17ZXF1aXBlbWVudEV4dGVyaWV1cn1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRFcXVpcGVtZW50IGludMOpcmlldXIgKHPDqXBhcmVyIHBhciB1bmUgdmlyZ3VsZSlcclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtlcXVpcGVtZW50SW50ZXJpZXVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5cclxuXHRcdFx0XHRcdFx0XHRcdEVxdWlwZW1lbnQgUGlzY2luZSAoc8OpcGFyZXIgcGFyIHVuZSB2aXJndWxlKVxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2VxdWlwZW1lbnRQaXNjaW5lfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNCc+XHJcblx0XHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzc05hbWU9J2JvcmRlciBwLTInPlxyXG5cdFx0XHRcdFx0XHRcdDxsZWdlbmQgY2xhc3NOYW1lPSd3LWF1dG8nPkxpZW5zPC9sZWdlbmQ+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdExpZW4gdmlkw6lvIFlvdVR1YmVcclxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3ZpZGVvTGlua31cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdExpZW4gZHUgY2FsZW5kcmllclxyXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Y2FsZW5kcmllckxpbmt9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxyXG5cclxuXHRcdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzTmFtZT0nYm9yZGVyIHAtMic+XHJcblx0XHRcdFx0XHRcdFx0PGxlZ2VuZCBjbGFzc05hbWU9J3ctYXV0byc+Q291bGV1cnM8L2xlZ2VuZD5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Q291bGV1ciBkZSBmb25kXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J2NvbG9yJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Y291bGV1cjF9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRDb3VsZXVyIGR1IHRleHRlIChub2lyIHBhciBkw6lmYXVsdClcclxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nY29sb3InXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtjb3VsZXVyMn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZmllbGRzZXQ+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR7c3VjY2VzcyAmJiAoXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYWxlcnQgYWxlcnQtc3VjY2Vzcyc+XHJcblx0XHRcdFx0XHRcdExlIGfDrnRlIGEgYmllbiDDqXTDqSBham91dMOpXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHRcdHtsb2FkaW5nICYmIChcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdhbGVydCBhbGVydC1zdWNjZXNzJz5cclxuXHRcdFx0XHRcdFx0Q2hhcmdlbWVudCBlbiBjb3Vycy4uLlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0XHR7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LWRhbmdlcic+e2Vycm9yfTwvZGl2Pn1cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnRuIGJ0bi1pbmZvJz5cclxuXHRcdFx0XHRcdFx0Q3LDqWVyIGNlIGfDrnRlXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1DcmVhdGVHaXRlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9