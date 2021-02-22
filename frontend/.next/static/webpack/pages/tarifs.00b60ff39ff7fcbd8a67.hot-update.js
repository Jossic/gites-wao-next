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

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





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
    setInfos(_objectSpread(_objectSpread({}, infos), {}, {
      dateDebut: dateD,
      dateFin: dateF,
      giteSelec: '',
      nbChien: 0,
      nbEnf: 0,
      nbPers: 0,
      prixTotal: 0,
      prixSuppl: 0,
      dejaLoueMsg: '',
      nuitee: 0
    }));

    var _iterator = _createForOfIteratorHelper(gites),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var gite = _step.value;

        if (gite.slug === giteSelec) {
          setInfos(_objectSpread(_objectSpread({}, infos), {}, {
            dateDebut: dateD,
            dateFin: dateF,
            giteSelec: gite.nom,
            nbChien: nbChien,
            nbEnf: nbEnf,
            nbPers: nbPers,
            nuitee: nuitee
          }));
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
      lineNumber: 582,
      columnNumber: 3
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputLabel"], {
    shrink: true,
    id: "demo-simple-select-placeholder-label-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584,
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
        lineNumber: 593,
        columnNumber: 7
      }
    }, gites.map(function (gite) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["MenuItem"], {
        value: gite.slug,
        key: gite.slug,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595,
          columnNumber: 9
        }
      }, gite.nom);
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589,
      columnNumber: 5
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604,
      columnNumber: 4
    }
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_9__["MuiPickersUtilsProvider"], {
    utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605,
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
      lineNumber: 606,
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
      lineNumber: 620,
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
      lineNumber: 638,
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
      lineNumber: 651,
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
      lineNumber: 663,
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
      lineNumber: 676,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9Gb3JtQ2FsY3VsVGFyaWYuanMiXSwibmFtZXMiOlsiZGF5anMiLCJleHRlbmQiLCJpc0JldHdlZW4iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJmb3JtIiwid2lkdGgiLCJtYXJnaW4iLCJzcGFjaW5nIiwicm9vdCIsImJ1dHRvbiIsImZvcm1Db250cm9sIiwidGV4dEZpZWxkIiwiRm9ybUNhbGN1bFRhcmlmIiwiZ2l0ZXMiLCJ1c2VGb3JtIiwiY29udHJvbCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiY2xhc3NlcyIsInRva2VuIiwiZ2V0Q29va2llIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkRGF0ZURlYnV0Iiwic2V0U2VsZWN0ZWREYXRlRGVidXQiLCJzZWxlY3RlZERhdGVGaW4iLCJzZXRTZWxlY3RlZERhdGVGaW4iLCJkYXRlRGVidXQiLCJkYXRlRmluIiwiZ2l0ZVNlbGVjIiwibmJDaGllbiIsIm5iRW5mIiwibmJQZXJzIiwicHJpeFRvdGFsIiwicHJpeFN1cHBsIiwiZGVqYUxvdWVNc2ciLCJudWl0ZWUiLCJpbmZvcyIsInNldEluZm9zIiwiaXNWYWNhbmNlcyIsInNldElzVmFjYW5jZXMiLCJoYW5kbGVEYXRlQ2hhbmdlRGVidXQiLCJkYXRlIiwiaGFuZGxlRGF0ZUNoYW5nZUZpbiIsIm9uU3VibWl0IiwiZGF0YSIsImRhdGVEIiwiZGF0ZUYiLCJjb25zb2xlIiwibG9nIiwiZ2V0VmFjYW5jZXMiLCJ0aGVuIiwicmVzdWx0IiwidmFjYW5jZXMiLCJkaWZmIiwiZ2l0ZSIsInNsdWciLCJub20iLCJnZXREZWphTG91ZSIsImNhbGVuZGFySWQiLCJsb3VlIiwibW9udGgiLCJ0YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UiLCJ0YXJpZkRlQmFzZSIsImNvZWZmaWNpZW50cyIsImJhc3NlU2Fpc29uIiwibW95ZW5uZVNhaXNvbiIsImhhdXRlU2Fpc29uIiwiZGF5T2ZZZWFyIiwibm9lbCIsIm5vdXZlbEFuIiwiZGF5IiwidW5lTnVpdGVlIiwiYXZlcnRpc3NlbWVudCIsInRyb2lzTnVpdGVlcyIsInF1YXRyZU51aXRlZXMiLCJuUGVycyIsInRhcmlmUGFyUGVyc1Bhck51aXQiLCJzdXBwbGVtZW50UGFyUGVycyIsIm1hcCIsIkRhdGVGbnNVdGlscyIsInNocmluayIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSw0Q0FBSyxDQUFDQyxNQUFOLENBQWFDLDZEQUFiO0FBQ0E7QUFRQTtBQUNBO0FBS0E7QUFNQTtBQUVBLElBQU1DLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN4Q0MsUUFBSSxFQUFFO0FBQ0xDLFdBQUssRUFBRSxLQURGO0FBRUxDLFlBQU0sRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZDtBQUZILEtBRGtDO0FBS3hDQyxRQUFJLEVBQUU7QUFDTEgsV0FBSyxFQUFFO0FBREYsS0FMa0M7QUFReENJLFVBQU0sRUFBRTtBQUNQSCxZQUFNLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsQ0FERDtBQUVQRixXQUFLLEVBQUU7QUFGQSxLQVJnQztBQVl4Q0ssZUFBVyxFQUFFO0FBQ1pKLFlBQU0sRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxDQURJO0FBRVpGLFdBQUssRUFBRTtBQUZLLEtBWjJCO0FBZ0J4Q00sYUFBUyxFQUFFO0FBQ1ZMLFlBQU0sRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxDQURFO0FBRVZGLFdBQUssRUFBRTtBQUZHO0FBaEI2QixHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUFzQkEsSUFBTU8sZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxL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QUFEO0FBQ0MsYUFBUyxFQUFFL0QsT0FBTyxDQUFDUCxTQURwQjtBQUVDLFlBQVEsRUFBRUssUUFGWDtBQUdDLFFBQUksRUFBQyxPQUhOO0FBSUMsUUFBSSxFQUFDLFFBSk47QUFLQyxnQkFBWSxFQUFDLEdBTGQ7QUFNQyxNQUFFLEVBQUMsaUJBTko7QUFPQyxTQUFLLEVBQUMsMEJBUFA7QUFRQyxtQkFBZSxFQUFFO0FBQ2hCaUUsWUFBTSxFQUFFO0FBRFEsS0FSbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJFRCxFQWlGQyxNQUFDLDJEQUFEO0FBQ0MsYUFBUyxFQUFFL0QsT0FBTyxDQUFDUCxTQURwQjtBQUVDLFlBQVEsRUFBRUssUUFGWDtBQUdDLFFBQUksRUFBQyxTQUhOO0FBSUMsUUFBSSxFQUFDLFFBSk47QUFLQyxnQkFBWSxFQUFDLEdBTGQ7QUFNQyxNQUFFLEVBQUMsaUJBTko7QUFPQyxTQUFLLEVBQUMsMkJBUFA7QUFRQyxtQkFBZSxFQUFFO0FBQ2hCaUUsWUFBTSxFQUFFO0FBRFEsS0FSbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpGRCxFQThGQyxNQUFDLHdEQUFEO0FBQ0MsUUFBSSxFQUFDLFFBRE47QUFFQyxXQUFPLEVBQUMsV0FGVDtBQUdDLFNBQUssRUFBQyxTQUhQO0FBSUMsYUFBUyxFQUFFL0QsT0FBTyxDQUFDVCxNQUpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQTlGRCxFQXFHRTRCLEtBQUssSUFBSTZDLElBQUksQ0FBQ0MsU0FBTCxDQUFlOUMsS0FBZixDQXJHWCxDQUREO0FBeUdBLENBNW5CRDs7R0FBTXpCLGU7VUFDdUNFLHVELEVBQzVCYixTOzs7S0FGWFcsZTtBQThuQlNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rhcmlmcy4wMGI2MGZmMzlmZjdmY2JkOGE2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGVGbnNVdGlscyBmcm9tICdAZGF0ZS1pby9kYXRlLWZucyc7XHJcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgaXNCZXR3ZWVuIGZyb20gJ2RheWpzL3BsdWdpbi9pc0JldHdlZW4nO1xyXG5kYXlqcy5leHRlbmQoaXNCZXR3ZWVuKTtcclxuaW1wb3J0IHtcclxuXHRCdXR0b24sXHJcblx0Rm9ybUNvbnRyb2wsXHJcblx0SW5wdXRMYWJlbCxcclxuXHRNZW51SXRlbSxcclxuXHRTZWxlY3QsXHJcblx0VGV4dEZpZWxkLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7XHJcblx0TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIsXHJcblx0S2V5Ym9hcmRUaW1lUGlja2VyLFxyXG5cdEtleWJvYXJkRGF0ZVBpY2tlcixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvcGlja2Vycyc7XHJcbmltcG9ydCB7XHJcblx0Z2V0Q2FsZW5kYXIsXHJcblx0Z2V0Q2FsZW5kYXJCeUlkLFxyXG5cdGdldERlamFMb3VlLFxyXG5cdGdldFZhY2FuY2VzLFxyXG59IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvY2FsZW5kYXJBY3Rpb25zJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRmb3JtOiB7XHJcblx0XHR3aWR0aDogJzcwJScsXHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0fSxcclxuXHRyb290OiB7XHJcblx0XHR3aWR0aDogJzgwJScsXHJcblx0fSxcclxuXHRidXR0b246IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygyKSxcclxuXHRcdHdpZHRoOiAnODAlJyxcclxuXHR9LFxyXG5cdGZvcm1Db250cm9sOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHR3aWR0aDogJzgwJScsXHJcblx0fSxcclxuXHR0ZXh0RmllbGQ6IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdHdpZHRoOiAnODAlJyxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5jb25zdCBGb3JtQ2FsY3VsVGFyaWYgPSAoeyBnaXRlcyB9KSA9PiB7XHJcblx0Y29uc3QgeyBjb250cm9sLCByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKCk7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cdGNvbnN0IFtzZWxlY3RlZERhdGVEZWJ1dCwgc2V0U2VsZWN0ZWREYXRlRGVidXRdID0gUmVhY3QudXNlU3RhdGUoKTtcclxuXHRjb25zdCBbc2VsZWN0ZWREYXRlRmluLCBzZXRTZWxlY3RlZERhdGVGaW5dID0gUmVhY3QudXNlU3RhdGUoKTtcclxuXHRjb25zdCBbaW5mb3MsIHNldEluZm9zXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuXHRcdGRhdGVEZWJ1dDogJycsXHJcblx0XHRkYXRlRmluOiAnJyxcclxuXHRcdGdpdGVTZWxlYzogJycsXHJcblx0XHRuYkNoaWVuOiAwLFxyXG5cdFx0bmJFbmY6IDAsXHJcblx0XHRuYlBlcnM6IDAsXHJcblx0XHRwcml4VG90YWw6IDAsXHJcblx0XHRwcml4U3VwcGw6IDAsXHJcblx0XHRkZWphTG91ZU1zZzogJycsXHJcblx0XHRudWl0ZWU6IDAsXHJcblx0fSk7XHJcblx0Y29uc3QgW2lzVmFjYW5jZXMsIHNldElzVmFjYW5jZXNdID0gUmVhY3QudXNlU3RhdGUoKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlRGF0ZUNoYW5nZURlYnV0ID0gKGRhdGUpID0+IHtcclxuXHRcdHNldFNlbGVjdGVkRGF0ZURlYnV0KGRhdGUpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZURhdGVDaGFuZ2VGaW4gPSAoZGF0ZSkgPT4ge1xyXG5cdFx0c2V0U2VsZWN0ZWREYXRlRmluKGRhdGUpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IHtcclxuXHRcdGNvbnN0IHsgZGF0ZURlYnV0LCBkYXRlRmluLCBnaXRlU2VsZWMsIG5iQ2hpZW4sIG5iRW5mLCBuYlBlcnMgfSA9IGRhdGE7XHJcblx0XHRjb25zdCBkYXRlRCA9IGRheWpzKGRhdGVEZWJ1dCk7XHJcblx0XHRjb25zdCBkYXRlRiA9IGRheWpzKGRhdGVGaW4pO1xyXG5cdFx0Y29uc29sZS5sb2coZGF0ZUQpO1xyXG5cdFx0Z2V0VmFjYW5jZXMoZGF0ZUQsIGRhdGVGKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ3Jlc3VsdCB2YXV0JywgcmVzdWx0KTtcclxuXHRcdFx0c2V0SXNWYWNhbmNlcyhyZXN1bHQudmFjYW5jZXMpO1xyXG5cdFx0XHQvLyByZXR1cm4gcmVzdWx0LnZhY2FuY2VzO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgbnVpdGVlID0gZGF0ZUYuZGlmZihkYXRlRCwgJ2RheScpO1xyXG5cclxuXHRcdHNldEluZm9zKHtcclxuXHRcdFx0Li4uaW5mb3MsXHJcblx0XHRcdGRhdGVEZWJ1dDogZGF0ZUQsXHJcblx0XHRcdGRhdGVGaW46IGRhdGVGLFxyXG5cdFx0XHRnaXRlU2VsZWM6ICcnLFxyXG5cdFx0XHRuYkNoaWVuOiAwLFxyXG5cdFx0XHRuYkVuZjogMCxcclxuXHRcdFx0bmJQZXJzOiAwLFxyXG5cdFx0XHRwcml4VG90YWw6IDAsXHJcblx0XHRcdHByaXhTdXBwbDogMCxcclxuXHRcdFx0ZGVqYUxvdWVNc2c6ICcnLFxyXG5cdFx0XHRudWl0ZWU6IDAsXHJcblx0XHR9KTtcclxuXHRcdGZvciAoY29uc3QgZ2l0ZSBvZiBnaXRlcykge1xyXG5cdFx0XHRpZiAoZ2l0ZS5zbHVnID09PSBnaXRlU2VsZWMpIHtcclxuXHRcdFx0XHRzZXRJbmZvcyh7XHJcblx0XHRcdFx0XHQuLi5pbmZvcyxcclxuXHRcdFx0XHRcdGRhdGVEZWJ1dDogZGF0ZUQsXHJcblx0XHRcdFx0XHRkYXRlRmluOiBkYXRlRixcclxuXHRcdFx0XHRcdGdpdGVTZWxlYzogZ2l0ZS5ub20sXHJcblx0XHRcdFx0XHRuYkNoaWVuLFxyXG5cdFx0XHRcdFx0bmJFbmYsXHJcblx0XHRcdFx0XHRuYlBlcnMsXHJcblx0XHRcdFx0XHRudWl0ZWUsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZ2l0ZS5ub20pO1xyXG5cdFx0XHRcdGdldERlamFMb3VlKGdpdGUuY2FsZW5kYXJJZCwgZGF0ZUQsIGRhdGVGKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0XHRcdFx0XHRpZiAocmVzdWx0LmxvdWUpIHtcclxuXHRcdFx0XHRcdFx0c2V0SW5mb3Moe1xyXG5cdFx0XHRcdFx0XHRcdC4uLmluZm9zLFxyXG5cdFx0XHRcdFx0XHRcdGRlamFMb3VlTXNnOlxyXG5cdFx0XHRcdFx0XHRcdFx0J0lsIHNlbWJsZSBxdWUgY2UgZ8OudGUgc29pdCBkw6lqw6AgbG91w6kgYXV4IGRhdGVzIGluZGlxdcOpZXMnLFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHNldEluZm9zKHtcclxuXHRcdFx0XHRcdFx0XHQuLi5pbmZvcyxcclxuXHRcdFx0XHRcdFx0XHRkZWphTG91ZU1zZzpcclxuXHRcdFx0XHRcdFx0XHRcdFwiQ2UgZ8OudGUgc2VtYmxlIGxpYnJlIHBvdXIgbGUgbW9tZW50LCBuJ2jDqXNpdGV6IHBhcyDDoCBmYWlyZSB1bmUgZGVtYW5kZSBkZSBsb2NhdGlvblwiLFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHQvLyBPbiByw6ljdXDDqHJlIGxlIGfDrnRlIHNlbGVjdGlvbm7DqVxyXG5cdFx0XHRcdGlmIChudWl0ZWUgPT09IDcgfHwgbnVpdGVlID09PSAxNCB8fCBudWl0ZWUgPT09IDIxKSB7XHJcblx0XHRcdFx0XHRpZiAoaXNWYWNhbmNlcykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ2FzIGfDqW7DqXJhbCA6IG9uIGVzdCBlbiB2YW5jYW5jZXMnKTtcclxuXHRcdFx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0XHRcdGRheWpzKGRhdGVEKS5pc0JldHdlZW4oXHJcblx0XHRcdFx0XHRcdFx0XHRkYXlqcygpLm1vbnRoKDYpLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGF5anMoKS5tb250aCg3KSxcclxuXHRcdFx0XHRcdFx0XHRcdG51bGwsXHJcblx0XHRcdFx0XHRcdFx0XHQnW10nXHJcblx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnb24gZXN0IGVuIGhhdXRlIHNhaXNvbiDDoCBsYSBzZW1haW5lJyk7XHJcblx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsID1cclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5oYXV0ZVNhaXNvbjtcclxuXHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7IC4uLmluZm9zLCBwcml4VG90YWwgfSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdFx0XHRcdFx0ZGF5anMoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmRheU9mWWVhcigzNTgpXHJcblx0XHRcdFx0XHRcdFx0XHQuaXNCZXR3ZWVuKGRhdGVELCBkYXRlRiwgbnVsbCwgJ1tdJylcclxuXHRcdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ29uIGVzdCDDoCBub2VsIMOgIGxhIHNlbWFpbmUnKTtcclxuXHRcdFx0XHRcdFx0XHRwcml4VG90YWwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmhhdXRlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm5vZWw7XHJcblx0XHRcdFx0XHRcdFx0c2V0SW5mb3MoeyAuLi5pbmZvcywgcHJpeFRvdGFsIH0pO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKFxyXG5cdFx0XHRcdFx0XHRcdGRheWpzKClcclxuXHRcdFx0XHRcdFx0XHRcdC5kYXlPZlllYXIoMzY1KVxyXG5cdFx0XHRcdFx0XHRcdFx0LmlzQmV0d2VlbihkYXRlRCwgZGF0ZUYsIG51bGwsICdbXScpXHJcblx0XHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdvbiBlc3QgYXUgbm91dmVsIGFuIMOgIGxhIHNlbWFpbmUnKTtcclxuXHRcdFx0XHRcdFx0XHRwcml4VG90YWwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmhhdXRlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm5vZWwgK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubm91dmVsQW47XHJcblx0XHRcdFx0XHRcdFx0c2V0SW5mb3MoeyAuLi5pbmZvcywgcHJpeFRvdGFsIH0pO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0J09uIGVzdCBkYW5zIGxlIGNhcyA3IG51aXTDqWVzIGVuIHZhY2FuY2VzIHNjb2xhaXJlcyBtb3llbm5lIHNhaXNvbidcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsID1cclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbjtcclxuXHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7IC4uLmluZm9zLCBwcml4VG90YWwgfSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdDYXMgNyBudWl0w6llcyBob3JzIHZhY2FuY2VzJyk7XHJcblx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdHByaXhUb3RhbCA9XHJcblx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uO1xyXG5cdFx0XHRcdFx0XHRzZXRJbmZvcyh7IC4uLmluZm9zLCBwcml4VG90YWwgfSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPCA3KSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ2FzIGfDqW7DqXJhbCA6IG51aXTDqWVzIGluZsOpcmlldXJlIMOgIDcnKTtcclxuXHRcdFx0XHRcdGlmIChkYXlqcygpLmRheSg2KS5pc0JldHdlZW4oZGF0ZUQsIGRhdGVGLCBudWxsLCAnW10nKSkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ2FzIGVuIHdlZWstZW5kIG1vaW5zIGRlIDcgbnVpdHMnKTtcclxuXHRcdFx0XHRcdFx0aWYgKG51aXRlZSA9PT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0J0NhcyB3ZWVrLWVuZCAxIG51aXQgKyBtc2cgYXZlcnRpc3NlbWVudCdcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsID1cclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgLyAyICtcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudW5lTnVpdGVlO1xyXG5cdFx0XHRcdFx0XHRcdHNldEluZm9zKHtcclxuXHRcdFx0XHRcdFx0XHRcdC4uLmluZm9zLFxyXG5cdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsLFxyXG5cdFx0XHRcdFx0XHRcdFx0YXZlcnRpc3NlbWVudDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0VuIHdlZWsgZW5kIG5vdXMgbG91b25zIDIgbnVpdMOpZXMsICh0csOocyBleGNlcHRpb25uZWxlbWVudCAxIHNldWxlKScsXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSAyKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyB3ZWVrLWVuZCAyIG51aXRzJyk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRwcml4VG90YWwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZTtcclxuXHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7IC4uLmluZm9zLCBwcml4VG90YWwgfSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSAzKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyB3ZWVrLWVuZCAzIG51aXRzJyk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRwcml4VG90YWwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLnRyb2lzTnVpdGVlcztcclxuXHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7IC4uLmluZm9zLCBwcml4VG90YWwgfSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA0KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyB3ZWVrLWVuZCA0IG51aXRzJyk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRwcml4VG90YWwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLnF1YXRyZU51aXRlZXM7XHJcblx0XHRcdFx0XHRcdFx0c2V0SW5mb3MoeyAuLi5pbmZvcywgcHJpeFRvdGFsIH0pO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gNSkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0J0NhcyB3ZWVrLWVuZCA1IG51aXRzIC0gUXVlbCB0YXJpZiA/IFZvaXIgTWFtYW4nXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdHNldEluZm9zKHsgLi4uaW5mb3MsIHByaXhUb3RhbCB9KTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDYpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdCdDYXMgd2Vlay1lbmQgNiBudWl0cyAtIFF1ZWwgdGFyaWYgPyBWb2lyIE1hbWFuJ1xyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7IC4uLmluZm9zLCBwcml4VG90YWwgfSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHQnQXV0cmVzIGNhcyB3ZWVrLWVuZCBpbmbDqXJpZXVyIMOgIDcgbnVpdHMgLSBQZXUgcHJvYmFibGUuLi4nXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0J0NhcyBnw6luw6lyYWwgOiBtb2lucyBkZSA3IG51aXRzIGV0IHNhbnMgc2FtZWRpJ1xyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRpZiAoaXNWYWNhbmNlcykge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0J0NhcyBnw6luw6lyYWwgOiBob3JzIFdFIG1vaW5zIGRlIDcgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcyAtIFRhcmlmIHNhbnMgdGVuaXIgY29tcHRlIGR1IHBsYWZvbmQnXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRpZiAobnVpdGVlID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDEgbnVpdCBtYWlzIGVuIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKiAxO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsID1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICogMTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFN1cHBsID1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogMTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHNldEluZm9zKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Li4uaW5mb3MsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFN1cHBsLFxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgMiBudWl0cyBtYWlzIGVuIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgTW9pbnMgZGUgJHtnaXRlLm5QZXJzfSBwZXJzYCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqIDI7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKiAyO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4U3VwcGwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiAyO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0c2V0SW5mb3Moe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQuLi5pbmZvcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOiBwcml4VG90YWwsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbCxcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSAzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDMgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsID1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICogMztcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqIDM7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDM7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC4uLmluZm9zLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWwsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbCxcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDQgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsID1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICogNDtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqIDQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDQ7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC4uLmluZm9zLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWwsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbCxcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA1KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDUgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsID1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICogNTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqIDU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDU7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC4uLmluZm9zLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWwsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbCxcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA2KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDYgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsID1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICogNjtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqIDY7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDY7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC4uLmluZm9zLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWwsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbCxcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0F1dHJlcyBjYXMgd2Vlay1lbmQgaW5mw6lyaWV1ciDDoCA3IG51aXRzIC0gUGV1IHByb2JhYmxlLi4uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHQnQ2FzIGfDqW7DqXJhbCA6IGhvcnMgV0UgbW9pbnMgZGUgNyBudWl0cyBtYWlzIGVuIHZhY2FuY2VzIC0gVGFyaWYgYXZlYyBwbGFmb25kJ1xyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRpZiAobnVpdGVlID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDEgbnVpdCBldCBob3JzIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsID1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICogMTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KChnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm1veWVubmVTYWlzb24gLVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UpIC9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcpICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDEgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4U3VwcGwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiAxO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0c2V0SW5mb3Moe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQuLi5pbmZvcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4U3VwcGwsXHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gMikge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCAyIG51aXRzIGV0IGhvcnMgdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqIDI7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCgoZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uIC1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlKSAvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ3KSAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQyICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFN1cHBsID1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogMjtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHNldEluZm9zKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Li4uaW5mb3MsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFN1cHBsLFxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgMyBudWl0cyBldCBob3JzIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKiAzO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsID1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbiAtXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSkgL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NykgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0MyArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2U7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDM7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC4uLmluZm9zLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWwsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbCxcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDQgbnVpdHMgZXQgaG9ycyB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsID1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICogNDtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KChnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm1veWVubmVTYWlzb24gLVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UpIC9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcpICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDQgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4U3VwcGwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiA0O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0c2V0SW5mb3Moe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQuLi5pbmZvcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4U3VwcGwsXHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gNSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCA1IG51aXRzIGV0IGhvcnMgdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqIDU7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCgoZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uIC1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlKSAvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ3KSAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ1ICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFN1cHBsID1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogNTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHNldEluZm9zKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Li4uaW5mb3MsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFN1cHBsLFxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDYpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgNiBudWl0cyBldCBob3JzIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKiA2O1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsID1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbiAtXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSkgL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NykgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2U7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDY7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC4uLmluZm9zLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWwsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbCxcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnQXV0cmVzIGNhcyBudWl0ID4gNyBldCAhPT0gZGUgMTQgZXQgMjEnKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdHw6lyZXIgY2FzID4zMCBpY2knKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cclxuXHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0PElucHV0TGFiZWxcclxuXHRcdFx0XHRcdHNocmlua1xyXG5cdFx0XHRcdFx0aWQ9J2RlbW8tc2ltcGxlLXNlbGVjdC1wbGFjZWhvbGRlci1sYWJlbC1sYWJlbCc+XHJcblx0XHRcdFx0XHRHaXRlXHJcblx0XHRcdFx0PC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0bmFtZT0nZ2l0ZVNlbGVjJ1xyXG5cdFx0XHRcdFx0YXM9e1xyXG5cdFx0XHRcdFx0XHQ8U2VsZWN0IGlkPSdkZWNsZW5jaGV1ci1zZWxlY3QnIGRlZmF1bHRWYWx1ZT0nJz5cclxuXHRcdFx0XHRcdFx0XHR7Z2l0ZXMubWFwKChnaXRlKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9e2dpdGUuc2x1Z30ga2V5PXtnaXRlLnNsdWd9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Z2l0ZS5ub219XHJcblx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHQ8L1NlbGVjdD5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cclxuXHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0PE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyIHV0aWxzPXtEYXRlRm5zVXRpbHN9PlxyXG5cdFx0XHRcdFx0PEtleWJvYXJkRGF0ZVBpY2tlclxyXG5cdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdG1hcmdpbj0nbm9ybWFsJ1xyXG5cdFx0XHRcdFx0XHRpZD0nZGF0ZS1waWNrZXItZGlhbG9nJ1xyXG5cdFx0XHRcdFx0XHRuYW1lPSdkYXRlRGVidXQnXHJcblx0XHRcdFx0XHRcdGxhYmVsPSdEYXRlIGRlIGTDqWJ1dCdcclxuXHRcdFx0XHRcdFx0Zm9ybWF0PSdNTS9kZC95eXl5J1xyXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9JydcclxuXHRcdFx0XHRcdFx0dmFsdWU9e3NlbGVjdGVkRGF0ZURlYnV0fVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlRGF0ZUNoYW5nZURlYnV0fVxyXG5cdFx0XHRcdFx0XHRLZXlib2FyZEJ1dHRvblByb3BzPXt7XHJcblx0XHRcdFx0XHRcdFx0J2FyaWEtbGFiZWwnOiAnY2hhbmdlIGRhdGUnLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxLZXlib2FyZERhdGVQaWNrZXJcclxuXHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHQvLyBkaXNhYmxlVG9vbGJhclxyXG5cdFx0XHRcdFx0XHRuYW1lPSdkYXRlRmluJ1xyXG5cdFx0XHRcdFx0XHRmb3JtYXQ9J01NL2RkL3l5eXknXHJcblx0XHRcdFx0XHRcdG1hcmdpbj0nbm9ybWFsJ1xyXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9JzAyLzI1LzIwMjEnXHJcblx0XHRcdFx0XHRcdGlkPSdkYXRlLXBpY2tlci1pbmxpbmUnXHJcblx0XHRcdFx0XHRcdGxhYmVsPSdEYXRlIGRlIGZpbidcclxuXHRcdFx0XHRcdFx0dmFsdWU9e3NlbGVjdGVkRGF0ZUZpbn1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZURhdGVDaGFuZ2VGaW59XHJcblx0XHRcdFx0XHRcdEtleWJvYXJkQnV0dG9uUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6ICdjaGFuZ2UgZGF0ZScsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXI+XHJcblx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblxyXG5cdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuXHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0bmFtZT0nbmJQZXJzJ1xyXG5cdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRkZWZhdWx0VmFsdWU9JzEwJ1xyXG5cdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0bGFiZWw9J05vbWJyZSBkZSBwZXJzb25uZXMgYXUgdG90YWwnXHJcblx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHJcblx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRuYW1lPSduYkVuZidcclxuXHRcdFx0XHR0eXBlPSdudW1iZXInXHJcblx0XHRcdFx0ZGVmYXVsdFZhbHVlPScyJ1xyXG5cdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0bGFiZWw9XCJOb21icmUgZCdlbmZhbnRzIC0xOCBhbnNcIlxyXG5cdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRuYW1lPSduYkNoaWVuJ1xyXG5cdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRkZWZhdWx0VmFsdWU9JzAnXHJcblx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRsYWJlbD0nQ2hpZW5zICgz4oKsL2ovYW5pbWFsKSdcclxuXHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQvPlxyXG5cclxuXHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdHR5cGU9J3N1Ym1pdCdcclxuXHRcdFx0XHR2YXJpYW50PSdjb250YWluZWQnXHJcblx0XHRcdFx0Y29sb3I9J3ByaW1hcnknXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0Q2FsY3VsZXIgbGUgdGFyaWZcclxuXHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdHtpbmZvcyAmJiBKU09OLnN0cmluZ2lmeShpbmZvcyl9XHJcblx0XHQ8L2Zvcm0+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1DYWxjdWxUYXJpZjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==