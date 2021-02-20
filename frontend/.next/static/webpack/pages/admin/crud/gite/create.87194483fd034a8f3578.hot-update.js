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
      detailGite: "Le g\xEEte est situ\xE9 81 route de Stenay  \xE0 600 m de la commune de  Nouart (08240). Pour l\u2019instant il n\u2019y a pas  encore de piscine, mais un SPA, billard, baby foot, etc.\n\n                Tout le n\xE9cessaire est pr\xE9vu pour recevoir une cinquantaine de personnes et une grande chambre froide permet de stocker l\u2019alimentation.\n                \n                Il y a 10 chambres et 2 dortoirs. \n                \n                Une piscine est pr\xE9vue sur ce site, la construction va d\xE9buter en avril 2021 pour se terminer pour les f\xEAtes de fin d\u2019ann\xE9e 2021. Les locations apr\xE8s cette date subiront une augmentation variant entre 500 et 600 \u20AC par rapport au tarif calcul\xE9 actuellement.\n                \n                ",
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
            lineNumber: 297,
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
            lineNumber: 300,
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
            lineNumber: 304,
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
            lineNumber: 307,
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
              console.log('onSubmit data =>', data); // createGite(data, token).then((result) => {
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

            case 3:
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
      lineNumber: 339,
      columnNumber: 3
    }
  }, loading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__["CircularProgress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 16
    }
  }), __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 4
    }
  }, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_9__["default"], {
    alternativeLabel: true,
    activeStep: activeStep,
    connector: __jsx(ColorlibConnector, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 18
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 6
    }
  }, steps.map(function (label) {
    return __jsx(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 8
      }
    }, __jsx(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_12__["default"], {
      StepIconComponent: ColorlibStepIcon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 9
      }
    }, label));
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 6
    }
  }, console.log('step :', activeStep), console.log('lenght :', steps.length), activeStep === steps.length ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    type: "submit",
    variant: "contained",
    color: "primary",
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 8
    }
  }, "Valider") : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.instructions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
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
      lineNumber: 372,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    disabled: activeStep === 0,
    onClick: handleBack,
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
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
      lineNumber: 384,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9naXRlcy9Gb3JtQ3JlYXRlR2l0ZS5qcyJdLCJuYW1lcyI6WyJBbGVydCIsInByb3BzIiwiUW9udG9Db25uZWN0b3IiLCJ3aXRoU3R5bGVzIiwiYWx0ZXJuYXRpdmVMYWJlbCIsInRvcCIsImxlZnQiLCJyaWdodCIsImFjdGl2ZSIsImJvcmRlckNvbG9yIiwiY29tcGxldGVkIiwibGluZSIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwiU3RlcENvbm5lY3RvciIsInVzZVFvbnRvU3RlcEljb25TdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImNvbG9yIiwiZGlzcGxheSIsImhlaWdodCIsImFsaWduSXRlbXMiLCJjaXJjbGUiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsImZvbnRTaXplIiwiUW9udG9TdGVwSWNvbiIsImNsYXNzZXMiLCJjbHN4IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsIkNvbG9ybGliQ29ubmVjdG9yIiwiYmFja2dyb3VuZEltYWdlIiwiYm9yZGVyIiwidXNlQ29sb3JsaWJTdGVwSWNvblN0eWxlcyIsImp1c3RpZnlDb250ZW50IiwiYm94U2hhZG93IiwiQ29sb3JsaWJTdGVwSWNvbiIsImljb25zIiwiU3RyaW5nIiwiaWNvbiIsIm5vZGUiLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsImJ1dHRvbiIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsImluc3RydWN0aW9ucyIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImZvcm1Db250cm9sIiwibWFyZ2luIiwibWluV2lkdGgiLCJzZWxlY3RFbXB0eSIsInRleHRGaWVsZCIsImdldFN0ZXBzIiwiRm9ybUNyZWF0ZUdpdGUiLCJzbmFja2JhclNob3dNZXNzYWdlIiwicm91dGVyIiwiZ2l0ZSIsInRva2VuIiwiZ2V0Q29va2llIiwidXNlU3RhdGUiLCJhY3RpdmVTdGVwIiwic2V0QWN0aXZlU3RlcCIsInVzZUZvcm0iLCJzaG91bGRVbnJlZ2lzdGVyIiwiZGVmYXVsdFZhbHVlcyIsIm5vbSIsImFkcmVzc2UiLCJjcCIsInZpbGxlIiwiY2FwYWNpdGVNYXgiLCJtdGl0bGUiLCJwcmVzR2l0ZVNFTyIsImRldGFpbEdpdGUiLCJ0ZXh0ZUV4dGVyaWV1ciIsImVxdWlwZW1lbnRFeHRlcmlldXIiLCJ0ZXh0ZUludGVyaWV1ciIsImVxdWlwZW1lbnRJbnRlcmlldXIiLCJ0ZXh0ZVBpc2NpbmUiLCJlcXVpcGVtZW50UGlzY2luZSIsInRleHRlIiwidmlkZW9MaW5rIiwiY2FsZW5kcmllckxpbmsiLCJjb3VsZXVyMSIsImNvdWxldXIyIiwidHJvaXNOdWl0ZWVzIiwicXVhdHJlTnVpdGVlcyIsInVuZU51aXRlZSIsImJhc3NlU2Fpc29uIiwibW95ZW5uZVNhaXNvbiIsImhhdXRlU2Fpc29uIiwibm9lbCIsIm5vdXZlbEFuIiwiY29udHJvbCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJzdGVwcyIsImhhbmRsZU5leHQiLCJwcmV2QWN0aXZlU3RlcCIsImhhbmRsZUJhY2siLCJoYW5kbGVSZXNldCIsImdldFN0ZXBDb250ZW50Iiwic3RlcCIsIm9uU3VibWl0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJsYWJlbCIsImxlbmd0aCIsIndpdGhSb3V0ZXIiLCJ3aXRoU25hY2tiYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQ3JCLFNBQU8s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QU8sRUFBQyxXQUZUO0FBR0MsU0FBSyxFQUFDLFNBSFA7QUFJQyxhQUFTLEVBQUV2RixPQUFPLENBQUNrQixNQUpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsR0FTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxxRUFBRDtBQUFZLGFBQVMsRUFBRWxCLE9BQU8sQ0FBQ3FCLFlBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTBELGNBQWMsQ0FBQzFDLFVBQUQsQ0FEaEIsQ0FERCxFQUlDLE1BQUMsK0RBQUQ7QUFDQyxhQUFTLE1BRFY7QUFFQyxhQUFTLEVBQUMsS0FGWDtBQUdDLFdBQU8sRUFBQyxlQUhUO0FBSUMsY0FBVSxFQUFDLFFBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtDLE1BQUMsaUVBQUQ7QUFDQyxZQUFRLEVBQUVBLFVBQVUsS0FBSyxDQUQxQjtBQUVDLFdBQU8sRUFBRXdDLFVBRlY7QUFHQyxhQUFTLEVBQUU3RSxPQUFPLENBQUNrQixNQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEQsRUFZQyxNQUFDLGlFQUFEO0FBQ0MsV0FBTyxFQUFDLFdBRFQ7QUFFQyxTQUFLLEVBQUMsU0FGUDtBQUdDLFdBQU8sRUFBRXlELFVBSFY7QUFJQyxhQUFTLEVBQUUzRSxPQUFPLENBQUNrQixNQUpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkQsQ0FKRCxDQVpGLENBYkQsQ0FERCxDQUhELENBREQ7QUE2REEsQ0EvS0Q7O0lBQU1ZLGM7VUFDV2QsUyxFQUc0QnVCLHdEOzs7TUFKdkNULGM7QUFpTFMscUVBQUEwRCwrREFBVSxPQUFDQyxtRUFBWSxDQUFDM0QsY0FBRCxDQUFiLENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvZ2l0ZS9jcmVhdGUuODcxOTQ0ODNmZDAzNGE4ZjM1NzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgU3RlcHBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdGVwcGVyJztcclxuaW1wb3J0IFN0ZXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcCc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBTdGVwTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcExhYmVsJztcclxuaW1wb3J0IENoZWNrIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGVjayc7XHJcbmltcG9ydCBTdGVwQ29ubmVjdG9yIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBDb25uZWN0b3InO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHsgd2l0aFNuYWNrYmFyIH0gZnJvbSAnLi4vLi4vLi4vSE9DL1NuYWNrYmFyJztcclxuaW1wb3J0IEZvcm1JbmZvc0dlbmUgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9naXRlcy9Gb3JtSW5mb3NHZW5lJztcclxuaW1wb3J0IEZvcm1JbmZvc0RpdmVyc2VzIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW4vZm9ybXMvZ2l0ZXMvRm9ybUluZm9zRGl2ZXJzZXMnO1xyXG5pbXBvcnQgRm9ybUluZm9zUHJhdGlxdWVzIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW4vZm9ybXMvZ2l0ZXMvRm9ybUluZm9zUHJhdGlxdWVzJztcclxuaW1wb3J0IEZvcm1JbmZvc1BhZ2VzIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW4vZm9ybXMvZ2l0ZXMvRm9ybUluZm9zUGFnZXMnO1xyXG5pbXBvcnQgUGljdHVyZUluUGljdHVyZUFsdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1BpY3R1cmVJblBpY3R1cmVBbHQnO1xyXG5pbXBvcnQgU3RhcnNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdGFycyc7XHJcbmltcG9ydCBNb25ldGl6YXRpb25Pbkljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vbmV0aXphdGlvbk9uJztcclxuaW1wb3J0IFBhZ2V2aWV3SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGFnZXZpZXcnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIENpcmN1bGFyUHJvZ3Jlc3MgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIEFsZXJ0KHByb3BzKSB7XHJcblx0cmV0dXJuIDxNdWlBbGVydCBlbGV2YXRpb249ezZ9IHZhcmlhbnQ9J2ZpbGxlZCcgey4uLnByb3BzfSAvPjtcclxufVxyXG5cclxuY29uc3QgUW9udG9Db25uZWN0b3IgPSB3aXRoU3R5bGVzKHtcclxuXHRhbHRlcm5hdGl2ZUxhYmVsOiB7XHJcblx0XHR0b3A6IDEwLFxyXG5cdFx0bGVmdDogJ2NhbGMoLTUwJSArIDE2cHgpJyxcclxuXHRcdHJpZ2h0OiAnY2FsYyg1MCUgKyAxNnB4KScsXHJcblx0fSxcclxuXHRhY3RpdmU6IHtcclxuXHRcdCcmICRsaW5lJzoge1xyXG5cdFx0XHRib3JkZXJDb2xvcjogJyM3ODRhZjQnLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGNvbXBsZXRlZDoge1xyXG5cdFx0JyYgJGxpbmUnOiB7XHJcblx0XHRcdGJvcmRlckNvbG9yOiAnIzc4NGFmNCcsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0bGluZToge1xyXG5cdFx0Ym9yZGVyQ29sb3I6ICcjZWFlYWYwJyxcclxuXHRcdGJvcmRlclRvcFdpZHRoOiAzLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAxLFxyXG5cdH0sXHJcbn0pKFN0ZXBDb25uZWN0b3IpO1xyXG5cclxuY29uc3QgdXNlUW9udG9TdGVwSWNvblN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdGNvbG9yOiAnI2VhZWFmMCcsXHJcblx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRoZWlnaHQ6IDIyLFxyXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0fSxcclxuXHRhY3RpdmU6IHtcclxuXHRcdGNvbG9yOiAnIzc4NGFmNCcsXHJcblx0fSxcclxuXHRjaXJjbGU6IHtcclxuXHRcdHdpZHRoOiA4LFxyXG5cdFx0aGVpZ2h0OiA4LFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAnNTAlJyxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcicsXHJcblx0fSxcclxuXHRjb21wbGV0ZWQ6IHtcclxuXHRcdGNvbG9yOiAnIzc4NGFmNCcsXHJcblx0XHR6SW5kZXg6IDEsXHJcblx0XHRmb250U2l6ZTogMTgsXHJcblx0fSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBRb250b1N0ZXBJY29uKHByb3BzKSB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVFvbnRvU3RlcEljb25TdHlsZXMoKTtcclxuXHRjb25zdCB7IGFjdGl2ZSwgY29tcGxldGVkIH0gPSBwcm9wcztcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwge1xyXG5cdFx0XHRcdFtjbGFzc2VzLmFjdGl2ZV06IGFjdGl2ZSxcclxuXHRcdFx0fSl9PlxyXG5cdFx0XHR7Y29tcGxldGVkID8gKFxyXG5cdFx0XHRcdDxDaGVjayBjbGFzc05hbWU9e2NsYXNzZXMuY29tcGxldGVkfSAvPlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNpcmNsZX0gLz5cclxuXHRcdFx0KX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcblFvbnRvU3RlcEljb24ucHJvcFR5cGVzID0ge1xyXG5cdC8qKlxyXG5cdCAqIFdoZXRoZXIgdGhpcyBzdGVwIGlzIGFjdGl2ZS5cclxuXHQgKi9cclxuXHRhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxyXG5cdC8qKlxyXG5cdCAqIE1hcmsgdGhlIHN0ZXAgYXMgY29tcGxldGVkLiBJcyBwYXNzZWQgdG8gY2hpbGQgY29tcG9uZW50cy5cclxuXHQgKi9cclxuXHRjb21wbGV0ZWQ6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuY29uc3QgQ29sb3JsaWJDb25uZWN0b3IgPSB3aXRoU3R5bGVzKHtcclxuXHRhbHRlcm5hdGl2ZUxhYmVsOiB7XHJcblx0XHR0b3A6IDIyLFxyXG5cdH0sXHJcblx0YWN0aXZlOiB7XHJcblx0XHQnJiAkbGluZSc6IHtcclxuXHRcdFx0YmFja2dyb3VuZEltYWdlOlxyXG5cdFx0XHRcdCdsaW5lYXItZ3JhZGllbnQoIDk1ZGVnLHJnYigyNDIsMTEzLDMzKSAwJSxyZ2IoMjMzLDY0LDg3KSA1MCUscmdiKDEzOCwzNSwxMzUpIDEwMCUpJyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRjb21wbGV0ZWQ6IHtcclxuXHRcdCcmICRsaW5lJzoge1xyXG5cdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6XHJcblx0XHRcdFx0J2xpbmVhci1ncmFkaWVudCggOTVkZWcscmdiKDI0MiwxMTMsMzMpIDAlLHJnYigyMzMsNjQsODcpIDUwJSxyZ2IoMTM4LDM1LDEzNSkgMTAwJSknLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGxpbmU6IHtcclxuXHRcdGhlaWdodDogMyxcclxuXHRcdGJvcmRlcjogMCxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJyNlYWVhZjAnLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAxLFxyXG5cdH0sXHJcbn0pKFN0ZXBDb25uZWN0b3IpO1xyXG5cclxuY29uc3QgdXNlQ29sb3JsaWJTdGVwSWNvblN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJyNjY2MnLFxyXG5cdFx0ekluZGV4OiAxLFxyXG5cdFx0Y29sb3I6ICcjZmZmJyxcclxuXHRcdHdpZHRoOiA1MCxcclxuXHRcdGhlaWdodDogNTAsXHJcblx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0fSxcclxuXHRhY3RpdmU6IHtcclxuXHRcdGJhY2tncm91bmRJbWFnZTpcclxuXHRcdFx0J2xpbmVhci1ncmFkaWVudCggMTM2ZGVnLCByZ2IoMjQyLDExMywzMykgMCUsIHJnYigyMzMsNjQsODcpIDUwJSwgcmdiKDEzOCwzNSwxMzUpIDEwMCUpJyxcclxuXHRcdGJveFNoYWRvdzogJzAgNHB4IDEwcHggMCByZ2JhKDAsMCwwLC4yNSknLFxyXG5cdH0sXHJcblx0Y29tcGxldGVkOiB7XHJcblx0XHRiYWNrZ3JvdW5kSW1hZ2U6XHJcblx0XHRcdCdsaW5lYXItZ3JhZGllbnQoIDEzNmRlZywgcmdiKDI0MiwxMTMsMzMpIDAlLCByZ2IoMjMzLDY0LDg3KSA1MCUsIHJnYigxMzgsMzUsMTM1KSAxMDAlKScsXHJcblx0fSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBDb2xvcmxpYlN0ZXBJY29uKHByb3BzKSB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZUNvbG9ybGliU3RlcEljb25TdHlsZXMoKTtcclxuXHRjb25zdCB7IGFjdGl2ZSwgY29tcGxldGVkIH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgaWNvbnMgPSB7XHJcblx0XHQxOiA8U3RhcnNJY29uIC8+LFxyXG5cdFx0MjogPFBpY3R1cmVJblBpY3R1cmVBbHRJY29uIC8+LFxyXG5cdFx0MzogPE1vbmV0aXphdGlvbk9uSWNvbiAvPixcclxuXHRcdDQ6IDxQYWdldmlld0ljb24gLz4sXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwge1xyXG5cdFx0XHRcdFtjbGFzc2VzLmFjdGl2ZV06IGFjdGl2ZSxcclxuXHRcdFx0XHRbY2xhc3Nlcy5jb21wbGV0ZWRdOiBjb21wbGV0ZWQsXHJcblx0XHRcdH0pfT5cclxuXHRcdFx0e2ljb25zW1N0cmluZyhwcm9wcy5pY29uKV19XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5Db2xvcmxpYlN0ZXBJY29uLnByb3BUeXBlcyA9IHtcclxuXHQvKipcclxuXHQgKiBXaGV0aGVyIHRoaXMgc3RlcCBpcyBhY3RpdmUuXHJcblx0ICovXHJcblx0YWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcclxuXHQvKipcclxuXHQgKiBNYXJrIHRoZSBzdGVwIGFzIGNvbXBsZXRlZC4gSXMgcGFzc2VkIHRvIGNoaWxkIGNvbXBvbmVudHMuXHJcblx0ICovXHJcblx0Y29tcGxldGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuXHQvKipcclxuXHQgKiBUaGUgbGFiZWwgZGlzcGxheWVkIGluIHRoZSBzdGVwIGljb24uXHJcblx0ICovXHJcblx0aWNvbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRyb290OiB7XHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdH0sXHJcblx0YnV0dG9uOiB7XHJcblx0XHRtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuXHR9LFxyXG5cdGluc3RydWN0aW9uczoge1xyXG5cdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0bWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdH0sXHJcblx0Zm9ybUNvbnRyb2w6IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdG1pbldpZHRoOiAnMTAwJScsXHJcblx0fSxcclxuXHRzZWxlY3RFbXB0eToge1xyXG5cdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdH0sXHJcblx0dGV4dEZpZWxkOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIGdldFN0ZXBzKCkge1xyXG5cdHJldHVybiBbXHJcblx0XHQnSW5mb3MgZ8OpbsOpcmFsZXMnLFxyXG5cdFx0J0luZm9zIGRpdmVyc2VzJyxcclxuXHRcdCdJbmZvcyBwcmF0aXF1ZXMgJiBmaW5hbmNpw6hyZXMnLFxyXG5cdFx0J0luZm9zIHBhZ2VzICYgU0VPJyxcclxuXHRdO1xyXG59XHJcblxyXG5jb25zdCBGb3JtQ3JlYXRlR2l0ZSA9ICh7IHNuYWNrYmFyU2hvd01lc3NhZ2UsIHJvdXRlciwgZ2l0ZSB9KSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cdGNvbnN0IFthY3RpdmVTdGVwLCBzZXRBY3RpdmVTdGVwXSA9IHVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IHsgY29udHJvbCwgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybSh7XHJcblx0XHRzaG91bGRVbnJlZ2lzdGVyOiBmYWxzZSxcclxuXHRcdGRlZmF1bHRWYWx1ZXM6IHtcclxuXHRcdFx0bm9tOiAnUGV0aXQgTmF5JyxcclxuXHRcdFx0YWRyZXNzZTogJzgxIHJvdXRlIGRlIFN0ZW5heScsXHJcblx0XHRcdGNwOiAnMDgyNDAnLFxyXG5cdFx0XHR2aWxsZTogJ05vdWFydCcsXHJcblx0XHRcdGNhcGFjaXRlTWF4OiAnNTgnLFxyXG5cdFx0XHRtdGl0bGU6XHJcblx0XHRcdFx0J0xlcyBHw650ZXMgV0FPIHwgTGUgZ8OudGUgZHUgUGV0aXQgTmF5IGF2ZWMgcGlzY2luZSBjaGF1ZmbDqWUgZXQgY291dmVydGUnLFxyXG5cdFx0XHRwcmVzR2l0ZVNFTzpcclxuXHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YWUgbmVjZXNzaXRhdGlidXMgcmVwcmVoZW5kZXJpdCBhbGlxdWlkIG1haW9yZXMgaXBzYW0gcXVpYnVzZGFtLCBlb3Mgb21uaXMgbWF4aW1lLCBwb3JybyByYXRpb25lIGN1cGlkaXRhdGUgdGVtcG9yZSBtaW5pbWEgcXVhcyB1bGxhbSBpdXJlIHZlcm8gZG9sb3JlbT8gSXBzdW0gc2l0IGVvcyBkb2xvciB0ZW1wb3JlIG5lbW8sIGV4IHF1aXNxdWFtIGJlYXRhZSB1dCwgdm9sdXB0YXRpYnVzLCBlbmltIHNpbWlsaXF1ZSBkb2xvcmU/IFF1aWEgZGVzZXJ1bnQgc29sdXRhIGFzcGVybmF0dXIgZG9sb3JpYnVzIGVzdC4gUXVpYSB0ZW1wb3JhIGFkaXBpc2NpIHF1b3MgcHJvdmlkZW50IHJhdGlvbmUgdm9sdXB0YXRpYnVzIGNvcnBvcmlzIGFuaW1pIGVhcnVtIGFjY3VzYW11cyBkb2xvcmUgbW9sZXN0aWFzIGlwc2EsIG5hbSByZXB1ZGlhbmRhZSBzaW1pbGlxdWUgY29ycnVwdGkgZXhlcmNpdGF0aW9uZW0gbm9uIG5lbW8sIG5lc2NpdW50IGRvbG9yZW0gcGVyZmVyZW5kaXMuIFZvbHVwdGF0ZSBpbiBhcmNoaXRlY3RvIGlsbHVtLCBpcHN1bSBtb2RpIHF1b2QsIGVhcXVlIGVsaWdlbmRpIHF1aSBkb2xvciBwb3JybyBkdWNpbXVzIGRpY3RhIGlzdGUgcXVhZXJhdCwgZXhlcmNpdGF0aW9uZW0gbnVtcXVhbS4gVGVtcG9yaWJ1cyByYXRpb25lLCBhY2N1c2FudGl1bSBhdCBleHBlZGl0YSBkZWxlY3R1cyB2ZWwgcXVpIHByYWVzZW50aXVtIG1pbnVzIGN1cGlkaXRhdGUuIEN1bHBhIG5lY2Vzc2l0YXRpYnVzIGNvbnNlcXVhdHVyIHNhcGllbnRlIHF1aWEgcXVpc3F1YW0gZXJyb3IgbmVxdWUgbmFtIGRvbG9yZW1xdWUgcGVyZmVyZW5kaXMgaGljIHZlcml0YXRpcywgaXVzdG8gZG9sb3JpYnVzIGN1bSB0ZW1wb3JlIHF1aWRlbSBhYiBtb2xlc3RpYWUsIGJlYXRhZSBldW0sIGJsYW5kaXRpaXMgZGVsZWN0dXMgcXVvZCBub2JpcyBmdWdpdD8gSWQsIHBlcmZlcmVuZGlzIHZlbGl0IHF1aSBlYXJ1bSByZXBlbGxlbmR1cyBpcHN1bSBlb3MgcGFyaWF0dXIgcXVhZSB2b2x1cHRhdGUsIGV0IGVsaWdlbmRpIG5lbW8gaXVzdG8gbGFib3JlIG1vbGVzdGlhZSBjb3JydXB0aSBjdW1xdWUgYXNwZXJuYXR1ciBvZmZpY2lpcy4gSW5jaWR1bnQhJyxcclxuXHRcdFx0ZGV0YWlsR2l0ZTogYExlIGfDrnRlIGVzdCBzaXR1w6kgODEgcm91dGUgZGUgU3RlbmF5ICDDoCA2MDAgbSBkZSBsYSBjb21tdW5lIGRlICBOb3VhcnQgKDA4MjQwKS4gUG91ciBs4oCZaW5zdGFudCBpbCBu4oCZeSBhIHBhcyAgZW5jb3JlIGRlIHBpc2NpbmUsIG1haXMgdW4gU1BBLCBiaWxsYXJkLCBiYWJ5IGZvb3QsIGV0Yy5cclxuXHJcbiAgICAgICAgICAgICAgICBUb3V0IGxlIG7DqWNlc3NhaXJlIGVzdCBwcsOpdnUgcG91ciByZWNldm9pciB1bmUgY2lucXVhbnRhaW5lIGRlIHBlcnNvbm5lcyBldCB1bmUgZ3JhbmRlIGNoYW1icmUgZnJvaWRlIHBlcm1ldCBkZSBzdG9ja2VyIGzigJlhbGltZW50YXRpb24uXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIElsIHkgYSAxMCBjaGFtYnJlcyBldCAyIGRvcnRvaXJzLiBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgVW5lIHBpc2NpbmUgZXN0IHByw6l2dWUgc3VyIGNlIHNpdGUsIGxhIGNvbnN0cnVjdGlvbiB2YSBkw6lidXRlciBlbiBhdnJpbCAyMDIxIHBvdXIgc2UgdGVybWluZXIgcG91ciBsZXMgZsOqdGVzIGRlIGZpbiBk4oCZYW5uw6llIDIwMjEuIExlcyBsb2NhdGlvbnMgYXByw6hzIGNldHRlIGRhdGUgc3ViaXJvbnQgdW5lIGF1Z21lbnRhdGlvbiB2YXJpYW50IGVudHJlIDUwMCBldCA2MDAg4oKsIHBhciByYXBwb3J0IGF1IHRhcmlmIGNhbGN1bMOpIGFjdHVlbGxlbWVudC5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYCxcclxuXHRcdFx0dGV4dGVFeHRlcmlldXI6IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBGdWdhIHNhZXBlIGNvcnBvcmlzIG5pc2kgbnVtcXVhbSByYXRpb25lIG1vZGkgYXJjaGl0ZWN0by4gQ3VtIGVycm9yIHBlcmZlcmVuZGlzIGhpYyBpdXJlLCBwcm92aWRlbnQgbGFib3JlLiBJcHN1bSBzaW50IGF0IHNlcXVpIGFsaXF1aWQgYXNzdW1lbmRhIHZlbGl0IGhpYyB0b3RhbSBpZCBhcGVyaWFtIGV4Y2VwdHVyaSwgbGF1ZGFudGl1bSBhbmltaSBmYWNlcmUsIGNvbW1vZGkgZWFydW0gdWxsYW0sIGF0cXVlIGV1bSBzYWVwZSByZWljaWVuZGlzIHF1b3MgcXVhZSBmdWdhIHRlbXBvcmEuIFF1aXMgYW5pbWkgbWludXMgbW9sZXN0aWFlIHVuZGUgZG9sb3JlbSBlc3NlIHNpbWlsaXF1ZSBkb2xvcnVtIGludmVudG9yZSBub3N0cnVtIHF1YXNpIGxhdWRhbnRpdW0gZXggcXVhbSBhbGlxdWFtIGFjY3VzYW11cyBjdW1xdWUgcXVvcyBkb2xvciBjb25zZWN0ZXR1ciwgZGVsZWN0dXMgcmVydW0/IFZlbGl0IHF1aXNxdWFtIGxhYm9yZSBxdWFlIHF1YWVyYXQgbWFpb3JlcyBxdWlkZW0gcmVwZWxsZW5kdXMgc2ltaWxpcXVlIGRvbG9yLCBhbWV0IG5paGlsIGF0LCBhdXRlbSBudW1xdWFtIHBvcnJvIGNvcnBvcmlzIHF1aWEgaW4gaGljIHBlcnNwaWNpYXRpcyBhbGlxdWFtLiBQcmFlc2VudGl1bSBjdXBpZGl0YXRlIGRpZ25pc3NpbW9zIG5hbSBkZWJpdGlzIGV4IGVycm9yIGlsbG8gaWQgaW5jaWR1bnQgZXZlbmlldCwgaXN0ZSBtaW51cyBlc3NlIHNhcGllbnRlIHBlcnNwaWNpYXRpcyBlYSBlYXF1ZSBhbGlxdWFtIHBlcmZlcmVuZGlzIGRlc2VydW50LiBFdCwgbWFpb3JlcyBzYXBpZW50ZSwgZGljdGEgcGFyaWF0dXIgZXggbGFib3J1bSBxdWlkZW0sIGRlYml0aXMgbm9uIG1vZGkgYXJjaGl0ZWN0byBkb2xvcnVtIG1hZ25pIHNpdCBub3N0cnVtIGl1c3RvIGVhcXVlIG9wdGlvIGFjY3VzYW11cyBhc3N1bWVuZGEgcmVwdWRpYW5kYWUgdml0YWUgZnVnaXQgbmFtIHF1YXMgaXRhcXVlIGVhIGFjY3VzYW50aXVtLiBWZXJvIGZ1Z2lhdCBmdWdpdCBjb3Jwb3JpcyB1dCBtb2RpLiBEb2xvcmVtcXVlLCBuZWNlc3NpdGF0aWJ1cyBxdWlhISBRdWFzaSB0ZW1wb3JpYnVzIHJlcHJlaGVuZGVyaXQgYSBhbmltaSBlaXVzLCBvZmZpY2lpcyBwb3JybyBlYSEgT2RpdCBub24sIGFzcGVyaW9yZXMgbnVtcXVhbSBxdWFlIG1haW9yZXMgc2VkIHZlbGl0IGFsaXF1aWQgdGVtcG9yYSBtYWduaSBuZW1vIGlwc2FtIHRlbmV0dXIgdGVtcG9yZSBkaXN0aW5jdGlvLCBpbmNpZHVudCBzYWVwZSBtb2xlc3RpYWUgcXVvZCBhcmNoaXRlY3RvIG5vc3RydW0gYWNjdXNhbnRpdW0sIHBlcmZlcmVuZGlzIHJlcGVsbGVuZHVzIHNpbWlsaXF1ZSBldmVuaWV0IHZvbHVwdGF0ZW0gY29ycnVwdGkuIEEgaWxsbyBpcHN1bSBjb3JydXB0aSBwZXJzcGljaWF0aXMgcmVjdXNhbmRhZSB0ZW1wb3JlIHNhZXBlIHJlcHVkaWFuZGFlLiBDdW1xdWUsIHZlbGl0IHF1aXMgcmVwZWxsYXQgcmF0aW9uZSwgdmVsIGV4cGxpY2FibyBjb21tb2RpIHRlbmV0dXIgZXZlbmlldCBpbXBlZGl0IGVhIG5lc2NpdW50IGRvbG9yZSBpbiBpcHNhbSBldCBwbGFjZWF0IG9mZmljaWlzIGNvbnNlcXVhdHVyLiBRdWFlIG5lcXVlIGltcGVkaXQgcmVjdXNhbmRhZSwgb2ZmaWNpaXMgdmVybyBtaW51cyBmdWdpdCBhbGlhcyBwZXJmZXJlbmRpcyEgUXVhZXJhdCBpdXN0byBxdWlkZW0gZGVsZW5pdGksIG9mZmljaWEgc3VudCBmdWdpdCwgc2ludCBvZGlvIGVycm9yLCBzZXF1aSBmdWdhIHNhZXBlIGRlYml0aXMgZXhwbGljYWJvIGFjY3VzYW50aXVtIGRvbG9yZW1xdWUgaXN0ZSBpdXJlIGRlc2VydW50LmAsXHJcblx0XHRcdGVxdWlwZW1lbnRFeHRlcmlldXI6ICd0cnVjMSx0cnVjMix0cnVjMyx0cnVjNCx0cnVjNScsXHJcblx0XHRcdHRleHRlSW50ZXJpZXVyOiBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRnVnYSBzYWVwZSBjb3Jwb3JpcyBuaXNpIG51bXF1YW0gcmF0aW9uZSBtb2RpIGFyY2hpdGVjdG8uIEN1bSBlcnJvciBwZXJmZXJlbmRpcyBoaWMgaXVyZSwgcHJvdmlkZW50IGxhYm9yZS4gSXBzdW0gc2ludCBhdCBzZXF1aSBhbGlxdWlkIGFzc3VtZW5kYSB2ZWxpdCBoaWMgdG90YW0gaWQgYXBlcmlhbSBleGNlcHR1cmksIGxhdWRhbnRpdW0gYW5pbWkgZmFjZXJlLCBjb21tb2RpIGVhcnVtIHVsbGFtLCBhdHF1ZSBldW0gc2FlcGUgcmVpY2llbmRpcyBxdW9zIHF1YWUgZnVnYSB0ZW1wb3JhLiBRdWlzIGFuaW1pIG1pbnVzIG1vbGVzdGlhZSB1bmRlIGRvbG9yZW0gZXNzZSBzaW1pbGlxdWUgZG9sb3J1bSBpbnZlbnRvcmUgbm9zdHJ1bSBxdWFzaSBsYXVkYW50aXVtIGV4IHF1YW0gYWxpcXVhbSBhY2N1c2FtdXMgY3VtcXVlIHF1b3MgZG9sb3IgY29uc2VjdGV0dXIsIGRlbGVjdHVzIHJlcnVtPyBWZWxpdCBxdWlzcXVhbSBsYWJvcmUgcXVhZSBxdWFlcmF0IG1haW9yZXMgcXVpZGVtIHJlcGVsbGVuZHVzIHNpbWlsaXF1ZSBkb2xvciwgYW1ldCBuaWhpbCBhdCwgYXV0ZW0gbnVtcXVhbSBwb3JybyBjb3Jwb3JpcyBxdWlhIGluIGhpYyBwZXJzcGljaWF0aXMgYWxpcXVhbS4gUHJhZXNlbnRpdW0gY3VwaWRpdGF0ZSBkaWduaXNzaW1vcyBuYW0gZGViaXRpcyBleCBlcnJvciBpbGxvIGlkIGluY2lkdW50IGV2ZW5pZXQsIGlzdGUgbWludXMgZXNzZSBzYXBpZW50ZSBwZXJzcGljaWF0aXMgZWEgZWFxdWUgYWxpcXVhbSBwZXJmZXJlbmRpcyBkZXNlcnVudC4gRXQsIG1haW9yZXMgc2FwaWVudGUsIGRpY3RhIHBhcmlhdHVyIGV4IGxhYm9ydW0gcXVpZGVtLCBkZWJpdGlzIG5vbiBtb2RpIGFyY2hpdGVjdG8gZG9sb3J1bSBtYWduaSBzaXQgbm9zdHJ1bSBpdXN0byBlYXF1ZSBvcHRpbyBhY2N1c2FtdXMgYXNzdW1lbmRhIHJlcHVkaWFuZGFlIHZpdGFlIGZ1Z2l0IG5hbSBxdWFzIGl0YXF1ZSBlYSBhY2N1c2FudGl1bS4gVmVybyBmdWdpYXQgZnVnaXQgY29ycG9yaXMgdXQgbW9kaS4gRG9sb3JlbXF1ZSwgbmVjZXNzaXRhdGlidXMgcXVpYSEgUXVhc2kgdGVtcG9yaWJ1cyByZXByZWhlbmRlcml0IGEgYW5pbWkgZWl1cywgb2ZmaWNpaXMgcG9ycm8gZWEhIE9kaXQgbm9uLCBhc3BlcmlvcmVzIG51bXF1YW0gcXVhZSBtYWlvcmVzIHNlZCB2ZWxpdCBhbGlxdWlkIHRlbXBvcmEgbWFnbmkgbmVtbyBpcHNhbSB0ZW5ldHVyIHRlbXBvcmUgZGlzdGluY3RpbywgaW5jaWR1bnQgc2FlcGUgbW9sZXN0aWFlIHF1b2QgYXJjaGl0ZWN0byBub3N0cnVtIGFjY3VzYW50aXVtLCBwZXJmZXJlbmRpcyByZXBlbGxlbmR1cyBzaW1pbGlxdWUgZXZlbmlldCB2b2x1cHRhdGVtIGNvcnJ1cHRpLiBBIGlsbG8gaXBzdW0gY29ycnVwdGkgcGVyc3BpY2lhdGlzIHJlY3VzYW5kYWUgdGVtcG9yZSBzYWVwZSByZXB1ZGlhbmRhZS4gQ3VtcXVlLCB2ZWxpdCBxdWlzIHJlcGVsbGF0IHJhdGlvbmUsIHZlbCBleHBsaWNhYm8gY29tbW9kaSB0ZW5ldHVyIGV2ZW5pZXQgaW1wZWRpdCBlYSBuZXNjaXVudCBkb2xvcmUgaW4gaXBzYW0gZXQgcGxhY2VhdCBvZmZpY2lpcyBjb25zZXF1YXR1ci4gUXVhZSBuZXF1ZSBpbXBlZGl0IHJlY3VzYW5kYWUsIG9mZmljaWlzIHZlcm8gbWludXMgZnVnaXQgYWxpYXMgcGVyZmVyZW5kaXMhIFF1YWVyYXQgaXVzdG8gcXVpZGVtIGRlbGVuaXRpLCBvZmZpY2lhIHN1bnQgZnVnaXQsIHNpbnQgb2RpbyBlcnJvciwgc2VxdWkgZnVnYSBzYWVwZSBkZWJpdGlzIGV4cGxpY2FibyBhY2N1c2FudGl1bSBkb2xvcmVtcXVlIGlzdGUgaXVyZSBkZXNlcnVudC5gLFxyXG5cdFx0XHRlcXVpcGVtZW50SW50ZXJpZXVyOiAndHJ1YzEsdHJ1YzIsdHJ1YzMsdHJ1YzQsdHJ1YzUnLFxyXG5cdFx0XHR0ZXh0ZVBpc2NpbmU6IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBGdWdhIHNhZXBlIGNvcnBvcmlzIG5pc2kgbnVtcXVhbSByYXRpb25lIG1vZGkgYXJjaGl0ZWN0by4gQ3VtIGVycm9yIHBlcmZlcmVuZGlzIGhpYyBpdXJlLCBwcm92aWRlbnQgbGFib3JlLiBJcHN1bSBzaW50IGF0IHNlcXVpIGFsaXF1aWQgYXNzdW1lbmRhIHZlbGl0IGhpYyB0b3RhbSBpZCBhcGVyaWFtIGV4Y2VwdHVyaSwgbGF1ZGFudGl1bSBhbmltaSBmYWNlcmUsIGNvbW1vZGkgZWFydW0gdWxsYW0sIGF0cXVlIGV1bSBzYWVwZSByZWljaWVuZGlzIHF1b3MgcXVhZSBmdWdhIHRlbXBvcmEuIFF1aXMgYW5pbWkgbWludXMgbW9sZXN0aWFlIHVuZGUgZG9sb3JlbSBlc3NlIHNpbWlsaXF1ZSBkb2xvcnVtIGludmVudG9yZSBub3N0cnVtIHF1YXNpIGxhdWRhbnRpdW0gZXggcXVhbSBhbGlxdWFtIGFjY3VzYW11cyBjdW1xdWUgcXVvcyBkb2xvciBjb25zZWN0ZXR1ciwgZGVsZWN0dXMgcmVydW0/IFZlbGl0IHF1aXNxdWFtIGxhYm9yZSBxdWFlIHF1YWVyYXQgbWFpb3JlcyBxdWlkZW0gcmVwZWxsZW5kdXMgc2ltaWxpcXVlIGRvbG9yLCBhbWV0IG5paGlsIGF0LCBhdXRlbSBudW1xdWFtIHBvcnJvIGNvcnBvcmlzIHF1aWEgaW4gaGljIHBlcnNwaWNpYXRpcyBhbGlxdWFtLiBQcmFlc2VudGl1bSBjdXBpZGl0YXRlIGRpZ25pc3NpbW9zIG5hbSBkZWJpdGlzIGV4IGVycm9yIGlsbG8gaWQgaW5jaWR1bnQgZXZlbmlldCwgaXN0ZSBtaW51cyBlc3NlIHNhcGllbnRlIHBlcnNwaWNpYXRpcyBlYSBlYXF1ZSBhbGlxdWFtIHBlcmZlcmVuZGlzIGRlc2VydW50LiBFdCwgbWFpb3JlcyBzYXBpZW50ZSwgZGljdGEgcGFyaWF0dXIgZXggbGFib3J1bSBxdWlkZW0sIGRlYml0aXMgbm9uIG1vZGkgYXJjaGl0ZWN0byBkb2xvcnVtIG1hZ25pIHNpdCBub3N0cnVtIGl1c3RvIGVhcXVlIG9wdGlvIGFjY3VzYW11cyBhc3N1bWVuZGEgcmVwdWRpYW5kYWUgdml0YWUgZnVnaXQgbmFtIHF1YXMgaXRhcXVlIGVhIGFjY3VzYW50aXVtLiBWZXJvIGZ1Z2lhdCBmdWdpdCBjb3Jwb3JpcyB1dCBtb2RpLiBEb2xvcmVtcXVlLCBuZWNlc3NpdGF0aWJ1cyBxdWlhISBRdWFzaSB0ZW1wb3JpYnVzIHJlcHJlaGVuZGVyaXQgYSBhbmltaSBlaXVzLCBvZmZpY2lpcyBwb3JybyBlYSEgT2RpdCBub24sIGFzcGVyaW9yZXMgbnVtcXVhbSBxdWFlIG1haW9yZXMgc2VkIHZlbGl0IGFsaXF1aWQgdGVtcG9yYSBtYWduaSBuZW1vIGlwc2FtIHRlbmV0dXIgdGVtcG9yZSBkaXN0aW5jdGlvLCBpbmNpZHVudCBzYWVwZSBtb2xlc3RpYWUgcXVvZCBhcmNoaXRlY3RvIG5vc3RydW0gYWNjdXNhbnRpdW0sIHBlcmZlcmVuZGlzIHJlcGVsbGVuZHVzIHNpbWlsaXF1ZSBldmVuaWV0IHZvbHVwdGF0ZW0gY29ycnVwdGkuIEEgaWxsbyBpcHN1bSBjb3JydXB0aSBwZXJzcGljaWF0aXMgcmVjdXNhbmRhZSB0ZW1wb3JlIHNhZXBlIHJlcHVkaWFuZGFlLiBDdW1xdWUsIHZlbGl0IHF1aXMgcmVwZWxsYXQgcmF0aW9uZSwgdmVsIGV4cGxpY2FibyBjb21tb2RpIHRlbmV0dXIgZXZlbmlldCBpbXBlZGl0IGVhIG5lc2NpdW50IGRvbG9yZSBpbiBpcHNhbSBldCBwbGFjZWF0IG9mZmljaWlzIGNvbnNlcXVhdHVyLiBRdWFlIG5lcXVlIGltcGVkaXQgcmVjdXNhbmRhZSwgb2ZmaWNpaXMgdmVybyBtaW51cyBmdWdpdCBhbGlhcyBwZXJmZXJlbmRpcyEgUXVhZXJhdCBpdXN0byBxdWlkZW0gZGVsZW5pdGksIG9mZmljaWEgc3VudCBmdWdpdCwgc2ludCBvZGlvIGVycm9yLCBzZXF1aSBmdWdhIHNhZXBlIGRlYml0aXMgZXhwbGljYWJvIGFjY3VzYW50aXVtIGRvbG9yZW1xdWUgaXN0ZSBpdXJlIGRlc2VydW50LmAsXHJcblx0XHRcdGVxdWlwZW1lbnRQaXNjaW5lOiAndHJ1YzEsdHJ1YzIsdHJ1YzMsdHJ1YzQsdHJ1YzUnLFxyXG5cdFx0XHR0ZXh0ZTogYENlIGfDrnRlIGEgMTAgY2hhbWJyZXMgZG9udCA1IGF2ZWMgc2FsbGUgZGUgYmFpbiBwcml2w6llICsgMiBkb3J0b2lycyBkZSAxMCBwbGFjZXMgY2hhY3VuLiBVbmUgZ3JhbmRlIHNhbGxlIHBlcm1ldCBk4oCZYWNjdWVpbGxpciBkZXMgcsOpY2VwdGlvbnMuXHJcblxyXG4gICAgICAgICAgICBVbmUgcGlzY2luZSBlc3QgcHLDqXZ1ZSBkYW5zIGNlIGfDrnRlLCBsYSBjb25zdHJ1Y3Rpb24gZMOpYnV0ZXJhIGVuIGF2cmlsIDIwMjEsIGVsbGUgc2VyYSBvcMOpcmF0aW9ubmVsbGUgcG91ciBsZXMgZsOqdGVzIGRlIGZpbiBk4oCZYW5uw6llIDIwMjFcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGAsXHJcblxyXG5cdFx0XHR2aWRlb0xpbms6XHJcblx0XHRcdFx0JzxpZnJhbWUgd2lkdGg9XCI1NjBcIiBoZWlnaHQ9XCIzMTVcIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9FcjAxSzZuSWY1NFwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nLFxyXG5cdFx0XHRjYWxlbmRyaWVyTGluazpcclxuXHRcdFx0XHQnPGlmcmFtZSBzcmM9XCJodHRwczovL2NhbGVuZGFyLmdvb2dsZS5jb20vY2FsZW5kYXIvZW1iZWQ/c2hvd1RpdGxlPTAmc2hvd1ByaW50PTAmc2hvd1R6PTAmaGVpZ2h0PTYwMCZ3a3N0PTImYmdjb2xvcj0lMjNGRkZGRkYmc3JjPTNidm00YWFqajFiNHVmdTllbzFibG0ycGI0JTQwZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbSZjb2xvcj0lMjNCMTM2NUYmc3JjPWZyLmZyZW5jaCUyM2hvbGlkYXklNDBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20mY29sb3I9JTIzMjk1MkEzJnNyYz1nODJkNjhkaGttbTdzNHBwbzUzNTQ3amtkZyU0MGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20mY29sb3I9JTIzMzMzMzMzJmN0ej1FdXJvcGUlMkZQYXJpc1wiIHN0eWxlPVwiYm9yZGVyLXdpZHRoOjBcIiB3aWR0aD1cIjgwMFwiIGhlaWdodD1cIjYwMFwiIGZyYW1lYm9yZGVyPVwiMFwiIHNjcm9sbGluZz1cIm5vXCI+PC9pZnJhbWU+JyxcclxuXHRcdFx0Y291bGV1cjE6ICcjZGU3NmI5JyxcclxuXHRcdFx0Y291bGV1cjI6ICcjMTExMTExJyxcclxuXHRcdFx0dHJvaXNOdWl0ZWVzOiAnMjIwJyxcclxuXHRcdFx0cXVhdHJlTnVpdGVlczogJzQzMCcsXHJcblx0XHRcdHVuZU51aXRlZTogJzgwJyxcclxuXHRcdFx0YmFzc2VTYWlzb246ICczODAnLFxyXG5cdFx0XHRtb3llbm5lU2Fpc29uOiAnMTYwJyxcclxuXHRcdFx0aGF1dGVTYWlzb246ICcxODAnLFxyXG5cdFx0XHRub2VsOiAnNjcwJyxcclxuXHRcdFx0bm91dmVsQW46ICcyMDAnLFxyXG5cdFx0fSxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHRjb25zdCBzdGVwcyA9IGdldFN0ZXBzKCk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XHJcblx0XHRzZXRBY3RpdmVTdGVwKChwcmV2QWN0aXZlU3RlcCkgPT4gcHJldkFjdGl2ZVN0ZXAgKyAxKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVCYWNrID0gKCkgPT4ge1xyXG5cdFx0c2V0QWN0aXZlU3RlcCgocHJldkFjdGl2ZVN0ZXApID0+IHByZXZBY3RpdmVTdGVwIC0gMSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XHJcblx0XHRzZXRBY3RpdmVTdGVwKDApO1xyXG5cdH07XHJcblxyXG5cdGZ1bmN0aW9uIGdldFN0ZXBDb250ZW50KHN0ZXApIHtcclxuXHRcdHN3aXRjaCAoc3RlcCkge1xyXG5cdFx0XHRjYXNlIDA6XHJcblx0XHRcdFx0cmV0dXJuIDxGb3JtSW5mb3NHZW5lIGNsYXNzZXM9e2NsYXNzZXN9IHJlZ2lzdGVyPXtyZWdpc3Rlcn0gLz47XHJcblx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0PEZvcm1JbmZvc0RpdmVyc2VzIGNsYXNzZXM9e2NsYXNzZXN9IHJlZ2lzdGVyPXtyZWdpc3Rlcn0gLz5cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdDxGb3JtSW5mb3NQcmF0aXF1ZXMgY2xhc3Nlcz17Y2xhc3Nlc30gcmVnaXN0ZXI9e3JlZ2lzdGVyfSAvPlxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdGNhc2UgMzpcclxuXHRcdFx0XHRyZXR1cm4gPEZvcm1JbmZvc1BhZ2VzIGNsYXNzZXM9e2NsYXNzZXN9IHJlZ2lzdGVyPXtyZWdpc3Rlcn0gLz47XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0cmV0dXJuICdFcnJldXInO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coJ3N1Ym1pdCcpO1xyXG5cdFx0c2V0TG9hZGluZyh0cnVlKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZygnb25TdWJtaXQgZGF0YSA9PicsIGRhdGEpO1xyXG5cdFx0Ly8gY3JlYXRlR2l0ZShkYXRhLCB0b2tlbikudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHQvLyBcdGNvbnNvbGUubG9nKCdyZXN1bHQgdmF1dCA9PicsIHJlc3VsdCk7XHJcblx0XHQvLyBcdGlmIChyZXN1bHQuZXJyb3IpIHtcclxuXHRcdC8vIFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHRcdC8vIFx0XHRzbmFja2JhclNob3dNZXNzYWdlKGAke3Jlc3VsdC5lcnJvcn1gKTtcclxuXHRcdC8vIFx0fSBlbHNlIGlmIChyZXN1bHQuZGVqYVJlc2VydmVNZXNzYWdlKSB7XHJcblx0XHQvLyBcdFx0c2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHQvLyBcdFx0c25hY2tiYXJTaG93TWVzc2FnZShgJHtyZXN1bHQuZGVqYVJlc2VydmVNZXNzYWdlfWApO1xyXG5cdFx0Ly8gXHR9IGVsc2Uge1xyXG5cdFx0Ly8gXHRcdHNldExvYWRpbmcoZmFsc2UpO1xyXG5cdFx0Ly8gXHRcdHNuYWNrYmFyU2hvd01lc3NhZ2UoYCR7cmVzdWx0Lm1lc3NhZ2V9YCwgJ3N1Y2Nlc3MnKTtcclxuXHRcdC8vIFx0XHQvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdC8vIFx0XHQvLyBcdFJvdXRlci5wdXNoKGAvYWRtaW4vZ2l0ZXNgLCBudWxsLCB7XHJcblx0XHQvLyBcdFx0Ly8gXHRcdHNoYWxsb3c6IHRydWUsXHJcblx0XHQvLyBcdFx0Ly8gXHR9KTtcclxuXHRcdC8vIFx0XHQvLyB9LCAzMDAwKTtcclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gfSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxDb250YWluZXI+XHJcblx0XHRcdHtsb2FkaW5nICYmIDxDaXJjdWxhclByb2dyZXNzIC8+fVxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcblx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG5cdFx0XHRcdFx0PFN0ZXBwZXJcclxuXHRcdFx0XHRcdFx0YWx0ZXJuYXRpdmVMYWJlbFxyXG5cdFx0XHRcdFx0XHRhY3RpdmVTdGVwPXthY3RpdmVTdGVwfVxyXG5cdFx0XHRcdFx0XHRjb25uZWN0b3I9ezxDb2xvcmxpYkNvbm5lY3RvciAvPn0+XHJcblx0XHRcdFx0XHRcdHtzdGVwcy5tYXAoKGxhYmVsKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PFN0ZXAga2V5PXtsYWJlbH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8U3RlcExhYmVsIFN0ZXBJY29uQ29tcG9uZW50PXtDb2xvcmxpYlN0ZXBJY29ufT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2xhYmVsfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9TdGVwTGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PC9TdGVwPlxyXG5cdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdDwvU3RlcHBlcj5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdHtjb25zb2xlLmxvZygnc3RlcCA6JywgYWN0aXZlU3RlcCl9XHJcblx0XHRcdFx0XHRcdHtjb25zb2xlLmxvZygnbGVuZ2h0IDonLCBzdGVwcy5sZW5ndGgpfVxyXG5cdFx0XHRcdFx0XHR7YWN0aXZlU3RlcCA9PT0gc3RlcHMubGVuZ3RoID8gKFxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3N1Ym1pdCdcclxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yPSdwcmltYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XHJcblx0XHRcdFx0XHRcdFx0XHRWYWxpZGVyXHJcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnN0cnVjdGlvbnN9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Z2V0U3RlcENvbnRlbnQoYWN0aXZlU3RlcCl9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250YWluZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9uPSdyb3cnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM9J2NlbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17YWN0aXZlU3RlcCA9PT0gMH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVCYWNrfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFJldG91clxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdjb250YWluZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I9J3ByaW1hcnknXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlTmV4dH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRTdWl2YW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvQ29udGFpbmVyPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKHdpdGhTbmFja2JhcihGb3JtQ3JlYXRlR2l0ZSkpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9