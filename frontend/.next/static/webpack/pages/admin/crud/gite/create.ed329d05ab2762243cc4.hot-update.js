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
            lineNumber: 301,
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
            lineNumber: 304,
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
            lineNumber: 308,
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
            lineNumber: 311,
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
                    Router.push("/admin/gites", null, {
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
      lineNumber: 343,
      columnNumber: 3
    }
  }, loading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__["CircularProgress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 16
    }
  }), __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 4
    }
  }, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    alternativeLabel: true,
    activeStep: activeStep,
    connector: __jsx(ColorlibConnector, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 18
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 6
    }
  }, steps.map(function (label) {
    return __jsx(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_12__["default"], {
      StepIconComponent: ColorlibStepIcon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354,
        columnNumber: 9
      }
    }, label));
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 6
    }
  }, activeStep === steps.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.instructions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 9
    }
  }, "Toutes les champs ont bien \xE9t\xE9s remplis ? Si oui, valider pour cr\xE9er ce g\xEEte !"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    disabled: activeStep === 0,
    onClick: handleBack,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
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
      lineNumber: 373,
      columnNumber: 9
    }
  }, "Valider")) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.instructions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
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
      lineNumber: 386,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    disabled: activeStep === 0,
    onClick: handleBack,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
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
      lineNumber: 398,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9naXRlcy9Gb3JtQ3JlYXRlR2l0ZS5qcyJdLCJuYW1lcyI6WyJBbGVydCIsInByb3BzIiwiUW9udG9Db25uZWN0b3IiLCJ3aXRoU3R5bGVzIiwiYWx0ZXJuYXRpdmVMYWJlbCIsInRvcCIsImxlZnQiLCJyaWdodCIsImFjdGl2ZSIsImJvcmRlckNvbG9yIiwiY29tcGxldGVkIiwibGluZSIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwiU3RlcENvbm5lY3RvciIsInVzZVFvbnRvU3RlcEljb25TdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImNvbG9yIiwiZGlzcGxheSIsImhlaWdodCIsImFsaWduSXRlbXMiLCJjaXJjbGUiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsImZvbnRTaXplIiwiUW9udG9TdGVwSWNvbiIsImNsYXNzZXMiLCJjbHN4IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsIkNvbG9ybGliQ29ubmVjdG9yIiwiYmFja2dyb3VuZEltYWdlIiwiYm9yZGVyIiwidXNlQ29sb3JsaWJTdGVwSWNvblN0eWxlcyIsImp1c3RpZnlDb250ZW50IiwiYm94U2hhZG93IiwiQ29sb3JsaWJTdGVwSWNvbiIsImljb25zIiwiU3RyaW5nIiwiaWNvbiIsIm5vZGUiLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsImJ1dHRvbiIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsImluc3RydWN0aW9ucyIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImZvcm1Db250cm9sIiwibWFyZ2luIiwibWluV2lkdGgiLCJzZWxlY3RFbXB0eSIsInRleHRGaWVsZCIsImdldFN0ZXBzIiwiRm9ybUNyZWF0ZUdpdGUiLCJzbmFja2JhclNob3dNZXNzYWdlIiwicm91dGVyIiwiZ2l0ZSIsInRva2VuIiwiZ2V0Q29va2llIiwidXNlU3RhdGUiLCJhY3RpdmVTdGVwIiwic2V0QWN0aXZlU3RlcCIsInVzZUZvcm0iLCJzaG91bGRVbnJlZ2lzdGVyIiwiZGVmYXVsdFZhbHVlcyIsIm5vbSIsImFkcmVzc2UiLCJjcCIsInZpbGxlIiwiY2FwYWNpdGVNYXgiLCJtdGl0bGUiLCJwcmVzR2l0ZVNFTyIsImRldGFpbEdpdGUiLCJ0ZXh0ZUV4dGVyaWV1ciIsImVxdWlwZW1lbnRFeHRlcmlldXIiLCJ0ZXh0ZUludGVyaWV1ciIsImVxdWlwZW1lbnRJbnRlcmlldXIiLCJ0ZXh0ZVBpc2NpbmUiLCJlcXVpcGVtZW50UGlzY2luZSIsInRleHRlIiwidmlkZW9MaW5rIiwiY2FsZW5kcmllckxpbmsiLCJjb3VsZXVyMSIsImNvdWxldXIyIiwidGFyaWZEZUJhc2UiLCJuUGVycyIsInN1cHBsZW1lbnRQYXJQZXJzIiwidGFyaWZQYXJQZXJzUGFyTnVpdCIsImZ0TWVuYWdlIiwiZnRMaXQiLCJ0cm9pc051aXRlZXMiLCJxdWF0cmVOdWl0ZWVzIiwidW5lTnVpdGVlIiwiYmFzc2VTYWlzb24iLCJtb3llbm5lU2Fpc29uIiwiaGF1dGVTYWlzb24iLCJub2VsIiwibm91dmVsQW4iLCJjb250cm9sIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInN0ZXBzIiwiaGFuZGxlTmV4dCIsInByZXZBY3RpdmVTdGVwIiwiaGFuZGxlQmFjayIsImhhbmRsZVJlc2V0IiwiZ2V0U3RlcENvbnRlbnQiLCJzdGVwIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUdpdGUiLCJ0aGVuIiwicmVzdWx0IiwiZXJyb3IiLCJkZWphUmVzZXJ2ZU1lc3NhZ2UiLCJtZXNzYWdlIiwic2V0VGltZW91dCIsIlJvdXRlciIsInB1c2giLCJzaGFsbG93IiwibWFwIiwibGFiZWwiLCJsZW5ndGgiLCJ3aXRoUm91dGVyIiwid2l0aFNuYWNrYmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvZ2l0ZS9jcmVhdGUuZWQzMjlkMDVhYjI3NjIyNDNjYzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgU3RlcHBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdGVwcGVyJztcclxuaW1wb3J0IFN0ZXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcCc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBTdGVwTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcExhYmVsJztcclxuaW1wb3J0IENoZWNrIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGVjayc7XHJcbmltcG9ydCBTdGVwQ29ubmVjdG9yIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBDb25uZWN0b3InO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHsgd2l0aFNuYWNrYmFyIH0gZnJvbSAnLi4vLi4vLi4vSE9DL1NuYWNrYmFyJztcclxuaW1wb3J0IEZvcm1JbmZvc0dlbmUgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9naXRlcy9Gb3JtSW5mb3NHZW5lJztcclxuaW1wb3J0IEZvcm1JbmZvc0RpdmVyc2VzIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW4vZm9ybXMvZ2l0ZXMvRm9ybUluZm9zRGl2ZXJzZXMnO1xyXG5pbXBvcnQgRm9ybUluZm9zUHJhdGlxdWVzIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW4vZm9ybXMvZ2l0ZXMvRm9ybUluZm9zUHJhdGlxdWVzJztcclxuaW1wb3J0IEZvcm1JbmZvc1BhZ2VzIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW4vZm9ybXMvZ2l0ZXMvRm9ybUluZm9zUGFnZXMnO1xyXG5pbXBvcnQgUGljdHVyZUluUGljdHVyZUFsdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1BpY3R1cmVJblBpY3R1cmVBbHQnO1xyXG5pbXBvcnQgU3RhcnNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdGFycyc7XHJcbmltcG9ydCBNb25ldGl6YXRpb25Pbkljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vbmV0aXphdGlvbk9uJztcclxuaW1wb3J0IFBhZ2V2aWV3SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGFnZXZpZXcnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIENpcmN1bGFyUHJvZ3Jlc3MgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIEFsZXJ0KHByb3BzKSB7XHJcblx0cmV0dXJuIDxNdWlBbGVydCBlbGV2YXRpb249ezZ9IHZhcmlhbnQ9J2ZpbGxlZCcgey4uLnByb3BzfSAvPjtcclxufVxyXG5cclxuY29uc3QgUW9udG9Db25uZWN0b3IgPSB3aXRoU3R5bGVzKHtcclxuXHRhbHRlcm5hdGl2ZUxhYmVsOiB7XHJcblx0XHR0b3A6IDEwLFxyXG5cdFx0bGVmdDogJ2NhbGMoLTUwJSArIDE2cHgpJyxcclxuXHRcdHJpZ2h0OiAnY2FsYyg1MCUgKyAxNnB4KScsXHJcblx0fSxcclxuXHRhY3RpdmU6IHtcclxuXHRcdCcmICRsaW5lJzoge1xyXG5cdFx0XHRib3JkZXJDb2xvcjogJyM3ODRhZjQnLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGNvbXBsZXRlZDoge1xyXG5cdFx0JyYgJGxpbmUnOiB7XHJcblx0XHRcdGJvcmRlckNvbG9yOiAnIzc4NGFmNCcsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0bGluZToge1xyXG5cdFx0Ym9yZGVyQ29sb3I6ICcjZWFlYWYwJyxcclxuXHRcdGJvcmRlclRvcFdpZHRoOiAzLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAxLFxyXG5cdH0sXHJcbn0pKFN0ZXBDb25uZWN0b3IpO1xyXG5cclxuY29uc3QgdXNlUW9udG9TdGVwSWNvblN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdGNvbG9yOiAnI2VhZWFmMCcsXHJcblx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRoZWlnaHQ6IDIyLFxyXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0fSxcclxuXHRhY3RpdmU6IHtcclxuXHRcdGNvbG9yOiAnIzc4NGFmNCcsXHJcblx0fSxcclxuXHRjaXJjbGU6IHtcclxuXHRcdHdpZHRoOiA4LFxyXG5cdFx0aGVpZ2h0OiA4LFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAnNTAlJyxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcicsXHJcblx0fSxcclxuXHRjb21wbGV0ZWQ6IHtcclxuXHRcdGNvbG9yOiAnIzc4NGFmNCcsXHJcblx0XHR6SW5kZXg6IDEsXHJcblx0XHRmb250U2l6ZTogMTgsXHJcblx0fSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBRb250b1N0ZXBJY29uKHByb3BzKSB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVFvbnRvU3RlcEljb25TdHlsZXMoKTtcclxuXHRjb25zdCB7IGFjdGl2ZSwgY29tcGxldGVkIH0gPSBwcm9wcztcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwge1xyXG5cdFx0XHRcdFtjbGFzc2VzLmFjdGl2ZV06IGFjdGl2ZSxcclxuXHRcdFx0fSl9PlxyXG5cdFx0XHR7Y29tcGxldGVkID8gKFxyXG5cdFx0XHRcdDxDaGVjayBjbGFzc05hbWU9e2NsYXNzZXMuY29tcGxldGVkfSAvPlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNpcmNsZX0gLz5cclxuXHRcdFx0KX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcblFvbnRvU3RlcEljb24ucHJvcFR5cGVzID0ge1xyXG5cdC8qKlxyXG5cdCAqIFdoZXRoZXIgdGhpcyBzdGVwIGlzIGFjdGl2ZS5cclxuXHQgKi9cclxuXHRhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxyXG5cdC8qKlxyXG5cdCAqIE1hcmsgdGhlIHN0ZXAgYXMgY29tcGxldGVkLiBJcyBwYXNzZWQgdG8gY2hpbGQgY29tcG9uZW50cy5cclxuXHQgKi9cclxuXHRjb21wbGV0ZWQ6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuY29uc3QgQ29sb3JsaWJDb25uZWN0b3IgPSB3aXRoU3R5bGVzKHtcclxuXHRhbHRlcm5hdGl2ZUxhYmVsOiB7XHJcblx0XHR0b3A6IDIyLFxyXG5cdH0sXHJcblx0YWN0aXZlOiB7XHJcblx0XHQnJiAkbGluZSc6IHtcclxuXHRcdFx0YmFja2dyb3VuZEltYWdlOlxyXG5cdFx0XHRcdCdsaW5lYXItZ3JhZGllbnQoIDk1ZGVnLHJnYigyNDIsMTEzLDMzKSAwJSxyZ2IoMjMzLDY0LDg3KSA1MCUscmdiKDEzOCwzNSwxMzUpIDEwMCUpJyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRjb21wbGV0ZWQ6IHtcclxuXHRcdCcmICRsaW5lJzoge1xyXG5cdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6XHJcblx0XHRcdFx0J2xpbmVhci1ncmFkaWVudCggOTVkZWcscmdiKDI0MiwxMTMsMzMpIDAlLHJnYigyMzMsNjQsODcpIDUwJSxyZ2IoMTM4LDM1LDEzNSkgMTAwJSknLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGxpbmU6IHtcclxuXHRcdGhlaWdodDogMyxcclxuXHRcdGJvcmRlcjogMCxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJyNlYWVhZjAnLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAxLFxyXG5cdH0sXHJcbn0pKFN0ZXBDb25uZWN0b3IpO1xyXG5cclxuY29uc3QgdXNlQ29sb3JsaWJTdGVwSWNvblN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJyNjY2MnLFxyXG5cdFx0ekluZGV4OiAxLFxyXG5cdFx0Y29sb3I6ICcjZmZmJyxcclxuXHRcdHdpZHRoOiA1MCxcclxuXHRcdGhlaWdodDogNTAsXHJcblx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0fSxcclxuXHRhY3RpdmU6IHtcclxuXHRcdGJhY2tncm91bmRJbWFnZTpcclxuXHRcdFx0J2xpbmVhci1ncmFkaWVudCggMTM2ZGVnLCByZ2IoMjQyLDExMywzMykgMCUsIHJnYigyMzMsNjQsODcpIDUwJSwgcmdiKDEzOCwzNSwxMzUpIDEwMCUpJyxcclxuXHRcdGJveFNoYWRvdzogJzAgNHB4IDEwcHggMCByZ2JhKDAsMCwwLC4yNSknLFxyXG5cdH0sXHJcblx0Y29tcGxldGVkOiB7XHJcblx0XHRiYWNrZ3JvdW5kSW1hZ2U6XHJcblx0XHRcdCdsaW5lYXItZ3JhZGllbnQoIDEzNmRlZywgcmdiKDI0MiwxMTMsMzMpIDAlLCByZ2IoMjMzLDY0LDg3KSA1MCUsIHJnYigxMzgsMzUsMTM1KSAxMDAlKScsXHJcblx0fSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBDb2xvcmxpYlN0ZXBJY29uKHByb3BzKSB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZUNvbG9ybGliU3RlcEljb25TdHlsZXMoKTtcclxuXHRjb25zdCB7IGFjdGl2ZSwgY29tcGxldGVkIH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgaWNvbnMgPSB7XHJcblx0XHQxOiA8U3RhcnNJY29uIC8+LFxyXG5cdFx0MjogPFBpY3R1cmVJblBpY3R1cmVBbHRJY29uIC8+LFxyXG5cdFx0MzogPE1vbmV0aXphdGlvbk9uSWNvbiAvPixcclxuXHRcdDQ6IDxQYWdldmlld0ljb24gLz4sXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwge1xyXG5cdFx0XHRcdFtjbGFzc2VzLmFjdGl2ZV06IGFjdGl2ZSxcclxuXHRcdFx0XHRbY2xhc3Nlcy5jb21wbGV0ZWRdOiBjb21wbGV0ZWQsXHJcblx0XHRcdH0pfT5cclxuXHRcdFx0e2ljb25zW1N0cmluZyhwcm9wcy5pY29uKV19XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5Db2xvcmxpYlN0ZXBJY29uLnByb3BUeXBlcyA9IHtcclxuXHQvKipcclxuXHQgKiBXaGV0aGVyIHRoaXMgc3RlcCBpcyBhY3RpdmUuXHJcblx0ICovXHJcblx0YWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcclxuXHQvKipcclxuXHQgKiBNYXJrIHRoZSBzdGVwIGFzIGNvbXBsZXRlZC4gSXMgcGFzc2VkIHRvIGNoaWxkIGNvbXBvbmVudHMuXHJcblx0ICovXHJcblx0Y29tcGxldGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuXHQvKipcclxuXHQgKiBUaGUgbGFiZWwgZGlzcGxheWVkIGluIHRoZSBzdGVwIGljb24uXHJcblx0ICovXHJcblx0aWNvbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRyb290OiB7XHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdH0sXHJcblx0YnV0dG9uOiB7XHJcblx0XHRtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuXHR9LFxyXG5cdGluc3RydWN0aW9uczoge1xyXG5cdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0bWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdH0sXHJcblx0Zm9ybUNvbnRyb2w6IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdG1pbldpZHRoOiAnMTAwJScsXHJcblx0fSxcclxuXHRzZWxlY3RFbXB0eToge1xyXG5cdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdH0sXHJcblx0dGV4dEZpZWxkOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIGdldFN0ZXBzKCkge1xyXG5cdHJldHVybiBbXHJcblx0XHQnSW5mb3MgZ8OpbsOpcmFsZXMnLFxyXG5cdFx0J0luZm9zIGRpdmVyc2VzJyxcclxuXHRcdCdJbmZvcyBwcmF0aXF1ZXMgJiBmaW5hbmNpw6hyZXMnLFxyXG5cdFx0J0luZm9zIHBhZ2VzICYgU0VPJyxcclxuXHRdO1xyXG59XHJcblxyXG5jb25zdCBGb3JtQ3JlYXRlR2l0ZSA9ICh7IHNuYWNrYmFyU2hvd01lc3NhZ2UsIHJvdXRlciwgZ2l0ZSB9KSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cdGNvbnN0IFthY3RpdmVTdGVwLCBzZXRBY3RpdmVTdGVwXSA9IHVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IHsgY29udHJvbCwgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybSh7XHJcblx0XHRzaG91bGRVbnJlZ2lzdGVyOiBmYWxzZSxcclxuXHRcdGRlZmF1bHRWYWx1ZXM6IHtcclxuXHRcdFx0bm9tOiAnUGV0aXQgTmF5JyxcclxuXHRcdFx0YWRyZXNzZTogJzgxIHJvdXRlIGRlIFN0ZW5heScsXHJcblx0XHRcdGNwOiAnMDgyNDAnLFxyXG5cdFx0XHR2aWxsZTogJ05vdWFydCcsXHJcblx0XHRcdGNhcGFjaXRlTWF4OiAnNTgnLFxyXG5cdFx0XHRtdGl0bGU6XHJcblx0XHRcdFx0J0xlcyBHw650ZXMgV0FPIHwgTGUgZ8OudGUgZHUgUGV0aXQgTmF5IGF2ZWMgcGlzY2luZSBjaGF1ZmbDqWUgZXQgY291dmVydGUnLFxyXG5cdFx0XHRwcmVzR2l0ZVNFTzpcclxuXHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YWUgbmVjZXNzaXRhdGlidXMgcmVwcmVoZW5kZXJpdCBhbGlxdWlkIG1haW9yZXMgaXBzYW0gcXVpYnVzZGFtLCBlb3Mgb21uaXMgbWF4aW1lLCBwb3JybyByYXRpb25lIGN1cGlkaXRhdGUgdGVtcG9yZSBtaW5pbWEgcXVhcyB1bGxhbSBpdXJlIHZlcm8gZG9sb3JlbT8gSXBzdW0gc2l0IGVvcyBkb2xvciB0ZW1wb3JlIG5lbW8sIGV4IHF1aXNxdWFtIGJlYXRhZSB1dCwgdm9sdXB0YXRpYnVzLCBlbmltIHNpbWlsaXF1ZSBkb2xvcmU/IFF1aWEgZGVzZXJ1bnQgc29sdXRhIGFzcGVybmF0dXIgZG9sb3JpYnVzIGVzdC4gUXVpYSB0ZW1wb3JhIGFkaXBpc2NpIHF1b3MgcHJvdmlkZW50IHJhdGlvbmUgdm9sdXB0YXRpYnVzIGNvcnBvcmlzIGFuaW1pIGVhcnVtIGFjY3VzYW11cyBkb2xvcmUgbW9sZXN0aWFzIGlwc2EsIG5hbSByZXB1ZGlhbmRhZSBzaW1pbGlxdWUgY29ycnVwdGkgZXhlcmNpdGF0aW9uZW0gbm9uIG5lbW8sIG5lc2NpdW50IGRvbG9yZW0gcGVyZmVyZW5kaXMuIFZvbHVwdGF0ZSBpbiBhcmNoaXRlY3RvIGlsbHVtLCBpcHN1bSBtb2RpIHF1b2QsIGVhcXVlIGVsaWdlbmRpIHF1aSBkb2xvciBwb3JybyBkdWNpbXVzIGRpY3RhIGlzdGUgcXVhZXJhdCwgZXhlcmNpdGF0aW9uZW0gbnVtcXVhbS4gVGVtcG9yaWJ1cyByYXRpb25lLCBhY2N1c2FudGl1bSBhdCBleHBlZGl0YSBkZWxlY3R1cyB2ZWwgcXVpIHByYWVzZW50aXVtIG1pbnVzIGN1cGlkaXRhdGUuIEN1bHBhIG5lY2Vzc2l0YXRpYnVzIGNvbnNlcXVhdHVyIHNhcGllbnRlIHF1aWEgcXVpc3F1YW0gZXJyb3IgbmVxdWUgbmFtIGRvbG9yZW1xdWUgcGVyZmVyZW5kaXMgaGljIHZlcml0YXRpcywgaXVzdG8gZG9sb3JpYnVzIGN1bSB0ZW1wb3JlIHF1aWRlbSBhYiBtb2xlc3RpYWUsIGJlYXRhZSBldW0sIGJsYW5kaXRpaXMgZGVsZWN0dXMgcXVvZCBub2JpcyBmdWdpdD8gSWQsIHBlcmZlcmVuZGlzIHZlbGl0IHF1aSBlYXJ1bSByZXBlbGxlbmR1cyBpcHN1bSBlb3MgcGFyaWF0dXIgcXVhZSB2b2x1cHRhdGUsIGV0IGVsaWdlbmRpIG5lbW8gaXVzdG8gbGFib3JlIG1vbGVzdGlhZSBjb3JydXB0aSBjdW1xdWUgYXNwZXJuYXR1ciBvZmZpY2lpcy4gSW5jaWR1bnQhJyxcclxuXHRcdFx0ZGV0YWlsR2l0ZTogYExlIGfDrnRlIGVzdCBzaXR1w6kgODEgcm91dGUgZGUgU3RlbmF5ICDDoCA2MDAgbSBkZSBsYSBjb21tdW5lIGRlICBOb3VhcnQgKDA4MjQwKS4gUG91ciBs4oCZaW5zdGFudCBpbCBu4oCZeSBhIHBhcyAgZW5jb3JlIGRlIHBpc2NpbmUsIG1haXMgdW4gU1BBLCBiaWxsYXJkLCBiYWJ5IGZvb3QsIGV0Yy5cclxuXHJcbiAgICAgICAgICAgICAgICBUb3V0IGxlIG7DqWNlc3NhaXJlIGVzdCBwcsOpdnUgcG91ciByZWNldm9pciB1bmUgY2lucXVhbnRhaW5lIGRlIHBlcnNvbm5lcyBldCB1bmUgZ3JhbmRlIGNoYW1icmUgZnJvaWRlIHBlcm1ldCBkZSBzdG9ja2VyIGzigJlhbGltZW50YXRpb24uXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIElsIHkgYSAxMCBjaGFtYnJlcyBldCAyIGRvcnRvaXJzLiBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgVW5lIHBpc2NpbmUgZXN0IHByw6l2dWUgc3VyIGNlIHNpdGUsIGxhIGNvbnN0cnVjdGlvbiB2YSBkw6lidXRlciBlbiBhdnJpbCAyMDIxIHBvdXIgc2UgdGVybWluZXIgcG91ciBsZXMgZsOqdGVzIGRlIGZpbiBk4oCZYW5uw6llIDIwMjEuIExlcyBsb2NhdGlvbnMgYXByw6hzIGNldHRlIGRhdGUgc3ViaXJvbnQgdW5lIGF1Z21lbnRhdGlvbiB2YXJpYW50IGVudHJlIDUwMCBldCA2MDAg4oKsIHBhciByYXBwb3J0IGF1IHRhcmlmIGNhbGN1bMOpIGFjdHVlbGxlbWVudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgLFxyXG5cdFx0XHR0ZXh0ZUV4dGVyaWV1cjogYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEZ1Z2Egc2FlcGUgY29ycG9yaXMgbmlzaSBudW1xdWFtIHJhdGlvbmUgbW9kaSBhcmNoaXRlY3RvLiBDdW0gZXJyb3IgcGVyZmVyZW5kaXMgaGljIGl1cmUsIHByb3ZpZGVudCBsYWJvcmUuIElwc3VtIHNpbnQgYXQgc2VxdWkgYWxpcXVpZCBhc3N1bWVuZGEgdmVsaXQgaGljIHRvdGFtIGlkIGFwZXJpYW0gZXhjZXB0dXJpLCBsYXVkYW50aXVtIGFuaW1pIGZhY2VyZSwgY29tbW9kaSBlYXJ1bSB1bGxhbSwgYXRxdWUgZXVtIHNhZXBlIHJlaWNpZW5kaXMgcXVvcyBxdWFlIGZ1Z2EgdGVtcG9yYS4gUXVpcyBhbmltaSBtaW51cyBtb2xlc3RpYWUgdW5kZSBkb2xvcmVtIGVzc2Ugc2ltaWxpcXVlIGRvbG9ydW0gaW52ZW50b3JlIG5vc3RydW0gcXVhc2kgbGF1ZGFudGl1bSBleCBxdWFtIGFsaXF1YW0gYWNjdXNhbXVzIGN1bXF1ZSBxdW9zIGRvbG9yIGNvbnNlY3RldHVyLCBkZWxlY3R1cyByZXJ1bT8gVmVsaXQgcXVpc3F1YW0gbGFib3JlIHF1YWUgcXVhZXJhdCBtYWlvcmVzIHF1aWRlbSByZXBlbGxlbmR1cyBzaW1pbGlxdWUgZG9sb3IsIGFtZXQgbmloaWwgYXQsIGF1dGVtIG51bXF1YW0gcG9ycm8gY29ycG9yaXMgcXVpYSBpbiBoaWMgcGVyc3BpY2lhdGlzIGFsaXF1YW0uIFByYWVzZW50aXVtIGN1cGlkaXRhdGUgZGlnbmlzc2ltb3MgbmFtIGRlYml0aXMgZXggZXJyb3IgaWxsbyBpZCBpbmNpZHVudCBldmVuaWV0LCBpc3RlIG1pbnVzIGVzc2Ugc2FwaWVudGUgcGVyc3BpY2lhdGlzIGVhIGVhcXVlIGFsaXF1YW0gcGVyZmVyZW5kaXMgZGVzZXJ1bnQuIEV0LCBtYWlvcmVzIHNhcGllbnRlLCBkaWN0YSBwYXJpYXR1ciBleCBsYWJvcnVtIHF1aWRlbSwgZGViaXRpcyBub24gbW9kaSBhcmNoaXRlY3RvIGRvbG9ydW0gbWFnbmkgc2l0IG5vc3RydW0gaXVzdG8gZWFxdWUgb3B0aW8gYWNjdXNhbXVzIGFzc3VtZW5kYSByZXB1ZGlhbmRhZSB2aXRhZSBmdWdpdCBuYW0gcXVhcyBpdGFxdWUgZWEgYWNjdXNhbnRpdW0uIFZlcm8gZnVnaWF0IGZ1Z2l0IGNvcnBvcmlzIHV0IG1vZGkuIERvbG9yZW1xdWUsIG5lY2Vzc2l0YXRpYnVzIHF1aWEhIFF1YXNpIHRlbXBvcmlidXMgcmVwcmVoZW5kZXJpdCBhIGFuaW1pIGVpdXMsIG9mZmljaWlzIHBvcnJvIGVhISBPZGl0IG5vbiwgYXNwZXJpb3JlcyBudW1xdWFtIHF1YWUgbWFpb3JlcyBzZWQgdmVsaXQgYWxpcXVpZCB0ZW1wb3JhIG1hZ25pIG5lbW8gaXBzYW0gdGVuZXR1ciB0ZW1wb3JlIGRpc3RpbmN0aW8sIGluY2lkdW50IHNhZXBlIG1vbGVzdGlhZSBxdW9kIGFyY2hpdGVjdG8gbm9zdHJ1bSBhY2N1c2FudGl1bSwgcGVyZmVyZW5kaXMgcmVwZWxsZW5kdXMgc2ltaWxpcXVlIGV2ZW5pZXQgdm9sdXB0YXRlbSBjb3JydXB0aS4gQSBpbGxvIGlwc3VtIGNvcnJ1cHRpIHBlcnNwaWNpYXRpcyByZWN1c2FuZGFlIHRlbXBvcmUgc2FlcGUgcmVwdWRpYW5kYWUuIEN1bXF1ZSwgdmVsaXQgcXVpcyByZXBlbGxhdCByYXRpb25lLCB2ZWwgZXhwbGljYWJvIGNvbW1vZGkgdGVuZXR1ciBldmVuaWV0IGltcGVkaXQgZWEgbmVzY2l1bnQgZG9sb3JlIGluIGlwc2FtIGV0IHBsYWNlYXQgb2ZmaWNpaXMgY29uc2VxdWF0dXIuIFF1YWUgbmVxdWUgaW1wZWRpdCByZWN1c2FuZGFlLCBvZmZpY2lpcyB2ZXJvIG1pbnVzIGZ1Z2l0IGFsaWFzIHBlcmZlcmVuZGlzISBRdWFlcmF0IGl1c3RvIHF1aWRlbSBkZWxlbml0aSwgb2ZmaWNpYSBzdW50IGZ1Z2l0LCBzaW50IG9kaW8gZXJyb3IsIHNlcXVpIGZ1Z2Egc2FlcGUgZGViaXRpcyBleHBsaWNhYm8gYWNjdXNhbnRpdW0gZG9sb3JlbXF1ZSBpc3RlIGl1cmUgZGVzZXJ1bnQuYCxcclxuXHRcdFx0ZXF1aXBlbWVudEV4dGVyaWV1cjogJ3RydWMxLHRydWMyLHRydWMzLHRydWM0LHRydWM1JyxcclxuXHRcdFx0dGV4dGVJbnRlcmlldXI6IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBGdWdhIHNhZXBlIGNvcnBvcmlzIG5pc2kgbnVtcXVhbSByYXRpb25lIG1vZGkgYXJjaGl0ZWN0by4gQ3VtIGVycm9yIHBlcmZlcmVuZGlzIGhpYyBpdXJlLCBwcm92aWRlbnQgbGFib3JlLiBJcHN1bSBzaW50IGF0IHNlcXVpIGFsaXF1aWQgYXNzdW1lbmRhIHZlbGl0IGhpYyB0b3RhbSBpZCBhcGVyaWFtIGV4Y2VwdHVyaSwgbGF1ZGFudGl1bSBhbmltaSBmYWNlcmUsIGNvbW1vZGkgZWFydW0gdWxsYW0sIGF0cXVlIGV1bSBzYWVwZSByZWljaWVuZGlzIHF1b3MgcXVhZSBmdWdhIHRlbXBvcmEuIFF1aXMgYW5pbWkgbWludXMgbW9sZXN0aWFlIHVuZGUgZG9sb3JlbSBlc3NlIHNpbWlsaXF1ZSBkb2xvcnVtIGludmVudG9yZSBub3N0cnVtIHF1YXNpIGxhdWRhbnRpdW0gZXggcXVhbSBhbGlxdWFtIGFjY3VzYW11cyBjdW1xdWUgcXVvcyBkb2xvciBjb25zZWN0ZXR1ciwgZGVsZWN0dXMgcmVydW0/IFZlbGl0IHF1aXNxdWFtIGxhYm9yZSBxdWFlIHF1YWVyYXQgbWFpb3JlcyBxdWlkZW0gcmVwZWxsZW5kdXMgc2ltaWxpcXVlIGRvbG9yLCBhbWV0IG5paGlsIGF0LCBhdXRlbSBudW1xdWFtIHBvcnJvIGNvcnBvcmlzIHF1aWEgaW4gaGljIHBlcnNwaWNpYXRpcyBhbGlxdWFtLiBQcmFlc2VudGl1bSBjdXBpZGl0YXRlIGRpZ25pc3NpbW9zIG5hbSBkZWJpdGlzIGV4IGVycm9yIGlsbG8gaWQgaW5jaWR1bnQgZXZlbmlldCwgaXN0ZSBtaW51cyBlc3NlIHNhcGllbnRlIHBlcnNwaWNpYXRpcyBlYSBlYXF1ZSBhbGlxdWFtIHBlcmZlcmVuZGlzIGRlc2VydW50LiBFdCwgbWFpb3JlcyBzYXBpZW50ZSwgZGljdGEgcGFyaWF0dXIgZXggbGFib3J1bSBxdWlkZW0sIGRlYml0aXMgbm9uIG1vZGkgYXJjaGl0ZWN0byBkb2xvcnVtIG1hZ25pIHNpdCBub3N0cnVtIGl1c3RvIGVhcXVlIG9wdGlvIGFjY3VzYW11cyBhc3N1bWVuZGEgcmVwdWRpYW5kYWUgdml0YWUgZnVnaXQgbmFtIHF1YXMgaXRhcXVlIGVhIGFjY3VzYW50aXVtLiBWZXJvIGZ1Z2lhdCBmdWdpdCBjb3Jwb3JpcyB1dCBtb2RpLiBEb2xvcmVtcXVlLCBuZWNlc3NpdGF0aWJ1cyBxdWlhISBRdWFzaSB0ZW1wb3JpYnVzIHJlcHJlaGVuZGVyaXQgYSBhbmltaSBlaXVzLCBvZmZpY2lpcyBwb3JybyBlYSEgT2RpdCBub24sIGFzcGVyaW9yZXMgbnVtcXVhbSBxdWFlIG1haW9yZXMgc2VkIHZlbGl0IGFsaXF1aWQgdGVtcG9yYSBtYWduaSBuZW1vIGlwc2FtIHRlbmV0dXIgdGVtcG9yZSBkaXN0aW5jdGlvLCBpbmNpZHVudCBzYWVwZSBtb2xlc3RpYWUgcXVvZCBhcmNoaXRlY3RvIG5vc3RydW0gYWNjdXNhbnRpdW0sIHBlcmZlcmVuZGlzIHJlcGVsbGVuZHVzIHNpbWlsaXF1ZSBldmVuaWV0IHZvbHVwdGF0ZW0gY29ycnVwdGkuIEEgaWxsbyBpcHN1bSBjb3JydXB0aSBwZXJzcGljaWF0aXMgcmVjdXNhbmRhZSB0ZW1wb3JlIHNhZXBlIHJlcHVkaWFuZGFlLiBDdW1xdWUsIHZlbGl0IHF1aXMgcmVwZWxsYXQgcmF0aW9uZSwgdmVsIGV4cGxpY2FibyBjb21tb2RpIHRlbmV0dXIgZXZlbmlldCBpbXBlZGl0IGVhIG5lc2NpdW50IGRvbG9yZSBpbiBpcHNhbSBldCBwbGFjZWF0IG9mZmljaWlzIGNvbnNlcXVhdHVyLiBRdWFlIG5lcXVlIGltcGVkaXQgcmVjdXNhbmRhZSwgb2ZmaWNpaXMgdmVybyBtaW51cyBmdWdpdCBhbGlhcyBwZXJmZXJlbmRpcyEgUXVhZXJhdCBpdXN0byBxdWlkZW0gZGVsZW5pdGksIG9mZmljaWEgc3VudCBmdWdpdCwgc2ludCBvZGlvIGVycm9yLCBzZXF1aSBmdWdhIHNhZXBlIGRlYml0aXMgZXhwbGljYWJvIGFjY3VzYW50aXVtIGRvbG9yZW1xdWUgaXN0ZSBpdXJlIGRlc2VydW50LmAsXHJcblx0XHRcdGVxdWlwZW1lbnRJbnRlcmlldXI6ICd0cnVjMSx0cnVjMix0cnVjMyx0cnVjNCx0cnVjNScsXHJcblx0XHRcdHRleHRlUGlzY2luZTogYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEZ1Z2Egc2FlcGUgY29ycG9yaXMgbmlzaSBudW1xdWFtIHJhdGlvbmUgbW9kaSBhcmNoaXRlY3RvLiBDdW0gZXJyb3IgcGVyZmVyZW5kaXMgaGljIGl1cmUsIHByb3ZpZGVudCBsYWJvcmUuIElwc3VtIHNpbnQgYXQgc2VxdWkgYWxpcXVpZCBhc3N1bWVuZGEgdmVsaXQgaGljIHRvdGFtIGlkIGFwZXJpYW0gZXhjZXB0dXJpLCBsYXVkYW50aXVtIGFuaW1pIGZhY2VyZSwgY29tbW9kaSBlYXJ1bSB1bGxhbSwgYXRxdWUgZXVtIHNhZXBlIHJlaWNpZW5kaXMgcXVvcyBxdWFlIGZ1Z2EgdGVtcG9yYS4gUXVpcyBhbmltaSBtaW51cyBtb2xlc3RpYWUgdW5kZSBkb2xvcmVtIGVzc2Ugc2ltaWxpcXVlIGRvbG9ydW0gaW52ZW50b3JlIG5vc3RydW0gcXVhc2kgbGF1ZGFudGl1bSBleCBxdWFtIGFsaXF1YW0gYWNjdXNhbXVzIGN1bXF1ZSBxdW9zIGRvbG9yIGNvbnNlY3RldHVyLCBkZWxlY3R1cyByZXJ1bT8gVmVsaXQgcXVpc3F1YW0gbGFib3JlIHF1YWUgcXVhZXJhdCBtYWlvcmVzIHF1aWRlbSByZXBlbGxlbmR1cyBzaW1pbGlxdWUgZG9sb3IsIGFtZXQgbmloaWwgYXQsIGF1dGVtIG51bXF1YW0gcG9ycm8gY29ycG9yaXMgcXVpYSBpbiBoaWMgcGVyc3BpY2lhdGlzIGFsaXF1YW0uIFByYWVzZW50aXVtIGN1cGlkaXRhdGUgZGlnbmlzc2ltb3MgbmFtIGRlYml0aXMgZXggZXJyb3IgaWxsbyBpZCBpbmNpZHVudCBldmVuaWV0LCBpc3RlIG1pbnVzIGVzc2Ugc2FwaWVudGUgcGVyc3BpY2lhdGlzIGVhIGVhcXVlIGFsaXF1YW0gcGVyZmVyZW5kaXMgZGVzZXJ1bnQuIEV0LCBtYWlvcmVzIHNhcGllbnRlLCBkaWN0YSBwYXJpYXR1ciBleCBsYWJvcnVtIHF1aWRlbSwgZGViaXRpcyBub24gbW9kaSBhcmNoaXRlY3RvIGRvbG9ydW0gbWFnbmkgc2l0IG5vc3RydW0gaXVzdG8gZWFxdWUgb3B0aW8gYWNjdXNhbXVzIGFzc3VtZW5kYSByZXB1ZGlhbmRhZSB2aXRhZSBmdWdpdCBuYW0gcXVhcyBpdGFxdWUgZWEgYWNjdXNhbnRpdW0uIFZlcm8gZnVnaWF0IGZ1Z2l0IGNvcnBvcmlzIHV0IG1vZGkuIERvbG9yZW1xdWUsIG5lY2Vzc2l0YXRpYnVzIHF1aWEhIFF1YXNpIHRlbXBvcmlidXMgcmVwcmVoZW5kZXJpdCBhIGFuaW1pIGVpdXMsIG9mZmljaWlzIHBvcnJvIGVhISBPZGl0IG5vbiwgYXNwZXJpb3JlcyBudW1xdWFtIHF1YWUgbWFpb3JlcyBzZWQgdmVsaXQgYWxpcXVpZCB0ZW1wb3JhIG1hZ25pIG5lbW8gaXBzYW0gdGVuZXR1ciB0ZW1wb3JlIGRpc3RpbmN0aW8sIGluY2lkdW50IHNhZXBlIG1vbGVzdGlhZSBxdW9kIGFyY2hpdGVjdG8gbm9zdHJ1bSBhY2N1c2FudGl1bSwgcGVyZmVyZW5kaXMgcmVwZWxsZW5kdXMgc2ltaWxpcXVlIGV2ZW5pZXQgdm9sdXB0YXRlbSBjb3JydXB0aS4gQSBpbGxvIGlwc3VtIGNvcnJ1cHRpIHBlcnNwaWNpYXRpcyByZWN1c2FuZGFlIHRlbXBvcmUgc2FlcGUgcmVwdWRpYW5kYWUuIEN1bXF1ZSwgdmVsaXQgcXVpcyByZXBlbGxhdCByYXRpb25lLCB2ZWwgZXhwbGljYWJvIGNvbW1vZGkgdGVuZXR1ciBldmVuaWV0IGltcGVkaXQgZWEgbmVzY2l1bnQgZG9sb3JlIGluIGlwc2FtIGV0IHBsYWNlYXQgb2ZmaWNpaXMgY29uc2VxdWF0dXIuIFF1YWUgbmVxdWUgaW1wZWRpdCByZWN1c2FuZGFlLCBvZmZpY2lpcyB2ZXJvIG1pbnVzIGZ1Z2l0IGFsaWFzIHBlcmZlcmVuZGlzISBRdWFlcmF0IGl1c3RvIHF1aWRlbSBkZWxlbml0aSwgb2ZmaWNpYSBzdW50IGZ1Z2l0LCBzaW50IG9kaW8gZXJyb3IsIHNlcXVpIGZ1Z2Egc2FlcGUgZGViaXRpcyBleHBsaWNhYm8gYWNjdXNhbnRpdW0gZG9sb3JlbXF1ZSBpc3RlIGl1cmUgZGVzZXJ1bnQuYCxcclxuXHRcdFx0ZXF1aXBlbWVudFBpc2NpbmU6ICd0cnVjMSx0cnVjMix0cnVjMyx0cnVjNCx0cnVjNScsXHJcblx0XHRcdHRleHRlOiBgQ2UgZ8OudGUgYSAxMCBjaGFtYnJlcyBkb250IDUgYXZlYyBzYWxsZSBkZSBiYWluIHByaXbDqWUgKyAyIGRvcnRvaXJzIGRlIDEwIHBsYWNlcyBjaGFjdW4uIFVuZSBncmFuZGUgc2FsbGUgcGVybWV0IGTigJlhY2N1ZWlsbGlyIGRlcyByw6ljZXB0aW9ucy5cclxuXHJcbiAgICAgICAgICAgIFVuZSBwaXNjaW5lIGVzdCBwcsOpdnVlIGRhbnMgY2UgZ8OudGUsIGxhIGNvbnN0cnVjdGlvbiBkw6lidXRlcmEgZW4gYXZyaWwgMjAyMSwgZWxsZSBzZXJhIG9ww6lyYXRpb25uZWxsZSBwb3VyIGxlcyBmw6p0ZXMgZGUgZmluIGTigJlhbm7DqWUgMjAyMVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYCxcclxuXHRcdFx0dmlkZW9MaW5rOlxyXG5cdFx0XHRcdCc8aWZyYW1lIHdpZHRoPVwiNTYwXCIgaGVpZ2h0PVwiMzE1XCIgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvRXIwMUs2bklmNTRcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+JyxcclxuXHRcdFx0Y2FsZW5kcmllckxpbms6XHJcblx0XHRcdFx0JzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9jYWxlbmRhci5nb29nbGUuY29tL2NhbGVuZGFyL2VtYmVkP3Nob3dUaXRsZT0wJnNob3dQcmludD0wJnNob3dUej0wJmhlaWdodD02MDAmd2tzdD0yJmJnY29sb3I9JTIzRkZGRkZGJnNyYz0zYnZtNGFhamoxYjR1ZnU5ZW8xYmxtMnBiNCU0MGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20mY29sb3I9JTIzQjEzNjVGJnNyYz1mci5mcmVuY2glMjNob2xpZGF5JTQwZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29tJmNvbG9yPSUyMzI5NTJBMyZzcmM9ZzgyZDY4ZGhrbW03czRwcG81MzU0N2prZGclNDBncm91cC5jYWxlbmRhci5nb29nbGUuY29tJmNvbG9yPSUyMzMzMzMzMyZjdHo9RXVyb3BlJTJGUGFyaXNcIiBzdHlsZT1cImJvcmRlci13aWR0aDowXCIgd2lkdGg9XCI4MDBcIiBoZWlnaHQ9XCI2MDBcIiBmcmFtZWJvcmRlcj1cIjBcIiBzY3JvbGxpbmc9XCJub1wiPjwvaWZyYW1lPicsXHJcblx0XHRcdGNvdWxldXIxOiAnI2RlNzZiOScsXHJcblx0XHRcdGNvdWxldXIyOiAnIzExMTExMScsXHJcblx0XHRcdHRhcmlmRGVCYXNlOiAnOTMwJyxcclxuXHRcdFx0blBlcnM6ICcyMCcsXHJcblx0XHRcdHN1cHBsZW1lbnRQYXJQZXJzOiAnMTUnLFxyXG5cdFx0XHR0YXJpZlBhclBlcnNQYXJOdWl0OiAnMjUnLFxyXG5cdFx0XHRmdE1lbmFnZTogJzE2MCcsXHJcblx0XHRcdGZ0TGl0OiAnNjAnLFxyXG5cdFx0XHR0cm9pc051aXRlZXM6ICcyMjAnLFxyXG5cdFx0XHRxdWF0cmVOdWl0ZWVzOiAnNDMwJyxcclxuXHRcdFx0dW5lTnVpdGVlOiAnODAnLFxyXG5cdFx0XHRiYXNzZVNhaXNvbjogJzM4MCcsXHJcblx0XHRcdG1veWVubmVTYWlzb246ICcxNjAnLFxyXG5cdFx0XHRoYXV0ZVNhaXNvbjogJzE4MCcsXHJcblx0XHRcdG5vZWw6ICc2NzAnLFxyXG5cdFx0XHRub3V2ZWxBbjogJzIwMCcsXHJcblx0XHR9LFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdGNvbnN0IHN0ZXBzID0gZ2V0U3RlcHMoKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcclxuXHRcdHNldEFjdGl2ZVN0ZXAoKHByZXZBY3RpdmVTdGVwKSA9PiBwcmV2QWN0aXZlU3RlcCArIDEpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUJhY2sgPSAoKSA9PiB7XHJcblx0XHRzZXRBY3RpdmVTdGVwKChwcmV2QWN0aXZlU3RlcCkgPT4gcHJldkFjdGl2ZVN0ZXAgLSAxKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcclxuXHRcdHNldEFjdGl2ZVN0ZXAoMCk7XHJcblx0fTtcclxuXHJcblx0ZnVuY3Rpb24gZ2V0U3RlcENvbnRlbnQoc3RlcCkge1xyXG5cdFx0c3dpdGNoIChzdGVwKSB7XHJcblx0XHRcdGNhc2UgMDpcclxuXHRcdFx0XHRyZXR1cm4gPEZvcm1JbmZvc0dlbmUgY2xhc3Nlcz17Y2xhc3Nlc30gcmVnaXN0ZXI9e3JlZ2lzdGVyfSAvPjtcclxuXHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHQ8Rm9ybUluZm9zRGl2ZXJzZXMgY2xhc3Nlcz17Y2xhc3Nlc30gcmVnaXN0ZXI9e3JlZ2lzdGVyfSAvPlxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0PEZvcm1JbmZvc1ByYXRpcXVlcyBjbGFzc2VzPXtjbGFzc2VzfSByZWdpc3Rlcj17cmVnaXN0ZXJ9IC8+XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdHJldHVybiA8Rm9ybUluZm9zUGFnZXMgY2xhc3Nlcz17Y2xhc3Nlc30gcmVnaXN0ZXI9e3JlZ2lzdGVyfSAvPjtcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRyZXR1cm4gJ0VycmV1cic7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChkYXRhKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZygnc3VibWl0Jyk7XHJcblx0XHRzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKCdvblN1Ym1pdCBkYXRhID0+JywgZGF0YSk7XHJcblx0XHRjcmVhdGVHaXRlKGRhdGEsIHRva2VuKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3Jlc3VsdCB2YXV0ID0+JywgcmVzdWx0KTtcclxuXHRcdFx0aWYgKHJlc3VsdC5lcnJvcikge1xyXG5cdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xyXG5cdFx0XHRcdHNuYWNrYmFyU2hvd01lc3NhZ2UoYCR7cmVzdWx0LmVycm9yfWApO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHJlc3VsdC5kZWphUmVzZXJ2ZU1lc3NhZ2UpIHtcclxuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHRcdFx0XHRzbmFja2JhclNob3dNZXNzYWdlKGAke3Jlc3VsdC5kZWphUmVzZXJ2ZU1lc3NhZ2V9YCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHRcdFx0c25hY2tiYXJTaG93TWVzc2FnZShgJHtyZXN1bHQubWVzc2FnZX1gLCAnc3VjY2VzcycpO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Um91dGVyLnB1c2goYC9hZG1pbi9naXRlc2AsIG51bGwsIHtcclxuXHRcdFx0XHRcdFx0c2hhbGxvdzogdHJ1ZSxcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0sIDMwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PENvbnRhaW5lcj5cclxuXHRcdFx0e2xvYWRpbmcgJiYgPENpcmN1bGFyUHJvZ3Jlc3MgLz59XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcblx0XHRcdFx0XHQ8U3RlcHBlclxyXG5cdFx0XHRcdFx0XHRhbHRlcm5hdGl2ZUxhYmVsXHJcblx0XHRcdFx0XHRcdGFjdGl2ZVN0ZXA9e2FjdGl2ZVN0ZXB9XHJcblx0XHRcdFx0XHRcdGNvbm5lY3Rvcj17PENvbG9ybGliQ29ubmVjdG9yIC8+fT5cclxuXHRcdFx0XHRcdFx0e3N0ZXBzLm1hcCgobGFiZWwpID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8U3RlcCBrZXk9e2xhYmVsfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxTdGVwTGFiZWwgU3RlcEljb25Db21wb25lbnQ9e0NvbG9ybGliU3RlcEljb259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7bGFiZWx9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1N0ZXBMYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8L1N0ZXA+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PC9TdGVwcGVyPlxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0e2FjdGl2ZVN0ZXAgPT09IHN0ZXBzLmxlbmd0aCA/IChcclxuXHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmluc3RydWN0aW9uc30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFRvdXRlcyBsZXMgY2hhbXBzIG9udCBiaWVuIMOpdMOpcyByZW1wbGlzID8gU2lcclxuXHRcdFx0XHRcdFx0XHRcdFx0b3VpLCB2YWxpZGVyIHBvdXIgY3LDqWVyIGNlIGfDrnRlICFcclxuXHRcdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2FjdGl2ZVN0ZXAgPT09IDB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZUJhY2t9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRSZXRvdXJcclxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdzdWJtaXQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I9J3ByaW1hcnknXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRWYWxpZGVyXHJcblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmluc3RydWN0aW9uc30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtnZXRTdGVwQ29udGVudChhY3RpdmVTdGVwKX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHRcdDxHcmlkXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRhaW5lclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkaXJlY3Rpb249J3JvdydcclxuXHRcdFx0XHRcdFx0XHRcdFx0anVzdGlmeT0nc3BhY2UtYmV0d2VlbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtcz0nY2VudGVyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXthY3RpdmVTdGVwID09PSAwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZUJhY2t9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0UmV0b3VyXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcj0ncHJpbWFyeSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVOZXh0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFN1aXZhbnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9Db250YWluZXI+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIod2l0aFNuYWNrYmFyKEZvcm1DcmVhdGVHaXRlKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=