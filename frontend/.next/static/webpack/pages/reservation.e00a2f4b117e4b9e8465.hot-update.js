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
/* harmony import */ var react_date_range__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-date-range */ "./node_modules/react-date-range/dist/index.js");
/* harmony import */ var react_date_range__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_date_range__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var _actions_reservationActions__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../actions/reservationActions */ "./actions/reservationActions.js");
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _HOC_Snackbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../HOC/Snackbar */ "./components/HOC/Snackbar.js");





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
      lineNumber: 98,
      columnNumber: 3
    }
  }, completed ? __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default.a, {
    className: classes.completed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 5
    }
  }) : __jsx("div", {
    className: classes.circle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
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
        lineNumber: 174,
        columnNumber: 6
      }
    }),
    2: __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_13___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 6
      }
    }),
    3: __jsx(_material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_18___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 6
      }
    }),
    4: __jsx(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_19___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 6
      }
    })
  };
  return __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_8__["default"])(classes.root, (_clsx2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_clsx2, classes.active, active), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_clsx2, classes.completed, completed), _clsx2)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
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

  var handleSelect = function handleSelect(ranges) {
    console.log(ranges); // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  }; // const selectionRange = {
  // 	startDate: new Date(),
  // 	endDate: new Date(),
  // 	key: 'selection',
  // };


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
        lineNumber: 324,
        columnNumber: 3
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 4
      }
    }, "Informations sur la location"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_25__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["InputLabel"], {
      shrink: true,
      id: "demo-simple-select-placeholder-label-label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 6
      }
    }, "R\xE9servation sur le g\xEEte :"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_20__["Controller"], {
      control: control,
      name: "gite",
      as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Select"], {
        id: "gite-select",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338,
          columnNumber: 8
        }
      }, gites.map(function (gite, i) {
        return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
          key: gite.slug,
          value: gite.slug,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 340,
            columnNumber: 10
          }
        }, gite.nom);
      })),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 6
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TextField"], {
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
        lineNumber: 348,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TextField"], {
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
        lineNumber: 358,
        columnNumber: 5
      }
    })), __jsx(react_date_range__WEBPACK_IMPORTED_MODULE_23__["DateRangePicker"], {
      ranges: [selectionRange],
      onChange: handleSelect,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 4
      }
    }));
  };

  var infoComp = function infoComp() {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410,
        columnNumber: 3
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411,
        columnNumber: 4
      }
    }, "Informations suppl\xE9mentaires"), __jsx("div", {
      className: classes.root,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["FormControl"], {
      component: "fieldset",
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["FormLabel"], {
      component: "legend",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416,
        columnNumber: 6
      }
    }, "Merci d'indiquer si vous nous avez d\xE9ja contact\xE9 par :"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["FormGroup"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 6
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_25__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Checkbox"], {
        name: "contactMail",
        inputRef: register,
        defaultValue: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423,
          columnNumber: 10
        }
      }),
      label: "Mail",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 8
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Checkbox"], {
        name: "contactTel",
        inputRef: register,
        defaultValue: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433,
          columnNumber: 10
        }
      }),
      label: "T\xE9l\xE9phone",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 431,
        columnNumber: 8
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Checkbox"], {
        name: "contactAbritel",
        inputRef: register,
        defaultValue: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443,
          columnNumber: 10
        }
      }),
      label: "Abritel",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 441,
        columnNumber: 8
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Checkbox"], {
        name: "contactLeboncoin",
        inputRef: register,
        defaultValue: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453,
          columnNumber: 10
        }
      }),
      label: "Leboncoin",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 451,
        columnNumber: 8
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Checkbox"], {
        name: "contactAutre",
        inputRef: register,
        defaultValue: false,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463,
          columnNumber: 10
        }
      }),
      label: "Autre",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 461,
        columnNumber: 8
      }
    })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_25__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 475,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TextField"], {
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
        lineNumber: 476,
        columnNumber: 6
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Switch"], {
        inputRef: register,
        defaultChecked: true,
        name: "litFait",
        color: "primary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488,
          columnNumber: 8
        }
      }),
      label: "Souhaitez-vous l'option lit fait \xE0 l'arriv\xE9e ?",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 486,
        columnNumber: 6
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["FormControlLabel"], {
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Switch"], {
        inputRef: register,
        defaultChecked: true,
        name: "newsletter",
        color: "primary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499,
          columnNumber: 8
        }
      }),
      label: "Souscrire \xE0 notre newsletter pour b\xE9n\xE9ficier de remises et offres promotionnelles ?",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 497,
        columnNumber: 6
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_25__["default"], {
      container: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 509,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 510,
        columnNumber: 6
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TextField"], {
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
        lineNumber: 511,
        columnNumber: 7
      }
    })))));
  };

  var Coord = function Coord() {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 528,
        columnNumber: 3
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 529,
        columnNumber: 4
      }
    }, "Vos coordonn\xE9es"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_25__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 531,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 532,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["InputLabel"], {
      shrink: true,
      id: "demo-simple-select-placeholder-label-label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 533,
        columnNumber: 6
      }
    }, "Civilit\xE9"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_20__["Controller"], {
      control: control,
      name: "civilite",
      as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Select"], {
        id: "civilite-select",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "M. & Mme",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543,
          columnNumber: 9
        }
      }, "M. & Mme"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "Mme",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544,
          columnNumber: 9
        }
      }, "Mme"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "Mlle",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 545,
          columnNumber: 9
        }
      }, "Mlle"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "M.",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546,
          columnNumber: 9
        }
      }, "M."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "Association",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547,
          columnNumber: 9
        }
      }, "Association"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "Comit\xE9 d'entreprise",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550,
          columnNumber: 9
        }
      }, "Comit\xE9 d'entreprise"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "Soci\xE9t\xE9",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553,
          columnNumber: 9
        }
      }, "Soci\xE9t\xE9"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "Entreprise",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 554,
          columnNumber: 9
        }
      }, "Entreprise"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "Foyer de vie",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 557,
          columnNumber: 9
        }
      }, "Foyer de vie"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "Foyer d'accueil",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560,
          columnNumber: 9
        }
      }, "Foyer d'accueil"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "Famille",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563,
          columnNumber: 9
        }
      }, "Famille"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "Autres",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564,
          columnNumber: 9
        }
      }, "Autres")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 538,
        columnNumber: 6
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TextField"], {
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
        lineNumber: 570,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TextField"], {
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
        lineNumber: 579,
        columnNumber: 5
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_25__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 589,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TextField"], {
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
        lineNumber: 590,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TextField"], {
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
        lineNumber: 599,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TextField"], {
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
        lineNumber: 608,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 617,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["InputLabel"], {
      shrink: true,
      id: "demo-simple-select-placeholder-label-label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 618,
        columnNumber: 6
      }
    }, "Pays"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_20__["Controller"], {
      control: control,
      name: "pays",
      as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Select"], {
        id: "pays-select",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 628,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "france",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 629,
          columnNumber: 9
        }
      }, "France"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 630,
          columnNumber: 9
        }
      }, "--------"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "autres",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 631,
          columnNumber: 9
        }
      }, "Autres"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "allemagne",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 632,
          columnNumber: 9
        }
      }, "Allemagne"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "angleterre",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 633,
          columnNumber: 9
        }
      }, "Angleterre"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "belgique",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 636,
          columnNumber: 9
        }
      }, "Belgique"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "hollande",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 637,
          columnNumber: 9
        }
      }, "Hollande"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "luxembourg",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 638,
          columnNumber: 9
        }
      }, "Luxembourg"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "suisse",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 641,
          columnNumber: 9
        }
      }, "Suisse")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 624,
        columnNumber: 6
      }
    }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_25__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 647,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TextField"], {
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
        lineNumber: 648,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TextField"], {
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
        lineNumber: 657,
        columnNumber: 5
      }
    })));
  };

  var recap = function recap() {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 670,
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
              Object(_actions_reservationActions__WEBPACK_IMPORTED_MODULE_28__["createReservation"])(data).then(function (result) {
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

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 713,
      columnNumber: 3
    }
  }, loading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["CircularProgress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 714,
      columnNumber: 16
    }
  }), __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 716,
      columnNumber: 4
    }
  }, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 717,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    alternativeLabel: true,
    activeStep: activeStep,
    connector: __jsx(ColorlibConnector, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 721,
        columnNumber: 18
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 718,
      columnNumber: 6
    }
  }, steps.map(function (label) {
    return __jsx(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 723,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_11__["default"], {
      StepIconComponent: ColorlibStepIcon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 724,
        columnNumber: 9
      }
    }, label));
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 730,
      columnNumber: 6
    }
  }, activeStep === steps.length ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 732,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.instructions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 734,
      columnNumber: 9
    }
  }, "Votre demande a bien \xE9t\xE9 prise en compte"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onClick: handleReset,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 737,
      columnNumber: 9
    }
  }, "Recommencer")) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 744,
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
  }, getStepContent(activeStep)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 748,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    disabled: activeStep === 0,
    onClick: handleBack,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 749,
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
      lineNumber: 756,
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
      lineNumber: 764,
      columnNumber: 11
    }
  }, "Suivant")))), __jsx(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_29__["default"], {
    sitekey: _config__WEBPACK_IMPORTED_MODULE_30__["RECAPTCHA_SECRET_KEY"],
    ref: reRef,
    size: "invisible" // onChange={onChange}
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 776,
      columnNumber: 6
    }
  }))));
};

_s3(ReservationForm, "zwtvsf+gYjBWl9WQnjjtcpfmy8w=", false, function () {
  return [useStyles, react_hook_form__WEBPACK_IMPORTED_MODULE_20__["useForm"]];
});

_c3 = ReservationForm;
/* harmony default export */ __webpack_exports__["default"] = (_c4 = Object(_HOC_Snackbar__WEBPACK_IMPORTED_MODULE_31__["withSnackbar"])(ReservationForm));

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXNlcnZhdGlvbi9SZXNlcnZhdGlvbkZvcm0uanMiXSwibmFtZXMiOlsiUW9udG9Db25uZWN0b3IiLCJ3aXRoU3R5bGVzIiwiYWx0ZXJuYXRpdmVMYWJlbCIsInRvcCIsImxlZnQiLCJyaWdodCIsImFjdGl2ZSIsImJvcmRlckNvbG9yIiwiY29tcGxldGVkIiwibGluZSIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwiU3RlcENvbm5lY3RvciIsInVzZVFvbnRvU3RlcEljb25TdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImNvbG9yIiwiZGlzcGxheSIsImhlaWdodCIsImFsaWduSXRlbXMiLCJjaXJjbGUiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsImZvbnRTaXplIiwiUW9udG9TdGVwSWNvbiIsInByb3BzIiwiY2xhc3NlcyIsImNsc3giLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiQ29sb3JsaWJDb25uZWN0b3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJib3JkZXIiLCJ1c2VDb2xvcmxpYlN0ZXBJY29uU3R5bGVzIiwianVzdGlmeUNvbnRlbnQiLCJib3hTaGFkb3ciLCJDb2xvcmxpYlN0ZXBJY29uIiwiaWNvbnMiLCJTdHJpbmciLCJpY29uIiwibm9kZSIsInVzZVN0eWxlcyIsInRoZW1lIiwiYnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwiaW5zdHJ1Y3Rpb25zIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiZm9ybUNvbnRyb2wiLCJtYXJnaW4iLCJtaW5XaWR0aCIsInNlbGVjdEVtcHR5IiwiZ2V0U3RlcHMiLCJSZXNlcnZhdGlvbkZvcm0iLCJzbmFja2JhclNob3dNZXNzYWdlIiwidXNlU3RhdGUiLCJhY3RpdmVTdGVwIiwic2V0QWN0aXZlU3RlcCIsInVzZUZvcm0iLCJyZVZhbGlkYXRlTW9kZSIsInNob3VsZFVucmVnaXN0ZXIiLCJkZWZhdWx0VmFsdWVzIiwiZ2l0ZSIsIm5iUGVycyIsIm5iRW5mIiwibmJDaGllbiIsImxpdEZhaXQiLCJuZXdzbGV0dGVyIiwibm9tIiwicHJlbm9tIiwiYWRyZXNzZSIsImNwIiwidmlsbGUiLCJ0ZWwiLCJtYWlsIiwiY29udHJvbCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlU2VsZWN0IiwicmFuZ2VzIiwiY29uc29sZSIsImxvZyIsImRhdGVBcnJpdmVlIiwic2V0RGF0ZUFycml2ZWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlUmVmIiwidXNlUmVmIiwic3RlcHMiLCJzZWxlY3RlZERhdGVBcnJpdmVlIiwic2V0U2VsZWN0ZWREYXRlQXJyaXZlZSIsImhhbmRsZURhdGVDaGFuZ2VBcnJpdmVlIiwiZGF0ZSIsInNldFNlbGVjdGVkRGF0ZURlcGFydCIsInNlbGVjdGVkRGF0ZURlcGFydCIsImhhbmRsZURhdGVDaGFuZ2VEZXBhcnQiLCJoYW5kbGVOZXh0IiwicHJldkFjdGl2ZVN0ZXAiLCJoYW5kbGVCYWNrIiwiaGFuZGxlUmVzZXQiLCJnaXRlcyIsInNldEdpdGVzIiwibGlzdERlc0dpdGVzIiwibGlzdEdpdGVzTm9tcyIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJ1c2VFZmZlY3QiLCJpbmZvTG9jIiwibWFwIiwiaSIsInNsdWciLCJzaHJpbmsiLCJzZWxlY3Rpb25SYW5nZSIsImluZm9Db21wIiwiQ29vcmQiLCJyZWNhcCIsImdldFN0ZXBDb250ZW50Iiwic3RlcCIsIm9uU3VibWl0IiwiY3VycmVudCIsImV4ZWN1dGVBc3luYyIsInRva2VuIiwicmVzZXQiLCJjcmVhdGVSZXNlcnZhdGlvbiIsInJlc3VsdCIsImRlamFSZXNlcnZlTWVzc2FnZSIsIm1lc3NhZ2UiLCJsYWJlbCIsImxlbmd0aCIsIlJFQ0FQVENIQV9TRUNSRVRfS0VZIiwid2l0aFNuYWNrYmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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TixDQUlDO0FBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNERCxDQURELENBSEQsQ0FERDtBQTBFQSxDQXZpQkQ7O0lBQU1qQyxlO1VBQ1diLFMsRUFFNEJrQix3RDs7O01BSHZDTCxlO0FBeWlCUyxxRUFBQThFLG1FQUFZLENBQUM5RSxlQUFELENBQTNCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jlc2VydmF0aW9uLmUwMGEyZjRiMTE3ZTRiOWU4NDY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0R2l0ZXNOb21zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFN0ZXBwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcHBlcic7XHJcbmltcG9ydCBTdGVwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXAnO1xyXG5pbXBvcnQgU3RlcExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBMYWJlbCc7XHJcbmltcG9ydCBDaGVjayBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2snO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZXR0aW5ncyc7XHJcbmltcG9ydCBTdGVwQ29ubmVjdG9yIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBDb25uZWN0b3InO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgSG91c2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ib3VzZSc7XHJcbmltcG9ydCBFbW9qaVBlb3BsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Vtb2ppUGVvcGxlJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgJ3JlYWN0LWRhdGUtcmFuZ2UvZGlzdC9zdHlsZXMuY3NzJzsgLy8gbWFpbiBzdHlsZSBmaWxlXHJcbmltcG9ydCAncmVhY3QtZGF0ZS1yYW5nZS9kaXN0L3RoZW1lL2RlZmF1bHQuY3NzJzsgLy8gdGhlbWUgY3NzIGZpbGVcclxuaW1wb3J0IHsgRGF0ZVJhbmdlUGlja2VyIH0gZnJvbSAncmVhY3QtZGF0ZS1yYW5nZSc7XHJcblxyXG5pbXBvcnQge1xyXG5cdENoZWNrYm94LFxyXG5cdENvbnRhaW5lcixcclxuXHRGb3JtQ29udHJvbCxcclxuXHRGb3JtQ29udHJvbExhYmVsLFxyXG5cdEZvcm1Hcm91cCxcclxuXHRGb3JtTGFiZWwsXHJcblx0SW5wdXRMYWJlbCxcclxuXHRNZW51SXRlbSxcclxuXHRTZWxlY3QsXHJcblx0U3dpdGNoLFxyXG5cdFRleHRGaWVsZCxcclxuXHRDaXJjdWxhclByb2dyZXNzLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBEYXRlRm5zVXRpbHMgZnJvbSAnQGRhdGUtaW8vZGF0ZS1mbnMnO1xyXG5pbXBvcnQge1xyXG5cdE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLFxyXG5cdEtleWJvYXJkRGF0ZVBpY2tlcixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvcGlja2Vycyc7XHJcbmltcG9ydCB7IGNyZWF0ZVJlc2VydmF0aW9uIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9yZXNlcnZhdGlvbkFjdGlvbnMnO1xyXG5pbXBvcnQgUmVDQVBUQ0hBIGZyb20gJ3JlYWN0LWdvb2dsZS1yZWNhcHRjaGEnO1xyXG5pbXBvcnQgeyBSRUNBUFRDSEFfU0VDUkVUX0tFWSB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7IHdpdGhTbmFja2JhciB9IGZyb20gJy4uL0hPQy9TbmFja2Jhcic7XHJcblxyXG5jb25zdCBRb250b0Nvbm5lY3RvciA9IHdpdGhTdHlsZXMoe1xyXG5cdGFsdGVybmF0aXZlTGFiZWw6IHtcclxuXHRcdHRvcDogMTAsXHJcblx0XHRsZWZ0OiAnY2FsYygtNTAlICsgMTZweCknLFxyXG5cdFx0cmlnaHQ6ICdjYWxjKDUwJSArIDE2cHgpJyxcclxuXHR9LFxyXG5cdGFjdGl2ZToge1xyXG5cdFx0JyYgJGxpbmUnOiB7XHJcblx0XHRcdGJvcmRlckNvbG9yOiAnIzc4NGFmNCcsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0Y29tcGxldGVkOiB7XHJcblx0XHQnJiAkbGluZSc6IHtcclxuXHRcdFx0Ym9yZGVyQ29sb3I6ICcjNzg0YWY0JyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRsaW5lOiB7XHJcblx0XHRib3JkZXJDb2xvcjogJyNlYWVhZjAnLFxyXG5cdFx0Ym9yZGVyVG9wV2lkdGg6IDMsXHJcblx0XHRib3JkZXJSYWRpdXM6IDEsXHJcblx0fSxcclxufSkoU3RlcENvbm5lY3Rvcik7XHJcblxyXG5jb25zdCB1c2VRb250b1N0ZXBJY29uU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcblx0cm9vdDoge1xyXG5cdFx0Y29sb3I6ICcjZWFlYWYwJyxcclxuXHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdGhlaWdodDogMjIsXHJcblx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuXHR9LFxyXG5cdGFjdGl2ZToge1xyXG5cdFx0Y29sb3I6ICcjNzg0YWY0JyxcclxuXHR9LFxyXG5cdGNpcmNsZToge1xyXG5cdFx0d2lkdGg6IDgsXHJcblx0XHRoZWlnaHQ6IDgsXHJcblx0XHRib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJyxcclxuXHR9LFxyXG5cdGNvbXBsZXRlZDoge1xyXG5cdFx0Y29sb3I6ICcjNzg0YWY0JyxcclxuXHRcdHpJbmRleDogMSxcclxuXHRcdGZvbnRTaXplOiAxOCxcclxuXHR9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIFFvbnRvU3RlcEljb24ocHJvcHMpIHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlUW9udG9TdGVwSWNvblN0eWxlcygpO1xyXG5cdGNvbnN0IHsgYWN0aXZlLCBjb21wbGV0ZWQgfSA9IHByb3BzO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCB7XHJcblx0XHRcdFx0W2NsYXNzZXMuYWN0aXZlXTogYWN0aXZlLFxyXG5cdFx0XHR9KX0+XHJcblx0XHRcdHtjb21wbGV0ZWQgPyAoXHJcblx0XHRcdFx0PENoZWNrIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb21wbGV0ZWR9IC8+XHJcblx0XHRcdCkgOiAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2lyY2xlfSAvPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuUW9udG9TdGVwSWNvbi5wcm9wVHlwZXMgPSB7XHJcblx0LyoqXHJcblx0ICogV2hldGhlciB0aGlzIHN0ZXAgaXMgYWN0aXZlLlxyXG5cdCAqL1xyXG5cdGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXHJcblx0LyoqXHJcblx0ICogTWFyayB0aGUgc3RlcCBhcyBjb21wbGV0ZWQuIElzIHBhc3NlZCB0byBjaGlsZCBjb21wb25lbnRzLlxyXG5cdCAqL1xyXG5cdGNvbXBsZXRlZDogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5jb25zdCBDb2xvcmxpYkNvbm5lY3RvciA9IHdpdGhTdHlsZXMoe1xyXG5cdGFsdGVybmF0aXZlTGFiZWw6IHtcclxuXHRcdHRvcDogMjIsXHJcblx0fSxcclxuXHRhY3RpdmU6IHtcclxuXHRcdCcmICRsaW5lJzoge1xyXG5cdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6XHJcblx0XHRcdFx0J2xpbmVhci1ncmFkaWVudCggOTVkZWcscmdiKDI0MiwxMTMsMzMpIDAlLHJnYigyMzMsNjQsODcpIDUwJSxyZ2IoMTM4LDM1LDEzNSkgMTAwJSknLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGNvbXBsZXRlZDoge1xyXG5cdFx0JyYgJGxpbmUnOiB7XHJcblx0XHRcdGJhY2tncm91bmRJbWFnZTpcclxuXHRcdFx0XHQnbGluZWFyLWdyYWRpZW50KCA5NWRlZyxyZ2IoMjQyLDExMywzMykgMCUscmdiKDIzMyw2NCw4NykgNTAlLHJnYigxMzgsMzUsMTM1KSAxMDAlKScsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0bGluZToge1xyXG5cdFx0aGVpZ2h0OiAzLFxyXG5cdFx0Ym9yZGVyOiAwLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnI2VhZWFmMCcsXHJcblx0XHRib3JkZXJSYWRpdXM6IDEsXHJcblx0fSxcclxufSkoU3RlcENvbm5lY3Rvcik7XHJcblxyXG5jb25zdCB1c2VDb2xvcmxpYlN0ZXBJY29uU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcblx0cm9vdDoge1xyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnI2NjYycsXHJcblx0XHR6SW5kZXg6IDEsXHJcblx0XHRjb2xvcjogJyNmZmYnLFxyXG5cdFx0d2lkdGg6IDUwLFxyXG5cdFx0aGVpZ2h0OiA1MCxcclxuXHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdGJvcmRlclJhZGl1czogJzUwJScsXHJcblx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuXHR9LFxyXG5cdGFjdGl2ZToge1xyXG5cdFx0YmFja2dyb3VuZEltYWdlOlxyXG5cdFx0XHQnbGluZWFyLWdyYWRpZW50KCAxMzZkZWcsIHJnYigyNDIsMTEzLDMzKSAwJSwgcmdiKDIzMyw2NCw4NykgNTAlLCByZ2IoMTM4LDM1LDEzNSkgMTAwJSknLFxyXG5cdFx0Ym94U2hhZG93OiAnMCA0cHggMTBweCAwIHJnYmEoMCwwLDAsLjI1KScsXHJcblx0fSxcclxuXHRjb21wbGV0ZWQ6IHtcclxuXHRcdGJhY2tncm91bmRJbWFnZTpcclxuXHRcdFx0J2xpbmVhci1ncmFkaWVudCggMTM2ZGVnLCByZ2IoMjQyLDExMywzMykgMCUsIHJnYigyMzMsNjQsODcpIDUwJSwgcmdiKDEzOCwzNSwxMzUpIDEwMCUpJyxcclxuXHR9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIENvbG9ybGliU3RlcEljb24ocHJvcHMpIHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlQ29sb3JsaWJTdGVwSWNvblN0eWxlcygpO1xyXG5cdGNvbnN0IHsgYWN0aXZlLCBjb21wbGV0ZWQgfSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCBpY29ucyA9IHtcclxuXHRcdDE6IDxIb3VzZUljb24gLz4sXHJcblx0XHQyOiA8U2V0dGluZ3NJY29uIC8+LFxyXG5cdFx0MzogPEVtb2ppUGVvcGxlSWNvbiAvPixcclxuXHRcdDQ6IDxDaGVja0NpcmNsZUljb24gLz4sXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwge1xyXG5cdFx0XHRcdFtjbGFzc2VzLmFjdGl2ZV06IGFjdGl2ZSxcclxuXHRcdFx0XHRbY2xhc3Nlcy5jb21wbGV0ZWRdOiBjb21wbGV0ZWQsXHJcblx0XHRcdH0pfT5cclxuXHRcdFx0e2ljb25zW1N0cmluZyhwcm9wcy5pY29uKV19XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5Db2xvcmxpYlN0ZXBJY29uLnByb3BUeXBlcyA9IHtcclxuXHQvKipcclxuXHQgKiBXaGV0aGVyIHRoaXMgc3RlcCBpcyBhY3RpdmUuXHJcblx0ICovXHJcblx0YWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcclxuXHQvKipcclxuXHQgKiBNYXJrIHRoZSBzdGVwIGFzIGNvbXBsZXRlZC4gSXMgcGFzc2VkIHRvIGNoaWxkIGNvbXBvbmVudHMuXHJcblx0ICovXHJcblx0Y29tcGxldGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuXHQvKipcclxuXHQgKiBUaGUgbGFiZWwgZGlzcGxheWVkIGluIHRoZSBzdGVwIGljb24uXHJcblx0ICovXHJcblx0aWNvbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRyb290OiB7XHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdH0sXHJcblx0YnV0dG9uOiB7XHJcblx0XHRtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuXHR9LFxyXG5cdGluc3RydWN0aW9uczoge1xyXG5cdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0bWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdH0sXHJcblx0Zm9ybUNvbnRyb2w6IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdG1pbldpZHRoOiAxMjAsXHJcblx0fSxcclxuXHRzZWxlY3RFbXB0eToge1xyXG5cdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIGdldFN0ZXBzKCkge1xyXG5cdHJldHVybiBbXHJcblx0XHQnSW5mb3JtYXRpb24gc3VyIGxhIGxvY2F0aW9uJyxcclxuXHRcdCdJbmZvcm1hdGlvbnMgY29tcGzDqW1lbnRhaXJlcycsXHJcblx0XHQnVm9zIGNvb3Jkb25uw6llcycsXHJcblx0XHQnUsOpY2FwaXR1bGF0aWYnLFxyXG5cdF07XHJcbn1cclxuXHJcbmNvbnN0IFJlc2VydmF0aW9uRm9ybSA9ICh7IHNuYWNrYmFyU2hvd01lc3NhZ2UgfSkgPT4ge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRjb25zdCBbYWN0aXZlU3RlcCwgc2V0QWN0aXZlU3RlcF0gPSB1c2VTdGF0ZSgwKTtcclxuXHRjb25zdCB7IGNvbnRyb2wsIHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm0oe1xyXG5cdFx0cmVWYWxpZGF0ZU1vZGU6ICdvbkNoYW5nZScsXHJcblx0XHRzaG91bGRVbnJlZ2lzdGVyOiBmYWxzZSxcclxuXHRcdGRlZmF1bHRWYWx1ZXM6IHtcclxuXHRcdFx0Z2l0ZTogJ21hbm9sYScsXHJcblx0XHRcdG5iUGVyczogMTAsXHJcblx0XHRcdG5iRW5mOiA1LFxyXG5cdFx0XHRuYkNoaWVuOiAxLFxyXG5cdFx0XHRsaXRGYWl0OiB0cnVlLFxyXG5cdFx0XHRuZXdzbGV0dGVyOiB0cnVlLFxyXG5cclxuXHRcdFx0bm9tOiAnTGFwaWVycmUnLFxyXG5cdFx0XHRwcmVub206ICdKb3NzaWMnLFxyXG5cdFx0XHRhZHJlc3NlOiAnMTggcnVlIHRlc3QnLFxyXG5cdFx0XHRjcDogJzUxMDAwJyxcclxuXHRcdFx0dmlsbGU6ICdtYVZpbGxlJyxcclxuXHRcdFx0dGVsOiAnMDYgMTUgNTUgNTUgNTUnLFxyXG5cdFx0XHRtYWlsOiAnam9zc2ljLmxhcGllcnJlQGdtYWlsLmNvbScsXHJcblx0XHR9LFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVTZWxlY3QgPSAocmFuZ2VzKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhyYW5nZXMpO1xyXG5cdFx0Ly8ge1xyXG5cdFx0Ly8gICBzZWxlY3Rpb246IHtcclxuXHRcdC8vICAgICBzdGFydERhdGU6IFtuYXRpdmUgRGF0ZSBPYmplY3RdLFxyXG5cdFx0Ly8gICAgIGVuZERhdGU6IFtuYXRpdmUgRGF0ZSBPYmplY3RdLFxyXG5cdFx0Ly8gICB9XHJcblx0XHQvLyB9XHJcblx0fTtcclxuXHJcblx0Ly8gY29uc3Qgc2VsZWN0aW9uUmFuZ2UgPSB7XHJcblx0Ly8gXHRzdGFydERhdGU6IG5ldyBEYXRlKCksXHJcblx0Ly8gXHRlbmREYXRlOiBuZXcgRGF0ZSgpLFxyXG5cdC8vIFx0a2V5OiAnc2VsZWN0aW9uJyxcclxuXHQvLyB9O1xyXG5cclxuXHRjb25zdCBbZGF0ZUFycml2ZWUsIHNldERhdGVBcnJpdmVlXSA9IHVzZVN0YXRlKCk7XHJcblxyXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Y29uc3QgcmVSZWYgPSB1c2VSZWYoKTtcclxuXHJcblx0Y29uc3Qgc3RlcHMgPSBnZXRTdGVwcygpO1xyXG5cclxuXHRjb25zdCBbc2VsZWN0ZWREYXRlQXJyaXZlZSwgc2V0U2VsZWN0ZWREYXRlQXJyaXZlZV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVEYXRlQ2hhbmdlQXJyaXZlZSA9IChkYXRlKSA9PiB7XHJcblx0XHRzZXRTZWxlY3RlZERhdGVBcnJpdmVlKGRhdGUpO1xyXG5cdFx0c2V0U2VsZWN0ZWREYXRlRGVwYXJ0KGRhdGUpO1xyXG5cdH07XHJcblx0Y29uc3QgW3NlbGVjdGVkRGF0ZURlcGFydCwgc2V0U2VsZWN0ZWREYXRlRGVwYXJ0XSA9IHVzZVN0YXRlKCk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZURhdGVDaGFuZ2VEZXBhcnQgPSAoZGF0ZSkgPT4ge1xyXG5cdFx0c2V0U2VsZWN0ZWREYXRlRGVwYXJ0KGRhdGUpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XHJcblx0XHRzZXRBY3RpdmVTdGVwKChwcmV2QWN0aXZlU3RlcCkgPT4gcHJldkFjdGl2ZVN0ZXAgKyAxKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVCYWNrID0gKCkgPT4ge1xyXG5cdFx0c2V0QWN0aXZlU3RlcCgocHJldkFjdGl2ZVN0ZXApID0+IHByZXZBY3RpdmVTdGVwIC0gMSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XHJcblx0XHRzZXRBY3RpdmVTdGVwKDApO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IFtnaXRlcywgc2V0R2l0ZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHRjb25zdCBsaXN0RGVzR2l0ZXMgPSAoKSA9PiB7XHJcblx0XHRsaXN0R2l0ZXNOb21zKCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRHaXRlcyguLi5naXRlcywgZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsaXN0RGVzR2l0ZXMoKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnN0IGluZm9Mb2MgPSAoKSA9PiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nJz5cclxuXHRcdFx0PGgyPkluZm9ybWF0aW9ucyBzdXIgbGEgbG9jYXRpb248L2gyPlxyXG5cclxuXHRcdFx0PEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J3NwYWNlLWFyb3VuZCc+XHJcblx0XHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHQ8SW5wdXRMYWJlbFxyXG5cdFx0XHRcdFx0XHRzaHJpbmtcclxuXHRcdFx0XHRcdFx0aWQ9J2RlbW8tc2ltcGxlLXNlbGVjdC1wbGFjZWhvbGRlci1sYWJlbC1sYWJlbCc+XHJcblx0XHRcdFx0XHRcdFLDqXNlcnZhdGlvbiBzdXIgbGUgZ8OudGUgOlxyXG5cdFx0XHRcdFx0PC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdFx0PENvbnRyb2xsZXJcclxuXHRcdFx0XHRcdFx0Y29udHJvbD17Y29udHJvbH1cclxuXHRcdFx0XHRcdFx0bmFtZT0nZ2l0ZSdcclxuXHRcdFx0XHRcdFx0YXM9e1xyXG5cdFx0XHRcdFx0XHRcdDxTZWxlY3QgaWQ9J2dpdGUtc2VsZWN0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdHtnaXRlcy5tYXAoKGdpdGUsIGkpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIGtleT17Z2l0ZS5zbHVnfSB2YWx1ZT17Z2l0ZS5zbHVnfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Z2l0ZS5ub219XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0XHQ8L1NlbGVjdD5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdG5hbWU9J25iUGVycydcclxuXHRcdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0XHRsYWJlbD0nTm9tYnJlIGRlIHBlcnNvbm5lcyB0b3RhbCdcclxuXHRcdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0bmFtZT0nbmJFbmYnXHJcblx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J0RvbnQgZW5mYW50cyBkZSBtb2lucyBkZSAxOCBhbnMnXHJcblx0XHRcdFx0XHR0eXBlPSdudW1iZXInXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDxEYXRlUmFuZ2VQaWNrZXJcclxuXHRcdFx0XHRyYW5nZXM9e1tzZWxlY3Rpb25SYW5nZV19XHJcblx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZVNlbGVjdH1cclxuXHRcdFx0Lz5cclxuXHJcblx0XHRcdHsvKiA8TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIgdXRpbHM9e0RhdGVGbnNVdGlsc30+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J3NwYWNlLWFyb3VuZCc+XHJcblx0XHRcdFx0XHQ8S2V5Ym9hcmREYXRlUGlja2VyXHJcblx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0bWFyZ2luPSdub3JtYWwnXHJcblx0XHRcdFx0XHRcdGlkPSdkYXRlLXBpY2tlci1kaWFsb2cnXHJcblx0XHRcdFx0XHRcdG5hbWU9J2RhdGVBcnJpdmVlJ1xyXG5cdFx0XHRcdFx0XHRsYWJlbD1cIkRhdGUgZCdhcnJpdsOpZVwiXHJcblx0XHRcdFx0XHRcdGZvcm1hdD0nTU0vZGQveXl5eSdcclxuXHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPScnXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtzZWxlY3RlZERhdGVBcnJpdmVlfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlRGF0ZUNoYW5nZUFycml2ZWV9XHJcblx0XHRcdFx0XHRcdEtleWJvYXJkQnV0dG9uUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6ICdjaGFuZ2UgZGF0ZScsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHRcdDxLZXlib2FyZERhdGVQaWNrZXJcclxuXHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRtYXJnaW49J25vcm1hbCdcclxuXHRcdFx0XHRcdFx0aWQ9J2RhdGUtcGlja2VyLWRpYWxvZydcclxuXHRcdFx0XHRcdFx0bmFtZT0nZGF0ZURlcGFydCdcclxuXHRcdFx0XHRcdFx0bGFiZWw9J0RhdGUgZGUgZMOpcGFydCdcclxuXHRcdFx0XHRcdFx0Zm9ybWF0PSdNTS9kZC95eXl5J1xyXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9JydcclxuXHRcdFx0XHRcdFx0dmFsdWU9e3NlbGVjdGVkRGF0ZURlcGFydH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZURhdGVDaGFuZ2VEZXBhcnR9XHJcblx0XHRcdFx0XHRcdEtleWJvYXJkQnV0dG9uUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6ICdjaGFuZ2UgZGF0ZScsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PC9NdWlQaWNrZXJzVXRpbHNQcm92aWRlcj4gKi99XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cdGNvbnN0IGluZm9Db21wID0gKCkgPT4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGgyPkluZm9ybWF0aW9ucyBzdXBwbMOpbWVudGFpcmVzPC9oMj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcblx0XHRcdFx0PEZvcm1Db250cm9sXHJcblx0XHRcdFx0XHRjb21wb25lbnQ9J2ZpZWxkc2V0J1xyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdDxGb3JtTGFiZWwgY29tcG9uZW50PSdsZWdlbmQnPlxyXG5cdFx0XHRcdFx0XHRNZXJjaSBkJ2luZGlxdWVyIHNpIHZvdXMgbm91cyBhdmV6IGTDqWphIGNvbnRhY3TDqSBwYXIgOlxyXG5cdFx0XHRcdFx0PC9Gb3JtTGFiZWw+XHJcblx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXIganVzdGlmeT0nc3BhY2UtYXJvdW5kJz5cclxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xMYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udHJvbD17XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxDaGVja2JveFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J2NvbnRhY3RNYWlsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2ZhbHNlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9J01haWwnXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xMYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udHJvbD17XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxDaGVja2JveFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J2NvbnRhY3RUZWwnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17ZmFsc2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD0nVMOpbMOpcGhvbmUnXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xMYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udHJvbD17XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxDaGVja2JveFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J2NvbnRhY3RBYnJpdGVsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2ZhbHNlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9J0Ficml0ZWwnXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xMYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udHJvbD17XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxDaGVja2JveFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J2NvbnRhY3RMZWJvbmNvaW4nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17ZmFsc2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD0nTGVib25jb2luJ1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sTGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRyb2w9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2hlY2tib3hcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdjb250YWN0QXV0cmUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17ZmFsc2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD0nQXV0cmUnXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XHJcblx0XHRcdFx0XHR7LyogPEZvcm1IZWxwZXJUZXh0PkJlIGNhcmVmdWw8L0Zvcm1IZWxwZXJUZXh0PiAqL31cclxuXHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdzcGFjZS1hcm91bmQnPlxyXG5cdFx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdG5hbWU9J25iQ2hpZW4nXHJcblx0XHRcdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0XHRcdGxhYmVsPSdOb21icmUgZGUgY2hpZW4gPyAoM+KCrC9qb3VyL2FuaW1hbCknXHJcblx0XHRcdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsXHJcblx0XHRcdFx0XHRcdGNvbnRyb2w9e1xyXG5cdFx0XHRcdFx0XHRcdDxTd2l0Y2hcclxuXHRcdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRDaGVja2VkXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPSdsaXRGYWl0J1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I9J3ByaW1hcnknXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRsYWJlbD1cIlNvdWhhaXRlei12b3VzIGwnb3B0aW9uIGxpdCBmYWl0IMOgIGwnYXJyaXbDqWUgP1wiXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PEZvcm1Db250cm9sTGFiZWxcclxuXHRcdFx0XHRcdFx0Y29udHJvbD17XHJcblx0XHRcdFx0XHRcdFx0PFN3aXRjaFxyXG5cdFx0XHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdENoZWNrZWRcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J25ld3NsZXR0ZXInXHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcj0ncHJpbWFyeSdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGxhYmVsPSdTb3VzY3JpcmUgw6Agbm90cmUgbmV3c2xldHRlciBwb3VyIGLDqW7DqWZpY2llciBkZSByZW1pc2VzIGV0IG9mZnJlcyBwcm9tb3Rpb25uZWxsZXMgPydcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lcj5cclxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdG5hbWU9J2luZm9Db21wbCdcclxuXHRcdFx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPSdJbmZvcm1hdGlvbnMgY29tcGzDqW1lbnRhaXJlcyAvIFF1ZXN0aW9ucyA6J1xyXG5cdFx0XHRcdFx0XHRcdG11bHRpbGluZVxyXG5cdFx0XHRcdFx0XHRcdHJvd3M9ezN9XHJcblx0XHRcdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblx0Y29uc3QgQ29vcmQgPSAoKSA9PiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8aDI+Vm9zIGNvb3Jkb25uw6llczwvaDI+XHJcblxyXG5cdFx0XHQ8R3JpZCBjb250YWluZXIganVzdGlmeT0nc3BhY2UtYXJvdW5kJz5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdDxJbnB1dExhYmVsXHJcblx0XHRcdFx0XHRcdHNocmlua1xyXG5cdFx0XHRcdFx0XHRpZD0nZGVtby1zaW1wbGUtc2VsZWN0LXBsYWNlaG9sZGVyLWxhYmVsLWxhYmVsJz5cclxuXHRcdFx0XHRcdFx0Q2l2aWxpdMOpXHJcblx0XHRcdFx0XHQ8L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0XHRuYW1lPSdjaXZpbGl0ZSdcclxuXHRcdFx0XHRcdFx0YXM9e1xyXG5cdFx0XHRcdFx0XHRcdDxTZWxlY3QgaWQ9J2NpdmlsaXRlLXNlbGVjdCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J00uICYgTW1lJz5NLiAmIE1tZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J01tZSc+TW1lPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nTWxsZSc+TWxsZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J00uJz5NLjwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J0Fzc29jaWF0aW9uJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0QXNzb2NpYXRpb25cclxuXHRcdFx0XHRcdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9XCJDb21pdMOpIGQnZW50cmVwcmlzZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRDb21pdMOpIGQnZW50cmVwcmlzZVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nU29jacOpdMOpJz5Tb2Npw6l0w6k8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdFbnRyZXByaXNlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0RW50cmVwcmlzZVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nRm95ZXIgZGUgdmllJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Rm95ZXIgZGUgdmllXHJcblx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPVwiRm95ZXIgZCdhY2N1ZWlsXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEZveWVyIGQnYWNjdWVpbFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nRmFtaWxsZSc+RmFtaWxsZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J0F1dHJlcyc+QXV0cmVzPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8L1NlbGVjdD5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSdub20nXHJcblx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J05vbSdcclxuXHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0bmFtZT0ncHJlbm9tJ1xyXG5cdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdGxhYmVsPSdQcsOpbm9tJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8R3JpZCBjb250YWluZXIganVzdGlmeT0nc3BhY2UtYXJvdW5kJz5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSdhZHJlc3NlJ1xyXG5cdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdGxhYmVsPSdBZHJlc3NlJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSdjcCdcclxuXHRcdFx0XHRcdGlkPSdzdGFuZGFyZC1udW1iZXInXHJcblx0XHRcdFx0XHRsYWJlbD0nQ29kZSBQb3N0YWwnXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdG5hbWU9J3ZpbGxlJ1xyXG5cdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdGxhYmVsPSdWaWxsZSdcclxuXHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHQ8SW5wdXRMYWJlbFxyXG5cdFx0XHRcdFx0XHRzaHJpbmtcclxuXHRcdFx0XHRcdFx0aWQ9J2RlbW8tc2ltcGxlLXNlbGVjdC1wbGFjZWhvbGRlci1sYWJlbC1sYWJlbCc+XHJcblx0XHRcdFx0XHRcdFBheXNcclxuXHRcdFx0XHRcdDwvSW5wdXRMYWJlbD5cclxuXHJcblx0XHRcdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0XHRuYW1lPSdwYXlzJ1xyXG5cdFx0XHRcdFx0XHRhcz17XHJcblx0XHRcdFx0XHRcdFx0PFNlbGVjdCBpZD0ncGF5cy1zZWxlY3QnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdmcmFuY2UnPkZyYW5jZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9Jyc+LS0tLS0tLS08L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdhdXRyZXMnPkF1dHJlczwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2FsbGVtYWduZSc+QWxsZW1hZ25lPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nYW5nbGV0ZXJyZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEFuZ2xldGVycmVcclxuXHRcdFx0XHRcdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2JlbGdpcXVlJz5CZWxnaXF1ZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2hvbGxhbmRlJz5Ib2xsYW5kZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2x1eGVtYm91cmcnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRMdXhlbWJvdXJnXHJcblx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdzdWlzc2UnPlN1aXNzZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PC9TZWxlY3Q+XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8R3JpZCBjb250YWluZXIganVzdGlmeT0nc3BhY2UtYXJvdW5kJz5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSd0ZWwnXHJcblx0XHRcdFx0XHRpZD0nc3RhbmRhcmQtbnVtYmVyJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J1TDqWzDqXBob25lJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSdtYWlsJ1xyXG5cdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLW51bWJlcidcclxuXHRcdFx0XHRcdGxhYmVsPSdFbWFpbCdcclxuXHRcdFx0XHRcdHR5cGU9J21haWwnXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cdGNvbnN0IHJlY2FwID0gKCkgPT4gPHA+SlNPTi5zdHJpbmdpZnkoKTwvcD47XHJcblxyXG5cdGZ1bmN0aW9uIGdldFN0ZXBDb250ZW50KHN0ZXApIHtcclxuXHRcdHN3aXRjaCAoc3RlcCkge1xyXG5cdFx0XHRjYXNlIDA6XHJcblx0XHRcdFx0cmV0dXJuIGluZm9Mb2MoKTtcclxuXHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdHJldHVybiBpbmZvQ29tcCgpO1xyXG5cdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0cmV0dXJuIENvb3JkKCk7XHJcblx0XHRcdGNhc2UgMzpcclxuXHRcdFx0XHRyZXR1cm4gcmVjYXAoKTtcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRyZXR1cm4gJ0VycmV1cic7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChkYXRhKSA9PiB7XHJcblx0XHRzZXRMb2FkaW5nKHRydWUpO1xyXG5cdFx0ZGF0YS50b2tlbiA9IGF3YWl0IHJlUmVmLmN1cnJlbnQuZXhlY3V0ZUFzeW5jKCk7XHJcblx0XHRyZVJlZi5jdXJyZW50LnJlc2V0KCk7XHJcblx0XHRjb25zb2xlLmxvZygnb25TdWJtaXQgZGF0YSA9PicsIGRhdGEpO1xyXG5cdFx0Y3JlYXRlUmVzZXJ2YXRpb24oZGF0YSkudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZXN1bHQgdmF1dCA9PicsIHJlc3VsdCk7XHJcblx0XHRcdGlmIChyZXN1bHQuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQuZXJyb3IpO1xyXG5cdFx0XHRcdHNuYWNrYmFyU2hvd01lc3NhZ2UoYCR7cmVzdWx0LmVycm9yfWApO1xyXG5cdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHJlc3VsdC5kZWphUmVzZXJ2ZU1lc3NhZ2UpIHtcclxuXHRcdFx0XHRzbmFja2JhclNob3dNZXNzYWdlKGAke3Jlc3VsdC5kZWphUmVzZXJ2ZU1lc3NhZ2V9YCk7XHJcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHRcdFx0c25hY2tiYXJTaG93TWVzc2FnZShgJHtyZXN1bHQubWVzc2FnZX1gLCAnc3VjY2VzcycpO1xyXG5cclxuXHRcdFx0XHQvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHQvLyBcdFJvdXRlci5wdXNoKCcvJyk7XHJcblx0XHRcdFx0Ly8gfSwgMzAwMCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHR7bG9hZGluZyAmJiA8Q2lyY3VsYXJQcm9ncmVzcyAvPn1cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG5cdFx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuXHRcdFx0XHRcdDxTdGVwcGVyXHJcblx0XHRcdFx0XHRcdGFsdGVybmF0aXZlTGFiZWxcclxuXHRcdFx0XHRcdFx0YWN0aXZlU3RlcD17YWN0aXZlU3RlcH1cclxuXHRcdFx0XHRcdFx0Y29ubmVjdG9yPXs8Q29sb3JsaWJDb25uZWN0b3IgLz59PlxyXG5cdFx0XHRcdFx0XHR7c3RlcHMubWFwKChsYWJlbCkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxTdGVwIGtleT17bGFiZWx9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFN0ZXBMYWJlbCBTdGVwSWNvbkNvbXBvbmVudD17Q29sb3JsaWJTdGVwSWNvbn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtsYWJlbH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvU3RlcExhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDwvU3RlcD5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8L1N0ZXBwZXI+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHR7YWN0aXZlU3RlcCA9PT0gc3RlcHMubGVuZ3RoID8gKFxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHR7LyogVm9pciBwb3V0IGFqb3V0ZXIgaXNTdWJtaXRlZCA9PT0gdHJ1ZSAqL31cclxuXHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnN0cnVjdGlvbnN9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRWb3RyZSBkZW1hbmRlIGEgYmllbiDDqXTDqSBwcmlzZSBlbiBjb21wdGVcclxuXHRcdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlUmVzZXR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRSZWNvbW1lbmNlclxyXG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnN0cnVjdGlvbnN9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Z2V0U3RlcENvbnRlbnQoYWN0aXZlU3RlcCl9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2FjdGl2ZVN0ZXAgPT09IDB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlQmFja31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRSZXRvdXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHthY3RpdmVTdGVwID09PSBzdGVwcy5sZW5ndGggLSAxID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3N1Ym1pdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yPSdwcmltYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRWYWxpZGVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD0nY29udGFpbmVkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I9J3ByaW1hcnknXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVOZXh0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTdWl2YW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PFJlQ0FQVENIQVxyXG5cdFx0XHRcdFx0XHRzaXRla2V5PXtSRUNBUFRDSEFfU0VDUkVUX0tFWX1cclxuXHRcdFx0XHRcdFx0cmVmPXtyZVJlZn1cclxuXHRcdFx0XHRcdFx0c2l6ZT0naW52aXNpYmxlJ1xyXG5cdFx0XHRcdFx0XHQvLyBvbkNoYW5nZT17b25DaGFuZ2V9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0NvbnRhaW5lcj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFNuYWNrYmFyKFJlc2VydmF0aW9uRm9ybSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=