webpackHotUpdate_N_E("pages/reservation",{

/***/ "./components/reservation/ReservationForm.js":
/*!***************************************************!*\
  !*** ./components/reservation/ReservationForm.js ***!
  \***************************************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
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
/* harmony import */ var _material_ui_icons_GroupAdd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/GroupAdd */ "./node_modules/@material-ui/icons/GroupAdd.js");
/* harmony import */ var _material_ui_icons_GroupAdd__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GroupAdd__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_VideoLabel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/VideoLabel */ "./node_modules/@material-ui/icons/VideoLabel.js");
/* harmony import */ var _material_ui_icons_VideoLabel__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VideoLabel__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_StepConnector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/StepConnector */ "./node_modules/@material-ui/core/esm/StepConnector/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_House__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/House */ "./node_modules/@material-ui/icons/House.js");
/* harmony import */ var _material_ui_icons_House__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_House__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/EmojiPeople */ "./node_modules/@material-ui/icons/EmojiPeople.js");
/* harmony import */ var _material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/CheckCircle */ "./node_modules/@material-ui/icons/CheckCircle.js");
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_21__);





var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\reservation\\ReservationForm.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _this = undefined,
    _s3 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;


















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
})(_material_ui_core_StepConnector__WEBPACK_IMPORTED_MODULE_16__["default"]);
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
      lineNumber: 71,
      columnNumber: 3
    }
  }, completed ? __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default.a, {
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
})(_material_ui_core_StepConnector__WEBPACK_IMPORTED_MODULE_16__["default"]);
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
    1: __jsx(_material_ui_icons_House__WEBPACK_IMPORTED_MODULE_19___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 6
      }
    }),
    2: __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_13___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 6
      }
    }),
    3: __jsx(_material_ui_icons_EmojiPeople__WEBPACK_IMPORTED_MODULE_20___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 6
      }
    }),
    4: __jsx(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_21___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 6
      }
    })
  };
  return __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_8__["default"])(classes.root, (_clsx2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_clsx2, classes.active, active), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_clsx2, classes.completed, completed), _clsx2)),
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
    }
  };
});

function getSteps() {
  return ['Information sur la location', 'Informations complémentaires', 'Vos coordonnées', 'Récapitulatif'];
}

var infoLoc = function infoLoc() {
  return __jsx("div", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 2
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 3
    }
  }, "Informations sur la location"), __jsx("div", {
    "class": "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 3
    }
  }, __jsx("label", {
    htmlFor: "exampleFormControlSelect1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 4
    }
  }, "Example select"), __jsx("select", {
    "class": "form-control",
    id: "exampleFormControlSelect1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 4
    }
  }, gites.map(function (gite, i) {
    return __jsx("option", {
      key: i,
      value: gite.slug,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 6
      }
    }, gite.nom);
  }))), __jsx("div", {
    "class": "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 3
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 4
    }
  }, "Nombre de personnes total"), __jsx("input", {
    type: "number",
    "class": "form-control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 4
    }
  })), __jsx("div", {
    "class": "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 3
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 4
    }
  }, "Dont enfants de moins de 18 ans"), __jsx("input", {
    type: "number",
    "class": "form-control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 4
    }
  })), __jsx("div", {
    "class": "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 3
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 4
    }
  }, "Date d'arriv\xE9e"), __jsx("input", {
    type: "date",
    "class": "form-control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 4
    }
  })), __jsx("div", {
    "class": "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 3
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 4
    }
  }, "Date de d\xE9part"), __jsx("input", {
    type: "date",
    "class": "form-control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 4
    }
  })));
};

var infoComp = function infoComp() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 2
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 3
    }
  }, "Informations suppl\xE9mentaires"), __jsx("fieldset", {
    style: {
      border: '1px solid black'
    },
    className: "pl-3 pb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 3
    }
  }, __jsx("legend", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 4
    }
  }, ' ', __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 5
    }
  }, "Merci d'indiquer si vous nous avez d\xE9ja contact\xE9 par :")), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "col",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "form-check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 6
    }
  }, __jsx("input", {
    className: "form-check-input",
    type: "checkbox",
    value: "",
    id: "defaultCheck1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 7
    }
  }), __jsx("label", {
    className: "form-check-label",
    htmlFor: "defaultCheck1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 7
    }
  }, "Mail"))), __jsx("div", {
    className: "col",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "form-check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 6
    }
  }, __jsx("input", {
    className: "form-check-input",
    type: "checkbox",
    value: "",
    id: "defaultCheck1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 7
    }
  }), __jsx("label", {
    className: "form-check-label",
    htmlFor: "defaultCheck1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 7
    }
  }, "T\xE9l\xE9phone"))), __jsx("div", {
    className: "col",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "form-check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 6
    }
  }, __jsx("input", {
    className: "form-check-input",
    type: "checkbox",
    value: "",
    id: "defaultCheck1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 7
    }
  }), __jsx("label", {
    className: "form-check-label",
    htmlFor: "defaultCheck1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 7
    }
  }, "Abritel"))), __jsx("div", {
    className: "col",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "form-check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 6
    }
  }, __jsx("input", {
    className: "form-check-input",
    type: "checkbox",
    value: "",
    id: "defaultCheck1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 7
    }
  }), __jsx("label", {
    className: "form-check-label",
    htmlFor: "defaultCheck1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 7
    }
  }, "Leboncoin"))), __jsx("div", {
    className: "col",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "form-check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 6
    }
  }, __jsx("input", {
    className: "form-check-input",
    type: "checkbox",
    value: "",
    id: "defaultCheck1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 7
    }
  }), __jsx("label", {
    className: "form-check-label",
    htmlFor: "defaultCheck1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 7
    }
  }, "Autre"))))), __jsx("fieldset", {
    style: {
      border: '1px solid black'
    },
    className: "pl-3 pb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 3
    }
  }, __jsx("legend", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 4
    }
  }, ' ', __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 5
    }
  }, "S'il y a des chiens, merci d'indiquer leur nombre (3\u20AC/jour/animal)")), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 4
    }
  }, __jsx("input", {
    type: "number",
    className: "form-control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 5
    }
  }))), __jsx("fieldset", {
    style: {
      border: '1px solid black'
    },
    className: "pl-3 pb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 3
    }
  }, __jsx("legend", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 4
    }
  }, ' ', __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 5
    }
  }, "Souhaitez-vous l'option lit fait \xE0 l'arriv\xE9e ?")), __jsx("div", {
    className: "form-check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 4
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
      lineNumber: 337,
      columnNumber: 5
    }
  }), __jsx("label", {
    className: "form-check-label",
    htmlFor: "exampleRadios1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 5
    }
  }, "Oui")), __jsx("div", {
    className: "form-check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 4
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
      lineNumber: 350,
      columnNumber: 5
    }
  }), __jsx("label", {
    className: "form-check-label",
    htmlFor: "exampleRadios2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 5
    }
  }, "Non"))));
};

var Coord = function Coord() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 2
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 3
    }
  }, "Vos coordonn\xE9es"), __jsx("div", {
    className: "form-row mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "col-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 4
    }
  }, __jsx("select", {
    "class": "form-control",
    id: "exampleFormControlSelect1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 5
    }
  }, __jsx("option", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 6
    }
  }, "Mr & Mme"), __jsx("option", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 6
    }
  }, "Mr"), __jsx("option", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 6
    }
  }, "Mme"), __jsx("option", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 6
    }
  }, "Entreprise"), __jsx("option", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 6
    }
  }, "Association"))), __jsx("div", {
    className: "col-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 4
    }
  }, __jsx("input", {
    type: "text",
    "class": "form-control",
    placeholder: "Nom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 5
    }
  })), __jsx("div", {
    className: "col-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 4
    }
  }, __jsx("input", {
    type: "text",
    "class": "form-control",
    placeholder: "Pr\xE9nom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 5
    }
  }))), __jsx("div", {
    "class": "form-row mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 3
    }
  }, __jsx("div", {
    "class": "col-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 4
    }
  }, __jsx("input", {
    type: "text",
    "class": "form-control",
    placeholder: "Adresse",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 5
    }
  })), __jsx("div", {
    "class": "col-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 4
    }
  }, __jsx("input", {
    type: "text",
    "class": "form-control",
    placeholder: "Code Postal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 5
    }
  })), __jsx("div", {
    "class": "col-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 4
    }
  }, __jsx("input", {
    type: "text",
    "class": "form-control",
    placeholder: "Ville",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 5
    }
  })), __jsx("div", {
    "class": "col",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 4
    }
  }, __jsx("input", {
    type: "text",
    "class": "form-control",
    placeholder: "Pays",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 5
    }
  }))), __jsx("div", {
    "class": "form-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 3
    }
  }, __jsx("div", {
    "class": "col-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 4
    }
  }, __jsx("input", {
    type: "tel",
    pattern: "[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}",
    "class": "form-control",
    placeholder: "T\xE9l\xE9phone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 5
    }
  })), __jsx("div", {
    "class": "col-7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 4
    }
  }, __jsx("input", {
    type: "mail",
    "class": "form-control",
    placeholder: "Email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 5
    }
  }))));
};

_c3 = Coord;

var recap = function recap() {
  return __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 21
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

var ReservationForm = function ReservationForm(_ref) {
  _s3();

  var gitesNoms = _ref.gitesNoms;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(1),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
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

  return __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 3
    }
  }, __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    alternativeLabel: true,
    activeStep: activeStep,
    connector: __jsx(ColorlibConnector, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 458,
        columnNumber: 17
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 5
    }
  }, steps.map(function (label) {
    return __jsx(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 460,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_11__["default"], {
      StepIconComponent: ColorlibStepIcon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 461,
        columnNumber: 8
      }
    }, label));
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 5
    }
  }, activeStep === steps.length ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_18__["default"], {
    className: classes.instructions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 8
    }
  }, "All steps completed - you're finished"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
    onClick: handleReset,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 8
    }
  }, "Recommencer")) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_18__["default"], {
    className: classes.instructions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 8
    }
  }, getStepContent(activeStep)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
    disabled: activeStep === 0,
    onClick: handleBack,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 9
    }
  }, "Retour"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
    variant: "contained",
    color: "primary",
    onClick: handleNext,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 9
    }
  }, activeStep === steps.length - 1 ? 'Valider' : 'Suivant'))))));
};

_s3(ReservationForm, "TdoGtQwrKhHoUpn8RF3+b/zEF2o=", false, function () {
  return [useStyles];
});

_c4 = ReservationForm;
function getStaticPaths() {
  return _getStaticPaths.apply(this, arguments);
}

function _getStaticPaths() {
  _getStaticPaths = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var partenairesNoms;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return ListAllPartenairesNoms();

          case 2:
            partenairesNoms = _context.sent;
            return _context.abrupt("return", {
              paths: partenairesNoms.map(function (nom) {
                return {
                  params: {
                    id: nom._id,
                    slug: nom.slug
                  }
                };
              }),
              fallback: false
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getStaticPaths.apply(this, arguments);
}

function getStaticProps(_x) {
  return _getStaticProps.apply(this, arguments);
}

function _getStaticProps() {
  _getStaticProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(context) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_5__["listGitesNoms"])().then(function (gitesnoms) {
              if (gitesNoms.error) {
                console.log(gitesNoms.error);
              } else {
                return {
                  props: {
                    gitesNoms: gitesNoms
                  }
                };
              }
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getStaticProps.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (ReservationForm);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "QontoStepIcon");
$RefreshReg$(_c2, "ColorlibStepIcon");
$RefreshReg$(_c3, "Coord");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXNlcnZhdGlvbi9SZXNlcnZhdGlvbkZvcm0uanMiXSwibmFtZXMiOlsiUW9udG9Db25uZWN0b3IiLCJ3aXRoU3R5bGVzIiwiYWx0ZXJuYXRpdmVMYWJlbCIsInRvcCIsImxlZnQiLCJyaWdodCIsImFjdGl2ZSIsImJvcmRlckNvbG9yIiwiY29tcGxldGVkIiwibGluZSIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwiU3RlcENvbm5lY3RvciIsInVzZVFvbnRvU3RlcEljb25TdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImNvbG9yIiwiZGlzcGxheSIsImhlaWdodCIsImFsaWduSXRlbXMiLCJjaXJjbGUiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsImZvbnRTaXplIiwiUW9udG9TdGVwSWNvbiIsInByb3BzIiwiY2xhc3NlcyIsImNsc3giLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiQ29sb3JsaWJDb25uZWN0b3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJib3JkZXIiLCJ1c2VDb2xvcmxpYlN0ZXBJY29uU3R5bGVzIiwianVzdGlmeUNvbnRlbnQiLCJib3hTaGFkb3ciLCJDb2xvcmxpYlN0ZXBJY29uIiwiaWNvbnMiLCJTdHJpbmciLCJpY29uIiwibm9kZSIsInVzZVN0eWxlcyIsInRoZW1lIiwiYnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwiaW5zdHJ1Y3Rpb25zIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiZ2V0U3RlcHMiLCJpbmZvTG9jIiwiZ2l0ZXMiLCJtYXAiLCJnaXRlIiwiaSIsInNsdWciLCJub20iLCJpbmZvQ29tcCIsIkNvb3JkIiwicmVjYXAiLCJnZXRTdGVwQ29udGVudCIsInN0ZXAiLCJSZXNlcnZhdGlvbkZvcm0iLCJnaXRlc05vbXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiYWN0aXZlU3RlcCIsInNldEFjdGl2ZVN0ZXAiLCJzdGVwcyIsImhhbmRsZU5leHQiLCJwcmV2QWN0aXZlU3RlcCIsImhhbmRsZUJhY2siLCJoYW5kbGVSZXNldCIsImxhYmVsIiwibGVuZ3RoIiwiZ2V0U3RhdGljUGF0aHMiLCJMaXN0QWxsUGFydGVuYWlyZXNOb21zIiwicGFydGVuYWlyZXNOb21zIiwicGF0aHMiLCJwYXJhbXMiLCJpZCIsIl9pZCIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwibGlzdEdpdGVzTm9tcyIsInRoZW4iLCJnaXRlc25vbXMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLDJFQUFVLENBQUM7QUFDakNDLGtCQUFnQixFQUFFO0FBQ2pCQyxPQUFHLEVBQUUsRUFEWTtBQUVqQkMsUUFBSSxFQUFFLG1CQUZXO0FBR2pCQyxTQUFLLEVBQUU7QUFIVSxHQURlO0FBTWpDQyxRQUFNLEVBQUU7QUFDUCxlQUFXO0FBQ1ZDLGlCQUFXLEVBQUU7QUFESDtBQURKLEdBTnlCO0FBV2pDQyxXQUFTLEVBQUU7QUFDVixlQUFXO0FBQ1ZELGlCQUFXLEVBQUU7QUFESDtBQURELEdBWHNCO0FBZ0JqQ0UsTUFBSSxFQUFFO0FBQ0xGLGVBQVcsRUFBRSxTQURSO0FBRUxHLGtCQUFjLEVBQUUsQ0FGWDtBQUdMQyxnQkFBWSxFQUFFO0FBSFQ7QUFoQjJCLENBQUQsQ0FBVixDQXFCcEJDLHdFQXJCb0IsQ0FBdkI7QUF1QkEsSUFBTUMsc0JBQXNCLEdBQUdDLDJFQUFVLENBQUM7QUFDekNDLE1BQUksRUFBRTtBQUNMQyxTQUFLLEVBQUUsU0FERjtBQUVMQyxXQUFPLEVBQUUsTUFGSjtBQUdMQyxVQUFNLEVBQUUsRUFISDtBQUlMQyxjQUFVLEVBQUU7QUFKUCxHQURtQztBQU96Q2IsUUFBTSxFQUFFO0FBQ1BVLFNBQUssRUFBRTtBQURBLEdBUGlDO0FBVXpDSSxRQUFNLEVBQUU7QUFDUEMsU0FBSyxFQUFFLENBREE7QUFFUEgsVUFBTSxFQUFFLENBRkQ7QUFHUFAsZ0JBQVksRUFBRSxLQUhQO0FBSVBXLG1CQUFlLEVBQUU7QUFKVixHQVZpQztBQWdCekNkLFdBQVMsRUFBRTtBQUNWUSxTQUFLLEVBQUUsU0FERztBQUVWTyxVQUFNLEVBQUUsQ0FGRTtBQUdWQyxZQUFRLEVBQUU7QUFIQTtBQWhCOEIsQ0FBRCxDQUF6Qzs7QUF1QkEsU0FBU0MsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFBQTs7QUFDN0IsTUFBTUMsT0FBTyxHQUFHZCxzQkFBc0IsRUFBdEM7QUFENkIsTUFFckJQLE1BRnFCLEdBRUNvQixLQUZELENBRXJCcEIsTUFGcUI7QUFBQSxNQUViRSxTQUZhLEdBRUNrQixLQUZELENBRWJsQixTQUZhO0FBSTdCLFNBQ0M7QUFDQyxhQUFTLEVBQUVvQixvREFBSSxDQUFDRCxPQUFPLENBQUNaLElBQVQsZ0dBQ2JZLE9BQU8sQ0FBQ3JCLE1BREssRUFDSUEsTUFESixFQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUVFLFNBQVMsR0FDVCxNQUFDLGdFQUFEO0FBQU8sYUFBUyxFQUFFbUIsT0FBTyxDQUFDbkIsU0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURTLEdBR1Q7QUFBSyxhQUFTLEVBQUVtQixPQUFPLENBQUNQLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQUREO0FBWUE7O0dBaEJRSyxhO1VBQ1FaLHNCOzs7S0FEUlksYTtBQWtCVEEsYUFBYSxDQUFDSSxTQUFkLEdBQTBCO0FBQ3pCO0FBQ0Q7QUFDQTtBQUNDdkIsUUFBTSxFQUFFd0IsaURBQVMsQ0FBQ0MsSUFKTzs7QUFLekI7QUFDRDtBQUNBO0FBQ0N2QixXQUFTLEVBQUVzQixpREFBUyxDQUFDQztBQVJJLENBQTFCO0FBV0EsSUFBTUMsaUJBQWlCLEdBQUcvQiwyRUFBVSxDQUFDO0FBQ3BDQyxrQkFBZ0IsRUFBRTtBQUNqQkMsT0FBRyxFQUFFO0FBRFksR0FEa0I7QUFJcENHLFFBQU0sRUFBRTtBQUNQLGVBQVc7QUFDVjJCLHFCQUFlLEVBQ2Q7QUFGUztBQURKLEdBSjRCO0FBVXBDekIsV0FBUyxFQUFFO0FBQ1YsZUFBVztBQUNWeUIscUJBQWUsRUFDZDtBQUZTO0FBREQsR0FWeUI7QUFnQnBDeEIsTUFBSSxFQUFFO0FBQ0xTLFVBQU0sRUFBRSxDQURIO0FBRUxnQixVQUFNLEVBQUUsQ0FGSDtBQUdMWixtQkFBZSxFQUFFLFNBSFo7QUFJTFgsZ0JBQVksRUFBRTtBQUpUO0FBaEI4QixDQUFELENBQVYsQ0FzQnZCQyx3RUF0QnVCLENBQTFCO0FBd0JBLElBQU11Qix5QkFBeUIsR0FBR3JCLDJFQUFVLENBQUM7QUFDNUNDLE1BQUksRUFBRTtBQUNMTyxtQkFBZSxFQUFFLE1BRFo7QUFFTEMsVUFBTSxFQUFFLENBRkg7QUFHTFAsU0FBSyxFQUFFLE1BSEY7QUFJTEssU0FBSyxFQUFFLEVBSkY7QUFLTEgsVUFBTSxFQUFFLEVBTEg7QUFNTEQsV0FBTyxFQUFFLE1BTko7QUFPTE4sZ0JBQVksRUFBRSxLQVBUO0FBUUx5QixrQkFBYyxFQUFFLFFBUlg7QUFTTGpCLGNBQVUsRUFBRTtBQVRQLEdBRHNDO0FBWTVDYixRQUFNLEVBQUU7QUFDUDJCLG1CQUFlLEVBQ2Qsd0ZBRk07QUFHUEksYUFBUyxFQUFFO0FBSEosR0Fab0M7QUFpQjVDN0IsV0FBUyxFQUFFO0FBQ1Z5QixtQkFBZSxFQUNkO0FBRlM7QUFqQmlDLENBQUQsQ0FBNUM7O0FBdUJBLFNBQVNLLGdCQUFULENBQTBCWixLQUExQixFQUFpQztBQUFBOztBQUFBOztBQUNoQyxNQUFNQyxPQUFPLEdBQUdRLHlCQUF5QixFQUF6QztBQURnQyxNQUV4QjdCLE1BRndCLEdBRUZvQixLQUZFLENBRXhCcEIsTUFGd0I7QUFBQSxNQUVoQkUsU0FGZ0IsR0FFRmtCLEtBRkUsQ0FFaEJsQixTQUZnQjtBQUloQyxNQUFNK0IsS0FBSyxHQUFHO0FBQ2IsT0FBRyxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEVTtBQUViLE9BQUcsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRlU7QUFHYixPQUFHLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhVO0FBSWIsT0FBRyxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKVSxHQUFkO0FBT0EsU0FDQztBQUNDLGFBQVMsRUFBRVgsb0RBQUksQ0FBQ0QsT0FBTyxDQUFDWixJQUFULGtIQUNiWSxPQUFPLENBQUNyQixNQURLLEVBQ0lBLE1BREoscUdBRWJxQixPQUFPLENBQUNuQixTQUZLLEVBRU9BLFNBRlAsV0FEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFK0IsS0FBSyxDQUFDQyxNQUFNLENBQUNkLEtBQUssQ0FBQ2UsSUFBUCxDQUFQLENBTFAsQ0FERDtBQVNBOztJQXBCUUgsZ0I7VUFDUUgseUI7OztNQURSRyxnQjtBQXNCVEEsZ0JBQWdCLENBQUNULFNBQWpCLEdBQTZCO0FBQzVCO0FBQ0Q7QUFDQTtBQUNDdkIsUUFBTSxFQUFFd0IsaURBQVMsQ0FBQ0MsSUFKVTs7QUFLNUI7QUFDRDtBQUNBO0FBQ0N2QixXQUFTLEVBQUVzQixpREFBUyxDQUFDQyxJQVJPOztBQVM1QjtBQUNEO0FBQ0E7QUFDQ1UsTUFBSSxFQUFFWCxpREFBUyxDQUFDWTtBQVpZLENBQTdCO0FBZUEsSUFBTUMsU0FBUyxHQUFHN0IsMkVBQVUsQ0FBQyxVQUFDOEIsS0FBRDtBQUFBLFNBQVk7QUFDeEM3QixRQUFJLEVBQUU7QUFDTE0sV0FBSyxFQUFFO0FBREYsS0FEa0M7QUFJeEN3QixVQUFNLEVBQUU7QUFDUEMsaUJBQVcsRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQUROLEtBSmdDO0FBT3hDQyxnQkFBWSxFQUFFO0FBQ2JDLGVBQVMsRUFBRUwsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZCxDQURFO0FBRWJHLGtCQUFZLEVBQUVOLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQ7QUFGRDtBQVAwQixHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUFhQSxTQUFTSSxRQUFULEdBQW9CO0FBQ25CLFNBQU8sQ0FDTiw2QkFETSxFQUVOLDhCQUZNLEVBR04saUJBSE0sRUFJTixlQUpNLENBQVA7QUFNQTs7QUFFRCxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFNBQ2Y7QUFBSyxhQUFTLEVBQUMsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FERCxFQUdDO0FBQUssYUFBTSxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFPLFdBQU8sRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURELEVBRUM7QUFBUSxhQUFNLGNBQWQ7QUFBNkIsTUFBRSxFQUFDLDJCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VDLEtBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBLFdBQ1Y7QUFBUSxTQUFHLEVBQUVBLENBQWI7QUFBZ0IsV0FBSyxFQUFFRCxJQUFJLENBQUNFLElBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRUYsSUFBSSxDQUFDRyxHQURQLENBRFU7QUFBQSxHQUFWLENBREYsQ0FGRCxDQUhELEVBYUM7QUFBSyxhQUFNLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREQsRUFFQztBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLGFBQU0sY0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZELENBYkQsRUFpQkM7QUFBSyxhQUFNLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBREQsRUFFQztBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLGFBQU0sY0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZELENBakJELEVBcUJDO0FBQUssYUFBTSxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURELEVBRUM7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixhQUFNLGNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRCxDQXJCRCxFQXlCQztBQUFLLGFBQU0sWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERCxFQUVDO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBTSxjQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsQ0F6QkQsQ0FEZTtBQUFBLENBQWhCOztBQWdDQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLFNBQ2hCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQURELEVBRUM7QUFBVSxTQUFLLEVBQUU7QUFBRXpCLFlBQU0sRUFBRTtBQUFWLEtBQWpCO0FBQWdELGFBQVMsRUFBQyxXQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLEdBREYsRUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9FQUZELENBREQsRUFLQztBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUNDLGFBQVMsRUFBQyxrQkFEWDtBQUVDLFFBQUksRUFBQyxVQUZOO0FBR0MsU0FBSyxFQUFDLEVBSFA7QUFJQyxNQUFFLEVBQUMsZUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFPQztBQUNDLGFBQVMsRUFBQyxrQkFEWDtBQUVDLFdBQU8sRUFBQyxlQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRCxDQURELENBREQsRUFnQkM7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFDQyxhQUFTLEVBQUMsa0JBRFg7QUFFQyxRQUFJLEVBQUMsVUFGTjtBQUdDLFNBQUssRUFBQyxFQUhQO0FBSUMsTUFBRSxFQUFDLGVBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBT0M7QUFDQyxhQUFTLEVBQUMsa0JBRFg7QUFFQyxXQUFPLEVBQUMsZUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBELENBREQsQ0FoQkQsRUErQkM7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFDQyxhQUFTLEVBQUMsa0JBRFg7QUFFQyxRQUFJLEVBQUMsVUFGTjtBQUdDLFNBQUssRUFBQyxFQUhQO0FBSUMsTUFBRSxFQUFDLGVBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBT0M7QUFDQyxhQUFTLEVBQUMsa0JBRFg7QUFFQyxXQUFPLEVBQUMsZUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEQsQ0FERCxDQS9CRCxFQThDQztBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUNDLGFBQVMsRUFBQyxrQkFEWDtBQUVDLFFBQUksRUFBQyxVQUZOO0FBR0MsU0FBSyxFQUFDLEVBSFA7QUFJQyxNQUFFLEVBQUMsZUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFPQztBQUNDLGFBQVMsRUFBQyxrQkFEWDtBQUVDLFdBQU8sRUFBQyxlQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEQsQ0FERCxDQTlDRCxFQTZEQztBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUNDLGFBQVMsRUFBQyxrQkFEWDtBQUVDLFFBQUksRUFBQyxVQUZOO0FBR0MsU0FBSyxFQUFDLEVBSFA7QUFJQyxNQUFFLEVBQUMsZUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFPQztBQUNDLGFBQVMsRUFBQyxrQkFEWDtBQUVDLFdBQU8sRUFBQyxlQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRCxDQURELENBN0RELENBTEQsQ0FGRCxFQXFGQztBQUFVLFNBQUssRUFBRTtBQUFFQSxZQUFNLEVBQUU7QUFBVixLQUFqQjtBQUFnRCxhQUFTLEVBQUMsV0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxHQURGLEVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrRUFGRCxDQURELEVBUUM7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixhQUFTLEVBQUMsY0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBUkQsQ0FyRkQsRUFpR0M7QUFBVSxTQUFLLEVBQUU7QUFBRUEsWUFBTSxFQUFFO0FBQVYsS0FBakI7QUFBZ0QsYUFBUyxFQUFDLFdBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsR0FERixFQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNERBRkQsQ0FERCxFQUtDO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQ0MsYUFBUyxFQUFDLGtCQURYO0FBRUMsUUFBSSxFQUFDLE9BRk47QUFHQyxRQUFJLEVBQUMsZUFITjtBQUlDLE1BQUUsRUFBQyxnQkFKSjtBQUtDLFNBQUssRUFBQyxTQUxQO0FBTUMsV0FBTyxNQU5SO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQVNDO0FBQU8sYUFBUyxFQUFDLGtCQUFqQjtBQUFvQyxXQUFPLEVBQUMsZ0JBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FURCxDQUxELEVBa0JDO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQ0MsYUFBUyxFQUFDLGtCQURYO0FBRUMsUUFBSSxFQUFDLE9BRk47QUFHQyxRQUFJLEVBQUMsZUFITjtBQUlDLE1BQUUsRUFBQyxnQkFKSjtBQUtDLFNBQUssRUFBQyxTQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQVFDO0FBQU8sYUFBUyxFQUFDLGtCQUFqQjtBQUFvQyxXQUFPLEVBQUMsZ0JBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FSRCxDQWxCRCxDQWpHRCxDQURnQjtBQUFBLENBQWpCOztBQW1JQSxJQUFNMEIsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxTQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURELEVBRUM7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBUSxhQUFNLGNBQWQ7QUFBNkIsTUFBRSxFQUFDLDJCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxFQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRCxFQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FIRCxFQUlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkQsRUFLQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxELENBREQsQ0FERCxFQVdDO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBTSxjQUF6QjtBQUF3QyxlQUFXLEVBQUMsS0FBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBWEQsRUFjQztBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLGFBQU0sY0FBekI7QUFBd0MsZUFBVyxFQUFDLFdBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQWRELENBRkQsRUFvQkM7QUFBSyxhQUFNLGVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBTSxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLGFBQU0sY0FBekI7QUFBd0MsZUFBVyxFQUFDLFNBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURELEVBSUM7QUFBSyxhQUFNLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQ0MsUUFBSSxFQUFDLE1BRE47QUFFQyxhQUFNLGNBRlA7QUFHQyxlQUFXLEVBQUMsYUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FKRCxFQVdDO0FBQUssYUFBTSxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLGFBQU0sY0FBekI7QUFBd0MsZUFBVyxFQUFDLE9BQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQVhELEVBY0M7QUFBSyxhQUFNLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBTSxjQUF6QjtBQUF3QyxlQUFXLEVBQUMsTUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBZEQsQ0FwQkQsRUFzQ0M7QUFBSyxhQUFNLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBTSxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUNDLFFBQUksRUFBQyxLQUROO0FBRUMsV0FBTyxFQUFDLDhDQUZUO0FBR0MsYUFBTSxjQUhQO0FBSUMsZUFBVyxFQUFDLGlCQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURELEVBU0M7QUFBSyxhQUFNLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBTSxjQUF6QjtBQUF3QyxlQUFXLEVBQUMsT0FBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBVEQsQ0F0Q0QsQ0FEYTtBQUFBLENBQWQ7O01BQU1BLEs7O0FBc0ROLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsU0FBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQU47QUFBQSxDQUFkOztBQUVBLFNBQVNDLGNBQVQsQ0FBd0JDLElBQXhCLEVBQThCO0FBQzdCLFVBQVFBLElBQVI7QUFDQyxTQUFLLENBQUw7QUFDQyxhQUFPWCxPQUFPLEVBQWQ7O0FBQ0QsU0FBSyxDQUFMO0FBQ0MsYUFBT08sUUFBUSxFQUFmOztBQUNELFNBQUssQ0FBTDtBQUNDLGFBQU9DLEtBQUssRUFBWjs7QUFDRCxTQUFLLENBQUw7QUFDQyxhQUFPQyxLQUFLLEVBQVo7O0FBQ0Q7QUFDQyxhQUFPLFFBQVA7QUFWRjtBQVlBOztBQUVELElBQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBbUI7QUFBQTs7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQzFDLE1BQU10QyxPQUFPLEdBQUdnQixTQUFTLEVBQXpCOztBQUQwQyx3QkFFTnVCLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBRk07QUFBQTtBQUFBLE1BRW5DQyxVQUZtQztBQUFBLE1BRXZCQyxhQUZ1Qjs7QUFHMUMsTUFBTUMsS0FBSyxHQUFHbkIsUUFBUSxFQUF0Qjs7QUFFQSxNQUFNb0IsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN4QkYsaUJBQWEsQ0FBQyxVQUFDRyxjQUFEO0FBQUEsYUFBb0JBLGNBQWMsR0FBRyxDQUFyQztBQUFBLEtBQUQsQ0FBYjtBQUNBLEdBRkQ7O0FBSUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN4QkosaUJBQWEsQ0FBQyxVQUFDRyxjQUFEO0FBQUEsYUFBb0JBLGNBQWMsR0FBRyxDQUFyQztBQUFBLEtBQUQsQ0FBYjtBQUNBLEdBRkQ7O0FBSUEsTUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN6QkwsaUJBQWEsQ0FBQyxDQUFELENBQWI7QUFDQSxHQUZEOztBQUlBLFNBQ0M7QUFBSyxhQUFTLEVBQUUxQyxPQUFPLENBQUNaLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxpRUFBRDtBQUNDLG9CQUFnQixNQURqQjtBQUVDLGNBQVUsRUFBRXFELFVBRmI7QUFHQyxhQUFTLEVBQUUsTUFBQyxpQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFRSxLQUFLLENBQUNoQixHQUFOLENBQVUsVUFBQ3FCLEtBQUQ7QUFBQSxXQUNWLE1BQUMsK0RBQUQ7QUFBTSxTQUFHLEVBQUVBLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDLE1BQUMsb0VBQUQ7QUFBVyx1QkFBaUIsRUFBRXJDLGdCQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0VxQyxLQURGLENBREQsQ0FEVTtBQUFBLEdBQVYsQ0FKRixDQURELEVBYUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFUCxVQUFVLEtBQUtFLEtBQUssQ0FBQ00sTUFBckIsR0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxxRUFBRDtBQUFZLGFBQVMsRUFBRWpELE9BQU8sQ0FBQ3FCLFlBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBREQsRUFJQyxNQUFDLGlFQUFEO0FBQ0MsV0FBTyxFQUFFMEIsV0FEVjtBQUVDLGFBQVMsRUFBRS9DLE9BQU8sQ0FBQ2tCLE1BRnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkQsQ0FEQSxHQWlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxxRUFBRDtBQUFZLGFBQVMsRUFBRWxCLE9BQU8sQ0FBQ3FCLFlBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRWMsY0FBYyxDQUFDTSxVQUFELENBRGhCLENBREQsRUFJQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxpRUFBRDtBQUNDLFlBQVEsRUFBRUEsVUFBVSxLQUFLLENBRDFCO0FBRUMsV0FBTyxFQUFFSyxVQUZWO0FBR0MsYUFBUyxFQUFFOUMsT0FBTyxDQUFDa0IsTUFIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELEVBT0MsTUFBQyxpRUFBRDtBQUNDLFdBQU8sRUFBQyxXQURUO0FBRUMsU0FBSyxFQUFDLFNBRlA7QUFHQyxXQUFPLEVBQUUwQixVQUhWO0FBSUMsYUFBUyxFQUFFNUMsT0FBTyxDQUFDa0IsTUFKcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFdUIsVUFBVSxLQUFLRSxLQUFLLENBQUNNLE1BQU4sR0FBZSxDQUE5QixHQUNFLFNBREYsR0FFRSxTQVBKLENBUEQsQ0FKRCxDQWxCRixDQWJELENBREQsQ0FERDtBQTREQSxDQTdFRDs7SUFBTVosZTtVQUNXckIsUzs7O01BRFhxQixlO0FBK0VDLFNBQWVhLGNBQXRCO0FBQUE7QUFBQTs7O3FNQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ3dCQyxzQkFBc0IsRUFEOUM7O0FBQUE7QUFDQUMsMkJBREE7QUFBQSw2Q0FFQztBQUNOQyxtQkFBSyxFQUFFRCxlQUFlLENBQUN6QixHQUFoQixDQUFvQixVQUFDSSxHQUFELEVBQVM7QUFDbkMsdUJBQU87QUFDTnVCLHdCQUFNLEVBQUU7QUFBRUMsc0JBQUUsRUFBRXhCLEdBQUcsQ0FBQ3lCLEdBQVY7QUFBZTFCLHdCQUFJLEVBQUVDLEdBQUcsQ0FBQ0Q7QUFBekI7QUFERixpQkFBUDtBQUdBLGVBSk0sQ0FERDtBQU1OMkIsc0JBQVEsRUFBRTtBQU5KLGFBRkQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQVlBLFNBQWVDLGNBQXRCO0FBQUE7QUFBQTs7O3FNQUFPLGtCQUE4QkMsT0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhDQUNDQywwRUFBYSxHQUFHQyxJQUFoQixDQUFxQixVQUFDQyxTQUFELEVBQWU7QUFDMUMsa0JBQUl4QixTQUFTLENBQUN5QixLQUFkLEVBQXFCO0FBQ3BCQyx1QkFBTyxDQUFDQyxHQUFSLENBQVkzQixTQUFTLENBQUN5QixLQUF0QjtBQUNBLGVBRkQsTUFFTztBQUNOLHVCQUFPO0FBQ05oRSx1QkFBSyxFQUFFO0FBQUV1Qyw2QkFBUyxFQUFUQTtBQUFGO0FBREQsaUJBQVA7QUFHQTtBQUNELGFBUk0sQ0FERDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBWVFELDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jlc2VydmF0aW9uLmJmMDhjN2Y3NzYzNWMwOGUyYWYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0R2l0ZXNOb21zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFN0ZXBwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcHBlcic7XHJcbmltcG9ydCBTdGVwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXAnO1xyXG5pbXBvcnQgU3RlcExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBMYWJlbCc7XHJcbmltcG9ydCBDaGVjayBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2snO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZXR0aW5ncyc7XHJcbmltcG9ydCBHcm91cEFkZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0dyb3VwQWRkJztcclxuaW1wb3J0IFZpZGVvTGFiZWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9WaWRlb0xhYmVsJztcclxuaW1wb3J0IFN0ZXBDb25uZWN0b3IgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcENvbm5lY3Rvcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBIb3VzZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hvdXNlJztcclxuaW1wb3J0IEVtb2ppUGVvcGxlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRW1vamlQZW9wbGUnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGVja0NpcmNsZSc7XHJcblxyXG5jb25zdCBRb250b0Nvbm5lY3RvciA9IHdpdGhTdHlsZXMoe1xyXG5cdGFsdGVybmF0aXZlTGFiZWw6IHtcclxuXHRcdHRvcDogMTAsXHJcblx0XHRsZWZ0OiAnY2FsYygtNTAlICsgMTZweCknLFxyXG5cdFx0cmlnaHQ6ICdjYWxjKDUwJSArIDE2cHgpJyxcclxuXHR9LFxyXG5cdGFjdGl2ZToge1xyXG5cdFx0JyYgJGxpbmUnOiB7XHJcblx0XHRcdGJvcmRlckNvbG9yOiAnIzc4NGFmNCcsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0Y29tcGxldGVkOiB7XHJcblx0XHQnJiAkbGluZSc6IHtcclxuXHRcdFx0Ym9yZGVyQ29sb3I6ICcjNzg0YWY0JyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRsaW5lOiB7XHJcblx0XHRib3JkZXJDb2xvcjogJyNlYWVhZjAnLFxyXG5cdFx0Ym9yZGVyVG9wV2lkdGg6IDMsXHJcblx0XHRib3JkZXJSYWRpdXM6IDEsXHJcblx0fSxcclxufSkoU3RlcENvbm5lY3Rvcik7XHJcblxyXG5jb25zdCB1c2VRb250b1N0ZXBJY29uU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcblx0cm9vdDoge1xyXG5cdFx0Y29sb3I6ICcjZWFlYWYwJyxcclxuXHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdGhlaWdodDogMjIsXHJcblx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuXHR9LFxyXG5cdGFjdGl2ZToge1xyXG5cdFx0Y29sb3I6ICcjNzg0YWY0JyxcclxuXHR9LFxyXG5cdGNpcmNsZToge1xyXG5cdFx0d2lkdGg6IDgsXHJcblx0XHRoZWlnaHQ6IDgsXHJcblx0XHRib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJyxcclxuXHR9LFxyXG5cdGNvbXBsZXRlZDoge1xyXG5cdFx0Y29sb3I6ICcjNzg0YWY0JyxcclxuXHRcdHpJbmRleDogMSxcclxuXHRcdGZvbnRTaXplOiAxOCxcclxuXHR9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIFFvbnRvU3RlcEljb24ocHJvcHMpIHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlUW9udG9TdGVwSWNvblN0eWxlcygpO1xyXG5cdGNvbnN0IHsgYWN0aXZlLCBjb21wbGV0ZWQgfSA9IHByb3BzO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCB7XHJcblx0XHRcdFx0W2NsYXNzZXMuYWN0aXZlXTogYWN0aXZlLFxyXG5cdFx0XHR9KX0+XHJcblx0XHRcdHtjb21wbGV0ZWQgPyAoXHJcblx0XHRcdFx0PENoZWNrIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb21wbGV0ZWR9IC8+XHJcblx0XHRcdCkgOiAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2lyY2xlfSAvPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuUW9udG9TdGVwSWNvbi5wcm9wVHlwZXMgPSB7XHJcblx0LyoqXHJcblx0ICogV2hldGhlciB0aGlzIHN0ZXAgaXMgYWN0aXZlLlxyXG5cdCAqL1xyXG5cdGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXHJcblx0LyoqXHJcblx0ICogTWFyayB0aGUgc3RlcCBhcyBjb21wbGV0ZWQuIElzIHBhc3NlZCB0byBjaGlsZCBjb21wb25lbnRzLlxyXG5cdCAqL1xyXG5cdGNvbXBsZXRlZDogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5jb25zdCBDb2xvcmxpYkNvbm5lY3RvciA9IHdpdGhTdHlsZXMoe1xyXG5cdGFsdGVybmF0aXZlTGFiZWw6IHtcclxuXHRcdHRvcDogMjIsXHJcblx0fSxcclxuXHRhY3RpdmU6IHtcclxuXHRcdCcmICRsaW5lJzoge1xyXG5cdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6XHJcblx0XHRcdFx0J2xpbmVhci1ncmFkaWVudCggOTVkZWcscmdiKDI0MiwxMTMsMzMpIDAlLHJnYigyMzMsNjQsODcpIDUwJSxyZ2IoMTM4LDM1LDEzNSkgMTAwJSknLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGNvbXBsZXRlZDoge1xyXG5cdFx0JyYgJGxpbmUnOiB7XHJcblx0XHRcdGJhY2tncm91bmRJbWFnZTpcclxuXHRcdFx0XHQnbGluZWFyLWdyYWRpZW50KCA5NWRlZyxyZ2IoMjQyLDExMywzMykgMCUscmdiKDIzMyw2NCw4NykgNTAlLHJnYigxMzgsMzUsMTM1KSAxMDAlKScsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0bGluZToge1xyXG5cdFx0aGVpZ2h0OiAzLFxyXG5cdFx0Ym9yZGVyOiAwLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnI2VhZWFmMCcsXHJcblx0XHRib3JkZXJSYWRpdXM6IDEsXHJcblx0fSxcclxufSkoU3RlcENvbm5lY3Rvcik7XHJcblxyXG5jb25zdCB1c2VDb2xvcmxpYlN0ZXBJY29uU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcblx0cm9vdDoge1xyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnI2NjYycsXHJcblx0XHR6SW5kZXg6IDEsXHJcblx0XHRjb2xvcjogJyNmZmYnLFxyXG5cdFx0d2lkdGg6IDUwLFxyXG5cdFx0aGVpZ2h0OiA1MCxcclxuXHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdGJvcmRlclJhZGl1czogJzUwJScsXHJcblx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuXHR9LFxyXG5cdGFjdGl2ZToge1xyXG5cdFx0YmFja2dyb3VuZEltYWdlOlxyXG5cdFx0XHQnbGluZWFyLWdyYWRpZW50KCAxMzZkZWcsIHJnYigyNDIsMTEzLDMzKSAwJSwgcmdiKDIzMyw2NCw4NykgNTAlLCByZ2IoMTM4LDM1LDEzNSkgMTAwJSknLFxyXG5cdFx0Ym94U2hhZG93OiAnMCA0cHggMTBweCAwIHJnYmEoMCwwLDAsLjI1KScsXHJcblx0fSxcclxuXHRjb21wbGV0ZWQ6IHtcclxuXHRcdGJhY2tncm91bmRJbWFnZTpcclxuXHRcdFx0J2xpbmVhci1ncmFkaWVudCggMTM2ZGVnLCByZ2IoMjQyLDExMywzMykgMCUsIHJnYigyMzMsNjQsODcpIDUwJSwgcmdiKDEzOCwzNSwxMzUpIDEwMCUpJyxcclxuXHR9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIENvbG9ybGliU3RlcEljb24ocHJvcHMpIHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlQ29sb3JsaWJTdGVwSWNvblN0eWxlcygpO1xyXG5cdGNvbnN0IHsgYWN0aXZlLCBjb21wbGV0ZWQgfSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCBpY29ucyA9IHtcclxuXHRcdDE6IDxIb3VzZUljb24gLz4sXHJcblx0XHQyOiA8U2V0dGluZ3NJY29uIC8+LFxyXG5cdFx0MzogPEVtb2ppUGVvcGxlSWNvbiAvPixcclxuXHRcdDQ6IDxDaGVja0NpcmNsZUljb24gLz4sXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwge1xyXG5cdFx0XHRcdFtjbGFzc2VzLmFjdGl2ZV06IGFjdGl2ZSxcclxuXHRcdFx0XHRbY2xhc3Nlcy5jb21wbGV0ZWRdOiBjb21wbGV0ZWQsXHJcblx0XHRcdH0pfT5cclxuXHRcdFx0e2ljb25zW1N0cmluZyhwcm9wcy5pY29uKV19XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5Db2xvcmxpYlN0ZXBJY29uLnByb3BUeXBlcyA9IHtcclxuXHQvKipcclxuXHQgKiBXaGV0aGVyIHRoaXMgc3RlcCBpcyBhY3RpdmUuXHJcblx0ICovXHJcblx0YWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcclxuXHQvKipcclxuXHQgKiBNYXJrIHRoZSBzdGVwIGFzIGNvbXBsZXRlZC4gSXMgcGFzc2VkIHRvIGNoaWxkIGNvbXBvbmVudHMuXHJcblx0ICovXHJcblx0Y29tcGxldGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuXHQvKipcclxuXHQgKiBUaGUgbGFiZWwgZGlzcGxheWVkIGluIHRoZSBzdGVwIGljb24uXHJcblx0ICovXHJcblx0aWNvbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRyb290OiB7XHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdH0sXHJcblx0YnV0dG9uOiB7XHJcblx0XHRtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuXHR9LFxyXG5cdGluc3RydWN0aW9uczoge1xyXG5cdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0bWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIGdldFN0ZXBzKCkge1xyXG5cdHJldHVybiBbXHJcblx0XHQnSW5mb3JtYXRpb24gc3VyIGxhIGxvY2F0aW9uJyxcclxuXHRcdCdJbmZvcm1hdGlvbnMgY29tcGzDqW1lbnRhaXJlcycsXHJcblx0XHQnVm9zIGNvb3Jkb25uw6llcycsXHJcblx0XHQnUsOpY2FwaXR1bGF0aWYnLFxyXG5cdF07XHJcbn1cclxuXHJcbmNvbnN0IGluZm9Mb2MgPSAoKSA9PiAoXHJcblx0PGRpdiBjbGFzc05hbWU9Jyc+XHJcblx0XHQ8aDI+SW5mb3JtYXRpb25zIHN1ciBsYSBsb2NhdGlvbjwvaDI+XHJcblxyXG5cdFx0PGRpdiBjbGFzcz0nZm9ybS1ncm91cCc+XHJcblx0XHRcdDxsYWJlbCBodG1sRm9yPSdleGFtcGxlRm9ybUNvbnRyb2xTZWxlY3QxJz5FeGFtcGxlIHNlbGVjdDwvbGFiZWw+XHJcblx0XHRcdDxzZWxlY3QgY2xhc3M9J2Zvcm0tY29udHJvbCcgaWQ9J2V4YW1wbGVGb3JtQ29udHJvbFNlbGVjdDEnPlxyXG5cdFx0XHRcdHtnaXRlcy5tYXAoKGdpdGUsIGkpID0+IChcclxuXHRcdFx0XHRcdDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17Z2l0ZS5zbHVnfT5cclxuXHRcdFx0XHRcdFx0e2dpdGUubm9tfVxyXG5cdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0PGxhYmVsPk5vbWJyZSBkZSBwZXJzb25uZXMgdG90YWw8L2xhYmVsPlxyXG5cdFx0XHQ8aW5wdXQgdHlwZT0nbnVtYmVyJyBjbGFzcz0nZm9ybS1jb250cm9sJyAvPlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0PGxhYmVsPkRvbnQgZW5mYW50cyBkZSBtb2lucyBkZSAxOCBhbnM8L2xhYmVsPlxyXG5cdFx0XHQ8aW5wdXQgdHlwZT0nbnVtYmVyJyBjbGFzcz0nZm9ybS1jb250cm9sJyAvPlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0PGxhYmVsPkRhdGUgZCdhcnJpdsOpZTwvbGFiZWw+XHJcblx0XHRcdDxpbnB1dCB0eXBlPSdkYXRlJyBjbGFzcz0nZm9ybS1jb250cm9sJyAvPlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0PGxhYmVsPkRhdGUgZGUgZMOpcGFydDwvbGFiZWw+XHJcblx0XHRcdDxpbnB1dCB0eXBlPSdkYXRlJyBjbGFzcz0nZm9ybS1jb250cm9sJyAvPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbik7XHJcbmNvbnN0IGluZm9Db21wID0gKCkgPT4gKFxyXG5cdDxkaXY+XHJcblx0XHQ8aDI+SW5mb3JtYXRpb25zIHN1cHBsw6ltZW50YWlyZXM8L2gyPlxyXG5cdFx0PGZpZWxkc2V0IHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0gY2xhc3NOYW1lPSdwbC0zIHBiLTMnPlxyXG5cdFx0XHQ8bGVnZW5kPlxyXG5cdFx0XHRcdHsnICd9XHJcblx0XHRcdFx0PGgzPk1lcmNpIGQnaW5kaXF1ZXIgc2kgdm91cyBub3VzIGF2ZXogZMOpamEgY29udGFjdMOpIHBhciA6PC9oMz5cclxuXHRcdFx0PC9sZWdlbmQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tY2hlY2snPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY2hlY2staW5wdXQnXHJcblx0XHRcdFx0XHRcdFx0dHlwZT0nY2hlY2tib3gnXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9JydcclxuXHRcdFx0XHRcdFx0XHRpZD0nZGVmYXVsdENoZWNrMSdcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PGxhYmVsXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNoZWNrLWxhYmVsJ1xyXG5cdFx0XHRcdFx0XHRcdGh0bWxGb3I9J2RlZmF1bHRDaGVjazEnPlxyXG5cdFx0XHRcdFx0XHRcdE1haWxcclxuXHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tY2hlY2snPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY2hlY2staW5wdXQnXHJcblx0XHRcdFx0XHRcdFx0dHlwZT0nY2hlY2tib3gnXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9JydcclxuXHRcdFx0XHRcdFx0XHRpZD0nZGVmYXVsdENoZWNrMSdcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PGxhYmVsXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNoZWNrLWxhYmVsJ1xyXG5cdFx0XHRcdFx0XHRcdGh0bWxGb3I9J2RlZmF1bHRDaGVjazEnPlxyXG5cdFx0XHRcdFx0XHRcdFTDqWzDqXBob25lXHJcblx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWNoZWNrJz5cclxuXHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNoZWNrLWlucHV0J1xyXG5cdFx0XHRcdFx0XHRcdHR5cGU9J2NoZWNrYm94J1xyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPScnXHJcblx0XHRcdFx0XHRcdFx0aWQ9J2RlZmF1bHRDaGVjazEnXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxsYWJlbFxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jaGVjay1sYWJlbCdcclxuXHRcdFx0XHRcdFx0XHRodG1sRm9yPSdkZWZhdWx0Q2hlY2sxJz5cclxuXHRcdFx0XHRcdFx0XHRBYnJpdGVsXHJcblx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWNoZWNrJz5cclxuXHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNoZWNrLWlucHV0J1xyXG5cdFx0XHRcdFx0XHRcdHR5cGU9J2NoZWNrYm94J1xyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPScnXHJcblx0XHRcdFx0XHRcdFx0aWQ9J2RlZmF1bHRDaGVjazEnXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxsYWJlbFxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jaGVjay1sYWJlbCdcclxuXHRcdFx0XHRcdFx0XHRodG1sRm9yPSdkZWZhdWx0Q2hlY2sxJz5cclxuXHRcdFx0XHRcdFx0XHRMZWJvbmNvaW5cclxuXHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tY2hlY2snPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY2hlY2staW5wdXQnXHJcblx0XHRcdFx0XHRcdFx0dHlwZT0nY2hlY2tib3gnXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9JydcclxuXHRcdFx0XHRcdFx0XHRpZD0nZGVmYXVsdENoZWNrMSdcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PGxhYmVsXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNoZWNrLWxhYmVsJ1xyXG5cdFx0XHRcdFx0XHRcdGh0bWxGb3I9J2RlZmF1bHRDaGVjazEnPlxyXG5cdFx0XHRcdFx0XHRcdEF1dHJlXHJcblx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2ZpZWxkc2V0PlxyXG5cdFx0PGZpZWxkc2V0IHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0gY2xhc3NOYW1lPSdwbC0zIHBiLTMnPlxyXG5cdFx0XHQ8bGVnZW5kPlxyXG5cdFx0XHRcdHsnICd9XHJcblx0XHRcdFx0PGgzPlxyXG5cdFx0XHRcdFx0UydpbCB5IGEgZGVzIGNoaWVucywgbWVyY2kgZCdpbmRpcXVlciBsZXVyIG5vbWJyZVxyXG5cdFx0XHRcdFx0KDPigqwvam91ci9hbmltYWwpXHJcblx0XHRcdFx0PC9oMz5cclxuXHRcdFx0PC9sZWdlbmQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT0nbnVtYmVyJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2ZpZWxkc2V0PlxyXG5cdFx0PGZpZWxkc2V0IHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0gY2xhc3NOYW1lPSdwbC0zIHBiLTMnPlxyXG5cdFx0XHQ8bGVnZW5kPlxyXG5cdFx0XHRcdHsnICd9XHJcblx0XHRcdFx0PGgzPlNvdWhhaXRlei12b3VzIGwnb3B0aW9uIGxpdCBmYWl0IMOgIGwnYXJyaXbDqWUgPzwvaDM+XHJcblx0XHRcdDwvbGVnZW5kPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1jaGVjayc+XHJcblx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY2hlY2staW5wdXQnXHJcblx0XHRcdFx0XHR0eXBlPSdyYWRpbydcclxuXHRcdFx0XHRcdG5hbWU9J2V4YW1wbGVSYWRpb3MnXHJcblx0XHRcdFx0XHRpZD0nZXhhbXBsZVJhZGlvczEnXHJcblx0XHRcdFx0XHR2YWx1ZT0nb3B0aW9uMSdcclxuXHRcdFx0XHRcdGNoZWNrZWRcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm0tY2hlY2stbGFiZWwnIGh0bWxGb3I9J2V4YW1wbGVSYWRpb3MxJz5cclxuXHRcdFx0XHRcdE91aVxyXG5cdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1jaGVjayc+XHJcblx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY2hlY2staW5wdXQnXHJcblx0XHRcdFx0XHR0eXBlPSdyYWRpbydcclxuXHRcdFx0XHRcdG5hbWU9J2V4YW1wbGVSYWRpb3MnXHJcblx0XHRcdFx0XHRpZD0nZXhhbXBsZVJhZGlvczInXHJcblx0XHRcdFx0XHR2YWx1ZT0nb3B0aW9uMidcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm0tY2hlY2stbGFiZWwnIGh0bWxGb3I9J2V4YW1wbGVSYWRpb3MyJz5cclxuXHRcdFx0XHRcdE5vblxyXG5cdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9maWVsZHNldD5cclxuXHQ8L2Rpdj5cclxuKTtcclxuY29uc3QgQ29vcmQgPSAoKSA9PiAoXHJcblx0PGRpdj5cclxuXHRcdDxoMj5Wb3MgY29vcmRvbm7DqWVzPC9oMj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLXJvdyBtYi0zJz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC0yJz5cclxuXHRcdFx0XHQ8c2VsZWN0IGNsYXNzPSdmb3JtLWNvbnRyb2wnIGlkPSdleGFtcGxlRm9ybUNvbnRyb2xTZWxlY3QxJz5cclxuXHRcdFx0XHRcdDxvcHRpb24+TXIgJiBNbWU8L29wdGlvbj5cclxuXHRcdFx0XHRcdDxvcHRpb24+TXI8L29wdGlvbj5cclxuXHRcdFx0XHRcdDxvcHRpb24+TW1lPC9vcHRpb24+XHJcblx0XHRcdFx0XHQ8b3B0aW9uPkVudHJlcHJpc2U8L29wdGlvbj5cclxuXHRcdFx0XHRcdDxvcHRpb24+QXNzb2NpYXRpb248L29wdGlvbj5cclxuXHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLTUnPlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzcz0nZm9ybS1jb250cm9sJyBwbGFjZWhvbGRlcj0nTm9tJyAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC01Jz5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3M9J2Zvcm0tY29udHJvbCcgcGxhY2Vob2xkZXI9J1Byw6lub20nIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPSdmb3JtLXJvdyBtYi0zJz5cclxuXHRcdFx0PGRpdiBjbGFzcz0nY29sLTUnPlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzcz0nZm9ybS1jb250cm9sJyBwbGFjZWhvbGRlcj0nQWRyZXNzZScgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9J2NvbC0yJz5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRjbGFzcz0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0NvZGUgUG9zdGFsJ1xyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPSdjb2wtMyc+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9J3RleHQnIGNsYXNzPSdmb3JtLWNvbnRyb2wnIHBsYWNlaG9sZGVyPSdWaWxsZScgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9J2NvbCc+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9J3RleHQnIGNsYXNzPSdmb3JtLWNvbnRyb2wnIHBsYWNlaG9sZGVyPSdQYXlzJyAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz0nZm9ybS1yb3cnPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPSdjb2wtNSc+XHJcblx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHR0eXBlPSd0ZWwnXHJcblx0XHRcdFx0XHRwYXR0ZXJuPSdbMC05XXsyfSBbMC05XXsyfSBbMC05XXsyfSBbMC05XXsyfSBbMC05XXsyfSdcclxuXHRcdFx0XHRcdGNsYXNzPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nVMOpbMOpcGhvbmUnXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9J2NvbC03Jz5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT0nbWFpbCcgY2xhc3M9J2Zvcm0tY29udHJvbCcgcGxhY2Vob2xkZXI9J0VtYWlsJyAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG4pO1xyXG5jb25zdCByZWNhcCA9ICgpID0+IDxwPnJlY2FwPC9wPjtcclxuXHJcbmZ1bmN0aW9uIGdldFN0ZXBDb250ZW50KHN0ZXApIHtcclxuXHRzd2l0Y2ggKHN0ZXApIHtcclxuXHRcdGNhc2UgMDpcclxuXHRcdFx0cmV0dXJuIGluZm9Mb2MoKTtcclxuXHRcdGNhc2UgMTpcclxuXHRcdFx0cmV0dXJuIGluZm9Db21wKCk7XHJcblx0XHRjYXNlIDI6XHJcblx0XHRcdHJldHVybiBDb29yZCgpO1xyXG5cdFx0Y2FzZSAzOlxyXG5cdFx0XHRyZXR1cm4gcmVjYXAoKTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiAnRXJyZXVyJztcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IFJlc2VydmF0aW9uRm9ybSA9ICh7IGdpdGVzTm9tcyB9KSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IFthY3RpdmVTdGVwLCBzZXRBY3RpdmVTdGVwXSA9IFJlYWN0LnVzZVN0YXRlKDEpO1xyXG5cdGNvbnN0IHN0ZXBzID0gZ2V0U3RlcHMoKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcclxuXHRcdHNldEFjdGl2ZVN0ZXAoKHByZXZBY3RpdmVTdGVwKSA9PiBwcmV2QWN0aXZlU3RlcCArIDEpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUJhY2sgPSAoKSA9PiB7XHJcblx0XHRzZXRBY3RpdmVTdGVwKChwcmV2QWN0aXZlU3RlcCkgPT4gcHJldkFjdGl2ZVN0ZXAgLSAxKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcclxuXHRcdHNldEFjdGl2ZVN0ZXAoMCk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG5cdFx0XHQ8Zm9ybT5cclxuXHRcdFx0XHQ8U3RlcHBlclxyXG5cdFx0XHRcdFx0YWx0ZXJuYXRpdmVMYWJlbFxyXG5cdFx0XHRcdFx0YWN0aXZlU3RlcD17YWN0aXZlU3RlcH1cclxuXHRcdFx0XHRcdGNvbm5lY3Rvcj17PENvbG9ybGliQ29ubmVjdG9yIC8+fT5cclxuXHRcdFx0XHRcdHtzdGVwcy5tYXAoKGxhYmVsKSA9PiAoXHJcblx0XHRcdFx0XHRcdDxTdGVwIGtleT17bGFiZWx9PlxyXG5cdFx0XHRcdFx0XHRcdDxTdGVwTGFiZWwgU3RlcEljb25Db21wb25lbnQ9e0NvbG9ybGliU3RlcEljb259PlxyXG5cdFx0XHRcdFx0XHRcdFx0e2xhYmVsfVxyXG5cdFx0XHRcdFx0XHRcdDwvU3RlcExhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8L1N0ZXA+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L1N0ZXBwZXI+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdHthY3RpdmVTdGVwID09PSBzdGVwcy5sZW5ndGggPyAoXHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmluc3RydWN0aW9uc30+XHJcblx0XHRcdFx0XHRcdFx0XHRBbGwgc3RlcHMgY29tcGxldGVkIC0geW91JmFwb3M7cmUgZmluaXNoZWRcclxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlUmVzZXR9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdFx0XHRcdFJlY29tbWVuY2VyXHJcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0ey8qIDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdC8vIG9uQ2xpY2s9e2hhbmRsZVJlc2V0fVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0XHRcdFx0XHRWYWxpZGVyXHJcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+ICovfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmluc3RydWN0aW9uc30+XHJcblx0XHRcdFx0XHRcdFx0XHR7Z2V0U3RlcENvbnRlbnQoYWN0aXZlU3RlcCl9XHJcblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXthY3RpdmVTdGVwID09PSAwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVCYWNrfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0UmV0b3VyXHJcblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD0nY29udGFpbmVkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcj0ncHJpbWFyeSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlTmV4dH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHthY3RpdmVTdGVwID09PSBzdGVwcy5sZW5ndGggLSAxXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PyAnVmFsaWRlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICdTdWl2YW50J31cclxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcblx0Y29uc3QgcGFydGVuYWlyZXNOb21zID0gYXdhaXQgTGlzdEFsbFBhcnRlbmFpcmVzTm9tcygpO1xyXG5cdHJldHVybiB7XHJcblx0XHRwYXRoczogcGFydGVuYWlyZXNOb21zLm1hcCgobm9tKSA9PiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cGFyYW1zOiB7IGlkOiBub20uX2lkLCBzbHVnOiBub20uc2x1ZyB9LFxyXG5cdFx0XHR9O1xyXG5cdFx0fSksXHJcblx0XHRmYWxsYmFjazogZmFsc2UsXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuXHRyZXR1cm4gbGlzdEdpdGVzTm9tcygpLnRoZW4oKGdpdGVzbm9tcykgPT4ge1xyXG5cdFx0aWYgKGdpdGVzTm9tcy5lcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhnaXRlc05vbXMuZXJyb3IpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRwcm9wczogeyBnaXRlc05vbXMgfSxcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZXJ2YXRpb25Gb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9