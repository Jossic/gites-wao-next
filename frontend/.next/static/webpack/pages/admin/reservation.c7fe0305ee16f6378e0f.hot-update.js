webpackHotUpdate_N_E("pages/admin/reservation",{

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

  var recupNonLus = function recupNonLus() {
    Object(_actions_messageActions__WEBPACK_IMPORTED_MODULE_7__["countMessageNonLus"])().then(function (data) {
      if (data.error) {
        console.log(data.error);
      } else {
        setNewMessages(data);
      }
    });
  };

  var popup = function popup() {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Snackbar"], {
      open: open,
      autoHideDuration: 6000,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 3
      }
    }, __jsx(Alert, {
      severity: "info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 4
      }
    }, "Un nouveau message est arriv\xE9 !"));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    recupNonLus();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    popup();
  }, [newMessages]); // const user = JSON.parse(localStorage.getItem('user'));

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
      lineNumber: 52,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "bg-dark border-right",
    id: "sidebar-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "sidebar-heading text-white text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 6
    }
  }, "Les G\xEEtes WAO"), __jsx("div", {
    className: "sidebar-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "user-pic text-center pb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
      lineNumber: 64,
      columnNumber: 8
    }
  })), _actions_authActions__WEBPACK_IMPORTED_MODULE_5__["isAuth"] && __jsx("div", {
    className: "user-info text-white text-center pb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 8
    }
  }, __jsx("span", {
    className: "user-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, user.name), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
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
      lineNumber: 75,
      columnNumber: 9
    }
  }, user.isAdmin ? 'Administrateur' : 'Utilisateur'), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "user-status mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
      lineNumber: 84,
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
      lineNumber: 90,
      columnNumber: 10
    }
  }, ' ', "Connect\xE9")))), __jsx("div", {
    className: "list-group list-group-flush",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 6
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 8
    }
  }, __jsx("i", {
    className: "fas fa-tachometer-alt",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }), ' ', "Dashboard")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 8
    }
  }, __jsx("i", {
    className: "fas fa-chart-line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }), " Vue d'ensemble")), __jsx("div", {
    className: "accordion",
    id: "accordionExample",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "card text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "card-header",
    id: "headingOne",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
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
      lineNumber: 120,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-igloo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
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
      lineNumber: 133,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin/gestionPages",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 10
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 12
    }
  }), ' ', "Gestion des g\xEEtes")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin/gestionImages",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 10
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 12
    }
  }), ' ', "Gestion des images")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin/gestionFichiers",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 10
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 12
    }
  }), ' ', "Gestion des fichiers")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin/gestionReviews",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 10
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 12
    }
  }), ' ', "Gestion des reviews")))), __jsx("div", {
    className: "card text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "card-header",
    id: "headingTwo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
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
      lineNumber: 169,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "far fa-file-alt",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
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
      lineNumber: 181,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin/gestionDivers",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 10
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 12
    }
  }), ' ', "Pages diverses")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin/gestionDivers/partenaires",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 10
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 12
    }
  }), ' ', "Pages Partenaires")))), __jsx("div", {
    className: "card text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "card-header",
    id: "headingThree",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
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
      lineNumber: 208,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-bed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 12
    }
  }), ' ', "Gestion des r\xE9servations"))), __jsx("div", {
    id: "collapseThree",
    className: "collapse",
    "aria-labelledby": "headingThree",
    "data-parent": "#accordionExample",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin/reservation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 10
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 12
    }
  }), ' ', "Liste des r\xE9servations"))))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin/messages",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 8
    }
  }, __jsx("i", {
    className: "fas fa-comments",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 9
    }
  }), " Messages", '  ', newMessages > 0 && __jsx("span", {
    "class": "badge badge-pill badge-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 10
    }
  }, newMessages))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 8
    }
  }, __jsx("i", {
    className: "fas fa-user-friends",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 9
    }
  }), " Gestion des utilisateurs")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
    className: "fas fa-envelope",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 9
    }
  }), " Gestion des mails")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
    className: "fas fa-user-tag",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 9
    }
  }), " Gestion des clients")))), __jsx("div", {
    id: "page-content-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 5
    }
  }, __jsx("nav", {
    className: "navbar navbar-expand-lg navbar-dark bg-dark border-bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
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
      lineNumber: 279,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "navbar-toggler-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 8
    }
  })), __jsx("div", {
    className: "collapse navbar-collapse",
    id: "navbarSupportedContent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "navbar-nav ml-auto mt-2 mt-lg-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 8
    }
  }, __jsx("li", {
    className: "nav-item active",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "nav-link",
    href: "/admin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 10
    }
  }, "Espace Admin", ' ', __jsx("span", {
    className: "sr-only",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 11
    }
  }, "(current)"))), __jsx("li", {
    className: "nav-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "nav-link",
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 10
    }
  }, "Voir le site")), __jsx("li", {
    className: "nav-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
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
      lineNumber: 308,
      columnNumber: 10
    }
  }, "Deconnecter"))))), __jsx("div", {
    className: "container-fluid" // style={{ backgroundColor: '#1c2025', height: '100vh' }}
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 6
    }
  }, children))));
};

_s(AdminHeader, "x7P45hQQbw/KoNFVG8nwyr6PhBg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvQWRtaW5IZWFkZXIuanMiXSwibmFtZXMiOlsiQWxlcnQiLCJwcm9wcyIsIlJvdXRlciIsIm9uUm91dGVDaGFuZ2VTdGFydCIsInVybCIsIk5Qcm9ncmVzcyIsInN0YXJ0Iiwib25Sb3V0ZUNoYW5nZUNvbXBsZXRlIiwiZG9uZSIsIm9uUm91dGVDaGFuZ2VFcnJvciIsIkFkbWluSGVhZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsIm5ld01lc3NhZ2VzIiwic2V0TmV3TWVzc2FnZXMiLCJyZWN1cE5vbkx1cyIsImNvdW50TWVzc2FnZU5vbkx1cyIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicG9wdXAiLCJvcGVuIiwidXNlRWZmZWN0IiwidXNlciIsIm5hbWUiLCJpc0FkbWluIiwiY29sb3IiLCJmb250U2l6ZSIsImlzQXV0aCIsImN1cnNvciIsImxvZ291dCIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQ3JCLFNBQU8sTUFBQyw4REFBRDtBQUFVLGFBQVMsRUFBRSxDQUFyQjtBQUF3QixXQUFPLEVBQUM7QUFBaEMsS0FBNkNBLEtBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUDtBQUNBOztLQUZRRCxLOztBQUlURSxrREFBTSxDQUFDQyxrQkFBUCxHQUE0QixVQUFDQyxHQUFEO0FBQUEsU0FBU0MsZ0RBQVMsQ0FBQ0MsS0FBVixFQUFUO0FBQUEsQ0FBNUI7O0FBQ0FKLGtEQUFNLENBQUNLLHFCQUFQLEdBQStCLFVBQUNILEdBQUQ7QUFBQSxTQUFTQyxnREFBUyxDQUFDRyxJQUFWLEVBQVQ7QUFBQSxDQUEvQjs7QUFDQU4sa0RBQU0s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NEVDO0FBQ0MsYUFBUyxFQUFDLGlCQURYLENBRUM7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUV0QixRQUpGLENBNUVELENBN05ELENBREQsQ0FERDtBQXFUQSxDQXJWRDs7R0FBTUQsVzs7TUFBQUEsVztBQXVWU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24uYzdmZTAzMDVlZTE2ZjYzNzhlMGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGlzQXV0aCwgbG9nb3V0IH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL25wcm9ncmVzcy9ucHJvZ3Jlc3MuY3NzJztcclxuaW1wb3J0IHsgY291bnRNZXNzYWdlTm9uTHVzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9tZXNzYWdlQWN0aW9ucyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFNuYWNrYmFyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgTXVpQWxlcnQgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BbGVydCc7XHJcblxyXG5mdW5jdGlvbiBBbGVydChwcm9wcykge1xyXG5cdHJldHVybiA8TXVpQWxlcnQgZWxldmF0aW9uPXs2fSB2YXJpYW50PSdmaWxsZWQnIHsuLi5wcm9wc30gLz47XHJcbn1cclxuXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSAodXJsKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKTtcclxuUm91dGVyLm9uUm91dGVDaGFuZ2VDb21wbGV0ZSA9ICh1cmwpID0+IE5Qcm9ncmVzcy5kb25lKCk7XHJcblJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3IgPSAodXJsKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG5jb25zdCBBZG1pbkhlYWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHRjb25zdCBbbmV3TWVzc2FnZXMsIHNldE5ld01lc3NhZ2VzXSA9IHVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IHJlY3VwTm9uTHVzID0gKCkgPT4ge1xyXG5cdFx0Y291bnRNZXNzYWdlTm9uTHVzKCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldE5ld01lc3NhZ2VzKGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBwb3B1cCA9ICgpID0+IChcclxuXHRcdDxTbmFja2JhciBvcGVuPXtvcGVufSBhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfT5cclxuXHRcdFx0PEFsZXJ0IHNldmVyaXR5PSdpbmZvJz5VbiBub3V2ZWF1IG1lc3NhZ2UgZXN0IGFycml2w6kgITwvQWxlcnQ+XHJcblx0XHQ8L1NuYWNrYmFyPlxyXG5cdCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRyZWN1cE5vbkx1cygpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHBvcHVwKCk7XHJcblx0fSwgW25ld01lc3NhZ2VzXSk7XHJcblxyXG5cdC8vIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xyXG5cclxuXHRjb25zdCB1c2VyID0ge1xyXG5cdFx0bmFtZTogJ0pvc3NpYyBMQVBJRVJSRScsXHJcblx0XHRpc0FkbWluOiB0cnVlLFxyXG5cdH07XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkLWZsZXgnIGlkPSd3cmFwcGVyJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYmctZGFyayBib3JkZXItcmlnaHQnIGlkPSdzaWRlYmFyLXdyYXBwZXInPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NpZGViYXItaGVhZGluZyB0ZXh0LXdoaXRlIHRleHQtY2VudGVyJz5cclxuXHRcdFx0XHRcdFx0TGVzIEfDrnRlcyBXQU9cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NpZGViYXItaGVhZGVyJz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3VzZXItcGljIHRleHQtY2VudGVyIHBiLTInPlxyXG5cdFx0XHRcdFx0XHRcdHsvKiA8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ltZy1yZXNwb25zaXZlIGltZy1yb3VuZGVkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0c3JjPScvaW1hZ2VzL2xvZ292NC0xMDI0eDQ5Ni5wbmcnXHJcblx0XHRcdFx0XHRcdFx0XHRhbHQ9J1VzZXIgcGljdHVyZSdcclxuXHRcdFx0XHRcdFx0XHQvPiAqL31cclxuXHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmYXIgZmEtdXNlci1jaXJjbGUnXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3doaXRlJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6ICc0MHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdH19PjwvaT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdHtpc0F1dGggJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd1c2VyLWluZm8gdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBwYi0zJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ndXNlci1uYW1lJz57dXNlci5uYW1lfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHN0cm9uZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3VzZXItcm9sZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgY29sb3I6ICcjZDNkM2QzJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3VzZXIuaXNBZG1pblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD8gJ0FkbWluaXN0cmF0ZXVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDogJ1V0aWxpc2F0ZXVyJ31cclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Ryb25nPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3VzZXItc3RhdHVzIG10LTMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmEgZmEtY2lyY2xlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJyMwMGZmMDQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6ICcxMHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAnIzAwZmYwNCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZTogJzE1cHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Q29ubmVjdMOpXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaCc+XHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9hZG1pbic+XHJcblx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiB0ZXh0LXdoaXRlIGJnLWRhcmsnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYXMgZmEtdGFjaG9tZXRlci1hbHQnPjwvaT57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0RGFzaGJvYXJkXHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9hZG1pbic+XHJcblx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiB0ZXh0LXdoaXRlIGJnLWRhcmsnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYXMgZmEtY2hhcnQtbGluZSc+PC9pPiBWdWVcclxuXHRcdFx0XHRcdFx0XHRcdGQnZW5zZW1ibGVcclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdhY2NvcmRpb24nIGlkPSdhY2NvcmRpb25FeGFtcGxlJz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FyZCB0ZXh0LXdoaXRlIGJnLWRhcmsnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcmQtaGVhZGVyJyBpZD0naGVhZGluZ09uZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J21iLTAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYnRuIGJ0bi1saW5rIGJ0bi1ibG9jayB0ZXh0LWxlZnQgdGV4dC13aGl0ZSBjb2xsYXBzZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXRvZ2dsZT0nY29sbGFwc2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXRhcmdldD0nI2NvbGxhcHNlT25lJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD0nZmFsc2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWNvbnRyb2xzPSdjb2xsYXBzZU9uZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhcyBmYS1pZ2xvbyc+PC9pPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRHZXN0aW9uIGRlcyBnw650ZXNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9oMj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J2NvbGxhcHNlT25lJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2NvbGxhcHNlIHNob3cnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWxsZWRieT0naGVhZGluZ09uZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS1wYXJlbnQ9JyNhY2NvcmRpb25FeGFtcGxlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJvZHknPiAqL31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2FkbWluL2dlc3Rpb25QYWdlcyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiB0ZXh0LXdoaXRlIGJnLXNlY29uZGFyeSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhcyBmYS1hcnJvdy1yaWdodCc+PC9pPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRHZXN0aW9uIGRlcyBnw650ZXNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2FkbWluL2dlc3Rpb25JbWFnZXMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gdGV4dC13aGl0ZSBiZy1zZWNvbmRhcnknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYXMgZmEtYXJyb3ctcmlnaHQnPjwvaT57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0R2VzdGlvbiBkZXMgaW1hZ2VzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9hZG1pbi9nZXN0aW9uRmljaGllcnMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gdGV4dC13aGl0ZSBiZy1zZWNvbmRhcnknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYXMgZmEtYXJyb3ctcmlnaHQnPjwvaT57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0R2VzdGlvbiBkZXMgZmljaGllcnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2FkbWluL2dlc3Rpb25SZXZpZXdzJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIHRleHQtd2hpdGUgYmctc2Vjb25kYXJ5Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmFzIGZhLWFycm93LXJpZ2h0Jz48L2k+eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEdlc3Rpb24gZGVzIHJldmlld3NcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0ey8qIDwvZGl2PiAqL31cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJkIHRleHQtd2hpdGUgYmctZGFyayc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FyZC1oZWFkZXInIGlkPSdoZWFkaW5nVHdvJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0nbWItMCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdidG4gYnRuLWxpbmsgYnRuLWJsb2NrIHRleHQtbGVmdCB0ZXh0LXdoaXRlIGNvbGxhcHNlZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J2J1dHRvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtdG9nZ2xlPSdjb2xsYXBzZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtdGFyZ2V0PScjY29sbGFwc2VUd28nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWV4cGFuZGVkPSdmYWxzZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtY29udHJvbHM9J2NvbGxhcHNlVHdvJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmFyIGZhLWZpbGUtYWx0Jz48L2k+eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEdlc3Rpb24gZGVzIHBhZ2VzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J2NvbGxhcHNlVHdvJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2NvbGxhcHNlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsbGVkYnk9J2hlYWRpbmdUd28nXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtcGFyZW50PScjYWNjb3JkaW9uRXhhbXBsZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1ib2R5Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRTb21lIHBsYWNlaG9sZGVyIGNvbnRlbnQgZm9yIHRoZSBzZWNvbmRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhY2NvcmRpb24gcGFuZWwuIFRoaXMgcGFuZWwgaXMgaGlkZGVuIGJ5XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdC5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+ICovfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvYWRtaW4vZ2VzdGlvbkRpdmVycyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiB0ZXh0LXdoaXRlIGJnLXNlY29uZGFyeSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhcyBmYS1hcnJvdy1yaWdodCc+PC9pPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRQYWdlcyBkaXZlcnNlc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvYWRtaW4vZ2VzdGlvbkRpdmVycy9wYXJ0ZW5haXJlcyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiB0ZXh0LXdoaXRlIGJnLXNlY29uZGFyeSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhcyBmYS1hcnJvdy1yaWdodCc+PC9pPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRQYWdlcyBQYXJ0ZW5haXJlc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcmQgdGV4dC13aGl0ZSBiZy1kYXJrJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJkLWhlYWRlcicgaWQ9J2hlYWRpbmdUaHJlZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J21iLTAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYnRuIGJ0bi1saW5rIGJ0bi1ibG9jayB0ZXh0LWxlZnQgdGV4dC13aGl0ZSBjb2xsYXBzZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXRvZ2dsZT0nY29sbGFwc2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXRhcmdldD0nI2NvbGxhcHNlVGhyZWUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWV4cGFuZGVkPSdmYWxzZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtY29udHJvbHM9J2NvbGxhcHNlVGhyZWUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYXMgZmEtYmVkJz48L2k+eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEdlc3Rpb24gZGVzIHLDqXNlcnZhdGlvbnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9oMj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD0nY29sbGFwc2VUaHJlZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjb2xsYXBzZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbGxlZGJ5PSdoZWFkaW5nVGhyZWUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtcGFyZW50PScjYWNjb3JkaW9uRXhhbXBsZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1ib2R5Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRBbmQgbGFzdGx5LCB0aGUgcGxhY2Vob2xkZXIgY29udGVudCBmb3JcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGUgdGhpcmQgYW5kIGZpbmFsIGFjY29yZGlvbiBwYW5lbC5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRUaGlzIHBhbmVsIGlzIGhpZGRlbiBieSBkZWZhdWx0LlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4gKi99XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9hZG1pbi9yZXNlcnZhdGlvbic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiB0ZXh0LXdoaXRlIGJnLXNlY29uZGFyeSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhcyBmYS1hcnJvdy1yaWdodCc+PC9pPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRMaXN0ZSBkZXMgcsOpc2VydmF0aW9uc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2FkbWluL21lc3NhZ2VzJz5cclxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIHRleHQtd2hpdGUgYmctZGFyayc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhcyBmYS1jb21tZW50cyc+PC9pPiBNZXNzYWdlc1xyXG5cdFx0XHRcdFx0XHRcdFx0eycgICd9XHJcblx0XHRcdFx0XHRcdFx0XHR7bmV3TWVzc2FnZXMgPiAwICYmIChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9J2JhZGdlIGJhZGdlLXBpbGwgYmFkZ2UtaW5mbyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e25ld01lc3NhZ2VzfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2FkbWluJz5cclxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIHRleHQtd2hpdGUgYmctZGFyayc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhcyBmYS11c2VyLWZyaWVuZHMnPjwvaT4gR2VzdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0ZGVzIHV0aWxpc2F0ZXVyc1xyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvYWRtaW4nPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gdGV4dC13aGl0ZSBiZy1kYXJrJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmFzIGZhLWVudmVsb3BlJz48L2k+IEdlc3Rpb24gZGVzXHJcblx0XHRcdFx0XHRcdFx0XHRtYWlsc1xyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvYWRtaW4nPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gdGV4dC13aGl0ZSBiZy1kYXJrJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmFzIGZhLXVzZXItdGFnJz48L2k+IEdlc3Rpb24gZGVzXHJcblx0XHRcdFx0XHRcdFx0XHRjbGllbnRzXHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBpZD0ncGFnZS1jb250ZW50LXdyYXBwZXInPlxyXG5cdFx0XHRcdFx0PG5hdiBjbGFzc05hbWU9J25hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGJnLWRhcmsgYm9yZGVyLWJvdHRvbSc+XHJcblx0XHRcdFx0XHRcdHsvKiA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5JyBpZD0nbWVudS10b2dnbGUnPlxyXG5cdFx0XHRcdFx0XHRcdFRvZ2dsZSBNZW51XHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPiAqL31cclxuXHJcblx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J25hdmJhci10b2dnbGVyJ1xyXG5cdFx0XHRcdFx0XHRcdHR5cGU9J2J1dHRvbidcclxuXHRcdFx0XHRcdFx0XHRkYXRhLXRvZ2dsZT0nY29sbGFwc2UnXHJcblx0XHRcdFx0XHRcdFx0ZGF0YS10YXJnZXQ9JyNuYXZiYXJTdXBwb3J0ZWRDb250ZW50J1xyXG5cdFx0XHRcdFx0XHRcdGFyaWEtY29udHJvbHM9J25hdmJhclN1cHBvcnRlZENvbnRlbnQnXHJcblx0XHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD0nZmFsc2UnXHJcblx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0nVG9nZ2xlIG5hdmlnYXRpb24nPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nbmF2YmFyLXRvZ2dsZXItaWNvbic+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2NvbGxhcHNlIG5hdmJhci1jb2xsYXBzZSdcclxuXHRcdFx0XHRcdFx0XHRpZD0nbmF2YmFyU3VwcG9ydGVkQ29udGVudCc+XHJcblx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT0nbmF2YmFyLW5hdiBtbC1hdXRvIG10LTIgbXQtbGctMCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSduYXYtaXRlbSBhY3RpdmUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9J25hdi1saW5rJyBocmVmPScvYWRtaW4nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEVzcGFjZSBBZG1pbnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdzci1vbmx5Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdChjdXJyZW50KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J25hdi1pdGVtJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPSduYXYtbGluaycgaHJlZj0nLyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Vm9pciBsZSBzaXRlXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSduYXYtaXRlbSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSduYXYtbGluaydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb2dvdXQoKCkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Um91dGVyLnJlcGxhY2UoJy9sb2dpbicpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHREZWNvbm5lY3RlclxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0ey8qIDxsaSBjbGFzc05hbWU9J25hdi1pdGVtIGRyb3Bkb3duJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J25hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPScjJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkPSduYXZiYXJEcm9wZG93bidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyb2xlPSdidXR0b24nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS10b2dnbGU9J2Ryb3Bkb3duJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtaGFzcG9wdXA9J3RydWUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD0nZmFsc2UnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdERyb3Bkb3duXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWxsZWRieT0nbmF2YmFyRHJvcGRvd24nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nZHJvcGRvd24taXRlbScgaHJlZj0nIyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBY3Rpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPSdkcm9wZG93bi1pdGVtJyBocmVmPScjJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEFub3RoZXIgYWN0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkcm9wZG93bi1kaXZpZGVyJz48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9J2Ryb3Bkb3duLWl0ZW0nIGhyZWY9JyMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0U29tZXRoaW5nIGVsc2UgaGVyZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xpPiAqL31cclxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvbmF2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjb250YWluZXItZmx1aWQnXHJcblx0XHRcdFx0XHRcdC8vIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMxYzIwMjUnLCBoZWlnaHQ6ICcxMDB2aCcgfX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9