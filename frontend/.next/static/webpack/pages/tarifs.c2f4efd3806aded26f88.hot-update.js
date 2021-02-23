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
      values = _useState3[0],
      setValues = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      dateDebut = _useState4[0],
      setDateDebut = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      dateFin = _useState5[0],
      setDateFin = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      giteSelec = _useState6[0],
      setGiteSelec = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      nbChien = _useState7[0],
      setNbChien = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      nbEnf = _useState8[0],
      setNbEnf = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      nbPers = _useState9[0],
      setNbPers = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      nuitee = _useState10[0],
      setNuitee = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      isVacances = _useState11[0],
      setIsVacances = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isWeekEnd = _useState12[0],
      setIsWeekEnd = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      dejaLoue = _useState13[0],
      setDejaLoue = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      prixTotal = _useState14[0],
      setPrixTotal = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      prixSuppl = _useState15[0],
      setPrixSuppl = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isSubmited = _useState16[0],
      setIsSubmited = _useState16[1];

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
                setPrixTotal(gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison + gite.coefficients.hauteSaison);
                setPrixSuppl();
              } else if (dayjs__WEBPACK_IMPORTED_MODULE_3___default()().dayOfYear(358).isBetween(dateD, dateF, null, '[]')) {
                console.log('on est à noel à la semaine');
                setPrixTotal(gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison + gite.coefficients.hauteSaison + gite.coefficients.noel);
                setPrixSuppl();
              } else if (dayjs__WEBPACK_IMPORTED_MODULE_3___default()().dayOfYear(365).isBetween(dateD, dateF, null, '[]')) {
                console.log('on est au nouvel an à la semaine');
                setPrixTotal(gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison + gite.coefficients.hauteSaison + gite.coefficients.noel + gite.coefficients.nouvelAn);
                setPrixSuppl();
              } else {
                console.log('On est dans le cas 7 nuitées en vacances scolaires moyenne saison'); //

                setPrixTotal(gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison);
                setPrixSuppl();
              }
            } else {
              console.log('Cas 7 nuitées hors vacances'); //

              setPrixTotal(gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison);
              setPrixSuppl();
            }
          } else if (nuitee < 7) {
            console.log('Cas général : nuitées inférieure à 7');

            if (dayjs__WEBPACK_IMPORTED_MODULE_3___default()().day(6).isBetween(dateD, dateF, null, '[]')) {
              setIsWeekEnd(true);
              console.log('Cas en week-end moins de 7 nuits');

              if (nuitee === 1) {
                console.log('Cas week-end 1 nuit + msg avertissement'); //

                setPrixTotal(gite.tarifParPersParNuitftMenage + gite.tarifDeBase / 2 + gite.uneNuitee);
                setPrixSuppl();
                setAvertissement({
                  message: 'En week end nous louons 2 nuitées, (très exceptionnelement 1 seule)'
                });
              } else if (nuitee === 2) {
                console.log('Cas week-end 2 nuits'); //

                setPrixTotal(gite.tarifParPersParNuitftMenage + gite.tarifDeBase);
                setPrixSuppl();
              } else if (nuitee === 3) {
                console.log('Cas week-end 3 nuits'); //

                setPrixTotal(gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.troisNuitees);
                setPrixSuppl();
              } else if (nuitee === 4) {
                console.log('Cas week-end 4 nuits'); //

                setPrixTotal(gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.quatreNuitees);
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
                    setPrixTotal(gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 1);
                    setPrixSuppl();
                  } else {
                    setPrixTotal(gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 1);
                    setPrixSuppl(nbPers * gite.supplementParPers * 1);
                  }
                } else if (nuitee === 2) {
                  console.log('Cas hors week-end 2 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    console.log("Moins de ".concat(gite.nPers, " pers"));
                    setPrixTotal(gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 2);
                    setPrixSuppl();
                  } else {
                    setPrixTotal(gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 2);
                    setPrixSuppl(nbPers * gite.supplementParPers * 2);
                  }
                } else if (nuitee === 3) {
                  console.log('Cas hors week-end 3 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal(gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 3);
                    setPrixSuppl();
                  } else {
                    setPrixTotal(gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 3);
                    setPrixSuppl(nbPers * gite.supplementParPers * 3);
                  }
                } else if (nuitee === 4) {
                  console.log('Cas hors week-end 4 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal(gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 4);
                    setPrixSuppl();
                  } else {
                    setPrixTotal(gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 4);
                    setPrixSuppl(nbPers * gite.supplementParPers * 4);
                  }
                } else if (nuitee === 5) {
                  console.log('Cas hors week-end 5 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal(gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 5);
                  } else {
                    setPrixTotal(gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 5);
                    setPrixSuppl(nbPers * gite.supplementParPers * 5);
                  }
                } else if (nuitee === 6) {
                  console.log('Cas hors week-end 6 nuits mais en vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal(gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 6);
                  } else {
                    setPrixTotal(gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 6);
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
                    setPrixTotal(gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 1);
                  } else {
                    setPrixTotal((gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuitftMenage) / 7 * 1 + gite.tarifParPersParNuitftMenage);
                    setPrixSuppl(nbPers * gite.supplementParPers * 1);
                  }
                } else if (nuitee === 2) {
                  console.log('Cas hors week-end 2 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal(gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 2);
                  } else {
                    setPrixTotal((gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuitftMenage) / 7 * 2 + gite.tarifParPersParNuitftMenage);
                    setPrixSuppl(nbPers * gite.supplementParPers * 2);
                  }
                } else if (nuitee === 3) {
                  console.log('Cas hors week-end 3 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal(gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 3);
                  } else {
                    setPrixTotal((gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuitftMenage) / 7 * 3 + gite.tarifParPersParNuitftMenage);
                    setPrixSuppl(nbPers * gite.supplementParPers * 3);
                  }
                } else if (nuitee === 4) {
                  console.log('Cas hors week-end 4 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal(gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 4);
                  } else {
                    setPrixTotal((gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuitftMenage) / 7 * 4 + gite.tarifParPersParNuitftMenage);
                    setPrixSuppl(nbPers * gite.supplementParPers * 4);
                  }
                } else if (nuitee === 5) {
                  console.log('Cas hors week-end 5 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal(gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 5);
                  } else {
                    setPrixTotal((gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuitftMenage) / 7 * 5 + gite.tarifParPersParNuitftMenage);
                    setPrixSuppl(nbPers * gite.supplementParPers * 5);
                  }
                } else if (nuitee === 6) {
                  console.log('Cas hors week-end 6 nuits et hors vacances'); //

                  if (nbPers < gite.nPers) {
                    setPrixTotal(gite.tarifParPersParNuitftMenage + nbPers * gite.tarifParPersParNuit * 6);
                  } else {
                    setPrixTotal((gite.tarifParPersParNuitftMenage + gite.tarifDeBase + gite.coefficients.basseSaison + gite.coefficients.moyenneSaison - gite.tarifParPersParNuitftMenage) / 7 * 6 + gite.tarifParPersParNuitftMenage);
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

    console.log(values);
    console.log("Location du ".concat(dateDebut, " au ").concat(dateFin));
  };

  return __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    className: classes.form,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594,
      columnNumber: 3
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 595,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["InputLabel"], {
    shrink: true,
    id: "demo-simple-select-placeholder-label-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596,
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
        lineNumber: 605,
        columnNumber: 7
      }
    }, gites.map(function (gite) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
        value: gite.slug,
        key: gite.slug,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 607,
          columnNumber: 9
        }
      }, gite.nom);
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601,
      columnNumber: 5
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615,
      columnNumber: 4
    }
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_7__["MuiPickersUtilsProvider"], {
    utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_1__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 616,
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
      lineNumber: 617,
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
      lineNumber: 631,
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
      lineNumber: 648,
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
      lineNumber: 660,
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
      lineNumber: 672,
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
      lineNumber: 684,
      columnNumber: 4
    }
  }, "Calculer le tarif"), "prixTotal, prixSuppl,", isSubmited && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 694,
      columnNumber: 6
    }
  }, dejaLoue && 'Il semble que ce gîte soit déjà loué à ces dates'), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 698,
      columnNumber: 6
    }
  }, "Location du ", dateDebut, " au ", dateFin, " pour le g\xEEte", ' ', giteSelec, " pour ", nbPers, " personnes dont ", nbEnf, " enfants et ", nbChien, " animaux"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 703,
      columnNumber: 6
    }
  }, "Total de ", nuitee, " nuit\xE9es", ' ', isVacances ? 'en période de vacances' : 'hors vacances', ' ', "et ", isWeekEnd ? 'en week-end' : ' hors week-end'), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 710,
      columnNumber: 6
    }
  }, "Montant de base : ", prixTotal), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 711,
      columnNumber: 6
    }
  }, "Montant suppl\xE9mentaire : ", prixSuppl)));
};

_s(FormCalculTarif, "6QV57FUOHW/KQzmbocAJuLjpX2g=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9Gb3JtQ2FsY3VsVGFyaWYuanMiXSwibmFtZXMiOlsiZGF5anMiLCJleHRlbmQiLCJpc0JldHdlZW4iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJmb3JtIiwid2lkdGgiLCJtYXJnaW4iLCJzcGFjaW5nIiwicm9vdCIsImJ1dHRvbiIsImZvcm1Db250cm9sIiwidGV4dEZpZWxkIiwiRm9ybUNhbGN1bFRhcmlmIiwiZ2l0ZXMiLCJ1c2VGb3JtIiwiY29udHJvbCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiY2xhc3NlcyIsInRva2VuIiwiZ2V0Q29va2llIiwidXNlU3RhdGUiLCJzZWxlY3RlZERhdGVEZWJ1dCIsInNldFNlbGVjdGVkRGF0ZURlYnV0Iiwic2VsZWN0ZWREYXRlRmluIiwic2V0U2VsZWN0ZWREYXRlRmluIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiZGF0ZURlYnV0Iiwic2V0RGF0ZURlYnV0IiwiZGF0ZUZpbiIsInNldERhdGVGaW4iLCJnaXRlU2VsZWMiLCJzZXRHaXRlU2VsZWMiLCJuYkNoaWVuIiwic2V0TmJDaGllbiIsIm5iRW5mIiwic2V0TmJFbmYiLCJuYlBlcnMiLCJzZXROYlBlcnMiLCJudWl0ZWUiLCJzZXROdWl0ZWUiLCJpc1ZhY2FuY2VzIiwic2V0SXNWYWNhbmNlcyIsImlzV2Vla0VuZCIsInNldElzV2Vla0VuZCIsImRlamFMb3VlIiwic2V0RGVqYUxvdWUiLCJwcml4VG90YWwiLCJzZXRQcml4VG90YWwiLCJwcml4U3VwcGwiLCJzZXRQcml4U3VwcGwiLCJpc1N1Ym1pdGVkIiwic2V0SXNTdWJtaXRlZCIsImhhbmRsZURhdGVDaGFuZ2VEZWJ1dCIsImRhdGUiLCJoYW5kbGVEYXRlQ2hhbmdlRmluIiwib25TdWJtaXQiLCJkYXRhIiwiZGF0ZUQiLCJkYXRlRiIsImdldFZhY2FuY2VzIiwidGhlbiIsInJlc3VsdCIsInZhY2FuY2VzIiwiZGlmZiIsImdpdGUiLCJzbHVnIiwiZ2V0RGVqYUxvdWUiLCJjYWxlbmRhcklkIiwibG91ZSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwibW9udGgiLCJ0YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UiLCJ0YXJpZkRlQmFzZSIsImNvZWZmaWNpZW50cyIsImJhc3NlU2Fpc29uIiwibW95ZW5uZVNhaXNvbiIsImhhdXRlU2Fpc29uIiwiZGF5T2ZZZWFyIiwibm9lbCIsIm5vdXZlbEFuIiwiZGF5IiwidW5lTnVpdGVlIiwic2V0QXZlcnRpc3NlbWVudCIsInRyb2lzTnVpdGVlcyIsInF1YXRyZU51aXRlZXMiLCJuUGVycyIsInRhcmlmUGFyUGVyc1Bhck51aXQiLCJzdXBwbGVtZW50UGFyUGVycyIsIm1hcCIsIm5vbSIsIkRhdGVGbnNVdGlscyIsInNocmluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLDRDQUFLLENBQUNDLE1BQU4sQ0FBYUMsNkRBQWI7QUFDQTtBQVFBO0FBQ0E7QUFLQTtBQU1BO0FBQ0E7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDeENDLFFBQUksRUFBRTtBQUNMQyxXQUFLLEVBQUUsS0FERjtBQUVMQyxZQUFNLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQ7QUFGSCxLQURrQztBQUt4Q0MsUUFBSSxFQUFFO0FBQ0xILFdBQUssRUFBRTtBQURGLEtBTGtDO0FBUXhDSSxVQUFNLEVBQUU7QUFDUEgsWUFBTSxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkLENBREQ7QUFFUEYsV0FBSyxFQUFFO0FBRkEsS0FSZ0M7QUFZeENLLGVBQVcsRUFBRTtBQUNaSixZQUFNLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsQ0FESTtBQUVaRixXQUFLLEVBQUU7QUFGSyxLQVoyQjtBQWdCeENNLGFBQVMs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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQTFGRCwyQkFrR0UyQyxVQUFVLElBQ1YsbUVBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFTixRQUFRLElBQ1Isa0RBRkYsQ0FERCxFQUtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ2NsQixTQURkLFVBQzZCRSxPQUQ3QixzQkFDbUQsR0FEbkQsRUFFRUUsU0FGRixZQUVtQk0sTUFGbkIsc0JBRTJDRixLQUYzQyxrQkFHS0YsT0FITCxhQUxELEVBVUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDV00sTUFEWCxpQkFDMkIsR0FEM0IsRUFFRUUsVUFBVSxHQUNSLHdCQURRLEdBRVIsZUFKSixFQUlxQixHQUpyQixTQUtLRSxTQUFTLEdBQUcsYUFBSCxHQUFtQixnQkFMakMsQ0FWRCxFQWlCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFzQkksU0FBdEIsQ0FqQkQsRUFrQkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FBNkJFLFNBQTdCLENBbEJELENBbkdGLENBREQ7QUEySEEsQ0F6cEJEOztHQUFNdEMsZTtVQUN1Q0UsdUQsRUFDNUJiLFM7OztLQUZYVyxlO0FBMnBCU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGFyaWZzLmMyZjRlZmQzODA2YWRlZDI2Zjg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0ZUZuc1V0aWxzIGZyb20gJ0BkYXRlLWlvL2RhdGUtZm5zJztcclxuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBpc0JldHdlZW4gZnJvbSAnZGF5anMvcGx1Z2luL2lzQmV0d2Vlbic7XHJcbmRheWpzLmV4dGVuZChpc0JldHdlZW4pO1xyXG5pbXBvcnQge1xyXG5cdEJ1dHRvbixcclxuXHRGb3JtQ29udHJvbCxcclxuXHRJbnB1dExhYmVsLFxyXG5cdE1lbnVJdGVtLFxyXG5cdFNlbGVjdCxcclxuXHRUZXh0RmllbGQsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtcclxuXHRNdWlQaWNrZXJzVXRpbHNQcm92aWRlcixcclxuXHRLZXlib2FyZFRpbWVQaWNrZXIsXHJcblx0S2V5Ym9hcmREYXRlUGlja2VyLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9waWNrZXJzJztcclxuaW1wb3J0IHtcclxuXHRnZXRDYWxlbmRhcixcclxuXHRnZXRDYWxlbmRhckJ5SWQsXHJcblx0Z2V0RGVqYUxvdWUsXHJcblx0Z2V0VmFjYW5jZXMsXHJcbn0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9jYWxlbmRhckFjdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRmb3JtOiB7XHJcblx0XHR3aWR0aDogJzcwJScsXHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0fSxcclxuXHRyb290OiB7XHJcblx0XHR3aWR0aDogJzgwJScsXHJcblx0fSxcclxuXHRidXR0b246IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygyKSxcclxuXHRcdHdpZHRoOiAnODAlJyxcclxuXHR9LFxyXG5cdGZvcm1Db250cm9sOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHR3aWR0aDogJzgwJScsXHJcblx0fSxcclxuXHR0ZXh0RmllbGQ6IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdHdpZHRoOiAnODAlJyxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5jb25zdCBGb3JtQ2FsY3VsVGFyaWYgPSAoeyBnaXRlcyB9KSA9PiB7XHJcblx0Y29uc3QgeyBjb250cm9sLCByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKCk7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cdGNvbnN0IFtzZWxlY3RlZERhdGVEZWJ1dCwgc2V0U2VsZWN0ZWREYXRlRGVidXRdID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdCBbc2VsZWN0ZWREYXRlRmluLCBzZXRTZWxlY3RlZERhdGVGaW5dID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdCBbZGF0ZURlYnV0LCBzZXREYXRlRGVidXRdID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdCBbZGF0ZUZpbiwgc2V0RGF0ZUZpbl0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtnaXRlU2VsZWMsIHNldEdpdGVTZWxlY10gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtuYkNoaWVuLCBzZXROYkNoaWVuXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW25iRW5mLCBzZXROYkVuZl0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtuYlBlcnMsIHNldE5iUGVyc10gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtudWl0ZWUsIHNldE51aXRlZV0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtpc1ZhY2FuY2VzLCBzZXRJc1ZhY2FuY2VzXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW2lzV2Vla0VuZCwgc2V0SXNXZWVrRW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbZGVqYUxvdWUsIHNldERlamFMb3VlXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW3ByaXhUb3RhbCwgc2V0UHJpeFRvdGFsXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW3ByaXhTdXBwbCwgc2V0UHJpeFN1cHBsXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW2lzU3VibWl0ZWQsIHNldElzU3VibWl0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVEYXRlQ2hhbmdlRGVidXQgPSAoZGF0ZSkgPT4ge1xyXG5cdFx0c2V0U2VsZWN0ZWREYXRlRGVidXQoZGF0ZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlRGF0ZUNoYW5nZUZpbiA9IChkYXRlKSA9PiB7XHJcblx0XHRzZXRTZWxlY3RlZERhdGVGaW4oZGF0ZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4ge1xyXG5cdFx0c2V0SXNTdWJtaXRlZCh0cnVlKTtcclxuXHRcdGNvbnN0IHsgZGF0ZURlYnV0LCBkYXRlRmluLCBnaXRlU2VsZWMsIG5iQ2hpZW4sIG5iRW5mLCBuYlBlcnMgfSA9IGRhdGE7XHJcblx0XHRjb25zdCBkYXRlRCA9IGRheWpzKGRhdGVEZWJ1dCk7XHJcblx0XHRjb25zdCBkYXRlRiA9IGRheWpzKGRhdGVGaW4pO1xyXG5cdFx0Z2V0VmFjYW5jZXMoZGF0ZUQsIGRhdGVGKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ3Jlc3VsdCB2YXV0JywgcmVzdWx0KTtcclxuXHRcdFx0c2V0SXNWYWNhbmNlcyhyZXN1bHQudmFjYW5jZXMpO1xyXG5cdFx0XHQvLyByZXR1cm4gcmVzdWx0LnZhY2FuY2VzO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgbnVpdGVlID0gZGF0ZUYuZGlmZihkYXRlRCwgJ2RheScpO1xyXG5cdFx0c2V0RGF0ZURlYnV0KGRhdGVEZWJ1dCk7XHJcblx0XHRzZXREYXRlRmluKGRhdGVGaW4pO1xyXG5cdFx0c2V0TnVpdGVlKG51aXRlZSk7XHJcblx0XHRzZXRHaXRlU2VsZWMoZ2l0ZVNlbGVjKTtcclxuXHRcdHNldE5iQ2hpZW4obmJDaGllbik7XHJcblx0XHRzZXROYkVuZihuYkVuZik7XHJcblx0XHRzZXROYlBlcnMobmJQZXJzKTtcclxuXHJcblx0XHRmb3IgKGNvbnN0IGdpdGUgb2YgZ2l0ZXMpIHtcclxuXHRcdFx0aWYgKGdpdGUuc2x1ZyA9PT0gZ2l0ZVNlbGVjKSB7XHJcblx0XHRcdFx0Z2V0RGVqYUxvdWUoZ2l0ZS5jYWxlbmRhcklkLCBkYXRlRCwgZGF0ZUYpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlc3VsdC5sb3VlKSB7XHJcblx0XHRcdFx0XHRcdHNldERlamFMb3VlKHtcclxuXHRcdFx0XHRcdFx0XHRtZXNzYWdlOlxyXG5cdFx0XHRcdFx0XHRcdFx0J0lsIHNlbWJsZSBxdWUgY2UgZ8OudGUgc29pdCBkw6lqw6AgbG91w6kgYXV4IGRhdGVzIGluZGlxdcOpZXMnLFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHNldERlamFMb3VlKHtcclxuXHRcdFx0XHRcdFx0XHRtZXNzYWdlOlxyXG5cdFx0XHRcdFx0XHRcdFx0XCJDZSBnw650ZSBzZW1ibGUgbGlicmUgcG91ciBsZSBtb21lbnQsIG4naMOpc2l0ZXogcGFzIMOgIGZhaXJlIHVuZSBkZW1hbmRlIGRlIGxvY2F0aW9uXCIsXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vIE9uIHLDqWN1cMOocmUgbGUgZ8OudGUgc2VsZWN0aW9ubsOpXHJcblx0XHRcdFx0aWYgKG51aXRlZSA9PT0gNyB8fCBudWl0ZWUgPT09IDE0IHx8IG51aXRlZSA9PT0gMjEpIHtcclxuXHRcdFx0XHRcdGlmIChpc1ZhY2FuY2VzKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdDYXMgZ8OpbsOpcmFsIDogb24gZXN0IGVuIHZhbmNhbmNlcycpO1xyXG5cdFx0XHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRcdFx0ZGF5anMoZGF0ZUQpLmlzQmV0d2VlbihcclxuXHRcdFx0XHRcdFx0XHRcdGRheWpzKCkubW9udGgoNiksXHJcblx0XHRcdFx0XHRcdFx0XHRkYXlqcygpLm1vbnRoKDcpLFxyXG5cdFx0XHRcdFx0XHRcdFx0bnVsbCxcclxuXHRcdFx0XHRcdFx0XHRcdCdbXSdcclxuXHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdvbiBlc3QgZW4gaGF1dGUgc2Fpc29uIMOgIGxhIHNlbWFpbmUnKTtcclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm1veWVubmVTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5oYXV0ZVNhaXNvblxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdFx0XHRcdFx0ZGF5anMoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmRheU9mWWVhcigzNTgpXHJcblx0XHRcdFx0XHRcdFx0XHQuaXNCZXR3ZWVuKGRhdGVELCBkYXRlRiwgbnVsbCwgJ1tdJylcclxuXHRcdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ29uIGVzdCDDoCBub2VsIMOgIGxhIHNlbWFpbmUnKTtcclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm1veWVubmVTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5oYXV0ZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm5vZWxcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKFxyXG5cdFx0XHRcdFx0XHRcdGRheWpzKClcclxuXHRcdFx0XHRcdFx0XHRcdC5kYXlPZlllYXIoMzY1KVxyXG5cdFx0XHRcdFx0XHRcdFx0LmlzQmV0d2VlbihkYXRlRCwgZGF0ZUYsIG51bGwsICdbXScpXHJcblx0XHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdvbiBlc3QgYXUgbm91dmVsIGFuIMOgIGxhIHNlbWFpbmUnKTtcclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm1veWVubmVTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5oYXV0ZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm5vZWwgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5ub3V2ZWxBblxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHQnT24gZXN0IGRhbnMgbGUgY2FzIDcgbnVpdMOpZXMgZW4gdmFjYW5jZXMgc2NvbGFpcmVzIG1veWVubmUgc2Fpc29uJ1xyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm1veWVubmVTYWlzb25cclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ2FzIDcgbnVpdMOpZXMgaG9ycyB2YWNhbmNlcycpO1xyXG5cdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvblxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA8IDcpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdDYXMgZ8OpbsOpcmFsIDogbnVpdMOpZXMgaW5mw6lyaWV1cmUgw6AgNycpO1xyXG5cdFx0XHRcdFx0aWYgKGRheWpzKCkuZGF5KDYpLmlzQmV0d2VlbihkYXRlRCwgZGF0ZUYsIG51bGwsICdbXScpKSB7XHJcblx0XHRcdFx0XHRcdHNldElzV2Vla0VuZCh0cnVlKTtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyBlbiB3ZWVrLWVuZCBtb2lucyBkZSA3IG51aXRzJyk7XHJcblx0XHRcdFx0XHRcdGlmIChudWl0ZWUgPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdCdDYXMgd2Vlay1lbmQgMSBudWl0ICsgbXNnIGF2ZXJ0aXNzZW1lbnQnXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSAvIDIgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnVuZU51aXRlZVxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0QXZlcnRpc3NlbWVudCh7XHJcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnRW4gd2VlayBlbmQgbm91cyBsb3VvbnMgMiBudWl0w6llcywgKHRyw6hzIGV4Y2VwdGlvbm5lbGVtZW50IDEgc2V1bGUpJyxcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDIpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ2FzIHdlZWstZW5kIDIgbnVpdHMnKTtcclxuXHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZVxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSAzKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyB3ZWVrLWVuZCAzIG51aXRzJyk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRyb2lzTnVpdGVlc1xyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA0KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyB3ZWVrLWVuZCA0IG51aXRzJyk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnF1YXRyZU51aXRlZXNcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gNSkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0J0NhcyB3ZWVrLWVuZCA1IG51aXRzIC0gUXVlbCB0YXJpZiA/IFZvaXIgTWFtYW4nXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbCgpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gNikge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0J0NhcyB3ZWVrLWVuZCA2IG51aXRzIC0gUXVlbCB0YXJpZiA/IFZvaXIgTWFtYW4nXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbCgpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0J0F1dHJlcyBjYXMgd2Vlay1lbmQgaW5mw6lyaWV1ciDDoCA3IG51aXRzIC0gSW5wb3NzaWJsZS4uLidcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHQnQ2FzIGfDqW7DqXJhbCA6IG1vaW5zIGRlIDcgbnVpdHMgZXQgc2FucyBzYW1lZGknXHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdGlmIChpc1ZhY2FuY2VzKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHQnQ2FzIGfDqW7DqXJhbCA6IGhvcnMgV0UgbW9pbnMgZGUgNyBudWl0cyBtYWlzIGVuIHZhY2FuY2VzIC0gVGFyaWYgc2FucyB0ZW5pciBjb21wdGUgZHUgcGxhZm9uZCdcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChudWl0ZWUgPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgMSBudWl0IG1haXMgZW4gdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQxXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogMVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSAyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDIgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coYE1vaW5zIGRlICR7Z2l0ZS5uUGVyc30gcGVyc2ApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQyXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogMlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSAzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDMgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDNcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0M1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDNcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gNCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCA0IG51aXRzIG1haXMgZW4gdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ0XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDRcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiA0XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgNSBudWl0cyBtYWlzIGVuIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDVcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiA1XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDYpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgNiBudWl0cyBtYWlzIGVuIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDZcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiA2XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQXV0cmVzIGNhcyB3ZWVrLWVuZCBpbmbDqXJpZXVyIMOgIDcgbnVpdHMgLSBQZXUgcHJvYmFibGUuLi4nXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdCdDYXMgZ8OpbsOpcmFsIDogaG9ycyBXRSBtb2lucyBkZSA3IG51aXRzIG1haXMgZW4gdmFjYW5jZXMgLSBUYXJpZiBhdmVjIHBsYWZvbmQnXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdGlmIChudWl0ZWUgPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgMSBudWl0IGV0IGhvcnMgdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCgoZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uIC1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlKSAvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ3KSAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQxICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogMVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSAyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDIgbnVpdHMgZXQgaG9ycyB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDJcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbiAtXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSkgL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NykgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0MiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDJcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gMykge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCAzIG51aXRzIGV0IGhvcnMgdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQzXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KChnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm1veWVubmVTYWlzb24gLVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UpIC9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcpICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDMgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiAzXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgNCBudWl0cyBldCBob3JzIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCgoZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uIC1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlKSAvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ3KSAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ0ICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogNFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA1KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDUgbnVpdHMgZXQgaG9ycyB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDVcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbiAtXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSkgL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NykgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDVcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gNikge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCA2IG51aXRzIGV0IGhvcnMgdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ2XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KChnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm1veWVubmVTYWlzb24gLVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UpIC9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcpICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDYgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiA2XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdBdXRyZXMgY2FzIG51aXQgPiA3IGV0ICE9PSBkZSAxNCBldCAyMScpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ0fDqXJlciBjYXMgPjMwIGljaScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2codmFsdWVzKTtcclxuXHRcdGNvbnNvbGUubG9nKGBMb2NhdGlvbiBkdSAke2RhdGVEZWJ1dH0gYXUgJHtkYXRlRmlufWApO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PlxyXG5cdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHQ8SW5wdXRMYWJlbFxyXG5cdFx0XHRcdFx0c2hyaW5rXHJcblx0XHRcdFx0XHRpZD0nZGVtby1zaW1wbGUtc2VsZWN0LXBsYWNlaG9sZGVyLWxhYmVsLWxhYmVsJz5cclxuXHRcdFx0XHRcdEdpdGVcclxuXHRcdFx0XHQ8L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0PENvbnRyb2xsZXJcclxuXHRcdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0XHRuYW1lPSdnaXRlU2VsZWMnXHJcblx0XHRcdFx0XHRhcz17XHJcblx0XHRcdFx0XHRcdDxTZWxlY3QgaWQ9J2RlY2xlbmNoZXVyLXNlbGVjdCcgZGVmYXVsdFZhbHVlPScnPlxyXG5cdFx0XHRcdFx0XHRcdHtnaXRlcy5tYXAoKGdpdGUpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT17Z2l0ZS5zbHVnfSBrZXk9e2dpdGUuc2x1Z30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtnaXRlLm5vbX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdDwvU2VsZWN0PlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdDxNdWlQaWNrZXJzVXRpbHNQcm92aWRlciB1dGlscz17RGF0ZUZuc1V0aWxzfT5cclxuXHRcdFx0XHRcdDxLZXlib2FyZERhdGVQaWNrZXJcclxuXHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRtYXJnaW49J25vcm1hbCdcclxuXHRcdFx0XHRcdFx0aWQ9J2RhdGUtcGlja2VyLWRpYWxvZydcclxuXHRcdFx0XHRcdFx0bmFtZT0nZGF0ZURlYnV0J1xyXG5cdFx0XHRcdFx0XHRsYWJlbD0nRGF0ZSBkZSBkw6lidXQnXHJcblx0XHRcdFx0XHRcdGZvcm1hdD0nTU0vZGQveXl5eSdcclxuXHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPScnXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtzZWxlY3RlZERhdGVEZWJ1dH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZURhdGVDaGFuZ2VEZWJ1dH1cclxuXHRcdFx0XHRcdFx0S2V5Ym9hcmRCdXR0b25Qcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRcdCdhcmlhLWxhYmVsJzogJ2NoYW5nZSBkYXRlJyxcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8S2V5Ym9hcmREYXRlUGlja2VyXHJcblx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0Ly8gZGlzYWJsZVRvb2xiYXJcclxuXHRcdFx0XHRcdFx0bmFtZT0nZGF0ZUZpbidcclxuXHRcdFx0XHRcdFx0Zm9ybWF0PSdNTS9kZC95eXl5J1xyXG5cdFx0XHRcdFx0XHRtYXJnaW49J25vcm1hbCdcclxuXHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPScwMi8yNS8yMDIxJ1xyXG5cdFx0XHRcdFx0XHRpZD0nZGF0ZS1waWNrZXItaW5saW5lJ1xyXG5cdFx0XHRcdFx0XHRsYWJlbD0nRGF0ZSBkZSBmaW4nXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtzZWxlY3RlZERhdGVGaW59XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVEYXRlQ2hhbmdlRmlufVxyXG5cdFx0XHRcdFx0XHRLZXlib2FyZEJ1dHRvblByb3BzPXt7XHJcblx0XHRcdFx0XHRcdFx0J2FyaWEtbGFiZWwnOiAnY2hhbmdlIGRhdGUnLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L011aVBpY2tlcnNVdGlsc1Byb3ZpZGVyPlxyXG5cdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuXHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0bmFtZT0nbmJQZXJzJ1xyXG5cdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRkZWZhdWx0VmFsdWU9JzEwJ1xyXG5cdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0bGFiZWw9J05vbWJyZSBkZSBwZXJzb25uZXMgYXUgdG90YWwnXHJcblx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdG5hbWU9J25iRW5mJ1xyXG5cdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRkZWZhdWx0VmFsdWU9JzInXHJcblx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRsYWJlbD1cIk5vbWJyZSBkJ2VuZmFudHMgLTE4IGFuc1wiXHJcblx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcblx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdG5hbWU9J25iQ2hpZW4nXHJcblx0XHRcdFx0dHlwZT0nbnVtYmVyJ1xyXG5cdFx0XHRcdGRlZmF1bHRWYWx1ZT0nMCdcclxuXHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdGxhYmVsPSdDaGllbnMgKDPigqwvai9hbmltYWwpJ1xyXG5cdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHR0eXBlPSdzdWJtaXQnXHJcblx0XHRcdFx0dmFyaWFudD0nY29udGFpbmVkJ1xyXG5cdFx0XHRcdGNvbG9yPSdwcmltYXJ5J1xyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdENhbGN1bGVyIGxlIHRhcmlmXHJcblx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRwcml4VG90YWwsIHByaXhTdXBwbCxcclxuXHRcdFx0e2lzU3VibWl0ZWQgJiYgKFxyXG5cdFx0XHRcdDw+XHJcblx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0e2RlamFMb3VlICYmXHJcblx0XHRcdFx0XHRcdFx0J0lsIHNlbWJsZSBxdWUgY2UgZ8OudGUgc29pdCBkw6lqw6AgbG91w6kgw6AgY2VzIGRhdGVzJ31cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRMb2NhdGlvbiBkdSB7ZGF0ZURlYnV0fSBhdSB7ZGF0ZUZpbn0gcG91ciBsZSBnw650ZXsnICd9XHJcblx0XHRcdFx0XHRcdHtnaXRlU2VsZWN9IHBvdXIge25iUGVyc30gcGVyc29ubmVzIGRvbnQge25iRW5mfSBlbmZhbnRzXHJcblx0XHRcdFx0XHRcdGV0IHtuYkNoaWVufSBhbmltYXV4XHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0VG90YWwgZGUge251aXRlZX0gbnVpdMOpZXN7JyAnfVxyXG5cdFx0XHRcdFx0XHR7aXNWYWNhbmNlc1xyXG5cdFx0XHRcdFx0XHRcdD8gJ2VuIHDDqXJpb2RlIGRlIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdDogJ2hvcnMgdmFjYW5jZXMnfXsnICd9XHJcblx0XHRcdFx0XHRcdGV0IHtpc1dlZWtFbmQgPyAnZW4gd2Vlay1lbmQnIDogJyBob3JzIHdlZWstZW5kJ31cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDxwPk1vbnRhbnQgZGUgYmFzZSA6IHtwcml4VG90YWx9PC9wPlxyXG5cdFx0XHRcdFx0PHA+TW9udGFudCBzdXBwbMOpbWVudGFpcmUgOiB7cHJpeFN1cHBsfTwvcD5cclxuXHRcdFx0XHQ8Lz5cclxuXHRcdFx0KX1cclxuXHRcdDwvZm9ybT5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUNhbGN1bFRhcmlmO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9