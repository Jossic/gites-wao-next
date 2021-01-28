webpackHotUpdate_N_E("pages/gite/[slug]",{

/***/ "./pages/gite/[slug].js":
/*!******************************!*\
  !*** ./pages/gite/[slug].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ContactForm */ "./components/ContactForm.js");



var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\gite\\[slug].js",
    _this = undefined,
    _s = $RefreshSig$();

 // import Link from 'next/link';









var Gite = function Gite(_ref) {
  _s();

  var gite = _ref.gite,
      query = _ref.query;
  var photos = [{
    location: 'https://gites-wao.s3.amazonaws.com/OpvcUJi1EH-P1010186.jpg',
    nom: 'P1010186.jpg',
    texteImg: 'lorem lorem lorem'
  }, {
    location: 'https://gites-wao.s3.amazonaws.com/NUKKUUtUDm-P1090714.jpg',
    nom: 'P1090714.jpg',
    texteImg: 'lorem lorem lorem'
  }, {
    location: 'https://gites-wao.s3.amazonaws.com/ibRGvozgYu-P1090716.jpg',
    nom: 'P1090716.jpg',
    texteImg: 'lorem lorem lorem'
  }];

  var afficheCalendrier = function afficheCalendrier() {
    return {
      _html: gite.calendrierLink
    };
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(0),
      activeIndex = _useState[0],
      setActiveIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      animating = _useState2[0],
      setAnimating = _useState2[1];

  var next = function next() {
    if (animating) return;
    var nextIndex = activeIndex === photos.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  var previous = function previous() {
    if (animating) return;
    var nextIndex = activeIndex === 0 ? photos.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  var goToIndex = function goToIndex(newIndex) {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  var jumbotron = function jumbotron() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Jumbotron"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "display-3",
            children: ["Pr\xE9sentation du g\xEEte ", gite.nom]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "lead",
            children: gite.presGiteSEO
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
            className: "my-2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "It uses utility classes for typography and spacing to space content out within the larger container."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "lead"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 3
    }, _this);
  };

  var carousel = function carousel(nom) {
    return photos.map(function (photo) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselItem"], {
        onExiting: function onExiting() {
          return setAnimating(true);
        },
        onExited: function onExited() {
          return setAnimating(false);
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
          src: photo.location,
          alt: photo.nom,
          width: 500,
          height: 375
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselCaption"], {
          captionText: photo.texteImg,
          captionHeader: photo.texteImg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 6
        }, _this)]
      }, photo.location, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 5
      }, _this);
    });
  };

  var sectionExterieur = function sectionExterieur() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Partie ext\xE9rieur"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-6",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"], {
              activeIndex: activeIndex,
              next: next,
              previous: previous,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselIndicators"], {
                items: photos,
                activeIndex: activeIndex,
                onClickHandler: goToIndex
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 8
              }, _this), carousel('exterieur'), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselControl"], {
                direction: "prev",
                directionText: "Previous",
                onClickHandler: previous
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 8
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselControl"], {
                direction: "next",
                directionText: "Next",
                onClickHandler: next
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 8
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-6",
            children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus delectus ipsa, corrupti minus totam nobis non ducimus earum, possimus consectetur sequi suscipit soluta beatae deserunt similique eaque est? Porro iusto voluptatem ipsum optio obcaecati, est quasi corporis quibusdam autem animi at tenetur omnis eveniet eaque exercitationem dolores. Quod, reprehenderit commodi!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 3
    }, _this);
  };

  var sectionInterieur = function sectionInterieur() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Partie int\xE9rieur"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-6",
            children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorum quas asperiores deserunt debitis accusamus amet ipsa dolores quisquam iusto veniam officiis vitae tempore repudiandae quaerat cumque facilis, ab saepe, eveniet voluptas odit perspiciatis alias. Sunt, beatae! Officiis voluptas, adipisci repudiandae quaerat, atque consequuntur ducimus, accusantium velit sint eum dolores."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-6",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"], {
              activeIndex: activeIndex,
              next: next,
              previous: previous,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselIndicators"], {
                items: photos,
                activeIndex: activeIndex,
                onClickHandler: goToIndex
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 8
              }, _this), carousel('interieur'), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselControl"], {
                direction: "prev",
                directionText: "Previous",
                onClickHandler: previous
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 8
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselControl"], {
                direction: "next",
                directionText: "Next",
                onClickHandler: next
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 8
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 3
    }, _this);
  };

  var sectionPiscine = function sectionPiscine() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Partie piscine"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-6",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"], {
              activeIndex: activeIndex,
              next: next,
              previous: previous,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselIndicators"], {
                items: photos,
                activeIndex: activeIndex,
                onClickHandler: goToIndex
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 8
              }, _this), carousel('piscine'), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselControl"], {
                direction: "prev",
                directionText: "Previous",
                onClickHandler: previous
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 8
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselControl"], {
                direction: "next",
                directionText: "Next",
                onClickHandler: next
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 8
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-6",
            children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis delectus vitae numquam optio, a dignissimos, commodi at eum, placeat obcaecati amet iure ipsa fuga dolor facilis sint? Voluptatem consequatur vero voluptates vitae recusandae vel, ab qui molestiae pariatur quis, debitis aut impedit commodi nulla fugit incidunt blanditiis hic a cupiditate."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 3
    }, _this);
  };

  var sectionReview = function sectionReview() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "Ce que nos clients disent de ce g\xEEte"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Liste des reviews"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 3
    }, _this);
  };

  var sectionVideoContact = function sectionVideoContact() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              children: "Ce que nos clients disent de ce g\xEEte"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 251,
              columnNumber: 7
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Liste des reviews"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 7
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              children: "Ecrivez-nous !"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 255,
              columnNumber: 7
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ContactForm__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 256,
              columnNumber: 7
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 254,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 3
    }, _this);
  };

  var sectionCalendrier = function sectionCalendrier() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          dangerouslySetInnerHTML: gite.calendrierLink
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 3
    }, _this);
  };

  var head = function head() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: [_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"], " | ", gite.nom, ' ']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: gite.mdesc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "canonical",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"], "/blogs/").concat(query.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: "".concat(gite.nom, " | ").concat(_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: gite.mdesc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:type",
        content: "website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:url",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"], "/blogs/").concat(query.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:site_name",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:site_name",
        content: _config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/blog/photo/").concat(gite.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image:secure_url",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/gite/photo/").concat(gite.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image:type",
        content: "image/jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 4
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 3
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [head(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Infos du gite"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 5
      }, _this), JSON.stringify(gite), jumbotron(), sectionExterieur(), sectionInterieur(), sectionPiscine(), sectionReview(), sectionVideoContact(), sectionCalendrier()]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_s(Gite, "FYd3Lqf74+dQScd+D3/2SfzV0cE=");

_c = Gite;

Gite.getInitialProps = function (_ref2) {
  var query = _ref2.query;
  // console.log(query);
  return Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_4__["listGiteDetails"])(query.slug).then(function (data) {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        gite: data,
        query: query
      };
    }
  });
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2l0ZS9bc2x1Z10uanMiXSwibmFtZXMiOlsiR2l0ZSIsImdpdGUiLCJxdWVyeSIsInBob3RvcyIsImxvY2F0aW9uIiwibm9tIiwidGV4dGVJbWciLCJhZmZpY2hlQ2FsZW5kcmllciIsIl9odG1sIiwiY2FsZW5kcmllckxpbmsiLCJ1c2VTdGF0ZSIsImFjdGl2ZUluZGV4Iiwic2V0QWN0aXZlSW5kZXgiLCJhbmltYXRpbmciLCJzZXRBbmltYXRpbmciLCJuZXh0IiwibmV4dEluZGV4IiwibGVuZ3RoIiwicHJldmlvdXMiLCJnb1RvSW5kZXgiLCJuZXdJbmRleCIsImp1bWJvdHJvbiIsInByZXNHaXRlU0VPIiwiY2Fyb3VzZWwiLCJtYXAiLCJwaG90byIsInNlY3Rpb25FeHRlcmlldXIiLCJzZWN0aW9uSW50ZXJpZXVyIiwic2VjdGlvblBpc2NpbmUiLCJzZWN0aW9uUmV2aWV3Iiwic2VjdGlvblZpZGVvQ29udGFjdCIsInNlY3Rpb25DYWxlbmRyaWVyIiwiaGVhZCIsIkFQUF9OQU1FIiwibWRlc2MiLCJET01BSU4iLCJzbHVnIiwiQVBJIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldEluaXRpYWxQcm9wcyIsImxpc3RHaXRlRGV0YWlscyIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBcUI7QUFBQTs7QUFBQSxNQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ2pDLE1BQU1DLE1BQU0sR0FBRyxDQUNkO0FBQ0NDLFlBQVEsRUFDUCw0REFGRjtBQUdDQyxPQUFHLEVBQUUsY0FITjtBQUlDQyxZQUFRLEVBQUU7QUFKWCxHQURjLEVB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QUFlLENBQUN2QyxLQUFLLENBQUNrQyxJQUFQLENBQWYsQ0FBNEJNLElBQTVCLENBQWlDLFVBQUNDLElBQUQsRUFBVTtBQUNqRCxRQUFJQSxJQUFJLENBQUNDLEtBQVQsRUFBZ0I7QUFDZkMsYUFBTyxDQUFDQyxHQUFSLENBQVlILElBQUksQ0FBQ0MsS0FBakI7QUFDQSxLQUZELE1BRU87QUFDTixhQUFPO0FBQUUzQyxZQUFJLEVBQUUwQyxJQUFSO0FBQWN6QyxhQUFLLEVBQUxBO0FBQWQsT0FBUDtBQUNBO0FBQ0QsR0FOTSxDQUFQO0FBT0EsQ0FURDs7QUFXZUYsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2l0ZS9bc2x1Z10uZWU2NjU2ZWI4Mjc4YmZmODhlZGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0JztcclxuaW1wb3J0IHsgQVBJLCBET01BSU4sIEFQUF9OQU1FIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHsgbGlzdEdpdGVEZXRhaWxzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHtcclxuXHRKdW1ib3Ryb24sXHJcblx0Q2Fyb3VzZWwsXHJcblx0Q2Fyb3VzZWxJdGVtLFxyXG5cdENhcm91c2VsQ29udHJvbCxcclxuXHRDYXJvdXNlbEluZGljYXRvcnMsXHJcblx0Q2Fyb3VzZWxDYXB0aW9uLFxyXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGFjdEZvcm0nO1xyXG5cclxuY29uc3QgR2l0ZSA9ICh7IGdpdGUsIHF1ZXJ5IH0pID0+IHtcclxuXHRjb25zdCBwaG90b3MgPSBbXHJcblx0XHR7XHJcblx0XHRcdGxvY2F0aW9uOlxyXG5cdFx0XHRcdCdodHRwczovL2dpdGVzLXdhby5zMy5hbWF6b25hd3MuY29tL09wdmNVSmkxRUgtUDEwMTAxODYuanBnJyxcclxuXHRcdFx0bm9tOiAnUDEwMTAxODYuanBnJyxcclxuXHRcdFx0dGV4dGVJbWc6ICdsb3JlbSBsb3JlbSBsb3JlbScsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRsb2NhdGlvbjpcclxuXHRcdFx0XHQnaHR0cHM6Ly9naXRlcy13YW8uczMuYW1hem9uYXdzLmNvbS9OVUtLVVV0VURtLVAxMDkwNzE0LmpwZycsXHJcblx0XHRcdG5vbTogJ1AxMDkwNzE0LmpwZycsXHJcblx0XHRcdHRleHRlSW1nOiAnbG9yZW0gbG9yZW0gbG9yZW0nLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bG9jYXRpb246XHJcblx0XHRcdFx0J2h0dHBzOi8vZ2l0ZXMtd2FvLnMzLmFtYXpvbmF3cy5jb20vaWJSR3ZvemdZdS1QMTA5MDcxNi5qcGcnLFxyXG5cdFx0XHRub206ICdQMTA5MDcxNi5qcGcnLFxyXG5cdFx0XHR0ZXh0ZUltZzogJ2xvcmVtIGxvcmVtIGxvcmVtJyxcclxuXHRcdH0sXHJcblx0XTtcclxuXHJcblx0Y29uc3QgYWZmaWNoZUNhbGVuZHJpZXIgPSAoKSA9PiB7XHJcblx0XHRyZXR1cm4geyBfaHRtbDogZ2l0ZS5jYWxlbmRyaWVyTGluayB9O1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcblx0Y29uc3QgW2FuaW1hdGluZywgc2V0QW5pbWF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Y29uc3QgbmV4dCA9ICgpID0+IHtcclxuXHRcdGlmIChhbmltYXRpbmcpIHJldHVybjtcclxuXHRcdGNvbnN0IG5leHRJbmRleCA9XHJcblx0XHRcdGFjdGl2ZUluZGV4ID09PSBwaG90b3MubGVuZ3RoIC0gMSA/IDAgOiBhY3RpdmVJbmRleCArIDE7XHJcblx0XHRzZXRBY3RpdmVJbmRleChuZXh0SW5kZXgpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHByZXZpb3VzID0gKCkgPT4ge1xyXG5cdFx0aWYgKGFuaW1hdGluZykgcmV0dXJuO1xyXG5cdFx0Y29uc3QgbmV4dEluZGV4ID1cclxuXHRcdFx0YWN0aXZlSW5kZXggPT09IDAgPyBwaG90b3MubGVuZ3RoIC0gMSA6IGFjdGl2ZUluZGV4IC0gMTtcclxuXHRcdHNldEFjdGl2ZUluZGV4KG5leHRJbmRleCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZ29Ub0luZGV4ID0gKG5ld0luZGV4KSA9PiB7XHJcblx0XHRpZiAoYW5pbWF0aW5nKSByZXR1cm47XHJcblx0XHRzZXRBY3RpdmVJbmRleChuZXdJbmRleCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QganVtYm90cm9uID0gKCkgPT4gKFxyXG5cdFx0PHNlY3Rpb24+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHRcdDxKdW1ib3Ryb24+XHJcblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSdkaXNwbGF5LTMnPlxyXG5cdFx0XHRcdFx0XHRQcsOpc2VudGF0aW9uIGR1IGfDrnRlIHtnaXRlLm5vbX1cclxuXHRcdFx0XHRcdDwvaDE+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2xlYWQnPntnaXRlLnByZXNHaXRlU0VPfTwvcD5cclxuXHRcdFx0XHRcdDxociBjbGFzc05hbWU9J215LTInIC8+XHJcblx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0SXQgdXNlcyB1dGlsaXR5IGNsYXNzZXMgZm9yIHR5cG9ncmFwaHkgYW5kIHNwYWNpbmcgdG9cclxuXHRcdFx0XHRcdFx0c3BhY2UgY29udGVudCBvdXQgd2l0aGluIHRoZSBsYXJnZXIgY29udGFpbmVyLlxyXG5cdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdsZWFkJz5cclxuXHRcdFx0XHRcdFx0ey8qIDxCdXR0b24gY29sb3I9J3ByaW1hcnknPkxlYXJuIE1vcmU8L0J1dHRvbj4gKi99XHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0PC9KdW1ib3Ryb24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9zZWN0aW9uPlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IGNhcm91c2VsID0gKG5vbSkgPT5cclxuXHRcdHBob3Rvcy5tYXAoKHBob3RvKSA9PiB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PENhcm91c2VsSXRlbVxyXG5cdFx0XHRcdFx0b25FeGl0aW5nPXsoKSA9PiBzZXRBbmltYXRpbmcodHJ1ZSl9XHJcblx0XHRcdFx0XHRvbkV4aXRlZD17KCkgPT4gc2V0QW5pbWF0aW5nKGZhbHNlKX1cclxuXHRcdFx0XHRcdGtleT17cGhvdG8ubG9jYXRpb259PlxyXG5cdFx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRcdHNyYz17cGhvdG8ubG9jYXRpb259XHJcblx0XHRcdFx0XHRcdGFsdD17cGhvdG8ubm9tfVxyXG5cdFx0XHRcdFx0XHR3aWR0aD17NTAwfVxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ9ezM3NX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8Q2Fyb3VzZWxDYXB0aW9uXHJcblx0XHRcdFx0XHRcdGNhcHRpb25UZXh0PXtwaG90by50ZXh0ZUltZ31cclxuXHRcdFx0XHRcdFx0Y2FwdGlvbkhlYWRlcj17cGhvdG8udGV4dGVJbWd9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvQ2Fyb3VzZWxJdGVtPlxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25FeHRlcmlldXIgPSAoKSA9PiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0PHNlY3Rpb24+XHJcblx0XHRcdFx0PGgyPlBhcnRpZSBleHTDqXJpZXVyPC9oMj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcblx0XHRcdFx0XHRcdDxDYXJvdXNlbFxyXG5cdFx0XHRcdFx0XHRcdGFjdGl2ZUluZGV4PXthY3RpdmVJbmRleH1cclxuXHRcdFx0XHRcdFx0XHRuZXh0PXtuZXh0fVxyXG5cdFx0XHRcdFx0XHRcdHByZXZpb3VzPXtwcmV2aW91c30+XHJcblx0XHRcdFx0XHRcdFx0PENhcm91c2VsSW5kaWNhdG9yc1xyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbXM9e3Bob3Rvc31cclxuXHRcdFx0XHRcdFx0XHRcdGFjdGl2ZUluZGV4PXthY3RpdmVJbmRleH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2tIYW5kbGVyPXtnb1RvSW5kZXh9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHR7Y2Fyb3VzZWwoJ2V4dGVyaWV1cicpfVxyXG5cdFx0XHRcdFx0XHRcdDxDYXJvdXNlbENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdGRpcmVjdGlvbj0ncHJldidcclxuXHRcdFx0XHRcdFx0XHRcdGRpcmVjdGlvblRleHQ9J1ByZXZpb3VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGlja0hhbmRsZXI9e3ByZXZpb3VzfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PENhcm91c2VsQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9uPSduZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9uVGV4dD0nTmV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2tIYW5kbGVyPXtuZXh0fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvQ2Fyb3VzZWw+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcblx0XHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcblx0XHRcdFx0XHRcdE5hdHVzIGRlbGVjdHVzIGlwc2EsIGNvcnJ1cHRpIG1pbnVzIHRvdGFtIG5vYmlzIG5vblxyXG5cdFx0XHRcdFx0XHRkdWNpbXVzIGVhcnVtLCBwb3NzaW11cyBjb25zZWN0ZXR1ciBzZXF1aSBzdXNjaXBpdFxyXG5cdFx0XHRcdFx0XHRzb2x1dGEgYmVhdGFlIGRlc2VydW50IHNpbWlsaXF1ZSBlYXF1ZSBlc3Q/IFBvcnJvIGl1c3RvXHJcblx0XHRcdFx0XHRcdHZvbHVwdGF0ZW0gaXBzdW0gb3B0aW8gb2JjYWVjYXRpLCBlc3QgcXVhc2kgY29ycG9yaXNcclxuXHRcdFx0XHRcdFx0cXVpYnVzZGFtIGF1dGVtIGFuaW1pIGF0IHRlbmV0dXIgb21uaXMgZXZlbmlldCBlYXF1ZVxyXG5cdFx0XHRcdFx0XHRleGVyY2l0YXRpb25lbSBkb2xvcmVzLiBRdW9kLCByZXByZWhlbmRlcml0IGNvbW1vZGkhXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvbkludGVyaWV1ciA9ICgpID0+IChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0XHQ8aDI+UGFydGllIGludMOpcmlldXI8L2gyPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuXHRcdFx0XHRcdFx0T21uaXMgZG9sb3J1bSBxdWFzIGFzcGVyaW9yZXMgZGVzZXJ1bnQgZGViaXRpcyBhY2N1c2FtdXNcclxuXHRcdFx0XHRcdFx0YW1ldCBpcHNhIGRvbG9yZXMgcXVpc3F1YW0gaXVzdG8gdmVuaWFtIG9mZmljaWlzIHZpdGFlXHJcblx0XHRcdFx0XHRcdHRlbXBvcmUgcmVwdWRpYW5kYWUgcXVhZXJhdCBjdW1xdWUgZmFjaWxpcywgYWIgc2FlcGUsXHJcblx0XHRcdFx0XHRcdGV2ZW5pZXQgdm9sdXB0YXMgb2RpdCBwZXJzcGljaWF0aXMgYWxpYXMuIFN1bnQsIGJlYXRhZSFcclxuXHRcdFx0XHRcdFx0T2ZmaWNpaXMgdm9sdXB0YXMsIGFkaXBpc2NpIHJlcHVkaWFuZGFlIHF1YWVyYXQsIGF0cXVlXHJcblx0XHRcdFx0XHRcdGNvbnNlcXV1bnR1ciBkdWNpbXVzLCBhY2N1c2FudGl1bSB2ZWxpdCBzaW50IGV1bVxyXG5cdFx0XHRcdFx0XHRkb2xvcmVzLlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxyXG5cdFx0XHRcdFx0XHQ8Q2Fyb3VzZWxcclxuXHRcdFx0XHRcdFx0XHRhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9XHJcblx0XHRcdFx0XHRcdFx0bmV4dD17bmV4dH1cclxuXHRcdFx0XHRcdFx0XHRwcmV2aW91cz17cHJldmlvdXN9PlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJvdXNlbEluZGljYXRvcnNcclxuXHRcdFx0XHRcdFx0XHRcdGl0ZW1zPXtwaG90b3N9XHJcblx0XHRcdFx0XHRcdFx0XHRhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrSGFuZGxlcj17Z29Ub0luZGV4fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0e2Nhcm91c2VsKCdpbnRlcmlldXInKX1cclxuXHRcdFx0XHRcdFx0XHQ8Q2Fyb3VzZWxDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRkaXJlY3Rpb249J3ByZXYnXHJcblx0XHRcdFx0XHRcdFx0XHRkaXJlY3Rpb25UZXh0PSdQcmV2aW91cydcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2tIYW5kbGVyPXtwcmV2aW91c31cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJvdXNlbENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdGRpcmVjdGlvbj0nbmV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdGRpcmVjdGlvblRleHQ9J05leHQnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrSGFuZGxlcj17bmV4dH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L0Nhcm91c2VsPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25QaXNjaW5lID0gKCkgPT4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdDxoMj5QYXJ0aWUgcGlzY2luZTwvaDI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxyXG5cdFx0XHRcdFx0XHQ8Q2Fyb3VzZWxcclxuXHRcdFx0XHRcdFx0XHRhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9XHJcblx0XHRcdFx0XHRcdFx0bmV4dD17bmV4dH1cclxuXHRcdFx0XHRcdFx0XHRwcmV2aW91cz17cHJldmlvdXN9PlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJvdXNlbEluZGljYXRvcnNcclxuXHRcdFx0XHRcdFx0XHRcdGl0ZW1zPXtwaG90b3N9XHJcblx0XHRcdFx0XHRcdFx0XHRhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrSGFuZGxlcj17Z29Ub0luZGV4fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0e2Nhcm91c2VsKCdwaXNjaW5lJyl9XHJcblx0XHRcdFx0XHRcdFx0PENhcm91c2VsQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9uPSdwcmV2J1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9uVGV4dD0nUHJldmlvdXMnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrSGFuZGxlcj17cHJldmlvdXN9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8Q2Fyb3VzZWxDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRkaXJlY3Rpb249J25leHQnXHJcblx0XHRcdFx0XHRcdFx0XHRkaXJlY3Rpb25UZXh0PSdOZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGlja0hhbmRsZXI9e25leHR9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9DYXJvdXNlbD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuXHRcdFx0XHRcdFx0Q29ycG9yaXMgZGVsZWN0dXMgdml0YWUgbnVtcXVhbSBvcHRpbywgYSBkaWduaXNzaW1vcyxcclxuXHRcdFx0XHRcdFx0Y29tbW9kaSBhdCBldW0sIHBsYWNlYXQgb2JjYWVjYXRpIGFtZXQgaXVyZSBpcHNhIGZ1Z2FcclxuXHRcdFx0XHRcdFx0ZG9sb3IgZmFjaWxpcyBzaW50PyBWb2x1cHRhdGVtIGNvbnNlcXVhdHVyIHZlcm9cclxuXHRcdFx0XHRcdFx0dm9sdXB0YXRlcyB2aXRhZSByZWN1c2FuZGFlIHZlbCwgYWIgcXVpIG1vbGVzdGlhZVxyXG5cdFx0XHRcdFx0XHRwYXJpYXR1ciBxdWlzLCBkZWJpdGlzIGF1dCBpbXBlZGl0IGNvbW1vZGkgbnVsbGEgZnVnaXRcclxuXHRcdFx0XHRcdFx0aW5jaWR1bnQgYmxhbmRpdGlpcyBoaWMgYSBjdXBpZGl0YXRlLlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25SZXZpZXcgPSAoKSA9PiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0PHNlY3Rpb24+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHQ8aDI+Q2UgcXVlIG5vcyBjbGllbnRzIGRpc2VudCBkZSBjZSBnw650ZTwvaDI+XHJcblx0XHRcdFx0XHQ8cD5MaXN0ZSBkZXMgcmV2aWV3czwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvblZpZGVvQ29udGFjdCA9ICgpID0+IChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcblx0XHRcdFx0XHRcdDxoMj5DZSBxdWUgbm9zIGNsaWVudHMgZGlzZW50IGRlIGNlIGfDrnRlPC9oMj5cclxuXHRcdFx0XHRcdFx0PHA+TGlzdGUgZGVzIHJldmlld3M8L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcblx0XHRcdFx0XHRcdDxoMj5FY3JpdmV6LW5vdXMgITwvaDI+XHJcblx0XHRcdFx0XHRcdDxDb250YWN0Rm9ybSAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25DYWxlbmRyaWVyID0gKCkgPT4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2dpdGUuY2FsZW5kcmllckxpbmt9IC8+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IGhlYWQgPSAoKSA9PiAoXHJcblx0XHQ8SGVhZD5cclxuXHRcdFx0PHRpdGxlPlxyXG5cdFx0XHRcdHtBUFBfTkFNRX0gfCB7Z2l0ZS5ub219eycgJ31cclxuXHRcdFx0PC90aXRsZT5cclxuXHRcdFx0PG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2dpdGUubWRlc2N9IC8+XHJcblx0XHRcdDxsaW5rIHJlbD0nY2Fub25pY2FsJyBocmVmPXtgJHtET01BSU59L2Jsb2dzLyR7cXVlcnkuc2x1Z31gfSAvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6dGl0bGUnIGNvbnRlbnQ9e2Ake2dpdGUubm9tfSB8ICR7QVBQX05BTUV9YH0gLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOmRlc2NyaXB0aW9uJyBjb250ZW50PXtnaXRlLm1kZXNjfSAvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6dHlwZScgY29udGVudD0nd2Vic2l0ZScgLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnVybCcgY29udGVudD17YCR7RE9NQUlOfS9ibG9ncy8ke3F1ZXJ5LnNsdWd9YH0gLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnNpdGVfbmFtZScgY29udGVudD17YCR7QVBQX05BTUV9YH0gLz5cclxuXHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzpzaXRlX25hbWUnIGNvbnRlbnQ9e0FQUF9OQU1FfSAvPlxyXG5cclxuXHRcdFx0PG1ldGFcclxuXHRcdFx0XHRwcm9wZXJ0eT0nb2c6aW1hZ2UnXHJcblx0XHRcdFx0Y29udGVudD17YCR7QVBJfS9ibG9nL3Bob3RvLyR7Z2l0ZS5zbHVnfWB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxtZXRhXHJcblx0XHRcdFx0cHJvcGVydHk9J29nOmltYWdlOnNlY3VyZV91cmwnXHJcblx0XHRcdFx0Y29udGVudD17YCR7QVBJfS9naXRlL3Bob3RvLyR7Z2l0ZS5zbHVnfWB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzppbWFnZTp0eXBlJyBjb250ZW50PSdpbWFnZS9qcGcnIC8+XHJcblx0XHRcdHsvKiA8bWV0YSBwcm9wZXJ0eT0nZmI6YXBwX2lkJyBjb250ZW50PXtgJHtGQl9BUFBfSUR9YH0gLz4gKi99XHJcblx0XHQ8L0hlYWQ+XHJcblx0KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHtoZWFkKCl9XHJcblx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdFx0PGgyPkluZm9zIGR1IGdpdGU8L2gyPlxyXG5cdFx0XHRcdHtKU09OLnN0cmluZ2lmeShnaXRlKX1cclxuXHRcdFx0XHR7anVtYm90cm9uKCl9XHJcblx0XHRcdFx0e3NlY3Rpb25FeHRlcmlldXIoKX1cclxuXHRcdFx0XHR7c2VjdGlvbkludGVyaWV1cigpfVxyXG5cdFx0XHRcdHtzZWN0aW9uUGlzY2luZSgpfVxyXG5cdFx0XHRcdHtzZWN0aW9uUmV2aWV3KCl9XHJcblx0XHRcdFx0e3NlY3Rpb25WaWRlb0NvbnRhY3QoKX1cclxuXHRcdFx0XHR7c2VjdGlvbkNhbGVuZHJpZXIoKX1cclxuXHRcdFx0PC9MYXlvdXQ+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuR2l0ZS5nZXRJbml0aWFsUHJvcHMgPSAoeyBxdWVyeSB9KSA9PiB7XHJcblx0Ly8gY29uc29sZS5sb2cocXVlcnkpO1xyXG5cdHJldHVybiBsaXN0R2l0ZURldGFpbHMocXVlcnkuc2x1ZykudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4geyBnaXRlOiBkYXRhLCBxdWVyeSB9O1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2l0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==