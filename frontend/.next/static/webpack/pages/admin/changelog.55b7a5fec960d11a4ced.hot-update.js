webpackHotUpdate_N_E("pages/admin/changelog",{

/***/ "./pages/admin/changelog.js":
/*!**********************************!*\
  !*** ./pages/admin/changelog.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/AdminHeader */ "./components/layout/AdminHeader.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\admin\\changelog.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: _objectSpread(_objectSpread({}, theme.typography.button), {}, {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1),
      width: '110px',
      textAlign: 'center'
    })
  };
});

var Changelog = function Changelog() {
  _s();

  var classes = useStyles();
  return __jsx(_components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 3
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h4",
    component: "h4",
    style: {
      marginBottom: '10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, "Unreleased"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 6
    }
  }, "Unreleased"), " Mise en forme des pages du site partie visible par le client"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 6
    }
  }, "Unreleased"), " Update reservation controller et g\xE9rer les remises"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 6
    }
  }, "Unreleased"), " Permettre d'ajouter un tri sur les photos (par page et par section)"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 6
    }
  }, "Unreleased"), " G\xE9n\xE9ration d'un contrat : T\xE9l\xE9charger le contrat en pdf -> Pr\xE9visualisation dans modal et confirmation envoi au client (exemple mail re\xE7u transf\xE9r\xE9 avec insertion du contrat). Ajouter r\xE9f\xE9rence du contrat pour virement Ajouter dans le corps du mail le lien pour g\xE9n\xE9rer le paiement"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 6
    }
  }, "Unreleased"), " G\xE9n\xE9ration une facture : T\xE9l\xE9charger la facture en xls"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 6
    }
  }, "Unreleased"), " gestion des fichiers"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 6
    }
  }, "Unreleased"), " update & delete image"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 6
    }
  }, "Unreleased"), " Am\xE9liorer affichage sous menu"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 6
    }
  }, "Unreleased"), " Int\xE9gration Tidio"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 6
    }
  }, "Unreleased"), " Gestion des mails automatiques"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 6
    }
  }, "Unreleased"), " Affichage du dashboard"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 6
    }
  }, "Unreleased"), " (Gestion des r\xE9servation / clients)")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h4",
    component: "h4",
    style: {
      marginBottom: '10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 4
    }
  }, "New functionnality"), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 4
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 6
    }
  }, "Added"), " 02/03/2021 - 11:30 - Affichage du pdf lors du clic pour la g\xE9n\xE9ration du contrat et envoi du mail avec le contrat en pi\xE8ce jointe au client."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 6
    }
  }, "Added"), " 24/02/2021 - 21:46 - Dans la partie g\xEEte, ajout d'un 5eme onglet pour ajouter certaines informations personnalis\xE9es sur le contrat"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 6
    }
  }, "Added"), " Partie gestion des utilisateurs, cr\xE9ation, modification, suppression."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 6
    }
  }, "Added"), " Affichage correct de l'utilisateur connect\xE9 en haut \xE0 droite de l'admin dashboard."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 6
    }
  }, "Added"), " Page reserver - Reservation fonctionnelle avec calcul du tarif et mail envoy\xE9 directement."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 6
    }
  }, "Added"), " Page tarif - Simulation fonctionnelle sur la majorit\xE9 des cas."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 6
    }
  }, "Added"), " Renvoyer les messages du formulaire de contact dans l'espace admin avec pastille nouveau message.")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h4",
    component: "h4",
    style: {
      marginBottom: '10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 4
    }
  }, "Updated"), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 4
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 6
    }
  }, "Changed"), " 04/03/2021 - 17:00 - Correction de l'affichage du footer en bas de page"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 6
    }
  }, "Changed"), " 04/03/2021 - 16:00 - Mise \xE0 jour de la page des g\xEEtes, affichage de toutes les informations"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 6
    }
  }, "Changed"), " 03/03/2021 - 22:30 - Contr\xF4les sur la soumission du formulaire de r\xE9servation ajout\xE9 avec r\xE9capitulatif final \xE0 mettre en forme"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 6
    }
  }, "Changed"), " 02/03/2021 - 17:00 - Affichage du listing des \xE9quipements corrig\xE9"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 6
    }
  }, "Changed"), " Gestion des r\xE9servations - Tri sur date de r\xE9servation et sur status")), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h4",
    component: "h4",
    style: {
      marginBottom: '10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 5
    }
  }, "To fixe"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 6
    }
  }, "To fixe"), " Gestion des r\xE9servations - Corriger le tri sur client et sur g\xEEte"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 6
    }
  }, "To fixe"), " R\xE9servations - Afficher le tarif avec le r\xE9cap avant de valider la r\xE9servation"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 6
    }
  }, "To fixe"), " Gestion des mailers - r\xE9cup\xE9r\xE9 les variables pour les g\xE9rer dynamiquement.")));
};

_s(Changelog, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Changelog;
/* harmony default export */ __webpack_exports__["default"] = (Changelog);

var _c;

$RefreshReg$(_c, "Changelog");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vY2hhbmdlbG9nLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ0eXBvZ3JhcGh5IiwiYnV0dG9uIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsInBhZGRpbmciLCJzcGFjaW5nIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJDaGFuZ2Vsb2ciLCJjbGFzc2VzIiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDeENDLFFBQUksa0NBQ0FELEtBQUssQ0FBQ0UsVUFBTixDQUFpQkMsTUFEakI7QUFFSEMscUJBQWUsRUFBRUosS0FBSyxDQUFDSyxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDLEtBRnZDO0FBR0hDLGFBQU8sRUFBRVIsS0FBSyxDQUFDUyxPQUFOLENBQWMsQ0FBZCxDQUhOO0FBSUhDLFdBQUssRUFBRSxPQUpKO0FBS0hDLGVBQVMsRUFBRTtBQUxSO0FBRG9DLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQVVBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDdkIsTUFBTUMsT0FBTyxHQUFHZixTQUFTLEVBQXpCO0FBQ0EsU0FDQyxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyw0REFBRDtBQUNDLFdBQU8sRUFBQyxJQURUO0FBRUMsYUFBUyxFQUFDLElBRlg7QUFHQyxTQUFLLEVBQUU7QUFBRWdCLGtCQUFZLEVBQUU7QUFBaEIsS0FIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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YUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQU0sYUFBUyxFQUFFRCxPQUFPLENBQUNaLElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCw2RUFiRCxFQWlCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBTSxhQUFTLEVBQUVZLE9BQU8sQ0FBQ1osSUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELDZGQWpCRCxFQXNCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBTSxhQUFTLEVBQUVZLE9BQU8sQ0FBQ1osSUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELDRGQXRCRCxDQXRKRCxDQUREO0FBcUxBLENBdkxEOztHQUFNVyxTO1VBQ1dkLFM7OztLQURYYyxTO0FBeUxTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9jaGFuZ2Vsb2cuNTViN2E1ZmVjOTYwZDExYTRjZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZG1pbkhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9BZG1pbkhlYWRlcic7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0cm9vdDoge1xyXG5cdFx0Li4udGhlbWUudHlwb2dyYXBoeS5idXR0b24sXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuXHRcdHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHR3aWR0aDogJzExMHB4JyxcclxuXHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXHJcblx0fSxcclxufSkpO1xyXG5cclxuY29uc3QgQ2hhbmdlbG9nID0gKCkgPT4ge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEFkbWluSGVhZGVyPlxyXG5cdFx0XHR7LyogPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PkFkZGVkPC9zcGFuPiBcclxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PkNoYW5nZWQ8L3NwYW4+IFxyXG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+RGVwcmVjYXRlZDwvc3Bhbj4gXHJcblx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5SZW1vdmVkPC9zcGFuPiBcclxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PkZpeGVkPC9zcGFuPiAgKi99XHJcblx0XHRcdDx1bD5cclxuXHRcdFx0XHQ8VHlwb2dyYXBoeVxyXG5cdFx0XHRcdFx0dmFyaWFudD0naDQnXHJcblx0XHRcdFx0XHRjb21wb25lbnQ9J2g0J1xyXG5cdFx0XHRcdFx0c3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMTBweCcgfX0+XHJcblx0XHRcdFx0XHRVbnJlbGVhc2VkXHJcblx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+VW5yZWxlYXNlZDwvc3Bhbj4gTWlzZSBlblxyXG5cdFx0XHRcdFx0Zm9ybWUgZGVzIHBhZ2VzIGR1IHNpdGUgcGFydGllIHZpc2libGUgcGFyIGxlIGNsaWVudFxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlVucmVsZWFzZWQ8L3NwYW4+IFVwZGF0ZVxyXG5cdFx0XHRcdFx0cmVzZXJ2YXRpb24gY29udHJvbGxlciBldCBnw6lyZXIgbGVzIHJlbWlzZXNcclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5VbnJlbGVhc2VkPC9zcGFuPiBQZXJtZXR0cmVcclxuXHRcdFx0XHRcdGQnYWpvdXRlciB1biB0cmkgc3VyIGxlcyBwaG90b3MgKHBhciBwYWdlIGV0IHBhciBzZWN0aW9uKVxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlVucmVsZWFzZWQ8L3NwYW4+IEfDqW7DqXJhdGlvblxyXG5cdFx0XHRcdFx0ZCd1biBjb250cmF0IDogVMOpbMOpY2hhcmdlciBsZSBjb250cmF0IGVuIHBkZiAtPlxyXG5cdFx0XHRcdFx0UHLDqXZpc3VhbGlzYXRpb24gZGFucyBtb2RhbCBldCBjb25maXJtYXRpb24gZW52b2kgYXUgY2xpZW50XHJcblx0XHRcdFx0XHQoZXhlbXBsZSBtYWlsIHJlw6d1IHRyYW5zZsOpcsOpIGF2ZWMgaW5zZXJ0aW9uIGR1IGNvbnRyYXQpLlxyXG5cdFx0XHRcdFx0QWpvdXRlciByw6lmw6lyZW5jZSBkdSBjb250cmF0IHBvdXIgdmlyZW1lbnQgQWpvdXRlciBkYW5zIGxlXHJcblx0XHRcdFx0XHRjb3JwcyBkdSBtYWlsIGxlIGxpZW4gcG91ciBnw6luw6lyZXIgbGUgcGFpZW1lbnRcclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5VbnJlbGVhc2VkPC9zcGFuPiBHw6luw6lyYXRpb25cclxuXHRcdFx0XHRcdHVuZSBmYWN0dXJlIDogVMOpbMOpY2hhcmdlciBsYSBmYWN0dXJlIGVuIHhsc1xyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlVucmVsZWFzZWQ8L3NwYW4+IGdlc3Rpb24gZGVzXHJcblx0XHRcdFx0XHRmaWNoaWVyc1xyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlVucmVsZWFzZWQ8L3NwYW4+IHVwZGF0ZSAmXHJcblx0XHRcdFx0XHRkZWxldGUgaW1hZ2VcclxuXHRcdFx0XHQ8L2xpPlxyXG5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+VW5yZWxlYXNlZDwvc3Bhbj4gQW3DqWxpb3JlclxyXG5cdFx0XHRcdFx0YWZmaWNoYWdlIHNvdXMgbWVudVxyXG5cdFx0XHRcdDwvbGk+XHJcblxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5VbnJlbGVhc2VkPC9zcGFuPiBJbnTDqWdyYXRpb25cclxuXHRcdFx0XHRcdFRpZGlvXHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+VW5yZWxlYXNlZDwvc3Bhbj4gR2VzdGlvbiBkZXNcclxuXHRcdFx0XHRcdG1haWxzIGF1dG9tYXRpcXVlc1xyXG5cdFx0XHRcdDwvbGk+XHJcblxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5VbnJlbGVhc2VkPC9zcGFuPiBBZmZpY2hhZ2VcclxuXHRcdFx0XHRcdGR1IGRhc2hib2FyZFxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlVucmVsZWFzZWQ8L3NwYW4+IChHZXN0aW9uXHJcblx0XHRcdFx0XHRkZXMgcsOpc2VydmF0aW9uIC8gY2xpZW50cylcclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0XHQ8VHlwb2dyYXBoeVxyXG5cdFx0XHRcdHZhcmlhbnQ9J2g0J1xyXG5cdFx0XHRcdGNvbXBvbmVudD0naDQnXHJcblx0XHRcdFx0c3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMTBweCcgfX0+XHJcblx0XHRcdFx0TmV3IGZ1bmN0aW9ubmFsaXR5XHJcblx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0PHVsPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5BZGRlZDwvc3Bhbj4gMDIvMDMvMjAyMSAtXHJcblx0XHRcdFx0XHQxMTozMCAtIEFmZmljaGFnZSBkdSBwZGYgbG9ycyBkdSBjbGljIHBvdXIgbGEgZ8OpbsOpcmF0aW9uIGR1XHJcblx0XHRcdFx0XHRjb250cmF0IGV0IGVudm9pIGR1IG1haWwgYXZlYyBsZSBjb250cmF0IGVuIHBpw6hjZSBqb2ludGUgYXVcclxuXHRcdFx0XHRcdGNsaWVudC5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5BZGRlZDwvc3Bhbj4gMjQvMDIvMjAyMSAtXHJcblx0XHRcdFx0XHQyMTo0NiAtIERhbnMgbGEgcGFydGllIGfDrnRlLCBham91dCBkJ3VuIDVlbWUgb25nbGV0IHBvdXJcclxuXHRcdFx0XHRcdGFqb3V0ZXIgY2VydGFpbmVzIGluZm9ybWF0aW9ucyBwZXJzb25uYWxpc8OpZXMgc3VyIGxlIGNvbnRyYXRcclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5BZGRlZDwvc3Bhbj4gUGFydGllIGdlc3Rpb25cclxuXHRcdFx0XHRcdGRlcyB1dGlsaXNhdGV1cnMsIGNyw6lhdGlvbiwgbW9kaWZpY2F0aW9uLCBzdXBwcmVzc2lvbi5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5BZGRlZDwvc3Bhbj4gQWZmaWNoYWdlXHJcblx0XHRcdFx0XHRjb3JyZWN0IGRlIGwndXRpbGlzYXRldXIgY29ubmVjdMOpIGVuIGhhdXQgw6AgZHJvaXRlIGRlXHJcblx0XHRcdFx0XHRsJ2FkbWluIGRhc2hib2FyZC5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5BZGRlZDwvc3Bhbj4gUGFnZSByZXNlcnZlciAtXHJcblx0XHRcdFx0XHRSZXNlcnZhdGlvbiBmb25jdGlvbm5lbGxlIGF2ZWMgY2FsY3VsIGR1IHRhcmlmIGV0IG1haWxcclxuXHRcdFx0XHRcdGVudm95w6kgZGlyZWN0ZW1lbnQuXHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+QWRkZWQ8L3NwYW4+IFBhZ2UgdGFyaWYgLVxyXG5cdFx0XHRcdFx0U2ltdWxhdGlvbiBmb25jdGlvbm5lbGxlIHN1ciBsYSBtYWpvcml0w6kgZGVzIGNhcy5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5BZGRlZDwvc3Bhbj4gUmVudm95ZXIgbGVzXHJcblx0XHRcdFx0XHRtZXNzYWdlcyBkdSBmb3JtdWxhaXJlIGRlIGNvbnRhY3QgZGFucyBsJ2VzcGFjZSBhZG1pbiBhdmVjXHJcblx0XHRcdFx0XHRwYXN0aWxsZSBub3V2ZWF1IG1lc3NhZ2UuXHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0PC91bD5cclxuXHRcdFx0PFR5cG9ncmFwaHlcclxuXHRcdFx0XHR2YXJpYW50PSdoNCdcclxuXHRcdFx0XHRjb21wb25lbnQ9J2g0J1xyXG5cdFx0XHRcdHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzEwcHgnIH19PlxyXG5cdFx0XHRcdFVwZGF0ZWRcclxuXHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHQ8dWw+XHJcblx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PkNoYW5nZWQ8L3NwYW4+IDA0LzAzLzIwMjEgLVxyXG5cdFx0XHRcdFx0MTc6MDAgLSBDb3JyZWN0aW9uIGRlIGwnYWZmaWNoYWdlIGR1IGZvb3RlciBlbiBiYXMgZGUgcGFnZVxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PkNoYW5nZWQ8L3NwYW4+IDA0LzAzLzIwMjEgLVxyXG5cdFx0XHRcdFx0MTY6MDAgLSBNaXNlIMOgIGpvdXIgZGUgbGEgcGFnZSBkZXMgZ8OudGVzLCBhZmZpY2hhZ2UgZGVcclxuXHRcdFx0XHRcdHRvdXRlcyBsZXMgaW5mb3JtYXRpb25zXHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+Q2hhbmdlZDwvc3Bhbj4gMDMvMDMvMjAyMSAtXHJcblx0XHRcdFx0XHQyMjozMCAtIENvbnRyw7RsZXMgc3VyIGxhIHNvdW1pc3Npb24gZHUgZm9ybXVsYWlyZSBkZVxyXG5cdFx0XHRcdFx0csOpc2VydmF0aW9uIGFqb3V0w6kgYXZlYyByw6ljYXBpdHVsYXRpZiBmaW5hbCDDoCBtZXR0cmUgZW5cclxuXHRcdFx0XHRcdGZvcm1lXHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+Q2hhbmdlZDwvc3Bhbj4gMDIvMDMvMjAyMSAtXHJcblx0XHRcdFx0XHQxNzowMCAtIEFmZmljaGFnZSBkdSBsaXN0aW5nIGRlcyDDqXF1aXBlbWVudHMgY29ycmlnw6lcclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5DaGFuZ2VkPC9zcGFuPiBHZXN0aW9uIGRlc1xyXG5cdFx0XHRcdFx0csOpc2VydmF0aW9ucyAtIFRyaSBzdXIgZGF0ZSBkZSByw6lzZXJ2YXRpb24gZXQgc3VyIHN0YXR1c1xyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0ey8qPGxpPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PkNoYW5nZWQ8L3NwYW4+IFBhZ2UgcmVzZXJ2ZXJcclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5DaGFuZ2VkPC9zcGFuPiBQYWdlIHRhcmlmXHJcblx0XHRcdFx0PC9saT4gKi99XHJcblx0XHRcdDwvdWw+XHJcblxyXG5cdFx0XHQ8dWw+XHJcblx0XHRcdFx0PFR5cG9ncmFwaHlcclxuXHRcdFx0XHRcdHZhcmlhbnQ9J2g0J1xyXG5cdFx0XHRcdFx0Y29tcG9uZW50PSdoNCdcclxuXHRcdFx0XHRcdHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzEwcHgnIH19PlxyXG5cdFx0XHRcdFx0VG8gZml4ZVxyXG5cdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHJcblx0XHRcdFx0ey8qIDxsaT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5UbyBmaXhlPC9zcGFuPiBGb3JtdWxhaXJlIGRlXHJcblx0XHRcdFx0XHRyw6lzZXJ2YXRpb24sIGVucMOpY2hlciBsYSBzb3VtaXNzaW9uIHNpIGNlcnRhaW5lcyBjb25kaXRpb25zXHJcblx0XHRcdFx0XHRuZSBzb250IHBhcyByZW1wbGllcy5cclxuXHRcdFx0XHQ8L2xpPiAqL31cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+VG8gZml4ZTwvc3Bhbj4gR2VzdGlvbiBkZXNcclxuXHRcdFx0XHRcdHLDqXNlcnZhdGlvbnMgLSBDb3JyaWdlciBsZSB0cmkgc3VyIGNsaWVudCBldCBzdXIgZ8OudGVcclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5UbyBmaXhlPC9zcGFuPiBSw6lzZXJ2YXRpb25zIC1cclxuXHRcdFx0XHRcdEFmZmljaGVyIGxlIHRhcmlmIGF2ZWMgbGUgcsOpY2FwIGF2YW50IGRlIHZhbGlkZXIgbGFcclxuXHRcdFx0XHRcdHLDqXNlcnZhdGlvblxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlRvIGZpeGU8L3NwYW4+IEdlc3Rpb24gZGVzXHJcblx0XHRcdFx0XHRtYWlsZXJzIC0gcsOpY3Vww6lyw6kgbGVzIHZhcmlhYmxlcyBwb3VyIGxlcyBnw6lyZXJcclxuXHRcdFx0XHRcdGR5bmFtaXF1ZW1lbnQuXHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0PC91bD5cclxuXHRcdDwvQWRtaW5IZWFkZXI+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYW5nZWxvZztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==