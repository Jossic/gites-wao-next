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
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\admin\\reservation\\[id]\\contract\\index.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createMuiTheme"])({
  palette: {
    type: 'light'
  }
});

var ReservationId = function ReservationId(_ref) {
  _s();

  var reservation = _ref.reservation,
      client = _ref.client,
      gite = _ref.gite;
  var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
    return {
      root: {
        flexGrow: 1,
        width: '100%'
      },
      paper: {
        height: 230,
        width: 480,
        backgroundColor: '#dddddd',
        textAlign: 'center'
      },
      paperTitle: {
        height: 30,
        marginTop: '10px',
        width: '100%',
        backgroundColor: '#cccccc',
        textAlign: 'center'
      },
      paperTitleColor: {
        height: 30,
        marginTop: '10px',
        marginBottom: '10px',
        width: '100%',
        backgroundColor: "".concat(gite.couleur1),
        textAlign: 'center'
      },
      typoSouligne: {
        fontWeight: 'bold',
        fontSize: '18px',
        marginBottom: '10px',
        textDecoration: 'underline'
      }
    };
  });
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: theme,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    spacing: 1,
    alignItems: "flex-start",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
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
      lineNumber: 66,
      columnNumber: 8
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 10,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
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
      lineNumber: 75,
      columnNumber: 8
    }
  }, "CONTRAT DE LOCATION EN MEUBL\xC9 SAISONNIER ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 50
    }
  }), ' '), "Madame, Monsieur. Suite \xE0 votre demande, je vous adresse le pr\xE9sent contrat de location dont 1 exemplaire est \xE0 me retourner (par courrier ou mail) rev\xEAtu de votre signature et accompagn\xE9 du montant de l\u2019acompte (virement ou courrier). En esp\xE9rant avoir le plaisir de vous accueillir prochainement, recevez mes sinc\xE8res salutations.")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    direction: "row",
    justify: "space-between",
    spacing: 4,
    alignItems: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, "Entre la soci\xE9t\xE9 :"), "Si\xE9ge social ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 22
    }
  }), "SAS WAO ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }), "1 Route de Nouart ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 27
    }
  }), "08240 Foss\xE9, FRANCE ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 29
    }
  }), "Courrier :", ' ', __jsx("a", {
    href: "mailto:contact@gites-wao.fr",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, "contact@gites-wao.fr"), ' ', __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }), "Site internet :", ' ', __jsx("a", {
    href: "http://www.gites-wao.fr",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, "http://www.gites-wao.fr"), ' ', __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }), "Tel : +33 (0)3 24 30 08 95 ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 36
    }
  }), "IBAN : FR76 1020 6084 0398 3877 2925 093 ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 50
    }
  }), "BIC : AGRIFRPP802 ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 27
    }
  }), "TITULAIRE : SAS WAO ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 29
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 8
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, "Et le locataire :"), " ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 40
    }
  }), "Qualit\xE9 : ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 19
    }
  }, client.civilite), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }), "Pr\xE9nom et Nom :", ' ', __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }, client.nom, " ", client.prenom), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }), "Adresse : ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 19
    }
  }, client.adresse), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }), "CP & Ville :", ' ', __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, client.cp, " ", client.ville), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }), "Pays : ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 16
    }
  }, client.pays), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }), "T\xE9l\xE9phone : ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }, client.tel), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }), "Courrier : ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 20
    }
  }, client.mail), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  }, "Pour la taxe de S\xE9jour nombre de personnes :"), "Taxables :", ' ', reservation.nbPers - reservation.nbEnf, " - Non taxables : ", reservation.nbEnf, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 9
    }
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }
  }, "CONDITIONS DE LOCATION")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }
  }, "D\xE9signation des lieux et descriptif du logement")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 6
    }
  }, __jsx("p", {
    className: classes.lineHeight,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }, gite.ctDesignationTitre), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    className: classes.typoSouligne,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }
  }, "Principales caract\xE9ristiques :"), __jsx("div", {
    className: "editor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }
  }, react_render_html__WEBPACK_IMPORTED_MODULE_6___default()(gite.ctPrincipCarac)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    className: classes.typoSouligne,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }
  }, "Situation du logement dans la localit\xE9 :"), __jsx("div", {
    className: "editor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }
  }, react_render_html__WEBPACK_IMPORTED_MODULE_6___default()(gite.ctSituLog)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    className: classes.typoSouligne,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 7
    }
  }, "Description du logement :"), __jsx("div", {
    className: "editor",
    style: {
      marginBottom: '70px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }
  }, react_render_html__WEBPACK_IMPORTED_MODULE_6___default()(gite.ctDescLog)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 9
    }
  }, "Dur\xE9e de la location :")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 8
    }
  }, "La pr\xE9sente location est consentie et accept\xE9e pour une dur\xE9e de : 2 nuit\xE9es Elle commence le vendredi 27 ao\xFBt 2021 \xE0 partir de 17h et se terminera le dimanche 29 ao\xFBt 2021 au plus tard \xE0 17h Elle ne pourra en aucun cas \xEAtre prorog\xE9e, sauf accord \xE9crit et pr\xE9alable du propri\xE9taire. Pour nous permettre de nous organiser, (le g\xEEte est \xE0 4 km de l\u2019habitation principale du propri\xE9taire), vous devez nous avertir quelques jours \xE0 l'avance de votre heure d'arriv\xE9e (par mail ou t\xE9l\xE9phone).")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 8
    }
  }, "Prix en Euros")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 9
    }
  }, "La pr\xE9sente location saisonni\xE8re a lieu moyennant la somme de (minimum fixe de base)"), __jsx("span", {
    style: {
      "float": 'right',
      backgroundColor: 'yellow'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 9
    }
  }, reservation.totalTarifBase, ",00 \u20AC")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 9
    }
  }, "Tarif par personne suppl\xE9mentaire au-del\xE0 du minimum fixe : ", gite.supplementParPers, " \u20AC par nuit et par personne, soit :", ' ', __jsx("span", {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 10
    }
  }, reservation.nbPersSup)), __jsx("span", {
    style: {
      "float": 'right',
      backgroundColor: 'yellow'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 9
    }
  }, reservation.totalTarifSuppl, ",00 \u20AC")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 9
    }
  }, "Il comprend les charges (t\xE9l\xE9vision, eau, \xE9lectricit\xE9), le m\xE9nage et la fourniture des draps et taies")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 9
    }
  }, "Suppl\xE9ment par animal 3 \u20AC par jour."), __jsx("span", {
    style: {
      "float": 'right',
      backgroundColor: 'yellow'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 9
    }
  }, "Forfait lits faits \xE0 l'arriv\xE9e :", ' ', gite.ftLit, "\u20AC/personne"), __jsx("span", {
    style: {
      "float": 'right',
      backgroundColor: 'yellow'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 9
    }
  }, reservation.totalFtLit, ",00 \u20AC")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 9
    }
  }, "Taxes diverses calcul\xE9es sur Nbre de personnes de + de 18 ans :", ' ', reservation.nbEnf, " Nbre nuit\xE9es :", reservation.nbNuites), __jsx("span", {
    style: {
      "float": 'right',
      backgroundColor: 'yellow'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'right'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 9
    }
  }, "R\xE9glement \xE0 transmettre avec votre contrat sign\xE9 (selon les modalit\xE9s ci-apr\xE8s) \xE0 titre d'acompte :"), __jsx("span", {
    style: {
      "float": 'right',
      backgroundColor: 'yellow'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 9
    }
  }, reservation.resteAPayer, ",00 \u20AC")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 9
    }
  }, "soit par virement (IBAN dans partie soci\xE9t\xE9), ou ch\xE8que \xE0 l'ordre de SAS WAO, ou ch\xE8ques vacances (envoi au si\xE8ge social)"), __jsx("span", {
    style: {
      "float": 'right',
      backgroundColor: 'yellow'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 9
    }
  }, "Nous demandons un envoi en recommand\xE9 uniquement pour les ch\xE8ques vacances."), __jsx("span", {
    style: {
      "float": 'right',
      backgroundColor: 'yellow'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 9
    }
  }, "Apr\xE8s votre s\xE9jour un scan de la caution d\xE9truite vous sera transmis par courriel, sauf en cas de d\xE9g\xE2ts."), __jsx("span", {
    style: {
      "float": 'right',
      backgroundColor: 'yellow'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 9
    }
  }, reservation.mtCaution, ",00 \u20AC")), __jsx("span", {
    style: {
      fontWeight: 'bold',
      textDecoration: 'underline'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 8
    }
  }, "La r\xE9servation deviendra effective d\xE8s lors que le locataire aura retourn\xE9 un exemplaire dat\xE9 et sign\xE9 du pr\xE9sent contrat avant le 04/05/2020 accompagn\xE9 du ch\xE8que. Au-del\xE0 de cette date, la r\xE9servation sera caduque et le propri\xE9taire disposera librement du logement.")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 8
    }
  }, "Assurances")), __jsx("p", {
    style: {
      fontSize: '16px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 7
    }
  }, "Le locataire doit v\xE9rifier si son contrat d\u2019habitation principale pr\xE9voit l\u2019extension vill\xE9giature en responsabilit\xE9 civile. Dans l\u2019hypoth\xE8se contraire, il peut intervenir aupr\xE8s de sa compagnie d\u2019assurance et r\xE9clamer l\u2019extension de la garantie pour la p\xE9riode de la location, ou bien souscrire un contrat particulier au titre des clauses vill\xE9giature. Derri\xE8re le g\xEEte se trouve un ruisseau et un \xE9tang, par mesure de s\xE9curit\xE9, Les enfants devront toujours \xEAtre accompagn\xE9s d\u2019un adulte et le propri\xE9taire ne peut en aucun cas \xEAtre tenu pour responsable des accidents qui pourraient y survenir. De m\xEAme pour l\u2019aire de jeu du g\xEEte, les enfants qui l\u2019utilisent doivent \xEAtre sous la surveillance des parents."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 8
    }
  }, "Etat des lieux et inventaire")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 7
    }
  }, "Le document pour l\u2019\xE9tat des lieux se trouve dans le cahier d\u2019explication du g\xEEte. Ce contrat fait office d'inventaire. Pour \xE9viter toute contestation le locataire voudra bien contr\xF4ler et signaler toute anomalie dans les 24 heures. Pass\xE9 ce d\xE9lai, les biens lou\xE9s seront consid\xE9r\xE9s comme exempts de dommages \xE0 l\u2019entr\xE9e du locataire. Celui-ci sera responsable de toute d\xE9t\xE9rioration ou perte pouvant survenir \xE0 ce mobilier ainsi qu\u2019aux divers mat\xE9riels de l\u2019espace piscine et d\xE9tente."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 8
    }
  }, "Jouissance des lieux")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 7
    }
  }, "Le locataire entretiendra les lieux lou\xE9s et les rendra en bon \xE9tat de propret\xE9. Il veillera \xE0 ce que la tranquillit\xE9 du voisinage ne soit pas troubl\xE9e. La sous location est interdite au preneur, m\xEAme \xE0 titre gratuit, sous peine de r\xE9siliation du contrat. L\u2019installation de tentes ou le stationnement de caravanes sur le terrain de la propri\xE9t\xE9 lou\xE9e est interdit, sauf accord pr\xE9alable du propri\xE9taire. L\u2019utilisateur s\u2019engage \xE0 ne pas utiliser le service WI-FI \xE0 des fins illicites, interdites ou ill\xE9gales (entre autres respect de la loi Hadopi). Le loueur, \xE0 la demande de tiers et/ou de toute autorit\xE9 comp\xE9tente, se r\xE9serve le droit de suspendre temporairement ou de mani\xE8re d\xE9finitive toute utilisation du service sans que sa responsabilit\xE9 ne puisse \xEAtre recherch\xE9e et sans que l\u2019utilisateur ne puisse revendiquer une quelconque indemnisation ou r\xE9paration. En aucun cas le loueur ne peut \xEAtre tenue de r\xE9parer les pr\xE9judices directs et/ou indirects subis du fait de l\u2019utilisation du service par l\u2019utilisateur, ce dernier reconnaissant que le loueur ne peut pas \xEAtre responsable des contenus auquel acc\xE8de l\u2019utilisateur et que l\u2019accessibilit\xE9 aux contenus et services n\u2019est pas garantie et peut \xEAtre suspendue sans pr\xE9avis."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 8
    }
  }, "Clause r\xE9solutoire")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 7
    }
  }, "A d\xE9faut de paiement aux \xE9ch\xE9ances fix\xE9es ou en cas d\u2019inex\xE9cution d\u2019une des clauses du pr\xE9sent engagement et cinq jours francs apr\xE8s une simple sommation par lettre recommand\xE9e rest\xE9e infructueuse, le pr\xE9sent contrat sera imm\xE9diatement r\xE9sili\xE9 et le bailleur pourra se pr\xE9valoir de l\u2019article 1590 du Code civil pour conserver les acomptes vers\xE9s \xE0 titre des premiers dommages-int\xE9r\xEAts."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 8
    }
  }, "Annulation")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 7
    }
  }, "La signature du contrat engage les deux parties de fa\xE7on d\xE9finitive. Si le locataire renonce \xE0 la location 60 jours avant l\u2019arriv\xE9e, l\u2019acompte est rembours\xE9. Entre 1 jour et 60 jours si nous r\xE9ussissons \xE0 relouer, l\u2019acompte est \xE9galement rembours\xE9. Sinon l\u2019acompte est perdu."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 8
    }
  }, "Election de domicile")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 7
    }
  }, "Pour l\u2019ex\xE9cution des pr\xE9sentes, le propri\xE9taire et le locataire font \xE9lection de domicile dans leurs domiciles respectifs. Toutefois en cas de litige, le tribunal des lieux lou\xE9s sera seul comp\xE9tent.")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    direction: "row",
    justify: "space-between",
    spacing: 4,
    alignItems: "flex-end",
    style: {
      marginTop: '20px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 8
    }
  }, "Fait en deux exemplaires \xE0 Foss\xE9 le ", Date.now()), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494,
      columnNumber: 8
    }
  }, "Signature du propri\xE9taire,")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 8
    }
  }, "J\u2019ai pris connaissance des conditions de location ci-dessus"), __jsx("p", {
    style: {
      marginBottom: '20px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 8
    }
  }, "Date :"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 8
    }
  }, "Signature du locataire (pr\xE9c\xE9d\xE9 de la mention lu et approuv\xE9)"))))));
};

_s(ReservationId, "8g5FPXexvSEOsxdmU7HicukHGqY=", true);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24vL2NvbnRyYWN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwidHlwZSIsIlJlc2VydmF0aW9uSWQiLCJyZXNlcnZhdGlvbiIsImNsaWVudCIsImdpdGUiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImZsZXhHcm93Iiwid2lkdGgiLCJwYXBlciIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInRleHRBbGlnbiIsInBhcGVyVGl0bGUiLCJtYXJnaW5Ub3AiLCJwYXBlclRpdGxlQ29sb3IiLCJtYXJnaW5Cb3R0b20iLCJjb3VsZXVyMSIsInR5cG9Tb3VsaWduZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsInRleHREZWNvcmF0aW9uIiwiY2xhc3NlcyIsInZpZ25ldHRlTGluayIsIm5vbSIsImNpdmlsaXRlIiwicHJlbm9tIiwiYWRyZXNzZSIsImNwIiwidmlsbGUiLCJwYXlzIiwidGVsIiwibWFpbCIsIm5iUGVycyIsIm5iRW5mIiwibGluZUhlaWdodCIsImN0RGVzaWduYXRpb25UaXRyZSIsInJlbmRlckhUTUwiLCJjdFByaW5jaXBDYXJhYyIsImN0U2l0dUxvZyIsImN0RGVzY0xvZyIsImxpbmVIZWlnaHRQIiwidG90YWxUYXJpZkJhc2UiLCJzdXBwbGVtZW50UGFyUGVycyIsImNvbG9yIiwibmJQZXJzU3VwIiwidG90YWxUYXJpZlN1cHBsIiwiZnRMaXQiLCJ0b3RhbEZ0TGl0IiwibmJOdWl0ZXMiLCJyZXN0ZUFQYXllciIsIm10Q2F1dGlvbiIsIkRhdGUiLCJub3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQywrRUFBYyxDQUFDO0FBQzVCQyxTQUFPLEVB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YUFBUyxNQURWO0FBRUMsYUFBUyxFQUFDLEtBRlg7QUFHQyxXQUFPLEVBQUMsZUFIVDtBQUlDLFdBQU8sRUFBRSxDQUpWO0FBS0MsY0FBVSxFQUFDLFVBTFo7QUFNQyxTQUFLLEVBQUU7QUFBRTNCLGVBQVMsRUFBRTtBQUFiLEtBTlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9DLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbURBQ3NDc0MsSUFBSSxDQUFDQyxHQUFMLEVBRHRDLENBREQsRUFJQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQUpELENBUEQsRUFhQyxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdFQURELEVBS0M7QUFBRyxTQUFLLEVBQUU7QUFBRXJDLGtCQUFZLEVBQUU7QUFBaEIsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEQsRUFNQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlGQU5ELENBYkQsQ0FwYUQsQ0FIRCxDQURELENBREQ7QUFzY0EsQ0ExZUQ7O0dBQU1oQixhOztLQUFBQSxhOztBQStmU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24vW2lkXS9jb250cmFjdC40NjE1NGE4NjgyYzQ1ZDM3ZDFmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHRhZmZpY2hlQ2xpZW50LFxyXG5cdGdldENsaWVudEJ5SWQsXHJcbn0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vYWN0aW9ucy9jbGllbnRBY3Rpb25zJztcclxuaW1wb3J0IHsgbGlzdEdpdGVCeUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCB7IGFmZmljaGVSZXNlcnZhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2FjdGlvbnMvcmVzZXJ2YXRpb25BY3Rpb25zJztcclxuaW1wb3J0IEFkbWluIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYXV0aC9BZG1pbic7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgeyBHcmlkLCBQYXBlciwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHJlbmRlckhUTUwgZnJvbSAncmVhY3QtcmVuZGVyLWh0bWwnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcclxuXHRwYWxldHRlOiB7XHJcblx0XHR0eXBlOiAnbGlnaHQnLFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuY29uc3QgUmVzZXJ2YXRpb25JZCA9ICh7IHJlc2VydmF0aW9uLCBjbGllbnQsIGdpdGUgfSkgPT4ge1xyXG5cdGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdFx0cm9vdDoge1xyXG5cdFx0XHRmbGV4R3JvdzogMSxcclxuXHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdH0sXHJcblx0XHRwYXBlcjoge1xyXG5cdFx0XHRoZWlnaHQ6IDIzMCxcclxuXHRcdFx0d2lkdGg6IDQ4MCxcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiAnI2RkZGRkZCcsXHJcblx0XHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXHJcblx0XHR9LFxyXG5cdFx0cGFwZXJUaXRsZToge1xyXG5cdFx0XHRoZWlnaHQ6IDMwLFxyXG5cdFx0XHRtYXJnaW5Ub3A6ICcxMHB4JyxcclxuXHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiAnI2NjY2NjYycsXHJcblx0XHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXHJcblx0XHR9LFxyXG5cdFx0cGFwZXJUaXRsZUNvbG9yOiB7XHJcblx0XHRcdGhlaWdodDogMzAsXHJcblx0XHRcdG1hcmdpblRvcDogJzEwcHgnLFxyXG5cdFx0XHRtYXJnaW5Cb3R0b206ICcxMHB4JyxcclxuXHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBgJHtnaXRlLmNvdWxldXIxfWAsXHJcblx0XHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXHJcblx0XHR9LFxyXG5cdFx0dHlwb1NvdWxpZ25lOiB7XHJcblx0XHRcdGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuXHRcdFx0Zm9udFNpemU6ICcxOHB4JyxcclxuXHRcdFx0bWFyZ2luQm90dG9tOiAnMTBweCcsXHJcblx0XHRcdHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcclxuXHRcdH0sXHJcblx0fSkpO1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcblx0XHRcdFx0PENzc0Jhc2VsaW5lIC8+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG5cdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9IGFsaWduSXRlbXM9J2ZsZXgtc3RhcnQnPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsyfT5cclxuXHRcdFx0XHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZC1ibG9jayB3LTEwMCdcclxuXHRcdFx0XHRcdFx0XHRcdHNyYz17Z2l0ZS52aWduZXR0ZUxpbmt9XHJcblx0XHRcdFx0XHRcdFx0XHRhbHQ9e2dpdGUubm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg9ezUwMH1cclxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodD17Mzc1fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTB9PlxyXG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5XHJcblx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdoNSdcclxuXHRcdFx0XHRcdFx0XHRcdGNvbXBvbmVudD0naDUnXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0Q09OVFJBVCBERSBMT0NBVElPTiBFTiBNRVVCTMOJIFNBSVNPTk5JRVIgPGJyIC8+eycgJ31cclxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0TWFkYW1lLCBNb25zaWV1ci4gU3VpdGUgw6Agdm90cmUgZGVtYW5kZSwgamUgdm91c1xyXG5cdFx0XHRcdFx0XHRcdGFkcmVzc2UgbGUgcHLDqXNlbnQgY29udHJhdCBkZSBsb2NhdGlvbiBkb250IDFcclxuXHRcdFx0XHRcdFx0XHRleGVtcGxhaXJlIGVzdCDDoCBtZSByZXRvdXJuZXIgKHBhciBjb3VycmllciBvdSBtYWlsKVxyXG5cdFx0XHRcdFx0XHRcdHJldsOqdHUgZGUgdm90cmUgc2lnbmF0dXJlIGV0IGFjY29tcGFnbsOpIGR1IG1vbnRhbnRcclxuXHRcdFx0XHRcdFx0XHRkZSBs4oCZYWNvbXB0ZSAodmlyZW1lbnQgb3UgY291cnJpZXIpLiBFbiBlc3DDqXJhbnRcclxuXHRcdFx0XHRcdFx0XHRhdm9pciBsZSBwbGFpc2lyIGRlIHZvdXMgYWNjdWVpbGxpciBwcm9jaGFpbmVtZW50LFxyXG5cdFx0XHRcdFx0XHRcdHJlY2V2ZXogbWVzIHNpbmPDqHJlcyBzYWx1dGF0aW9ucy5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cclxuXHRcdFx0XHRcdDxHcmlkXHJcblx0XHRcdFx0XHRcdGNvbnRhaW5lclxyXG5cdFx0XHRcdFx0XHRkaXJlY3Rpb249J3JvdydcclxuXHRcdFx0XHRcdFx0anVzdGlmeT0nc3BhY2UtYmV0d2VlbidcclxuXHRcdFx0XHRcdFx0c3BhY2luZz17NH1cclxuXHRcdFx0XHRcdFx0YWxpZ25JdGVtcz0nY2VudGVyJz5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5PkVudHJlIGxhIHNvY2nDqXTDqSA6PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdFx0U2nDqWdlIHNvY2lhbCA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFNBUyBXQU8gPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQxIFJvdXRlIGRlIE5vdWFydCA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDA4MjQwIEZvc3PDqSwgRlJBTkNFIDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0Q291cnJpZXIgOnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPSdtYWlsdG86Y29udGFjdEBnaXRlcy13YW8uZnInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250YWN0QGdpdGVzLXdhby5mclxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFNpdGUgaW50ZXJuZXQgOnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPSdodHRwOi8vd3d3LmdpdGVzLXdhby5mcic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdGh0dHA6Ly93d3cuZ2l0ZXMtd2FvLmZyXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0VGVsIDogKzMzICgwKTMgMjQgMzAgMDggOTUgPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRJQkFOIDogRlI3NiAxMDIwIDYwODQgMDM5OCAzODc3IDI5MjUgMDkzIDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0QklDIDogQUdSSUZSUFA4MDIgPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRUSVRVTEFJUkUgOiBTQVMgV0FPIDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPkV0IGxlIGxvY2F0YWlyZSA6PC9zcGFuPiA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFF1YWxpdMOpIDogPHNwYW4+e2NsaWVudC5jaXZpbGl0ZX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFByw6lub20gZXQgTm9tIDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtjbGllbnQubm9tfSB7Y2xpZW50LnByZW5vbX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0QWRyZXNzZSA6IDxzcGFuPntjbGllbnQuYWRyZXNzZX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdENQICYgVmlsbGUgOnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2NsaWVudC5jcH0ge2NsaWVudC52aWxsZX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0UGF5cyA6IDxzcGFuPntjbGllbnQucGF5c308L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFTDqWzDqXBob25lIDogPHNwYW4+e2NsaWVudC50ZWx9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRDb3VycmllciA6IDxzcGFuPntjbGllbnQubWFpbH08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRQb3VyIGxhIHRheGUgZGUgU8Opam91ciBub21icmUgZGUgcGVyc29ubmVzIDpcclxuXHRcdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHRcdFRheGFibGVzIDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLm5iUGVycyAtIHJlc2VydmF0aW9uLm5iRW5mfSAtIE5vblxyXG5cdFx0XHRcdFx0XHRcdFx0dGF4YWJsZXMgOiB7cmVzZXJ2YXRpb24ubmJFbmZ9XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlclRpdGxlfT5cclxuXHRcdFx0XHRcdFx0XHRDT05ESVRJT05TIERFIExPQ0FUSU9OXHJcblx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlclRpdGxlQ29sb3J9PlxyXG5cdFx0XHRcdFx0XHRcdETDqXNpZ25hdGlvbiBkZXMgbGlldXggZXQgZGVzY3JpcHRpZiBkdSBsb2dlbWVudFxyXG5cdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5lSGVpZ2h0fT5cclxuXHRcdFx0XHRcdFx0XHR7Z2l0ZS5jdERlc2lnbmF0aW9uVGl0cmV9XHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHJcblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBvU291bGlnbmV9PlxyXG5cdFx0XHRcdFx0XHRcdFByaW5jaXBhbGVzIGNhcmFjdMOpcmlzdGlxdWVzIDpcclxuXHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZWRpdG9yJz5cclxuXHRcdFx0XHRcdFx0XHR7cmVuZGVySFRNTChnaXRlLmN0UHJpbmNpcENhcmFjKX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBvU291bGlnbmV9PlxyXG5cdFx0XHRcdFx0XHRcdFNpdHVhdGlvbiBkdSBsb2dlbWVudCBkYW5zIGxhIGxvY2FsaXTDqSA6XHJcblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2VkaXRvcic+XHJcblx0XHRcdFx0XHRcdFx0e3JlbmRlckhUTUwoZ2l0ZS5jdFNpdHVMb2cpfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnR5cG9Tb3VsaWduZX0+XHJcblx0XHRcdFx0XHRcdFx0RGVzY3JpcHRpb24gZHUgbG9nZW1lbnQgOlxyXG5cdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2VkaXRvcidcclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17eyBtYXJnaW5Cb3R0b206ICc3MHB4JyB9fT5cclxuXHRcdFx0XHRcdFx0XHR7cmVuZGVySFRNTChnaXRlLmN0RGVzY0xvZyl9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlclRpdGxlQ29sb3J9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHREdXLDqWUgZGUgbGEgbG9jYXRpb24gOlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5lSGVpZ2h0UH0+XHJcblx0XHRcdFx0XHRcdFx0XHRMYSBwcsOpc2VudGUgbG9jYXRpb24gZXN0IGNvbnNlbnRpZSBldCBhY2NlcHTDqWVcclxuXHRcdFx0XHRcdFx0XHRcdHBvdXIgdW5lIGR1csOpZSBkZSA6IDIgbnVpdMOpZXMgRWxsZSBjb21tZW5jZSBsZVxyXG5cdFx0XHRcdFx0XHRcdFx0dmVuZHJlZGkgMjcgYW/Du3QgMjAyMSDDoCBwYXJ0aXIgZGUgMTdoIGV0IHNlXHJcblx0XHRcdFx0XHRcdFx0XHR0ZXJtaW5lcmEgbGUgZGltYW5jaGUgMjkgYW/Du3QgMjAyMSBhdSBwbHVzIHRhcmRcclxuXHRcdFx0XHRcdFx0XHRcdMOgIDE3aCBFbGxlIG5lIHBvdXJyYSBlbiBhdWN1biBjYXMgw6p0cmUgcHJvcm9nw6llLFxyXG5cdFx0XHRcdFx0XHRcdFx0c2F1ZiBhY2NvcmQgw6ljcml0IGV0IHByw6lhbGFibGUgZHUgcHJvcHJpw6l0YWlyZS5cclxuXHRcdFx0XHRcdFx0XHRcdFBvdXIgbm91cyBwZXJtZXR0cmUgZGUgbm91cyBvcmdhbmlzZXIsIChsZSBnw650ZVxyXG5cdFx0XHRcdFx0XHRcdFx0ZXN0IMOgIDQga20gZGUgbOKAmWhhYml0YXRpb24gcHJpbmNpcGFsZSBkdVxyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHJpw6l0YWlyZSksIHZvdXMgZGV2ZXogbm91cyBhdmVydGlyIHF1ZWxxdWVzXHJcblx0XHRcdFx0XHRcdFx0XHRqb3VycyDDoCBsJ2F2YW5jZSBkZSB2b3RyZSBoZXVyZSBkJ2Fycml2w6llIChwYXJcclxuXHRcdFx0XHRcdFx0XHRcdG1haWwgb3UgdMOpbMOpcGhvbmUpLlxyXG5cdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZUNvbG9yfT5cclxuXHRcdFx0XHRcdFx0XHRcdFByaXggZW4gRXVyb3NcclxuXHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMubGluZUhlaWdodFB9PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0TGEgcHLDqXNlbnRlIGxvY2F0aW9uIHNhaXNvbm5pw6hyZSBhIGxpZXVcclxuXHRcdFx0XHRcdFx0XHRcdFx0bW95ZW5uYW50IGxhIHNvbW1lIGRlIChtaW5pbXVtIGZpeGUgZGUgYmFzZSlcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxvYXQ6ICdyaWdodCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAneWVsbG93JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi50b3RhbFRhcmlmQmFzZX0sMDAg4oKsXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRUYXJpZiBwYXIgcGVyc29ubmUgc3VwcGzDqW1lbnRhaXJlIGF1LWRlbMOgIGR1XHJcblx0XHRcdFx0XHRcdFx0XHRcdG1pbmltdW0gZml4ZSA6IHtnaXRlLnN1cHBsZW1lbnRQYXJQZXJzfSDigqxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGFyIG51aXQgZXQgcGFyIHBlcnNvbm5lLCBzb2l0IDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3JlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLm5iUGVyc1N1cH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbG9hdDogJ3JpZ2h0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLnRvdGFsVGFyaWZTdXBwbH0sMDAg4oKsXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRJbCBjb21wcmVuZCBsZXMgY2hhcmdlcyAodMOpbMOpdmlzaW9uLCBlYXUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdMOpbGVjdHJpY2l0w6kpLCBsZSBtw6luYWdlIGV0IGxhIGZvdXJuaXR1cmUgZGVzXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRyYXBzIGV0IHRhaWVzXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRTdXBwbMOpbWVudCBwYXIgYW5pbWFsIDMg4oKsIHBhciBqb3VyLlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbG9hdDogJ3JpZ2h0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0ey8qIHtyZXNlcnZhdGlvbi59ICovfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Rm9yZmFpdCBsaXRzIGZhaXRzIMOgIGwnYXJyaXbDqWUgOnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtnaXRlLmZ0TGl0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHTigqwvcGVyc29ubmVcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxvYXQ6ICdyaWdodCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAneWVsbG93JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi50b3RhbEZ0TGl0fSwwMCDigqxcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFRheGVzIGRpdmVyc2VzIGNhbGN1bMOpZXMgc3VyIE5icmUgZGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGVyc29ubmVzIGRlICsgZGUgMTggYW5zIDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24ubmJFbmZ9IE5icmUgbnVpdMOpZXMgOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24ubmJOdWl0ZXN9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsb2F0OiAncmlnaHQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3llbGxvdycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Lyoge3Jlc2VydmF0aW9uLn0gKi99XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0UsOpZ2xlbWVudCDDoCB0cmFuc21ldHRyZSBhdmVjIHZvdHJlIGNvbnRyYXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2lnbsOpIChzZWxvbiBsZXMgbW9kYWxpdMOpcyBjaS1hcHLDqHMpIMOgIHRpdHJlXHJcblx0XHRcdFx0XHRcdFx0XHRcdGQnYWNvbXB0ZSA6XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsb2F0OiAncmlnaHQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3llbGxvdycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24ucmVzdGVBUGF5ZXJ9LDAwIOKCrFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c29pdCBwYXIgdmlyZW1lbnQgKElCQU4gZGFucyBwYXJ0aWVcclxuXHRcdFx0XHRcdFx0XHRcdFx0c29jacOpdMOpKSwgb3UgY2jDqHF1ZSDDoCBsJ29yZHJlIGRlIFNBUyBXQU8sIG91XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNow6hxdWVzIHZhY2FuY2VzIChlbnZvaSBhdSBzacOoZ2Ugc29jaWFsKVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbG9hdDogJ3JpZ2h0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0ey8qIHtyZXNlcnZhdGlvbi59IFZvaXIgcG91ciBtb250YW50IGRlIGwnYWNvbXB0ZSAqL31cclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdE5vdXMgZGVtYW5kb25zIHVuIGVudm9pIGVuIHJlY29tbWFuZMOpXHJcblx0XHRcdFx0XHRcdFx0XHRcdHVuaXF1ZW1lbnQgcG91ciBsZXMgY2jDqHF1ZXMgdmFjYW5jZXMuXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsb2F0OiAncmlnaHQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3llbGxvdycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Lyoge3Jlc2VydmF0aW9uLn0gKi99XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRBcHLDqHMgdm90cmUgc8Opam91ciB1biBzY2FuIGRlIGxhIGNhdXRpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZMOpdHJ1aXRlIHZvdXMgc2VyYSB0cmFuc21pcyBwYXIgY291cnJpZWwsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNhdWYgZW4gY2FzIGRlIGTDqWfDonRzLlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbG9hdDogJ3JpZ2h0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLm10Q2F1dGlvbn0sMDAg4oKsXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRMYSByw6lzZXJ2YXRpb24gZGV2aWVuZHJhIGVmZmVjdGl2ZSBkw6hzIGxvcnMgcXVlXHJcblx0XHRcdFx0XHRcdFx0XHRsZSBsb2NhdGFpcmUgYXVyYSByZXRvdXJuw6kgdW4gZXhlbXBsYWlyZSBkYXTDqSBldFxyXG5cdFx0XHRcdFx0XHRcdFx0c2lnbsOpIGR1IHByw6lzZW50IGNvbnRyYXQgYXZhbnQgbGUgMDQvMDUvMjAyMFxyXG5cdFx0XHRcdFx0XHRcdFx0YWNjb21wYWduw6kgZHUgY2jDqHF1ZS4gQXUtZGVsw6AgZGUgY2V0dGUgZGF0ZSwgbGFcclxuXHRcdFx0XHRcdFx0XHRcdHLDqXNlcnZhdGlvbiBzZXJhIGNhZHVxdWUgZXQgbGUgcHJvcHJpw6l0YWlyZVxyXG5cdFx0XHRcdFx0XHRcdFx0ZGlzcG9zZXJhIGxpYnJlbWVudCBkdSBsb2dlbWVudC5cclxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlclRpdGxlQ29sb3J9PlxyXG5cdFx0XHRcdFx0XHRcdFx0QXNzdXJhbmNlc1xyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PHAgc3R5bGU9e3sgZm9udFNpemU6ICcxNnB4JyB9fT5cclxuXHRcdFx0XHRcdFx0XHRMZSBsb2NhdGFpcmUgZG9pdCB2w6lyaWZpZXIgc2kgc29uIGNvbnRyYXRcclxuXHRcdFx0XHRcdFx0XHRk4oCZaGFiaXRhdGlvbiBwcmluY2lwYWxlIHByw6l2b2l0IGzigJlleHRlbnNpb25cclxuXHRcdFx0XHRcdFx0XHR2aWxsw6lnaWF0dXJlIGVuIHJlc3BvbnNhYmlsaXTDqSBjaXZpbGUuIERhbnNcclxuXHRcdFx0XHRcdFx0XHRs4oCZaHlwb3Row6hzZSBjb250cmFpcmUsIGlsIHBldXQgaW50ZXJ2ZW5pciBhdXByw6hzIGRlXHJcblx0XHRcdFx0XHRcdFx0c2EgY29tcGFnbmllIGTigJlhc3N1cmFuY2UgZXQgcsOpY2xhbWVyIGzigJlleHRlbnNpb24gZGVcclxuXHRcdFx0XHRcdFx0XHRsYSBnYXJhbnRpZSBwb3VyIGxhIHDDqXJpb2RlIGRlIGxhIGxvY2F0aW9uLCBvdSBiaWVuXHJcblx0XHRcdFx0XHRcdFx0c291c2NyaXJlIHVuIGNvbnRyYXQgcGFydGljdWxpZXIgYXUgdGl0cmUgZGVzXHJcblx0XHRcdFx0XHRcdFx0Y2xhdXNlcyB2aWxsw6lnaWF0dXJlLiBEZXJyacOocmUgbGUgZ8OudGUgc2UgdHJvdXZlIHVuXHJcblx0XHRcdFx0XHRcdFx0cnVpc3NlYXUgZXQgdW4gw6l0YW5nLCBwYXIgbWVzdXJlIGRlIHPDqWN1cml0w6ksIExlc1xyXG5cdFx0XHRcdFx0XHRcdGVuZmFudHMgZGV2cm9udCB0b3Vqb3VycyDDqnRyZSBhY2NvbXBhZ27DqXMgZOKAmXVuXHJcblx0XHRcdFx0XHRcdFx0YWR1bHRlIGV0IGxlIHByb3ByacOpdGFpcmUgbmUgcGV1dCBlbiBhdWN1biBjYXMgw6p0cmVcclxuXHRcdFx0XHRcdFx0XHR0ZW51IHBvdXIgcmVzcG9uc2FibGUgZGVzIGFjY2lkZW50cyBxdWkgcG91cnJhaWVudCB5XHJcblx0XHRcdFx0XHRcdFx0c3VydmVuaXIuIERlIG3Dqm1lIHBvdXIgbOKAmWFpcmUgZGUgamV1IGR1IGfDrnRlLCBsZXNcclxuXHRcdFx0XHRcdFx0XHRlbmZhbnRzIHF1aSBs4oCZdXRpbGlzZW50IGRvaXZlbnQgw6p0cmUgc291cyBsYVxyXG5cdFx0XHRcdFx0XHRcdHN1cnZlaWxsYW5jZSBkZXMgcGFyZW50cy5cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlclRpdGxlQ29sb3J9PlxyXG5cdFx0XHRcdFx0XHRcdFx0RXRhdCBkZXMgbGlldXggZXQgaW52ZW50YWlyZVxyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmVIZWlnaHRQfT5cclxuXHRcdFx0XHRcdFx0XHRMZSBkb2N1bWVudCBwb3VyIGzigJnDqXRhdCBkZXMgbGlldXggc2UgdHJvdXZlIGRhbnMgbGVcclxuXHRcdFx0XHRcdFx0XHRjYWhpZXIgZOKAmWV4cGxpY2F0aW9uIGR1IGfDrnRlLiBDZSBjb250cmF0IGZhaXQgb2ZmaWNlXHJcblx0XHRcdFx0XHRcdFx0ZCdpbnZlbnRhaXJlLiBQb3VyIMOpdml0ZXIgdG91dGUgY29udGVzdGF0aW9uIGxlXHJcblx0XHRcdFx0XHRcdFx0bG9jYXRhaXJlIHZvdWRyYSBiaWVuIGNvbnRyw7RsZXIgZXQgc2lnbmFsZXIgdG91dGVcclxuXHRcdFx0XHRcdFx0XHRhbm9tYWxpZSBkYW5zIGxlcyAyNCBoZXVyZXMuIFBhc3PDqSBjZSBkw6lsYWksIGxlc1xyXG5cdFx0XHRcdFx0XHRcdGJpZW5zIGxvdcOpcyBzZXJvbnQgY29uc2lkw6lyw6lzIGNvbW1lIGV4ZW1wdHMgZGVcclxuXHRcdFx0XHRcdFx0XHRkb21tYWdlcyDDoCBs4oCZZW50csOpZSBkdSBsb2NhdGFpcmUuIENlbHVpLWNpIHNlcmFcclxuXHRcdFx0XHRcdFx0XHRyZXNwb25zYWJsZSBkZSB0b3V0ZSBkw6l0w6lyaW9yYXRpb24gb3UgcGVydGUgcG91dmFudFxyXG5cdFx0XHRcdFx0XHRcdHN1cnZlbmlyIMOgIGNlIG1vYmlsaWVyIGFpbnNpIHF14oCZYXV4IGRpdmVycyBtYXTDqXJpZWxzXHJcblx0XHRcdFx0XHRcdFx0ZGUgbOKAmWVzcGFjZSBwaXNjaW5lIGV0IGTDqXRlbnRlLlxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblxyXG5cdFx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyVGl0bGVDb2xvcn0+XHJcblx0XHRcdFx0XHRcdFx0XHRKb3Vpc3NhbmNlIGRlcyBsaWV1eFxyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmVIZWlnaHRQfT5cclxuXHRcdFx0XHRcdFx0XHRMZSBsb2NhdGFpcmUgZW50cmV0aWVuZHJhIGxlcyBsaWV1eCBsb3XDqXMgZXQgbGVzXHJcblx0XHRcdFx0XHRcdFx0cmVuZHJhIGVuIGJvbiDDqXRhdCBkZSBwcm9wcmV0w6kuIElsIHZlaWxsZXJhIMOgIGNlIHF1ZVxyXG5cdFx0XHRcdFx0XHRcdGxhIHRyYW5xdWlsbGl0w6kgZHUgdm9pc2luYWdlIG5lIHNvaXQgcGFzIHRyb3VibMOpZS5cclxuXHRcdFx0XHRcdFx0XHRMYSBzb3VzIGxvY2F0aW9uIGVzdCBpbnRlcmRpdGUgYXUgcHJlbmV1ciwgbcOqbWUgw6BcclxuXHRcdFx0XHRcdFx0XHR0aXRyZSBncmF0dWl0LCBzb3VzIHBlaW5lIGRlIHLDqXNpbGlhdGlvbiBkdSBjb250cmF0LlxyXG5cdFx0XHRcdFx0XHRcdEzigJlpbnN0YWxsYXRpb24gZGUgdGVudGVzIG91IGxlIHN0YXRpb25uZW1lbnQgZGVcclxuXHRcdFx0XHRcdFx0XHRjYXJhdmFuZXMgc3VyIGxlIHRlcnJhaW4gZGUgbGEgcHJvcHJpw6l0w6kgbG91w6llIGVzdFxyXG5cdFx0XHRcdFx0XHRcdGludGVyZGl0LCBzYXVmIGFjY29yZCBwcsOpYWxhYmxlIGR1IHByb3ByacOpdGFpcmUuXHJcblx0XHRcdFx0XHRcdFx0TOKAmXV0aWxpc2F0ZXVyIHPigJllbmdhZ2Ugw6AgbmUgcGFzIHV0aWxpc2VyIGxlIHNlcnZpY2VcclxuXHRcdFx0XHRcdFx0XHRXSS1GSSDDoCBkZXMgZmlucyBpbGxpY2l0ZXMsIGludGVyZGl0ZXMgb3UgaWxsw6lnYWxlc1xyXG5cdFx0XHRcdFx0XHRcdChlbnRyZSBhdXRyZXMgcmVzcGVjdCBkZSBsYSBsb2kgSGFkb3BpKS4gTGUgbG91ZXVyLFxyXG5cdFx0XHRcdFx0XHRcdMOgIGxhIGRlbWFuZGUgZGUgdGllcnMgZXQvb3UgZGUgdG91dGUgYXV0b3JpdMOpXHJcblx0XHRcdFx0XHRcdFx0Y29tcMOpdGVudGUsIHNlIHLDqXNlcnZlIGxlIGRyb2l0IGRlIHN1c3BlbmRyZVxyXG5cdFx0XHRcdFx0XHRcdHRlbXBvcmFpcmVtZW50IG91IGRlIG1hbmnDqHJlIGTDqWZpbml0aXZlIHRvdXRlXHJcblx0XHRcdFx0XHRcdFx0dXRpbGlzYXRpb24gZHUgc2VydmljZSBzYW5zIHF1ZSBzYSByZXNwb25zYWJpbGl0w6kgbmVcclxuXHRcdFx0XHRcdFx0XHRwdWlzc2Ugw6p0cmUgcmVjaGVyY2jDqWUgZXQgc2FucyBxdWUgbOKAmXV0aWxpc2F0ZXVyIG5lXHJcblx0XHRcdFx0XHRcdFx0cHVpc3NlIHJldmVuZGlxdWVyIHVuZSBxdWVsY29ucXVlIGluZGVtbmlzYXRpb24gb3VcclxuXHRcdFx0XHRcdFx0XHRyw6lwYXJhdGlvbi4gRW4gYXVjdW4gY2FzIGxlIGxvdWV1ciBuZSBwZXV0IMOqdHJlXHJcblx0XHRcdFx0XHRcdFx0dGVudWUgZGUgcsOpcGFyZXIgbGVzIHByw6lqdWRpY2VzIGRpcmVjdHMgZXQvb3VcclxuXHRcdFx0XHRcdFx0XHRpbmRpcmVjdHMgc3ViaXMgZHUgZmFpdCBkZSBs4oCZdXRpbGlzYXRpb24gZHUgc2VydmljZVxyXG5cdFx0XHRcdFx0XHRcdHBhciBs4oCZdXRpbGlzYXRldXIsIGNlIGRlcm5pZXIgcmVjb25uYWlzc2FudCBxdWUgbGVcclxuXHRcdFx0XHRcdFx0XHRsb3VldXIgbmUgcGV1dCBwYXMgw6p0cmUgcmVzcG9uc2FibGUgZGVzIGNvbnRlbnVzXHJcblx0XHRcdFx0XHRcdFx0YXVxdWVsIGFjY8OoZGUgbOKAmXV0aWxpc2F0ZXVyIGV0IHF1ZSBs4oCZYWNjZXNzaWJpbGl0w6lcclxuXHRcdFx0XHRcdFx0XHRhdXggY29udGVudXMgZXQgc2VydmljZXMgbuKAmWVzdCBwYXMgZ2FyYW50aWUgZXQgcGV1dFxyXG5cdFx0XHRcdFx0XHRcdMOqdHJlIHN1c3BlbmR1ZSBzYW5zIHByw6lhdmlzLlxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblxyXG5cdFx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyVGl0bGVDb2xvcn0+XHJcblx0XHRcdFx0XHRcdFx0XHRDbGF1c2UgcsOpc29sdXRvaXJlXHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMubGluZUhlaWdodFB9PlxyXG5cdFx0XHRcdFx0XHRcdEEgZMOpZmF1dCBkZSBwYWllbWVudCBhdXggw6ljaMOpYW5jZXMgZml4w6llcyBvdSBlbiBjYXNcclxuXHRcdFx0XHRcdFx0XHRk4oCZaW5leMOpY3V0aW9uIGTigJl1bmUgZGVzIGNsYXVzZXMgZHUgcHLDqXNlbnRcclxuXHRcdFx0XHRcdFx0XHRlbmdhZ2VtZW50IGV0IGNpbnEgam91cnMgZnJhbmNzIGFwcsOocyB1bmUgc2ltcGxlXHJcblx0XHRcdFx0XHRcdFx0c29tbWF0aW9uIHBhciBsZXR0cmUgcmVjb21tYW5kw6llIHJlc3TDqWVcclxuXHRcdFx0XHRcdFx0XHRpbmZydWN0dWV1c2UsIGxlIHByw6lzZW50IGNvbnRyYXQgc2VyYSBpbW3DqWRpYXRlbWVudFxyXG5cdFx0XHRcdFx0XHRcdHLDqXNpbGnDqSBldCBsZSBiYWlsbGV1ciBwb3VycmEgc2UgcHLDqXZhbG9pciBkZVxyXG5cdFx0XHRcdFx0XHRcdGzigJlhcnRpY2xlIDE1OTAgZHUgQ29kZSBjaXZpbCBwb3VyIGNvbnNlcnZlciBsZXNcclxuXHRcdFx0XHRcdFx0XHRhY29tcHRlcyB2ZXJzw6lzIMOgIHRpdHJlIGRlcyBwcmVtaWVyc1xyXG5cdFx0XHRcdFx0XHRcdGRvbW1hZ2VzLWludMOpcsOqdHMuXHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHJcblx0XHRcdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZUNvbG9yfT5cclxuXHRcdFx0XHRcdFx0XHRcdEFubnVsYXRpb25cclxuXHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5lSGVpZ2h0UH0+XHJcblx0XHRcdFx0XHRcdFx0TGEgc2lnbmF0dXJlIGR1IGNvbnRyYXQgZW5nYWdlIGxlcyBkZXV4IHBhcnRpZXMgZGVcclxuXHRcdFx0XHRcdFx0XHRmYcOnb24gZMOpZmluaXRpdmUuIFNpIGxlIGxvY2F0YWlyZSByZW5vbmNlIMOgIGxhXHJcblx0XHRcdFx0XHRcdFx0bG9jYXRpb24gNjAgam91cnMgYXZhbnQgbOKAmWFycml2w6llLCBs4oCZYWNvbXB0ZSBlc3RcclxuXHRcdFx0XHRcdFx0XHRyZW1ib3Vyc8OpLiBFbnRyZSAxIGpvdXIgZXQgNjAgam91cnMgc2kgbm91c1xyXG5cdFx0XHRcdFx0XHRcdHLDqXVzc2lzc29ucyDDoCByZWxvdWVyLCBs4oCZYWNvbXB0ZSBlc3Qgw6lnYWxlbWVudFxyXG5cdFx0XHRcdFx0XHRcdHJlbWJvdXJzw6kuIFNpbm9uIGzigJlhY29tcHRlIGVzdCBwZXJkdS5cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlclRpdGxlQ29sb3J9PlxyXG5cdFx0XHRcdFx0XHRcdFx0RWxlY3Rpb24gZGUgZG9taWNpbGVcclxuXHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5lSGVpZ2h0UH0+XHJcblx0XHRcdFx0XHRcdFx0UG91ciBs4oCZZXjDqWN1dGlvbiBkZXMgcHLDqXNlbnRlcywgbGUgcHJvcHJpw6l0YWlyZSBldFxyXG5cdFx0XHRcdFx0XHRcdGxlIGxvY2F0YWlyZSBmb250IMOpbGVjdGlvbiBkZSBkb21pY2lsZSBkYW5zIGxldXJzXHJcblx0XHRcdFx0XHRcdFx0ZG9taWNpbGVzIHJlc3BlY3RpZnMuIFRvdXRlZm9pcyBlbiBjYXMgZGUgbGl0aWdlLCBsZVxyXG5cdFx0XHRcdFx0XHRcdHRyaWJ1bmFsIGRlcyBsaWV1eCBsb3XDqXMgc2VyYSBzZXVsIGNvbXDDqXRlbnQuXHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHJcblx0XHRcdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdFx0XHRjb250YWluZXJcclxuXHRcdFx0XHRcdFx0ZGlyZWN0aW9uPSdyb3cnXHJcblx0XHRcdFx0XHRcdGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nXHJcblx0XHRcdFx0XHRcdHNwYWNpbmc9ezR9XHJcblx0XHRcdFx0XHRcdGFsaWduSXRlbXM9J2ZsZXgtZW5kJ1xyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBtYXJnaW5Ub3A6ICcyMHB4JyB9fT5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdEZhaXQgZW4gZGV1eCBleGVtcGxhaXJlcyDDoCBGb3Nzw6kgbGUge0RhdGUubm93KCl9XHJcblx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxwPlNpZ25hdHVyZSBkdSBwcm9wcmnDqXRhaXJlLDwvcD5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0SuKAmWFpIHByaXMgY29ubmFpc3NhbmNlIGRlcyBjb25kaXRpb25zIGRlXHJcblx0XHRcdFx0XHRcdFx0XHRsb2NhdGlvbiBjaS1kZXNzdXNcclxuXHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0PHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMjBweCcgfX0+RGF0ZSA6PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0U2lnbmF0dXJlIGR1IGxvY2F0YWlyZSAocHLDqWPDqWTDqSBkZSBsYSBtZW50aW9uIGx1XHJcblx0XHRcdFx0XHRcdFx0XHRldCBhcHByb3V2w6kpXHJcblx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvVGhlbWVQcm92aWRlcj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuXHQvLyBjb25zb2xlLmxvZygnY29udGV4dCcsIGNvbnRleHQucXVlcnkuaWQpO1xyXG5cdGNvbnN0IHJlczEgPSBhd2FpdCBhZmZpY2hlUmVzZXJ2YXRpb24oY29udGV4dC5xdWVyeS5pZCk7XHJcblx0Y29uc3QgcmVzZXJ2YXRpb24gPSBhd2FpdCByZXMxO1xyXG5cdC8vIGNvbnNvbGUubG9nKCdyZXNlcnZhdGlvbicsIHJlc2VydmF0aW9uKTtcclxuXHRjb25zdCByZXMyID0gYXdhaXQgbGlzdEdpdGVCeUlkKHJlc2VydmF0aW9uLmdpdGUpO1xyXG5cdGNvbnN0IGdpdGUgPSBhd2FpdCByZXMyO1xyXG5cdGNvbnN0IHJlczMgPSBhd2FpdCBhZmZpY2hlQ2xpZW50KHJlc2VydmF0aW9uLmNsaWVudCk7XHJcblx0Y29uc3QgY2xpZW50ID0gYXdhaXQgcmVzMztcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHJlc2VydmF0aW9uLFxyXG5cdFx0XHRnaXRlLFxyXG5cdFx0XHRjbGllbnQsXHJcblx0XHR9LFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VydmF0aW9uSWQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=