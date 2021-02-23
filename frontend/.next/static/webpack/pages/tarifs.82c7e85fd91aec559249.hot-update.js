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
            console.log('result loue', result.loue);

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
                setPrixTotal(gite.tarifParPersParNuit + gite.ftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison + gite.coefficients.hauteSaison);
                setPrixSuppl();
              } else if (dayjs__WEBPACK_IMPORTED_MODULE_3___default()().dayOfYear(358).isBetween(dateD, dateF, null, '[]')) {
                console.log('on est à noel à la semaine');
                setPrixTotal(gite.tarifParPersParNuit + gite.ftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison + gite.coefficients.hauteSaison + gite.coefficients.noel);
                setPrixSuppl();
              } else if (dayjs__WEBPACK_IMPORTED_MODULE_3___default()().dayOfYear(365).isBetween(dateD, dateF, null, '[]')) {
                console.log('on est au nouvel an à la semaine');
                setPrixTotal(gite.tarifParPersParNuit + gite.ftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison + gite.coefficients.hauteSaison + gite.coefficients.noel + gite.coefficients.nouvelAn);
                setPrixSuppl();
              } else {
                console.log('On est dans le cas 7 nuitées en vacances scolaires moyenne saison'); //

                setPrixTotal(gite.tarifParPersParNuit + gite.ftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison);
                setPrixSuppl();
              }
            } else {
              console.log('Cas 7 nuitées hors vacances'); //

              setPrixTotal(gite.tarifParPersParNuit + gite.ftMenage + gite.tarifDeBase + gite.coefficients.basseSaison);
              setPrixSuppl();
            }
          } else if (nuitee < 7) {
            console.log('Cas général : nuitées inférieure à 7');

            if (dayjs__WEBPACK_IMPORTED_MODULE_3___default()().day(6).isBetween(dateD, dateF, null, '[]')) {
              setIsWeekEnd(true);
              console.log('Cas en week-end moins de 7 nuits');

              if (nuitee === 1) {
                console.log('Cas week-end 1 nuit + msg avertissement'); //

                setPrixTotal(gite.tarifParPersParNuit + gite.ftMenage + gite.tarifDeBase / 2 + gite.uneNuitee);
                setPrixSuppl();
                setAvertissement({
                  message: 'En week end nous louons 2 nuitées, (très exceptionnelement 1 seule)'
                });
              } else if (nuitee === 2) {
                console.log('Cas week-end 2 nuits'); //

                setPrixTotal(gite.tarifParPersParNuit + gite.ftMenage + gite.tarifDeBase);
                setPrixSuppl();
              } else if (nuitee === 3) {
                console.log('Cas week-end 3 nuits'); //

                setPrixTotal(gite.tarifParPersParNuit + gite.ftMenage + gite.tarifDeBase + gite.troisNuitees);
                setPrixSuppl();
              } else if (nuitee === 4) {
                console.log('Cas week-end 4 nuits'); //

                setPrixTotal(gite.tarifParPersParNuit + gite.ftMenage + gite.tarifDeBase + gite.quatreNuitees);
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
                console.log('Cas général : hors WE moins de 7 nuits mais en vacances - Tarif sans tenir compte du plafond');

                if (nuitee === 1) {
                  console.log('Cas hors week-end 1 nuit mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal(gite.ftMenage + nbPers * gite.tarifParPersParNuit * 1);
                    setPrixSuppl();
                  } else {
                    setPrixTotal(gite.ftMenage + nbPers * gite.tarifParPersParNuit * 1);
                    setPrixSuppl(nbPers * gite.supplementParPers * 1);
                  }
                } else if (nuitee === 2) {
                  console.log('Cas hors week-end 2 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    console.log("Moins de ".concat(gite.nPers, " pers"));
                    setPrixTotal(gite.ftMenage + nbPers * gite.tarifParPersParNuit * 2);
                    setPrixSuppl();
                  } else {
                    setPrixTotal(gite.ftMenage + nbPers * gite.tarifParPersParNuit * 2);
                    setPrixSuppl(nbPers * gite.supplementParPers * 2);
                  }
                } else if (nuitee === 3) {
                  console.log('Cas hors week-end 3 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    console.log('ici');
                    console.log(gite.tarifParPersParNuit);
                    console.log(gite.ftMenage);
                    console.log(nbPers);
                    setPrixTotal(gite.ftMenage + nbPers * gite.tarifParPersParNuit * 3);
                    setPrixSuppl();
                  } else {
                    setPrixTotal(gite.ftMenage + nbPers * gite.tarifParPersParNuit * 3);
                    setPrixSuppl(nbPers * gite.supplementParPers * 3);
                  }
                } else if (nuitee === 4) {
                  console.log('Cas hors week-end 4 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal(gite.ftMenage + nbPers * gite.tarifParPersParNuit * 4);
                    setPrixSuppl();
                  } else {
                    setPrixTotal(gite.ftMenage + nbPers * gite.tarifParPersParNuit * 4);
                    setPrixSuppl(nbPers * gite.supplementParPers * 4);
                  }
                } else if (nuitee === 5) {
                  console.log('Cas hors week-end 5 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal(gite.ftMenage + nbPers * gite.tarifParPersParNuit * 5);
                  } else {
                    setPrixTotal(gite.ftMenage + nbPers * gite.tarifParPersParNuit * 5);
                    setPrixSuppl(nbPers * gite.supplementParPers * 5);
                  }
                } else if (nuitee === 6) {
                  console.log('Cas hors week-end 6 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal(gite.ftMenage + nbPers * gite.tarifParPersParNuit * 6);
                  } else {
                    setPrixTotal(gite.ftMenage + nbPers * gite.tarifParPersParNuit * 6);
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
                    setPrixTotal((gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison) / 7 * 1 + gite.ftMenage);
                  } else {
                    setPrixTotal((gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison) / 7 * 1 + gite.ftMenage);
                    setPrixSuppl(nbPers * gite.supplementParPers * 1);
                  }
                } else if (nuitee === 2) {
                  console.log('Cas hors week-end 2 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal((gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison) / 7 * 2 + gite.ftMenage);
                  } else {
                    setPrixTotal((gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison) / 7 * 2 + gite.ftMenage);
                    setPrixSuppl(nbPers * gite.supplementParPers * 2);
                  }
                } else if (nuitee === 3) {
                  console.log('Cas hors week-end 3 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    console.log('ici');
                    setPrixTotal((gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison) / 7 * 3 + gite.ftMenage);
                  } else {
                    setPrixTotal((gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison) / 7 * 3 + gite.ftMenage);
                    setPrixSuppl(nbPers * gite.supplementParPers * 3);
                  }
                } else if (nuitee === 4) {
                  console.log('Cas hors week-end 4 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal((gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison) / 7 * 4 + gite.ftMenage);
                  } else {
                    setPrixTotal((gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison) / 7 * 4 + gite.ftMenage);
                    setPrixSuppl(nbPers * gite.supplementParPers * 4);
                  }
                } else if (nuitee === 5) {
                  console.log('Cas hors week-end 5 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal((gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison) / 7 * 5 + gite.ftMenage);
                  } else {
                    setPrixTotal((gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison) / 7 * 5 + gite.ftMenage);
                    setPrixSuppl(nbPers * gite.supplementParPers * 5);
                  }
                } else if (nuitee === 6) {
                  console.log('Cas hors week-end 6 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal((gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison) / 7 * 6 + gite.ftMenage);
                  } else {
                    setPrixTotal((gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison) / 7 * 6 + gite.ftMenage);
                    setPrixSuppl(nbPers * gite.supplementParPers * 6);
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
      lineNumber: 609,
      columnNumber: 3
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["InputLabel"], {
    shrink: true,
    id: "demo-simple-select-placeholder-label-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611,
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
        lineNumber: 620,
        columnNumber: 7
      }
    }, gites.map(function (gite) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
        value: gite.slug,
        key: gite.slug,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 622,
          columnNumber: 9
        }
      }, gite.nom);
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 616,
      columnNumber: 5
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 630,
      columnNumber: 4
    }
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_8__["MuiPickersUtilsProvider"], {
    utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_1__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631,
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
      lineNumber: 632,
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
      lineNumber: 646,
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
      lineNumber: 663,
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
      lineNumber: 675,
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
      lineNumber: 687,
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
      lineNumber: 699,
      columnNumber: 4
    }
  }, "Calculer le tarif"), isSubmited && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 708,
      columnNumber: 6
    }
  }, console.log('loué : ', dejaLoue), dejaLoue ? 'Il semble que ce gîte soit déjà loué aux dates indiquées' : __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 713,
      columnNumber: 8
    }
  }, "Ce g\xEEte semble libre pour le moment aux dates indiqu\xE9es, n'h\xE9sitez pas \xE0 faire une demande de location", __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "contained",
    color: "secondary",
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 718,
      columnNumber: 10
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/reservation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 722,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
      columnNumber: 12
    }
  }, "Je reserve"))))), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 730,
      columnNumber: 6
    }
  }, "Location du ", dateDebut, " au ", dateFin, " pour le g\xEEte", ' ', giteSelec, " pour ", nbPers, " personnes dont ", nbEnf, " enfants et ", nbChien, " animaux"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 735,
      columnNumber: 6
    }
  }, "Total de ", nuitee, " nuit\xE9es", ' ', isVacances ? 'en période de vacances' : 'hors vacances', ' ', "et ", isWeekEnd ? 'en week-end' : ' hors week-end'), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 742,
      columnNumber: 6
    }
  }, "Montant de base : ", prixTotal), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 743,
      columnNumber: 6
    }
  }, "Montant suppl\xE9mentaire : ", prixSuppl)));
};

_s(FormCalculTarif, "LkxE7dgvQhRtgRMWtPlko3gARNk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9Gb3JtQ2FsY3VsVGFyaWYuanMiXSwibmFtZXMiOlsiZGF5anMiLCJleHRlbmQiLCJpc0JldHdlZW4iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJmb3JtIiwid2lkdGgiLCJtYXJnaW4iLCJzcGFjaW5nIiwicm9vdCIsImJ1dHRvbiIsImZvcm1Db250cm9sIiwidGV4dEZpZWxkIiwiRm9ybUNhbGN1bFRhcmlmIiwiZ2l0ZXMiLCJ1c2VGb3JtIiwiY29udHJvbCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiY2xhc3NlcyIsInRva2VuIiwiZ2V0Q29va2llIiwidXNlU3RhdGUiLCJzZWxlY3RlZERhdGVEZWJ1dCIsInNldFNlbGVjdGVkRGF0ZURlYnV0Iiwic2VsZWN0ZWREYXRlRmluIiwic2V0U2VsZWN0ZWREYXRlRmluIiwiZGF0ZURlYnV0Iiwic2V0RGF0ZURlYnV0IiwiZGF0ZUZpbiIsInNldERhdGVGaW4iLCJnaXRlU2VsZWMiLCJzZXRHaXRlU2VsZWMiLCJuYkNoaWVuIiwic2V0TmJDaGllbiIsIm5iRW5mIiwic2V0TmJFbmYiLCJuYlBlcnMiLCJzZXROYlBlcnMiLCJudWl0ZWUiLCJzZXROdWl0ZWUiLCJpc1ZhY2FuY2VzIiwic2V0SXNWYWNhbmNlcyIsImlzV2Vla0VuZCIsInNldElzV2Vla0VuZCIsImRlamFMb3VlIiwic2V0RGVqYUxvdWUiLCJwcml4VG90YWwiLCJzZXRQcml4VG90YWwiLCJwcml4U3VwcGwiLCJzZXRQcml4U3VwcGwiLCJpc1N1Ym1pdGVkIiwic2V0SXNTdWJtaXRlZCIsImhhbmRsZURhdGVDaGFuZ2VEZWJ1dCIsImRhdGUiLCJoYW5kbGVEYXRlQ2hhbmdlRmluIiwib25TdWJtaXQiLCJkYXRhIiwiZGF0ZUQiLCJkYXRlRiIsImdldFZhY2FuY2VzIiwidGhlbiIsInJlc3VsdCIsInZhY2FuY2VzIiwiZGlmZiIsImdpdGUiLCJzbHVnIiwiZ2V0RGVqYUxvdWUiLCJjYWxlbmRhcklkIiwiY29uc29sZSIsImxvZyIsImxvdWUiLCJtb250aCIsInRhcmlmUGFyUGVyc1Bhck51aXQiLCJmdE1lbmFnZSIsInRhcmlmRGVCYXNlIiwiY29lZmZpY2llbnRzIiwiYmFzc2VTYWlzb24iLCJtb3llbm5lU2Fpc29uIiwiaGF1dGVTYWlzb24iLCJkYXlPZlllYXIiLCJub2VsIiwibm91dmVsQW4iLCJkYXkiLCJ1bmVOdWl0ZWUiLCJzZXRBdmVydGlzc2VtZW50IiwibWVzc2FnZSIsInRyb2lzTnVpdGVlcyIsInF1YXRyZU51aXRlZXMiLCJuUGVycyIsInN1cHBsZW1lbnRQYXJQZXJzIiwibWFwIiwibm9tIiwiRGF0ZUZuc1V0aWxzIiwic2hyaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSw0Q0FBSyxDQUFDQyxNQUFOLENBQWFDLDZEQUFiO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFLQTtBQU1BO0FBQ0E7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDeENDLFFBQUksRUFBRTtBQUNMQyxXQUFLLEVBQUUsS0FERjtBQUVMQyxZQUFNLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQ7QUFGSCxLQURrQztBQUt4Q0MsUUFBSSxFQUFFO0FBQ0xILFdBQUssRUFBRTtBQURGLEtBTGtDO0FBUXhDSSxVQUFNLEVBQUU7QUFDUEgsWUFBTSxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkLENBREQ7QUFFUEYsV0FBSyxFQUFFO0FBRkEsS0FSZ0M7QUFZeENLLGVBQVcsRUFBRTtBQUNaSixZQUFNLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsQ0FESTtBQUVaRixXQUFLLEVBQUU7QUFGSyxLQVoyQjtBQWdCeENNLGFBQVMsRUFBRTtBQUNWTCxZQUFNLEVBQUVILEtBQUssQ0FBQ0ks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RCxFQXVCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNjaUIsU0FEZCxVQUM2QkUsT0FEN0Isc0JBQ21ELEdBRG5ELEVBRUVFLFNBRkYsWUFFbUJNLE1BRm5CLHNCQUUyQ0YsS0FGM0Msa0JBR0tGLE9BSEwsYUF2QkQsRUE0QkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDV00sTUFEWCxpQkFDMkIsR0FEM0IsRUFFRUUsVUFBVSxHQUNSLHdCQURRLEdBRVIsZUFKSixFQUlxQixHQUpyQixTQUtLRSxTQUFTLEdBQUcsYUFBSCxHQUFtQixnQkFMakMsQ0E1QkQsRUFtQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBc0JJLFNBQXRCLENBbkNELEVBb0NDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBQTZCRSxTQUE3QixDQXBDRCxDQWxHRixDQUREO0FBNElBLENBeHJCRDs7R0FBTXBDLGU7VUFDdUNFLHVELEVBQzVCYixTOzs7S0FGWFcsZTtBQTByQlNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rhcmlmcy44MmM3ZTg1ZmQ5MWFlYzU1OTI0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGVGbnNVdGlscyBmcm9tICdAZGF0ZS1pby9kYXRlLWZucyc7XHJcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgaXNCZXR3ZWVuIGZyb20gJ2RheWpzL3BsdWdpbi9pc0JldHdlZW4nO1xyXG5kYXlqcy5leHRlbmQoaXNCZXR3ZWVuKTtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtcclxuXHRCdXR0b24sXHJcblx0Rm9ybUNvbnRyb2wsXHJcblx0SW5wdXRMYWJlbCxcclxuXHRNZW51SXRlbSxcclxuXHRTZWxlY3QsXHJcblx0VGV4dEZpZWxkLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7XHJcblx0TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIsXHJcblx0S2V5Ym9hcmRUaW1lUGlja2VyLFxyXG5cdEtleWJvYXJkRGF0ZVBpY2tlcixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvcGlja2Vycyc7XHJcbmltcG9ydCB7XHJcblx0Z2V0Q2FsZW5kYXIsXHJcblx0Z2V0Q2FsZW5kYXJCeUlkLFxyXG5cdGdldERlamFMb3VlLFxyXG5cdGdldFZhY2FuY2VzLFxyXG59IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvY2FsZW5kYXJBY3Rpb25zJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0Zm9ybToge1xyXG5cdFx0d2lkdGg6ICc3MCUnLFxyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdH0sXHJcblx0cm9vdDoge1xyXG5cdFx0d2lkdGg6ICc4MCUnLFxyXG5cdH0sXHJcblx0YnV0dG9uOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0XHR3aWR0aDogJzgwJScsXHJcblx0fSxcclxuXHRmb3JtQ29udHJvbDoge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0d2lkdGg6ICc4MCUnLFxyXG5cdH0sXHJcblx0dGV4dEZpZWxkOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHR3aWR0aDogJzgwJScsXHJcblx0fSxcclxufSkpO1xyXG5cclxuY29uc3QgRm9ybUNhbGN1bFRhcmlmID0gKHsgZ2l0ZXMgfSkgPT4ge1xyXG5cdGNvbnN0IHsgY29udHJvbCwgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybSgpO1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHRjb25zdCBbc2VsZWN0ZWREYXRlRGVidXQsIHNldFNlbGVjdGVkRGF0ZURlYnV0XSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW3NlbGVjdGVkRGF0ZUZpbiwgc2V0U2VsZWN0ZWREYXRlRmluXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW2RhdGVEZWJ1dCwgc2V0RGF0ZURlYnV0XSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW2RhdGVGaW4sIHNldERhdGVGaW5dID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdCBbZ2l0ZVNlbGVjLCBzZXRHaXRlU2VsZWNdID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdCBbbmJDaGllbiwgc2V0TmJDaGllbl0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtuYkVuZiwgc2V0TmJFbmZdID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdCBbbmJQZXJzLCBzZXROYlBlcnNdID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdCBbbnVpdGVlLCBzZXROdWl0ZWVdID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdCBbaXNWYWNhbmNlcywgc2V0SXNWYWNhbmNlc10gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtpc1dlZWtFbmQsIHNldElzV2Vla0VuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2RlamFMb3VlLCBzZXREZWphTG91ZV0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtwcml4VG90YWwsIHNldFByaXhUb3RhbF0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtwcml4U3VwcGwsIHNldFByaXhTdXBwbF0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtpc1N1Ym1pdGVkLCBzZXRJc1N1Ym1pdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlRGF0ZUNoYW5nZURlYnV0ID0gKGRhdGUpID0+IHtcclxuXHRcdHNldFNlbGVjdGVkRGF0ZURlYnV0KGRhdGUpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZURhdGVDaGFuZ2VGaW4gPSAoZGF0ZSkgPT4ge1xyXG5cdFx0c2V0U2VsZWN0ZWREYXRlRmluKGRhdGUpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IHtcclxuXHRcdHNldERhdGVEZWJ1dCgpO1xyXG5cdFx0c2V0RGF0ZUZpbigpO1xyXG5cdFx0c2V0TnVpdGVlKCk7XHJcblx0XHRzZXRHaXRlU2VsZWMoKTtcclxuXHRcdHNldE5iQ2hpZW4oKTtcclxuXHRcdHNldE5iRW5mKCk7XHJcblx0XHRzZXROYlBlcnMoKTtcclxuXHRcdHNldERlamFMb3VlKGZhbHNlKTtcclxuXHRcdHNldElzU3VibWl0ZWQodHJ1ZSk7XHJcblx0XHRjb25zdCB7IGRhdGVEZWJ1dCwgZGF0ZUZpbiwgZ2l0ZVNlbGVjLCBuYkNoaWVuLCBuYkVuZiwgbmJQZXJzIH0gPSBkYXRhO1xyXG5cdFx0Y29uc3QgZGF0ZUQgPSBkYXlqcyhkYXRlRGVidXQpO1xyXG5cdFx0Y29uc3QgZGF0ZUYgPSBkYXlqcyhkYXRlRmluKTtcclxuXHRcdGdldFZhY2FuY2VzKGRhdGVELCBkYXRlRikudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdyZXN1bHQgdmF1dCcsIHJlc3VsdCk7XHJcblx0XHRcdHNldElzVmFjYW5jZXMocmVzdWx0LnZhY2FuY2VzKTtcclxuXHRcdFx0Ly8gcmV0dXJuIHJlc3VsdC52YWNhbmNlcztcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IG51aXRlZSA9IGRhdGVGLmRpZmYoZGF0ZUQsICdkYXknKTtcclxuXHRcdHNldERhdGVEZWJ1dChkYXRlRGVidXQpO1xyXG5cdFx0c2V0RGF0ZUZpbihkYXRlRmluKTtcclxuXHRcdHNldE51aXRlZShudWl0ZWUpO1xyXG5cdFx0c2V0R2l0ZVNlbGVjKGdpdGVTZWxlYyk7XHJcblx0XHRzZXROYkNoaWVuKG5iQ2hpZW4pO1xyXG5cdFx0c2V0TmJFbmYobmJFbmYpO1xyXG5cdFx0c2V0TmJQZXJzKG5iUGVycyk7XHJcblxyXG5cdFx0Zm9yIChjb25zdCBnaXRlIG9mIGdpdGVzKSB7XHJcblx0XHRcdGlmIChnaXRlLnNsdWcgPT09IGdpdGVTZWxlYykge1xyXG5cdFx0XHRcdGdldERlamFMb3VlKGdpdGUuY2FsZW5kYXJJZCwgZGF0ZUQsIGRhdGVGKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdyZXN1bHQgbG91ZScsIHJlc3VsdC5sb3VlKTtcclxuXHRcdFx0XHRcdGlmIChyZXN1bHQubG91ZSkge1xyXG5cdFx0XHRcdFx0XHRzZXREZWphTG91ZSh0cnVlKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHNldERlamFMb3VlKGZhbHNlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHQvLyBPbiByw6ljdXDDqHJlIGxlIGfDrnRlIHNlbGVjdGlvbm7DqVxyXG5cdFx0XHRcdGlmIChudWl0ZWUgPT09IDcgfHwgbnVpdGVlID09PSAxNCB8fCBudWl0ZWUgPT09IDIxKSB7XHJcblx0XHRcdFx0XHRpZiAoaXNWYWNhbmNlcykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ2FzIGfDqW7DqXJhbCA6IG9uIGVzdCBlbiB2YW5jYW5jZXMnKTtcclxuXHRcdFx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0XHRcdGRheWpzKGRhdGVEKS5pc0JldHdlZW4oXHJcblx0XHRcdFx0XHRcdFx0XHRkYXlqcygpLm1vbnRoKDYpLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGF5anMoKS5tb250aCg3KSxcclxuXHRcdFx0XHRcdFx0XHRcdG51bGwsXHJcblx0XHRcdFx0XHRcdFx0XHQnW10nXHJcblx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnb24gZXN0IGVuIGhhdXRlIHNhaXNvbiDDoCBsYSBzZW1haW5lJyk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5mdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm1veWVubmVTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5oYXV0ZVNhaXNvblxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdFx0XHRcdFx0ZGF5anMoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmRheU9mWWVhcigzNTgpXHJcblx0XHRcdFx0XHRcdFx0XHQuaXNCZXR3ZWVuKGRhdGVELCBkYXRlRiwgbnVsbCwgJ1tdJylcclxuXHRcdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ29uIGVzdCDDoCBub2VsIMOgIGxhIHNlbWFpbmUnKTtcclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmhhdXRlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubm9lbFxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdFx0XHRcdFx0ZGF5anMoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmRheU9mWWVhcigzNjUpXHJcblx0XHRcdFx0XHRcdFx0XHQuaXNCZXR3ZWVuKGRhdGVELCBkYXRlRiwgbnVsbCwgJ1tdJylcclxuXHRcdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ29uIGVzdCBhdSBub3V2ZWwgYW4gw6AgbGEgc2VtYWluZScpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuaGF1dGVTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5ub2VsICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubm91dmVsQW5cclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0J09uIGVzdCBkYW5zIGxlIGNhcyA3IG51aXTDqWVzIGVuIHZhY2FuY2VzIHNjb2xhaXJlcyBtb3llbm5lIHNhaXNvbidcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5mdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm1veWVubmVTYWlzb25cclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ2FzIDcgbnVpdMOpZXMgaG9ycyB2YWNhbmNlcycpO1xyXG5cdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICtcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUuZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvblxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA8IDcpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdDYXMgZ8OpbsOpcmFsIDogbnVpdMOpZXMgaW5mw6lyaWV1cmUgw6AgNycpO1xyXG5cdFx0XHRcdFx0aWYgKGRheWpzKCkuZGF5KDYpLmlzQmV0d2VlbihkYXRlRCwgZGF0ZUYsIG51bGwsICdbXScpKSB7XHJcblx0XHRcdFx0XHRcdHNldElzV2Vla0VuZCh0cnVlKTtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyBlbiB3ZWVrLWVuZCBtb2lucyBkZSA3IG51aXRzJyk7XHJcblx0XHRcdFx0XHRcdGlmIChudWl0ZWUgPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdCdDYXMgd2Vlay1lbmQgMSBudWl0ICsgbXNnIGF2ZXJ0aXNzZW1lbnQnXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlIC8gMiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudW5lTnVpdGVlXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoKTtcclxuXHRcdFx0XHRcdFx0XHRzZXRBdmVydGlzc2VtZW50KHtcclxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6XHJcblx0XHRcdFx0XHRcdFx0XHRcdCdFbiB3ZWVrIGVuZCBub3VzIGxvdW9ucyAyIG51aXTDqWVzLCAodHLDqHMgZXhjZXB0aW9ubmVsZW1lbnQgMSBzZXVsZSknLFxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gMikge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdDYXMgd2Vlay1lbmQgMiBudWl0cycpO1xyXG5cdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5mdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2VcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gMykge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdDYXMgd2Vlay1lbmQgMyBudWl0cycpO1xyXG5cdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5mdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRyb2lzTnVpdGVlc1xyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA0KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyB3ZWVrLWVuZCA0IG51aXRzJyk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUucXVhdHJlTnVpdGVlc1xyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA1KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHQnQ2FzIHdlZWstZW5kIDUgbnVpdHMgLSBRdWVsIHRhcmlmID8gVm9pciBNYW1hbidcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA2KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHQnQ2FzIHdlZWstZW5kIDYgbnVpdHMgLSBRdWVsIHRhcmlmID8gVm9pciBNYW1hbidcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHQnQXV0cmVzIGNhcyB3ZWVrLWVuZCBpbmbDqXJpZXVyIMOgIDcgbnVpdHMgLSBJbnBvc3NpYmxlLi4uJ1xyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdCdDYXMgZ8OpbsOpcmFsIDogbW9pbnMgZGUgNyBudWl0cyBldCBzYW5zIHNhbWVkaSdcclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0aWYgKGlzVmFjYW5jZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdCdDYXMgZ8OpbsOpcmFsIDogaG9ycyBXRSBtb2lucyBkZSA3IG51aXRzIG1haXMgZW4gdmFjYW5jZXMgLSBUYXJpZiBzYW5zIHRlbmlyIGNvbXB0ZSBkdSBwbGFmb25kJ1xyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKG51aXRlZSA9PT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCAxIG51aXQgbWFpcyBlbiB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDFcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5mdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQxXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogMVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSAyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDIgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coYE1vaW5zIGRlICR7Z2l0ZS5uUGVyc30gcGVyc2ApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5mdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQyXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDJcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gMykge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCAzIG51aXRzIG1haXMgZW4gdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdpY2knKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZ2l0ZS5mdE1lbmFnZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKG5iUGVycyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDNcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5mdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQzXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogM1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDQgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDRcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiA0XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgNSBudWl0cyBtYWlzIGVuIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5mdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ1XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5mdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ1XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogNVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA2KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDYgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDZcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdBdXRyZXMgY2FzIHdlZWstZW5kIGluZsOpcmlldXIgw6AgNyBudWl0cyAtIFBldSBwcm9iYWJsZS4uLidcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0J0NhcyBnw6luw6lyYWwgOiBob3JzIFdFIG1vaW5zIGRlIDcgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcyAtIFRhcmlmIGF2ZWMgcGxhZm9uZCdcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0aWYgKG51aXRlZSA9PT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCAxIG51aXQgZXQgaG9ycyB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbikgL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NykgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0MSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmZ0TWVuYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KChnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm1veWVubmVTYWlzb24pIC9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcpICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDEgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5mdE1lbmFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDFcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gMikge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCAyIG51aXRzIGV0IGhvcnMgdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbikgL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NykgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0MiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmZ0TWVuYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KChnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm1veWVubmVTYWlzb24pIC9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcpICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDIgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5mdE1lbmFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDJcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gMykge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCAzIG51aXRzIGV0IGhvcnMgdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdpY2knKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCgoZ2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uKSAvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ3KSAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQzICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuZnRNZW5hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbikgL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NykgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0MyArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmZ0TWVuYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogM1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDQgbnVpdHMgZXQgaG9ycyB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCgoZ2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uKSAvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ3KSAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ0ICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuZnRNZW5hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbikgL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NykgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NCArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmZ0TWVuYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogNFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA1KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDUgbnVpdHMgZXQgaG9ycyB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCgoZ2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uKSAvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ3KSAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ1ICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuZnRNZW5hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbikgL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NykgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmZ0TWVuYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogNVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA2KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDYgbnVpdHMgZXQgaG9ycyB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCgoZ2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uKSAvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ3KSAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ2ICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuZnRNZW5hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbikgL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NykgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmZ0TWVuYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogNlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnQXV0cmVzIGNhcyBudWl0ID4gNyBldCAhPT0gZGUgMTQgZXQgMjEnKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdHw6lyZXIgY2FzID4zMCBpY2knKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cclxuXHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0PElucHV0TGFiZWxcclxuXHRcdFx0XHRcdHNocmlua1xyXG5cdFx0XHRcdFx0aWQ9J2RlbW8tc2ltcGxlLXNlbGVjdC1wbGFjZWhvbGRlci1sYWJlbC1sYWJlbCc+XHJcblx0XHRcdFx0XHRHaXRlXHJcblx0XHRcdFx0PC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0bmFtZT0nZ2l0ZVNlbGVjJ1xyXG5cdFx0XHRcdFx0YXM9e1xyXG5cdFx0XHRcdFx0XHQ8U2VsZWN0IGlkPSdkZWNsZW5jaGV1ci1zZWxlY3QnIGRlZmF1bHRWYWx1ZT0nJz5cclxuXHRcdFx0XHRcdFx0XHR7Z2l0ZXMubWFwKChnaXRlKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9e2dpdGUuc2x1Z30ga2V5PXtnaXRlLnNsdWd9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Z2l0ZS5ub219XHJcblx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHQ8L1NlbGVjdD5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHQ8TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIgdXRpbHM9e0RhdGVGbnNVdGlsc30+XHJcblx0XHRcdFx0XHQ8S2V5Ym9hcmREYXRlUGlja2VyXHJcblx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0bWFyZ2luPSdub3JtYWwnXHJcblx0XHRcdFx0XHRcdGlkPSdkYXRlLXBpY2tlci1kaWFsb2cnXHJcblx0XHRcdFx0XHRcdG5hbWU9J2RhdGVEZWJ1dCdcclxuXHRcdFx0XHRcdFx0bGFiZWw9J0RhdGUgZGUgZMOpYnV0J1xyXG5cdFx0XHRcdFx0XHRmb3JtYXQ9J01NL2RkL3l5eXknXHJcblx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT0nJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17c2VsZWN0ZWREYXRlRGVidXR9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVEYXRlQ2hhbmdlRGVidXR9XHJcblx0XHRcdFx0XHRcdEtleWJvYXJkQnV0dG9uUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6ICdjaGFuZ2UgZGF0ZScsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PEtleWJvYXJkRGF0ZVBpY2tlclxyXG5cdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdC8vIGRpc2FibGVUb29sYmFyXHJcblx0XHRcdFx0XHRcdG5hbWU9J2RhdGVGaW4nXHJcblx0XHRcdFx0XHRcdGZvcm1hdD0nTU0vZGQveXl5eSdcclxuXHRcdFx0XHRcdFx0bWFyZ2luPSdub3JtYWwnXHJcblx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT0nMDIvMjUvMjAyMSdcclxuXHRcdFx0XHRcdFx0aWQ9J2RhdGUtcGlja2VyLWlubGluZSdcclxuXHRcdFx0XHRcdFx0bGFiZWw9J0RhdGUgZGUgZmluJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17c2VsZWN0ZWREYXRlRmlufVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlRGF0ZUNoYW5nZUZpbn1cclxuXHRcdFx0XHRcdFx0S2V5Ym9hcmRCdXR0b25Qcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRcdCdhcmlhLWxhYmVsJzogJ2NoYW5nZSBkYXRlJyxcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9NdWlQaWNrZXJzVXRpbHNQcm92aWRlcj5cclxuXHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdG5hbWU9J25iUGVycydcclxuXHRcdFx0XHR0eXBlPSdudW1iZXInXHJcblx0XHRcdFx0ZGVmYXVsdFZhbHVlPScxMCdcclxuXHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdGxhYmVsPSdOb21icmUgZGUgcGVyc29ubmVzIGF1IHRvdGFsJ1xyXG5cdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRuYW1lPSduYkVuZidcclxuXHRcdFx0XHR0eXBlPSdudW1iZXInXHJcblx0XHRcdFx0ZGVmYXVsdFZhbHVlPScyJ1xyXG5cdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0bGFiZWw9XCJOb21icmUgZCdlbmZhbnRzIC0xOCBhbnNcIlxyXG5cdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRuYW1lPSduYkNoaWVuJ1xyXG5cdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRkZWZhdWx0VmFsdWU9JzAnXHJcblx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRsYWJlbD0nQ2hpZW5zICgz4oKsL2ovYW5pbWFsKSdcclxuXHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0dHlwZT0nc3VibWl0J1xyXG5cdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRjb2xvcj0ncHJpbWFyeSdcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRDYWxjdWxlciBsZSB0YXJpZlxyXG5cdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0e2lzU3VibWl0ZWQgJiYgKFxyXG5cdFx0XHRcdDw+XHJcblx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0e2NvbnNvbGUubG9nKCdsb3XDqSA6ICcsIGRlamFMb3VlKX1cclxuXHRcdFx0XHRcdFx0e2RlamFMb3VlID8gKFxyXG5cdFx0XHRcdFx0XHRcdCdJbCBzZW1ibGUgcXVlIGNlIGfDrnRlIHNvaXQgZMOpasOgIGxvdcOpIGF1eCBkYXRlcyBpbmRpcXXDqWVzJ1xyXG5cdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0Q2UgZ8OudGUgc2VtYmxlIGxpYnJlIHBvdXIgbGUgbW9tZW50IGF1eCBkYXRlc1xyXG5cdFx0XHRcdFx0XHRcdFx0aW5kaXF1w6llcywgbidow6lzaXRleiBwYXMgw6AgZmFpcmUgdW5lIGRlbWFuZGUgZGVcclxuXHRcdFx0XHRcdFx0XHRcdGxvY2F0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdjb250YWluZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I9J3NlY29uZGFyeSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvcmVzZXJ2YXRpb24nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+SmUgcmVzZXJ2ZTwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRMb2NhdGlvbiBkdSB7ZGF0ZURlYnV0fSBhdSB7ZGF0ZUZpbn0gcG91ciBsZSBnw650ZXsnICd9XHJcblx0XHRcdFx0XHRcdHtnaXRlU2VsZWN9IHBvdXIge25iUGVyc30gcGVyc29ubmVzIGRvbnQge25iRW5mfSBlbmZhbnRzXHJcblx0XHRcdFx0XHRcdGV0IHtuYkNoaWVufSBhbmltYXV4XHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0VG90YWwgZGUge251aXRlZX0gbnVpdMOpZXN7JyAnfVxyXG5cdFx0XHRcdFx0XHR7aXNWYWNhbmNlc1xyXG5cdFx0XHRcdFx0XHRcdD8gJ2VuIHDDqXJpb2RlIGRlIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdDogJ2hvcnMgdmFjYW5jZXMnfXsnICd9XHJcblx0XHRcdFx0XHRcdGV0IHtpc1dlZWtFbmQgPyAnZW4gd2Vlay1lbmQnIDogJyBob3JzIHdlZWstZW5kJ31cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDxwPk1vbnRhbnQgZGUgYmFzZSA6IHtwcml4VG90YWx9PC9wPlxyXG5cdFx0XHRcdFx0PHA+TW9udGFudCBzdXBwbMOpbWVudGFpcmUgOiB7cHJpeFN1cHBsfTwvcD5cclxuXHRcdFx0XHQ8Lz5cclxuXHRcdFx0KX1cclxuXHRcdDwvZm9ybT5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUNhbGN1bFRhcmlmO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9