webpackHotUpdate_N_E("pages/index",{

/***/ "../backend/controllers/partenairesController.js":
false,

/***/ "../backend/models/PartenaireModel.js":
false,

/***/ "../backend/node_modules/express-async-handler/index.js":
false,

/***/ "../backend/node_modules/mongoose/dist/browser.umd.js":
false,

/***/ "../backend/node_modules/slugify/slugify.js":
false,

/***/ "./actions/partenairesActions.js":
/*!***************************************!*\
  !*** ./actions/partenairesActions.js ***!
  \***************************************/
/*! exports provided: ListAllPartenaires, listePartenaireById, createPartenaire, updatePartenaire, removePartenaire, ListAllPartenaireCards, listePartenaireCardById, createPartenaireCard, updatePartenaireCard, removePartenaireCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAllPartenaires", function() { return ListAllPartenaires; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listePartenaireById", function() { return listePartenaireById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPartenaire", function() { return createPartenaire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePartenaire", function() { return updatePartenaire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePartenaire", function() { return removePartenaire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAllPartenaireCards", function() { return ListAllPartenaireCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listePartenaireCardById", function() { return listePartenaireCardById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPartenaireCard", function() { return createPartenaireCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePartenaireCard", function() { return updatePartenaireCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePartenaireCard", function() { return removePartenaireCard; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");


var ListAllPartenaires = function ListAllPartenaires() {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/divers/partenaires"), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
_c = ListAllPartenaires;
var listePartenaireById = function listePartenaireById(id) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/divers/partenaire/").concat(id), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var createPartenaire = function createPartenaire(partenaire, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/divers/partenaire"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: JSON.stringify(partenaire)
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var updatePartenaire = function updatePartenaire(partenaire, id, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/divers/partenaire/").concat(id), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: JSON.stringify(partenaire)
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var removePartenaire = function removePartenaire(id, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/divers/partenaire/").concat(id), {
    method: 'DELETE',
    headers: {
      Authorization: "Bearer ".concat(token)
    }
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var ListAllPartenaireCards = function ListAllPartenaireCards(id) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/divers/partenaire/").concat(id, "/cards"), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
_c2 = ListAllPartenaireCards;
var listePartenaireCardById = function listePartenaireCardById(id, idCard) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/divers/partenaire/").concat(id, "/card/").concat(idCard), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var createPartenaireCard = function createPartenaireCard(partenaireCard, id, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/divers/partenaire/").concat(id, "/card"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: JSON.stringify(partenaireCard)
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var updatePartenaireCard = function updatePartenaireCard(partenaireCard, id, idCard, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/divers/partenaire/").concat(id, "/card/").concat(idCard), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: JSON.stringify(partenaireCard)
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var removePartenaireCard = function removePartenaireCard(id, idCard, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/divers/partenaire/").concat(id, "/card/").concat(idCard), {
    method: 'DELETE',
    headers: {
      Authorization: "Bearer ".concat(token)
    }
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};

var _c, _c2;

$RefreshReg$(_c, "ListAllPartenaires");
$RefreshReg$(_c2, "ListAllPartenaireCards");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/layout/Header.js":
/*!*************************************!*\
  !*** ./components/layout/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _node_modules_nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../node_modules/nprogress/nprogress.css */ "./node_modules/nprogress/nprogress.css");
/* harmony import */ var _node_modules_nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _actions_partenairesActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../actions/partenairesActions */ "./actions/partenairesActions.js");


var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\layout\\Header.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // import { APP_NAME } from '../config';

 // import 'bootstrap/dist/css/bootstrap.css';

 // import gites from '../../data';










next_router__WEBPACK_IMPORTED_MODULE_9___default.a.onRouteChangeStart = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_9___default.a.onRouteChangeComplete = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_9___default.a.onRouteChangeError = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();
};

var Header = function Header() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggle = function toggle() {
    return setIsOpen(!isOpen);
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      gites = _useState2[0],
      setGites = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      partenaires = _useState3[0],
      setPartenaires = _useState3[1];

  var listDesGites = function listDesGites() {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_8__["listGitesNoms"])().then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        setGites.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(gites).concat([data]));
      }
    });
  };

  var listDesPartenaires = function listDesPartenaires() {
    Object(_actions_partenairesActions__WEBPACK_IMPORTED_MODULE_11__["ListAllPartenaires"])().then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        setPartenaires.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(partenaires).concat([data]));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    listDesGites();
    listDesPartenaires();
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 3
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Navbar"], {
    color: "dark",
    dark: true,
    expand: "md",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 4
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavbarBrand"], {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
    src: "/images/logo wao.png",
    width: "80px",
    height: "35px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 6
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavbarToggler"], {
    onClick: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Collapse"], {
    isOpen: isOpen,
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"], {
    className: "mr-auto",
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 6
    }
  }, gites.map(function (gite, i) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/gite/".concat(gite.slug),
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 8
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 10
      }
    }, gite.nom)));
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/tarifs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 8
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
    style: {
      cursor: 'pointer'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, "Tarifs"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/reservation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 8
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
    style: {
      cursor: 'pointer'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, "R\xE9server"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 8
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
    style: {
      cursor: 'pointer'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, "Contact"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["UncontrolledDropdown"], {
    nav: true,
    inNavbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownToggle"], {
    nav: true,
    caret: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 8
    }
  }, "Divers"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownMenu"], {
    right: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 8
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/divers/alentours",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 10
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
    style: {
      cursor: 'pointer',
      color: 'black'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 12
    }
  }, "Alentours", ' ')))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/divers/FAQ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 10
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
    style: {
      cursor: 'pointer',
      color: 'black'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 12
    }
  }, "F.A.Q.")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["UncontrolledDropdown"], {
    nav: true,
    inNavbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownToggle"], {
    nav: true,
    caret: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 8
    }
  }, "Partenaires"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownMenu"], {
    right: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 8
    }
  }, partenaires.map(function (partenaire) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/partenaires/".concat(partenaire.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 10
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 11
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 12
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 13
      }
    }, partenaire.nom))));
  }))), !Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 8
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
    style: {
      cursor: 'pointer'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 10
    }
  }, "Connexion"))), Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() && Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_6__["isAuth"])().isAdmin && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 8
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
    style: {
      cursor: 'pointer'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 10
    }
  }, "Admin")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavbarText"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 6
    }
  }, "Les Gites Wao"))));
};

_s(Header, "9JIYR7w1NJuii0JXsfWvujCcjEE=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9wYXJ0ZW5haXJlc0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlci5qcyJdLCJuYW1lcyI6WyJMaXN0QWxsUGFydGVuYWlyZXMiLCJmZXRjaCIsIkFQSSIsIm1ldGhvZCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibGlzdGVQYXJ0ZW5haXJlQnlJZCIsImlkIiwiY3JlYXRlUGFydGVuYWlyZSIsInBhcnRlbmFpcmUiLCJ0b2tlbiIsImhlYWRlcnMiLCJBY2NlcHQiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cGRhdGVQYXJ0ZW5haXJlIiwicmVtb3ZlUGFydGVuYWlyZSIsIkxpc3RBbGxQYXJ0ZW5haXJlQ2FyZHMiLCJsaXN0ZVBhcnRlbmFpcmVDYXJkQnlJZCIsImlkQ2FyZCIsImNyZWF0ZVBhcnRlbmFpcmVDYXJkIiwicGFydGVuYWlyZUNhcmQiLCJ1cGRhdGVQYXJ0ZW5haXJlQ2FyZCIsInJlbW92ZVBhcnRlbmFpcmVDYXJkIiwiUm91dGVyIiwib25Sb3V0ZUNoYW5nZVN0YXJ0IiwidXJsIiwiTlByb2dyZXNzIiwic3RhcnQiLCJvblJvdXRlQ2hhbmdlQ29tcGxldGUiLCJkb25lIiwib25Sb3V0ZUNoYW5nZUVycm9yIiwiSGVhZGVyIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0b2dnbGUiLCJnaXRlcyIsInNldEdpdGVzIiwicGFydGVuYWlyZXMiLCJzZXRQYXJ0ZW5haXJlcyIsImxpc3REZXNHaXRlcyIsImxpc3RHaXRlc05vbXMiLCJkYXRhIiwiZXJyb3IiLCJsaXN0RGVzUGFydGVuYWlyZXMiLCJ1c2VFZmZlY3QiLCJtYXAiLCJnaXRlIiwiaSIsInNsdWciLCJjdXJzb3IiLCJub20iLCJjb2xvciIsImlzQXV0aCIsImlzQWRtaW4iXSwibWFwcGluZ3MiOiI7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TTs7S0FBQUEsTTtBQW9LU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzRhYTUzZjliZjZiZTE1YTBjNDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0QWxsUGFydGVuYWlyZXMgPSAoKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vZGl2ZXJzL3BhcnRlbmFpcmVzYCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RlUGFydGVuYWlyZUJ5SWQgPSAoaWQpID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9kaXZlcnMvcGFydGVuYWlyZS8ke2lkfWAsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVQYXJ0ZW5haXJlID0gKHBhcnRlbmFpcmUsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vZGl2ZXJzL3BhcnRlbmFpcmVgLCB7XHJcblx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcnRlbmFpcmUpLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlUGFydGVuYWlyZSA9IChwYXJ0ZW5haXJlLCBpZCwgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9kaXZlcnMvcGFydGVuYWlyZS8ke2lkfWAsIHtcclxuXHRcdG1ldGhvZDogJ1BVVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcnRlbmFpcmUpLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlUGFydGVuYWlyZSA9IChpZCwgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9kaXZlcnMvcGFydGVuYWlyZS8ke2lkfWAsIHtcclxuXHRcdG1ldGhvZDogJ0RFTEVURScsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExpc3RBbGxQYXJ0ZW5haXJlQ2FyZHMgPSAoaWQpID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9kaXZlcnMvcGFydGVuYWlyZS8ke2lkfS9jYXJkc2AsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0ZVBhcnRlbmFpcmVDYXJkQnlJZCA9IChpZCwgaWRDYXJkKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vZGl2ZXJzL3BhcnRlbmFpcmUvJHtpZH0vY2FyZC8ke2lkQ2FyZH1gLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlUGFydGVuYWlyZUNhcmQgPSAocGFydGVuYWlyZUNhcmQsIGlkLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L2RpdmVycy9wYXJ0ZW5haXJlLyR7aWR9L2NhcmRgLCB7XHJcblx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcnRlbmFpcmVDYXJkKSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVBhcnRlbmFpcmVDYXJkID0gKHBhcnRlbmFpcmVDYXJkLCBpZCwgaWRDYXJkLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L2RpdmVycy9wYXJ0ZW5haXJlLyR7aWR9L2NhcmQvJHtpZENhcmR9YCwge1xyXG5cdFx0bWV0aG9kOiAnUFVUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkocGFydGVuYWlyZUNhcmQpLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlUGFydGVuYWlyZUNhcmQgPSAoaWQsIGlkQ2FyZCwgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9kaXZlcnMvcGFydGVuYWlyZS8ke2lkfS9jYXJkLyR7aWRDYXJkfWAsIHtcclxuXHRcdG1ldGhvZDogJ0RFTEVURScsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgeyBBUFBfTkFNRSB9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuLy8gaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbi8vIGltcG9ydCBnaXRlcyBmcm9tICcuLi8uLi9kYXRhJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XHJcbmltcG9ydCB7IGlzQXV0aCwgbG9nb3V0IH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7XHJcblx0Q29sbGFwc2UsXHJcblx0TmF2YmFyLFxyXG5cdE5hdmJhclRvZ2dsZXIsXHJcblx0TmF2YmFyQnJhbmQsXHJcblx0TmF2LFxyXG5cdE5hdkl0ZW0sXHJcblx0TmF2TGluayxcclxuXHRVbmNvbnRyb2xsZWREcm9wZG93bixcclxuXHREcm9wZG93blRvZ2dsZSxcclxuXHREcm9wZG93bk1lbnUsXHJcblx0RHJvcGRvd25JdGVtLFxyXG5cdE5hdmJhclRleHQsXHJcbn0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IGxpc3RHaXRlc05vbXMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9ucHJvZ3Jlc3MvbnByb2dyZXNzLmNzcyc7XHJcbmltcG9ydCB7IExpc3RBbGxQYXJ0ZW5haXJlcyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvcGFydGVuYWlyZXNBY3Rpb25zJztcclxuXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSAodXJsKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKTtcclxuUm91dGVyLm9uUm91dGVDaGFuZ2VDb21wbGV0ZSA9ICh1cmwpID0+IE5Qcm9ncmVzcy5kb25lKCk7XHJcblJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3IgPSAodXJsKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pO1xyXG5cclxuXHRjb25zdCBbZ2l0ZXMsIHNldEdpdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbcGFydGVuYWlyZXMsIHNldFBhcnRlbmFpcmVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgbGlzdERlc0dpdGVzID0gKCkgPT4ge1xyXG5cdFx0bGlzdEdpdGVzTm9tcygpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0R2l0ZXMoLi4uZ2l0ZXMsIGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBsaXN0RGVzUGFydGVuYWlyZXMgPSAoKSA9PiB7XHJcblx0XHRMaXN0QWxsUGFydGVuYWlyZXMoKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFBhcnRlbmFpcmVzKC4uLnBhcnRlbmFpcmVzLCBkYXRhKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxpc3REZXNHaXRlcygpO1xyXG5cdFx0bGlzdERlc1BhcnRlbmFpcmVzKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PE5hdmJhciBjb2xvcj0nZGFyaycgZGFyayBleHBhbmQ9J21kJz5cclxuXHRcdFx0XHQ8TmF2YmFyQnJhbmQgaHJlZj0nLyc+XHJcblx0XHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdFx0c3JjPScvaW1hZ2VzL2xvZ28gd2FvLnBuZydcclxuXHRcdFx0XHRcdFx0d2lkdGg9JzgwcHgnXHJcblx0XHRcdFx0XHRcdGhlaWdodD0nMzVweCdcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9OYXZiYXJCcmFuZD5cclxuXHRcdFx0XHQ8TmF2YmFyVG9nZ2xlciBvbkNsaWNrPXt0b2dnbGV9IC8+XHJcblx0XHRcdFx0PENvbGxhcHNlIGlzT3Blbj17aXNPcGVufSBuYXZiYXI+XHJcblx0XHRcdFx0XHQ8TmF2IGNsYXNzTmFtZT0nbXItYXV0bycgbmF2YmFyPlxyXG5cdFx0XHRcdFx0XHR7Z2l0ZXMubWFwKChnaXRlLCBpKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC9naXRlLyR7Z2l0ZS5zbHVnfWB9IGtleT17aX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PE5hdkxpbmsgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2dpdGUubm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQpKX1cclxuXHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy90YXJpZnMnPlxyXG5cdFx0XHRcdFx0XHRcdDxOYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE5hdkxpbmsgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFRhcmlmc1xyXG5cdFx0XHRcdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvTmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL3Jlc2VydmF0aW9uJz5cclxuXHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRSw6lzZXJ2ZXJcclxuXHRcdFx0XHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9jb250YWN0Jz5cclxuXHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRDb250YWN0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9OYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblxyXG5cdFx0XHRcdFx0XHQ8VW5jb250cm9sbGVkRHJvcGRvd24gbmF2IGluTmF2YmFyPlxyXG5cdFx0XHRcdFx0XHRcdDxEcm9wZG93blRvZ2dsZSBuYXYgY2FyZXQ+XHJcblx0XHRcdFx0XHRcdFx0XHREaXZlcnNcclxuXHRcdFx0XHRcdFx0XHQ8L0Ryb3Bkb3duVG9nZ2xlPlxyXG5cdFx0XHRcdFx0XHRcdDxEcm9wZG93bk1lbnUgcmlnaHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RHJvcGRvd25JdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvZGl2ZXJzL2FsZW50b3Vycyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PE5hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TmF2TGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnNvcjogJ3BvaW50ZXInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAnYmxhY2snLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QWxlbnRvdXJzeycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvRHJvcGRvd25JdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PERyb3Bkb3duSXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2RpdmVycy9GQVEnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxOYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PE5hdkxpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjdXJzb3I6ICdwb2ludGVyJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ2JsYWNrJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEYuQS5RLlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9Ecm9wZG93bkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PC9Ecm9wZG93bk1lbnU+XHJcblx0XHRcdFx0XHRcdDwvVW5jb250cm9sbGVkRHJvcGRvd24+XHJcblxyXG5cdFx0XHRcdFx0XHQ8VW5jb250cm9sbGVkRHJvcGRvd24gbmF2IGluTmF2YmFyPlxyXG5cdFx0XHRcdFx0XHRcdDxEcm9wZG93blRvZ2dsZSBuYXYgY2FyZXQ+XHJcblx0XHRcdFx0XHRcdFx0XHRQYXJ0ZW5haXJlc1xyXG5cdFx0XHRcdFx0XHRcdDwvRHJvcGRvd25Ub2dnbGU+XHJcblx0XHRcdFx0XHRcdFx0PERyb3Bkb3duTWVudSByaWdodD5cclxuXHRcdFx0XHRcdFx0XHRcdHtwYXJ0ZW5haXJlcy5tYXAoKHBhcnRlbmFpcmUpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPXtgL3BhcnRlbmFpcmVzLyR7cGFydGVuYWlyZS5zbHVnfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxOYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PE5hdkxpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxEcm9wZG93bkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3BhcnRlbmFpcmUubm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0Ryb3Bkb3duSXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHsvKiA8RHJvcGRvd25JdGVtPlRlcnJvaXI8L0Ryb3Bkb3duSXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxEcm9wZG93bkl0ZW0+QWRyZXNzZXMgdXRpbGVzPC9Ecm9wZG93bkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RHJvcGRvd25JdGVtPkZlc3RpJ2J1ejwvRHJvcGRvd25JdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PERyb3Bkb3duSXRlbT5MYWJlbHM8L0Ryb3Bkb3duSXRlbT4gKi99XHJcblx0XHRcdFx0XHRcdFx0PC9Ecm9wZG93bk1lbnU+XHJcblx0XHRcdFx0XHRcdDwvVW5jb250cm9sbGVkRHJvcGRvd24+XHJcblx0XHRcdFx0XHRcdHshaXNBdXRoKCkgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9sb2dpbic+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PE5hdkxpbmsgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Q29ubmV4aW9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdHtpc0F1dGgoKSAmJiBpc0F1dGgoKS5pc0FkbWluICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvYWRtaW4nPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE5hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEFkbWluXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8L05hdj5cclxuXHRcdFx0XHRcdDxOYXZiYXJUZXh0PkxlcyBHaXRlcyBXYW88L05hdmJhclRleHQ+XHJcblx0XHRcdFx0PC9Db2xsYXBzZT5cclxuXHRcdFx0PC9OYXZiYXI+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9