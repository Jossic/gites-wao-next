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
        lineNumber: 127,
        columnNumber: 3
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      variant: "h3",
      component: "h2",
      style: {
        textAlign: 'center',
        marginBottom: '10px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
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
        lineNumber: 138,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
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
        lineNumber: 145,
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
        lineNumber: 159,
        columnNumber: 6
      }
    }, carousel('exterieur'))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
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
        lineNumber: 167,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      variant: "body1",
      component: "p",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 6
      }
    }, gite.texteExterieur), __jsx("hr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
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
        lineNumber: 176,
        columnNumber: 6
      }
    }, "Liste des equipements :"), __jsx("ul", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 6
      }
    }, gite.equipementExterieur.map(function (equipement) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
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
        lineNumber: 193,
        columnNumber: 3
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      variant: "h3",
      component: "h2",
      style: {
        textAlign: 'center',
        marginBottom: '10px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
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
        lineNumber: 200,
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
    }, gite.texteInterieur), __jsx("hr", {
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
    }, gite.equipementInterieur.map(function (equipement) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
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
        lineNumber: 227,
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
        lineNumber: 228,
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
        lineNumber: 243,
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
        lineNumber: 258,
        columnNumber: 3
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      variant: "h3",
      component: "h2",
      style: {
        textAlign: 'center',
        marginBottom: '10px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
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
        lineNumber: 266,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
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
        lineNumber: 273,
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
        lineNumber: 287,
        columnNumber: 6
      }
    }, carousel('piscine'))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
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
        lineNumber: 295,
        columnNumber: 5
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      variant: "body1",
      component: "p",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 6
      }
    }, gite.textePiscine), __jsx("hr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
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
        lineNumber: 304,
        columnNumber: 6
      }
    }, "Liste des equipements :"), __jsx("ul", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 6
      }
    }, gite.equipementPiscine.map(function (equipement) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312,
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
          border: '1px solid #717171'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 4
        }
      }, __jsx("div", {
        style: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 5
        }
      }, __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 6
        }
      }, review.commentaire), __jsx("hr", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 6
        }
      }), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 6
        }
      }, __jsx(_components_admin_Note__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: review.note,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 7
        }
      })), __jsx("h4", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331,
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
        lineNumber: 337,
        columnNumber: 3
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
      variant: "h3",
      component: "h2",
      style: {
        textAlign: 'center',
        marginBottom: '10px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 4
      }
    }, "Ce que nos clients disent de ce g\xEEte"), __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__["Swiper"], {
      id: "mainPis",
      style: {
        padding: '20px'
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
        lineNumber: 344,
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
        lineNumber: 362,
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
        lineNumber: 363,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 5
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 6
      }
    }, "Tour du g\xEEte en vid\xE9o"), __jsx("div", {
      className: "mt-5",
      dangerouslySetInnerHTML: afficheVideo(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 6
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      md: 6,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376,
        columnNumber: 5
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377,
        columnNumber: 6
      }
    }, "Ecrivez-nous !"), __jsx(_components_ContactForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378,
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
        lineNumber: 385,
        columnNumber: 3
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386,
        columnNumber: 4
      }
    }, "Calendrier des disponibilit\xE9s"), __jsx("div", {
      dangerouslySetInnerHTML: afficheCalendrier(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387,
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
        lineNumber: 392,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393,
        columnNumber: 4
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394,
        columnNumber: 5
      }
    }, "Itin\xE9raire conseill\xE9 depuis votre position"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397,
        columnNumber: 5
      }
    }, "Affiche la map ici")));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, head(), __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 5
    }
  }, jumbotron(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 6
    }
  }), sectionExterieur(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 6
    }
  }), sectionInterieur(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 6
    }
  }), sectionPiscine(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 6
    }
  }), sectionReviews(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 6
    }
  }), sectionVideoContact(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 6
    }
  }), sectionCalendrier(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2l0ZS9bc2x1Z10uanMiXSwibmFtZXMiOlsiU3dpcGVyQ29yZSIsInVzZSIsIk5hdmlnYXRpb24iLCJQYWdpbmF0aW9uIiwiU2Nyb2xsYmFyIiwiQTExeSIsIkNvbnRyb2xsZXIiLCJUaHVtYnMiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJwYXBlciIsInBhZGRpbmciLCJzcGFjaW5nIiwidGV4dEFsaWduIiwiY29sb3IiLCJwYWxldHRlIiwidGV4dCIsInNlY29uZGFyeSIsIkdpdGUiLCJnaXRlIiwicGhvdG9zIiwicmV2aWV3cyIsImNsYXNzZXMiLCJoZWFkIiwiQVBQX05BTUUiLCJub20iLCJtZGVzYyIsIkRPTUFJTiIsInNsdWciLCJBUEkiLCJhZmZpY2hlQ2FsZW5kcmllciIsIl9faHRtbCIsImNhbGVuZHJpZXJMaW5rIiwiYWZmaWNoZVZpZGVvIiwidmlkZW9MaW5rIiwidXNlU3RhdGUiLCJvcGVuIiwic3RhdGUiLCJzZXRTdGF0ZSIsImhhbmRsZUNsaWNrIiwidGh1bWJzU3dpcGVyRXh0Iiwic2V0VGh1bWJzU3dpcGVyRXh0IiwidGh1bWJzU3dpcGVySW50Iiwic2V0VGh1bWJzU3dpcGVySW50IiwidGh1bWJzU3dpcGVyUGlzIiwic2V0VGh1bWJzU3dpcGVyUGlzIiwianVtYm90cm9uIiwibWFyZ2luVG9wIiwicHJlc0dpdGVTRU8iLCJjYXJvdXNlbCIsInNlY3Rpb24iLCJmaWx0ZXJlZFBob3RvcyIsImZpbHRlciIsInBob3RvIiwic2VjdGlvbkFzc29jaWVlIiwibWFwIiwiaSIsImxpc3RTdHlsZSIsImxvY2F0aW9uIiwiYWx0Iiwic2VjdGlvbkV4dGVyaWV1ciIsIm1hcmdpbkJvdHRvbSIsInN3aXBlciIsImNsaWNrYWJsZSIsImRyYWdnYWJsZSIsImNvbnNvbGUiLCJsb2ciLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInRleHRlRXh0ZXJpZXVyIiwiZXF1aXBlbWVudEV4dGVyaWV1ciIsImVxdWlwZW1lbnQiLCJzZWN0aW9uSW50ZXJpZXVyIiwidGV4dGVJbnRlcmlldXIiLCJlcXVpcGVtZW50SW50ZXJpZXVyIiwiYWN0aXZlSW5kZXgiLCJzZWN0aW9uUGlzY2luZSIsInRleHRlUGlzY2luZSIsImVxdWlwZW1lbnRQaXNjaW5lIiwiY2Fyb3VzZWxSZXZpZXdzIiwicmV2aWV3IiwiYm9yZGVyIiwiY29tbWVudGFpcmUiLCJub3RlIiwiY2xpZW50Iiwic2VjdGlvblJldmlld3MiLCJzZWN0aW9uVmlkZW9Db250YWN0Iiwic2VjdGlvbkNhbGVuZHJpZXIiLCJzZWN0aW9uTWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBRUE7QUFTQUEsOENBQVUsQ0FBQ0MsR0FBWCxDQUFlLENBQUNDLGlEQUFELEVBQWFDLGlEQUFiLEVBQXlCQyxnREFBekIsRUFBb0NDLDJDQUFwQyxFQUEwQ0MsaURBQTFDLEVBQXNEQyw2Q0FBdEQsQ0FBZjtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1DLFNBQVMsR0FBR0MsNEVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN4Q0MsUUFBSSxFQUFFO0FBQ0xDLGNBQVEsRUFBRTtBQURMLEtBRGtDO0FBSXhDQyxTQUFLLEVBQUU7QUFDTkMsYUFBTyxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBYyxDQUFkLENBREg7QUFFTkMsZUFBUyxFQUFFLFFBRkw7QUFHTkMsV0FBSyxFQUFFUCxLQUFLLENBQUNRLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQkM7QUFIcEI7QUFKaUMsR0FBWjtBQUFBLENBQUQsQ0FBNUI7O0FBV0EsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBK0I7QUFBQTs7QUFBQSxNQUE1QkMsSUFBNEIsUUFBNUJBLElBQTRCO0FBQUEsTUFBdEJDLE1BQXNCLFFBQXRCQSxNQUFzQjtBQUFB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QUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFBSSxlQUFTLEVBQUMsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBEQURELEVBSUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFKRCxDQURELENBRGtCO0FBQUEsR0FBbkI7O0FBV0EsU0FDQyxtRUFDRWpFLElBQUksRUFETixFQUVDLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFdUIsU0FBUyxFQUhYLEVBSUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpELEVBS0VjLGdCQUFnQixFQUxsQixFQU1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORCxFQU9FWSxnQkFBZ0IsRUFQbEIsRUFRQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkQsRUFTRUksY0FBYyxFQVRoQixFQVVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRCxFQVlFUyxjQUFjLEVBWmhCLEVBYUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJELEVBY0VDLG1CQUFtQixFQWRyQixFQWVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmRCxFQWdCRUMsaUJBQWlCLEVBaEJuQixFQWlCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJELEVBa0JFQyxVQUFVLEVBbEJaLENBREQsQ0FGRCxDQUREO0FBMkJBLENBbllEOztHQUFNdEUsSTtVQUNXYixTOzs7S0FEWGEsSTs7QUF5YVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dpdGUvW3NsdWddLjkzNDdhMzAxZGI2MDM1MWVlZDczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0JztcclxuaW1wb3J0IHsgQVBJLCBET01BSU4sIEFQUF9OQU1FIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuLy8gaW1wb3J0IFN3aXBlciBjb3JlIGFuZCByZXF1aXJlZCBtb2R1bGVzXHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xyXG5cclxuaW1wb3J0IFN3aXBlckNvcmUsIHtcclxuXHROYXZpZ2F0aW9uLFxyXG5cdFBhZ2luYXRpb24sXHJcblx0U2Nyb2xsYmFyLFxyXG5cdEExMXksXHJcblx0Q29udHJvbGxlcixcclxuXHRUaHVtYnMsXHJcbn0gZnJvbSAnc3dpcGVyJztcclxuXHJcblN3aXBlckNvcmUudXNlKFtOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uLCBTY3JvbGxiYXIsIEExMXksIENvbnRyb2xsZXIsIFRodW1ic10pO1xyXG5pbXBvcnQge1xyXG5cdGxpc3RHaXRlRGV0YWlscyxcclxuXHRsaXN0R2l0ZXNOb21zLFxyXG5cdGxpc3RQaG90b3NCeU5vbSxcclxufSBmcm9tICcuLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRhY3RGb3JtJztcclxuaW1wb3J0IHsgbGlzdFJldmlld3NCeVNsdWcgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3Jldmlld0FjdGlvbnMnO1xyXG5pbXBvcnQgTm90ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2FkbWluL05vdGUnO1xyXG5pbXBvcnQgeyBQYXBlciwgQ29udGFpbmVyLCBHcmlkLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdGZsZXhHcm93OiAxLFxyXG5cdH0sXHJcblx0cGFwZXI6IHtcclxuXHRcdHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG5cdFx0Y29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXHJcblx0fSxcclxufSkpO1xyXG5cclxuY29uc3QgR2l0ZSA9ICh7IGdpdGUsIHBob3RvcywgcmV2aWV3cyB9KSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IGhlYWQgPSAoKSA9PiAoXHJcblx0XHQ8SGVhZD5cclxuXHRcdFx0PHRpdGxlPlxyXG5cdFx0XHRcdHtBUFBfTkFNRX0gfCB7Z2l0ZS5ub219eycgJ31cclxuXHRcdFx0PC90aXRsZT5cclxuXHRcdFx0PG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2dpdGUubWRlc2N9IC8+XHJcblx0XHRcdDxsaW5rIHJlbD0nY2Fub25pY2FsJyBocmVmPXtgJHtET01BSU59L2dpdGUvJHtnaXRlLnNsdWd9YH0gLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnRpdGxlJyBjb250ZW50PXtgJHtnaXRlLm5vbX0gfCAke0FQUF9OQU1FfWB9IC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzpkZXNjcmlwdGlvbicgY29udGVudD17Z2l0ZS5tZGVzY30gLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnR5cGUnIGNvbnRlbnQ9J3dlYnNpdGUnIC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzp1cmwnIGNvbnRlbnQ9e2Ake0RPTUFJTn0vZ2l0ZS8ke2dpdGUuc2x1Z31gfSAvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6c2l0ZV9uYW1lJyBjb250ZW50PXtgJHtBUFBfTkFNRX1gfSAvPlxyXG5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnNpdGVfbmFtZScgY29udGVudD17QVBQX05BTUV9IC8+XHJcblxyXG5cdFx0XHQ8bWV0YVxyXG5cdFx0XHRcdHByb3BlcnR5PSdvZzppbWFnZSdcclxuXHRcdFx0XHRjb250ZW50PXtgJHtBUEl9L2Jsb2cvcGhvdG8vJHtnaXRlLnNsdWd9YH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PG1ldGFcclxuXHRcdFx0XHRwcm9wZXJ0eT0nb2c6aW1hZ2U6c2VjdXJlX3VybCdcclxuXHRcdFx0XHRjb250ZW50PXtgJHtBUEl9L2dpdGUvcGhvdG8vJHtnaXRlLnNsdWd9YH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOmltYWdlOnR5cGUnIGNvbnRlbnQ9J2ltYWdlL2pwZycgLz5cclxuXHRcdFx0ey8qIDxtZXRhIHByb3BlcnR5PSdmYjphcHBfaWQnIGNvbnRlbnQ9e2Ake0ZCX0FQUF9JRH1gfSAvPiAqL31cclxuXHRcdDwvSGVhZD5cclxuXHQpO1xyXG5cdGNvbnN0IGFmZmljaGVDYWxlbmRyaWVyID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIHsgX19odG1sOiBnaXRlLmNhbGVuZHJpZXJMaW5rIH07XHJcblx0fTtcclxuXHRjb25zdCBhZmZpY2hlVmlkZW8gPSAoKSA9PiB7XHJcblx0XHRyZXR1cm4geyBfX2h0bWw6IGdpdGUudmlkZW9MaW5rIH07XHJcblx0fTtcclxuXHJcblx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG5cdFx0c2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IFt0aHVtYnNTd2lwZXJFeHQsIHNldFRodW1ic1N3aXBlckV4dF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHRjb25zdCBbdGh1bWJzU3dpcGVySW50LCBzZXRUaHVtYnNTd2lwZXJJbnRdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW3RodW1ic1N3aXBlclBpcywgc2V0VGh1bWJzU3dpcGVyUGlzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuXHRjb25zdCBqdW1ib3Ryb24gPSAoKSA9PiAoXHJcblx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0PFBhcGVyXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfVxyXG5cdFx0XHRcdHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcblx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nZGlzcGxheS0zJz5QcsOpc2VudGF0aW9uIGR1IGfDrnRlIHtnaXRlLm5vbX08L2gxPlxyXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT0nbGVhZCc+e2dpdGUucHJlc0dpdGVTRU99PC9wPlxyXG5cdFx0XHRcdDxociBjbGFzc05hbWU9J215LTInIC8+XHJcblx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRJdCB1c2VzIHV0aWxpdHkgY2xhc3NlcyBmb3IgdHlwb2dyYXBoeSBhbmQgc3BhY2luZyB0byBzcGFjZVxyXG5cdFx0XHRcdFx0Y29udGVudCBvdXQgd2l0aGluIHRoZSBsYXJnZXIgY29udGFpbmVyLlxyXG5cdFx0XHRcdDwvcD5cclxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9J2xlYWQnPjwvcD5cclxuXHRcdFx0PC9QYXBlcj5cclxuXHRcdDwvc2VjdGlvbj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBjYXJvdXNlbCA9IChzZWN0aW9uKSA9PiB7XHJcblx0XHRjb25zdCBmaWx0ZXJlZFBob3RvcyA9IHBob3Rvcy5maWx0ZXIoKHBob3RvKSA9PiB7XHJcblx0XHRcdHJldHVybiBwaG90by5zZWN0aW9uQXNzb2NpZWUgPT09IHNlY3Rpb247XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBmaWx0ZXJlZFBob3Rvcy5tYXAoKHBob3RvLCBpKSA9PiAoXHJcblx0XHRcdDxTd2lwZXJTbGlkZVxyXG5cdFx0XHRcdGtleT17YHNsaWRlLSR7aX1gfVxyXG5cdFx0XHRcdHRhZz0nbGknXHJcblx0XHRcdFx0c3R5bGU9e3sgbGlzdFN0eWxlOiAnbm9uZScgfX0+XHJcblx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHQvLyBjbGFzc05hbWU9J2QtYmxvY2sgdy0xMDAnXHJcblx0XHRcdFx0XHRzcmM9e3Bob3RvLmxvY2F0aW9ufVxyXG5cdFx0XHRcdFx0YWx0PXtwaG90by5hbHR9XHJcblx0XHRcdFx0XHRzdHlsZT17eyBsaXN0U3R5bGU6ICdub25lJyB9fVxyXG5cdFx0XHRcdFx0bGF5b3V0PSdyZXNwb25zaXZlJ1xyXG5cdFx0XHRcdFx0d2lkdGg9ezUwMH1cclxuXHRcdFx0XHRcdGhlaWdodD17Mzc1fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvU3dpcGVyU2xpZGU+XHJcblx0XHQpKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzZWN0aW9uRXh0ZXJpZXVyID0gKCkgPT4gKFxyXG5cdFx0PFBhcGVyXHJcblx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0cGFkZGluZzogJzEwcHgnLFxyXG5cdFx0XHRcdG1hcmdpblRvcDogJzEwcHgnLFxyXG5cdFx0XHR9fT5cclxuXHRcdFx0PFR5cG9ncmFwaHlcclxuXHRcdFx0XHR2YXJpYW50PSdoMydcclxuXHRcdFx0XHRjb21wb25lbnQ9J2gyJ1xyXG5cdFx0XHRcdHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogJzEwcHgnIH19PlxyXG5cdFx0XHRcdEV4dMOpcmlldXJcclxuXHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdGNvbnRhaW5lclxyXG5cdFx0XHRcdGRpcmVjdGlvbj0ncm93J1xyXG5cdFx0XHRcdGp1c3RpZnk9J3NwYWNlLWFyb3VuZCdcclxuXHRcdFx0XHRhbGlnbkl0ZW1zPSdmbGV4LXN0YXJ0J1xyXG5cdFx0XHRcdHNwYWNpbmc9ezN9PlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0+XHJcblx0XHRcdFx0XHQ8U3dpcGVyXHJcblx0XHRcdFx0XHRcdGlkPSdtYWluRXh0J1xyXG5cdFx0XHRcdFx0XHRzcGFjZUJldHdlZW49ezB9XHJcblx0XHRcdFx0XHRcdHNsaWRlc1BlclZpZXc9ezF9XHJcblx0XHRcdFx0XHRcdHRodW1icz17eyBzd2lwZXI6IHRodW1ic1N3aXBlckV4dCB9fVxyXG5cdFx0XHRcdFx0XHRuYXZpZ2F0aW9uXHJcblx0XHRcdFx0XHRcdHBhZ2luYXRpb249e3sgY2xpY2thYmxlOiB0cnVlIH19XHJcblx0XHRcdFx0XHRcdHNjcm9sbGJhcj17eyBkcmFnZ2FibGU6IHRydWUgfX1cclxuXHRcdFx0XHRcdFx0b25Td2lwZXI9e3NldFRodW1ic1N3aXBlckV4dH1cclxuXHRcdFx0XHRcdFx0d2F0Y2hTbGlkZXNWaXNpYmlsaXR5XHJcblx0XHRcdFx0XHRcdHdhdGNoU2xpZGVzUHJvZ3Jlc3NcclxuXHRcdFx0XHRcdFx0b25TbGlkZUNoYW5nZT17KCkgPT4gY29uc29sZS5sb2coJ3NsaWRlIGNoYW5nZScpfT5cclxuXHRcdFx0XHRcdFx0e2Nhcm91c2VsKCdleHRlcmlldXInKX1cclxuXHRcdFx0XHRcdDwvU3dpcGVyPlxyXG5cdFx0XHRcdFx0PFN3aXBlclxyXG5cdFx0XHRcdFx0XHRpZD0ndGh1bWJzRXh0J1xyXG5cdFx0XHRcdFx0XHRzcGFjZUJldHdlZW49ezV9XHJcblx0XHRcdFx0XHRcdHNsaWRlc1BlclZpZXc9ezV9XHJcblx0XHRcdFx0XHRcdG9uU3dpcGVyPXtzZXRUaHVtYnNTd2lwZXJFeHR9PlxyXG5cdFx0XHRcdFx0XHR7Y2Fyb3VzZWwoJ2V4dGVyaWV1cicpfVxyXG5cdFx0XHRcdFx0PC9Td2lwZXI+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkXHJcblx0XHRcdFx0XHRpdGVtXHJcblx0XHRcdFx0XHRtZD17Nn1cclxuXHRcdFx0XHRcdHhzPXsxMn1cclxuXHRcdFx0XHRcdHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnMjBweCcsIHBhZGRpbmdSaWdodDogJzIwcHgnIH19PlxyXG5cdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnIGNvbXBvbmVudD0ncCc+XHJcblx0XHRcdFx0XHRcdHtnaXRlLnRleHRlRXh0ZXJpZXVyfVxyXG5cdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHQ8VHlwb2dyYXBoeVxyXG5cdFx0XHRcdFx0XHR2YXJpYW50PSdoNidcclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50PSdoMydcclxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMTBweCcgfX0+XHJcblx0XHRcdFx0XHRcdExpc3RlIGRlcyBlcXVpcGVtZW50cyA6XHJcblx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdHtnaXRlLmVxdWlwZW1lbnRFeHRlcmlldXIubWFwKChlcXVpcGVtZW50KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PGxpPntlcXVpcGVtZW50fTwvbGk+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdDwvUGFwZXI+XHJcblx0KTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvbkludGVyaWV1ciA9ICgpID0+IChcclxuXHRcdDxQYXBlciBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG5cdFx0XHQ8VHlwb2dyYXBoeVxyXG5cdFx0XHRcdHZhcmlhbnQ9J2gzJ1xyXG5cdFx0XHRcdGNvbXBvbmVudD0naDInXHJcblx0XHRcdFx0c3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luQm90dG9tOiAnMTBweCcgfX0+XHJcblx0XHRcdFx0SW50w6lyaWV1clxyXG5cdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdDxHcmlkXHJcblx0XHRcdFx0Y29udGFpbmVyXHJcblx0XHRcdFx0ZGlyZWN0aW9uPSdyb3cnXHJcblx0XHRcdFx0anVzdGlmeT0nc3BhY2UtYXJvdW5kJ1xyXG5cdFx0XHRcdGFsaWduSXRlbXM9J2ZsZXgtc3RhcnQnXHJcblx0XHRcdFx0c3BhY2luZz17M30+XHJcblx0XHRcdFx0PEdyaWRcclxuXHRcdFx0XHRcdGl0ZW1cclxuXHRcdFx0XHRcdG1kPXs2fVxyXG5cdFx0XHRcdFx0eHM9ezEyfVxyXG5cdFx0XHRcdFx0c3R5bGU9e3sgcGFkZGluZ0xlZnQ6ICcyMHB4JywgcGFkZGluZ1JpZ2h0OiAnMjBweCcgfX0+XHJcblx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MScgY29tcG9uZW50PSdwJz5cclxuXHRcdFx0XHRcdFx0e2dpdGUudGV4dGVJbnRlcmlldXJ9XHJcblx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdDxUeXBvZ3JhcGh5XHJcblx0XHRcdFx0XHRcdHZhcmlhbnQ9J2g2J1xyXG5cdFx0XHRcdFx0XHRjb21wb25lbnQ9J2gzJ1xyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fT5cclxuXHRcdFx0XHRcdFx0TGlzdGUgZGVzIGVxdWlwZW1lbnRzIDpcclxuXHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdFx0e2dpdGUuZXF1aXBlbWVudEludGVyaWV1ci5tYXAoKGVxdWlwZW1lbnQpID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8bGk+e2VxdWlwZW1lbnR9PC9saT5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxyXG5cdFx0XHRcdFx0PFN3aXBlclxyXG5cdFx0XHRcdFx0XHRpZD0nbWFpbkludCdcclxuXHRcdFx0XHRcdFx0c3BhY2VCZXR3ZWVuPXswfVxyXG5cdFx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3PXsxfVxyXG5cdFx0XHRcdFx0XHR0aHVtYnM9e3sgc3dpcGVyOiB0aHVtYnNTd2lwZXJJbnQgfX1cclxuXHRcdFx0XHRcdFx0bmF2aWdhdGlvblxyXG5cdFx0XHRcdFx0XHRwYWdpbmF0aW9uPXt7IGNsaWNrYWJsZTogdHJ1ZSB9fVxyXG5cdFx0XHRcdFx0XHRzY3JvbGxiYXI9e3sgZHJhZ2dhYmxlOiB0cnVlIH19XHJcblx0XHRcdFx0XHRcdG9uU3dpcGVyPXtzZXRUaHVtYnNTd2lwZXJJbnR9XHJcblx0XHRcdFx0XHRcdHdhdGNoU2xpZGVzVmlzaWJpbGl0eVxyXG5cdFx0XHRcdFx0XHR3YXRjaFNsaWRlc1Byb2dyZXNzXHJcblx0XHRcdFx0XHRcdG9uUmVhY2hFbmQ9eyhzd2lwZXIpID0+IChzd2lwZXIuYWN0aXZlSW5kZXggPSAwKX1cclxuXHRcdFx0XHRcdFx0b25TbGlkZUNoYW5nZT17KCkgPT4gY29uc29sZS5sb2coJ3NsaWRlIGNoYW5nZScpfT5cclxuXHRcdFx0XHRcdFx0e2Nhcm91c2VsKCdpbnRlcmlldXInKX1cclxuXHRcdFx0XHRcdDwvU3dpcGVyPlxyXG5cdFx0XHRcdFx0PFN3aXBlclxyXG5cdFx0XHRcdFx0XHRpZD0ndGh1bWJzSW50J1xyXG5cdFx0XHRcdFx0XHRzcGFjZUJldHdlZW49ezV9XHJcblx0XHRcdFx0XHRcdHNsaWRlc1BlclZpZXc9ezV9XHJcblx0XHRcdFx0XHRcdHdhdGNoU2xpZGVzVmlzaWJpbGl0eVxyXG5cdFx0XHRcdFx0XHR3YXRjaFNsaWRlc1Byb2dyZXNzXHJcblx0XHRcdFx0XHRcdG9uU3dpcGVyPXtzZXRUaHVtYnNTd2lwZXJJbnR9PlxyXG5cdFx0XHRcdFx0XHR7Y2Fyb3VzZWwoJ2ludGVyaWV1cicpfVxyXG5cdFx0XHRcdFx0PC9Td2lwZXI+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHQ8L1BhcGVyPlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25QaXNjaW5lID0gKCkgPT4gKFxyXG5cdFx0PFBhcGVyIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcblx0XHRcdDxUeXBvZ3JhcGh5XHJcblx0XHRcdFx0dmFyaWFudD0naDMnXHJcblx0XHRcdFx0Y29tcG9uZW50PSdoMidcclxuXHRcdFx0XHRzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fT5cclxuXHRcdFx0XHRQaXNjaW5lXHJcblx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHJcblx0XHRcdDxHcmlkXHJcblx0XHRcdFx0Y29udGFpbmVyXHJcblx0XHRcdFx0ZGlyZWN0aW9uPSdyb3cnXHJcblx0XHRcdFx0anVzdGlmeT0nc3BhY2UtYXJvdW5kJ1xyXG5cdFx0XHRcdGFsaWduSXRlbXM9J2ZsZXgtc3RhcnQnXHJcblx0XHRcdFx0c3BhY2luZz17M30+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cclxuXHRcdFx0XHRcdDxTd2lwZXJcclxuXHRcdFx0XHRcdFx0aWQ9J21haW5QaXMnXHJcblx0XHRcdFx0XHRcdHNwYWNlQmV0d2Vlbj17MH1cclxuXHRcdFx0XHRcdFx0c2xpZGVzUGVyVmlldz17MX1cclxuXHRcdFx0XHRcdFx0dGh1bWJzPXt7IHN3aXBlcjogdGh1bWJzU3dpcGVyUGlzIH19XHJcblx0XHRcdFx0XHRcdG5hdmlnYXRpb25cclxuXHRcdFx0XHRcdFx0cGFnaW5hdGlvbj17eyBjbGlja2FibGU6IHRydWUgfX1cclxuXHRcdFx0XHRcdFx0c2Nyb2xsYmFyPXt7IGRyYWdnYWJsZTogdHJ1ZSB9fVxyXG5cdFx0XHRcdFx0XHRvblN3aXBlcj17c2V0VGh1bWJzU3dpcGVyUGlzfVxyXG5cdFx0XHRcdFx0XHR3YXRjaFNsaWRlc1Zpc2liaWxpdHlcclxuXHRcdFx0XHRcdFx0d2F0Y2hTbGlkZXNQcm9ncmVzc1xyXG5cdFx0XHRcdFx0XHRvblNsaWRlQ2hhbmdlPXsoKSA9PiBjb25zb2xlLmxvZygnc2xpZGUgY2hhbmdlJyl9PlxyXG5cdFx0XHRcdFx0XHR7Y2Fyb3VzZWwoJ3Bpc2NpbmUnKX1cclxuXHRcdFx0XHRcdDwvU3dpcGVyPlxyXG5cdFx0XHRcdFx0PFN3aXBlclxyXG5cdFx0XHRcdFx0XHRpZD0ndGh1bWJzUGlzJ1xyXG5cdFx0XHRcdFx0XHRzcGFjZUJldHdlZW49ezV9XHJcblx0XHRcdFx0XHRcdHNsaWRlc1BlclZpZXc9ezV9XHJcblx0XHRcdFx0XHRcdG9uU3dpcGVyPXtzZXRUaHVtYnNTd2lwZXJQaXN9PlxyXG5cdFx0XHRcdFx0XHR7Y2Fyb3VzZWwoJ3Bpc2NpbmUnKX1cclxuXHRcdFx0XHRcdDwvU3dpcGVyPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdFx0aXRlbVxyXG5cdFx0XHRcdFx0bWQ9ezZ9XHJcblx0XHRcdFx0XHR4cz17MTJ9XHJcblx0XHRcdFx0XHRzdHlsZT17eyBwYWRkaW5nTGVmdDogJzIwcHgnLCBwYWRkaW5nUmlnaHQ6ICcyMHB4JyB9fT5cclxuXHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJyBjb21wb25lbnQ9J3AnPlxyXG5cdFx0XHRcdFx0XHR7Z2l0ZS50ZXh0ZVBpc2NpbmV9XHJcblx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdDxUeXBvZ3JhcGh5XHJcblx0XHRcdFx0XHRcdHZhcmlhbnQ9J2g2J1xyXG5cdFx0XHRcdFx0XHRjb21wb25lbnQ9J2gzJ1xyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fT5cclxuXHRcdFx0XHRcdFx0TGlzdGUgZGVzIGVxdWlwZW1lbnRzIDpcclxuXHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdFx0e2dpdGUuZXF1aXBlbWVudFBpc2NpbmUubWFwKChlcXVpcGVtZW50KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PGxpPntlcXVpcGVtZW50fTwvbGk+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdDwvUGFwZXI+XHJcblx0KTtcclxuXHJcblx0Y29uc3QgY2Fyb3VzZWxSZXZpZXdzID0gKCkgPT5cclxuXHRcdHJldmlld3MubWFwKChyZXZpZXcsIGkpID0+IChcclxuXHRcdFx0PFN3aXBlclNsaWRlXHJcblx0XHRcdFx0a2V5PXtgc2xpZGUtJHtpfWB9XHJcblx0XHRcdFx0c3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICM3MTcxNzEnIH19PlxyXG5cdFx0XHRcdDxkaXYgc3R5bGU+XHJcblx0XHRcdFx0XHQ8cD57cmV2aWV3LmNvbW1lbnRhaXJlfTwvcD5cclxuXHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdDxOb3RlIHZhbHVlPXtyZXZpZXcubm90ZX0gLz5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDxoND57cmV2aWV3LmNsaWVudH08L2g0PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L1N3aXBlclNsaWRlPlxyXG5cdFx0KSk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25SZXZpZXdzID0gKCkgPT4gKFxyXG5cdFx0PFBhcGVyIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcblx0XHRcdDxUeXBvZ3JhcGh5XHJcblx0XHRcdFx0dmFyaWFudD0naDMnXHJcblx0XHRcdFx0Y29tcG9uZW50PSdoMidcclxuXHRcdFx0XHRzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fT5cclxuXHRcdFx0XHRDZSBxdWUgbm9zIGNsaWVudHMgZGlzZW50IGRlIGNlIGfDrnRlXHJcblx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0PFN3aXBlclxyXG5cdFx0XHRcdGlkPSdtYWluUGlzJ1xyXG5cdFx0XHRcdHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4JyB9fVxyXG5cdFx0XHRcdHNwYWNlQmV0d2Vlbj17MjB9XHJcblx0XHRcdFx0c2xpZGVzUGVyVmlldz17M31cclxuXHRcdFx0XHRuYXZpZ2F0aW9uXHJcblx0XHRcdFx0cGFnaW5hdGlvbj17eyBjbGlja2FibGU6IHRydWUgfX1cclxuXHRcdFx0XHRzY3JvbGxiYXI9e3sgZHJhZ2dhYmxlOiB0cnVlIH19XHJcblx0XHRcdFx0b25Td2lwZXI9eygpID0+IGNvbnNvbGUubG9nKCdzd2lwZScpfVxyXG5cdFx0XHRcdHdhdGNoU2xpZGVzVmlzaWJpbGl0eVxyXG5cdFx0XHRcdHdhdGNoU2xpZGVzUHJvZ3Jlc3NcclxuXHRcdFx0XHRvblNsaWRlQ2hhbmdlPXsoKSA9PiBjb25zb2xlLmxvZygnc2xpZGUgY2hhbmdlJyl9PlxyXG5cdFx0XHRcdHtjYXJvdXNlbFJldmlld3MoKX1cclxuXHRcdFx0PC9Td2lwZXI+XHJcblx0XHQ8L1BhcGVyPlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25WaWRlb0NvbnRhY3QgPSAoKSA9PiAoXHJcblx0XHQ8UGFwZXIgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuXHRcdFx0PEdyaWRcclxuXHRcdFx0XHRjb250YWluZXJcclxuXHRcdFx0XHRkaXJlY3Rpb249J3JvdydcclxuXHRcdFx0XHRqdXN0aWZ5PSdzcGFjZS1hcm91bmQnXHJcblx0XHRcdFx0YWxpZ25JdGVtcz0nZmxleC1zdGFydCdcclxuXHRcdFx0XHRzcGFjaW5nPXszfT5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxyXG5cdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlRvdXIgZHUgZ8OudGUgZW4gdmlkw6lvPC9oMj5cclxuXHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdtdC01J1xyXG5cdFx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17YWZmaWNoZVZpZGVvKCl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxyXG5cdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPkVjcml2ZXotbm91cyAhPC9oMj5cclxuXHRcdFx0XHRcdDxDb250YWN0Rm9ybSAvPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0PC9QYXBlcj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uQ2FsZW5kcmllciA9ICgpID0+IChcclxuXHRcdDxQYXBlciBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG5cdFx0XHQ8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+Q2FsZW5kcmllciBkZXMgZGlzcG9uaWJpbGl0w6lzPC9oMj5cclxuXHRcdFx0PGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17YWZmaWNoZUNhbGVuZHJpZXIoKX0gLz5cclxuXHRcdDwvUGFwZXI+XHJcblx0KTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvbk1hcCA9ICgpID0+IChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgdGV4dC1jZW50ZXInPlxyXG5cdFx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XHJcblx0XHRcdFx0XHRJdGluw6lyYWlyZSBjb25zZWlsbMOpIGRlcHVpcyB2b3RyZSBwb3NpdGlvblxyXG5cdFx0XHRcdDwvaDI+XHJcblx0XHRcdFx0PHA+QWZmaWNoZSBsYSBtYXAgaWNpPC9wPlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e2hlYWQoKX1cclxuXHRcdFx0PExheW91dD5cclxuXHRcdFx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHRcdFx0ey8qIDxoMj5JbmZvcyBkdSBnaXRlPC9oMj4gKi99XHJcblx0XHRcdFx0XHR7Lyoge0pTT04uc3RyaW5naWZ5KGdpdGUpfSAqL31cclxuXHRcdFx0XHRcdHtqdW1ib3Ryb24oKX1cclxuXHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0e3NlY3Rpb25FeHRlcmlldXIoKX1cclxuXHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0e3NlY3Rpb25JbnRlcmlldXIoKX1cclxuXHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0e3NlY3Rpb25QaXNjaW5lKCl9XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdHsvKiB7Y29uc29sZS5sb2cocmV2aWV3cyl9ICovfVxyXG5cdFx0XHRcdFx0e3NlY3Rpb25SZXZpZXdzKCl9XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdHtzZWN0aW9uVmlkZW9Db250YWN0KCl9XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdHtzZWN0aW9uQ2FsZW5kcmllcigpfVxyXG5cdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHR7c2VjdGlvbk1hcCgpfVxyXG5cdFx0XHRcdDwvQ29udGFpbmVyPlxyXG5cdFx0XHQ8L0xheW91dD5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcblx0Ly9saXN0ZXIgbGVzIG5vbXMgZGUgZ2l0ZXNcclxuXHRjb25zdCBnaXRlc05vbSA9IGF3YWl0IGxpc3RHaXRlc05vbXMoKTtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cGF0aHM6IGdpdGVzTm9tLm1hcCgobm9tKSA9PiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cGFyYW1zOiB7IGlkOiBub20uX2lkLCBzbHVnOiBub20uc2x1ZyB9LFxyXG5cdFx0XHR9O1xyXG5cdFx0fSksXHJcblx0XHRmYWxsYmFjazogZmFsc2UsXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuXHQvLyBjb25zb2xlLmxvZyhxdWVyeSk7XHJcblx0cmV0dXJuIGxpc3RHaXRlRGV0YWlscyhjb250ZXh0LnBhcmFtcy5zbHVnKS50aGVuKChnaXRlKSA9PiB7XHJcblx0XHRpZiAoZ2l0ZS5lcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhnaXRlLmVycm9yKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBsaXN0UGhvdG9zQnlOb20oZ2l0ZS5zbHVnKS50aGVuKChwaG90b3MpID0+IHtcclxuXHRcdFx0XHRpZiAocGhvdG9zLmVycm9yKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhwaG90b3MuZXJyb3IpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gbGlzdFJldmlld3NCeVNsdWcoZ2l0ZS5zbHVnKS50aGVuKChyZXZpZXdzKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXZpZXdzLmVycm9yKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmV2aWV3cy5lcnJvcik7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHsgcHJvcHM6IHsgZ2l0ZSwgcGhvdG9zLCByZXZpZXdzIH0gfTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2l0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==