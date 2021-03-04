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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      spacing: 3,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
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
        lineNumber: 136,
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
        lineNumber: 150,
        columnNumber: 6
      }
    }, carousel('exterieur'))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 5
      }
    }, gite.texteExterieur)));
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
        lineNumber: 166,
        columnNumber: 3
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 4
      }
    }, "Int\xE9rieur"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      container: true,
      direction: "row",
      justify: "space-between",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 5
      }
    }, gite.texteInterieur), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
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
        lineNumber: 175,
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
        lineNumber: 190,
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
        lineNumber: 205,
        columnNumber: 3
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 4
      }
    }, "Piscine"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      container: true,
      direction: "row",
      justify: "space-between",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
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
        lineNumber: 213,
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
        lineNumber: 227,
        columnNumber: 6
      }
    }, carousel('piscine'))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
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
          lineNumber: 242,
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
          lineNumber: 243,
          columnNumber: 5
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Carousel"].Caption, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 5
        }
      }, __jsx("p", {
        style: {
          marginTop: '-250px'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 6
        }
      }, review.commentaire), __jsx("hr", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 6
        }
      }), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 6
        }
      }, __jsx(_components_admin_Note__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: review.note,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 7
        }
      })), __jsx("h4", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
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
        lineNumber: 262,
        columnNumber: 3
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 4
      }
    }, "Ce que nos clients disent de ce g\xEEte"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Carousel"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
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
        lineNumber: 272,
        columnNumber: 3
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      container: true,
      direction: "row",
      justify: "space-between",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 5
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 6
      }
    }, "Tour du g\xEEte en vid\xE9o"), __jsx("div", {
      className: "mt-5",
      dangerouslySetInnerHTML: afficheVideo(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 6
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 5
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 6
      }
    }, "Ecrivez-nous !"), __jsx(_components_ContactForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
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
        lineNumber: 294,
        columnNumber: 3
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 4
      }
    }, "Calendrier des disponibilit\xE9s"), __jsx("div", {
      dangerouslySetInnerHTML: afficheCalendrier(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
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
        lineNumber: 301,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 4
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 5
      }
    }, "Itin\xE9raire conseill\xE9 depuis votre position"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 5
      }
    }, "Affiche la map ici")));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, head(), __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 5
    }
  }, jumbotron(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 6
    }
  }), sectionExterieur(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 6
    }
  }), sectionInterieur(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 6
    }
  }), sectionPiscine(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 6
    }
  }), sectionReviews(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 6
    }
  }), sectionVideoContact(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 6
    }
  }), sectionCalendrier(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2l0ZS9bc2x1Z10uanMiXSwibmFtZXMiOlsiU3dpcGVyQ29yZSIsInVzZSIsIk5hdmlnYXRpb24iLCJQYWdpbmF0aW9uIiwiU2Nyb2xsYmFyIiwiQTExeSIsIkNvbnRyb2xsZXIiLCJUaHVtYnMiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJwYXBlciIsInBhZGRpbmciLCJzcGFjaW5nIiwidGV4dEFsaWduIiwiY29sb3IiLCJwYWxldHRlIiwidGV4dCIsInNlY29uZGFyeSIsIkdpdGUiLCJnaXRlIiwicGhvdG9zIiwicmV2aWV3cyIsImNsYXNzZXMiLCJoZWFkIiwiQVBQX05BTUUiLCJub20iLCJtZGVzYyIsIkRPTUFJTiIsInNsdWciLCJBUEkiLCJhZmZpY2hlQ2FsZW5kcmllciIsIl9faHRtbCIsImNhbGVuZHJpZXJMaW5rIiwiYWZmaWNoZVZpZGVvIiwidmlkZW9MaW5rIiwidXNlU3RhdGUiLCJvcGVuIiwic3RhdGUiLCJzZXRTdGF0ZSIsImhhbmRsZUNsaWNrIiwidGh1bWJzU3dpcGVyRXh0Iiwic2V0VGh1bWJzU3dpcGVyRXh0IiwidGh1bWJzU3dpcGVySW50Iiwic2V0VGh1bWJzU3dpcGVySW50IiwidGh1bWJzU3dpcGVyUGlzIiwic2V0VGh1bWJzU3dpcGVyUGlzIiwianVtYm90cm9uIiwibWFyZ2luVG9wIiwicHJlc0dpdGVTRU8iLCJjYXJvdXNlbCIsInNlY3Rpb24iLCJmaWx0ZXJlZFBob3RvcyIsImZpbHRlciIsInBob3RvIiwic2VjdGlvbkFzc29jaWVlIiwibWFwIiwiaSIsImxpc3RTdHlsZSIsImxvY2F0aW9uIiwiYWx0Iiwic2VjdGlvbkV4dGVyaWV1ciIsInN3aXBlciIsImNsaWNrYWJsZSIsImRyYWdnYWJsZSIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0ZUV4dGVyaWV1ciIsInNlY3Rpb25JbnRlcmlldXIiLCJ0ZXh0ZUludGVyaWV1ciIsImFjdGl2ZUluZGV4Iiwic2VjdGlvblBpc2NpbmUiLCJ0ZXh0ZVBpc2NpbmUiLCJjYXJvdXNlbFJldmlld3MiLCJyZXZpZXciLCJjb21tZW50YWlyZSIsIm5vdGUiLCJjbGllbnQiLCJzZWN0aW9uUmV2aWV3cyIsInNlY3Rpb25WaWRlb0NvbnRhY3QiLCJzZWN0aW9uQ2FsZW5kcmllciIsInNlY3Rpb25NYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFFQTtBQVNBQSw4Q0FBVSxDQUFDQyxHQUFYLENBQWUsQ0FBQ0MsaURBQUQsRUFBYUMsaURBQWIsRUFBeUJDLGdEQUF6QixFQUFvQ0MsMkNBQXBDLEVBQTBDQyxpREFBMUMsRUFBc0RDLDZDQUF0RCxDQUFmO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUMsU0FBUyxHQUFHQyw0RUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3hDQyxRQUFJLEVBQUU7QUFDTEMsY0FBUSxFQUFFO0FBREwsS0FEa0M7QUFJeENDLFNBQUssRUFBRTtBQUNOQyxhQUFPLEVBQUVKLEtBQUssQ0FBQ0ssT0FBTixDQUFjLENBQWQsQ0FESDtBQUVOQyxlQUFTLEVBQUUsUUFGTDtBQUdOQyxXQUFLLEVBQUVQLEtBQUssQ0FBQ1EsT0FBTixDQUFjQyxJQUFkLENBQW1CQztBQUhwQjtBQUppQyxHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUFXQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUErQjtBQUFBOztBQUFBLE1BQTVCQyxJQUE0QixRQUE1QkEsSUFBNEI7QUFBQSxNQUF0QkMsTUFBc0IsUUFBdEJBLE1BQXNCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQzNDLE1BQU1DLE9BQU8sR0FBR2pCLFNBQVMsRUFBekI7O0FBQ0EsTUFBTWtCLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsV0FDWixNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FB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Y2Q5NmY1ODc1YjA1ZmEyNTFhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCc7XHJcbmltcG9ydCB7IEFQSSwgRE9NQUlOLCBBUFBfTkFNRSB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbi8vIGltcG9ydCBTd2lwZXIgY29yZSBhbmQgcmVxdWlyZWQgbW9kdWxlc1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSAnc3dpcGVyL3JlYWN0JztcclxuXHJcbmltcG9ydCBTd2lwZXJDb3JlLCB7XHJcblx0TmF2aWdhdGlvbixcclxuXHRQYWdpbmF0aW9uLFxyXG5cdFNjcm9sbGJhcixcclxuXHRBMTF5LFxyXG5cdENvbnRyb2xsZXIsXHJcblx0VGh1bWJzLFxyXG59IGZyb20gJ3N3aXBlcic7XHJcblxyXG5Td2lwZXJDb3JlLnVzZShbTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiwgU2Nyb2xsYmFyLCBBMTF5LCBDb250cm9sbGVyLCBUaHVtYnNdKTtcclxuaW1wb3J0IHtcclxuXHRsaXN0R2l0ZURldGFpbHMsXHJcblx0bGlzdEdpdGVzTm9tcyxcclxuXHRsaXN0UGhvdG9zQnlOb20sXHJcbn0gZnJvbSAnLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250YWN0Rm9ybSc7XHJcbmltcG9ydCB7IGxpc3RSZXZpZXdzQnlTbHVnIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9yZXZpZXdBY3Rpb25zJztcclxuaW1wb3J0IE5vdGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hZG1pbi9Ob3RlJztcclxuaW1wb3J0IHsgUGFwZXIsIENvbnRhaW5lciwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRyb290OiB7XHJcblx0XHRmbGV4R3JvdzogMSxcclxuXHR9LFxyXG5cdHBhcGVyOiB7XHJcblx0XHRwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRcdGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEdpdGUgPSAoeyBnaXRlLCBwaG90b3MsIHJldmlld3MgfSkgPT4ge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRjb25zdCBoZWFkID0gKCkgPT4gKFxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdDx0aXRsZT5cclxuXHRcdFx0XHR7QVBQX05BTUV9IHwge2dpdGUubm9tfXsnICd9XHJcblx0XHRcdDwvdGl0bGU+XHJcblx0XHRcdDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PXtnaXRlLm1kZXNjfSAvPlxyXG5cdFx0XHQ8bGluayByZWw9J2Nhbm9uaWNhbCcgaHJlZj17YCR7RE9NQUlOfS9naXRlLyR7Z2l0ZS5zbHVnfWB9IC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzp0aXRsZScgY29udGVudD17YCR7Z2l0ZS5ub219IHwgJHtBUFBfTkFNRX1gfSAvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6ZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2dpdGUubWRlc2N9IC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzp0eXBlJyBjb250ZW50PSd3ZWJzaXRlJyAvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6dXJsJyBjb250ZW50PXtgJHtET01BSU59L2dpdGUvJHtnaXRlLnNsdWd9YH0gLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnNpdGVfbmFtZScgY29udGVudD17YCR7QVBQX05BTUV9YH0gLz5cclxuXHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzpzaXRlX25hbWUnIGNvbnRlbnQ9e0FQUF9OQU1FfSAvPlxyXG5cclxuXHRcdFx0PG1ldGFcclxuXHRcdFx0XHRwcm9wZXJ0eT0nb2c6aW1hZ2UnXHJcblx0XHRcdFx0Y29udGVudD17YCR7QVBJfS9ibG9nL3Bob3RvLyR7Z2l0ZS5zbHVnfWB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxtZXRhXHJcblx0XHRcdFx0cHJvcGVydHk9J29nOmltYWdlOnNlY3VyZV91cmwnXHJcblx0XHRcdFx0Y29udGVudD17YCR7QVBJfS9naXRlL3Bob3RvLyR7Z2l0ZS5zbHVnfWB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzppbWFnZTp0eXBlJyBjb250ZW50PSdpbWFnZS9qcGcnIC8+XHJcblx0XHRcdHsvKiA8bWV0YSBwcm9wZXJ0eT0nZmI6YXBwX2lkJyBjb250ZW50PXtgJHtGQl9BUFBfSUR9YH0gLz4gKi99XHJcblx0XHQ8L0hlYWQ+XHJcblx0KTtcclxuXHRjb25zdCBhZmZpY2hlQ2FsZW5kcmllciA9ICgpID0+IHtcclxuXHRcdHJldHVybiB7IF9faHRtbDogZ2l0ZS5jYWxlbmRyaWVyTGluayB9O1xyXG5cdH07XHJcblx0Y29uc3QgYWZmaWNoZVZpZGVvID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIHsgX19odG1sOiBnaXRlLnZpZGVvTGluayB9O1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcclxuXHRjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuXHRcdHNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBbdGh1bWJzU3dpcGVyRXh0LCBzZXRUaHVtYnNTd2lwZXJFeHRdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW3RodW1ic1N3aXBlckludCwgc2V0VGh1bWJzU3dpcGVySW50XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFt0aHVtYnNTd2lwZXJQaXMsIHNldFRodW1ic1N3aXBlclBpc10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcblx0Y29uc3QganVtYm90cm9uID0gKCkgPT4gKFxyXG5cdFx0PHNlY3Rpb24+XHJcblx0XHRcdDxQYXBlclxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn1cclxuXHRcdFx0XHRzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9J2Rpc3BsYXktMyc+UHLDqXNlbnRhdGlvbiBkdSBnw650ZSB7Z2l0ZS5ub219PC9oMT5cclxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9J2xlYWQnPntnaXRlLnByZXNHaXRlU0VPfTwvcD5cclxuXHRcdFx0XHQ8aHIgY2xhc3NOYW1lPSdteS0yJyAvPlxyXG5cdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0SXQgdXNlcyB1dGlsaXR5IGNsYXNzZXMgZm9yIHR5cG9ncmFwaHkgYW5kIHNwYWNpbmcgdG8gc3BhY2VcclxuXHRcdFx0XHRcdGNvbnRlbnQgb3V0IHdpdGhpbiB0aGUgbGFyZ2VyIGNvbnRhaW5lci5cclxuXHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0PHAgY2xhc3NOYW1lPSdsZWFkJz48L3A+XHJcblx0XHRcdDwvUGFwZXI+XHJcblx0XHQ8L3NlY3Rpb24+XHJcblx0KTtcclxuXHJcblx0Y29uc3QgY2Fyb3VzZWwgPSAoc2VjdGlvbikgPT4ge1xyXG5cdFx0Y29uc3QgZmlsdGVyZWRQaG90b3MgPSBwaG90b3MuZmlsdGVyKChwaG90bykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcGhvdG8uc2VjdGlvbkFzc29jaWVlID09PSBzZWN0aW9uO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gZmlsdGVyZWRQaG90b3MubWFwKChwaG90bywgaSkgPT4gKFxyXG5cdFx0XHQ8U3dpcGVyU2xpZGVcclxuXHRcdFx0XHRrZXk9e2BzbGlkZS0ke2l9YH1cclxuXHRcdFx0XHR0YWc9J2xpJ1xyXG5cdFx0XHRcdHN0eWxlPXt7IGxpc3RTdHlsZTogJ25vbmUnIH19PlxyXG5cdFx0XHRcdDxJbWFnZVxyXG5cdFx0XHRcdFx0Ly8gY2xhc3NOYW1lPSdkLWJsb2NrIHctMTAwJ1xyXG5cdFx0XHRcdFx0c3JjPXtwaG90by5sb2NhdGlvbn1cclxuXHRcdFx0XHRcdGFsdD17cGhvdG8uYWx0fVxyXG5cdFx0XHRcdFx0c3R5bGU9e3sgbGlzdFN0eWxlOiAnbm9uZScgfX1cclxuXHRcdFx0XHRcdHNyY1NldFxyXG5cdFx0XHRcdFx0bGF5b3V0PSdyZXNwb25zaXZlJ1xyXG5cdFx0XHRcdFx0d2lkdGg9ezUwMH1cclxuXHRcdFx0XHRcdGhlaWdodD17Mzc1fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvU3dpcGVyU2xpZGU+XHJcblx0XHQpKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzZWN0aW9uRXh0ZXJpZXVyID0gKCkgPT4gKFxyXG5cdFx0PFBhcGVyIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcblx0XHRcdDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5FeHTDqXJpZXVyPC9oMj5cclxuXHRcdFx0PEdyaWRcclxuXHRcdFx0XHRjb250YWluZXJcclxuXHRcdFx0XHRkaXJlY3Rpb249J3JvdydcclxuXHRcdFx0XHRqdXN0aWZ5PSdzcGFjZS1hcm91bmQnXHJcblx0XHRcdFx0YWxpZ25JdGVtcz0nZmxleC1zdGFydCc+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSBtZD17Nn0gc3BhY2luZz17M30+XHJcblx0XHRcdFx0XHQ8U3dpcGVyXHJcblx0XHRcdFx0XHRcdGlkPSdtYWluRXh0J1xyXG5cdFx0XHRcdFx0XHRzcGFjZUJldHdlZW49ezB9XHJcblx0XHRcdFx0XHRcdHNsaWRlc1BlclZpZXc9ezF9XHJcblx0XHRcdFx0XHRcdHRodW1icz17eyBzd2lwZXI6IHRodW1ic1N3aXBlckV4dCB9fVxyXG5cdFx0XHRcdFx0XHRuYXZpZ2F0aW9uXHJcblx0XHRcdFx0XHRcdHBhZ2luYXRpb249e3sgY2xpY2thYmxlOiB0cnVlIH19XHJcblx0XHRcdFx0XHRcdHNjcm9sbGJhcj17eyBkcmFnZ2FibGU6IHRydWUgfX1cclxuXHRcdFx0XHRcdFx0b25Td2lwZXI9e3NldFRodW1ic1N3aXBlckV4dH1cclxuXHRcdFx0XHRcdFx0d2F0Y2hTbGlkZXNWaXNpYmlsaXR5XHJcblx0XHRcdFx0XHRcdHdhdGNoU2xpZGVzUHJvZ3Jlc3NcclxuXHRcdFx0XHRcdFx0b25TbGlkZUNoYW5nZT17KCkgPT4gY29uc29sZS5sb2coJ3NsaWRlIGNoYW5nZScpfT5cclxuXHRcdFx0XHRcdFx0e2Nhcm91c2VsKCdleHRlcmlldXInKX1cclxuXHRcdFx0XHRcdDwvU3dpcGVyPlxyXG5cdFx0XHRcdFx0PFN3aXBlclxyXG5cdFx0XHRcdFx0XHRpZD0ndGh1bWJzRXh0J1xyXG5cdFx0XHRcdFx0XHRzcGFjZUJldHdlZW49ezV9XHJcblx0XHRcdFx0XHRcdHNsaWRlc1BlclZpZXc9ezV9XHJcblx0XHRcdFx0XHRcdG9uU3dpcGVyPXtzZXRUaHVtYnNTd2lwZXJFeHR9PlxyXG5cdFx0XHRcdFx0XHR7Y2Fyb3VzZWwoJ2V4dGVyaWV1cicpfVxyXG5cdFx0XHRcdFx0PC9Td2lwZXI+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0gbWQ9ezZ9PlxyXG5cdFx0XHRcdFx0e2dpdGUudGV4dGVFeHRlcmlldXJ9XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHQ8L1BhcGVyPlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25JbnRlcmlldXIgPSAoKSA9PiAoXHJcblx0XHQ8UGFwZXIgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuXHRcdFx0PGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPkludMOpcmlldXI8L2gyPlxyXG5cdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdGNvbnRhaW5lclxyXG5cdFx0XHRcdGRpcmVjdGlvbj0ncm93J1xyXG5cdFx0XHRcdGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nXHJcblx0XHRcdFx0YWxpZ25JdGVtcz0nY2VudGVyJz5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtPntnaXRlLnRleHRlSW50ZXJpZXVyfTwvR3JpZD5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtPlxyXG5cdFx0XHRcdFx0PFN3aXBlclxyXG5cdFx0XHRcdFx0XHRpZD0nbWFpbkludCdcclxuXHRcdFx0XHRcdFx0c3BhY2VCZXR3ZWVuPXswfVxyXG5cdFx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3PXsxfVxyXG5cdFx0XHRcdFx0XHR0aHVtYnM9e3sgc3dpcGVyOiB0aHVtYnNTd2lwZXJJbnQgfX1cclxuXHRcdFx0XHRcdFx0bmF2aWdhdGlvblxyXG5cdFx0XHRcdFx0XHRwYWdpbmF0aW9uPXt7IGNsaWNrYWJsZTogdHJ1ZSB9fVxyXG5cdFx0XHRcdFx0XHRzY3JvbGxiYXI9e3sgZHJhZ2dhYmxlOiB0cnVlIH19XHJcblx0XHRcdFx0XHRcdG9uU3dpcGVyPXtzZXRUaHVtYnNTd2lwZXJJbnR9XHJcblx0XHRcdFx0XHRcdHdhdGNoU2xpZGVzVmlzaWJpbGl0eVxyXG5cdFx0XHRcdFx0XHR3YXRjaFNsaWRlc1Byb2dyZXNzXHJcblx0XHRcdFx0XHRcdG9uUmVhY2hFbmQ9eyhzd2lwZXIpID0+IChzd2lwZXIuYWN0aXZlSW5kZXggPSAwKX1cclxuXHRcdFx0XHRcdFx0b25TbGlkZUNoYW5nZT17KCkgPT4gY29uc29sZS5sb2coJ3NsaWRlIGNoYW5nZScpfT5cclxuXHRcdFx0XHRcdFx0e2Nhcm91c2VsKCdpbnRlcmlldXInKX1cclxuXHRcdFx0XHRcdDwvU3dpcGVyPlxyXG5cdFx0XHRcdFx0PFN3aXBlclxyXG5cdFx0XHRcdFx0XHRpZD0ndGh1bWJzSW50J1xyXG5cdFx0XHRcdFx0XHRzcGFjZUJldHdlZW49ezV9XHJcblx0XHRcdFx0XHRcdHNsaWRlc1BlclZpZXc9ezV9XHJcblx0XHRcdFx0XHRcdHdhdGNoU2xpZGVzVmlzaWJpbGl0eVxyXG5cdFx0XHRcdFx0XHR3YXRjaFNsaWRlc1Byb2dyZXNzXHJcblx0XHRcdFx0XHRcdG9uU3dpcGVyPXtzZXRUaHVtYnNTd2lwZXJJbnR9PlxyXG5cdFx0XHRcdFx0XHR7Y2Fyb3VzZWwoJ2ludGVyaWV1cicpfVxyXG5cdFx0XHRcdFx0PC9Td2lwZXI+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHQ8L1BhcGVyPlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25QaXNjaW5lID0gKCkgPT4gKFxyXG5cdFx0PFBhcGVyIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcblx0XHRcdDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5QaXNjaW5lPC9oMj5cclxuXHRcdFx0PEdyaWRcclxuXHRcdFx0XHRjb250YWluZXJcclxuXHRcdFx0XHRkaXJlY3Rpb249J3JvdydcclxuXHRcdFx0XHRqdXN0aWZ5PSdzcGFjZS1iZXR3ZWVuJ1xyXG5cdFx0XHRcdGFsaWduSXRlbXM9J2NlbnRlcic+XHJcblx0XHRcdFx0PEdyaWQgaXRlbT5cclxuXHRcdFx0XHRcdDxTd2lwZXJcclxuXHRcdFx0XHRcdFx0aWQ9J21haW5QaXMnXHJcblx0XHRcdFx0XHRcdHNwYWNlQmV0d2Vlbj17MH1cclxuXHRcdFx0XHRcdFx0c2xpZGVzUGVyVmlldz17MX1cclxuXHRcdFx0XHRcdFx0dGh1bWJzPXt7IHN3aXBlcjogdGh1bWJzU3dpcGVyUGlzIH19XHJcblx0XHRcdFx0XHRcdG5hdmlnYXRpb25cclxuXHRcdFx0XHRcdFx0cGFnaW5hdGlvbj17eyBjbGlja2FibGU6IHRydWUgfX1cclxuXHRcdFx0XHRcdFx0c2Nyb2xsYmFyPXt7IGRyYWdnYWJsZTogdHJ1ZSB9fVxyXG5cdFx0XHRcdFx0XHRvblN3aXBlcj17c2V0VGh1bWJzU3dpcGVyUGlzfVxyXG5cdFx0XHRcdFx0XHR3YXRjaFNsaWRlc1Zpc2liaWxpdHlcclxuXHRcdFx0XHRcdFx0d2F0Y2hTbGlkZXNQcm9ncmVzc1xyXG5cdFx0XHRcdFx0XHRvblNsaWRlQ2hhbmdlPXsoKSA9PiBjb25zb2xlLmxvZygnc2xpZGUgY2hhbmdlJyl9PlxyXG5cdFx0XHRcdFx0XHR7Y2Fyb3VzZWwoJ3Bpc2NpbmUnKX1cclxuXHRcdFx0XHRcdDwvU3dpcGVyPlxyXG5cdFx0XHRcdFx0PFN3aXBlclxyXG5cdFx0XHRcdFx0XHRpZD0ndGh1bWJzUGlzJ1xyXG5cdFx0XHRcdFx0XHRzcGFjZUJldHdlZW49ezV9XHJcblx0XHRcdFx0XHRcdHNsaWRlc1BlclZpZXc9ezV9XHJcblx0XHRcdFx0XHRcdG9uU3dpcGVyPXtzZXRUaHVtYnNTd2lwZXJQaXN9PlxyXG5cdFx0XHRcdFx0XHR7Y2Fyb3VzZWwoJ3Bpc2NpbmUnKX1cclxuXHRcdFx0XHRcdDwvU3dpcGVyPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtPntnaXRlLnRleHRlUGlzY2luZX08L0dyaWQ+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdDwvUGFwZXI+XHJcblx0KTtcclxuXHJcblx0Y29uc3QgY2Fyb3VzZWxSZXZpZXdzID0gKCkgPT5cclxuXHRcdHJldmlld3MubWFwKChyZXZpZXcsIGkpID0+IChcclxuXHRcdFx0PENhcm91c2VsLkl0ZW0ga2V5PXtpfT5cclxuXHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT0nZC1ibG9jayB3LTEwMCdcclxuXHRcdFx0XHRcdHNyYz17Jy9pbWFnZXMvZ3JleS5qcGcnfVxyXG5cdFx0XHRcdFx0YWx0PXsndGV4dGUnfVxyXG5cdFx0XHRcdFx0d2lkdGg9ezIwMDB9XHJcblx0XHRcdFx0XHRoZWlnaHQ9ezgwMH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxDYXJvdXNlbC5DYXB0aW9uPlxyXG5cdFx0XHRcdFx0PHAgc3R5bGU9e3sgbWFyZ2luVG9wOiAnLTI1MHB4JyB9fT57cmV2aWV3LmNvbW1lbnRhaXJlfTwvcD5cclxuXHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdDxOb3RlIHZhbHVlPXtyZXZpZXcubm90ZX0gLz5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDxoND57cmV2aWV3LmNsaWVudH08L2g0PlxyXG5cdFx0XHRcdDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuXHRcdFx0PC9DYXJvdXNlbC5JdGVtPlxyXG5cdFx0KSk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25SZXZpZXdzID0gKCkgPT4gKFxyXG5cdFx0PFBhcGVyIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcblx0XHRcdDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cclxuXHRcdFx0XHRDZSBxdWUgbm9zIGNsaWVudHMgZGlzZW50IGRlIGNlIGfDrnRlXHJcblx0XHRcdDwvaDI+XHJcblxyXG5cdFx0XHQ8Q2Fyb3VzZWw+e2Nhcm91c2VsUmV2aWV3cygpfTwvQ2Fyb3VzZWw+XHJcblx0XHQ8L1BhcGVyPlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25WaWRlb0NvbnRhY3QgPSAoKSA9PiAoXHJcblx0XHQ8UGFwZXIgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuXHRcdFx0PEdyaWRcclxuXHRcdFx0XHRjb250YWluZXJcclxuXHRcdFx0XHRkaXJlY3Rpb249J3JvdydcclxuXHRcdFx0XHRqdXN0aWZ5PSdzcGFjZS1iZXR3ZWVuJ1xyXG5cdFx0XHRcdGFsaWduSXRlbXM9J2NlbnRlcic+XHJcblx0XHRcdFx0PEdyaWQgaXRlbT5cclxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5Ub3VyIGR1IGfDrnRlIGVuIHZpZMOpbzwvaDI+XHJcblx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nbXQtNSdcclxuXHRcdFx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2FmZmljaGVWaWRlbygpfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQgaXRlbT5cclxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5FY3JpdmV6LW5vdXMgITwvaDI+XHJcblx0XHRcdFx0XHQ8Q29udGFjdEZvcm0gLz5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdDwvUGFwZXI+XHJcblx0KTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvbkNhbGVuZHJpZXIgPSAoKSA9PiAoXHJcblx0XHQ8UGFwZXIgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuXHRcdFx0PGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPkNhbGVuZHJpZXIgZGVzIGRpc3BvbmliaWxpdMOpczwvaDI+XHJcblx0XHRcdDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2FmZmljaGVDYWxlbmRyaWVyKCl9IC8+XHJcblx0XHQ8L1BhcGVyPlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25NYXAgPSAoKSA9PiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHRleHQtY2VudGVyJz5cclxuXHRcdFx0PHNlY3Rpb24+XHJcblx0XHRcdFx0PGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxyXG5cdFx0XHRcdFx0SXRpbsOpcmFpcmUgY29uc2VpbGzDqSBkZXB1aXMgdm90cmUgcG9zaXRpb25cclxuXHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdDxwPkFmZmljaGUgbGEgbWFwIGljaTwvcD5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHtoZWFkKCl9XHJcblx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdFx0PENvbnRhaW5lcj5cclxuXHRcdFx0XHRcdHsvKiA8aDI+SW5mb3MgZHUgZ2l0ZTwvaDI+ICovfVxyXG5cdFx0XHRcdFx0ey8qIHtKU09OLnN0cmluZ2lmeShnaXRlKX0gKi99XHJcblx0XHRcdFx0XHR7anVtYm90cm9uKCl9XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdHtzZWN0aW9uRXh0ZXJpZXVyKCl9XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdHtzZWN0aW9uSW50ZXJpZXVyKCl9XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdHtzZWN0aW9uUGlzY2luZSgpfVxyXG5cdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHR7Lyoge2NvbnNvbGUubG9nKHJldmlld3MpfSAqL31cclxuXHRcdFx0XHRcdHtzZWN0aW9uUmV2aWV3cygpfVxyXG5cdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHR7c2VjdGlvblZpZGVvQ29udGFjdCgpfVxyXG5cdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHR7c2VjdGlvbkNhbGVuZHJpZXIoKX1cclxuXHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0e3NlY3Rpb25NYXAoKX1cclxuXHRcdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdFx0PC9MYXlvdXQ+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG5cdC8vbGlzdGVyIGxlcyBub21zIGRlIGdpdGVzXHJcblx0Y29uc3QgZ2l0ZXNOb20gPSBhd2FpdCBsaXN0R2l0ZXNOb21zKCk7XHJcblx0cmV0dXJuIHtcclxuXHRcdHBhdGhzOiBnaXRlc05vbS5tYXAoKG5vbSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHBhcmFtczogeyBpZDogbm9tLl9pZCwgc2x1Zzogbm9tLnNsdWcgfSxcclxuXHRcdFx0fTtcclxuXHRcdH0pLFxyXG5cdFx0ZmFsbGJhY2s6IGZhbHNlLFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcblx0Ly8gY29uc29sZS5sb2cocXVlcnkpO1xyXG5cdHJldHVybiBsaXN0R2l0ZURldGFpbHMoY29udGV4dC5wYXJhbXMuc2x1ZykudGhlbigoZ2l0ZSkgPT4ge1xyXG5cdFx0aWYgKGdpdGUuZXJyb3IpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coZ2l0ZS5lcnJvcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gbGlzdFBob3Rvc0J5Tm9tKGdpdGUuc2x1ZykudGhlbigocGhvdG9zKSA9PiB7XHJcblx0XHRcdFx0aWYgKHBob3Rvcy5lcnJvcikge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocGhvdG9zLmVycm9yKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGxpc3RSZXZpZXdzQnlTbHVnKGdpdGUuc2x1ZykudGhlbigocmV2aWV3cykgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAocmV2aWV3cy5lcnJvcikge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJldmlld3MuZXJyb3IpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiB7IHByb3BzOiB7IGdpdGUsIHBob3RvcywgcmV2aWV3cyB9IH07XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdpdGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=