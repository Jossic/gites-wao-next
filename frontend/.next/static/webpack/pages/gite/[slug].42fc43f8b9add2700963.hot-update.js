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
var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\gite\\[slug].js",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var Gite = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(_c = function _c(_ref, ref) {
  var gite = _ref.gite,
      photos = _ref.photos;

  var head = function head() {
    return __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 3
      }
    }, __jsx("title", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 4
      }
    }, _config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"], " | ", gite.nom, ' '), __jsx("meta", {
      name: "description",
      content: gite.mdesc,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 4
      }
    }), __jsx("link", {
      rel: "canonical",
      href: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"], "/gite/").concat(gite.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:title",
      content: "".concat(gite.nom, " | ").concat(_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:description",
      content: gite.mdesc,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:type",
      content: "website",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:url",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"], "/gite/").concat(gite.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:site_name",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:site_name",
      content: _config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:image",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/blog/photo/").concat(gite.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:image:secure_url",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/gite/photo/").concat(gite.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:image:type",
      content: "image/jpg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
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
  }; // const [activeIndex, setActiveIndex] = useState(0);
  // const [animating, setAnimating] = useState(false);
  // const next = () => {
  // 	if (animating) return;
  // 	const nextIndex =
  // 		activeIndex === photos.length - 1 ? 0 : activeIndex + 1;
  // 	setActiveIndex(nextIndex);
  // };
  // const previous = () => {
  // 	if (animating) return;
  // 	const nextIndex =
  // 		activeIndex === 0 ? photos.length - 1 : activeIndex - 1;
  // 	setActiveIndex(nextIndex);
  // };
  // const goToIndex = (newIndex) => {
  // 	if (animating) return;
  // 	setActiveIndex(newIndex);
  // };


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
    }, "Pr\xE9sentation du g\xEEte ", gite.nom), __jsx("p", {
      className: "lead",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 6
      }
    }, gite.presGiteSEO), __jsx("hr", {
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
    }, "It uses utility classes for typography and spacing to space content out within the larger container."), __jsx("p", {
      className: "lead",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 6
      }
    }))));
  };

  var carouselTest = function carouselTest() {
    return __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 3
      }
    }, __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 4
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 5
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"].Item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 6
      }
    }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: "d-block w-100",
      src: "https://picsum.photos/200/300",
      alt: "First slide",
      width: 500,
      height: 375,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 7
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"].Caption, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 7
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 8
      }
    }, "First slide label"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 8
      }
    }, "Nulla vitae elit libero, a pharetra augue mollis interdum."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"].Item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 6
      }
    }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: "d-block w-100",
      src: "https://picsum.photos/200/300",
      alt: "Third slide",
      width: 500,
      height: 375,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 7
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"].Caption, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 7
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 8
      }
    }, "Second slide label"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 8
      }
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"].Item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 6
      }
    }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: "d-block w-100",
      src: "https://picsum.photos/200/300",
      alt: "Third slide",
      width: 500,
      height: 375,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 7
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"].Caption, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 7
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 8
      }
    }, "Third slide label"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 8
      }
    }, "Praesent commodo cursus magna, vel scelerisque nisl consectetur."))))), __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 4
      }
    }, "texte"));
  };

  var carousel = function carousel() {
    photos.map(function (photo, i) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"].Item, {
        key: i,
        ref: ref,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 6
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
          lineNumber: 152,
          columnNumber: 7
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"].Caption, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 7
        }
      }, __jsx("h4", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 8
        }
      }, photo.titreCarousel), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 8
        }
      }, photo.texteCarousel))));
    });
  };

  var sectionExterieur = function sectionExterieur() {
    return __jsx("div", {
      className: "container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 4
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 5
      }
    }, "Partie ext\xE9rieur"), __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 6
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 7
      }
    }, photos.map(function (photo, i) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"].Item, {
        key: i,
        ref: ref,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 11
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
          lineNumber: 179,
          columnNumber: 12
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"].Caption, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 12
        }
      }, __jsx("h4", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 13
        }
      }, photo.titreCarousel), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 13
        }
      }, photo.texteCarousel))));
    }))), __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
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
        lineNumber: 203,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 4
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 5
      }
    }, "Partie int\xE9rieur"), __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 6
      }
    }, gite.texteInterieur), __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 6
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
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
        lineNumber: 217,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 4
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 5
      }
    }, "Partie piscine"), __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 6
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 7
      }
    }, carousel('piscine'))), __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 6
      }
    }, gite.textePiscine))));
  };

  var sectionReview = function sectionReview() {
    return __jsx("div", {
      className: "container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 4
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 5
      }
    }, "Ce que nos clients disent de ce g\xEEte"), __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 5
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 6
      }
    }, "Liste des reviews"))));
  };

  var sectionVideoContact = function sectionVideoContact() {
    return __jsx("div", {
      className: "container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 4
      }
    }, __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 6
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 7
      }
    }, "Tour du g\xEEte en vid\xE9o"), __jsx("div", {
      className: "mt-5",
      dangerouslySetInnerHTML: afficheVideo(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 7
      }
    })), __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 6
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 7
      }
    }, "Ecrivez-nous !"), __jsx(_components_ContactForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
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
        lineNumber: 264,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 4
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 5
      }
    }, "Calendrier des disponibilit\xE9s"), __jsx("div", {
      dangerouslySetInnerHTML: afficheCalendrier(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
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
        lineNumber: 273,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 4
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 5
      }
    }, "Itin\xE9raire conseill\xE9 depuis votre position"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 5
      }
    }, "Affiche la map ici")));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, head(), __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 4
    }
  }, jumbotron(), sectionExterieur(), carouselTest(), sectionInterieur(), sectionPiscine(), sectionReview(), sectionVideoContact(), sectionCalendrier(), sectionMap()));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2l0ZS9bc2x1Z10uanMiXSwibmFtZXMiOlsiR2l0ZSIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInJlZiIsImdpdGUiLCJwaG90b3MiLCJoZWFkIiwiQVBQX05BTUUiLCJub20iLCJtZGVzYyIsIkRPTUFJTiIsInNsdWciLCJBUEkiLCJhZmZpY2hlQ2FsZW5kcmllciIsIl9faHRtbCIsImNhbGVuZHJpZXJMaW5rIiwiYWZmaWNoZVZpZGVvIiwidmlkZW9MaW5rIiwianVtYm90cm9uIiwicHJlc0dpdGVTRU8iLCJjYXJvdXNlbFRlc3QiLCJjYXJvdXNlbCIsIm1hcCIsInBob3RvIiwiaSIsImxvY2F0aW9uIiwiYWx0IiwidGl0cmVDYXJvdXNlbCIsInRleHRlQ2Fyb3VzZWwiLCJzZWN0aW9uRXh0ZXJpZXVyIiwidGV4dGVFeHRlcmlldXIiLCJzZWN0aW9uSW50ZXJpZXVyIiwidGV4dGVJbnRlcmlldXIiLCJzZWN0aW9uUGlzY2luZSIsInRleHRlUGlzY2luZSIsInNlY3Rpb25SZXZpZXciLCJzZWN0aW9uVmlkZW9Db250YWN0Iiwic2VjdGlvbkNhbGVuZHJpZXIiLCJzZWN0aW9uTWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxnQkFBR0MsNENBQUssQ0FBQ0MsVUFBTixNQUFpQixrQkFBbUJDLEdBQW5CLEVBQTJCO0FBQUEsTUFBeEJDLElBQXdCLFFBQXhCQSxJQUF3QjtBQUFBLE1BQWxCQyxNQUFrQixRQUFsQkEsTUFBa0I7O0FBQ3hELE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsV0FDWixNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0VDLGdEQURGLFNBQ2VI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QyxpQkFBaUIsRUFWbkIsRUFXRUMsVUFBVSxFQVhaLENBRkQsQ0FERDtBQWtCQSxDQWxTWSxDQUFiO01BQU10QyxJOztBQWtVU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2l0ZS9bc2x1Z10uNDJmYzQzZjhiOWFkZDI3MDA5NjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0JztcclxuaW1wb3J0IHsgQVBJLCBET01BSU4sIEFQUF9OQU1FIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHsgbGlzdGVEZXNJbWFnZXMsIGxpc3RHaXRlRGV0YWlscyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IEp1bWJvdHJvbiB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRhY3RGb3JtJztcclxuXHJcbmNvbnN0IEdpdGUgPSBSZWFjdC5mb3J3YXJkUmVmKCh7IGdpdGUsIHBob3RvcyB9LCByZWYpID0+IHtcclxuXHRjb25zdCBoZWFkID0gKCkgPT4gKFxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdDx0aXRsZT5cclxuXHRcdFx0XHR7QVBQX05BTUV9IHwge2dpdGUubm9tfXsnICd9XHJcblx0XHRcdDwvdGl0bGU+XHJcblx0XHRcdDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PXtnaXRlLm1kZXNjfSAvPlxyXG5cdFx0XHQ8bGluayByZWw9J2Nhbm9uaWNhbCcgaHJlZj17YCR7RE9NQUlOfS9naXRlLyR7Z2l0ZS5zbHVnfWB9IC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzp0aXRsZScgY29udGVudD17YCR7Z2l0ZS5ub219IHwgJHtBUFBfTkFNRX1gfSAvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6ZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2dpdGUubWRlc2N9IC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzp0eXBlJyBjb250ZW50PSd3ZWJzaXRlJyAvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6dXJsJyBjb250ZW50PXtgJHtET01BSU59L2dpdGUvJHtnaXRlLnNsdWd9YH0gLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnNpdGVfbmFtZScgY29udGVudD17YCR7QVBQX05BTUV9YH0gLz5cclxuXHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzpzaXRlX25hbWUnIGNvbnRlbnQ9e0FQUF9OQU1FfSAvPlxyXG5cclxuXHRcdFx0PG1ldGFcclxuXHRcdFx0XHRwcm9wZXJ0eT0nb2c6aW1hZ2UnXHJcblx0XHRcdFx0Y29udGVudD17YCR7QVBJfS9ibG9nL3Bob3RvLyR7Z2l0ZS5zbHVnfWB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxtZXRhXHJcblx0XHRcdFx0cHJvcGVydHk9J29nOmltYWdlOnNlY3VyZV91cmwnXHJcblx0XHRcdFx0Y29udGVudD17YCR7QVBJfS9naXRlL3Bob3RvLyR7Z2l0ZS5zbHVnfWB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzppbWFnZTp0eXBlJyBjb250ZW50PSdpbWFnZS9qcGcnIC8+XHJcblx0XHRcdHsvKiA8bWV0YSBwcm9wZXJ0eT0nZmI6YXBwX2lkJyBjb250ZW50PXtgJHtGQl9BUFBfSUR9YH0gLz4gKi99XHJcblx0XHQ8L0hlYWQ+XHJcblx0KTtcclxuXHRjb25zdCBhZmZpY2hlQ2FsZW5kcmllciA9ICgpID0+IHtcclxuXHRcdHJldHVybiB7IF9faHRtbDogZ2l0ZS5jYWxlbmRyaWVyTGluayB9O1xyXG5cdH07XHJcblx0Y29uc3QgYWZmaWNoZVZpZGVvID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIHsgX19odG1sOiBnaXRlLnZpZGVvTGluayB9O1xyXG5cdH07XHJcblxyXG5cdC8vIGNvbnN0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcblx0Ly8gY29uc3QgW2FuaW1hdGluZywgc2V0QW5pbWF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Ly8gY29uc3QgbmV4dCA9ICgpID0+IHtcclxuXHQvLyBcdGlmIChhbmltYXRpbmcpIHJldHVybjtcclxuXHQvLyBcdGNvbnN0IG5leHRJbmRleCA9XHJcblx0Ly8gXHRcdGFjdGl2ZUluZGV4ID09PSBwaG90b3MubGVuZ3RoIC0gMSA/IDAgOiBhY3RpdmVJbmRleCArIDE7XHJcblx0Ly8gXHRzZXRBY3RpdmVJbmRleChuZXh0SW5kZXgpO1xyXG5cdC8vIH07XHJcblxyXG5cdC8vIGNvbnN0IHByZXZpb3VzID0gKCkgPT4ge1xyXG5cdC8vIFx0aWYgKGFuaW1hdGluZykgcmV0dXJuO1xyXG5cdC8vIFx0Y29uc3QgbmV4dEluZGV4ID1cclxuXHQvLyBcdFx0YWN0aXZlSW5kZXggPT09IDAgPyBwaG90b3MubGVuZ3RoIC0gMSA6IGFjdGl2ZUluZGV4IC0gMTtcclxuXHQvLyBcdHNldEFjdGl2ZUluZGV4KG5leHRJbmRleCk7XHJcblx0Ly8gfTtcclxuXHJcblx0Ly8gY29uc3QgZ29Ub0luZGV4ID0gKG5ld0luZGV4KSA9PiB7XHJcblx0Ly8gXHRpZiAoYW5pbWF0aW5nKSByZXR1cm47XHJcblx0Ly8gXHRzZXRBY3RpdmVJbmRleChuZXdJbmRleCk7XHJcblx0Ly8gfTtcclxuXHJcblx0Y29uc3QganVtYm90cm9uID0gKCkgPT4gKFxyXG5cdFx0PHNlY3Rpb24+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHRcdDxKdW1ib3Ryb24+XHJcblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSdkaXNwbGF5LTMnPlxyXG5cdFx0XHRcdFx0XHRQcsOpc2VudGF0aW9uIGR1IGfDrnRlIHtnaXRlLm5vbX1cclxuXHRcdFx0XHRcdDwvaDE+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2xlYWQnPntnaXRlLnByZXNHaXRlU0VPfTwvcD5cclxuXHRcdFx0XHRcdDxociBjbGFzc05hbWU9J215LTInIC8+XHJcblx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0SXQgdXNlcyB1dGlsaXR5IGNsYXNzZXMgZm9yIHR5cG9ncmFwaHkgYW5kIHNwYWNpbmcgdG9cclxuXHRcdFx0XHRcdFx0c3BhY2UgY29udGVudCBvdXQgd2l0aGluIHRoZSBsYXJnZXIgY29udGFpbmVyLlxyXG5cdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdsZWFkJz48L3A+XHJcblx0XHRcdFx0PC9KdW1ib3Ryb24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9zZWN0aW9uPlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IGNhcm91c2VsVGVzdCA9ICgpID0+IChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxyXG5cdFx0XHRcdDxDYXJvdXNlbD5cclxuXHRcdFx0XHRcdDxDYXJvdXNlbC5JdGVtPlxyXG5cdFx0XHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2QtYmxvY2sgdy0xMDAnXHJcblx0XHRcdFx0XHRcdFx0c3JjPSdodHRwczovL3BpY3N1bS5waG90b3MvMjAwLzMwMCdcclxuXHRcdFx0XHRcdFx0XHRhbHQ9J0ZpcnN0IHNsaWRlJ1xyXG5cdFx0XHRcdFx0XHRcdHdpZHRoPXs1MDB9XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0PXszNzV9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxDYXJvdXNlbC5DYXB0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdDxoMz5GaXJzdCBzbGlkZSBsYWJlbDwvaDM+XHJcblx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHROdWxsYSB2aXRhZSBlbGl0IGxpYmVybywgYSBwaGFyZXRyYSBhdWd1ZSBtb2xsaXNcclxuXHRcdFx0XHRcdFx0XHRcdGludGVyZHVtLlxyXG5cdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0PC9DYXJvdXNlbC5DYXB0aW9uPlxyXG5cdFx0XHRcdFx0PC9DYXJvdXNlbC5JdGVtPlxyXG5cdFx0XHRcdFx0PENhcm91c2VsLkl0ZW0+XHJcblx0XHRcdFx0XHRcdDxJbWFnZVxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZC1ibG9jayB3LTEwMCdcclxuXHRcdFx0XHRcdFx0XHRzcmM9J2h0dHBzOi8vcGljc3VtLnBob3Rvcy8yMDAvMzAwJ1xyXG5cdFx0XHRcdFx0XHRcdGFsdD0nVGhpcmQgc2xpZGUnXHJcblx0XHRcdFx0XHRcdFx0d2lkdGg9ezUwMH1cclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ9ezM3NX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0XHRcdDxDYXJvdXNlbC5DYXB0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdDxoMz5TZWNvbmQgc2xpZGUgbGFiZWw8L2gzPlxyXG5cdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyXHJcblx0XHRcdFx0XHRcdFx0XHRhZGlwaXNjaW5nIGVsaXQuXHJcblx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHQ8L0Nhcm91c2VsLkNhcHRpb24+XHJcblx0XHRcdFx0XHQ8L0Nhcm91c2VsLkl0ZW0+XHJcblx0XHRcdFx0XHQ8Q2Fyb3VzZWwuSXRlbT5cclxuXHRcdFx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdkLWJsb2NrIHctMTAwJ1xyXG5cdFx0XHRcdFx0XHRcdHNyYz0naHR0cHM6Ly9waWNzdW0ucGhvdG9zLzIwMC8zMDAnXHJcblx0XHRcdFx0XHRcdFx0YWx0PSdUaGlyZCBzbGlkZSdcclxuXHRcdFx0XHRcdFx0XHR3aWR0aD17NTAwfVxyXG5cdFx0XHRcdFx0XHRcdGhlaWdodD17Mzc1fVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHRcdFx0PENhcm91c2VsLkNhcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0PGgzPlRoaXJkIHNsaWRlIGxhYmVsPC9oMz5cclxuXHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFByYWVzZW50IGNvbW1vZG8gY3Vyc3VzIG1hZ25hLCB2ZWwgc2NlbGVyaXNxdWVcclxuXHRcdFx0XHRcdFx0XHRcdG5pc2wgY29uc2VjdGV0dXIuXHJcblx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHQ8L0Nhcm91c2VsLkNhcHRpb24+XHJcblx0XHRcdFx0XHQ8L0Nhcm91c2VsLkl0ZW0+XHJcblx0XHRcdFx0PC9DYXJvdXNlbD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+dGV4dGU8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IGNhcm91c2VsID0gKCkgPT4ge1xyXG5cdFx0cGhvdG9zLm1hcCgocGhvdG8sIGkpID0+IHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0PENhcm91c2VsLkl0ZW0ga2V5PXtpfSByZWY9e3JlZn0+XHJcblx0XHRcdFx0XHRcdDxJbWFnZVxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZC1ibG9jayB3LTEwMCdcclxuXHRcdFx0XHRcdFx0XHRzcmM9e3Bob3RvLmxvY2F0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdGFsdD17cGhvdG8uYWx0fVxyXG5cdFx0XHRcdFx0XHRcdHdpZHRoPXs1MDB9XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0PXszNzV9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxDYXJvdXNlbC5DYXB0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdDxoND57cGhvdG8udGl0cmVDYXJvdXNlbH08L2g0PlxyXG5cdFx0XHRcdFx0XHRcdDxwPntwaG90by50ZXh0ZUNhcm91c2VsfTwvcD5cclxuXHRcdFx0XHRcdFx0PC9DYXJvdXNlbC5DYXB0aW9uPlxyXG5cdFx0XHRcdFx0PC9DYXJvdXNlbC5JdGVtPlxyXG5cdFx0XHRcdDwvPlxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHRjb25zdCBzZWN0aW9uRXh0ZXJpZXVyID0gKCkgPT4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5QYXJ0aWUgZXh0w6lyaWV1cjwvaDI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxyXG5cdFx0XHRcdFx0XHQ8Q2Fyb3VzZWw+XHJcblx0XHRcdFx0XHRcdFx0e3Bob3Rvcy5tYXAoKHBob3RvLCBpKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxDYXJvdXNlbC5JdGVtIGtleT17aX0gcmVmPXtyZWZ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZC1ibG9jayB3LTEwMCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtwaG90by5sb2NhdGlvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PXtwaG90by5hbHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPXs1MDB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodD17Mzc1fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxDYXJvdXNlbC5DYXB0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDQ+e3Bob3RvLnRpdHJlQ2Fyb3VzZWx9PC9oND5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+e3Bob3RvLnRleHRlQ2Fyb3VzZWx9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9DYXJvdXNlbC5DYXB0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQ2Fyb3VzZWwuSXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0XHQ8L0Nhcm91c2VsPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPntnaXRlLnRleHRlRXh0ZXJpZXVyfTwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uSW50ZXJpZXVyID0gKCkgPT4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5QYXJ0aWUgaW50w6lyaWV1cjwvaDI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPntnaXRlLnRleHRlSW50ZXJpZXVyfTwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0PENhcm91c2VsPntjYXJvdXNlbCgnaW50ZXJpZXVyJyl9PC9DYXJvdXNlbD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uUGlzY2luZSA9ICgpID0+IChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+UGFydGllIHBpc2NpbmU8L2gyPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0PENhcm91c2VsPntjYXJvdXNlbCgncGlzY2luZScpfTwvQ2Fyb3VzZWw+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+e2dpdGUudGV4dGVQaXNjaW5lfTwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uUmV2aWV3ID0gKCkgPT4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cclxuXHRcdFx0XHRcdENlIHF1ZSBub3MgY2xpZW50cyBkaXNlbnQgZGUgY2UgZ8OudGVcclxuXHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdFx0PHA+TGlzdGUgZGVzIHJldmlld3M8L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25WaWRlb0NvbnRhY3QgPSAoKSA9PiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0PHNlY3Rpb24+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxyXG5cdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+VG91ciBkdSBnw650ZSBlbiB2aWTDqW88L2gyPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdtdC01J1xyXG5cdFx0XHRcdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXthZmZpY2hlVmlkZW8oKX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPkVjcml2ZXotbm91cyAhPC9oMj5cclxuXHRcdFx0XHRcdFx0PENvbnRhY3RGb3JtIC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvbkNhbGVuZHJpZXIgPSAoKSA9PiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHRleHQtY2VudGVyJz5cclxuXHRcdFx0PHNlY3Rpb24+XHJcblx0XHRcdFx0PGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPkNhbGVuZHJpZXIgZGVzIGRpc3BvbmliaWxpdMOpczwvaDI+XHJcblx0XHRcdFx0PGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17YWZmaWNoZUNhbGVuZHJpZXIoKX0gLz5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvbk1hcCA9ICgpID0+IChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgdGV4dC1jZW50ZXInPlxyXG5cdFx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XHJcblx0XHRcdFx0XHRJdGluw6lyYWlyZSBjb25zZWlsbMOpIGRlcHVpcyB2b3RyZSBwb3NpdGlvblxyXG5cdFx0XHRcdDwvaDI+XHJcblx0XHRcdFx0PHA+QWZmaWNoZSBsYSBtYXAgaWNpPC9wPlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e2hlYWQoKX1cclxuXHRcdFx0PExheW91dD5cclxuXHRcdFx0XHR7LyogPGgyPkluZm9zIGR1IGdpdGU8L2gyPiAqL31cclxuXHRcdFx0XHR7Lyoge0pTT04uc3RyaW5naWZ5KGdpdGUpfSAqL31cclxuXHRcdFx0XHR7anVtYm90cm9uKCl9XHJcblx0XHRcdFx0e3NlY3Rpb25FeHRlcmlldXIoKX1cclxuXHRcdFx0XHR7Y2Fyb3VzZWxUZXN0KCl9XHJcblx0XHRcdFx0e3NlY3Rpb25JbnRlcmlldXIoKX1cclxuXHRcdFx0XHR7c2VjdGlvblBpc2NpbmUoKX1cclxuXHRcdFx0XHR7c2VjdGlvblJldmlldygpfVxyXG5cdFx0XHRcdHtzZWN0aW9uVmlkZW9Db250YWN0KCl9XHJcblx0XHRcdFx0e3NlY3Rpb25DYWxlbmRyaWVyKCl9XHJcblx0XHRcdFx0e3NlY3Rpb25NYXAoKX1cclxuXHRcdFx0PC9MYXlvdXQ+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuXHQvL2xpc3RlciBsZXMgbm9tcyBkZSBnaXRlc1xyXG5cdHJldHVybiB7XHJcblx0XHRwYXRoczogW1xyXG5cdFx0XHR7IHBhcmFtczogeyBzbHVnOiAnbWFub2xhJyB9IH0sXHJcblx0XHRcdHsgcGFyYW1zOiB7IHNsdWc6ICdicmluY2hldHRlJyB9IH0sXHJcblx0XHRcdHsgcGFyYW1zOiB7IHNsdWc6ICdsYXViZXJveWUnIH0gfSxcclxuXHRcdFx0eyBwYXJhbXM6IHsgc2x1ZzogJ3BldGl0LW5heScgfSB9LFxyXG5cdFx0XSxcclxuXHRcdGZhbGxiYWNrOiB0cnVlLFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcblx0Ly8gY29uc29sZS5sb2cocXVlcnkpO1xyXG5cdHJldHVybiBsaXN0R2l0ZURldGFpbHMoY29udGV4dC5wYXJhbXMuc2x1ZykudGhlbigoZ2l0ZSkgPT4ge1xyXG5cdFx0aWYgKGdpdGUuZXJyb3IpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coZ2l0ZS5lcnJvcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gbGlzdGVEZXNJbWFnZXMoKS50aGVuKChwaG90b3MpID0+IHtcclxuXHRcdFx0XHRpZiAocGhvdG9zLmVycm9yKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhwaG90b3MuZXJyb3IpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4geyBwcm9wczogeyBnaXRlLCBwaG90b3MgfSB9O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdpdGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=