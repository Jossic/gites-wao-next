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
  var categorie = _ref.categorie;

  var head = function head() {
    return __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 3
      }
    }, __jsx("title", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 4
      }
    }, _config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"], " | ", categorie.nom, ' '), __jsx("meta", {
      name: "description",
      content: categorie.mdesc,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 4
      }
    }), __jsx("link", {
      rel: "canonical",
      href: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"], "/gite/").concat(categorie.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:title",
      content: "".concat(categorie.nom, " | ").concat(_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:description",
      content: categorie.mdesc,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:type",
      content: "website",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:url",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"], "/gite/").concat(categorie.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:site_name",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:site_name",
      content: _config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:image",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/blog/photo/").concat(categorie.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:image:secure_url",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/gite/photo/").concat(categorie.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:image:type",
      content: "image/jpg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 4
      }
    }));
  };

  var jumbotron = function jumbotron() {
    return __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 3
      }
    }, __jsx("div", {
      className: "container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 4
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Jumbotron"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }
    }, __jsx("h1", {
      className: "display-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 6
      }
    }, "Nos partenaires dans la cat\xE9gorie ", categorie.nom), __jsx("p", {
      className: "lead",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 6
      }
    }, categorie.presSection), __jsx("hr", {
      className: "my-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 6
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 6
      }
    }, categorie.presPartenaire), __jsx("p", {
      className: "lead",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 6
      }
    }))));
  };

  var card = function card() {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 4
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardImg"], {
      top: true,
      width: "100%",
      src: "/assets/318x180.svg",
      alt: "Card image cap",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 6
      }
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardTitle"], {
      tag: "h5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 7
      }
    }, "Card title"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardSubtitle"], {
      tag: "h6",
      className: "mb-2 text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 7
      }
    }, "Card subtitle"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardText"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 7
      }
    }, "Some quick example text to build on the card title and make up the bulk of the card's content."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 7
      }
    }, "Button"))));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, head(), __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 4
    }
  }, jumbotron(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFydGVuYWlyZXMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlBhcnRlbmFpcmUiLCJjYXRlZ29yaWUiLCJoZWFkIiwiQVBQX05BTUUiLCJub20iLCJtZGVzYyIsIkRPTUFJTiIsInNsdWciLCJBUEkiLCJqdW1ib3Ryb24iLCJwcmVzU2VjdGlvbiIsInByZXNQYXJ0ZW5haXJlIiwiY2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFlQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFtQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7O0FBQ3JDLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsV0FDWixNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0VDLGdEQURGLFNBQ2VGLFNBQVMsQ0FBQ0csR0FEekIsRUFDOEIsR0FEOUIsQ0FERCxFQUlDO0FBQU0sVUFBSSxFQUFDLGFBQVg7QUFBeUIsYUFBTyxFQUFFSCxTQUFTLENBQUNJLEtBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKRCxFQUtDO0FBQU0sU0FBRyxFQUFDLFdBQVY7QUFBc0IsVUFBSSxZQUFLQyw4Q0FBTCxtQkFBb0JMLFNBQVMsQ0FBQ00sSUFBOUIsQ0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUxELEVBTUM7QUFDQyxjQUFRLEVBQUMsVUFEVjtBQUVDLGFBQU8sWUFBS04sU0FBUyxDQUFDRyxHQUFmLGdCQUF3QkQsZ0RBQXhCLENBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU5ELEVBVUM7QUFBTSxjQUFRLEVBQUMsZ0JBQWY7QUFBZ0MsYUFBTyxFQUFFRixTQUFTLENBQUNJLEtBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFWRCxFQVdDO0FBQU0sY0FBUSxFQUFDLFNBQWY7QUFBeUIsYUFBTyxFQUFDLFNBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFYRCxFQVlDO0FBQ0MsY0FBUSxFQUFDLFFBRFY7QUFFQyxhQUFPLFlBQUtDLDhDQUFMLG1CQUFvQkwsU0FBUyxDQUFDTSxJQUE5QixDQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFaRCxFQWdCQztBQUFNLGNBQVEsRUFBQyxjQUFmO0FBQThCLGFBQU8sWUFBS0osZ0RBQUwsQ0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWhCRCxFQWtCQztBQUFNLGNBQVEsRUFBQyxjQUFmO0FBQThCLGFBQU8sRUFBRUEsZ0RBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFsQkQsRUFvQkM7QUFDQyxjQUFRLEVBQUMsVUFEVjtBQUVDLGFBQU8sWUFBS0ssMkNBQUwseUJBQXVCUCxTQUFTLENBQUNNLElBQWpDLENBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQXBCRCxFQXdCQztBQUNDLGNBQVEsRUFBQyxxQkFEVjtBQUVDLGFBQU8sWUFBS0MsMkNBQUwseUJBQXVCUCxTQUFTLENBQUNNLElBQWpDLENBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQXhCRCxFQTRCQztBQUFNLGNBQVEsRUFBQyxlQUFmO0FBQStCLGFBQU8sRUFBQyxXQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BNUJELENBRFk7QUFBQSxHQUFiOztBQWlDQSxNQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFdBQ2pCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQztBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQyxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQztBQUFJLGVBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0RBQ29DUixTQUFTLENBQUNHLEdBRDlDLENBREQsRUFJQztBQUFHLGVBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBcUJILFNBQVMsQ0FBQ1MsV0FBL0IsQ0FKRCxFQUtDO0FBQUksZUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUxELEVBTUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJVCxTQUFTLENBQUNVLGNBQWQsQ0FORCxFQU9DO0FBQUcsZUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVBELENBREQsQ0FERCxDQURpQjtBQUFBLEdBQWxCOztBQWdCQSxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2xCLFdBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDLE1BQUMsa0RBQUQ7QUFDQyxTQUFHLE1BREo7QUFFQyxXQUFLLEVBQUMsTUFGUDtBQUdDLFNBQUcsRUFBQyxxQkFITDtBQUlDLFNBQUcsRUFBQyxnQkFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREQsRUFPQyxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQyxNQUFDLG9EQUFEO0FBQVcsU0FBRyxFQUFDLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERCxFQUVDLE1BQUMsdURBQUQ7QUFBYyxTQUFHLEVBQUMsSUFBbEI7QUFBdUIsZUFBUyxFQUFDLGlCQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZELEVBS0MsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdHQUxELEVBU0MsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRELENBUEQsQ0FERCxDQUREO0FBdUJBLEdBeEJEOztBQTBCQSxTQUNDLG1FQUNFVixJQUFJLEVBRE4sRUFFQyxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRU8sU0FBUyxFQUZYLEVBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhELEVBSUVHLElBQUksRUFKTixDQUZELENBREQ7QUFXQSxDQXZGRDs7S0FBTVosVTs7QUFpSFNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhcnRlbmFpcmVzL1tzbHVnXS44NmJlZTFlM2M4NjZjYjZkZTc0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQnO1xyXG5pbXBvcnQgeyBBUEksIERPTUFJTiwgQVBQX05BTUUgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7XHJcblx0SnVtYm90cm9uLFxyXG5cdENhcmQsXHJcblx0Q2FyZEltZyxcclxuXHRDYXJkVGV4dCxcclxuXHRDYXJkQm9keSxcclxuXHRDYXJkVGl0bGUsXHJcblx0Q2FyZFN1YnRpdGxlLFxyXG5cdEJ1dHRvbixcclxufSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHtcclxuXHRMaXN0QWxsUGFydGVuYWlyZXNOb21zLFxyXG5cdGxpc3RlUGFydGVuYWlyZUJ5U2x1ZyxcclxufSBmcm9tICcuLi8uLi9hY3Rpb25zL3BhcnRlbmFpcmVzQWN0aW9ucyc7XHJcblxyXG5jb25zdCBQYXJ0ZW5haXJlID0gKHsgY2F0ZWdvcmllIH0pID0+IHtcclxuXHRjb25zdCBoZWFkID0gKCkgPT4gKFxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdDx0aXRsZT5cclxuXHRcdFx0XHR7QVBQX05BTUV9IHwge2NhdGVnb3JpZS5ub219eycgJ31cclxuXHRcdFx0PC90aXRsZT5cclxuXHRcdFx0PG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2NhdGVnb3JpZS5tZGVzY30gLz5cclxuXHRcdFx0PGxpbmsgcmVsPSdjYW5vbmljYWwnIGhyZWY9e2Ake0RPTUFJTn0vZ2l0ZS8ke2NhdGVnb3JpZS5zbHVnfWB9IC8+XHJcblx0XHRcdDxtZXRhXHJcblx0XHRcdFx0cHJvcGVydHk9J29nOnRpdGxlJ1xyXG5cdFx0XHRcdGNvbnRlbnQ9e2Ake2NhdGVnb3JpZS5ub219IHwgJHtBUFBfTkFNRX1gfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6ZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2NhdGVnb3JpZS5tZGVzY30gLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnR5cGUnIGNvbnRlbnQ9J3dlYnNpdGUnIC8+XHJcblx0XHRcdDxtZXRhXHJcblx0XHRcdFx0cHJvcGVydHk9J29nOnVybCdcclxuXHRcdFx0XHRjb250ZW50PXtgJHtET01BSU59L2dpdGUvJHtjYXRlZ29yaWUuc2x1Z31gfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6c2l0ZV9uYW1lJyBjb250ZW50PXtgJHtBUFBfTkFNRX1gfSAvPlxyXG5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnNpdGVfbmFtZScgY29udGVudD17QVBQX05BTUV9IC8+XHJcblxyXG5cdFx0XHQ8bWV0YVxyXG5cdFx0XHRcdHByb3BlcnR5PSdvZzppbWFnZSdcclxuXHRcdFx0XHRjb250ZW50PXtgJHtBUEl9L2Jsb2cvcGhvdG8vJHtjYXRlZ29yaWUuc2x1Z31gfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8bWV0YVxyXG5cdFx0XHRcdHByb3BlcnR5PSdvZzppbWFnZTpzZWN1cmVfdXJsJ1xyXG5cdFx0XHRcdGNvbnRlbnQ9e2Ake0FQSX0vZ2l0ZS9waG90by8ke2NhdGVnb3JpZS5zbHVnfWB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzppbWFnZTp0eXBlJyBjb250ZW50PSdpbWFnZS9qcGcnIC8+XHJcblx0XHQ8L0hlYWQ+XHJcblx0KTtcclxuXHJcblx0Y29uc3QganVtYm90cm9uID0gKCkgPT4gKFxyXG5cdFx0PHNlY3Rpb24+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHRcdDxKdW1ib3Ryb24+XHJcblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSdkaXNwbGF5LTMnPlxyXG5cdFx0XHRcdFx0XHROb3MgcGFydGVuYWlyZXMgZGFucyBsYSBjYXTDqWdvcmllIHtjYXRlZ29yaWUubm9tfVxyXG5cdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nbGVhZCc+e2NhdGVnb3JpZS5wcmVzU2VjdGlvbn08L3A+XHJcblx0XHRcdFx0XHQ8aHIgY2xhc3NOYW1lPSdteS0yJyAvPlxyXG5cdFx0XHRcdFx0PHA+e2NhdGVnb3JpZS5wcmVzUGFydGVuYWlyZX08L3A+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2xlYWQnPjwvcD5cclxuXHRcdFx0XHQ8L0p1bWJvdHJvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L3NlY3Rpb24+XHJcblx0KTtcclxuXHJcblx0Y29uc3QgY2FyZCA9ICgpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PENhcmQ+XHJcblx0XHRcdFx0XHQ8Q2FyZEltZ1xyXG5cdFx0XHRcdFx0XHR0b3BcclxuXHRcdFx0XHRcdFx0d2lkdGg9JzEwMCUnXHJcblx0XHRcdFx0XHRcdHNyYz0nL2Fzc2V0cy8zMTh4MTgwLnN2ZydcclxuXHRcdFx0XHRcdFx0YWx0PSdDYXJkIGltYWdlIGNhcCdcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8Q2FyZEJvZHk+XHJcblx0XHRcdFx0XHRcdDxDYXJkVGl0bGUgdGFnPSdoNSc+Q2FyZCB0aXRsZTwvQ2FyZFRpdGxlPlxyXG5cdFx0XHRcdFx0XHQ8Q2FyZFN1YnRpdGxlIHRhZz0naDYnIGNsYXNzTmFtZT0nbWItMiB0ZXh0LW11dGVkJz5cclxuXHRcdFx0XHRcdFx0XHRDYXJkIHN1YnRpdGxlXHJcblx0XHRcdFx0XHRcdDwvQ2FyZFN1YnRpdGxlPlxyXG5cdFx0XHRcdFx0XHQ8Q2FyZFRleHQ+XHJcblx0XHRcdFx0XHRcdFx0U29tZSBxdWljayBleGFtcGxlIHRleHQgdG8gYnVpbGQgb24gdGhlIGNhcmQgdGl0bGVcclxuXHRcdFx0XHRcdFx0XHRhbmQgbWFrZSB1cCB0aGUgYnVsayBvZiB0aGUgY2FyZCdzIGNvbnRlbnQuXHJcblx0XHRcdFx0XHRcdDwvQ2FyZFRleHQ+XHJcblx0XHRcdFx0XHRcdDxCdXR0b24+QnV0dG9uPC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8L0NhcmRCb2R5PlxyXG5cdFx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7aGVhZCgpfVxyXG5cdFx0XHQ8TGF5b3V0PlxyXG5cdFx0XHRcdHsvKiB7SlNPTi5zdHJpbmdpZnkoZ2l0ZSl9ICovfVxyXG5cdFx0XHRcdHtqdW1ib3Ryb24oKX1cclxuXHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHR7Y2FyZCgpfVxyXG5cdFx0XHQ8L0xheW91dD5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcblx0Ly9saXN0ZXIgbGVzIG5vbXMgZGVcclxuXHJcblx0Y29uc3QgcGFydGVuYWlyZXNOb21zID0gYXdhaXQgTGlzdEFsbFBhcnRlbmFpcmVzTm9tcygpO1xyXG5cdHJldHVybiB7XHJcblx0XHRwYXRoczogcGFydGVuYWlyZXNOb21zLm1hcCgobm9tKSA9PiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cGFyYW1zOiB7IGlkOiBub20uX2lkLCBzbHVnOiBub20uc2x1ZyB9LFxyXG5cdFx0XHR9O1xyXG5cdFx0fSksXHJcblx0XHRmYWxsYmFjazogZmFsc2UsXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuXHRyZXR1cm4gbGlzdGVQYXJ0ZW5haXJlQnlTbHVnKGNvbnRleHQucGFyYW1zLnNsdWcpLnRoZW4oKGNhdGVnb3JpZSkgPT4ge1xyXG5cdFx0aWYgKGNhdGVnb3JpZS5lcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhjYXRlZ29yaWUuZXJyb3IpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHsgcHJvcHM6IHsgY2F0ZWdvcmllIH0gfTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFydGVuYWlyZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==