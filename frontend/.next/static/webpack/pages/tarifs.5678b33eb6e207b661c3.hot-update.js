webpackHotUpdate_N_E("pages/tarifs",{

/***/ "./components/admin/forms/FormCalculTarif.js":
/*!***************************************************!*\
  !*** ./components/admin/forms/FormCalculTarif.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs/plugin/isBetween */ "./node_modules/dayjs/plugin/isBetween.js");
/* harmony import */ var dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var _actions_calendarActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../actions/calendarActions */ "./actions/calendarActions.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");


var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\forms\\FormCalculTarif.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





dayjs__WEBPACK_IMPORTED_MODULE_4___default.a.extend(dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_5___default.a);






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  return {
    form: {
      width: '70%',
      margin: theme.spacing(2)
    },
    root: {
      width: '80%'
    },
    button: {
      margin: theme.spacing(2),
      width: '80%'
    },
    formControl: {
      margin: theme.spacing(1),
      width: '80%'
    },
    textField: {
      margin: theme.spacing(1),
      width: '80%'
    }
  };
});

var FormCalculTarif = function FormCalculTarif(_ref) {
  _s();

  var gites = _ref.gites;

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"])(),
      control = _useForm.control,
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var classes = useStyles();
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_10__["getCookie"])('token');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      selectedDateDebut = _useState[0],
      setSelectedDateDebut = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      selectedDateFin = _useState2[0],
      setSelectedDateFin = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      values = _useState3[0],
      setValues = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      dateDebut = _useState4[0],
      setDateDebut = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      dateFin = _useState5[0],
      setDateFin = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      giteSelec = _useState6[0],
      setGiteSelec = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      nbChien = _useState7[0],
      setNbChien = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      nbEnf = _useState8[0],
      setNbEnf = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      nbPers = _useState9[0],
      setNbPers = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      nuitee = _useState10[0],
      setNuitee = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      isVacances = _useState11[0],
      setIsVacances = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      dejaLoue = _useState12[0],
      setDejaLoue = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      prixTotal = _useState13[0],
      setPrixTotal = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      prixSuppl = _useState14[0],
      setPrixSuppl = _useState14[1];

  var handleDateChangeDebut = function handleDateChangeDebut(date) {
    setSelectedDateDebut(date);
  };

  var handleDateChangeFin = function handleDateChangeFin(date) {
    setSelectedDateFin(date);
  };

  var onSubmit = function onSubmit(data) {
    var dateDebut = data.dateDebut,
        dateFin = data.dateFin,
        giteSelec = data.giteSelec,
        nbChien = data.nbChien,
        nbEnf = data.nbEnf,
        nbPers = data.nbPers;
    var dateD = dayjs__WEBPACK_IMPORTED_MODULE_4___default()(dateDebut);
    var dateF = dayjs__WEBPACK_IMPORTED_MODULE_4___default()(dateFin);
    Object(_actions_calendarActions__WEBPACK_IMPORTED_MODULE_9__["getVacances"])(dateD, dateF).then(function (result) {
      // console.log('result vaut', result);
      setIsVacances(result.vacances); // return result.vacances;
    });
    var nuitee = dateF.diff(dateD, 'day');
    setDateDebut(dateDebut);
    setDateFin(dateFin);
    setNuitee(nuitee);
    setGiteSelec(giteSelec);
    setNbChien(nbChien);
    setNbEnf(nbEnf);
    setNbPers(nbPers);

    var _iterator = _createForOfIteratorHelper(gites),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var gite = _step.value;

        if (gite.slug === giteSelec) {
          Object(_actions_calendarActions__WEBPACK_IMPORTED_MODULE_9__["getDejaLoue"])(gite.calendarId, dateD, dateF).then(function (result) {
            if (result.loue) {
              setDejaLoue({
                message: 'Il semble que ce gîte soit déjà loué aux dates indiquées'
              });
            } else {
              setDejaLoue({
                message: "Ce gîte semble libre pour le moment, n'hésitez pas à faire une demande de location"
              });
            }
          }); // On récupère le gîte selectionné

          if (nuitee === 7 || nuitee === 14 || nuitee === 21) {
            if (isVacances) {
              console.log('Cas général : on est en vancances');

              if (dayjs__WEBPACK_IMPORTED_MODULE_4___default()(dateD).isBetween(dayjs__WEBPACK_IMPORTED_MODULE_4___default()().month(6), dayjs__WEBPACK_IMPORTED_MODULE_4___default()().month(7), null, '[]')) {
                console.log('on est en haute saison à la semaine');
                setPrixTotal(gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison + gite.coefficients.hauteSaison);
                setPrixSuppl();
              } else if (dayjs__WEBPACK_IMPORTED_MODULE_4___default()().dayOfYear(358).isBetween(dateD, dateF, null, '[]')) {
                console.log('on est à noel à la semaine');
                setPrixTotal(gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison + gite.coefficients.hauteSaison + gite.coefficients.noel);
                setPrixSuppl();
              } else if (dayjs__WEBPACK_IMPORTED_MODULE_4___default()().dayOfYear(365).isBetween(dateD, dateF, null, '[]')) {
                console.log('on est au nouvel an à la semaine');
                setPrixTotal(gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison + gite.coefficients.hauteSaison + gite.coefficients.noel + gite.coefficients.nouvelAn);
                setPrixSuppl();
              } else {
                console.log('On est dans le cas 7 nuitées en vacances scolaires moyenne saison'); //

                setPrixTotal();
                setPrixSuppl();
                setValues(_objectSpread(_objectSpread({}, values), {}, {
                  prixTotal: gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison
                }));
              }
            } else {
              console.log('Cas 7 nuitées hors vacances'); //

              setPrixTotal();
              setPrixSuppl();
              setValues(_objectSpread(_objectSpread({}, values), {}, {
                prixTotal: gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison
              }));
            }
          } else if (nuitee < 7) {
            console.log('Cas général : nuitées inférieure à 7');

            if (dayjs__WEBPACK_IMPORTED_MODULE_4___default()().day(6).isBetween(dateD, dateF, null, '[]')) {
              console.log('Cas en week-end moins de 7 nuits');

              if (nuitee === 1) {
                console.log('Cas week-end 1 nuit + msg avertissement'); //

                setPrixTotal();
                setPrixSuppl();
                setValues(_objectSpread(_objectSpread({}, values), {}, {
                  prixTotal: gite.tarifParPersParNuitftMenage + gite.tarifDeBase / 2 + gite.uneNuitee,
                  avertissement: 'En week end nous louons 2 nuitées, (très exceptionnelement 1 seule)'
                }));
              } else if (nuitee === 2) {
                console.log('Cas week-end 2 nuits'); //

                setPrixTotal();
                setPrixSuppl();
                setValues(_objectSpread(_objectSpread({}, values), {}, {
                  prixTotal: gite.tarifParPersParNuitftMenage + gite.tarifDeBase
                }));
              } else if (nuitee === 3) {
                console.log('Cas week-end 3 nuits'); //

                setPrixTotal();
                setPrixSuppl();
                setValues(_objectSpread(_objectSpread({}, values), {}, {
                  prixTotal: gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.troisNuitees
                }));
              } else if (nuitee === 4) {
                console.log('Cas week-end 4 nuits'); //

                setPrixTotal();
                setPrixSuppl();
                setValues(_objectSpread(_objectSpread({}, values), {}, {
                  prixTotal: gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.quatreNuitees
                }));
              } else if (nuitee === 5) {
                console.log('Cas week-end 5 nuits - Quel tarif ? Voir Maman'); //

                setPrixTotal();
                setPrixSuppl();
                setValues(_objectSpread(_objectSpread({}, values), {}, {
                  prixTotal: prixTotal
                }));
              } else if (nuitee === 6) {
                console.log('Cas week-end 6 nuits - Quel tarif ? Voir Maman'); //

                setPrixTotal();
                setPrixSuppl();
                setValues(_objectSpread(_objectSpread({}, values), {}, {
                  prixTotal: prixTotal
                }));
              } else {
                console.log('Autres cas week-end inférieur à 7 nuits - Peu probable...');
              }
            } else {
              console.log('Cas général : moins de 7 nuits et sans samedi');

              if (isVacances) {
                console.log('Cas général : hors WE moins de 7 nuits mais en vacances - Tarif sans tenir compte du plafond');

                if (nuitee === 1) {
                  console.log('Cas hors week-end 1 nuit mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal();
                    setPrixSuppl();
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 1
                    }));
                  } else {
                    setPrixTotal();
                    setPrixSuppl();
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 1,
                      prixSuppl: nbPers * gite.supplementParPers * 1
                    }));
                  }
                } else if (nuitee === 2) {
                  console.log('Cas hors week-end 2 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    console.log("Moins de ".concat(gite.nPers, " pers"));
                    setPrixTotal();
                    setPrixSuppl();
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 2
                    }));
                  } else {
                    setPrixTotal();
                    setPrixSuppl();
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 2,
                      prixSuppl: nbPers * gite.supplementParPers * 2
                    }));
                  }
                } else if (nuitee === 3) {
                  console.log('Cas hors week-end 3 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal();
                    setPrixSuppl();
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 3
                    }));
                  } else {
                    setPrixTotal();
                    setPrixSuppl();
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 3,
                      prixSuppl: nbPers * gite.supplementParPers * 3
                    }));
                  }
                } else if (nuitee === 4) {
                  console.log('Cas hors week-end 4 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal();
                    setPrixSuppl();
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 4
                    }));
                  } else {
                    setPrixTotal();
                    setPrixSuppl();
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 4,
                      prixSuppl: nbPers * gite.supplementParPers * 4
                    }));
                  }
                } else if (nuitee === 5) {
                  console.log('Cas hors week-end 5 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal();
                    setPrixSuppl();
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 5
                    }));
                  } else {
                    setPrixTotal();
                    setPrixSuppl();
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 5,
                      prixSuppl: nbPers * gite.supplementParPers * 5
                    }));
                  }
                } else if (nuitee === 6) {
                  console.log('Cas hors week-end 6 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal();
                    setPrixSuppl();
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 6
                    }));
                  } else {
                    setPrixTotal();
                    setPrixSuppl();
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 6,
                      prixSuppl: nbPers * gite.supplementParPers * 6
                    }));
                  }
                } else {
                  console.log('Autres cas week-end inférieur à 7 nuits - Peu probable...');
                }
              } else {
                console.log('Cas général : hors WE moins de 7 nuits mais en vacances - Tarif avec plafond'); //

                if (nuitee === 1) {
                  console.log('Cas hors week-end 1 nuit et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal();
                    setPrixSuppl();
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 1
                    }));
                  } else {
                    setPrixTotal();
                    setPrixSuppl();
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: (gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuitftMenage) / 7 * 1 + gite.tarifParPersParNuitftMenage,
                      prixSuppl: nbPers * gite.supplementParPers * 1
                    }));
                  }
                } else if (nuitee === 2) {
                  console.log('Cas hors week-end 2 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal();
                    setPrixSuppl();
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 2
                    }));
                  } else {
                    setPrixTotal();
                    setPrixSuppl();
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: (gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuitftMenage) / 7 * 2 + gite.tarifParPersParNuitftMenage,
                      prixSuppl: nbPers * gite.supplementParPers * 2
                    }));
                  }
                } else if (nuitee === 3) {
                  console.log('Cas hors week-end 3 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal();
                    setPrixSuppl();
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 3
                    }));
                  } else {
                    setPrixTotal();
                    setPrixSuppl();
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: (gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuitftMenage) / 7 * 3 + gite.tarifParPersParNuitftMenage,
                      prixSuppl: nbPers * gite.supplementParPers * 3
                    }));
                  }
                } else if (nuitee === 4) {
                  console.log('Cas hors week-end 4 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal();
                    setPrixSuppl();
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 4
                    }));
                  } else {
                    setPrixTotal();
                    setPrixSuppl();
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: (gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuitftMenage) / 7 * 4 + gite.tarifParPersParNuitftMenage,
                      prixSuppl: nbPers * gite.supplementParPers * 4
                    }));
                  }
                } else if (nuitee === 5) {
                  console.log('Cas hors week-end 5 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal();
                    setPrixSuppl();
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 5
                    }));
                  } else {
                    setPrixTotal();
                    setPrixSuppl();
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: (gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuitftMenage) / 7 * 5 + gite.tarifParPersParNuitftMenage,
                      prixSuppl: nbPers * gite.supplementParPers * 5
                    }));
                  }
                } else if (nuitee === 6) {
                  console.log('Cas hors week-end 6 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal();
                    setPrixSuppl();
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 6
                    }));
                  } else {
                    setPrixTotal();
                    setPrixSuppl();
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: (gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuitftMenage) / 7 * 6 + gite.tarifParPersParNuitftMenage,
                      prixSuppl: nbPers * gite.supplementParPers * 6
                    }));
                  }
                }
              }
            }
          } else {
            console.log('Autres cas nuit > 7 et !== de 14 et 21');
            console.log('Gérer cas >30 ici');
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    console.log(values);
    console.log("Location du ".concat(dateDebut, " au ").concat(dateFin));
  };

  return __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    className: classes.form,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 694,
      columnNumber: 3
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 695,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["InputLabel"], {
    shrink: true,
    id: "demo-simple-select-placeholder-label-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696,
      columnNumber: 5
    }
  }, "Gite"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["Controller"], {
    control: control,
    name: "giteSelec",
    as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Select"], {
      id: "declencheur-select",
      defaultValue: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 705,
        columnNumber: 7
      }
    }, gites.map(function (gite) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
        value: gite.slug,
        key: gite.slug,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 707,
          columnNumber: 9
        }
      }, gite.nom);
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 701,
      columnNumber: 5
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 716,
      columnNumber: 4
    }
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_8__["MuiPickersUtilsProvider"], {
    utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 717,
      columnNumber: 5
    }
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_8__["KeyboardDatePicker"], {
    inputRef: register,
    margin: "normal",
    id: "date-picker-dialog",
    name: "dateDebut",
    label: "Date de d\xE9but",
    format: "MM/dd/yyyy",
    defaultValue: "",
    value: selectedDateDebut,
    onChange: handleDateChangeDebut,
    KeyboardButtonProps: {
      'aria-label': 'change date'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 718,
      columnNumber: 6
    }
  }), __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_8__["KeyboardDatePicker"], {
    inputRef: register // disableToolbar
    ,
    name: "dateFin",
    format: "MM/dd/yyyy",
    margin: "normal",
    defaultValue: "02/25/2021",
    id: "date-picker-inline",
    label: "Date de fin",
    value: selectedDateFin,
    onChange: handleDateChangeFin,
    KeyboardButtonProps: {
      'aria-label': 'change date'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 732,
      columnNumber: 6
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
    className: classes.textField,
    inputRef: register,
    name: "nbPers",
    type: "number",
    defaultValue: "10",
    id: "standard-number",
    label: "Nombre de personnes au total",
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 750,
      columnNumber: 4
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
    className: classes.textField,
    inputRef: register,
    name: "nbEnf",
    type: "number",
    defaultValue: "2",
    id: "standard-number",
    label: "Nombre d'enfants -18 ans",
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 763,
      columnNumber: 4
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
    className: classes.textField,
    inputRef: register,
    name: "nbChien",
    type: "number",
    defaultValue: "0",
    id: "standard-number",
    label: "Chiens (3\u20AC/j/animal)",
    InputLabelProps: {
      shrink: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 775,
      columnNumber: 4
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    type: "submit",
    variant: "contained",
    color: "primary",
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 788,
      columnNumber: 4
    }
  }, "Calculer le tarif"), values && JSON.stringify(values));
};

_s(FormCalculTarif, "7GTRN87Ct3UAtAq0mQL+6UUtDsE=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"], useStyles];
});

_c = FormCalculTarif;
/* harmony default export */ __webpack_exports__["default"] = (FormCalculTarif);

var _c;

$RefreshReg$(_c, "FormCalculTarif");

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

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9Gb3JtQ2FsY3VsVGFyaWYuanMiXSwibmFtZXMiOlsiZGF5anMiLCJleHRlbmQiLCJpc0JldHdlZW4iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJmb3JtIiwid2lkdGgiLCJtYXJnaW4iLCJzcGFjaW5nIiwicm9vdCIsImJ1dHRvbiIsImZvcm1Db250cm9sIiwidGV4dEZpZWxkIiwiRm9ybUNhbGN1bFRhcmlmIiwiZ2l0ZXMiLCJ1c2VGb3JtIiwiY29udHJvbCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiY2xhc3NlcyIsInRva2VuIiwiZ2V0Q29va2llIiwidXNlU3RhdGUiLCJzZWxlY3RlZERhdGVEZWJ1dCIsInNldFNlbGVjdGVkRGF0ZURlYnV0Iiwic2VsZWN0ZWREYXRlRmluIiwic2V0U2VsZWN0ZWREYXRlRmluIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiZGF0ZURlYnV0Iiwic2V0RGF0ZURlYnV0IiwiZGF0ZUZpbiIsInNldERhdGVGaW4iLCJnaXRlU2VsZWMiLCJzZXRHaXRlU2VsZWMiLCJuYkNoaWVuIiwic2V0TmJDaGllbiIsIm5iRW5mIiwic2V0TmJFbmYiLCJuYlBlcnMiLCJzZXROYlBlcnMiLCJudWl0ZWUiLCJzZXROdWl0ZWUiLCJpc1ZhY2FuY2VzIiwic2V0SXNWYWNhbmNlcyIsImRlamFMb3VlIiwic2V0RGVqYUxvdWUiLCJwcml4VG90YWwiLCJzZXRQcml4VG90YWwiLCJwcml4U3VwcGwiLCJzZXRQcml4U3VwcGwiLCJoYW5kbGVEYXRlQ2hhbmdlRGVidXQiLCJkYXRlIiwiaGFuZGxlRGF0ZUNoYW5nZUZpbiIsIm9uU3VibWl0IiwiZGF0YSIsImRhdGVEIiwiZGF0ZUYiLCJnZXRWYWNhbmNlcyIsInRoZW4iLCJyZXN1bHQiLCJ2YWNhbmNlcyIsImRpZmYiLCJnaXRlIiwic2x1ZyIsImdldERlamFMb3VlIiwiY2FsZW5kYXJJZCIsImxvdWUiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIm1vbnRoIiwidGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlIiwidGFyaWZEZUJhc2UiLCJjb2VmZmljaWVudHMiLCJiYXNzZVNhaXNvbiIsIm1veWVubmVTYWlzb24iLCJoYXV0ZVNhaXNvbiIsImRheU9mWWVhciIsIm5vZWwiLCJub3V2ZWxBbiIsImRheSIsInVuZU51aXRlZSIsImF2ZXJ0aXNzZW1lbnQiLCJ0cm9pc051aXRlZXMiLCJxdWF0cmVOdWl0ZWVzIiwiblBlcnMiLCJ0YXJpZlBhclBlcnNQYXJOdWl0Iiwic3VwcGxlbWVudFBhclBlcnMiLCJtYXAiLCJub20iLCJEYXRlRm5zVXRpbHMiLCJzaHJpbmsiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLDRDQUFLLENBQUNDLE1BQU4sQ0FBYUMsNkRBQWI7QUFDQTtBQVFBO0FBQ0E7QUFLQTtBQU1BO0FBQ0E7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDeENDLFFBQUksRUFBRTtBQUNMQyxXQUFLLEVBQUUsS0FERjtBQUVMQyxZQUFNLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQ7QUFGSCxLQURrQztBQUt4Q0MsUUFBSSxFQUFFO0FBQ0xILFdBQUssRUFBRTtBQURGLEtBTGtDO0FBUXhDSSxVQUFNLEVBQUU7QUFDUEgsWUFBTSxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkLENBREQ7QUFFUEYsV0FBSyxFQUFFO0FBRkEsS0FSZ0M7QUFZeENLLGVBQVcsRUFBRTtBQUNaSixZQUFNLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsQ0FESTtBQUVaRixXQUFLLEVBQUU7QUFGSyxLQVoyQjtBQWdCeENNLGFBQVMsRUFBRTtBQUNWTCxZQUFNLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsQ0FERTtBQUVWRixXQUFLLEVBQUU7QUFGRztBQWhCNkIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7O0FBc0JBLElBQU1PLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxpQkFDTUMsK0RBQU8sRUFEYjtBQUFBLE1BQzlCQyxPQUQ4QixZQUM5QkEsT0FEOEI7QUFBQSxNQUNyQkMsUUFEcUIsWUFDckJBLFFBRHFCO0FBQUEsTUFDWEMsWUFEVyxZQUNYQSxZQURXOztBQUV0QyxNQUFNQyxPQUFPLEdBQUdqQixTQUFTLEVBQXpCO0FBQ0EsTUFBTWtCLEtBQUssR0FBR0MsdUVBQVMsQ0FBQyxPQUFELENBQXZCOztBQUhzQyxrQkFJWUMsc0RBQVEsRUFKcEI7QUFBQSxNQUkvQkMsaUJBSitCO0FBQUEsTUFJWkMsb0JBSlk7O0FBQUEsbUJBS1FGLHNEQUFRLEVBTGhCO0FBQUEsTUFLL0JHLGVBTCtCO0FBQUEsTUFLZEMsa0JBTGM7O0FBQUEsbUJBTVZKLHNEQUFRLEVBTkU7QUFBQSxNQU0vQkssTUFOK0I7QUFBQSxNQU12QkMsU0FOdUI7O0FBQUEsbUJBT0pOLHNEQUFRLEVBUEo7QUFBQSxNQU8vQk8sU0FQK0I7QUFBQSxNQU9wQkMsWUFQb0I7O0FBQUEsbUJBUVJSLHNEQUFRLEVBUkE7QUFBQSxNQVEvQlMsT0FSK0I7QUFBQSxNQVF0QkMsVUFSc0I7O0FBQUEsbUJBU0pWLHNEQUFRLEVBVEo7QUFBQSxNQVMvQlcsU0FUK0I7QUFBQSxNQVNwQkMsWUFUb0I7O0FBQUEsbUJBVVJaLHNEQUFRLEVBVkE7QUFBQSxNQVUvQmEsT0FWK0I7QUFBQSxNQVV0QkMsVUFWc0I7O0FBQUEsbUJBV1pkLHNEQUFRLEVBWEk7QUFBQSxNQVcvQmUsS0FYK0I7QUFBQSxNQVd4QkMsUUFYd0I7O0FBQUEsbUJBWVZoQixzREFBUSxFQVpFO0FBQUEsTUFZL0JpQixNQVorQjtBQUFBLE1BWXZCQyxTQVp1Qjs7QUFBQSxvQkFhVmxCLHNEQUFRLEVBYkU7QUFBQSxNQWEvQm1CLE1BYitCO0FBQUEsTUFhdkJDLFNBYnVCOztBQUFBLG9CQWNGcEIsc0RBQVEsRUFkTjtBQUFBLE1BYy9CcUIsVUFkK0I7QUFBQSxNQWNuQkMsYUFkbUI7O0FBQUEsb0JBZU50QixzREFBUSxFQWZGO0FBQUEsTUFlL0J1QixRQWYrQjtBQUFBLE1BZXJCQyxXQWZxQjs7QUFBQSxvQkFnQkp4QixzREFBUSxFQWhCSjtBQUFBLE1BZ0IvQnlCLFNBaEIrQjtBQUFBLE1BZ0JwQkMsWUFoQm9COztBQUFBLG9CQWlCSjFCLHNEQUFRLEVBakJKO0FBQUEsTUFpQi9CMkIsU0FqQitCO0FBQUEsTUFpQnBCQyxZQWpCb0I7O0FBbUJ0QyxNQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNDLElBQUQsRUFBVTtBQUN2QzVCLHdCQUFvQixDQUFDNEIsSUFBRCxDQUFwQjtBQUNBLEdBRkQ7O0FBSUEsTUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDRCxJQUFELEVBQVU7QUFDckMxQixzQkFBa0IsQ0FBQzBCLElBQUQsQ0FBbEI7QUFDQSxHQUZEOztBQUlBLE1BQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQsRUFBVTtBQUFBLFFBQ2xCMUIsU0FEa0IsR0FDd0MwQixJQUR4QyxDQUNsQjFCLFNBRGtCO0FBQUEsUUFDUEUsT0FETyxHQUN3Q3dCLElBRHhDLENBQ1B4QixPQURPO0FBQUEsUUFDRUUsU0FERixHQUN3Q3NCLElBRHhDLENBQ0V0QixTQURGO0FBQUEsUUFDYUUsT0FEYixHQUN3Q29CLElBRHhDLENBQ2FwQixPQURiO0FBQUEsUUFDc0JFLEtBRHRCLEdBQ3dDa0IsSUFEeEMsQ0FDc0JsQixLQUR0QjtBQUFBLFFBQzZCRSxNQUQ3QixHQUN3Q2dCLElBRHhDLENBQzZCaEIsTUFEN0I7QUFFMUIsUUFBTWlCLEtBQUssR0FBR3pELDRDQUFLLENBQUM4QixTQUFELENBQW5CO0FBQ0EsUUFBTTRCLEtBQUssR0FBRzFELDRDQUFLLENBQUNnQyxPQUFELENBQW5CO0FBQ0EyQixnRkFBVyxDQUFDRixLQUFELEVBQVFDLEtBQVIsQ0FBWCxDQUEwQkUsSUFBMUIsQ0FBK0IsVUFBQ0MsTUFBRCxFQUFZO0FBQzFDO0FBQ0FoQixtQkFBYSxDQUFDZ0IsTUFBTSxDQUFDQyxRQUFSLENBQWIsQ0FGMEMsQ0FHMUM7QUFDQSxLQUpEO0FBTUEsUUFBTXBCLE1BQU0sR0FBR2dCLEtBQUssQ0FBQ0ssSUFBTixDQUFXTixLQUFYLEVBQWtCLEtBQWxCLENBQWY7QUFDQTFCLGdCQUFZLENBQUNELFNBQUQsQ0FBWjtBQUNBRyxjQUFVLENBQUNELE9BQUQsQ0FBVjtBQUNBVyxhQUFTLENBQUNELE1BQUQsQ0FBVDtBQUNBUCxnQkFBWSxDQUFDRCxTQUFELENBQVo7QUFDQUcsY0FBVSxDQUFDRCxPQUFELENBQVY7QUFDQUcsWUFBUSxDQUFDRCxLQUFELENBQVI7QUFDQUcsYUFBUyxDQUFDRCxNQUFELENBQVQ7O0FBakIwQiwrQ0FtQlB6QixLQW5CTztBQUFBOztBQUFBO0FBbUIxQiwwREFBMEI7QUFBQSxZQUFmaUQsSUFBZTs7QUFDekIsWUFBSUEsSUFBSSxDQUFDQyxJQUFMLEtBQWMvQixTQUFsQixFQUE2QjtBQUM1QmdDLHNGQUFXLENBQUNGLElBQUksQ0FBQ0csVUFBTixFQUFrQlYsS0FBbEIsRUFBeUJDLEtBQXpCLENBQVgsQ0FBMkNFLElBQTNDLENBQWdELFVBQUNDLE1BQUQsRUFBWTtBQUMzRCxnQkFBSUEsTUFBTSxDQUFDTyxJQUFYLEVBQWlCO0FBQ2hCckIseUJBQVcsQ0FBQztBQUNYc0IsdUJBQU8sRUFDTjtBQUZVLGVBQUQsQ0FBWDtBQUlBLGFBTEQsTUFLTztBQUNOdEIseUJBQVcsQ0FBQztBQUNYc0IsdUJBQU8sRUFDTjtBQUZVLGVBQUQsQ0FBWDtBQUlBO0FBQ0QsV0FaRCxFQUQ0QixDQWM1Qjs7QUFDQSxjQUFJM0IsTUFBTSxLQUFLLENBQVgsSUFBZ0JBLE1BQU0sS0FBSyxFQUEzQixJQUFpQ0EsTUFBTSxLQUFLLEVBQWhELEVBQW9EO0FBQ25ELGdCQUFJRSxVQUFKLEVBQWdCO0FBQ2YwQixxQkFBTyxDQUFDQyxHQUFSLENBQVksbUNBQVo7O0FBQ0Esa0JBQ0N2RSw0Q0FBSyxDQUFDeUQsS0FBRCxDQUFMLENBQWF2RCxTQUFiLENBQ0NGLDRDQUFLLEdBQUd3RSxLQUFSLENBQWMsQ0FBZCxDQURELEVBRUN4RSw0Q0FBSyxHQUFHd0UsS0FBUixDQUFjLENBQWQsQ0FGRCxFQUdDLElBSEQsRUFJQyxJQUpELENBREQsRUFPRTtBQUNERix1QkFBTyxDQUFDQyxHQUFSLENBQVkscUNBQVo7QUFDQXRCLDRCQUFZLENBQ1hlLElBQUksQ0FBQ1MsMkJBQUwsR0FDQ1QsSUFBSSxDQUFDVSxXQUROLEdBRUNWLElBQUksQ0FBQ1csWUFBTCxDQUFrQkMsV0FGbkIsR0FHQ1osSUFBSSxDQUFDVyxZQUFMLENBQWtCRSxhQUhuQixHQUlDYixJQUFJLENBQUNXLFlBQUwsQ0FBa0JHLFdBTFIsQ0FBWjtBQU9BM0IsNEJBQVk7QUFDWixlQWpCRCxNQWlCTyxJQUNObkQsNENBQUssR0FDSCtFLFNBREYsQ0FDWSxHQURaLEVBRUU3RSxTQUZGLENBRVl1RCxLQUZaLEVBRW1CQyxLQUZuQixFQUUwQixJQUYxQixFQUVnQyxJQUZoQyxDQURNLEVBSUw7QUFDRFksdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLDRCQUFaO0FBQ0F0Qiw0QkFBWSxDQUNYZSxJQUFJLENBQUNTLDJCQUFMLEdBQ0NULElBQUksQ0FBQ1UsV0FETixHQUVDVixJQUFJLENBQUNXLFlBQUwsQ0FBa0JDLFdBRm5CLEdBR0NaLElBQUksQ0FBQ1csWUFBTCxDQUFrQkUsYUFIbkIsR0FJQ2IsSUFBSSxDQUFDVyxZQUFMLENBQWtCRyxXQUpuQixHQUtDZCxJQUFJLENBQUNXLFlBQUwsQ0FBa0JLLElBTlIsQ0FBWjtBQVFBN0IsNEJBQVk7QUFDWixlQWZNLE1BZUEsSUFDTm5ELDRDQUFLLEdBQ0grRSxTQURGLENBQ1ksR0FEWixFQUVFN0UsU0FGRixDQUVZdUQsS0FGWixFQUVtQkMsS0FGbkIsRUFFMEIsSUFGMUIsRUFFZ0MsSUFGaEMsQ0FETSxFQUlMO0FBQ0RZLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxrQ0FBWjtBQUNBdEIsNEJBQVksQ0FDWGUsSUFBSSxDQUFDUywyQkFBTCxHQUNDVCxJQUFJLENBQUNVLFdBRE4sR0FFQ1YsSUFBSSxDQUFDVyxZQUFMLENBQWtCQyxXQUZuQixHQUdDWixJQUFJLENBQUNXLFlBQUwsQ0FBa0JFLGFBSG5CLEdBSUNiLElBQUksQ0FBQ1csWUFBTCxDQUFrQkcsV0FKbkIsR0FLQ2QsSUFBSSxDQUFDVyxZQUFMLENBQWtCSyxJQUxuQixHQU1DaEIsSUFBSSxDQUFDVyxZQUFMLENBQWtCTSxRQVBSLENBQVo7QUFTQTlCLDRCQUFZO0FBQ1osZUFoQk0sTUFnQkE7QUFDTm1CLHVCQUFPLENBQUNDLEdBQVIsQ0FDQyxtRUFERCxFQURNLENBSU47O0FBQ0F0Qiw0QkFBWTtBQUNaRSw0QkFBWTtBQUNadEIseUJBQVMsaUNBQ0xELE1BREs7QUFFUm9CLDJCQUFTLEVBQ1JnQixJQUFJLENBQUNTLDJCQUFMLEdBQ0FULElBQUksQ0FBQ1UsV0FETCxHQUVBVixJQUFJLENBQUNXLFlBQUwsQ0FBa0JDLFdBRmxCLEdBR0FaLElBQUksQ0FBQ1csWUFBTCxDQUFrQkU7QUFOWCxtQkFBVDtBQVFBO0FBQ0QsYUFsRUQsTUFrRU87QUFDTlAscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaLEVBRE0sQ0FFTjs7QUFDQXRCLDBCQUFZO0FBQ1pFLDBCQUFZO0FBQ1p0Qix1QkFBUyxpQ0FDTEQsTUFESztBQUVSb0IseUJBQVMsRUFDUmdCLElBQUksQ0FBQ1MsMkJBQUwsR0FDQVQsSUFBSSxDQUFDVSxXQURMLEdBRUFWLElBQUksQ0FBQ1csWUFBTCxDQUFrQkM7QUFMWCxpQkFBVDtBQU9BO0FBQ0QsV0FoRkQsTUFnRk8sSUFBSWxDLE1BQU0sR0FBRyxDQUFiLEVBQWdCO0FBQ3RCNEIsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHNDQUFaOztBQUNBLGdCQUFJdkUsNENBQUssR0FBR2tGLEdBQVIsQ0FBWSxDQUFaLEVBQWVoRixTQUFmLENBQXlCdUQsS0FBekIsRUFBZ0NDLEtBQWhDLEVBQXVDLElBQXZDLEVBQTZDLElBQTdDLENBQUosRUFBd0Q7QUFDdkRZLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxrQ0FBWjs7QUFDQSxrQkFBSTdCLE1BQU0sS0FBSyxDQUFmLEVBQWtCO0FBQ2pCNEIsdUJBQU8sQ0FBQ0MsR0FBUixDQUNDLHlDQURELEVBRGlCLENBSWpCOztBQUNBdEIsNEJBQVk7QUFDWkUsNEJBQVk7QUFDWnRCLHlCQUFTLGlDQUNMRCxNQURLO0FBRVJvQiwyQkFBUyxFQUNSZ0IsSUFBSSxDQUFDUywyQkFBTCxHQUNBVCxJQUFJLENBQUNVLFdBQUwsR0FBbUIsQ0FEbkIsR0FFQVYsSUFBSSxDQUFDbUIsU0FMRTtBQU1SQywrQkFBYSxFQUNaO0FBUE8sbUJBQVQ7QUFTQSxlQWhCRCxNQWdCTyxJQUFJMUMsTUFBTSxLQUFLLENBQWYsRUFBa0I7QUFDeEI0Qix1QkFBTyxDQUFDQyxHQUFSLENBQVksc0JBQVosRUFEd0IsQ0FFeEI7O0FBQ0F0Qiw0QkFBWTtBQUNaRSw0QkFBWTtBQUNadEIseUJBQVMsaUNBQ0xELE1BREs7QUFFUm9CLDJCQUFTLEVBQ1JnQixJQUFJLENBQUNTLDJCQUFMLEdBQ0FULElBQUksQ0FBQ1U7QUFKRSxtQkFBVDtBQU1BLGVBWE0sTUFXQSxJQUFJaEMsTUFBTSxLQUFLLENBQWYsRUFBa0I7QUFDeEI0Qix1QkFBTyxDQUFDQyxHQUFSLENBQVksc0JBQVosRUFEd0IsQ0FFeEI7O0FBQ0F0Qiw0QkFBWTtBQUNaRSw0QkFBWTtBQUNadEIseUJBQVMsaUNBQ0xELE1BREs7QUFFUm9CLDJCQUFTLEVBQ1JnQixJQUFJLENBQUNTLDJCQUFMLEdBQ0FULElBQUksQ0FBQ1UsV0FETCxHQUVBVixJQUFJLENBQUNxQjtBQUxFLG1CQUFUO0FBT0EsZUFaTSxNQVlBLElBQUkzQyxNQUFNLEtBQUssQ0FBZixFQUFrQjtBQUN4QjRCLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWixFQUR3QixDQUV4Qjs7QUFDQXRCLDRCQUFZO0FBQ1pFLDRCQUFZO0FBQ1p0Qix5QkFBUyxpQ0FDTEQsTUFESztBQUVSb0IsMkJBQVMsRUFDUmdCLElBQUksQ0FBQ1MsMkJBQUwsR0FDQVQsSUFBSSxDQUFDVSxXQURMLEdBRUFWLElBQUksQ0FBQ3NCO0FBTEUsbUJBQVQ7QUFPQSxlQVpNLE1BWUEsSUFBSTVDLE1BQU0sS0FBSyxDQUFmLEVBQWtCO0FBQ3hCNEIsdUJBQU8sQ0FBQ0MsR0FBUixDQUNDLGdEQURELEVBRHdCLENBSXhCOztBQUNBdEIsNEJBQVk7QUFDWkUsNEJBQVk7QUFDWnRCLHlCQUFTLGlDQUFNRCxNQUFOO0FBQWNvQiwyQkFBUyxFQUFUQTtBQUFkLG1CQUFUO0FBQ0EsZUFSTSxNQVFBLElBQUlOLE1BQU0sS0FBSyxDQUFmLEVBQWtCO0FBQ3hCNEIsdUJBQU8sQ0FBQ0MsR0FBUixDQUNDLGdEQURELEVBRHdCLENBSXhCOztBQUNBdEIsNEJBQVk7QUFDWkUsNEJBQVk7QUFDWnRCLHlCQUFTLGlDQUFNRCxNQUFOO0FBQWNvQiwyQkFBUyxFQUFUQTtBQUFkLG1CQUFUO0FBQ0EsZUFSTSxNQVFBO0FBQ05zQix1QkFBTyxDQUFDQyxHQUFSLENBQ0MsMkRBREQ7QUFHQTtBQUNELGFBMUVELE1BMEVPO0FBQ05ELHFCQUFPLENBQUNDLEdBQVIsQ0FDQywrQ0FERDs7QUFHQSxrQkFBSTNCLFVBQUosRUFBZ0I7QUFDZjBCLHVCQUFPLENBQUNDLEdBQVIsQ0FDQyw4RkFERDs7QUFHQSxvQkFBSTdCLE1BQU0sS0FBSyxDQUFmLEVBQWtCO0FBQ2pCNEIseUJBQU8sQ0FBQ0MsR0FBUixDQUNDLDJDQURELEVBRGlCLENBSWpCOztBQUVBLHNCQUFJL0IsTUFBTSxHQUFHd0IsSUFBSSxDQUFDdUIsS0FBbEIsRUFBeUI7QUFDeEJ0QyxnQ0FBWTtBQUNaRSxnQ0FBWTtBQUNadEIsNkJBQVMsaUNBQ0xELE1BREs7QUFFUm9CLCtCQUFTLEVBQ1JnQixJQUFJLENBQUNTLDJCQUFMLEdBQ0FqQyxNQUFNLEdBQ0x3QixJQUFJLENBQUN3QixtQkFETixHQUVDO0FBTk0sdUJBQVQ7QUFRQSxtQkFYRCxNQVdPO0FBQ052QyxnQ0FBWTtBQUNaRSxnQ0FBWTtBQUNadEIsNkJBQVMsaUNBQ0xELE1BREs7QUFFUm9CLCtCQUFTLEVBQ1JnQixJQUFJLENBQUNTLDJCQUFMLEdBQ0FqQyxNQUFNLEdBQ0x3QixJQUFJLENBQUN3QixtQkFETixHQUVDLENBTk07QUFPUnRDLCtCQUFTLEVBQ1JWLE1BQU0sR0FBR3dCLElBQUksQ0FBQ3lCLGlCQUFkLEdBQWtDO0FBUjNCLHVCQUFUO0FBVUE7QUFDRCxpQkEvQkQsTUErQk8sSUFBSS9DLE1BQU0sS0FBSyxDQUFmLEVBQWtCO0FBQ3hCNEIseUJBQU8sQ0FBQ0MsR0FBUixDQUNDLDRDQURELEVBRHdCLENBSXhCOztBQUNBLHNCQUFJL0IsTUFBTSxHQUFHd0IsSUFBSSxDQUFDdUIsS0FBbEIsRUFBeUI7QUFDeEJqQiwyQkFBTyxDQUFDQyxHQUFSLG9CQUF3QlAsSUFBSSxDQUFDdUIsS0FBN0I7QUFDQXRDLGdDQUFZO0FBQ1pFLGdDQUFZO0FBQ1p0Qiw2QkFBUyxpQ0FDTEQsTUFESztBQUVSb0IsK0JBQVMsRUFDUmdCLElBQUksQ0FBQ1MsMkJBQUwsR0FDQWpDLE1BQU0sR0FDTHdCLElBQUksQ0FBQ3dCLG1CQUROLEdBRUM7QUFOTSx1QkFBVDtBQVFBLG1CQVpELE1BWU87QUFDTnZDLGdDQUFZO0FBQ1pFLGdDQUFZO0FBQ1p0Qiw2QkFBUyxpQ0FDTEQsTUFESztBQUVSb0IsK0JBQVMsRUFDUmdCLElBQUksQ0FBQ1MsMkJBQUwsR0FDQWpDLE1BQU0sR0FDTHdCLElBQUksQ0FBQ3dCLG1CQUROLEdBRUMsQ0FOTTtBQU9SdEMsK0JBQVMsRUFDUlYsTUFBTSxHQUFHd0IsSUFBSSxDQUFDeUIsaUJBQWQsR0FBa0M7QUFSM0IsdUJBQVQ7QUFVQTtBQUNELGlCQS9CTSxNQStCQSxJQUFJL0MsTUFBTSxLQUFLLENBQWYsRUFBa0I7QUFDeEI0Qix5QkFBTyxDQUFDQyxHQUFSLENBQ0MsNENBREQsRUFEd0IsQ0FJeEI7O0FBQ0Esc0JBQUkvQixNQUFNLEdBQUd3QixJQUFJLENBQUN1QixLQUFsQixFQUF5QjtBQUN4QnRDLGdDQUFZO0FBQ1pFLGdDQUFZO0FBQ1p0Qiw2QkFBUyxpQ0FDTEQsTUFESztBQUVSb0IsK0JBQVMsRUFDUmdCLElBQUksQ0FBQ1MsMkJBQUwsR0FDQWpDLE1BQU0sR0FDTHdCLElBQUksQ0FBQ3dCLG1CQUROLEdBRUM7QUFOTSx1QkFBVDtBQVFBLG1CQVhELE1BV087QUFDTnZDLGdDQUFZO0FBQ1pFLGdDQUFZO0FBQ1p0Qiw2QkFBUyxpQ0FDTEQsTUFESztBQUVSb0IsK0JBQVMsRUFDUmdCLElBQUksQ0FBQ1MsMkJBQUwsR0FDQWpDLE1BQU0sR0FDTHdCLElBQUksQ0FBQ3dCLG1CQUROLEdBRUMsQ0FOTTtBQU9SdEMsK0JBQVMsRUFDUlYsTUFBTSxHQUFHd0IsSUFBSSxDQUFDeUIsaUJBQWQsR0FBa0M7QUFSM0IsdUJBQVQ7QUFVQTtBQUNELGlCQTlCTSxNQThCQSxJQUFJL0MsTUFBTSxLQUFLLENBQWYsRUFBa0I7QUFDeEI0Qix5QkFBTyxDQUFDQyxHQUFSLENBQ0MsNENBREQsRUFEd0IsQ0FJeEI7O0FBQ0Esc0JBQUkvQixNQUFNLEdBQUd3QixJQUFJLENBQUN1QixLQUFsQixFQUF5QjtBQUN4QnRDLGdDQUFZO0FBQ1pFLGdDQUFZO0FBQ1p0Qiw2QkFBUyxpQ0FDTEQsTUFESztBQUVSb0IsK0JBQVMsRUFDUmdCLElBQUksQ0FBQ1MsMkJBQUwsR0FDQWpDLE1BQU0sR0FDTHdCLElBQUksQ0FBQ3dCLG1CQUROLEdBRUM7QUFOTSx1QkFBVDtBQVFBLG1CQVhELE1BV087QUFDTnZDLGdDQUFZO0FBQ1pFLGdDQUFZO0FBQ1p0Qiw2QkFBUyxpQ0FDTEQsTUFESztBQUVSb0IsK0JBQVMsRUFDUmdCLElBQUksQ0FBQ1MsMkJBQUwsR0FDQWpDLE1BQU0sR0FDTHdCLElBQUksQ0FBQ3dCLG1CQUROLEdBRUMsQ0FOTTtBQU9SdEMsK0JBQVMsRUFDUlYsTUFBTSxHQUFHd0IsSUFBSSxDQUFDeUIsaUJBQWQsR0FBa0M7QUFSM0IsdUJBQVQ7QUFVQTtBQUNELGlCQTlCTSxNQThCQSxJQUFJL0MsTUFBTSxLQUFLLENBQWYsRUFBa0I7QUFDeEI0Qix5QkFBTyxDQUFDQyxHQUFSLENBQ0MsNENBREQsRUFEd0IsQ0FJeEI7O0FBQ0Esc0JBQUkvQixNQUFNLEdBQUd3QixJQUFJLENBQUN1QixLQUFsQixFQUF5QjtBQUN4QnRDLGdDQUFZO0FBQ1pFLGdDQUFZO0FBQ1p0Qiw2QkFBUyxpQ0FDTEQsTUFESztBQUVSb0IsK0JBQVMsRUFDUmdCLElBQUksQ0FBQ1MsMkJBQUwsR0FDQWpDLE1BQU0sR0FDTHdCLElBQUksQ0FBQ3dCLG1CQUROLEdBRUM7QUFOTSx1QkFBVDtBQVFBLG1CQVhELE1BV087QUFDTnZDLGdDQUFZO0FBQ1pFLGdDQUFZO0FBQ1p0Qiw2QkFBUyxpQ0FDTEQsTUFESztBQUVSb0IsK0JBQVMsRUFDUmdCLElBQUksQ0FBQ1MsMkJBQUwsR0FDQWpDLE1BQU0sR0FDTHdCLElBQUksQ0FBQ3dCLG1CQUROLEdBRUMsQ0FOTTtBQU9SdEMsK0JBQVMsRUFDUlYsTUFBTSxHQUFHd0IsSUFBSSxDQUFDeUIsaUJBQWQsR0FBa0M7QUFSM0IsdUJBQVQ7QUFVQTtBQUNELGlCQTlCTSxNQThCQSxJQUFJL0MsTUFBTSxLQUFLLENBQWYsRUFBa0I7QUFDeEI0Qix5QkFBTyxDQUFDQyxHQUFSLENBQ0MsNENBREQsRUFEd0IsQ0FJeEI7O0FBQ0Esc0JBQUkvQixNQUFNLEdBQUd3QixJQUFJLENBQUN1QixLQUFsQixFQUF5QjtBQUN4QnRDLGdDQUFZO0FBQ1pFLGdDQUFZO0FBQ1p0Qiw2QkFBUyxpQ0FDTEQsTUFESztBQUVSb0IsK0JBQVMsRUFDUmdCLElBQUksQ0FBQ1MsMkJBQUwsR0FDQWpDLE1BQU0sR0FDTHdCLElBQUksQ0FBQ3dCLG1CQUROLEdBRUM7QUFOTSx1QkFBVDtBQVFBLG1CQVhELE1BV087QUFDTnZDLGdDQUFZO0FBQ1pFLGdDQUFZO0FBQ1p0Qiw2QkFBUyxpQ0FDTEQsTUFESztBQUVSb0IsK0JBQVMsRUFDUmdCLElBQUksQ0FBQ1MsMkJBQUwsR0FDQWpDLE1BQU0sR0FDTHdCLElBQUksQ0FBQ3dCLG1CQUROLEdBRUMsQ0FOTTtBQU9SdEMsK0JBQVMsRUFDUlYsTUFBTSxHQUFHd0IsSUFBSSxDQUFDeUIsaUJBQWQsR0FBa0M7QUFSM0IsdUJBQVQ7QUFVQTtBQUNELGlCQTlCTSxNQThCQTtBQUNObkIseUJBQU8sQ0FBQ0MsR0FBUixDQUNDLDJEQUREO0FBR0E7QUFDRCxlQS9MRCxNQStMTztBQUNORCx1QkFBTyxDQUFDQyxHQUFSLENBQ0MsOEVBREQsRUFETSxDQUlOOztBQUNBLG9CQUFJN0IsTUFBTSxLQUFLLENBQWYsRUFBa0I7QUFDakI0Qix5QkFBTyxDQUFDQyxHQUFSLENBQ0MsMkNBREQsRUFEaUIsQ0FJakI7O0FBRUEsc0JBQUkvQixNQUFNLEdBQUd3QixJQUFJLENBQUN1QixLQUFsQixFQUF5QjtBQUN4QnRDLGdDQUFZO0FBQ1pFLGdDQUFZO0FBQ1p0Qiw2QkFBUyxpQ0FDTEQsTUFESztBQUVSb0IsK0JBQVMsRUFDUmdCLElBQUksQ0FBQ1MsMkJBQUwsR0FDQWpDLE1BQU0sR0FDTHdCLElBQUksQ0FBQ3dCLG1CQUROLEdBRUM7QUFOTSx1QkFBVDtBQVFBLG1CQVhELE1BV087QUFDTnZDLGdDQUFZO0FBQ1pFLGdDQUFZO0FBQ1p0Qiw2QkFBUyxpQ0FDTEQsTUFESztBQUVSb0IsK0JBQVMsRUFDUCxDQUFDZ0IsSUFBSSxDQUFDUywyQkFBTCxHQUNEVCxJQUFJLENBQUNVLFdBREosR0FFRFYsSUFBSSxDQUFDVyxZQUFMLENBQWtCQyxXQUZqQixHQUdEWixJQUFJLENBQUNXLFlBQUwsQ0FDRUUsYUFKRCxHQUtEYixJQUFJLENBQUNTLDJCQUxMLElBTUEsQ0FORCxHQU9DLENBUEQsR0FRQVQsSUFBSSxDQUFDUywyQkFYRTtBQVlSdkIsK0JBQVMsRUFDUlYsTUFBTSxHQUFHd0IsSUFBSSxDQUFDeUIsaUJBQWQsR0FBa0M7QUFiM0IsdUJBQVQ7QUFlQTtBQUNELGlCQXBDRCxNQW9DTyxJQUFJL0MsTUFBTSxLQUFLLENBQWYsRUFBa0I7QUFDeEI0Qix5QkFBTyxDQUFDQyxHQUFSLENBQ0MsNENBREQsRUFEd0IsQ0FJeEI7O0FBQ0Esc0JBQUkvQixNQUFNLEdBQUd3QixJQUFJLENBQUN1QixLQUFsQixFQUF5QjtBQUN4QnRDLGdDQUFZO0FBQ1pFLGdDQUFZO0FBQ1p0Qiw2QkFBUyxpQ0FDTEQsTUFESztBQUVSb0IsK0JBQVMsRUFDUmdCLElBQUksQ0FBQ1MsMkJBQUwsR0FDQWpDLE1BQU0sR0FDTHdCLElBQUksQ0FBQ3dCLG1CQUROLEdBRUM7QUFOTSx1QkFBVDtBQVFBLG1CQVhELE1BV087QUFDTnZDLGdDQUFZO0FBQ1pFLGdDQUFZO0FBQ1p0Qiw2QkFBUyxpQ0FDTEQsTUFESztBQUVSb0IsK0JBQVMsRUFDUCxDQUFDZ0IsSUFBSSxDQUFDUywyQkFBTCxHQUNEVCxJQUFJLENBQUNVLFdBREosR0FFRFYsSUFBSSxDQUFDVyxZQUFMLENBQWtCQyxXQUZqQixHQUdEWixJQUFJLENBQUNXLFlBQUwsQ0FDRUUsYUFKRCxHQUtEYixJQUFJLENBQUNTLDJCQUxMLElBTUEsQ0FORCxHQU9DLENBUEQsR0FRQVQsSUFBSSxDQUFDUywyQkFYRTtBQVlSdkIsK0JBQVMsRUFDUlYsTUFBTSxHQUFHd0IsSUFBSSxDQUFDeUIsaUJBQWQsR0FBa0M7QUFiM0IsdUJBQVQ7QUFlQTtBQUNELGlCQW5DTSxNQW1DQSxJQUFJL0MsTUFBTSxLQUFLLENBQWYsRUFBa0I7QUFDeEI0Qix5QkFBTyxDQUFDQyxHQUFSLENBQ0MsNENBREQsRUFEd0IsQ0FJeEI7O0FBQ0Esc0JBQUkvQixNQUFNLEdBQUd3QixJQUFJLENBQUN1QixLQUFsQixFQUF5QjtBQUN4QnRDLGdDQUFZO0FBQ1pFLGdDQUFZO0FBQ1p0Qiw2QkFBUyxpQ0FDTEQsTUFESztBQUVSb0IsK0JBQVMsRUFDUmdCLElBQUksQ0FBQ1MsMkJBQUwsR0FDQWpDLE1BQU0sR0FDTHdCLElBQUksQ0FBQ3dCLG1CQUROLEdBRUM7QUFOTSx1QkFBVDtBQVFBLG1CQVhELE1BV087QUFDTnZDLGdDQUFZO0FBQ1pFLGdDQUFZO0FBQ1p0Qiw2QkFBUyxpQ0FDTEQsTUFESztBQUVSb0IsK0JBQVMsRUFDUCxDQUFDZ0IsSUFBSSxDQUFDUywyQkFBTCxHQUNEVCxJQUFJLENBQUNVLFdBREosR0FFRFYsSUFBSSxDQUFDVyxZQUFMLENBQWtCQyxXQUZqQixHQUdEWixJQUFJLENBQUNXLFlBQUwsQ0FDRUUsYUFKRCxHQUtEYixJQUFJLENBQUNTLDJCQUxMLElBTUEsQ0FORCxHQU9DLENBUEQsR0FRQVQsSUFBSSxDQUFDUywyQkFYRTtBQVlSdkIsK0JBQVMsRUFDUlYsTUFBTSxHQUFHd0IsSUFBSSxDQUFDeUIsaUJBQWQsR0FBa0M7QUFiM0IsdUJBQVQ7QUFlQTtBQUNELGlCQW5DTSxNQW1DQSxJQUFJL0MsTUFBTSxLQUFLLENBQWYsRUFBa0I7QUFDeEI0Qix5QkFBTyxDQUFDQyxHQUFSLENBQ0MsNENBREQsRUFEd0IsQ0FJeEI7O0FBQ0Esc0JBQUkvQixNQUFNLEdBQUd3QixJQUFJLENBQUN1QixLQUFsQixFQUF5QjtBQUN4QnRDLGdDQUFZO0FBQ1pFLGdDQUFZO0FBQ1p0Qiw2QkFBUyxpQ0FDTEQsTUFESztBQUVSb0IsK0JBQVMsRUFDUmdCLElBQUksQ0FBQ1MsMkJBQUwsR0FDQWpDLE1BQU0sR0FDTHdCLElBQUksQ0FBQ3dCLG1CQUROLEdBRUM7QUFOTSx1QkFBVDtBQVFBLG1CQVhELE1BV087QUFDTnZDLGdDQUFZO0FBQ1pFLGdDQUFZO0FBQ1p0Qiw2QkFBUyxpQ0FDTEQsTUFESztBQUVSb0IsK0JBQVMsRUFDUCxDQUFDZ0IsSUFBSSxDQUFDUywyQkFBTCxHQUNEVCxJQUFJLENBQUNVLFdBREosR0FFRFYsSUFBSSxDQUFDVyxZQUFMLENBQWtCQyxXQUZqQixHQUdEWixJQUFJLENBQUNXLFlBQUwsQ0FDRUUsYUFKRCxHQUtEYixJQUFJLENBQUNTLDJCQUxMLElBTUEsQ0FORCxHQU9DLENBUEQsR0FRQVQsSUFBSSxDQUFDUywyQkFYRTtBQVlSdkIsK0JBQVMsRUFDUlYsTUFBTSxHQUFHd0IsSUFBSSxDQUFDeUIsaUJBQWQsR0FBa0M7QUFiM0IsdUJBQVQ7QUFlQTtBQUNELGlCQW5DTSxNQW1DQSxJQUFJL0MsTUFBTSxLQUFLLENBQWYsRUFBa0I7QUFDeEI0Qix5QkFBTyxDQUFDQyxHQUFSLENBQ0MsNENBREQsRUFEd0IsQ0FJeEI7O0FBQ0Esc0JBQUkvQixNQUFNLEdBQUd3QixJQUFJLENBQUN1QixLQUFsQixFQUF5QjtBQUN4QnRDLGdDQUFZO0FBQ1pFLGdDQUFZO0FBQ1p0Qiw2QkFBUyxpQ0FDTEQsTUFESztBQUVSb0IsK0JBQVMsRUFDUmdCLElBQUksQ0FBQ1MsMkJBQUwsR0FDQWpDLE1BQU0sR0FDTHdCLElBQUksQ0FBQ3dCLG1CQUROLEdBRUM7QUFOTSx1QkFBVDtBQVFBLG1CQVhELE1BV087QUFDTnZDLGdDQUFZO0FBQ1pFLGdDQUFZO0FBQ1p0Qiw2QkFBUyxpQ0FDTEQsTUFESztBQUVSb0IsK0JBQVMsRUFDUCxDQUFDZ0IsSUFBSSxDQUFDUywyQkFBTCxHQUNEVCxJQUFJLENBQUNVLFdBREosR0FFRFYsSUFBSSxDQUFDVyxZQUFMLENBQWtCQyxXQUZqQixHQUdEWixJQUFJLENBQUNXLFlBQUwsQ0FDRUUsYUFKRCxHQUtEYixJQUFJLENBQUNTLDJCQUxMLElBTUEsQ0FORCxHQU9DLENBUEQsR0FRQVQsSUFBSSxDQUFDUywyQkFYRTtBQVlSdkIsK0JBQVMsRUFDUlYsTUFBTSxHQUFHd0IsSUFBSSxDQUFDeUIsaUJBQWQsR0FBa0M7QUFiM0IsdUJBQVQ7QUFlQTtBQUNELGlCQW5DTSxNQW1DQSxJQUFJL0MsTUFBTSxLQUFLLENBQWYsRUFBa0I7QUFDeEI0Qix5QkFBTyxDQUFDQyxHQUFSLENBQ0MsNENBREQsRUFEd0IsQ0FJeEI7O0FBQ0Esc0JBQUkvQixNQUFNLEdBQUd3QixJQUFJLENBQUN1QixLQUFsQixFQUF5QjtBQUN4QnRDLGdDQUFZO0FBQ1pFLGdDQUFZO0FBQ1p0Qiw2QkFBUyxpQ0FDTEQsTUFESztBQUVSb0IsK0JBQVMsRUFDUmdCLElBQUksQ0FBQ1MsMkJBQUwsR0FDQWpDLE1BQU0sR0FDTHdCLElBQUksQ0FBQ3dCLG1CQUROLEdBRUM7QUFOTSx1QkFBVDtBQVFBLG1CQVhELE1BV087QUFDTnZDLGdDQUFZO0FBQ1pFLGdDQUFZO0FBQ1p0Qiw2QkFBUyxpQ0FDTEQsTUFESztBQUVSb0IsK0JBQVMsRUFDUCxDQUFDZ0IsSUFBSSxDQUFDUywyQkFBTCxHQUNEVCxJQUFJLENBQUNVLFdBREosR0FFRFYsSUFBSSxDQUFDVyxZQUFMLENBQWtCQyxXQUZqQixHQUdEWixJQUFJLENBQUNXLFlBQUwsQ0FDRUUsYUFKRCxHQUtEYixJQUFJLENBQUNTLDJCQUxMLElBTUEsQ0FORCxHQU9DLENBUEQsR0FRQVQsSUFBSSxDQUFDUywyQkFYRTtBQVlSdkIsK0JBQVMsRUFDUlYsTUFBTSxHQUFHd0IsSUFBSSxDQUFDeUIsaUJBQWQsR0FBa0M7QUFiM0IsdUJBQVQ7QUFlQTtBQUNEO0FBQ0Q7QUFDRDtBQUNELFdBMWVNLE1BMGVBO0FBQ05uQixtQkFBTyxDQUFDQyxHQUFSLENBQVksd0NBQVo7QUFDQUQsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0E7QUFDRDtBQUNEO0FBbG1CeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFtbUIxQkQsV0FBTyxDQUFDQyxHQUFSLENBQVkzQyxNQUFaO0FBQ0EwQyxXQUFPLENBQUNDLEdBQVIsdUJBQTJCekMsU0FBM0IsaUJBQTJDRSxPQUEzQztBQUNBLEdBcm1CRDs7QUF1bUJBLFNBQ0M7QUFBTSxZQUFRLEVBQUViLFlBQVksQ0FBQ29DLFFBQUQsQ0FBNUI7QUFBd0MsYUFBUyxFQUFFbkMsT0FBTyxDQUFDZCxJQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyw2REFBRDtBQUFhLGFBQVMsRUFBRWMsT0FBTyxDQUFDUixXQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyw0REFBRDtBQUNDLFVBQU0sTUFEUDtBQUVDLE1BQUUsRUFBQyw0Q0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsRUFNQyxNQUFDLDBEQUFEO0FBQ0MsV0FBTyxFQUFFSyxPQURWO0FBRUMsUUFBSSxFQUFDLFdBRk47QUFHQyxNQUFFLEVBQ0QsTUFBQyx3REFBRDtBQUFRLFFBQUUsRUFBQyxvQkFBWDtBQUFnQyxrQkFBWSxFQUFDLEVBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRUYsS0FBSyxDQUFDMkUsR0FBTixDQUFVLFVBQUMxQixJQUFEO0FBQUEsYUFDVixNQUFDLDBEQUFEO0FBQVUsYUFBSyxFQUFFQSxJQUFJLENBQUNDLElBQXRCO0FBQTRCLFdBQUcsRUFBRUQsSUFBSSxDQUFDQyxJQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0VELElBQUksQ0FBQzJCLEdBRFAsQ0FEVTtBQUFBLEtBQVYsQ0FERixDQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORCxDQURELEVBc0JDLE1BQUMsNkRBQUQ7QUFBYSxhQUFTLEVBQUV2RSxPQUFPLENBQUNSLFdBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDRFQUFEO0FBQXlCLFNBQUssRUFBRWdGLHlEQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyx1RUFBRDtBQUNDLFlBQVEsRUFBRTFFLFFBRFg7QUFFQyxVQUFNLEVBQUMsUUFGUjtBQUdDLE1BQUUsRUFBQyxvQkFISjtBQUlDLFFBQUksRUFBQyxXQUpOO0FBS0MsU0FBSyxFQUFDLGtCQUxQO0FBTUMsVUFBTSxFQUFDLFlBTlI7QUFPQyxnQkFBWSxFQUFDLEVBUGQ7QUFRQyxTQUFLLEVBQUVNLGlCQVJSO0FBU0MsWUFBUSxFQUFFNEIscUJBVFg7QUFVQyx1QkFBbUIsRUFBRTtBQUNwQixvQkFBYztBQURNLEtBVnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQWVDLE1BQUMsdUVBQUQ7QUFDQyxZQUFRLEVBQUVsQyxRQURYLENBRUM7QUFGRDtBQUdDLFFBQUksRUFBQyxTQUhOO0FBSUMsVUFBTSxFQUFDLFlBSlI7QUFLQyxVQUFNLEVBQUMsUUFMUjtBQU1DLGdCQUFZLEVBQUMsWUFOZDtBQU9DLE1BQUUsRUFBQyxvQkFQSjtBQVFDLFNBQUssRUFBQyxhQVJQO0FBU0MsU0FBSyxFQUFFUSxlQVRSO0FBVUMsWUFBUSxFQUFFNEIsbUJBVlg7QUFXQyx1QkFBbUIsRUFBRTtBQUNwQixvQkFBYztBQURNLEtBWHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmRCxDQURELENBdEJELEVBd0RDLE1BQUMsMkRBQUQ7QUFDQyxhQUFTLEVBQUVsQyxPQUFPLENBQUNQLFNBRHBCO0FBRUMsWUFBUSxFQUFFSyxRQUZYO0FBR0MsUUFBSSxFQUFDLFFBSE47QUFJQyxRQUFJLEVBQUMsUUFKTjtBQUtDLGdCQUFZLEVBQUMsSUFMZDtBQU1DLE1BQUUsRUFBQyxpQkFOSjtBQU9DLFNBQUssRUFBQyw4QkFQUDtBQVFDLG1CQUFlLEVBQUU7QUFDaEIyRSxZQUFNLEVBQUU7QUFEUSxLQVJsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeERELEVBcUVDLE1BQUMsMkRBQUQ7QUFDQyxhQUFTLEVBQUV6RSxPQUFPLENBQUNQLFNBRHBCO0FBRUMsWUFBUSxFQUFFSyxRQUZYO0FBR0MsUUFBSSxFQUFDLE9BSE47QUFJQyxRQUFJLEVBQUMsUUFKTjtBQUtDLGdCQUFZLEVBQUMsR0FMZDtBQU1DLE1BQUUsRUFBQyxpQkFOSjtBQU9DLFNBQUssRUFBQywwQkFQUDtBQVFDLG1CQUFlLEVBQUU7QUFDaEIyRSxZQUFNLEVBQUU7QUFEUSxLQVJsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckVELEVBaUZDLE1BQUMsMkRBQUQ7QUFDQyxhQUFTLEVBQUV6RSxPQUFPLENBQUNQLFNBRHBCO0FBRUMsWUFBUSxFQUFFSyxRQUZYO0FBR0MsUUFBSSxFQUFDLFNBSE47QUFJQyxRQUFJLEVBQUMsUUFKTjtBQUtDLGdCQUFZLEVBQUMsR0FMZDtBQU1DLE1BQUUsRUFBQyxpQkFOSjtBQU9DLFNBQUssRUFBQywyQkFQUDtBQVFDLG1CQUFlLEVBQUU7QUFDaEIyRSxZQUFNLEVBQUU7QUFEUSxLQVJsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakZELEVBOEZDLE1BQUMsd0RBQUQ7QUFDQyxRQUFJLEVBQUMsUUFETjtBQUVDLFdBQU8sRUFBQyxXQUZUO0FBR0MsU0FBSyxFQUFDLFNBSFA7QUFJQyxhQUFTLEVBQUV6RSxPQUFPLENBQUNULE1BSnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBOUZELEVBcUdFaUIsTUFBTSxJQUFJa0UsSUFBSSxDQUFDQyxTQUFMLENBQWVuRSxNQUFmLENBckdaLENBREQ7QUF5R0EsQ0EzdUJEOztHQUFNZCxlO1VBQ3VDRSx1RCxFQUM1QmIsUzs7O0tBRlhXLGU7QUE2dUJTQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90YXJpZnMuNTY3OGIzM2ViNmUyMDdiNjYxYzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRlRm5zVXRpbHMgZnJvbSAnQGRhdGUtaW8vZGF0ZS1mbnMnO1xyXG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IGlzQmV0d2VlbiBmcm9tICdkYXlqcy9wbHVnaW4vaXNCZXR3ZWVuJztcclxuZGF5anMuZXh0ZW5kKGlzQmV0d2Vlbik7XHJcbmltcG9ydCB7XHJcblx0QnV0dG9uLFxyXG5cdEZvcm1Db250cm9sLFxyXG5cdElucHV0TGFiZWwsXHJcblx0TWVudUl0ZW0sXHJcblx0U2VsZWN0LFxyXG5cdFRleHRGaWVsZCxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge1xyXG5cdE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLFxyXG5cdEtleWJvYXJkVGltZVBpY2tlcixcclxuXHRLZXlib2FyZERhdGVQaWNrZXIsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL3BpY2tlcnMnO1xyXG5pbXBvcnQge1xyXG5cdGdldENhbGVuZGFyLFxyXG5cdGdldENhbGVuZGFyQnlJZCxcclxuXHRnZXREZWphTG91ZSxcclxuXHRnZXRWYWNhbmNlcyxcclxufSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2NhbGVuZGFyQWN0aW9ucyc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdGZvcm06IHtcclxuXHRcdHdpZHRoOiAnNzAlJyxcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygyKSxcclxuXHR9LFxyXG5cdHJvb3Q6IHtcclxuXHRcdHdpZHRoOiAnODAlJyxcclxuXHR9LFxyXG5cdGJ1dHRvbjoge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdFx0d2lkdGg6ICc4MCUnLFxyXG5cdH0sXHJcblx0Zm9ybUNvbnRyb2w6IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdHdpZHRoOiAnODAlJyxcclxuXHR9LFxyXG5cdHRleHRGaWVsZDoge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0d2lkdGg6ICc4MCUnLFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEZvcm1DYWxjdWxUYXJpZiA9ICh7IGdpdGVzIH0pID0+IHtcclxuXHRjb25zdCB7IGNvbnRyb2wsIHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm0oKTtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblx0Y29uc3QgW3NlbGVjdGVkRGF0ZURlYnV0LCBzZXRTZWxlY3RlZERhdGVEZWJ1dF0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtzZWxlY3RlZERhdGVGaW4sIHNldFNlbGVjdGVkRGF0ZUZpbl0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtkYXRlRGVidXQsIHNldERhdGVEZWJ1dF0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtkYXRlRmluLCBzZXREYXRlRmluXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW2dpdGVTZWxlYywgc2V0R2l0ZVNlbGVjXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW25iQ2hpZW4sIHNldE5iQ2hpZW5dID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdCBbbmJFbmYsIHNldE5iRW5mXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW25iUGVycywgc2V0TmJQZXJzXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW251aXRlZSwgc2V0TnVpdGVlXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW2lzVmFjYW5jZXMsIHNldElzVmFjYW5jZXNdID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdCBbZGVqYUxvdWUsIHNldERlamFMb3VlXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW3ByaXhUb3RhbCwgc2V0UHJpeFRvdGFsXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW3ByaXhTdXBwbCwgc2V0UHJpeFN1cHBsXSA9IHVzZVN0YXRlKCk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZURhdGVDaGFuZ2VEZWJ1dCA9IChkYXRlKSA9PiB7XHJcblx0XHRzZXRTZWxlY3RlZERhdGVEZWJ1dChkYXRlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVEYXRlQ2hhbmdlRmluID0gKGRhdGUpID0+IHtcclxuXHRcdHNldFNlbGVjdGVkRGF0ZUZpbihkYXRlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBvblN1Ym1pdCA9IChkYXRhKSA9PiB7XHJcblx0XHRjb25zdCB7IGRhdGVEZWJ1dCwgZGF0ZUZpbiwgZ2l0ZVNlbGVjLCBuYkNoaWVuLCBuYkVuZiwgbmJQZXJzIH0gPSBkYXRhO1xyXG5cdFx0Y29uc3QgZGF0ZUQgPSBkYXlqcyhkYXRlRGVidXQpO1xyXG5cdFx0Y29uc3QgZGF0ZUYgPSBkYXlqcyhkYXRlRmluKTtcclxuXHRcdGdldFZhY2FuY2VzKGRhdGVELCBkYXRlRikudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdyZXN1bHQgdmF1dCcsIHJlc3VsdCk7XHJcblx0XHRcdHNldElzVmFjYW5jZXMocmVzdWx0LnZhY2FuY2VzKTtcclxuXHRcdFx0Ly8gcmV0dXJuIHJlc3VsdC52YWNhbmNlcztcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IG51aXRlZSA9IGRhdGVGLmRpZmYoZGF0ZUQsICdkYXknKTtcclxuXHRcdHNldERhdGVEZWJ1dChkYXRlRGVidXQpO1xyXG5cdFx0c2V0RGF0ZUZpbihkYXRlRmluKTtcclxuXHRcdHNldE51aXRlZShudWl0ZWUpO1xyXG5cdFx0c2V0R2l0ZVNlbGVjKGdpdGVTZWxlYyk7XHJcblx0XHRzZXROYkNoaWVuKG5iQ2hpZW4pO1xyXG5cdFx0c2V0TmJFbmYobmJFbmYpO1xyXG5cdFx0c2V0TmJQZXJzKG5iUGVycyk7XHJcblxyXG5cdFx0Zm9yIChjb25zdCBnaXRlIG9mIGdpdGVzKSB7XHJcblx0XHRcdGlmIChnaXRlLnNsdWcgPT09IGdpdGVTZWxlYykge1xyXG5cdFx0XHRcdGdldERlamFMb3VlKGdpdGUuY2FsZW5kYXJJZCwgZGF0ZUQsIGRhdGVGKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXN1bHQubG91ZSkge1xyXG5cdFx0XHRcdFx0XHRzZXREZWphTG91ZSh7XHJcblx0XHRcdFx0XHRcdFx0bWVzc2FnZTpcclxuXHRcdFx0XHRcdFx0XHRcdCdJbCBzZW1ibGUgcXVlIGNlIGfDrnRlIHNvaXQgZMOpasOgIGxvdcOpIGF1eCBkYXRlcyBpbmRpcXXDqWVzJyxcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRzZXREZWphTG91ZSh7XHJcblx0XHRcdFx0XHRcdFx0bWVzc2FnZTpcclxuXHRcdFx0XHRcdFx0XHRcdFwiQ2UgZ8OudGUgc2VtYmxlIGxpYnJlIHBvdXIgbGUgbW9tZW50LCBuJ2jDqXNpdGV6IHBhcyDDoCBmYWlyZSB1bmUgZGVtYW5kZSBkZSBsb2NhdGlvblwiLFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHQvLyBPbiByw6ljdXDDqHJlIGxlIGfDrnRlIHNlbGVjdGlvbm7DqVxyXG5cdFx0XHRcdGlmIChudWl0ZWUgPT09IDcgfHwgbnVpdGVlID09PSAxNCB8fCBudWl0ZWUgPT09IDIxKSB7XHJcblx0XHRcdFx0XHRpZiAoaXNWYWNhbmNlcykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ2FzIGfDqW7DqXJhbCA6IG9uIGVzdCBlbiB2YW5jYW5jZXMnKTtcclxuXHRcdFx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0XHRcdGRheWpzKGRhdGVEKS5pc0JldHdlZW4oXHJcblx0XHRcdFx0XHRcdFx0XHRkYXlqcygpLm1vbnRoKDYpLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGF5anMoKS5tb250aCg3KSxcclxuXHRcdFx0XHRcdFx0XHRcdG51bGwsXHJcblx0XHRcdFx0XHRcdFx0XHQnW10nXHJcblx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnb24gZXN0IGVuIGhhdXRlIHNhaXNvbiDDoCBsYSBzZW1haW5lJyk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuaGF1dGVTYWlzb25cclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKFxyXG5cdFx0XHRcdFx0XHRcdGRheWpzKClcclxuXHRcdFx0XHRcdFx0XHRcdC5kYXlPZlllYXIoMzU4KVxyXG5cdFx0XHRcdFx0XHRcdFx0LmlzQmV0d2VlbihkYXRlRCwgZGF0ZUYsIG51bGwsICdbXScpXHJcblx0XHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdvbiBlc3Qgw6Agbm9lbCDDoCBsYSBzZW1haW5lJyk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuaGF1dGVTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5ub2VsXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChcclxuXHRcdFx0XHRcdFx0XHRkYXlqcygpXHJcblx0XHRcdFx0XHRcdFx0XHQuZGF5T2ZZZWFyKDM2NSlcclxuXHRcdFx0XHRcdFx0XHRcdC5pc0JldHdlZW4oZGF0ZUQsIGRhdGVGLCBudWxsLCAnW10nKVxyXG5cdFx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnb24gZXN0IGF1IG5vdXZlbCBhbiDDoCBsYSBzZW1haW5lJyk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuaGF1dGVTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5ub2VsICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubm91dmVsQW5cclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0J09uIGVzdCBkYW5zIGxlIGNhcyA3IG51aXTDqWVzIGVuIHZhY2FuY2VzIHNjb2xhaXJlcyBtb3llbm5lIHNhaXNvbidcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uLFxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ2FzIDcgbnVpdMOpZXMgaG9ycyB2YWNhbmNlcycpO1xyXG5cdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoKTtcclxuXHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24sXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlIDwgNykge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyBnw6luw6lyYWwgOiBudWl0w6llcyBpbmbDqXJpZXVyZSDDoCA3Jyk7XHJcblx0XHRcdFx0XHRpZiAoZGF5anMoKS5kYXkoNikuaXNCZXR3ZWVuKGRhdGVELCBkYXRlRiwgbnVsbCwgJ1tdJykpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyBlbiB3ZWVrLWVuZCBtb2lucyBkZSA3IG51aXRzJyk7XHJcblx0XHRcdFx0XHRcdGlmIChudWl0ZWUgPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdCdDYXMgd2Vlay1lbmQgMSBudWl0ICsgbXNnIGF2ZXJ0aXNzZW1lbnQnXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbCgpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSAvIDIgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnVuZU51aXRlZSxcclxuXHRcdFx0XHRcdFx0XHRcdGF2ZXJ0aXNzZW1lbnQ6XHJcblx0XHRcdFx0XHRcdFx0XHRcdCdFbiB3ZWVrIGVuZCBub3VzIGxvdW9ucyAyIG51aXTDqWVzLCAodHLDqHMgZXhjZXB0aW9ubmVsZW1lbnQgMSBzZXVsZSknLFxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gMikge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdDYXMgd2Vlay1lbmQgMiBudWl0cycpO1xyXG5cdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlLFxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gMykge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdDYXMgd2Vlay1lbmQgMyBudWl0cycpO1xyXG5cdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50cm9pc051aXRlZXMsXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA0KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyB3ZWVrLWVuZCA0IG51aXRzJyk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoKTtcclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoKTtcclxuXHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnF1YXRyZU51aXRlZXMsXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA1KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHQnQ2FzIHdlZWstZW5kIDUgbnVpdHMgLSBRdWVsIHRhcmlmID8gVm9pciBNYW1hbidcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBwcml4VG90YWwgfSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA2KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHQnQ2FzIHdlZWstZW5kIDYgbnVpdHMgLSBRdWVsIHRhcmlmID8gVm9pciBNYW1hbidcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBwcml4VG90YWwgfSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHQnQXV0cmVzIGNhcyB3ZWVrLWVuZCBpbmbDqXJpZXVyIMOgIDcgbnVpdHMgLSBQZXUgcHJvYmFibGUuLi4nXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0J0NhcyBnw6luw6lyYWwgOiBtb2lucyBkZSA3IG51aXRzIGV0IHNhbnMgc2FtZWRpJ1xyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRpZiAoaXNWYWNhbmNlcykge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0J0NhcyBnw6luw6lyYWwgOiBob3JzIFdFIG1vaW5zIGRlIDcgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcyAtIFRhcmlmIHNhbnMgdGVuaXIgY29tcHRlIGR1IHBsYWZvbmQnXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRpZiAobnVpdGVlID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDEgbnVpdCBtYWlzIGVuIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQxLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4U3VwcGw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogMSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgMiBudWl0cyBtYWlzIGVuIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgTW9pbnMgZGUgJHtnaXRlLm5QZXJzfSBwZXJzYCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MixcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFN1cHBsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSAzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDMgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4U3VwcGw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogMyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgNCBudWl0cyBtYWlzIGVuIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ0LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiA0LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gNSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCA1IG51aXRzIG1haXMgZW4gdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFN1cHBsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA2KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDYgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ2LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4U3VwcGw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogNixcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQXV0cmVzIGNhcyB3ZWVrLWVuZCBpbmbDqXJpZXVyIMOgIDcgbnVpdHMgLSBQZXUgcHJvYmFibGUuLi4nXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdCdDYXMgZ8OpbsOpcmFsIDogaG9ycyBXRSBtb2lucyBkZSA3IG51aXRzIG1haXMgZW4gdmFjYW5jZXMgLSBUYXJpZiBhdmVjIHBsYWZvbmQnXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdGlmIChudWl0ZWUgPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgMSBudWl0IGV0IGhvcnMgdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDEsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQubW95ZW5uZVNhaXNvbiAtXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlKSAvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcpICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4U3VwcGw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogMSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgMiBudWl0cyBldCBob3JzIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQubW95ZW5uZVNhaXNvbiAtXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlKSAvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcpICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4U3VwcGw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogMixcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgMyBudWl0cyBldCBob3JzIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQubW95ZW5uZVNhaXNvbiAtXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlKSAvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcpICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MyArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4U3VwcGw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogMyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgNCBudWl0cyBldCBob3JzIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQubW95ZW5uZVNhaXNvbiAtXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlKSAvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcpICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NCArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4U3VwcGw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogNCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgNSBudWl0cyBldCBob3JzIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQubW95ZW5uZVNhaXNvbiAtXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlKSAvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcpICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4U3VwcGw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogNSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDYpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgNiBudWl0cyBldCBob3JzIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDYsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQubW95ZW5uZVNhaXNvbiAtXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlKSAvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcpICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4U3VwcGw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogNixcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdBdXRyZXMgY2FzIG51aXQgPiA3IGV0ICE9PSBkZSAxNCBldCAyMScpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ0fDqXJlciBjYXMgPjMwIGljaScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2codmFsdWVzKTtcclxuXHRcdGNvbnNvbGUubG9nKGBMb2NhdGlvbiBkdSAke2RhdGVEZWJ1dH0gYXUgJHtkYXRlRmlufWApO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PlxyXG5cdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHQ8SW5wdXRMYWJlbFxyXG5cdFx0XHRcdFx0c2hyaW5rXHJcblx0XHRcdFx0XHRpZD0nZGVtby1zaW1wbGUtc2VsZWN0LXBsYWNlaG9sZGVyLWxhYmVsLWxhYmVsJz5cclxuXHRcdFx0XHRcdEdpdGVcclxuXHRcdFx0XHQ8L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0PENvbnRyb2xsZXJcclxuXHRcdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0XHRuYW1lPSdnaXRlU2VsZWMnXHJcblx0XHRcdFx0XHRhcz17XHJcblx0XHRcdFx0XHRcdDxTZWxlY3QgaWQ9J2RlY2xlbmNoZXVyLXNlbGVjdCcgZGVmYXVsdFZhbHVlPScnPlxyXG5cdFx0XHRcdFx0XHRcdHtnaXRlcy5tYXAoKGdpdGUpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT17Z2l0ZS5zbHVnfSBrZXk9e2dpdGUuc2x1Z30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtnaXRlLm5vbX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdDwvU2VsZWN0PlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblxyXG5cdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHQ8TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIgdXRpbHM9e0RhdGVGbnNVdGlsc30+XHJcblx0XHRcdFx0XHQ8S2V5Ym9hcmREYXRlUGlja2VyXHJcblx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0bWFyZ2luPSdub3JtYWwnXHJcblx0XHRcdFx0XHRcdGlkPSdkYXRlLXBpY2tlci1kaWFsb2cnXHJcblx0XHRcdFx0XHRcdG5hbWU9J2RhdGVEZWJ1dCdcclxuXHRcdFx0XHRcdFx0bGFiZWw9J0RhdGUgZGUgZMOpYnV0J1xyXG5cdFx0XHRcdFx0XHRmb3JtYXQ9J01NL2RkL3l5eXknXHJcblx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT0nJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17c2VsZWN0ZWREYXRlRGVidXR9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVEYXRlQ2hhbmdlRGVidXR9XHJcblx0XHRcdFx0XHRcdEtleWJvYXJkQnV0dG9uUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6ICdjaGFuZ2UgZGF0ZScsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PEtleWJvYXJkRGF0ZVBpY2tlclxyXG5cdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdC8vIGRpc2FibGVUb29sYmFyXHJcblx0XHRcdFx0XHRcdG5hbWU9J2RhdGVGaW4nXHJcblx0XHRcdFx0XHRcdGZvcm1hdD0nTU0vZGQveXl5eSdcclxuXHRcdFx0XHRcdFx0bWFyZ2luPSdub3JtYWwnXHJcblx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT0nMDIvMjUvMjAyMSdcclxuXHRcdFx0XHRcdFx0aWQ9J2RhdGUtcGlja2VyLWlubGluZSdcclxuXHRcdFx0XHRcdFx0bGFiZWw9J0RhdGUgZGUgZmluJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17c2VsZWN0ZWREYXRlRmlufVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlRGF0ZUNoYW5nZUZpbn1cclxuXHRcdFx0XHRcdFx0S2V5Ym9hcmRCdXR0b25Qcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRcdCdhcmlhLWxhYmVsJzogJ2NoYW5nZSBkYXRlJyxcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9NdWlQaWNrZXJzVXRpbHNQcm92aWRlcj5cclxuXHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHJcblx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRuYW1lPSduYlBlcnMnXHJcblx0XHRcdFx0dHlwZT0nbnVtYmVyJ1xyXG5cdFx0XHRcdGRlZmF1bHRWYWx1ZT0nMTAnXHJcblx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRsYWJlbD0nTm9tYnJlIGRlIHBlcnNvbm5lcyBhdSB0b3RhbCdcclxuXHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQvPlxyXG5cclxuXHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdG5hbWU9J25iRW5mJ1xyXG5cdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRkZWZhdWx0VmFsdWU9JzInXHJcblx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRsYWJlbD1cIk5vbWJyZSBkJ2VuZmFudHMgLTE4IGFuc1wiXHJcblx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdG5hbWU9J25iQ2hpZW4nXHJcblx0XHRcdFx0dHlwZT0nbnVtYmVyJ1xyXG5cdFx0XHRcdGRlZmF1bHRWYWx1ZT0nMCdcclxuXHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdGxhYmVsPSdDaGllbnMgKDPigqwvai9hbmltYWwpJ1xyXG5cdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblxyXG5cdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0dHlwZT0nc3VibWl0J1xyXG5cdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRjb2xvcj0ncHJpbWFyeSdcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRDYWxjdWxlciBsZSB0YXJpZlxyXG5cdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0e3ZhbHVlcyAmJiBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpfVxyXG5cdFx0PC9mb3JtPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtQ2FsY3VsVGFyaWY7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=