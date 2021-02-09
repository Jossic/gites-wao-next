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
    console.log('photos vaut => ', photos);
    photos.forEach(function (photo) {
      return photo._id === id && __jsx(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: "d-block",
        src: photoSrc(partenaire.image),
        alt: photoAlt(partenaire.image),
        width: 318,
        height: 180,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 6
        }
      });
    });
  };

  var jumbotron = function jumbotron() {
    return __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 3
      }
    }, __jsx("div", {
      className: "container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 4
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Jumbotron"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 5
      }
    }, __jsx("h1", {
      className: "display-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 6
      }
    }, "Nos partenaires dans la cat\xE9gorie ", categorie.nom), __jsx("p", {
      className: "lead",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 6
      }
    }, categorie.presSection), __jsx("hr", {
      className: "my-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 6
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 6
      }
    }, categorie.presPartenaire), __jsx("p", {
      className: "lead",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 6
      }
    }))));
  };

  var card = function card() {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardDeck"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 3
      }
    }, partenaires.map(function (partenaire) {
      return __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 5
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 6
        }
      }, photoInfos(partenaire.image), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 7
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardTitle"], {
        tag: "h5",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 8
        }
      }, partenaire.titre), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardSubtitle"], {
        tag: "h6",
        className: "mb-2 text-muted",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 8
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 8
        }
      }, partenaire.mail && __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 29
        }
      }, partenaire.mail), partenaire.tel && __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 28
        }
      }, partenaire.tel), partenaire.adresse && __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 10
        }
      }, partenaire.adresse), partenaire.texte && __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 30
        }
      }, partenaire.texte)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 8
        }
      }, "Button"))));
    }));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, head(), __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 4
    }
  }, jumbotron(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFydGVuYWlyZXMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlBhcnRlbmFpcmUiLCJjYXRlZ29yaWUiLCJwYXJ0ZW5haXJlcyIsInBob3RvcyIsImhlYWQiLCJBUFBfTkFNRSIsIm5vbSIsIm1kZXNjIiwiRE9NQUlOIiwic2x1ZyIsIkFQSSIsInBob3RvSW5mb3MiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwicGhvdG8iLCJfaWQiLCJwaG90b1NyYyIsInBhcnRlbmFpcmUiLCJpbWFnZSIsInBob3RvQWx0IiwianVtYm90cm9uIiwicHJlc1NlY3Rpb24iLCJwcmVzUGFydGVuYWlyZSIsImNhcmQiLCJtYXAiLCJ0aXRyZSIsIm1haWwiLCJ0ZWwiLCJhZHJlc3NlIiwidGV4dGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBa0JBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQXdDO0FBQUEsTUFBckNDLFNBQXFDLFFBQXJDQSxTQUFxQztBQUFBLE1BQTFCQyxXQUEwQixRQUExQkEsV0FBMEI7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQzFELE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsV0FDWixNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0VDLGdEQURGLFNBQ2VKLFNBQVMsQ0FBQ0ssR0FEekIsRUFDOEIsR0FEOUIsQ0FERCxFQUlDO0FBQU0sVUFBSSxFQUFDLGFBQVg7QUFBeUIsYUFBTyxFQUFFTCxTQUFTLENBQUNNLEtBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKRCxFQUtDO0FBQU0sU0FBRyxFQUFDLFdBQVY7QUFBc0IsVUFBSSxZQUFLQyw4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RVQsVUFBVSxDQUFDVSxHQUFYLElBQWtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSVYsVUFBVSxDQUFDVSxHQUFmLENBRnBCLEVBR0VWLFVBQVUsQ0FBQ1csT0FBWCxJQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSVgsVUFBVSxDQUFDVyxPQUFmLENBSkYsRUFNRVgsVUFBVSxDQUFDWSxLQUFYLElBQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSVosVUFBVSxDQUFDWSxLQUFmLENBTnRCLENBTEQsRUFjQyxNQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBZEQsQ0FURCxDQURELENBRGdCO0FBQUEsS0FBaEIsQ0FERixDQURZO0FBQUEsR0FBYjs7QUFtQ0EsU0FDQyxtRUFDRTNCLElBQUksRUFETixFQUVDLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFa0IsU0FBUyxFQUZYLEVBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhELEVBSUVHLElBQUksRUFKTixDQUZELENBREQ7QUFXQSxDQWpIRDs7S0FBTXpCLFU7O0FBMkpTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYXJ0ZW5haXJlcy9bc2x1Z10uN2JhNWUxM2RhNTBhOTQ4MmNlM2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0JztcclxuaW1wb3J0IHsgQVBJLCBET01BSU4sIEFQUF9OQU1FIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQge1xyXG5cdENhcmQsXHJcblx0QnV0dG9uLFxyXG5cdENhcmRJbWcsXHJcblx0Q2FyZFRpdGxlLFxyXG5cdENhcmRUZXh0LFxyXG5cdENhcmREZWNrLFxyXG5cdENhcmRTdWJ0aXRsZSxcclxuXHRDYXJkQm9keSxcclxuXHRKdW1ib3Ryb24sXHJcbn0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7XHJcblx0TGlzdEFsbFBhcnRlbmFpcmVDYXJkcyxcclxuXHRMaXN0QWxsUGFydGVuYWlyZXNOb21zLFxyXG5cdGxpc3RlUGFydGVuYWlyZUJ5U2x1ZyxcclxufSBmcm9tICcuLi8uLi9hY3Rpb25zL3BhcnRlbmFpcmVzQWN0aW9ucyc7XHJcbmltcG9ydCB7IGxpc3RQaG90b3NCeVNlY3Rpb24gfSBmcm9tICcuLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuXHJcbmNvbnN0IFBhcnRlbmFpcmUgPSAoeyBjYXRlZ29yaWUsIHBhcnRlbmFpcmVzLCBwaG90b3MgfSkgPT4ge1xyXG5cdGNvbnN0IGhlYWQgPSAoKSA9PiAoXHJcblx0XHQ8SGVhZD5cclxuXHRcdFx0PHRpdGxlPlxyXG5cdFx0XHRcdHtBUFBfTkFNRX0gfCB7Y2F0ZWdvcmllLm5vbX17JyAnfVxyXG5cdFx0XHQ8L3RpdGxlPlxyXG5cdFx0XHQ8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD17Y2F0ZWdvcmllLm1kZXNjfSAvPlxyXG5cdFx0XHQ8bGluayByZWw9J2Nhbm9uaWNhbCcgaHJlZj17YCR7RE9NQUlOfS9naXRlLyR7Y2F0ZWdvcmllLnNsdWd9YH0gLz5cclxuXHRcdFx0PG1ldGFcclxuXHRcdFx0XHRwcm9wZXJ0eT0nb2c6dGl0bGUnXHJcblx0XHRcdFx0Y29udGVudD17YCR7Y2F0ZWdvcmllLm5vbX0gfCAke0FQUF9OQU1FfWB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzpkZXNjcmlwdGlvbicgY29udGVudD17Y2F0ZWdvcmllLm1kZXNjfSAvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6dHlwZScgY29udGVudD0nd2Vic2l0ZScgLz5cclxuXHRcdFx0PG1ldGFcclxuXHRcdFx0XHRwcm9wZXJ0eT0nb2c6dXJsJ1xyXG5cdFx0XHRcdGNvbnRlbnQ9e2Ake0RPTUFJTn0vZ2l0ZS8ke2NhdGVnb3JpZS5zbHVnfWB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzpzaXRlX25hbWUnIGNvbnRlbnQ9e2Ake0FQUF9OQU1FfWB9IC8+XHJcblxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6c2l0ZV9uYW1lJyBjb250ZW50PXtBUFBfTkFNRX0gLz5cclxuXHJcblx0XHRcdDxtZXRhXHJcblx0XHRcdFx0cHJvcGVydHk9J29nOmltYWdlJ1xyXG5cdFx0XHRcdGNvbnRlbnQ9e2Ake0FQSX0vYmxvZy9waG90by8ke2NhdGVnb3JpZS5zbHVnfWB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxtZXRhXHJcblx0XHRcdFx0cHJvcGVydHk9J29nOmltYWdlOnNlY3VyZV91cmwnXHJcblx0XHRcdFx0Y29udGVudD17YCR7QVBJfS9naXRlL3Bob3RvLyR7Y2F0ZWdvcmllLnNsdWd9YH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOmltYWdlOnR5cGUnIGNvbnRlbnQ9J2ltYWdlL2pwZycgLz5cclxuXHRcdDwvSGVhZD5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBwaG90b0luZm9zID0gKGlkKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZygncGhvdG9zIHZhdXQgPT4gJywgcGhvdG9zKTtcclxuXHRcdHBob3Rvcy5mb3JFYWNoKChwaG90bykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdHBob3RvLl9pZCA9PT0gaWQgJiYgKFxyXG5cdFx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZC1ibG9jaydcclxuXHRcdFx0XHRcdFx0c3JjPXtwaG90b1NyYyhwYXJ0ZW5haXJlLmltYWdlKX1cclxuXHRcdFx0XHRcdFx0YWx0PXtwaG90b0FsdChwYXJ0ZW5haXJlLmltYWdlKX1cclxuXHRcdFx0XHRcdFx0d2lkdGg9ezMxOH1cclxuXHRcdFx0XHRcdFx0aGVpZ2h0PXsxODB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdClcclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGp1bWJvdHJvbiA9ICgpID0+IChcclxuXHRcdDxzZWN0aW9uPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0XHQ8SnVtYm90cm9uPlxyXG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nZGlzcGxheS0zJz5cclxuXHRcdFx0XHRcdFx0Tm9zIHBhcnRlbmFpcmVzIGRhbnMgbGEgY2F0w6lnb3JpZSB7Y2F0ZWdvcmllLm5vbX1cclxuXHRcdFx0XHRcdDwvaDE+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2xlYWQnPntjYXRlZ29yaWUucHJlc1NlY3Rpb259PC9wPlxyXG5cdFx0XHRcdFx0PGhyIGNsYXNzTmFtZT0nbXktMicgLz5cclxuXHRcdFx0XHRcdDxwPntjYXRlZ29yaWUucHJlc1BhcnRlbmFpcmV9PC9wPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdsZWFkJz48L3A+XHJcblx0XHRcdFx0PC9KdW1ib3Ryb24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9zZWN0aW9uPlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IGNhcmQgPSAoKSA9PiAoXHJcblx0XHQ8Q2FyZERlY2s+XHJcblx0XHRcdHtwYXJ0ZW5haXJlcy5tYXAoKHBhcnRlbmFpcmUpID0+IChcclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PENhcmQ+XHJcblx0XHRcdFx0XHRcdHsvKiA8SW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2QtYmxvY2snXHJcblx0XHRcdFx0XHRcdFx0c3JjPXtwaG90b1NyYyhwYXJ0ZW5haXJlLmltYWdlKX1cclxuXHRcdFx0XHRcdFx0XHRhbHQ9e3Bob3RvQWx0KHBhcnRlbmFpcmUuaW1hZ2UpfVxyXG5cdFx0XHRcdFx0XHRcdHdpZHRoPXszMTh9XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0PXsxODB9XHJcblx0XHRcdFx0XHRcdC8+ICovfVxyXG5cdFx0XHRcdFx0XHR7cGhvdG9JbmZvcyhwYXJ0ZW5haXJlLmltYWdlKX1cclxuXHRcdFx0XHRcdFx0PENhcmRCb2R5PlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkVGl0bGUgdGFnPSdoNSc+e3BhcnRlbmFpcmUudGl0cmV9PC9DYXJkVGl0bGU+XHJcblx0XHRcdFx0XHRcdFx0PENhcmRTdWJ0aXRsZSB0YWc9J2g2JyBjbGFzc05hbWU9J21iLTIgdGV4dC1tdXRlZCc+XHJcblx0XHRcdFx0XHRcdFx0XHR7LyogQ2FyZCBzdWJ0aXRsZSAqL31cclxuXHRcdFx0XHRcdFx0XHQ8L0NhcmRTdWJ0aXRsZT5cclxuXHRcdFx0XHRcdFx0XHQ8Q2FyZFRleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHR7cGFydGVuYWlyZS5tYWlsICYmIDxwPntwYXJ0ZW5haXJlLm1haWx9PC9wPn1cclxuXHRcdFx0XHRcdFx0XHRcdHtwYXJ0ZW5haXJlLnRlbCAmJiA8cD57cGFydGVuYWlyZS50ZWx9PC9wPn1cclxuXHRcdFx0XHRcdFx0XHRcdHtwYXJ0ZW5haXJlLmFkcmVzc2UgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD57cGFydGVuYWlyZS5hZHJlc3NlfTwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0XHR7cGFydGVuYWlyZS50ZXh0ZSAmJiA8cD57cGFydGVuYWlyZS50ZXh0ZX08L3A+fVxyXG5cdFx0XHRcdFx0XHRcdFx0ey8qIHtwYXJ0ZW5haXJlLnNpdGUgJiYgPHA+e3BhcnRlbmFpcmUuc2l0ZX08L3A+fSAqL31cclxuXHRcdFx0XHRcdFx0XHQ8L0NhcmRUZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b24+QnV0dG9uPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDwvQ2FyZEJvZHk+XHJcblx0XHRcdFx0XHQ8L0NhcmQ+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCkpfVxyXG5cdFx0PC9DYXJkRGVjaz5cclxuXHQpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e2hlYWQoKX1cclxuXHRcdFx0PExheW91dD5cclxuXHRcdFx0XHR7Lyoge0pTT04uc3RyaW5naWZ5KGdpdGUpfSAqL31cclxuXHRcdFx0XHR7anVtYm90cm9uKCl9XHJcblx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0e2NhcmQoKX1cclxuXHRcdFx0PC9MYXlvdXQ+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG5cdC8vbGlzdGVyIGxlcyBub21zIGRlXHJcblxyXG5cdGNvbnN0IHBhcnRlbmFpcmVzTm9tcyA9IGF3YWl0IExpc3RBbGxQYXJ0ZW5haXJlc05vbXMoKTtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cGF0aHM6IHBhcnRlbmFpcmVzTm9tcy5tYXAoKG5vbSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHBhcmFtczogeyBpZDogbm9tLl9pZCwgc2x1Zzogbm9tLnNsdWcgfSxcclxuXHRcdFx0fTtcclxuXHRcdH0pLFxyXG5cdFx0ZmFsbGJhY2s6IGZhbHNlLFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcblx0cmV0dXJuIGxpc3RlUGFydGVuYWlyZUJ5U2x1Zyhjb250ZXh0LnBhcmFtcy5zbHVnKS50aGVuKChjYXRlZ29yaWUpID0+IHtcclxuXHRcdGlmIChjYXRlZ29yaWUuZXJyb3IpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coY2F0ZWdvcmllLmVycm9yKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBMaXN0QWxsUGFydGVuYWlyZUNhcmRzKGNhdGVnb3JpZS5faWQpLnRoZW4oKHBhcnRlbmFpcmVzKSA9PiB7XHJcblx0XHRcdFx0aWYgKHBhcnRlbmFpcmVzLmVycm9yKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhwYXJ0ZW5haXJlcy5lcnJvcik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiBsaXN0UGhvdG9zQnlTZWN0aW9uKGNhdGVnb3JpZS5zbHVnKS50aGVuKFxyXG5cdFx0XHRcdFx0XHQocGhvdG9zKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHBob3Rvcy5lcnJvcikge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocGhvdG9zLmVycm9yKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJvcHM6IHsgY2F0ZWdvcmllLCBwYXJ0ZW5haXJlcywgcGhvdG9zIH0sXHJcblx0XHRcdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXJ0ZW5haXJlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9