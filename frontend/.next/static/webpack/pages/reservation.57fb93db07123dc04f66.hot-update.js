webpackHotUpdate_N_E("pages/reservation",{

/***/ "./components/reservation/ReservationForm.js":
/*!***************************************************!*\
  !*** ./components/reservation/ReservationForm.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Stepper */ "./node_modules/@material-ui/core/esm/Stepper/index.js");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Step */ "./node_modules/@material-ui/core/esm/Step/index.js");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "./node_modules/@material-ui/core/esm/StepLabel/index.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Check */ "./node_modules/@material-ui/icons/Check.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Settings */ "./node_modules/@material-ui/icons/Settings.js");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_StepConnector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/StepConnector */ "./node_modules/@material-ui/core/esm/StepConnector/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_House__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/House */ "./node_modules/@material-ui/icons/House.js");
/* harmony import */ var _material_ui_icons_House__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_House__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/EmojiPeople */ "./node_modules/@material-ui/icons/EmojiPeople.js");
/* harmony import */ var _material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/CheckCircle */ "./node_modules/@material-ui/icons/CheckCircle.js");
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var _actions_reservationActions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../actions/reservationActions */ "./actions/reservationActions.js");



var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\reservation\\ReservationForm.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _this = undefined,
    _s3 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }























var QontoConnector = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])({
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
})(_material_ui_core_StepConnector__WEBPACK_IMPORTED_MODULE_12__["default"]);
var useQontoStepIconStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])({
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
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.root, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, classes.active, active)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 3
    }
  }, completed ? __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.completed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }) : __jsx("div", {
    className: classes.circle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
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
  active: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};
var ColorlibConnector = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])({
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
})(_material_ui_core_StepConnector__WEBPACK_IMPORTED_MODULE_12__["default"]);
var useColorlibStepIconStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])({
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
    1: __jsx(_material_ui_icons_House__WEBPACK_IMPORTED_MODULE_15___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 6
      }
    }),
    2: __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 6
      }
    }),
    3: __jsx(_material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_16___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 6
      }
    }),
    4: __jsx(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_17___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 6
      }
    })
  };
  return __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.root, (_clsx2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx2, classes.active, active), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx2, classes.completed, completed), _clsx2)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
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
  active: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * The label displayed in the step icon.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      activeStep = _useState[0],
      setActiveStep = _useState[1];

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_18__["useForm"])({
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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
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
      error = values.error; // const handleChange = (name) => (e) => {
  // 	console.log('handleChange name vaut =>', name);
  // 	if (name === 'civilite') {
  // 		setValue('civilite', e.target.value);
  // 	} else if (name === 'gite') {
  // 		setValue('gite', e.target.value);
  // 	} else if (name === 'pays') {
  // 		setValue('pays', e.target.value);
  // 	}
  // };
  // React.useEffect(() => {
  // 	register({ name: 'civilite' }); // custom register Antd input
  // 	register({ name: 'gite' }); // custom register Antd input
  // 	register({ name: 'pays' }); // custom register Antd input
  // }, [register]);

  var steps = getSteps();

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      selectedDateArrivee = _useState3[0],
      setSelectedDateArrivee = _useState3[1];

  var handleDateChangeArrivee = function handleDateChangeArrivee(date) {
    setSelectedDateArrivee(date);
  };

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      gites = _useState5[0],
      setGites = _useState5[1];

  var listDesGites = function listDesGites() {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_3__["listGitesNoms"])().then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        setGites.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(gites).concat([data]));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
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
    }, "Informations sur la location"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_20__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["InputLabel"], {
      shrink: true,
      id: "demo-simple-select-placeholder-label-label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 6
      }
    }, "R\xE9servation sur le g\xEEte :"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_18__["Controller"], {
      control: control,
      name: "gite",
      as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["Select"], {
        id: "gite-select",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 8
        }
      }, gites.map(function (gite, i) {
        return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["MenuItem"], {
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
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["TextField"], {
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
        lineNumber: 354,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["TextField"], {
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
        lineNumber: 364,
        columnNumber: 5
      }
    })), __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_22__["MuiPickersUtilsProvider"], {
      utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_21__["default"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 375,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_20__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376,
        columnNumber: 5
      }
    }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_22__["KeyboardDatePicker"], {
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
        lineNumber: 377,
        columnNumber: 6
      }
    }), __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_22__["KeyboardDatePicker"], {
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
        lineNumber: 392,
        columnNumber: 6
      }
    }))));
  };

  var infoComp = function infoComp() {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411,
        columnNumber: 3
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412,
        columnNumber: 4
      }
    }, "Informations suppl\xE9mentaires"), __jsx("div", {
      className: classes.root,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["FormControl"], {
      component: "fieldset",
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 414,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["FormLabel"], {
      component: "legend",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417,
        columnNumber: 6
      }
    }, "Merci d'indiquer si vous nous avez d\xE9ja contact\xE9 par :"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["FormGroup"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420,
        columnNumber: 6
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_20__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["Checkbox"], {
        name: "contactMail",
        inputRef: register,
        defaultValue: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424,
          columnNumber: 10
        }
      }),
      label: "Mail",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422,
        columnNumber: 8
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["Checkbox"], {
        name: "contactTel",
        inputRef: register,
        defaultValue: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434,
          columnNumber: 10
        }
      }),
      label: "T\xE9l\xE9phone",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432,
        columnNumber: 8
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["Checkbox"], {
        name: "contactAbritel",
        inputRef: register,
        defaultValue: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444,
          columnNumber: 10
        }
      }),
      label: "Abritel",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 442,
        columnNumber: 8
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["Checkbox"], {
        name: "contactLeboncoin",
        inputRef: register,
        defaultValue: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454,
          columnNumber: 10
        }
      }),
      label: "Leboncoin",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 452,
        columnNumber: 8
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["Checkbox"], {
        name: "contactAutre",
        inputRef: register,
        defaultValue: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464,
          columnNumber: 10
        }
      }),
      label: "Autre",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 462,
        columnNumber: 8
      }
    })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_20__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 476,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["TextField"], {
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
        lineNumber: 477,
        columnNumber: 6
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["Switch"], {
        inputRef: register,
        checked: true,
        name: "litFait",
        color: "primary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489,
          columnNumber: 8
        }
      }),
      label: "Souhaitez-vous l'option lit fait \xE0 l'arriv\xE9e ?",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 487,
        columnNumber: 6
      }
    }))));
  };

  var Coord = function Coord() {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 503,
        columnNumber: 3
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 504,
        columnNumber: 4
      }
    }, "Vos coordonn\xE9es"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_20__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 506,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 507,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["InputLabel"], {
      shrink: true,
      id: "demo-simple-select-placeholder-label-label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 508,
        columnNumber: 6
      }
    }, "Civilit\xE9"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_18__["Controller"], {
      control: control,
      name: "civilite",
      as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["Select"], {
        id: "civilite-select",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["MenuItem"], {
        value: "mmme",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518,
          columnNumber: 9
        }
      }, "M. & Mme"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["MenuItem"], {
        value: "mme",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519,
          columnNumber: 9
        }
      }, "Mme"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["MenuItem"], {
        value: "mlle",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520,
          columnNumber: 9
        }
      }, "Mlle"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["MenuItem"], {
        value: "m",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521,
          columnNumber: 9
        }
      }, "M."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["MenuItem"], {
        value: "asso",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 522,
          columnNumber: 9
        }
      }, "Association"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["MenuItem"], {
        value: "ce",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 523,
          columnNumber: 9
        }
      }, "Comit\xE9 d'entreprise"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["MenuItem"], {
        value: "soc",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526,
          columnNumber: 9
        }
      }, "Soci\xE9t\xE9"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["MenuItem"], {
        value: "entr",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 527,
          columnNumber: 9
        }
      }, "Entreprise"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["MenuItem"], {
        value: "foyervie",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 528,
          columnNumber: 9
        }
      }, "Foyer de vie"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["MenuItem"], {
        value: "foyeracc",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531,
          columnNumber: 9
        }
      }, "Foyer d'accueil"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["MenuItem"], {
        value: "famil",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534,
          columnNumber: 9
        }
      }, "Famille"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["MenuItem"], {
        value: "autre",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535,
          columnNumber: 9
        }
      }, "Autres")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 513,
        columnNumber: 6
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["TextField"], {
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
        lineNumber: 541,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["TextField"], {
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
        lineNumber: 550,
        columnNumber: 5
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_20__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 560,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["TextField"], {
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
        lineNumber: 561,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["TextField"], {
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
        lineNumber: 570,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["TextField"], {
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
        lineNumber: 579,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 588,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["InputLabel"], {
      shrink: true,
      id: "demo-simple-select-placeholder-label-label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 589,
        columnNumber: 6
      }
    }, "Pays"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_18__["Controller"], {
      control: control,
      name: "pays",
      as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["Select"], {
        id: "pays-select",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 599,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["MenuItem"], {
        value: "france",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 600,
          columnNumber: 9
        }
      }, "France"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["MenuItem"], {
        value: "",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 601,
          columnNumber: 9
        }
      }, "--------"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["MenuItem"], {
        value: "autres",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 602,
          columnNumber: 9
        }
      }, "Autres"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["MenuItem"], {
        value: "allemagne",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 603,
          columnNumber: 9
        }
      }, "Allemagne"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["MenuItem"], {
        value: "angleterre",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 604,
          columnNumber: 9
        }
      }, "Angleterre"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["MenuItem"], {
        value: "belgique",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 607,
          columnNumber: 9
        }
      }, "Belgique"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["MenuItem"], {
        value: "hollande",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 608,
          columnNumber: 9
        }
      }, "Hollande"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["MenuItem"], {
        value: "luxembourg",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 609,
          columnNumber: 9
        }
      }, "Luxembourg"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["MenuItem"], {
        value: "suisse",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 612,
          columnNumber: 9
        }
      }, "Suisse")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 595,
        columnNumber: 6
      }
    }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_20__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 618,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["TextField"], {
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
        lineNumber: 619,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["TextField"], {
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
        lineNumber: 628,
        columnNumber: 5
      }
    })));
  };

  var recap = function recap() {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 641,
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

  var onSubmit = function onSubmit(data) {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      loading: true
    }));
    console.log('onSubmit data =>', data);
    Object(_actions_reservationActions__WEBPACK_IMPORTED_MODULE_23__["createReservation"])(data).then(function (result) {
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
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685,
      columnNumber: 4
    }
  }, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_7__["default"], {
    alternativeLabel: true,
    activeStep: activeStep,
    connector: __jsx(ColorlibConnector, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 690,
        columnNumber: 18
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687,
      columnNumber: 6
    }
  }, steps.map(function (label) {
    return __jsx(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 692,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
      StepIconComponent: ColorlibStepIcon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 693,
        columnNumber: 9
      }
    }, label));
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 699,
      columnNumber: 6
    }
  }, activeStep === steps.length ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 701,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.instructions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 703,
      columnNumber: 9
    }
  }, "Votre demande a bien \xE9t\xE9 prise en compte"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: handleReset,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 706,
      columnNumber: 9
    }
  }, "Recommencer")) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 713,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.instructions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 714,
      columnNumber: 9
    }
  }, getStepContent(activeStep)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 717,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    disabled: activeStep === 0,
    onClick: handleBack,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 718,
      columnNumber: 10
    }
  }, "Retour"), activeStep === steps.length - 1 ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    type: "submit",
    variant: "contained",
    color: "primary",
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 725,
      columnNumber: 11
    }
  }, "Valider") : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "contained",
    color: "primary",
    onClick: handleNext,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 733,
      columnNumber: 11
    }
  }, "Suivant")))))));
};

_s3(ReservationForm, "udNSWGbTzrqeFLqx8BF7C3mxWgI=", false, function () {
  return [useStyles, react_hook_form__WEBPACK_IMPORTED_MODULE_18__["useForm"]];
});

_c3 = ReservationForm;
/* harmony default export */ __webpack_exports__["default"] = (ReservationForm);

var _c, _c2, _c3;

$RefreshReg$(_c, "QontoStepIcon");
$RefreshReg$(_c2, "ColorlibStepIcon");
$RefreshReg$(_c3, "ReservationForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXNlcnZhdGlvbi9SZXNlcnZhdGlvbkZvcm0uanMiXSwibmFtZXMiOlsiUW9udG9Db25uZWN0b3IiLCJ3aXRoU3R5bGVzIiwiYWx0ZXJuYXRpdmVMYWJlbCIsInRvcCIsImxlZnQiLCJyaWdodCIsImFjdGl2ZSIsImJvcmRlckNvbG9yIiwiY29tcGxldGVkIiwibGluZSIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwiU3RlcENvbm5lY3RvciIsInVzZVFvbnRvU3RlcEljb25TdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImNvbG9yIiwiZGlzcGxheSIsImhlaWdodCIsImFsaWduSXRlbXMiLCJjaXJjbGUiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsImZvbnRTaXplIiwiUW9udG9TdGVwSWNvbiIsInByb3BzIiwiY2xhc3NlcyIsImNsc3giLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiQ29sb3JsaWJDb25uZWN0b3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJib3JkZXIiLCJ1c2VDb2xvcmxpYlN0ZXBJY29uU3R5bGVzIiwianVzdGlmeUNvbnRlbnQiLCJib3hTaGFkb3ciLCJDb2xvcmxpYlN0ZXBJY29uIiwiaWNvbnMiLCJTdHJpbmciLCJpY29uIiwibm9kZSIsInVzZVN0eWxlcyIsInRoZW1lIiwiYnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwiaW5zdHJ1Y3Rpb25zIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiZm9ybUNvbnRyb2wiLCJtYXJnaW4iLCJtaW5XaWR0aCIsInNlbGVjdEVtcHR5IiwiZ2V0U3RlcHMiLCJSZXNlcnZhdGlvbkZvcm0iLCJ1c2VTdGF0ZSIsImFjdGl2ZVN0ZXAiLCJzZXRBY3RpdmVTdGVwIiwidXNlRm9ybSIsInNob3VsZFVucmVnaXN0ZXIiLCJkZWZhdWx0VmFsdWVzIiwiZ2l0ZSIsIm5iUGVycyIsIm5iRW5mIiwibmJDaGllbiIsImxpdEZhaXQiLCJub20iLCJwcmVub20iLCJhZHJlc3NlIiwiY3AiLCJ2aWxsZSIsInRlbCIsIm1haWwiLCJjb250cm9sIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJzZXRWYWx1ZSIsImxvYWRpbmciLCJzdWNjZXNzIiwiZXJyb3IiLCJtZXNzYWdlIiwidmFsdWVzIiwic2V0VmFsdWVzIiwic3RlcHMiLCJzZWxlY3RlZERhdGVBcnJpdmVlIiwic2V0U2VsZWN0ZWREYXRlQXJyaXZlZSIsImhhbmRsZURhdGVDaGFuZ2VBcnJpdmVlIiwiZGF0ZSIsInNlbGVjdGVkRGF0ZURlcGFydCIsInNldFNlbGVjdGVkRGF0ZURlcGFydCIsImhhbmRsZURhdGVDaGFuZ2VEZXBhcnQiLCJoYW5kbGVOZXh0IiwicHJldkFjdGl2ZVN0ZXAiLCJoYW5kbGVCYWNrIiwiaGFuZGxlUmVzZXQiLCJnaXRlcyIsInNldEdpdGVzIiwibGlzdERlc0dpdGVzIiwibGlzdEdpdGVzTm9tcyIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImluZm9Mb2MiLCJtYXAiLCJpIiwic2x1ZyIsInNocmluayIsIkRhdGVGbnNVdGlscyIsImluZm9Db21wIiwiQ29vcmQiLCJyZWNhcCIsImdldFN0ZXBDb250ZW50Iiwic3RlcCIsIm9uU3VibWl0IiwiY3JlYXRlUmVzZXJ2YXRpb24iLCJyZXN1bHQiLCJkZWphUmVzZXJ2ZU1lc3NhZ2UiLCJsYWJlbCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUlBO0FBRUEsSUFBTUEsY0FBYyxHQUFHQywyRUFBVSxDQUFDO0FBQ2pDQyxrQkFBZ0IsRUFBRTtB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QU8sQ0FBQ2tCLE1BSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxFQU9FYSxVQUFVLEtBQUsyQixLQUFLLENBQUNxQyxNQUFOLEdBQWUsQ0FBOUIsR0FDQSxNQUFDLGlFQUFEO0FBQ0MsUUFBSSxFQUFDLFFBRE47QUFFQyxXQUFPLEVBQUMsV0FGVDtBQUdDLFNBQUssRUFBQyxTQUhQO0FBSUMsYUFBUyxFQUFFL0YsT0FBTyxDQUFDa0IsTUFKcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLEdBU0EsTUFBQyxpRUFBRDtBQUNDLFdBQU8sRUFBQyxXQURUO0FBRUMsU0FBSyxFQUFDLFNBRlA7QUFHQyxXQUFPLEVBQUVnRCxVQUhWO0FBSUMsYUFBUyxFQUFFbEUsT0FBTyxDQUFDa0IsTUFKcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhCRixDQUpELENBZEYsQ0FiRCxDQURELENBREQsQ0FERDtBQWtFQSxDQXhnQkQ7O0lBQU1XLGU7VUFDV2IsUyxFQUVzQ2lCLHdEOzs7TUFIakRKLGU7QUEwZ0JTQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXNlcnZhdGlvbi41N2ZiOTNkYjA3MTIzZGMwNGY2Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGlzdEdpdGVzTm9tcyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBTdGVwcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBwZXInO1xyXG5pbXBvcnQgU3RlcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdGVwJztcclxuaW1wb3J0IFN0ZXBMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdGVwTGFiZWwnO1xyXG5pbXBvcnQgQ2hlY2sgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrJztcclxuaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2V0dGluZ3MnO1xyXG5pbXBvcnQgU3RlcENvbm5lY3RvciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdGVwQ29ubmVjdG9yJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEhvdXNlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSG91c2UnO1xyXG5pbXBvcnQgRW1vamlQZW9wbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FbW9qaVBlb3BsZSc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCB7XHJcblx0Q2hlY2tib3gsXHJcblx0Q29udGFpbmVyLFxyXG5cdEZvcm1Db250cm9sLFxyXG5cdEZvcm1Db250cm9sTGFiZWwsXHJcblx0Rm9ybUdyb3VwLFxyXG5cdEZvcm1IZWxwZXJUZXh0LFxyXG5cdEZvcm1MYWJlbCxcclxuXHRJbnB1dExhYmVsLFxyXG5cdE1lbnVJdGVtLFxyXG5cdFNlbGVjdCxcclxuXHRTd2l0Y2gsXHJcblx0VGV4dEZpZWxkLFxyXG5cdElucHV0LFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBEYXRlRm5zVXRpbHMgZnJvbSAnQGRhdGUtaW8vZGF0ZS1mbnMnO1xyXG5pbXBvcnQge1xyXG5cdE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLFxyXG5cdEtleWJvYXJkRGF0ZVBpY2tlcixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvcGlja2Vycyc7XHJcbmltcG9ydCB7IGNyZWF0ZVJlc2VydmF0aW9uIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9yZXNlcnZhdGlvbkFjdGlvbnMnO1xyXG5cclxuY29uc3QgUW9udG9Db25uZWN0b3IgPSB3aXRoU3R5bGVzKHtcclxuXHRhbHRlcm5hdGl2ZUxhYmVsOiB7XHJcblx0XHR0b3A6IDEwLFxyXG5cdFx0bGVmdDogJ2NhbGMoLTUwJSArIDE2cHgpJyxcclxuXHRcdHJpZ2h0OiAnY2FsYyg1MCUgKyAxNnB4KScsXHJcblx0fSxcclxuXHRhY3RpdmU6IHtcclxuXHRcdCcmICRsaW5lJzoge1xyXG5cdFx0XHRib3JkZXJDb2xvcjogJyM3ODRhZjQnLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGNvbXBsZXRlZDoge1xyXG5cdFx0JyYgJGxpbmUnOiB7XHJcblx0XHRcdGJvcmRlckNvbG9yOiAnIzc4NGFmNCcsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0bGluZToge1xyXG5cdFx0Ym9yZGVyQ29sb3I6ICcjZWFlYWYwJyxcclxuXHRcdGJvcmRlclRvcFdpZHRoOiAzLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAxLFxyXG5cdH0sXHJcbn0pKFN0ZXBDb25uZWN0b3IpO1xyXG5cclxuY29uc3QgdXNlUW9udG9TdGVwSWNvblN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdGNvbG9yOiAnI2VhZWFmMCcsXHJcblx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRoZWlnaHQ6IDIyLFxyXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0fSxcclxuXHRhY3RpdmU6IHtcclxuXHRcdGNvbG9yOiAnIzc4NGFmNCcsXHJcblx0fSxcclxuXHRjaXJjbGU6IHtcclxuXHRcdHdpZHRoOiA4LFxyXG5cdFx0aGVpZ2h0OiA4LFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAnNTAlJyxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcicsXHJcblx0fSxcclxuXHRjb21wbGV0ZWQ6IHtcclxuXHRcdGNvbG9yOiAnIzc4NGFmNCcsXHJcblx0XHR6SW5kZXg6IDEsXHJcblx0XHRmb250U2l6ZTogMTgsXHJcblx0fSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBRb250b1N0ZXBJY29uKHByb3BzKSB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVFvbnRvU3RlcEljb25TdHlsZXMoKTtcclxuXHRjb25zdCB7IGFjdGl2ZSwgY29tcGxldGVkIH0gPSBwcm9wcztcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwge1xyXG5cdFx0XHRcdFtjbGFzc2VzLmFjdGl2ZV06IGFjdGl2ZSxcclxuXHRcdFx0fSl9PlxyXG5cdFx0XHR7Y29tcGxldGVkID8gKFxyXG5cdFx0XHRcdDxDaGVjayBjbGFzc05hbWU9e2NsYXNzZXMuY29tcGxldGVkfSAvPlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNpcmNsZX0gLz5cclxuXHRcdFx0KX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcblFvbnRvU3RlcEljb24ucHJvcFR5cGVzID0ge1xyXG5cdC8qKlxyXG5cdCAqIFdoZXRoZXIgdGhpcyBzdGVwIGlzIGFjdGl2ZS5cclxuXHQgKi9cclxuXHRhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxyXG5cdC8qKlxyXG5cdCAqIE1hcmsgdGhlIHN0ZXAgYXMgY29tcGxldGVkLiBJcyBwYXNzZWQgdG8gY2hpbGQgY29tcG9uZW50cy5cclxuXHQgKi9cclxuXHRjb21wbGV0ZWQ6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuY29uc3QgQ29sb3JsaWJDb25uZWN0b3IgPSB3aXRoU3R5bGVzKHtcclxuXHRhbHRlcm5hdGl2ZUxhYmVsOiB7XHJcblx0XHR0b3A6IDIyLFxyXG5cdH0sXHJcblx0YWN0aXZlOiB7XHJcblx0XHQnJiAkbGluZSc6IHtcclxuXHRcdFx0YmFja2dyb3VuZEltYWdlOlxyXG5cdFx0XHRcdCdsaW5lYXItZ3JhZGllbnQoIDk1ZGVnLHJnYigyNDIsMTEzLDMzKSAwJSxyZ2IoMjMzLDY0LDg3KSA1MCUscmdiKDEzOCwzNSwxMzUpIDEwMCUpJyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRjb21wbGV0ZWQ6IHtcclxuXHRcdCcmICRsaW5lJzoge1xyXG5cdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6XHJcblx0XHRcdFx0J2xpbmVhci1ncmFkaWVudCggOTVkZWcscmdiKDI0MiwxMTMsMzMpIDAlLHJnYigyMzMsNjQsODcpIDUwJSxyZ2IoMTM4LDM1LDEzNSkgMTAwJSknLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGxpbmU6IHtcclxuXHRcdGhlaWdodDogMyxcclxuXHRcdGJvcmRlcjogMCxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJyNlYWVhZjAnLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAxLFxyXG5cdH0sXHJcbn0pKFN0ZXBDb25uZWN0b3IpO1xyXG5cclxuY29uc3QgdXNlQ29sb3JsaWJTdGVwSWNvblN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJyNjY2MnLFxyXG5cdFx0ekluZGV4OiAxLFxyXG5cdFx0Y29sb3I6ICcjZmZmJyxcclxuXHRcdHdpZHRoOiA1MCxcclxuXHRcdGhlaWdodDogNTAsXHJcblx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0fSxcclxuXHRhY3RpdmU6IHtcclxuXHRcdGJhY2tncm91bmRJbWFnZTpcclxuXHRcdFx0J2xpbmVhci1ncmFkaWVudCggMTM2ZGVnLCByZ2IoMjQyLDExMywzMykgMCUsIHJnYigyMzMsNjQsODcpIDUwJSwgcmdiKDEzOCwzNSwxMzUpIDEwMCUpJyxcclxuXHRcdGJveFNoYWRvdzogJzAgNHB4IDEwcHggMCByZ2JhKDAsMCwwLC4yNSknLFxyXG5cdH0sXHJcblx0Y29tcGxldGVkOiB7XHJcblx0XHRiYWNrZ3JvdW5kSW1hZ2U6XHJcblx0XHRcdCdsaW5lYXItZ3JhZGllbnQoIDEzNmRlZywgcmdiKDI0MiwxMTMsMzMpIDAlLCByZ2IoMjMzLDY0LDg3KSA1MCUsIHJnYigxMzgsMzUsMTM1KSAxMDAlKScsXHJcblx0fSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBDb2xvcmxpYlN0ZXBJY29uKHByb3BzKSB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZUNvbG9ybGliU3RlcEljb25TdHlsZXMoKTtcclxuXHRjb25zdCB7IGFjdGl2ZSwgY29tcGxldGVkIH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgaWNvbnMgPSB7XHJcblx0XHQxOiA8SG91c2VJY29uIC8+LFxyXG5cdFx0MjogPFNldHRpbmdzSWNvbiAvPixcclxuXHRcdDM6IDxFbW9qaVBlb3BsZUljb24gLz4sXHJcblx0XHQ0OiA8Q2hlY2tDaXJjbGVJY29uIC8+LFxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsIHtcclxuXHRcdFx0XHRbY2xhc3Nlcy5hY3RpdmVdOiBhY3RpdmUsXHJcblx0XHRcdFx0W2NsYXNzZXMuY29tcGxldGVkXTogY29tcGxldGVkLFxyXG5cdFx0XHR9KX0+XHJcblx0XHRcdHtpY29uc1tTdHJpbmcocHJvcHMuaWNvbildfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuQ29sb3JsaWJTdGVwSWNvbi5wcm9wVHlwZXMgPSB7XHJcblx0LyoqXHJcblx0ICogV2hldGhlciB0aGlzIHN0ZXAgaXMgYWN0aXZlLlxyXG5cdCAqL1xyXG5cdGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXHJcblx0LyoqXHJcblx0ICogTWFyayB0aGUgc3RlcCBhcyBjb21wbGV0ZWQuIElzIHBhc3NlZCB0byBjaGlsZCBjb21wb25lbnRzLlxyXG5cdCAqL1xyXG5cdGNvbXBsZXRlZDogUHJvcFR5cGVzLmJvb2wsXHJcblx0LyoqXHJcblx0ICogVGhlIGxhYmVsIGRpc3BsYXllZCBpbiB0aGUgc3RlcCBpY29uLlxyXG5cdCAqL1xyXG5cdGljb246IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0cm9vdDoge1xyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHR9LFxyXG5cdGJ1dHRvbjoge1xyXG5cdFx0bWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0fSxcclxuXHRpbnN0cnVjdGlvbnM6IHtcclxuXHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygxKSxcclxuXHR9LFxyXG5cdGZvcm1Db250cm9sOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHRtaW5XaWR0aDogMTIwLFxyXG5cdH0sXHJcblx0c2VsZWN0RW1wdHk6IHtcclxuXHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBnZXRTdGVwcygpIHtcclxuXHRyZXR1cm4gW1xyXG5cdFx0J0luZm9ybWF0aW9uIHN1ciBsYSBsb2NhdGlvbicsXHJcblx0XHQnSW5mb3JtYXRpb25zIGNvbXBsw6ltZW50YWlyZXMnLFxyXG5cdFx0J1ZvcyBjb29yZG9ubsOpZXMnLFxyXG5cdFx0J1LDqWNhcGl0dWxhdGlmJyxcclxuXHRdO1xyXG59XHJcblxyXG5jb25zdCBSZXNlcnZhdGlvbkZvcm0gPSAoKSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IFthY3RpdmVTdGVwLCBzZXRBY3RpdmVTdGVwXSA9IHVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IHsgY29udHJvbCwgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgc2V0VmFsdWUgfSA9IHVzZUZvcm0oe1xyXG5cdFx0c2hvdWxkVW5yZWdpc3RlcjogZmFsc2UsXHJcblx0XHRkZWZhdWx0VmFsdWVzOiB7XHJcblx0XHRcdGdpdGU6ICdtYW5vbGEnLFxyXG5cdFx0XHRuYlBlcnM6IDEwLFxyXG5cdFx0XHRuYkVuZjogNSxcclxuXHRcdFx0bmJDaGllbjogMSxcclxuXHRcdFx0bGl0RmFpdDogdHJ1ZSxcclxuXHRcdFx0bm9tOiAnTGFwaWVycmUnLFxyXG5cdFx0XHRwcmVub206ICdKb3NzaWMnLFxyXG5cdFx0XHRhZHJlc3NlOiAnMTggcnVlIHRlc3QnLFxyXG5cdFx0XHRjcDogJzUxMDAwJyxcclxuXHRcdFx0dmlsbGU6ICdtYVZpbGxlJyxcclxuXHRcdFx0dGVsOiAnMDYgMTUgNTUgNTUgNTUnLFxyXG5cdFx0XHRtYWlsOiAnam9zc2ljLmxhcGllcnJlQGdtYWlsLmNvbScsXHJcblx0XHR9LFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRzdWNjZXNzOiAnJyxcclxuXHRcdGVycm9yOiAnJyxcclxuXHRcdG1lc3NhZ2U6ICcnLFxyXG5cdH0pO1xyXG5cdGNvbnN0IHsgbWVzc2FnZSwgc3VjY2VzcywgbG9hZGluZywgZXJyb3IgfSA9IHZhbHVlcztcclxuXHJcblx0Ly8gY29uc3QgaGFuZGxlQ2hhbmdlID0gKG5hbWUpID0+IChlKSA9PiB7XHJcblx0Ly8gXHRjb25zb2xlLmxvZygnaGFuZGxlQ2hhbmdlIG5hbWUgdmF1dCA9PicsIG5hbWUpO1xyXG5cdC8vIFx0aWYgKG5hbWUgPT09ICdjaXZpbGl0ZScpIHtcclxuXHQvLyBcdFx0c2V0VmFsdWUoJ2NpdmlsaXRlJywgZS50YXJnZXQudmFsdWUpO1xyXG5cdC8vIFx0fSBlbHNlIGlmIChuYW1lID09PSAnZ2l0ZScpIHtcclxuXHQvLyBcdFx0c2V0VmFsdWUoJ2dpdGUnLCBlLnRhcmdldC52YWx1ZSk7XHJcblx0Ly8gXHR9IGVsc2UgaWYgKG5hbWUgPT09ICdwYXlzJykge1xyXG5cdC8vIFx0XHRzZXRWYWx1ZSgncGF5cycsIGUudGFyZ2V0LnZhbHVlKTtcclxuXHQvLyBcdH1cclxuXHQvLyB9O1xyXG5cclxuXHQvLyBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG5cdC8vIFx0cmVnaXN0ZXIoeyBuYW1lOiAnY2l2aWxpdGUnIH0pOyAvLyBjdXN0b20gcmVnaXN0ZXIgQW50ZCBpbnB1dFxyXG5cdC8vIFx0cmVnaXN0ZXIoeyBuYW1lOiAnZ2l0ZScgfSk7IC8vIGN1c3RvbSByZWdpc3RlciBBbnRkIGlucHV0XHJcblx0Ly8gXHRyZWdpc3Rlcih7IG5hbWU6ICdwYXlzJyB9KTsgLy8gY3VzdG9tIHJlZ2lzdGVyIEFudGQgaW5wdXRcclxuXHQvLyB9LCBbcmVnaXN0ZXJdKTtcclxuXHJcblx0Y29uc3Qgc3RlcHMgPSBnZXRTdGVwcygpO1xyXG5cclxuXHRjb25zdCBbc2VsZWN0ZWREYXRlQXJyaXZlZSwgc2V0U2VsZWN0ZWREYXRlQXJyaXZlZV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVEYXRlQ2hhbmdlQXJyaXZlZSA9IChkYXRlKSA9PiB7XHJcblx0XHRzZXRTZWxlY3RlZERhdGVBcnJpdmVlKGRhdGUpO1xyXG5cdH07XHJcblx0Y29uc3QgW3NlbGVjdGVkRGF0ZURlcGFydCwgc2V0U2VsZWN0ZWREYXRlRGVwYXJ0XSA9IHVzZVN0YXRlKCk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZURhdGVDaGFuZ2VEZXBhcnQgPSAoZGF0ZSkgPT4ge1xyXG5cdFx0c2V0U2VsZWN0ZWREYXRlRGVwYXJ0KGRhdGUpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XHJcblx0XHRzZXRBY3RpdmVTdGVwKChwcmV2QWN0aXZlU3RlcCkgPT4gcHJldkFjdGl2ZVN0ZXAgKyAxKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVCYWNrID0gKCkgPT4ge1xyXG5cdFx0c2V0QWN0aXZlU3RlcCgocHJldkFjdGl2ZVN0ZXApID0+IHByZXZBY3RpdmVTdGVwIC0gMSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XHJcblx0XHRzZXRBY3RpdmVTdGVwKDApO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IFtnaXRlcywgc2V0R2l0ZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHRjb25zdCBsaXN0RGVzR2l0ZXMgPSAoKSA9PiB7XHJcblx0XHRsaXN0R2l0ZXNOb21zKCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRHaXRlcyguLi5naXRlcywgZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsaXN0RGVzR2l0ZXMoKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnN0IGluZm9Mb2MgPSAoKSA9PiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nJz5cclxuXHRcdFx0PGgyPkluZm9ybWF0aW9ucyBzdXIgbGEgbG9jYXRpb248L2gyPlxyXG5cclxuXHRcdFx0PEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J3NwYWNlLWFyb3VuZCc+XHJcblx0XHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHQ8SW5wdXRMYWJlbFxyXG5cdFx0XHRcdFx0XHRzaHJpbmtcclxuXHRcdFx0XHRcdFx0aWQ9J2RlbW8tc2ltcGxlLXNlbGVjdC1wbGFjZWhvbGRlci1sYWJlbC1sYWJlbCc+XHJcblx0XHRcdFx0XHRcdFLDqXNlcnZhdGlvbiBzdXIgbGUgZ8OudGUgOlxyXG5cdFx0XHRcdFx0PC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdFx0PENvbnRyb2xsZXJcclxuXHRcdFx0XHRcdFx0Y29udHJvbD17Y29udHJvbH1cclxuXHRcdFx0XHRcdFx0bmFtZT0nZ2l0ZSdcclxuXHRcdFx0XHRcdFx0YXM9e1xyXG5cdFx0XHRcdFx0XHRcdDxTZWxlY3QgaWQ9J2dpdGUtc2VsZWN0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdHtnaXRlcy5tYXAoKGdpdGUsIGkpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIGtleT17Z2l0ZS5zbHVnfSB2YWx1ZT17Z2l0ZS5zbHVnfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Z2l0ZS5ub219XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0XHQ8L1NlbGVjdD5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdHsvKiA8U2VsZWN0XHJcblx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT0nbWFub2xhJ1xyXG5cdFx0XHRcdFx0XHRsYWJlbElkPSdkZW1vLXNpbXBsZS1zZWxlY3QtcGxhY2Vob2xkZXItbGFiZWwtbGFiZWwnXHJcblx0XHRcdFx0XHRcdGlkPSdkZW1vLXNpbXBsZS1zZWxlY3QtcGxhY2Vob2xkZXItbGFiZWwnXHJcblx0XHRcdFx0XHRcdG5hbWU9J2dpdGUnXHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2dpdGUnKX1cclxuXHRcdFx0XHRcdFx0ZGlzcGxheUVtcHR5XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWxlY3RFbXB0eX0+XHJcblx0XHRcdFx0XHRcdHtnaXRlcy5tYXAoKGdpdGUsIGkpID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9e2dpdGUuc2x1Z30+e2dpdGUubm9tfTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PC9TZWxlY3Q+ICovfVxyXG5cdFx0XHRcdFx0ey8qIDxGb3JtSGVscGVyVGV4dD5Sw6lzZXJ2YXRpb24gc3VyIGxlIGfDrnRlIDo8L0Zvcm1IZWxwZXJUZXh0PiAqL31cclxuXHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdG5hbWU9J25iUGVycydcclxuXHRcdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0XHRsYWJlbD0nTm9tYnJlIGRlIHBlcnNvbm5lcyB0b3RhbCdcclxuXHRcdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0bmFtZT0nbmJFbmYnXHJcblx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J0RvbnQgZW5mYW50cyBkZSBtb2lucyBkZSAxOCBhbnMnXHJcblx0XHRcdFx0XHR0eXBlPSdudW1iZXInXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDxNdWlQaWNrZXJzVXRpbHNQcm92aWRlciB1dGlscz17RGF0ZUZuc1V0aWxzfT5cclxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXIganVzdGlmeT0nc3BhY2UtYXJvdW5kJz5cclxuXHRcdFx0XHRcdDxLZXlib2FyZERhdGVQaWNrZXJcclxuXHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRtYXJnaW49J25vcm1hbCdcclxuXHRcdFx0XHRcdFx0aWQ9J2RhdGUtcGlja2VyLWRpYWxvZydcclxuXHRcdFx0XHRcdFx0bmFtZT0nZGF0ZUFycml2ZWUnXHJcblx0XHRcdFx0XHRcdGxhYmVsPVwiRGF0ZSBkJ2Fycml2w6llXCJcclxuXHRcdFx0XHRcdFx0Zm9ybWF0PSdNTS9kZC95eXl5J1xyXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9JydcclxuXHRcdFx0XHRcdFx0dmFsdWU9e3NlbGVjdGVkRGF0ZUFycml2ZWV9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVEYXRlQ2hhbmdlQXJyaXZlZX1cclxuXHRcdFx0XHRcdFx0S2V5Ym9hcmRCdXR0b25Qcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRcdCdhcmlhLWxhYmVsJzogJ2NoYW5nZSBkYXRlJyxcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdFx0PEtleWJvYXJkRGF0ZVBpY2tlclxyXG5cdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdG1hcmdpbj0nbm9ybWFsJ1xyXG5cdFx0XHRcdFx0XHRpZD0nZGF0ZS1waWNrZXItZGlhbG9nJ1xyXG5cdFx0XHRcdFx0XHRuYW1lPSdkYXRlRGVwYXJ0J1xyXG5cdFx0XHRcdFx0XHRsYWJlbD0nRGF0ZSBkZSBkw6lwYXJ0J1xyXG5cdFx0XHRcdFx0XHRmb3JtYXQ9J01NL2RkL3l5eXknXHJcblx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT0nJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17c2VsZWN0ZWREYXRlRGVwYXJ0fVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlRGF0ZUNoYW5nZURlcGFydH1cclxuXHRcdFx0XHRcdFx0S2V5Ym9hcmRCdXR0b25Qcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRcdCdhcmlhLWxhYmVsJzogJ2NoYW5nZSBkYXRlJyxcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8L011aVBpY2tlcnNVdGlsc1Byb3ZpZGVyPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxuXHRjb25zdCBpbmZvQ29tcCA9ICgpID0+IChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxoMj5JbmZvcm1hdGlvbnMgc3VwcGzDqW1lbnRhaXJlczwvaDI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG5cdFx0XHRcdDxGb3JtQ29udHJvbFxyXG5cdFx0XHRcdFx0Y29tcG9uZW50PSdmaWVsZHNldCdcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHQ8Rm9ybUxhYmVsIGNvbXBvbmVudD0nbGVnZW5kJz5cclxuXHRcdFx0XHRcdFx0TWVyY2kgZCdpbmRpcXVlciBzaSB2b3VzIG5vdXMgYXZleiBkw6lqYSBjb250YWN0w6kgcGFyIDpcclxuXHRcdFx0XHRcdDwvRm9ybUxhYmVsPlxyXG5cdFx0XHRcdFx0PEZvcm1Hcm91cD5cclxuXHRcdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J3NwYWNlLWFyb3VuZCc+XHJcblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sTGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRyb2w9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2hlY2tib3hcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdjb250YWN0TWFpbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPSdNYWlsJ1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sTGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRyb2w9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2hlY2tib3hcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdjb250YWN0VGVsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2ZhbHNlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9J1TDqWzDqXBob25lJ1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sTGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRyb2w9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2hlY2tib3hcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdjb250YWN0QWJyaXRlbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPSdBYnJpdGVsJ1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sTGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRyb2w9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2hlY2tib3hcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdjb250YWN0TGVib25jb2luJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2ZhbHNlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9J0xlYm9uY29pbidcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250cm9sPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PENoZWNrYm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nY29udGFjdEF1dHJlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2ZhbHNlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9J0F1dHJlJ1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0ey8qIDxGb3JtSGVscGVyVGV4dD5CZSBjYXJlZnVsPC9Gb3JtSGVscGVyVGV4dD4gKi99XHJcblx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXIganVzdGlmeT0nc3BhY2UtYXJvdW5kJz5cclxuXHRcdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRuYW1lPSduYkNoaWVuJ1xyXG5cdFx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0XHRsYWJlbD0nTm9tYnJlIGRlIGNoaWVuID8gKDPigqwvam91ci9hbmltYWwpJ1xyXG5cdFx0XHRcdFx0XHR0eXBlPSdudW1iZXInXHJcblx0XHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xMYWJlbFxyXG5cdFx0XHRcdFx0XHRjb250cm9sPXtcclxuXHRcdFx0XHRcdFx0XHQ8U3dpdGNoXHJcblx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT0nbGl0RmFpdCdcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yPSdwcmltYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9XCJTb3VoYWl0ZXotdm91cyBsJ29wdGlvbiBsaXQgZmFpdCDDoCBsJ2Fycml2w6llID9cIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxuXHRjb25zdCBDb29yZCA9ICgpID0+IChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxoMj5Wb3MgY29vcmRvbm7DqWVzPC9oMj5cclxuXHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdzcGFjZS1hcm91bmQnPlxyXG5cdFx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0PElucHV0TGFiZWxcclxuXHRcdFx0XHRcdFx0c2hyaW5rXHJcblx0XHRcdFx0XHRcdGlkPSdkZW1vLXNpbXBsZS1zZWxlY3QtcGxhY2Vob2xkZXItbGFiZWwtbGFiZWwnPlxyXG5cdFx0XHRcdFx0XHRDaXZpbGl0w6lcclxuXHRcdFx0XHRcdDwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0XHRcdG5hbWU9J2NpdmlsaXRlJ1xyXG5cdFx0XHRcdFx0XHRhcz17XHJcblx0XHRcdFx0XHRcdFx0PFNlbGVjdCBpZD0nY2l2aWxpdGUtc2VsZWN0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nbW1tZSc+TS4gJiBNbWU8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdtbWUnPk1tZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J21sbGUnPk1sbGU8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdtJz5NLjwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2Fzc28nPkFzc29jaWF0aW9uPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nY2UnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRDb21pdMOpIGQnZW50cmVwcmlzZVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nc29jJz5Tb2Npw6l0w6k8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdlbnRyJz5FbnRyZXByaXNlPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nZm95ZXJ2aWUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRGb3llciBkZSB2aWVcclxuXHRcdFx0XHRcdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2ZveWVyYWNjJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Rm95ZXIgZCdhY2N1ZWlsXHJcblx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdmYW1pbCc+RmFtaWxsZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2F1dHJlJz5BdXRyZXM8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDwvU2VsZWN0PlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdG5hbWU9J25vbSdcclxuXHRcdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0XHRsYWJlbD0nTm9tJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSdwcmVub20nXHJcblx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J1Byw6lub20nXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdzcGFjZS1hcm91bmQnPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdG5hbWU9J2FkcmVzc2UnXHJcblx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J0FkcmVzc2UnXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdG5hbWU9J2NwJ1xyXG5cdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdGxhYmVsPSdDb2RlIFBvc3RhbCdcclxuXHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0bmFtZT0ndmlsbGUnXHJcblx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J1ZpbGxlJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdDxJbnB1dExhYmVsXHJcblx0XHRcdFx0XHRcdHNocmlua1xyXG5cdFx0XHRcdFx0XHRpZD0nZGVtby1zaW1wbGUtc2VsZWN0LXBsYWNlaG9sZGVyLWxhYmVsLWxhYmVsJz5cclxuXHRcdFx0XHRcdFx0UGF5c1xyXG5cdFx0XHRcdFx0PC9JbnB1dExhYmVsPlxyXG5cclxuXHRcdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0XHRcdG5hbWU9J3BheXMnXHJcblx0XHRcdFx0XHRcdGFzPXtcclxuXHRcdFx0XHRcdFx0XHQ8U2VsZWN0IGlkPSdwYXlzLXNlbGVjdCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2ZyYW5jZSc+RnJhbmNlPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nJz4tLS0tLS0tLTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2F1dHJlcyc+QXV0cmVzPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nYWxsZW1hZ25lJz5BbGxlbWFnbmU8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdhbmdsZXRlcnJlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0QW5nbGV0ZXJyZVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nYmVsZ2lxdWUnPkJlbGdpcXVlPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0naG9sbGFuZGUnPkhvbGxhbmRlPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nbHV4ZW1ib3VyZyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEx1eGVtYm91cmdcclxuXHRcdFx0XHRcdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J3N1aXNzZSc+U3Vpc3NlPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8L1NlbGVjdD5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdzcGFjZS1hcm91bmQnPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdG5hbWU9J3RlbCdcclxuXHRcdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0XHRsYWJlbD0nVMOpbMOpcGhvbmUnXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdG5hbWU9J21haWwnXHJcblx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J0VtYWlsJ1xyXG5cdFx0XHRcdFx0dHlwZT0nbWFpbCdcclxuXHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblx0Y29uc3QgcmVjYXAgPSAoKSA9PiA8cD5KU09OLnN0cmluZ2lmeSgpPC9wPjtcclxuXHJcblx0ZnVuY3Rpb24gZ2V0U3RlcENvbnRlbnQoc3RlcCkge1xyXG5cdFx0c3dpdGNoIChzdGVwKSB7XHJcblx0XHRcdGNhc2UgMDpcclxuXHRcdFx0XHRyZXR1cm4gaW5mb0xvYygpO1xyXG5cdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0cmV0dXJuIGluZm9Db21wKCk7XHJcblx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRyZXR1cm4gQ29vcmQoKTtcclxuXHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdHJldHVybiByZWNhcCgpO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHJldHVybiAnRXJyZXVyJztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IHtcclxuXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHRcdGNvbnNvbGUubG9nKCdvblN1Ym1pdCBkYXRhID0+JywgZGF0YSk7XHJcblx0XHRjcmVhdGVSZXNlcnZhdGlvbihkYXRhKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3Jlc3VsdCB2YXV0ID0+JywgcmVzdWx0KTtcclxuXHRcdFx0aWYgKHJlc3VsdC5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdlcnJldXInLCByZXN1bHQuZXJyb3IpO1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IHJlc3VsdC5lcnJvciB9KTtcclxuXHRcdFx0fSBlbHNlIGlmIChyZXN1bHQuZGVqYVJlc2VydmVNZXNzYWdlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2RlamEgcmVzZXJ2ZScpO1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IHJlc3VsdC5kZWphUmVzZXJ2ZU1lc3NhZ2UgfSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IHRydWUsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IHJlc3VsdC5tZXNzYWdlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdC8vIFx0Um91dGVyLnB1c2goJy8nKTtcclxuXHRcdFx0XHQvLyB9LCAzMDAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxDb250YWluZXI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG5cdFx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuXHRcdFx0XHRcdDxTdGVwcGVyXHJcblx0XHRcdFx0XHRcdGFsdGVybmF0aXZlTGFiZWxcclxuXHRcdFx0XHRcdFx0YWN0aXZlU3RlcD17YWN0aXZlU3RlcH1cclxuXHRcdFx0XHRcdFx0Y29ubmVjdG9yPXs8Q29sb3JsaWJDb25uZWN0b3IgLz59PlxyXG5cdFx0XHRcdFx0XHR7c3RlcHMubWFwKChsYWJlbCkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxTdGVwIGtleT17bGFiZWx9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFN0ZXBMYWJlbCBTdGVwSWNvbkNvbXBvbmVudD17Q29sb3JsaWJTdGVwSWNvbn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtsYWJlbH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvU3RlcExhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDwvU3RlcD5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8L1N0ZXBwZXI+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHR7YWN0aXZlU3RlcCA9PT0gc3RlcHMubGVuZ3RoID8gKFxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHR7LyogVm9pciBwb3V0IGFqb3V0ZXIgaXNTdWJtaXRlZCA9PT0gdHJ1ZSAqL31cclxuXHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnN0cnVjdGlvbnN9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRWb3RyZSBkZW1hbmRlIGEgYmllbiDDqXTDqSBwcmlzZSBlbiBjb21wdGVcclxuXHRcdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlUmVzZXR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRSZWNvbW1lbmNlclxyXG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnN0cnVjdGlvbnN9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Z2V0U3RlcENvbnRlbnQoYWN0aXZlU3RlcCl9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2FjdGl2ZVN0ZXAgPT09IDB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlQmFja31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRSZXRvdXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHthY3RpdmVTdGVwID09PSBzdGVwcy5sZW5ndGggLSAxID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3N1Ym1pdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yPSdwcmltYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRWYWxpZGVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD0nY29udGFpbmVkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I9J3ByaW1hcnknXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVOZXh0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTdWl2YW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0NvbnRhaW5lcj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZXJ2YXRpb25Gb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9