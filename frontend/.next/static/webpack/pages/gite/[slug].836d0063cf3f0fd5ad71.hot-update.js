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
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      variant: "h3",
      component: "h2",
      style: {
        textAlign: 'center'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
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
        lineNumber: 139,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
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
        lineNumber: 146,
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
        lineNumber: 160,
        columnNumber: 6
      }
    }, carousel('exterieur'))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      variant: "body1",
      component: "p",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 6
      }
    }, gite.texteExterieur), __jsx("hr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 6
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      variant: "h6",
      component: "h3",
      style: {
        marginBottom: '10px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 6
      }
    }, "Liste des equipements :"), __jsx("ul", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 6
      }
    }, gite.equipementExterieur.map(function (equipement) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 8
        }
      }, equipement);
    })))));
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
        lineNumber: 190,
        columnNumber: 3
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
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
        lineNumber: 192,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      variant: "body1",
      component: "p",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 6
      }
    }, gite.texteInterieur), __jsx("hr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 6
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      variant: "h6",
      component: "h3",
      style: {
        marginBottom: '10px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 6
      }
    }, "Liste des equipements :"), __jsx("ul", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 6
      }
    }, gite.equipementInterieur.map(function (equipement) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 8
        }
      }, equipement);
    }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
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
        lineNumber: 216,
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
        lineNumber: 231,
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
        lineNumber: 246,
        columnNumber: 3
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
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
        lineNumber: 248,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
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
        lineNumber: 255,
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
        lineNumber: 269,
        columnNumber: 6
      }
    }, carousel('piscine'))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      variant: "body1",
      component: "p",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 6
      }
    }, gite.textePiscine), __jsx("hr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 6
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      variant: "h6",
      component: "h3",
      style: {
        marginBottom: '10px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 6
      }
    }, "Liste des equipements :"), __jsx("ul", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 6
      }
    }, gite.equipementPiscine.map(function (equipement) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 8
        }
      }, equipement);
    })))));
  };

  var carouselReviews = function carouselReviews() {
    return reviews.map(function (review, i) {
      return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Carousel"].Item, {
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
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
          lineNumber: 301,
          columnNumber: 5
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Carousel"].Caption, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 5
        }
      }, __jsx("p", {
        style: {
          marginTop: '-250px'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 6
        }
      }, review.commentaire), __jsx("hr", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 6
        }
      }), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 6
        }
      }, __jsx(_components_admin_Note__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: review.note,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 7
        }
      })), __jsx("h4", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314,
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
        lineNumber: 320,
        columnNumber: 3
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 4
      }
    }, "Ce que nos clients disent de ce g\xEEte"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Carousel"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
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
        lineNumber: 330,
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
        lineNumber: 331,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 5
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 6
      }
    }, "Tour du g\xEEte en vid\xE9o"), __jsx("div", {
      className: "mt-5",
      dangerouslySetInnerHTML: afficheVideo(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 6
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 5
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345,
        columnNumber: 6
      }
    }, "Ecrivez-nous !"), __jsx(_components_ContactForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346,
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
        lineNumber: 353,
        columnNumber: 3
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354,
        columnNumber: 4
      }
    }, "Calendrier des disponibilit\xE9s"), __jsx("div", {
      dangerouslySetInnerHTML: afficheCalendrier(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355,
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
        lineNumber: 360,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 4
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 5
      }
    }, "Itin\xE9raire conseill\xE9 depuis votre position"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 5
      }
    }, "Affiche la map ici")));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, head(), __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 5
    }
  }, jumbotron(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 6
    }
  }), sectionExterieur(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 6
    }
  }), sectionInterieur(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 6
    }
  }), sectionPiscine(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 6
    }
  }), sectionReviews(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 6
    }
  }), sectionVideoContact(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 6
    }
  }), sectionCalendrier(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2l0ZS9bc2x1Z10uanMiXSwibmFtZXMiOlsiU3dpcGVyQ29yZSIsInVzZSIsIk5hdmlnYXRpb24iLCJQYWdpbmF0aW9uIiwiU2Nyb2xsYmFyIiwiQTExeSIsIkNvbnRyb2xsZXIiLCJUaHVtYnMiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJwYXBlciIsInBhZGRpbmciLCJzcGFjaW5nIiwidGV4dEFsaWduIiwiY29sb3IiLCJwYWxldHRlIiwidGV4dCIsInNlY29uZGFyeSIsIkdpdGUiLCJnaXRlIiwicGhvdG9zIiwicmV2aWV3cyIsImNsYXNzZXMiLCJoZWFkIiwiQVBQX05BTUUiLCJub20iLCJtZGVzYyIsIkRPTUFJTiIsInNsdWciLCJBUEkiLCJhZmZpY2hlQ2FsZW5kcmllciIsIl9faHRtbCIsImNhbGVuZHJpZXJMaW5rIiwiYWZmaWNoZVZpZGVvIiwidmlkZW9MaW5rIiwidXNlU3RhdGUiLCJvcGVuIiwic3RhdGUiLCJzZXRTdGF0ZSIsImhhbmRsZUNsaWNrIiwidGh1bWJzU3dpcGVyRXh0Iiwic2V0VGh1bWJzU3dpcGVyRXh0IiwidGh1bWJzU3dpcGVySW50Iiwic2V0VGh1bWJzU3dpcGVySW50IiwidGh1bWJzU3dpcGVyUGlzIiwic2V0VGh1bWJzU3dpcGVyUGlzIiwianVtYm90cm9uIiwibWFyZ2luVG9wIiwicHJlc0dpdGVTRU8iLCJjYXJvdXNlbCIsInNlY3Rpb24iLCJmaWx0ZXJlZFBob3RvcyIsImZpbHRlciIsInBob3RvIiwic2VjdGlvbkFzc29jaWVlIiwibWFwIiwiaSIsImxpc3RTdHlsZSIsImxvY2F0aW9uIiwiYWx0Iiwic2VjdGlvbkV4dGVyaWV1ciIsInN3aXBlciIsImNsaWNrYWJsZSIsImRyYWdnYWJsZSIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0ZUV4dGVyaWV1ciIsIm1hcmdpbkJvdHRvbSIsImVxdWlwZW1lbnRFeHRlcmlldXIiLCJlcXVpcGVtZW50Iiwic2VjdGlvbkludGVyaWV1ciIsInRleHRlSW50ZXJpZXVyIiwiZXF1aXBlbWVudEludGVyaWV1ciIsImFjdGl2ZUluZGV4Iiwic2VjdGlvblBpc2NpbmUiLCJ0ZXh0ZVBpc2NpbmUiLCJlcXVpcGVtZW50UGlzY2luZSIsImNhcm91c2VsUmV2aWV3cyIsInJldmlldyIsImNvbW1lbnRhaXJlIiwibm90ZSIsImNsaWVudCIsInNlY3Rpb25SZXZpZXdzIiwic2VjdGlvblZpZGVvQ29udGFjdCIsInNlY3Rpb25DYWxlbmRyaWVyIiwic2VjdGlvbk1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUVBO0FBU0FBLDhDQUFVLENBQUNDLEdBQVgsQ0FBZSxDQUFDQyxpREFBRCxFQUFhQyxpREFBYixFQUF5QkMsZ0RBQXpCLEVBQW9DQywyQ0FBcEMsRUFBMENDLGlEQUExQyxFQUFzREMsNkNBQXRELENBQWY7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLDRFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDeENDLFFBQUksRUFBRTtBQUNMQyxjQUFRLEVBQUU7QUFETCxLQURrQztBQUl4Q0MsU0FBSyxFQUFFO0FBQ05DLGFBQU8sRUFBRUosS0FBSyxDQUFDSyxPQUFOLENBQWMsQ0FBZCxDQURIO0FBRU5DLGVBQVMsRUFBRSxRQUZMO0FBR05DLFdBQUssRUFBRVAsS0FBSyxDQUFDUSxPQUFOLENBQWNDLElBQWQsQ0FBbUJDO0FBSHBCO0FBSmlDLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQVdBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQStCO0FBQUE7O0FBQUEsTUFBNUJDLElBQTRCLFFBQTVCQSxJQUE0QjtBQUFBLE1BQXRCQyxNQUFzQixRQUF0QkEsTUFBc0I7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDM0MsTUFBTUMsT0FB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REQsQ0FGRCxDQUREO0FBMkJBLENBbldEOztHQUFNbkUsSTtVQUNXYixTOzs7S0FEWGEsSTs7QUF5WVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dpdGUvW3NsdWddLjgzNmQwMDYzY2YzZjBmZDVhZDcxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0JztcclxuaW1wb3J0IHsgQVBJLCBET01BSU4sIEFQUF9OQU1FIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuLy8gaW1wb3J0IFN3aXBlciBjb3JlIGFuZCByZXF1aXJlZCBtb2R1bGVzXHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xyXG5cclxuaW1wb3J0IFN3aXBlckNvcmUsIHtcclxuXHROYXZpZ2F0aW9uLFxyXG5cdFBhZ2luYXRpb24sXHJcblx0U2Nyb2xsYmFyLFxyXG5cdEExMXksXHJcblx0Q29udHJvbGxlcixcclxuXHRUaHVtYnMsXHJcbn0gZnJvbSAnc3dpcGVyJztcclxuXHJcblN3aXBlckNvcmUudXNlKFtOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uLCBTY3JvbGxiYXIsIEExMXksIENvbnRyb2xsZXIsIFRodW1ic10pO1xyXG5pbXBvcnQge1xyXG5cdGxpc3RHaXRlRGV0YWlscyxcclxuXHRsaXN0R2l0ZXNOb21zLFxyXG5cdGxpc3RQaG90b3NCeU5vbSxcclxufSBmcm9tICcuLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRhY3RGb3JtJztcclxuaW1wb3J0IHsgbGlzdFJldmlld3NCeVNsdWcgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3Jldmlld0FjdGlvbnMnO1xyXG5pbXBvcnQgTm90ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2FkbWluL05vdGUnO1xyXG5pbXBvcnQgeyBQYXBlciwgQ29udGFpbmVyLCBHcmlkLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdGZsZXhHcm93OiAxLFxyXG5cdH0sXHJcblx0cGFwZXI6IHtcclxuXHRcdHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG5cdFx0Y29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXHJcblx0fSxcclxufSkpO1xyXG5cclxuY29uc3QgR2l0ZSA9ICh7IGdpdGUsIHBob3RvcywgcmV2aWV3cyB9KSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IGhlYWQgPSAoKSA9PiAoXHJcblx0XHQ8SGVhZD5cclxuXHRcdFx0PHRpdGxlPlxyXG5cdFx0XHRcdHtBUFBfTkFNRX0gfCB7Z2l0ZS5ub219eycgJ31cclxuXHRcdFx0PC90aXRsZT5cclxuXHRcdFx0PG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2dpdGUubWRlc2N9IC8+XHJcblx0XHRcdDxsaW5rIHJlbD0nY2Fub25pY2FsJyBocmVmPXtgJHtET01BSU59L2dpdGUvJHtnaXRlLnNsdWd9YH0gLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnRpdGxlJyBjb250ZW50PXtgJHtnaXRlLm5vbX0gfCAke0FQUF9OQU1FfWB9IC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzpkZXNjcmlwdGlvbicgY29udGVudD17Z2l0ZS5tZGVzY30gLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnR5cGUnIGNvbnRlbnQ9J3dlYnNpdGUnIC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzp1cmwnIGNvbnRlbnQ9e2Ake0RPTUFJTn0vZ2l0ZS8ke2dpdGUuc2x1Z31gfSAvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6c2l0ZV9uYW1lJyBjb250ZW50PXtgJHtBUFBfTkFNRX1gfSAvPlxyXG5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnNpdGVfbmFtZScgY29udGVudD17QVBQX05BTUV9IC8+XHJcblxyXG5cdFx0XHQ8bWV0YVxyXG5cdFx0XHRcdHByb3BlcnR5PSdvZzppbWFnZSdcclxuXHRcdFx0XHRjb250ZW50PXtgJHtBUEl9L2Jsb2cvcGhvdG8vJHtnaXRlLnNsdWd9YH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PG1ldGFcclxuXHRcdFx0XHRwcm9wZXJ0eT0nb2c6aW1hZ2U6c2VjdXJlX3VybCdcclxuXHRcdFx0XHRjb250ZW50PXtgJHtBUEl9L2dpdGUvcGhvdG8vJHtnaXRlLnNsdWd9YH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOmltYWdlOnR5cGUnIGNvbnRlbnQ9J2ltYWdlL2pwZycgLz5cclxuXHRcdFx0ey8qIDxtZXRhIHByb3BlcnR5PSdmYjphcHBfaWQnIGNvbnRlbnQ9e2Ake0ZCX0FQUF9JRH1gfSAvPiAqL31cclxuXHRcdDwvSGVhZD5cclxuXHQpO1xyXG5cdGNvbnN0IGFmZmljaGVDYWxlbmRyaWVyID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIHsgX19odG1sOiBnaXRlLmNhbGVuZHJpZXJMaW5rIH07XHJcblx0fTtcclxuXHRjb25zdCBhZmZpY2hlVmlkZW8gPSAoKSA9PiB7XHJcblx0XHRyZXR1cm4geyBfX2h0bWw6IGdpdGUudmlkZW9MaW5rIH07XHJcblx0fTtcclxuXHJcblx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG5cdFx0c2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IFt0aHVtYnNTd2lwZXJFeHQsIHNldFRodW1ic1N3aXBlckV4dF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHRjb25zdCBbdGh1bWJzU3dpcGVySW50LCBzZXRUaHVtYnNTd2lwZXJJbnRdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW3RodW1ic1N3aXBlclBpcywgc2V0VGh1bWJzU3dpcGVyUGlzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuXHRjb25zdCBqdW1ib3Ryb24gPSAoKSA9PiAoXHJcblx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0PFBhcGVyXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfVxyXG5cdFx0XHRcdHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcblx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nZGlzcGxheS0zJz5QcsOpc2VudGF0aW9uIGR1IGfDrnRlIHtnaXRlLm5vbX08L2gxPlxyXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT0nbGVhZCc+e2dpdGUucHJlc0dpdGVTRU99PC9wPlxyXG5cdFx0XHRcdDxociBjbGFzc05hbWU9J215LTInIC8+XHJcblx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRJdCB1c2VzIHV0aWxpdHkgY2xhc3NlcyBmb3IgdHlwb2dyYXBoeSBhbmQgc3BhY2luZyB0byBzcGFjZVxyXG5cdFx0XHRcdFx0Y29udGVudCBvdXQgd2l0aGluIHRoZSBsYXJnZXIgY29udGFpbmVyLlxyXG5cdFx0XHRcdDwvcD5cclxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9J2xlYWQnPjwvcD5cclxuXHRcdFx0PC9QYXBlcj5cclxuXHRcdDwvc2VjdGlvbj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBjYXJvdXNlbCA9IChzZWN0aW9uKSA9PiB7XHJcblx0XHRjb25zdCBmaWx0ZXJlZFBob3RvcyA9IHBob3Rvcy5maWx0ZXIoKHBob3RvKSA9PiB7XHJcblx0XHRcdHJldHVybiBwaG90by5zZWN0aW9uQXNzb2NpZWUgPT09IHNlY3Rpb247XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBmaWx0ZXJlZFBob3Rvcy5tYXAoKHBob3RvLCBpKSA9PiAoXHJcblx0XHRcdDxTd2lwZXJTbGlkZVxyXG5cdFx0XHRcdGtleT17YHNsaWRlLSR7aX1gfVxyXG5cdFx0XHRcdHRhZz0nbGknXHJcblx0XHRcdFx0c3R5bGU9e3sgbGlzdFN0eWxlOiAnbm9uZScgfX0+XHJcblx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHQvLyBjbGFzc05hbWU9J2QtYmxvY2sgdy0xMDAnXHJcblx0XHRcdFx0XHRzcmM9e3Bob3RvLmxvY2F0aW9ufVxyXG5cdFx0XHRcdFx0YWx0PXtwaG90by5hbHR9XHJcblx0XHRcdFx0XHRzdHlsZT17eyBsaXN0U3R5bGU6ICdub25lJyB9fVxyXG5cdFx0XHRcdFx0c3JjU2V0XHJcblx0XHRcdFx0XHRsYXlvdXQ9J3Jlc3BvbnNpdmUnXHJcblx0XHRcdFx0XHR3aWR0aD17NTAwfVxyXG5cdFx0XHRcdFx0aGVpZ2h0PXszNzV9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9Td2lwZXJTbGlkZT5cclxuXHRcdCkpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25FeHRlcmlldXIgPSAoKSA9PiAoXHJcblx0XHQ8UGFwZXJcclxuXHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRwYWRkaW5nOiAnMTBweCcsXHJcblx0XHRcdFx0bWFyZ2luVG9wOiAnMTBweCcsXHJcblx0XHRcdH19PlxyXG5cdFx0XHQ8VHlwb2dyYXBoeVxyXG5cdFx0XHRcdHZhcmlhbnQ9J2gzJ1xyXG5cdFx0XHRcdGNvbXBvbmVudD0naDInXHJcblx0XHRcdFx0c3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuXHRcdFx0XHRFeHTDqXJpZXVyXHJcblx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0PEdyaWRcclxuXHRcdFx0XHRjb250YWluZXJcclxuXHRcdFx0XHRkaXJlY3Rpb249J3JvdydcclxuXHRcdFx0XHRqdXN0aWZ5PSdzcGFjZS1hcm91bmQnXHJcblx0XHRcdFx0YWxpZ25JdGVtcz0nZmxleC1zdGFydCdcclxuXHRcdFx0XHRzcGFjaW5nPXszfT5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxyXG5cdFx0XHRcdFx0PFN3aXBlclxyXG5cdFx0XHRcdFx0XHRpZD0nbWFpbkV4dCdcclxuXHRcdFx0XHRcdFx0c3BhY2VCZXR3ZWVuPXswfVxyXG5cdFx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3PXsxfVxyXG5cdFx0XHRcdFx0XHR0aHVtYnM9e3sgc3dpcGVyOiB0aHVtYnNTd2lwZXJFeHQgfX1cclxuXHRcdFx0XHRcdFx0bmF2aWdhdGlvblxyXG5cdFx0XHRcdFx0XHRwYWdpbmF0aW9uPXt7IGNsaWNrYWJsZTogdHJ1ZSB9fVxyXG5cdFx0XHRcdFx0XHRzY3JvbGxiYXI9e3sgZHJhZ2dhYmxlOiB0cnVlIH19XHJcblx0XHRcdFx0XHRcdG9uU3dpcGVyPXtzZXRUaHVtYnNTd2lwZXJFeHR9XHJcblx0XHRcdFx0XHRcdHdhdGNoU2xpZGVzVmlzaWJpbGl0eVxyXG5cdFx0XHRcdFx0XHR3YXRjaFNsaWRlc1Byb2dyZXNzXHJcblx0XHRcdFx0XHRcdG9uU2xpZGVDaGFuZ2U9eygpID0+IGNvbnNvbGUubG9nKCdzbGlkZSBjaGFuZ2UnKX0+XHJcblx0XHRcdFx0XHRcdHtjYXJvdXNlbCgnZXh0ZXJpZXVyJyl9XHJcblx0XHRcdFx0XHQ8L1N3aXBlcj5cclxuXHRcdFx0XHRcdDxTd2lwZXJcclxuXHRcdFx0XHRcdFx0aWQ9J3RodW1ic0V4dCdcclxuXHRcdFx0XHRcdFx0c3BhY2VCZXR3ZWVuPXs1fVxyXG5cdFx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3PXs1fVxyXG5cdFx0XHRcdFx0XHRvblN3aXBlcj17c2V0VGh1bWJzU3dpcGVyRXh0fT5cclxuXHRcdFx0XHRcdFx0e2Nhcm91c2VsKCdleHRlcmlldXInKX1cclxuXHRcdFx0XHRcdDwvU3dpcGVyPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxyXG5cdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnIGNvbXBvbmVudD0ncCc+XHJcblx0XHRcdFx0XHRcdHtnaXRlLnRleHRlRXh0ZXJpZXVyfVxyXG5cdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHQ8VHlwb2dyYXBoeVxyXG5cdFx0XHRcdFx0XHR2YXJpYW50PSdoNidcclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50PSdoMydcclxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMTBweCcgfX0+XHJcblx0XHRcdFx0XHRcdExpc3RlIGRlcyBlcXVpcGVtZW50cyA6XHJcblx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdHtnaXRlLmVxdWlwZW1lbnRFeHRlcmlldXIubWFwKChlcXVpcGVtZW50KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PGxpPntlcXVpcGVtZW50fTwvbGk+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdDwvUGFwZXI+XHJcblx0KTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvbkludGVyaWV1ciA9ICgpID0+IChcclxuXHRcdDxQYXBlciBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG5cdFx0XHQ8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+SW50w6lyaWV1cjwvaDI+XHJcblx0XHRcdDxHcmlkXHJcblx0XHRcdFx0Y29udGFpbmVyXHJcblx0XHRcdFx0ZGlyZWN0aW9uPSdyb3cnXHJcblx0XHRcdFx0anVzdGlmeT0nc3BhY2UtYXJvdW5kJ1xyXG5cdFx0XHRcdGFsaWduSXRlbXM9J2ZsZXgtc3RhcnQnXHJcblx0XHRcdFx0c3BhY2luZz17M30+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cclxuXHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJyBjb21wb25lbnQ9J3AnPlxyXG5cdFx0XHRcdFx0XHR7Z2l0ZS50ZXh0ZUludGVyaWV1cn1cclxuXHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0PFR5cG9ncmFwaHlcclxuXHRcdFx0XHRcdFx0dmFyaWFudD0naDYnXHJcblx0XHRcdFx0XHRcdGNvbXBvbmVudD0naDMnXHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzEwcHgnIH19PlxyXG5cdFx0XHRcdFx0XHRMaXN0ZSBkZXMgZXF1aXBlbWVudHMgOlxyXG5cdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHR7Z2l0ZS5lcXVpcGVtZW50SW50ZXJpZXVyLm1hcCgoZXF1aXBlbWVudCkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxsaT57ZXF1aXBlbWVudH08L2xpPlxyXG5cdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0+XHJcblx0XHRcdFx0XHQ8U3dpcGVyXHJcblx0XHRcdFx0XHRcdGlkPSdtYWluSW50J1xyXG5cdFx0XHRcdFx0XHRzcGFjZUJldHdlZW49ezB9XHJcblx0XHRcdFx0XHRcdHNsaWRlc1BlclZpZXc9ezF9XHJcblx0XHRcdFx0XHRcdHRodW1icz17eyBzd2lwZXI6IHRodW1ic1N3aXBlckludCB9fVxyXG5cdFx0XHRcdFx0XHRuYXZpZ2F0aW9uXHJcblx0XHRcdFx0XHRcdHBhZ2luYXRpb249e3sgY2xpY2thYmxlOiB0cnVlIH19XHJcblx0XHRcdFx0XHRcdHNjcm9sbGJhcj17eyBkcmFnZ2FibGU6IHRydWUgfX1cclxuXHRcdFx0XHRcdFx0b25Td2lwZXI9e3NldFRodW1ic1N3aXBlckludH1cclxuXHRcdFx0XHRcdFx0d2F0Y2hTbGlkZXNWaXNpYmlsaXR5XHJcblx0XHRcdFx0XHRcdHdhdGNoU2xpZGVzUHJvZ3Jlc3NcclxuXHRcdFx0XHRcdFx0b25SZWFjaEVuZD17KHN3aXBlcikgPT4gKHN3aXBlci5hY3RpdmVJbmRleCA9IDApfVxyXG5cdFx0XHRcdFx0XHRvblNsaWRlQ2hhbmdlPXsoKSA9PiBjb25zb2xlLmxvZygnc2xpZGUgY2hhbmdlJyl9PlxyXG5cdFx0XHRcdFx0XHR7Y2Fyb3VzZWwoJ2ludGVyaWV1cicpfVxyXG5cdFx0XHRcdFx0PC9Td2lwZXI+XHJcblx0XHRcdFx0XHQ8U3dpcGVyXHJcblx0XHRcdFx0XHRcdGlkPSd0aHVtYnNJbnQnXHJcblx0XHRcdFx0XHRcdHNwYWNlQmV0d2Vlbj17NX1cclxuXHRcdFx0XHRcdFx0c2xpZGVzUGVyVmlldz17NX1cclxuXHRcdFx0XHRcdFx0d2F0Y2hTbGlkZXNWaXNpYmlsaXR5XHJcblx0XHRcdFx0XHRcdHdhdGNoU2xpZGVzUHJvZ3Jlc3NcclxuXHRcdFx0XHRcdFx0b25Td2lwZXI9e3NldFRodW1ic1N3aXBlckludH0+XHJcblx0XHRcdFx0XHRcdHtjYXJvdXNlbCgnaW50ZXJpZXVyJyl9XHJcblx0XHRcdFx0XHQ8L1N3aXBlcj5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdDwvUGFwZXI+XHJcblx0KTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvblBpc2NpbmUgPSAoKSA9PiAoXHJcblx0XHQ8UGFwZXIgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuXHRcdFx0PGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlBpc2NpbmU8L2gyPlxyXG5cdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdGNvbnRhaW5lclxyXG5cdFx0XHRcdGRpcmVjdGlvbj0ncm93J1xyXG5cdFx0XHRcdGp1c3RpZnk9J3NwYWNlLWFyb3VuZCdcclxuXHRcdFx0XHRhbGlnbkl0ZW1zPSdmbGV4LXN0YXJ0J1xyXG5cdFx0XHRcdHNwYWNpbmc9ezN9PlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0+XHJcblx0XHRcdFx0XHQ8U3dpcGVyXHJcblx0XHRcdFx0XHRcdGlkPSdtYWluUGlzJ1xyXG5cdFx0XHRcdFx0XHRzcGFjZUJldHdlZW49ezB9XHJcblx0XHRcdFx0XHRcdHNsaWRlc1BlclZpZXc9ezF9XHJcblx0XHRcdFx0XHRcdHRodW1icz17eyBzd2lwZXI6IHRodW1ic1N3aXBlclBpcyB9fVxyXG5cdFx0XHRcdFx0XHRuYXZpZ2F0aW9uXHJcblx0XHRcdFx0XHRcdHBhZ2luYXRpb249e3sgY2xpY2thYmxlOiB0cnVlIH19XHJcblx0XHRcdFx0XHRcdHNjcm9sbGJhcj17eyBkcmFnZ2FibGU6IHRydWUgfX1cclxuXHRcdFx0XHRcdFx0b25Td2lwZXI9e3NldFRodW1ic1N3aXBlclBpc31cclxuXHRcdFx0XHRcdFx0d2F0Y2hTbGlkZXNWaXNpYmlsaXR5XHJcblx0XHRcdFx0XHRcdHdhdGNoU2xpZGVzUHJvZ3Jlc3NcclxuXHRcdFx0XHRcdFx0b25TbGlkZUNoYW5nZT17KCkgPT4gY29uc29sZS5sb2coJ3NsaWRlIGNoYW5nZScpfT5cclxuXHRcdFx0XHRcdFx0e2Nhcm91c2VsKCdwaXNjaW5lJyl9XHJcblx0XHRcdFx0XHQ8L1N3aXBlcj5cclxuXHRcdFx0XHRcdDxTd2lwZXJcclxuXHRcdFx0XHRcdFx0aWQ9J3RodW1ic1BpcydcclxuXHRcdFx0XHRcdFx0c3BhY2VCZXR3ZWVuPXs1fVxyXG5cdFx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3PXs1fVxyXG5cdFx0XHRcdFx0XHRvblN3aXBlcj17c2V0VGh1bWJzU3dpcGVyUGlzfT5cclxuXHRcdFx0XHRcdFx0e2Nhcm91c2VsKCdwaXNjaW5lJyl9XHJcblx0XHRcdFx0XHQ8L1N3aXBlcj5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cclxuXHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJyBjb21wb25lbnQ9J3AnPlxyXG5cdFx0XHRcdFx0XHR7Z2l0ZS50ZXh0ZVBpc2NpbmV9XHJcblx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdDxUeXBvZ3JhcGh5XHJcblx0XHRcdFx0XHRcdHZhcmlhbnQ9J2g2J1xyXG5cdFx0XHRcdFx0XHRjb21wb25lbnQ9J2gzJ1xyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fT5cclxuXHRcdFx0XHRcdFx0TGlzdGUgZGVzIGVxdWlwZW1lbnRzIDpcclxuXHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdFx0e2dpdGUuZXF1aXBlbWVudFBpc2NpbmUubWFwKChlcXVpcGVtZW50KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PGxpPntlcXVpcGVtZW50fTwvbGk+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdDwvUGFwZXI+XHJcblx0KTtcclxuXHJcblx0Y29uc3QgY2Fyb3VzZWxSZXZpZXdzID0gKCkgPT5cclxuXHRcdHJldmlld3MubWFwKChyZXZpZXcsIGkpID0+IChcclxuXHRcdFx0PENhcm91c2VsLkl0ZW0ga2V5PXtpfT5cclxuXHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT0nZC1ibG9jayB3LTEwMCdcclxuXHRcdFx0XHRcdHNyYz17Jy9pbWFnZXMvZ3JleS5qcGcnfVxyXG5cdFx0XHRcdFx0YWx0PXsndGV4dGUnfVxyXG5cdFx0XHRcdFx0d2lkdGg9ezIwMDB9XHJcblx0XHRcdFx0XHRoZWlnaHQ9ezgwMH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxDYXJvdXNlbC5DYXB0aW9uPlxyXG5cdFx0XHRcdFx0PHAgc3R5bGU9e3sgbWFyZ2luVG9wOiAnLTI1MHB4JyB9fT57cmV2aWV3LmNvbW1lbnRhaXJlfTwvcD5cclxuXHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdDxOb3RlIHZhbHVlPXtyZXZpZXcubm90ZX0gLz5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDxoND57cmV2aWV3LmNsaWVudH08L2g0PlxyXG5cdFx0XHRcdDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuXHRcdFx0PC9DYXJvdXNlbC5JdGVtPlxyXG5cdFx0KSk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25SZXZpZXdzID0gKCkgPT4gKFxyXG5cdFx0PFBhcGVyIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcblx0XHRcdDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cclxuXHRcdFx0XHRDZSBxdWUgbm9zIGNsaWVudHMgZGlzZW50IGRlIGNlIGfDrnRlXHJcblx0XHRcdDwvaDI+XHJcblxyXG5cdFx0XHQ8Q2Fyb3VzZWw+e2Nhcm91c2VsUmV2aWV3cygpfTwvQ2Fyb3VzZWw+XHJcblx0XHQ8L1BhcGVyPlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25WaWRlb0NvbnRhY3QgPSAoKSA9PiAoXHJcblx0XHQ8UGFwZXIgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuXHRcdFx0PEdyaWRcclxuXHRcdFx0XHRjb250YWluZXJcclxuXHRcdFx0XHRkaXJlY3Rpb249J3JvdydcclxuXHRcdFx0XHRqdXN0aWZ5PSdzcGFjZS1hcm91bmQnXHJcblx0XHRcdFx0YWxpZ25JdGVtcz0nZmxleC1zdGFydCdcclxuXHRcdFx0XHRzcGFjaW5nPXszfT5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxyXG5cdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlRvdXIgZHUgZ8OudGUgZW4gdmlkw6lvPC9oMj5cclxuXHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdtdC01J1xyXG5cdFx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17YWZmaWNoZVZpZGVvKCl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxyXG5cdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPkVjcml2ZXotbm91cyAhPC9oMj5cclxuXHRcdFx0XHRcdDxDb250YWN0Rm9ybSAvPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0PC9QYXBlcj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uQ2FsZW5kcmllciA9ICgpID0+IChcclxuXHRcdDxQYXBlciBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG5cdFx0XHQ8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+Q2FsZW5kcmllciBkZXMgZGlzcG9uaWJpbGl0w6lzPC9oMj5cclxuXHRcdFx0PGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17YWZmaWNoZUNhbGVuZHJpZXIoKX0gLz5cclxuXHRcdDwvUGFwZXI+XHJcblx0KTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvbk1hcCA9ICgpID0+IChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgdGV4dC1jZW50ZXInPlxyXG5cdFx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XHJcblx0XHRcdFx0XHRJdGluw6lyYWlyZSBjb25zZWlsbMOpIGRlcHVpcyB2b3RyZSBwb3NpdGlvblxyXG5cdFx0XHRcdDwvaDI+XHJcblx0XHRcdFx0PHA+QWZmaWNoZSBsYSBtYXAgaWNpPC9wPlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e2hlYWQoKX1cclxuXHRcdFx0PExheW91dD5cclxuXHRcdFx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHRcdFx0ey8qIDxoMj5JbmZvcyBkdSBnaXRlPC9oMj4gKi99XHJcblx0XHRcdFx0XHR7Lyoge0pTT04uc3RyaW5naWZ5KGdpdGUpfSAqL31cclxuXHRcdFx0XHRcdHtqdW1ib3Ryb24oKX1cclxuXHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0e3NlY3Rpb25FeHRlcmlldXIoKX1cclxuXHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0e3NlY3Rpb25JbnRlcmlldXIoKX1cclxuXHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0e3NlY3Rpb25QaXNjaW5lKCl9XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdHsvKiB7Y29uc29sZS5sb2cocmV2aWV3cyl9ICovfVxyXG5cdFx0XHRcdFx0e3NlY3Rpb25SZXZpZXdzKCl9XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdHtzZWN0aW9uVmlkZW9Db250YWN0KCl9XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdHtzZWN0aW9uQ2FsZW5kcmllcigpfVxyXG5cdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHR7c2VjdGlvbk1hcCgpfVxyXG5cdFx0XHRcdDwvQ29udGFpbmVyPlxyXG5cdFx0XHQ8L0xheW91dD5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcblx0Ly9saXN0ZXIgbGVzIG5vbXMgZGUgZ2l0ZXNcclxuXHRjb25zdCBnaXRlc05vbSA9IGF3YWl0IGxpc3RHaXRlc05vbXMoKTtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cGF0aHM6IGdpdGVzTm9tLm1hcCgobm9tKSA9PiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cGFyYW1zOiB7IGlkOiBub20uX2lkLCBzbHVnOiBub20uc2x1ZyB9LFxyXG5cdFx0XHR9O1xyXG5cdFx0fSksXHJcblx0XHRmYWxsYmFjazogZmFsc2UsXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuXHQvLyBjb25zb2xlLmxvZyhxdWVyeSk7XHJcblx0cmV0dXJuIGxpc3RHaXRlRGV0YWlscyhjb250ZXh0LnBhcmFtcy5zbHVnKS50aGVuKChnaXRlKSA9PiB7XHJcblx0XHRpZiAoZ2l0ZS5lcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhnaXRlLmVycm9yKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBsaXN0UGhvdG9zQnlOb20oZ2l0ZS5zbHVnKS50aGVuKChwaG90b3MpID0+IHtcclxuXHRcdFx0XHRpZiAocGhvdG9zLmVycm9yKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhwaG90b3MuZXJyb3IpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gbGlzdFJldmlld3NCeVNsdWcoZ2l0ZS5zbHVnKS50aGVuKChyZXZpZXdzKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXZpZXdzLmVycm9yKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmV2aWV3cy5lcnJvcik7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHsgcHJvcHM6IHsgZ2l0ZSwgcGhvdG9zLCByZXZpZXdzIH0gfTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2l0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==