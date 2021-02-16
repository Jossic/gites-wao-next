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
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Stepper */ "./node_modules/@material-ui/core/esm/Stepper/index.js");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Step */ "./node_modules/@material-ui/core/esm/Step/index.js");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "./node_modules/@material-ui/core/esm/StepLabel/index.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Check */ "./node_modules/@material-ui/icons/Check.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Settings */ "./node_modules/@material-ui/icons/Settings.js");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_StepConnector__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/StepConnector */ "./node_modules/@material-ui/core/esm/StepConnector/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_House__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/House */ "./node_modules/@material-ui/icons/House.js");
/* harmony import */ var _material_ui_icons_House__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_House__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/EmojiPeople */ "./node_modules/@material-ui/icons/EmojiPeople.js");
/* harmony import */ var _material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/CheckCircle */ "./node_modules/@material-ui/icons/CheckCircle.js");
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var _actions_reservationActions__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../actions/reservationActions */ "./actions/reservationActions.js");
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");






var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\reservation\\ReservationForm.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _this = undefined,
    _s3 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
























 // import Alert from '@material-ui/lab/Alert';



function Alert(props) {
  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_29__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({
    elevation: 6,
    variant: "filled"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }));
}

_c = Alert;
var QontoConnector = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["withStyles"])({
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
})(_material_ui_core_StepConnector__WEBPACK_IMPORTED_MODULE_15__["default"]);
var useQontoStepIconStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])({
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
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_9__["default"])(classes.root, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, classes.active, active)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 3
    }
  }, completed ? __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_13___default.a, {
    className: classes.completed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }
  }) : __jsx("div", {
    className: classes.circle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
    }
  }));
}

_s(QontoStepIcon, "zRam3KVaNpVBlW51GPG1kex6cwg=", false, function () {
  return [useQontoStepIconStyles];
});

_c2 = QontoStepIcon;
QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool
};
var ColorlibConnector = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["withStyles"])({
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
})(_material_ui_core_StepConnector__WEBPACK_IMPORTED_MODULE_15__["default"]);
var useColorlibStepIconStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])({
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
    1: __jsx(_material_ui_icons_House__WEBPACK_IMPORTED_MODULE_18___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 6
      }
    }),
    2: __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_14___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 6
      }
    }),
    3: __jsx(_material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_19___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 6
      }
    }),
    4: __jsx(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_20___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 6
      }
    })
  };
  return __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_9__["default"])(classes.root, (_clsx2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_clsx2, classes.active, active), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_clsx2, classes.completed, completed), _clsx2)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 3
    }
  }, icons[String(props.icon)]);
}

_s2(ColorlibStepIcon, "TbUAg343/d/fVF4s63V6GVaUi8k=", false, function () {
  return [useColorlibStepIconStyles];
});

_c3 = ColorlibStepIcon;
ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * The label displayed in the step icon.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
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

var ReservationForm = function ReservationForm() {
  _s3();

  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      activeStep = _useState[0],
      setActiveStep = _useState[1];

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_21__["useForm"])({
    shouldUnregister: false,
    defaultValues: {
      gite: 'manola',
      nbPers: 10,
      nbEnf: 5,
      nbChien: 1,
      litFait: true,
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
      handleSubmit = _useForm.handleSubmit,
      setValue = _useForm.setValue;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    open: false,
    loading: false,
    success: '',
    error: '',
    message: ''
  }),
      values = _useState2[0],
      setValues = _useState2[1];

  var message = values.message,
      success = values.success,
      loading = values.loading,
      error = values.error;
  var reRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  var steps = getSteps();

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      selectedDateArrivee = _useState3[0],
      setSelectedDateArrivee = _useState3[1];

  var handleDateChangeArrivee = function handleDateChangeArrivee(date) {
    setSelectedDateArrivee(date);
  };

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      selectedDateDepart = _useState4[0],
      setSelectedDateDepart = _useState4[1];

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

  var handleClose = function handleClose(event, reason) {
    if (reason === 'clickaway') {
      setValues(_objectSpread(_objectSpread({}, values), {}, {
        open: false
      }));
      return;
    }
  };

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      gites = _useState5[0],
      setGites = _useState5[1];

  var listDesGites = function listDesGites() {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_6__["listGitesNoms"])().then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        setGites.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(gites).concat([data]));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    listDesGites();
  }, []);

  var infoLoc = function infoLoc() {
    return __jsx("div", {
      className: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 3
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 4
      }
    }, "Informations sur la location"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_23__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["InputLabel"], {
      shrink: true,
      id: "demo-simple-select-placeholder-label-label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 6
      }
    }, "R\xE9servation sur le g\xEEte :"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_21__["Controller"], {
      control: control,
      name: "gite",
      as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["Select"], {
        id: "gite-select",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 8
        }
      }, gites.map(function (gite, i) {
        return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["MenuItem"], {
          key: gite.slug,
          value: gite.slug,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 336,
            columnNumber: 10
          }
        }, gite.nom);
      })),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 6
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["TextField"], {
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
        lineNumber: 344,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["TextField"], {
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
        lineNumber: 354,
        columnNumber: 5
      }
    })), __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_25__["MuiPickersUtilsProvider"], {
      utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_24__["default"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_23__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366,
        columnNumber: 5
      }
    }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_25__["KeyboardDatePicker"], {
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
        lineNumber: 367,
        columnNumber: 6
      }
    }), __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_25__["KeyboardDatePicker"], {
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
        lineNumber: 382,
        columnNumber: 6
      }
    }))));
  };

  var infoComp = function infoComp() {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401,
        columnNumber: 3
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 4
      }
    }, "Informations suppl\xE9mentaires"), __jsx("div", {
      className: classes.root,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["FormControl"], {
      component: "fieldset",
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 404,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["FormLabel"], {
      component: "legend",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 407,
        columnNumber: 6
      }
    }, "Merci d'indiquer si vous nous avez d\xE9ja contact\xE9 par :"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["FormGroup"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410,
        columnNumber: 6
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_23__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["Checkbox"], {
        name: "contactMail",
        inputRef: register,
        defaultValue: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414,
          columnNumber: 10
        }
      }),
      label: "Mail",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412,
        columnNumber: 8
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["Checkbox"], {
        name: "contactTel",
        inputRef: register,
        defaultValue: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424,
          columnNumber: 10
        }
      }),
      label: "T\xE9l\xE9phone",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422,
        columnNumber: 8
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["Checkbox"], {
        name: "contactAbritel",
        inputRef: register,
        defaultValue: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434,
          columnNumber: 10
        }
      }),
      label: "Abritel",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432,
        columnNumber: 8
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["Checkbox"], {
        name: "contactLeboncoin",
        inputRef: register,
        defaultValue: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444,
          columnNumber: 10
        }
      }),
      label: "Leboncoin",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 442,
        columnNumber: 8
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["Checkbox"], {
        name: "contactAutre",
        inputRef: register,
        defaultValue: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454,
          columnNumber: 10
        }
      }),
      label: "Autre",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 452,
        columnNumber: 8
      }
    })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_23__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 466,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["TextField"], {
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
        lineNumber: 467,
        columnNumber: 6
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["Switch"], {
        inputRef: register,
        checked: true,
        name: "litFait",
        color: "primary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479,
          columnNumber: 8
        }
      }),
      label: "Souhaitez-vous l'option lit fait \xE0 l'arriv\xE9e ?",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 477,
        columnNumber: 6
      }
    }))));
  };

  var Coord = function Coord() {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 493,
        columnNumber: 3
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 494,
        columnNumber: 4
      }
    }, "Vos coordonn\xE9es"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_23__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 496,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 497,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["InputLabel"], {
      shrink: true,
      id: "demo-simple-select-placeholder-label-label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 498,
        columnNumber: 6
      }
    }, "Civilit\xE9"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_21__["Controller"], {
      control: control,
      name: "civilite",
      as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["Select"], {
        id: "civilite-select",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 507,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["MenuItem"], {
        value: "mmme",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508,
          columnNumber: 9
        }
      }, "M. & Mme"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["MenuItem"], {
        value: "mme",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 509,
          columnNumber: 9
        }
      }, "Mme"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["MenuItem"], {
        value: "mlle",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510,
          columnNumber: 9
        }
      }, "Mlle"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["MenuItem"], {
        value: "m",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511,
          columnNumber: 9
        }
      }, "M."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["MenuItem"], {
        value: "asso",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512,
          columnNumber: 9
        }
      }, "Association"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["MenuItem"], {
        value: "ce",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 513,
          columnNumber: 9
        }
      }, "Comit\xE9 d'entreprise"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["MenuItem"], {
        value: "soc",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516,
          columnNumber: 9
        }
      }, "Soci\xE9t\xE9"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["MenuItem"], {
        value: "entr",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517,
          columnNumber: 9
        }
      }, "Entreprise"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["MenuItem"], {
        value: "foyervie",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518,
          columnNumber: 9
        }
      }, "Foyer de vie"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["MenuItem"], {
        value: "foyeracc",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521,
          columnNumber: 9
        }
      }, "Foyer d'accueil"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["MenuItem"], {
        value: "famil",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 524,
          columnNumber: 9
        }
      }, "Famille"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["MenuItem"], {
        value: "autre",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525,
          columnNumber: 9
        }
      }, "Autres")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 503,
        columnNumber: 6
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["TextField"], {
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
        lineNumber: 531,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["TextField"], {
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
        lineNumber: 540,
        columnNumber: 5
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_23__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 550,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["TextField"], {
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
        lineNumber: 551,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["TextField"], {
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
        lineNumber: 560,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["TextField"], {
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
        lineNumber: 569,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 578,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["InputLabel"], {
      shrink: true,
      id: "demo-simple-select-placeholder-label-label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 579,
        columnNumber: 6
      }
    }, "Pays"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_21__["Controller"], {
      control: control,
      name: "pays",
      as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["Select"], {
        id: "pays-select",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 589,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["MenuItem"], {
        value: "france",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590,
          columnNumber: 9
        }
      }, "France"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["MenuItem"], {
        value: "",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591,
          columnNumber: 9
        }
      }, "--------"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["MenuItem"], {
        value: "autres",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 592,
          columnNumber: 9
        }
      }, "Autres"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["MenuItem"], {
        value: "allemagne",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 593,
          columnNumber: 9
        }
      }, "Allemagne"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["MenuItem"], {
        value: "angleterre",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 594,
          columnNumber: 9
        }
      }, "Angleterre"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["MenuItem"], {
        value: "belgique",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 597,
          columnNumber: 9
        }
      }, "Belgique"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["MenuItem"], {
        value: "hollande",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 598,
          columnNumber: 9
        }
      }, "Hollande"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["MenuItem"], {
        value: "luxembourg",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 599,
          columnNumber: 9
        }
      }, "Luxembourg"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["MenuItem"], {
        value: "suisse",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 602,
          columnNumber: 9
        }
      }, "Suisse")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 585,
        columnNumber: 6
      }
    }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_23__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 608,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["TextField"], {
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
        lineNumber: 609,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["TextField"], {
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
        lineNumber: 618,
        columnNumber: 5
      }
    })));
  };

  var recap = function recap() {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 631,
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
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setValues(_objectSpread(_objectSpread({}, values), {}, {
                loading: true
              }));
              _context.next = 3;
              return reRef.current.executeAsync();

            case 3:
              data.token = _context.sent;
              reRef.current.reset();
              console.log('onSubmit data =>', data);
              Object(_actions_reservationActions__WEBPACK_IMPORTED_MODULE_26__["createReservation"])(data).then(function (result) {
                console.log('result vaut =>', result);

                if (result.error) {
                  console.log('erreur', result.error);
                  setValues(_objectSpread(_objectSpread({}, values), {}, {
                    error: result.error
                  }));
                } else if (result.dejaReserveMessage) {
                  console.log('deja reserve');
                  setValues(_objectSpread(_objectSpread({}, values), {}, {
                    error: result.dejaReserveMessage
                  }));
                } else {
                  setValues(_objectSpread(_objectSpread({}, values), {}, {
                    success: true,
                    loading: false,
                    message: result.message
                  })); // setTimeout(() => {
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
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676,
      columnNumber: 3
    }
  }, loading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["CircularProgress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677,
      columnNumber: 16
    }
  }), success && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["Snackbar"], {
    open: open,
    autoHideDuration: 6000,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 679,
      columnNumber: 5
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680,
      columnNumber: 6
    }
  }, message)), error && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["Snackbar"], {
    open: open,
    autoHideDuration: 6000,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686,
      columnNumber: 5
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687,
      columnNumber: 6
    }
  }, error)), __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 692,
      columnNumber: 4
    }
  }, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 693,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    alternativeLabel: true,
    activeStep: activeStep,
    connector: __jsx(ColorlibConnector, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 697,
        columnNumber: 18
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 694,
      columnNumber: 6
    }
  }, steps.map(function (label) {
    return __jsx(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 699,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_12__["default"], {
      StepIconComponent: ColorlibStepIcon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 700,
        columnNumber: 9
      }
    }, label));
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 706,
      columnNumber: 6
    }
  }, activeStep === steps.length ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 708,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], {
    className: classes.instructions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 710,
      columnNumber: 9
    }
  }, "Votre demande a bien \xE9t\xE9 prise en compte"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
    onClick: handleReset,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 713,
      columnNumber: 9
    }
  }, "Recommencer")) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 720,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], {
    className: classes.instructions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 721,
      columnNumber: 9
    }
  }, getStepContent(activeStep)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
    disabled: activeStep === 0,
    onClick: handleBack,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 725,
      columnNumber: 10
    }
  }, "Retour"), activeStep === steps.length - 1 ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
    type: "submit",
    variant: "contained",
    color: "primary",
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 732,
      columnNumber: 11
    }
  }, "Valider") : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
    variant: "contained",
    color: "primary",
    onClick: handleNext,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 740,
      columnNumber: 11
    }
  }, "Suivant")))), __jsx(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_27__["default"], {
    sitekey: _config__WEBPACK_IMPORTED_MODULE_28__["RECAPTCHA_SECRET_KEY"],
    ref: reRef,
    size: "invisible" // onChange={onChange}
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 752,
      columnNumber: 6
    }
  }))));
};

_s3(ReservationForm, "9SKWW078nfqh5Vrqe3GKy3tI9cM=", false, function () {
  return [useStyles, react_hook_form__WEBPACK_IMPORTED_MODULE_21__["useForm"]];
});

_c4 = ReservationForm;
/* harmony default export */ __webpack_exports__["default"] = (ReservationForm);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Alert");
$RefreshReg$(_c2, "QontoStepIcon");
$RefreshReg$(_c3, "ColorlibStepIcon");
$RefreshReg$(_c4, "ReservationForm");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXNlcnZhdGlvbi9SZXNlcnZhdGlvbkZvcm0uanMiXSwibmFtZXMiOlsiQWxlcnQiLCJwcm9wcyIsIlFvbnRvQ29ubmVjdG9yIiwid2l0aFN0eWxlcyIsImFsdGVybmF0aXZlTGFiZWwiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJhY3RpdmUiLCJib3JkZXJDb2xvciIsImNvbXBsZXRlZCIsImxpbmUiLCJib3JkZXJUb3BXaWR0aCIsImJvcmRlclJhZGl1cyIsIlN0ZXBDb25uZWN0b3IiLCJ1c2VRb250b1N0ZXBJY29uU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJjb2xvciIsImRpc3BsYXkiLCJoZWlnaHQiLCJhbGlnbkl0ZW1zIiwiY2lyY2xlIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6SW5kZXgiLCJmb250U2l6ZSIsIlFvbnRvU3RlcEljb24iLCJjbGFzc2VzIiwiY2xzeCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJDb2xvcmxpYkNvbm5lY3RvciIsImJhY2tncm91bmRJbWFnZSIsImJvcmRlciIsInVzZUNvbG9ybGliU3RlcEljb25TdHlsZXMiLCJqdXN0aWZ5Q29udGVudCIsImJveFNoYWRvdyIsIkNvbG9ybGliU3RlcEljb24iLCJpY29ucyIsIlN0cmluZyIsImljb24iLCJub2RlIiwidXNlU3R5bGVzIiwidGhlbWUiLCJidXR0b24iLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJpbnN0cnVjdGlvbnMiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJmb3JtQ29udHJvbCIsIm1hcmdpbiIsIm1pbldpZHRoIiwic2VsZWN0RW1wdHkiLCJnZXRTdGVwcyIsIlJlc2VydmF0aW9uRm9ybSIsInVzZVN0YXRlIiwiYWN0aXZlU3RlcCIsInNldEFjdGl2ZVN0ZXAiLCJ1c2VGb3JtIiwic2hvdWxkVW5yZWdpc3RlciIsImRlZmF1bHRWYWx1ZXMiLCJnaXRlIiwibmJQZXJzIiwibmJFbmYiLCJuYkNoaWVuIiwibGl0RmFpdCIsIm5vbSIsInByZW5vbSIsImFkcmVzc2UiLCJjcCIsInZpbGxlIiwidGVsIiwibWFpbCIsImNvbnRyb2wiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInNldFZhbHVlIiwib3BlbiIsImxvYWRpbmciLCJzdWNjZXNzIiwiZXJyb3IiLCJtZXNzYWdlIiwidmFsdWVzIiwic2V0VmFsdWVzIiwicmVSZWYiLCJ1c2VSZWYiLCJzdGVwcyIsInNlbGVjdGVkRGF0ZUFycml2ZWUiLCJzZXRTZWxlY3RlZERhdGVBcnJpdmVlIiwiaGFuZGxlRGF0ZUNoYW5nZUFycml2ZWUiLCJkYXRlIiwic2VsZWN0ZWREYXRlRGVwYXJ0Iiwic2V0U2VsZWN0ZWREYXRlRGVwYXJ0IiwiaGFuZGxlRGF0ZUNoYW5nZURlcGFydCIsImhhbmRsZU5leHQiLCJwcmV2QWN0aXZlU3RlcCIsImhhbmRsZUJhY2siLCJoYW5kbGVSZXNldCIsImhhbmRsZUNsb3NlIiwiZXZlbnQiLCJyZWFzb24iLCJnaXRlcyIsInNldEdpdGVzIiwibGlzdERlc0dpdGVzIiwibGlzdEdpdGVzTm9tcyIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImluZm9Mb2MiLCJtYXAiLCJpIiwic2x1ZyIsInNocmluayIsIkRhdGVGbnNVdGlscyIsImluZm9Db21wIiwiQ29vcmQiLCJyZWNhcCIsImdldFN0ZXBDb250ZW50Iiwic3RlcCIsIm9uU3VibWl0IiwiY3VycmVudCIsImV4ZWN1dGVBc3luYyIsInRva2VuIiwicmVzZXQiLCJjcmVhdGVSZXNlcnZhdGlvbiIsInJlc3VsdCIsImRlamFSZXNlcnZlTWVzc2FnZSIsImxhYmVsIiwibGVuZ3RoIiwiUkVDQVBUQ0hBX1NFQ1JFVF9LRVkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q1diLFMsRUFFc0NpQix3RDs7O01BSGpESixlO0FBNmdCU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzZXJ2YXRpb24uY2QzOTRjYjdiNGQxMTA0NTI0YmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpc3RHaXRlc05vbXMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgU3RlcHBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdGVwcGVyJztcclxuaW1wb3J0IFN0ZXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcCc7XHJcbmltcG9ydCBTdGVwTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcExhYmVsJztcclxuaW1wb3J0IENoZWNrIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGVjayc7XHJcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NldHRpbmdzJztcclxuaW1wb3J0IFN0ZXBDb25uZWN0b3IgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcENvbm5lY3Rvcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBIb3VzZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hvdXNlJztcclxuaW1wb3J0IEVtb2ppUGVvcGxlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRW1vamlQZW9wbGUnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCB7XHJcblx0Q2hlY2tib3gsXHJcblx0Q29udGFpbmVyLFxyXG5cdEZvcm1Db250cm9sLFxyXG5cdEZvcm1Db250cm9sTGFiZWwsXHJcblx0Rm9ybUdyb3VwLFxyXG5cdEZvcm1IZWxwZXJUZXh0LFxyXG5cdEZvcm1MYWJlbCxcclxuXHRJbnB1dExhYmVsLFxyXG5cdE1lbnVJdGVtLFxyXG5cdFNlbGVjdCxcclxuXHRTd2l0Y2gsXHJcblx0VGV4dEZpZWxkLFxyXG5cdElucHV0LFxyXG5cdENpcmN1bGFyUHJvZ3Jlc3MsXHJcblx0U25hY2tiYXIsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IERhdGVGbnNVdGlscyBmcm9tICdAZGF0ZS1pby9kYXRlLWZucyc7XHJcbmltcG9ydCB7XHJcblx0TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIsXHJcblx0S2V5Ym9hcmREYXRlUGlja2VyLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9waWNrZXJzJztcclxuaW1wb3J0IHsgY3JlYXRlUmVzZXJ2YXRpb24gfSBmcm9tICcuLi8uLi9hY3Rpb25zL3Jlc2VydmF0aW9uQWN0aW9ucyc7XHJcbmltcG9ydCBSZUNBUFRDSEEgZnJvbSAncmVhY3QtZ29vZ2xlLXJlY2FwdGNoYSc7XHJcbmltcG9ydCB7IFJFQ0FQVENIQV9TRUNSRVRfS0VZIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuLy8gaW1wb3J0IEFsZXJ0IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQWxlcnQnO1xyXG5pbXBvcnQgTXVpQWxlcnQgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BbGVydCc7XHJcblxyXG5mdW5jdGlvbiBBbGVydChwcm9wcykge1xyXG5cdHJldHVybiA8TXVpQWxlcnQgZWxldmF0aW9uPXs2fSB2YXJpYW50PSdmaWxsZWQnIHsuLi5wcm9wc30gLz47XHJcbn1cclxuXHJcbmNvbnN0IFFvbnRvQ29ubmVjdG9yID0gd2l0aFN0eWxlcyh7XHJcblx0YWx0ZXJuYXRpdmVMYWJlbDoge1xyXG5cdFx0dG9wOiAxMCxcclxuXHRcdGxlZnQ6ICdjYWxjKC01MCUgKyAxNnB4KScsXHJcblx0XHRyaWdodDogJ2NhbGMoNTAlICsgMTZweCknLFxyXG5cdH0sXHJcblx0YWN0aXZlOiB7XHJcblx0XHQnJiAkbGluZSc6IHtcclxuXHRcdFx0Ym9yZGVyQ29sb3I6ICcjNzg0YWY0JyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRjb21wbGV0ZWQ6IHtcclxuXHRcdCcmICRsaW5lJzoge1xyXG5cdFx0XHRib3JkZXJDb2xvcjogJyM3ODRhZjQnLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGxpbmU6IHtcclxuXHRcdGJvcmRlckNvbG9yOiAnI2VhZWFmMCcsXHJcblx0XHRib3JkZXJUb3BXaWR0aDogMyxcclxuXHRcdGJvcmRlclJhZGl1czogMSxcclxuXHR9LFxyXG59KShTdGVwQ29ubmVjdG9yKTtcclxuXHJcbmNvbnN0IHVzZVFvbnRvU3RlcEljb25TdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuXHRyb290OiB7XHJcblx0XHRjb2xvcjogJyNlYWVhZjAnLFxyXG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0aGVpZ2h0OiAyMixcclxuXHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cdH0sXHJcblx0YWN0aXZlOiB7XHJcblx0XHRjb2xvcjogJyM3ODRhZjQnLFxyXG5cdH0sXHJcblx0Y2lyY2xlOiB7XHJcblx0XHR3aWR0aDogOCxcclxuXHRcdGhlaWdodDogOCxcclxuXHRcdGJvcmRlclJhZGl1czogJzUwJScsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxyXG5cdH0sXHJcblx0Y29tcGxldGVkOiB7XHJcblx0XHRjb2xvcjogJyM3ODRhZjQnLFxyXG5cdFx0ekluZGV4OiAxLFxyXG5cdFx0Zm9udFNpemU6IDE4LFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gUW9udG9TdGVwSWNvbihwcm9wcykge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VRb250b1N0ZXBJY29uU3R5bGVzKCk7XHJcblx0Y29uc3QgeyBhY3RpdmUsIGNvbXBsZXRlZCB9ID0gcHJvcHM7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsIHtcclxuXHRcdFx0XHRbY2xhc3Nlcy5hY3RpdmVdOiBhY3RpdmUsXHJcblx0XHRcdH0pfT5cclxuXHRcdFx0e2NvbXBsZXRlZCA/IChcclxuXHRcdFx0XHQ8Q2hlY2sgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbXBsZXRlZH0gLz5cclxuXHRcdFx0KSA6IChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jaXJjbGV9IC8+XHJcblx0XHRcdCl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5Rb250b1N0ZXBJY29uLnByb3BUeXBlcyA9IHtcclxuXHQvKipcclxuXHQgKiBXaGV0aGVyIHRoaXMgc3RlcCBpcyBhY3RpdmUuXHJcblx0ICovXHJcblx0YWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcclxuXHQvKipcclxuXHQgKiBNYXJrIHRoZSBzdGVwIGFzIGNvbXBsZXRlZC4gSXMgcGFzc2VkIHRvIGNoaWxkIGNvbXBvbmVudHMuXHJcblx0ICovXHJcblx0Y29tcGxldGVkOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmNvbnN0IENvbG9ybGliQ29ubmVjdG9yID0gd2l0aFN0eWxlcyh7XHJcblx0YWx0ZXJuYXRpdmVMYWJlbDoge1xyXG5cdFx0dG9wOiAyMixcclxuXHR9LFxyXG5cdGFjdGl2ZToge1xyXG5cdFx0JyYgJGxpbmUnOiB7XHJcblx0XHRcdGJhY2tncm91bmRJbWFnZTpcclxuXHRcdFx0XHQnbGluZWFyLWdyYWRpZW50KCA5NWRlZyxyZ2IoMjQyLDExMywzMykgMCUscmdiKDIzMyw2NCw4NykgNTAlLHJnYigxMzgsMzUsMTM1KSAxMDAlKScsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0Y29tcGxldGVkOiB7XHJcblx0XHQnJiAkbGluZSc6IHtcclxuXHRcdFx0YmFja2dyb3VuZEltYWdlOlxyXG5cdFx0XHRcdCdsaW5lYXItZ3JhZGllbnQoIDk1ZGVnLHJnYigyNDIsMTEzLDMzKSAwJSxyZ2IoMjMzLDY0LDg3KSA1MCUscmdiKDEzOCwzNSwxMzUpIDEwMCUpJyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRsaW5lOiB7XHJcblx0XHRoZWlnaHQ6IDMsXHJcblx0XHRib3JkZXI6IDAsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjZWFlYWYwJyxcclxuXHRcdGJvcmRlclJhZGl1czogMSxcclxuXHR9LFxyXG59KShTdGVwQ29ubmVjdG9yKTtcclxuXHJcbmNvbnN0IHVzZUNvbG9ybGliU3RlcEljb25TdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuXHRyb290OiB7XHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjY2NjJyxcclxuXHRcdHpJbmRleDogMSxcclxuXHRcdGNvbG9yOiAnI2ZmZicsXHJcblx0XHR3aWR0aDogNTAsXHJcblx0XHRoZWlnaHQ6IDUwLFxyXG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAnNTAlJyxcclxuXHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuXHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cdH0sXHJcblx0YWN0aXZlOiB7XHJcblx0XHRiYWNrZ3JvdW5kSW1hZ2U6XHJcblx0XHRcdCdsaW5lYXItZ3JhZGllbnQoIDEzNmRlZywgcmdiKDI0MiwxMTMsMzMpIDAlLCByZ2IoMjMzLDY0LDg3KSA1MCUsIHJnYigxMzgsMzUsMTM1KSAxMDAlKScsXHJcblx0XHRib3hTaGFkb3c6ICcwIDRweCAxMHB4IDAgcmdiYSgwLDAsMCwuMjUpJyxcclxuXHR9LFxyXG5cdGNvbXBsZXRlZDoge1xyXG5cdFx0YmFja2dyb3VuZEltYWdlOlxyXG5cdFx0XHQnbGluZWFyLWdyYWRpZW50KCAxMzZkZWcsIHJnYigyNDIsMTEzLDMzKSAwJSwgcmdiKDIzMyw2NCw4NykgNTAlLCByZ2IoMTM4LDM1LDEzNSkgMTAwJSknLFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gQ29sb3JsaWJTdGVwSWNvbihwcm9wcykge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VDb2xvcmxpYlN0ZXBJY29uU3R5bGVzKCk7XHJcblx0Y29uc3QgeyBhY3RpdmUsIGNvbXBsZXRlZCB9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IGljb25zID0ge1xyXG5cdFx0MTogPEhvdXNlSWNvbiAvPixcclxuXHRcdDI6IDxTZXR0aW5nc0ljb24gLz4sXHJcblx0XHQzOiA8RW1vamlQZW9wbGVJY29uIC8+LFxyXG5cdFx0NDogPENoZWNrQ2lyY2xlSWNvbiAvPixcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCB7XHJcblx0XHRcdFx0W2NsYXNzZXMuYWN0aXZlXTogYWN0aXZlLFxyXG5cdFx0XHRcdFtjbGFzc2VzLmNvbXBsZXRlZF06IGNvbXBsZXRlZCxcclxuXHRcdFx0fSl9PlxyXG5cdFx0XHR7aWNvbnNbU3RyaW5nKHByb3BzLmljb24pXX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbkNvbG9ybGliU3RlcEljb24ucHJvcFR5cGVzID0ge1xyXG5cdC8qKlxyXG5cdCAqIFdoZXRoZXIgdGhpcyBzdGVwIGlzIGFjdGl2ZS5cclxuXHQgKi9cclxuXHRhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxyXG5cdC8qKlxyXG5cdCAqIE1hcmsgdGhlIHN0ZXAgYXMgY29tcGxldGVkLiBJcyBwYXNzZWQgdG8gY2hpbGQgY29tcG9uZW50cy5cclxuXHQgKi9cclxuXHRjb21wbGV0ZWQ6IFByb3BUeXBlcy5ib29sLFxyXG5cdC8qKlxyXG5cdCAqIFRoZSBsYWJlbCBkaXNwbGF5ZWQgaW4gdGhlIHN0ZXAgaWNvbi5cclxuXHQgKi9cclxuXHRpY29uOiBQcm9wVHlwZXMubm9kZSxcclxufTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0fSxcclxuXHRidXR0b246IHtcclxuXHRcdG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdH0sXHJcblx0aW5zdHJ1Y3Rpb25zOiB7XHJcblx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHRtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0fSxcclxuXHRmb3JtQ29udHJvbDoge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0bWluV2lkdGg6IDEyMCxcclxuXHR9LFxyXG5cdHNlbGVjdEVtcHR5OiB7XHJcblx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0fSxcclxufSkpO1xyXG5cclxuZnVuY3Rpb24gZ2V0U3RlcHMoKSB7XHJcblx0cmV0dXJuIFtcclxuXHRcdCdJbmZvcm1hdGlvbiBzdXIgbGEgbG9jYXRpb24nLFxyXG5cdFx0J0luZm9ybWF0aW9ucyBjb21wbMOpbWVudGFpcmVzJyxcclxuXHRcdCdWb3MgY29vcmRvbm7DqWVzJyxcclxuXHRcdCdSw6ljYXBpdHVsYXRpZicsXHJcblx0XTtcclxufVxyXG5cclxuY29uc3QgUmVzZXJ2YXRpb25Gb3JtID0gKCkgPT4ge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRjb25zdCBbYWN0aXZlU3RlcCwgc2V0QWN0aXZlU3RlcF0gPSB1c2VTdGF0ZSgwKTtcclxuXHRjb25zdCB7IGNvbnRyb2wsIHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIHNldFZhbHVlIH0gPSB1c2VGb3JtKHtcclxuXHRcdHNob3VsZFVucmVnaXN0ZXI6IGZhbHNlLFxyXG5cdFx0ZGVmYXVsdFZhbHVlczoge1xyXG5cdFx0XHRnaXRlOiAnbWFub2xhJyxcclxuXHRcdFx0bmJQZXJzOiAxMCxcclxuXHRcdFx0bmJFbmY6IDUsXHJcblx0XHRcdG5iQ2hpZW46IDEsXHJcblx0XHRcdGxpdEZhaXQ6IHRydWUsXHJcblx0XHRcdG5vbTogJ0xhcGllcnJlJyxcclxuXHRcdFx0cHJlbm9tOiAnSm9zc2ljJyxcclxuXHRcdFx0YWRyZXNzZTogJzE4IHJ1ZSB0ZXN0JyxcclxuXHRcdFx0Y3A6ICc1MTAwMCcsXHJcblx0XHRcdHZpbGxlOiAnbWFWaWxsZScsXHJcblx0XHRcdHRlbDogJzA2IDE1IDU1IDU1IDU1JyxcclxuXHRcdFx0bWFpbDogJ2pvc3NpYy5sYXBpZXJyZUBnbWFpbC5jb20nLFxyXG5cdFx0fSxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuXHRcdG9wZW46IGZhbHNlLFxyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRzdWNjZXNzOiAnJyxcclxuXHRcdGVycm9yOiAnJyxcclxuXHRcdG1lc3NhZ2U6ICcnLFxyXG5cdH0pO1xyXG5cdGNvbnN0IHsgbWVzc2FnZSwgc3VjY2VzcywgbG9hZGluZywgZXJyb3IgfSA9IHZhbHVlcztcclxuXHJcblx0Y29uc3QgcmVSZWYgPSB1c2VSZWYoKTtcclxuXHJcblx0Y29uc3Qgc3RlcHMgPSBnZXRTdGVwcygpO1xyXG5cclxuXHRjb25zdCBbc2VsZWN0ZWREYXRlQXJyaXZlZSwgc2V0U2VsZWN0ZWREYXRlQXJyaXZlZV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVEYXRlQ2hhbmdlQXJyaXZlZSA9IChkYXRlKSA9PiB7XHJcblx0XHRzZXRTZWxlY3RlZERhdGVBcnJpdmVlKGRhdGUpO1xyXG5cdH07XHJcblx0Y29uc3QgW3NlbGVjdGVkRGF0ZURlcGFydCwgc2V0U2VsZWN0ZWREYXRlRGVwYXJ0XSA9IHVzZVN0YXRlKCk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZURhdGVDaGFuZ2VEZXBhcnQgPSAoZGF0ZSkgPT4ge1xyXG5cdFx0c2V0U2VsZWN0ZWREYXRlRGVwYXJ0KGRhdGUpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XHJcblx0XHRzZXRBY3RpdmVTdGVwKChwcmV2QWN0aXZlU3RlcCkgPT4gcHJldkFjdGl2ZVN0ZXAgKyAxKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVCYWNrID0gKCkgPT4ge1xyXG5cdFx0c2V0QWN0aXZlU3RlcCgocHJldkFjdGl2ZVN0ZXApID0+IHByZXZBY3RpdmVTdGVwIC0gMSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XHJcblx0XHRzZXRBY3RpdmVTdGVwKDApO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNsb3NlID0gKGV2ZW50LCByZWFzb24pID0+IHtcclxuXHRcdGlmIChyZWFzb24gPT09ICdjbGlja2F3YXknKSB7XHJcblx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgb3BlbjogZmFsc2UgfSk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBbZ2l0ZXMsIHNldEdpdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgbGlzdERlc0dpdGVzID0gKCkgPT4ge1xyXG5cdFx0bGlzdEdpdGVzTm9tcygpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0R2l0ZXMoLi4uZ2l0ZXMsIGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGlzdERlc0dpdGVzKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCBpbmZvTG9jID0gKCkgPT4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9Jyc+XHJcblx0XHRcdDxoMj5JbmZvcm1hdGlvbnMgc3VyIGxhIGxvY2F0aW9uPC9oMj5cclxuXHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdzcGFjZS1hcm91bmQnPlxyXG5cdFx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0PElucHV0TGFiZWxcclxuXHRcdFx0XHRcdFx0c2hyaW5rXHJcblx0XHRcdFx0XHRcdGlkPSdkZW1vLXNpbXBsZS1zZWxlY3QtcGxhY2Vob2xkZXItbGFiZWwtbGFiZWwnPlxyXG5cdFx0XHRcdFx0XHRSw6lzZXJ2YXRpb24gc3VyIGxlIGfDrnRlIDpcclxuXHRcdFx0XHRcdDwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0XHRcdG5hbWU9J2dpdGUnXHJcblx0XHRcdFx0XHRcdGFzPXtcclxuXHRcdFx0XHRcdFx0XHQ8U2VsZWN0IGlkPSdnaXRlLXNlbGVjdCc+XHJcblx0XHRcdFx0XHRcdFx0XHR7Z2l0ZXMubWFwKChnaXRlLCBpKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSBrZXk9e2dpdGUuc2x1Z30gdmFsdWU9e2dpdGUuc2x1Z30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2dpdGUubm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0PC9TZWxlY3Q+XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSduYlBlcnMnXHJcblx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J05vbWJyZSBkZSBwZXJzb25uZXMgdG90YWwnXHJcblx0XHRcdFx0XHR0eXBlPSdudW1iZXInXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdG5hbWU9J25iRW5mJ1xyXG5cdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdGxhYmVsPSdEb250IGVuZmFudHMgZGUgbW9pbnMgZGUgMTggYW5zJ1xyXG5cdFx0XHRcdFx0dHlwZT0nbnVtYmVyJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIgdXRpbHM9e0RhdGVGbnNVdGlsc30+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J3NwYWNlLWFyb3VuZCc+XHJcblx0XHRcdFx0XHQ8S2V5Ym9hcmREYXRlUGlja2VyXHJcblx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0bWFyZ2luPSdub3JtYWwnXHJcblx0XHRcdFx0XHRcdGlkPSdkYXRlLXBpY2tlci1kaWFsb2cnXHJcblx0XHRcdFx0XHRcdG5hbWU9J2RhdGVBcnJpdmVlJ1xyXG5cdFx0XHRcdFx0XHRsYWJlbD1cIkRhdGUgZCdhcnJpdsOpZVwiXHJcblx0XHRcdFx0XHRcdGZvcm1hdD0nTU0vZGQveXl5eSdcclxuXHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPScnXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtzZWxlY3RlZERhdGVBcnJpdmVlfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlRGF0ZUNoYW5nZUFycml2ZWV9XHJcblx0XHRcdFx0XHRcdEtleWJvYXJkQnV0dG9uUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6ICdjaGFuZ2UgZGF0ZScsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHRcdDxLZXlib2FyZERhdGVQaWNrZXJcclxuXHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRtYXJnaW49J25vcm1hbCdcclxuXHRcdFx0XHRcdFx0aWQ9J2RhdGUtcGlja2VyLWRpYWxvZydcclxuXHRcdFx0XHRcdFx0bmFtZT0nZGF0ZURlcGFydCdcclxuXHRcdFx0XHRcdFx0bGFiZWw9J0RhdGUgZGUgZMOpcGFydCdcclxuXHRcdFx0XHRcdFx0Zm9ybWF0PSdNTS9kZC95eXl5J1xyXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9JydcclxuXHRcdFx0XHRcdFx0dmFsdWU9e3NlbGVjdGVkRGF0ZURlcGFydH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZURhdGVDaGFuZ2VEZXBhcnR9XHJcblx0XHRcdFx0XHRcdEtleWJvYXJkQnV0dG9uUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6ICdjaGFuZ2UgZGF0ZScsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PC9NdWlQaWNrZXJzVXRpbHNQcm92aWRlcj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblx0Y29uc3QgaW5mb0NvbXAgPSAoKSA9PiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8aDI+SW5mb3JtYXRpb25zIHN1cHBsw6ltZW50YWlyZXM8L2gyPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2xcclxuXHRcdFx0XHRcdGNvbXBvbmVudD0nZmllbGRzZXQnXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0PEZvcm1MYWJlbCBjb21wb25lbnQ9J2xlZ2VuZCc+XHJcblx0XHRcdFx0XHRcdE1lcmNpIGQnaW5kaXF1ZXIgc2kgdm91cyBub3VzIGF2ZXogZMOpamEgY29udGFjdMOpIHBhciA6XHJcblx0XHRcdFx0XHQ8L0Zvcm1MYWJlbD5cclxuXHRcdFx0XHRcdDxGb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdzcGFjZS1hcm91bmQnPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250cm9sPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PENoZWNrYm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nY29udGFjdE1haWwnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17ZmFsc2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD0nTWFpbCdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250cm9sPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PENoZWNrYm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nY29udGFjdFRlbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPSdUw6lsw6lwaG9uZSdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250cm9sPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PENoZWNrYm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nY29udGFjdEFicml0ZWwnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17ZmFsc2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD0nQWJyaXRlbCdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250cm9sPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PENoZWNrYm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nY29udGFjdExlYm9uY29pbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPSdMZWJvbmNvaW4nXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xMYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udHJvbD17XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxDaGVja2JveFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J2NvbnRhY3RBdXRyZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPSdBdXRyZSdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cclxuXHRcdFx0XHRcdHsvKiA8Rm9ybUhlbHBlclRleHQ+QmUgY2FyZWZ1bDwvRm9ybUhlbHBlclRleHQ+ICovfVxyXG5cdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J3NwYWNlLWFyb3VuZCc+XHJcblx0XHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0bmFtZT0nbmJDaGllbidcclxuXHRcdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdFx0bGFiZWw9J05vbWJyZSBkZSBjaGllbiA/ICgz4oKsL2pvdXIvYW5pbWFsKSdcclxuXHRcdFx0XHRcdFx0dHlwZT0nbnVtYmVyJ1xyXG5cdFx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PEZvcm1Db250cm9sTGFiZWxcclxuXHRcdFx0XHRcdFx0Y29udHJvbD17XHJcblx0XHRcdFx0XHRcdFx0PFN3aXRjaFxyXG5cdFx0XHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J2xpdEZhaXQnXHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcj0ncHJpbWFyeSdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGxhYmVsPVwiU291aGFpdGV6LXZvdXMgbCdvcHRpb24gbGl0IGZhaXQgw6AgbCdhcnJpdsOpZSA/XCJcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblx0Y29uc3QgQ29vcmQgPSAoKSA9PiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8aDI+Vm9zIGNvb3Jkb25uw6llczwvaDI+XHJcblxyXG5cdFx0XHQ8R3JpZCBjb250YWluZXIganVzdGlmeT0nc3BhY2UtYXJvdW5kJz5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdDxJbnB1dExhYmVsXHJcblx0XHRcdFx0XHRcdHNocmlua1xyXG5cdFx0XHRcdFx0XHRpZD0nZGVtby1zaW1wbGUtc2VsZWN0LXBsYWNlaG9sZGVyLWxhYmVsLWxhYmVsJz5cclxuXHRcdFx0XHRcdFx0Q2l2aWxpdMOpXHJcblx0XHRcdFx0XHQ8L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0XHRuYW1lPSdjaXZpbGl0ZSdcclxuXHRcdFx0XHRcdFx0YXM9e1xyXG5cdFx0XHRcdFx0XHRcdDxTZWxlY3QgaWQ9J2NpdmlsaXRlLXNlbGVjdCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J21tbWUnPk0uICYgTW1lPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nbW1lJz5NbWU8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdtbGxlJz5NbGxlPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nbSc+TS48L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdhc3NvJz5Bc3NvY2lhdGlvbjwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2NlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Q29taXTDqSBkJ2VudHJlcHJpc2VcclxuXHRcdFx0XHRcdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J3NvYyc+U29jacOpdMOpPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nZW50cic+RW50cmVwcmlzZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2ZveWVydmllJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Rm95ZXIgZGUgdmllXHJcblx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdmb3llcmFjYyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEZveWVyIGQnYWNjdWVpbFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nZmFtaWwnPkZhbWlsbGU8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdhdXRyZSc+QXV0cmVzPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8L1NlbGVjdD5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSdub20nXHJcblx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J05vbSdcclxuXHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0bmFtZT0ncHJlbm9tJ1xyXG5cdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdGxhYmVsPSdQcsOpbm9tJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8R3JpZCBjb250YWluZXIganVzdGlmeT0nc3BhY2UtYXJvdW5kJz5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSdhZHJlc3NlJ1xyXG5cdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdGxhYmVsPSdBZHJlc3NlJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSdjcCdcclxuXHRcdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0XHRsYWJlbD0nQ29kZSBQb3N0YWwnXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdG5hbWU9J3ZpbGxlJ1xyXG5cdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdGxhYmVsPSdWaWxsZSdcclxuXHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHQ8SW5wdXRMYWJlbFxyXG5cdFx0XHRcdFx0XHRzaHJpbmtcclxuXHRcdFx0XHRcdFx0aWQ9J2RlbW8tc2ltcGxlLXNlbGVjdC1wbGFjZWhvbGRlci1sYWJlbC1sYWJlbCc+XHJcblx0XHRcdFx0XHRcdFBheXNcclxuXHRcdFx0XHRcdDwvSW5wdXRMYWJlbD5cclxuXHJcblx0XHRcdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0XHRuYW1lPSdwYXlzJ1xyXG5cdFx0XHRcdFx0XHRhcz17XHJcblx0XHRcdFx0XHRcdFx0PFNlbGVjdCBpZD0ncGF5cy1zZWxlY3QnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdmcmFuY2UnPkZyYW5jZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9Jyc+LS0tLS0tLS08L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdhdXRyZXMnPkF1dHJlczwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2FsbGVtYWduZSc+QWxsZW1hZ25lPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nYW5nbGV0ZXJyZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEFuZ2xldGVycmVcclxuXHRcdFx0XHRcdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2JlbGdpcXVlJz5CZWxnaXF1ZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2hvbGxhbmRlJz5Ib2xsYW5kZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2x1eGVtYm91cmcnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRMdXhlbWJvdXJnXHJcblx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdzdWlzc2UnPlN1aXNzZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PC9TZWxlY3Q+XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8R3JpZCBjb250YWluZXIganVzdGlmeT0nc3BhY2UtYXJvdW5kJz5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSd0ZWwnXHJcblx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J1TDqWzDqXBob25lJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSdtYWlsJ1xyXG5cdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdGxhYmVsPSdFbWFpbCdcclxuXHRcdFx0XHRcdHR5cGU9J21haWwnXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cdGNvbnN0IHJlY2FwID0gKCkgPT4gPHA+SlNPTi5zdHJpbmdpZnkoKTwvcD47XHJcblxyXG5cdGZ1bmN0aW9uIGdldFN0ZXBDb250ZW50KHN0ZXApIHtcclxuXHRcdHN3aXRjaCAoc3RlcCkge1xyXG5cdFx0XHRjYXNlIDA6XHJcblx0XHRcdFx0cmV0dXJuIGluZm9Mb2MoKTtcclxuXHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdHJldHVybiBpbmZvQ29tcCgpO1xyXG5cdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0cmV0dXJuIENvb3JkKCk7XHJcblx0XHRcdGNhc2UgMzpcclxuXHRcdFx0XHRyZXR1cm4gcmVjYXAoKTtcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRyZXR1cm4gJ0VycmV1cic7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChkYXRhKSA9PiB7XHJcblx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUgfSk7XHJcblx0XHRkYXRhLnRva2VuID0gYXdhaXQgcmVSZWYuY3VycmVudC5leGVjdXRlQXN5bmMoKTtcclxuXHRcdHJlUmVmLmN1cnJlbnQucmVzZXQoKTtcclxuXHRcdGNvbnNvbGUubG9nKCdvblN1Ym1pdCBkYXRhID0+JywgZGF0YSk7XHJcblx0XHRjcmVhdGVSZXNlcnZhdGlvbihkYXRhKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3Jlc3VsdCB2YXV0ID0+JywgcmVzdWx0KTtcclxuXHRcdFx0aWYgKHJlc3VsdC5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdlcnJldXInLCByZXN1bHQuZXJyb3IpO1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IHJlc3VsdC5lcnJvciB9KTtcclxuXHRcdFx0fSBlbHNlIGlmIChyZXN1bHQuZGVqYVJlc2VydmVNZXNzYWdlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2RlamEgcmVzZXJ2ZScpO1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IHJlc3VsdC5kZWphUmVzZXJ2ZU1lc3NhZ2UgfSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IHRydWUsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IHJlc3VsdC5tZXNzYWdlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdC8vIFx0Um91dGVyLnB1c2goJy8nKTtcclxuXHRcdFx0XHQvLyB9LCAzMDAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxDb250YWluZXI+XHJcblx0XHRcdHtsb2FkaW5nICYmIDxDaXJjdWxhclByb2dyZXNzIC8+fVxyXG5cdFx0XHR7c3VjY2VzcyAmJiAoXHJcblx0XHRcdFx0PFNuYWNrYmFyIG9wZW49e29wZW59IGF1dG9IaWRlRHVyYXRpb249ezYwMDB9PlxyXG5cdFx0XHRcdFx0PEFsZXJ0IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBzZXZlcml0eT0nc3VjY2Vzcyc+XHJcblx0XHRcdFx0XHRcdHttZXNzYWdlfVxyXG5cdFx0XHRcdFx0PC9BbGVydD5cclxuXHRcdFx0XHQ8L1NuYWNrYmFyPlxyXG5cdFx0XHQpfVxyXG5cdFx0XHR7ZXJyb3IgJiYgKFxyXG5cdFx0XHRcdDxTbmFja2JhciBvcGVuPXtvcGVufSBhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfT5cclxuXHRcdFx0XHRcdDxBbGVydCBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gc2V2ZXJpdHk9J2Vycm9yJz5cclxuXHRcdFx0XHRcdFx0e2Vycm9yfVxyXG5cdFx0XHRcdFx0PC9BbGVydD5cclxuXHRcdFx0XHQ8L1NuYWNrYmFyPlxyXG5cdFx0XHQpfVxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcblx0XHRcdFx0XHQ8U3RlcHBlclxyXG5cdFx0XHRcdFx0XHRhbHRlcm5hdGl2ZUxhYmVsXHJcblx0XHRcdFx0XHRcdGFjdGl2ZVN0ZXA9e2FjdGl2ZVN0ZXB9XHJcblx0XHRcdFx0XHRcdGNvbm5lY3Rvcj17PENvbG9ybGliQ29ubmVjdG9yIC8+fT5cclxuXHRcdFx0XHRcdFx0e3N0ZXBzLm1hcCgobGFiZWwpID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8U3RlcCBrZXk9e2xhYmVsfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxTdGVwTGFiZWwgU3RlcEljb25Db21wb25lbnQ9e0NvbG9ybGliU3RlcEljb259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7bGFiZWx9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1N0ZXBMYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8L1N0ZXA+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PC9TdGVwcGVyPlxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0e2FjdGl2ZVN0ZXAgPT09IHN0ZXBzLmxlbmd0aCA/IChcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0ey8qIFZvaXIgcG91dCBham91dGVyIGlzU3VibWl0ZWQgPT09IHRydWUgKi99XHJcblx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaW5zdHJ1Y3Rpb25zfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Vm90cmUgZGVtYW5kZSBhIGJpZW4gw6l0w6kgcHJpc2UgZW4gY29tcHRlXHJcblx0XHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZVJlc2V0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0UmVjb21tZW5jZXJcclxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaW5zdHJ1Y3Rpb25zfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2dldFN0ZXBDb250ZW50KGFjdGl2ZVN0ZXApfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXthY3RpdmVTdGVwID09PSAwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZUJhY2t9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0UmV0b3VyXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7YWN0aXZlU3RlcCA9PT0gc3RlcHMubGVuZ3RoIC0gMSA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdzdWJtaXQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdjb250YWluZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcj0ncHJpbWFyeSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0VmFsaWRlclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yPSdwcmltYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlTmV4dH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0U3VpdmFudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxSZUNBUFRDSEFcclxuXHRcdFx0XHRcdFx0c2l0ZWtleT17UkVDQVBUQ0hBX1NFQ1JFVF9LRVl9XHJcblx0XHRcdFx0XHRcdHJlZj17cmVSZWZ9XHJcblx0XHRcdFx0XHRcdHNpemU9J2ludmlzaWJsZSdcclxuXHRcdFx0XHRcdFx0Ly8gb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9Db250YWluZXI+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VydmF0aW9uRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==