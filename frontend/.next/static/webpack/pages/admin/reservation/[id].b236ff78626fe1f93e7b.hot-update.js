webpackHotUpdate_N_E("pages/admin/reservation/[id]",{

/***/ "./components/layout/AdminHeader.js":
/*!******************************************!*\
  !*** ./components/layout/AdminHeader.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var _node_modules_nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/nprogress/nprogress.css */ "./node_modules/nprogress/nprogress.css");
/* harmony import */ var _node_modules_nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_messageActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/messageActions */ "./actions/messageActions.js");
var _jsxFileName = "C:\\Users\\gites\\Dropbox\\gites-wao\\frontend\\components\\layout\\AdminHeader.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeStart = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeComplete = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeError = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
};

var AdminHeader = function AdminHeader(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      newMessages = _useState[0],
      setNewMessages = _useState[1];

  var recupNonLus = function recupNonLus() {
    Object(_actions_messageActions__WEBPACK_IMPORTED_MODULE_6__["countMessageNonLus"])().then(function (data) {
      if (data.error) {
        console.log(data.error);
      } else {
        setNewMessages(data);
      }
    });
  };

  console.log(newMessages);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    recupNonLus();
  }, []); // const user = JSON.parse(localStorage.getItem('user'));

  var user = {
    name: 'Jossic LAPIERRE',
    isAdmin: true
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "d-flex",
    id: "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "bg-dark border-right",
    id: "sidebar-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "sidebar-heading text-white text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 6
    }
  }, "Les G\xEEtes WAO"), __jsx("div", {
    className: "sidebar-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "user-pic text-center pb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
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
      lineNumber: 49,
      columnNumber: 8
    }
  })), _actions_authActions__WEBPACK_IMPORTED_MODULE_4__["isAuth"] && __jsx("div", {
    className: "user-info text-white text-center pb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 8
    }
  }, __jsx("span", {
    className: "user-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, user.name), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
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
      lineNumber: 60,
      columnNumber: 9
    }
  }, user.isAdmin ? 'Administrateur' : 'Utilisateur'), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "user-status mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
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
      lineNumber: 69,
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
      lineNumber: 75,
      columnNumber: 10
    }
  }, ' ', "Connect\xE9")))), __jsx("div", {
    className: "list-group list-group-flush",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 6
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/admin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 8
    }
  }, __jsx("i", {
    className: "fas fa-tachometer-alt",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }), ' ', "Dashboard")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/admin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 8
    }
  }, __jsx("i", {
    className: "fas fa-chart-line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }), " Vue d'ensemble")), __jsx("div", {
    className: "accordion",
    id: "accordionExample",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "card text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "card-header",
    id: "headingOne",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
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
      lineNumber: 105,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-igloo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
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
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/admin/gestionPages",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 10
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 12
    }
  }), ' ', "Gestion des g\xEEtes")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/admin/gestionImages",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 10
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 12
    }
  }), ' ', "Gestion des images")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/admin/gestionFichiers",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 10
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 12
    }
  }), ' ', "Gestion des fichiers")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/admin/gestionReviews",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 10
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 12
    }
  }), ' ', "Gestion des reviews")))), __jsx("div", {
    className: "card text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "card-header",
    id: "headingTwo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
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
      lineNumber: 154,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "far fa-file-alt",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
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
      lineNumber: 166,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/admin/gestionDivers",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 10
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 12
    }
  }), ' ', "Pages diverses")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/admin/gestionDivers/partenaires",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 10
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 12
    }
  }), ' ', "Pages Partenaires")))), __jsx("div", {
    className: "card text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "card-header",
    id: "headingThree",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
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
      lineNumber: 193,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-bed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
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
      lineNumber: 205,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/admin/reservation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 10
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-arrow-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 12
    }
  }), ' ', "Liste des r\xE9servations"))))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/admin/messages",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 8
    }
  }, __jsx("i", {
    className: "fas fa-comments",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 9
    }
  }), " Messages", '  ', newMessages > 0 && __jsx("span", {
    "class": "badge badge-pill badge-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 10
    }
  }, newMessages))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/admin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 8
    }
  }, __jsx("i", {
    className: "fas fa-user-friends",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 9
    }
  }), " Gestion des utilisateurs")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/admin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 8
    }
  }, __jsx("i", {
    className: "fas fa-envelope",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 9
    }
  }), " Gestion des mails")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/admin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "list-group-item list-group-item-action text-white bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 8
    }
  }, __jsx("i", {
    className: "fas fa-user-tag",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 9
    }
  }), " Gestion des clients")))), __jsx("div", {
    id: "page-content-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 5
    }
  }, __jsx("nav", {
    className: "navbar navbar-expand-lg navbar-dark bg-dark border-bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
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
      lineNumber: 264,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "navbar-toggler-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 8
    }
  })), __jsx("div", {
    className: "collapse navbar-collapse",
    id: "navbarSupportedContent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "navbar-nav ml-auto mt-2 mt-lg-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 8
    }
  }, __jsx("li", {
    className: "nav-item active",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "nav-link",
    href: "/admin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 10
    }
  }, "Espace Admin", ' ', __jsx("span", {
    className: "sr-only",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 11
    }
  }, "(current)"))), __jsx("li", {
    className: "nav-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "nav-link",
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 10
    }
  }, "Voir le site")), __jsx("li", {
    className: "nav-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "nav-link",
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_4__["logout"])(function () {
        return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/login');
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 10
    }
  }, "Deconnecter"))))), __jsx("div", {
    className: "container-fluid" // style={{ backgroundColor: '#1c2025', height: '100vh' }}
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 6
    }
  }, children))));
};

_s(AdminHeader, "qCEx5vTkOT7bn0Bde2bKRKsxlfg=");

_c = AdminHeader;
/* harmony default export */ __webpack_exports__["default"] = (AdminHeader);

var _c;

$RefreshReg$(_c, "AdminHeader");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvQWRtaW5IZWFkZXIuanMiXSwibmFtZXMiOlsiUm91dGVyIiwib25Sb3V0ZUNoYW5nZVN0YXJ0IiwidXJsIiwiTlByb2dyZXNzIiwic3RhcnQiLCJvblJvdXRlQ2hhbmdlQ29tcGxldGUiLCJkb25lIiwib25Sb3V0ZUNoYW5nZUVycm9yIiwiQWRtaW5IZWFkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwibmV3TWVzc2FnZXMiLCJzZXROZXdNZXNzYWdlcyIsInJlY3VwTm9uTHVzIiwiY291bnRNZXNzYWdlTm9uTHVzIiwidGhlbiIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJ1c2VyIiwibmFtZSIsImlzQWRtaW4iLCJjb2xvciIsImZvbnRTaXplIiwiaXNBdXRoIiwiY3Vyc29yIiwibG9nb3V0IiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsa0RBQU0sQ0FBQ0Msa0JBQVAsR0FBNEIsVUFBQ0MsR0FBRDtBQUFBLFNBQVNDLGdEQUFTLENBQUNDLEtBQVYsRUFBVDtBQUFBLENBQTVCOztBQUNBSixrREFBTSxDQUFDSyxxQkFBUCxHQUErQixVQUFDSCxHQUFEO0FBQUEsU0FBU0MsZ0RBQVMsQ0FBQ0csSUFBVixFQUFUO0FBQUEsQ0FBL0I7O0FBQ0FOLGtEQUFNLENBQUNPLGtCQUFQLEdBQTRCLFVBQUNMLEdBQUQ7QUFBQSxTQUFTQyxnREFBUyxDQUFDRyxJQUFWLEVBQVQ7QUFBQSxDQUE1Qjs7QUFDQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDQ0Msc0RBQVEsQ0FBQyxDQUFELENBRFQ7QUFBQSxNQUM5QkMsV0FEOEI7QUFBQSxNQUNqQkMsY0FE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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUcsYUFBUyxFQUFDLFVBQWI7QUFBd0IsUUFBSSxFQUFDLEdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQsQ0FURCxFQWNDO0FBQUksYUFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQ0MsYUFBUyxFQUFDLFVBRFg7QUFFQyxTQUFLLEVBQUU7QUFBRWdCLFlBQU0sRUFBRTtBQUFWLEtBRlI7QUFHQyxXQUFPLEVBQUU7QUFBQSxhQUNSQyxtRUFBTSxDQUFDO0FBQUEsZUFDTjVCLGtEQUFNLENBQUM2QixPQUFQLENBQWUsUUFBZixDQURNO0FBQUEsT0FBRCxDQURFO0FBQUEsS0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELENBZEQsQ0FIRCxDQWhCRCxDQURELEVBNEVDO0FBQ0MsYUFBUyxFQUFDLGlCQURYLENBRUM7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUVwQixRQUpGLENBNUVELENBN05ELENBREQsQ0FERDtBQXFUQSxDQTVVRDs7R0FBTUQsVzs7S0FBQUEsVztBQThVU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24vW2lkXS5iMjM2ZmY3ODYyNmZlMWY5M2U3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgaXNBdXRoLCBsb2dvdXQgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvbnByb2dyZXNzL25wcm9ncmVzcy5jc3MnO1xyXG5pbXBvcnQgeyBjb3VudE1lc3NhZ2VOb25MdXMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL21lc3NhZ2VBY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSAodXJsKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKTtcclxuUm91dGVyLm9uUm91dGVDaGFuZ2VDb21wbGV0ZSA9ICh1cmwpID0+IE5Qcm9ncmVzcy5kb25lKCk7XHJcblJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3IgPSAodXJsKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG5jb25zdCBBZG1pbkhlYWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHRjb25zdCBbbmV3TWVzc2FnZXMsIHNldE5ld01lc3NhZ2VzXSA9IHVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IHJlY3VwTm9uTHVzID0gKCkgPT4ge1xyXG5cdFx0Y291bnRNZXNzYWdlTm9uTHVzKCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldE5ld01lc3NhZ2VzKGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cdGNvbnNvbGUubG9nKG5ld01lc3NhZ2VzKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHJlY3VwTm9uTHVzKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHQvLyBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcclxuXHJcblx0Y29uc3QgdXNlciA9IHtcclxuXHRcdG5hbWU6ICdKb3NzaWMgTEFQSUVSUkUnLFxyXG5cdFx0aXNBZG1pbjogdHJ1ZSxcclxuXHR9O1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4JyBpZD0nd3JhcHBlcic+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2JnLWRhcmsgYm9yZGVyLXJpZ2h0JyBpZD0nc2lkZWJhci13cmFwcGVyJz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaWRlYmFyLWhlYWRpbmcgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlcic+XHJcblx0XHRcdFx0XHRcdExlcyBHw650ZXMgV0FPXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzaWRlYmFyLWhlYWRlcic+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd1c2VyLXBpYyB0ZXh0LWNlbnRlciBwYi0yJz5cclxuXHRcdFx0XHRcdFx0XHR7LyogPGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdpbWctcmVzcG9uc2l2ZSBpbWctcm91bmRlZCdcclxuXHRcdFx0XHRcdFx0XHRcdHNyYz0nL2ltYWdlcy9sb2dvdjQtMTAyNHg0OTYucG5nJ1xyXG5cdFx0XHRcdFx0XHRcdFx0YWx0PSdVc2VyIHBpY3R1cmUnXHJcblx0XHRcdFx0XHRcdFx0Lz4gKi99XHJcblx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmFyIGZhLXVzZXItY2lyY2xlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICd3aGl0ZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiAnNDBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHR9fT48L2k+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHR7aXNBdXRoICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndXNlci1pbmZvIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgcGItMyc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3VzZXItbmFtZSc+e3VzZXIubmFtZX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxzdHJvbmdcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSd1c2VyLXJvbGUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGNvbG9yOiAnI2QzZDNkMycgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHt1c2VyLmlzQWRtaW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ/ICdBZG1pbmlzdHJhdGV1cidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICdVdGlsaXNhdGV1cid9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3N0cm9uZz5cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSd1c2VyLXN0YXR1cyBtdC0zJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZhIGZhLWNpcmNsZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICcjMDBmZjA0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiAnMTBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJyMwMGZmMDQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6ICcxNXB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdENvbm5lY3TDqVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2gnPlxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvYWRtaW4nPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gdGV4dC13aGl0ZSBiZy1kYXJrJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmFzIGZhLXRhY2hvbWV0ZXItYWx0Jz48L2k+eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdERhc2hib2FyZFxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvYWRtaW4nPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gdGV4dC13aGl0ZSBiZy1kYXJrJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmFzIGZhLWNoYXJ0LWxpbmUnPjwvaT4gVnVlXHJcblx0XHRcdFx0XHRcdFx0XHRkJ2Vuc2VtYmxlXHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYWNjb3JkaW9uJyBpZD0nYWNjb3JkaW9uRXhhbXBsZSc+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcmQgdGV4dC13aGl0ZSBiZy1kYXJrJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJkLWhlYWRlcicgaWQ9J2hlYWRpbmdPbmUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdtYi0wJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2J0biBidG4tbGluayBidG4tYmxvY2sgdGV4dC1sZWZ0IHRleHQtd2hpdGUgY29sbGFwc2VkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS10b2dnbGU9J2NvbGxhcHNlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS10YXJnZXQ9JyNjb2xsYXBzZU9uZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtZXhwYW5kZWQ9J2ZhbHNlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1jb250cm9scz0nY29sbGFwc2VPbmUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYXMgZmEtaWdsb28nPjwvaT57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0R2VzdGlvbiBkZXMgZ8OudGVzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSdjb2xsYXBzZU9uZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjb2xsYXBzZSBzaG93J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsbGVkYnk9J2hlYWRpbmdPbmUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtcGFyZW50PScjYWNjb3JkaW9uRXhhbXBsZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1ib2R5Jz4gKi99XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9hZG1pbi9nZXN0aW9uUGFnZXMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gdGV4dC13aGl0ZSBiZy1zZWNvbmRhcnknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYXMgZmEtYXJyb3ctcmlnaHQnPjwvaT57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0R2VzdGlvbiBkZXMgZ8OudGVzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9hZG1pbi9nZXN0aW9uSW1hZ2VzJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIHRleHQtd2hpdGUgYmctc2Vjb25kYXJ5Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmFzIGZhLWFycm93LXJpZ2h0Jz48L2k+eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEdlc3Rpb24gZGVzIGltYWdlc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvYWRtaW4vZ2VzdGlvbkZpY2hpZXJzJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIHRleHQtd2hpdGUgYmctc2Vjb25kYXJ5Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmFzIGZhLWFycm93LXJpZ2h0Jz48L2k+eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEdlc3Rpb24gZGVzIGZpY2hpZXJzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9hZG1pbi9nZXN0aW9uUmV2aWV3cyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiB0ZXh0LXdoaXRlIGJnLXNlY29uZGFyeSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhcyBmYS1hcnJvdy1yaWdodCc+PC9pPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRHZXN0aW9uIGRlcyByZXZpZXdzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8L2Rpdj4gKi99XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FyZCB0ZXh0LXdoaXRlIGJnLWRhcmsnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcmQtaGVhZGVyJyBpZD0naGVhZGluZ1R3byc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J21iLTAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYnRuIGJ0bi1saW5rIGJ0bi1ibG9jayB0ZXh0LWxlZnQgdGV4dC13aGl0ZSBjb2xsYXBzZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXRvZ2dsZT0nY29sbGFwc2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXRhcmdldD0nI2NvbGxhcHNlVHdvJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD0nZmFsc2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWNvbnRyb2xzPSdjb2xsYXBzZVR3byc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhciBmYS1maWxlLWFsdCc+PC9pPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRHZXN0aW9uIGRlcyBwYWdlc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSdjb2xsYXBzZVR3bydcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjb2xsYXBzZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbGxlZGJ5PSdoZWFkaW5nVHdvJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXBhcmVudD0nI2FjY29yZGlvbkV4YW1wbGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9J2NhcmQtYm9keSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0U29tZSBwbGFjZWhvbGRlciBjb250ZW50IGZvciB0aGUgc2Vjb25kXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWNjb3JkaW9uIHBhbmVsLiBUaGlzIHBhbmVsIGlzIGhpZGRlbiBieVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHQuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PiAqL31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2FkbWluL2dlc3Rpb25EaXZlcnMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gdGV4dC13aGl0ZSBiZy1zZWNvbmRhcnknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYXMgZmEtYXJyb3ctcmlnaHQnPjwvaT57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0UGFnZXMgZGl2ZXJzZXNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2FkbWluL2dlc3Rpb25EaXZlcnMvcGFydGVuYWlyZXMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gdGV4dC13aGl0ZSBiZy1zZWNvbmRhcnknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYXMgZmEtYXJyb3ctcmlnaHQnPjwvaT57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0UGFnZXMgUGFydGVuYWlyZXNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJkIHRleHQtd2hpdGUgYmctZGFyayc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2FyZC1oZWFkZXInIGlkPSdoZWFkaW5nVGhyZWUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSdtYi0wJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2J0biBidG4tbGluayBidG4tYmxvY2sgdGV4dC1sZWZ0IHRleHQtd2hpdGUgY29sbGFwc2VkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS10b2dnbGU9J2NvbGxhcHNlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS10YXJnZXQ9JyNjb2xsYXBzZVRocmVlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1leHBhbmRlZD0nZmFsc2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWNvbnRyb2xzPSdjb2xsYXBzZVRocmVlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmFzIGZhLWJlZCc+PC9pPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRHZXN0aW9uIGRlcyByw6lzZXJ2YXRpb25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J2NvbGxhcHNlVGhyZWUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY29sbGFwc2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWxsZWRieT0naGVhZGluZ1RocmVlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXBhcmVudD0nI2FjY29yZGlvbkV4YW1wbGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9J2NhcmQtYm9keSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0QW5kIGxhc3RseSwgdGhlIHBsYWNlaG9sZGVyIGNvbnRlbnQgZm9yXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhlIHRoaXJkIGFuZCBmaW5hbCBhY2NvcmRpb24gcGFuZWwuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0VGhpcyBwYW5lbCBpcyBoaWRkZW4gYnkgZGVmYXVsdC5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+ICovfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvYWRtaW4vcmVzZXJ2YXRpb24nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gdGV4dC13aGl0ZSBiZy1zZWNvbmRhcnknPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYXMgZmEtYXJyb3ctcmlnaHQnPjwvaT57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0TGlzdGUgZGVzIHLDqXNlcnZhdGlvbnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9hZG1pbi9tZXNzYWdlcyc+XHJcblx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiB0ZXh0LXdoaXRlIGJnLWRhcmsnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYXMgZmEtY29tbWVudHMnPjwvaT4gTWVzc2FnZXNcclxuXHRcdFx0XHRcdFx0XHRcdHsnICAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0e25ld01lc3NhZ2VzID4gMCAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPSdiYWRnZSBiYWRnZS1waWxsIGJhZGdlLWluZm8nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtuZXdNZXNzYWdlc31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9hZG1pbic+XHJcblx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiB0ZXh0LXdoaXRlIGJnLWRhcmsnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYXMgZmEtdXNlci1mcmllbmRzJz48L2k+IEdlc3Rpb25cclxuXHRcdFx0XHRcdFx0XHRcdGRlcyB1dGlsaXNhdGV1cnNcclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2FkbWluJz5cclxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIHRleHQtd2hpdGUgYmctZGFyayc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhcyBmYS1lbnZlbG9wZSc+PC9pPiBHZXN0aW9uIGRlc1xyXG5cdFx0XHRcdFx0XHRcdFx0bWFpbHNcclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2FkbWluJz5cclxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIHRleHQtd2hpdGUgYmctZGFyayc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhcyBmYS11c2VyLXRhZyc+PC9pPiBHZXN0aW9uIGRlc1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xpZW50c1xyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgaWQ9J3BhZ2UtY29udGVudC13cmFwcGVyJz5cclxuXHRcdFx0XHRcdDxuYXYgY2xhc3NOYW1lPSduYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZGFyayBiZy1kYXJrIGJvcmRlci1ib3R0b20nPlxyXG5cdFx0XHRcdFx0XHR7LyogPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeScgaWQ9J21lbnUtdG9nZ2xlJz5cclxuXHRcdFx0XHRcdFx0XHRUb2dnbGUgTWVudVxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj4gKi99XHJcblxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSduYXZiYXItdG9nZ2xlcidcclxuXHRcdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXHJcblx0XHRcdFx0XHRcdFx0ZGF0YS10b2dnbGU9J2NvbGxhcHNlJ1xyXG5cdFx0XHRcdFx0XHRcdGRhdGEtdGFyZ2V0PScjbmF2YmFyU3VwcG9ydGVkQ29udGVudCdcclxuXHRcdFx0XHRcdFx0XHRhcmlhLWNvbnRyb2xzPSduYXZiYXJTdXBwb3J0ZWRDb250ZW50J1xyXG5cdFx0XHRcdFx0XHRcdGFyaWEtZXhwYW5kZWQ9J2ZhbHNlJ1xyXG5cdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J1RvZ2dsZSBuYXZpZ2F0aW9uJz5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J25hdmJhci10b2dnbGVyLWljb24nPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjb2xsYXBzZSBuYXZiYXItY29sbGFwc2UnXHJcblx0XHRcdFx0XHRcdFx0aWQ9J25hdmJhclN1cHBvcnRlZENvbnRlbnQnPlxyXG5cdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9J25hdmJhci1uYXYgbWwtYXV0byBtdC0yIG10LWxnLTAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbmF2LWl0ZW0gYWN0aXZlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPSduYXYtbGluaycgaHJlZj0nL2FkbWluJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRFc3BhY2UgQWRtaW57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nc3Itb25seSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoY3VycmVudClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSduYXYtaXRlbSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nbmF2LWxpbmsnIGhyZWY9Jy8nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFZvaXIgbGUgc2l0ZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbmF2LWl0ZW0nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nbmF2LWxpbmsnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bG9nb3V0KCgpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFJvdXRlci5yZXBsYWNlKCcvbG9naW4nKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0RGVjb25uZWN0ZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdHsvKiA8bGkgY2xhc3NOYW1lPSduYXYtaXRlbSBkcm9wZG93bic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSduYXYtbGluayBkcm9wZG93bi10b2dnbGUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZj0nIydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZD0nbmF2YmFyRHJvcGRvd24nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cm9sZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtdG9nZ2xlPSdkcm9wZG93bidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWhhc3BvcHVwPSd0cnVlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtZXhwYW5kZWQ9J2ZhbHNlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHREcm9wZG93blxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Ryb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsbGVkYnk9J25hdmJhckRyb3Bkb3duJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9J2Ryb3Bkb3duLWl0ZW0nIGhyZWY9JyMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QWN0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nZHJvcGRvd24taXRlbScgaHJlZj0nIyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBbm90aGVyIGFjdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZHJvcGRvd24tZGl2aWRlcic+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPSdkcm9wZG93bi1pdGVtJyBocmVmPScjJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFNvbWV0aGluZyBlbHNlIGhlcmVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT4gKi99XHJcblx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L25hdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY29udGFpbmVyLWZsdWlkJ1xyXG5cdFx0XHRcdFx0XHQvLyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMWMyMDI1JywgaGVpZ2h0OiAnMTAwdmgnIH19XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbkhlYWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==