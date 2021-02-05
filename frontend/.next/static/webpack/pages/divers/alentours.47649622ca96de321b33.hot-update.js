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
          lineNumber: 16,
          columnNumber: 5
        }
      }, link.titre), __jsx("hr", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 5
        }
      }));
    });
  };

  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 3
    }
  }, __jsx("section", {
    className: "accordion-section clearfix mt-3",
    "aria-label": "Question Accordions",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 8
    }
  }, "Alentours "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 8
    }
  }, "Nous vous invitons \xE0 d\xE9couvrir l\u2019ensemble des produits de la marque collective Ardennes de France en t\xE9l\xE9chargeant la brochure ci dessous , dans laquelle sont r\xE9pertori\xE9es les coordonn\xE9es de toutes les entreprises, qui au quotidien, participent \xE0 la valorisation de nos Ardennes.")), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, "Carousel")), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 8
    }
  }, "Distractions et divertissements dans les Ardennes."), listLiens('ardennes')), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 8
    }
  }, "Nous sommes \xE0 quelques km de la Belgique, d\xE9couverte chez nos amis Belges."), listLiens('belgique'), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 8
    }
  }, "et ailleurs !!!"), listLiens('ailleurs'), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 8
    }
  }, "Nous sommes \xE0 quelques km de la Meuse. Voici quelques activit\xE9s chez nos voisins."), listLiens('meuse'), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGl2ZXJzL2FsZW50b3Vycy5qcyJdLCJuYW1lcyI6WyJBbGVudG91cnMiLCJsaWVucyIsImxpZW5zQXJkZW5uZXMiLCJsaWVuc0JlbGdpcXVlIiwibGllbnNBaWxsZXVycyIsImxpZW5zTWV1c2UiLCJsaXN0TGllbnMiLCJjYXRlZ29yaWUiLCJmaWx0ZXJlZExpZW5zIiwiZmlsdGVyIiwibGllbiIsIm1hcCIsImxpbmsiLCJpIiwidGV4dERlY29yYXRpb24iLCJjb2xvciIsInRpdHJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWU7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQ2hDLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTSxDQUFFLENBQTlCOztBQUNBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTSxDQUFFLENBQTlCOztBQUNBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTSxDQUFFLENBQTlCOztBQUNBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU0sQ0FBRSxDQUEzQjs7QUFDQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxTQUFELEVBQWU7QUFDaEMsUUFBTUMsYUFBYSxHQUFHUCxLQUFLLENBQUNRLE1BQU4sQ0FBYSxVQUFDQyxJQUFELEVBQVU7QUFDNUMsYUFBT0EsSUFBSSxDQUFDSCxTQUFMLEtBQW1CQSxTQUExQjtBQUNBLEtBRnFCLENBQXRCO0FBR0EsV0FBT0MsYUFBYSxDQUFDRyxHQUFkLENBQWtCLFVBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBLGFBQ3hCLG1FQUNDO0FBQUcsaUJBQU0sdUJBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURELEVBQ3VDLEdBRHZDLEVBRUM7QUFDQyxZQUFJLEVBQUVELElBQUksQ0FBQ0YsSUFEWjtBQUVDLGNBQU0sRUFBQyxRQUZSO0FBR0MsV0FBRyxFQUFDLHFCQUhMO0FBSUMsYUFBSyxFQUFFO0FBQUVJLHdCQUFjLEVBQUUsTUFBbEI7QUFBMEJDLGVBQUssRUFBRTtBQUFqQyxTQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FLRUgsSUFBSSxDQUFDSSxLQUxQLENBRkQsRUFTQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBVEQsQ0FEd0I7QUFBQSxLQUFsQixDQUFQO0FBYUEsR0FqQkQ7O0FBbUJBLFNBQ0MsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFDQyxhQUFTLEVBQUMsaUNBRFg7QUFFQyxrQkFBVyxxQkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0M7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxFQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNFRBRkQsQ0FERCxFQVlDO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaRCxDQURELEVBZ0JDO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMERBREQsRUFLRVYsU0FBUyxDQUFDLFVBQUQsQ0FMWCxDQURELEVBUUM7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3RkFERCxFQUtFQSxTQUFTLENBQUMsVUFBRCxDQUxYLEVBTUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFORCxFQU9FQSxTQUFTLENBQUMsVUFBRCxDQVBYLEVBUUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrRkFSRCxFQVlFQSxTQUFTLENBQUMsT0FBRCxDQVpYLEVBY0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1SUFkRCxDQVJELENBaEJELENBSEQsQ0FERCxDQUREO0FBc0RBLENBOUVEOztLQUFNTixTOztBQTJGU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGl2ZXJzL2FsZW50b3Vycy40NzY0OTYyMmNhOTZkZTMyMWIzMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGlzdExpZW5zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9wYWdlc0FjdGlvbnMnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCc7XHJcblxyXG5jb25zdCBBbGVudG91cnMgPSAoeyBsaWVucyB9KSA9PiB7XHJcblx0Y29uc3QgbGllbnNBcmRlbm5lcyA9ICgpID0+IHt9O1xyXG5cdGNvbnN0IGxpZW5zQmVsZ2lxdWUgPSAoKSA9PiB7fTtcclxuXHRjb25zdCBsaWVuc0FpbGxldXJzID0gKCkgPT4ge307XHJcblx0Y29uc3QgbGllbnNNZXVzZSA9ICgpID0+IHt9O1xyXG5cdGNvbnN0IGxpc3RMaWVucyA9IChjYXRlZ29yaWUpID0+IHtcclxuXHRcdGNvbnN0IGZpbHRlcmVkTGllbnMgPSBsaWVucy5maWx0ZXIoKGxpZW4pID0+IHtcclxuXHRcdFx0cmV0dXJuIGxpZW4uY2F0ZWdvcmllID09PSBjYXRlZ29yaWU7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBmaWx0ZXJlZExpZW5zLm1hcCgobGluaywgaSkgPT4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcdDxpIGNsYXNzPSdmYXMgZmEtbWFwLW1hcmtlci1hbHQnPjwvaT57JyAnfVxyXG5cdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRocmVmPXtsaW5rLmxpZW59XHJcblx0XHRcdFx0XHR0YXJnZXQ9J19ibGFuaydcclxuXHRcdFx0XHRcdHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcclxuXHRcdFx0XHRcdHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScsIGNvbG9yOiAnYmxhY2snIH19PlxyXG5cdFx0XHRcdFx0e2xpbmsudGl0cmV9XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDxociAvPlxyXG5cdFx0XHQ8Lz5cclxuXHRcdCkpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8TGF5b3V0PlxyXG5cdFx0XHQ8c2VjdGlvblxyXG5cdFx0XHRcdGNsYXNzTmFtZT0nYWNjb3JkaW9uLXNlY3Rpb24gY2xlYXJmaXggbXQtMydcclxuXHRcdFx0XHRhcmlhLWxhYmVsPSdRdWVzdGlvbiBBY2NvcmRpb25zJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxyXG5cdFx0XHRcdFx0XHRcdDxoMj5BbGVudG91cnMgPC9oMj5cclxuXHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdE5vdXMgdm91cyBpbnZpdG9ucyDDoCBkw6ljb3V2cmlyIGzigJllbnNlbWJsZSBkZXNcclxuXHRcdFx0XHRcdFx0XHRcdHByb2R1aXRzIGRlIGxhIG1hcnF1ZSBjb2xsZWN0aXZlIEFyZGVubmVzIGRlXHJcblx0XHRcdFx0XHRcdFx0XHRGcmFuY2UgZW4gdMOpbMOpY2hhcmdlYW50IGxhIGJyb2NodXJlIGNpIGRlc3NvdXMgLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGFucyBsYXF1ZWxsZSBzb250IHLDqXBlcnRvcmnDqWVzIGxlcyBjb29yZG9ubsOpZXNcclxuXHRcdFx0XHRcdFx0XHRcdGRlIHRvdXRlcyBsZXMgZW50cmVwcmlzZXMsIHF1aSBhdSBxdW90aWRpZW4sXHJcblx0XHRcdFx0XHRcdFx0XHRwYXJ0aWNpcGVudCDDoCBsYSB2YWxvcmlzYXRpb24gZGUgbm9zIEFyZGVubmVzLlxyXG5cdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+Q2Fyb3VzZWw8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYnPlxyXG5cdFx0XHRcdFx0XHRcdDxoMz5cclxuXHRcdFx0XHRcdFx0XHRcdERpc3RyYWN0aW9ucyBldCBkaXZlcnRpc3NlbWVudHMgZGFucyBsZXNcclxuXHRcdFx0XHRcdFx0XHRcdEFyZGVubmVzLlxyXG5cdFx0XHRcdFx0XHRcdDwvaDM+XHJcblx0XHRcdFx0XHRcdFx0e2xpc3RMaWVucygnYXJkZW5uZXMnKX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcblx0XHRcdFx0XHRcdFx0PGgzPlxyXG5cdFx0XHRcdFx0XHRcdFx0Tm91cyBzb21tZXMgw6AgcXVlbHF1ZXMga20gZGUgbGEgQmVsZ2lxdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRkw6ljb3V2ZXJ0ZSBjaGV6IG5vcyBhbWlzIEJlbGdlcy5cclxuXHRcdFx0XHRcdFx0XHQ8L2gzPlxyXG5cdFx0XHRcdFx0XHRcdHtsaXN0TGllbnMoJ2JlbGdpcXVlJyl9XHJcblx0XHRcdFx0XHRcdFx0PGgzPmV0IGFpbGxldXJzICEhITwvaDM+XHJcblx0XHRcdFx0XHRcdFx0e2xpc3RMaWVucygnYWlsbGV1cnMnKX1cclxuXHRcdFx0XHRcdFx0XHQ8aDM+XHJcblx0XHRcdFx0XHRcdFx0XHROb3VzIHNvbW1lcyDDoCBxdWVscXVlcyBrbSBkZSBsYSBNZXVzZS4gVm9pY2lcclxuXHRcdFx0XHRcdFx0XHRcdHF1ZWxxdWVzIGFjdGl2aXTDqXMgY2hleiBub3Mgdm9pc2lucy5cclxuXHRcdFx0XHRcdFx0XHQ8L2gzPlxyXG5cdFx0XHRcdFx0XHRcdHtsaXN0TGllbnMoJ21ldXNlJyl9XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxoMz5cclxuXHRcdFx0XHRcdFx0XHRcdEV0IGFwcsOocyB0b3V0ZXMgY2VzIHZpc2l0ZXMsIHZvdXMgcG91cnJlelxyXG5cdFx0XHRcdFx0XHRcdFx0dGVybWluZXIgbGEgam91cm7DqWUgZGFucyBsYSBwaXNjaW5lIGV0IHZvdXNcclxuXHRcdFx0XHRcdFx0XHRcdHJlcG9zZXIgYXUgY2FsbWUgZGFucyBub3MgZ8OudGVzLlxyXG5cdFx0XHRcdFx0XHRcdDwvaDM+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdDwvTGF5b3V0PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG5cdC8vIGNvbnNvbGUubG9nKHF1ZXJ5KTtcclxuXHRyZXR1cm4gbGlzdExpZW5zKCkudGhlbigobGllbnMpID0+IHtcclxuXHRcdGlmIChsaWVucy5lcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhsaWVucy5lcnJvcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4geyBwcm9wczogeyBsaWVucyB9IH07XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsZW50b3VycztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==