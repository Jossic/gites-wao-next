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
    _s2 = $RefreshSig$();


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
  _s2();

  var _s = $RefreshSig$();

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
      setSelectedDateFin = _React$useState4[1]; // const [infos, setInfos] = React.useState({
  // 	dateDebut: '',
  // 	dateFin: '',
  // 	giteSelec: '',
  // 	nbChien: 0,
  // 	nbEnf: 0,
  // 	nbPers: 0,
  // 	prixTotal: 0,
  // 	prixSuppl: 0,
  // 	dejaLoueMsg: '',
  // 	nuitee: 0,
  // });


  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      isVacances = _React$useState6[0],
      setIsVacances = _React$useState6[1];

  var handleDateChangeDebut = function handleDateChangeDebut(date) {
    setSelectedDateDebut(date);
  };

  var handleDateChangeFin = function handleDateChangeFin(date) {
    setSelectedDateFin(date);
  };

  var onSubmit = function onSubmit(data) {
    _s();

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

    var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(_objectSpread(_objectSpread({}, infos), {}, {
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
    })),
        _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState7, 2),
        infos = _React$useState8[0],
        setInfos = _React$useState8[1];

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
                setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                  prixTotal: gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison + gite.coefficients.hauteSaison
                }));
              } else if (dayjs__WEBPACK_IMPORTED_MODULE_5___default()().dayOfYear(358).isBetween(dateD, dateF, null, '[]')) {
                console.log('on est à noel à la semaine');
                prixTotal = gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison + gite.coefficients.hauteSaison + gite.coefficients.noel;
                setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                  prixTotal: prixTotal
                }));
              } else if (dayjs__WEBPACK_IMPORTED_MODULE_5___default()().dayOfYear(365).isBetween(dateD, dateF, null, '[]')) {
                console.log('on est au nouvel an à la semaine');
                setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                  prixTotal: gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison + gite.coefficients.hauteSaison + gite.coefficients.noel + gite.coefficients.nouvelAn
                }));
              } else {
                console.log('On est dans le cas 7 nuitées en vacances scolaires moyenne saison'); //

                setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                  prixTotal: gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison
                }));
              }
            } else {
              console.log('Cas 7 nuitées hors vacances'); //

              setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                prixTotal: gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison
              }));
            }
          } else if (nuitee < 7) {
            console.log('Cas général : nuitées inférieure à 7');

            if (dayjs__WEBPACK_IMPORTED_MODULE_5___default()().day(6).isBetween(dateD, dateF, null, '[]')) {
              console.log('Cas en week-end moins de 7 nuits');

              if (nuitee === 1) {
                console.log('Cas week-end 1 nuit + msg avertissement'); //

                setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                  prixTotal: gite.tarifParPersParNuitftMenage + gite.tarifDeBase / 2 + gite.uneNuitee,
                  avertissement: 'En week end nous louons 2 nuitées, (très exceptionnelement 1 seule)'
                }));
              } else if (nuitee === 2) {
                console.log('Cas week-end 2 nuits'); //

                setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                  prixTotal: gite.tarifParPersParNuitftMenage + gite.tarifDeBase
                }));
              } else if (nuitee === 3) {
                console.log('Cas week-end 3 nuits'); //

                setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                  prixTotal: gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.troisNuitees
                }));
              } else if (nuitee === 4) {
                console.log('Cas week-end 4 nuits'); //

                setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                  prixTotal: gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.quatreNuitees
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
                    setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 1
                    }));
                  } else {
                    setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 1,
                      prixSuppl: nbPers * gite.supplementParPers * 1
                    }));
                  }
                } else if (nuitee === 2) {
                  console.log('Cas hors week-end 2 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    console.log("Moins de ".concat(gite.nPers, " pers"));
                    setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 2
                    }));
                  } else {
                    setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 2,
                      prixSuppl: nbPers * gite.supplementParPers * 2
                    }));
                  }
                } else if (nuitee === 3) {
                  console.log('Cas hors week-end 3 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 3
                    }));
                  } else {
                    setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 3,
                      prixSuppl: nbPers * gite.supplementParPers * 3
                    }));
                  }
                } else if (nuitee === 4) {
                  console.log('Cas hors week-end 4 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 4
                    }));
                  } else {
                    setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 4,
                      prixSuppl: nbPers * gite.supplementParPers * 4
                    }));
                  }
                } else if (nuitee === 5) {
                  console.log('Cas hors week-end 5 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 5
                    }));
                  } else {
                    setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 5,
                      prixSuppl: nbPers * gite.supplementParPers * 5
                    }));
                  }
                } else if (nuitee === 6) {
                  console.log('Cas hors week-end 6 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 6
                    }));
                  } else {
                    setInfos(_objectSpread(_objectSpread({}, infos), {}, {
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
                    setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 1
                    }));
                  } else {
                    setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                      prixTotal: (gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuitftMenage) / 7 * 1 + gite.tarifParPersParNuitftMenage,
                      prixSuppl: nbPers * gite.supplementParPers * 1
                    }));
                  }
                } else if (nuitee === 2) {
                  console.log('Cas hors week-end 2 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 2
                    }));
                  } else {
                    setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                      prixTotal: (gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuitftMenage) / 7 * 2 + gite.tarifParPersParNuitftMenage,
                      prixSuppl: nbPers * gite.supplementParPers * 2
                    }));
                  }
                } else if (nuitee === 3) {
                  console.log('Cas hors week-end 3 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 3
                    }));
                  } else {
                    setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                      prixTotal: (gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuitftMenage) / 7 * 3 + gite.tarifParPersParNuitftMenage,
                      prixSuppl: nbPers * gite.supplementParPers * 3
                    }));
                  }
                } else if (nuitee === 4) {
                  console.log('Cas hors week-end 4 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 4
                    }));
                  } else {
                    setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                      prixTotal: (gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuitftMenage) / 7 * 4 + gite.tarifParPersParNuitftMenage,
                      prixSuppl: nbPers * gite.supplementParPers * 4
                    }));
                  }
                } else if (nuitee === 5) {
                  console.log('Cas hors week-end 5 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 5
                    }));
                  } else {
                    setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                      prixTotal: (gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuitftMenage) / 7 * 5 + gite.tarifParPersParNuitftMenage,
                      prixSuppl: nbPers * gite.supplementParPers * 5
                    }));
                  }
                } else if (nuitee === 6) {
                  console.log('Cas hors week-end 6 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setInfos(_objectSpread(_objectSpread({}, infos), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 6
                    }));
                  } else {
                    setInfos(_objectSpread(_objectSpread({}, infos), {}, {
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
  };

  _s(onSubmit, "4ydyZfg4FcpDHjs1+2XfiXwoh+I=");

  return __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    className: classes.form,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650,
      columnNumber: 3
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputLabel"], {
    shrink: true,
    id: "demo-simple-select-placeholder-label-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652,
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
        lineNumber: 661,
        columnNumber: 7
      }
    }, gites.map(function (gite) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["MenuItem"], {
        value: gite.slug,
        key: gite.slug,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 663,
          columnNumber: 9
        }
      }, gite.nom);
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 657,
      columnNumber: 5
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672,
      columnNumber: 4
    }
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_9__["MuiPickersUtilsProvider"], {
    utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673,
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
      lineNumber: 674,
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
      lineNumber: 688,
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
      lineNumber: 706,
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
      lineNumber: 719,
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
      lineNumber: 731,
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
      lineNumber: 744,
      columnNumber: 4
    }
  }, "Calculer le tarif"), infos && JSON.stringify(infos));
};

_s2(FormCalculTarif, "oWA3trgGs0czFcIs0/2JCb9muxA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9Gb3JtQ2FsY3VsVGFyaWYuanMiXSwibmFtZXMiOlsiZGF5anMiLCJleHRlbmQiLCJpc0JldHdlZW4iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJmb3JtIiwid2lkdGgiLCJtYXJnaW4iLCJzcGFjaW5nIiwicm9vdCIsImJ1dHRvbiIsImZvcm1Db250cm9sIiwidGV4dEZpZWxkIiwiRm9ybUNhbGN1bFRhcmlmIiwiZ2l0ZXMiLCJ1c2VGb3JtIiwiY29udHJvbCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiY2xhc3NlcyIsInRva2VuIiwiZ2V0Q29va2llIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkRGF0ZURlYnV0Iiwic2V0U2VsZWN0ZWREYXRlRGVidXQiLCJzZWxlY3RlZERhdGVGaW4iLCJzZXRTZWxlY3RlZERhdGVGaW4iLCJpc1ZhY2FuY2VzIiwic2V0SXNWYWNhbmNlcyIsImhhbmRsZURhdGVDaGFuZ2VEZWJ1dCIsImRhdGUiLCJoYW5kbGVEYXRlQ2hhbmdlRmluIiwib25TdWJtaXQiLCJkYXRhIiwiZGF0ZURlYnV0IiwiZGF0ZUZpbiIsImdpdGVTZWxlYyIsIm5iQ2hpZW4iLCJuYkVuZiIsIm5iUGVycyIsImRhdGVEIiwiZGF0ZUYiLCJjb25zb2xlIiwibG9nIiwiZ2V0VmFjYW5jZXMiLCJ0aGVuIiwicmVzdWx0IiwidmFjYW5jZXMiLCJudWl0ZWUiLCJkaWZmIiwiaW5mb3MiLCJwcml4VG90YWwiLCJwcml4U3VwcGwiLCJkZWphTG91ZU1zZyIsInNldEluZm9zIiwiZ2l0ZSIsInNsdWciLCJub20iLCJnZXREZWphTG91ZSIsImNhbGVuZGFySWQiLCJsb3VlIiwibW9udGgiLCJ0YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UiLCJ0YXJpZkRlQmFzZSIsImNvZWZmaWNpZW50cyIsImJhc3NlU2Fpc29uIiwibW95ZW5uZVNhaXNvbiIsImhhdXRlU2Fpc29uIiwiZGF5T2ZZZWFyIiwibm9lbCIsIm5vdXZlbEFuIiwiZGF5IiwidW5lTnVpdGVlIiwiYXZlcnRpc3NlbWVudCIsInRyb2lzTnVpdGVlcyIsInF1YXRyZU51aXRlZXMiLCJuUGVycyIsInRhcmlmUGFyUGVyc1Bhck51aXQiLCJzdXBwbGVtZW50UGFyUGVycyIsIm1hcCIsIkRhdGVGbnNVdGlscyIsInNocmluayIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSw0Q0FBSyxDQUFDQyxNQUFOLENBQWFDLDZEQUFiO0FBQ0E7QUFRQTtBQUNBO0FBS0E7QUFNQTtBQUVBLElBQU1DLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN4Q0MsUUFBSSxFQUFFO0FBQ0xDLFdBQUssRUFBRSxLQURGO0FBRUxDLFlBQU0sRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZDtBQUZILEtBRGtDO0FBS3hDQyxRQUFJLEVBQUU7QUFDTEgsV0FBSyxFQUFFO0FBREYsS0FMa0M7QUFReENJLFVBQU0sRUFBRTtBQUNQSCxZQUFNLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsQ0FERDtBQUVQRixXQUFLLEVBQUU7QUFGQSxLQVJnQztBQVl4Q0ssZUFBVyxFQUFFO0FBQ1pKLFlBQU0sRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxDQURJO0FBRVpGLFdBQUssRUFBRTtBQUZLLEtBWjJCO0FBZ0J4Q00sYUFBUyxFQUFFO0FBQ1ZMLFlBQU0sRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxDQURFO0FBRVZGLFdBQUssRUFBRTtBQUZHO0FBaEI2QixHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUFzQkEsSUFBTU8sZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUFlO0FBQUE7O0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxR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RCxFQXFHRXlDLEtBQUssSUFBSWdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlakMsS0FBZixDQXJHWCxDQUREO0FBeUdBLENBaHNCRDs7SUFBTXRDLGU7VUFDdUNFLHVELEVBQzVCYixTOzs7S0FGWFcsZTtBQWtzQlNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rhcmlmcy5iMGIzZThkNzA3ZGJmOWY5NGRkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGVGbnNVdGlscyBmcm9tICdAZGF0ZS1pby9kYXRlLWZucyc7XHJcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgaXNCZXR3ZWVuIGZyb20gJ2RheWpzL3BsdWdpbi9pc0JldHdlZW4nO1xyXG5kYXlqcy5leHRlbmQoaXNCZXR3ZWVuKTtcclxuaW1wb3J0IHtcclxuXHRCdXR0b24sXHJcblx0Rm9ybUNvbnRyb2wsXHJcblx0SW5wdXRMYWJlbCxcclxuXHRNZW51SXRlbSxcclxuXHRTZWxlY3QsXHJcblx0VGV4dEZpZWxkLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7XHJcblx0TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIsXHJcblx0S2V5Ym9hcmRUaW1lUGlja2VyLFxyXG5cdEtleWJvYXJkRGF0ZVBpY2tlcixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvcGlja2Vycyc7XHJcbmltcG9ydCB7XHJcblx0Z2V0Q2FsZW5kYXIsXHJcblx0Z2V0Q2FsZW5kYXJCeUlkLFxyXG5cdGdldERlamFMb3VlLFxyXG5cdGdldFZhY2FuY2VzLFxyXG59IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvY2FsZW5kYXJBY3Rpb25zJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRmb3JtOiB7XHJcblx0XHR3aWR0aDogJzcwJScsXHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0fSxcclxuXHRyb290OiB7XHJcblx0XHR3aWR0aDogJzgwJScsXHJcblx0fSxcclxuXHRidXR0b246IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygyKSxcclxuXHRcdHdpZHRoOiAnODAlJyxcclxuXHR9LFxyXG5cdGZvcm1Db250cm9sOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHR3aWR0aDogJzgwJScsXHJcblx0fSxcclxuXHR0ZXh0RmllbGQ6IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdHdpZHRoOiAnODAlJyxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5jb25zdCBGb3JtQ2FsY3VsVGFyaWYgPSAoeyBnaXRlcyB9KSA9PiB7XHJcblx0Y29uc3QgeyBjb250cm9sLCByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKCk7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cdGNvbnN0IFtzZWxlY3RlZERhdGVEZWJ1dCwgc2V0U2VsZWN0ZWREYXRlRGVidXRdID0gUmVhY3QudXNlU3RhdGUoKTtcclxuXHRjb25zdCBbc2VsZWN0ZWREYXRlRmluLCBzZXRTZWxlY3RlZERhdGVGaW5dID0gUmVhY3QudXNlU3RhdGUoKTtcclxuXHQvLyBjb25zdCBbaW5mb3MsIHNldEluZm9zXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuXHQvLyBcdGRhdGVEZWJ1dDogJycsXHJcblx0Ly8gXHRkYXRlRmluOiAnJyxcclxuXHQvLyBcdGdpdGVTZWxlYzogJycsXHJcblx0Ly8gXHRuYkNoaWVuOiAwLFxyXG5cdC8vIFx0bmJFbmY6IDAsXHJcblx0Ly8gXHRuYlBlcnM6IDAsXHJcblx0Ly8gXHRwcml4VG90YWw6IDAsXHJcblx0Ly8gXHRwcml4U3VwcGw6IDAsXHJcblx0Ly8gXHRkZWphTG91ZU1zZzogJycsXHJcblx0Ly8gXHRudWl0ZWU6IDAsXHJcblx0Ly8gfSk7XHJcblx0Y29uc3QgW2lzVmFjYW5jZXMsIHNldElzVmFjYW5jZXNdID0gUmVhY3QudXNlU3RhdGUoKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlRGF0ZUNoYW5nZURlYnV0ID0gKGRhdGUpID0+IHtcclxuXHRcdHNldFNlbGVjdGVkRGF0ZURlYnV0KGRhdGUpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZURhdGVDaGFuZ2VGaW4gPSAoZGF0ZSkgPT4ge1xyXG5cdFx0c2V0U2VsZWN0ZWREYXRlRmluKGRhdGUpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IHtcclxuXHRcdGNvbnN0IHsgZGF0ZURlYnV0LCBkYXRlRmluLCBnaXRlU2VsZWMsIG5iQ2hpZW4sIG5iRW5mLCBuYlBlcnMgfSA9IGRhdGE7XHJcblx0XHRjb25zdCBkYXRlRCA9IGRheWpzKGRhdGVEZWJ1dCk7XHJcblx0XHRjb25zdCBkYXRlRiA9IGRheWpzKGRhdGVGaW4pO1xyXG5cdFx0Y29uc29sZS5sb2coZGF0ZUQpO1xyXG5cdFx0Z2V0VmFjYW5jZXMoZGF0ZUQsIGRhdGVGKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ3Jlc3VsdCB2YXV0JywgcmVzdWx0KTtcclxuXHRcdFx0c2V0SXNWYWNhbmNlcyhyZXN1bHQudmFjYW5jZXMpO1xyXG5cdFx0XHQvLyByZXR1cm4gcmVzdWx0LnZhY2FuY2VzO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgbnVpdGVlID0gZGF0ZUYuZGlmZihkYXRlRCwgJ2RheScpO1xyXG5cclxuXHRcdGNvbnN0IFtpbmZvcywgc2V0SW5mb3NdID0gUmVhY3QudXNlU3RhdGUoe1xyXG5cdFx0XHQuLi5pbmZvcyxcclxuXHRcdFx0ZGF0ZURlYnV0OiBkYXRlRCxcclxuXHRcdFx0ZGF0ZUZpbjogZGF0ZUYsXHJcblx0XHRcdGdpdGVTZWxlYzogJycsXHJcblx0XHRcdG5iQ2hpZW46IDAsXHJcblx0XHRcdG5iRW5mOiAwLFxyXG5cdFx0XHRuYlBlcnM6IDAsXHJcblx0XHRcdHByaXhUb3RhbDogMCxcclxuXHRcdFx0cHJpeFN1cHBsOiAwLFxyXG5cdFx0XHRkZWphTG91ZU1zZzogJycsXHJcblx0XHRcdG51aXRlZTogMCxcclxuXHRcdH0pO1xyXG5cdFx0Zm9yIChjb25zdCBnaXRlIG9mIGdpdGVzKSB7XHJcblx0XHRcdGlmIChnaXRlLnNsdWcgPT09IGdpdGVTZWxlYykge1xyXG5cdFx0XHRcdHNldEluZm9zKHtcclxuXHRcdFx0XHRcdC4uLmluZm9zLFxyXG5cdFx0XHRcdFx0ZGF0ZURlYnV0OiBkYXRlRCxcclxuXHRcdFx0XHRcdGRhdGVGaW46IGRhdGVGLFxyXG5cdFx0XHRcdFx0Z2l0ZVNlbGVjOiBnaXRlLm5vbSxcclxuXHRcdFx0XHRcdG5iQ2hpZW4sXHJcblx0XHRcdFx0XHRuYkVuZixcclxuXHRcdFx0XHRcdG5iUGVycyxcclxuXHRcdFx0XHRcdG51aXRlZSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhnaXRlLm5vbSk7XHJcblx0XHRcdFx0Z2V0RGVqYUxvdWUoZ2l0ZS5jYWxlbmRhcklkLCBkYXRlRCwgZGF0ZUYpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHRcdFx0XHRcdGlmIChyZXN1bHQubG91ZSkge1xyXG5cdFx0XHRcdFx0XHRzZXRJbmZvcyh7XHJcblx0XHRcdFx0XHRcdFx0Li4uaW5mb3MsXHJcblx0XHRcdFx0XHRcdFx0ZGVqYUxvdWVNc2c6XHJcblx0XHRcdFx0XHRcdFx0XHQnSWwgc2VtYmxlIHF1ZSBjZSBnw650ZSBzb2l0IGTDqWrDoCBsb3XDqSBhdXggZGF0ZXMgaW5kaXF1w6llcycsXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0c2V0SW5mb3Moe1xyXG5cdFx0XHRcdFx0XHRcdC4uLmluZm9zLFxyXG5cdFx0XHRcdFx0XHRcdGRlamFMb3VlTXNnOlxyXG5cdFx0XHRcdFx0XHRcdFx0XCJDZSBnw650ZSBzZW1ibGUgbGlicmUgcG91ciBsZSBtb21lbnQsIG4naMOpc2l0ZXogcGFzIMOgIGZhaXJlIHVuZSBkZW1hbmRlIGRlIGxvY2F0aW9uXCIsXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vIE9uIHLDqWN1cMOocmUgbGUgZ8OudGUgc2VsZWN0aW9ubsOpXHJcblx0XHRcdFx0aWYgKG51aXRlZSA9PT0gNyB8fCBudWl0ZWUgPT09IDE0IHx8IG51aXRlZSA9PT0gMjEpIHtcclxuXHRcdFx0XHRcdGlmIChpc1ZhY2FuY2VzKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdDYXMgZ8OpbsOpcmFsIDogb24gZXN0IGVuIHZhbmNhbmNlcycpO1xyXG5cdFx0XHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRcdFx0ZGF5anMoZGF0ZUQpLmlzQmV0d2VlbihcclxuXHRcdFx0XHRcdFx0XHRcdGRheWpzKCkubW9udGgoNiksXHJcblx0XHRcdFx0XHRcdFx0XHRkYXlqcygpLm1vbnRoKDcpLFxyXG5cdFx0XHRcdFx0XHRcdFx0bnVsbCxcclxuXHRcdFx0XHRcdFx0XHRcdCdbXSdcclxuXHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdvbiBlc3QgZW4gaGF1dGUgc2Fpc29uIMOgIGxhIHNlbWFpbmUnKTtcclxuXHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7XHJcblx0XHRcdFx0XHRcdFx0XHQuLi5pbmZvcyxcclxuXHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuaGF1dGVTYWlzb24sXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdFx0XHRcdFx0ZGF5anMoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmRheU9mWWVhcigzNTgpXHJcblx0XHRcdFx0XHRcdFx0XHQuaXNCZXR3ZWVuKGRhdGVELCBkYXRlRiwgbnVsbCwgJ1tdJylcclxuXHRcdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ29uIGVzdCDDoCBub2VsIMOgIGxhIHNlbWFpbmUnKTtcclxuXHRcdFx0XHRcdFx0XHRwcml4VG90YWwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmhhdXRlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm5vZWw7XHJcblx0XHRcdFx0XHRcdFx0c2V0SW5mb3MoeyAuLi5pbmZvcywgcHJpeFRvdGFsIH0pO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKFxyXG5cdFx0XHRcdFx0XHRcdGRheWpzKClcclxuXHRcdFx0XHRcdFx0XHRcdC5kYXlPZlllYXIoMzY1KVxyXG5cdFx0XHRcdFx0XHRcdFx0LmlzQmV0d2VlbihkYXRlRCwgZGF0ZUYsIG51bGwsICdbXScpXHJcblx0XHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdvbiBlc3QgYXUgbm91dmVsIGFuIMOgIGxhIHNlbWFpbmUnKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0c2V0SW5mb3Moe1xyXG5cdFx0XHRcdFx0XHRcdFx0Li4uaW5mb3MsXHJcblx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmhhdXRlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubm9lbCArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm5vdXZlbEFuLFxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0J09uIGVzdCBkYW5zIGxlIGNhcyA3IG51aXTDqWVzIGVuIHZhY2FuY2VzIHNjb2xhaXJlcyBtb3llbm5lIHNhaXNvbidcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0c2V0SW5mb3Moe1xyXG5cdFx0XHRcdFx0XHRcdFx0Li4uaW5mb3MsXHJcblx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbixcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyA3IG51aXTDqWVzIGhvcnMgdmFjYW5jZXMnKTtcclxuXHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0c2V0SW5mb3Moe1xyXG5cdFx0XHRcdFx0XHRcdC4uLmluZm9zLFxyXG5cdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24sXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlIDwgNykge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyBnw6luw6lyYWwgOiBudWl0w6llcyBpbmbDqXJpZXVyZSDDoCA3Jyk7XHJcblx0XHRcdFx0XHRpZiAoZGF5anMoKS5kYXkoNikuaXNCZXR3ZWVuKGRhdGVELCBkYXRlRiwgbnVsbCwgJ1tdJykpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyBlbiB3ZWVrLWVuZCBtb2lucyBkZSA3IG51aXRzJyk7XHJcblx0XHRcdFx0XHRcdGlmIChudWl0ZWUgPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdCdDYXMgd2Vlay1lbmQgMSBudWl0ICsgbXNnIGF2ZXJ0aXNzZW1lbnQnXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdHNldEluZm9zKHtcclxuXHRcdFx0XHRcdFx0XHRcdC4uLmluZm9zLFxyXG5cdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgLyAyICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS51bmVOdWl0ZWUsXHJcblx0XHRcdFx0XHRcdFx0XHRhdmVydGlzc2VtZW50OlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnRW4gd2VlayBlbmQgbm91cyBsb3VvbnMgMiBudWl0w6llcywgKHRyw6hzIGV4Y2VwdGlvbm5lbGVtZW50IDEgc2V1bGUpJyxcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDIpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ2FzIHdlZWstZW5kIDIgbnVpdHMnKTtcclxuXHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdHNldEluZm9zKHtcclxuXHRcdFx0XHRcdFx0XHRcdC4uLmluZm9zLFxyXG5cdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UsXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSAzKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyB3ZWVrLWVuZCAzIG51aXRzJyk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7XHJcblx0XHRcdFx0XHRcdFx0XHQuLi5pbmZvcyxcclxuXHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50cm9pc051aXRlZXMsXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA0KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyB3ZWVrLWVuZCA0IG51aXRzJyk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7XHJcblx0XHRcdFx0XHRcdFx0XHQuLi5pbmZvcyxcclxuXHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5xdWF0cmVOdWl0ZWVzLFxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gNSkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0J0NhcyB3ZWVrLWVuZCA1IG51aXRzIC0gUXVlbCB0YXJpZiA/IFZvaXIgTWFtYW4nXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdHNldEluZm9zKHsgLi4uaW5mb3MsIHByaXhUb3RhbCB9KTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDYpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdCdDYXMgd2Vlay1lbmQgNiBudWl0cyAtIFF1ZWwgdGFyaWYgPyBWb2lyIE1hbWFuJ1xyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7IC4uLmluZm9zLCBwcml4VG90YWwgfSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHQnQXV0cmVzIGNhcyB3ZWVrLWVuZCBpbmbDqXJpZXVyIMOgIDcgbnVpdHMgLSBQZXUgcHJvYmFibGUuLi4nXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0J0NhcyBnw6luw6lyYWwgOiBtb2lucyBkZSA3IG51aXRzIGV0IHNhbnMgc2FtZWRpJ1xyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRpZiAoaXNWYWNhbmNlcykge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0J0NhcyBnw6luw6lyYWwgOiBob3JzIFdFIG1vaW5zIGRlIDcgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcyAtIFRhcmlmIHNhbnMgdGVuaXIgY29tcHRlIGR1IHBsYWZvbmQnXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRpZiAobnVpdGVlID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDEgbnVpdCBtYWlzIGVuIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uaW5mb3MsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uaW5mb3MsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4U3VwcGw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogMSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgMiBudWl0cyBtYWlzIGVuIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgTW9pbnMgZGUgJHtnaXRlLm5QZXJzfSBwZXJzYCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldEluZm9zKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5pbmZvcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQyLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldEluZm9zKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5pbmZvcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQyLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiAyLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gMykge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCAzIG51aXRzIG1haXMgZW4gdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldEluZm9zKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5pbmZvcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldEluZm9zKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5pbmZvcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiAzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gNCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCA0IG51aXRzIG1haXMgZW4gdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldEluZm9zKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5pbmZvcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ0LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldEluZm9zKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5pbmZvcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ0LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiA0LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gNSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCA1IG51aXRzIG1haXMgZW4gdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldEluZm9zKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5pbmZvcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ1LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldEluZm9zKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5pbmZvcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ1LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiA1LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gNikge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCA2IG51aXRzIG1haXMgZW4gdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldEluZm9zKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5pbmZvcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ2LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldEluZm9zKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5pbmZvcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ2LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiA2LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdBdXRyZXMgY2FzIHdlZWstZW5kIGluZsOpcmlldXIgw6AgNyBudWl0cyAtIFBldSBwcm9iYWJsZS4uLidcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0J0NhcyBnw6luw6lyYWwgOiBob3JzIFdFIG1vaW5zIGRlIDcgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcyAtIFRhcmlmIGF2ZWMgcGxhZm9uZCdcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0aWYgKG51aXRlZSA9PT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCAxIG51aXQgZXQgaG9ycyB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldEluZm9zKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5pbmZvcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQxLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldEluZm9zKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5pbmZvcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQubW95ZW5uZVNhaXNvbiAtXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlKSAvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcpICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4U3VwcGw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogMSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgMiBudWl0cyBldCBob3JzIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uaW5mb3MsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MixcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uaW5mb3MsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KChnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lm1veWVubmVTYWlzb24gLVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSkgL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ3KSAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDIgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFN1cHBsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSAzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDMgbnVpdHMgZXQgaG9ycyB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0SW5mb3Moe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmluZm9zLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0SW5mb3Moe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmluZm9zLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCgoZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50c1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5tb3llbm5lU2Fpc29uIC1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UpIC9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NykgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQzICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiAzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gNCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCA0IG51aXRzIGV0IGhvcnMgdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldEluZm9zKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5pbmZvcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ0LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldEluZm9zKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5pbmZvcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQubW95ZW5uZVNhaXNvbiAtXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlKSAvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcpICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NCArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4U3VwcGw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogNCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgNSBudWl0cyBldCBob3JzIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uaW5mb3MsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRJbmZvcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uaW5mb3MsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KChnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lm1veWVubmVTYWlzb24gLVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSkgL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ3KSAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDUgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFN1cHBsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA2KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDYgbnVpdHMgZXQgaG9ycyB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0SW5mb3Moe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmluZm9zLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDYsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0SW5mb3Moe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmluZm9zLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCgoZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50c1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5tb3llbm5lU2Fpc29uIC1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UpIC9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NykgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ2ICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiA2LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ0F1dHJlcyBjYXMgbnVpdCA+IDcgZXQgIT09IGRlIDE0IGV0IDIxJyk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnR8OpcmVyIGNhcyA+MzAgaWNpJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0+XHJcblx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdDxJbnB1dExhYmVsXHJcblx0XHRcdFx0XHRzaHJpbmtcclxuXHRcdFx0XHRcdGlkPSdkZW1vLXNpbXBsZS1zZWxlY3QtcGxhY2Vob2xkZXItbGFiZWwtbGFiZWwnPlxyXG5cdFx0XHRcdFx0R2l0ZVxyXG5cdFx0XHRcdDwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdFx0Y29udHJvbD17Y29udHJvbH1cclxuXHRcdFx0XHRcdG5hbWU9J2dpdGVTZWxlYydcclxuXHRcdFx0XHRcdGFzPXtcclxuXHRcdFx0XHRcdFx0PFNlbGVjdCBpZD0nZGVjbGVuY2hldXItc2VsZWN0JyBkZWZhdWx0VmFsdWU9Jyc+XHJcblx0XHRcdFx0XHRcdFx0e2dpdGVzLm1hcCgoZ2l0ZSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPXtnaXRlLnNsdWd9IGtleT17Z2l0ZS5zbHVnfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2dpdGUubm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PC9TZWxlY3Q+XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHJcblx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdDxNdWlQaWNrZXJzVXRpbHNQcm92aWRlciB1dGlscz17RGF0ZUZuc1V0aWxzfT5cclxuXHRcdFx0XHRcdDxLZXlib2FyZERhdGVQaWNrZXJcclxuXHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRtYXJnaW49J25vcm1hbCdcclxuXHRcdFx0XHRcdFx0aWQ9J2RhdGUtcGlja2VyLWRpYWxvZydcclxuXHRcdFx0XHRcdFx0bmFtZT0nZGF0ZURlYnV0J1xyXG5cdFx0XHRcdFx0XHRsYWJlbD0nRGF0ZSBkZSBkw6lidXQnXHJcblx0XHRcdFx0XHRcdGZvcm1hdD0nTU0vZGQveXl5eSdcclxuXHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPScnXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtzZWxlY3RlZERhdGVEZWJ1dH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZURhdGVDaGFuZ2VEZWJ1dH1cclxuXHRcdFx0XHRcdFx0S2V5Ym9hcmRCdXR0b25Qcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRcdCdhcmlhLWxhYmVsJzogJ2NoYW5nZSBkYXRlJyxcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8S2V5Ym9hcmREYXRlUGlja2VyXHJcblx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0Ly8gZGlzYWJsZVRvb2xiYXJcclxuXHRcdFx0XHRcdFx0bmFtZT0nZGF0ZUZpbidcclxuXHRcdFx0XHRcdFx0Zm9ybWF0PSdNTS9kZC95eXl5J1xyXG5cdFx0XHRcdFx0XHRtYXJnaW49J25vcm1hbCdcclxuXHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPScwMi8yNS8yMDIxJ1xyXG5cdFx0XHRcdFx0XHRpZD0nZGF0ZS1waWNrZXItaW5saW5lJ1xyXG5cdFx0XHRcdFx0XHRsYWJlbD0nRGF0ZSBkZSBmaW4nXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtzZWxlY3RlZERhdGVGaW59XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVEYXRlQ2hhbmdlRmlufVxyXG5cdFx0XHRcdFx0XHRLZXlib2FyZEJ1dHRvblByb3BzPXt7XHJcblx0XHRcdFx0XHRcdFx0J2FyaWEtbGFiZWwnOiAnY2hhbmdlIGRhdGUnLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L011aVBpY2tlcnNVdGlsc1Byb3ZpZGVyPlxyXG5cdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cclxuXHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdG5hbWU9J25iUGVycydcclxuXHRcdFx0XHR0eXBlPSdudW1iZXInXHJcblx0XHRcdFx0ZGVmYXVsdFZhbHVlPScxMCdcclxuXHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdGxhYmVsPSdOb21icmUgZGUgcGVyc29ubmVzIGF1IHRvdGFsJ1xyXG5cdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblxyXG5cdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuXHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0bmFtZT0nbmJFbmYnXHJcblx0XHRcdFx0dHlwZT0nbnVtYmVyJ1xyXG5cdFx0XHRcdGRlZmF1bHRWYWx1ZT0nMidcclxuXHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdGxhYmVsPVwiTm9tYnJlIGQnZW5mYW50cyAtMTggYW5zXCJcclxuXHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuXHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0bmFtZT0nbmJDaGllbidcclxuXHRcdFx0XHR0eXBlPSdudW1iZXInXHJcblx0XHRcdFx0ZGVmYXVsdFZhbHVlPScwJ1xyXG5cdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0bGFiZWw9J0NoaWVucyAoM+KCrC9qL2FuaW1hbCknXHJcblx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHJcblx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHR0eXBlPSdzdWJtaXQnXHJcblx0XHRcdFx0dmFyaWFudD0nY29udGFpbmVkJ1xyXG5cdFx0XHRcdGNvbG9yPSdwcmltYXJ5J1xyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdENhbGN1bGVyIGxlIHRhcmlmXHJcblx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHR7aW5mb3MgJiYgSlNPTi5zdHJpbmdpZnkoaW5mb3MpfVxyXG5cdFx0PC9mb3JtPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtQ2FsY3VsVGFyaWY7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=