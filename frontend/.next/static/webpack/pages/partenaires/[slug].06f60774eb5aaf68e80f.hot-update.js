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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");


var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\partenaires\\[slug].js",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var Partenaire = function Partenaire(_ref) {
  var categorie = _ref.categorie,
      partenaires = _ref.partenaires,
      photos = _ref.photos;

  var head = function head() {
    return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 3
      }
    }, __jsx("title", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 4
      }
    }, _config__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"], " | ", categorie.nom, ' '), __jsx("meta", {
      name: "description",
      content: categorie.mdesc,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 4
      }
    }), __jsx("link", {
      rel: "canonical",
      href: "".concat(_config__WEBPACK_IMPORTED_MODULE_4__["DOMAIN"], "/gite/").concat(categorie.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:title",
      content: "".concat(categorie.nom, " | ").concat(_config__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:description",
      content: categorie.mdesc,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:type",
      content: "website",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:url",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_4__["DOMAIN"], "/gite/").concat(categorie.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:site_name",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:site_name",
      content: _config__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:image",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_4__["API"], "/blog/photo/").concat(categorie.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:image:secure_url",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_4__["API"], "/gite/photo/").concat(categorie.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:image:type",
      content: "image/jpg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 4
      }
    }));
  };

  var photoInfos = function photoInfos(id) {
    for (var _ref2 in photos) {
      var _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 1);

      var key = _ref3[0];

      if (Object.hasOwnProperty.call(photos, key)) {
        return photos[key]._id === id && __jsx(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
          className: "d-block w-100",
          src: photos[key].location,
          alt: photos[key].alt,
          width: 200,
          height: 150,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 7
          }
        });
      }
    } // console.log(photos._id);
    // console.log(id);
    // photos._id !== id ?  : console.log('false');

  };

  var jumbotron = function jumbotron() {
    return __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 3
      }
    }, __jsx("div", {
      className: "container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 4
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Jumbotron"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 5
      }
    }, __jsx("h1", {
      className: "display-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 6
      }
    }, "Nos partenaires dans la cat\xE9gorie ", categorie.nom), __jsx("p", {
      className: "lead",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 6
      }
    }, categorie.presSection), __jsx("hr", {
      className: "my-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 6
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 6
      }
    }, categorie.presPartenaire), __jsx("p", {
      className: "lead",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 6
      }
    }))));
  };

  var card = function card() {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardDeck"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 3
      }
    }, partenaires.map(function (partenaire) {
      return __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 5
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 6
        }
      }, photoInfos(partenaire.image), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 7
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
        tag: "h5",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 8
        }
      }, partenaire.titre), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardSubtitle"], {
        tag: "h6",
        className: "mb-2 text-muted",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 8
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 8
        }
      }, partenaire.mail && __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 29
        }
      }, partenaire.mail), partenaire.tel && __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 28
        }
      }, partenaire.tel), partenaire.adresse && __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 10
        }
      }, partenaire.adresse), partenaire.texte && __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 30
        }
      }, partenaire.texte)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 8
        }
      }, "Button"))));
    }));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, head(), __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 4
    }
  }, jumbotron(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFydGVuYWlyZXMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlBhcnRlbmFpcmUiLCJjYXRlZ29yaWUiLCJwYXJ0ZW5haXJlcyIsInBob3RvcyIsImhlYWQiLCJBUFBfTkFNRSIsIm5vbSIsIm1kZXNjIiwiRE9NQUlOIiwic2x1ZyIsIkFQSSIsInBob3RvSW5mb3MiLCJpZCIsImtleSIsIk9iamVjdCIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIl9pZCIsImxvY2F0aW9uIiwiYWx0IiwianVtYm90cm9uIiwicHJlc1NlY3Rpb24iLCJwcmVzUGFydGVuYWlyZSIsImNhcmQiLCJtYXAiLCJwYXJ0ZW5haXJlIiwiaW1hZ2UiLCJ0aXRyZSIsIm1haWwiLCJ0ZWwiLCJhZHJlc3NlIiwidGV4dGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFpQkE7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBd0M7QUFBQSxNQUFyQ0MsU0FBcUMsUUFBckNBLFNBQXFDO0FBQUEsTUFBMUJDLFdBQTBCLFFBQTFCQSxXQUEwQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFDMUQsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxXQUNaLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRUMsZ0RBREYsU0FDZUosU0FBUyxDQUFDSyxHQUR6QixFQUM4QixHQUQ5QixDQURELEVBSUM7QUFBTSxVQUFJLEVBQUMsYUFBWDtBQUF5QixhQUFPLEVBQUVMLFNBQVMsQ0FBQ00sS0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpELEVBS0M7QUFBTSxTQUFHLEVBQUMsV0FBVjtBQUFzQixVQUFJ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QUNFRixVQUFVLENBQUNHLElBQVgsSUFBbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJSCxVQUFVLENBQUNHLElBQWYsQ0FEckIsRUFFRUgsVUFBVSxDQUFDSSxHQUFYLElBQWtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSUosVUFBVSxDQUFDSSxHQUFmLENBRnBCLEVBR0VKLFVBQVUsQ0FBQ0ssT0FBWCxJQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSUwsVUFBVSxDQUFDSyxPQUFmLENBSkYsRUFNRUwsVUFBVSxDQUFDTSxLQUFYLElBQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSU4sVUFBVSxDQUFDTSxLQUFmLENBTnRCLENBTEQsRUFjQyxNQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBZEQsQ0FGRCxDQURELENBRGdCO0FBQUEsS0FBaEIsQ0FERixDQURZO0FBQUEsR0FBYjs7QUE0QkEsU0FDQyxtRUFDRTNCLElBQUksRUFETixFQUVDLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFZ0IsU0FBUyxFQUZYLEVBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhELEVBSUVHLElBQUksRUFKTixDQUZELENBREQ7QUFXQSxDQTlHRDs7S0FBTXZCLFU7O0FBd0pTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYXJ0ZW5haXJlcy9bc2x1Z10uMDZmNjA3NzRlYjVhYWY2OGU4MGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0JztcclxuaW1wb3J0IHsgQVBJLCBET01BSU4sIEFQUF9OQU1FIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQge1xyXG5cdENhcmQsXHJcblx0QnV0dG9uLFxyXG5cdENhcmRJbWcsXHJcblx0Q2FyZFRpdGxlLFxyXG5cdENhcmRUZXh0LFxyXG5cdENhcmREZWNrLFxyXG5cdENhcmRTdWJ0aXRsZSxcclxuXHRDYXJkQm9keSxcclxuXHRKdW1ib3Ryb24sXHJcbn0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7XHJcblx0TGlzdEFsbFBhcnRlbmFpcmVDYXJkcyxcclxuXHRMaXN0QWxsUGFydGVuYWlyZXNOb21zLFxyXG5cdGxpc3RlUGFydGVuYWlyZUJ5U2x1ZyxcclxufSBmcm9tICcuLi8uLi9hY3Rpb25zL3BhcnRlbmFpcmVzQWN0aW9ucyc7XHJcbmltcG9ydCB7IGxpc3RQaG90b3NCeVNlY3Rpb24gfSBmcm9tICcuLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IGltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuY29uc3QgUGFydGVuYWlyZSA9ICh7IGNhdGVnb3JpZSwgcGFydGVuYWlyZXMsIHBob3RvcyB9KSA9PiB7XHJcblx0Y29uc3QgaGVhZCA9ICgpID0+IChcclxuXHRcdDxIZWFkPlxyXG5cdFx0XHQ8dGl0bGU+XHJcblx0XHRcdFx0e0FQUF9OQU1FfSB8IHtjYXRlZ29yaWUubm9tfXsnICd9XHJcblx0XHRcdDwvdGl0bGU+XHJcblx0XHRcdDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PXtjYXRlZ29yaWUubWRlc2N9IC8+XHJcblx0XHRcdDxsaW5rIHJlbD0nY2Fub25pY2FsJyBocmVmPXtgJHtET01BSU59L2dpdGUvJHtjYXRlZ29yaWUuc2x1Z31gfSAvPlxyXG5cdFx0XHQ8bWV0YVxyXG5cdFx0XHRcdHByb3BlcnR5PSdvZzp0aXRsZSdcclxuXHRcdFx0XHRjb250ZW50PXtgJHtjYXRlZ29yaWUubm9tfSB8ICR7QVBQX05BTUV9YH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOmRlc2NyaXB0aW9uJyBjb250ZW50PXtjYXRlZ29yaWUubWRlc2N9IC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzp0eXBlJyBjb250ZW50PSd3ZWJzaXRlJyAvPlxyXG5cdFx0XHQ8bWV0YVxyXG5cdFx0XHRcdHByb3BlcnR5PSdvZzp1cmwnXHJcblx0XHRcdFx0Y29udGVudD17YCR7RE9NQUlOfS9naXRlLyR7Y2F0ZWdvcmllLnNsdWd9YH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnNpdGVfbmFtZScgY29udGVudD17YCR7QVBQX05BTUV9YH0gLz5cclxuXHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzpzaXRlX25hbWUnIGNvbnRlbnQ9e0FQUF9OQU1FfSAvPlxyXG5cclxuXHRcdFx0PG1ldGFcclxuXHRcdFx0XHRwcm9wZXJ0eT0nb2c6aW1hZ2UnXHJcblx0XHRcdFx0Y29udGVudD17YCR7QVBJfS9ibG9nL3Bob3RvLyR7Y2F0ZWdvcmllLnNsdWd9YH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PG1ldGFcclxuXHRcdFx0XHRwcm9wZXJ0eT0nb2c6aW1hZ2U6c2VjdXJlX3VybCdcclxuXHRcdFx0XHRjb250ZW50PXtgJHtBUEl9L2dpdGUvcGhvdG8vJHtjYXRlZ29yaWUuc2x1Z31gfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6aW1hZ2U6dHlwZScgY29udGVudD0naW1hZ2UvanBnJyAvPlxyXG5cdFx0PC9IZWFkPlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHBob3RvSW5mb3MgPSAoaWQpID0+IHtcclxuXHRcdGZvciAoY29uc3QgW2tleV0gaW4gcGhvdG9zKSB7XHJcblx0XHRcdGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChwaG90b3MsIGtleSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0cGhvdG9zW2tleV0uX2lkID09PSBpZCAmJiAoXHJcblx0XHRcdFx0XHRcdDxJbWFnZVxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZC1ibG9jayB3LTEwMCdcclxuXHRcdFx0XHRcdFx0XHRzcmM9e3Bob3Rvc1trZXldLmxvY2F0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdGFsdD17cGhvdG9zW2tleV0uYWx0fVxyXG5cdFx0XHRcdFx0XHRcdHdpZHRoPXsyMDB9XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0PXsxNTB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly8gY29uc29sZS5sb2cocGhvdG9zLl9pZCk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhpZCk7XHJcblx0XHQvLyBwaG90b3MuX2lkICE9PSBpZCA/ICA6IGNvbnNvbGUubG9nKCdmYWxzZScpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGp1bWJvdHJvbiA9ICgpID0+IChcclxuXHRcdDxzZWN0aW9uPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0XHQ8SnVtYm90cm9uPlxyXG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nZGlzcGxheS0zJz5cclxuXHRcdFx0XHRcdFx0Tm9zIHBhcnRlbmFpcmVzIGRhbnMgbGEgY2F0w6lnb3JpZSB7Y2F0ZWdvcmllLm5vbX1cclxuXHRcdFx0XHRcdDwvaDE+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2xlYWQnPntjYXRlZ29yaWUucHJlc1NlY3Rpb259PC9wPlxyXG5cdFx0XHRcdFx0PGhyIGNsYXNzTmFtZT0nbXktMicgLz5cclxuXHRcdFx0XHRcdDxwPntjYXRlZ29yaWUucHJlc1BhcnRlbmFpcmV9PC9wPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdsZWFkJz48L3A+XHJcblx0XHRcdFx0PC9KdW1ib3Ryb24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9zZWN0aW9uPlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IGNhcmQgPSAoKSA9PiAoXHJcblx0XHQ8Q2FyZERlY2s+XHJcblx0XHRcdHtwYXJ0ZW5haXJlcy5tYXAoKHBhcnRlbmFpcmUpID0+IChcclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PENhcmQ+XHJcblx0XHRcdFx0XHRcdHtwaG90b0luZm9zKHBhcnRlbmFpcmUuaW1hZ2UpfVxyXG5cdFx0XHRcdFx0XHQ8Q2FyZEJvZHk+XHJcblx0XHRcdFx0XHRcdFx0PENhcmRUaXRsZSB0YWc9J2g1Jz57cGFydGVuYWlyZS50aXRyZX08L0NhcmRUaXRsZT5cclxuXHRcdFx0XHRcdFx0XHQ8Q2FyZFN1YnRpdGxlIHRhZz0naDYnIGNsYXNzTmFtZT0nbWItMiB0ZXh0LW11dGVkJz5cclxuXHRcdFx0XHRcdFx0XHRcdHsvKiBDYXJkIHN1YnRpdGxlICovfVxyXG5cdFx0XHRcdFx0XHRcdDwvQ2FyZFN1YnRpdGxlPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdHtwYXJ0ZW5haXJlLm1haWwgJiYgPHA+e3BhcnRlbmFpcmUubWFpbH08L3A+fVxyXG5cdFx0XHRcdFx0XHRcdFx0e3BhcnRlbmFpcmUudGVsICYmIDxwPntwYXJ0ZW5haXJlLnRlbH08L3A+fVxyXG5cdFx0XHRcdFx0XHRcdFx0e3BhcnRlbmFpcmUuYWRyZXNzZSAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwPntwYXJ0ZW5haXJlLmFkcmVzc2V9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHRcdHtwYXJ0ZW5haXJlLnRleHRlICYmIDxwPntwYXJ0ZW5haXJlLnRleHRlfTwvcD59XHJcblx0XHRcdFx0XHRcdFx0XHR7Lyoge3BhcnRlbmFpcmUuc2l0ZSAmJiA8cD57cGFydGVuYWlyZS5zaXRlfTwvcD59ICovfVxyXG5cdFx0XHRcdFx0XHRcdDwvQ2FyZFRleHQ+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbj5CdXR0b248L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9DYXJkQm9keT5cclxuXHRcdFx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KSl9XHJcblx0XHQ8L0NhcmREZWNrPlxyXG5cdCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7aGVhZCgpfVxyXG5cdFx0XHQ8TGF5b3V0PlxyXG5cdFx0XHRcdHsvKiB7SlNPTi5zdHJpbmdpZnkoZ2l0ZSl9ICovfVxyXG5cdFx0XHRcdHtqdW1ib3Ryb24oKX1cclxuXHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHR7Y2FyZCgpfVxyXG5cdFx0XHQ8L0xheW91dD5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcblx0Ly9saXN0ZXIgbGVzIG5vbXMgZGVcclxuXHJcblx0Y29uc3QgcGFydGVuYWlyZXNOb21zID0gYXdhaXQgTGlzdEFsbFBhcnRlbmFpcmVzTm9tcygpO1xyXG5cdHJldHVybiB7XHJcblx0XHRwYXRoczogcGFydGVuYWlyZXNOb21zLm1hcCgobm9tKSA9PiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cGFyYW1zOiB7IGlkOiBub20uX2lkLCBzbHVnOiBub20uc2x1ZyB9LFxyXG5cdFx0XHR9O1xyXG5cdFx0fSksXHJcblx0XHRmYWxsYmFjazogZmFsc2UsXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuXHRyZXR1cm4gbGlzdGVQYXJ0ZW5haXJlQnlTbHVnKGNvbnRleHQucGFyYW1zLnNsdWcpLnRoZW4oKGNhdGVnb3JpZSkgPT4ge1xyXG5cdFx0aWYgKGNhdGVnb3JpZS5lcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhjYXRlZ29yaWUuZXJyb3IpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIExpc3RBbGxQYXJ0ZW5haXJlQ2FyZHMoY2F0ZWdvcmllLl9pZCkudGhlbigocGFydGVuYWlyZXMpID0+IHtcclxuXHRcdFx0XHRpZiAocGFydGVuYWlyZXMuZXJyb3IpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHBhcnRlbmFpcmVzLmVycm9yKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGxpc3RQaG90b3NCeVNlY3Rpb24oY2F0ZWdvcmllLnNsdWcpLnRoZW4oXHJcblx0XHRcdFx0XHRcdChwaG90b3MpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZiAocGhvdG9zLmVycm9yKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhwaG90b3MuZXJyb3IpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwcm9wczogeyBjYXRlZ29yaWUsIHBhcnRlbmFpcmVzLCBwaG90b3MgfSxcclxuXHRcdFx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcnRlbmFpcmU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=