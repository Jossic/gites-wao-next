webpackHotUpdate_N_E("pages/divers/FAQ",{

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

  var listDesGites = function listDesGites() {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_8__["listGitesNoms"])().then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        setGites.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(gites).concat([data]));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    listDesGites();
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 3
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Navbar"], {
    color: "dark",
    dark: true,
    expand: "md",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 4
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavbarBrand"], {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
    src: "/images/logo wao.png",
    width: "80px",
    height: "35px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 6
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavbarToggler"], {
    onClick: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Collapse"], {
    isOpen: isOpen,
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"], {
    className: "mr-auto",
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 6
    }
  }, gites.map(function (gite, i) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/gite/".concat(gite.slug),
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 8
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
      style: {
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 10
      }
    }, gite.nom)));
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/tarifs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 8
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
    style: {
      cursor: 'pointer'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, "Tarifs"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/reservation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 8
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
    style: {
      cursor: 'pointer'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, "R\xE9server"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 8
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
    style: {
      cursor: 'pointer'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, "Contact"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["UncontrolledDropdown"], {
    nav: true,
    inNavbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownToggle"], {
    nav: true,
    caret: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 8
    }
  }, "Divers"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownMenu"], {
    right: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 8
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, "Alentours"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/divers/alentours",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 10
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
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
      lineNumber: 109,
      columnNumber: 12
    }
  }, "F.A.Q.")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["UncontrolledDropdown"], {
    nav: true,
    inNavbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownToggle"], {
    nav: true,
    caret: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 8
    }
  }, "Partenaires"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownMenu"], {
    right: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 8
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, "Restauration"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, "Terroir"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, "Adresses utiles"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }, "Festi'buz"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, "Labels"))), !Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 8
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
    style: {
      cursor: 'pointer'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 10
    }
  }, "Connexion"))), Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() && Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_6__["isAuth"])().isAdmin && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/admin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 8
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
    style: {
      cursor: 'pointer'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 10
    }
  }, "Admin")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavbarText"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 6
    }
  }, "Les Gites Wao"))));
};

_s(Header, "as/rW/TEgY47gUeKb5NgHo0OAdY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJvdXRlciIsIm9uUm91dGVDaGFuZ2VTdGFydCIsInVybCIsIk5Qcm9ncmVzcyIsInN0YXJ0Iiwib25Sb3V0ZUNoYW5nZUNvbXBsZXRlIiwiZG9uZSIsIm9uUm91dGVDaGFuZ2VFcnJvciIsIkhlYWRlciIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlIiwiZ2l0ZXMiLCJzZXRHaXRlcyIsImxpc3REZXNHaXRlcyIsImxpc3RHaXRlc05vbXMiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIm1hcCIsImdpdGUiLCJpIiwic2x1ZyIsImN1cnNvciIsIm5vbSIsImNvbG9yIiwiaXNBdXRoIiwiaXNBZG1pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztDQUVBOztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBY0E7QUFDQTtBQUVBOztBQUVBQSxrREFBTSxDQUFDQyxrQkFBUCxHQUE0QixVQUFDQyxHQUFEO0FBQUEsU0FBU0MsZ0RBQVMsQ0FBQ0MsS0FBVixFQUFUO0FBQUEsQ0FBNUI7O0FBQ0FKLGtEQUFNLENBQUNLLHFCQUFQLEdBQStCLFVBQUNILEdBQUQ7QUFBQSxTQUFTQyxnREFBUyxDQUFDRyxJQUFWLEVBQVQ7QUFBQSxDQUEvQjs7QUFDQU4sa0RBQU0sQ0FBQ08sa0JBQVAsR0FBNEIsVUFBQ0wsR0FBRDtBQUFBLFNBQVNDLGdEQUFTLENBQUNHLElBQVYsRUFBVDtBQUFBLENBQTVCOztBQUVBLElBQU1FLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFDUUMsc0RBQVEsQ0FBQyxLQUFELENBRGhCO0FBQUEsTUFDYkMsTUFEYTtBQUFBLE1BQ0xDLFNBREs7O0FBRXBCLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsV0FBTUQsU0FBUyxDQUFDLENBQUNELE1BQUYsQ0FBZjtBQUFBLEdBQWY7O0FBRm9CLG1CQUlNRCxzREFBUSxDQUFDLEVBQUQsQ0FKZDtBQUFBLE1BSWJJLEtBSmE7QUFBQSxNQUlOQyxRQUpNOztBQU1wQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQzFCQyw4RUFBYSxHQUFHQyxJQUFoQixDQUFxQixVQUFDQyxJQUFELEVBQVU7QUFDOUIsVUFBSUEsSUFBSSxDQUFDQyxLQUFULEVBQWdCO0FBQ2ZDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0EsT0FGRCxNQUVPO0FBQ05MLGdCQUFRLE1BQVIsc0dBQVlELEtBQVosVUFBbUJLLElBQW5CO0FBQ0E7QUFDRCxLQU5EO0FBT0EsR0FSRDs7QUFVQUkseURBQVMsQ0FBQyxZQUFNO0FBQ2ZQLGdCQUFZO0FBQ1osR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLFNBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsaURBQUQ7QUFBUSxTQUFLLEVBQUMsTUFBZDtBQUFxQixRQUFJLE1BQXpCO0FBQTBCLFVBQU0sRUFBQyxJQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxzREFBRDtBQUFhLFFBQUksRUFBQyxHQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxpREFBRDtBQUNDLE9BQUcsRUFBQyxzQkFETDtBQUVDLFNBQUssRUFBQyxNQUZQO0FBR0MsVUFBTSxFQUFDLE1BSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREQsRUFRQyxNQUFDLHdEQUFEO0FBQWUsV0FBTyxFQUFFSCxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkQsRUFTQyxNQUFDLG1EQUFEO0FBQVUsVUFBTSxFQUFFRixNQUFsQjtBQUEwQixVQUFNLE1BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDhDQUFEO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBeUIsVUFBTSxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VHLEtBQUssQ0FBQ1UsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBLFdBQ1YsTUFBQyxnREFBRDtBQUFNLFVBQUksa0JBQVdELElBQUksQ0FBQ0UsSUFBaEIsQ0FBVjtBQUFrQyxTQUFHLEVBQUVELENBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQyxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQyxNQUFDLGtEQUFEO0FBQVMsV0FBSyxFQUFFO0FBQUVFLGNBQU0sRUFBRTtBQUFWLE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRUgsSUFBSSxDQUFDSSxHQURQLENBREQsQ0FERCxDQURVO0FBQUEsR0FBVixDQURGLEVBV0MsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGtEQUFEO0FBQVMsU0FBSyxFQUFFO0FBQUVELFlBQU0sRUFBRTtBQUFWLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxDQURELENBWEQsRUFtQkMsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxjQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGtEQUFEO0FBQVMsU0FBSyxFQUFFO0FBQUVBLFlBQU0sRUFBRTtBQUFWLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsQ0FERCxDQW5CRCxFQTJCQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsa0RBQUQ7QUFBUyxTQUFLLEVBQUU7QUFBRUEsWUFBTSxFQUFFO0FBQVYsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELENBREQsQ0EzQkQsRUFtQ0MsTUFBQywrREFBRDtBQUFzQixPQUFHLE1BQXpCO0FBQTBCLFlBQVEsTUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMseURBQUQ7QUFBZ0IsT0FBRyxNQUFuQjtBQUFvQixTQUFLLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxFQUlDLE1BQUMsdURBQUQ7QUFBYyxTQUFLLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsRUFFQyxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLG1CQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGtEQUFEO0FBQ0MsU0FBSyxFQUFFO0FBQ05BLFlBQU0sRUFBRSxTQURGO0FBRU5FLFdBQUssRUFBRTtBQUZELEtBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELENBREQsQ0FERCxDQUZELENBSkQsQ0FuQ0QsRUF5REMsTUFBQywrREFBRDtBQUFzQixPQUFHLE1BQXpCO0FBQTBCLFlBQVEsTUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMseURBQUQ7QUFBZ0IsT0FBRyxNQUFuQjtBQUFvQixTQUFLLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsRUFJQyxNQUFDLHVEQUFEO0FBQWMsU0FBSyxNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELEVBRUMsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkQsRUFHQyxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEQsRUFJQyxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkQsRUFLQyxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRCxDQUpELENBekRELEVBcUVFLENBQUNDLG1FQUFNLEVBQVAsSUFDQSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsa0RBQUQ7QUFBUyxTQUFLLEVBQUU7QUFBRUgsWUFBTSxFQUFFO0FBQVYsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxDQURELENBdEVGLEVBOEVFRyxtRUFBTSxNQUFNQSxtRUFBTSxHQUFHQyxPQUFyQixJQUNBLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxrREFBRDtBQUFTLFNBQUssRUFBRTtBQUFFSixZQUFNLEVBQUU7QUFBVixLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsQ0FERCxDQS9FRixDQURELEVBeUZDLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF6RkQsQ0FURCxDQURELENBREQ7QUF5R0EsQ0E3SEQ7O0dBQU1uQixNOztLQUFBQSxNO0FBK0hTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kaXZlcnMvRkFRLmI2ZmI3Mjc1NTI1YzI5ZDU1MGUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgeyBBUFBfTkFNRSB9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuLy8gaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbi8vIGltcG9ydCBnaXRlcyBmcm9tICcuLi8uLi9kYXRhJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XHJcbmltcG9ydCB7IGlzQXV0aCwgbG9nb3V0IH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7XHJcblx0Q29sbGFwc2UsXHJcblx0TmF2YmFyLFxyXG5cdE5hdmJhclRvZ2dsZXIsXHJcblx0TmF2YmFyQnJhbmQsXHJcblx0TmF2LFxyXG5cdE5hdkl0ZW0sXHJcblx0TmF2TGluayxcclxuXHRVbmNvbnRyb2xsZWREcm9wZG93bixcclxuXHREcm9wZG93blRvZ2dsZSxcclxuXHREcm9wZG93bk1lbnUsXHJcblx0RHJvcGRvd25JdGVtLFxyXG5cdE5hdmJhclRleHQsXHJcbn0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IGxpc3RHaXRlc05vbXMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9ucHJvZ3Jlc3MvbnByb2dyZXNzLmNzcyc7XHJcblxyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKHVybCkgPT4gTlByb2dyZXNzLnN0YXJ0KCk7XHJcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAodXJsKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUVycm9yID0gKHVybCkgPT4gTlByb2dyZXNzLmRvbmUoKTtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuXHRjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldElzT3BlbighaXNPcGVuKTtcclxuXHJcblx0Y29uc3QgW2dpdGVzLCBzZXRHaXRlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdGNvbnN0IGxpc3REZXNHaXRlcyA9ICgpID0+IHtcclxuXHRcdGxpc3RHaXRlc05vbXMoKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldEdpdGVzKC4uLmdpdGVzLCBkYXRhKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxpc3REZXNHaXRlcygpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxOYXZiYXIgY29sb3I9J2RhcmsnIGRhcmsgZXhwYW5kPSdtZCc+XHJcblx0XHRcdFx0PE5hdmJhckJyYW5kIGhyZWY9Jy8nPlxyXG5cdFx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRcdHNyYz0nL2ltYWdlcy9sb2dvIHdhby5wbmcnXHJcblx0XHRcdFx0XHRcdHdpZHRoPSc4MHB4J1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ9JzM1cHgnXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvTmF2YmFyQnJhbmQ+XHJcblx0XHRcdFx0PE5hdmJhclRvZ2dsZXIgb25DbGljaz17dG9nZ2xlfSAvPlxyXG5cdFx0XHRcdDxDb2xsYXBzZSBpc09wZW49e2lzT3Blbn0gbmF2YmFyPlxyXG5cdFx0XHRcdFx0PE5hdiBjbGFzc05hbWU9J21yLWF1dG8nIG5hdmJhcj5cclxuXHRcdFx0XHRcdFx0e2dpdGVzLm1hcCgoZ2l0ZSwgaSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvZ2l0ZS8ke2dpdGUuc2x1Z31gfSBrZXk9e2l9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PE5hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtnaXRlLm5vbX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9OYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvdGFyaWZzJz5cclxuXHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRUYXJpZnNcclxuXHRcdFx0XHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9yZXNlcnZhdGlvbic+XHJcblx0XHRcdFx0XHRcdFx0PE5hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TmF2TGluayBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0UsOpc2VydmVyXHJcblx0XHRcdFx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9OYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvY29udGFjdCc+XHJcblx0XHRcdFx0XHRcdFx0PE5hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TmF2TGluayBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Q29udGFjdFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvTmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cclxuXHRcdFx0XHRcdFx0PFVuY29udHJvbGxlZERyb3Bkb3duIG5hdiBpbk5hdmJhcj5cclxuXHRcdFx0XHRcdFx0XHQ8RHJvcGRvd25Ub2dnbGUgbmF2IGNhcmV0PlxyXG5cdFx0XHRcdFx0XHRcdFx0RGl2ZXJzXHJcblx0XHRcdFx0XHRcdFx0PC9Ecm9wZG93blRvZ2dsZT5cclxuXHRcdFx0XHRcdFx0XHQ8RHJvcGRvd25NZW51IHJpZ2h0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PERyb3Bkb3duSXRlbT5BbGVudG91cnM8L0Ryb3Bkb3duSXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxEcm9wZG93bkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9kaXZlcnMvYWxlbnRvdXJzJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdibGFjaycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRGLkEuUS5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvRHJvcGRvd25JdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDwvRHJvcGRvd25NZW51PlxyXG5cdFx0XHRcdFx0XHQ8L1VuY29udHJvbGxlZERyb3Bkb3duPlxyXG5cclxuXHRcdFx0XHRcdFx0PFVuY29udHJvbGxlZERyb3Bkb3duIG5hdiBpbk5hdmJhcj5cclxuXHRcdFx0XHRcdFx0XHQ8RHJvcGRvd25Ub2dnbGUgbmF2IGNhcmV0PlxyXG5cdFx0XHRcdFx0XHRcdFx0UGFydGVuYWlyZXNcclxuXHRcdFx0XHRcdFx0XHQ8L0Ryb3Bkb3duVG9nZ2xlPlxyXG5cdFx0XHRcdFx0XHRcdDxEcm9wZG93bk1lbnUgcmlnaHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RHJvcGRvd25JdGVtPlJlc3RhdXJhdGlvbjwvRHJvcGRvd25JdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PERyb3Bkb3duSXRlbT5UZXJyb2lyPC9Ecm9wZG93bkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RHJvcGRvd25JdGVtPkFkcmVzc2VzIHV0aWxlczwvRHJvcGRvd25JdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PERyb3Bkb3duSXRlbT5GZXN0aSdidXo8L0Ryb3Bkb3duSXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxEcm9wZG93bkl0ZW0+TGFiZWxzPC9Ecm9wZG93bkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PC9Ecm9wZG93bk1lbnU+XHJcblx0XHRcdFx0XHRcdDwvVW5jb250cm9sbGVkRHJvcGRvd24+XHJcblx0XHRcdFx0XHRcdHshaXNBdXRoKCkgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9sb2dpbic+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PE5hdkxpbmsgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Q29ubmV4aW9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdHtpc0F1dGgoKSAmJiBpc0F1dGgoKS5pc0FkbWluICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvYWRtaW4nPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE5hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEFkbWluXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8L05hdj5cclxuXHRcdFx0XHRcdDxOYXZiYXJUZXh0PkxlcyBHaXRlcyBXYW88L05hdmJhclRleHQ+XHJcblx0XHRcdFx0PC9Db2xsYXBzZT5cclxuXHRcdFx0PC9OYXZiYXI+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9