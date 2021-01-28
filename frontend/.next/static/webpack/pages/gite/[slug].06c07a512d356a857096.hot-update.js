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
      __html: gite.calendrierLink
    };
  };

  var afficheVideo = function afficheVideo() {
    return {
      __html: gite.videoLink
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
            lineNumber: 73,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "lead",
            children: gite.presGiteSEO
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
            className: "my-2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "It uses utility classes for typography and spacing to space content out within the larger container."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "lead"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
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
          lineNumber: 97,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselCaption"], {
          captionText: photo.texteImg,
          captionHeader: photo.texteImg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 6
        }, _this)]
      }, photo.location, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
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
          lineNumber: 114,
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
                lineNumber: 121,
                columnNumber: 8
              }, _this), carousel('exterieur'), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselControl"], {
                direction: "prev",
                directionText: "Previous",
                onClickHandler: previous
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 8
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselControl"], {
                direction: "next",
                directionText: "Next",
                onClickHandler: next
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 8
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-6",
            children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus delectus ipsa, corrupti minus totam nobis non ducimus earum, possimus consectetur sequi suscipit soluta beatae deserunt similique eaque est? Porro iusto voluptatem ipsum optio obcaecati, est quasi corporis quibusdam autem animi at tenetur omnis eveniet eaque exercitationem dolores. Quod, reprehenderit commodi!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
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
          lineNumber: 156,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-6",
            children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorum quas asperiores deserunt debitis accusamus amet ipsa dolores quisquam iusto veniam officiis vitae tempore repudiandae quaerat cumque facilis, ab saepe, eveniet voluptas odit perspiciatis alias. Sunt, beatae! Officiis voluptas, adipisci repudiandae quaerat, atque consequuntur ducimus, accusantium velit sint eum dolores."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
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
                lineNumber: 173,
                columnNumber: 8
              }, _this), carousel('interieur'), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselControl"], {
                direction: "prev",
                directionText: "Previous",
                onClickHandler: previous
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 8
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselControl"], {
                direction: "next",
                directionText: "Next",
                onClickHandler: next
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 8
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
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
          lineNumber: 199,
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
                lineNumber: 206,
                columnNumber: 8
              }, _this), carousel('piscine'), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselControl"], {
                direction: "prev",
                directionText: "Previous",
                onClickHandler: previous
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 8
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselControl"], {
                direction: "next",
                directionText: "Next",
                onClickHandler: next
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 217,
                columnNumber: 8
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-6",
            children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis delectus vitae numquam optio, a dignissimos, commodi at eum, placeat obcaecati amet iure ipsa fuga dolor facilis sint? Voluptatem consequatur vero voluptates vitae recusandae vel, ab qui molestiae pariatur quis, debitis aut impedit commodi nulla fugit incidunt blanditiis hic a cupiditate."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 3
    }, _this);
  };

  var sectionReview = function sectionReview() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Ce que nos clients disent de ce g\xEEte"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Liste des reviews"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 6
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 239,
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
              children: "Tour du g\xEEte en vid\xE9o"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 7
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "mt-5",
              dangerouslySetInnerHTML: afficheVideo()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 255,
              columnNumber: 7
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              children: "Ecrivez-nous !"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 7
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ContactForm__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 7
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 3
    }, _this);
  };

  var sectionCalendrier = function sectionCalendrier() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container text-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Calendrier des disponibilit\xE9s"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          dangerouslySetInnerHTML: afficheCalendrier()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 3
    }, _this);
  };

  var sectionMap = function sectionMap() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container text-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Itin\xE9raire conseill\xE9 depuis votre position"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          dangerouslySetInnerHTML: afficheCalendrier()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 3
    }, _this);
  };

  var head = function head() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: [_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"], " | ", gite.nom, ' ']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: gite.mdesc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "canonical",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"], "/blogs/").concat(query.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: "".concat(gite.nom, " | ").concat(_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: gite.mdesc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:type",
        content: "website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:url",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"], "/blogs/").concat(query.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:site_name",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:site_name",
        content: _config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/blog/photo/").concat(gite.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image:secure_url",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/gite/photo/").concat(gite.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image:type",
        content: "image/jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 4
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 3
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [head(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Infos du gite"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 5
      }, _this), JSON.stringify(gite), jumbotron(), sectionExterieur(), sectionInterieur(), sectionPiscine(), sectionReview(), sectionVideoContact(), sectionCalendrier(), sectionMap()]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 318,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2l0ZS9bc2x1Z10uanMiXSwibmFtZXMiOlsiR2l0ZSIsImdpdGUiLCJxdWVyeSIsInBob3RvcyIsImxvY2F0aW9uIiwibm9tIiwidGV4dGVJbWciLCJhZmZpY2hlQ2FsZW5kcmllciIsIl9faHRtbCIsImNhbGVuZHJpZXJMaW5rIiwiYWZmaWNoZVZpZGVvIiwidmlkZW9MaW5rIiwidXNlU3RhdGUiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwiYW5pbWF0aW5nIiwic2V0QW5pbWF0aW5nIiwibmV4dCIsIm5leHRJbmRleCIsImxlbmd0aCIsInByZXZpb3VzIiwiZ29Ub0luZGV4IiwibmV3SW5kZXgiLCJqdW1ib3Ryb24iLCJwcmVzR2l0ZVNFTyIsImNhcm91c2VsIiwibWFwIiwicGhvdG8iLCJzZWN0aW9uRXh0ZXJpZXVyIiwic2VjdGlvbkludGVyaWV1ciIsInNlY3Rpb25QaXNjaW5lIiwic2VjdGlvblJldmlldyIsInNlY3Rpb25WaWRlb0NvbnRhY3QiLCJzZWN0aW9uQ2FsZW5kcmllciIsInNlY3Rpb25NYXAiLCJoZWFkIiwiQVBQX05BTUUiLCJtZGVzYyIsIkRPTUFJTiIsInNsdWciLCJBUEkiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0SW5pdGlhbFByb3BzIiwibGlzdEdpdGVEZXRhaWxzIiwidGhlbiIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFxQjtBQUFBOztBQUFBLE1BQWxCQyxJQUFrQixRQUFsQkEsSUFBa0I7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDakMsTUFBTUMsTUFBTSxHQUFHLENBQ2Q7QUFDQ0MsWUFBUSxFQUNQLDREQUZGO0FBR0NDLE9B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QUFBO0FBQUE7QUFBQTtBQUFBLGVBdEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURZO0FBQUEsR0FBYjs7QUE0QkEsc0JBQ0M7QUFBQSxlQUNFSixJQUFJLEVBRE4sZUFFQyxxRUFBQyxpRUFBRDtBQUFBLDhCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsRUFFRU0sSUFBSSxDQUFDQyxTQUFMLENBQWV6QyxJQUFmLENBRkYsRUFHRXNCLFNBQVMsRUFIWCxFQUlFSyxnQkFBZ0IsRUFKbEIsRUFLRUMsZ0JBQWdCLEVBTGxCLEVBTUVDLGNBQWMsRUFOaEIsRUFPRUMsYUFBYSxFQVBmLEVBUUVDLG1CQUFtQixFQVJyQixFQVNFQyxpQkFBaUIsRUFUbkIsRUFVRUMsVUFBVSxFQVZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZEO0FBQUEsa0JBREQ7QUFpQkEsQ0ExVEQ7O0dBQU1sQyxJOztLQUFBQSxJOztBQTRUTkEsSUFBSSxDQUFDMkMsZUFBTCxHQUF1QixpQkFBZTtBQUFBLE1BQVp6QyxLQUFZLFNBQVpBLEtBQVk7QUFDckM7QUFDQSxTQUFPMEMsNEVBQWUsQ0FBQzFDLEtBQUssQ0FBQ3FDLElBQVAsQ0FBZixDQUE0Qk0sSUFBNUIsQ0FBaUMsVUFBQ0MsSUFBRCxFQUFVO0FBQ2pELFFBQUlBLElBQUksQ0FBQ0MsS0FBVCxFQUFnQjtBQUNmQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBSSxDQUFDQyxLQUFqQjtBQUNBLEtBRkQsTUFFTztBQUNOLGFBQU87QUFBRTlDLFlBQUksRUFBRTZDLElBQVI7QUFBYzVDLGFBQUssRUFBTEE7QUFBZCxPQUFQO0FBQ0E7QUFDRCxHQU5NLENBQVA7QUFPQSxDQVREOztBQVdlRixtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9naXRlL1tzbHVnXS4wNmMwN2E1MTJkMzU2YTg1NzA5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQnO1xyXG5pbXBvcnQgeyBBUEksIERPTUFJTiwgQVBQX05BTUUgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQgeyBsaXN0R2l0ZURldGFpbHMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQge1xyXG5cdEp1bWJvdHJvbixcclxuXHRDYXJvdXNlbCxcclxuXHRDYXJvdXNlbEl0ZW0sXHJcblx0Q2Fyb3VzZWxDb250cm9sLFxyXG5cdENhcm91c2VsSW5kaWNhdG9ycyxcclxuXHRDYXJvdXNlbENhcHRpb24sXHJcbn0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250YWN0Rm9ybSc7XHJcblxyXG5jb25zdCBHaXRlID0gKHsgZ2l0ZSwgcXVlcnkgfSkgPT4ge1xyXG5cdGNvbnN0IHBob3RvcyA9IFtcclxuXHRcdHtcclxuXHRcdFx0bG9jYXRpb246XHJcblx0XHRcdFx0J2h0dHBzOi8vZ2l0ZXMtd2FvLnMzLmFtYXpvbmF3cy5jb20vT3B2Y1VKaTFFSC1QMTAxMDE4Ni5qcGcnLFxyXG5cdFx0XHRub206ICdQMTAxMDE4Ni5qcGcnLFxyXG5cdFx0XHR0ZXh0ZUltZzogJ2xvcmVtIGxvcmVtIGxvcmVtJyxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGxvY2F0aW9uOlxyXG5cdFx0XHRcdCdodHRwczovL2dpdGVzLXdhby5zMy5hbWF6b25hd3MuY29tL05VS0tVVXRVRG0tUDEwOTA3MTQuanBnJyxcclxuXHRcdFx0bm9tOiAnUDEwOTA3MTQuanBnJyxcclxuXHRcdFx0dGV4dGVJbWc6ICdsb3JlbSBsb3JlbSBsb3JlbScsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRsb2NhdGlvbjpcclxuXHRcdFx0XHQnaHR0cHM6Ly9naXRlcy13YW8uczMuYW1hem9uYXdzLmNvbS9pYlJHdm96Z1l1LVAxMDkwNzE2LmpwZycsXHJcblx0XHRcdG5vbTogJ1AxMDkwNzE2LmpwZycsXHJcblx0XHRcdHRleHRlSW1nOiAnbG9yZW0gbG9yZW0gbG9yZW0nLFxyXG5cdFx0fSxcclxuXHRdO1xyXG5cclxuXHRjb25zdCBhZmZpY2hlQ2FsZW5kcmllciA9ICgpID0+IHtcclxuXHRcdHJldHVybiB7IF9faHRtbDogZ2l0ZS5jYWxlbmRyaWVyTGluayB9O1xyXG5cdH07XHJcblx0Y29uc3QgYWZmaWNoZVZpZGVvID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIHsgX19odG1sOiBnaXRlLnZpZGVvTGluayB9O1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcblx0Y29uc3QgW2FuaW1hdGluZywgc2V0QW5pbWF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Y29uc3QgbmV4dCA9ICgpID0+IHtcclxuXHRcdGlmIChhbmltYXRpbmcpIHJldHVybjtcclxuXHRcdGNvbnN0IG5leHRJbmRleCA9XHJcblx0XHRcdGFjdGl2ZUluZGV4ID09PSBwaG90b3MubGVuZ3RoIC0gMSA/IDAgOiBhY3RpdmVJbmRleCArIDE7XHJcblx0XHRzZXRBY3RpdmVJbmRleChuZXh0SW5kZXgpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHByZXZpb3VzID0gKCkgPT4ge1xyXG5cdFx0aWYgKGFuaW1hdGluZykgcmV0dXJuO1xyXG5cdFx0Y29uc3QgbmV4dEluZGV4ID1cclxuXHRcdFx0YWN0aXZlSW5kZXggPT09IDAgPyBwaG90b3MubGVuZ3RoIC0gMSA6IGFjdGl2ZUluZGV4IC0gMTtcclxuXHRcdHNldEFjdGl2ZUluZGV4KG5leHRJbmRleCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZ29Ub0luZGV4ID0gKG5ld0luZGV4KSA9PiB7XHJcblx0XHRpZiAoYW5pbWF0aW5nKSByZXR1cm47XHJcblx0XHRzZXRBY3RpdmVJbmRleChuZXdJbmRleCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QganVtYm90cm9uID0gKCkgPT4gKFxyXG5cdFx0PHNlY3Rpb24+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHRcdDxKdW1ib3Ryb24+XHJcblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSdkaXNwbGF5LTMnPlxyXG5cdFx0XHRcdFx0XHRQcsOpc2VudGF0aW9uIGR1IGfDrnRlIHtnaXRlLm5vbX1cclxuXHRcdFx0XHRcdDwvaDE+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2xlYWQnPntnaXRlLnByZXNHaXRlU0VPfTwvcD5cclxuXHRcdFx0XHRcdDxociBjbGFzc05hbWU9J215LTInIC8+XHJcblx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0SXQgdXNlcyB1dGlsaXR5IGNsYXNzZXMgZm9yIHR5cG9ncmFwaHkgYW5kIHNwYWNpbmcgdG9cclxuXHRcdFx0XHRcdFx0c3BhY2UgY29udGVudCBvdXQgd2l0aGluIHRoZSBsYXJnZXIgY29udGFpbmVyLlxyXG5cdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdsZWFkJz5cclxuXHRcdFx0XHRcdFx0ey8qIDxCdXR0b24gY29sb3I9J3ByaW1hcnknPkxlYXJuIE1vcmU8L0J1dHRvbj4gKi99XHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0PC9KdW1ib3Ryb24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9zZWN0aW9uPlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IGNhcm91c2VsID0gKG5vbSkgPT5cclxuXHRcdHBob3Rvcy5tYXAoKHBob3RvKSA9PiB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PENhcm91c2VsSXRlbVxyXG5cdFx0XHRcdFx0b25FeGl0aW5nPXsoKSA9PiBzZXRBbmltYXRpbmcodHJ1ZSl9XHJcblx0XHRcdFx0XHRvbkV4aXRlZD17KCkgPT4gc2V0QW5pbWF0aW5nKGZhbHNlKX1cclxuXHRcdFx0XHRcdGtleT17cGhvdG8ubG9jYXRpb259PlxyXG5cdFx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRcdHNyYz17cGhvdG8ubG9jYXRpb259XHJcblx0XHRcdFx0XHRcdGFsdD17cGhvdG8ubm9tfVxyXG5cdFx0XHRcdFx0XHR3aWR0aD17NTAwfVxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ9ezM3NX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8Q2Fyb3VzZWxDYXB0aW9uXHJcblx0XHRcdFx0XHRcdGNhcHRpb25UZXh0PXtwaG90by50ZXh0ZUltZ31cclxuXHRcdFx0XHRcdFx0Y2FwdGlvbkhlYWRlcj17cGhvdG8udGV4dGVJbWd9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvQ2Fyb3VzZWxJdGVtPlxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25FeHRlcmlldXIgPSAoKSA9PiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0PHNlY3Rpb24+XHJcblx0XHRcdFx0PGgyPlBhcnRpZSBleHTDqXJpZXVyPC9oMj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcblx0XHRcdFx0XHRcdDxDYXJvdXNlbFxyXG5cdFx0XHRcdFx0XHRcdGFjdGl2ZUluZGV4PXthY3RpdmVJbmRleH1cclxuXHRcdFx0XHRcdFx0XHRuZXh0PXtuZXh0fVxyXG5cdFx0XHRcdFx0XHRcdHByZXZpb3VzPXtwcmV2aW91c30+XHJcblx0XHRcdFx0XHRcdFx0PENhcm91c2VsSW5kaWNhdG9yc1xyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbXM9e3Bob3Rvc31cclxuXHRcdFx0XHRcdFx0XHRcdGFjdGl2ZUluZGV4PXthY3RpdmVJbmRleH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2tIYW5kbGVyPXtnb1RvSW5kZXh9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHR7Y2Fyb3VzZWwoJ2V4dGVyaWV1cicpfVxyXG5cdFx0XHRcdFx0XHRcdDxDYXJvdXNlbENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdGRpcmVjdGlvbj0ncHJldidcclxuXHRcdFx0XHRcdFx0XHRcdGRpcmVjdGlvblRleHQ9J1ByZXZpb3VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGlja0hhbmRsZXI9e3ByZXZpb3VzfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PENhcm91c2VsQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9uPSduZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9uVGV4dD0nTmV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2tIYW5kbGVyPXtuZXh0fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvQ2Fyb3VzZWw+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcblx0XHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcblx0XHRcdFx0XHRcdE5hdHVzIGRlbGVjdHVzIGlwc2EsIGNvcnJ1cHRpIG1pbnVzIHRvdGFtIG5vYmlzIG5vblxyXG5cdFx0XHRcdFx0XHRkdWNpbXVzIGVhcnVtLCBwb3NzaW11cyBjb25zZWN0ZXR1ciBzZXF1aSBzdXNjaXBpdFxyXG5cdFx0XHRcdFx0XHRzb2x1dGEgYmVhdGFlIGRlc2VydW50IHNpbWlsaXF1ZSBlYXF1ZSBlc3Q/IFBvcnJvIGl1c3RvXHJcblx0XHRcdFx0XHRcdHZvbHVwdGF0ZW0gaXBzdW0gb3B0aW8gb2JjYWVjYXRpLCBlc3QgcXVhc2kgY29ycG9yaXNcclxuXHRcdFx0XHRcdFx0cXVpYnVzZGFtIGF1dGVtIGFuaW1pIGF0IHRlbmV0dXIgb21uaXMgZXZlbmlldCBlYXF1ZVxyXG5cdFx0XHRcdFx0XHRleGVyY2l0YXRpb25lbSBkb2xvcmVzLiBRdW9kLCByZXByZWhlbmRlcml0IGNvbW1vZGkhXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvbkludGVyaWV1ciA9ICgpID0+IChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0XHQ8aDI+UGFydGllIGludMOpcmlldXI8L2gyPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuXHRcdFx0XHRcdFx0T21uaXMgZG9sb3J1bSBxdWFzIGFzcGVyaW9yZXMgZGVzZXJ1bnQgZGViaXRpcyBhY2N1c2FtdXNcclxuXHRcdFx0XHRcdFx0YW1ldCBpcHNhIGRvbG9yZXMgcXVpc3F1YW0gaXVzdG8gdmVuaWFtIG9mZmljaWlzIHZpdGFlXHJcblx0XHRcdFx0XHRcdHRlbXBvcmUgcmVwdWRpYW5kYWUgcXVhZXJhdCBjdW1xdWUgZmFjaWxpcywgYWIgc2FlcGUsXHJcblx0XHRcdFx0XHRcdGV2ZW5pZXQgdm9sdXB0YXMgb2RpdCBwZXJzcGljaWF0aXMgYWxpYXMuIFN1bnQsIGJlYXRhZSFcclxuXHRcdFx0XHRcdFx0T2ZmaWNpaXMgdm9sdXB0YXMsIGFkaXBpc2NpIHJlcHVkaWFuZGFlIHF1YWVyYXQsIGF0cXVlXHJcblx0XHRcdFx0XHRcdGNvbnNlcXV1bnR1ciBkdWNpbXVzLCBhY2N1c2FudGl1bSB2ZWxpdCBzaW50IGV1bVxyXG5cdFx0XHRcdFx0XHRkb2xvcmVzLlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxyXG5cdFx0XHRcdFx0XHQ8Q2Fyb3VzZWxcclxuXHRcdFx0XHRcdFx0XHRhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9XHJcblx0XHRcdFx0XHRcdFx0bmV4dD17bmV4dH1cclxuXHRcdFx0XHRcdFx0XHRwcmV2aW91cz17cHJldmlvdXN9PlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJvdXNlbEluZGljYXRvcnNcclxuXHRcdFx0XHRcdFx0XHRcdGl0ZW1zPXtwaG90b3N9XHJcblx0XHRcdFx0XHRcdFx0XHRhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrSGFuZGxlcj17Z29Ub0luZGV4fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0e2Nhcm91c2VsKCdpbnRlcmlldXInKX1cclxuXHRcdFx0XHRcdFx0XHQ8Q2Fyb3VzZWxDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRkaXJlY3Rpb249J3ByZXYnXHJcblx0XHRcdFx0XHRcdFx0XHRkaXJlY3Rpb25UZXh0PSdQcmV2aW91cydcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2tIYW5kbGVyPXtwcmV2aW91c31cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJvdXNlbENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdGRpcmVjdGlvbj0nbmV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdGRpcmVjdGlvblRleHQ9J05leHQnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrSGFuZGxlcj17bmV4dH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L0Nhcm91c2VsPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25QaXNjaW5lID0gKCkgPT4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdDxoMj5QYXJ0aWUgcGlzY2luZTwvaDI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxyXG5cdFx0XHRcdFx0XHQ8Q2Fyb3VzZWxcclxuXHRcdFx0XHRcdFx0XHRhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9XHJcblx0XHRcdFx0XHRcdFx0bmV4dD17bmV4dH1cclxuXHRcdFx0XHRcdFx0XHRwcmV2aW91cz17cHJldmlvdXN9PlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJvdXNlbEluZGljYXRvcnNcclxuXHRcdFx0XHRcdFx0XHRcdGl0ZW1zPXtwaG90b3N9XHJcblx0XHRcdFx0XHRcdFx0XHRhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrSGFuZGxlcj17Z29Ub0luZGV4fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0e2Nhcm91c2VsKCdwaXNjaW5lJyl9XHJcblx0XHRcdFx0XHRcdFx0PENhcm91c2VsQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9uPSdwcmV2J1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9uVGV4dD0nUHJldmlvdXMnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrSGFuZGxlcj17cHJldmlvdXN9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8Q2Fyb3VzZWxDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRkaXJlY3Rpb249J25leHQnXHJcblx0XHRcdFx0XHRcdFx0XHRkaXJlY3Rpb25UZXh0PSdOZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGlja0hhbmRsZXI9e25leHR9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9DYXJvdXNlbD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuXHRcdFx0XHRcdFx0Q29ycG9yaXMgZGVsZWN0dXMgdml0YWUgbnVtcXVhbSBvcHRpbywgYSBkaWduaXNzaW1vcyxcclxuXHRcdFx0XHRcdFx0Y29tbW9kaSBhdCBldW0sIHBsYWNlYXQgb2JjYWVjYXRpIGFtZXQgaXVyZSBpcHNhIGZ1Z2FcclxuXHRcdFx0XHRcdFx0ZG9sb3IgZmFjaWxpcyBzaW50PyBWb2x1cHRhdGVtIGNvbnNlcXVhdHVyIHZlcm9cclxuXHRcdFx0XHRcdFx0dm9sdXB0YXRlcyB2aXRhZSByZWN1c2FuZGFlIHZlbCwgYWIgcXVpIG1vbGVzdGlhZVxyXG5cdFx0XHRcdFx0XHRwYXJpYXR1ciBxdWlzLCBkZWJpdGlzIGF1dCBpbXBlZGl0IGNvbW1vZGkgbnVsbGEgZnVnaXRcclxuXHRcdFx0XHRcdFx0aW5jaWR1bnQgYmxhbmRpdGlpcyBoaWMgYSBjdXBpZGl0YXRlLlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25SZXZpZXcgPSAoKSA9PiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0PHNlY3Rpb24+XHJcblx0XHRcdFx0PGgyPkNlIHF1ZSBub3MgY2xpZW50cyBkaXNlbnQgZGUgY2UgZ8OudGU8L2gyPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdFx0PHA+TGlzdGUgZGVzIHJldmlld3M8L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25WaWRlb0NvbnRhY3QgPSAoKSA9PiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0PHNlY3Rpb24+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxyXG5cdFx0XHRcdFx0XHQ8aDI+VG91ciBkdSBnw650ZSBlbiB2aWTDqW88L2gyPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdtdC01J1xyXG5cdFx0XHRcdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXthZmZpY2hlVmlkZW8oKX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0PGgyPkVjcml2ZXotbm91cyAhPC9oMj5cclxuXHRcdFx0XHRcdFx0PENvbnRhY3RGb3JtIC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvbkNhbGVuZHJpZXIgPSAoKSA9PiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHRleHQtY2VudGVyJz5cclxuXHRcdFx0PHNlY3Rpb24+XHJcblx0XHRcdFx0PGgyPkNhbGVuZHJpZXIgZGVzIGRpc3BvbmliaWxpdMOpczwvaDI+XHJcblx0XHRcdFx0PGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17YWZmaWNoZUNhbGVuZHJpZXIoKX0gLz5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvbk1hcCA9ICgpID0+IChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgdGV4dC1jZW50ZXInPlxyXG5cdFx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0XHQ8aDI+SXRpbsOpcmFpcmUgY29uc2VpbGzDqSBkZXB1aXMgdm90cmUgcG9zaXRpb248L2gyPlxyXG5cdFx0XHRcdDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2FmZmljaGVDYWxlbmRyaWVyKCl9IC8+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IGhlYWQgPSAoKSA9PiAoXHJcblx0XHQ8SGVhZD5cclxuXHRcdFx0PHRpdGxlPlxyXG5cdFx0XHRcdHtBUFBfTkFNRX0gfCB7Z2l0ZS5ub219eycgJ31cclxuXHRcdFx0PC90aXRsZT5cclxuXHRcdFx0PG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2dpdGUubWRlc2N9IC8+XHJcblx0XHRcdDxsaW5rIHJlbD0nY2Fub25pY2FsJyBocmVmPXtgJHtET01BSU59L2Jsb2dzLyR7cXVlcnkuc2x1Z31gfSAvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6dGl0bGUnIGNvbnRlbnQ9e2Ake2dpdGUubm9tfSB8ICR7QVBQX05BTUV9YH0gLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOmRlc2NyaXB0aW9uJyBjb250ZW50PXtnaXRlLm1kZXNjfSAvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6dHlwZScgY29udGVudD0nd2Vic2l0ZScgLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnVybCcgY29udGVudD17YCR7RE9NQUlOfS9ibG9ncy8ke3F1ZXJ5LnNsdWd9YH0gLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnNpdGVfbmFtZScgY29udGVudD17YCR7QVBQX05BTUV9YH0gLz5cclxuXHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzpzaXRlX25hbWUnIGNvbnRlbnQ9e0FQUF9OQU1FfSAvPlxyXG5cclxuXHRcdFx0PG1ldGFcclxuXHRcdFx0XHRwcm9wZXJ0eT0nb2c6aW1hZ2UnXHJcblx0XHRcdFx0Y29udGVudD17YCR7QVBJfS9ibG9nL3Bob3RvLyR7Z2l0ZS5zbHVnfWB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxtZXRhXHJcblx0XHRcdFx0cHJvcGVydHk9J29nOmltYWdlOnNlY3VyZV91cmwnXHJcblx0XHRcdFx0Y29udGVudD17YCR7QVBJfS9naXRlL3Bob3RvLyR7Z2l0ZS5zbHVnfWB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzppbWFnZTp0eXBlJyBjb250ZW50PSdpbWFnZS9qcGcnIC8+XHJcblx0XHRcdHsvKiA8bWV0YSBwcm9wZXJ0eT0nZmI6YXBwX2lkJyBjb250ZW50PXtgJHtGQl9BUFBfSUR9YH0gLz4gKi99XHJcblx0XHQ8L0hlYWQ+XHJcblx0KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHtoZWFkKCl9XHJcblx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdFx0PGgyPkluZm9zIGR1IGdpdGU8L2gyPlxyXG5cdFx0XHRcdHtKU09OLnN0cmluZ2lmeShnaXRlKX1cclxuXHRcdFx0XHR7anVtYm90cm9uKCl9XHJcblx0XHRcdFx0e3NlY3Rpb25FeHRlcmlldXIoKX1cclxuXHRcdFx0XHR7c2VjdGlvbkludGVyaWV1cigpfVxyXG5cdFx0XHRcdHtzZWN0aW9uUGlzY2luZSgpfVxyXG5cdFx0XHRcdHtzZWN0aW9uUmV2aWV3KCl9XHJcblx0XHRcdFx0e3NlY3Rpb25WaWRlb0NvbnRhY3QoKX1cclxuXHRcdFx0XHR7c2VjdGlvbkNhbGVuZHJpZXIoKX1cclxuXHRcdFx0XHR7c2VjdGlvbk1hcCgpfVxyXG5cdFx0XHQ8L0xheW91dD5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5HaXRlLmdldEluaXRpYWxQcm9wcyA9ICh7IHF1ZXJ5IH0pID0+IHtcclxuXHQvLyBjb25zb2xlLmxvZyhxdWVyeSk7XHJcblx0cmV0dXJuIGxpc3RHaXRlRGV0YWlscyhxdWVyeS5zbHVnKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiB7IGdpdGU6IGRhdGEsIHF1ZXJ5IH07XHJcblx0XHR9XHJcblx0fSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHaXRlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9