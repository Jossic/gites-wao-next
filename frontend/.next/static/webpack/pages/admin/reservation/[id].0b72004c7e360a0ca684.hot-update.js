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
/* harmony import */ var _actions_reservationActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../actions/reservationActions */ "./actions/reservationActions.js");


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
      lineNumber: 13,
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
    Object(_actions_reservationActions__WEBPACK_IMPORTED_MODULE_10__["countNouvelleReservation"])().then(function (data) {
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
      lineNumber: 54,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "bg-dark border-right",
    id: "sidebar-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "sidebar-heading text-white text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 6
    }
  }, "Les G\xEEtes WAO"), __jsx("div", {
    className: "sidebar-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "user-pic text-center pb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
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
      lineNumber: 66,
      columnNumber: 8
    }
  })), _actions_authActions__WEBPACK_IMPORTED_MODULE_5__["isAuth"] && __jsx("div", {
    className: "user-info text-white text-center pb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 8
    }
  }, __jsx("span", {
    className: "user-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, user.name), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
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
      lineNumber: 77,
      columnNumber: 9
    }
  }, user.isAdmin ? 'Administrateur' : 'Utilisateur'), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "user-status mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
      lineNumber: 86,
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
      lineNumber: 92,
      columnNumber: 10
    }
  }, ' ', "Connect\xE9")))), __jsx("div", {
    className: "list-group list-group-flush",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 6
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 8
    }
  }, __jsx("i", {
    className: "fas fa-tachometer-alt",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }), ' ', "Dashboard")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 8
    }
  }, __jsx("i", {
    className: "fas fa-chart-line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }), " Vue d'ensemble")), __jsx("div", {
    className: "accordion",
    id: "accordionExample",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "card text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "card-header",
    id: "headingOne",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
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
      lineNumber: 122,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-igloo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
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
      lineNumber: 135,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin/gestionPages",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 10
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 12
    }
  }), ' ', "Gestion des g\xEEtes")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin/gestionImages",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 10
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 12
    }
  }), ' ', "Gestion des images")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin/gestionFichiers",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 10
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 12
    }
  }), ' ', "Gestion des fichiers")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin/gestionReviews",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 10
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 12
    }
  }), ' ', "Gestion des reviews")))), __jsx("div", {
    className: "card text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "card-header",
    id: "headingTwo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
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
      lineNumber: 171,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "far fa-file-alt",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
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
      lineNumber: 183,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin/gestionDivers",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 10
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 12
    }
  }), ' ', "Pages diverses")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin/gestionDivers/partenaires",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 10
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 12
    }
  }), ' ', "Pages Partenaires")))), __jsx("div", {
    className: "card text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "card-header",
    id: "headingThree",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
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
      lineNumber: 210,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-bed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 12
    }
  }), ' ', "Gestion des r\xE9servations", ' ', newReservation > 0 && __jsx("span", {
    "class": "badge badge-pill badge-success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 13
    }
  }, newReservation)))), __jsx("div", {
    id: "collapseThree",
    className: "collapse",
    "aria-labelledby": "headingThree",
    "data-parent": "#accordionExample",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin/reservation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 10
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 12
    }
  }), ' ', "Liste des r\xE9servations"))))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin/messages",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 8
    }
  }, __jsx("i", {
    className: "fas fa-comments",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 9
    }
  }), " Messages", '  ', newMessages > 0 && __jsx("span", {
    "class": "badge badge-pill badge-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 10
    }
  }, newMessages))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 8
    }
  }, __jsx("i", {
    className: "fas fa-user-friends",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 9
    }
  }), " Gestion des utilisateurs")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 8
    }
  }, __jsx("i", {
    className: "fas fa-envelope",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 9
    }
  }), " Gestion des mails")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 8
    }
  }, __jsx("i", {
    className: "fas fa-user-tag",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 9
    }
  }), " Gestion des clients")))), __jsx("div", {
    id: "page-content-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 5
    }
  }, __jsx("nav", {
    className: "navbar navbar-expand-lg navbar-dark bg-dark border-bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
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
      lineNumber: 286,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "navbar-toggler-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 8
    }
  })), __jsx("div", {
    className: "collapse navbar-collapse",
    id: "navbarSupportedContent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "navbar-nav ml-auto mt-2 mt-lg-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 8
    }
  }, __jsx("li", {
    className: "nav-item active",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "nav-link",
    href: "/admin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 10
    }
  }, "Espace Admin", ' ', __jsx("span", {
    className: "sr-only",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 11
    }
  }, "(current)"))), __jsx("li", {
    className: "nav-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "nav-link",
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 10
    }
  }, "Voir le site")), __jsx("li", {
    className: "nav-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
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
      lineNumber: 315,
      columnNumber: 10
    }
  }, "Deconnecter"))))), __jsx("div", {
    className: "container-fluid" // style={{ backgroundColor: '#1c2025', height: '100vh' }}
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvQWRtaW5IZWFkZXIuanMiXSwibmFtZXMiOlsiQWxlcnQiLCJwcm9wcyIsIlJvdXRlciIsIm9uUm91dGVDaGFuZ2VTdGFydCIsInVybCIsIk5Qcm9ncmVzcyIsInN0YXJ0Iiwib25Sb3V0ZUNoYW5nZUNvbXBsZXRlIiwiZG9uZSIsIm9uUm91dGVDaGFuZ2VFcnJvciIsIkFkbWluSGVhZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsIm5ld01lc3NhZ2VzIiwic2V0TmV3TWVzc2FnZXMiLCJuZXdSZXNlcnZhdGlvbiIsInNldG5ld1Jlc2VydmF0aW9uIiwicmVjdXBOb25MdXMiLCJjb3VudE1lc3NhZ2VOb25MdXMiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInJlY3VwTnZsZVJlcyIsImNvdW50Tm91dmVsbGVSZXNlcnZhdGlvbiIsInVzZUVmZmVjdCIsInVzZXIiLCJuYW1lIiwiaXNBZG1pbiIsImNvbG9yIiwiZm9udFNpemUiLCJpc0F1dGgiLCJjdXJzb3IiLCJsb2dvdXQiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUNyQixTQUFPLE1BQUMsOERBQUQ7QUFBVSxhQUFTLEVBQUUsQ0FBckI7QUFBd0IsV0FBTyxFQUFDO0FBQWhDLEtBQTZDQSxLQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVA7QUFDQTs7S0FGUUQsSzs7QUFJVEUsa0RBQU0sQ0FBQ0Msa0JBQVAsR0FBNEIsVUFBQ0MsR0FBRDtBQUFBLFNBQVNDLGdEQUFTLENBQUNDLEtBQVYsRUFBVDtBQUFBLENBQTVCOztBQUNBSixrREFBTSxDQUFDSyxxQkFBUCxHQUEr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RTtBQUFWLEtBRlI7QUFHQyxXQUFPLEVBQUU7QUFBQSxhQUNSQyxtRUFBTSxDQUFDO0FBQUEsZUFDTmhDLGtEQUFNLENBQUNpQyxPQUFQLENBQWUsUUFBZixDQURNO0FBQUEsT0FBRCxDQURFO0FBQUEsS0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELENBZEQsQ0FIRCxDQWhCRCxDQURELEVBNEVDO0FBQ0MsYUFBUyxFQUFDLGlCQURYLENBRUM7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUV4QixRQUpGLENBNUVELENBbE9ELENBREQsQ0FERDtBQTBUQSxDQTNWRDs7R0FBTUQsVzs7TUFBQUEsVztBQTZWU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24vW2lkXS4wYjcyMDA0YzdlMzYwYTBjYTY4NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgaXNBdXRoLCBsb2dvdXQgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvbnByb2dyZXNzL25wcm9ncmVzcy5jc3MnO1xyXG5pbXBvcnQgeyBjb3VudE1lc3NhZ2VOb25MdXMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL21lc3NhZ2VBY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU25hY2tiYXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBNdWlBbGVydCBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0JztcclxuaW1wb3J0IHsgY291bnROb3V2ZWxsZVJlc2VydmF0aW9uIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9yZXNlcnZhdGlvbkFjdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gQWxlcnQocHJvcHMpIHtcclxuXHRyZXR1cm4gPE11aUFsZXJ0IGVsZXZhdGlvbj17Nn0gdmFyaWFudD0nZmlsbGVkJyB7Li4ucHJvcHN9IC8+O1xyXG59XHJcblxyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKHVybCkgPT4gTlByb2dyZXNzLnN0YXJ0KCk7XHJcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAodXJsKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUVycm9yID0gKHVybCkgPT4gTlByb2dyZXNzLmRvbmUoKTtcclxuY29uc3QgQWRtaW5IZWFkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblx0Y29uc3QgW25ld01lc3NhZ2VzLCBzZXROZXdNZXNzYWdlc10gPSB1c2VTdGF0ZSgwKTtcclxuXHRjb25zdCBbbmV3UmVzZXJ2YXRpb24sIHNldG5ld1Jlc2VydmF0aW9uXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuXHRjb25zdCByZWN1cE5vbkx1cyA9ICgpID0+IHtcclxuXHRcdGNvdW50TWVzc2FnZU5vbkx1cygpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXROZXdNZXNzYWdlcyhkYXRhKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgcmVjdXBOdmxlUmVzID0gKCkgPT4ge1xyXG5cdFx0Y291bnROb3V2ZWxsZVJlc2VydmF0aW9uKCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldG5ld1Jlc2VydmF0aW9uKGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0cmVjdXBOb25MdXMoKTtcclxuXHRcdHJlY3VwTnZsZVJlcygpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc3QgdXNlciA9IHtcclxuXHRcdG5hbWU6ICdKb3NzaWMgTEFQSUVSUkUnLFxyXG5cdFx0aXNBZG1pbjogdHJ1ZSxcclxuXHR9O1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4JyBpZD0nd3JhcHBlcic+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2JnLWRhcmsgYm9yZGVyLXJpZ2h0JyBpZD0nc2lkZWJhci13cmFwcGVyJz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaWRlYmFyLWhlYWRpbmcgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlcic+XHJcblx0XHRcdFx0XHRcdExlcyBHw650ZXMgV0FPXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaWRlYmFyLWhlYWRlcic+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd1c2VyLXBpYyB0ZXh0LWNlbnRlciBwYi0yJz5cclxuXHRcdFx0XHRcdFx0XHR7LyogPGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdpbWctcmVzcG9uc2l2ZSBpbWctcm91bmRlZCdcclxuXHRcdFx0XHRcdFx0XHRcdHNyYz0nL2ltYWdlcy9sb2dvdjQtMTAyNHg0OTYucG5nJ1xyXG5cdFx0XHRcdFx0XHRcdFx0YWx0PSdVc2VyIHBpY3R1cmUnXHJcblx0XHRcdFx0XHRcdFx0Lz4gKi99XHJcblx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmFyIGZhLXVzZXItY2lyY2xlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICd3aGl0ZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiAnNDBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHR9fT48L2k+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHR7aXNBdXRoICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndXNlci1pbmZvIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgcGItMyc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3VzZXItbmFtZSc+e3VzZXIubmFtZX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxzdHJvbmdcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSd1c2VyLXJvbGUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGNvbG9yOiAnI2QzZDNkMycgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHt1c2VyLmlzQWRtaW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ/ICdBZG1pbmlzdHJhdGV1cidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICdVdGlsaXNhdGV1cid9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3N0cm9uZz5cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSd1c2VyLXN0YXR1cyBtdC0zJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZhIGZhLWNpcmNsZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICcjMDBmZjA0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiAnMTBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJyMwMGZmMDQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6ICcxNXB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdENvbm5lY3TDqVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2gnPlxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvYWRtaW4nPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gdGV4dC13aGl0ZSBiZy1kYXJrJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmFzIGZhLXRhY2hvbWV0ZXItYWx0Jz48L2k+eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdERhc2hib2FyZFxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvYWRtaW4nPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gdGV4dC13aGl0ZSBiZy1kYXJrJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmFzIGZhLWNoYXJ0LWxpbmUnPjwvaT4gVnVlXHJcblx0XHRcdFx0XHRcdFx0XHRkJ2Vuc2VtYmxlXHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYWNjb3JkaW9uJyBpZD0nYWNjb3JkaW9uRXhhbXBsZSc+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcmQgdGV4dC13aGl0ZSBiZy1kYXJrJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJkLWhlYWRlcicgaWQ9J2hlYWRpbmdPbmUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdtYi0wJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2J0biBidG4tbGluayBidG4tYmxvY2sgdGV4dC1sZWZ0IHRleHQtd2hpdGUgY29sbGFwc2VkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS10b2dnbGU9J2NvbGxhcHNlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS10YXJnZXQ9JyNjb2xsYXBzZU9uZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtZXhwYW5kZWQ9J2ZhbHNlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1jb250cm9scz0nY29sbGFwc2VPbmUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYXMgZmEtaWdsb28nPjwvaT57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0R2VzdGlvbiBkZXMgZ8OudGVzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSdjb2xsYXBzZU9uZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjb2xsYXBzZSBzaG93J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsbGVkYnk9J2hlYWRpbmdPbmUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtcGFyZW50PScjYWNjb3JkaW9uRXhhbXBsZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1ib2R5Jz4gKi99XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9hZG1pbi9nZXN0aW9uUGFnZXMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gdGV4dC13aGl0ZSBiZy1zZWNvbmRhcnknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYXMgZmEtYXJyb3ctcmlnaHQnPjwvaT57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0R2VzdGlvbiBkZXMgZ8OudGVzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9hZG1pbi9nZXN0aW9uSW1hZ2VzJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIHRleHQtd2hpdGUgYmctc2Vjb25kYXJ5Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmFzIGZhLWFycm93LXJpZ2h0Jz48L2k+eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEdlc3Rpb24gZGVzIGltYWdlc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvYWRtaW4vZ2VzdGlvbkZpY2hpZXJzJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIHRleHQtd2hpdGUgYmctc2Vjb25kYXJ5Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmFzIGZhLWFycm93LXJpZ2h0Jz48L2k+eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEdlc3Rpb24gZGVzIGZpY2hpZXJzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9hZG1pbi9nZXN0aW9uUmV2aWV3cyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiB0ZXh0LXdoaXRlIGJnLXNlY29uZGFyeSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhcyBmYS1hcnJvdy1yaWdodCc+PC9pPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRHZXN0aW9uIGRlcyByZXZpZXdzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8L2Rpdj4gKi99XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FyZCB0ZXh0LXdoaXRlIGJnLWRhcmsnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcmQtaGVhZGVyJyBpZD0naGVhZGluZ1R3byc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J21iLTAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYnRuIGJ0bi1saW5rIGJ0bi1ibG9jayB0ZXh0LWxlZnQgdGV4dC13aGl0ZSBjb2xsYXBzZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXRvZ2dsZT0nY29sbGFwc2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXRhcmdldD0nI2NvbGxhcHNlVHdvJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD0nZmFsc2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWNvbnRyb2xzPSdjb2xsYXBzZVR3byc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhciBmYS1maWxlLWFsdCc+PC9pPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRHZXN0aW9uIGRlcyBwYWdlc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSdjb2xsYXBzZVR3bydcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjb2xsYXBzZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbGxlZGJ5PSdoZWFkaW5nVHdvJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXBhcmVudD0nI2FjY29yZGlvbkV4YW1wbGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9J2NhcmQtYm9keSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0U29tZSBwbGFjZWhvbGRlciBjb250ZW50IGZvciB0aGUgc2Vjb25kXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWNjb3JkaW9uIHBhbmVsLiBUaGlzIHBhbmVsIGlzIGhpZGRlbiBieVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHQuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PiAqL31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2FkbWluL2dlc3Rpb25EaXZlcnMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gdGV4dC13aGl0ZSBiZy1zZWNvbmRhcnknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYXMgZmEtYXJyb3ctcmlnaHQnPjwvaT57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0UGFnZXMgZGl2ZXJzZXNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2FkbWluL2dlc3Rpb25EaXZlcnMvcGFydGVuYWlyZXMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gdGV4dC13aGl0ZSBiZy1zZWNvbmRhcnknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYXMgZmEtYXJyb3ctcmlnaHQnPjwvaT57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0UGFnZXMgUGFydGVuYWlyZXNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJkIHRleHQtd2hpdGUgYmctZGFyayc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FyZC1oZWFkZXInIGlkPSdoZWFkaW5nVGhyZWUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdtYi0wJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2J0biBidG4tbGluayBidG4tYmxvY2sgdGV4dC1sZWZ0IHRleHQtd2hpdGUgY29sbGFwc2VkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS10b2dnbGU9J2NvbGxhcHNlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS10YXJnZXQ9JyNjb2xsYXBzZVRocmVlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD0nZmFsc2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWNvbnRyb2xzPSdjb2xsYXBzZVRocmVlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmFzIGZhLWJlZCc+PC9pPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRHZXN0aW9uIGRlcyByw6lzZXJ2YXRpb25zeycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtuZXdSZXNlcnZhdGlvbiA+IDAgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz0nYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1zdWNjZXNzJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7bmV3UmVzZXJ2YXRpb259XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J2NvbGxhcHNlVGhyZWUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY29sbGFwc2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWxsZWRieT0naGVhZGluZ1RocmVlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXBhcmVudD0nI2FjY29yZGlvbkV4YW1wbGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9J2NhcmQtYm9keSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0QW5kIGxhc3RseSwgdGhlIHBsYWNlaG9sZGVyIGNvbnRlbnQgZm9yXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhlIHRoaXJkIGFuZCBmaW5hbCBhY2NvcmRpb24gcGFuZWwuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0VGhpcyBwYW5lbCBpcyBoaWRkZW4gYnkgZGVmYXVsdC5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+ICovfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvYWRtaW4vcmVzZXJ2YXRpb24nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gdGV4dC13aGl0ZSBiZy1zZWNvbmRhcnknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYXMgZmEtYXJyb3ctcmlnaHQnPjwvaT57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0TGlzdGUgZGVzIHLDqXNlcnZhdGlvbnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9hZG1pbi9tZXNzYWdlcyc+XHJcblx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiB0ZXh0LXdoaXRlIGJnLWRhcmsnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYXMgZmEtY29tbWVudHMnPjwvaT4gTWVzc2FnZXNcclxuXHRcdFx0XHRcdFx0XHRcdHsnICAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0e25ld01lc3NhZ2VzID4gMCAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPSdiYWRnZSBiYWRnZS1waWxsIGJhZGdlLWluZm8nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtuZXdNZXNzYWdlc31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9hZG1pbic+XHJcblx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiB0ZXh0LXdoaXRlIGJnLWRhcmsnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYXMgZmEtdXNlci1mcmllbmRzJz48L2k+IEdlc3Rpb25cclxuXHRcdFx0XHRcdFx0XHRcdGRlcyB1dGlsaXNhdGV1cnNcclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2FkbWluJz5cclxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIHRleHQtd2hpdGUgYmctZGFyayc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhcyBmYS1lbnZlbG9wZSc+PC9pPiBHZXN0aW9uIGRlc1xyXG5cdFx0XHRcdFx0XHRcdFx0bWFpbHNcclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2FkbWluJz5cclxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIHRleHQtd2hpdGUgYmctZGFyayc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhcyBmYS11c2VyLXRhZyc+PC9pPiBHZXN0aW9uIGRlc1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xpZW50c1xyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgaWQ9J3BhZ2UtY29udGVudC13cmFwcGVyJz5cclxuXHRcdFx0XHRcdDxuYXYgY2xhc3NOYW1lPSduYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZGFyayBiZy1kYXJrIGJvcmRlci1ib3R0b20nPlxyXG5cdFx0XHRcdFx0XHR7LyogPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeScgaWQ9J21lbnUtdG9nZ2xlJz5cclxuXHRcdFx0XHRcdFx0XHRUb2dnbGUgTWVudVxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj4gKi99XHJcblxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSduYXZiYXItdG9nZ2xlcidcclxuXHRcdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXHJcblx0XHRcdFx0XHRcdFx0ZGF0YS10b2dnbGU9J2NvbGxhcHNlJ1xyXG5cdFx0XHRcdFx0XHRcdGRhdGEtdGFyZ2V0PScjbmF2YmFyU3VwcG9ydGVkQ29udGVudCdcclxuXHRcdFx0XHRcdFx0XHRhcmlhLWNvbnRyb2xzPSduYXZiYXJTdXBwb3J0ZWRDb250ZW50J1xyXG5cdFx0XHRcdFx0XHRcdGFyaWEtZXhwYW5kZWQ9J2ZhbHNlJ1xyXG5cdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J1RvZ2dsZSBuYXZpZ2F0aW9uJz5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J25hdmJhci10b2dnbGVyLWljb24nPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjb2xsYXBzZSBuYXZiYXItY29sbGFwc2UnXHJcblx0XHRcdFx0XHRcdFx0aWQ9J25hdmJhclN1cHBvcnRlZENvbnRlbnQnPlxyXG5cdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9J25hdmJhci1uYXYgbWwtYXV0byBtdC0yIG10LWxnLTAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbmF2LWl0ZW0gYWN0aXZlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPSduYXYtbGluaycgaHJlZj0nL2FkbWluJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRFc3BhY2UgQWRtaW57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nc3Itb25seSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoY3VycmVudClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSduYXYtaXRlbSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nbmF2LWxpbmsnIGhyZWY9Jy8nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFZvaXIgbGUgc2l0ZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbmF2LWl0ZW0nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nbmF2LWxpbmsnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bG9nb3V0KCgpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFJvdXRlci5yZXBsYWNlKCcvbG9naW4nKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0RGVjb25uZWN0ZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdHsvKiA8bGkgY2xhc3NOYW1lPSduYXYtaXRlbSBkcm9wZG93bic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSduYXYtbGluayBkcm9wZG93bi10b2dnbGUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZj0nIydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZD0nbmF2YmFyRHJvcGRvd24nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cm9sZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtdG9nZ2xlPSdkcm9wZG93bidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWhhc3BvcHVwPSd0cnVlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtZXhwYW5kZWQ9J2ZhbHNlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHREcm9wZG93blxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Ryb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsbGVkYnk9J25hdmJhckRyb3Bkb3duJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9J2Ryb3Bkb3duLWl0ZW0nIGhyZWY9JyMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QWN0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nZHJvcGRvd24taXRlbScgaHJlZj0nIyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBbm90aGVyIGFjdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZHJvcGRvd24tZGl2aWRlcic+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPSdkcm9wZG93bi1pdGVtJyBocmVmPScjJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFNvbWV0aGluZyBlbHNlIGhlcmVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT4gKi99XHJcblx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L25hdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY29udGFpbmVyLWZsdWlkJ1xyXG5cdFx0XHRcdFx0XHQvLyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMWMyMDI1JywgaGVpZ2h0OiAnMTAwdmgnIH19XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbkhlYWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==