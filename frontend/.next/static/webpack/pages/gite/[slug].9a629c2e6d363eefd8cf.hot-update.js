webpackHotUpdate_N_E("pages/gite/[slug]",{

/***/ "./pages/gite/[slug].js":
/*!******************************!*\
  !*** ./pages/gite/[slug].js ***!
  \******************************/
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
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ContactForm */ "./components/ContactForm.js");
var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\gite\\[slug].js",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var Gite = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(_c = function _c(_ref, ref) {
  var gite = _ref.gite,
      photos = _ref.photos,
      reviews = _ref.reviews;

  var head = function head() {
    return __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 3
      }
    }, __jsx("title", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 4
      }
    }, _config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"], " | ", gite.nom, ' '), __jsx("meta", {
      name: "description",
      content: gite.mdesc,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 4
      }
    }), __jsx("link", {
      rel: "canonical",
      href: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"], "/gite/").concat(gite.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:title",
      content: "".concat(gite.nom, " | ").concat(_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:description",
      content: gite.mdesc,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:type",
      content: "website",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:url",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"], "/gite/").concat(gite.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:site_name",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:site_name",
      content: _config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:image",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/blog/photo/").concat(gite.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:image:secure_url",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/gite/photo/").concat(gite.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:image:type",
      content: "image/jpg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 4
      }
    }));
  };

  var afficheCalendrier = function afficheCalendrier() {
    return {
      __html: gite.calendrierLink
    };
  };

  var afficheVideo = function afficheVideo() {
    return {
      __html: gite.videoLink
    };
  };

  var jumbotron = function jumbotron() {
    return __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 3
      }
    }, __jsx("div", {
      className: "container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 4
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Jumbotron"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 5
      }
    }, __jsx("h1", {
      className: "display-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 6
      }
    }, "Pr\xE9sentation du g\xEEte ", gite.nom), __jsx("p", {
      className: "lead",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 6
      }
    }, gite.presGiteSEO), __jsx("hr", {
      className: "my-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 6
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 6
      }
    }, "It uses utility classes for typography and spacing to space content out within the larger container."), __jsx("p", {
      className: "lead",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 6
      }
    }))));
  };

  var carousel = function carousel(section) {
    var filteredPhotos = photos.filter(function (photo) {
      return photo.sectionAssociee === section;
    });
    return filteredPhotos.map(function (photo, i) {
      return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Carousel"].Item, {
        key: i,
        ref: ref,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 4
        }
      }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: "d-block w-100",
        src: photo.location,
        alt: photo.alt,
        width: 500,
        height: 375,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 5
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Carousel"].Caption, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 5
        }
      }, __jsx("h4", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 6
        }
      }, photo.titreCarousel), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 6
        }
      }, photo.texteCarousel)));
    });
  };

  var sectionExterieur = function sectionExterieur() {
    return __jsx("div", {
      className: "container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 4
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 5
      }
    }, "Partie ext\xE9rieur"), __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 6
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Carousel"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 7
      }
    }, carousel('exterieur'))), __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 6
      }
    }, gite.texteExterieur))));
  };

  var sectionInterieur = function sectionInterieur() {
    return __jsx("div", {
      className: "container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 4
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 5
      }
    }, "Partie int\xE9rieur"), __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 6
      }
    }, gite.texteInterieur), __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 6
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Carousel"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 7
      }
    }, carousel('interieur'))))));
  };

  var sectionPiscine = function sectionPiscine() {
    return __jsx("div", {
      className: "container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 4
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 5
      }
    }, "Partie piscine"), __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 6
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Carousel"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 7
      }
    }, carousel('piscine'))), __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 6
      }
    }, gite.textePiscine))));
  };

  var carouselReviews = function carouselReviews() {
    return reviews.map(function (review, i) {
      return (// <h4>{review.note}</h4>
        __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Carousel"].Item, {
          key: i,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 4
          }
        }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
          className: "d-block w-100",
          src: '/images/grey.jpg',
          alt: 'texte',
          layout: "responsive",
          width: 'auto',
          height: 375,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 5
          }
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Carousel"].Caption, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 5
          }
        }, __jsx("p", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 6
          }
        }, reviews.commentaire), __jsx("p", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 6
          }
        }, reviews.note), __jsx("h4", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 6
          }
        }, review.client)))
      );
    });
  };

  var sectionReviews = function sectionReviews() {
    return __jsx("div", {
      className: "container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 4
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 5
      }
    }, "Ce que nos clients disent de ce g\xEEte"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Carousel"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 5
      }
    }, carouselReviews())));
  };

  var sectionVideoContact = function sectionVideoContact() {
    return __jsx("div", {
      className: "container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 4
      }
    }, __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 6
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 7
      }
    }, "Tour du g\xEEte en vid\xE9o"), __jsx("div", {
      className: "mt-5",
      dangerouslySetInnerHTML: afficheVideo(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 7
      }
    })), __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 6
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 7
      }
    }, "Ecrivez-nous !"), __jsx(_components_ContactForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 7
      }
    })))));
  };

  var sectionCalendrier = function sectionCalendrier() {
    return __jsx("div", {
      className: "container text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 4
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 5
      }
    }, "Calendrier des disponibilit\xE9s"), __jsx("div", {
      dangerouslySetInnerHTML: afficheCalendrier(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 5
      }
    })));
  };

  var sectionMap = function sectionMap() {
    return __jsx("div", {
      className: "container text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 4
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 5
      }
    }, "Itin\xE9raire conseill\xE9 depuis votre position"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 5
      }
    }, "Affiche la map ici")));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, head(), __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 4
    }
  }, jumbotron(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 5
    }
  }), sectionExterieur(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 5
    }
  }), sectionInterieur(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 5
    }
  }), sectionPiscine(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 5
    }
  }), console.log(reviews), sectionReviews(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 5
    }
  }), sectionVideoContact(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 5
    }
  }), sectionCalendrier(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 5
    }
  }), sectionMap()));
});
_c2 = Gite;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Gite);

var _c, _c2;

$RefreshReg$(_c, "Gite$React.forwardRef");
$RefreshReg$(_c2, "Gite");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2l0ZS9bc2x1Z10uanMiXSwibmFtZXMiOlsiR2l0ZSIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInJlZiIsImdpdGUiLCJwaG90b3MiLCJyZXZpZXdzIiwiaGVhZCIsIkFQUF9OQU1FIiwibm9tIiwibWRlc2MiLCJET01BSU4iLCJzbHVnIiwiQVBJIiwiYWZmaWNoZUNhbGVuZHJpZXIiLCJfX2h0bWwiLCJjYWxlbmRyaWVyTGluayIsImFmZmljaGVWaWRlbyIsInZpZGVvTGluayIsImp1bWJvdHJvbiIsInByZXNHaXRlU0VPIiwiY2Fyb3VzZWwiLCJzZWN0aW9uIiwiZmlsdGVyZWRQaG90b3MiLCJmaWx0ZXIiLCJwaG90byIsInNlY3Rpb25Bc3NvY2llZSIsIm1hcCIsImkiLCJsb2NhdGlvbiIsImFsdCIsInRpdHJlQ2Fyb3VzZWwiLCJ0ZXh0ZUNhcm91c2VsIiwic2VjdGlvbkV4dGVyaWV1ciIsInRleHRlRXh0ZXJpZXVyIiwic2VjdGlvbkludGVyaWV1ciIsInRleHRlSW50ZXJpZXVyIiwic2VjdGlvblBpc2NpbmUiLCJ0ZXh0ZVBpc2NpbmUiLCJjYXJvdXNlbFJldmlld3MiLCJyZXZpZXciLCJjb21tZW50YWlyZSIsIm5vdGUiLCJjbGllbnQiLCJzZWN0aW9uUmV2aWV3cyIsInNlY3Rpb25WaWRlb0NvbnRhY3QiLCJzZWN0aW9uQ2FsZW5kcmllciIsInNlY3Rpb25NYXAiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsSUFBSSxnQkFBR0MsNENBQUssQ0FBQ0MsVUFBTixNQUFpQixrQkFBNEJDLEdBQTVCLEVBQW9DO0FBQUEsTUFBakNDLElBQWlDLFFBQWpDQSxJQUFpQztBQUFBLE1BQTNCQyxNQUEyQixRQUEzQkEsTUFBMkI7QUFBQSxNQUFuQkMsT0FBbUIs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QyxpQkFBaUIsRUFoQm5CLEVBaUJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkQsRUFrQkVDLFVBQVUsRUFsQlosQ0FGRCxDQUREO0FBeUJBLENBdE5ZLENBQWI7TUFBTS9DLEk7O0FBNFBTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9naXRlL1tzbHVnXS45YTYyOWMyZTZkMzYzZWVmZDhjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQnO1xyXG5pbXBvcnQgeyBBUEksIERPTUFJTiwgQVBQX05BTUUgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQge1xyXG5cdGxpc3RlRGVzSW1hZ2VzLFxyXG5cdGxpc3RHaXRlRGV0YWlscyxcclxuXHRsaXN0UGhvdG9zQnlOb20sXHJcbn0gZnJvbSAnLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgSnVtYm90cm9uIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGFjdEZvcm0nO1xyXG5pbXBvcnQgeyBsaXN0UmV2aWV3c0J5U2x1ZyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvcmV2aWV3QWN0aW9ucyc7XHJcblxyXG5jb25zdCBHaXRlID0gUmVhY3QuZm9yd2FyZFJlZigoeyBnaXRlLCBwaG90b3MsIHJldmlld3MgfSwgcmVmKSA9PiB7XHJcblx0Y29uc3QgaGVhZCA9ICgpID0+IChcclxuXHRcdDxIZWFkPlxyXG5cdFx0XHQ8dGl0bGU+XHJcblx0XHRcdFx0e0FQUF9OQU1FfSB8IHtnaXRlLm5vbX17JyAnfVxyXG5cdFx0XHQ8L3RpdGxlPlxyXG5cdFx0XHQ8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD17Z2l0ZS5tZGVzY30gLz5cclxuXHRcdFx0PGxpbmsgcmVsPSdjYW5vbmljYWwnIGhyZWY9e2Ake0RPTUFJTn0vZ2l0ZS8ke2dpdGUuc2x1Z31gfSAvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6dGl0bGUnIGNvbnRlbnQ9e2Ake2dpdGUubm9tfSB8ICR7QVBQX05BTUV9YH0gLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOmRlc2NyaXB0aW9uJyBjb250ZW50PXtnaXRlLm1kZXNjfSAvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6dHlwZScgY29udGVudD0nd2Vic2l0ZScgLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnVybCcgY29udGVudD17YCR7RE9NQUlOfS9naXRlLyR7Z2l0ZS5zbHVnfWB9IC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzpzaXRlX25hbWUnIGNvbnRlbnQ9e2Ake0FQUF9OQU1FfWB9IC8+XHJcblxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6c2l0ZV9uYW1lJyBjb250ZW50PXtBUFBfTkFNRX0gLz5cclxuXHJcblx0XHRcdDxtZXRhXHJcblx0XHRcdFx0cHJvcGVydHk9J29nOmltYWdlJ1xyXG5cdFx0XHRcdGNvbnRlbnQ9e2Ake0FQSX0vYmxvZy9waG90by8ke2dpdGUuc2x1Z31gfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8bWV0YVxyXG5cdFx0XHRcdHByb3BlcnR5PSdvZzppbWFnZTpzZWN1cmVfdXJsJ1xyXG5cdFx0XHRcdGNvbnRlbnQ9e2Ake0FQSX0vZ2l0ZS9waG90by8ke2dpdGUuc2x1Z31gfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6aW1hZ2U6dHlwZScgY29udGVudD0naW1hZ2UvanBnJyAvPlxyXG5cdFx0XHR7LyogPG1ldGEgcHJvcGVydHk9J2ZiOmFwcF9pZCcgY29udGVudD17YCR7RkJfQVBQX0lEfWB9IC8+ICovfVxyXG5cdFx0PC9IZWFkPlxyXG5cdCk7XHJcblx0Y29uc3QgYWZmaWNoZUNhbGVuZHJpZXIgPSAoKSA9PiB7XHJcblx0XHRyZXR1cm4geyBfX2h0bWw6IGdpdGUuY2FsZW5kcmllckxpbmsgfTtcclxuXHR9O1xyXG5cdGNvbnN0IGFmZmljaGVWaWRlbyA9ICgpID0+IHtcclxuXHRcdHJldHVybiB7IF9faHRtbDogZ2l0ZS52aWRlb0xpbmsgfTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBqdW1ib3Ryb24gPSAoKSA9PiAoXHJcblx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblx0XHRcdFx0PEp1bWJvdHJvbj5cclxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9J2Rpc3BsYXktMyc+XHJcblx0XHRcdFx0XHRcdFByw6lzZW50YXRpb24gZHUgZ8OudGUge2dpdGUubm9tfVxyXG5cdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nbGVhZCc+e2dpdGUucHJlc0dpdGVTRU99PC9wPlxyXG5cdFx0XHRcdFx0PGhyIGNsYXNzTmFtZT0nbXktMicgLz5cclxuXHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRJdCB1c2VzIHV0aWxpdHkgY2xhc3NlcyBmb3IgdHlwb2dyYXBoeSBhbmQgc3BhY2luZyB0b1xyXG5cdFx0XHRcdFx0XHRzcGFjZSBjb250ZW50IG91dCB3aXRoaW4gdGhlIGxhcmdlciBjb250YWluZXIuXHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2xlYWQnPjwvcD5cclxuXHRcdFx0XHQ8L0p1bWJvdHJvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L3NlY3Rpb24+XHJcblx0KTtcclxuXHJcblx0Y29uc3QgY2Fyb3VzZWwgPSAoc2VjdGlvbikgPT4ge1xyXG5cdFx0Y29uc3QgZmlsdGVyZWRQaG90b3MgPSBwaG90b3MuZmlsdGVyKChwaG90bykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcGhvdG8uc2VjdGlvbkFzc29jaWVlID09PSBzZWN0aW9uO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gZmlsdGVyZWRQaG90b3MubWFwKChwaG90bywgaSkgPT4gKFxyXG5cdFx0XHQ8Q2Fyb3VzZWwuSXRlbSBrZXk9e2l9IHJlZj17cmVmfT5cclxuXHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT0nZC1ibG9jayB3LTEwMCdcclxuXHRcdFx0XHRcdHNyYz17cGhvdG8ubG9jYXRpb259XHJcblx0XHRcdFx0XHRhbHQ9e3Bob3RvLmFsdH1cclxuXHRcdFx0XHRcdHdpZHRoPXs1MDB9XHJcblx0XHRcdFx0XHRoZWlnaHQ9ezM3NX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxDYXJvdXNlbC5DYXB0aW9uPlxyXG5cdFx0XHRcdFx0PGg0PntwaG90by50aXRyZUNhcm91c2VsfTwvaDQ+XHJcblx0XHRcdFx0XHQ8cD57cGhvdG8udGV4dGVDYXJvdXNlbH08L3A+XHJcblx0XHRcdFx0PC9DYXJvdXNlbC5DYXB0aW9uPlxyXG5cdFx0XHQ8L0Nhcm91c2VsLkl0ZW0+XHJcblx0XHQpKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzZWN0aW9uRXh0ZXJpZXVyID0gKCkgPT4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5QYXJ0aWUgZXh0w6lyaWV1cjwvaDI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxyXG5cdFx0XHRcdFx0XHQ8Q2Fyb3VzZWw+e2Nhcm91c2VsKCdleHRlcmlldXInKX08L0Nhcm91c2VsPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPntnaXRlLnRleHRlRXh0ZXJpZXVyfTwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uSW50ZXJpZXVyID0gKCkgPT4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5QYXJ0aWUgaW50w6lyaWV1cjwvaDI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPntnaXRlLnRleHRlSW50ZXJpZXVyfTwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0PENhcm91c2VsPntjYXJvdXNlbCgnaW50ZXJpZXVyJyl9PC9DYXJvdXNlbD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uUGlzY2luZSA9ICgpID0+IChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+UGFydGllIHBpc2NpbmU8L2gyPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0PENhcm91c2VsPntjYXJvdXNlbCgncGlzY2luZScpfTwvQ2Fyb3VzZWw+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+e2dpdGUudGV4dGVQaXNjaW5lfTwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBjYXJvdXNlbFJldmlld3MgPSAoKSA9PlxyXG5cdFx0cmV2aWV3cy5tYXAoKHJldmlldywgaSkgPT4gKFxyXG5cdFx0XHQvLyA8aDQ+e3Jldmlldy5ub3RlfTwvaDQ+XHJcblx0XHRcdDxDYXJvdXNlbC5JdGVtIGtleT17aX0+XHJcblx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J2QtYmxvY2sgdy0xMDAnXHJcblx0XHRcdFx0XHRzcmM9eycvaW1hZ2VzL2dyZXkuanBnJ31cclxuXHRcdFx0XHRcdGFsdD17J3RleHRlJ31cclxuXHRcdFx0XHRcdGxheW91dD0ncmVzcG9uc2l2ZSdcclxuXHRcdFx0XHRcdHdpZHRoPXsnYXV0byd9XHJcblx0XHRcdFx0XHRoZWlnaHQ9ezM3NX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxDYXJvdXNlbC5DYXB0aW9uPlxyXG5cdFx0XHRcdFx0PHA+e3Jldmlld3MuY29tbWVudGFpcmV9PC9wPlxyXG5cdFx0XHRcdFx0PHA+e3Jldmlld3Mubm90ZX08L3A+XHJcblx0XHRcdFx0XHQ8aDQ+e3Jldmlldy5jbGllbnR9PC9oND5cclxuXHRcdFx0XHQ8L0Nhcm91c2VsLkNhcHRpb24+XHJcblx0XHRcdDwvQ2Fyb3VzZWwuSXRlbT5cclxuXHRcdCkpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uUmV2aWV3cyA9ICgpID0+IChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XHJcblx0XHRcdFx0XHRDZSBxdWUgbm9zIGNsaWVudHMgZGlzZW50IGRlIGNlIGfDrnRlXHJcblx0XHRcdFx0PC9oMj5cclxuXHJcblx0XHRcdFx0PENhcm91c2VsPntjYXJvdXNlbFJldmlld3MoKX08L0Nhcm91c2VsPlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uVmlkZW9Db250YWN0ID0gKCkgPT4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlRvdXIgZHUgZ8OudGUgZW4gdmlkw6lvPC9oMj5cclxuXHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nbXQtNSdcclxuXHRcdFx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17YWZmaWNoZVZpZGVvKCl9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcblx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5FY3JpdmV6LW5vdXMgITwvaDI+XHJcblx0XHRcdFx0XHRcdDxDb250YWN0Rm9ybSAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25DYWxlbmRyaWVyID0gKCkgPT4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciB0ZXh0LWNlbnRlcic+XHJcblx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5DYWxlbmRyaWVyIGRlcyBkaXNwb25pYmlsaXTDqXM8L2gyPlxyXG5cdFx0XHRcdDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2FmZmljaGVDYWxlbmRyaWVyKCl9IC8+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25NYXAgPSAoKSA9PiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHRleHQtY2VudGVyJz5cclxuXHRcdFx0PHNlY3Rpb24+XHJcblx0XHRcdFx0PGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxyXG5cdFx0XHRcdFx0SXRpbsOpcmFpcmUgY29uc2VpbGzDqSBkZXB1aXMgdm90cmUgcG9zaXRpb25cclxuXHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdDxwPkFmZmljaGUgbGEgbWFwIGljaTwvcD5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHtoZWFkKCl9XHJcblx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdFx0ey8qIDxoMj5JbmZvcyBkdSBnaXRlPC9oMj4gKi99XHJcblx0XHRcdFx0ey8qIHtKU09OLnN0cmluZ2lmeShnaXRlKX0gKi99XHJcblx0XHRcdFx0e2p1bWJvdHJvbigpfVxyXG5cdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdHtzZWN0aW9uRXh0ZXJpZXVyKCl9XHJcblx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0e3NlY3Rpb25JbnRlcmlldXIoKX1cclxuXHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHR7c2VjdGlvblBpc2NpbmUoKX1cclxuXHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHR7Y29uc29sZS5sb2cocmV2aWV3cyl9XHJcblx0XHRcdFx0e3NlY3Rpb25SZXZpZXdzKCl9XHJcblx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0e3NlY3Rpb25WaWRlb0NvbnRhY3QoKX1cclxuXHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHR7c2VjdGlvbkNhbGVuZHJpZXIoKX1cclxuXHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHR7c2VjdGlvbk1hcCgpfVxyXG5cdFx0XHQ8L0xheW91dD5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG5cdC8vbGlzdGVyIGxlcyBub21zIGRlIGdpdGVzXHJcblx0cmV0dXJuIHtcclxuXHRcdHBhdGhzOiBbXHJcblx0XHRcdHsgcGFyYW1zOiB7IHNsdWc6ICdtYW5vbGEnIH0gfSxcclxuXHRcdFx0eyBwYXJhbXM6IHsgc2x1ZzogJ2JyaW5jaGV0dGUnIH0gfSxcclxuXHRcdFx0eyBwYXJhbXM6IHsgc2x1ZzogJ2xhdWJlcm95ZScgfSB9LFxyXG5cdFx0XHR7IHBhcmFtczogeyBzbHVnOiAncGV0aXQtbmF5JyB9IH0sXHJcblx0XHRdLFxyXG5cdFx0ZmFsbGJhY2s6IHRydWUsXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuXHQvLyBjb25zb2xlLmxvZyhxdWVyeSk7XHJcblx0cmV0dXJuIGxpc3RHaXRlRGV0YWlscyhjb250ZXh0LnBhcmFtcy5zbHVnKS50aGVuKChnaXRlKSA9PiB7XHJcblx0XHRpZiAoZ2l0ZS5lcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhnaXRlLmVycm9yKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBsaXN0UGhvdG9zQnlOb20oZ2l0ZS5zbHVnKS50aGVuKChwaG90b3MpID0+IHtcclxuXHRcdFx0XHRpZiAocGhvdG9zLmVycm9yKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhwaG90b3MuZXJyb3IpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gbGlzdFJldmlld3NCeVNsdWcoZ2l0ZS5zbHVnKS50aGVuKChyZXZpZXdzKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXZpZXdzLmVycm9yKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmV2aWV3cy5lcnJvcik7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHsgcHJvcHM6IHsgZ2l0ZSwgcGhvdG9zLCByZXZpZXdzIH0gfTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2l0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==