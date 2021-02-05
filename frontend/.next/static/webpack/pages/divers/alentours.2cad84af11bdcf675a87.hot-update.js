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
var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\divers\\alentours.js",
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Alentours = function Alentours(_ref) {
  var liens = _ref.liens,
      photos = _ref.photos;

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
          lineNumber: 11,
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
          lineNumber: 12,
          columnNumber: 5
        }
      }, link.titre), __jsx("hr", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 5
        }
      }));
    });
  };

  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 3
    }
  }, __jsx("section", {
    className: "accordion-section clearfix mt-3",
    "aria-label": "Question Accordions",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 8
    }
  }, "Alentours "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 8
    }
  }, "Nous vous invitons \xE0 d\xE9couvrir l\u2019ensemble des produits de la marque collective Ardennes de France en t\xE9l\xE9chargeant la brochure ci dessous , dans laquelle sont r\xE9pertori\xE9es les coordonn\xE9es de toutes les entreprises, qui au quotidien, participent \xE0 la valorisation de nos Ardennes.")), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, "Carousel")), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 8
    }
  }, "Distractions et divertissements dans les Ardennes."), listLiens('ardennes')), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 8
    }
  }, "Nous sommes \xE0 quelques km de la Belgique, d\xE9couverte chez nos amis Belges."), listLiens('belgique'), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 8
    }
  }, "et ailleurs !!!"), listLiens('ailleurs'), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 8
    }
  }, "Nous sommes \xE0 quelques km de la Meuse. Voici quelques activit\xE9s chez nos voisins."), listLiens('meuse'), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGl2ZXJzL2FsZW50b3Vycy5qcyJdLCJuYW1lcyI6WyJBbGVudG91cnMiLCJsaWVucyIsInBob3RvcyIsImxpc3RMaWVucyIsImNhdGVnb3JpZSIsImZpbHRlcmVkTGllbnMiLCJmaWx0ZXIiLCJsaWVuIiwibWFwIiwibGluayIsImkiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvbG9yIiwidGl0cmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBdUI7QUFBQSxNQUFwQkMsS0FBb0IsUUFBcEJBLEtBQW9CO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUN4QyxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxTQUFELEVBQWU7QUFDaEMsUUFBTUMsYUFBYSxHQUFHSixLQUFLLENBQUNLLE1BQU4sQ0FBYSxVQUFDQyxJQUFELEVBQVU7QUFDNUMsYUFBT0EsSUFBSSxDQUFDSCxTQUFMLEtBQW1CQSxTQUExQjtBQUNBLEtBRnFCLENBQXRCO0FBR0EsV0FBT0MsYUFBYSxDQUFDRyxHQUFkLENBQWtCLFVBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBLGFBQ3hCLG1FQUNDO0FBQUcsaUJBQU0sdUJBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURELEVBQ3VDLEdBRHZDLEVBRUM7QUFDQyxZQUFJLEVBQUVELElBQUksQ0FBQ0YsSUFEWjtBQUVDLGNBQU0sRUFBQyxRQUZSO0FBR0MsV0FBRyxFQUFDLHFCQUhMO0FBSUMsYUFBSyxFQUFFO0FBQUVJLHdCQUFjLEVBQUUsTUFBbEI7QUFBMEJDLGVBQUssRUFBRTtBQUFqQyxTQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FLRUgsSUFBSSxDQUFDSSxLQUxQLENBRkQsRUFTQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBVEQsQ0FEd0I7QUFBQSxLQUFsQixDQUFQO0FBYUEsR0FqQkQ7O0FBbUJBLFNBQ0MsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFDQyxhQUFTLEVBQUMsaUNBRFg7QUFFQyxrQkFBVyxxQkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0M7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxFQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNFRBRkQsQ0FERCxFQVlDO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaRCxDQURELEVBZ0JDO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMERBREQsRUFLRVYsU0FBUyxDQUFDLFVBQUQsQ0FMWCxDQURELEVBUUM7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3RkFERCxFQUtFQSxTQUFTLENBQUMsVUFBRCxDQUxYLEVBTUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFORCxFQU9FQSxTQUFTLENBQUMsVUFBRCxDQVBYLEVBUUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrRkFSRCxFQVlFQSxTQUFTLENBQUMsT0FBRCxDQVpYLEVBY0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1SUFkRCxDQVJELENBaEJELENBSEQsQ0FERCxDQUREO0FBc0RBLENBMUVEOztLQUFNSCxTOztBQTZGU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGl2ZXJzL2FsZW50b3Vycy4yY2FkODRhZjExYmRjZjY3NWE4Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGlzdExpZW5zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9wYWdlc0FjdGlvbnMnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCc7XHJcblxyXG5jb25zdCBBbGVudG91cnMgPSAoeyBsaWVucywgcGhvdG9zIH0pID0+IHtcclxuXHRjb25zdCBsaXN0TGllbnMgPSAoY2F0ZWdvcmllKSA9PiB7XHJcblx0XHRjb25zdCBmaWx0ZXJlZExpZW5zID0gbGllbnMuZmlsdGVyKChsaWVuKSA9PiB7XHJcblx0XHRcdHJldHVybiBsaWVuLmNhdGVnb3JpZSA9PT0gY2F0ZWdvcmllO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gZmlsdGVyZWRMaWVucy5tYXAoKGxpbmssIGkpID0+IChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHQ8aSBjbGFzcz0nZmFzIGZhLW1hcC1tYXJrZXItYWx0Jz48L2k+eycgJ31cclxuXHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0aHJlZj17bGluay5saWVufVxyXG5cdFx0XHRcdFx0dGFyZ2V0PSdfYmxhbmsnXHJcblx0XHRcdFx0XHRyZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXHJcblx0XHRcdFx0XHRzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLCBjb2xvcjogJ2JsYWNrJyB9fT5cclxuXHRcdFx0XHRcdHtsaW5rLnRpdHJlfVxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0PC8+XHJcblx0XHQpKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PExheW91dD5cclxuXHRcdFx0PHNlY3Rpb25cclxuXHRcdFx0XHRjbGFzc05hbWU9J2FjY29yZGlvbi1zZWN0aW9uIGNsZWFyZml4IG10LTMnXHJcblx0XHRcdFx0YXJpYS1sYWJlbD0nUXVlc3Rpb24gQWNjb3JkaW9ucyc+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0XHQ8aDI+QWxlbnRvdXJzIDwvaDI+XHJcblx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHROb3VzIHZvdXMgaW52aXRvbnMgw6AgZMOpY291dnJpciBs4oCZZW5zZW1ibGUgZGVzXHJcblx0XHRcdFx0XHRcdFx0XHRwcm9kdWl0cyBkZSBsYSBtYXJxdWUgY29sbGVjdGl2ZSBBcmRlbm5lcyBkZVxyXG5cdFx0XHRcdFx0XHRcdFx0RnJhbmNlIGVuIHTDqWzDqWNoYXJnZWFudCBsYSBicm9jaHVyZSBjaSBkZXNzb3VzICxcclxuXHRcdFx0XHRcdFx0XHRcdGRhbnMgbGFxdWVsbGUgc29udCByw6lwZXJ0b3Jpw6llcyBsZXMgY29vcmRvbm7DqWVzXHJcblx0XHRcdFx0XHRcdFx0XHRkZSB0b3V0ZXMgbGVzIGVudHJlcHJpc2VzLCBxdWkgYXUgcXVvdGlkaWVuLFxyXG5cdFx0XHRcdFx0XHRcdFx0cGFydGljaXBlbnQgw6AgbGEgdmFsb3Jpc2F0aW9uIGRlIG5vcyBBcmRlbm5lcy5cclxuXHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPkNhcm91c2VsPC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0XHQ8aDM+XHJcblx0XHRcdFx0XHRcdFx0XHREaXN0cmFjdGlvbnMgZXQgZGl2ZXJ0aXNzZW1lbnRzIGRhbnMgbGVzXHJcblx0XHRcdFx0XHRcdFx0XHRBcmRlbm5lcy5cclxuXHRcdFx0XHRcdFx0XHQ8L2gzPlxyXG5cdFx0XHRcdFx0XHRcdHtsaXN0TGllbnMoJ2FyZGVubmVzJyl9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxyXG5cdFx0XHRcdFx0XHRcdDxoMz5cclxuXHRcdFx0XHRcdFx0XHRcdE5vdXMgc29tbWVzIMOgIHF1ZWxxdWVzIGttIGRlIGxhIEJlbGdpcXVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZMOpY291dmVydGUgY2hleiBub3MgYW1pcyBCZWxnZXMuXHJcblx0XHRcdFx0XHRcdFx0PC9oMz5cclxuXHRcdFx0XHRcdFx0XHR7bGlzdExpZW5zKCdiZWxnaXF1ZScpfVxyXG5cdFx0XHRcdFx0XHRcdDxoMz5ldCBhaWxsZXVycyAhISE8L2gzPlxyXG5cdFx0XHRcdFx0XHRcdHtsaXN0TGllbnMoJ2FpbGxldXJzJyl9XHJcblx0XHRcdFx0XHRcdFx0PGgzPlxyXG5cdFx0XHRcdFx0XHRcdFx0Tm91cyBzb21tZXMgw6AgcXVlbHF1ZXMga20gZGUgbGEgTWV1c2UuIFZvaWNpXHJcblx0XHRcdFx0XHRcdFx0XHRxdWVscXVlcyBhY3Rpdml0w6lzIGNoZXogbm9zIHZvaXNpbnMuXHJcblx0XHRcdFx0XHRcdFx0PC9oMz5cclxuXHRcdFx0XHRcdFx0XHR7bGlzdExpZW5zKCdtZXVzZScpfVxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8aDM+XHJcblx0XHRcdFx0XHRcdFx0XHRFdCBhcHLDqHMgdG91dGVzIGNlcyB2aXNpdGVzLCB2b3VzIHBvdXJyZXpcclxuXHRcdFx0XHRcdFx0XHRcdHRlcm1pbmVyIGxhIGpvdXJuw6llIGRhbnMgbGEgcGlzY2luZSBldCB2b3VzXHJcblx0XHRcdFx0XHRcdFx0XHRyZXBvc2VyIGF1IGNhbG1lIGRhbnMgbm9zIGfDrnRlcy5cclxuXHRcdFx0XHRcdFx0XHQ8L2gzPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L0xheW91dD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuXHQvLyBjb25zb2xlLmxvZyhxdWVyeSk7XHJcblx0cmV0dXJuIGxpc3RMaWVucygpLnRoZW4oKGxpZW5zKSA9PiB7XHJcblx0XHRpZiAobGllbnMuZXJyb3IpIHtcclxuXHRcdFx0Y29uc29sZS5sb2cobGllbnMuZXJyb3IpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGxpc3RQaG90b3NCeVNlY3Rpb24oJ2FsZW50b3VycycpLnRoZW4oKHBob3RvcykgPT4ge1xyXG5cdFx0XHRcdGlmIChwaG90b3MuZXJyb3IpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHBob3Rvcy5lcnJvcik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiB7IHByb3BzOiB7IGxpZW5zLCBwaG90b3MgfSB9O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsZW50b3VycztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==