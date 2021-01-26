webpackHotUpdate_N_E("pages/admin/gestionPages",{

/***/ "./components/admin/ListPages.js":
/*!***************************************!*\
  !*** ./components/admin/ListPages.js ***!
  \***************************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\ListPages.js",
    _this = undefined,
    _s = $RefreshSig$();







var ListPages = function ListPages() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      gites = _useState[0],
      setGites = _useState[1];

  var listerLesGites = function listerLesGites() {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_5__["listeDesGites"])().then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        console.log('on est ok');
        setGites.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(gites).concat([data]));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    listerLesGites();
  }, []);

  var deleteConfirm = function deleteConfirm(slug) {
    var answer = window.confirm('Cette opération est irréversible, Etes-vous sur de vouloir supprimer cet article ?');

    if (answer) {
      // deleteGite(slug);
      console.log('Suppression');
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Table"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("thead", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: "Nom de la page"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: "Menu"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            colSpan: "2",
            children: "Actions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tbody", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
          className: "mt-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: "Alentours"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: "Divers"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
              href: "/admin/crud/gite/".concat(gite.slug),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                  "class": "fas fa-pencil-ruler",
                  style: {
                    color: 'orange'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
              onClick: function onClick() {
                return deleteConfirm(gite.slug);
              },
              "class": "fas fa-trash-alt",
              style: {
                color: 'red',
                cursor: 'pointer'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
          className: "mt-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: "F.A.Q."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: "Divers"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
              href: "/admin/crud/gite/".concat(gite.slug),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                  "class": "fas fa-pencil-ruler",
                  style: {
                    color: 'orange'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
              onClick: function onClick() {
                return deleteConfirm(gite.slug);
              },
              "class": "fas fa-trash-alt",
              style: {
                color: 'red',
                cursor: 'pointer'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
          className: "mt-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: "Restauration"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: "Partenaires"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
              href: "/admin/crud/gite/".concat(gite.slug),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                  "class": "fas fa-pencil-ruler",
                  style: {
                    color: 'orange'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
              onClick: function onClick() {
                return deleteConfirm(gite.slug);
              },
              "class": "fas fa-trash-alt",
              style: {
                color: 'red',
                cursor: 'pointer'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
          className: "mt-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: "Terroir"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: "Partenaires"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
              href: "/admin/crud/gite/".concat(gite.slug),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                  "class": "fas fa-pencil-ruler",
                  style: {
                    color: 'orange'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
              onClick: function onClick() {
                return deleteConfirm(gite.slug);
              },
              "class": "fas fa-trash-alt",
              style: {
                color: 'red',
                cursor: 'pointer'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
          className: "mt-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: "Adresses utiles"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: "Partenaires"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
              href: "/admin/crud/gite/".concat(gite.slug),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                  "class": "fas fa-pencil-ruler",
                  style: {
                    color: 'orange'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
              onClick: function onClick() {
                return deleteConfirm(gite.slug);
              },
              "class": "fas fa-trash-alt",
              style: {
                color: 'red',
                cursor: 'pointer'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
          className: "mt-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: "Festi'Buz"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: "Partenaires"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
              href: "/admin/crud/gite/".concat(gite.slug),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                  "class": "fas fa-pencil-ruler",
                  style: {
                    color: 'orange'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
              onClick: function onClick() {
                return deleteConfirm(gite.slug);
              },
              "class": "fas fa-trash-alt",
              style: {
                color: 'red',
                cursor: 'pointer'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
          className: "mt-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: "Labels"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: "Partenaires"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
              href: "/admin/crud/gite/".concat(gite.slug),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                  "class": "fas fa-pencil-ruler",
                  style: {
                    color: 'orange'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
              onClick: function onClick() {
                return deleteConfirm(gite.slug);
              },
              "class": "fas fa-trash-alt",
              style: {
                color: 'red',
                cursor: 'pointer'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, _this)
  }, void 0, false);
};

_s(ListPages, "VnZGPSOPv8g7M6DQvTHCZV4X37Y=");

_c = ListPages;
function getStaticProps(_x) {
  return _getStaticProps.apply(this, arguments);
}

function _getStaticProps() {
  _getStaticProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var res, gites;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('http://localhost:8000/api/gites');

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            gites = _context.sent;
            return _context.abrupt("return", {
              props: {
                gites: gites
              }
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getStaticProps.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (ListPages);

var _c;

$RefreshReg$(_c, "ListPages");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9MaXN0UGFnZXMuanMiXSwibmFtZXMiOlsiTGlzdFBhZ2VzIiwidXNlU3RhdGUiLCJnaXRlcyIsInNldEdpdGVzIiwibGlzdGVyTGVzR2l0ZXMiLCJsaXN0ZURlc0dpdGVzIiwidGhlbiIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJkZWxldGVDb25maXJtIiwic2x1ZyIsImFuc3dlciIsIndpbmRvdyIsImNvbmZpcm0iLCJnaXRlIiwiY29sb3IiLCJjdXJzb3IiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJmZXRjaCIsInJlcyIsImpzb24iLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsQ0FBQyxFQUFELENBRFg7QUFBQSxNQUNoQkMsS0FEZ0I7QUFBQSxNQUNUQyxRQURTOztBQUd2QixNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDNUJDLDhFQUFhLEdBQUdDLElBQWhCLENBQXFCLFVBQUNDLElBQUQsRUFBVTtBQUM5QixVQUFJQSxJQUFJLENBQUNDLEtBQVQsRUFBZ0I7QUFDZkMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQSxPQUZELE1BRU87QUFDTkMsZUFBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNBUCxnQkFBUSxNQUFSLHNHQUFZRCxLQUFaLFVBQW1CSyxJQUFuQjtBQUNBO0FBQ0QsS0FQRDtBQVFBLEdBVEQ7O0FBV0FJLHlEQUFTLENBQUMsWUFBTTtBQUNmUCxrQkFBYztBQUNkLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsTUFBTVEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxJQUFELEVB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QUFBO0FBQUEsbUJBRWNBLEdBQUcsQ0FBQ0MsSUFBSixFQUZkOztBQUFBO0FBRUF0QixpQkFGQTtBQUFBLDZDQUlDO0FBQ051QixtQkFBSyxFQUFFO0FBQ052QixxQkFBSyxFQUFMQTtBQURNO0FBREQsYUFKRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBV1FGLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2dlc3Rpb25QYWdlcy41YjY3M2Y0YWRlZDcyMDRhODE0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFibGUgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgbGlzdGVEZXNHaXRlcyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgTGlzdFBhZ2VzID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtnaXRlcywgc2V0R2l0ZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHRjb25zdCBsaXN0ZXJMZXNHaXRlcyA9ICgpID0+IHtcclxuXHRcdGxpc3RlRGVzR2l0ZXMoKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdvbiBlc3Qgb2snKTtcclxuXHRcdFx0XHRzZXRHaXRlcyguLi5naXRlcywgZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsaXN0ZXJMZXNHaXRlcygpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc3QgZGVsZXRlQ29uZmlybSA9IChzbHVnKSA9PiB7XHJcblx0XHRsZXQgYW5zd2VyID0gd2luZG93LmNvbmZpcm0oXHJcblx0XHRcdCdDZXR0ZSBvcMOpcmF0aW9uIGVzdCBpcnLDqXZlcnNpYmxlLCBFdGVzLXZvdXMgc3VyIGRlIHZvdWxvaXIgc3VwcHJpbWVyIGNldCBhcnRpY2xlID8nXHJcblx0XHQpO1xyXG5cdFx0aWYgKGFuc3dlcikge1xyXG5cdFx0XHQvLyBkZWxldGVHaXRlKHNsdWcpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnU3VwcHJlc3Npb24nKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PFRhYmxlPlxyXG5cdFx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRoPk5vbSBkZSBsYSBwYWdlPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPk1lbnU8L3RoPlxyXG5cdFx0XHRcdFx0XHR7LyogPHRoPlZpZ25ldHRlPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPkNhcGFjaXTDqTwvdGg+ICovfVxyXG5cdFx0XHRcdFx0XHQ8dGggY29sU3Bhbj0nMic+QWN0aW9uczwvdGg+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0PHRyIGNsYXNzTmFtZT0nbXQtNSc+XHJcblx0XHRcdFx0XHRcdDx0aD5BbGVudG91cnM8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+RGl2ZXJzPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPjwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD48L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC9hZG1pbi9jcnVkL2dpdGUvJHtnaXRlLnNsdWd9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz0nZmFzIGZhLXBlbmNpbC1ydWxlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogJ29yYW5nZScgfX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBkZWxldGVDb25maXJtKGdpdGUuc2x1Zyl9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz0nZmFzIGZhLXRyYXNoLWFsdCdcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAncmVkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0XHRcdFx0XHRcdFx0XHR9fT48L2k+XHJcblx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PHRyIGNsYXNzTmFtZT0nbXQtNSc+XHJcblx0XHRcdFx0XHRcdDx0aD5GLkEuUS48L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+RGl2ZXJzPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPjwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD48L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC9hZG1pbi9jcnVkL2dpdGUvJHtnaXRlLnNsdWd9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz0nZmFzIGZhLXBlbmNpbC1ydWxlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogJ29yYW5nZScgfX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBkZWxldGVDb25maXJtKGdpdGUuc2x1Zyl9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz0nZmFzIGZhLXRyYXNoLWFsdCdcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAncmVkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0XHRcdFx0XHRcdFx0XHR9fT48L2k+XHJcblx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PHRyIGNsYXNzTmFtZT0nbXQtNSc+XHJcblx0XHRcdFx0XHRcdDx0aD5SZXN0YXVyYXRpb248L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+UGFydGVuYWlyZXM8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+PC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPjwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgL2FkbWluL2NydWQvZ2l0ZS8ke2dpdGUuc2x1Z31gfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPSdmYXMgZmEtcGVuY2lsLXJ1bGVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGNvbG9yOiAnb3JhbmdlJyB9fT48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGRlbGV0ZUNvbmZpcm0oZ2l0ZS5zbHVnKX1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPSdmYXMgZmEtdHJhc2gtYWx0J1xyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdyZWQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJzb3I6ICdwb2ludGVyJyxcclxuXHRcdFx0XHRcdFx0XHRcdH19PjwvaT5cclxuXHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8dHIgY2xhc3NOYW1lPSdtdC01Jz5cclxuXHRcdFx0XHRcdFx0PHRoPlRlcnJvaXI8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+UGFydGVuYWlyZXM8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+PC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPjwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgL2FkbWluL2NydWQvZ2l0ZS8ke2dpdGUuc2x1Z31gfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPSdmYXMgZmEtcGVuY2lsLXJ1bGVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGNvbG9yOiAnb3JhbmdlJyB9fT48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGRlbGV0ZUNvbmZpcm0oZ2l0ZS5zbHVnKX1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPSdmYXMgZmEtdHJhc2gtYWx0J1xyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdyZWQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJzb3I6ICdwb2ludGVyJyxcclxuXHRcdFx0XHRcdFx0XHRcdH19PjwvaT5cclxuXHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8dHIgY2xhc3NOYW1lPSdtdC01Jz5cclxuXHRcdFx0XHRcdFx0PHRoPkFkcmVzc2VzIHV0aWxlczwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5QYXJ0ZW5haXJlczwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD48L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+PC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvYWRtaW4vY3J1ZC9naXRlLyR7Z2l0ZS5zbHVnfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9J2ZhcyBmYS1wZW5jaWwtcnVsZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgY29sb3I6ICdvcmFuZ2UnIH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZGVsZXRlQ29uZmlybShnaXRlLnNsdWcpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9J2ZhcyBmYS10cmFzaC1hbHQnXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3JlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGN1cnNvcjogJ3BvaW50ZXInLFxyXG5cdFx0XHRcdFx0XHRcdFx0fX0+PC9pPlxyXG5cdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDx0ciBjbGFzc05hbWU9J210LTUnPlxyXG5cdFx0XHRcdFx0XHQ8dGg+RmVzdGknQnV6PC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPlBhcnRlbmFpcmVzPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPjwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD48L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC9hZG1pbi9jcnVkL2dpdGUvJHtnaXRlLnNsdWd9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz0nZmFzIGZhLXBlbmNpbC1ydWxlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogJ29yYW5nZScgfX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBkZWxldGVDb25maXJtKGdpdGUuc2x1Zyl9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz0nZmFzIGZhLXRyYXNoLWFsdCdcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAncmVkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0XHRcdFx0XHRcdFx0XHR9fT48L2k+XHJcblx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PHRyIGNsYXNzTmFtZT0nbXQtNSc+XHJcblx0XHRcdFx0XHRcdDx0aD5MYWJlbHM8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+UGFydGVuYWlyZXM8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+PC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPjwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgL2FkbWluL2NydWQvZ2l0ZS8ke2dpdGUuc2x1Z31gfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPSdmYXMgZmEtcGVuY2lsLXJ1bGVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGNvbG9yOiAnb3JhbmdlJyB9fT48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGRlbGV0ZUNvbmZpcm0oZ2l0ZS5zbHVnKX1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPSdmYXMgZmEtdHJhc2gtYWx0J1xyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdyZWQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJzb3I6ICdwb2ludGVyJyxcclxuXHRcdFx0XHRcdFx0XHRcdH19PjwvaT5cclxuXHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0PC9UYWJsZT5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG5cdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2dpdGVzJyk7XHJcblx0Y29uc3QgZ2l0ZXMgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0Z2l0ZXMsXHJcblx0XHR9LFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RQYWdlcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==