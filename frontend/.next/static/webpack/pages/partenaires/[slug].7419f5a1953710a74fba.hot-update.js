webpackHotUpdate_N_E("pages/partenaires/[slug]",{

/***/ "./pages/partenaires/[slug].js":
/*!*************************************!*\
  !*** ./pages/partenaires/[slug].js ***!
  \*************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\partenaires\\[slug].js",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var Partenaire = function Partenaire(_ref) {
  var categorie = _ref.categorie,
      partenaires = _ref.partenaires;

  var head = function head() {
    return __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 3
      }
    }, __jsx("title", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 4
      }
    }, _config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"], " | ", categorie.nom, ' '), __jsx("meta", {
      name: "description",
      content: categorie.mdesc,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 4
      }
    }), __jsx("link", {
      rel: "canonical",
      href: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"], "/gite/").concat(categorie.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:title",
      content: "".concat(categorie.nom, " | ").concat(_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:description",
      content: categorie.mdesc,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:type",
      content: "website",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:url",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"], "/gite/").concat(categorie.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:site_name",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:site_name",
      content: _config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:image",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/blog/photo/").concat(categorie.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:image:secure_url",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/gite/photo/").concat(categorie.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:image:type",
      content: "image/jpg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 4
      }
    }));
  };

  var jumbotron = function jumbotron() {
    return __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 3
      }
    }, __jsx("div", {
      className: "container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 4
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Jumbotron"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 5
      }
    }, __jsx("h1", {
      className: "display-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 6
      }
    }, "Nos partenaires dans la cat\xE9gorie ", categorie.nom), __jsx("p", {
      className: "lead",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 6
      }
    }, categorie.presSection), __jsx("hr", {
      className: "my-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 6
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 6
      }
    }, categorie.presPartenaire), __jsx("p", {
      className: "lead",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 6
      }
    }))));
  };

  var card = function card() {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardDeck"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 3
      }
    }, partenaires.map(function (partenaire) {
      return __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 5
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 6
        }
      }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: "d-block",
        src: partenaire.image,
        alt: partenaire.image,
        width: 318,
        height: 180,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 7
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 7
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardTitle"], {
        tag: "h5",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 8
        }
      }, partenaire.titre), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardSubtitle"], {
        tag: "h6",
        className: "mb-2 text-muted",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 8
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 8
        }
      }, partenaire.mail && __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 29
        }
      }, partenaire.mail), partenaire.tel && __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 28
        }
      }, partenaire.tel), partenaire.adresse && __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 10
        }
      }, partenaire.adresse), partenaire.texte && __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 30
        }
      }, partenaire.texte)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 8
        }
      }, "Button"))));
    }));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, head(), __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 4
    }
  }, jumbotron(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }
  }), card()));
};

_c = Partenaire;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Partenaire);

var _c;

$RefreshReg$(_c, "Partenaire");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFydGVuYWlyZXMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlBhcnRlbmFpcmUiLCJjYXRlZ29yaWUiLCJwYXJ0ZW5haXJlcyIsImhlYWQiLCJBUFBfTkFNRSIsIm5vbSIsIm1kZXNjIiwiRE9NQUlOIiwic2x1ZyIsIkFQSSIsImp1bWJvdHJvbiIsInByZXNTZWN0aW9uIiwicHJlc1BhcnRlbmFpcmUiLCJjYXJkIiwibWFwIiwicGFydGVuYWlyZSIsImltYWdlIiwidGl0cmUiLCJtYWlsIiwidGVsIiwiYWRyZXNzZSIsInRleHRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWlCQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFnQztBQUFBLE1BQTdCQyxTQUE2QixRQUE3QkEsU0FBNkI7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCOztBQUNsRCxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLFdBQ1osTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFQyxnREFERixTQUNlSCxTQUFTLENBQUNJLEdBRHpCLEVBQzhCLEdBRDlCLENBREQsRUFJQztBQUFNLFVBQUksRUFBQyxhQUFYO0FBQXlCLGFBQU8sRUFBRUosU0FBUyxDQUFDSyxLQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkQsRUFLQztBQUFNLFNBQUcsRUFBQyxXQUFWO0FBQXNCLFVBQUksWUFBS0MsOENBQUwsbUJBQW9CTixTQUFTLENBQUNPLElBQTlCLENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMRCxFQU1DO0FBQ0MsY0FBUSxFQUFDLFVBRFY7QUFFQyxhQUFPLFlBQUtQLFNBQVMsQ0FBQ0ksR0FBZixnQkFBd0JELGdEQUF4QixDQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFORCxFQVVDO0FBQU0sY0FBUSxFQUFDLGdCQUFmO0FBQWdDLGFBQU8sRUFBRUgsU0FBUyxDQUFDSyxLQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVkQsRUFXQztBQUFNLGNBQVEsRUFBQyxTQUFmO0FBQXlCLGFBQU8sRUFBQyxTQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BWEQsRUFZQztBQUNDLGNBQVEsRUFBQyxRQURWO0FBRUMsYUFBTyxZQUFLQyw4Q0FBTCxtQkFBb0JOLFNBQVMsQ0FBQ08sSUFBOUIsQ0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BWkQsRUFnQkM7QUFBTSxjQUFRLEVBQUMsY0FBZjtBQUE4QixhQUFPLFlBQUtKLGdEQUFMLENBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFoQkQsRUFrQkM7QUFBTSxjQUFRLEVBQUMsY0FBZjtBQUE4QixhQUFPLEVBQUVBLGdEQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BbEJELEVBb0JDO0FBQ0MsY0FBUSxFQUFDLFVBRFY7QUFFQyxhQUFPLFlBQUtLLDJDQUFMLHlCQUF1QlIsU0FBUyxDQUFDTyxJQUFqQyxDQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFwQkQsRUF3QkM7QUFDQyxjQUFRLEVBQUMscUJBRFY7QUFFQyxhQUFPLFlBQUtDLDJDQUFMLHlCQUF1QlIsU0FBUyxDQUFDTyxJQUFqQyxDQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUF4QkQsRUE0QkM7QUFBTSxjQUFRLEVBQUMsZUFBZjtBQUErQixhQUFPLEVBQUMsV0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQTVCRCxDQURZO0FBQUEsR0FBYjs7QUFpQ0EsTUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxXQUNqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0MsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFBSSxlQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdEQUNvQ1QsU0FBUyxDQUFDSSxHQUQ5QyxDQURELEVBSUM7QUFBRyxlQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXFCSixTQUFTLENBQUNVLFdBQS9CLENBSkQsRUFLQztBQUFJLGVBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMRCxFQU1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSVYsU0FBUyxDQUFDVyxjQUFkLENBTkQsRUFPQztBQUFHLGVBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFQRCxDQURELENBREQsQ0FEaUI7QUFBQSxHQUFsQjs7QUFnQkEsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxXQUNaLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFWCxXQUFXLENBQUNZLEdBQVosQ0FBZ0IsVUFBQ0MsVUFBRDtBQUFBLGFBQ2hCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQyxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQyxNQUFDLGlEQUFEO0FBQ0MsaUJBQVMsRUFBQyxTQURYO0FBRUMsV0FBRyxFQUFFQSxVQUFVLENBQUNDLEtBRmpCO0FBR0MsV0FBRyxFQUFFRCxVQUFVLENBQUNDLEtBSGpCO0FBSUMsYUFBSyxFQUFFLEdBSlI7QUFLQyxjQUFNLEVBQUUsR0FMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREQsRUFTQyxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQyxNQUFDLG9EQUFEO0FBQVcsV0FBRyxFQUFDLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFxQkQsVUFBVSxDQUFDRSxLQUFoQyxDQURELEVBRUMsTUFBQyx1REFBRDtBQUFjLFdBQUcsRUFBQyxJQUFsQjtBQUF1QixpQkFBUyxFQUFDLGlCQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkQsRUFLQyxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRUYsVUFBVSxDQUFDRyxJQUFYLElBQW1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSUgsVUFBVSxDQUFDRyxJQUFmLENBRHJCLEVBRUVILFVBQVUsQ0FBQ0ksR0FBWCxJQUFrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUlKLFVBQVUsQ0FBQ0ksR0FBZixDQUZwQixFQUdFSixVQUFVLENBQUNLLE9BQVgsSUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUlMLFVBQVUsQ0FBQ0ssT0FBZixDQUpGLEVBTUVMLFVBQVUsQ0FBQ00sS0FBWCxJQUFvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUlOLFVBQVUsQ0FBQ00sS0FBZixDQU50QixDQUxELEVBY0MsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWRELENBVEQsQ0FERCxDQURnQjtBQUFBLEtBQWhCLENBREYsQ0FEWTtBQUFBLEdBQWI7O0FBbUNBLFNBQ0MsbUVBQ0VsQixJQUFJLEVBRE4sRUFFQyxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRU8sU0FBUyxFQUZYLEVBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhELEVBSUVHLElBQUksRUFKTixDQUZELENBREQ7QUFXQSxDQWhHRDs7S0FBTWIsVTs7QUFnSVNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhcnRlbmFpcmVzL1tzbHVnXS43NDE5ZjVhMTk1MzcxMGE3NGZiYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQnO1xyXG5pbXBvcnQgeyBBUEksIERPTUFJTiwgQVBQX05BTUUgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7XHJcblx0Q2FyZCxcclxuXHRCdXR0b24sXHJcblx0Q2FyZEltZyxcclxuXHRDYXJkVGl0bGUsXHJcblx0Q2FyZFRleHQsXHJcblx0Q2FyZERlY2ssXHJcblx0Q2FyZFN1YnRpdGxlLFxyXG5cdENhcmRCb2R5LFxyXG5cdEp1bWJvdHJvbixcclxufSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHtcclxuXHRMaXN0QWxsUGFydGVuYWlyZUNhcmRzLFxyXG5cdExpc3RBbGxQYXJ0ZW5haXJlc05vbXMsXHJcblx0bGlzdGVQYXJ0ZW5haXJlQnlTbHVnLFxyXG59IGZyb20gJy4uLy4uL2FjdGlvbnMvcGFydGVuYWlyZXNBY3Rpb25zJztcclxuXHJcbmNvbnN0IFBhcnRlbmFpcmUgPSAoeyBjYXRlZ29yaWUsIHBhcnRlbmFpcmVzIH0pID0+IHtcclxuXHRjb25zdCBoZWFkID0gKCkgPT4gKFxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdDx0aXRsZT5cclxuXHRcdFx0XHR7QVBQX05BTUV9IHwge2NhdGVnb3JpZS5ub219eycgJ31cclxuXHRcdFx0PC90aXRsZT5cclxuXHRcdFx0PG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2NhdGVnb3JpZS5tZGVzY30gLz5cclxuXHRcdFx0PGxpbmsgcmVsPSdjYW5vbmljYWwnIGhyZWY9e2Ake0RPTUFJTn0vZ2l0ZS8ke2NhdGVnb3JpZS5zbHVnfWB9IC8+XHJcblx0XHRcdDxtZXRhXHJcblx0XHRcdFx0cHJvcGVydHk9J29nOnRpdGxlJ1xyXG5cdFx0XHRcdGNvbnRlbnQ9e2Ake2NhdGVnb3JpZS5ub219IHwgJHtBUFBfTkFNRX1gfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6ZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2NhdGVnb3JpZS5tZGVzY30gLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnR5cGUnIGNvbnRlbnQ9J3dlYnNpdGUnIC8+XHJcblx0XHRcdDxtZXRhXHJcblx0XHRcdFx0cHJvcGVydHk9J29nOnVybCdcclxuXHRcdFx0XHRjb250ZW50PXtgJHtET01BSU59L2dpdGUvJHtjYXRlZ29yaWUuc2x1Z31gfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6c2l0ZV9uYW1lJyBjb250ZW50PXtgJHtBUFBfTkFNRX1gfSAvPlxyXG5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnNpdGVfbmFtZScgY29udGVudD17QVBQX05BTUV9IC8+XHJcblxyXG5cdFx0XHQ8bWV0YVxyXG5cdFx0XHRcdHByb3BlcnR5PSdvZzppbWFnZSdcclxuXHRcdFx0XHRjb250ZW50PXtgJHtBUEl9L2Jsb2cvcGhvdG8vJHtjYXRlZ29yaWUuc2x1Z31gfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8bWV0YVxyXG5cdFx0XHRcdHByb3BlcnR5PSdvZzppbWFnZTpzZWN1cmVfdXJsJ1xyXG5cdFx0XHRcdGNvbnRlbnQ9e2Ake0FQSX0vZ2l0ZS9waG90by8ke2NhdGVnb3JpZS5zbHVnfWB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzppbWFnZTp0eXBlJyBjb250ZW50PSdpbWFnZS9qcGcnIC8+XHJcblx0XHQ8L0hlYWQ+XHJcblx0KTtcclxuXHJcblx0Y29uc3QganVtYm90cm9uID0gKCkgPT4gKFxyXG5cdFx0PHNlY3Rpb24+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHRcdDxKdW1ib3Ryb24+XHJcblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSdkaXNwbGF5LTMnPlxyXG5cdFx0XHRcdFx0XHROb3MgcGFydGVuYWlyZXMgZGFucyBsYSBjYXTDqWdvcmllIHtjYXRlZ29yaWUubm9tfVxyXG5cdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nbGVhZCc+e2NhdGVnb3JpZS5wcmVzU2VjdGlvbn08L3A+XHJcblx0XHRcdFx0XHQ8aHIgY2xhc3NOYW1lPSdteS0yJyAvPlxyXG5cdFx0XHRcdFx0PHA+e2NhdGVnb3JpZS5wcmVzUGFydGVuYWlyZX08L3A+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2xlYWQnPjwvcD5cclxuXHRcdFx0XHQ8L0p1bWJvdHJvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L3NlY3Rpb24+XHJcblx0KTtcclxuXHJcblx0Y29uc3QgY2FyZCA9ICgpID0+IChcclxuXHRcdDxDYXJkRGVjaz5cclxuXHRcdFx0e3BhcnRlbmFpcmVzLm1hcCgocGFydGVuYWlyZSkgPT4gKFxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8Q2FyZD5cclxuXHRcdFx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdkLWJsb2NrJ1xyXG5cdFx0XHRcdFx0XHRcdHNyYz17cGFydGVuYWlyZS5pbWFnZX1cclxuXHRcdFx0XHRcdFx0XHRhbHQ9e3BhcnRlbmFpcmUuaW1hZ2V9XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg9ezMxOH1cclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ9ezE4MH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0XHRcdDxDYXJkQm9keT5cclxuXHRcdFx0XHRcdFx0XHQ8Q2FyZFRpdGxlIHRhZz0naDUnPntwYXJ0ZW5haXJlLnRpdHJlfTwvQ2FyZFRpdGxlPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkU3VidGl0bGUgdGFnPSdoNicgY2xhc3NOYW1lPSdtYi0yIHRleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0ey8qIENhcmQgc3VidGl0bGUgKi99XHJcblx0XHRcdFx0XHRcdFx0PC9DYXJkU3VidGl0bGU+XHJcblx0XHRcdFx0XHRcdFx0PENhcmRUZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0e3BhcnRlbmFpcmUubWFpbCAmJiA8cD57cGFydGVuYWlyZS5tYWlsfTwvcD59XHJcblx0XHRcdFx0XHRcdFx0XHR7cGFydGVuYWlyZS50ZWwgJiYgPHA+e3BhcnRlbmFpcmUudGVsfTwvcD59XHJcblx0XHRcdFx0XHRcdFx0XHR7cGFydGVuYWlyZS5hZHJlc3NlICYmIChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+e3BhcnRlbmFpcmUuYWRyZXNzZX08L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0e3BhcnRlbmFpcmUudGV4dGUgJiYgPHA+e3BhcnRlbmFpcmUudGV4dGV9PC9wPn1cclxuXHRcdFx0XHRcdFx0XHRcdHsvKiB7cGFydGVuYWlyZS5zaXRlICYmIDxwPntwYXJ0ZW5haXJlLnNpdGV9PC9wPn0gKi99XHJcblx0XHRcdFx0XHRcdFx0PC9DYXJkVGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uPkJ1dHRvbjwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L0NhcmRCb2R5PlxyXG5cdFx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpKX1cclxuXHRcdDwvQ2FyZERlY2s+XHJcblx0KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHtoZWFkKCl9XHJcblx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdFx0ey8qIHtKU09OLnN0cmluZ2lmeShnaXRlKX0gKi99XHJcblx0XHRcdFx0e2p1bWJvdHJvbigpfVxyXG5cdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdHtjYXJkKCl9XHJcblx0XHRcdDwvTGF5b3V0PlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuXHQvL2xpc3RlciBsZXMgbm9tcyBkZVxyXG5cclxuXHRjb25zdCBwYXJ0ZW5haXJlc05vbXMgPSBhd2FpdCBMaXN0QWxsUGFydGVuYWlyZXNOb21zKCk7XHJcblx0cmV0dXJuIHtcclxuXHRcdHBhdGhzOiBwYXJ0ZW5haXJlc05vbXMubWFwKChub20pID0+IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRwYXJhbXM6IHsgaWQ6IG5vbS5faWQsIHNsdWc6IG5vbS5zbHVnIH0sXHJcblx0XHRcdH07XHJcblx0XHR9KSxcclxuXHRcdGZhbGxiYWNrOiBmYWxzZSxcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG5cdHJldHVybiBsaXN0ZVBhcnRlbmFpcmVCeVNsdWcoY29udGV4dC5wYXJhbXMuc2x1ZykudGhlbigoY2F0ZWdvcmllKSA9PiB7XHJcblx0XHRpZiAoY2F0ZWdvcmllLmVycm9yKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGNhdGVnb3JpZS5lcnJvcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gTGlzdEFsbFBhcnRlbmFpcmVDYXJkcyhjYXRlZ29yaWUuX2lkKS50aGVuKChwYXJ0ZW5haXJlcykgPT4ge1xyXG5cdFx0XHRcdGlmIChwYXJ0ZW5haXJlcy5lcnJvcikge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocGFydGVuYWlyZXMuZXJyb3IpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4geyBwcm9wczogeyBjYXRlZ29yaWUsIHBhcnRlbmFpcmVzIH0gfTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXJ0ZW5haXJlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9