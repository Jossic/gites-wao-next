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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ContactForm */ "./components/ContactForm.js");
/* harmony import */ var _components_admin_Note__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/admin/Note */ "./components/admin/Note.js");
var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\gite\\[slug].js",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var Gite = function Gite(_ref) {
  var gite = _ref.gite,
      photos = _ref.photos,
      reviews = _ref.reviews;

  var head = function head() {
    return __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 3
      }
    }, __jsx("title", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 4
      }
    }, _config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"], " | ", gite.nom, ' '), __jsx("meta", {
      name: "description",
      content: gite.mdesc,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 4
      }
    }), __jsx("link", {
      rel: "canonical",
      href: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"], "/gite/").concat(gite.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:title",
      content: "".concat(gite.nom, " | ").concat(_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:description",
      content: gite.mdesc,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:type",
      content: "website",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:url",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"], "/gite/").concat(gite.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:site_name",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:site_name",
      content: _config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:image",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/blog/photo/").concat(gite.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:image:secure_url",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/gite/photo/").concat(gite.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:image:type",
      content: "image/jpg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
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
        lineNumber: 53,
        columnNumber: 3
      }
    }, __jsx("div", {
      className: "container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 4
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Jumbotron"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 5
      }
    }, __jsx("h1", {
      className: "display-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 6
      }
    }, "Pr\xE9sentation du g\xEEte ", gite.nom), __jsx("p", {
      className: "lead",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 6
      }
    }, gite.presGiteSEO), __jsx("hr", {
      className: "my-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 6
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 6
      }
    }, "It uses utility classes for typography and spacing to space content out within the larger container."), __jsx("p", {
      className: "lead",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 6
      }
    }))));
  };

  var carousel = function carousel(section) {
    var filteredPhotos = photos.filter(function (photo) {
      return photo.sectionAssociee === section;
    });
    return filteredPhotos.map(function (photo, i) {
      return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"].Item, {
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 4
        }
      }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: "d-block w-100",
        src: photo.location,
        alt: photo.alt,
        width: 500,
        height: 375,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 5
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"].Caption, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 5
        }
      }, __jsx("h4", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 6
        }
      }, photo.titreCarousel), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
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
        lineNumber: 93,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 4
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 5
      }
    }, "Partie ext\xE9rieur"), __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 6
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 7
      }
    }, carousel('exterieur'))), __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
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
        lineNumber: 107,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 4
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 5
      }
    }, "Partie int\xE9rieur"), __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 6
      }
    }, gite.texteInterieur), __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 6
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
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
        lineNumber: 121,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 4
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 5
      }
    }, "Partie piscine"), __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 6
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 7
      }
    }, carousel('piscine'))), __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 6
      }
    }, gite.textePiscine))));
  };

  var carouselReviews = function carouselReviews() {
    return reviews.map(function (review, i) {
      return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"].Item, {
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 4
        }
      }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: "d-block w-100",
        src: '/images/grey.jpg',
        alt: 'texte',
        width: 2000,
        height: 800,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 5
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"].Caption, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 5
        }
      }, __jsx("p", {
        style: {
          marginTop: '-250px'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 6
        }
      }, review.commentaire), __jsx("hr", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 6
        }
      }), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 6
        }
      }, __jsx(_components_admin_Note__WEBPACK_IMPORTED_MODULE_8__["default"], {
        value: review.note,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 7
        }
      })), __jsx("h4", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 6
        }
      }, review.client)));
    });
  };

  var sectionReviews = function sectionReviews() {
    return __jsx("div", {
      className: "container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 4
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 5
      }
    }, "Ce que nos clients disent de ce g\xEEte"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
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
        lineNumber: 168,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 4
      }
    }, __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 6
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 7
      }
    }, "Tour du g\xEEte en vid\xE9o"), __jsx("div", {
      className: "mt-5",
      dangerouslySetInnerHTML: afficheVideo(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 7
      }
    })), __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 6
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 7
      }
    }, "Ecrivez-nous !"), __jsx(_components_ContactForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
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
        lineNumber: 188,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 4
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 5
      }
    }, "Calendrier des disponibilit\xE9s"), __jsx("div", {
      dangerouslySetInnerHTML: afficheCalendrier(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
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
        lineNumber: 197,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 4
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 5
      }
    }, "Itin\xE9raire conseill\xE9 depuis votre position"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 5
      }
    }, "Affiche la map ici")));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, head(), __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 4
    }
  }, jumbotron(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 5
    }
  }), sectionExterieur(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 5
    }
  }), sectionInterieur(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 5
    }
  }), sectionPiscine(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 5
    }
  }), sectionReviews(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 5
    }
  }), sectionVideoContact(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 5
    }
  }), sectionCalendrier(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 5
    }
  }), sectionMap()));
};

_c = Gite;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Gite);

var _c;

$RefreshReg$(_c, "Gite");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2l0ZS9bc2x1Z10uanMiXSwibmFtZXMiOlsiR2l0ZSIsImdpdGUiLCJwaG90b3MiLCJyZXZpZXdzIiwiaGVhZCIsIkFQUF9OQU1FIiwibm9tIiwibWRlc2MiLCJET01BSU4iLCJzbHVnIiwiQVBJIiwiYWZmaWNoZUNhbGVuZHJpZXIiLCJfX2h0bWwiLCJjYWxlbmRyaWVyTGluayIsImFmZmljaGVWaWRlbyIsInZpZGVvTGluayIsImp1bWJvdHJvbiIsInByZXNHaXRlU0VPIiwiY2Fyb3VzZWwiLCJzZWN0aW9uIiwiZmlsdGVyZWRQaG90b3MiLCJmaWx0ZXIiLCJwaG90byIsInNlY3Rpb25Bc3NvY2llZSIsIm1hcCIsImkiLCJsb2NhdGlvbiIsImFsdCIsInRpdHJlQ2Fyb3VzZWwiLCJ0ZXh0ZUNhcm91c2VsIiwic2VjdGlvbkV4dGVyaWV1ciIsInRleHRlRXh0ZXJpZXVyIiwic2VjdGlvbkludGVyaWV1ciIsInRleHRlSW50ZXJpZXVyIiwic2VjdGlvblBpc2NpbmUiLCJ0ZXh0ZVBpc2NpbmUiLCJjYXJvdXNlbFJldmlld3MiLCJyZXZpZXciLCJtYXJnaW5Ub3AiLCJjb21tZW50YWlyZSIsIm5vdGUiLCJjbGllbnQiLCJzZWN0aW9uUmV2aWV3cyIsInNlY3Rpb25WaWRlb0NvbnRhY3QiLCJzZWN0aW9uQ2FsZW5kcmllciIsInNlY3Rpb25NYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBK0I7QUFBQSxNQUE1QkMsSUFBNEIsUUFBNUJBLElBQTRCO0FBQUEsTUFBdEJDLE1BQXNCLFFBQXRCQSxNQUFzQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFDM0MsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxXQUNaLE1BQUMs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aUJBQWlCLEVBaEJuQixFQWlCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJELEVBa0JFQyxVQUFVLEVBbEJaLENBRkQsQ0FERDtBQXlCQSxDQXZORDs7S0FBTTdDLEk7O0FBNlBTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9naXRlL1tzbHVnXS5kMDc1NWJhMWVmOWYyMGUwNmVmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQnO1xyXG5pbXBvcnQgeyBBUEksIERPTUFJTiwgQVBQX05BTUUgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQge1xyXG5cdGxpc3RHaXRlRGV0YWlscyxcclxuXHRsaXN0R2l0ZXNOb21zLFxyXG5cdGxpc3RQaG90b3NCeU5vbSxcclxufSBmcm9tICcuLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBKdW1ib3Ryb24gfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250YWN0Rm9ybSc7XHJcbmltcG9ydCB7IGxpc3RSZXZpZXdzQnlTbHVnIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9yZXZpZXdBY3Rpb25zJztcclxuaW1wb3J0IE5vdGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hZG1pbi9Ob3RlJztcclxuXHJcbmNvbnN0IEdpdGUgPSAoeyBnaXRlLCBwaG90b3MsIHJldmlld3MgfSkgPT4ge1xyXG5cdGNvbnN0IGhlYWQgPSAoKSA9PiAoXHJcblx0XHQ8SGVhZD5cclxuXHRcdFx0PHRpdGxlPlxyXG5cdFx0XHRcdHtBUFBfTkFNRX0gfCB7Z2l0ZS5ub219eycgJ31cclxuXHRcdFx0PC90aXRsZT5cclxuXHRcdFx0PG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2dpdGUubWRlc2N9IC8+XHJcblx0XHRcdDxsaW5rIHJlbD0nY2Fub25pY2FsJyBocmVmPXtgJHtET01BSU59L2dpdGUvJHtnaXRlLnNsdWd9YH0gLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnRpdGxlJyBjb250ZW50PXtgJHtnaXRlLm5vbX0gfCAke0FQUF9OQU1FfWB9IC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzpkZXNjcmlwdGlvbicgY29udGVudD17Z2l0ZS5tZGVzY30gLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnR5cGUnIGNvbnRlbnQ9J3dlYnNpdGUnIC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzp1cmwnIGNvbnRlbnQ9e2Ake0RPTUFJTn0vZ2l0ZS8ke2dpdGUuc2x1Z31gfSAvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6c2l0ZV9uYW1lJyBjb250ZW50PXtgJHtBUFBfTkFNRX1gfSAvPlxyXG5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnNpdGVfbmFtZScgY29udGVudD17QVBQX05BTUV9IC8+XHJcblxyXG5cdFx0XHQ8bWV0YVxyXG5cdFx0XHRcdHByb3BlcnR5PSdvZzppbWFnZSdcclxuXHRcdFx0XHRjb250ZW50PXtgJHtBUEl9L2Jsb2cvcGhvdG8vJHtnaXRlLnNsdWd9YH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PG1ldGFcclxuXHRcdFx0XHRwcm9wZXJ0eT0nb2c6aW1hZ2U6c2VjdXJlX3VybCdcclxuXHRcdFx0XHRjb250ZW50PXtgJHtBUEl9L2dpdGUvcGhvdG8vJHtnaXRlLnNsdWd9YH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOmltYWdlOnR5cGUnIGNvbnRlbnQ9J2ltYWdlL2pwZycgLz5cclxuXHRcdFx0ey8qIDxtZXRhIHByb3BlcnR5PSdmYjphcHBfaWQnIGNvbnRlbnQ9e2Ake0ZCX0FQUF9JRH1gfSAvPiAqL31cclxuXHRcdDwvSGVhZD5cclxuXHQpO1xyXG5cdGNvbnN0IGFmZmljaGVDYWxlbmRyaWVyID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIHsgX19odG1sOiBnaXRlLmNhbGVuZHJpZXJMaW5rIH07XHJcblx0fTtcclxuXHRjb25zdCBhZmZpY2hlVmlkZW8gPSAoKSA9PiB7XHJcblx0XHRyZXR1cm4geyBfX2h0bWw6IGdpdGUudmlkZW9MaW5rIH07XHJcblx0fTtcclxuXHJcblx0Y29uc3QganVtYm90cm9uID0gKCkgPT4gKFxyXG5cdFx0PHNlY3Rpb24+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHRcdDxKdW1ib3Ryb24+XHJcblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSdkaXNwbGF5LTMnPlxyXG5cdFx0XHRcdFx0XHRQcsOpc2VudGF0aW9uIGR1IGfDrnRlIHtnaXRlLm5vbX1cclxuXHRcdFx0XHRcdDwvaDE+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2xlYWQnPntnaXRlLnByZXNHaXRlU0VPfTwvcD5cclxuXHRcdFx0XHRcdDxociBjbGFzc05hbWU9J215LTInIC8+XHJcblx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0SXQgdXNlcyB1dGlsaXR5IGNsYXNzZXMgZm9yIHR5cG9ncmFwaHkgYW5kIHNwYWNpbmcgdG9cclxuXHRcdFx0XHRcdFx0c3BhY2UgY29udGVudCBvdXQgd2l0aGluIHRoZSBsYXJnZXIgY29udGFpbmVyLlxyXG5cdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdsZWFkJz48L3A+XHJcblx0XHRcdFx0PC9KdW1ib3Ryb24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9zZWN0aW9uPlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IGNhcm91c2VsID0gKHNlY3Rpb24pID0+IHtcclxuXHRcdGNvbnN0IGZpbHRlcmVkUGhvdG9zID0gcGhvdG9zLmZpbHRlcigocGhvdG8pID0+IHtcclxuXHRcdFx0cmV0dXJuIHBob3RvLnNlY3Rpb25Bc3NvY2llZSA9PT0gc2VjdGlvbjtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGZpbHRlcmVkUGhvdG9zLm1hcCgocGhvdG8sIGkpID0+IChcclxuXHRcdFx0PENhcm91c2VsLkl0ZW0ga2V5PXtpfT5cclxuXHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT0nZC1ibG9jayB3LTEwMCdcclxuXHRcdFx0XHRcdHNyYz17cGhvdG8ubG9jYXRpb259XHJcblx0XHRcdFx0XHRhbHQ9e3Bob3RvLmFsdH1cclxuXHRcdFx0XHRcdHdpZHRoPXs1MDB9XHJcblx0XHRcdFx0XHRoZWlnaHQ9ezM3NX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxDYXJvdXNlbC5DYXB0aW9uPlxyXG5cdFx0XHRcdFx0PGg0PntwaG90by50aXRyZUNhcm91c2VsfTwvaDQ+XHJcblx0XHRcdFx0XHQ8cD57cGhvdG8udGV4dGVDYXJvdXNlbH08L3A+XHJcblx0XHRcdFx0PC9DYXJvdXNlbC5DYXB0aW9uPlxyXG5cdFx0XHQ8L0Nhcm91c2VsLkl0ZW0+XHJcblx0XHQpKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzZWN0aW9uRXh0ZXJpZXVyID0gKCkgPT4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5QYXJ0aWUgZXh0w6lyaWV1cjwvaDI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxyXG5cdFx0XHRcdFx0XHQ8Q2Fyb3VzZWw+e2Nhcm91c2VsKCdleHRlcmlldXInKX08L0Nhcm91c2VsPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPntnaXRlLnRleHRlRXh0ZXJpZXVyfTwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uSW50ZXJpZXVyID0gKCkgPT4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5QYXJ0aWUgaW50w6lyaWV1cjwvaDI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPntnaXRlLnRleHRlSW50ZXJpZXVyfTwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0PENhcm91c2VsPntjYXJvdXNlbCgnaW50ZXJpZXVyJyl9PC9DYXJvdXNlbD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uUGlzY2luZSA9ICgpID0+IChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+UGFydGllIHBpc2NpbmU8L2gyPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0PENhcm91c2VsPntjYXJvdXNlbCgncGlzY2luZScpfTwvQ2Fyb3VzZWw+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+e2dpdGUudGV4dGVQaXNjaW5lfTwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBjYXJvdXNlbFJldmlld3MgPSAoKSA9PlxyXG5cdFx0cmV2aWV3cy5tYXAoKHJldmlldywgaSkgPT4gKFxyXG5cdFx0XHQ8Q2Fyb3VzZWwuSXRlbSBrZXk9e2l9PlxyXG5cdFx0XHRcdDxJbWFnZVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdkLWJsb2NrIHctMTAwJ1xyXG5cdFx0XHRcdFx0c3JjPXsnL2ltYWdlcy9ncmV5LmpwZyd9XHJcblx0XHRcdFx0XHRhbHQ9eyd0ZXh0ZSd9XHJcblx0XHRcdFx0XHR3aWR0aD17MjAwMH1cclxuXHRcdFx0XHRcdGhlaWdodD17ODAwfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PENhcm91c2VsLkNhcHRpb24+XHJcblx0XHRcdFx0XHQ8cCBzdHlsZT17eyBtYXJnaW5Ub3A6ICctMjUwcHgnIH19PntyZXZpZXcuY29tbWVudGFpcmV9PC9wPlxyXG5cdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0PE5vdGUgdmFsdWU9e3Jldmlldy5ub3RlfSAvPlxyXG5cdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0PGg0PntyZXZpZXcuY2xpZW50fTwvaDQ+XHJcblx0XHRcdFx0PC9DYXJvdXNlbC5DYXB0aW9uPlxyXG5cdFx0XHQ8L0Nhcm91c2VsLkl0ZW0+XHJcblx0XHQpKTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvblJldmlld3MgPSAoKSA9PiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0PHNlY3Rpb24+XHJcblx0XHRcdFx0PGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxyXG5cdFx0XHRcdFx0Q2UgcXVlIG5vcyBjbGllbnRzIGRpc2VudCBkZSBjZSBnw650ZVxyXG5cdFx0XHRcdDwvaDI+XHJcblxyXG5cdFx0XHRcdDxDYXJvdXNlbD57Y2Fyb3VzZWxSZXZpZXdzKCl9PC9DYXJvdXNlbD5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvblZpZGVvQ29udGFjdCA9ICgpID0+IChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcblx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5Ub3VyIGR1IGfDrnRlIGVuIHZpZMOpbzwvaDI+XHJcblx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J210LTUnXHJcblx0XHRcdFx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2FmZmljaGVWaWRlbygpfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxyXG5cdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+RWNyaXZlei1ub3VzICE8L2gyPlxyXG5cdFx0XHRcdFx0XHQ8Q29udGFjdEZvcm0gLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uQ2FsZW5kcmllciA9ICgpID0+IChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgdGV4dC1jZW50ZXInPlxyXG5cdFx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+Q2FsZW5kcmllciBkZXMgZGlzcG9uaWJpbGl0w6lzPC9oMj5cclxuXHRcdFx0XHQ8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXthZmZpY2hlQ2FsZW5kcmllcigpfSAvPlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uTWFwID0gKCkgPT4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciB0ZXh0LWNlbnRlcic+XHJcblx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cclxuXHRcdFx0XHRcdEl0aW7DqXJhaXJlIGNvbnNlaWxsw6kgZGVwdWlzIHZvdHJlIHBvc2l0aW9uXHJcblx0XHRcdFx0PC9oMj5cclxuXHRcdFx0XHQ8cD5BZmZpY2hlIGxhIG1hcCBpY2k8L3A+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7aGVhZCgpfVxyXG5cdFx0XHQ8TGF5b3V0PlxyXG5cdFx0XHRcdHsvKiA8aDI+SW5mb3MgZHUgZ2l0ZTwvaDI+ICovfVxyXG5cdFx0XHRcdHsvKiB7SlNPTi5zdHJpbmdpZnkoZ2l0ZSl9ICovfVxyXG5cdFx0XHRcdHtqdW1ib3Ryb24oKX1cclxuXHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHR7c2VjdGlvbkV4dGVyaWV1cigpfVxyXG5cdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdHtzZWN0aW9uSW50ZXJpZXVyKCl9XHJcblx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0e3NlY3Rpb25QaXNjaW5lKCl9XHJcblx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0ey8qIHtjb25zb2xlLmxvZyhyZXZpZXdzKX0gKi99XHJcblx0XHRcdFx0e3NlY3Rpb25SZXZpZXdzKCl9XHJcblx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0e3NlY3Rpb25WaWRlb0NvbnRhY3QoKX1cclxuXHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHR7c2VjdGlvbkNhbGVuZHJpZXIoKX1cclxuXHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHR7c2VjdGlvbk1hcCgpfVxyXG5cdFx0XHQ8L0xheW91dD5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcblx0Ly9saXN0ZXIgbGVzIG5vbXMgZGUgZ2l0ZXNcclxuXHRjb25zdCBnaXRlc05vbSA9IGF3YWl0IGxpc3RHaXRlc05vbXMoKTtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cGF0aHM6IGdpdGVzTm9tLm1hcCgobm9tKSA9PiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cGFyYW1zOiB7IGlkOiBub20uX2lkLCBzbHVnOiBub20uc2x1ZyB9LFxyXG5cdFx0XHR9O1xyXG5cdFx0fSksXHJcblx0XHRmYWxsYmFjazogZmFsc2UsXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuXHQvLyBjb25zb2xlLmxvZyhxdWVyeSk7XHJcblx0cmV0dXJuIGxpc3RHaXRlRGV0YWlscyhjb250ZXh0LnBhcmFtcy5zbHVnKS50aGVuKChnaXRlKSA9PiB7XHJcblx0XHRpZiAoZ2l0ZS5lcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhnaXRlLmVycm9yKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBsaXN0UGhvdG9zQnlOb20oZ2l0ZS5zbHVnKS50aGVuKChwaG90b3MpID0+IHtcclxuXHRcdFx0XHRpZiAocGhvdG9zLmVycm9yKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhwaG90b3MuZXJyb3IpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gbGlzdFJldmlld3NCeVNsdWcoZ2l0ZS5zbHVnKS50aGVuKChyZXZpZXdzKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXZpZXdzLmVycm9yKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmV2aWV3cy5lcnJvcik7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHsgcHJvcHM6IHsgZ2l0ZSwgcGhvdG9zLCByZXZpZXdzIH0gfTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2l0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==