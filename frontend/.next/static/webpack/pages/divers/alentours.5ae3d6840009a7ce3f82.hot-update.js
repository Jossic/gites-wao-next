webpackHotUpdate_N_E("pages/divers/alentours",{

/***/ "./pages/divers/alentours.js":
/*!***********************************!*\
  !*** ./pages/divers/alentours.js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\divers\\alentours.js",
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Alentours = function Alentours(_ref) {
  var liens = _ref.liens,
      photos = _ref.photos;

  var carousel = function carousel() {
    return photos.map(function (photo, i) {
      return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"].Item, {
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 4
        }
      }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "d-block w-100",
        src: photo.location,
        alt: photo.alt,
        width: 500,
        height: 375,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 5
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"].Caption, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 5
        }
      }, __jsx("h4", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 6
        }
      }, photo.titreCarousel), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 6
        }
      }, photo.texteCarousel)));
    });
  };

  var listLiens = function listLiens(categorie) {
    var filteredLiens = liens.filter(function (lien) {
      return lien.categorie === categorie;
    });
    return filteredLiens.map(function (link, i) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("i", {
        "class": "fas fa-map-marker-alt",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 5
        }
      }), ' ', __jsx("a", {
        href: link.lien,
        target: "_blank",
        rel: "noopener noreferrer",
        style: {
          textDecoration: 'none',
          color: 'black'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 5
        }
      }, link.titre), __jsx("hr", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 5
        }
      }));
    });
  };

  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 3
    }
  }, __jsx("section", {
    className: "accordion-section clearfix mt-3",
    "aria-label": "Question Accordions",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 8
    }
  }, "Alentours "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 8
    }
  }, "Nous vous invitons \xE0 d\xE9couvrir l\u2019ensemble des produits de la marque collective Ardennes de France en t\xE9l\xE9chargeant la brochure ci dessous , dans laquelle sont r\xE9pertori\xE9es les coordonn\xE9es de toutes les entreprises, qui au quotidien, participent \xE0 la valorisation de nos Ardennes.")), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 8
    }
  }, carousel()))), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 8
    }
  }, "Distractions et divertissements dans les Ardennes."), listLiens('ardennes')), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 8
    }
  }, "Nous sommes \xE0 quelques km de la Belgique, d\xE9couverte chez nos amis Belges."), listLiens('belgique'), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 8
    }
  }, "et ailleurs !!!"), listLiens('ailleurs'), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 8
    }
  }, "Nous sommes \xE0 quelques km de la Meuse. Voici quelques activit\xE9s chez nos voisins."), listLiens('meuse'), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 8
    }
  }, "Et apr\xE8s toutes ces visites, vous pourrez terminer la journ\xE9e dans la piscine et vous reposer au calme dans nos g\xEEtes."))))));
};

_c = Alentours;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Alentours);

var _c;

$RefreshReg$(_c, "Alentours");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGl2ZXJzL2FsZW50b3Vycy5qcyJdLCJuYW1lcyI6WyJBbGVudG91cnMiLCJsaWVucyIsInBob3RvcyIsImNhcm91c2VsIiwibWFwIiwicGhvdG8iLCJpIiwibG9jYXRpb24iLCJhbHQiLCJ0aXRyZUNhcm91c2VsIiwidGV4dGVDYXJvdXNlbCIsImxpc3RMaWVucyIsImNhdGVnb3JpZSIsImZpbHRlcmVkTGllbnMiLCJmaWx0ZXIiLCJsaWVuIiwibGluayIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJ0aXRyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBdUI7QUFBQSxNQUFwQkMsS0FBb0IsUUFBcEJBLEtBQW9CO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUN4QyxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3RCLFdBQU9ELE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBUUMsQ0FBUjtBQUFBLGFBQ2pCLE1BQUMsd0RBQUQsQ0FBVSxJQUFWO0FBQWUsV0FBRyxFQUFFQSxDQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0MsTUFBQyxpREFBRDtBQUNDLGlCQUFTLEVBQUMsZUFEWDtBQUVDLFdBQUcsRUFBRUQsS0FBSyxDQUFDRSxRQUZaO0FBR0MsV0FBRyxFQUFFRixLQUFLLENBQUNHLEdBSFo7QUFJQyxhQUFLLEVBQUUsR0FKUjtBQUtDLGNBQU0sRUFBRSxHQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERCxFQVFDLE1BQUMsd0RBQUQsQ0FBVSxPQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUtILEtBQUssQ0FBQ0ksYUFBWCxDQURELEVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJSixLQUFLLENBQUNLLGFBQVYsQ0FGRCxDQVJELENBRGlCO0FBQUEsS0FBWCxDQUFQO0FBZUEsR0FoQkQ7O0FBa0JBLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLFNBQUQsRUFBZTtBQUNoQyxRQUFNQyxhQUFhLEdBQUdaLEtBQUssQ0FBQ2EsTUFBTixDQUFhLFVBQUNDLElBQUQsRUFBVTtBQUM1QyxhQUFPQSxJQUFJLENBQUNILFNBQUwsS0FBbUJBLFNBQTFCO0FBQ0EsS0FGcUIsQ0FBdEI7QUFHQSxXQUFPQyxhQUFhLENBQUNULEdBQWQsQ0FBa0IsVUFBQ1ksSUFBRCxFQUFPVixDQUFQO0FBQUEsYUFDeEIsbUVBQ0M7QUFBRyxpQkFBTSx1QkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREQsRUFDdUMsR0FEdkMsRUFFQztBQUNDLFlBQUksRUFBRVUsSUFBSSxDQUFDRCxJQURaO0FBRUMsY0FBTSxFQUFDLFFBRlI7QUFHQyxXQUFHLEVBQUMscUJBSEw7QUFJQyxhQUFLLEVBQUU7QUFBRUUsd0JBQWMsRUFBRSxNQUFsQjtBQUEwQkMsZUFBSyxFQUFFO0FBQWpDLFNBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUtFRixJQUFJLENBQUNHLEtBTFAsQ0FGRCxFQVNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFURCxDQUR3QjtBQUFBLEtBQWxCLENBQVA7QUFhQSxHQWpCRDs7QUFtQkEsU0FDQyxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUNDLGFBQVMsRUFBQyxpQ0FEWDtBQUVDLGtCQUFXLHFCQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHQztBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELEVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0VEFGRCxDQURELEVBWUM7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVdoQixRQUFRLEVBQW5CLENBREQsQ0FaRCxDQURELEVBa0JDO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMERBREQsRUFLRVEsU0FBUyxDQUFDLFVBQUQsQ0FMWCxDQURELEVBUUM7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3RkFERCxFQUtFQSxTQUFTLENBQUMsVUFBRCxDQUxYLEVBTUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFORCxFQU9FQSxTQUFTLENBQUMsVUFBRCxDQVBYLEVBUUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrRkFSRCxFQVlFQSxTQUFTLENBQUMsT0FBRCxDQVpYLEVBY0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1SUFkRCxDQVJELENBbEJELENBSEQsQ0FERCxDQUREO0FBd0RBLENBOUZEOztLQUFNWCxTOztBQWlIU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGl2ZXJzL2FsZW50b3Vycy41YWUzZDY4NDAwMDlhN2NlM2Y4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGlzdExpZW5zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9wYWdlc0FjdGlvbnMnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCc7XHJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgbGlzdFBob3Rvc0J5U2VjdGlvbiB9IGZyb20gJy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5jb25zdCBBbGVudG91cnMgPSAoeyBsaWVucywgcGhvdG9zIH0pID0+IHtcclxuXHRjb25zdCBjYXJvdXNlbCA9ICgpID0+IHtcclxuXHRcdHJldHVybiBwaG90b3MubWFwKChwaG90bywgaSkgPT4gKFxyXG5cdFx0XHQ8Q2Fyb3VzZWwuSXRlbSBrZXk9e2l9PlxyXG5cdFx0XHRcdDxJbWFnZVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdkLWJsb2NrIHctMTAwJ1xyXG5cdFx0XHRcdFx0c3JjPXtwaG90by5sb2NhdGlvbn1cclxuXHRcdFx0XHRcdGFsdD17cGhvdG8uYWx0fVxyXG5cdFx0XHRcdFx0d2lkdGg9ezUwMH1cclxuXHRcdFx0XHRcdGhlaWdodD17Mzc1fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PENhcm91c2VsLkNhcHRpb24+XHJcblx0XHRcdFx0XHQ8aDQ+e3Bob3RvLnRpdHJlQ2Fyb3VzZWx9PC9oND5cclxuXHRcdFx0XHRcdDxwPntwaG90by50ZXh0ZUNhcm91c2VsfTwvcD5cclxuXHRcdFx0XHQ8L0Nhcm91c2VsLkNhcHRpb24+XHJcblx0XHRcdDwvQ2Fyb3VzZWwuSXRlbT5cclxuXHRcdCkpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGxpc3RMaWVucyA9IChjYXRlZ29yaWUpID0+IHtcclxuXHRcdGNvbnN0IGZpbHRlcmVkTGllbnMgPSBsaWVucy5maWx0ZXIoKGxpZW4pID0+IHtcclxuXHRcdFx0cmV0dXJuIGxpZW4uY2F0ZWdvcmllID09PSBjYXRlZ29yaWU7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBmaWx0ZXJlZExpZW5zLm1hcCgobGluaywgaSkgPT4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcdDxpIGNsYXNzPSdmYXMgZmEtbWFwLW1hcmtlci1hbHQnPjwvaT57JyAnfVxyXG5cdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRocmVmPXtsaW5rLmxpZW59XHJcblx0XHRcdFx0XHR0YXJnZXQ9J19ibGFuaydcclxuXHRcdFx0XHRcdHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcclxuXHRcdFx0XHRcdHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScsIGNvbG9yOiAnYmxhY2snIH19PlxyXG5cdFx0XHRcdFx0e2xpbmsudGl0cmV9XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDxociAvPlxyXG5cdFx0XHQ8Lz5cclxuXHRcdCkpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8TGF5b3V0PlxyXG5cdFx0XHQ8c2VjdGlvblxyXG5cdFx0XHRcdGNsYXNzTmFtZT0nYWNjb3JkaW9uLXNlY3Rpb24gY2xlYXJmaXggbXQtMydcclxuXHRcdFx0XHRhcmlhLWxhYmVsPSdRdWVzdGlvbiBBY2NvcmRpb25zJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxyXG5cdFx0XHRcdFx0XHRcdDxoMj5BbGVudG91cnMgPC9oMj5cclxuXHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdE5vdXMgdm91cyBpbnZpdG9ucyDDoCBkw6ljb3V2cmlyIGzigJllbnNlbWJsZSBkZXNcclxuXHRcdFx0XHRcdFx0XHRcdHByb2R1aXRzIGRlIGxhIG1hcnF1ZSBjb2xsZWN0aXZlIEFyZGVubmVzIGRlXHJcblx0XHRcdFx0XHRcdFx0XHRGcmFuY2UgZW4gdMOpbMOpY2hhcmdlYW50IGxhIGJyb2NodXJlIGNpIGRlc3NvdXMgLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGFucyBsYXF1ZWxsZSBzb250IHLDqXBlcnRvcmnDqWVzIGxlcyBjb29yZG9ubsOpZXNcclxuXHRcdFx0XHRcdFx0XHRcdGRlIHRvdXRlcyBsZXMgZW50cmVwcmlzZXMsIHF1aSBhdSBxdW90aWRpZW4sXHJcblx0XHRcdFx0XHRcdFx0XHRwYXJ0aWNpcGVudCDDoCBsYSB2YWxvcmlzYXRpb24gZGUgbm9zIEFyZGVubmVzLlxyXG5cdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcblx0XHRcdFx0XHRcdFx0PENhcm91c2VsPntjYXJvdXNlbCgpfTwvQ2Fyb3VzZWw+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcblx0XHRcdFx0XHRcdFx0PGgzPlxyXG5cdFx0XHRcdFx0XHRcdFx0RGlzdHJhY3Rpb25zIGV0IGRpdmVydGlzc2VtZW50cyBkYW5zIGxlc1xyXG5cdFx0XHRcdFx0XHRcdFx0QXJkZW5uZXMuXHJcblx0XHRcdFx0XHRcdFx0PC9oMz5cclxuXHRcdFx0XHRcdFx0XHR7bGlzdExpZW5zKCdhcmRlbm5lcycpfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0XHQ8aDM+XHJcblx0XHRcdFx0XHRcdFx0XHROb3VzIHNvbW1lcyDDoCBxdWVscXVlcyBrbSBkZSBsYSBCZWxnaXF1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdGTDqWNvdXZlcnRlIGNoZXogbm9zIGFtaXMgQmVsZ2VzLlxyXG5cdFx0XHRcdFx0XHRcdDwvaDM+XHJcblx0XHRcdFx0XHRcdFx0e2xpc3RMaWVucygnYmVsZ2lxdWUnKX1cclxuXHRcdFx0XHRcdFx0XHQ8aDM+ZXQgYWlsbGV1cnMgISEhPC9oMz5cclxuXHRcdFx0XHRcdFx0XHR7bGlzdExpZW5zKCdhaWxsZXVycycpfVxyXG5cdFx0XHRcdFx0XHRcdDxoMz5cclxuXHRcdFx0XHRcdFx0XHRcdE5vdXMgc29tbWVzIMOgIHF1ZWxxdWVzIGttIGRlIGxhIE1ldXNlLiBWb2ljaVxyXG5cdFx0XHRcdFx0XHRcdFx0cXVlbHF1ZXMgYWN0aXZpdMOpcyBjaGV6IG5vcyB2b2lzaW5zLlxyXG5cdFx0XHRcdFx0XHRcdDwvaDM+XHJcblx0XHRcdFx0XHRcdFx0e2xpc3RMaWVucygnbWV1c2UnKX1cclxuXHJcblx0XHRcdFx0XHRcdFx0PGgzPlxyXG5cdFx0XHRcdFx0XHRcdFx0RXQgYXByw6hzIHRvdXRlcyBjZXMgdmlzaXRlcywgdm91cyBwb3VycmV6XHJcblx0XHRcdFx0XHRcdFx0XHR0ZXJtaW5lciBsYSBqb3VybsOpZSBkYW5zIGxhIHBpc2NpbmUgZXQgdm91c1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVwb3NlciBhdSBjYWxtZSBkYW5zIG5vcyBnw650ZXMuXHJcblx0XHRcdFx0XHRcdFx0PC9oMz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcblx0Ly8gY29uc29sZS5sb2cocXVlcnkpO1xyXG5cdHJldHVybiBsaXN0TGllbnMoKS50aGVuKChsaWVucykgPT4ge1xyXG5cdFx0aWYgKGxpZW5zLmVycm9yKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGxpZW5zLmVycm9yKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBsaXN0UGhvdG9zQnlTZWN0aW9uKCdhbGVudG91cnMnKS50aGVuKChwaG90b3MpID0+IHtcclxuXHRcdFx0XHRpZiAocGhvdG9zLmVycm9yKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhwaG90b3MuZXJyb3IpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4geyBwcm9wczogeyBsaWVucywgcGhvdG9zIH0gfTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGVudG91cnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=