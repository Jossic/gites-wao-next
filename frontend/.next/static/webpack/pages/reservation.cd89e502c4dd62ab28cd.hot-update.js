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
/* harmony import */ var react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-date-range/dist/styles.css */ "./node_modules/react-date-range/dist/styles.css");
/* harmony import */ var react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-date-range/dist/theme/default.css */ "./node_modules/react-date-range/dist/theme/default.css");
/* harmony import */ var react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var _actions_reservationActions__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../actions/reservationActions */ "./actions/reservationActions.js");
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _HOC_Snackbar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../HOC/Snackbar */ "./components/HOC/Snackbar.js");





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
      lineNumber: 97,
      columnNumber: 3
    }
  }, completed ? __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default.a, {
    className: classes.completed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }) : __jsx("div", {
    className: classes.circle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
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
        lineNumber: 173,
        columnNumber: 6
      }
    }),
    2: __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_13___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 6
      }
    }),
    3: __jsx(_material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_18___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 6
      }
    }),
    4: __jsx(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_19___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 6
      }
    })
  };
  return __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_8__["default"])(classes.root, (_clsx2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_clsx2, classes.active, active), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_clsx2, classes.completed, completed), _clsx2)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      dateArrivee = _useState2[0],
      setDateArrivee = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      loading = _useState3[0],
      setLoading = _useState3[1];

  var reRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var steps = getSteps();

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      selectedDateArrivee = _useState4[0],
      setSelectedDateArrivee = _useState4[1];

  var handleDateChangeArrivee = function handleDateChangeArrivee(date) {
    setSelectedDateArrivee(date);
    setSelectedDateDepart(date);
  };

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      selectedDateDepart = _useState5[0],
      setSelectedDateDepart = _useState5[1];

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

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      gites = _useState6[0],
      setGites = _useState6[1];

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
        lineNumber: 307,
        columnNumber: 3
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 4
      }
    }, "Informations sur la location"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_24__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["InputLabel"], {
      shrink: true,
      id: "demo-simple-select-placeholder-label-label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 6
      }
    }, "R\xE9servation sur le g\xEEte :"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_20__["Controller"], {
      control: control,
      name: "gite",
      as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["Select"], {
        id: "gite-select",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 8
        }
      }, gites.map(function (gite, i) {
        return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["MenuItem"], {
          key: gite.slug,
          value: gite.slug,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 323,
            columnNumber: 10
          }
        }, gite.nom);
      })),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 6
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["TextField"], {
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
        lineNumber: 331,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["TextField"], {
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
        lineNumber: 341,
        columnNumber: 5
      }
    })), __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_26__["MuiPickersUtilsProvider"], {
      utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_25__["default"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_24__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 5
      }
    }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_26__["KeyboardDatePicker"], {
      inputRef: register,
      margin: "normal",
      id: "date-picker-dialog",
      name: "dateArrivee",
      label: "Date d'arriv\xE9e",
      format: "MM/dd/yyyy",
      defaultValue: "",
      value: selectedDateArrivee,
      onChange: handleDateChangeArrivee,
      KeyboardButtonProps: {
        'aria-label': 'change date'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354,
        columnNumber: 6
      }
    }), __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_26__["KeyboardDatePicker"], {
      inputRef: register,
      margin: "normal",
      id: "date-picker-dialog",
      name: "dateDepart",
      label: "Date de d\xE9part",
      format: "MM/dd/yyyy",
      defaultValue: "",
      value: selectedDateDepart,
      onChange: handleDateChangeDepart,
      KeyboardButtonProps: {
        'aria-label': 'change date'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 6
      }
    }))));
  };

  var infoComp = function infoComp() {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388,
        columnNumber: 3
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389,
        columnNumber: 4
      }
    }, "Informations suppl\xE9mentaires"), __jsx("div", {
      className: classes.root,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["FormControl"], {
      component: "fieldset",
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["FormLabel"], {
      component: "legend",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394,
        columnNumber: 6
      }
    }, "Merci d'indiquer si vous nous avez d\xE9ja contact\xE9 par :"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["FormGroup"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397,
        columnNumber: 6
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_24__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["Checkbox"], {
        name: "contactMail",
        inputRef: register,
        defaultValue: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401,
          columnNumber: 10
        }
      }),
      label: "Mail",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 399,
        columnNumber: 8
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["Checkbox"], {
        name: "contactTel",
        inputRef: register,
        defaultValue: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 10
        }
      }),
      label: "T\xE9l\xE9phone",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409,
        columnNumber: 8
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["Checkbox"], {
        name: "contactAbritel",
        inputRef: register,
        defaultValue: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421,
          columnNumber: 10
        }
      }),
      label: "Abritel",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 8
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["Checkbox"], {
        name: "contactLeboncoin",
        inputRef: register,
        defaultValue: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431,
          columnNumber: 10
        }
      }),
      label: "Leboncoin",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 429,
        columnNumber: 8
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["Checkbox"], {
        name: "contactAutre",
        inputRef: register,
        defaultValue: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441,
          columnNumber: 10
        }
      }),
      label: "Autre",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 439,
        columnNumber: 8
      }
    })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_24__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 453,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["TextField"], {
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
        lineNumber: 454,
        columnNumber: 6
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["Switch"], {
        inputRef: register,
        defaultChecked: true,
        name: "litFait",
        color: "primary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466,
          columnNumber: 8
        }
      }),
      label: "Souhaitez-vous l'option lit fait \xE0 l'arriv\xE9e ?",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 464,
        columnNumber: 6
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["Switch"], {
        inputRef: register,
        defaultChecked: true,
        name: "newsletter",
        color: "primary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477,
          columnNumber: 8
        }
      }),
      label: "Souscrire \xE0 notre newsletter pour b\xE9n\xE9ficier de remises et offres promotionnelles ?",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 475,
        columnNumber: 6
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_24__["default"], {
      container: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 487,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 488,
        columnNumber: 6
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["TextField"], {
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
        lineNumber: 489,
        columnNumber: 7
      }
    })))));
  };

  var Coord = function Coord() {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 506,
        columnNumber: 3
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 507,
        columnNumber: 4
      }
    }, "Vos coordonn\xE9es"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_24__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 509,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 510,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["InputLabel"], {
      shrink: true,
      id: "demo-simple-select-placeholder-label-label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 511,
        columnNumber: 6
      }
    }, "Civilit\xE9"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_20__["Controller"], {
      control: control,
      name: "civilite",
      as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["Select"], {
        id: "civilite-select",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["MenuItem"], {
        value: "M. & Mme",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521,
          columnNumber: 9
        }
      }, "M. & Mme"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["MenuItem"], {
        value: "Mme",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 522,
          columnNumber: 9
        }
      }, "Mme"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["MenuItem"], {
        value: "Mlle",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 523,
          columnNumber: 9
        }
      }, "Mlle"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["MenuItem"], {
        value: "M.",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 524,
          columnNumber: 9
        }
      }, "M."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["MenuItem"], {
        value: "Association",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525,
          columnNumber: 9
        }
      }, "Association"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["MenuItem"], {
        value: "Comit\xE9 d'entreprise",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 528,
          columnNumber: 9
        }
      }, "Comit\xE9 d'entreprise"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["MenuItem"], {
        value: "Soci\xE9t\xE9",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531,
          columnNumber: 9
        }
      }, "Soci\xE9t\xE9"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["MenuItem"], {
        value: "Entreprise",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532,
          columnNumber: 9
        }
      }, "Entreprise"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["MenuItem"], {
        value: "Foyer de vie",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535,
          columnNumber: 9
        }
      }, "Foyer de vie"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["MenuItem"], {
        value: "Foyer d'accueil",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538,
          columnNumber: 9
        }
      }, "Foyer d'accueil"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["MenuItem"], {
        value: "Famille",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541,
          columnNumber: 9
        }
      }, "Famille"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["MenuItem"], {
        value: "Autres",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542,
          columnNumber: 9
        }
      }, "Autres")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 516,
        columnNumber: 6
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["TextField"], {
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
        lineNumber: 548,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["TextField"], {
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
        lineNumber: 557,
        columnNumber: 5
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_24__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 567,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["TextField"], {
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
        lineNumber: 568,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["TextField"], {
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
        lineNumber: 577,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["TextField"], {
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
        lineNumber: 586,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 595,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["InputLabel"], {
      shrink: true,
      id: "demo-simple-select-placeholder-label-label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 596,
        columnNumber: 6
      }
    }, "Pays"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_20__["Controller"], {
      control: control,
      name: "pays",
      as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["Select"], {
        id: "pays-select",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 606,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["MenuItem"], {
        value: "france",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 607,
          columnNumber: 9
        }
      }, "France"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["MenuItem"], {
        value: "",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 608,
          columnNumber: 9
        }
      }, "--------"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["MenuItem"], {
        value: "autres",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 609,
          columnNumber: 9
        }
      }, "Autres"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["MenuItem"], {
        value: "allemagne",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 610,
          columnNumber: 9
        }
      }, "Allemagne"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["MenuItem"], {
        value: "angleterre",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 611,
          columnNumber: 9
        }
      }, "Angleterre"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["MenuItem"], {
        value: "belgique",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 614,
          columnNumber: 9
        }
      }, "Belgique"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["MenuItem"], {
        value: "hollande",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 615,
          columnNumber: 9
        }
      }, "Hollande"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["MenuItem"], {
        value: "luxembourg",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 616,
          columnNumber: 9
        }
      }, "Luxembourg"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["MenuItem"], {
        value: "suisse",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 619,
          columnNumber: 9
        }
      }, "Suisse")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 602,
        columnNumber: 6
      }
    }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_24__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 625,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["TextField"], {
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
        lineNumber: 626,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["TextField"], {
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
        lineNumber: 635,
        columnNumber: 5
      }
    })));
  };

  var recap = function recap() {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 648,
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
              Object(_actions_reservationActions__WEBPACK_IMPORTED_MODULE_27__["createReservation"])(data).then(function (result) {
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

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 691,
      columnNumber: 3
    }
  }, loading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["CircularProgress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 692,
      columnNumber: 16
    }
  }), __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 694,
      columnNumber: 4
    }
  }, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 695,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    alternativeLabel: true,
    activeStep: activeStep,
    connector: __jsx(ColorlibConnector, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 699,
        columnNumber: 18
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696,
      columnNumber: 6
    }
  }, steps.map(function (label) {
    return __jsx(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 701,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_11__["default"], {
      StepIconComponent: ColorlibStepIcon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 702,
        columnNumber: 9
      }
    }, label));
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 708,
      columnNumber: 6
    }
  }, activeStep === steps.length ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 710,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.instructions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 712,
      columnNumber: 9
    }
  }, "Votre demande a bien \xE9t\xE9 prise en compte"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onClick: handleReset,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 715,
      columnNumber: 9
    }
  }, "Recommencer")) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 722,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.instructions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
      columnNumber: 9
    }
  }, getStepContent(activeStep)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 726,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    disabled: activeStep === 0,
    onClick: handleBack,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 727,
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
      lineNumber: 734,
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
      lineNumber: 742,
      columnNumber: 11
    }
  }, "Suivant")))), __jsx(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_28__["default"], {
    sitekey: _config__WEBPACK_IMPORTED_MODULE_29__["RECAPTCHA_SECRET_KEY"],
    ref: reRef,
    size: "invisible" // onChange={onChange}
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 754,
      columnNumber: 6
    }
  }))));
};

_s3(ReservationForm, "zwtvsf+gYjBWl9WQnjjtcpfmy8w=", false, function () {
  return [useStyles, react_hook_form__WEBPACK_IMPORTED_MODULE_20__["useForm"]];
});

_c3 = ReservationForm;
/* harmony default export */ __webpack_exports__["default"] = (_c4 = Object(_HOC_Snackbar__WEBPACK_IMPORTED_MODULE_30__["withSnackbar"])(ReservationForm));

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

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/react-date-range/dist/styles.css":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./node_modules/react-date-range/dist/styles.css ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _next_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _next_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".rdrCalendarWrapper {\n  box-sizing: border-box;\n  background: #ffffff;\n  display: -webkit-inline-flex;\n  display: inline-flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.rdrDateDisplay{\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n}\n\n.rdrDateDisplayItem{\n  -webkit-flex: 1 1;\n          flex: 1 1;\n  width: 0;\n  text-align: center;\n  color: inherit;\n}\n\n.rdrDateDisplayItem + .rdrDateDisplayItem{\n    margin-left: 0.833em;\n  }\n\n.rdrDateDisplayItem input{\n    text-align: inherit\n  }\n\n.rdrDateDisplayItem input:disabled{\n      cursor: default;\n    }\n\n.rdrDateDisplayItemActive{}\n\n.rdrMonthAndYearWrapper {\n  box-sizing: inherit;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n}\n\n.rdrMonthAndYearPickers{\n  -webkit-flex: 1 1 auto;\n          flex: 1 1 auto;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n\n.rdrMonthPicker{}\n\n.rdrYearPicker{}\n\n.rdrNextPrevButton {\n  box-sizing: inherit;\n  cursor: pointer;\n  outline: none;\n}\n\n.rdrPprevButton {}\n\n.rdrNextButton {}\n\n.rdrMonths{\n  display: -webkit-flex;\n  display: flex;\n}\n\n.rdrMonthsVertical{\n  -webkit-flex-direction: column;\n          flex-direction: column;\n}\n\n.rdrMonthsHorizontal > div > div > div{\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n}\n\n.rdrMonth{\n  width: 27.667em;\n}\n\n.rdrWeekDays{\n  display: -webkit-flex;\n  display: flex;\n}\n\n.rdrWeekDay {\n  -webkit-flex-basis: calc(100% / 7);\n          flex-basis: calc(100% / 7);\n  box-sizing: inherit;\n  text-align: center;\n}\n\n.rdrDays{\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n\n.rdrDateDisplayWrapper{}\n\n.rdrMonthName{}\n\n.rdrInfiniteMonths{\n  overflow: auto;\n}\n\n.rdrDateRangeWrapper{\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.rdrDateInput {\n  position: relative;\n}\n\n.rdrDateInput input {\n    outline: none;\n  }\n\n.rdrDateInput .rdrWarning {\n    position: absolute;\n    font-size: 1.6em;\n    line-height: 1.6em;\n    top: 0;\n    right: .25em;\n    color: #FF0000;\n  }\n\n.rdrDay {\n  box-sizing: inherit;\n  width: calc(100% / 7);\n  position: relative;\n  font: inherit;\n  cursor: pointer;\n}\n\n.rdrDayNumber {\n  display: block;\n  position: relative;\n}\n\n.rdrDayNumber span{\n    color: #1d2429;\n  }\n\n.rdrDayDisabled {\n  cursor: not-allowed;\n}\n\n@supports (-ms-ime-align: auto) {\n  .rdrDay {\n    -webkit-flex-basis: 14.285% !important;\n            flex-basis: 14.285% !important;\n  }\n}\n\n.rdrSelected, .rdrInRange, .rdrStartEdge, .rdrEndEdge{\n  pointer-events: none;\n}\n\n.rdrInRange{}\n\n.rdrDayStartPreview, .rdrDayInPreview, .rdrDayEndPreview{\n  pointer-events: none;\n}\n\n.rdrDayHovered{}\n\n.rdrDayActive{}\n\n.rdrDateRangePickerWrapper{\n  display: -webkit-inline-flex;\n  display: inline-flex;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.rdrDefinedRangesWrapper{}\n\n.rdrStaticRanges{\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n}\n\n.rdrStaticRange{\n  font-size: inherit;\n}\n\n.rdrStaticRangeLabel{}\n\n.rdrInputRanges{}\n\n.rdrInputRange{\n  display: -webkit-flex;\n  display: flex;\n}\n\n.rdrInputRangeInput{}\n", "",{"version":3,"sources":["webpack://node_modules/react-date-range/dist/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,mBAAmB;EAEnB,4BAAoB;EAApB,oBAAoB;EAGZ,8BAAsB;UAAtB,sBAAsB;EAC9B,yBAAyB;MAErB,qBAAqB;UACjB,iBAAiB;AAC3B;;AAEA;EAEE,qBAAa;EAAb,aAAa;EAEL,sCAA8B;UAA9B,8BAA8B;AACxC;;AAEA;EAEU,iBAAS;UAAT,SAAS;EACjB,QAAQ;EACR,kBAAkB;EAClB,cAAc;AAChB;;AAEA;IACI,oBAAoB;EACtB;;AAEF;IACI;EACF;;AAEF;MACM,eAAe;IACjB;;AAEJ,0BAA0B;;AAE1B;EACE,mBAAmB;EAEnB,qBAAa;EAAb,aAAa;EAEL,sCAA8B;UAA9B,8BAA8B;AACxC;;AAEA;EAEU,sBAAc;UAAd,cAAc;EAEtB,qBAAa;EAAb,aAAa;EAEL,+BAAuB;UAAvB,uBAAuB;EAEvB,2BAAmB;UAAnB,mBAAmB;AAC7B;;AAEA,gBAAgB;;AAEhB,eAAe;;AAEf;EACE,mBAAmB;EACnB,eAAe;EACf,aAAa;AACf;;AAEA,iBAAiB;;AAEjB,gBAAgB;;AAEhB;EAEE,qBAAa;EAAb,aAAa;AACf;;AAEA;EAGU,8BAAsB;UAAtB,sBAAsB;AAChC;;AAEA;EAEE,qBAAa;EAAb,aAAa;EAGL,2BAAmB;UAAnB,mBAAmB;AAC7B;;AAEA;EACE,eAAe;AACjB;;AAEA;EAEE,qBAAa;EAAb,aAAa;AACf;;AAEA;EACE,kCAA0B;UAA1B,0BAA0B;EAC1B,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EAEE,qBAAa;EAAb,aAAa;EACb,uBAAe;UAAf,eAAe;AACjB;;AAEA,uBAAuB;;AAEvB,cAAc;;AAEd;EACE,cAAc;AAChB;;AAEA;EACE,yBAAyB;MAErB,qBAAqB;UACjB,iBAAiB;AAC3B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;IACI,aAAa;EACf;;AAEF;IACI,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,MAAM;IACN,YAAY;IACZ,cAAc;EAChB;;AAEF;EACE,mBAAmB;EACnB,qBAAqB;EACrB,kBAAkB;EAClB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,kBAAkB;AACpB;;AAEA;IACI,cAAc;EAChB;;AAEF;EACE,mBAAmB;AACrB;;AAEA;EACE;IACE,sCAA8B;YAA9B,8BAA8B;EAChC;AACF;;AAEA;EACE,oBAAoB;AACtB;;AAEA,YAAY;;AAEZ;EACE,oBAAoB;AACtB;;AAEA,eAAe;;AAEf,cAAc;;AAEd;EAEE,4BAAoB;EAApB,oBAAoB;EACpB,yBAAyB;MAErB,qBAAqB;UACjB,iBAAiB;AAC3B;;AAEA,yBAAyB;;AAEzB;EAEE,qBAAa;EAAb,aAAa;EAGL,8BAAsB;UAAtB,sBAAsB;AAChC;;AAEA;EACE,kBAAkB;AACpB;;AAEA,qBAAqB;;AAErB,gBAAgB;;AAEhB;EAEE,qBAAa;EAAb,aAAa;AACf;;AAEA,oBAAoB","sourcesContent":[".rdrCalendarWrapper {\n  box-sizing: border-box;\n  background: #ffffff;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.rdrDateDisplay{\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.rdrDateDisplayItem{\n  -webkit-box-flex: 1;\n          flex: 1 1;\n  width: 0;\n  text-align: center;\n  color: inherit;\n}\n\n.rdrDateDisplayItem + .rdrDateDisplayItem{\n    margin-left: 0.833em;\n  }\n\n.rdrDateDisplayItem input{\n    text-align: inherit\n  }\n\n.rdrDateDisplayItem input:disabled{\n      cursor: default;\n    }\n\n.rdrDateDisplayItemActive{}\n\n.rdrMonthAndYearWrapper {\n  box-sizing: inherit;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.rdrMonthAndYearPickers{\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.rdrMonthPicker{}\n\n.rdrYearPicker{}\n\n.rdrNextPrevButton {\n  box-sizing: inherit;\n  cursor: pointer;\n  outline: none;\n}\n\n.rdrPprevButton {}\n\n.rdrNextButton {}\n\n.rdrMonths{\n  display: -webkit-box;\n  display: flex;\n}\n\n.rdrMonthsVertical{\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.rdrMonthsHorizontal > div > div > div{\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.rdrMonth{\n  width: 27.667em;\n}\n\n.rdrWeekDays{\n  display: -webkit-box;\n  display: flex;\n}\n\n.rdrWeekDay {\n  flex-basis: calc(100% / 7);\n  box-sizing: inherit;\n  text-align: center;\n}\n\n.rdrDays{\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.rdrDateDisplayWrapper{}\n\n.rdrMonthName{}\n\n.rdrInfiniteMonths{\n  overflow: auto;\n}\n\n.rdrDateRangeWrapper{\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.rdrDateInput {\n  position: relative;\n}\n\n.rdrDateInput input {\n    outline: none;\n  }\n\n.rdrDateInput .rdrWarning {\n    position: absolute;\n    font-size: 1.6em;\n    line-height: 1.6em;\n    top: 0;\n    right: .25em;\n    color: #FF0000;\n  }\n\n.rdrDay {\n  box-sizing: inherit;\n  width: calc(100% / 7);\n  position: relative;\n  font: inherit;\n  cursor: pointer;\n}\n\n.rdrDayNumber {\n  display: block;\n  position: relative;\n}\n\n.rdrDayNumber span{\n    color: #1d2429;\n  }\n\n.rdrDayDisabled {\n  cursor: not-allowed;\n}\n\n@supports (-ms-ime-align: auto) {\n  .rdrDay {\n    flex-basis: 14.285% !important;\n  }\n}\n\n.rdrSelected, .rdrInRange, .rdrStartEdge, .rdrEndEdge{\n  pointer-events: none;\n}\n\n.rdrInRange{}\n\n.rdrDayStartPreview, .rdrDayInPreview, .rdrDayEndPreview{\n  pointer-events: none;\n}\n\n.rdrDayHovered{}\n\n.rdrDayActive{}\n\n.rdrDateRangePickerWrapper{\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.rdrDefinedRangesWrapper{}\n\n.rdrStaticRanges{\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.rdrStaticRange{\n  font-size: inherit;\n}\n\n.rdrStaticRangeLabel{}\n\n.rdrInputRanges{}\n\n.rdrInputRange{\n  display: -webkit-box;\n  display: flex;\n}\n\n.rdrInputRangeInput{}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/react-date-range/dist/theme/default.css":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./node_modules/react-date-range/dist/theme/default.css ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _next_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _next_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".rdrCalendarWrapper{\n  color: #000000;\n  font-size: 12px;\n}\n\n.rdrDateDisplayWrapper{\n  background-color: rgb(239, 242, 247);\n}\n\n.rdrDateDisplay{\n  margin: 0.833em;\n}\n\n.rdrDateDisplayItem{\n  border-radius: 4px;\n  background-color: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px 0 rgba(35, 57, 66, 0.21);\n  border: 1px solid transparent;\n}\n\n.rdrDateDisplayItem input{\n    cursor: pointer;\n    height: 2.5em;\n    line-height: 2.5em;\n    border: 0px;\n    background: transparent;\n    width: 100%;\n    color: #849095;\n  }\n\n.rdrDateDisplayItemActive{\n  border-color: currentColor;\n}\n\n.rdrDateDisplayItemActive input{\n    color: #7d888d\n  }\n\n.rdrMonthAndYearWrapper {\n  -webkit-align-items: center;\n          align-items: center;\n  height: 60px;\n  padding-top: 10px;\n}\n\n.rdrMonthAndYearPickers{\n  font-weight: 600;\n}\n\n.rdrMonthAndYearPickers select{\n    -moz-appearance: none;\n         appearance: none;\n    -webkit-appearance: none;\n    border: 0;\n    background: transparent;\n    padding: 10px 30px 10px 10px;\n    border-radius: 4px;\n    outline: 0;\n    color: #3e484f;\n    background: url(\"data:image/svg+xml;utf8,<svg width='9px' height='6px' viewBox='0 0 9 6' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g id='Artboard' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(-636.000000, -171.000000)' fill-opacity='0.368716033'><g id='input' transform='translate(172.000000, 37.000000)' fill='%230E242F' fill-rule='nonzero'><g id='Group-9' transform='translate(323.000000, 127.000000)'><path d='M142.280245,7.23952813 C141.987305,6.92353472 141.512432,6.92361662 141.219585,7.23971106 C140.926739,7.5558055 140.926815,8.06821394 141.219755,8.38420735 L145.498801,13 L149.780245,8.38162071 C150.073185,8.0656273 150.073261,7.55321886 149.780415,7.23712442 C149.487568,6.92102998 149.012695,6.92094808 148.719755,7.23694149 L145.498801,10.7113732 L142.280245,7.23952813 Z' id='arrow'></path></g></g></g></svg>\") no-repeat;\n    background-position: right 8px center;\n    cursor: pointer;\n    text-align: center\n  }\n\n.rdrMonthAndYearPickers select:hover{\n      background-color: rgba(0,0,0,0.07);\n    }\n\n.rdrMonthPicker, .rdrYearPicker{\n  margin: 0 5px\n}\n\n.rdrNextPrevButton {\n  display: block;\n  width: 24px;\n  height: 24px;\n  margin: 0 0.833em;\n  padding: 0;\n  border: 0;\n  border-radius: 5px;\n  background: #EFF2F7\n}\n\n.rdrNextPrevButton:hover{\n    background: #E1E7F0;\n  }\n\n.rdrNextPrevButton i {\n    display: block;\n    width: 0;\n    height: 0;\n    padding: 0;\n    text-align: center;\n    border-style: solid;\n    margin: auto;\n    -webkit-transform: translate(-3px, 0px);\n            transform: translate(-3px, 0px);\n  }\n\n.rdrPprevButton i {\n    border-width: 4px 6px 4px 4px;\n    border-color: transparent rgb(52, 73, 94) transparent transparent;\n    -webkit-transform: translate(-3px, 0px);\n            transform: translate(-3px, 0px);\n  }\n\n.rdrNextButton i {\n    margin: 0 0 0 7px;\n    border-width: 4px 4px 4px 6px;\n    border-color: transparent transparent transparent rgb(52, 73, 94);\n    -webkit-transform: translate(3px, 0px);\n            transform: translate(3px, 0px);\n  }\n\n.rdrWeekDays {\n  padding: 0 0.833em;\n}\n\n.rdrMonth{\n  padding: 0 0.833em 1.666em 0.833em;\n}\n\n.rdrMonth .rdrWeekDays {\n    padding: 0;\n  }\n\n.rdrMonths.rdrMonthsVertical .rdrMonth:first-child .rdrMonthName{\n  display: none;\n}\n\n.rdrWeekDay {\n  font-weight: 400;\n  line-height: 2.667em;\n  color: rgb(132, 144, 149);\n}\n\n.rdrDay {\n  background: transparent;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border: 0;\n  padding: 0;\n  line-height: 3.000em;\n  height: 3.000em;\n  text-align: center;\n  color: #1d2429\n}\n\n.rdrDay:focus {\n    outline: 0;\n  }\n\n.rdrDayNumber {\n  outline: 0;\n  font-weight: 300;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  top: 5px;\n  bottom: 5px;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n\n.rdrDayToday .rdrDayNumber span{\n  font-weight: 500\n}\n\n.rdrDayToday .rdrDayNumber span:after{\n    content: '';\n    position: absolute;\n    bottom: 4px;\n    left: 50%;\n    -webkit-transform: translate(-50%, 0);\n            transform: translate(-50%, 0);\n    width: 18px;\n    height: 2px;\n    border-radius: 2px;\n    background: #3d91ff;\n  }\n\n.rdrDayToday:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span:after,.rdrDayToday:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span:after,.rdrDayToday:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span:after,.rdrDayToday:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span:after{\n      background: #fff;\n    }\n\n.rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span,.rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span,.rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span,.rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span{\n          color: rgba(255, 255, 255, 0.85);\n        }\n\n.rdrSelected, .rdrInRange, .rdrStartEdge, .rdrEndEdge{\n  background: currentColor;\n  position: absolute;\n  top: 5px;\n  left: 0;\n  right: 0;\n  bottom: 5px;\n}\n\n.rdrSelected{\n  left: 2px;\n  right: 2px;\n}\n\n.rdrInRange{}\n\n.rdrStartEdge{\n  border-top-left-radius: 1.042em;\n  border-bottom-left-radius: 1.042em;\n  left: 2px;\n}\n\n.rdrEndEdge{\n  border-top-right-radius: 1.042em;\n  border-bottom-right-radius: 1.042em;\n  right: 2px;\n}\n\n.rdrSelected{\n  border-radius: 1.042em;\n}\n\n.rdrDayStartOfMonth .rdrInRange, .rdrDayStartOfMonth .rdrEndEdge, .rdrDayStartOfWeek .rdrInRange, .rdrDayStartOfWeek .rdrEndEdge{\n    border-top-left-radius: 1.042em;\n    border-bottom-left-radius: 1.042em;\n    left: 2px;\n  }\n\n.rdrDayEndOfMonth .rdrInRange,  .rdrDayEndOfMonth .rdrStartEdge,  .rdrDayEndOfWeek .rdrInRange,  .rdrDayEndOfWeek .rdrStartEdge{\n    border-top-right-radius: 1.042em;\n    border-bottom-right-radius: 1.042em;\n    right: 2px;\n  }\n\n.rdrDayStartOfMonth .rdrDayInPreview, .rdrDayStartOfMonth .rdrDayEndPreview, .rdrDayStartOfWeek .rdrDayInPreview, .rdrDayStartOfWeek .rdrDayEndPreview{\n    border-top-left-radius: 1.333em;\n    border-bottom-left-radius: 1.333em;\n    border-left-width: 1px;\n    left: 0px;\n  }\n\n.rdrDayEndOfMonth .rdrDayInPreview, .rdrDayEndOfMonth .rdrDayStartPreview, .rdrDayEndOfWeek .rdrDayInPreview, .rdrDayEndOfWeek .rdrDayStartPreview{\n   border-top-right-radius: 1.333em;\n   border-bottom-right-radius: 1.333em;\n   border-right-width: 1px;\n   right: 0px;\n }\n\n.rdrDayStartPreview, .rdrDayInPreview, .rdrDayEndPreview{\n  background: rgba(255, 255, 255, 0.09);\n  position: absolute;\n  top: 3px;\n  left: 0px;\n  right: 0px;\n  bottom: 3px;\n  pointer-events: none;\n  border: 0px solid currentColor;\n  z-index: 1;\n}\n\n.rdrDayStartPreview{\n  border-top-width: 1px;\n  border-left-width: 1px;\n  border-bottom-width: 1px;\n  border-top-left-radius: 1.333em;\n  border-bottom-left-radius: 1.333em;\n  left: 0px;\n}\n\n.rdrDayInPreview{\n  border-top-width: 1px;\n  border-bottom-width: 1px;\n}\n\n.rdrDayEndPreview{\n  border-top-width: 1px;\n  border-right-width: 1px;\n  border-bottom-width: 1px;\n  border-top-right-radius: 1.333em;\n  border-bottom-right-radius: 1.333em;\n  right: 2px;\n  right: 0px;\n}\n\n.rdrDefinedRangesWrapper{\n  font-size: 12px;\n  width: 226px;\n  border-right: solid 1px #eff2f7;\n  background: #fff;\n}\n\n.rdrDefinedRangesWrapper .rdrStaticRangeSelected{\n    color: currentColor;\n    font-weight: 600;\n  }\n\n.rdrStaticRange{\n  border: 0;\n  cursor: pointer;\n  display: block;\n  outline: 0;\n  border-bottom: 1px solid #eff2f7;\n  padding: 0;\n  background: #fff\n}\n\n.rdrStaticRange:hover .rdrStaticRangeLabel,.rdrStaticRange:focus .rdrStaticRangeLabel{\n      background: #eff2f7;\n    }\n\n.rdrStaticRangeLabel{\n  display: block;\n  outline: 0;\n  line-height: 18px;\n  padding: 10px 20px;\n  text-align: left;\n}\n\n.rdrInputRanges{\n  padding: 10px 0;\n}\n\n.rdrInputRange{\n  -webkit-align-items: center;\n          align-items: center;\n  padding: 5px 20px;\n}\n\n.rdrInputRangeInput{\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  border-radius: 4px;\n  text-align: center;\n  border: solid 1px rgb(222, 231, 235);\n  margin-right: 10px;\n  color: rgb(108, 118, 122)\n}\n\n.rdrInputRangeInput:focus, .rdrInputRangeInput:hover{\n    border-color: rgb(180, 191, 196);\n    outline: 0;\n    color: #333;\n  }\n\n.rdrCalendarWrapper:not(.rdrDateRangeWrapper) .rdrDayHovered .rdrDayNumber:after{\n  content: '';\n  border: 1px solid currentColor;\n  border-radius: 1.333em;\n  position: absolute;\n  top: -2px;\n  bottom: -2px;\n  left: 0px;\n  right: 0px;\n  background: transparent;\n}\n\n.rdrDayPassive{\n  pointer-events: none;\n}\n\n.rdrDayPassive .rdrDayNumber span{\n    color: #d5dce0;\n  }\n\n.rdrDayPassive .rdrInRange, .rdrDayPassive .rdrStartEdge, .rdrDayPassive .rdrEndEdge, .rdrDayPassive .rdrSelected, .rdrDayPassive .rdrDayStartPreview, .rdrDayPassive .rdrDayInPreview, .rdrDayPassive .rdrDayEndPreview{\n    display: none;\n  }\n\n.rdrDayDisabled {\n  background-color: rgb(248, 248, 248);\n}\n\n.rdrDayDisabled .rdrDayNumber span{\n    color: #aeb9bf;\n  }\n\n.rdrDayDisabled .rdrInRange, .rdrDayDisabled .rdrStartEdge, .rdrDayDisabled .rdrEndEdge, .rdrDayDisabled .rdrSelected, .rdrDayDisabled .rdrDayStartPreview, .rdrDayDisabled .rdrDayInPreview, .rdrDayDisabled .rdrDayEndPreview{\n    -webkit-filter: grayscale(100%) opacity(60%);\n            filter: grayscale(100%) opacity(60%);\n  }\n\n.rdrMonthName{\n  text-align: left;\n  font-weight: 600;\n  color: #849095;\n  padding: 0.833em;\n}\n", "",{"version":3,"sources":["webpack://node_modules/react-date-range/dist/theme/default.css"],"names":[],"mappings":"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","sourcesContent":[".rdrCalendarWrapper{\n  color: #000000;\n  font-size: 12px;\n}\n\n.rdrDateDisplayWrapper{\n  background-color: rgb(239, 242, 247);\n}\n\n.rdrDateDisplay{\n  margin: 0.833em;\n}\n\n.rdrDateDisplayItem{\n  border-radius: 4px;\n  background-color: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px 0 rgba(35, 57, 66, 0.21);\n  border: 1px solid transparent;\n}\n\n.rdrDateDisplayItem input{\n    cursor: pointer;\n    height: 2.5em;\n    line-height: 2.5em;\n    border: 0px;\n    background: transparent;\n    width: 100%;\n    color: #849095;\n  }\n\n.rdrDateDisplayItemActive{\n  border-color: currentColor;\n}\n\n.rdrDateDisplayItemActive input{\n    color: #7d888d\n  }\n\n.rdrMonthAndYearWrapper {\n  -webkit-box-align: center;\n          align-items: center;\n  height: 60px;\n  padding-top: 10px;\n}\n\n.rdrMonthAndYearPickers{\n  font-weight: 600;\n}\n\n.rdrMonthAndYearPickers select{\n    -moz-appearance: none;\n         appearance: none;\n    -webkit-appearance: none;\n    border: 0;\n    background: transparent;\n    padding: 10px 30px 10px 10px;\n    border-radius: 4px;\n    outline: 0;\n    color: #3e484f;\n    background: url(\"data:image/svg+xml;utf8,<svg width='9px' height='6px' viewBox='0 0 9 6' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g id='Artboard' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(-636.000000, -171.000000)' fill-opacity='0.368716033'><g id='input' transform='translate(172.000000, 37.000000)' fill='%230E242F' fill-rule='nonzero'><g id='Group-9' transform='translate(323.000000, 127.000000)'><path d='M142.280245,7.23952813 C141.987305,6.92353472 141.512432,6.92361662 141.219585,7.23971106 C140.926739,7.5558055 140.926815,8.06821394 141.219755,8.38420735 L145.498801,13 L149.780245,8.38162071 C150.073185,8.0656273 150.073261,7.55321886 149.780415,7.23712442 C149.487568,6.92102998 149.012695,6.92094808 148.719755,7.23694149 L145.498801,10.7113732 L142.280245,7.23952813 Z' id='arrow'></path></g></g></g></svg>\") no-repeat;\n    background-position: right 8px center;\n    cursor: pointer;\n    text-align: center\n  }\n\n.rdrMonthAndYearPickers select:hover{\n      background-color: rgba(0,0,0,0.07);\n    }\n\n.rdrMonthPicker, .rdrYearPicker{\n  margin: 0 5px\n}\n\n.rdrNextPrevButton {\n  display: block;\n  width: 24px;\n  height: 24px;\n  margin: 0 0.833em;\n  padding: 0;\n  border: 0;\n  border-radius: 5px;\n  background: #EFF2F7\n}\n\n.rdrNextPrevButton:hover{\n    background: #E1E7F0;\n  }\n\n.rdrNextPrevButton i {\n    display: block;\n    width: 0;\n    height: 0;\n    padding: 0;\n    text-align: center;\n    border-style: solid;\n    margin: auto;\n    -webkit-transform: translate(-3px, 0px);\n            transform: translate(-3px, 0px);\n  }\n\n.rdrPprevButton i {\n    border-width: 4px 6px 4px 4px;\n    border-color: transparent rgb(52, 73, 94) transparent transparent;\n    -webkit-transform: translate(-3px, 0px);\n            transform: translate(-3px, 0px);\n  }\n\n.rdrNextButton i {\n    margin: 0 0 0 7px;\n    border-width: 4px 4px 4px 6px;\n    border-color: transparent transparent transparent rgb(52, 73, 94);\n    -webkit-transform: translate(3px, 0px);\n            transform: translate(3px, 0px);\n  }\n\n.rdrWeekDays {\n  padding: 0 0.833em;\n}\n\n.rdrMonth{\n  padding: 0 0.833em 1.666em 0.833em;\n}\n\n.rdrMonth .rdrWeekDays {\n    padding: 0;\n  }\n\n.rdrMonths.rdrMonthsVertical .rdrMonth:first-child .rdrMonthName{\n  display: none;\n}\n\n.rdrWeekDay {\n  font-weight: 400;\n  line-height: 2.667em;\n  color: rgb(132, 144, 149);\n}\n\n.rdrDay {\n  background: transparent;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border: 0;\n  padding: 0;\n  line-height: 3.000em;\n  height: 3.000em;\n  text-align: center;\n  color: #1d2429\n}\n\n.rdrDay:focus {\n    outline: 0;\n  }\n\n.rdrDayNumber {\n  outline: 0;\n  font-weight: 300;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  top: 5px;\n  bottom: 5px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.rdrDayToday .rdrDayNumber span{\n  font-weight: 500\n}\n\n.rdrDayToday .rdrDayNumber span:after{\n    content: '';\n    position: absolute;\n    bottom: 4px;\n    left: 50%;\n    -webkit-transform: translate(-50%, 0);\n            transform: translate(-50%, 0);\n    width: 18px;\n    height: 2px;\n    border-radius: 2px;\n    background: #3d91ff;\n  }\n\n.rdrDayToday:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span:after,.rdrDayToday:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span:after,.rdrDayToday:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span:after,.rdrDayToday:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span:after{\n      background: #fff;\n    }\n\n.rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span,.rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span,.rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span,.rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span{\n          color: rgba(255, 255, 255, 0.85);\n        }\n\n.rdrSelected, .rdrInRange, .rdrStartEdge, .rdrEndEdge{\n  background: currentColor;\n  position: absolute;\n  top: 5px;\n  left: 0;\n  right: 0;\n  bottom: 5px;\n}\n\n.rdrSelected{\n  left: 2px;\n  right: 2px;\n}\n\n.rdrInRange{}\n\n.rdrStartEdge{\n  border-top-left-radius: 1.042em;\n  border-bottom-left-radius: 1.042em;\n  left: 2px;\n}\n\n.rdrEndEdge{\n  border-top-right-radius: 1.042em;\n  border-bottom-right-radius: 1.042em;\n  right: 2px;\n}\n\n.rdrSelected{\n  border-radius: 1.042em;\n}\n\n.rdrDayStartOfMonth .rdrInRange, .rdrDayStartOfMonth .rdrEndEdge, .rdrDayStartOfWeek .rdrInRange, .rdrDayStartOfWeek .rdrEndEdge{\n    border-top-left-radius: 1.042em;\n    border-bottom-left-radius: 1.042em;\n    left: 2px;\n  }\n\n.rdrDayEndOfMonth .rdrInRange,  .rdrDayEndOfMonth .rdrStartEdge,  .rdrDayEndOfWeek .rdrInRange,  .rdrDayEndOfWeek .rdrStartEdge{\n    border-top-right-radius: 1.042em;\n    border-bottom-right-radius: 1.042em;\n    right: 2px;\n  }\n\n.rdrDayStartOfMonth .rdrDayInPreview, .rdrDayStartOfMonth .rdrDayEndPreview, .rdrDayStartOfWeek .rdrDayInPreview, .rdrDayStartOfWeek .rdrDayEndPreview{\n    border-top-left-radius: 1.333em;\n    border-bottom-left-radius: 1.333em;\n    border-left-width: 1px;\n    left: 0px;\n  }\n\n.rdrDayEndOfMonth .rdrDayInPreview, .rdrDayEndOfMonth .rdrDayStartPreview, .rdrDayEndOfWeek .rdrDayInPreview, .rdrDayEndOfWeek .rdrDayStartPreview{\n   border-top-right-radius: 1.333em;\n   border-bottom-right-radius: 1.333em;\n   border-right-width: 1px;\n   right: 0px;\n }\n\n.rdrDayStartPreview, .rdrDayInPreview, .rdrDayEndPreview{\n  background: rgba(255, 255, 255, 0.09);\n  position: absolute;\n  top: 3px;\n  left: 0px;\n  right: 0px;\n  bottom: 3px;\n  pointer-events: none;\n  border: 0px solid currentColor;\n  z-index: 1;\n}\n\n.rdrDayStartPreview{\n  border-top-width: 1px;\n  border-left-width: 1px;\n  border-bottom-width: 1px;\n  border-top-left-radius: 1.333em;\n  border-bottom-left-radius: 1.333em;\n  left: 0px;\n}\n\n.rdrDayInPreview{\n  border-top-width: 1px;\n  border-bottom-width: 1px;\n}\n\n.rdrDayEndPreview{\n  border-top-width: 1px;\n  border-right-width: 1px;\n  border-bottom-width: 1px;\n  border-top-right-radius: 1.333em;\n  border-bottom-right-radius: 1.333em;\n  right: 2px;\n  right: 0px;\n}\n\n.rdrDefinedRangesWrapper{\n  font-size: 12px;\n  width: 226px;\n  border-right: solid 1px #eff2f7;\n  background: #fff;\n}\n\n.rdrDefinedRangesWrapper .rdrStaticRangeSelected{\n    color: currentColor;\n    font-weight: 600;\n  }\n\n.rdrStaticRange{\n  border: 0;\n  cursor: pointer;\n  display: block;\n  outline: 0;\n  border-bottom: 1px solid #eff2f7;\n  padding: 0;\n  background: #fff\n}\n\n.rdrStaticRange:hover .rdrStaticRangeLabel,.rdrStaticRange:focus .rdrStaticRangeLabel{\n      background: #eff2f7;\n    }\n\n.rdrStaticRangeLabel{\n  display: block;\n  outline: 0;\n  line-height: 18px;\n  padding: 10px 20px;\n  text-align: left;\n}\n\n.rdrInputRanges{\n  padding: 10px 0;\n}\n\n.rdrInputRange{\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 5px 20px;\n}\n\n.rdrInputRangeInput{\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  border-radius: 4px;\n  text-align: center;\n  border: solid 1px rgb(222, 231, 235);\n  margin-right: 10px;\n  color: rgb(108, 118, 122)\n}\n\n.rdrInputRangeInput:focus, .rdrInputRangeInput:hover{\n    border-color: rgb(180, 191, 196);\n    outline: 0;\n    color: #333;\n  }\n\n.rdrCalendarWrapper:not(.rdrDateRangeWrapper) .rdrDayHovered .rdrDayNumber:after{\n  content: '';\n  border: 1px solid currentColor;\n  border-radius: 1.333em;\n  position: absolute;\n  top: -2px;\n  bottom: -2px;\n  left: 0px;\n  right: 0px;\n  background: transparent;\n}\n\n.rdrDayPassive{\n  pointer-events: none;\n}\n\n.rdrDayPassive .rdrDayNumber span{\n    color: #d5dce0;\n  }\n\n.rdrDayPassive .rdrInRange, .rdrDayPassive .rdrStartEdge, .rdrDayPassive .rdrEndEdge, .rdrDayPassive .rdrSelected, .rdrDayPassive .rdrDayStartPreview, .rdrDayPassive .rdrDayInPreview, .rdrDayPassive .rdrDayEndPreview{\n    display: none;\n  }\n\n.rdrDayDisabled {\n  background-color: rgb(248, 248, 248);\n}\n\n.rdrDayDisabled .rdrDayNumber span{\n    color: #aeb9bf;\n  }\n\n.rdrDayDisabled .rdrInRange, .rdrDayDisabled .rdrStartEdge, .rdrDayDisabled .rdrEndEdge, .rdrDayDisabled .rdrSelected, .rdrDayDisabled .rdrDayStartPreview, .rdrDayDisabled .rdrDayInPreview, .rdrDayDisabled .rdrDayEndPreview{\n    -webkit-filter: grayscale(100%) opacity(60%);\n            filter: grayscale(100%) opacity(60%);\n  }\n\n.rdrMonthName{\n  text-align: left;\n  font-weight: 600;\n  color: #849095;\n  padding: 0.833em;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/react-date-range/dist/styles.css":
/*!*******************************************************!*\
  !*** ./node_modules/react-date-range/dist/styles.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./styles.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/react-date-range/dist/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./styles.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/react-date-range/dist/styles.css",
      function () {
        content = __webpack_require__(/*! !../../next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./styles.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/react-date-range/dist/styles.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/react-date-range/dist/theme/default.css":
/*!**************************************************************!*\
  !*** ./node_modules/react-date-range/dist/theme/default.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./default.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/react-date-range/dist/theme/default.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./default.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/react-date-range/dist/theme/default.css",
      function () {
        content = __webpack_require__(/*! !../../../next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./default.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/react-date-range/dist/theme/default.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXNlcnZhdGlvbi9SZXNlcnZhdGlvbkZvcm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlLXJhbmdlL2Rpc3Qvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGUtcmFuZ2UvZGlzdC90aGVtZS9kZWZhdWx0LmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGUtcmFuZ2UvZGlzdC9zdHlsZXMuY3NzP2M1OGMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlLXJhbmdlL2Rpc3QvdGhlbWUvZGVmYXVsdC5jc3M/NTdjYyJdLCJuYW1lcyI6WyJRb250b0Nvbm5lY3RvciIsIndpdGhTdHlsZXMiLCJhbHRlcm5hdGl2ZUxhYmVsIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYWN0aXZlIiwiYm9yZGVyQ29sb3IiLCJjb21wbGV0ZWQiLCJsaW5lIiwiYm9yZGVyVG9wV2lkdGgiLCJib3JkZXJSYWRpdXMiLCJTdGVwQ29ubmVjdG9yIiwidXNlUW9udG9TdGVwSWNvblN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwiY29sb3IiLCJkaXNwbGF5IiwiaGVpZ2h0IiwiYWxpZ25JdGVtcyIsImNpcmNsZSIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwiZm9udFNpemUiLCJRb250b1N0ZXBJY29uIiwicHJvcHMiLCJjbGFzc2VzIiwiY2xzeCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJDb2xvcmxpYkNvbm5lY3RvciIsImJhY2tncm91bmRJbWFnZSIsImJvcmRlciIsInVzZUNvbG9ybGliU3RlcEljb25TdHlsZXMiLCJqdXN0aWZ5Q29udGVudCIsImJveFNoYWRvdyIsIkNvbG9ybGliU3RlcEljb24iLCJpY29ucyIsIlN0cmluZyIsImljb24iLCJub2RlIiwidXNlU3R5bGVzIiwidGhlbWUiLCJidXR0b24iLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJpbnN0cnVjdGlvbnMiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJmb3JtQ29udHJvbCIsIm1hcmdpbiIsIm1pbldpZHRoIiwic2VsZWN0RW1wdHkiLCJnZXRTdGVwcyIsIlJlc2VydmF0aW9uRm9ybSIsInNuYWNrYmFyU2hvd01lc3NhZ2UiLCJ1c2VTdGF0ZSIsImFjdGl2ZVN0ZXAiLCJzZXRBY3RpdmVTdGVwIiwidXNlRm9ybSIsInJlVmFsaWRhdGVNb2RlIiwic2hvdWxkVW5yZWdpc3RlciIsImRlZmF1bHRWYWx1ZXMiLCJnaXRlIiwibmJQZXJzIiwibmJFbmYiLCJuYkNoaWVuIiwibGl0RmFpdCIsIm5ld3NsZXR0ZXIiLCJub20iLCJwcmVub20iLCJhZHJlc3NlIiwiY3AiLCJ2aWxsZSIsInRlbCIsIm1haWwiLCJjb250cm9sIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJkYXRlQXJyaXZlZSIsInNldERhdGVBcnJpdmVlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZVJlZiIsInVzZVJlZiIsInN0ZXBzIiwic2VsZWN0ZWREYXRlQXJyaXZlZSIsInNldFNlbGVjdGVkRGF0ZUFycml2ZWUiLCJoYW5kbGVEYXRlQ2hhbmdlQXJyaXZlZSIsImRhdGUiLCJzZXRTZWxlY3RlZERhdGVEZXBhcnQiLCJzZWxlY3RlZERhdGVEZXBhcnQiLCJoYW5kbGVEYXRlQ2hhbmdlRGVwYXJ0IiwiaGFuZGxlTmV4dCIsInByZXZBY3RpdmVTdGVwIiwiaGFuZGxlQmFjayIsImhhbmRsZVJlc2V0IiwiZ2l0ZXMiLCJzZXRHaXRlcyIsImxpc3REZXNHaXRlcyIsImxpc3RHaXRlc05vbXMiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImluZm9Mb2MiLCJtYXAiLCJpIiwic2x1ZyIsInNocmluayIsIkRhdGVGbnNVdGlscyIsImluZm9Db21wIiwiQ29vcmQiLCJyZWNhcCIsImdldFN0ZXBDb250ZW50Iiwic3RlcCIsIm9uU3VibWl0IiwiY3VycmVudCIsImV4ZWN1dGVBc3luYyIsInRva2VuIiwicmVzZXQiLCJjcmVhdGVSZXNlcnZhdGlvbiIsInJlc3VsdCIsImRlamFSZXNlcnZlTWVzc2FnZSIsIm1lc3NhZ2UiLCJsYWJlbCIsImxlbmd0aCIsIlJFQ0FQVENIQV9TRUNSRVRfS0VZIiwid2l0aFNuYWNrYmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FDMkM7O0NBQ087O0FBRWxEO0FBY0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLDJFQUFVLENBQUM7QUFDakNDLGtCQUFnQixFQUFFO0FBQ2pCQyxPQUFHLEVBQUUsRUFEWTtBQUVqQkMsUUFBSSxFQUFFLG1CQUZXO0FBR2pCQyxTQUFLLEVBQUU7QUFIVSxHQURlO0FBTWpDQyxRQUFNLEVBQUU7QUFDUCxlQUFXO0FBQ1ZDLGlCQUFXLEVBQUU7QUFESDtBQURKLEdBTnlCO0FBV2pDQyxXQUFTLEVBQUU7QUFDVixlQUFXO0FBQ1ZELGlCQUFXLEVBQUU7QUFESDtBQURELEdBWHNCO0FBZ0JqQ0UsTUFBSSxFQUFFO0FBQ0xGLGVBQVcsRUFBRSxTQURSO0FBRUxHLGtCQUFjLEVBQUUsQ0FGWDtBQUdMQyxnQkFBWSxFQUFFO0FBSFQ7QUFoQjJCLENBQUQsQ0FBVixDQXFCcEJDLHdFQXJCb0IsQ0FBdkI7QUF1QkEsSUFBTUMsc0JBQXNCLEdBQUdDLDJFQUFVLENBQUM7QUFDekNDLE1BQUksRUFBRTtBQUNMQyxTQUFLLEVBQUUsU0FERjtBQUVMQyxXQUFPLEVBQUUsTUFGSjtBQUdMQyxVQUFNLEVBQUUsRUFISDtB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WSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksOENB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LG1CQUFPLENBQUMsd1VBQXlKOztBQUUzTDs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSx3VUFBeUo7QUFDL0o7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyx3VUFBeUo7O0FBRW5MOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzZXJ2YXRpb24uY2Q4OWU1MDJjNGRkNjJhYjI4Y2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpc3RHaXRlc05vbXMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgU3RlcHBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdGVwcGVyJztcclxuaW1wb3J0IFN0ZXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcCc7XHJcbmltcG9ydCBTdGVwTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcExhYmVsJztcclxuaW1wb3J0IENoZWNrIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGVjayc7XHJcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NldHRpbmdzJztcclxuaW1wb3J0IFN0ZXBDb25uZWN0b3IgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcENvbm5lY3Rvcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBIb3VzZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hvdXNlJztcclxuaW1wb3J0IEVtb2ppUGVvcGxlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRW1vamlQZW9wbGUnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCAncmVhY3QtZGF0ZS1yYW5nZS9kaXN0L3N0eWxlcy5jc3MnOyAvLyBtYWluIHN0eWxlIGZpbGVcclxuaW1wb3J0ICdyZWFjdC1kYXRlLXJhbmdlL2Rpc3QvdGhlbWUvZGVmYXVsdC5jc3MnOyAvLyB0aGVtZSBjc3MgZmlsZVxyXG5cclxuaW1wb3J0IHtcclxuXHRDaGVja2JveCxcclxuXHRDb250YWluZXIsXHJcblx0Rm9ybUNvbnRyb2wsXHJcblx0Rm9ybUNvbnRyb2xMYWJlbCxcclxuXHRGb3JtR3JvdXAsXHJcblx0Rm9ybUxhYmVsLFxyXG5cdElucHV0TGFiZWwsXHJcblx0TWVudUl0ZW0sXHJcblx0U2VsZWN0LFxyXG5cdFN3aXRjaCxcclxuXHRUZXh0RmllbGQsXHJcblx0Q2lyY3VsYXJQcm9ncmVzcyxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgRGF0ZUZuc1V0aWxzIGZyb20gJ0BkYXRlLWlvL2RhdGUtZm5zJztcclxuaW1wb3J0IHtcclxuXHRNdWlQaWNrZXJzVXRpbHNQcm92aWRlcixcclxuXHRLZXlib2FyZERhdGVQaWNrZXIsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL3BpY2tlcnMnO1xyXG5pbXBvcnQgeyBjcmVhdGVSZXNlcnZhdGlvbiB9IGZyb20gJy4uLy4uL2FjdGlvbnMvcmVzZXJ2YXRpb25BY3Rpb25zJztcclxuaW1wb3J0IFJlQ0FQVENIQSBmcm9tICdyZWFjdC1nb29nbGUtcmVjYXB0Y2hhJztcclxuaW1wb3J0IHsgUkVDQVBUQ0hBX1NFQ1JFVF9LRVkgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQgeyB3aXRoU25hY2tiYXIgfSBmcm9tICcuLi9IT0MvU25hY2tiYXInO1xyXG5cclxuY29uc3QgUW9udG9Db25uZWN0b3IgPSB3aXRoU3R5bGVzKHtcclxuXHRhbHRlcm5hdGl2ZUxhYmVsOiB7XHJcblx0XHR0b3A6IDEwLFxyXG5cdFx0bGVmdDogJ2NhbGMoLTUwJSArIDE2cHgpJyxcclxuXHRcdHJpZ2h0OiAnY2FsYyg1MCUgKyAxNnB4KScsXHJcblx0fSxcclxuXHRhY3RpdmU6IHtcclxuXHRcdCcmICRsaW5lJzoge1xyXG5cdFx0XHRib3JkZXJDb2xvcjogJyM3ODRhZjQnLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGNvbXBsZXRlZDoge1xyXG5cdFx0JyYgJGxpbmUnOiB7XHJcblx0XHRcdGJvcmRlckNvbG9yOiAnIzc4NGFmNCcsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0bGluZToge1xyXG5cdFx0Ym9yZGVyQ29sb3I6ICcjZWFlYWYwJyxcclxuXHRcdGJvcmRlclRvcFdpZHRoOiAzLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAxLFxyXG5cdH0sXHJcbn0pKFN0ZXBDb25uZWN0b3IpO1xyXG5cclxuY29uc3QgdXNlUW9udG9TdGVwSWNvblN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdGNvbG9yOiAnI2VhZWFmMCcsXHJcblx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRoZWlnaHQ6IDIyLFxyXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0fSxcclxuXHRhY3RpdmU6IHtcclxuXHRcdGNvbG9yOiAnIzc4NGFmNCcsXHJcblx0fSxcclxuXHRjaXJjbGU6IHtcclxuXHRcdHdpZHRoOiA4LFxyXG5cdFx0aGVpZ2h0OiA4LFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAnNTAlJyxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcicsXHJcblx0fSxcclxuXHRjb21wbGV0ZWQ6IHtcclxuXHRcdGNvbG9yOiAnIzc4NGFmNCcsXHJcblx0XHR6SW5kZXg6IDEsXHJcblx0XHRmb250U2l6ZTogMTgsXHJcblx0fSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBRb250b1N0ZXBJY29uKHByb3BzKSB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVFvbnRvU3RlcEljb25TdHlsZXMoKTtcclxuXHRjb25zdCB7IGFjdGl2ZSwgY29tcGxldGVkIH0gPSBwcm9wcztcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwge1xyXG5cdFx0XHRcdFtjbGFzc2VzLmFjdGl2ZV06IGFjdGl2ZSxcclxuXHRcdFx0fSl9PlxyXG5cdFx0XHR7Y29tcGxldGVkID8gKFxyXG5cdFx0XHRcdDxDaGVjayBjbGFzc05hbWU9e2NsYXNzZXMuY29tcGxldGVkfSAvPlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNpcmNsZX0gLz5cclxuXHRcdFx0KX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcblFvbnRvU3RlcEljb24ucHJvcFR5cGVzID0ge1xyXG5cdC8qKlxyXG5cdCAqIFdoZXRoZXIgdGhpcyBzdGVwIGlzIGFjdGl2ZS5cclxuXHQgKi9cclxuXHRhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxyXG5cdC8qKlxyXG5cdCAqIE1hcmsgdGhlIHN0ZXAgYXMgY29tcGxldGVkLiBJcyBwYXNzZWQgdG8gY2hpbGQgY29tcG9uZW50cy5cclxuXHQgKi9cclxuXHRjb21wbGV0ZWQ6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuY29uc3QgQ29sb3JsaWJDb25uZWN0b3IgPSB3aXRoU3R5bGVzKHtcclxuXHRhbHRlcm5hdGl2ZUxhYmVsOiB7XHJcblx0XHR0b3A6IDIyLFxyXG5cdH0sXHJcblx0YWN0aXZlOiB7XHJcblx0XHQnJiAkbGluZSc6IHtcclxuXHRcdFx0YmFja2dyb3VuZEltYWdlOlxyXG5cdFx0XHRcdCdsaW5lYXItZ3JhZGllbnQoIDk1ZGVnLHJnYigyNDIsMTEzLDMzKSAwJSxyZ2IoMjMzLDY0LDg3KSA1MCUscmdiKDEzOCwzNSwxMzUpIDEwMCUpJyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRjb21wbGV0ZWQ6IHtcclxuXHRcdCcmICRsaW5lJzoge1xyXG5cdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6XHJcblx0XHRcdFx0J2xpbmVhci1ncmFkaWVudCggOTVkZWcscmdiKDI0MiwxMTMsMzMpIDAlLHJnYigyMzMsNjQsODcpIDUwJSxyZ2IoMTM4LDM1LDEzNSkgMTAwJSknLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGxpbmU6IHtcclxuXHRcdGhlaWdodDogMyxcclxuXHRcdGJvcmRlcjogMCxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJyNlYWVhZjAnLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAxLFxyXG5cdH0sXHJcbn0pKFN0ZXBDb25uZWN0b3IpO1xyXG5cclxuY29uc3QgdXNlQ29sb3JsaWJTdGVwSWNvblN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJyNjY2MnLFxyXG5cdFx0ekluZGV4OiAxLFxyXG5cdFx0Y29sb3I6ICcjZmZmJyxcclxuXHRcdHdpZHRoOiA1MCxcclxuXHRcdGhlaWdodDogNTAsXHJcblx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0fSxcclxuXHRhY3RpdmU6IHtcclxuXHRcdGJhY2tncm91bmRJbWFnZTpcclxuXHRcdFx0J2xpbmVhci1ncmFkaWVudCggMTM2ZGVnLCByZ2IoMjQyLDExMywzMykgMCUsIHJnYigyMzMsNjQsODcpIDUwJSwgcmdiKDEzOCwzNSwxMzUpIDEwMCUpJyxcclxuXHRcdGJveFNoYWRvdzogJzAgNHB4IDEwcHggMCByZ2JhKDAsMCwwLC4yNSknLFxyXG5cdH0sXHJcblx0Y29tcGxldGVkOiB7XHJcblx0XHRiYWNrZ3JvdW5kSW1hZ2U6XHJcblx0XHRcdCdsaW5lYXItZ3JhZGllbnQoIDEzNmRlZywgcmdiKDI0MiwxMTMsMzMpIDAlLCByZ2IoMjMzLDY0LDg3KSA1MCUsIHJnYigxMzgsMzUsMTM1KSAxMDAlKScsXHJcblx0fSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBDb2xvcmxpYlN0ZXBJY29uKHByb3BzKSB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZUNvbG9ybGliU3RlcEljb25TdHlsZXMoKTtcclxuXHRjb25zdCB7IGFjdGl2ZSwgY29tcGxldGVkIH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgaWNvbnMgPSB7XHJcblx0XHQxOiA8SG91c2VJY29uIC8+LFxyXG5cdFx0MjogPFNldHRpbmdzSWNvbiAvPixcclxuXHRcdDM6IDxFbW9qaVBlb3BsZUljb24gLz4sXHJcblx0XHQ0OiA8Q2hlY2tDaXJjbGVJY29uIC8+LFxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsIHtcclxuXHRcdFx0XHRbY2xhc3Nlcy5hY3RpdmVdOiBhY3RpdmUsXHJcblx0XHRcdFx0W2NsYXNzZXMuY29tcGxldGVkXTogY29tcGxldGVkLFxyXG5cdFx0XHR9KX0+XHJcblx0XHRcdHtpY29uc1tTdHJpbmcocHJvcHMuaWNvbildfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuQ29sb3JsaWJTdGVwSWNvbi5wcm9wVHlwZXMgPSB7XHJcblx0LyoqXHJcblx0ICogV2hldGhlciB0aGlzIHN0ZXAgaXMgYWN0aXZlLlxyXG5cdCAqL1xyXG5cdGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXHJcblx0LyoqXHJcblx0ICogTWFyayB0aGUgc3RlcCBhcyBjb21wbGV0ZWQuIElzIHBhc3NlZCB0byBjaGlsZCBjb21wb25lbnRzLlxyXG5cdCAqL1xyXG5cdGNvbXBsZXRlZDogUHJvcFR5cGVzLmJvb2wsXHJcblx0LyoqXHJcblx0ICogVGhlIGxhYmVsIGRpc3BsYXllZCBpbiB0aGUgc3RlcCBpY29uLlxyXG5cdCAqL1xyXG5cdGljb246IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0cm9vdDoge1xyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHR9LFxyXG5cdGJ1dHRvbjoge1xyXG5cdFx0bWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0fSxcclxuXHRpbnN0cnVjdGlvbnM6IHtcclxuXHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygxKSxcclxuXHR9LFxyXG5cdGZvcm1Db250cm9sOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHRtaW5XaWR0aDogMTIwLFxyXG5cdH0sXHJcblx0c2VsZWN0RW1wdHk6IHtcclxuXHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBnZXRTdGVwcygpIHtcclxuXHRyZXR1cm4gW1xyXG5cdFx0J0luZm9ybWF0aW9uIHN1ciBsYSBsb2NhdGlvbicsXHJcblx0XHQnSW5mb3JtYXRpb25zIGNvbXBsw6ltZW50YWlyZXMnLFxyXG5cdFx0J1ZvcyBjb29yZG9ubsOpZXMnLFxyXG5cdFx0J1LDqWNhcGl0dWxhdGlmJyxcclxuXHRdO1xyXG59XHJcblxyXG5jb25zdCBSZXNlcnZhdGlvbkZvcm0gPSAoeyBzbmFja2JhclNob3dNZXNzYWdlIH0pID0+IHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0Y29uc3QgW2FjdGl2ZVN0ZXAsIHNldEFjdGl2ZVN0ZXBdID0gdXNlU3RhdGUoMCk7XHJcblx0Y29uc3QgeyBjb250cm9sLCByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKHtcclxuXHRcdHJlVmFsaWRhdGVNb2RlOiAnb25DaGFuZ2UnLFxyXG5cdFx0c2hvdWxkVW5yZWdpc3RlcjogZmFsc2UsXHJcblx0XHRkZWZhdWx0VmFsdWVzOiB7XHJcblx0XHRcdGdpdGU6ICdtYW5vbGEnLFxyXG5cdFx0XHRuYlBlcnM6IDEwLFxyXG5cdFx0XHRuYkVuZjogNSxcclxuXHRcdFx0bmJDaGllbjogMSxcclxuXHRcdFx0bGl0RmFpdDogdHJ1ZSxcclxuXHRcdFx0bmV3c2xldHRlcjogdHJ1ZSxcclxuXHJcblx0XHRcdG5vbTogJ0xhcGllcnJlJyxcclxuXHRcdFx0cHJlbm9tOiAnSm9zc2ljJyxcclxuXHRcdFx0YWRyZXNzZTogJzE4IHJ1ZSB0ZXN0JyxcclxuXHRcdFx0Y3A6ICc1MTAwMCcsXHJcblx0XHRcdHZpbGxlOiAnbWFWaWxsZScsXHJcblx0XHRcdHRlbDogJzA2IDE1IDU1IDU1IDU1JyxcclxuXHRcdFx0bWFpbDogJ2pvc3NpYy5sYXBpZXJyZUBnbWFpbC5jb20nLFxyXG5cdFx0fSxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgW2RhdGVBcnJpdmVlLCBzZXREYXRlQXJyaXZlZV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdGNvbnN0IHJlUmVmID0gdXNlUmVmKCk7XHJcblxyXG5cdGNvbnN0IHN0ZXBzID0gZ2V0U3RlcHMoKTtcclxuXHJcblx0Y29uc3QgW3NlbGVjdGVkRGF0ZUFycml2ZWUsIHNldFNlbGVjdGVkRGF0ZUFycml2ZWVdID0gdXNlU3RhdGUoKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlRGF0ZUNoYW5nZUFycml2ZWUgPSAoZGF0ZSkgPT4ge1xyXG5cdFx0c2V0U2VsZWN0ZWREYXRlQXJyaXZlZShkYXRlKTtcclxuXHRcdHNldFNlbGVjdGVkRGF0ZURlcGFydChkYXRlKTtcclxuXHR9O1xyXG5cdGNvbnN0IFtzZWxlY3RlZERhdGVEZXBhcnQsIHNldFNlbGVjdGVkRGF0ZURlcGFydF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVEYXRlQ2hhbmdlRGVwYXJ0ID0gKGRhdGUpID0+IHtcclxuXHRcdHNldFNlbGVjdGVkRGF0ZURlcGFydChkYXRlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xyXG5cdFx0c2V0QWN0aXZlU3RlcCgocHJldkFjdGl2ZVN0ZXApID0+IHByZXZBY3RpdmVTdGVwICsgMSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcclxuXHRcdHNldEFjdGl2ZVN0ZXAoKHByZXZBY3RpdmVTdGVwKSA9PiBwcmV2QWN0aXZlU3RlcCAtIDEpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xyXG5cdFx0c2V0QWN0aXZlU3RlcCgwKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBbZ2l0ZXMsIHNldEdpdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgbGlzdERlc0dpdGVzID0gKCkgPT4ge1xyXG5cdFx0bGlzdEdpdGVzTm9tcygpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0R2l0ZXMoLi4uZ2l0ZXMsIGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGlzdERlc0dpdGVzKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCBpbmZvTG9jID0gKCkgPT4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9Jyc+XHJcblx0XHRcdDxoMj5JbmZvcm1hdGlvbnMgc3VyIGxhIGxvY2F0aW9uPC9oMj5cclxuXHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdzcGFjZS1hcm91bmQnPlxyXG5cdFx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0PElucHV0TGFiZWxcclxuXHRcdFx0XHRcdFx0c2hyaW5rXHJcblx0XHRcdFx0XHRcdGlkPSdkZW1vLXNpbXBsZS1zZWxlY3QtcGxhY2Vob2xkZXItbGFiZWwtbGFiZWwnPlxyXG5cdFx0XHRcdFx0XHRSw6lzZXJ2YXRpb24gc3VyIGxlIGfDrnRlIDpcclxuXHRcdFx0XHRcdDwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0XHRcdG5hbWU9J2dpdGUnXHJcblx0XHRcdFx0XHRcdGFzPXtcclxuXHRcdFx0XHRcdFx0XHQ8U2VsZWN0IGlkPSdnaXRlLXNlbGVjdCc+XHJcblx0XHRcdFx0XHRcdFx0XHR7Z2l0ZXMubWFwKChnaXRlLCBpKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSBrZXk9e2dpdGUuc2x1Z30gdmFsdWU9e2dpdGUuc2x1Z30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2dpdGUubm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0PC9TZWxlY3Q+XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSduYlBlcnMnXHJcblx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J05vbWJyZSBkZSBwZXJzb25uZXMgdG90YWwnXHJcblx0XHRcdFx0XHR0eXBlPSdudW1iZXInXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdG5hbWU9J25iRW5mJ1xyXG5cdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdGxhYmVsPSdEb250IGVuZmFudHMgZGUgbW9pbnMgZGUgMTggYW5zJ1xyXG5cdFx0XHRcdFx0dHlwZT0nbnVtYmVyJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIgdXRpbHM9e0RhdGVGbnNVdGlsc30+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J3NwYWNlLWFyb3VuZCc+XHJcblx0XHRcdFx0XHQ8S2V5Ym9hcmREYXRlUGlja2VyXHJcblx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0bWFyZ2luPSdub3JtYWwnXHJcblx0XHRcdFx0XHRcdGlkPSdkYXRlLXBpY2tlci1kaWFsb2cnXHJcblx0XHRcdFx0XHRcdG5hbWU9J2RhdGVBcnJpdmVlJ1xyXG5cdFx0XHRcdFx0XHRsYWJlbD1cIkRhdGUgZCdhcnJpdsOpZVwiXHJcblx0XHRcdFx0XHRcdGZvcm1hdD0nTU0vZGQveXl5eSdcclxuXHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPScnXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtzZWxlY3RlZERhdGVBcnJpdmVlfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlRGF0ZUNoYW5nZUFycml2ZWV9XHJcblx0XHRcdFx0XHRcdEtleWJvYXJkQnV0dG9uUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6ICdjaGFuZ2UgZGF0ZScsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHRcdDxLZXlib2FyZERhdGVQaWNrZXJcclxuXHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRtYXJnaW49J25vcm1hbCdcclxuXHRcdFx0XHRcdFx0aWQ9J2RhdGUtcGlja2VyLWRpYWxvZydcclxuXHRcdFx0XHRcdFx0bmFtZT0nZGF0ZURlcGFydCdcclxuXHRcdFx0XHRcdFx0bGFiZWw9J0RhdGUgZGUgZMOpcGFydCdcclxuXHRcdFx0XHRcdFx0Zm9ybWF0PSdNTS9kZC95eXl5J1xyXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9JydcclxuXHRcdFx0XHRcdFx0dmFsdWU9e3NlbGVjdGVkRGF0ZURlcGFydH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZURhdGVDaGFuZ2VEZXBhcnR9XHJcblx0XHRcdFx0XHRcdEtleWJvYXJkQnV0dG9uUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6ICdjaGFuZ2UgZGF0ZScsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PC9NdWlQaWNrZXJzVXRpbHNQcm92aWRlcj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblx0Y29uc3QgaW5mb0NvbXAgPSAoKSA9PiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8aDI+SW5mb3JtYXRpb25zIHN1cHBsw6ltZW50YWlyZXM8L2gyPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2xcclxuXHRcdFx0XHRcdGNvbXBvbmVudD0nZmllbGRzZXQnXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0PEZvcm1MYWJlbCBjb21wb25lbnQ9J2xlZ2VuZCc+XHJcblx0XHRcdFx0XHRcdE1lcmNpIGQnaW5kaXF1ZXIgc2kgdm91cyBub3VzIGF2ZXogZMOpamEgY29udGFjdMOpIHBhciA6XHJcblx0XHRcdFx0XHQ8L0Zvcm1MYWJlbD5cclxuXHRcdFx0XHRcdDxGb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdzcGFjZS1hcm91bmQnPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250cm9sPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PENoZWNrYm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nY29udGFjdE1haWwnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17ZmFsc2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD0nTWFpbCdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250cm9sPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PENoZWNrYm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nY29udGFjdFRlbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPSdUw6lsw6lwaG9uZSdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250cm9sPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PENoZWNrYm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nY29udGFjdEFicml0ZWwnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17ZmFsc2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD0nQWJyaXRlbCdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250cm9sPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PENoZWNrYm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nY29udGFjdExlYm9uY29pbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPSdMZWJvbmNvaW4nXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xMYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udHJvbD17XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxDaGVja2JveFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J2NvbnRhY3RBdXRyZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPSdBdXRyZSdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cclxuXHRcdFx0XHRcdHsvKiA8Rm9ybUhlbHBlclRleHQ+QmUgY2FyZWZ1bDwvRm9ybUhlbHBlclRleHQ+ICovfVxyXG5cdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J3NwYWNlLWFyb3VuZCc+XHJcblx0XHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0bmFtZT0nbmJDaGllbidcclxuXHRcdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdFx0bGFiZWw9J05vbWJyZSBkZSBjaGllbiA/ICgz4oKsL2pvdXIvYW5pbWFsKSdcclxuXHRcdFx0XHRcdFx0dHlwZT0nbnVtYmVyJ1xyXG5cdFx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PEZvcm1Db250cm9sTGFiZWxcclxuXHRcdFx0XHRcdFx0Y29udHJvbD17XHJcblx0XHRcdFx0XHRcdFx0PFN3aXRjaFxyXG5cdFx0XHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdENoZWNrZWRcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J2xpdEZhaXQnXHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcj0ncHJpbWFyeSdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGxhYmVsPVwiU291aGFpdGV6LXZvdXMgbCdvcHRpb24gbGl0IGZhaXQgw6AgbCdhcnJpdsOpZSA/XCJcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xMYWJlbFxyXG5cdFx0XHRcdFx0XHRjb250cm9sPXtcclxuXHRcdFx0XHRcdFx0XHQ8U3dpdGNoXHJcblx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0Q2hlY2tlZFxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT0nbmV3c2xldHRlcidcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yPSdwcmltYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9J1NvdXNjcmlyZSDDoCBub3RyZSBuZXdzbGV0dGVyIHBvdXIgYsOpbsOpZmljaWVyIGRlIHJlbWlzZXMgZXQgb2ZmcmVzIHByb21vdGlvbm5lbGxlcyA/J1xyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyPlxyXG5cdFx0XHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0bmFtZT0naW5mb0NvbXBsJ1xyXG5cdFx0XHRcdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9J0luZm9ybWF0aW9ucyBjb21wbMOpbWVudGFpcmVzIC8gUXVlc3Rpb25zIDonXHJcblx0XHRcdFx0XHRcdFx0bXVsdGlsaW5lXHJcblx0XHRcdFx0XHRcdFx0cm93cz17M31cclxuXHRcdFx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxuXHRjb25zdCBDb29yZCA9ICgpID0+IChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxoMj5Wb3MgY29vcmRvbm7DqWVzPC9oMj5cclxuXHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdzcGFjZS1hcm91bmQnPlxyXG5cdFx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0PElucHV0TGFiZWxcclxuXHRcdFx0XHRcdFx0c2hyaW5rXHJcblx0XHRcdFx0XHRcdGlkPSdkZW1vLXNpbXBsZS1zZWxlY3QtcGxhY2Vob2xkZXItbGFiZWwtbGFiZWwnPlxyXG5cdFx0XHRcdFx0XHRDaXZpbGl0w6lcclxuXHRcdFx0XHRcdDwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0XHRcdG5hbWU9J2NpdmlsaXRlJ1xyXG5cdFx0XHRcdFx0XHRhcz17XHJcblx0XHRcdFx0XHRcdFx0PFNlbGVjdCBpZD0nY2l2aWxpdGUtc2VsZWN0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nTS4gJiBNbWUnPk0uICYgTW1lPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nTW1lJz5NbWU8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdNbGxlJz5NbGxlPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nTS4nPk0uPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nQXNzb2NpYXRpb24nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRBc3NvY2lhdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT1cIkNvbWl0w6kgZCdlbnRyZXByaXNlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdENvbWl0w6kgZCdlbnRyZXByaXNlXHJcblx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdTb2Npw6l0w6knPlNvY2nDqXTDqTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J0VudHJlcHJpc2UnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRFbnRyZXByaXNlXHJcblx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdGb3llciBkZSB2aWUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRGb3llciBkZSB2aWVcclxuXHRcdFx0XHRcdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9XCJGb3llciBkJ2FjY3VlaWxcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Rm95ZXIgZCdhY2N1ZWlsXHJcblx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdGYW1pbGxlJz5GYW1pbGxlPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nQXV0cmVzJz5BdXRyZXM8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDwvU2VsZWN0PlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdG5hbWU9J25vbSdcclxuXHRcdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0XHRsYWJlbD0nTm9tJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSdwcmVub20nXHJcblx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J1Byw6lub20nXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdzcGFjZS1hcm91bmQnPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdG5hbWU9J2FkcmVzc2UnXHJcblx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J0FkcmVzc2UnXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdG5hbWU9J2NwJ1xyXG5cdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdGxhYmVsPSdDb2RlIFBvc3RhbCdcclxuXHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0bmFtZT0ndmlsbGUnXHJcblx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J1ZpbGxlJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdDxJbnB1dExhYmVsXHJcblx0XHRcdFx0XHRcdHNocmlua1xyXG5cdFx0XHRcdFx0XHRpZD0nZGVtby1zaW1wbGUtc2VsZWN0LXBsYWNlaG9sZGVyLWxhYmVsLWxhYmVsJz5cclxuXHRcdFx0XHRcdFx0UGF5c1xyXG5cdFx0XHRcdFx0PC9JbnB1dExhYmVsPlxyXG5cclxuXHRcdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0XHRcdG5hbWU9J3BheXMnXHJcblx0XHRcdFx0XHRcdGFzPXtcclxuXHRcdFx0XHRcdFx0XHQ8U2VsZWN0IGlkPSdwYXlzLXNlbGVjdCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2ZyYW5jZSc+RnJhbmNlPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nJz4tLS0tLS0tLTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2F1dHJlcyc+QXV0cmVzPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nYWxsZW1hZ25lJz5BbGxlbWFnbmU8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdhbmdsZXRlcnJlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0QW5nbGV0ZXJyZVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nYmVsZ2lxdWUnPkJlbGdpcXVlPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0naG9sbGFuZGUnPkhvbGxhbmRlPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nbHV4ZW1ib3VyZyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEx1eGVtYm91cmdcclxuXHRcdFx0XHRcdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J3N1aXNzZSc+U3Vpc3NlPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8L1NlbGVjdD5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdzcGFjZS1hcm91bmQnPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdG5hbWU9J3RlbCdcclxuXHRcdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0XHRsYWJlbD0nVMOpbMOpcGhvbmUnXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdG5hbWU9J21haWwnXHJcblx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J0VtYWlsJ1xyXG5cdFx0XHRcdFx0dHlwZT0nbWFpbCdcclxuXHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblx0Y29uc3QgcmVjYXAgPSAoKSA9PiA8cD5KU09OLnN0cmluZ2lmeSgpPC9wPjtcclxuXHJcblx0ZnVuY3Rpb24gZ2V0U3RlcENvbnRlbnQoc3RlcCkge1xyXG5cdFx0c3dpdGNoIChzdGVwKSB7XHJcblx0XHRcdGNhc2UgMDpcclxuXHRcdFx0XHRyZXR1cm4gaW5mb0xvYygpO1xyXG5cdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0cmV0dXJuIGluZm9Db21wKCk7XHJcblx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRyZXR1cm4gQ29vcmQoKTtcclxuXHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdHJldHVybiByZWNhcCgpO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHJldHVybiAnRXJyZXVyJztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcclxuXHRcdHNldExvYWRpbmcodHJ1ZSk7XHJcblx0XHRkYXRhLnRva2VuID0gYXdhaXQgcmVSZWYuY3VycmVudC5leGVjdXRlQXN5bmMoKTtcclxuXHRcdHJlUmVmLmN1cnJlbnQucmVzZXQoKTtcclxuXHRcdGNvbnNvbGUubG9nKCdvblN1Ym1pdCBkYXRhID0+JywgZGF0YSk7XHJcblx0XHRjcmVhdGVSZXNlcnZhdGlvbihkYXRhKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3Jlc3VsdCB2YXV0ID0+JywgcmVzdWx0KTtcclxuXHRcdFx0aWYgKHJlc3VsdC5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdC5lcnJvcik7XHJcblx0XHRcdFx0c25hY2tiYXJTaG93TWVzc2FnZShgJHtyZXN1bHQuZXJyb3J9YCk7XHJcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHRcdH0gZWxzZSBpZiAocmVzdWx0LmRlamFSZXNlcnZlTWVzc2FnZSkge1xyXG5cdFx0XHRcdHNuYWNrYmFyU2hvd01lc3NhZ2UoYCR7cmVzdWx0LmRlamFSZXNlcnZlTWVzc2FnZX1gKTtcclxuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0XHRzbmFja2JhclNob3dNZXNzYWdlKGAke3Jlc3VsdC5tZXNzYWdlfWAsICdzdWNjZXNzJyk7XHJcblxyXG5cdFx0XHRcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdC8vIFx0Um91dGVyLnB1c2goJy8nKTtcclxuXHRcdFx0XHQvLyB9LCAzMDAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxDb250YWluZXI+XHJcblx0XHRcdHtsb2FkaW5nICYmIDxDaXJjdWxhclByb2dyZXNzIC8+fVxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcblx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG5cdFx0XHRcdFx0PFN0ZXBwZXJcclxuXHRcdFx0XHRcdFx0YWx0ZXJuYXRpdmVMYWJlbFxyXG5cdFx0XHRcdFx0XHRhY3RpdmVTdGVwPXthY3RpdmVTdGVwfVxyXG5cdFx0XHRcdFx0XHRjb25uZWN0b3I9ezxDb2xvcmxpYkNvbm5lY3RvciAvPn0+XHJcblx0XHRcdFx0XHRcdHtzdGVwcy5tYXAoKGxhYmVsKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PFN0ZXAga2V5PXtsYWJlbH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8U3RlcExhYmVsIFN0ZXBJY29uQ29tcG9uZW50PXtDb2xvcmxpYlN0ZXBJY29ufT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2xhYmVsfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9TdGVwTGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PC9TdGVwPlxyXG5cdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdDwvU3RlcHBlcj5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdHthY3RpdmVTdGVwID09PSBzdGVwcy5sZW5ndGggPyAoXHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdHsvKiBWb2lyIHBvdXQgYWpvdXRlciBpc1N1Ym1pdGVkID09PSB0cnVlICovfVxyXG5cdFx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmluc3RydWN0aW9uc30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFZvdHJlIGRlbWFuZGUgYSBiaWVuIMOpdMOpIHByaXNlIGVuIGNvbXB0ZVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVSZXNldH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFJlY29tbWVuY2VyXHJcblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmluc3RydWN0aW9uc30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtnZXRTdGVwQ29udGVudChhY3RpdmVTdGVwKX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17YWN0aXZlU3RlcCA9PT0gMH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVCYWNrfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFJldG91clxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2FjdGl2ZVN0ZXAgPT09IHN0ZXBzLmxlbmd0aCAtIDEgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nc3VibWl0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD0nY29udGFpbmVkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I9J3ByaW1hcnknXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFZhbGlkZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdjb250YWluZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcj0ncHJpbWFyeSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZU5leHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFN1aXZhbnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8UmVDQVBUQ0hBXHJcblx0XHRcdFx0XHRcdHNpdGVrZXk9e1JFQ0FQVENIQV9TRUNSRVRfS0VZfVxyXG5cdFx0XHRcdFx0XHRyZWY9e3JlUmVmfVxyXG5cdFx0XHRcdFx0XHRzaXplPSdpbnZpc2libGUnXHJcblx0XHRcdFx0XHRcdC8vIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvQ29udGFpbmVyPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU25hY2tiYXIoUmVzZXJ2YXRpb25Gb3JtKTtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbmV4dC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucmRyQ2FsZW5kYXJXcmFwcGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ucmRyRGF0ZURpc3BsYXl7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnJkckRhdGVEaXNwbGF5SXRlbXtcXG4gIC13ZWJraXQtZmxleDogMSAxO1xcbiAgICAgICAgICBmbGV4OiAxIDE7XFxuICB3aWR0aDogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4ucmRyRGF0ZURpc3BsYXlJdGVtICsgLnJkckRhdGVEaXNwbGF5SXRlbXtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuODMzZW07XFxuICB9XFxuXFxuLnJkckRhdGVEaXNwbGF5SXRlbSBpbnB1dHtcXG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdFxcbiAgfVxcblxcbi5yZHJEYXRlRGlzcGxheUl0ZW0gaW5wdXQ6ZGlzYWJsZWR7XFxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICB9XFxuXFxuLnJkckRhdGVEaXNwbGF5SXRlbUFjdGl2ZXt9XFxuXFxuLnJkck1vbnRoQW5kWWVhcldyYXBwZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucmRyTW9udGhBbmRZZWFyUGlja2Vyc3tcXG4gIC13ZWJraXQtZmxleDogMSAxIGF1dG87XFxuICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmRyTW9udGhQaWNrZXJ7fVxcblxcbi5yZHJZZWFyUGlja2Vye31cXG5cXG4ucmRyTmV4dFByZXZCdXR0b24ge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5yZHJQcHJldkJ1dHRvbiB7fVxcblxcbi5yZHJOZXh0QnV0dG9uIHt9XFxuXFxuLnJkck1vbnRoc3tcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5yZHJNb250aHNWZXJ0aWNhbHtcXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnJkck1vbnRoc0hvcml6b250YWwgPiBkaXYgPiBkaXYgPiBkaXZ7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4ucmRyTW9udGh7XFxuICB3aWR0aDogMjcuNjY3ZW07XFxufVxcblxcbi5yZHJXZWVrRGF5c3tcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5yZHJXZWVrRGF5IHtcXG4gIC13ZWJraXQtZmxleC1iYXNpczogY2FsYygxMDAlIC8gNyk7XFxuICAgICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMTAwJSAvIDcpO1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnJkckRheXN7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnJkckRhdGVEaXNwbGF5V3JhcHBlcnt9XFxuXFxuLnJkck1vbnRoTmFtZXt9XFxuXFxuLnJkckluZmluaXRlTW9udGhze1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5yZHJEYXRlUmFuZ2VXcmFwcGVye1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ucmRyRGF0ZUlucHV0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnJkckRhdGVJbnB1dCBpbnB1dCB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICB9XFxuXFxuLnJkckRhdGVJbnB1dCAucmRyV2FybmluZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC1zaXplOiAxLjZlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNmVtO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAuMjVlbTtcXG4gICAgY29sb3I6ICNGRjAwMDA7XFxuICB9XFxuXFxuLnJkckRheSB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAvIDcpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJkckRheU51bWJlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnJkckRheU51bWJlciBzcGFue1xcbiAgICBjb2xvcjogIzFkMjQyOTtcXG4gIH1cXG5cXG4ucmRyRGF5RGlzYWJsZWQge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XFxuICAucmRyRGF5IHtcXG4gICAgLXdlYmtpdC1mbGV4LWJhc2lzOiAxNC4yODUlICFpbXBvcnRhbnQ7XFxuICAgICAgICAgICAgZmxleC1iYXNpczogMTQuMjg1JSAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG4ucmRyU2VsZWN0ZWQsIC5yZHJJblJhbmdlLCAucmRyU3RhcnRFZGdlLCAucmRyRW5kRWRnZXtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ucmRySW5SYW5nZXt9XFxuXFxuLnJkckRheVN0YXJ0UHJldmlldywgLnJkckRheUluUHJldmlldywgLnJkckRheUVuZFByZXZpZXd7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnJkckRheUhvdmVyZWR7fVxcblxcbi5yZHJEYXlBY3RpdmV7fVxcblxcbi5yZHJEYXRlUmFuZ2VQaWNrZXJXcmFwcGVye1xcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ucmRyRGVmaW5lZFJhbmdlc1dyYXBwZXJ7fVxcblxcbi5yZHJTdGF0aWNSYW5nZXN7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucmRyU3RhdGljUmFuZ2V7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxufVxcblxcbi5yZHJTdGF0aWNSYW5nZUxhYmVse31cXG5cXG4ucmRySW5wdXRSYW5nZXN7fVxcblxcbi5yZHJJbnB1dFJhbmdle1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnJkcklucHV0UmFuZ2VJbnB1dHt9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlLXJhbmdlL2Rpc3Qvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFFbkIsNEJBQW9CO0VBQXBCLG9CQUFvQjtFQUdaLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDOUIseUJBQXlCO01BRXJCLHFCQUFxQjtVQUNqQixpQkFBaUI7QUFDM0I7O0FBRUE7RUFFRSxxQkFBYTtFQUFiLGFBQWE7RUFFTCxzQ0FBOEI7VUFBOUIsOEJBQThCO0FBQ3hDOztBQUVBO0VBRVUsaUJBQVM7VUFBVCxTQUFTO0VBQ2pCLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtJQUNJLG9CQUFvQjtFQUN0Qjs7QUFFRjtJQUNJO0VBQ0Y7O0FBRUY7TUFDTSxlQUFlO0lBQ2pCOztBQUVKLDBCQUEwQjs7QUFFMUI7RUFDRSxtQkFBbUI7RUFFbkIscUJBQWE7RUFBYixhQUFhO0VBRUwsc0NBQThCO1VBQTlCLDhCQUE4QjtBQUN4Qzs7QUFFQTtFQUVVLHNCQUFjO1VBQWQsY0FBYztFQUV0QixxQkFBYTtFQUFiLGFBQWE7RUFFTCwrQkFBdUI7VUFBdkIsdUJBQXVCO0VBRXZCLDJCQUFtQjtVQUFuQixtQkFBbUI7QUFDN0I7O0FBRUEsZ0JBQWdCOztBQUVoQixlQUFlOztBQUVmO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUEsaUJBQWlCOztBQUVqQixnQkFBZ0I7O0FBRWhCO0VBRUUscUJBQWE7RUFBYixhQUFhO0FBQ2Y7O0FBRUE7RUFHVSw4QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ2hDOztBQUVBO0VBRUUscUJBQWE7RUFBYixhQUFhO0VBR0wsMkJBQW1CO1VBQW5CLG1CQUFtQjtBQUM3Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFFRSxxQkFBYTtFQUFiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUVFLHFCQUFhO0VBQWIsYUFBYTtFQUNiLHVCQUFlO1VBQWYsZUFBZTtBQUNqQjs7QUFFQSx1QkFBdUI7O0FBRXZCLGNBQWM7O0FBRWQ7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO01BRXJCLHFCQUFxQjtVQUNqQixpQkFBaUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0VBQ2Y7O0FBRUY7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sWUFBWTtJQUNaLGNBQWM7RUFDaEI7O0FBRUY7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0VBQ2hCOztBQUVGO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxzQ0FBOEI7WUFBOUIsOEJBQThCO0VBQ2hDO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUEsWUFBWTs7QUFFWjtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQSxlQUFlOztBQUVmLGNBQWM7O0FBRWQ7RUFFRSw0QkFBb0I7RUFBcEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtNQUVyQixxQkFBcUI7VUFDakIsaUJBQWlCO0FBQzNCOztBQUVBLHlCQUF5Qjs7QUFFekI7RUFFRSxxQkFBYTtFQUFiLGFBQWE7RUFHTCw4QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLHFCQUFxQjs7QUFFckIsZ0JBQWdCOztBQUVoQjtFQUVFLHFCQUFhO0VBQWIsYUFBYTtBQUNmOztBQUVBLG9CQUFvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucmRyQ2FsZW5kYXJXcmFwcGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ucmRyRGF0ZURpc3BsYXl7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5yZHJEYXRlRGlzcGxheUl0ZW17XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxIDE7XFxuICB3aWR0aDogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4ucmRyRGF0ZURpc3BsYXlJdGVtICsgLnJkckRhdGVEaXNwbGF5SXRlbXtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuODMzZW07XFxuICB9XFxuXFxuLnJkckRhdGVEaXNwbGF5SXRlbSBpbnB1dHtcXG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdFxcbiAgfVxcblxcbi5yZHJEYXRlRGlzcGxheUl0ZW0gaW5wdXQ6ZGlzYWJsZWR7XFxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICB9XFxuXFxuLnJkckRhdGVEaXNwbGF5SXRlbUFjdGl2ZXt9XFxuXFxuLnJkck1vbnRoQW5kWWVhcldyYXBwZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnJkck1vbnRoQW5kWWVhclBpY2tlcnN7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmRyTW9udGhQaWNrZXJ7fVxcblxcbi5yZHJZZWFyUGlja2Vye31cXG5cXG4ucmRyTmV4dFByZXZCdXR0b24ge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5yZHJQcHJldkJ1dHRvbiB7fVxcblxcbi5yZHJOZXh0QnV0dG9uIHt9XFxuXFxuLnJkck1vbnRoc3tcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnJkck1vbnRoc1ZlcnRpY2Fse1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucmRyTW9udGhzSG9yaXpvbnRhbCA+IGRpdiA+IGRpdiA+IGRpdntcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4ucmRyTW9udGh7XFxuICB3aWR0aDogMjcuNjY3ZW07XFxufVxcblxcbi5yZHJXZWVrRGF5c3tcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnJkcldlZWtEYXkge1xcbiAgZmxleC1iYXNpczogY2FsYygxMDAlIC8gNyk7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucmRyRGF5c3tcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnJkckRhdGVEaXNwbGF5V3JhcHBlcnt9XFxuXFxuLnJkck1vbnRoTmFtZXt9XFxuXFxuLnJkckluZmluaXRlTW9udGhze1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5yZHJEYXRlUmFuZ2VXcmFwcGVye1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnJkckRhdGVJbnB1dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5yZHJEYXRlSW5wdXQgaW5wdXQge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgfVxcblxcbi5yZHJEYXRlSW5wdXQgLnJkcldhcm5pbmcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZvbnQtc2l6ZTogMS42ZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjZlbTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogLjI1ZW07XFxuICAgIGNvbG9yOiAjRkYwMDAwO1xcbiAgfVxcblxcbi5yZHJEYXkge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLyA3KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZHJEYXlOdW1iZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5yZHJEYXlOdW1iZXIgc3BhbntcXG4gICAgY29sb3I6ICMxZDI0Mjk7XFxuICB9XFxuXFxuLnJkckRheURpc2FibGVkIHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbkBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xcbiAgLnJkckRheSB7XFxuICAgIGZsZXgtYmFzaXM6IDE0LjI4NSUgIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXFxuLnJkclNlbGVjdGVkLCAucmRySW5SYW5nZSwgLnJkclN0YXJ0RWRnZSwgLnJkckVuZEVkZ2V7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnJkckluUmFuZ2V7fVxcblxcbi5yZHJEYXlTdGFydFByZXZpZXcsIC5yZHJEYXlJblByZXZpZXcsIC5yZHJEYXlFbmRQcmV2aWV3e1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5yZHJEYXlIb3ZlcmVke31cXG5cXG4ucmRyRGF5QWN0aXZle31cXG5cXG4ucmRyRGF0ZVJhbmdlUGlja2VyV3JhcHBlcntcXG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnJkckRlZmluZWRSYW5nZXNXcmFwcGVye31cXG5cXG4ucmRyU3RhdGljUmFuZ2Vze1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucmRyU3RhdGljUmFuZ2V7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxufVxcblxcbi5yZHJTdGF0aWNSYW5nZUxhYmVse31cXG5cXG4ucmRySW5wdXRSYW5nZXN7fVxcblxcbi5yZHJJbnB1dFJhbmdle1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucmRySW5wdXRSYW5nZUlucHV0e31cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbmV4dC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucmRyQ2FsZW5kYXJXcmFwcGVye1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5yZHJEYXRlRGlzcGxheVdyYXBwZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyNDIsIDI0Nyk7XFxufVxcblxcbi5yZHJEYXRlRGlzcGxheXtcXG4gIG1hcmdpbjogMC44MzNlbTtcXG59XFxuXFxuLnJkckRhdGVEaXNwbGF5SXRlbXtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMzUsIDU3LCA2NiwgMC4yMSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnJkckRhdGVEaXNwbGF5SXRlbSBpbnB1dHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDIuNWVtO1xcbiAgICBsaW5lLWhlaWdodDogMi41ZW07XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGNvbG9yOiAjODQ5MDk1O1xcbiAgfVxcblxcbi5yZHJEYXRlRGlzcGxheUl0ZW1BY3RpdmV7XFxuICBib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvcjtcXG59XFxuXFxuLnJkckRhdGVEaXNwbGF5SXRlbUFjdGl2ZSBpbnB1dHtcXG4gICAgY29sb3I6ICM3ZDg4OGRcXG4gIH1cXG5cXG4ucmRyTW9udGhBbmRZZWFyV3JhcHBlciB7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXFxuLnJkck1vbnRoQW5kWWVhclBpY2tlcnN7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ucmRyTW9udGhBbmRZZWFyUGlja2VycyBzZWxlY3R7XFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgY29sb3I6ICMzZTQ4NGY7XFxuICAgIGJhY2tncm91bmQ6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB3aWR0aD0nOXB4JyBoZWlnaHQ9JzZweCcgdmlld0JveD0nMCAwIDkgNicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz48ZyBpZD0nQXJ0Ym9hcmQnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC02MzYuMDAwMDAwLCAtMTcxLjAwMDAwMCknIGZpbGwtb3BhY2l0eT0nMC4zNjg3MTYwMzMnPjxnIGlkPSdpbnB1dCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTcyLjAwMDAwMCwgMzcuMDAwMDAwKScgZmlsbD0nJTIzMEUyNDJGJyBmaWxsLXJ1bGU9J25vbnplcm8nPjxnIGlkPSdHcm91cC05JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzMjMuMDAwMDAwLCAxMjcuMDAwMDAwKSc+PHBhdGggZD0nTTE0Mi4yODAyNDUsNy4yMzk1MjgxMyBDMTQxLjk4NzMwNSw2LjkyMzUzNDcyIDE0MS41MTI0MzIsNi45MjM2MTY2MiAxNDEuMjE5NTg1LDcuMjM5NzExMDYgQzE0MC45MjY3MzksNy41NTU4MDU1IDE0MC45MjY4MTUsOC4wNjgyMTM5NCAxNDEuMjE5NzU1LDguMzg0MjA3MzUgTDE0NS40OTg4MDEsMTMgTDE0OS43ODAyNDUsOC4zODE2MjA3MSBDMTUwLjA3MzE4NSw4LjA2NTYyNzMgMTUwLjA3MzI2MSw3LjU1MzIxODg2IDE0OS43ODA0MTUsNy4yMzcxMjQ0MiBDMTQ5LjQ4NzU2OCw2LjkyMTAyOTk4IDE0OS4wMTI2OTUsNi45MjA5NDgwOCAxNDguNzE5NzU1LDcuMjM2OTQxNDkgTDE0NS40OTg4MDEsMTAuNzExMzczMiBMMTQyLjI4MDI0NSw3LjIzOTUyODEzIFonIGlkPSdhcnJvdyc+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPlxcXCIpIG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgOHB4IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcXG4gIH1cXG5cXG4ucmRyTW9udGhBbmRZZWFyUGlja2VycyBzZWxlY3Q6aG92ZXJ7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjA3KTtcXG4gICAgfVxcblxcbi5yZHJNb250aFBpY2tlciwgLnJkclllYXJQaWNrZXJ7XFxuICBtYXJnaW46IDAgNXB4XFxufVxcblxcbi5yZHJOZXh0UHJldkJ1dHRvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgbWFyZ2luOiAwIDAuODMzZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZDogI0VGRjJGN1xcbn1cXG5cXG4ucmRyTmV4dFByZXZCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6ICNFMUU3RjA7XFxuICB9XFxuXFxuLnJkck5leHRQcmV2QnV0dG9uIGkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAwcHgpO1xcbiAgfVxcblxcbi5yZHJQcHJldkJ1dHRvbiBpIHtcXG4gICAgYm9yZGVyLXdpZHRoOiA0cHggNnB4IDRweCA0cHg7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgcmdiKDUyLCA3MywgOTQpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMHB4KTtcXG4gIH1cXG5cXG4ucmRyTmV4dEJ1dHRvbiBpIHtcXG4gICAgbWFyZ2luOiAwIDAgMCA3cHg7XFxuICAgIGJvcmRlci13aWR0aDogNHB4IDRweCA0cHggNnB4O1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHJnYig1MiwgNzMsIDk0KTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAwcHgpO1xcbiAgfVxcblxcbi5yZHJXZWVrRGF5cyB7XFxuICBwYWRkaW5nOiAwIDAuODMzZW07XFxufVxcblxcbi5yZHJNb250aHtcXG4gIHBhZGRpbmc6IDAgMC44MzNlbSAxLjY2NmVtIDAuODMzZW07XFxufVxcblxcbi5yZHJNb250aCAucmRyV2Vla0RheXMge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcblxcbi5yZHJNb250aHMucmRyTW9udGhzVmVydGljYWwgLnJkck1vbnRoOmZpcnN0LWNoaWxkIC5yZHJNb250aE5hbWV7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucmRyV2Vla0RheSB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDIuNjY3ZW07XFxuICBjb2xvcjogcmdiKDEzMiwgMTQ0LCAxNDkpO1xcbn1cXG5cXG4ucmRyRGF5IHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpbmUtaGVpZ2h0OiAzLjAwMGVtO1xcbiAgaGVpZ2h0OiAzLjAwMGVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICMxZDI0MjlcXG59XFxuXFxuLnJkckRheTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDA7XFxuICB9XFxuXFxuLnJkckRheU51bWJlciB7XFxuICBvdXRsaW5lOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHRvcDogNXB4O1xcbiAgYm90dG9tOiA1cHg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5yZHJEYXlUb2RheSAucmRyRGF5TnVtYmVyIHNwYW57XFxuICBmb250LXdlaWdodDogNTAwXFxufVxcblxcbi5yZHJEYXlUb2RheSAucmRyRGF5TnVtYmVyIHNwYW46YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogNHB4O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICAgIHdpZHRoOiAxOHB4O1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjM2Q5MWZmO1xcbiAgfVxcblxcbi5yZHJEYXlUb2RheTpub3QoLnJkckRheVBhc3NpdmUpIC5yZHJJblJhbmdlIH4gLnJkckRheU51bWJlciBzcGFuOmFmdGVyLC5yZHJEYXlUb2RheTpub3QoLnJkckRheVBhc3NpdmUpIC5yZHJTdGFydEVkZ2UgfiAucmRyRGF5TnVtYmVyIHNwYW46YWZ0ZXIsLnJkckRheVRvZGF5Om5vdCgucmRyRGF5UGFzc2l2ZSkgLnJkckVuZEVkZ2UgfiAucmRyRGF5TnVtYmVyIHNwYW46YWZ0ZXIsLnJkckRheVRvZGF5Om5vdCgucmRyRGF5UGFzc2l2ZSkgLnJkclNlbGVjdGVkIH4gLnJkckRheU51bWJlciBzcGFuOmFmdGVye1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIH1cXG5cXG4ucmRyRGF5Om5vdCgucmRyRGF5UGFzc2l2ZSkgLnJkckluUmFuZ2UgfiAucmRyRGF5TnVtYmVyIHNwYW4sLnJkckRheTpub3QoLnJkckRheVBhc3NpdmUpIC5yZHJTdGFydEVkZ2UgfiAucmRyRGF5TnVtYmVyIHNwYW4sLnJkckRheTpub3QoLnJkckRheVBhc3NpdmUpIC5yZHJFbmRFZGdlIH4gLnJkckRheU51bWJlciBzcGFuLC5yZHJEYXk6bm90KC5yZHJEYXlQYXNzaXZlKSAucmRyU2VsZWN0ZWQgfiAucmRyRGF5TnVtYmVyIHNwYW57XFxuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xcbiAgICAgICAgfVxcblxcbi5yZHJTZWxlY3RlZCwgLnJkckluUmFuZ2UsIC5yZHJTdGFydEVkZ2UsIC5yZHJFbmRFZGdle1xcbiAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1cHg7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDVweDtcXG59XFxuXFxuLnJkclNlbGVjdGVke1xcbiAgbGVmdDogMnB4O1xcbiAgcmlnaHQ6IDJweDtcXG59XFxuXFxuLnJkckluUmFuZ2V7fVxcblxcbi5yZHJTdGFydEVkZ2V7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxLjA0MmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMS4wNDJlbTtcXG4gIGxlZnQ6IDJweDtcXG59XFxuXFxuLnJkckVuZEVkZ2V7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMS4wNDJlbTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxLjA0MmVtO1xcbiAgcmlnaHQ6IDJweDtcXG59XFxuXFxuLnJkclNlbGVjdGVke1xcbiAgYm9yZGVyLXJhZGl1czogMS4wNDJlbTtcXG59XFxuXFxuLnJkckRheVN0YXJ0T2ZNb250aCAucmRySW5SYW5nZSwgLnJkckRheVN0YXJ0T2ZNb250aCAucmRyRW5kRWRnZSwgLnJkckRheVN0YXJ0T2ZXZWVrIC5yZHJJblJhbmdlLCAucmRyRGF5U3RhcnRPZldlZWsgLnJkckVuZEVkZ2V7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEuMDQyZW07XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEuMDQyZW07XFxuICAgIGxlZnQ6IDJweDtcXG4gIH1cXG5cXG4ucmRyRGF5RW5kT2ZNb250aCAucmRySW5SYW5nZSwgIC5yZHJEYXlFbmRPZk1vbnRoIC5yZHJTdGFydEVkZ2UsICAucmRyRGF5RW5kT2ZXZWVrIC5yZHJJblJhbmdlLCAgLnJkckRheUVuZE9mV2VlayAucmRyU3RhcnRFZGdle1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMS4wNDJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEuMDQyZW07XFxuICAgIHJpZ2h0OiAycHg7XFxuICB9XFxuXFxuLnJkckRheVN0YXJ0T2ZNb250aCAucmRyRGF5SW5QcmV2aWV3LCAucmRyRGF5U3RhcnRPZk1vbnRoIC5yZHJEYXlFbmRQcmV2aWV3LCAucmRyRGF5U3RhcnRPZldlZWsgLnJkckRheUluUHJldmlldywgLnJkckRheVN0YXJ0T2ZXZWVrIC5yZHJEYXlFbmRQcmV2aWV3e1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxLjMzM2VtO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxLjMzM2VtO1xcbiAgICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICB9XFxuXFxuLnJkckRheUVuZE9mTW9udGggLnJkckRheUluUHJldmlldywgLnJkckRheUVuZE9mTW9udGggLnJkckRheVN0YXJ0UHJldmlldywgLnJkckRheUVuZE9mV2VlayAucmRyRGF5SW5QcmV2aWV3LCAucmRyRGF5RW5kT2ZXZWVrIC5yZHJEYXlTdGFydFByZXZpZXd7XFxuICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEuMzMzZW07XFxuICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEuMzMzZW07XFxuICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7XFxuICAgcmlnaHQ6IDBweDtcXG4gfVxcblxcbi5yZHJEYXlTdGFydFByZXZpZXcsIC5yZHJEYXlJblByZXZpZXcsIC5yZHJEYXlFbmRQcmV2aWV3e1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA5KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogM3B4O1xcbiAgbGVmdDogMHB4O1xcbiAgcmlnaHQ6IDBweDtcXG4gIGJvdHRvbTogM3B4O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBib3JkZXI6IDBweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ucmRyRGF5U3RhcnRQcmV2aWV3e1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEuMzMzZW07XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxLjMzM2VtO1xcbiAgbGVmdDogMHB4O1xcbn1cXG5cXG4ucmRyRGF5SW5QcmV2aWV3e1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xcbn1cXG5cXG4ucmRyRGF5RW5kUHJldmlld3tcXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcXG4gIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEuMzMzZW07XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMS4zMzNlbTtcXG4gIHJpZ2h0OiAycHg7XFxuICByaWdodDogMHB4O1xcbn1cXG5cXG4ucmRyRGVmaW5lZFJhbmdlc1dyYXBwZXJ7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB3aWR0aDogMjI2cHg7XFxuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjZWZmMmY3O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuXFxuLnJkckRlZmluZWRSYW5nZXNXcmFwcGVyIC5yZHJTdGF0aWNSYW5nZVNlbGVjdGVke1xcbiAgICBjb2xvcjogY3VycmVudENvbG9yO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgfVxcblxcbi5yZHJTdGF0aWNSYW5nZXtcXG4gIGJvcmRlcjogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZmMmY3O1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6ICNmZmZcXG59XFxuXFxuLnJkclN0YXRpY1JhbmdlOmhvdmVyIC5yZHJTdGF0aWNSYW5nZUxhYmVsLC5yZHJTdGF0aWNSYW5nZTpmb2N1cyAucmRyU3RhdGljUmFuZ2VMYWJlbHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZWZmMmY3O1xcbiAgICB9XFxuXFxuLnJkclN0YXRpY1JhbmdlTGFiZWx7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG91dGxpbmU6IDA7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5yZHJJbnB1dFJhbmdlc3tcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG59XFxuXFxuLnJkcklucHV0UmFuZ2V7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHggMjBweDtcXG59XFxuXFxuLnJkcklucHV0UmFuZ2VJbnB1dHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IHNvbGlkIDFweCByZ2IoMjIyLCAyMzEsIDIzNSk7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBjb2xvcjogcmdiKDEwOCwgMTE4LCAxMjIpXFxufVxcblxcbi5yZHJJbnB1dFJhbmdlSW5wdXQ6Zm9jdXMsIC5yZHJJbnB1dFJhbmdlSW5wdXQ6aG92ZXJ7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDE4MCwgMTkxLCAxOTYpO1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBjb2xvcjogIzMzMztcXG4gIH1cXG5cXG4ucmRyQ2FsZW5kYXJXcmFwcGVyOm5vdCgucmRyRGF0ZVJhbmdlV3JhcHBlcikgLnJkckRheUhvdmVyZWQgLnJkckRheU51bWJlcjphZnRlcntcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xcbiAgYm9yZGVyLXJhZGl1czogMS4zMzNlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTJweDtcXG4gIGJvdHRvbTogLTJweDtcXG4gIGxlZnQ6IDBweDtcXG4gIHJpZ2h0OiAwcHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnJkckRheVBhc3NpdmV7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnJkckRheVBhc3NpdmUgLnJkckRheU51bWJlciBzcGFue1xcbiAgICBjb2xvcjogI2Q1ZGNlMDtcXG4gIH1cXG5cXG4ucmRyRGF5UGFzc2l2ZSAucmRySW5SYW5nZSwgLnJkckRheVBhc3NpdmUgLnJkclN0YXJ0RWRnZSwgLnJkckRheVBhc3NpdmUgLnJkckVuZEVkZ2UsIC5yZHJEYXlQYXNzaXZlIC5yZHJTZWxlY3RlZCwgLnJkckRheVBhc3NpdmUgLnJkckRheVN0YXJ0UHJldmlldywgLnJkckRheVBhc3NpdmUgLnJkckRheUluUHJldmlldywgLnJkckRheVBhc3NpdmUgLnJkckRheUVuZFByZXZpZXd7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuLnJkckRheURpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI0OCwgMjQ4KTtcXG59XFxuXFxuLnJkckRheURpc2FibGVkIC5yZHJEYXlOdW1iZXIgc3BhbntcXG4gICAgY29sb3I6ICNhZWI5YmY7XFxuICB9XFxuXFxuLnJkckRheURpc2FibGVkIC5yZHJJblJhbmdlLCAucmRyRGF5RGlzYWJsZWQgLnJkclN0YXJ0RWRnZSwgLnJkckRheURpc2FibGVkIC5yZHJFbmRFZGdlLCAucmRyRGF5RGlzYWJsZWQgLnJkclNlbGVjdGVkLCAucmRyRGF5RGlzYWJsZWQgLnJkckRheVN0YXJ0UHJldmlldywgLnJkckRheURpc2FibGVkIC5yZHJEYXlJblByZXZpZXcsIC5yZHJEYXlEaXNhYmxlZCAucmRyRGF5RW5kUHJldmlld3tcXG4gICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKSBvcGFjaXR5KDYwJSk7XFxuICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgb3BhY2l0eSg2MCUpO1xcbiAgfVxcblxcbi5yZHJNb250aE5hbWV7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiAjODQ5MDk1O1xcbiAgcGFkZGluZzogMC44MzNlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlLXJhbmdlL2Rpc3QvdGhlbWUvZGVmYXVsdC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFB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Q2xCO0FBQ0Y7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsVUFBVTtJQUNWLFdBQVc7RUFDYjs7QUFFRjtFQUNFLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0VBQ1YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztFQUNoQjs7QUFFRjtJQUNJLGFBQWE7RUFDZjs7QUFFRjtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtJQUNJLGNBQWM7RUFDaEI7O0FBRUY7SUFDSSw0Q0FBNEM7WUFDcEMsb0NBQW9DO0VBQzlDOztBQUVGO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yZHJDYWxlbmRhcldyYXBwZXJ7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLnJkckRhdGVEaXNwbGF5V3JhcHBlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDI0MiwgMjQ3KTtcXG59XFxuXFxuLnJkckRhdGVEaXNwbGF5e1xcbiAgbWFyZ2luOiAwLjgzM2VtO1xcbn1cXG5cXG4ucmRyRGF0ZURpc3BsYXlJdGVte1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgzNSwgNTcsIDY2LCAwLjIxKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ucmRyRGF0ZURpc3BsYXlJdGVtIGlucHV0e1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMi41ZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAyLjVlbTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6ICM4NDkwOTU7XFxuICB9XFxuXFxuLnJkckRhdGVEaXNwbGF5SXRlbUFjdGl2ZXtcXG4gIGJvcmRlci1jb2xvcjogY3VycmVudENvbG9yO1xcbn1cXG5cXG4ucmRyRGF0ZURpc3BsYXlJdGVtQWN0aXZlIGlucHV0e1xcbiAgICBjb2xvcjogIzdkODg4ZFxcbiAgfVxcblxcbi5yZHJNb250aEFuZFllYXJXcmFwcGVyIHtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXFxuLnJkck1vbnRoQW5kWWVhclBpY2tlcnN7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ucmRyTW9udGhBbmRZZWFyUGlja2VycyBzZWxlY3R7XFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgY29sb3I6ICMzZTQ4NGY7XFxuICAgIGJhY2tncm91bmQ6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB3aWR0aD0nOXB4JyBoZWlnaHQ9JzZweCcgdmlld0JveD0nMCAwIDkgNicgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJz48ZyBpZD0nQXJ0Ym9hcmQnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC02MzYuMDAwMDAwLCAtMTcxLjAwMDAwMCknIGZpbGwtb3BhY2l0eT0nMC4zNjg3MTYwMzMnPjxnIGlkPSdpbnB1dCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTcyLjAwMDAwMCwgMzcuMDAwMDAwKScgZmlsbD0nJTIzMEUyNDJGJyBmaWxsLXJ1bGU9J25vbnplcm8nPjxnIGlkPSdHcm91cC05JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgzMjMuMDAwMDAwLCAxMjcuMDAwMDAwKSc+PHBhdGggZD0nTTE0Mi4yODAyNDUsNy4yMzk1MjgxMyBDMTQxLjk4NzMwNSw2LjkyMzUzNDcyIDE0MS41MTI0MzIsNi45MjM2MTY2MiAxNDEuMjE5NTg1LDcuMjM5NzExMDYgQzE0MC45MjY3MzksNy41NTU4MDU1IDE0MC45MjY4MTUsOC4wNjgyMTM5NCAxNDEuMjE5NzU1LDguMzg0MjA3MzUgTDE0NS40OTg4MDEsMTMgTDE0OS43ODAyNDUsOC4zODE2MjA3MSBDMTUwLjA3MzE4NSw4LjA2NTYyNzMgMTUwLjA3MzI2MSw3LjU1MzIxODg2IDE0OS43ODA0MTUsNy4yMzcxMjQ0MiBDMTQ5LjQ4NzU2OCw2LjkyMTAyOTk4IDE0OS4wMTI2OTUsNi45MjA5NDgwOCAxNDguNzE5NzU1LDcuMjM2OTQxNDkgTDE0NS40OTg4MDEsMTAuNzExMzczMiBMMTQyLjI4MDI0NSw3LjIzOTUyODEzIFonIGlkPSdhcnJvdyc+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPlxcXCIpIG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgOHB4IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcXG4gIH1cXG5cXG4ucmRyTW9udGhBbmRZZWFyUGlja2VycyBzZWxlY3Q6aG92ZXJ7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjA3KTtcXG4gICAgfVxcblxcbi5yZHJNb250aFBpY2tlciwgLnJkclllYXJQaWNrZXJ7XFxuICBtYXJnaW46IDAgNXB4XFxufVxcblxcbi5yZHJOZXh0UHJldkJ1dHRvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgbWFyZ2luOiAwIDAuODMzZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZDogI0VGRjJGN1xcbn1cXG5cXG4ucmRyTmV4dFByZXZCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6ICNFMUU3RjA7XFxuICB9XFxuXFxuLnJkck5leHRQcmV2QnV0dG9uIGkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAwcHgpO1xcbiAgfVxcblxcbi5yZHJQcHJldkJ1dHRvbiBpIHtcXG4gICAgYm9yZGVyLXdpZHRoOiA0cHggNnB4IDRweCA0cHg7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgcmdiKDUyLCA3MywgOTQpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMHB4KTtcXG4gIH1cXG5cXG4ucmRyTmV4dEJ1dHRvbiBpIHtcXG4gICAgbWFyZ2luOiAwIDAgMCA3cHg7XFxuICAgIGJvcmRlci13aWR0aDogNHB4IDRweCA0cHggNnB4O1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHJnYig1MiwgNzMsIDk0KTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAwcHgpO1xcbiAgfVxcblxcbi5yZHJXZWVrRGF5cyB7XFxuICBwYWRkaW5nOiAwIDAuODMzZW07XFxufVxcblxcbi5yZHJNb250aHtcXG4gIHBhZGRpbmc6IDAgMC44MzNlbSAxLjY2NmVtIDAuODMzZW07XFxufVxcblxcbi5yZHJNb250aCAucmRyV2Vla0RheXMge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcblxcbi5yZHJNb250aHMucmRyTW9udGhzVmVydGljYWwgLnJkck1vbnRoOmZpcnN0LWNoaWxkIC5yZHJNb250aE5hbWV7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucmRyV2Vla0RheSB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDIuNjY3ZW07XFxuICBjb2xvcjogcmdiKDEzMiwgMTQ0LCAxNDkpO1xcbn1cXG5cXG4ucmRyRGF5IHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaW5lLWhlaWdodDogMy4wMDBlbTtcXG4gIGhlaWdodDogMy4wMDBlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjMWQyNDI5XFxufVxcblxcbi5yZHJEYXk6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgfVxcblxcbi5yZHJEYXlOdW1iZXIge1xcbiAgb3V0bGluZTogMDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICB0b3A6IDVweDtcXG4gIGJvdHRvbTogNXB4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5yZHJEYXlUb2RheSAucmRyRGF5TnVtYmVyIHNwYW57XFxuICBmb250LXdlaWdodDogNTAwXFxufVxcblxcbi5yZHJEYXlUb2RheSAucmRyRGF5TnVtYmVyIHNwYW46YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogNHB4O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICAgIHdpZHRoOiAxOHB4O1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjM2Q5MWZmO1xcbiAgfVxcblxcbi5yZHJEYXlUb2RheTpub3QoLnJkckRheVBhc3NpdmUpIC5yZHJJblJhbmdlIH4gLnJkckRheU51bWJlciBzcGFuOmFmdGVyLC5yZHJEYXlUb2RheTpub3QoLnJkckRheVBhc3NpdmUpIC5yZHJTdGFydEVkZ2UgfiAucmRyRGF5TnVtYmVyIHNwYW46YWZ0ZXIsLnJkckRheVRvZGF5Om5vdCgucmRyRGF5UGFzc2l2ZSkgLnJkckVuZEVkZ2UgfiAucmRyRGF5TnVtYmVyIHNwYW46YWZ0ZXIsLnJkckRheVRvZGF5Om5vdCgucmRyRGF5UGFzc2l2ZSkgLnJkclNlbGVjdGVkIH4gLnJkckRheU51bWJlciBzcGFuOmFmdGVye1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIH1cXG5cXG4ucmRyRGF5Om5vdCgucmRyRGF5UGFzc2l2ZSkgLnJkckluUmFuZ2UgfiAucmRyRGF5TnVtYmVyIHNwYW4sLnJkckRheTpub3QoLnJkckRheVBhc3NpdmUpIC5yZHJTdGFydEVkZ2UgfiAucmRyRGF5TnVtYmVyIHNwYW4sLnJkckRheTpub3QoLnJkckRheVBhc3NpdmUpIC5yZHJFbmRFZGdlIH4gLnJkckRheU51bWJlciBzcGFuLC5yZHJEYXk6bm90KC5yZHJEYXlQYXNzaXZlKSAucmRyU2VsZWN0ZWQgfiAucmRyRGF5TnVtYmVyIHNwYW57XFxuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xcbiAgICAgICAgfVxcblxcbi5yZHJTZWxlY3RlZCwgLnJkckluUmFuZ2UsIC5yZHJTdGFydEVkZ2UsIC5yZHJFbmRFZGdle1xcbiAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1cHg7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDVweDtcXG59XFxuXFxuLnJkclNlbGVjdGVke1xcbiAgbGVmdDogMnB4O1xcbiAgcmlnaHQ6IDJweDtcXG59XFxuXFxuLnJkckluUmFuZ2V7fVxcblxcbi5yZHJTdGFydEVkZ2V7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxLjA0MmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMS4wNDJlbTtcXG4gIGxlZnQ6IDJweDtcXG59XFxuXFxuLnJkckVuZEVkZ2V7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMS4wNDJlbTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxLjA0MmVtO1xcbiAgcmlnaHQ6IDJweDtcXG59XFxuXFxuLnJkclNlbGVjdGVke1xcbiAgYm9yZGVyLXJhZGl1czogMS4wNDJlbTtcXG59XFxuXFxuLnJkckRheVN0YXJ0T2ZNb250aCAucmRySW5SYW5nZSwgLnJkckRheVN0YXJ0T2ZNb250aCAucmRyRW5kRWRnZSwgLnJkckRheVN0YXJ0T2ZXZWVrIC5yZHJJblJhbmdlLCAucmRyRGF5U3RhcnRPZldlZWsgLnJkckVuZEVkZ2V7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEuMDQyZW07XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEuMDQyZW07XFxuICAgIGxlZnQ6IDJweDtcXG4gIH1cXG5cXG4ucmRyRGF5RW5kT2ZNb250aCAucmRySW5SYW5nZSwgIC5yZHJEYXlFbmRPZk1vbnRoIC5yZHJTdGFydEVkZ2UsICAucmRyRGF5RW5kT2ZXZWVrIC5yZHJJblJhbmdlLCAgLnJkckRheUVuZE9mV2VlayAucmRyU3RhcnRFZGdle1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMS4wNDJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEuMDQyZW07XFxuICAgIHJpZ2h0OiAycHg7XFxuICB9XFxuXFxuLnJkckRheVN0YXJ0T2ZNb250aCAucmRyRGF5SW5QcmV2aWV3LCAucmRyRGF5U3RhcnRPZk1vbnRoIC5yZHJEYXlFbmRQcmV2aWV3LCAucmRyRGF5U3RhcnRPZldlZWsgLnJkckRheUluUHJldmlldywgLnJkckRheVN0YXJ0T2ZXZWVrIC5yZHJEYXlFbmRQcmV2aWV3e1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxLjMzM2VtO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxLjMzM2VtO1xcbiAgICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICB9XFxuXFxuLnJkckRheUVuZE9mTW9udGggLnJkckRheUluUHJldmlldywgLnJkckRheUVuZE9mTW9udGggLnJkckRheVN0YXJ0UHJldmlldywgLnJkckRheUVuZE9mV2VlayAucmRyRGF5SW5QcmV2aWV3LCAucmRyRGF5RW5kT2ZXZWVrIC5yZHJEYXlTdGFydFByZXZpZXd7XFxuICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEuMzMzZW07XFxuICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEuMzMzZW07XFxuICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7XFxuICAgcmlnaHQ6IDBweDtcXG4gfVxcblxcbi5yZHJEYXlTdGFydFByZXZpZXcsIC5yZHJEYXlJblByZXZpZXcsIC5yZHJEYXlFbmRQcmV2aWV3e1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA5KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogM3B4O1xcbiAgbGVmdDogMHB4O1xcbiAgcmlnaHQ6IDBweDtcXG4gIGJvdHRvbTogM3B4O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBib3JkZXI6IDBweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ucmRyRGF5U3RhcnRQcmV2aWV3e1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEuMzMzZW07XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxLjMzM2VtO1xcbiAgbGVmdDogMHB4O1xcbn1cXG5cXG4ucmRyRGF5SW5QcmV2aWV3e1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xcbn1cXG5cXG4ucmRyRGF5RW5kUHJldmlld3tcXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcXG4gIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEuMzMzZW07XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMS4zMzNlbTtcXG4gIHJpZ2h0OiAycHg7XFxuICByaWdodDogMHB4O1xcbn1cXG5cXG4ucmRyRGVmaW5lZFJhbmdlc1dyYXBwZXJ7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB3aWR0aDogMjI2cHg7XFxuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjZWZmMmY3O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuXFxuLnJkckRlZmluZWRSYW5nZXNXcmFwcGVyIC5yZHJTdGF0aWNSYW5nZVNlbGVjdGVke1xcbiAgICBjb2xvcjogY3VycmVudENvbG9yO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgfVxcblxcbi5yZHJTdGF0aWNSYW5nZXtcXG4gIGJvcmRlcjogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZmMmY3O1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6ICNmZmZcXG59XFxuXFxuLnJkclN0YXRpY1JhbmdlOmhvdmVyIC5yZHJTdGF0aWNSYW5nZUxhYmVsLC5yZHJTdGF0aWNSYW5nZTpmb2N1cyAucmRyU3RhdGljUmFuZ2VMYWJlbHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZWZmMmY3O1xcbiAgICB9XFxuXFxuLnJkclN0YXRpY1JhbmdlTGFiZWx7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG91dGxpbmU6IDA7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5yZHJJbnB1dFJhbmdlc3tcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG59XFxuXFxuLnJkcklucHV0UmFuZ2V7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4IDIwcHg7XFxufVxcblxcbi5yZHJJbnB1dFJhbmdlSW5wdXR7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDIyMiwgMjMxLCAyMzUpO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgY29sb3I6IHJnYigxMDgsIDExOCwgMTIyKVxcbn1cXG5cXG4ucmRySW5wdXRSYW5nZUlucHV0OmZvY3VzLCAucmRySW5wdXRSYW5nZUlucHV0OmhvdmVye1xcbiAgICBib3JkZXItY29sb3I6IHJnYigxODAsIDE5MSwgMTk2KTtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgY29sb3I6ICMzMzM7XFxuICB9XFxuXFxuLnJkckNhbGVuZGFyV3JhcHBlcjpub3QoLnJkckRhdGVSYW5nZVdyYXBwZXIpIC5yZHJEYXlIb3ZlcmVkIC5yZHJEYXlOdW1iZXI6YWZ0ZXJ7XFxuICBjb250ZW50OiAnJztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEuMzMzZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0ycHg7XFxuICBib3R0b206IC0ycHg7XFxuICBsZWZ0OiAwcHg7XFxuICByaWdodDogMHB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5yZHJEYXlQYXNzaXZle1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5yZHJEYXlQYXNzaXZlIC5yZHJEYXlOdW1iZXIgc3BhbntcXG4gICAgY29sb3I6ICNkNWRjZTA7XFxuICB9XFxuXFxuLnJkckRheVBhc3NpdmUgLnJkckluUmFuZ2UsIC5yZHJEYXlQYXNzaXZlIC5yZHJTdGFydEVkZ2UsIC5yZHJEYXlQYXNzaXZlIC5yZHJFbmRFZGdlLCAucmRyRGF5UGFzc2l2ZSAucmRyU2VsZWN0ZWQsIC5yZHJEYXlQYXNzaXZlIC5yZHJEYXlTdGFydFByZXZpZXcsIC5yZHJEYXlQYXNzaXZlIC5yZHJEYXlJblByZXZpZXcsIC5yZHJEYXlQYXNzaXZlIC5yZHJEYXlFbmRQcmV2aWV3e1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbi5yZHJEYXlEaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XFxufVxcblxcbi5yZHJEYXlEaXNhYmxlZCAucmRyRGF5TnVtYmVyIHNwYW57XFxuICAgIGNvbG9yOiAjYWViOWJmO1xcbiAgfVxcblxcbi5yZHJEYXlEaXNhYmxlZCAucmRySW5SYW5nZSwgLnJkckRheURpc2FibGVkIC5yZHJTdGFydEVkZ2UsIC5yZHJEYXlEaXNhYmxlZCAucmRyRW5kRWRnZSwgLnJkckRheURpc2FibGVkIC5yZHJTZWxlY3RlZCwgLnJkckRheURpc2FibGVkIC5yZHJEYXlTdGFydFByZXZpZXcsIC5yZHJEYXlEaXNhYmxlZCAucmRyRGF5SW5QcmV2aWV3LCAucmRyRGF5RGlzYWJsZWQgLnJkckRheUVuZFByZXZpZXd7XFxuICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgb3BhY2l0eSg2MCUpO1xcbiAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpIG9wYWNpdHkoNjAlKTtcXG4gIH1cXG5cXG4ucmRyTW9udGhOYW1le1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogIzg0OTA5NTtcXG4gIHBhZGRpbmc6IDAuODMzZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbmV4dC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMSEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0yIS4vc3R5bGVzLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiKSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbmV4dC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMSEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0yIS4vc3R5bGVzLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbmV4dC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMSEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0yIS4vc3R5bGVzLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbmV4dC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMSEuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0yIS4vZGVmYXVsdC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYikge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25leHQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi01LTEhLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMiEuL2RlZmF1bHQuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9uZXh0L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0xIS4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi01LTIhLi9kZWZhdWx0LmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9