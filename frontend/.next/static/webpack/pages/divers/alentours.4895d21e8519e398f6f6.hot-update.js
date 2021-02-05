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
  var liens = _ref.liens;

  var liensArdennes = function liensArdennes() {};

  var liensBelgique = function liensBelgique() {};

  var liensAilleurs = function liensAilleurs() {};

  var liensMeuse = function liensMeuse() {};

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
          lineNumber: 15,
          columnNumber: 5
        }
      }), __jsx("a", {
        href: link.lien,
        target: "_blank",
        rel: "noopener noreferrer",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGl2ZXJzL2FsZW50b3Vycy5qcyJdLCJuYW1lcyI6WyJBbGVudG91cnMiLCJsaWVucyIsImxpZW5zQXJkZW5uZXMiLCJsaWVuc0JlbGdpcXVlIiwibGllbnNBaWxsZXVycyIsImxpZW5zTWV1c2UiLCJsaXN0TGllbnMiLCJjYXRlZ29yaWUiLCJmaWx0ZXJlZExpZW5zIiwiZmlsdGVyIiwibGllbiIsIm1hcCIsImxpbmsiLCJpIiwidGl0cmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBZTtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFDaEMsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNLENBQUUsQ0FBOUI7O0FBQ0EsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNLENBQUUsQ0FBOUI7O0FBQ0EsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNLENBQUUsQ0FBOUI7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTSxDQUFFLENBQTNCOztBQUNBLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLFNBQUQsRUFBZTtBQUNoQyxRQUFNQyxhQUFhLEdBQUdQLEtBQUssQ0FBQ1EsTUFBTixDQUFhLFVBQUNDLElBQUQsRUFBVTtBQUM1QyxhQUFPQSxJQUFJLENBQUNILFNBQUwsS0FBbUJBLFNBQTFCO0FBQ0EsS0FGcUIsQ0FBdEI7QUFHQSxXQUFPQyxhQUFhLENBQUNHLEdBQWQsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsYUFDeEIsbUVBQ0M7QUFBRyxpQkFBTSx1QkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREQsRUFFQztBQUFHLFlBQUksRUFBRUQsSUFBSSxDQUFDRixJQUFkO0FBQW9CLGNBQU0sRUFBQyxRQUEzQjtBQUFvQyxXQUFHLEVBQUMscUJBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRUUsSUFBSSxDQUFDRSxLQURQLENBRkQsRUFLQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTEQsQ0FEd0I7QUFBQSxLQUFsQixDQUFQO0FBU0EsR0FiRDs7QUFlQSxTQUNDLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQ0MsYUFBUyxFQUFDLGlDQURYO0FBRUMsa0JBQVcscUJBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdDO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsRUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRUQUZELENBREQsRUFZQztBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWkQsQ0FERCxFQWdCQztBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBEQURELEVBS0VSLFNBQVMsQ0FBQyxVQUFELENBTFgsQ0FERCxFQVFDO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0ZBREQsRUFLRUEsU0FBUyxDQUFDLFVBQUQsQ0FMWCxFQU1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTkQsRUFPRUEsU0FBUyxDQUFDLFVBQUQsQ0FQWCxFQVFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0ZBUkQsRUFZRUEsU0FBUyxDQUFDLE9BQUQsQ0FaWCxFQWNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUlBZEQsQ0FSRCxDQWhCRCxDQUhELENBREQsQ0FERDtBQXNEQSxDQTFFRDs7S0FBTU4sUzs7QUF1RlNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RpdmVycy9hbGVudG91cnMuNDg5NWQyMWU4NTE5ZTM5OGY2ZjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpc3RMaWVucyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvcGFnZXNBY3Rpb25zJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQnO1xyXG5cclxuY29uc3QgQWxlbnRvdXJzID0gKHsgbGllbnMgfSkgPT4ge1xyXG5cdGNvbnN0IGxpZW5zQXJkZW5uZXMgPSAoKSA9PiB7fTtcclxuXHRjb25zdCBsaWVuc0JlbGdpcXVlID0gKCkgPT4ge307XHJcblx0Y29uc3QgbGllbnNBaWxsZXVycyA9ICgpID0+IHt9O1xyXG5cdGNvbnN0IGxpZW5zTWV1c2UgPSAoKSA9PiB7fTtcclxuXHRjb25zdCBsaXN0TGllbnMgPSAoY2F0ZWdvcmllKSA9PiB7XHJcblx0XHRjb25zdCBmaWx0ZXJlZExpZW5zID0gbGllbnMuZmlsdGVyKChsaWVuKSA9PiB7XHJcblx0XHRcdHJldHVybiBsaWVuLmNhdGVnb3JpZSA9PT0gY2F0ZWdvcmllO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gZmlsdGVyZWRMaWVucy5tYXAoKGxpbmssIGkpID0+IChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHQ8aSBjbGFzcz0nZmFzIGZhLW1hcC1tYXJrZXItYWx0Jz48L2k+XHJcblx0XHRcdFx0PGEgaHJlZj17bGluay5saWVufSB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJz5cclxuXHRcdFx0XHRcdHtsaW5rLnRpdHJlfVxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0PC8+XHJcblx0XHQpKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PExheW91dD5cclxuXHRcdFx0PHNlY3Rpb25cclxuXHRcdFx0XHRjbGFzc05hbWU9J2FjY29yZGlvbi1zZWN0aW9uIGNsZWFyZml4IG10LTMnXHJcblx0XHRcdFx0YXJpYS1sYWJlbD0nUXVlc3Rpb24gQWNjb3JkaW9ucyc+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0XHQ8aDI+QWxlbnRvdXJzIDwvaDI+XHJcblx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHROb3VzIHZvdXMgaW52aXRvbnMgw6AgZMOpY291dnJpciBs4oCZZW5zZW1ibGUgZGVzXHJcblx0XHRcdFx0XHRcdFx0XHRwcm9kdWl0cyBkZSBsYSBtYXJxdWUgY29sbGVjdGl2ZSBBcmRlbm5lcyBkZVxyXG5cdFx0XHRcdFx0XHRcdFx0RnJhbmNlIGVuIHTDqWzDqWNoYXJnZWFudCBsYSBicm9jaHVyZSBjaSBkZXNzb3VzICxcclxuXHRcdFx0XHRcdFx0XHRcdGRhbnMgbGFxdWVsbGUgc29udCByw6lwZXJ0b3Jpw6llcyBsZXMgY29vcmRvbm7DqWVzXHJcblx0XHRcdFx0XHRcdFx0XHRkZSB0b3V0ZXMgbGVzIGVudHJlcHJpc2VzLCBxdWkgYXUgcXVvdGlkaWVuLFxyXG5cdFx0XHRcdFx0XHRcdFx0cGFydGljaXBlbnQgw6AgbGEgdmFsb3Jpc2F0aW9uIGRlIG5vcyBBcmRlbm5lcy5cclxuXHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPkNhcm91c2VsPC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuXHRcdFx0XHRcdFx0XHQ8aDM+XHJcblx0XHRcdFx0XHRcdFx0XHREaXN0cmFjdGlvbnMgZXQgZGl2ZXJ0aXNzZW1lbnRzIGRhbnMgbGVzXHJcblx0XHRcdFx0XHRcdFx0XHRBcmRlbm5lcy5cclxuXHRcdFx0XHRcdFx0XHQ8L2gzPlxyXG5cdFx0XHRcdFx0XHRcdHtsaXN0TGllbnMoJ2FyZGVubmVzJyl9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxyXG5cdFx0XHRcdFx0XHRcdDxoMz5cclxuXHRcdFx0XHRcdFx0XHRcdE5vdXMgc29tbWVzIMOgIHF1ZWxxdWVzIGttIGRlIGxhIEJlbGdpcXVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZMOpY291dmVydGUgY2hleiBub3MgYW1pcyBCZWxnZXMuXHJcblx0XHRcdFx0XHRcdFx0PC9oMz5cclxuXHRcdFx0XHRcdFx0XHR7bGlzdExpZW5zKCdiZWxnaXF1ZScpfVxyXG5cdFx0XHRcdFx0XHRcdDxoMz5ldCBhaWxsZXVycyAhISE8L2gzPlxyXG5cdFx0XHRcdFx0XHRcdHtsaXN0TGllbnMoJ2FpbGxldXJzJyl9XHJcblx0XHRcdFx0XHRcdFx0PGgzPlxyXG5cdFx0XHRcdFx0XHRcdFx0Tm91cyBzb21tZXMgw6AgcXVlbHF1ZXMga20gZGUgbGEgTWV1c2UuIFZvaWNpXHJcblx0XHRcdFx0XHRcdFx0XHRxdWVscXVlcyBhY3Rpdml0w6lzIGNoZXogbm9zIHZvaXNpbnMuXHJcblx0XHRcdFx0XHRcdFx0PC9oMz5cclxuXHRcdFx0XHRcdFx0XHR7bGlzdExpZW5zKCdtZXVzZScpfVxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8aDM+XHJcblx0XHRcdFx0XHRcdFx0XHRFdCBhcHLDqHMgdG91dGVzIGNlcyB2aXNpdGVzLCB2b3VzIHBvdXJyZXpcclxuXHRcdFx0XHRcdFx0XHRcdHRlcm1pbmVyIGxhIGpvdXJuw6llIGRhbnMgbGEgcGlzY2luZSBldCB2b3VzXHJcblx0XHRcdFx0XHRcdFx0XHRyZXBvc2VyIGF1IGNhbG1lIGRhbnMgbm9zIGfDrnRlcy5cclxuXHRcdFx0XHRcdFx0XHQ8L2gzPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L0xheW91dD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuXHQvLyBjb25zb2xlLmxvZyhxdWVyeSk7XHJcblx0cmV0dXJuIGxpc3RMaWVucygpLnRoZW4oKGxpZW5zKSA9PiB7XHJcblx0XHRpZiAobGllbnMuZXJyb3IpIHtcclxuXHRcdFx0Y29uc29sZS5sb2cobGllbnMuZXJyb3IpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHsgcHJvcHM6IHsgbGllbnMgfSB9O1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGVudG91cnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=