webpackHotUpdate_N_E("pages/admin/crud/gite/create",{

/***/ "./components/admin/forms/gites/FormCreateGite.js":
/*!********************************************************!*\
  !*** ./components/admin/forms/gites/FormCreateGite.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Stepper */ "./node_modules/@material-ui/core/esm/Stepper/index.js");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Step */ "./node_modules/@material-ui/core/esm/Step/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "./node_modules/@material-ui/core/esm/StepLabel/index.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Check */ "./node_modules/@material-ui/icons/Check.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_StepConnector__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/StepConnector */ "./node_modules/@material-ui/core/esm/StepConnector/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _HOC_Snackbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../HOC/Snackbar */ "./components/HOC/Snackbar.js");
/* harmony import */ var _components_admin_forms_gites_FormInfosGene__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../components/admin/forms/gites/FormInfosGene */ "./components/admin/forms/gites/FormInfosGene.js");
/* harmony import */ var _components_admin_forms_gites_FormInfosDiverses__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../components/admin/forms/gites/FormInfosDiverses */ "./components/admin/forms/gites/FormInfosDiverses.js");
/* harmony import */ var _components_admin_forms_gites_FormInfosPratiques__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../components/admin/forms/gites/FormInfosPratiques */ "./components/admin/forms/gites/FormInfosPratiques.js");
/* harmony import */ var _components_admin_forms_gites_FormInfosPages__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../components/admin/forms/gites/FormInfosPages */ "./components/admin/forms/gites/FormInfosPages.js");
/* harmony import */ var _material_ui_icons_PictureInPictureAlt__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/PictureInPictureAlt */ "./node_modules/@material-ui/icons/PictureInPictureAlt.js");
/* harmony import */ var _material_ui_icons_PictureInPictureAlt__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PictureInPictureAlt__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_icons_Stars__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/icons/Stars */ "./node_modules/@material-ui/icons/Stars.js");
/* harmony import */ var _material_ui_icons_Stars__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Stars__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/icons/MonetizationOn */ "./node_modules/@material-ui/icons/MonetizationOn.js");
/* harmony import */ var _material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_icons_Pageview__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/icons/Pageview */ "./node_modules/@material-ui/icons/Pageview.js");
/* harmony import */ var _material_ui_icons_Pageview__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Pageview__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../actions/authActions */ "./actions/authActions.js");





var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\forms\\gites\\FormCreateGite.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _this = undefined,
    _s3 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



























function Alert(props) {
  return __jsx(MuiAlert, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    elevation: 6,
    variant: "filled"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }));
}

_c = Alert;
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
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_8__["default"])(classes.root, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, classes.active, active)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 3
    }
  }, completed ? __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_13___default.a, {
    className: classes.completed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }) : __jsx("div", {
    className: classes.circle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
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
    1: __jsx(_material_ui_icons_Stars__WEBPACK_IMPORTED_MODULE_24___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 6
      }
    }),
    2: __jsx(_material_ui_icons_PictureInPictureAlt__WEBPACK_IMPORTED_MODULE_23___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 6
      }
    }),
    3: __jsx(_material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_25___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 6
      }
    }),
    4: __jsx(_material_ui_icons_Pageview__WEBPACK_IMPORTED_MODULE_26___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 6
      }
    })
  };
  return __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_8__["default"])(classes.root, (_clsx2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_clsx2, classes.active, active), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_clsx2, classes.completed, completed), _clsx2)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
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
      minWidth: '100%'
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    textField: {
      margin: theme.spacing(1),
      width: '100%'
    }
  };
});

function getSteps() {
  return ['Infos générales', 'Infos diverses', 'Infos pratiques & financières', 'Infos pages & SEO'];
}

var FormCreateGite = function FormCreateGite(_ref) {
  _s3();

  var snackbarShowMessage = _ref.snackbarShowMessage,
      router = _ref.router,
      gite = _ref.gite;
  var classes = useStyles();
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_29__["getCookie"])('token');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      activeStep = _useState[0],
      setActiveStep = _useState[1];

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_17__["useForm"])({
    shouldUnregister: false,
    defaultValues: {
      nom: 'test',
      adresse: 'test',
      cp: '08240',
      ville: 'fossé',
      capaciteMax: '20',
      mtitle: 'Les Gîtes WAO | Le gîte Manola avec piscine chauffée et couverte',
      presGiteSEO: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae necessitatibus reprehenderit aliquid maiores ipsam quibusdam, eos omnis maxime, porro ratione cupiditate tempore minima quas ullam iure vero dolorem? Ipsum sit eos dolor tempore nemo, ex quisquam beatae ut, voluptatibus, enim similique dolore? Quia deserunt soluta aspernatur doloribus est. Quia tempora adipisci quos provident ratione voluptatibus corporis animi earum accusamus dolore molestias ipsa, nam repudiandae similique corrupti exercitationem non nemo, nesciunt dolorem perferendis. Voluptate in architecto illum, ipsum modi quod, eaque eligendi qui dolor porro ducimus dicta iste quaerat, exercitationem numquam. Temporibus ratione, accusantium at expedita delectus vel qui praesentium minus cupiditate. Culpa necessitatibus consequatur sapiente quia quisquam error neque nam doloremque perferendis hic veritatis, iusto doloribus cum tempore quidem ab molestiae, beatae eum, blanditiis delectus quod nobis fugit? Id, perferendis velit qui earum repellendus ipsum eos pariatur quae voluptate, et eligendi nemo iusto labore molestiae corrupti cumque aspernatur officiis. Incidunt!',
      detailGite: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga saepe corporis nisi numquam ratione modi architecto. Cum error perferendis hic iure, provident labore. Ipsum sint at sequi aliquid assumenda velit hic totam id aperiam excepturi, laudantium animi facere, commodi earum ullam, atque eum saepe reiciendis quos quae fuga tempora. Quis animi minus molestiae unde dolorem esse similique dolorum inventore nostrum quasi laudantium ex quam aliquam accusamus cumque quos dolor consectetur, delectus rerum? Velit quisquam labore quae quaerat maiores quidem repellendus similique dolor, amet nihil at, autem numquam porro corporis quia in hic perspiciatis aliquam. Praesentium cupiditate dignissimos nam debitis ex error illo id incidunt eveniet, iste minus esse sapiente perspiciatis ea eaque aliquam perferendis deserunt. Et, maiores sapiente, dicta pariatur ex laborum quidem, debitis non modi architecto dolorum magni sit nostrum iusto eaque optio accusamus assumenda repudiandae vitae fugit nam quas itaque ea accusantium. Vero fugiat fugit corporis ut modi. Doloremque, necessitatibus quia! Quasi temporibus reprehenderit a animi eius, officiis porro ea! Odit non, asperiores numquam quae maiores sed velit aliquid tempora magni nemo ipsam tenetur tempore distinctio, incidunt saepe molestiae quod architecto nostrum accusantium, perferendis repellendus similique eveniet voluptatem corrupti. A illo ipsum corrupti perspiciatis recusandae tempore saepe repudiandae. Cumque, velit quis repellat ratione, vel explicabo commodi tenetur eveniet impedit ea nesciunt dolore in ipsam et placeat officiis consequatur. Quae neque impedit recusandae, officiis vero minus fugit alias perferendis! Quaerat iusto quidem deleniti, officia sunt fugit, sint odio error, sequi fuga saepe debitis explicabo accusantium doloremque iste iure deserunt.',
      texteExterieur: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga saepe corporis nisi numquam ratione modi architecto. Cum error perferendis hic iure, provident labore. Ipsum sint at sequi aliquid assumenda velit hic totam id aperiam excepturi, laudantium animi facere, commodi earum ullam, atque eum saepe reiciendis quos quae fuga tempora. Quis animi minus molestiae unde dolorem esse similique dolorum inventore nostrum quasi laudantium ex quam aliquam accusamus cumque quos dolor consectetur, delectus rerum? Velit quisquam labore quae quaerat maiores quidem repellendus similique dolor, amet nihil at, autem numquam porro corporis quia in hic perspiciatis aliquam. Praesentium cupiditate dignissimos nam debitis ex error illo id incidunt eveniet, iste minus esse sapiente perspiciatis ea eaque aliquam perferendis deserunt. Et, maiores sapiente, dicta pariatur ex laborum quidem, debitis non modi architecto dolorum magni sit nostrum iusto eaque optio accusamus assumenda repudiandae vitae fugit nam quas itaque ea accusantium. Vero fugiat fugit corporis ut modi. Doloremque, necessitatibus quia! Quasi temporibus reprehenderit a animi eius, officiis porro ea! Odit non, asperiores numquam quae maiores sed velit aliquid tempora magni nemo ipsam tenetur tempore distinctio, incidunt saepe molestiae quod architecto nostrum accusantium, perferendis repellendus similique eveniet voluptatem corrupti. A illo ipsum corrupti perspiciatis recusandae tempore saepe repudiandae. Cumque, velit quis repellat ratione, vel explicabo commodi tenetur eveniet impedit ea nesciunt dolore in ipsam et placeat officiis consequatur. Quae neque impedit recusandae, officiis vero minus fugit alias perferendis! Quaerat iusto quidem deleniti, officia sunt fugit, sint odio error, sequi fuga saepe debitis explicabo accusantium doloremque iste iure deserunt.",
      equipementExterieur: 'truc1,truc2,truc3,truc4,truc5',
      texteInterieur: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga saepe corporis nisi numquam ratione modi architecto. Cum error perferendis hic iure, provident labore. Ipsum sint at sequi aliquid assumenda velit hic totam id aperiam excepturi, laudantium animi facere, commodi earum ullam, atque eum saepe reiciendis quos quae fuga tempora. Quis animi minus molestiae unde dolorem esse similique dolorum inventore nostrum quasi laudantium ex quam aliquam accusamus cumque quos dolor consectetur, delectus rerum? Velit quisquam labore quae quaerat maiores quidem repellendus similique dolor, amet nihil at, autem numquam porro corporis quia in hic perspiciatis aliquam. Praesentium cupiditate dignissimos nam debitis ex error illo id incidunt eveniet, iste minus esse sapiente perspiciatis ea eaque aliquam perferendis deserunt. Et, maiores sapiente, dicta pariatur ex laborum quidem, debitis non modi architecto dolorum magni sit nostrum iusto eaque optio accusamus assumenda repudiandae vitae fugit nam quas itaque ea accusantium. Vero fugiat fugit corporis ut modi. Doloremque, necessitatibus quia! Quasi temporibus reprehenderit a animi eius, officiis porro ea! Odit non, asperiores numquam quae maiores sed velit aliquid tempora magni nemo ipsam tenetur tempore distinctio, incidunt saepe molestiae quod architecto nostrum accusantium, perferendis repellendus similique eveniet voluptatem corrupti. A illo ipsum corrupti perspiciatis recusandae tempore saepe repudiandae. Cumque, velit quis repellat ratione, vel explicabo commodi tenetur eveniet impedit ea nesciunt dolore in ipsam et placeat officiis consequatur. Quae neque impedit recusandae, officiis vero minus fugit alias perferendis! Quaerat iusto quidem deleniti, officia sunt fugit, sint odio error, sequi fuga saepe debitis explicabo accusantium doloremque iste iure deserunt.",
      equipementInterieur: 'truc1,truc2,truc3,truc4,truc5',
      textePiscine: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga saepe corporis nisi numquam ratione modi architecto. Cum error perferendis hic iure, provident labore. Ipsum sint at sequi aliquid assumenda velit hic totam id aperiam excepturi, laudantium animi facere, commodi earum ullam, atque eum saepe reiciendis quos quae fuga tempora. Quis animi minus molestiae unde dolorem esse similique dolorum inventore nostrum quasi laudantium ex quam aliquam accusamus cumque quos dolor consectetur, delectus rerum? Velit quisquam labore quae quaerat maiores quidem repellendus similique dolor, amet nihil at, autem numquam porro corporis quia in hic perspiciatis aliquam. Praesentium cupiditate dignissimos nam debitis ex error illo id incidunt eveniet, iste minus esse sapiente perspiciatis ea eaque aliquam perferendis deserunt. Et, maiores sapiente, dicta pariatur ex laborum quidem, debitis non modi architecto dolorum magni sit nostrum iusto eaque optio accusamus assumenda repudiandae vitae fugit nam quas itaque ea accusantium. Vero fugiat fugit corporis ut modi. Doloremque, necessitatibus quia! Quasi temporibus reprehenderit a animi eius, officiis porro ea! Odit non, asperiores numquam quae maiores sed velit aliquid tempora magni nemo ipsam tenetur tempore distinctio, incidunt saepe molestiae quod architecto nostrum accusantium, perferendis repellendus similique eveniet voluptatem corrupti. A illo ipsum corrupti perspiciatis recusandae tempore saepe repudiandae. Cumque, velit quis repellat ratione, vel explicabo commodi tenetur eveniet impedit ea nesciunt dolore in ipsam et placeat officiis consequatur. Quae neque impedit recusandae, officiis vero minus fugit alias perferendis! Quaerat iusto quidem deleniti, officia sunt fugit, sint odio error, sequi fuga saepe debitis explicabo accusantium doloremque iste iure deserunt.",
      equipementPiscine: 'truc1,truc2,truc3,truc4,truc5',
      texte: 'Un texte pour essayer',
      videoLink: '',
      calendrierLink: '',
      couleur1: '#AAAAAA',
      couleur2: '#111111'
    }
  }),
      control = _useForm.control,
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var reRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
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

  function getStepContent(step) {
    switch (step) {
      case 0:
        return __jsx(_components_admin_forms_gites_FormInfosGene__WEBPACK_IMPORTED_MODULE_19__["default"], {
          classes: classes,
          register: register,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 12
          }
        });

      case 1:
        return __jsx(_components_admin_forms_gites_FormInfosDiverses__WEBPACK_IMPORTED_MODULE_20__["default"], {
          classes: classes,
          register: register,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 6
          }
        });

      case 2:
        return __jsx(_components_admin_forms_gites_FormInfosPratiques__WEBPACK_IMPORTED_MODULE_21__["default"], {
          classes: classes,
          register: register,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 285,
            columnNumber: 6
          }
        });

      case 3:
        return __jsx(_components_admin_forms_gites_FormInfosPages__WEBPACK_IMPORTED_MODULE_22__["default"], {
          classes: classes,
          register: register,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 288,
            columnNumber: 12
          }
        });

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
              console.log('submit');
              console.log('data vaut:', data); // setLoading(true);
              // data.token = await reRef.current.executeAsync();
              // reRef.current.reset();
              // console.log('onSubmit data =>', data);
              // createGite(data, token).then((result) => {
              // 	console.log('result vaut =>', result);
              // 	if (result.error) {
              // 		setLoading(false);
              // 		snackbarShowMessage(`${result.error}`);
              // 	} else if (result.dejaReserveMessage) {
              // 		setLoading(false);
              // 		snackbarShowMessage(`${result.dejaReserveMessage}`);
              // 	} else {
              // 		setLoading(false);
              // 		snackbarShowMessage(`${result.message}`, 'success');
              // 		// setTimeout(() => {
              // 		// 	Router.push(`/admin/gites`, null, {
              // 		// 		shallow: true,
              // 		// 	});
              // 		// }, 3000);
              // 	}
              // });

            case 2:
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

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 3
    }
  }, loading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__["CircularProgress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 16
    }
  }), __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 4
    }
  }, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    alternativeLabel: true,
    activeStep: activeStep,
    connector: __jsx(ColorlibConnector, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 18
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 6
    }
  }, steps.map(function (label) {
    return __jsx(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_12__["default"], {
      StepIconComponent: ColorlibStepIcon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 9
      }
    }, label));
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 6
    }
  }, console.log('step :', activeStep), console.log('lenght :', steps.length), activeStep === steps.length ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.instructions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 9
    }
  }, "Votre demande a bien \xE9t\xE9 prise en compte"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onClick: handleReset,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 9
    }
  }, "Recommencer")) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.instructions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 9
    }
  }, getStepContent(activeStep)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_28__["default"], {
    container: true,
    direction: "row",
    justify: "space-between",
    alignItems: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    disabled: activeStep === 0,
    onClick: handleBack,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
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
      lineNumber: 372,
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
      lineNumber: 380,
      columnNumber: 11
    }
  }, "Suivant")))))));
};

_s3(FormCreateGite, "NNNko22ST+3lg4+8q/Rq2bCiivc=", false, function () {
  return [useStyles, react_hook_form__WEBPACK_IMPORTED_MODULE_17__["useForm"]];
});

_c4 = FormCreateGite;
/* harmony default export */ __webpack_exports__["default"] = (_c6 = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(_c5 = Object(_HOC_Snackbar__WEBPACK_IMPORTED_MODULE_18__["withSnackbar"])(FormCreateGite)));

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Alert");
$RefreshReg$(_c2, "QontoStepIcon");
$RefreshReg$(_c3, "ColorlibStepIcon");
$RefreshReg$(_c4, "FormCreateGite");
$RefreshReg$(_c5, "%default%$withRouter");
$RefreshReg$(_c6, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9naXRlcy9Gb3JtQ3JlYXRlR2l0ZS5qcyJdLCJuYW1lcyI6WyJBbGVydCIsInByb3BzIiwiUW9udG9Db25uZWN0b3IiLCJ3aXRoU3R5bGVzIiwiYWx0ZXJuYXRpdmVMYWJlbCIsInRvcCIsImxlZnQiLCJyaWdodCIsImFjdGl2ZSIsImJvcmRlckNvbG9yIiwiY29tcGxldGVkIiwibGluZSIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwiU3RlcENvbm5lY3RvciIsInVzZVFvbnRvU3RlcEljb25TdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImNvbG9yIiwiZGlzcGxheSIsImhlaWdodCIsImFsaWduSXRlbXMiLCJjaXJjbGUiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsImZvbnRTaXplIiwiUW9udG9TdGVwSWNvbiIsImNsYXNzZXMiLCJjbHN4IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsIkNvbG9ybGliQ29ubmVjdG9yIiwiYmFja2dyb3VuZEltYWdlIiwiYm9yZGVyIiwidXNlQ29sb3JsaWJTdGVwSWNvblN0eWxlcyIsImp1c3RpZnlDb250ZW50IiwiYm94U2hhZG93IiwiQ29sb3JsaWJTdGVwSWNvbiIsImljb25zIiwiU3RyaW5nIiwiaWNvbiIsIm5vZGUiLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsImJ1dHRvbiIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsImluc3RydWN0aW9ucyIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImZvcm1Db250cm9sIiwibWFyZ2luIiwibWluV2lkdGgiLCJzZWxlY3RFbXB0eSIsInRleHRGaWVsZCIsImdldFN0ZXBzIiwiRm9ybUNyZWF0ZUdpdGUiLCJzbmFja2JhclNob3dNZXNzYWdlIiwicm91dGVyIiwiZ2l0ZSIsInRva2VuIiwiZ2V0Q29va2llIiwidXNlU3RhdGUiLCJhY3RpdmVTdGVwIiwic2V0QWN0aXZlU3RlcCIsInVzZUZvcm0iLCJzaG91bGRVbnJlZ2lzdGVyIiwiZGVmYXVsdFZhbHVlcyIsIm5vbSIsImFkcmVzc2UiLCJjcCIsInZpbGxlIiwiY2FwYWNpdGVNYXgiLCJtdGl0bGUiLCJwcmVzR2l0ZVNFTyIsImRldGFpbEdpdGUiLCJ0ZXh0ZUV4dGVyaWV1ciIsImVxdWlwZW1lbnRFeHRlcmlldXIiLCJ0ZXh0ZUludGVyaWV1ciIsImVxdWlwZW1lbnRJbnRlcmlldXIiLCJ0ZXh0ZVBpc2NpbmUiLCJlcXVpcGVtZW50UGlzY2luZSIsInRleHRlIiwidmlkZW9MaW5rIiwiY2FsZW5kcmllckxpbmsiLCJjb3VsZXVyMSIsImNvdWxldXIyIiwiY29udHJvbCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZVJlZiIsInVzZVJlZiIsInN0ZXBzIiwiaGFuZGxlTmV4dCIsInByZXZBY3RpdmVTdGVwIiwiaGFuZGxlQmFjayIsImhhbmRsZVJlc2V0IiwiZ2V0U3RlcENvbnRlbnQiLCJzdGVwIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImxhYmVsIiwibGVuZ3RoIiwid2l0aFJvdXRlciIsIndpdGhTbmFja2JhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFDckIsU0FBTyxNQUFDLFFBQUQ7QUFBVSxhQUFTLEVBQUUsQ0FBckI7QUFBd0IsV0FBTyxFQUFDO0FBQWhDLEtBQTZDQSxLQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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cGFnZXMvYWRtaW4vY3J1ZC9naXRlL2NyZWF0ZS5mZmUzZWFkNmMzNGQ0ZGU5MDUzNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2l0ZSwgbGlzdEdpdGVzTm9tcyB9IGZyb20gJy4uLy4uLy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBTdGVwcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBwZXInO1xyXG5pbXBvcnQgU3RlcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdGVwJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFN0ZXBMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdGVwTGFiZWwnO1xyXG5pbXBvcnQgQ2hlY2sgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrJztcclxuaW1wb3J0IFN0ZXBDb25uZWN0b3IgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcENvbm5lY3Rvcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCB7IHdpdGhTbmFja2JhciB9IGZyb20gJy4uLy4uLy4uL0hPQy9TbmFja2Jhcic7XHJcbmltcG9ydCBGb3JtSW5mb3NHZW5lIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW4vZm9ybXMvZ2l0ZXMvRm9ybUluZm9zR2VuZSc7XHJcbmltcG9ydCBGb3JtSW5mb3NEaXZlcnNlcyBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2FkbWluL2Zvcm1zL2dpdGVzL0Zvcm1JbmZvc0RpdmVyc2VzJztcclxuaW1wb3J0IEZvcm1JbmZvc1ByYXRpcXVlcyBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2FkbWluL2Zvcm1zL2dpdGVzL0Zvcm1JbmZvc1ByYXRpcXVlcyc7XHJcbmltcG9ydCBGb3JtSW5mb3NQYWdlcyBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2FkbWluL2Zvcm1zL2dpdGVzL0Zvcm1JbmZvc1BhZ2VzJztcclxuaW1wb3J0IFBpY3R1cmVJblBpY3R1cmVBbHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QaWN0dXJlSW5QaWN0dXJlQWx0JztcclxuaW1wb3J0IFN0YXJzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhcnMnO1xyXG5pbXBvcnQgTW9uZXRpemF0aW9uT25JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Nb25ldGl6YXRpb25Pbic7XHJcbmltcG9ydCBQYWdldmlld0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1BhZ2V2aWV3JztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBDaXJjdWxhclByb2dyZXNzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBBbGVydChwcm9wcykge1xyXG5cdHJldHVybiA8TXVpQWxlcnQgZWxldmF0aW9uPXs2fSB2YXJpYW50PSdmaWxsZWQnIHsuLi5wcm9wc30gLz47XHJcbn1cclxuXHJcbmNvbnN0IFFvbnRvQ29ubmVjdG9yID0gd2l0aFN0eWxlcyh7XHJcblx0YWx0ZXJuYXRpdmVMYWJlbDoge1xyXG5cdFx0dG9wOiAxMCxcclxuXHRcdGxlZnQ6ICdjYWxjKC01MCUgKyAxNnB4KScsXHJcblx0XHRyaWdodDogJ2NhbGMoNTAlICsgMTZweCknLFxyXG5cdH0sXHJcblx0YWN0aXZlOiB7XHJcblx0XHQnJiAkbGluZSc6IHtcclxuXHRcdFx0Ym9yZGVyQ29sb3I6ICcjNzg0YWY0JyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRjb21wbGV0ZWQ6IHtcclxuXHRcdCcmICRsaW5lJzoge1xyXG5cdFx0XHRib3JkZXJDb2xvcjogJyM3ODRhZjQnLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGxpbmU6IHtcclxuXHRcdGJvcmRlckNvbG9yOiAnI2VhZWFmMCcsXHJcblx0XHRib3JkZXJUb3BXaWR0aDogMyxcclxuXHRcdGJvcmRlclJhZGl1czogMSxcclxuXHR9LFxyXG59KShTdGVwQ29ubmVjdG9yKTtcclxuXHJcbmNvbnN0IHVzZVFvbnRvU3RlcEljb25TdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuXHRyb290OiB7XHJcblx0XHRjb2xvcjogJyNlYWVhZjAnLFxyXG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0aGVpZ2h0OiAyMixcclxuXHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cdH0sXHJcblx0YWN0aXZlOiB7XHJcblx0XHRjb2xvcjogJyM3ODRhZjQnLFxyXG5cdH0sXHJcblx0Y2lyY2xlOiB7XHJcblx0XHR3aWR0aDogOCxcclxuXHRcdGhlaWdodDogOCxcclxuXHRcdGJvcmRlclJhZGl1czogJzUwJScsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxyXG5cdH0sXHJcblx0Y29tcGxldGVkOiB7XHJcblx0XHRjb2xvcjogJyM3ODRhZjQnLFxyXG5cdFx0ekluZGV4OiAxLFxyXG5cdFx0Zm9udFNpemU6IDE4LFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gUW9udG9TdGVwSWNvbihwcm9wcykge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VRb250b1N0ZXBJY29uU3R5bGVzKCk7XHJcblx0Y29uc3QgeyBhY3RpdmUsIGNvbXBsZXRlZCB9ID0gcHJvcHM7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsIHtcclxuXHRcdFx0XHRbY2xhc3Nlcy5hY3RpdmVdOiBhY3RpdmUsXHJcblx0XHRcdH0pfT5cclxuXHRcdFx0e2NvbXBsZXRlZCA/IChcclxuXHRcdFx0XHQ8Q2hlY2sgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbXBsZXRlZH0gLz5cclxuXHRcdFx0KSA6IChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jaXJjbGV9IC8+XHJcblx0XHRcdCl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5Rb250b1N0ZXBJY29uLnByb3BUeXBlcyA9IHtcclxuXHQvKipcclxuXHQgKiBXaGV0aGVyIHRoaXMgc3RlcCBpcyBhY3RpdmUuXHJcblx0ICovXHJcblx0YWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcclxuXHQvKipcclxuXHQgKiBNYXJrIHRoZSBzdGVwIGFzIGNvbXBsZXRlZC4gSXMgcGFzc2VkIHRvIGNoaWxkIGNvbXBvbmVudHMuXHJcblx0ICovXHJcblx0Y29tcGxldGVkOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmNvbnN0IENvbG9ybGliQ29ubmVjdG9yID0gd2l0aFN0eWxlcyh7XHJcblx0YWx0ZXJuYXRpdmVMYWJlbDoge1xyXG5cdFx0dG9wOiAyMixcclxuXHR9LFxyXG5cdGFjdGl2ZToge1xyXG5cdFx0JyYgJGxpbmUnOiB7XHJcblx0XHRcdGJhY2tncm91bmRJbWFnZTpcclxuXHRcdFx0XHQnbGluZWFyLWdyYWRpZW50KCA5NWRlZyxyZ2IoMjQyLDExMywzMykgMCUscmdiKDIzMyw2NCw4NykgNTAlLHJnYigxMzgsMzUsMTM1KSAxMDAlKScsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0Y29tcGxldGVkOiB7XHJcblx0XHQnJiAkbGluZSc6IHtcclxuXHRcdFx0YmFja2dyb3VuZEltYWdlOlxyXG5cdFx0XHRcdCdsaW5lYXItZ3JhZGllbnQoIDk1ZGVnLHJnYigyNDIsMTEzLDMzKSAwJSxyZ2IoMjMzLDY0LDg3KSA1MCUscmdiKDEzOCwzNSwxMzUpIDEwMCUpJyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRsaW5lOiB7XHJcblx0XHRoZWlnaHQ6IDMsXHJcblx0XHRib3JkZXI6IDAsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjZWFlYWYwJyxcclxuXHRcdGJvcmRlclJhZGl1czogMSxcclxuXHR9LFxyXG59KShTdGVwQ29ubmVjdG9yKTtcclxuXHJcbmNvbnN0IHVzZUNvbG9ybGliU3RlcEljb25TdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuXHRyb290OiB7XHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjY2NjJyxcclxuXHRcdHpJbmRleDogMSxcclxuXHRcdGNvbG9yOiAnI2ZmZicsXHJcblx0XHR3aWR0aDogNTAsXHJcblx0XHRoZWlnaHQ6IDUwLFxyXG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAnNTAlJyxcclxuXHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuXHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cdH0sXHJcblx0YWN0aXZlOiB7XHJcblx0XHRiYWNrZ3JvdW5kSW1hZ2U6XHJcblx0XHRcdCdsaW5lYXItZ3JhZGllbnQoIDEzNmRlZywgcmdiKDI0MiwxMTMsMzMpIDAlLCByZ2IoMjMzLDY0LDg3KSA1MCUsIHJnYigxMzgsMzUsMTM1KSAxMDAlKScsXHJcblx0XHRib3hTaGFkb3c6ICcwIDRweCAxMHB4IDAgcmdiYSgwLDAsMCwuMjUpJyxcclxuXHR9LFxyXG5cdGNvbXBsZXRlZDoge1xyXG5cdFx0YmFja2dyb3VuZEltYWdlOlxyXG5cdFx0XHQnbGluZWFyLWdyYWRpZW50KCAxMzZkZWcsIHJnYigyNDIsMTEzLDMzKSAwJSwgcmdiKDIzMyw2NCw4NykgNTAlLCByZ2IoMTM4LDM1LDEzNSkgMTAwJSknLFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gQ29sb3JsaWJTdGVwSWNvbihwcm9wcykge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VDb2xvcmxpYlN0ZXBJY29uU3R5bGVzKCk7XHJcblx0Y29uc3QgeyBhY3RpdmUsIGNvbXBsZXRlZCB9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IGljb25zID0ge1xyXG5cdFx0MTogPFN0YXJzSWNvbiAvPixcclxuXHRcdDI6IDxQaWN0dXJlSW5QaWN0dXJlQWx0SWNvbiAvPixcclxuXHRcdDM6IDxNb25ldGl6YXRpb25Pbkljb24gLz4sXHJcblx0XHQ0OiA8UGFnZXZpZXdJY29uIC8+LFxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsIHtcclxuXHRcdFx0XHRbY2xhc3Nlcy5hY3RpdmVdOiBhY3RpdmUsXHJcblx0XHRcdFx0W2NsYXNzZXMuY29tcGxldGVkXTogY29tcGxldGVkLFxyXG5cdFx0XHR9KX0+XHJcblx0XHRcdHtpY29uc1tTdHJpbmcocHJvcHMuaWNvbildfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuQ29sb3JsaWJTdGVwSWNvbi5wcm9wVHlwZXMgPSB7XHJcblx0LyoqXHJcblx0ICogV2hldGhlciB0aGlzIHN0ZXAgaXMgYWN0aXZlLlxyXG5cdCAqL1xyXG5cdGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXHJcblx0LyoqXHJcblx0ICogTWFyayB0aGUgc3RlcCBhcyBjb21wbGV0ZWQuIElzIHBhc3NlZCB0byBjaGlsZCBjb21wb25lbnRzLlxyXG5cdCAqL1xyXG5cdGNvbXBsZXRlZDogUHJvcFR5cGVzLmJvb2wsXHJcblx0LyoqXHJcblx0ICogVGhlIGxhYmVsIGRpc3BsYXllZCBpbiB0aGUgc3RlcCBpY29uLlxyXG5cdCAqL1xyXG5cdGljb246IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0cm9vdDoge1xyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHR9LFxyXG5cdGJ1dHRvbjoge1xyXG5cdFx0bWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0fSxcclxuXHRpbnN0cnVjdGlvbnM6IHtcclxuXHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygxKSxcclxuXHR9LFxyXG5cdGZvcm1Db250cm9sOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHRtaW5XaWR0aDogJzEwMCUnLFxyXG5cdH0sXHJcblx0c2VsZWN0RW1wdHk6IHtcclxuXHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuXHR9LFxyXG5cdHRleHRGaWVsZDoge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBnZXRTdGVwcygpIHtcclxuXHRyZXR1cm4gW1xyXG5cdFx0J0luZm9zIGfDqW7DqXJhbGVzJyxcclxuXHRcdCdJbmZvcyBkaXZlcnNlcycsXHJcblx0XHQnSW5mb3MgcHJhdGlxdWVzICYgZmluYW5jacOocmVzJyxcclxuXHRcdCdJbmZvcyBwYWdlcyAmIFNFTycsXHJcblx0XTtcclxufVxyXG5cclxuY29uc3QgRm9ybUNyZWF0ZUdpdGUgPSAoeyBzbmFja2JhclNob3dNZXNzYWdlLCByb3V0ZXIsIGdpdGUgfSkgPT4ge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHRjb25zdCBbYWN0aXZlU3RlcCwgc2V0QWN0aXZlU3RlcF0gPSB1c2VTdGF0ZSgwKTtcclxuXHRjb25zdCB7IGNvbnRyb2wsIHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm0oe1xyXG5cdFx0c2hvdWxkVW5yZWdpc3RlcjogZmFsc2UsXHJcblx0XHRkZWZhdWx0VmFsdWVzOiB7XHJcblx0XHRcdG5vbTogJ3Rlc3QnLFxyXG5cdFx0XHRhZHJlc3NlOiAndGVzdCcsXHJcblx0XHRcdGNwOiAnMDgyNDAnLFxyXG5cdFx0XHR2aWxsZTogJ2Zvc3PDqScsXHJcblx0XHRcdGNhcGFjaXRlTWF4OiAnMjAnLFxyXG5cdFx0XHRtdGl0bGU6XHJcblx0XHRcdFx0J0xlcyBHw650ZXMgV0FPIHwgTGUgZ8OudGUgTWFub2xhIGF2ZWMgcGlzY2luZSBjaGF1ZmbDqWUgZXQgY291dmVydGUnLFxyXG5cdFx0XHRwcmVzR2l0ZVNFTzpcclxuXHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YWUgbmVjZXNzaXRhdGlidXMgcmVwcmVoZW5kZXJpdCBhbGlxdWlkIG1haW9yZXMgaXBzYW0gcXVpYnVzZGFtLCBlb3Mgb21uaXMgbWF4aW1lLCBwb3JybyByYXRpb25lIGN1cGlkaXRhdGUgdGVtcG9yZSBtaW5pbWEgcXVhcyB1bGxhbSBpdXJlIHZlcm8gZG9sb3JlbT8gSXBzdW0gc2l0IGVvcyBkb2xvciB0ZW1wb3JlIG5lbW8sIGV4IHF1aXNxdWFtIGJlYXRhZSB1dCwgdm9sdXB0YXRpYnVzLCBlbmltIHNpbWlsaXF1ZSBkb2xvcmU/IFF1aWEgZGVzZXJ1bnQgc29sdXRhIGFzcGVybmF0dXIgZG9sb3JpYnVzIGVzdC4gUXVpYSB0ZW1wb3JhIGFkaXBpc2NpIHF1b3MgcHJvdmlkZW50IHJhdGlvbmUgdm9sdXB0YXRpYnVzIGNvcnBvcmlzIGFuaW1pIGVhcnVtIGFjY3VzYW11cyBkb2xvcmUgbW9sZXN0aWFzIGlwc2EsIG5hbSByZXB1ZGlhbmRhZSBzaW1pbGlxdWUgY29ycnVwdGkgZXhlcmNpdGF0aW9uZW0gbm9uIG5lbW8sIG5lc2NpdW50IGRvbG9yZW0gcGVyZmVyZW5kaXMuIFZvbHVwdGF0ZSBpbiBhcmNoaXRlY3RvIGlsbHVtLCBpcHN1bSBtb2RpIHF1b2QsIGVhcXVlIGVsaWdlbmRpIHF1aSBkb2xvciBwb3JybyBkdWNpbXVzIGRpY3RhIGlzdGUgcXVhZXJhdCwgZXhlcmNpdGF0aW9uZW0gbnVtcXVhbS4gVGVtcG9yaWJ1cyByYXRpb25lLCBhY2N1c2FudGl1bSBhdCBleHBlZGl0YSBkZWxlY3R1cyB2ZWwgcXVpIHByYWVzZW50aXVtIG1pbnVzIGN1cGlkaXRhdGUuIEN1bHBhIG5lY2Vzc2l0YXRpYnVzIGNvbnNlcXVhdHVyIHNhcGllbnRlIHF1aWEgcXVpc3F1YW0gZXJyb3IgbmVxdWUgbmFtIGRvbG9yZW1xdWUgcGVyZmVyZW5kaXMgaGljIHZlcml0YXRpcywgaXVzdG8gZG9sb3JpYnVzIGN1bSB0ZW1wb3JlIHF1aWRlbSBhYiBtb2xlc3RpYWUsIGJlYXRhZSBldW0sIGJsYW5kaXRpaXMgZGVsZWN0dXMgcXVvZCBub2JpcyBmdWdpdD8gSWQsIHBlcmZlcmVuZGlzIHZlbGl0IHF1aSBlYXJ1bSByZXBlbGxlbmR1cyBpcHN1bSBlb3MgcGFyaWF0dXIgcXVhZSB2b2x1cHRhdGUsIGV0IGVsaWdlbmRpIG5lbW8gaXVzdG8gbGFib3JlIG1vbGVzdGlhZSBjb3JydXB0aSBjdW1xdWUgYXNwZXJuYXR1ciBvZmZpY2lpcy4gSW5jaWR1bnQhJyxcclxuXHRcdFx0ZGV0YWlsR2l0ZTpcclxuXHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRnVnYSBzYWVwZSBjb3Jwb3JpcyBuaXNpIG51bXF1YW0gcmF0aW9uZSBtb2RpIGFyY2hpdGVjdG8uIEN1bSBlcnJvciBwZXJmZXJlbmRpcyBoaWMgaXVyZSwgcHJvdmlkZW50IGxhYm9yZS4gSXBzdW0gc2ludCBhdCBzZXF1aSBhbGlxdWlkIGFzc3VtZW5kYSB2ZWxpdCBoaWMgdG90YW0gaWQgYXBlcmlhbSBleGNlcHR1cmksIGxhdWRhbnRpdW0gYW5pbWkgZmFjZXJlLCBjb21tb2RpIGVhcnVtIHVsbGFtLCBhdHF1ZSBldW0gc2FlcGUgcmVpY2llbmRpcyBxdW9zIHF1YWUgZnVnYSB0ZW1wb3JhLiBRdWlzIGFuaW1pIG1pbnVzIG1vbGVzdGlhZSB1bmRlIGRvbG9yZW0gZXNzZSBzaW1pbGlxdWUgZG9sb3J1bSBpbnZlbnRvcmUgbm9zdHJ1bSBxdWFzaSBsYXVkYW50aXVtIGV4IHF1YW0gYWxpcXVhbSBhY2N1c2FtdXMgY3VtcXVlIHF1b3MgZG9sb3IgY29uc2VjdGV0dXIsIGRlbGVjdHVzIHJlcnVtPyBWZWxpdCBxdWlzcXVhbSBsYWJvcmUgcXVhZSBxdWFlcmF0IG1haW9yZXMgcXVpZGVtIHJlcGVsbGVuZHVzIHNpbWlsaXF1ZSBkb2xvciwgYW1ldCBuaWhpbCBhdCwgYXV0ZW0gbnVtcXVhbSBwb3JybyBjb3Jwb3JpcyBxdWlhIGluIGhpYyBwZXJzcGljaWF0aXMgYWxpcXVhbS4gUHJhZXNlbnRpdW0gY3VwaWRpdGF0ZSBkaWduaXNzaW1vcyBuYW0gZGViaXRpcyBleCBlcnJvciBpbGxvIGlkIGluY2lkdW50IGV2ZW5pZXQsIGlzdGUgbWludXMgZXNzZSBzYXBpZW50ZSBwZXJzcGljaWF0aXMgZWEgZWFxdWUgYWxpcXVhbSBwZXJmZXJlbmRpcyBkZXNlcnVudC4gRXQsIG1haW9yZXMgc2FwaWVudGUsIGRpY3RhIHBhcmlhdHVyIGV4IGxhYm9ydW0gcXVpZGVtLCBkZWJpdGlzIG5vbiBtb2RpIGFyY2hpdGVjdG8gZG9sb3J1bSBtYWduaSBzaXQgbm9zdHJ1bSBpdXN0byBlYXF1ZSBvcHRpbyBhY2N1c2FtdXMgYXNzdW1lbmRhIHJlcHVkaWFuZGFlIHZpdGFlIGZ1Z2l0IG5hbSBxdWFzIGl0YXF1ZSBlYSBhY2N1c2FudGl1bS4gVmVybyBmdWdpYXQgZnVnaXQgY29ycG9yaXMgdXQgbW9kaS4gRG9sb3JlbXF1ZSwgbmVjZXNzaXRhdGlidXMgcXVpYSEgUXVhc2kgdGVtcG9yaWJ1cyByZXByZWhlbmRlcml0IGEgYW5pbWkgZWl1cywgb2ZmaWNpaXMgcG9ycm8gZWEhIE9kaXQgbm9uLCBhc3BlcmlvcmVzIG51bXF1YW0gcXVhZSBtYWlvcmVzIHNlZCB2ZWxpdCBhbGlxdWlkIHRlbXBvcmEgbWFnbmkgbmVtbyBpcHNhbSB0ZW5ldHVyIHRlbXBvcmUgZGlzdGluY3RpbywgaW5jaWR1bnQgc2FlcGUgbW9sZXN0aWFlIHF1b2QgYXJjaGl0ZWN0byBub3N0cnVtIGFjY3VzYW50aXVtLCBwZXJmZXJlbmRpcyByZXBlbGxlbmR1cyBzaW1pbGlxdWUgZXZlbmlldCB2b2x1cHRhdGVtIGNvcnJ1cHRpLiBBIGlsbG8gaXBzdW0gY29ycnVwdGkgcGVyc3BpY2lhdGlzIHJlY3VzYW5kYWUgdGVtcG9yZSBzYWVwZSByZXB1ZGlhbmRhZS4gQ3VtcXVlLCB2ZWxpdCBxdWlzIHJlcGVsbGF0IHJhdGlvbmUsIHZlbCBleHBsaWNhYm8gY29tbW9kaSB0ZW5ldHVyIGV2ZW5pZXQgaW1wZWRpdCBlYSBuZXNjaXVudCBkb2xvcmUgaW4gaXBzYW0gZXQgcGxhY2VhdCBvZmZpY2lpcyBjb25zZXF1YXR1ci4gUXVhZSBuZXF1ZSBpbXBlZGl0IHJlY3VzYW5kYWUsIG9mZmljaWlzIHZlcm8gbWludXMgZnVnaXQgYWxpYXMgcGVyZmVyZW5kaXMhIFF1YWVyYXQgaXVzdG8gcXVpZGVtIGRlbGVuaXRpLCBvZmZpY2lhIHN1bnQgZnVnaXQsIHNpbnQgb2RpbyBlcnJvciwgc2VxdWkgZnVnYSBzYWVwZSBkZWJpdGlzIGV4cGxpY2FibyBhY2N1c2FudGl1bSBkb2xvcmVtcXVlIGlzdGUgaXVyZSBkZXNlcnVudC4nLFxyXG5cdFx0XHR0ZXh0ZUV4dGVyaWV1cjogYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEZ1Z2Egc2FlcGUgY29ycG9yaXMgbmlzaSBudW1xdWFtIHJhdGlvbmUgbW9kaSBhcmNoaXRlY3RvLiBDdW0gZXJyb3IgcGVyZmVyZW5kaXMgaGljIGl1cmUsIHByb3ZpZGVudCBsYWJvcmUuIElwc3VtIHNpbnQgYXQgc2VxdWkgYWxpcXVpZCBhc3N1bWVuZGEgdmVsaXQgaGljIHRvdGFtIGlkIGFwZXJpYW0gZXhjZXB0dXJpLCBsYXVkYW50aXVtIGFuaW1pIGZhY2VyZSwgY29tbW9kaSBlYXJ1bSB1bGxhbSwgYXRxdWUgZXVtIHNhZXBlIHJlaWNpZW5kaXMgcXVvcyBxdWFlIGZ1Z2EgdGVtcG9yYS4gUXVpcyBhbmltaSBtaW51cyBtb2xlc3RpYWUgdW5kZSBkb2xvcmVtIGVzc2Ugc2ltaWxpcXVlIGRvbG9ydW0gaW52ZW50b3JlIG5vc3RydW0gcXVhc2kgbGF1ZGFudGl1bSBleCBxdWFtIGFsaXF1YW0gYWNjdXNhbXVzIGN1bXF1ZSBxdW9zIGRvbG9yIGNvbnNlY3RldHVyLCBkZWxlY3R1cyByZXJ1bT8gVmVsaXQgcXVpc3F1YW0gbGFib3JlIHF1YWUgcXVhZXJhdCBtYWlvcmVzIHF1aWRlbSByZXBlbGxlbmR1cyBzaW1pbGlxdWUgZG9sb3IsIGFtZXQgbmloaWwgYXQsIGF1dGVtIG51bXF1YW0gcG9ycm8gY29ycG9yaXMgcXVpYSBpbiBoaWMgcGVyc3BpY2lhdGlzIGFsaXF1YW0uIFByYWVzZW50aXVtIGN1cGlkaXRhdGUgZGlnbmlzc2ltb3MgbmFtIGRlYml0aXMgZXggZXJyb3IgaWxsbyBpZCBpbmNpZHVudCBldmVuaWV0LCBpc3RlIG1pbnVzIGVzc2Ugc2FwaWVudGUgcGVyc3BpY2lhdGlzIGVhIGVhcXVlIGFsaXF1YW0gcGVyZmVyZW5kaXMgZGVzZXJ1bnQuIEV0LCBtYWlvcmVzIHNhcGllbnRlLCBkaWN0YSBwYXJpYXR1ciBleCBsYWJvcnVtIHF1aWRlbSwgZGViaXRpcyBub24gbW9kaSBhcmNoaXRlY3RvIGRvbG9ydW0gbWFnbmkgc2l0IG5vc3RydW0gaXVzdG8gZWFxdWUgb3B0aW8gYWNjdXNhbXVzIGFzc3VtZW5kYSByZXB1ZGlhbmRhZSB2aXRhZSBmdWdpdCBuYW0gcXVhcyBpdGFxdWUgZWEgYWNjdXNhbnRpdW0uIFZlcm8gZnVnaWF0IGZ1Z2l0IGNvcnBvcmlzIHV0IG1vZGkuIERvbG9yZW1xdWUsIG5lY2Vzc2l0YXRpYnVzIHF1aWEhIFF1YXNpIHRlbXBvcmlidXMgcmVwcmVoZW5kZXJpdCBhIGFuaW1pIGVpdXMsIG9mZmljaWlzIHBvcnJvIGVhISBPZGl0IG5vbiwgYXNwZXJpb3JlcyBudW1xdWFtIHF1YWUgbWFpb3JlcyBzZWQgdmVsaXQgYWxpcXVpZCB0ZW1wb3JhIG1hZ25pIG5lbW8gaXBzYW0gdGVuZXR1ciB0ZW1wb3JlIGRpc3RpbmN0aW8sIGluY2lkdW50IHNhZXBlIG1vbGVzdGlhZSBxdW9kIGFyY2hpdGVjdG8gbm9zdHJ1bSBhY2N1c2FudGl1bSwgcGVyZmVyZW5kaXMgcmVwZWxsZW5kdXMgc2ltaWxpcXVlIGV2ZW5pZXQgdm9sdXB0YXRlbSBjb3JydXB0aS4gQSBpbGxvIGlwc3VtIGNvcnJ1cHRpIHBlcnNwaWNpYXRpcyByZWN1c2FuZGFlIHRlbXBvcmUgc2FlcGUgcmVwdWRpYW5kYWUuIEN1bXF1ZSwgdmVsaXQgcXVpcyByZXBlbGxhdCByYXRpb25lLCB2ZWwgZXhwbGljYWJvIGNvbW1vZGkgdGVuZXR1ciBldmVuaWV0IGltcGVkaXQgZWEgbmVzY2l1bnQgZG9sb3JlIGluIGlwc2FtIGV0IHBsYWNlYXQgb2ZmaWNpaXMgY29uc2VxdWF0dXIuIFF1YWUgbmVxdWUgaW1wZWRpdCByZWN1c2FuZGFlLCBvZmZpY2lpcyB2ZXJvIG1pbnVzIGZ1Z2l0IGFsaWFzIHBlcmZlcmVuZGlzISBRdWFlcmF0IGl1c3RvIHF1aWRlbSBkZWxlbml0aSwgb2ZmaWNpYSBzdW50IGZ1Z2l0LCBzaW50IG9kaW8gZXJyb3IsIHNlcXVpIGZ1Z2Egc2FlcGUgZGViaXRpcyBleHBsaWNhYm8gYWNjdXNhbnRpdW0gZG9sb3JlbXF1ZSBpc3RlIGl1cmUgZGVzZXJ1bnQuYCxcclxuXHRcdFx0ZXF1aXBlbWVudEV4dGVyaWV1cjogJ3RydWMxLHRydWMyLHRydWMzLHRydWM0LHRydWM1JyxcclxuXHRcdFx0dGV4dGVJbnRlcmlldXI6IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBGdWdhIHNhZXBlIGNvcnBvcmlzIG5pc2kgbnVtcXVhbSByYXRpb25lIG1vZGkgYXJjaGl0ZWN0by4gQ3VtIGVycm9yIHBlcmZlcmVuZGlzIGhpYyBpdXJlLCBwcm92aWRlbnQgbGFib3JlLiBJcHN1bSBzaW50IGF0IHNlcXVpIGFsaXF1aWQgYXNzdW1lbmRhIHZlbGl0IGhpYyB0b3RhbSBpZCBhcGVyaWFtIGV4Y2VwdHVyaSwgbGF1ZGFudGl1bSBhbmltaSBmYWNlcmUsIGNvbW1vZGkgZWFydW0gdWxsYW0sIGF0cXVlIGV1bSBzYWVwZSByZWljaWVuZGlzIHF1b3MgcXVhZSBmdWdhIHRlbXBvcmEuIFF1aXMgYW5pbWkgbWludXMgbW9sZXN0aWFlIHVuZGUgZG9sb3JlbSBlc3NlIHNpbWlsaXF1ZSBkb2xvcnVtIGludmVudG9yZSBub3N0cnVtIHF1YXNpIGxhdWRhbnRpdW0gZXggcXVhbSBhbGlxdWFtIGFjY3VzYW11cyBjdW1xdWUgcXVvcyBkb2xvciBjb25zZWN0ZXR1ciwgZGVsZWN0dXMgcmVydW0/IFZlbGl0IHF1aXNxdWFtIGxhYm9yZSBxdWFlIHF1YWVyYXQgbWFpb3JlcyBxdWlkZW0gcmVwZWxsZW5kdXMgc2ltaWxpcXVlIGRvbG9yLCBhbWV0IG5paGlsIGF0LCBhdXRlbSBudW1xdWFtIHBvcnJvIGNvcnBvcmlzIHF1aWEgaW4gaGljIHBlcnNwaWNpYXRpcyBhbGlxdWFtLiBQcmFlc2VudGl1bSBjdXBpZGl0YXRlIGRpZ25pc3NpbW9zIG5hbSBkZWJpdGlzIGV4IGVycm9yIGlsbG8gaWQgaW5jaWR1bnQgZXZlbmlldCwgaXN0ZSBtaW51cyBlc3NlIHNhcGllbnRlIHBlcnNwaWNpYXRpcyBlYSBlYXF1ZSBhbGlxdWFtIHBlcmZlcmVuZGlzIGRlc2VydW50LiBFdCwgbWFpb3JlcyBzYXBpZW50ZSwgZGljdGEgcGFyaWF0dXIgZXggbGFib3J1bSBxdWlkZW0sIGRlYml0aXMgbm9uIG1vZGkgYXJjaGl0ZWN0byBkb2xvcnVtIG1hZ25pIHNpdCBub3N0cnVtIGl1c3RvIGVhcXVlIG9wdGlvIGFjY3VzYW11cyBhc3N1bWVuZGEgcmVwdWRpYW5kYWUgdml0YWUgZnVnaXQgbmFtIHF1YXMgaXRhcXVlIGVhIGFjY3VzYW50aXVtLiBWZXJvIGZ1Z2lhdCBmdWdpdCBjb3Jwb3JpcyB1dCBtb2RpLiBEb2xvcmVtcXVlLCBuZWNlc3NpdGF0aWJ1cyBxdWlhISBRdWFzaSB0ZW1wb3JpYnVzIHJlcHJlaGVuZGVyaXQgYSBhbmltaSBlaXVzLCBvZmZpY2lpcyBwb3JybyBlYSEgT2RpdCBub24sIGFzcGVyaW9yZXMgbnVtcXVhbSBxdWFlIG1haW9yZXMgc2VkIHZlbGl0IGFsaXF1aWQgdGVtcG9yYSBtYWduaSBuZW1vIGlwc2FtIHRlbmV0dXIgdGVtcG9yZSBkaXN0aW5jdGlvLCBpbmNpZHVudCBzYWVwZSBtb2xlc3RpYWUgcXVvZCBhcmNoaXRlY3RvIG5vc3RydW0gYWNjdXNhbnRpdW0sIHBlcmZlcmVuZGlzIHJlcGVsbGVuZHVzIHNpbWlsaXF1ZSBldmVuaWV0IHZvbHVwdGF0ZW0gY29ycnVwdGkuIEEgaWxsbyBpcHN1bSBjb3JydXB0aSBwZXJzcGljaWF0aXMgcmVjdXNhbmRhZSB0ZW1wb3JlIHNhZXBlIHJlcHVkaWFuZGFlLiBDdW1xdWUsIHZlbGl0IHF1aXMgcmVwZWxsYXQgcmF0aW9uZSwgdmVsIGV4cGxpY2FibyBjb21tb2RpIHRlbmV0dXIgZXZlbmlldCBpbXBlZGl0IGVhIG5lc2NpdW50IGRvbG9yZSBpbiBpcHNhbSBldCBwbGFjZWF0IG9mZmljaWlzIGNvbnNlcXVhdHVyLiBRdWFlIG5lcXVlIGltcGVkaXQgcmVjdXNhbmRhZSwgb2ZmaWNpaXMgdmVybyBtaW51cyBmdWdpdCBhbGlhcyBwZXJmZXJlbmRpcyEgUXVhZXJhdCBpdXN0byBxdWlkZW0gZGVsZW5pdGksIG9mZmljaWEgc3VudCBmdWdpdCwgc2ludCBvZGlvIGVycm9yLCBzZXF1aSBmdWdhIHNhZXBlIGRlYml0aXMgZXhwbGljYWJvIGFjY3VzYW50aXVtIGRvbG9yZW1xdWUgaXN0ZSBpdXJlIGRlc2VydW50LmAsXHJcblx0XHRcdGVxdWlwZW1lbnRJbnRlcmlldXI6ICd0cnVjMSx0cnVjMix0cnVjMyx0cnVjNCx0cnVjNScsXHJcblx0XHRcdHRleHRlUGlzY2luZTogYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEZ1Z2Egc2FlcGUgY29ycG9yaXMgbmlzaSBudW1xdWFtIHJhdGlvbmUgbW9kaSBhcmNoaXRlY3RvLiBDdW0gZXJyb3IgcGVyZmVyZW5kaXMgaGljIGl1cmUsIHByb3ZpZGVudCBsYWJvcmUuIElwc3VtIHNpbnQgYXQgc2VxdWkgYWxpcXVpZCBhc3N1bWVuZGEgdmVsaXQgaGljIHRvdGFtIGlkIGFwZXJpYW0gZXhjZXB0dXJpLCBsYXVkYW50aXVtIGFuaW1pIGZhY2VyZSwgY29tbW9kaSBlYXJ1bSB1bGxhbSwgYXRxdWUgZXVtIHNhZXBlIHJlaWNpZW5kaXMgcXVvcyBxdWFlIGZ1Z2EgdGVtcG9yYS4gUXVpcyBhbmltaSBtaW51cyBtb2xlc3RpYWUgdW5kZSBkb2xvcmVtIGVzc2Ugc2ltaWxpcXVlIGRvbG9ydW0gaW52ZW50b3JlIG5vc3RydW0gcXVhc2kgbGF1ZGFudGl1bSBleCBxdWFtIGFsaXF1YW0gYWNjdXNhbXVzIGN1bXF1ZSBxdW9zIGRvbG9yIGNvbnNlY3RldHVyLCBkZWxlY3R1cyByZXJ1bT8gVmVsaXQgcXVpc3F1YW0gbGFib3JlIHF1YWUgcXVhZXJhdCBtYWlvcmVzIHF1aWRlbSByZXBlbGxlbmR1cyBzaW1pbGlxdWUgZG9sb3IsIGFtZXQgbmloaWwgYXQsIGF1dGVtIG51bXF1YW0gcG9ycm8gY29ycG9yaXMgcXVpYSBpbiBoaWMgcGVyc3BpY2lhdGlzIGFsaXF1YW0uIFByYWVzZW50aXVtIGN1cGlkaXRhdGUgZGlnbmlzc2ltb3MgbmFtIGRlYml0aXMgZXggZXJyb3IgaWxsbyBpZCBpbmNpZHVudCBldmVuaWV0LCBpc3RlIG1pbnVzIGVzc2Ugc2FwaWVudGUgcGVyc3BpY2lhdGlzIGVhIGVhcXVlIGFsaXF1YW0gcGVyZmVyZW5kaXMgZGVzZXJ1bnQuIEV0LCBtYWlvcmVzIHNhcGllbnRlLCBkaWN0YSBwYXJpYXR1ciBleCBsYWJvcnVtIHF1aWRlbSwgZGViaXRpcyBub24gbW9kaSBhcmNoaXRlY3RvIGRvbG9ydW0gbWFnbmkgc2l0IG5vc3RydW0gaXVzdG8gZWFxdWUgb3B0aW8gYWNjdXNhbXVzIGFzc3VtZW5kYSByZXB1ZGlhbmRhZSB2aXRhZSBmdWdpdCBuYW0gcXVhcyBpdGFxdWUgZWEgYWNjdXNhbnRpdW0uIFZlcm8gZnVnaWF0IGZ1Z2l0IGNvcnBvcmlzIHV0IG1vZGkuIERvbG9yZW1xdWUsIG5lY2Vzc2l0YXRpYnVzIHF1aWEhIFF1YXNpIHRlbXBvcmlidXMgcmVwcmVoZW5kZXJpdCBhIGFuaW1pIGVpdXMsIG9mZmljaWlzIHBvcnJvIGVhISBPZGl0IG5vbiwgYXNwZXJpb3JlcyBudW1xdWFtIHF1YWUgbWFpb3JlcyBzZWQgdmVsaXQgYWxpcXVpZCB0ZW1wb3JhIG1hZ25pIG5lbW8gaXBzYW0gdGVuZXR1ciB0ZW1wb3JlIGRpc3RpbmN0aW8sIGluY2lkdW50IHNhZXBlIG1vbGVzdGlhZSBxdW9kIGFyY2hpdGVjdG8gbm9zdHJ1bSBhY2N1c2FudGl1bSwgcGVyZmVyZW5kaXMgcmVwZWxsZW5kdXMgc2ltaWxpcXVlIGV2ZW5pZXQgdm9sdXB0YXRlbSBjb3JydXB0aS4gQSBpbGxvIGlwc3VtIGNvcnJ1cHRpIHBlcnNwaWNpYXRpcyByZWN1c2FuZGFlIHRlbXBvcmUgc2FlcGUgcmVwdWRpYW5kYWUuIEN1bXF1ZSwgdmVsaXQgcXVpcyByZXBlbGxhdCByYXRpb25lLCB2ZWwgZXhwbGljYWJvIGNvbW1vZGkgdGVuZXR1ciBldmVuaWV0IGltcGVkaXQgZWEgbmVzY2l1bnQgZG9sb3JlIGluIGlwc2FtIGV0IHBsYWNlYXQgb2ZmaWNpaXMgY29uc2VxdWF0dXIuIFF1YWUgbmVxdWUgaW1wZWRpdCByZWN1c2FuZGFlLCBvZmZpY2lpcyB2ZXJvIG1pbnVzIGZ1Z2l0IGFsaWFzIHBlcmZlcmVuZGlzISBRdWFlcmF0IGl1c3RvIHF1aWRlbSBkZWxlbml0aSwgb2ZmaWNpYSBzdW50IGZ1Z2l0LCBzaW50IG9kaW8gZXJyb3IsIHNlcXVpIGZ1Z2Egc2FlcGUgZGViaXRpcyBleHBsaWNhYm8gYWNjdXNhbnRpdW0gZG9sb3JlbXF1ZSBpc3RlIGl1cmUgZGVzZXJ1bnQuYCxcclxuXHRcdFx0ZXF1aXBlbWVudFBpc2NpbmU6ICd0cnVjMSx0cnVjMix0cnVjMyx0cnVjNCx0cnVjNScsXHJcblx0XHRcdHRleHRlOiAnVW4gdGV4dGUgcG91ciBlc3NheWVyJyxcclxuXHJcblx0XHRcdHZpZGVvTGluazogJycsXHJcblx0XHRcdGNhbGVuZHJpZXJMaW5rOiAnJyxcclxuXHRcdFx0Y291bGV1cjE6ICcjQUFBQUFBJyxcclxuXHRcdFx0Y291bGV1cjI6ICcjMTExMTExJyxcclxuXHRcdH0sXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Y29uc3QgcmVSZWYgPSB1c2VSZWYoKTtcclxuXHJcblx0Y29uc3Qgc3RlcHMgPSBnZXRTdGVwcygpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xyXG5cdFx0c2V0QWN0aXZlU3RlcCgocHJldkFjdGl2ZVN0ZXApID0+IHByZXZBY3RpdmVTdGVwICsgMSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcclxuXHRcdHNldEFjdGl2ZVN0ZXAoKHByZXZBY3RpdmVTdGVwKSA9PiBwcmV2QWN0aXZlU3RlcCAtIDEpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xyXG5cdFx0c2V0QWN0aXZlU3RlcCgwKTtcclxuXHR9O1xyXG5cclxuXHRmdW5jdGlvbiBnZXRTdGVwQ29udGVudChzdGVwKSB7XHJcblx0XHRzd2l0Y2ggKHN0ZXApIHtcclxuXHRcdFx0Y2FzZSAwOlxyXG5cdFx0XHRcdHJldHVybiA8Rm9ybUluZm9zR2VuZSBjbGFzc2VzPXtjbGFzc2VzfSByZWdpc3Rlcj17cmVnaXN0ZXJ9IC8+O1xyXG5cdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdDxGb3JtSW5mb3NEaXZlcnNlcyBjbGFzc2VzPXtjbGFzc2VzfSByZWdpc3Rlcj17cmVnaXN0ZXJ9IC8+XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHQ8Rm9ybUluZm9zUHJhdGlxdWVzIGNsYXNzZXM9e2NsYXNzZXN9IHJlZ2lzdGVyPXtyZWdpc3Rlcn0gLz5cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRjYXNlIDM6XHJcblx0XHRcdFx0cmV0dXJuIDxGb3JtSW5mb3NQYWdlcyBjbGFzc2VzPXtjbGFzc2VzfSByZWdpc3Rlcj17cmVnaXN0ZXJ9IC8+O1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHJldHVybiAnRXJyZXVyJztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKCdzdWJtaXQnKTtcclxuXHRcdGNvbnNvbGUubG9nKCdkYXRhIHZhdXQ6JywgZGF0YSk7XHJcblx0XHQvLyBzZXRMb2FkaW5nKHRydWUpO1xyXG5cdFx0Ly8gZGF0YS50b2tlbiA9IGF3YWl0IHJlUmVmLmN1cnJlbnQuZXhlY3V0ZUFzeW5jKCk7XHJcblx0XHQvLyByZVJlZi5jdXJyZW50LnJlc2V0KCk7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnb25TdWJtaXQgZGF0YSA9PicsIGRhdGEpO1xyXG5cdFx0Ly8gY3JlYXRlR2l0ZShkYXRhLCB0b2tlbikudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHQvLyBcdGNvbnNvbGUubG9nKCdyZXN1bHQgdmF1dCA9PicsIHJlc3VsdCk7XHJcblx0XHQvLyBcdGlmIChyZXN1bHQuZXJyb3IpIHtcclxuXHRcdC8vIFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHRcdC8vIFx0XHRzbmFja2JhclNob3dNZXNzYWdlKGAke3Jlc3VsdC5lcnJvcn1gKTtcclxuXHRcdC8vIFx0fSBlbHNlIGlmIChyZXN1bHQuZGVqYVJlc2VydmVNZXNzYWdlKSB7XHJcblx0XHQvLyBcdFx0c2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHQvLyBcdFx0c25hY2tiYXJTaG93TWVzc2FnZShgJHtyZXN1bHQuZGVqYVJlc2VydmVNZXNzYWdlfWApO1xyXG5cdFx0Ly8gXHR9IGVsc2Uge1xyXG5cdFx0Ly8gXHRcdHNldExvYWRpbmcoZmFsc2UpO1xyXG5cdFx0Ly8gXHRcdHNuYWNrYmFyU2hvd01lc3NhZ2UoYCR7cmVzdWx0Lm1lc3NhZ2V9YCwgJ3N1Y2Nlc3MnKTtcclxuXHRcdC8vIFx0XHQvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdC8vIFx0XHQvLyBcdFJvdXRlci5wdXNoKGAvYWRtaW4vZ2l0ZXNgLCBudWxsLCB7XHJcblx0XHQvLyBcdFx0Ly8gXHRcdHNoYWxsb3c6IHRydWUsXHJcblx0XHQvLyBcdFx0Ly8gXHR9KTtcclxuXHRcdC8vIFx0XHQvLyB9LCAzMDAwKTtcclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gfSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxDb250YWluZXI+XHJcblx0XHRcdHtsb2FkaW5nICYmIDxDaXJjdWxhclByb2dyZXNzIC8+fVxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcblx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG5cdFx0XHRcdFx0PFN0ZXBwZXJcclxuXHRcdFx0XHRcdFx0YWx0ZXJuYXRpdmVMYWJlbFxyXG5cdFx0XHRcdFx0XHRhY3RpdmVTdGVwPXthY3RpdmVTdGVwfVxyXG5cdFx0XHRcdFx0XHRjb25uZWN0b3I9ezxDb2xvcmxpYkNvbm5lY3RvciAvPn0+XHJcblx0XHRcdFx0XHRcdHtzdGVwcy5tYXAoKGxhYmVsKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PFN0ZXAga2V5PXtsYWJlbH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8U3RlcExhYmVsIFN0ZXBJY29uQ29tcG9uZW50PXtDb2xvcmxpYlN0ZXBJY29ufT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2xhYmVsfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9TdGVwTGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PC9TdGVwPlxyXG5cdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdDwvU3RlcHBlcj5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdHtjb25zb2xlLmxvZygnc3RlcCA6JywgYWN0aXZlU3RlcCl9XHJcblx0XHRcdFx0XHRcdHtjb25zb2xlLmxvZygnbGVuZ2h0IDonLCBzdGVwcy5sZW5ndGgpfVxyXG5cdFx0XHRcdFx0XHR7YWN0aXZlU3RlcCA9PT0gc3RlcHMubGVuZ3RoID8gKFxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHR7LyogVm9pciBwb3V0IGFqb3V0ZXIgaXNTdWJtaXRlZCA9PT0gdHJ1ZSAqL31cclxuXHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnN0cnVjdGlvbnN9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRWb3RyZSBkZW1hbmRlIGEgYmllbiDDqXTDqSBwcmlzZSBlbiBjb21wdGVcclxuXHRcdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlUmVzZXR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRSZWNvbW1lbmNlclxyXG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnN0cnVjdGlvbnN9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Z2V0U3RlcENvbnRlbnQoYWN0aXZlU3RlcCl9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250YWluZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9uPSdyb3cnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM9J2NlbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17YWN0aXZlU3RlcCA9PT0gMH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVCYWNrfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFJldG91clxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0ey8qIEEgcmV2b2lyICovfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7YWN0aXZlU3RlcCA9PT0gc3RlcHMubGVuZ3RoIC0gMSA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdzdWJtaXQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdjb250YWluZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcj0ncHJpbWFyeSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0VmFsaWRlclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yPSdwcmltYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlTmV4dH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0U3VpdmFudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvQ29udGFpbmVyPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKHdpdGhTbmFja2JhcihGb3JtQ3JlYXRlR2l0ZSkpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9