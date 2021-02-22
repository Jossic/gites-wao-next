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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs/plugin/isBetween */ "./node_modules/dayjs/plugin/isBetween.js");
/* harmony import */ var dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var _actions_calendarActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../actions/calendarActions */ "./actions/calendarActions.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");



var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\forms\\FormCalculTarif.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





dayjs__WEBPACK_IMPORTED_MODULE_5___default.a.extend(dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_6___default.a);





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
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

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["useForm"])(),
      control = _useForm.control,
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var classes = useStyles();
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_11__["getCookie"])('token');

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      selectedDateDebut = _React$useState2[0],
      setSelectedDateDebut = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      selectedDateFin = _React$useState4[0],
      setSelectedDateFin = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({
    dateDebut: '',
    dateFin: '',
    giteSelec: '',
    nbChien: 0,
    nbEnf: 0,
    nbPers: 0,
    prixTotal: 0,
    prixSuppl: 0,
    dejaLoueMsg: '',
    nuitee: 0
  }),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      infos = _React$useState6[0],
      setInfos = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState7, 2),
      isVacances = _React$useState8[0],
      setIsVacances = _React$useState8[1];

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
    var dateD = dayjs__WEBPACK_IMPORTED_MODULE_5___default()(dateDebut);
    var dateF = dayjs__WEBPACK_IMPORTED_MODULE_5___default()(dateFin);
    console.log(dateD);
    Object(_actions_calendarActions__WEBPACK_IMPORTED_MODULE_10__["getVacances"])(dateD, dateF).then(function (result) {
      // console.log('result vaut', result);
      setIsVacances(result.vacances); // return result.vacances;
    });
    var nuitee = dateF.diff(dateD, 'day');

    var _iterator = _createForOfIteratorHelper(gites),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var gite = _step.value;

        if (gite.slug === giteSelec) {
          console.log(gite.nom);
          Object(_actions_calendarActions__WEBPACK_IMPORTED_MODULE_10__["getDejaLoue"])(gite.calendarId, dateD, dateF).then(function (result) {
            console.log(result);

            if (result.loue) {
              setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                dejaLoueMsg: 'Il semble que ce gîte soit déjà loué aux dates indiquées'
              }));
            } else {
              setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                dejaLoueMsg: "Ce gîte semble libre pour le moment, n'hésitez pas à faire une demande de location"
              }));
            }
          }); // On récupère le gîte selectionné

          if (nuitee === 7 || nuitee === 14 || nuitee === 21) {
            if (isVacances) {
              console.log('Cas général : on est en vancances');

              if (dayjs__WEBPACK_IMPORTED_MODULE_5___default()(dateD).isBetween(dayjs__WEBPACK_IMPORTED_MODULE_5___default()().month(6), dayjs__WEBPACK_IMPORTED_MODULE_5___default()().month(7), null, '[]')) {
                console.log('on est en haute saison à la semaine');
                prixTotal = gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison + gite.coefficients.hauteSaison;
                setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                  prixTotal: prixTotal
                }));
              } else if (dayjs__WEBPACK_IMPORTED_MODULE_5___default()().dayOfYear(358).isBetween(dateD, dateF, null, '[]')) {
                console.log('on est à noel à la semaine');
                prixTotal = gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison + gite.coefficients.hauteSaison + gite.coefficients.noel;
                setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                  prixTotal: prixTotal
                }));
              } else if (dayjs__WEBPACK_IMPORTED_MODULE_5___default()().dayOfYear(365).isBetween(dateD, dateF, null, '[]')) {
                console.log('on est au nouvel an à la semaine');
                prixTotal = gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison + gite.coefficients.hauteSaison + gite.coefficients.noel + gite.coefficients.nouvelAn;
                setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                  prixTotal: prixTotal
                }));
              } else {
                console.log('On est dans le cas 7 nuitées en vacances scolaires moyenne saison'); //

                prixTotal = gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison;
                setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                  prixTotal: prixTotal
                }));
              }
            } else {
              console.log('Cas 7 nuitées hors vacances'); //

              prixTotal = gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison;
              setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                prixTotal: prixTotal
              }));
            }
          } else if (nuitee < 7) {
            console.log('Cas général : nuitées inférieure à 7');

            if (dayjs__WEBPACK_IMPORTED_MODULE_5___default()().day(6).isBetween(dateD, dateF, null, '[]')) {
              console.log('Cas en week-end moins de 7 nuits');

              if (nuitee === 1) {
                console.log('Cas week-end 1 nuit + msg avertissement'); //

                prixTotal = gite.tarifParPersParNuitftMenage + gite.tarifDeBase / 2 + gite.uneNuitee;
                setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                  prixTotal: prixTotal,
                  avertissement: 'En week end nous louons 2 nuitées, (très exceptionnelement 1 seule)'
                }));
              } else if (nuitee === 2) {
                console.log('Cas week-end 2 nuits'); //

                prixTotal = gite.tarifParPersParNuitftMenage + gite.tarifDeBase;
                setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                  prixTotal: prixTotal
                }));
              } else if (nuitee === 3) {
                console.log('Cas week-end 3 nuits'); //

                prixTotal = gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.troisNuitees;
                setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                  prixTotal: prixTotal
                }));
              } else if (nuitee === 4) {
                console.log('Cas week-end 4 nuits'); //

                prixTotal = gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.quatreNuitees;
                setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                  prixTotal: prixTotal
                }));
              } else if (nuitee === 5) {
                console.log('Cas week-end 5 nuits - Quel tarif ? Voir Maman'); //

                setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                  prixTotal: prixTotal
                }));
              } else if (nuitee === 6) {
                console.log('Cas week-end 6 nuits - Quel tarif ? Voir Maman'); //

                setInfos(_objectSpread(_objectSpread({}, infos), {}, {
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
                    prixTotal = gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 1;
                  } else {
                    prixTotal = gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 1;
                    prixSuppl = nbPers * gite.supplementParPers * 1;
                  }

                  setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                    prixTotal: prixTotal,
                    prixSuppl: prixSuppl
                  }));
                } else if (nuitee === 2) {
                  console.log('Cas hors week-end 2 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    console.log("Moins de ".concat(gite.nPers, " pers"));
                    prixTotal = gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 2;
                  } else {
                    prixTotal = gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 2;
                    prixSuppl = nbPers * gite.supplementParPers * 2;
                  }

                  setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                    prixTotal: prixTotal,
                    prixSuppl: prixSuppl
                  }));
                } else if (nuitee === 3) {
                  console.log('Cas hors week-end 3 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    prixTotal = gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 3;
                  } else {
                    prixTotal = gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 3;
                    prixSuppl = nbPers * gite.supplementParPers * 3;
                  }

                  setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                    prixTotal: prixTotal,
                    prixSuppl: prixSuppl
                  }));
                } else if (nuitee === 4) {
                  console.log('Cas hors week-end 4 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    prixTotal = gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 4;
                  } else {
                    prixTotal = gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 4;
                    prixSuppl = nbPers * gite.supplementParPers * 4;
                  }

                  setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                    prixTotal: prixTotal,
                    prixSuppl: prixSuppl
                  }));
                } else if (nuitee === 5) {
                  console.log('Cas hors week-end 5 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    prixTotal = gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 5;
                  } else {
                    prixTotal = gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 5;
                    prixSuppl = nbPers * gite.supplementParPers * 5;
                  }

                  setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                    prixTotal: prixTotal,
                    prixSuppl: prixSuppl
                  }));
                } else if (nuitee === 6) {
                  console.log('Cas hors week-end 6 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    prixTotal = gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 6;
                  } else {
                    prixTotal = gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 6;
                    prixSuppl = nbPers * gite.supplementParPers * 6;
                  }

                  setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                    prixTotal: prixTotal,
                    prixSuppl: prixSuppl
                  }));
                } else {
                  console.log('Autres cas week-end inférieur à 7 nuits - Peu probable...');
                }
              } else {
                console.log('Cas général : hors WE moins de 7 nuits mais en vacances - Tarif avec plafond'); //

                if (nuitee === 1) {
                  console.log('Cas hors week-end 1 nuit et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    prixTotal = gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 1;
                  } else {
                    prixTotal = (gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuitftMenage) / 7 * 1 + gite.tarifParPersParNuitftMenage;
                    prixSuppl = nbPers * gite.supplementParPers * 1;
                  }

                  setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                    prixTotal: prixTotal,
                    prixSuppl: prixSuppl
                  }));
                } else if (nuitee === 2) {
                  console.log('Cas hors week-end 2 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    prixTotal = gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 2;
                  } else {
                    prixTotal = (gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuitftMenage) / 7 * 2 + gite.tarifParPersParNuitftMenage;
                    prixSuppl = nbPers * gite.supplementParPers * 2;
                  }

                  setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                    prixTotal: prixTotal,
                    prixSuppl: prixSuppl
                  }));
                } else if (nuitee === 3) {
                  console.log('Cas hors week-end 3 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    prixTotal = gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 3;
                  } else {
                    prixTotal = (gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuitftMenage) / 7 * 3 + gite.tarifParPersParNuitftMenage;
                    prixSuppl = nbPers * gite.supplementParPers * 3;
                  }

                  setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                    prixTotal: prixTotal,
                    prixSuppl: prixSuppl
                  }));
                } else if (nuitee === 4) {
                  console.log('Cas hors week-end 4 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    prixTotal = gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 4;
                  } else {
                    prixTotal = (gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuitftMenage) / 7 * 4 + gite.tarifParPersParNuitftMenage;
                    prixSuppl = nbPers * gite.supplementParPers * 4;
                  }

                  setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                    prixTotal: prixTotal,
                    prixSuppl: prixSuppl
                  }));
                } else if (nuitee === 5) {
                  console.log('Cas hors week-end 5 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    prixTotal = gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 5;
                  } else {
                    prixTotal = (gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuitftMenage) / 7 * 5 + gite.tarifParPersParNuitftMenage;
                    prixSuppl = nbPers * gite.supplementParPers * 5;
                  }

                  setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                    prixTotal: prixTotal,
                    prixSuppl: prixSuppl
                  }));
                } else if (nuitee === 6) {
                  console.log('Cas hors week-end 6 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    prixTotal = gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 6;
                  } else {
                    prixTotal = (gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuitftMenage) / 7 * 6 + gite.tarifParPersParNuitftMenage;
                    prixSuppl = nbPers * gite.supplementParPers * 6;
                  }

                  setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                    prixTotal: prixTotal,
                    prixSuppl: prixSuppl
                  }));
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
  };

  return __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    className: classes.form,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 3
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputLabel"], {
    shrink: true,
    id: "demo-simple-select-placeholder-label-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560,
      columnNumber: 5
    }
  }, "Gite"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["Controller"], {
    control: control,
    name: "giteSelec",
    as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Select"], {
      id: "declencheur-select",
      defaultValue: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 569,
        columnNumber: 7
      }
    }, gites.map(function (gite) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["MenuItem"], {
        value: gite.slug,
        key: gite.slug,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571,
          columnNumber: 9
        }
      }, gite.nom);
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
      columnNumber: 5
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580,
      columnNumber: 4
    }
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_9__["MuiPickersUtilsProvider"], {
    utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581,
      columnNumber: 5
    }
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_9__["KeyboardDatePicker"], {
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
      lineNumber: 582,
      columnNumber: 6
    }
  }), __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_9__["KeyboardDatePicker"], {
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
      lineNumber: 596,
      columnNumber: 6
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
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
      lineNumber: 614,
      columnNumber: 4
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
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
      lineNumber: 627,
      columnNumber: 4
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
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
      lineNumber: 639,
      columnNumber: 4
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    type: "submit",
    variant: "contained",
    color: "primary",
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652,
      columnNumber: 4
    }
  }, "Calculer le tarif"), infos && JSON.stringify(infos));
};

_s(FormCalculTarif, "xClrKmr04VUSwfdGeooU1KInimU=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_4__["useForm"], useStyles];
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9Gb3JtQ2FsY3VsVGFyaWYuanMiXSwibmFtZXMiOlsiZGF5anMiLCJleHRlbmQiLCJpc0JldHdlZW4iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJmb3JtIiwid2lkdGgiLCJtYXJnaW4iLCJzcGFjaW5nIiwicm9vdCIsImJ1dHRvbiIsImZvcm1Db250cm9sIiwidGV4dEZpZWxkIiwiRm9ybUNhbGN1bFRhcmlmIiwiZ2l0ZXMiLCJ1c2VGb3JtIiwiY29udHJvbCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiY2xhc3NlcyIsInRva2VuIiwiZ2V0Q29va2llIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkRGF0ZURlYnV0Iiwic2V0U2VsZWN0ZWREYXRlRGVidXQiLCJzZWxlY3RlZERhdGVGaW4iLCJzZXRTZWxlY3RlZERhdGVGaW4iLCJkYXRlRGVidXQiLCJkYXRlRmluIiwiZ2l0ZVNlbGVjIiwibmJDaGllbiIsIm5iRW5mIiwibmJQZXJzIiwicHJpeFRvdGFsIiwicHJpeFN1cHBsIiwiZGVqYUxvdWVNc2ciLCJudWl0ZWUiLCJpbmZvcyIsInNldEluZm9zIiwiaXNWYWNhbmNlcyIsInNldElzVmFjYW5jZXMiLCJoYW5kbGVEYXRlQ2hhbmdlRGVidXQiLCJkYXRlIiwiaGFuZGxlRGF0ZUNoYW5nZUZpbiIsIm9uU3VibWl0IiwiZGF0YSIsImRhdGVEIiwiZGF0ZUYiLCJjb25zb2xlIiwibG9nIiwiZ2V0VmFjYW5jZXMiLCJ0aGVuIiwicmVzdWx0IiwidmFjYW5jZXMiLCJkaWZmIiwiZ2l0ZSIsInNsdWciLCJub20iLCJnZXREZWphTG91ZSIsImNhbGVuZGFySWQiLCJsb3VlIiwibW9udGgiLCJ0YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UiLCJ0YXJpZkRlQmFzZSIsImNvZWZmaWNpZW50cyIsImJhc3NlU2Fpc29uIiwibW95ZW5uZVNhaXNvbiIsImhhdXRlU2Fpc29uIiwiZGF5T2ZZZWFyIiwibm9lbCIsIm5vdXZlbEFuIiwiZGF5IiwidW5lTnVpdGVlIiwiYXZlcnRpc3NlbWVudCIsInRyb2lzTnVpdGVlcyIsInF1YXRyZU51aXRlZXMiLCJuUGVycyIsInRhcmlmUGFyUGVyc1Bhck51aXQiLCJzdXBwbGVtZW50UGFyUGVycyIsIm1hcCIsIkRhdGVGbnNVdGlscyIsInNocmluayIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSw0Q0FBSyxDQUFDQyxNQUFOLENBQWFDLDZEQUFiO0FBQ0E7QUFRQTtBQUNBO0FBS0E7QUFNQTtBQUVBLElBQU1DLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN4Q0MsUUFBSSxFQUFFO0FBQ0xDLFdBQUssRUFBRSxLQURGO0FBRUxDLFlBQU0sRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZDtBQUZILEtBRGtDO0FBS3hDQyxRQUFJLEVBQUU7QUFDTEgsV0FBSyxFQUFFO0FBREYsS0FMa0M7QUFReENJLFVBQU0sRUFBRTtBQUNQSCxZQUFNLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsQ0FERDtBQUVQRixXQUFLLEVBQUU7QUFGQSxLQVJnQztBQVl4Q0ssZUFBVyxFQUFFO0FBQ1pKLFlBQU0sRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxDQURJO0FBRVpGLFdBQUssRUFBRTtBQUZLLEtBWjJCO0FBZ0J4Q00sYUFBUyxFQUFFO0FBQ1ZMLFlBQU0sRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxDQURFO0FBRVZGLFdBQUssRUFBRTtBQUZHO0FBaEI2QixHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUFzQkEsSUFBTU8sZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxL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QUU7QUFEUSxLQVJsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakZELEVBOEZDLE1BQUMsd0RBQUQ7QUFDQyxRQUFJLEVBQUMsUUFETjtBQUVDLFdBQU8sRUFBQyxXQUZUO0FBR0MsU0FBSyxFQUFDLFNBSFA7QUFJQyxhQUFTLEVBQUUvRCxPQUFPLENBQUNULE1BSnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBOUZELEVBcUdFNEIsS0FBSyxJQUFJNkMsSUFBSSxDQUFDQyxTQUFMLENBQWU5QyxLQUFmLENBckdYLENBREQ7QUF5R0EsQ0FwbUJEOztHQUFNekIsZTtVQUN1Q0UsdUQsRUFDNUJiLFM7OztLQUZYVyxlO0FBc21CU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGFyaWZzLmI4YzQxYzM3NmY4ZjEzMTA4YWFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0ZUZuc1V0aWxzIGZyb20gJ0BkYXRlLWlvL2RhdGUtZm5zJztcclxuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBpc0JldHdlZW4gZnJvbSAnZGF5anMvcGx1Z2luL2lzQmV0d2Vlbic7XHJcbmRheWpzLmV4dGVuZChpc0JldHdlZW4pO1xyXG5pbXBvcnQge1xyXG5cdEJ1dHRvbixcclxuXHRGb3JtQ29udHJvbCxcclxuXHRJbnB1dExhYmVsLFxyXG5cdE1lbnVJdGVtLFxyXG5cdFNlbGVjdCxcclxuXHRUZXh0RmllbGQsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtcclxuXHRNdWlQaWNrZXJzVXRpbHNQcm92aWRlcixcclxuXHRLZXlib2FyZFRpbWVQaWNrZXIsXHJcblx0S2V5Ym9hcmREYXRlUGlja2VyLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9waWNrZXJzJztcclxuaW1wb3J0IHtcclxuXHRnZXRDYWxlbmRhcixcclxuXHRnZXRDYWxlbmRhckJ5SWQsXHJcblx0Z2V0RGVqYUxvdWUsXHJcblx0Z2V0VmFjYW5jZXMsXHJcbn0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9jYWxlbmRhckFjdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdGZvcm06IHtcclxuXHRcdHdpZHRoOiAnNzAlJyxcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygyKSxcclxuXHR9LFxyXG5cdHJvb3Q6IHtcclxuXHRcdHdpZHRoOiAnODAlJyxcclxuXHR9LFxyXG5cdGJ1dHRvbjoge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdFx0d2lkdGg6ICc4MCUnLFxyXG5cdH0sXHJcblx0Zm9ybUNvbnRyb2w6IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdHdpZHRoOiAnODAlJyxcclxuXHR9LFxyXG5cdHRleHRGaWVsZDoge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0d2lkdGg6ICc4MCUnLFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEZvcm1DYWxjdWxUYXJpZiA9ICh7IGdpdGVzIH0pID0+IHtcclxuXHRjb25zdCB7IGNvbnRyb2wsIHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm0oKTtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblx0Y29uc3QgW3NlbGVjdGVkRGF0ZURlYnV0LCBzZXRTZWxlY3RlZERhdGVEZWJ1dF0gPSBSZWFjdC51c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtzZWxlY3RlZERhdGVGaW4sIHNldFNlbGVjdGVkRGF0ZUZpbl0gPSBSZWFjdC51c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtpbmZvcywgc2V0SW5mb3NdID0gUmVhY3QudXNlU3RhdGUoe1xyXG5cdFx0ZGF0ZURlYnV0OiAnJyxcclxuXHRcdGRhdGVGaW46ICcnLFxyXG5cdFx0Z2l0ZVNlbGVjOiAnJyxcclxuXHRcdG5iQ2hpZW46IDAsXHJcblx0XHRuYkVuZjogMCxcclxuXHRcdG5iUGVyczogMCxcclxuXHRcdHByaXhUb3RhbDogMCxcclxuXHRcdHByaXhTdXBwbDogMCxcclxuXHRcdGRlamFMb3VlTXNnOiAnJyxcclxuXHRcdG51aXRlZTogMCxcclxuXHR9KTtcclxuXHRjb25zdCBbaXNWYWNhbmNlcywgc2V0SXNWYWNhbmNlc10gPSBSZWFjdC51c2VTdGF0ZSgpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVEYXRlQ2hhbmdlRGVidXQgPSAoZGF0ZSkgPT4ge1xyXG5cdFx0c2V0U2VsZWN0ZWREYXRlRGVidXQoZGF0ZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlRGF0ZUNoYW5nZUZpbiA9IChkYXRlKSA9PiB7XHJcblx0XHRzZXRTZWxlY3RlZERhdGVGaW4oZGF0ZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4ge1xyXG5cdFx0Y29uc3QgeyBkYXRlRGVidXQsIGRhdGVGaW4sIGdpdGVTZWxlYywgbmJDaGllbiwgbmJFbmYsIG5iUGVycyB9ID0gZGF0YTtcclxuXHRcdGNvbnN0IGRhdGVEID0gZGF5anMoZGF0ZURlYnV0KTtcclxuXHRcdGNvbnN0IGRhdGVGID0gZGF5anMoZGF0ZUZpbik7XHJcblx0XHRjb25zb2xlLmxvZyhkYXRlRCk7XHJcblx0XHRnZXRWYWNhbmNlcyhkYXRlRCwgZGF0ZUYpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZygncmVzdWx0IHZhdXQnLCByZXN1bHQpO1xyXG5cdFx0XHRzZXRJc1ZhY2FuY2VzKHJlc3VsdC52YWNhbmNlcyk7XHJcblx0XHRcdC8vIHJldHVybiByZXN1bHQudmFjYW5jZXM7XHJcblx0XHR9KTtcclxuXHJcblx0XHRjb25zdCBudWl0ZWUgPSBkYXRlRi5kaWZmKGRhdGVELCAnZGF5Jyk7XHJcblx0XHRmb3IgKGNvbnN0IGdpdGUgb2YgZ2l0ZXMpIHtcclxuXHRcdFx0aWYgKGdpdGUuc2x1ZyA9PT0gZ2l0ZVNlbGVjKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZ2l0ZS5ub20pO1xyXG5cdFx0XHRcdGdldERlamFMb3VlKGdpdGUuY2FsZW5kYXJJZCwgZGF0ZUQsIGRhdGVGKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0XHRcdFx0XHRpZiAocmVzdWx0LmxvdWUpIHtcclxuXHRcdFx0XHRcdFx0c2V0SW5mb3Moe1xyXG5cdFx0XHRcdFx0XHRcdC4uLmluZm9zLFxyXG5cdFx0XHRcdFx0XHRcdGRlamFMb3VlTXNnOlxyXG5cdFx0XHRcdFx0XHRcdFx0J0lsIHNlbWJsZSBxdWUgY2UgZ8OudGUgc29pdCBkw6lqw6AgbG91w6kgYXV4IGRhdGVzIGluZGlxdcOpZXMnLFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHNldEluZm9zKHtcclxuXHRcdFx0XHRcdFx0XHQuLi5pbmZvcyxcclxuXHRcdFx0XHRcdFx0XHRkZWphTG91ZU1zZzpcclxuXHRcdFx0XHRcdFx0XHRcdFwiQ2UgZ8OudGUgc2VtYmxlIGxpYnJlIHBvdXIgbGUgbW9tZW50LCBuJ2jDqXNpdGV6IHBhcyDDoCBmYWlyZSB1bmUgZGVtYW5kZSBkZSBsb2NhdGlvblwiLFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHQvLyBPbiByw6ljdXDDqHJlIGxlIGfDrnRlIHNlbGVjdGlvbm7DqVxyXG5cdFx0XHRcdGlmIChudWl0ZWUgPT09IDcgfHwgbnVpdGVlID09PSAxNCB8fCBudWl0ZWUgPT09IDIxKSB7XHJcblx0XHRcdFx0XHRpZiAoaXNWYWNhbmNlcykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ2FzIGfDqW7DqXJhbCA6IG9uIGVzdCBlbiB2YW5jYW5jZXMnKTtcclxuXHRcdFx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0XHRcdGRheWpzKGRhdGVEKS5pc0JldHdlZW4oXHJcblx0XHRcdFx0XHRcdFx0XHRkYXlqcygpLm1vbnRoKDYpLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGF5anMoKS5tb250aCg3KSxcclxuXHRcdFx0XHRcdFx0XHRcdG51bGwsXHJcblx0XHRcdFx0XHRcdFx0XHQnW10nXHJcblx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnb24gZXN0IGVuIGhhdXRlIHNhaXNvbiDDoCBsYSBzZW1haW5lJyk7XHJcblx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsID1cclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5oYXV0ZVNhaXNvbjtcclxuXHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7IC4uLmluZm9zLCBwcml4VG90YWwgfSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdFx0XHRcdFx0ZGF5anMoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmRheU9mWWVhcigzNTgpXHJcblx0XHRcdFx0XHRcdFx0XHQuaXNCZXR3ZWVuKGRhdGVELCBkYXRlRiwgbnVsbCwgJ1tdJylcclxuXHRcdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ29uIGVzdCDDoCBub2VsIMOgIGxhIHNlbWFpbmUnKTtcclxuXHRcdFx0XHRcdFx0XHRwcml4VG90YWwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmhhdXRlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm5vZWw7XHJcblx0XHRcdFx0XHRcdFx0c2V0SW5mb3MoeyAuLi5pbmZvcywgcHJpeFRvdGFsIH0pO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKFxyXG5cdFx0XHRcdFx0XHRcdGRheWpzKClcclxuXHRcdFx0XHRcdFx0XHRcdC5kYXlPZlllYXIoMzY1KVxyXG5cdFx0XHRcdFx0XHRcdFx0LmlzQmV0d2VlbihkYXRlRCwgZGF0ZUYsIG51bGwsICdbXScpXHJcblx0XHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdvbiBlc3QgYXUgbm91dmVsIGFuIMOgIGxhIHNlbWFpbmUnKTtcclxuXHRcdFx0XHRcdFx0XHRwcml4VG90YWwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmhhdXRlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm5vZWwgK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubm91dmVsQW47XHJcblx0XHRcdFx0XHRcdFx0c2V0SW5mb3MoeyAuLi5pbmZvcywgcHJpeFRvdGFsIH0pO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0J09uIGVzdCBkYW5zIGxlIGNhcyA3IG51aXTDqWVzIGVuIHZhY2FuY2VzIHNjb2xhaXJlcyBtb3llbm5lIHNhaXNvbidcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsID1cclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbjtcclxuXHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7IC4uLmluZm9zLCBwcml4VG90YWwgfSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdDYXMgNyBudWl0w6llcyBob3JzIHZhY2FuY2VzJyk7XHJcblx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdHByaXhUb3RhbCA9XHJcblx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uO1xyXG5cdFx0XHRcdFx0XHRzZXRJbmZvcyh7IC4uLmluZm9zLCBwcml4VG90YWwgfSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPCA3KSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ2FzIGfDqW7DqXJhbCA6IG51aXTDqWVzIGluZsOpcmlldXJlIMOgIDcnKTtcclxuXHRcdFx0XHRcdGlmIChkYXlqcygpLmRheSg2KS5pc0JldHdlZW4oZGF0ZUQsIGRhdGVGLCBudWxsLCAnW10nKSkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ2FzIGVuIHdlZWstZW5kIG1vaW5zIGRlIDcgbnVpdHMnKTtcclxuXHRcdFx0XHRcdFx0aWYgKG51aXRlZSA9PT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0J0NhcyB3ZWVrLWVuZCAxIG51aXQgKyBtc2cgYXZlcnRpc3NlbWVudCdcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsID1cclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgLyAyICtcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudW5lTnVpdGVlO1xyXG5cdFx0XHRcdFx0XHRcdHNldEluZm9zKHtcclxuXHRcdFx0XHRcdFx0XHRcdC4uLmluZm9zLFxyXG5cdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsLFxyXG5cdFx0XHRcdFx0XHRcdFx0YXZlcnRpc3NlbWVudDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0VuIHdlZWsgZW5kIG5vdXMgbG91b25zIDIgbnVpdMOpZXMsICh0csOocyBleGNlcHRpb25uZWxlbWVudCAxIHNldWxlKScsXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSAyKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyB3ZWVrLWVuZCAyIG51aXRzJyk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRwcml4VG90YWwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZTtcclxuXHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7IC4uLmluZm9zLCBwcml4VG90YWwgfSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSAzKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyB3ZWVrLWVuZCAzIG51aXRzJyk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRwcml4VG90YWwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLnRyb2lzTnVpdGVlcztcclxuXHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7IC4uLmluZm9zLCBwcml4VG90YWwgfSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA0KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyB3ZWVrLWVuZCA0IG51aXRzJyk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRwcml4VG90YWwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLnF1YXRyZU51aXRlZXM7XHJcblx0XHRcdFx0XHRcdFx0c2V0SW5mb3MoeyAuLi5pbmZvcywgcHJpeFRvdGFsIH0pO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gNSkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0J0NhcyB3ZWVrLWVuZCA1IG51aXRzIC0gUXVlbCB0YXJpZiA/IFZvaXIgTWFtYW4nXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdHNldEluZm9zKHsgLi4uaW5mb3MsIHByaXhUb3RhbCB9KTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDYpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdCdDYXMgd2Vlay1lbmQgNiBudWl0cyAtIFF1ZWwgdGFyaWYgPyBWb2lyIE1hbWFuJ1xyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7IC4uLmluZm9zLCBwcml4VG90YWwgfSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHQnQXV0cmVzIGNhcyB3ZWVrLWVuZCBpbmbDqXJpZXVyIMOgIDcgbnVpdHMgLSBQZXUgcHJvYmFibGUuLi4nXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0J0NhcyBnw6luw6lyYWwgOiBtb2lucyBkZSA3IG51aXRzIGV0IHNhbnMgc2FtZWRpJ1xyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRpZiAoaXNWYWNhbmNlcykge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0J0NhcyBnw6luw6lyYWwgOiBob3JzIFdFIG1vaW5zIGRlIDcgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcyAtIFRhcmlmIHNhbnMgdGVuaXIgY29tcHRlIGR1IHBsYWZvbmQnXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRpZiAobnVpdGVlID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDEgbnVpdCBtYWlzIGVuIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKiAxO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsID1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICogMTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFN1cHBsID1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogMTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHNldEluZm9zKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Li4uaW5mb3MsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFN1cHBsLFxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgMiBudWl0cyBtYWlzIGVuIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgTW9pbnMgZGUgJHtnaXRlLm5QZXJzfSBwZXJzYCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqIDI7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKiAyO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4U3VwcGwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiAyO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0c2V0SW5mb3Moe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQuLi5pbmZvcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOiBwcml4VG90YWwsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbCxcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSAzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDMgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsID1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICogMztcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqIDM7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDM7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC4uLmluZm9zLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWwsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbCxcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDQgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsID1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICogNDtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqIDQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDQ7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC4uLmluZm9zLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWwsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbCxcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA1KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDUgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsID1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICogNTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqIDU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDU7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC4uLmluZm9zLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWwsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbCxcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA2KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDYgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsID1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICogNjtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqIDY7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDY7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC4uLmluZm9zLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWwsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbCxcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0F1dHJlcyBjYXMgd2Vlay1lbmQgaW5mw6lyaWV1ciDDoCA3IG51aXRzIC0gUGV1IHByb2JhYmxlLi4uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHQnQ2FzIGfDqW7DqXJhbCA6IGhvcnMgV0UgbW9pbnMgZGUgNyBudWl0cyBtYWlzIGVuIHZhY2FuY2VzIC0gVGFyaWYgYXZlYyBwbGFmb25kJ1xyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRpZiAobnVpdGVlID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDEgbnVpdCBldCBob3JzIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsID1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICogMTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KChnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm1veWVubmVTYWlzb24gLVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UpIC9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcpICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDEgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4U3VwcGwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiAxO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0c2V0SW5mb3Moe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQuLi5pbmZvcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4U3VwcGwsXHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gMikge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCAyIG51aXRzIGV0IGhvcnMgdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqIDI7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCgoZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uIC1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlKSAvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ3KSAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQyICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFN1cHBsID1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogMjtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHNldEluZm9zKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Li4uaW5mb3MsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFN1cHBsLFxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgMyBudWl0cyBldCBob3JzIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKiAzO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsID1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbiAtXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSkgL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NykgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0MyArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2U7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDM7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC4uLmluZm9zLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWwsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbCxcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDQgbnVpdHMgZXQgaG9ycyB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsID1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICogNDtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KChnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm1veWVubmVTYWlzb24gLVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UpIC9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcpICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDQgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4U3VwcGwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiA0O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0c2V0SW5mb3Moe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQuLi5pbmZvcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4U3VwcGwsXHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gNSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCA1IG51aXRzIGV0IGhvcnMgdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqIDU7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCgoZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uIC1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlKSAvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ3KSAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ1ICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFN1cHBsID1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogNTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHNldEluZm9zKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Li4uaW5mb3MsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFN1cHBsLFxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDYpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgNiBudWl0cyBldCBob3JzIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKiA2O1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsID1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbiAtXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSkgL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NykgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2U7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDY7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC4uLmluZm9zLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWwsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbCxcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnQXV0cmVzIGNhcyBudWl0ID4gNyBldCAhPT0gZGUgMTQgZXQgMjEnKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdHw6lyZXIgY2FzID4zMCBpY2knKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cclxuXHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0PElucHV0TGFiZWxcclxuXHRcdFx0XHRcdHNocmlua1xyXG5cdFx0XHRcdFx0aWQ9J2RlbW8tc2ltcGxlLXNlbGVjdC1wbGFjZWhvbGRlci1sYWJlbC1sYWJlbCc+XHJcblx0XHRcdFx0XHRHaXRlXHJcblx0XHRcdFx0PC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0bmFtZT0nZ2l0ZVNlbGVjJ1xyXG5cdFx0XHRcdFx0YXM9e1xyXG5cdFx0XHRcdFx0XHQ8U2VsZWN0IGlkPSdkZWNsZW5jaGV1ci1zZWxlY3QnIGRlZmF1bHRWYWx1ZT0nJz5cclxuXHRcdFx0XHRcdFx0XHR7Z2l0ZXMubWFwKChnaXRlKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9e2dpdGUuc2x1Z30ga2V5PXtnaXRlLnNsdWd9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Z2l0ZS5ub219XHJcblx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHQ8L1NlbGVjdD5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cclxuXHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0PE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyIHV0aWxzPXtEYXRlRm5zVXRpbHN9PlxyXG5cdFx0XHRcdFx0PEtleWJvYXJkRGF0ZVBpY2tlclxyXG5cdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdG1hcmdpbj0nbm9ybWFsJ1xyXG5cdFx0XHRcdFx0XHRpZD0nZGF0ZS1waWNrZXItZGlhbG9nJ1xyXG5cdFx0XHRcdFx0XHRuYW1lPSdkYXRlRGVidXQnXHJcblx0XHRcdFx0XHRcdGxhYmVsPSdEYXRlIGRlIGTDqWJ1dCdcclxuXHRcdFx0XHRcdFx0Zm9ybWF0PSdNTS9kZC95eXl5J1xyXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9JydcclxuXHRcdFx0XHRcdFx0dmFsdWU9e3NlbGVjdGVkRGF0ZURlYnV0fVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlRGF0ZUNoYW5nZURlYnV0fVxyXG5cdFx0XHRcdFx0XHRLZXlib2FyZEJ1dHRvblByb3BzPXt7XHJcblx0XHRcdFx0XHRcdFx0J2FyaWEtbGFiZWwnOiAnY2hhbmdlIGRhdGUnLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxLZXlib2FyZERhdGVQaWNrZXJcclxuXHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHQvLyBkaXNhYmxlVG9vbGJhclxyXG5cdFx0XHRcdFx0XHRuYW1lPSdkYXRlRmluJ1xyXG5cdFx0XHRcdFx0XHRmb3JtYXQ9J01NL2RkL3l5eXknXHJcblx0XHRcdFx0XHRcdG1hcmdpbj0nbm9ybWFsJ1xyXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9JzAyLzI1LzIwMjEnXHJcblx0XHRcdFx0XHRcdGlkPSdkYXRlLXBpY2tlci1pbmxpbmUnXHJcblx0XHRcdFx0XHRcdGxhYmVsPSdEYXRlIGRlIGZpbidcclxuXHRcdFx0XHRcdFx0dmFsdWU9e3NlbGVjdGVkRGF0ZUZpbn1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZURhdGVDaGFuZ2VGaW59XHJcblx0XHRcdFx0XHRcdEtleWJvYXJkQnV0dG9uUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6ICdjaGFuZ2UgZGF0ZScsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXI+XHJcblx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblxyXG5cdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuXHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0bmFtZT0nbmJQZXJzJ1xyXG5cdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRkZWZhdWx0VmFsdWU9JzEwJ1xyXG5cdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0bGFiZWw9J05vbWJyZSBkZSBwZXJzb25uZXMgYXUgdG90YWwnXHJcblx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHJcblx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRuYW1lPSduYkVuZidcclxuXHRcdFx0XHR0eXBlPSdudW1iZXInXHJcblx0XHRcdFx0ZGVmYXVsdFZhbHVlPScyJ1xyXG5cdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0bGFiZWw9XCJOb21icmUgZCdlbmZhbnRzIC0xOCBhbnNcIlxyXG5cdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRuYW1lPSduYkNoaWVuJ1xyXG5cdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRkZWZhdWx0VmFsdWU9JzAnXHJcblx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRsYWJlbD0nQ2hpZW5zICgz4oKsL2ovYW5pbWFsKSdcclxuXHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQvPlxyXG5cclxuXHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdHR5cGU9J3N1Ym1pdCdcclxuXHRcdFx0XHR2YXJpYW50PSdjb250YWluZWQnXHJcblx0XHRcdFx0Y29sb3I9J3ByaW1hcnknXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0Q2FsY3VsZXIgbGUgdGFyaWZcclxuXHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdHtpbmZvcyAmJiBKU09OLnN0cmluZ2lmeShpbmZvcyl9XHJcblx0XHQ8L2Zvcm0+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1DYWxjdWxUYXJpZjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==