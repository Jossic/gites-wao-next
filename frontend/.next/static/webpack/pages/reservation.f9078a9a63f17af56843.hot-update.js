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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Step */ "./node_modules/@material-ui/core/esm/Step/index.js");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "./node_modules/@material-ui/core/esm/StepLabel/index.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Check */ "./node_modules/@material-ui/icons/Check.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Settings */ "./node_modules/@material-ui/icons/Settings.js");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_StepConnector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/StepConnector */ "./node_modules/@material-ui/core/esm/StepConnector/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_House__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/House */ "./node_modules/@material-ui/icons/House.js");
/* harmony import */ var _material_ui_icons_House__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_House__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/EmojiPeople */ "./node_modules/@material-ui/icons/EmojiPeople.js");
/* harmony import */ var _material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/CheckCircle */ "./node_modules/@material-ui/icons/CheckCircle.js");
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-date-range/dist/styles.css */ "./node_modules/react-date-range/dist/styles.css");
/* harmony import */ var react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-date-range/dist/theme/default.css */ "./node_modules/react-date-range/dist/theme/default.css");
/* harmony import */ var react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_date_range__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-date-range */ "./node_modules/react-date-range/dist/index.js");
/* harmony import */ var react_date_range__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_date_range__WEBPACK_IMPORTED_MODULE_22__);
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




var _jsxFileName = "C:\\Users\\gites\\Dropbox\\gites-wao\\frontend\\components\\reservation\\ReservationForm.js",
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
})(_material_ui_core_StepConnector__WEBPACK_IMPORTED_MODULE_13__["default"]);
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
      lineNumber: 95,
      columnNumber: 3
    }
  }, completed ? __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
    className: classes.completed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }) : __jsx("div", {
    className: classes.circle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
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
})(_material_ui_core_StepConnector__WEBPACK_IMPORTED_MODULE_13__["default"]);
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
    1: __jsx(_material_ui_icons_House__WEBPACK_IMPORTED_MODULE_16___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 6
      }
    }),
    2: __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 6
      }
    }),
    3: __jsx(_material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_17___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 6
      }
    }),
    4: __jsx(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_18___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 6
      }
    })
  };
  return __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.root, (_clsx2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_clsx2, classes.active, active), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_clsx2, classes.completed, completed), _clsx2)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
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

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_19__["useForm"])({
    mode: 'onChange',
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
      getValues = _useForm.getValues,
      errors = _useForm.errors,
      formState = _useForm.formState;

  var isValid = formState.isValid;
  console.log('formulaire est :', isValid);
  var isBreakpoint = useMediaQuery(768);
  var dateOptions = {
    locale: date_fns_locale_fr__WEBPACK_IMPORTED_MODULE_23___default.a
  };
  Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["startOfWeek"])(new Date(), dateOptions); // const [locale, setLocale] = React.useState('fr');

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
        lineNumber: 348,
        columnNumber: 3
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 4
      }
    }, "Informations sur la location"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["InputLabel"], {
      shrink: true,
      id: "demo-simple-select-placeholder-label-label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 6
      }
    }, "R\xE9servation sur le g\xEEte :"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_19__["Controller"], {
      control: control,
      rules: {
        required: 'Le gite est obligatoire'
      },
      helperText: errors.gite && __jsx("span", {
        style: {
          color: 'red'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363,
          columnNumber: 9
        }
      }, errors.gite.message),
      name: "gite",
      as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Select"], {
        id: "gite-select",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370,
          columnNumber: 8
        }
      }, gites.map(function (gite, i) {
        return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
          key: gite.slug,
          value: gite.slug,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 372,
            columnNumber: 10
          }
        }, gite.nom);
      })),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358,
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
      helperText: errors.nbPers && __jsx("span", {
        style: {
          color: 'red'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390,
          columnNumber: 8
        }
      }, errors.nbPers.message),
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380,
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
      helperText: errors.nbEnf && __jsx("span", {
        style: {
          color: 'red'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410,
          columnNumber: 8
        }
      }, errors.nbEnf.message),
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 400,
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
        lineNumber: 422,
        columnNumber: 5
      }
    }, __jsx(react_date_range__WEBPACK_IMPORTED_MODULE_22__["DateRange"], {
      className: classes.calendrier,
      minDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["addDays"])(new Date(), 0),
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
        lineNumber: 428,
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
        lineNumber: 443,
        columnNumber: 5
      }
    }, __jsx(react_date_range__WEBPACK_IMPORTED_MODULE_22__["DateRange"], {
      className: classes.calendrier,
      onChange: function onChange(item) {
        return handleChange(item);
      } // onChange={(item) => setState([item.selection])}
      ,
      showSelectionPreview: true,
      minDate: Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["addDays"])(new Date(), 0),
      name: "dateDF",
      moveRangeOnFirstSelection: false,
      months: 2,
      locale: date_fns_locale_fr__WEBPACK_IMPORTED_MODULE_23___default.a,
      ranges: state,
      direction: "horizontal",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 449,
        columnNumber: 6
      }
    })));
  };

  var infoComp = function infoComp() {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 467,
        columnNumber: 3
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 468,
        columnNumber: 4
      }
    }, "Informations suppl\xE9mentaires"), __jsx("div", {
      className: classes.root,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 469,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["FormControl"], {
      component: "fieldset",
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 470,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["FormLabel"], {
      component: "legend",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 473,
        columnNumber: 6
      }
    }, "Merci d'indiquer si vous nous avez d\xE9ja contact\xE9 par :"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["FormGroup"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 476,
        columnNumber: 6
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 477,
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
          lineNumber: 480,
          columnNumber: 10
        }
      }),
      label: "Mail",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 478,
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
          lineNumber: 490,
          columnNumber: 10
        }
      }),
      label: "T\xE9l\xE9phone",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 488,
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
          lineNumber: 500,
          columnNumber: 10
        }
      }),
      label: "Plateforme",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 498,
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
          lineNumber: 510,
          columnNumber: 10
        }
      }),
      label: "Aucun contact",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 508,
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
          lineNumber: 520,
          columnNumber: 10
        }
      }),
      label: "Autre",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 518,
        columnNumber: 8
      }
    })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 532,
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
        lineNumber: 533,
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
          lineNumber: 545,
          columnNumber: 8
        }
      }),
      label: "Souhaitez-vous l'option lit fait \xE0 l'arriv\xE9e ?",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 543,
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
          lineNumber: 556,
          columnNumber: 8
        }
      }),
      label: "Souscrire \xE0 notre newsletter pour b\xE9n\xE9ficier de remises et offres promotionnelles ?",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 554,
        columnNumber: 6
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      container: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 566,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 567,
        columnNumber: 6
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TextField"], {
      style: {
        width: '100%'
      },
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
        lineNumber: 568,
        columnNumber: 7
      }
    })))));
  };

  var Coord = function Coord() {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 586,
        columnNumber: 3
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 587,
        columnNumber: 4
      }
    }, "Vos coordonn\xE9es"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 589,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 590,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["InputLabel"], {
      shrink: true,
      id: "demo-simple-select-placeholder-label-label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 591,
        columnNumber: 6
      }
    }, "Civilit\xE9*"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_19__["Controller"], {
      control: control,
      rules: {
        required: 'La civilité est obligatoire'
      },
      helperText: errors.civilite && __jsx("span", {
        style: {
          color: 'red'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 601,
          columnNumber: 9
        }
      }, errors.civilite.message),
      name: "civilite",
      as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Select"], {
        id: "civilite-select",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 608,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "M. & Mme",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 609,
          columnNumber: 9
        }
      }, "M. & Mme"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "Mme",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 610,
          columnNumber: 9
        }
      }, "Mme"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "Mlle",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 611,
          columnNumber: 9
        }
      }, "Mlle"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "M.",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 612,
          columnNumber: 9
        }
      }, "M."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "Association",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 613,
          columnNumber: 9
        }
      }, "Association"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "Comit\xE9 d'entreprise",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 616,
          columnNumber: 9
        }
      }, "Comit\xE9 d'entreprise"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "Soci\xE9t\xE9",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 619,
          columnNumber: 9
        }
      }, "Soci\xE9t\xE9"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "Entreprise",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 620,
          columnNumber: 9
        }
      }, "Entreprise"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "Foyer de vie",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 623,
          columnNumber: 9
        }
      }, "Foyer de vie"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "Foyer d'accueil",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 626,
          columnNumber: 9
        }
      }, "Foyer d'accueil"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "Famille",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 629,
          columnNumber: 9
        }
      }, "Famille"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "Autres",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 630,
          columnNumber: 9
        }
      }, "Autres")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 596,
        columnNumber: 6
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TextField"], {
      inputRef: register({
        required: 'Le nom est obligatoire'
      }),
      name: "nom",
      id: "nom",
      label: "Nom*",
      helperText: errors.nom && __jsx("span", {
        style: {
          color: 'red'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 643,
          columnNumber: 8
        }
      }, errors.nom.message),
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 636,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TextField"], {
      inputRef: register({
        required: 'Le prénom est obligatoire'
      }),
      helperText: errors.prenom && __jsx("span", {
        style: {
          color: 'red'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 658,
          columnNumber: 8
        }
      }, errors.prenom.message),
      name: "prenom",
      id: "prenom",
      label: "Pr\xE9nom*",
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 652,
        columnNumber: 5
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 671,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TextField"], {
      inputRef: register({
        required: "L'adresse est obligatoire"
      }),
      helperText: errors.adresse && __jsx("span", {
        style: {
          color: 'red'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 678,
          columnNumber: 8
        }
      }, errors.adresse.message),
      name: "adresse",
      id: "adresse",
      label: "Adresse*",
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 672,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TextField"], {
      inputRef: register({
        required: 'Le code postal est obligatoire'
      }),
      helperText: errors.cp && __jsx("span", {
        style: {
          color: 'red'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 696,
          columnNumber: 8
        }
      }, errors.cp.message),
      name: "cp",
      id: "cp",
      label: "Code Postal*",
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 690,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TextField"], {
      inputRef: register({
        required: 'La ville est obligatoire'
      }),
      helperText: errors.ville && __jsx("span", {
        style: {
          color: 'red'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 714,
          columnNumber: 8
        }
      }, errors.ville.message),
      name: "ville",
      id: "ville",
      label: "Ville*",
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 708,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["FormControl"], {
      className: classes.formControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 726,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["InputLabel"], {
      shrink: true,
      id: "demo-simple-select-placeholder-label-label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 727,
        columnNumber: 6
      }
    }, "Pays*"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_19__["Controller"], {
      control: control,
      rules: {
        required: 'Le pays est obligatoire'
      },
      helperText: errors.pays && __jsx("span", {
        style: {
          color: 'red'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 738,
          columnNumber: 9
        }
      }, errors.pays.message),
      name: "pays",
      as: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["Select"], {
        id: "pays-select",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 745,
          columnNumber: 8
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "france",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 746,
          columnNumber: 9
        }
      }, "France"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 747,
          columnNumber: 9
        }
      }, "--------"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "autres",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 748,
          columnNumber: 9
        }
      }, "Autres"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "allemagne",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 749,
          columnNumber: 9
        }
      }, "Allemagne"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "angleterre",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 750,
          columnNumber: 9
        }
      }, "Angleterre"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "belgique",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 753,
          columnNumber: 9
        }
      }, "Belgique"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "hollande",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 754,
          columnNumber: 9
        }
      }, "Hollande"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "luxembourg",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 755,
          columnNumber: 9
        }
      }, "Luxembourg"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["MenuItem"], {
        value: "suisse",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 758,
          columnNumber: 9
        }
      }, "Suisse")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 733,
        columnNumber: 6
      }
    }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      container: true,
      justify: "space-around",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 764,
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
        lineNumber: 765,
        columnNumber: 5
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["TextField"], {
      inputRef: register({
        required: 'Le mail est obligatoire'
      }),
      helperText: errors.mail && __jsx("span", {
        style: {
          color: 'red'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 778,
          columnNumber: 8
        }
      }, errors.mail.message),
      name: "mail",
      id: "mail",
      label: "Email*",
      type: "mail",
      InputLabelProps: {
        shrink: true
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 774,
        columnNumber: 5
      }
    })));
  };

  var recap = function recap() {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 795,
        columnNumber: 3
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 797,
        columnNumber: 4
      }
    }, "R\xE9capitulatif de la location"), __jsx("span", {
      style: {
        fontStyle: 'italic',
        fontSize: '0.8rem'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 798,
        columnNumber: 4
      }
    }, "Un texte en rouge signifie que le champs \xE0 mal \xE9t\xE9 renseign\xE9"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      container: true,
      direction: "row",
      justify: "space-evenly",
      alignItems: "flex-start",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 801,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      item: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 806,
        columnNumber: 5
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 807,
        columnNumber: 6
      }
    }, "Location :"), __jsx("ul", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 808,
        columnNumber: 6
      }
    }, __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 809,
        columnNumber: 7
      }
    }, "Le gite :", ' ', !getValues().gite ? __jsx("span", {
      style: {
        color: 'red'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 812,
        columnNumber: 9
      }
    }, "G\xEEte manquant") : getValues().gite), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 819,
        columnNumber: 7
      }
    }, getValues().dateArrivee === getValues().dateDepart ? __jsx("span", {
      style: {
        color: 'red'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 822,
        columnNumber: 9
      }
    }, "Les dates ne peuvent pas \xEAtre identiques") : __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 826,
        columnNumber: 9
      }
    }, "Du", ' ', dayjs__WEBPACK_IMPORTED_MODULE_24___default()(getValues().dateArrivee).format('DD/MM/YYYY'), ' ', "au", ' ', dayjs__WEBPACK_IMPORTED_MODULE_24___default()(getValues().dateDepart).format('DD/MM/YYYY'))), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 838,
        columnNumber: 7
      }
    }, "Pour", ' ', !getValues().nbPers ? __jsx("span", {
      style: {
        color: 'red'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 841,
        columnNumber: 9
      }
    }, "Nombre de personnes manquant") : getValues().nbPers, ' ', "personnes dont", ' ', !getValues().nbEnf ? __jsx("span", {
      style: {
        color: 'red'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 849,
        columnNumber: 9
      }
    }, "Nombre d'enfant manquant") : getValues().nbEnf, ' ', "enfant(s)", ' ', getValues().nbChien && __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 857,
        columnNumber: 9
      }
    }, __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 858,
        columnNumber: 10
      }
    }), " ainsi que ", getValues().nbChien, ' ', "animaux")), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 863,
        columnNumber: 7
      }
    }, "Options :", ' ', getValues().litFait && 'Lits fait : Oui,', ' ', getValues().newsletter && 'Newsletter : Oui'))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      item: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 870,
        columnNumber: 5
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 871,
        columnNumber: 6
      }
    }, "Vos informations :"), __jsx("ul", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 872,
        columnNumber: 6
      }
    }, __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 873,
        columnNumber: 7
      }
    }, !getValues().civilite ? __jsx("span", {
      style: {
        color: 'red'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 875,
        columnNumber: 9
      }
    }, "Civilit\xE9 manquant") : getValues().civilite, ' ', !getValues().nom ? __jsx("span", {
      style: {
        color: 'red'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 882,
        columnNumber: 9
      }
    }, "Nom manquant") : getValues().nom, ' ', !getValues().prenom ? __jsx("span", {
      style: {
        color: 'red'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 889,
        columnNumber: 9
      }
    }, "Pr\xE9nom manquant") : getValues().prenom), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 896,
        columnNumber: 7
      }
    }, !getValues().adresse ? __jsx("span", {
      style: {
        color: 'red'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 898,
        columnNumber: 9
      }
    }, "Adresse manquante") : getValues().adresse, ' ', __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 904,
        columnNumber: 8
      }
    }), !getValues().cp ? __jsx("span", {
      style: {
        color: 'red'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 906,
        columnNumber: 9
      }
    }, "Code postal manquant") : getValues().cp, ' ', !getValues().ville ? __jsx("span", {
      style: {
        color: 'red'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 913,
        columnNumber: 9
      }
    }, "Ville manquante") : getValues().ville, ",", ' ', !getValues().pays ? __jsx("span", {
      style: {
        color: 'red'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 921,
        columnNumber: 9
      }
    }, "Pays manquant") : getValues().pays), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 928,
        columnNumber: 7
      }
    }, "T\xE9l\xE9phone : ", getValues().tel, " ", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 929,
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
        lineNumber: 935,
        columnNumber: 4
      }
    }, console.log(getValues().infoCompl), getValues().infoCompl !== '' && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 943,
        columnNumber: 7
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 944,
        columnNumber: 8
      }
    }, "Votre message :"), ' '), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_26__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 946,
        columnNumber: 7
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 947,
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
      lineNumber: 996,
      columnNumber: 3
    }
  }, loading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["CircularProgress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 997,
      columnNumber: 16
    }
  }), __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 999,
      columnNumber: 4
    }
  }, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1000,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_7__["default"], {
    alternativeLabel: true,
    activeStep: activeStep,
    connector: __jsx(ColorlibConnector, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1004,
        columnNumber: 18
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1001,
      columnNumber: 6
    }
  }, steps.map(function (label) {
    return __jsx(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1006,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {
      StepIconComponent: ColorlibStepIcon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1007,
        columnNumber: 9
      }
    }, label));
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1013,
      columnNumber: 6
    }
  }, activeStep + 1 === steps.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: classes.instructions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1017,
      columnNumber: 9
    }
  }, recap()), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
    disabled: activeStep === 0,
    onClick: handleBack,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1020,
      columnNumber: 9
    }
  }, "Retour"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
    type: "submit",
    variant: "contained",
    color: "primary",
    disabled: !isValid,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1026,
      columnNumber: 9
    }
  }, "Valider")) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1036,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: classes.instructions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1037,
      columnNumber: 9
    }
  }, getStepContent(activeStep)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1040,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
    disabled: activeStep === 0,
    onClick: handleBack,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1041,
      columnNumber: 10
    }
  }, "Retour"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "contained",
    color: "primary",
    onClick: handleNext,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1047,
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
      lineNumber: 1058,
      columnNumber: 6
    }
  }))));
};

_s4(ReservationForm, "62xG9gwAH67fddOJm+12OvDt9hs=", false, function () {
  return [useStyles, react_hook_form__WEBPACK_IMPORTED_MODULE_19__["useForm"], useMediaQuery];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXNlcnZhdGlvbi9SZXNlcnZhdGlvbkZvcm0uanMiXSwibmFtZXMiOlsiUW9udG9Db25uZWN0b3IiLCJ3aXRoU3R5bGVzIiwiYWx0ZXJuYXRpdmVMYWJlbCIsInRvcCIsImxlZnQiLCJyaWdodCIsImFjdGl2ZSIsImJvcmRlckNvbG9yIiwiY29tcGxldGVkIiwibGluZSIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwiU3RlcENvbm5lY3RvciIsInVzZVFvbnRvU3RlcEljb25TdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImNvbG9yIiwiZGlzcGxheSIsImhlaWdodCIsImFsaWduSXRlbXMiLCJjaXJjbGUiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsImZvbnRTaXplIiwiUW9udG9TdGVwSWNvbiIsInByb3BzIiwiY2xhc3NlcyIsImNsc3giLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiQ29sb3JsaWJDb25uZWN0b3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJib3JkZXIiLCJ1c2VDb2xvcmxpYlN0ZXBJY29uU3R5bGVzIiwianVzdGlmeUNvbnRlbnQiLCJib3hTaGFkb3ciLCJDb2xvcmxpYlN0ZXBJY29uIiwiaWNvbnMiLCJTdHJpbmciLCJpY29uIiwibm9kZSIsInVzZVN0eWxlcyIsInRoZW1lIiwiYnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwiaW5zdHJ1Y3Rpb25zIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiZm9ybUNvbnRyb2wiLCJtYXJnaW4iLCJtaW5XaWR0aCIsInNlbGVjdEVtcHR5IiwiZ2V0U3RlcHMiLCJ1c2VNZWRpYVF1ZXJ5IiwidXNlU3RhdGUiLCJ0YXJnZXRSZWFjaGVkIiwic2V0VGFyZ2V0UmVhY2hlZCIsInVwZGF0ZVRhcmdldCIsInVzZUNhbGxiYWNrIiwiZSIsIm1hdGNoZXMiLCJ1c2VFZmZlY3QiLCJtZWRpYSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJhZGRMaXN0ZW5lciIsInJlbW92ZUxpc3RlbmVyIiwiUmVzZXJ2YXRpb25Gb3JtIiwic25hY2tiYXJTaG93TWVzc2FnZSIsImdpdGVzIiwiYWN0aXZlU3RlcCIsInNldEFjdGl2ZVN0ZXAiLCJ1c2VGb3JtIiwibW9kZSIsInJlVmFsaWRhdGVNb2RlIiwic2hvdWxkVW5yZWdpc3RlciIsImRlZmF1bHRWYWx1ZXMiLCJuYlBlcnMiLCJuYkVuZiIsIm5iQ2hpZW4iLCJsaXRGYWl0IiwibmV3c2xldHRlciIsIm5vbSIsInByZW5vbSIsImFkcmVzc2UiLCJjcCIsInZpbGxlIiwidGVsIiwibWFpbCIsImNvbnRyb2wiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInNldFZhbHVlIiwiZ2V0VmFsdWVzIiwiZXJyb3JzIiwiZm9ybVN0YXRlIiwiaXNWYWxpZCIsImNvbnNvbGUiLCJsb2ciLCJpc0JyZWFrcG9pbnQiLCJkYXRlT3B0aW9ucyIsImxvY2FsZSIsImZyIiwic3RhcnRPZldlZWsiLCJEYXRlIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImtleSIsInN0YXRlIiwic2V0U3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJpdGVtIiwic2VsZWN0aW9uIiwiZGF5anMiLCJmb3JtYXQiLCJSZWFjdCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVSZWYiLCJ1c2VSZWYiLCJzdGVwcyIsImhhbmRsZU5leHQiLCJwcmV2QWN0aXZlU3RlcCIsImhhbmRsZUJhY2siLCJoYW5kbGVSZXNldCIsImluZm9Mb2MiLCJyZXF1aXJlZCIsImdpdGUiLCJtZXNzYWdlIiwibWFwIiwiaSIsInNsdWciLCJzaHJpbmsiLCJwYWRkaW5nVG9wIiwiY2FsZW5kcmllciIsImFkZERheXMiLCJpbmZvQ29tcCIsIkNvb3JkIiwiY2l2aWxpdGUiLCJwYXlzIiwicmVjYXAiLCJmb250U3R5bGUiLCJkYXRlQXJyaXZlZSIsImRhdGVEZXBhcnQiLCJpbmZvQ29tcGwiLCJnZXRTdGVwQ29udGVudCIsInN0ZXAiLCJvblN1Ym1pdCIsImRhdGEiLCJjdXJyZW50IiwiZXhlY3V0ZUFzeW5jIiwidG9rZW4iLCJyZXNldCIsImNyZWF0ZVJlc2VydmF0aW9uIiwidGhlbiIsInJlc3VsdCIsImVycm9yIiwiZGVqYVJlc2VydmVNZXNzYWdlIiwibGFiZWwiLCJsZW5ndGgiLCJSRUNBUFRDSEFfU0VDUkVUX0tFWSIsIndpdGhTbmFja2JhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsY0FBYyxHQUFHQywyRUFBVSxDQUFDO0FBQ2pDQyxrQkFBZ0IsRUFBRTtBQUNqQkMsT0FBRyxFQUFFLEVBRFk7QUFFakJDLFFBQUksRUFBRSxtQkFGVztBQUdqQkMsU0FBSyxFQUFFO0FBSFUsR0FEZTtBQU1qQ0MsUUFBTSxFQUFFO0FBQ1AsZUFBVztBQUNWQyxpQkFBVyxFQUFFO0FBREg7QUFESixHQU55QjtBQVdqQ0MsV0FBUyxFQUFFO0FBQ1YsZUFBVztBQUNWRCxpQkFBVyxFQUFFO0FBREg7QUFERCxHQVhzQjtBQWdCakNFLE1BQUksRUFBRTtBQUNMRixlQUFXLEVBQUUsU0FEUjtBQUVMRyxrQkFBYyxFQUFFLENBRlg7QUFHTEMsZ0JBQVksRUFBRTtBQUhUO0FBaEIyQixDQUFELENBQVYsQ0FxQnBCQyx3RUFyQm9CLENBQXZCO0FBdUJBLElBQU1DLHNCQUFzQixHQUFHQywyRUFBVSxDQUFDO0FBQ3pDQyxNQUFJLEVBQUU7QUFDTEMsU0FBSyxFQUFFLFNBREY7QUFFTEMsV0FBTyxFQUFFLE1BRko7QUFHTEMsVUFBTSxFQUFFLEVBSEg7QUFJTEMsY0FBVSxF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ZjU2ODQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBTdGVwcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBwZXInO1xyXG5pbXBvcnQgeyBhZGREYXlzIH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgU3RlcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdGVwJztcclxuaW1wb3J0IFN0ZXBMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdGVwTGFiZWwnO1xyXG5pbXBvcnQgQ2hlY2sgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrJztcclxuaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2V0dGluZ3MnO1xyXG5pbXBvcnQgU3RlcENvbm5lY3RvciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdGVwQ29ubmVjdG9yJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEhvdXNlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSG91c2UnO1xyXG5pbXBvcnQgRW1vamlQZW9wbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FbW9qaVBlb3BsZSc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciwgYXBwZW5kRXJyb3JzIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0ICdyZWFjdC1kYXRlLXJhbmdlL2Rpc3Qvc3R5bGVzLmNzcyc7XHJcbmltcG9ydCAncmVhY3QtZGF0ZS1yYW5nZS9kaXN0L3RoZW1lL2RlZmF1bHQuY3NzJztcclxuaW1wb3J0IHsgRGF0ZVJhbmdlIH0gZnJvbSAncmVhY3QtZGF0ZS1yYW5nZSc7XHJcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgZnIgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2ZyJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IHtcclxuXHRDaGVja2JveCxcclxuXHRDb250YWluZXIsXHJcblx0Rm9ybUNvbnRyb2wsXHJcblx0Rm9ybUNvbnRyb2xMYWJlbCxcclxuXHRGb3JtR3JvdXAsXHJcblx0Rm9ybUxhYmVsLFxyXG5cdElucHV0TGFiZWwsXHJcblx0TWVudUl0ZW0sXHJcblx0U2VsZWN0LFxyXG5cdFN3aXRjaCxcclxuXHRUZXh0RmllbGQsXHJcblx0Q2lyY3VsYXJQcm9ncmVzcyxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgeyBjcmVhdGVSZXNlcnZhdGlvbiB9IGZyb20gJy4uLy4uL2FjdGlvbnMvcmVzZXJ2YXRpb25BY3Rpb25zJztcclxuaW1wb3J0IFJlQ0FQVENIQSBmcm9tICdyZWFjdC1nb29nbGUtcmVjYXB0Y2hhJztcclxuaW1wb3J0IHsgUkVDQVBUQ0hBX1NFQ1JFVF9LRVkgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQgeyB3aXRoU25hY2tiYXIgfSBmcm9tICcuLi9IT0MvU25hY2tiYXInO1xyXG5cclxuY29uc3QgUW9udG9Db25uZWN0b3IgPSB3aXRoU3R5bGVzKHtcclxuXHRhbHRlcm5hdGl2ZUxhYmVsOiB7XHJcblx0XHR0b3A6IDEwLFxyXG5cdFx0bGVmdDogJ2NhbGMoLTUwJSArIDE2cHgpJyxcclxuXHRcdHJpZ2h0OiAnY2FsYyg1MCUgKyAxNnB4KScsXHJcblx0fSxcclxuXHRhY3RpdmU6IHtcclxuXHRcdCcmICRsaW5lJzoge1xyXG5cdFx0XHRib3JkZXJDb2xvcjogJyM3ODRhZjQnLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGNvbXBsZXRlZDoge1xyXG5cdFx0JyYgJGxpbmUnOiB7XHJcblx0XHRcdGJvcmRlckNvbG9yOiAnIzc4NGFmNCcsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0bGluZToge1xyXG5cdFx0Ym9yZGVyQ29sb3I6ICcjZWFlYWYwJyxcclxuXHRcdGJvcmRlclRvcFdpZHRoOiAzLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAxLFxyXG5cdH0sXHJcbn0pKFN0ZXBDb25uZWN0b3IpO1xyXG5cclxuY29uc3QgdXNlUW9udG9TdGVwSWNvblN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdGNvbG9yOiAnI2VhZWFmMCcsXHJcblx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRoZWlnaHQ6IDIyLFxyXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0fSxcclxuXHRhY3RpdmU6IHtcclxuXHRcdGNvbG9yOiAnIzc4NGFmNCcsXHJcblx0fSxcclxuXHRjaXJjbGU6IHtcclxuXHRcdHdpZHRoOiA4LFxyXG5cdFx0aGVpZ2h0OiA4LFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAnNTAlJyxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcicsXHJcblx0fSxcclxuXHRjb21wbGV0ZWQ6IHtcclxuXHRcdGNvbG9yOiAnIzc4NGFmNCcsXHJcblx0XHR6SW5kZXg6IDEsXHJcblx0XHRmb250U2l6ZTogMTgsXHJcblx0fSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBRb250b1N0ZXBJY29uKHByb3BzKSB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVFvbnRvU3RlcEljb25TdHlsZXMoKTtcclxuXHRjb25zdCB7IGFjdGl2ZSwgY29tcGxldGVkIH0gPSBwcm9wcztcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwge1xyXG5cdFx0XHRcdFtjbGFzc2VzLmFjdGl2ZV06IGFjdGl2ZSxcclxuXHRcdFx0fSl9PlxyXG5cdFx0XHR7Y29tcGxldGVkID8gKFxyXG5cdFx0XHRcdDxDaGVjayBjbGFzc05hbWU9e2NsYXNzZXMuY29tcGxldGVkfSAvPlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNpcmNsZX0gLz5cclxuXHRcdFx0KX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcblFvbnRvU3RlcEljb24ucHJvcFR5cGVzID0ge1xyXG5cdC8qKlxyXG5cdCAqIFdoZXRoZXIgdGhpcyBzdGVwIGlzIGFjdGl2ZS5cclxuXHQgKi9cclxuXHRhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxyXG5cdC8qKlxyXG5cdCAqIE1hcmsgdGhlIHN0ZXAgYXMgY29tcGxldGVkLiBJcyBwYXNzZWQgdG8gY2hpbGQgY29tcG9uZW50cy5cclxuXHQgKi9cclxuXHRjb21wbGV0ZWQ6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuY29uc3QgQ29sb3JsaWJDb25uZWN0b3IgPSB3aXRoU3R5bGVzKHtcclxuXHRhbHRlcm5hdGl2ZUxhYmVsOiB7XHJcblx0XHR0b3A6IDIyLFxyXG5cdH0sXHJcblx0YWN0aXZlOiB7XHJcblx0XHQnJiAkbGluZSc6IHtcclxuXHRcdFx0YmFja2dyb3VuZEltYWdlOlxyXG5cdFx0XHRcdCdsaW5lYXItZ3JhZGllbnQoIDk1ZGVnLHJnYigyNDIsMTEzLDMzKSAwJSxyZ2IoMjMzLDY0LDg3KSA1MCUscmdiKDEzOCwzNSwxMzUpIDEwMCUpJyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRjb21wbGV0ZWQ6IHtcclxuXHRcdCcmICRsaW5lJzoge1xyXG5cdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6XHJcblx0XHRcdFx0J2xpbmVhci1ncmFkaWVudCggOTVkZWcscmdiKDI0MiwxMTMsMzMpIDAlLHJnYigyMzMsNjQsODcpIDUwJSxyZ2IoMTM4LDM1LDEzNSkgMTAwJSknLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGxpbmU6IHtcclxuXHRcdGhlaWdodDogMyxcclxuXHRcdGJvcmRlcjogMCxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJyNlYWVhZjAnLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAxLFxyXG5cdH0sXHJcbn0pKFN0ZXBDb25uZWN0b3IpO1xyXG5cclxuY29uc3QgdXNlQ29sb3JsaWJTdGVwSWNvblN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJyNjY2MnLFxyXG5cdFx0ekluZGV4OiAxLFxyXG5cdFx0Y29sb3I6ICcjZmZmJyxcclxuXHRcdHdpZHRoOiA1MCxcclxuXHRcdGhlaWdodDogNTAsXHJcblx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0fSxcclxuXHRhY3RpdmU6IHtcclxuXHRcdGJhY2tncm91bmRJbWFnZTpcclxuXHRcdFx0J2xpbmVhci1ncmFkaWVudCggMTM2ZGVnLCByZ2IoMjQyLDExMywzMykgMCUsIHJnYigyMzMsNjQsODcpIDUwJSwgcmdiKDEzOCwzNSwxMzUpIDEwMCUpJyxcclxuXHRcdGJveFNoYWRvdzogJzAgNHB4IDEwcHggMCByZ2JhKDAsMCwwLC4yNSknLFxyXG5cdH0sXHJcblx0Y29tcGxldGVkOiB7XHJcblx0XHRiYWNrZ3JvdW5kSW1hZ2U6XHJcblx0XHRcdCdsaW5lYXItZ3JhZGllbnQoIDEzNmRlZywgcmdiKDI0MiwxMTMsMzMpIDAlLCByZ2IoMjMzLDY0LDg3KSA1MCUsIHJnYigxMzgsMzUsMTM1KSAxMDAlKScsXHJcblx0fSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBDb2xvcmxpYlN0ZXBJY29uKHByb3BzKSB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZUNvbG9ybGliU3RlcEljb25TdHlsZXMoKTtcclxuXHRjb25zdCB7IGFjdGl2ZSwgY29tcGxldGVkIH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgaWNvbnMgPSB7XHJcblx0XHQxOiA8SG91c2VJY29uIC8+LFxyXG5cdFx0MjogPFNldHRpbmdzSWNvbiAvPixcclxuXHRcdDM6IDxFbW9qaVBlb3BsZUljb24gLz4sXHJcblx0XHQ0OiA8Q2hlY2tDaXJjbGVJY29uIC8+LFxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsIHtcclxuXHRcdFx0XHRbY2xhc3Nlcy5hY3RpdmVdOiBhY3RpdmUsXHJcblx0XHRcdFx0W2NsYXNzZXMuY29tcGxldGVkXTogY29tcGxldGVkLFxyXG5cdFx0XHR9KX0+XHJcblx0XHRcdHtpY29uc1tTdHJpbmcocHJvcHMuaWNvbildfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuQ29sb3JsaWJTdGVwSWNvbi5wcm9wVHlwZXMgPSB7XHJcblx0LyoqXHJcblx0ICogV2hldGhlciB0aGlzIHN0ZXAgaXMgYWN0aXZlLlxyXG5cdCAqL1xyXG5cdGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXHJcblx0LyoqXHJcblx0ICogTWFyayB0aGUgc3RlcCBhcyBjb21wbGV0ZWQuIElzIHBhc3NlZCB0byBjaGlsZCBjb21wb25lbnRzLlxyXG5cdCAqL1xyXG5cdGNvbXBsZXRlZDogUHJvcFR5cGVzLmJvb2wsXHJcblx0LyoqXHJcblx0ICogVGhlIGxhYmVsIGRpc3BsYXllZCBpbiB0aGUgc3RlcCBpY29uLlxyXG5cdCAqL1xyXG5cdGljb246IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0cm9vdDoge1xyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHR9LFxyXG5cdGJ1dHRvbjoge1xyXG5cdFx0bWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0fSxcclxuXHRpbnN0cnVjdGlvbnM6IHtcclxuXHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygxKSxcclxuXHR9LFxyXG5cdGZvcm1Db250cm9sOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHRtaW5XaWR0aDogMTIwLFxyXG5cdH0sXHJcblx0c2VsZWN0RW1wdHk6IHtcclxuXHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuXHR9LFxyXG5cdC8vIGNhbGVuZHJpZXI6IHtcclxuXHQvLyBcdGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG5cdC8vIH0sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIGdldFN0ZXBzKCkge1xyXG5cdHJldHVybiBbXHJcblx0XHQnSW5mb3JtYXRpb24gc3VyIGxhIGxvY2F0aW9uJyxcclxuXHRcdCdJbmZvcm1hdGlvbnMgY29tcGzDqW1lbnRhaXJlcycsXHJcblx0XHQnVm9zIGNvb3Jkb25uw6llcycsXHJcblx0XHQnUsOpY2FwaXR1bGF0aWYnLFxyXG5cdF07XHJcbn1cclxuXHJcbmNvbnN0IHVzZU1lZGlhUXVlcnkgPSAod2lkdGgpID0+IHtcclxuXHRjb25zdCBbdGFyZ2V0UmVhY2hlZCwgc2V0VGFyZ2V0UmVhY2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdGNvbnN0IHVwZGF0ZVRhcmdldCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcblx0XHRpZiAoZS5tYXRjaGVzKSB7XHJcblx0XHRcdHNldFRhcmdldFJlYWNoZWQodHJ1ZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZXRUYXJnZXRSZWFjaGVkKGZhbHNlKTtcclxuXHRcdH1cclxuXHR9LCBbXSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBtZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKGAobWF4LXdpZHRoOiAke3dpZHRofXB4KWApO1xyXG5cdFx0bWVkaWEuYWRkTGlzdGVuZXIodXBkYXRlVGFyZ2V0KTtcclxuXHJcblx0XHQvLyBDaGVjayBvbiBtb3VudCAoY2FsbGJhY2sgaXMgbm90IGNhbGxlZCB1bnRpbCBhIGNoYW5nZSBvY2N1cnMpXHJcblx0XHRpZiAobWVkaWEubWF0Y2hlcykge1xyXG5cdFx0XHRzZXRUYXJnZXRSZWFjaGVkKHRydWUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiAoKSA9PiBtZWRpYS5yZW1vdmVMaXN0ZW5lcih1cGRhdGVUYXJnZXQpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIHRhcmdldFJlYWNoZWQ7XHJcbn07XHJcblxyXG5jb25zdCBSZXNlcnZhdGlvbkZvcm0gPSAoeyBzbmFja2JhclNob3dNZXNzYWdlLCBnaXRlcyB9KSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IFthY3RpdmVTdGVwLCBzZXRBY3RpdmVTdGVwXSA9IHVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IHtcclxuXHRcdGNvbnRyb2wsXHJcblx0XHRyZWdpc3RlcixcclxuXHRcdGhhbmRsZVN1Ym1pdCxcclxuXHRcdHNldFZhbHVlLFxyXG5cdFx0Z2V0VmFsdWVzLFxyXG5cdFx0ZXJyb3JzLFxyXG5cdFx0Zm9ybVN0YXRlLFxyXG5cdH0gPSB1c2VGb3JtKHtcclxuXHRcdG1vZGU6ICdvbkNoYW5nZScsXHJcblx0XHRyZVZhbGlkYXRlTW9kZTogJ29uQ2hhbmdlJyxcclxuXHRcdHNob3VsZFVucmVnaXN0ZXI6IGZhbHNlLFxyXG5cdFx0ZGVmYXVsdFZhbHVlczoge1xyXG5cdFx0XHRuYlBlcnM6IDEwLFxyXG5cdFx0XHRuYkVuZjogNSxcclxuXHRcdFx0bmJDaGllbjogMSxcclxuXHRcdFx0bGl0RmFpdDogdHJ1ZSxcclxuXHRcdFx0bmV3c2xldHRlcjogdHJ1ZSxcclxuXHRcdFx0bm9tOiAnTGFwaWVycmUnLFxyXG5cdFx0XHRwcmVub206ICdKb3NzaWMnLFxyXG5cdFx0XHRhZHJlc3NlOiAnMTggcnVlIHRlc3QnLFxyXG5cdFx0XHRjcDogJzUxMDAwJyxcclxuXHRcdFx0dmlsbGU6ICdtYVZpbGxlJyxcclxuXHRcdFx0dGVsOiAnMDYgMTUgNTUgNTUgNTUnLFxyXG5cdFx0XHRtYWlsOiAnam9zc2ljLmxhcGllcnJlQGdtYWlsLmNvbScsXHJcblx0XHR9LFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCB7IGlzVmFsaWQgfSA9IGZvcm1TdGF0ZTtcclxuXHJcblx0Y29uc29sZS5sb2coJ2Zvcm11bGFpcmUgZXN0IDonLCBpc1ZhbGlkKTtcclxuXHJcblx0Y29uc3QgaXNCcmVha3BvaW50ID0gdXNlTWVkaWFRdWVyeSg3NjgpO1xyXG5cclxuXHRjb25zdCBkYXRlT3B0aW9ucyA9IHsgbG9jYWxlOiBmciB9O1xyXG5cdHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKCksIGRhdGVPcHRpb25zKTtcclxuXHJcblx0Ly8gY29uc3QgW2xvY2FsZSwgc2V0TG9jYWxlXSA9IFJlYWN0LnVzZVN0YXRlKCdmcicpO1xyXG5cclxuXHRjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKFtcclxuXHRcdHtcclxuXHRcdFx0c3RhcnREYXRlOiBuZXcgRGF0ZSgpLFxyXG5cdFx0XHRlbmREYXRlOiBuZXcgRGF0ZSgpLFxyXG5cdFx0XHRrZXk6ICdzZWxlY3Rpb24nLFxyXG5cdFx0fSxcclxuXHRdKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKGl0ZW0pID0+IHtcclxuXHRcdHNldFN0YXRlKFtpdGVtLnNlbGVjdGlvbl0pO1xyXG5cclxuXHRcdHNldFZhbHVlKFxyXG5cdFx0XHQnZGF0ZUFycml2ZWUnLFxyXG5cdFx0XHRkYXlqcyhpdGVtLnNlbGVjdGlvbi5zdGFydERhdGUpLmZvcm1hdCgnTU0vREQvWVlZWScpXHJcblx0XHQpO1xyXG5cdFx0c2V0VmFsdWUoXHJcblx0XHRcdCdkYXRlRGVwYXJ0JyxcclxuXHRcdFx0ZGF5anMoaXRlbS5zZWxlY3Rpb24uZW5kRGF0ZSkuZm9ybWF0KCdNTS9ERC9ZWVlZJylcclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0UmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHJlZ2lzdGVyKCdkYXRlQXJyaXZlZScpOyAvLyBjdXN0b20gcmVnaXN0ZXJcclxuXHRcdHJlZ2lzdGVyKCdkYXRlRGVwYXJ0Jyk7IC8vIGN1c3RvbSByZWdpc3RlclxyXG5cdH0sIFtyZWdpc3Rlcl0pO1xyXG5cclxuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdGNvbnN0IHJlUmVmID0gdXNlUmVmKCk7XHJcblxyXG5cdGNvbnN0IHN0ZXBzID0gZ2V0U3RlcHMoKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcclxuXHRcdHNldEFjdGl2ZVN0ZXAoKHByZXZBY3RpdmVTdGVwKSA9PiBwcmV2QWN0aXZlU3RlcCArIDEpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUJhY2sgPSAoKSA9PiB7XHJcblx0XHRzZXRBY3RpdmVTdGVwKChwcmV2QWN0aXZlU3RlcCkgPT4gcHJldkFjdGl2ZVN0ZXAgLSAxKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcclxuXHRcdHNldEFjdGl2ZVN0ZXAoMCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaW5mb0xvYyA9ICgpID0+IChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPScnPlxyXG5cdFx0XHQ8aDI+SW5mb3JtYXRpb25zIHN1ciBsYSBsb2NhdGlvbjwvaDI+XHJcblxyXG5cdFx0XHQ8R3JpZCBjb250YWluZXIganVzdGlmeT0nc3BhY2UtYXJvdW5kJz5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdDxJbnB1dExhYmVsXHJcblx0XHRcdFx0XHRcdHNocmlua1xyXG5cdFx0XHRcdFx0XHRpZD0nZGVtby1zaW1wbGUtc2VsZWN0LXBsYWNlaG9sZGVyLWxhYmVsLWxhYmVsJz5cclxuXHRcdFx0XHRcdFx0UsOpc2VydmF0aW9uIHN1ciBsZSBnw650ZSA6XHJcblx0XHRcdFx0XHQ8L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0XHRydWxlcz17eyByZXF1aXJlZDogJ0xlIGdpdGUgZXN0IG9ibGlnYXRvaXJlJyB9fVxyXG5cdFx0XHRcdFx0XHRoZWxwZXJUZXh0PXtcclxuXHRcdFx0XHRcdFx0XHRlcnJvcnMuZ2l0ZSAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtlcnJvcnMuZ2l0ZS5tZXNzYWdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRuYW1lPSdnaXRlJ1xyXG5cdFx0XHRcdFx0XHRhcz17XHJcblx0XHRcdFx0XHRcdFx0PFNlbGVjdCBpZD0nZ2l0ZS1zZWxlY3QnPlxyXG5cdFx0XHRcdFx0XHRcdFx0e2dpdGVzLm1hcCgoZ2l0ZSwgaSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0ga2V5PXtnaXRlLnNsdWd9IHZhbHVlPXtnaXRlLnNsdWd9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtnaXRlLm5vbX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdDwvU2VsZWN0PlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyKHtcclxuXHRcdFx0XHRcdFx0cmVxdWlyZWQ6ICdMZSBub21icmUgZGUgcGVyc29ubmVzIGVzdCBvYmxpZ2F0b2lyZScsXHJcblx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdG5hbWU9J25iUGVycydcclxuXHRcdFx0XHRcdGlkPSduYlBlcnMnXHJcblx0XHRcdFx0XHRsYWJlbD0nTm9tYnJlIGRlIHBlcnNvbm5lcyB0b3RhbCdcclxuXHRcdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRcdGhlbHBlclRleHQ9e1xyXG5cdFx0XHRcdFx0XHRlcnJvcnMubmJQZXJzICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHR7ZXJyb3JzLm5iUGVycy5tZXNzYWdlfVxyXG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyKHtcclxuXHRcdFx0XHRcdFx0cmVxdWlyZWQ6IFwiTGUgbm9tYnJlIGQnZW5mYW50cyBlc3Qgb2JsaWdhdG9pcmVcIixcclxuXHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0bmFtZT0nbmJFbmYnXHJcblx0XHRcdFx0XHRpZD0nbmJFbmYnXHJcblx0XHRcdFx0XHRsYWJlbD0nRG9udCBlbmZhbnRzIGRlIG1vaW5zIGRlIDE4IGFucydcclxuXHRcdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRcdGhlbHBlclRleHQ9e1xyXG5cdFx0XHRcdFx0XHRlcnJvcnMubmJFbmYgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdHtlcnJvcnMubmJFbmYubWVzc2FnZX1cclxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvR3JpZD5cclxuXHJcblx0XHRcdHtpc0JyZWFrcG9pbnQgPyAoXHJcblx0XHRcdFx0PEdyaWRcclxuXHRcdFx0XHRcdGNvbnRhaW5lclxyXG5cdFx0XHRcdFx0ZGlyZWN0aW9uPSdyb3cnXHJcblx0XHRcdFx0XHRqdXN0aWZ5PSdjZW50ZXInXHJcblx0XHRcdFx0XHRhbGlnbkl0ZW1zPSdjZW50ZXInXHJcblx0XHRcdFx0XHRzdHlsZT17eyBwYWRkaW5nVG9wOiAnMjBweCcgfX0+XHJcblx0XHRcdFx0XHQ8RGF0ZVJhbmdlXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5jYWxlbmRyaWVyfVxyXG5cdFx0XHRcdFx0XHRtaW5EYXRlPXthZGREYXlzKG5ldyBEYXRlKCksIDApfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGl0ZW0pID0+IGhhbmRsZUNoYW5nZShpdGVtKX1cclxuXHRcdFx0XHRcdFx0Ly8gb25DaGFuZ2U9eyhpdGVtKSA9PiBzZXRTdGF0ZShbaXRlbS5zZWxlY3Rpb25dKX1cclxuXHRcdFx0XHRcdFx0c2hvd1NlbGVjdGlvblByZXZpZXc9e3RydWV9XHJcblx0XHRcdFx0XHRcdG5hbWU9J2RhdGVERidcclxuXHRcdFx0XHRcdFx0bW92ZVJhbmdlT25GaXJzdFNlbGVjdGlvbj17ZmFsc2V9XHJcblx0XHRcdFx0XHRcdG1vbnRocz17MX1cclxuXHRcdFx0XHRcdFx0bG9jYWxlPXtmcn1cclxuXHRcdFx0XHRcdFx0cmFuZ2VzPXtzdGF0ZX1cclxuXHRcdFx0XHRcdFx0ZGlyZWN0aW9uPSdob3Jpem9udGFsJ1xyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdCkgOiAoXHJcblx0XHRcdFx0PEdyaWRcclxuXHRcdFx0XHRcdGNvbnRhaW5lclxyXG5cdFx0XHRcdFx0ZGlyZWN0aW9uPSdyb3cnXHJcblx0XHRcdFx0XHRqdXN0aWZ5PSdjZW50ZXInXHJcblx0XHRcdFx0XHRhbGlnbkl0ZW1zPSdjZW50ZXInXHJcblx0XHRcdFx0XHRzdHlsZT17eyBwYWRkaW5nVG9wOiAnMjBweCcgfX0+XHJcblx0XHRcdFx0XHQ8RGF0ZVJhbmdlXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5jYWxlbmRyaWVyfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGl0ZW0pID0+IGhhbmRsZUNoYW5nZShpdGVtKX1cclxuXHRcdFx0XHRcdFx0Ly8gb25DaGFuZ2U9eyhpdGVtKSA9PiBzZXRTdGF0ZShbaXRlbS5zZWxlY3Rpb25dKX1cclxuXHRcdFx0XHRcdFx0c2hvd1NlbGVjdGlvblByZXZpZXc9e3RydWV9XHJcblx0XHRcdFx0XHRcdG1pbkRhdGU9e2FkZERheXMobmV3IERhdGUoKSwgMCl9XHJcblx0XHRcdFx0XHRcdG5hbWU9J2RhdGVERidcclxuXHRcdFx0XHRcdFx0bW92ZVJhbmdlT25GaXJzdFNlbGVjdGlvbj17ZmFsc2V9XHJcblx0XHRcdFx0XHRcdG1vbnRocz17Mn1cclxuXHRcdFx0XHRcdFx0bG9jYWxlPXtmcn1cclxuXHRcdFx0XHRcdFx0cmFuZ2VzPXtzdGF0ZX1cclxuXHRcdFx0XHRcdFx0ZGlyZWN0aW9uPSdob3Jpem9udGFsJ1xyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdCl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cdGNvbnN0IGluZm9Db21wID0gKCkgPT4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGgyPkluZm9ybWF0aW9ucyBzdXBwbMOpbWVudGFpcmVzPC9oMj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcblx0XHRcdFx0PEZvcm1Db250cm9sXHJcblx0XHRcdFx0XHRjb21wb25lbnQ9J2ZpZWxkc2V0J1xyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdDxGb3JtTGFiZWwgY29tcG9uZW50PSdsZWdlbmQnPlxyXG5cdFx0XHRcdFx0XHRNZXJjaSBkJ2luZGlxdWVyIHNpIHZvdXMgbm91cyBhdmV6IGTDqWphIGNvbnRhY3TDqSBwYXIgOlxyXG5cdFx0XHRcdFx0PC9Gb3JtTGFiZWw+XHJcblx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXIganVzdGlmeT0nc3BhY2UtYXJvdW5kJz5cclxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xMYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udHJvbD17XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxDaGVja2JveFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J2NvbnRhY3RNYWlsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2ZhbHNlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9J01haWwnXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xMYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udHJvbD17XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxDaGVja2JveFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J2NvbnRhY3RUZWwnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17ZmFsc2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD0nVMOpbMOpcGhvbmUnXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xMYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udHJvbD17XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxDaGVja2JveFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J2NvbnRhY3RBYnJpdGVsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2ZhbHNlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9J1BsYXRlZm9ybWUnXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xMYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udHJvbD17XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxDaGVja2JveFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J2NvbnRhY3RMZWJvbmNvaW4nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17ZmFsc2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD0nQXVjdW4gY29udGFjdCdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250cm9sPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PENoZWNrYm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nY29udGFjdEF1dHJlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2ZhbHNlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9J0F1dHJlJ1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0ey8qIDxGb3JtSGVscGVyVGV4dD5CZSBjYXJlZnVsPC9Gb3JtSGVscGVyVGV4dD4gKi99XHJcblx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXIganVzdGlmeT0nc3BhY2UtYXJvdW5kJz5cclxuXHRcdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRuYW1lPSduYkNoaWVuJ1xyXG5cdFx0XHRcdFx0XHRpZD0nY2hpZW4nXHJcblx0XHRcdFx0XHRcdGxhYmVsPSdOb21icmUgZGUgY2hpZW4gPyAoM+KCrC9qb3VyL2FuaW1hbCknXHJcblx0XHRcdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsXHJcblx0XHRcdFx0XHRcdGNvbnRyb2w9e1xyXG5cdFx0XHRcdFx0XHRcdDxTd2l0Y2hcclxuXHRcdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRDaGVja2VkXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPSdsaXRGYWl0J1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I9J3ByaW1hcnknXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRsYWJlbD1cIlNvdWhhaXRlei12b3VzIGwnb3B0aW9uIGxpdCBmYWl0IMOgIGwnYXJyaXbDqWUgP1wiXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PEZvcm1Db250cm9sTGFiZWxcclxuXHRcdFx0XHRcdFx0Y29udHJvbD17XHJcblx0XHRcdFx0XHRcdFx0PFN3aXRjaFxyXG5cdFx0XHRcdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdENoZWNrZWRcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J25ld3NsZXR0ZXInXHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcj0ncHJpbWFyeSdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGxhYmVsPSdTb3VzY3JpcmUgw6Agbm90cmUgbmV3c2xldHRlciBwb3VyIGLDqW7DqWZpY2llciBkZSByZW1pc2VzIGV0IG9mZnJlcyBwcm9tb3Rpb25uZWxsZXMgPydcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lcj5cclxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG5cdFx0XHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRuYW1lPSdpbmZvQ29tcGwnXHJcblx0XHRcdFx0XHRcdFx0aWQ9J2luZm9Db21wbCdcclxuXHRcdFx0XHRcdFx0XHRsYWJlbD0nSW5mb3JtYXRpb25zIGNvbXBsw6ltZW50YWlyZXMgLyBRdWVzdGlvbnMgOidcclxuXHRcdFx0XHRcdFx0XHRtdWx0aWxpbmVcclxuXHRcdFx0XHRcdFx0XHRyb3dzPXszfVxyXG5cdFx0XHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cdGNvbnN0IENvb3JkID0gKCkgPT4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGgyPlZvcyBjb29yZG9ubsOpZXM8L2gyPlxyXG5cclxuXHRcdFx0PEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J3NwYWNlLWFyb3VuZCc+XHJcblx0XHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHQ8SW5wdXRMYWJlbFxyXG5cdFx0XHRcdFx0XHRzaHJpbmtcclxuXHRcdFx0XHRcdFx0aWQ9J2RlbW8tc2ltcGxlLXNlbGVjdC1wbGFjZWhvbGRlci1sYWJlbC1sYWJlbCc+XHJcblx0XHRcdFx0XHRcdENpdmlsaXTDqSpcclxuXHRcdFx0XHRcdDwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0XHRcdHJ1bGVzPXt7IHJlcXVpcmVkOiAnTGEgY2l2aWxpdMOpIGVzdCBvYmxpZ2F0b2lyZScgfX1cclxuXHRcdFx0XHRcdFx0aGVscGVyVGV4dD17XHJcblx0XHRcdFx0XHRcdFx0ZXJyb3JzLmNpdmlsaXRlICYmIChcclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2Vycm9ycy5jaXZpbGl0ZS5tZXNzYWdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRuYW1lPSdjaXZpbGl0ZSdcclxuXHRcdFx0XHRcdFx0YXM9e1xyXG5cdFx0XHRcdFx0XHRcdDxTZWxlY3QgaWQ9J2NpdmlsaXRlLXNlbGVjdCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J00uICYgTW1lJz5NLiAmIE1tZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J01tZSc+TW1lPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nTWxsZSc+TWxsZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J00uJz5NLjwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J0Fzc29jaWF0aW9uJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0QXNzb2NpYXRpb25cclxuXHRcdFx0XHRcdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9XCJDb21pdMOpIGQnZW50cmVwcmlzZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRDb21pdMOpIGQnZW50cmVwcmlzZVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nU29jacOpdMOpJz5Tb2Npw6l0w6k8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdFbnRyZXByaXNlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0RW50cmVwcmlzZVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nRm95ZXIgZGUgdmllJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Rm95ZXIgZGUgdmllXHJcblx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPVwiRm95ZXIgZCdhY2N1ZWlsXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEZveWVyIGQnYWNjdWVpbFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nRmFtaWxsZSc+RmFtaWxsZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J0F1dHJlcyc+QXV0cmVzPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8L1NlbGVjdD5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogJ0xlIG5vbSBlc3Qgb2JsaWdhdG9pcmUnIH0pfVxyXG5cdFx0XHRcdFx0bmFtZT0nbm9tJ1xyXG5cdFx0XHRcdFx0aWQ9J25vbSdcclxuXHRcdFx0XHRcdGxhYmVsPSdOb20qJ1xyXG5cdFx0XHRcdFx0aGVscGVyVGV4dD17XHJcblx0XHRcdFx0XHRcdGVycm9ycy5ub20gJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdHtlcnJvcnMubm9tLm1lc3NhZ2V9XHJcblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcih7XHJcblx0XHRcdFx0XHRcdHJlcXVpcmVkOiAnTGUgcHLDqW5vbSBlc3Qgb2JsaWdhdG9pcmUnLFxyXG5cdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHRoZWxwZXJUZXh0PXtcclxuXHRcdFx0XHRcdFx0ZXJyb3JzLnByZW5vbSAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0e2Vycm9ycy5wcmVub20ubWVzc2FnZX1cclxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdG5hbWU9J3ByZW5vbSdcclxuXHRcdFx0XHRcdGlkPSdwcmVub20nXHJcblx0XHRcdFx0XHRsYWJlbD0nUHLDqW5vbSonXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdzcGFjZS1hcm91bmQnPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcih7XHJcblx0XHRcdFx0XHRcdHJlcXVpcmVkOiBcIkwnYWRyZXNzZSBlc3Qgb2JsaWdhdG9pcmVcIixcclxuXHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0aGVscGVyVGV4dD17XHJcblx0XHRcdFx0XHRcdGVycm9ycy5hZHJlc3NlICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHR7ZXJyb3JzLmFkcmVzc2UubWVzc2FnZX1cclxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdG5hbWU9J2FkcmVzc2UnXHJcblx0XHRcdFx0XHRpZD0nYWRyZXNzZSdcclxuXHRcdFx0XHRcdGxhYmVsPSdBZHJlc3NlKidcclxuXHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0aW5wdXRSZWY9e3JlZ2lzdGVyKHtcclxuXHRcdFx0XHRcdFx0cmVxdWlyZWQ6ICdMZSBjb2RlIHBvc3RhbCBlc3Qgb2JsaWdhdG9pcmUnLFxyXG5cdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHRoZWxwZXJUZXh0PXtcclxuXHRcdFx0XHRcdFx0ZXJyb3JzLmNwICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHR7ZXJyb3JzLmNwLm1lc3NhZ2V9XHJcblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRuYW1lPSdjcCdcclxuXHRcdFx0XHRcdGlkPSdjcCdcclxuXHRcdFx0XHRcdGxhYmVsPSdDb2RlIFBvc3RhbConXHJcblx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0c2hyaW5rOiB0cnVlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdGlucHV0UmVmPXtyZWdpc3Rlcih7XHJcblx0XHRcdFx0XHRcdHJlcXVpcmVkOiAnTGEgdmlsbGUgZXN0IG9ibGlnYXRvaXJlJyxcclxuXHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0aGVscGVyVGV4dD17XHJcblx0XHRcdFx0XHRcdGVycm9ycy52aWxsZSAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0e2Vycm9ycy52aWxsZS5tZXNzYWdlfVxyXG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0bmFtZT0ndmlsbGUnXHJcblx0XHRcdFx0XHRpZD0ndmlsbGUnXHJcblx0XHRcdFx0XHRsYWJlbD0nVmlsbGUqJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdDxJbnB1dExhYmVsXHJcblx0XHRcdFx0XHRcdHNocmlua1xyXG5cdFx0XHRcdFx0XHRpZD0nZGVtby1zaW1wbGUtc2VsZWN0LXBsYWNlaG9sZGVyLWxhYmVsLWxhYmVsJz5cclxuXHRcdFx0XHRcdFx0UGF5cypcclxuXHRcdFx0XHRcdDwvSW5wdXRMYWJlbD5cclxuXHJcblx0XHRcdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0XHRydWxlcz17eyByZXF1aXJlZDogJ0xlIHBheXMgZXN0IG9ibGlnYXRvaXJlJyB9fVxyXG5cdFx0XHRcdFx0XHRoZWxwZXJUZXh0PXtcclxuXHRcdFx0XHRcdFx0XHRlcnJvcnMucGF5cyAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtlcnJvcnMucGF5cy5tZXNzYWdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRuYW1lPSdwYXlzJ1xyXG5cdFx0XHRcdFx0XHRhcz17XHJcblx0XHRcdFx0XHRcdFx0PFNlbGVjdCBpZD0ncGF5cy1zZWxlY3QnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdmcmFuY2UnPkZyYW5jZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9Jyc+LS0tLS0tLS08L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdhdXRyZXMnPkF1dHJlczwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2FsbGVtYWduZSc+QWxsZW1hZ25lPC9NZW51SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT0nYW5nbGV0ZXJyZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEFuZ2xldGVycmVcclxuXHRcdFx0XHRcdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2JlbGdpcXVlJz5CZWxnaXF1ZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2hvbGxhbmRlJz5Ib2xsYW5kZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9J2x1eGVtYm91cmcnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRMdXhlbWJvdXJnXHJcblx0XHRcdFx0XHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPSdzdWlzc2UnPlN1aXNzZTwvTWVudUl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PC9TZWxlY3Q+XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8R3JpZCBjb250YWluZXIganVzdGlmeT0nc3BhY2UtYXJvdW5kJz5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRuYW1lPSd0ZWwnXHJcblx0XHRcdFx0XHRpZD0ndGVsJ1xyXG5cdFx0XHRcdFx0bGFiZWw9J1TDqWzDqXBob25lJ1xyXG5cdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdHNocmluazogdHJ1ZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogJ0xlIG1haWwgZXN0IG9ibGlnYXRvaXJlJyB9KX1cclxuXHRcdFx0XHRcdGhlbHBlclRleHQ9e1xyXG5cdFx0XHRcdFx0XHRlcnJvcnMubWFpbCAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0e2Vycm9ycy5tYWlsLm1lc3NhZ2V9XHJcblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRuYW1lPSdtYWlsJ1xyXG5cdFx0XHRcdFx0aWQ9J21haWwnXHJcblx0XHRcdFx0XHRsYWJlbD0nRW1haWwqJ1xyXG5cdFx0XHRcdFx0dHlwZT0nbWFpbCdcclxuXHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRzaHJpbms6IHRydWUsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblx0Y29uc3QgcmVjYXAgPSAoKSA9PiAoXHJcblx0XHQ8cD5cclxuXHRcdFx0ey8qIHtKU09OLnN0cmluZ2lmeShnZXRWYWx1ZXMoKSl9ICovfVxyXG5cdFx0XHQ8aDM+UsOpY2FwaXR1bGF0aWYgZGUgbGEgbG9jYXRpb248L2gzPlxyXG5cdFx0XHQ8c3BhbiBzdHlsZT17eyBmb250U3R5bGU6ICdpdGFsaWMnLCBmb250U2l6ZTogJzAuOHJlbScgfX0+XHJcblx0XHRcdFx0VW4gdGV4dGUgZW4gcm91Z2Ugc2lnbmlmaWUgcXVlIGxlIGNoYW1wcyDDoCBtYWwgw6l0w6kgcmVuc2VpZ27DqVxyXG5cdFx0XHQ8L3NwYW4+XHJcblx0XHRcdDxHcmlkXHJcblx0XHRcdFx0Y29udGFpbmVyXHJcblx0XHRcdFx0ZGlyZWN0aW9uPSdyb3cnXHJcblx0XHRcdFx0anVzdGlmeT0nc3BhY2UtZXZlbmx5J1xyXG5cdFx0XHRcdGFsaWduSXRlbXM9J2ZsZXgtc3RhcnQnPlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0+XHJcblx0XHRcdFx0XHQ8cD5Mb2NhdGlvbiA6PC9wPlxyXG5cdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0TGUgZ2l0ZSA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHR7IWdldFZhbHVlcygpLmdpdGUgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEfDrnRlIG1hbnF1YW50XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdGdldFZhbHVlcygpLmdpdGVcclxuXHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0e2dldFZhbHVlcygpLmRhdGVBcnJpdmVlID09PVxyXG5cdFx0XHRcdFx0XHRcdGdldFZhbHVlcygpLmRhdGVEZXBhcnQgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdExlcyBkYXRlcyBuZSBwZXV2ZW50IHBhcyDDqnRyZSBpZGVudGlxdWVzXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHREdXsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtkYXlqcyhnZXRWYWx1ZXMoKS5kYXRlQXJyaXZlZSkuZm9ybWF0KFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdERC9NTS9ZWVlZJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQpfXsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGF1eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2RheWpzKGdldFZhbHVlcygpLmRhdGVEZXBhcnQpLmZvcm1hdChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnREQvTU0vWVlZWSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0UG91cnsnICd9XHJcblx0XHRcdFx0XHRcdFx0eyFnZXRWYWx1ZXMoKS5uYlBlcnMgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdE5vbWJyZSBkZSBwZXJzb25uZXMgbWFucXVhbnRcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0Z2V0VmFsdWVzKCkubmJQZXJzXHJcblx0XHRcdFx0XHRcdFx0KX17JyAnfVxyXG5cdFx0XHRcdFx0XHRcdHBlcnNvbm5lcyBkb250eycgJ31cclxuXHRcdFx0XHRcdFx0XHR7IWdldFZhbHVlcygpLm5iRW5mID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHROb21icmUgZCdlbmZhbnQgbWFucXVhbnRcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0Z2V0VmFsdWVzKCkubmJFbmZcclxuXHRcdFx0XHRcdFx0XHQpfXsnICd9XHJcblx0XHRcdFx0XHRcdFx0ZW5mYW50KHMpeycgJ31cclxuXHRcdFx0XHRcdFx0XHR7Z2V0VmFsdWVzKCkubmJDaGllbiAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGJyIC8+IGFpbnNpIHF1ZSB7Z2V0VmFsdWVzKCkubmJDaGllbn17JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhbmltYXV4XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdE9wdGlvbnMgOnsnICd9XHJcblx0XHRcdFx0XHRcdFx0e2dldFZhbHVlcygpLmxpdEZhaXQgJiYgJ0xpdHMgZmFpdCA6IE91aSwnfXsnICd9XHJcblx0XHRcdFx0XHRcdFx0e2dldFZhbHVlcygpLm5ld3NsZXR0ZXIgJiYgJ05ld3NsZXR0ZXIgOiBPdWknfVxyXG5cdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQgaXRlbT5cclxuXHRcdFx0XHRcdDxwPlZvcyBpbmZvcm1hdGlvbnMgOjwvcD5cclxuXHRcdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdHshZ2V0VmFsdWVzKCkuY2l2aWxpdGUgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdENpdmlsaXTDqSBtYW5xdWFudFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRnZXRWYWx1ZXMoKS5jaXZpbGl0ZVxyXG5cdFx0XHRcdFx0XHRcdCl9eycgJ31cclxuXHRcdFx0XHRcdFx0XHR7IWdldFZhbHVlcygpLm5vbSA/IChcclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Tm9tIG1hbnF1YW50XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdGdldFZhbHVlcygpLm5vbVxyXG5cdFx0XHRcdFx0XHRcdCl9eycgJ31cclxuXHRcdFx0XHRcdFx0XHR7IWdldFZhbHVlcygpLnByZW5vbSA/IChcclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0UHLDqW5vbSBtYW5xdWFudFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRnZXRWYWx1ZXMoKS5wcmVub21cclxuXHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0eyFnZXRWYWx1ZXMoKS5hZHJlc3NlID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRBZHJlc3NlIG1hbnF1YW50ZVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRnZXRWYWx1ZXMoKS5hZHJlc3NlXHJcblx0XHRcdFx0XHRcdFx0KX17JyAnfVxyXG5cdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdHshZ2V0VmFsdWVzKCkuY3AgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdENvZGUgcG9zdGFsIG1hbnF1YW50XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdGdldFZhbHVlcygpLmNwXHJcblx0XHRcdFx0XHRcdFx0KX17JyAnfVxyXG5cdFx0XHRcdFx0XHRcdHshZ2V0VmFsdWVzKCkudmlsbGUgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFZpbGxlIG1hbnF1YW50ZVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRnZXRWYWx1ZXMoKS52aWxsZVxyXG5cdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0LHsnICd9XHJcblx0XHRcdFx0XHRcdFx0eyFnZXRWYWx1ZXMoKS5wYXlzID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRQYXlzIG1hbnF1YW50XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdGdldFZhbHVlcygpLnBheXNcclxuXHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0VMOpbMOpcGhvbmUgOiB7Z2V0VmFsdWVzKCkudGVsfSA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRNYWlsIDoge2dldFZhbHVlcygpLm1haWx9XHJcblx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdGNvbnRhaW5lclxyXG5cdFx0XHRcdGRpcmVjdGlvbj0nY29sdW1uJ1xyXG5cdFx0XHRcdGp1c3RpZnk9J2ZsZXgtc3RhcnQnXHJcblx0XHRcdFx0YWxpZ25JdGVtcz0nY2VudGVyJz5cclxuXHRcdFx0XHR7Y29uc29sZS5sb2coZ2V0VmFsdWVzKCkuaW5mb0NvbXBsKX1cclxuXHRcdFx0XHR7Z2V0VmFsdWVzKCkuaW5mb0NvbXBsICE9PSAnJyAmJiAoXHJcblx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8cD5Wb3RyZSBtZXNzYWdlIDo8L3A+eycgJ31cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8cD57Z2V0VmFsdWVzKCkuaW5mb0NvbXBsfTwvcD5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0PC9wPlxyXG5cdCk7XHJcblxyXG5cdGZ1bmN0aW9uIGdldFN0ZXBDb250ZW50KHN0ZXApIHtcclxuXHRcdHN3aXRjaCAoc3RlcCkge1xyXG5cdFx0XHRjYXNlIDA6XHJcblx0XHRcdFx0cmV0dXJuIGluZm9Mb2MoKTtcclxuXHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdHJldHVybiBpbmZvQ29tcCgpO1xyXG5cdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0cmV0dXJuIENvb3JkKCk7XHJcblx0XHRcdGNhc2UgMzpcclxuXHRcdFx0XHRyZXR1cm4gcmVjYXAoKTtcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRyZXR1cm4gJ0VycmV1cic7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChkYXRhKSA9PiB7XHJcblx0XHRzZXRMb2FkaW5nKHRydWUpO1xyXG5cdFx0ZGF0YS50b2tlbiA9IGF3YWl0IHJlUmVmLmN1cnJlbnQuZXhlY3V0ZUFzeW5jKCk7XHJcblx0XHRyZVJlZi5jdXJyZW50LnJlc2V0KCk7XHJcblx0XHRjb25zb2xlLmxvZygnb25TdWJtaXQgZGF0YSA9PicsIGRhdGEpO1xyXG5cdFx0Y3JlYXRlUmVzZXJ2YXRpb24oZGF0YSkudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZXN1bHQgdmF1dCA9PicsIHJlc3VsdCk7XHJcblx0XHRcdGlmIChyZXN1bHQuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQuZXJyb3IpO1xyXG5cdFx0XHRcdHNuYWNrYmFyU2hvd01lc3NhZ2UoYCR7cmVzdWx0LmVycm9yfWApO1xyXG5cdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHJlc3VsdC5kZWphUmVzZXJ2ZU1lc3NhZ2UpIHtcclxuXHRcdFx0XHRzbmFja2JhclNob3dNZXNzYWdlKGAke3Jlc3VsdC5kZWphUmVzZXJ2ZU1lc3NhZ2V9YCk7XHJcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHRcdFx0c25hY2tiYXJTaG93TWVzc2FnZShgJHtyZXN1bHQubWVzc2FnZX1gLCAnc3VjY2VzcycpO1xyXG5cclxuXHRcdFx0XHQvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHQvLyBcdFJvdXRlci5wdXNoKCcvJyk7XHJcblx0XHRcdFx0Ly8gfSwgMzAwMCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHR7bG9hZGluZyAmJiA8Q2lyY3VsYXJQcm9ncmVzcyAvPn1cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG5cdFx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuXHRcdFx0XHRcdDxTdGVwcGVyXHJcblx0XHRcdFx0XHRcdGFsdGVybmF0aXZlTGFiZWxcclxuXHRcdFx0XHRcdFx0YWN0aXZlU3RlcD17YWN0aXZlU3RlcH1cclxuXHRcdFx0XHRcdFx0Y29ubmVjdG9yPXs8Q29sb3JsaWJDb25uZWN0b3IgLz59PlxyXG5cdFx0XHRcdFx0XHR7c3RlcHMubWFwKChsYWJlbCkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxTdGVwIGtleT17bGFiZWx9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFN0ZXBMYWJlbCBTdGVwSWNvbkNvbXBvbmVudD17Q29sb3JsaWJTdGVwSWNvbn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtsYWJlbH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvU3RlcExhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDwvU3RlcD5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8L1N0ZXBwZXI+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHR7YWN0aXZlU3RlcCArIDEgPT09IHN0ZXBzLmxlbmd0aCA/IChcclxuXHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0ey8qIFZvaXIgcG91dCBham91dGVyIGlzU3VibWl0ZWQgPT09IHRydWUgKi99XHJcblx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaW5zdHJ1Y3Rpb25zfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3JlY2FwKCl9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXthY3RpdmVTdGVwID09PSAwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVCYWNrfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0UmV0b3VyXHJcblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nc3VibWl0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdjb250YWluZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yPSdwcmltYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17IWlzVmFsaWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRWYWxpZGVyXHJcblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmluc3RydWN0aW9uc30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtnZXRTdGVwQ29udGVudChhY3RpdmVTdGVwKX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17YWN0aXZlU3RlcCA9PT0gMH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVCYWNrfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFJldG91clxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcj0ncHJpbWFyeSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVOZXh0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFN1aXZhbnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PFJlQ0FQVENIQVxyXG5cdFx0XHRcdFx0XHRzaXRla2V5PXtSRUNBUFRDSEFfU0VDUkVUX0tFWX1cclxuXHRcdFx0XHRcdFx0cmVmPXtyZVJlZn1cclxuXHRcdFx0XHRcdFx0c2l6ZT0naW52aXNpYmxlJ1xyXG5cdFx0XHRcdFx0XHQvLyBvbkNoYW5nZT17b25DaGFuZ2V9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0NvbnRhaW5lcj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFNuYWNrYmFyKFJlc2VydmF0aW9uRm9ybSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=