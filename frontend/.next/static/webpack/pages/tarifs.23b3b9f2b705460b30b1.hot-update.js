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
      lineNumber: 592,
      columnNumber: 3
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["InputLabel"], {
    shrink: true,
    id: "demo-simple-select-placeholder-label-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594,
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
        lineNumber: 603,
        columnNumber: 7
      }
    }, gites.map(function (gite) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
        value: gite.slug,
        key: gite.slug,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 605,
          columnNumber: 9
        }
      }, gite.nom);
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599,
      columnNumber: 5
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614,
      columnNumber: 4
    }
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_7__["MuiPickersUtilsProvider"], {
    utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_1__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615,
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
      lineNumber: 616,
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
      lineNumber: 630,
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
      lineNumber: 661,
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
      lineNumber: 673,
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
      lineNumber: 686,
      columnNumber: 4
    }
  }, "Calculer le tarif"), isSubmited && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, " "));
};

_s(FormCalculTarif, "Q1safGAQ36HZiHy0gGFJdHB6Xhg=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9Gb3JtQ2FsY3VsVGFyaWYuanMiXSwibmFtZXMiOlsiZGF5anMiLCJleHRlbmQiLCJpc0JldHdlZW4iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJmb3JtIiwid2lkdGgiLCJtYXJnaW4iLCJzcGFjaW5nIiwicm9vdCIsImJ1dHRvbiIsImZvcm1Db250cm9sIiwidGV4dEZpZWxkIiwiRm9ybUNhbGN1bFRhcmlmIiwiZ2l0ZXMiLCJ1c2VGb3JtIiwiY29udHJvbCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiY2xhc3NlcyIsInRva2VuIiwiZ2V0Q29va2llIiwidXNlU3RhdGUiLCJzZWxlY3RlZERhdGVEZWJ1dCIsInNldFNlbGVjdGVkRGF0ZURlYnV0Iiwic2VsZWN0ZWREYXRlRmluIiwic2V0U2VsZWN0ZWREYXRlRmluIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiZGF0ZURlYnV0Iiwic2V0RGF0ZURlYnV0IiwiZGF0ZUZpbiIsInNldERhdGVGaW4iLCJnaXRlU2VsZWMiLCJzZXRHaXRlU2VsZWMiLCJuYkNoaWVuIiwic2V0TmJDaGllbiIsIm5iRW5mIiwic2V0TmJFbmYiLCJuYlBlcnMiLCJzZXROYlBlcnMiLCJudWl0ZWUiLCJzZXROdWl0ZWUiLCJpc1ZhY2FuY2VzIiwic2V0SXNWYWNhbmNlcyIsImRlamFMb3VlIiwic2V0RGVqYUxvdWUiLCJwcml4VG90YWwiLCJzZXRQcml4VG90YWwiLCJwcml4U3VwcGwiLCJzZXRQcml4U3VwcGwiLCJpc1N1Ym1pdGVkIiwic2V0SXNTdWJtaXRlZCIsImhhbmRsZURhdGVDaGFuZ2VEZWJ1dCIsImRhdGUiLCJoYW5kbGVEYXRlQ2hhbmdlRmluIiwib25TdWJtaXQiLCJkYXRhIiwiZGF0ZUQiLCJkYXRlRiIsImdldFZhY2FuY2VzIiwidGhlbiIsInJlc3VsdCIsInZhY2FuY2VzIiwiZGlmZiIsImdpdGUiLCJzbHVnIiwiZ2V0RGVqYUxvdWUiLCJjYWxlbmRhcklkIiwibG91ZSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwibW9udGgiLCJ0YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UiLCJ0YXJpZkRlQmFzZSIsImNvZWZmaWNpZW50cyIsImJhc3NlU2Fpc29uIiwibW95ZW5uZVNhaXNvbiIsImhhdXRlU2Fpc29uIiwiZGF5T2ZZZWFyIiwibm9lbCIsIm5vdXZlbEFuIiwiZGF5IiwidW5lTnVpdGVlIiwic2V0QXZlcnRpc3NlbWVudCIsInRyb2lzTnVpdGVlcyIsInF1YXRyZU51aXRlZXMiLCJuUGVycyIsInRhcmlmUGFyUGVyc1Bhck51aXQiLCJzdXBwbGVtZW50UGFyUGVycyIsIm1hcCIsIm5vbSIsIkRhdGVGbnNVdGlscyIsInNocmluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLDRDQUFLLENBQUNDLE1BQU4sQ0FBYUMsNkRBQWI7QUFDQTtBQVFBO0FBQ0E7QUFLQTtBQU1BO0FBQ0E7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDeENDLFFBQUksRUFBRTtBQUNMQyxXQUFLLEVBQUUsS0FERjtBQUVMQyxZQUFNLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQ7QUFGSCxLQURrQztBQUt4Q0MsUUFBSSxFQUFFO0FBQ0xILFdBQUssRUFBRTtBQURGLEtBTGtDO0FBUXhDSSxVQUFNLEVBQUU7QUFDUEgsWUFBTSxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkLENBREQ7QUFFUEYsV0FBSyxFQUFFO0FBRkEsS0FSZ0M7QUFZeENLLGVBQVcsRUFBRTtBQUNaSixZQUFNLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsQ0FESTtBQUVaRixXQUFLLEVBQUU7QUFGSyxLQVoyQjtBQWdCeENNLGFBQVMsRUFBRTtBQUNWTCxZQUFNLEVBQUVILEtBQUss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OiJzdGF0aWMvd2VicGFjay9wYWdlcy90YXJpZnMuMjNiM2I5ZjJiNzA1NDYwYjMwYjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRlRm5zVXRpbHMgZnJvbSAnQGRhdGUtaW8vZGF0ZS1mbnMnO1xyXG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IGlzQmV0d2VlbiBmcm9tICdkYXlqcy9wbHVnaW4vaXNCZXR3ZWVuJztcclxuZGF5anMuZXh0ZW5kKGlzQmV0d2Vlbik7XHJcbmltcG9ydCB7XHJcblx0QnV0dG9uLFxyXG5cdEZvcm1Db250cm9sLFxyXG5cdElucHV0TGFiZWwsXHJcblx0TWVudUl0ZW0sXHJcblx0U2VsZWN0LFxyXG5cdFRleHRGaWVsZCxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge1xyXG5cdE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLFxyXG5cdEtleWJvYXJkVGltZVBpY2tlcixcclxuXHRLZXlib2FyZERhdGVQaWNrZXIsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL3BpY2tlcnMnO1xyXG5pbXBvcnQge1xyXG5cdGdldENhbGVuZGFyLFxyXG5cdGdldENhbGVuZGFyQnlJZCxcclxuXHRnZXREZWphTG91ZSxcclxuXHRnZXRWYWNhbmNlcyxcclxufSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2NhbGVuZGFyQWN0aW9ucyc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdGZvcm06IHtcclxuXHRcdHdpZHRoOiAnNzAlJyxcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygyKSxcclxuXHR9LFxyXG5cdHJvb3Q6IHtcclxuXHRcdHdpZHRoOiAnODAlJyxcclxuXHR9LFxyXG5cdGJ1dHRvbjoge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdFx0d2lkdGg6ICc4MCUnLFxyXG5cdH0sXHJcblx0Zm9ybUNvbnRyb2w6IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdHdpZHRoOiAnODAlJyxcclxuXHR9LFxyXG5cdHRleHRGaWVsZDoge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0d2lkdGg6ICc4MCUnLFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEZvcm1DYWxjdWxUYXJpZiA9ICh7IGdpdGVzIH0pID0+IHtcclxuXHRjb25zdCB7IGNvbnRyb2wsIHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm0oKTtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblx0Y29uc3QgW3NlbGVjdGVkRGF0ZURlYnV0LCBzZXRTZWxlY3RlZERhdGVEZWJ1dF0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtzZWxlY3RlZERhdGVGaW4sIHNldFNlbGVjdGVkRGF0ZUZpbl0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtkYXRlRGVidXQsIHNldERhdGVEZWJ1dF0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtkYXRlRmluLCBzZXREYXRlRmluXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW2dpdGVTZWxlYywgc2V0R2l0ZVNlbGVjXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW25iQ2hpZW4sIHNldE5iQ2hpZW5dID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdCBbbmJFbmYsIHNldE5iRW5mXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW25iUGVycywgc2V0TmJQZXJzXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW251aXRlZSwgc2V0TnVpdGVlXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW2lzVmFjYW5jZXMsIHNldElzVmFjYW5jZXNdID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdCBbZGVqYUxvdWUsIHNldERlamFMb3VlXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW3ByaXhUb3RhbCwgc2V0UHJpeFRvdGFsXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW3ByaXhTdXBwbCwgc2V0UHJpeFN1cHBsXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW2lzU3VibWl0ZWQsIHNldElzU3VibWl0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVEYXRlQ2hhbmdlRGVidXQgPSAoZGF0ZSkgPT4ge1xyXG5cdFx0c2V0U2VsZWN0ZWREYXRlRGVidXQoZGF0ZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlRGF0ZUNoYW5nZUZpbiA9IChkYXRlKSA9PiB7XHJcblx0XHRzZXRTZWxlY3RlZERhdGVGaW4oZGF0ZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4ge1xyXG5cdFx0c2V0SXNTdWJtaXRlZCh0cnVlKTtcclxuXHRcdGNvbnN0IHsgZGF0ZURlYnV0LCBkYXRlRmluLCBnaXRlU2VsZWMsIG5iQ2hpZW4sIG5iRW5mLCBuYlBlcnMgfSA9IGRhdGE7XHJcblx0XHRjb25zdCBkYXRlRCA9IGRheWpzKGRhdGVEZWJ1dCk7XHJcblx0XHRjb25zdCBkYXRlRiA9IGRheWpzKGRhdGVGaW4pO1xyXG5cdFx0Z2V0VmFjYW5jZXMoZGF0ZUQsIGRhdGVGKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ3Jlc3VsdCB2YXV0JywgcmVzdWx0KTtcclxuXHRcdFx0c2V0SXNWYWNhbmNlcyhyZXN1bHQudmFjYW5jZXMpO1xyXG5cdFx0XHQvLyByZXR1cm4gcmVzdWx0LnZhY2FuY2VzO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgbnVpdGVlID0gZGF0ZUYuZGlmZihkYXRlRCwgJ2RheScpO1xyXG5cdFx0c2V0RGF0ZURlYnV0KGRhdGVEZWJ1dCk7XHJcblx0XHRzZXREYXRlRmluKGRhdGVGaW4pO1xyXG5cdFx0c2V0TnVpdGVlKG51aXRlZSk7XHJcblx0XHRzZXRHaXRlU2VsZWMoZ2l0ZVNlbGVjKTtcclxuXHRcdHNldE5iQ2hpZW4obmJDaGllbik7XHJcblx0XHRzZXROYkVuZihuYkVuZik7XHJcblx0XHRzZXROYlBlcnMobmJQZXJzKTtcclxuXHJcblx0XHRmb3IgKGNvbnN0IGdpdGUgb2YgZ2l0ZXMpIHtcclxuXHRcdFx0aWYgKGdpdGUuc2x1ZyA9PT0gZ2l0ZVNlbGVjKSB7XHJcblx0XHRcdFx0Z2V0RGVqYUxvdWUoZ2l0ZS5jYWxlbmRhcklkLCBkYXRlRCwgZGF0ZUYpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlc3VsdC5sb3VlKSB7XHJcblx0XHRcdFx0XHRcdHNldERlamFMb3VlKHtcclxuXHRcdFx0XHRcdFx0XHRtZXNzYWdlOlxyXG5cdFx0XHRcdFx0XHRcdFx0J0lsIHNlbWJsZSBxdWUgY2UgZ8OudGUgc29pdCBkw6lqw6AgbG91w6kgYXV4IGRhdGVzIGluZGlxdcOpZXMnLFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHNldERlamFMb3VlKHtcclxuXHRcdFx0XHRcdFx0XHRtZXNzYWdlOlxyXG5cdFx0XHRcdFx0XHRcdFx0XCJDZSBnw650ZSBzZW1ibGUgbGlicmUgcG91ciBsZSBtb21lbnQsIG4naMOpc2l0ZXogcGFzIMOgIGZhaXJlIHVuZSBkZW1hbmRlIGRlIGxvY2F0aW9uXCIsXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vIE9uIHLDqWN1cMOocmUgbGUgZ8OudGUgc2VsZWN0aW9ubsOpXHJcblx0XHRcdFx0aWYgKG51aXRlZSA9PT0gNyB8fCBudWl0ZWUgPT09IDE0IHx8IG51aXRlZSA9PT0gMjEpIHtcclxuXHRcdFx0XHRcdGlmIChpc1ZhY2FuY2VzKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdDYXMgZ8OpbsOpcmFsIDogb24gZXN0IGVuIHZhbmNhbmNlcycpO1xyXG5cdFx0XHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRcdFx0ZGF5anMoZGF0ZUQpLmlzQmV0d2VlbihcclxuXHRcdFx0XHRcdFx0XHRcdGRheWpzKCkubW9udGgoNiksXHJcblx0XHRcdFx0XHRcdFx0XHRkYXlqcygpLm1vbnRoKDcpLFxyXG5cdFx0XHRcdFx0XHRcdFx0bnVsbCxcclxuXHRcdFx0XHRcdFx0XHRcdCdbXSdcclxuXHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdvbiBlc3QgZW4gaGF1dGUgc2Fpc29uIMOgIGxhIHNlbWFpbmUnKTtcclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm1veWVubmVTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5oYXV0ZVNhaXNvblxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdFx0XHRcdFx0ZGF5anMoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmRheU9mWWVhcigzNTgpXHJcblx0XHRcdFx0XHRcdFx0XHQuaXNCZXR3ZWVuKGRhdGVELCBkYXRlRiwgbnVsbCwgJ1tdJylcclxuXHRcdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ29uIGVzdCDDoCBub2VsIMOgIGxhIHNlbWFpbmUnKTtcclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm1veWVubmVTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5oYXV0ZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm5vZWxcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKFxyXG5cdFx0XHRcdFx0XHRcdGRheWpzKClcclxuXHRcdFx0XHRcdFx0XHRcdC5kYXlPZlllYXIoMzY1KVxyXG5cdFx0XHRcdFx0XHRcdFx0LmlzQmV0d2VlbihkYXRlRCwgZGF0ZUYsIG51bGwsICdbXScpXHJcblx0XHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdvbiBlc3QgYXUgbm91dmVsIGFuIMOgIGxhIHNlbWFpbmUnKTtcclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm1veWVubmVTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5oYXV0ZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm5vZWwgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5ub3V2ZWxBblxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHQnT24gZXN0IGRhbnMgbGUgY2FzIDcgbnVpdMOpZXMgZW4gdmFjYW5jZXMgc2NvbGFpcmVzIG1veWVubmUgc2Fpc29uJ1xyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm1veWVubmVTYWlzb25cclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ2FzIDcgbnVpdMOpZXMgaG9ycyB2YWNhbmNlcycpO1xyXG5cdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvblxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA8IDcpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdDYXMgZ8OpbsOpcmFsIDogbnVpdMOpZXMgaW5mw6lyaWV1cmUgw6AgNycpO1xyXG5cdFx0XHRcdFx0aWYgKGRheWpzKCkuZGF5KDYpLmlzQmV0d2VlbihkYXRlRCwgZGF0ZUYsIG51bGwsICdbXScpKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdDYXMgZW4gd2Vlay1lbmQgbW9pbnMgZGUgNyBudWl0cycpO1xyXG5cdFx0XHRcdFx0XHRpZiAobnVpdGVlID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHQnQ2FzIHdlZWstZW5kIDEgbnVpdCArIG1zZyBhdmVydGlzc2VtZW50J1xyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgLyAyICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS51bmVOdWl0ZWVcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHRcdHNldEF2ZXJ0aXNzZW1lbnQoe1xyXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTpcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0VuIHdlZWsgZW5kIG5vdXMgbG91b25zIDIgbnVpdMOpZXMsICh0csOocyBleGNlcHRpb25uZWxlbWVudCAxIHNldWxlKScsXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSAyKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhcyB3ZWVrLWVuZCAyIG51aXRzJyk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2VcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gMykge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdDYXMgd2Vlay1lbmQgMyBudWl0cycpO1xyXG5cdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50cm9pc051aXRlZXNcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gNCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdDYXMgd2Vlay1lbmQgNCBudWl0cycpO1xyXG5cdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5xdWF0cmVOdWl0ZWVzXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDUpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdCdDYXMgd2Vlay1lbmQgNSBudWl0cyAtIFF1ZWwgdGFyaWYgPyBWb2lyIE1hbWFuJ1xyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoKTtcclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDYpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdCdDYXMgd2Vlay1lbmQgNiBudWl0cyAtIFF1ZWwgdGFyaWYgPyBWb2lyIE1hbWFuJ1xyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoKTtcclxuXHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdCdBdXRyZXMgY2FzIHdlZWstZW5kIGluZsOpcmlldXIgw6AgNyBudWl0cyAtIElucG9zc2libGUuLi4nXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0J0NhcyBnw6luw6lyYWwgOiBtb2lucyBkZSA3IG51aXRzIGV0IHNhbnMgc2FtZWRpJ1xyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRpZiAoaXNWYWNhbmNlcykge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0J0NhcyBnw6luw6lyYWwgOiBob3JzIFdFIG1vaW5zIGRlIDcgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcyAtIFRhcmlmIHNhbnMgdGVuaXIgY29tcHRlIGR1IHBsYWZvbmQnXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRpZiAobnVpdGVlID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDEgbnVpdCBtYWlzIGVuIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDFcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDFcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gMikge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCAyIG51aXRzIG1haXMgZW4gdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGBNb2lucyBkZSAke2dpdGUublBlcnN9IHBlcnNgKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDJcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDJcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gMykge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCAzIG51aXRzIG1haXMgZW4gdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQzXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDNcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiAzXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgNCBudWl0cyBtYWlzIGVuIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ0XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogNFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA1KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDUgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDVcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ1XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogNVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA2KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDYgbnVpdHMgbWFpcyBlbiB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDZcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ2XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogNlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0F1dHJlcyBjYXMgd2Vlay1lbmQgaW5mw6lyaWV1ciDDoCA3IG51aXRzIC0gUGV1IHByb2JhYmxlLi4uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHQnQ2FzIGfDqW7DqXJhbCA6IGhvcnMgV0UgbW9pbnMgZGUgNyBudWl0cyBtYWlzIGVuIHZhY2FuY2VzIC0gVGFyaWYgYXZlYyBwbGFmb25kJ1xyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRpZiAobnVpdGVlID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDEgbnVpdCBldCBob3JzIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDFcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbiAtXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSkgL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NykgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0MSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDFcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gMikge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCAyIG51aXRzIGV0IGhvcnMgdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQyXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KChnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm1veWVubmVTYWlzb24gLVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UpIC9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcpICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDIgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiAyXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgMyBudWl0cyBldCBob3JzIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0M1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCgoZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uIC1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlKSAvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ3KSAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQzICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogM1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVpdGVlID09PSA0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NhcyBob3JzIHdlZWstZW5kIDQgbnVpdHMgZXQgaG9ycyB2YWNhbmNlcydcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHQvL1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG5iUGVycyA8IGdpdGUublBlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdCAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDRcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoKGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZEZUJhc2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMuYmFzc2VTYWlzb24gK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS5jb2VmZmljaWVudHMubW95ZW5uZVNhaXNvbiAtXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSkgL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NykgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0NCArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4U3VwcGwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICogZ2l0ZS5zdXBwbGVtZW50UGFyUGVycyAqIDRcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG51aXRlZSA9PT0gNSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdDYXMgaG9ycyB3ZWVrLWVuZCA1IG51aXRzIGV0IGhvcnMgdmFjYW5jZXMnXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChuYlBlcnMgPCBnaXRlLm5QZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhUb3RhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXQgKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ1XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KChnaXRlLnRhcmlmUGFyUGVyc1Bhck51aXRmdE1lbmFnZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnRhcmlmRGVCYXNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLmJhc3NlU2Fpc29uICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUuY29lZmZpY2llbnRzLm1veWVubmVTYWlzb24gLVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UpIC9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDcpICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDUgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFN1cHBsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5iUGVycyAqIGdpdGUuc3VwcGxlbWVudFBhclBlcnMgKiA1XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChudWl0ZWUgPT09IDYpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnQ2FzIGhvcnMgd2Vlay1lbmQgNiBudWl0cyBldCBob3JzIHZhY2FuY2VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobmJQZXJzIDwgZ2l0ZS5uUGVycykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcml4VG90YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmJQZXJzICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ICpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UHJpeFRvdGFsKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCgoZ2l0ZS50YXJpZlBhclBlcnNQYXJOdWl0ZnRNZW5hZ2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2l0ZS50YXJpZkRlQmFzZSArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5iYXNzZVNhaXNvbiArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLmNvZWZmaWNpZW50cy5tb3llbm5lU2Fpc29uIC1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlKSAvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ3KSAqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ2ICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdpdGUudGFyaWZQYXJQZXJzUGFyTnVpdGZ0TWVuYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByaXhTdXBwbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYlBlcnMgKiBnaXRlLnN1cHBsZW1lbnRQYXJQZXJzICogNlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnQXV0cmVzIGNhcyBudWl0ID4gNyBldCAhPT0gZGUgMTQgZXQgMjEnKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdHw6lyZXIgY2FzID4zMCBpY2knKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcblx0XHRjb25zb2xlLmxvZyhgTG9jYXRpb24gZHUgJHtkYXRlRGVidXR9IGF1ICR7ZGF0ZUZpbn1gKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cclxuXHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0PElucHV0TGFiZWxcclxuXHRcdFx0XHRcdHNocmlua1xyXG5cdFx0XHRcdFx0aWQ9J2RlbW8tc2ltcGxlLXNlbGVjdC1wbGFjZWhvbGRlci1sYWJlbC1sYWJlbCc+XHJcblx0XHRcdFx0XHRHaXRlXHJcblx0XHRcdFx0PC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0bmFtZT0nZ2l0ZVNlbGVjJ1xyXG5cdFx0XHRcdFx0YXM9e1xyXG5cdFx0XHRcdFx0XHQ8U2VsZWN0IGlkPSdkZWNsZW5jaGV1ci1zZWxlY3QnIGRlZmF1bHRWYWx1ZT0nJz5cclxuXHRcdFx0XHRcdFx0XHR7Z2l0ZXMubWFwKChnaXRlKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9e2dpdGUuc2x1Z30ga2V5PXtnaXRlLnNsdWd9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Z2l0ZS5ub219XHJcblx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHQ8L1NlbGVjdD5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cclxuXHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0PE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyIHV0aWxzPXtEYXRlRm5zVXRpbHN9PlxyXG5cdFx0XHRcdFx0PEtleWJvYXJkRGF0ZVBpY2tlclxyXG5cdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdG1hcmdpbj0nbm9ybWFsJ1xyXG5cdFx0XHRcdFx0XHRpZD0nZGF0ZS1waWNrZXItZGlhbG9nJ1xyXG5cdFx0XHRcdFx0XHRuYW1lPSdkYXRlRGVidXQnXHJcblx0XHRcdFx0XHRcdGxhYmVsPSdEYXRlIGRlIGTDqWJ1dCdcclxuXHRcdFx0XHRcdFx0Zm9ybWF0PSdNTS9kZC95eXl5J1xyXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9JydcclxuXHRcdFx0XHRcdFx0dmFsdWU9e3NlbGVjdGVkRGF0ZURlYnV0fVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlRGF0ZUNoYW5nZURlYnV0fVxyXG5cdFx0XHRcdFx0XHRLZXlib2FyZEJ1dHRvblByb3BzPXt7XHJcblx0XHRcdFx0XHRcdFx0J2FyaWEtbGFiZWwnOiAnY2hhbmdlIGRhdGUnLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxLZXlib2FyZERhdGVQaWNrZXJcclxuXHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHQvLyBkaXNhYmxlVG9vbGJhclxyXG5cdFx0XHRcdFx0XHRuYW1lPSdkYXRlRmluJ1xyXG5cdFx0XHRcdFx0XHRmb3JtYXQ9J01NL2RkL3l5eXknXHJcblx0XHRcdFx0XHRcdG1hcmdpbj0nbm9ybWFsJ1xyXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9JzAyLzI1LzIwMjEnXHJcblx0XHRcdFx0XHRcdGlkPSdkYXRlLXBpY2tlci1pbmxpbmUnXHJcblx0XHRcdFx0XHRcdGxhYmVsPSdEYXRlIGRlIGZpbidcclxuXHRcdFx0XHRcdFx0dmFsdWU9e3NlbGVjdGVkRGF0ZUZpbn1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZURhdGVDaGFuZ2VGaW59XHJcblx0XHRcdFx0XHRcdEtleWJvYXJkQnV0dG9uUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6ICdjaGFuZ2UgZGF0ZScsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXI+XHJcblx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblxyXG5cdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuXHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0bmFtZT0nbmJQZXJzJ1xyXG5cdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRkZWZhdWx0VmFsdWU9JzEwJ1xyXG5cdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0bGFiZWw9J05vbWJyZSBkZSBwZXJzb25uZXMgYXUgdG90YWwnXHJcblx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0Lz5cclxuXHJcblx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRuYW1lPSduYkVuZidcclxuXHRcdFx0XHR0eXBlPSdudW1iZXInXHJcblx0XHRcdFx0ZGVmYXVsdFZhbHVlPScyJ1xyXG5cdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0bGFiZWw9XCJOb21icmUgZCdlbmZhbnRzIC0xOCBhbnNcIlxyXG5cdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG5cdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRuYW1lPSduYkNoaWVuJ1xyXG5cdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRkZWZhdWx0VmFsdWU9JzAnXHJcblx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRsYWJlbD0nQ2hpZW5zICgz4oKsL2ovYW5pbWFsKSdcclxuXHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQvPlxyXG5cclxuXHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdHR5cGU9J3N1Ym1pdCdcclxuXHRcdFx0XHR2YXJpYW50PSdjb250YWluZWQnXHJcblx0XHRcdFx0Y29sb3I9J3ByaW1hcnknXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0Q2FsY3VsZXIgbGUgdGFyaWZcclxuXHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdHtpc1N1Ym1pdGVkICYmIDw+IDwvPn1cclxuXHRcdDwvZm9ybT5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUNhbGN1bFRhcmlmO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9