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
/* harmony import */ var _material_ui_icons_GroupAdd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/GroupAdd */ "./node_modules/@material-ui/icons/GroupAdd.js");
/* harmony import */ var _material_ui_icons_GroupAdd__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GroupAdd__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_VideoLabel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/VideoLabel */ "./node_modules/@material-ui/icons/VideoLabel.js");
/* harmony import */ var _material_ui_icons_VideoLabel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VideoLabel__WEBPACK_IMPORTED_MODULE_13__);
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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");



var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\reservation\\ReservationForm.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _this = undefined,
    _s3 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;























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
})(_material_ui_core_StepConnector__WEBPACK_IMPORTED_MODULE_14__["default"]);
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
      lineNumber: 94,
      columnNumber: 3
    }
  }, completed ? __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.completed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  }) : __jsx("div", {
    className: classes.circle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
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
})(_material_ui_core_StepConnector__WEBPACK_IMPORTED_MODULE_14__["default"]);
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
    1: __jsx(_material_ui_icons_House__WEBPACK_IMPORTED_MODULE_17___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 6
      }
    }),
    2: __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 6
      }
    }),
    3: __jsx(_material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_18___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 6
      }
    }),
    4: __jsx(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_19___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 6
      }
    })
  };
  return __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.root, (_clsx2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx2, classes.active, active), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx2, classes.completed, completed), _clsx2)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
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

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_20__["useForm"])({
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

  var handleChange = function handleChange(name) {
    return function (e) {
      console.log('handleChange name vaut =>', name);

      if (name === 'civilite') {
        setValue('civilite', e.target.value);
      } else if (name === 'gite') {
        setValue('gite', e.target.value);
      } else if (name === 'pays') {
        setValue('pays', e.target.value);
      }
    };
  };

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    register('civilite'); // custom register Antd input

    register('gite'); // custom register Antd input

    register('pays'); // custom register Antd input
  }, [register]);
  var steps = getSteps();

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      selectedDate = _useState2[0],
      setSelectedDate = _useState2[1]; // new Date('2014-08-18T21:11:54')


  var handleDateChange = function handleDateChange(date) {
    setSelectedDate(date);
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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      gites = _useState3[0],
      setGites = _useState3[1];

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
        lineNumber: 306,
        columnNumber: 3
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 4
      }
    }, "Informations sur la location"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["InputLabel"], {
      shrink: true,
      id: "demo-simple-select-placeholder-label-label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 6
      }
    }, "R\xE9servation sur le g\xEEte :"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["Select"], {
      defaultValue: "manola",
      labelId: "demo-simple-select-placeholder-label-label",
      id: "demo-simple-select-placeholder-label",
      name: "gite",
      onChange: handleChange('gite'),
      displayEmpty: true,
      className: classes.selectEmpty,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 6
      }
    }, gites.map(function (gite, i) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["MenuItem"], {
        value: gite.slug,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 8
        }
      }, gite.nom);
    }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["TextField"], {
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
        lineNumber: 330,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["TextField"], {
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
        lineNumber: 340,
        columnNumber: 5
      }
    })), __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_24__["MuiPickersUtilsProvider"], {
      utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_23__["default"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 5
      }
    }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_24__["KeyboardDatePicker"], {
      margin: "normal",
      id: "date-picker-dialog",
      label: "Date d'arriv\xE9e",
      format: "dd/MM/yyyy",
      value: selectedDate,
      onChange: handleDateChange,
      KeyboardButtonProps: {
        'aria-label': 'change date'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 6
      }
    }), __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_24__["KeyboardDatePicker"], {
      margin: "normal",
      id: "date-picker-dialog",
      label: "Date de d\xE9part",
      format: "dd/MM/yyyy",
      value: selectedDate,
      onChange: handleDateChange,
      KeyboardButtonProps: {
        'aria-label': 'change date'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 6
      }
    }))));
  };

  var infoComp = function infoComp() {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381,
        columnNumber: 3
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 4
      }
    }, "Informations suppl\xE9mentaires"), __jsx("div", {
      className: classes.root,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["FormControl"], {
      component: "fieldset",
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["FormLabel"], {
      component: "legend",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387,
        columnNumber: 6
      }
    }, "Merci d'indiquer si vous nous avez d\xE9ja contact\xE9 par :"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["FormGroup"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 6
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["Checkbox"], {
        name: "checkMail",
        inputRef: register,
        defaultValue: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394,
          columnNumber: 10
        }
      }),
      label: "Mail",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392,
        columnNumber: 8
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["Checkbox"], {
        name: "checkTel",
        inputRef: register,
        defaultValue: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404,
          columnNumber: 10
        }
      }),
      label: "T\xE9l\xE9phone",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 8
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["Checkbox"], {
        name: "checkAbritel",
        inputRef: register,
        defaultValue: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414,
          columnNumber: 10
        }
      }),
      label: "Abritel",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412,
        columnNumber: 8
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["Checkbox"], {
        name: "checkLeboncoin",
        inputRef: register,
        defaultValue: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424,
          columnNumber: 10
        }
      }),
      label: "Leboncoin",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422,
        columnNumber: 8
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["Checkbox"], {
        name: "checkAutre",
        inputRef: register,
        defaultValue: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434,
          columnNumber: 10
        }
      }),
      label: "Autre",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432,
        columnNumber: 8
      }
    })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 446,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["TextField"], {
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
        lineNumber: 447,
        columnNumber: 6
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["Switch"], {
        inputRef: register,
        checked: true,
        name: "litFait",
        color: "primary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459,
          columnNumber: 8
        }
      }),
      label: "Souhaitez-vous l'option lit fait \xE0 l'arriv\xE9e ?",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 457,
        columnNumber: 6
      }
    }))));
  };

  var Coord = function Coord() {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 473,
        columnNumber: 3
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 474,
        columnNumber: 4
      }
    }, "Vos coordonn\xE9es"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 476,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 477,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["InputLabel"], {
      shrink: true,
      id: "demo-simple-select-placeholder-label-label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 478,
        columnNumber: 6
      }
    }, "Civilit\xE9"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["Select"], {
      defaultValue: "m" // labelId='demo-simple-select-placeholder-label-label'
      // id='demo-simple-select-placeholder-label'
      ,
      name: "civilite",
      onChange: handleChange('civilite'),
      displayEmpty: true,
      className: classes.selectEmpty,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 483,
        columnNumber: 6
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["MenuItem"], {
      value: "mmme",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 491,
        columnNumber: 7
      }
    }, "M. & Mme"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["MenuItem"], {
      value: "mme",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 492,
        columnNumber: 7
      }
    }, "Mme"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["MenuItem"], {
      value: "mlle",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 493,
        columnNumber: 7
      }
    }, "Mlle"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["MenuItem"], {
      value: "m",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 494,
        columnNumber: 7
      }
    }, "M."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["MenuItem"], {
      value: "asso",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 495,
        columnNumber: 7
      }
    }, "Association"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["MenuItem"], {
      value: "ce",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 496,
        columnNumber: 7
      }
    }, "Comit\xE9 d'entreprise"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["MenuItem"], {
      value: "soc",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 497,
        columnNumber: 7
      }
    }, "Soci\xE9t\xE9"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["MenuItem"], {
      value: "entr",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 498,
        columnNumber: 7
      }
    }, "Entreprise"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["MenuItem"], {
      value: "foyervie",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 499,
        columnNumber: 7
      }
    }, "Foyer de vie"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["MenuItem"], {
      value: "foyeracc",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 500,
        columnNumber: 7
      }
    }, "Foyer d'accueil"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["MenuItem"], {
      value: "famil",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 501,
        columnNumber: 7
      }
    }, "Famille"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["MenuItem"], {
      value: "autre",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 502,
        columnNumber: 7
      }
    }, "Autres"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["TextField"], {
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
        lineNumber: 527,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["TextField"], {
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
        lineNumber: 536,
        columnNumber: 5
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 546,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["TextField"], {
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
        lineNumber: 547,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["TextField"], {
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
        lineNumber: 556,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["TextField"], {
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
        lineNumber: 565,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 574,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["InputLabel"], {
      shrink: true,
      id: "demo-simple-select-placeholder-label-label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 575,
        columnNumber: 6
      }
    }, "Pays"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["Select"], {
      defaultValue: "france",
      labelId: "demo-simple-select-placeholder-label-label",
      id: "demo-simple-select-placeholder-label",
      name: "pays",
      onChange: handleChange('pays'),
      displayEmpty: true,
      className: classes.selectEmpty,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 580,
        columnNumber: 6
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["MenuItem"], {
      value: "france",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 588,
        columnNumber: 7
      }
    }, "France"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["MenuItem"], {
      value: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 589,
        columnNumber: 7
      }
    }, "--------"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["MenuItem"], {
      value: "autres",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 590,
        columnNumber: 7
      }
    }, "Autres"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["MenuItem"], {
      value: "allemagne",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 591,
        columnNumber: 7
      }
    }, "Allemagne"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["MenuItem"], {
      value: "angleterre",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 592,
        columnNumber: 7
      }
    }, "Angleterre"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["MenuItem"], {
      value: "belgique",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 593,
        columnNumber: 7
      }
    }, "Belgique"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["MenuItem"], {
      value: "hollande",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 594,
        columnNumber: 7
      }
    }, "Hollande"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["MenuItem"], {
      value: "luxembourg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 595,
        columnNumber: 7
      }
    }, "Luxembourg"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["MenuItem"], {
      value: "suisse",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 596,
        columnNumber: 7
      }
    }, "Suisse")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 601,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["TextField"], {
      inputRef: register,
      name: "tel",
      id: "standard-number",
      label: "T\xE9l\xE9phone",
      type: "telephone",
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 602,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["TextField"], {
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
        lineNumber: 612,
        columnNumber: 5
      }
    })));
  };

  var recap = function recap() {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 625,
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
    console.log('onSubmit data =>', data);
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 647,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 648,
      columnNumber: 4
    }
  }, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_7__["default"], {
    alternativeLabel: true,
    activeStep: activeStep,
    connector: __jsx(ColorlibConnector, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 653,
        columnNumber: 18
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650,
      columnNumber: 6
    }
  }, steps.map(function (label) {
    return __jsx(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 655,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
      StepIconComponent: ColorlibStepIcon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 656,
        columnNumber: 9
      }
    }, label));
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662,
      columnNumber: 6
    }
  }, activeStep === steps.length ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 664,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.instructions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 665,
      columnNumber: 9
    }
  }, "Votre demande a bien \xE9t\xE9 prise en compte"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onClick: handleReset,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 668,
      columnNumber: 9
    }
  }, "Recommencer")) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.instructions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681,
      columnNumber: 9
    }
  }, getStepContent(activeStep)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    disabled: activeStep === 0,
    onClick: handleBack,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685,
      columnNumber: 10
    }
  }, "Retour"), activeStep === steps.length - 1 ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["Input"], {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 692,
      columnNumber: 11
    }
  }) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    variant: "contained",
    color: "primary",
    onClick: handleNext,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 694,
      columnNumber: 11
    }
  }, "Suivant")))))));
};

_s3(ReservationForm, "d5ROWoQLv/V6ADa5rqPgosVwe+I=", false, function () {
  return [useStyles, react_hook_form__WEBPACK_IMPORTED_MODULE_20__["useForm"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXNlcnZhdGlvbi9SZXNlcnZhdGlvbkZvcm0uanMiXSwibmFtZXMiOlsiUW9udG9Db25uZWN0b3IiLCJ3aXRoU3R5bGVzIiwiYWx0ZXJuYXRpdmVMYWJlbCIsInRvcCIsImxlZnQiLCJyaWdodCIsImFjdGl2ZSIsImJvcmRlckNvbG9yIiwiY29tcGxldGVkIiwibGluZSIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwiU3RlcENvbm5lY3RvciIsInVzZVFvbnRvU3RlcEljb25TdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImNvbG9yIiwiZGlzcGxheSIsImhlaWdodCIsImFsaWduSXRlbXMiLCJjaXJjbGUiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsImZvbnRTaXplIiwiUW9udG9TdGVwSWNvbiIsInByb3BzIiwiY2xhc3NlcyIsImNsc3giLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiQ29sb3JsaWJDb25uZWN0b3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJib3JkZXIiLCJ1c2VDb2xvcmxpYlN0ZXBJY29uU3R5bGVzIiwianVzdGlmeUNvbnRlbnQiLCJib3hTaGFkb3ciLCJDb2xvcmxpYlN0ZXBJY29uIiwiaWNvbnMiLCJTdHJpbmciLCJpY29uIiwibm9kZSIsInVzZVN0eWxlcyIsInRoZW1lIiwiYnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwiaW5zdHJ1Y3Rpb25zIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiZm9ybUNvbnRyb2wiLCJtYXJnaW4iLCJtaW5XaWR0aCIsInNlbGVjdEVtcHR5IiwiZ2V0U3RlcHMiLCJSZXNlcnZhdGlvbkZvcm0iLCJ1c2VTdGF0ZSIsImFjdGl2ZVN0ZXAiLCJzZXRBY3RpdmVTdGVwIiwidXNlRm9ybSIsImRlZmF1bHRWYWx1ZXMiLCJnaXRlIiwibmJQZXJzIiwibmJFbmYiLCJuYkNoaWVuIiwibGl0RmFpdCIsIm5vbSIsInByZW5vbSIsImFkcmVzc2UiLCJjcCIsInZpbGxlIiwidGVsIiwibWFpbCIsImNvbnRyb2wiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInNldFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwibmFtZSIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJSZWFjdCIsInVzZUVmZmVjdCIsInN0ZXBzIiwic2VsZWN0ZWREYXRlIiwic2V0U2VsZWN0ZWREYXRlIiwiaGFuZGxlRGF0ZUNoYW5nZSIsImRhdGUiLCJoYW5kbGVOZXh0IiwicHJldkFjdGl2ZVN0ZXAiLCJoYW5kbGVCYWNrIiwiaGFuZGxlUmVzZXQiLCJnaXRlcyIsInNldEdpdGVzIiwibGlzdERlc0dpdGVzIiwibGlzdEdpdGVzTm9tcyIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJpbmZvTG9jIiwibWFwIiwiaSIsInNsdWciLCJzaHJpbmsiLCJEYXRlRm5zVXRpbHMiLCJpbmZvQ29tcCIsIkNvb3JkIiwicmVjYXAiLCJnZXRTdGVwQ29udGVudCIsInN0ZXAiLCJvblN1Ym1pdCIsImxhYmVsIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFNQSxJQUFNQSxjQUFjLEdBQUdDLDJFQUFVLENBQUM7QUFDakNDLGtCQUFnQixFQUFFO0FBQ2pCQyxPQUFHLEVBQUUsRUFEWTtBQUVqQkMsUUFBSSxFQUFFLG1CQUZXO0FBR2pCQyxTQUFLLEVBQUU7QUFIVSxHQURlO0FBTWpDQyxRQUFNLEVBQUU7QUFDUCxlQUFXO0FBQ1ZDLGlCQUFXLEVBQUU7QUFESDtBQURKLEdBTnlCO0FBV2pDQyxXQUFTLEVBQUU7QUFDVixlQUFX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QUMsaUVBQUQ7QUFDQyxZQUFRLEVBQUVBLFVBQVUsS0FBSyxDQUQxQjtBQUVDLFdBQU8sRUFBRW9DLFVBRlY7QUFHQyxhQUFTLEVBQUVuRSxPQUFPLENBQUNrQixNQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsRUFPRWEsVUFBVSxLQUFLNkIsS0FBSyxDQUFDNkIsTUFBTixHQUFlLENBQTlCLEdBQ0EsTUFBQyx3REFBRDtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxHQUdBLE1BQUMsaUVBQUQ7QUFDQyxXQUFPLEVBQUMsV0FEVDtBQUVDLFNBQUssRUFBQyxTQUZQO0FBR0MsV0FBTyxFQUFFeEIsVUFIVjtBQUlDLGFBQVMsRUFBRWpFLE9BQU8sQ0FBQ2tCLE1BSnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRixDQUpELENBbEJGLENBYkQsQ0FERCxDQURELENBREQ7QUF5RUEsQ0F4ZUQ7O0lBQU1XLGU7VUFDV2IsUyxFQUVzQ2lCLHdEOzs7TUFIakRKLGU7QUEwZVNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jlc2VydmF0aW9uLmUyZGMzZGU4N2JjODNkMGMxMDU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0R2l0ZXNOb21zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFN0ZXBwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcHBlcic7XHJcbmltcG9ydCBTdGVwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXAnO1xyXG5pbXBvcnQgU3RlcExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBMYWJlbCc7XHJcbmltcG9ydCBDaGVjayBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2snO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZXR0aW5ncyc7XHJcbmltcG9ydCBHcm91cEFkZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0dyb3VwQWRkJztcclxuaW1wb3J0IFZpZGVvTGFiZWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9WaWRlb0xhYmVsJztcclxuaW1wb3J0IFN0ZXBDb25uZWN0b3IgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcENvbm5lY3Rvcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBIb3VzZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hvdXNlJztcclxuaW1wb3J0IEVtb2ppUGVvcGxlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRW1vamlQZW9wbGUnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQge1xyXG5cdENoZWNrYm94LFxyXG5cdENvbnRhaW5lcixcclxuXHRGb3JtQ29udHJvbCxcclxuXHRGb3JtQ29udHJvbExhYmVsLFxyXG5cdEZvcm1Hcm91cCxcclxuXHRGb3JtSGVscGVyVGV4dCxcclxuXHRGb3JtTGFiZWwsXHJcblx0SW5wdXRMYWJlbCxcclxuXHRNZW51SXRlbSxcclxuXHRTZWxlY3QsXHJcblx0U3dpdGNoLFxyXG5cdFRleHRGaWVsZCxcclxuXHRJbnB1dCxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgRGF0ZUZuc1V0aWxzIGZyb20gJ0BkYXRlLWlvL2RhdGUtZm5zJztcclxuaW1wb3J0IHtcclxuXHRNdWlQaWNrZXJzVXRpbHNQcm92aWRlcixcclxuXHRLZXlib2FyZFRpbWVQaWNrZXIsXHJcblx0S2V5Ym9hcmREYXRlUGlja2VyLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9waWNrZXJzJztcclxuXHJcbmNvbnN0IFFvbnRvQ29ubmVjdG9yID0gd2l0aFN0eWxlcyh7XHJcblx0YWx0ZXJuYXRpdmVMYWJlbDoge1xyXG5cdFx0dG9wOiAxMCxcclxuXHRcdGxlZnQ6ICdjYWxjKC01MCUgKyAxNnB4KScsXHJcblx0XHRyaWdodDogJ2NhbGMoNTAlICsgMTZweCknLFxyXG5cdH0sXHJcblx0YWN0aXZlOiB7XHJcblx0XHQnJiAkbGluZSc6IHtcclxuXHRcdFx0Ym9yZGVyQ29sb3I6ICcjNzg0YWY0JyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRjb21wbGV0ZWQ6IHtcclxuXHRcdCcmICRsaW5lJzoge1xyXG5cdFx0XHRib3JkZXJDb2xvcjogJyM3ODRhZjQnLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGxpbmU6IHtcclxuXHRcdGJvcmRlckNvbG9yOiAnI2VhZWFmMCcsXHJcblx0XHRib3JkZXJUb3BXaWR0aDogMyxcclxuXHRcdGJvcmRlclJhZGl1czogMSxcclxuXHR9LFxyXG59KShTdGVwQ29ubmVjdG9yKTtcclxuXHJcbmNvbnN0IHVzZVFvbnRvU3RlcEljb25TdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuXHRyb290OiB7XHJcblx0XHRjb2xvcjogJyNlYWVhZjAnLFxyXG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0aGVpZ2h0OiAyMixcclxuXHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cdH0sXHJcblx0YWN0aXZlOiB7XHJcblx0XHRjb2xvcjogJyM3ODRhZjQnLFxyXG5cdH0sXHJcblx0Y2lyY2xlOiB7XHJcblx0XHR3aWR0aDogOCxcclxuXHRcdGhlaWdodDogOCxcclxuXHRcdGJvcmRlclJhZGl1czogJzUwJScsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxyXG5cdH0sXHJcblx0Y29tcGxldGVkOiB7XHJcblx0XHRjb2xvcjogJyM3ODRhZjQnLFxyXG5cdFx0ekluZGV4OiAxLFxyXG5cdFx0Zm9udFNpemU6IDE4LFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gUW9udG9TdGVwSWNvbihwcm9wcykge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VRb250b1N0ZXBJY29uU3R5bGVzKCk7XHJcblx0Y29uc3QgeyBhY3RpdmUsIGNvbXBsZXRlZCB9ID0gcHJvcHM7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsIHtcclxuXHRcdFx0XHRbY2xhc3Nlcy5hY3RpdmVdOiBhY3RpdmUsXHJcblx0XHRcdH0pfT5cclxuXHRcdFx0e2NvbXBsZXRlZCA/IChcclxuXHRcdFx0XHQ8Q2hlY2sgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbXBsZXRlZH0gLz5cclxuXHRcdFx0KSA6IChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jaXJjbGV9IC8+XHJcblx0XHRcdCl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5Rb250b1N0ZXBJY29uLnByb3BUeXBlcyA9IHtcclxuXHQvKipcclxuXHQgKiBXaGV0aGVyIHRoaXMgc3RlcCBpcyBhY3RpdmUuXHJcblx0ICovXHJcblx0YWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcclxuXHQvKipcclxuXHQgKiBNYXJrIHRoZSBzdGVwIGFzIGNvbXBsZXRlZC4gSXMgcGFzc2VkIHRvIGNoaWxkIGNvbXBvbmVudHMuXHJcblx0ICovXHJcblx0Y29tcGxldGVkOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmNvbnN0IENvbG9ybGliQ29ubmVjdG9yID0gd2l0aFN0eWxlcyh7XHJcblx0YWx0ZXJuYXRpdmVMYWJlbDoge1xyXG5cdFx0dG9wOiAyMixcclxuXHR9LFxyXG5cdGFjdGl2ZToge1xyXG5cdFx0JyYgJGxpbmUnOiB7XHJcblx0XHRcdGJhY2tncm91bmRJbWFnZTpcclxuXHRcdFx0XHQnbGluZWFyLWdyYWRpZW50KCA5NWRlZyxyZ2IoMjQyLDExMywzMykgMCUscmdiKDIzMyw2NCw4NykgNTAlLHJnYigxMzgsMzUsMTM1KSAxMDAlKScsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0Y29tcGxldGVkOiB7XHJcblx0XHQnJiAkbGluZSc6IHtcclxuXHRcdFx0YmFja2dyb3VuZEltYWdlOlxyXG5cdFx0XHRcdCdsaW5lYXItZ3JhZGllbnQoIDk1ZGVnLHJnYigyNDIsMTEzLDMzKSAwJSxyZ2IoMjMzLDY0LDg3KSA1MCUscmdiKDEzOCwzNSwxMzUpIDEwMCUpJyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRsaW5lOiB7XHJcblx0XHRoZWlnaHQ6IDMsXHJcblx0XHRib3JkZXI6IDAsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjZWFlYWYwJyxcclxuXHRcdGJvcmRlclJhZGl1czogMSxcclxuXHR9LFxyXG59KShTdGVwQ29ubmVjdG9yKTtcclxuXHJcbmNvbnN0IHVzZUNvbG9ybGliU3RlcEljb25TdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuXHRyb290OiB7XHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjY2NjJyxcclxuXHRcdHpJbmRleDogMSxcclxuXHRcdGNvbG9yOiAnI2ZmZicsXHJcblx0XHR3aWR0aDogNTAsXHJcblx0XHRoZWlnaHQ6IDUwLFxyXG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAnNTAlJyxcclxuXHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuXHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cdH0sXHJcblx0YWN0aXZlOiB7XHJcblx0XHRiYWNrZ3JvdW5kSW1hZ2U6XHJcblx0XHRcdCdsaW5lYXItZ3JhZGllbnQoIDEzNmRlZywgcmdiKDI0MiwxMTMsMzMpIDAlLCByZ2IoMjMzLDY0LDg3KSA1MCUsIHJnYigxMzgsMzUsMTM1KSAxMDAlKScsXHJcblx0XHRib3hTaGFkb3c6ICcwIDRweCAxMHB4IDAgcmdiYSgwLDAsMCwuMjUpJyxcclxuXHR9LFxyXG5cdGNvbXBsZXRlZDoge1xyXG5cdFx0YmFja2dyb3VuZEltYWdlOlxyXG5cdFx0XHQnbGluZWFyLWdyYWRpZW50KCAxMzZkZWcsIHJnYigyNDIsMTEzLDMzKSAwJSwgcmdiKDIzMyw2NCw4NykgNTAlLCByZ2IoMTM4LDM1LDEzNSkgMTAwJSknLFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gQ29sb3JsaWJTdGVwSWNvbihwcm9wcykge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VDb2xvcmxpYlN0ZXBJY29uU3R5bGVzKCk7XHJcblx0Y29uc3QgeyBhY3RpdmUsIGNvbXBsZXRlZCB9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IGljb25zID0ge1xyXG5cdFx0MTogPEhvdXNlSWNvbiAvPixcclxuXHRcdDI6IDxTZXR0aW5nc0ljb24gLz4sXHJcblx0XHQzOiA8RW1vamlQZW9wbGVJY29uIC8+LFxyXG5cdFx0NDogPENoZWNrQ2lyY2xlSWNvbiAvPixcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCB7XHJcblx0XHRcdFx0W2NsYXNzZXMuYWN0aXZlXTogYWN0aXZlLFxyXG5cdFx0XHRcdFtjbGFzc2VzLmNvbXBsZXRlZF06IGNvbXBsZXRlZCxcclxuXHRcdFx0fSl9PlxyXG5cdFx0XHR7aWNvbnNbU3RyaW5nKHByb3BzLmljb24pXX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbkNvbG9ybGliU3RlcEljb24ucHJvcFR5cGVzID0ge1xyXG5cdC8qKlxyXG5cdCAqIFdoZXRoZXIgdGhpcyBzdGVwIGlzIGFjdGl2ZS5cclxuXHQgKi9cclxuXHRhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxyXG5cdC8qKlxyXG5cdCAqIE1hcmsgdGhlIHN0ZXAgYXMgY29tcGxldGVkLiBJcyBwYXNzZWQgdG8gY2hpbGQgY29tcG9uZW50cy5cclxuXHQgKi9cclxuXHRjb21wbGV0ZWQ6IFByb3BUeXBlcy5ib29sLFxyXG5cdC8qKlxyXG5cdCAqIFRoZSBsYWJlbCBkaXNwbGF5ZWQgaW4gdGhlIHN0ZXAgaWNvbi5cclxuXHQgKi9cclxuXHRpY29uOiBQcm9wVHlwZXMubm9kZSxcclxufTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0fSxcclxuXHRidXR0b246IHtcclxuXHRcdG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdH0sXHJcblx0aW5zdHJ1Y3Rpb25zOiB7XHJcblx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHRtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0fSxcclxuXHRmb3JtQ29udHJvbDoge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0bWluV2lkdGg6IDEyMCxcclxuXHR9LFxyXG5cdHNlbGVjdEVtcHR5OiB7XHJcblx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0fSxcclxufSkpO1xyXG5cclxuZnVuY3Rpb24gZ2V0U3RlcHMoKSB7XHJcblx0cmV0dXJuIFtcclxuXHRcdCdJbmZvcm1hdGlvbiBzdXIgbGEgbG9jYXRpb24nLFxyXG5cdFx0J0luZm9ybWF0aW9ucyBjb21wbMOpbWVudGFpcmVzJyxcclxuXHRcdCdWb3MgY29vcmRvbm7DqWVzJyxcclxuXHRcdCdSw6ljYXBpdHVsYXRpZicsXHJcblx0XTtcclxufVxyXG5cclxuY29uc3QgUmVzZXJ2YXRpb25Gb3JtID0gKCkgPT4ge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRjb25zdCBbYWN0aXZlU3RlcCwgc2V0QWN0aXZlU3RlcF0gPSB1c2VTdGF0ZSgwKTtcclxuXHRjb25zdCB7IGNvbnRyb2wsIHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIHNldFZhbHVlIH0gPSB1c2VGb3JtKHtcclxuXHRcdGRlZmF1bHRWYWx1ZXM6IHtcclxuXHRcdFx0Z2l0ZTogJ21hbm9sYScsXHJcblx0XHRcdG5iUGVyczogMTAsXHJcblx0XHRcdG5iRW5mOiA1LFxyXG5cdFx0XHRuYkNoaWVuOiAxLFxyXG5cdFx0XHRsaXRGYWl0OiB0cnVlLFxyXG5cdFx0XHRub206ICdMYXBpZXJyZScsXHJcblx0XHRcdHByZW5vbTogJ0pvc3NpYycsXHJcblx0XHRcdGFkcmVzc2U6ICcxOCBydWUgdGVzdCcsXHJcblx0XHRcdGNwOiAnNTEwMDAnLFxyXG5cdFx0XHR2aWxsZTogJ21hVmlsbGUnLFxyXG5cdFx0XHR0ZWw6ICcwNiAxNSA1NSA1NSA1NScsXHJcblx0XHRcdG1haWw6ICdqb3NzaWMubGFwaWVycmVAZ21haWwuY29tJyxcclxuXHRcdH0sXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IChuYW1lKSA9PiAoZSkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coJ2hhbmRsZUNoYW5nZSBuYW1lIHZhdXQgPT4nLCBuYW1lKTtcclxuXHRcdGlmIChuYW1lID09PSAnY2l2aWxpdGUnKSB7XHJcblx0XHRcdHNldFZhbHVlKCdjaXZpbGl0ZScsIGUudGFyZ2V0LnZhbHVlKTtcclxuXHRcdH0gZWxzZSBpZiAobmFtZSA9PT0gJ2dpdGUnKSB7XHJcblx0XHRcdHNldFZhbHVlKCdnaXRlJywgZS50YXJnZXQudmFsdWUpO1xyXG5cdFx0fSBlbHNlIGlmIChuYW1lID09PSAncGF5cycpIHtcclxuXHRcdFx0c2V0VmFsdWUoJ3BheXMnLCBlLnRhcmdldC52YWx1ZSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0UmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHJlZ2lzdGVyKCdjaXZpbGl0ZScpOyAvLyBjdXN0b20gcmVnaXN0ZXIgQW50ZCBpbnB1dFxyXG5cdFx0cmVnaXN0ZXIoJ2dpdGUnKTsgLy8gY3VzdG9tIHJlZ2lzdGVyIEFudGQgaW5wdXRcclxuXHRcdHJlZ2lzdGVyKCdwYXlzJyk7IC8vIGN1c3RvbSByZWdpc3RlciBBbnRkIGlucHV0XHJcblx0fSwgW3JlZ2lzdGVyXSk7XHJcblxyXG5cdGNvbnN0IHN0ZXBzID0gZ2V0U3RlcHMoKTtcclxuXHJcblx0Y29uc3QgW3NlbGVjdGVkRGF0ZSwgc2V0U2VsZWN0ZWREYXRlXSA9IHVzZVN0YXRlKCk7XHJcblx0Ly8gbmV3IERhdGUoJzIwMTQtMDgtMThUMjE6MTE6NTQnKVxyXG5cclxuXHRjb25zdCBoYW5kbGVEYXRlQ2hhbmdlID0gKGRhdGUpID0+IHtcclxuXHRcdHNldFNlbGVjdGVkRGF0ZShkYXRlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xyXG5cdFx0c2V0QWN0aXZlU3RlcCgocHJldkFjdGl2ZVN0ZXApID0+IHByZXZBY3RpdmVTdGVwICsgMSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcclxuXHRcdHNldEFjdGl2ZVN0ZXAoKHByZXZBY3RpdmVTdGVwKSA9PiBwcmV2QWN0aXZlU3RlcCAtIDEpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xyXG5cdFx0c2V0QWN0aXZlU3RlcCgwKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBbZ2l0ZXMsIHNldEdpdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgbGlzdERlc0dpdGVzID0gKCkgPT4ge1xyXG5cdFx0bGlzdEdpdGVzTm9tcygpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0R2l0ZXMoLi4uZ2l0ZXMsIGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGlzdERlc0dpdGVzKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCBpbmZvTG9jID0gKCkgPT4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9Jyc+XHJcblx0XHRcdDxoMj5JbmZvcm1hdGlvbnMgc3VyIGxhIGxvY2F0aW9uPC9oMj5cclxuXHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdzcGFjZS1hcm91bmQnPlxyXG5cdFx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0PElucHV0TGFiZWxcclxuXHRcdFx0XHRcdFx0c2hyaW5rXHJcblx0XHRcdFx0XHRcdGlkPSdkZW1vLXNpbXBsZS1zZWxlY3QtcGxhY2Vob2xkZXItbGFiZWwtbGFiZWwnPlxyXG5cdFx0XHRcdFx0XHRSw6lzZXJ2YXRpb24gc3VyIGxlIGfDrnRlIDpcclxuXHRcdFx0XHRcdDwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdDxTZWxlY3RcclxuXHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPSdtYW5vbGEnXHJcblx0XHRcdFx0XHRcdGxhYmVsSWQ9J2RlbW8tc2ltcGxlLXNlbGVjdC1wbGFjZWhvbGRlci1sYWJlbC1sYWJlbCdcclxuXHRcdFx0XHRcdFx0aWQ9J2RlbW8tc2ltcGxlLXNlbGVjdC1wbGFjZWhvbGRlci1sYWJlbCdcclxuXHRcdFx0XHRcdFx0bmFtZT0nZ2l0ZSdcclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnZ2l0ZScpfVxyXG5cdFx0XHRcdFx0XHRkaXNwbGF5RW1wdHlcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnNlbGVjdEVtcHR5fT5cclxuXHRcdFx0XHRcdFx0e2dpdGVzLm1hcCgoZ2l0ZSwgaSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT17Z2l0ZS5zbHVnfT57Z2l0ZS5ub219PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8L1NlbGVjdD5cclxuXHRcdFx0XHRcdHsvKiA8Rm9ybUhlbHBlclRleHQ+UsOpc2VydmF0aW9uIHN1ciBsZSBnw650ZSA6PC9Gb3JtSGVscGVyVGV4dD4gKi99XHJcblx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSduYlBlcnMnXHJcblx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J05vbWJyZSBkZSBwZXJzb25uZXMgdG90YWwnXHJcblx0XHRcdFx0XHR0eXBlPSdudW1iZXInXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdG5hbWU9J25iRW5mJ1xyXG5cdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdGxhYmVsPSdEb250IGVuZmFudHMgZGUgbW9pbnMgZGUgMTggYW5zJ1xyXG5cdFx0XHRcdFx0dHlwZT0nbnVtYmVyJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIgdXRpbHM9e0RhdGVGbnNVdGlsc30+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J3NwYWNlLWFyb3VuZCc+XHJcblx0XHRcdFx0XHQ8S2V5Ym9hcmREYXRlUGlja2VyXHJcblx0XHRcdFx0XHRcdG1hcmdpbj0nbm9ybWFsJ1xyXG5cdFx0XHRcdFx0XHRpZD0nZGF0ZS1waWNrZXItZGlhbG9nJ1xyXG5cdFx0XHRcdFx0XHRsYWJlbD1cIkRhdGUgZCdhcnJpdsOpZVwiXHJcblx0XHRcdFx0XHRcdGZvcm1hdD0nZGQvTU0veXl5eSdcclxuXHRcdFx0XHRcdFx0dmFsdWU9e3NlbGVjdGVkRGF0ZX1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZURhdGVDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdEtleWJvYXJkQnV0dG9uUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6ICdjaGFuZ2UgZGF0ZScsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHRcdDxLZXlib2FyZERhdGVQaWNrZXJcclxuXHRcdFx0XHRcdFx0bWFyZ2luPSdub3JtYWwnXHJcblx0XHRcdFx0XHRcdGlkPSdkYXRlLXBpY2tlci1kaWFsb2cnXHJcblx0XHRcdFx0XHRcdGxhYmVsPSdEYXRlIGRlIGTDqXBhcnQnXHJcblx0XHRcdFx0XHRcdGZvcm1hdD0nZGQvTU0veXl5eSdcclxuXHRcdFx0XHRcdFx0dmFsdWU9e3NlbGVjdGVkRGF0ZX1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZURhdGVDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdEtleWJvYXJkQnV0dG9uUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6ICdjaGFuZ2UgZGF0ZScsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PC9NdWlQaWNrZXJzVXRpbHNQcm92aWRlcj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblx0Y29uc3QgaW5mb0NvbXAgPSAoKSA9PiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8aDI+SW5mb3JtYXRpb25zIHN1cHBsw6ltZW50YWlyZXM8L2gyPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2xcclxuXHRcdFx0XHRcdGNvbXBvbmVudD0nZmllbGRzZXQnXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0PEZvcm1MYWJlbCBjb21wb25lbnQ9J2xlZ2VuZCc+XHJcblx0XHRcdFx0XHRcdE1lcmNpIGQnaW5kaXF1ZXIgc2kgdm91cyBub3VzIGF2ZXogZMOpamEgY29udGFjdMOpIHBhciA6XHJcblx0XHRcdFx0XHQ8L0Zvcm1MYWJlbD5cclxuXHRcdFx0XHRcdDxGb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdzcGFjZS1hcm91bmQnPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250cm9sPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PENoZWNrYm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nY2hlY2tNYWlsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2ZhbHNlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9J01haWwnXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xMYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udHJvbD17XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxDaGVja2JveFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J2NoZWNrVGVsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD0nVMOpbMOpcGhvbmUnXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xMYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udHJvbD17XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxDaGVja2JveFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J2NoZWNrQWJyaXRlbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPSdBYnJpdGVsJ1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sTGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRyb2w9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2hlY2tib3hcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdjaGVja0xlYm9uY29pbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPSdMZWJvbmNvaW4nXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xMYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udHJvbD17XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxDaGVja2JveFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J2NoZWNrQXV0cmUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17ZmFsc2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD0nQXV0cmUnXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XHJcblx0XHRcdFx0XHR7LyogPEZvcm1IZWxwZXJUZXh0PkJlIGNhcmVmdWw8L0Zvcm1IZWxwZXJUZXh0PiAqL31cclxuXHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdzcGFjZS1hcm91bmQnPlxyXG5cdFx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdG5hbWU9J25iQ2hpZW4nXHJcblx0XHRcdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0XHRcdGxhYmVsPSdOb21icmUgZGUgY2hpZW4gPyAoM+KCrC9qb3VyL2FuaW1hbCknXHJcblx0XHRcdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsXHJcblx0XHRcdFx0XHRcdGNvbnRyb2w9e1xyXG5cdFx0XHRcdFx0XHRcdDxTd2l0Y2hcclxuXHRcdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3RydWV9XHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPSdsaXRGYWl0J1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I9J3ByaW1hcnknXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRsYWJlbD1cIlNvdWhhaXRlei12b3VzIGwnb3B0aW9uIGxpdCBmYWl0IMOgIGwnYXJyaXbDqWUgP1wiXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cdGNvbnN0IENvb3JkID0gKCkgPT4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGgyPlZvcyBjb29yZG9ubsOpZXM8L2gyPlxyXG5cclxuXHRcdFx0PEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J3NwYWNlLWFyb3VuZCc+XHJcblx0XHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHQ8SW5wdXRMYWJlbFxyXG5cdFx0XHRcdFx0XHRzaHJpbmtcclxuXHRcdFx0XHRcdFx0aWQ9J2RlbW8tc2ltcGxlLXNlbGVjdC1wbGFjZWhvbGRlci1sYWJlbC1sYWJlbCc+XHJcblx0XHRcdFx0XHRcdENpdmlsaXTDqVxyXG5cdFx0XHRcdFx0PC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdFx0PFNlbGVjdFxyXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9J20nXHJcblx0XHRcdFx0XHRcdC8vIGxhYmVsSWQ9J2RlbW8tc2ltcGxlLXNlbGVjdC1wbGFjZWhvbGRlci1sYWJlbC1sYWJlbCdcclxuXHRcdFx0XHRcdFx0Ly8gaWQ9J2RlbW8tc2ltcGxlLXNlbGVjdC1wbGFjZWhvbGRlci1sYWJlbCdcclxuXHRcdFx0XHRcdFx0bmFtZT0nY2l2aWxpdGUnXHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2NpdmlsaXRlJyl9XHJcblx0XHRcdFx0XHRcdGRpc3BsYXlFbXB0eVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuc2VsZWN0RW1wdHl9PlxyXG5cdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J21tbWUnPk0uICYgTW1lPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdtbWUnPk1tZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nbWxsZSc+TWxsZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nbSc+TS48L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2Fzc28nPkFzc29jaWF0aW9uPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdjZSc+Q29taXTDqSBkJ2VudHJlcHJpc2U8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J3NvYyc+U29jacOpdMOpPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdlbnRyJz5FbnRyZXByaXNlPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdmb3llcnZpZSc+Rm95ZXIgZGUgdmllPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdmb3llcmFjYyc+Rm95ZXIgZCdhY2N1ZWlsPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdmYW1pbCc+RmFtaWxsZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nYXV0cmUnPkF1dHJlczwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHQ8L1NlbGVjdD5cclxuXHRcdFx0XHRcdHsvKiA8Rm9ybUhlbHBlclRleHQ+UsOpc2VydmF0aW9uIHN1ciBsZSBnw650ZSA6PC9Gb3JtSGVscGVyVGV4dD4gKi99XHJcblx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHJcblx0XHRcdFx0ey8qIDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRcdG5hbWU9J2NpdmlsaXRlJ1xyXG5cdFx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0XHRvcHRpb25zPXtbXHJcblx0XHRcdFx0XHRcdFx0eyB2YWx1ZTogJ21tbWUnLCBsYWJlbDogJ00uICYgTW1lJyB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmFsdWU6ICdtbWUnLCBsYWJlbDogJ01tZScgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZhbHVlOiAnbWxsZScsIGxhYmVsOiAnTWxsZScgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZhbHVlOiAnbScsIGxhYmVsOiAnTS4nIH0sXHJcblx0XHRcdFx0XHRcdFx0eyB2YWx1ZTogJ2Fzc28nLCBsYWJlbDogJ0Fzc29jaWF0aW9uJyB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmFsdWU6ICdjZScsIGxhYmVsOiBcIkNvbWl0w6kgZCdlbnRyZXByaXNlXCIgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZhbHVlOiAnc29jJywgbGFiZWw6ICdTb2Npw6l0w6knIH0sXHJcblx0XHRcdFx0XHRcdFx0eyB2YWx1ZTogJ2VudHInLCBsYWJlbDogJ0VudHJlcHJpc2UnIH0sXHJcblx0XHRcdFx0XHRcdFx0eyB2YWx1ZTogJ2ZveWVydmllJywgbGFiZWw6ICdGb3llciBkZSB2aWUnIH0sXHJcblx0XHRcdFx0XHRcdFx0eyB2YWx1ZTogJ2ZveWVyYWNjJywgbGFiZWw6IFwiRm95ZXIgZCdhY2N1ZWlsXCIgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZhbHVlOiAnZmFtaWwnLCBsYWJlbDogJ0ZhbWlsbGUnIH0sXHJcblx0XHRcdFx0XHRcdFx0eyB2YWx1ZTogJ2F1dHJlJywgbGFiZWw6ICdBdXRyZXMnIH0sXHJcblx0XHRcdFx0XHRcdF19XHJcblx0XHRcdFx0XHRcdGFzPXtTZWxlY3R9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH1cclxuXHRcdFx0XHRcdC8+ICovfVxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdG5hbWU9J25vbSdcclxuXHRcdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0XHRsYWJlbD0nTm9tJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSdwcmVub20nXHJcblx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J1Byw6lub20nXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdzcGFjZS1hcm91bmQnPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdG5hbWU9J2FkcmVzc2UnXHJcblx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J0FkcmVzc2UnXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdG5hbWU9J2NwJ1xyXG5cdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdGxhYmVsPSdDb2RlIFBvc3RhbCdcclxuXHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0bmFtZT0ndmlsbGUnXHJcblx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J1ZpbGxlJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdDxJbnB1dExhYmVsXHJcblx0XHRcdFx0XHRcdHNocmlua1xyXG5cdFx0XHRcdFx0XHRpZD0nZGVtby1zaW1wbGUtc2VsZWN0LXBsYWNlaG9sZGVyLWxhYmVsLWxhYmVsJz5cclxuXHRcdFx0XHRcdFx0UGF5c1xyXG5cdFx0XHRcdFx0PC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdFx0PFNlbGVjdFxyXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9J2ZyYW5jZSdcclxuXHRcdFx0XHRcdFx0bGFiZWxJZD0nZGVtby1zaW1wbGUtc2VsZWN0LXBsYWNlaG9sZGVyLWxhYmVsLWxhYmVsJ1xyXG5cdFx0XHRcdFx0XHRpZD0nZGVtby1zaW1wbGUtc2VsZWN0LXBsYWNlaG9sZGVyLWxhYmVsJ1xyXG5cdFx0XHRcdFx0XHRuYW1lPSdwYXlzJ1xyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwYXlzJyl9XHJcblx0XHRcdFx0XHRcdGRpc3BsYXlFbXB0eVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuc2VsZWN0RW1wdHl9PlxyXG5cdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2ZyYW5jZSc+RnJhbmNlPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPScnPi0tLS0tLS0tPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdhdXRyZXMnPkF1dHJlczwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nYWxsZW1hZ25lJz5BbGxlbWFnbmU8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2FuZ2xldGVycmUnPkFuZ2xldGVycmU8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2JlbGdpcXVlJz5CZWxnaXF1ZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0naG9sbGFuZGUnPkhvbGxhbmRlPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdsdXhlbWJvdXJnJz5MdXhlbWJvdXJnPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdzdWlzc2UnPlN1aXNzZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHQ8L1NlbGVjdD5cclxuXHRcdFx0XHRcdHsvKiA8Rm9ybUhlbHBlclRleHQ+UGF5czwvRm9ybUhlbHBlclRleHQ+ICovfVxyXG5cdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J3NwYWNlLWFyb3VuZCc+XHJcblx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0bmFtZT0ndGVsJ1xyXG5cdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdGxhYmVsPSdUw6lsw6lwaG9uZSdcclxuXHRcdFx0XHRcdHR5cGU9J3RlbGVwaG9uZSdcclxuXHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0bmFtZT0nbWFpbCdcclxuXHRcdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0XHRsYWJlbD0nRW1haWwnXHJcblx0XHRcdFx0XHR0eXBlPSdtYWlsJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxuXHRjb25zdCByZWNhcCA9ICgpID0+IDxwPkpTT04uc3RyaW5naWZ5KCk8L3A+O1xyXG5cclxuXHRmdW5jdGlvbiBnZXRTdGVwQ29udGVudChzdGVwKSB7XHJcblx0XHRzd2l0Y2ggKHN0ZXApIHtcclxuXHRcdFx0Y2FzZSAwOlxyXG5cdFx0XHRcdHJldHVybiBpbmZvTG9jKCk7XHJcblx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRyZXR1cm4gaW5mb0NvbXAoKTtcclxuXHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdHJldHVybiBDb29yZCgpO1xyXG5cdFx0XHRjYXNlIDM6XHJcblx0XHRcdFx0cmV0dXJuIHJlY2FwKCk7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0cmV0dXJuICdFcnJldXInO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coJ29uU3VibWl0IGRhdGEgPT4nLCBkYXRhKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PENvbnRhaW5lcj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcblx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG5cdFx0XHRcdFx0PFN0ZXBwZXJcclxuXHRcdFx0XHRcdFx0YWx0ZXJuYXRpdmVMYWJlbFxyXG5cdFx0XHRcdFx0XHRhY3RpdmVTdGVwPXthY3RpdmVTdGVwfVxyXG5cdFx0XHRcdFx0XHRjb25uZWN0b3I9ezxDb2xvcmxpYkNvbm5lY3RvciAvPn0+XHJcblx0XHRcdFx0XHRcdHtzdGVwcy5tYXAoKGxhYmVsKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PFN0ZXAga2V5PXtsYWJlbH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8U3RlcExhYmVsIFN0ZXBJY29uQ29tcG9uZW50PXtDb2xvcmxpYlN0ZXBJY29ufT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2xhYmVsfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9TdGVwTGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PC9TdGVwPlxyXG5cdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdDwvU3RlcHBlcj5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdHthY3RpdmVTdGVwID09PSBzdGVwcy5sZW5ndGggPyAoXHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnN0cnVjdGlvbnN9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRWb3RyZSBkZW1hbmRlIGEgYmllbiDDqXTDqSBwcmlzZSBlbiBjb21wdGVcclxuXHRcdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlUmVzZXR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRSZWNvbW1lbmNlclxyXG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHR7LyogPEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gb25DbGljaz17aGFuZGxlUmVzZXR9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdFx0XHRcdFZhbGlkZXJcclxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj4gKi99XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnN0cnVjdGlvbnN9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Z2V0U3RlcENvbnRlbnQoYWN0aXZlU3RlcCl9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2FjdGl2ZVN0ZXAgPT09IDB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlQmFja31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRSZXRvdXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHthY3RpdmVTdGVwID09PSBzdGVwcy5sZW5ndGggLSAxID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dCB0eXBlPSdzdWJtaXQnIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD0nY29udGFpbmVkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I9J3ByaW1hcnknXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVOZXh0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTdWl2YW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD0nY29udGFpbmVkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yPSdwcmltYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZU5leHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2FjdGl2ZVN0ZXAgPT09IHN0ZXBzLmxlbmd0aCAtIDFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gJ1ZhbGlkZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICdTdWl2YW50J31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+ICovfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9Db250YWluZXI+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VydmF0aW9uRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==