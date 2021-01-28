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
            lineNumber: 66,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "lead",
            children: gite.presGiteSEO
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
            className: "my-2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "It uses utility classes for typography and spacing to space content out within the larger container."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "lead"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
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
          lineNumber: 90,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselCaption"], {
          captionText: photo.texteImg,
          captionHeader: photo.texteImg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 6
        }, _this)]
      }, photo.location, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
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
          lineNumber: 107,
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
                lineNumber: 114,
                columnNumber: 8
              }, _this), carousel('exterieur'), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselControl"], {
                direction: "prev",
                directionText: "Previous",
                onClickHandler: previous
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 8
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselControl"], {
                direction: "next",
                directionText: "Next",
                onClickHandler: next
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 8
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-6",
            children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus delectus ipsa, corrupti minus totam nobis non ducimus earum, possimus consectetur sequi suscipit soluta beatae deserunt similique eaque est? Porro iusto voluptatem ipsum optio obcaecati, est quasi corporis quibusdam autem animi at tenetur omnis eveniet eaque exercitationem dolores. Quod, reprehenderit commodi!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
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
          lineNumber: 149,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-6",
            children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorum quas asperiores deserunt debitis accusamus amet ipsa dolores quisquam iusto veniam officiis vitae tempore repudiandae quaerat cumque facilis, ab saepe, eveniet voluptas odit perspiciatis alias. Sunt, beatae! Officiis voluptas, adipisci repudiandae quaerat, atque consequuntur ducimus, accusantium velit sint eum dolores."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
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
                lineNumber: 166,
                columnNumber: 8
              }, _this), carousel('interieur'), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselControl"], {
                direction: "prev",
                directionText: "Previous",
                onClickHandler: previous
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 8
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselControl"], {
                direction: "next",
                directionText: "Next",
                onClickHandler: next
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 8
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
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
          lineNumber: 192,
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
                lineNumber: 199,
                columnNumber: 8
              }, _this), carousel('piscine'), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselControl"], {
                direction: "prev",
                directionText: "Previous",
                onClickHandler: previous
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 8
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselControl"], {
                direction: "next",
                directionText: "Next",
                onClickHandler: next
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 8
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-6",
            children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis delectus vitae numquam optio, a dignissimos, commodi at eum, placeat obcaecati amet iure ipsa fuga dolor facilis sint? Voluptatem consequatur vero voluptates vitae recusandae vel, ab qui molestiae pariatur quis, debitis aut impedit commodi nulla fugit incidunt blanditiis hic a cupiditate."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 190,
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
            lineNumber: 235,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Liste des reviews"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 232,
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
              lineNumber: 247,
              columnNumber: 7
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Liste des reviews"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 7
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              children: "Ecrivez-nous !"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 251,
              columnNumber: 7
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ContactForm__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 7
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 243,
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
          lineNumber: 262,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 3
    }, _this);
  };

  var head = function head() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: [_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"], " | ", gite.nom, ' ']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: gite.mdesc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "canonical",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"], "/blogs/").concat(query.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: "".concat(gite.nom, " | ").concat(_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: gite.mdesc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:type",
        content: "website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:url",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"], "/blogs/").concat(query.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:site_name",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:site_name",
        content: _config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/blog/photo/").concat(gite.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image:secure_url",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/gite/photo/").concat(gite.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image:type",
        content: "image/jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 4
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 3
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [head(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Infos du gite"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 5
      }, _this), JSON.stringify(gite), jumbotron(), sectionExterieur(), sectionInterieur(), sectionPiscine(), sectionReview(), sectionVideoContact(), sectionCalendrier()]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 298,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2l0ZS9bc2x1Z10uanMiXSwibmFtZXMiOlsiR2l0ZSIsImdpdGUiLCJxdWVyeSIsInBob3RvcyIsImxvY2F0aW9uIiwibm9tIiwidGV4dGVJbWciLCJ1c2VTdGF0ZSIsImFjdGl2ZUluZGV4Iiwic2V0QWN0aXZlSW5kZXgiLCJhbmltYXRpbmciLCJzZXRBbmltYXRpbmciLCJuZXh0IiwibmV4dEluZGV4IiwibGVuZ3RoIiwicHJldmlvdXMiLCJnb1RvSW5kZXgiLCJuZXdJbmRleCIsImp1bWJvdHJvbiIsInByZXNHaXRlU0VPIiwiY2Fyb3VzZWwiLCJtYXAiLCJwaG90byIsInNlY3Rpb25FeHRlcmlldXIiLCJzZWN0aW9uSW50ZXJpZXVyIiwic2VjdGlvblBpc2NpbmUiLCJzZWN0aW9uUmV2aWV3Iiwic2VjdGlvblZpZGVvQ29udGFjdCIsInNlY3Rpb25DYWxlbmRyaWVyIiwiY2FsZW5kcmllckxpbmsiLCJoZWFkIiwiQVBQX05BTUUiLCJtZGVzYyIsIkRPTUFJTiIsInNsdWciLCJBUEkiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0SW5pdGlhbFByb3BzIiwibGlzdEdpdGVEZXRhaWxzIiwidGhlbiIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFxQjtBQUFBOztBQUFBLE1BQWxCQyxJQUFrQixRQUFsQkEsSUFBa0I7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDakMsTUFBTUMsTUFBTSxHQUFHLENBQ2Q7QUFDQ0MsWUFBUSxFQUNQLDREQUZGO0FBR0NDLE9BQUcsRUFBRSxjQUhOO0FBSUNDLFlBQVEsRUFBRTtBQUpYLEdBRGMsRUFPZDtBQUNDRixZQUFRLEVBQ1AsNERBRkY7QUFHQ0MsT0FBRyxFQUFFLGNBSE47QUFJQ0MsWUFBUSxFQUFFO0FBSlgsR0FQYyxFQWFkO0FBQ0NGLFlBQVEsRUFDUCw0REFGRjtBQUdDQyxPQUFHLEVBQUUsY0FITjtBQUlDQyxZQUFRLEVBQUU7QUFKWCxHQWJjLENBQWY7O0FBRGlDLGtCQXNCS0Msc0RBQVEsQ0FBQyxDQUFELENBdEJiO0FBQUEsTUFzQjFCQyxXQXRCMEI7QUFBQSxNQXNCYkMsY0F0QmE7O0FBQUEsbUJBdUJDRixzREFBUSxDQUFDLEtBQUQsQ0F2QlQ7QUFBQSxNQXVCMUJHLFNBdkIwQjtBQUFBLE1BdUJmQyxZQXZCZTs7QUF5QmpDLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDbEIsUUFBSUYsU0FBSixFQUFlO0FBQ2YsUUFBTUcsU0FBUyxHQUNkTCxXQUFXLEtBQUtMLE1BQU0sQ0FBQ1csTUFBUCxHQUFnQixDQUFoQyxHQUFvQyxDQUFwQyxHQUF3Q04sV0FBVyxHQUFHLENBRHZEO0FBRUFDLGtCQUFjLENBQUNJLFNBQUQsQ0FBZDtBQUNBLEdBTEQ7O0FBT0EsTUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUN0QixRQUFJTCxTQUFKLEVBQWU7QUFDZixRQUFNRyxTQUFTLEdBQ2RMLFdBQVcsS0FBSyxDQUFoQixHQUFvQkwsTUFBTSxDQUFDVyxNQUFQLEdBQWdCLENBQXBDLEdBQXdDTixXQUFXLEdBQUcsQ0FEdkQ7QUFFQUMsa0JBQWMsQ0FBQ0ksU0FBRCxDQUFkO0FBQ0EsR0FMRDs7QUFPQSxNQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxRQUFELEVBQWM7QUFDL0IsUUFBSVAsU0FBSixFQUFlO0FBQ2ZELGtCQUFjLENBQUNRLFFBQUQsQ0FBZDtBQUNBLEdBSEQ7O0FBS0EsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSx3QkFDakI7QUFBQSw2QkFDQztBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLCtCQUNDLHFFQUFDLG9EQUFEO0FBQUEsa0NBQ0M7QUFBSSxxQkFBUyxFQUFDLFdBQWQ7QUFBQSxzREFDdUJqQixJQUFJLENBQUNJLEdBRDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQUlDO0FBQUcscUJBQVMsRUFBQyxNQUFiO0FBQUEsc0JBQXFCSixJQUFJLENBQUNrQjtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpELGVBS0M7QUFBSSxxQkFBUyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRCxlQU1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5ELGVBVUM7QUFBRyxxQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURpQjtBQUFBLEdBQWxCOztBQXFCQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDZixHQUFEO0FBQUEsV0FDaEJGLE1BQU0sQ0FBQ2tCLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVc7QUFDckIsMEJBQ0MscUVBQUMsdURBQUQ7QUFDQyxpQkFBUyxFQUFFO0FBQUEsaUJBQU1YLFlBQVksQ0FBQyxJQUFELENBQWxCO0FBQUEsU0FEWjtBQUVDLGdCQUFRLEVBQUU7QUFBQSxpQkFBTUEsWUFBWSxDQUFDLEtBQUQsQ0FBbEI7QUFBQSxTQUZYO0FBQUEsZ0NBSUMscUVBQUMsaURBQUQ7QUFDQyxhQUFHLEVBQUVXLEtBQUssQ0FBQ2xCLFFBRFo7QUFFQyxhQUFHLEVBQUVrQixLQUFLLENBQUNqQixHQUZaO0FBR0MsZUFBSyxFQUFFLEdBSFI7QUFJQyxnQkFBTSxFQUFFO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRCxlQVVDLHFFQUFDLDBEQUFEO0FBQ0MscUJBQVcsRUFBRWlCLEtBQUssQ0FBQ2hCLFFBRHBCO0FBRUMsdUJBQWEsRUFBRWdCLEtBQUssQ0FBQ2hCO0FBRnRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkQ7QUFBQSxTQUdNZ0IsS0FBSyxDQUFDbEIsUUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQ7QUFpQkEsS0FsQkQsQ0FEZ0I7QUFBQSxHQUFqQjs7QUFxQkEsTUFBTW1CLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSx3QkFDeEI7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNDO0FBQUEsZ0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFFQztBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGtDQUNDO0FBQUsscUJBQVMsRUFBQyxVQUFmO0FBQUEsbUNBQ0MscUVBQUMsbURBQUQ7QUFDQyx5QkFBVyxFQUFFZixXQURkO0FBRUMsa0JBQUksRUFBRUksSUFGUDtBQUdDLHNCQUFRLEVBQUVHLFFBSFg7QUFBQSxzQ0FJQyxxRUFBQyw2REFBRDtBQUNDLHFCQUFLLEVBQUVaLE1BRFI7QUFFQywyQkFBVyxFQUFFSyxXQUZkO0FBR0MsOEJBQWMsRUFBRVE7QUFIakI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRCxFQVNFSSxRQUFRLENBQUMsV0FBRCxDQVRWLGVBVUMscUVBQUMsMERBQUQ7QUFDQyx5QkFBUyxFQUFDLE1BRFg7QUFFQyw2QkFBYSxFQUFDLFVBRmY7QUFHQyw4QkFBYyxFQUFFTDtBQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVZELGVBZUMscUVBQUMsMERBQUQ7QUFDQyx5QkFBUyxFQUFDLE1BRFg7QUFFQyw2QkFBYSxFQUFDLE1BRmY7QUFHQyw4QkFBYyxFQUFFSDtBQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUF3QkM7QUFBSyxxQkFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBeEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRHdCO0FBQUEsR0FBekI7O0FBMENBLE1BQU1ZLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSx3QkFDeEI7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNDO0FBQUEsZ0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFFQztBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGtDQUNDO0FBQUsscUJBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBV0M7QUFBSyxxQkFBUyxFQUFDLFVBQWY7QUFBQSxtQ0FDQyxxRUFBQyxtREFBRDtBQUNDLHlCQUFXLEVBQUVoQixXQURkO0FBRUMsa0JBQUksRUFBRUksSUFGUDtBQUdDLHNCQUFRLEVBQUVHLFFBSFg7QUFBQSxzQ0FJQyxxRUFBQyw2REFBRDtBQUNDLHFCQUFLLEVBQUVaLE1BRFI7QUFFQywyQkFBVyxFQUFFSyxXQUZkO0FBR0MsOEJBQWMsRUFBRVE7QUFIakI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRCxFQVNFSSxRQUFRLENBQUMsV0FBRCxDQVRWLGVBVUMscUVBQUMsMERBQUQ7QUFDQyx5QkFBUyxFQUFDLE1BRFg7QUFFQyw2QkFBYSxFQUFDLFVBRmY7QUFHQyw4QkFBYyxFQUFFTDtBQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVZELGVBZUMscUVBQUMsMERBQUQ7QUFDQyx5QkFBUyxFQUFDLE1BRFg7QUFFQyw2QkFBYSxFQUFDLE1BRmY7QUFHQyw4QkFBYyxFQUFFSDtBQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEd0I7QUFBQSxHQUF6Qjs7QUEyQ0EsTUFBTWEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLHdCQUN0QjtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0M7QUFBQSxnQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUVDO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsa0NBQ0M7QUFBSyxxQkFBUyxFQUFDLFVBQWY7QUFBQSxtQ0FDQyxxRUFBQyxtREFBRDtBQUNDLHlCQUFXLEVBQUVqQixXQURkO0FBRUMsa0JBQUksRUFBRUksSUFGUDtBQUdDLHNCQUFRLEVBQUVHLFFBSFg7QUFBQSxzQ0FJQyxxRUFBQyw2REFBRDtBQUNDLHFCQUFLLEVBQUVaLE1BRFI7QUFFQywyQkFBVyxFQUFFSyxXQUZkO0FBR0MsOEJBQWMsRUFBRVE7QUFIakI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRCxFQVNFSSxRQUFRLENBQUMsU0FBRCxDQVRWLGVBVUMscUVBQUMsMERBQUQ7QUFDQyx5QkFBUyxFQUFDLE1BRFg7QUFFQyw2QkFBYSxFQUFDLFVBRmY7QUFHQyw4QkFBYyxFQUFFTDtBQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVZELGVBZUMscUVBQUMsMERBQUQ7QUFDQyx5QkFBUyxFQUFDLE1BRFg7QUFFQyw2QkFBYSxFQUFDLE1BRmY7QUFHQyw4QkFBYyxFQUFFSDtBQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUF3QkM7QUFBSyxxQkFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBeEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRHNCO0FBQUEsR0FBdkI7O0FBMENBLE1BQU1jLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSx3QkFDckI7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNDO0FBQUEsK0JBQ0M7QUFBSyxtQkFBUyxFQUFDLEtBQWY7QUFBQSxrQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRHFCO0FBQUEsR0FBdEI7O0FBV0EsTUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQjtBQUFBLHdCQUMzQjtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0M7QUFBQSwrQkFDQztBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGtDQUNDO0FBQUsscUJBQVMsRUFBQyxVQUFmO0FBQUEsb0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFLQztBQUFLLHFCQUFTLEVBQUMsVUFBZjtBQUFBLG9DQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBRUMscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEMkI7QUFBQSxHQUE1Qjs7QUFpQkEsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLHdCQUN6QjtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0M7QUFBQSwrQkFDQztBQUFLLGlDQUF1QixFQUFFM0IsSUFBSSxDQUFDNEI7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRHlCO0FBQUEsR0FBMUI7O0FBUUEsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSx3QkFDWixxRUFBQyxnREFBRDtBQUFBLDhCQUNDO0FBQUEsbUJBQ0VDLGdEQURGLFNBQ2U5QixJQUFJLENBQUNJLEdBRHBCLEVBQ3lCLEdBRHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBSUM7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUVKLElBQUksQ0FBQytCO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRCxlQUtDO0FBQU0sV0FBRyxFQUFDLFdBQVY7QUFBc0IsWUFBSSxZQUFLQyw4Q0FBTCxvQkFBcUIvQixLQUFLLENBQUNnQyxJQUEzQjtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEQsZUFNQztBQUFNLGdCQUFRLEVBQUMsVUFBZjtBQUEwQixlQUFPLFlBQUtqQyxJQUFJLENBQUNJLEdBQVYsZ0JBQW1CMEIsZ0RBQW5CO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORCxlQU9DO0FBQU0sZ0JBQVEsRUFBQyxnQkFBZjtBQUFnQyxlQUFPLEVBQUU5QixJQUFJLENBQUMrQjtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEQsZUFRQztBQUFNLGdCQUFRLEVBQUMsU0FBZjtBQUF5QixlQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJELGVBU0M7QUFBTSxnQkFBUSxFQUFDLFFBQWY7QUFBd0IsZUFBTyxZQUFLQyw4Q0FBTCxvQkFBcUIvQixLQUFLLENBQUNnQyxJQUEzQjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEQsZUFVQztBQUFNLGdCQUFRLEVBQUMsY0FBZjtBQUE4QixlQUFPLFlBQUtILGdEQUFMO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRCxlQVlDO0FBQU0sZ0JBQVEsRUFBQyxjQUFmO0FBQThCLGVBQU8sRUFBRUEsZ0RBQVFBO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaRCxlQWNDO0FBQ0MsZ0JBQVEsRUFBQyxVQURWO0FBRUMsZUFBTyxZQUFLSSwyQ0FBTCx5QkFBdUJsQyxJQUFJLENBQUNpQyxJQUE1QjtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkRCxlQWtCQztBQUNDLGdCQUFRLEVBQUMscUJBRFY7QUFFQyxlQUFPLFlBQUtDLDJDQUFMLHlCQUF1QmxDLElBQUksQ0FBQ2lDLElBQTVCO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxCRCxlQXNCQztBQUFNLGdCQUFRLEVBQUMsZUFBZjtBQUErQixlQUFPLEVBQUM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEWTtBQUFBLEdBQWI7O0FBNEJBLHNCQUNDO0FBQUEsZUFDRUosSUFBSSxFQUROLGVBRUMscUVBQUMsaUVBQUQ7QUFBQSw4QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELEVBRUVNLElBQUksQ0FBQ0MsU0FBTCxDQUFlcEMsSUFBZixDQUZGLEVBR0VpQixTQUFTLEVBSFgsRUFJRUssZ0JBQWdCLEVBSmxCLEVBS0VDLGdCQUFnQixFQUxsQixFQU1FQyxjQUFjLEVBTmhCLEVBT0VDLGFBQWEsRUFQZixFQVFFQyxtQkFBbUIsRUFSckIsRUFTRUMsaUJBQWlCLEVBVG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZEO0FBQUEsa0JBREQ7QUFnQkEsQ0FyU0Q7O0dBQU01QixJOztLQUFBQSxJOztBQXVTTkEsSUFBSSxDQUFDc0MsZUFBTCxHQUF1QixpQkFBZTtBQUFBLE1BQVpwQyxLQUFZLFNBQVpBLEtBQVk7QUFDckM7QUFDQSxTQUFPcUMsNEVBQWUsQ0FBQ3JDLEtBQUssQ0FBQ2dDLElBQVAsQ0FBZixDQUE0Qk0sSUFBNUIsQ0FBaUMsVUFBQ0MsSUFBRCxFQUFVO0FBQ2pELFFBQUlBLElBQUksQ0FBQ0MsS0FBVCxFQUFnQjtBQUNmQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBSSxDQUFDQyxLQUFqQjtBQUNBLEtBRkQsTUFFTztBQUNOLGFBQU87QUFBRXpDLFlBQUksRUFBRXdDLElBQVI7QUFBY3ZDLGFBQUssRUFBTEE7QUFBZCxPQUFQO0FBQ0E7QUFDRCxHQU5NLENBQVA7QUFPQSxDQVREOztBQVdlRixtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9naXRlL1tzbHVnXS45OGM0ODFmNTg4MjU5NjEzYTg4OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQnO1xyXG5pbXBvcnQgeyBBUEksIERPTUFJTiwgQVBQX05BTUUgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQgeyBsaXN0R2l0ZURldGFpbHMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQge1xyXG5cdEp1bWJvdHJvbixcclxuXHRDYXJvdXNlbCxcclxuXHRDYXJvdXNlbEl0ZW0sXHJcblx0Q2Fyb3VzZWxDb250cm9sLFxyXG5cdENhcm91c2VsSW5kaWNhdG9ycyxcclxuXHRDYXJvdXNlbENhcHRpb24sXHJcbn0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250YWN0Rm9ybSc7XHJcblxyXG5jb25zdCBHaXRlID0gKHsgZ2l0ZSwgcXVlcnkgfSkgPT4ge1xyXG5cdGNvbnN0IHBob3RvcyA9IFtcclxuXHRcdHtcclxuXHRcdFx0bG9jYXRpb246XHJcblx0XHRcdFx0J2h0dHBzOi8vZ2l0ZXMtd2FvLnMzLmFtYXpvbmF3cy5jb20vT3B2Y1VKaTFFSC1QMTAxMDE4Ni5qcGcnLFxyXG5cdFx0XHRub206ICdQMTAxMDE4Ni5qcGcnLFxyXG5cdFx0XHR0ZXh0ZUltZzogJ2xvcmVtIGxvcmVtIGxvcmVtJyxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGxvY2F0aW9uOlxyXG5cdFx0XHRcdCdodHRwczovL2dpdGVzLXdhby5zMy5hbWF6b25hd3MuY29tL05VS0tVVXRVRG0tUDEwOTA3MTQuanBnJyxcclxuXHRcdFx0bm9tOiAnUDEwOTA3MTQuanBnJyxcclxuXHRcdFx0dGV4dGVJbWc6ICdsb3JlbSBsb3JlbSBsb3JlbScsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRsb2NhdGlvbjpcclxuXHRcdFx0XHQnaHR0cHM6Ly9naXRlcy13YW8uczMuYW1hem9uYXdzLmNvbS9pYlJHdm96Z1l1LVAxMDkwNzE2LmpwZycsXHJcblx0XHRcdG5vbTogJ1AxMDkwNzE2LmpwZycsXHJcblx0XHRcdHRleHRlSW1nOiAnbG9yZW0gbG9yZW0gbG9yZW0nLFxyXG5cdFx0fSxcclxuXHRdO1xyXG5cclxuXHRjb25zdCBbYWN0aXZlSW5kZXgsIHNldEFjdGl2ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IFthbmltYXRpbmcsIHNldEFuaW1hdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdGNvbnN0IG5leHQgPSAoKSA9PiB7XHJcblx0XHRpZiAoYW5pbWF0aW5nKSByZXR1cm47XHJcblx0XHRjb25zdCBuZXh0SW5kZXggPVxyXG5cdFx0XHRhY3RpdmVJbmRleCA9PT0gcGhvdG9zLmxlbmd0aCAtIDEgPyAwIDogYWN0aXZlSW5kZXggKyAxO1xyXG5cdFx0c2V0QWN0aXZlSW5kZXgobmV4dEluZGV4KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBwcmV2aW91cyA9ICgpID0+IHtcclxuXHRcdGlmIChhbmltYXRpbmcpIHJldHVybjtcclxuXHRcdGNvbnN0IG5leHRJbmRleCA9XHJcblx0XHRcdGFjdGl2ZUluZGV4ID09PSAwID8gcGhvdG9zLmxlbmd0aCAtIDEgOiBhY3RpdmVJbmRleCAtIDE7XHJcblx0XHRzZXRBY3RpdmVJbmRleChuZXh0SW5kZXgpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGdvVG9JbmRleCA9IChuZXdJbmRleCkgPT4ge1xyXG5cdFx0aWYgKGFuaW1hdGluZykgcmV0dXJuO1xyXG5cdFx0c2V0QWN0aXZlSW5kZXgobmV3SW5kZXgpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGp1bWJvdHJvbiA9ICgpID0+IChcclxuXHRcdDxzZWN0aW9uPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0XHQ8SnVtYm90cm9uPlxyXG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nZGlzcGxheS0zJz5cclxuXHRcdFx0XHRcdFx0UHLDqXNlbnRhdGlvbiBkdSBnw650ZSB7Z2l0ZS5ub219XHJcblx0XHRcdFx0XHQ8L2gxPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdsZWFkJz57Z2l0ZS5wcmVzR2l0ZVNFT308L3A+XHJcblx0XHRcdFx0XHQ8aHIgY2xhc3NOYW1lPSdteS0yJyAvPlxyXG5cdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdEl0IHVzZXMgdXRpbGl0eSBjbGFzc2VzIGZvciB0eXBvZ3JhcGh5IGFuZCBzcGFjaW5nIHRvXHJcblx0XHRcdFx0XHRcdHNwYWNlIGNvbnRlbnQgb3V0IHdpdGhpbiB0aGUgbGFyZ2VyIGNvbnRhaW5lci5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nbGVhZCc+XHJcblx0XHRcdFx0XHRcdHsvKiA8QnV0dG9uIGNvbG9yPSdwcmltYXJ5Jz5MZWFybiBNb3JlPC9CdXR0b24+ICovfVxyXG5cdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdDwvSnVtYm90cm9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvc2VjdGlvbj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBjYXJvdXNlbCA9IChub20pID0+XHJcblx0XHRwaG90b3MubWFwKChwaG90bykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxDYXJvdXNlbEl0ZW1cclxuXHRcdFx0XHRcdG9uRXhpdGluZz17KCkgPT4gc2V0QW5pbWF0aW5nKHRydWUpfVxyXG5cdFx0XHRcdFx0b25FeGl0ZWQ9eygpID0+IHNldEFuaW1hdGluZyhmYWxzZSl9XHJcblx0XHRcdFx0XHRrZXk9e3Bob3RvLmxvY2F0aW9ufT5cclxuXHRcdFx0XHRcdDxJbWFnZVxyXG5cdFx0XHRcdFx0XHRzcmM9e3Bob3RvLmxvY2F0aW9ufVxyXG5cdFx0XHRcdFx0XHRhbHQ9e3Bob3RvLm5vbX1cclxuXHRcdFx0XHRcdFx0d2lkdGg9ezUwMH1cclxuXHRcdFx0XHRcdFx0aGVpZ2h0PXszNzV9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PENhcm91c2VsQ2FwdGlvblxyXG5cdFx0XHRcdFx0XHRjYXB0aW9uVGV4dD17cGhvdG8udGV4dGVJbWd9XHJcblx0XHRcdFx0XHRcdGNhcHRpb25IZWFkZXI9e3Bob3RvLnRleHRlSW1nfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0Nhcm91c2VsSXRlbT5cclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uRXh0ZXJpZXVyID0gKCkgPT4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdDxoMj5QYXJ0aWUgZXh0w6lyaWV1cjwvaDI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxyXG5cdFx0XHRcdFx0XHQ8Q2Fyb3VzZWxcclxuXHRcdFx0XHRcdFx0XHRhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9XHJcblx0XHRcdFx0XHRcdFx0bmV4dD17bmV4dH1cclxuXHRcdFx0XHRcdFx0XHRwcmV2aW91cz17cHJldmlvdXN9PlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJvdXNlbEluZGljYXRvcnNcclxuXHRcdFx0XHRcdFx0XHRcdGl0ZW1zPXtwaG90b3N9XHJcblx0XHRcdFx0XHRcdFx0XHRhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrSGFuZGxlcj17Z29Ub0luZGV4fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0e2Nhcm91c2VsKCdleHRlcmlldXInKX1cclxuXHRcdFx0XHRcdFx0XHQ8Q2Fyb3VzZWxDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRkaXJlY3Rpb249J3ByZXYnXHJcblx0XHRcdFx0XHRcdFx0XHRkaXJlY3Rpb25UZXh0PSdQcmV2aW91cydcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2tIYW5kbGVyPXtwcmV2aW91c31cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJvdXNlbENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdGRpcmVjdGlvbj0nbmV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdGRpcmVjdGlvblRleHQ9J05leHQnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrSGFuZGxlcj17bmV4dH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L0Nhcm91c2VsPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxyXG5cdFx0XHRcdFx0XHRMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG5cdFx0XHRcdFx0XHROYXR1cyBkZWxlY3R1cyBpcHNhLCBjb3JydXB0aSBtaW51cyB0b3RhbSBub2JpcyBub25cclxuXHRcdFx0XHRcdFx0ZHVjaW11cyBlYXJ1bSwgcG9zc2ltdXMgY29uc2VjdGV0dXIgc2VxdWkgc3VzY2lwaXRcclxuXHRcdFx0XHRcdFx0c29sdXRhIGJlYXRhZSBkZXNlcnVudCBzaW1pbGlxdWUgZWFxdWUgZXN0PyBQb3JybyBpdXN0b1xyXG5cdFx0XHRcdFx0XHR2b2x1cHRhdGVtIGlwc3VtIG9wdGlvIG9iY2FlY2F0aSwgZXN0IHF1YXNpIGNvcnBvcmlzXHJcblx0XHRcdFx0XHRcdHF1aWJ1c2RhbSBhdXRlbSBhbmltaSBhdCB0ZW5ldHVyIG9tbmlzIGV2ZW5pZXQgZWFxdWVcclxuXHRcdFx0XHRcdFx0ZXhlcmNpdGF0aW9uZW0gZG9sb3Jlcy4gUXVvZCwgcmVwcmVoZW5kZXJpdCBjb21tb2RpIVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25JbnRlcmlldXIgPSAoKSA9PiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0PHNlY3Rpb24+XHJcblx0XHRcdFx0PGgyPlBhcnRpZSBpbnTDqXJpZXVyPC9oMj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcblx0XHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcblx0XHRcdFx0XHRcdE9tbmlzIGRvbG9ydW0gcXVhcyBhc3BlcmlvcmVzIGRlc2VydW50IGRlYml0aXMgYWNjdXNhbXVzXHJcblx0XHRcdFx0XHRcdGFtZXQgaXBzYSBkb2xvcmVzIHF1aXNxdWFtIGl1c3RvIHZlbmlhbSBvZmZpY2lpcyB2aXRhZVxyXG5cdFx0XHRcdFx0XHR0ZW1wb3JlIHJlcHVkaWFuZGFlIHF1YWVyYXQgY3VtcXVlIGZhY2lsaXMsIGFiIHNhZXBlLFxyXG5cdFx0XHRcdFx0XHRldmVuaWV0IHZvbHVwdGFzIG9kaXQgcGVyc3BpY2lhdGlzIGFsaWFzLiBTdW50LCBiZWF0YWUhXHJcblx0XHRcdFx0XHRcdE9mZmljaWlzIHZvbHVwdGFzLCBhZGlwaXNjaSByZXB1ZGlhbmRhZSBxdWFlcmF0LCBhdHF1ZVxyXG5cdFx0XHRcdFx0XHRjb25zZXF1dW50dXIgZHVjaW11cywgYWNjdXNhbnRpdW0gdmVsaXQgc2ludCBldW1cclxuXHRcdFx0XHRcdFx0ZG9sb3Jlcy5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0PENhcm91c2VsXHJcblx0XHRcdFx0XHRcdFx0YWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fVxyXG5cdFx0XHRcdFx0XHRcdG5leHQ9e25leHR9XHJcblx0XHRcdFx0XHRcdFx0cHJldmlvdXM9e3ByZXZpb3VzfT5cclxuXHRcdFx0XHRcdFx0XHQ8Q2Fyb3VzZWxJbmRpY2F0b3JzXHJcblx0XHRcdFx0XHRcdFx0XHRpdGVtcz17cGhvdG9zfVxyXG5cdFx0XHRcdFx0XHRcdFx0YWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGlja0hhbmRsZXI9e2dvVG9JbmRleH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdHtjYXJvdXNlbCgnaW50ZXJpZXVyJyl9XHJcblx0XHRcdFx0XHRcdFx0PENhcm91c2VsQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9uPSdwcmV2J1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9uVGV4dD0nUHJldmlvdXMnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrSGFuZGxlcj17cHJldmlvdXN9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8Q2Fyb3VzZWxDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRkaXJlY3Rpb249J25leHQnXHJcblx0XHRcdFx0XHRcdFx0XHRkaXJlY3Rpb25UZXh0PSdOZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGlja0hhbmRsZXI9e25leHR9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9DYXJvdXNlbD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uUGlzY2luZSA9ICgpID0+IChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0XHQ8aDI+UGFydGllIHBpc2NpbmU8L2gyPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0PENhcm91c2VsXHJcblx0XHRcdFx0XHRcdFx0YWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fVxyXG5cdFx0XHRcdFx0XHRcdG5leHQ9e25leHR9XHJcblx0XHRcdFx0XHRcdFx0cHJldmlvdXM9e3ByZXZpb3VzfT5cclxuXHRcdFx0XHRcdFx0XHQ8Q2Fyb3VzZWxJbmRpY2F0b3JzXHJcblx0XHRcdFx0XHRcdFx0XHRpdGVtcz17cGhvdG9zfVxyXG5cdFx0XHRcdFx0XHRcdFx0YWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGlja0hhbmRsZXI9e2dvVG9JbmRleH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdHtjYXJvdXNlbCgncGlzY2luZScpfVxyXG5cdFx0XHRcdFx0XHRcdDxDYXJvdXNlbENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdGRpcmVjdGlvbj0ncHJldidcclxuXHRcdFx0XHRcdFx0XHRcdGRpcmVjdGlvblRleHQ9J1ByZXZpb3VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGlja0hhbmRsZXI9e3ByZXZpb3VzfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PENhcm91c2VsQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9uPSduZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9uVGV4dD0nTmV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2tIYW5kbGVyPXtuZXh0fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvQ2Fyb3VzZWw+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcblx0XHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcblx0XHRcdFx0XHRcdENvcnBvcmlzIGRlbGVjdHVzIHZpdGFlIG51bXF1YW0gb3B0aW8sIGEgZGlnbmlzc2ltb3MsXHJcblx0XHRcdFx0XHRcdGNvbW1vZGkgYXQgZXVtLCBwbGFjZWF0IG9iY2FlY2F0aSBhbWV0IGl1cmUgaXBzYSBmdWdhXHJcblx0XHRcdFx0XHRcdGRvbG9yIGZhY2lsaXMgc2ludD8gVm9sdXB0YXRlbSBjb25zZXF1YXR1ciB2ZXJvXHJcblx0XHRcdFx0XHRcdHZvbHVwdGF0ZXMgdml0YWUgcmVjdXNhbmRhZSB2ZWwsIGFiIHF1aSBtb2xlc3RpYWVcclxuXHRcdFx0XHRcdFx0cGFyaWF0dXIgcXVpcywgZGViaXRpcyBhdXQgaW1wZWRpdCBjb21tb2RpIG51bGxhIGZ1Z2l0XHJcblx0XHRcdFx0XHRcdGluY2lkdW50IGJsYW5kaXRpaXMgaGljIGEgY3VwaWRpdGF0ZS5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uUmV2aWV3ID0gKCkgPT4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdFx0PGgyPkNlIHF1ZSBub3MgY2xpZW50cyBkaXNlbnQgZGUgY2UgZ8OudGU8L2gyPlxyXG5cdFx0XHRcdFx0PHA+TGlzdGUgZGVzIHJldmlld3M8L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25WaWRlb0NvbnRhY3QgPSAoKSA9PiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0PHNlY3Rpb24+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxyXG5cdFx0XHRcdFx0XHQ8aDI+Q2UgcXVlIG5vcyBjbGllbnRzIGRpc2VudCBkZSBjZSBnw650ZTwvaDI+XHJcblx0XHRcdFx0XHRcdDxwPkxpc3RlIGRlcyByZXZpZXdzPC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxyXG5cdFx0XHRcdFx0XHQ8aDI+RWNyaXZlei1ub3VzICE8L2gyPlxyXG5cdFx0XHRcdFx0XHQ8Q29udGFjdEZvcm0gLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uQ2FsZW5kcmllciA9ICgpID0+IChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0XHQ8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtnaXRlLmNhbGVuZHJpZXJMaW5rfSAvPlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBoZWFkID0gKCkgPT4gKFxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdDx0aXRsZT5cclxuXHRcdFx0XHR7QVBQX05BTUV9IHwge2dpdGUubm9tfXsnICd9XHJcblx0XHRcdDwvdGl0bGU+XHJcblx0XHRcdDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PXtnaXRlLm1kZXNjfSAvPlxyXG5cdFx0XHQ8bGluayByZWw9J2Nhbm9uaWNhbCcgaHJlZj17YCR7RE9NQUlOfS9ibG9ncy8ke3F1ZXJ5LnNsdWd9YH0gLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnRpdGxlJyBjb250ZW50PXtgJHtnaXRlLm5vbX0gfCAke0FQUF9OQU1FfWB9IC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzpkZXNjcmlwdGlvbicgY29udGVudD17Z2l0ZS5tZGVzY30gLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnR5cGUnIGNvbnRlbnQ9J3dlYnNpdGUnIC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzp1cmwnIGNvbnRlbnQ9e2Ake0RPTUFJTn0vYmxvZ3MvJHtxdWVyeS5zbHVnfWB9IC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzpzaXRlX25hbWUnIGNvbnRlbnQ9e2Ake0FQUF9OQU1FfWB9IC8+XHJcblxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6c2l0ZV9uYW1lJyBjb250ZW50PXtBUFBfTkFNRX0gLz5cclxuXHJcblx0XHRcdDxtZXRhXHJcblx0XHRcdFx0cHJvcGVydHk9J29nOmltYWdlJ1xyXG5cdFx0XHRcdGNvbnRlbnQ9e2Ake0FQSX0vYmxvZy9waG90by8ke2dpdGUuc2x1Z31gfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8bWV0YVxyXG5cdFx0XHRcdHByb3BlcnR5PSdvZzppbWFnZTpzZWN1cmVfdXJsJ1xyXG5cdFx0XHRcdGNvbnRlbnQ9e2Ake0FQSX0vZ2l0ZS9waG90by8ke2dpdGUuc2x1Z31gfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6aW1hZ2U6dHlwZScgY29udGVudD0naW1hZ2UvanBnJyAvPlxyXG5cdFx0XHR7LyogPG1ldGEgcHJvcGVydHk9J2ZiOmFwcF9pZCcgY29udGVudD17YCR7RkJfQVBQX0lEfWB9IC8+ICovfVxyXG5cdFx0PC9IZWFkPlxyXG5cdCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7aGVhZCgpfVxyXG5cdFx0XHQ8TGF5b3V0PlxyXG5cdFx0XHRcdDxoMj5JbmZvcyBkdSBnaXRlPC9oMj5cclxuXHRcdFx0XHR7SlNPTi5zdHJpbmdpZnkoZ2l0ZSl9XHJcblx0XHRcdFx0e2p1bWJvdHJvbigpfVxyXG5cdFx0XHRcdHtzZWN0aW9uRXh0ZXJpZXVyKCl9XHJcblx0XHRcdFx0e3NlY3Rpb25JbnRlcmlldXIoKX1cclxuXHRcdFx0XHR7c2VjdGlvblBpc2NpbmUoKX1cclxuXHRcdFx0XHR7c2VjdGlvblJldmlldygpfVxyXG5cdFx0XHRcdHtzZWN0aW9uVmlkZW9Db250YWN0KCl9XHJcblx0XHRcdFx0e3NlY3Rpb25DYWxlbmRyaWVyKCl9XHJcblx0XHRcdDwvTGF5b3V0PlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbkdpdGUuZ2V0SW5pdGlhbFByb3BzID0gKHsgcXVlcnkgfSkgPT4ge1xyXG5cdC8vIGNvbnNvbGUubG9nKHF1ZXJ5KTtcclxuXHRyZXR1cm4gbGlzdEdpdGVEZXRhaWxzKHF1ZXJ5LnNsdWcpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHsgZ2l0ZTogZGF0YSwgcXVlcnkgfTtcclxuXHRcdH1cclxuXHR9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdpdGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=