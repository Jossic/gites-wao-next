webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout/Header.js":
/*!*************************************!*\
  !*** ./components/layout/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _node_modules_nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../node_modules/nprogress/nprogress.css */ "./node_modules/nprogress/nprogress.css");
/* harmony import */ var _node_modules_nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\layout\\Header.js",
    _this = undefined,
    _s = $RefreshSig$();

 // import { APP_NAME } from '../config';



 // import gites from '../../data';







next_router__WEBPACK_IMPORTED_MODULE_8___default.a.onRouteChangeStart = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_8___default.a.onRouteChangeComplete = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_8___default.a.onRouteChangeError = function (url) {
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

  var listAllGites = function listAllGites() {
    var listeDesGites = Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_7__["listGites"])().then(function (data) {
      debugger;
      console.log(data);
    });
    debugger;
    console.log(listeDesGites);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    listAllGites();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"], {
      color: "dark",
      dark: true,
      expand: "md",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavbarBrand"], {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
          src: "/images/logo wao.png",
          width: "80px",
          height: "35px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavbarToggler"], {
        onClick: toggle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Collapse"], {
        isOpen: isOpen,
        navbar: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"], {
          className: "mr-auto",
          navbar: true,
          children: [gites.map(function (gite, i) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
                  style: {
                    cursor: 'pointer'
                  },
                  children: gite.nom
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 9
              }, _this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 8
            }, _this);
          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/tarifs",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
                style: {
                  cursor: 'pointer'
                },
                children: "Tarifs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/reserver",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
                style: {
                  cursor: 'pointer'
                },
                children: "R\xE9server"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/contact",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
                style: {
                  cursor: 'pointer'
                },
                children: "Contact"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["UncontrolledDropdown"], {
            nav: true,
            inNavbar: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["DropdownToggle"], {
              nav: true,
              caret: true,
              children: "Divers"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["DropdownMenu"], {
              right: true,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["DropdownItem"], {
                children: "Alentours"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["DropdownItem"], {
                children: "F.A.Q."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["UncontrolledDropdown"], {
            nav: true,
            inNavbar: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["DropdownToggle"], {
              nav: true,
              caret: true,
              children: "Partenaires"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["DropdownMenu"], {
              right: true,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["DropdownItem"], {
                children: "Restauration"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["DropdownItem"], {
                children: "Terroir"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["DropdownItem"], {
                children: "Adresses utiles"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["DropdownItem"], {
                children: "Festi'buz"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["DropdownItem"], {
                children: "Labels"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/login",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
                style: {
                  cursor: 'pointer'
                },
                children: "Connexion"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavbarText"], {
          children: "Les Gites Wao"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 3
  }, _this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJvdXRlciIsIm9uUm91dGVDaGFuZ2VTdGFydCIsInVybCIsIk5Qcm9ncmVzcyIsInN0YXJ0Iiwib25Sb3V0ZUNoYW5nZUNvbXBsZXRlIiwiZG9uZSIsIm9uUm91dGVDaGFuZ2VFcnJvciIsIkhlYWRlciIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlIiwiZ2l0ZXMiLCJzZXRHaXRlcyIsImxpc3RBbGxHaXRlcyIsImxpc3RlRGVzR2l0ZXMiLCJsaXN0R2l0ZXMiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJtYXAiLCJnaXRlIiwiaSIsImN1cnNvciIsIm5vbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQWNBO0FBQ0E7QUFFQTs7QUFFQUEsa0RBQU0sQ0FBQ0Msa0JBQVAsR0FBNEIsVUFBQ0MsR0FBRDtBQUFBLFNBQVNDLGdEQUFTLENBQUNDLEtBQVYsRUFBVDtBQUFBLENBQTVCOztBQUNBSixrREFBTSxDQUFDSyxxQkFBUCxHQUErQixVQUFDSCxHQUFEO0FBQUEsU0FBU0MsZ0RBQVMsQ0FBQ0csSUFBVixFQUFUO0FBQUEsQ0FBL0I7O0FBQ0FOLGtEQUFNLENBQUNPLGtCQUFQLEdBQTRCLFVBQUNMLEdBQUQ7QUFBQSxTQUFTQyxnREFBUyxDQUFDRyxJQUFWLEVBQVQ7QUFBQSxDQUE1Qjs7QUFFQSxJQUFNRSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsS0FBRCxDQURoQjtBQUFBLE1BQ2JDLE1BRGE7QUFBQSxNQUNMQyxTQURLOztBQUVwQixNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLFdBQU1ELFNBQVMsQ0FBQyxDQUFDRCxN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LHFFQUFDLGtEQUFEO0FBQUEscUNBQ0MscUVBQUMsa0RBQUQ7QUFBUyxxQkFBSyxFQUFFO0FBQUVBLHdCQUFNLEVBQUU7QUFBVixpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF4RkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBaUdDLHFFQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpHRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFpSEEsQ0FwSUQ7O0dBQU1sQixNOztLQUFBQSxNO0FBc0lTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yYWZiNzAzNTBhZTBlOTY0YTg4My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IHsgQVBQX05BTUUgfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG4vLyBpbXBvcnQgZ2l0ZXMgZnJvbSAnLi4vLi4vZGF0YSc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHtcclxuXHRDb2xsYXBzZSxcclxuXHROYXZiYXIsXHJcblx0TmF2YmFyVG9nZ2xlcixcclxuXHROYXZiYXJCcmFuZCxcclxuXHROYXYsXHJcblx0TmF2SXRlbSxcclxuXHROYXZMaW5rLFxyXG5cdFVuY29udHJvbGxlZERyb3Bkb3duLFxyXG5cdERyb3Bkb3duVG9nZ2xlLFxyXG5cdERyb3Bkb3duTWVudSxcclxuXHREcm9wZG93bkl0ZW0sXHJcblx0TmF2YmFyVGV4dCxcclxufSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgbGlzdEdpdGVzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvbnByb2dyZXNzL25wcm9ncmVzcy5jc3MnO1xyXG5cclxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9ICh1cmwpID0+IE5Qcm9ncmVzcy5zdGFydCgpO1xyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKHVybCkgPT4gTlByb2dyZXNzLmRvbmUoKTtcclxuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICh1cmwpID0+IE5Qcm9ncmVzcy5kb25lKCk7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcblx0Y29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3Blbik7XHJcblxyXG5cdGNvbnN0IFtnaXRlcywgc2V0R2l0ZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHRjb25zdCBsaXN0QWxsR2l0ZXMgPSAoKSA9PiB7XHJcblx0XHRjb25zdCBsaXN0ZURlc0dpdGVzID0gbGlzdEdpdGVzKCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHR9KTtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0Y29uc29sZS5sb2cobGlzdGVEZXNHaXRlcyk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxpc3RBbGxHaXRlcygpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxOYXZiYXIgY29sb3I9J2RhcmsnIGRhcmsgZXhwYW5kPSdtZCc+XHJcblx0XHRcdFx0PE5hdmJhckJyYW5kIGhyZWY9Jy8nPlxyXG5cdFx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRcdHNyYz0nL2ltYWdlcy9sb2dvIHdhby5wbmcnXHJcblx0XHRcdFx0XHRcdHdpZHRoPSc4MHB4J1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ9JzM1cHgnXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvTmF2YmFyQnJhbmQ+XHJcblx0XHRcdFx0PE5hdmJhclRvZ2dsZXIgb25DbGljaz17dG9nZ2xlfSAvPlxyXG5cdFx0XHRcdDxDb2xsYXBzZSBpc09wZW49e2lzT3Blbn0gbmF2YmFyPlxyXG5cdFx0XHRcdFx0PE5hdiBjbGFzc05hbWU9J21yLWF1dG8nIG5hdmJhcj5cclxuXHRcdFx0XHRcdFx0e2dpdGVzLm1hcCgoZ2l0ZSwgaSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy8nIGtleT17aX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PE5hdkxpbmsgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2dpdGUubm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQpKX1cclxuXHJcblx0XHRcdFx0XHRcdHsvKiA8TGluayBocmVmPScvZ2l0ZS9tYW5vbGEnPlxyXG5cdFx0XHRcdFx0XHRcdDxOYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE5hdkxpbmsgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdE1hbm9sYVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvTmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvZ2l0ZS9icmluY2hldHRlJz5cclxuXHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRCcmluY2hldHRlXHJcblx0XHRcdFx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9OYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvZ2l0ZS9sYXViZXJveWUnPlxyXG5cdFx0XHRcdFx0XHRcdDxOYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE5hdkxpbmsgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdExhdWJlcm95ZVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvTmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2dpdGUvcGV0aXQtbmF5Jz5cclxuXHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRQZXRpdCBOYXlcclxuXHRcdFx0XHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdDwvTGluaz4gKi99XHJcblxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvdGFyaWZzJz5cclxuXHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRUYXJpZnNcclxuXHRcdFx0XHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9yZXNlcnZlcic+XHJcblx0XHRcdFx0XHRcdFx0PE5hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TmF2TGluayBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0UsOpc2VydmVyXHJcblx0XHRcdFx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9OYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvY29udGFjdCc+XHJcblx0XHRcdFx0XHRcdFx0PE5hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TmF2TGluayBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Q29udGFjdFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvTmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cclxuXHRcdFx0XHRcdFx0PFVuY29udHJvbGxlZERyb3Bkb3duIG5hdiBpbk5hdmJhcj5cclxuXHRcdFx0XHRcdFx0XHQ8RHJvcGRvd25Ub2dnbGUgbmF2IGNhcmV0PlxyXG5cdFx0XHRcdFx0XHRcdFx0RGl2ZXJzXHJcblx0XHRcdFx0XHRcdFx0PC9Ecm9wZG93blRvZ2dsZT5cclxuXHRcdFx0XHRcdFx0XHQ8RHJvcGRvd25NZW51IHJpZ2h0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PERyb3Bkb3duSXRlbT5BbGVudG91cnM8L0Ryb3Bkb3duSXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxEcm9wZG93bkl0ZW0+Ri5BLlEuPC9Ecm9wZG93bkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PC9Ecm9wZG93bk1lbnU+XHJcblx0XHRcdFx0XHRcdDwvVW5jb250cm9sbGVkRHJvcGRvd24+XHJcblxyXG5cdFx0XHRcdFx0XHQ8VW5jb250cm9sbGVkRHJvcGRvd24gbmF2IGluTmF2YmFyPlxyXG5cdFx0XHRcdFx0XHRcdDxEcm9wZG93blRvZ2dsZSBuYXYgY2FyZXQ+XHJcblx0XHRcdFx0XHRcdFx0XHRQYXJ0ZW5haXJlc1xyXG5cdFx0XHRcdFx0XHRcdDwvRHJvcGRvd25Ub2dnbGU+XHJcblx0XHRcdFx0XHRcdFx0PERyb3Bkb3duTWVudSByaWdodD5cclxuXHRcdFx0XHRcdFx0XHRcdDxEcm9wZG93bkl0ZW0+UmVzdGF1cmF0aW9uPC9Ecm9wZG93bkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RHJvcGRvd25JdGVtPlRlcnJvaXI8L0Ryb3Bkb3duSXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxEcm9wZG93bkl0ZW0+QWRyZXNzZXMgdXRpbGVzPC9Ecm9wZG93bkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RHJvcGRvd25JdGVtPkZlc3RpJ2J1ejwvRHJvcGRvd25JdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PERyb3Bkb3duSXRlbT5MYWJlbHM8L0Ryb3Bkb3duSXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8L0Ryb3Bkb3duTWVudT5cclxuXHRcdFx0XHRcdFx0PC9VbmNvbnRyb2xsZWREcm9wZG93bj5cclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2xvZ2luJz5cclxuXHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRDb25uZXhpb25cclxuXHRcdFx0XHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdDwvTmF2PlxyXG5cdFx0XHRcdFx0PE5hdmJhclRleHQ+TGVzIEdpdGVzIFdhbzwvTmF2YmFyVGV4dD5cclxuXHRcdFx0XHQ8L0NvbGxhcHNlPlxyXG5cdFx0XHQ8L05hdmJhcj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=