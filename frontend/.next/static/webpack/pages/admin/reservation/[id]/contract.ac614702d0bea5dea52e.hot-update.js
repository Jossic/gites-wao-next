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
      // flexGrow: 1,
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
    alignItems: "flex-start",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24vL2NvbnRyYWN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwidHlwZSIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290Iiwid2lkdGgiLCJtaW5IZWlnaHQiLCJwYXBlciIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInRleHRBbGlnbiIsInBhcGVyVGl0bGUiLCJSZXNlcnZhdGlvbklkIiwicmVzZXJ2YXRpb24iLCJjbGllbnQiLCJnaXRlIiwiY2xhc3NlcyIsInZpZ25ldHRlTGluayIsIm5vbSIsImNpdmlsaXRlIiwicHJlbm9tIiwiYWRyZXNzZSIsImNwIiwidmlsbGUiLCJwYXlzIiwidGVsIiwibWFpbCIsIm5iUGVycyIsIm5iRW5mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQywrRUFBYyxDQUFDO0FBQzVCQyxTQUFPLEVBQUU7QUFDUkMsUUFBSSxFQUFFO0FBREU7QUFEbUIsQ0FBRCxDQUE1QjtBQU1BLElBQU1DLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDTCxLQUFEO0FBQUEsU0FBWTtBQUN4Q00sUUFBSSxFQUFFO0FBQ0w7QUFDQUMsV0FBSyxFQUFFLE1BRkY7QUFHTEMsZUFBUyxFQUFFO0FBSE4sS0FEa0M7QUFNeENDLFNBQUssRUFBRTtBQUNOQyxZQUFNLEVBQUUsR0FERjtBQUVOSCxXQUFLLEVBQUUsR0FGRDtBQUdOSSxxQkFBZSxFQUFFLFNBSFg7QUFJTkMsZUFBUyxFQUFFO0FBSkwsS0FOaUM7QUFZeENDLGNBQVUsRUFBRTtBQUNYSCxZQUFNLEVBQUUsRUFERztBQUVYSCxXQUFLLEVBQUUsTUFGSTtBQUdYSSxxQkFBZSxFQUFFLFNBSE47QUFJWEMsZUFBUyxF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SFNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL3Jlc2VydmF0aW9uL1tpZF0vY29udHJhY3QuYWM2MTQ3MDJkMGJlYTVkZWE1MmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0YWZmaWNoZUNsaWVudCxcclxuXHRnZXRDbGllbnRCeUlkLFxyXG59IGZyb20gJy4uLy4uLy4uLy4uLy4uL2FjdGlvbnMvY2xpZW50QWN0aW9ucyc7XHJcbmltcG9ydCB7IGxpc3RHaXRlQnlJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5pbXBvcnQgeyBhZmZpY2hlUmVzZXJ2YXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9hY3Rpb25zL3Jlc2VydmF0aW9uQWN0aW9ucyc7XHJcbmltcG9ydCBBZG1pbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2F1dGgvQWRtaW4nO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IHsgR3JpZCwgUGFwZXIsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xyXG5cdHBhbGV0dGU6IHtcclxuXHRcdHR5cGU6ICdsaWdodCcsXHJcblx0fSxcclxufSk7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRyb290OiB7XHJcblx0XHQvLyBmbGV4R3JvdzogMSxcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRtaW5IZWlnaHQ6ICc1MHZoJyxcclxuXHR9LFxyXG5cdHBhcGVyOiB7XHJcblx0XHRoZWlnaHQ6IDIzMCxcclxuXHRcdHdpZHRoOiA1MDAsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjZGRkZGRkJyxcclxuXHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXHJcblx0fSxcclxuXHRwYXBlclRpdGxlOiB7XHJcblx0XHRoZWlnaHQ6IDMwLFxyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJyNjY2NjY2MnLFxyXG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5jb25zdCBSZXNlcnZhdGlvbklkID0gKHsgcmVzZXJ2YXRpb24sIGNsaWVudCwgZ2l0ZSB9KSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuXHRcdFx0XHQ8Q3NzQmFzZWxpbmUgLz5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+PC9kaXY+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IGFsaWduSXRlbXM9J2ZsZXgtc3RhcnQnPlxyXG5cdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17Mn0+XHJcblx0XHRcdFx0XHRcdDxJbWFnZVxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZC1ibG9jayB3LTEwMCdcclxuXHRcdFx0XHRcdFx0XHRzcmM9e2dpdGUudmlnbmV0dGVMaW5rfVxyXG5cdFx0XHRcdFx0XHRcdGFsdD17Z2l0ZS5ub219XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg9ezUwMH1cclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ9ezM3NX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEwfT5cclxuXHRcdFx0XHRcdFx0PFR5cG9ncmFwaHlcclxuXHRcdFx0XHRcdFx0XHR2YXJpYW50PSdoNSdcclxuXHRcdFx0XHRcdFx0XHRjb21wb25lbnQ9J2g1J1xyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcblx0XHRcdFx0XHRcdFx0Q09OVFJBVCBERSBMT0NBVElPTiBFTiBNRVVCTMOJIFNBSVNPTk5JRVIgPGJyIC8+eycgJ31cclxuXHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRNYWRhbWUsIE1vbnNpZXVyLiBTdWl0ZSDDoCB2b3RyZSBkZW1hbmRlLCBqZSB2b3VzIGFkcmVzc2VcclxuXHRcdFx0XHRcdFx0bGUgcHLDqXNlbnQgY29udHJhdCBkZSBsb2NhdGlvbiBkb250IDEgZXhlbXBsYWlyZSBlc3Qgw6BcclxuXHRcdFx0XHRcdFx0bWUgcmV0b3VybmVyIChwYXIgY291cnJpZXIgb3UgbWFpbCkgcmV2w6p0dSBkZSB2b3RyZVxyXG5cdFx0XHRcdFx0XHRzaWduYXR1cmUgZXQgYWNjb21wYWduw6kgZHUgbW9udGFudCBkZSBs4oCZYWNvbXB0ZVxyXG5cdFx0XHRcdFx0XHQodmlyZW1lbnQgb3UgY291cnJpZXIpLiBFbiBlc3DDqXJhbnQgYXZvaXIgbGUgcGxhaXNpciBkZVxyXG5cdFx0XHRcdFx0XHR2b3VzIGFjY3VlaWxsaXIgcHJvY2hhaW5lbWVudCwgcmVjZXZleiBtZXMgc2luY8OocmVzXHJcblx0XHRcdFx0XHRcdHNhbHV0YXRpb25zLlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHJcblx0XHRcdFx0PEdyaWRcclxuXHRcdFx0XHRcdGNvbnRhaW5lclxyXG5cdFx0XHRcdFx0ZGlyZWN0aW9uPSdyb3cnXHJcblx0XHRcdFx0XHRqdXN0aWZ5PSdzcGFjZS1hcm91bmQnXHJcblx0XHRcdFx0XHRzcGFjaW5nPXs0fVxyXG5cdFx0XHRcdFx0YWxpZ25JdGVtcz0nY2VudGVyJz5cclxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0+XHJcblx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5PkVudHJlIGxhIHNvY2nDqXTDqSA6PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdFNpw6lnZSBzb2NpYWwgPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0U0FTIFdBTyA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHQxIFJvdXRlIGRlIE5vdWFydCA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHQwODI0MCBGb3Nzw6ksIEZSQU5DRSA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRDb3VycmllciA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPSdtYWlsdG86Y29udGFjdEBnaXRlcy13YW8uZnInPlxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGFjdEBnaXRlcy13YW8uZnJcclxuXHRcdFx0XHRcdFx0XHQ8L2E+eycgJ31cclxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRTaXRlIGludGVybmV0IDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9J2h0dHA6Ly93d3cuZ2l0ZXMtd2FvLmZyJz5cclxuXHRcdFx0XHRcdFx0XHRcdGh0dHA6Ly93d3cuZ2l0ZXMtd2FvLmZyXHJcblx0XHRcdFx0XHRcdFx0PC9hPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0VGVsIDogKzMzICgwKTMgMjQgMzAgMDggOTUgPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0SUJBTiA6IEZSNzYgMTAyMCA2MDg0IDAzOTggMzg3NyAyOTI1IDA5MyA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRCSUMgOiBBR1JJRlJQUDgwMiA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRUSVRVTEFJUkUgOiBTQVMgV0FPIDxiciAvPlxyXG5cdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PEdyaWQgaXRlbT5cclxuXHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4+RXQgbGUgbG9jYXRhaXJlIDo8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0UXVhbGl0w6kgOiA8c3Bhbj57Y2xpZW50LmNpdmlsaXRlfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRQcsOpbm9tIGV0IE5vbSA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdHtjbGllbnQubm9tfSB7Y2xpZW50LnByZW5vbX1cclxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0QWRyZXNzZSA6IDxzcGFuPntjbGllbnQuYWRyZXNzZX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0Q1AgJiBWaWxsZSA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdHtjbGllbnQuY3B9IHtjbGllbnQudmlsbGV9XHJcblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFBheXMgOiA8c3Bhbj57Y2xpZW50LnBheXN9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFTDqWzDqXBob25lIDogPHNwYW4+e2NsaWVudC50ZWx9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdENvdXJyaWVyIDogPHNwYW4+e2NsaWVudC5tYWlsfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHRcdFBvdXIgbGEgdGF4ZSBkZSBTw6lqb3VyIG5vbWJyZSBkZSBwZXJzb25uZXMgOlxyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHRUYXhhYmxlcyA6IHtyZXNlcnZhdGlvbi5uYlBlcnMgLSByZXNlcnZhdGlvbi5uYkVuZn17JyAnfVxyXG5cdFx0XHRcdFx0XHRcdE5vbiB0YXhhYmxlcyA6IHtyZXNlcnZhdGlvbi5uYkVuZn1cclxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyVGl0bGV9PjwvUGFwZXI+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8L1RoZW1lUHJvdmlkZXI+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcblx0Ly8gY29uc29sZS5sb2coJ2NvbnRleHQnLCBjb250ZXh0LnF1ZXJ5LmlkKTtcclxuXHRjb25zdCByZXMxID0gYXdhaXQgYWZmaWNoZVJlc2VydmF0aW9uKGNvbnRleHQucXVlcnkuaWQpO1xyXG5cdGNvbnN0IHJlc2VydmF0aW9uID0gYXdhaXQgcmVzMTtcclxuXHQvLyBjb25zb2xlLmxvZygncmVzZXJ2YXRpb24nLCByZXNlcnZhdGlvbik7XHJcblx0Y29uc3QgcmVzMiA9IGF3YWl0IGxpc3RHaXRlQnlJZChyZXNlcnZhdGlvbi5naXRlKTtcclxuXHRjb25zdCBnaXRlID0gYXdhaXQgcmVzMjtcclxuXHRjb25zdCByZXMzID0gYXdhaXQgYWZmaWNoZUNsaWVudChyZXNlcnZhdGlvbi5jbGllbnQpO1xyXG5cdGNvbnN0IGNsaWVudCA9IGF3YWl0IHJlczM7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRyZXNlcnZhdGlvbixcclxuXHRcdFx0Z2l0ZSxcclxuXHRcdFx0Y2xpZW50LFxyXG5cdFx0fSxcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlcnZhdGlvbklkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9