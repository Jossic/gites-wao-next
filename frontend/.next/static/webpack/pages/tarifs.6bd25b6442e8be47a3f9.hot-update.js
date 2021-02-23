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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var _actions_calendarActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../actions/calendarActions */ "./actions/calendarActions.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");
var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\forms\\FormCalculTarif.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





dayjs__WEBPACK_IMPORTED_MODULE_3___default.a.extend(dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_4___default.a);






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
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
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_9__["getCookie"])('token');

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
    setIsSubmited(true);
    var dateDebut = data.dateDebut,
        dateFin = data.dateFin,
        giteSelec = data.giteSelec,
        nbChien = data.nbChien,
        nbEnf = data.nbEnf,
        nbPers = data.nbPers;
    var dateD = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(dateDebut);
    var dateF = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(dateFin);
    Object(_actions_calendarActions__WEBPACK_IMPORTED_MODULE_8__["getVacances"])(dateD, dateF).then(function (result) {
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
          Object(_actions_calendarActions__WEBPACK_IMPORTED_MODULE_8__["getDejaLoue"])(gite.calendarId, dateD, dateF).then(function (result) {
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

              if (dayjs__WEBPACK_IMPORTED_MODULE_3___default()(dateD).isBetween(dayjs__WEBPACK_IMPORTED_MODULE_3___default()().month(6), dayjs__WEBPACK_IMPORTED_MODULE_3___default()().month(7), null, '[]')) {
                console.log('on est en haute saison à la semaine');
                setPrixTotal(gite.tarifParPersParNuit + ftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison + gite.coefficients.hauteSaison);
                setPrixSuppl();
              } else if (dayjs__WEBPACK_IMPORTED_MODULE_3___default()().dayOfYear(358).isBetween(dateD, dateF, null, '[]')) {
                console.log('on est à noel à la semaine');
                setPrixTotal(gite.tarifParPersParNuit + ftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison + gite.coefficients.hauteSaison + gite.coefficients.noel);
                setPrixSuppl();
              } else if (dayjs__WEBPACK_IMPORTED_MODULE_3___default()().dayOfYear(365).isBetween(dateD, dateF, null, '[]')) {
                console.log('on est au nouvel an à la semaine');
                setPrixTotal(gite.tarifParPersParNuit + ftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison + gite.coefficients.hauteSaison + gite.coefficients.noel + gite.coefficients.nouvelAn);
                setPrixSuppl();
              } else {
                console.log('On est dans le cas 7 nuitées en vacances scolaires moyenne saison'); //

                setPrixTotal(gite.tarifParPersParNuit + ftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison);
                setPrixSuppl();
              }
            } else {
              console.log('Cas 7 nuitées hors vacances'); //

              setPrixTotal(gite.tarifParPersParNuit + ftMenage + gite.tarifDeBase + gite.coefficients.basseSaison);
              setPrixSuppl();
            }
          } else if (nuitee < 7) {
            console.log('Cas général : nuitées inférieure à 7');

            if (dayjs__WEBPACK_IMPORTED_MODULE_3___default()().day(6).isBetween(dateD, dateF, null, '[]')) {
              setIsWeekEnd(true);
              console.log('Cas en week-end moins de 7 nuits');

              if (nuitee === 1) {
                console.log('Cas week-end 1 nuit + msg avertissement'); //

                setPrixTotal(gite.tarifParPersParNuit + ftMenage + gite.tarifDeBase / 2 + gite.uneNuitee);
                setPrixSuppl();
                setAvertissement({
                  message: 'En week end nous louons 2 nuitées, (très exceptionnelement 1 seule)'
                });
              } else if (nuitee === 2) {
                console.log('Cas week-end 2 nuits'); //

                setPrixTotal(gite.tarifParPersParNuit + ftMenage + gite.tarifDeBase);
                setPrixSuppl();
              } else if (nuitee === 3) {
                console.log('Cas week-end 3 nuits'); //

                setPrixTotal(gite.tarifParPersParNuit + ftMenage + gite.tarifDeBase + gite.troisNuitees);
                setPrixSuppl();
              } else if (nuitee === 4) {
                console.log('Cas week-end 4 nuits'); //

                setPrixTotal(gite.tarifParPersParNuit + ftMenage + gite.tarifDeBase + gite.quatreNuitees);
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
                    setPrixTotal(gite.tarifParPersParNuit + ftMenage + nbPers * gite.tarifParPersParNuit * 1);
                    setPrixSuppl();
                  } else {
                    setPrixTotal(gite.tarifParPersParNuit + ftMenage + nbPers * gite.tarifParPersParNuit * 1);
                    setPrixSuppl(nbPers * gite.supplementParPers * 1);
                  }
                } else if (nuitee === 2) {
                  console.log('Cas hors week-end 2 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    console.log("Moins de ".concat(gite.nPers, " pers"));
                    setPrixTotal(gite.tarifParPersParNuit + ftMenage + nbPers * gite.tarifParPersParNuit * 2);
                    setPrixSuppl();
                  } else {
                    setPrixTotal(gite.tarifParPersParNuit + ftMenage + nbPers * gite.tarifParPersParNuit * 2);
                    setPrixSuppl(nbPers * gite.supplementParPers * 2);
                  }
                } else if (nuitee === 3) {
                  console.log('Cas hors week-end 3 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    console.log('ici');
                    setPrixTotal(gite.tarifParPersParNuit + ftMenage + nbPers * gite.tarifParPersParNuit * 3);
                    setPrixSuppl();
                  } else {
                    setPrixTotal(gite.tarifParPersParNuit + ftMenage + nbPers * gite.tarifParPersParNuit * 3);
                    setPrixSuppl(nbPers * gite.supplementParPers * 3);
                  }
                } else if (nuitee === 4) {
                  console.log('Cas hors week-end 4 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal(gite.tarifParPersParNuit + ftMenage + nbPers * gite.tarifParPersParNuit * 4);
                    setPrixSuppl();
                  } else {
                    setPrixTotal(gite.tarifParPersParNuit + ftMenage + nbPers * gite.tarifParPersParNuit * 4);
                    setPrixSuppl(nbPers * gite.supplementParPers * 4);
                  }
                } else if (nuitee === 5) {
                  console.log('Cas hors week-end 5 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal(gite.tarifParPersParNuit + ftMenage + nbPers * gite.tarifParPersParNuit * 5);
                  } else {
                    setPrixTotal(gite.tarifParPersParNuit + ftMenage + nbPers * gite.tarifParPersParNuit * 5);
                    setPrixSuppl(nbPers * gite.supplementParPers * 5);
                  }
                } else if (nuitee === 6) {
                  console.log('Cas hors week-end 6 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal(gite.tarifParPersParNuit + ftMenage + nbPers * gite.tarifParPersParNuit * 6);
                  } else {
                    setPrixTotal(gite.tarifParPersParNuit + ftMenage + nbPers * gite.tarifParPersParNuit * 6);
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
                    setPrixTotal(gite.tarifParPersParNuit + ftMenage + nbPers * gite.tarifParPersParNuit * 1);
                  } else {
                    setPrixTotal((gite.tarifParPersParNuit + ftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuit + ftMenage) / 7 * 1 + gite.tarifParPersParNuit + ftMenage);
                    setPrixSuppl(nbPers * gite.supplementParPers * 1);
                  }
                } else if (nuitee === 2) {
                  console.log('Cas hors week-end 2 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal(gite.tarifParPersParNuit + ftMenage + nbPers * gite.tarifParPersParNuit * 2);
                  } else {
                    setPrixTotal((gite.tarifParPersParNuit + ftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuit + ftMenage) / 7 * 2 + gite.tarifParPersParNuit + ftMenage);
                    setPrixSuppl(nbPers * gite.supplementParPers * 2);
                  }
                } else if (nuitee === 3) {
                  console.log('Cas hors week-end 3 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    // console.log('ici');
                    setPrixTotal(gite.tarifParPersParNuit + ftMenage + nbPers * gite.tarifParPersParNuit * 3);
                  } else {
                    setPrixTotal((gite.tarifParPersParNuit + ftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuit + ftMenage) / 7 * 3 + gite.tarifParPersParNuit + ftMenage);
                    setPrixSuppl(nbPers * gite.supplementParPers * 3);
                  }
                } else if (nuitee === 4) {
                  console.log('Cas hors week-end 4 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal(gite.tarifParPersParNuit + ftMenage + nbPers * gite.tarifParPersParNuit * 4);
                  } else {
                    setPrixTotal((gite.tarifParPersParNuit + ftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuit + ftMenage) / 7 * 4 + gite.tarifParPersParNuit + ftMenage);
                    setPrixSuppl(nbPers * gite.supplementParPers * 4);
                  }
                } else if (nuitee === 5) {
                  console.log('Cas hors week-end 5 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal(gite.tarifParPersParNuit + ftMenage + nbPers * gite.tarifParPersParNuit * 5);
                  } else {
                    setPrixTotal((gite.tarifParPersParNuit + ftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuit + ftMenage) / 7 * 5 + gite.tarifParPersParNuit + ftMenage);
                    setPrixSuppl(nbPers * gite.supplementParPers * 5);
                  }
                } else if (nuitee === 6) {
                  console.log('Cas hors week-end 6 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal(gite.tarifParPersParNuit + ftMenage + nbPers * gite.tarifParPersParNuit * 6);
                  } else {
                    setPrixTotal((gite.tarifParPersParNuit + ftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuit + ftMenage) / 7 * 6 + gite.tarifParPersParNuit + ftMenage);
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
      lineNumber: 638,
      columnNumber: 3
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 639,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["InputLabel"], {
    shrink: true,
    id: "demo-simple-select-placeholder-label-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640,
      columnNumber: 5
    }
  }, "Gite"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["Controller"], {
    control: control,
    name: "giteSelec",
    as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Select"], {
      id: "declencheur-select",
      defaultValue: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 649,
        columnNumber: 7
      }
    }, gites.map(function (gite) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
        value: gite.slug,
        key: gite.slug,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 651,
          columnNumber: 9
        }
      }, gite.nom);
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 645,
      columnNumber: 5
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659,
      columnNumber: 4
    }
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_7__["MuiPickersUtilsProvider"], {
    utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_1__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 660,
      columnNumber: 5
    }
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_7__["KeyboardDatePicker"], {
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
      lineNumber: 661,
      columnNumber: 6
    }
  }), __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_7__["KeyboardDatePicker"], {
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
      lineNumber: 675,
      columnNumber: 6
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
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
      lineNumber: 692,
      columnNumber: 4
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
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
      lineNumber: 704,
      columnNumber: 4
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
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
      lineNumber: 716,
      columnNumber: 4
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    type: "submit",
    variant: "contained",
    color: "primary",
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 728,
      columnNumber: 4
    }
  }, "Calculer le tarif"), isSubmited && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 737,
      columnNumber: 6
    }
  }, dejaLoue && 'Il semble que ce gîte soit déjà loué à ces dates'), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 741,
      columnNumber: 6
    }
  }, "Location du ", dateDebut, " au ", dateFin, " pour le g\xEEte", ' ', giteSelec, " pour ", nbPers, " personnes dont ", nbEnf, " enfants et ", nbChien, " animaux"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 746,
      columnNumber: 6
    }
  }, "Total de ", nuitee, " nuit\xE9es", ' ', isVacances ? 'en période de vacances' : 'hors vacances', ' ', "et ", isWeekEnd ? 'en week-end' : ' hors week-end'), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 753,
      columnNumber: 6
    }
  }, "Montant de base : ", prixTotal), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 754,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9Gb3JtQ2FsY3VsVGFyaWYuanMiXSwibmFtZXMiOlsiZGF5anMiLCJleHRlbmQiLCJpc0JldHdlZW4iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJmb3JtIiwid2lkdGgiLCJtYXJnaW4iLCJzcGFjaW5nIiwicm9vdCIsImJ1dHRvbiIsImZvcm1Db250cm9sIiwidGV4dEZpZWxkIiwiRm9ybUNhbGN1bFRhcmlmIiwiZ2l0ZXMiLCJ1c2VGb3JtIiwiY29udHJvbCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiY2xhc3NlcyIsInRva2VuIiwiZ2V0Q29va2llIiwidXNlU3RhdGUiLCJzZWxlY3RlZERhdGVEZWJ1dCIsInNldFNlbGVjdGVkRGF0ZURlYnV0Iiwic2VsZWN0ZWREYXRlRmluIiwic2V0U2VsZWN0ZWREYXRlRmluIiwiZGF0ZURlYnV0Iiwic2V0RGF0ZURlYnV0IiwiZGF0ZUZpbiIsInNldERhdGVGaW4iLCJnaXRlU2VsZWMiLCJzZXRHaXRlU2VsZWMiLCJuYkNoaWVuIiwic2V0TmJDaGllbiIsIm5iRW5mIiwic2V0TmJFbmYiLCJuYlBlcnMiLCJzZXROYlBlcnMiLCJudWl0ZWUiLCJzZXROdWl0ZWUiLCJpc1ZhY2FuY2VzIiwic2V0SXNWYWNhbmNlcyIsImlzV2Vla0VuZCIsInNldElzV2Vla0VuZCIsImRlamFMb3VlIiwic2V0RGVqYUxvdWUiLCJwcml4VG90YWwiLCJzZXRQcml4VG90YWwiLCJwcml4U3VwcGwiLCJzZXRQcml4U3VwcGwiLCJpc1N1Ym1pdGVkIiwic2V0SXNTdWJtaXRlZCIsImhhbmRsZURhdGVDaGFuZ2VEZWJ1dCIsImRhdGUiLCJoYW5kbGVEYXRlQ2hhbmdlRmluIiwib25TdWJtaXQiLCJkYXRhIiwiZGF0ZUQiLCJkYXRlRiIsImdldFZhY2FuY2VzIiwidGhlbiIsInJlc3VsdCIsInZhY2FuY2VzIiwiZGlmZiIsImdpdGUiLCJzbHVnIiwiZ2V0RGVqYUxvdWUiLCJjYWxlbmRhcklkIiwibG91ZSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwibW9udGgiLCJ0YXJpZlBhclBlcnNQYXJOdWl0IiwiZnRNZW5hZ2UiLCJ0YXJpZkRlQmFzZSIsImNvZWZmaWNpZW50cyIsImJhc3NlU2Fpc29uIiwibW95ZW5uZVNhaXNvbiIsImhhdXRlU2Fpc29uIiwiZGF5T2ZZZWFyIiwibm9lbCIsIm5vdXZlbEFuIiwiZGF5IiwidW5lTnVpdGVlIiwic2V0QXZlcnRpc3NlbWVudCIsInRyb2lzTnVpdGVlcyIsInF1YXRyZU51aXRlZXMiLCJuUGVycyIsInN1cHBsZW1lbnRQYXJQZXJzIiwibWFwIiwibm9tIiwiRGF0ZUZuc1V0aWxzIiwic2hyaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsNENBQUssQ0FBQ0MsTUFBTixDQUFhQyw2REFBYjtBQUNBO0FBUUE7QUFDQTtBQUtBO0FBTUE7QUFDQTtBQUVBLElBQU1DLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN4Q0MsUUFBSSxFQUFFO0FBQ0xDLFdBQUssRUFBRSxLQURGO0FBRUxDLFlBQU0sRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZDtBQUZILEtBRGtDO0FBS3hDQyxRQUFJLEVBQUU7QUFDTEgsV0FBSyxFQUFFO0FBREYsS0FMa0M7QUFReENJLFVBQU0sRUFBRTtBQUNQSCxZQUFNLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsQ0FERDtBQUVQRixXQUFLLEVBQUU7QUFGQSxLQVJnQztBQVl4Q0ssZUFBVyxFQUFFO0FBQ1pKLFlBQU0sRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxDQURJO0FBRVpGLFdBQUssRUFBRTtBQUZLLEtBWjJCO0FBZ0J4Q00sYUFBUyxFQUFFO0FBQ1ZMLFlBQU0sRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxDQURFO0FBRVZGLFdBQUssRUFBRTtBQUZHO0FBaEI2QixHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUFzQkEsSUFBTU8sZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGlCQUNNQywrREFBTyxFQURiO0FBQUEsTUFDOUJDLE9BRDhCLFlBQzlCQSxPQUQ4QjtBQUFBLE1BQ3JCQyxRQURxQixZQUNyQkEsUUFEcUI7QUFBQSxNQUNYQyxZQURXLFlBQ1hBLFlBRFc7O0FBRXRDLE1BQU1DLE9BQU8sR0FBR2pCLFNBQVMsRUFBekI7QUFDQSxNQUFNa0IsS0FBSyxHQUFHQyxzRUFBUyxDQUFDLE9BQUQsQ0FBdkI7O0FBSHNDLGtCQUlZQyxzREFBUSxFQUpwQjtBQUFBLE1BSS9CQyxpQkFKK0I7QUFBQSxNQUlaQyxvQkFKWTs7QUFBQSxtQkFLUUYsc0RBQVEsRUFMaEI7QUFBQSxNQUsvQkcsZUFMK0I7QUFBQSxNQUtkQyxrQkFMYzs7QUFBQSxtQkFNSkosc0RBQVEsRUFOSjtBQUFBLE1BTS9CSyxTQU4rQjtBQUFBLE1BTXBCQyxZQU5vQjs7QUFBQSxtQkFPUk4sc0RBQVEsRUFQQTtBQUFBLE1BTy9CTyxPQVArQjtBQUFBLE1BT3RCQyxVQVBzQjs7QUFBQSxtQkFRSlIsc0RBQVEsRUFSSjtBQUFBLE1BUS9CUyxTQVIrQjtBQUFBLE1BUXBCQyxZQVJvQjs7QUFBQSxtQkFTUlYsc0RBQVEsRUFUQTtBQUFBLE1BUy9CVyxPQVQrQjtBQUFBLE1BU3RCQyxVQVRzQjs7QUFBQSxtQkFVWlosc0RBQVEsRUFWSTtBQUFBLE1BVS9CYSxLQVYrQjtBQUFBLE1BVXhCQyxRQVZ3Qjs7QUFBQSxtQkFXVmQsc0RBQVEsRUFYRTtBQUFBLE1BVy9CZSxNQVgrQjtBQUFBLE1BV3ZCQyxTQVh1Qjs7QUFBQSxtQkFZVmhCLHNEQUFRLEVBWkU7QUFBQSxNQVkvQmlCLE1BWitCO0FBQUEsTUFZdkJDLFNBWnVCOztBQUFBLG9CQWFGbEIsc0RBQVEsRUFiTjtBQUFBLE1BYS9CbUIsVUFiK0I7QUFBQSxNQWFuQkMsYUFibUI7O0FBQUEsb0JBY0pwQixzREFBUSxDQUFDLEtBQUQsQ0FkSjtBQUFBLE1BYy9CcUIsU0FkK0I7QUFBQSxNQWNwQkMsWUFkb0I7O0FBQUEsb0JBZU50QixzREFBUSxFQWZGO0FBQUEsTUFlL0J1QixRQWYrQjtBQUFBLE1BZXJCQyxXQWZxQjs7QUFBQSxvQkFnQkp4QixzREFBUSxFQWhCSjtBQUFBLE1BZ0IvQnlCLFNBaEIrQjtBQUFBLE1BZ0JwQkMsWUFoQm9COztBQUFBLG9CQWlCSjFCLHNEQUFRLEVBakJKO0FBQUEsTUFpQi9CMkIsU0FqQitCO0FBQUEsTUFpQnBCQyxZQWpCb0I7O0FBQUEsb0JBa0JGNUIsc0RBQVEsQ0FBQyxLQUFELENBbEJOO0FBQUEsTUFrQi9CNkIsVUFsQitCO0FBQUEsTUFrQm5CQyxhQWxCbUI7O0FBb0J0QyxNQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNDLElBQUQsRUFBVTtBQUN2QzlCLHdCQUFvQixDQUFDOEIsSUFBRCxDQUFwQjtBQUNBLEdBRkQ7O0FBSUEsTUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDRCxJQUFELEVBQVU7QUFDckM1QixzQkFBa0IsQ0FBQzRCLElBQUQsQ0FBbEI7QUFDQSxHQUZEOztBQUlBLE1BQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQsRUFBVTtBQUMxQkwsaUJBQWEsQ0FBQyxJQUFELENBQWI7QUFEMEIsUUFFbEJ6QixTQUZrQixHQUV3QzhCLElBRnhDLENBRWxCOUIsU0FGa0I7QUFBQSxRQUVQRSxPQUZPLEdBRXdDNEIsSUFGeEMsQ0FFUDVCLE9BRk87QUFBQSxRQUVFRSxTQUZGLEdBRXdDMEIsSUFGeEMsQ0FFRTFCLFNBRkY7QUFBQSxRQUVhRSxPQUZiLEdBRXdDd0IsSUFGeEMsQ0FFYXhCLE9BRmI7QUFBQSxRQUVzQkUsS0FGdEIsR0FFd0NzQixJQUZ4QyxDQUVzQnRCLEtBRnRCO0FBQUEsUUFFNkJFLE1BRjdCLEdBRXdDb0IsSUFGeEMsQ0FFNkJwQixNQUY3QjtBQUcxQixRQUFNcUIsS0FBSyxHQUFHM0QsNENBQUssQ0FBQzRCLFNBQUQsQ0FBbkI7QUFDQSxRQUFNZ0MsS0FBSyxHQUFHNUQsNENBQUssQ0FBQzhCLE9BQUQsQ0FBbkI7QUFDQStCLGdGQUFXLENBQUNGLEtBQUQsRUFBUUMsS0FBUixDQUFYLENBQTBCRSxJQUExQixDQUErQixVQUFDQyxNQUFELEVBQVk7QUFDMUM7QUFDQXBCLG1CQUFhLENBQUNvQixNQUFNLENBQUNDLFFBQVIsQ0FBYixDQUYwQyxDQUcxQztBQUNBLEtBSkQ7QUFNQSxRQUFNeEIsTUFBTSxHQUFHb0IsS0FBSyxDQUFDSyxJQUFOLENBQVdOLEtBQVgsRUFBa0IsS0FBbEIsQ0FBZjtBQUNBOUIsZ0JBQVksQ0FBQ0QsU0FBRCxDQUFaO0FBQ0FHLGNBQVUsQ0FBQ0QsT0FBRCxDQUFWO0FBQ0FXLGFBQVMsQ0FBQ0QsTUFBRCxDQUFUO0FBQ0FQLGdCQUFZLENBQUNELFNBQUQsQ0FBWjtBQUNBRyxjQUFVLENBQUNELE9BQUQsQ0FBVjtBQUNBRyxZQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNBRyxhQUFTLENBQUNELE1BQUQsQ0FBVDs7QUFsQjBCLCtDQW9CUHZCLEtBcEJPO0FBQUE7O0FBQUE7QUFvQjFCLDBEQUEwQjtBQUFBLFlBQWZtRCxJQUFlOztBQUN6QixZQUFJQSxJQUFJLENBQUNDLElBQUwsS0FBY25DLFNBQWxCLEVBQTZCO0FBQzVCb0Msc0ZBQVcsQ0FBQ0YsSUFBSSxDQUFDRyxVQUFOLEVBQWtCVixLQUFsQixFQUF5QkMsS0FBekIsQ0FBWCxDQUEyQ0UsSUFBM0MsQ0FBZ0QsVUFBQ0MsTUFBRCxFQUFZO0FBQzNELGdCQUFJQSxNQUFNLENBQUNPLElBQVgsRUFBaUI7QUFDaEJ2Qix5QkFBVyxDQUFDO0FBQ1h3Qix1QkFBTyxFQUNOO0FBRlUsZUFBRCxDQUFYO0FBSUEsYUFMRCxNQUtPO0FBQ054Qix5QkFBVyxDQUFDO0FBQ1h3Qix1QkFBTyxFQUNOO0FBRlUsZUFBRCxDQUFYO0FBSUE7QUFDRCxXQVpELEVBRDRCLENBYzVCOztBQUNBLGNBQUkvQixNQUFNLEtBQUssQ0FBWCxJQUFnQkEsTUFBTSxLQUFLLEVBQTNCLElBQWlDQSxNQUFNLEtBQUssRUFBaEQsRUFBb0Q7QUFDbkQsZ0JBQUlFLFVBQUosRUFBZ0I7QUFDZjhCLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxtQ0FBWjs7QUFDQSxrQkFDQ3pFLDRDQUFLLENBQUMyRCxLQUFELENBQUwsQ0FBYXpELFNBQWIsQ0FDQ0YsNENBQUssR0FBRzBFLEtBQVIsQ0FBYyxDQUFkLENBREQsRUFFQzFFLDRDQUFLLEdBQUcwRSxLQUFSLENBQWMsQ0FBZCxDQUZELEVBR0MsSUFIRCxFQUlDLElBSkQsQ0FERCxFQU9FO0FBQ0RGLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxxQ0FBWjtBQUNBeEIsNEJBQVksQ0FDWGlCLElBQUksQ0FBQ1MsbUJBQUwsR0FDQ0MsUUFERCxHQUVDVixJQUFJLENBQUNXLFdBRk4sR0FHQ1gsSUFBSSxDQUFDWSxZQUFMLENBQWtCQyxXQUhuQixHQUlDYixJQUFJLENBQUNZLFlBQUwsQ0FBa0JFLGFBSm5CLEdBS0NkLElBQUksQ0FBQ1ksWUFBTCxDQUFrQkcsV0FOUixDQUFaO0FBUUE5Qiw0QkFBWTtBQUNaLGVBbEJELE1Ba0JPLElBQ05uRCw0Q0FBSyxHQUNIa0YsU0FERixDQUNZLEdBRFosRUFFRWhGLFNBRkYsQ0FFWXlELEtBRlosRUFFbUJDLEtBRm5CLEVBRTBCLElBRjFCLEVBRWdDLElBRmhDLENBRE0sRUFJTDtBQUNEWSx1QkFBTyxDQUFDQyxHQUFSLENBQVksNEJBQVo7QUFDQXhCLDRCQUFZLENBQ1hpQixJQUFJLENBQUNTLG1CQUFMLEdBQ0NDLFFBREQsR0FFQ1YsSUFBSSxDQUFDVyxXQUZOLEdBR0NYLElBQUksQ0FBQ1ksWUFBTCxDQUFrQkMsV0FIbkIsR0FJQ2IsSUFBSSxDQUFDWSxZQUFMLENBQWtCRSxhQUpuQixHQUtDZCxJQUFJLENBQUNZLFlBQUwsQ0FBa0JHLFdBTG5CLEdBTUNmLElBQUksQ0FBQ1ksWUFBTCxDQUFrQkssSUFQUixDQUFaO0FBU0FoQyw0QkFBWTtBQUNaLGVBaEJNLE1BZ0JBLElBQ05uRCw0Q0FBSyxHQUNIa0YsU0FERixDQUNZLEdBRFosRUFFRWhGLFNBRkYsQ0FFWXlELEtBRlosRUFFbUJDLEtBRm5CLEVBRTBCLElBRjFCLEVBRWdDLElBRmhDLENBRE0sRUFJTDtBQUNEWSx1QkFBTyxDQUFDQyxHQUFSLENBQVksa0NBQVo7QUFDQXhCLDRCQUFZLENBQ1hpQixJQUFJLENBQUNTLG1CQUFMLEdBQ0NDLFFBREQsR0FFQ1YsSUFBSSxDQUFDVyxXQUZOLEdBR0NYLElBQUksQ0FBQ1ksWUFBTCxDQUFrQkMsV0FIbkIsR0FJQ2IsSUFBSSxDQUFDWSxZQUFMLENBQWtCRSxhQUpuQixHQUtDZCxJQUFJLENBQUNZLFlBQUwsQ0FBa0JHLFdBTG5CLEdBTUNmLElBQUksQ0FBQ1ksWUFBTCxDQUFrQkssSUFObkIsR0FPQ2pCLElBQUksQ0FBQ1ksWUFBTCxDQUFrQk0sUUFSUixDQUFaO0FBVUFqQyw0QkFBWTtBQUNaLGVBakJNLE1BaUJBO0FBQ05xQix1QkFBTyxDQUFDQyxHQUFSLENBQ0MsbUVBREQsRUFETSxDQUlOOztBQUNBeEIsNEJBQVksQ0FDWGlCLElBQUksQ0FBQ1MsbUJBQUwsR0FDQ0MsUUFERCxHQUVDVixJQUFJLENBQUNXLFdBRk4sR0FHQ1gsSUFBSSxDQUFDWSxZQUFMLENBQWtCQyxXQUhuQixHQUlDYixJQUFJLENBQUNZLFlBQUwsQ0FBa0JFLGFBTFIsQ0FBWjtBQU9BN0IsNEJBQVk7QUFDWjtBQUNELGFBbkVELE1BbUVPO0FBQ05xQixxQkFBTyxDQUFDQyxHQUFSLENBQVksNkJBQVosRUFETSxDQUVOOztBQUNBeEIsMEJBQVksQ0FDWGlCLElBQUksQ0FBQ1MsbUJBQUwsR0FDQ0MsUUFERCxHQUVDVixJQUFJLENBQUNXLFdBRk4sR0FHQ1gsSUFBSSxDQUFDWSxZQUFMLENBQWtCQyxXQUpSLENBQVo7QUFNQTVCLDBCQUFZO0FBQ1o7QUFDRCxXQS9FRCxNQStFTyxJQUFJWCxNQUFNLEdBQUcsQ0FBYixFQUFnQjtBQUN0QmdDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxzQ0FBWjs7QUFDQSxnQkFBSXpFLDRDQUFLLEdBQUdxRixHQUFSLENBQVksQ0FBWixFQUFlbkYsU0FBZixDQUF5QnlELEtBQXpCLEVBQWdDQyxLQUFoQyxFQUF1QyxJQUF2QyxFQUE2QyxJQUE3QyxDQUFKLEVBQXdEO0FBQ3ZEZiwwQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBMkIscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGtDQUFaOztBQUNBLGtCQUFJakMsTUFBTSxLQUFLLENBQWYsRUFBa0I7QUFDakJnQyx1QkFBTyxDQUFDQyxHQUFSLENBQ0MseUNBREQsRUFEaUIsQ0FJakI7O0FBQ0F4Qiw0QkFBWSxDQUNYaUIsSUFBSSxDQUFDUyxtQkFBTCxHQUNDQyxRQURELEdBRUNWLElBQUksQ0FBQ1csV0FBTCxHQUFtQixDQUZwQixHQUdDWCxJQUFJLENBQUNvQixTQUpLLENBQVo7QUFNQW5DLDRCQUFZO0FBQ1pvQyxnQ0FBZ0IsQ0FBQztBQUNoQmhCLHlCQUFPLEVBQ047QUFGZSxpQkFBRCxDQUFoQjtBQUlBLGVBaEJELE1BZ0JPLElBQUkvQixNQUFNLEtBQUssQ0FBZixFQUFrQjtBQUN4QmdDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWixFQUR3QixDQUV4Qjs7QUFDQXhCLDRCQUFZLENBQ1hpQixJQUFJLENBQUNTLG1CQUFMLEdBQ0NDLFFBREQsR0FFQ1YsSUFBSSxDQUFDVyxXQUhLLENBQVo7QUFLQTFCLDRCQUFZO0FBQ1osZUFUTSxNQVNBLElBQUlYLE1BQU0sS0FBSyxDQUFmLEVBQWtCO0FBQ3hCZ0MsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaLEVBRHdCLENBRXhCOztBQUNBeEIsNEJBQVksQ0FDWGlCLElBQUksQ0FBQ1MsbUJBQUwsR0FDQ0MsUUFERCxHQUVDVixJQUFJLENBQUNXLFdBRk4sR0FHQ1gsSUFBSSxDQUFDc0IsWUFKSyxDQUFaO0FBTUFyQyw0QkFBWTtBQUNaLGVBVk0sTUFVQSxJQUFJWCxNQUFNLEtBQUssQ0FBZixFQUFrQjtBQUN4QmdDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWixFQUR3QixDQUV4Qjs7QUFDQXhCLDRCQUFZLENBQ1hpQixJQUFJLENBQUNTLG1CQUFMLEdBQ0NDLFFBREQsR0FFQ1YsSUFBSSxDQUFDVyxXQUZOLEdBR0NYLElBQUksQ0FBQ3VCLGFBSkssQ0FBWjtBQU1BdEMsNEJBQVk7QUFDWixlQVZNLE1BVUEsSUFBSVgsTUFBTSxLQUFLLENBQWYsRUFBa0I7QUFDeEJnQyx1QkFBTyxDQUFDQyxHQUFSLENBQ0MsZ0RBREQsRUFEd0IsQ0FJeEI7O0FBQ0F4Qiw0QkFBWTtBQUNaRSw0QkFBWTtBQUNaLGVBUE0sTUFPQSxJQUFJWCxNQUFNLEtBQUssQ0FBZixFQUFrQjtBQUN4QmdDLHVCQUFPLENBQUNDLEdBQVIsQ0FDQyxnREFERCxFQUR3QixDQUl4Qjs7QUFDQXhCLDRCQUFZO0FBQ1pFLDRCQUFZO0FBQ1osZUFQTSxNQU9BO0FBQ05xQix1QkFBTyxDQUFDQyxHQUFSLENBQ0MseURBREQ7QUFHQTtBQUNELGFBbkVELE1BbUVPO0FBQ05ELHFCQUFPLENBQUNDLEdBQVIsQ0FDQywrQ0FERDs7QUFHQSxrQkFBSS9CLFVBQUosRUFBZ0I7QUFDZjhCLHVCQUFPLENBQUNDLEdBQVIsQ0FDQyw4RkFERDs7QUFHQSxvQkFBSWpDLE1BQU0sS0FBSyxDQUFmLEVBQWtCO0FBQ2pCZ0MseUJBQU8sQ0FBQ0MsR0FBUixDQUNDLDJDQURELEVBRGlCLENBSWpCOztBQUVBLHNCQUFJbkMsTUFBTSxHQUFHNEIsSUFBSSxDQUFDd0IsS0FBbEIsRUFBeUI7QUFDeEJ6QyxnQ0FBWSxDQUNYaUIsSUFBSSxDQUFDUyxtQkFBTCxHQUNDQyxRQURELEdBRUN0QyxNQUFNLEdBQ0w0QixJQUFJLENBQUNTLG1CQUROLEdBRUMsQ0FMUyxDQUFaO0FBT0F4QixnQ0FBWTtBQUNaLG1CQVRELE1BU087QUFDTkYsZ0NBQVksQ0FDWGlCLElBQUksQ0FBQ1MsbUJBQUwsR0FDQ0MsUUFERCxHQUVDdEMsTUFBTSxHQUNMNEIsSUFBSSxDQUFDUyxtQkFETixHQUVDLENBTFMsQ0FBWjtBQU9BeEIsZ0NBQVksQ0FDWGIsTUFBTSxHQUFHNEIsSUFBSSxDQUFDeUIsaUJBQWQsR0FBa0MsQ0FEdkIsQ0FBWjtBQUdBO0FBQ0QsaUJBM0JELE1BMkJPLElBQUluRCxNQUFNLEtBQUssQ0FBZixFQUFrQjtBQUN4QmdDLHlCQUFPLENBQUNDLEdBQVIsQ0FDQyw0Q0FERCxFQUR3QixDQUl4Qjs7QUFDQSxzQkFBSW5DLE1BQU0sR0FBRzRCLElBQUksQ0FBQ3dCLEtBQWxCLEVBQXlCO0FBQ3hCbEIsMkJBQU8sQ0FBQ0MsR0FBUixvQkFBd0JQLElBQUksQ0FBQ3dCLEtBQTdCO0FBQ0F6QyxnQ0FBWSxDQUNYaUIsSUFBSSxDQUFDUyxtQkFBTCxHQUNDQyxRQURELEdBRUN0QyxNQUFNLEdBQ0w0QixJQUFJLENBQUNTLG1CQUROLEdBRUMsQ0FMUyxDQUFaO0FBT0F4QixnQ0FBWTtBQUNaLG1CQVZELE1BVU87QUFDTkYsZ0NBQVksQ0FDWGlCLElBQUksQ0FBQ1MsbUJBQUwsR0FDQ0MsUUFERCxHQUVDdEMsTUFBTSxHQUNMNEIsSUFBSSxDQUFDUyxtQkFETixHQUVDLENBTFMsQ0FBWjtBQU9BeEIsZ0NBQVksQ0FDWGIsTUFBTSxHQUFHNEIsSUFBSSxDQUFDeUIsaUJBQWQsR0FBa0MsQ0FEdkIsQ0FBWjtBQUdBO0FBQ0QsaUJBM0JNLE1BMkJBLElBQUluRCxNQUFNLEtBQUssQ0FBZixFQUFrQjtBQUN4QmdDLHlCQUFPLENBQUNDLEdBQVIsQ0FDQyw0Q0FERCxFQUR3QixDQUl4Qjs7QUFDQSxzQkFBSW5DLE1BQU0sR0FBRzRCLElBQUksQ0FBQ3dCLEtBQWxCLEVBQXlCO0FBQ3hCbEIsMkJBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7QUFDQXhCLGdDQUFZLENBQ1hpQixJQUFJLENBQUNTLG1CQUFMLEdBQ0NDLFFBREQsR0FFQ3RDLE1BQU0sR0FDTDRCLElBQUksQ0FBQ1MsbUJBRE4sR0FFQyxDQUxTLENBQVo7QUFPQXhCLGdDQUFZO0FBQ1osbUJBVkQsTUFVTztBQUNORixnQ0FBWSxDQUNYaUIsSUFBSSxDQUFDUyxtQkFBTCxHQUNDQyxRQURELEdBRUN0QyxNQUFNLEdBQ0w0QixJQUFJLENBQUNTLG1CQUROLEdBRUMsQ0FMUyxDQUFaO0FBT0F4QixnQ0FBWSxDQUNYYixNQUFNLEdBQUc0QixJQUFJLENBQUN5QixpQkFBZCxHQUFrQyxDQUR2QixDQUFaO0FBR0E7QUFDRCxpQkEzQk0sTUEyQkEsSUFBSW5ELE1BQU0sS0FBSyxDQUFmLEVBQWtCO0FBQ3hCZ0MseUJBQU8sQ0FBQ0MsR0FBUixDQUNDLDRDQURELEVBRHdCLENBSXhCOztBQUNBLHNCQUFJbkMsTUFBTSxHQUFHNEIsSUFBSSxDQUFDd0IsS0FBbEIsRUFBeUI7QUFDeEJ6QyxnQ0FBWSxDQUNYaUIsSUFBSSxDQUFDUyxtQkFBTCxHQUNDQyxRQURELEdBRUN0QyxNQUFNLEdBQ0w0QixJQUFJLENBQUNTLG1CQUROLEdBRUMsQ0FMUyxDQUFaO0FBT0F4QixnQ0FBWTtBQUNaLG1CQVRELE1BU087QUFDTkYsZ0NBQVksQ0FDWGlCLElBQUksQ0FBQ1MsbUJBQUwsR0FDQ0MsUUFERCxHQUVDdEMsTUFBTSxHQUNMNEIsSUFBSSxDQUFDUyxtQkFETixHQUVDLENBTFMsQ0FBWjtBQU9BeEIsZ0NBQVksQ0FDWGIsTUFBTSxHQUFHNEIsSUFBSSxDQUFDeUIsaUJBQWQsR0FBa0MsQ0FEdkIsQ0FBWjtBQUdBO0FBQ0QsaUJBMUJNLE1BMEJBLElBQUluRCxNQUFNLEtBQUssQ0FBZixFQUFrQjtBQUN4QmdDLHlCQUFPLENBQUNDLEdBQVIsQ0FDQyw0Q0FERCxFQUR3QixDQUl4Qjs7QUFDQSxzQkFBSW5DLE1BQU0sR0FBRzRCLElBQUksQ0FBQ3dCLEtBQWxCLEVBQXlCO0FBQ3hCekMsZ0NBQVksQ0FDWGlCLElBQUksQ0FBQ1MsbUJBQUwsR0FDQ0MsUUFERCxHQUVDdEMsTUFBTSxHQUNMNEIsSUFBSSxDQUFDUyxtQkFETixHQUVDLENBTFMsQ0FBWjtBQU9BLG1CQVJELE1BUU87QUFDTjFCLGdDQUFZLENBQ1hpQixJQUFJLENBQUNTLG1CQUFMLEdBQ0NDLFFBREQsR0FFQ3RDLE1BQU0sR0FDTDRCLElBQUksQ0FBQ1MsbUJBRE4sR0FFQyxDQUxTLENBQVo7QUFPQXhCLGdDQUFZLENBQ1hiLE1BQU0sR0FBRzRCLElBQUksQ0FBQ3lCLGlCQUFkLEdBQWtDLENBRHZCLENBQVo7QUFHQTtBQUNELGlCQXpCTSxNQXlCQSxJQUFJbkQsTUFBTSxLQUFLLENBQWYsRUFBa0I7QUFDeEJnQyx5QkFBTyxDQUFDQyxHQUFSLENBQ0MsNENBREQsRUFEd0IsQ0FJeEI7O0FBQ0Esc0JBQUluQyxNQUFNLEdBQUc0QixJQUFJLENBQUN3QixLQUFsQixFQUF5QjtBQUN4QnpDLGdDQUFZLENBQ1hpQixJQUFJLENBQUNTLG1CQUFMLEdBQ0NDLFFBREQsR0FFQ3RDLE1BQU0sR0FDTDRCLElBQUksQ0FBQ1MsbUJBRE4sR0FFQyxDQUxTLENBQVo7QUFPQSxtQkFSRCxNQVFPO0FBQ04xQixnQ0FBWSxDQUNYaUIsSUFBSSxDQUFDUyxtQkFBTCxHQUNDQyxRQURELEdBRUN0QyxNQUFNLEdBQ0w0QixJQUFJLENBQUNTLG1CQUROLEdBRUMsQ0FMUyxDQUFaO0FBT0F4QixnQ0FBWSxDQUNYYixNQUFNLEdBQUc0QixJQUFJLENBQUN5QixpQkFBZCxHQUFrQyxDQUR2QixDQUFaO0FBR0E7QUFDRCxpQkF6Qk0sTUF5QkE7QUFDTm5CLHlCQUFPLENBQUNDLEdBQVIsQ0FDQywyREFERDtBQUdBO0FBQ0QsZUF0S0QsTUFzS087QUFDTkQsdUJBQU8sQ0FBQ0MsR0FBUixDQUNDLDhFQURELEVBRE0sQ0FJTjs7QUFDQSxvQkFBSWpDLE1BQU0sS0FBSyxDQUFmLEVBQWtCO0FBQ2pCZ0MseUJBQU8sQ0FBQ0MsR0FBUixDQUNDLDJDQURELEVBRGlCLENBSWpCOztBQUVBLHNCQUFJbkMsTUFBTSxHQUFHNEIsSUFBSSxDQUFDd0IsS0FBbEIsRUFBeUI7QUFDeEJ6QyxnQ0FBWSxDQUNYaUIsSUFBSSxDQUFDUyxtQkFBTCxHQUNDQyxRQURELEdBRUN0QyxNQUFNLEdBQ0w0QixJQUFJLENBQUNTLG1CQUROLEdBRUMsQ0FMUyxDQUFaO0FBT0EsbUJBUkQsTUFRTztBQUNOMUIsZ0NBQVksQ0FDVixDQUFDaUIsSUFBSSxDQUFDUyxtQkFBTCxHQUNEQyxRQURDLEdBRURWLElBQUksQ0FBQ1csV0FGSixHQUdEWCxJQUFJLENBQUNZLFlBQUwsQ0FBa0JDLFdBSGpCLEdBSURiLElBQUksQ0FBQ1ksWUFBTCxDQUFrQkUsYUFKakIsR0FLRGQsSUFBSSxDQUFDUyxtQkFMSixHQU1EQyxRQU5BLElBT0EsQ0FQRCxHQVFDLENBUkQsR0FTQ1YsSUFBSSxDQUFDUyxtQkFUTixHQVVDQyxRQVhVLENBQVo7QUFhQXpCLGdDQUFZLENBQ1hiLE1BQU0sR0FBRzRCLElBQUksQ0FBQ3lCLGlCQUFkLEdBQWtDLENBRHZCLENBQVo7QUFHQTtBQUNELGlCQWhDRCxNQWdDTyxJQUFJbkQsTUFBTSxLQUFLLENBQWYsRUFBa0I7QUFDeEJnQyx5QkFBTyxDQUFDQyxHQUFSLENBQ0MsNENBREQsRUFEd0IsQ0FJeEI7O0FBQ0Esc0JBQUluQyxNQUFNLEdBQUc0QixJQUFJLENBQUN3QixLQUFsQixFQUF5QjtBQUN4QnpDLGdDQUFZLENBQ1hpQixJQUFJLENBQUNTLG1CQUFMLEdBQ0NDLFFBREQsR0FFQ3RDLE1BQU0sR0FDTDRCLElBQUksQ0FBQ1MsbUJBRE4sR0FFQyxDQUxTLENBQVo7QUFPQSxtQkFSRCxNQVFPO0FBQ04xQixnQ0FBWSxDQUNWLENBQUNpQixJQUFJLENBQUNTLG1CQUFMLEdBQ0RDLFFBREMsR0FFRFYsSUFBSSxDQUFDVyxXQUZKLEdBR0RYLElBQUksQ0FBQ1ksWUFBTCxDQUFrQkMsV0FIakIsR0FJRGIsSUFBSSxDQUFDWSxZQUFMLENBQWtCRSxhQUpqQixHQUtEZCxJQUFJLENBQUNTLG1CQUxKLEdBTURDLFFBTkEsSUFPQSxDQVBELEdBUUMsQ0FSRCxHQVNDVixJQUFJLENBQUNTLG1CQVROLEdBVUNDLFFBWFUsQ0FBWjtBQWFBekIsZ0NBQVksQ0FDWGIsTUFBTSxHQUFHNEIsSUFBSSxDQUFDeUIsaUJBQWQsR0FBa0MsQ0FEdkIsQ0FBWjtBQUdBO0FBQ0QsaUJBL0JNLE1BK0JBLElBQUluRCxNQUFNLEtBQUssQ0FBZixFQUFrQjtBQUN4QmdDLHlCQUFPLENBQUNDLEdBQVIsQ0FDQyw0Q0FERCxFQUR3QixDQUl4Qjs7QUFDQSxzQkFBSW5DLE1BQU0sR0FBRzRCLElBQUksQ0FBQ3dCLEtBQWxCLEVBQXlCO0FBQ3hCO0FBQ0F6QyxnQ0FBWSxDQUNYaUIsSUFBSSxDQUFDUyxtQkFBTCxHQUNDQyxRQURELEdBRUN0QyxNQUFNLEdBQ0w0QixJQUFJLENBQUNTLG1CQUROLEdBRUMsQ0FMUyxDQUFaO0FBT0EsbUJBVEQsTUFTTztBQUNOMUIsZ0NBQVksQ0FDVixDQUFDaUIsSUFBSSxDQUFDUyxtQkFBTCxHQUNEQyxRQURDLEdBRURWLElBQUksQ0FBQ1csV0FGSixHQUdEWCxJQUFJLENBQUNZLFlBQUwsQ0FBa0JDLFdBSGpCLEdBSURiLElBQUksQ0FBQ1ksWUFBTCxDQUFrQkUsYUFKakIsR0FLRGQsSUFBSSxDQUFDUyxtQkFMSixHQU1EQyxRQU5BLElBT0EsQ0FQRCxHQVFDLENBUkQsR0FTQ1YsSUFBSSxDQUFDUyxtQkFUTixHQVVDQyxRQVhVLENBQVo7QUFhQXpCLGdDQUFZLENBQ1hiLE1BQU0sR0FBRzRCLElBQUksQ0FBQ3lCLGlCQUFkLEdBQWtDLENBRHZCLENBQVo7QUFHQTtBQUNELGlCQWhDTSxNQWdDQSxJQUFJbkQsTUFBTSxLQUFLLENBQWYsRUFBa0I7QUFDeEJnQyx5QkFBTyxDQUFDQyxHQUFSLENBQ0MsNENBREQsRUFEd0IsQ0FJeEI7O0FBQ0Esc0JBQUluQyxNQUFNLEdBQUc0QixJQUFJLENBQUN3QixLQUFsQixFQUF5QjtBQUN4QnpDLGdDQUFZLENBQ1hpQixJQUFJLENBQUNTLG1CQUFMLEdBQ0NDLFFBREQsR0FFQ3RDLE1BQU0sR0FDTDRCLElBQUksQ0FBQ1MsbUJBRE4sR0FFQyxDQUxTLENBQVo7QUFPQSxtQkFSRCxNQVFPO0FBQ04xQixnQ0FBWSxDQUNWLENBQUNpQixJQUFJLENBQUNTLG1CQUFMLEdBQ0RDLFFBREMsR0FFRFYsSUFBSSxDQUFDVyxXQUZKLEdBR0RYLElBQUksQ0FBQ1ksWUFBTCxDQUFrQkMsV0FIakIsR0FJRGIsSUFBSSxDQUFDWSxZQUFMLENBQWtCRSxhQUpqQixHQUtEZCxJQUFJLENBQUNTLG1CQUxKLEdBTURDLFFBTkEsSUFPQSxDQVBELEdBUUMsQ0FSRCxHQVNDVixJQUFJLENBQUNTLG1CQVROLEdBVUNDLFFBWFUsQ0FBWjtBQWFBekIsZ0NBQVksQ0FDWGIsTUFBTSxHQUFHNEIsSUFBSSxDQUFDeUIsaUJBQWQsR0FBa0MsQ0FEdkIsQ0FBWjtBQUdBO0FBQ0QsaUJBL0JNLE1BK0JBLElBQUluRCxNQUFNLEtBQUssQ0FBZixFQUFrQjtBQUN4QmdDLHlCQUFPLENBQUNDLEdBQVIsQ0FDQyw0Q0FERCxFQUR3QixDQUl4Qjs7QUFDQSxzQkFBSW5DLE1BQU0sR0FBRzRCLElBQUksQ0FBQ3dCLEtBQWxCLEVBQXlCO0FBQ3hCekMsZ0NBQVksQ0FDWGlCLElBQUksQ0FBQ1MsbUJBQUwsR0FDQ0MsUUFERCxHQUVDdEMsTUFBTSxHQUNMNEIsSUFBSSxDQUFDUyxtQkFETixHQUVDLENBTFMsQ0FBWjtBQU9BLG1CQVJELE1BUU87QUFDTjFCLGdDQUFZLENBQ1YsQ0FBQ2lCLElBQUksQ0FBQ1MsbUJBQUwsR0FDREMsUUFEQyxHQUVEVixJQUFJLENBQUNXLFdBRkosR0FHRFgsSUFBSSxDQUFDWSxZQUFMLENBQWtCQyxXQUhqQixHQUlEYixJQUFJLENBQUNZLFlBQUwsQ0FBa0JFLGFBSmpCLEdBS0RkLElBQUksQ0FBQ1MsbUJBTEosR0FNREMsUUFOQSxJQU9BLENBUEQsR0FRQyxDQVJELEdBU0NWLElBQUksQ0FBQ1MsbUJBVE4sR0FVQ0MsUUFYVSxDQUFaO0FBYUF6QixnQ0FBWSxDQUNYYixNQUFNLEdBQUc0QixJQUFJLENBQUN5QixpQkFBZCxHQUFrQyxDQUR2QixDQUFaO0FBR0E7QUFDRCxpQkEvQk0sTUErQkEsSUFBSW5ELE1BQU0sS0FBSyxDQUFmLEVBQWtCO0FBQ3hCZ0MseUJBQU8sQ0FBQ0MsR0FBUixDQUNDLDRDQURELEVBRHdCLENBSXhCOztBQUNBLHNCQUFJbkMsTUFBTSxHQUFHNEIsSUFBSSxDQUFDd0IsS0FBbEIsRUFBeUI7QUFDeEJ6QyxnQ0FBWSxDQUNYaUIsSUFBSSxDQUFDUyxtQkFBTCxHQUNDQyxRQURELEdBRUN0QyxNQUFNLEdBQ0w0QixJQUFJLENBQUNTLG1CQUROLEdBRUMsQ0FMUyxDQUFaO0FBT0EsbUJBUkQsTUFRTztBQUNOMUIsZ0NBQVksQ0FDVixDQUFDaUIsSUFBSSxDQUFDUyxtQkFBTCxHQUNEQyxRQURDLEdBRURWLElBQUksQ0FBQ1csV0FGSixHQUdEWCxJQUFJLENBQUNZLFlBQUwsQ0FBa0JDLFdBSGpCLEdBSURiLElBQUksQ0FBQ1ksWUFBTCxDQUFrQkUsYUFKakIsR0FLRGQsSUFBSSxDQUFDUyxtQkFMSixHQU1EQyxRQU5BLElBT0EsQ0FQRCxHQVFDLENBUkQsR0FTQ1YsSUFBSSxDQUFDUyxtQkFUTixHQVVDQyxRQVhVLENBQVo7QUFhQXpCLGdDQUFZLENBQ1hiLE1BQU0sR0FBRzRCLElBQUksQ0FBQ3lCLGlCQUFkLEdBQWtDLENBRHZCLENBQVo7QUFHQTtBQUNEO0FBQ0Q7QUFDRDtBQUNELFdBbmJNLE1BbWJBO0FBQ05uQixtQkFBTyxDQUFDQyxHQUFSLENBQVksd0NBQVo7QUFDQUQsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0E7QUFDRDtBQUNEO0FBM2lCeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTRpQjFCLEdBNWlCRDs7QUE4aUJBLFNBQ0M7QUFBTSxZQUFRLEVBQUV0RCxZQUFZLENBQUNzQyxRQUFELENBQTVCO0FBQXdDLGFBQVMsRUFBRXJDLE9BQU8sQ0FBQ2QsSUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsNkRBQUQ7QUFBYSxhQUFTLEVBQUVjLE9BQU8sQ0FBQ1IsV0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsNERBQUQ7QUFDQyxVQUFNLE1BRFA7QUFFQyxNQUFFLEVBQUMsNENBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELEVBTUMsTUFBQywwREFBRDtBQUNDLFdBQU8sRUFBRUssT0FEVjtBQUVDLFFBQUksRUFBQyxXQUZOO0FBR0MsTUFBRSxFQUNELE1BQUMsd0RBQUQ7QUFBUSxRQUFFLEVBQUMsb0JBQVg7QUFBZ0Msa0JBQVksRUFBQyxFQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0VGLEtBQUssQ0FBQzZFLEdBQU4sQ0FBVSxVQUFDMUIsSUFBRDtBQUFBLGFBQ1YsTUFBQywwREFBRDtBQUFVLGFBQUssRUFBRUEsSUFBSSxDQUFDQyxJQUF0QjtBQUE0QixXQUFHLEVBQUVELElBQUksQ0FBQ0MsSUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFRCxJQUFJLENBQUMyQixHQURQLENBRFU7QUFBQSxLQUFWLENBREYsQ0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkQsQ0FERCxFQXFCQyxNQUFDLDZEQUFEO0FBQWEsYUFBUyxFQUFFekUsT0FBTyxDQUFDUixXQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyw0RUFBRDtBQUF5QixTQUFLLEVBQUVrRix5REFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsdUVBQUQ7QUFDQyxZQUFRLEVBQUU1RSxRQURYO0FBRUMsVUFBTSxFQUFDLFFBRlI7QUFHQyxNQUFFLEVBQUMsb0JBSEo7QUFJQyxRQUFJLEVBQUMsV0FKTjtBQUtDLFNBQUssRUFBQyxrQkFMUDtBQU1DLFVBQU0sRUFBQyxZQU5SO0FBT0MsZ0JBQVksRUFBQyxFQVBkO0FBUUMsU0FBSyxFQUFFTSxpQkFSUjtBQVNDLFlBQVEsRUFBRThCLHFCQVRYO0FBVUMsdUJBQW1CLEVBQUU7QUFDcEIsb0JBQWM7QUFETSxLQVZ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFlQyxNQUFDLHVFQUFEO0FBQ0MsWUFBUSxFQUFFcEMsUUFEWCxDQUVDO0FBRkQ7QUFHQyxRQUFJLEVBQUMsU0FITjtBQUlDLFVBQU0sRUFBQyxZQUpSO0FBS0MsVUFBTSxFQUFDLFFBTFI7QUFNQyxnQkFBWSxFQUFDLFlBTmQ7QUFPQyxNQUFFLEVBQUMsb0JBUEo7QUFRQyxTQUFLLEVBQUMsYUFSUDtBQVNDLFNBQUssRUFBRVEsZUFUUjtBQVVDLFlBQVEsRUFBRThCLG1CQVZYO0FBV0MsdUJBQW1CLEVBQUU7QUFDcEIsb0JBQWM7QUFETSxLQVh0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkQsQ0FERCxDQXJCRCxFQXNEQyxNQUFDLDJEQUFEO0FBQ0MsYUFBUyxFQUFFcEMsT0FBTyxDQUFDUCxTQURwQjtBQUVDLFlBQVEsRUFBRUssUUFGWDtBQUdDLFFBQUksRUFBQyxRQUhOO0FBSUMsUUFBSSxFQUFDLFFBSk47QUFLQyxnQkFBWSxFQUFDLElBTGQ7QUFNQyxNQUFFLEVBQUMsaUJBTko7QUFPQyxTQUFLLEVBQUMsOEJBUFA7QUFRQyxtQkFBZSxFQUFFO0FBQ2hCNkUsWUFBTSxFQUFFO0FBRFEsS0FSbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRERCxFQWtFQyxNQUFDLDJEQUFEO0FBQ0MsYUFBUyxFQUFFM0UsT0FBTyxDQUFDUCxTQURwQjtBQUVDLFlBQVEsRUFBRUssUUFGWDtBQUdDLFFBQUksRUFBQyxPQUhOO0FBSUMsUUFBSSxFQUFDLFFBSk47QUFLQyxnQkFBWSxFQUFDLEdBTGQ7QUFNQyxNQUFFLEVBQUMsaUJBTko7QUFPQyxTQUFLLEVBQUMsMEJBUFA7QUFRQyxtQkFBZSxFQUFFO0FBQ2hCNkUsWUFBTSxFQUFFO0FBRFEsS0FSbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxFRCxFQThFQyxNQUFDLDJEQUFEO0FBQ0MsYUFBUyxFQUFFM0UsT0FBTyxDQUFDUCxTQURwQjtBQUVDLFlBQVEsRUFBRUssUUFGWDtBQUdDLFFBQUksRUFBQyxTQUhOO0FBSUMsUUFBSSxFQUFDLFFBSk47QUFLQyxnQkFBWSxFQUFDLEdBTGQ7QUFNQyxNQUFFLEVBQUMsaUJBTko7QUFPQyxTQUFLLEVBQUMsMkJBUFA7QUFRQyxtQkFBZSxFQUFFO0FBQ2hCNkUsWUFBTSxFQUFFO0FBRFEsS0FSbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlFRCxFQTBGQyxNQUFDLHdEQUFEO0FBQ0MsUUFBSSxFQUFDLFFBRE47QUFFQyxXQUFPLEVBQUMsV0FGVDtBQUdDLFNBQUssRUFBQyxTQUhQO0FBSUMsYUFBUyxFQUFFM0UsT0FBTyxDQUFDVCxNQUpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQTFGRCxFQWlHRXlDLFVBQVUsSUFDVixtRUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VOLFFBQVEsSUFDUixrREFGRixDQURELEVBS0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDY2xCLFNBRGQsVUFDNkJFLE9BRDdCLHNCQUNtRCxHQURuRCxFQUVFRSxTQUZGLFlBRW1CTSxNQUZuQixzQkFFMkNGLEtBRjNDLGtCQUdLRixPQUhMLGFBTEQsRUFVQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNXTSxNQURYLGlCQUMyQixHQUQzQixFQUVFRSxVQUFVLEdBQ1Isd0JBRFEsR0FFUixlQUpKLEVBSXFCLEdBSnJCLFNBS0tFLFNBQVMsR0FBRyxhQUFILEdBQW1CLGdCQUxqQyxDQVZELEVBaUJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQXNCSSxTQUF0QixDQWpCRCxFQWtCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQUE2QkUsU0FBN0IsQ0FsQkQsQ0FsR0YsQ0FERDtBQTBIQSxDQXBzQkQ7O0dBQU1wQyxlO1VBQ3VDRSx1RCxFQUM1QmIsUzs7O0tBRlhXLGU7QUFzc0JTQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90YXJpZnMuNmJkMjViNjQ0MmU4YmU0N2EzZjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRlRm5zVXRpbHMgZnJvbSAnQGRhdGUtaW8vZGF0ZS1mbnMnO1xyXG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IGlzQmV0d2VlbiBmcm9tICdkYXlqcy9wbHVnaW4vaXNCZXR3ZWVuJztcclxuZGF5anMuZXh0ZW5kKGlzQmV0d2Vlbik7XHJcbmltcG9ydCB7XHJcblx0QnV0dG9uLFxyXG5cdEZvcm1Db250cm9sLFxyXG5cdElucHV0TGFiZWwsXHJcblx0TWVudUl0ZW0sXHJcblx0U2VsZWN0LFxyXG5cdFRleHRGaWVsZCxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge1xyXG5cdE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLFxyXG5cdEtleWJvYXJkVGltZVBpY2tlcixcclxuXHRLZXlib2FyZERhdGVQaWNrZXIsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL3BpY2tlcnMnO1xyXG5pbXBvcnQge1xyXG5cdGdldENhbGVuZGFyLFxyXG5cdGdldENhbGVuZGFyQnlJZCxcclxuXHRnZXREZWphTG91ZSxcclxuXHRnZXRWYWNhbmNlcyxcclxufSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2NhbGVuZGFyQWN0aW9ucyc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdGZvcm06IHtcclxuXHRcdHdpZHRoOiAnNzAlJyxcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygyKSxcclxuXHR9LFxyXG5cdHJvb3Q6IHtcclxuXHRcdHdpZHRoOiAnODAlJyxcclxuXHR9LFxyXG5cdGJ1dHRvbjoge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdFx0d2lkdGg6ICc4MCUnLFxyXG5cdH0sXHJcblx0Zm9ybUNvbnRyb2w6IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdHdpZHRoOiAnODAlJyxcclxuXHR9LFxyXG5cdHRleHRGaWVsZDoge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0d2lkdGg6ICc4MCUnLFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEZvcm1DYWxjdWxUYXJpZiA9ICh7IGdpdGVzIH0pID0+IHtcclxuXHRjb25zdCB7IGNvbnRyb2wsIHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm0oKTtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblx0Y29uc3QgW3NlbGVjdGVkRGF0ZURlYnV0LCBzZXRTZWxlY3RlZERhdGVEZWJ1dF0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtzZWxlY3RlZERhdGVGaW4sIHNldFNlbGVjdGVkRGF0ZUZpbl0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtkYXRlRGVidXQsIHNldERhdGVEZWJ1dF0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtkYXRlRmluLCBzZXREYXRlRmluXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW2dpdGVTZWxlYywgc2V0R2l0ZVNlbGVjXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW25iQ2hpZW4sIHNldE5iQ2hpZW5dID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdCBbbmJFbmYsIHNldE5iRW5mXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW25iUGVycywgc2V0TmJQZXJzXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW251aXRlZSwgc2V0TnVpdGVlXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW2lzVmFjYW5jZXMsIHNldElzVmFjYW5jZXNdID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdCBbaXNXZWVrRW5kLCBzZXRJc1dlZWtFbmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtkZWphTG91ZSwgc2V0RGVqYUxvdWVdID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdCBbcHJpeFRvdGFsLCBzZXRQcml4VG90YWxdID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdCBbcHJpeFN1cHBsLCBzZXRQcml4U3VwcGxdID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdCBbaXNTdWJtaXRlZCwgc2V0SXNTdWJtaXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZURhdGVDaGFuZ2VEZWJ1dCA9IChkYXRlKSA9PiB7XHJcblx0XHRzZXRTZWxlY3RlZERhdGVEZWJ1dChkYXRlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVEYXRlQ2hhbmdlRmluID0gKGRhdGUpID0+IHtcclxuXHRcdHNldFNlbGVjdGVkRGF0ZUZpbihkYXRlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBvblN1Ym1pdCA9IChkYXRhKSA9PiB7XHJcblx0XHRzZXRJc1N1Ym1pdGVkKHRydWUpO1xyXG5cdFx0Y29uc3QgeyBkYXRlRGVidXQsIGRhdGVGaW4sIGdpdGVTZWxlYywgbmJDaGllbiwgbmJFbmYsIG5iUGVycyB9ID0gZGF0YTtcclxuXHRcdGNvbnN0IGRhdGVEID0gZGF5anMoZGF0ZURlYnV0KTtcclxuXHRcdGNvbnN0IGRhdGVGID0gZGF5anMoZGF0ZUZpbik7XHJcblx0XHRnZXRWYWNhbmNlcyhkYXRlRCwgZGF0ZUYpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZygncmVzdWx0IHZhdXQnLCByZXN1bHQpO1xyXG5cdFx0XHRzZXRJc1ZhY2FuY2VzKHJlc3VsdC52YWNhbmNlcyk7XHJcblx0XHRcdC8vIHJldHVybiByZXN1bHQudmFjYW5jZXM7XHJcblx0XHR9KTtcclxuXHJcblx0XHRjb25zdCBudWl0ZWUgPSBkYXRlRi5kaWZmKGRhdGVELCAnZGF5Jyk7XHJcblx0XHRzZXREYXRlRGVidXQoZGF0ZURlYnV0KTtcclxuXHRcdHNldERhdGVGaW4oZGF0ZUZpbik7XHJcblx0XHRzZXROdWl0ZWUobnVpdGVlKTtcclxuXHRcdHNldEdpdGVTZWxlYyhnaXRlU2VsZWMpO1xyXG5cdFx0c2V0TmJDaGllbihuYkNoaWVuKTtcclxuXHRcdHNldE5iRW5mKG5iRW5mKTtcclxuXHRcdHNldE5iUGVycyhuYlBlcnMpO1xyXG5cclxuXHRcdGZvciAoY29uc3QgZ2l0ZSBvZiBnaXRlcykge1xyXG5cdFx0XHRpZiAoZ2l0ZS5zbHVnID09PSBnaXRlU2VsZWMpIHtcclxuXHRcdFx0XHRnZXREZWphTG91ZShnaXRlLmNhbGVuZGFySWQsIGRhdGVELCBkYXRlRikudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzdWx0LmxvdWUpIHtcclxuXHRcdFx0XHRcdFx0c2V0RGVqYUxvdWUoe1xyXG5cdFx0XHRcdFx0XHRcdG1lc3NhZ2U6XHJcblx0XHRcdFx0XHRcdFx0XHQnSWwgc2VtYmxlIHF1ZSBjZSBnw650ZSBzb2l0IGTDqWrDoCBsb3XDqSBhdXggZGF0ZXMgaW5kaXF1w6llcycsXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0c2V0RGVqYUxvdWUoe1xyXG5cdFx0XHRcdFx0XHRcdG1lc3NhZ2U6XHJcblx0XHRcdFx0XHRcdFx0XHRcIkNlIGfDrnRlIHNlbWJsZSBsaWJyZSBwb3VyIGxlIG1vbWVudCwgbidow6lzaXRleiBwYXMgw6AgZmFpcmUgdW5lIGRlbWFuZGUgZGUgbG9jYXRpb25cIixcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ly8gT24gcsOpY3Vww6hyZSBsZSBnw650ZSBzZWxlY3Rpb25uw6lcclxuXHRcdFx0XHRpZiAobnVpdGVlID09PSA3IHx8IG51aXRlZSA9PT0gMTQgfHwgbnVpdGVlID09PSAyMSkge1xyXG5cdFx0XHRcdFx0aWYgKGlzVmFjYW5jZXMpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyBnw6luw6lyYWwgOiBvbiBlc3QgZW4gdmFuY2FuY2VzJyk7XHJcblx0XHRcdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdFx0XHRkYXlqcyhkYXRlRCkuaXNCZXR3ZWVuKFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGF5anMoKS5tb250aCg2KSxcclxuXHRcdFx0XHRcdFx0XHRcdGRheWpzKCkubW9udGgoNyksXHJcblx0XHRcdFx0XHRcdFx0XHRudWxsLFxyXG5cdFx0XHRcdFx0XHRcdFx0J1tdJ1xyXG5cdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ29uIGVzdCBlbiBoYXV0ZSBzYWlzb24gw6AgbGEgc2VtYWluZScpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmhhdXRlU2Fpc29uXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChcclxuXHRcdFx0XHRcdFx0XHRkYXlqcygpXHJcblx0XHRcdFx0XHRcdFx0XHQuZGF5T2ZZZWFyKDM1OClcclxuXHRcdFx0XHRcdFx0XHRcdC5pc0JldHdlZW4oZGF0ZUQsIGRhdGVGLCBudWxsLCAnW10nKVxyXG5cdFx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnb24gZXN0IMOgIG5vZWwgw6AgbGEgc2VtYWluZScpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmhhdXRlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubm9lbFxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdFx0XHRcdFx0ZGF5anMoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmRheU9mWWVhcigzNjUpXHJcblx0XHRcdFx0XHRcdFx0XHQuaXNCZXR3ZWVuKGRhdGVELCBkYXRlRiwgbnVsbCwgJ1tdJylcclxuXHRcdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ29uIGVzdCBhdSBub3V2ZWwgYW4gw6AgbGEgc2VtYWluZScpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmhhdXRlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubm9lbCArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm5vdXZlbEFuXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdCdPbiBlc3QgZGFucyBsZSBjYXMgNyBudWl0w6llcyBlbiB2YWNhbmNlcyBzY29sYWlyZXMgbW95ZW5uZSBzYWlzb24nXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvblxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdDYXMgNyBudWl0w6llcyBob3JzIHZhY2FuY2VzJyk7XHJcblx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgK1xyXG5cdFx0XHRcdFx0XHRcdFx0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvblxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA8IDcpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdDYXMgZ8OpbsOpcmFsIDogbnVpdMOpZXMgaW5mw6lyaWV1cmUgw6AgNycpO1xyXG5cdFx0XHRcdFx0aWYgKGRheWpzKCkuZGF5KDYpLmlzQmV0d2VlbihkYXRlRCwgZGF0ZUYsIG51bGwsICdbXScpKSB7XHJcblx0XHRcdFx0XHRcdHNldElzV2Vla0VuZCh0cnVlKTtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyBlbiB3ZWVrLWVuZCBtb2lucyBkZSA3IG51aXRzJyk7XHJcblx0XHRcdFx0XHRcdGlmIChudWl0ZWUgPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdCdDYXMgd2Vlay1lbmQgMSBudWl0ICsgbXNnIGF2ZXJ0aXNzZW1lbnQnXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSAvIDIgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnVuZU51aXRlZVxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0QXZlcnRpc3NlbWVudCh7XHJcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnRW4gd2VlayBlbmQgbm91cyBsb3VvbnMgMiBudWl0w6llcywgKHRyw6hzIGV4Y2VwdGlvbm5lbGVtZW50IDEgc2V1bGUpJyxcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDIpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ2FzIHdlZWstZW5kIDIgbnVpdHMnKTtcclxuXHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZVxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSAzKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyB3ZWVrLWVuZCAzIG51aXRzJyk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRyb2lzTnVpdGVlc1xyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA0KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyB3ZWVrLWVuZCA0IG51aXRzJyk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnF1YXRyZU51aXRlZXNcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gNSkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0J0NhcyB3ZWVrLWVuZCA1IG51aXRzIC0gUXVlbCB0YXJpZiA/IFZvaXIgTWFtYW4nXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbCgpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gNikge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0J0NhcyB3ZWVrLWVuZCA2IG51aXRzIC0gUXVlbCB0YXJpZiA/IFZvaXIgTWFtYW4nXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbCgpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0J0F1dHJlcyBjYXMgd2Vlay1lbmQgaW5mw6lyaWV1ciDDoCA3IG51aXRzIC0gSW5wb3NzaWJsZS4uLidcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHQnQ2FzIGfDqW7DqXJhbCA6IG1vaW5zIGRlIDcgbnVpdHMgZXQgc2FucyBzYW1lZGknXHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdGlmIChpc1ZhY2FuY2VzKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHQnQ2FzIGfDqW7DqXJhbCA6IGhvcnMgV0UgbW9pbnMgZGUgNyBudWl0cyBtYWlzIGVuIHZhY2FuY2VzIC0gVGFyaWYgc2FucyB0ZW5pciBjb21wdGUgZHUgcGxhZm9uZCdcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChudWl0ZWUgPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgMSBudWl0IG1haXMgZW4gdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDFcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDFcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiAxXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgMiBudWl0cyBtYWlzIGVuIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgTW9pbnMgZGUgJHtnaXRlLm5QZXJzfSBwZXJzYCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDJcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gMykge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCAzIG51aXRzIG1haXMgZW4gdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdpY2knKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQzXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQzXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogM1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDQgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ0XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ0XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogNFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA1KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDUgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ1XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDVcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiA1XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDYpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgNiBudWl0cyBtYWlzIGVuIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDZcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDZcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdBdXRyZXMgY2FzIHdlZWstZW5kIGluZsOpcmlldXIgw6AgNyBudWl0cyAtIFBldSBwcm9iYWJsZS4uLidcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0J0NhcyBnw6luw6lyYWwgOiBob3JzIFdFIG1vaW5zIGRlIDcgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcyAtIFRhcmlmIGF2ZWMgcGxhZm9uZCdcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0aWYgKG51aXRlZSA9PT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCAxIG51aXQgZXQgaG9ycyB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCgoZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbiAtXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZnRNZW5hZ2UpIC9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcpICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDEgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZ0TWVuYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogMVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSAyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDIgbnVpdHMgZXQgaG9ycyB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQyXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KChnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uIC1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmdE1lbmFnZSkgL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NykgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0MiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZnRNZW5hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiAyXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgMyBudWl0cyBldCBob3JzIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnaWNpJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0M1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCgoZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbiAtXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZnRNZW5hZ2UpIC9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcpICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDMgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZ0TWVuYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogM1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDQgbnVpdHMgZXQgaG9ycyB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ0XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KChnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uIC1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmdE1lbmFnZSkgL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NykgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NCArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZnRNZW5hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiA0XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgNSBudWl0cyBldCBob3JzIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDVcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm1veWVubmVTYWlzb24gLVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZ0TWVuYWdlKSAvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ3KSAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ1ICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmdE1lbmFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDVcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gNikge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCA2IG51aXRzIGV0IGhvcnMgdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCgoZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbiAtXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZnRNZW5hZ2UpIC9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcpICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDYgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZ0TWVuYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogNlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnQXV0cmVzIGNhcyBudWl0ID4gNyBldCAhPT0gZGUgMTQgZXQgMjEnKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdHw6lyZXIgY2FzID4zMCBpY2knKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cclxuXHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0PElucHV0TGFiZWxcclxuXHRcdFx0XHRcdHNocmlua1xyXG5cdFx0XHRcdFx0aWQ9J2RlbW8tc2ltcGxlLXNlbGVjdC1wbGFjZWhvbGRlci1sYWJlbC1sYWJlbCc+XHJcblx0XHRcdFx0XHRHaXRlXHJcblx0XHRcdFx0PC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0bmFtZT0nZ2l0ZVNlbGVjJ1xyXG5cdFx0XHRcdFx0YXM9e1xyXG5cdFx0XHRcdFx0XHQ8U2VsZWN0IGlkPSdkZWNsZW5jaGV1ci1zZWxlY3QnIGRlZmF1bHRWYWx1ZT0nJz5cclxuXHRcdFx0XHRcdFx0XHR7Z2l0ZXMubWFwKChnaXRlKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9e2dpdGUuc2x1Z30ga2V5PXtnaXRlLnNsdWd9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Z2l0ZS5ub219XHJcblx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHQ8L1NlbGVjdD5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHQ8TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIgdXRpbHM9e0RhdGVGbnNVdGlsc30+XHJcblx0XHRcdFx0XHQ8S2V5Ym9hcmREYXRlUGlja2VyXHJcblx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0bWFyZ2luPSdub3JtYWwnXHJcblx0XHRcdFx0XHRcdGlkPSdkYXRlLXBpY2tlci1kaWFsb2cnXHJcblx0XHRcdFx0XHRcdG5hbWU9J2RhdGVEZWJ1dCdcclxuXHRcdFx0XHRcdFx0bGFiZWw9J0RhdGUgZGUgZMOpYnV0J1xyXG5cdFx0XHRcdFx0XHRmb3JtYXQ9J01NL2RkL3l5eXknXHJcblx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT0nJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17c2VsZWN0ZWREYXRlRGVidXR9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVEYXRlQ2hhbmdlRGVidXR9XHJcblx0XHRcdFx0XHRcdEtleWJvYXJkQnV0dG9uUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6ICdjaGFuZ2UgZGF0ZScsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PEtleWJvYXJkRGF0ZVBpY2tlclxyXG5cdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdC8vIGRpc2FibGVUb29sYmFyXHJcblx0XHRcdFx0XHRcdG5hbWU9J2RhdGVGaW4nXHJcblx0XHRcdFx0XHRcdGZvcm1hdD0nTU0vZGQveXl5eSdcclxuXHRcdFx0XHRcdFx0bWFyZ2luPSdub3JtYWwnXHJcblx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT0nMDIvMjUvMjAyMSdcclxuXHRcdFx0XHRcdFx0aWQ9J2RhdGUtcGlja2VyLWlubGluZSdcclxuXHRcdFx0XHRcdFx0bGFiZWw9J0RhdGUgZGUgZmluJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17c2VsZWN0ZWREYXRlRmlufVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlRGF0ZUNoYW5nZUZpbn1cclxuXHRcdFx0XHRcdFx0S2V5Ym9hcmRCdXR0b25Qcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRcdCdhcmlhLWxhYmVsJzogJ2NoYW5nZSBkYXRlJyxcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9NdWlQaWNrZXJzVXRpbHNQcm92aWRlcj5cclxuXHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdG5hbWU9J25iUGVycydcclxuXHRcdFx0XHR0eXBlPSdudW1iZXInXHJcblx0XHRcdFx0ZGVmYXVsdFZhbHVlPScxMCdcclxuXHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdGxhYmVsPSdOb21icmUgZGUgcGVyc29ubmVzIGF1IHRvdGFsJ1xyXG5cdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRuYW1lPSduYkVuZidcclxuXHRcdFx0XHR0eXBlPSdudW1iZXInXHJcblx0XHRcdFx0ZGVmYXVsdFZhbHVlPScyJ1xyXG5cdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0bGFiZWw9XCJOb21icmUgZCdlbmZhbnRzIC0xOCBhbnNcIlxyXG5cdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRuYW1lPSduYkNoaWVuJ1xyXG5cdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRkZWZhdWx0VmFsdWU9JzAnXHJcblx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRsYWJlbD0nQ2hpZW5zICgz4oKsL2ovYW5pbWFsKSdcclxuXHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0dHlwZT0nc3VibWl0J1xyXG5cdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRjb2xvcj0ncHJpbWFyeSdcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRDYWxjdWxlciBsZSB0YXJpZlxyXG5cdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0e2lzU3VibWl0ZWQgJiYgKFxyXG5cdFx0XHRcdDw+XHJcblx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0e2RlamFMb3VlICYmXHJcblx0XHRcdFx0XHRcdFx0J0lsIHNlbWJsZSBxdWUgY2UgZ8OudGUgc29pdCBkw6lqw6AgbG91w6kgw6AgY2VzIGRhdGVzJ31cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRMb2NhdGlvbiBkdSB7ZGF0ZURlYnV0fSBhdSB7ZGF0ZUZpbn0gcG91ciBsZSBnw650ZXsnICd9XHJcblx0XHRcdFx0XHRcdHtnaXRlU2VsZWN9IHBvdXIge25iUGVyc30gcGVyc29ubmVzIGRvbnQge25iRW5mfSBlbmZhbnRzXHJcblx0XHRcdFx0XHRcdGV0IHtuYkNoaWVufSBhbmltYXV4XHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0VG90YWwgZGUge251aXRlZX0gbnVpdMOpZXN7JyAnfVxyXG5cdFx0XHRcdFx0XHR7aXNWYWNhbmNlc1xyXG5cdFx0XHRcdFx0XHRcdD8gJ2VuIHDDqXJpb2RlIGRlIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdDogJ2hvcnMgdmFjYW5jZXMnfXsnICd9XHJcblx0XHRcdFx0XHRcdGV0IHtpc1dlZWtFbmQgPyAnZW4gd2Vlay1lbmQnIDogJyBob3JzIHdlZWstZW5kJ31cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDxwPk1vbnRhbnQgZGUgYmFzZSA6IHtwcml4VG90YWx9PC9wPlxyXG5cdFx0XHRcdFx0PHA+TW9udGFudCBzdXBwbMOpbWVudGFpcmUgOiB7cHJpeFN1cHBsfTwvcD5cclxuXHRcdFx0XHQ8Lz5cclxuXHRcdFx0KX1cclxuXHRcdDwvZm9ybT5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUNhbGN1bFRhcmlmO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9