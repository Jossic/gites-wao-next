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
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/swiper-react.esm.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ContactForm */ "./components/ContactForm.js");
/* harmony import */ var _components_admin_Note__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/admin/Note */ "./components/admin/Note.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\gite\\[slug].js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 // import Swiper core and required modules



swiper__WEBPACK_IMPORTED_MODULE_5__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_5__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_5__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_5__["Scrollbar"], swiper__WEBPACK_IMPORTED_MODULE_5__["A11y"], swiper__WEBPACK_IMPORTED_MODULE_5__["Controller"], swiper__WEBPACK_IMPORTED_MODULE_5__["Thumbs"]]);






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  };
});

var Gite = function Gite(_ref) {
  _s();

  var gite = _ref.gite,
      photos = _ref.photos,
      reviews = _ref.reviews;
  var classes = useStyles();

  var head = function head() {
    return __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 3
      }
    }, __jsx("title", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 4
      }
    }, _config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"], " | ", gite.nom, ' '), __jsx("meta", {
      name: "description",
      content: gite.mdesc,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 4
      }
    }), __jsx("link", {
      rel: "canonical",
      href: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"], "/gite/").concat(gite.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:title",
      content: "".concat(gite.nom, " | ").concat(_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:description",
      content: gite.mdesc,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:type",
      content: "website",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:url",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"], "/gite/").concat(gite.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:site_name",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:site_name",
      content: _config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:image",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/blog/photo/").concat(gite.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:image:secure_url",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/gite/photo/").concat(gite.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:image:type",
      content: "image/jpg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    open: false
  }),
      state = _useState[0],
      setState = _useState[1];

  var handleClick = function handleClick() {
    setState({
      open: true
    });
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      thumbsSwiperExt = _useState2[0],
      setThumbsSwiperExt = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      thumbsSwiperInt = _useState3[0],
      setThumbsSwiperInt = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      thumbsSwiperPis = _useState4[0],
      setThumbsSwiperPis = _useState4[1];

  var jumbotron = function jumbotron() {
    return __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 3
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Paper"], {
      className: classes.paper,
      style: {
        padding: '10px',
        marginTop: '10px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 4
      }
    }, __jsx("h1", {
      className: "display-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 5
      }
    }, "Pr\xE9sentation du g\xEEte ", gite.nom), __jsx("p", {
      className: "lead",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 5
      }
    }, gite.presGiteSEO), __jsx("hr", {
      className: "my-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 5
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 5
      }
    }, "It uses utility classes for typography and spacing to space content out within the larger container."), __jsx("p", {
      className: "lead",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 5
      }
    })));
  };

  var carousel = function carousel(section) {
    var filteredPhotos = photos.filter(function (photo) {
      return photo.sectionAssociee === section;
    });
    return filteredPhotos.map(function (photo, i) {
      return __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__["SwiperSlide"], {
        key: "slide-".concat(i),
        tag: "li",
        style: {
          listStyle: 'none'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 4
        }
      }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_6___default.a // className='d-block w-100'
      , {
        src: photo.location,
        alt: photo.alt,
        style: {
          listStyle: 'none'
        },
        srcSet: true,
        layout: "responsive",
        width: 500,
        height: 375,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 5
        }
      }));
    });
  };

  var sectionExterieur = function sectionExterieur() {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Paper"], {
      style: {
        padding: '10px',
        marginTop: '10px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 3
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 4
      }
    }, "Ext\xE9rieur"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      container: true,
      direction: "row",
      justify: "space-around",
      alignItems: "flex-start",
      spacing: 3,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 5
      }
    }, __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__["Swiper"], {
      id: "mainExt",
      spaceBetween: 0,
      slidesPerView: 1,
      thumbs: {
        swiper: thumbsSwiperExt
      },
      navigation: true,
      pagination: {
        clickable: true
      },
      scrollbar: {
        draggable: true
      },
      onSwiper: setThumbsSwiperExt,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      onSlideChange: function onSlideChange() {
        return console.log('slide change');
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 6
      }
    }, carousel('exterieur')), __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__["Swiper"], {
      id: "thumbsExt",
      spaceBetween: 5,
      slidesPerView: 5,
      onSwiper: setThumbsSwiperExt,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 6
      }
    }, carousel('exterieur'))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      variant: "body1",
      component: "p",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 6
      }
    }, gite.texteExterieur))));
  };

  var sectionInterieur = function sectionInterieur() {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Paper"], {
      style: {
        padding: '10px',
        marginTop: '10px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 3
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 4
      }
    }, "Int\xE9rieur"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      container: true,
      direction: "row",
      justify: "space-around",
      alignItems: "flex-start",
      spacing: 3,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 5
      }
    }, gite.texteInterieur), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 5
      }
    }, __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__["Swiper"], {
      id: "mainInt",
      spaceBetween: 0,
      slidesPerView: 1,
      thumbs: {
        swiper: thumbsSwiperInt
      },
      navigation: true,
      pagination: {
        clickable: true
      },
      scrollbar: {
        draggable: true
      },
      onSwiper: setThumbsSwiperInt,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      onReachEnd: function onReachEnd(swiper) {
        return swiper.activeIndex = 0;
      },
      onSlideChange: function onSlideChange() {
        return console.log('slide change');
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 6
      }
    }, carousel('interieur')), __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__["Swiper"], {
      id: "thumbsInt",
      spaceBetween: 5,
      slidesPerView: 5,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      onSwiper: setThumbsSwiperInt,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 6
      }
    }, carousel('interieur')))));
  };

  var sectionPiscine = function sectionPiscine() {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Paper"], {
      style: {
        padding: '10px',
        marginTop: '10px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 3
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 4
      }
    }, "Piscine"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      container: true,
      direction: "row",
      justify: "space-around",
      alignItems: "flex-start",
      spacing: 3,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 5
      }
    }, __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__["Swiper"], {
      id: "mainPis",
      spaceBetween: 0,
      slidesPerView: 1,
      thumbs: {
        swiper: thumbsSwiperPis
      },
      navigation: true,
      pagination: {
        clickable: true
      },
      scrollbar: {
        draggable: true
      },
      onSwiper: setThumbsSwiperPis,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      onSlideChange: function onSlideChange() {
        return console.log('slide change');
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 6
      }
    }, carousel('piscine')), __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__["Swiper"], {
      id: "thumbsPis",
      spaceBetween: 5,
      slidesPerView: 5,
      onSwiper: setThumbsSwiperPis,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 6
      }
    }, carousel('piscine'))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 5
      }
    }, gite.textePiscine)));
  };

  var carouselReviews = function carouselReviews() {
    return reviews.map(function (review, i) {
      return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Carousel"].Item, {
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 4
        }
      }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "d-block w-100",
        src: '/images/grey.jpg',
        alt: 'texte',
        width: 2000,
        height: 800,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 5
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Carousel"].Caption, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 5
        }
      }, __jsx("p", {
        style: {
          marginTop: '-250px'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 6
        }
      }, review.commentaire), __jsx("hr", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 6
        }
      }), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 6
        }
      }, __jsx(_components_admin_Note__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: review.note,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 7
        }
      })), __jsx("h4", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 6
        }
      }, review.client)));
    });
  };

  var sectionReviews = function sectionReviews() {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Paper"], {
      style: {
        padding: '10px',
        marginTop: '10px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 3
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 4
      }
    }, "Ce que nos clients disent de ce g\xEEte"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Carousel"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 4
      }
    }, carouselReviews()));
  };

  var sectionVideoContact = function sectionVideoContact() {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Paper"], {
      style: {
        padding: '10px',
        marginTop: '10px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 3
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      container: true,
      direction: "row",
      justify: "space-around",
      alignItems: "flex-start",
      spacing: 3,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 5
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 6
      }
    }, "Tour du g\xEEte en vid\xE9o"), __jsx("div", {
      className: "mt-5",
      dangerouslySetInnerHTML: afficheVideo(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 6
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 5
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 6
      }
    }, "Ecrivez-nous !"), __jsx(_components_ContactForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 6
      }
    }))));
  };

  var sectionCalendrier = function sectionCalendrier() {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Paper"], {
      style: {
        padding: '10px',
        marginTop: '10px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 3
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 4
      }
    }, "Calendrier des disponibilit\xE9s"), __jsx("div", {
      dangerouslySetInnerHTML: afficheCalendrier(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 4
      }
    }));
  };

  var sectionMap = function sectionMap() {
    return __jsx("div", {
      className: "container text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 4
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 5
      }
    }, "Itin\xE9raire conseill\xE9 depuis votre position"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 5
      }
    }, "Affiche la map ici")));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, head(), __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 5
    }
  }, jumbotron(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 6
    }
  }), sectionExterieur(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 6
    }
  }), sectionInterieur(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 6
    }
  }), sectionPiscine(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 6
    }
  }), sectionReviews(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 6
    }
  }), sectionVideoContact(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 6
    }
  }), sectionCalendrier(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 6
    }
  }), sectionMap())));
};

_s(Gite, "nT9l27AqkpsA9MKy1aWRuy3k8HI=", false, function () {
  return [useStyles];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2l0ZS9bc2x1Z10uanMiXSwibmFtZXMiOlsiU3dpcGVyQ29yZSIsInVzZSIsIk5hdmlnYXRpb24iLCJQYWdpbmF0aW9uIiwiU2Nyb2xsYmFyIiwiQTExeSIsIkNvbnRyb2xsZXIiLCJUaHVtYnMiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJwYXBlciIsInBhZGRpbmciLCJzcGFjaW5nIiwidGV4dEFsaWduIiwiY29sb3IiLCJwYWxldHRlIiwidGV4dCIsInNlY29uZGFyeSIsIkdpdGUiLCJnaXRlIiwicGhvdG9zIiwicmV2aWV3cyIsImNsYXNzZXMiLCJoZWFkIiwiQVBQX05BTUUiLCJub20iLCJtZGVzYyIsIkRPTUFJTiIsInNsdWciLCJBUEkiLCJhZmZpY2hlQ2FsZW5kcmllciIsIl9faHRtbCIsImNhbGVuZHJpZXJMaW5rIiwiYWZmaWNoZVZpZGVvIiwidmlkZW9MaW5rIiwidXNlU3RhdGUiLCJvcGVuIiwic3RhdGUiLCJzZXRTdGF0ZSIsImhhbmRsZUNsaWNrIiwidGh1bWJzU3dpcGVyRXh0Iiwic2V0VGh1bWJzU3dpcGVyRXh0IiwidGh1bWJzU3dpcGVySW50Iiwic2V0VGh1bWJzU3dpcGVySW50IiwidGh1bWJzU3dpcGVyUGlzIiwic2V0VGh1bWJzU3dpcGVyUGlzIiwianVtYm90cm9uIiwibWFyZ2luVG9wIiwicHJlc0dpdGVTRU8iLCJjYXJvdXNlbCIsInNlY3Rpb24iLCJmaWx0ZXJlZFBob3RvcyIsImZpbHRlciIsInBob3RvIiwic2VjdGlvbkFzc29jaWVlIiwibWFwIiwiaSIsImxpc3RTdHlsZSIsImxvY2F0aW9uIiwiYWx0Iiwic2VjdGlvbkV4dGVyaWV1ciIsInN3aXBlciIsImNsaWNrYWJsZSIsImRyYWdnYWJsZSIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0ZUV4dGVyaWV1ciIsInNlY3Rpb25JbnRlcmlldXIiLCJ0ZXh0ZUludGVyaWV1ciIsImFjdGl2ZUluZGV4Iiwic2VjdGlvblBpc2NpbmUiLCJ0ZXh0ZVBpc2NpbmUiLCJjYXJvdXNlbFJldmlld3MiLCJyZXZpZXciLCJjb21tZW50YWlyZSIsIm5vdGUiLCJjbGllbnQiLCJzZWN0aW9uUmV2aWV3cyIsInNlY3Rpb25WaWRlb0NvbnRhY3QiLCJzZWN0aW9uQ2FsZW5kcmllciIsInNlY3Rpb25NYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFFQTtBQVNBQSw4Q0FBVSxDQUFDQyxHQUFYLENBQWUsQ0FBQ0MsaURBQUQsRUFBYUMsaURBQWIsRUFBeUJDLGdEQUF6QixFQUFvQ0MsMkNBQXBDLEVBQTBDQyxpREFBMUMsRUFBc0RDLDZDQUF0RCxDQUFmO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUMsU0FBUyxHQUFHQyw0RUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3hDQyxRQUFJLEVBQUU7QUFDTEMsY0FBUSxFQUFFO0FBREwsS0FEa0M7QUFJeENDLFNBQUssRUFBRTtBQUNOQyxhQUFPLEVBQUVKLEtBQUssQ0FBQ0ssT0FBTixDQUFjLENBQWQsQ0FESDtBQUVOQyxlQUFTLEVBQUUsUUFGTDtBQUdOQyxXQUFLLEVBQUVQLEtBQUssQ0FBQ1EsT0FBTixDQUFjQyxJQUFkLENBQW1CQztBQUhwQjtBQUppQyxHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUFXQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUErQjtBQUFBOztBQUFBLE1BQTVCQyxJQUE0QixRQUE1QkEsSUFBNEI7QUFBQSxNQUF0QkMsTUFBc0IsUUFBdEJBLE1BQXNCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQzNDLE1BQU1DLE9BQU8sR0FBR2pCLFNBQVMsRUFBekI7O0FBQ0EsTUFBTWtCLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsV0FDWixNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FB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QUE7QUFBQSxJQWJELEVBY0VDLG1CQUFtQixFQWRyQixFQWVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmRCxFQWdCRUMsaUJBQWlCLEVBaEJuQixFQWlCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJELEVBa0JFQyxVQUFVLEVBbEJaLENBREQsQ0FGRCxDQUREO0FBMkJBLENBbFREOztHQUFNOUQsSTtVQUNXYixTOzs7S0FEWGEsSTs7QUF3VlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dpdGUvW3NsdWddLmZmM2FhMzE0MDVkNGNiNzczNmU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0JztcclxuaW1wb3J0IHsgQVBJLCBET01BSU4sIEFQUF9OQU1FIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuLy8gaW1wb3J0IFN3aXBlciBjb3JlIGFuZCByZXF1aXJlZCBtb2R1bGVzXHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xyXG5cclxuaW1wb3J0IFN3aXBlckNvcmUsIHtcclxuXHROYXZpZ2F0aW9uLFxyXG5cdFBhZ2luYXRpb24sXHJcblx0U2Nyb2xsYmFyLFxyXG5cdEExMXksXHJcblx0Q29udHJvbGxlcixcclxuXHRUaHVtYnMsXHJcbn0gZnJvbSAnc3dpcGVyJztcclxuXHJcblN3aXBlckNvcmUudXNlKFtOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uLCBTY3JvbGxiYXIsIEExMXksIENvbnRyb2xsZXIsIFRodW1ic10pO1xyXG5pbXBvcnQge1xyXG5cdGxpc3RHaXRlRGV0YWlscyxcclxuXHRsaXN0R2l0ZXNOb21zLFxyXG5cdGxpc3RQaG90b3NCeU5vbSxcclxufSBmcm9tICcuLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRhY3RGb3JtJztcclxuaW1wb3J0IHsgbGlzdFJldmlld3NCeVNsdWcgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3Jldmlld0FjdGlvbnMnO1xyXG5pbXBvcnQgTm90ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2FkbWluL05vdGUnO1xyXG5pbXBvcnQgeyBQYXBlciwgQ29udGFpbmVyLCBHcmlkLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdGZsZXhHcm93OiAxLFxyXG5cdH0sXHJcblx0cGFwZXI6IHtcclxuXHRcdHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG5cdFx0Y29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXHJcblx0fSxcclxufSkpO1xyXG5cclxuY29uc3QgR2l0ZSA9ICh7IGdpdGUsIHBob3RvcywgcmV2aWV3cyB9KSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IGhlYWQgPSAoKSA9PiAoXHJcblx0XHQ8SGVhZD5cclxuXHRcdFx0PHRpdGxlPlxyXG5cdFx0XHRcdHtBUFBfTkFNRX0gfCB7Z2l0ZS5ub219eycgJ31cclxuXHRcdFx0PC90aXRsZT5cclxuXHRcdFx0PG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2dpdGUubWRlc2N9IC8+XHJcblx0XHRcdDxsaW5rIHJlbD0nY2Fub25pY2FsJyBocmVmPXtgJHtET01BSU59L2dpdGUvJHtnaXRlLnNsdWd9YH0gLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnRpdGxlJyBjb250ZW50PXtgJHtnaXRlLm5vbX0gfCAke0FQUF9OQU1FfWB9IC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzpkZXNjcmlwdGlvbicgY29udGVudD17Z2l0ZS5tZGVzY30gLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnR5cGUnIGNvbnRlbnQ9J3dlYnNpdGUnIC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzp1cmwnIGNvbnRlbnQ9e2Ake0RPTUFJTn0vZ2l0ZS8ke2dpdGUuc2x1Z31gfSAvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6c2l0ZV9uYW1lJyBjb250ZW50PXtgJHtBUFBfTkFNRX1gfSAvPlxyXG5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnNpdGVfbmFtZScgY29udGVudD17QVBQX05BTUV9IC8+XHJcblxyXG5cdFx0XHQ8bWV0YVxyXG5cdFx0XHRcdHByb3BlcnR5PSdvZzppbWFnZSdcclxuXHRcdFx0XHRjb250ZW50PXtgJHtBUEl9L2Jsb2cvcGhvdG8vJHtnaXRlLnNsdWd9YH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PG1ldGFcclxuXHRcdFx0XHRwcm9wZXJ0eT0nb2c6aW1hZ2U6c2VjdXJlX3VybCdcclxuXHRcdFx0XHRjb250ZW50PXtgJHtBUEl9L2dpdGUvcGhvdG8vJHtnaXRlLnNsdWd9YH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOmltYWdlOnR5cGUnIGNvbnRlbnQ9J2ltYWdlL2pwZycgLz5cclxuXHRcdFx0ey8qIDxtZXRhIHByb3BlcnR5PSdmYjphcHBfaWQnIGNvbnRlbnQ9e2Ake0ZCX0FQUF9JRH1gfSAvPiAqL31cclxuXHRcdDwvSGVhZD5cclxuXHQpO1xyXG5cdGNvbnN0IGFmZmljaGVDYWxlbmRyaWVyID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIHsgX19odG1sOiBnaXRlLmNhbGVuZHJpZXJMaW5rIH07XHJcblx0fTtcclxuXHRjb25zdCBhZmZpY2hlVmlkZW8gPSAoKSA9PiB7XHJcblx0XHRyZXR1cm4geyBfX2h0bWw6IGdpdGUudmlkZW9MaW5rIH07XHJcblx0fTtcclxuXHJcblx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG5cdFx0c2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IFt0aHVtYnNTd2lwZXJFeHQsIHNldFRodW1ic1N3aXBlckV4dF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHRjb25zdCBbdGh1bWJzU3dpcGVySW50LCBzZXRUaHVtYnNTd2lwZXJJbnRdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW3RodW1ic1N3aXBlclBpcywgc2V0VGh1bWJzU3dpcGVyUGlzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuXHRjb25zdCBqdW1ib3Ryb24gPSAoKSA9PiAoXHJcblx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0PFBhcGVyXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfVxyXG5cdFx0XHRcdHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcblx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nZGlzcGxheS0zJz5QcsOpc2VudGF0aW9uIGR1IGfDrnRlIHtnaXRlLm5vbX08L2gxPlxyXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT0nbGVhZCc+e2dpdGUucHJlc0dpdGVTRU99PC9wPlxyXG5cdFx0XHRcdDxociBjbGFzc05hbWU9J215LTInIC8+XHJcblx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRJdCB1c2VzIHV0aWxpdHkgY2xhc3NlcyBmb3IgdHlwb2dyYXBoeSBhbmQgc3BhY2luZyB0byBzcGFjZVxyXG5cdFx0XHRcdFx0Y29udGVudCBvdXQgd2l0aGluIHRoZSBsYXJnZXIgY29udGFpbmVyLlxyXG5cdFx0XHRcdDwvcD5cclxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9J2xlYWQnPjwvcD5cclxuXHRcdFx0PC9QYXBlcj5cclxuXHRcdDwvc2VjdGlvbj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBjYXJvdXNlbCA9IChzZWN0aW9uKSA9PiB7XHJcblx0XHRjb25zdCBmaWx0ZXJlZFBob3RvcyA9IHBob3Rvcy5maWx0ZXIoKHBob3RvKSA9PiB7XHJcblx0XHRcdHJldHVybiBwaG90by5zZWN0aW9uQXNzb2NpZWUgPT09IHNlY3Rpb247XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBmaWx0ZXJlZFBob3Rvcy5tYXAoKHBob3RvLCBpKSA9PiAoXHJcblx0XHRcdDxTd2lwZXJTbGlkZVxyXG5cdFx0XHRcdGtleT17YHNsaWRlLSR7aX1gfVxyXG5cdFx0XHRcdHRhZz0nbGknXHJcblx0XHRcdFx0c3R5bGU9e3sgbGlzdFN0eWxlOiAnbm9uZScgfX0+XHJcblx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHQvLyBjbGFzc05hbWU9J2QtYmxvY2sgdy0xMDAnXHJcblx0XHRcdFx0XHRzcmM9e3Bob3RvLmxvY2F0aW9ufVxyXG5cdFx0XHRcdFx0YWx0PXtwaG90by5hbHR9XHJcblx0XHRcdFx0XHRzdHlsZT17eyBsaXN0U3R5bGU6ICdub25lJyB9fVxyXG5cdFx0XHRcdFx0c3JjU2V0XHJcblx0XHRcdFx0XHRsYXlvdXQ9J3Jlc3BvbnNpdmUnXHJcblx0XHRcdFx0XHR3aWR0aD17NTAwfVxyXG5cdFx0XHRcdFx0aGVpZ2h0PXszNzV9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9Td2lwZXJTbGlkZT5cclxuXHRcdCkpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25FeHRlcmlldXIgPSAoKSA9PiAoXHJcblx0XHQ8UGFwZXIgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuXHRcdFx0PGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPkV4dMOpcmlldXI8L2gyPlxyXG5cdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdGNvbnRhaW5lclxyXG5cdFx0XHRcdGRpcmVjdGlvbj0ncm93J1xyXG5cdFx0XHRcdGp1c3RpZnk9J3NwYWNlLWFyb3VuZCdcclxuXHRcdFx0XHRhbGlnbkl0ZW1zPSdmbGV4LXN0YXJ0J1xyXG5cdFx0XHRcdHNwYWNpbmc9ezN9PlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0gbWQ9ezZ9PlxyXG5cdFx0XHRcdFx0PFN3aXBlclxyXG5cdFx0XHRcdFx0XHRpZD0nbWFpbkV4dCdcclxuXHRcdFx0XHRcdFx0c3BhY2VCZXR3ZWVuPXswfVxyXG5cdFx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3PXsxfVxyXG5cdFx0XHRcdFx0XHR0aHVtYnM9e3sgc3dpcGVyOiB0aHVtYnNTd2lwZXJFeHQgfX1cclxuXHRcdFx0XHRcdFx0bmF2aWdhdGlvblxyXG5cdFx0XHRcdFx0XHRwYWdpbmF0aW9uPXt7IGNsaWNrYWJsZTogdHJ1ZSB9fVxyXG5cdFx0XHRcdFx0XHRzY3JvbGxiYXI9e3sgZHJhZ2dhYmxlOiB0cnVlIH19XHJcblx0XHRcdFx0XHRcdG9uU3dpcGVyPXtzZXRUaHVtYnNTd2lwZXJFeHR9XHJcblx0XHRcdFx0XHRcdHdhdGNoU2xpZGVzVmlzaWJpbGl0eVxyXG5cdFx0XHRcdFx0XHR3YXRjaFNsaWRlc1Byb2dyZXNzXHJcblx0XHRcdFx0XHRcdG9uU2xpZGVDaGFuZ2U9eygpID0+IGNvbnNvbGUubG9nKCdzbGlkZSBjaGFuZ2UnKX0+XHJcblx0XHRcdFx0XHRcdHtjYXJvdXNlbCgnZXh0ZXJpZXVyJyl9XHJcblx0XHRcdFx0XHQ8L1N3aXBlcj5cclxuXHRcdFx0XHRcdDxTd2lwZXJcclxuXHRcdFx0XHRcdFx0aWQ9J3RodW1ic0V4dCdcclxuXHRcdFx0XHRcdFx0c3BhY2VCZXR3ZWVuPXs1fVxyXG5cdFx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3PXs1fVxyXG5cdFx0XHRcdFx0XHRvblN3aXBlcj17c2V0VGh1bWJzU3dpcGVyRXh0fT5cclxuXHRcdFx0XHRcdFx0e2Nhcm91c2VsKCdleHRlcmlldXInKX1cclxuXHRcdFx0XHRcdDwvU3dpcGVyPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIG1kPXs2fT5cclxuXHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJyBjb21wb25lbnQ9J3AnPlxyXG5cdFx0XHRcdFx0XHR7Z2l0ZS50ZXh0ZUV4dGVyaWV1cn1cclxuXHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdDwvUGFwZXI+XHJcblx0KTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvbkludGVyaWV1ciA9ICgpID0+IChcclxuXHRcdDxQYXBlciBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG5cdFx0XHQ8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+SW50w6lyaWV1cjwvaDI+XHJcblx0XHRcdDxHcmlkXHJcblx0XHRcdFx0Y29udGFpbmVyXHJcblx0XHRcdFx0ZGlyZWN0aW9uPSdyb3cnXHJcblx0XHRcdFx0anVzdGlmeT0nc3BhY2UtYXJvdW5kJ1xyXG5cdFx0XHRcdGFsaWduSXRlbXM9J2ZsZXgtc3RhcnQnXHJcblx0XHRcdFx0c3BhY2luZz17M30+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSBtZD17Nn0+XHJcblx0XHRcdFx0XHR7Z2l0ZS50ZXh0ZUludGVyaWV1cn1cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSBtZD17Nn0+XHJcblx0XHRcdFx0XHQ8U3dpcGVyXHJcblx0XHRcdFx0XHRcdGlkPSdtYWluSW50J1xyXG5cdFx0XHRcdFx0XHRzcGFjZUJldHdlZW49ezB9XHJcblx0XHRcdFx0XHRcdHNsaWRlc1BlclZpZXc9ezF9XHJcblx0XHRcdFx0XHRcdHRodW1icz17eyBzd2lwZXI6IHRodW1ic1N3aXBlckludCB9fVxyXG5cdFx0XHRcdFx0XHRuYXZpZ2F0aW9uXHJcblx0XHRcdFx0XHRcdHBhZ2luYXRpb249e3sgY2xpY2thYmxlOiB0cnVlIH19XHJcblx0XHRcdFx0XHRcdHNjcm9sbGJhcj17eyBkcmFnZ2FibGU6IHRydWUgfX1cclxuXHRcdFx0XHRcdFx0b25Td2lwZXI9e3NldFRodW1ic1N3aXBlckludH1cclxuXHRcdFx0XHRcdFx0d2F0Y2hTbGlkZXNWaXNpYmlsaXR5XHJcblx0XHRcdFx0XHRcdHdhdGNoU2xpZGVzUHJvZ3Jlc3NcclxuXHRcdFx0XHRcdFx0b25SZWFjaEVuZD17KHN3aXBlcikgPT4gKHN3aXBlci5hY3RpdmVJbmRleCA9IDApfVxyXG5cdFx0XHRcdFx0XHRvblNsaWRlQ2hhbmdlPXsoKSA9PiBjb25zb2xlLmxvZygnc2xpZGUgY2hhbmdlJyl9PlxyXG5cdFx0XHRcdFx0XHR7Y2Fyb3VzZWwoJ2ludGVyaWV1cicpfVxyXG5cdFx0XHRcdFx0PC9Td2lwZXI+XHJcblx0XHRcdFx0XHQ8U3dpcGVyXHJcblx0XHRcdFx0XHRcdGlkPSd0aHVtYnNJbnQnXHJcblx0XHRcdFx0XHRcdHNwYWNlQmV0d2Vlbj17NX1cclxuXHRcdFx0XHRcdFx0c2xpZGVzUGVyVmlldz17NX1cclxuXHRcdFx0XHRcdFx0d2F0Y2hTbGlkZXNWaXNpYmlsaXR5XHJcblx0XHRcdFx0XHRcdHdhdGNoU2xpZGVzUHJvZ3Jlc3NcclxuXHRcdFx0XHRcdFx0b25Td2lwZXI9e3NldFRodW1ic1N3aXBlckludH0+XHJcblx0XHRcdFx0XHRcdHtjYXJvdXNlbCgnaW50ZXJpZXVyJyl9XHJcblx0XHRcdFx0XHQ8L1N3aXBlcj5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdDwvUGFwZXI+XHJcblx0KTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvblBpc2NpbmUgPSAoKSA9PiAoXHJcblx0XHQ8UGFwZXIgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuXHRcdFx0PGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlBpc2NpbmU8L2gyPlxyXG5cdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdGNvbnRhaW5lclxyXG5cdFx0XHRcdGRpcmVjdGlvbj0ncm93J1xyXG5cdFx0XHRcdGp1c3RpZnk9J3NwYWNlLWFyb3VuZCdcclxuXHRcdFx0XHRhbGlnbkl0ZW1zPSdmbGV4LXN0YXJ0J1xyXG5cdFx0XHRcdHNwYWNpbmc9ezN9PlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0gbWQ9ezZ9PlxyXG5cdFx0XHRcdFx0PFN3aXBlclxyXG5cdFx0XHRcdFx0XHRpZD0nbWFpblBpcydcclxuXHRcdFx0XHRcdFx0c3BhY2VCZXR3ZWVuPXswfVxyXG5cdFx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3PXsxfVxyXG5cdFx0XHRcdFx0XHR0aHVtYnM9e3sgc3dpcGVyOiB0aHVtYnNTd2lwZXJQaXMgfX1cclxuXHRcdFx0XHRcdFx0bmF2aWdhdGlvblxyXG5cdFx0XHRcdFx0XHRwYWdpbmF0aW9uPXt7IGNsaWNrYWJsZTogdHJ1ZSB9fVxyXG5cdFx0XHRcdFx0XHRzY3JvbGxiYXI9e3sgZHJhZ2dhYmxlOiB0cnVlIH19XHJcblx0XHRcdFx0XHRcdG9uU3dpcGVyPXtzZXRUaHVtYnNTd2lwZXJQaXN9XHJcblx0XHRcdFx0XHRcdHdhdGNoU2xpZGVzVmlzaWJpbGl0eVxyXG5cdFx0XHRcdFx0XHR3YXRjaFNsaWRlc1Byb2dyZXNzXHJcblx0XHRcdFx0XHRcdG9uU2xpZGVDaGFuZ2U9eygpID0+IGNvbnNvbGUubG9nKCdzbGlkZSBjaGFuZ2UnKX0+XHJcblx0XHRcdFx0XHRcdHtjYXJvdXNlbCgncGlzY2luZScpfVxyXG5cdFx0XHRcdFx0PC9Td2lwZXI+XHJcblx0XHRcdFx0XHQ8U3dpcGVyXHJcblx0XHRcdFx0XHRcdGlkPSd0aHVtYnNQaXMnXHJcblx0XHRcdFx0XHRcdHNwYWNlQmV0d2Vlbj17NX1cclxuXHRcdFx0XHRcdFx0c2xpZGVzUGVyVmlldz17NX1cclxuXHRcdFx0XHRcdFx0b25Td2lwZXI9e3NldFRodW1ic1N3aXBlclBpc30+XHJcblx0XHRcdFx0XHRcdHtjYXJvdXNlbCgncGlzY2luZScpfVxyXG5cdFx0XHRcdFx0PC9Td2lwZXI+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0gbWQ9ezZ9PlxyXG5cdFx0XHRcdFx0e2dpdGUudGV4dGVQaXNjaW5lfVxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0PC9QYXBlcj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBjYXJvdXNlbFJldmlld3MgPSAoKSA9PlxyXG5cdFx0cmV2aWV3cy5tYXAoKHJldmlldywgaSkgPT4gKFxyXG5cdFx0XHQ8Q2Fyb3VzZWwuSXRlbSBrZXk9e2l9PlxyXG5cdFx0XHRcdDxJbWFnZVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdkLWJsb2NrIHctMTAwJ1xyXG5cdFx0XHRcdFx0c3JjPXsnL2ltYWdlcy9ncmV5LmpwZyd9XHJcblx0XHRcdFx0XHRhbHQ9eyd0ZXh0ZSd9XHJcblx0XHRcdFx0XHR3aWR0aD17MjAwMH1cclxuXHRcdFx0XHRcdGhlaWdodD17ODAwfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PENhcm91c2VsLkNhcHRpb24+XHJcblx0XHRcdFx0XHQ8cCBzdHlsZT17eyBtYXJnaW5Ub3A6ICctMjUwcHgnIH19PntyZXZpZXcuY29tbWVudGFpcmV9PC9wPlxyXG5cdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0PE5vdGUgdmFsdWU9e3Jldmlldy5ub3RlfSAvPlxyXG5cdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0PGg0PntyZXZpZXcuY2xpZW50fTwvaDQ+XHJcblx0XHRcdFx0PC9DYXJvdXNlbC5DYXB0aW9uPlxyXG5cdFx0XHQ8L0Nhcm91c2VsLkl0ZW0+XHJcblx0XHQpKTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvblJldmlld3MgPSAoKSA9PiAoXHJcblx0XHQ8UGFwZXIgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuXHRcdFx0PGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxyXG5cdFx0XHRcdENlIHF1ZSBub3MgY2xpZW50cyBkaXNlbnQgZGUgY2UgZ8OudGVcclxuXHRcdFx0PC9oMj5cclxuXHJcblx0XHRcdDxDYXJvdXNlbD57Y2Fyb3VzZWxSZXZpZXdzKCl9PC9DYXJvdXNlbD5cclxuXHRcdDwvUGFwZXI+XHJcblx0KTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvblZpZGVvQ29udGFjdCA9ICgpID0+IChcclxuXHRcdDxQYXBlciBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG5cdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdGNvbnRhaW5lclxyXG5cdFx0XHRcdGRpcmVjdGlvbj0ncm93J1xyXG5cdFx0XHRcdGp1c3RpZnk9J3NwYWNlLWFyb3VuZCdcclxuXHRcdFx0XHRhbGlnbkl0ZW1zPSdmbGV4LXN0YXJ0J1xyXG5cdFx0XHRcdHNwYWNpbmc9ezN9PlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0gbWQ9ezZ9PlxyXG5cdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlRvdXIgZHUgZ8OudGUgZW4gdmlkw6lvPC9oMj5cclxuXHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdtdC01J1xyXG5cdFx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17YWZmaWNoZVZpZGVvKCl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIG1kPXs2fT5cclxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5FY3JpdmV6LW5vdXMgITwvaDI+XHJcblx0XHRcdFx0XHQ8Q29udGFjdEZvcm0gLz5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdDwvUGFwZXI+XHJcblx0KTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvbkNhbGVuZHJpZXIgPSAoKSA9PiAoXHJcblx0XHQ8UGFwZXIgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuXHRcdFx0PGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPkNhbGVuZHJpZXIgZGVzIGRpc3BvbmliaWxpdMOpczwvaDI+XHJcblx0XHRcdDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2FmZmljaGVDYWxlbmRyaWVyKCl9IC8+XHJcblx0XHQ8L1BhcGVyPlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25NYXAgPSAoKSA9PiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHRleHQtY2VudGVyJz5cclxuXHRcdFx0PHNlY3Rpb24+XHJcblx0XHRcdFx0PGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxyXG5cdFx0XHRcdFx0SXRpbsOpcmFpcmUgY29uc2VpbGzDqSBkZXB1aXMgdm90cmUgcG9zaXRpb25cclxuXHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdDxwPkFmZmljaGUgbGEgbWFwIGljaTwvcD5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHtoZWFkKCl9XHJcblx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdFx0PENvbnRhaW5lcj5cclxuXHRcdFx0XHRcdHsvKiA8aDI+SW5mb3MgZHUgZ2l0ZTwvaDI+ICovfVxyXG5cdFx0XHRcdFx0ey8qIHtKU09OLnN0cmluZ2lmeShnaXRlKX0gKi99XHJcblx0XHRcdFx0XHR7anVtYm90cm9uKCl9XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdHtzZWN0aW9uRXh0ZXJpZXVyKCl9XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdHtzZWN0aW9uSW50ZXJpZXVyKCl9XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdHtzZWN0aW9uUGlzY2luZSgpfVxyXG5cdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHR7Lyoge2NvbnNvbGUubG9nKHJldmlld3MpfSAqL31cclxuXHRcdFx0XHRcdHtzZWN0aW9uUmV2aWV3cygpfVxyXG5cdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHR7c2VjdGlvblZpZGVvQ29udGFjdCgpfVxyXG5cdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHR7c2VjdGlvbkNhbGVuZHJpZXIoKX1cclxuXHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0e3NlY3Rpb25NYXAoKX1cclxuXHRcdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdFx0PC9MYXlvdXQ+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG5cdC8vbGlzdGVyIGxlcyBub21zIGRlIGdpdGVzXHJcblx0Y29uc3QgZ2l0ZXNOb20gPSBhd2FpdCBsaXN0R2l0ZXNOb21zKCk7XHJcblx0cmV0dXJuIHtcclxuXHRcdHBhdGhzOiBnaXRlc05vbS5tYXAoKG5vbSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHBhcmFtczogeyBpZDogbm9tLl9pZCwgc2x1Zzogbm9tLnNsdWcgfSxcclxuXHRcdFx0fTtcclxuXHRcdH0pLFxyXG5cdFx0ZmFsbGJhY2s6IGZhbHNlLFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcblx0Ly8gY29uc29sZS5sb2cocXVlcnkpO1xyXG5cdHJldHVybiBsaXN0R2l0ZURldGFpbHMoY29udGV4dC5wYXJhbXMuc2x1ZykudGhlbigoZ2l0ZSkgPT4ge1xyXG5cdFx0aWYgKGdpdGUuZXJyb3IpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coZ2l0ZS5lcnJvcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gbGlzdFBob3Rvc0J5Tm9tKGdpdGUuc2x1ZykudGhlbigocGhvdG9zKSA9PiB7XHJcblx0XHRcdFx0aWYgKHBob3Rvcy5lcnJvcikge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocGhvdG9zLmVycm9yKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGxpc3RSZXZpZXdzQnlTbHVnKGdpdGUuc2x1ZykudGhlbigocmV2aWV3cykgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAocmV2aWV3cy5lcnJvcikge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJldmlld3MuZXJyb3IpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiB7IHByb3BzOiB7IGdpdGUsIHBob3RvcywgcmV2aWV3cyB9IH07XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdpdGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=