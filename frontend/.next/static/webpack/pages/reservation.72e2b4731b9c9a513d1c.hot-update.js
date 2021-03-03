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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
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
/* harmony import */ var react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-date-range/dist/styles.css */ "./node_modules/react-date-range/dist/styles.css");
/* harmony import */ var react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-date-range/dist/theme/default.css */ "./node_modules/react-date-range/dist/theme/default.css");
/* harmony import */ var react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_date_range__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-date-range */ "./node_modules/react-date-range/dist/index.js");
/* harmony import */ var react_date_range__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_date_range__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var date_fns_locale_fr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! date-fns/locale/fr */ "./node_modules/date-fns/locale/fr/index.js");
/* harmony import */ var date_fns_locale_fr__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_fr__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _actions_reservationActions__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../actions/reservationActions */ "./actions/reservationActions.js");
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _HOC_Snackbar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../HOC/Snackbar */ "./components/HOC/Snackbar.js");




var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\reservation\\ReservationForm.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _this = undefined,
    _s4 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




























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
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.root, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, classes.active, active)),
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
    3: __jsx(_material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_16___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 6
      }
    }),
    4: __jsx(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_17___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 6
      }
    })
  };
  return __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.root, (_clsx2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_clsx2, classes.active, active), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_clsx2, classes.completed, completed), _clsx2)),
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
    } // calendrier: {
    // 	backgroundColor: 'gray',
    // },

  };
});

function getSteps() {
  return ['Information sur la location', 'Informations complémentaires', 'Vos coordonnées', 'Récapitulatif'];
}

var useMediaQuery = function useMediaQuery(width) {
  _s3();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      targetReached = _useState[0],
      setTargetReached = _useState[1];

  var updateTarget = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (e) {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var media = window.matchMedia("(max-width: ".concat(width, "px)"));
    media.addListener(updateTarget); // Check on mount (callback is not called until a change occurs)

    if (media.matches) {
      setTargetReached(true);
    }

    return function () {
      return media.removeListener(updateTarget);
    };
  }, []);
  return targetReached;
};

_s3(useMediaQuery, "3YJ+medpEEIXi9i+LP+brdzS5O0=");

var ReservationForm = function ReservationForm(_ref) {
  _s4();

  var snackbarShowMessage = _ref.snackbarShowMessage,
      gites = _ref.gites;
  var classes = useStyles();

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      activeStep = _useState2[0],
      setActiveStep = _useState2[1];

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_18__["useForm"])({
    reValidateMode: 'onChange',
    shouldUnregister: false,
    defaultValues: {
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
      handleSubmit = _useForm.handleSubmit,
      setValue = _useForm.setValue,
      getValues = _useForm.getValues;

  var isBreakpoint = useMediaQuery(768);
  var dateOptions = {
    locale: date_fns_locale_fr__WEBPACK_IMPORTED_MODULE_23___default.a
  };
  Object(date_fns__WEBPACK_IMPORTED_MODULE_22__["startOfWeek"])(new Date(), dateOptions); // const [locale, setLocale] = React.useState('fr');

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }]),
      state = _useState3[0],
      setState = _useState3[1];

  var handleChange = function handleChange(item) {
    setState([item.selection]);
    setValue('dateArrivee', dayjs__WEBPACK_IMPORTED_MODULE_24___default()(item.selection.startDate).format('MM/DD/YYYY'));
    setValue('dateDepart', dayjs__WEBPACK_IMPORTED_MODULE_24___default()(item.selection.endDate).format('MM/DD/YYYY'));
  };

  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    register('dateArrivee'); // custom register

    register('dateDepart'); // custom register
  }, [register]);

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var reRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var steps = getSteps();

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

  var infoLoc = function infoLoc() {
    return __jsx("div", {
      className: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 3
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 4
      }
    }, "Informations sur la location"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["InputLabel"], {
      shrink: true,
      id: "demo-simple-select-placeholder-label-label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 6
      }
    }, "R\xE9servation sur le g\xEEte :"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_18__["Controller"], {
      control: control,
      name: "gite",
      as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Select"], {
        id: "gite-select",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 8
        }
      }, gites.map(function (gite, i) {
        return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
          key: gite.slug,
          value: gite.slug,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 350,
            columnNumber: 10
          }
        }, gite.nom);
      })),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 6
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TextField"], {
      inputRef: register({
        required: 'Le nombre de personnes est obligatoire'
      }),
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
        lineNumber: 358,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TextField"], {
      inputRef: register({
        required: "Le nombre d'enfants est obligatoire"
      }),
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
        lineNumber: 370,
        columnNumber: 5
      }
    })), isBreakpoint ? __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      container: true,
      direction: "row",
      justify: "center",
      alignItems: "center",
      style: {
        paddingTop: '20px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 385,
        columnNumber: 5
      }
    }, __jsx(react_date_range__WEBPACK_IMPORTED_MODULE_21__["DateRange"], {
      className: classes.calendrier,
      onChange: function onChange(item) {
        return handleChange(item);
      } // onChange={(item) => setState([item.selection])}
      ,
      showSelectionPreview: true,
      name: "dateDF",
      moveRangeOnFirstSelection: false,
      months: 1,
      locale: date_fns_locale_fr__WEBPACK_IMPORTED_MODULE_23___default.a,
      ranges: state,
      direction: "horizontal",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391,
        columnNumber: 6
      }
    })) : __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      container: true,
      direction: "row",
      justify: "center",
      alignItems: "center",
      style: {
        paddingTop: '20px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405,
        columnNumber: 5
      }
    }, __jsx(react_date_range__WEBPACK_IMPORTED_MODULE_21__["DateRange"], {
      className: classes.calendrier,
      onChange: function onChange(item) {
        return handleChange(item);
      } // onChange={(item) => setState([item.selection])}
      ,
      showSelectionPreview: true,
      name: "dateDF",
      moveRangeOnFirstSelection: false,
      months: 2,
      locale: date_fns_locale_fr__WEBPACK_IMPORTED_MODULE_23___default.a,
      ranges: state,
      direction: "horizontal",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411,
        columnNumber: 6
      }
    })));
  };

  var infoComp = function infoComp() {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 428,
        columnNumber: 3
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 429,
        columnNumber: 4
      }
    }, "Informations suppl\xE9mentaires"), __jsx("div", {
      className: classes.root,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["FormControl"], {
      component: "fieldset",
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 431,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["FormLabel"], {
      component: "legend",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 434,
        columnNumber: 6
      }
    }, "Merci d'indiquer si vous nous avez d\xE9ja contact\xE9 par :"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["FormGroup"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 437,
        columnNumber: 6
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 438,
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
          lineNumber: 441,
          columnNumber: 10
        }
      }),
      label: "Mail",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 439,
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
          lineNumber: 451,
          columnNumber: 10
        }
      }),
      label: "T\xE9l\xE9phone",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 449,
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
          lineNumber: 461,
          columnNumber: 10
        }
      }),
      label: "Abritel",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 459,
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
          lineNumber: 471,
          columnNumber: 10
        }
      }),
      label: "Leboncoin",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 469,
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
          lineNumber: 481,
          columnNumber: 10
        }
      }),
      label: "Autre",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 479,
        columnNumber: 8
      }
    })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 493,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TextField"], {
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
        lineNumber: 494,
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
          lineNumber: 506,
          columnNumber: 8
        }
      }),
      label: "Souhaitez-vous l'option lit fait \xE0 l'arriv\xE9e ?",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 504,
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
          lineNumber: 517,
          columnNumber: 8
        }
      }),
      label: "Souscrire \xE0 notre newsletter pour b\xE9n\xE9ficier de remises et offres promotionnelles ?",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 515,
        columnNumber: 6
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      container: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 527,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 528,
        columnNumber: 6
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TextField"], {
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
        lineNumber: 529,
        columnNumber: 7
      }
    })))));
  };

  var Coord = function Coord() {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 546,
        columnNumber: 3
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 547,
        columnNumber: 4
      }
    }, "Vos coordonn\xE9es"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 549,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 550,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["InputLabel"], {
      shrink: true,
      id: "demo-simple-select-placeholder-label-label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 551,
        columnNumber: 6
      }
    }, "Civilit\xE9"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_18__["Controller"], {
      control: control,
      name: "civilite",
      as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Select"], {
        id: "civilite-select",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "M. & Mme",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561,
          columnNumber: 9
        }
      }, "M. & Mme"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "Mme",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562,
          columnNumber: 9
        }
      }, "Mme"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "Mlle",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563,
          columnNumber: 9
        }
      }, "Mlle"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "M.",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564,
          columnNumber: 9
        }
      }, "M."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "Association",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565,
          columnNumber: 9
        }
      }, "Association"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "Comit\xE9 d'entreprise",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 568,
          columnNumber: 9
        }
      }, "Comit\xE9 d'entreprise"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "Soci\xE9t\xE9",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571,
          columnNumber: 9
        }
      }, "Soci\xE9t\xE9"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "Entreprise",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572,
          columnNumber: 9
        }
      }, "Entreprise"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "Foyer de vie",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 575,
          columnNumber: 9
        }
      }, "Foyer de vie"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "Foyer d'accueil",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578,
          columnNumber: 9
        }
      }, "Foyer d'accueil"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "Famille",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 581,
          columnNumber: 9
        }
      }, "Famille"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "Autres",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582,
          columnNumber: 9
        }
      }, "Autres")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 556,
        columnNumber: 6
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TextField"], {
      inputRef: register({
        required: 'Le nom est obligatoire'
      }),
      name: "nom",
      id: "nom",
      label: "Nom",
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 588,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TextField"], {
      inputRef: register({
        required: 'Le prénom est obligatoire'
      }),
      name: "prenom",
      id: "prenom",
      label: "Pr\xE9nom",
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 597,
        columnNumber: 5
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 609,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TextField"], {
      inputRef: register({
        required: "L'adresse est obligatoire"
      }),
      name: "adresse",
      id: "adresse",
      label: "Adresse",
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
      inputRef: register({
        required: 'Le code postal est obligatoire'
      }),
      name: "cp",
      id: "cp",
      label: "Code Postal",
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 621,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TextField"], {
      inputRef: register({
        required: 'La ville est obligatoire'
      }),
      name: "ville",
      id: "ville",
      label: "Ville",
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 632,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 643,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["InputLabel"], {
      shrink: true,
      id: "demo-simple-select-placeholder-label-label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 644,
        columnNumber: 6
      }
    }, "Pays"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_18__["Controller"], {
      control: control,
      name: "pays",
      as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Select"], {
        id: "pays-select",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 654,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "france",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 655,
          columnNumber: 9
        }
      }, "France"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 656,
          columnNumber: 9
        }
      }, "--------"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "autres",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 657,
          columnNumber: 9
        }
      }, "Autres"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "allemagne",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 658,
          columnNumber: 9
        }
      }, "Allemagne"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "angleterre",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 659,
          columnNumber: 9
        }
      }, "Angleterre"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "belgique",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 662,
          columnNumber: 9
        }
      }, "Belgique"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "hollande",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 663,
          columnNumber: 9
        }
      }, "Hollande"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "luxembourg",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 664,
          columnNumber: 9
        }
      }, "Luxembourg"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "suisse",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 667,
          columnNumber: 9
        }
      }, "Suisse")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 650,
        columnNumber: 6
      }
    }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 673,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TextField"], {
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
        lineNumber: 674,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TextField"], {
      inputRef: register({
        required: 'Le mail est obligatoire'
      }),
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
        lineNumber: 683,
        columnNumber: 5
      }
    })));
  };

  var recap = function recap() {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 697,
        columnNumber: 3
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 699,
        columnNumber: 4
      }
    }, "R\xE9capitulatif de la location"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      container: true,
      direction: "row",
      justify: "space-evenly",
      alignItems: "flex-start",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 700,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      item: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 705,
        columnNumber: 5
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 706,
        columnNumber: 6
      }
    }, "Location :"), __jsx("ul", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 707,
        columnNumber: 6
      }
    }, __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 708,
        columnNumber: 7
      }
    }, "Le gite : ", getValues().gite), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 709,
        columnNumber: 7
      }
    }, "Du", ' ', dayjs__WEBPACK_IMPORTED_MODULE_24___default()(getValues().dateArrivee).format('DD/MM/YYYY'), ' ', "au", ' ', dayjs__WEBPACK_IMPORTED_MODULE_24___default()(getValues().dateDepart).format('DD/MM/YYYY')), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 717,
        columnNumber: 7
      }
    }, "Pour ", getValues().nbPers, " personnes dont", ' ', getValues().nbEnf, " enfant(s) ainsi que", ' ', getValues().nbChien, " animaux"), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 722,
        columnNumber: 7
      }
    }, "Options :", ' ', getValues().litFait && 'Lits fait : Oui,', ' ', getValues().newsletter && 'Newsletter : Oui'))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      item: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 729,
        columnNumber: 5
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 730,
        columnNumber: 6
      }
    }, "Vos informations :"), __jsx("ul", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 731,
        columnNumber: 6
      }
    }, __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 732,
        columnNumber: 7
      }
    }, getValues().civilite, " ", getValues().nom, ' ', getValues().prenom), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 736,
        columnNumber: 7
      }
    }, getValues().adresse, " ", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 737,
        columnNumber: 30
      }
    }), getValues().cp, " ", getValues().ville, ",", ' ', getValues().pays), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 741,
        columnNumber: 7
      }
    }, "T\xE9l\xE9phone : ", getValues().tel, " ", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 742,
        columnNumber: 38
      }
    }), "Mail : ", getValues().mail)))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      container: true,
      direction: "column",
      justify: "flex-start",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 748,
        columnNumber: 4
      }
    }, console.log(getValues().infoCompl), getValues().infoCompl !== '' && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 756,
        columnNumber: 7
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 757,
        columnNumber: 8
      }
    }, "Votre message :"), ' '), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 759,
        columnNumber: 7
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 760,
        columnNumber: 8
      }
    }, getValues().infoCompl)))));
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

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 809,
      columnNumber: 3
    }
  }, loading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["CircularProgress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 810,
      columnNumber: 16
    }
  }), __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 812,
      columnNumber: 4
    }
  }, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 813,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_7__["default"], {
    alternativeLabel: true,
    activeStep: activeStep,
    connector: __jsx(ColorlibConnector, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 817,
        columnNumber: 18
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 814,
      columnNumber: 6
    }
  }, steps.map(function (label) {
    return __jsx(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 819,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
      StepIconComponent: ColorlibStepIcon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 820,
        columnNumber: 9
      }
    }, label));
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 826,
      columnNumber: 6
    }
  }, activeStep + 1 === steps.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.instructions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 830,
      columnNumber: 9
    }
  }, recap()), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    disabled: activeStep === 0,
    onClick: handleBack,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 833,
      columnNumber: 9
    }
  }, "Retour"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    type: "submit",
    variant: "contained",
    color: "primary",
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 839,
      columnNumber: 9
    }
  }, "Valider")) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 848,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.instructions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 849,
      columnNumber: 9
    }
  }, getStepContent(activeStep)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 852,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    disabled: activeStep === 0,
    onClick: handleBack,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 853,
      columnNumber: 10
    }
  }, "Retour"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "contained",
    color: "primary",
    onClick: handleNext,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 859,
      columnNumber: 10
    }
  }, "Suivant")))), __jsx(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_28__["default"], {
    sitekey: _config__WEBPACK_IMPORTED_MODULE_29__["RECAPTCHA_SECRET_KEY"],
    ref: reRef,
    size: "invisible" // onChange={onChange}
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 870,
      columnNumber: 6
    }
  }))));
};

_s4(ReservationForm, "hfK4xbdDFXTLr3PIXCHsb3X6xwI=", false, function () {
  return [useStyles, react_hook_form__WEBPACK_IMPORTED_MODULE_18__["useForm"], useMediaQuery];
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXNlcnZhdGlvbi9SZXNlcnZhdGlvbkZvcm0uanMiXSwibmFtZXMiOlsiUW9udG9Db25uZWN0b3IiLCJ3aXRoU3R5bGVzIiwiYWx0ZXJuYXRpdmVMYWJlbCIsInRvcCIsImxlZnQiLCJyaWdodCIsImFjdGl2ZSIsImJvcmRlckNvbG9yIiwiY29tcGxldGVkIiwibGluZSIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwiU3RlcENvbm5lY3RvciIsInVzZVFvbnRvU3RlcEljb25TdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImNvbG9yIiwiZGlzcGxheSIsImhlaWdodCIsImFsaWduSXRlbXMiLCJjaXJjbGUiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsImZvbnRTaXplIiwiUW9udG9TdGVwSWNvbiIsInByb3BzIiwiY2xhc3NlcyIsImNsc3giLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiQ29sb3JsaWJDb25uZWN0b3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJib3JkZXIiLCJ1c2VDb2xvcmxpYlN0ZXBJY29uU3R5bGVzIiwianVzdGlmeUNvbnRlbnQiLCJib3hTaGFkb3ciLCJDb2xvcmxpYlN0ZXBJY29uIiwiaWNvbnMiLCJTdHJpbmciLCJpY29uIiwibm9kZSIsInVzZVN0eWxlcyIsInRoZW1lIiwiYnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwiaW5zdHJ1Y3Rpb25zIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiZm9ybUNvbnRyb2wiLCJtYXJnaW4iLCJtaW5XaWR0aCIsInNlbGVjdEVtcHR5IiwiZ2V0U3RlcHMiLCJ1c2VNZWRpYVF1ZXJ5IiwidXNlU3RhdGUiLCJ0YXJnZXRSZWFjaGVkIiwic2V0VGFyZ2V0UmVhY2hlZCIsInVwZGF0ZVRhcmdldCIsInVzZUNhbGxiYWNrIiwiZSIsIm1hdGNoZXMiLCJ1c2VFZmZlY3QiLCJtZWRpYSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJhZGRMaXN0ZW5lciIsInJlbW92ZUxpc3RlbmVyIiwiUmVzZXJ2YXRpb25Gb3JtIiwic25hY2tiYXJTaG93TWVzc2FnZSIsImdpdGVzIiwiYWN0aXZlU3RlcCIsInNldEFjdGl2ZVN0ZXAiLCJ1c2VGb3JtIiwicmVWYWxpZGF0ZU1vZGUiLCJzaG91bGRVbnJlZ2lzdGVyIiwiZGVmYXVsdFZhbHVlcyIsIm5iUGVycyIsIm5iRW5mIiwibmJDaGllbiIsImxpdEZhaXQiLCJuZXdzbGV0dGVyIiwibm9tIiwicHJlbm9tIiwiYWRyZXNzZSIsImNwIiwidmlsbGUiLCJ0ZWwiLCJtYWlsIiwiY29udHJvbCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwic2V0VmFsdWUiLCJnZXRWYWx1ZXMiLCJpc0JyZWFrcG9pbnQiLCJkYXRlT3B0aW9ucyIsImxvY2FsZSIsImZyIiwic3RhcnRPZldlZWsiLCJEYXRlIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImtleSIsInN0YXRlIiwic2V0U3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJpdGVtIiwic2VsZWN0aW9uIiwiZGF5anMiLCJmb3JtYXQiLCJSZWFjdCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVSZWYiLCJ1c2VSZWYiLCJzdGVwcyIsImhhbmRsZU5leHQiLCJwcmV2QWN0aXZlU3RlcCIsImhhbmRsZUJhY2siLCJoYW5kbGVSZXNldCIsImluZm9Mb2MiLCJtYXAiLCJnaXRlIiwiaSIsInNsdWciLCJyZXF1aXJlZCIsInNocmluayIsInBhZGRpbmdUb3AiLCJjYWxlbmRyaWVyIiwiaW5mb0NvbXAiLCJDb29yZCIsInJlY2FwIiwiZGF0ZUFycml2ZWUiLCJkYXRlRGVwYXJ0IiwiY2l2aWxpdGUiLCJwYXlzIiwiY29uc29sZSIsImxvZyIsImluZm9Db21wbCIsImdldFN0ZXBDb250ZW50Iiwic3RlcCIsIm9uU3VibWl0IiwiZGF0YSIsImN1cnJlbnQiLCJleGVjdXRlQXN5bmMiLCJ0b2tlbiIsInJlc2V0IiwiY3JlYXRlUmVzZXJ2YXRpb24iLCJ0aGVuIiwicmVzdWx0IiwiZXJyb3IiLCJkZWphUmVzZXJ2ZU1lc3NhZ2UiLCJtZXNzYWdlIiwibGFiZWwiLCJsZW5ndGgiLCJSRUNBUFRDSEFfU0VDUkVUX0tFWSIsIndpdGhTbmFja2JhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBR0MsMkVBQVUsQ0FBQztBQUNqQ0Msa0JBQWdCLEVBQUU7QUFDakJDLE9BQUcsRUFBRSxFQURZO0FBRWpCQyxRQUFJLEVBQUUsbUJBRlc7QUFHakJDLFNBQUssRUFBRTtBQUhVLEdBRGU7QUFNakNDLFFBQU0sRUFBRTtBQUNQLGVBQVc7QUFDVkMsaUJBQVcsRUFBRTtBQURIO0FBREosR0FOeUI7QUFXakNDLFdBQVMsRUFBRTtBQUNWLGVBQVc7QUFDVkQsaUJBQVcsRUFBRTtBQURIO0FBREQsR0FYc0I7QUFnQmpDRSxNQUFJLEVBQUU7QUFDTEYsZUFBVyxFQUFFLFNBRFI7QUFFTEcsa0JBQWMsRUFBRSxDQUZYO0FBR0xDLGdCQUFZLEVBQUU7QUFIVDtBQWhCMkIsQ0FBRCxDQUFWLENBcUJwQkMsd0VBckJvQixDQUF2QjtBQXVCQSxJQUFNQyxzQkFBc0IsR0FBR0MsMkVBQVUsQ0FBQztBQUN6Q0MsTUFBSSxFQUFFO0FBQ0xDLFNBQUssRUFBRSxTQURGO0FBRUxDLFdBQU8sRUFBRSxNQUZKO0FBR0xDLFVBQU0sRUFBRSxFQUhIO0FBSUxDLGNBQVUsRUFBRTtBQUpQLEdBRG1DO0FBT3pDYixRQUFNLEVBQUU7QUFDUFUsU0FBSyxFQUFFO0FBREEsR0FQaUM7QUFVekNJ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N0YsT0FBTyxDQUFDa0IsTUFIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELEVBT0MsTUFBQyxpRUFBRDtBQUNDLFdBQU8sRUFBQyxXQURUO0FBRUMsU0FBSyxFQUFDLFNBRlA7QUFHQyxXQUFPLEVBQUV5RSxVQUhWO0FBSUMsYUFBUyxFQUFFM0YsT0FBTyxDQUFDa0IsTUFKcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBELENBSkQsQ0F0QkYsQ0FiRCxFQXlEQyxNQUFDLCtEQUFEO0FBQ0MsV0FBTyxFQUFFZ0gsNkRBRFY7QUFFQyxPQUFHLEVBQUUxQyxLQUZOO0FBR0MsUUFBSSxFQUFDLFdBSE4sQ0FJQztBQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF6REQsQ0FERCxDQUhELENBREQ7QUF3RUEsQ0E1bUJEOztJQUFNN0MsZTtVQUNXM0IsUyxFQUVpRGdDLHdELEVBbUI1Q25CLGE7OztNQXRCaEJjLGU7QUE4bUJTLHFFQUFBd0YsbUVBQVksQ0FBQ3hGLGVBQUQsQ0FBM0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzZXJ2YXRpb24uNzJlMmI0NzMxYjljOWE1MTNkMWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFN0ZXBwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcHBlcic7XHJcbmltcG9ydCBTdGVwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXAnO1xyXG5pbXBvcnQgU3RlcExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBMYWJlbCc7XHJcbmltcG9ydCBDaGVjayBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2snO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZXR0aW5ncyc7XHJcbmltcG9ydCBTdGVwQ29ubmVjdG9yIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBDb25uZWN0b3InO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgSG91c2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ib3VzZSc7XHJcbmltcG9ydCBFbW9qaVBlb3BsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Vtb2ppUGVvcGxlJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2tDaXJjbGUnO1xyXG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0ICdyZWFjdC1kYXRlLXJhbmdlL2Rpc3Qvc3R5bGVzLmNzcyc7XHJcbmltcG9ydCAncmVhY3QtZGF0ZS1yYW5nZS9kaXN0L3RoZW1lL2RlZmF1bHQuY3NzJztcclxuaW1wb3J0IHsgRGF0ZVJhbmdlIH0gZnJvbSAncmVhY3QtZGF0ZS1yYW5nZSc7XHJcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgZnIgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2ZyJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IHtcclxuXHRDaGVja2JveCxcclxuXHRDb250YWluZXIsXHJcblx0Rm9ybUNvbnRyb2wsXHJcblx0Rm9ybUNvbnRyb2xMYWJlbCxcclxuXHRGb3JtR3JvdXAsXHJcblx0Rm9ybUxhYmVsLFxyXG5cdElucHV0TGFiZWwsXHJcblx0TWVudUl0ZW0sXHJcblx0U2VsZWN0LFxyXG5cdFN3aXRjaCxcclxuXHRUZXh0RmllbGQsXHJcblx0Q2lyY3VsYXJQcm9ncmVzcyxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgeyBjcmVhdGVSZXNlcnZhdGlvbiB9IGZyb20gJy4uLy4uL2FjdGlvbnMvcmVzZXJ2YXRpb25BY3Rpb25zJztcclxuaW1wb3J0IFJlQ0FQVENIQSBmcm9tICdyZWFjdC1nb29nbGUtcmVjYXB0Y2hhJztcclxuaW1wb3J0IHsgUkVDQVBUQ0hBX1NFQ1JFVF9LRVkgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQgeyB3aXRoU25hY2tiYXIgfSBmcm9tICcuLi9IT0MvU25hY2tiYXInO1xyXG5cclxuY29uc3QgUW9udG9Db25uZWN0b3IgPSB3aXRoU3R5bGVzKHtcclxuXHRhbHRlcm5hdGl2ZUxhYmVsOiB7XHJcblx0XHR0b3A6IDEwLFxyXG5cdFx0bGVmdDogJ2NhbGMoLTUwJSArIDE2cHgpJyxcclxuXHRcdHJpZ2h0OiAnY2FsYyg1MCUgKyAxNnB4KScsXHJcblx0fSxcclxuXHRhY3RpdmU6IHtcclxuXHRcdCcmICRsaW5lJzoge1xyXG5cdFx0XHRib3JkZXJDb2xvcjogJyM3ODRhZjQnLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGNvbXBsZXRlZDoge1xyXG5cdFx0JyYgJGxpbmUnOiB7XHJcblx0XHRcdGJvcmRlckNvbG9yOiAnIzc4NGFmNCcsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0bGluZToge1xyXG5cdFx0Ym9yZGVyQ29sb3I6ICcjZWFlYWYwJyxcclxuXHRcdGJvcmRlclRvcFdpZHRoOiAzLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAxLFxyXG5cdH0sXHJcbn0pKFN0ZXBDb25uZWN0b3IpO1xyXG5cclxuY29uc3QgdXNlUW9udG9TdGVwSWNvblN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdGNvbG9yOiAnI2VhZWFmMCcsXHJcblx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRoZWlnaHQ6IDIyLFxyXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0fSxcclxuXHRhY3RpdmU6IHtcclxuXHRcdGNvbG9yOiAnIzc4NGFmNCcsXHJcblx0fSxcclxuXHRjaXJjbGU6IHtcclxuXHRcdHdpZHRoOiA4LFxyXG5cdFx0aGVpZ2h0OiA4LFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAnNTAlJyxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcicsXHJcblx0fSxcclxuXHRjb21wbGV0ZWQ6IHtcclxuXHRcdGNvbG9yOiAnIzc4NGFmNCcsXHJcblx0XHR6SW5kZXg6IDEsXHJcblx0XHRmb250U2l6ZTogMTgsXHJcblx0fSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBRb250b1N0ZXBJY29uKHByb3BzKSB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVFvbnRvU3RlcEljb25TdHlsZXMoKTtcclxuXHRjb25zdCB7IGFjdGl2ZSwgY29tcGxldGVkIH0gPSBwcm9wcztcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwge1xyXG5cdFx0XHRcdFtjbGFzc2VzLmFjdGl2ZV06IGFjdGl2ZSxcclxuXHRcdFx0fSl9PlxyXG5cdFx0XHR7Y29tcGxldGVkID8gKFxyXG5cdFx0XHRcdDxDaGVjayBjbGFzc05hbWU9e2NsYXNzZXMuY29tcGxldGVkfSAvPlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNpcmNsZX0gLz5cclxuXHRcdFx0KX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcblFvbnRvU3RlcEljb24ucHJvcFR5cGVzID0ge1xyXG5cdC8qKlxyXG5cdCAqIFdoZXRoZXIgdGhpcyBzdGVwIGlzIGFjdGl2ZS5cclxuXHQgKi9cclxuXHRhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxyXG5cdC8qKlxyXG5cdCAqIE1hcmsgdGhlIHN0ZXAgYXMgY29tcGxldGVkLiBJcyBwYXNzZWQgdG8gY2hpbGQgY29tcG9uZW50cy5cclxuXHQgKi9cclxuXHRjb21wbGV0ZWQ6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuY29uc3QgQ29sb3JsaWJDb25uZWN0b3IgPSB3aXRoU3R5bGVzKHtcclxuXHRhbHRlcm5hdGl2ZUxhYmVsOiB7XHJcblx0XHR0b3A6IDIyLFxyXG5cdH0sXHJcblx0YWN0aXZlOiB7XHJcblx0XHQnJiAkbGluZSc6IHtcclxuXHRcdFx0YmFja2dyb3VuZEltYWdlOlxyXG5cdFx0XHRcdCdsaW5lYXItZ3JhZGllbnQoIDk1ZGVnLHJnYigyNDIsMTEzLDMzKSAwJSxyZ2IoMjMzLDY0LDg3KSA1MCUscmdiKDEzOCwzNSwxMzUpIDEwMCUpJyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRjb21wbGV0ZWQ6IHtcclxuXHRcdCcmICRsaW5lJzoge1xyXG5cdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6XHJcblx0XHRcdFx0J2xpbmVhci1ncmFkaWVudCggOTVkZWcscmdiKDI0MiwxMTMsMzMpIDAlLHJnYigyMzMsNjQsODcpIDUwJSxyZ2IoMTM4LDM1LDEzNSkgMTAwJSknLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGxpbmU6IHtcclxuXHRcdGhlaWdodDogMyxcclxuXHRcdGJvcmRlcjogMCxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJyNlYWVhZjAnLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAxLFxyXG5cdH0sXHJcbn0pKFN0ZXBDb25uZWN0b3IpO1xyXG5cclxuY29uc3QgdXNlQ29sb3JsaWJTdGVwSWNvblN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJyNjY2MnLFxyXG5cdFx0ekluZGV4OiAxLFxyXG5cdFx0Y29sb3I6ICcjZmZmJyxcclxuXHRcdHdpZHRoOiA1MCxcclxuXHRcdGhlaWdodDogNTAsXHJcblx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0fSxcclxuXHRhY3RpdmU6IHtcclxuXHRcdGJhY2tncm91bmRJbWFnZTpcclxuXHRcdFx0J2xpbmVhci1ncmFkaWVudCggMTM2ZGVnLCByZ2IoMjQyLDExMywzMykgMCUsIHJnYigyMzMsNjQsODcpIDUwJSwgcmdiKDEzOCwzNSwxMzUpIDEwMCUpJyxcclxuXHRcdGJveFNoYWRvdzogJzAgNHB4IDEwcHggMCByZ2JhKDAsMCwwLC4yNSknLFxyXG5cdH0sXHJcblx0Y29tcGxldGVkOiB7XHJcblx0XHRiYWNrZ3JvdW5kSW1hZ2U6XHJcblx0XHRcdCdsaW5lYXItZ3JhZGllbnQoIDEzNmRlZywgcmdiKDI0MiwxMTMsMzMpIDAlLCByZ2IoMjMzLDY0LDg3KSA1MCUsIHJnYigxMzgsMzUsMTM1KSAxMDAlKScsXHJcblx0fSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBDb2xvcmxpYlN0ZXBJY29uKHByb3BzKSB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZUNvbG9ybGliU3RlcEljb25TdHlsZXMoKTtcclxuXHRjb25zdCB7IGFjdGl2ZSwgY29tcGxldGVkIH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgaWNvbnMgPSB7XHJcblx0XHQxOiA8SG91c2VJY29uIC8+LFxyXG5cdFx0MjogPFNldHRpbmdzSWNvbiAvPixcclxuXHRcdDM6IDxFbW9qaVBlb3BsZUljb24gLz4sXHJcblx0XHQ0OiA8Q2hlY2tDaXJjbGVJY29uIC8+LFxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsIHtcclxuXHRcdFx0XHRbY2xhc3Nlcy5hY3RpdmVdOiBhY3RpdmUsXHJcblx0XHRcdFx0W2NsYXNzZXMuY29tcGxldGVkXTogY29tcGxldGVkLFxyXG5cdFx0XHR9KX0+XHJcblx0XHRcdHtpY29uc1tTdHJpbmcocHJvcHMuaWNvbildfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuQ29sb3JsaWJTdGVwSWNvbi5wcm9wVHlwZXMgPSB7XHJcblx0LyoqXHJcblx0ICogV2hldGhlciB0aGlzIHN0ZXAgaXMgYWN0aXZlLlxyXG5cdCAqL1xyXG5cdGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXHJcblx0LyoqXHJcblx0ICogTWFyayB0aGUgc3RlcCBhcyBjb21wbGV0ZWQuIElzIHBhc3NlZCB0byBjaGlsZCBjb21wb25lbnRzLlxyXG5cdCAqL1xyXG5cdGNvbXBsZXRlZDogUHJvcFR5cGVzLmJvb2wsXHJcblx0LyoqXHJcblx0ICogVGhlIGxhYmVsIGRpc3BsYXllZCBpbiB0aGUgc3RlcCBpY29uLlxyXG5cdCAqL1xyXG5cdGljb246IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0cm9vdDoge1xyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHR9LFxyXG5cdGJ1dHRvbjoge1xyXG5cdFx0bWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0fSxcclxuXHRpbnN0cnVjdGlvbnM6IHtcclxuXHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygxKSxcclxuXHR9LFxyXG5cdGZvcm1Db250cm9sOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHRtaW5XaWR0aDogMTIwLFxyXG5cdH0sXHJcblx0c2VsZWN0RW1wdHk6IHtcclxuXHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuXHR9LFxyXG5cdC8vIGNhbGVuZHJpZXI6IHtcclxuXHQvLyBcdGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG5cdC8vIH0sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIGdldFN0ZXBzKCkge1xyXG5cdHJldHVybiBbXHJcblx0XHQnSW5mb3JtYXRpb24gc3VyIGxhIGxvY2F0aW9uJyxcclxuXHRcdCdJbmZvcm1hdGlvbnMgY29tcGzDqW1lbnRhaXJlcycsXHJcblx0XHQnVm9zIGNvb3Jkb25uw6llcycsXHJcblx0XHQnUsOpY2FwaXR1bGF0aWYnLFxyXG5cdF07XHJcbn1cclxuXHJcbmNvbnN0IHVzZU1lZGlhUXVlcnkgPSAod2lkdGgpID0+IHtcclxuXHRjb25zdCBbdGFyZ2V0UmVhY2hlZCwgc2V0VGFyZ2V0UmVhY2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdGNvbnN0IHVwZGF0ZVRhcmdldCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcblx0XHRpZiAoZS5tYXRjaGVzKSB7XHJcblx0XHRcdHNldFRhcmdldFJlYWNoZWQodHJ1ZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZXRUYXJnZXRSZWFjaGVkKGZhbHNlKTtcclxuXHRcdH1cclxuXHR9LCBbXSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBtZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKGAobWF4LXdpZHRoOiAke3dpZHRofXB4KWApO1xyXG5cdFx0bWVkaWEuYWRkTGlzdGVuZXIodXBkYXRlVGFyZ2V0KTtcclxuXHJcblx0XHQvLyBDaGVjayBvbiBtb3VudCAoY2FsbGJhY2sgaXMgbm90IGNhbGxlZCB1bnRpbCBhIGNoYW5nZSBvY2N1cnMpXHJcblx0XHRpZiAobWVkaWEubWF0Y2hlcykge1xyXG5cdFx0XHRzZXRUYXJnZXRSZWFjaGVkKHRydWUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiAoKSA9PiBtZWRpYS5yZW1vdmVMaXN0ZW5lcih1cGRhdGVUYXJnZXQpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIHRhcmdldFJlYWNoZWQ7XHJcbn07XHJcblxyXG5jb25zdCBSZXNlcnZhdGlvbkZvcm0gPSAoeyBzbmFja2JhclNob3dNZXNzYWdlLCBnaXRlcyB9KSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IFthY3RpdmVTdGVwLCBzZXRBY3RpdmVTdGVwXSA9IHVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IHsgY29udHJvbCwgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgc2V0VmFsdWUsIGdldFZhbHVlcyB9ID0gdXNlRm9ybSh7XHJcblx0XHRyZVZhbGlkYXRlTW9kZTogJ29uQ2hhbmdlJyxcclxuXHRcdHNob3VsZFVucmVnaXN0ZXI6IGZhbHNlLFxyXG5cdFx0ZGVmYXVsdFZhbHVlczoge1xyXG5cdFx0XHRuYlBlcnM6IDEwLFxyXG5cdFx0XHRuYkVuZjogNSxcclxuXHRcdFx0bmJDaGllbjogMSxcclxuXHRcdFx0bGl0RmFpdDogdHJ1ZSxcclxuXHRcdFx0bmV3c2xldHRlcjogdHJ1ZSxcclxuXHRcdFx0bm9tOiAnTGFwaWVycmUnLFxyXG5cdFx0XHRwcmVub206ICdKb3NzaWMnLFxyXG5cdFx0XHRhZHJlc3NlOiAnMTggcnVlIHRlc3QnLFxyXG5cdFx0XHRjcDogJzUxMDAwJyxcclxuXHRcdFx0dmlsbGU6ICdtYVZpbGxlJyxcclxuXHRcdFx0dGVsOiAnMDYgMTUgNTUgNTUgNTUnLFxyXG5cdFx0XHRtYWlsOiAnam9zc2ljLmxhcGllcnJlQGdtYWlsLmNvbScsXHJcblx0XHR9LFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBpc0JyZWFrcG9pbnQgPSB1c2VNZWRpYVF1ZXJ5KDc2OCk7XHJcblxyXG5cdGNvbnN0IGRhdGVPcHRpb25zID0geyBsb2NhbGU6IGZyIH07XHJcblx0c3RhcnRPZldlZWsobmV3IERhdGUoKSwgZGF0ZU9wdGlvbnMpO1xyXG5cclxuXHQvLyBjb25zdCBbbG9jYWxlLCBzZXRMb2NhbGVdID0gUmVhY3QudXNlU3RhdGUoJ2ZyJyk7XHJcblxyXG5cdGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoW1xyXG5cdFx0e1xyXG5cdFx0XHRzdGFydERhdGU6IG5ldyBEYXRlKCksXHJcblx0XHRcdGVuZERhdGU6IG5ldyBEYXRlKCksXHJcblx0XHRcdGtleTogJ3NlbGVjdGlvbicsXHJcblx0XHR9LFxyXG5cdF0pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoaXRlbSkgPT4ge1xyXG5cdFx0c2V0U3RhdGUoW2l0ZW0uc2VsZWN0aW9uXSk7XHJcblxyXG5cdFx0c2V0VmFsdWUoXHJcblx0XHRcdCdkYXRlQXJyaXZlZScsXHJcblx0XHRcdGRheWpzKGl0ZW0uc2VsZWN0aW9uLnN0YXJ0RGF0ZSkuZm9ybWF0KCdNTS9ERC9ZWVlZJylcclxuXHRcdCk7XHJcblx0XHRzZXRWYWx1ZShcclxuXHRcdFx0J2RhdGVEZXBhcnQnLFxyXG5cdFx0XHRkYXlqcyhpdGVtLnNlbGVjdGlvbi5lbmREYXRlKS5mb3JtYXQoJ01NL0REL1lZWVknKVxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHRSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0cmVnaXN0ZXIoJ2RhdGVBcnJpdmVlJyk7IC8vIGN1c3RvbSByZWdpc3RlclxyXG5cdFx0cmVnaXN0ZXIoJ2RhdGVEZXBhcnQnKTsgLy8gY3VzdG9tIHJlZ2lzdGVyXHJcblx0fSwgW3JlZ2lzdGVyXSk7XHJcblxyXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Y29uc3QgcmVSZWYgPSB1c2VSZWYoKTtcclxuXHJcblx0Y29uc3Qgc3RlcHMgPSBnZXRTdGVwcygpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xyXG5cdFx0c2V0QWN0aXZlU3RlcCgocHJldkFjdGl2ZVN0ZXApID0+IHByZXZBY3RpdmVTdGVwICsgMSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcclxuXHRcdHNldEFjdGl2ZVN0ZXAoKHByZXZBY3RpdmVTdGVwKSA9PiBwcmV2QWN0aXZlU3RlcCAtIDEpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xyXG5cdFx0c2V0QWN0aXZlU3RlcCgwKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBpbmZvTG9jID0gKCkgPT4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9Jyc+XHJcblx0XHRcdDxoMj5JbmZvcm1hdGlvbnMgc3VyIGxhIGxvY2F0aW9uPC9oMj5cclxuXHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdzcGFjZS1hcm91bmQnPlxyXG5cdFx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0PElucHV0TGFiZWxcclxuXHRcdFx0XHRcdFx0c2hyaW5rXHJcblx0XHRcdFx0XHRcdGlkPSdkZW1vLXNpbXBsZS1zZWxlY3QtcGxhY2Vob2xkZXItbGFiZWwtbGFiZWwnPlxyXG5cdFx0XHRcdFx0XHRSw6lzZXJ2YXRpb24gc3VyIGxlIGfDrnRlIDpcclxuXHRcdFx0XHRcdDwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0XHRcdG5hbWU9J2dpdGUnXHJcblx0XHRcdFx0XHRcdGFzPXtcclxuXHRcdFx0XHRcdFx0XHQ8U2VsZWN0IGlkPSdnaXRlLXNlbGVjdCc+XHJcblx0XHRcdFx0XHRcdFx0XHR7Z2l0ZXMubWFwKChnaXRlLCBpKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSBrZXk9e2dpdGUuc2x1Z30gdmFsdWU9e2dpdGUuc2x1Z30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2dpdGUubm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0PC9TZWxlY3Q+XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXIoe1xyXG5cdFx0XHRcdFx0XHRyZXF1aXJlZDogJ0xlIG5vbWJyZSBkZSBwZXJzb25uZXMgZXN0IG9ibGlnYXRvaXJlJyxcclxuXHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0bmFtZT0nbmJQZXJzJ1xyXG5cdFx0XHRcdFx0aWQ9J25iUGVycydcclxuXHRcdFx0XHRcdGxhYmVsPSdOb21icmUgZGUgcGVyc29ubmVzIHRvdGFsJ1xyXG5cdFx0XHRcdFx0dHlwZT0nbnVtYmVyJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXIoe1xyXG5cdFx0XHRcdFx0XHRyZXF1aXJlZDogXCJMZSBub21icmUgZCdlbmZhbnRzIGVzdCBvYmxpZ2F0b2lyZVwiLFxyXG5cdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHRuYW1lPSduYkVuZidcclxuXHRcdFx0XHRcdGlkPSduYkVuZidcclxuXHRcdFx0XHRcdGxhYmVsPSdEb250IGVuZmFudHMgZGUgbW9pbnMgZGUgMTggYW5zJ1xyXG5cdFx0XHRcdFx0dHlwZT0nbnVtYmVyJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9HcmlkPlxyXG5cclxuXHRcdFx0e2lzQnJlYWtwb2ludCA/IChcclxuXHRcdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdFx0Y29udGFpbmVyXHJcblx0XHRcdFx0XHRkaXJlY3Rpb249J3JvdydcclxuXHRcdFx0XHRcdGp1c3RpZnk9J2NlbnRlcidcclxuXHRcdFx0XHRcdGFsaWduSXRlbXM9J2NlbnRlcidcclxuXHRcdFx0XHRcdHN0eWxlPXt7IHBhZGRpbmdUb3A6ICcyMHB4JyB9fT5cclxuXHRcdFx0XHRcdDxEYXRlUmFuZ2VcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmNhbGVuZHJpZXJ9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoaXRlbSkgPT4gaGFuZGxlQ2hhbmdlKGl0ZW0pfVxyXG5cdFx0XHRcdFx0XHQvLyBvbkNoYW5nZT17KGl0ZW0pID0+IHNldFN0YXRlKFtpdGVtLnNlbGVjdGlvbl0pfVxyXG5cdFx0XHRcdFx0XHRzaG93U2VsZWN0aW9uUHJldmlldz17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0bmFtZT0nZGF0ZURGJ1xyXG5cdFx0XHRcdFx0XHRtb3ZlUmFuZ2VPbkZpcnN0U2VsZWN0aW9uPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0bW9udGhzPXsxfVxyXG5cdFx0XHRcdFx0XHRsb2NhbGU9e2ZyfVxyXG5cdFx0XHRcdFx0XHRyYW5nZXM9e3N0YXRlfVxyXG5cdFx0XHRcdFx0XHRkaXJlY3Rpb249J2hvcml6b250YWwnXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0KSA6IChcclxuXHRcdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdFx0Y29udGFpbmVyXHJcblx0XHRcdFx0XHRkaXJlY3Rpb249J3JvdydcclxuXHRcdFx0XHRcdGp1c3RpZnk9J2NlbnRlcidcclxuXHRcdFx0XHRcdGFsaWduSXRlbXM9J2NlbnRlcidcclxuXHRcdFx0XHRcdHN0eWxlPXt7IHBhZGRpbmdUb3A6ICcyMHB4JyB9fT5cclxuXHRcdFx0XHRcdDxEYXRlUmFuZ2VcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmNhbGVuZHJpZXJ9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoaXRlbSkgPT4gaGFuZGxlQ2hhbmdlKGl0ZW0pfVxyXG5cdFx0XHRcdFx0XHQvLyBvbkNoYW5nZT17KGl0ZW0pID0+IHNldFN0YXRlKFtpdGVtLnNlbGVjdGlvbl0pfVxyXG5cdFx0XHRcdFx0XHRzaG93U2VsZWN0aW9uUHJldmlldz17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0bmFtZT0nZGF0ZURGJ1xyXG5cdFx0XHRcdFx0XHRtb3ZlUmFuZ2VPbkZpcnN0U2VsZWN0aW9uPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0bW9udGhzPXsyfVxyXG5cdFx0XHRcdFx0XHRsb2NhbGU9e2ZyfVxyXG5cdFx0XHRcdFx0XHRyYW5nZXM9e3N0YXRlfVxyXG5cdFx0XHRcdFx0XHRkaXJlY3Rpb249J2hvcml6b250YWwnXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0KX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblx0Y29uc3QgaW5mb0NvbXAgPSAoKSA9PiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8aDI+SW5mb3JtYXRpb25zIHN1cHBsw6ltZW50YWlyZXM8L2gyPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2xcclxuXHRcdFx0XHRcdGNvbXBvbmVudD0nZmllbGRzZXQnXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0PEZvcm1MYWJlbCBjb21wb25lbnQ9J2xlZ2VuZCc+XHJcblx0XHRcdFx0XHRcdE1lcmNpIGQnaW5kaXF1ZXIgc2kgdm91cyBub3VzIGF2ZXogZMOpamEgY29udGFjdMOpIHBhciA6XHJcblx0XHRcdFx0XHQ8L0Zvcm1MYWJlbD5cclxuXHRcdFx0XHRcdDxGb3JtR3JvdXA+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdzcGFjZS1hcm91bmQnPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250cm9sPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PENoZWNrYm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nY29udGFjdE1haWwnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17ZmFsc2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD0nTWFpbCdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250cm9sPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PENoZWNrYm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nY29udGFjdFRlbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPSdUw6lsw6lwaG9uZSdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250cm9sPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PENoZWNrYm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nY29udGFjdEFicml0ZWwnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17ZmFsc2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD0nQWJyaXRlbCdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250cm9sPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PENoZWNrYm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nY29udGFjdExlYm9uY29pbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPSdMZWJvbmNvaW4nXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xMYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udHJvbD17XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxDaGVja2JveFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J2NvbnRhY3RBdXRyZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtmYWxzZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPSdBdXRyZSdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cclxuXHRcdFx0XHRcdHsvKiA8Rm9ybUhlbHBlclRleHQ+QmUgY2FyZWZ1bDwvRm9ybUhlbHBlclRleHQ+ICovfVxyXG5cdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J3NwYWNlLWFyb3VuZCc+XHJcblx0XHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0bmFtZT0nbmJDaGllbidcclxuXHRcdFx0XHRcdFx0aWQ9J2NoaWVuJ1xyXG5cdFx0XHRcdFx0XHRsYWJlbD0nTm9tYnJlIGRlIGNoaWVuID8gKDPigqwvam91ci9hbmltYWwpJ1xyXG5cdFx0XHRcdFx0XHR0eXBlPSdudW1iZXInXHJcblx0XHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xMYWJlbFxyXG5cdFx0XHRcdFx0XHRjb250cm9sPXtcclxuXHRcdFx0XHRcdFx0XHQ8U3dpdGNoXHJcblx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0Q2hlY2tlZFxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT0nbGl0RmFpdCdcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yPSdwcmltYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9XCJTb3VoYWl0ZXotdm91cyBsJ29wdGlvbiBsaXQgZmFpdCDDoCBsJ2Fycml2w6llID9cIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsXHJcblx0XHRcdFx0XHRcdGNvbnRyb2w9e1xyXG5cdFx0XHRcdFx0XHRcdDxTd2l0Y2hcclxuXHRcdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRDaGVja2VkXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPSduZXdzbGV0dGVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I9J3ByaW1hcnknXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRsYWJlbD0nU291c2NyaXJlIMOgIG5vdHJlIG5ld3NsZXR0ZXIgcG91ciBiw6luw6lmaWNpZXIgZGUgcmVtaXNlcyBldCBvZmZyZXMgcHJvbW90aW9ubmVsbGVzID8nXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXI+XHJcblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRuYW1lPSdpbmZvQ29tcGwnXHJcblx0XHRcdFx0XHRcdFx0aWQ9J2luZm9Db21wbCdcclxuXHRcdFx0XHRcdFx0XHRsYWJlbD0nSW5mb3JtYXRpb25zIGNvbXBsw6ltZW50YWlyZXMgLyBRdWVzdGlvbnMgOidcclxuXHRcdFx0XHRcdFx0XHRtdWx0aWxpbmVcclxuXHRcdFx0XHRcdFx0XHRyb3dzPXszfVxyXG5cdFx0XHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cdGNvbnN0IENvb3JkID0gKCkgPT4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGgyPlZvcyBjb29yZG9ubsOpZXM8L2gyPlxyXG5cclxuXHRcdFx0PEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J3NwYWNlLWFyb3VuZCc+XHJcblx0XHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHQ8SW5wdXRMYWJlbFxyXG5cdFx0XHRcdFx0XHRzaHJpbmtcclxuXHRcdFx0XHRcdFx0aWQ9J2RlbW8tc2ltcGxlLXNlbGVjdC1wbGFjZWhvbGRlci1sYWJlbC1sYWJlbCc+XHJcblx0XHRcdFx0XHRcdENpdmlsaXTDqVxyXG5cdFx0XHRcdFx0PC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdFx0PENvbnRyb2xsZXJcclxuXHRcdFx0XHRcdFx0Y29udHJvbD17Y29udHJvbH1cclxuXHRcdFx0XHRcdFx0bmFtZT0nY2l2aWxpdGUnXHJcblx0XHRcdFx0XHRcdGFzPXtcclxuXHRcdFx0XHRcdFx0XHQ8U2VsZWN0IGlkPSdjaXZpbGl0ZS1zZWxlY3QnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdNLiAmIE1tZSc+TS4gJiBNbWU8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdNbWUnPk1tZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J01sbGUnPk1sbGU8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdNLic+TS48L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdBc3NvY2lhdGlvbic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEFzc29jaWF0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPVwiQ29taXTDqSBkJ2VudHJlcHJpc2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Q29taXTDqSBkJ2VudHJlcHJpc2VcclxuXHRcdFx0XHRcdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J1NvY2nDqXTDqSc+U29jacOpdMOpPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nRW50cmVwcmlzZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEVudHJlcHJpc2VcclxuXHRcdFx0XHRcdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J0ZveWVyIGRlIHZpZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEZveWVyIGRlIHZpZVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT1cIkZveWVyIGQnYWNjdWVpbFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRGb3llciBkJ2FjY3VlaWxcclxuXHRcdFx0XHRcdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J0ZhbWlsbGUnPkZhbWlsbGU8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdBdXRyZXMnPkF1dHJlczwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PC9TZWxlY3Q+XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHJcblx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6ICdMZSBub20gZXN0IG9ibGlnYXRvaXJlJyB9KX1cclxuXHRcdFx0XHRcdG5hbWU9J25vbSdcclxuXHRcdFx0XHRcdGlkPSdub20nXHJcblx0XHRcdFx0XHRsYWJlbD0nTm9tJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXIoe1xyXG5cdFx0XHRcdFx0XHRyZXF1aXJlZDogJ0xlIHByw6lub20gZXN0IG9ibGlnYXRvaXJlJyxcclxuXHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0bmFtZT0ncHJlbm9tJ1xyXG5cdFx0XHRcdFx0aWQ9J3ByZW5vbSdcclxuXHRcdFx0XHRcdGxhYmVsPSdQcsOpbm9tJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8R3JpZCBjb250YWluZXIganVzdGlmeT0nc3BhY2UtYXJvdW5kJz5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXIoe1xyXG5cdFx0XHRcdFx0XHRyZXF1aXJlZDogXCJMJ2FkcmVzc2UgZXN0IG9ibGlnYXRvaXJlXCIsXHJcblx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdG5hbWU9J2FkcmVzc2UnXHJcblx0XHRcdFx0XHRpZD0nYWRyZXNzZSdcclxuXHRcdFx0XHRcdGxhYmVsPSdBZHJlc3NlJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXIoe1xyXG5cdFx0XHRcdFx0XHRyZXF1aXJlZDogJ0xlIGNvZGUgcG9zdGFsIGVzdCBvYmxpZ2F0b2lyZScsXHJcblx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdG5hbWU9J2NwJ1xyXG5cdFx0XHRcdFx0aWQ9J2NwJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J0NvZGUgUG9zdGFsJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXIoe1xyXG5cdFx0XHRcdFx0XHRyZXF1aXJlZDogJ0xhIHZpbGxlIGVzdCBvYmxpZ2F0b2lyZScsXHJcblx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdG5hbWU9J3ZpbGxlJ1xyXG5cdFx0XHRcdFx0aWQ9J3ZpbGxlJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J1ZpbGxlJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdDxJbnB1dExhYmVsXHJcblx0XHRcdFx0XHRcdHNocmlua1xyXG5cdFx0XHRcdFx0XHRpZD0nZGVtby1zaW1wbGUtc2VsZWN0LXBsYWNlaG9sZGVyLWxhYmVsLWxhYmVsJz5cclxuXHRcdFx0XHRcdFx0UGF5c1xyXG5cdFx0XHRcdFx0PC9JbnB1dExhYmVsPlxyXG5cclxuXHRcdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0XHRcdG5hbWU9J3BheXMnXHJcblx0XHRcdFx0XHRcdGFzPXtcclxuXHRcdFx0XHRcdFx0XHQ8U2VsZWN0IGlkPSdwYXlzLXNlbGVjdCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2ZyYW5jZSc+RnJhbmNlPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nJz4tLS0tLS0tLTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2F1dHJlcyc+QXV0cmVzPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nYWxsZW1hZ25lJz5BbGxlbWFnbmU8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdhbmdsZXRlcnJlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0QW5nbGV0ZXJyZVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nYmVsZ2lxdWUnPkJlbGdpcXVlPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0naG9sbGFuZGUnPkhvbGxhbmRlPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nbHV4ZW1ib3VyZyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEx1eGVtYm91cmdcclxuXHRcdFx0XHRcdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J3N1aXNzZSc+U3Vpc3NlPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8L1NlbGVjdD5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdzcGFjZS1hcm91bmQnPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdG5hbWU9J3RlbCdcclxuXHRcdFx0XHRcdGlkPSd0ZWwnXHJcblx0XHRcdFx0XHRsYWJlbD0nVMOpbMOpcGhvbmUnXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiAnTGUgbWFpbCBlc3Qgb2JsaWdhdG9pcmUnIH0pfVxyXG5cdFx0XHRcdFx0bmFtZT0nbWFpbCdcclxuXHRcdFx0XHRcdGlkPSdtYWlsJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J0VtYWlsJ1xyXG5cdFx0XHRcdFx0dHlwZT0nbWFpbCdcclxuXHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblx0Y29uc3QgcmVjYXAgPSAoKSA9PiAoXHJcblx0XHQ8cD5cclxuXHRcdFx0ey8qIHtKU09OLnN0cmluZ2lmeShnZXRWYWx1ZXMoKSl9ICovfVxyXG5cdFx0XHQ8aDM+UsOpY2FwaXR1bGF0aWYgZGUgbGEgbG9jYXRpb248L2gzPlxyXG5cdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdGNvbnRhaW5lclxyXG5cdFx0XHRcdGRpcmVjdGlvbj0ncm93J1xyXG5cdFx0XHRcdGp1c3RpZnk9J3NwYWNlLWV2ZW5seSdcclxuXHRcdFx0XHRhbGlnbkl0ZW1zPSdmbGV4LXN0YXJ0Jz5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtPlxyXG5cdFx0XHRcdFx0PHA+TG9jYXRpb24gOjwvcD5cclxuXHRcdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdFx0PGxpPkxlIGdpdGUgOiB7Z2V0VmFsdWVzKCkuZ2l0ZX08L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0RHV7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdHtkYXlqcyhnZXRWYWx1ZXMoKS5kYXRlQXJyaXZlZSkuZm9ybWF0KFxyXG5cdFx0XHRcdFx0XHRcdFx0J0REL01NL1lZWVknXHJcblx0XHRcdFx0XHRcdFx0KX17JyAnfVxyXG5cdFx0XHRcdFx0XHRcdGF1eycgJ31cclxuXHRcdFx0XHRcdFx0XHR7ZGF5anMoZ2V0VmFsdWVzKCkuZGF0ZURlcGFydCkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9XHJcblx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRQb3VyIHtnZXRWYWx1ZXMoKS5uYlBlcnN9IHBlcnNvbm5lcyBkb250eycgJ31cclxuXHRcdFx0XHRcdFx0XHR7Z2V0VmFsdWVzKCkubmJFbmZ9IGVuZmFudChzKSBhaW5zaSBxdWV7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdHtnZXRWYWx1ZXMoKS5uYkNoaWVufSBhbmltYXV4XHJcblx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRPcHRpb25zIDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdHtnZXRWYWx1ZXMoKS5saXRGYWl0ICYmICdMaXRzIGZhaXQgOiBPdWksJ317JyAnfVxyXG5cdFx0XHRcdFx0XHRcdHtnZXRWYWx1ZXMoKS5uZXdzbGV0dGVyICYmICdOZXdzbGV0dGVyIDogT3VpJ31cclxuXHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0+XHJcblx0XHRcdFx0XHQ8cD5Wb3MgaW5mb3JtYXRpb25zIDo8L3A+XHJcblx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHR7Z2V0VmFsdWVzKCkuY2l2aWxpdGV9IHtnZXRWYWx1ZXMoKS5ub219eycgJ31cclxuXHRcdFx0XHRcdFx0XHR7Z2V0VmFsdWVzKCkucHJlbm9tfVxyXG5cdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0e2dldFZhbHVlcygpLmFkcmVzc2V9IDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdHtnZXRWYWx1ZXMoKS5jcH0ge2dldFZhbHVlcygpLnZpbGxlfSx7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdHtnZXRWYWx1ZXMoKS5wYXlzfVxyXG5cdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0VMOpbMOpcGhvbmUgOiB7Z2V0VmFsdWVzKCkudGVsfSA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRNYWlsIDoge2dldFZhbHVlcygpLm1haWx9XHJcblx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdGNvbnRhaW5lclxyXG5cdFx0XHRcdGRpcmVjdGlvbj0nY29sdW1uJ1xyXG5cdFx0XHRcdGp1c3RpZnk9J2ZsZXgtc3RhcnQnXHJcblx0XHRcdFx0YWxpZ25JdGVtcz0nY2VudGVyJz5cclxuXHRcdFx0XHR7Y29uc29sZS5sb2coZ2V0VmFsdWVzKCkuaW5mb0NvbXBsKX1cclxuXHRcdFx0XHR7Z2V0VmFsdWVzKCkuaW5mb0NvbXBsICE9PSAnJyAmJiAoXHJcblx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8cD5Wb3RyZSBtZXNzYWdlIDo8L3A+eycgJ31cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8cD57Z2V0VmFsdWVzKCkuaW5mb0NvbXBsfTwvcD5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0PC9wPlxyXG5cdCk7XHJcblxyXG5cdGZ1bmN0aW9uIGdldFN0ZXBDb250ZW50KHN0ZXApIHtcclxuXHRcdHN3aXRjaCAoc3RlcCkge1xyXG5cdFx0XHRjYXNlIDA6XHJcblx0XHRcdFx0cmV0dXJuIGluZm9Mb2MoKTtcclxuXHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdHJldHVybiBpbmZvQ29tcCgpO1xyXG5cdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0cmV0dXJuIENvb3JkKCk7XHJcblx0XHRcdGNhc2UgMzpcclxuXHRcdFx0XHRyZXR1cm4gcmVjYXAoKTtcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRyZXR1cm4gJ0VycmV1cic7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChkYXRhKSA9PiB7XHJcblx0XHRzZXRMb2FkaW5nKHRydWUpO1xyXG5cdFx0ZGF0YS50b2tlbiA9IGF3YWl0IHJlUmVmLmN1cnJlbnQuZXhlY3V0ZUFzeW5jKCk7XHJcblx0XHRyZVJlZi5jdXJyZW50LnJlc2V0KCk7XHJcblx0XHRjb25zb2xlLmxvZygnb25TdWJtaXQgZGF0YSA9PicsIGRhdGEpO1xyXG5cdFx0Y3JlYXRlUmVzZXJ2YXRpb24oZGF0YSkudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZXN1bHQgdmF1dCA9PicsIHJlc3VsdCk7XHJcblx0XHRcdGlmIChyZXN1bHQuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQuZXJyb3IpO1xyXG5cdFx0XHRcdHNuYWNrYmFyU2hvd01lc3NhZ2UoYCR7cmVzdWx0LmVycm9yfWApO1xyXG5cdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHJlc3VsdC5kZWphUmVzZXJ2ZU1lc3NhZ2UpIHtcclxuXHRcdFx0XHRzbmFja2JhclNob3dNZXNzYWdlKGAke3Jlc3VsdC5kZWphUmVzZXJ2ZU1lc3NhZ2V9YCk7XHJcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHRcdFx0c25hY2tiYXJTaG93TWVzc2FnZShgJHtyZXN1bHQubWVzc2FnZX1gLCAnc3VjY2VzcycpO1xyXG5cclxuXHRcdFx0XHQvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHQvLyBcdFJvdXRlci5wdXNoKCcvJyk7XHJcblx0XHRcdFx0Ly8gfSwgMzAwMCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHR7bG9hZGluZyAmJiA8Q2lyY3VsYXJQcm9ncmVzcyAvPn1cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG5cdFx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuXHRcdFx0XHRcdDxTdGVwcGVyXHJcblx0XHRcdFx0XHRcdGFsdGVybmF0aXZlTGFiZWxcclxuXHRcdFx0XHRcdFx0YWN0aXZlU3RlcD17YWN0aXZlU3RlcH1cclxuXHRcdFx0XHRcdFx0Y29ubmVjdG9yPXs8Q29sb3JsaWJDb25uZWN0b3IgLz59PlxyXG5cdFx0XHRcdFx0XHR7c3RlcHMubWFwKChsYWJlbCkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxTdGVwIGtleT17bGFiZWx9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFN0ZXBMYWJlbCBTdGVwSWNvbkNvbXBvbmVudD17Q29sb3JsaWJTdGVwSWNvbn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtsYWJlbH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvU3RlcExhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDwvU3RlcD5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8L1N0ZXBwZXI+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHR7YWN0aXZlU3RlcCArIDEgPT09IHN0ZXBzLmxlbmd0aCA/IChcclxuXHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0ey8qIFZvaXIgcG91dCBham91dGVyIGlzU3VibWl0ZWQgPT09IHRydWUgKi99XHJcblx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaW5zdHJ1Y3Rpb25zfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3JlY2FwKCl9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXthY3RpdmVTdGVwID09PSAwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVCYWNrfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0UmV0b3VyXHJcblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nc3VibWl0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdjb250YWluZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yPSdwcmltYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0VmFsaWRlclxyXG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnN0cnVjdGlvbnN9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Z2V0U3RlcENvbnRlbnQoYWN0aXZlU3RlcCl9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2FjdGl2ZVN0ZXAgPT09IDB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlQmFja31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRSZXRvdXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdjb250YWluZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I9J3ByaW1hcnknXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlTmV4dH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRTdWl2YW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxSZUNBUFRDSEFcclxuXHRcdFx0XHRcdFx0c2l0ZWtleT17UkVDQVBUQ0hBX1NFQ1JFVF9LRVl9XHJcblx0XHRcdFx0XHRcdHJlZj17cmVSZWZ9XHJcblx0XHRcdFx0XHRcdHNpemU9J2ludmlzaWJsZSdcclxuXHRcdFx0XHRcdFx0Ly8gb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9Db250YWluZXI+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTbmFja2JhcihSZXNlcnZhdGlvbkZvcm0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9