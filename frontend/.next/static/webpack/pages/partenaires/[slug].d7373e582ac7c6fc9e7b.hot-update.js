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
        image = {
          image: {
            src: photo.src,
            alt: photo.alt
          }
        };
      }
    });
    return image;
  };

  var jumbotron = function jumbotron() {
    return __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 3
      }
    }, __jsx("div", {
      className: "container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 4
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Jumbotron"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 5
      }
    }, __jsx("h1", {
      className: "display-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 6
      }
    }, "Nos partenaires dans la cat\xE9gorie ", categorie.nom), __jsx("p", {
      className: "lead",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 6
      }
    }, categorie.presSection), __jsx("hr", {
      className: "my-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 6
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 6
      }
    }, categorie.presPartenaire), __jsx("p", {
      className: "lead",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 6
      }
    }))));
  };

  var card = function card() {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardDeck"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 3
      }
    }, partenaires.map(function (partenaire) {
      return __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 5
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 6
        }
      }, photoInfos(partenaire.image), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 7
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardTitle"], {
        tag: "h5",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 8
        }
      }, partenaire.titre), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardSubtitle"], {
        tag: "h6",
        className: "mb-2 text-muted",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 8
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 8
        }
      }, partenaire.mail && __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 29
        }
      }, partenaire.mail), partenaire.tel && __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 28
        }
      }, partenaire.tel), partenaire.adresse && __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 10
        }
      }, partenaire.adresse), partenaire.texte && __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 30
        }
      }, partenaire.texte)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 8
        }
      }, "Button"))));
    }));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, head(), __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 4
    }
  }, jumbotron(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFydGVuYWlyZXMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlBhcnRlbmFpcmUiLCJjYXRlZ29yaWUiLCJwYXJ0ZW5haXJlcyIsInBob3RvcyIsImhlYWQiLCJBUFBfTkFNRSIsIm5vbSIsIm1kZXNjIiwiRE9NQUlOIiwic2x1ZyIsIkFQSSIsInBob3RvSW5mb3MiLCJpZCIsImltYWdlIiwiZm9yRWFjaCIsInBob3RvIiwiX2lkIiwic3JjIiwiYWx0IiwianVtYm90cm9uIiwicHJlc1NlY3Rpb24iLCJwcmVzUGFydGVuYWlyZSIsImNhcmQiLCJtYXAiLCJwYXJ0ZW5haXJlIiwidGl0cmUiLCJtYWlsIiwidGVsIiwiYWRyZXNzZSIsInRleHRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWtCQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUF3QztBQUFBLE1BQXJDQyxTQUFxQyxRQUFyQ0EsU0FBcUM7QUFBQSxNQUExQkMsV0FBMEIsUUFBMUJBLFdBQTBCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUMxRCxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLFdBQ1osTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFQyxnREFERixTQUNlSixTQUFTLENBQUNLLEdBRHpCLEVBQzhCLEdBRDlCLENBREQsRUFJQztBQUFNLFVBQUksRUFBQyxhQUFYO0FBQXlCLGFBQU8sRUFBRUwsU0FBUyxDQUFDTSxLQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkQsRUFLQztBQUFNLFNBQUcsRUFBQyxXQUFWO0FBQXNCLFVBQUksWUFBS0MsOENBQUwsbUJBQW9CUCxTQUFTLENBQUNRLElB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJSixVQUFVLENBQUNJLE9BQWYsQ0FKRixFQU1FSixVQUFVLENBQUNLLEtBQVgsSUFBb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJTCxVQUFVLENBQUNLLEtBQWYsQ0FOdEIsQ0FMRCxFQWNDLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFkRCxDQUZELENBREQsQ0FEZ0I7QUFBQSxLQUFoQixDQURGLENBRFk7QUFBQSxHQUFiOztBQTRCQSxTQUNDLG1FQUNFekIsSUFBSSxFQUROLEVBRUMsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUVlLFNBQVMsRUFGWCxFQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRCxFQUlFRyxJQUFJLEVBSk4sQ0FGRCxDQUREO0FBV0EsQ0FuR0Q7O0tBQU10QixVOztBQTZJU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFydGVuYWlyZXMvW3NsdWddLmQ3MzczZTU4MmFjN2M2ZmM5ZTdiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCc7XHJcbmltcG9ydCB7IEFQSSwgRE9NQUlOLCBBUFBfTkFNRSB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHtcclxuXHRDYXJkLFxyXG5cdEJ1dHRvbixcclxuXHRDYXJkSW1nLFxyXG5cdENhcmRUaXRsZSxcclxuXHRDYXJkVGV4dCxcclxuXHRDYXJkRGVjayxcclxuXHRDYXJkU3VidGl0bGUsXHJcblx0Q2FyZEJvZHksXHJcblx0SnVtYm90cm9uLFxyXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQge1xyXG5cdExpc3RBbGxQYXJ0ZW5haXJlQ2FyZHMsXHJcblx0TGlzdEFsbFBhcnRlbmFpcmVzTm9tcyxcclxuXHRsaXN0ZVBhcnRlbmFpcmVCeVNsdWcsXHJcbn0gZnJvbSAnLi4vLi4vYWN0aW9ucy9wYXJ0ZW5haXJlc0FjdGlvbnMnO1xyXG5pbXBvcnQgeyBsaXN0UGhvdG9zQnlTZWN0aW9uIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcblxyXG5jb25zdCBQYXJ0ZW5haXJlID0gKHsgY2F0ZWdvcmllLCBwYXJ0ZW5haXJlcywgcGhvdG9zIH0pID0+IHtcclxuXHRjb25zdCBoZWFkID0gKCkgPT4gKFxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdDx0aXRsZT5cclxuXHRcdFx0XHR7QVBQX05BTUV9IHwge2NhdGVnb3JpZS5ub219eycgJ31cclxuXHRcdFx0PC90aXRsZT5cclxuXHRcdFx0PG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2NhdGVnb3JpZS5tZGVzY30gLz5cclxuXHRcdFx0PGxpbmsgcmVsPSdjYW5vbmljYWwnIGhyZWY9e2Ake0RPTUFJTn0vZ2l0ZS8ke2NhdGVnb3JpZS5zbHVnfWB9IC8+XHJcblx0XHRcdDxtZXRhXHJcblx0XHRcdFx0cHJvcGVydHk9J29nOnRpdGxlJ1xyXG5cdFx0XHRcdGNvbnRlbnQ9e2Ake2NhdGVnb3JpZS5ub219IHwgJHtBUFBfTkFNRX1gfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6ZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2NhdGVnb3JpZS5tZGVzY30gLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnR5cGUnIGNvbnRlbnQ9J3dlYnNpdGUnIC8+XHJcblx0XHRcdDxtZXRhXHJcblx0XHRcdFx0cHJvcGVydHk9J29nOnVybCdcclxuXHRcdFx0XHRjb250ZW50PXtgJHtET01BSU59L2dpdGUvJHtjYXRlZ29yaWUuc2x1Z31gfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6c2l0ZV9uYW1lJyBjb250ZW50PXtgJHtBUFBfTkFNRX1gfSAvPlxyXG5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnNpdGVfbmFtZScgY29udGVudD17QVBQX05BTUV9IC8+XHJcblxyXG5cdFx0XHQ8bWV0YVxyXG5cdFx0XHRcdHByb3BlcnR5PSdvZzppbWFnZSdcclxuXHRcdFx0XHRjb250ZW50PXtgJHtBUEl9L2Jsb2cvcGhvdG8vJHtjYXRlZ29yaWUuc2x1Z31gfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8bWV0YVxyXG5cdFx0XHRcdHByb3BlcnR5PSdvZzppbWFnZTpzZWN1cmVfdXJsJ1xyXG5cdFx0XHRcdGNvbnRlbnQ9e2Ake0FQSX0vZ2l0ZS9waG90by8ke2NhdGVnb3JpZS5zbHVnfWB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzppbWFnZTp0eXBlJyBjb250ZW50PSdpbWFnZS9qcGcnIC8+XHJcblx0XHQ8L0hlYWQ+XHJcblx0KTtcclxuXHJcblx0Y29uc3QgcGhvdG9JbmZvcyA9IChpZCkgPT4ge1xyXG5cdFx0bGV0IGltYWdlID0ge307XHJcblx0XHRwaG90b3MuZm9yRWFjaCgocGhvdG8pID0+IHtcclxuXHRcdFx0aWYgKHBob3RvLl9pZCA9PT0gaWQpIHtcclxuXHRcdFx0XHRpbWFnZSA9IHsgaW1hZ2U6IHsgc3JjOiBwaG90by5zcmMsIGFsdDogcGhvdG8uYWx0IH0gfTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gaW1hZ2U7XHJcblx0fTtcclxuXHJcblx0Y29uc3QganVtYm90cm9uID0gKCkgPT4gKFxyXG5cdFx0PHNlY3Rpb24+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHRcdDxKdW1ib3Ryb24+XHJcblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSdkaXNwbGF5LTMnPlxyXG5cdFx0XHRcdFx0XHROb3MgcGFydGVuYWlyZXMgZGFucyBsYSBjYXTDqWdvcmllIHtjYXRlZ29yaWUubm9tfVxyXG5cdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nbGVhZCc+e2NhdGVnb3JpZS5wcmVzU2VjdGlvbn08L3A+XHJcblx0XHRcdFx0XHQ8aHIgY2xhc3NOYW1lPSdteS0yJyAvPlxyXG5cdFx0XHRcdFx0PHA+e2NhdGVnb3JpZS5wcmVzUGFydGVuYWlyZX08L3A+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2xlYWQnPjwvcD5cclxuXHRcdFx0XHQ8L0p1bWJvdHJvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L3NlY3Rpb24+XHJcblx0KTtcclxuXHJcblx0Y29uc3QgY2FyZCA9ICgpID0+IChcclxuXHRcdDxDYXJkRGVjaz5cclxuXHRcdFx0e3BhcnRlbmFpcmVzLm1hcCgocGFydGVuYWlyZSkgPT4gKFxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8Q2FyZD5cclxuXHRcdFx0XHRcdFx0e3Bob3RvSW5mb3MocGFydGVuYWlyZS5pbWFnZSl9XHJcblx0XHRcdFx0XHRcdDxDYXJkQm9keT5cclxuXHRcdFx0XHRcdFx0XHQ8Q2FyZFRpdGxlIHRhZz0naDUnPntwYXJ0ZW5haXJlLnRpdHJlfTwvQ2FyZFRpdGxlPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkU3VidGl0bGUgdGFnPSdoNicgY2xhc3NOYW1lPSdtYi0yIHRleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0ey8qIENhcmQgc3VidGl0bGUgKi99XHJcblx0XHRcdFx0XHRcdFx0PC9DYXJkU3VidGl0bGU+XHJcblx0XHRcdFx0XHRcdFx0PENhcmRUZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0e3BhcnRlbmFpcmUubWFpbCAmJiA8cD57cGFydGVuYWlyZS5tYWlsfTwvcD59XHJcblx0XHRcdFx0XHRcdFx0XHR7cGFydGVuYWlyZS50ZWwgJiYgPHA+e3BhcnRlbmFpcmUudGVsfTwvcD59XHJcblx0XHRcdFx0XHRcdFx0XHR7cGFydGVuYWlyZS5hZHJlc3NlICYmIChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+e3BhcnRlbmFpcmUuYWRyZXNzZX08L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0e3BhcnRlbmFpcmUudGV4dGUgJiYgPHA+e3BhcnRlbmFpcmUudGV4dGV9PC9wPn1cclxuXHRcdFx0XHRcdFx0XHRcdHsvKiB7cGFydGVuYWlyZS5zaXRlICYmIDxwPntwYXJ0ZW5haXJlLnNpdGV9PC9wPn0gKi99XHJcblx0XHRcdFx0XHRcdFx0PC9DYXJkVGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uPkJ1dHRvbjwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L0NhcmRCb2R5PlxyXG5cdFx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpKX1cclxuXHRcdDwvQ2FyZERlY2s+XHJcblx0KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHtoZWFkKCl9XHJcblx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdFx0ey8qIHtKU09OLnN0cmluZ2lmeShnaXRlKX0gKi99XHJcblx0XHRcdFx0e2p1bWJvdHJvbigpfVxyXG5cdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdHtjYXJkKCl9XHJcblx0XHRcdDwvTGF5b3V0PlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuXHQvL2xpc3RlciBsZXMgbm9tcyBkZVxyXG5cclxuXHRjb25zdCBwYXJ0ZW5haXJlc05vbXMgPSBhd2FpdCBMaXN0QWxsUGFydGVuYWlyZXNOb21zKCk7XHJcblx0cmV0dXJuIHtcclxuXHRcdHBhdGhzOiBwYXJ0ZW5haXJlc05vbXMubWFwKChub20pID0+IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRwYXJhbXM6IHsgaWQ6IG5vbS5faWQsIHNsdWc6IG5vbS5zbHVnIH0sXHJcblx0XHRcdH07XHJcblx0XHR9KSxcclxuXHRcdGZhbGxiYWNrOiBmYWxzZSxcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG5cdHJldHVybiBsaXN0ZVBhcnRlbmFpcmVCeVNsdWcoY29udGV4dC5wYXJhbXMuc2x1ZykudGhlbigoY2F0ZWdvcmllKSA9PiB7XHJcblx0XHRpZiAoY2F0ZWdvcmllLmVycm9yKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGNhdGVnb3JpZS5lcnJvcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gTGlzdEFsbFBhcnRlbmFpcmVDYXJkcyhjYXRlZ29yaWUuX2lkKS50aGVuKChwYXJ0ZW5haXJlcykgPT4ge1xyXG5cdFx0XHRcdGlmIChwYXJ0ZW5haXJlcy5lcnJvcikge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocGFydGVuYWlyZXMuZXJyb3IpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gbGlzdFBob3Rvc0J5U2VjdGlvbihjYXRlZ29yaWUuc2x1ZykudGhlbihcclxuXHRcdFx0XHRcdFx0KHBob3RvcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChwaG90b3MuZXJyb3IpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHBob3Rvcy5lcnJvcik7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHByb3BzOiB7IGNhdGVnb3JpZSwgcGFydGVuYWlyZXMsIHBob3RvcyB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFydGVuYWlyZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==