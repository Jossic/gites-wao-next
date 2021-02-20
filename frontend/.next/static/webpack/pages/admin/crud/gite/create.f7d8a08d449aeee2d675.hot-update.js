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
      lineNumber: 30,
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
      lineNumber: 84,
      columnNumber: 3
    }
  }, completed ? __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_13___default.a, {
    className: classes.completed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }) : __jsx("div", {
    className: classes.circle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
        lineNumber: 160,
        columnNumber: 6
      }
    }),
    2: __jsx(_material_ui_icons_PictureInPictureAlt__WEBPACK_IMPORTED_MODULE_23___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 6
      }
    }),
    3: __jsx(_material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_25___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 6
      }
    }),
    4: __jsx(_material_ui_icons_Pageview__WEBPACK_IMPORTED_MODULE_26___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 6
      }
    })
  };
  return __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_8__["default"])(classes.root, (_clsx2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_clsx2, classes.active, active), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_clsx2, classes.completed, completed), _clsx2)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
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
      nom: 'Petit Nay',
      adresse: '81 route de Stenay',
      cp: '08240',
      ville: 'Nouart',
      capaciteMax: '58',
      mtitle: 'Les Gîtes WAO | Le gîte du Petit Nay avec piscine chauffée et couverte',
      presGiteSEO: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae necessitatibus reprehenderit aliquid maiores ipsam quibusdam, eos omnis maxime, porro ratione cupiditate tempore minima quas ullam iure vero dolorem? Ipsum sit eos dolor tempore nemo, ex quisquam beatae ut, voluptatibus, enim similique dolore? Quia deserunt soluta aspernatur doloribus est. Quia tempora adipisci quos provident ratione voluptatibus corporis animi earum accusamus dolore molestias ipsa, nam repudiandae similique corrupti exercitationem non nemo, nesciunt dolorem perferendis. Voluptate in architecto illum, ipsum modi quod, eaque eligendi qui dolor porro ducimus dicta iste quaerat, exercitationem numquam. Temporibus ratione, accusantium at expedita delectus vel qui praesentium minus cupiditate. Culpa necessitatibus consequatur sapiente quia quisquam error neque nam doloremque perferendis hic veritatis, iusto doloribus cum tempore quidem ab molestiae, beatae eum, blanditiis delectus quod nobis fugit? Id, perferendis velit qui earum repellendus ipsum eos pariatur quae voluptate, et eligendi nemo iusto labore molestiae corrupti cumque aspernatur officiis. Incidunt!',
      detailGite: "Le g\xEEte est situ\xE9 81 route de Stenay  \xE0 600 m de la commune de  Nouart (08240). Pour l\u2019instant il n\u2019y a pas  encore de piscine, mais un SPA, billard, baby foot, etc.\n\n                Tout le n\xE9cessaire est pr\xE9vu pour recevoir une cinquantaine de personnes et une grande chambre froide permet de stocker l\u2019alimentation.\n                \n                Il y a 10 chambres et 2 dortoirs. \n                \n                Une piscine est pr\xE9vue sur ce site, la construction va d\xE9buter en avril 2021 pour se terminer pour les f\xEAtes de fin d\u2019ann\xE9e 2021. Les locations apr\xE8s cette date subiront une augmentation variant entre 500 et 600 \u20AC par rapport au tarif calcul\xE9 actuellement.\n                                ",
      texteExterieur: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga saepe corporis nisi numquam ratione modi architecto. Cum error perferendis hic iure, provident labore. Ipsum sint at sequi aliquid assumenda velit hic totam id aperiam excepturi, laudantium animi facere, commodi earum ullam, atque eum saepe reiciendis quos quae fuga tempora. Quis animi minus molestiae unde dolorem esse similique dolorum inventore nostrum quasi laudantium ex quam aliquam accusamus cumque quos dolor consectetur, delectus rerum? Velit quisquam labore quae quaerat maiores quidem repellendus similique dolor, amet nihil at, autem numquam porro corporis quia in hic perspiciatis aliquam. Praesentium cupiditate dignissimos nam debitis ex error illo id incidunt eveniet, iste minus esse sapiente perspiciatis ea eaque aliquam perferendis deserunt. Et, maiores sapiente, dicta pariatur ex laborum quidem, debitis non modi architecto dolorum magni sit nostrum iusto eaque optio accusamus assumenda repudiandae vitae fugit nam quas itaque ea accusantium. Vero fugiat fugit corporis ut modi. Doloremque, necessitatibus quia! Quasi temporibus reprehenderit a animi eius, officiis porro ea! Odit non, asperiores numquam quae maiores sed velit aliquid tempora magni nemo ipsam tenetur tempore distinctio, incidunt saepe molestiae quod architecto nostrum accusantium, perferendis repellendus similique eveniet voluptatem corrupti. A illo ipsum corrupti perspiciatis recusandae tempore saepe repudiandae. Cumque, velit quis repellat ratione, vel explicabo commodi tenetur eveniet impedit ea nesciunt dolore in ipsam et placeat officiis consequatur. Quae neque impedit recusandae, officiis vero minus fugit alias perferendis! Quaerat iusto quidem deleniti, officia sunt fugit, sint odio error, sequi fuga saepe debitis explicabo accusantium doloremque iste iure deserunt.",
      equipementExterieur: 'truc1,truc2,truc3,truc4,truc5',
      texteInterieur: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga saepe corporis nisi numquam ratione modi architecto. Cum error perferendis hic iure, provident labore. Ipsum sint at sequi aliquid assumenda velit hic totam id aperiam excepturi, laudantium animi facere, commodi earum ullam, atque eum saepe reiciendis quos quae fuga tempora. Quis animi minus molestiae unde dolorem esse similique dolorum inventore nostrum quasi laudantium ex quam aliquam accusamus cumque quos dolor consectetur, delectus rerum? Velit quisquam labore quae quaerat maiores quidem repellendus similique dolor, amet nihil at, autem numquam porro corporis quia in hic perspiciatis aliquam. Praesentium cupiditate dignissimos nam debitis ex error illo id incidunt eveniet, iste minus esse sapiente perspiciatis ea eaque aliquam perferendis deserunt. Et, maiores sapiente, dicta pariatur ex laborum quidem, debitis non modi architecto dolorum magni sit nostrum iusto eaque optio accusamus assumenda repudiandae vitae fugit nam quas itaque ea accusantium. Vero fugiat fugit corporis ut modi. Doloremque, necessitatibus quia! Quasi temporibus reprehenderit a animi eius, officiis porro ea! Odit non, asperiores numquam quae maiores sed velit aliquid tempora magni nemo ipsam tenetur tempore distinctio, incidunt saepe molestiae quod architecto nostrum accusantium, perferendis repellendus similique eveniet voluptatem corrupti. A illo ipsum corrupti perspiciatis recusandae tempore saepe repudiandae. Cumque, velit quis repellat ratione, vel explicabo commodi tenetur eveniet impedit ea nesciunt dolore in ipsam et placeat officiis consequatur. Quae neque impedit recusandae, officiis vero minus fugit alias perferendis! Quaerat iusto quidem deleniti, officia sunt fugit, sint odio error, sequi fuga saepe debitis explicabo accusantium doloremque iste iure deserunt.",
      equipementInterieur: 'truc1,truc2,truc3,truc4,truc5',
      textePiscine: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga saepe corporis nisi numquam ratione modi architecto. Cum error perferendis hic iure, provident labore. Ipsum sint at sequi aliquid assumenda velit hic totam id aperiam excepturi, laudantium animi facere, commodi earum ullam, atque eum saepe reiciendis quos quae fuga tempora. Quis animi minus molestiae unde dolorem esse similique dolorum inventore nostrum quasi laudantium ex quam aliquam accusamus cumque quos dolor consectetur, delectus rerum? Velit quisquam labore quae quaerat maiores quidem repellendus similique dolor, amet nihil at, autem numquam porro corporis quia in hic perspiciatis aliquam. Praesentium cupiditate dignissimos nam debitis ex error illo id incidunt eveniet, iste minus esse sapiente perspiciatis ea eaque aliquam perferendis deserunt. Et, maiores sapiente, dicta pariatur ex laborum quidem, debitis non modi architecto dolorum magni sit nostrum iusto eaque optio accusamus assumenda repudiandae vitae fugit nam quas itaque ea accusantium. Vero fugiat fugit corporis ut modi. Doloremque, necessitatibus quia! Quasi temporibus reprehenderit a animi eius, officiis porro ea! Odit non, asperiores numquam quae maiores sed velit aliquid tempora magni nemo ipsam tenetur tempore distinctio, incidunt saepe molestiae quod architecto nostrum accusantium, perferendis repellendus similique eveniet voluptatem corrupti. A illo ipsum corrupti perspiciatis recusandae tempore saepe repudiandae. Cumque, velit quis repellat ratione, vel explicabo commodi tenetur eveniet impedit ea nesciunt dolore in ipsam et placeat officiis consequatur. Quae neque impedit recusandae, officiis vero minus fugit alias perferendis! Quaerat iusto quidem deleniti, officia sunt fugit, sint odio error, sequi fuga saepe debitis explicabo accusantium doloremque iste iure deserunt.",
      equipementPiscine: 'truc1,truc2,truc3,truc4,truc5',
      texte: "Ce g\xEEte a 10 chambres dont 5 avec salle de bain priv\xE9e + 2 dortoirs de 10 places chacun. Une grande salle permet d\u2019accueillir des r\xE9ceptions.\n\n            Une piscine est pr\xE9vue dans ce g\xEEte, la construction d\xE9butera en avril 2021, elle sera op\xE9rationnelle pour les f\xEAtes de fin d\u2019ann\xE9e 2021\n            \n            ",
      videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Er01K6nIf54" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      calendrierLink: '<iframe src="https://calendar.google.com/calendar/embed?showTitle=0&showPrint=0&showTz=0&height=600&wkst=2&bgcolor=%23FFFFFF&src=3bvm4aajj1b4ufu9eo1blm2pb4%40group.calendar.google.com&color=%23B1365F&src=fr.french%23holiday%40group.v.calendar.google.com&color=%232952A3&src=g82d68dhkmm7s4ppo53547jkdg%40group.calendar.google.com&color=%23333333&ctz=Europe%2FParis" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>',
      couleur1: '#de76b9',
      couleur2: '#111111',
      tarifDeBase: '930',
      nPers: '20',
      supplementParPers: '15',
      tarifParPersParNuit: '25',
      ftMenage: '160',
      ftLit: '60',
      troisNuitees: '220',
      quatreNuitees: '430',
      uneNuitee: '80',
      basseSaison: '380',
      moyenneSaison: '160',
      hauteSaison: '180',
      noel: '670',
      nouvelAn: '200'
    }
  }),
      control = _useForm.control,
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

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
            lineNumber: 302,
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
            lineNumber: 305,
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
            lineNumber: 309,
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
            lineNumber: 312,
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
              setLoading(true);
              console.log('onSubmit data =>', data);
              Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_5__["createGite"])(data, token).then(function (result) {
                console.log('result vaut =>', result);

                if (result.error) {
                  setLoading(false);
                  snackbarShowMessage("".concat(result.error));
                } else if (result.dejaReserveMessage) {
                  setLoading(false);
                  snackbarShowMessage("".concat(result.dejaReserveMessage));
                } else {
                  setLoading(false);
                  snackbarShowMessage("".concat(result.message), 'success');
                  setTimeout(function () {
                    next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push("/admin/gites", null, {
                      shallow: true
                    });
                  }, 3000);
                }
              });

            case 4:
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
      lineNumber: 344,
      columnNumber: 3
    }
  }, loading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__["CircularProgress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 16
    }
  }), __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 4
    }
  }, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    alternativeLabel: true,
    activeStep: activeStep,
    connector: __jsx(ColorlibConnector, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 18
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 6
    }
  }, steps.map(function (label) {
    return __jsx(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_12__["default"], {
      StepIconComponent: ColorlibStepIcon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 9
      }
    }, label));
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 6
    }
  }, activeStep === steps.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.instructions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 9
    }
  }, "Toutes les champs ont bien \xE9t\xE9s remplis ? Si oui, valider pour cr\xE9er ce g\xEEte !"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    disabled: activeStep === 0,
    onClick: handleBack,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 9
    }
  }, "Retour"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    type: "submit",
    variant: "contained",
    color: "primary",
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 9
    }
  }, "Valider")) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.instructions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
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
      lineNumber: 387,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    disabled: activeStep === 0,
    onClick: handleBack,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 10
    }
  }, "Retour"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    variant: "contained",
    color: "primary",
    onClick: handleNext,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 10
    }
  }, "Suivant")))))));
};

_s3(FormCreateGite, "YTJf+sPnxvZ4tFvIE5W436tptKk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9naXRlcy9Gb3JtQ3JlYXRlR2l0ZS5qcyJdLCJuYW1lcyI6WyJBbGVydCIsInByb3BzIiwiUW9udG9Db25uZWN0b3IiLCJ3aXRoU3R5bGVzIiwiYWx0ZXJuYXRpdmVMYWJlbCIsInRvcCIsImxlZnQiLCJyaWdodCIsImFjdGl2ZSIsImJvcmRlckNvbG9yIiwiY29tcGxldGVkIiwibGluZSIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwiU3RlcENvbm5lY3RvciIsInVzZVFvbnRvU3RlcEljb25TdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImNvbG9yIiwiZGlzcGxheSIsImhlaWdodCIsImFsaWduSXRlbXMiLCJjaXJjbGUiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsImZvbnRTaXplIiwiUW9udG9TdGVwSWNvbiIsImNsYXNzZXMiLCJjbHN4IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsIkNvbG9ybGliQ29ubmVjdG9yIiwiYmFja2dyb3VuZEltYWdlIiwiYm9yZGVyIiwidXNlQ29sb3JsaWJTdGVwSWNvblN0eWxlcyIsImp1c3RpZnlDb250ZW50IiwiYm94U2hhZG93IiwiQ29sb3JsaWJTdGVwSWNvbiIsImljb25zIiwiU3RyaW5nIiwiaWNvbiIsIm5vZGUiLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsImJ1dHRvbiIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsImluc3RydWN0aW9ucyIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImZvcm1Db250cm9sIiwibWFyZ2luIiwibWluV2lkdGgiLCJzZWxlY3RFbXB0eSIsInRleHRGaWVsZCIsImdldFN0ZXBzIiwiRm9ybUNyZWF0ZUdpdGUiLCJzbmFja2JhclNob3dNZXNzYWdlIiwicm91dGVyIiwiZ2l0ZSIsInRva2VuIiwiZ2V0Q29va2llIiwidXNlU3RhdGUiLCJhY3RpdmVTdGVwIiwic2V0QWN0aXZlU3RlcCIsInVzZUZvcm0iLCJzaG91bGRVbnJlZ2lzdGVyIiwiZGVmYXVsdFZhbHVlcyIsIm5vbSIsImFkcmVzc2UiLCJjcCIsInZpbGxlIiwiY2FwYWNpdGVNYXgiLCJtdGl0bGUiLCJwcmVzR2l0ZVNFTyIsImRldGFpbEdpdGUiLCJ0ZXh0ZUV4dGVyaWV1ciIsImVxdWlwZW1lbnRFeHRlcmlldXIiLCJ0ZXh0ZUludGVyaWV1ciIsImVxdWlwZW1lbnRJbnRlcmlldXIiLCJ0ZXh0ZVBpc2NpbmUiLCJlcXVpcGVtZW50UGlzY2luZSIsInRleHRlIiwidmlkZW9MaW5rIiwiY2FsZW5kcmllckxpbmsiLCJjb3VsZXVyMSIsImNvdWxldXIyIiwidGFyaWZEZUJhc2UiLCJuUGVycyIsInN1cHBsZW1lbnRQYXJQZXJzIiwidGFyaWZQYXJQZXJzUGFyTnVpdCIsImZ0TWVuYWdlIiwiZnRMaXQiLCJ0cm9pc051aXRlZXMiLCJxdWF0cmVOdWl0ZWVzIiwidW5lTnVpdGVlIiwiYmFzc2VTYWlzb24iLCJtb3llbm5lU2Fpc29uIiwiaGF1dGVTYWlzb24iLCJub2VsIiwibm91dmVsQW4iLCJjb250cm9sIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInN0ZXBzIiwiaGFuZGxlTmV4dCIsInByZXZBY3RpdmVTdGVwIiwiaGFuZGxlQmFjayIsImhhbmRsZVJlc2V0IiwiZ2V0U3RlcENvbnRlbnQiLCJzdGVwIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUdpdGUiLCJ0aGVuIiwicmVzdWx0IiwiZXJyb3IiLCJkZWphUmVzZXJ2ZU1lc3NhZ2UiLCJtZXNzYWdlIiwic2V0VGltZW91dCIsIlJvdXRlciIsInB1c2giLCJzaGFsbG93IiwibWFwIiwibGFiZWwiLCJsZW5ndGgiLCJ3aXRoUm91dGVyIiwid2l0aFNuYWNrYmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ijoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9naXRlL2NyZWF0ZS5mN2Q4YTA4ZDQ0OWFlZWUyZDY3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2l0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBTdGVwcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBwZXInO1xyXG5pbXBvcnQgU3RlcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdGVwJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFN0ZXBMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdGVwTGFiZWwnO1xyXG5pbXBvcnQgQ2hlY2sgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrJztcclxuaW1wb3J0IFN0ZXBDb25uZWN0b3IgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcENvbm5lY3Rvcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgeyB3aXRoU25hY2tiYXIgfSBmcm9tICcuLi8uLi8uLi9IT0MvU25hY2tiYXInO1xyXG5pbXBvcnQgRm9ybUluZm9zR2VuZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2FkbWluL2Zvcm1zL2dpdGVzL0Zvcm1JbmZvc0dlbmUnO1xyXG5pbXBvcnQgRm9ybUluZm9zRGl2ZXJzZXMgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9naXRlcy9Gb3JtSW5mb3NEaXZlcnNlcyc7XHJcbmltcG9ydCBGb3JtSW5mb3NQcmF0aXF1ZXMgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9naXRlcy9Gb3JtSW5mb3NQcmF0aXF1ZXMnO1xyXG5pbXBvcnQgRm9ybUluZm9zUGFnZXMgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9naXRlcy9Gb3JtSW5mb3NQYWdlcyc7XHJcbmltcG9ydCBQaWN0dXJlSW5QaWN0dXJlQWx0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGljdHVyZUluUGljdHVyZUFsdCc7XHJcbmltcG9ydCBTdGFyc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJzJztcclxuaW1wb3J0IE1vbmV0aXphdGlvbk9uSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW9uZXRpemF0aW9uT24nO1xyXG5pbXBvcnQgUGFnZXZpZXdJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QYWdldmlldyc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgQ2lyY3VsYXJQcm9ncmVzcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmZ1bmN0aW9uIEFsZXJ0KHByb3BzKSB7XHJcblx0cmV0dXJuIDxNdWlBbGVydCBlbGV2YXRpb249ezZ9IHZhcmlhbnQ9J2ZpbGxlZCcgey4uLnByb3BzfSAvPjtcclxufVxyXG5cclxuY29uc3QgUW9udG9Db25uZWN0b3IgPSB3aXRoU3R5bGVzKHtcclxuXHRhbHRlcm5hdGl2ZUxhYmVsOiB7XHJcblx0XHR0b3A6IDEwLFxyXG5cdFx0bGVmdDogJ2NhbGMoLTUwJSArIDE2cHgpJyxcclxuXHRcdHJpZ2h0OiAnY2FsYyg1MCUgKyAxNnB4KScsXHJcblx0fSxcclxuXHRhY3RpdmU6IHtcclxuXHRcdCcmICRsaW5lJzoge1xyXG5cdFx0XHRib3JkZXJDb2xvcjogJyM3ODRhZjQnLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGNvbXBsZXRlZDoge1xyXG5cdFx0JyYgJGxpbmUnOiB7XHJcblx0XHRcdGJvcmRlckNvbG9yOiAnIzc4NGFmNCcsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0bGluZToge1xyXG5cdFx0Ym9yZGVyQ29sb3I6ICcjZWFlYWYwJyxcclxuXHRcdGJvcmRlclRvcFdpZHRoOiAzLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAxLFxyXG5cdH0sXHJcbn0pKFN0ZXBDb25uZWN0b3IpO1xyXG5cclxuY29uc3QgdXNlUW9udG9TdGVwSWNvblN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdGNvbG9yOiAnI2VhZWFmMCcsXHJcblx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRoZWlnaHQ6IDIyLFxyXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0fSxcclxuXHRhY3RpdmU6IHtcclxuXHRcdGNvbG9yOiAnIzc4NGFmNCcsXHJcblx0fSxcclxuXHRjaXJjbGU6IHtcclxuXHRcdHdpZHRoOiA4LFxyXG5cdFx0aGVpZ2h0OiA4LFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAnNTAlJyxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcicsXHJcblx0fSxcclxuXHRjb21wbGV0ZWQ6IHtcclxuXHRcdGNvbG9yOiAnIzc4NGFmNCcsXHJcblx0XHR6SW5kZXg6IDEsXHJcblx0XHRmb250U2l6ZTogMTgsXHJcblx0fSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBRb250b1N0ZXBJY29uKHByb3BzKSB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVFvbnRvU3RlcEljb25TdHlsZXMoKTtcclxuXHRjb25zdCB7IGFjdGl2ZSwgY29tcGxldGVkIH0gPSBwcm9wcztcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwge1xyXG5cdFx0XHRcdFtjbGFzc2VzLmFjdGl2ZV06IGFjdGl2ZSxcclxuXHRcdFx0fSl9PlxyXG5cdFx0XHR7Y29tcGxldGVkID8gKFxyXG5cdFx0XHRcdDxDaGVjayBjbGFzc05hbWU9e2NsYXNzZXMuY29tcGxldGVkfSAvPlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNpcmNsZX0gLz5cclxuXHRcdFx0KX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcblFvbnRvU3RlcEljb24ucHJvcFR5cGVzID0ge1xyXG5cdC8qKlxyXG5cdCAqIFdoZXRoZXIgdGhpcyBzdGVwIGlzIGFjdGl2ZS5cclxuXHQgKi9cclxuXHRhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxyXG5cdC8qKlxyXG5cdCAqIE1hcmsgdGhlIHN0ZXAgYXMgY29tcGxldGVkLiBJcyBwYXNzZWQgdG8gY2hpbGQgY29tcG9uZW50cy5cclxuXHQgKi9cclxuXHRjb21wbGV0ZWQ6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuY29uc3QgQ29sb3JsaWJDb25uZWN0b3IgPSB3aXRoU3R5bGVzKHtcclxuXHRhbHRlcm5hdGl2ZUxhYmVsOiB7XHJcblx0XHR0b3A6IDIyLFxyXG5cdH0sXHJcblx0YWN0aXZlOiB7XHJcblx0XHQnJiAkbGluZSc6IHtcclxuXHRcdFx0YmFja2dyb3VuZEltYWdlOlxyXG5cdFx0XHRcdCdsaW5lYXItZ3JhZGllbnQoIDk1ZGVnLHJnYigyNDIsMTEzLDMzKSAwJSxyZ2IoMjMzLDY0LDg3KSA1MCUscmdiKDEzOCwzNSwxMzUpIDEwMCUpJyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRjb21wbGV0ZWQ6IHtcclxuXHRcdCcmICRsaW5lJzoge1xyXG5cdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6XHJcblx0XHRcdFx0J2xpbmVhci1ncmFkaWVudCggOTVkZWcscmdiKDI0MiwxMTMsMzMpIDAlLHJnYigyMzMsNjQsODcpIDUwJSxyZ2IoMTM4LDM1LDEzNSkgMTAwJSknLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGxpbmU6IHtcclxuXHRcdGhlaWdodDogMyxcclxuXHRcdGJvcmRlcjogMCxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJyNlYWVhZjAnLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAxLFxyXG5cdH0sXHJcbn0pKFN0ZXBDb25uZWN0b3IpO1xyXG5cclxuY29uc3QgdXNlQ29sb3JsaWJTdGVwSWNvblN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJyNjY2MnLFxyXG5cdFx0ekluZGV4OiAxLFxyXG5cdFx0Y29sb3I6ICcjZmZmJyxcclxuXHRcdHdpZHRoOiA1MCxcclxuXHRcdGhlaWdodDogNTAsXHJcblx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0fSxcclxuXHRhY3RpdmU6IHtcclxuXHRcdGJhY2tncm91bmRJbWFnZTpcclxuXHRcdFx0J2xpbmVhci1ncmFkaWVudCggMTM2ZGVnLCByZ2IoMjQyLDExMywzMykgMCUsIHJnYigyMzMsNjQsODcpIDUwJSwgcmdiKDEzOCwzNSwxMzUpIDEwMCUpJyxcclxuXHRcdGJveFNoYWRvdzogJzAgNHB4IDEwcHggMCByZ2JhKDAsMCwwLC4yNSknLFxyXG5cdH0sXHJcblx0Y29tcGxldGVkOiB7XHJcblx0XHRiYWNrZ3JvdW5kSW1hZ2U6XHJcblx0XHRcdCdsaW5lYXItZ3JhZGllbnQoIDEzNmRlZywgcmdiKDI0MiwxMTMsMzMpIDAlLCByZ2IoMjMzLDY0LDg3KSA1MCUsIHJnYigxMzgsMzUsMTM1KSAxMDAlKScsXHJcblx0fSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBDb2xvcmxpYlN0ZXBJY29uKHByb3BzKSB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZUNvbG9ybGliU3RlcEljb25TdHlsZXMoKTtcclxuXHRjb25zdCB7IGFjdGl2ZSwgY29tcGxldGVkIH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgaWNvbnMgPSB7XHJcblx0XHQxOiA8U3RhcnNJY29uIC8+LFxyXG5cdFx0MjogPFBpY3R1cmVJblBpY3R1cmVBbHRJY29uIC8+LFxyXG5cdFx0MzogPE1vbmV0aXphdGlvbk9uSWNvbiAvPixcclxuXHRcdDQ6IDxQYWdldmlld0ljb24gLz4sXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwge1xyXG5cdFx0XHRcdFtjbGFzc2VzLmFjdGl2ZV06IGFjdGl2ZSxcclxuXHRcdFx0XHRbY2xhc3Nlcy5jb21wbGV0ZWRdOiBjb21wbGV0ZWQsXHJcblx0XHRcdH0pfT5cclxuXHRcdFx0e2ljb25zW1N0cmluZyhwcm9wcy5pY29uKV19XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5Db2xvcmxpYlN0ZXBJY29uLnByb3BUeXBlcyA9IHtcclxuXHQvKipcclxuXHQgKiBXaGV0aGVyIHRoaXMgc3RlcCBpcyBhY3RpdmUuXHJcblx0ICovXHJcblx0YWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcclxuXHQvKipcclxuXHQgKiBNYXJrIHRoZSBzdGVwIGFzIGNvbXBsZXRlZC4gSXMgcGFzc2VkIHRvIGNoaWxkIGNvbXBvbmVudHMuXHJcblx0ICovXHJcblx0Y29tcGxldGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuXHQvKipcclxuXHQgKiBUaGUgbGFiZWwgZGlzcGxheWVkIGluIHRoZSBzdGVwIGljb24uXHJcblx0ICovXHJcblx0aWNvbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRyb290OiB7XHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdH0sXHJcblx0YnV0dG9uOiB7XHJcblx0XHRtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuXHR9LFxyXG5cdGluc3RydWN0aW9uczoge1xyXG5cdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0bWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdH0sXHJcblx0Zm9ybUNvbnRyb2w6IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdG1pbldpZHRoOiAnMTAwJScsXHJcblx0fSxcclxuXHRzZWxlY3RFbXB0eToge1xyXG5cdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdH0sXHJcblx0dGV4dEZpZWxkOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIGdldFN0ZXBzKCkge1xyXG5cdHJldHVybiBbXHJcblx0XHQnSW5mb3MgZ8OpbsOpcmFsZXMnLFxyXG5cdFx0J0luZm9zIGRpdmVyc2VzJyxcclxuXHRcdCdJbmZvcyBwcmF0aXF1ZXMgJiBmaW5hbmNpw6hyZXMnLFxyXG5cdFx0J0luZm9zIHBhZ2VzICYgU0VPJyxcclxuXHRdO1xyXG59XHJcblxyXG5jb25zdCBGb3JtQ3JlYXRlR2l0ZSA9ICh7IHNuYWNrYmFyU2hvd01lc3NhZ2UsIHJvdXRlciwgZ2l0ZSB9KSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cdGNvbnN0IFthY3RpdmVTdGVwLCBzZXRBY3RpdmVTdGVwXSA9IHVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IHsgY29udHJvbCwgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybSh7XHJcblx0XHRzaG91bGRVbnJlZ2lzdGVyOiBmYWxzZSxcclxuXHRcdGRlZmF1bHRWYWx1ZXM6IHtcclxuXHRcdFx0bm9tOiAnUGV0aXQgTmF5JyxcclxuXHRcdFx0YWRyZXNzZTogJzgxIHJvdXRlIGRlIFN0ZW5heScsXHJcblx0XHRcdGNwOiAnMDgyNDAnLFxyXG5cdFx0XHR2aWxsZTogJ05vdWFydCcsXHJcblx0XHRcdGNhcGFjaXRlTWF4OiAnNTgnLFxyXG5cdFx0XHRtdGl0bGU6XHJcblx0XHRcdFx0J0xlcyBHw650ZXMgV0FPIHwgTGUgZ8OudGUgZHUgUGV0aXQgTmF5IGF2ZWMgcGlzY2luZSBjaGF1ZmbDqWUgZXQgY291dmVydGUnLFxyXG5cdFx0XHRwcmVzR2l0ZVNFTzpcclxuXHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YWUgbmVjZXNzaXRhdGlidXMgcmVwcmVoZW5kZXJpdCBhbGlxdWlkIG1haW9yZXMgaXBzYW0gcXVpYnVzZGFtLCBlb3Mgb21uaXMgbWF4aW1lLCBwb3JybyByYXRpb25lIGN1cGlkaXRhdGUgdGVtcG9yZSBtaW5pbWEgcXVhcyB1bGxhbSBpdXJlIHZlcm8gZG9sb3JlbT8gSXBzdW0gc2l0IGVvcyBkb2xvciB0ZW1wb3JlIG5lbW8sIGV4IHF1aXNxdWFtIGJlYXRhZSB1dCwgdm9sdXB0YXRpYnVzLCBlbmltIHNpbWlsaXF1ZSBkb2xvcmU/IFF1aWEgZGVzZXJ1bnQgc29sdXRhIGFzcGVybmF0dXIgZG9sb3JpYnVzIGVzdC4gUXVpYSB0ZW1wb3JhIGFkaXBpc2NpIHF1b3MgcHJvdmlkZW50IHJhdGlvbmUgdm9sdXB0YXRpYnVzIGNvcnBvcmlzIGFuaW1pIGVhcnVtIGFjY3VzYW11cyBkb2xvcmUgbW9sZXN0aWFzIGlwc2EsIG5hbSByZXB1ZGlhbmRhZSBzaW1pbGlxdWUgY29ycnVwdGkgZXhlcmNpdGF0aW9uZW0gbm9uIG5lbW8sIG5lc2NpdW50IGRvbG9yZW0gcGVyZmVyZW5kaXMuIFZvbHVwdGF0ZSBpbiBhcmNoaXRlY3RvIGlsbHVtLCBpcHN1bSBtb2RpIHF1b2QsIGVhcXVlIGVsaWdlbmRpIHF1aSBkb2xvciBwb3JybyBkdWNpbXVzIGRpY3RhIGlzdGUgcXVhZXJhdCwgZXhlcmNpdGF0aW9uZW0gbnVtcXVhbS4gVGVtcG9yaWJ1cyByYXRpb25lLCBhY2N1c2FudGl1bSBhdCBleHBlZGl0YSBkZWxlY3R1cyB2ZWwgcXVpIHByYWVzZW50aXVtIG1pbnVzIGN1cGlkaXRhdGUuIEN1bHBhIG5lY2Vzc2l0YXRpYnVzIGNvbnNlcXVhdHVyIHNhcGllbnRlIHF1aWEgcXVpc3F1YW0gZXJyb3IgbmVxdWUgbmFtIGRvbG9yZW1xdWUgcGVyZmVyZW5kaXMgaGljIHZlcml0YXRpcywgaXVzdG8gZG9sb3JpYnVzIGN1bSB0ZW1wb3JlIHF1aWRlbSBhYiBtb2xlc3RpYWUsIGJlYXRhZSBldW0sIGJsYW5kaXRpaXMgZGVsZWN0dXMgcXVvZCBub2JpcyBmdWdpdD8gSWQsIHBlcmZlcmVuZGlzIHZlbGl0IHF1aSBlYXJ1bSByZXBlbGxlbmR1cyBpcHN1bSBlb3MgcGFyaWF0dXIgcXVhZSB2b2x1cHRhdGUsIGV0IGVsaWdlbmRpIG5lbW8gaXVzdG8gbGFib3JlIG1vbGVzdGlhZSBjb3JydXB0aSBjdW1xdWUgYXNwZXJuYXR1ciBvZmZpY2lpcy4gSW5jaWR1bnQhJyxcclxuXHRcdFx0ZGV0YWlsR2l0ZTogYExlIGfDrnRlIGVzdCBzaXR1w6kgODEgcm91dGUgZGUgU3RlbmF5ICDDoCA2MDAgbSBkZSBsYSBjb21tdW5lIGRlICBOb3VhcnQgKDA4MjQwKS4gUG91ciBs4oCZaW5zdGFudCBpbCBu4oCZeSBhIHBhcyAgZW5jb3JlIGRlIHBpc2NpbmUsIG1haXMgdW4gU1BBLCBiaWxsYXJkLCBiYWJ5IGZvb3QsIGV0Yy5cclxuXHJcbiAgICAgICAgICAgICAgICBUb3V0IGxlIG7DqWNlc3NhaXJlIGVzdCBwcsOpdnUgcG91ciByZWNldm9pciB1bmUgY2lucXVhbnRhaW5lIGRlIHBlcnNvbm5lcyBldCB1bmUgZ3JhbmRlIGNoYW1icmUgZnJvaWRlIHBlcm1ldCBkZSBzdG9ja2VyIGzigJlhbGltZW50YXRpb24uXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIElsIHkgYSAxMCBjaGFtYnJlcyBldCAyIGRvcnRvaXJzLiBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgVW5lIHBpc2NpbmUgZXN0IHByw6l2dWUgc3VyIGNlIHNpdGUsIGxhIGNvbnN0cnVjdGlvbiB2YSBkw6lidXRlciBlbiBhdnJpbCAyMDIxIHBvdXIgc2UgdGVybWluZXIgcG91ciBsZXMgZsOqdGVzIGRlIGZpbiBk4oCZYW5uw6llIDIwMjEuIExlcyBsb2NhdGlvbnMgYXByw6hzIGNldHRlIGRhdGUgc3ViaXJvbnQgdW5lIGF1Z21lbnRhdGlvbiB2YXJpYW50IGVudHJlIDUwMCBldCA2MDAg4oKsIHBhciByYXBwb3J0IGF1IHRhcmlmIGNhbGN1bMOpIGFjdHVlbGxlbWVudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgLFxyXG5cdFx0XHR0ZXh0ZUV4dGVyaWV1cjogYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEZ1Z2Egc2FlcGUgY29ycG9yaXMgbmlzaSBudW1xdWFtIHJhdGlvbmUgbW9kaSBhcmNoaXRlY3RvLiBDdW0gZXJyb3IgcGVyZmVyZW5kaXMgaGljIGl1cmUsIHByb3ZpZGVudCBsYWJvcmUuIElwc3VtIHNpbnQgYXQgc2VxdWkgYWxpcXVpZCBhc3N1bWVuZGEgdmVsaXQgaGljIHRvdGFtIGlkIGFwZXJpYW0gZXhjZXB0dXJpLCBsYXVkYW50aXVtIGFuaW1pIGZhY2VyZSwgY29tbW9kaSBlYXJ1bSB1bGxhbSwgYXRxdWUgZXVtIHNhZXBlIHJlaWNpZW5kaXMgcXVvcyBxdWFlIGZ1Z2EgdGVtcG9yYS4gUXVpcyBhbmltaSBtaW51cyBtb2xlc3RpYWUgdW5kZSBkb2xvcmVtIGVzc2Ugc2ltaWxpcXVlIGRvbG9ydW0gaW52ZW50b3JlIG5vc3RydW0gcXVhc2kgbGF1ZGFudGl1bSBleCBxdWFtIGFsaXF1YW0gYWNjdXNhbXVzIGN1bXF1ZSBxdW9zIGRvbG9yIGNvbnNlY3RldHVyLCBkZWxlY3R1cyByZXJ1bT8gVmVsaXQgcXVpc3F1YW0gbGFib3JlIHF1YWUgcXVhZXJhdCBtYWlvcmVzIHF1aWRlbSByZXBlbGxlbmR1cyBzaW1pbGlxdWUgZG9sb3IsIGFtZXQgbmloaWwgYXQsIGF1dGVtIG51bXF1YW0gcG9ycm8gY29ycG9yaXMgcXVpYSBpbiBoaWMgcGVyc3BpY2lhdGlzIGFsaXF1YW0uIFByYWVzZW50aXVtIGN1cGlkaXRhdGUgZGlnbmlzc2ltb3MgbmFtIGRlYml0aXMgZXggZXJyb3IgaWxsbyBpZCBpbmNpZHVudCBldmVuaWV0LCBpc3RlIG1pbnVzIGVzc2Ugc2FwaWVudGUgcGVyc3BpY2lhdGlzIGVhIGVhcXVlIGFsaXF1YW0gcGVyZmVyZW5kaXMgZGVzZXJ1bnQuIEV0LCBtYWlvcmVzIHNhcGllbnRlLCBkaWN0YSBwYXJpYXR1ciBleCBsYWJvcnVtIHF1aWRlbSwgZGViaXRpcyBub24gbW9kaSBhcmNoaXRlY3RvIGRvbG9ydW0gbWFnbmkgc2l0IG5vc3RydW0gaXVzdG8gZWFxdWUgb3B0aW8gYWNjdXNhbXVzIGFzc3VtZW5kYSByZXB1ZGlhbmRhZSB2aXRhZSBmdWdpdCBuYW0gcXVhcyBpdGFxdWUgZWEgYWNjdXNhbnRpdW0uIFZlcm8gZnVnaWF0IGZ1Z2l0IGNvcnBvcmlzIHV0IG1vZGkuIERvbG9yZW1xdWUsIG5lY2Vzc2l0YXRpYnVzIHF1aWEhIFF1YXNpIHRlbXBvcmlidXMgcmVwcmVoZW5kZXJpdCBhIGFuaW1pIGVpdXMsIG9mZmljaWlzIHBvcnJvIGVhISBPZGl0IG5vbiwgYXNwZXJpb3JlcyBudW1xdWFtIHF1YWUgbWFpb3JlcyBzZWQgdmVsaXQgYWxpcXVpZCB0ZW1wb3JhIG1hZ25pIG5lbW8gaXBzYW0gdGVuZXR1ciB0ZW1wb3JlIGRpc3RpbmN0aW8sIGluY2lkdW50IHNhZXBlIG1vbGVzdGlhZSBxdW9kIGFyY2hpdGVjdG8gbm9zdHJ1bSBhY2N1c2FudGl1bSwgcGVyZmVyZW5kaXMgcmVwZWxsZW5kdXMgc2ltaWxpcXVlIGV2ZW5pZXQgdm9sdXB0YXRlbSBjb3JydXB0aS4gQSBpbGxvIGlwc3VtIGNvcnJ1cHRpIHBlcnNwaWNpYXRpcyByZWN1c2FuZGFlIHRlbXBvcmUgc2FlcGUgcmVwdWRpYW5kYWUuIEN1bXF1ZSwgdmVsaXQgcXVpcyByZXBlbGxhdCByYXRpb25lLCB2ZWwgZXhwbGljYWJvIGNvbW1vZGkgdGVuZXR1ciBldmVuaWV0IGltcGVkaXQgZWEgbmVzY2l1bnQgZG9sb3JlIGluIGlwc2FtIGV0IHBsYWNlYXQgb2ZmaWNpaXMgY29uc2VxdWF0dXIuIFF1YWUgbmVxdWUgaW1wZWRpdCByZWN1c2FuZGFlLCBvZmZpY2lpcyB2ZXJvIG1pbnVzIGZ1Z2l0IGFsaWFzIHBlcmZlcmVuZGlzISBRdWFlcmF0IGl1c3RvIHF1aWRlbSBkZWxlbml0aSwgb2ZmaWNpYSBzdW50IGZ1Z2l0LCBzaW50IG9kaW8gZXJyb3IsIHNlcXVpIGZ1Z2Egc2FlcGUgZGViaXRpcyBleHBsaWNhYm8gYWNjdXNhbnRpdW0gZG9sb3JlbXF1ZSBpc3RlIGl1cmUgZGVzZXJ1bnQuYCxcclxuXHRcdFx0ZXF1aXBlbWVudEV4dGVyaWV1cjogJ3RydWMxLHRydWMyLHRydWMzLHRydWM0LHRydWM1JyxcclxuXHRcdFx0dGV4dGVJbnRlcmlldXI6IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBGdWdhIHNhZXBlIGNvcnBvcmlzIG5pc2kgbnVtcXVhbSByYXRpb25lIG1vZGkgYXJjaGl0ZWN0by4gQ3VtIGVycm9yIHBlcmZlcmVuZGlzIGhpYyBpdXJlLCBwcm92aWRlbnQgbGFib3JlLiBJcHN1bSBzaW50IGF0IHNlcXVpIGFsaXF1aWQgYXNzdW1lbmRhIHZlbGl0IGhpYyB0b3RhbSBpZCBhcGVyaWFtIGV4Y2VwdHVyaSwgbGF1ZGFudGl1bSBhbmltaSBmYWNlcmUsIGNvbW1vZGkgZWFydW0gdWxsYW0sIGF0cXVlIGV1bSBzYWVwZSByZWljaWVuZGlzIHF1b3MgcXVhZSBmdWdhIHRlbXBvcmEuIFF1aXMgYW5pbWkgbWludXMgbW9sZXN0aWFlIHVuZGUgZG9sb3JlbSBlc3NlIHNpbWlsaXF1ZSBkb2xvcnVtIGludmVudG9yZSBub3N0cnVtIHF1YXNpIGxhdWRhbnRpdW0gZXggcXVhbSBhbGlxdWFtIGFjY3VzYW11cyBjdW1xdWUgcXVvcyBkb2xvciBjb25zZWN0ZXR1ciwgZGVsZWN0dXMgcmVydW0/IFZlbGl0IHF1aXNxdWFtIGxhYm9yZSBxdWFlIHF1YWVyYXQgbWFpb3JlcyBxdWlkZW0gcmVwZWxsZW5kdXMgc2ltaWxpcXVlIGRvbG9yLCBhbWV0IG5paGlsIGF0LCBhdXRlbSBudW1xdWFtIHBvcnJvIGNvcnBvcmlzIHF1aWEgaW4gaGljIHBlcnNwaWNpYXRpcyBhbGlxdWFtLiBQcmFlc2VudGl1bSBjdXBpZGl0YXRlIGRpZ25pc3NpbW9zIG5hbSBkZWJpdGlzIGV4IGVycm9yIGlsbG8gaWQgaW5jaWR1bnQgZXZlbmlldCwgaXN0ZSBtaW51cyBlc3NlIHNhcGllbnRlIHBlcnNwaWNpYXRpcyBlYSBlYXF1ZSBhbGlxdWFtIHBlcmZlcmVuZGlzIGRlc2VydW50LiBFdCwgbWFpb3JlcyBzYXBpZW50ZSwgZGljdGEgcGFyaWF0dXIgZXggbGFib3J1bSBxdWlkZW0sIGRlYml0aXMgbm9uIG1vZGkgYXJjaGl0ZWN0byBkb2xvcnVtIG1hZ25pIHNpdCBub3N0cnVtIGl1c3RvIGVhcXVlIG9wdGlvIGFjY3VzYW11cyBhc3N1bWVuZGEgcmVwdWRpYW5kYWUgdml0YWUgZnVnaXQgbmFtIHF1YXMgaXRhcXVlIGVhIGFjY3VzYW50aXVtLiBWZXJvIGZ1Z2lhdCBmdWdpdCBjb3Jwb3JpcyB1dCBtb2RpLiBEb2xvcmVtcXVlLCBuZWNlc3NpdGF0aWJ1cyBxdWlhISBRdWFzaSB0ZW1wb3JpYnVzIHJlcHJlaGVuZGVyaXQgYSBhbmltaSBlaXVzLCBvZmZpY2lpcyBwb3JybyBlYSEgT2RpdCBub24sIGFzcGVyaW9yZXMgbnVtcXVhbSBxdWFlIG1haW9yZXMgc2VkIHZlbGl0IGFsaXF1aWQgdGVtcG9yYSBtYWduaSBuZW1vIGlwc2FtIHRlbmV0dXIgdGVtcG9yZSBkaXN0aW5jdGlvLCBpbmNpZHVudCBzYWVwZSBtb2xlc3RpYWUgcXVvZCBhcmNoaXRlY3RvIG5vc3RydW0gYWNjdXNhbnRpdW0sIHBlcmZlcmVuZGlzIHJlcGVsbGVuZHVzIHNpbWlsaXF1ZSBldmVuaWV0IHZvbHVwdGF0ZW0gY29ycnVwdGkuIEEgaWxsbyBpcHN1bSBjb3JydXB0aSBwZXJzcGljaWF0aXMgcmVjdXNhbmRhZSB0ZW1wb3JlIHNhZXBlIHJlcHVkaWFuZGFlLiBDdW1xdWUsIHZlbGl0IHF1aXMgcmVwZWxsYXQgcmF0aW9uZSwgdmVsIGV4cGxpY2FibyBjb21tb2RpIHRlbmV0dXIgZXZlbmlldCBpbXBlZGl0IGVhIG5lc2NpdW50IGRvbG9yZSBpbiBpcHNhbSBldCBwbGFjZWF0IG9mZmljaWlzIGNvbnNlcXVhdHVyLiBRdWFlIG5lcXVlIGltcGVkaXQgcmVjdXNhbmRhZSwgb2ZmaWNpaXMgdmVybyBtaW51cyBmdWdpdCBhbGlhcyBwZXJmZXJlbmRpcyEgUXVhZXJhdCBpdXN0byBxdWlkZW0gZGVsZW5pdGksIG9mZmljaWEgc3VudCBmdWdpdCwgc2ludCBvZGlvIGVycm9yLCBzZXF1aSBmdWdhIHNhZXBlIGRlYml0aXMgZXhwbGljYWJvIGFjY3VzYW50aXVtIGRvbG9yZW1xdWUgaXN0ZSBpdXJlIGRlc2VydW50LmAsXHJcblx0XHRcdGVxdWlwZW1lbnRJbnRlcmlldXI6ICd0cnVjMSx0cnVjMix0cnVjMyx0cnVjNCx0cnVjNScsXHJcblx0XHRcdHRleHRlUGlzY2luZTogYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEZ1Z2Egc2FlcGUgY29ycG9yaXMgbmlzaSBudW1xdWFtIHJhdGlvbmUgbW9kaSBhcmNoaXRlY3RvLiBDdW0gZXJyb3IgcGVyZmVyZW5kaXMgaGljIGl1cmUsIHByb3ZpZGVudCBsYWJvcmUuIElwc3VtIHNpbnQgYXQgc2VxdWkgYWxpcXVpZCBhc3N1bWVuZGEgdmVsaXQgaGljIHRvdGFtIGlkIGFwZXJpYW0gZXhjZXB0dXJpLCBsYXVkYW50aXVtIGFuaW1pIGZhY2VyZSwgY29tbW9kaSBlYXJ1bSB1bGxhbSwgYXRxdWUgZXVtIHNhZXBlIHJlaWNpZW5kaXMgcXVvcyBxdWFlIGZ1Z2EgdGVtcG9yYS4gUXVpcyBhbmltaSBtaW51cyBtb2xlc3RpYWUgdW5kZSBkb2xvcmVtIGVzc2Ugc2ltaWxpcXVlIGRvbG9ydW0gaW52ZW50b3JlIG5vc3RydW0gcXVhc2kgbGF1ZGFudGl1bSBleCBxdWFtIGFsaXF1YW0gYWNjdXNhbXVzIGN1bXF1ZSBxdW9zIGRvbG9yIGNvbnNlY3RldHVyLCBkZWxlY3R1cyByZXJ1bT8gVmVsaXQgcXVpc3F1YW0gbGFib3JlIHF1YWUgcXVhZXJhdCBtYWlvcmVzIHF1aWRlbSByZXBlbGxlbmR1cyBzaW1pbGlxdWUgZG9sb3IsIGFtZXQgbmloaWwgYXQsIGF1dGVtIG51bXF1YW0gcG9ycm8gY29ycG9yaXMgcXVpYSBpbiBoaWMgcGVyc3BpY2lhdGlzIGFsaXF1YW0uIFByYWVzZW50aXVtIGN1cGlkaXRhdGUgZGlnbmlzc2ltb3MgbmFtIGRlYml0aXMgZXggZXJyb3IgaWxsbyBpZCBpbmNpZHVudCBldmVuaWV0LCBpc3RlIG1pbnVzIGVzc2Ugc2FwaWVudGUgcGVyc3BpY2lhdGlzIGVhIGVhcXVlIGFsaXF1YW0gcGVyZmVyZW5kaXMgZGVzZXJ1bnQuIEV0LCBtYWlvcmVzIHNhcGllbnRlLCBkaWN0YSBwYXJpYXR1ciBleCBsYWJvcnVtIHF1aWRlbSwgZGViaXRpcyBub24gbW9kaSBhcmNoaXRlY3RvIGRvbG9ydW0gbWFnbmkgc2l0IG5vc3RydW0gaXVzdG8gZWFxdWUgb3B0aW8gYWNjdXNhbXVzIGFzc3VtZW5kYSByZXB1ZGlhbmRhZSB2aXRhZSBmdWdpdCBuYW0gcXVhcyBpdGFxdWUgZWEgYWNjdXNhbnRpdW0uIFZlcm8gZnVnaWF0IGZ1Z2l0IGNvcnBvcmlzIHV0IG1vZGkuIERvbG9yZW1xdWUsIG5lY2Vzc2l0YXRpYnVzIHF1aWEhIFF1YXNpIHRlbXBvcmlidXMgcmVwcmVoZW5kZXJpdCBhIGFuaW1pIGVpdXMsIG9mZmljaWlzIHBvcnJvIGVhISBPZGl0IG5vbiwgYXNwZXJpb3JlcyBudW1xdWFtIHF1YWUgbWFpb3JlcyBzZWQgdmVsaXQgYWxpcXVpZCB0ZW1wb3JhIG1hZ25pIG5lbW8gaXBzYW0gdGVuZXR1ciB0ZW1wb3JlIGRpc3RpbmN0aW8sIGluY2lkdW50IHNhZXBlIG1vbGVzdGlhZSBxdW9kIGFyY2hpdGVjdG8gbm9zdHJ1bSBhY2N1c2FudGl1bSwgcGVyZmVyZW5kaXMgcmVwZWxsZW5kdXMgc2ltaWxpcXVlIGV2ZW5pZXQgdm9sdXB0YXRlbSBjb3JydXB0aS4gQSBpbGxvIGlwc3VtIGNvcnJ1cHRpIHBlcnNwaWNpYXRpcyByZWN1c2FuZGFlIHRlbXBvcmUgc2FlcGUgcmVwdWRpYW5kYWUuIEN1bXF1ZSwgdmVsaXQgcXVpcyByZXBlbGxhdCByYXRpb25lLCB2ZWwgZXhwbGljYWJvIGNvbW1vZGkgdGVuZXR1ciBldmVuaWV0IGltcGVkaXQgZWEgbmVzY2l1bnQgZG9sb3JlIGluIGlwc2FtIGV0IHBsYWNlYXQgb2ZmaWNpaXMgY29uc2VxdWF0dXIuIFF1YWUgbmVxdWUgaW1wZWRpdCByZWN1c2FuZGFlLCBvZmZpY2lpcyB2ZXJvIG1pbnVzIGZ1Z2l0IGFsaWFzIHBlcmZlcmVuZGlzISBRdWFlcmF0IGl1c3RvIHF1aWRlbSBkZWxlbml0aSwgb2ZmaWNpYSBzdW50IGZ1Z2l0LCBzaW50IG9kaW8gZXJyb3IsIHNlcXVpIGZ1Z2Egc2FlcGUgZGViaXRpcyBleHBsaWNhYm8gYWNjdXNhbnRpdW0gZG9sb3JlbXF1ZSBpc3RlIGl1cmUgZGVzZXJ1bnQuYCxcclxuXHRcdFx0ZXF1aXBlbWVudFBpc2NpbmU6ICd0cnVjMSx0cnVjMix0cnVjMyx0cnVjNCx0cnVjNScsXHJcblx0XHRcdHRleHRlOiBgQ2UgZ8OudGUgYSAxMCBjaGFtYnJlcyBkb250IDUgYXZlYyBzYWxsZSBkZSBiYWluIHByaXbDqWUgKyAyIGRvcnRvaXJzIGRlIDEwIHBsYWNlcyBjaGFjdW4uIFVuZSBncmFuZGUgc2FsbGUgcGVybWV0IGTigJlhY2N1ZWlsbGlyIGRlcyByw6ljZXB0aW9ucy5cclxuXHJcbiAgICAgICAgICAgIFVuZSBwaXNjaW5lIGVzdCBwcsOpdnVlIGRhbnMgY2UgZ8OudGUsIGxhIGNvbnN0cnVjdGlvbiBkw6lidXRlcmEgZW4gYXZyaWwgMjAyMSwgZWxsZSBzZXJhIG9ww6lyYXRpb25uZWxsZSBwb3VyIGxlcyBmw6p0ZXMgZGUgZmluIGTigJlhbm7DqWUgMjAyMVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYCxcclxuXHRcdFx0dmlkZW9MaW5rOlxyXG5cdFx0XHRcdCc8aWZyYW1lIHdpZHRoPVwiNTYwXCIgaGVpZ2h0PVwiMzE1XCIgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvRXIwMUs2bklmNTRcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+JyxcclxuXHRcdFx0Y2FsZW5kcmllckxpbms6XHJcblx0XHRcdFx0JzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9jYWxlbmRhci5nb29nbGUuY29tL2NhbGVuZGFyL2VtYmVkP3Nob3dUaXRsZT0wJnNob3dQcmludD0wJnNob3dUej0wJmhlaWdodD02MDAmd2tzdD0yJmJnY29sb3I9JTIzRkZGRkZGJnNyYz0zYnZtNGFhamoxYjR1ZnU5ZW8xYmxtMnBiNCU0MGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20mY29sb3I9JTIzQjEzNjVGJnNyYz1mci5mcmVuY2glMjNob2xpZGF5JTQwZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29tJmNvbG9yPSUyMzI5NTJBMyZzcmM9ZzgyZDY4ZGhrbW03czRwcG81MzU0N2prZGclNDBncm91cC5jYWxlbmRhci5nb29nbGUuY29tJmNvbG9yPSUyMzMzMzMzMyZjdHo9RXVyb3BlJTJGUGFyaXNcIiBzdHlsZT1cImJvcmRlci13aWR0aDowXCIgd2lkdGg9XCI4MDBcIiBoZWlnaHQ9XCI2MDBcIiBmcmFtZWJvcmRlcj1cIjBcIiBzY3JvbGxpbmc9XCJub1wiPjwvaWZyYW1lPicsXHJcblx0XHRcdGNvdWxldXIxOiAnI2RlNzZiOScsXHJcblx0XHRcdGNvdWxldXIyOiAnIzExMTExMScsXHJcblx0XHRcdHRhcmlmRGVCYXNlOiAnOTMwJyxcclxuXHRcdFx0blBlcnM6ICcyMCcsXHJcblx0XHRcdHN1cHBsZW1lbnRQYXJQZXJzOiAnMTUnLFxyXG5cdFx0XHR0YXJpZlBhclBlcnNQYXJOdWl0OiAnMjUnLFxyXG5cdFx0XHRmdE1lbmFnZTogJzE2MCcsXHJcblx0XHRcdGZ0TGl0OiAnNjAnLFxyXG5cdFx0XHR0cm9pc051aXRlZXM6ICcyMjAnLFxyXG5cdFx0XHRxdWF0cmVOdWl0ZWVzOiAnNDMwJyxcclxuXHRcdFx0dW5lTnVpdGVlOiAnODAnLFxyXG5cdFx0XHRiYXNzZVNhaXNvbjogJzM4MCcsXHJcblx0XHRcdG1veWVubmVTYWlzb246ICcxNjAnLFxyXG5cdFx0XHRoYXV0ZVNhaXNvbjogJzE4MCcsXHJcblx0XHRcdG5vZWw6ICc2NzAnLFxyXG5cdFx0XHRub3V2ZWxBbjogJzIwMCcsXHJcblx0XHR9LFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdGNvbnN0IHN0ZXBzID0gZ2V0U3RlcHMoKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcclxuXHRcdHNldEFjdGl2ZVN0ZXAoKHByZXZBY3RpdmVTdGVwKSA9PiBwcmV2QWN0aXZlU3RlcCArIDEpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUJhY2sgPSAoKSA9PiB7XHJcblx0XHRzZXRBY3RpdmVTdGVwKChwcmV2QWN0aXZlU3RlcCkgPT4gcHJldkFjdGl2ZVN0ZXAgLSAxKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcclxuXHRcdHNldEFjdGl2ZVN0ZXAoMCk7XHJcblx0fTtcclxuXHJcblx0ZnVuY3Rpb24gZ2V0U3RlcENvbnRlbnQoc3RlcCkge1xyXG5cdFx0c3dpdGNoIChzdGVwKSB7XHJcblx0XHRcdGNhc2UgMDpcclxuXHRcdFx0XHRyZXR1cm4gPEZvcm1JbmZvc0dlbmUgY2xhc3Nlcz17Y2xhc3Nlc30gcmVnaXN0ZXI9e3JlZ2lzdGVyfSAvPjtcclxuXHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHQ8Rm9ybUluZm9zRGl2ZXJzZXMgY2xhc3Nlcz17Y2xhc3Nlc30gcmVnaXN0ZXI9e3JlZ2lzdGVyfSAvPlxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0PEZvcm1JbmZvc1ByYXRpcXVlcyBjbGFzc2VzPXtjbGFzc2VzfSByZWdpc3Rlcj17cmVnaXN0ZXJ9IC8+XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdHJldHVybiA8Rm9ybUluZm9zUGFnZXMgY2xhc3Nlcz17Y2xhc3Nlc30gcmVnaXN0ZXI9e3JlZ2lzdGVyfSAvPjtcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRyZXR1cm4gJ0VycmV1cic7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChkYXRhKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZygnc3VibWl0Jyk7XHJcblx0XHRzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKCdvblN1Ym1pdCBkYXRhID0+JywgZGF0YSk7XHJcblx0XHRjcmVhdGVHaXRlKGRhdGEsIHRva2VuKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3Jlc3VsdCB2YXV0ID0+JywgcmVzdWx0KTtcclxuXHRcdFx0aWYgKHJlc3VsdC5lcnJvcikge1xyXG5cdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xyXG5cdFx0XHRcdHNuYWNrYmFyU2hvd01lc3NhZ2UoYCR7cmVzdWx0LmVycm9yfWApO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHJlc3VsdC5kZWphUmVzZXJ2ZU1lc3NhZ2UpIHtcclxuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0XHRzbmFja2JhclNob3dNZXNzYWdlKGAke3Jlc3VsdC5kZWphUmVzZXJ2ZU1lc3NhZ2V9YCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHRcdFx0c25hY2tiYXJTaG93TWVzc2FnZShgJHtyZXN1bHQubWVzc2FnZX1gLCAnc3VjY2VzcycpO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Um91dGVyLnB1c2goYC9hZG1pbi9naXRlc2AsIG51bGwsIHtcclxuXHRcdFx0XHRcdFx0c2hhbGxvdzogdHJ1ZSxcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0sIDMwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PENvbnRhaW5lcj5cclxuXHRcdFx0e2xvYWRpbmcgJiYgPENpcmN1bGFyUHJvZ3Jlc3MgLz59XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcblx0XHRcdFx0XHQ8U3RlcHBlclxyXG5cdFx0XHRcdFx0XHRhbHRlcm5hdGl2ZUxhYmVsXHJcblx0XHRcdFx0XHRcdGFjdGl2ZVN0ZXA9e2FjdGl2ZVN0ZXB9XHJcblx0XHRcdFx0XHRcdGNvbm5lY3Rvcj17PENvbG9ybGliQ29ubmVjdG9yIC8+fT5cclxuXHRcdFx0XHRcdFx0e3N0ZXBzLm1hcCgobGFiZWwpID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8U3RlcCBrZXk9e2xhYmVsfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxTdGVwTGFiZWwgU3RlcEljb25Db21wb25lbnQ9e0NvbG9ybGliU3RlcEljb259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7bGFiZWx9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1N0ZXBMYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8L1N0ZXA+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PC9TdGVwcGVyPlxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0e2FjdGl2ZVN0ZXAgPT09IHN0ZXBzLmxlbmd0aCA/IChcclxuXHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmluc3RydWN0aW9uc30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFRvdXRlcyBsZXMgY2hhbXBzIG9udCBiaWVuIMOpdMOpcyByZW1wbGlzID8gU2lcclxuXHRcdFx0XHRcdFx0XHRcdFx0b3VpLCB2YWxpZGVyIHBvdXIgY3LDqWVyIGNlIGfDrnRlICFcclxuXHRcdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2FjdGl2ZVN0ZXAgPT09IDB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZUJhY2t9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRSZXRvdXJcclxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdzdWJtaXQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I9J3ByaW1hcnknXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRWYWxpZGVyXHJcblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmluc3RydWN0aW9uc30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtnZXRTdGVwQ29udGVudChhY3RpdmVTdGVwKX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHRcdDxHcmlkXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRhaW5lclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkaXJlY3Rpb249J3JvdydcclxuXHRcdFx0XHRcdFx0XHRcdFx0anVzdGlmeT0nc3BhY2UtYmV0d2VlbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtcz0nY2VudGVyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXthY3RpdmVTdGVwID09PSAwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZUJhY2t9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0UmV0b3VyXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcj0ncHJpbWFyeSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVOZXh0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFN1aXZhbnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9Db250YWluZXI+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIod2l0aFNuYWNrYmFyKEZvcm1DcmVhdGVHaXRlKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=