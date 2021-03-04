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
var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\gite\\[slug].js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 // import Swiper core and required modules



swiper__WEBPACK_IMPORTED_MODULE_5__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_5__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_5__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_5__["Scrollbar"], swiper__WEBPACK_IMPORTED_MODULE_5__["A11y"], swiper__WEBPACK_IMPORTED_MODULE_5__["Controller"], swiper__WEBPACK_IMPORTED_MODULE_5__["Thumbs"]]);






var Gite = function Gite(_ref) {
  _s();

  var gite = _ref.gite,
      photos = _ref.photos,
      reviews = _ref.reviews;

  var head = function head() {
    return __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 3
      }
    }, __jsx("title", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 4
      }
    }, _config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"], " | ", gite.nom, ' '), __jsx("meta", {
      name: "description",
      content: gite.mdesc,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 4
      }
    }), __jsx("link", {
      rel: "canonical",
      href: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"], "/gite/").concat(gite.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:title",
      content: "".concat(gite.nom, " | ").concat(_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:description",
      content: gite.mdesc,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:type",
      content: "website",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:url",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"], "/gite/").concat(gite.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:site_name",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:site_name",
      content: _config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:image",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/blog/photo/").concat(gite.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:image:secure_url",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/gite/photo/").concat(gite.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 4
      }
    }), __jsx("meta", {
      property: "og:image:type",
      content: "image/jpg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
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
        lineNumber: 74,
        columnNumber: 3
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Container"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 4
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Paper"], {
      style: {
        padding: '10px',
        marginTop: '10px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 5
      }
    }, __jsx("h1", {
      className: "display-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 6
      }
    }, "Pr\xE9sentation du g\xEEte ", gite.nom), __jsx("p", {
      className: "lead",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 6
      }
    }, gite.presGiteSEO), __jsx("hr", {
      className: "my-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 6
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 6
      }
    }, "It uses utility classes for typography and spacing to space content out within the larger container."), __jsx("p", {
      className: "lead",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 6
      }
    }))));
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
          lineNumber: 97,
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
          lineNumber: 101,
          columnNumber: 5
        }
      }));
    });
  };

  var sectionExterieur = function sectionExterieur() {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Container"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 4
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 5
      }
    }, "Partie ext\xE9rieur"), __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 6
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
        lineNumber: 121,
        columnNumber: 7
      }
    }, carousel('exterieur')), __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__["Swiper"], {
      id: "thumbsExt",
      spaceBetween: 5,
      slidesPerView: 5,
      onSwiper: setThumbsSwiperExt,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 7
      }
    }, carousel('exterieur'))), __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 6
      }
    }, gite.texteExterieur))));
  };

  var sectionInterieur = function sectionInterieur() {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Container"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 4
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 5
      }
    }, "Partie int\xE9rieur"), __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 6
      }
    }, gite.texteInterieur), __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 6
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
        lineNumber: 156,
        columnNumber: 7
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
        lineNumber: 171,
        columnNumber: 7
      }
    }, carousel('interieur'))))));
  };

  var sectionPiscine = function sectionPiscine() {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Container"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 4
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 5
      }
    }, "Partie piscine"), __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 6
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
        lineNumber: 192,
        columnNumber: 7
      }
    }, carousel('piscine')), __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__["Swiper"], {
      id: "thumbsPis",
      spaceBetween: 5,
      slidesPerView: 5,
      onSwiper: setThumbsSwiperPis,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 7
      }
    }, carousel('piscine'))), __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 6
      }
    }, gite.textePiscine))));
  };

  var carouselReviews = function carouselReviews() {
    return reviews.map(function (review, i) {
      return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Carousel"].Item, {
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
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
          lineNumber: 223,
          columnNumber: 5
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Carousel"].Caption, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 5
        }
      }, __jsx("p", {
        style: {
          marginTop: '-250px'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 6
        }
      }, review.commentaire), __jsx("hr", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 6
        }
      }), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 6
        }
      }, __jsx(_components_admin_Note__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: review.note,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 7
        }
      })), __jsx("h4", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 6
        }
      }, review.client)));
    });
  };

  var sectionReviews = function sectionReviews() {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Container"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 4
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 5
      }
    }, "Ce que nos clients disent de ce g\xEEte"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Carousel"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 5
      }
    }, carouselReviews())));
  };

  var sectionVideoContact = function sectionVideoContact() {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Container"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 4
      }
    }, __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 6
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 7
      }
    }, "Tour du g\xEEte en vid\xE9o"), __jsx("div", {
      className: "mt-5",
      dangerouslySetInnerHTML: afficheVideo(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 7
      }
    })), __jsx("div", {
      className: "col-md-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 6
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 7
      }
    }, "Ecrivez-nous !"), __jsx(_components_ContactForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
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
        lineNumber: 274,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 4
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 5
      }
    }, "Calendrier des disponibilit\xE9s"), __jsx("div", {
      dangerouslySetInnerHTML: afficheCalendrier(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
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
        lineNumber: 283,
        columnNumber: 3
      }
    }, __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 4
      }
    }, __jsx("h2", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 5
      }
    }, "Itin\xE9raire conseill\xE9 depuis votre position"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 5
      }
    }, "Affiche la map ici")));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, head(), __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 4
    }
  }, jumbotron(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 5
    }
  }), sectionExterieur(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 5
    }
  }), sectionInterieur(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 5
    }
  }), sectionPiscine(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 5
    }
  }), sectionReviews(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 5
    }
  }), sectionVideoContact(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 5
    }
  }), sectionCalendrier(), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 5
    }
  }), sectionMap()));
};

_s(Gite, "lpzLC85MfudqhPny0nDdkEcbVoY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2l0ZS9bc2x1Z10uanMiXSwibmFtZXMiOlsiU3dpcGVyQ29yZSIsInVzZSIsIk5hdmlnYXRpb24iLCJQYWdpbmF0aW9uIiwiU2Nyb2xsYmFyIiwiQTExeSIsIkNvbnRyb2xsZXIiLCJUaHVtYnMiLCJHaXRlIiwiZ2l0ZSIsInBob3RvcyIsInJldmlld3MiLCJoZWFkIiwiQVBQX05BTUUiLCJub20iLCJtZGVzYyIsIkRPTUFJTiIsInNsdWciLCJBUEkiLCJhZmZpY2hlQ2FsZW5kcmllciIsIl9faHRtbCIsImNhbGVuZHJpZXJMaW5rIiwiYWZmaWNoZVZpZGVvIiwidmlkZW9MaW5rIiwidXNlU3RhdGUiLCJvcGVuIiwic3RhdGUiLCJzZXRTdGF0ZSIsImhhbmRsZUNsaWNrIiwidGh1bWJzU3dpcGVyRXh0Iiwic2V0VGh1bWJzU3dpcGVyRXh0IiwidGh1bWJzU3dpcGVySW50Iiwic2V0VGh1bWJzU3dpcGVySW50IiwidGh1bWJzU3dpcGVyUGlzIiwic2V0VGh1bWJzU3dpcGVyUGlzIiwianVtYm90cm9uIiwicGFkZGluZyIsIm1hcmdpblRvcCIsInByZXNHaXRlU0VPIiwiY2Fyb3VzZWwiLCJzZWN0aW9uIiwiZmlsdGVyZWRQaG90b3MiLCJmaWx0ZXIiLCJwaG90byIsInNlY3Rpb25Bc3NvY2llZSIsIm1hcCIsImkiLCJsaXN0U3R5bGUiLCJsb2NhdGlvbiIsImFsdCIsInNlY3Rpb25FeHRlcmlldXIiLCJzd2lwZXIiLCJjbGlja2FibGUiLCJkcmFnZ2FibGUiLCJjb25zb2xlIiwibG9nIiwidGV4dGVFeHRlcmlldXIiLCJzZWN0aW9uSW50ZXJpZXVyIiwidGV4dGVJbnRlcmlldXIiLCJhY3RpdmVJbmRleCIsInNlY3Rpb25QaXNjaW5lIiwidGV4dGVQaXNjaW5lIiwiY2Fyb3VzZWxSZXZpZXdzIiwicmV2aWV3IiwiY29tbWVudGFpcmUiLCJub3RlIiwiY2xpZW50Iiwic2VjdGlvblJldmlld3MiLCJzZWN0aW9uVmlk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QTtBQUFBLE9BQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDO0FBQUksZUFBUyxFQUFDLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwREFERCxFQUlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBSkQsQ0FERCxDQURrQjtBQUFBLEdBQW5COztBQVdBLFNBQ0MsbUVBQ0UxRCxJQUFJLEVBRE4sRUFFQyxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRXVCLFNBQVMsRUFIWCxFQUlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRCxFQUtFZSxnQkFBZ0IsRUFMbEIsRUFNQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkQsRUFPRU8sZ0JBQWdCLEVBUGxCLEVBUUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJELEVBU0VHLGNBQWMsRUFUaEIsRUFVQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkQsRUFZRU8sY0FBYyxFQVpoQixFQWFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiRCxFQWNFQyxtQkFBbUIsRUFkckIsRUFlQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkQsRUFnQkVDLGlCQUFpQixFQWhCbkIsRUFpQkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCRCxFQWtCRUMsVUFBVSxFQWxCWixDQUZELENBREQ7QUF5QkEsQ0FqU0Q7O0dBQU05RCxJOztLQUFBQSxJOztBQXVVU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2l0ZS9bc2x1Z10uZTcxODQ3Nzg0YmRiNWM1Y2U5MmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQnO1xyXG5pbXBvcnQgeyBBUEksIERPTUFJTiwgQVBQX05BTUUgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG4vLyBpbXBvcnQgU3dpcGVyIGNvcmUgYW5kIHJlcXVpcmVkIG1vZHVsZXNcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gJ3N3aXBlci9yZWFjdCc7XHJcbmltcG9ydCBTd2lwZXJDb3JlLCB7XHJcblx0TmF2aWdhdGlvbixcclxuXHRQYWdpbmF0aW9uLFxyXG5cdFNjcm9sbGJhcixcclxuXHRBMTF5LFxyXG5cdENvbnRyb2xsZXIsXHJcblx0VGh1bWJzLFxyXG59IGZyb20gJ3N3aXBlcic7XHJcblxyXG5Td2lwZXJDb3JlLnVzZShbTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiwgU2Nyb2xsYmFyLCBBMTF5LCBDb250cm9sbGVyLCBUaHVtYnNdKTtcclxuaW1wb3J0IHtcclxuXHRsaXN0R2l0ZURldGFpbHMsXHJcblx0bGlzdEdpdGVzTm9tcyxcclxuXHRsaXN0UGhvdG9zQnlOb20sXHJcbn0gZnJvbSAnLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250YWN0Rm9ybSc7XHJcbmltcG9ydCB7IGxpc3RSZXZpZXdzQnlTbHVnIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9yZXZpZXdBY3Rpb25zJztcclxuaW1wb3J0IE5vdGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hZG1pbi9Ob3RlJztcclxuaW1wb3J0IHsgUGFwZXIsIENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmNvbnN0IEdpdGUgPSAoeyBnaXRlLCBwaG90b3MsIHJldmlld3MgfSkgPT4ge1xyXG5cdGNvbnN0IGhlYWQgPSAoKSA9PiAoXHJcblx0XHQ8SGVhZD5cclxuXHRcdFx0PHRpdGxlPlxyXG5cdFx0XHRcdHtBUFBfTkFNRX0gfCB7Z2l0ZS5ub219eycgJ31cclxuXHRcdFx0PC90aXRsZT5cclxuXHRcdFx0PG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2dpdGUubWRlc2N9IC8+XHJcblx0XHRcdDxsaW5rIHJlbD0nY2Fub25pY2FsJyBocmVmPXtgJHtET01BSU59L2dpdGUvJHtnaXRlLnNsdWd9YH0gLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnRpdGxlJyBjb250ZW50PXtgJHtnaXRlLm5vbX0gfCAke0FQUF9OQU1FfWB9IC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzpkZXNjcmlwdGlvbicgY29udGVudD17Z2l0ZS5tZGVzY30gLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnR5cGUnIGNvbnRlbnQ9J3dlYnNpdGUnIC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzp1cmwnIGNvbnRlbnQ9e2Ake0RPTUFJTn0vZ2l0ZS8ke2dpdGUuc2x1Z31gfSAvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6c2l0ZV9uYW1lJyBjb250ZW50PXtgJHtBUFBfTkFNRX1gfSAvPlxyXG5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnNpdGVfbmFtZScgY29udGVudD17QVBQX05BTUV9IC8+XHJcblxyXG5cdFx0XHQ8bWV0YVxyXG5cdFx0XHRcdHByb3BlcnR5PSdvZzppbWFnZSdcclxuXHRcdFx0XHRjb250ZW50PXtgJHtBUEl9L2Jsb2cvcGhvdG8vJHtnaXRlLnNsdWd9YH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PG1ldGFcclxuXHRcdFx0XHRwcm9wZXJ0eT0nb2c6aW1hZ2U6c2VjdXJlX3VybCdcclxuXHRcdFx0XHRjb250ZW50PXtgJHtBUEl9L2dpdGUvcGhvdG8vJHtnaXRlLnNsdWd9YH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOmltYWdlOnR5cGUnIGNvbnRlbnQ9J2ltYWdlL2pwZycgLz5cclxuXHRcdFx0ey8qIDxtZXRhIHByb3BlcnR5PSdmYjphcHBfaWQnIGNvbnRlbnQ9e2Ake0ZCX0FQUF9JRH1gfSAvPiAqL31cclxuXHRcdDwvSGVhZD5cclxuXHQpO1xyXG5cdGNvbnN0IGFmZmljaGVDYWxlbmRyaWVyID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIHsgX19odG1sOiBnaXRlLmNhbGVuZHJpZXJMaW5rIH07XHJcblx0fTtcclxuXHRjb25zdCBhZmZpY2hlVmlkZW8gPSAoKSA9PiB7XHJcblx0XHRyZXR1cm4geyBfX2h0bWw6IGdpdGUudmlkZW9MaW5rIH07XHJcblx0fTtcclxuXHJcblx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG5cdFx0c2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IFt0aHVtYnNTd2lwZXJFeHQsIHNldFRodW1ic1N3aXBlckV4dF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHRjb25zdCBbdGh1bWJzU3dpcGVySW50LCBzZXRUaHVtYnNTd2lwZXJJbnRdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW3RodW1ic1N3aXBlclBpcywgc2V0VGh1bWJzU3dpcGVyUGlzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuXHRjb25zdCBqdW1ib3Ryb24gPSAoKSA9PiAoXHJcblx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0PENvbnRhaW5lcj5cclxuXHRcdFx0XHQ8UGFwZXIgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9J2Rpc3BsYXktMyc+XHJcblx0XHRcdFx0XHRcdFByw6lzZW50YXRpb24gZHUgZ8OudGUge2dpdGUubm9tfVxyXG5cdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nbGVhZCc+e2dpdGUucHJlc0dpdGVTRU99PC9wPlxyXG5cdFx0XHRcdFx0PGhyIGNsYXNzTmFtZT0nbXktMicgLz5cclxuXHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRJdCB1c2VzIHV0aWxpdHkgY2xhc3NlcyBmb3IgdHlwb2dyYXBoeSBhbmQgc3BhY2luZyB0b1xyXG5cdFx0XHRcdFx0XHRzcGFjZSBjb250ZW50IG91dCB3aXRoaW4gdGhlIGxhcmdlciBjb250YWluZXIuXHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2xlYWQnPjwvcD5cclxuXHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdDwvc2VjdGlvbj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBjYXJvdXNlbCA9IChzZWN0aW9uKSA9PiB7XHJcblx0XHRjb25zdCBmaWx0ZXJlZFBob3RvcyA9IHBob3Rvcy5maWx0ZXIoKHBob3RvKSA9PiB7XHJcblx0XHRcdHJldHVybiBwaG90by5zZWN0aW9uQXNzb2NpZWUgPT09IHNlY3Rpb247XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBmaWx0ZXJlZFBob3Rvcy5tYXAoKHBob3RvLCBpKSA9PiAoXHJcblx0XHRcdDxTd2lwZXJTbGlkZVxyXG5cdFx0XHRcdGtleT17YHNsaWRlLSR7aX1gfVxyXG5cdFx0XHRcdHRhZz0nbGknXHJcblx0XHRcdFx0c3R5bGU9e3sgbGlzdFN0eWxlOiAnbm9uZScgfX0+XHJcblx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHQvLyBjbGFzc05hbWU9J2QtYmxvY2sgdy0xMDAnXHJcblx0XHRcdFx0XHRzcmM9e3Bob3RvLmxvY2F0aW9ufVxyXG5cdFx0XHRcdFx0YWx0PXtwaG90by5hbHR9XHJcblx0XHRcdFx0XHRzdHlsZT17eyBsaXN0U3R5bGU6ICdub25lJyB9fVxyXG5cdFx0XHRcdFx0c3JjU2V0XHJcblx0XHRcdFx0XHRsYXlvdXQ9J3Jlc3BvbnNpdmUnXHJcblx0XHRcdFx0XHR3aWR0aD17NTAwfVxyXG5cdFx0XHRcdFx0aGVpZ2h0PXszNzV9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9Td2lwZXJTbGlkZT5cclxuXHRcdCkpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25FeHRlcmlldXIgPSAoKSA9PiAoXHJcblx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+UGFydGllIGV4dMOpcmlldXI8L2gyPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0PFN3aXBlclxyXG5cdFx0XHRcdFx0XHRcdGlkPSdtYWluRXh0J1xyXG5cdFx0XHRcdFx0XHRcdHNwYWNlQmV0d2Vlbj17MH1cclxuXHRcdFx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3PXsxfVxyXG5cdFx0XHRcdFx0XHRcdHRodW1icz17eyBzd2lwZXI6IHRodW1ic1N3aXBlckV4dCB9fVxyXG5cdFx0XHRcdFx0XHRcdG5hdmlnYXRpb25cclxuXHRcdFx0XHRcdFx0XHRwYWdpbmF0aW9uPXt7IGNsaWNrYWJsZTogdHJ1ZSB9fVxyXG5cdFx0XHRcdFx0XHRcdHNjcm9sbGJhcj17eyBkcmFnZ2FibGU6IHRydWUgfX1cclxuXHRcdFx0XHRcdFx0XHRvblN3aXBlcj17c2V0VGh1bWJzU3dpcGVyRXh0fVxyXG5cdFx0XHRcdFx0XHRcdHdhdGNoU2xpZGVzVmlzaWJpbGl0eVxyXG5cdFx0XHRcdFx0XHRcdHdhdGNoU2xpZGVzUHJvZ3Jlc3NcclxuXHRcdFx0XHRcdFx0XHRvblNsaWRlQ2hhbmdlPXsoKSA9PiBjb25zb2xlLmxvZygnc2xpZGUgY2hhbmdlJyl9PlxyXG5cdFx0XHRcdFx0XHRcdHtjYXJvdXNlbCgnZXh0ZXJpZXVyJyl9XHJcblx0XHRcdFx0XHRcdDwvU3dpcGVyPlxyXG5cdFx0XHRcdFx0XHQ8U3dpcGVyXHJcblx0XHRcdFx0XHRcdFx0aWQ9J3RodW1ic0V4dCdcclxuXHRcdFx0XHRcdFx0XHRzcGFjZUJldHdlZW49ezV9XHJcblx0XHRcdFx0XHRcdFx0c2xpZGVzUGVyVmlldz17NX1cclxuXHRcdFx0XHRcdFx0XHRvblN3aXBlcj17c2V0VGh1bWJzU3dpcGVyRXh0fT5cclxuXHRcdFx0XHRcdFx0XHR7Y2Fyb3VzZWwoJ2V4dGVyaWV1cicpfVxyXG5cdFx0XHRcdFx0XHQ8L1N3aXBlcj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz57Z2l0ZS50ZXh0ZUV4dGVyaWV1cn08L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0PC9Db250YWluZXI+XHJcblx0KTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvbkludGVyaWV1ciA9ICgpID0+IChcclxuXHRcdDxDb250YWluZXI+XHJcblx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5QYXJ0aWUgaW50w6lyaWV1cjwvaDI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPntnaXRlLnRleHRlSW50ZXJpZXVyfTwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0PFN3aXBlclxyXG5cdFx0XHRcdFx0XHRcdGlkPSdtYWluSW50J1xyXG5cdFx0XHRcdFx0XHRcdHNwYWNlQmV0d2Vlbj17MH1cclxuXHRcdFx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3PXsxfVxyXG5cdFx0XHRcdFx0XHRcdHRodW1icz17eyBzd2lwZXI6IHRodW1ic1N3aXBlckludCB9fVxyXG5cdFx0XHRcdFx0XHRcdG5hdmlnYXRpb25cclxuXHRcdFx0XHRcdFx0XHRwYWdpbmF0aW9uPXt7IGNsaWNrYWJsZTogdHJ1ZSB9fVxyXG5cdFx0XHRcdFx0XHRcdHNjcm9sbGJhcj17eyBkcmFnZ2FibGU6IHRydWUgfX1cclxuXHRcdFx0XHRcdFx0XHRvblN3aXBlcj17c2V0VGh1bWJzU3dpcGVySW50fVxyXG5cdFx0XHRcdFx0XHRcdHdhdGNoU2xpZGVzVmlzaWJpbGl0eVxyXG5cdFx0XHRcdFx0XHRcdHdhdGNoU2xpZGVzUHJvZ3Jlc3NcclxuXHRcdFx0XHRcdFx0XHRvblJlYWNoRW5kPXsoc3dpcGVyKSA9PiAoc3dpcGVyLmFjdGl2ZUluZGV4ID0gMCl9XHJcblx0XHRcdFx0XHRcdFx0b25TbGlkZUNoYW5nZT17KCkgPT4gY29uc29sZS5sb2coJ3NsaWRlIGNoYW5nZScpfT5cclxuXHRcdFx0XHRcdFx0XHR7Y2Fyb3VzZWwoJ2ludGVyaWV1cicpfVxyXG5cdFx0XHRcdFx0XHQ8L1N3aXBlcj5cclxuXHRcdFx0XHRcdFx0PFN3aXBlclxyXG5cdFx0XHRcdFx0XHRcdGlkPSd0aHVtYnNJbnQnXHJcblx0XHRcdFx0XHRcdFx0c3BhY2VCZXR3ZWVuPXs1fVxyXG5cdFx0XHRcdFx0XHRcdHNsaWRlc1BlclZpZXc9ezV9XHJcblx0XHRcdFx0XHRcdFx0d2F0Y2hTbGlkZXNWaXNpYmlsaXR5XHJcblx0XHRcdFx0XHRcdFx0d2F0Y2hTbGlkZXNQcm9ncmVzc1xyXG5cdFx0XHRcdFx0XHRcdG9uU3dpcGVyPXtzZXRUaHVtYnNTd2lwZXJJbnR9PlxyXG5cdFx0XHRcdFx0XHRcdHtjYXJvdXNlbCgnaW50ZXJpZXVyJyl9XHJcblx0XHRcdFx0XHRcdDwvU3dpcGVyPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdDwvQ29udGFpbmVyPlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25QaXNjaW5lID0gKCkgPT4gKFxyXG5cdFx0PENvbnRhaW5lcj5cclxuXHRcdFx0PHNlY3Rpb24+XHJcblx0XHRcdFx0PGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlBhcnRpZSBwaXNjaW5lPC9oMj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcblx0XHRcdFx0XHRcdDxTd2lwZXJcclxuXHRcdFx0XHRcdFx0XHRpZD0nbWFpblBpcydcclxuXHRcdFx0XHRcdFx0XHRzcGFjZUJldHdlZW49ezB9XHJcblx0XHRcdFx0XHRcdFx0c2xpZGVzUGVyVmlldz17MX1cclxuXHRcdFx0XHRcdFx0XHR0aHVtYnM9e3sgc3dpcGVyOiB0aHVtYnNTd2lwZXJQaXMgfX1cclxuXHRcdFx0XHRcdFx0XHRuYXZpZ2F0aW9uXHJcblx0XHRcdFx0XHRcdFx0cGFnaW5hdGlvbj17eyBjbGlja2FibGU6IHRydWUgfX1cclxuXHRcdFx0XHRcdFx0XHRzY3JvbGxiYXI9e3sgZHJhZ2dhYmxlOiB0cnVlIH19XHJcblx0XHRcdFx0XHRcdFx0b25Td2lwZXI9e3NldFRodW1ic1N3aXBlclBpc31cclxuXHRcdFx0XHRcdFx0XHR3YXRjaFNsaWRlc1Zpc2liaWxpdHlcclxuXHRcdFx0XHRcdFx0XHR3YXRjaFNsaWRlc1Byb2dyZXNzXHJcblx0XHRcdFx0XHRcdFx0b25TbGlkZUNoYW5nZT17KCkgPT4gY29uc29sZS5sb2coJ3NsaWRlIGNoYW5nZScpfT5cclxuXHRcdFx0XHRcdFx0XHR7Y2Fyb3VzZWwoJ3Bpc2NpbmUnKX1cclxuXHRcdFx0XHRcdFx0PC9Td2lwZXI+XHJcblx0XHRcdFx0XHRcdDxTd2lwZXJcclxuXHRcdFx0XHRcdFx0XHRpZD0ndGh1bWJzUGlzJ1xyXG5cdFx0XHRcdFx0XHRcdHNwYWNlQmV0d2Vlbj17NX1cclxuXHRcdFx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3PXs1fVxyXG5cdFx0XHRcdFx0XHRcdG9uU3dpcGVyPXtzZXRUaHVtYnNTd2lwZXJQaXN9PlxyXG5cdFx0XHRcdFx0XHRcdHtjYXJvdXNlbCgncGlzY2luZScpfVxyXG5cdFx0XHRcdFx0XHQ8L1N3aXBlcj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz57Z2l0ZS50ZXh0ZVBpc2NpbmV9PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdDwvQ29udGFpbmVyPlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IGNhcm91c2VsUmV2aWV3cyA9ICgpID0+XHJcblx0XHRyZXZpZXdzLm1hcCgocmV2aWV3LCBpKSA9PiAoXHJcblx0XHRcdDxDYXJvdXNlbC5JdGVtIGtleT17aX0+XHJcblx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J2QtYmxvY2sgdy0xMDAnXHJcblx0XHRcdFx0XHRzcmM9eycvaW1hZ2VzL2dyZXkuanBnJ31cclxuXHRcdFx0XHRcdGFsdD17J3RleHRlJ31cclxuXHRcdFx0XHRcdHdpZHRoPXsyMDAwfVxyXG5cdFx0XHRcdFx0aGVpZ2h0PXs4MDB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8Q2Fyb3VzZWwuQ2FwdGlvbj5cclxuXHRcdFx0XHRcdDxwIHN0eWxlPXt7IG1hcmdpblRvcDogJy0yNTBweCcgfX0+e3Jldmlldy5jb21tZW50YWlyZX08L3A+XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHQ8Tm90ZSB2YWx1ZT17cmV2aWV3Lm5vdGV9IC8+XHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8aDQ+e3Jldmlldy5jbGllbnR9PC9oND5cclxuXHRcdFx0XHQ8L0Nhcm91c2VsLkNhcHRpb24+XHJcblx0XHRcdDwvQ2Fyb3VzZWwuSXRlbT5cclxuXHRcdCkpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uUmV2aWV3cyA9ICgpID0+IChcclxuXHRcdDxDb250YWluZXI+XHJcblx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cclxuXHRcdFx0XHRcdENlIHF1ZSBub3MgY2xpZW50cyBkaXNlbnQgZGUgY2UgZ8OudGVcclxuXHRcdFx0XHQ8L2gyPlxyXG5cclxuXHRcdFx0XHQ8Q2Fyb3VzZWw+e2Nhcm91c2VsUmV2aWV3cygpfTwvQ2Fyb3VzZWw+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdDwvQ29udGFpbmVyPlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25WaWRlb0NvbnRhY3QgPSAoKSA9PiAoXHJcblx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcblx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5Ub3VyIGR1IGfDrnRlIGVuIHZpZMOpbzwvaDI+XHJcblx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J210LTUnXHJcblx0XHRcdFx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2FmZmljaGVWaWRlbygpfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxyXG5cdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+RWNyaXZlei1ub3VzICE8L2gyPlxyXG5cdFx0XHRcdFx0XHQ8Q29udGFjdEZvcm0gLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L0NvbnRhaW5lcj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uQ2FsZW5kcmllciA9ICgpID0+IChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgdGV4dC1jZW50ZXInPlxyXG5cdFx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+Q2FsZW5kcmllciBkZXMgZGlzcG9uaWJpbGl0w6lzPC9oMj5cclxuXHRcdFx0XHQ8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXthZmZpY2hlQ2FsZW5kcmllcigpfSAvPlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uTWFwID0gKCkgPT4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciB0ZXh0LWNlbnRlcic+XHJcblx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cclxuXHRcdFx0XHRcdEl0aW7DqXJhaXJlIGNvbnNlaWxsw6kgZGVwdWlzIHZvdHJlIHBvc2l0aW9uXHJcblx0XHRcdFx0PC9oMj5cclxuXHRcdFx0XHQ8cD5BZmZpY2hlIGxhIG1hcCBpY2k8L3A+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7aGVhZCgpfVxyXG5cdFx0XHQ8TGF5b3V0PlxyXG5cdFx0XHRcdHsvKiA8aDI+SW5mb3MgZHUgZ2l0ZTwvaDI+ICovfVxyXG5cdFx0XHRcdHsvKiB7SlNPTi5zdHJpbmdpZnkoZ2l0ZSl9ICovfVxyXG5cdFx0XHRcdHtqdW1ib3Ryb24oKX1cclxuXHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHR7c2VjdGlvbkV4dGVyaWV1cigpfVxyXG5cdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdHtzZWN0aW9uSW50ZXJpZXVyKCl9XHJcblx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0e3NlY3Rpb25QaXNjaW5lKCl9XHJcblx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0ey8qIHtjb25zb2xlLmxvZyhyZXZpZXdzKX0gKi99XHJcblx0XHRcdFx0e3NlY3Rpb25SZXZpZXdzKCl9XHJcblx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0e3NlY3Rpb25WaWRlb0NvbnRhY3QoKX1cclxuXHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHR7c2VjdGlvbkNhbGVuZHJpZXIoKX1cclxuXHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHR7c2VjdGlvbk1hcCgpfVxyXG5cdFx0XHQ8L0xheW91dD5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcblx0Ly9saXN0ZXIgbGVzIG5vbXMgZGUgZ2l0ZXNcclxuXHRjb25zdCBnaXRlc05vbSA9IGF3YWl0IGxpc3RHaXRlc05vbXMoKTtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cGF0aHM6IGdpdGVzTm9tLm1hcCgobm9tKSA9PiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cGFyYW1zOiB7IGlkOiBub20uX2lkLCBzbHVnOiBub20uc2x1ZyB9LFxyXG5cdFx0XHR9O1xyXG5cdFx0fSksXHJcblx0XHRmYWxsYmFjazogZmFsc2UsXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuXHQvLyBjb25zb2xlLmxvZyhxdWVyeSk7XHJcblx0cmV0dXJuIGxpc3RHaXRlRGV0YWlscyhjb250ZXh0LnBhcmFtcy5zbHVnKS50aGVuKChnaXRlKSA9PiB7XHJcblx0XHRpZiAoZ2l0ZS5lcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhnaXRlLmVycm9yKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBsaXN0UGhvdG9zQnlOb20oZ2l0ZS5zbHVnKS50aGVuKChwaG90b3MpID0+IHtcclxuXHRcdFx0XHRpZiAocGhvdG9zLmVycm9yKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhwaG90b3MuZXJyb3IpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gbGlzdFJldmlld3NCeVNsdWcoZ2l0ZS5zbHVnKS50aGVuKChyZXZpZXdzKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXZpZXdzLmVycm9yKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmV2aWV3cy5lcnJvcik7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHsgcHJvcHM6IHsgZ2l0ZSwgcGhvdG9zLCByZXZpZXdzIH0gfTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2l0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==