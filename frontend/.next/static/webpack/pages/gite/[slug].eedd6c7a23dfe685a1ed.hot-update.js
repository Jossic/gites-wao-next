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
      variant: "h3",
      component: "h1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 5
      }
    }, "Pr\xE9sentation du g\xEEte ", gite.nom), __jsx("h1", {
      className: "display-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 5
      }
    }, "Pr\xE9sentation du g\xEEte ", gite.nom), __jsx("p", {
      className: "lead",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 5
      }
    }, gite.presGiteSEO), __jsx("hr", {
      className: "my-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 5
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 5
      }
    }, gite.texte), __jsx("p", {
      className: "lead",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
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
          lineNumber: 110,
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
          lineNumber: 114,
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
          lineNumber: 126,
          columnNumber: 5
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "h5",
        component: "h5",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 6
        }
      }, photo.titreCarousel), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        variant: "body1",
        component: "p",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
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
          lineNumber: 144,
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
          lineNumber: 148,
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
        lineNumber: 162,
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
        lineNumber: 167,
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
        lineNumber: 177,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
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
        lineNumber: 184,
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
        lineNumber: 198,
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
        lineNumber: 206,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      variant: "body1",
      component: "p",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 6
      }
    }, gite.texteExterieur), __jsx("hr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
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
        lineNumber: 215,
        columnNumber: 6
      }
    }, "Liste des equipements :"), __jsx("ul", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 6
      }
    }, gite.equipementExterieur.map(function (equipement) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
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
        lineNumber: 232,
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
        lineNumber: 233,
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
        lineNumber: 243,
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
        lineNumber: 249,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      variant: "body1",
      component: "p",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 6
      }
    }, gite.texteInterieur), __jsx("hr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
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
        lineNumber: 258,
        columnNumber: 6
      }
    }, "Liste des equipements :"), __jsx("ul", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 6
      }
    }, gite.equipementInterieur.map(function (equipement) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
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
        lineNumber: 270,
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
        lineNumber: 271,
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
        lineNumber: 286,
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
        lineNumber: 301,
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
        lineNumber: 302,
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
        lineNumber: 313,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
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
        lineNumber: 320,
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
        lineNumber: 334,
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
        lineNumber: 342,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      variant: "body1",
      component: "p",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 6
      }
    }, gite.textePiscine), __jsx("hr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350,
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
        lineNumber: 351,
        columnNumber: 6
      }
    }, "Liste des equipements :"), __jsx("ul", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 6
      }
    }, gite.equipementPiscine.map(function (equipement) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359,
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
          lineNumber: 369,
          columnNumber: 4
        }
      }, __jsx("div", {
        style: {
          margin: '5px'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372,
          columnNumber: 5
        }
      }, __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373,
          columnNumber: 6
        }
      }, review.commentaire), __jsx("hr", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 6
        }
      }), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375,
          columnNumber: 6
        }
      }, __jsx(_components_admin_Note__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: review.note,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376,
          columnNumber: 7
        }
      })), __jsx("h4", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378,
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
        lineNumber: 384,
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
        lineNumber: 385,
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
        lineNumber: 395,
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
        lineNumber: 413,
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
        lineNumber: 414,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420,
        columnNumber: 5
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 6
      }
    }, "Tour du g\xEEte en vid\xE9o"), __jsx("div", {
      className: "mt-5",
      dangerouslySetInnerHTML: afficheVideo(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422,
        columnNumber: 6
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 427,
        columnNumber: 5
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 428,
        columnNumber: 6
      }
    }, "Ecrivez-nous !"), __jsx(_components_ContactForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 429,
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
        lineNumber: 436,
        columnNumber: 3
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 437,
        columnNumber: 4
      }
    }, "Calendrier des disponibilit\xE9s"), __jsx("div", {
      dangerouslySetInnerHTML: afficheCalendrier(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 438,
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
        lineNumber: 443,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 444,
        columnNumber: 4
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 445,
        columnNumber: 5
      }
    }, "Itin\xE9raire conseill\xE9 depuis votre position"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 448,
        columnNumber: 5
      }
    }, "Affiche la map ici")));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, head(), __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 5
    }
  }, jumbotron(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 6
    }
  }), sectionExterieur(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 6
    }
  }), sectionInterieur(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 6
    }
  }), sectionPiscine(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 6
    }
  }), sectionReviews(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 6
    }
  }), sectionVideoContact(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 6
    }
  }), sectionCalendrier(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2l0ZS9bc2x1Z10uanMiXSwibmFtZXMiOlsiU3dpcGVyQ29yZSIsInVzZSIsIk5hdmlnYXRpb24iLCJQYWdpbmF0aW9uIiwiU2Nyb2xsYmFyIiwiQTExeSIsIkNvbnRyb2xsZXIiLCJUaHVtYnMiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJwYXBlciIsInBhZGRpbmciLCJzcGFjaW5nIiwidGV4dEFsaWduIiwiY29sb3IiLCJwYWxldHRlIiwidGV4dCIsInNlY29uZGFyeSIsIkdpdGUiLCJnaXRlIiwicGhvdG9zIiwicmV2aWV3cyIsImNsYXNzZXMiLCJoZWFkIiwiQVBQX05BTUUiLCJub20iLCJtZGVzYyIsIkRPTUFJTiIsInNsdWciLCJBUEkiLCJhZmZpY2hlQ2FsZW5kcmllciIsIl9faHRtbCIsImNhbGVuZHJpZXJMaW5rIiwiYWZmaWNoZVZpZGVvIiwidmlkZW9MaW5rIiwidXNlU3RhdGUiLCJvcGVuIiwic3RhdGUiLCJzZXRTdGF0ZSIsImhhbmRsZUNsaWNrIiwiY291bGV1ckdpdGUiLCJjb3VsZXVyMSIsInRodW1ic1N3aXBlckV4dCIsInNldFRodW1ic1N3aXBlckV4dCIsInRodW1ic1N3aXBlckludCIsInNldFRodW1ic1N3aXBlckludCIsInRodW1ic1N3aXBlclBpcyIsInNldFRodW1ic1N3aXBlclBpcyIsImp1bWJvdHJvbiIsIm1hcmdpblRvcCIsInByZXNHaXRlU0VPIiwidGV4dGUiLCJjYXJvdXNlbCIsInNlY3Rpb24iLCJmaWx0ZXJlZFBob3RvcyIsImZpbHRlciIsInBob3RvIiwic2VjdGlvbkFzc29jaWVlIiwibWFwIiwiaSIsImxpc3RTdHlsZSIsImxvY2F0aW9uIiwiYWx0IiwiYmFja2dyb3VuZENvbG9yIiwidGl0cmVDYXJvdXNlbCIsInRleHRlQ2Fyb3VzZWwiLCJ2aWduZXR0ZSIsInNlY3Rpb25FeHRlcmlldXIiLCJtYXJnaW5Cb3R0b20iLCJzd2lwZXIiLCJjbGlja2FibGUiLCJkcmFnZ2FibGUiLCJjb25zb2xlIiwibG9nIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJ0ZXh0ZUV4dGVyaWV1ciIsImVxdWlwZW1lbnRFeHRlcmlldXIiLCJlcXVpcGVtZW50Iiwic2VjdGlvbkludGVyaWV1ciIsInRleHRlSW50ZXJpZXVyIiwiZXF1aXBlbWVudEludGVyaWV1ciIsImFjdGl2ZUluZGV4Iiwic2VjdGlvblBpc2NpbmUiLCJ0ZXh0ZVBpc2NpbmUiLCJlcXVpcGVtZW50UGlzY2luZSIsImNhcm91c2VsUmV2aWV3cyIsInJldmlldyIsImJvcmRlciIsIm1hcmdpbiIsImNvbW1lbnRhaXJlIiwibm90ZSIsImNsaWVudCIsInNlY3Rpb25SZXZpZXdzIiwic2VjdGlvblZpZGVvQ29udGFjdCIsInNlY3Rpb25DYWxlbmRyaWVyIiwic2VjdGlvbk1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUVBO0FBU0FBLDhDQUFVLENBQUNDLEdBQVgsQ0FBZSxDQUFDQyxpREFBRCxFQUFhQyxpREFBYixFQUF5QkMsZ0RBQXpCLEVBQW9DQywyQ0FBcEMsRUFBMENDLGlEQUExQyxFQUFzREMsNkNBQXRELENBQWY7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLDRFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDeENDLFFBQUksRUFBRTtBQUNMQyxjQUFRLEVBQUU7QUFETCxLQURrQztBQUl4Q0MsU0FBSyxFQUFFO0FBQ05DLGFBQU8sRUFBRUosS0FBSyxDQUFDSyxPQUFOLENBQWMsQ0FBZCxDQURIO0FBRU5DLGVBQVMsRUFBRSxRQUZMO0FBR05DLFdBQUssRUFBRVAsS0FBSyxDQUFDUSxPQUFOLENBQWNDLElBQWQsQ0FBbUJDO0FBSHBCO0FBSmlDLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQVdBLElB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpELEVBS0VtQixnQkFBZ0IsRUFMbEIsRUFNQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkQsRUFPRVksZ0JBQWdCLEVBUGxCLEVBUUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJELEVBU0VJLGNBQWMsRUFUaEIsRUFVQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkQsRUFZRVUsY0FBYyxFQVpoQixFQWFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiRCxFQWNFQyxtQkFBbUIsRUFkckIsRUFlQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkQsRUFnQkVDLGlCQUFpQixFQWhCbkIsRUFpQkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCRCxFQWtCRUMsVUFBVSxFQWxCWixDQURELENBRkQsQ0FERDtBQTJCQSxDQXRiRDs7R0FBTTlFLEk7VUFDV2IsUzs7O0tBRFhhLEk7O0FBNGRTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9naXRlL1tzbHVnXS5lZWRkNmM3YTIzZGZlNjg1YTFlZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCc7XHJcbmltcG9ydCB7IEFQSSwgRE9NQUlOLCBBUFBfTkFNRSB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbi8vIGltcG9ydCBTd2lwZXIgY29yZSBhbmQgcmVxdWlyZWQgbW9kdWxlc1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSAnc3dpcGVyL3JlYWN0JztcclxuXHJcbmltcG9ydCBTd2lwZXJDb3JlLCB7XHJcblx0TmF2aWdhdGlvbixcclxuXHRQYWdpbmF0aW9uLFxyXG5cdFNjcm9sbGJhcixcclxuXHRBMTF5LFxyXG5cdENvbnRyb2xsZXIsXHJcblx0VGh1bWJzLFxyXG59IGZyb20gJ3N3aXBlcic7XHJcblxyXG5Td2lwZXJDb3JlLnVzZShbTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiwgU2Nyb2xsYmFyLCBBMTF5LCBDb250cm9sbGVyLCBUaHVtYnNdKTtcclxuaW1wb3J0IHtcclxuXHRsaXN0R2l0ZURldGFpbHMsXHJcblx0bGlzdEdpdGVzTm9tcyxcclxuXHRsaXN0UGhvdG9zQnlOb20sXHJcbn0gZnJvbSAnLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250YWN0Rm9ybSc7XHJcbmltcG9ydCB7IGxpc3RSZXZpZXdzQnlTbHVnIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9yZXZpZXdBY3Rpb25zJztcclxuaW1wb3J0IE5vdGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hZG1pbi9Ob3RlJztcclxuaW1wb3J0IHsgUGFwZXIsIENvbnRhaW5lciwgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRyb290OiB7XHJcblx0XHRmbGV4R3JvdzogMSxcclxuXHR9LFxyXG5cdHBhcGVyOiB7XHJcblx0XHRwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRcdGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEdpdGUgPSAoeyBnaXRlLCBwaG90b3MsIHJldmlld3MgfSkgPT4ge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRjb25zdCBoZWFkID0gKCkgPT4gKFxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdDx0aXRsZT5cclxuXHRcdFx0XHR7QVBQX05BTUV9IHwge2dpdGUubm9tfXsnICd9XHJcblx0XHRcdDwvdGl0bGU+XHJcblx0XHRcdDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PXtnaXRlLm1kZXNjfSAvPlxyXG5cdFx0XHQ8bGluayByZWw9J2Nhbm9uaWNhbCcgaHJlZj17YCR7RE9NQUlOfS9naXRlLyR7Z2l0ZS5zbHVnfWB9IC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzp0aXRsZScgY29udGVudD17YCR7Z2l0ZS5ub219IHwgJHtBUFBfTkFNRX1gfSAvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6ZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2dpdGUubWRlc2N9IC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzp0eXBlJyBjb250ZW50PSd3ZWJzaXRlJyAvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6dXJsJyBjb250ZW50PXtgJHtET01BSU59L2dpdGUvJHtnaXRlLnNsdWd9YH0gLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnNpdGVfbmFtZScgY29udGVudD17YCR7QVBQX05BTUV9YH0gLz5cclxuXHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzpzaXRlX25hbWUnIGNvbnRlbnQ9e0FQUF9OQU1FfSAvPlxyXG5cclxuXHRcdFx0PG1ldGFcclxuXHRcdFx0XHRwcm9wZXJ0eT0nb2c6aW1hZ2UnXHJcblx0XHRcdFx0Y29udGVudD17YCR7QVBJfS9ibG9nL3Bob3RvLyR7Z2l0ZS5zbHVnfWB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxtZXRhXHJcblx0XHRcdFx0cHJvcGVydHk9J29nOmltYWdlOnNlY3VyZV91cmwnXHJcblx0XHRcdFx0Y29udGVudD17YCR7QVBJfS9naXRlL3Bob3RvLyR7Z2l0ZS5zbHVnfWB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzppbWFnZTp0eXBlJyBjb250ZW50PSdpbWFnZS9qcGcnIC8+XHJcblx0XHRcdHsvKiA8bWV0YSBwcm9wZXJ0eT0nZmI6YXBwX2lkJyBjb250ZW50PXtgJHtGQl9BUFBfSUR9YH0gLz4gKi99XHJcblx0XHQ8L0hlYWQ+XHJcblx0KTtcclxuXHRjb25zdCBhZmZpY2hlQ2FsZW5kcmllciA9ICgpID0+IHtcclxuXHRcdHJldHVybiB7IF9faHRtbDogZ2l0ZS5jYWxlbmRyaWVyTGluayB9O1xyXG5cdH07XHJcblx0Y29uc3QgYWZmaWNoZVZpZGVvID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIHsgX19odG1sOiBnaXRlLnZpZGVvTGluayB9O1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcclxuXHRjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuXHRcdHNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBjb3VsZXVyR2l0ZSA9IGdpdGUuY291bGV1cjE7XHJcblx0Y29uc3QgW3RodW1ic1N3aXBlckV4dCwgc2V0VGh1bWJzU3dpcGVyRXh0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFt0aHVtYnNTd2lwZXJJbnQsIHNldFRodW1ic1N3aXBlckludF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHRjb25zdCBbdGh1bWJzU3dpcGVyUGlzLCBzZXRUaHVtYnNTd2lwZXJQaXNdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG5cdGNvbnN0IGp1bWJvdHJvbiA9ICgpID0+IChcclxuXHRcdDxzZWN0aW9uPlxyXG5cdFx0XHQ8UGFwZXJcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9XHJcblx0XHRcdFx0c3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuXHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PSdoMycgY29tcG9uZW50PSdoMSc+XHJcblx0XHRcdFx0XHRQcsOpc2VudGF0aW9uIGR1IGfDrnRlIHtnaXRlLm5vbX1cclxuXHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nZGlzcGxheS0zJz5QcsOpc2VudGF0aW9uIGR1IGfDrnRlIHtnaXRlLm5vbX08L2gxPlxyXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT0nbGVhZCc+e2dpdGUucHJlc0dpdGVTRU99PC9wPlxyXG5cdFx0XHRcdDxociBjbGFzc05hbWU9J215LTInIC8+XHJcblx0XHRcdFx0PHA+e2dpdGUudGV4dGV9PC9wPlxyXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT0nbGVhZCc+PC9wPlxyXG5cdFx0XHQ8L1BhcGVyPlxyXG5cdFx0PC9zZWN0aW9uPlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IGNhcm91c2VsID0gKHNlY3Rpb24pID0+IHtcclxuXHRcdGNvbnN0IGZpbHRlcmVkUGhvdG9zID0gcGhvdG9zLmZpbHRlcigocGhvdG8pID0+IHtcclxuXHRcdFx0cmV0dXJuIHBob3RvLnNlY3Rpb25Bc3NvY2llZSA9PT0gc2VjdGlvbjtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGZpbHRlcmVkUGhvdG9zLm1hcCgocGhvdG8sIGkpID0+IChcclxuXHRcdFx0PFN3aXBlclNsaWRlXHJcblx0XHRcdFx0a2V5PXtgc2xpZGUtJHtpfWB9XHJcblx0XHRcdFx0dGFnPSdsaSdcclxuXHRcdFx0XHRzdHlsZT17eyBsaXN0U3R5bGU6ICdub25lJyB9fT5cclxuXHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdC8vIGNsYXNzTmFtZT0nZC1ibG9jayB3LTEwMCdcclxuXHRcdFx0XHRcdHNyYz17cGhvdG8ubG9jYXRpb259XHJcblx0XHRcdFx0XHRhbHQ9e3Bob3RvLmFsdH1cclxuXHRcdFx0XHRcdHN0eWxlPXt7IGxpc3RTdHlsZTogJ25vbmUnIH19XHJcblx0XHRcdFx0XHRsYXlvdXQ9J3Jlc3BvbnNpdmUnXHJcblx0XHRcdFx0XHR3aWR0aD17NTAwfVxyXG5cdFx0XHRcdFx0aGVpZ2h0PXszNzV9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHR7LyogPHNwYW4gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGJvdHRvbTogJzMwcHgnIH19PlxyXG5cdFx0XHRcdFx0VGV4dGVcclxuXHRcdFx0XHQ8L3NwYW4+ICovfVxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGNsYXNzPSdjYXJvdXNlbC1jYXB0aW9uIGQtbm9uZSBkLW1kLWJsb2NrJ1xyXG5cdFx0XHRcdFx0c3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAncmdiYSg3Miw3Miw3MiwwLjYnIH19PlxyXG5cdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD0naDUnIGNvbXBvbmVudD0naDUnPlxyXG5cdFx0XHRcdFx0XHR7cGhvdG8udGl0cmVDYXJvdXNlbH1cclxuXHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJyBjb21wb25lbnQ9J3AnPlxyXG5cdFx0XHRcdFx0XHR7cGhvdG8udGV4dGVDYXJvdXNlbH1cclxuXHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9Td2lwZXJTbGlkZT5cclxuXHRcdCkpO1xyXG5cdH07XHJcblx0Y29uc3QgdmlnbmV0dGUgPSAoc2VjdGlvbikgPT4ge1xyXG5cdFx0Y29uc3QgZmlsdGVyZWRQaG90b3MgPSBwaG90b3MuZmlsdGVyKChwaG90bykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcGhvdG8uc2VjdGlvbkFzc29jaWVlID09PSBzZWN0aW9uO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gZmlsdGVyZWRQaG90b3MubWFwKChwaG90bywgaSkgPT4gKFxyXG5cdFx0XHQ8U3dpcGVyU2xpZGVcclxuXHRcdFx0XHRrZXk9e2BzbGlkZS0ke2l9YH1cclxuXHRcdFx0XHR0YWc9J2xpJ1xyXG5cdFx0XHRcdHN0eWxlPXt7IGxpc3RTdHlsZTogJ25vbmUnIH19PlxyXG5cdFx0XHRcdDxJbWFnZVxyXG5cdFx0XHRcdFx0Ly8gY2xhc3NOYW1lPSdkLWJsb2NrIHctMTAwJ1xyXG5cdFx0XHRcdFx0c3JjPXtwaG90by5sb2NhdGlvbn1cclxuXHRcdFx0XHRcdGFsdD17cGhvdG8uYWx0fVxyXG5cdFx0XHRcdFx0c3R5bGU9e3sgbGlzdFN0eWxlOiAnbm9uZScgfX1cclxuXHRcdFx0XHRcdGxheW91dD0ncmVzcG9uc2l2ZSdcclxuXHRcdFx0XHRcdHdpZHRoPXs1MDB9XHJcblx0XHRcdFx0XHRoZWlnaHQ9ezM3NX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L1N3aXBlclNsaWRlPlxyXG5cdFx0KSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvbkV4dGVyaWV1ciA9ICgpID0+IChcclxuXHRcdDxQYXBlclxyXG5cdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdHBhZGRpbmc6ICcxMHB4JyxcclxuXHRcdFx0XHRtYXJnaW5Ub3A6ICcxMHB4JyxcclxuXHRcdFx0fX0+XHJcblx0XHRcdDxUeXBvZ3JhcGh5XHJcblx0XHRcdFx0dmFyaWFudD0naDMnXHJcblx0XHRcdFx0Y29tcG9uZW50PSdoMidcclxuXHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogJzEwcHgnLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBgJHtnaXRlLmNvdWxldXIxfWAsXHJcblx0XHRcdFx0fX0+XHJcblx0XHRcdFx0RXh0w6lyaWV1clxyXG5cdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdDxHcmlkXHJcblx0XHRcdFx0Y29udGFpbmVyXHJcblx0XHRcdFx0ZGlyZWN0aW9uPSdyb3cnXHJcblx0XHRcdFx0anVzdGlmeT0nc3BhY2UtYXJvdW5kJ1xyXG5cdFx0XHRcdGFsaWduSXRlbXM9J2ZsZXgtc3RhcnQnXHJcblx0XHRcdFx0c3BhY2luZz17M30+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cclxuXHRcdFx0XHRcdDxTd2lwZXJcclxuXHRcdFx0XHRcdFx0aWQ9J21haW5FeHQnXHJcblx0XHRcdFx0XHRcdHNwYWNlQmV0d2Vlbj17MH1cclxuXHRcdFx0XHRcdFx0c2xpZGVzUGVyVmlldz17MX1cclxuXHRcdFx0XHRcdFx0dGh1bWJzPXt7IHN3aXBlcjogdGh1bWJzU3dpcGVyRXh0IH19XHJcblx0XHRcdFx0XHRcdG5hdmlnYXRpb25cclxuXHRcdFx0XHRcdFx0cGFnaW5hdGlvbj17eyBjbGlja2FibGU6IHRydWUgfX1cclxuXHRcdFx0XHRcdFx0c2Nyb2xsYmFyPXt7IGRyYWdnYWJsZTogdHJ1ZSB9fVxyXG5cdFx0XHRcdFx0XHRvblN3aXBlcj17c2V0VGh1bWJzU3dpcGVyRXh0fVxyXG5cdFx0XHRcdFx0XHR3YXRjaFNsaWRlc1Zpc2liaWxpdHlcclxuXHRcdFx0XHRcdFx0d2F0Y2hTbGlkZXNQcm9ncmVzc1xyXG5cdFx0XHRcdFx0XHRvblNsaWRlQ2hhbmdlPXsoKSA9PiBjb25zb2xlLmxvZygnc2xpZGUgY2hhbmdlJyl9PlxyXG5cdFx0XHRcdFx0XHR7Y2Fyb3VzZWwoJ2V4dGVyaWV1cicpfVxyXG5cdFx0XHRcdFx0PC9Td2lwZXI+XHJcblx0XHRcdFx0XHQ8U3dpcGVyXHJcblx0XHRcdFx0XHRcdGlkPSd0aHVtYnNFeHQnXHJcblx0XHRcdFx0XHRcdHNwYWNlQmV0d2Vlbj17NX1cclxuXHRcdFx0XHRcdFx0c2xpZGVzUGVyVmlldz17NX1cclxuXHRcdFx0XHRcdFx0b25Td2lwZXI9e3NldFRodW1ic1N3aXBlckV4dH0+XHJcblx0XHRcdFx0XHRcdHt2aWduZXR0ZSgnZXh0ZXJpZXVyJyl9XHJcblx0XHRcdFx0XHQ8L1N3aXBlcj5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWRcclxuXHRcdFx0XHRcdGl0ZW1cclxuXHRcdFx0XHRcdG1kPXs2fVxyXG5cdFx0XHRcdFx0eHM9ezEyfVxyXG5cdFx0XHRcdFx0c3R5bGU9e3sgcGFkZGluZ0xlZnQ6ICcyMHB4JywgcGFkZGluZ1JpZ2h0OiAnMjBweCcgfX0+XHJcblx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MScgY29tcG9uZW50PSdwJz5cclxuXHRcdFx0XHRcdFx0e2dpdGUudGV4dGVFeHRlcmlldXJ9XHJcblx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdDxUeXBvZ3JhcGh5XHJcblx0XHRcdFx0XHRcdHZhcmlhbnQ9J2g2J1xyXG5cdFx0XHRcdFx0XHRjb21wb25lbnQ9J2gzJ1xyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fT5cclxuXHRcdFx0XHRcdFx0TGlzdGUgZGVzIGVxdWlwZW1lbnRzIDpcclxuXHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdFx0e2dpdGUuZXF1aXBlbWVudEV4dGVyaWV1ci5tYXAoKGVxdWlwZW1lbnQpID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8bGk+e2VxdWlwZW1lbnR9PC9saT5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0PC9QYXBlcj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uSW50ZXJpZXVyID0gKCkgPT4gKFxyXG5cdFx0PFBhcGVyIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcblx0XHRcdDxUeXBvZ3JhcGh5XHJcblx0XHRcdFx0dmFyaWFudD0naDMnXHJcblx0XHRcdFx0Y29tcG9uZW50PSdoMidcclxuXHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogJzEwcHgnLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBgJHtnaXRlLmNvdWxldXIxfWAsXHJcblx0XHRcdFx0fX0+XHJcblx0XHRcdFx0SW50w6lyaWV1clxyXG5cdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdDxHcmlkXHJcblx0XHRcdFx0Y29udGFpbmVyXHJcblx0XHRcdFx0ZGlyZWN0aW9uPSdyb3cnXHJcblx0XHRcdFx0anVzdGlmeT0nc3BhY2UtYXJvdW5kJ1xyXG5cdFx0XHRcdGFsaWduSXRlbXM9J2ZsZXgtc3RhcnQnXHJcblx0XHRcdFx0c3BhY2luZz17M30+XHJcblx0XHRcdFx0PEdyaWRcclxuXHRcdFx0XHRcdGl0ZW1cclxuXHRcdFx0XHRcdG1kPXs2fVxyXG5cdFx0XHRcdFx0eHM9ezEyfVxyXG5cdFx0XHRcdFx0c3R5bGU9e3sgcGFkZGluZ0xlZnQ6ICcyMHB4JywgcGFkZGluZ1JpZ2h0OiAnMjBweCcgfX0+XHJcblx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MScgY29tcG9uZW50PSdwJz5cclxuXHRcdFx0XHRcdFx0e2dpdGUudGV4dGVJbnRlcmlldXJ9XHJcblx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdDxUeXBvZ3JhcGh5XHJcblx0XHRcdFx0XHRcdHZhcmlhbnQ9J2g2J1xyXG5cdFx0XHRcdFx0XHRjb21wb25lbnQ9J2gzJ1xyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fT5cclxuXHRcdFx0XHRcdFx0TGlzdGUgZGVzIGVxdWlwZW1lbnRzIDpcclxuXHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdFx0e2dpdGUuZXF1aXBlbWVudEludGVyaWV1ci5tYXAoKGVxdWlwZW1lbnQpID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8bGk+e2VxdWlwZW1lbnR9PC9saT5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxyXG5cdFx0XHRcdFx0PFN3aXBlclxyXG5cdFx0XHRcdFx0XHRpZD0nbWFpbkludCdcclxuXHRcdFx0XHRcdFx0c3BhY2VCZXR3ZWVuPXswfVxyXG5cdFx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3PXsxfVxyXG5cdFx0XHRcdFx0XHR0aHVtYnM9e3sgc3dpcGVyOiB0aHVtYnNTd2lwZXJJbnQgfX1cclxuXHRcdFx0XHRcdFx0bmF2aWdhdGlvblxyXG5cdFx0XHRcdFx0XHRwYWdpbmF0aW9uPXt7IGNsaWNrYWJsZTogdHJ1ZSB9fVxyXG5cdFx0XHRcdFx0XHRzY3JvbGxiYXI9e3sgZHJhZ2dhYmxlOiB0cnVlIH19XHJcblx0XHRcdFx0XHRcdG9uU3dpcGVyPXtzZXRUaHVtYnNTd2lwZXJJbnR9XHJcblx0XHRcdFx0XHRcdHdhdGNoU2xpZGVzVmlzaWJpbGl0eVxyXG5cdFx0XHRcdFx0XHR3YXRjaFNsaWRlc1Byb2dyZXNzXHJcblx0XHRcdFx0XHRcdG9uUmVhY2hFbmQ9eyhzd2lwZXIpID0+IChzd2lwZXIuYWN0aXZlSW5kZXggPSAwKX1cclxuXHRcdFx0XHRcdFx0b25TbGlkZUNoYW5nZT17KCkgPT4gY29uc29sZS5sb2coJ3NsaWRlIGNoYW5nZScpfT5cclxuXHRcdFx0XHRcdFx0e2Nhcm91c2VsKCdpbnRlcmlldXInKX1cclxuXHRcdFx0XHRcdDwvU3dpcGVyPlxyXG5cdFx0XHRcdFx0PFN3aXBlclxyXG5cdFx0XHRcdFx0XHRpZD0ndGh1bWJzSW50J1xyXG5cdFx0XHRcdFx0XHRzcGFjZUJldHdlZW49ezV9XHJcblx0XHRcdFx0XHRcdHNsaWRlc1BlclZpZXc9ezV9XHJcblx0XHRcdFx0XHRcdHdhdGNoU2xpZGVzVmlzaWJpbGl0eVxyXG5cdFx0XHRcdFx0XHR3YXRjaFNsaWRlc1Byb2dyZXNzXHJcblx0XHRcdFx0XHRcdG9uU3dpcGVyPXtzZXRUaHVtYnNTd2lwZXJJbnR9PlxyXG5cdFx0XHRcdFx0XHR7dmlnbmV0dGUoJ2ludGVyaWV1cicpfVxyXG5cdFx0XHRcdFx0PC9Td2lwZXI+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHQ8L1BhcGVyPlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25QaXNjaW5lID0gKCkgPT4gKFxyXG5cdFx0PFBhcGVyIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcblx0XHRcdDxUeXBvZ3JhcGh5XHJcblx0XHRcdFx0dmFyaWFudD0naDMnXHJcblx0XHRcdFx0Y29tcG9uZW50PSdoMidcclxuXHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogJzEwcHgnLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBgJHtnaXRlLmNvdWxldXIxfWAsXHJcblx0XHRcdFx0fX0+XHJcblx0XHRcdFx0UGlzY2luZVxyXG5cdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblxyXG5cdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdGNvbnRhaW5lclxyXG5cdFx0XHRcdGRpcmVjdGlvbj0ncm93J1xyXG5cdFx0XHRcdGp1c3RpZnk9J3NwYWNlLWFyb3VuZCdcclxuXHRcdFx0XHRhbGlnbkl0ZW1zPSdmbGV4LXN0YXJ0J1xyXG5cdFx0XHRcdHNwYWNpbmc9ezN9PlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0+XHJcblx0XHRcdFx0XHQ8U3dpcGVyXHJcblx0XHRcdFx0XHRcdGlkPSdtYWluUGlzJ1xyXG5cdFx0XHRcdFx0XHRzcGFjZUJldHdlZW49ezB9XHJcblx0XHRcdFx0XHRcdHNsaWRlc1BlclZpZXc9ezF9XHJcblx0XHRcdFx0XHRcdHRodW1icz17eyBzd2lwZXI6IHRodW1ic1N3aXBlclBpcyB9fVxyXG5cdFx0XHRcdFx0XHRuYXZpZ2F0aW9uXHJcblx0XHRcdFx0XHRcdHBhZ2luYXRpb249e3sgY2xpY2thYmxlOiB0cnVlIH19XHJcblx0XHRcdFx0XHRcdHNjcm9sbGJhcj17eyBkcmFnZ2FibGU6IHRydWUgfX1cclxuXHRcdFx0XHRcdFx0b25Td2lwZXI9e3NldFRodW1ic1N3aXBlclBpc31cclxuXHRcdFx0XHRcdFx0d2F0Y2hTbGlkZXNWaXNpYmlsaXR5XHJcblx0XHRcdFx0XHRcdHdhdGNoU2xpZGVzUHJvZ3Jlc3NcclxuXHRcdFx0XHRcdFx0b25TbGlkZUNoYW5nZT17KCkgPT4gY29uc29sZS5sb2coJ3NsaWRlIGNoYW5nZScpfT5cclxuXHRcdFx0XHRcdFx0e2Nhcm91c2VsKCdwaXNjaW5lJyl9XHJcblx0XHRcdFx0XHQ8L1N3aXBlcj5cclxuXHRcdFx0XHRcdDxTd2lwZXJcclxuXHRcdFx0XHRcdFx0aWQ9J3RodW1ic1BpcydcclxuXHRcdFx0XHRcdFx0c3BhY2VCZXR3ZWVuPXs1fVxyXG5cdFx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3PXs1fVxyXG5cdFx0XHRcdFx0XHRvblN3aXBlcj17c2V0VGh1bWJzU3dpcGVyUGlzfT5cclxuXHRcdFx0XHRcdFx0e3ZpZ25ldHRlKCdwaXNjaW5lJyl9XHJcblx0XHRcdFx0XHQ8L1N3aXBlcj5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWRcclxuXHRcdFx0XHRcdGl0ZW1cclxuXHRcdFx0XHRcdG1kPXs2fVxyXG5cdFx0XHRcdFx0eHM9ezEyfVxyXG5cdFx0XHRcdFx0c3R5bGU9e3sgcGFkZGluZ0xlZnQ6ICcyMHB4JywgcGFkZGluZ1JpZ2h0OiAnMjBweCcgfX0+XHJcblx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MScgY29tcG9uZW50PSdwJz5cclxuXHRcdFx0XHRcdFx0e2dpdGUudGV4dGVQaXNjaW5lfVxyXG5cdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHQ8VHlwb2dyYXBoeVxyXG5cdFx0XHRcdFx0XHR2YXJpYW50PSdoNidcclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50PSdoMydcclxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMTBweCcgfX0+XHJcblx0XHRcdFx0XHRcdExpc3RlIGRlcyBlcXVpcGVtZW50cyA6XHJcblx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdHtnaXRlLmVxdWlwZW1lbnRQaXNjaW5lLm1hcCgoZXF1aXBlbWVudCkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxsaT57ZXF1aXBlbWVudH08L2xpPlxyXG5cdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHQ8L1BhcGVyPlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IGNhcm91c2VsUmV2aWV3cyA9ICgpID0+XHJcblx0XHRyZXZpZXdzLm1hcCgocmV2aWV3LCBpKSA9PiAoXHJcblx0XHRcdDxTd2lwZXJTbGlkZVxyXG5cdFx0XHRcdGtleT17YHNsaWRlLSR7aX1gfVxyXG5cdFx0XHRcdHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjNzE3MTcxJywgbWFyZ2luOiAnOHB4JyB9fT5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzVweCcgfX0+XHJcblx0XHRcdFx0XHQ8cD57cmV2aWV3LmNvbW1lbnRhaXJlfTwvcD5cclxuXHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdDxOb3RlIHZhbHVlPXtyZXZpZXcubm90ZX0gLz5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDxoND57cmV2aWV3LmNsaWVudH08L2g0PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L1N3aXBlclNsaWRlPlxyXG5cdFx0KSk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25SZXZpZXdzID0gKCkgPT4gKFxyXG5cdFx0PFBhcGVyIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcblx0XHRcdDxUeXBvZ3JhcGh5XHJcblx0XHRcdFx0dmFyaWFudD0naDMnXHJcblx0XHRcdFx0Y29tcG9uZW50PSdoMidcclxuXHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogJzEwcHgnLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBgJHtnaXRlLmNvdWxldXIxfWAsXHJcblx0XHRcdFx0fX0+XHJcblx0XHRcdFx0Q2UgcXVlIG5vcyBjbGllbnRzIGRpc2VudCBkZSBjZSBnw650ZVxyXG5cdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdDxTd2lwZXJcclxuXHRcdFx0XHRpZD0nbWFpblBpcydcclxuXHRcdFx0XHRzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcgfX1cclxuXHRcdFx0XHRzcGFjZUJldHdlZW49ezIwfVxyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc9ezN9XHJcblx0XHRcdFx0bmF2aWdhdGlvblxyXG5cdFx0XHRcdHBhZ2luYXRpb249e3sgY2xpY2thYmxlOiB0cnVlIH19XHJcblx0XHRcdFx0c2Nyb2xsYmFyPXt7IGRyYWdnYWJsZTogdHJ1ZSB9fVxyXG5cdFx0XHRcdG9uU3dpcGVyPXsoKSA9PiBjb25zb2xlLmxvZygnc3dpcGUnKX1cclxuXHRcdFx0XHR3YXRjaFNsaWRlc1Zpc2liaWxpdHlcclxuXHRcdFx0XHR3YXRjaFNsaWRlc1Byb2dyZXNzXHJcblx0XHRcdFx0b25TbGlkZUNoYW5nZT17KCkgPT4gY29uc29sZS5sb2coJ3NsaWRlIGNoYW5nZScpfT5cclxuXHRcdFx0XHR7Y2Fyb3VzZWxSZXZpZXdzKCl9XHJcblx0XHRcdDwvU3dpcGVyPlxyXG5cdFx0PC9QYXBlcj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uVmlkZW9Db250YWN0ID0gKCkgPT4gKFxyXG5cdFx0PFBhcGVyIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcblx0XHRcdDxHcmlkXHJcblx0XHRcdFx0Y29udGFpbmVyXHJcblx0XHRcdFx0ZGlyZWN0aW9uPSdyb3cnXHJcblx0XHRcdFx0anVzdGlmeT0nc3BhY2UtYXJvdW5kJ1xyXG5cdFx0XHRcdGFsaWduSXRlbXM9J2ZsZXgtc3RhcnQnXHJcblx0XHRcdFx0c3BhY2luZz17M30+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cclxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5Ub3VyIGR1IGfDrnRlIGVuIHZpZMOpbzwvaDI+XHJcblx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nbXQtNSdcclxuXHRcdFx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2FmZmljaGVWaWRlbygpfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cclxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5FY3JpdmV6LW5vdXMgITwvaDI+XHJcblx0XHRcdFx0XHQ8Q29udGFjdEZvcm0gLz5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdDwvUGFwZXI+XHJcblx0KTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvbkNhbGVuZHJpZXIgPSAoKSA9PiAoXHJcblx0XHQ8UGFwZXIgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuXHRcdFx0PGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPkNhbGVuZHJpZXIgZGVzIGRpc3BvbmliaWxpdMOpczwvaDI+XHJcblx0XHRcdDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2FmZmljaGVDYWxlbmRyaWVyKCl9IC8+XHJcblx0XHQ8L1BhcGVyPlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25NYXAgPSAoKSA9PiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHRleHQtY2VudGVyJz5cclxuXHRcdFx0PHNlY3Rpb24+XHJcblx0XHRcdFx0PGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxyXG5cdFx0XHRcdFx0SXRpbsOpcmFpcmUgY29uc2VpbGzDqSBkZXB1aXMgdm90cmUgcG9zaXRpb25cclxuXHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdDxwPkFmZmljaGUgbGEgbWFwIGljaTwvcD5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHtoZWFkKCl9XHJcblx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdFx0PENvbnRhaW5lcj5cclxuXHRcdFx0XHRcdHsvKiA8aDI+SW5mb3MgZHUgZ2l0ZTwvaDI+ICovfVxyXG5cdFx0XHRcdFx0ey8qIHtKU09OLnN0cmluZ2lmeShnaXRlKX0gKi99XHJcblx0XHRcdFx0XHR7anVtYm90cm9uKCl9XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdHtzZWN0aW9uRXh0ZXJpZXVyKCl9XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdHtzZWN0aW9uSW50ZXJpZXVyKCl9XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdHtzZWN0aW9uUGlzY2luZSgpfVxyXG5cdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHR7Lyoge2NvbnNvbGUubG9nKHJldmlld3MpfSAqL31cclxuXHRcdFx0XHRcdHtzZWN0aW9uUmV2aWV3cygpfVxyXG5cdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHR7c2VjdGlvblZpZGVvQ29udGFjdCgpfVxyXG5cdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHR7c2VjdGlvbkNhbGVuZHJpZXIoKX1cclxuXHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0e3NlY3Rpb25NYXAoKX1cclxuXHRcdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdFx0PC9MYXlvdXQ+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG5cdC8vbGlzdGVyIGxlcyBub21zIGRlIGdpdGVzXHJcblx0Y29uc3QgZ2l0ZXNOb20gPSBhd2FpdCBsaXN0R2l0ZXNOb21zKCk7XHJcblx0cmV0dXJuIHtcclxuXHRcdHBhdGhzOiBnaXRlc05vbS5tYXAoKG5vbSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHBhcmFtczogeyBpZDogbm9tLl9pZCwgc2x1Zzogbm9tLnNsdWcgfSxcclxuXHRcdFx0fTtcclxuXHRcdH0pLFxyXG5cdFx0ZmFsbGJhY2s6IGZhbHNlLFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcblx0Ly8gY29uc29sZS5sb2cocXVlcnkpO1xyXG5cdHJldHVybiBsaXN0R2l0ZURldGFpbHMoY29udGV4dC5wYXJhbXMuc2x1ZykudGhlbigoZ2l0ZSkgPT4ge1xyXG5cdFx0aWYgKGdpdGUuZXJyb3IpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coZ2l0ZS5lcnJvcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gbGlzdFBob3Rvc0J5Tm9tKGdpdGUuc2x1ZykudGhlbigocGhvdG9zKSA9PiB7XHJcblx0XHRcdFx0aWYgKHBob3Rvcy5lcnJvcikge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocGhvdG9zLmVycm9yKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGxpc3RSZXZpZXdzQnlTbHVnKGdpdGUuc2x1ZykudGhlbigocmV2aWV3cykgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAocmV2aWV3cy5lcnJvcikge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJldmlld3MuZXJyb3IpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiB7IHByb3BzOiB7IGdpdGUsIHBob3RvcywgcmV2aWV3cyB9IH07XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdpdGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=