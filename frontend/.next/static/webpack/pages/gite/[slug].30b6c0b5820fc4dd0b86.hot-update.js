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
            lineNumber: 65,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "lead",
            children: gite.presGiteSEO
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
            className: "my-2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "It uses utility classes for typography and spacing to space content out within the larger container."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "lead"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
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
          height: 400
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselCaption"], {
          captionText: photo.texteImg,
          captionHeader: photo.texteImg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 6
        }, _this)]
      }, photo.location, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 5
      }, _this);
    });
  };

  var sectionExterieur = function sectionExterieur() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
                lineNumber: 112,
                columnNumber: 8
              }, _this), carousel('exterieur'), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselControl"], {
                direction: "prev",
                directionText: "Previous",
                onClickHandler: previous
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 8
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselControl"], {
                direction: "next",
                directionText: "Next",
                onClickHandler: next
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 8
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-6",
            children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus delectus ipsa, corrupti minus totam nobis non ducimus earum, possimus consectetur sequi suscipit soluta beatae deserunt similique eaque est? Porro iusto voluptatem ipsum optio obcaecati, est quasi corporis quibusdam autem animi at tenetur omnis eveniet eaque exercitationem dolores. Quod, reprehenderit commodi!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 3
    }, _this);
  };

  var sectionInterieur = function sectionInterieur() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-6",
            children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorum quas asperiores deserunt debitis accusamus amet ipsa dolores quisquam iusto veniam officiis vitae tempore repudiandae quaerat cumque facilis, ab saepe, eveniet voluptas odit perspiciatis alias. Sunt, beatae! Officiis voluptas, adipisci repudiandae quaerat, atque consequuntur ducimus, accusantium velit sint eum dolores."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
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
                lineNumber: 163,
                columnNumber: 8
              }, _this), carousel('interieur'), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselControl"], {
                direction: "prev",
                directionText: "Previous",
                onClickHandler: previous
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 8
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselControl"], {
                direction: "next",
                directionText: "Next",
                onClickHandler: next
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 8
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 3
    }, _this);
  };

  var sectionPiscine = function sectionPiscine() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
                lineNumber: 195,
                columnNumber: 8
              }, _this), carousel('piscine'), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselControl"], {
                direction: "prev",
                directionText: "Previous",
                onClickHandler: previous
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 8
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CarouselControl"], {
                direction: "next",
                directionText: "Next",
                onClickHandler: next
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 8
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 7
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 6
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-6",
            children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis delectus vitae numquam optio, a dignissimos, commodi at eum, placeat obcaecati amet iure ipsa fuga dolor facilis sint? Voluptatem consequatur vero voluptates vitae recusandae vel, ab qui molestiae pariatur quis, debitis aut impedit commodi nulla fugit incidunt blanditiis hic a cupiditate."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 6
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 3
    }, _this);
  };

  var head = function head() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: [_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"], " | ", gite.nom, ' ']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: gite.mdesc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "canonical",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"], "/blogs/").concat(query.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: "".concat(gite.nom, " | ").concat(_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: gite.mdesc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:type",
        content: "website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:url",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"], "/blogs/").concat(query.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:site_name",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:site_name",
        content: _config__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/blog/photo/").concat(gite.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image:secure_url",
        content: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/gite/photo/").concat(gite.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image:type",
        content: "image/jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 4
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 3
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [head(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Infos du gite"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 5
      }, _this), JSON.stringify(gite), jumbotron(), sectionExterieur(), sectionInterieur(), sectionPiscine()]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 258,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2l0ZS9bc2x1Z10uanMiXSwibmFtZXMiOlsiR2l0ZSIsImdpdGUiLCJxdWVyeSIsInBob3RvcyIsImxvY2F0aW9uIiwibm9tIiwidGV4dGVJbWciLCJ1c2VTdGF0ZSIsImFjdGl2ZUluZGV4Iiwic2V0QWN0aXZlSW5kZXgiLCJhbmltYXRpbmciLCJzZXRBbmltYXRpbmciLCJuZXh0IiwibmV4dEluZGV4IiwibGVuZ3RoIiwicHJldmlvdXMiLCJnb1RvSW5kZXgiLCJuZXdJbmRleCIsImp1bWJvdHJvbiIsInByZXNHaXRlU0VPIiwiY2Fyb3VzZWwiLCJtYXAiLCJwaG90byIsInNlY3Rpb25FeHRlcmlldXIiLCJzZWN0aW9uSW50ZXJpZXVyIiwic2VjdGlvblBpc2NpbmUiLCJoZWFkIiwiQVBQX05BTUUiLCJtZGVzYyIsIkRPTUFJTiIsInNsdWciLCJBUEkiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0SW5pdGlhbFByb3BzIiwibGlzdEdpdGVEZXRhaWxzIiwidGhlbiIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFxQjtBQUFBOztBQUFBLE1BQWxCQyxJQUFrQixRQUFsQkEsSUFBa0I7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDakMsTUFBTUMsTUFBTSxHQUFHLENBQ2Q7QUFDQ0MsWUFBUSxFQUNQLDREQUZGO0FBR0NDLE9BQUcsRUFBRSxjQUhOO0FBSUNDLFlBQVEsRUFBRTtBQUpYLEdBRGMsRUFPZDtBQUNDRixZQUFRLEVBQ1AsNERBRkY7QUFHQ0MsT0FBRyxFQUFFLGNBSE47QUFJQ0MsWUFBUSxFQUFFO0FBSlgsR0FQYyxFQWFkO0FBQ0NGLFlBQVEsRUFDUCw0REFGRjtBQUdDQyxPQUFH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LGFBRFk7QUFBQSxHQUFiOztBQTRCQSxzQkFDQztBQUFBLGVBQ0VKLElBQUksRUFETixlQUVDLHFFQUFDLGlFQUFEO0FBQUEsOEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxFQUVFTSxJQUFJLENBQUNDLFNBQUwsQ0FBZWhDLElBQWYsQ0FGRixFQUdFaUIsU0FBUyxFQUhYLEVBSUVLLGdCQUFnQixFQUpsQixFQUtFQyxnQkFBZ0IsRUFMbEIsRUFNRUMsY0FBYyxFQU5oQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRDtBQUFBLGtCQUREO0FBYUEsQ0EzUEQ7O0dBQU16QixJOztLQUFBQSxJOztBQTZQTkEsSUFBSSxDQUFDa0MsZUFBTCxHQUF1QixpQkFBZTtBQUFBLE1BQVpoQyxLQUFZLFNBQVpBLEtBQVk7QUFDckM7QUFDQSxTQUFPaUMsNEVBQWUsQ0FBQ2pDLEtBQUssQ0FBQzRCLElBQVAsQ0FBZixDQUE0Qk0sSUFBNUIsQ0FBaUMsVUFBQ0MsSUFBRCxFQUFVO0FBQ2pELFFBQUlBLElBQUksQ0FBQ0MsS0FBVCxFQUFnQjtBQUNmQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBSSxDQUFDQyxLQUFqQjtBQUNBLEtBRkQsTUFFTztBQUNOLGFBQU87QUFBRXJDLFlBQUksRUFBRW9DLElBQVI7QUFBY25DLGFBQUssRUFBTEE7QUFBZCxPQUFQO0FBQ0E7QUFDRCxHQU5NLENBQVA7QUFPQSxDQVREOztBQVdlRixtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9naXRlL1tzbHVnXS4zMGI2YzBiNTgyMGZjNGRkMGI4Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQnO1xyXG5pbXBvcnQgeyBBUEksIERPTUFJTiwgQVBQX05BTUUgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQgeyBsaXN0R2l0ZURldGFpbHMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQge1xyXG5cdEp1bWJvdHJvbixcclxuXHRDYXJvdXNlbCxcclxuXHRDYXJvdXNlbEl0ZW0sXHJcblx0Q2Fyb3VzZWxDb250cm9sLFxyXG5cdENhcm91c2VsSW5kaWNhdG9ycyxcclxuXHRDYXJvdXNlbENhcHRpb24sXHJcbn0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgR2l0ZSA9ICh7IGdpdGUsIHF1ZXJ5IH0pID0+IHtcclxuXHRjb25zdCBwaG90b3MgPSBbXHJcblx0XHR7XHJcblx0XHRcdGxvY2F0aW9uOlxyXG5cdFx0XHRcdCdodHRwczovL2dpdGVzLXdhby5zMy5hbWF6b25hd3MuY29tL09wdmNVSmkxRUgtUDEwMTAxODYuanBnJyxcclxuXHRcdFx0bm9tOiAnUDEwMTAxODYuanBnJyxcclxuXHRcdFx0dGV4dGVJbWc6ICdsb3JlbSBsb3JlbSBsb3JlbScsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRsb2NhdGlvbjpcclxuXHRcdFx0XHQnaHR0cHM6Ly9naXRlcy13YW8uczMuYW1hem9uYXdzLmNvbS9OVUtLVVV0VURtLVAxMDkwNzE0LmpwZycsXHJcblx0XHRcdG5vbTogJ1AxMDkwNzE0LmpwZycsXHJcblx0XHRcdHRleHRlSW1nOiAnbG9yZW0gbG9yZW0gbG9yZW0nLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bG9jYXRpb246XHJcblx0XHRcdFx0J2h0dHBzOi8vZ2l0ZXMtd2FvLnMzLmFtYXpvbmF3cy5jb20vaWJSR3ZvemdZdS1QMTA5MDcxNi5qcGcnLFxyXG5cdFx0XHRub206ICdQMTA5MDcxNi5qcGcnLFxyXG5cdFx0XHR0ZXh0ZUltZzogJ2xvcmVtIGxvcmVtIGxvcmVtJyxcclxuXHRcdH0sXHJcblx0XTtcclxuXHJcblx0Y29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuXHRjb25zdCBbYW5pbWF0aW5nLCBzZXRBbmltYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHRjb25zdCBuZXh0ID0gKCkgPT4ge1xyXG5cdFx0aWYgKGFuaW1hdGluZykgcmV0dXJuO1xyXG5cdFx0Y29uc3QgbmV4dEluZGV4ID1cclxuXHRcdFx0YWN0aXZlSW5kZXggPT09IHBob3Rvcy5sZW5ndGggLSAxID8gMCA6IGFjdGl2ZUluZGV4ICsgMTtcclxuXHRcdHNldEFjdGl2ZUluZGV4KG5leHRJbmRleCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgcHJldmlvdXMgPSAoKSA9PiB7XHJcblx0XHRpZiAoYW5pbWF0aW5nKSByZXR1cm47XHJcblx0XHRjb25zdCBuZXh0SW5kZXggPVxyXG5cdFx0XHRhY3RpdmVJbmRleCA9PT0gMCA/IHBob3Rvcy5sZW5ndGggLSAxIDogYWN0aXZlSW5kZXggLSAxO1xyXG5cdFx0c2V0QWN0aXZlSW5kZXgobmV4dEluZGV4KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBnb1RvSW5kZXggPSAobmV3SW5kZXgpID0+IHtcclxuXHRcdGlmIChhbmltYXRpbmcpIHJldHVybjtcclxuXHRcdHNldEFjdGl2ZUluZGV4KG5ld0luZGV4KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBqdW1ib3Ryb24gPSAoKSA9PiAoXHJcblx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblx0XHRcdFx0PEp1bWJvdHJvbj5cclxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9J2Rpc3BsYXktMyc+XHJcblx0XHRcdFx0XHRcdFByw6lzZW50YXRpb24gZHUgZ8OudGUge2dpdGUubm9tfVxyXG5cdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nbGVhZCc+e2dpdGUucHJlc0dpdGVTRU99PC9wPlxyXG5cdFx0XHRcdFx0PGhyIGNsYXNzTmFtZT0nbXktMicgLz5cclxuXHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRJdCB1c2VzIHV0aWxpdHkgY2xhc3NlcyBmb3IgdHlwb2dyYXBoeSBhbmQgc3BhY2luZyB0b1xyXG5cdFx0XHRcdFx0XHRzcGFjZSBjb250ZW50IG91dCB3aXRoaW4gdGhlIGxhcmdlciBjb250YWluZXIuXHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2xlYWQnPlxyXG5cdFx0XHRcdFx0XHR7LyogPEJ1dHRvbiBjb2xvcj0ncHJpbWFyeSc+TGVhcm4gTW9yZTwvQnV0dG9uPiAqL31cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHQ8L0p1bWJvdHJvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L3NlY3Rpb24+XHJcblx0KTtcclxuXHJcblx0Y29uc3QgY2Fyb3VzZWwgPSAobm9tKSA9PlxyXG5cdFx0cGhvdG9zLm1hcCgocGhvdG8pID0+IHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8Q2Fyb3VzZWxJdGVtXHJcblx0XHRcdFx0XHRvbkV4aXRpbmc9eygpID0+IHNldEFuaW1hdGluZyh0cnVlKX1cclxuXHRcdFx0XHRcdG9uRXhpdGVkPXsoKSA9PiBzZXRBbmltYXRpbmcoZmFsc2UpfVxyXG5cdFx0XHRcdFx0a2V5PXtwaG90by5sb2NhdGlvbn0+XHJcblx0XHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdFx0c3JjPXtwaG90by5sb2NhdGlvbn1cclxuXHRcdFx0XHRcdFx0YWx0PXtwaG90by5ub219XHJcblx0XHRcdFx0XHRcdHdpZHRoPXs1MDB9XHJcblx0XHRcdFx0XHRcdGhlaWdodD17NDAwfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxDYXJvdXNlbENhcHRpb25cclxuXHRcdFx0XHRcdFx0Y2FwdGlvblRleHQ9e3Bob3RvLnRleHRlSW1nfVxyXG5cdFx0XHRcdFx0XHRjYXB0aW9uSGVhZGVyPXtwaG90by50ZXh0ZUltZ31cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9DYXJvdXNlbEl0ZW0+XHJcblx0XHRcdCk7XHJcblx0XHR9KTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvbkV4dGVyaWV1ciA9ICgpID0+IChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcblx0XHRcdFx0XHRcdDxDYXJvdXNlbFxyXG5cdFx0XHRcdFx0XHRcdGFjdGl2ZUluZGV4PXthY3RpdmVJbmRleH1cclxuXHRcdFx0XHRcdFx0XHRuZXh0PXtuZXh0fVxyXG5cdFx0XHRcdFx0XHRcdHByZXZpb3VzPXtwcmV2aW91c30+XHJcblx0XHRcdFx0XHRcdFx0PENhcm91c2VsSW5kaWNhdG9yc1xyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbXM9e3Bob3Rvc31cclxuXHRcdFx0XHRcdFx0XHRcdGFjdGl2ZUluZGV4PXthY3RpdmVJbmRleH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2tIYW5kbGVyPXtnb1RvSW5kZXh9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHR7Y2Fyb3VzZWwoJ2V4dGVyaWV1cicpfVxyXG5cdFx0XHRcdFx0XHRcdDxDYXJvdXNlbENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdGRpcmVjdGlvbj0ncHJldidcclxuXHRcdFx0XHRcdFx0XHRcdGRpcmVjdGlvblRleHQ9J1ByZXZpb3VzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGlja0hhbmRsZXI9e3ByZXZpb3VzfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PENhcm91c2VsQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9uPSduZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9uVGV4dD0nTmV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2tIYW5kbGVyPXtuZXh0fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvQ2Fyb3VzZWw+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcblx0XHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcblx0XHRcdFx0XHRcdE5hdHVzIGRlbGVjdHVzIGlwc2EsIGNvcnJ1cHRpIG1pbnVzIHRvdGFtIG5vYmlzIG5vblxyXG5cdFx0XHRcdFx0XHRkdWNpbXVzIGVhcnVtLCBwb3NzaW11cyBjb25zZWN0ZXR1ciBzZXF1aSBzdXNjaXBpdFxyXG5cdFx0XHRcdFx0XHRzb2x1dGEgYmVhdGFlIGRlc2VydW50IHNpbWlsaXF1ZSBlYXF1ZSBlc3Q/IFBvcnJvIGl1c3RvXHJcblx0XHRcdFx0XHRcdHZvbHVwdGF0ZW0gaXBzdW0gb3B0aW8gb2JjYWVjYXRpLCBlc3QgcXVhc2kgY29ycG9yaXNcclxuXHRcdFx0XHRcdFx0cXVpYnVzZGFtIGF1dGVtIGFuaW1pIGF0IHRlbmV0dXIgb21uaXMgZXZlbmlldCBlYXF1ZVxyXG5cdFx0XHRcdFx0XHRleGVyY2l0YXRpb25lbSBkb2xvcmVzLiBRdW9kLCByZXByZWhlbmRlcml0IGNvbW1vZGkhXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvbkludGVyaWV1ciA9ICgpID0+IChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcblx0XHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcblx0XHRcdFx0XHRcdE9tbmlzIGRvbG9ydW0gcXVhcyBhc3BlcmlvcmVzIGRlc2VydW50IGRlYml0aXMgYWNjdXNhbXVzXHJcblx0XHRcdFx0XHRcdGFtZXQgaXBzYSBkb2xvcmVzIHF1aXNxdWFtIGl1c3RvIHZlbmlhbSBvZmZpY2lpcyB2aXRhZVxyXG5cdFx0XHRcdFx0XHR0ZW1wb3JlIHJlcHVkaWFuZGFlIHF1YWVyYXQgY3VtcXVlIGZhY2lsaXMsIGFiIHNhZXBlLFxyXG5cdFx0XHRcdFx0XHRldmVuaWV0IHZvbHVwdGFzIG9kaXQgcGVyc3BpY2lhdGlzIGFsaWFzLiBTdW50LCBiZWF0YWUhXHJcblx0XHRcdFx0XHRcdE9mZmljaWlzIHZvbHVwdGFzLCBhZGlwaXNjaSByZXB1ZGlhbmRhZSBxdWFlcmF0LCBhdHF1ZVxyXG5cdFx0XHRcdFx0XHRjb25zZXF1dW50dXIgZHVjaW11cywgYWNjdXNhbnRpdW0gdmVsaXQgc2ludCBldW1cclxuXHRcdFx0XHRcdFx0ZG9sb3Jlcy5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0PENhcm91c2VsXHJcblx0XHRcdFx0XHRcdFx0YWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fVxyXG5cdFx0XHRcdFx0XHRcdG5leHQ9e25leHR9XHJcblx0XHRcdFx0XHRcdFx0cHJldmlvdXM9e3ByZXZpb3VzfT5cclxuXHRcdFx0XHRcdFx0XHQ8Q2Fyb3VzZWxJbmRpY2F0b3JzXHJcblx0XHRcdFx0XHRcdFx0XHRpdGVtcz17cGhvdG9zfVxyXG5cdFx0XHRcdFx0XHRcdFx0YWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGlja0hhbmRsZXI9e2dvVG9JbmRleH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdHtjYXJvdXNlbCgnaW50ZXJpZXVyJyl9XHJcblx0XHRcdFx0XHRcdFx0PENhcm91c2VsQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9uPSdwcmV2J1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9uVGV4dD0nUHJldmlvdXMnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrSGFuZGxlcj17cHJldmlvdXN9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8Q2Fyb3VzZWxDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRkaXJlY3Rpb249J25leHQnXHJcblx0XHRcdFx0XHRcdFx0XHRkaXJlY3Rpb25UZXh0PSdOZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGlja0hhbmRsZXI9e25leHR9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9DYXJvdXNlbD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uUGlzY2luZSA9ICgpID0+IChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcblx0XHRcdFx0XHRcdDxDYXJvdXNlbFxyXG5cdFx0XHRcdFx0XHRcdGFjdGl2ZUluZGV4PXthY3RpdmVJbmRleH1cclxuXHRcdFx0XHRcdFx0XHRuZXh0PXtuZXh0fVxyXG5cdFx0XHRcdFx0XHRcdHByZXZpb3VzPXtwcmV2aW91c30+XHJcblx0XHRcdFx0XHRcdFx0PENhcm91c2VsSW5kaWNhdG9yc1xyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbXM9e3Bob3Rvc31cclxuXHRcdFx0XHRcdFx0XHRcdGFjdGl2ZUluZGV4PXthY3RpdmVJbmRleH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2tIYW5kbGVyPXtnb1RvSW5kZXh9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHR7Y2Fyb3VzZWwoJ3Bpc2NpbmUnKX1cclxuXHRcdFx0XHRcdFx0XHQ8Q2Fyb3VzZWxDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRkaXJlY3Rpb249J3ByZXYnXHJcblx0XHRcdFx0XHRcdFx0XHRkaXJlY3Rpb25UZXh0PSdQcmV2aW91cydcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2tIYW5kbGVyPXtwcmV2aW91c31cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJvdXNlbENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdGRpcmVjdGlvbj0nbmV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdGRpcmVjdGlvblRleHQ9J05leHQnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrSGFuZGxlcj17bmV4dH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L0Nhcm91c2VsPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxyXG5cdFx0XHRcdFx0XHRMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG5cdFx0XHRcdFx0XHRDb3Jwb3JpcyBkZWxlY3R1cyB2aXRhZSBudW1xdWFtIG9wdGlvLCBhIGRpZ25pc3NpbW9zLFxyXG5cdFx0XHRcdFx0XHRjb21tb2RpIGF0IGV1bSwgcGxhY2VhdCBvYmNhZWNhdGkgYW1ldCBpdXJlIGlwc2EgZnVnYVxyXG5cdFx0XHRcdFx0XHRkb2xvciBmYWNpbGlzIHNpbnQ/IFZvbHVwdGF0ZW0gY29uc2VxdWF0dXIgdmVyb1xyXG5cdFx0XHRcdFx0XHR2b2x1cHRhdGVzIHZpdGFlIHJlY3VzYW5kYWUgdmVsLCBhYiBxdWkgbW9sZXN0aWFlXHJcblx0XHRcdFx0XHRcdHBhcmlhdHVyIHF1aXMsIGRlYml0aXMgYXV0IGltcGVkaXQgY29tbW9kaSBudWxsYSBmdWdpdFxyXG5cdFx0XHRcdFx0XHRpbmNpZHVudCBibGFuZGl0aWlzIGhpYyBhIGN1cGlkaXRhdGUuXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxuXHJcblx0Y29uc3QgaGVhZCA9ICgpID0+IChcclxuXHRcdDxIZWFkPlxyXG5cdFx0XHQ8dGl0bGU+XHJcblx0XHRcdFx0e0FQUF9OQU1FfSB8IHtnaXRlLm5vbX17JyAnfVxyXG5cdFx0XHQ8L3RpdGxlPlxyXG5cdFx0XHQ8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD17Z2l0ZS5tZGVzY30gLz5cclxuXHRcdFx0PGxpbmsgcmVsPSdjYW5vbmljYWwnIGhyZWY9e2Ake0RPTUFJTn0vYmxvZ3MvJHtxdWVyeS5zbHVnfWB9IC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzp0aXRsZScgY29udGVudD17YCR7Z2l0ZS5ub219IHwgJHtBUFBfTkFNRX1gfSAvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6ZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2dpdGUubWRlc2N9IC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzp0eXBlJyBjb250ZW50PSd3ZWJzaXRlJyAvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6dXJsJyBjb250ZW50PXtgJHtET01BSU59L2Jsb2dzLyR7cXVlcnkuc2x1Z31gfSAvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6c2l0ZV9uYW1lJyBjb250ZW50PXtgJHtBUFBfTkFNRX1gfSAvPlxyXG5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnNpdGVfbmFtZScgY29udGVudD17QVBQX05BTUV9IC8+XHJcblxyXG5cdFx0XHQ8bWV0YVxyXG5cdFx0XHRcdHByb3BlcnR5PSdvZzppbWFnZSdcclxuXHRcdFx0XHRjb250ZW50PXtgJHtBUEl9L2Jsb2cvcGhvdG8vJHtnaXRlLnNsdWd9YH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PG1ldGFcclxuXHRcdFx0XHRwcm9wZXJ0eT0nb2c6aW1hZ2U6c2VjdXJlX3VybCdcclxuXHRcdFx0XHRjb250ZW50PXtgJHtBUEl9L2dpdGUvcGhvdG8vJHtnaXRlLnNsdWd9YH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOmltYWdlOnR5cGUnIGNvbnRlbnQ9J2ltYWdlL2pwZycgLz5cclxuXHRcdFx0ey8qIDxtZXRhIHByb3BlcnR5PSdmYjphcHBfaWQnIGNvbnRlbnQ9e2Ake0ZCX0FQUF9JRH1gfSAvPiAqL31cclxuXHRcdDwvSGVhZD5cclxuXHQpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e2hlYWQoKX1cclxuXHRcdFx0PExheW91dD5cclxuXHRcdFx0XHQ8aDI+SW5mb3MgZHUgZ2l0ZTwvaDI+XHJcblx0XHRcdFx0e0pTT04uc3RyaW5naWZ5KGdpdGUpfVxyXG5cdFx0XHRcdHtqdW1ib3Ryb24oKX1cclxuXHRcdFx0XHR7c2VjdGlvbkV4dGVyaWV1cigpfVxyXG5cdFx0XHRcdHtzZWN0aW9uSW50ZXJpZXVyKCl9XHJcblx0XHRcdFx0e3NlY3Rpb25QaXNjaW5lKCl9XHJcblx0XHRcdDwvTGF5b3V0PlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbkdpdGUuZ2V0SW5pdGlhbFByb3BzID0gKHsgcXVlcnkgfSkgPT4ge1xyXG5cdC8vIGNvbnNvbGUubG9nKHF1ZXJ5KTtcclxuXHRyZXR1cm4gbGlzdEdpdGVEZXRhaWxzKHF1ZXJ5LnNsdWcpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHsgZ2l0ZTogZGF0YSwgcXVlcnkgfTtcclxuXHRcdH1cclxuXHR9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdpdGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=