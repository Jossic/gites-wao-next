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
      handleSubmit = _useForm.handleSubmit; // const handleChange = (e) => {
  // 	console.log(e);
  // 	setValue('dateDF', e);
  // };


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }]),
      state = _useState2[0],
      setState = _useState2[1];

  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    register('dateArrivee'); // custom register

    register('dateDepart'); // custom register
  }, [register]);

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
      id: "nbPers",
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
      id: "nbEnf",
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
    })), __jsx(react_date_range__WEBPACK_IMPORTED_MODULE_23__["DateRangePicker"] // onChange={handleChange}
    , {
      onChange: function onChange(item) {
        return setState([item.selection]);
      } // onChange={(item) => console.log('item', item)}
      ,
      showSelectionPreview: true,
      name: "dateDF",
      moveRangeOnFirstSelection: false // months={2}
      ,
      ranges: state,
      direction: "horizontal",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392,
        columnNumber: 4
      }
    }));
  };

  var infoComp = function infoComp() {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 439,
        columnNumber: 3
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 440,
        columnNumber: 4
      }
    }, "Informations suppl\xE9mentaires"), __jsx("div", {
      className: classes.root,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 441,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["FormControl"], {
      component: "fieldset",
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 442,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["FormLabel"], {
      component: "legend",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 445,
        columnNumber: 6
      }
    }, "Merci d'indiquer si vous nous avez d\xE9ja contact\xE9 par :"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["FormGroup"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 448,
        columnNumber: 6
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_25__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 449,
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
          lineNumber: 452,
          columnNumber: 10
        }
      }),
      label: "Mail",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 450,
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
          lineNumber: 462,
          columnNumber: 10
        }
      }),
      label: "T\xE9l\xE9phone",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 460,
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
          lineNumber: 472,
          columnNumber: 10
        }
      }),
      label: "Abritel",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 470,
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
          lineNumber: 482,
          columnNumber: 10
        }
      }),
      label: "Leboncoin",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 480,
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
          lineNumber: 492,
          columnNumber: 10
        }
      }),
      label: "Autre",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 490,
        columnNumber: 8
      }
    })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_25__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 504,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TextField"], {
      inputRef: register,
      name: "nbChien",
      id: "chien",
      label: "Nombre de chien ? (3\u20AC/jour/animal)",
      type: "number",
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 505,
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
          lineNumber: 517,
          columnNumber: 8
        }
      }),
      label: "Souhaitez-vous l'option lit fait \xE0 l'arriv\xE9e ?",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 515,
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
          lineNumber: 528,
          columnNumber: 8
        }
      }),
      label: "Souscrire \xE0 notre newsletter pour b\xE9n\xE9ficier de remises et offres promotionnelles ?",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 526,
        columnNumber: 6
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_25__["default"], {
      container: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 538,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 539,
        columnNumber: 6
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TextField"], {
      inputRef: register,
      name: "infoCompl",
      id: "infoCompl",
      label: "Informations compl\xE9mentaires / Questions :",
      multiline: true,
      rows: 3,
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 540,
        columnNumber: 7
      }
    })))));
  };

  var Coord = function Coord() {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 557,
        columnNumber: 3
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 558,
        columnNumber: 4
      }
    }, "Vos coordonn\xE9es"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_25__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 560,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 561,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["InputLabel"], {
      shrink: true,
      id: "demo-simple-select-placeholder-label-label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 562,
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
          lineNumber: 571,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "M. & Mme",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572,
          columnNumber: 9
        }
      }, "M. & Mme"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "Mme",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 573,
          columnNumber: 9
        }
      }, "Mme"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "Mlle",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 574,
          columnNumber: 9
        }
      }, "Mlle"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "M.",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 575,
          columnNumber: 9
        }
      }, "M."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "Association",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 576,
          columnNumber: 9
        }
      }, "Association"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "Comit\xE9 d'entreprise",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 579,
          columnNumber: 9
        }
      }, "Comit\xE9 d'entreprise"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "Soci\xE9t\xE9",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582,
          columnNumber: 9
        }
      }, "Soci\xE9t\xE9"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "Entreprise",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583,
          columnNumber: 9
        }
      }, "Entreprise"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "Foyer de vie",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 586,
          columnNumber: 9
        }
      }, "Foyer de vie"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "Foyer d'accueil",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 589,
          columnNumber: 9
        }
      }, "Foyer d'accueil"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "Famille",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 592,
          columnNumber: 9
        }
      }, "Famille"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "Autres",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 593,
          columnNumber: 9
        }
      }, "Autres")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 567,
        columnNumber: 6
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TextField"], {
      inputRef: register,
      name: "nom",
      id: "nom",
      label: "Nom",
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
      name: "prenom",
      id: "prenom",
      label: "Pr\xE9nom",
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 608,
        columnNumber: 5
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_25__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 618,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TextField"], {
      inputRef: register,
      name: "prenom",
      id: "prenom",
      label: "Adresse",
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 619,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TextField"], {
      inputRef: register,
      name: "cp",
      id: "cp",
      label: "Code Postal",
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 628,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TextField"], {
      inputRef: register,
      name: "ville",
      id: "ville",
      label: "Ville",
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 637,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 646,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["InputLabel"], {
      shrink: true,
      id: "demo-simple-select-placeholder-label-label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 647,
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
          lineNumber: 657,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "france",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 658,
          columnNumber: 9
        }
      }, "France"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 659,
          columnNumber: 9
        }
      }, "--------"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "autres",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 660,
          columnNumber: 9
        }
      }, "Autres"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "allemagne",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 661,
          columnNumber: 9
        }
      }, "Allemagne"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "angleterre",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 662,
          columnNumber: 9
        }
      }, "Angleterre"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "belgique",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 665,
          columnNumber: 9
        }
      }, "Belgique"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "hollande",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 666,
          columnNumber: 9
        }
      }, "Hollande"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "luxembourg",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 667,
          columnNumber: 9
        }
      }, "Luxembourg"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["MenuItem"], {
        value: "suisse",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 670,
          columnNumber: 9
        }
      }, "Suisse")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 653,
        columnNumber: 6
      }
    }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_25__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 676,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TextField"], {
      inputRef: register,
      name: "tel",
      id: "tel",
      label: "T\xE9l\xE9phone",
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 677,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["TextField"], {
      inputRef: register,
      name: "mail",
      id: "mail",
      label: "Email",
      type: "mail",
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 686,
        columnNumber: 5
      }
    })));
  };

  var recap = function recap() {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 699,
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
      lineNumber: 742,
      columnNumber: 3
    }
  }, loading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["CircularProgress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 743,
      columnNumber: 16
    }
  }), __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 745,
      columnNumber: 4
    }
  }, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 746,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    alternativeLabel: true,
    activeStep: activeStep,
    connector: __jsx(ColorlibConnector, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 750,
        columnNumber: 18
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 747,
      columnNumber: 6
    }
  }, steps.map(function (label) {
    return __jsx(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 752,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_11__["default"], {
      StepIconComponent: ColorlibStepIcon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 753,
        columnNumber: 9
      }
    }, label));
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 759,
      columnNumber: 6
    }
  }, activeStep === steps.length ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 761,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.instructions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 763,
      columnNumber: 9
    }
  }, "Votre demande a bien \xE9t\xE9 prise en compte"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onClick: handleReset,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 766,
      columnNumber: 9
    }
  }, "Recommencer")) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 773,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.instructions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 774,
      columnNumber: 9
    }
  }, getStepContent(activeStep)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 777,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    disabled: activeStep === 0,
    onClick: handleBack,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 778,
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
      lineNumber: 785,
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
      lineNumber: 793,
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
      lineNumber: 805,
      columnNumber: 6
    }
  }))));
};

_s3(ReservationForm, "jjEayU9QmuGyiMggD6SYn8UYCCo=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXNlcnZhdGlvbi9SZXNlcnZhdGlvbkZvcm0uanMiXSwibmFtZXMiOlsiUW9udG9Db25uZWN0b3IiLCJ3aXRoU3R5bGVzIiwiYWx0ZXJuYXRpdmVMYWJlbCIsInRvcCIsImxlZnQiLCJyaWdodCIsImFjdGl2ZSIsImJvcmRlckNvbG9yIiwiY29tcGxldGVkIiwibGluZSIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwiU3RlcENvbm5lY3RvciIsInVzZVFvbnRvU3RlcEljb25TdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImNvbG9yIiwiZGlzcGxheSIsImhlaWdodCIsImFsaWduSXRlbXMiLCJjaXJjbGUiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsImZvbnRTaXplIiwiUW9udG9TdGVwSWNvbiIsInByb3BzIiwiY2xhc3NlcyIsImNsc3giLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiQ29sb3JsaWJDb25uZWN0b3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJib3JkZXIiLCJ1c2VDb2xvcmxpYlN0ZXBJY29uU3R5bGVzIiwianVzdGlmeUNvbnRlbnQiLCJib3hTaGFkb3ciLCJDb2xvcmxpYlN0ZXBJY29uIiwiaWNvbnMiLCJTdHJpbmciLCJpY29uIiwibm9kZSIsInVzZVN0eWxlcyIsInRoZW1lIiwiYnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwiaW5zdHJ1Y3Rpb25zIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiZm9ybUNvbnRyb2wiLCJtYXJnaW4iLCJtaW5XaWR0aCIsInNlbGVjdEVtcHR5IiwiZ2V0U3RlcHMiLCJSZXNlcnZhdGlvbkZvcm0iLCJzbmFja2JhclNob3dNZXNzYWdlIiwidXNlU3RhdGUiLCJhY3RpdmVTdGVwIiwic2V0QWN0aXZlU3RlcCIsInVzZUZvcm0iLCJyZVZhbGlkYXRlTW9kZSIsInNob3VsZFVucmVnaXN0ZXIiLCJkZWZhdWx0VmFsdWVzIiwiZ2l0ZSIsIm5iUGVycyIsIm5iRW5mIiwibmJDaGllbiIsImxpdEZhaXQiLCJuZXdzbGV0dGVyIiwibm9tIiwicHJlbm9tIiwiYWRyZXNzZSIsImNwIiwidmlsbGUiLCJ0ZWwiLCJtYWlsIiwiY29udHJvbCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwic3RhcnREYXRlIiwiRGF0ZSIsImVuZERhdGUiLCJrZXkiLCJzdGF0ZSIsInNldFN0YXRlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJkYXRlQXJyaXZlZSIsInNldERhdGVBcnJpdmVlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZVJlZiIsInVzZVJlZiIsInN0ZXBzIiwic2VsZWN0ZWREYXRlQXJyaXZlZSIsInNldFNlbGVjdGVkRGF0ZUFycml2ZWUiLCJoYW5kbGVEYXRlQ2hhbmdlQXJyaXZlZSIsImRhdGUiLCJzZXRTZWxlY3RlZERhdGVEZXBhcnQiLCJzZWxlY3RlZERhdGVEZXBhcnQiLCJoYW5kbGVEYXRlQ2hhbmdlRGVwYXJ0IiwiaGFuZGxlTmV4dCIsInByZXZBY3RpdmVTdGVwIiwiaGFuZGxlQmFjayIsImhhbmRsZVJlc2V0IiwiZ2l0ZXMiLCJzZXRHaXRlcyIsImxpc3REZXNHaXRlcyIsImxpc3RHaXRlc05vbXMiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImluZm9Mb2MiLCJtYXAiLCJpIiwic2x1ZyIsInNocmluayIsIml0ZW0iLCJzZWxlY3Rpb24iLCJpbmZvQ29tcCIsIkNvb3JkIiwicmVjYXAiLCJnZXRTdGVwQ29udGVudCIsInN0ZXAiLCJvblN1Ym1pdCIsImN1cnJlbnQiLCJleGVjdXRlQXN5bmMiLCJ0b2tlbiIsInJlc2V0IiwiY3JlYXRlUmVzZXJ2YXRpb24iLCJyZXN1bHQiLCJkZWphUmVzZXJ2ZU1lc3NhZ2UiLCJtZXNzYWdlIiwibGFiZWwiLCJsZW5ndGgiLCJSRUNBUFRDSEFfU0VDUkVUX0tFWSIsIndpdGhTbmFja2JhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7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QUQ7QUFDQyxRQUFJLEVBQUMsUUFETjtBQUVDLFdBQU8sRUFBQyxXQUZUO0FBR0MsU0FBSyxFQUFDLFNBSFA7QUFJQyxhQUFTLEVBQUUvRyxPQUFPLENBQUNrQixNQUpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsR0FTQSxNQUFDLGlFQUFEO0FBQ0MsV0FBTyxFQUFDLFdBRFQ7QUFFQyxTQUFLLEVBQUMsU0FGUDtBQUdDLFdBQU8sRUFBRTBELFVBSFY7QUFJQyxhQUFTLEVBQUU1RSxPQUFPLENBQUNrQixNQUpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEJGLENBSkQsQ0FkRixDQWJELEVBMkRDLE1BQUMsK0RBQUQ7QUFDQyxXQUFPLEVBQUU4Riw2REFEVjtBQUVDLE9BQUcsRUFBRTlDLEtBRk47QUFHQyxRQUFJLEVBQUMsV0FITixDQUlDO0FBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNERCxDQURELENBSEQsQ0FERDtBQTBFQSxDQXJrQkQ7O0lBQU1yQyxlO1VBQ1diLFMsRUFFNEJrQix3RDs7O01BSHZDTCxlO0FBdWtCUyxxRUFBQW9GLG1FQUFZLENBQUNwRixlQUFELENBQTNCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jlc2VydmF0aW9uLjJjMzg4NmE0NWRiMWJmYzM5MWQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0R2l0ZXNOb21zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFN0ZXBwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcHBlcic7XHJcbmltcG9ydCBTdGVwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXAnO1xyXG5pbXBvcnQgU3RlcExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBMYWJlbCc7XHJcbmltcG9ydCBDaGVjayBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2snO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZXR0aW5ncyc7XHJcbmltcG9ydCBTdGVwQ29ubmVjdG9yIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBDb25uZWN0b3InO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgSG91c2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ib3VzZSc7XHJcbmltcG9ydCBFbW9qaVBlb3BsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Vtb2ppUGVvcGxlJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgJ3JlYWN0LWRhdGUtcmFuZ2UvZGlzdC9zdHlsZXMuY3NzJzsgLy8gbWFpbiBzdHlsZSBmaWxlXHJcbmltcG9ydCAncmVhY3QtZGF0ZS1yYW5nZS9kaXN0L3RoZW1lL2RlZmF1bHQuY3NzJzsgLy8gdGhlbWUgY3NzIGZpbGVcclxuaW1wb3J0IHsgRGF0ZVJhbmdlUGlja2VyIH0gZnJvbSAncmVhY3QtZGF0ZS1yYW5nZSc7XHJcbmltcG9ydCB7XHJcblx0Q2hlY2tib3gsXHJcblx0Q29udGFpbmVyLFxyXG5cdEZvcm1Db250cm9sLFxyXG5cdEZvcm1Db250cm9sTGFiZWwsXHJcblx0Rm9ybUdyb3VwLFxyXG5cdEZvcm1MYWJlbCxcclxuXHRJbnB1dExhYmVsLFxyXG5cdE1lbnVJdGVtLFxyXG5cdFNlbGVjdCxcclxuXHRTd2l0Y2gsXHJcblx0VGV4dEZpZWxkLFxyXG5cdENpcmN1bGFyUHJvZ3Jlc3MsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IERhdGVGbnNVdGlscyBmcm9tICdAZGF0ZS1pby9kYXRlLWZucyc7XHJcbmltcG9ydCB7XHJcblx0TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIsXHJcblx0S2V5Ym9hcmREYXRlUGlja2VyLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9waWNrZXJzJztcclxuaW1wb3J0IHsgY3JlYXRlUmVzZXJ2YXRpb24gfSBmcm9tICcuLi8uLi9hY3Rpb25zL3Jlc2VydmF0aW9uQWN0aW9ucyc7XHJcbmltcG9ydCBSZUNBUFRDSEEgZnJvbSAncmVhY3QtZ29vZ2xlLXJlY2FwdGNoYSc7XHJcbmltcG9ydCB7IFJFQ0FQVENIQV9TRUNSRVRfS0VZIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHsgd2l0aFNuYWNrYmFyIH0gZnJvbSAnLi4vSE9DL1NuYWNrYmFyJztcclxuXHJcbmNvbnN0IFFvbnRvQ29ubmVjdG9yID0gd2l0aFN0eWxlcyh7XHJcblx0YWx0ZXJuYXRpdmVMYWJlbDoge1xyXG5cdFx0dG9wOiAxMCxcclxuXHRcdGxlZnQ6ICdjYWxjKC01MCUgKyAxNnB4KScsXHJcblx0XHRyaWdodDogJ2NhbGMoNTAlICsgMTZweCknLFxyXG5cdH0sXHJcblx0YWN0aXZlOiB7XHJcblx0XHQnJiAkbGluZSc6IHtcclxuXHRcdFx0Ym9yZGVyQ29sb3I6ICcjNzg0YWY0JyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRjb21wbGV0ZWQ6IHtcclxuXHRcdCcmICRsaW5lJzoge1xyXG5cdFx0XHRib3JkZXJDb2xvcjogJyM3ODRhZjQnLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGxpbmU6IHtcclxuXHRcdGJvcmRlckNvbG9yOiAnI2VhZWFmMCcsXHJcblx0XHRib3JkZXJUb3BXaWR0aDogMyxcclxuXHRcdGJvcmRlclJhZGl1czogMSxcclxuXHR9LFxyXG59KShTdGVwQ29ubmVjdG9yKTtcclxuXHJcbmNvbnN0IHVzZVFvbnRvU3RlcEljb25TdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuXHRyb290OiB7XHJcblx0XHRjb2xvcjogJyNlYWVhZjAnLFxyXG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0aGVpZ2h0OiAyMixcclxuXHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cdH0sXHJcblx0YWN0aXZlOiB7XHJcblx0XHRjb2xvcjogJyM3ODRhZjQnLFxyXG5cdH0sXHJcblx0Y2lyY2xlOiB7XHJcblx0XHR3aWR0aDogOCxcclxuXHRcdGhlaWdodDogOCxcclxuXHRcdGJvcmRlclJhZGl1czogJzUwJScsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxyXG5cdH0sXHJcblx0Y29tcGxldGVkOiB7XHJcblx0XHRjb2xvcjogJyM3ODRhZjQnLFxyXG5cdFx0ekluZGV4OiAxLFxyXG5cdFx0Zm9udFNpemU6IDE4LFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gUW9udG9TdGVwSWNvbihwcm9wcykge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VRb250b1N0ZXBJY29uU3R5bGVzKCk7XHJcblx0Y29uc3QgeyBhY3RpdmUsIGNvbXBsZXRlZCB9ID0gcHJvcHM7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsIHtcclxuXHRcdFx0XHRbY2xhc3Nlcy5hY3RpdmVdOiBhY3RpdmUsXHJcblx0XHRcdH0pfT5cclxuXHRcdFx0e2NvbXBsZXRlZCA/IChcclxuXHRcdFx0XHQ8Q2hlY2sgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbXBsZXRlZH0gLz5cclxuXHRcdFx0KSA6IChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jaXJjbGV9IC8+XHJcblx0XHRcdCl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5Rb250b1N0ZXBJY29uLnByb3BUeXBlcyA9IHtcclxuXHQvKipcclxuXHQgKiBXaGV0aGVyIHRoaXMgc3RlcCBpcyBhY3RpdmUuXHJcblx0ICovXHJcblx0YWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcclxuXHQvKipcclxuXHQgKiBNYXJrIHRoZSBzdGVwIGFzIGNvbXBsZXRlZC4gSXMgcGFzc2VkIHRvIGNoaWxkIGNvbXBvbmVudHMuXHJcblx0ICovXHJcblx0Y29tcGxldGVkOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmNvbnN0IENvbG9ybGliQ29ubmVjdG9yID0gd2l0aFN0eWxlcyh7XHJcblx0YWx0ZXJuYXRpdmVMYWJlbDoge1xyXG5cdFx0dG9wOiAyMixcclxuXHR9LFxyXG5cdGFjdGl2ZToge1xyXG5cdFx0JyYgJGxpbmUnOiB7XHJcblx0XHRcdGJhY2tncm91bmRJbWFnZTpcclxuXHRcdFx0XHQnbGluZWFyLWdyYWRpZW50KCA5NWRlZyxyZ2IoMjQyLDExMywzMykgMCUscmdiKDIzMyw2NCw4NykgNTAlLHJnYigxMzgsMzUsMTM1KSAxMDAlKScsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0Y29tcGxldGVkOiB7XHJcblx0XHQnJiAkbGluZSc6IHtcclxuXHRcdFx0YmFja2dyb3VuZEltYWdlOlxyXG5cdFx0XHRcdCdsaW5lYXItZ3JhZGllbnQoIDk1ZGVnLHJnYigyNDIsMTEzLDMzKSAwJSxyZ2IoMjMzLDY0LDg3KSA1MCUscmdiKDEzOCwzNSwxMzUpIDEwMCUpJyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRsaW5lOiB7XHJcblx0XHRoZWlnaHQ6IDMsXHJcblx0XHRib3JkZXI6IDAsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjZWFlYWYwJyxcclxuXHRcdGJvcmRlclJhZGl1czogMSxcclxuXHR9LFxyXG59KShTdGVwQ29ubmVjdG9yKTtcclxuXHJcbmNvbnN0IHVzZUNvbG9ybGliU3RlcEljb25TdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuXHRyb290OiB7XHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjY2NjJyxcclxuXHRcdHpJbmRleDogMSxcclxuXHRcdGNvbG9yOiAnI2ZmZicsXHJcblx0XHR3aWR0aDogNTAsXHJcblx0XHRoZWlnaHQ6IDUwLFxyXG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAnNTAlJyxcclxuXHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuXHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cdH0sXHJcblx0YWN0aXZlOiB7XHJcblx0XHRiYWNrZ3JvdW5kSW1hZ2U6XHJcblx0XHRcdCdsaW5lYXItZ3JhZGllbnQoIDEzNmRlZywgcmdiKDI0MiwxMTMsMzMpIDAlLCByZ2IoMjMzLDY0LDg3KSA1MCUsIHJnYigxMzgsMzUsMTM1KSAxMDAlKScsXHJcblx0XHRib3hTaGFkb3c6ICcwIDRweCAxMHB4IDAgcmdiYSgwLDAsMCwuMjUpJyxcclxuXHR9LFxyXG5cdGNvbXBsZXRlZDoge1xyXG5cdFx0YmFja2dyb3VuZEltYWdlOlxyXG5cdFx0XHQnbGluZWFyLWdyYWRpZW50KCAxMzZkZWcsIHJnYigyNDIsMTEzLDMzKSAwJSwgcmdiKDIzMyw2NCw4NykgNTAlLCByZ2IoMTM4LDM1LDEzNSkgMTAwJSknLFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gQ29sb3JsaWJTdGVwSWNvbihwcm9wcykge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VDb2xvcmxpYlN0ZXBJY29uU3R5bGVzKCk7XHJcblx0Y29uc3QgeyBhY3RpdmUsIGNvbXBsZXRlZCB9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IGljb25zID0ge1xyXG5cdFx0MTogPEhvdXNlSWNvbiAvPixcclxuXHRcdDI6IDxTZXR0aW5nc0ljb24gLz4sXHJcblx0XHQzOiA8RW1vamlQZW9wbGVJY29uIC8+LFxyXG5cdFx0NDogPENoZWNrQ2lyY2xlSWNvbiAvPixcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCB7XHJcblx0XHRcdFx0W2NsYXNzZXMuYWN0aXZlXTogYWN0aXZlLFxyXG5cdFx0XHRcdFtjbGFzc2VzLmNvbXBsZXRlZF06IGNvbXBsZXRlZCxcclxuXHRcdFx0fSl9PlxyXG5cdFx0XHR7aWNvbnNbU3RyaW5nKHByb3BzLmljb24pXX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbkNvbG9ybGliU3RlcEljb24ucHJvcFR5cGVzID0ge1xyXG5cdC8qKlxyXG5cdCAqIFdoZXRoZXIgdGhpcyBzdGVwIGlzIGFjdGl2ZS5cclxuXHQgKi9cclxuXHRhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxyXG5cdC8qKlxyXG5cdCAqIE1hcmsgdGhlIHN0ZXAgYXMgY29tcGxldGVkLiBJcyBwYXNzZWQgdG8gY2hpbGQgY29tcG9uZW50cy5cclxuXHQgKi9cclxuXHRjb21wbGV0ZWQ6IFByb3BUeXBlcy5ib29sLFxyXG5cdC8qKlxyXG5cdCAqIFRoZSBsYWJlbCBkaXNwbGF5ZWQgaW4gdGhlIHN0ZXAgaWNvbi5cclxuXHQgKi9cclxuXHRpY29uOiBQcm9wVHlwZXMubm9kZSxcclxufTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0fSxcclxuXHRidXR0b246IHtcclxuXHRcdG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdH0sXHJcblx0aW5zdHJ1Y3Rpb25zOiB7XHJcblx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHRtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0fSxcclxuXHRmb3JtQ29udHJvbDoge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0bWluV2lkdGg6IDEyMCxcclxuXHR9LFxyXG5cdHNlbGVjdEVtcHR5OiB7XHJcblx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0fSxcclxufSkpO1xyXG5cclxuZnVuY3Rpb24gZ2V0U3RlcHMoKSB7XHJcblx0cmV0dXJuIFtcclxuXHRcdCdJbmZvcm1hdGlvbiBzdXIgbGEgbG9jYXRpb24nLFxyXG5cdFx0J0luZm9ybWF0aW9ucyBjb21wbMOpbWVudGFpcmVzJyxcclxuXHRcdCdWb3MgY29vcmRvbm7DqWVzJyxcclxuXHRcdCdSw6ljYXBpdHVsYXRpZicsXHJcblx0XTtcclxufVxyXG5cclxuY29uc3QgUmVzZXJ2YXRpb25Gb3JtID0gKHsgc25hY2tiYXJTaG93TWVzc2FnZSB9KSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IFthY3RpdmVTdGVwLCBzZXRBY3RpdmVTdGVwXSA9IHVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IHsgY29udHJvbCwgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybSh7XHJcblx0XHRyZVZhbGlkYXRlTW9kZTogJ29uQ2hhbmdlJyxcclxuXHRcdHNob3VsZFVucmVnaXN0ZXI6IGZhbHNlLFxyXG5cdFx0ZGVmYXVsdFZhbHVlczoge1xyXG5cdFx0XHRnaXRlOiAnbWFub2xhJyxcclxuXHRcdFx0bmJQZXJzOiAxMCxcclxuXHRcdFx0bmJFbmY6IDUsXHJcblx0XHRcdG5iQ2hpZW46IDEsXHJcblx0XHRcdGxpdEZhaXQ6IHRydWUsXHJcblx0XHRcdG5ld3NsZXR0ZXI6IHRydWUsXHJcblx0XHRcdG5vbTogJ0xhcGllcnJlJyxcclxuXHRcdFx0cHJlbm9tOiAnSm9zc2ljJyxcclxuXHRcdFx0YWRyZXNzZTogJzE4IHJ1ZSB0ZXN0JyxcclxuXHRcdFx0Y3A6ICc1MTAwMCcsXHJcblx0XHRcdHZpbGxlOiAnbWFWaWxsZScsXHJcblx0XHRcdHRlbDogJzA2IDE1IDU1IDU1IDU1JyxcclxuXHRcdFx0bWFpbDogJ2pvc3NpYy5sYXBpZXJyZUBnbWFpbC5jb20nLFxyXG5cdFx0fSxcclxuXHR9KTtcclxuXHJcblx0Ly8gY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuXHQvLyBcdGNvbnNvbGUubG9nKGUpO1xyXG5cdC8vIFx0c2V0VmFsdWUoJ2RhdGVERicsIGUpO1xyXG5cdC8vIH07XHJcblxyXG5cdGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoW1xyXG5cdFx0e1xyXG5cdFx0XHRzdGFydERhdGU6IG5ldyBEYXRlKCksXHJcblx0XHRcdGVuZERhdGU6IG5ldyBEYXRlKCksXHJcblx0XHRcdGtleTogJ3NlbGVjdGlvbicsXHJcblx0XHR9LFxyXG5cdF0pO1xyXG5cclxuXHRSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0cmVnaXN0ZXIoJ2RhdGVBcnJpdmVlJyk7IC8vIGN1c3RvbSByZWdpc3RlclxyXG5cdFx0cmVnaXN0ZXIoJ2RhdGVEZXBhcnQnKTsgLy8gY3VzdG9tIHJlZ2lzdGVyXHJcblx0fSwgW3JlZ2lzdGVyXSk7XHJcblxyXG5cdGNvbnN0IFtkYXRlQXJyaXZlZSwgc2V0RGF0ZUFycml2ZWVdID0gdXNlU3RhdGUoKTtcclxuXHJcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHRjb25zdCByZVJlZiA9IHVzZVJlZigpO1xyXG5cclxuXHRjb25zdCBzdGVwcyA9IGdldFN0ZXBzKCk7XHJcblxyXG5cdGNvbnN0IFtzZWxlY3RlZERhdGVBcnJpdmVlLCBzZXRTZWxlY3RlZERhdGVBcnJpdmVlXSA9IHVzZVN0YXRlKCk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZURhdGVDaGFuZ2VBcnJpdmVlID0gKGRhdGUpID0+IHtcclxuXHRcdHNldFNlbGVjdGVkRGF0ZUFycml2ZWUoZGF0ZSk7XHJcblx0XHRzZXRTZWxlY3RlZERhdGVEZXBhcnQoZGF0ZSk7XHJcblx0fTtcclxuXHRjb25zdCBbc2VsZWN0ZWREYXRlRGVwYXJ0LCBzZXRTZWxlY3RlZERhdGVEZXBhcnRdID0gdXNlU3RhdGUoKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlRGF0ZUNoYW5nZURlcGFydCA9IChkYXRlKSA9PiB7XHJcblx0XHRzZXRTZWxlY3RlZERhdGVEZXBhcnQoZGF0ZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcclxuXHRcdHNldEFjdGl2ZVN0ZXAoKHByZXZBY3RpdmVTdGVwKSA9PiBwcmV2QWN0aXZlU3RlcCArIDEpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUJhY2sgPSAoKSA9PiB7XHJcblx0XHRzZXRBY3RpdmVTdGVwKChwcmV2QWN0aXZlU3RlcCkgPT4gcHJldkFjdGl2ZVN0ZXAgLSAxKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcclxuXHRcdHNldEFjdGl2ZVN0ZXAoMCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgW2dpdGVzLCBzZXRHaXRlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdGNvbnN0IGxpc3REZXNHaXRlcyA9ICgpID0+IHtcclxuXHRcdGxpc3RHaXRlc05vbXMoKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldEdpdGVzKC4uLmdpdGVzLCBkYXRhKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxpc3REZXNHaXRlcygpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc3QgaW5mb0xvYyA9ICgpID0+IChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPScnPlxyXG5cdFx0XHQ8aDI+SW5mb3JtYXRpb25zIHN1ciBsYSBsb2NhdGlvbjwvaDI+XHJcblxyXG5cdFx0XHQ8R3JpZCBjb250YWluZXIganVzdGlmeT0nc3BhY2UtYXJvdW5kJz5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdDxJbnB1dExhYmVsXHJcblx0XHRcdFx0XHRcdHNocmlua1xyXG5cdFx0XHRcdFx0XHRpZD0nZGVtby1zaW1wbGUtc2VsZWN0LXBsYWNlaG9sZGVyLWxhYmVsLWxhYmVsJz5cclxuXHRcdFx0XHRcdFx0UsOpc2VydmF0aW9uIHN1ciBsZSBnw650ZSA6XHJcblx0XHRcdFx0XHQ8L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0XHRuYW1lPSdnaXRlJ1xyXG5cdFx0XHRcdFx0XHRhcz17XHJcblx0XHRcdFx0XHRcdFx0PFNlbGVjdCBpZD0nZ2l0ZS1zZWxlY3QnPlxyXG5cdFx0XHRcdFx0XHRcdFx0e2dpdGVzLm1hcCgoZ2l0ZSwgaSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0ga2V5PXtnaXRlLnNsdWd9IHZhbHVlPXtnaXRlLnNsdWd9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtnaXRlLm5vbX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdDwvU2VsZWN0PlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0bmFtZT0nbmJQZXJzJ1xyXG5cdFx0XHRcdFx0aWQ9J25iUGVycydcclxuXHRcdFx0XHRcdGxhYmVsPSdOb21icmUgZGUgcGVyc29ubmVzIHRvdGFsJ1xyXG5cdFx0XHRcdFx0dHlwZT0nbnVtYmVyJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSduYkVuZidcclxuXHRcdFx0XHRcdGlkPSduYkVuZidcclxuXHRcdFx0XHRcdGxhYmVsPSdEb250IGVuZmFudHMgZGUgbW9pbnMgZGUgMTggYW5zJ1xyXG5cdFx0XHRcdFx0dHlwZT0nbnVtYmVyJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0XHR7LyogXHJcblx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdDxJbnB1dExhYmVsXHJcblx0XHRcdFx0XHRzaHJpbmtcclxuXHRcdFx0XHRcdGlkPSdkZW1vLXNpbXBsZS1zZWxlY3QtcGxhY2Vob2xkZXItbGFiZWwtbGFiZWwnPlxyXG5cdFx0XHRcdFx0RGF0ZXMgZGUgc8Opam91dFxyXG5cdFx0XHRcdDwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdFx0Y29udHJvbD17Y29udHJvbH1cclxuXHRcdFx0XHRcdG5hbWU9J2RhdGVzJ1xyXG5cdFx0XHRcdFx0YXM9e1xyXG5cdFx0XHRcdFx0XHQ8RGF0ZVJhbmdlUGlja2VyXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhpdGVtKSA9PiBzZXRTdGF0ZShbaXRlbS5zZWxlY3Rpb25dKX1cclxuXHRcdFx0XHRcdFx0XHRzaG93U2VsZWN0aW9uUHJldmlldz17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0XHRtb3ZlUmFuZ2VPbkZpcnN0U2VsZWN0aW9uPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0XHQvLyBtb250aHM9ezJ9XHJcblx0XHRcdFx0XHRcdFx0cmFuZ2VzPXtzdGF0ZX1cclxuXHRcdFx0XHRcdFx0XHRkaXJlY3Rpb249J2hvcml6b250YWwnXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9Gb3JtQ29udHJvbD4gKi99XHJcblxyXG5cdFx0XHQ8RGF0ZVJhbmdlUGlja2VyXHJcblx0XHRcdFx0Ly8gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRvbkNoYW5nZT17KGl0ZW0pID0+IHNldFN0YXRlKFtpdGVtLnNlbGVjdGlvbl0pfVxyXG5cdFx0XHRcdC8vIG9uQ2hhbmdlPXsoaXRlbSkgPT4gY29uc29sZS5sb2coJ2l0ZW0nLCBpdGVtKX1cclxuXHRcdFx0XHRzaG93U2VsZWN0aW9uUHJldmlldz17dHJ1ZX1cclxuXHRcdFx0XHRuYW1lPSdkYXRlREYnXHJcblx0XHRcdFx0bW92ZVJhbmdlT25GaXJzdFNlbGVjdGlvbj17ZmFsc2V9XHJcblx0XHRcdFx0Ly8gbW9udGhzPXsyfVxyXG5cdFx0XHRcdHJhbmdlcz17c3RhdGV9XHJcblx0XHRcdFx0ZGlyZWN0aW9uPSdob3Jpem9udGFsJ1xyXG5cdFx0XHQvPlxyXG5cdFx0XHR7LyogPE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyIHV0aWxzPXtEYXRlRm5zVXRpbHN9PlxyXG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdzcGFjZS1hcm91bmQnPlxyXG5cdFx0XHRcdFx0PEtleWJvYXJkRGF0ZVBpY2tlclxyXG5cdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdG1hcmdpbj0nbm9ybWFsJ1xyXG5cdFx0XHRcdFx0XHRpZD0nZGF0ZS1waWNrZXItZGlhbG9nJ1xyXG5cdFx0XHRcdFx0XHRuYW1lPSdkYXRlQXJyaXZlZSdcclxuXHRcdFx0XHRcdFx0bGFiZWw9XCJEYXRlIGQnYXJyaXbDqWVcIlxyXG5cdFx0XHRcdFx0XHRmb3JtYXQ9J01NL2RkL3l5eXknXHJcblx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT0nJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17c2VsZWN0ZWREYXRlQXJyaXZlZX1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZURhdGVDaGFuZ2VBcnJpdmVlfVxyXG5cdFx0XHRcdFx0XHRLZXlib2FyZEJ1dHRvblByb3BzPXt7XHJcblx0XHRcdFx0XHRcdFx0J2FyaWEtbGFiZWwnOiAnY2hhbmdlIGRhdGUnLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0XHQ8S2V5Ym9hcmREYXRlUGlja2VyXHJcblx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0bWFyZ2luPSdub3JtYWwnXHJcblx0XHRcdFx0XHRcdGlkPSdkYXRlLXBpY2tlci1kaWFsb2cnXHJcblx0XHRcdFx0XHRcdG5hbWU9J2RhdGVEZXBhcnQnXHJcblx0XHRcdFx0XHRcdGxhYmVsPSdEYXRlIGRlIGTDqXBhcnQnXHJcblx0XHRcdFx0XHRcdGZvcm1hdD0nTU0vZGQveXl5eSdcclxuXHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPScnXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtzZWxlY3RlZERhdGVEZXBhcnR9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVEYXRlQ2hhbmdlRGVwYXJ0fVxyXG5cdFx0XHRcdFx0XHRLZXlib2FyZEJ1dHRvblByb3BzPXt7XHJcblx0XHRcdFx0XHRcdFx0J2FyaWEtbGFiZWwnOiAnY2hhbmdlIGRhdGUnLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDwvTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXI+ICovfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxuXHRjb25zdCBpbmZvQ29tcCA9ICgpID0+IChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxoMj5JbmZvcm1hdGlvbnMgc3VwcGzDqW1lbnRhaXJlczwvaDI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG5cdFx0XHRcdDxGb3JtQ29udHJvbFxyXG5cdFx0XHRcdFx0Y29tcG9uZW50PSdmaWVsZHNldCdcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHQ8Rm9ybUxhYmVsIGNvbXBvbmVudD0nbGVnZW5kJz5cclxuXHRcdFx0XHRcdFx0TWVyY2kgZCdpbmRpcXVlciBzaSB2b3VzIG5vdXMgYXZleiBkw6lqYSBjb250YWN0w6kgcGFyIDpcclxuXHRcdFx0XHRcdDwvRm9ybUxhYmVsPlxyXG5cdFx0XHRcdFx0PEZvcm1Hcm91cD5cclxuXHRcdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J3NwYWNlLWFyb3VuZCc+XHJcblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sTGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRyb2w9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2hlY2tib3hcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdjb250YWN0TWFpbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPSdNYWlsJ1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sTGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRyb2w9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2hlY2tib3hcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdjb250YWN0VGVsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2ZhbHNlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9J1TDqWzDqXBob25lJ1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sTGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRyb2w9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2hlY2tib3hcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdjb250YWN0QWJyaXRlbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPSdBYnJpdGVsJ1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sTGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRyb2w9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2hlY2tib3hcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdjb250YWN0TGVib25jb2luJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2ZhbHNlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9J0xlYm9uY29pbidcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250cm9sPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PENoZWNrYm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nY29udGFjdEF1dHJlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2ZhbHNlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9J0F1dHJlJ1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0ey8qIDxGb3JtSGVscGVyVGV4dD5CZSBjYXJlZnVsPC9Gb3JtSGVscGVyVGV4dD4gKi99XHJcblx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXIganVzdGlmeT0nc3BhY2UtYXJvdW5kJz5cclxuXHRcdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRuYW1lPSduYkNoaWVuJ1xyXG5cdFx0XHRcdFx0XHRpZD0nY2hpZW4nXHJcblx0XHRcdFx0XHRcdGxhYmVsPSdOb21icmUgZGUgY2hpZW4gPyAoM+KCrC9qb3VyL2FuaW1hbCknXHJcblx0XHRcdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsXHJcblx0XHRcdFx0XHRcdGNvbnRyb2w9e1xyXG5cdFx0XHRcdFx0XHRcdDxTd2l0Y2hcclxuXHRcdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRDaGVja2VkXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPSdsaXRGYWl0J1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I9J3ByaW1hcnknXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRsYWJlbD1cIlNvdWhhaXRlei12b3VzIGwnb3B0aW9uIGxpdCBmYWl0IMOgIGwnYXJyaXbDqWUgP1wiXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PEZvcm1Db250cm9sTGFiZWxcclxuXHRcdFx0XHRcdFx0Y29udHJvbD17XHJcblx0XHRcdFx0XHRcdFx0PFN3aXRjaFxyXG5cdFx0XHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdENoZWNrZWRcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J25ld3NsZXR0ZXInXHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcj0ncHJpbWFyeSdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGxhYmVsPSdTb3VzY3JpcmUgw6Agbm90cmUgbmV3c2xldHRlciBwb3VyIGLDqW7DqWZpY2llciBkZSByZW1pc2VzIGV0IG9mZnJlcyBwcm9tb3Rpb25uZWxsZXMgPydcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lcj5cclxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdG5hbWU9J2luZm9Db21wbCdcclxuXHRcdFx0XHRcdFx0XHRpZD0naW5mb0NvbXBsJ1xyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPSdJbmZvcm1hdGlvbnMgY29tcGzDqW1lbnRhaXJlcyAvIFF1ZXN0aW9ucyA6J1xyXG5cdFx0XHRcdFx0XHRcdG11bHRpbGluZVxyXG5cdFx0XHRcdFx0XHRcdHJvd3M9ezN9XHJcblx0XHRcdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblx0Y29uc3QgQ29vcmQgPSAoKSA9PiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8aDI+Vm9zIGNvb3Jkb25uw6llczwvaDI+XHJcblxyXG5cdFx0XHQ8R3JpZCBjb250YWluZXIganVzdGlmeT0nc3BhY2UtYXJvdW5kJz5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdDxJbnB1dExhYmVsXHJcblx0XHRcdFx0XHRcdHNocmlua1xyXG5cdFx0XHRcdFx0XHRpZD0nZGVtby1zaW1wbGUtc2VsZWN0LXBsYWNlaG9sZGVyLWxhYmVsLWxhYmVsJz5cclxuXHRcdFx0XHRcdFx0Q2l2aWxpdMOpXHJcblx0XHRcdFx0XHQ8L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0XHRuYW1lPSdjaXZpbGl0ZSdcclxuXHRcdFx0XHRcdFx0YXM9e1xyXG5cdFx0XHRcdFx0XHRcdDxTZWxlY3QgaWQ9J2NpdmlsaXRlLXNlbGVjdCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J00uICYgTW1lJz5NLiAmIE1tZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J01tZSc+TW1lPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nTWxsZSc+TWxsZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J00uJz5NLjwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J0Fzc29jaWF0aW9uJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0QXNzb2NpYXRpb25cclxuXHRcdFx0XHRcdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9XCJDb21pdMOpIGQnZW50cmVwcmlzZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRDb21pdMOpIGQnZW50cmVwcmlzZVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nU29jacOpdMOpJz5Tb2Npw6l0w6k8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdFbnRyZXByaXNlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0RW50cmVwcmlzZVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nRm95ZXIgZGUgdmllJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Rm95ZXIgZGUgdmllXHJcblx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPVwiRm95ZXIgZCdhY2N1ZWlsXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEZveWVyIGQnYWNjdWVpbFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nRmFtaWxsZSc+RmFtaWxsZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J0F1dHJlcyc+QXV0cmVzPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8L1NlbGVjdD5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSdub20nXHJcblx0XHRcdFx0XHRpZD0nbm9tJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J05vbSdcclxuXHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0bmFtZT0ncHJlbm9tJ1xyXG5cdFx0XHRcdFx0aWQ9J3ByZW5vbSdcclxuXHRcdFx0XHRcdGxhYmVsPSdQcsOpbm9tJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8R3JpZCBjb250YWluZXIganVzdGlmeT0nc3BhY2UtYXJvdW5kJz5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSdwcmVub20nXHJcblx0XHRcdFx0XHRpZD0ncHJlbm9tJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J0FkcmVzc2UnXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdG5hbWU9J2NwJ1xyXG5cdFx0XHRcdFx0aWQ9J2NwJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J0NvZGUgUG9zdGFsJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSd2aWxsZSdcclxuXHRcdFx0XHRcdGlkPSd2aWxsZSdcclxuXHRcdFx0XHRcdGxhYmVsPSdWaWxsZSdcclxuXHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHQ8SW5wdXRMYWJlbFxyXG5cdFx0XHRcdFx0XHRzaHJpbmtcclxuXHRcdFx0XHRcdFx0aWQ9J2RlbW8tc2ltcGxlLXNlbGVjdC1wbGFjZWhvbGRlci1sYWJlbC1sYWJlbCc+XHJcblx0XHRcdFx0XHRcdFBheXNcclxuXHRcdFx0XHRcdDwvSW5wdXRMYWJlbD5cclxuXHJcblx0XHRcdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0XHRuYW1lPSdwYXlzJ1xyXG5cdFx0XHRcdFx0XHRhcz17XHJcblx0XHRcdFx0XHRcdFx0PFNlbGVjdCBpZD0ncGF5cy1zZWxlY3QnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdmcmFuY2UnPkZyYW5jZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9Jyc+LS0tLS0tLS08L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdhdXRyZXMnPkF1dHJlczwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2FsbGVtYWduZSc+QWxsZW1hZ25lPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nYW5nbGV0ZXJyZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEFuZ2xldGVycmVcclxuXHRcdFx0XHRcdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2JlbGdpcXVlJz5CZWxnaXF1ZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2hvbGxhbmRlJz5Ib2xsYW5kZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2x1eGVtYm91cmcnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRMdXhlbWJvdXJnXHJcblx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdzdWlzc2UnPlN1aXNzZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PC9TZWxlY3Q+XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8R3JpZCBjb250YWluZXIganVzdGlmeT0nc3BhY2UtYXJvdW5kJz5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSd0ZWwnXHJcblx0XHRcdFx0XHRpZD0ndGVsJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J1TDqWzDqXBob25lJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSdtYWlsJ1xyXG5cdFx0XHRcdFx0aWQ9J21haWwnXHJcblx0XHRcdFx0XHRsYWJlbD0nRW1haWwnXHJcblx0XHRcdFx0XHR0eXBlPSdtYWlsJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxuXHRjb25zdCByZWNhcCA9ICgpID0+IDxwPkpTT04uc3RyaW5naWZ5KCk8L3A+O1xyXG5cclxuXHRmdW5jdGlvbiBnZXRTdGVwQ29udGVudChzdGVwKSB7XHJcblx0XHRzd2l0Y2ggKHN0ZXApIHtcclxuXHRcdFx0Y2FzZSAwOlxyXG5cdFx0XHRcdHJldHVybiBpbmZvTG9jKCk7XHJcblx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRyZXR1cm4gaW5mb0NvbXAoKTtcclxuXHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdHJldHVybiBDb29yZCgpO1xyXG5cdFx0XHRjYXNlIDM6XHJcblx0XHRcdFx0cmV0dXJuIHJlY2FwKCk7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0cmV0dXJuICdFcnJldXInO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG5cdFx0c2V0TG9hZGluZyh0cnVlKTtcclxuXHRcdGRhdGEudG9rZW4gPSBhd2FpdCByZVJlZi5jdXJyZW50LmV4ZWN1dGVBc3luYygpO1xyXG5cdFx0cmVSZWYuY3VycmVudC5yZXNldCgpO1xyXG5cdFx0Y29uc29sZS5sb2coJ29uU3VibWl0IGRhdGEgPT4nLCBkYXRhKTtcclxuXHRcdGNyZWF0ZVJlc2VydmF0aW9uKGRhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygncmVzdWx0IHZhdXQgPT4nLCByZXN1bHQpO1xyXG5cdFx0XHRpZiAocmVzdWx0LmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0LmVycm9yKTtcclxuXHRcdFx0XHRzbmFja2JhclNob3dNZXNzYWdlKGAke3Jlc3VsdC5lcnJvcn1gKTtcclxuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0fSBlbHNlIGlmIChyZXN1bHQuZGVqYVJlc2VydmVNZXNzYWdlKSB7XHJcblx0XHRcdFx0c25hY2tiYXJTaG93TWVzc2FnZShgJHtyZXN1bHQuZGVqYVJlc2VydmVNZXNzYWdlfWApO1xyXG5cdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xyXG5cdFx0XHRcdHNuYWNrYmFyU2hvd01lc3NhZ2UoYCR7cmVzdWx0Lm1lc3NhZ2V9YCwgJ3N1Y2Nlc3MnKTtcclxuXHJcblx0XHRcdFx0Ly8gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0Ly8gXHRSb3V0ZXIucHVzaCgnLycpO1xyXG5cdFx0XHRcdC8vIH0sIDMwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PENvbnRhaW5lcj5cclxuXHRcdFx0e2xvYWRpbmcgJiYgPENpcmN1bGFyUHJvZ3Jlc3MgLz59XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcblx0XHRcdFx0XHQ8U3RlcHBlclxyXG5cdFx0XHRcdFx0XHRhbHRlcm5hdGl2ZUxhYmVsXHJcblx0XHRcdFx0XHRcdGFjdGl2ZVN0ZXA9e2FjdGl2ZVN0ZXB9XHJcblx0XHRcdFx0XHRcdGNvbm5lY3Rvcj17PENvbG9ybGliQ29ubmVjdG9yIC8+fT5cclxuXHRcdFx0XHRcdFx0e3N0ZXBzLm1hcCgobGFiZWwpID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8U3RlcCBrZXk9e2xhYmVsfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxTdGVwTGFiZWwgU3RlcEljb25Db21wb25lbnQ9e0NvbG9ybGliU3RlcEljb259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7bGFiZWx9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1N0ZXBMYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8L1N0ZXA+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PC9TdGVwcGVyPlxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0e2FjdGl2ZVN0ZXAgPT09IHN0ZXBzLmxlbmd0aCA/IChcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0ey8qIFZvaXIgcG91dCBham91dGVyIGlzU3VibWl0ZWQgPT09IHRydWUgKi99XHJcblx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaW5zdHJ1Y3Rpb25zfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Vm90cmUgZGVtYW5kZSBhIGJpZW4gw6l0w6kgcHJpc2UgZW4gY29tcHRlXHJcblx0XHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZVJlc2V0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0UmVjb21tZW5jZXJcclxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaW5zdHJ1Y3Rpb25zfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2dldFN0ZXBDb250ZW50KGFjdGl2ZVN0ZXApfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXthY3RpdmVTdGVwID09PSAwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZUJhY2t9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0UmV0b3VyXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7YWN0aXZlU3RlcCA9PT0gc3RlcHMubGVuZ3RoIC0gMSA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdzdWJtaXQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdjb250YWluZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcj0ncHJpbWFyeSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0VmFsaWRlclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yPSdwcmltYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlTmV4dH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0U3VpdmFudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxSZUNBUFRDSEFcclxuXHRcdFx0XHRcdFx0c2l0ZWtleT17UkVDQVBUQ0hBX1NFQ1JFVF9LRVl9XHJcblx0XHRcdFx0XHRcdHJlZj17cmVSZWZ9XHJcblx0XHRcdFx0XHRcdHNpemU9J2ludmlzaWJsZSdcclxuXHRcdFx0XHRcdFx0Ly8gb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9Db250YWluZXI+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTbmFja2JhcihSZXNlcnZhdGlvbkZvcm0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9