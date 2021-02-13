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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Stepper */ "./node_modules/@material-ui/core/esm/Stepper/index.js");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Step */ "./node_modules/@material-ui/core/esm/Step/index.js");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "./node_modules/@material-ui/core/esm/StepLabel/index.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Check */ "./node_modules/@material-ui/icons/Check.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Settings */ "./node_modules/@material-ui/icons/Settings.js");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_GroupAdd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/GroupAdd */ "./node_modules/@material-ui/icons/GroupAdd.js");
/* harmony import */ var _material_ui_icons_GroupAdd__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GroupAdd__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_VideoLabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/VideoLabel */ "./node_modules/@material-ui/icons/VideoLabel.js");
/* harmony import */ var _material_ui_icons_VideoLabel__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VideoLabel__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_StepConnector__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/StepConnector */ "./node_modules/@material-ui/core/esm/StepConnector/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_House__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/House */ "./node_modules/@material-ui/icons/House.js");
/* harmony import */ var _material_ui_icons_House__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_House__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/EmojiPeople */ "./node_modules/@material-ui/icons/EmojiPeople.js");
/* harmony import */ var _material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/CheckCircle */ "./node_modules/@material-ui/icons/CheckCircle.js");
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_20__);




var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\reservation\\ReservationForm.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _this = undefined,
    _s3 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;


















var QontoConnector = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])({
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
var useQontoStepIconStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({
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
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.root, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, classes.active, active)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 3
    }
  }, completed ? __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
    className: classes.completed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }) : __jsx("div", {
    className: classes.circle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
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
  active: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
};
var ColorlibConnector = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])({
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
var useColorlibStepIconStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({
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
        lineNumber: 147,
        columnNumber: 6
      }
    }),
    2: __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 6
      }
    }),
    3: __jsx(_material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_19___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 6
      }
    }),
    4: __jsx(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_20___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 6
      }
    })
  };
  return __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.root, (_clsx2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_clsx2, classes.active, active), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_clsx2, classes.completed, completed), _clsx2)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
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
  active: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * The label displayed in the step icon.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
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
    }
  };
});

function getSteps() {
  return ['Information sur la location', 'Informations complémentaires', 'Vos coordonnées', 'Récapitulatif'];
}

var ReservationForm = function ReservationForm() {
  _s3();

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      activeStep = _React$useState2[0],
      setActiveStep = _React$useState2[1];

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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      gites = _useState[0],
      setGites = _useState[1];

  var listDesGites = function listDesGites() {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_4__["listGitesNoms"])().then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        setGites.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(gites).concat([data]));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    listDesGites();
  }, []);

  var infoLoc = function infoLoc() {
    return __jsx("div", {
      className: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 3
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 4
      }
    }, "Informations sur la location"), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 4
      }
    }, __jsx("label", {
      htmlFor: "exampleFormControlSelect1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 5
      }
    }, "Quel g\xEEte ?"), __jsx("select", {
      className: "form-control",
      id: "exampleFormControlSelect1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 5
      }
    }, gites.map(function (gite, i) {
      return __jsx("option", {
        key: i,
        value: gite.slug,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 7
        }
      }, gite.nom);
    }))), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 4
      }
    }, __jsx("label", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 5
      }
    }, "Nombre de personnes total"), __jsx("input", {
      type: "number",
      className: "form-control",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 5
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 4
      }
    }, __jsx("label", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 5
      }
    }, "Dont enfants de moins de 18 ans"), __jsx("input", {
      type: "number",
      className: "form-control",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 5
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 4
      }
    }, __jsx("label", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 5
      }
    }, "Date d'arriv\xE9e"), __jsx("input", {
      type: "date",
      className: "form-control",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 5
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 4
      }
    }, __jsx("label", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 5
      }
    }, "Date de d\xE9part"), __jsx("input", {
      type: "date",
      className: "form-control",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 5
      }
    })));
  };

  var infoComp = function infoComp() {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 3
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 4
      }
    }, "Informations suppl\xE9mentaires"), __jsx("fieldset", {
      style: {
        border: '1px solid black'
      },
      className: "pl-3 pb-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 4
      }
    }, __jsx("legend", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 5
      }
    }, ' ', __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 6
      }
    }, "Merci d'indiquer si vous nous avez d\xE9ja contact\xE9 par :")), __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "col",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "form-check",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 7
      }
    }, __jsx("input", {
      className: "form-check-input",
      type: "checkbox",
      value: "",
      id: "defaultCheck1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 8
      }
    }), __jsx("label", {
      className: "form-check-label",
      htmlFor: "defaultCheck1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 8
      }
    }, "Mail"))), __jsx("div", {
      className: "col",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "form-check",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 7
      }
    }, __jsx("input", {
      className: "form-check-input",
      type: "checkbox",
      value: "",
      id: "defaultCheck1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 8
      }
    }), __jsx("label", {
      className: "form-check-label",
      htmlFor: "defaultCheck1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 8
      }
    }, "T\xE9l\xE9phone"))), __jsx("div", {
      className: "col",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "form-check",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 7
      }
    }, __jsx("input", {
      className: "form-check-input",
      type: "checkbox",
      value: "",
      id: "defaultCheck1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 8
      }
    }), __jsx("label", {
      className: "form-check-label",
      htmlFor: "defaultCheck1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 8
      }
    }, "Abritel"))), __jsx("div", {
      className: "col",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "form-check",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 7
      }
    }, __jsx("input", {
      className: "form-check-input",
      type: "checkbox",
      value: "",
      id: "defaultCheck1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 8
      }
    }), __jsx("label", {
      className: "form-check-label",
      htmlFor: "defaultCheck1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 8
      }
    }, "Leboncoin"))), __jsx("div", {
      className: "col",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "form-check",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 7
      }
    }, __jsx("input", {
      className: "form-check-input",
      type: "checkbox",
      value: "",
      id: "defaultCheck1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 8
      }
    }), __jsx("label", {
      className: "form-check-label",
      htmlFor: "defaultCheck1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 8
      }
    }, "Autre"))))), __jsx("fieldset", {
      style: {
        border: '1px solid black'
      },
      className: "pl-3 pb-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 4
      }
    }, __jsx("legend", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 5
      }
    }, ' ', __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 6
      }
    }, "S'il y a des chiens, merci d'indiquer leur nombre (3\u20AC/jour/animal)")), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366,
        columnNumber: 5
      }
    }, __jsx("input", {
      type: "number",
      className: "form-control",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367,
        columnNumber: 6
      }
    }))), __jsx("fieldset", {
      style: {
        border: '1px solid black'
      },
      className: "pl-3 pb-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 4
      }
    }, __jsx("legend", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 5
      }
    }, ' ', __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 375,
        columnNumber: 6
      }
    }, "Souhaitez-vous l'option lit fait \xE0 l'arriv\xE9e ?")), __jsx("div", {
      className: "form-check",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377,
        columnNumber: 5
      }
    }, __jsx("input", {
      className: "form-check-input",
      type: "radio",
      name: "exampleRadios",
      id: "exampleRadios1",
      value: "option1",
      checked: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378,
        columnNumber: 6
      }
    }), __jsx("label", {
      className: "form-check-label",
      htmlFor: "exampleRadios1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386,
        columnNumber: 6
      }
    }, "Oui")), __jsx("div", {
      className: "form-check",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392,
        columnNumber: 5
      }
    }, __jsx("input", {
      className: "form-check-input",
      type: "radio",
      name: "exampleRadios",
      id: "exampleRadios2",
      value: "option2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393,
        columnNumber: 6
      }
    }), __jsx("label", {
      className: "form-check-label",
      htmlFor: "exampleRadios2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 400,
        columnNumber: 6
      }
    }, "Non"))));
  };

  var Coord = function Coord() {
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
    }, "Vos coordonn\xE9es"), __jsx("div", {
      className: "form-row mb-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412,
        columnNumber: 4
      }
    }, __jsx("div", {
      className: "col-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413,
        columnNumber: 5
      }
    }, __jsx("select", {
      className: "form-control",
      id: "exampleFormControlSelect1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 414,
        columnNumber: 6
      }
    }, __jsx("option", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417,
        columnNumber: 7
      }
    }, "Mr & Mme"), __jsx("option", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418,
        columnNumber: 7
      }
    }, "Mr"), __jsx("option", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 7
      }
    }, "Mme"), __jsx("option", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420,
        columnNumber: 7
      }
    }, "Entreprise"), __jsx("option", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 7
      }
    }, "Association"))), __jsx("div", {
      className: "col-5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425,
        columnNumber: 5
      }
    }, __jsx("input", {
      type: "text",
      className: "form-control",
      placeholder: "Nom",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 426,
        columnNumber: 6
      }
    })), __jsx("div", {
      className: "col-5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432,
        columnNumber: 5
      }
    }, __jsx("input", {
      type: "text",
      className: "form-control",
      placeholder: "Pr\xE9nom",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 433,
        columnNumber: 6
      }
    }))), __jsx("div", {
      className: "form-row mb-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 440,
        columnNumber: 4
      }
    }, __jsx("div", {
      className: "col-5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 441,
        columnNumber: 5
      }
    }, __jsx("input", {
      type: "text",
      className: "form-control",
      placeholder: "Adresse",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 442,
        columnNumber: 6
      }
    })), __jsx("div", {
      className: "col-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 448,
        columnNumber: 5
      }
    }, __jsx("input", {
      type: "text",
      className: "form-control",
      placeholder: "Code Postal",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 449,
        columnNumber: 6
      }
    })), __jsx("div", {
      className: "col-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 455,
        columnNumber: 5
      }
    }, __jsx("input", {
      type: "text",
      className: "form-control",
      placeholder: "Ville",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 456,
        columnNumber: 6
      }
    })), __jsx("div", {
      className: "col",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 462,
        columnNumber: 5
      }
    }, __jsx("input", {
      type: "text",
      className: "form-control",
      placeholder: "Pays",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 463,
        columnNumber: 6
      }
    }))), __jsx("div", {
      className: "form-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 470,
        columnNumber: 4
      }
    }, __jsx("div", {
      className: "col-5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 471,
        columnNumber: 5
      }
    }, __jsx("input", {
      type: "tel",
      pattern: "[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}",
      className: "form-control",
      placeholder: "T\xE9l\xE9phone",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 472,
        columnNumber: 6
      }
    })), __jsx("div", {
      className: "col-7",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 479,
        columnNumber: 5
      }
    }, __jsx("input", {
      type: "mail",
      className: "form-control",
      placeholder: "Email",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 480,
        columnNumber: 6
      }
    }))));
  };

  var recap = function recap() {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 489,
        columnNumber: 22
      }
    }, "recap");
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

  return __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 3
    }
  }, __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_8__["default"], {
    alternativeLabel: true,
    activeStep: activeStep,
    connector: __jsx(ColorlibConnector, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 512,
        columnNumber: 17
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 5
    }
  }, steps.map(function (label) {
    return __jsx(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 514,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {
      StepIconComponent: ColorlibStepIcon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 515,
        columnNumber: 8
      }
    }, label));
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 5
    }
  }, activeStep === steps.length ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], {
    className: classes.instructions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 8
    }
  }, "All steps completed - you're finished"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
    onClick: handleReset,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 8
    }
  }, "Recommencer")) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], {
    className: classes.instructions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 8
    }
  }, getStepContent(activeStep)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
    disabled: activeStep === 0,
    onClick: handleBack,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
      columnNumber: 9
    }
  }, "Retour"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
    variant: "contained",
    color: "primary",
    onClick: handleNext,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 9
    }
  }, activeStep === steps.length - 1 ? 'Valider' : 'Suivant'))))));
}; // export async function getStaticPaths() {
// 	const partenairesNoms = await ListAllPartenairesNoms();
// 	return {
// 		paths: partenairesNoms.map((nom) => {
// 			return {
// 				params: { id: nom._id, slug: nom.slug },
// 			};
// 		}),
// 		fallback: false,
// 	};
// }
// export async function getStaticProps(context) {
// 	return listGitesNoms().then((gites) => {
// 		if (gites.error) {
// 			console.log(gites.error);
// 		} else {
// 			console.log('clg dans le else', gites);
// 			return {
// 				props: { gites },
// 			};
// 		}
// 	});
// }


_s3(ReservationForm, "d57xW7HyhlbrtEnruS/bpHPOiik=", false, function () {
  return [useStyles];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXNlcnZhdGlvbi9SZXNlcnZhdGlvbkZvcm0uanMiXSwibmFtZXMiOlsiUW9udG9Db25uZWN0b3IiLCJ3aXRoU3R5bGVzIiwiYWx0ZXJuYXRpdmVMYWJlbCIsInRvcCIsImxlZnQiLCJyaWdodCIsImFjdGl2ZSIsImJvcmRlckNvbG9yIiwiY29tcGxldGVkIiwibGluZSIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwiU3RlcENvbm5lY3RvciIsInVzZVFvbnRvU3RlcEljb25TdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImNvbG9yIiwiZGlzcGxheSIsImhlaWdodCIsImFsaWduSXRlbXMiLCJjaXJjbGUiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsImZvbnRTaXplIiwiUW9udG9TdGVwSWNvbiIsInByb3BzIiwiY2xhc3NlcyIsImNsc3giLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiQ29sb3JsaWJDb25uZWN0b3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJib3JkZXIiLCJ1c2VDb2xvcmxpYlN0ZXBJY29uU3R5bGVzIiwianVzdGlmeUNvbnRlbnQiLCJib3hTaGFkb3ciLCJDb2xvcmxpYlN0ZXBJY29uIiwiaWNvbnMiLCJTdHJpbmciLCJpY29uIiwibm9kZSIsInVzZVN0eWxlcyIsInRoZW1lIiwiYnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwiaW5zdHJ1Y3Rpb25zIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiZ2V0U3RlcHMiLCJSZXNlcnZhdGlvbkZvcm0iLCJSZWFjdCIsInVzZVN0YXRlIiwiYWN0aXZlU3RlcCIsInNldEFjdGl2ZVN0ZXAiLCJzdGVwcyIsImhhbmRsZU5leHQiLCJwcmV2QWN0aXZlU3RlcCIsImhhbmRsZUJhY2siLCJoYW5kbGVSZXNldCIsImdpdGVzIiwic2V0R2l0ZXMiLCJsaXN0RGVzR2l0ZXMiLCJsaXN0R2l0ZXNOb21zIiwidGhlbiIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJpbmZvTG9jIiwibWFwIiwiZ2l0ZSIsImkiLCJzbHVnIiwibm9tIiwiaW5mb0NvbXAiLCJDb29yZCIsInJlY2FwIiwiZ2V0U3RlcENvbnRlbnQiLCJzdGVwIiwibGFiZWwiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsY0FBYyxHQUFHQywyRUFBVSxDQUFDO0FBQ2pDQyxrQkFBZ0IsRUFBRTtBQUNqQkMsT0FBRyxFQUFFLEVBRFk7QUFFakJDLFFBQUksRUFBRSxtQkFGVztBQUdqQkMsU0FBSyxFQUFFO0FBSFUsR0FEZTtBQU1qQ0MsUUFBTSxFQUFFO0FBQ1AsZUFBVztBQUNWQyxpQkFBVyxFQUFFO0FBREg7QUFESixHQU55QjtBQVdqQ0MsV0FBUyxFQUFFO0FBQ1YsZUFBVztBQUNWRCxpQkFBVyxFQUFFO0FBREg7QUFERCxHQVhzQjtBQWdCakNFLE1BQUksRUFBRTtBQUNMRixlQUFXLEVBQUUsU0FEUjtBQUVMRyxrQkFBYyxFQUFFLENBRlg7QUFHTEMsZ0JBQVksRUFBRTtBQUhUO0FBaEIyQixDQUFELENBQVYsQ0FxQnBCQyx3RUFyQm9CLENBQXZCO0FBdUJBLElBQU1DLHNCQUFzQixHQUFHQywyRUFBVSxDQUFDO0FBQ3pDQyxNQUFJLEVBQUU7QUFDTEMsU0FBSyxFQUFFLFNBREY7QUFFTEMsV0FBTyxFQUFFLE1BRko7QUFHTEMsVUFBTSxFQUFFLEVBSEg7QUFJTEMsY0FBVSxFQUFFO0FBSlAsR0FEbUM7QUFPekNiLFFBQU0sRUFBRTtBQUNQVSxTQUFLLEVBQUU7QUFEQSxHQVBpQztBQVV6Q0ksUUFBTSxFQUFFO0FBQ1BDLFNB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRCxDQURBLEdBaUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHFFQUFEO0FBQVksYUFBUyxFQUFFbEIsT0FBTyxDQUFDcUIsWUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFaUMsY0FBYyxDQUFDMUIsVUFBRCxDQURoQixDQURELEVBSUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsaUVBQUQ7QUFDQyxZQUFRLEVBQUVBLFVBQVUsS0FBSyxDQUQxQjtBQUVDLFdBQU8sRUFBRUssVUFGVjtBQUdDLGFBQVMsRUFBRWpDLE9BQU8sQ0FBQ2tCLE1BSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxFQU9DLE1BQUMsaUVBQUQ7QUFDQyxXQUFPLEVBQUMsV0FEVDtBQUVDLFNBQUssRUFBQyxTQUZQO0FBR0MsV0FBTyxFQUFFYSxVQUhWO0FBSUMsYUFBUyxFQUFFL0IsT0FBTyxDQUFDa0IsTUFKcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFVSxVQUFVLEtBQUtFLEtBQUssQ0FBQzJCLE1BQU4sR0FBZSxDQUE5QixHQUNFLFNBREYsR0FFRSxTQVBKLENBUEQsQ0FKRCxDQWxCRixDQWJELENBREQsQ0FERDtBQTREQSxDQTdXRCxDLENBK1dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztJQXRZTWhDLGU7VUFDV1QsUzs7O01BRFhTLGU7QUF3WVNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jlc2VydmF0aW9uLmRjZDQwZjk4NjU3MWYwODg1M2ZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0R2l0ZXNOb21zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFN0ZXBwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcHBlcic7XHJcbmltcG9ydCBTdGVwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXAnO1xyXG5pbXBvcnQgU3RlcExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBMYWJlbCc7XHJcbmltcG9ydCBDaGVjayBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2snO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZXR0aW5ncyc7XHJcbmltcG9ydCBHcm91cEFkZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0dyb3VwQWRkJztcclxuaW1wb3J0IFZpZGVvTGFiZWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9WaWRlb0xhYmVsJztcclxuaW1wb3J0IFN0ZXBDb25uZWN0b3IgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcENvbm5lY3Rvcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBIb3VzZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hvdXNlJztcclxuaW1wb3J0IEVtb2ppUGVvcGxlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRW1vamlQZW9wbGUnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGVja0NpcmNsZSc7XHJcblxyXG5jb25zdCBRb250b0Nvbm5lY3RvciA9IHdpdGhTdHlsZXMoe1xyXG5cdGFsdGVybmF0aXZlTGFiZWw6IHtcclxuXHRcdHRvcDogMTAsXHJcblx0XHRsZWZ0OiAnY2FsYygtNTAlICsgMTZweCknLFxyXG5cdFx0cmlnaHQ6ICdjYWxjKDUwJSArIDE2cHgpJyxcclxuXHR9LFxyXG5cdGFjdGl2ZToge1xyXG5cdFx0JyYgJGxpbmUnOiB7XHJcblx0XHRcdGJvcmRlckNvbG9yOiAnIzc4NGFmNCcsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0Y29tcGxldGVkOiB7XHJcblx0XHQnJiAkbGluZSc6IHtcclxuXHRcdFx0Ym9yZGVyQ29sb3I6ICcjNzg0YWY0JyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRsaW5lOiB7XHJcblx0XHRib3JkZXJDb2xvcjogJyNlYWVhZjAnLFxyXG5cdFx0Ym9yZGVyVG9wV2lkdGg6IDMsXHJcblx0XHRib3JkZXJSYWRpdXM6IDEsXHJcblx0fSxcclxufSkoU3RlcENvbm5lY3Rvcik7XHJcblxyXG5jb25zdCB1c2VRb250b1N0ZXBJY29uU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcblx0cm9vdDoge1xyXG5cdFx0Y29sb3I6ICcjZWFlYWYwJyxcclxuXHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdGhlaWdodDogMjIsXHJcblx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuXHR9LFxyXG5cdGFjdGl2ZToge1xyXG5cdFx0Y29sb3I6ICcjNzg0YWY0JyxcclxuXHR9LFxyXG5cdGNpcmNsZToge1xyXG5cdFx0d2lkdGg6IDgsXHJcblx0XHRoZWlnaHQ6IDgsXHJcblx0XHRib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJyxcclxuXHR9LFxyXG5cdGNvbXBsZXRlZDoge1xyXG5cdFx0Y29sb3I6ICcjNzg0YWY0JyxcclxuXHRcdHpJbmRleDogMSxcclxuXHRcdGZvbnRTaXplOiAxOCxcclxuXHR9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIFFvbnRvU3RlcEljb24ocHJvcHMpIHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlUW9udG9TdGVwSWNvblN0eWxlcygpO1xyXG5cdGNvbnN0IHsgYWN0aXZlLCBjb21wbGV0ZWQgfSA9IHByb3BzO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCB7XHJcblx0XHRcdFx0W2NsYXNzZXMuYWN0aXZlXTogYWN0aXZlLFxyXG5cdFx0XHR9KX0+XHJcblx0XHRcdHtjb21wbGV0ZWQgPyAoXHJcblx0XHRcdFx0PENoZWNrIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb21wbGV0ZWR9IC8+XHJcblx0XHRcdCkgOiAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2lyY2xlfSAvPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuUW9udG9TdGVwSWNvbi5wcm9wVHlwZXMgPSB7XHJcblx0LyoqXHJcblx0ICogV2hldGhlciB0aGlzIHN0ZXAgaXMgYWN0aXZlLlxyXG5cdCAqL1xyXG5cdGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXHJcblx0LyoqXHJcblx0ICogTWFyayB0aGUgc3RlcCBhcyBjb21wbGV0ZWQuIElzIHBhc3NlZCB0byBjaGlsZCBjb21wb25lbnRzLlxyXG5cdCAqL1xyXG5cdGNvbXBsZXRlZDogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5jb25zdCBDb2xvcmxpYkNvbm5lY3RvciA9IHdpdGhTdHlsZXMoe1xyXG5cdGFsdGVybmF0aXZlTGFiZWw6IHtcclxuXHRcdHRvcDogMjIsXHJcblx0fSxcclxuXHRhY3RpdmU6IHtcclxuXHRcdCcmICRsaW5lJzoge1xyXG5cdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6XHJcblx0XHRcdFx0J2xpbmVhci1ncmFkaWVudCggOTVkZWcscmdiKDI0MiwxMTMsMzMpIDAlLHJnYigyMzMsNjQsODcpIDUwJSxyZ2IoMTM4LDM1LDEzNSkgMTAwJSknLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGNvbXBsZXRlZDoge1xyXG5cdFx0JyYgJGxpbmUnOiB7XHJcblx0XHRcdGJhY2tncm91bmRJbWFnZTpcclxuXHRcdFx0XHQnbGluZWFyLWdyYWRpZW50KCA5NWRlZyxyZ2IoMjQyLDExMywzMykgMCUscmdiKDIzMyw2NCw4NykgNTAlLHJnYigxMzgsMzUsMTM1KSAxMDAlKScsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0bGluZToge1xyXG5cdFx0aGVpZ2h0OiAzLFxyXG5cdFx0Ym9yZGVyOiAwLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnI2VhZWFmMCcsXHJcblx0XHRib3JkZXJSYWRpdXM6IDEsXHJcblx0fSxcclxufSkoU3RlcENvbm5lY3Rvcik7XHJcblxyXG5jb25zdCB1c2VDb2xvcmxpYlN0ZXBJY29uU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcblx0cm9vdDoge1xyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnI2NjYycsXHJcblx0XHR6SW5kZXg6IDEsXHJcblx0XHRjb2xvcjogJyNmZmYnLFxyXG5cdFx0d2lkdGg6IDUwLFxyXG5cdFx0aGVpZ2h0OiA1MCxcclxuXHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdGJvcmRlclJhZGl1czogJzUwJScsXHJcblx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuXHR9LFxyXG5cdGFjdGl2ZToge1xyXG5cdFx0YmFja2dyb3VuZEltYWdlOlxyXG5cdFx0XHQnbGluZWFyLWdyYWRpZW50KCAxMzZkZWcsIHJnYigyNDIsMTEzLDMzKSAwJSwgcmdiKDIzMyw2NCw4NykgNTAlLCByZ2IoMTM4LDM1LDEzNSkgMTAwJSknLFxyXG5cdFx0Ym94U2hhZG93OiAnMCA0cHggMTBweCAwIHJnYmEoMCwwLDAsLjI1KScsXHJcblx0fSxcclxuXHRjb21wbGV0ZWQ6IHtcclxuXHRcdGJhY2tncm91bmRJbWFnZTpcclxuXHRcdFx0J2xpbmVhci1ncmFkaWVudCggMTM2ZGVnLCByZ2IoMjQyLDExMywzMykgMCUsIHJnYigyMzMsNjQsODcpIDUwJSwgcmdiKDEzOCwzNSwxMzUpIDEwMCUpJyxcclxuXHR9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIENvbG9ybGliU3RlcEljb24ocHJvcHMpIHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlQ29sb3JsaWJTdGVwSWNvblN0eWxlcygpO1xyXG5cdGNvbnN0IHsgYWN0aXZlLCBjb21wbGV0ZWQgfSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCBpY29ucyA9IHtcclxuXHRcdDE6IDxIb3VzZUljb24gLz4sXHJcblx0XHQyOiA8U2V0dGluZ3NJY29uIC8+LFxyXG5cdFx0MzogPEVtb2ppUGVvcGxlSWNvbiAvPixcclxuXHRcdDQ6IDxDaGVja0NpcmNsZUljb24gLz4sXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwge1xyXG5cdFx0XHRcdFtjbGFzc2VzLmFjdGl2ZV06IGFjdGl2ZSxcclxuXHRcdFx0XHRbY2xhc3Nlcy5jb21wbGV0ZWRdOiBjb21wbGV0ZWQsXHJcblx0XHRcdH0pfT5cclxuXHRcdFx0e2ljb25zW1N0cmluZyhwcm9wcy5pY29uKV19XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5Db2xvcmxpYlN0ZXBJY29uLnByb3BUeXBlcyA9IHtcclxuXHQvKipcclxuXHQgKiBXaGV0aGVyIHRoaXMgc3RlcCBpcyBhY3RpdmUuXHJcblx0ICovXHJcblx0YWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcclxuXHQvKipcclxuXHQgKiBNYXJrIHRoZSBzdGVwIGFzIGNvbXBsZXRlZC4gSXMgcGFzc2VkIHRvIGNoaWxkIGNvbXBvbmVudHMuXHJcblx0ICovXHJcblx0Y29tcGxldGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuXHQvKipcclxuXHQgKiBUaGUgbGFiZWwgZGlzcGxheWVkIGluIHRoZSBzdGVwIGljb24uXHJcblx0ICovXHJcblx0aWNvbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRyb290OiB7XHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdH0sXHJcblx0YnV0dG9uOiB7XHJcblx0XHRtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuXHR9LFxyXG5cdGluc3RydWN0aW9uczoge1xyXG5cdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0bWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIGdldFN0ZXBzKCkge1xyXG5cdHJldHVybiBbXHJcblx0XHQnSW5mb3JtYXRpb24gc3VyIGxhIGxvY2F0aW9uJyxcclxuXHRcdCdJbmZvcm1hdGlvbnMgY29tcGzDqW1lbnRhaXJlcycsXHJcblx0XHQnVm9zIGNvb3Jkb25uw6llcycsXHJcblx0XHQnUsOpY2FwaXR1bGF0aWYnLFxyXG5cdF07XHJcbn1cclxuXHJcbmNvbnN0IFJlc2VydmF0aW9uRm9ybSA9ICgpID0+IHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0Y29uc3QgW2FjdGl2ZVN0ZXAsIHNldEFjdGl2ZVN0ZXBdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcblx0Y29uc3Qgc3RlcHMgPSBnZXRTdGVwcygpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xyXG5cdFx0c2V0QWN0aXZlU3RlcCgocHJldkFjdGl2ZVN0ZXApID0+IHByZXZBY3RpdmVTdGVwICsgMSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcclxuXHRcdHNldEFjdGl2ZVN0ZXAoKHByZXZBY3RpdmVTdGVwKSA9PiBwcmV2QWN0aXZlU3RlcCAtIDEpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xyXG5cdFx0c2V0QWN0aXZlU3RlcCgwKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBbZ2l0ZXMsIHNldEdpdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgbGlzdERlc0dpdGVzID0gKCkgPT4ge1xyXG5cdFx0bGlzdEdpdGVzTm9tcygpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0R2l0ZXMoLi4uZ2l0ZXMsIGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGlzdERlc0dpdGVzKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCBpbmZvTG9jID0gKCkgPT4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9Jyc+XHJcblx0XHRcdDxoMj5JbmZvcm1hdGlvbnMgc3VyIGxhIGxvY2F0aW9uPC9oMj5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj0nZXhhbXBsZUZvcm1Db250cm9sU2VsZWN0MSc+UXVlbCBnw650ZSA/PC9sYWJlbD5cclxuXHRcdFx0XHQ8c2VsZWN0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyBpZD0nZXhhbXBsZUZvcm1Db250cm9sU2VsZWN0MSc+XHJcblx0XHRcdFx0XHR7Z2l0ZXMubWFwKChnaXRlLCBpKSA9PiAoXHJcblx0XHRcdFx0XHRcdDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17Z2l0ZS5zbHVnfT5cclxuXHRcdFx0XHRcdFx0XHR7Z2l0ZS5ub219XHJcblx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0PGxhYmVsPk5vbWJyZSBkZSBwZXJzb25uZXMgdG90YWw8L2xhYmVsPlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPSdudW1iZXInIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdDxsYWJlbD5Eb250IGVuZmFudHMgZGUgbW9pbnMgZGUgMTggYW5zPC9sYWJlbD5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT0nbnVtYmVyJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHQ8bGFiZWw+RGF0ZSBkJ2Fycml2w6llPC9sYWJlbD5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT0nZGF0ZScgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0PGxhYmVsPkRhdGUgZGUgZMOpcGFydDwvbGFiZWw+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9J2RhdGUnIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblx0Y29uc3QgaW5mb0NvbXAgPSAoKSA9PiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8aDI+SW5mb3JtYXRpb25zIHN1cHBsw6ltZW50YWlyZXM8L2gyPlxyXG5cdFx0XHQ8ZmllbGRzZXRcclxuXHRcdFx0XHRzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19XHJcblx0XHRcdFx0Y2xhc3NOYW1lPSdwbC0zIHBiLTMnPlxyXG5cdFx0XHRcdDxsZWdlbmQ+XHJcblx0XHRcdFx0XHR7JyAnfVxyXG5cdFx0XHRcdFx0PGgzPlxyXG5cdFx0XHRcdFx0XHRNZXJjaSBkJ2luZGlxdWVyIHNpIHZvdXMgbm91cyBhdmV6IGTDqWphIGNvbnRhY3TDqSBwYXIgOlxyXG5cdFx0XHRcdFx0PC9oMz5cclxuXHRcdFx0XHQ8L2xlZ2VuZD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1jaGVjayc+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY2hlY2staW5wdXQnXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSdjaGVja2JveCdcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPScnXHJcblx0XHRcdFx0XHRcdFx0XHRpZD0nZGVmYXVsdENoZWNrMSdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNoZWNrLWxhYmVsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0aHRtbEZvcj0nZGVmYXVsdENoZWNrMSc+XHJcblx0XHRcdFx0XHRcdFx0XHRNYWlsXHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1jaGVjayc+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY2hlY2staW5wdXQnXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSdjaGVja2JveCdcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPScnXHJcblx0XHRcdFx0XHRcdFx0XHRpZD0nZGVmYXVsdENoZWNrMSdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNoZWNrLWxhYmVsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0aHRtbEZvcj0nZGVmYXVsdENoZWNrMSc+XHJcblx0XHRcdFx0XHRcdFx0XHRUw6lsw6lwaG9uZVxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tY2hlY2snPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNoZWNrLWlucHV0J1xyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0nY2hlY2tib3gnXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT0nJ1xyXG5cdFx0XHRcdFx0XHRcdFx0aWQ9J2RlZmF1bHRDaGVjazEnXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jaGVjay1sYWJlbCdcclxuXHRcdFx0XHRcdFx0XHRcdGh0bWxGb3I9J2RlZmF1bHRDaGVjazEnPlxyXG5cdFx0XHRcdFx0XHRcdFx0QWJyaXRlbFxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tY2hlY2snPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNoZWNrLWlucHV0J1xyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0nY2hlY2tib3gnXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT0nJ1xyXG5cdFx0XHRcdFx0XHRcdFx0aWQ9J2RlZmF1bHRDaGVjazEnXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jaGVjay1sYWJlbCdcclxuXHRcdFx0XHRcdFx0XHRcdGh0bWxGb3I9J2RlZmF1bHRDaGVjazEnPlxyXG5cdFx0XHRcdFx0XHRcdFx0TGVib25jb2luXHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1jaGVjayc+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY2hlY2staW5wdXQnXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSdjaGVja2JveCdcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPScnXHJcblx0XHRcdFx0XHRcdFx0XHRpZD0nZGVmYXVsdENoZWNrMSdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNoZWNrLWxhYmVsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0aHRtbEZvcj0nZGVmYXVsdENoZWNrMSc+XHJcblx0XHRcdFx0XHRcdFx0XHRBdXRyZVxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZmllbGRzZXQ+XHJcblx0XHRcdDxmaWVsZHNldFxyXG5cdFx0XHRcdHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX1cclxuXHRcdFx0XHRjbGFzc05hbWU9J3BsLTMgcGItMyc+XHJcblx0XHRcdFx0PGxlZ2VuZD5cclxuXHRcdFx0XHRcdHsnICd9XHJcblx0XHRcdFx0XHQ8aDM+XHJcblx0XHRcdFx0XHRcdFMnaWwgeSBhIGRlcyBjaGllbnMsIG1lcmNpIGQnaW5kaXF1ZXIgbGV1ciBub21icmVcclxuXHRcdFx0XHRcdFx0KDPigqwvam91ci9hbmltYWwpXHJcblx0XHRcdFx0XHQ8L2gzPlxyXG5cdFx0XHRcdDwvbGVnZW5kPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPSdudW1iZXInIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2ZpZWxkc2V0PlxyXG5cdFx0XHQ8ZmllbGRzZXRcclxuXHRcdFx0XHRzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19XHJcblx0XHRcdFx0Y2xhc3NOYW1lPSdwbC0zIHBiLTMnPlxyXG5cdFx0XHRcdDxsZWdlbmQ+XHJcblx0XHRcdFx0XHR7JyAnfVxyXG5cdFx0XHRcdFx0PGgzPlNvdWhhaXRlei12b3VzIGwnb3B0aW9uIGxpdCBmYWl0IMOgIGwnYXJyaXbDqWUgPzwvaDM+XHJcblx0XHRcdFx0PC9sZWdlbmQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tY2hlY2snPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jaGVjay1pbnB1dCdcclxuXHRcdFx0XHRcdFx0dHlwZT0ncmFkaW8nXHJcblx0XHRcdFx0XHRcdG5hbWU9J2V4YW1wbGVSYWRpb3MnXHJcblx0XHRcdFx0XHRcdGlkPSdleGFtcGxlUmFkaW9zMSdcclxuXHRcdFx0XHRcdFx0dmFsdWU9J29wdGlvbjEnXHJcblx0XHRcdFx0XHRcdGNoZWNrZWRcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8bGFiZWxcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNoZWNrLWxhYmVsJ1xyXG5cdFx0XHRcdFx0XHRodG1sRm9yPSdleGFtcGxlUmFkaW9zMSc+XHJcblx0XHRcdFx0XHRcdE91aVxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1jaGVjayc+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNoZWNrLWlucHV0J1xyXG5cdFx0XHRcdFx0XHR0eXBlPSdyYWRpbydcclxuXHRcdFx0XHRcdFx0bmFtZT0nZXhhbXBsZVJhZGlvcydcclxuXHRcdFx0XHRcdFx0aWQ9J2V4YW1wbGVSYWRpb3MyJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT0nb3B0aW9uMidcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8bGFiZWxcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNoZWNrLWxhYmVsJ1xyXG5cdFx0XHRcdFx0XHRodG1sRm9yPSdleGFtcGxlUmFkaW9zMic+XHJcblx0XHRcdFx0XHRcdE5vblxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9maWVsZHNldD5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblx0Y29uc3QgQ29vcmQgPSAoKSA9PiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8aDI+Vm9zIGNvb3Jkb25uw6llczwvaDI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLXJvdyBtYi0zJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLTInPlxyXG5cdFx0XHRcdFx0PHNlbGVjdFxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0aWQ9J2V4YW1wbGVGb3JtQ29udHJvbFNlbGVjdDEnPlxyXG5cdFx0XHRcdFx0XHQ8b3B0aW9uPk1yICYgTW1lPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdDxvcHRpb24+TXI8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0PG9wdGlvbj5NbWU8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0PG9wdGlvbj5FbnRyZXByaXNlPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdDxvcHRpb24+QXNzb2NpYXRpb248L29wdGlvbj5cclxuXHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLTUnPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nTm9tJ1xyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLTUnPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nUHLDqW5vbSdcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1yb3cgbWItMyc+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC01Jz5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0FkcmVzc2UnXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtMic+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdDb2RlIFBvc3RhbCdcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC0zJz5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J1ZpbGxlJ1xyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J1BheXMnXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tcm93Jz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLTUnPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHR5cGU9J3RlbCdcclxuXHRcdFx0XHRcdFx0cGF0dGVybj0nWzAtOV17Mn0gWzAtOV17Mn0gWzAtOV17Mn0gWzAtOV17Mn0gWzAtOV17Mn0nXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nVMOpbMOpcGhvbmUnXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtNyc+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT0nbWFpbCdcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdFbWFpbCdcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxuXHRjb25zdCByZWNhcCA9ICgpID0+IDxwPnJlY2FwPC9wPjtcclxuXHJcblx0ZnVuY3Rpb24gZ2V0U3RlcENvbnRlbnQoc3RlcCkge1xyXG5cdFx0c3dpdGNoIChzdGVwKSB7XHJcblx0XHRcdGNhc2UgMDpcclxuXHRcdFx0XHRyZXR1cm4gaW5mb0xvYygpO1xyXG5cdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0cmV0dXJuIGluZm9Db21wKCk7XHJcblx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRyZXR1cm4gQ29vcmQoKTtcclxuXHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdHJldHVybiByZWNhcCgpO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHJldHVybiAnRXJyZXVyJztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0PGZvcm0+XHJcblx0XHRcdFx0PFN0ZXBwZXJcclxuXHRcdFx0XHRcdGFsdGVybmF0aXZlTGFiZWxcclxuXHRcdFx0XHRcdGFjdGl2ZVN0ZXA9e2FjdGl2ZVN0ZXB9XHJcblx0XHRcdFx0XHRjb25uZWN0b3I9ezxDb2xvcmxpYkNvbm5lY3RvciAvPn0+XHJcblx0XHRcdFx0XHR7c3RlcHMubWFwKChsYWJlbCkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8U3RlcCBrZXk9e2xhYmVsfT5cclxuXHRcdFx0XHRcdFx0XHQ8U3RlcExhYmVsIFN0ZXBJY29uQ29tcG9uZW50PXtDb2xvcmxpYlN0ZXBJY29ufT5cclxuXHRcdFx0XHRcdFx0XHRcdHtsYWJlbH1cclxuXHRcdFx0XHRcdFx0XHQ8L1N0ZXBMYWJlbD5cclxuXHRcdFx0XHRcdFx0PC9TdGVwPlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0PC9TdGVwcGVyPlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHR7YWN0aXZlU3RlcCA9PT0gc3RlcHMubGVuZ3RoID8gKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnN0cnVjdGlvbnN9PlxyXG5cdFx0XHRcdFx0XHRcdFx0QWxsIHN0ZXBzIGNvbXBsZXRlZCAtIHlvdSZhcG9zO3JlIGZpbmlzaGVkXHJcblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZVJlc2V0fVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0XHRcdFx0XHRSZWNvbW1lbmNlclxyXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdHsvKiA8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHQvLyBvbkNsaWNrPXtoYW5kbGVSZXNldH1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdFx0VmFsaWRlclxyXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPiAqL31cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnN0cnVjdGlvbnN9PlxyXG5cdFx0XHRcdFx0XHRcdFx0e2dldFN0ZXBDb250ZW50KGFjdGl2ZVN0ZXApfVxyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17YWN0aXZlU3RlcCA9PT0gMH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlQmFja31cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFJldG91clxyXG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I9J3ByaW1hcnknXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZU5leHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7YWN0aXZlU3RlcCA9PT0gc3RlcHMubGVuZ3RoIC0gMVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD8gJ1ZhbGlkZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnU3VpdmFudCd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4vLyBcdGNvbnN0IHBhcnRlbmFpcmVzTm9tcyA9IGF3YWl0IExpc3RBbGxQYXJ0ZW5haXJlc05vbXMoKTtcclxuLy8gXHRyZXR1cm4ge1xyXG4vLyBcdFx0cGF0aHM6IHBhcnRlbmFpcmVzTm9tcy5tYXAoKG5vbSkgPT4ge1xyXG4vLyBcdFx0XHRyZXR1cm4ge1xyXG4vLyBcdFx0XHRcdHBhcmFtczogeyBpZDogbm9tLl9pZCwgc2x1Zzogbm9tLnNsdWcgfSxcclxuLy8gXHRcdFx0fTtcclxuLy8gXHRcdH0pLFxyXG4vLyBcdFx0ZmFsbGJhY2s6IGZhbHNlLFxyXG4vLyBcdH07XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbi8vIFx0cmV0dXJuIGxpc3RHaXRlc05vbXMoKS50aGVuKChnaXRlcykgPT4ge1xyXG4vLyBcdFx0aWYgKGdpdGVzLmVycm9yKSB7XHJcbi8vIFx0XHRcdGNvbnNvbGUubG9nKGdpdGVzLmVycm9yKTtcclxuLy8gXHRcdH0gZWxzZSB7XHJcbi8vIFx0XHRcdGNvbnNvbGUubG9nKCdjbGcgZGFucyBsZSBlbHNlJywgZ2l0ZXMpO1xyXG4vLyBcdFx0XHRyZXR1cm4ge1xyXG4vLyBcdFx0XHRcdHByb3BzOiB7IGdpdGVzIH0sXHJcbi8vIFx0XHRcdH07XHJcbi8vIFx0XHR9XHJcbi8vIFx0fSk7XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VydmF0aW9uRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==