webpackHotUpdate_N_E("pages/reservation",{

/***/ "./components/reservation/ReservationForm.js":
/*!***************************************************!*\
  !*** ./components/reservation/ReservationForm.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Stepper */ "./node_modules/@material-ui/core/esm/Stepper/index.js");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Step */ "./node_modules/@material-ui/core/esm/Step/index.js");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "./node_modules/@material-ui/core/esm/StepLabel/index.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Check */ "./node_modules/@material-ui/icons/Check.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Settings */ "./node_modules/@material-ui/icons/Settings.js");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_StepConnector__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/StepConnector */ "./node_modules/@material-ui/core/esm/StepConnector/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_House__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/House */ "./node_modules/@material-ui/icons/House.js");
/* harmony import */ var _material_ui_icons_House__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_House__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/EmojiPeople */ "./node_modules/@material-ui/icons/EmojiPeople.js");
/* harmony import */ var _material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/CheckCircle */ "./node_modules/@material-ui/icons/CheckCircle.js");
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-date-range/dist/styles.css */ "./node_modules/react-date-range/dist/styles.css");
/* harmony import */ var react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-date-range/dist/theme/default.css */ "./node_modules/react-date-range/dist/theme/default.css");
/* harmony import */ var react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react_date_range__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-date-range */ "./node_modules/react-date-range/dist/index.js");
/* harmony import */ var react_date_range__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react_date_range__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var _actions_reservationActions__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../actions/reservationActions */ "./actions/reservationActions.js");
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _HOC_Snackbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../HOC/Snackbar */ "./components/HOC/Snackbar.js");





var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\reservation\\ReservationForm.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _this = undefined,
    _s3 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;


















 // main style file

 // theme css file










var QontoConnector = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)'
  },
  active: {
    '& $line': {
      borderColor: '#784af4'
    }
  },
  completed: {
    '& $line': {
      borderColor: '#784af4'
    }
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1
  }
})(_material_ui_core_StepConnector__WEBPACK_IMPORTED_MODULE_14__["default"]);
var useQontoStepIconStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center'
  },
  active: {
    color: '#784af4'
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor'
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18
  }
});

function QontoStepIcon(props) {
  _s();

  var classes = useQontoStepIconStyles();
  var active = props.active,
      completed = props.completed;
  return __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_8__["default"])(classes.root, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, classes.active, active)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 3
    }
  }, completed ? __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default.a, {
    className: classes.completed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }) : __jsx("div", {
    className: classes.circle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }
  }));
}

_s(QontoStepIcon, "zRam3KVaNpVBlW51GPG1kex6cwg=", false, function () {
  return [useQontoStepIconStyles];
});

_c = QontoStepIcon;
QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,

  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool
};
var ColorlibConnector = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])({
  alternativeLabel: {
    top: 22
  },
  active: {
    '& $line': {
      backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)'
    }
  },
  completed: {
    '& $line': {
      backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)'
    }
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1
  }
})(_material_ui_core_StepConnector__WEBPACK_IMPORTED_MODULE_14__["default"]);
var useColorlibStepIconStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  active: {
    backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
  },
  completed: {
    backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)'
  }
});

function ColorlibStepIcon(props) {
  _s2();

  var _clsx2;

  var classes = useColorlibStepIconStyles();
  var active = props.active,
      completed = props.completed;
  var icons = {
    1: __jsx(_material_ui_icons_House__WEBPACK_IMPORTED_MODULE_17___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 6
      }
    }),
    2: __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_13___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 6
      }
    }),
    3: __jsx(_material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_18___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 6
      }
    }),
    4: __jsx(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_19___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 6
      }
    })
  };
  return __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_8__["default"])(classes.root, (_clsx2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_clsx2, classes.active, active), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_clsx2, classes.completed, completed), _clsx2)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 3
    }
  }, icons[String(props.icon)]);
}

_s2(ColorlibStepIcon, "TbUAg343/d/fVF4s63V6GVaUi8k=", false, function () {
  return [useColorlibStepIconStyles];
});

_c2 = ColorlibStepIcon;
ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,

  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,

  /**
   * The label displayed in the step icon.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  return {
    root: {
      width: '100%'
    },
    button: {
      marginRight: theme.spacing(1)
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  };
});

function getSteps() {
  return ['Information sur la location', 'Informations complémentaires', 'Vos coordonnées', 'Récapitulatif'];
}

var ReservationForm = function ReservationForm(_ref) {
  _s3();

  var snackbarShowMessage = _ref.snackbarShowMessage;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      activeStep = _useState[0],
      setActiveStep = _useState[1];

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_20__["useForm"])({
    reValidateMode: 'onChange',
    shouldUnregister: false,
    defaultValues: {
      gite: 'manola',
      nbPers: 10,
      nbEnf: 5,
      nbChien: 1,
      litFait: true,
      newsletter: true,
      nom: 'Lapierre',
      prenom: 'Jossic',
      adresse: '18 rue test',
      cp: '51000',
      ville: 'maVille',
      tel: '06 15 55 55 55',
      mail: 'jossic.lapierre@gmail.com'
    }
  }),
      control = _useForm.control,
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([{
    startDate: new Date(),
    endDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_21__["addDays"])(new Date(), 7),
    key: 'selection'
  }]),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      dateArrivee = _useState3[0],
      setDateArrivee = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var reRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var steps = getSteps();

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      selectedDateArrivee = _useState5[0],
      setSelectedDateArrivee = _useState5[1];

  var handleDateChangeArrivee = function handleDateChangeArrivee(date) {
    setSelectedDateArrivee(date);
    setSelectedDateDepart(date);
  };

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      selectedDateDepart = _useState6[0],
      setSelectedDateDepart = _useState6[1];

  var handleDateChangeDepart = function handleDateChangeDepart(date) {
    setSelectedDateDepart(date);
  };

  var handleNext = function handleNext() {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep + 1;
    });
  };

  var handleBack = function handleBack() {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep - 1;
    });
  };

  var handleReset = function handleReset() {
    setActiveStep(0);
  };

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      gites = _useState7[0],
      setGites = _useState7[1];

  var listDesGites = function listDesGites() {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_5__["listGitesNoms"])().then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        setGites.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(gites).concat([data]));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    listDesGites();
  }, []);

  var infoLoc = function infoLoc() {
    return __jsx("div", {
      className: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 3
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 4
      }
    }, "Informations sur la location"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["InputLabel"], {
      shrink: true,
      id: "demo-simple-select-placeholder-label-label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 6
      }
    }, "R\xE9servation sur le g\xEEte :"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_20__["Controller"], {
      control: control,
      name: "gite",
      as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Select"], {
        id: "gite-select",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 8
        }
      }, gites.map(function (gite, i) {
        return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
          key: gite.slug,
          value: gite.slug,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 333,
            columnNumber: 10
          }
        }, gite.nom);
      })),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 6
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TextField"], {
      inputRef: register,
      name: "nbPers",
      id: "standard-number",
      label: "Nombre de personnes total",
      type: "number",
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TextField"], {
      inputRef: register,
      name: "nbEnf",
      id: "standard-number",
      label: "Dont enfants de moins de 18 ans",
      type: "number",
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 5
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["InputLabel"], {
      shrink: true,
      id: "demo-simple-select-placeholder-label-label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364,
        columnNumber: 5
      }
    }, "Dates de s\xE9jout"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_20__["Controller"], {
      control: control,
      name: "dates",
      as: __jsx(react_date_range__WEBPACK_IMPORTED_MODULE_24__["DateRangePicker"], {
        onChange: function onChange(item) {
          return setState([item.selection]);
        },
        showSelectionPreview: true,
        moveRangeOnFirstSelection: false,
        months: 2,
        ranges: state,
        direction: "horizontal",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373,
          columnNumber: 7
        }
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 5
      }
    })));
  };

  var infoComp = function infoComp() {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 3
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422,
        columnNumber: 4
      }
    }, "Informations suppl\xE9mentaires"), __jsx("div", {
      className: classes.root,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 423,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["FormControl"], {
      component: "fieldset",
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 424,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["FormLabel"], {
      component: "legend",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 427,
        columnNumber: 6
      }
    }, "Merci d'indiquer si vous nous avez d\xE9ja contact\xE9 par :"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["FormGroup"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430,
        columnNumber: 6
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 431,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Checkbox"], {
        name: "contactMail",
        inputRef: register,
        defaultValue: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434,
          columnNumber: 10
        }
      }),
      label: "Mail",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432,
        columnNumber: 8
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Checkbox"], {
        name: "contactTel",
        inputRef: register,
        defaultValue: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444,
          columnNumber: 10
        }
      }),
      label: "T\xE9l\xE9phone",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 442,
        columnNumber: 8
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Checkbox"], {
        name: "contactAbritel",
        inputRef: register,
        defaultValue: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454,
          columnNumber: 10
        }
      }),
      label: "Abritel",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 452,
        columnNumber: 8
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Checkbox"], {
        name: "contactLeboncoin",
        inputRef: register,
        defaultValue: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464,
          columnNumber: 10
        }
      }),
      label: "Leboncoin",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 462,
        columnNumber: 8
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Checkbox"], {
        name: "contactAutre",
        inputRef: register,
        defaultValue: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474,
          columnNumber: 10
        }
      }),
      label: "Autre",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 472,
        columnNumber: 8
      }
    })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 486,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TextField"], {
      inputRef: register,
      name: "nbChien",
      id: "standard-number",
      label: "Nombre de chien ? (3\u20AC/jour/animal)",
      type: "number",
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 487,
        columnNumber: 6
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Switch"], {
        inputRef: register,
        defaultChecked: true,
        name: "litFait",
        color: "primary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499,
          columnNumber: 8
        }
      }),
      label: "Souhaitez-vous l'option lit fait \xE0 l'arriv\xE9e ?",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 497,
        columnNumber: 6
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Switch"], {
        inputRef: register,
        defaultChecked: true,
        name: "newsletter",
        color: "primary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510,
          columnNumber: 8
        }
      }),
      label: "Souscrire \xE0 notre newsletter pour b\xE9n\xE9ficier de remises et offres promotionnelles ?",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 508,
        columnNumber: 6
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      container: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 520,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 521,
        columnNumber: 6
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TextField"], {
      inputRef: register,
      name: "infoCompl",
      id: "standard-number",
      label: "Informations compl\xE9mentaires / Questions :",
      multiline: true,
      rows: 3,
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 522,
        columnNumber: 7
      }
    })))));
  };

  var Coord = function Coord() {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 539,
        columnNumber: 3
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 540,
        columnNumber: 4
      }
    }, "Vos coordonn\xE9es"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 542,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 543,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["InputLabel"], {
      shrink: true,
      id: "demo-simple-select-placeholder-label-label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 544,
        columnNumber: 6
      }
    }, "Civilit\xE9"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_20__["Controller"], {
      control: control,
      name: "civilite",
      as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Select"], {
        id: "civilite-select",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "M. & Mme",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 554,
          columnNumber: 9
        }
      }, "M. & Mme"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "Mme",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 555,
          columnNumber: 9
        }
      }, "Mme"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "Mlle",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 556,
          columnNumber: 9
        }
      }, "Mlle"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "M.",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 557,
          columnNumber: 9
        }
      }, "M."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "Association",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 558,
          columnNumber: 9
        }
      }, "Association"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "Comit\xE9 d'entreprise",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561,
          columnNumber: 9
        }
      }, "Comit\xE9 d'entreprise"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "Soci\xE9t\xE9",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564,
          columnNumber: 9
        }
      }, "Soci\xE9t\xE9"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "Entreprise",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565,
          columnNumber: 9
        }
      }, "Entreprise"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "Foyer de vie",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 568,
          columnNumber: 9
        }
      }, "Foyer de vie"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "Foyer d'accueil",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571,
          columnNumber: 9
        }
      }, "Foyer d'accueil"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "Famille",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 574,
          columnNumber: 9
        }
      }, "Famille"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "Autres",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 575,
          columnNumber: 9
        }
      }, "Autres")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 549,
        columnNumber: 6
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TextField"], {
      inputRef: register,
      name: "nom",
      id: "standard-number",
      label: "Nom",
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 581,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TextField"], {
      inputRef: register,
      name: "prenom",
      id: "standard-number",
      label: "Pr\xE9nom",
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 590,
        columnNumber: 5
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 600,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TextField"], {
      inputRef: register,
      name: "adresse",
      id: "standard-number",
      label: "Adresse",
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 601,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TextField"], {
      inputRef: register,
      name: "cp",
      id: "standard-number",
      label: "Code Postal",
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 610,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TextField"], {
      inputRef: register,
      name: "ville",
      id: "standard-number",
      label: "Ville",
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 619,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 628,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["InputLabel"], {
      shrink: true,
      id: "demo-simple-select-placeholder-label-label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 629,
        columnNumber: 6
      }
    }, "Pays"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_20__["Controller"], {
      control: control,
      name: "pays",
      as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Select"], {
        id: "pays-select",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 639,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "france",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 640,
          columnNumber: 9
        }
      }, "France"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 641,
          columnNumber: 9
        }
      }, "--------"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "autres",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 642,
          columnNumber: 9
        }
      }, "Autres"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "allemagne",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 643,
          columnNumber: 9
        }
      }, "Allemagne"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "angleterre",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 644,
          columnNumber: 9
        }
      }, "Angleterre"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "belgique",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 647,
          columnNumber: 9
        }
      }, "Belgique"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "hollande",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 648,
          columnNumber: 9
        }
      }, "Hollande"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "luxembourg",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 649,
          columnNumber: 9
        }
      }, "Luxembourg"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "suisse",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 652,
          columnNumber: 9
        }
      }, "Suisse")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 635,
        columnNumber: 6
      }
    }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 658,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TextField"], {
      inputRef: register,
      name: "tel",
      id: "standard-number",
      label: "T\xE9l\xE9phone",
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 659,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TextField"], {
      inputRef: register,
      name: "mail",
      id: "standard-number",
      label: "Email",
      type: "mail",
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 668,
        columnNumber: 5
      }
    })));
  };

  var recap = function recap() {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 681,
        columnNumber: 22
      }
    }, "JSON.stringify()");
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return infoLoc();

      case 1:
        return infoComp();

      case 2:
        return Coord();

      case 3:
        return recap();

      default:
        return 'Erreur';
    }
  }

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.next = 3;
              return reRef.current.executeAsync();

            case 3:
              data.token = _context.sent;
              reRef.current.reset();
              console.log('onSubmit data =>', data);
              Object(_actions_reservationActions__WEBPACK_IMPORTED_MODULE_29__["createReservation"])(data).then(function (result) {
                console.log('result vaut =>', result);

                if (result.error) {
                  console.log(result.error);
                  snackbarShowMessage("".concat(result.error));
                  setLoading(false);
                } else if (result.dejaReserveMessage) {
                  snackbarShowMessage("".concat(result.dejaReserveMessage));
                  setLoading(false);
                } else {
                  setLoading(false);
                  snackbarShowMessage("".concat(result.message), 'success'); // setTimeout(() => {
                  // 	Router.push('/');
                  // }, 3000);
                }
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724,
      columnNumber: 3
    }
  }, loading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["CircularProgress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 725,
      columnNumber: 16
    }
  }), __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 727,
      columnNumber: 4
    }
  }, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 728,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    alternativeLabel: true,
    activeStep: activeStep,
    connector: __jsx(ColorlibConnector, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 732,
        columnNumber: 18
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 729,
      columnNumber: 6
    }
  }, steps.map(function (label) {
    return __jsx(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 734,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_11__["default"], {
      StepIconComponent: ColorlibStepIcon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 735,
        columnNumber: 9
      }
    }, label));
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 741,
      columnNumber: 6
    }
  }, activeStep === steps.length ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 743,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.instructions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 745,
      columnNumber: 9
    }
  }, "Votre demande a bien \xE9t\xE9 prise en compte"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onClick: handleReset,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 748,
      columnNumber: 9
    }
  }, "Recommencer")) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 755,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.instructions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 756,
      columnNumber: 9
    }
  }, getStepContent(activeStep)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 759,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    disabled: activeStep === 0,
    onClick: handleBack,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 760,
      columnNumber: 10
    }
  }, "Retour"), activeStep === steps.length - 1 ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    type: "submit",
    variant: "contained",
    color: "primary",
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 767,
      columnNumber: 11
    }
  }, "Valider") : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    variant: "contained",
    color: "primary",
    onClick: handleNext,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 775,
      columnNumber: 11
    }
  }, "Suivant")))), __jsx(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_30__["default"], {
    sitekey: _config__WEBPACK_IMPORTED_MODULE_31__["RECAPTCHA_SECRET_KEY"],
    ref: reRef,
    size: "invisible" // onChange={onChange}
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 787,
      columnNumber: 6
    }
  }))));
};

_s3(ReservationForm, "V2GTEhrLsJUO8dFzJOxUKsNeS78=", false, function () {
  return [useStyles, react_hook_form__WEBPACK_IMPORTED_MODULE_20__["useForm"]];
});

_c3 = ReservationForm;
/* harmony default export */ __webpack_exports__["default"] = (_c4 = Object(_HOC_Snackbar__WEBPACK_IMPORTED_MODULE_32__["withSnackbar"])(ReservationForm));

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "QontoStepIcon");
$RefreshReg$(_c2, "ColorlibStepIcon");
$RefreshReg$(_c3, "ReservationForm");
$RefreshReg$(_c4, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildFormatLongFn;
function buildFormatLongFn(args) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildLocalizeFn;
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var context = options.context ? String(options.context) : 'standalone';

    var valuesArray;
    if (context === 'formatting' && args.formattingValues) {
      valuesArray = args.formattingValues[width] || args.formattingValues[args.defaultFormattingWidth];
    } else {
      valuesArray = args.values[width] || args.values[args.defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildMatchFn;
function buildMatchFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var width = options.width;

    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];

    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];

    var value;
    if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
      value = parsePatterns.findIndex(function (pattern) {
        return pattern.test(string);
      });
    } else {
      value = findKey(parsePatterns, function (pattern) {
        return pattern.test(string);
      });
    }

    value = args.valueCallback ? args.valueCallback(value) : value;
    value = options.valueCallback ? options.valueCallback(value) : value;

    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildMatchPatternFn;
function buildMatchPatternFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};

    var matchResult = string.match(args.matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];

    var parseResult = string.match(args.parsePattern);
    if (!parseResult) {
      return null;
    }
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;

    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatDistance;
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },

  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },

  halfAMinute: 'half a minute',

  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },

  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },

  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },

  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },

  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },

  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },

  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },

  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },

  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },

  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },

  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

function formatDistance(token, count, options) {
  options = options || {};

  var result;
  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};

var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};

var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};

var formatLong = {
  date: (0, _index2.default)({
    formats: dateFormats,
    defaultWidth: 'full'
  }),

  time: (0, _index2.default)({
    formats: timeFormats,
    defaultWidth: 'full'
  }),

  dateTime: (0, _index2.default)({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};

exports.default = formatLong;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatRelative;
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

function formatRelative(token, date, baseDate, options) {
  return formatRelativeLocale[token];
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};

var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};

var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

function ordinalNumber(dirtyNumber, dirtyOptions) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
}

var localize = {
  ordinalNumber: ordinalNumber,

  era: (0, _index2.default)({
    values: eraValues,
    defaultWidth: 'wide'
  }),

  quarter: (0, _index2.default)({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return Number(quarter) - 1;
    }
  }),

  month: (0, _index2.default)({
    values: monthValues,
    defaultWidth: 'wide'
  }),

  day: (0, _index2.default)({
    values: dayValues,
    defaultWidth: 'wide'
  }),

  dayPeriod: (0, _index2.default)({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};

exports.default = localize;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/match/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/locale/_lib/buildMatchFn/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;

var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};

var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};

var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};

var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};

var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};

var match = {
  ordinalNumber: (0, _index2.default)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),

  era: (0, _index4.default)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),

  quarter: (0, _index4.default)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),

  month: (0, _index4.default)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),

  day: (0, _index4.default)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),

  dayPeriod: (0, _index4.default)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};

exports.default = match;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/locale/en-US/_lib/formatLong/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative/index.js");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/locale/en-US/_lib/localize/index.js");

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/locale/en-US/_lib/match/index.js");

var _index10 = _interopRequireDefault(_index9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  formatDistance: _index2.default,
  formatLong: _index4.default,
  formatRelative: _index6.default,
  localize: _index8.default,
  match: _index10.default,
  options: {
    weekStartsOn: 0 /* Sunday */
    , firstWeekContainsDate: 1
  }
};

exports.default = locale;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-date-range/dist/components/Calendar/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-date-range/dist/components/Calendar/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _DayCell = __webpack_require__(/*! ../DayCell */ "./node_modules/react-date-range/dist/components/DayCell/index.js");

var _Month = _interopRequireDefault(__webpack_require__(/*! ../Month */ "./node_modules/react-date-range/dist/components/Month/index.js"));

var _DateInput = _interopRequireDefault(__webpack_require__(/*! ../DateInput */ "./node_modules/react-date-range/dist/components/DateInput/index.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/react-date-range/dist/utils.js");

var _classnames3 = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _reactList = _interopRequireDefault(__webpack_require__(/*! react-list */ "./node_modules/react-list/react-list.js"));

var _shallowEqual = __webpack_require__(/*! shallow-equal */ "./node_modules/shallow-equal/dist/index.esm.js");

var _dateFns = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");

var _enUS = _interopRequireDefault(__webpack_require__(/*! date-fns/locale/en-US */ "./node_modules/date-fns/locale/en-US/index.js"));

var _styles = _interopRequireDefault(__webpack_require__(/*! ../../styles */ "./node_modules/react-date-range/dist/styles.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Calendar =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Calendar, _PureComponent);

  function Calendar(_props, context) {
    var _this;

    _classCallCheck(this, Calendar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Calendar).call(this, _props, context));

    _defineProperty(_assertThisInitialized(_this), "focusToDate", function (date) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props;
      var preventUnnecessary = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (!props.scroll.enabled) {
        _this.setState({
          focusedDate: date
        });

        return;
      }

      var targetMonthIndex = (0, _dateFns.differenceInCalendarMonths)(date, props.minDate, _this.dateOptions);

      var visibleMonths = _this.list.getVisibleRange();

      if (preventUnnecessary && visibleMonths.includes(targetMonthIndex)) return;
      _this.isFirstRender = true;

      _this.list.scrollTo(targetMonthIndex);

      _this.setState({
        focusedDate: date
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateShownDate", function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props;
      var newProps = props.scroll.enabled ? _objectSpread({}, props, {
        months: _this.list.getVisibleRange().length
      }) : props;
      var newFocus = (0, _utils.calcFocusDate)(_this.state.focusedDate, newProps);

      _this.focusToDate(newFocus, newProps);
    });

    _defineProperty(_assertThisInitialized(_this), "updatePreview", function (val) {
      if (!val) {
        _this.setState({
          preview: null
        });

        return;
      }

      var preview = {
        startDate: val,
        endDate: val,
        color: _this.props.color
      };

      _this.setState({
        preview: preview
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeShownDate", function (value) {
      var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'set';
      var focusedDate = _this.state.focusedDate;
      var _this$props = _this.props,
          onShownDateChange = _this$props.onShownDateChange,
          minDate = _this$props.minDate,
          maxDate = _this$props.maxDate;
      var modeMapper = {
        monthOffset: function monthOffset() {
          return (0, _dateFns.addMonths)(focusedDate, value);
        },
        setMonth: function setMonth() {
          return (0, _dateFns.setMonth)(focusedDate, value);
        },
        setYear: function setYear() {
          return (0, _dateFns.setYear)(focusedDate, value);
        },
        set: function set() {
          return value;
        }
      };
      var newDate = (0, _dateFns.min)([(0, _dateFns.max)([modeMapper[mode](), minDate]), maxDate]);

      _this.focusToDate(newDate, _this.props, false);

      onShownDateChange && onShownDateChange(newDate);
    });

    _defineProperty(_assertThisInitialized(_this), "handleRangeFocusChange", function (rangesIndex, rangeItemIndex) {
      _this.props.onRangeFocusChange && _this.props.onRangeFocusChange([rangesIndex, rangeItemIndex]);
    });

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function () {
      var _this$props2 = _this.props,
          onShownDateChange = _this$props2.onShownDateChange,
          minDate = _this$props2.minDate;
      var focusedDate = _this.state.focusedDate;

      var _assertThisInitialize = _assertThisInitialized(_this),
          isFirstRender = _assertThisInitialize.isFirstRender;

      var visibleMonths = _this.list.getVisibleRange(); // prevent scroll jump with wrong visible value


      if (visibleMonths[0] === undefined) return;
      var visibleMonth = (0, _dateFns.addMonths)(minDate, visibleMonths[0] || 0);
      var isFocusedToDifferent = !(0, _dateFns.isSameMonth)(visibleMonth, focusedDate);

      if (isFocusedToDifferent && !isFirstRender) {
        _this.setState({
          focusedDate: visibleMonth
        });

        onShownDateChange && onShownDateChange(visibleMonth);
      }

      _this.isFirstRender = false;
    });

    _defineProperty(_assertThisInitialized(_this), "renderMonthAndYear", function (focusedDate, changeShownDate, props) {
      var showMonthArrow = props.showMonthArrow,
          minDate = props.minDate,
          maxDate = props.maxDate,
          showMonthAndYearPickers = props.showMonthAndYearPickers;
      var upperYearLimit = (maxDate || Calendar.defaultProps.maxDate).getFullYear();
      var lowerYearLimit = (minDate || Calendar.defaultProps.minDate).getFullYear();
      var styles = _this.styles;
      return _react["default"].createElement("div", {
        onMouseUp: function onMouseUp(e) {
          return e.stopPropagation();
        },
        className: styles.monthAndYearWrapper
      }, showMonthArrow ? _react["default"].createElement("button", {
        type: "button",
        className: (0, _classnames3["default"])(styles.nextPrevButton, styles.prevButton),
        onClick: function onClick() {
          return changeShownDate(-1, 'monthOffset');
        }
      }, _react["default"].createElement("i", null)) : null, showMonthAndYearPickers ? _react["default"].createElement("span", {
        className: styles.monthAndYearPickers
      }, _react["default"].createElement("span", {
        className: styles.monthPicker
      }, _react["default"].createElement("select", {
        value: focusedDate.getMonth(),
        onChange: function onChange(e) {
          return changeShownDate(e.target.value, 'setMonth');
        }
      }, _this.state.monthNames.map(function (monthName, i) {
        return _react["default"].createElement("option", {
          key: i,
          value: i
        }, monthName);
      }))), _react["default"].createElement("span", {
        className: styles.monthAndYearDivider
      }), _react["default"].createElement("span", {
        className: styles.yearPicker
      }, _react["default"].createElement("select", {
        value: focusedDate.getFullYear(),
        onChange: function onChange(e) {
          return changeShownDate(e.target.value, 'setYear');
        }
      }, new Array(upperYearLimit - lowerYearLimit + 1).fill(upperYearLimit).map(function (val, i) {
        var year = val - i;
        return _react["default"].createElement("option", {
          key: year,
          value: year
        }, year);
      })))) : _react["default"].createElement("span", {
        className: styles.monthAndYearPickers
      }, _this.state.monthNames[focusedDate.getMonth()], " ", focusedDate.getFullYear()), showMonthArrow ? _react["default"].createElement("button", {
        type: "button",
        className: (0, _classnames3["default"])(styles.nextPrevButton, styles.nextButton),
        onClick: function onClick() {
          return changeShownDate(+1, 'monthOffset');
        }
      }, _react["default"].createElement("i", null)) : null);
    });

    _defineProperty(_assertThisInitialized(_this), "renderDateDisplay", function () {
      var _this$props3 = _this.props,
          focusedRange = _this$props3.focusedRange,
          color = _this$props3.color,
          ranges = _this$props3.ranges,
          rangeColors = _this$props3.rangeColors,
          dateDisplayFormat = _this$props3.dateDisplayFormat,
          editableDateInputs = _this$props3.editableDateInputs,
          startDatePlaceholder = _this$props3.startDatePlaceholder,
          endDatePlaceholder = _this$props3.endDatePlaceholder;
      var defaultColor = rangeColors[focusedRange[0]] || color;
      var styles = _this.styles;
      return _react["default"].createElement("div", {
        className: styles.dateDisplayWrapper
      }, ranges.map(function (range, i) {
        if (range.showDateDisplay === false || range.disabled && !range.showDateDisplay) return null;
        return _react["default"].createElement("div", {
          className: styles.dateDisplay,
          key: i,
          style: {
            color: range.color || defaultColor
          }
        }, _react["default"].createElement(_DateInput["default"], {
          className: (0, _classnames3["default"])(styles.dateDisplayItem, _defineProperty({}, styles.dateDisplayItemActive, focusedRange[0] === i && focusedRange[1] === 0)),
          readOnly: !editableDateInputs,
          disabled: range.disabled,
          value: range.startDate,
          placeholder: startDatePlaceholder,
          dateOptions: _this.dateOptions,
          dateDisplayFormat: dateDisplayFormat,
          onChange: _this.onDragSelectionEnd,
          onFocus: function onFocus() {
            return _this.handleRangeFocusChange(i, 0);
          }
        }), _react["default"].createElement(_DateInput["default"], {
          className: (0, _classnames3["default"])(styles.dateDisplayItem, _defineProperty({}, styles.dateDisplayItemActive, focusedRange[0] === i && focusedRange[1] === 1)),
          readOnly: !editableDateInputs,
          disabled: range.disabled,
          value: range.endDate,
          placeholder: endDatePlaceholder,
          dateOptions: _this.dateOptions,
          dateDisplayFormat: dateDisplayFormat,
          onChange: _this.onDragSelectionEnd,
          onFocus: function onFocus() {
            return _this.handleRangeFocusChange(i, 1);
          }
        }));
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "onDragSelectionStart", function (date) {
      var _this$props4 = _this.props,
          onChange = _this$props4.onChange,
          dragSelectionEnabled = _this$props4.dragSelectionEnabled;

      if (dragSelectionEnabled) {
        _this.setState({
          drag: {
            status: true,
            range: {
              startDate: date,
              endDate: date
            },
            disablePreview: true
          }
        });
      } else {
        onChange && onChange(date);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onDragSelectionEnd", function (date) {
      var _this$props5 = _this.props,
          updateRange = _this$props5.updateRange,
          displayMode = _this$props5.displayMode,
          onChange = _this$props5.onChange,
          dragSelectionEnabled = _this$props5.dragSelectionEnabled;
      if (!dragSelectionEnabled) return;

      if (displayMode === 'date' || !_this.state.drag.status) {
        onChange && onChange(date);
        return;
      }

      var newRange = {
        startDate: _this.state.drag.range.startDate,
        endDate: date
      };

      if (displayMode !== 'dateRange' || (0, _dateFns.isSameDay)(newRange.startDate, date)) {
        _this.setState({
          drag: {
            status: false,
            range: {}
          }
        }, function () {
          return onChange && onChange(date);
        });
      } else {
        _this.setState({
          drag: {
            status: false,
            range: {}
          }
        }, function () {
          updateRange && updateRange(newRange);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onDragSelectionMove", function (date) {
      var drag = _this.state.drag;
      if (!drag.status || !_this.props.dragSelectionEnabled) return;

      _this.setState({
        drag: {
          status: drag.status,
          range: {
            startDate: drag.range.startDate,
            endDate: date
          },
          disablePreview: true
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "estimateMonthSize", function (index, cache) {
      var _this$props6 = _this.props,
          direction = _this$props6.direction,
          minDate = _this$props6.minDate;
      var scrollArea = _this.state.scrollArea;

      if (cache) {
        _this.listSizeCache = cache;
        if (cache[index]) return cache[index];
      }

      if (direction === 'horizontal') return scrollArea.monthWidth;
      var monthStep = (0, _dateFns.addMonths)(minDate, index);

      var _getMonthDisplayRange = (0, _utils.getMonthDisplayRange)(monthStep, _this.dateOptions),
          start = _getMonthDisplayRange.start,
          end = _getMonthDisplayRange.end;

      var isLongMonth = (0, _dateFns.differenceInDays)(end, start, _this.dateOptions) + 1 > 7 * 5;
      return isLongMonth ? scrollArea.longMonthHeight : scrollArea.monthHeight;
    });

    _this.dateOptions = {
      locale: _props.locale
    };
    if (_props.weekStartsOn !== undefined) _this.dateOptions.weekStartsOn = _props.weekStartsOn;
    _this.styles = (0, _utils.generateStyles)([_styles["default"], _props.classNames]);
    _this.listSizeCache = {};
    _this.isFirstRender = true;
    _this.state = {
      monthNames: _this.getMonthNames(),
      focusedDate: (0, _utils.calcFocusDate)(null, _props),
      drag: {
        status: false,
        range: {
          startDate: null,
          endDate: null
        },
        disablePreview: false
      },
      scrollArea: _this.calcScrollArea(_props)
    };
    return _this;
  }

  _createClass(Calendar, [{
    key: "getMonthNames",
    value: function getMonthNames() {
      var _this2 = this;

      return _toConsumableArray(Array(12).keys()).map(function (i) {
        return _this2.props.locale.localize.month(i);
      });
    }
  }, {
    key: "calcScrollArea",
    value: function calcScrollArea(props) {
      var direction = props.direction,
          months = props.months,
          scroll = props.scroll;
      if (!scroll.enabled) return {
        enabled: false
      };
      var longMonthHeight = scroll.longMonthHeight || scroll.monthHeight;

      if (direction === 'vertical') {
        return {
          enabled: true,
          monthHeight: scroll.monthHeight || 220,
          longMonthHeight: longMonthHeight || 260,
          calendarWidth: 'auto',
          calendarHeight: (scroll.calendarHeight || longMonthHeight || 240) * months
        };
      }

      return {
        enabled: true,
        monthWidth: scroll.monthWidth || 332,
        calendarWidth: (scroll.calendarWidth || scroll.monthWidth || 332) * months,
        monthHeight: longMonthHeight || 300,
        calendarHeight: longMonthHeight || 300
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      if (this.props.scroll.enabled) {
        // prevent react-list's initial render focus problem
        setTimeout(function () {
          return _this3.focusToDate(_this3.state.focusedDate);
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var propMapper = {
        dateRange: 'ranges',
        date: 'date'
      };
      var targetProp = propMapper[this.props.displayMode];

      if (this.props[targetProp] !== prevProps[targetProp]) {
        this.updateShownDate(this.props);
      }

      if (prevProps.locale !== this.props.locale || prevProps.weekStartsOn !== this.props.weekStartsOn) {
        this.dateOptions = {
          locale: this.props.locale
        };
        if (this.props.weekStartsOn !== undefined) this.dateOptions.weekStartsOn = this.props.weekStartsOn;
        this.setState({
          monthNames: this.getMonthNames()
        });
      }

      if (!(0, _shallowEqual.shallowEqualObjects)(prevProps.scroll, this.props.scroll)) {
        this.setState({
          scrollArea: this.calcScrollArea(this.props)
        });
      }
    }
  }, {
    key: "renderWeekdays",
    value: function renderWeekdays() {
      var _this4 = this;

      var now = new Date();
      return _react["default"].createElement("div", {
        className: this.styles.weekDays
      }, (0, _dateFns.eachDayOfInterval)({
        start: (0, _dateFns.startOfWeek)(now, this.dateOptions),
        end: (0, _dateFns.endOfWeek)(now, this.dateOptions)
      }).map(function (day, i) {
        return _react["default"].createElement("span", {
          className: _this4.styles.weekDay,
          key: i
        }, (0, _dateFns.format)(day, _this4.props.weekdayDisplayFormat, _this4.dateOptions));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props7 = this.props,
          showDateDisplay = _this$props7.showDateDisplay,
          onPreviewChange = _this$props7.onPreviewChange,
          scroll = _this$props7.scroll,
          direction = _this$props7.direction,
          disabledDates = _this$props7.disabledDates,
          disabledDay = _this$props7.disabledDay,
          maxDate = _this$props7.maxDate,
          minDate = _this$props7.minDate,
          rangeColors = _this$props7.rangeColors,
          color = _this$props7.color,
          navigatorRenderer = _this$props7.navigatorRenderer,
          className = _this$props7.className,
          preview = _this$props7.preview;
      var _this$state = this.state,
          scrollArea = _this$state.scrollArea,
          focusedDate = _this$state.focusedDate;
      var isVertical = direction === 'vertical';
      var monthAndYearRenderer = navigatorRenderer || this.renderMonthAndYear;
      var ranges = this.props.ranges.map(function (range, i) {
        return _objectSpread({}, range, {
          color: range.color || rangeColors[i] || color
        });
      });
      return _react["default"].createElement("div", {
        className: (0, _classnames3["default"])(this.styles.calendarWrapper, className),
        onMouseUp: function onMouseUp() {
          return _this5.setState({
            drag: {
              status: false,
              range: {}
            }
          });
        },
        onMouseLeave: function onMouseLeave() {
          _this5.setState({
            drag: {
              status: false,
              range: {}
            }
          });
        }
      }, showDateDisplay && this.renderDateDisplay(), monthAndYearRenderer(focusedDate, this.changeShownDate, this.props), scroll.enabled ? _react["default"].createElement("div", null, isVertical && this.renderWeekdays(this.dateOptions), _react["default"].createElement("div", {
        className: (0, _classnames3["default"])(this.styles.infiniteMonths, isVertical ? this.styles.monthsVertical : this.styles.monthsHorizontal),
        onMouseLeave: function onMouseLeave() {
          return onPreviewChange && onPreviewChange();
        },
        style: {
          width: scrollArea.calendarWidth + 11,
          height: scrollArea.calendarHeight + 11
        },
        onScroll: this.handleScroll
      }, _react["default"].createElement(_reactList["default"], {
        length: (0, _dateFns.differenceInCalendarMonths)((0, _dateFns.endOfMonth)(maxDate), (0, _dateFns.addDays)((0, _dateFns.startOfMonth)(minDate), -1), this.dateOptions),
        treshold: 500,
        type: "variable",
        ref: function ref(target) {
          return _this5.list = target;
        },
        itemSizeEstimator: this.estimateMonthSize,
        axis: isVertical ? 'y' : 'x',
        itemRenderer: function itemRenderer(index, key) {
          var monthStep = (0, _dateFns.addMonths)(minDate, index);
          return _react["default"].createElement(_Month["default"], _extends({}, _this5.props, {
            onPreviewChange: onPreviewChange || _this5.updatePreview,
            preview: preview || _this5.state.preview,
            ranges: ranges,
            key: key,
            drag: _this5.state.drag,
            dateOptions: _this5.dateOptions,
            disabledDates: disabledDates,
            disabledDay: disabledDay,
            month: monthStep,
            onDragSelectionStart: _this5.onDragSelectionStart,
            onDragSelectionEnd: _this5.onDragSelectionEnd,
            onDragSelectionMove: _this5.onDragSelectionMove,
            onMouseLeave: function onMouseLeave() {
              return onPreviewChange && onPreviewChange();
            },
            styles: _this5.styles,
            style: isVertical ? {
              height: _this5.estimateMonthSize(index)
            } : {
              height: scrollArea.monthHeight,
              width: _this5.estimateMonthSize(index)
            },
            showMonthName: true,
            showWeekDays: !isVertical
          }));
        }
      }))) : _react["default"].createElement("div", {
        className: (0, _classnames3["default"])(this.styles.months, isVertical ? this.styles.monthsVertical : this.styles.monthsHorizontal)
      }, new Array(this.props.months).fill(null).map(function (_, i) {
        var monthStep = (0, _dateFns.addMonths)(_this5.state.focusedDate, i);
        return _react["default"].createElement(_Month["default"], _extends({}, _this5.props, {
          onPreviewChange: onPreviewChange || _this5.updatePreview,
          preview: preview || _this5.state.preview,
          ranges: ranges,
          key: i,
          drag: _this5.state.drag,
          dateOptions: _this5.dateOptions,
          disabledDates: disabledDates,
          disabledDay: disabledDay,
          month: monthStep,
          onDragSelectionStart: _this5.onDragSelectionStart,
          onDragSelectionEnd: _this5.onDragSelectionEnd,
          onDragSelectionMove: _this5.onDragSelectionMove,
          onMouseLeave: function onMouseLeave() {
            return onPreviewChange && onPreviewChange();
          },
          styles: _this5.styles,
          showWeekDays: !isVertical || i === 0,
          showMonthName: !isVertical || i > 0
        }));
      })));
    }
  }]);

  return Calendar;
}(_react.PureComponent);

Calendar.defaultProps = {
  showMonthArrow: true,
  showMonthAndYearPickers: true,
  disabledDates: [],
  disabledDay: function disabledDay() {},
  classNames: {},
  locale: _enUS["default"],
  ranges: [],
  focusedRange: [0, 0],
  dateDisplayFormat: 'MMM d, yyyy',
  monthDisplayFormat: 'MMM yyyy',
  weekdayDisplayFormat: 'E',
  dayDisplayFormat: 'd',
  showDateDisplay: true,
  showPreview: true,
  displayMode: 'date',
  months: 1,
  color: '#3d91ff',
  scroll: {
    enabled: false
  },
  direction: 'vertical',
  maxDate: (0, _dateFns.addYears)(new Date(), 20),
  minDate: (0, _dateFns.addYears)(new Date(), -100),
  rangeColors: ['#3d91ff', '#3ecf8e', '#fed14c'],
  startDatePlaceholder: 'Early',
  endDatePlaceholder: 'Continuous',
  editableDateInputs: false,
  dragSelectionEnabled: true,
  fixedHeight: false
};
Calendar.propTypes = {
  showMonthArrow: _propTypes["default"].bool,
  showMonthAndYearPickers: _propTypes["default"].bool,
  disabledDates: _propTypes["default"].array,
  disabledDay: _propTypes["default"].func,
  minDate: _propTypes["default"].object,
  maxDate: _propTypes["default"].object,
  date: _propTypes["default"].object,
  onChange: _propTypes["default"].func,
  onPreviewChange: _propTypes["default"].func,
  onRangeFocusChange: _propTypes["default"].func,
  classNames: _propTypes["default"].object,
  locale: _propTypes["default"].object,
  shownDate: _propTypes["default"].object,
  onShownDateChange: _propTypes["default"].func,
  ranges: _propTypes["default"].arrayOf(_DayCell.rangeShape),
  preview: _propTypes["default"].shape({
    startDate: _propTypes["default"].object,
    endDate: _propTypes["default"].object,
    color: _propTypes["default"].string
  }),
  dateDisplayFormat: _propTypes["default"].string,
  monthDisplayFormat: _propTypes["default"].string,
  weekdayDisplayFormat: _propTypes["default"].string,
  weekStartsOn: _propTypes["default"].number,
  dayDisplayFormat: _propTypes["default"].string,
  focusedRange: _propTypes["default"].arrayOf(_propTypes["default"].number),
  initialFocusedRange: _propTypes["default"].arrayOf(_propTypes["default"].number),
  months: _propTypes["default"].number,
  className: _propTypes["default"].string,
  showDateDisplay: _propTypes["default"].bool,
  showPreview: _propTypes["default"].bool,
  displayMode: _propTypes["default"].oneOf(['dateRange', 'date']),
  color: _propTypes["default"].string,
  updateRange: _propTypes["default"].func,
  scroll: _propTypes["default"].shape({
    enabled: _propTypes["default"].bool,
    monthHeight: _propTypes["default"].number,
    longMonthHeight: _propTypes["default"].number,
    monthWidth: _propTypes["default"].number,
    calendarWidth: _propTypes["default"].number,
    calendarHeight: _propTypes["default"].number
  }),
  direction: _propTypes["default"].oneOf(['vertical', 'horizontal']),
  startDatePlaceholder: _propTypes["default"].string,
  endDatePlaceholder: _propTypes["default"].string,
  navigatorRenderer: _propTypes["default"].func,
  rangeColors: _propTypes["default"].arrayOf(_propTypes["default"].string),
  editableDateInputs: _propTypes["default"].bool,
  dragSelectionEnabled: _propTypes["default"].bool,
  fixedHeight: _propTypes["default"].bool
};
var _default = Calendar;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-date-range/dist/components/DateInput/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-date-range/dist/components/DateInput/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _dateFns = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DateInput =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DateInput, _PureComponent);

  function DateInput(props, context) {
    var _this;

    _classCallCheck(this, DateInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateInput).call(this, props, context));

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (e) {
      var value = _this.state.value;

      if (e.key === 'Enter') {
        _this.update(value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      _this.setState({
        value: e.target.value,
        changed: true,
        invalid: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function () {
      var value = _this.state.value;

      _this.update(value);
    });

    _this.state = {
      invalid: false,
      changed: false,
      value: _this.formatDate(props)
    };
    return _this;
  }

  _createClass(DateInput, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var value = prevProps.value;

      if (!(0, _dateFns.isEqual)(value, this.props.value)) {
        this.setState({
          value: this.formatDate(this.props)
        });
      }
    }
  }, {
    key: "formatDate",
    value: function formatDate(_ref) {
      var value = _ref.value,
          dateDisplayFormat = _ref.dateDisplayFormat,
          dateOptions = _ref.dateOptions;

      if (value && (0, _dateFns.isValid)(value)) {
        return (0, _dateFns.format)(value, dateDisplayFormat, dateOptions);
      }

      return '';
    }
  }, {
    key: "update",
    value: function update(value) {
      var _this$state = this.state,
          invalid = _this$state.invalid,
          changed = _this$state.changed;

      if (invalid || !changed || !value) {
        return;
      }

      var _this$props = this.props,
          onChange = _this$props.onChange,
          dateDisplayFormat = _this$props.dateDisplayFormat,
          dateOptions = _this$props.dateOptions;
      var parsed = (0, _dateFns.parse)(value, dateDisplayFormat, new Date(), dateOptions);

      if ((0, _dateFns.isValid)(parsed)) {
        this.setState({
          changed: false
        }, function () {
          return onChange(parsed);
        });
      } else {
        this.setState({
          invalid: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          readOnly = _this$props2.readOnly,
          placeholder = _this$props2.placeholder,
          disabled = _this$props2.disabled,
          onFocus = _this$props2.onFocus;
      var _this$state2 = this.state,
          value = _this$state2.value,
          invalid = _this$state2.invalid;
      return _react["default"].createElement("span", {
        className: (0, _classnames["default"])('rdrDateInput', className)
      }, _react["default"].createElement("input", {
        readOnly: readOnly,
        disabled: disabled,
        value: value,
        placeholder: placeholder,
        onKeyDown: this.onKeyDown,
        onChange: this.onChange,
        onBlur: this.onBlur,
        onFocus: onFocus
      }), invalid && _react["default"].createElement("span", {
        className: "rdrWarning"
      }, "\u26A0"));
    }
  }]);

  return DateInput;
}(_react.PureComponent);

DateInput.propTypes = {
  value: _propTypes["default"].object,
  placeholder: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  dateOptions: _propTypes["default"].object,
  dateDisplayFormat: _propTypes["default"].string,
  className: _propTypes["default"].string,
  onFocus: _propTypes["default"].func.isRequired,
  onChange: _propTypes["default"].func.isRequired
};
DateInput.defaultProps = {
  readOnly: true,
  disabled: false,
  dateDisplayFormat: 'MMM D, YYYY'
};
var _default = DateInput;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-date-range/dist/components/DateRange/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-date-range/dist/components/DateRange/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Calendar = _interopRequireDefault(__webpack_require__(/*! ../Calendar */ "./node_modules/react-date-range/dist/components/Calendar/index.js"));

var _DayCell = __webpack_require__(/*! ../DayCell */ "./node_modules/react-date-range/dist/components/DayCell/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/react-date-range/dist/utils.js");

var _dateFns = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _styles = _interopRequireDefault(__webpack_require__(/*! ../../styles */ "./node_modules/react-date-range/dist/styles.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DateRange =
/*#__PURE__*/
function (_Component) {
  _inherits(DateRange, _Component);

  function DateRange(props, context) {
    var _this;

    _classCallCheck(this, DateRange);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateRange).call(this, props, context));

    _defineProperty(_assertThisInitialized(_this), "calcNewSelection", function (value) {
      var isSingleValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var focusedRange = _this.props.focusedRange || _this.state.focusedRange;
      var _this$props = _this.props,
          ranges = _this$props.ranges,
          onChange = _this$props.onChange,
          maxDate = _this$props.maxDate,
          moveRangeOnFirstSelection = _this$props.moveRangeOnFirstSelection,
          disabledDates = _this$props.disabledDates;
      var focusedRangeIndex = focusedRange[0];
      var selectedRange = ranges[focusedRangeIndex];
      if (!selectedRange || !onChange) return {};
      var startDate = selectedRange.startDate,
          endDate = selectedRange.endDate;
      if (!endDate) endDate = new Date(startDate);
      var nextFocusRange;

      if (!isSingleValue) {
        startDate = value.startDate;
        endDate = value.endDate;
      } else if (focusedRange[1] === 0) {
        // startDate selection
        var dayOffset = (0, _dateFns.differenceInCalendarDays)(endDate, startDate);
        startDate = value;
        endDate = moveRangeOnFirstSelection ? (0, _dateFns.addDays)(value, dayOffset) : value;
        if (maxDate) endDate = (0, _dateFns.min)([endDate, maxDate]);
        nextFocusRange = [focusedRange[0], 1];
      } else {
        endDate = value;
      } // reverse dates if startDate before endDate


      var isStartDateSelected = focusedRange[1] === 0;

      if ((0, _dateFns.isBefore)(endDate, startDate)) {
        isStartDateSelected = !isStartDateSelected;
        var _ref = [endDate, startDate];
        startDate = _ref[0];
        endDate = _ref[1];
      }

      var inValidDatesWithinRange = disabledDates.filter(function (disabledDate) {
        return (0, _dateFns.isWithinInterval)(disabledDate, {
          start: startDate,
          end: endDate
        });
      });

      if (inValidDatesWithinRange.length > 0) {
        if (isStartDateSelected) {
          startDate = (0, _dateFns.addDays)((0, _dateFns.max)(inValidDatesWithinRange), 1);
        } else {
          endDate = (0, _dateFns.addDays)((0, _dateFns.min)(inValidDatesWithinRange), -1);
        }
      }

      if (!nextFocusRange) {
        var nextFocusRangeIndex = (0, _utils.findNextRangeIndex)(_this.props.ranges, focusedRange[0]);
        nextFocusRange = [nextFocusRangeIndex, 0];
      }

      return {
        wasValid: !(inValidDatesWithinRange.length > 0),
        range: {
          startDate: startDate,
          endDate: endDate
        },
        nextFocusRange: nextFocusRange
      };
    });

    _defineProperty(_assertThisInitialized(_this), "setSelection", function (value, isSingleValue) {
      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          ranges = _this$props2.ranges,
          onRangeFocusChange = _this$props2.onRangeFocusChange;
      var focusedRange = _this.props.focusedRange || _this.state.focusedRange;
      var focusedRangeIndex = focusedRange[0];
      var selectedRange = ranges[focusedRangeIndex];
      if (!selectedRange) return;

      var newSelection = _this.calcNewSelection(value, isSingleValue);

      onChange(_defineProperty({}, selectedRange.key || "range".concat(focusedRangeIndex + 1), _objectSpread({}, selectedRange, {}, newSelection.range)));

      _this.setState({
        focusedRange: newSelection.nextFocusRange,
        preview: null
      });

      onRangeFocusChange && onRangeFocusChange(newSelection.nextFocusRange);
    });

    _defineProperty(_assertThisInitialized(_this), "handleRangeFocusChange", function (focusedRange) {
      _this.setState({
        focusedRange: focusedRange
      });

      _this.props.onRangeFocusChange && _this.props.onRangeFocusChange(focusedRange);
    });

    _defineProperty(_assertThisInitialized(_this), "updatePreview", function (val) {
      if (!val) {
        _this.setState({
          preview: null
        });

        return;
      }

      var _this$props3 = _this.props,
          rangeColors = _this$props3.rangeColors,
          ranges = _this$props3.ranges;
      var focusedRange = _this.props.focusedRange || _this.state.focusedRange;
      var color = ranges[focusedRange[0]].color || rangeColors[focusedRange[0]] || color;

      _this.setState({
        preview: _objectSpread({}, val.range, {
          color: color
        })
      });
    });

    _this.state = {
      focusedRange: props.initialFocusedRange || [(0, _utils.findNextRangeIndex)(props.ranges), 0],
      preview: null
    };
    _this.styles = (0, _utils.generateStyles)([_styles["default"], props.classNames]);
    return _this;
  }

  _createClass(DateRange, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement(_Calendar["default"], _extends({
        focusedRange: this.state.focusedRange,
        onRangeFocusChange: this.handleRangeFocusChange,
        preview: this.state.preview,
        onPreviewChange: function onPreviewChange(value) {
          _this2.updatePreview(value ? _this2.calcNewSelection(value) : null);
        }
      }, this.props, {
        displayMode: "dateRange",
        className: (0, _classnames["default"])(this.styles.dateRangeWrapper, this.props.className),
        onChange: this.setSelection,
        updateRange: function updateRange(val) {
          return _this2.setSelection(val, false);
        },
        ref: function ref(target) {
          _this2.calendar = target;
        }
      }));
    }
  }]);

  return DateRange;
}(_react.Component);

DateRange.defaultProps = {
  classNames: {},
  ranges: [],
  moveRangeOnFirstSelection: false,
  rangeColors: ['#3d91ff', '#3ecf8e', '#fed14c'],
  disabledDates: []
};
DateRange.propTypes = _objectSpread({}, _Calendar["default"].propTypes, {
  onChange: _propTypes["default"].func,
  onRangeFocusChange: _propTypes["default"].func,
  className: _propTypes["default"].string,
  ranges: _propTypes["default"].arrayOf(_DayCell.rangeShape),
  moveRangeOnFirstSelection: _propTypes["default"].bool
});
var _default = DateRange;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-date-range/dist/components/DateRangePicker/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-date-range/dist/components/DateRangePicker/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _DateRange = _interopRequireDefault(__webpack_require__(/*! ../DateRange */ "./node_modules/react-date-range/dist/components/DateRange/index.js"));

var _DefinedRange = _interopRequireDefault(__webpack_require__(/*! ../DefinedRange */ "./node_modules/react-date-range/dist/components/DefinedRange/index.js"));

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/react-date-range/dist/utils.js");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _styles = _interopRequireDefault(__webpack_require__(/*! ../../styles */ "./node_modules/react-date-range/dist/styles.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DateRangePicker =
/*#__PURE__*/
function (_Component) {
  _inherits(DateRangePicker, _Component);

  function DateRangePicker(props) {
    var _this;

    _classCallCheck(this, DateRangePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateRangePicker).call(this, props));
    _this.state = {
      focusedRange: [(0, _utils.findNextRangeIndex)(props.ranges), 0]
    };
    _this.styles = (0, _utils.generateStyles)([_styles["default"], props.classNames]);
    return _this;
  }

  _createClass(DateRangePicker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var focusedRange = this.state.focusedRange;
      return _react["default"].createElement("div", {
        className: (0, _classnames["default"])(this.styles.dateRangePickerWrapper, this.props.className)
      }, _react["default"].createElement(_DefinedRange["default"], _extends({
        focusedRange: focusedRange,
        onPreviewChange: function onPreviewChange(value) {
          return _this2.dateRange.updatePreview(value ? _this2.dateRange.calcNewSelection(value, typeof value === 'string') : null);
        }
      }, this.props, {
        range: this.props.ranges[focusedRange[0]],
        className: undefined
      })), _react["default"].createElement(_DateRange["default"], _extends({
        onRangeFocusChange: function onRangeFocusChange(focusedRange) {
          return _this2.setState({
            focusedRange: focusedRange
          });
        },
        focusedRange: focusedRange
      }, this.props, {
        ref: function ref(t) {
          return _this2.dateRange = t;
        },
        className: undefined
      })));
    }
  }]);

  return DateRangePicker;
}(_react.Component);

DateRangePicker.defaultProps = {};
DateRangePicker.propTypes = _objectSpread({}, _DateRange["default"].propTypes, {}, _DefinedRange["default"].propTypes, {
  className: _propTypes["default"].string
});
var _default = DateRangePicker;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-date-range/dist/components/DayCell/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-date-range/dist/components/DayCell/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.rangeShape = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames4 = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _dateFns = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DayCell =
/*#__PURE__*/
function (_Component) {
  _inherits(DayCell, _Component);

  function DayCell(props, context) {
    var _this;

    _classCallCheck(this, DayCell);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DayCell).call(this, props, context));

    _defineProperty(_assertThisInitialized(_this), "handleKeyEvent", function (event) {
      var _this$props = _this.props,
          day = _this$props.day,
          onMouseDown = _this$props.onMouseDown,
          onMouseUp = _this$props.onMouseUp;

      if ([13
      /* space */
      , 32
      /* enter */
      ].includes(event.keyCode)) {
        if (event.type === 'keydown') onMouseDown(day);else onMouseUp(day);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseEvent", function (event) {
      var _this$props2 = _this.props,
          day = _this$props2.day,
          disabled = _this$props2.disabled,
          onPreviewChange = _this$props2.onPreviewChange,
          onMouseEnter = _this$props2.onMouseEnter,
          onMouseDown = _this$props2.onMouseDown,
          onMouseUp = _this$props2.onMouseUp;
      var stateChanges = {};

      if (disabled) {
        onPreviewChange();
        return;
      }

      switch (event.type) {
        case 'mouseenter':
          onMouseEnter(day);
          onPreviewChange(day);
          stateChanges.hover = true;
          break;

        case 'blur':
        case 'mouseleave':
          stateChanges.hover = false;
          break;

        case 'mousedown':
          stateChanges.active = true;
          onMouseDown(day);
          break;

        case 'mouseup':
          event.stopPropagation();
          stateChanges.active = false;
          onMouseUp(day);
          break;

        case 'focus':
          onPreviewChange(day);
          break;
      }

      if (Object.keys(stateChanges).length) {
        _this.setState(stateChanges);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getClassNames", function () {
      var _classnames;

      var _this$props3 = _this.props,
          isPassive = _this$props3.isPassive,
          isToday = _this$props3.isToday,
          isWeekend = _this$props3.isWeekend,
          isStartOfWeek = _this$props3.isStartOfWeek,
          isEndOfWeek = _this$props3.isEndOfWeek,
          isStartOfMonth = _this$props3.isStartOfMonth,
          isEndOfMonth = _this$props3.isEndOfMonth,
          disabled = _this$props3.disabled,
          styles = _this$props3.styles;
      return (0, _classnames4["default"])(styles.day, (_classnames = {}, _defineProperty(_classnames, styles.dayPassive, isPassive), _defineProperty(_classnames, styles.dayDisabled, disabled), _defineProperty(_classnames, styles.dayToday, isToday), _defineProperty(_classnames, styles.dayWeekend, isWeekend), _defineProperty(_classnames, styles.dayStartOfWeek, isStartOfWeek), _defineProperty(_classnames, styles.dayEndOfWeek, isEndOfWeek), _defineProperty(_classnames, styles.dayStartOfMonth, isStartOfMonth), _defineProperty(_classnames, styles.dayEndOfMonth, isEndOfMonth), _defineProperty(_classnames, styles.dayHovered, _this.state.hover), _defineProperty(_classnames, styles.dayActive, _this.state.active), _classnames));
    });

    _defineProperty(_assertThisInitialized(_this), "renderPreviewPlaceholder", function () {
      var _classnames2;

      var _this$props4 = _this.props,
          preview = _this$props4.preview,
          day = _this$props4.day,
          styles = _this$props4.styles;
      if (!preview) return null;
      var startDate = preview.startDate ? (0, _dateFns.endOfDay)(preview.startDate) : null;
      var endDate = preview.endDate ? (0, _dateFns.startOfDay)(preview.endDate) : null;
      var isInRange = (!startDate || (0, _dateFns.isAfter)(day, startDate)) && (!endDate || (0, _dateFns.isBefore)(day, endDate));
      var isStartEdge = !isInRange && (0, _dateFns.isSameDay)(day, startDate);
      var isEndEdge = !isInRange && (0, _dateFns.isSameDay)(day, endDate);
      return _react["default"].createElement("span", {
        className: (0, _classnames4["default"])((_classnames2 = {}, _defineProperty(_classnames2, styles.dayStartPreview, isStartEdge), _defineProperty(_classnames2, styles.dayInPreview, isInRange), _defineProperty(_classnames2, styles.dayEndPreview, isEndEdge), _classnames2)),
        style: {
          color: preview.color
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderSelectionPlaceholders", function () {
      var _this$props5 = _this.props,
          styles = _this$props5.styles,
          ranges = _this$props5.ranges,
          day = _this$props5.day;

      if (_this.props.displayMode === 'date') {
        var isSelected = (0, _dateFns.isSameDay)(_this.props.day, _this.props.date);
        return isSelected ? _react["default"].createElement("span", {
          className: styles.selected,
          style: {
            color: _this.props.color
          }
        }) : null;
      }

      var inRanges = ranges.reduce(function (result, range) {
        var startDate = range.startDate;
        var endDate = range.endDate;

        if (startDate && endDate && (0, _dateFns.isBefore)(endDate, startDate)) {
          var _ref = [endDate, startDate];
          startDate = _ref[0];
          endDate = _ref[1];
        }

        startDate = startDate ? (0, _dateFns.endOfDay)(startDate) : null;
        endDate = endDate ? (0, _dateFns.startOfDay)(endDate) : null;
        var isInRange = (!startDate || (0, _dateFns.isAfter)(day, startDate)) && (!endDate || (0, _dateFns.isBefore)(day, endDate));
        var isStartEdge = !isInRange && (0, _dateFns.isSameDay)(day, startDate);
        var isEndEdge = !isInRange && (0, _dateFns.isSameDay)(day, endDate);

        if (isInRange || isStartEdge || isEndEdge) {
          return [].concat(_toConsumableArray(result), [_objectSpread({
            isStartEdge: isStartEdge,
            isEndEdge: isEndEdge,
            isInRange: isInRange
          }, range)]);
        }

        return result;
      }, []);
      return inRanges.map(function (range, i) {
        var _classnames3;

        return _react["default"].createElement("span", {
          key: i,
          className: (0, _classnames4["default"])((_classnames3 = {}, _defineProperty(_classnames3, styles.startEdge, range.isStartEdge), _defineProperty(_classnames3, styles.endEdge, range.isEndEdge), _defineProperty(_classnames3, styles.inRange, range.isInRange), _classnames3)),
          style: {
            color: range.color || _this.props.color
          }
        });
      });
    });

    _this.state = {
      hover: false,
      active: false
    };
    return _this;
  }

  _createClass(DayCell, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("button", _extends({
        type: "button",
        onMouseEnter: this.handleMouseEvent,
        onMouseLeave: this.handleMouseEvent,
        onFocus: this.handleMouseEvent,
        onMouseDown: this.handleMouseEvent,
        onMouseUp: this.handleMouseEvent,
        onBlur: this.handleMouseEvent,
        onPauseCapture: this.handleMouseEvent,
        onKeyDown: this.handleKeyEvent,
        onKeyUp: this.handleKeyEvent,
        className: this.getClassNames(this.props.styles)
      }, this.props.disabled || this.props.isPassive ? {
        tabIndex: -1
      } : {}, {
        style: {
          color: this.props.color
        }
      }), this.renderSelectionPlaceholders(), this.renderPreviewPlaceholder(), _react["default"].createElement("span", {
        className: this.props.styles.dayNumber
      }, _react["default"].createElement("span", null, (0, _dateFns.format)(this.props.day, this.props.dayDisplayFormat))));
    }
  }]);

  return DayCell;
}(_react.Component);

DayCell.defaultProps = {};

var rangeShape = _propTypes["default"].shape({
  startDate: _propTypes["default"].object,
  endDate: _propTypes["default"].object,
  color: _propTypes["default"].string,
  key: _propTypes["default"].string,
  autoFocus: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  showDateDisplay: _propTypes["default"].bool
});

exports.rangeShape = rangeShape;
DayCell.propTypes = {
  day: _propTypes["default"].object.isRequired,
  dayDisplayFormat: _propTypes["default"].string,
  date: _propTypes["default"].object,
  ranges: _propTypes["default"].arrayOf(rangeShape),
  preview: _propTypes["default"].shape({
    startDate: _propTypes["default"].object,
    endDate: _propTypes["default"].object,
    color: _propTypes["default"].string
  }),
  onPreviewChange: _propTypes["default"].func,
  previewColor: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  isPassive: _propTypes["default"].bool,
  isToday: _propTypes["default"].bool,
  isWeekend: _propTypes["default"].bool,
  isStartOfWeek: _propTypes["default"].bool,
  isEndOfWeek: _propTypes["default"].bool,
  isStartOfMonth: _propTypes["default"].bool,
  isEndOfMonth: _propTypes["default"].bool,
  color: _propTypes["default"].string,
  displayMode: _propTypes["default"].oneOf(['dateRange', 'date']),
  styles: _propTypes["default"].object,
  onMouseDown: _propTypes["default"].func,
  onMouseUp: _propTypes["default"].func,
  onMouseEnter: _propTypes["default"].func
};
var _default = DayCell;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-date-range/dist/components/DefinedRange/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-date-range/dist/components/DefinedRange/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _styles = _interopRequireDefault(__webpack_require__(/*! ../../styles */ "./node_modules/react-date-range/dist/styles.js"));

var _defaultRanges = __webpack_require__(/*! ../../defaultRanges */ "./node_modules/react-date-range/dist/defaultRanges.js");

var _DayCell = __webpack_require__(/*! ../DayCell */ "./node_modules/react-date-range/dist/components/DayCell/index.js");

var _InputRangeField = _interopRequireDefault(__webpack_require__(/*! ../InputRangeField */ "./node_modules/react-date-range/dist/components/InputRangeField/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DefinedRange =
/*#__PURE__*/
function (_Component) {
  _inherits(DefinedRange, _Component);

  function DefinedRange(props) {
    var _this;

    _classCallCheck(this, DefinedRange);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DefinedRange).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleRangeChange", function (range) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          ranges = _this$props.ranges,
          focusedRange = _this$props.focusedRange;
      var selectedRange = ranges[focusedRange[0]];
      if (!onChange || !selectedRange) return;
      onChange(_defineProperty({}, selectedRange.key || "range".concat(focusedRange[0] + 1), _objectSpread({}, selectedRange, {}, range)));
    });

    _this.state = {
      rangeOffset: 0,
      focusedInput: -1
    };
    return _this;
  }

  _createClass(DefinedRange, [{
    key: "getRangeOptionValue",
    value: function getRangeOptionValue(option) {
      var _this$props2 = this.props,
          _this$props2$ranges = _this$props2.ranges,
          ranges = _this$props2$ranges === void 0 ? [] : _this$props2$ranges,
          _this$props2$focusedR = _this$props2.focusedRange,
          focusedRange = _this$props2$focusedR === void 0 ? [] : _this$props2$focusedR;

      if (typeof option.getCurrentValue !== 'function') {
        return '';
      }

      var selectedRange = ranges[focusedRange[0]] || {};
      return option.getCurrentValue(selectedRange) || '';
    }
  }, {
    key: "getSelectedRange",
    value: function getSelectedRange(ranges, staticRange) {
      var focusedRangeIndex = ranges.findIndex(function (range) {
        if (!range.startDate || !range.endDate || range.disabled) return false;
        return staticRange.isSelected(range);
      });
      var selectedRange = ranges[focusedRangeIndex];
      return {
        selectedRange: selectedRange,
        focusedRangeIndex: focusedRangeIndex
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          headerContent = _this$props3.headerContent,
          footerContent = _this$props3.footerContent,
          onPreviewChange = _this$props3.onPreviewChange,
          inputRanges = _this$props3.inputRanges,
          staticRanges = _this$props3.staticRanges,
          ranges = _this$props3.ranges,
          renderStaticRangeLabel = _this$props3.renderStaticRangeLabel,
          rangeColors = _this$props3.rangeColors,
          className = _this$props3.className;
      return _react["default"].createElement("div", {
        className: (0, _classnames["default"])(_styles["default"].definedRangesWrapper, className)
      }, headerContent, _react["default"].createElement("div", {
        className: _styles["default"].staticRanges
      }, staticRanges.map(function (staticRange, i) {
        var _this2$getSelectedRan = _this2.getSelectedRange(ranges, staticRange),
            selectedRange = _this2$getSelectedRan.selectedRange,
            focusedRangeIndex = _this2$getSelectedRan.focusedRangeIndex;

        var labelContent;

        if (staticRange.hasCustomRendering) {
          labelContent = renderStaticRangeLabel(staticRange);
        } else {
          labelContent = staticRange.label;
        }

        return _react["default"].createElement("button", {
          type: "button",
          className: (0, _classnames["default"])(_styles["default"].staticRange, _defineProperty({}, _styles["default"].staticRangeSelected, Boolean(selectedRange))),
          style: {
            color: selectedRange ? selectedRange.color || rangeColors[focusedRangeIndex] : null
          },
          key: i,
          onClick: function onClick() {
            return _this2.handleRangeChange(staticRange.range(_this2.props));
          },
          onFocus: function onFocus() {
            return onPreviewChange && onPreviewChange(staticRange.range(_this2.props));
          },
          onMouseOver: function onMouseOver() {
            return onPreviewChange && onPreviewChange(staticRange.range(_this2.props));
          },
          onMouseLeave: function onMouseLeave() {
            onPreviewChange && onPreviewChange();
          }
        }, _react["default"].createElement("span", {
          tabIndex: -1,
          className: _styles["default"].staticRangeLabel
        }, labelContent));
      })), _react["default"].createElement("div", {
        className: _styles["default"].inputRanges
      }, inputRanges.map(function (rangeOption, i) {
        return _react["default"].createElement(_InputRangeField["default"], {
          key: i,
          styles: _styles["default"],
          label: rangeOption.label,
          onFocus: function onFocus() {
            return _this2.setState({
              focusedInput: i,
              rangeOffset: 0
            });
          },
          onBlur: function onBlur() {
            return _this2.setState({
              rangeOffset: 0
            });
          },
          onChange: function onChange(value) {
            return _this2.handleRangeChange(rangeOption.range(value, _this2.props));
          },
          value: _this2.getRangeOptionValue(rangeOption)
        });
      })), footerContent);
    }
  }]);

  return DefinedRange;
}(_react.Component);

DefinedRange.propTypes = {
  inputRanges: _propTypes["default"].array,
  staticRanges: _propTypes["default"].array,
  ranges: _propTypes["default"].arrayOf(_DayCell.rangeShape),
  focusedRange: _propTypes["default"].arrayOf(_propTypes["default"].number),
  onPreviewChange: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  footerContent: _propTypes["default"].any,
  headerContent: _propTypes["default"].any,
  rangeColors: _propTypes["default"].arrayOf(_propTypes["default"].string),
  className: _propTypes["default"].string,
  renderStaticRangeLabel: _propTypes["default"].func
};
DefinedRange.defaultProps = {
  inputRanges: _defaultRanges.defaultInputRanges,
  staticRanges: _defaultRanges.defaultStaticRanges,
  ranges: [],
  rangeColors: ['#3d91ff', '#3ecf8e', '#fed14c'],
  focusedRange: [0, 0]
};
var _default = DefinedRange;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-date-range/dist/components/InputRangeField/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-date-range/dist/components/InputRangeField/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MIN = 0;
var MAX = 99999;

var InputRangeField =
/*#__PURE__*/
function (_Component) {
  _inherits(InputRangeField, _Component);

  function InputRangeField(props, context) {
    var _this;

    _classCallCheck(this, InputRangeField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputRangeField).call(this, props, context));

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      var onChange = _this.props.onChange;
      var value = parseInt(e.target.value, 10);
      value = isNaN(value) ? 0 : Math.max(Math.min(MAX, value), MIN);
      onChange(value);
    });

    return _this;
  }

  _createClass(InputRangeField, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _this$props = this.props,
          value = _this$props.value,
          label = _this$props.label,
          placeholder = _this$props.placeholder;
      return value !== nextProps.value || label !== nextProps.label || placeholder !== nextProps.placeholder;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          label = _this$props2.label,
          placeholder = _this$props2.placeholder,
          value = _this$props2.value,
          styles = _this$props2.styles,
          onBlur = _this$props2.onBlur,
          onFocus = _this$props2.onFocus;
      return _react["default"].createElement("div", {
        className: styles.inputRange
      }, _react["default"].createElement("input", {
        className: styles.inputRangeInput,
        placeholder: placeholder,
        value: value,
        min: MIN,
        max: MAX,
        onChange: this.onChange,
        onFocus: onFocus,
        onBlur: onBlur
      }), _react["default"].createElement("span", {
        className: styles.inputRangeLabel
      }, label));
    }
  }]);

  return InputRangeField;
}(_react.Component);

InputRangeField.propTypes = {
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  label: _propTypes["default"].string.isRequired,
  placeholder: _propTypes["default"].string,
  styles: _propTypes["default"].shape({
    inputRange: _propTypes["default"].string,
    inputRangeInput: _propTypes["default"].string,
    inputRangeLabel: _propTypes["default"].string
  }).isRequired,
  onBlur: _propTypes["default"].func.isRequired,
  onFocus: _propTypes["default"].func.isRequired,
  onChange: _propTypes["default"].func.isRequired
};
InputRangeField.defaultProps = {
  value: '',
  placeholder: '-'
};
var _default = InputRangeField;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-date-range/dist/components/Month/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-date-range/dist/components/Month/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _DayCell = _interopRequireWildcard(__webpack_require__(/*! ../DayCell */ "./node_modules/react-date-range/dist/components/DayCell/index.js"));

var _dateFns = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/react-date-range/dist/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function renderWeekdays(styles, dateOptions, weekdayDisplayFormat) {
  var now = new Date();
  return _react["default"].createElement("div", {
    className: styles.weekDays
  }, (0, _dateFns.eachDayOfInterval)({
    start: (0, _dateFns.startOfWeek)(now, dateOptions),
    end: (0, _dateFns.endOfWeek)(now, dateOptions)
  }).map(function (day, i) {
    return _react["default"].createElement("span", {
      className: styles.weekDay,
      key: i
    }, (0, _dateFns.format)(day, weekdayDisplayFormat, dateOptions));
  }));
}

var Month =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Month, _PureComponent);

  function Month() {
    _classCallCheck(this, Month);

    return _possibleConstructorReturn(this, _getPrototypeOf(Month).apply(this, arguments));
  }

  _createClass(Month, [{
    key: "render",
    value: function render() {
      var _this = this;

      var now = new Date();
      var _this$props = this.props,
          displayMode = _this$props.displayMode,
          focusedRange = _this$props.focusedRange,
          drag = _this$props.drag,
          styles = _this$props.styles,
          disabledDates = _this$props.disabledDates,
          disabledDay = _this$props.disabledDay;
      var minDate = this.props.minDate && (0, _dateFns.startOfDay)(this.props.minDate);
      var maxDate = this.props.maxDate && (0, _dateFns.endOfDay)(this.props.maxDate);
      var monthDisplay = (0, _utils.getMonthDisplayRange)(this.props.month, this.props.dateOptions, this.props.fixedHeight);
      var ranges = this.props.ranges;

      if (displayMode === 'dateRange' && drag.status) {
        var _drag$range = drag.range,
            startDate = _drag$range.startDate,
            endDate = _drag$range.endDate;
        ranges = ranges.map(function (range, i) {
          if (i !== focusedRange[0]) return range;
          return _objectSpread({}, range, {
            startDate: startDate,
            endDate: endDate
          });
        });
      }

      var showPreview = this.props.showPreview && !drag.disablePreview;
      return _react["default"].createElement("div", {
        className: styles.month,
        style: this.props.style
      }, this.props.showMonthName ? _react["default"].createElement("div", {
        className: styles.monthName
      }, (0, _dateFns.format)(this.props.month, this.props.monthDisplayFormat, this.props.dateOptions)) : null, this.props.showWeekDays && renderWeekdays(styles, this.props.dateOptions, this.props.weekdayDisplayFormat), _react["default"].createElement("div", {
        className: styles.days,
        onMouseLeave: this.props.onMouseLeave
      }, (0, _dateFns.eachDayOfInterval)({
        start: monthDisplay.start,
        end: monthDisplay.end
      }).map(function (day, index) {
        var isStartOfMonth = (0, _dateFns.isSameDay)(day, monthDisplay.startDateOfMonth);
        var isEndOfMonth = (0, _dateFns.isSameDay)(day, monthDisplay.endDateOfMonth);
        var isOutsideMinMax = minDate && (0, _dateFns.isBefore)(day, minDate) || maxDate && (0, _dateFns.isAfter)(day, maxDate);
        var isDisabledSpecifically = disabledDates.some(function (disabledDate) {
          return (0, _dateFns.isSameDay)(disabledDate, day);
        });
        var isDisabledDay = disabledDay(day);
        return _react["default"].createElement(_DayCell["default"], _extends({}, _this.props, {
          ranges: ranges,
          day: day,
          preview: showPreview ? _this.props.preview : null,
          isWeekend: (0, _dateFns.isWeekend)(day, _this.props.dateOptions),
          isToday: (0, _dateFns.isSameDay)(day, now),
          isStartOfWeek: (0, _dateFns.isSameDay)(day, (0, _dateFns.startOfWeek)(day, _this.props.dateOptions)),
          isEndOfWeek: (0, _dateFns.isSameDay)(day, (0, _dateFns.endOfWeek)(day, _this.props.dateOptions)),
          isStartOfMonth: isStartOfMonth,
          isEndOfMonth: isEndOfMonth,
          key: index,
          disabled: isOutsideMinMax || isDisabledSpecifically || isDisabledDay,
          isPassive: !(0, _dateFns.isWithinInterval)(day, {
            start: monthDisplay.startDateOfMonth,
            end: monthDisplay.endDateOfMonth
          }),
          styles: styles,
          onMouseDown: _this.props.onDragSelectionStart,
          onMouseUp: _this.props.onDragSelectionEnd,
          onMouseEnter: _this.props.onDragSelectionMove,
          dragRange: drag.range,
          drag: drag.status
        }));
      })));
    }
  }]);

  return Month;
}(_react.PureComponent);

Month.defaultProps = {};
Month.propTypes = {
  style: _propTypes["default"].object,
  styles: _propTypes["default"].object,
  month: _propTypes["default"].object,
  drag: _propTypes["default"].object,
  dateOptions: _propTypes["default"].object,
  disabledDates: _propTypes["default"].array,
  disabledDay: _propTypes["default"].func,
  preview: _propTypes["default"].shape({
    startDate: _propTypes["default"].object,
    endDate: _propTypes["default"].object
  }),
  showPreview: _propTypes["default"].bool,
  displayMode: _propTypes["default"].oneOf(['dateRange', 'date']),
  minDate: _propTypes["default"].object,
  maxDate: _propTypes["default"].object,
  ranges: _propTypes["default"].arrayOf(_DayCell.rangeShape),
  focusedRange: _propTypes["default"].arrayOf(_propTypes["default"].number),
  onDragSelectionStart: _propTypes["default"].func,
  onDragSelectionEnd: _propTypes["default"].func,
  onDragSelectionMove: _propTypes["default"].func,
  onMouseLeave: _propTypes["default"].func,
  monthDisplayFormat: _propTypes["default"].string,
  weekdayDisplayFormat: _propTypes["default"].string,
  dayDisplayFormat: _propTypes["default"].string,
  showWeekDays: _propTypes["default"].bool,
  showMonthName: _propTypes["default"].bool,
  fixedHeight: _propTypes["default"].bool
};
var _default = Month;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-date-range/dist/defaultRanges.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-date-range/dist/defaultRanges.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStaticRanges = createStaticRanges;
exports.defaultInputRanges = exports.defaultStaticRanges = void 0;

var _dateFns = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defineds = {
  startOfWeek: (0, _dateFns.startOfWeek)(new Date()),
  endOfWeek: (0, _dateFns.endOfWeek)(new Date()),
  startOfLastWeek: (0, _dateFns.startOfWeek)((0, _dateFns.addDays)(new Date(), -7)),
  endOfLastWeek: (0, _dateFns.endOfWeek)((0, _dateFns.addDays)(new Date(), -7)),
  startOfToday: (0, _dateFns.startOfDay)(new Date()),
  endOfToday: (0, _dateFns.endOfDay)(new Date()),
  startOfYesterday: (0, _dateFns.startOfDay)((0, _dateFns.addDays)(new Date(), -1)),
  endOfYesterday: (0, _dateFns.endOfDay)((0, _dateFns.addDays)(new Date(), -1)),
  startOfMonth: (0, _dateFns.startOfMonth)(new Date()),
  endOfMonth: (0, _dateFns.endOfMonth)(new Date()),
  startOfLastMonth: (0, _dateFns.startOfMonth)((0, _dateFns.addMonths)(new Date(), -1)),
  endOfLastMonth: (0, _dateFns.endOfMonth)((0, _dateFns.addMonths)(new Date(), -1))
};
var staticRangeHandler = {
  range: {},
  isSelected: function isSelected(range) {
    var definedRange = this.range();
    return (0, _dateFns.isSameDay)(range.startDate, definedRange.startDate) && (0, _dateFns.isSameDay)(range.endDate, definedRange.endDate);
  }
};

function createStaticRanges(ranges) {
  return ranges.map(function (range) {
    return _objectSpread({}, staticRangeHandler, {}, range);
  });
}

var defaultStaticRanges = createStaticRanges([{
  label: 'Today',
  range: function range() {
    return {
      startDate: defineds.startOfToday,
      endDate: defineds.endOfToday
    };
  }
}, {
  label: 'Yesterday',
  range: function range() {
    return {
      startDate: defineds.startOfYesterday,
      endDate: defineds.endOfYesterday
    };
  }
}, {
  label: 'This Week',
  range: function range() {
    return {
      startDate: defineds.startOfWeek,
      endDate: defineds.endOfWeek
    };
  }
}, {
  label: 'Last Week',
  range: function range() {
    return {
      startDate: defineds.startOfLastWeek,
      endDate: defineds.endOfLastWeek
    };
  }
}, {
  label: 'This Month',
  range: function range() {
    return {
      startDate: defineds.startOfMonth,
      endDate: defineds.endOfMonth
    };
  }
}, {
  label: 'Last Month',
  range: function range() {
    return {
      startDate: defineds.startOfLastMonth,
      endDate: defineds.endOfLastMonth
    };
  }
}]);
exports.defaultStaticRanges = defaultStaticRanges;
var defaultInputRanges = [{
  label: 'days up to today',
  range: function range(value) {
    return {
      startDate: (0, _dateFns.addDays)(defineds.startOfToday, (Math.max(Number(value), 1) - 1) * -1),
      endDate: defineds.endOfToday
    };
  },
  getCurrentValue: function getCurrentValue(range) {
    if (!(0, _dateFns.isSameDay)(range.endDate, defineds.endOfToday)) return '-';
    if (!range.startDate) return '∞';
    return (0, _dateFns.differenceInCalendarDays)(defineds.endOfToday, range.startDate) + 1;
  }
}, {
  label: 'days starting today',
  range: function range(value) {
    var today = new Date();
    return {
      startDate: today,
      endDate: (0, _dateFns.addDays)(today, Math.max(Number(value), 1) - 1)
    };
  },
  getCurrentValue: function getCurrentValue(range) {
    if (!(0, _dateFns.isSameDay)(range.startDate, defineds.startOfToday)) return '-';
    if (!range.endDate) return '∞';
    return (0, _dateFns.differenceInCalendarDays)(range.endDate, defineds.startOfToday) + 1;
  }
}];
exports.defaultInputRanges = defaultInputRanges;

/***/ }),

/***/ "./node_modules/react-date-range/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-date-range/dist/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DateRange", {
  enumerable: true,
  get: function get() {
    return _DateRange["default"];
  }
});
Object.defineProperty(exports, "Calendar", {
  enumerable: true,
  get: function get() {
    return _Calendar["default"];
  }
});
Object.defineProperty(exports, "DateRangePicker", {
  enumerable: true,
  get: function get() {
    return _DateRangePicker["default"];
  }
});
Object.defineProperty(exports, "DefinedRange", {
  enumerable: true,
  get: function get() {
    return _DefinedRange["default"];
  }
});
Object.defineProperty(exports, "defaultInputRanges", {
  enumerable: true,
  get: function get() {
    return _defaultRanges.defaultInputRanges;
  }
});
Object.defineProperty(exports, "defaultStaticRanges", {
  enumerable: true,
  get: function get() {
    return _defaultRanges.defaultStaticRanges;
  }
});
Object.defineProperty(exports, "createStaticRanges", {
  enumerable: true,
  get: function get() {
    return _defaultRanges.createStaticRanges;
  }
});

var _DateRange = _interopRequireDefault(__webpack_require__(/*! ./components/DateRange */ "./node_modules/react-date-range/dist/components/DateRange/index.js"));

var _Calendar = _interopRequireDefault(__webpack_require__(/*! ./components/Calendar */ "./node_modules/react-date-range/dist/components/Calendar/index.js"));

var _DateRangePicker = _interopRequireDefault(__webpack_require__(/*! ./components/DateRangePicker */ "./node_modules/react-date-range/dist/components/DateRangePicker/index.js"));

var _DefinedRange = _interopRequireDefault(__webpack_require__(/*! ./components/DefinedRange */ "./node_modules/react-date-range/dist/components/DefinedRange/index.js"));

var _defaultRanges = __webpack_require__(/*! ./defaultRanges */ "./node_modules/react-date-range/dist/defaultRanges.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./node_modules/react-date-range/dist/styles.js":
/*!******************************************************!*\
  !*** ./node_modules/react-date-range/dist/styles.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  dateRangeWrapper: 'rdrDateRangeWrapper',
  calendarWrapper: 'rdrCalendarWrapper',
  dateDisplay: 'rdrDateDisplay',
  dateDisplayItem: 'rdrDateDisplayItem',
  dateDisplayItemActive: 'rdrDateDisplayItemActive',
  monthAndYearWrapper: 'rdrMonthAndYearWrapper',
  monthAndYearPickers: 'rdrMonthAndYearPickers',
  nextPrevButton: 'rdrNextPrevButton',
  month: 'rdrMonth',
  weekDays: 'rdrWeekDays',
  weekDay: 'rdrWeekDay',
  days: 'rdrDays',
  day: 'rdrDay',
  dayNumber: 'rdrDayNumber',
  dayPassive: 'rdrDayPassive',
  dayToday: 'rdrDayToday',
  dayStartOfWeek: 'rdrDayStartOfWeek',
  dayEndOfWeek: 'rdrDayEndOfWeek',
  daySelected: 'rdrDaySelected',
  dayDisabled: 'rdrDayDisabled',
  dayStartOfMonth: 'rdrDayStartOfMonth',
  dayEndOfMonth: 'rdrDayEndOfMonth',
  dayWeekend: 'rdrDayWeekend',
  dayStartPreview: 'rdrDayStartPreview',
  dayInPreview: 'rdrDayInPreview',
  dayEndPreview: 'rdrDayEndPreview',
  dayHovered: 'rdrDayHovered',
  dayActive: 'rdrDayActive',
  inRange: 'rdrInRange',
  endEdge: 'rdrEndEdge',
  startEdge: 'rdrStartEdge',
  prevButton: 'rdrPprevButton',
  nextButton: 'rdrNextButton',
  selected: 'rdrSelected',
  months: 'rdrMonths',
  monthPicker: 'rdrMonthPicker',
  yearPicker: 'rdrYearPicker',
  dateDisplayWrapper: 'rdrDateDisplayWrapper',
  definedRangesWrapper: 'rdrDefinedRangesWrapper',
  staticRanges: 'rdrStaticRanges',
  staticRange: 'rdrStaticRange',
  inputRanges: 'rdrInputRanges',
  inputRange: 'rdrInputRange',
  inputRangeInput: 'rdrInputRangeInput',
  dateRangePickerWrapper: 'rdrDateRangePickerWrapper',
  staticRangeLabel: 'rdrStaticRangeLabel',
  staticRangeSelected: 'rdrStaticRangeSelected',
  monthName: 'rdrMonthName',
  infiniteMonths: 'rdrInfiniteMonths',
  monthsVertical: 'rdrMonthsVertical',
  monthsHorizontal: 'rdrMonthsHorizontal'
};
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-date-range/dist/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-date-range/dist/utils.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcFocusDate = calcFocusDate;
exports.findNextRangeIndex = findNextRangeIndex;
exports.getMonthDisplayRange = getMonthDisplayRange;
exports.generateStyles = generateStyles;

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _dateFns = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function calcFocusDate(currentFocusedDate, props) {
  var shownDate = props.shownDate,
      date = props.date,
      months = props.months,
      ranges = props.ranges,
      focusedRange = props.focusedRange,
      displayMode = props.displayMode; // find primary date according the props

  var targetInterval;

  if (displayMode === 'dateRange') {
    var range = ranges[focusedRange[0]] || {};
    targetInterval = {
      start: range.startDate,
      end: range.endDate
    };
  } else {
    targetInterval = {
      start: date,
      end: date
    };
  }

  targetInterval.start = (0, _dateFns.startOfMonth)(targetInterval.start || new Date());
  targetInterval.end = (0, _dateFns.endOfMonth)(targetInterval.end || targetInterval.start);
  var targetDate = targetInterval.start || targetInterval.end || shownDate || new Date(); // initial focus

  if (!currentFocusedDate) return shownDate || targetDate; // // just return targetDate for native scrolled calendars
  // if (props.scroll.enabled) return targetDate;

  if ((0, _dateFns.differenceInCalendarMonths)(targetInterval.start, targetInterval.end) > months) {
    // don't change focused if new selection in view area
    return currentFocusedDate;
  }

  return targetDate;
}

function findNextRangeIndex(ranges) {
  var currentRangeIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
  var nextIndex = ranges.findIndex(function (range, i) {
    return i > currentRangeIndex && range.autoFocus !== false && !range.disabled;
  });
  if (nextIndex !== -1) return nextIndex;
  return ranges.findIndex(function (range) {
    return range.autoFocus !== false && !range.disabled;
  });
}

function getMonthDisplayRange(date, dateOptions, fixedHeight) {
  var startDateOfMonth = (0, _dateFns.startOfMonth)(date, dateOptions);
  var endDateOfMonth = (0, _dateFns.endOfMonth)(date, dateOptions);
  var startDateOfCalendar = (0, _dateFns.startOfWeek)(startDateOfMonth, dateOptions);
  var endDateOfCalendar = (0, _dateFns.endOfWeek)(endDateOfMonth, dateOptions);

  if (fixedHeight && (0, _dateFns.differenceInCalendarDays)(endDateOfCalendar, startDateOfCalendar) <= 34) {
    endDateOfCalendar = (0, _dateFns.addDays)(endDateOfCalendar, 7);
  }

  return {
    start: startDateOfCalendar,
    end: endDateOfCalendar,
    startDateOfMonth: startDateOfMonth,
    endDateOfMonth: endDateOfMonth
  };
}

function generateStyles(sources) {
  if (!sources.length) return {};
  var generatedStyles = sources.filter(function (source) {
    return Boolean(source);
  }).reduce(function (styles, styleSource) {
    Object.keys(styleSource).forEach(function (key) {
      styles[key] = (0, _classnames["default"])(styles[key], styleSource[key]);
    });
    return styles;
  }, {});
  return generatedStyles;
}

/***/ }),

/***/ "./node_modules/react-list/react-list.js":
/*!***********************************************!*\
  !*** ./node_modules/react-list/react-list.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_propTypes, _react) {
  "use strict";

  _propTypes = _interopRequireDefault(_propTypes);
  _react = _interopRequireWildcard(_react);

  var _class, _temp;

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var CLIENT_SIZE_KEYS = {
    x: 'clientWidth',
    y: 'clientHeight'
  };
  var CLIENT_START_KEYS = {
    x: 'clientTop',
    y: 'clientLeft'
  };
  var INNER_SIZE_KEYS = {
    x: 'innerWidth',
    y: 'innerHeight'
  };
  var OFFSET_SIZE_KEYS = {
    x: 'offsetWidth',
    y: 'offsetHeight'
  };
  var OFFSET_START_KEYS = {
    x: 'offsetLeft',
    y: 'offsetTop'
  };
  var OVERFLOW_KEYS = {
    x: 'overflowX',
    y: 'overflowY'
  };
  var SCROLL_SIZE_KEYS = {
    x: 'scrollWidth',
    y: 'scrollHeight'
  };
  var SCROLL_START_KEYS = {
    x: 'scrollLeft',
    y: 'scrollTop'
  };
  var SIZE_KEYS = {
    x: 'width',
    y: 'height'
  };

  var NOOP = function NOOP() {}; // If a browser doesn't support the `options` argument to
  // add/removeEventListener, we need to check, otherwise we will
  // accidentally set `capture` with a truthy value.


  var PASSIVE = function () {
    if (typeof window === 'undefined') return false;
    var hasSupport = false;

    try {
      document.createElement('div').addEventListener('test', NOOP, {
        get passive() {
          hasSupport = true;
          return false;
        }

      });
    } catch (e) {// noop
    }

    return hasSupport;
  }() ? {
    passive: true
  } : false;
  var UNSTABLE_MESSAGE = 'ReactList failed to reach a stable state.';
  var MAX_SYNC_UPDATES = 40;

  var isEqualSubset = function isEqualSubset(a, b) {
    for (var key in b) {
      if (a[key] !== b[key]) return false;
    }

    return true;
  };

  var defaultScrollParentGetter = function defaultScrollParentGetter(component) {
    var axis = component.props.axis;
    var el = component.getEl();
    var overflowKey = OVERFLOW_KEYS[axis];

    while (el = el.parentElement) {
      switch (window.getComputedStyle(el)[overflowKey]) {
        case 'auto':
        case 'scroll':
        case 'overlay':
          return el;
      }
    }

    return window;
  };

  var defaultScrollParentViewportSizeGetter = function defaultScrollParentViewportSizeGetter(component) {
    var axis = component.props.axis;
    var scrollParent = component.scrollParent;
    return scrollParent === window ? window[INNER_SIZE_KEYS[axis]] : scrollParent[CLIENT_SIZE_KEYS[axis]];
  };

  var constrain = function constrain(props, state) {
    var length = props.length,
        minSize = props.minSize,
        type = props.type;
    var from = state.from,
        size = state.size,
        itemsPerRow = state.itemsPerRow;
    size = Math.max(size, minSize);
    var mod = size % itemsPerRow;
    if (mod) size += itemsPerRow - mod;
    if (size > length) size = length;
    from = type === 'simple' || !from ? 0 : Math.max(Math.min(from, length - size), 0);

    if (mod = from % itemsPerRow) {
      from -= mod;
      size += mod;
    }

    if (from === state.from && size == state.size) return state;
    return _objectSpread(_objectSpread({}, state), {}, {
      from: from,
      size: size
    });
  };

  module.exports = (_temp = _class = /*#__PURE__*/function (_Component) {
    _inherits(ReactList, _Component);

    var _super = _createSuper(ReactList);

    _createClass(ReactList, null, [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        var newState = constrain(props, state);
        return newState === state ? null : newState;
      }
    }]);

    function ReactList(props) {
      var _this;

      _classCallCheck(this, ReactList);

      _this = _super.call(this, props);
      _this.state = constrain(props, {
        itemsPerRow: 1,
        from: props.initialIndex,
        size: 0
      });
      _this.cache = {};
      _this.cachedScrollPosition = null;
      _this.prevPrevState = {};
      _this.unstable = false;
      _this.updateCounter = 0;
      return _this;
    }

    _createClass(ReactList, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.updateFrameAndClearCache = this.updateFrameAndClearCache.bind(this);
        window.addEventListener('resize', this.updateFrameAndClearCache);
        this.updateFrame(this.scrollTo.bind(this, this.props.initialIndex));
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this2 = this;

        // Viewport scroll is no longer useful if axis changes
        if (this.props.axis !== prevProps.axis) this.clearSizeCache(); // If the list has reached an unstable state, prevent an infinite loop.

        if (this.unstable) return;

        if (++this.updateCounter > MAX_SYNC_UPDATES) {
          this.unstable = true;
          return console.error(UNSTABLE_MESSAGE);
        }

        if (!this.updateCounterTimeoutId) {
          this.updateCounterTimeoutId = setTimeout(function () {
            _this2.updateCounter = 0;
            delete _this2.updateCounterTimeoutId;
          }, 0);
        }

        this.updateFrame();
      }
    }, {
      key: "maybeSetState",
      value: function maybeSetState(b, cb) {
        if (isEqualSubset(this.state, b)) return cb();
        this.setState(b, cb);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener('resize', this.updateFrameAndClearCache);
        this.scrollParent.removeEventListener('scroll', this.updateFrameAndClearCache, PASSIVE);
        this.scrollParent.removeEventListener('mousewheel', NOOP, PASSIVE);
      }
    }, {
      key: "getOffset",
      value: function getOffset(el) {
        var axis = this.props.axis;
        var offset = el[CLIENT_START_KEYS[axis]] || 0;
        var offsetKey = OFFSET_START_KEYS[axis];

        do {
          offset += el[offsetKey] || 0;
        } while (el = el.offsetParent);

        return offset;
      }
    }, {
      key: "getEl",
      value: function getEl() {
        return this.el || this.items;
      }
    }, {
      key: "getScrollPosition",
      value: function getScrollPosition() {
        // Cache scroll position as this causes a forced synchronous layout.
        if (typeof this.cachedScrollPosition === 'number') {
          return this.cachedScrollPosition;
        }

        var scrollParent = this.scrollParent;
        var axis = this.props.axis;
        var scrollKey = SCROLL_START_KEYS[axis];
        var actual = scrollParent === window ? // Firefox always returns document.body[scrollKey] as 0 and Chrome/Safari
        // always return document.documentElement[scrollKey] as 0, so take
        // whichever has a value.
        document.body[scrollKey] || document.documentElement[scrollKey] : scrollParent[scrollKey];
        var max = this.getScrollSize() - this.props.scrollParentViewportSizeGetter(this);
        var scroll = Math.max(0, Math.min(actual, max));
        var el = this.getEl();
        this.cachedScrollPosition = this.getOffset(scrollParent) + scroll - this.getOffset(el);
        return this.cachedScrollPosition;
      }
    }, {
      key: "setScroll",
      value: function setScroll(offset) {
        var scrollParent = this.scrollParent;
        var axis = this.props.axis;
        offset += this.getOffset(this.getEl());
        if (scrollParent === window) return window.scrollTo(0, offset);
        offset -= this.getOffset(this.scrollParent);
        scrollParent[SCROLL_START_KEYS[axis]] = offset;
      }
    }, {
      key: "getScrollSize",
      value: function getScrollSize() {
        var scrollParent = this.scrollParent;
        var _document = document,
            body = _document.body,
            documentElement = _document.documentElement;
        var key = SCROLL_SIZE_KEYS[this.props.axis];
        return scrollParent === window ? Math.max(body[key], documentElement[key]) : scrollParent[key];
      }
    }, {
      key: "hasDeterminateSize",
      value: function hasDeterminateSize() {
        var _this$props = this.props,
            itemSizeGetter = _this$props.itemSizeGetter,
            type = _this$props.type;
        return type === 'uniform' || itemSizeGetter;
      }
    }, {
      key: "getStartAndEnd",
      value: function getStartAndEnd() {
        var threshold = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.threshold;
        var scroll = this.getScrollPosition();
        var start = Math.max(0, scroll - threshold);
        var end = scroll + this.props.scrollParentViewportSizeGetter(this) + threshold;

        if (this.hasDeterminateSize()) {
          end = Math.min(end, this.getSpaceBefore(this.props.length));
        }

        return {
          start: start,
          end: end
        };
      }
    }, {
      key: "getItemSizeAndItemsPerRow",
      value: function getItemSizeAndItemsPerRow() {
        var _this$props2 = this.props,
            axis = _this$props2.axis,
            useStaticSize = _this$props2.useStaticSize;
        var _this$state = this.state,
            itemSize = _this$state.itemSize,
            itemsPerRow = _this$state.itemsPerRow;

        if (useStaticSize && itemSize && itemsPerRow) {
          return {
            itemSize: itemSize,
            itemsPerRow: itemsPerRow
          };
        }

        var itemEls = this.items.children;
        if (!itemEls.length) return {};
        var firstEl = itemEls[0]; // Firefox has a problem where it will return a *slightly* (less than
        // thousandths of a pixel) different size for the same element between
        // renders. This can cause an infinite render loop, so only change the
        // itemSize when it is significantly different.

        var firstElSize = firstEl[OFFSET_SIZE_KEYS[axis]];
        var delta = Math.abs(firstElSize - itemSize);
        if (isNaN(delta) || delta >= 1) itemSize = firstElSize;
        if (!itemSize) return {};
        var startKey = OFFSET_START_KEYS[axis];
        var firstStart = firstEl[startKey];
        itemsPerRow = 1;

        for (var item = itemEls[itemsPerRow]; item && item[startKey] === firstStart; item = itemEls[itemsPerRow]) {
          ++itemsPerRow;
        }

        return {
          itemSize: itemSize,
          itemsPerRow: itemsPerRow
        };
      }
    }, {
      key: "clearSizeCache",
      value: function clearSizeCache() {
        this.cachedScrollPosition = null;
      } // Called by 'scroll' and 'resize' events, clears scroll position cache.

    }, {
      key: "updateFrameAndClearCache",
      value: function updateFrameAndClearCache(cb) {
        this.clearSizeCache();
        return this.updateFrame(cb);
      }
    }, {
      key: "updateFrame",
      value: function updateFrame(cb) {
        this.updateScrollParent();
        if (typeof cb != 'function') cb = NOOP;

        switch (this.props.type) {
          case 'simple':
            return this.updateSimpleFrame(cb);

          case 'variable':
            return this.updateVariableFrame(cb);

          case 'uniform':
            return this.updateUniformFrame(cb);
        }
      }
    }, {
      key: "updateScrollParent",
      value: function updateScrollParent() {
        var prev = this.scrollParent;
        this.scrollParent = this.props.scrollParentGetter(this);
        if (prev === this.scrollParent) return;

        if (prev) {
          prev.removeEventListener('scroll', this.updateFrameAndClearCache);
          prev.removeEventListener('mousewheel', NOOP);
        } // If we have a new parent, cached parent dimensions are no longer useful.


        this.clearSizeCache();
        this.scrollParent.addEventListener('scroll', this.updateFrameAndClearCache, PASSIVE); // You have to attach mousewheel listener to the scrollable element.
        // Just an empty listener. After that onscroll events will be fired synchronously.

        this.scrollParent.addEventListener('mousewheel', NOOP, PASSIVE);
      }
    }, {
      key: "updateSimpleFrame",
      value: function updateSimpleFrame(cb) {
        var _this$getStartAndEnd = this.getStartAndEnd(),
            end = _this$getStartAndEnd.end;

        var itemEls = this.items.children;
        var elEnd = 0;

        if (itemEls.length) {
          var axis = this.props.axis;
          var firstItemEl = itemEls[0];
          var lastItemEl = itemEls[itemEls.length - 1];
          elEnd = this.getOffset(lastItemEl) + lastItemEl[OFFSET_SIZE_KEYS[axis]] - this.getOffset(firstItemEl);
        }

        if (elEnd > end) return cb();
        var _this$props3 = this.props,
            pageSize = _this$props3.pageSize,
            length = _this$props3.length;
        var size = Math.min(this.state.size + pageSize, length);
        this.maybeSetState({
          size: size
        }, cb);
      }
    }, {
      key: "updateVariableFrame",
      value: function updateVariableFrame(cb) {
        if (!this.props.itemSizeGetter) this.cacheSizes();

        var _this$getStartAndEnd2 = this.getStartAndEnd(),
            start = _this$getStartAndEnd2.start,
            end = _this$getStartAndEnd2.end;

        var _this$props4 = this.props,
            length = _this$props4.length,
            pageSize = _this$props4.pageSize;
        var space = 0;
        var from = 0;
        var size = 0;
        var maxFrom = length - 1;

        while (from < maxFrom) {
          var itemSize = this.getSizeOfItem(from);
          if (itemSize == null || space + itemSize > start) break;
          space += itemSize;
          ++from;
        }

        var maxSize = length - from;

        while (size < maxSize && space < end) {
          var _itemSize = this.getSizeOfItem(from + size);

          if (_itemSize == null) {
            size = Math.min(size + pageSize, maxSize);
            break;
          }

          space += _itemSize;
          ++size;
        }

        this.maybeSetState(constrain(this.props, {
          from: from,
          itemsPerRow: 1,
          size: size
        }), cb);
      }
    }, {
      key: "updateUniformFrame",
      value: function updateUniformFrame(cb) {
        var _this$getItemSizeAndI = this.getItemSizeAndItemsPerRow(),
            itemSize = _this$getItemSizeAndI.itemSize,
            itemsPerRow = _this$getItemSizeAndI.itemsPerRow;

        if (!itemSize || !itemsPerRow) return cb();

        var _this$getStartAndEnd3 = this.getStartAndEnd(),
            start = _this$getStartAndEnd3.start,
            end = _this$getStartAndEnd3.end;

        var _constrain = constrain(this.props, {
          from: Math.floor(start / itemSize) * itemsPerRow,
          size: (Math.ceil((end - start) / itemSize) + 1) * itemsPerRow,
          itemsPerRow: itemsPerRow
        }),
            from = _constrain.from,
            size = _constrain.size;

        return this.maybeSetState({
          itemsPerRow: itemsPerRow,
          from: from,
          itemSize: itemSize,
          size: size
        }, cb);
      }
    }, {
      key: "getSpaceBefore",
      value: function getSpaceBefore(index) {
        var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (cache[index] != null) return cache[index]; // Try the static itemSize.

        var _this$state2 = this.state,
            itemSize = _this$state2.itemSize,
            itemsPerRow = _this$state2.itemsPerRow;

        if (itemSize) {
          return cache[index] = Math.floor(index / itemsPerRow) * itemSize;
        } // Find the closest space to index there is a cached value for.


        var from = index;

        while (from > 0 && cache[--from] == null) {
          ;
        } // Finally, accumulate sizes of items from - index.


        var space = cache[from] || 0;

        for (var i = from; i < index; ++i) {
          cache[i] = space;

          var _itemSize2 = this.getSizeOfItem(i);

          if (_itemSize2 == null) break;
          space += _itemSize2;
        }

        return cache[index] = space;
      }
    }, {
      key: "cacheSizes",
      value: function cacheSizes() {
        var cache = this.cache;
        var from = this.state.from;
        var itemEls = this.items.children;
        var sizeKey = OFFSET_SIZE_KEYS[this.props.axis];

        for (var i = 0, l = itemEls.length; i < l; ++i) {
          cache[from + i] = itemEls[i][sizeKey];
        }
      }
    }, {
      key: "getSizeOfItem",
      value: function getSizeOfItem(index) {
        var cache = this.cache,
            items = this.items;
        var _this$props5 = this.props,
            axis = _this$props5.axis,
            itemSizeGetter = _this$props5.itemSizeGetter,
            itemSizeEstimator = _this$props5.itemSizeEstimator,
            type = _this$props5.type;
        var _this$state3 = this.state,
            from = _this$state3.from,
            itemSize = _this$state3.itemSize,
            size = _this$state3.size; // Try the static itemSize.

        if (itemSize) return itemSize; // Try the itemSizeGetter.

        if (itemSizeGetter) return itemSizeGetter(index); // Try the cache.

        if (index in cache) return cache[index]; // Try the DOM.

        if (type === 'simple' && index >= from && index < from + size && items) {
          var itemEl = items.children[index - from];
          if (itemEl) return itemEl[OFFSET_SIZE_KEYS[axis]];
        } // Try the itemSizeEstimator.


        if (itemSizeEstimator) return itemSizeEstimator(index, cache);
      }
    }, {
      key: "scrollTo",
      value: function scrollTo(index) {
        if (index != null) this.setScroll(this.getSpaceBefore(index));
      }
    }, {
      key: "scrollAround",
      value: function scrollAround(index) {
        var current = this.getScrollPosition();
        var bottom = this.getSpaceBefore(index);
        var top = bottom - this.props.scrollParentViewportSizeGetter(this) + this.getSizeOfItem(index);
        var min = Math.min(top, bottom);
        var max = Math.max(top, bottom);
        if (current <= min) return this.setScroll(min);
        if (current > max) return this.setScroll(max);
      }
    }, {
      key: "getVisibleRange",
      value: function getVisibleRange() {
        var _this$state4 = this.state,
            from = _this$state4.from,
            size = _this$state4.size;

        var _this$getStartAndEnd4 = this.getStartAndEnd(0),
            start = _this$getStartAndEnd4.start,
            end = _this$getStartAndEnd4.end;

        var cache = {};
        var first, last;

        for (var i = from; i < from + size; ++i) {
          var itemStart = this.getSpaceBefore(i, cache);
          var itemEnd = itemStart + this.getSizeOfItem(i);
          if (first == null && itemEnd > start) first = i;
          if (first != null && itemStart < end) last = i;
        }

        return [first, last];
      }
    }, {
      key: "renderItems",
      value: function renderItems() {
        var _this3 = this;

        var _this$props6 = this.props,
            itemRenderer = _this$props6.itemRenderer,
            itemsRenderer = _this$props6.itemsRenderer;
        var _this$state5 = this.state,
            from = _this$state5.from,
            size = _this$state5.size;
        var items = [];

        for (var i = 0; i < size; ++i) {
          items.push(itemRenderer(from + i, i));
        }

        return itemsRenderer(items, function (c) {
          return _this3.items = c;
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this4 = this;

        var _this$props7 = this.props,
            axis = _this$props7.axis,
            length = _this$props7.length,
            type = _this$props7.type,
            useTranslate3d = _this$props7.useTranslate3d;
        var _this$state6 = this.state,
            from = _this$state6.from,
            itemsPerRow = _this$state6.itemsPerRow;
        var items = this.renderItems();
        if (type === 'simple') return items;
        var style = {
          position: 'relative'
        };
        var cache = {};
        var bottom = Math.ceil(length / itemsPerRow) * itemsPerRow;
        var size = this.getSpaceBefore(bottom, cache);

        if (size) {
          style[SIZE_KEYS[axis]] = size;
          if (axis === 'x') style.overflowX = 'hidden';
        }

        var offset = this.getSpaceBefore(from, cache);
        var x = axis === 'x' ? offset : 0;
        var y = axis === 'y' ? offset : 0;
        var transform = useTranslate3d ? "translate3d(".concat(x, "px, ").concat(y, "px, 0)") : "translate(".concat(x, "px, ").concat(y, "px)");
        var listStyle = {
          msTransform: transform,
          WebkitTransform: transform,
          transform: transform
        };
        return /*#__PURE__*/_react["default"].createElement("div", {
          style: style,
          ref: function ref(c) {
            return _this4.el = c;
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: listStyle
        }, items));
      }
    }]);

    return ReactList;
  }(_react.Component), _defineProperty(_class, "displayName", 'ReactList'), _defineProperty(_class, "propTypes", {
    axis: _propTypes["default"].oneOf(['x', 'y']),
    initialIndex: _propTypes["default"].number,
    itemRenderer: _propTypes["default"].func,
    itemSizeEstimator: _propTypes["default"].func,
    itemSizeGetter: _propTypes["default"].func,
    itemsRenderer: _propTypes["default"].func,
    length: _propTypes["default"].number,
    minSize: _propTypes["default"].number,
    pageSize: _propTypes["default"].number,
    scrollParentGetter: _propTypes["default"].func,
    scrollParentViewportSizeGetter: _propTypes["default"].func,
    threshold: _propTypes["default"].number,
    type: _propTypes["default"].oneOf(['simple', 'variable', 'uniform']),
    useStaticSize: _propTypes["default"].bool,
    useTranslate3d: _propTypes["default"].bool
  }), _defineProperty(_class, "defaultProps", {
    axis: 'y',
    itemRenderer: function itemRenderer(index, key) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: key
      }, index);
    },
    itemsRenderer: function itemsRenderer(items, ref) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: ref
      }, items);
    },
    length: 0,
    minSize: 1,
    pageSize: 10,
    scrollParentGetter: defaultScrollParentGetter,
    scrollParentViewportSizeGetter: defaultScrollParentViewportSizeGetter,
    threshold: 100,
    type: 'simple',
    useStaticSize: false,
    useTranslate3d: false
  }), _temp);
});


/***/ }),

/***/ "./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
  \******************************************************/
/*! exports provided: shallowEqualArrays, shallowEqualObjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowEqualArrays", function() { return shallowEqualArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowEqualObjects", function() { return shallowEqualObjects; });
function shallowEqualObjects(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (!objA || !objB) {
    return false;
  }

  var aKeys = Object.keys(objA);
  var bKeys = Object.keys(objB);
  var len = aKeys.length;

  if (bKeys.length !== len) {
    return false;
  }

  for (var i = 0; i < len; i++) {
    var key = aKeys[i];

    if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {
      return false;
    }
  }

  return true;
}

function shallowEqualArrays(arrA, arrB) {
  if (arrA === arrB) {
    return true;
  }

  if (!arrA || !arrB) {
    return false;
  }

  var len = arrA.length;

  if (arrB.length !== len) {
    return false;
  }

  for (var i = 0; i < len; i++) {
    if (arrA[i] !== arrB[i]) {
      return false;
    }
  }

  return true;
}




/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXNlcnZhdGlvbi9SZXNlcnZhdGlvbkZvcm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlLXJhbmdlL2Rpc3QvY29tcG9uZW50cy9DYWxlbmRhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGUtcmFuZ2UvZGlzdC9jb21wb25lbnRzL0RhdGVJbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGUtcmFuZ2UvZGlzdC9jb21wb25lbnRzL0RhdGVSYW5nZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGUtcmFuZ2UvZGlzdC9jb21wb25lbnRzL0RhdGVSYW5nZVBpY2tlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGUtcmFuZ2UvZGlzdC9jb21wb25lbnRzL0RheUNlbGwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlLXJhbmdlL2Rpc3QvY29tcG9uZW50cy9EZWZpbmVkUmFuZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlLXJhbmdlL2Rpc3QvY29tcG9uZW50cy9JbnB1dFJhbmdlRmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlLXJhbmdlL2Rpc3QvY29tcG9uZW50cy9Nb250aC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGUtcmFuZ2UvZGlzdC9kZWZhdWx0UmFuZ2VzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZS1yYW5nZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZS1yYW5nZS9kaXN0L3N0eWxlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGUtcmFuZ2UvZGlzdC91dGlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxpc3QvcmVhY3QtbGlzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3NoYWxsb3ctZXF1YWwvZGlzdC9pbmRleC5lc20uanMiXSwibmFtZXMiOlsiUW9udG9Db25uZWN0b3IiLCJ3aXRoU3R5bGVzIiwiYWx0ZXJuYXRpdmVMYWJlbCIsInRvcCIsImxlZnQiLCJyaWdodCIsImFjdGl2ZSIsImJvcmRlckNvbG9yIiwiY29tcGxldGVkIiwibGluZSIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwiU3RlcENvbm5lY3RvciIsInVzZVFvbnRvU3RlcEljb25TdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImNvbG9yIiwiZGlzcGxheSIsImhlaWdodCIsImFsaWduSXRlbXMiLCJjaXJjbGUiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsImZvbnRTaXplIiwiUW9udG9TdGVwSWNvbiIsInByb3BzIiwiY2xhc3NlcyIsImNsc3giLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiQ29sb3JsaWJDb25uZWN0b3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJib3JkZXIiLCJ1c2VDb2xvcmxpYlN0ZXBJY29uU3R5bGVzIiwianVzdGlmeUNvbnRlbnQiLCJib3hTaGFkb3ciLCJDb2xvcmxpYlN0ZXBJY29uIiwiaWNvbnMiLCJTdHJpbmciLCJpY29uIiwibm9kZSIsInVzZVN0eWxlcyIsInRoZW1lIiwiYnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwiaW5zdHJ1Y3Rpb25zIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiZm9ybUNvbnRyb2wiLCJtYXJnaW4iLCJtaW5XaWR0aCIsInNlbGVjdEVtcHR5IiwiZ2V0U3RlcHMiLCJSZXNlcnZhdGlvbkZvcm0iLCJzbmFja2JhclNob3dNZXNzYWdlIiwidXNlU3RhdGUiLCJhY3RpdmVTdGVwIiwic2V0QWN0aXZlU3RlcCIsInVzZUZvcm0iLCJyZVZhbGlkYXRlTW9kZSIsInNob3VsZFVucmVnaXN0ZXIiLCJkZWZhdWx0VmFsdWVzIiwiZ2l0ZSIsIm5iUGVycyIsIm5iRW5mIiwibmJDaGllbiIsImxpdEZhaXQiLCJuZXdzbGV0dGVyIiwibm9tIiwicHJlbm9tIiwiYWRyZXNzZSIsImNwIiwidmlsbGUiLCJ0ZWwiLCJtYWlsIiwiY29udHJvbCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwic3RhcnREYXRlIiwiRGF0ZSIsImVuZERhdGUiLCJhZGREYXlzIiwia2V5Iiwic3RhdGUiLCJzZXRTdGF0ZSIsImRhdGVBcnJpdmVlIiwic2V0RGF0ZUFycml2ZWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlUmVmIiwidXNlUmVmIiwic3RlcHMiLCJzZWxlY3RlZERhdGVBcnJpdmVlIiwic2V0U2VsZWN0ZWREYXRlQXJyaXZlZSIsImhhbmRsZURhdGVDaGFuZ2VBcnJpdmVlIiwiZGF0ZSIsInNldFNlbGVjdGVkRGF0ZURlcGFydCIsInNlbGVjdGVkRGF0ZURlcGFydCIsImhhbmRsZURhdGVDaGFuZ2VEZXBhcnQiLCJoYW5kbGVOZXh0IiwicHJldkFjdGl2ZVN0ZXAiLCJoYW5kbGVCYWNrIiwiaGFuZGxlUmVzZXQiLCJnaXRlcyIsInNldEdpdGVzIiwibGlzdERlc0dpdGVzIiwibGlzdEdpdGVzTm9tcyIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiaW5mb0xvYyIsIm1hcCIsImkiLCJzbHVnIiwic2hyaW5rIiwiaXRlbSIsInNlbGVjdGlvbiIsImluZm9Db21wIiwiQ29vcmQiLCJyZWNhcCIsImdldFN0ZXBDb250ZW50Iiwic3RlcCIsIm9uU3VibWl0IiwiY3VycmVudCIsImV4ZWN1dGVBc3luYyIsInRva2VuIiwicmVzZXQiLCJjcmVhdGVSZXNlcnZhdGlvbiIsInJlc3VsdCIsImRlamFSZXNlcnZlTWVzc2FnZSIsIm1lc3NhZ2UiLCJsYWJlbCIsImxlbmd0aCIsIlJFQ0FQVENIQV9TRUNSRVRf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RTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxvQzs7Ozs7Ozs7Ozs7O0FDeEthOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELGFBQWEsbUJBQU8sQ0FBQyxvSEFBNEM7O0FBRWpFOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyxzR0FBcUM7O0FBRTNEOztBQUVBLHNDQUFzQyx1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QTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdURBQXVEOzs7QUFHdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDRGQUE0RjtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw0RkFBNEY7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0U7QUFDL0U7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFO0FBQ3ZFLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9FQUFvRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU8sS0FBSztBQUNaO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlDQUF5QyxZQUFZO0FBQ3JEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzRUFBc0U7O0FBRXRFOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Q0FBNkMsdUNBQXVDO0FBQ3BGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQSw2RkFBNkY7QUFDN0Y7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7OztBQUdUOztBQUVBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDs7QUFFQSwwQkFBMEIsV0FBVztBQUNyQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkNBQTJDLE9BQU87QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQzs7QUFFckMsc0NBQXNDOztBQUV0Qyx5REFBeUQ7O0FBRXpELGdEQUFnRDs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCQUEwQixpQkFBaUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsVUFBVTtBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3R1QkQ7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRW1EIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jlc2VydmF0aW9uLjM0MGY2Zjc2MmFmYTJmMDk1ZWNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0R2l0ZXNOb21zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFN0ZXBwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcHBlcic7XHJcbmltcG9ydCBTdGVwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXAnO1xyXG5pbXBvcnQgU3RlcExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBMYWJlbCc7XHJcbmltcG9ydCBDaGVjayBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2snO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZXR0aW5ncyc7XHJcbmltcG9ydCBTdGVwQ29ubmVjdG9yIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBDb25uZWN0b3InO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgSG91c2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ib3VzZSc7XHJcbmltcG9ydCBFbW9qaVBlb3BsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Vtb2ppUGVvcGxlJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgeyBhZGREYXlzIH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgJ3JlYWN0LWRhdGUtcmFuZ2UvZGlzdC9zdHlsZXMuY3NzJzsgLy8gbWFpbiBzdHlsZSBmaWxlXHJcbmltcG9ydCAncmVhY3QtZGF0ZS1yYW5nZS9kaXN0L3RoZW1lL2RlZmF1bHQuY3NzJzsgLy8gdGhlbWUgY3NzIGZpbGVcclxuaW1wb3J0IHsgRGF0ZVJhbmdlUGlja2VyIH0gZnJvbSAncmVhY3QtZGF0ZS1yYW5nZSc7XHJcblxyXG5pbXBvcnQge1xyXG5cdENoZWNrYm94LFxyXG5cdENvbnRhaW5lcixcclxuXHRGb3JtQ29udHJvbCxcclxuXHRGb3JtQ29udHJvbExhYmVsLFxyXG5cdEZvcm1Hcm91cCxcclxuXHRGb3JtTGFiZWwsXHJcblx0SW5wdXRMYWJlbCxcclxuXHRNZW51SXRlbSxcclxuXHRTZWxlY3QsXHJcblx0U3dpdGNoLFxyXG5cdFRleHRGaWVsZCxcclxuXHRDaXJjdWxhclByb2dyZXNzLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBEYXRlRm5zVXRpbHMgZnJvbSAnQGRhdGUtaW8vZGF0ZS1mbnMnO1xyXG5pbXBvcnQge1xyXG5cdE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLFxyXG5cdEtleWJvYXJkRGF0ZVBpY2tlcixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvcGlja2Vycyc7XHJcbmltcG9ydCB7IGNyZWF0ZVJlc2VydmF0aW9uIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9yZXNlcnZhdGlvbkFjdGlvbnMnO1xyXG5pbXBvcnQgUmVDQVBUQ0hBIGZyb20gJ3JlYWN0LWdvb2dsZS1yZWNhcHRjaGEnO1xyXG5pbXBvcnQgeyBSRUNBUFRDSEFfU0VDUkVUX0tFWSB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7IHdpdGhTbmFja2JhciB9IGZyb20gJy4uL0hPQy9TbmFja2Jhcic7XHJcblxyXG5jb25zdCBRb250b0Nvbm5lY3RvciA9IHdpdGhTdHlsZXMoe1xyXG5cdGFsdGVybmF0aXZlTGFiZWw6IHtcclxuXHRcdHRvcDogMTAsXHJcblx0XHRsZWZ0OiAnY2FsYygtNTAlICsgMTZweCknLFxyXG5cdFx0cmlnaHQ6ICdjYWxjKDUwJSArIDE2cHgpJyxcclxuXHR9LFxyXG5cdGFjdGl2ZToge1xyXG5cdFx0JyYgJGxpbmUnOiB7XHJcblx0XHRcdGJvcmRlckNvbG9yOiAnIzc4NGFmNCcsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0Y29tcGxldGVkOiB7XHJcblx0XHQnJiAkbGluZSc6IHtcclxuXHRcdFx0Ym9yZGVyQ29sb3I6ICcjNzg0YWY0JyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRsaW5lOiB7XHJcblx0XHRib3JkZXJDb2xvcjogJyNlYWVhZjAnLFxyXG5cdFx0Ym9yZGVyVG9wV2lkdGg6IDMsXHJcblx0XHRib3JkZXJSYWRpdXM6IDEsXHJcblx0fSxcclxufSkoU3RlcENvbm5lY3Rvcik7XHJcblxyXG5jb25zdCB1c2VRb250b1N0ZXBJY29uU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcblx0cm9vdDoge1xyXG5cdFx0Y29sb3I6ICcjZWFlYWYwJyxcclxuXHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdGhlaWdodDogMjIsXHJcblx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuXHR9LFxyXG5cdGFjdGl2ZToge1xyXG5cdFx0Y29sb3I6ICcjNzg0YWY0JyxcclxuXHR9LFxyXG5cdGNpcmNsZToge1xyXG5cdFx0d2lkdGg6IDgsXHJcblx0XHRoZWlnaHQ6IDgsXHJcblx0XHRib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJyxcclxuXHR9LFxyXG5cdGNvbXBsZXRlZDoge1xyXG5cdFx0Y29sb3I6ICcjNzg0YWY0JyxcclxuXHRcdHpJbmRleDogMSxcclxuXHRcdGZvbnRTaXplOiAxOCxcclxuXHR9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIFFvbnRvU3RlcEljb24ocHJvcHMpIHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlUW9udG9TdGVwSWNvblN0eWxlcygpO1xyXG5cdGNvbnN0IHsgYWN0aXZlLCBjb21wbGV0ZWQgfSA9IHByb3BzO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCB7XHJcblx0XHRcdFx0W2NsYXNzZXMuYWN0aXZlXTogYWN0aXZlLFxyXG5cdFx0XHR9KX0+XHJcblx0XHRcdHtjb21wbGV0ZWQgPyAoXHJcblx0XHRcdFx0PENoZWNrIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb21wbGV0ZWR9IC8+XHJcblx0XHRcdCkgOiAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2lyY2xlfSAvPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuUW9udG9TdGVwSWNvbi5wcm9wVHlwZXMgPSB7XHJcblx0LyoqXHJcblx0ICogV2hldGhlciB0aGlzIHN0ZXAgaXMgYWN0aXZlLlxyXG5cdCAqL1xyXG5cdGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXHJcblx0LyoqXHJcblx0ICogTWFyayB0aGUgc3RlcCBhcyBjb21wbGV0ZWQuIElzIHBhc3NlZCB0byBjaGlsZCBjb21wb25lbnRzLlxyXG5cdCAqL1xyXG5cdGNvbXBsZXRlZDogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5jb25zdCBDb2xvcmxpYkNvbm5lY3RvciA9IHdpdGhTdHlsZXMoe1xyXG5cdGFsdGVybmF0aXZlTGFiZWw6IHtcclxuXHRcdHRvcDogMjIsXHJcblx0fSxcclxuXHRhY3RpdmU6IHtcclxuXHRcdCcmICRsaW5lJzoge1xyXG5cdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6XHJcblx0XHRcdFx0J2xpbmVhci1ncmFkaWVudCggOTVkZWcscmdiKDI0MiwxMTMsMzMpIDAlLHJnYigyMzMsNjQsODcpIDUwJSxyZ2IoMTM4LDM1LDEzNSkgMTAwJSknLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGNvbXBsZXRlZDoge1xyXG5cdFx0JyYgJGxpbmUnOiB7XHJcblx0XHRcdGJhY2tncm91bmRJbWFnZTpcclxuXHRcdFx0XHQnbGluZWFyLWdyYWRpZW50KCA5NWRlZyxyZ2IoMjQyLDExMywzMykgMCUscmdiKDIzMyw2NCw4NykgNTAlLHJnYigxMzgsMzUsMTM1KSAxMDAlKScsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0bGluZToge1xyXG5cdFx0aGVpZ2h0OiAzLFxyXG5cdFx0Ym9yZGVyOiAwLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnI2VhZWFmMCcsXHJcblx0XHRib3JkZXJSYWRpdXM6IDEsXHJcblx0fSxcclxufSkoU3RlcENvbm5lY3Rvcik7XHJcblxyXG5jb25zdCB1c2VDb2xvcmxpYlN0ZXBJY29uU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcblx0cm9vdDoge1xyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnI2NjYycsXHJcblx0XHR6SW5kZXg6IDEsXHJcblx0XHRjb2xvcjogJyNmZmYnLFxyXG5cdFx0d2lkdGg6IDUwLFxyXG5cdFx0aGVpZ2h0OiA1MCxcclxuXHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdGJvcmRlclJhZGl1czogJzUwJScsXHJcblx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuXHR9LFxyXG5cdGFjdGl2ZToge1xyXG5cdFx0YmFja2dyb3VuZEltYWdlOlxyXG5cdFx0XHQnbGluZWFyLWdyYWRpZW50KCAxMzZkZWcsIHJnYigyNDIsMTEzLDMzKSAwJSwgcmdiKDIzMyw2NCw4NykgNTAlLCByZ2IoMTM4LDM1LDEzNSkgMTAwJSknLFxyXG5cdFx0Ym94U2hhZG93OiAnMCA0cHggMTBweCAwIHJnYmEoMCwwLDAsLjI1KScsXHJcblx0fSxcclxuXHRjb21wbGV0ZWQ6IHtcclxuXHRcdGJhY2tncm91bmRJbWFnZTpcclxuXHRcdFx0J2xpbmVhci1ncmFkaWVudCggMTM2ZGVnLCByZ2IoMjQyLDExMywzMykgMCUsIHJnYigyMzMsNjQsODcpIDUwJSwgcmdiKDEzOCwzNSwxMzUpIDEwMCUpJyxcclxuXHR9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIENvbG9ybGliU3RlcEljb24ocHJvcHMpIHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlQ29sb3JsaWJTdGVwSWNvblN0eWxlcygpO1xyXG5cdGNvbnN0IHsgYWN0aXZlLCBjb21wbGV0ZWQgfSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCBpY29ucyA9IHtcclxuXHRcdDE6IDxIb3VzZUljb24gLz4sXHJcblx0XHQyOiA8U2V0dGluZ3NJY29uIC8+LFxyXG5cdFx0MzogPEVtb2ppUGVvcGxlSWNvbiAvPixcclxuXHRcdDQ6IDxDaGVja0NpcmNsZUljb24gLz4sXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwge1xyXG5cdFx0XHRcdFtjbGFzc2VzLmFjdGl2ZV06IGFjdGl2ZSxcclxuXHRcdFx0XHRbY2xhc3Nlcy5jb21wbGV0ZWRdOiBjb21wbGV0ZWQsXHJcblx0XHRcdH0pfT5cclxuXHRcdFx0e2ljb25zW1N0cmluZyhwcm9wcy5pY29uKV19XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5Db2xvcmxpYlN0ZXBJY29uLnByb3BUeXBlcyA9IHtcclxuXHQvKipcclxuXHQgKiBXaGV0aGVyIHRoaXMgc3RlcCBpcyBhY3RpdmUuXHJcblx0ICovXHJcblx0YWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcclxuXHQvKipcclxuXHQgKiBNYXJrIHRoZSBzdGVwIGFzIGNvbXBsZXRlZC4gSXMgcGFzc2VkIHRvIGNoaWxkIGNvbXBvbmVudHMuXHJcblx0ICovXHJcblx0Y29tcGxldGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuXHQvKipcclxuXHQgKiBUaGUgbGFiZWwgZGlzcGxheWVkIGluIHRoZSBzdGVwIGljb24uXHJcblx0ICovXHJcblx0aWNvbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRyb290OiB7XHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdH0sXHJcblx0YnV0dG9uOiB7XHJcblx0XHRtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuXHR9LFxyXG5cdGluc3RydWN0aW9uczoge1xyXG5cdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0bWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdH0sXHJcblx0Zm9ybUNvbnRyb2w6IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdG1pbldpZHRoOiAxMjAsXHJcblx0fSxcclxuXHRzZWxlY3RFbXB0eToge1xyXG5cdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIGdldFN0ZXBzKCkge1xyXG5cdHJldHVybiBbXHJcblx0XHQnSW5mb3JtYXRpb24gc3VyIGxhIGxvY2F0aW9uJyxcclxuXHRcdCdJbmZvcm1hdGlvbnMgY29tcGzDqW1lbnRhaXJlcycsXHJcblx0XHQnVm9zIGNvb3Jkb25uw6llcycsXHJcblx0XHQnUsOpY2FwaXR1bGF0aWYnLFxyXG5cdF07XHJcbn1cclxuXHJcbmNvbnN0IFJlc2VydmF0aW9uRm9ybSA9ICh7IHNuYWNrYmFyU2hvd01lc3NhZ2UgfSkgPT4ge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRjb25zdCBbYWN0aXZlU3RlcCwgc2V0QWN0aXZlU3RlcF0gPSB1c2VTdGF0ZSgwKTtcclxuXHRjb25zdCB7IGNvbnRyb2wsIHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm0oe1xyXG5cdFx0cmVWYWxpZGF0ZU1vZGU6ICdvbkNoYW5nZScsXHJcblx0XHRzaG91bGRVbnJlZ2lzdGVyOiBmYWxzZSxcclxuXHRcdGRlZmF1bHRWYWx1ZXM6IHtcclxuXHRcdFx0Z2l0ZTogJ21hbm9sYScsXHJcblx0XHRcdG5iUGVyczogMTAsXHJcblx0XHRcdG5iRW5mOiA1LFxyXG5cdFx0XHRuYkNoaWVuOiAxLFxyXG5cdFx0XHRsaXRGYWl0OiB0cnVlLFxyXG5cdFx0XHRuZXdzbGV0dGVyOiB0cnVlLFxyXG5cclxuXHRcdFx0bm9tOiAnTGFwaWVycmUnLFxyXG5cdFx0XHRwcmVub206ICdKb3NzaWMnLFxyXG5cdFx0XHRhZHJlc3NlOiAnMTggcnVlIHRlc3QnLFxyXG5cdFx0XHRjcDogJzUxMDAwJyxcclxuXHRcdFx0dmlsbGU6ICdtYVZpbGxlJyxcclxuXHRcdFx0dGVsOiAnMDYgMTUgNTUgNTUgNTUnLFxyXG5cdFx0XHRtYWlsOiAnam9zc2ljLmxhcGllcnJlQGdtYWlsLmNvbScsXHJcblx0XHR9LFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKFtcclxuXHRcdHtcclxuXHRcdFx0c3RhcnREYXRlOiBuZXcgRGF0ZSgpLFxyXG5cdFx0XHRlbmREYXRlOiBhZGREYXlzKG5ldyBEYXRlKCksIDcpLFxyXG5cdFx0XHRrZXk6ICdzZWxlY3Rpb24nLFxyXG5cdFx0fSxcclxuXHRdKTtcclxuXHJcblx0Y29uc3QgW2RhdGVBcnJpdmVlLCBzZXREYXRlQXJyaXZlZV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdGNvbnN0IHJlUmVmID0gdXNlUmVmKCk7XHJcblxyXG5cdGNvbnN0IHN0ZXBzID0gZ2V0U3RlcHMoKTtcclxuXHJcblx0Y29uc3QgW3NlbGVjdGVkRGF0ZUFycml2ZWUsIHNldFNlbGVjdGVkRGF0ZUFycml2ZWVdID0gdXNlU3RhdGUoKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlRGF0ZUNoYW5nZUFycml2ZWUgPSAoZGF0ZSkgPT4ge1xyXG5cdFx0c2V0U2VsZWN0ZWREYXRlQXJyaXZlZShkYXRlKTtcclxuXHRcdHNldFNlbGVjdGVkRGF0ZURlcGFydChkYXRlKTtcclxuXHR9O1xyXG5cdGNvbnN0IFtzZWxlY3RlZERhdGVEZXBhcnQsIHNldFNlbGVjdGVkRGF0ZURlcGFydF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVEYXRlQ2hhbmdlRGVwYXJ0ID0gKGRhdGUpID0+IHtcclxuXHRcdHNldFNlbGVjdGVkRGF0ZURlcGFydChkYXRlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xyXG5cdFx0c2V0QWN0aXZlU3RlcCgocHJldkFjdGl2ZVN0ZXApID0+IHByZXZBY3RpdmVTdGVwICsgMSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcclxuXHRcdHNldEFjdGl2ZVN0ZXAoKHByZXZBY3RpdmVTdGVwKSA9PiBwcmV2QWN0aXZlU3RlcCAtIDEpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xyXG5cdFx0c2V0QWN0aXZlU3RlcCgwKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBbZ2l0ZXMsIHNldEdpdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgbGlzdERlc0dpdGVzID0gKCkgPT4ge1xyXG5cdFx0bGlzdEdpdGVzTm9tcygpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0R2l0ZXMoLi4uZ2l0ZXMsIGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGlzdERlc0dpdGVzKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCBpbmZvTG9jID0gKCkgPT4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9Jyc+XHJcblx0XHRcdDxoMj5JbmZvcm1hdGlvbnMgc3VyIGxhIGxvY2F0aW9uPC9oMj5cclxuXHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdzcGFjZS1hcm91bmQnPlxyXG5cdFx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0PElucHV0TGFiZWxcclxuXHRcdFx0XHRcdFx0c2hyaW5rXHJcblx0XHRcdFx0XHRcdGlkPSdkZW1vLXNpbXBsZS1zZWxlY3QtcGxhY2Vob2xkZXItbGFiZWwtbGFiZWwnPlxyXG5cdFx0XHRcdFx0XHRSw6lzZXJ2YXRpb24gc3VyIGxlIGfDrnRlIDpcclxuXHRcdFx0XHRcdDwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0XHRcdG5hbWU9J2dpdGUnXHJcblx0XHRcdFx0XHRcdGFzPXtcclxuXHRcdFx0XHRcdFx0XHQ8U2VsZWN0IGlkPSdnaXRlLXNlbGVjdCc+XHJcblx0XHRcdFx0XHRcdFx0XHR7Z2l0ZXMubWFwKChnaXRlLCBpKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSBrZXk9e2dpdGUuc2x1Z30gdmFsdWU9e2dpdGUuc2x1Z30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2dpdGUubm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0PC9TZWxlY3Q+XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSduYlBlcnMnXHJcblx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J05vbWJyZSBkZSBwZXJzb25uZXMgdG90YWwnXHJcblx0XHRcdFx0XHR0eXBlPSdudW1iZXInXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdG5hbWU9J25iRW5mJ1xyXG5cdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdGxhYmVsPSdEb250IGVuZmFudHMgZGUgbW9pbnMgZGUgMTggYW5zJ1xyXG5cdFx0XHRcdFx0dHlwZT0nbnVtYmVyJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9HcmlkPlxyXG5cclxuXHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0PElucHV0TGFiZWxcclxuXHRcdFx0XHRcdHNocmlua1xyXG5cdFx0XHRcdFx0aWQ9J2RlbW8tc2ltcGxlLXNlbGVjdC1wbGFjZWhvbGRlci1sYWJlbC1sYWJlbCc+XHJcblx0XHRcdFx0XHREYXRlcyBkZSBzw6lqb3V0XHJcblx0XHRcdFx0PC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0bmFtZT0nZGF0ZXMnXHJcblx0XHRcdFx0XHRhcz17XHJcblx0XHRcdFx0XHRcdDxEYXRlUmFuZ2VQaWNrZXJcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGl0ZW0pID0+IHNldFN0YXRlKFtpdGVtLnNlbGVjdGlvbl0pfVxyXG5cdFx0XHRcdFx0XHRcdHNob3dTZWxlY3Rpb25QcmV2aWV3PXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRcdG1vdmVSYW5nZU9uRmlyc3RTZWxlY3Rpb249e2ZhbHNlfVxyXG5cdFx0XHRcdFx0XHRcdG1vbnRocz17Mn1cclxuXHRcdFx0XHRcdFx0XHRyYW5nZXM9e3N0YXRlfVxyXG5cdFx0XHRcdFx0XHRcdGRpcmVjdGlvbj0naG9yaXpvbnRhbCdcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cclxuXHRcdFx0ey8qIDxNdWlQaWNrZXJzVXRpbHNQcm92aWRlciB1dGlscz17RGF0ZUZuc1V0aWxzfT5cclxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXIganVzdGlmeT0nc3BhY2UtYXJvdW5kJz5cclxuXHRcdFx0XHRcdDxLZXlib2FyZERhdGVQaWNrZXJcclxuXHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRtYXJnaW49J25vcm1hbCdcclxuXHRcdFx0XHRcdFx0aWQ9J2RhdGUtcGlja2VyLWRpYWxvZydcclxuXHRcdFx0XHRcdFx0bmFtZT0nZGF0ZUFycml2ZWUnXHJcblx0XHRcdFx0XHRcdGxhYmVsPVwiRGF0ZSBkJ2Fycml2w6llXCJcclxuXHRcdFx0XHRcdFx0Zm9ybWF0PSdNTS9kZC95eXl5J1xyXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9JydcclxuXHRcdFx0XHRcdFx0dmFsdWU9e3NlbGVjdGVkRGF0ZUFycml2ZWV9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVEYXRlQ2hhbmdlQXJyaXZlZX1cclxuXHRcdFx0XHRcdFx0S2V5Ym9hcmRCdXR0b25Qcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRcdCdhcmlhLWxhYmVsJzogJ2NoYW5nZSBkYXRlJyxcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdFx0PEtleWJvYXJkRGF0ZVBpY2tlclxyXG5cdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdG1hcmdpbj0nbm9ybWFsJ1xyXG5cdFx0XHRcdFx0XHRpZD0nZGF0ZS1waWNrZXItZGlhbG9nJ1xyXG5cdFx0XHRcdFx0XHRuYW1lPSdkYXRlRGVwYXJ0J1xyXG5cdFx0XHRcdFx0XHRsYWJlbD0nRGF0ZSBkZSBkw6lwYXJ0J1xyXG5cdFx0XHRcdFx0XHRmb3JtYXQ9J01NL2RkL3l5eXknXHJcblx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT0nJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17c2VsZWN0ZWREYXRlRGVwYXJ0fVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlRGF0ZUNoYW5nZURlcGFydH1cclxuXHRcdFx0XHRcdFx0S2V5Ym9hcmRCdXR0b25Qcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRcdCdhcmlhLWxhYmVsJzogJ2NoYW5nZSBkYXRlJyxcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8L011aVBpY2tlcnNVdGlsc1Byb3ZpZGVyPiAqL31cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblx0Y29uc3QgaW5mb0NvbXAgPSAoKSA9PiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8aDI+SW5mb3JtYXRpb25zIHN1cHBsw6ltZW50YWlyZXM8L2gyPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2xcclxuXHRcdFx0XHRcdGNvbXBvbmVudD0nZmllbGRzZXQnXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0PEZvcm1MYWJlbCBjb21wb25lbnQ9J2xlZ2VuZCc+XHJcblx0XHRcdFx0XHRcdE1lcmNpIGQnaW5kaXF1ZXIgc2kgdm91cyBub3VzIGF2ZXogZMOpamEgY29udGFjdMOpIHBhciA6XHJcblx0XHRcdFx0XHQ8L0Zvcm1MYWJlbD5cclxuXHRcdFx0XHRcdDxGb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdzcGFjZS1hcm91bmQnPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250cm9sPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PENoZWNrYm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nY29udGFjdE1haWwnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17ZmFsc2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD0nTWFpbCdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250cm9sPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PENoZWNrYm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nY29udGFjdFRlbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPSdUw6lsw6lwaG9uZSdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250cm9sPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PENoZWNrYm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nY29udGFjdEFicml0ZWwnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17ZmFsc2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD0nQWJyaXRlbCdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250cm9sPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PENoZWNrYm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nY29udGFjdExlYm9uY29pbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPSdMZWJvbmNvaW4nXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xMYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udHJvbD17XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxDaGVja2JveFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J2NvbnRhY3RBdXRyZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPSdBdXRyZSdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cclxuXHRcdFx0XHRcdHsvKiA8Rm9ybUhlbHBlclRleHQ+QmUgY2FyZWZ1bDwvRm9ybUhlbHBlclRleHQ+ICovfVxyXG5cdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J3NwYWNlLWFyb3VuZCc+XHJcblx0XHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0bmFtZT0nbmJDaGllbidcclxuXHRcdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdFx0bGFiZWw9J05vbWJyZSBkZSBjaGllbiA/ICgz4oKsL2pvdXIvYW5pbWFsKSdcclxuXHRcdFx0XHRcdFx0dHlwZT0nbnVtYmVyJ1xyXG5cdFx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PEZvcm1Db250cm9sTGFiZWxcclxuXHRcdFx0XHRcdFx0Y29udHJvbD17XHJcblx0XHRcdFx0XHRcdFx0PFN3aXRjaFxyXG5cdFx0XHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdENoZWNrZWRcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J2xpdEZhaXQnXHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcj0ncHJpbWFyeSdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGxhYmVsPVwiU291aGFpdGV6LXZvdXMgbCdvcHRpb24gbGl0IGZhaXQgw6AgbCdhcnJpdsOpZSA/XCJcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xMYWJlbFxyXG5cdFx0XHRcdFx0XHRjb250cm9sPXtcclxuXHRcdFx0XHRcdFx0XHQ8U3dpdGNoXHJcblx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0Q2hlY2tlZFxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT0nbmV3c2xldHRlcidcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yPSdwcmltYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9J1NvdXNjcmlyZSDDoCBub3RyZSBuZXdzbGV0dGVyIHBvdXIgYsOpbsOpZmljaWVyIGRlIHJlbWlzZXMgZXQgb2ZmcmVzIHByb21vdGlvbm5lbGxlcyA/J1xyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyPlxyXG5cdFx0XHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0bmFtZT0naW5mb0NvbXBsJ1xyXG5cdFx0XHRcdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9J0luZm9ybWF0aW9ucyBjb21wbMOpbWVudGFpcmVzIC8gUXVlc3Rpb25zIDonXHJcblx0XHRcdFx0XHRcdFx0bXVsdGlsaW5lXHJcblx0XHRcdFx0XHRcdFx0cm93cz17M31cclxuXHRcdFx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxuXHRjb25zdCBDb29yZCA9ICgpID0+IChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxoMj5Wb3MgY29vcmRvbm7DqWVzPC9oMj5cclxuXHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdzcGFjZS1hcm91bmQnPlxyXG5cdFx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0PElucHV0TGFiZWxcclxuXHRcdFx0XHRcdFx0c2hyaW5rXHJcblx0XHRcdFx0XHRcdGlkPSdkZW1vLXNpbXBsZS1zZWxlY3QtcGxhY2Vob2xkZXItbGFiZWwtbGFiZWwnPlxyXG5cdFx0XHRcdFx0XHRDaXZpbGl0w6lcclxuXHRcdFx0XHRcdDwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0XHRcdG5hbWU9J2NpdmlsaXRlJ1xyXG5cdFx0XHRcdFx0XHRhcz17XHJcblx0XHRcdFx0XHRcdFx0PFNlbGVjdCBpZD0nY2l2aWxpdGUtc2VsZWN0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nTS4gJiBNbWUnPk0uICYgTW1lPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nTW1lJz5NbWU8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdNbGxlJz5NbGxlPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nTS4nPk0uPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nQXNzb2NpYXRpb24nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRBc3NvY2lhdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT1cIkNvbWl0w6kgZCdlbnRyZXByaXNlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdENvbWl0w6kgZCdlbnRyZXByaXNlXHJcblx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdTb2Npw6l0w6knPlNvY2nDqXTDqTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J0VudHJlcHJpc2UnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRFbnRyZXByaXNlXHJcblx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdGb3llciBkZSB2aWUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRGb3llciBkZSB2aWVcclxuXHRcdFx0XHRcdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9XCJGb3llciBkJ2FjY3VlaWxcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Rm95ZXIgZCdhY2N1ZWlsXHJcblx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdGYW1pbGxlJz5GYW1pbGxlPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nQXV0cmVzJz5BdXRyZXM8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDwvU2VsZWN0PlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdG5hbWU9J25vbSdcclxuXHRcdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0XHRsYWJlbD0nTm9tJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSdwcmVub20nXHJcblx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J1Byw6lub20nXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdzcGFjZS1hcm91bmQnPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdG5hbWU9J2FkcmVzc2UnXHJcblx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J0FkcmVzc2UnXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdG5hbWU9J2NwJ1xyXG5cdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdGxhYmVsPSdDb2RlIFBvc3RhbCdcclxuXHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0bmFtZT0ndmlsbGUnXHJcblx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J1ZpbGxlJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdDxJbnB1dExhYmVsXHJcblx0XHRcdFx0XHRcdHNocmlua1xyXG5cdFx0XHRcdFx0XHRpZD0nZGVtby1zaW1wbGUtc2VsZWN0LXBsYWNlaG9sZGVyLWxhYmVsLWxhYmVsJz5cclxuXHRcdFx0XHRcdFx0UGF5c1xyXG5cdFx0XHRcdFx0PC9JbnB1dExhYmVsPlxyXG5cclxuXHRcdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0XHRcdG5hbWU9J3BheXMnXHJcblx0XHRcdFx0XHRcdGFzPXtcclxuXHRcdFx0XHRcdFx0XHQ8U2VsZWN0IGlkPSdwYXlzLXNlbGVjdCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2ZyYW5jZSc+RnJhbmNlPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nJz4tLS0tLS0tLTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2F1dHJlcyc+QXV0cmVzPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nYWxsZW1hZ25lJz5BbGxlbWFnbmU8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdhbmdsZXRlcnJlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0QW5nbGV0ZXJyZVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nYmVsZ2lxdWUnPkJlbGdpcXVlPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0naG9sbGFuZGUnPkhvbGxhbmRlPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nbHV4ZW1ib3VyZyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEx1eGVtYm91cmdcclxuXHRcdFx0XHRcdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J3N1aXNzZSc+U3Vpc3NlPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8L1NlbGVjdD5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdzcGFjZS1hcm91bmQnPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdG5hbWU9J3RlbCdcclxuXHRcdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0XHRsYWJlbD0nVMOpbMOpcGhvbmUnXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdG5hbWU9J21haWwnXHJcblx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J0VtYWlsJ1xyXG5cdFx0XHRcdFx0dHlwZT0nbWFpbCdcclxuXHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblx0Y29uc3QgcmVjYXAgPSAoKSA9PiA8cD5KU09OLnN0cmluZ2lmeSgpPC9wPjtcclxuXHJcblx0ZnVuY3Rpb24gZ2V0U3RlcENvbnRlbnQoc3RlcCkge1xyXG5cdFx0c3dpdGNoIChzdGVwKSB7XHJcblx0XHRcdGNhc2UgMDpcclxuXHRcdFx0XHRyZXR1cm4gaW5mb0xvYygpO1xyXG5cdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0cmV0dXJuIGluZm9Db21wKCk7XHJcblx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRyZXR1cm4gQ29vcmQoKTtcclxuXHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdHJldHVybiByZWNhcCgpO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHJldHVybiAnRXJyZXVyJztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcclxuXHRcdHNldExvYWRpbmcodHJ1ZSk7XHJcblx0XHRkYXRhLnRva2VuID0gYXdhaXQgcmVSZWYuY3VycmVudC5leGVjdXRlQXN5bmMoKTtcclxuXHRcdHJlUmVmLmN1cnJlbnQucmVzZXQoKTtcclxuXHRcdGNvbnNvbGUubG9nKCdvblN1Ym1pdCBkYXRhID0+JywgZGF0YSk7XHJcblx0XHRjcmVhdGVSZXNlcnZhdGlvbihkYXRhKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3Jlc3VsdCB2YXV0ID0+JywgcmVzdWx0KTtcclxuXHRcdFx0aWYgKHJlc3VsdC5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdC5lcnJvcik7XHJcblx0XHRcdFx0c25hY2tiYXJTaG93TWVzc2FnZShgJHtyZXN1bHQuZXJyb3J9YCk7XHJcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHRcdH0gZWxzZSBpZiAocmVzdWx0LmRlamFSZXNlcnZlTWVzc2FnZSkge1xyXG5cdFx0XHRcdHNuYWNrYmFyU2hvd01lc3NhZ2UoYCR7cmVzdWx0LmRlamFSZXNlcnZlTWVzc2FnZX1gKTtcclxuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0XHRzbmFja2JhclNob3dNZXNzYWdlKGAke3Jlc3VsdC5tZXNzYWdlfWAsICdzdWNjZXNzJyk7XHJcblxyXG5cdFx0XHRcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdC8vIFx0Um91dGVyLnB1c2goJy8nKTtcclxuXHRcdFx0XHQvLyB9LCAzMDAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxDb250YWluZXI+XHJcblx0XHRcdHtsb2FkaW5nICYmIDxDaXJjdWxhclByb2dyZXNzIC8+fVxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcblx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG5cdFx0XHRcdFx0PFN0ZXBwZXJcclxuXHRcdFx0XHRcdFx0YWx0ZXJuYXRpdmVMYWJlbFxyXG5cdFx0XHRcdFx0XHRhY3RpdmVTdGVwPXthY3RpdmVTdGVwfVxyXG5cdFx0XHRcdFx0XHRjb25uZWN0b3I9ezxDb2xvcmxpYkNvbm5lY3RvciAvPn0+XHJcblx0XHRcdFx0XHRcdHtzdGVwcy5tYXAoKGxhYmVsKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PFN0ZXAga2V5PXtsYWJlbH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8U3RlcExhYmVsIFN0ZXBJY29uQ29tcG9uZW50PXtDb2xvcmxpYlN0ZXBJY29ufT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2xhYmVsfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9TdGVwTGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PC9TdGVwPlxyXG5cdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdDwvU3RlcHBlcj5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdHthY3RpdmVTdGVwID09PSBzdGVwcy5sZW5ndGggPyAoXHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdHsvKiBWb2lyIHBvdXQgYWpvdXRlciBpc1N1Ym1pdGVkID09PSB0cnVlICovfVxyXG5cdFx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmluc3RydWN0aW9uc30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFZvdHJlIGRlbWFuZGUgYSBiaWVuIMOpdMOpIHByaXNlIGVuIGNvbXB0ZVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVSZXNldH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFJlY29tbWVuY2VyXHJcblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmluc3RydWN0aW9uc30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtnZXRTdGVwQ29udGVudChhY3RpdmVTdGVwKX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17YWN0aXZlU3RlcCA9PT0gMH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVCYWNrfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFJldG91clxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2FjdGl2ZVN0ZXAgPT09IHN0ZXBzLmxlbmd0aCAtIDEgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nc3VibWl0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD0nY29udGFpbmVkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I9J3ByaW1hcnknXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFZhbGlkZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdjb250YWluZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcj0ncHJpbWFyeSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZU5leHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFN1aXZhbnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8UmVDQVBUQ0hBXHJcblx0XHRcdFx0XHRcdHNpdGVrZXk9e1JFQ0FQVENIQV9TRUNSRVRfS0VZfVxyXG5cdFx0XHRcdFx0XHRyZWY9e3JlUmVmfVxyXG5cdFx0XHRcdFx0XHRzaXplPSdpbnZpc2libGUnXHJcblx0XHRcdFx0XHRcdC8vIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvQ29udGFpbmVyPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU25hY2tiYXIoUmVzZXJ2YXRpb25Gb3JtKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBidWlsZEZvcm1hdExvbmdGbjtcbmZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBidWlsZExvY2FsaXplRm47XG5mdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuXG4gICAgdmFyIHZhbHVlc0FycmF5O1xuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2FyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbd2lkdGhdIHx8IGFyZ3MudmFsdWVzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICB9XG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDtcbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gYnVpbGRNYXRjaEZuO1xuZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eVN0cmluZywgZGlydHlPcHRpb25zKSB7XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyhkaXJ0eVN0cmluZyk7XG4gICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcblxuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuXG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcblxuICAgIHZhciB2YWx1ZTtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHBhcnNlUGF0dGVybnMpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICB2YWx1ZSA9IHBhcnNlUGF0dGVybnMuZmluZEluZGV4KGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3Qoc3RyaW5nKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChzdHJpbmcpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKVxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBidWlsZE1hdGNoUGF0dGVybkZuO1xuZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlTdHJpbmcsIGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcoZGlydHlTdHJpbmcpO1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuXG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcblxuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpXG4gICAgfTtcbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZm9ybWF0RGlzdGFuY2U7XG52YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG5cbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcblxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcblxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcblxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG5cbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG5cbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG5cbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcblxuZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciByZXN1bHQ7XG4gIGlmICh0eXBlb2YgZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50KTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9pbmRleCA9IHJlcXVpcmUoJy4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMnKTtcblxudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmRleCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcblxudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG5cbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xuXG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogKDAsIF9pbmRleDIuZGVmYXVsdCkoe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuXG4gIHRpbWU6ICgwLCBfaW5kZXgyLmRlZmF1bHQpKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcblxuICBkYXRlVGltZTogKDAsIF9pbmRleDIuZGVmYXVsdCkoe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZm9ybWF0TG9uZztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZm9ybWF0UmVsYXRpdmU7XG52YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBkYXRlLCBiYXNlRGF0ZSwgb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfaW5kZXggPSByZXF1aXJlKCcuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcycpO1xuXG52YXIgX2luZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luZGV4KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcblxudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG5cbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG5cbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG5cbmZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIGRpcnR5T3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGA6XG4gIC8vXG4gIC8vICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge31cbiAgLy8gICB2YXIgdW5pdCA9IFN0cmluZyhvcHRpb25zLnVuaXQpXG4gIC8vXG4gIC8vIHdoZXJlIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn1cblxudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuXG4gIGVyYTogKDAsIF9pbmRleDIuZGVmYXVsdCkoe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXgyLmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHF1YXJ0ZXIpIC0gMTtcbiAgICB9XG4gIH0pLFxuXG4gIG1vbnRoOiAoMCwgX2luZGV4Mi5kZWZhdWx0KSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcblxuICBkYXk6ICgwLCBfaW5kZXgyLmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcblxuICBkYXlQZXJpb2Q6ICgwLCBfaW5kZXgyLmRlZmF1bHQpKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gbG9jYWxpemU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfaW5kZXggPSByZXF1aXJlKCcuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMnKTtcblxudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmRleCk7XG5cbnZhciBfaW5kZXgzID0gcmVxdWlyZSgnLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMnKTtcblxudmFyIF9pbmRleDQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmRleDMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcblxudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcblxudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xuXG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcblxudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xuXG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG5cbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogKDAsIF9pbmRleDIuZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcblxuICBlcmE6ICgwLCBfaW5kZXg0LmRlZmF1bHQpKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG5cbiAgcXVhcnRlcjogKDAsIF9pbmRleDQuZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcblxuICBtb250aDogKDAsIF9pbmRleDQuZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG5cbiAgZGF5OiAoMCwgX2luZGV4NC5kZWZhdWx0KSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleDQuZGVmYXVsdCkoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBtYXRjaDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9pbmRleCA9IHJlcXVpcmUoJy4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcycpO1xuXG52YXIgX2luZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luZGV4KTtcblxudmFyIF9pbmRleDMgPSByZXF1aXJlKCcuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcycpO1xuXG52YXIgX2luZGV4NCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luZGV4Myk7XG5cbnZhciBfaW5kZXg1ID0gcmVxdWlyZSgnLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzJyk7XG5cbnZhciBfaW5kZXg2ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5kZXg1KTtcblxudmFyIF9pbmRleDcgPSByZXF1aXJlKCcuL19saWIvbG9jYWxpemUvaW5kZXguanMnKTtcblxudmFyIF9pbmRleDggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmRleDcpO1xuXG52YXIgX2luZGV4OSA9IHJlcXVpcmUoJy4vX2xpYi9tYXRjaC9pbmRleC5qcycpO1xuXG52YXIgX2luZGV4MTAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmRleDkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgZm9ybWF0RGlzdGFuY2U6IF9pbmRleDIuZGVmYXVsdCxcbiAgZm9ybWF0TG9uZzogX2luZGV4NC5kZWZhdWx0LFxuICBmb3JtYXRSZWxhdGl2ZTogX2luZGV4Ni5kZWZhdWx0LFxuICBsb2NhbGl6ZTogX2luZGV4OC5kZWZhdWx0LFxuICBtYXRjaDogX2luZGV4MTAuZGVmYXVsdCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMCAvKiBTdW5kYXkgKi9cbiAgICAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBsb2NhbGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9EYXlDZWxsID0gcmVxdWlyZShcIi4uL0RheUNlbGxcIik7XG5cbnZhciBfTW9udGggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9Nb250aFwiKSk7XG5cbnZhciBfRGF0ZUlucHV0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vRGF0ZUlucHV0XCIpKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTtcblxudmFyIF9jbGFzc25hbWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3JlYWN0TGlzdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0LWxpc3RcIikpO1xuXG52YXIgX3NoYWxsb3dFcXVhbCA9IHJlcXVpcmUoXCJzaGFsbG93LWVxdWFsXCIpO1xuXG52YXIgX2RhdGVGbnMgPSByZXF1aXJlKFwiZGF0ZS1mbnNcIik7XG5cbnZhciBfZW5VUyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImRhdGUtZm5zL2xvY2FsZS9lbi1VU1wiKSk7XG5cbnZhciBfc3R5bGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vc3R5bGVzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIENhbGVuZGFyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ2FsZW5kYXIsIF9QdXJlQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDYWxlbmRhcihfcHJvcHMsIGNvbnRleHQpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2FsZW5kYXIpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoQ2FsZW5kYXIpLmNhbGwodGhpcywgX3Byb3BzLCBjb250ZXh0KSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZm9jdXNUb0RhdGVcIiwgZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogX3RoaXMucHJvcHM7XG4gICAgICB2YXIgcHJldmVudFVubmVjZXNzYXJ5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB0cnVlO1xuXG4gICAgICBpZiAoIXByb3BzLnNjcm9sbC5lbmFibGVkKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBmb2N1c2VkRGF0ZTogZGF0ZVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0YXJnZXRNb250aEluZGV4ID0gKDAsIF9kYXRlRm5zLmRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKShkYXRlLCBwcm9wcy5taW5EYXRlLCBfdGhpcy5kYXRlT3B0aW9ucyk7XG5cbiAgICAgIHZhciB2aXNpYmxlTW9udGhzID0gX3RoaXMubGlzdC5nZXRWaXNpYmxlUmFuZ2UoKTtcblxuICAgICAgaWYgKHByZXZlbnRVbm5lY2Vzc2FyeSAmJiB2aXNpYmxlTW9udGhzLmluY2x1ZGVzKHRhcmdldE1vbnRoSW5kZXgpKSByZXR1cm47XG4gICAgICBfdGhpcy5pc0ZpcnN0UmVuZGVyID0gdHJ1ZTtcblxuICAgICAgX3RoaXMubGlzdC5zY3JvbGxUbyh0YXJnZXRNb250aEluZGV4KTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb2N1c2VkRGF0ZTogZGF0ZVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwidXBkYXRlU2hvd25EYXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogX3RoaXMucHJvcHM7XG4gICAgICB2YXIgbmV3UHJvcHMgPSBwcm9wcy5zY3JvbGwuZW5hYmxlZCA/IF9vYmplY3RTcHJlYWQoe30sIHByb3BzLCB7XG4gICAgICAgIG1vbnRoczogX3RoaXMubGlzdC5nZXRWaXNpYmxlUmFuZ2UoKS5sZW5ndGhcbiAgICAgIH0pIDogcHJvcHM7XG4gICAgICB2YXIgbmV3Rm9jdXMgPSAoMCwgX3V0aWxzLmNhbGNGb2N1c0RhdGUpKF90aGlzLnN0YXRlLmZvY3VzZWREYXRlLCBuZXdQcm9wcyk7XG5cbiAgICAgIF90aGlzLmZvY3VzVG9EYXRlKG5ld0ZvY3VzLCBuZXdQcm9wcyk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwidXBkYXRlUHJldmlld1wiLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICBpZiAoIXZhbCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgcHJldmlldzogbnVsbFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBwcmV2aWV3ID0ge1xuICAgICAgICBzdGFydERhdGU6IHZhbCxcbiAgICAgICAgZW5kRGF0ZTogdmFsLFxuICAgICAgICBjb2xvcjogX3RoaXMucHJvcHMuY29sb3JcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcHJldmlldzogcHJldmlld1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY2hhbmdlU2hvd25EYXRlXCIsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdmFyIG1vZGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdzZXQnO1xuICAgICAgdmFyIGZvY3VzZWREYXRlID0gX3RoaXMuc3RhdGUuZm9jdXNlZERhdGU7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBvblNob3duRGF0ZUNoYW5nZSA9IF90aGlzJHByb3BzLm9uU2hvd25EYXRlQ2hhbmdlLFxuICAgICAgICAgIG1pbkRhdGUgPSBfdGhpcyRwcm9wcy5taW5EYXRlLFxuICAgICAgICAgIG1heERhdGUgPSBfdGhpcyRwcm9wcy5tYXhEYXRlO1xuICAgICAgdmFyIG1vZGVNYXBwZXIgPSB7XG4gICAgICAgIG1vbnRoT2Zmc2V0OiBmdW5jdGlvbiBtb250aE9mZnNldCgpIHtcbiAgICAgICAgICByZXR1cm4gKDAsIF9kYXRlRm5zLmFkZE1vbnRocykoZm9jdXNlZERhdGUsIHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0TW9udGg6IGZ1bmN0aW9uIHNldE1vbnRoKCkge1xuICAgICAgICAgIHJldHVybiAoMCwgX2RhdGVGbnMuc2V0TW9udGgpKGZvY3VzZWREYXRlLCB2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldFllYXI6IGZ1bmN0aW9uIHNldFllYXIoKSB7XG4gICAgICAgICAgcmV0dXJuICgwLCBfZGF0ZUZucy5zZXRZZWFyKShmb2N1c2VkRGF0ZSwgdmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCgpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB2YXIgbmV3RGF0ZSA9ICgwLCBfZGF0ZUZucy5taW4pKFsoMCwgX2RhdGVGbnMubWF4KShbbW9kZU1hcHBlclttb2RlXSgpLCBtaW5EYXRlXSksIG1heERhdGVdKTtcblxuICAgICAgX3RoaXMuZm9jdXNUb0RhdGUobmV3RGF0ZSwgX3RoaXMucHJvcHMsIGZhbHNlKTtcblxuICAgICAgb25TaG93bkRhdGVDaGFuZ2UgJiYgb25TaG93bkRhdGVDaGFuZ2UobmV3RGF0ZSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaGFuZGxlUmFuZ2VGb2N1c0NoYW5nZVwiLCBmdW5jdGlvbiAocmFuZ2VzSW5kZXgsIHJhbmdlSXRlbUluZGV4KSB7XG4gICAgICBfdGhpcy5wcm9wcy5vblJhbmdlRm9jdXNDaGFuZ2UgJiYgX3RoaXMucHJvcHMub25SYW5nZUZvY3VzQ2hhbmdlKFtyYW5nZXNJbmRleCwgcmFuZ2VJdGVtSW5kZXhdKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJoYW5kbGVTY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9uU2hvd25EYXRlQ2hhbmdlID0gX3RoaXMkcHJvcHMyLm9uU2hvd25EYXRlQ2hhbmdlLFxuICAgICAgICAgIG1pbkRhdGUgPSBfdGhpcyRwcm9wczIubWluRGF0ZTtcbiAgICAgIHZhciBmb2N1c2VkRGF0ZSA9IF90aGlzLnN0YXRlLmZvY3VzZWREYXRlO1xuXG4gICAgICB2YXIgX2Fzc2VydFRoaXNJbml0aWFsaXplID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksXG4gICAgICAgICAgaXNGaXJzdFJlbmRlciA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZS5pc0ZpcnN0UmVuZGVyO1xuXG4gICAgICB2YXIgdmlzaWJsZU1vbnRocyA9IF90aGlzLmxpc3QuZ2V0VmlzaWJsZVJhbmdlKCk7IC8vIHByZXZlbnQgc2Nyb2xsIGp1bXAgd2l0aCB3cm9uZyB2aXNpYmxlIHZhbHVlXG5cblxuICAgICAgaWYgKHZpc2libGVNb250aHNbMF0gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgdmFyIHZpc2libGVNb250aCA9ICgwLCBfZGF0ZUZucy5hZGRNb250aHMpKG1pbkRhdGUsIHZpc2libGVNb250aHNbMF0gfHwgMCk7XG4gICAgICB2YXIgaXNGb2N1c2VkVG9EaWZmZXJlbnQgPSAhKDAsIF9kYXRlRm5zLmlzU2FtZU1vbnRoKSh2aXNpYmxlTW9udGgsIGZvY3VzZWREYXRlKTtcblxuICAgICAgaWYgKGlzRm9jdXNlZFRvRGlmZmVyZW50ICYmICFpc0ZpcnN0UmVuZGVyKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBmb2N1c2VkRGF0ZTogdmlzaWJsZU1vbnRoXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9uU2hvd25EYXRlQ2hhbmdlICYmIG9uU2hvd25EYXRlQ2hhbmdlKHZpc2libGVNb250aCk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmlzRmlyc3RSZW5kZXIgPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJyZW5kZXJNb250aEFuZFllYXJcIiwgZnVuY3Rpb24gKGZvY3VzZWREYXRlLCBjaGFuZ2VTaG93bkRhdGUsIHByb3BzKSB7XG4gICAgICB2YXIgc2hvd01vbnRoQXJyb3cgPSBwcm9wcy5zaG93TW9udGhBcnJvdyxcbiAgICAgICAgICBtaW5EYXRlID0gcHJvcHMubWluRGF0ZSxcbiAgICAgICAgICBtYXhEYXRlID0gcHJvcHMubWF4RGF0ZSxcbiAgICAgICAgICBzaG93TW9udGhBbmRZZWFyUGlja2VycyA9IHByb3BzLnNob3dNb250aEFuZFllYXJQaWNrZXJzO1xuICAgICAgdmFyIHVwcGVyWWVhckxpbWl0ID0gKG1heERhdGUgfHwgQ2FsZW5kYXIuZGVmYXVsdFByb3BzLm1heERhdGUpLmdldEZ1bGxZZWFyKCk7XG4gICAgICB2YXIgbG93ZXJZZWFyTGltaXQgPSAobWluRGF0ZSB8fCBDYWxlbmRhci5kZWZhdWx0UHJvcHMubWluRGF0ZSkuZ2V0RnVsbFllYXIoKTtcbiAgICAgIHZhciBzdHlsZXMgPSBfdGhpcy5zdHlsZXM7XG4gICAgICByZXR1cm4gX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgb25Nb3VzZVVwOiBmdW5jdGlvbiBvbk1vdXNlVXAoZSkge1xuICAgICAgICAgIHJldHVybiBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWU6IHN0eWxlcy5tb250aEFuZFllYXJXcmFwcGVyXG4gICAgICB9LCBzaG93TW9udGhBcnJvdyA/IF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzM1tcImRlZmF1bHRcIl0pKHN0eWxlcy5uZXh0UHJldkJ1dHRvbiwgc3R5bGVzLnByZXZCdXR0b24pLFxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgIHJldHVybiBjaGFuZ2VTaG93bkRhdGUoLTEsICdtb250aE9mZnNldCcpO1xuICAgICAgICB9XG4gICAgICB9LCBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJpXCIsIG51bGwpKSA6IG51bGwsIHNob3dNb250aEFuZFllYXJQaWNrZXJzID8gX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogc3R5bGVzLm1vbnRoQW5kWWVhclBpY2tlcnNcbiAgICAgIH0sIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IHN0eWxlcy5tb250aFBpY2tlclxuICAgICAgfSwgX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsIHtcbiAgICAgICAgdmFsdWU6IGZvY3VzZWREYXRlLmdldE1vbnRoKCksXG4gICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShlKSB7XG4gICAgICAgICAgcmV0dXJuIGNoYW5nZVNob3duRGF0ZShlLnRhcmdldC52YWx1ZSwgJ3NldE1vbnRoJyk7XG4gICAgICAgIH1cbiAgICAgIH0sIF90aGlzLnN0YXRlLm1vbnRoTmFtZXMubWFwKGZ1bmN0aW9uIChtb250aE5hbWUsIGkpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7XG4gICAgICAgICAga2V5OiBpLFxuICAgICAgICAgIHZhbHVlOiBpXG4gICAgICAgIH0sIG1vbnRoTmFtZSk7XG4gICAgICB9KSkpLCBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBzdHlsZXMubW9udGhBbmRZZWFyRGl2aWRlclxuICAgICAgfSksIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IHN0eWxlcy55ZWFyUGlja2VyXG4gICAgICB9LCBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwge1xuICAgICAgICB2YWx1ZTogZm9jdXNlZERhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGUpIHtcbiAgICAgICAgICByZXR1cm4gY2hhbmdlU2hvd25EYXRlKGUudGFyZ2V0LnZhbHVlLCAnc2V0WWVhcicpO1xuICAgICAgICB9XG4gICAgICB9LCBuZXcgQXJyYXkodXBwZXJZZWFyTGltaXQgLSBsb3dlclllYXJMaW1pdCArIDEpLmZpbGwodXBwZXJZZWFyTGltaXQpLm1hcChmdW5jdGlvbiAodmFsLCBpKSB7XG4gICAgICAgIHZhciB5ZWFyID0gdmFsIC0gaTtcbiAgICAgICAgcmV0dXJuIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7XG4gICAgICAgICAga2V5OiB5ZWFyLFxuICAgICAgICAgIHZhbHVlOiB5ZWFyXG4gICAgICAgIH0sIHllYXIpO1xuICAgICAgfSkpKSkgOiBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBzdHlsZXMubW9udGhBbmRZZWFyUGlja2Vyc1xuICAgICAgfSwgX3RoaXMuc3RhdGUubW9udGhOYW1lc1tmb2N1c2VkRGF0ZS5nZXRNb250aCgpXSwgXCIgXCIsIGZvY3VzZWREYXRlLmdldEZ1bGxZZWFyKCkpLCBzaG93TW9udGhBcnJvdyA/IF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzM1tcImRlZmF1bHRcIl0pKHN0eWxlcy5uZXh0UHJldkJ1dHRvbiwgc3R5bGVzLm5leHRCdXR0b24pLFxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgIHJldHVybiBjaGFuZ2VTaG93bkRhdGUoKzEsICdtb250aE9mZnNldCcpO1xuICAgICAgICB9XG4gICAgICB9LCBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJpXCIsIG51bGwpKSA6IG51bGwpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInJlbmRlckRhdGVEaXNwbGF5XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBmb2N1c2VkUmFuZ2UgPSBfdGhpcyRwcm9wczMuZm9jdXNlZFJhbmdlLFxuICAgICAgICAgIGNvbG9yID0gX3RoaXMkcHJvcHMzLmNvbG9yLFxuICAgICAgICAgIHJhbmdlcyA9IF90aGlzJHByb3BzMy5yYW5nZXMsXG4gICAgICAgICAgcmFuZ2VDb2xvcnMgPSBfdGhpcyRwcm9wczMucmFuZ2VDb2xvcnMsXG4gICAgICAgICAgZGF0ZURpc3BsYXlGb3JtYXQgPSBfdGhpcyRwcm9wczMuZGF0ZURpc3BsYXlGb3JtYXQsXG4gICAgICAgICAgZWRpdGFibGVEYXRlSW5wdXRzID0gX3RoaXMkcHJvcHMzLmVkaXRhYmxlRGF0ZUlucHV0cyxcbiAgICAgICAgICBzdGFydERhdGVQbGFjZWhvbGRlciA9IF90aGlzJHByb3BzMy5zdGFydERhdGVQbGFjZWhvbGRlcixcbiAgICAgICAgICBlbmREYXRlUGxhY2Vob2xkZXIgPSBfdGhpcyRwcm9wczMuZW5kRGF0ZVBsYWNlaG9sZGVyO1xuICAgICAgdmFyIGRlZmF1bHRDb2xvciA9IHJhbmdlQ29sb3JzW2ZvY3VzZWRSYW5nZVswXV0gfHwgY29sb3I7XG4gICAgICB2YXIgc3R5bGVzID0gX3RoaXMuc3R5bGVzO1xuICAgICAgcmV0dXJuIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogc3R5bGVzLmRhdGVEaXNwbGF5V3JhcHBlclxuICAgICAgfSwgcmFuZ2VzLm1hcChmdW5jdGlvbiAocmFuZ2UsIGkpIHtcbiAgICAgICAgaWYgKHJhbmdlLnNob3dEYXRlRGlzcGxheSA9PT0gZmFsc2UgfHwgcmFuZ2UuZGlzYWJsZWQgJiYgIXJhbmdlLnNob3dEYXRlRGlzcGxheSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogc3R5bGVzLmRhdGVEaXNwbGF5LFxuICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgY29sb3I6IHJhbmdlLmNvbG9yIHx8IGRlZmF1bHRDb2xvclxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KF9EYXRlSW5wdXRbXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMzW1wiZGVmYXVsdFwiXSkoc3R5bGVzLmRhdGVEaXNwbGF5SXRlbSwgX2RlZmluZVByb3BlcnR5KHt9LCBzdHlsZXMuZGF0ZURpc3BsYXlJdGVtQWN0aXZlLCBmb2N1c2VkUmFuZ2VbMF0gPT09IGkgJiYgZm9jdXNlZFJhbmdlWzFdID09PSAwKSksXG4gICAgICAgICAgcmVhZE9ubHk6ICFlZGl0YWJsZURhdGVJbnB1dHMsXG4gICAgICAgICAgZGlzYWJsZWQ6IHJhbmdlLmRpc2FibGVkLFxuICAgICAgICAgIHZhbHVlOiByYW5nZS5zdGFydERhdGUsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IHN0YXJ0RGF0ZVBsYWNlaG9sZGVyLFxuICAgICAgICAgIGRhdGVPcHRpb25zOiBfdGhpcy5kYXRlT3B0aW9ucyxcbiAgICAgICAgICBkYXRlRGlzcGxheUZvcm1hdDogZGF0ZURpc3BsYXlGb3JtYXQsXG4gICAgICAgICAgb25DaGFuZ2U6IF90aGlzLm9uRHJhZ1NlbGVjdGlvbkVuZCxcbiAgICAgICAgICBvbkZvY3VzOiBmdW5jdGlvbiBvbkZvY3VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZVJhbmdlRm9jdXNDaGFuZ2UoaSwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSwgX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KF9EYXRlSW5wdXRbXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMzW1wiZGVmYXVsdFwiXSkoc3R5bGVzLmRhdGVEaXNwbGF5SXRlbSwgX2RlZmluZVByb3BlcnR5KHt9LCBzdHlsZXMuZGF0ZURpc3BsYXlJdGVtQWN0aXZlLCBmb2N1c2VkUmFuZ2VbMF0gPT09IGkgJiYgZm9jdXNlZFJhbmdlWzFdID09PSAxKSksXG4gICAgICAgICAgcmVhZE9ubHk6ICFlZGl0YWJsZURhdGVJbnB1dHMsXG4gICAgICAgICAgZGlzYWJsZWQ6IHJhbmdlLmRpc2FibGVkLFxuICAgICAgICAgIHZhbHVlOiByYW5nZS5lbmREYXRlLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBlbmREYXRlUGxhY2Vob2xkZXIsXG4gICAgICAgICAgZGF0ZU9wdGlvbnM6IF90aGlzLmRhdGVPcHRpb25zLFxuICAgICAgICAgIGRhdGVEaXNwbGF5Rm9ybWF0OiBkYXRlRGlzcGxheUZvcm1hdCxcbiAgICAgICAgICBvbkNoYW5nZTogX3RoaXMub25EcmFnU2VsZWN0aW9uRW5kLFxuICAgICAgICAgIG9uRm9jdXM6IGZ1bmN0aW9uIG9uRm9jdXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaGFuZGxlUmFuZ2VGb2N1c0NoYW5nZShpLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkRyYWdTZWxlY3Rpb25TdGFydFwiLCBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNCA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9uQ2hhbmdlID0gX3RoaXMkcHJvcHM0Lm9uQ2hhbmdlLFxuICAgICAgICAgIGRyYWdTZWxlY3Rpb25FbmFibGVkID0gX3RoaXMkcHJvcHM0LmRyYWdTZWxlY3Rpb25FbmFibGVkO1xuXG4gICAgICBpZiAoZHJhZ1NlbGVjdGlvbkVuYWJsZWQpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRyYWc6IHtcbiAgICAgICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgICAgIHJhbmdlOiB7XG4gICAgICAgICAgICAgIHN0YXJ0RGF0ZTogZGF0ZSxcbiAgICAgICAgICAgICAgZW5kRGF0ZTogZGF0ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpc2FibGVQcmV2aWV3OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uQ2hhbmdlICYmIG9uQ2hhbmdlKGRhdGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uRHJhZ1NlbGVjdGlvbkVuZFwiLCBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNSA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHVwZGF0ZVJhbmdlID0gX3RoaXMkcHJvcHM1LnVwZGF0ZVJhbmdlLFxuICAgICAgICAgIGRpc3BsYXlNb2RlID0gX3RoaXMkcHJvcHM1LmRpc3BsYXlNb2RlLFxuICAgICAgICAgIG9uQ2hhbmdlID0gX3RoaXMkcHJvcHM1Lm9uQ2hhbmdlLFxuICAgICAgICAgIGRyYWdTZWxlY3Rpb25FbmFibGVkID0gX3RoaXMkcHJvcHM1LmRyYWdTZWxlY3Rpb25FbmFibGVkO1xuICAgICAgaWYgKCFkcmFnU2VsZWN0aW9uRW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgICBpZiAoZGlzcGxheU1vZGUgPT09ICdkYXRlJyB8fCAhX3RoaXMuc3RhdGUuZHJhZy5zdGF0dXMpIHtcbiAgICAgICAgb25DaGFuZ2UgJiYgb25DaGFuZ2UoZGF0ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld1JhbmdlID0ge1xuICAgICAgICBzdGFydERhdGU6IF90aGlzLnN0YXRlLmRyYWcucmFuZ2Uuc3RhcnREYXRlLFxuICAgICAgICBlbmREYXRlOiBkYXRlXG4gICAgICB9O1xuXG4gICAgICBpZiAoZGlzcGxheU1vZGUgIT09ICdkYXRlUmFuZ2UnIHx8ICgwLCBfZGF0ZUZucy5pc1NhbWVEYXkpKG5ld1JhbmdlLnN0YXJ0RGF0ZSwgZGF0ZSkpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRyYWc6IHtcbiAgICAgICAgICAgIHN0YXR1czogZmFsc2UsXG4gICAgICAgICAgICByYW5nZToge31cbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gb25DaGFuZ2UgJiYgb25DaGFuZ2UoZGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRyYWc6IHtcbiAgICAgICAgICAgIHN0YXR1czogZmFsc2UsXG4gICAgICAgICAgICByYW5nZToge31cbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB1cGRhdGVSYW5nZSAmJiB1cGRhdGVSYW5nZShuZXdSYW5nZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uRHJhZ1NlbGVjdGlvbk1vdmVcIiwgZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgIHZhciBkcmFnID0gX3RoaXMuc3RhdGUuZHJhZztcbiAgICAgIGlmICghZHJhZy5zdGF0dXMgfHwgIV90aGlzLnByb3BzLmRyYWdTZWxlY3Rpb25FbmFibGVkKSByZXR1cm47XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZHJhZzoge1xuICAgICAgICAgIHN0YXR1czogZHJhZy5zdGF0dXMsXG4gICAgICAgICAgcmFuZ2U6IHtcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogZHJhZy5yYW5nZS5zdGFydERhdGUsXG4gICAgICAgICAgICBlbmREYXRlOiBkYXRlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkaXNhYmxlUHJldmlldzogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJlc3RpbWF0ZU1vbnRoU2l6ZVwiLCBmdW5jdGlvbiAoaW5kZXgsIGNhY2hlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM2ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgZGlyZWN0aW9uID0gX3RoaXMkcHJvcHM2LmRpcmVjdGlvbixcbiAgICAgICAgICBtaW5EYXRlID0gX3RoaXMkcHJvcHM2Lm1pbkRhdGU7XG4gICAgICB2YXIgc2Nyb2xsQXJlYSA9IF90aGlzLnN0YXRlLnNjcm9sbEFyZWE7XG5cbiAgICAgIGlmIChjYWNoZSkge1xuICAgICAgICBfdGhpcy5saXN0U2l6ZUNhY2hlID0gY2FjaGU7XG4gICAgICAgIGlmIChjYWNoZVtpbmRleF0pIHJldHVybiBjYWNoZVtpbmRleF07XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykgcmV0dXJuIHNjcm9sbEFyZWEubW9udGhXaWR0aDtcbiAgICAgIHZhciBtb250aFN0ZXAgPSAoMCwgX2RhdGVGbnMuYWRkTW9udGhzKShtaW5EYXRlLCBpbmRleCk7XG5cbiAgICAgIHZhciBfZ2V0TW9udGhEaXNwbGF5UmFuZ2UgPSAoMCwgX3V0aWxzLmdldE1vbnRoRGlzcGxheVJhbmdlKShtb250aFN0ZXAsIF90aGlzLmRhdGVPcHRpb25zKSxcbiAgICAgICAgICBzdGFydCA9IF9nZXRNb250aERpc3BsYXlSYW5nZS5zdGFydCxcbiAgICAgICAgICBlbmQgPSBfZ2V0TW9udGhEaXNwbGF5UmFuZ2UuZW5kO1xuXG4gICAgICB2YXIgaXNMb25nTW9udGggPSAoMCwgX2RhdGVGbnMuZGlmZmVyZW5jZUluRGF5cykoZW5kLCBzdGFydCwgX3RoaXMuZGF0ZU9wdGlvbnMpICsgMSA+IDcgKiA1O1xuICAgICAgcmV0dXJuIGlzTG9uZ01vbnRoID8gc2Nyb2xsQXJlYS5sb25nTW9udGhIZWlnaHQgOiBzY3JvbGxBcmVhLm1vbnRoSGVpZ2h0O1xuICAgIH0pO1xuXG4gICAgX3RoaXMuZGF0ZU9wdGlvbnMgPSB7XG4gICAgICBsb2NhbGU6IF9wcm9wcy5sb2NhbGVcbiAgICB9O1xuICAgIGlmIChfcHJvcHMud2Vla1N0YXJ0c09uICE9PSB1bmRlZmluZWQpIF90aGlzLmRhdGVPcHRpb25zLndlZWtTdGFydHNPbiA9IF9wcm9wcy53ZWVrU3RhcnRzT247XG4gICAgX3RoaXMuc3R5bGVzID0gKDAsIF91dGlscy5nZW5lcmF0ZVN0eWxlcykoW19zdHlsZXNbXCJkZWZhdWx0XCJdLCBfcHJvcHMuY2xhc3NOYW1lc10pO1xuICAgIF90aGlzLmxpc3RTaXplQ2FjaGUgPSB7fTtcbiAgICBfdGhpcy5pc0ZpcnN0UmVuZGVyID0gdHJ1ZTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vbnRoTmFtZXM6IF90aGlzLmdldE1vbnRoTmFtZXMoKSxcbiAgICAgIGZvY3VzZWREYXRlOiAoMCwgX3V0aWxzLmNhbGNGb2N1c0RhdGUpKG51bGwsIF9wcm9wcyksXG4gICAgICBkcmFnOiB7XG4gICAgICAgIHN0YXR1czogZmFsc2UsXG4gICAgICAgIHJhbmdlOiB7XG4gICAgICAgICAgc3RhcnREYXRlOiBudWxsLFxuICAgICAgICAgIGVuZERhdGU6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZVByZXZpZXc6IGZhbHNlXG4gICAgICB9LFxuICAgICAgc2Nyb2xsQXJlYTogX3RoaXMuY2FsY1Njcm9sbEFyZWEoX3Byb3BzKVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENhbGVuZGFyLCBbe1xuICAgIGtleTogXCJnZXRNb250aE5hbWVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE1vbnRoTmFtZXMoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgcmV0dXJuIF90b0NvbnN1bWFibGVBcnJheShBcnJheSgxMikua2V5cygpKS5tYXAoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5wcm9wcy5sb2NhbGUubG9jYWxpemUubW9udGgoaSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2FsY1Njcm9sbEFyZWFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FsY1Njcm9sbEFyZWEocHJvcHMpIHtcbiAgICAgIHZhciBkaXJlY3Rpb24gPSBwcm9wcy5kaXJlY3Rpb24sXG4gICAgICAgICAgbW9udGhzID0gcHJvcHMubW9udGhzLFxuICAgICAgICAgIHNjcm9sbCA9IHByb3BzLnNjcm9sbDtcbiAgICAgIGlmICghc2Nyb2xsLmVuYWJsZWQpIHJldHVybiB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICB9O1xuICAgICAgdmFyIGxvbmdNb250aEhlaWdodCA9IHNjcm9sbC5sb25nTW9udGhIZWlnaHQgfHwgc2Nyb2xsLm1vbnRoSGVpZ2h0O1xuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICBtb250aEhlaWdodDogc2Nyb2xsLm1vbnRoSGVpZ2h0IHx8IDIyMCxcbiAgICAgICAgICBsb25nTW9udGhIZWlnaHQ6IGxvbmdNb250aEhlaWdodCB8fCAyNjAsXG4gICAgICAgICAgY2FsZW5kYXJXaWR0aDogJ2F1dG8nLFxuICAgICAgICAgIGNhbGVuZGFySGVpZ2h0OiAoc2Nyb2xsLmNhbGVuZGFySGVpZ2h0IHx8IGxvbmdNb250aEhlaWdodCB8fCAyNDApICogbW9udGhzXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIG1vbnRoV2lkdGg6IHNjcm9sbC5tb250aFdpZHRoIHx8IDMzMixcbiAgICAgICAgY2FsZW5kYXJXaWR0aDogKHNjcm9sbC5jYWxlbmRhcldpZHRoIHx8IHNjcm9sbC5tb250aFdpZHRoIHx8IDMzMikgKiBtb250aHMsXG4gICAgICAgIG1vbnRoSGVpZ2h0OiBsb25nTW9udGhIZWlnaHQgfHwgMzAwLFxuICAgICAgICBjYWxlbmRhckhlaWdodDogbG9uZ01vbnRoSGVpZ2h0IHx8IDMwMFxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMucHJvcHMuc2Nyb2xsLmVuYWJsZWQpIHtcbiAgICAgICAgLy8gcHJldmVudCByZWFjdC1saXN0J3MgaW5pdGlhbCByZW5kZXIgZm9jdXMgcHJvYmxlbVxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMzLmZvY3VzVG9EYXRlKF90aGlzMy5zdGF0ZS5mb2N1c2VkRGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgdmFyIHByb3BNYXBwZXIgPSB7XG4gICAgICAgIGRhdGVSYW5nZTogJ3JhbmdlcycsXG4gICAgICAgIGRhdGU6ICdkYXRlJ1xuICAgICAgfTtcbiAgICAgIHZhciB0YXJnZXRQcm9wID0gcHJvcE1hcHBlclt0aGlzLnByb3BzLmRpc3BsYXlNb2RlXTtcblxuICAgICAgaWYgKHRoaXMucHJvcHNbdGFyZ2V0UHJvcF0gIT09IHByZXZQcm9wc1t0YXJnZXRQcm9wXSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVNob3duRGF0ZSh0aGlzLnByb3BzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByZXZQcm9wcy5sb2NhbGUgIT09IHRoaXMucHJvcHMubG9jYWxlIHx8IHByZXZQcm9wcy53ZWVrU3RhcnRzT24gIT09IHRoaXMucHJvcHMud2Vla1N0YXJ0c09uKSB7XG4gICAgICAgIHRoaXMuZGF0ZU9wdGlvbnMgPSB7XG4gICAgICAgICAgbG9jYWxlOiB0aGlzLnByb3BzLmxvY2FsZVxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5wcm9wcy53ZWVrU3RhcnRzT24gIT09IHVuZGVmaW5lZCkgdGhpcy5kYXRlT3B0aW9ucy53ZWVrU3RhcnRzT24gPSB0aGlzLnByb3BzLndlZWtTdGFydHNPbjtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbW9udGhOYW1lczogdGhpcy5nZXRNb250aE5hbWVzKClcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghKDAsIF9zaGFsbG93RXF1YWwuc2hhbGxvd0VxdWFsT2JqZWN0cykocHJldlByb3BzLnNjcm9sbCwgdGhpcy5wcm9wcy5zY3JvbGwpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNjcm9sbEFyZWE6IHRoaXMuY2FsY1Njcm9sbEFyZWEodGhpcy5wcm9wcylcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlcldlZWtkYXlzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcldlZWtkYXlzKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgcmV0dXJuIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogdGhpcy5zdHlsZXMud2Vla0RheXNcbiAgICAgIH0sICgwLCBfZGF0ZUZucy5lYWNoRGF5T2ZJbnRlcnZhbCkoe1xuICAgICAgICBzdGFydDogKDAsIF9kYXRlRm5zLnN0YXJ0T2ZXZWVrKShub3csIHRoaXMuZGF0ZU9wdGlvbnMpLFxuICAgICAgICBlbmQ6ICgwLCBfZGF0ZUZucy5lbmRPZldlZWspKG5vdywgdGhpcy5kYXRlT3B0aW9ucylcbiAgICAgIH0pLm1hcChmdW5jdGlvbiAoZGF5LCBpKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IF90aGlzNC5zdHlsZXMud2Vla0RheSxcbiAgICAgICAgICBrZXk6IGlcbiAgICAgICAgfSwgKDAsIF9kYXRlRm5zLmZvcm1hdCkoZGF5LCBfdGhpczQucHJvcHMud2Vla2RheURpc3BsYXlGb3JtYXQsIF90aGlzNC5kYXRlT3B0aW9ucykpO1xuICAgICAgfSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczcgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHNob3dEYXRlRGlzcGxheSA9IF90aGlzJHByb3BzNy5zaG93RGF0ZURpc3BsYXksXG4gICAgICAgICAgb25QcmV2aWV3Q2hhbmdlID0gX3RoaXMkcHJvcHM3Lm9uUHJldmlld0NoYW5nZSxcbiAgICAgICAgICBzY3JvbGwgPSBfdGhpcyRwcm9wczcuc2Nyb2xsLFxuICAgICAgICAgIGRpcmVjdGlvbiA9IF90aGlzJHByb3BzNy5kaXJlY3Rpb24sXG4gICAgICAgICAgZGlzYWJsZWREYXRlcyA9IF90aGlzJHByb3BzNy5kaXNhYmxlZERhdGVzLFxuICAgICAgICAgIGRpc2FibGVkRGF5ID0gX3RoaXMkcHJvcHM3LmRpc2FibGVkRGF5LFxuICAgICAgICAgIG1heERhdGUgPSBfdGhpcyRwcm9wczcubWF4RGF0ZSxcbiAgICAgICAgICBtaW5EYXRlID0gX3RoaXMkcHJvcHM3Lm1pbkRhdGUsXG4gICAgICAgICAgcmFuZ2VDb2xvcnMgPSBfdGhpcyRwcm9wczcucmFuZ2VDb2xvcnMsXG4gICAgICAgICAgY29sb3IgPSBfdGhpcyRwcm9wczcuY29sb3IsXG4gICAgICAgICAgbmF2aWdhdG9yUmVuZGVyZXIgPSBfdGhpcyRwcm9wczcubmF2aWdhdG9yUmVuZGVyZXIsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHM3LmNsYXNzTmFtZSxcbiAgICAgICAgICBwcmV2aWV3ID0gX3RoaXMkcHJvcHM3LnByZXZpZXc7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIHNjcm9sbEFyZWEgPSBfdGhpcyRzdGF0ZS5zY3JvbGxBcmVhLFxuICAgICAgICAgIGZvY3VzZWREYXRlID0gX3RoaXMkc3RhdGUuZm9jdXNlZERhdGU7XG4gICAgICB2YXIgaXNWZXJ0aWNhbCA9IGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJztcbiAgICAgIHZhciBtb250aEFuZFllYXJSZW5kZXJlciA9IG5hdmlnYXRvclJlbmRlcmVyIHx8IHRoaXMucmVuZGVyTW9udGhBbmRZZWFyO1xuICAgICAgdmFyIHJhbmdlcyA9IHRoaXMucHJvcHMucmFuZ2VzLm1hcChmdW5jdGlvbiAocmFuZ2UsIGkpIHtcbiAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIHJhbmdlLCB7XG4gICAgICAgICAgY29sb3I6IHJhbmdlLmNvbG9yIHx8IHJhbmdlQ29sb3JzW2ldIHx8IGNvbG9yXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMzW1wiZGVmYXVsdFwiXSkodGhpcy5zdHlsZXMuY2FsZW5kYXJXcmFwcGVyLCBjbGFzc05hbWUpLFxuICAgICAgICBvbk1vdXNlVXA6IGZ1bmN0aW9uIG9uTW91c2VVcCgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM1LnNldFN0YXRlKHtcbiAgICAgICAgICAgIGRyYWc6IHtcbiAgICAgICAgICAgICAgc3RhdHVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgcmFuZ2U6IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uTW91c2VMZWF2ZTogZnVuY3Rpb24gb25Nb3VzZUxlYXZlKCkge1xuICAgICAgICAgIF90aGlzNS5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBkcmFnOiB7XG4gICAgICAgICAgICAgIHN0YXR1czogZmFsc2UsXG4gICAgICAgICAgICAgIHJhbmdlOiB7fVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LCBzaG93RGF0ZURpc3BsYXkgJiYgdGhpcy5yZW5kZXJEYXRlRGlzcGxheSgpLCBtb250aEFuZFllYXJSZW5kZXJlcihmb2N1c2VkRGF0ZSwgdGhpcy5jaGFuZ2VTaG93bkRhdGUsIHRoaXMucHJvcHMpLCBzY3JvbGwuZW5hYmxlZCA/IF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBpc1ZlcnRpY2FsICYmIHRoaXMucmVuZGVyV2Vla2RheXModGhpcy5kYXRlT3B0aW9ucyksIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzM1tcImRlZmF1bHRcIl0pKHRoaXMuc3R5bGVzLmluZmluaXRlTW9udGhzLCBpc1ZlcnRpY2FsID8gdGhpcy5zdHlsZXMubW9udGhzVmVydGljYWwgOiB0aGlzLnN0eWxlcy5tb250aHNIb3Jpem9udGFsKSxcbiAgICAgICAgb25Nb3VzZUxlYXZlOiBmdW5jdGlvbiBvbk1vdXNlTGVhdmUoKSB7XG4gICAgICAgICAgcmV0dXJuIG9uUHJldmlld0NoYW5nZSAmJiBvblByZXZpZXdDaGFuZ2UoKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB3aWR0aDogc2Nyb2xsQXJlYS5jYWxlbmRhcldpZHRoICsgMTEsXG4gICAgICAgICAgaGVpZ2h0OiBzY3JvbGxBcmVhLmNhbGVuZGFySGVpZ2h0ICsgMTFcbiAgICAgICAgfSxcbiAgICAgICAgb25TY3JvbGw6IHRoaXMuaGFuZGxlU2Nyb2xsXG4gICAgICB9LCBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoX3JlYWN0TGlzdFtcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgbGVuZ3RoOiAoMCwgX2RhdGVGbnMuZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMpKCgwLCBfZGF0ZUZucy5lbmRPZk1vbnRoKShtYXhEYXRlKSwgKDAsIF9kYXRlRm5zLmFkZERheXMpKCgwLCBfZGF0ZUZucy5zdGFydE9mTW9udGgpKG1pbkRhdGUpLCAtMSksIHRoaXMuZGF0ZU9wdGlvbnMpLFxuICAgICAgICB0cmVzaG9sZDogNTAwLFxuICAgICAgICB0eXBlOiBcInZhcmlhYmxlXCIsXG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKHRhcmdldCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczUubGlzdCA9IHRhcmdldDtcbiAgICAgICAgfSxcbiAgICAgICAgaXRlbVNpemVFc3RpbWF0b3I6IHRoaXMuZXN0aW1hdGVNb250aFNpemUsXG4gICAgICAgIGF4aXM6IGlzVmVydGljYWwgPyAneScgOiAneCcsXG4gICAgICAgIGl0ZW1SZW5kZXJlcjogZnVuY3Rpb24gaXRlbVJlbmRlcmVyKGluZGV4LCBrZXkpIHtcbiAgICAgICAgICB2YXIgbW9udGhTdGVwID0gKDAsIF9kYXRlRm5zLmFkZE1vbnRocykobWluRGF0ZSwgaW5kZXgpO1xuICAgICAgICAgIHJldHVybiBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoX01vbnRoW1wiZGVmYXVsdFwiXSwgX2V4dGVuZHMoe30sIF90aGlzNS5wcm9wcywge1xuICAgICAgICAgICAgb25QcmV2aWV3Q2hhbmdlOiBvblByZXZpZXdDaGFuZ2UgfHwgX3RoaXM1LnVwZGF0ZVByZXZpZXcsXG4gICAgICAgICAgICBwcmV2aWV3OiBwcmV2aWV3IHx8IF90aGlzNS5zdGF0ZS5wcmV2aWV3LFxuICAgICAgICAgICAgcmFuZ2VzOiByYW5nZXMsXG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIGRyYWc6IF90aGlzNS5zdGF0ZS5kcmFnLFxuICAgICAgICAgICAgZGF0ZU9wdGlvbnM6IF90aGlzNS5kYXRlT3B0aW9ucyxcbiAgICAgICAgICAgIGRpc2FibGVkRGF0ZXM6IGRpc2FibGVkRGF0ZXMsXG4gICAgICAgICAgICBkaXNhYmxlZERheTogZGlzYWJsZWREYXksXG4gICAgICAgICAgICBtb250aDogbW9udGhTdGVwLFxuICAgICAgICAgICAgb25EcmFnU2VsZWN0aW9uU3RhcnQ6IF90aGlzNS5vbkRyYWdTZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgIG9uRHJhZ1NlbGVjdGlvbkVuZDogX3RoaXM1Lm9uRHJhZ1NlbGVjdGlvbkVuZCxcbiAgICAgICAgICAgIG9uRHJhZ1NlbGVjdGlvbk1vdmU6IF90aGlzNS5vbkRyYWdTZWxlY3Rpb25Nb3ZlLFxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlOiBmdW5jdGlvbiBvbk1vdXNlTGVhdmUoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvblByZXZpZXdDaGFuZ2UgJiYgb25QcmV2aWV3Q2hhbmdlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3R5bGVzOiBfdGhpczUuc3R5bGVzLFxuICAgICAgICAgICAgc3R5bGU6IGlzVmVydGljYWwgPyB7XG4gICAgICAgICAgICAgIGhlaWdodDogX3RoaXM1LmVzdGltYXRlTW9udGhTaXplKGluZGV4KVxuICAgICAgICAgICAgfSA6IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBzY3JvbGxBcmVhLm1vbnRoSGVpZ2h0LFxuICAgICAgICAgICAgICB3aWR0aDogX3RoaXM1LmVzdGltYXRlTW9udGhTaXplKGluZGV4KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dNb250aE5hbWU6IHRydWUsXG4gICAgICAgICAgICBzaG93V2Vla0RheXM6ICFpc1ZlcnRpY2FsXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9KSkpIDogX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMzW1wiZGVmYXVsdFwiXSkodGhpcy5zdHlsZXMubW9udGhzLCBpc1ZlcnRpY2FsID8gdGhpcy5zdHlsZXMubW9udGhzVmVydGljYWwgOiB0aGlzLnN0eWxlcy5tb250aHNIb3Jpem9udGFsKVxuICAgICAgfSwgbmV3IEFycmF5KHRoaXMucHJvcHMubW9udGhzKS5maWxsKG51bGwpLm1hcChmdW5jdGlvbiAoXywgaSkge1xuICAgICAgICB2YXIgbW9udGhTdGVwID0gKDAsIF9kYXRlRm5zLmFkZE1vbnRocykoX3RoaXM1LnN0YXRlLmZvY3VzZWREYXRlLCBpKTtcbiAgICAgICAgcmV0dXJuIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChfTW9udGhbXCJkZWZhdWx0XCJdLCBfZXh0ZW5kcyh7fSwgX3RoaXM1LnByb3BzLCB7XG4gICAgICAgICAgb25QcmV2aWV3Q2hhbmdlOiBvblByZXZpZXdDaGFuZ2UgfHwgX3RoaXM1LnVwZGF0ZVByZXZpZXcsXG4gICAgICAgICAgcHJldmlldzogcHJldmlldyB8fCBfdGhpczUuc3RhdGUucHJldmlldyxcbiAgICAgICAgICByYW5nZXM6IHJhbmdlcyxcbiAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgZHJhZzogX3RoaXM1LnN0YXRlLmRyYWcsXG4gICAgICAgICAgZGF0ZU9wdGlvbnM6IF90aGlzNS5kYXRlT3B0aW9ucyxcbiAgICAgICAgICBkaXNhYmxlZERhdGVzOiBkaXNhYmxlZERhdGVzLFxuICAgICAgICAgIGRpc2FibGVkRGF5OiBkaXNhYmxlZERheSxcbiAgICAgICAgICBtb250aDogbW9udGhTdGVwLFxuICAgICAgICAgIG9uRHJhZ1NlbGVjdGlvblN0YXJ0OiBfdGhpczUub25EcmFnU2VsZWN0aW9uU3RhcnQsXG4gICAgICAgICAgb25EcmFnU2VsZWN0aW9uRW5kOiBfdGhpczUub25EcmFnU2VsZWN0aW9uRW5kLFxuICAgICAgICAgIG9uRHJhZ1NlbGVjdGlvbk1vdmU6IF90aGlzNS5vbkRyYWdTZWxlY3Rpb25Nb3ZlLFxuICAgICAgICAgIG9uTW91c2VMZWF2ZTogZnVuY3Rpb24gb25Nb3VzZUxlYXZlKCkge1xuICAgICAgICAgICAgcmV0dXJuIG9uUHJldmlld0NoYW5nZSAmJiBvblByZXZpZXdDaGFuZ2UoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN0eWxlczogX3RoaXM1LnN0eWxlcyxcbiAgICAgICAgICBzaG93V2Vla0RheXM6ICFpc1ZlcnRpY2FsIHx8IGkgPT09IDAsXG4gICAgICAgICAgc2hvd01vbnRoTmFtZTogIWlzVmVydGljYWwgfHwgaSA+IDBcbiAgICAgICAgfSkpO1xuICAgICAgfSkpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2FsZW5kYXI7XG59KF9yZWFjdC5QdXJlQ29tcG9uZW50KTtcblxuQ2FsZW5kYXIuZGVmYXVsdFByb3BzID0ge1xuICBzaG93TW9udGhBcnJvdzogdHJ1ZSxcbiAgc2hvd01vbnRoQW5kWWVhclBpY2tlcnM6IHRydWUsXG4gIGRpc2FibGVkRGF0ZXM6IFtdLFxuICBkaXNhYmxlZERheTogZnVuY3Rpb24gZGlzYWJsZWREYXkoKSB7fSxcbiAgY2xhc3NOYW1lczoge30sXG4gIGxvY2FsZTogX2VuVVNbXCJkZWZhdWx0XCJdLFxuICByYW5nZXM6IFtdLFxuICBmb2N1c2VkUmFuZ2U6IFswLCAwXSxcbiAgZGF0ZURpc3BsYXlGb3JtYXQ6ICdNTU0gZCwgeXl5eScsXG4gIG1vbnRoRGlzcGxheUZvcm1hdDogJ01NTSB5eXl5JyxcbiAgd2Vla2RheURpc3BsYXlGb3JtYXQ6ICdFJyxcbiAgZGF5RGlzcGxheUZvcm1hdDogJ2QnLFxuICBzaG93RGF0ZURpc3BsYXk6IHRydWUsXG4gIHNob3dQcmV2aWV3OiB0cnVlLFxuICBkaXNwbGF5TW9kZTogJ2RhdGUnLFxuICBtb250aHM6IDEsXG4gIGNvbG9yOiAnIzNkOTFmZicsXG4gIHNjcm9sbDoge1xuICAgIGVuYWJsZWQ6IGZhbHNlXG4gIH0sXG4gIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcbiAgbWF4RGF0ZTogKDAsIF9kYXRlRm5zLmFkZFllYXJzKShuZXcgRGF0ZSgpLCAyMCksXG4gIG1pbkRhdGU6ICgwLCBfZGF0ZUZucy5hZGRZZWFycykobmV3IERhdGUoKSwgLTEwMCksXG4gIHJhbmdlQ29sb3JzOiBbJyMzZDkxZmYnLCAnIzNlY2Y4ZScsICcjZmVkMTRjJ10sXG4gIHN0YXJ0RGF0ZVBsYWNlaG9sZGVyOiAnRWFybHknLFxuICBlbmREYXRlUGxhY2Vob2xkZXI6ICdDb250aW51b3VzJyxcbiAgZWRpdGFibGVEYXRlSW5wdXRzOiBmYWxzZSxcbiAgZHJhZ1NlbGVjdGlvbkVuYWJsZWQ6IHRydWUsXG4gIGZpeGVkSGVpZ2h0OiBmYWxzZVxufTtcbkNhbGVuZGFyLnByb3BUeXBlcyA9IHtcbiAgc2hvd01vbnRoQXJyb3c6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHNob3dNb250aEFuZFllYXJQaWNrZXJzOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sLFxuICBkaXNhYmxlZERhdGVzOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5hcnJheSxcbiAgZGlzYWJsZWREYXk6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG1pbkRhdGU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgbWF4RGF0ZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBkYXRlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIG9uQ2hhbmdlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5mdW5jLFxuICBvblByZXZpZXdDaGFuZ2U6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG9uUmFuZ2VGb2N1c0NoYW5nZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uZnVuYyxcbiAgY2xhc3NOYW1lczogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBsb2NhbGU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgc2hvd25EYXRlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIG9uU2hvd25EYXRlQ2hhbmdlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5mdW5jLFxuICByYW5nZXM6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmFycmF5T2YoX0RheUNlbGwucmFuZ2VTaGFwZSksXG4gIHByZXZpZXc6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnNoYXBlKHtcbiAgICBzdGFydERhdGU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgICBlbmREYXRlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gICAgY29sb3I6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZ1xuICB9KSxcbiAgZGF0ZURpc3BsYXlGb3JtYXQ6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgbW9udGhEaXNwbGF5Rm9ybWF0OiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHdlZWtkYXlEaXNwbGF5Rm9ybWF0OiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHdlZWtTdGFydHNPbjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyLFxuICBkYXlEaXNwbGF5Rm9ybWF0OiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGZvY3VzZWRSYW5nZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYXJyYXlPZihfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5udW1iZXIpLFxuICBpbml0aWFsRm9jdXNlZFJhbmdlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5hcnJheU9mKF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlciksXG4gIG1vbnRoczogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgc2hvd0RhdGVEaXNwbGF5OiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sLFxuICBzaG93UHJldmlldzogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYm9vbCxcbiAgZGlzcGxheU1vZGU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm9uZU9mKFsnZGF0ZVJhbmdlJywgJ2RhdGUnXSksXG4gIGNvbG9yOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHVwZGF0ZVJhbmdlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5mdW5jLFxuICBzY3JvbGw6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnNoYXBlKHtcbiAgICBlbmFibGVkOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sLFxuICAgIG1vbnRoSGVpZ2h0OiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5udW1iZXIsXG4gICAgbG9uZ01vbnRoSGVpZ2h0OiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5udW1iZXIsXG4gICAgbW9udGhXaWR0aDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyLFxuICAgIGNhbGVuZGFyV2lkdGg6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlcixcbiAgICBjYWxlbmRhckhlaWdodDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyXG4gIH0pLFxuICBkaXJlY3Rpb246IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm9uZU9mKFsndmVydGljYWwnLCAnaG9yaXpvbnRhbCddKSxcbiAgc3RhcnREYXRlUGxhY2Vob2xkZXI6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgZW5kRGF0ZVBsYWNlaG9sZGVyOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIG5hdmlnYXRvclJlbmRlcmVyOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5mdW5jLFxuICByYW5nZUNvbG9yczogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYXJyYXlPZihfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcpLFxuICBlZGl0YWJsZURhdGVJbnB1dHM6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGRyYWdTZWxlY3Rpb25FbmFibGVkOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sLFxuICBmaXhlZEhlaWdodDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYm9vbFxufTtcbnZhciBfZGVmYXVsdCA9IENhbGVuZGFyO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfZGF0ZUZucyA9IHJlcXVpcmUoXCJkYXRlLWZuc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgRGF0ZUlucHV0ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRGF0ZUlucHV0LCBfUHVyZUNvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRGF0ZUlucHV0KHByb3BzLCBjb250ZXh0KSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERhdGVJbnB1dCk7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihEYXRlSW5wdXQpLmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbktleURvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IF90aGlzLnN0YXRlLnZhbHVlO1xuXG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgX3RoaXMudXBkYXRlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICB2YWx1ZTogZS50YXJnZXQudmFsdWUsXG4gICAgICAgIGNoYW5nZWQ6IHRydWUsXG4gICAgICAgIGludmFsaWQ6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkJsdXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlID0gX3RoaXMuc3RhdGUudmFsdWU7XG5cbiAgICAgIF90aGlzLnVwZGF0ZSh2YWx1ZSk7XG4gICAgfSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGludmFsaWQ6IGZhbHNlLFxuICAgICAgY2hhbmdlZDogZmFsc2UsXG4gICAgICB2YWx1ZTogX3RoaXMuZm9ybWF0RGF0ZShwcm9wcylcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEYXRlSW5wdXQsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICB2YXIgdmFsdWUgPSBwcmV2UHJvcHMudmFsdWU7XG5cbiAgICAgIGlmICghKDAsIF9kYXRlRm5zLmlzRXF1YWwpKHZhbHVlLCB0aGlzLnByb3BzLnZhbHVlKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB2YWx1ZTogdGhpcy5mb3JtYXREYXRlKHRoaXMucHJvcHMpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb3JtYXREYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvcm1hdERhdGUoX3JlZikge1xuICAgICAgdmFyIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgICAgICBkYXRlRGlzcGxheUZvcm1hdCA9IF9yZWYuZGF0ZURpc3BsYXlGb3JtYXQsXG4gICAgICAgICAgZGF0ZU9wdGlvbnMgPSBfcmVmLmRhdGVPcHRpb25zO1xuXG4gICAgICBpZiAodmFsdWUgJiYgKDAsIF9kYXRlRm5zLmlzVmFsaWQpKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gKDAsIF9kYXRlRm5zLmZvcm1hdCkodmFsdWUsIGRhdGVEaXNwbGF5Rm9ybWF0LCBkYXRlT3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSh2YWx1ZSkge1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBpbnZhbGlkID0gX3RoaXMkc3RhdGUuaW52YWxpZCxcbiAgICAgICAgICBjaGFuZ2VkID0gX3RoaXMkc3RhdGUuY2hhbmdlZDtcblxuICAgICAgaWYgKGludmFsaWQgfHwgIWNoYW5nZWQgfHwgIXZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBvbkNoYW5nZSA9IF90aGlzJHByb3BzLm9uQ2hhbmdlLFxuICAgICAgICAgIGRhdGVEaXNwbGF5Rm9ybWF0ID0gX3RoaXMkcHJvcHMuZGF0ZURpc3BsYXlGb3JtYXQsXG4gICAgICAgICAgZGF0ZU9wdGlvbnMgPSBfdGhpcyRwcm9wcy5kYXRlT3B0aW9ucztcbiAgICAgIHZhciBwYXJzZWQgPSAoMCwgX2RhdGVGbnMucGFyc2UpKHZhbHVlLCBkYXRlRGlzcGxheUZvcm1hdCwgbmV3IERhdGUoKSwgZGF0ZU9wdGlvbnMpO1xuXG4gICAgICBpZiAoKDAsIF9kYXRlRm5zLmlzVmFsaWQpKHBhcnNlZCkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY2hhbmdlZDogZmFsc2VcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBvbkNoYW5nZShwYXJzZWQpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGludmFsaWQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wczIuY2xhc3NOYW1lLFxuICAgICAgICAgIHJlYWRPbmx5ID0gX3RoaXMkcHJvcHMyLnJlYWRPbmx5LFxuICAgICAgICAgIHBsYWNlaG9sZGVyID0gX3RoaXMkcHJvcHMyLnBsYWNlaG9sZGVyLFxuICAgICAgICAgIGRpc2FibGVkID0gX3RoaXMkcHJvcHMyLmRpc2FibGVkLFxuICAgICAgICAgIG9uRm9jdXMgPSBfdGhpcyRwcm9wczIub25Gb2N1cztcbiAgICAgIHZhciBfdGhpcyRzdGF0ZTIgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkc3RhdGUyLnZhbHVlLFxuICAgICAgICAgIGludmFsaWQgPSBfdGhpcyRzdGF0ZTIuaW52YWxpZDtcbiAgICAgIHJldHVybiBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKSgncmRyRGF0ZUlucHV0JywgY2xhc3NOYW1lKVxuICAgICAgfSwgX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuICAgICAgICByZWFkT25seTogcmVhZE9ubHksXG4gICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICAgIG9uS2V5RG93bjogdGhpcy5vbktleURvd24sXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgICBvbkJsdXI6IHRoaXMub25CbHVyLFxuICAgICAgICBvbkZvY3VzOiBvbkZvY3VzXG4gICAgICB9KSwgaW52YWxpZCAmJiBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcInJkcldhcm5pbmdcIlxuICAgICAgfSwgXCJcXHUyNkEwXCIpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRGF0ZUlucHV0O1xufShfcmVhY3QuUHVyZUNvbXBvbmVudCk7XG5cbkRhdGVJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIHZhbHVlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHBsYWNlaG9sZGVyOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sLFxuICByZWFkT25seTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYm9vbCxcbiAgZGF0ZU9wdGlvbnM6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgZGF0ZURpc3BsYXlGb3JtYXQ6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIG9uRm9jdXM6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25DaGFuZ2U6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMuaXNSZXF1aXJlZFxufTtcbkRhdGVJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gIHJlYWRPbmx5OiB0cnVlLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGRhdGVEaXNwbGF5Rm9ybWF0OiAnTU1NIEQsIFlZWVknXG59O1xudmFyIF9kZWZhdWx0ID0gRGF0ZUlucHV0O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9DYWxlbmRhciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL0NhbGVuZGFyXCIpKTtcblxudmFyIF9EYXlDZWxsID0gcmVxdWlyZShcIi4uL0RheUNlbGxcIik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7XG5cbnZhciBfZGF0ZUZucyA9IHJlcXVpcmUoXCJkYXRlLWZuc1wiKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfc3R5bGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vc3R5bGVzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIERhdGVSYW5nZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRGF0ZVJhbmdlLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBEYXRlUmFuZ2UocHJvcHMsIGNvbnRleHQpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGF0ZVJhbmdlKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKERhdGVSYW5nZSkuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNhbGNOZXdTZWxlY3Rpb25cIiwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB2YXIgaXNTaW5nbGVWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdHJ1ZTtcbiAgICAgIHZhciBmb2N1c2VkUmFuZ2UgPSBfdGhpcy5wcm9wcy5mb2N1c2VkUmFuZ2UgfHwgX3RoaXMuc3RhdGUuZm9jdXNlZFJhbmdlO1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgcmFuZ2VzID0gX3RoaXMkcHJvcHMucmFuZ2VzLFxuICAgICAgICAgIG9uQ2hhbmdlID0gX3RoaXMkcHJvcHMub25DaGFuZ2UsXG4gICAgICAgICAgbWF4RGF0ZSA9IF90aGlzJHByb3BzLm1heERhdGUsXG4gICAgICAgICAgbW92ZVJhbmdlT25GaXJzdFNlbGVjdGlvbiA9IF90aGlzJHByb3BzLm1vdmVSYW5nZU9uRmlyc3RTZWxlY3Rpb24sXG4gICAgICAgICAgZGlzYWJsZWREYXRlcyA9IF90aGlzJHByb3BzLmRpc2FibGVkRGF0ZXM7XG4gICAgICB2YXIgZm9jdXNlZFJhbmdlSW5kZXggPSBmb2N1c2VkUmFuZ2VbMF07XG4gICAgICB2YXIgc2VsZWN0ZWRSYW5nZSA9IHJhbmdlc1tmb2N1c2VkUmFuZ2VJbmRleF07XG4gICAgICBpZiAoIXNlbGVjdGVkUmFuZ2UgfHwgIW9uQ2hhbmdlKSByZXR1cm4ge307XG4gICAgICB2YXIgc3RhcnREYXRlID0gc2VsZWN0ZWRSYW5nZS5zdGFydERhdGUsXG4gICAgICAgICAgZW5kRGF0ZSA9IHNlbGVjdGVkUmFuZ2UuZW5kRGF0ZTtcbiAgICAgIGlmICghZW5kRGF0ZSkgZW5kRGF0ZSA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XG4gICAgICB2YXIgbmV4dEZvY3VzUmFuZ2U7XG5cbiAgICAgIGlmICghaXNTaW5nbGVWYWx1ZSkge1xuICAgICAgICBzdGFydERhdGUgPSB2YWx1ZS5zdGFydERhdGU7XG4gICAgICAgIGVuZERhdGUgPSB2YWx1ZS5lbmREYXRlO1xuICAgICAgfSBlbHNlIGlmIChmb2N1c2VkUmFuZ2VbMV0gPT09IDApIHtcbiAgICAgICAgLy8gc3RhcnREYXRlIHNlbGVjdGlvblxuICAgICAgICB2YXIgZGF5T2Zmc2V0ID0gKDAsIF9kYXRlRm5zLmRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cykoZW5kRGF0ZSwgc3RhcnREYXRlKTtcbiAgICAgICAgc3RhcnREYXRlID0gdmFsdWU7XG4gICAgICAgIGVuZERhdGUgPSBtb3ZlUmFuZ2VPbkZpcnN0U2VsZWN0aW9uID8gKDAsIF9kYXRlRm5zLmFkZERheXMpKHZhbHVlLCBkYXlPZmZzZXQpIDogdmFsdWU7XG4gICAgICAgIGlmIChtYXhEYXRlKSBlbmREYXRlID0gKDAsIF9kYXRlRm5zLm1pbikoW2VuZERhdGUsIG1heERhdGVdKTtcbiAgICAgICAgbmV4dEZvY3VzUmFuZ2UgPSBbZm9jdXNlZFJhbmdlWzBdLCAxXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZERhdGUgPSB2YWx1ZTtcbiAgICAgIH0gLy8gcmV2ZXJzZSBkYXRlcyBpZiBzdGFydERhdGUgYmVmb3JlIGVuZERhdGVcblxuXG4gICAgICB2YXIgaXNTdGFydERhdGVTZWxlY3RlZCA9IGZvY3VzZWRSYW5nZVsxXSA9PT0gMDtcblxuICAgICAgaWYgKCgwLCBfZGF0ZUZucy5pc0JlZm9yZSkoZW5kRGF0ZSwgc3RhcnREYXRlKSkge1xuICAgICAgICBpc1N0YXJ0RGF0ZVNlbGVjdGVkID0gIWlzU3RhcnREYXRlU2VsZWN0ZWQ7XG4gICAgICAgIHZhciBfcmVmID0gW2VuZERhdGUsIHN0YXJ0RGF0ZV07XG4gICAgICAgIHN0YXJ0RGF0ZSA9IF9yZWZbMF07XG4gICAgICAgIGVuZERhdGUgPSBfcmVmWzFdO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5WYWxpZERhdGVzV2l0aGluUmFuZ2UgPSBkaXNhYmxlZERhdGVzLmZpbHRlcihmdW5jdGlvbiAoZGlzYWJsZWREYXRlKSB7XG4gICAgICAgIHJldHVybiAoMCwgX2RhdGVGbnMuaXNXaXRoaW5JbnRlcnZhbCkoZGlzYWJsZWREYXRlLCB7XG4gICAgICAgICAgc3RhcnQ6IHN0YXJ0RGF0ZSxcbiAgICAgICAgICBlbmQ6IGVuZERhdGVcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGluVmFsaWREYXRlc1dpdGhpblJhbmdlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKGlzU3RhcnREYXRlU2VsZWN0ZWQpIHtcbiAgICAgICAgICBzdGFydERhdGUgPSAoMCwgX2RhdGVGbnMuYWRkRGF5cykoKDAsIF9kYXRlRm5zLm1heCkoaW5WYWxpZERhdGVzV2l0aGluUmFuZ2UpLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbmREYXRlID0gKDAsIF9kYXRlRm5zLmFkZERheXMpKCgwLCBfZGF0ZUZucy5taW4pKGluVmFsaWREYXRlc1dpdGhpblJhbmdlKSwgLTEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghbmV4dEZvY3VzUmFuZ2UpIHtcbiAgICAgICAgdmFyIG5leHRGb2N1c1JhbmdlSW5kZXggPSAoMCwgX3V0aWxzLmZpbmROZXh0UmFuZ2VJbmRleCkoX3RoaXMucHJvcHMucmFuZ2VzLCBmb2N1c2VkUmFuZ2VbMF0pO1xuICAgICAgICBuZXh0Rm9jdXNSYW5nZSA9IFtuZXh0Rm9jdXNSYW5nZUluZGV4LCAwXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2FzVmFsaWQ6ICEoaW5WYWxpZERhdGVzV2l0aGluUmFuZ2UubGVuZ3RoID4gMCksXG4gICAgICAgIHJhbmdlOiB7XG4gICAgICAgICAgc3RhcnREYXRlOiBzdGFydERhdGUsXG4gICAgICAgICAgZW5kRGF0ZTogZW5kRGF0ZVxuICAgICAgICB9LFxuICAgICAgICBuZXh0Rm9jdXNSYW5nZTogbmV4dEZvY3VzUmFuZ2VcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2V0U2VsZWN0aW9uXCIsIGZ1bmN0aW9uICh2YWx1ZSwgaXNTaW5nbGVWYWx1ZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9uQ2hhbmdlID0gX3RoaXMkcHJvcHMyLm9uQ2hhbmdlLFxuICAgICAgICAgIHJhbmdlcyA9IF90aGlzJHByb3BzMi5yYW5nZXMsXG4gICAgICAgICAgb25SYW5nZUZvY3VzQ2hhbmdlID0gX3RoaXMkcHJvcHMyLm9uUmFuZ2VGb2N1c0NoYW5nZTtcbiAgICAgIHZhciBmb2N1c2VkUmFuZ2UgPSBfdGhpcy5wcm9wcy5mb2N1c2VkUmFuZ2UgfHwgX3RoaXMuc3RhdGUuZm9jdXNlZFJhbmdlO1xuICAgICAgdmFyIGZvY3VzZWRSYW5nZUluZGV4ID0gZm9jdXNlZFJhbmdlWzBdO1xuICAgICAgdmFyIHNlbGVjdGVkUmFuZ2UgPSByYW5nZXNbZm9jdXNlZFJhbmdlSW5kZXhdO1xuICAgICAgaWYgKCFzZWxlY3RlZFJhbmdlKSByZXR1cm47XG5cbiAgICAgIHZhciBuZXdTZWxlY3Rpb24gPSBfdGhpcy5jYWxjTmV3U2VsZWN0aW9uKHZhbHVlLCBpc1NpbmdsZVZhbHVlKTtcblxuICAgICAgb25DaGFuZ2UoX2RlZmluZVByb3BlcnR5KHt9LCBzZWxlY3RlZFJhbmdlLmtleSB8fCBcInJhbmdlXCIuY29uY2F0KGZvY3VzZWRSYW5nZUluZGV4ICsgMSksIF9vYmplY3RTcHJlYWQoe30sIHNlbGVjdGVkUmFuZ2UsIHt9LCBuZXdTZWxlY3Rpb24ucmFuZ2UpKSk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZFJhbmdlOiBuZXdTZWxlY3Rpb24ubmV4dEZvY3VzUmFuZ2UsXG4gICAgICAgIHByZXZpZXc6IG51bGxcbiAgICAgIH0pO1xuXG4gICAgICBvblJhbmdlRm9jdXNDaGFuZ2UgJiYgb25SYW5nZUZvY3VzQ2hhbmdlKG5ld1NlbGVjdGlvbi5uZXh0Rm9jdXNSYW5nZSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaGFuZGxlUmFuZ2VGb2N1c0NoYW5nZVwiLCBmdW5jdGlvbiAoZm9jdXNlZFJhbmdlKSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzZWRSYW5nZTogZm9jdXNlZFJhbmdlXG4gICAgICB9KTtcblxuICAgICAgX3RoaXMucHJvcHMub25SYW5nZUZvY3VzQ2hhbmdlICYmIF90aGlzLnByb3BzLm9uUmFuZ2VGb2N1c0NoYW5nZShmb2N1c2VkUmFuZ2UpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInVwZGF0ZVByZXZpZXdcIiwgZnVuY3Rpb24gKHZhbCkge1xuICAgICAgaWYgKCF2YWwpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHByZXZpZXc6IG51bGxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgcmFuZ2VDb2xvcnMgPSBfdGhpcyRwcm9wczMucmFuZ2VDb2xvcnMsXG4gICAgICAgICAgcmFuZ2VzID0gX3RoaXMkcHJvcHMzLnJhbmdlcztcbiAgICAgIHZhciBmb2N1c2VkUmFuZ2UgPSBfdGhpcy5wcm9wcy5mb2N1c2VkUmFuZ2UgfHwgX3RoaXMuc3RhdGUuZm9jdXNlZFJhbmdlO1xuICAgICAgdmFyIGNvbG9yID0gcmFuZ2VzW2ZvY3VzZWRSYW5nZVswXV0uY29sb3IgfHwgcmFuZ2VDb2xvcnNbZm9jdXNlZFJhbmdlWzBdXSB8fCBjb2xvcjtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwcmV2aWV3OiBfb2JqZWN0U3ByZWFkKHt9LCB2YWwucmFuZ2UsIHtcbiAgICAgICAgICBjb2xvcjogY29sb3JcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBmb2N1c2VkUmFuZ2U6IHByb3BzLmluaXRpYWxGb2N1c2VkUmFuZ2UgfHwgWygwLCBfdXRpbHMuZmluZE5leHRSYW5nZUluZGV4KShwcm9wcy5yYW5nZXMpLCAwXSxcbiAgICAgIHByZXZpZXc6IG51bGxcbiAgICB9O1xuICAgIF90aGlzLnN0eWxlcyA9ICgwLCBfdXRpbHMuZ2VuZXJhdGVTdHlsZXMpKFtfc3R5bGVzW1wiZGVmYXVsdFwiXSwgcHJvcHMuY2xhc3NOYW1lc10pO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEYXRlUmFuZ2UsIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgcmV0dXJuIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChfQ2FsZW5kYXJbXCJkZWZhdWx0XCJdLCBfZXh0ZW5kcyh7XG4gICAgICAgIGZvY3VzZWRSYW5nZTogdGhpcy5zdGF0ZS5mb2N1c2VkUmFuZ2UsXG4gICAgICAgIG9uUmFuZ2VGb2N1c0NoYW5nZTogdGhpcy5oYW5kbGVSYW5nZUZvY3VzQ2hhbmdlLFxuICAgICAgICBwcmV2aWV3OiB0aGlzLnN0YXRlLnByZXZpZXcsXG4gICAgICAgIG9uUHJldmlld0NoYW5nZTogZnVuY3Rpb24gb25QcmV2aWV3Q2hhbmdlKHZhbHVlKSB7XG4gICAgICAgICAgX3RoaXMyLnVwZGF0ZVByZXZpZXcodmFsdWUgPyBfdGhpczIuY2FsY05ld1NlbGVjdGlvbih2YWx1ZSkgOiBudWxsKTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5wcm9wcywge1xuICAgICAgICBkaXNwbGF5TW9kZTogXCJkYXRlUmFuZ2VcIixcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKSh0aGlzLnN0eWxlcy5kYXRlUmFuZ2VXcmFwcGVyLCB0aGlzLnByb3BzLmNsYXNzTmFtZSksXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLnNldFNlbGVjdGlvbixcbiAgICAgICAgdXBkYXRlUmFuZ2U6IGZ1bmN0aW9uIHVwZGF0ZVJhbmdlKHZhbCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuc2V0U2VsZWN0aW9uKHZhbCwgZmFsc2UpO1xuICAgICAgICB9LFxuICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZih0YXJnZXQpIHtcbiAgICAgICAgICBfdGhpczIuY2FsZW5kYXIgPSB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRGF0ZVJhbmdlO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuRGF0ZVJhbmdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lczoge30sXG4gIHJhbmdlczogW10sXG4gIG1vdmVSYW5nZU9uRmlyc3RTZWxlY3Rpb246IGZhbHNlLFxuICByYW5nZUNvbG9yczogWycjM2Q5MWZmJywgJyMzZWNmOGUnLCAnI2ZlZDE0YyddLFxuICBkaXNhYmxlZERhdGVzOiBbXVxufTtcbkRhdGVSYW5nZS5wcm9wVHlwZXMgPSBfb2JqZWN0U3ByZWFkKHt9LCBfQ2FsZW5kYXJbXCJkZWZhdWx0XCJdLnByb3BUeXBlcywge1xuICBvbkNoYW5nZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uZnVuYyxcbiAgb25SYW5nZUZvY3VzQ2hhbmdlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5mdW5jLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgcmFuZ2VzOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5hcnJheU9mKF9EYXlDZWxsLnJhbmdlU2hhcGUpLFxuICBtb3ZlUmFuZ2VPbkZpcnN0U2VsZWN0aW9uOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sXG59KTtcbnZhciBfZGVmYXVsdCA9IERhdGVSYW5nZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfRGF0ZVJhbmdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vRGF0ZVJhbmdlXCIpKTtcblxudmFyIF9EZWZpbmVkUmFuZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9EZWZpbmVkUmFuZ2VcIikpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9zdHlsZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9zdHlsZXNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgRGF0ZVJhbmdlUGlja2VyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhEYXRlUmFuZ2VQaWNrZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERhdGVSYW5nZVBpY2tlcihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEYXRlUmFuZ2VQaWNrZXIpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoRGF0ZVJhbmdlUGlja2VyKS5jYWxsKHRoaXMsIHByb3BzKSk7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBmb2N1c2VkUmFuZ2U6IFsoMCwgX3V0aWxzLmZpbmROZXh0UmFuZ2VJbmRleCkocHJvcHMucmFuZ2VzKSwgMF1cbiAgICB9O1xuICAgIF90aGlzLnN0eWxlcyA9ICgwLCBfdXRpbHMuZ2VuZXJhdGVTdHlsZXMpKFtfc3R5bGVzW1wiZGVmYXVsdFwiXSwgcHJvcHMuY2xhc3NOYW1lc10pO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEYXRlUmFuZ2VQaWNrZXIsIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGZvY3VzZWRSYW5nZSA9IHRoaXMuc3RhdGUuZm9jdXNlZFJhbmdlO1xuICAgICAgcmV0dXJuIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkodGhpcy5zdHlsZXMuZGF0ZVJhbmdlUGlja2VyV3JhcHBlciwgdGhpcy5wcm9wcy5jbGFzc05hbWUpXG4gICAgICB9LCBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoX0RlZmluZWRSYW5nZVtcImRlZmF1bHRcIl0sIF9leHRlbmRzKHtcbiAgICAgICAgZm9jdXNlZFJhbmdlOiBmb2N1c2VkUmFuZ2UsXG4gICAgICAgIG9uUHJldmlld0NoYW5nZTogZnVuY3Rpb24gb25QcmV2aWV3Q2hhbmdlKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5kYXRlUmFuZ2UudXBkYXRlUHJldmlldyh2YWx1ZSA/IF90aGlzMi5kYXRlUmFuZ2UuY2FsY05ld1NlbGVjdGlvbih2YWx1ZSwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykgOiBudWxsKTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5wcm9wcywge1xuICAgICAgICByYW5nZTogdGhpcy5wcm9wcy5yYW5nZXNbZm9jdXNlZFJhbmdlWzBdXSxcbiAgICAgICAgY2xhc3NOYW1lOiB1bmRlZmluZWRcbiAgICAgIH0pKSwgX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KF9EYXRlUmFuZ2VbXCJkZWZhdWx0XCJdLCBfZXh0ZW5kcyh7XG4gICAgICAgIG9uUmFuZ2VGb2N1c0NoYW5nZTogZnVuY3Rpb24gb25SYW5nZUZvY3VzQ2hhbmdlKGZvY3VzZWRSYW5nZSkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZm9jdXNlZFJhbmdlOiBmb2N1c2VkUmFuZ2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZm9jdXNlZFJhbmdlOiBmb2N1c2VkUmFuZ2VcbiAgICAgIH0sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYodCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuZGF0ZVJhbmdlID0gdDtcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lOiB1bmRlZmluZWRcbiAgICAgIH0pKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERhdGVSYW5nZVBpY2tlcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkRhdGVSYW5nZVBpY2tlci5kZWZhdWx0UHJvcHMgPSB7fTtcbkRhdGVSYW5nZVBpY2tlci5wcm9wVHlwZXMgPSBfb2JqZWN0U3ByZWFkKHt9LCBfRGF0ZVJhbmdlW1wiZGVmYXVsdFwiXS5wcm9wVHlwZXMsIHt9LCBfRGVmaW5lZFJhbmdlW1wiZGVmYXVsdFwiXS5wcm9wVHlwZXMsIHtcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmdcbn0pO1xudmFyIF9kZWZhdWx0ID0gRGF0ZVJhbmdlUGlja2VyO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZXhwb3J0cy5yYW5nZVNoYXBlID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9jbGFzc25hbWVzNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX2RhdGVGbnMgPSByZXF1aXJlKFwiZGF0ZS1mbnNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBEYXlDZWxsID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhEYXlDZWxsLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBEYXlDZWxsKHByb3BzLCBjb250ZXh0KSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERheUNlbGwpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoRGF5Q2VsbCkuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImhhbmRsZUtleUV2ZW50XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgZGF5ID0gX3RoaXMkcHJvcHMuZGF5LFxuICAgICAgICAgIG9uTW91c2VEb3duID0gX3RoaXMkcHJvcHMub25Nb3VzZURvd24sXG4gICAgICAgICAgb25Nb3VzZVVwID0gX3RoaXMkcHJvcHMub25Nb3VzZVVwO1xuXG4gICAgICBpZiAoWzEzXG4gICAgICAvKiBzcGFjZSAqL1xuICAgICAgLCAzMlxuICAgICAgLyogZW50ZXIgKi9cbiAgICAgIF0uaW5jbHVkZXMoZXZlbnQua2V5Q29kZSkpIHtcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdrZXlkb3duJykgb25Nb3VzZURvd24oZGF5KTtlbHNlIG9uTW91c2VVcChkYXkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImhhbmRsZU1vdXNlRXZlbnRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgZGF5ID0gX3RoaXMkcHJvcHMyLmRheSxcbiAgICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzMi5kaXNhYmxlZCxcbiAgICAgICAgICBvblByZXZpZXdDaGFuZ2UgPSBfdGhpcyRwcm9wczIub25QcmV2aWV3Q2hhbmdlLFxuICAgICAgICAgIG9uTW91c2VFbnRlciA9IF90aGlzJHByb3BzMi5vbk1vdXNlRW50ZXIsXG4gICAgICAgICAgb25Nb3VzZURvd24gPSBfdGhpcyRwcm9wczIub25Nb3VzZURvd24sXG4gICAgICAgICAgb25Nb3VzZVVwID0gX3RoaXMkcHJvcHMyLm9uTW91c2VVcDtcbiAgICAgIHZhciBzdGF0ZUNoYW5nZXMgPSB7fTtcblxuICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgIG9uUHJldmlld0NoYW5nZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgICBjYXNlICdtb3VzZWVudGVyJzpcbiAgICAgICAgICBvbk1vdXNlRW50ZXIoZGF5KTtcbiAgICAgICAgICBvblByZXZpZXdDaGFuZ2UoZGF5KTtcbiAgICAgICAgICBzdGF0ZUNoYW5nZXMuaG92ZXIgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2JsdXInOlxuICAgICAgICBjYXNlICdtb3VzZWxlYXZlJzpcbiAgICAgICAgICBzdGF0ZUNoYW5nZXMuaG92ZXIgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdtb3VzZWRvd24nOlxuICAgICAgICAgIHN0YXRlQ2hhbmdlcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIG9uTW91c2VEb3duKGRheSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbW91c2V1cCc6XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgc3RhdGVDaGFuZ2VzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIG9uTW91c2VVcChkYXkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2ZvY3VzJzpcbiAgICAgICAgICBvblByZXZpZXdDaGFuZ2UoZGF5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKE9iamVjdC5rZXlzKHN0YXRlQ2hhbmdlcykubGVuZ3RoKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHN0YXRlQ2hhbmdlcyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZ2V0Q2xhc3NOYW1lc1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2NsYXNzbmFtZXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBpc1Bhc3NpdmUgPSBfdGhpcyRwcm9wczMuaXNQYXNzaXZlLFxuICAgICAgICAgIGlzVG9kYXkgPSBfdGhpcyRwcm9wczMuaXNUb2RheSxcbiAgICAgICAgICBpc1dlZWtlbmQgPSBfdGhpcyRwcm9wczMuaXNXZWVrZW5kLFxuICAgICAgICAgIGlzU3RhcnRPZldlZWsgPSBfdGhpcyRwcm9wczMuaXNTdGFydE9mV2VlayxcbiAgICAgICAgICBpc0VuZE9mV2VlayA9IF90aGlzJHByb3BzMy5pc0VuZE9mV2VlayxcbiAgICAgICAgICBpc1N0YXJ0T2ZNb250aCA9IF90aGlzJHByb3BzMy5pc1N0YXJ0T2ZNb250aCxcbiAgICAgICAgICBpc0VuZE9mTW9udGggPSBfdGhpcyRwcm9wczMuaXNFbmRPZk1vbnRoLFxuICAgICAgICAgIGRpc2FibGVkID0gX3RoaXMkcHJvcHMzLmRpc2FibGVkLFxuICAgICAgICAgIHN0eWxlcyA9IF90aGlzJHByb3BzMy5zdHlsZXM7XG4gICAgICByZXR1cm4gKDAsIF9jbGFzc25hbWVzNFtcImRlZmF1bHRcIl0pKHN0eWxlcy5kYXksIChfY2xhc3NuYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzbmFtZXMsIHN0eWxlcy5kYXlQYXNzaXZlLCBpc1Bhc3NpdmUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzbmFtZXMsIHN0eWxlcy5kYXlEaXNhYmxlZCwgZGlzYWJsZWQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzbmFtZXMsIHN0eWxlcy5kYXlUb2RheSwgaXNUb2RheSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NuYW1lcywgc3R5bGVzLmRheVdlZWtlbmQsIGlzV2Vla2VuZCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NuYW1lcywgc3R5bGVzLmRheVN0YXJ0T2ZXZWVrLCBpc1N0YXJ0T2ZXZWVrKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc25hbWVzLCBzdHlsZXMuZGF5RW5kT2ZXZWVrLCBpc0VuZE9mV2VlayksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NuYW1lcywgc3R5bGVzLmRheVN0YXJ0T2ZNb250aCwgaXNTdGFydE9mTW9udGgpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzbmFtZXMsIHN0eWxlcy5kYXlFbmRPZk1vbnRoLCBpc0VuZE9mTW9udGgpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzbmFtZXMsIHN0eWxlcy5kYXlIb3ZlcmVkLCBfdGhpcy5zdGF0ZS5ob3ZlciksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NuYW1lcywgc3R5bGVzLmRheUFjdGl2ZSwgX3RoaXMuc3RhdGUuYWN0aXZlKSwgX2NsYXNzbmFtZXMpKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJyZW5kZXJQcmV2aWV3UGxhY2Vob2xkZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9jbGFzc25hbWVzMjtcblxuICAgICAgdmFyIF90aGlzJHByb3BzNCA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHByZXZpZXcgPSBfdGhpcyRwcm9wczQucHJldmlldyxcbiAgICAgICAgICBkYXkgPSBfdGhpcyRwcm9wczQuZGF5LFxuICAgICAgICAgIHN0eWxlcyA9IF90aGlzJHByb3BzNC5zdHlsZXM7XG4gICAgICBpZiAoIXByZXZpZXcpIHJldHVybiBudWxsO1xuICAgICAgdmFyIHN0YXJ0RGF0ZSA9IHByZXZpZXcuc3RhcnREYXRlID8gKDAsIF9kYXRlRm5zLmVuZE9mRGF5KShwcmV2aWV3LnN0YXJ0RGF0ZSkgOiBudWxsO1xuICAgICAgdmFyIGVuZERhdGUgPSBwcmV2aWV3LmVuZERhdGUgPyAoMCwgX2RhdGVGbnMuc3RhcnRPZkRheSkocHJldmlldy5lbmREYXRlKSA6IG51bGw7XG4gICAgICB2YXIgaXNJblJhbmdlID0gKCFzdGFydERhdGUgfHwgKDAsIF9kYXRlRm5zLmlzQWZ0ZXIpKGRheSwgc3RhcnREYXRlKSkgJiYgKCFlbmREYXRlIHx8ICgwLCBfZGF0ZUZucy5pc0JlZm9yZSkoZGF5LCBlbmREYXRlKSk7XG4gICAgICB2YXIgaXNTdGFydEVkZ2UgPSAhaXNJblJhbmdlICYmICgwLCBfZGF0ZUZucy5pc1NhbWVEYXkpKGRheSwgc3RhcnREYXRlKTtcbiAgICAgIHZhciBpc0VuZEVkZ2UgPSAhaXNJblJhbmdlICYmICgwLCBfZGF0ZUZucy5pc1NhbWVEYXkpKGRheSwgZW5kRGF0ZSk7XG4gICAgICByZXR1cm4gX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzNFtcImRlZmF1bHRcIl0pKChfY2xhc3NuYW1lczIgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc25hbWVzMiwgc3R5bGVzLmRheVN0YXJ0UHJldmlldywgaXNTdGFydEVkZ2UpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzbmFtZXMyLCBzdHlsZXMuZGF5SW5QcmV2aWV3LCBpc0luUmFuZ2UpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzbmFtZXMyLCBzdHlsZXMuZGF5RW5kUHJldmlldywgaXNFbmRFZGdlKSwgX2NsYXNzbmFtZXMyKSksXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgY29sb3I6IHByZXZpZXcuY29sb3JcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicmVuZGVyU2VsZWN0aW9uUGxhY2Vob2xkZXJzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczUgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBzdHlsZXMgPSBfdGhpcyRwcm9wczUuc3R5bGVzLFxuICAgICAgICAgIHJhbmdlcyA9IF90aGlzJHByb3BzNS5yYW5nZXMsXG4gICAgICAgICAgZGF5ID0gX3RoaXMkcHJvcHM1LmRheTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLmRpc3BsYXlNb2RlID09PSAnZGF0ZScpIHtcbiAgICAgICAgdmFyIGlzU2VsZWN0ZWQgPSAoMCwgX2RhdGVGbnMuaXNTYW1lRGF5KShfdGhpcy5wcm9wcy5kYXksIF90aGlzLnByb3BzLmRhdGUpO1xuICAgICAgICByZXR1cm4gaXNTZWxlY3RlZCA/IF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogc3R5bGVzLnNlbGVjdGVkLFxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBjb2xvcjogX3RoaXMucHJvcHMuY29sb3JcbiAgICAgICAgICB9XG4gICAgICAgIH0pIDogbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIGluUmFuZ2VzID0gcmFuZ2VzLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCByYW5nZSkge1xuICAgICAgICB2YXIgc3RhcnREYXRlID0gcmFuZ2Uuc3RhcnREYXRlO1xuICAgICAgICB2YXIgZW5kRGF0ZSA9IHJhbmdlLmVuZERhdGU7XG5cbiAgICAgICAgaWYgKHN0YXJ0RGF0ZSAmJiBlbmREYXRlICYmICgwLCBfZGF0ZUZucy5pc0JlZm9yZSkoZW5kRGF0ZSwgc3RhcnREYXRlKSkge1xuICAgICAgICAgIHZhciBfcmVmID0gW2VuZERhdGUsIHN0YXJ0RGF0ZV07XG4gICAgICAgICAgc3RhcnREYXRlID0gX3JlZlswXTtcbiAgICAgICAgICBlbmREYXRlID0gX3JlZlsxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZSA/ICgwLCBfZGF0ZUZucy5lbmRPZkRheSkoc3RhcnREYXRlKSA6IG51bGw7XG4gICAgICAgIGVuZERhdGUgPSBlbmREYXRlID8gKDAsIF9kYXRlRm5zLnN0YXJ0T2ZEYXkpKGVuZERhdGUpIDogbnVsbDtcbiAgICAgICAgdmFyIGlzSW5SYW5nZSA9ICghc3RhcnREYXRlIHx8ICgwLCBfZGF0ZUZucy5pc0FmdGVyKShkYXksIHN0YXJ0RGF0ZSkpICYmICghZW5kRGF0ZSB8fCAoMCwgX2RhdGVGbnMuaXNCZWZvcmUpKGRheSwgZW5kRGF0ZSkpO1xuICAgICAgICB2YXIgaXNTdGFydEVkZ2UgPSAhaXNJblJhbmdlICYmICgwLCBfZGF0ZUZucy5pc1NhbWVEYXkpKGRheSwgc3RhcnREYXRlKTtcbiAgICAgICAgdmFyIGlzRW5kRWRnZSA9ICFpc0luUmFuZ2UgJiYgKDAsIF9kYXRlRm5zLmlzU2FtZURheSkoZGF5LCBlbmREYXRlKTtcblxuICAgICAgICBpZiAoaXNJblJhbmdlIHx8IGlzU3RhcnRFZGdlIHx8IGlzRW5kRWRnZSkge1xuICAgICAgICAgIHJldHVybiBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHJlc3VsdCksIFtfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgIGlzU3RhcnRFZGdlOiBpc1N0YXJ0RWRnZSxcbiAgICAgICAgICAgIGlzRW5kRWRnZTogaXNFbmRFZGdlLFxuICAgICAgICAgICAgaXNJblJhbmdlOiBpc0luUmFuZ2VcbiAgICAgICAgICB9LCByYW5nZSldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9LCBbXSk7XG4gICAgICByZXR1cm4gaW5SYW5nZXMubWFwKGZ1bmN0aW9uIChyYW5nZSwgaSkge1xuICAgICAgICB2YXIgX2NsYXNzbmFtZXMzO1xuXG4gICAgICAgIHJldHVybiBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXM0W1wiZGVmYXVsdFwiXSkoKF9jbGFzc25hbWVzMyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzbmFtZXMzLCBzdHlsZXMuc3RhcnRFZGdlLCByYW5nZS5pc1N0YXJ0RWRnZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NuYW1lczMsIHN0eWxlcy5lbmRFZGdlLCByYW5nZS5pc0VuZEVkZ2UpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzbmFtZXMzLCBzdHlsZXMuaW5SYW5nZSwgcmFuZ2UuaXNJblJhbmdlKSwgX2NsYXNzbmFtZXMzKSksXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIGNvbG9yOiByYW5nZS5jb2xvciB8fCBfdGhpcy5wcm9wcy5jb2xvclxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaG92ZXI6IGZhbHNlLFxuICAgICAgYWN0aXZlOiBmYWxzZVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERheUNlbGwsIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIF9leHRlbmRzKHtcbiAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLmhhbmRsZU1vdXNlRXZlbnQsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5oYW5kbGVNb3VzZUV2ZW50LFxuICAgICAgICBvbkZvY3VzOiB0aGlzLmhhbmRsZU1vdXNlRXZlbnQsXG4gICAgICAgIG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZU1vdXNlRXZlbnQsXG4gICAgICAgIG9uTW91c2VVcDogdGhpcy5oYW5kbGVNb3VzZUV2ZW50LFxuICAgICAgICBvbkJsdXI6IHRoaXMuaGFuZGxlTW91c2VFdmVudCxcbiAgICAgICAgb25QYXVzZUNhcHR1cmU6IHRoaXMuaGFuZGxlTW91c2VFdmVudCxcbiAgICAgICAgb25LZXlEb3duOiB0aGlzLmhhbmRsZUtleUV2ZW50LFxuICAgICAgICBvbktleVVwOiB0aGlzLmhhbmRsZUtleUV2ZW50LFxuICAgICAgICBjbGFzc05hbWU6IHRoaXMuZ2V0Q2xhc3NOYW1lcyh0aGlzLnByb3BzLnN0eWxlcylcbiAgICAgIH0sIHRoaXMucHJvcHMuZGlzYWJsZWQgfHwgdGhpcy5wcm9wcy5pc1Bhc3NpdmUgPyB7XG4gICAgICAgIHRhYkluZGV4OiAtMVxuICAgICAgfSA6IHt9LCB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgY29sb3I6IHRoaXMucHJvcHMuY29sb3JcbiAgICAgICAgfVxuICAgICAgfSksIHRoaXMucmVuZGVyU2VsZWN0aW9uUGxhY2Vob2xkZXJzKCksIHRoaXMucmVuZGVyUHJldmlld1BsYWNlaG9sZGVyKCksIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuc3R5bGVzLmRheU51bWJlclxuICAgICAgfSwgX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCAoMCwgX2RhdGVGbnMuZm9ybWF0KSh0aGlzLnByb3BzLmRheSwgdGhpcy5wcm9wcy5kYXlEaXNwbGF5Rm9ybWF0KSkpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRGF5Q2VsbDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkRheUNlbGwuZGVmYXVsdFByb3BzID0ge307XG5cbnZhciByYW5nZVNoYXBlID0gX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc2hhcGUoe1xuICBzdGFydERhdGU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgZW5kRGF0ZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBjb2xvcjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBrZXk6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgYXV0b0ZvY3VzOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sLFxuICBkaXNhYmxlZDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYm9vbCxcbiAgc2hvd0RhdGVEaXNwbGF5OiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sXG59KTtcblxuZXhwb3J0cy5yYW5nZVNoYXBlID0gcmFuZ2VTaGFwZTtcbkRheUNlbGwucHJvcFR5cGVzID0ge1xuICBkYXk6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm9iamVjdC5pc1JlcXVpcmVkLFxuICBkYXlEaXNwbGF5Rm9ybWF0OiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGRhdGU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgcmFuZ2VzOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5hcnJheU9mKHJhbmdlU2hhcGUpLFxuICBwcmV2aWV3OiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zaGFwZSh7XG4gICAgc3RhcnREYXRlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gICAgZW5kRGF0ZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ub2JqZWN0LFxuICAgIGNvbG9yOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmdcbiAgfSksXG4gIG9uUHJldmlld0NoYW5nZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uZnVuYyxcbiAgcHJldmlld0NvbG9yOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sLFxuICBpc1Bhc3NpdmU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGlzVG9kYXk6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGlzV2Vla2VuZDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYm9vbCxcbiAgaXNTdGFydE9mV2VlazogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYm9vbCxcbiAgaXNFbmRPZldlZWs6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGlzU3RhcnRPZk1vbnRoOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sLFxuICBpc0VuZE9mTW9udGg6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNvbG9yOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGRpc3BsYXlNb2RlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vbmVPZihbJ2RhdGVSYW5nZScsICdkYXRlJ10pLFxuICBzdHlsZXM6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgb25Nb3VzZURvd246IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG9uTW91c2VVcDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uZnVuYyxcbiAgb25Nb3VzZUVudGVyOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5mdW5jXG59O1xudmFyIF9kZWZhdWx0ID0gRGF5Q2VsbDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfc3R5bGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vc3R5bGVzXCIpKTtcblxudmFyIF9kZWZhdWx0UmFuZ2VzID0gcmVxdWlyZShcIi4uLy4uL2RlZmF1bHRSYW5nZXNcIik7XG5cbnZhciBfRGF5Q2VsbCA9IHJlcXVpcmUoXCIuLi9EYXlDZWxsXCIpO1xuXG52YXIgX0lucHV0UmFuZ2VGaWVsZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL0lucHV0UmFuZ2VGaWVsZFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgRGVmaW5lZFJhbmdlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhEZWZpbmVkUmFuZ2UsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERlZmluZWRSYW5nZShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEZWZpbmVkUmFuZ2UpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoRGVmaW5lZFJhbmdlKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaGFuZGxlUmFuZ2VDaGFuZ2VcIiwgZnVuY3Rpb24gKHJhbmdlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBvbkNoYW5nZSA9IF90aGlzJHByb3BzLm9uQ2hhbmdlLFxuICAgICAgICAgIHJhbmdlcyA9IF90aGlzJHByb3BzLnJhbmdlcyxcbiAgICAgICAgICBmb2N1c2VkUmFuZ2UgPSBfdGhpcyRwcm9wcy5mb2N1c2VkUmFuZ2U7XG4gICAgICB2YXIgc2VsZWN0ZWRSYW5nZSA9IHJhbmdlc1tmb2N1c2VkUmFuZ2VbMF1dO1xuICAgICAgaWYgKCFvbkNoYW5nZSB8fCAhc2VsZWN0ZWRSYW5nZSkgcmV0dXJuO1xuICAgICAgb25DaGFuZ2UoX2RlZmluZVByb3BlcnR5KHt9LCBzZWxlY3RlZFJhbmdlLmtleSB8fCBcInJhbmdlXCIuY29uY2F0KGZvY3VzZWRSYW5nZVswXSArIDEpLCBfb2JqZWN0U3ByZWFkKHt9LCBzZWxlY3RlZFJhbmdlLCB7fSwgcmFuZ2UpKSk7XG4gICAgfSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJhbmdlT2Zmc2V0OiAwLFxuICAgICAgZm9jdXNlZElucHV0OiAtMVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERlZmluZWRSYW5nZSwgW3tcbiAgICBrZXk6IFwiZ2V0UmFuZ2VPcHRpb25WYWx1ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSYW5nZU9wdGlvblZhbHVlKG9wdGlvbikge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgX3RoaXMkcHJvcHMyJHJhbmdlcyA9IF90aGlzJHByb3BzMi5yYW5nZXMsXG4gICAgICAgICAgcmFuZ2VzID0gX3RoaXMkcHJvcHMyJHJhbmdlcyA9PT0gdm9pZCAwID8gW10gOiBfdGhpcyRwcm9wczIkcmFuZ2VzLFxuICAgICAgICAgIF90aGlzJHByb3BzMiRmb2N1c2VkUiA9IF90aGlzJHByb3BzMi5mb2N1c2VkUmFuZ2UsXG4gICAgICAgICAgZm9jdXNlZFJhbmdlID0gX3RoaXMkcHJvcHMyJGZvY3VzZWRSID09PSB2b2lkIDAgPyBbXSA6IF90aGlzJHByb3BzMiRmb2N1c2VkUjtcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb24uZ2V0Q3VycmVudFZhbHVlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgICAgdmFyIHNlbGVjdGVkUmFuZ2UgPSByYW5nZXNbZm9jdXNlZFJhbmdlWzBdXSB8fCB7fTtcbiAgICAgIHJldHVybiBvcHRpb24uZ2V0Q3VycmVudFZhbHVlKHNlbGVjdGVkUmFuZ2UpIHx8ICcnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTZWxlY3RlZFJhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNlbGVjdGVkUmFuZ2UocmFuZ2VzLCBzdGF0aWNSYW5nZSkge1xuICAgICAgdmFyIGZvY3VzZWRSYW5nZUluZGV4ID0gcmFuZ2VzLmZpbmRJbmRleChmdW5jdGlvbiAocmFuZ2UpIHtcbiAgICAgICAgaWYgKCFyYW5nZS5zdGFydERhdGUgfHwgIXJhbmdlLmVuZERhdGUgfHwgcmFuZ2UuZGlzYWJsZWQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHN0YXRpY1JhbmdlLmlzU2VsZWN0ZWQocmFuZ2UpO1xuICAgICAgfSk7XG4gICAgICB2YXIgc2VsZWN0ZWRSYW5nZSA9IHJhbmdlc1tmb2N1c2VkUmFuZ2VJbmRleF07XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RlZFJhbmdlOiBzZWxlY3RlZFJhbmdlLFxuICAgICAgICBmb2N1c2VkUmFuZ2VJbmRleDogZm9jdXNlZFJhbmdlSW5kZXhcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaGVhZGVyQ29udGVudCA9IF90aGlzJHByb3BzMy5oZWFkZXJDb250ZW50LFxuICAgICAgICAgIGZvb3RlckNvbnRlbnQgPSBfdGhpcyRwcm9wczMuZm9vdGVyQ29udGVudCxcbiAgICAgICAgICBvblByZXZpZXdDaGFuZ2UgPSBfdGhpcyRwcm9wczMub25QcmV2aWV3Q2hhbmdlLFxuICAgICAgICAgIGlucHV0UmFuZ2VzID0gX3RoaXMkcHJvcHMzLmlucHV0UmFuZ2VzLFxuICAgICAgICAgIHN0YXRpY1JhbmdlcyA9IF90aGlzJHByb3BzMy5zdGF0aWNSYW5nZXMsXG4gICAgICAgICAgcmFuZ2VzID0gX3RoaXMkcHJvcHMzLnJhbmdlcyxcbiAgICAgICAgICByZW5kZXJTdGF0aWNSYW5nZUxhYmVsID0gX3RoaXMkcHJvcHMzLnJlbmRlclN0YXRpY1JhbmdlTGFiZWwsXG4gICAgICAgICAgcmFuZ2VDb2xvcnMgPSBfdGhpcyRwcm9wczMucmFuZ2VDb2xvcnMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMzLmNsYXNzTmFtZTtcbiAgICAgIHJldHVybiBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKF9zdHlsZXNbXCJkZWZhdWx0XCJdLmRlZmluZWRSYW5nZXNXcmFwcGVyLCBjbGFzc05hbWUpXG4gICAgICB9LCBoZWFkZXJDb250ZW50LCBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IF9zdHlsZXNbXCJkZWZhdWx0XCJdLnN0YXRpY1Jhbmdlc1xuICAgICAgfSwgc3RhdGljUmFuZ2VzLm1hcChmdW5jdGlvbiAoc3RhdGljUmFuZ2UsIGkpIHtcbiAgICAgICAgdmFyIF90aGlzMiRnZXRTZWxlY3RlZFJhbiA9IF90aGlzMi5nZXRTZWxlY3RlZFJhbmdlKHJhbmdlcywgc3RhdGljUmFuZ2UpLFxuICAgICAgICAgICAgc2VsZWN0ZWRSYW5nZSA9IF90aGlzMiRnZXRTZWxlY3RlZFJhbi5zZWxlY3RlZFJhbmdlLFxuICAgICAgICAgICAgZm9jdXNlZFJhbmdlSW5kZXggPSBfdGhpczIkZ2V0U2VsZWN0ZWRSYW4uZm9jdXNlZFJhbmdlSW5kZXg7XG5cbiAgICAgICAgdmFyIGxhYmVsQ29udGVudDtcblxuICAgICAgICBpZiAoc3RhdGljUmFuZ2UuaGFzQ3VzdG9tUmVuZGVyaW5nKSB7XG4gICAgICAgICAgbGFiZWxDb250ZW50ID0gcmVuZGVyU3RhdGljUmFuZ2VMYWJlbChzdGF0aWNSYW5nZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFiZWxDb250ZW50ID0gc3RhdGljUmFuZ2UubGFiZWw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoX3N0eWxlc1tcImRlZmF1bHRcIl0uc3RhdGljUmFuZ2UsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgX3N0eWxlc1tcImRlZmF1bHRcIl0uc3RhdGljUmFuZ2VTZWxlY3RlZCwgQm9vbGVhbihzZWxlY3RlZFJhbmdlKSkpLFxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBjb2xvcjogc2VsZWN0ZWRSYW5nZSA/IHNlbGVjdGVkUmFuZ2UuY29sb3IgfHwgcmFuZ2VDb2xvcnNbZm9jdXNlZFJhbmdlSW5kZXhdIDogbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAga2V5OiBpLFxuICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLmhhbmRsZVJhbmdlQ2hhbmdlKHN0YXRpY1JhbmdlLnJhbmdlKF90aGlzMi5wcm9wcykpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb25Gb2N1czogZnVuY3Rpb24gb25Gb2N1cygpIHtcbiAgICAgICAgICAgIHJldHVybiBvblByZXZpZXdDaGFuZ2UgJiYgb25QcmV2aWV3Q2hhbmdlKHN0YXRpY1JhbmdlLnJhbmdlKF90aGlzMi5wcm9wcykpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb25Nb3VzZU92ZXI6IGZ1bmN0aW9uIG9uTW91c2VPdmVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIG9uUHJldmlld0NoYW5nZSAmJiBvblByZXZpZXdDaGFuZ2Uoc3RhdGljUmFuZ2UucmFuZ2UoX3RoaXMyLnByb3BzKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbk1vdXNlTGVhdmU6IGZ1bmN0aW9uIG9uTW91c2VMZWF2ZSgpIHtcbiAgICAgICAgICAgIG9uUHJldmlld0NoYW5nZSAmJiBvblByZXZpZXdDaGFuZ2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICAgIHRhYkluZGV4OiAtMSxcbiAgICAgICAgICBjbGFzc05hbWU6IF9zdHlsZXNbXCJkZWZhdWx0XCJdLnN0YXRpY1JhbmdlTGFiZWxcbiAgICAgICAgfSwgbGFiZWxDb250ZW50KSk7XG4gICAgICB9KSksIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogX3N0eWxlc1tcImRlZmF1bHRcIl0uaW5wdXRSYW5nZXNcbiAgICAgIH0sIGlucHV0UmFuZ2VzLm1hcChmdW5jdGlvbiAocmFuZ2VPcHRpb24sIGkpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChfSW5wdXRSYW5nZUZpZWxkW1wiZGVmYXVsdFwiXSwge1xuICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICBzdHlsZXM6IF9zdHlsZXNbXCJkZWZhdWx0XCJdLFxuICAgICAgICAgIGxhYmVsOiByYW5nZU9wdGlvbi5sYWJlbCxcbiAgICAgICAgICBvbkZvY3VzOiBmdW5jdGlvbiBvbkZvY3VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGZvY3VzZWRJbnB1dDogaSxcbiAgICAgICAgICAgICAgcmFuZ2VPZmZzZXQ6IDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb25CbHVyOiBmdW5jdGlvbiBvbkJsdXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgcmFuZ2VPZmZzZXQ6IDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLmhhbmRsZVJhbmdlQ2hhbmdlKHJhbmdlT3B0aW9uLnJhbmdlKHZhbHVlLCBfdGhpczIucHJvcHMpKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZhbHVlOiBfdGhpczIuZ2V0UmFuZ2VPcHRpb25WYWx1ZShyYW5nZU9wdGlvbilcbiAgICAgICAgfSk7XG4gICAgICB9KSksIGZvb3RlckNvbnRlbnQpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEZWZpbmVkUmFuZ2U7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5EZWZpbmVkUmFuZ2UucHJvcFR5cGVzID0ge1xuICBpbnB1dFJhbmdlczogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYXJyYXksXG4gIHN0YXRpY1JhbmdlczogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYXJyYXksXG4gIHJhbmdlczogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYXJyYXlPZihfRGF5Q2VsbC5yYW5nZVNoYXBlKSxcbiAgZm9jdXNlZFJhbmdlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5hcnJheU9mKF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlciksXG4gIG9uUHJldmlld0NoYW5nZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uZnVuYyxcbiAgb25DaGFuZ2U6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIGZvb3RlckNvbnRlbnQ6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmFueSxcbiAgaGVhZGVyQ29udGVudDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYW55LFxuICByYW5nZUNvbG9yczogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYXJyYXlPZihfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcpLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgcmVuZGVyU3RhdGljUmFuZ2VMYWJlbDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uZnVuY1xufTtcbkRlZmluZWRSYW5nZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGlucHV0UmFuZ2VzOiBfZGVmYXVsdFJhbmdlcy5kZWZhdWx0SW5wdXRSYW5nZXMsXG4gIHN0YXRpY1JhbmdlczogX2RlZmF1bHRSYW5nZXMuZGVmYXVsdFN0YXRpY1JhbmdlcyxcbiAgcmFuZ2VzOiBbXSxcbiAgcmFuZ2VDb2xvcnM6IFsnIzNkOTFmZicsICcjM2VjZjhlJywgJyNmZWQxNGMnXSxcbiAgZm9jdXNlZFJhbmdlOiBbMCwgMF1cbn07XG52YXIgX2RlZmF1bHQgPSBEZWZpbmVkUmFuZ2U7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBNSU4gPSAwO1xudmFyIE1BWCA9IDk5OTk5O1xuXG52YXIgSW5wdXRSYW5nZUZpZWxkID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhJbnB1dFJhbmdlRmllbGQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIElucHV0UmFuZ2VGaWVsZChwcm9wcywgY29udGV4dCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnB1dFJhbmdlRmllbGQpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoSW5wdXRSYW5nZUZpZWxkKS5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25DaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBvbkNoYW5nZSA9IF90aGlzLnByb3BzLm9uQ2hhbmdlO1xuICAgICAgdmFyIHZhbHVlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcbiAgICAgIHZhbHVlID0gaXNOYU4odmFsdWUpID8gMCA6IE1hdGgubWF4KE1hdGgubWluKE1BWCwgdmFsdWUpLCBNSU4pO1xuICAgICAgb25DaGFuZ2UodmFsdWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKElucHV0UmFuZ2VGaWVsZCwgW3tcbiAgICBrZXk6IFwic2hvdWxkQ29tcG9uZW50VXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRwcm9wcy52YWx1ZSxcbiAgICAgICAgICBsYWJlbCA9IF90aGlzJHByb3BzLmxhYmVsLFxuICAgICAgICAgIHBsYWNlaG9sZGVyID0gX3RoaXMkcHJvcHMucGxhY2Vob2xkZXI7XG4gICAgICByZXR1cm4gdmFsdWUgIT09IG5leHRQcm9wcy52YWx1ZSB8fCBsYWJlbCAhPT0gbmV4dFByb3BzLmxhYmVsIHx8IHBsYWNlaG9sZGVyICE9PSBuZXh0UHJvcHMucGxhY2Vob2xkZXI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBsYWJlbCA9IF90aGlzJHByb3BzMi5sYWJlbCxcbiAgICAgICAgICBwbGFjZWhvbGRlciA9IF90aGlzJHByb3BzMi5wbGFjZWhvbGRlcixcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHByb3BzMi52YWx1ZSxcbiAgICAgICAgICBzdHlsZXMgPSBfdGhpcyRwcm9wczIuc3R5bGVzLFxuICAgICAgICAgIG9uQmx1ciA9IF90aGlzJHByb3BzMi5vbkJsdXIsXG4gICAgICAgICAgb25Gb2N1cyA9IF90aGlzJHByb3BzMi5vbkZvY3VzO1xuICAgICAgcmV0dXJuIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogc3R5bGVzLmlucHV0UmFuZ2VcbiAgICAgIH0sIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBzdHlsZXMuaW5wdXRSYW5nZUlucHV0LFxuICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgbWluOiBNSU4sXG4gICAgICAgIG1heDogTUFYLFxuICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgb25Gb2N1czogb25Gb2N1cyxcbiAgICAgICAgb25CbHVyOiBvbkJsdXJcbiAgICAgIH0pLCBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBzdHlsZXMuaW5wdXRSYW5nZUxhYmVsXG4gICAgICB9LCBsYWJlbCkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJbnB1dFJhbmdlRmllbGQ7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5JbnB1dFJhbmdlRmllbGQucHJvcFR5cGVzID0ge1xuICB2YWx1ZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsIF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlcl0pLFxuICBsYWJlbDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHBsYWNlaG9sZGVyOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHN0eWxlczogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc2hhcGUoe1xuICAgIGlucHV0UmFuZ2U6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgICBpbnB1dFJhbmdlSW5wdXQ6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgICBpbnB1dFJhbmdlTGFiZWw6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZ1xuICB9KS5pc1JlcXVpcmVkLFxuICBvbkJsdXI6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25Gb2N1czogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uZnVuYy5pc1JlcXVpcmVkLFxuICBvbkNoYW5nZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uZnVuYy5pc1JlcXVpcmVkXG59O1xuSW5wdXRSYW5nZUZpZWxkLmRlZmF1bHRQcm9wcyA9IHtcbiAgdmFsdWU6ICcnLFxuICBwbGFjZWhvbGRlcjogJy0nXG59O1xudmFyIF9kZWZhdWx0ID0gSW5wdXRSYW5nZUZpZWxkO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9EYXlDZWxsID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL0RheUNlbGxcIikpO1xuXG52YXIgX2RhdGVGbnMgPSByZXF1aXJlKFwiZGF0ZS1mbnNcIik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIHJlbmRlcldlZWtkYXlzKHN0eWxlcywgZGF0ZU9wdGlvbnMsIHdlZWtkYXlEaXNwbGF5Rm9ybWF0KSB7XG4gIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuICByZXR1cm4gX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IHN0eWxlcy53ZWVrRGF5c1xuICB9LCAoMCwgX2RhdGVGbnMuZWFjaERheU9mSW50ZXJ2YWwpKHtcbiAgICBzdGFydDogKDAsIF9kYXRlRm5zLnN0YXJ0T2ZXZWVrKShub3csIGRhdGVPcHRpb25zKSxcbiAgICBlbmQ6ICgwLCBfZGF0ZUZucy5lbmRPZldlZWspKG5vdywgZGF0ZU9wdGlvbnMpXG4gIH0pLm1hcChmdW5jdGlvbiAoZGF5LCBpKSB7XG4gICAgcmV0dXJuIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBzdHlsZXMud2Vla0RheSxcbiAgICAgIGtleTogaVxuICAgIH0sICgwLCBfZGF0ZUZucy5mb3JtYXQpKGRheSwgd2Vla2RheURpc3BsYXlGb3JtYXQsIGRhdGVPcHRpb25zKSk7XG4gIH0pKTtcbn1cblxudmFyIE1vbnRoID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTW9udGgsIF9QdXJlQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBNb250aCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTW9udGgpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihNb250aCkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTW9udGgsIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZGlzcGxheU1vZGUgPSBfdGhpcyRwcm9wcy5kaXNwbGF5TW9kZSxcbiAgICAgICAgICBmb2N1c2VkUmFuZ2UgPSBfdGhpcyRwcm9wcy5mb2N1c2VkUmFuZ2UsXG4gICAgICAgICAgZHJhZyA9IF90aGlzJHByb3BzLmRyYWcsXG4gICAgICAgICAgc3R5bGVzID0gX3RoaXMkcHJvcHMuc3R5bGVzLFxuICAgICAgICAgIGRpc2FibGVkRGF0ZXMgPSBfdGhpcyRwcm9wcy5kaXNhYmxlZERhdGVzLFxuICAgICAgICAgIGRpc2FibGVkRGF5ID0gX3RoaXMkcHJvcHMuZGlzYWJsZWREYXk7XG4gICAgICB2YXIgbWluRGF0ZSA9IHRoaXMucHJvcHMubWluRGF0ZSAmJiAoMCwgX2RhdGVGbnMuc3RhcnRPZkRheSkodGhpcy5wcm9wcy5taW5EYXRlKTtcbiAgICAgIHZhciBtYXhEYXRlID0gdGhpcy5wcm9wcy5tYXhEYXRlICYmICgwLCBfZGF0ZUZucy5lbmRPZkRheSkodGhpcy5wcm9wcy5tYXhEYXRlKTtcbiAgICAgIHZhciBtb250aERpc3BsYXkgPSAoMCwgX3V0aWxzLmdldE1vbnRoRGlzcGxheVJhbmdlKSh0aGlzLnByb3BzLm1vbnRoLCB0aGlzLnByb3BzLmRhdGVPcHRpb25zLCB0aGlzLnByb3BzLmZpeGVkSGVpZ2h0KTtcbiAgICAgIHZhciByYW5nZXMgPSB0aGlzLnByb3BzLnJhbmdlcztcblxuICAgICAgaWYgKGRpc3BsYXlNb2RlID09PSAnZGF0ZVJhbmdlJyAmJiBkcmFnLnN0YXR1cykge1xuICAgICAgICB2YXIgX2RyYWckcmFuZ2UgPSBkcmFnLnJhbmdlLFxuICAgICAgICAgICAgc3RhcnREYXRlID0gX2RyYWckcmFuZ2Uuc3RhcnREYXRlLFxuICAgICAgICAgICAgZW5kRGF0ZSA9IF9kcmFnJHJhbmdlLmVuZERhdGU7XG4gICAgICAgIHJhbmdlcyA9IHJhbmdlcy5tYXAoZnVuY3Rpb24gKHJhbmdlLCBpKSB7XG4gICAgICAgICAgaWYgKGkgIT09IGZvY3VzZWRSYW5nZVswXSkgcmV0dXJuIHJhbmdlO1xuICAgICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCByYW5nZSwge1xuICAgICAgICAgICAgc3RhcnREYXRlOiBzdGFydERhdGUsXG4gICAgICAgICAgICBlbmREYXRlOiBlbmREYXRlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2hvd1ByZXZpZXcgPSB0aGlzLnByb3BzLnNob3dQcmV2aWV3ICYmICFkcmFnLmRpc2FibGVQcmV2aWV3O1xuICAgICAgcmV0dXJuIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogc3R5bGVzLm1vbnRoLFxuICAgICAgICBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZVxuICAgICAgfSwgdGhpcy5wcm9wcy5zaG93TW9udGhOYW1lID8gX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBzdHlsZXMubW9udGhOYW1lXG4gICAgICB9LCAoMCwgX2RhdGVGbnMuZm9ybWF0KSh0aGlzLnByb3BzLm1vbnRoLCB0aGlzLnByb3BzLm1vbnRoRGlzcGxheUZvcm1hdCwgdGhpcy5wcm9wcy5kYXRlT3B0aW9ucykpIDogbnVsbCwgdGhpcy5wcm9wcy5zaG93V2Vla0RheXMgJiYgcmVuZGVyV2Vla2RheXMoc3R5bGVzLCB0aGlzLnByb3BzLmRhdGVPcHRpb25zLCB0aGlzLnByb3BzLndlZWtkYXlEaXNwbGF5Rm9ybWF0KSwgX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBzdHlsZXMuZGF5cyxcbiAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLnByb3BzLm9uTW91c2VMZWF2ZVxuICAgICAgfSwgKDAsIF9kYXRlRm5zLmVhY2hEYXlPZkludGVydmFsKSh7XG4gICAgICAgIHN0YXJ0OiBtb250aERpc3BsYXkuc3RhcnQsXG4gICAgICAgIGVuZDogbW9udGhEaXNwbGF5LmVuZFxuICAgICAgfSkubWFwKGZ1bmN0aW9uIChkYXksIGluZGV4KSB7XG4gICAgICAgIHZhciBpc1N0YXJ0T2ZNb250aCA9ICgwLCBfZGF0ZUZucy5pc1NhbWVEYXkpKGRheSwgbW9udGhEaXNwbGF5LnN0YXJ0RGF0ZU9mTW9udGgpO1xuICAgICAgICB2YXIgaXNFbmRPZk1vbnRoID0gKDAsIF9kYXRlRm5zLmlzU2FtZURheSkoZGF5LCBtb250aERpc3BsYXkuZW5kRGF0ZU9mTW9udGgpO1xuICAgICAgICB2YXIgaXNPdXRzaWRlTWluTWF4ID0gbWluRGF0ZSAmJiAoMCwgX2RhdGVGbnMuaXNCZWZvcmUpKGRheSwgbWluRGF0ZSkgfHwgbWF4RGF0ZSAmJiAoMCwgX2RhdGVGbnMuaXNBZnRlcikoZGF5LCBtYXhEYXRlKTtcbiAgICAgICAgdmFyIGlzRGlzYWJsZWRTcGVjaWZpY2FsbHkgPSBkaXNhYmxlZERhdGVzLnNvbWUoZnVuY3Rpb24gKGRpc2FibGVkRGF0ZSkge1xuICAgICAgICAgIHJldHVybiAoMCwgX2RhdGVGbnMuaXNTYW1lRGF5KShkaXNhYmxlZERhdGUsIGRheSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgaXNEaXNhYmxlZERheSA9IGRpc2FibGVkRGF5KGRheSk7XG4gICAgICAgIHJldHVybiBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoX0RheUNlbGxbXCJkZWZhdWx0XCJdLCBfZXh0ZW5kcyh7fSwgX3RoaXMucHJvcHMsIHtcbiAgICAgICAgICByYW5nZXM6IHJhbmdlcyxcbiAgICAgICAgICBkYXk6IGRheSxcbiAgICAgICAgICBwcmV2aWV3OiBzaG93UHJldmlldyA/IF90aGlzLnByb3BzLnByZXZpZXcgOiBudWxsLFxuICAgICAgICAgIGlzV2Vla2VuZDogKDAsIF9kYXRlRm5zLmlzV2Vla2VuZCkoZGF5LCBfdGhpcy5wcm9wcy5kYXRlT3B0aW9ucyksXG4gICAgICAgICAgaXNUb2RheTogKDAsIF9kYXRlRm5zLmlzU2FtZURheSkoZGF5LCBub3cpLFxuICAgICAgICAgIGlzU3RhcnRPZldlZWs6ICgwLCBfZGF0ZUZucy5pc1NhbWVEYXkpKGRheSwgKDAsIF9kYXRlRm5zLnN0YXJ0T2ZXZWVrKShkYXksIF90aGlzLnByb3BzLmRhdGVPcHRpb25zKSksXG4gICAgICAgICAgaXNFbmRPZldlZWs6ICgwLCBfZGF0ZUZucy5pc1NhbWVEYXkpKGRheSwgKDAsIF9kYXRlRm5zLmVuZE9mV2VlaykoZGF5LCBfdGhpcy5wcm9wcy5kYXRlT3B0aW9ucykpLFxuICAgICAgICAgIGlzU3RhcnRPZk1vbnRoOiBpc1N0YXJ0T2ZNb250aCxcbiAgICAgICAgICBpc0VuZE9mTW9udGg6IGlzRW5kT2ZNb250aCxcbiAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgIGRpc2FibGVkOiBpc091dHNpZGVNaW5NYXggfHwgaXNEaXNhYmxlZFNwZWNpZmljYWxseSB8fCBpc0Rpc2FibGVkRGF5LFxuICAgICAgICAgIGlzUGFzc2l2ZTogISgwLCBfZGF0ZUZucy5pc1dpdGhpbkludGVydmFsKShkYXksIHtcbiAgICAgICAgICAgIHN0YXJ0OiBtb250aERpc3BsYXkuc3RhcnREYXRlT2ZNb250aCxcbiAgICAgICAgICAgIGVuZDogbW9udGhEaXNwbGF5LmVuZERhdGVPZk1vbnRoXG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgICAgICAgb25Nb3VzZURvd246IF90aGlzLnByb3BzLm9uRHJhZ1NlbGVjdGlvblN0YXJ0LFxuICAgICAgICAgIG9uTW91c2VVcDogX3RoaXMucHJvcHMub25EcmFnU2VsZWN0aW9uRW5kLFxuICAgICAgICAgIG9uTW91c2VFbnRlcjogX3RoaXMucHJvcHMub25EcmFnU2VsZWN0aW9uTW92ZSxcbiAgICAgICAgICBkcmFnUmFuZ2U6IGRyYWcucmFuZ2UsXG4gICAgICAgICAgZHJhZzogZHJhZy5zdGF0dXNcbiAgICAgICAgfSkpO1xuICAgICAgfSkpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTW9udGg7XG59KF9yZWFjdC5QdXJlQ29tcG9uZW50KTtcblxuTW9udGguZGVmYXVsdFByb3BzID0ge307XG5Nb250aC5wcm9wVHlwZXMgPSB7XG4gIHN0eWxlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHN0eWxlczogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBtb250aDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBkcmFnOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGRhdGVPcHRpb25zOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGRpc2FibGVkRGF0ZXM6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmFycmF5LFxuICBkaXNhYmxlZERheTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uZnVuYyxcbiAgcHJldmlldzogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc2hhcGUoe1xuICAgIHN0YXJ0RGF0ZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ub2JqZWN0LFxuICAgIGVuZERhdGU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm9iamVjdFxuICB9KSxcbiAgc2hvd1ByZXZpZXc6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGRpc3BsYXlNb2RlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vbmVPZihbJ2RhdGVSYW5nZScsICdkYXRlJ10pLFxuICBtaW5EYXRlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIG1heERhdGU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgcmFuZ2VzOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5hcnJheU9mKF9EYXlDZWxsLnJhbmdlU2hhcGUpLFxuICBmb2N1c2VkUmFuZ2U6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmFycmF5T2YoX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyKSxcbiAgb25EcmFnU2VsZWN0aW9uU3RhcnQ6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG9uRHJhZ1NlbGVjdGlvbkVuZDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uZnVuYyxcbiAgb25EcmFnU2VsZWN0aW9uTW92ZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uZnVuYyxcbiAgb25Nb3VzZUxlYXZlOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5mdW5jLFxuICBtb250aERpc3BsYXlGb3JtYXQ6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgd2Vla2RheURpc3BsYXlGb3JtYXQ6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgZGF5RGlzcGxheUZvcm1hdDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBzaG93V2Vla0RheXM6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHNob3dNb250aE5hbWU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGZpeGVkSGVpZ2h0OiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5ib29sXG59O1xudmFyIF9kZWZhdWx0ID0gTW9udGg7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jcmVhdGVTdGF0aWNSYW5nZXMgPSBjcmVhdGVTdGF0aWNSYW5nZXM7XG5leHBvcnRzLmRlZmF1bHRJbnB1dFJhbmdlcyA9IGV4cG9ydHMuZGVmYXVsdFN0YXRpY1JhbmdlcyA9IHZvaWQgMDtcblxudmFyIF9kYXRlRm5zID0gcmVxdWlyZShcImRhdGUtZm5zXCIpO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGRlZmluZWRzID0ge1xuICBzdGFydE9mV2VlazogKDAsIF9kYXRlRm5zLnN0YXJ0T2ZXZWVrKShuZXcgRGF0ZSgpKSxcbiAgZW5kT2ZXZWVrOiAoMCwgX2RhdGVGbnMuZW5kT2ZXZWVrKShuZXcgRGF0ZSgpKSxcbiAgc3RhcnRPZkxhc3RXZWVrOiAoMCwgX2RhdGVGbnMuc3RhcnRPZldlZWspKCgwLCBfZGF0ZUZucy5hZGREYXlzKShuZXcgRGF0ZSgpLCAtNykpLFxuICBlbmRPZkxhc3RXZWVrOiAoMCwgX2RhdGVGbnMuZW5kT2ZXZWVrKSgoMCwgX2RhdGVGbnMuYWRkRGF5cykobmV3IERhdGUoKSwgLTcpKSxcbiAgc3RhcnRPZlRvZGF5OiAoMCwgX2RhdGVGbnMuc3RhcnRPZkRheSkobmV3IERhdGUoKSksXG4gIGVuZE9mVG9kYXk6ICgwLCBfZGF0ZUZucy5lbmRPZkRheSkobmV3IERhdGUoKSksXG4gIHN0YXJ0T2ZZZXN0ZXJkYXk6ICgwLCBfZGF0ZUZucy5zdGFydE9mRGF5KSgoMCwgX2RhdGVGbnMuYWRkRGF5cykobmV3IERhdGUoKSwgLTEpKSxcbiAgZW5kT2ZZZXN0ZXJkYXk6ICgwLCBfZGF0ZUZucy5lbmRPZkRheSkoKDAsIF9kYXRlRm5zLmFkZERheXMpKG5ldyBEYXRlKCksIC0xKSksXG4gIHN0YXJ0T2ZNb250aDogKDAsIF9kYXRlRm5zLnN0YXJ0T2ZNb250aCkobmV3IERhdGUoKSksXG4gIGVuZE9mTW9udGg6ICgwLCBfZGF0ZUZucy5lbmRPZk1vbnRoKShuZXcgRGF0ZSgpKSxcbiAgc3RhcnRPZkxhc3RNb250aDogKDAsIF9kYXRlRm5zLnN0YXJ0T2ZNb250aCkoKDAsIF9kYXRlRm5zLmFkZE1vbnRocykobmV3IERhdGUoKSwgLTEpKSxcbiAgZW5kT2ZMYXN0TW9udGg6ICgwLCBfZGF0ZUZucy5lbmRPZk1vbnRoKSgoMCwgX2RhdGVGbnMuYWRkTW9udGhzKShuZXcgRGF0ZSgpLCAtMSkpXG59O1xudmFyIHN0YXRpY1JhbmdlSGFuZGxlciA9IHtcbiAgcmFuZ2U6IHt9LFxuICBpc1NlbGVjdGVkOiBmdW5jdGlvbiBpc1NlbGVjdGVkKHJhbmdlKSB7XG4gICAgdmFyIGRlZmluZWRSYW5nZSA9IHRoaXMucmFuZ2UoKTtcbiAgICByZXR1cm4gKDAsIF9kYXRlRm5zLmlzU2FtZURheSkocmFuZ2Uuc3RhcnREYXRlLCBkZWZpbmVkUmFuZ2Uuc3RhcnREYXRlKSAmJiAoMCwgX2RhdGVGbnMuaXNTYW1lRGF5KShyYW5nZS5lbmREYXRlLCBkZWZpbmVkUmFuZ2UuZW5kRGF0ZSk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0YXRpY1JhbmdlcyhyYW5nZXMpIHtcbiAgcmV0dXJuIHJhbmdlcy5tYXAoZnVuY3Rpb24gKHJhbmdlKSB7XG4gICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIHN0YXRpY1JhbmdlSGFuZGxlciwge30sIHJhbmdlKTtcbiAgfSk7XG59XG5cbnZhciBkZWZhdWx0U3RhdGljUmFuZ2VzID0gY3JlYXRlU3RhdGljUmFuZ2VzKFt7XG4gIGxhYmVsOiAnVG9kYXknLFxuICByYW5nZTogZnVuY3Rpb24gcmFuZ2UoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0RGF0ZTogZGVmaW5lZHMuc3RhcnRPZlRvZGF5LFxuICAgICAgZW5kRGF0ZTogZGVmaW5lZHMuZW5kT2ZUb2RheVxuICAgIH07XG4gIH1cbn0sIHtcbiAgbGFiZWw6ICdZZXN0ZXJkYXknLFxuICByYW5nZTogZnVuY3Rpb24gcmFuZ2UoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0RGF0ZTogZGVmaW5lZHMuc3RhcnRPZlllc3RlcmRheSxcbiAgICAgIGVuZERhdGU6IGRlZmluZWRzLmVuZE9mWWVzdGVyZGF5XG4gICAgfTtcbiAgfVxufSwge1xuICBsYWJlbDogJ1RoaXMgV2VlaycsXG4gIHJhbmdlOiBmdW5jdGlvbiByYW5nZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnREYXRlOiBkZWZpbmVkcy5zdGFydE9mV2VlayxcbiAgICAgIGVuZERhdGU6IGRlZmluZWRzLmVuZE9mV2Vla1xuICAgIH07XG4gIH1cbn0sIHtcbiAgbGFiZWw6ICdMYXN0IFdlZWsnLFxuICByYW5nZTogZnVuY3Rpb24gcmFuZ2UoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0RGF0ZTogZGVmaW5lZHMuc3RhcnRPZkxhc3RXZWVrLFxuICAgICAgZW5kRGF0ZTogZGVmaW5lZHMuZW5kT2ZMYXN0V2Vla1xuICAgIH07XG4gIH1cbn0sIHtcbiAgbGFiZWw6ICdUaGlzIE1vbnRoJyxcbiAgcmFuZ2U6IGZ1bmN0aW9uIHJhbmdlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGFydERhdGU6IGRlZmluZWRzLnN0YXJ0T2ZNb250aCxcbiAgICAgIGVuZERhdGU6IGRlZmluZWRzLmVuZE9mTW9udGhcbiAgICB9O1xuICB9XG59LCB7XG4gIGxhYmVsOiAnTGFzdCBNb250aCcsXG4gIHJhbmdlOiBmdW5jdGlvbiByYW5nZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnREYXRlOiBkZWZpbmVkcy5zdGFydE9mTGFzdE1vbnRoLFxuICAgICAgZW5kRGF0ZTogZGVmaW5lZHMuZW5kT2ZMYXN0TW9udGhcbiAgICB9O1xuICB9XG59XSk7XG5leHBvcnRzLmRlZmF1bHRTdGF0aWNSYW5nZXMgPSBkZWZhdWx0U3RhdGljUmFuZ2VzO1xudmFyIGRlZmF1bHRJbnB1dFJhbmdlcyA9IFt7XG4gIGxhYmVsOiAnZGF5cyB1cCB0byB0b2RheScsXG4gIHJhbmdlOiBmdW5jdGlvbiByYW5nZSh2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGFydERhdGU6ICgwLCBfZGF0ZUZucy5hZGREYXlzKShkZWZpbmVkcy5zdGFydE9mVG9kYXksIChNYXRoLm1heChOdW1iZXIodmFsdWUpLCAxKSAtIDEpICogLTEpLFxuICAgICAgZW5kRGF0ZTogZGVmaW5lZHMuZW5kT2ZUb2RheVxuICAgIH07XG4gIH0sXG4gIGdldEN1cnJlbnRWYWx1ZTogZnVuY3Rpb24gZ2V0Q3VycmVudFZhbHVlKHJhbmdlKSB7XG4gICAgaWYgKCEoMCwgX2RhdGVGbnMuaXNTYW1lRGF5KShyYW5nZS5lbmREYXRlLCBkZWZpbmVkcy5lbmRPZlRvZGF5KSkgcmV0dXJuICctJztcbiAgICBpZiAoIXJhbmdlLnN0YXJ0RGF0ZSkgcmV0dXJuICfiiJ4nO1xuICAgIHJldHVybiAoMCwgX2RhdGVGbnMuZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKShkZWZpbmVkcy5lbmRPZlRvZGF5LCByYW5nZS5zdGFydERhdGUpICsgMTtcbiAgfVxufSwge1xuICBsYWJlbDogJ2RheXMgc3RhcnRpbmcgdG9kYXknLFxuICByYW5nZTogZnVuY3Rpb24gcmFuZ2UodmFsdWUpIHtcbiAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIHJldHVybiB7XG4gICAgICBzdGFydERhdGU6IHRvZGF5LFxuICAgICAgZW5kRGF0ZTogKDAsIF9kYXRlRm5zLmFkZERheXMpKHRvZGF5LCBNYXRoLm1heChOdW1iZXIodmFsdWUpLCAxKSAtIDEpXG4gICAgfTtcbiAgfSxcbiAgZ2V0Q3VycmVudFZhbHVlOiBmdW5jdGlvbiBnZXRDdXJyZW50VmFsdWUocmFuZ2UpIHtcbiAgICBpZiAoISgwLCBfZGF0ZUZucy5pc1NhbWVEYXkpKHJhbmdlLnN0YXJ0RGF0ZSwgZGVmaW5lZHMuc3RhcnRPZlRvZGF5KSkgcmV0dXJuICctJztcbiAgICBpZiAoIXJhbmdlLmVuZERhdGUpIHJldHVybiAn4oieJztcbiAgICByZXR1cm4gKDAsIF9kYXRlRm5zLmRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cykocmFuZ2UuZW5kRGF0ZSwgZGVmaW5lZHMuc3RhcnRPZlRvZGF5KSArIDE7XG4gIH1cbn1dO1xuZXhwb3J0cy5kZWZhdWx0SW5wdXRSYW5nZXMgPSBkZWZhdWx0SW5wdXRSYW5nZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJEYXRlUmFuZ2VcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX0RhdGVSYW5nZVtcImRlZmF1bHRcIl07XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ2FsZW5kYXJcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX0NhbGVuZGFyW1wiZGVmYXVsdFwiXTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJEYXRlUmFuZ2VQaWNrZXJcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX0RhdGVSYW5nZVBpY2tlcltcImRlZmF1bHRcIl07XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRGVmaW5lZFJhbmdlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9EZWZpbmVkUmFuZ2VbXCJkZWZhdWx0XCJdO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlZmF1bHRJbnB1dFJhbmdlc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfZGVmYXVsdFJhbmdlcy5kZWZhdWx0SW5wdXRSYW5nZXM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVmYXVsdFN0YXRpY1Jhbmdlc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfZGVmYXVsdFJhbmdlcy5kZWZhdWx0U3RhdGljUmFuZ2VzO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImNyZWF0ZVN0YXRpY1Jhbmdlc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfZGVmYXVsdFJhbmdlcy5jcmVhdGVTdGF0aWNSYW5nZXM7XG4gIH1cbn0pO1xuXG52YXIgX0RhdGVSYW5nZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy9EYXRlUmFuZ2VcIikpO1xuXG52YXIgX0NhbGVuZGFyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL0NhbGVuZGFyXCIpKTtcblxudmFyIF9EYXRlUmFuZ2VQaWNrZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvRGF0ZVJhbmdlUGlja2VyXCIpKTtcblxudmFyIF9EZWZpbmVkUmFuZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvRGVmaW5lZFJhbmdlXCIpKTtcblxudmFyIF9kZWZhdWx0UmFuZ2VzID0gcmVxdWlyZShcIi4vZGVmYXVsdFJhbmdlc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBfZGVmYXVsdCA9IHtcbiAgZGF0ZVJhbmdlV3JhcHBlcjogJ3JkckRhdGVSYW5nZVdyYXBwZXInLFxuICBjYWxlbmRhcldyYXBwZXI6ICdyZHJDYWxlbmRhcldyYXBwZXInLFxuICBkYXRlRGlzcGxheTogJ3JkckRhdGVEaXNwbGF5JyxcbiAgZGF0ZURpc3BsYXlJdGVtOiAncmRyRGF0ZURpc3BsYXlJdGVtJyxcbiAgZGF0ZURpc3BsYXlJdGVtQWN0aXZlOiAncmRyRGF0ZURpc3BsYXlJdGVtQWN0aXZlJyxcbiAgbW9udGhBbmRZZWFyV3JhcHBlcjogJ3Jkck1vbnRoQW5kWWVhcldyYXBwZXInLFxuICBtb250aEFuZFllYXJQaWNrZXJzOiAncmRyTW9udGhBbmRZZWFyUGlja2VycycsXG4gIG5leHRQcmV2QnV0dG9uOiAncmRyTmV4dFByZXZCdXR0b24nLFxuICBtb250aDogJ3Jkck1vbnRoJyxcbiAgd2Vla0RheXM6ICdyZHJXZWVrRGF5cycsXG4gIHdlZWtEYXk6ICdyZHJXZWVrRGF5JyxcbiAgZGF5czogJ3JkckRheXMnLFxuICBkYXk6ICdyZHJEYXknLFxuICBkYXlOdW1iZXI6ICdyZHJEYXlOdW1iZXInLFxuICBkYXlQYXNzaXZlOiAncmRyRGF5UGFzc2l2ZScsXG4gIGRheVRvZGF5OiAncmRyRGF5VG9kYXknLFxuICBkYXlTdGFydE9mV2VlazogJ3JkckRheVN0YXJ0T2ZXZWVrJyxcbiAgZGF5RW5kT2ZXZWVrOiAncmRyRGF5RW5kT2ZXZWVrJyxcbiAgZGF5U2VsZWN0ZWQ6ICdyZHJEYXlTZWxlY3RlZCcsXG4gIGRheURpc2FibGVkOiAncmRyRGF5RGlzYWJsZWQnLFxuICBkYXlTdGFydE9mTW9udGg6ICdyZHJEYXlTdGFydE9mTW9udGgnLFxuICBkYXlFbmRPZk1vbnRoOiAncmRyRGF5RW5kT2ZNb250aCcsXG4gIGRheVdlZWtlbmQ6ICdyZHJEYXlXZWVrZW5kJyxcbiAgZGF5U3RhcnRQcmV2aWV3OiAncmRyRGF5U3RhcnRQcmV2aWV3JyxcbiAgZGF5SW5QcmV2aWV3OiAncmRyRGF5SW5QcmV2aWV3JyxcbiAgZGF5RW5kUHJldmlldzogJ3JkckRheUVuZFByZXZpZXcnLFxuICBkYXlIb3ZlcmVkOiAncmRyRGF5SG92ZXJlZCcsXG4gIGRheUFjdGl2ZTogJ3JkckRheUFjdGl2ZScsXG4gIGluUmFuZ2U6ICdyZHJJblJhbmdlJyxcbiAgZW5kRWRnZTogJ3JkckVuZEVkZ2UnLFxuICBzdGFydEVkZ2U6ICdyZHJTdGFydEVkZ2UnLFxuICBwcmV2QnV0dG9uOiAncmRyUHByZXZCdXR0b24nLFxuICBuZXh0QnV0dG9uOiAncmRyTmV4dEJ1dHRvbicsXG4gIHNlbGVjdGVkOiAncmRyU2VsZWN0ZWQnLFxuICBtb250aHM6ICdyZHJNb250aHMnLFxuICBtb250aFBpY2tlcjogJ3Jkck1vbnRoUGlja2VyJyxcbiAgeWVhclBpY2tlcjogJ3JkclllYXJQaWNrZXInLFxuICBkYXRlRGlzcGxheVdyYXBwZXI6ICdyZHJEYXRlRGlzcGxheVdyYXBwZXInLFxuICBkZWZpbmVkUmFuZ2VzV3JhcHBlcjogJ3JkckRlZmluZWRSYW5nZXNXcmFwcGVyJyxcbiAgc3RhdGljUmFuZ2VzOiAncmRyU3RhdGljUmFuZ2VzJyxcbiAgc3RhdGljUmFuZ2U6ICdyZHJTdGF0aWNSYW5nZScsXG4gIGlucHV0UmFuZ2VzOiAncmRySW5wdXRSYW5nZXMnLFxuICBpbnB1dFJhbmdlOiAncmRySW5wdXRSYW5nZScsXG4gIGlucHV0UmFuZ2VJbnB1dDogJ3JkcklucHV0UmFuZ2VJbnB1dCcsXG4gIGRhdGVSYW5nZVBpY2tlcldyYXBwZXI6ICdyZHJEYXRlUmFuZ2VQaWNrZXJXcmFwcGVyJyxcbiAgc3RhdGljUmFuZ2VMYWJlbDogJ3JkclN0YXRpY1JhbmdlTGFiZWwnLFxuICBzdGF0aWNSYW5nZVNlbGVjdGVkOiAncmRyU3RhdGljUmFuZ2VTZWxlY3RlZCcsXG4gIG1vbnRoTmFtZTogJ3Jkck1vbnRoTmFtZScsXG4gIGluZmluaXRlTW9udGhzOiAncmRySW5maW5pdGVNb250aHMnLFxuICBtb250aHNWZXJ0aWNhbDogJ3Jkck1vbnRoc1ZlcnRpY2FsJyxcbiAgbW9udGhzSG9yaXpvbnRhbDogJ3Jkck1vbnRoc0hvcml6b250YWwnXG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2FsY0ZvY3VzRGF0ZSA9IGNhbGNGb2N1c0RhdGU7XG5leHBvcnRzLmZpbmROZXh0UmFuZ2VJbmRleCA9IGZpbmROZXh0UmFuZ2VJbmRleDtcbmV4cG9ydHMuZ2V0TW9udGhEaXNwbGF5UmFuZ2UgPSBnZXRNb250aERpc3BsYXlSYW5nZTtcbmV4cG9ydHMuZ2VuZXJhdGVTdHlsZXMgPSBnZW5lcmF0ZVN0eWxlcztcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfZGF0ZUZucyA9IHJlcXVpcmUoXCJkYXRlLWZuc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGNhbGNGb2N1c0RhdGUoY3VycmVudEZvY3VzZWREYXRlLCBwcm9wcykge1xuICB2YXIgc2hvd25EYXRlID0gcHJvcHMuc2hvd25EYXRlLFxuICAgICAgZGF0ZSA9IHByb3BzLmRhdGUsXG4gICAgICBtb250aHMgPSBwcm9wcy5tb250aHMsXG4gICAgICByYW5nZXMgPSBwcm9wcy5yYW5nZXMsXG4gICAgICBmb2N1c2VkUmFuZ2UgPSBwcm9wcy5mb2N1c2VkUmFuZ2UsXG4gICAgICBkaXNwbGF5TW9kZSA9IHByb3BzLmRpc3BsYXlNb2RlOyAvLyBmaW5kIHByaW1hcnkgZGF0ZSBhY2NvcmRpbmcgdGhlIHByb3BzXG5cbiAgdmFyIHRhcmdldEludGVydmFsO1xuXG4gIGlmIChkaXNwbGF5TW9kZSA9PT0gJ2RhdGVSYW5nZScpIHtcbiAgICB2YXIgcmFuZ2UgPSByYW5nZXNbZm9jdXNlZFJhbmdlWzBdXSB8fCB7fTtcbiAgICB0YXJnZXRJbnRlcnZhbCA9IHtcbiAgICAgIHN0YXJ0OiByYW5nZS5zdGFydERhdGUsXG4gICAgICBlbmQ6IHJhbmdlLmVuZERhdGVcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHRhcmdldEludGVydmFsID0ge1xuICAgICAgc3RhcnQ6IGRhdGUsXG4gICAgICBlbmQ6IGRhdGVcbiAgICB9O1xuICB9XG5cbiAgdGFyZ2V0SW50ZXJ2YWwuc3RhcnQgPSAoMCwgX2RhdGVGbnMuc3RhcnRPZk1vbnRoKSh0YXJnZXRJbnRlcnZhbC5zdGFydCB8fCBuZXcgRGF0ZSgpKTtcbiAgdGFyZ2V0SW50ZXJ2YWwuZW5kID0gKDAsIF9kYXRlRm5zLmVuZE9mTW9udGgpKHRhcmdldEludGVydmFsLmVuZCB8fCB0YXJnZXRJbnRlcnZhbC5zdGFydCk7XG4gIHZhciB0YXJnZXREYXRlID0gdGFyZ2V0SW50ZXJ2YWwuc3RhcnQgfHwgdGFyZ2V0SW50ZXJ2YWwuZW5kIHx8IHNob3duRGF0ZSB8fCBuZXcgRGF0ZSgpOyAvLyBpbml0aWFsIGZvY3VzXG5cbiAgaWYgKCFjdXJyZW50Rm9jdXNlZERhdGUpIHJldHVybiBzaG93bkRhdGUgfHwgdGFyZ2V0RGF0ZTsgLy8gLy8ganVzdCByZXR1cm4gdGFyZ2V0RGF0ZSBmb3IgbmF0aXZlIHNjcm9sbGVkIGNhbGVuZGFyc1xuICAvLyBpZiAocHJvcHMuc2Nyb2xsLmVuYWJsZWQpIHJldHVybiB0YXJnZXREYXRlO1xuXG4gIGlmICgoMCwgX2RhdGVGbnMuZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMpKHRhcmdldEludGVydmFsLnN0YXJ0LCB0YXJnZXRJbnRlcnZhbC5lbmQpID4gbW9udGhzKSB7XG4gICAgLy8gZG9uJ3QgY2hhbmdlIGZvY3VzZWQgaWYgbmV3IHNlbGVjdGlvbiBpbiB2aWV3IGFyZWFcbiAgICByZXR1cm4gY3VycmVudEZvY3VzZWREYXRlO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldERhdGU7XG59XG5cbmZ1bmN0aW9uIGZpbmROZXh0UmFuZ2VJbmRleChyYW5nZXMpIHtcbiAgdmFyIGN1cnJlbnRSYW5nZUluZGV4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAtMTtcbiAgdmFyIG5leHRJbmRleCA9IHJhbmdlcy5maW5kSW5kZXgoZnVuY3Rpb24gKHJhbmdlLCBpKSB7XG4gICAgcmV0dXJuIGkgPiBjdXJyZW50UmFuZ2VJbmRleCAmJiByYW5nZS5hdXRvRm9jdXMgIT09IGZhbHNlICYmICFyYW5nZS5kaXNhYmxlZDtcbiAgfSk7XG4gIGlmIChuZXh0SW5kZXggIT09IC0xKSByZXR1cm4gbmV4dEluZGV4O1xuICByZXR1cm4gcmFuZ2VzLmZpbmRJbmRleChmdW5jdGlvbiAocmFuZ2UpIHtcbiAgICByZXR1cm4gcmFuZ2UuYXV0b0ZvY3VzICE9PSBmYWxzZSAmJiAhcmFuZ2UuZGlzYWJsZWQ7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRNb250aERpc3BsYXlSYW5nZShkYXRlLCBkYXRlT3B0aW9ucywgZml4ZWRIZWlnaHQpIHtcbiAgdmFyIHN0YXJ0RGF0ZU9mTW9udGggPSAoMCwgX2RhdGVGbnMuc3RhcnRPZk1vbnRoKShkYXRlLCBkYXRlT3B0aW9ucyk7XG4gIHZhciBlbmREYXRlT2ZNb250aCA9ICgwLCBfZGF0ZUZucy5lbmRPZk1vbnRoKShkYXRlLCBkYXRlT3B0aW9ucyk7XG4gIHZhciBzdGFydERhdGVPZkNhbGVuZGFyID0gKDAsIF9kYXRlRm5zLnN0YXJ0T2ZXZWVrKShzdGFydERhdGVPZk1vbnRoLCBkYXRlT3B0aW9ucyk7XG4gIHZhciBlbmREYXRlT2ZDYWxlbmRhciA9ICgwLCBfZGF0ZUZucy5lbmRPZldlZWspKGVuZERhdGVPZk1vbnRoLCBkYXRlT3B0aW9ucyk7XG5cbiAgaWYgKGZpeGVkSGVpZ2h0ICYmICgwLCBfZGF0ZUZucy5kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMpKGVuZERhdGVPZkNhbGVuZGFyLCBzdGFydERhdGVPZkNhbGVuZGFyKSA8PSAzNCkge1xuICAgIGVuZERhdGVPZkNhbGVuZGFyID0gKDAsIF9kYXRlRm5zLmFkZERheXMpKGVuZERhdGVPZkNhbGVuZGFyLCA3KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3RhcnQ6IHN0YXJ0RGF0ZU9mQ2FsZW5kYXIsXG4gICAgZW5kOiBlbmREYXRlT2ZDYWxlbmRhcixcbiAgICBzdGFydERhdGVPZk1vbnRoOiBzdGFydERhdGVPZk1vbnRoLFxuICAgIGVuZERhdGVPZk1vbnRoOiBlbmREYXRlT2ZNb250aFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVN0eWxlcyhzb3VyY2VzKSB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHJldHVybiB7fTtcbiAgdmFyIGdlbmVyYXRlZFN0eWxlcyA9IHNvdXJjZXMuZmlsdGVyKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICByZXR1cm4gQm9vbGVhbihzb3VyY2UpO1xuICB9KS5yZWR1Y2UoZnVuY3Rpb24gKHN0eWxlcywgc3R5bGVTb3VyY2UpIHtcbiAgICBPYmplY3Qua2V5cyhzdHlsZVNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBzdHlsZXNba2V5XSA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKHN0eWxlc1trZXldLCBzdHlsZVNvdXJjZVtrZXldKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc3R5bGVzO1xuICB9LCB7fSk7XG4gIHJldHVybiBnZW5lcmF0ZWRTdHlsZXM7XG59IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFwicmVhY3QtbGlzdFwiLCBbXCJwcm9wLXR5cGVzXCIsIFwicmVhY3RcIl0sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShyZXF1aXJlKFwicHJvcC10eXBlc1wiKSwgcmVxdWlyZShcInJlYWN0XCIpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkoZ2xvYmFsLlByb3BUeXBlcywgZ2xvYmFsLlJlYWN0KTtcbiAgICBnbG9iYWwuUmVhY3RMaXN0ID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsVGhpcyA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uIChfcHJvcFR5cGVzLCBfcmVhY3QpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG4gIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9yZWFjdCk7XG5cbiAgdmFyIF9jbGFzcywgX3RlbXA7XG5cbiAgZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4gIGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuICBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG4gIGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbiAgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuICBmdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG4gIGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuICBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuICBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbiAgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG4gIGZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbiAgZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuICB2YXIgQ0xJRU5UX1NJWkVfS0VZUyA9IHtcbiAgICB4OiAnY2xpZW50V2lkdGgnLFxuICAgIHk6ICdjbGllbnRIZWlnaHQnXG4gIH07XG4gIHZhciBDTElFTlRfU1RBUlRfS0VZUyA9IHtcbiAgICB4OiAnY2xpZW50VG9wJyxcbiAgICB5OiAnY2xpZW50TGVmdCdcbiAgfTtcbiAgdmFyIElOTkVSX1NJWkVfS0VZUyA9IHtcbiAgICB4OiAnaW5uZXJXaWR0aCcsXG4gICAgeTogJ2lubmVySGVpZ2h0J1xuICB9O1xuICB2YXIgT0ZGU0VUX1NJWkVfS0VZUyA9IHtcbiAgICB4OiAnb2Zmc2V0V2lkdGgnLFxuICAgIHk6ICdvZmZzZXRIZWlnaHQnXG4gIH07XG4gIHZhciBPRkZTRVRfU1RBUlRfS0VZUyA9IHtcbiAgICB4OiAnb2Zmc2V0TGVmdCcsXG4gICAgeTogJ29mZnNldFRvcCdcbiAgfTtcbiAgdmFyIE9WRVJGTE9XX0tFWVMgPSB7XG4gICAgeDogJ292ZXJmbG93WCcsXG4gICAgeTogJ292ZXJmbG93WSdcbiAgfTtcbiAgdmFyIFNDUk9MTF9TSVpFX0tFWVMgPSB7XG4gICAgeDogJ3Njcm9sbFdpZHRoJyxcbiAgICB5OiAnc2Nyb2xsSGVpZ2h0J1xuICB9O1xuICB2YXIgU0NST0xMX1NUQVJUX0tFWVMgPSB7XG4gICAgeDogJ3Njcm9sbExlZnQnLFxuICAgIHk6ICdzY3JvbGxUb3AnXG4gIH07XG4gIHZhciBTSVpFX0tFWVMgPSB7XG4gICAgeDogJ3dpZHRoJyxcbiAgICB5OiAnaGVpZ2h0J1xuICB9O1xuXG4gIHZhciBOT09QID0gZnVuY3Rpb24gTk9PUCgpIHt9OyAvLyBJZiBhIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHRoZSBgb3B0aW9uc2AgYXJndW1lbnQgdG9cbiAgLy8gYWRkL3JlbW92ZUV2ZW50TGlzdGVuZXIsIHdlIG5lZWQgdG8gY2hlY2ssIG90aGVyd2lzZSB3ZSB3aWxsXG4gIC8vIGFjY2lkZW50YWxseSBzZXQgYGNhcHR1cmVgIHdpdGggYSB0cnV0aHkgdmFsdWUuXG5cblxuICB2YXIgUEFTU0lWRSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgaGFzU3VwcG9ydCA9IGZhbHNlO1xuXG4gICAgdHJ5IHtcbiAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBOT09QLCB7XG4gICAgICAgIGdldCBwYXNzaXZlKCkge1xuICAgICAgICAgIGhhc1N1cHBvcnQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7Ly8gbm9vcFxuICAgIH1cblxuICAgIHJldHVybiBoYXNTdXBwb3J0O1xuICB9KCkgPyB7XG4gICAgcGFzc2l2ZTogdHJ1ZVxuICB9IDogZmFsc2U7XG4gIHZhciBVTlNUQUJMRV9NRVNTQUdFID0gJ1JlYWN0TGlzdCBmYWlsZWQgdG8gcmVhY2ggYSBzdGFibGUgc3RhdGUuJztcbiAgdmFyIE1BWF9TWU5DX1VQREFURVMgPSA0MDtcblxuICB2YXIgaXNFcXVhbFN1YnNldCA9IGZ1bmN0aW9uIGlzRXF1YWxTdWJzZXQoYSwgYikge1xuICAgIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgICBpZiAoYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdFNjcm9sbFBhcmVudEdldHRlciA9IGZ1bmN0aW9uIGRlZmF1bHRTY3JvbGxQYXJlbnRHZXR0ZXIoY29tcG9uZW50KSB7XG4gICAgdmFyIGF4aXMgPSBjb21wb25lbnQucHJvcHMuYXhpcztcbiAgICB2YXIgZWwgPSBjb21wb25lbnQuZ2V0RWwoKTtcbiAgICB2YXIgb3ZlcmZsb3dLZXkgPSBPVkVSRkxPV19LRVlTW2F4aXNdO1xuXG4gICAgd2hpbGUgKGVsID0gZWwucGFyZW50RWxlbWVudCkge1xuICAgICAgc3dpdGNoICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbb3ZlcmZsb3dLZXldKSB7XG4gICAgICAgIGNhc2UgJ2F1dG8nOlxuICAgICAgICBjYXNlICdzY3JvbGwnOlxuICAgICAgICBjYXNlICdvdmVybGF5JzpcbiAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfTtcblxuICB2YXIgZGVmYXVsdFNjcm9sbFBhcmVudFZpZXdwb3J0U2l6ZUdldHRlciA9IGZ1bmN0aW9uIGRlZmF1bHRTY3JvbGxQYXJlbnRWaWV3cG9ydFNpemVHZXR0ZXIoY29tcG9uZW50KSB7XG4gICAgdmFyIGF4aXMgPSBjb21wb25lbnQucHJvcHMuYXhpcztcbiAgICB2YXIgc2Nyb2xsUGFyZW50ID0gY29tcG9uZW50LnNjcm9sbFBhcmVudDtcbiAgICByZXR1cm4gc2Nyb2xsUGFyZW50ID09PSB3aW5kb3cgPyB3aW5kb3dbSU5ORVJfU0laRV9LRVlTW2F4aXNdXSA6IHNjcm9sbFBhcmVudFtDTElFTlRfU0laRV9LRVlTW2F4aXNdXTtcbiAgfTtcblxuICB2YXIgY29uc3RyYWluID0gZnVuY3Rpb24gY29uc3RyYWluKHByb3BzLCBzdGF0ZSkge1xuICAgIHZhciBsZW5ndGggPSBwcm9wcy5sZW5ndGgsXG4gICAgICAgIG1pblNpemUgPSBwcm9wcy5taW5TaXplLFxuICAgICAgICB0eXBlID0gcHJvcHMudHlwZTtcbiAgICB2YXIgZnJvbSA9IHN0YXRlLmZyb20sXG4gICAgICAgIHNpemUgPSBzdGF0ZS5zaXplLFxuICAgICAgICBpdGVtc1BlclJvdyA9IHN0YXRlLml0ZW1zUGVyUm93O1xuICAgIHNpemUgPSBNYXRoLm1heChzaXplLCBtaW5TaXplKTtcbiAgICB2YXIgbW9kID0gc2l6ZSAlIGl0ZW1zUGVyUm93O1xuICAgIGlmIChtb2QpIHNpemUgKz0gaXRlbXNQZXJSb3cgLSBtb2Q7XG4gICAgaWYgKHNpemUgPiBsZW5ndGgpIHNpemUgPSBsZW5ndGg7XG4gICAgZnJvbSA9IHR5cGUgPT09ICdzaW1wbGUnIHx8ICFmcm9tID8gMCA6IE1hdGgubWF4KE1hdGgubWluKGZyb20sIGxlbmd0aCAtIHNpemUpLCAwKTtcblxuICAgIGlmIChtb2QgPSBmcm9tICUgaXRlbXNQZXJSb3cpIHtcbiAgICAgIGZyb20gLT0gbW9kO1xuICAgICAgc2l6ZSArPSBtb2Q7XG4gICAgfVxuXG4gICAgaWYgKGZyb20gPT09IHN0YXRlLmZyb20gJiYgc2l6ZSA9PSBzdGF0ZS5zaXplKSByZXR1cm4gc3RhdGU7XG4gICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc3RhdGUpLCB7fSwge1xuICAgICAgZnJvbTogZnJvbSxcbiAgICAgIHNpemU6IHNpemVcbiAgICB9KTtcbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IChfdGVtcCA9IF9jbGFzcyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhSZWFjdExpc3QsIF9Db21wb25lbnQpO1xuXG4gICAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihSZWFjdExpc3QpO1xuXG4gICAgX2NyZWF0ZUNsYXNzKFJlYWN0TGlzdCwgbnVsbCwgW3tcbiAgICAgIGtleTogXCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IGNvbnN0cmFpbihwcm9wcywgc3RhdGUpO1xuICAgICAgICByZXR1cm4gbmV3U3RhdGUgPT09IHN0YXRlID8gbnVsbCA6IG5ld1N0YXRlO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIGZ1bmN0aW9uIFJlYWN0TGlzdChwcm9wcykge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVhY3RMaXN0KTtcblxuICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgICBfdGhpcy5zdGF0ZSA9IGNvbnN0cmFpbihwcm9wcywge1xuICAgICAgICBpdGVtc1BlclJvdzogMSxcbiAgICAgICAgZnJvbTogcHJvcHMuaW5pdGlhbEluZGV4LFxuICAgICAgICBzaXplOiAwXG4gICAgICB9KTtcbiAgICAgIF90aGlzLmNhY2hlID0ge307XG4gICAgICBfdGhpcy5jYWNoZWRTY3JvbGxQb3NpdGlvbiA9IG51bGw7XG4gICAgICBfdGhpcy5wcmV2UHJldlN0YXRlID0ge307XG4gICAgICBfdGhpcy51bnN0YWJsZSA9IGZhbHNlO1xuICAgICAgX3RoaXMudXBkYXRlQ291bnRlciA9IDA7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFJlYWN0TGlzdCwgW3tcbiAgICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUZyYW1lQW5kQ2xlYXJDYWNoZSA9IHRoaXMudXBkYXRlRnJhbWVBbmRDbGVhckNhY2hlLmJpbmQodGhpcyk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZUZyYW1lQW5kQ2xlYXJDYWNoZSk7XG4gICAgICAgIHRoaXMudXBkYXRlRnJhbWUodGhpcy5zY3JvbGxUby5iaW5kKHRoaXMsIHRoaXMucHJvcHMuaW5pdGlhbEluZGV4KSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgLy8gVmlld3BvcnQgc2Nyb2xsIGlzIG5vIGxvbmdlciB1c2VmdWwgaWYgYXhpcyBjaGFuZ2VzXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmF4aXMgIT09IHByZXZQcm9wcy5heGlzKSB0aGlzLmNsZWFyU2l6ZUNhY2hlKCk7IC8vIElmIHRoZSBsaXN0IGhhcyByZWFjaGVkIGFuIHVuc3RhYmxlIHN0YXRlLCBwcmV2ZW50IGFuIGluZmluaXRlIGxvb3AuXG5cbiAgICAgICAgaWYgKHRoaXMudW5zdGFibGUpIHJldHVybjtcblxuICAgICAgICBpZiAoKyt0aGlzLnVwZGF0ZUNvdW50ZXIgPiBNQVhfU1lOQ19VUERBVEVTKSB7XG4gICAgICAgICAgdGhpcy51bnN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoVU5TVEFCTEVfTUVTU0FHRSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMudXBkYXRlQ291bnRlclRpbWVvdXRJZCkge1xuICAgICAgICAgIHRoaXMudXBkYXRlQ291bnRlclRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMyLnVwZGF0ZUNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgZGVsZXRlIF90aGlzMi51cGRhdGVDb3VudGVyVGltZW91dElkO1xuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVGcmFtZSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJtYXliZVNldFN0YXRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbWF5YmVTZXRTdGF0ZShiLCBjYikge1xuICAgICAgICBpZiAoaXNFcXVhbFN1YnNldCh0aGlzLnN0YXRlLCBiKSkgcmV0dXJuIGNiKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoYiwgY2IpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVGcmFtZUFuZENsZWFyQ2FjaGUpO1xuICAgICAgICB0aGlzLnNjcm9sbFBhcmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnVwZGF0ZUZyYW1lQW5kQ2xlYXJDYWNoZSwgUEFTU0lWRSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsUGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBOT09QLCBQQVNTSVZFKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0T2Zmc2V0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0T2Zmc2V0KGVsKSB7XG4gICAgICAgIHZhciBheGlzID0gdGhpcy5wcm9wcy5heGlzO1xuICAgICAgICB2YXIgb2Zmc2V0ID0gZWxbQ0xJRU5UX1NUQVJUX0tFWVNbYXhpc11dIHx8IDA7XG4gICAgICAgIHZhciBvZmZzZXRLZXkgPSBPRkZTRVRfU1RBUlRfS0VZU1theGlzXTtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgb2Zmc2V0ICs9IGVsW29mZnNldEtleV0gfHwgMDtcbiAgICAgICAgfSB3aGlsZSAoZWwgPSBlbC5vZmZzZXRQYXJlbnQpO1xuXG4gICAgICAgIHJldHVybiBvZmZzZXQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImdldEVsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsIHx8IHRoaXMuaXRlbXM7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImdldFNjcm9sbFBvc2l0aW9uXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2Nyb2xsUG9zaXRpb24oKSB7XG4gICAgICAgIC8vIENhY2hlIHNjcm9sbCBwb3NpdGlvbiBhcyB0aGlzIGNhdXNlcyBhIGZvcmNlZCBzeW5jaHJvbm91cyBsYXlvdXQuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jYWNoZWRTY3JvbGxQb3NpdGlvbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWRTY3JvbGxQb3NpdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzY3JvbGxQYXJlbnQgPSB0aGlzLnNjcm9sbFBhcmVudDtcbiAgICAgICAgdmFyIGF4aXMgPSB0aGlzLnByb3BzLmF4aXM7XG4gICAgICAgIHZhciBzY3JvbGxLZXkgPSBTQ1JPTExfU1RBUlRfS0VZU1theGlzXTtcbiAgICAgICAgdmFyIGFjdHVhbCA9IHNjcm9sbFBhcmVudCA9PT0gd2luZG93ID8gLy8gRmlyZWZveCBhbHdheXMgcmV0dXJucyBkb2N1bWVudC5ib2R5W3Njcm9sbEtleV0gYXMgMCBhbmQgQ2hyb21lL1NhZmFyaVxuICAgICAgICAvLyBhbHdheXMgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtzY3JvbGxLZXldIGFzIDAsIHNvIHRha2VcbiAgICAgICAgLy8gd2hpY2hldmVyIGhhcyBhIHZhbHVlLlxuICAgICAgICBkb2N1bWVudC5ib2R5W3Njcm9sbEtleV0gfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W3Njcm9sbEtleV0gOiBzY3JvbGxQYXJlbnRbc2Nyb2xsS2V5XTtcbiAgICAgICAgdmFyIG1heCA9IHRoaXMuZ2V0U2Nyb2xsU2l6ZSgpIC0gdGhpcy5wcm9wcy5zY3JvbGxQYXJlbnRWaWV3cG9ydFNpemVHZXR0ZXIodGhpcyk7XG4gICAgICAgIHZhciBzY3JvbGwgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihhY3R1YWwsIG1heCkpO1xuICAgICAgICB2YXIgZWwgPSB0aGlzLmdldEVsKCk7XG4gICAgICAgIHRoaXMuY2FjaGVkU2Nyb2xsUG9zaXRpb24gPSB0aGlzLmdldE9mZnNldChzY3JvbGxQYXJlbnQpICsgc2Nyb2xsIC0gdGhpcy5nZXRPZmZzZXQoZWwpO1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWRTY3JvbGxQb3NpdGlvbjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2V0U2Nyb2xsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0U2Nyb2xsKG9mZnNldCkge1xuICAgICAgICB2YXIgc2Nyb2xsUGFyZW50ID0gdGhpcy5zY3JvbGxQYXJlbnQ7XG4gICAgICAgIHZhciBheGlzID0gdGhpcy5wcm9wcy5heGlzO1xuICAgICAgICBvZmZzZXQgKz0gdGhpcy5nZXRPZmZzZXQodGhpcy5nZXRFbCgpKTtcbiAgICAgICAgaWYgKHNjcm9sbFBhcmVudCA9PT0gd2luZG93KSByZXR1cm4gd2luZG93LnNjcm9sbFRvKDAsIG9mZnNldCk7XG4gICAgICAgIG9mZnNldCAtPSB0aGlzLmdldE9mZnNldCh0aGlzLnNjcm9sbFBhcmVudCk7XG4gICAgICAgIHNjcm9sbFBhcmVudFtTQ1JPTExfU1RBUlRfS0VZU1theGlzXV0gPSBvZmZzZXQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImdldFNjcm9sbFNpemVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTY3JvbGxTaXplKCkge1xuICAgICAgICB2YXIgc2Nyb2xsUGFyZW50ID0gdGhpcy5zY3JvbGxQYXJlbnQ7XG4gICAgICAgIHZhciBfZG9jdW1lbnQgPSBkb2N1bWVudCxcbiAgICAgICAgICAgIGJvZHkgPSBfZG9jdW1lbnQuYm9keSxcbiAgICAgICAgICAgIGRvY3VtZW50RWxlbWVudCA9IF9kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHZhciBrZXkgPSBTQ1JPTExfU0laRV9LRVlTW3RoaXMucHJvcHMuYXhpc107XG4gICAgICAgIHJldHVybiBzY3JvbGxQYXJlbnQgPT09IHdpbmRvdyA/IE1hdGgubWF4KGJvZHlba2V5XSwgZG9jdW1lbnRFbGVtZW50W2tleV0pIDogc2Nyb2xsUGFyZW50W2tleV07XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImhhc0RldGVybWluYXRlU2l6ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhc0RldGVybWluYXRlU2l6ZSgpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGl0ZW1TaXplR2V0dGVyID0gX3RoaXMkcHJvcHMuaXRlbVNpemVHZXR0ZXIsXG4gICAgICAgICAgICB0eXBlID0gX3RoaXMkcHJvcHMudHlwZTtcbiAgICAgICAgcmV0dXJuIHR5cGUgPT09ICd1bmlmb3JtJyB8fCBpdGVtU2l6ZUdldHRlcjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0U3RhcnRBbmRFbmRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdGFydEFuZEVuZCgpIHtcbiAgICAgICAgdmFyIHRocmVzaG9sZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogdGhpcy5wcm9wcy50aHJlc2hvbGQ7XG4gICAgICAgIHZhciBzY3JvbGwgPSB0aGlzLmdldFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgICAgIHZhciBzdGFydCA9IE1hdGgubWF4KDAsIHNjcm9sbCAtIHRocmVzaG9sZCk7XG4gICAgICAgIHZhciBlbmQgPSBzY3JvbGwgKyB0aGlzLnByb3BzLnNjcm9sbFBhcmVudFZpZXdwb3J0U2l6ZUdldHRlcih0aGlzKSArIHRocmVzaG9sZDtcblxuICAgICAgICBpZiAodGhpcy5oYXNEZXRlcm1pbmF0ZVNpemUoKSkge1xuICAgICAgICAgIGVuZCA9IE1hdGgubWluKGVuZCwgdGhpcy5nZXRTcGFjZUJlZm9yZSh0aGlzLnByb3BzLmxlbmd0aCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdGFydDogc3RhcnQsXG4gICAgICAgICAgZW5kOiBlbmRcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0SXRlbVNpemVBbmRJdGVtc1BlclJvd1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEl0ZW1TaXplQW5kSXRlbXNQZXJSb3coKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgYXhpcyA9IF90aGlzJHByb3BzMi5heGlzLFxuICAgICAgICAgICAgdXNlU3RhdGljU2l6ZSA9IF90aGlzJHByb3BzMi51c2VTdGF0aWNTaXplO1xuICAgICAgICB2YXIgX3RoaXMkc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgaXRlbVNpemUgPSBfdGhpcyRzdGF0ZS5pdGVtU2l6ZSxcbiAgICAgICAgICAgIGl0ZW1zUGVyUm93ID0gX3RoaXMkc3RhdGUuaXRlbXNQZXJSb3c7XG5cbiAgICAgICAgaWYgKHVzZVN0YXRpY1NpemUgJiYgaXRlbVNpemUgJiYgaXRlbXNQZXJSb3cpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXRlbVNpemU6IGl0ZW1TaXplLFxuICAgICAgICAgICAgaXRlbXNQZXJSb3c6IGl0ZW1zUGVyUm93XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVtRWxzID0gdGhpcy5pdGVtcy5jaGlsZHJlbjtcbiAgICAgICAgaWYgKCFpdGVtRWxzLmxlbmd0aCkgcmV0dXJuIHt9O1xuICAgICAgICB2YXIgZmlyc3RFbCA9IGl0ZW1FbHNbMF07IC8vIEZpcmVmb3ggaGFzIGEgcHJvYmxlbSB3aGVyZSBpdCB3aWxsIHJldHVybiBhICpzbGlnaHRseSogKGxlc3MgdGhhblxuICAgICAgICAvLyB0aG91c2FuZHRocyBvZiBhIHBpeGVsKSBkaWZmZXJlbnQgc2l6ZSBmb3IgdGhlIHNhbWUgZWxlbWVudCBiZXR3ZWVuXG4gICAgICAgIC8vIHJlbmRlcnMuIFRoaXMgY2FuIGNhdXNlIGFuIGluZmluaXRlIHJlbmRlciBsb29wLCBzbyBvbmx5IGNoYW5nZSB0aGVcbiAgICAgICAgLy8gaXRlbVNpemUgd2hlbiBpdCBpcyBzaWduaWZpY2FudGx5IGRpZmZlcmVudC5cblxuICAgICAgICB2YXIgZmlyc3RFbFNpemUgPSBmaXJzdEVsW09GRlNFVF9TSVpFX0tFWVNbYXhpc11dO1xuICAgICAgICB2YXIgZGVsdGEgPSBNYXRoLmFicyhmaXJzdEVsU2l6ZSAtIGl0ZW1TaXplKTtcbiAgICAgICAgaWYgKGlzTmFOKGRlbHRhKSB8fCBkZWx0YSA+PSAxKSBpdGVtU2l6ZSA9IGZpcnN0RWxTaXplO1xuICAgICAgICBpZiAoIWl0ZW1TaXplKSByZXR1cm4ge307XG4gICAgICAgIHZhciBzdGFydEtleSA9IE9GRlNFVF9TVEFSVF9LRVlTW2F4aXNdO1xuICAgICAgICB2YXIgZmlyc3RTdGFydCA9IGZpcnN0RWxbc3RhcnRLZXldO1xuICAgICAgICBpdGVtc1BlclJvdyA9IDE7XG5cbiAgICAgICAgZm9yICh2YXIgaXRlbSA9IGl0ZW1FbHNbaXRlbXNQZXJSb3ddOyBpdGVtICYmIGl0ZW1bc3RhcnRLZXldID09PSBmaXJzdFN0YXJ0OyBpdGVtID0gaXRlbUVsc1tpdGVtc1BlclJvd10pIHtcbiAgICAgICAgICArK2l0ZW1zUGVyUm93O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpdGVtU2l6ZTogaXRlbVNpemUsXG4gICAgICAgICAgaXRlbXNQZXJSb3c6IGl0ZW1zUGVyUm93XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNsZWFyU2l6ZUNhY2hlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXJTaXplQ2FjaGUoKSB7XG4gICAgICAgIHRoaXMuY2FjaGVkU2Nyb2xsUG9zaXRpb24gPSBudWxsO1xuICAgICAgfSAvLyBDYWxsZWQgYnkgJ3Njcm9sbCcgYW5kICdyZXNpemUnIGV2ZW50cywgY2xlYXJzIHNjcm9sbCBwb3NpdGlvbiBjYWNoZS5cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJ1cGRhdGVGcmFtZUFuZENsZWFyQ2FjaGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVGcmFtZUFuZENsZWFyQ2FjaGUoY2IpIHtcbiAgICAgICAgdGhpcy5jbGVhclNpemVDYWNoZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVGcmFtZShjYik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInVwZGF0ZUZyYW1lXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlRnJhbWUoY2IpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTY3JvbGxQYXJlbnQoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjYiAhPSAnZnVuY3Rpb24nKSBjYiA9IE5PT1A7XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLnByb3BzLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdzaW1wbGUnOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlU2ltcGxlRnJhbWUoY2IpO1xuXG4gICAgICAgICAgY2FzZSAndmFyaWFibGUnOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlVmFyaWFibGVGcmFtZShjYik7XG5cbiAgICAgICAgICBjYXNlICd1bmlmb3JtJzpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZVVuaWZvcm1GcmFtZShjYik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwidXBkYXRlU2Nyb2xsUGFyZW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlU2Nyb2xsUGFyZW50KCkge1xuICAgICAgICB2YXIgcHJldiA9IHRoaXMuc2Nyb2xsUGFyZW50O1xuICAgICAgICB0aGlzLnNjcm9sbFBhcmVudCA9IHRoaXMucHJvcHMuc2Nyb2xsUGFyZW50R2V0dGVyKHRoaXMpO1xuICAgICAgICBpZiAocHJldiA9PT0gdGhpcy5zY3JvbGxQYXJlbnQpIHJldHVybjtcblxuICAgICAgICBpZiAocHJldikge1xuICAgICAgICAgIHByZXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy51cGRhdGVGcmFtZUFuZENsZWFyQ2FjaGUpO1xuICAgICAgICAgIHByZXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIE5PT1ApO1xuICAgICAgICB9IC8vIElmIHdlIGhhdmUgYSBuZXcgcGFyZW50LCBjYWNoZWQgcGFyZW50IGRpbWVuc2lvbnMgYXJlIG5vIGxvbmdlciB1c2VmdWwuXG5cblxuICAgICAgICB0aGlzLmNsZWFyU2l6ZUNhY2hlKCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsUGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMudXBkYXRlRnJhbWVBbmRDbGVhckNhY2hlLCBQQVNTSVZFKTsgLy8gWW91IGhhdmUgdG8gYXR0YWNoIG1vdXNld2hlZWwgbGlzdGVuZXIgdG8gdGhlIHNjcm9sbGFibGUgZWxlbWVudC5cbiAgICAgICAgLy8gSnVzdCBhbiBlbXB0eSBsaXN0ZW5lci4gQWZ0ZXIgdGhhdCBvbnNjcm9sbCBldmVudHMgd2lsbCBiZSBmaXJlZCBzeW5jaHJvbm91c2x5LlxuXG4gICAgICAgIHRoaXMuc2Nyb2xsUGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBOT09QLCBQQVNTSVZFKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwidXBkYXRlU2ltcGxlRnJhbWVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVTaW1wbGVGcmFtZShjYikge1xuICAgICAgICB2YXIgX3RoaXMkZ2V0U3RhcnRBbmRFbmQgPSB0aGlzLmdldFN0YXJ0QW5kRW5kKCksXG4gICAgICAgICAgICBlbmQgPSBfdGhpcyRnZXRTdGFydEFuZEVuZC5lbmQ7XG5cbiAgICAgICAgdmFyIGl0ZW1FbHMgPSB0aGlzLml0ZW1zLmNoaWxkcmVuO1xuICAgICAgICB2YXIgZWxFbmQgPSAwO1xuXG4gICAgICAgIGlmIChpdGVtRWxzLmxlbmd0aCkge1xuICAgICAgICAgIHZhciBheGlzID0gdGhpcy5wcm9wcy5heGlzO1xuICAgICAgICAgIHZhciBmaXJzdEl0ZW1FbCA9IGl0ZW1FbHNbMF07XG4gICAgICAgICAgdmFyIGxhc3RJdGVtRWwgPSBpdGVtRWxzW2l0ZW1FbHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgZWxFbmQgPSB0aGlzLmdldE9mZnNldChsYXN0SXRlbUVsKSArIGxhc3RJdGVtRWxbT0ZGU0VUX1NJWkVfS0VZU1theGlzXV0gLSB0aGlzLmdldE9mZnNldChmaXJzdEl0ZW1FbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxFbmQgPiBlbmQpIHJldHVybiBjYigpO1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHBhZ2VTaXplID0gX3RoaXMkcHJvcHMzLnBhZ2VTaXplLFxuICAgICAgICAgICAgbGVuZ3RoID0gX3RoaXMkcHJvcHMzLmxlbmd0aDtcbiAgICAgICAgdmFyIHNpemUgPSBNYXRoLm1pbih0aGlzLnN0YXRlLnNpemUgKyBwYWdlU2l6ZSwgbGVuZ3RoKTtcbiAgICAgICAgdGhpcy5tYXliZVNldFN0YXRlKHtcbiAgICAgICAgICBzaXplOiBzaXplXG4gICAgICAgIH0sIGNiKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwidXBkYXRlVmFyaWFibGVGcmFtZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVZhcmlhYmxlRnJhbWUoY2IpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLml0ZW1TaXplR2V0dGVyKSB0aGlzLmNhY2hlU2l6ZXMoKTtcblxuICAgICAgICB2YXIgX3RoaXMkZ2V0U3RhcnRBbmRFbmQyID0gdGhpcy5nZXRTdGFydEFuZEVuZCgpLFxuICAgICAgICAgICAgc3RhcnQgPSBfdGhpcyRnZXRTdGFydEFuZEVuZDIuc3RhcnQsXG4gICAgICAgICAgICBlbmQgPSBfdGhpcyRnZXRTdGFydEFuZEVuZDIuZW5kO1xuXG4gICAgICAgIHZhciBfdGhpcyRwcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgbGVuZ3RoID0gX3RoaXMkcHJvcHM0Lmxlbmd0aCxcbiAgICAgICAgICAgIHBhZ2VTaXplID0gX3RoaXMkcHJvcHM0LnBhZ2VTaXplO1xuICAgICAgICB2YXIgc3BhY2UgPSAwO1xuICAgICAgICB2YXIgZnJvbSA9IDA7XG4gICAgICAgIHZhciBzaXplID0gMDtcbiAgICAgICAgdmFyIG1heEZyb20gPSBsZW5ndGggLSAxO1xuXG4gICAgICAgIHdoaWxlIChmcm9tIDwgbWF4RnJvbSkge1xuICAgICAgICAgIHZhciBpdGVtU2l6ZSA9IHRoaXMuZ2V0U2l6ZU9mSXRlbShmcm9tKTtcbiAgICAgICAgICBpZiAoaXRlbVNpemUgPT0gbnVsbCB8fCBzcGFjZSArIGl0ZW1TaXplID4gc3RhcnQpIGJyZWFrO1xuICAgICAgICAgIHNwYWNlICs9IGl0ZW1TaXplO1xuICAgICAgICAgICsrZnJvbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtYXhTaXplID0gbGVuZ3RoIC0gZnJvbTtcblxuICAgICAgICB3aGlsZSAoc2l6ZSA8IG1heFNpemUgJiYgc3BhY2UgPCBlbmQpIHtcbiAgICAgICAgICB2YXIgX2l0ZW1TaXplID0gdGhpcy5nZXRTaXplT2ZJdGVtKGZyb20gKyBzaXplKTtcblxuICAgICAgICAgIGlmIChfaXRlbVNpemUgPT0gbnVsbCkge1xuICAgICAgICAgICAgc2l6ZSA9IE1hdGgubWluKHNpemUgKyBwYWdlU2l6ZSwgbWF4U2l6ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzcGFjZSArPSBfaXRlbVNpemU7XG4gICAgICAgICAgKytzaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXliZVNldFN0YXRlKGNvbnN0cmFpbih0aGlzLnByb3BzLCB7XG4gICAgICAgICAgZnJvbTogZnJvbSxcbiAgICAgICAgICBpdGVtc1BlclJvdzogMSxcbiAgICAgICAgICBzaXplOiBzaXplXG4gICAgICAgIH0pLCBjYik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInVwZGF0ZVVuaWZvcm1GcmFtZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVVuaWZvcm1GcmFtZShjYikge1xuICAgICAgICB2YXIgX3RoaXMkZ2V0SXRlbVNpemVBbmRJID0gdGhpcy5nZXRJdGVtU2l6ZUFuZEl0ZW1zUGVyUm93KCksXG4gICAgICAgICAgICBpdGVtU2l6ZSA9IF90aGlzJGdldEl0ZW1TaXplQW5kSS5pdGVtU2l6ZSxcbiAgICAgICAgICAgIGl0ZW1zUGVyUm93ID0gX3RoaXMkZ2V0SXRlbVNpemVBbmRJLml0ZW1zUGVyUm93O1xuXG4gICAgICAgIGlmICghaXRlbVNpemUgfHwgIWl0ZW1zUGVyUm93KSByZXR1cm4gY2IoKTtcblxuICAgICAgICB2YXIgX3RoaXMkZ2V0U3RhcnRBbmRFbmQzID0gdGhpcy5nZXRTdGFydEFuZEVuZCgpLFxuICAgICAgICAgICAgc3RhcnQgPSBfdGhpcyRnZXRTdGFydEFuZEVuZDMuc3RhcnQsXG4gICAgICAgICAgICBlbmQgPSBfdGhpcyRnZXRTdGFydEFuZEVuZDMuZW5kO1xuXG4gICAgICAgIHZhciBfY29uc3RyYWluID0gY29uc3RyYWluKHRoaXMucHJvcHMsIHtcbiAgICAgICAgICBmcm9tOiBNYXRoLmZsb29yKHN0YXJ0IC8gaXRlbVNpemUpICogaXRlbXNQZXJSb3csXG4gICAgICAgICAgc2l6ZTogKE1hdGguY2VpbCgoZW5kIC0gc3RhcnQpIC8gaXRlbVNpemUpICsgMSkgKiBpdGVtc1BlclJvdyxcbiAgICAgICAgICBpdGVtc1BlclJvdzogaXRlbXNQZXJSb3dcbiAgICAgICAgfSksXG4gICAgICAgICAgICBmcm9tID0gX2NvbnN0cmFpbi5mcm9tLFxuICAgICAgICAgICAgc2l6ZSA9IF9jb25zdHJhaW4uc2l6ZTtcblxuICAgICAgICByZXR1cm4gdGhpcy5tYXliZVNldFN0YXRlKHtcbiAgICAgICAgICBpdGVtc1BlclJvdzogaXRlbXNQZXJSb3csXG4gICAgICAgICAgZnJvbTogZnJvbSxcbiAgICAgICAgICBpdGVtU2l6ZTogaXRlbVNpemUsXG4gICAgICAgICAgc2l6ZTogc2l6ZVxuICAgICAgICB9LCBjYik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImdldFNwYWNlQmVmb3JlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3BhY2VCZWZvcmUoaW5kZXgpIHtcbiAgICAgICAgdmFyIGNhY2hlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgICAgaWYgKGNhY2hlW2luZGV4XSAhPSBudWxsKSByZXR1cm4gY2FjaGVbaW5kZXhdOyAvLyBUcnkgdGhlIHN0YXRpYyBpdGVtU2l6ZS5cblxuICAgICAgICB2YXIgX3RoaXMkc3RhdGUyID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIGl0ZW1TaXplID0gX3RoaXMkc3RhdGUyLml0ZW1TaXplLFxuICAgICAgICAgICAgaXRlbXNQZXJSb3cgPSBfdGhpcyRzdGF0ZTIuaXRlbXNQZXJSb3c7XG5cbiAgICAgICAgaWYgKGl0ZW1TaXplKSB7XG4gICAgICAgICAgcmV0dXJuIGNhY2hlW2luZGV4XSA9IE1hdGguZmxvb3IoaW5kZXggLyBpdGVtc1BlclJvdykgKiBpdGVtU2l6ZTtcbiAgICAgICAgfSAvLyBGaW5kIHRoZSBjbG9zZXN0IHNwYWNlIHRvIGluZGV4IHRoZXJlIGlzIGEgY2FjaGVkIHZhbHVlIGZvci5cblxuXG4gICAgICAgIHZhciBmcm9tID0gaW5kZXg7XG5cbiAgICAgICAgd2hpbGUgKGZyb20gPiAwICYmIGNhY2hlWy0tZnJvbV0gPT0gbnVsbCkge1xuICAgICAgICAgIDtcbiAgICAgICAgfSAvLyBGaW5hbGx5LCBhY2N1bXVsYXRlIHNpemVzIG9mIGl0ZW1zIGZyb20gLSBpbmRleC5cblxuXG4gICAgICAgIHZhciBzcGFjZSA9IGNhY2hlW2Zyb21dIHx8IDA7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IGZyb207IGkgPCBpbmRleDsgKytpKSB7XG4gICAgICAgICAgY2FjaGVbaV0gPSBzcGFjZTtcblxuICAgICAgICAgIHZhciBfaXRlbVNpemUyID0gdGhpcy5nZXRTaXplT2ZJdGVtKGkpO1xuXG4gICAgICAgICAgaWYgKF9pdGVtU2l6ZTIgPT0gbnVsbCkgYnJlYWs7XG4gICAgICAgICAgc3BhY2UgKz0gX2l0ZW1TaXplMjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYWNoZVtpbmRleF0gPSBzcGFjZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2FjaGVTaXplc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNhY2hlU2l6ZXMoKSB7XG4gICAgICAgIHZhciBjYWNoZSA9IHRoaXMuY2FjaGU7XG4gICAgICAgIHZhciBmcm9tID0gdGhpcy5zdGF0ZS5mcm9tO1xuICAgICAgICB2YXIgaXRlbUVscyA9IHRoaXMuaXRlbXMuY2hpbGRyZW47XG4gICAgICAgIHZhciBzaXplS2V5ID0gT0ZGU0VUX1NJWkVfS0VZU1t0aGlzLnByb3BzLmF4aXNdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gaXRlbUVscy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgICBjYWNoZVtmcm9tICsgaV0gPSBpdGVtRWxzW2ldW3NpemVLZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImdldFNpemVPZkl0ZW1cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTaXplT2ZJdGVtKGluZGV4KSB7XG4gICAgICAgIHZhciBjYWNoZSA9IHRoaXMuY2FjaGUsXG4gICAgICAgICAgICBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczUgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgYXhpcyA9IF90aGlzJHByb3BzNS5heGlzLFxuICAgICAgICAgICAgaXRlbVNpemVHZXR0ZXIgPSBfdGhpcyRwcm9wczUuaXRlbVNpemVHZXR0ZXIsXG4gICAgICAgICAgICBpdGVtU2l6ZUVzdGltYXRvciA9IF90aGlzJHByb3BzNS5pdGVtU2l6ZUVzdGltYXRvcixcbiAgICAgICAgICAgIHR5cGUgPSBfdGhpcyRwcm9wczUudHlwZTtcbiAgICAgICAgdmFyIF90aGlzJHN0YXRlMyA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICBmcm9tID0gX3RoaXMkc3RhdGUzLmZyb20sXG4gICAgICAgICAgICBpdGVtU2l6ZSA9IF90aGlzJHN0YXRlMy5pdGVtU2l6ZSxcbiAgICAgICAgICAgIHNpemUgPSBfdGhpcyRzdGF0ZTMuc2l6ZTsgLy8gVHJ5IHRoZSBzdGF0aWMgaXRlbVNpemUuXG5cbiAgICAgICAgaWYgKGl0ZW1TaXplKSByZXR1cm4gaXRlbVNpemU7IC8vIFRyeSB0aGUgaXRlbVNpemVHZXR0ZXIuXG5cbiAgICAgICAgaWYgKGl0ZW1TaXplR2V0dGVyKSByZXR1cm4gaXRlbVNpemVHZXR0ZXIoaW5kZXgpOyAvLyBUcnkgdGhlIGNhY2hlLlxuXG4gICAgICAgIGlmIChpbmRleCBpbiBjYWNoZSkgcmV0dXJuIGNhY2hlW2luZGV4XTsgLy8gVHJ5IHRoZSBET00uXG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdzaW1wbGUnICYmIGluZGV4ID49IGZyb20gJiYgaW5kZXggPCBmcm9tICsgc2l6ZSAmJiBpdGVtcykge1xuICAgICAgICAgIHZhciBpdGVtRWwgPSBpdGVtcy5jaGlsZHJlbltpbmRleCAtIGZyb21dO1xuICAgICAgICAgIGlmIChpdGVtRWwpIHJldHVybiBpdGVtRWxbT0ZGU0VUX1NJWkVfS0VZU1theGlzXV07XG4gICAgICAgIH0gLy8gVHJ5IHRoZSBpdGVtU2l6ZUVzdGltYXRvci5cblxuXG4gICAgICAgIGlmIChpdGVtU2l6ZUVzdGltYXRvcikgcmV0dXJuIGl0ZW1TaXplRXN0aW1hdG9yKGluZGV4LCBjYWNoZSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNjcm9sbFRvXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2Nyb2xsVG8oaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4ICE9IG51bGwpIHRoaXMuc2V0U2Nyb2xsKHRoaXMuZ2V0U3BhY2VCZWZvcmUoaW5kZXgpKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2Nyb2xsQXJvdW5kXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2Nyb2xsQXJvdW5kKGluZGV4KSB7XG4gICAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5nZXRTY3JvbGxQb3NpdGlvbigpO1xuICAgICAgICB2YXIgYm90dG9tID0gdGhpcy5nZXRTcGFjZUJlZm9yZShpbmRleCk7XG4gICAgICAgIHZhciB0b3AgPSBib3R0b20gLSB0aGlzLnByb3BzLnNjcm9sbFBhcmVudFZpZXdwb3J0U2l6ZUdldHRlcih0aGlzKSArIHRoaXMuZ2V0U2l6ZU9mSXRlbShpbmRleCk7XG4gICAgICAgIHZhciBtaW4gPSBNYXRoLm1pbih0b3AsIGJvdHRvbSk7XG4gICAgICAgIHZhciBtYXggPSBNYXRoLm1heCh0b3AsIGJvdHRvbSk7XG4gICAgICAgIGlmIChjdXJyZW50IDw9IG1pbikgcmV0dXJuIHRoaXMuc2V0U2Nyb2xsKG1pbik7XG4gICAgICAgIGlmIChjdXJyZW50ID4gbWF4KSByZXR1cm4gdGhpcy5zZXRTY3JvbGwobWF4KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0VmlzaWJsZVJhbmdlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmlzaWJsZVJhbmdlKCkge1xuICAgICAgICB2YXIgX3RoaXMkc3RhdGU0ID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIGZyb20gPSBfdGhpcyRzdGF0ZTQuZnJvbSxcbiAgICAgICAgICAgIHNpemUgPSBfdGhpcyRzdGF0ZTQuc2l6ZTtcblxuICAgICAgICB2YXIgX3RoaXMkZ2V0U3RhcnRBbmRFbmQ0ID0gdGhpcy5nZXRTdGFydEFuZEVuZCgwKSxcbiAgICAgICAgICAgIHN0YXJ0ID0gX3RoaXMkZ2V0U3RhcnRBbmRFbmQ0LnN0YXJ0LFxuICAgICAgICAgICAgZW5kID0gX3RoaXMkZ2V0U3RhcnRBbmRFbmQ0LmVuZDtcblxuICAgICAgICB2YXIgY2FjaGUgPSB7fTtcbiAgICAgICAgdmFyIGZpcnN0LCBsYXN0O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSBmcm9tOyBpIDwgZnJvbSArIHNpemU7ICsraSkge1xuICAgICAgICAgIHZhciBpdGVtU3RhcnQgPSB0aGlzLmdldFNwYWNlQmVmb3JlKGksIGNhY2hlKTtcbiAgICAgICAgICB2YXIgaXRlbUVuZCA9IGl0ZW1TdGFydCArIHRoaXMuZ2V0U2l6ZU9mSXRlbShpKTtcbiAgICAgICAgICBpZiAoZmlyc3QgPT0gbnVsbCAmJiBpdGVtRW5kID4gc3RhcnQpIGZpcnN0ID0gaTtcbiAgICAgICAgICBpZiAoZmlyc3QgIT0gbnVsbCAmJiBpdGVtU3RhcnQgPCBlbmQpIGxhc3QgPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtmaXJzdCwgbGFzdF07XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlckl0ZW1zXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySXRlbXMoKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIHZhciBfdGhpcyRwcm9wczYgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgaXRlbVJlbmRlcmVyID0gX3RoaXMkcHJvcHM2Lml0ZW1SZW5kZXJlcixcbiAgICAgICAgICAgIGl0ZW1zUmVuZGVyZXIgPSBfdGhpcyRwcm9wczYuaXRlbXNSZW5kZXJlcjtcbiAgICAgICAgdmFyIF90aGlzJHN0YXRlNSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICBmcm9tID0gX3RoaXMkc3RhdGU1LmZyb20sXG4gICAgICAgICAgICBzaXplID0gX3RoaXMkc3RhdGU1LnNpemU7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgaXRlbXMucHVzaChpdGVtUmVuZGVyZXIoZnJvbSArIGksIGkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVtc1JlbmRlcmVyKGl0ZW1zLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgIHJldHVybiBfdGhpczMuaXRlbXMgPSBjO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICB2YXIgX3RoaXMkcHJvcHM3ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGF4aXMgPSBfdGhpcyRwcm9wczcuYXhpcyxcbiAgICAgICAgICAgIGxlbmd0aCA9IF90aGlzJHByb3BzNy5sZW5ndGgsXG4gICAgICAgICAgICB0eXBlID0gX3RoaXMkcHJvcHM3LnR5cGUsXG4gICAgICAgICAgICB1c2VUcmFuc2xhdGUzZCA9IF90aGlzJHByb3BzNy51c2VUcmFuc2xhdGUzZDtcbiAgICAgICAgdmFyIF90aGlzJHN0YXRlNiA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICBmcm9tID0gX3RoaXMkc3RhdGU2LmZyb20sXG4gICAgICAgICAgICBpdGVtc1BlclJvdyA9IF90aGlzJHN0YXRlNi5pdGVtc1BlclJvdztcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5yZW5kZXJJdGVtcygpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3NpbXBsZScpIHJldHVybiBpdGVtcztcbiAgICAgICAgdmFyIHN0eWxlID0ge1xuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgICAgIH07XG4gICAgICAgIHZhciBjYWNoZSA9IHt9O1xuICAgICAgICB2YXIgYm90dG9tID0gTWF0aC5jZWlsKGxlbmd0aCAvIGl0ZW1zUGVyUm93KSAqIGl0ZW1zUGVyUm93O1xuICAgICAgICB2YXIgc2l6ZSA9IHRoaXMuZ2V0U3BhY2VCZWZvcmUoYm90dG9tLCBjYWNoZSk7XG5cbiAgICAgICAgaWYgKHNpemUpIHtcbiAgICAgICAgICBzdHlsZVtTSVpFX0tFWVNbYXhpc11dID0gc2l6ZTtcbiAgICAgICAgICBpZiAoYXhpcyA9PT0gJ3gnKSBzdHlsZS5vdmVyZmxvd1ggPSAnaGlkZGVuJztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLmdldFNwYWNlQmVmb3JlKGZyb20sIGNhY2hlKTtcbiAgICAgICAgdmFyIHggPSBheGlzID09PSAneCcgPyBvZmZzZXQgOiAwO1xuICAgICAgICB2YXIgeSA9IGF4aXMgPT09ICd5JyA/IG9mZnNldCA6IDA7XG4gICAgICAgIHZhciB0cmFuc2Zvcm0gPSB1c2VUcmFuc2xhdGUzZCA/IFwidHJhbnNsYXRlM2QoXCIuY29uY2F0KHgsIFwicHgsIFwiKS5jb25jYXQoeSwgXCJweCwgMClcIikgOiBcInRyYW5zbGF0ZShcIi5jb25jYXQoeCwgXCJweCwgXCIpLmNvbmNhdCh5LCBcInB4KVwiKTtcbiAgICAgICAgdmFyIGxpc3RTdHlsZSA9IHtcbiAgICAgICAgICBtc1RyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgICAgIFdlYmtpdFRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoYykge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5lbCA9IGM7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBzdHlsZTogbGlzdFN0eWxlXG4gICAgICAgIH0sIGl0ZW1zKSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFJlYWN0TGlzdDtcbiAgfShfcmVhY3QuQ29tcG9uZW50KSwgX2RlZmluZVByb3BlcnR5KF9jbGFzcywgXCJkaXNwbGF5TmFtZVwiLCAnUmVhY3RMaXN0JyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3MsIFwicHJvcFR5cGVzXCIsIHtcbiAgICBheGlzOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5vbmVPZihbJ3gnLCAneSddKSxcbiAgICBpbml0aWFsSW5kZXg6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlcixcbiAgICBpdGVtUmVuZGVyZXI6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gICAgaXRlbVNpemVFc3RpbWF0b3I6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gICAgaXRlbVNpemVHZXR0ZXI6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gICAgaXRlbXNSZW5kZXJlcjogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uZnVuYyxcbiAgICBsZW5ndGg6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlcixcbiAgICBtaW5TaXplOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5udW1iZXIsXG4gICAgcGFnZVNpemU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm51bWJlcixcbiAgICBzY3JvbGxQYXJlbnRHZXR0ZXI6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gICAgc2Nyb2xsUGFyZW50Vmlld3BvcnRTaXplR2V0dGVyOiBfcHJvcFR5cGVzW1wiZGVmYXVsdFwiXS5mdW5jLFxuICAgIHRocmVzaG9sZDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0ubnVtYmVyLFxuICAgIHR5cGU6IF9wcm9wVHlwZXNbXCJkZWZhdWx0XCJdLm9uZU9mKFsnc2ltcGxlJywgJ3ZhcmlhYmxlJywgJ3VuaWZvcm0nXSksXG4gICAgdXNlU3RhdGljU2l6ZTogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYm9vbCxcbiAgICB1c2VUcmFuc2xhdGUzZDogX3Byb3BUeXBlc1tcImRlZmF1bHRcIl0uYm9vbFxuICB9KSwgX2RlZmluZVByb3BlcnR5KF9jbGFzcywgXCJkZWZhdWx0UHJvcHNcIiwge1xuICAgIGF4aXM6ICd5JyxcbiAgICBpdGVtUmVuZGVyZXI6IGZ1bmN0aW9uIGl0ZW1SZW5kZXJlcihpbmRleCwga2V5KSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGtleToga2V5XG4gICAgICB9LCBpbmRleCk7XG4gICAgfSxcbiAgICBpdGVtc1JlbmRlcmVyOiBmdW5jdGlvbiBpdGVtc1JlbmRlcmVyKGl0ZW1zLCByZWYpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgcmVmOiByZWZcbiAgICAgIH0sIGl0ZW1zKTtcbiAgICB9LFxuICAgIGxlbmd0aDogMCxcbiAgICBtaW5TaXplOiAxLFxuICAgIHBhZ2VTaXplOiAxMCxcbiAgICBzY3JvbGxQYXJlbnRHZXR0ZXI6IGRlZmF1bHRTY3JvbGxQYXJlbnRHZXR0ZXIsXG4gICAgc2Nyb2xsUGFyZW50Vmlld3BvcnRTaXplR2V0dGVyOiBkZWZhdWx0U2Nyb2xsUGFyZW50Vmlld3BvcnRTaXplR2V0dGVyLFxuICAgIHRocmVzaG9sZDogMTAwLFxuICAgIHR5cGU6ICdzaW1wbGUnLFxuICAgIHVzZVN0YXRpY1NpemU6IGZhbHNlLFxuICAgIHVzZVRyYW5zbGF0ZTNkOiBmYWxzZVxuICB9KSwgX3RlbXApO1xufSk7XG4iLCJmdW5jdGlvbiBzaGFsbG93RXF1YWxPYmplY3RzKG9iakEsIG9iakIpIHtcbiAgaWYgKG9iakEgPT09IG9iakIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICghb2JqQSB8fCAhb2JqQikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBhS2V5cyA9IE9iamVjdC5rZXlzKG9iakEpO1xuICB2YXIgYktleXMgPSBPYmplY3Qua2V5cyhvYmpCKTtcbiAgdmFyIGxlbiA9IGFLZXlzLmxlbmd0aDtcblxuICBpZiAoYktleXMubGVuZ3RoICE9PSBsZW4pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGFLZXlzW2ldO1xuXG4gICAgaWYgKG9iakFba2V5XSAhPT0gb2JqQltrZXldIHx8ICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqQiwga2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBzaGFsbG93RXF1YWxBcnJheXMoYXJyQSwgYXJyQikge1xuICBpZiAoYXJyQSA9PT0gYXJyQikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKCFhcnJBIHx8ICFhcnJCKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGxlbiA9IGFyckEubGVuZ3RoO1xuXG4gIGlmIChhcnJCLmxlbmd0aCAhPT0gbGVuKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChhcnJBW2ldICE9PSBhcnJCW2ldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCB7IHNoYWxsb3dFcXVhbEFycmF5cywgc2hhbGxvd0VxdWFsT2JqZWN0cyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==