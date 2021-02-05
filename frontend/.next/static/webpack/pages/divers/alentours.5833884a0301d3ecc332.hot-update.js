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
  }, carousel()))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 6
    }
  }), __jsx("div", {
    className: "row mt-5",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGl2ZXJzL2FsZW50b3Vycy5qcyJdLCJuYW1lcyI6WyJBbGVudG91cnMiLCJsaWVucyIsInBob3RvcyIsImNhcm91c2VsIiwibWFwIiwicGhvdG8iLCJpIiwibG9jYXRpb24iLCJhbHQiLCJ0aXRyZUNhcm91c2VsIiwidGV4dGVDYXJvdXNlbCIsImxpc3RMaWVucyIsImNhdGVnb3JpZSIsImZpbHRlcmVkTGllbnMiLCJmaWx0ZXIiLCJsaWVuIiwibGluayIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJ0aXRyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBdUI7QUFBQSxNQUFwQkMsS0FBb0IsUUFBcEJBLEtBQW9CO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUN4QyxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3RCLFdBQU9ELE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBUUMsQ0FBUjtBQUFBLGFBQ2pCLE1BQUMsd0RBQUQsQ0FBVSxJQUFWO0FBQWUsV0FBRyxFQUFFQSxDQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0MsTUFBQyxpREFBRDtBQUNDLGlCQUFTLEVBQUMsZUFEWDtBQUVDLFdBQUcsRUFBRUQsS0FBSyxDQUFDRSxRQUZaO0FBR0MsV0FBRyxFQUFFRixLQUFLLENBQUNHLEdBSFo7QUFJQyxhQUFLLEVBQUUsR0FKUjtBQUtDLGNBQU0sRUFBRSxHQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERCxFQVFDLE1BQUMsd0RBQUQsQ0FBVSxPQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUtI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QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVJQWRELENBUkQsQ0FsQkQsQ0FIRCxDQURELENBREQ7QUF3REEsQ0E5RkQ7O0tBQU1YLFM7O0FBaUhTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kaXZlcnMvYWxlbnRvdXJzLjU4MzM4ODRhMDMwMWQzZWNjMzMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0TGllbnMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3BhZ2VzQWN0aW9ucyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0JztcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBsaXN0UGhvdG9zQnlTZWN0aW9uIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcbmNvbnN0IEFsZW50b3VycyA9ICh7IGxpZW5zLCBwaG90b3MgfSkgPT4ge1xyXG5cdGNvbnN0IGNhcm91c2VsID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIHBob3Rvcy5tYXAoKHBob3RvLCBpKSA9PiAoXHJcblx0XHRcdDxDYXJvdXNlbC5JdGVtIGtleT17aX0+XHJcblx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J2QtYmxvY2sgdy0xMDAnXHJcblx0XHRcdFx0XHRzcmM9e3Bob3RvLmxvY2F0aW9ufVxyXG5cdFx0XHRcdFx0YWx0PXtwaG90by5hbHR9XHJcblx0XHRcdFx0XHR3aWR0aD17NTAwfVxyXG5cdFx0XHRcdFx0aGVpZ2h0PXszNzV9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8Q2Fyb3VzZWwuQ2FwdGlvbj5cclxuXHRcdFx0XHRcdDxoND57cGhvdG8udGl0cmVDYXJvdXNlbH08L2g0PlxyXG5cdFx0XHRcdFx0PHA+e3Bob3RvLnRleHRlQ2Fyb3VzZWx9PC9wPlxyXG5cdFx0XHRcdDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuXHRcdFx0PC9DYXJvdXNlbC5JdGVtPlxyXG5cdFx0KSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbGlzdExpZW5zID0gKGNhdGVnb3JpZSkgPT4ge1xyXG5cdFx0Y29uc3QgZmlsdGVyZWRMaWVucyA9IGxpZW5zLmZpbHRlcigobGllbikgPT4ge1xyXG5cdFx0XHRyZXR1cm4gbGllbi5jYXRlZ29yaWUgPT09IGNhdGVnb3JpZTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGZpbHRlcmVkTGllbnMubWFwKChsaW5rLCBpKSA9PiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFx0PGkgY2xhc3M9J2ZhcyBmYS1tYXAtbWFya2VyLWFsdCc+PC9pPnsnICd9XHJcblx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdGhyZWY9e2xpbmsubGllbn1cclxuXHRcdFx0XHRcdHRhcmdldD0nX2JsYW5rJ1xyXG5cdFx0XHRcdFx0cmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xyXG5cdFx0XHRcdFx0c3R5bGU9e3sgdGV4dERlY29yYXRpb246ICdub25lJywgY29sb3I6ICdibGFjaycgfX0+XHJcblx0XHRcdFx0XHR7bGluay50aXRyZX1cclxuXHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdDwvPlxyXG5cdFx0KSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQ+XHJcblx0XHRcdDxzZWN0aW9uXHJcblx0XHRcdFx0Y2xhc3NOYW1lPSdhY2NvcmRpb24tc2VjdGlvbiBjbGVhcmZpeCBtdC0zJ1xyXG5cdFx0XHRcdGFyaWEtbGFiZWw9J1F1ZXN0aW9uIEFjY29yZGlvbnMnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcblx0XHRcdFx0XHRcdFx0PGgyPkFsZW50b3VycyA8L2gyPlxyXG5cdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0Tm91cyB2b3VzIGludml0b25zIMOgIGTDqWNvdXZyaXIgbOKAmWVuc2VtYmxlIGRlc1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvZHVpdHMgZGUgbGEgbWFycXVlIGNvbGxlY3RpdmUgQXJkZW5uZXMgZGVcclxuXHRcdFx0XHRcdFx0XHRcdEZyYW5jZSBlbiB0w6lsw6ljaGFyZ2VhbnQgbGEgYnJvY2h1cmUgY2kgZGVzc291cyAsXHJcblx0XHRcdFx0XHRcdFx0XHRkYW5zIGxhcXVlbGxlIHNvbnQgcsOpcGVydG9yacOpZXMgbGVzIGNvb3Jkb25uw6llc1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGUgdG91dGVzIGxlcyBlbnRyZXByaXNlcywgcXVpIGF1IHF1b3RpZGllbixcclxuXHRcdFx0XHRcdFx0XHRcdHBhcnRpY2lwZW50IMOgIGxhIHZhbG9yaXNhdGlvbiBkZSBub3MgQXJkZW5uZXMuXHJcblx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0XHQ8Q2Fyb3VzZWw+e2Nhcm91c2VsKCl9PC9DYXJvdXNlbD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JvdyBtdC01Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0XHQ8aDM+XHJcblx0XHRcdFx0XHRcdFx0XHREaXN0cmFjdGlvbnMgZXQgZGl2ZXJ0aXNzZW1lbnRzIGRhbnMgbGVzXHJcblx0XHRcdFx0XHRcdFx0XHRBcmRlbm5lcy5cclxuXHRcdFx0XHRcdFx0XHQ8L2gzPlxyXG5cdFx0XHRcdFx0XHRcdHtsaXN0TGllbnMoJ2FyZGVubmVzJyl9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxyXG5cdFx0XHRcdFx0XHRcdDxoMz5cclxuXHRcdFx0XHRcdFx0XHRcdE5vdXMgc29tbWVzIMOgIHF1ZWxxdWVzIGttIGRlIGxhIEJlbGdpcXVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZMOpY291dmVydGUgY2hleiBub3MgYW1pcyBCZWxnZXMuXHJcblx0XHRcdFx0XHRcdFx0PC9oMz5cclxuXHRcdFx0XHRcdFx0XHR7bGlzdExpZW5zKCdiZWxnaXF1ZScpfVxyXG5cdFx0XHRcdFx0XHRcdDxoMz5ldCBhaWxsZXVycyAhISE8L2gzPlxyXG5cdFx0XHRcdFx0XHRcdHtsaXN0TGllbnMoJ2FpbGxldXJzJyl9XHJcblx0XHRcdFx0XHRcdFx0PGgzPlxyXG5cdFx0XHRcdFx0XHRcdFx0Tm91cyBzb21tZXMgw6AgcXVlbHF1ZXMga20gZGUgbGEgTWV1c2UuIFZvaWNpXHJcblx0XHRcdFx0XHRcdFx0XHRxdWVscXVlcyBhY3Rpdml0w6lzIGNoZXogbm9zIHZvaXNpbnMuXHJcblx0XHRcdFx0XHRcdFx0PC9oMz5cclxuXHRcdFx0XHRcdFx0XHR7bGlzdExpZW5zKCdtZXVzZScpfVxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8aDM+XHJcblx0XHRcdFx0XHRcdFx0XHRFdCBhcHLDqHMgdG91dGVzIGNlcyB2aXNpdGVzLCB2b3VzIHBvdXJyZXpcclxuXHRcdFx0XHRcdFx0XHRcdHRlcm1pbmVyIGxhIGpvdXJuw6llIGRhbnMgbGEgcGlzY2luZSBldCB2b3VzXHJcblx0XHRcdFx0XHRcdFx0XHRyZXBvc2VyIGF1IGNhbG1lIGRhbnMgbm9zIGfDrnRlcy5cclxuXHRcdFx0XHRcdFx0XHQ8L2gzPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L0xheW91dD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuXHQvLyBjb25zb2xlLmxvZyhxdWVyeSk7XHJcblx0cmV0dXJuIGxpc3RMaWVucygpLnRoZW4oKGxpZW5zKSA9PiB7XHJcblx0XHRpZiAobGllbnMuZXJyb3IpIHtcclxuXHRcdFx0Y29uc29sZS5sb2cobGllbnMuZXJyb3IpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGxpc3RQaG90b3NCeVNlY3Rpb24oJ2FsZW50b3VycycpLnRoZW4oKHBob3RvcykgPT4ge1xyXG5cdFx0XHRcdGlmIChwaG90b3MuZXJyb3IpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHBob3Rvcy5lcnJvcik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiB7IHByb3BzOiB7IGxpZW5zLCBwaG90b3MgfSB9O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsZW50b3VycztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==