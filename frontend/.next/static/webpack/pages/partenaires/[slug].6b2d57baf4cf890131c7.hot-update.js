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
      partenaires = _ref.partenaires,
      photos = _ref.photos;

  var head = function head() {
    return __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 3
      }
    }, __jsx("title", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 4
      }
    }, _config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"], " | ", categorie.nom, ' '), __jsx("meta", {
      name: "description",
      content: categorie.mdesc,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 4
      }
    }), __jsx("link", {
      rel: "canonical",
      href: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"], "/gite/").concat(categorie.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:title",
      content: "".concat(categorie.nom, " | ").concat(_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:description",
      content: categorie.mdesc,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:type",
      content: "website",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:url",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"], "/gite/").concat(categorie.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:site_name",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:site_name",
      content: _config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:image",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/blog/photo/").concat(categorie.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:image:secure_url",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/gite/photo/").concat(categorie.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:image:type",
      content: "image/jpg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 4
      }
    }));
  };

  var photoInfos = function photoInfos(id) {
    var image = {};
    photos.forEach(function (photo) {
      if (photo._id === id) {
        return {
          image: {
            src: photo.src,
            alt: photo.alt
          }
        };
      }
    });
  };

  var jumbotron = function jumbotron() {
    return __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 3
      }
    }, __jsx("div", {
      className: "container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 4
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Jumbotron"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 5
      }
    }, __jsx("h1", {
      className: "display-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 6
      }
    }, "Nos partenaires dans la cat\xE9gorie ", categorie.nom), __jsx("p", {
      className: "lead",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 6
      }
    }, categorie.presSection), __jsx("hr", {
      className: "my-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 6
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 6
      }
    }, categorie.presPartenaire), __jsx("p", {
      className: "lead",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 6
      }
    }))));
  };

  var card = function card() {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardDeck"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 3
      }
    }, partenaires.map(function (partenaire) {
      return __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 5
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 6
        }
      }, photoInfos(partenaire.image), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 7
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardTitle"], {
        tag: "h5",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 8
        }
      }, partenaire.titre), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardSubtitle"], {
        tag: "h6",
        className: "mb-2 text-muted",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 8
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 8
        }
      }, partenaire.mail && __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 29
        }
      }, partenaire.mail), partenaire.tel && __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 28
        }
      }, partenaire.tel), partenaire.adresse && __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 10
        }
      }, partenaire.adresse), partenaire.texte && __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 30
        }
      }, partenaire.texte)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 8
        }
      }, "Button"))));
    }));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, head(), __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 4
    }
  }, jumbotron(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFydGVuYWlyZXMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlBhcnRlbmFpcmUiLCJjYXRlZ29yaWUiLCJwYXJ0ZW5haXJlcyIsInBob3RvcyIsImhlYWQiLCJBUFBfTkFNRSIsIm5vbSIsIm1kZXNjIiwiRE9NQUlOIiwic2x1ZyIsIkFQSSIsInBob3RvSW5mb3MiLCJpZCIsImltYWdlIiwiZm9yRWFjaCIsInBob3RvIiwiX2lkIiwic3JjIiwiYWx0IiwianVtYm90cm9uIiwicHJlc1NlY3Rpb24iLCJwcmVzUGFydGVuYWlyZSIsImNhcmQiLCJtYXAiLCJwYXJ0ZW5haXJlIiwidGl0cmUiLCJtYWlsIiwidGVsIiwiYWRyZXNzZSIsInRleHRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWtCQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUF3QztBQUFBLE1BQXJDQyxTQUFxQyxRQUFyQ0EsU0FBcUM7QUFBQSxNQUExQkMsV0FBMEIsUUFBMUJBLFdBQTBCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUMxRCxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLFdBQ1osTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFQyxnREFERixTQUNlSixTQUFTLENBQUNLLEdBRHpCLEVBQzhCLEdBRDlCLENBREQsRUFJQztBQUFNLFVBQUksRUFBQyxhQUFYO0FBQXlCLGFBQU8sRUFBRUwsU0FBUyxDQUFDTSxLQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkQsRUFLQztBQUFNLFNBQUcsRUFBQyxXQUFWO0FBQXNCLFVBQUksWUFBS0MsOENBQUwsbUJBQW9CUCxTQUFTLENBQUNRLElB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QTtBQUFBLFNBQUlKLFVBQVUsQ0FBQ0ksT0FBZixDQUpGLEVBTUVKLFVBQVUsQ0FBQ0ssS0FBWCxJQUFvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUlMLFVBQVUsQ0FBQ0ssS0FBZixDQU50QixDQUxELEVBY0MsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWRELENBRkQsQ0FERCxDQURnQjtBQUFBLEtBQWhCLENBREYsQ0FEWTtBQUFBLEdBQWI7O0FBNEJBLFNBQ0MsbUVBQ0V6QixJQUFJLEVBRE4sRUFFQyxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRWUsU0FBUyxFQUZYLEVBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhELEVBSUVHLElBQUksRUFKTixDQUZELENBREQ7QUFXQSxDQWxHRDs7S0FBTXRCLFU7O0FBNElTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYXJ0ZW5haXJlcy9bc2x1Z10uNmIyZDU3YmFmNGNmODkwMTMxYzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0JztcclxuaW1wb3J0IHsgQVBJLCBET01BSU4sIEFQUF9OQU1FIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQge1xyXG5cdENhcmQsXHJcblx0QnV0dG9uLFxyXG5cdENhcmRJbWcsXHJcblx0Q2FyZFRpdGxlLFxyXG5cdENhcmRUZXh0LFxyXG5cdENhcmREZWNrLFxyXG5cdENhcmRTdWJ0aXRsZSxcclxuXHRDYXJkQm9keSxcclxuXHRKdW1ib3Ryb24sXHJcbn0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7XHJcblx0TGlzdEFsbFBhcnRlbmFpcmVDYXJkcyxcclxuXHRMaXN0QWxsUGFydGVuYWlyZXNOb21zLFxyXG5cdGxpc3RlUGFydGVuYWlyZUJ5U2x1ZyxcclxufSBmcm9tICcuLi8uLi9hY3Rpb25zL3BhcnRlbmFpcmVzQWN0aW9ucyc7XHJcbmltcG9ydCB7IGxpc3RQaG90b3NCeVNlY3Rpb24gfSBmcm9tICcuLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuXHJcbmNvbnN0IFBhcnRlbmFpcmUgPSAoeyBjYXRlZ29yaWUsIHBhcnRlbmFpcmVzLCBwaG90b3MgfSkgPT4ge1xyXG5cdGNvbnN0IGhlYWQgPSAoKSA9PiAoXHJcblx0XHQ8SGVhZD5cclxuXHRcdFx0PHRpdGxlPlxyXG5cdFx0XHRcdHtBUFBfTkFNRX0gfCB7Y2F0ZWdvcmllLm5vbX17JyAnfVxyXG5cdFx0XHQ8L3RpdGxlPlxyXG5cdFx0XHQ8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD17Y2F0ZWdvcmllLm1kZXNjfSAvPlxyXG5cdFx0XHQ8bGluayByZWw9J2Nhbm9uaWNhbCcgaHJlZj17YCR7RE9NQUlOfS9naXRlLyR7Y2F0ZWdvcmllLnNsdWd9YH0gLz5cclxuXHRcdFx0PG1ldGFcclxuXHRcdFx0XHRwcm9wZXJ0eT0nb2c6dGl0bGUnXHJcblx0XHRcdFx0Y29udGVudD17YCR7Y2F0ZWdvcmllLm5vbX0gfCAke0FQUF9OQU1FfWB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzpkZXNjcmlwdGlvbicgY29udGVudD17Y2F0ZWdvcmllLm1kZXNjfSAvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6dHlwZScgY29udGVudD0nd2Vic2l0ZScgLz5cclxuXHRcdFx0PG1ldGFcclxuXHRcdFx0XHRwcm9wZXJ0eT0nb2c6dXJsJ1xyXG5cdFx0XHRcdGNvbnRlbnQ9e2Ake0RPTUFJTn0vZ2l0ZS8ke2NhdGVnb3JpZS5zbHVnfWB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzpzaXRlX25hbWUnIGNvbnRlbnQ9e2Ake0FQUF9OQU1FfWB9IC8+XHJcblxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6c2l0ZV9uYW1lJyBjb250ZW50PXtBUFBfTkFNRX0gLz5cclxuXHJcblx0XHRcdDxtZXRhXHJcblx0XHRcdFx0cHJvcGVydHk9J29nOmltYWdlJ1xyXG5cdFx0XHRcdGNvbnRlbnQ9e2Ake0FQSX0vYmxvZy9waG90by8ke2NhdGVnb3JpZS5zbHVnfWB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxtZXRhXHJcblx0XHRcdFx0cHJvcGVydHk9J29nOmltYWdlOnNlY3VyZV91cmwnXHJcblx0XHRcdFx0Y29udGVudD17YCR7QVBJfS9naXRlL3Bob3RvLyR7Y2F0ZWdvcmllLnNsdWd9YH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOmltYWdlOnR5cGUnIGNvbnRlbnQ9J2ltYWdlL2pwZycgLz5cclxuXHRcdDwvSGVhZD5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBwaG90b0luZm9zID0gKGlkKSA9PiB7XHJcblx0XHRsZXQgaW1hZ2UgPSB7fTtcclxuXHRcdHBob3Rvcy5mb3JFYWNoKChwaG90bykgPT4ge1xyXG5cdFx0XHRpZiAocGhvdG8uX2lkID09PSBpZCkge1xyXG5cdFx0XHRcdHJldHVybiB7IGltYWdlOiB7IHNyYzogcGhvdG8uc3JjLCBhbHQ6IHBob3RvLmFsdCB9IH07XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGp1bWJvdHJvbiA9ICgpID0+IChcclxuXHRcdDxzZWN0aW9uPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0XHQ8SnVtYm90cm9uPlxyXG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nZGlzcGxheS0zJz5cclxuXHRcdFx0XHRcdFx0Tm9zIHBhcnRlbmFpcmVzIGRhbnMgbGEgY2F0w6lnb3JpZSB7Y2F0ZWdvcmllLm5vbX1cclxuXHRcdFx0XHRcdDwvaDE+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2xlYWQnPntjYXRlZ29yaWUucHJlc1NlY3Rpb259PC9wPlxyXG5cdFx0XHRcdFx0PGhyIGNsYXNzTmFtZT0nbXktMicgLz5cclxuXHRcdFx0XHRcdDxwPntjYXRlZ29yaWUucHJlc1BhcnRlbmFpcmV9PC9wPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdsZWFkJz48L3A+XHJcblx0XHRcdFx0PC9KdW1ib3Ryb24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9zZWN0aW9uPlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IGNhcmQgPSAoKSA9PiAoXHJcblx0XHQ8Q2FyZERlY2s+XHJcblx0XHRcdHtwYXJ0ZW5haXJlcy5tYXAoKHBhcnRlbmFpcmUpID0+IChcclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PENhcmQ+XHJcblx0XHRcdFx0XHRcdHtwaG90b0luZm9zKHBhcnRlbmFpcmUuaW1hZ2UpfVxyXG5cdFx0XHRcdFx0XHQ8Q2FyZEJvZHk+XHJcblx0XHRcdFx0XHRcdFx0PENhcmRUaXRsZSB0YWc9J2g1Jz57cGFydGVuYWlyZS50aXRyZX08L0NhcmRUaXRsZT5cclxuXHRcdFx0XHRcdFx0XHQ8Q2FyZFN1YnRpdGxlIHRhZz0naDYnIGNsYXNzTmFtZT0nbWItMiB0ZXh0LW11dGVkJz5cclxuXHRcdFx0XHRcdFx0XHRcdHsvKiBDYXJkIHN1YnRpdGxlICovfVxyXG5cdFx0XHRcdFx0XHRcdDwvQ2FyZFN1YnRpdGxlPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdHtwYXJ0ZW5haXJlLm1haWwgJiYgPHA+e3BhcnRlbmFpcmUubWFpbH08L3A+fVxyXG5cdFx0XHRcdFx0XHRcdFx0e3BhcnRlbmFpcmUudGVsICYmIDxwPntwYXJ0ZW5haXJlLnRlbH08L3A+fVxyXG5cdFx0XHRcdFx0XHRcdFx0e3BhcnRlbmFpcmUuYWRyZXNzZSAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwPntwYXJ0ZW5haXJlLmFkcmVzc2V9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHRcdHtwYXJ0ZW5haXJlLnRleHRlICYmIDxwPntwYXJ0ZW5haXJlLnRleHRlfTwvcD59XHJcblx0XHRcdFx0XHRcdFx0XHR7Lyoge3BhcnRlbmFpcmUuc2l0ZSAmJiA8cD57cGFydGVuYWlyZS5zaXRlfTwvcD59ICovfVxyXG5cdFx0XHRcdFx0XHRcdDwvQ2FyZFRleHQ+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbj5CdXR0b248L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9DYXJkQm9keT5cclxuXHRcdFx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KSl9XHJcblx0XHQ8L0NhcmREZWNrPlxyXG5cdCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7aGVhZCgpfVxyXG5cdFx0XHQ8TGF5b3V0PlxyXG5cdFx0XHRcdHsvKiB7SlNPTi5zdHJpbmdpZnkoZ2l0ZSl9ICovfVxyXG5cdFx0XHRcdHtqdW1ib3Ryb24oKX1cclxuXHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHR7Y2FyZCgpfVxyXG5cdFx0XHQ8L0xheW91dD5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcblx0Ly9saXN0ZXIgbGVzIG5vbXMgZGVcclxuXHJcblx0Y29uc3QgcGFydGVuYWlyZXNOb21zID0gYXdhaXQgTGlzdEFsbFBhcnRlbmFpcmVzTm9tcygpO1xyXG5cdHJldHVybiB7XHJcblx0XHRwYXRoczogcGFydGVuYWlyZXNOb21zLm1hcCgobm9tKSA9PiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cGFyYW1zOiB7IGlkOiBub20uX2lkLCBzbHVnOiBub20uc2x1ZyB9LFxyXG5cdFx0XHR9O1xyXG5cdFx0fSksXHJcblx0XHRmYWxsYmFjazogZmFsc2UsXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuXHRyZXR1cm4gbGlzdGVQYXJ0ZW5haXJlQnlTbHVnKGNvbnRleHQucGFyYW1zLnNsdWcpLnRoZW4oKGNhdGVnb3JpZSkgPT4ge1xyXG5cdFx0aWYgKGNhdGVnb3JpZS5lcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhjYXRlZ29yaWUuZXJyb3IpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIExpc3RBbGxQYXJ0ZW5haXJlQ2FyZHMoY2F0ZWdvcmllLl9pZCkudGhlbigocGFydGVuYWlyZXMpID0+IHtcclxuXHRcdFx0XHRpZiAocGFydGVuYWlyZXMuZXJyb3IpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHBhcnRlbmFpcmVzLmVycm9yKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGxpc3RQaG90b3NCeVNlY3Rpb24oY2F0ZWdvcmllLnNsdWcpLnRoZW4oXHJcblx0XHRcdFx0XHRcdChwaG90b3MpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZiAocGhvdG9zLmVycm9yKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhwaG90b3MuZXJyb3IpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcm9wczogeyBjYXRlZ29yaWUsIHBhcnRlbmFpcmVzLCBwaG90b3MgfSxcclxuXHRcdFx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcnRlbmFpcmU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=