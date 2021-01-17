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

var Header = function Header(_ref) {
  _s();

  var noms = _ref.noms;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggle = function toggle() {
    return setIsOpen(!isOpen);
  };

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
          lineNumber: 39,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavbarToggler"], {
        onClick: toggle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Collapse"], {
        isOpen: isOpen,
        navbar: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"], {
          className: "mr-auto",
          navbar: true,
          children: [noms.forEach(function (nom, i) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
                  style: {
                    cursor: 'pointer'
                  },
                  children: nom
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 9
              }, _this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
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
                lineNumber: 91,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
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
                lineNumber: 99,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
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
                lineNumber: 107,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
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
              lineNumber: 114,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["DropdownMenu"], {
              right: true,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["DropdownItem"], {
                children: "Alentours"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["DropdownItem"], {
                children: "F.A.Q."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 113,
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
              lineNumber: 124,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["DropdownMenu"], {
              right: true,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["DropdownItem"], {
                children: "Restauration"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["DropdownItem"], {
                children: "Terroir"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["DropdownItem"], {
                children: "Adresses utiles"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["DropdownItem"], {
                children: "Festi'buz"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["DropdownItem"], {
                children: "Labels"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
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
                lineNumber: 137,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavbarText"], {
          children: "Les Gites Wao"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 3
  }, _this);
};

_s(Header, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");

_c = Header;

Header.getInitialProps = function () {
  return Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_7__["listGites"])().then(function (data) {
    console.log(data);

    if (data.error) {
      console.log(data.error);
    } else {
      return {
        noms: data.nom
      };
    }
  });
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJvdXRlciIsIm9uUm91dGVDaGFuZ2VTdGFydCIsInVybCIsIk5Qcm9ncmVzcyIsInN0YXJ0Iiwib25Sb3V0ZUNoYW5nZUNvbXBsZXRlIiwiZG9uZSIsIm9uUm91dGVDaGFuZ2VFcnJvciIsIkhlYWRlciIsIm5vbXMiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsInRvZ2dsZSIsImZvckVhY2giLCJub20iLCJpIiwiY3Vyc29yIiwiZ2V0SW5pdGlhbFByb3BzIiwibGlzdEdpdGVzIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFjQTtBQUNBO0FBRUE7O0FBRUFBLGtEQUFNLENBQUNDLGtCQUFQLEdBQTRCLFVBQUNDLEdBQUQ7QUFBQSxTQUFTQyxnREFBUyxDQUFDQyxLQUFWLEVBQVQ7QUFBQSxDQUE1Qjs7QUFDQUosa0RBQU0sQ0FBQ0sscUJBQVAsR0FBK0IsVUFBQ0gsR0FBRDtBQUFBLFNBQVNDLGdEQUFTLENBQUNHLElBQVYsRUFBVDtBQUFBLENBQS9COztBQUNBTixrREFBTSxDQUFDTyxrQkFBUCxHQUE0QixVQUFDTCxHQUFEO0FBQUEsU0FBU0MsZ0RBQVMsQ0FBQ0csSUFBVixFQUFUO0FBQUEsQ0FBNUI7O0FBRUEsSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFDQUMsc0RBQVEsQ0FBQyxLQUFELENBRFI7QUFBQSxNQUNyQkMsTUFEcUI7QUFBQSxNQUNiQyxTQURhOztBQUU1QixNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLFdBQU1ELFNBQVMsQ0FBQyxDQUFDRCxNQUFG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Q0FySEQ7O0dBQU1ULE07O0tBQUFBLE07O0FBdUhOQSxNQUFNLENBQUNVLGVBQVAsR0FBeUIsWUFBTTtBQUM5QixTQUFPQyxzRUFBUyxHQUFHQyxJQUFaLENBQWlCLFVBQUNDLElBQUQsRUFBVTtBQUNqQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7O0FBQ0EsUUFBSUEsSUFBSSxDQUFDRyxLQUFULEVBQWdCO0FBQ2ZGLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFJLENBQUNHLEtBQWpCO0FBQ0EsS0FGRCxNQUVPO0FBQ04sYUFBTztBQUNOZixZQUFJLEVBQUVZLElBQUksQ0FBQ047QUFETCxPQUFQO0FBR0E7QUFDRCxHQVRNLENBQVA7QUFVQSxDQVhEOztBQWFlUCxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMTE1ZDkwYmU2NzUxODBkNjBkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IHsgQVBQX05BTUUgfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG4vLyBpbXBvcnQgZ2l0ZXMgZnJvbSAnLi4vLi4vZGF0YSc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHtcclxuXHRDb2xsYXBzZSxcclxuXHROYXZiYXIsXHJcblx0TmF2YmFyVG9nZ2xlcixcclxuXHROYXZiYXJCcmFuZCxcclxuXHROYXYsXHJcblx0TmF2SXRlbSxcclxuXHROYXZMaW5rLFxyXG5cdFVuY29udHJvbGxlZERyb3Bkb3duLFxyXG5cdERyb3Bkb3duVG9nZ2xlLFxyXG5cdERyb3Bkb3duTWVudSxcclxuXHREcm9wZG93bkl0ZW0sXHJcblx0TmF2YmFyVGV4dCxcclxufSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgbGlzdEdpdGVzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvbnByb2dyZXNzL25wcm9ncmVzcy5jc3MnO1xyXG5cclxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9ICh1cmwpID0+IE5Qcm9ncmVzcy5zdGFydCgpO1xyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKHVybCkgPT4gTlByb2dyZXNzLmRvbmUoKTtcclxuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICh1cmwpID0+IE5Qcm9ncmVzcy5kb25lKCk7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoeyBub21zIH0pID0+IHtcclxuXHRjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldElzT3BlbighaXNPcGVuKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxOYXZiYXIgY29sb3I9J2RhcmsnIGRhcmsgZXhwYW5kPSdtZCc+XHJcblx0XHRcdFx0PE5hdmJhckJyYW5kIGhyZWY9Jy8nPlxyXG5cdFx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRcdHNyYz0nL2ltYWdlcy9sb2dvIHdhby5wbmcnXHJcblx0XHRcdFx0XHRcdHdpZHRoPSc4MHB4J1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ9JzM1cHgnXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvTmF2YmFyQnJhbmQ+XHJcblx0XHRcdFx0PE5hdmJhclRvZ2dsZXIgb25DbGljaz17dG9nZ2xlfSAvPlxyXG5cdFx0XHRcdDxDb2xsYXBzZSBpc09wZW49e2lzT3Blbn0gbmF2YmFyPlxyXG5cdFx0XHRcdFx0PE5hdiBjbGFzc05hbWU9J21yLWF1dG8nIG5hdmJhcj5cclxuXHRcdFx0XHRcdFx0e25vbXMuZm9yRWFjaCgobm9tLCBpKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nLycga2V5PXtpfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxOYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TmF2TGluayBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7bm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQpKX1cclxuXHJcblx0XHRcdFx0XHRcdHsvKiA8TGluayBocmVmPScvZ2l0ZS9tYW5vbGEnPlxyXG5cdFx0XHRcdFx0XHRcdDxOYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE5hdkxpbmsgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdE1hbm9sYVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvTmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvZ2l0ZS9icmluY2hldHRlJz5cclxuXHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRCcmluY2hldHRlXHJcblx0XHRcdFx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9OYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvZ2l0ZS9sYXViZXJveWUnPlxyXG5cdFx0XHRcdFx0XHRcdDxOYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE5hdkxpbmsgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdExhdWJlcm95ZVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvTmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2dpdGUvcGV0aXQtbmF5Jz5cclxuXHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRQZXRpdCBOYXlcclxuXHRcdFx0XHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdDwvTGluaz4gKi99XHJcblxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvdGFyaWZzJz5cclxuXHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRUYXJpZnNcclxuXHRcdFx0XHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9yZXNlcnZlcic+XHJcblx0XHRcdFx0XHRcdFx0PE5hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TmF2TGluayBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0UsOpc2VydmVyXHJcblx0XHRcdFx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9OYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvY29udGFjdCc+XHJcblx0XHRcdFx0XHRcdFx0PE5hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TmF2TGluayBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Q29udGFjdFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvTmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cclxuXHRcdFx0XHRcdFx0PFVuY29udHJvbGxlZERyb3Bkb3duIG5hdiBpbk5hdmJhcj5cclxuXHRcdFx0XHRcdFx0XHQ8RHJvcGRvd25Ub2dnbGUgbmF2IGNhcmV0PlxyXG5cdFx0XHRcdFx0XHRcdFx0RGl2ZXJzXHJcblx0XHRcdFx0XHRcdFx0PC9Ecm9wZG93blRvZ2dsZT5cclxuXHRcdFx0XHRcdFx0XHQ8RHJvcGRvd25NZW51IHJpZ2h0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PERyb3Bkb3duSXRlbT5BbGVudG91cnM8L0Ryb3Bkb3duSXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxEcm9wZG93bkl0ZW0+Ri5BLlEuPC9Ecm9wZG93bkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PC9Ecm9wZG93bk1lbnU+XHJcblx0XHRcdFx0XHRcdDwvVW5jb250cm9sbGVkRHJvcGRvd24+XHJcblxyXG5cdFx0XHRcdFx0XHQ8VW5jb250cm9sbGVkRHJvcGRvd24gbmF2IGluTmF2YmFyPlxyXG5cdFx0XHRcdFx0XHRcdDxEcm9wZG93blRvZ2dsZSBuYXYgY2FyZXQ+XHJcblx0XHRcdFx0XHRcdFx0XHRQYXJ0ZW5haXJlc1xyXG5cdFx0XHRcdFx0XHRcdDwvRHJvcGRvd25Ub2dnbGU+XHJcblx0XHRcdFx0XHRcdFx0PERyb3Bkb3duTWVudSByaWdodD5cclxuXHRcdFx0XHRcdFx0XHRcdDxEcm9wZG93bkl0ZW0+UmVzdGF1cmF0aW9uPC9Ecm9wZG93bkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RHJvcGRvd25JdGVtPlRlcnJvaXI8L0Ryb3Bkb3duSXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxEcm9wZG93bkl0ZW0+QWRyZXNzZXMgdXRpbGVzPC9Ecm9wZG93bkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RHJvcGRvd25JdGVtPkZlc3RpJ2J1ejwvRHJvcGRvd25JdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PERyb3Bkb3duSXRlbT5MYWJlbHM8L0Ryb3Bkb3duSXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8L0Ryb3Bkb3duTWVudT5cclxuXHRcdFx0XHRcdFx0PC9VbmNvbnRyb2xsZWREcm9wZG93bj5cclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2xvZ2luJz5cclxuXHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRDb25uZXhpb25cclxuXHRcdFx0XHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdDwvTmF2PlxyXG5cdFx0XHRcdFx0PE5hdmJhclRleHQ+TGVzIEdpdGVzIFdhbzwvTmF2YmFyVGV4dD5cclxuXHRcdFx0XHQ8L0NvbGxhcHNlPlxyXG5cdFx0XHQ8L05hdmJhcj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5IZWFkZXIuZ2V0SW5pdGlhbFByb3BzID0gKCkgPT4ge1xyXG5cdHJldHVybiBsaXN0R2l0ZXMoKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRub21zOiBkYXRhLm5vbSxcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHR9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==