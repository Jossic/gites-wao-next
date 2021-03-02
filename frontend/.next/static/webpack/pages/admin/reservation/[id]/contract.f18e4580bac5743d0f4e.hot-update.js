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
  }, "Tarif par personne suppl\xE9mentaire au-del\xE0 du minimum fixe :", ' ', __jsx("span", {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 10
    }
  }, gite.supplementParPers, ",00 \u20AC"), ' ', "par nuit et par personne, soit :", ' ', __jsx("span", {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
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
      lineNumber: 247,
      columnNumber: 9
    }
  }, reservation.totalTarifSuppl, ",00 \u20AC")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 9
    }
  }, "Il comprend les charges (t\xE9l\xE9vision, eau, \xE9lectricit\xE9), le m\xE9nage et la fourniture des draps et taies")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 9
    }
  }, "Suppl\xE9ment par animal", ' ', __jsx("span", {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 10
    }
  }, "3 \u20AC"), ' ', "par jour. Pour", ' ', __jsx("span", {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 10
    }
  }, reservation.nbChien)), __jsx("span", {
    style: {
      "float": 'right',
      backgroundColor: 'yellow'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 9
    }
  }, reservation.mtAnimaux, ",00 \u20AC")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 9
    }
  }, "Forfait lits faits \xE0 l'arriv\xE9e :", ' ', __jsx("span", {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 10
    }
  }, gite.ftLit, ",00 \u20AC/personne")), __jsx("span", {
    style: {
      "float": 'right',
      backgroundColor: 'yellow'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 9
    }
  }, reservation.totalFtLit, ",00 \u20AC")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      position: 'absolute',
      left: '100x',
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 9
    }
  }, "Soit la somme de:"), __jsx("span", {
    style: {
      "float": 'right',
      backgroundColor: 'yellow'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 9
    }
  }, reservation.resteAPayer, ",00 \u20AC")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'right'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
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
      lineNumber: 329,
      columnNumber: 9
    }
  }, reservation.acompte, ",00 \u20AC")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
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
      lineNumber: 343,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 9
    }
  }, "Taxes diverses calcul\xE9es sur le nombre d'adultes, soit :", ' ', __jsx("span", {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 10
    }
  }, reservation.nbPers - reservation.nbEnf, ' '), "pour", ' ', __jsx("span", {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 10
    }
  }, reservation.nbNuites, ' '), "nuit\xE9es"), __jsx("span", {
    style: {
      "float": 'right',
      backgroundColor: 'yellow'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
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
      lineNumber: 383,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
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
      lineNumber: 397,
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
      lineNumber: 405,
      columnNumber: 8
    }
  }, "La r\xE9servation deviendra effective d\xE8s lors que le locataire aura retourn\xE9 un exemplaire dat\xE9 et sign\xE9 du pr\xE9sent contrat avant le 04/05/2020 accompagn\xE9 du ch\xE8que. Au-del\xE0 de cette date, la r\xE9servation sera caduque et le propri\xE9taire disposera librement du logement.")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 8
    }
  }, "Assurances")), __jsx("p", {
    style: {
      fontSize: '16px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 7
    }
  }, "Le locataire doit v\xE9rifier si son contrat d\u2019habitation principale pr\xE9voit l\u2019extension vill\xE9giature en responsabilit\xE9 civile. Dans l\u2019hypoth\xE8se contraire, il peut intervenir aupr\xE8s de sa compagnie d\u2019assurance et r\xE9clamer l\u2019extension de la garantie pour la p\xE9riode de la location, ou bien souscrire un contrat particulier au titre des clauses vill\xE9giature. Derri\xE8re le g\xEEte se trouve un ruisseau et un \xE9tang, par mesure de s\xE9curit\xE9, Les enfants devront toujours \xEAtre accompagn\xE9s d\u2019un adulte et le propri\xE9taire ne peut en aucun cas \xEAtre tenu pour responsable des accidents qui pourraient y survenir. De m\xEAme pour l\u2019aire de jeu du g\xEEte, les enfants qui l\u2019utilisent doivent \xEAtre sous la surveillance des parents."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 8
    }
  }, "Etat des lieux et inventaire")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 7
    }
  }, "Le document pour l\u2019\xE9tat des lieux se trouve dans le cahier d\u2019explication du g\xEEte. Ce contrat fait office d'inventaire. Pour \xE9viter toute contestation le locataire voudra bien contr\xF4ler et signaler toute anomalie dans les 24 heures. Pass\xE9 ce d\xE9lai, les biens lou\xE9s seront consid\xE9r\xE9s comme exempts de dommages \xE0 l\u2019entr\xE9e du locataire. Celui-ci sera responsable de toute d\xE9t\xE9rioration ou perte pouvant survenir \xE0 ce mobilier ainsi qu\u2019aux divers mat\xE9riels de l\u2019espace piscine et d\xE9tente."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 8
    }
  }, "Jouissance des lieux")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464,
      columnNumber: 7
    }
  }, "Le locataire entretiendra les lieux lou\xE9s et les rendra en bon \xE9tat de propret\xE9. Il veillera \xE0 ce que la tranquillit\xE9 du voisinage ne soit pas troubl\xE9e. La sous location est interdite au preneur, m\xEAme \xE0 titre gratuit, sous peine de r\xE9siliation du contrat. L\u2019installation de tentes ou le stationnement de caravanes sur le terrain de la propri\xE9t\xE9 lou\xE9e est interdit, sauf accord pr\xE9alable du propri\xE9taire. L\u2019utilisateur s\u2019engage \xE0 ne pas utiliser le service WI-FI \xE0 des fins illicites, interdites ou ill\xE9gales (entre autres respect de la loi Hadopi). Le loueur, \xE0 la demande de tiers et/ou de toute autorit\xE9 comp\xE9tente, se r\xE9serve le droit de suspendre temporairement ou de mani\xE8re d\xE9finitive toute utilisation du service sans que sa responsabilit\xE9 ne puisse \xEAtre recherch\xE9e et sans que l\u2019utilisateur ne puisse revendiquer une quelconque indemnisation ou r\xE9paration. En aucun cas le loueur ne peut \xEAtre tenue de r\xE9parer les pr\xE9judices directs et/ou indirects subis du fait de l\u2019utilisation du service par l\u2019utilisateur, ce dernier reconnaissant que le loueur ne peut pas \xEAtre responsable des contenus auquel acc\xE8de l\u2019utilisateur et que l\u2019accessibilit\xE9 aux contenus et services n\u2019est pas garantie et peut \xEAtre suspendue sans pr\xE9avis."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493,
      columnNumber: 8
    }
  }, "Clause r\xE9solutoire")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 7
    }
  }, "A d\xE9faut de paiement aux \xE9ch\xE9ances fix\xE9es ou en cas d\u2019inex\xE9cution d\u2019une des clauses du pr\xE9sent engagement et cinq jours francs apr\xE8s une simple sommation par lettre recommand\xE9e rest\xE9e infructueuse, le pr\xE9sent contrat sera imm\xE9diatement r\xE9sili\xE9 et le bailleur pourra se pr\xE9valoir de l\u2019article 1590 du Code civil pour conserver les acomptes vers\xE9s \xE0 titre des premiers dommages-int\xE9r\xEAts."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 8
    }
  }, "Annulation")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 7
    }
  }, "La signature du contrat engage les deux parties de fa\xE7on d\xE9finitive. Si le locataire renonce \xE0 la location 60 jours avant l\u2019arriv\xE9e, l\u2019acompte est rembours\xE9. Entre 1 jour et 60 jours si nous r\xE9ussissons \xE0 relouer, l\u2019acompte est \xE9galement rembours\xE9. Sinon l\u2019acompte est perdu."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 8
    }
  }, "Election de domicile")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528,
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
      lineNumber: 536,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
      columnNumber: 8
    }
  }, "Fait en deux exemplaires \xE0 Foss\xE9 le ", Date.now()), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 8
    }
  }, "Signature du propri\xE9taire,")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 8
    }
  }, "J\u2019ai pris connaissance des conditions de location ci-dessus"), __jsx("p", {
    style: {
      marginBottom: '20px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 8
    }
  }, "Date :"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24vL2NvbnRyYWN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwidHlwZSIsIlJlc2VydmF0aW9uSWQiLCJyZXNlcnZhdGlvbiIsImNsaWVudCIsImdpdGUiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImZsZXhHcm93Iiwid2lkdGgiLCJwYXBlciIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInRleHRBbGlnbiIsInBhcGVyVGl0bGUiLCJtYXJnaW5Ub3AiLCJwYXBlclRpdGxlQ29sb3IiLCJtYXJnaW5Cb3R0b20iLCJjb3VsZXVyMSIsInR5cG9Tb3VsaWduZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsInRleHREZWNvcmF0aW9uIiwiY2xhc3NlcyIsInZpZ25ldHRlTGluayIsIm5vbSIsImNpdmlsaXRlIiwicHJlbm9tIiwiYWRyZXNzZSIsImNwIiwidmlsbGUiLCJwYXlzIiwidGVsIiwibWFpbCIsIm5iUGVycyIsIm5iRW5mIiwibGluZUhlaWdodCIsImN0RGVzaWduYXRpb25UaXRyZSIsInJlbmRlckhUTUwiLCJjdFByaW5jaXBDYXJhYyIsImN0U2l0dUxvZyIsImN0RGVzY0xvZyIsImxpbmVIZWlnaHRQIiwidG90YWxUYXJpZkJhc2UiLCJjb2xvciIsInN1cHBsZW1lbnRQYXJQZXJzIiwibmJQZXJzU3VwIiwidG90YWxUYXJpZlN1cHBsIiwibmJDaGllbiIsIm10QW5pbWF1eCIsImZ0TGl0IiwidG90YWxGdExpdCIsInBvc2l0aW9uIiwibGVmdCIsInJlc3RlQVBheWVyIiwiYWNvbXB0ZSIsIm5iTnVpdGVzIiwibXRDYXV0aW9uIiwiRGF0ZSIsIm5vdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERCxDQXhXRCxFQTZXQztBQUFHLGFBQVMsRUFBRU8sT0FBTyxDQUFDbUIsV0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzT0E3V0QsQ0FwR0QsRUF5ZEMsTUFBQyxzREFBRDtBQUNDLGFBQVMsTUFEVjtBQUVDLGFBQVMsRUFBQyxLQUZYO0FBR0MsV0FBTyxFQUFDLGVBSFQ7QUFJQyxXQUFPLEVBQUUsQ0FKVjtBQUtDLGNBQVUsRUFBQyxVQUxaO0FBTUMsU0FBSyxFQUFFO0FBQUUzQixlQUFTLEVBQUU7QUFBYixLQU5SO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPQyxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1EQUNzQzJDLElBQUksQ0FBQ0MsR0FBTCxFQUR0QyxDQURELEVBSUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FKRCxDQVBELEVBYUMsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3RUFERCxFQUtDO0FBQUcsU0FBSyxFQUFFO0FBQUUxQyxrQkFBWSxFQUFFO0FBQWhCLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxELEVBTUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpRkFORCxDQWJELENBemRELENBSEQsQ0FERCxDQUREO0FBMmZBLENBL2hCRDs7R0FBTWhCLGE7O0tBQUFBLGE7O0FBb2pCU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24vW2lkXS9jb250cmFjdC5mMThlNDU4MGJhYzU3NDNkMGY0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHRhZmZpY2hlQ2xpZW50LFxyXG5cdGdldENsaWVudEJ5SWQsXHJcbn0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vYWN0aW9ucy9jbGllbnRBY3Rpb25zJztcclxuaW1wb3J0IHsgbGlzdEdpdGVCeUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCB7IGFmZmljaGVSZXNlcnZhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2FjdGlvbnMvcmVzZXJ2YXRpb25BY3Rpb25zJztcclxuaW1wb3J0IEFkbWluIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYXV0aC9BZG1pbic7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgeyBHcmlkLCBQYXBlciwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHJlbmRlckhUTUwgZnJvbSAncmVhY3QtcmVuZGVyLWh0bWwnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcclxuXHRwYWxldHRlOiB7XHJcblx0XHR0eXBlOiAnbGlnaHQnLFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuY29uc3QgUmVzZXJ2YXRpb25JZCA9ICh7IHJlc2VydmF0aW9uLCBjbGllbnQsIGdpdGUgfSkgPT4ge1xyXG5cdGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdFx0cm9vdDoge1xyXG5cdFx0XHRmbGV4R3JvdzogMSxcclxuXHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdH0sXHJcblx0XHRwYXBlcjoge1xyXG5cdFx0XHRoZWlnaHQ6IDIzMCxcclxuXHRcdFx0d2lkdGg6IDQ4MCxcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiAnI2RkZGRkZCcsXHJcblx0XHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXHJcblx0XHR9LFxyXG5cdFx0cGFwZXJUaXRsZToge1xyXG5cdFx0XHRoZWlnaHQ6IDMwLFxyXG5cdFx0XHRtYXJnaW5Ub3A6ICcxMHB4JyxcclxuXHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiAnI2NjY2NjYycsXHJcblx0XHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXHJcblx0XHR9LFxyXG5cdFx0cGFwZXJUaXRsZUNvbG9yOiB7XHJcblx0XHRcdGhlaWdodDogMzAsXHJcblx0XHRcdG1hcmdpblRvcDogJzEwcHgnLFxyXG5cdFx0XHRtYXJnaW5Cb3R0b206ICcxMHB4JyxcclxuXHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBgJHtnaXRlLmNvdWxldXIxfWAsXHJcblx0XHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXHJcblx0XHR9LFxyXG5cdFx0dHlwb1NvdWxpZ25lOiB7XHJcblx0XHRcdGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuXHRcdFx0Zm9udFNpemU6ICcxOHB4JyxcclxuXHRcdFx0bWFyZ2luQm90dG9tOiAnMTBweCcsXHJcblx0XHRcdHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcclxuXHRcdH0sXHJcblx0fSkpO1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcblx0XHRcdFx0PENzc0Jhc2VsaW5lIC8+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG5cdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9IGFsaWduSXRlbXM9J2ZsZXgtc3RhcnQnPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsyfT5cclxuXHRcdFx0XHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZC1ibG9jayB3LTEwMCdcclxuXHRcdFx0XHRcdFx0XHRcdHNyYz17Z2l0ZS52aWduZXR0ZUxpbmt9XHJcblx0XHRcdFx0XHRcdFx0XHRhbHQ9e2dpdGUubm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg9ezUwMH1cclxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodD17Mzc1fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTB9PlxyXG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5XHJcblx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdoNSdcclxuXHRcdFx0XHRcdFx0XHRcdGNvbXBvbmVudD0naDUnXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0Q09OVFJBVCBERSBMT0NBVElPTiBFTiBNRVVCTMOJIFNBSVNPTk5JRVIgPGJyIC8+eycgJ31cclxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0TWFkYW1lLCBNb25zaWV1ci4gU3VpdGUgw6Agdm90cmUgZGVtYW5kZSwgamUgdm91c1xyXG5cdFx0XHRcdFx0XHRcdGFkcmVzc2UgbGUgcHLDqXNlbnQgY29udHJhdCBkZSBsb2NhdGlvbiBkb250IDFcclxuXHRcdFx0XHRcdFx0XHRleGVtcGxhaXJlIGVzdCDDoCBtZSByZXRvdXJuZXIgKHBhciBjb3VycmllciBvdSBtYWlsKVxyXG5cdFx0XHRcdFx0XHRcdHJldsOqdHUgZGUgdm90cmUgc2lnbmF0dXJlIGV0IGFjY29tcGFnbsOpIGR1IG1vbnRhbnRcclxuXHRcdFx0XHRcdFx0XHRkZSBs4oCZYWNvbXB0ZSAodmlyZW1lbnQgb3UgY291cnJpZXIpLiBFbiBlc3DDqXJhbnRcclxuXHRcdFx0XHRcdFx0XHRhdm9pciBsZSBwbGFpc2lyIGRlIHZvdXMgYWNjdWVpbGxpciBwcm9jaGFpbmVtZW50LFxyXG5cdFx0XHRcdFx0XHRcdHJlY2V2ZXogbWVzIHNpbmPDqHJlcyBzYWx1dGF0aW9ucy5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cclxuXHRcdFx0XHRcdDxHcmlkXHJcblx0XHRcdFx0XHRcdGNvbnRhaW5lclxyXG5cdFx0XHRcdFx0XHRkaXJlY3Rpb249J3JvdydcclxuXHRcdFx0XHRcdFx0anVzdGlmeT0nc3BhY2UtYmV0d2VlbidcclxuXHRcdFx0XHRcdFx0c3BhY2luZz17NH1cclxuXHRcdFx0XHRcdFx0YWxpZ25JdGVtcz0nY2VudGVyJz5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5PkVudHJlIGxhIHNvY2nDqXTDqSA6PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdFx0U2nDqWdlIHNvY2lhbCA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFNBUyBXQU8gPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQxIFJvdXRlIGRlIE5vdWFydCA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDA4MjQwIEZvc3PDqSwgRlJBTkNFIDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0Q291cnJpZXIgOnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPSdtYWlsdG86Y29udGFjdEBnaXRlcy13YW8uZnInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250YWN0QGdpdGVzLXdhby5mclxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFNpdGUgaW50ZXJuZXQgOnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPSdodHRwOi8vd3d3LmdpdGVzLXdhby5mcic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdGh0dHA6Ly93d3cuZ2l0ZXMtd2FvLmZyXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0VGVsIDogKzMzICgwKTMgMjQgMzAgMDggOTUgPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRJQkFOIDogRlI3NiAxMDIwIDYwODQgMDM5OCAzODc3IDI5MjUgMDkzIDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0QklDIDogQUdSSUZSUFA4MDIgPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRUSVRVTEFJUkUgOiBTQVMgV0FPIDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPkV0IGxlIGxvY2F0YWlyZSA6PC9zcGFuPiA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFF1YWxpdMOpIDogPHNwYW4+e2NsaWVudC5jaXZpbGl0ZX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFByw6lub20gZXQgTm9tIDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtjbGllbnQubm9tfSB7Y2xpZW50LnByZW5vbX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0QWRyZXNzZSA6IDxzcGFuPntjbGllbnQuYWRyZXNzZX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdENQICYgVmlsbGUgOnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2NsaWVudC5jcH0ge2NsaWVudC52aWxsZX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0UGF5cyA6IDxzcGFuPntjbGllbnQucGF5c308L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFTDqWzDqXBob25lIDogPHNwYW4+e2NsaWVudC50ZWx9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRDb3VycmllciA6IDxzcGFuPntjbGllbnQubWFpbH08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRQb3VyIGxhIHRheGUgZGUgU8Opam91ciBub21icmUgZGUgcGVyc29ubmVzIDpcclxuXHRcdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHRcdFRheGFibGVzIDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLm5iUGVycyAtIHJlc2VydmF0aW9uLm5iRW5mfSAtIE5vblxyXG5cdFx0XHRcdFx0XHRcdFx0dGF4YWJsZXMgOiB7cmVzZXJ2YXRpb24ubmJFbmZ9XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlclRpdGxlfT5cclxuXHRcdFx0XHRcdFx0XHRDT05ESVRJT05TIERFIExPQ0FUSU9OXHJcblx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlclRpdGxlQ29sb3J9PlxyXG5cdFx0XHRcdFx0XHRcdETDqXNpZ25hdGlvbiBkZXMgbGlldXggZXQgZGVzY3JpcHRpZiBkdSBsb2dlbWVudFxyXG5cdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5lSGVpZ2h0fT5cclxuXHRcdFx0XHRcdFx0XHR7Z2l0ZS5jdERlc2lnbmF0aW9uVGl0cmV9XHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHJcblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBvU291bGlnbmV9PlxyXG5cdFx0XHRcdFx0XHRcdFByaW5jaXBhbGVzIGNhcmFjdMOpcmlzdGlxdWVzIDpcclxuXHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZWRpdG9yJz5cclxuXHRcdFx0XHRcdFx0XHR7cmVuZGVySFRNTChnaXRlLmN0UHJpbmNpcENhcmFjKX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBvU291bGlnbmV9PlxyXG5cdFx0XHRcdFx0XHRcdFNpdHVhdGlvbiBkdSBsb2dlbWVudCBkYW5zIGxhIGxvY2FsaXTDqSA6XHJcblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2VkaXRvcic+XHJcblx0XHRcdFx0XHRcdFx0e3JlbmRlckhUTUwoZ2l0ZS5jdFNpdHVMb2cpfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnR5cG9Tb3VsaWduZX0+XHJcblx0XHRcdFx0XHRcdFx0RGVzY3JpcHRpb24gZHUgbG9nZW1lbnQgOlxyXG5cdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2VkaXRvcidcclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17eyBtYXJnaW5Cb3R0b206ICc3MHB4JyB9fT5cclxuXHRcdFx0XHRcdFx0XHR7cmVuZGVySFRNTChnaXRlLmN0RGVzY0xvZyl9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlclRpdGxlQ29sb3J9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHREdXLDqWUgZGUgbGEgbG9jYXRpb24gOlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5lSGVpZ2h0UH0+XHJcblx0XHRcdFx0XHRcdFx0XHRMYSBwcsOpc2VudGUgbG9jYXRpb24gZXN0IGNvbnNlbnRpZSBldCBhY2NlcHTDqWVcclxuXHRcdFx0XHRcdFx0XHRcdHBvdXIgdW5lIGR1csOpZSBkZSA6IDIgbnVpdMOpZXMgRWxsZSBjb21tZW5jZSBsZVxyXG5cdFx0XHRcdFx0XHRcdFx0dmVuZHJlZGkgMjcgYW/Du3QgMjAyMSDDoCBwYXJ0aXIgZGUgMTdoIGV0IHNlXHJcblx0XHRcdFx0XHRcdFx0XHR0ZXJtaW5lcmEgbGUgZGltYW5jaGUgMjkgYW/Du3QgMjAyMSBhdSBwbHVzIHRhcmRcclxuXHRcdFx0XHRcdFx0XHRcdMOgIDE3aCBFbGxlIG5lIHBvdXJyYSBlbiBhdWN1biBjYXMgw6p0cmUgcHJvcm9nw6llLFxyXG5cdFx0XHRcdFx0XHRcdFx0c2F1ZiBhY2NvcmQgw6ljcml0IGV0IHByw6lhbGFibGUgZHUgcHJvcHJpw6l0YWlyZS5cclxuXHRcdFx0XHRcdFx0XHRcdFBvdXIgbm91cyBwZXJtZXR0cmUgZGUgbm91cyBvcmdhbmlzZXIsIChsZSBnw650ZVxyXG5cdFx0XHRcdFx0XHRcdFx0ZXN0IMOgIDQga20gZGUgbOKAmWhhYml0YXRpb24gcHJpbmNpcGFsZSBkdVxyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHJpw6l0YWlyZSksIHZvdXMgZGV2ZXogbm91cyBhdmVydGlyIHF1ZWxxdWVzXHJcblx0XHRcdFx0XHRcdFx0XHRqb3VycyDDoCBsJ2F2YW5jZSBkZSB2b3RyZSBoZXVyZSBkJ2Fycml2w6llIChwYXJcclxuXHRcdFx0XHRcdFx0XHRcdG1haWwgb3UgdMOpbMOpcGhvbmUpLlxyXG5cdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZUNvbG9yfT5cclxuXHRcdFx0XHRcdFx0XHRcdFByaXggZW4gRXVyb3NcclxuXHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMubGluZUhlaWdodFB9PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0TGEgcHLDqXNlbnRlIGxvY2F0aW9uIHNhaXNvbm5pw6hyZSBhIGxpZXVcclxuXHRcdFx0XHRcdFx0XHRcdFx0bW95ZW5uYW50IGxhIHNvbW1lIGRlIChtaW5pbXVtIGZpeGUgZGUgYmFzZSlcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxvYXQ6ICdyaWdodCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAneWVsbG93JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi50b3RhbFRhcmlmQmFzZX0sMDAg4oKsXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRUYXJpZiBwYXIgcGVyc29ubmUgc3VwcGzDqW1lbnRhaXJlIGF1LWRlbMOgIGR1XHJcblx0XHRcdFx0XHRcdFx0XHRcdG1pbmltdW0gZml4ZSA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdyZWQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtnaXRlLnN1cHBsZW1lbnRQYXJQZXJzfSwwMCDigqxcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhciBudWl0IGV0IHBhciBwZXJzb25uZSwgc29pdCA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdyZWQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi5uYlBlcnNTdXB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxvYXQ6ICdyaWdodCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAneWVsbG93JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi50b3RhbFRhcmlmU3VwcGx9LDAwIOKCrFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0SWwgY29tcHJlbmQgbGVzIGNoYXJnZXMgKHTDqWzDqXZpc2lvbiwgZWF1LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHTDqWxlY3RyaWNpdMOpKSwgbGUgbcOpbmFnZSBldCBsYSBmb3Vybml0dXJlIGRlc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkcmFwcyBldCB0YWllc1xyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0U3VwcGzDqW1lbnQgcGFyIGFuaW1hbHsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAncmVkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQzIOKCrFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0cGFyIGpvdXIuIFBvdXJ7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3JlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLm5iQ2hpZW59XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxvYXQ6ICdyaWdodCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAneWVsbG93JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi5tdEFuaW1hdXh9LDAwIOKCrFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Rm9yZmFpdCBsaXRzIGZhaXRzIMOgIGwnYXJyaXbDqWUgOnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAncmVkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Z2l0ZS5mdExpdH0sMDAg4oKsL3BlcnNvbm5lXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxvYXQ6ICdyaWdodCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAneWVsbG93JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi50b3RhbEZ0TGl0fSwwMCDigqxcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGVmdDogJzEwMHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAncmVkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFNvaXQgbGEgc29tbWUgZGU6XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsb2F0OiAncmlnaHQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3llbGxvdycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24ucmVzdGVBUGF5ZXJ9LDAwIOKCrFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFLDqWdsZW1lbnQgw6AgdHJhbnNtZXR0cmUgYXZlYyB2b3RyZSBjb250cmF0XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNpZ27DqSAoc2Vsb24gbGVzIG1vZGFsaXTDqXMgY2ktYXByw6hzKSDDoCB0aXRyZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkJ2Fjb21wdGUgOlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbG9hdDogJ3JpZ2h0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLmFjb21wdGV9LDAwIOKCrFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c29pdCBwYXIgdmlyZW1lbnQgKElCQU4gZGFucyBwYXJ0aWVcclxuXHRcdFx0XHRcdFx0XHRcdFx0c29jacOpdMOpKSwgb3UgY2jDqHF1ZSDDoCBsJ29yZHJlIGRlIFNBUyBXQU8sIG91XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNow6hxdWVzIHZhY2FuY2VzIChlbnZvaSBhdSBzacOoZ2Ugc29jaWFsKVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbG9hdDogJ3JpZ2h0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0ey8qIHtyZXNlcnZhdGlvbi59IFZvaXIgcG91ciBtb250YW50IGRlIGwnYWNvbXB0ZSAqL31cclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFRheGVzIGRpdmVyc2VzIGNhbGN1bMOpZXMgc3VyIGxlIG5vbWJyZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkJ2FkdWx0ZXMsIHNvaXQgOnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAncmVkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24ubmJQZXJzIC0gcmVzZXJ2YXRpb24ubmJFbmZ9eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwb3VyeycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdyZWQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi5uYk51aXRlc317JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdG51aXTDqWVzXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsb2F0OiAncmlnaHQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3llbGxvdycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Lyoge3Jlc2VydmF0aW9uLn0gKi99XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHROb3VzIGRlbWFuZG9ucyB1biBlbnZvaSBlbiByZWNvbW1hbmTDqVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR1bmlxdWVtZW50IHBvdXIgbGVzIGNow6hxdWVzIHZhY2FuY2VzLlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbG9hdDogJ3JpZ2h0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0ey8qIHtyZXNlcnZhdGlvbi59ICovfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0QXByw6hzIHZvdHJlIHPDqWpvdXIgdW4gc2NhbiBkZSBsYSBjYXV0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdGTDqXRydWl0ZSB2b3VzIHNlcmEgdHJhbnNtaXMgcGFyIGNvdXJyaWVsLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzYXVmIGVuIGNhcyBkZSBkw6lnw6J0cy5cclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxvYXQ6ICdyaWdodCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAneWVsbG93JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi5tdENhdXRpb259LDAwIOKCrFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250V2VpZ2h0OiAnYm9sZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcclxuXHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0TGEgcsOpc2VydmF0aW9uIGRldmllbmRyYSBlZmZlY3RpdmUgZMOocyBsb3JzIHF1ZVxyXG5cdFx0XHRcdFx0XHRcdFx0bGUgbG9jYXRhaXJlIGF1cmEgcmV0b3VybsOpIHVuIGV4ZW1wbGFpcmUgZGF0w6kgZXRcclxuXHRcdFx0XHRcdFx0XHRcdHNpZ27DqSBkdSBwcsOpc2VudCBjb250cmF0IGF2YW50IGxlIDA0LzA1LzIwMjBcclxuXHRcdFx0XHRcdFx0XHRcdGFjY29tcGFnbsOpIGR1IGNow6hxdWUuIEF1LWRlbMOgIGRlIGNldHRlIGRhdGUsIGxhXHJcblx0XHRcdFx0XHRcdFx0XHRyw6lzZXJ2YXRpb24gc2VyYSBjYWR1cXVlIGV0IGxlIHByb3ByacOpdGFpcmVcclxuXHRcdFx0XHRcdFx0XHRcdGRpc3Bvc2VyYSBsaWJyZW1lbnQgZHUgbG9nZW1lbnQuXHJcblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZUNvbG9yfT5cclxuXHRcdFx0XHRcdFx0XHRcdEFzc3VyYW5jZXNcclxuXHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMTZweCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0TGUgbG9jYXRhaXJlIGRvaXQgdsOpcmlmaWVyIHNpIHNvbiBjb250cmF0XHJcblx0XHRcdFx0XHRcdFx0ZOKAmWhhYml0YXRpb24gcHJpbmNpcGFsZSBwcsOpdm9pdCBs4oCZZXh0ZW5zaW9uXHJcblx0XHRcdFx0XHRcdFx0dmlsbMOpZ2lhdHVyZSBlbiByZXNwb25zYWJpbGl0w6kgY2l2aWxlLiBEYW5zXHJcblx0XHRcdFx0XHRcdFx0bOKAmWh5cG90aMOoc2UgY29udHJhaXJlLCBpbCBwZXV0IGludGVydmVuaXIgYXVwcsOocyBkZVxyXG5cdFx0XHRcdFx0XHRcdHNhIGNvbXBhZ25pZSBk4oCZYXNzdXJhbmNlIGV0IHLDqWNsYW1lciBs4oCZZXh0ZW5zaW9uIGRlXHJcblx0XHRcdFx0XHRcdFx0bGEgZ2FyYW50aWUgcG91ciBsYSBww6lyaW9kZSBkZSBsYSBsb2NhdGlvbiwgb3UgYmllblxyXG5cdFx0XHRcdFx0XHRcdHNvdXNjcmlyZSB1biBjb250cmF0IHBhcnRpY3VsaWVyIGF1IHRpdHJlIGRlc1xyXG5cdFx0XHRcdFx0XHRcdGNsYXVzZXMgdmlsbMOpZ2lhdHVyZS4gRGVycmnDqHJlIGxlIGfDrnRlIHNlIHRyb3V2ZSB1blxyXG5cdFx0XHRcdFx0XHRcdHJ1aXNzZWF1IGV0IHVuIMOpdGFuZywgcGFyIG1lc3VyZSBkZSBzw6ljdXJpdMOpLCBMZXNcclxuXHRcdFx0XHRcdFx0XHRlbmZhbnRzIGRldnJvbnQgdG91am91cnMgw6p0cmUgYWNjb21wYWduw6lzIGTigJl1blxyXG5cdFx0XHRcdFx0XHRcdGFkdWx0ZSBldCBsZSBwcm9wcmnDqXRhaXJlIG5lIHBldXQgZW4gYXVjdW4gY2FzIMOqdHJlXHJcblx0XHRcdFx0XHRcdFx0dGVudSBwb3VyIHJlc3BvbnNhYmxlIGRlcyBhY2NpZGVudHMgcXVpIHBvdXJyYWllbnQgeVxyXG5cdFx0XHRcdFx0XHRcdHN1cnZlbmlyLiBEZSBtw6ptZSBwb3VyIGzigJlhaXJlIGRlIGpldSBkdSBnw650ZSwgbGVzXHJcblx0XHRcdFx0XHRcdFx0ZW5mYW50cyBxdWkgbOKAmXV0aWxpc2VudCBkb2l2ZW50IMOqdHJlIHNvdXMgbGFcclxuXHRcdFx0XHRcdFx0XHRzdXJ2ZWlsbGFuY2UgZGVzIHBhcmVudHMuXHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHJcblx0XHRcdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZUNvbG9yfT5cclxuXHRcdFx0XHRcdFx0XHRcdEV0YXQgZGVzIGxpZXV4IGV0IGludmVudGFpcmVcclxuXHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5lSGVpZ2h0UH0+XHJcblx0XHRcdFx0XHRcdFx0TGUgZG9jdW1lbnQgcG91ciBs4oCZw6l0YXQgZGVzIGxpZXV4IHNlIHRyb3V2ZSBkYW5zIGxlXHJcblx0XHRcdFx0XHRcdFx0Y2FoaWVyIGTigJlleHBsaWNhdGlvbiBkdSBnw650ZS4gQ2UgY29udHJhdCBmYWl0IG9mZmljZVxyXG5cdFx0XHRcdFx0XHRcdGQnaW52ZW50YWlyZS4gUG91ciDDqXZpdGVyIHRvdXRlIGNvbnRlc3RhdGlvbiBsZVxyXG5cdFx0XHRcdFx0XHRcdGxvY2F0YWlyZSB2b3VkcmEgYmllbiBjb250csO0bGVyIGV0IHNpZ25hbGVyIHRvdXRlXHJcblx0XHRcdFx0XHRcdFx0YW5vbWFsaWUgZGFucyBsZXMgMjQgaGV1cmVzLiBQYXNzw6kgY2UgZMOpbGFpLCBsZXNcclxuXHRcdFx0XHRcdFx0XHRiaWVucyBsb3XDqXMgc2Vyb250IGNvbnNpZMOpcsOpcyBjb21tZSBleGVtcHRzIGRlXHJcblx0XHRcdFx0XHRcdFx0ZG9tbWFnZXMgw6AgbOKAmWVudHLDqWUgZHUgbG9jYXRhaXJlLiBDZWx1aS1jaSBzZXJhXHJcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2FibGUgZGUgdG91dGUgZMOpdMOpcmlvcmF0aW9uIG91IHBlcnRlIHBvdXZhbnRcclxuXHRcdFx0XHRcdFx0XHRzdXJ2ZW5pciDDoCBjZSBtb2JpbGllciBhaW5zaSBxdeKAmWF1eCBkaXZlcnMgbWF0w6lyaWVsc1xyXG5cdFx0XHRcdFx0XHRcdGRlIGzigJllc3BhY2UgcGlzY2luZSBldCBkw6l0ZW50ZS5cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlclRpdGxlQ29sb3J9PlxyXG5cdFx0XHRcdFx0XHRcdFx0Sm91aXNzYW5jZSBkZXMgbGlldXhcclxuXHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5lSGVpZ2h0UH0+XHJcblx0XHRcdFx0XHRcdFx0TGUgbG9jYXRhaXJlIGVudHJldGllbmRyYSBsZXMgbGlldXggbG91w6lzIGV0IGxlc1xyXG5cdFx0XHRcdFx0XHRcdHJlbmRyYSBlbiBib24gw6l0YXQgZGUgcHJvcHJldMOpLiBJbCB2ZWlsbGVyYSDDoCBjZSBxdWVcclxuXHRcdFx0XHRcdFx0XHRsYSB0cmFucXVpbGxpdMOpIGR1IHZvaXNpbmFnZSBuZSBzb2l0IHBhcyB0cm91YmzDqWUuXHJcblx0XHRcdFx0XHRcdFx0TGEgc291cyBsb2NhdGlvbiBlc3QgaW50ZXJkaXRlIGF1IHByZW5ldXIsIG3Dqm1lIMOgXHJcblx0XHRcdFx0XHRcdFx0dGl0cmUgZ3JhdHVpdCwgc291cyBwZWluZSBkZSByw6lzaWxpYXRpb24gZHUgY29udHJhdC5cclxuXHRcdFx0XHRcdFx0XHRM4oCZaW5zdGFsbGF0aW9uIGRlIHRlbnRlcyBvdSBsZSBzdGF0aW9ubmVtZW50IGRlXHJcblx0XHRcdFx0XHRcdFx0Y2FyYXZhbmVzIHN1ciBsZSB0ZXJyYWluIGRlIGxhIHByb3ByacOpdMOpIGxvdcOpZSBlc3RcclxuXHRcdFx0XHRcdFx0XHRpbnRlcmRpdCwgc2F1ZiBhY2NvcmQgcHLDqWFsYWJsZSBkdSBwcm9wcmnDqXRhaXJlLlxyXG5cdFx0XHRcdFx0XHRcdEzigJl1dGlsaXNhdGV1ciBz4oCZZW5nYWdlIMOgIG5lIHBhcyB1dGlsaXNlciBsZSBzZXJ2aWNlXHJcblx0XHRcdFx0XHRcdFx0V0ktRkkgw6AgZGVzIGZpbnMgaWxsaWNpdGVzLCBpbnRlcmRpdGVzIG91IGlsbMOpZ2FsZXNcclxuXHRcdFx0XHRcdFx0XHQoZW50cmUgYXV0cmVzIHJlc3BlY3QgZGUgbGEgbG9pIEhhZG9waSkuIExlIGxvdWV1cixcclxuXHRcdFx0XHRcdFx0XHTDoCBsYSBkZW1hbmRlIGRlIHRpZXJzIGV0L291IGRlIHRvdXRlIGF1dG9yaXTDqVxyXG5cdFx0XHRcdFx0XHRcdGNvbXDDqXRlbnRlLCBzZSByw6lzZXJ2ZSBsZSBkcm9pdCBkZSBzdXNwZW5kcmVcclxuXHRcdFx0XHRcdFx0XHR0ZW1wb3JhaXJlbWVudCBvdSBkZSBtYW5pw6hyZSBkw6lmaW5pdGl2ZSB0b3V0ZVxyXG5cdFx0XHRcdFx0XHRcdHV0aWxpc2F0aW9uIGR1IHNlcnZpY2Ugc2FucyBxdWUgc2EgcmVzcG9uc2FiaWxpdMOpIG5lXHJcblx0XHRcdFx0XHRcdFx0cHVpc3NlIMOqdHJlIHJlY2hlcmNow6llIGV0IHNhbnMgcXVlIGzigJl1dGlsaXNhdGV1ciBuZVxyXG5cdFx0XHRcdFx0XHRcdHB1aXNzZSByZXZlbmRpcXVlciB1bmUgcXVlbGNvbnF1ZSBpbmRlbW5pc2F0aW9uIG91XHJcblx0XHRcdFx0XHRcdFx0csOpcGFyYXRpb24uIEVuIGF1Y3VuIGNhcyBsZSBsb3VldXIgbmUgcGV1dCDDqnRyZVxyXG5cdFx0XHRcdFx0XHRcdHRlbnVlIGRlIHLDqXBhcmVyIGxlcyBwcsOpanVkaWNlcyBkaXJlY3RzIGV0L291XHJcblx0XHRcdFx0XHRcdFx0aW5kaXJlY3RzIHN1YmlzIGR1IGZhaXQgZGUgbOKAmXV0aWxpc2F0aW9uIGR1IHNlcnZpY2VcclxuXHRcdFx0XHRcdFx0XHRwYXIgbOKAmXV0aWxpc2F0ZXVyLCBjZSBkZXJuaWVyIHJlY29ubmFpc3NhbnQgcXVlIGxlXHJcblx0XHRcdFx0XHRcdFx0bG91ZXVyIG5lIHBldXQgcGFzIMOqdHJlIHJlc3BvbnNhYmxlIGRlcyBjb250ZW51c1xyXG5cdFx0XHRcdFx0XHRcdGF1cXVlbCBhY2PDqGRlIGzigJl1dGlsaXNhdGV1ciBldCBxdWUgbOKAmWFjY2Vzc2liaWxpdMOpXHJcblx0XHRcdFx0XHRcdFx0YXV4IGNvbnRlbnVzIGV0IHNlcnZpY2VzIG7igJllc3QgcGFzIGdhcmFudGllIGV0IHBldXRcclxuXHRcdFx0XHRcdFx0XHTDqnRyZSBzdXNwZW5kdWUgc2FucyBwcsOpYXZpcy5cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlclRpdGxlQ29sb3J9PlxyXG5cdFx0XHRcdFx0XHRcdFx0Q2xhdXNlIHLDqXNvbHV0b2lyZVxyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmVIZWlnaHRQfT5cclxuXHRcdFx0XHRcdFx0XHRBIGTDqWZhdXQgZGUgcGFpZW1lbnQgYXV4IMOpY2jDqWFuY2VzIGZpeMOpZXMgb3UgZW4gY2FzXHJcblx0XHRcdFx0XHRcdFx0ZOKAmWluZXjDqWN1dGlvbiBk4oCZdW5lIGRlcyBjbGF1c2VzIGR1IHByw6lzZW50XHJcblx0XHRcdFx0XHRcdFx0ZW5nYWdlbWVudCBldCBjaW5xIGpvdXJzIGZyYW5jcyBhcHLDqHMgdW5lIHNpbXBsZVxyXG5cdFx0XHRcdFx0XHRcdHNvbW1hdGlvbiBwYXIgbGV0dHJlIHJlY29tbWFuZMOpZSByZXN0w6llXHJcblx0XHRcdFx0XHRcdFx0aW5mcnVjdHVldXNlLCBsZSBwcsOpc2VudCBjb250cmF0IHNlcmEgaW1tw6lkaWF0ZW1lbnRcclxuXHRcdFx0XHRcdFx0XHRyw6lzaWxpw6kgZXQgbGUgYmFpbGxldXIgcG91cnJhIHNlIHByw6l2YWxvaXIgZGVcclxuXHRcdFx0XHRcdFx0XHRs4oCZYXJ0aWNsZSAxNTkwIGR1IENvZGUgY2l2aWwgcG91ciBjb25zZXJ2ZXIgbGVzXHJcblx0XHRcdFx0XHRcdFx0YWNvbXB0ZXMgdmVyc8OpcyDDoCB0aXRyZSBkZXMgcHJlbWllcnNcclxuXHRcdFx0XHRcdFx0XHRkb21tYWdlcy1pbnTDqXLDqnRzLlxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblxyXG5cdFx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyVGl0bGVDb2xvcn0+XHJcblx0XHRcdFx0XHRcdFx0XHRBbm51bGF0aW9uXHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMubGluZUhlaWdodFB9PlxyXG5cdFx0XHRcdFx0XHRcdExhIHNpZ25hdHVyZSBkdSBjb250cmF0IGVuZ2FnZSBsZXMgZGV1eCBwYXJ0aWVzIGRlXHJcblx0XHRcdFx0XHRcdFx0ZmHDp29uIGTDqWZpbml0aXZlLiBTaSBsZSBsb2NhdGFpcmUgcmVub25jZSDDoCBsYVxyXG5cdFx0XHRcdFx0XHRcdGxvY2F0aW9uIDYwIGpvdXJzIGF2YW50IGzigJlhcnJpdsOpZSwgbOKAmWFjb21wdGUgZXN0XHJcblx0XHRcdFx0XHRcdFx0cmVtYm91cnPDqS4gRW50cmUgMSBqb3VyIGV0IDYwIGpvdXJzIHNpIG5vdXNcclxuXHRcdFx0XHRcdFx0XHRyw6l1c3Npc3NvbnMgw6AgcmVsb3VlciwgbOKAmWFjb21wdGUgZXN0IMOpZ2FsZW1lbnRcclxuXHRcdFx0XHRcdFx0XHRyZW1ib3Vyc8OpLiBTaW5vbiBs4oCZYWNvbXB0ZSBlc3QgcGVyZHUuXHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHJcblx0XHRcdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZUNvbG9yfT5cclxuXHRcdFx0XHRcdFx0XHRcdEVsZWN0aW9uIGRlIGRvbWljaWxlXHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMubGluZUhlaWdodFB9PlxyXG5cdFx0XHRcdFx0XHRcdFBvdXIgbOKAmWV4w6ljdXRpb24gZGVzIHByw6lzZW50ZXMsIGxlIHByb3ByacOpdGFpcmUgZXRcclxuXHRcdFx0XHRcdFx0XHRsZSBsb2NhdGFpcmUgZm9udCDDqWxlY3Rpb24gZGUgZG9taWNpbGUgZGFucyBsZXVyc1xyXG5cdFx0XHRcdFx0XHRcdGRvbWljaWxlcyByZXNwZWN0aWZzLiBUb3V0ZWZvaXMgZW4gY2FzIGRlIGxpdGlnZSwgbGVcclxuXHRcdFx0XHRcdFx0XHR0cmlidW5hbCBkZXMgbGlldXggbG91w6lzIHNlcmEgc2V1bCBjb21ww6l0ZW50LlxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblxyXG5cdFx0XHRcdFx0PEdyaWRcclxuXHRcdFx0XHRcdFx0Y29udGFpbmVyXHJcblx0XHRcdFx0XHRcdGRpcmVjdGlvbj0ncm93J1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5PSdzcGFjZS1iZXR3ZWVuJ1xyXG5cdFx0XHRcdFx0XHRzcGFjaW5nPXs0fVxyXG5cdFx0XHRcdFx0XHRhbGlnbkl0ZW1zPSdmbGV4LWVuZCdcclxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgbWFyZ2luVG9wOiAnMjBweCcgfX0+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHRGYWl0IGVuIGRldXggZXhlbXBsYWlyZXMgw6AgRm9zc8OpIGxlIHtEYXRlLm5vdygpfVxyXG5cdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8cD5TaWduYXR1cmUgZHUgcHJvcHJpw6l0YWlyZSw8L3A+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdErigJlhaSBwcmlzIGNvbm5haXNzYW5jZSBkZXMgY29uZGl0aW9ucyBkZVxyXG5cdFx0XHRcdFx0XHRcdFx0bG9jYXRpb24gY2ktZGVzc3VzXHJcblx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxwIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzIwcHgnIH19PkRhdGUgOjwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFNpZ25hdHVyZSBkdSBsb2NhdGFpcmUgKHByw6ljw6lkw6kgZGUgbGEgbWVudGlvbiBsdVxyXG5cdFx0XHRcdFx0XHRcdFx0ZXQgYXBwcm91dsOpKVxyXG5cdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L1RoZW1lUHJvdmlkZXI+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcblx0Ly8gY29uc29sZS5sb2coJ2NvbnRleHQnLCBjb250ZXh0LnF1ZXJ5LmlkKTtcclxuXHRjb25zdCByZXMxID0gYXdhaXQgYWZmaWNoZVJlc2VydmF0aW9uKGNvbnRleHQucXVlcnkuaWQpO1xyXG5cdGNvbnN0IHJlc2VydmF0aW9uID0gYXdhaXQgcmVzMTtcclxuXHQvLyBjb25zb2xlLmxvZygncmVzZXJ2YXRpb24nLCByZXNlcnZhdGlvbik7XHJcblx0Y29uc3QgcmVzMiA9IGF3YWl0IGxpc3RHaXRlQnlJZChyZXNlcnZhdGlvbi5naXRlKTtcclxuXHRjb25zdCBnaXRlID0gYXdhaXQgcmVzMjtcclxuXHRjb25zdCByZXMzID0gYXdhaXQgYWZmaWNoZUNsaWVudChyZXNlcnZhdGlvbi5jbGllbnQpO1xyXG5cdGNvbnN0IGNsaWVudCA9IGF3YWl0IHJlczM7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRyZXNlcnZhdGlvbixcclxuXHRcdFx0Z2l0ZSxcclxuXHRcdFx0Y2xpZW50LFxyXG5cdFx0fSxcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlcnZhdGlvbklkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9