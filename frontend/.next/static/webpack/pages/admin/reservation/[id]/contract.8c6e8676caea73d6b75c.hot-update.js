webpackHotUpdate_N_E("pages/admin/reservation/[id]/contract",{

/***/ "./actions/clientActions.js":
/*!**********************************!*\
  !*** ./actions/clientActions.js ***!
  \**********************************/
/*! exports provided: listAllClients, getClientById, removeClient, updateClient, envoiEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listAllClients", function() { return listAllClients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientById", function() { return getClientById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClient", function() { return removeClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateClient", function() { return updateClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "envoiEmail", function() { return envoiEmail; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");


var listAllClients = function listAllClients(token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/client"), {
    method: 'GET',
    headers: {
      Authorization: "Bearer ".concat(token)
    }
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
}; // export const countNouvelleReservation = () => {
// 	return fetch(`${API}/reservation/count`, {
// 		method: 'GET',
// 	})
// 		.then((response) => {
// 			return response.json();
// 		})
// 		.catch((err) => console.log(err));
// };

var getClientById = function getClientById(id, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/client/").concat(id), {
    method: 'GET',
    headers: {
      Authorization: "Bearer ".concat(token)
    }
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var removeClient = function removeClient(id, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/client/").concat(id), {
    method: 'DELETE',
    headers: {
      Authorization: "Bearer ".concat(token)
    }
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var updateClient = function updateClient(client, id, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/client/").concat(id), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: JSON.stringify(client)
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var envoiEmail = function envoiEmail(id, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/client/").concat(id, "/mailer"), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    }
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

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
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var _components_auth_Admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../components/auth/Admin */ "./components/auth/Admin.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\admin\\reservation\\[id]\\contract\\index.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createMuiTheme"])({
  palette: {
    type: 'light'
  }
});
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: theme,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 6
    }
  }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: "d-block w-100",
    src: gite.vignetteLink,
    alt: gite.nom,
    width: 500,
    height: 375,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: 10,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "h5",
    component: "h5",
    style: {
      textAlign: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, "CONTRAT DE LOCATION EN MEUBL\xC9 SAISONNIER ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 49
    }
  }), ' '), "Madame, Monsieur. Suite \xE0 votre demande, je vous adresse le pr\xE9sent contrat de location dont 1 exemplaire est \xE0 me retourner (par courrier ou mail) rev\xEAtu de votre signature et accompagn\xE9 du montant de l\u2019acompte (virement ou courrier). En esp\xE9rant avoir le plaisir de vous accueillir prochainement, recevez mes sinc\xE8res salutations.")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    direction: "row",
    justify: "space-around",
    spacing: 4,
    alignItems: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Paper"], {
    className: classes.paper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 8
    }
  }, "Entre la soci\xE9t\xE9 :"), "Si\xE9ge social ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }), "SAS WAO ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 16
    }
  }), "1 Route de Nouart ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 26
    }
  }), "08240 Foss\xE9, FRANCE ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 28
    }
  }), "Courrier :", ' ', __jsx("a", {
    href: "mailto:contact@gites-wao.fr",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 8
    }
  }, "contact@gites-wao.fr"), ' ', __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 8
    }
  }), "Site internet :", ' ', __jsx("a", {
    href: "http://www.gites-wao.fr",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 8
    }
  }, "http://www.gites-wao.fr"), ' ', __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 8
    }
  }), "Tel : +33 (0)3 24 30 08 95 ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 35
    }
  }), "IBAN : FR76 1020 6084 0398 3877 2925 093 ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 49
    }
  }), "BIC : AGRIFRPP802 ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 26
    }
  }), "TITULAIRE : SAS WAO ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 28
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Paper"], {
    className: classes.paper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 8
    }
  }, "Et le locataire :"), "Qualit\xE9 : ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 18
    }
  }, client.civilite), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 8
    }
  }), "Pr\xE9nom et Nom :", ' ', __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 8
    }
  }, client.nom, " ", client.prenom), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 8
    }
  }), "Adresse : ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 18
    }
  }, client.adresse), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 8
    }
  }), "CP & Ville :", ' ', __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 8
    }
  }, client.cp, " ", client.ville), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 8
    }
  }), "Pays : ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  }, client.pays), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 8
    }
  }), "T\xE9l\xE9phone : ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 20
    }
  }, client.tel), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 8
    }
  }), "Courrier : ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 19
    }
  }, client.mail), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 8
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 8
    }
  }, "Pour la taxe de S\xE9jour nombre de personnes :"), "Taxables : ", reservation.nbPers - reservation.nbEnf, ' ', "Non taxables : ", reservation.nbEnf, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 8
    }
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Paper"], {
    className: classes.paperTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9jbGllbnRBY3Rpb25zLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9hZG1pbi9yZXNlcnZhdGlvbi8vY29udHJhY3QvaW5kZXguanMiXSwibmFtZXMiOlsibGlzdEFsbENsaWVudHMiLCJ0b2tlbiIsImZldGNoIiwiQVBJIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImdldENsaWVudEJ5SWQiLCJpZCIsInJlbW92ZUNsaWVudCIsInVwZGF0ZUNsaWVudCIsImNsaWVudCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZW52b2lFbWFpbCIsInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwidHlwZSIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwiZmxleEdyb3ciLCJ3aWR0aCIsIm1pbkhlaWdodCIsInBhcGVyIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwidGV4dEFsaWduIiwicGFwZXJUaXRsZSIsIlJlc2VydmF0aW9uSWQiLCJyZXNlcnZhdGlvbiIsImdpdGUiLCJjbGFzc2VzIiwidmlnbmV0dGVMaW5rIiwibm9tIiwiY2l2aWxpdGUiLCJwcmVub20iLCJhZHJlc3NlIiwiY3AiLCJ2aWxsZSIsInBheXMiLCJ0ZWwiLCJtYWlsIiwibmJQZXJzIiwibmJFbmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFDeEMsU0FBT0MsdURBQUssV0FBSUMsMkNBQUosY0FBa0I7QUFDN0JDLFVBQU0sRUFBRSxLQURxQjtBQUU3QkMsV0FBTyxFQUFFO0FBQ1JDLG1CQUFhLG1CQUFZTCxLQUFa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O0FBQUE7QUFBQTtBQUFBLEtBQU9oQyxNQUFNLENBQUNpQyxJQUFkLENBcEJaLEVBcUJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQkQsRUFzQkMsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVEQXRCRCxpQkF5QmFaLFdBQVcsQ0FBQ2EsTUFBWixHQUFxQmIsV0FBVyxDQUFDYyxLQXpCOUMsRUF5QnFELEdBekJyRCxxQkEwQmlCZCxXQUFXLENBQUNjLEtBMUI3QixFQTJCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0JELENBREQsQ0E3QkQsQ0EvQkQsRUE0RkMsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyx1REFBRDtBQUFPLGFBQVMsRUFBRVosT0FBTyxDQUFDSixVQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0E1RkQsQ0FERCxDQUREO0FBb0dBLENBdkdEOztHQUFNQyxhO1VBQ1dYLFM7OztLQURYVyxhOztBQTJIU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24vW2lkXS9jb250cmFjdC44YzZlODY3NmNhZWE3M2Q2Yjc1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RBbGxDbGllbnRzID0gKHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vY2xpZW50YCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgY291bnROb3V2ZWxsZVJlc2VydmF0aW9uID0gKCkgPT4ge1xyXG4vLyBcdHJldHVybiBmZXRjaChgJHtBUEl9L3Jlc2VydmF0aW9uL2NvdW50YCwge1xyXG4vLyBcdFx0bWV0aG9kOiAnR0VUJyxcclxuLy8gXHR9KVxyXG4vLyBcdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbi8vIFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbi8vIFx0XHR9KVxyXG4vLyBcdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENsaWVudEJ5SWQgPSAoaWQsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vY2xpZW50LyR7aWR9YCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2xpZW50ID0gKGlkLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L2NsaWVudC8ke2lkfWAsIHtcclxuXHRcdG1ldGhvZDogJ0RFTEVURScsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNsaWVudCA9IChjbGllbnQsIGlkLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L2NsaWVudC8ke2lkfWAsIHtcclxuXHRcdG1ldGhvZDogJ1BVVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KGNsaWVudCksXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnZvaUVtYWlsID0gKGlkLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L2NsaWVudC8ke2lkfS9tYWlsZXJgLCB7XHJcblx0XHRtZXRob2Q6ICdQVVQnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuIiwiaW1wb3J0IHsgZ2V0Q2xpZW50QnlJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2FjdGlvbnMvY2xpZW50QWN0aW9ucyc7XHJcbmltcG9ydCB7IGxpc3RHaXRlQnlJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5pbXBvcnQgeyBhZmZpY2hlUmVzZXJ2YXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9hY3Rpb25zL3Jlc2VydmF0aW9uQWN0aW9ucyc7XHJcbmltcG9ydCBBZG1pbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2F1dGgvQWRtaW4nO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IHsgR3JpZCwgUGFwZXIsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xyXG5cdHBhbGV0dGU6IHtcclxuXHRcdHR5cGU6ICdsaWdodCcsXHJcblx0fSxcclxufSk7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRyb290OiB7XHJcblx0XHRmbGV4R3JvdzogMSxcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRtaW5IZWlnaHQ6ICc1MHZoJyxcclxuXHR9LFxyXG5cdHBhcGVyOiB7XHJcblx0XHRoZWlnaHQ6IDIzMCxcclxuXHRcdHdpZHRoOiA1MDAsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjZGRkZGRkJyxcclxuXHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXHJcblx0fSxcclxuXHRwYXBlclRpdGxlOiB7XHJcblx0XHRoZWlnaHQ6IDMwLFxyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJyNjY2NjY2MnLFxyXG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5jb25zdCBSZXNlcnZhdGlvbklkID0gKHsgcmVzZXJ2YXRpb24sIGNsaWVudCwgZ2l0ZSB9KSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuXHRcdFx0XHQ8Q3NzQmFzZWxpbmUgLz5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+PC9kaXY+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG5cdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17Mn0+XHJcblx0XHRcdFx0XHRcdDxJbWFnZVxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZC1ibG9jayB3LTEwMCdcclxuXHRcdFx0XHRcdFx0XHRzcmM9e2dpdGUudmlnbmV0dGVMaW5rfVxyXG5cdFx0XHRcdFx0XHRcdGFsdD17Z2l0ZS5ub219XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg9ezUwMH1cclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ9ezM3NX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEwfT5cclxuXHRcdFx0XHRcdFx0PFR5cG9ncmFwaHlcclxuXHRcdFx0XHRcdFx0XHR2YXJpYW50PSdoNSdcclxuXHRcdFx0XHRcdFx0XHRjb21wb25lbnQ9J2g1J1xyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcblx0XHRcdFx0XHRcdFx0Q09OVFJBVCBERSBMT0NBVElPTiBFTiBNRVVCTMOJIFNBSVNPTk5JRVIgPGJyIC8+eycgJ31cclxuXHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRNYWRhbWUsIE1vbnNpZXVyLiBTdWl0ZSDDoCB2b3RyZSBkZW1hbmRlLCBqZSB2b3VzIGFkcmVzc2VcclxuXHRcdFx0XHRcdFx0bGUgcHLDqXNlbnQgY29udHJhdCBkZSBsb2NhdGlvbiBkb250IDEgZXhlbXBsYWlyZSBlc3Qgw6BcclxuXHRcdFx0XHRcdFx0bWUgcmV0b3VybmVyIChwYXIgY291cnJpZXIgb3UgbWFpbCkgcmV2w6p0dSBkZSB2b3RyZVxyXG5cdFx0XHRcdFx0XHRzaWduYXR1cmUgZXQgYWNjb21wYWduw6kgZHUgbW9udGFudCBkZSBs4oCZYWNvbXB0ZVxyXG5cdFx0XHRcdFx0XHQodmlyZW1lbnQgb3UgY291cnJpZXIpLiBFbiBlc3DDqXJhbnQgYXZvaXIgbGUgcGxhaXNpciBkZVxyXG5cdFx0XHRcdFx0XHR2b3VzIGFjY3VlaWxsaXIgcHJvY2hhaW5lbWVudCwgcmVjZXZleiBtZXMgc2luY8OocmVzXHJcblx0XHRcdFx0XHRcdHNhbHV0YXRpb25zLlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHJcblx0XHRcdFx0PEdyaWRcclxuXHRcdFx0XHRcdGNvbnRhaW5lclxyXG5cdFx0XHRcdFx0ZGlyZWN0aW9uPSdyb3cnXHJcblx0XHRcdFx0XHRqdXN0aWZ5PSdzcGFjZS1hcm91bmQnXHJcblx0XHRcdFx0XHRzcGFjaW5nPXs0fVxyXG5cdFx0XHRcdFx0YWxpZ25JdGVtcz0nY2VudGVyJz5cclxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0+XHJcblx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5PkVudHJlIGxhIHNvY2nDqXTDqSA6PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdFNpw6lnZSBzb2NpYWwgPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0U0FTIFdBTyA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHQxIFJvdXRlIGRlIE5vdWFydCA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHQwODI0MCBGb3Nzw6ksIEZSQU5DRSA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRDb3VycmllciA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPSdtYWlsdG86Y29udGFjdEBnaXRlcy13YW8uZnInPlxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGFjdEBnaXRlcy13YW8uZnJcclxuXHRcdFx0XHRcdFx0XHQ8L2E+eycgJ31cclxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRTaXRlIGludGVybmV0IDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9J2h0dHA6Ly93d3cuZ2l0ZXMtd2FvLmZyJz5cclxuXHRcdFx0XHRcdFx0XHRcdGh0dHA6Ly93d3cuZ2l0ZXMtd2FvLmZyXHJcblx0XHRcdFx0XHRcdFx0PC9hPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0VGVsIDogKzMzICgwKTMgMjQgMzAgMDggOTUgPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0SUJBTiA6IEZSNzYgMTAyMCA2MDg0IDAzOTggMzg3NyAyOTI1IDA5MyA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRCSUMgOiBBR1JJRlJQUDgwMiA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRUSVRVTEFJUkUgOiBTQVMgV0FPIDxiciAvPlxyXG5cdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PEdyaWQgaXRlbT5cclxuXHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4+RXQgbGUgbG9jYXRhaXJlIDo8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0UXVhbGl0w6kgOiA8c3Bhbj57Y2xpZW50LmNpdmlsaXRlfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRQcsOpbm9tIGV0IE5vbSA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdHtjbGllbnQubm9tfSB7Y2xpZW50LnByZW5vbX1cclxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0QWRyZXNzZSA6IDxzcGFuPntjbGllbnQuYWRyZXNzZX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0Q1AgJiBWaWxsZSA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdHtjbGllbnQuY3B9IHtjbGllbnQudmlsbGV9XHJcblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFBheXMgOiA8c3Bhbj57Y2xpZW50LnBheXN9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFTDqWzDqXBob25lIDogPHNwYW4+e2NsaWVudC50ZWx9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdENvdXJyaWVyIDogPHNwYW4+e2NsaWVudC5tYWlsfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHRcdFBvdXIgbGEgdGF4ZSBkZSBTw6lqb3VyIG5vbWJyZSBkZSBwZXJzb25uZXMgOlxyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHRUYXhhYmxlcyA6IHtyZXNlcnZhdGlvbi5uYlBlcnMgLSByZXNlcnZhdGlvbi5uYkVuZn17JyAnfVxyXG5cdFx0XHRcdFx0XHRcdE5vbiB0YXhhYmxlcyA6IHtyZXNlcnZhdGlvbi5uYkVuZn1cclxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyVGl0bGV9PjwvUGFwZXI+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8L1RoZW1lUHJvdmlkZXI+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcblx0Y29uc3QgcmVzMSA9IGF3YWl0IGFmZmljaGVSZXNlcnZhdGlvbihjb250ZXh0LnBhcmFtcy5pZCk7XHJcblx0Y29uc3QgcmVzZXJ2YXRpb24gPSBhd2FpdCByZXMxO1xyXG5cdGNvbnNvbGUubG9nKCdyZXNlcnZhdGlvbicsIHJlc2VydmF0aW9uKTtcclxuXHQvLyBjb25zdCByZXMyID0gYXdhaXQgbGlzdEdpdGVCeUlkKHJlc2VydmF0aW9uLmdpdGUpO1xyXG5cdC8vIGNvbnN0IGdpdGUgPSBhd2FpdCByZXMyO1xyXG5cdC8vIGNvbnN0IHJlczMgPSBhd2FpdCBnZXRDbGllbnRCeUlkKHJlc2VydmF0aW9uLmNsaWVudCwgdG9rZW4pO1xyXG5cdC8vIGNvbnN0IGNsaWVudCA9IGF3YWl0IHJlczM7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRyZXNlcnZhdGlvbixcclxuXHRcdFx0Ly8gY2xpZW50LFxyXG5cdFx0XHQvLyBnaXRlLFxyXG5cdFx0fSxcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlcnZhdGlvbklkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9