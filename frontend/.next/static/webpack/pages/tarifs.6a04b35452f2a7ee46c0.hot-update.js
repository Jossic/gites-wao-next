webpackHotUpdate_N_E("pages/tarifs",{

/***/ "./components/admin/forms/FormCalculTarif.js":
/*!***************************************************!*\
  !*** ./components/admin/forms/FormCalculTarif.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs/plugin/isBetween */ "./node_modules/dayjs/plugin/isBetween.js");
/* harmony import */ var dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var _actions_calendarActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../actions/calendarActions */ "./actions/calendarActions.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");
var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\forms\\FormCalculTarif.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





dayjs__WEBPACK_IMPORTED_MODULE_3___default.a.extend(dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_4___default.a);







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

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])(),
      control = _useForm.control,
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var classes = useStyles();
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_10__["getCookie"])('token');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      selectedDateDebut = _useState[0],
      setSelectedDateDebut = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      selectedDateFin = _useState2[0],
      setSelectedDateFin = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      dateDebut = _useState3[0],
      setDateDebut = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      dateFin = _useState4[0],
      setDateFin = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      giteSelec = _useState5[0],
      setGiteSelec = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      nbChien = _useState6[0],
      setNbChien = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      nbEnf = _useState7[0],
      setNbEnf = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      nbPers = _useState8[0],
      setNbPers = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      nuitee = _useState9[0],
      setNuitee = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      isVacances = _useState10[0],
      setIsVacances = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isWeekEnd = _useState11[0],
      setIsWeekEnd = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      dejaLoue = _useState12[0],
      setDejaLoue = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      prixTotal = _useState13[0],
      setPrixTotal = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      prixSuppl = _useState14[0],
      setPrixSuppl = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isSubmited = _useState15[0],
      setIsSubmited = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      erreur = _useState16[0],
      setErreur = _useState16[1];

  var handleDateChangeDebut = function handleDateChangeDebut(date) {
    setSelectedDateDebut(date);
  };

  var handleDateChangeFin = function handleDateChangeFin(date) {
    setSelectedDateFin(date);
  };

  var onSubmit = function onSubmit(data) {
    setDateDebut();
    setDateFin();
    setNuitee();
    setGiteSelec();
    setNbChien();
    setNbEnf();
    setNbPers();
    setDejaLoue(false);
    setIsSubmited(true);
    var dateDebut = data.dateDebut,
        dateFin = data.dateFin,
        giteSelec = data.giteSelec,
        nbChien = data.nbChien,
        nbEnf = data.nbEnf,
        nbPers = data.nbPers;
    var dateD = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(dateDebut);
    var dateF = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(dateFin);
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
              setDejaLoue(true);
            } else {
              setDejaLoue(false);
            }
          }); // On récupère le gîte selectionné

          if (nuitee === 7 || nuitee === 14 || nuitee === 21) {
            if (isVacances) {
              console.log('Cas général : on est en vancances');

              if (dayjs__WEBPACK_IMPORTED_MODULE_3___default()(dateD).isBetween(dayjs__WEBPACK_IMPORTED_MODULE_3___default()().month(6), dayjs__WEBPACK_IMPORTED_MODULE_3___default()().month(7), null, '[]')) {
                console.log('on est en haute saison à la semaine');
                setPrixTotal(gite.ftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison + gite.coefficients.hauteSaison);
                setPrixSuppl();
              } else if (dayjs__WEBPACK_IMPORTED_MODULE_3___default()().dayOfYear(358).isBetween(dateD, dateF, null, '[]')) {
                console.log('on est à noel à la semaine');
                setPrixTotal(gite.ftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison + gite.coefficients.hauteSaison + gite.coefficients.noel);
                setPrixSuppl();
              } else if (dayjs__WEBPACK_IMPORTED_MODULE_3___default()().dayOfYear(365).isBetween(dateD, dateF, null, '[]')) {
                console.log('on est au nouvel an à la semaine');
                setPrixTotal(gite.ftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison + gite.coefficients.hauteSaison + gite.coefficients.noel + gite.coefficients.nouvelAn);
                setPrixSuppl();
              } else {
                console.log('On est dans le cas 7 nuitées en vacances scolaires moyenne saison'); //

                setPrixTotal(gite.ftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison);
                setPrixSuppl();
              }
            } else {
              console.log('Cas 7 nuitées hors vacances'); //

              setPrixTotal(gite.ftMenage + gite.tarifDeBase + gite.coefficients.basseSaison);
              setPrixSuppl();
            }
          } else if (nuitee < 7) {
            console.log('Cas général : nuitées inférieure à 7');

            if (dayjs__WEBPACK_IMPORTED_MODULE_3___default()().day(6).isBetween(dateD, dateF, null, '[]')) {
              setIsWeekEnd(true);
              console.log('Cas en week-end moins de 7 nuits');

              if (nuitee === 1) {
                console.log('Cas week-end 1 nuit + msg avertissement'); //

                setPrixTotal(gite.ftMenage + gite.tarifDeBase / 2 + gite.uneNuitee);
                setPrixSuppl();
                setAvertissement({
                  message: 'En week end nous louons 2 nuitées, (très exceptionnelement 1 seule)'
                });
              } else if (nuitee === 2) {
                console.log('Cas week-end 2 nuits'); //

                setPrixTotal(gite.ftMenage + gite.tarifDeBase);
                setPrixSuppl();
              } else if (nuitee === 3) {
                console.log('Cas week-end 3 nuits'); //

                setPrixTotal(gite.ftMenage + gite.tarifDeBase + gite.troisNuitees);
                setPrixSuppl();
              } else if (nuitee === 4) {
                console.log('Cas week-end 4 nuits'); //

                setPrixTotal(gite.ftMenage + gite.tarifDeBase + gite.quatreNuitees);
                setPrixSuppl();
              } else if (nuitee === 5) {
                console.log('Cas week-end 5 nuits - Quel tarif ? Voir Maman'); //

                setPrixTotal();
                setPrixSuppl();
              } else if (nuitee === 6) {
                console.log('Cas week-end 6 nuits - Quel tarif ? Voir Maman'); //

                setPrixTotal();
                setPrixSuppl();
              } else {
                console.log('Autres cas week-end inférieur à 7 nuits - Inpossible...');
              }
            } else {
              console.log('Cas général : moins de 7 nuits et sans samedi');

              if (isVacances) {
                console.log('Cas général : hors WE moins de 7 nuits mais en vacances - Tarif sans tenir compte du plafond (tarifs remis par nuitée)');

                if (nuitee === 1) {
                  console.log('Cas hors week-end 1 nuit mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal((gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison) / 7 * 1 + gite.ftMenage);
                    setPrixSuppl();
                  } else {
                    setPrixTotal((gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison) / 7 * 1 + gite.ftMenage);
                    setPrixSuppl(nbPers * gite.supplementParPers * 1);
                  }
                } else if (nuitee === 2) {
                  console.log('Cas hors week-end 2 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    console.log("Moins de ".concat(gite.nPers, " pers"));
                    setPrixTotal((gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison) / 7 * 2 + gite.ftMenage);
                    setPrixSuppl();
                  } else {
                    setPrixTotal((gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison) / 7 * 2 + gite.ftMenage);
                    setPrixSuppl(nbPers * gite.supplementParPers * 2);
                  }
                } else if (nuitee === 3) {
                  console.log('Cas hors week-end 3 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    console.log('ici');
                    console.log(gite.tarifParPersParNuit);
                    console.log(gite.ftMenage);
                    console.log(nbPers);
                    setPrixTotal((gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison) / 7 * 3 + gite.ftMenage);
                    setPrixSuppl();
                  } else {
                    setPrixTotal((gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison) / 7 * 3 + gite.ftMenage);
                    setPrixSuppl(nbPers * gite.supplementParPers * 3);
                  }
                } else if (nuitee === 4) {
                  console.log('Cas hors week-end 4 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal((gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison) / 7 * 4 + gite.ftMenage);
                    setPrixSuppl();
                  } else {
                    setPrixTotal((gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison) / 7 * 4 + gite.ftMenage);
                    setPrixSuppl(nbPers * gite.supplementParPers * 4);
                  }
                } else if (nuitee === 5) {
                  console.log('Cas hors week-end 5 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal((gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison) / 7 * 5 + gite.ftMenage);
                  } else {
                    setPrixTotal((gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison) / 7 * 5 + gite.ftMenage);
                    setPrixSuppl(nbPers * gite.supplementParPers * 5);
                  }
                } else if (nuitee === 6) {
                  console.log('Cas hors week-end 6 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal((gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison) / 7 * 6 + gite.ftMenage);
                  } else {
                    setPrixTotal((gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison) / 7 * 6 + gite.ftMenage);
                    setPrixSuppl(nbPers * gite.supplementParPers * 6);
                  }
                } else {
                  console.log('Autres cas week-end inférieur à 7 nuits - Peu probable...');
                }
              } else {
                console.log('Cas général : hors WE moins de 7 nuits mais en vacances - Tarif avec plafond'); //

                if (nuitee === 1) {
                  console.log('Cas hors week-end 1 nuit et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal(gite.ftMenage + nbPers * gite.tarifParPersParNuit * 1);
                  } else {
                    setPrixTotal(gite.ftMenage + nbPers * gite.tarifParPersParNuit * 1);
                    setPrixSuppl(nbPers * gite.supplementParPers * 1);
                  }
                } else if (nuitee === 2) {
                  console.log('Cas hors week-end 2 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal(gite.ftMenage + nbPers * gite.tarifParPersParNuit * 2);
                  } else {
                    setPrixTotal(gite.ftMenage + nbPers * gite.tarifParPersParNuit * 2);
                    setPrixSuppl(nbPers * gite.supplementParPers * 2);
                  }
                } else if (nuitee === 3) {
                  console.log('Cas hors week-end 3 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    console.log('ici');
                    setPrixTotal(gite.ftMenage + nbPers * gite.tarifParPersParNuit * 3);
                  } else {
                    setPrixTotal(gite.ftMenage + nbPers * gite.tarifParPersParNuit * 3);
                    setPrixSuppl(nbPers * gite.supplementParPers * 3);
                  }
                } else if (nuitee === 4) {
                  console.log('Cas hors week-end 4 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal(gite.ftMenage + nbPers * gite.tarifParPersParNuit * 4);
                  } else {
                    setPrixTotal(gite.ftMenage + nbPers * gite.tarifParPersParNuit * 4);
                    setPrixSuppl(nbPers * gite.supplementParPers * 4);
                  }
                } else if (nuitee === 5) {
                  console.log('Cas hors week-end 5 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal(gite.ftMenage + nbPers * gite.tarifParPersParNuit * 5);
                  } else {
                    setPrixTotal(gite.ftMenage + nbPers * gite.tarifParPersParNuit * 5);
                    setPrixSuppl(nbPers * gite.supplementParPers * 5);
                  }
                } else if (nuitee === 6) {
                  console.log('Cas hors week-end 6 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal(gite.ftMenage + nbPers * gite.tarifParPersParNuit * 6);
                  } else {
                    setPrixTotal(gite.ftMenage + nbPers * gite.tarifParPersParNuit * 6);
                    setPrixSuppl(nbPers * gite.supplementParPers * 6);
                  }
                }
              }
            }
          } else if (nuitee > 30) {
            console.log('Gérer cas >30 ici');
            setErreur({
              erreur: true,
              message: 'Nous ne louons pas sur des durées de plus de 30 jours'
            });
          } else {
            console.log('Autres cas nuit > 7 et !== de 14 et 21');
            setErreur({
              erreur: true,
              message: 'Pour des cas spécifiques, merci de nous contacter'
            });
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
      lineNumber: 608,
      columnNumber: 3
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["InputLabel"], {
    shrink: true,
    id: "demo-simple-select-placeholder-label-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610,
      columnNumber: 5
    }
  }, "Gite"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["Controller"], {
    control: control,
    name: "giteSelec",
    as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Select"], {
      id: "declencheur-select",
      defaultValue: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 619,
        columnNumber: 7
      }
    }, gites.map(function (gite) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
        value: gite.slug,
        key: gite.slug,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 621,
          columnNumber: 9
        }
      }, gite.nom);
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615,
      columnNumber: 5
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 629,
      columnNumber: 4
    }
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_8__["MuiPickersUtilsProvider"], {
    utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_1__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 630,
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
      lineNumber: 631,
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
      lineNumber: 645,
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
      lineNumber: 662,
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
      lineNumber: 674,
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
      lineNumber: 686,
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
      lineNumber: 698,
      columnNumber: 4
    }
  }, "Calculer le tarif"), !erreur ? isSubmited && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 708,
      columnNumber: 7
    }
  }, dejaLoue ? 'Il semble que ce gîte soit déjà loué aux dates indiquées' : __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 712,
      columnNumber: 9
    }
  }, "Ce g\xEEte semble libre pour le moment aux dates indiqu\xE9es, n'h\xE9sitez pas \xE0 faire une demande de location", __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "contained",
    color: "secondary",
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 717,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/reservation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 721,
      columnNumber: 12
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 722,
      columnNumber: 13
    }
  }, "Je reserve"))))), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 729,
      columnNumber: 7
    }
  }, "Location du ", dateDebut, " au ", dateFin, " pour le g\xEEte", ' ', giteSelec, " pour ", nbPers, " personnes dont ", nbEnf, ' ', "enfants et ", nbChien, " animaux"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 734,
      columnNumber: 7
    }
  }, "Total de ", nuitee, " nuit\xE9es", ' ', isVacances ? 'en période de vacances' : 'hors vacances', ' ', "et ", isWeekEnd ? 'en week-end' : ' hors week-end'), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 741,
      columnNumber: 7
    }
  }, "Montant de base : ", prixTotal), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 742,
      columnNumber: 7
    }
  }, "Montant suppl\xE9mentaire : ", prixSuppl)) : __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 746,
      columnNumber: 5
    }
  }, erreur.message));
};

_s(FormCalculTarif, "9+paDTIFLYt4DJQ7oibuAQo7s/k=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"], useStyles];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9Gb3JtQ2FsY3VsVGFyaWYuanMiXSwibmFtZXMiOlsiZGF5anMiLCJleHRlbmQiLCJpc0JldHdlZW4iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJmb3JtIiwid2lkdGgiLCJtYXJnaW4iLCJzcGFjaW5nIiwicm9vdCIsImJ1dHRvbiIsImZvcm1Db250cm9sIiwidGV4dEZpZWxkIiwiRm9ybUNhbGN1bFRhcmlmIiwiZ2l0ZXMiLCJ1c2VGb3JtIiwiY29udHJvbCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiY2xhc3NlcyIsInRva2VuIiwiZ2V0Q29va2llIiwidXNlU3RhdGUiLCJzZWxlY3RlZERhdGVEZWJ1dCIsInNldFNlbGVjdGVkRGF0ZURlYnV0Iiwic2VsZWN0ZWREYXRlRmluIiwic2V0U2VsZWN0ZWREYXRlRmluIiwiZGF0ZURlYnV0Iiwic2V0RGF0ZURlYnV0IiwiZGF0ZUZpbiIsInNldERhdGVGaW4iLCJnaXRlU2VsZWMiLCJzZXRHaXRlU2VsZWMiLCJuYkNoaWVuIiwic2V0TmJDaGllbiIsIm5iRW5mIiwic2V0TmJFbmYiLCJuYlBlcnMiLCJzZXROYlBlcnMiLCJudWl0ZWUiLCJzZXROdWl0ZWUiLCJpc1ZhY2FuY2VzIiwic2V0SXNWYWNhbmNlcyIsImlzV2Vla0VuZCIsInNldElzV2Vla0VuZCIsImRlamFMb3VlIiwic2V0RGVqYUxvdWUiLCJwcml4VG90YWwiLCJzZXRQcml4VG90YWwiLCJwcml4U3VwcGwiLCJzZXRQcml4U3VwcGwiLCJpc1N1Ym1pdGVkIiwic2V0SXNTdWJtaXRlZCIsImVycmV1ciIsInNldEVycmV1ciIsImhhbmRsZURhdGVDaGFuZ2VEZWJ1dCIsImRhdGUiLCJoYW5kbGVEYXRlQ2hhbmdlRmluIiwib25TdWJtaXQiLCJkYXRhIiwiZGF0ZUQiLCJkYXRlRiIsImdldFZhY2FuY2VzIiwidGhlbiIsInJlc3VsdCIsInZhY2FuY2VzIiwiZGlmZiIsImdpdGUiLCJzbHVnIiwiZ2V0RGVqYUxvdWUiLCJjYWxlbmRhcklkIiwibG91ZSIsImNvbnNvbGUiLCJsb2ciLCJtb250aCIsImZ0TWVuYWdlIiwidGFyaWZEZUJhc2UiLCJjb2VmZmljaWVudHMiLCJiYXNzZVNhaXNvbiIsIm1veWVubmVTYWlzb24iLCJoYXV0ZVNhaXNvbiIsImRheU9mWWVhciIsIm5vZWwiLCJub3V2ZWxBbiIsImRheSIsInVuZU51aXRlZSIsInNldEF2ZXJ0aXNzZW1lbnQiLCJtZXNzYWdlIiwidHJvaXNOdWl0ZWVzIiwicXVhdHJlTnVpdGVlcyIsIm5QZXJzIiwic3VwcGxlbWVudFBhclBlcnMiLCJ0YXJpZlBhclBlcnNQYXJOdWl0IiwibWFwIiwibm9tIiwiRGF0ZUZuc1V0aWxzIiwic2hyaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSw0Q0FBSyxDQUFDQyxNQUFOLENBQWFDLDZEQUFiO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFLQTtBQU1BO0FBQ0E7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDeENDLFFBQUksRUFBRTtBQUNMQyxXQUFLLEVBQUUsS0FERjtBQUVMQyxZQUFNLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQ7QUFGSCxLQURrQztBQUt4Q0MsUUFBSSxFQUFFO0FBQ0xILFdBQUssRUFBRTtBQURGLEtBTGtDO0FBUXhDSSxVQUFNLEVBQUU7QUFDUEgsWUFBTSxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkLENBREQ7QUFFUEYsV0FBSyxFQUFFO0FBRkEsS0FSZ0M7QUFZeENLLGVBQVcsRUFBRTtBQUNaSixZQUFNLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsQ0FESTtBQUVaRixXQUFLLEVBQUU7QUFGSyxLQVoyQjtBQWdCeENNLGFBQVMsRUFBRTtBQUNWTCxZ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RCxFQXNCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNjaUIsU0FEZCxVQUM2QkUsT0FEN0Isc0JBQ21ELEdBRG5ELEVBRUVFLFNBRkYsWUFFbUJNLE1BRm5CLHNCQUUyQ0YsS0FGM0MsRUFFa0QsR0FGbEQsaUJBR2FGLE9BSGIsYUF0QkQsRUEyQkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDV00sTUFEWCxpQkFDMkIsR0FEM0IsRUFFRUUsVUFBVSxHQUNSLHdCQURRLEdBRVIsZUFKSixFQUlxQixHQUpyQixTQUtLRSxTQUFTLEdBQUcsYUFBSCxHQUFtQixnQkFMakMsQ0EzQkQsRUFrQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBc0JJLFNBQXRCLENBbENELEVBbUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBQTZCRSxTQUE3QixDQW5DRCxDQUZELEdBeUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUksTUFBTSxDQUFDa0MsT0FBWCxDQTFJRixDQUREO0FBK0lBLENBMXJCRDs7R0FBTTFFLGU7VUFDdUNFLHVELEVBQzVCYixTOzs7S0FGWFcsZTtBQTRyQlNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rhcmlmcy42YTA0YjM1NDUyZjJhN2VlNDZjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGVGbnNVdGlscyBmcm9tICdAZGF0ZS1pby9kYXRlLWZucyc7XHJcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgaXNCZXR3ZWVuIGZyb20gJ2RheWpzL3BsdWdpbi9pc0JldHdlZW4nO1xyXG5kYXlqcy5leHRlbmQoaXNCZXR3ZWVuKTtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtcclxuXHRCdXR0b24sXHJcblx0Rm9ybUNvbnRyb2wsXHJcblx0SW5wdXRMYWJlbCxcclxuXHRNZW51SXRlbSxcclxuXHRTZWxlY3QsXHJcblx0VGV4dEZpZWxkLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7XHJcblx0TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIsXHJcblx0S2V5Ym9hcmRUaW1lUGlja2VyLFxyXG5cdEtleWJvYXJkRGF0ZVBpY2tlcixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvcGlja2Vycyc7XHJcbmltcG9ydCB7XHJcblx0Z2V0Q2FsZW5kYXIsXHJcblx0Z2V0Q2FsZW5kYXJCeUlkLFxyXG5cdGdldERlamFMb3VlLFxyXG5cdGdldFZhY2FuY2VzLFxyXG59IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvY2FsZW5kYXJBY3Rpb25zJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0Zm9ybToge1xyXG5cdFx0d2lkdGg6ICc3MCUnLFxyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdH0sXHJcblx0cm9vdDoge1xyXG5cdFx0d2lkdGg6ICc4MCUnLFxyXG5cdH0sXHJcblx0YnV0dG9uOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0XHR3aWR0aDogJzgwJScsXHJcblx0fSxcclxuXHRmb3JtQ29udHJvbDoge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0d2lkdGg6ICc4MCUnLFxyXG5cdH0sXHJcblx0dGV4dEZpZWxkOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHR3aWR0aDogJzgwJScsXHJcblx0fSxcclxufSkpO1xyXG5cclxuY29uc3QgRm9ybUNhbGN1bFRhcmlmID0gKHsgZ2l0ZXMgfSkgPT4ge1xyXG5cdGNvbnN0IHsgY29udHJvbCwgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybSgpO1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHRjb25zdCBbc2VsZWN0ZWREYXRlRGVidXQsIHNldFNlbGVjdGVkRGF0ZURlYnV0XSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW3NlbGVjdGVkRGF0ZUZpbiwgc2V0U2VsZWN0ZWREYXRlRmluXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW2RhdGVEZWJ1dCwgc2V0RGF0ZURlYnV0XSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW2RhdGVGaW4sIHNldERhdGVGaW5dID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdCBbZ2l0ZVNlbGVjLCBzZXRHaXRlU2VsZWNdID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdCBbbmJDaGllbiwgc2V0TmJDaGllbl0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtuYkVuZiwgc2V0TmJFbmZdID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdCBbbmJQZXJzLCBzZXROYlBlcnNdID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdCBbbnVpdGVlLCBzZXROdWl0ZWVdID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdCBbaXNWYWNhbmNlcywgc2V0SXNWYWNhbmNlc10gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtpc1dlZWtFbmQsIHNldElzV2Vla0VuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2RlamFMb3VlLCBzZXREZWphTG91ZV0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtwcml4VG90YWwsIHNldFByaXhUb3RhbF0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtwcml4U3VwcGwsIHNldFByaXhTdXBwbF0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtpc1N1Ym1pdGVkLCBzZXRJc1N1Ym1pdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbZXJyZXVyLCBzZXRFcnJldXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVEYXRlQ2hhbmdlRGVidXQgPSAoZGF0ZSkgPT4ge1xyXG5cdFx0c2V0U2VsZWN0ZWREYXRlRGVidXQoZGF0ZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlRGF0ZUNoYW5nZUZpbiA9IChkYXRlKSA9PiB7XHJcblx0XHRzZXRTZWxlY3RlZERhdGVGaW4oZGF0ZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4ge1xyXG5cdFx0c2V0RGF0ZURlYnV0KCk7XHJcblx0XHRzZXREYXRlRmluKCk7XHJcblx0XHRzZXROdWl0ZWUoKTtcclxuXHRcdHNldEdpdGVTZWxlYygpO1xyXG5cdFx0c2V0TmJDaGllbigpO1xyXG5cdFx0c2V0TmJFbmYoKTtcclxuXHRcdHNldE5iUGVycygpO1xyXG5cdFx0c2V0RGVqYUxvdWUoZmFsc2UpO1xyXG5cdFx0c2V0SXNTdWJtaXRlZCh0cnVlKTtcclxuXHRcdGNvbnN0IHsgZGF0ZURlYnV0LCBkYXRlRmluLCBnaXRlU2VsZWMsIG5iQ2hpZW4sIG5iRW5mLCBuYlBlcnMgfSA9IGRhdGE7XHJcblx0XHRjb25zdCBkYXRlRCA9IGRheWpzKGRhdGVEZWJ1dCk7XHJcblx0XHRjb25zdCBkYXRlRiA9IGRheWpzKGRhdGVGaW4pO1xyXG5cdFx0Z2V0VmFjYW5jZXMoZGF0ZUQsIGRhdGVGKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ3Jlc3VsdCB2YXV0JywgcmVzdWx0KTtcclxuXHRcdFx0c2V0SXNWYWNhbmNlcyhyZXN1bHQudmFjYW5jZXMpO1xyXG5cdFx0XHQvLyByZXR1cm4gcmVzdWx0LnZhY2FuY2VzO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgbnVpdGVlID0gZGF0ZUYuZGlmZihkYXRlRCwgJ2RheScpO1xyXG5cdFx0c2V0RGF0ZURlYnV0KGRhdGVEZWJ1dCk7XHJcblx0XHRzZXREYXRlRmluKGRhdGVGaW4pO1xyXG5cdFx0c2V0TnVpdGVlKG51aXRlZSk7XHJcblx0XHRzZXRHaXRlU2VsZWMoZ2l0ZVNlbGVjKTtcclxuXHRcdHNldE5iQ2hpZW4obmJDaGllbik7XHJcblx0XHRzZXROYkVuZihuYkVuZik7XHJcblx0XHRzZXROYlBlcnMobmJQZXJzKTtcclxuXHJcblx0XHRmb3IgKGNvbnN0IGdpdGUgb2YgZ2l0ZXMpIHtcclxuXHRcdFx0aWYgKGdpdGUuc2x1ZyA9PT0gZ2l0ZVNlbGVjKSB7XHJcblx0XHRcdFx0Z2V0RGVqYUxvdWUoZ2l0ZS5jYWxlbmRhcklkLCBkYXRlRCwgZGF0ZUYpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlc3VsdC5sb3VlKSB7XHJcblx0XHRcdFx0XHRcdHNldERlamFMb3VlKHRydWUpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0c2V0RGVqYUxvdWUoZmFsc2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vIE9uIHLDqWN1cMOocmUgbGUgZ8OudGUgc2VsZWN0aW9ubsOpXHJcblx0XHRcdFx0aWYgKG51aXRlZSA9PT0gNyB8fCBudWl0ZWUgPT09IDE0IHx8IG51aXRlZSA9PT0gMjEpIHtcclxuXHRcdFx0XHRcdGlmIChpc1ZhY2FuY2VzKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdDYXMgZ8OpbsOpcmFsIDogb24gZXN0IGVuIHZhbmNhbmNlcycpO1xyXG5cdFx0XHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRcdFx0ZGF5anMoZGF0ZUQpLmlzQmV0d2VlbihcclxuXHRcdFx0XHRcdFx0XHRcdGRheWpzKCkubW9udGgoNiksXHJcblx0XHRcdFx0XHRcdFx0XHRkYXlqcygpLm1vbnRoKDcpLFxyXG5cdFx0XHRcdFx0XHRcdFx0bnVsbCxcclxuXHRcdFx0XHRcdFx0XHRcdCdbXSdcclxuXHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdvbiBlc3QgZW4gaGF1dGUgc2Fpc29uIMOgIGxhIHNlbWFpbmUnKTtcclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLmZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmhhdXRlU2Fpc29uXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChcclxuXHRcdFx0XHRcdFx0XHRkYXlqcygpXHJcblx0XHRcdFx0XHRcdFx0XHQuZGF5T2ZZZWFyKDM1OClcclxuXHRcdFx0XHRcdFx0XHRcdC5pc0JldHdlZW4oZGF0ZUQsIGRhdGVGLCBudWxsLCAnW10nKVxyXG5cdFx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnb24gZXN0IMOgIG5vZWwgw6AgbGEgc2VtYWluZScpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUuZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuaGF1dGVTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5ub2VsXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChcclxuXHRcdFx0XHRcdFx0XHRkYXlqcygpXHJcblx0XHRcdFx0XHRcdFx0XHQuZGF5T2ZZZWFyKDM2NSlcclxuXHRcdFx0XHRcdFx0XHRcdC5pc0JldHdlZW4oZGF0ZUQsIGRhdGVGLCBudWxsLCAnW10nKVxyXG5cdFx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnb24gZXN0IGF1IG5vdXZlbCBhbiDDoCBsYSBzZW1haW5lJyk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS5mdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm1veWVubmVTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5oYXV0ZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm5vZWwgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5ub3V2ZWxBblxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHQnT24gZXN0IGRhbnMgbGUgY2FzIDcgbnVpdMOpZXMgZW4gdmFjYW5jZXMgc2NvbGFpcmVzIG1veWVubmUgc2Fpc29uJ1xyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLmZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvblxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdDYXMgNyBudWl0w6llcyBob3JzIHZhY2FuY2VzJyk7XHJcblx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRnaXRlLmZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb25cclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPCA3KSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ2FzIGfDqW7DqXJhbCA6IG51aXTDqWVzIGluZsOpcmlldXJlIMOgIDcnKTtcclxuXHRcdFx0XHRcdGlmIChkYXlqcygpLmRheSg2KS5pc0JldHdlZW4oZGF0ZUQsIGRhdGVGLCBudWxsLCAnW10nKSkge1xyXG5cdFx0XHRcdFx0XHRzZXRJc1dlZWtFbmQodHJ1ZSk7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdDYXMgZW4gd2Vlay1lbmQgbW9pbnMgZGUgNyBudWl0cycpO1xyXG5cdFx0XHRcdFx0XHRpZiAobnVpdGVlID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHQnQ2FzIHdlZWstZW5kIDEgbnVpdCArIG1zZyBhdmVydGlzc2VtZW50J1xyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLmZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSAvIDIgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnVuZU51aXRlZVxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0QXZlcnRpc3NlbWVudCh7XHJcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnRW4gd2VlayBlbmQgbm91cyBsb3VvbnMgMiBudWl0w6llcywgKHRyw6hzIGV4Y2VwdGlvbm5lbGVtZW50IDEgc2V1bGUpJyxcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDIpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ2FzIHdlZWstZW5kIDIgbnVpdHMnKTtcclxuXHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChnaXRlLmZ0TWVuYWdlICsgZ2l0ZS50YXJpZkRlQmFzZSk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSAzKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyB3ZWVrLWVuZCAzIG51aXRzJyk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLmZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudHJvaXNOdWl0ZWVzXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDQpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ2FzIHdlZWstZW5kIDQgbnVpdHMnKTtcclxuXHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUuZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5xdWF0cmVOdWl0ZWVzXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDUpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdCdDYXMgd2Vlay1lbmQgNSBudWl0cyAtIFF1ZWwgdGFyaWYgPyBWb2lyIE1hbWFuJ1xyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoKTtcclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDYpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdCdDYXMgd2Vlay1lbmQgNiBudWl0cyAtIFF1ZWwgdGFyaWYgPyBWb2lyIE1hbWFuJ1xyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoKTtcclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdCdBdXRyZXMgY2FzIHdlZWstZW5kIGluZsOpcmlldXIgw6AgNyBudWl0cyAtIElucG9zc2libGUuLi4nXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0J0NhcyBnw6luw6lyYWwgOiBtb2lucyBkZSA3IG51aXRzIGV0IHNhbnMgc2FtZWRpJ1xyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRpZiAoaXNWYWNhbmNlcykge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0J0NhcyBnw6luw6lyYWwgOiBob3JzIFdFIG1vaW5zIGRlIDcgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcyAtIFRhcmlmIHNhbnMgdGVuaXIgY29tcHRlIGR1IHBsYWZvbmQgKHRhcmlmcyByZW1pcyBwYXIgbnVpdMOpZSknXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRpZiAobnVpdGVlID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDEgbnVpdCBtYWlzIGVuIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCgoZ2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uKSAvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ3KSAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQxICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuZnRNZW5hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KChnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm1veWVubmVTYWlzb24pIC9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcpICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDEgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5mdE1lbmFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDFcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gMikge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCAyIG51aXRzIG1haXMgZW4gdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGBNb2lucyBkZSAke2dpdGUublBlcnN9IHBlcnNgKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCgoZ2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uKSAvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ3KSAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQyICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuZnRNZW5hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KChnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm1veWVubmVTYWlzb24pIC9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcpICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDIgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5mdE1lbmFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDJcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gMykge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCAzIG51aXRzIG1haXMgZW4gdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdpY2knKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZ2l0ZS5mdE1lbmFnZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKG5iUGVycyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbikgL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NykgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0MyArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmZ0TWVuYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCgoZ2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uKSAvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ3KSAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQzICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuZnRNZW5hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiAzXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgNCBudWl0cyBtYWlzIGVuIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KChnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm1veWVubmVTYWlzb24pIC9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcpICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDQgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5mdE1lbmFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbikgL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NykgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NCArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmZ0TWVuYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogNFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA1KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDUgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCgoZ2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uKSAvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ3KSAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ1ICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuZnRNZW5hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbikgL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NykgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmZ0TWVuYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogNVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA2KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDYgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCgoZ2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uKSAvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ3KSAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ2ICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuZnRNZW5hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbikgL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NykgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmZ0TWVuYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogNlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0F1dHJlcyBjYXMgd2Vlay1lbmQgaW5mw6lyaWV1ciDDoCA3IG51aXRzIC0gUGV1IHByb2JhYmxlLi4uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHQnQ2FzIGfDqW7DqXJhbCA6IGhvcnMgV0UgbW9pbnMgZGUgNyBudWl0cyBtYWlzIGVuIHZhY2FuY2VzIC0gVGFyaWYgYXZlYyBwbGFmb25kJ1xyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRpZiAobnVpdGVlID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDEgbnVpdCBldCBob3JzIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDFcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gMikge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCAyIG51aXRzIGV0IGhvcnMgdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDJcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDJcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiAyXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgMyBudWl0cyBldCBob3JzIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnaWNpJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDNcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDNcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiAzXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgNCBudWl0cyBldCBob3JzIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5mdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ0XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5mdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ0XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogNFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA1KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDUgbnVpdHMgZXQgaG9ycyB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDVcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gNikge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCA2IG51aXRzIGV0IGhvcnMgdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDZcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDZcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiA2XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPiAzMCkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ0fDqXJlciBjYXMgPjMwIGljaScpO1xyXG5cdFx0XHRcdFx0c2V0RXJyZXVyKHtcclxuXHRcdFx0XHRcdFx0ZXJyZXVyOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRtZXNzYWdlOlxyXG5cdFx0XHRcdFx0XHRcdCdOb3VzIG5lIGxvdW9ucyBwYXMgc3VyIGRlcyBkdXLDqWVzIGRlIHBsdXMgZGUgMzAgam91cnMnLFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdBdXRyZXMgY2FzIG51aXQgPiA3IGV0ICE9PSBkZSAxNCBldCAyMScpO1xyXG5cdFx0XHRcdFx0c2V0RXJyZXVyKHtcclxuXHRcdFx0XHRcdFx0ZXJyZXVyOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRtZXNzYWdlOlxyXG5cdFx0XHRcdFx0XHRcdCdQb3VyIGRlcyBjYXMgc3DDqWNpZmlxdWVzLCBtZXJjaSBkZSBub3VzIGNvbnRhY3RlcicsXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cclxuXHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0PElucHV0TGFiZWxcclxuXHRcdFx0XHRcdHNocmlua1xyXG5cdFx0XHRcdFx0aWQ9J2RlbW8tc2ltcGxlLXNlbGVjdC1wbGFjZWhvbGRlci1sYWJlbC1sYWJlbCc+XHJcblx0XHRcdFx0XHRHaXRlXHJcblx0XHRcdFx0PC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0bmFtZT0nZ2l0ZVNlbGVjJ1xyXG5cdFx0XHRcdFx0YXM9e1xyXG5cdFx0XHRcdFx0XHQ8U2VsZWN0IGlkPSdkZWNsZW5jaGV1ci1zZWxlY3QnIGRlZmF1bHRWYWx1ZT0nJz5cclxuXHRcdFx0XHRcdFx0XHR7Z2l0ZXMubWFwKChnaXRlKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9e2dpdGUuc2x1Z30ga2V5PXtnaXRlLnNsdWd9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Z2l0ZS5ub219XHJcblx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHQ8L1NlbGVjdD5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHQ8TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIgdXRpbHM9e0RhdGVGbnNVdGlsc30+XHJcblx0XHRcdFx0XHQ8S2V5Ym9hcmREYXRlUGlja2VyXHJcblx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0bWFyZ2luPSdub3JtYWwnXHJcblx0XHRcdFx0XHRcdGlkPSdkYXRlLXBpY2tlci1kaWFsb2cnXHJcblx0XHRcdFx0XHRcdG5hbWU9J2RhdGVEZWJ1dCdcclxuXHRcdFx0XHRcdFx0bGFiZWw9J0RhdGUgZGUgZMOpYnV0J1xyXG5cdFx0XHRcdFx0XHRmb3JtYXQ9J01NL2RkL3l5eXknXHJcblx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT0nJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17c2VsZWN0ZWREYXRlRGVidXR9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVEYXRlQ2hhbmdlRGVidXR9XHJcblx0XHRcdFx0XHRcdEtleWJvYXJkQnV0dG9uUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6ICdjaGFuZ2UgZGF0ZScsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PEtleWJvYXJkRGF0ZVBpY2tlclxyXG5cdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdC8vIGRpc2FibGVUb29sYmFyXHJcblx0XHRcdFx0XHRcdG5hbWU9J2RhdGVGaW4nXHJcblx0XHRcdFx0XHRcdGZvcm1hdD0nTU0vZGQveXl5eSdcclxuXHRcdFx0XHRcdFx0bWFyZ2luPSdub3JtYWwnXHJcblx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT0nMDIvMjUvMjAyMSdcclxuXHRcdFx0XHRcdFx0aWQ9J2RhdGUtcGlja2VyLWlubGluZSdcclxuXHRcdFx0XHRcdFx0bGFiZWw9J0RhdGUgZGUgZmluJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17c2VsZWN0ZWREYXRlRmlufVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlRGF0ZUNoYW5nZUZpbn1cclxuXHRcdFx0XHRcdFx0S2V5Ym9hcmRCdXR0b25Qcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRcdCdhcmlhLWxhYmVsJzogJ2NoYW5nZSBkYXRlJyxcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9NdWlQaWNrZXJzVXRpbHNQcm92aWRlcj5cclxuXHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdG5hbWU9J25iUGVycydcclxuXHRcdFx0XHR0eXBlPSdudW1iZXInXHJcblx0XHRcdFx0ZGVmYXVsdFZhbHVlPScxMCdcclxuXHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdGxhYmVsPSdOb21icmUgZGUgcGVyc29ubmVzIGF1IHRvdGFsJ1xyXG5cdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRuYW1lPSduYkVuZidcclxuXHRcdFx0XHR0eXBlPSdudW1iZXInXHJcblx0XHRcdFx0ZGVmYXVsdFZhbHVlPScyJ1xyXG5cdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0bGFiZWw9XCJOb21icmUgZCdlbmZhbnRzIC0xOCBhbnNcIlxyXG5cdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRuYW1lPSduYkNoaWVuJ1xyXG5cdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRkZWZhdWx0VmFsdWU9JzAnXHJcblx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRsYWJlbD0nQ2hpZW5zICgz4oKsL2ovYW5pbWFsKSdcclxuXHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0dHlwZT0nc3VibWl0J1xyXG5cdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRjb2xvcj0ncHJpbWFyeSdcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRDYWxjdWxlciBsZSB0YXJpZlxyXG5cdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0eyFlcnJldXIgPyAoXHJcblx0XHRcdFx0aXNTdWJtaXRlZCAmJiAoXHJcblx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHR7ZGVqYUxvdWUgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHQnSWwgc2VtYmxlIHF1ZSBjZSBnw650ZSBzb2l0IGTDqWrDoCBsb3XDqSBhdXggZGF0ZXMgaW5kaXF1w6llcydcclxuXHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdENlIGfDrnRlIHNlbWJsZSBsaWJyZSBwb3VyIGxlIG1vbWVudCBhdXhcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0ZXMgaW5kaXF1w6llcywgbidow6lzaXRleiBwYXMgw6AgZmFpcmUgdW5lXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRlbWFuZGUgZGUgbG9jYXRpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yPSdzZWNvbmRhcnknXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9yZXNlcnZhdGlvbic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPkplIHJlc2VydmU8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdExvY2F0aW9uIGR1IHtkYXRlRGVidXR9IGF1IHtkYXRlRmlufSBwb3VyIGxlIGfDrnRleycgJ31cclxuXHRcdFx0XHRcdFx0XHR7Z2l0ZVNlbGVjfSBwb3VyIHtuYlBlcnN9IHBlcnNvbm5lcyBkb250IHtuYkVuZn17JyAnfVxyXG5cdFx0XHRcdFx0XHRcdGVuZmFudHMgZXQge25iQ2hpZW59IGFuaW1hdXhcclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRUb3RhbCBkZSB7bnVpdGVlfSBudWl0w6llc3snICd9XHJcblx0XHRcdFx0XHRcdFx0e2lzVmFjYW5jZXNcclxuXHRcdFx0XHRcdFx0XHRcdD8gJ2VuIHDDqXJpb2RlIGRlIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0OiAnaG9ycyB2YWNhbmNlcyd9eycgJ31cclxuXHRcdFx0XHRcdFx0XHRldCB7aXNXZWVrRW5kID8gJ2VuIHdlZWstZW5kJyA6ICcgaG9ycyB3ZWVrLWVuZCd9XHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0PHA+TW9udGFudCBkZSBiYXNlIDoge3ByaXhUb3RhbH08L3A+XHJcblx0XHRcdFx0XHRcdDxwPk1vbnRhbnQgc3VwcGzDqW1lbnRhaXJlIDoge3ByaXhTdXBwbH08L3A+XHJcblx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHQpXHJcblx0XHRcdCkgOiAoXHJcblx0XHRcdFx0PHA+e2VycmV1ci5tZXNzYWdlfTwvcD5cclxuXHRcdFx0KX1cclxuXHRcdDwvZm9ybT5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUNhbGN1bFRhcmlmO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9