webpackHotUpdate_N_E("pages/admin/reservation/[id]",{

/***/ "./components/layout/AdminHeader.js":
/*!******************************************!*\
  !*** ./components/layout/AdminHeader.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var _node_modules_nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/nprogress/nprogress.css */ "./node_modules/nprogress/nprogress.css");
/* harmony import */ var _node_modules_nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_messageActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/messageActions */ "./actions/messageActions.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");


var _jsxFileName = "C:\\Users\\gites\\Dropbox\\gites-wao\\frontend\\components\\layout\\AdminHeader.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










function Alert(props) {
  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    elevation: 6,
    variant: "filled"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }));
}

_c = Alert;

next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeStart = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeComplete = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeError = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();
};

var AdminHeader = function AdminHeader(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      newMessages = _useState[0],
      setNewMessages = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      newReservation = _useState2[0],
      setnewReservation = _useState2[1];

  var recupNonLus = function recupNonLus() {
    Object(_actions_messageActions__WEBPACK_IMPORTED_MODULE_7__["countMessageNonLus"])().then(function (data) {
      if (data.error) {
        console.log(data.error);
      } else {
        setNewMessages(data);
      }
    });
  };

  var recupNvleRes = function recupNvleRes() {
    Object(_actions_messageActions__WEBPACK_IMPORTED_MODULE_7__["countMessageNonLus"])().then(function (data) {
      if (data.error) {
        console.log(data.error);
      } else {
        setnewReservation(data);
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    recupNonLus();
    recupNvleRes();
  }, []);
  var user = {
    name: 'Jossic LAPIERRE',
    isAdmin: true
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "d-flex",
    id: "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "bg-dark border-right",
    id: "sidebar-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "sidebar-heading text-white text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 6
    }
  }, "Les G\xEEtes WAO"), __jsx("div", {
    className: "sidebar-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "user-pic text-center pb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx("i", {
    className: "far fa-user-circle",
    style: {
      color: 'white',
      fontSize: '40px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 8
    }
  })), _actions_authActions__WEBPACK_IMPORTED_MODULE_5__["isAuth"] && __jsx("div", {
    className: "user-info text-white text-center pb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 8
    }
  }, __jsx("span", {
    className: "user-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, user.name), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }), __jsx("strong", {
    className: "user-role",
    style: {
      color: '#d3d3d3'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, user.isAdmin ? 'Administrateur' : 'Utilisateur'), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "user-status mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fa fa-circle",
    style: {
      color: '#00ff04',
      fontSize: '10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 10
    }
  }), __jsx("span", {
    style: {
      color: '#00ff04',
      fontSize: '15px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 10
    }
  }, ' ', "Connect\xE9")))), __jsx("div", {
    className: "list-group list-group-flush",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 6
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 8
    }
  }, __jsx("i", {
    className: "fas fa-tachometer-alt",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }), ' ', "Dashboard")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 8
    }
  }, __jsx("i", {
    className: "fas fa-chart-line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }), " Vue d'ensemble")), __jsx("div", {
    className: "accordion",
    id: "accordionExample",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "card text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "card-header",
    id: "headingOne",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 10
    }
  }, __jsx("button", {
    className: "btn btn-link btn-block text-left text-white collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#collapseOne",
    "aria-expanded": "false",
    "aria-controls": "collapseOne",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-igloo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 12
    }
  }), ' ', "Gestion des g\xEEtes"))), __jsx("div", {
    id: "collapseOne",
    className: "collapse show",
    "aria-labelledby": "headingOne",
    "data-parent": "#accordionExample",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin/gestionPages",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 10
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 12
    }
  }), ' ', "Gestion des g\xEEtes")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin/gestionImages",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 10
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 12
    }
  }), ' ', "Gestion des images")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin/gestionFichiers",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 10
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 12
    }
  }), ' ', "Gestion des fichiers")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin/gestionReviews",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 10
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 12
    }
  }), ' ', "Gestion des reviews")))), __jsx("div", {
    className: "card text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "card-header",
    id: "headingTwo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 10
    }
  }, __jsx("button", {
    className: "btn btn-link btn-block text-left text-white collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#collapseTwo",
    "aria-expanded": "false",
    "aria-controls": "collapseTwo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "far fa-file-alt",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 12
    }
  }), ' ', "Gestion des pages"))), __jsx("div", {
    id: "collapseTwo",
    className: "collapse",
    "aria-labelledby": "headingTwo",
    "data-parent": "#accordionExample",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin/gestionDivers",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 10
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 12
    }
  }), ' ', "Pages diverses")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin/gestionDivers/partenaires",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 10
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 12
    }
  }), ' ', "Pages Partenaires")))), __jsx("div", {
    className: "card text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "card-header",
    id: "headingThree",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 10
    }
  }, __jsx("button", {
    className: "btn btn-link btn-block text-left text-white collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#collapseThree",
    "aria-expanded": "false",
    "aria-controls": "collapseThree",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-bed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 12
    }
  }), ' ', "Gestion des r\xE9servations", newReservation > 0 && __jsx("span", {
    "class": "badge badge-pill badge-success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 13
    }
  }, newMessages)))), __jsx("div", {
    id: "collapseThree",
    className: "collapse",
    "aria-labelledby": "headingThree",
    "data-parent": "#accordionExample",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin/reservation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 10
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 12
    }
  }), ' ', "Liste des r\xE9servations"))))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin/messages",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 8
    }
  }, __jsx("i", {
    className: "fas fa-comments",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 9
    }
  }), " Messages", '  ', newMessages > 0 && __jsx("span", {
    "class": "badge badge-pill badge-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 10
    }
  }, newMessages))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 8
    }
  }, __jsx("i", {
    className: "fas fa-user-friends",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 9
    }
  }), " Gestion des utilisateurs")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 8
    }
  }, __jsx("i", {
    className: "fas fa-envelope",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 9
    }
  }), " Gestion des mails")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 8
    }
  }, __jsx("i", {
    className: "fas fa-user-tag",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 9
    }
  }), " Gestion des clients")))), __jsx("div", {
    id: "page-content-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 5
    }
  }, __jsx("nav", {
    className: "navbar navbar-expand-lg navbar-dark bg-dark border-bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 6
    }
  }, __jsx("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "navbar-toggler-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 8
    }
  })), __jsx("div", {
    className: "collapse navbar-collapse",
    id: "navbarSupportedContent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "navbar-nav ml-auto mt-2 mt-lg-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 8
    }
  }, __jsx("li", {
    className: "nav-item active",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "nav-link",
    href: "/admin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 10
    }
  }, "Espace Admin", ' ', __jsx("span", {
    className: "sr-only",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 11
    }
  }, "(current)"))), __jsx("li", {
    className: "nav-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "nav-link",
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 10
    }
  }, "Voir le site")), __jsx("li", {
    className: "nav-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "nav-link",
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_5__["logout"])(function () {
        return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.replace('/login');
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 10
    }
  }, "Deconnecter"))))), __jsx("div", {
    className: "container-fluid" // style={{ backgroundColor: '#1c2025', height: '100vh' }}
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 6
    }
  }, children))));
};

_s(AdminHeader, "m/CujRAd8FfYP7xQMfBuZjJiaVo=");

_c2 = AdminHeader;
/* harmony default export */ __webpack_exports__["default"] = (AdminHeader);

var _c, _c2;

$RefreshReg$(_c, "Alert");
$RefreshReg$(_c2, "AdminHeader");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvQWRtaW5IZWFkZXIuanMiXSwibmFtZXMiOlsiQWxlcnQiLCJwcm9wcyIsIlJvdXRlciIsIm9uUm91dGVDaGFuZ2VTdGFydCIsInVybCIsIk5Qcm9ncmVzcyIsInN0YXJ0Iiwib25Sb3V0ZUNoYW5nZUNvbXBsZXRlIiwiZG9uZSIsIm9uUm91dGVDaGFuZ2VFcnJvciIsIkFkbWluSGVhZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsIm5ld01lc3NhZ2VzIiwic2V0TmV3TWVzc2FnZXMiLCJuZXdSZXNlcnZhdGlvbiIsInNldG5ld1Jlc2VydmF0aW9uIiwicmVjdXBOb25MdXMiLCJjb3VudE1lc3NhZ2VOb25MdXMiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInJlY3VwTnZsZVJlcyIsInVzZUVmZmVjdCIsInVzZXIiLCJuYW1lIiwiaXNBZG1pbiIsImNvbG9yIiwiZm9udFNpemUiLCJpc0F1dGgiLCJjdXJzb3IiLCJsb2dvdXQiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUNyQixTQUFPLE1BQUMsOERBQUQ7QUFBVSxhQUFTLEVBQUUsQ0FBckI7QUFBd0IsV0FBTyxFQUFDO0FBQWhDLEtBQTZDQSxLQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVA7QUFDQTs7S0FGUUQsSzs7QUFJVEUsa0RBQU0sQ0FBQ0Msa0JBQVAsR0FBNEIsVUFBQ0MsR0FBRDtBQUFBLFNBQVNDLGdEQUFTLENBQUNDLEtBQVYsRUFBVDtBQUFBLENBQTVCOztBQUNBSixrREFBTSxDQUFDSyxxQkFBUCxHQUErQixVQUFDSCxHQUFEO0FBQUEsU0FBU0MsZ0RBQVMsQ0FB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QUM7QUFBQSxlQUNOL0Isa0RBQU0sQ0FBQ2dDLE9BQVAsQ0FBZSxRQUFmLENBRE07QUFBQSxPQUFELENBREU7QUFBQSxLQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsQ0FkRCxDQUhELENBaEJELENBREQsRUE0RUM7QUFDQyxhQUFTLEVBQUMsaUJBRFgsQ0FFQztBQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRXZCLFFBSkYsQ0E1RUQsQ0FsT0QsQ0FERCxDQUREO0FBMFRBLENBM1ZEOztHQUFNRCxXOztNQUFBQSxXO0FBNlZTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9yZXNlcnZhdGlvbi9baWRdLmIyZTk2MGQxYWI3NWIxZDQyMTY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBpc0F1dGgsIGxvZ291dCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9ucHJvZ3Jlc3MvbnByb2dyZXNzLmNzcyc7XHJcbmltcG9ydCB7IGNvdW50TWVzc2FnZU5vbkx1cyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvbWVzc2FnZUFjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTbmFja2JhciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IE11aUFsZXJ0IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQWxlcnQnO1xyXG5cclxuZnVuY3Rpb24gQWxlcnQocHJvcHMpIHtcclxuXHRyZXR1cm4gPE11aUFsZXJ0IGVsZXZhdGlvbj17Nn0gdmFyaWFudD0nZmlsbGVkJyB7Li4ucHJvcHN9IC8+O1xyXG59XHJcblxyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKHVybCkgPT4gTlByb2dyZXNzLnN0YXJ0KCk7XHJcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAodXJsKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUVycm9yID0gKHVybCkgPT4gTlByb2dyZXNzLmRvbmUoKTtcclxuY29uc3QgQWRtaW5IZWFkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblx0Y29uc3QgW25ld01lc3NhZ2VzLCBzZXROZXdNZXNzYWdlc10gPSB1c2VTdGF0ZSgwKTtcclxuXHRjb25zdCBbbmV3UmVzZXJ2YXRpb24sIHNldG5ld1Jlc2VydmF0aW9uXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuXHRjb25zdCByZWN1cE5vbkx1cyA9ICgpID0+IHtcclxuXHRcdGNvdW50TWVzc2FnZU5vbkx1cygpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXROZXdNZXNzYWdlcyhkYXRhKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgcmVjdXBOdmxlUmVzID0gKCkgPT4ge1xyXG5cdFx0Y291bnRNZXNzYWdlTm9uTHVzKCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldG5ld1Jlc2VydmF0aW9uKGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0cmVjdXBOb25MdXMoKTtcclxuXHRcdHJlY3VwTnZsZVJlcygpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc3QgdXNlciA9IHtcclxuXHRcdG5hbWU6ICdKb3NzaWMgTEFQSUVSUkUnLFxyXG5cdFx0aXNBZG1pbjogdHJ1ZSxcclxuXHR9O1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4JyBpZD0nd3JhcHBlcic+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2JnLWRhcmsgYm9yZGVyLXJpZ2h0JyBpZD0nc2lkZWJhci13cmFwcGVyJz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaWRlYmFyLWhlYWRpbmcgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlcic+XHJcblx0XHRcdFx0XHRcdExlcyBHw650ZXMgV0FPXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaWRlYmFyLWhlYWRlcic+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd1c2VyLXBpYyB0ZXh0LWNlbnRlciBwYi0yJz5cclxuXHRcdFx0XHRcdFx0XHR7LyogPGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdpbWctcmVzcG9uc2l2ZSBpbWctcm91bmRlZCdcclxuXHRcdFx0XHRcdFx0XHRcdHNyYz0nL2ltYWdlcy9sb2dvdjQtMTAyNHg0OTYucG5nJ1xyXG5cdFx0XHRcdFx0XHRcdFx0YWx0PSdVc2VyIHBpY3R1cmUnXHJcblx0XHRcdFx0XHRcdFx0Lz4gKi99XHJcblx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmFyIGZhLXVzZXItY2lyY2xlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICd3aGl0ZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiAnNDBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHR9fT48L2k+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHR7aXNBdXRoICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndXNlci1pbmZvIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgcGItMyc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3VzZXItbmFtZSc+e3VzZXIubmFtZX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxzdHJvbmdcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSd1c2VyLXJvbGUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGNvbG9yOiAnI2QzZDNkMycgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHt1c2VyLmlzQWRtaW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ/ICdBZG1pbmlzdHJhdGV1cidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICdVdGlsaXNhdGV1cid9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3N0cm9uZz5cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSd1c2VyLXN0YXR1cyBtdC0zJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZhIGZhLWNpcmNsZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICcjMDBmZjA0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiAnMTBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJyMwMGZmMDQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6ICcxNXB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdENvbm5lY3TDqVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2gnPlxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvYWRtaW4nPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gdGV4dC13aGl0ZSBiZy1kYXJrJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmFzIGZhLXRhY2hvbWV0ZXItYWx0Jz48L2k+eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdERhc2hib2FyZFxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvYWRtaW4nPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gdGV4dC13aGl0ZSBiZy1kYXJrJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmFzIGZhLWNoYXJ0LWxpbmUnPjwvaT4gVnVlXHJcblx0XHRcdFx0XHRcdFx0XHRkJ2Vuc2VtYmxlXHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYWNjb3JkaW9uJyBpZD0nYWNjb3JkaW9uRXhhbXBsZSc+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcmQgdGV4dC13aGl0ZSBiZy1kYXJrJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJkLWhlYWRlcicgaWQ9J2hlYWRpbmdPbmUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdtYi0wJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2J0biBidG4tbGluayBidG4tYmxvY2sgdGV4dC1sZWZ0IHRleHQtd2hpdGUgY29sbGFwc2VkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS10b2dnbGU9J2NvbGxhcHNlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS10YXJnZXQ9JyNjb2xsYXBzZU9uZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtZXhwYW5kZWQ9J2ZhbHNlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1jb250cm9scz0nY29sbGFwc2VPbmUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYXMgZmEtaWdsb28nPjwvaT57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0R2VzdGlvbiBkZXMgZ8OudGVzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSdjb2xsYXBzZU9uZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjb2xsYXBzZSBzaG93J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsbGVkYnk9J2hlYWRpbmdPbmUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtcGFyZW50PScjYWNjb3JkaW9uRXhhbXBsZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1ib2R5Jz4gKi99XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9hZG1pbi9nZXN0aW9uUGFnZXMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gdGV4dC13aGl0ZSBiZy1zZWNvbmRhcnknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYXMgZmEtYXJyb3ctcmlnaHQnPjwvaT57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0R2VzdGlvbiBkZXMgZ8OudGVzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9hZG1pbi9nZXN0aW9uSW1hZ2VzJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIHRleHQtd2hpdGUgYmctc2Vjb25kYXJ5Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmFzIGZhLWFycm93LXJpZ2h0Jz48L2k+eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEdlc3Rpb24gZGVzIGltYWdlc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvYWRtaW4vZ2VzdGlvbkZpY2hpZXJzJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIHRleHQtd2hpdGUgYmctc2Vjb25kYXJ5Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmFzIGZhLWFycm93LXJpZ2h0Jz48L2k+eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEdlc3Rpb24gZGVzIGZpY2hpZXJzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9hZG1pbi9nZXN0aW9uUmV2aWV3cyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiB0ZXh0LXdoaXRlIGJnLXNlY29uZGFyeSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhcyBmYS1hcnJvdy1yaWdodCc+PC9pPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRHZXN0aW9uIGRlcyByZXZpZXdzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8L2Rpdj4gKi99XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FyZCB0ZXh0LXdoaXRlIGJnLWRhcmsnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcmQtaGVhZGVyJyBpZD0naGVhZGluZ1R3byc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J21iLTAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYnRuIGJ0bi1saW5rIGJ0bi1ibG9jayB0ZXh0LWxlZnQgdGV4dC13aGl0ZSBjb2xsYXBzZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXRvZ2dsZT0nY29sbGFwc2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXRhcmdldD0nI2NvbGxhcHNlVHdvJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD0nZmFsc2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWNvbnRyb2xzPSdjb2xsYXBzZVR3byc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhciBmYS1maWxlLWFsdCc+PC9pPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRHZXN0aW9uIGRlcyBwYWdlc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSdjb2xsYXBzZVR3bydcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjb2xsYXBzZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbGxlZGJ5PSdoZWFkaW5nVHdvJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXBhcmVudD0nI2FjY29yZGlvbkV4YW1wbGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9J2NhcmQtYm9keSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0U29tZSBwbGFjZWhvbGRlciBjb250ZW50IGZvciB0aGUgc2Vjb25kXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWNjb3JkaW9uIHBhbmVsLiBUaGlzIHBhbmVsIGlzIGhpZGRlbiBieVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHQuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PiAqL31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2FkbWluL2dlc3Rpb25EaXZlcnMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gdGV4dC13aGl0ZSBiZy1zZWNvbmRhcnknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYXMgZmEtYXJyb3ctcmlnaHQnPjwvaT57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0UGFnZXMgZGl2ZXJzZXNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2FkbWluL2dlc3Rpb25EaXZlcnMvcGFydGVuYWlyZXMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gdGV4dC13aGl0ZSBiZy1zZWNvbmRhcnknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYXMgZmEtYXJyb3ctcmlnaHQnPjwvaT57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0UGFnZXMgUGFydGVuYWlyZXNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJkIHRleHQtd2hpdGUgYmctZGFyayc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FyZC1oZWFkZXInIGlkPSdoZWFkaW5nVGhyZWUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdtYi0wJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2J0biBidG4tbGluayBidG4tYmxvY2sgdGV4dC1sZWZ0IHRleHQtd2hpdGUgY29sbGFwc2VkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS10b2dnbGU9J2NvbGxhcHNlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS10YXJnZXQ9JyNjb2xsYXBzZVRocmVlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD0nZmFsc2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWNvbnRyb2xzPSdjb2xsYXBzZVRocmVlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmFzIGZhLWJlZCc+PC9pPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRHZXN0aW9uIGRlcyByw6lzZXJ2YXRpb25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7bmV3UmVzZXJ2YXRpb24gPiAwICYmIChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9J2JhZGdlIGJhZGdlLXBpbGwgYmFkZ2Utc3VjY2Vzcyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e25ld01lc3NhZ2VzfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSdjb2xsYXBzZVRocmVlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2NvbGxhcHNlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsbGVkYnk9J2hlYWRpbmdUaHJlZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS1wYXJlbnQ9JyNhY2NvcmRpb25FeGFtcGxlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJvZHknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEFuZCBsYXN0bHksIHRoZSBwbGFjZWhvbGRlciBjb250ZW50IGZvclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoZSB0aGlyZCBhbmQgZmluYWwgYWNjb3JkaW9uIHBhbmVsLlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFRoaXMgcGFuZWwgaXMgaGlkZGVuIGJ5IGRlZmF1bHQuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PiAqL31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2FkbWluL3Jlc2VydmF0aW9uJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIHRleHQtd2hpdGUgYmctc2Vjb25kYXJ5Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmFzIGZhLWFycm93LXJpZ2h0Jz48L2k+eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdExpc3RlIGRlcyByw6lzZXJ2YXRpb25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvYWRtaW4vbWVzc2FnZXMnPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gdGV4dC13aGl0ZSBiZy1kYXJrJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmFzIGZhLWNvbW1lbnRzJz48L2k+IE1lc3NhZ2VzXHJcblx0XHRcdFx0XHRcdFx0XHR7JyAgJ31cclxuXHRcdFx0XHRcdFx0XHRcdHtuZXdNZXNzYWdlcyA+IDAgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz0nYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1pbmZvJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7bmV3TWVzc2FnZXN9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvYWRtaW4nPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gdGV4dC13aGl0ZSBiZy1kYXJrJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmFzIGZhLXVzZXItZnJpZW5kcyc+PC9pPiBHZXN0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHRkZXMgdXRpbGlzYXRldXJzXHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9hZG1pbic+XHJcblx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiB0ZXh0LXdoaXRlIGJnLWRhcmsnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYXMgZmEtZW52ZWxvcGUnPjwvaT4gR2VzdGlvbiBkZXNcclxuXHRcdFx0XHRcdFx0XHRcdG1haWxzXHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9hZG1pbic+XHJcblx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiB0ZXh0LXdoaXRlIGJnLWRhcmsnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYXMgZmEtdXNlci10YWcnPjwvaT4gR2VzdGlvbiBkZXNcclxuXHRcdFx0XHRcdFx0XHRcdGNsaWVudHNcclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGlkPSdwYWdlLWNvbnRlbnQtd3JhcHBlcic+XHJcblx0XHRcdFx0XHQ8bmF2IGNsYXNzTmFtZT0nbmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWRhcmsgYmctZGFyayBib3JkZXItYm90dG9tJz5cclxuXHRcdFx0XHRcdFx0ey8qIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnknIGlkPSdtZW51LXRvZ2dsZSc+XHJcblx0XHRcdFx0XHRcdFx0VG9nZ2xlIE1lbnVcclxuXHRcdFx0XHRcdFx0PC9idXR0b24+ICovfVxyXG5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nbmF2YmFyLXRvZ2dsZXInXHJcblx0XHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdGRhdGEtdG9nZ2xlPSdjb2xsYXBzZSdcclxuXHRcdFx0XHRcdFx0XHRkYXRhLXRhcmdldD0nI25hdmJhclN1cHBvcnRlZENvbnRlbnQnXHJcblx0XHRcdFx0XHRcdFx0YXJpYS1jb250cm9scz0nbmF2YmFyU3VwcG9ydGVkQ29udGVudCdcclxuXHRcdFx0XHRcdFx0XHRhcmlhLWV4cGFuZGVkPSdmYWxzZSdcclxuXHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPSdUb2dnbGUgbmF2aWdhdGlvbic+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSduYXZiYXItdG9nZ2xlci1pY29uJz48L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlJ1xyXG5cdFx0XHRcdFx0XHRcdGlkPSduYXZiYXJTdXBwb3J0ZWRDb250ZW50Jz5cclxuXHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPSduYXZiYXItbmF2IG1sLWF1dG8gbXQtMiBtdC1sZy0wJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J25hdi1pdGVtIGFjdGl2ZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nbmF2LWxpbmsnIGhyZWY9Jy9hZG1pbic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0RXNwYWNlIEFkbWlueycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3NyLW9ubHknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KGN1cnJlbnQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbmF2LWl0ZW0nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9J25hdi1saW5rJyBocmVmPScvJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRWb2lyIGxlIHNpdGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J25hdi1pdGVtJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J25hdi1saW5rJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxvZ291dCgoKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRSb3V0ZXIucmVwbGFjZSgnL2xvZ2luJylcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdERlY29ubmVjdGVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHR7LyogPGxpIGNsYXNzTmFtZT0nbmF2LWl0ZW0gZHJvcGRvd24nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nbmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9JyMnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9J25hdmJhckRyb3Bkb3duJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJvbGU9J2J1dHRvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXRvZ2dsZT0nZHJvcGRvd24nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1oYXNwb3B1cD0ndHJ1ZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWV4cGFuZGVkPSdmYWxzZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0RHJvcGRvd25cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbGxlZGJ5PSduYXZiYXJEcm9wZG93bic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPSdkcm9wZG93bi1pdGVtJyBocmVmPScjJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEFjdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9J2Ryb3Bkb3duLWl0ZW0nIGhyZWY9JyMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QW5vdGhlciBhY3Rpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Ryb3Bkb3duLWRpdmlkZXInPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nZHJvcGRvd24taXRlbScgaHJlZj0nIyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTb21ldGhpbmcgZWxzZSBoZXJlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+ICovfVxyXG5cdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9uYXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCdcclxuXHRcdFx0XHRcdFx0Ly8gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzFjMjAyNScsIGhlaWdodDogJzEwMHZoJyB9fVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHR7Y2hpbGRyZW59XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5IZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=