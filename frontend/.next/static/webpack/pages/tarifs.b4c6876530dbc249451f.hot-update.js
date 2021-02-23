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

  var _useState = useState(),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      selectedDateDebut = _useState2[0],
      setSelectedDateDebut = _useState2[1];

  var _useState3 = useState(),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      selectedDateFin = _useState4[0],
      setSelectedDateFin = _useState4[1];

  var _useState5 = useState(),
      _useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      values = _useState6[0],
      setValues = _useState6[1];

  var _useState7 = useState(),
      _useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      dateDebut = _useState8[0],
      setDateDebut = _useState8[1];

  var _useState9 = useState(),
      _useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      dateFin = _useState10[0],
      setDateFin = _useState10[1];

  var _useState11 = useState(),
      _useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
      isVacances = _useState12[0],
      setIsVacances = _useState12[1];

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
    Object(_actions_calendarActions__WEBPACK_IMPORTED_MODULE_10__["getVacances"])(dateD, dateF).then(function (result) {
      // console.log('result vaut', result);
      setIsVacances(result.vacances); // return result.vacances;
    });
    var nuitee = dateF.diff(dateD, 'day');
    setDateDebut(dateDebut);
    setDateFin(dateFin);

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

    console.log("Location du ".concat(dateDebut, " au ").concat(dateFin));
  };

  return __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    className: classes.form,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 618,
      columnNumber: 3
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputLabel"], {
    shrink: true,
    id: "demo-simple-select-placeholder-label-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 620,
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
        lineNumber: 629,
        columnNumber: 7
      }
    }, gites.map(function (gite) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["MenuItem"], {
        value: gite.slug,
        key: gite.slug,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 631,
          columnNumber: 9
        }
      }, gite.nom);
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625,
      columnNumber: 5
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640,
      columnNumber: 4
    }
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_9__["MuiPickersUtilsProvider"], {
    utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 641,
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
      lineNumber: 642,
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
      lineNumber: 656,
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
      lineNumber: 674,
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
      lineNumber: 687,
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
      lineNumber: 699,
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
      lineNumber: 712,
      columnNumber: 4
    }
  }, "Calculer le tarif"), values && JSON.stringify(values));
};

_s(FormCalculTarif, "4neDv+89zk1Lo7QyCsU13j7ZSF4=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9Gb3JtQ2FsY3VsVGFyaWYuanMiXSwibmFtZXMiOlsiZGF5anMiLCJleHRlbmQiLCJpc0JldHdlZW4iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJmb3JtIiwid2lkdGgiLCJtYXJnaW4iLCJzcGFjaW5nIiwicm9vdCIsImJ1dHRvbiIsImZvcm1Db250cm9sIiwidGV4dEZpZWxkIiwiRm9ybUNhbGN1bFRhcmlmIiwiZ2l0ZXMiLCJ1c2VGb3JtIiwiY29udHJvbCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiY2xhc3NlcyIsInRva2VuIiwiZ2V0Q29va2llIiwidXNlU3RhdGUiLCJzZWxlY3RlZERhdGVEZWJ1dCIsInNldFNlbGVjdGVkRGF0ZURlYnV0Iiwic2VsZWN0ZWREYXRlRmluIiwic2V0U2VsZWN0ZWREYXRlRmluIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiZGF0ZURlYnV0Iiwic2V0RGF0ZURlYnV0IiwiZGF0ZUZpbiIsInNldERhdGVGaW4iLCJpc1ZhY2FuY2VzIiwic2V0SXNWYWNhbmNlcyIsImhhbmRsZURhdGVDaGFuZ2VEZWJ1dCIsImRhdGUiLCJoYW5kbGVEYXRlQ2hhbmdlRmluIiwib25TdWJtaXQiLCJkYXRhIiwiZ2l0ZVNlbGVjIiwibmJDaGllbiIsIm5iRW5mIiwibmJQZXJzIiwiZGF0ZUQiLCJkYXRlRiIsImdldFZhY2FuY2VzIiwidGhlbiIsInJlc3VsdCIsInZhY2FuY2VzIiwibnVpdGVlIiwiZGlmZiIsImdpdGUiLCJzbHVnIiwiZ2V0RGVqYUxvdWUiLCJjYWxlbmRhcklkIiwibG91ZSIsImRlamFMb3VlTXNnIiwiY29uc29sZSIsImxvZyIsIm1vbnRoIiwicHJpeFRvdGFsIiwidGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlIiwidGFyaWZEZUJhc2UiLCJjb2VmZmljaWVudHMiLCJiYXNzZVNhaXNvbiIsIm1veWVubmVTYWlzb24iLCJoYXV0ZVNhaXNvbiIsImRheU9mWWVhciIsIm5vZWwiLCJub3V2ZWxBbiIsImRheSIsInVuZU51aXRlZSIsImF2ZXJ0aXNzZW1lbnQiLCJ0cm9pc051aXRlZXMiLCJxdWF0cmVOdWl0ZWVzIiwiblBlcnMiLCJ0YXJpZlBhclBlcnNQYXJOdWl0IiwicHJpeFN1cHBsIiwic3VwcGxlbWVudFBhclBlcnMiLCJtYXAiLCJub20iLCJEYXRlRm5zVXRpbHMiLCJzaHJpbmsiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsNENBQUssQ0FBQ0MsTUFBTixDQUFhQyw2REFBYjtBQUNBO0FBUUE7QUFDQTtBQUtBO0FBTUE7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDeENDLFFBQUksRUFBRTtBQUNMQyxXQUFLLEVBQUUsS0FERjtBQUVMQyxZQUFNLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQ7QUFGSCxLQURrQztBQUt4Q0MsUUFBSSxFQUFFO0FBQ0xILFdBQUssRUFBRTtBQURGLEtBTGtDO0FBUXhDSSxVQUFNLEVBQUU7QUFDUEgsWUFBTSxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkLENBREQ7QUFFUEYsV0FBSyxFQUFFO0FBRkEsS0FSZ0M7QUFZeENLLGVBQVcsRUFBRTtBQUNaSixZQUFNLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsQ0FESTtBQUVaRixXQUFLLEVBQUU7QUFGSyxLQVoyQjtBQWdCeENNLGFBQVMsRUFBRTtBQUNWTCxZQUFNLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsQ0FERTtBQUVWRixXQUFLLEVBQUU7QUFGRztBQWhCNkIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7O0FBc0JBLElBQU1PLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBZTtBQUFBOztB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TSxFQUFFO0FBRFEsS0FSbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJFRCxFQWlGQyxNQUFDLDJEQUFEO0FBQ0MsYUFBUyxFQUFFaEUsT0FBTyxDQUFDUCxTQURwQjtBQUVDLFlBQVEsRUFBRUssUUFGWDtBQUdDLFFBQUksRUFBQyxTQUhOO0FBSUMsUUFBSSxFQUFDLFFBSk47QUFLQyxnQkFBWSxFQUFDLEdBTGQ7QUFNQyxNQUFFLEVBQUMsaUJBTko7QUFPQyxTQUFLLEVBQUMsMkJBUFA7QUFRQyxtQkFBZSxFQUFFO0FBQ2hCa0UsWUFBTSxFQUFFO0FBRFEsS0FSbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpGRCxFQThGQyxNQUFDLHdEQUFEO0FBQ0MsUUFBSSxFQUFDLFFBRE47QUFFQyxXQUFPLEVBQUMsV0FGVDtBQUdDLFNBQUssRUFBQyxTQUhQO0FBSUMsYUFBUyxFQUFFaEUsT0FBTyxDQUFDVCxNQUpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQTlGRCxFQXFHRWlCLE1BQU0sSUFBSXlELElBQUksQ0FBQ0MsU0FBTCxDQUFlMUQsTUFBZixDQXJHWixDQUREO0FBeUdBLENBaHFCRDs7R0FBTWQsZTtVQUN1Q0UsdUQsRUFDNUJiLFM7OztLQUZYVyxlO0FBa3FCU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGFyaWZzLmI0YzY4NzY1MzBkYmMyNDk0NTFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0ZUZuc1V0aWxzIGZyb20gJ0BkYXRlLWlvL2RhdGUtZm5zJztcclxuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBpc0JldHdlZW4gZnJvbSAnZGF5anMvcGx1Z2luL2lzQmV0d2Vlbic7XHJcbmRheWpzLmV4dGVuZChpc0JldHdlZW4pO1xyXG5pbXBvcnQge1xyXG5cdEJ1dHRvbixcclxuXHRGb3JtQ29udHJvbCxcclxuXHRJbnB1dExhYmVsLFxyXG5cdE1lbnVJdGVtLFxyXG5cdFNlbGVjdCxcclxuXHRUZXh0RmllbGQsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtcclxuXHRNdWlQaWNrZXJzVXRpbHNQcm92aWRlcixcclxuXHRLZXlib2FyZFRpbWVQaWNrZXIsXHJcblx0S2V5Ym9hcmREYXRlUGlja2VyLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9waWNrZXJzJztcclxuaW1wb3J0IHtcclxuXHRnZXRDYWxlbmRhcixcclxuXHRnZXRDYWxlbmRhckJ5SWQsXHJcblx0Z2V0RGVqYUxvdWUsXHJcblx0Z2V0VmFjYW5jZXMsXHJcbn0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9jYWxlbmRhckFjdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdGZvcm06IHtcclxuXHRcdHdpZHRoOiAnNzAlJyxcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygyKSxcclxuXHR9LFxyXG5cdHJvb3Q6IHtcclxuXHRcdHdpZHRoOiAnODAlJyxcclxuXHR9LFxyXG5cdGJ1dHRvbjoge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdFx0d2lkdGg6ICc4MCUnLFxyXG5cdH0sXHJcblx0Zm9ybUNvbnRyb2w6IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdHdpZHRoOiAnODAlJyxcclxuXHR9LFxyXG5cdHRleHRGaWVsZDoge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0d2lkdGg6ICc4MCUnLFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEZvcm1DYWxjdWxUYXJpZiA9ICh7IGdpdGVzIH0pID0+IHtcclxuXHRjb25zdCB7IGNvbnRyb2wsIHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm0oKTtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblx0Y29uc3QgW3NlbGVjdGVkRGF0ZURlYnV0LCBzZXRTZWxlY3RlZERhdGVEZWJ1dF0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtzZWxlY3RlZERhdGVGaW4sIHNldFNlbGVjdGVkRGF0ZUZpbl0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtkYXRlRGVidXQsIHNldERhdGVEZWJ1dF0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtkYXRlRmluLCBzZXREYXRlRmluXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW2lzVmFjYW5jZXMsIHNldElzVmFjYW5jZXNdID0gdXNlU3RhdGUoKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlRGF0ZUNoYW5nZURlYnV0ID0gKGRhdGUpID0+IHtcclxuXHRcdHNldFNlbGVjdGVkRGF0ZURlYnV0KGRhdGUpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZURhdGVDaGFuZ2VGaW4gPSAoZGF0ZSkgPT4ge1xyXG5cdFx0c2V0U2VsZWN0ZWREYXRlRmluKGRhdGUpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IHtcclxuXHRcdGNvbnN0IHsgZGF0ZURlYnV0LCBkYXRlRmluLCBnaXRlU2VsZWMsIG5iQ2hpZW4sIG5iRW5mLCBuYlBlcnMgfSA9IGRhdGE7XHJcblx0XHRjb25zdCBkYXRlRCA9IGRheWpzKGRhdGVEZWJ1dCk7XHJcblx0XHRjb25zdCBkYXRlRiA9IGRheWpzKGRhdGVGaW4pO1xyXG5cdFx0Z2V0VmFjYW5jZXMoZGF0ZUQsIGRhdGVGKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ3Jlc3VsdCB2YXV0JywgcmVzdWx0KTtcclxuXHRcdFx0c2V0SXNWYWNhbmNlcyhyZXN1bHQudmFjYW5jZXMpO1xyXG5cdFx0XHQvLyByZXR1cm4gcmVzdWx0LnZhY2FuY2VzO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgbnVpdGVlID0gZGF0ZUYuZGlmZihkYXRlRCwgJ2RheScpO1xyXG5cdFx0c2V0RGF0ZURlYnV0KGRhdGVEZWJ1dCk7XHJcblx0XHRzZXREYXRlRmluKGRhdGVGaW4pO1xyXG5cclxuXHRcdGZvciAoY29uc3QgZ2l0ZSBvZiBnaXRlcykge1xyXG5cdFx0XHRpZiAoZ2l0ZS5zbHVnID09PSBnaXRlU2VsZWMpIHtcclxuXHRcdFx0XHRnZXREZWphTG91ZShnaXRlLmNhbGVuZGFySWQsIGRhdGVELCBkYXRlRikudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzdWx0LmxvdWUpIHtcclxuXHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdFx0ZGVqYUxvdWVNc2c6XHJcblx0XHRcdFx0XHRcdFx0XHQnSWwgc2VtYmxlIHF1ZSBjZSBnw650ZSBzb2l0IGTDqWrDoCBsb3XDqSBhdXggZGF0ZXMgaW5kaXF1w6llcycsXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdFx0ZGVqYUxvdWVNc2c6XHJcblx0XHRcdFx0XHRcdFx0XHRcIkNlIGfDrnRlIHNlbWJsZSBsaWJyZSBwb3VyIGxlIG1vbWVudCwgbidow6lzaXRleiBwYXMgw6AgZmFpcmUgdW5lIGRlbWFuZGUgZGUgbG9jYXRpb25cIixcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ly8gT24gcsOpY3Vww6hyZSBsZSBnw650ZSBzZWxlY3Rpb25uw6lcclxuXHRcdFx0XHRpZiAobnVpdGVlID09PSA3IHx8IG51aXRlZSA9PT0gMTQgfHwgbnVpdGVlID09PSAyMSkge1xyXG5cdFx0XHRcdFx0aWYgKGlzVmFjYW5jZXMpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyBnw6luw6lyYWwgOiBvbiBlc3QgZW4gdmFuY2FuY2VzJyk7XHJcblx0XHRcdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdFx0XHRkYXlqcyhkYXRlRCkuaXNCZXR3ZWVuKFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGF5anMoKS5tb250aCg2KSxcclxuXHRcdFx0XHRcdFx0XHRcdGRheWpzKCkubW9udGgoNyksXHJcblx0XHRcdFx0XHRcdFx0XHRudWxsLFxyXG5cdFx0XHRcdFx0XHRcdFx0J1tdJ1xyXG5cdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ29uIGVzdCBlbiBoYXV0ZSBzYWlzb24gw6AgbGEgc2VtYWluZScpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmhhdXRlU2Fpc29uLFxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKFxyXG5cdFx0XHRcdFx0XHRcdGRheWpzKClcclxuXHRcdFx0XHRcdFx0XHRcdC5kYXlPZlllYXIoMzU4KVxyXG5cdFx0XHRcdFx0XHRcdFx0LmlzQmV0d2VlbihkYXRlRCwgZGF0ZUYsIG51bGwsICdbXScpXHJcblx0XHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdvbiBlc3Qgw6Agbm9lbCDDoCBsYSBzZW1haW5lJyk7XHJcblx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsID1cclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5oYXV0ZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5ub2VsO1xyXG5cdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgcHJpeFRvdGFsIH0pO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKFxyXG5cdFx0XHRcdFx0XHRcdGRheWpzKClcclxuXHRcdFx0XHRcdFx0XHRcdC5kYXlPZlllYXIoMzY1KVxyXG5cdFx0XHRcdFx0XHRcdFx0LmlzQmV0d2VlbihkYXRlRCwgZGF0ZUYsIG51bGwsICdbXScpXHJcblx0XHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdvbiBlc3QgYXUgbm91dmVsIGFuIMOgIGxhIHNlbWFpbmUnKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuaGF1dGVTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5ub2VsICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubm91dmVsQW4sXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHQnT24gZXN0IGRhbnMgbGUgY2FzIDcgbnVpdMOpZXMgZW4gdmFjYW5jZXMgc2NvbGFpcmVzIG1veWVubmUgc2Fpc29uJ1xyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm1veWVubmVTYWlzb24sXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdDYXMgNyBudWl0w6llcyBob3JzIHZhY2FuY2VzJyk7XHJcblx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24sXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlIDwgNykge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyBnw6luw6lyYWwgOiBudWl0w6llcyBpbmbDqXJpZXVyZSDDoCA3Jyk7XHJcblx0XHRcdFx0XHRpZiAoZGF5anMoKS5kYXkoNikuaXNCZXR3ZWVuKGRhdGVELCBkYXRlRiwgbnVsbCwgJ1tdJykpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyBlbiB3ZWVrLWVuZCBtb2lucyBkZSA3IG51aXRzJyk7XHJcblx0XHRcdFx0XHRcdGlmIChudWl0ZWUgPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdCdDYXMgd2Vlay1lbmQgMSBudWl0ICsgbXNnIGF2ZXJ0aXNzZW1lbnQnXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSAvIDIgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnVuZU51aXRlZSxcclxuXHRcdFx0XHRcdFx0XHRcdGF2ZXJ0aXNzZW1lbnQ6XHJcblx0XHRcdFx0XHRcdFx0XHRcdCdFbiB3ZWVrIGVuZCBub3VzIGxvdW9ucyAyIG51aXTDqWVzLCAodHLDqHMgZXhjZXB0aW9ubmVsZW1lbnQgMSBzZXVsZSknLFxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gMikge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdDYXMgd2Vlay1lbmQgMiBudWl0cycpO1xyXG5cdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlLFxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gMykge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdDYXMgd2Vlay1lbmQgMyBudWl0cycpO1xyXG5cdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50cm9pc051aXRlZXMsXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA0KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyB3ZWVrLWVuZCA0IG51aXRzJyk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnF1YXRyZU51aXRlZXMsXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA1KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHQnQ2FzIHdlZWstZW5kIDUgbnVpdHMgLSBRdWVsIHRhcmlmID8gVm9pciBNYW1hbidcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBwcml4VG90YWwgfSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA2KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHQnQ2FzIHdlZWstZW5kIDYgbnVpdHMgLSBRdWVsIHRhcmlmID8gVm9pciBNYW1hbidcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBwcml4VG90YWwgfSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHQnQXV0cmVzIGNhcyB3ZWVrLWVuZCBpbmbDqXJpZXVyIMOgIDcgbnVpdHMgLSBQZXUgcHJvYmFibGUuLi4nXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0J0NhcyBnw6luw6lyYWwgOiBtb2lucyBkZSA3IG51aXRzIGV0IHNhbnMgc2FtZWRpJ1xyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRpZiAoaXNWYWNhbmNlcykge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0J0NhcyBnw6luw6lyYWwgOiBob3JzIFdFIG1vaW5zIGRlIDcgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcyAtIFRhcmlmIHNhbnMgdGVuaXIgY29tcHRlIGR1IHBsYWZvbmQnXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRpZiAobnVpdGVlID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDEgbnVpdCBtYWlzIGVuIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQxLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDEsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFN1cHBsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDEsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSAyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDIgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coYE1vaW5zIGRlICR7Z2l0ZS5uUGVyc30gcGVyc2ApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQyLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFN1cHBsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSAzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDMgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiAzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gNCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCA0IG51aXRzIG1haXMgZW4gdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4U3VwcGw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogNCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgNSBudWl0cyBtYWlzIGVuIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ1LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFN1cHBsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA2KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDYgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NixcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ2LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiA2LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdBdXRyZXMgY2FzIHdlZWstZW5kIGluZsOpcmlldXIgw6AgNyBudWl0cyAtIFBldSBwcm9iYWJsZS4uLidcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0J0NhcyBnw6luw6lyYWwgOiBob3JzIFdFIG1vaW5zIGRlIDcgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcyAtIFRhcmlmIGF2ZWMgcGxhZm9uZCdcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0aWYgKG51aXRlZSA9PT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCAxIG51aXQgZXQgaG9ycyB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDEsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KChnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lm1veWVubmVTYWlzb24gLVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSkgL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ3KSAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDEgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFN1cHBsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDEsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSAyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDIgbnVpdHMgZXQgaG9ycyB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MixcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQubW95ZW5uZVNhaXNvbiAtXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlKSAvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcpICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4U3VwcGw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogMixcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgMyBudWl0cyBldCBob3JzIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCgoZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50c1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5tb3llbm5lU2Fpc29uIC1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UpIC9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NykgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQzICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiAzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gNCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCA0IG51aXRzIGV0IGhvcnMgdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KChnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lm1veWVubmVTYWlzb24gLVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSkgL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ3KSAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDQgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFN1cHBsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA1KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDUgbnVpdHMgZXQgaG9ycyB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJpeFRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQubW95ZW5uZVNhaXNvbiAtXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlKSAvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcpICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4U3VwcGw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogNSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDYpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgNiBudWl0cyBldCBob3JzIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcml4VG90YWw6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ2LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhUb3RhbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCgoZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50c1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5tb3llbm5lU2Fpc29uIC1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UpIC9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NykgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ2ICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByaXhTdXBwbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiA2LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ0F1dHJlcyBjYXMgbnVpdCA+IDcgZXQgIT09IGRlIDE0IGV0IDIxJyk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnR8OpcmVyIGNhcyA+MzAgaWNpJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRjb25zb2xlLmxvZyhgTG9jYXRpb24gZHUgJHtkYXRlRGVidXR9IGF1ICR7ZGF0ZUZpbn1gKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cclxuXHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0PElucHV0TGFiZWxcclxuXHRcdFx0XHRcdHNocmlua1xyXG5cdFx0XHRcdFx0aWQ9J2RlbW8tc2ltcGxlLXNlbGVjdC1wbGFjZWhvbGRlci1sYWJlbC1sYWJlbCc+XHJcblx0XHRcdFx0XHRHaXRlXHJcblx0XHRcdFx0PC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0bmFtZT0nZ2l0ZVNlbGVjJ1xyXG5cdFx0XHRcdFx0YXM9e1xyXG5cdFx0XHRcdFx0XHQ8U2VsZWN0IGlkPSdkZWNsZW5jaGV1ci1zZWxlY3QnIGRlZmF1bHRWYWx1ZT0nJz5cclxuXHRcdFx0XHRcdFx0XHR7Z2l0ZXMubWFwKChnaXRlKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9e2dpdGUuc2x1Z30ga2V5PXtnaXRlLnNsdWd9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Z2l0ZS5ub219XHJcblx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHQ8L1NlbGVjdD5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cclxuXHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0PE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyIHV0aWxzPXtEYXRlRm5zVXRpbHN9PlxyXG5cdFx0XHRcdFx0PEtleWJvYXJkRGF0ZVBpY2tlclxyXG5cdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdG1hcmdpbj0nbm9ybWFsJ1xyXG5cdFx0XHRcdFx0XHRpZD0nZGF0ZS1waWNrZXItZGlhbG9nJ1xyXG5cdFx0XHRcdFx0XHRuYW1lPSdkYXRlRGVidXQnXHJcblx0XHRcdFx0XHRcdGxhYmVsPSdEYXRlIGRlIGTDqWJ1dCdcclxuXHRcdFx0XHRcdFx0Zm9ybWF0PSdNTS9kZC95eXl5J1xyXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9JydcclxuXHRcdFx0XHRcdFx0dmFsdWU9e3NlbGVjdGVkRGF0ZURlYnV0fVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlRGF0ZUNoYW5nZURlYnV0fVxyXG5cdFx0XHRcdFx0XHRLZXlib2FyZEJ1dHRvblByb3BzPXt7XHJcblx0XHRcdFx0XHRcdFx0J2FyaWEtbGFiZWwnOiAnY2hhbmdlIGRhdGUnLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxLZXlib2FyZERhdGVQaWNrZXJcclxuXHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHQvLyBkaXNhYmxlVG9vbGJhclxyXG5cdFx0XHRcdFx0XHRuYW1lPSdkYXRlRmluJ1xyXG5cdFx0XHRcdFx0XHRmb3JtYXQ9J01NL2RkL3l5eXknXHJcblx0XHRcdFx0XHRcdG1hcmdpbj0nbm9ybWFsJ1xyXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9JzAyLzI1LzIwMjEnXHJcblx0XHRcdFx0XHRcdGlkPSdkYXRlLXBpY2tlci1pbmxpbmUnXHJcblx0XHRcdFx0XHRcdGxhYmVsPSdEYXRlIGRlIGZpbidcclxuXHRcdFx0XHRcdFx0dmFsdWU9e3NlbGVjdGVkRGF0ZUZpbn1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZURhdGVDaGFuZ2VGaW59XHJcblx0XHRcdFx0XHRcdEtleWJvYXJkQnV0dG9uUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6ICdjaGFuZ2UgZGF0ZScsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXI+XHJcblx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblxyXG5cdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuXHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0bmFtZT0nbmJQZXJzJ1xyXG5cdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRkZWZhdWx0VmFsdWU9JzEwJ1xyXG5cdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0bGFiZWw9J05vbWJyZSBkZSBwZXJzb25uZXMgYXUgdG90YWwnXHJcblx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHJcblx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRuYW1lPSduYkVuZidcclxuXHRcdFx0XHR0eXBlPSdudW1iZXInXHJcblx0XHRcdFx0ZGVmYXVsdFZhbHVlPScyJ1xyXG5cdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0bGFiZWw9XCJOb21icmUgZCdlbmZhbnRzIC0xOCBhbnNcIlxyXG5cdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRuYW1lPSduYkNoaWVuJ1xyXG5cdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRkZWZhdWx0VmFsdWU9JzAnXHJcblx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRsYWJlbD0nQ2hpZW5zICgz4oKsL2ovYW5pbWFsKSdcclxuXHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQvPlxyXG5cclxuXHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdHR5cGU9J3N1Ym1pdCdcclxuXHRcdFx0XHR2YXJpYW50PSdjb250YWluZWQnXHJcblx0XHRcdFx0Y29sb3I9J3ByaW1hcnknXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0Q2FsY3VsZXIgbGUgdGFyaWZcclxuXHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdHt2YWx1ZXMgJiYgSlNPTi5zdHJpbmdpZnkodmFsdWVzKX1cclxuXHRcdDwvZm9ybT5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUNhbGN1bFRhcmlmO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9