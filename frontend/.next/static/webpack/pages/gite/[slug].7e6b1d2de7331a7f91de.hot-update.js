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

  var couleurGite = gite.couleur1;

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
        lineNumber: 89,
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
        lineNumber: 90,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      variant: "h2",
      component: "h1",
      style: {
        color: "".concat(gite.couleur1)
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 5
      }
    }, "Pr\xE9sentation du g\xEEte ", gite.nom), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      variant: "subtitle1",
      component: "p",
      style: {
        color: "".concat(gite.couleur1)
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 5
      }
    }, gite.presGiteSEO), __jsx("hr", {
      className: "my-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 5
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 5
      }
    }, gite.texte), __jsx("p", {
      className: "lead",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
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
          lineNumber: 118,
          columnNumber: 4
        }
      }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_6___default.a // className='d-block w-100'
      , {
        src: photo.location,
        alt: photo.alt,
        style: {
          listStyle: 'none'
        },
        layout: "responsive",
        width: 500,
        height: 375,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 5
        }
      }), __jsx("div", {
        "class": "carousel-caption d-none d-md-block",
        style: {
          backgroundColor: 'rgba(72,72,72,0.6'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 5
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h5",
        component: "h5",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 6
        }
      }, photo.titreCarousel), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "body1",
        component: "p",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 6
        }
      }, photo.texteCarousel)));
    });
  };

  var vignette = function vignette(section) {
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
          lineNumber: 152,
          columnNumber: 4
        }
      }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_6___default.a // className='d-block w-100'
      , {
        src: photo.location,
        alt: photo.alt,
        style: {
          listStyle: 'none'
        },
        layout: "responsive",
        width: 500,
        height: 375,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
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
        lineNumber: 170,
        columnNumber: 3
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      variant: "h3",
      component: "h2",
      style: {
        textAlign: 'center',
        marginBottom: '10px',
        backgroundColor: "".concat(gite.couleur1)
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
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
        lineNumber: 185,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
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
        lineNumber: 192,
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
        lineNumber: 206,
        columnNumber: 6
      }
    }, vignette('exterieur'))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      xs: 12,
      style: {
        paddingLeft: '20px',
        paddingRight: '20px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      variant: "body1",
      component: "p",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 6
      }
    }, gite.texteExterieur), __jsx("hr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
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
        lineNumber: 223,
        columnNumber: 6
      }
    }, "Liste des equipements :"), __jsx("ul", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 6
      }
    }, gite.equipementExterieur.map(function (equipement) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
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
        lineNumber: 240,
        columnNumber: 3
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      variant: "h3",
      component: "h2",
      style: {
        textAlign: 'center',
        marginBottom: '10px',
        backgroundColor: "".concat(gite.couleur1)
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
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
        lineNumber: 251,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      xs: 12,
      style: {
        paddingLeft: '20px',
        paddingRight: '20px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      variant: "body1",
      component: "p",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 6
      }
    }, gite.texteInterieur), __jsx("hr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
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
        lineNumber: 266,
        columnNumber: 6
      }
    }, "Liste des equipements :"), __jsx("ul", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 6
      }
    }, gite.equipementInterieur.map(function (equipement) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
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
        lineNumber: 278,
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
        lineNumber: 279,
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
        lineNumber: 294,
        columnNumber: 6
      }
    }, vignette('interieur')))));
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
        lineNumber: 309,
        columnNumber: 3
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      variant: "h3",
      component: "h2",
      style: {
        textAlign: 'center',
        marginBottom: '10px',
        backgroundColor: "".concat(gite.couleur1)
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
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
        lineNumber: 321,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
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
        lineNumber: 328,
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
        lineNumber: 342,
        columnNumber: 6
      }
    }, vignette('piscine'))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      xs: 12,
      style: {
        paddingLeft: '20px',
        paddingRight: '20px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      variant: "body1",
      component: "p",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 6
      }
    }, gite.textePiscine), __jsx("hr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358,
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
        lineNumber: 359,
        columnNumber: 6
      }
    }, "Liste des equipements :"), __jsx("ul", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 6
      }
    }, gite.equipementPiscine.map(function (equipement) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367,
          columnNumber: 8
        }
      }, equipement);
    })))));
  };

  var carouselReviews = function carouselReviews() {
    return reviews.map(function (review, i) {
      return __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__["SwiperSlide"], {
        key: "slide-".concat(i),
        style: {
          border: '1px solid #717171',
          margin: '8px'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377,
          columnNumber: 4
        }
      }, __jsx("div", {
        style: {
          margin: '5px'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380,
          columnNumber: 5
        }
      }, __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381,
          columnNumber: 6
        }
      }, review.commentaire), __jsx("hr", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382,
          columnNumber: 6
        }
      }), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383,
          columnNumber: 6
        }
      }, __jsx(_components_admin_Note__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: review.note,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384,
          columnNumber: 7
        }
      })), __jsx("h4", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386,
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
        lineNumber: 392,
        columnNumber: 3
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      variant: "h3",
      component: "h2",
      style: {
        textAlign: 'center',
        marginBottom: '10px',
        backgroundColor: "".concat(gite.couleur1)
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393,
        columnNumber: 4
      }
    }, "Ce que nos clients disent de ce g\xEEte"), __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__["Swiper"], {
      id: "mainPis",
      style: {
        padding: '10px'
      },
      spaceBetween: 20,
      slidesPerView: 3,
      navigation: true,
      pagination: {
        clickable: true
      },
      scrollbar: {
        draggable: true
      },
      onSwiper: function onSwiper() {
        return console.log('swipe');
      },
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      onSlideChange: function onSlideChange() {
        return console.log('slide change');
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403,
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
        lineNumber: 421,
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
        lineNumber: 422,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 428,
        columnNumber: 5
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 429,
        columnNumber: 6
      }
    }, "Tour du g\xEEte en vid\xE9o"), __jsx("div", {
      className: "mt-5",
      dangerouslySetInnerHTML: afficheVideo(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430,
        columnNumber: 6
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 435,
        columnNumber: 5
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 436,
        columnNumber: 6
      }
    }, "Ecrivez-nous !"), __jsx(_components_ContactForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 437,
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
        lineNumber: 444,
        columnNumber: 3
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 445,
        columnNumber: 4
      }
    }, "Calendrier des disponibilit\xE9s"), __jsx("div", {
      dangerouslySetInnerHTML: afficheCalendrier(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 446,
        columnNumber: 4
      }
    }));
  };

  var sectionMap = function sectionMap() {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Paper"], {
      style: {
        padding: '10px',
        marginTop: '10px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 451,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 452,
        columnNumber: 4
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 453,
        columnNumber: 5
      }
    }, "Itin\xE9raire conseill\xE9 depuis votre position"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 456,
        columnNumber: 5
      }
    }, "Affiche la map ici")));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, head(), __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 5
    }
  }, jumbotron(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 6
    }
  }), sectionExterieur(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 6
    }
  }), sectionInterieur(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 6
    }
  }), sectionPiscine(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 6
    }
  }), sectionReviews(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 6
    }
  }), sectionVideoContact(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 6
    }
  }), sectionCalendrier(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2l0ZS9bc2x1Z10uanMiXSwibmFtZXMiOlsiU3dpcGVyQ29yZSIsInVzZSIsIk5hdmlnYXRpb24iLCJQYWdpbmF0aW9uIiwiU2Nyb2xsYmFyIiwiQTExeSIsIkNvbnRyb2xsZXIiLCJUaHVtYnMiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJwYXBlciIsInBhZGRpbmciLCJzcGFjaW5nIiwidGV4dEFsaWduIiwiY29sb3IiLCJwYWxldHRlIiwidGV4dCIsInNlY29uZGFyeSIsIkdpdGUiLCJnaXRlIiwicGhvdG9zIiwicmV2aWV3cyIsImNsYXNzZXMiLCJoZWFkIiwiQVBQX05BTUUiLCJub20iLCJtZGVzYyIsIkRPTUFJTiIsInNsdWciLCJBUEkiLCJhZmZpY2hlQ2FsZW5kcmllciIsIl9faHRtbCIsImNhbGVuZHJpZXJMaW5rIiwiYWZmaWNoZVZpZGVvIiwidmlkZW9MaW5rIiwidXNlU3RhdGUiLCJvcGVuIiwic3RhdGUiLCJzZXRTdGF0ZSIsImhhbmRsZUNsaWNrIiwiY291bGV1ckdpdGUiLCJjb3VsZXVyMSIsInRodW1ic1N3aXBlckV4dCIsInNldFRodW1ic1N3aXBlckV4dCIsInRodW1ic1N3aXBlckludCIsInNldFRodW1ic1N3aXBlckludCIsInRodW1ic1N3aXBlclBpcyIsInNldFRodW1ic1N3aXBlclBpcyIsImp1bWJvdHJvbiIsIm1hcmdpblRvcCIsInByZXNHaXRlU0VPIiwidGV4dGUiLCJjYXJvdXNlbCIsInNlY3Rpb24iLCJmaWx0ZXJlZFBob3RvcyIsImZpbHRlciIsInBob3RvIiwic2VjdGlvbkFzc29jaWVlIiwibWFwIiwiaSIsImxpc3RTdHlsZSIsImxvY2F0aW9uIiwiYWx0IiwiYmFja2dyb3VuZENvbG9yIiwidGl0cmVDYXJvdXNlbCIsInRleHRlQ2Fyb3VzZWwiLCJ2aWduZXR0ZSIsInNlY3Rpb25FeHRlcmlldXIiLCJtYXJnaW5Cb3R0b20iLCJzd2lwZXIiLCJjbGlja2FibGUiLCJkcmFnZ2FibGUiLCJjb25zb2xlIiwibG9nIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJ0ZXh0ZUV4dGVyaWV1ciIsImVxdWlwZW1lbnRFeHRlcmlldXIiLCJlcXVpcGVtZW50Iiwic2VjdGlvbkludGVyaWV1ciIsInRleHRlSW50ZXJpZXVyIiwiZXF1aXBlbWVudEludGVyaWV1ciIsImFjdGl2ZUluZGV4Iiwic2VjdGlvblBpc2NpbmUiLCJ0ZXh0ZVBpc2NpbmUiLCJlcXVpcGVtZW50UGlzY2luZSIsImNhcm91c2VsUmV2aWV3cyIsInJldmlldyIsImJvcmRlciIsIm1hcmdpbiIsImNvbW1lbnRhaXJlIiwibm90ZSIsImNsaWVudCIsInNlY3Rpb25SZXZpZXdzIiwic2VjdGlvblZpZGVvQ29udGFjdCIsInNlY3Rpb25DYWxlbmRyaWVyIiwic2VjdGlvbk1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUVBO0FBU0FBLDhDQUFVLENBQUNDLEdBQVgsQ0FBZSxDQUFDQyxpREFBRCxFQUFhQyxpREFBYixFQUF5QkMsZ0RBQXpCLEVBQW9DQywyQ0FBcEMsRUFBMENDLGlEQUExQyxFQUFzREMsNkNBQXRELENBQWY7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLDRFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDeENDLFFBQUksRUFBRTtBQUNMQyxjQUFRLEVBQUU7QUFETCxLQURrQztBQUl4Q0MsU0FBSyxFQUFFO0FBQ05DLGFBQU8sRUFBRUosS0FBSyxDQUFDSyxPQUFOLENBQWMsQ0FBZCxDQURIO0FBRU5DLGVBQVMsRUFBRSxRQUZMO0FBR05DLFdBQUssRUFBRVAsS0FBSyxDQUFDUSxPQUFOLENBQWNDLElBQWQsQ0FBbUJDO0FBSHBCO0FBSmlDLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQVdBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQStCO0FBQUE7O0FBQUEsTUFBNUJDLElBQTRCLFFBQTVCQSxJQUE0QjtBQUFBLE1BQXRCQyxNQUFzQixRQUF0QkEsTUFBc0I7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDM0MsTUFBTUMsT0FBTyxHQUFHakIsU0FBUyxFQUF6Qjs7QUFDQSxNQUFNa0IsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxXQUNaLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRUMsZ0RBREYsU0FDZUwsSUFBSSxDQUFDTSxHQURwQixFQUN5QixHQUR6QixDQURELEVBSUM7QUFBTSxVQUFJLEVBQUMsYUFBWDtBQUF5QixhQUFPLEVBQUVOLElBQUksQ0FBQ08sS0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpELEVBS0M7QUFBTSxTQUFHLEVBQUMsV0FBVjtBQUFzQixVQUFJLFlBQUtDLDhDQUFMLG1CQUFvQlIsSUFBSSxDQUFDUyxJQUF6QixDQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTEQsRUFNQztBQUFNLGNBQVEsRUFBQyxVQUFmO0FBQTBCLGFBQU8sWUFBS1QsSUFBSSxDQUFDTSxHQUFWLGdCQUFtQkQsZ0RBQW5CLENBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFORCxFQU9DO0FBQU0sY0FBUSxFQUFDLGdCQUFmO0FBQWdDLGFBQU8sRUFBRUwsSUFBSSxDQUFDTyxLQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUEQsRUFRQztBQUFNLGNBQVEsRUFBQyxTQUFmO0FBQXlCLGFBQU8sRUFBQyxTQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUkQsRUFTQztBQUFNLGNBQVEsRUFBQyxRQUFmO0FBQXdCLGFBQU8sWUFBS0MsOENBQUwsbUJBQW9CUixJQUFJLENBQUNTLElBQXpCLENBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFURCxFQVVDO0FBQU0sY0FBUSxFQUFDLGNBQWY7QUFBOEIsYUFBTyxZQUFLSixnREFBTCxDQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVkQsRUFZQztBQUFNLGNBQVEsRUFBQyxjQUFmO0FBQThCLGFBQU8sRUFBRUEsZ0RBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFaRCxFQWNDO0FBQ0MsY0FBUSxFQUFDLFVBRFY7QUFFQyxhQUFPLFlBQUtLLDJDQUFMLHlCQUF1QlYsSUFBSSxDQUFDUyxJQUE1QixDQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFkRCxFQWtCQztBQUNDLGNBQVEsRUFBQyxxQkFEVjtBQUVDLGFBQU8sWUFBS0MsMkNBQUwseUJBQXVCVixJQUFJLENBQUNTLElBQTVCLENBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWxCRCxFQXNCQztBQUFNLGNBQVEsRUFBQyxlQUFmO0FBQStCLGFBQU8sRUFBQyxXQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BdEJELENBRFk7QUFBQSxHQUFiOztBQTJCQSxNQUFNRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDL0IsV0FBTztBQUFFQyxZQUFNLEVBQUVaLElBQUksQ0FBQ2E7QUFBZixLQUFQO0FBQ0EsR0FGRDs7QUFHQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQzFCLFdBQU87QUFBRUYsWUFBTSxFQUFFWixJQUFJLENBQUNlO0FBQWYsS0FBUDtBQUNBLEdBRkQ7O0FBaEMyQyxrQkFvQ2pCQyxzREFBUSxDQUFDO0FBQUVDLFFBQUksRUFBRTtBQUFSLEdBQUQsQ0FwQ1M7QUFBQSxNQW9DcENDLEtBcENvQztBQUFBLE1Bb0M3QkMsUUFwQzZCOztBQXFDM0MsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN6QkQsWUFBUSxDQUFDO0FBQUVGLFVBQUksRUFBRTtBQUFSLEtBQUQsQ0FBUjtBQUNBLEdBRkQ7O0FBSUEsTUFBTUksV0FBVyxHQUFHckIsSUFBSSxDQUFDc0IsUUFBekI7O0FBekMyQyxtQkEwQ0dOLHNEQUFRLENBQUMsSUFBRCxDQTFDWDtBQUFBLE1BMENwQ08sZUExQ29DO0FBQUEsTUEwQ25CQyxrQkExQ21COztBQUFBLG1CQTJDR1Isc0RBQVEsQ0FBQyxJQUFELENBM0NYO0FBQUEsTUEyQ3BDUyxlQTNDb0M7QUFBQSxNQTJDbkJDLGtCQTNDbUI7O0FBQUEsbUJBNENHVixzREFBUSxDQUFDLElBQUQsQ0E1Q1g7QUFBQSxNQTRDcENXLGVBNUNvQztBQUFBLE1BNENuQkMsa0JBNUNtQjs7QUE4QzNDLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsV0FDakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDLE1BQUMsd0RBQUQ7QUFDQyxlQUFTLEVBQUUxQixPQUFPLENBQUNaLEtBRHBCO0FBRUMsV0FBSyxFQUFFO0FBQUVDLGVBQU8sRUFBRSxNQUFYO0FBQW1Cc0MsaUJBQVMsRUFBRTtBQUE5QixPQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FHQyxNQUFDLDZEQUFEO0FBQ0MsYUFBTyxFQUFDLElBRFQ7QUFFQyxlQUFTLEVBQUMsSUFGWDtBQUdDLFdBQUssRUFBRTtBQUFFbkMsYUFBSyxZQUFLSyxJQUFJLENBQUNzQixRQUFWO0FBQVAsT0FIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUl1QnRCLElBQUksQ0FBQ00sR0FKNUIsQ0FIRCxFQVNDLE1BQUMsNkRBQUQ7QUFDQyxhQUFPLEVBQUMsV0FEVDtBQUVDLGVBQVMsRUFBQyxHQUZYO0FBR0MsV0FBSyxFQUFFO0FBQUVYLGFBQUssWUFBS0ssSUFBSSxDQUFDc0IsUUFBVjtBQUFQLE9BSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlFdEIsSUFBSSxDQUFDK0IsV0FKUCxDQVRELEVBZ0JDO0FBQUksZUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWhCRCxFQWlCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUkvQixJQUFJLENBQUNnQyxLQUFULENBakJELEVBa0JDO0FBQUcsZUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWxCRCxDQURELENBRGlCO0FBQUEsR0FBbEI7O0FBeUJBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLE9BQUQsRUFBYTtBQUM3QixRQUFNQyxjQUFjLEdBQUdsQyxNQUFNLENBQUNtQyxNQUFQLENBQWMsVUFBQ0MsS0FBRCxFQUFXO0FBQy9DLGFBQU9BLEtBQUssQ0FBQ0MsZUFBTixLQUEwQkosT0FBakM7QUFDQSxLQUZzQixDQUF2QjtBQUdBLFdBQU9DLGNBQWMsQ0FBQ0ksR0FBZixDQUFtQixVQUFDRixLQUFELEVBQVFHLENBQVI7QUFBQSxhQUN6QixNQUFDLHdEQUFEO0FBQ0MsV0FBRyxrQkFBV0EsQ0FBWCxDQURKO0FBRUMsV0FBRyxFQUFDLElBRkw7QUFHQyxhQUFLLEVBQUU7QUFBRUMsbUJBQVMsRUFBRTtBQUFiLFNBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUlDLE1BQUMsaURBQUQsQ0FDQztBQUREO0FBRUMsV0FBRyxFQUFFSixLQUFLLENBQUNLLFFBRlo7QUFHQyxXQUFHLEVBQUVMLEtBQUssQ0FBQ00sR0FIWjtBQUlDLGFBQUssRUFBRTtBQUFFRixtQkFBUyxFQUFFO0FBQWIsU0FKUjtBQUtDLGNBQU0sRUFBQyxZQUxSO0FBTUMsYUFBSyxFQUFFLEdBTlI7QUFPQyxjQUFNLEVBQUUsR0FQVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSkQsRUFnQkM7QUFDQyxpQkFBTSxvQ0FEUDtBQUVDLGFBQUssRUFBRTtBQUFFRyx5QkFBZSxFQUFFO0FBQW5CLFNBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUdDLE1BQUMsNkRBQUQ7QUFBWSxlQUFPLEVBQUMsSUFBcEI7QUFBeUIsaUJBQVMsRUFBQyxJQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0VQLEtBQUssQ0FBQ1EsYUFEUixDQUhELEVBTUMsTUFBQyw2REFBRDtBQUFZLGVBQU8sRUFBQyxPQUFwQjtBQUE0QixpQkFBUyxFQUFDLEdBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRVIsS0FBSyxDQUFDUyxhQURSLENBTkQsQ0FoQkQsQ0FEeUI7QUFBQSxLQUFuQixDQUFQO0FBNkJBLEdBakNEOztBQWtDQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDYixPQUFELEVBQWE7QUFDN0IsUUFBTUMsY0FBYyxHQUFHbEMsTUFBTSxDQUFDbUMsTUFBUCxDQUFjLFVBQUNDLEtBQUQsRUFBVztBQUMvQyxhQUFPQSxLQUFLLENBQUNDLGVBQU4sS0FBMEJKLE9BQWpDO0FBQ0EsS0FGc0IsQ0FBdkI7QUFHQSxXQUFPQyxjQUFjLENBQUNJLEdBQWYsQ0FBbUIsVUFBQ0YsS0FBRCxFQUFRRyxDQUFSO0FBQUEsYUFDekIsTUFBQyx3REFBRDtBQUNDLFdBQUcsa0JBQVdBLENBQVgsQ0FESjtBQUVDLFdBQUcsRUFBQyxJQUZMO0FBR0MsYUFBSyxFQUFFO0FBQUVDLG1CQUFTLEVBQUU7QUFBYixTQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FJQyxNQUFDLGlEQUFELENBQ0M7QUFERDtBQUVDLFdBQUcsRUFBRUosS0FBSyxDQUFDSyxRQUZaO0FBR0MsV0FBRyxFQUFFTCxLQUFLLENBQUNNLEdBSFo7QUFJQyxhQUFLLEVBQUU7QUFBRUYsbUJBQVMsRUFBRTtBQUFiLFNBSlI7QUFLQyxjQUFNLEVBQUMsWUFMUjtBQU1DLGFBQUssRUFBRSxHQU5SO0FBT0MsY0FBTSxFQUFFLEdBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUpELENBRHlCO0FBQUEsS0FBbkIsQ0FBUDtBQWdCQSxHQXBCRDs7QUFzQkEsTUFBTU8sZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLFdBQ3hCLE1BQUMsd0RBQUQ7QUFDQyxXQUFLLEVBQUU7QUFDTnhELGVBQU8sRUFBRSxNQURIO0FBRU5zQyxpQkFBUyxFQUFFO0FBRkwsT0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BS0MsTUFBQyw2REFBRDtBQUNDLGFBQU8sRUFBQyxJQURUO0FBRUMsZUFBUyxFQUFDLElBRlg7QUFHQyxXQUFLLEVBQUU7QUFDTnBDLGlCQUFTLEVBQUUsUUFETDtBQUVOdUQsb0JBQVksRUFBRSxNQUZSO0FBR05MLHVCQUFlLFlBQUs1QyxJQUFJLENBQUNzQixRQUFWO0FBSFQsT0FIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxELEVBZUMsTUFBQyx1REFBRDtBQUNDLGVBQVMsTUFEVjtBQUVDLGVBQVMsRUFBQyxLQUZYO0FBR0MsYUFBTyxFQUFDLGNBSFQ7QUFJQyxnQkFBVSxFQUFDLFlBSlo7QUFLQyxhQUFPLEVBQUUsQ0FMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTUMsTUFBQyx1REFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBRSxDQUFmO0FBQWtCLFFBQUUsRUFBRSxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0MsTUFBQyxtREFBRDtBQUNDLFFBQUUsRUFBQyxTQURKO0FBRUMsa0JBQVksRUFBRSxDQUZmO0FBR0MsbUJBQWEsRUFBRSxDQUhoQjtBQUlDLFlBQU0sRUFBRTtBQUFFNEIsY0FBTSxFQUFFM0I7QUFBVixPQUpUO0FBS0MsZ0JBQVUsTUFMWDtBQU1DLGdCQUFVLEVBQUU7QUFBRTRCLGlCQUFTLEVBQUU7QUFBYixPQU5iO0FBT0MsZUFBUyxFQUFFO0FBQUVDLGlCQUFTLEVBQUU7QUFBYixPQVBaO0FBUUMsY0FBUSxFQUFFNUIsa0JBUlg7QUFTQywyQkFBcUIsTUFUdEI7QUFVQyx5QkFBbUIsTUFWcEI7QUFXQyxtQkFBYSxFQUFFO0FBQUEsZUFBTTZCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosQ0FBTjtBQUFBLE9BWGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FZRXJCLFFBQVEsQ0FBQyxXQUFELENBWlYsQ0FERCxFQWVDLE1BQUMsbURBQUQ7QUFDQyxRQUFFLEVBQUMsV0FESjtBQUVDLGtCQUFZLEVBQUUsQ0FGZjtBQUdDLG1CQUFhLEVBQUUsQ0FIaEI7QUFJQyxjQUFRLEVBQUVULGtCQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLRXVCLFFBQVEsQ0FBQyxXQUFELENBTFYsQ0FmRCxDQU5ELEVBNkJDLE1BQUMsdURBQUQ7QUFDQyxVQUFJLE1BREw7QUFFQyxRQUFFLEVBQUUsQ0FGTDtBQUdDLFFBQUUsRUFBRSxFQUhMO0FBSUMsV0FBSyxFQUFFO0FBQUVRLG1CQUFXLEVBQUUsTUFBZjtBQUF1QkMsb0JBQVksRUFBRTtBQUFyQyxPQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLQyxNQUFDLDZEQUFEO0FBQVksYUFBTyxFQUFDLE9BQXBCO0FBQTRCLGVBQVMsRUFBQyxHQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0V4RCxJQUFJLENBQUN5RCxjQURQLENBTEQsRUFRQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUkQsRUFTQyxNQUFDLDZEQUFEO0FBQ0MsYUFBTyxFQUFDLElBRFQ7QUFFQyxlQUFTLEVBQUMsSUFGWDtBQUdDLFdBQUssRUFBRTtBQUFFUixvQkFBWSxFQUFFO0FBQWhCLE9BSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FURCxFQWVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRWpELElBQUksQ0FBQzBELG1CQUFMLENBQXlCbkIsR0FBekIsQ0FBNkIsVUFBQ29CLFVBQUQ7QUFBQSxhQUM3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUtBLFVBQUwsQ0FENkI7QUFBQSxLQUE3QixDQURGLENBZkQsQ0E3QkQsQ0FmRCxDQUR3QjtBQUFBLEdBQXpCOztBQXNFQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsV0FDeEIsTUFBQyx3REFBRDtBQUFPLFdBQUssRUFBRTtBQUFFcEUsZUFBTyxFQUFFLE1BQVg7QUFBbUJzQyxpQkFBUyxFQUFFO0FBQTlCLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDLE1BQUMsNkRBQUQ7QUFDQyxhQUFPLEVBQUMsSUFEVDtBQUVDLGVBQVMsRUFBQyxJQUZYO0FBR0MsV0FBSyxFQUFFO0FBQ05wQyxpQkFBUyxFQUFFLFFBREw7QUFFTnVELG9CQUFZLEVBQUUsTUFGUjtBQUdOTCx1QkFBZSxZQUFLNUMsSUFBSSxDQUFDc0IsUUFBVjtBQUhULE9BSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERCxFQVdDLE1BQUMsdURBQUQ7QUFDQyxlQUFTLE1BRFY7QUFFQyxlQUFTLEVBQUMsS0FGWDtBQUdDLGFBQU8sRUFBQyxjQUhUO0FBSUMsZ0JBQVUsRUFBQyxZQUpaO0FBS0MsYUFBTyxFQUFFLENBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU1DLE1BQUMsdURBQUQ7QUFDQyxVQUFJLE1BREw7QUFFQyxRQUFFLEVBQUUsQ0FGTDtBQUdDLFFBQUUsRUFBRSxFQUhMO0FBSUMsV0FBSyxFQUFFO0FBQUVpQyxtQkFBVyxFQUFFLE1BQWY7QUFBdUJDLG9CQUFZLEVBQUU7QUFBckMsT0FKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BS0MsTUFBQyw2REFBRDtBQUFZLGFBQU8sRUFBQyxPQUFwQjtBQUE0QixlQUFTLEVBQUMsR0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFeEQsSUFBSSxDQUFDNkQsY0FEUCxDQUxELEVBUUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVJELEVBU0MsTUFBQyw2REFBRDtBQUNDLGFBQU8sRUFBQyxJQURUO0FBRUMsZUFBUyxFQUFDLElBRlg7QUFHQyxXQUFLLEVBQUU7QUFBRVosb0JBQVksRUFBRTtBQUFoQixPQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBVEQsRUFlQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0VqRCxJQUFJLENBQUM4RCxtQkFBTCxDQUF5QnZCLEdBQXpCLENBQTZCLFVBQUNvQixVQUFEO0FBQUEsYUFDN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLQSxVQUFMLENBRDZCO0FBQUEsS0FBN0IsQ0FERixDQWZELENBTkQsRUEyQkMsTUFBQyx1REFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBRSxDQUFmO0FBQWtCLFFBQUUsRUFBRSxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0MsTUFBQyxtREFBRDtBQUNDLFFBQUUsRUFBQyxTQURKO0FBRUMsa0JBQVksRUFBRSxDQUZmO0FBR0MsbUJBQWEsRUFBRSxDQUhoQjtBQUlDLFlBQU0sRUFBRTtBQUFFVCxjQUFNLEVBQUV6QjtBQUFWLE9BSlQ7QUFLQyxnQkFBVSxNQUxYO0FBTUMsZ0JBQVUsRUFBRTtBQUFFMEIsaUJBQVMsRUFBRTtBQUFiLE9BTmI7QUFPQyxlQUFTLEVBQUU7QUFBRUMsaUJBQVMsRUFBRTtBQUFiLE9BUFo7QUFRQyxjQUFRLEVBQUUxQixrQkFSWDtBQVNDLDJCQUFxQixNQVR0QjtBQVVDLHlCQUFtQixNQVZwQjtBQVdDLGdCQUFVLEVBQUUsb0JBQUN3QixNQUFEO0FBQUEsZUFBYUEsTUFBTSxDQUFDYSxXQUFQLEdBQXFCLENBQWxDO0FBQUEsT0FYYjtBQVlDLG1CQUFhLEVBQUU7QUFBQSxlQUFNVixPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLENBQU47QUFBQSxPQVpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BYUVyQixRQUFRLENBQUMsV0FBRCxDQWJWLENBREQsRUFnQkMsTUFBQyxtREFBRDtBQUNDLFFBQUUsRUFBQyxXQURKO0FBRUMsa0JBQVksRUFBRSxDQUZmO0FBR0MsbUJBQWEsRUFBRSxDQUhoQjtBQUlDLDJCQUFxQixNQUp0QjtBQUtDLHlCQUFtQixNQUxwQjtBQU1DLGNBQVEsRUFBRVAsa0JBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU9FcUIsUUFBUSxDQUFDLFdBQUQsQ0FQVixDQWhCRCxDQTNCRCxDQVhELENBRHdCO0FBQUEsR0FBekI7O0FBcUVBLE1BQU1pQixjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUEsV0FDdEIsTUFBQyx3REFBRDtBQUFPLFdBQUssRUFBRTtBQUFFeEUsZUFBTyxFQUFFLE1BQVg7QUFBbUJzQyxpQkFBUyxFQUFFO0FBQTlCLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDLE1BQUMsNkRBQUQ7QUFDQyxhQUFPLEVBQUMsSUFEVDtBQUVDLGVBQVMsRUFBQyxJQUZYO0FBR0MsV0FBSyxFQUFFO0FBQ05wQyxpQkFBUyxFQUFFLFFBREw7QUFFTnVELG9CQUFZLEVBQUUsTUFGUjtBQUdOTCx1QkFBZSxZQUFLNUMsSUFBSSxDQUFDc0IsUUFBVjtBQUhULE9BSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxFQVlDLE1BQUMsdURBQUQ7QUFDQyxlQUFTLE1BRFY7QUFFQyxlQUFTLEVBQUMsS0FGWDtBQUdDLGFBQU8sRUFBQyxjQUhUO0FBSUMsZ0JBQVUsRUFBQyxZQUpaO0FBS0MsYUFBTyxFQUFFLENBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU1DLE1BQUMsdURBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUUsQ0FBZjtBQUFrQixRQUFFLEVBQUUsRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDLE1BQUMsbURBQUQ7QUFDQyxRQUFFLEVBQUMsU0FESjtBQUVDLGtCQUFZLEVBQUUsQ0FGZjtBQUdDLG1CQUFhLEVBQUUsQ0FIaEI7QUFJQyxZQUFNLEVBQUU7QUFBRTRCLGNBQU0sRUFBRXZCO0FBQVYsT0FKVDtBQUtDLGdCQUFVLE1BTFg7QUFNQyxnQkFBVSxFQUFFO0FBQUV3QixpQkFBUyxFQUFFO0FBQWIsT0FOYjtBQU9DLGVBQVMsRUFBRTtBQUFFQyxpQkFBUyxFQUFFO0FBQWIsT0FQWjtBQVFDLGNBQVEsRUFBRXhCLGtCQVJYO0FBU0MsMkJBQXFCLE1BVHRCO0FBVUMseUJBQW1CLE1BVnBCO0FBV0MsbUJBQWEsRUFBRTtBQUFBLGVBQU15QixPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLENBQU47QUFBQSxPQVhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BWUVyQixRQUFRLENBQUMsU0FBRCxDQVpWLENBREQsRUFlQyxNQUFDLG1EQUFEO0FBQ0MsUUFBRSxFQUFDLFdBREo7QUFFQyxrQkFBWSxFQUFFLENBRmY7QUFHQyxtQkFBYSxFQUFFLENBSGhCO0FBSUMsY0FBUSxFQUFFTCxrQkFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BS0VtQixRQUFRLENBQUMsU0FBRCxDQUxWLENBZkQsQ0FORCxFQTZCQyxNQUFDLHVEQUFEO0FBQ0MsVUFBSSxNQURMO0FBRUMsUUFBRSxFQUFFLENBRkw7QUFHQyxRQUFFLEVBQUUsRUFITDtBQUlDLFdBQUssRUFBRTtBQUFFUSxtQkFBVyxFQUFFLE1BQWY7QUFBdUJDLG9CQUFZLEVBQUU7QUFBckMsT0FKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BS0MsTUFBQyw2REFBRDtBQUFZLGFBQU8sRUFBQyxPQUFwQjtBQUE0QixlQUFTLEVBQUMsR0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFeEQsSUFBSSxDQUFDaUUsWUFEUCxDQUxELEVBUUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVJELEVBU0MsTUFBQyw2REFBRDtBQUNDLGFBQU8sRUFBQyxJQURUO0FBRUMsZUFBUyxFQUFDLElBRlg7QUFHQyxXQUFLLEVBQUU7QUFBRWhCLG9CQUFZLEVBQUU7QUFBaEIsT0FIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQVRELEVBZUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFakQsSUFBSSxDQUFDa0UsaUJBQUwsQ0FBdUIzQixHQUF2QixDQUEyQixVQUFDb0IsVUFBRDtBQUFBLGFBQzNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBS0EsVUFBTCxDQUQyQjtBQUFBLEtBQTNCLENBREYsQ0FmRCxDQTdCRCxDQVpELENBRHNCO0FBQUEsR0FBdkI7O0FBbUVBLE1BQU1RLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxXQUN2QmpFLE9BQU8sQ0FBQ3FDLEdBQVIsQ0FBWSxVQUFDNkIsTUFBRCxFQUFTNUIsQ0FBVDtBQUFBLGFBQ1gsTUFBQyx3REFBRDtBQUNDLFdBQUcsa0JBQVdBLENBQVgsQ0FESjtBQUVDLGFBQUssRUFBRTtBQUFFNkIsZ0JBQU0sRUFBRSxtQkFBVjtBQUErQkMsZ0JBQU0sRUFBRTtBQUF2QyxTQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FHQztBQUFLLGFBQUssRUFBRTtBQUFFQSxnQkFBTSxFQUFFO0FBQVYsU0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJRixNQUFNLENBQUNHLFdBQVgsQ0FERCxFQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRCxFQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQyxNQUFDLDhEQUFEO0FBQU0sYUFBSyxFQUFFSCxNQUFNLENBQUNJLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERCxDQUhELEVBTUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLSixNQUFNLENBQUNLLE1BQVosQ0FORCxDQUhELENBRFc7QUFBQSxLQUFaLENBRHVCO0FBQUEsR0FBeEI7O0FBZ0JBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxXQUN0QixNQUFDLHdEQUFEO0FBQU8sV0FBSyxFQUFFO0FBQUVsRixlQUFPLEVBQUUsTUFBWDtBQUFtQnNDLGlCQUFTLEVBQUU7QUFBOUIsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0MsTUFBQyw2REFBRDtBQUNDLGFBQU8sRUFBQyxJQURUO0FBRUMsZUFBUyxFQUFDLElBRlg7QUFHQyxXQUFLLEVBQUU7QUFDTnBDLGlCQUFTLEVBQUUsUUFETDtBQUVOdUQsb0JBQVksRUFBRSxNQUZSO0FBR05MLHVCQUFlLFlBQUs1QyxJQUFJLENBQUNzQixRQUFWO0FBSFQsT0FIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlEQURELEVBV0MsTUFBQyxtREFBRDtBQUNDLFFBQUUsRUFBQyxTQURKO0FBRUMsV0FBSyxFQUFFO0FBQUU5QixlQUFPLEVBQUU7QUFBWCxPQUZSO0FBR0Msa0JBQVksRUFBRSxFQUhmO0FBSUMsbUJBQWEsRUFBRSxDQUpoQjtBQUtDLGdCQUFVLE1BTFg7QUFNQyxnQkFBVSxFQUFFO0FBQUUyRCxpQkFBUyxFQUFFO0FBQWIsT0FOYjtBQU9DLGVBQVMsRUFBRTtBQUFFQyxpQkFBUyxFQUFFO0FBQWIsT0FQWjtBQVFDLGNBQVEsRUFBRTtBQUFBLGVBQU1DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosQ0FBTjtBQUFBLE9BUlg7QUFTQywyQkFBcUIsTUFUdEI7QUFVQyx5QkFBbUIsTUFWcEI7QUFXQyxtQkFBYSxFQUFFO0FBQUEsZUFBTUQsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixDQUFOO0FBQUEsT0FYaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVlFYSxlQUFlLEVBWmpCLENBWEQsQ0FEc0I7QUFBQSxHQUF2Qjs7QUE2QkEsTUFBTVEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQjtBQUFBLFdBQzNCLE1BQUMsd0RBQUQ7QUFBTyxXQUFLLEVBQUU7QUFBRW5GLGVBQU8sRUFBRSxNQUFYO0FBQW1Cc0MsaUJBQVMsRUFBRTtBQUE5QixPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQyxNQUFDLHVEQUFEO0FBQ0MsZUFBUyxNQURWO0FBRUMsZUFBUyxFQUFDLEtBRlg7QUFHQyxhQUFPLEVBQUMsY0FIVDtBQUlDLGdCQUFVLEVBQUMsWUFKWjtBQUtDLGFBQU8sRUFBRSxDQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FNQyxNQUFDLHVEQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsUUFBRSxFQUFFLENBQWY7QUFBa0IsUUFBRSxFQUFFLEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQztBQUFJLGVBQVMsRUFBQyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBREQsRUFFQztBQUNDLGVBQVMsRUFBQyxNQURYO0FBRUMsNkJBQXVCLEVBQUVoQixZQUFZLEVBRnRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRCxDQU5ELEVBYUMsTUFBQyx1REFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBRSxDQUFmO0FBQWtCLFFBQUUsRUFBRSxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFBSSxlQUFTLEVBQUMsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURELEVBRUMsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkQsQ0FiRCxDQURELENBRDJCO0FBQUEsR0FBNUI7O0FBdUJBLE1BQU04RCxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsV0FDekIsTUFBQyx3REFBRDtBQUFPLFdBQUssRUFBRTtBQUFFcEYsZUFBTyxFQUFFLE1BQVg7QUFBbUJzQyxpQkFBUyxFQUFFO0FBQTlCLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDO0FBQUksZUFBUyxFQUFDLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQ0FERCxFQUVDO0FBQUssNkJBQXVCLEVBQUVuQixpQkFBaUIsRUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZELENBRHlCO0FBQUEsR0FBMUI7O0FBT0EsTUFBTWtFLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsV0FDbEIsTUFBQyx3REFBRDtBQUFPLFdBQUssRUFBRTtBQUFFckYsZUFBTyxFQUFFLE1BQVg7QUFBbUJzQyxpQkFBUyxFQUFFO0FBQTlCLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQztBQUFJLGVBQVMsRUFBQyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMERBREQsRUFJQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUpELENBREQsQ0FEa0I7QUFBQSxHQUFuQjs7QUFXQSxTQUNDLG1FQUNFMUIsSUFBSSxFQUROLEVBRUMsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0V5QixTQUFTLEVBSFgsRUFJQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkQsRUFLRW1CLGdCQUFnQixFQUxsQixFQU1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORCxFQU9FWSxnQkFBZ0IsRUFQbEIsRUFRQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkQsRUFTRUksY0FBYyxFQVRoQixFQVVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRCxFQVlFVSxjQUFjLEVBWmhCLEVBYUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJELEVBY0VDLG1CQUFtQixFQWRyQixFQWVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmRCxFQWdCRUMsaUJBQWlCLEVBaEJuQixFQWlCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJELEVBa0JFQyxVQUFVLEVBbEJaLENBREQsQ0FGRCxDQUREO0FBMkJBLENBOWJEOztHQUFNOUUsSTtVQUNXYixTOzs7S0FEWGEsSTs7QUFvZVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dpdGUvW3NsdWddLjdlNmIxZDJkZTczMzFhN2Y5MWRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0JztcclxuaW1wb3J0IHsgQVBJLCBET01BSU4sIEFQUF9OQU1FIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuLy8gaW1wb3J0IFN3aXBlciBjb3JlIGFuZCByZXF1aXJlZCBtb2R1bGVzXHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xyXG5cclxuaW1wb3J0IFN3aXBlckNvcmUsIHtcclxuXHROYXZpZ2F0aW9uLFxyXG5cdFBhZ2luYXRpb24sXHJcblx0U2Nyb2xsYmFyLFxyXG5cdEExMXksXHJcblx0Q29udHJvbGxlcixcclxuXHRUaHVtYnMsXHJcbn0gZnJvbSAnc3dpcGVyJztcclxuXHJcblN3aXBlckNvcmUudXNlKFtOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uLCBTY3JvbGxiYXIsIEExMXksIENvbnRyb2xsZXIsIFRodW1ic10pO1xyXG5pbXBvcnQge1xyXG5cdGxpc3RHaXRlRGV0YWlscyxcclxuXHRsaXN0R2l0ZXNOb21zLFxyXG5cdGxpc3RQaG90b3NCeU5vbSxcclxufSBmcm9tICcuLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRhY3RGb3JtJztcclxuaW1wb3J0IHsgbGlzdFJldmlld3NCeVNsdWcgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3Jldmlld0FjdGlvbnMnO1xyXG5pbXBvcnQgTm90ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2FkbWluL05vdGUnO1xyXG5pbXBvcnQgeyBQYXBlciwgQ29udGFpbmVyLCBHcmlkLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdGZsZXhHcm93OiAxLFxyXG5cdH0sXHJcblx0cGFwZXI6IHtcclxuXHRcdHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG5cdFx0Y29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXHJcblx0fSxcclxufSkpO1xyXG5cclxuY29uc3QgR2l0ZSA9ICh7IGdpdGUsIHBob3RvcywgcmV2aWV3cyB9KSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IGhlYWQgPSAoKSA9PiAoXHJcblx0XHQ8SGVhZD5cclxuXHRcdFx0PHRpdGxlPlxyXG5cdFx0XHRcdHtBUFBfTkFNRX0gfCB7Z2l0ZS5ub219eycgJ31cclxuXHRcdFx0PC90aXRsZT5cclxuXHRcdFx0PG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2dpdGUubWRlc2N9IC8+XHJcblx0XHRcdDxsaW5rIHJlbD0nY2Fub25pY2FsJyBocmVmPXtgJHtET01BSU59L2dpdGUvJHtnaXRlLnNsdWd9YH0gLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnRpdGxlJyBjb250ZW50PXtgJHtnaXRlLm5vbX0gfCAke0FQUF9OQU1FfWB9IC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzpkZXNjcmlwdGlvbicgY29udGVudD17Z2l0ZS5tZGVzY30gLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnR5cGUnIGNvbnRlbnQ9J3dlYnNpdGUnIC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzp1cmwnIGNvbnRlbnQ9e2Ake0RPTUFJTn0vZ2l0ZS8ke2dpdGUuc2x1Z31gfSAvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6c2l0ZV9uYW1lJyBjb250ZW50PXtgJHtBUFBfTkFNRX1gfSAvPlxyXG5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnNpdGVfbmFtZScgY29udGVudD17QVBQX05BTUV9IC8+XHJcblxyXG5cdFx0XHQ8bWV0YVxyXG5cdFx0XHRcdHByb3BlcnR5PSdvZzppbWFnZSdcclxuXHRcdFx0XHRjb250ZW50PXtgJHtBUEl9L2Jsb2cvcGhvdG8vJHtnaXRlLnNsdWd9YH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PG1ldGFcclxuXHRcdFx0XHRwcm9wZXJ0eT0nb2c6aW1hZ2U6c2VjdXJlX3VybCdcclxuXHRcdFx0XHRjb250ZW50PXtgJHtBUEl9L2dpdGUvcGhvdG8vJHtnaXRlLnNsdWd9YH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOmltYWdlOnR5cGUnIGNvbnRlbnQ9J2ltYWdlL2pwZycgLz5cclxuXHRcdFx0ey8qIDxtZXRhIHByb3BlcnR5PSdmYjphcHBfaWQnIGNvbnRlbnQ9e2Ake0ZCX0FQUF9JRH1gfSAvPiAqL31cclxuXHRcdDwvSGVhZD5cclxuXHQpO1xyXG5cdGNvbnN0IGFmZmljaGVDYWxlbmRyaWVyID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIHsgX19odG1sOiBnaXRlLmNhbGVuZHJpZXJMaW5rIH07XHJcblx0fTtcclxuXHRjb25zdCBhZmZpY2hlVmlkZW8gPSAoKSA9PiB7XHJcblx0XHRyZXR1cm4geyBfX2h0bWw6IGdpdGUudmlkZW9MaW5rIH07XHJcblx0fTtcclxuXHJcblx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG5cdFx0c2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNvdWxldXJHaXRlID0gZ2l0ZS5jb3VsZXVyMTtcclxuXHRjb25zdCBbdGh1bWJzU3dpcGVyRXh0LCBzZXRUaHVtYnNTd2lwZXJFeHRdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW3RodW1ic1N3aXBlckludCwgc2V0VGh1bWJzU3dpcGVySW50XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFt0aHVtYnNTd2lwZXJQaXMsIHNldFRodW1ic1N3aXBlclBpc10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcblx0Y29uc3QganVtYm90cm9uID0gKCkgPT4gKFxyXG5cdFx0PHNlY3Rpb24+XHJcblx0XHRcdDxQYXBlclxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn1cclxuXHRcdFx0XHRzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG5cdFx0XHRcdDxUeXBvZ3JhcGh5XHJcblx0XHRcdFx0XHR2YXJpYW50PSdoMidcclxuXHRcdFx0XHRcdGNvbXBvbmVudD0naDEnXHJcblx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogYCR7Z2l0ZS5jb3VsZXVyMX1gIH19PlxyXG5cdFx0XHRcdFx0UHLDqXNlbnRhdGlvbiBkdSBnw650ZSB7Z2l0ZS5ub219XHJcblx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdDxUeXBvZ3JhcGh5XHJcblx0XHRcdFx0XHR2YXJpYW50PSdzdWJ0aXRsZTEnXHJcblx0XHRcdFx0XHRjb21wb25lbnQ9J3AnXHJcblx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogYCR7Z2l0ZS5jb3VsZXVyMX1gIH19PlxyXG5cdFx0XHRcdFx0e2dpdGUucHJlc0dpdGVTRU99XHJcblx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cclxuXHRcdFx0XHQ8aHIgY2xhc3NOYW1lPSdteS0yJyAvPlxyXG5cdFx0XHRcdDxwPntnaXRlLnRleHRlfTwvcD5cclxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9J2xlYWQnPjwvcD5cclxuXHRcdFx0PC9QYXBlcj5cclxuXHRcdDwvc2VjdGlvbj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBjYXJvdXNlbCA9IChzZWN0aW9uKSA9PiB7XHJcblx0XHRjb25zdCBmaWx0ZXJlZFBob3RvcyA9IHBob3Rvcy5maWx0ZXIoKHBob3RvKSA9PiB7XHJcblx0XHRcdHJldHVybiBwaG90by5zZWN0aW9uQXNzb2NpZWUgPT09IHNlY3Rpb247XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBmaWx0ZXJlZFBob3Rvcy5tYXAoKHBob3RvLCBpKSA9PiAoXHJcblx0XHRcdDxTd2lwZXJTbGlkZVxyXG5cdFx0XHRcdGtleT17YHNsaWRlLSR7aX1gfVxyXG5cdFx0XHRcdHRhZz0nbGknXHJcblx0XHRcdFx0c3R5bGU9e3sgbGlzdFN0eWxlOiAnbm9uZScgfX0+XHJcblx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHQvLyBjbGFzc05hbWU9J2QtYmxvY2sgdy0xMDAnXHJcblx0XHRcdFx0XHRzcmM9e3Bob3RvLmxvY2F0aW9ufVxyXG5cdFx0XHRcdFx0YWx0PXtwaG90by5hbHR9XHJcblx0XHRcdFx0XHRzdHlsZT17eyBsaXN0U3R5bGU6ICdub25lJyB9fVxyXG5cdFx0XHRcdFx0bGF5b3V0PSdyZXNwb25zaXZlJ1xyXG5cdFx0XHRcdFx0d2lkdGg9ezUwMH1cclxuXHRcdFx0XHRcdGhlaWdodD17Mzc1fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0ey8qIDxzcGFuIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBib3R0b206ICczMHB4JyB9fT5cclxuXHRcdFx0XHRcdFRleHRlXHJcblx0XHRcdFx0PC9zcGFuPiAqL31cclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRjbGFzcz0nY2Fyb3VzZWwtY2FwdGlvbiBkLW5vbmUgZC1tZC1ibG9jaydcclxuXHRcdFx0XHRcdHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNzIsNzIsNzIsMC42JyB9fT5cclxuXHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1JyBjb21wb25lbnQ9J2g1Jz5cclxuXHRcdFx0XHRcdFx0e3Bob3RvLnRpdHJlQ2Fyb3VzZWx9XHJcblx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MScgY29tcG9uZW50PSdwJz5cclxuXHRcdFx0XHRcdFx0e3Bob3RvLnRleHRlQ2Fyb3VzZWx9XHJcblx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvU3dpcGVyU2xpZGU+XHJcblx0XHQpKTtcclxuXHR9O1xyXG5cdGNvbnN0IHZpZ25ldHRlID0gKHNlY3Rpb24pID0+IHtcclxuXHRcdGNvbnN0IGZpbHRlcmVkUGhvdG9zID0gcGhvdG9zLmZpbHRlcigocGhvdG8pID0+IHtcclxuXHRcdFx0cmV0dXJuIHBob3RvLnNlY3Rpb25Bc3NvY2llZSA9PT0gc2VjdGlvbjtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGZpbHRlcmVkUGhvdG9zLm1hcCgocGhvdG8sIGkpID0+IChcclxuXHRcdFx0PFN3aXBlclNsaWRlXHJcblx0XHRcdFx0a2V5PXtgc2xpZGUtJHtpfWB9XHJcblx0XHRcdFx0dGFnPSdsaSdcclxuXHRcdFx0XHRzdHlsZT17eyBsaXN0U3R5bGU6ICdub25lJyB9fT5cclxuXHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdC8vIGNsYXNzTmFtZT0nZC1ibG9jayB3LTEwMCdcclxuXHRcdFx0XHRcdHNyYz17cGhvdG8ubG9jYXRpb259XHJcblx0XHRcdFx0XHRhbHQ9e3Bob3RvLmFsdH1cclxuXHRcdFx0XHRcdHN0eWxlPXt7IGxpc3RTdHlsZTogJ25vbmUnIH19XHJcblx0XHRcdFx0XHRsYXlvdXQ9J3Jlc3BvbnNpdmUnXHJcblx0XHRcdFx0XHR3aWR0aD17NTAwfVxyXG5cdFx0XHRcdFx0aGVpZ2h0PXszNzV9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9Td2lwZXJTbGlkZT5cclxuXHRcdCkpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25FeHRlcmlldXIgPSAoKSA9PiAoXHJcblx0XHQ8UGFwZXJcclxuXHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRwYWRkaW5nOiAnMTBweCcsXHJcblx0XHRcdFx0bWFyZ2luVG9wOiAnMTBweCcsXHJcblx0XHRcdH19PlxyXG5cdFx0XHQ8VHlwb2dyYXBoeVxyXG5cdFx0XHRcdHZhcmlhbnQ9J2gzJ1xyXG5cdFx0XHRcdGNvbXBvbmVudD0naDInXHJcblx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHRtYXJnaW5Cb3R0b206ICcxMHB4JyxcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogYCR7Z2l0ZS5jb3VsZXVyMX1gLFxyXG5cdFx0XHRcdH19PlxyXG5cdFx0XHRcdEV4dMOpcmlldXJcclxuXHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdGNvbnRhaW5lclxyXG5cdFx0XHRcdGRpcmVjdGlvbj0ncm93J1xyXG5cdFx0XHRcdGp1c3RpZnk9J3NwYWNlLWFyb3VuZCdcclxuXHRcdFx0XHRhbGlnbkl0ZW1zPSdmbGV4LXN0YXJ0J1xyXG5cdFx0XHRcdHNwYWNpbmc9ezN9PlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0+XHJcblx0XHRcdFx0XHQ8U3dpcGVyXHJcblx0XHRcdFx0XHRcdGlkPSdtYWluRXh0J1xyXG5cdFx0XHRcdFx0XHRzcGFjZUJldHdlZW49ezB9XHJcblx0XHRcdFx0XHRcdHNsaWRlc1BlclZpZXc9ezF9XHJcblx0XHRcdFx0XHRcdHRodW1icz17eyBzd2lwZXI6IHRodW1ic1N3aXBlckV4dCB9fVxyXG5cdFx0XHRcdFx0XHRuYXZpZ2F0aW9uXHJcblx0XHRcdFx0XHRcdHBhZ2luYXRpb249e3sgY2xpY2thYmxlOiB0cnVlIH19XHJcblx0XHRcdFx0XHRcdHNjcm9sbGJhcj17eyBkcmFnZ2FibGU6IHRydWUgfX1cclxuXHRcdFx0XHRcdFx0b25Td2lwZXI9e3NldFRodW1ic1N3aXBlckV4dH1cclxuXHRcdFx0XHRcdFx0d2F0Y2hTbGlkZXNWaXNpYmlsaXR5XHJcblx0XHRcdFx0XHRcdHdhdGNoU2xpZGVzUHJvZ3Jlc3NcclxuXHRcdFx0XHRcdFx0b25TbGlkZUNoYW5nZT17KCkgPT4gY29uc29sZS5sb2coJ3NsaWRlIGNoYW5nZScpfT5cclxuXHRcdFx0XHRcdFx0e2Nhcm91c2VsKCdleHRlcmlldXInKX1cclxuXHRcdFx0XHRcdDwvU3dpcGVyPlxyXG5cdFx0XHRcdFx0PFN3aXBlclxyXG5cdFx0XHRcdFx0XHRpZD0ndGh1bWJzRXh0J1xyXG5cdFx0XHRcdFx0XHRzcGFjZUJldHdlZW49ezV9XHJcblx0XHRcdFx0XHRcdHNsaWRlc1BlclZpZXc9ezV9XHJcblx0XHRcdFx0XHRcdG9uU3dpcGVyPXtzZXRUaHVtYnNTd2lwZXJFeHR9PlxyXG5cdFx0XHRcdFx0XHR7dmlnbmV0dGUoJ2V4dGVyaWV1cicpfVxyXG5cdFx0XHRcdFx0PC9Td2lwZXI+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkXHJcblx0XHRcdFx0XHRpdGVtXHJcblx0XHRcdFx0XHRtZD17Nn1cclxuXHRcdFx0XHRcdHhzPXsxMn1cclxuXHRcdFx0XHRcdHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnMjBweCcsIHBhZGRpbmdSaWdodDogJzIwcHgnIH19PlxyXG5cdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnIGNvbXBvbmVudD0ncCc+XHJcblx0XHRcdFx0XHRcdHtnaXRlLnRleHRlRXh0ZXJpZXVyfVxyXG5cdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHQ8VHlwb2dyYXBoeVxyXG5cdFx0XHRcdFx0XHR2YXJpYW50PSdoNidcclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50PSdoMydcclxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMTBweCcgfX0+XHJcblx0XHRcdFx0XHRcdExpc3RlIGRlcyBlcXVpcGVtZW50cyA6XHJcblx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdHtnaXRlLmVxdWlwZW1lbnRFeHRlcmlldXIubWFwKChlcXVpcGVtZW50KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PGxpPntlcXVpcGVtZW50fTwvbGk+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdDwvUGFwZXI+XHJcblx0KTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvbkludGVyaWV1ciA9ICgpID0+IChcclxuXHRcdDxQYXBlciBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG5cdFx0XHQ8VHlwb2dyYXBoeVxyXG5cdFx0XHRcdHZhcmlhbnQ9J2gzJ1xyXG5cdFx0XHRcdGNvbXBvbmVudD0naDInXHJcblx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHRtYXJnaW5Cb3R0b206ICcxMHB4JyxcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogYCR7Z2l0ZS5jb3VsZXVyMX1gLFxyXG5cdFx0XHRcdH19PlxyXG5cdFx0XHRcdEludMOpcmlldXJcclxuXHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdGNvbnRhaW5lclxyXG5cdFx0XHRcdGRpcmVjdGlvbj0ncm93J1xyXG5cdFx0XHRcdGp1c3RpZnk9J3NwYWNlLWFyb3VuZCdcclxuXHRcdFx0XHRhbGlnbkl0ZW1zPSdmbGV4LXN0YXJ0J1xyXG5cdFx0XHRcdHNwYWNpbmc9ezN9PlxyXG5cdFx0XHRcdDxHcmlkXHJcblx0XHRcdFx0XHRpdGVtXHJcblx0XHRcdFx0XHRtZD17Nn1cclxuXHRcdFx0XHRcdHhzPXsxMn1cclxuXHRcdFx0XHRcdHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnMjBweCcsIHBhZGRpbmdSaWdodDogJzIwcHgnIH19PlxyXG5cdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnIGNvbXBvbmVudD0ncCc+XHJcblx0XHRcdFx0XHRcdHtnaXRlLnRleHRlSW50ZXJpZXVyfVxyXG5cdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHQ8VHlwb2dyYXBoeVxyXG5cdFx0XHRcdFx0XHR2YXJpYW50PSdoNidcclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50PSdoMydcclxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMTBweCcgfX0+XHJcblx0XHRcdFx0XHRcdExpc3RlIGRlcyBlcXVpcGVtZW50cyA6XHJcblx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdHtnaXRlLmVxdWlwZW1lbnRJbnRlcmlldXIubWFwKChlcXVpcGVtZW50KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PGxpPntlcXVpcGVtZW50fTwvbGk+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cclxuXHRcdFx0XHRcdDxTd2lwZXJcclxuXHRcdFx0XHRcdFx0aWQ9J21haW5JbnQnXHJcblx0XHRcdFx0XHRcdHNwYWNlQmV0d2Vlbj17MH1cclxuXHRcdFx0XHRcdFx0c2xpZGVzUGVyVmlldz17MX1cclxuXHRcdFx0XHRcdFx0dGh1bWJzPXt7IHN3aXBlcjogdGh1bWJzU3dpcGVySW50IH19XHJcblx0XHRcdFx0XHRcdG5hdmlnYXRpb25cclxuXHRcdFx0XHRcdFx0cGFnaW5hdGlvbj17eyBjbGlja2FibGU6IHRydWUgfX1cclxuXHRcdFx0XHRcdFx0c2Nyb2xsYmFyPXt7IGRyYWdnYWJsZTogdHJ1ZSB9fVxyXG5cdFx0XHRcdFx0XHRvblN3aXBlcj17c2V0VGh1bWJzU3dpcGVySW50fVxyXG5cdFx0XHRcdFx0XHR3YXRjaFNsaWRlc1Zpc2liaWxpdHlcclxuXHRcdFx0XHRcdFx0d2F0Y2hTbGlkZXNQcm9ncmVzc1xyXG5cdFx0XHRcdFx0XHRvblJlYWNoRW5kPXsoc3dpcGVyKSA9PiAoc3dpcGVyLmFjdGl2ZUluZGV4ID0gMCl9XHJcblx0XHRcdFx0XHRcdG9uU2xpZGVDaGFuZ2U9eygpID0+IGNvbnNvbGUubG9nKCdzbGlkZSBjaGFuZ2UnKX0+XHJcblx0XHRcdFx0XHRcdHtjYXJvdXNlbCgnaW50ZXJpZXVyJyl9XHJcblx0XHRcdFx0XHQ8L1N3aXBlcj5cclxuXHRcdFx0XHRcdDxTd2lwZXJcclxuXHRcdFx0XHRcdFx0aWQ9J3RodW1ic0ludCdcclxuXHRcdFx0XHRcdFx0c3BhY2VCZXR3ZWVuPXs1fVxyXG5cdFx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3PXs1fVxyXG5cdFx0XHRcdFx0XHR3YXRjaFNsaWRlc1Zpc2liaWxpdHlcclxuXHRcdFx0XHRcdFx0d2F0Y2hTbGlkZXNQcm9ncmVzc1xyXG5cdFx0XHRcdFx0XHRvblN3aXBlcj17c2V0VGh1bWJzU3dpcGVySW50fT5cclxuXHRcdFx0XHRcdFx0e3ZpZ25ldHRlKCdpbnRlcmlldXInKX1cclxuXHRcdFx0XHRcdDwvU3dpcGVyPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0PC9QYXBlcj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uUGlzY2luZSA9ICgpID0+IChcclxuXHRcdDxQYXBlciBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG5cdFx0XHQ8VHlwb2dyYXBoeVxyXG5cdFx0XHRcdHZhcmlhbnQ9J2gzJ1xyXG5cdFx0XHRcdGNvbXBvbmVudD0naDInXHJcblx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHRtYXJnaW5Cb3R0b206ICcxMHB4JyxcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogYCR7Z2l0ZS5jb3VsZXVyMX1gLFxyXG5cdFx0XHRcdH19PlxyXG5cdFx0XHRcdFBpc2NpbmVcclxuXHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cclxuXHRcdFx0PEdyaWRcclxuXHRcdFx0XHRjb250YWluZXJcclxuXHRcdFx0XHRkaXJlY3Rpb249J3JvdydcclxuXHRcdFx0XHRqdXN0aWZ5PSdzcGFjZS1hcm91bmQnXHJcblx0XHRcdFx0YWxpZ25JdGVtcz0nZmxleC1zdGFydCdcclxuXHRcdFx0XHRzcGFjaW5nPXszfT5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxyXG5cdFx0XHRcdFx0PFN3aXBlclxyXG5cdFx0XHRcdFx0XHRpZD0nbWFpblBpcydcclxuXHRcdFx0XHRcdFx0c3BhY2VCZXR3ZWVuPXswfVxyXG5cdFx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3PXsxfVxyXG5cdFx0XHRcdFx0XHR0aHVtYnM9e3sgc3dpcGVyOiB0aHVtYnNTd2lwZXJQaXMgfX1cclxuXHRcdFx0XHRcdFx0bmF2aWdhdGlvblxyXG5cdFx0XHRcdFx0XHRwYWdpbmF0aW9uPXt7IGNsaWNrYWJsZTogdHJ1ZSB9fVxyXG5cdFx0XHRcdFx0XHRzY3JvbGxiYXI9e3sgZHJhZ2dhYmxlOiB0cnVlIH19XHJcblx0XHRcdFx0XHRcdG9uU3dpcGVyPXtzZXRUaHVtYnNTd2lwZXJQaXN9XHJcblx0XHRcdFx0XHRcdHdhdGNoU2xpZGVzVmlzaWJpbGl0eVxyXG5cdFx0XHRcdFx0XHR3YXRjaFNsaWRlc1Byb2dyZXNzXHJcblx0XHRcdFx0XHRcdG9uU2xpZGVDaGFuZ2U9eygpID0+IGNvbnNvbGUubG9nKCdzbGlkZSBjaGFuZ2UnKX0+XHJcblx0XHRcdFx0XHRcdHtjYXJvdXNlbCgncGlzY2luZScpfVxyXG5cdFx0XHRcdFx0PC9Td2lwZXI+XHJcblx0XHRcdFx0XHQ8U3dpcGVyXHJcblx0XHRcdFx0XHRcdGlkPSd0aHVtYnNQaXMnXHJcblx0XHRcdFx0XHRcdHNwYWNlQmV0d2Vlbj17NX1cclxuXHRcdFx0XHRcdFx0c2xpZGVzUGVyVmlldz17NX1cclxuXHRcdFx0XHRcdFx0b25Td2lwZXI9e3NldFRodW1ic1N3aXBlclBpc30+XHJcblx0XHRcdFx0XHRcdHt2aWduZXR0ZSgncGlzY2luZScpfVxyXG5cdFx0XHRcdFx0PC9Td2lwZXI+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkXHJcblx0XHRcdFx0XHRpdGVtXHJcblx0XHRcdFx0XHRtZD17Nn1cclxuXHRcdFx0XHRcdHhzPXsxMn1cclxuXHRcdFx0XHRcdHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnMjBweCcsIHBhZGRpbmdSaWdodDogJzIwcHgnIH19PlxyXG5cdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnIGNvbXBvbmVudD0ncCc+XHJcblx0XHRcdFx0XHRcdHtnaXRlLnRleHRlUGlzY2luZX1cclxuXHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0PFR5cG9ncmFwaHlcclxuXHRcdFx0XHRcdFx0dmFyaWFudD0naDYnXHJcblx0XHRcdFx0XHRcdGNvbXBvbmVudD0naDMnXHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzEwcHgnIH19PlxyXG5cdFx0XHRcdFx0XHRMaXN0ZSBkZXMgZXF1aXBlbWVudHMgOlxyXG5cdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHR7Z2l0ZS5lcXVpcGVtZW50UGlzY2luZS5tYXAoKGVxdWlwZW1lbnQpID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8bGk+e2VxdWlwZW1lbnR9PC9saT5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0PC9QYXBlcj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBjYXJvdXNlbFJldmlld3MgPSAoKSA9PlxyXG5cdFx0cmV2aWV3cy5tYXAoKHJldmlldywgaSkgPT4gKFxyXG5cdFx0XHQ8U3dpcGVyU2xpZGVcclxuXHRcdFx0XHRrZXk9e2BzbGlkZS0ke2l9YH1cclxuXHRcdFx0XHRzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgIzcxNzE3MScsIG1hcmdpbjogJzhweCcgfX0+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT17eyBtYXJnaW46ICc1cHgnIH19PlxyXG5cdFx0XHRcdFx0PHA+e3Jldmlldy5jb21tZW50YWlyZX08L3A+XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHQ8Tm90ZSB2YWx1ZT17cmV2aWV3Lm5vdGV9IC8+XHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8aDQ+e3Jldmlldy5jbGllbnR9PC9oND5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9Td2lwZXJTbGlkZT5cclxuXHRcdCkpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uUmV2aWV3cyA9ICgpID0+IChcclxuXHRcdDxQYXBlciBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG5cdFx0XHQ8VHlwb2dyYXBoeVxyXG5cdFx0XHRcdHZhcmlhbnQ9J2gzJ1xyXG5cdFx0XHRcdGNvbXBvbmVudD0naDInXHJcblx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHRtYXJnaW5Cb3R0b206ICcxMHB4JyxcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogYCR7Z2l0ZS5jb3VsZXVyMX1gLFxyXG5cdFx0XHRcdH19PlxyXG5cdFx0XHRcdENlIHF1ZSBub3MgY2xpZW50cyBkaXNlbnQgZGUgY2UgZ8OudGVcclxuXHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHQ8U3dpcGVyXHJcblx0XHRcdFx0aWQ9J21haW5QaXMnXHJcblx0XHRcdFx0c3R5bGU9e3sgcGFkZGluZzogJzEwcHgnIH19XHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuPXsyMH1cclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3PXszfVxyXG5cdFx0XHRcdG5hdmlnYXRpb25cclxuXHRcdFx0XHRwYWdpbmF0aW9uPXt7IGNsaWNrYWJsZTogdHJ1ZSB9fVxyXG5cdFx0XHRcdHNjcm9sbGJhcj17eyBkcmFnZ2FibGU6IHRydWUgfX1cclxuXHRcdFx0XHRvblN3aXBlcj17KCkgPT4gY29uc29sZS5sb2coJ3N3aXBlJyl9XHJcblx0XHRcdFx0d2F0Y2hTbGlkZXNWaXNpYmlsaXR5XHJcblx0XHRcdFx0d2F0Y2hTbGlkZXNQcm9ncmVzc1xyXG5cdFx0XHRcdG9uU2xpZGVDaGFuZ2U9eygpID0+IGNvbnNvbGUubG9nKCdzbGlkZSBjaGFuZ2UnKX0+XHJcblx0XHRcdFx0e2Nhcm91c2VsUmV2aWV3cygpfVxyXG5cdFx0XHQ8L1N3aXBlcj5cclxuXHRcdDwvUGFwZXI+XHJcblx0KTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvblZpZGVvQ29udGFjdCA9ICgpID0+IChcclxuXHRcdDxQYXBlciBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG5cdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdGNvbnRhaW5lclxyXG5cdFx0XHRcdGRpcmVjdGlvbj0ncm93J1xyXG5cdFx0XHRcdGp1c3RpZnk9J3NwYWNlLWFyb3VuZCdcclxuXHRcdFx0XHRhbGlnbkl0ZW1zPSdmbGV4LXN0YXJ0J1xyXG5cdFx0XHRcdHNwYWNpbmc9ezN9PlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0+XHJcblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+VG91ciBkdSBnw650ZSBlbiB2aWTDqW88L2gyPlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J210LTUnXHJcblx0XHRcdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXthZmZpY2hlVmlkZW8oKX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0+XHJcblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+RWNyaXZlei1ub3VzICE8L2gyPlxyXG5cdFx0XHRcdFx0PENvbnRhY3RGb3JtIC8+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHQ8L1BhcGVyPlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25DYWxlbmRyaWVyID0gKCkgPT4gKFxyXG5cdFx0PFBhcGVyIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcblx0XHRcdDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5DYWxlbmRyaWVyIGRlcyBkaXNwb25pYmlsaXTDqXM8L2gyPlxyXG5cdFx0XHQ8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXthZmZpY2hlQ2FsZW5kcmllcigpfSAvPlxyXG5cdFx0PC9QYXBlcj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uTWFwID0gKCkgPT4gKFxyXG5cdFx0PFBhcGVyIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcblx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cclxuXHRcdFx0XHRcdEl0aW7DqXJhaXJlIGNvbnNlaWxsw6kgZGVwdWlzIHZvdHJlIHBvc2l0aW9uXHJcblx0XHRcdFx0PC9oMj5cclxuXHRcdFx0XHQ8cD5BZmZpY2hlIGxhIG1hcCBpY2k8L3A+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdDwvUGFwZXI+XHJcblx0KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHtoZWFkKCl9XHJcblx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdFx0PENvbnRhaW5lcj5cclxuXHRcdFx0XHRcdHsvKiA8aDI+SW5mb3MgZHUgZ2l0ZTwvaDI+ICovfVxyXG5cdFx0XHRcdFx0ey8qIHtKU09OLnN0cmluZ2lmeShnaXRlKX0gKi99XHJcblx0XHRcdFx0XHR7anVtYm90cm9uKCl9XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdHtzZWN0aW9uRXh0ZXJpZXVyKCl9XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdHtzZWN0aW9uSW50ZXJpZXVyKCl9XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdHtzZWN0aW9uUGlzY2luZSgpfVxyXG5cdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHR7Lyoge2NvbnNvbGUubG9nKHJldmlld3MpfSAqL31cclxuXHRcdFx0XHRcdHtzZWN0aW9uUmV2aWV3cygpfVxyXG5cdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHR7c2VjdGlvblZpZGVvQ29udGFjdCgpfVxyXG5cdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHR7c2VjdGlvbkNhbGVuZHJpZXIoKX1cclxuXHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0e3NlY3Rpb25NYXAoKX1cclxuXHRcdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdFx0PC9MYXlvdXQ+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG5cdC8vbGlzdGVyIGxlcyBub21zIGRlIGdpdGVzXHJcblx0Y29uc3QgZ2l0ZXNOb20gPSBhd2FpdCBsaXN0R2l0ZXNOb21zKCk7XHJcblx0cmV0dXJuIHtcclxuXHRcdHBhdGhzOiBnaXRlc05vbS5tYXAoKG5vbSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHBhcmFtczogeyBpZDogbm9tLl9pZCwgc2x1Zzogbm9tLnNsdWcgfSxcclxuXHRcdFx0fTtcclxuXHRcdH0pLFxyXG5cdFx0ZmFsbGJhY2s6IGZhbHNlLFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcblx0Ly8gY29uc29sZS5sb2cocXVlcnkpO1xyXG5cdHJldHVybiBsaXN0R2l0ZURldGFpbHMoY29udGV4dC5wYXJhbXMuc2x1ZykudGhlbigoZ2l0ZSkgPT4ge1xyXG5cdFx0aWYgKGdpdGUuZXJyb3IpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coZ2l0ZS5lcnJvcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gbGlzdFBob3Rvc0J5Tm9tKGdpdGUuc2x1ZykudGhlbigocGhvdG9zKSA9PiB7XHJcblx0XHRcdFx0aWYgKHBob3Rvcy5lcnJvcikge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocGhvdG9zLmVycm9yKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGxpc3RSZXZpZXdzQnlTbHVnKGdpdGUuc2x1ZykudGhlbigocmV2aWV3cykgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAocmV2aWV3cy5lcnJvcikge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJldmlld3MuZXJyb3IpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiB7IHByb3BzOiB7IGdpdGUsIHBob3RvcywgcmV2aWV3cyB9IH07XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdpdGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=