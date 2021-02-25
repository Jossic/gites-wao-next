webpackHotUpdate_N_E("pages/admin/reservation/[id]/contract",{

/***/ "./pages/admin/reservation/[id]/contract/index.js":
/*!********************************************************!*\
  !*** ./pages/admin/reservation/[id]/contract/index.js ***!
  \********************************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_clientActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../actions/clientActions */ "./actions/clientActions.js");
/* harmony import */ var _components_auth_Admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/auth/Admin */ "./components/auth/Admin.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\admin\\reservation\\[id]\\contract\\index.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createMuiTheme"])({
  palette: {
    type: 'light'
  }
});
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1,
      width: '100%',
      minHeight: '50vh'
    },
    paper: {
      height: 230,
      width: 500,
      backgroundColor: '#dddddd',
      textAlign: 'center'
    },
    paperTitle: {
      height: 30,
      width: '100%',
      backgroundColor: '#cccccc',
      textAlign: 'center'
    }
  };
});

var ReservationId = function ReservationId(_ref) {
  _s();

  var reservation = _ref.reservation,
      client = _ref.client,
      gite = _ref.gite;
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: theme,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 6
    }
  }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: "d-block w-100",
    src: gite.vignetteLink,
    alt: gite.nom,
    width: 500,
    height: 375,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 10,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "h5",
    component: "h5",
    style: {
      textAlign: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, "CONTRAT DE LOCATION EN MEUBL\xC9 SAISONNIER ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 49
    }
  }), ' '), "Madame, Monsieur. Suite \xE0 votre demande, je vous adresse le pr\xE9sent contrat de location dont 1 exemplaire est \xE0 me retourner (par courrier ou mail) rev\xEAtu de votre signature et accompagn\xE9 du montant de l\u2019acompte (virement ou courrier). En esp\xE9rant avoir le plaisir de vous accueillir prochainement, recevez mes sinc\xE8res salutations.")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    direction: "row",
    justify: "space-around",
    spacing: 4,
    alignItems: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 8
    }
  }, "Entre la soci\xE9t\xE9 :"), "Si\xE9ge social ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }), "SAS WAO ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 16
    }
  }), "1 Route de Nouart ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 26
    }
  }), "08240 Foss\xE9, FRANCE ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 28
    }
  }), "Courrier :", ' ', __jsx("a", {
    href: "mailto:contact@gites-wao.fr",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 8
    }
  }, "contact@gites-wao.fr"), ' ', __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 8
    }
  }), "Site internet :", ' ', __jsx("a", {
    href: "http://www.gites-wao.fr",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 8
    }
  }, "http://www.gites-wao.fr"), ' ', __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 8
    }
  }), "Tel : +33 (0)3 24 30 08 95 ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 35
    }
  }), "IBAN : FR76 1020 6084 0398 3877 2925 093 ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 49
    }
  }), "BIC : AGRIFRPP802 ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 26
    }
  }), "TITULAIRE : SAS WAO ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 28
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 8
    }
  }, "Et le locataire :"), "Qualit\xE9 : ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 18
    }
  }, client.civilite), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 8
    }
  }), "Pr\xE9nom et Nom :", ' ', __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 8
    }
  }, client.nom, " ", client.prenom), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 8
    }
  }), "Adresse : ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 18
    }
  }, client.adresse), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 8
    }
  }), "CP & Ville :", ' ', __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 8
    }
  }, client.cp, " ", client.ville), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 8
    }
  }), "Pays : ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }, client.pays), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 8
    }
  }), "T\xE9l\xE9phone : ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 20
    }
  }, client.tel), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 8
    }
  }), "Courrier : ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 19
    }
  }, client.mail), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 8
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 8
    }
  }, "Pour la taxe de S\xE9jour nombre de personnes :"), "Taxables : ", reservation.nbPers - reservation.nbEnf, ' ', "Non taxables : ", reservation.nbEnf, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 8
    }
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 6
    }
  }))));
};

_s(ReservationId, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = ReservationId;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (ReservationId);

var _c;

$RefreshReg$(_c, "ReservationId");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24vL2NvbnRyYWN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwidHlwZSIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwiZmxleEdyb3ciLCJ3aWR0aCIsIm1pbkhlaWdodCIsInBhcGVyIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwidGV4dEFsaWduIiwicGFwZXJUaXRsZSIsIlJlc2VydmF0aW9uSWQiLCJyZXNlcnZhdGlvbiIsImNsaWVudCIsImdpdGUiLCJjbGFzc2VzIiwidmlnbmV0dGVMaW5rIiwibm9tIiwiY2l2aWxpdGUiLCJwcmVub20iLCJhZHJlc3NlIiwiY3AiLCJ2aWxsZSIsInBheXMiLCJ0ZWwiLCJtYWlsIiwibmJQZXJzIiwibmJFbmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLCtFQUFjLENBQUM7QUFDNUJDLFNBQU8sRUFBRTtBQUNSQyxRQUFJLEVBQUU7QUFERTtBQURtQixDQUFELENBQTVCO0FBTUEsSUFBTUMsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNMLEtBQUQ7QUFBQSxTQUFZO0FBQ3hDTSxRQUFJLEVBQUU7QUFDTEMsY0FBUSxFQUFFLENBREw7QUFFTEMsV0FBSyxFQUFFLE1BRkY7QUFHTEMsZUFBUyxFQUFFO0FBSE4sS0FEa0M7QUFNeENDLFNBQUssRUFBRTtBQUNOQyxZQUFNLEVBQUUsR0FERjtBQUVOSCxXQUFLLEVBQUUsR0FGRDtBQUdOSSxxQkFBZSxFQUFFLFNBSFg7QUFJTkMsZUFBUyxFQUFFO0FBSkwsS0FOaUM7QUFZeENDLGNBQVUsRUFBRTtBQUNYSCxZQUFNLEVBQUUsRUFERztBQUVYSCxXQUFLLEVBQUUsTUFGSTtBQUdYSSxx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OztBQTRIU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24vW2lkXS9jb250cmFjdC4wODA0ZjlmZWU1ZWY2OWViMjUzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHRhZmZpY2hlQ2xpZW50LFxyXG5cdGdldENsaWVudEJ5SWQsXHJcbn0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vYWN0aW9ucy9jbGllbnRBY3Rpb25zJztcclxuaW1wb3J0IHsgbGlzdEdpdGVCeUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCB7IGFmZmljaGVSZXNlcnZhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2FjdGlvbnMvcmVzZXJ2YXRpb25BY3Rpb25zJztcclxuaW1wb3J0IEFkbWluIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYXV0aC9BZG1pbic7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgeyBHcmlkLCBQYXBlciwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcblx0cGFsZXR0ZToge1xyXG5cdFx0dHlwZTogJ2xpZ2h0JyxcclxuXHR9LFxyXG59KTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdGZsZXhHcm93OiAxLFxyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdG1pbkhlaWdodDogJzUwdmgnLFxyXG5cdH0sXHJcblx0cGFwZXI6IHtcclxuXHRcdGhlaWdodDogMjMwLFxyXG5cdFx0d2lkdGg6IDUwMCxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJyNkZGRkZGQnLFxyXG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHR9LFxyXG5cdHBhcGVyVGl0bGU6IHtcclxuXHRcdGhlaWdodDogMzAsXHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnI2NjY2NjYycsXHJcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IFJlc2VydmF0aW9uSWQgPSAoeyByZXNlcnZhdGlvbiwgY2xpZW50LCBnaXRlIH0pID0+IHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG5cdFx0XHRcdDxDc3NCYXNlbGluZSAvPlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT48L2Rpdj5cclxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcblx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsyfT5cclxuXHRcdFx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdkLWJsb2NrIHctMTAwJ1xyXG5cdFx0XHRcdFx0XHRcdHNyYz17Z2l0ZS52aWduZXR0ZUxpbmt9XHJcblx0XHRcdFx0XHRcdFx0YWx0PXtnaXRlLm5vbX1cclxuXHRcdFx0XHRcdFx0XHR3aWR0aD17NTAwfVxyXG5cdFx0XHRcdFx0XHRcdGhlaWdodD17Mzc1fVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTB9PlxyXG5cdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeVxyXG5cdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J2g1J1xyXG5cdFx0XHRcdFx0XHRcdGNvbXBvbmVudD0naDUnXHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRDT05UUkFUIERFIExPQ0FUSU9OIEVOIE1FVUJMw4kgU0FJU09OTklFUiA8YnIgLz57JyAnfVxyXG5cdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdE1hZGFtZSwgTW9uc2lldXIuIFN1aXRlIMOgIHZvdHJlIGRlbWFuZGUsIGplIHZvdXMgYWRyZXNzZVxyXG5cdFx0XHRcdFx0XHRsZSBwcsOpc2VudCBjb250cmF0IGRlIGxvY2F0aW9uIGRvbnQgMSBleGVtcGxhaXJlIGVzdCDDoFxyXG5cdFx0XHRcdFx0XHRtZSByZXRvdXJuZXIgKHBhciBjb3VycmllciBvdSBtYWlsKSByZXbDqnR1IGRlIHZvdHJlXHJcblx0XHRcdFx0XHRcdHNpZ25hdHVyZSBldCBhY2NvbXBhZ27DqSBkdSBtb250YW50IGRlIGzigJlhY29tcHRlXHJcblx0XHRcdFx0XHRcdCh2aXJlbWVudCBvdSBjb3VycmllcikuIEVuIGVzcMOpcmFudCBhdm9pciBsZSBwbGFpc2lyIGRlXHJcblx0XHRcdFx0XHRcdHZvdXMgYWNjdWVpbGxpciBwcm9jaGFpbmVtZW50LCByZWNldmV6IG1lcyBzaW5jw6hyZXNcclxuXHRcdFx0XHRcdFx0c2FsdXRhdGlvbnMuXHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cclxuXHRcdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdFx0Y29udGFpbmVyXHJcblx0XHRcdFx0XHRkaXJlY3Rpb249J3JvdydcclxuXHRcdFx0XHRcdGp1c3RpZnk9J3NwYWNlLWFyb3VuZCdcclxuXHRcdFx0XHRcdHNwYWNpbmc9ezR9XHJcblx0XHRcdFx0XHRhbGlnbkl0ZW1zPSdjZW50ZXInPlxyXG5cdFx0XHRcdFx0PEdyaWQgaXRlbT5cclxuXHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHk+RW50cmUgbGEgc29jacOpdMOpIDo8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0U2nDqWdlIHNvY2lhbCA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRTQVMgV0FPIDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdDEgUm91dGUgZGUgTm91YXJ0IDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdDA4MjQwIEZvc3PDqSwgRlJBTkNFIDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdENvdXJyaWVyIDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9J21haWx0bzpjb250YWN0QGdpdGVzLXdhby5mcic+XHJcblx0XHRcdFx0XHRcdFx0XHRjb250YWN0QGdpdGVzLXdhby5mclxyXG5cdFx0XHRcdFx0XHRcdDwvYT57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFNpdGUgaW50ZXJuZXQgOnsnICd9XHJcblx0XHRcdFx0XHRcdFx0PGEgaHJlZj0naHR0cDovL3d3dy5naXRlcy13YW8uZnInPlxyXG5cdFx0XHRcdFx0XHRcdFx0aHR0cDovL3d3dy5naXRlcy13YW8uZnJcclxuXHRcdFx0XHRcdFx0XHQ8L2E+eycgJ31cclxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRUZWwgOiArMzMgKDApMyAyNCAzMCAwOCA5NSA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRJQkFOIDogRlI3NiAxMDIwIDYwODQgMDM5OCAzODc3IDI5MjUgMDkzIDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdEJJQyA6IEFHUklGUlBQODAyIDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFRJVFVMQUlSRSA6IFNBUyBXQU8gPGJyIC8+XHJcblx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxyXG5cdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5FdCBsZSBsb2NhdGFpcmUgOjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRRdWFsaXTDqSA6IDxzcGFuPntjbGllbnQuY2l2aWxpdGV9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFByw6lub20gZXQgTm9tIDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0e2NsaWVudC5ub219IHtjbGllbnQucHJlbm9tfVxyXG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRBZHJlc3NlIDogPHNwYW4+e2NsaWVudC5hZHJlc3NlfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRDUCAmIFZpbGxlIDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0e2NsaWVudC5jcH0ge2NsaWVudC52aWxsZX1cclxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0UGF5cyA6IDxzcGFuPntjbGllbnQucGF5c308L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0VMOpbMOpcGhvbmUgOiA8c3Bhbj57Y2xpZW50LnRlbH08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0Q291cnJpZXIgOiA8c3Bhbj57Y2xpZW50Lm1haWx9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdFx0UG91ciBsYSB0YXhlIGRlIFPDqWpvdXIgbm9tYnJlIGRlIHBlcnNvbm5lcyA6XHJcblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdFRheGFibGVzIDoge3Jlc2VydmF0aW9uLm5iUGVycyAtIHJlc2VydmF0aW9uLm5iRW5mfXsnICd9XHJcblx0XHRcdFx0XHRcdFx0Tm9uIHRheGFibGVzIDoge3Jlc2VydmF0aW9uLm5iRW5mfVxyXG5cdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZX0+PC9QYXBlcj5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDwvVGhlbWVQcm92aWRlcj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuXHRjb25zb2xlLmxvZygnY29udGV4dCcsIGNvbnRleHQucXVlcnkuaWQpO1xyXG5cdGNvbnN0IHJlczEgPSBhd2FpdCBhZmZpY2hlUmVzZXJ2YXRpb24oY29udGV4dC5xdWVyeS5pZCk7XHJcblx0Y29uc3QgcmVzZXJ2YXRpb24gPSBhd2FpdCByZXMxO1xyXG5cdGNvbnNvbGUubG9nKCdyZXNlcnZhdGlvbicsIHJlc2VydmF0aW9uKTtcclxuXHRjb25zdCByZXMyID0gYXdhaXQgbGlzdEdpdGVCeUlkKHJlc2VydmF0aW9uLmdpdGUpO1xyXG5cdGNvbnN0IGdpdGUgPSBhd2FpdCByZXMyO1xyXG5cdGNvbnN0IHJlczMgPSBhd2FpdCBhZmZpY2hlQ2xpZW50KHJlc2VydmF0aW9uLmNsaWVudCk7XHJcblx0Y29uc3QgY2xpZW50ID0gYXdhaXQgcmVzMztcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHJlc2VydmF0aW9uLFxyXG5cdFx0XHRnaXRlLFxyXG5cdFx0XHRjbGllbnQsXHJcblx0XHR9LFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VydmF0aW9uSWQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=