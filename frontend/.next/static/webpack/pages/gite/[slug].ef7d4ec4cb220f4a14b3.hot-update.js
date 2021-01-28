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

  var head = function head() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: [_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"], " | ", gite.nom, ' ']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: gite.mdesc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "canonical",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"], "/blogs/").concat(query.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: "".concat(gite.nom, " | ").concat(_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: gite.mdesc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:type",
        content: "website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:url",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"], "/blogs/").concat(query.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:site_name",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:site_name",
        content: _config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/blog/photo/").concat(gite.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image:secure_url",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/gite/photo/").concat(gite.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image:type",
        content: "image/jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 4
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 3
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [head(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Infos du gite"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 5
      }, _this), JSON.stringify(gite), jumbotron(), sectionExterieur(), sectionInterieur(), sectionPiscine(), sectionReview(), sectionVideoContact(), sectionCalendrier()]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 309,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2l0ZS9bc2x1Z10uanMiXSwibmFtZXMiOlsiR2l0ZSIsImdpdGUiLCJxdWVyeSIsInBob3RvcyIsImxvY2F0aW9uIiwibm9tIiwidGV4dGVJbWciLCJhZmZpY2hlQ2FsZW5kcmllciIsIl9faHRtbCIsImNhbGVuZHJpZXJMaW5rIiwiYWZmaWNoZVZpZGVvIiwidmlkZW9MaW5rIiwidXNlU3RhdGUiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwiYW5pbWF0aW5nIiwic2V0QW5pbWF0aW5nIiwibmV4dCIsIm5leHRJbmRleCIsImxlbmd0aCIsInByZXZpb3VzIiwiZ29Ub0luZGV4IiwibmV3SW5kZXgiLCJqdW1ib3Ryb24iLCJwcmVzR2l0ZVNFTyIsImNhcm91c2VsIiwibWFwIiwicGhvdG8iLCJzZWN0aW9uRXh0ZXJpZXVyIiwic2VjdGlvbkludGVyaWV1ciIsInNlY3Rpb25QaXNjaW5lIiwic2VjdGlvblJldmlldyIsInNlY3Rpb25WaWRlb0NvbnRhY3QiLCJzZWN0aW9uQ2FsZW5kcmllciIsImhlYWQiLCJBUFBfTkFNRSIsIm1kZXNjIiwiRE9NQUlOIiwic2x1ZyIsIkFQSSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRJbml0aWFsUHJvcHMiLCJsaXN0R2l0ZURldGFpbHMiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXFCO0FBQUE7O0FBQUEsTUFBbEJDLElBQWtCLFFBQWxCQSxJQUFrQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUNqQyxNQUFNQyxNQUFNLEdBQUcsQ0FDZDtBQUNDQyxZQUFRLEVBQ1AsNERBRkY7QUFHQ0MsT0FBRyxFQUFFLGNBSE47QUFJQ0MsWUFBUSxFQUFFO0FBSlgsR0FEYyxFQU9kO0FBQ0NGLFlBQVEsRUFDUCw0REFGRjtBQUdDQyxPQUFHLEVBQUUsY0FITjtBQUlDQyxZQUFRLEVBQUU7QUFKWCxHQVBjLEVBYWQ7QUFDQ0YsWUFBUSxFQUNQLDREQUZGO0FBR0NDLE9BQUcsRUFBRSxjQUhOO0FBSUNDLFlBQVEsRUFBRTtBQUpYLEdBYmMsQ0FBZjs7QUFxQkEsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQy9CLFdBQU87QUFBRUMsWUFBTSxFQUFFUCxJQUFJLENBQUNRO0FBQWYsS0FBUDtBQUNBLEdBRkQ7O0FBR0EsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUMxQixXQUFPO0FBQUVGLFlBQU0sRUFBRVAsSUFBSSxDQUFDVTtBQUFmLEtBQVA7QUFDQSxHQUZEOztBQXpCaUMsa0JBNkJLQyxzREFBUSxDQUFDLENBQUQsQ0E3QmI7QUFBQSxNQTZCMUJDLFdBN0IwQjtBQUFBLE1BNkJiQyxjQTdCYTs7QUFBQSxtQkE4QkNGLHNEQUFRLENBQUMsS0FBRCxDQTlCVDtBQUFBLE1BOEIxQkcsU0E5QjBCO0FBQUEsTUE4QmZDLFlBOUJlOztBQWdDakMsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNsQixRQUFJRixTQUFKLEVBQWU7QUFDZixRQUFNRyxTQUFTLEdBQ2RMLFdBQVcsS0FBS1YsTUFBTSxDQUFDZ0IsTUFBUCxHQUFnQixDQUFoQyxHQUFvQyxDQUFwQyxHQUF3Q04sV0FBVyxHQUFHLENBRHZEO0FBRUFDLGtCQUFjLENBQUNJLFNBQUQsQ0FBZDtBQUNBLEdBTEQ7O0FBT0EsTUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUN0QixRQUFJTCxTQUFKLEVBQWU7QUFDZixRQUFNRyxTQUFTLEdBQ2RMLFdBQVcsS0FBSyxDQUFoQixHQUFvQlYsTUFBTSxDQUFDZ0IsTUFBUCxHQUFnQixDQUFwQyxHQUF3Q04sV0FBVyxHQUFHLENBRHZEO0FBRUFDLGtCQUFjLENBQUNJLFNBQUQsQ0FBZDtBQUNBLEdBTEQ7O0FBT0EsTUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsUUFBRCxFQUFjO0FBQy9CLFFBQUlQLFNBQUosRUFBZTtBQUNmRCxrQkFBYyxDQUFDUSxRQUFELENBQWQ7QUFDQSxHQUhEOztBQUtBLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsd0JBQ2pCO0FBQUEsNkJBQ0M7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSwrQkFDQyxxRUFBQyxvREFBRDtBQUFBLGtDQUNDO0FBQUkscUJBQVMsRUFBQyxXQUFkO0FBQUEsc0RBQ3VCdEIsSUFBSSxDQUFDSSxHQUQ1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFJQztBQUFHLHFCQUFTLEVBQUMsTUFBYjtBQUFBLHNCQUFxQkosSUFBSSxDQUFDdUI7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRCxlQUtDO0FBQUkscUJBQVMsRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEQsZUFNQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORCxlQVVDO0FBQUcscUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEaUI7QUFBQSxHQUFsQjs7QUFxQkEsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ3BCLEdBQUQ7QUFBQSxXQUNoQkYsTUFBTSxDQUFDdUIsR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBVztBQUNyQiwwQkFDQyxxRUFBQyx1REFBRDtBQUNDLGlCQUFTLEVBQUU7QUFBQSxpQkFBTVgsWUFBWSxDQUFDLElBQUQsQ0FBbEI7QUFBQSxTQURaO0FBRUMsZ0JBQVEsRUFBRTtBQUFBLGlCQUFNQSxZQUFZLENBQUMsS0FBRCxDQUFsQjtBQUFBLFNBRlg7QUFBQSxnQ0FJQyxxRUFBQyxpREFBRDtBQUNDLGFBQUcsRUFBRVcsS0FBSyxDQUFDdkIsUUFEWjtBQUVDLGFBQUcsRUFBRXVCLEtBQUssQ0FBQ3RCLEdBRlo7QUFHQyxlQUFLLEVBQUUsR0FIUjtBQUlDLGdCQUFNLEVBQUU7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpELGVBVUMscUVBQUMsMERBQUQ7QUFDQyxxQkFBVyxFQUFFc0IsS0FBSyxDQUFDckIsUUFEcEI7QUFFQyx1QkFBYSxFQUFFcUIsS0FBSyxDQUFDckI7QUFGdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRDtBQUFBLFNBR01xQixLQUFLLENBQUN2QixRQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQWlCQSxLQWxCRCxDQURnQjtBQUFBLEdBQWpCOztBQXFCQSxNQUFNd0IsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLHdCQUN4QjtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0M7QUFBQSxnQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUVDO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsa0NBQ0M7QUFBSyxxQkFBUyxFQUFDLFVBQWY7QUFBQSxtQ0FDQyxxRUFBQyxtREFBRDtBQUNDLHlCQUFXLEVBQUVmLFdBRGQ7QUFFQyxrQkFBSSxFQUFFSSxJQUZQO0FBR0Msc0JBQVEsRUFBRUcsUUFIWDtBQUFBLHNDQUlDLHFFQUFDLDZEQUFEO0FBQ0MscUJBQUssRUFBRWpCLE1BRFI7QUFFQywyQkFBVyxFQUFFVSxXQUZkO0FBR0MsOEJBQWMsRUFBRVE7QUFIakI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRCxFQVNFSSxRQUFRLENBQUMsV0FBRCxDQVRWLGVBVUMscUVBQUMsMERBQUQ7QUFDQyx5QkFBUyxFQUFDLE1BRFg7QUFFQyw2QkFBYSxFQUFDLFVBRmY7QUFHQyw4QkFBYyxFQUFFTDtBQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVZELGVBZUMscUVBQUMsMERBQUQ7QUFDQyx5QkFBUyxFQUFDLE1BRFg7QUFFQyw2QkFBYSxFQUFDLE1BRmY7QUFHQyw4QkFBYyxFQUFFSDtBQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUF3QkM7QUFBSyxxQkFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBeEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRHdCO0FBQUEsR0FBekI7O0FBMENBLE1BQU1ZLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSx3QkFDeEI7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNDO0FBQUEsZ0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFFQztBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGtDQUNDO0FBQUsscUJBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBV0M7QUFBSyxxQkFBUyxFQUFDLFVBQWY7QUFBQSxtQ0FDQyxxRUFBQyxtREFBRDtBQUNDLHlCQUFXLEVBQUVoQixXQURkO0FBRUMsa0JBQUksRUFBRUksSUFGUDtBQUdDLHNCQUFRLEVBQUVHLFFBSFg7QUFBQSxzQ0FJQyxxRUFBQyw2REFBRDtBQUNDLHFCQUFLLEVBQUVqQixNQURSO0FBRUMsMkJBQVcsRUFBRVUsV0FGZDtBQUdDLDhCQUFjLEVBQUVRO0FBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkQsRUFTRUksUUFBUSxDQUFDLFdBQUQsQ0FUVixlQVVDLHFFQUFDLDBEQUFEO0FBQ0MseUJBQVMsRUFBQyxNQURYO0FBRUMsNkJBQWEsRUFBQyxVQUZmO0FBR0MsOEJBQWMsRUFBRUw7QUFIakI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFWRCxlQWVDLHFFQUFDLDBEQUFEO0FBQ0MseUJBQVMsRUFBQyxNQURYO0FBRUMsNkJBQWEsRUFBQyxNQUZmO0FBR0MsOEJBQWMsRUFBRUg7QUFIakI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFmRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRHdCO0FBQUEsR0FBekI7O0FBMkNBLE1BQU1hLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSx3QkFDdEI7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNDO0FBQUEsZ0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFFQztBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGtDQUNDO0FBQUsscUJBQVMsRUFBQyxVQUFmO0FBQUEsbUNBQ0MscUVBQUMsbURBQUQ7QUFDQyx5QkFBVyxFQUFFakIsV0FEZDtBQUVDLGtCQUFJLEVBQUVJLElBRlA7QUFHQyxzQkFBUSxFQUFFRyxRQUhYO0FBQUEsc0NBSUMscUVBQUMsNkRBQUQ7QUFDQyxxQkFBSyxFQUFFakIsTUFEUjtBQUVDLDJCQUFXLEVBQUVVLFdBRmQ7QUFHQyw4QkFBYyxFQUFFUTtBQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpELEVBU0VJLFFBQVEsQ0FBQyxTQUFELENBVFYsZUFVQyxxRUFBQywwREFBRDtBQUNDLHlCQUFTLEVBQUMsTUFEWDtBQUVDLDZCQUFhLEVBQUMsVUFGZjtBQUdDLDhCQUFjLEVBQUVMO0FBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVkQsZUFlQyxxRUFBQywwREFBRDtBQUNDLHlCQUFTLEVBQUMsTUFEWDtBQUVDLDZCQUFhLEVBQUMsTUFGZjtBQUdDLDhCQUFjLEVBQUVIO0FBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBZkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQXdCQztBQUFLLHFCQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF4QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEc0I7QUFBQSxHQUF2Qjs7QUEwQ0EsTUFBTWMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQjtBQUFBLHdCQUNyQjtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0M7QUFBQSxnQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUVDO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsaUNBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEcUI7QUFBQSxHQUF0Qjs7QUFXQSxNQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCO0FBQUEsd0JBQzNCO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw2QkFDQztBQUFBLCtCQUNDO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsa0NBQ0M7QUFBSyxxQkFBUyxFQUFDLFVBQWY7QUFBQSxvQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUVDO0FBQ0MsdUJBQVMsRUFBQyxNQURYO0FBRUMscUNBQXVCLEVBQUV0QixZQUFZO0FBRnRDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBUUM7QUFBSyxxQkFBUyxFQUFDLFVBQWY7QUFBQSxvQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUVDLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRDJCO0FBQUEsR0FBNUI7O0FBb0JBLE1BQU11QixpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsd0JBQ3pCO0FBQUssZUFBUyxFQUFDLHVCQUFmO0FBQUEsNkJBQ0M7QUFBQSxnQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUVDO0FBQUssaUNBQXVCLEVBQUUxQixpQkFBaUI7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRHlCO0FBQUEsR0FBMUI7O0FBU0EsTUFBTTJCLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsd0JBQ1oscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDQztBQUFBLG1CQUNFQyxnREFERixTQUNlbEMsSUFBSSxDQUFDSSxHQURwQixFQUN5QixHQUR6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUlDO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFFSixJQUFJLENBQUNtQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkQsZUFLQztBQUFNLFdBQUcsRUFBQyxXQUFWO0FBQXNCLFlBQUksWUFBS0MsOENBQUwsb0JBQXFCbkMsS0FBSyxDQUFDb0MsSUFBM0I7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxELGVBTUM7QUFBTSxnQkFBUSxFQUFDLFVBQWY7QUFBMEIsZUFBTyxZQUFLckMsSUFBSSxDQUFDSSxHQUFWLGdCQUFtQjhCLGdEQUFuQjtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkQsZUFPQztBQUFNLGdCQUFRLEVBQUMsZ0JBQWY7QUFBZ0MsZUFBTyxFQUFFbEMsSUFBSSxDQUFDbUM7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBELGVBUUM7QUFBTSxnQkFBUSxFQUFDLFNBQWY7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRCxlQVNDO0FBQU0sZ0JBQVEsRUFBQyxRQUFmO0FBQXdCLGVBQU8sWUFBS0MsOENBQUwsb0JBQXFCbkMsS0FBSyxDQUFDb0MsSUFBM0I7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRELGVBVUM7QUFBTSxnQkFBUSxFQUFDLGNBQWY7QUFBOEIsZUFBTyxZQUFLSCxnREFBTDtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkQsZUFZQztBQUFNLGdCQUFRLEVBQUMsY0FBZjtBQUE4QixlQUFPLEVBQUVBLGdEQUFRQTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkQsZUFjQztBQUNDLGdCQUFRLEVBQUMsVUFEVjtBQUVDLGVBQU8sWUFBS0ksMkNBQUwseUJBQXVCdEMsSUFBSSxDQUFDcUMsSUFBNUI7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEQsZUFrQkM7QUFDQyxnQkFBUSxFQUFDLHFCQURWO0FBRUMsZUFBTyxZQUFLQywyQ0FBTCx5QkFBdUJ0QyxJQUFJLENBQUNxQyxJQUE1QjtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFsQkQsZUFzQkM7QUFBTSxnQkFBUSxFQUFDLGVBQWY7QUFBK0IsZUFBTyxFQUFDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFk7QUFBQSxHQUFiOztBQTRCQSxzQkFDQztBQUFBLGVBQ0VKLElBQUksRUFETixlQUVDLHFFQUFDLGlFQUFEO0FBQUEsOEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxFQUVFTSxJQUFJLENBQUNDLFNBQUwsQ0FBZXhDLElBQWYsQ0FGRixFQUdFc0IsU0FBUyxFQUhYLEVBSUVLLGdCQUFnQixFQUpsQixFQUtFQyxnQkFBZ0IsRUFMbEIsRUFNRUMsY0FBYyxFQU5oQixFQU9FQyxhQUFhLEVBUGYsRUFRRUMsbUJBQW1CLEVBUnJCLEVBU0VDLGlCQUFpQixFQVRuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRDtBQUFBLGtCQUREO0FBZ0JBLENBaFREOztHQUFNakMsSTs7S0FBQUEsSTs7QUFrVE5BLElBQUksQ0FBQzBDLGVBQUwsR0FBdUIsaUJBQWU7QUFBQSxNQUFaeEMsS0FBWSxTQUFaQSxLQUFZO0FBQ3JDO0FBQ0EsU0FBT3lDLDRFQUFlLENBQUN6QyxLQUFLLENBQUNvQyxJQUFQLENBQWYsQ0FBNEJNLElBQTVCLENBQWlDLFVBQUNDLElBQUQsRUFBVTtBQUNqRCxRQUFJQSxJQUFJLENBQUNDLEtBQVQsRUFBZ0I7QUFDZkMsYUFBTyxDQUFDQyxHQUFSLENBQVlILElBQUksQ0FBQ0MsS0FBakI7QUFDQSxLQUZELE1BRU87QUFDTixhQUFPO0FBQUU3QyxZQUFJLEVBQUU0QyxJQUFSO0FBQWMzQyxhQUFLLEVBQUxBO0FBQWQsT0FBUDtBQUNBO0FBQ0QsR0FOTSxDQUFQO0FBT0EsQ0FURDs7QUFXZUYsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2l0ZS9bc2x1Z10uZWY3ZDRlYzRjYjIyMGY0YTE0YjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0JztcclxuaW1wb3J0IHsgQVBJLCBET01BSU4sIEFQUF9OQU1FIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHsgbGlzdEdpdGVEZXRhaWxzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHtcclxuXHRKdW1ib3Ryb24sXHJcblx0Q2Fyb3VzZWwsXHJcblx0Q2Fyb3VzZWxJdGVtLFxyXG5cdENhcm91c2VsQ29udHJvbCxcclxuXHRDYXJvdXNlbEluZGljYXRvcnMsXHJcblx0Q2Fyb3VzZWxDYXB0aW9uLFxyXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGFjdEZvcm0nO1xyXG5cclxuY29uc3QgR2l0ZSA9ICh7IGdpdGUsIHF1ZXJ5IH0pID0+IHtcclxuXHRjb25zdCBwaG90b3MgPSBbXHJcblx0XHR7XHJcblx0XHRcdGxvY2F0aW9uOlxyXG5cdFx0XHRcdCdodHRwczovL2dpdGVzLXdhby5zMy5hbWF6b25hd3MuY29tL09wdmNVSmkxRUgtUDEwMTAxODYuanBnJyxcclxuXHRcdFx0bm9tOiAnUDEwMTAxODYuanBnJyxcclxuXHRcdFx0dGV4dGVJbWc6ICdsb3JlbSBsb3JlbSBsb3JlbScsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRsb2NhdGlvbjpcclxuXHRcdFx0XHQnaHR0cHM6Ly9naXRlcy13YW8uczMuYW1hem9uYXdzLmNvbS9OVUtLVVV0VURtLVAxMDkwNzE0LmpwZycsXHJcblx0XHRcdG5vbTogJ1AxMDkwNzE0LmpwZycsXHJcblx0XHRcdHRleHRlSW1nOiAnbG9yZW0gbG9yZW0gbG9yZW0nLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bG9jYXRpb246XHJcblx0XHRcdFx0J2h0dHBzOi8vZ2l0ZXMtd2FvLnMzLmFtYXpvbmF3cy5jb20vaWJSR3ZvemdZdS1QMTA5MDcxNi5qcGcnLFxyXG5cdFx0XHRub206ICdQMTA5MDcxNi5qcGcnLFxyXG5cdFx0XHR0ZXh0ZUltZzogJ2xvcmVtIGxvcmVtIGxvcmVtJyxcclxuXHRcdH0sXHJcblx0XTtcclxuXHJcblx0Y29uc3QgYWZmaWNoZUNhbGVuZHJpZXIgPSAoKSA9PiB7XHJcblx0XHRyZXR1cm4geyBfX2h0bWw6IGdpdGUuY2FsZW5kcmllckxpbmsgfTtcclxuXHR9O1xyXG5cdGNvbnN0IGFmZmljaGVWaWRlbyA9ICgpID0+IHtcclxuXHRcdHJldHVybiB7IF9faHRtbDogZ2l0ZS52aWRlb0xpbmsgfTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBbYWN0aXZlSW5kZXgsIHNldEFjdGl2ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IFthbmltYXRpbmcsIHNldEFuaW1hdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdGNvbnN0IG5leHQgPSAoKSA9PiB7XHJcblx0XHRpZiAoYW5pbWF0aW5nKSByZXR1cm47XHJcblx0XHRjb25zdCBuZXh0SW5kZXggPVxyXG5cdFx0XHRhY3RpdmVJbmRleCA9PT0gcGhvdG9zLmxlbmd0aCAtIDEgPyAwIDogYWN0aXZlSW5kZXggKyAxO1xyXG5cdFx0c2V0QWN0aXZlSW5kZXgobmV4dEluZGV4KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBwcmV2aW91cyA9ICgpID0+IHtcclxuXHRcdGlmIChhbmltYXRpbmcpIHJldHVybjtcclxuXHRcdGNvbnN0IG5leHRJbmRleCA9XHJcblx0XHRcdGFjdGl2ZUluZGV4ID09PSAwID8gcGhvdG9zLmxlbmd0aCAtIDEgOiBhY3RpdmVJbmRleCAtIDE7XHJcblx0XHRzZXRBY3RpdmVJbmRleChuZXh0SW5kZXgpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGdvVG9JbmRleCA9IChuZXdJbmRleCkgPT4ge1xyXG5cdFx0aWYgKGFuaW1hdGluZykgcmV0dXJuO1xyXG5cdFx0c2V0QWN0aXZlSW5kZXgobmV3SW5kZXgpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGp1bWJvdHJvbiA9ICgpID0+IChcclxuXHRcdDxzZWN0aW9uPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0XHQ8SnVtYm90cm9uPlxyXG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nZGlzcGxheS0zJz5cclxuXHRcdFx0XHRcdFx0UHLDqXNlbnRhdGlvbiBkdSBnw650ZSB7Z2l0ZS5ub219XHJcblx0XHRcdFx0XHQ8L2gxPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdsZWFkJz57Z2l0ZS5wcmVzR2l0ZVNFT308L3A+XHJcblx0XHRcdFx0XHQ8aHIgY2xhc3NOYW1lPSdteS0yJyAvPlxyXG5cdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdEl0IHVzZXMgdXRpbGl0eSBjbGFzc2VzIGZvciB0eXBvZ3JhcGh5IGFuZCBzcGFjaW5nIHRvXHJcblx0XHRcdFx0XHRcdHNwYWNlIGNvbnRlbnQgb3V0IHdpdGhpbiB0aGUgbGFyZ2VyIGNvbnRhaW5lci5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nbGVhZCc+XHJcblx0XHRcdFx0XHRcdHsvKiA8QnV0dG9uIGNvbG9yPSdwcmltYXJ5Jz5MZWFybiBNb3JlPC9CdXR0b24+ICovfVxyXG5cdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdDwvSnVtYm90cm9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvc2VjdGlvbj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBjYXJvdXNlbCA9IChub20pID0+XHJcblx0XHRwaG90b3MubWFwKChwaG90bykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxDYXJvdXNlbEl0ZW1cclxuXHRcdFx0XHRcdG9uRXhpdGluZz17KCkgPT4gc2V0QW5pbWF0aW5nKHRydWUpfVxyXG5cdFx0XHRcdFx0b25FeGl0ZWQ9eygpID0+IHNldEFuaW1hdGluZyhmYWxzZSl9XHJcblx0XHRcdFx0XHRrZXk9e3Bob3RvLmxvY2F0aW9ufT5cclxuXHRcdFx0XHRcdDxJbWFnZVxyXG5cdFx0XHRcdFx0XHRzcmM9e3Bob3RvLmxvY2F0aW9ufVxyXG5cdFx0XHRcdFx0XHRhbHQ9e3Bob3RvLm5vbX1cclxuXHRcdFx0XHRcdFx0d2lkdGg9ezUwMH1cclxuXHRcdFx0XHRcdFx0aGVpZ2h0PXszNzV9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PENhcm91c2VsQ2FwdGlvblxyXG5cdFx0XHRcdFx0XHRjYXB0aW9uVGV4dD17cGhvdG8udGV4dGVJbWd9XHJcblx0XHRcdFx0XHRcdGNhcHRpb25IZWFkZXI9e3Bob3RvLnRleHRlSW1nfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0Nhcm91c2VsSXRlbT5cclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uRXh0ZXJpZXVyID0gKCkgPT4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdDxoMj5QYXJ0aWUgZXh0w6lyaWV1cjwvaDI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxyXG5cdFx0XHRcdFx0XHQ8Q2Fyb3VzZWxcclxuXHRcdFx0XHRcdFx0XHRhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9XHJcblx0XHRcdFx0XHRcdFx0bmV4dD17bmV4dH1cclxuXHRcdFx0XHRcdFx0XHRwcmV2aW91cz17cHJldmlvdXN9PlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJvdXNlbEluZGljYXRvcnNcclxuXHRcdFx0XHRcdFx0XHRcdGl0ZW1zPXtwaG90b3N9XHJcblx0XHRcdFx0XHRcdFx0XHRhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrSGFuZGxlcj17Z29Ub0luZGV4fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0e2Nhcm91c2VsKCdleHRlcmlldXInKX1cclxuXHRcdFx0XHRcdFx0XHQ8Q2Fyb3VzZWxDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRkaXJlY3Rpb249J3ByZXYnXHJcblx0XHRcdFx0XHRcdFx0XHRkaXJlY3Rpb25UZXh0PSdQcmV2aW91cydcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2tIYW5kbGVyPXtwcmV2aW91c31cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJvdXNlbENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdGRpcmVjdGlvbj0nbmV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdGRpcmVjdGlvblRleHQ9J05leHQnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrSGFuZGxlcj17bmV4dH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L0Nhcm91c2VsPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxyXG5cdFx0XHRcdFx0XHRMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG5cdFx0XHRcdFx0XHROYXR1cyBkZWxlY3R1cyBpcHNhLCBjb3JydXB0aSBtaW51cyB0b3RhbSBub2JpcyBub25cclxuXHRcdFx0XHRcdFx0ZHVjaW11cyBlYXJ1bSwgcG9zc2ltdXMgY29uc2VjdGV0dXIgc2VxdWkgc3VzY2lwaXRcclxuXHRcdFx0XHRcdFx0c29sdXRhIGJlYXRhZSBkZXNlcnVudCBzaW1pbGlxdWUgZWFxdWUgZXN0PyBQb3JybyBpdXN0b1xyXG5cdFx0XHRcdFx0XHR2b2x1cHRhdGVtIGlwc3VtIG9wdGlvIG9iY2FlY2F0aSwgZXN0IHF1YXNpIGNvcnBvcmlzXHJcblx0XHRcdFx0XHRcdHF1aWJ1c2RhbSBhdXRlbSBhbmltaSBhdCB0ZW5ldHVyIG9tbmlzIGV2ZW5pZXQgZWFxdWVcclxuXHRcdFx0XHRcdFx0ZXhlcmNpdGF0aW9uZW0gZG9sb3Jlcy4gUXVvZCwgcmVwcmVoZW5kZXJpdCBjb21tb2RpIVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25JbnRlcmlldXIgPSAoKSA9PiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0PHNlY3Rpb24+XHJcblx0XHRcdFx0PGgyPlBhcnRpZSBpbnTDqXJpZXVyPC9oMj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcblx0XHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcblx0XHRcdFx0XHRcdE9tbmlzIGRvbG9ydW0gcXVhcyBhc3BlcmlvcmVzIGRlc2VydW50IGRlYml0aXMgYWNjdXNhbXVzXHJcblx0XHRcdFx0XHRcdGFtZXQgaXBzYSBkb2xvcmVzIHF1aXNxdWFtIGl1c3RvIHZlbmlhbSBvZmZpY2lpcyB2aXRhZVxyXG5cdFx0XHRcdFx0XHR0ZW1wb3JlIHJlcHVkaWFuZGFlIHF1YWVyYXQgY3VtcXVlIGZhY2lsaXMsIGFiIHNhZXBlLFxyXG5cdFx0XHRcdFx0XHRldmVuaWV0IHZvbHVwdGFzIG9kaXQgcGVyc3BpY2lhdGlzIGFsaWFzLiBTdW50LCBiZWF0YWUhXHJcblx0XHRcdFx0XHRcdE9mZmljaWlzIHZvbHVwdGFzLCBhZGlwaXNjaSByZXB1ZGlhbmRhZSBxdWFlcmF0LCBhdHF1ZVxyXG5cdFx0XHRcdFx0XHRjb25zZXF1dW50dXIgZHVjaW11cywgYWNjdXNhbnRpdW0gdmVsaXQgc2ludCBldW1cclxuXHRcdFx0XHRcdFx0ZG9sb3Jlcy5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0PENhcm91c2VsXHJcblx0XHRcdFx0XHRcdFx0YWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fVxyXG5cdFx0XHRcdFx0XHRcdG5leHQ9e25leHR9XHJcblx0XHRcdFx0XHRcdFx0cHJldmlvdXM9e3ByZXZpb3VzfT5cclxuXHRcdFx0XHRcdFx0XHQ8Q2Fyb3VzZWxJbmRpY2F0b3JzXHJcblx0XHRcdFx0XHRcdFx0XHRpdGVtcz17cGhvdG9zfVxyXG5cdFx0XHRcdFx0XHRcdFx0YWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGlja0hhbmRsZXI9e2dvVG9JbmRleH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdHtjYXJvdXNlbCgnaW50ZXJpZXVyJyl9XHJcblx0XHRcdFx0XHRcdFx0PENhcm91c2VsQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9uPSdwcmV2J1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9uVGV4dD0nUHJldmlvdXMnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrSGFuZGxlcj17cHJldmlvdXN9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8Q2Fyb3VzZWxDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRkaXJlY3Rpb249J25leHQnXHJcblx0XHRcdFx0XHRcdFx0XHRkaXJlY3Rpb25UZXh0PSdOZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGlja0hhbmRsZXI9e25leHR9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9DYXJvdXNlbD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uUGlzY2luZSA9ICgpID0+IChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0XHQ8aDI+UGFydGllIHBpc2NpbmU8L2gyPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0PENhcm91c2VsXHJcblx0XHRcdFx0XHRcdFx0YWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fVxyXG5cdFx0XHRcdFx0XHRcdG5leHQ9e25leHR9XHJcblx0XHRcdFx0XHRcdFx0cHJldmlvdXM9e3ByZXZpb3VzfT5cclxuXHRcdFx0XHRcdFx0XHQ8Q2Fyb3VzZWxJbmRpY2F0b3JzXHJcblx0XHRcdFx0XHRcdFx0XHRpdGVtcz17cGhvdG9zfVxyXG5cdFx0XHRcdFx0XHRcdFx0YWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGlja0hhbmRsZXI9e2dvVG9JbmRleH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdHtjYXJvdXNlbCgncGlzY2luZScpfVxyXG5cdFx0XHRcdFx0XHRcdDxDYXJvdXNlbENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdGRpcmVjdGlvbj0ncHJldidcclxuXHRcdFx0XHRcdFx0XHRcdGRpcmVjdGlvblRleHQ9J1ByZXZpb3VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGlja0hhbmRsZXI9e3ByZXZpb3VzfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PENhcm91c2VsQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9uPSduZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9uVGV4dD0nTmV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2tIYW5kbGVyPXtuZXh0fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvQ2Fyb3VzZWw+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcblx0XHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcblx0XHRcdFx0XHRcdENvcnBvcmlzIGRlbGVjdHVzIHZpdGFlIG51bXF1YW0gb3B0aW8sIGEgZGlnbmlzc2ltb3MsXHJcblx0XHRcdFx0XHRcdGNvbW1vZGkgYXQgZXVtLCBwbGFjZWF0IG9iY2FlY2F0aSBhbWV0IGl1cmUgaXBzYSBmdWdhXHJcblx0XHRcdFx0XHRcdGRvbG9yIGZhY2lsaXMgc2ludD8gVm9sdXB0YXRlbSBjb25zZXF1YXR1ciB2ZXJvXHJcblx0XHRcdFx0XHRcdHZvbHVwdGF0ZXMgdml0YWUgcmVjdXNhbmRhZSB2ZWwsIGFiIHF1aSBtb2xlc3RpYWVcclxuXHRcdFx0XHRcdFx0cGFyaWF0dXIgcXVpcywgZGViaXRpcyBhdXQgaW1wZWRpdCBjb21tb2RpIG51bGxhIGZ1Z2l0XHJcblx0XHRcdFx0XHRcdGluY2lkdW50IGJsYW5kaXRpaXMgaGljIGEgY3VwaWRpdGF0ZS5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uUmV2aWV3ID0gKCkgPT4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdDxoMj5DZSBxdWUgbm9zIGNsaWVudHMgZGlzZW50IGRlIGNlIGfDrnRlPC9oMj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdDxwPkxpc3RlIGRlcyByZXZpZXdzPC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uVmlkZW9Db250YWN0ID0gKCkgPT4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0PGgyPlRvdXIgZHUgZ8OudGUgZW4gdmlkw6lvPC9oMj5cclxuXHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nbXQtNSdcclxuXHRcdFx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17YWZmaWNoZVZpZGVvKCl9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcblx0XHRcdFx0XHRcdDxoMj5FY3JpdmV6LW5vdXMgITwvaDI+XHJcblx0XHRcdFx0XHRcdDxDb250YWN0Rm9ybSAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb25DYWxlbmRyaWVyID0gKCkgPT4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciB0ZXh0LWNlbnRlcic+XHJcblx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdDxoMj5DYWxlbmRyaWVyIGRlcyBkaXNwb25pYmlsaXTDqXM8L2gyPlxyXG5cdFx0XHRcdDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2FmZmljaGVDYWxlbmRyaWVyKCl9IC8+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IGhlYWQgPSAoKSA9PiAoXHJcblx0XHQ8SGVhZD5cclxuXHRcdFx0PHRpdGxlPlxyXG5cdFx0XHRcdHtBUFBfTkFNRX0gfCB7Z2l0ZS5ub219eycgJ31cclxuXHRcdFx0PC90aXRsZT5cclxuXHRcdFx0PG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2dpdGUubWRlc2N9IC8+XHJcblx0XHRcdDxsaW5rIHJlbD0nY2Fub25pY2FsJyBocmVmPXtgJHtET01BSU59L2Jsb2dzLyR7cXVlcnkuc2x1Z31gfSAvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6dGl0bGUnIGNvbnRlbnQ9e2Ake2dpdGUubm9tfSB8ICR7QVBQX05BTUV9YH0gLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOmRlc2NyaXB0aW9uJyBjb250ZW50PXtnaXRlLm1kZXNjfSAvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6dHlwZScgY29udGVudD0nd2Vic2l0ZScgLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnVybCcgY29udGVudD17YCR7RE9NQUlOfS9ibG9ncy8ke3F1ZXJ5LnNsdWd9YH0gLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnNpdGVfbmFtZScgY29udGVudD17YCR7QVBQX05BTUV9YH0gLz5cclxuXHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzpzaXRlX25hbWUnIGNvbnRlbnQ9e0FQUF9OQU1FfSAvPlxyXG5cclxuXHRcdFx0PG1ldGFcclxuXHRcdFx0XHRwcm9wZXJ0eT0nb2c6aW1hZ2UnXHJcblx0XHRcdFx0Y29udGVudD17YCR7QVBJfS9ibG9nL3Bob3RvLyR7Z2l0ZS5zbHVnfWB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxtZXRhXHJcblx0XHRcdFx0cHJvcGVydHk9J29nOmltYWdlOnNlY3VyZV91cmwnXHJcblx0XHRcdFx0Y29udGVudD17YCR7QVBJfS9naXRlL3Bob3RvLyR7Z2l0ZS5zbHVnfWB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzppbWFnZTp0eXBlJyBjb250ZW50PSdpbWFnZS9qcGcnIC8+XHJcblx0XHRcdHsvKiA8bWV0YSBwcm9wZXJ0eT0nZmI6YXBwX2lkJyBjb250ZW50PXtgJHtGQl9BUFBfSUR9YH0gLz4gKi99XHJcblx0XHQ8L0hlYWQ+XHJcblx0KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHtoZWFkKCl9XHJcblx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdFx0PGgyPkluZm9zIGR1IGdpdGU8L2gyPlxyXG5cdFx0XHRcdHtKU09OLnN0cmluZ2lmeShnaXRlKX1cclxuXHRcdFx0XHR7anVtYm90cm9uKCl9XHJcblx0XHRcdFx0e3NlY3Rpb25FeHRlcmlldXIoKX1cclxuXHRcdFx0XHR7c2VjdGlvbkludGVyaWV1cigpfVxyXG5cdFx0XHRcdHtzZWN0aW9uUGlzY2luZSgpfVxyXG5cdFx0XHRcdHtzZWN0aW9uUmV2aWV3KCl9XHJcblx0XHRcdFx0e3NlY3Rpb25WaWRlb0NvbnRhY3QoKX1cclxuXHRcdFx0XHR7c2VjdGlvbkNhbGVuZHJpZXIoKX1cclxuXHRcdFx0PC9MYXlvdXQ+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuR2l0ZS5nZXRJbml0aWFsUHJvcHMgPSAoeyBxdWVyeSB9KSA9PiB7XHJcblx0Ly8gY29uc29sZS5sb2cocXVlcnkpO1xyXG5cdHJldHVybiBsaXN0R2l0ZURldGFpbHMocXVlcnkuc2x1ZykudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4geyBnaXRlOiBkYXRhLCBxdWVyeSB9O1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2l0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==