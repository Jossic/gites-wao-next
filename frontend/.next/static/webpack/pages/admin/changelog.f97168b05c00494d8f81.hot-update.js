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
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 6
    }
  }, "Unreleased"), " Mise en forme des pages du site partie visible par le client"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 6
    }
  }, "Unreleased"), " Update reservation controller et g\xE9rer les remises"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 6
    }
  }, "Unreleased"), " Permettre d'ajouter un tri sur les photos (par page et par section)"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 6
    }
  }, "Unreleased"), " G\xE9n\xE9ration d'un contrat : T\xE9l\xE9charger le contrat en pdf -> Pr\xE9visualisation dans modal et confirmation envoi au client (exemple mail re\xE7u transf\xE9r\xE9 avec insertion du contrat). Ajouter r\xE9f\xE9rence du contrat pour virement Ajouter dans le corps du mail le lien pour g\xE9n\xE9rer le paiement"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 6
    }
  }, "Unreleased"), " G\xE9n\xE9ration une facture : T\xE9l\xE9charger la facture en xls"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 6
    }
  }, "Unreleased"), " gestion des fichiers"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 6
    }
  }, "Unreleased"), " update & delete image"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 6
    }
  }, "Unreleased"), " Am\xE9liorer affichage sous menu"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 6
    }
  }, "Unreleased"), " Int\xE9gration Tidio"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 6
    }
  }, "Unreleased"), " Gestion des mails automatiques"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 6
    }
  }, "Unreleased"), " Affichage du dashboard"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 6
    }
  }, "Unreleased"), " (Gestion des r\xE9servation / clients)")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h4",
    component: "h4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 4
    }
  }, "New functionnality"), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 4
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 6
    }
  }, "Added"), " 02/03/2021 - 11:30 - Affichage du pdf lors du clic pour la g\xE9n\xE9ration du contrat et envoi du mail avec le contrat en pi\xE8ce jointe au client."), __jsx("li", {
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
  }, "Added"), " 24/02/2021 - 21:46 - Dans la partie g\xEEte, ajout d'un 5eme onglet pour ajouter certaines informations personnalis\xE9es sur le contrat"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 6
    }
  }, "Added"), " Partie gestion des utilisateurs, cr\xE9ation, modification, suppression."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 6
    }
  }, "Added"), " Affichage correct de l'utilisateur connect\xE9 en haut \xE0 droite de l'admin dashboard."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 6
    }
  }, "Added"), " Page reserver - Reservation fonctionnelle avec calcul du tarif et mail envoy\xE9 directement."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 6
    }
  }, "Added"), " Page tarif - Simulation fonctionnelle sur la majorit\xE9 des cas."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 6
    }
  }, "Added"), " Renvoyer les messages du formulaire de contact dans l'espace admin avec pastille nouveau message.")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h4",
    component: "h4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 4
    }
  }, "Updated"), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 4
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 6
    }
  }, "Changed"), " 04/03/2021 - 17:00 - Correction de l'affichage du footer en bas de page"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 6
    }
  }, "Changed"), " 04/03/2021 - 16:00 - Mise \xE0 jour de la page des g\xEEtes, affichage de toutes les informations"), __jsx("li", {
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
  }, "Changed"), " 03/03/2021 - 22:30 - Contr\xF4les sur la soumission du formulaire de r\xE9servation ajout\xE9 avec r\xE9capitulatif final \xE0 mettre en forme"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 6
    }
  }, "Changed"), " 02/03/2021 - 17:00 - Affichage du listing des \xE9quipements corrig\xE9"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 6
    }
  }, "Changed"), " Gestion des r\xE9servations - Tri sur date de r\xE9servation et sur status")), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h4",
    component: "h4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 5
    }
  }, "To fixe"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 6
    }
  }, "To fixe"), " Formulaire de r\xE9servation, enp\xE9cher la soumission si certaines conditions ne sont pas remplies."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 6
    }
  }, "To fixe"), " Gestion des r\xE9servations - Corriger le tri sur client et sur g\xEEte"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 6
    }
  }, "To fixe"), " R\xE9servations - Afficher le tarif avec le r\xE9cap avant de valider la r\xE9servation"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vY2hhbmdlbG9nLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ0eXBvZ3JhcGh5IiwiYnV0dG9uIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsInBhZGRpbmciLCJzcGFjaW5nIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJDaGFuZ2Vsb2ciLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDeENDLFFBQUksa0NBQ0FELEtBQUssQ0FBQ0UsVUFBTixDQUFpQkMsTUFEakI7QUFFSEMscUJBQWUsRUFBRUosS0FBSyxDQUFDSyxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDLEtBRnZDO0FBR0hDLGFBQU8sRUFBRVIsS0FBSyxDQUFDUyxPQUFOLENBQWMsQ0FBZCxDQUhOO0FBSUhDLFdBQUssRUFBRSxPQUpKO0FBS0hDLGVBQVMsRUFBRTtBQUxSO0FBRG9DLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQVVBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDdkIsTUFBTUMsT0FBTyxHQUFHZixTQUFTLEVBQXpCO0FBQ0EsU0FDQyxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUF5QixhQUFTLEVBQUMsSUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxFQUtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEs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QUFFWSxPQUFPLENBQUNaLElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCw2RUFWRCxFQWNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFNLGFBQVMsRUFBRVksT0FBTyxDQUFDWixJQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsNkZBZEQsRUFtQkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQU0sYUFBUyxFQUFFWSxPQUFPLENBQUNaLElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCw0RkFuQkQsQ0E3SUQsQ0FERDtBQXlLQSxDQTNLRDs7R0FBTVcsUztVQUNXZCxTOzs7S0FEWGMsUztBQTZLU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY2hhbmdlbG9nLmY5NzE2OGIwNWMwMDQ5NGQ4ZjgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRtaW5IZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvQWRtaW5IZWFkZXInO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdC4uLnRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcblx0XHRwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0d2lkdGg6ICcxMTBweCcsXHJcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IENoYW5nZWxvZyA9ICgpID0+IHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxBZG1pbkhlYWRlcj5cclxuXHRcdFx0ey8qIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5BZGRlZDwvc3Bhbj4gXHJcblx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5DaGFuZ2VkPC9zcGFuPiBcclxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PkRlcHJlY2F0ZWQ8L3NwYW4+IFxyXG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+UmVtb3ZlZDwvc3Bhbj4gXHJcblx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5GaXhlZDwvc3Bhbj4gICovfVxyXG5cdFx0XHQ8dWw+XHJcblx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD0naDQnIGNvbXBvbmVudD0naDQnPlxyXG5cdFx0XHRcdFx0VW5yZWxlYXNlZFxyXG5cdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHJcblx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlVucmVsZWFzZWQ8L3NwYW4+IE1pc2UgZW5cclxuXHRcdFx0XHRcdGZvcm1lIGRlcyBwYWdlcyBkdSBzaXRlIHBhcnRpZSB2aXNpYmxlIHBhciBsZSBjbGllbnRcclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5VbnJlbGVhc2VkPC9zcGFuPiBVcGRhdGVcclxuXHRcdFx0XHRcdHJlc2VydmF0aW9uIGNvbnRyb2xsZXIgZXQgZ8OpcmVyIGxlcyByZW1pc2VzXHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+VW5yZWxlYXNlZDwvc3Bhbj4gUGVybWV0dHJlXHJcblx0XHRcdFx0XHRkJ2Fqb3V0ZXIgdW4gdHJpIHN1ciBsZXMgcGhvdG9zIChwYXIgcGFnZSBldCBwYXIgc2VjdGlvbilcclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5VbnJlbGVhc2VkPC9zcGFuPiBHw6luw6lyYXRpb25cclxuXHRcdFx0XHRcdGQndW4gY29udHJhdCA6IFTDqWzDqWNoYXJnZXIgbGUgY29udHJhdCBlbiBwZGYgLT5cclxuXHRcdFx0XHRcdFByw6l2aXN1YWxpc2F0aW9uIGRhbnMgbW9kYWwgZXQgY29uZmlybWF0aW9uIGVudm9pIGF1IGNsaWVudFxyXG5cdFx0XHRcdFx0KGV4ZW1wbGUgbWFpbCByZcOndSB0cmFuc2bDqXLDqSBhdmVjIGluc2VydGlvbiBkdSBjb250cmF0KS5cclxuXHRcdFx0XHRcdEFqb3V0ZXIgcsOpZsOpcmVuY2UgZHUgY29udHJhdCBwb3VyIHZpcmVtZW50IEFqb3V0ZXIgZGFucyBsZVxyXG5cdFx0XHRcdFx0Y29ycHMgZHUgbWFpbCBsZSBsaWVuIHBvdXIgZ8OpbsOpcmVyIGxlIHBhaWVtZW50XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+VW5yZWxlYXNlZDwvc3Bhbj4gR8OpbsOpcmF0aW9uXHJcblx0XHRcdFx0XHR1bmUgZmFjdHVyZSA6IFTDqWzDqWNoYXJnZXIgbGEgZmFjdHVyZSBlbiB4bHNcclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5VbnJlbGVhc2VkPC9zcGFuPiBnZXN0aW9uIGRlc1xyXG5cdFx0XHRcdFx0ZmljaGllcnNcclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5VbnJlbGVhc2VkPC9zcGFuPiB1cGRhdGUgJlxyXG5cdFx0XHRcdFx0ZGVsZXRlIGltYWdlXHJcblx0XHRcdFx0PC9saT5cclxuXHJcblx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlVucmVsZWFzZWQ8L3NwYW4+IEFtw6lsaW9yZXJcclxuXHRcdFx0XHRcdGFmZmljaGFnZSBzb3VzIG1lbnVcclxuXHRcdFx0XHQ8L2xpPlxyXG5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+VW5yZWxlYXNlZDwvc3Bhbj4gSW50w6lncmF0aW9uXHJcblx0XHRcdFx0XHRUaWRpb1xyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlVucmVsZWFzZWQ8L3NwYW4+IEdlc3Rpb24gZGVzXHJcblx0XHRcdFx0XHRtYWlscyBhdXRvbWF0aXF1ZXNcclxuXHRcdFx0XHQ8L2xpPlxyXG5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+VW5yZWxlYXNlZDwvc3Bhbj4gQWZmaWNoYWdlXHJcblx0XHRcdFx0XHRkdSBkYXNoYm9hcmRcclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5VbnJlbGVhc2VkPC9zcGFuPiAoR2VzdGlvblxyXG5cdFx0XHRcdFx0ZGVzIHLDqXNlcnZhdGlvbiAvIGNsaWVudHMpXHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0PC91bD5cclxuXHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD0naDQnIGNvbXBvbmVudD0naDQnPlxyXG5cdFx0XHRcdE5ldyBmdW5jdGlvbm5hbGl0eVxyXG5cdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdDx1bD5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+QWRkZWQ8L3NwYW4+IDAyLzAzLzIwMjEgLVxyXG5cdFx0XHRcdFx0MTE6MzAgLSBBZmZpY2hhZ2UgZHUgcGRmIGxvcnMgZHUgY2xpYyBwb3VyIGxhIGfDqW7DqXJhdGlvbiBkdVxyXG5cdFx0XHRcdFx0Y29udHJhdCBldCBlbnZvaSBkdSBtYWlsIGF2ZWMgbGUgY29udHJhdCBlbiBwacOoY2Ugam9pbnRlIGF1XHJcblx0XHRcdFx0XHRjbGllbnQuXHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+QWRkZWQ8L3NwYW4+IDI0LzAyLzIwMjEgLVxyXG5cdFx0XHRcdFx0MjE6NDYgLSBEYW5zIGxhIHBhcnRpZSBnw650ZSwgYWpvdXQgZCd1biA1ZW1lIG9uZ2xldCBwb3VyXHJcblx0XHRcdFx0XHRham91dGVyIGNlcnRhaW5lcyBpbmZvcm1hdGlvbnMgcGVyc29ubmFsaXPDqWVzIHN1ciBsZSBjb250cmF0XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+QWRkZWQ8L3NwYW4+IFBhcnRpZSBnZXN0aW9uXHJcblx0XHRcdFx0XHRkZXMgdXRpbGlzYXRldXJzLCBjcsOpYXRpb24sIG1vZGlmaWNhdGlvbiwgc3VwcHJlc3Npb24uXHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+QWRkZWQ8L3NwYW4+IEFmZmljaGFnZVxyXG5cdFx0XHRcdFx0Y29ycmVjdCBkZSBsJ3V0aWxpc2F0ZXVyIGNvbm5lY3TDqSBlbiBoYXV0IMOgIGRyb2l0ZSBkZVxyXG5cdFx0XHRcdFx0bCdhZG1pbiBkYXNoYm9hcmQuXHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+QWRkZWQ8L3NwYW4+IFBhZ2UgcmVzZXJ2ZXIgLVxyXG5cdFx0XHRcdFx0UmVzZXJ2YXRpb24gZm9uY3Rpb25uZWxsZSBhdmVjIGNhbGN1bCBkdSB0YXJpZiBldCBtYWlsXHJcblx0XHRcdFx0XHRlbnZvecOpIGRpcmVjdGVtZW50LlxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PkFkZGVkPC9zcGFuPiBQYWdlIHRhcmlmIC1cclxuXHRcdFx0XHRcdFNpbXVsYXRpb24gZm9uY3Rpb25uZWxsZSBzdXIgbGEgbWFqb3JpdMOpIGRlcyBjYXMuXHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+QWRkZWQ8L3NwYW4+IFJlbnZveWVyIGxlc1xyXG5cdFx0XHRcdFx0bWVzc2FnZXMgZHUgZm9ybXVsYWlyZSBkZSBjb250YWN0IGRhbnMgbCdlc3BhY2UgYWRtaW4gYXZlY1xyXG5cdFx0XHRcdFx0cGFzdGlsbGUgbm91dmVhdSBtZXNzYWdlLlxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdDwvdWw+XHJcblx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g0JyBjb21wb25lbnQ9J2g0Jz5cclxuXHRcdFx0XHRVcGRhdGVkXHJcblx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0PHVsPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5DaGFuZ2VkPC9zcGFuPiAwNC8wMy8yMDIxIC1cclxuXHRcdFx0XHRcdDE3OjAwIC0gQ29ycmVjdGlvbiBkZSBsJ2FmZmljaGFnZSBkdSBmb290ZXIgZW4gYmFzIGRlIHBhZ2VcclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5DaGFuZ2VkPC9zcGFuPiAwNC8wMy8yMDIxIC1cclxuXHRcdFx0XHRcdDE2OjAwIC0gTWlzZSDDoCBqb3VyIGRlIGxhIHBhZ2UgZGVzIGfDrnRlcywgYWZmaWNoYWdlIGRlXHJcblx0XHRcdFx0XHR0b3V0ZXMgbGVzIGluZm9ybWF0aW9uc1xyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PkNoYW5nZWQ8L3NwYW4+IDAzLzAzLzIwMjEgLVxyXG5cdFx0XHRcdFx0MjI6MzAgLSBDb250csO0bGVzIHN1ciBsYSBzb3VtaXNzaW9uIGR1IGZvcm11bGFpcmUgZGVcclxuXHRcdFx0XHRcdHLDqXNlcnZhdGlvbiBham91dMOpIGF2ZWMgcsOpY2FwaXR1bGF0aWYgZmluYWwgw6AgbWV0dHJlIGVuXHJcblx0XHRcdFx0XHRmb3JtZVxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PkNoYW5nZWQ8L3NwYW4+IDAyLzAzLzIwMjEgLVxyXG5cdFx0XHRcdFx0MTc6MDAgLSBBZmZpY2hhZ2UgZHUgbGlzdGluZyBkZXMgw6lxdWlwZW1lbnRzIGNvcnJpZ8OpXHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+Q2hhbmdlZDwvc3Bhbj4gR2VzdGlvbiBkZXNcclxuXHRcdFx0XHRcdHLDqXNlcnZhdGlvbnMgLSBUcmkgc3VyIGRhdGUgZGUgcsOpc2VydmF0aW9uIGV0IHN1ciBzdGF0dXNcclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdHsvKjxsaT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5DaGFuZ2VkPC9zcGFuPiBQYWdlIHJlc2VydmVyXHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+Q2hhbmdlZDwvc3Bhbj4gUGFnZSB0YXJpZlxyXG5cdFx0XHRcdDwvbGk+ICovfVxyXG5cdFx0XHQ8L3VsPlxyXG5cclxuXHRcdFx0PHVsPlxyXG5cdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g0JyBjb21wb25lbnQ9J2g0Jz5cclxuXHRcdFx0XHRcdFRvIGZpeGVcclxuXHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5UbyBmaXhlPC9zcGFuPiBGb3JtdWxhaXJlIGRlXHJcblx0XHRcdFx0XHRyw6lzZXJ2YXRpb24sIGVucMOpY2hlciBsYSBzb3VtaXNzaW9uIHNpIGNlcnRhaW5lcyBjb25kaXRpb25zXHJcblx0XHRcdFx0XHRuZSBzb250IHBhcyByZW1wbGllcy5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5UbyBmaXhlPC9zcGFuPiBHZXN0aW9uIGRlc1xyXG5cdFx0XHRcdFx0csOpc2VydmF0aW9ucyAtIENvcnJpZ2VyIGxlIHRyaSBzdXIgY2xpZW50IGV0IHN1ciBnw650ZVxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlRvIGZpeGU8L3NwYW4+IFLDqXNlcnZhdGlvbnMgLVxyXG5cdFx0XHRcdFx0QWZmaWNoZXIgbGUgdGFyaWYgYXZlYyBsZSByw6ljYXAgYXZhbnQgZGUgdmFsaWRlciBsYVxyXG5cdFx0XHRcdFx0csOpc2VydmF0aW9uXHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+VG8gZml4ZTwvc3Bhbj4gR2VzdGlvbiBkZXNcclxuXHRcdFx0XHRcdG1haWxlcnMgLSByw6ljdXDDqXLDqSBsZXMgdmFyaWFibGVzIHBvdXIgbGVzIGfDqXJlclxyXG5cdFx0XHRcdFx0ZHluYW1pcXVlbWVudC5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0PC9BZG1pbkhlYWRlcj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhbmdlbG9nO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9