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

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      values = _React$useState6[0],
      setValues = _React$useState6[1];

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
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      dateDebut: dateDebut,
      dateFin: dateFin,
      giteSelec: giteSelec,
      nbChien: nbChien,
      nbEnf: nbEnf,
      nbPers: nbPers,
      nuitee: nuitee
    }));
    console.log('values', values);

    var _iterator = _createForOfIteratorHelper(gites),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var gite = _step.value;

        if (gite.slug === giteSelec) {
          Object(_actions_calendarActions__WEBPACK_IMPORTED_MODULE_10__["getDejaLoue"])(gite.calendarId, dateD, dateF).then(function (result) {
            if (result.loue) {
              setValues(_objectSpread(_objectSpread({}, values), {}, {
                dejaLoueMsg: 'Il semble que ce gîte soit déjà loué aux dates indiquées'
              }));
            } else {
              setValues(_objectSpread(_objectSpread({}, values), {}, {
                dejaLoueMsg: "Ce gîte semble libre pour le moment, n'hésitez pas à faire une demande de location"
              }));
            }
          }); // On récupère le gîte selectionné

          if (nuitee === 7 || nuitee === 14 || nuitee === 21) {
            if (isVacances) {
              console.log('Cas général : on est en vancances');

              if (dayjs__WEBPACK_IMPORTED_MODULE_5___default()(dateD).isBetween(dayjs__WEBPACK_IMPORTED_MODULE_5___default()().month(6), dayjs__WEBPACK_IMPORTED_MODULE_5___default()().month(7), null, '[]')) {
                console.log('on est en haute saison à la semaine');
                setValues(_objectSpread(_objectSpread({}, values), {}, {
                  prixTotal: gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison + gite.coefficients.hauteSaison
                }));
              } else if (dayjs__WEBPACK_IMPORTED_MODULE_5___default()().dayOfYear(358).isBetween(dateD, dateF, null, '[]')) {
                console.log('on est à noel à la semaine');
                prixTotal = gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison + gite.coefficients.hauteSaison + gite.coefficients.noel;
                setValues(_objectSpread(_objectSpread({}, values), {}, {
                  prixTotal: prixTotal
                }));
              } else if (dayjs__WEBPACK_IMPORTED_MODULE_5___default()().dayOfYear(365).isBetween(dateD, dateF, null, '[]')) {
                console.log('on est au nouvel an à la semaine');
                setValues(_objectSpread(_objectSpread({}, values), {}, {
                  prixTotal: gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison + gite.coefficients.hauteSaison + gite.coefficients.noel + gite.coefficients.nouvelAn
                }));
              } else {
                console.log('On est dans le cas 7 nuitées en vacances scolaires moyenne saison'); //

                setValues(_objectSpread(_objectSpread({}, values), {}, {
                  prixTotal: gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison
                }));
              }
            } else {
              console.log('Cas 7 nuitées hors vacances'); //

              setValues(_objectSpread(_objectSpread({}, values), {}, {
                prixTotal: gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison
              }));
            }
          } else if (nuitee < 7) {
            console.log('Cas général : nuitées inférieure à 7');

            if (dayjs__WEBPACK_IMPORTED_MODULE_5___default()().day(6).isBetween(dateD, dateF, null, '[]')) {
              console.log('Cas en week-end moins de 7 nuits');

              if (nuitee === 1) {
                console.log('Cas week-end 1 nuit + msg avertissement'); //

                setValues(_objectSpread(_objectSpread({}, values), {}, {
                  prixTotal: gite.tarifParPersParNuitftMenage + gite.tarifDeBase / 2 + gite.uneNuitee,
                  avertissement: 'En week end nous louons 2 nuitées, (très exceptionnelement 1 seule)'
                }));
              } else if (nuitee === 2) {
                console.log('Cas week-end 2 nuits'); //

                setValues(_objectSpread(_objectSpread({}, values), {}, {
                  prixTotal: gite.tarifParPersParNuitftMenage + gite.tarifDeBase
                }));
              } else if (nuitee === 3) {
                console.log('Cas week-end 3 nuits'); //

                setValues(_objectSpread(_objectSpread({}, values), {}, {
                  prixTotal: gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.troisNuitees
                }));
              } else if (nuitee === 4) {
                console.log('Cas week-end 4 nuits'); //

                setValues(_objectSpread(_objectSpread({}, values), {}, {
                  prixTotal: gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.quatreNuitees
                }));
              } else if (nuitee === 5) {
                console.log('Cas week-end 5 nuits - Quel tarif ? Voir Maman'); //

                setValues(_objectSpread(_objectSpread({}, values), {}, {
                  prixTotal: prixTotal
                }));
              } else if (nuitee === 6) {
                console.log('Cas week-end 6 nuits - Quel tarif ? Voir Maman'); //

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
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 1
                    }));
                  } else {
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 1,
                      prixSuppl: nbPers * gite.supplementParPers * 1
                    }));
                  }
                } else if (nuitee === 2) {
                  console.log('Cas hors week-end 2 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    console.log("Moins de ".concat(gite.nPers, " pers"));
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 2
                    }));
                  } else {
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 2,
                      prixSuppl: nbPers * gite.supplementParPers * 2
                    }));
                  }
                } else if (nuitee === 3) {
                  console.log('Cas hors week-end 3 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 3
                    }));
                  } else {
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 3,
                      prixSuppl: nbPers * gite.supplementParPers * 3
                    }));
                  }
                } else if (nuitee === 4) {
                  console.log('Cas hors week-end 4 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 4
                    }));
                  } else {
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 4,
                      prixSuppl: nbPers * gite.supplementParPers * 4
                    }));
                  }
                } else if (nuitee === 5) {
                  console.log('Cas hors week-end 5 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 5
                    }));
                  } else {
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 5,
                      prixSuppl: nbPers * gite.supplementParPers * 5
                    }));
                  }
                } else if (nuitee === 6) {
                  console.log('Cas hors week-end 6 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 6
                    }));
                  } else {
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
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 1
                    }));
                  } else {
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: (gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuitftMenage) / 7 * 1 + gite.tarifParPersParNuitftMenage,
                      prixSuppl: nbPers * gite.supplementParPers * 1
                    }));
                  }
                } else if (nuitee === 2) {
                  console.log('Cas hors week-end 2 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 2
                    }));
                  } else {
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: (gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuitftMenage) / 7 * 2 + gite.tarifParPersParNuitftMenage,
                      prixSuppl: nbPers * gite.supplementParPers * 2
                    }));
                  }
                } else if (nuitee === 3) {
                  console.log('Cas hors week-end 3 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 3
                    }));
                  } else {
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: (gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuitftMenage) / 7 * 3 + gite.tarifParPersParNuitftMenage,
                      prixSuppl: nbPers * gite.supplementParPers * 3
                    }));
                  }
                } else if (nuitee === 4) {
                  console.log('Cas hors week-end 4 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 4
                    }));
                  } else {
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: (gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuitftMenage) / 7 * 4 + gite.tarifParPersParNuitftMenage,
                      prixSuppl: nbPers * gite.supplementParPers * 4
                    }));
                  }
                } else if (nuitee === 5) {
                  console.log('Cas hors week-end 5 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 5
                    }));
                  } else {
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: (gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuitftMenage) / 7 * 5 + gite.tarifParPersParNuitftMenage,
                      prixSuppl: nbPers * gite.supplementParPers * 5
                    }));
                  }
                } else if (nuitee === 6) {
                  console.log('Cas hors week-end 6 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setValues(_objectSpread(_objectSpread({}, values), {}, {
                      prixTotal: gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 6
                    }));
                  } else {
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
  };

  return __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    className: classes.form,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627,
      columnNumber: 3
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 628,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputLabel"], {
    shrink: true,
    id: "demo-simple-select-placeholder-label-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 629,
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
        lineNumber: 638,
        columnNumber: 7
      }
    }, gites.map(function (gite) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["MenuItem"], {
        value: gite.slug,
        key: gite.slug,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 640,
          columnNumber: 9
        }
      }, gite.nom);
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634,
      columnNumber: 5
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649,
      columnNumber: 4
    }
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_9__["MuiPickersUtilsProvider"], {
    utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650,
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
      lineNumber: 651,
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
      lineNumber: 665,
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
      lineNumber: 683,
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
      lineNumber: 696,
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
      lineNumber: 708,
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
      lineNumber: 721,
      columnNumber: 4
    }
  }, "Calculer le tarif"), values && JSON.stringify(values));
};

_s(FormCalculTarif, "9+/quC3kTNxwHIawGsxDb6ZYb+I=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9Gb3JtQ2FsY3VsVGFyaWYuanMiXSwibmFtZXMiOlsiZGF5anMiLCJleHRlbmQiLCJpc0JldHdlZW4iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJmb3JtIiwid2lkdGgiLCJtYXJnaW4iLCJzcGFjaW5nIiwicm9vdCIsImJ1dHRvbiIsImZvcm1Db250cm9sIiwidGV4dEZpZWxkIiwiRm9ybUNhbGN1bFRhcmlmIiwiZ2l0ZXMiLCJ1c2VGb3JtIiwiY29udHJvbCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiY2xhc3NlcyIsInRva2VuIiwiZ2V0Q29va2llIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkRGF0ZURlYnV0Iiwic2V0U2VsZWN0ZWREYXRlRGVidXQiLCJzZWxlY3RlZERhdGVGaW4iLCJzZXRTZWxlY3RlZERhdGVGaW4iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJpc1ZhY2FuY2VzIiwic2V0SXNWYWNhbmNlcyIsImhhbmRsZURhdGVDaGFuZ2VEZWJ1dCIsImRhdGUiLCJoYW5kbGVEYXRlQ2hhbmdlRmluIiwib25TdWJtaXQiLCJkYXRhIiwiZGF0ZURlYnV0IiwiZGF0ZUZpbiIsImdpdGVTZWxlYyIsIm5iQ2hpZW4iLCJuYkVuZiIsIm5iUGVycyIsImRhdGVEIiwiZGF0ZUYiLCJjb25zb2xlIiwibG9nIiwiZ2V0VmFjYW5jZXMiLCJ0aGVuIiwicmVzdWx0IiwidmFjYW5jZXMiLCJudWl0ZWUiLCJkaWZmIiwiZ2l0ZSIsInNsdWciLCJnZXREZWphTG91ZSIsImNhbGVuZGFySWQiLCJsb3VlIiwiZGVqYUxvdWVNc2ciLCJtb250aCIsInByaXhUb3RhbCIsInRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSIsInRhcmlmRGVCYXNlIiwiY29lZmZpY2llbnRzIiwiYmFzc2VTYWlzb24iLCJtb3llbm5lU2Fpc29uIiwiaGF1dGVTYWlzb24iLCJkYXlPZlllYXIiLCJub2VsIiwibm91dmVsQW4iLCJkYXkiLCJ1bmVOdWl0ZWUiLCJhdmVydGlzc2VtZW50IiwidHJvaXNOdWl0ZWVzIiwicXVhdHJlTnVpdGVlcyIsIm5QZXJzIiwidGFyaWZQYXJQZXJzUGFyTnVpdCIsInByaXhTdXBwbCIsInN1cHBsZW1lbnRQYXJQZXJzIiwibWFwIiwibm9tIiwiRGF0ZUZuc1V0aWxzIiwic2hyaW5rIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLDRDQUFLLENBQUNDLE1BQU4sQ0FBYUMsNkRBQWI7QUFDQTtBQVFBO0FBQ0E7QUFLQTtBQU1BO0FBRUEsSUFBTUMsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3hDQyxRQUFJLEVBQUU7QUFDTEMsV0FBSyxFQUFFLEtBREY7QUFFTEMsWUFBTSxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkO0FBRkgsS0FEa0M7QUFLeENDLFFBQUksRUFBRTtBQUNMSCxXQUFLLEVBQUU7QUFERixLQUxrQztBQVF4Q0ksVUFBTSxFQUFFO0FBQ1BILFlBQU0sRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxDQUREO0FBRVBGLFdBQUssRUFBRTtBQUZBLEtBUmdDO0FBWXhDSyxlQUFXLEVBQUU7QUFDWkosWUFBTSxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkLENBREk7QUFFWkYsV0FBSyxFQUFFO0FBRkssS0FaMkI7QUFnQnhDTSxhQUFTLEVBQUU7QUFDVkwsWUFBTSxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkLENBREU7QUFFVkYsV0FBSyxFQUFFO0FBRkc7QUFoQjZCLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQXNCQSxJQUFNTyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpB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U0FBSyxFQUFDLDBCQVBQO0FBUUMsbUJBQWUsRUFBRTtBQUNoQmlFLFlBQU0sRUFBRTtBQURRLEtBUmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyRUQsRUFpRkMsTUFBQywyREFBRDtBQUNDLGFBQVMsRUFBRS9ELE9BQU8sQ0FBQ1AsU0FEcEI7QUFFQyxZQUFRLEVBQUVLLFFBRlg7QUFHQyxRQUFJLEVBQUMsU0FITjtBQUlDLFFBQUksRUFBQyxRQUpOO0FBS0MsZ0JBQVksRUFBQyxHQUxkO0FBTUMsTUFBRSxFQUFDLGlCQU5KO0FBT0MsU0FBSyxFQUFDLDJCQVBQO0FBUUMsbUJBQWUsRUFBRTtBQUNoQmlFLFlBQU0sRUFBRTtBQURRLEtBUmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqRkQsRUE4RkMsTUFBQyx3REFBRDtBQUNDLFFBQUksRUFBQyxRQUROO0FBRUMsV0FBTyxFQUFDLFdBRlQ7QUFHQyxTQUFLLEVBQUMsU0FIUDtBQUlDLGFBQVMsRUFBRS9ELE9BQU8sQ0FBQ1QsTUFKcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkE5RkQsRUFxR0VrQixNQUFNLElBQUl1RCxJQUFJLENBQUNDLFNBQUwsQ0FBZXhELE1BQWYsQ0FyR1osQ0FERDtBQXlHQSxDQXpxQkQ7O0dBQU1mLGU7VUFDdUNFLHVELEVBQzVCYixTOzs7S0FGWFcsZTtBQTJxQlNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rhcmlmcy5hOWQ2OTY1NzA4MjRlMzFjNjJkYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGVGbnNVdGlscyBmcm9tICdAZGF0ZS1pby9kYXRlLWZucyc7XHJcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgaXNCZXR3ZWVuIGZyb20gJ2RheWpzL3BsdWdpbi9pc0JldHdlZW4nO1xyXG5kYXlqcy5leHRlbmQoaXNCZXR3ZWVuKTtcclxuaW1wb3J0IHtcclxuXHRCdXR0b24sXHJcblx0Rm9ybUNvbnRyb2wsXHJcblx0SW5wdXRMYWJlbCxcclxuXHRNZW51SXRlbSxcclxuXHRTZWxlY3QsXHJcblx0VGV4dEZpZWxkLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7XHJcblx0TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIsXHJcblx0S2V5Ym9hcmRUaW1lUGlja2VyLFxyXG5cdEtleWJvYXJkRGF0ZVBpY2tlcixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvcGlja2Vycyc7XHJcbmltcG9ydCB7XHJcblx0Z2V0Q2FsZW5kYXIsXHJcblx0Z2V0Q2FsZW5kYXJCeUlkLFxyXG5cdGdldERlamFMb3VlLFxyXG5cdGdldFZhY2FuY2VzLFxyXG59IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvY2FsZW5kYXJBY3Rpb25zJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRmb3JtOiB7XHJcblx0XHR3aWR0aDogJzcwJScsXHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0fSxcclxuXHRyb290OiB7XHJcblx0XHR3aWR0aDogJzgwJScsXHJcblx0fSxcclxuXHRidXR0b246IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygyKSxcclxuXHRcdHdpZHRoOiAnODAlJyxcclxuXHR9LFxyXG5cdGZvcm1Db250cm9sOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHR3aWR0aDogJzgwJScsXHJcblx0fSxcclxuXHR0ZXh0RmllbGQ6IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdHdpZHRoOiAnODAlJyxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5jb25zdCBGb3JtQ2FsY3VsVGFyaWYgPSAoeyBnaXRlcyB9KSA9PiB7XHJcblx0Y29uc3QgeyBjb250cm9sLCByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKCk7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cdGNvbnN0IFtzZWxlY3RlZERhdGVEZWJ1dCwgc2V0U2VsZWN0ZWREYXRlRGVidXRdID0gUmVhY3QudXNlU3RhdGUoKTtcclxuXHRjb25zdCBbc2VsZWN0ZWREYXRlRmluLCBzZXRTZWxlY3RlZERhdGVGaW5dID0gUmVhY3QudXNlU3RhdGUoKTtcclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGUoKTtcclxuXHRjb25zdCBbaXNWYWNhbmNlcywgc2V0SXNWYWNhbmNlc10gPSBSZWFjdC51c2VTdGF0ZSgpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVEYXRlQ2hhbmdlRGVidXQgPSAoZGF0ZSkgPT4ge1xyXG5cdFx0c2V0U2VsZWN0ZWREYXRlRGVidXQoZGF0ZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlRGF0ZUNoYW5nZUZpbiA9IChkYXRlKSA9PiB7XHJcblx0XHRzZXRTZWxlY3RlZERhdGVGaW4oZGF0ZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4ge1xyXG5cdFx0Y29uc3QgeyBkYXRlRGVidXQsIGRhdGVGaW4sIGdpdGVTZWxlYywgbmJDaGllbiwgbmJFbmYsIG5iUGVycyB9ID0gZGF0YTtcclxuXHRcdGNvbnN0IGRhdGVEID0gZGF5anMoZGF0ZURlYnV0KTtcclxuXHRcdGNvbnN0IGRhdGVGID0gZGF5anMoZGF0ZUZpbik7XHJcblx0XHRjb25zb2xlLmxvZyhkYXRlRCk7XHJcblx0XHRnZXRWYWNhbmNlcyhkYXRlRCwgZGF0ZUYpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZygncmVzdWx0IHZhdXQnLCByZXN1bHQpO1xyXG5cdFx0XHRzZXRJc1ZhY2FuY2VzKHJlc3VsdC52YWNhbmNlcyk7XHJcblx0XHRcdC8vIHJldHVybiByZXN1bHQudmFjYW5jZXM7XHJcblx0XHR9KTtcclxuXHJcblx0XHRjb25zdCBudWl0ZWUgPSBkYXRlRi5kaWZmKGRhdGVELCAnZGF5Jyk7XHJcblxyXG5cdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRkYXRlRGVidXQsXHJcblx0XHRcdGRhdGVGaW4sXHJcblx0XHRcdGdpdGVTZWxlYyxcclxuXHRcdFx0bmJDaGllbixcclxuXHRcdFx0bmJFbmYsXHJcblx0XHRcdG5iUGVycyxcclxuXHRcdFx0bnVpdGVlLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coJ3ZhbHVlcycsIHZhbHVlcyk7XHJcblxyXG5cdFx0Zm9yIChjb25zdCBnaXRlIG9mIGdpdGVzKSB7XHJcblx0XHRcdGlmIChnaXRlLnNsdWcgPT09IGdpdGVTZWxlYykge1xyXG5cdFx0XHRcdGdldERlamFMb3VlKGdpdGUuY2FsZW5kYXJJZCwgZGF0ZUQsIGRhdGVGKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXN1bHQubG91ZSkge1xyXG5cdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRkZWphTG91ZU1zZzpcclxuXHRcdFx0XHRcdFx0XHRcdCdJbCBzZW1ibGUgcXVlIGNlIGfDrnRlIHNvaXQgZMOpasOgIGxvdcOpIGF1eCBkYXRlcyBpbmRpcXXDqWVzJyxcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRkZWphTG91ZU1zZzpcclxuXHRcdFx0XHRcdFx0XHRcdFwiQ2UgZ8OudGUgc2VtYmxlIGxpYnJlIHBvdXIgbGUgbW9tZW50LCBuJ2jDqXNpdGV6IHBhcyDDoCBmYWlyZSB1bmUgZGVtYW5kZSBkZSBsb2NhdGlvblwiLFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHQvLyBPbiByw6ljdXDDqHJlIGxlIGfDrnRlIHNlbGVjdGlvbm7DqVxyXG5cdFx0XHRcdGlmIChudWl0ZWUgPT09IDcgfHwgbnVpdGVlID09PSAxNCB8fCBudWl0ZWUgPT09IDIxKSB7XHJcblx0XHRcdFx0XHRpZiAoaXNWYWNhbmNlcykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ2FzIGfDqW7DqXJhbCA6IG9uIGVzdCBlbiB2YW5jYW5jZXMnKTtcclxuXHRcdFx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0XHRcdGRheWpzKGRhdGVEKS5pc0JldHdlZW4oXHJcblx0XHRcdFx0XHRcdFx0XHRkYXlqcygpLm1vbnRoKDYpLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGF5anMoKS5tb250aCg3KSxcclxuXHRcdFx0XHRcdFx0XHRcdG51bGwsXHJcblx0XHRcdFx0XHRcdFx0XHQnW10nXHJcblx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnb24gZXN0IGVuIGhhdXRlIHNhaXNvbiDDoCBsYSBzZW1haW5lJyk7XHJcblx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuaGF1dGVTYWlzb24sXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdFx0XHRcdFx0ZGF5anMoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmRheU9mWWVhcigzNTgpXHJcblx0XHRcdFx0XHRcdFx0XHQuaXNCZXR3ZWVuKGRhdGVELCBkYXRlRiwgbnVsbCwgJ1tdJylcclxuXHRcdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ29uIGVzdCDDoCBub2VsIMOgIGxhIHNlbWFpbmUnKTtcclxuXHRcdFx0XHRcdFx0XHRwcml4VG90YWwgPVxyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmhhdXRlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm5vZWw7XHJcblx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBwcml4VG90YWwgfSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdFx0XHRcdFx0ZGF5anMoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmRheU9mWWVhcigzNjUpXHJcblx0XHRcdFx0XHRcdFx0XHQuaXNCZXR3ZWVuKGRhdGVELCBkYXRlRiwgbnVsbCwgJ1tdJylcclxuXHRcdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ29uIGVzdCBhdSBub3V2ZWwgYW4gw6AgbGEgc2VtYWluZScpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm1veWVubmVTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5oYXV0ZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm5vZWwgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5ub3V2ZWxBbixcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdCdPbiBlc3QgZGFucyBsZSBjYXMgNyBudWl0w6llcyBlbiB2YWNhbmNlcyBzY29sYWlyZXMgbW95ZW5uZSBzYWlzb24nXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbixcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyA3IG51aXTDqWVzIGhvcnMgdmFjYW5jZXMnKTtcclxuXHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbixcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPCA3KSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ2FzIGfDqW7DqXJhbCA6IG51aXTDqWVzIGluZsOpcmlldXJlIMOgIDcnKTtcclxuXHRcdFx0XHRcdGlmIChkYXlqcygpLmRheSg2KS5pc0JldHdlZW4oZGF0ZUQsIGRhdGVGLCBudWxsLCAnW10nKSkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ2FzIGVuIHdlZWstZW5kIG1vaW5zIGRlIDcgbnVpdHMnKTtcclxuXHRcdFx0XHRcdFx0aWYgKG51aXRlZSA9PT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0J0NhcyB3ZWVrLWVuZCAxIG51aXQgKyBtc2cgYXZlcnRpc3NlbWVudCdcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlIC8gMiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudW5lTnVpdGVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0YXZlcnRpc3NlbWVudDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0VuIHdlZWsgZW5kIG5vdXMgbG91b25zIDIgbnVpdMOpZXMsICh0csOocyBleGNlcHRpb25uZWxlbWVudCAxIHNldWxlKScsXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSAyKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyB3ZWVrLWVuZCAyIG51aXRzJyk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UsXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSAzKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyB3ZWVrLWVuZCAzIG51aXRzJyk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRyb2lzTnVpdGVlcyxcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDQpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ2FzIHdlZWstZW5kIDQgbnVpdHMnKTtcclxuXHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUucXVhdHJlTnVpdGVlcyxcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDUpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdCdDYXMgd2Vlay1lbmQgNSBudWl0cyAtIFF1ZWwgdGFyaWYgPyBWb2lyIE1hbWFuJ1xyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIHByaXhUb3RhbCB9KTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDYpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdCdDYXMgd2Vlay1lbmQgNiBudWl0cyAtIFF1ZWwgdGFyaWYgPyBWb2lyIE1hbWFuJ1xyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIHByaXhUb3RhbCB9KTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdCdBdXRyZXMgY2FzIHdlZWstZW5kIGluZsOpcmlldXIgw6AgNyBudWl0cyAtIFBldSBwcm9iYWJsZS4uLidcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHQnQ2FzIGfDqW7DqXJhbCA6IG1vaW5zIGRlIDcgbnVpdHMgZXQgc2FucyBzYW1lZGknXHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdGlmIChpc1ZhY2FuY2VzKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHQnQ2FzIGfDqW7DqXJhbCA6IGhvcnMgV0UgbW9pbnMgZGUgNyBudWl0cyBtYWlzIGVuIHZhY2FuY2VzIC0gVGFyaWYgc2FucyB0ZW5pciBjb21wdGUgZHUgcGxhZm9uZCdcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChudWl0ZWUgPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgMSBudWl0IG1haXMgZW4gdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDEsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4U3VwcGw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogMSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgMiBudWl0cyBtYWlzIGVuIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgTW9pbnMgZGUgJHtnaXRlLm5QZXJzfSBwZXJzYCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4U3VwcGw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogMixcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgMyBudWl0cyBtYWlzIGVuIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFN1cHBsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDQgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ0LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiA0LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gNSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCA1IG51aXRzIG1haXMgZW4gdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4U3VwcGw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogNSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDYpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgNiBudWl0cyBtYWlzIGVuIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ2LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDYsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFN1cHBsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDYsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0F1dHJlcyBjYXMgd2Vlay1lbmQgaW5mw6lyaWV1ciDDoCA3IG51aXRzIC0gUGV1IHByb2JhYmxlLi4uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHQnQ2FzIGfDqW7DqXJhbCA6IGhvcnMgV0UgbW9pbnMgZGUgNyBudWl0cyBtYWlzIGVuIHZhY2FuY2VzIC0gVGFyaWYgYXZlYyBwbGFmb25kJ1xyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRpZiAobnVpdGVlID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDEgbnVpdCBldCBob3JzIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQubW95ZW5uZVNhaXNvbiAtXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlKSAvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcpICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4U3VwcGw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogMSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgMiBudWl0cyBldCBob3JzIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQyLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCgoZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50c1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5tb3llbm5lU2Fpc29uIC1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UpIC9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NykgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQyICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiAyLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gMykge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCAzIG51aXRzIGV0IGhvcnMgdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KChnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lm1veWVubmVTYWlzb24gLVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSkgL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ3KSAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDMgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFN1cHBsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDQgbnVpdHMgZXQgaG9ycyB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQubW95ZW5uZVNhaXNvbiAtXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlKSAvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcpICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NCArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4U3VwcGw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogNCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgNSBudWl0cyBldCBob3JzIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ1LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCgoZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50c1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5tb3llbm5lU2Fpc29uIC1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UpIC9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NykgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ1ICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiA1LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gNikge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCA2IG51aXRzIGV0IGhvcnMgdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDYsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KChnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lm1veWVubmVTYWlzb24gLVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSkgL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ3KSAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDYgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFN1cHBsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDYsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnQXV0cmVzIGNhcyBudWl0ID4gNyBldCAhPT0gZGUgMTQgZXQgMjEnKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdHw6lyZXIgY2FzID4zMCBpY2knKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cclxuXHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0PElucHV0TGFiZWxcclxuXHRcdFx0XHRcdHNocmlua1xyXG5cdFx0XHRcdFx0aWQ9J2RlbW8tc2ltcGxlLXNlbGVjdC1wbGFjZWhvbGRlci1sYWJlbC1sYWJlbCc+XHJcblx0XHRcdFx0XHRHaXRlXHJcblx0XHRcdFx0PC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0bmFtZT0nZ2l0ZVNlbGVjJ1xyXG5cdFx0XHRcdFx0YXM9e1xyXG5cdFx0XHRcdFx0XHQ8U2VsZWN0IGlkPSdkZWNsZW5jaGV1ci1zZWxlY3QnIGRlZmF1bHRWYWx1ZT0nJz5cclxuXHRcdFx0XHRcdFx0XHR7Z2l0ZXMubWFwKChnaXRlKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9e2dpdGUuc2x1Z30ga2V5PXtnaXRlLnNsdWd9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Z2l0ZS5ub219XHJcblx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHQ8L1NlbGVjdD5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cclxuXHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0PE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyIHV0aWxzPXtEYXRlRm5zVXRpbHN9PlxyXG5cdFx0XHRcdFx0PEtleWJvYXJkRGF0ZVBpY2tlclxyXG5cdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdG1hcmdpbj0nbm9ybWFsJ1xyXG5cdFx0XHRcdFx0XHRpZD0nZGF0ZS1waWNrZXItZGlhbG9nJ1xyXG5cdFx0XHRcdFx0XHRuYW1lPSdkYXRlRGVidXQnXHJcblx0XHRcdFx0XHRcdGxhYmVsPSdEYXRlIGRlIGTDqWJ1dCdcclxuXHRcdFx0XHRcdFx0Zm9ybWF0PSdNTS9kZC95eXl5J1xyXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9JydcclxuXHRcdFx0XHRcdFx0dmFsdWU9e3NlbGVjdGVkRGF0ZURlYnV0fVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlRGF0ZUNoYW5nZURlYnV0fVxyXG5cdFx0XHRcdFx0XHRLZXlib2FyZEJ1dHRvblByb3BzPXt7XHJcblx0XHRcdFx0XHRcdFx0J2FyaWEtbGFiZWwnOiAnY2hhbmdlIGRhdGUnLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxLZXlib2FyZERhdGVQaWNrZXJcclxuXHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHQvLyBkaXNhYmxlVG9vbGJhclxyXG5cdFx0XHRcdFx0XHRuYW1lPSdkYXRlRmluJ1xyXG5cdFx0XHRcdFx0XHRmb3JtYXQ9J01NL2RkL3l5eXknXHJcblx0XHRcdFx0XHRcdG1hcmdpbj0nbm9ybWFsJ1xyXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9JzAyLzI1LzIwMjEnXHJcblx0XHRcdFx0XHRcdGlkPSdkYXRlLXBpY2tlci1pbmxpbmUnXHJcblx0XHRcdFx0XHRcdGxhYmVsPSdEYXRlIGRlIGZpbidcclxuXHRcdFx0XHRcdFx0dmFsdWU9e3NlbGVjdGVkRGF0ZUZpbn1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZURhdGVDaGFuZ2VGaW59XHJcblx0XHRcdFx0XHRcdEtleWJvYXJkQnV0dG9uUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6ICdjaGFuZ2UgZGF0ZScsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXI+XHJcblx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblxyXG5cdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuXHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0bmFtZT0nbmJQZXJzJ1xyXG5cdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRkZWZhdWx0VmFsdWU9JzEwJ1xyXG5cdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0bGFiZWw9J05vbWJyZSBkZSBwZXJzb25uZXMgYXUgdG90YWwnXHJcblx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHJcblx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRuYW1lPSduYkVuZidcclxuXHRcdFx0XHR0eXBlPSdudW1iZXInXHJcblx0XHRcdFx0ZGVmYXVsdFZhbHVlPScyJ1xyXG5cdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0bGFiZWw9XCJOb21icmUgZCdlbmZhbnRzIC0xOCBhbnNcIlxyXG5cdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRuYW1lPSduYkNoaWVuJ1xyXG5cdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRkZWZhdWx0VmFsdWU9JzAnXHJcblx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRsYWJlbD0nQ2hpZW5zICgz4oKsL2ovYW5pbWFsKSdcclxuXHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQvPlxyXG5cclxuXHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdHR5cGU9J3N1Ym1pdCdcclxuXHRcdFx0XHR2YXJpYW50PSdjb250YWluZWQnXHJcblx0XHRcdFx0Y29sb3I9J3ByaW1hcnknXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0Q2FsY3VsZXIgbGUgdGFyaWZcclxuXHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdHt2YWx1ZXMgJiYgSlNPTi5zdHJpbmdpZnkodmFsdWVzKX1cclxuXHRcdDwvZm9ybT5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUNhbGN1bFRhcmlmO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9