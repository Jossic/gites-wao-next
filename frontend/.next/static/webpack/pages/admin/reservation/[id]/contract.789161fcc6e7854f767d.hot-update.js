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
      position: 'relative',
      left: '850px',
      fontWeight: 'bold'
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
      backgroundColor: 'yellow',
      fontWeight: 'bold'
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
      lineNumber: 324,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'right'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
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
      lineNumber: 330,
      columnNumber: 9
    }
  }, reservation.acompte, ",00 \u20AC")), __jsx("div", {
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
  }, "soit par virement (IBAN dans partie soci\xE9t\xE9), ou ch\xE8que \xE0 l'ordre de", ' ', __jsx("span", {
    style: {
      color: 'red',
      fontWeight: 'bold',
      textDecoration: 'underline'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 10
    }
  }, "SAS WAO"), ", ou ch\xE8ques vacances (envoi au si\xE8ge social)"), __jsx("span", {
    style: {
      "float": 'right',
      backgroundColor: 'yellow'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 9
    }
  }, "Taxes diverses calcul\xE9es sur le nombre d'adultes, soit :", ' ', __jsx("span", {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 10
    }
  }, reservation.nbPers - reservation.nbEnf, ' '), "pour", ' ', __jsx("span", {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
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
      lineNumber: 380,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
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
      lineNumber: 393,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
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
      lineNumber: 407,
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
      lineNumber: 415,
      columnNumber: 8
    }
  }, "La r\xE9servation deviendra effective d\xE8s lors que le locataire aura retourn\xE9 un exemplaire dat\xE9 et sign\xE9 du pr\xE9sent contrat avant le 04/05/2020 accompagn\xE9 du ch\xE8que. Au-del\xE0 de cette date, la r\xE9servation sera caduque et le propri\xE9taire disposera librement du logement.")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 8
    }
  }, "Assurances")), __jsx("p", {
    style: {
      fontSize: '16px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 7
    }
  }, "Le locataire doit v\xE9rifier si son contrat d\u2019habitation principale pr\xE9voit l\u2019extension vill\xE9giature en responsabilit\xE9 civile. Dans l\u2019hypoth\xE8se contraire, il peut intervenir aupr\xE8s de sa compagnie d\u2019assurance et r\xE9clamer l\u2019extension de la garantie pour la p\xE9riode de la location, ou bien souscrire un contrat particulier au titre des clauses vill\xE9giature. Derri\xE8re le g\xEEte se trouve un ruisseau et un \xE9tang, par mesure de s\xE9curit\xE9, Les enfants devront toujours \xEAtre accompagn\xE9s d\u2019un adulte et le propri\xE9taire ne peut en aucun cas \xEAtre tenu pour responsable des accidents qui pourraient y survenir. De m\xEAme pour l\u2019aire de jeu du g\xEEte, les enfants qui l\u2019utilisent doivent \xEAtre sous la surveillance des parents."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 8
    }
  }, "Etat des lieux et inventaire")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 7
    }
  }, "Le document pour l\u2019\xE9tat des lieux se trouve dans le cahier d\u2019explication du g\xEEte. Ce contrat fait office d'inventaire. Pour \xE9viter toute contestation le locataire voudra bien contr\xF4ler et signaler toute anomalie dans les 24 heures. Pass\xE9 ce d\xE9lai, les biens lou\xE9s seront consid\xE9r\xE9s comme exempts de dommages \xE0 l\u2019entr\xE9e du locataire. Celui-ci sera responsable de toute d\xE9t\xE9rioration ou perte pouvant survenir \xE0 ce mobilier ainsi qu\u2019aux divers mat\xE9riels de l\u2019espace piscine et d\xE9tente."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 8
    }
  }, "Jouissance des lieux")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 7
    }
  }, "Le locataire entretiendra les lieux lou\xE9s et les rendra en bon \xE9tat de propret\xE9. Il veillera \xE0 ce que la tranquillit\xE9 du voisinage ne soit pas troubl\xE9e. La sous location est interdite au preneur, m\xEAme \xE0 titre gratuit, sous peine de r\xE9siliation du contrat. L\u2019installation de tentes ou le stationnement de caravanes sur le terrain de la propri\xE9t\xE9 lou\xE9e est interdit, sauf accord pr\xE9alable du propri\xE9taire. L\u2019utilisateur s\u2019engage \xE0 ne pas utiliser le service WI-FI \xE0 des fins illicites, interdites ou ill\xE9gales (entre autres respect de la loi Hadopi). Le loueur, \xE0 la demande de tiers et/ou de toute autorit\xE9 comp\xE9tente, se r\xE9serve le droit de suspendre temporairement ou de mani\xE8re d\xE9finitive toute utilisation du service sans que sa responsabilit\xE9 ne puisse \xEAtre recherch\xE9e et sans que l\u2019utilisateur ne puisse revendiquer une quelconque indemnisation ou r\xE9paration. En aucun cas le loueur ne peut \xEAtre tenue de r\xE9parer les pr\xE9judices directs et/ou indirects subis du fait de l\u2019utilisation du service par l\u2019utilisateur, ce dernier reconnaissant que le loueur ne peut pas \xEAtre responsable des contenus auquel acc\xE8de l\u2019utilisateur et que l\u2019accessibilit\xE9 aux contenus et services n\u2019est pas garantie et peut \xEAtre suspendue sans pr\xE9avis."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
      columnNumber: 8
    }
  }, "Clause r\xE9solutoire")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 7
    }
  }, "A d\xE9faut de paiement aux \xE9ch\xE9ances fix\xE9es ou en cas d\u2019inex\xE9cution d\u2019une des clauses du pr\xE9sent engagement et cinq jours francs apr\xE8s une simple sommation par lettre recommand\xE9e rest\xE9e infructueuse, le pr\xE9sent contrat sera imm\xE9diatement r\xE9sili\xE9 et le bailleur pourra se pr\xE9valoir de l\u2019article 1590 du Code civil pour conserver les acomptes vers\xE9s \xE0 titre des premiers dommages-int\xE9r\xEAts."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 8
    }
  }, "Annulation")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 7
    }
  }, "La signature du contrat engage les deux parties de fa\xE7on d\xE9finitive. Si le locataire renonce \xE0 la location 60 jours avant l\u2019arriv\xE9e, l\u2019acompte est rembours\xE9. Entre 1 jour et 60 jours si nous r\xE9ussissons \xE0 relouer, l\u2019acompte est \xE9galement rembours\xE9. Sinon l\u2019acompte est perdu."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534,
      columnNumber: 8
    }
  }, "Election de domicile")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
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
      lineNumber: 546,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 8
    }
  }, "Fait en deux exemplaires \xE0 Foss\xE9 le ", Date.now()), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 8
    }
  }, "Signature du propri\xE9taire,")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560,
      columnNumber: 8
    }
  }, "J\u2019ai pris connaissance des conditions de location ci-dessus"), __jsx("p", {
    style: {
      marginBottom: '20px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 8
    }
  }, "Date :"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24vL2NvbnRyYWN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwidHlwZSIsIlJlc2VydmF0aW9uSWQiLCJyZXNlcnZhdGlvbiIsImNsaWVudCIsImdpdGUiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImZsZXhHcm93Iiwid2lkdGgiLCJwYXBlciIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInRleHRBbGlnbiIsInBhcGVyVGl0bGUiLCJtYXJnaW5Ub3AiLCJwYXBlclRpdGxlQ29sb3IiLCJtYXJnaW5Cb3R0b20iLCJjb3VsZXVyMSIsInR5cG9Tb3VsaWduZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsInRleHREZWNvcmF0aW9uIiwiY2xhc3NlcyIsInZpZ25ldHRlTGluayIsIm5vbSIsImNpdmlsaXRlIiwicHJlbm9tIiwiYWRyZXNzZSIsImNwIiwidmlsbGUiLCJwYXlzIiwidGVsIiwibWFpbCIsIm5iUGVycyIsIm5iRW5mIiwibGluZUhlaWdodCIsImN0RGVzaWduYXRpb25UaXRyZSIsInJlbmRlckhUTUwiLCJjdFByaW5jaXBDYXJhYyIsImN0U2l0dUxvZyIsImN0RGVzY0xvZyIsImxpbmVIZWlnaHRQIiwidG90YWxUYXJpZkJhc2UiLCJjb2xvciIsInN1cHBsZW1lbnRQYXJQZXJzIiwibmJQZXJzU3VwIiwidG90YWxUYXJpZlN1cHBsIiwibmJDaGllbiIsIm10QW5pbWF1eCIsImZ0TGl0IiwidG90YWxGdExpdCIsInBvc2l0aW9uIiwibGVmdCIsInJlc3RlQVBheWVyIiwiYWNvbXB0ZSIsIm5iTnVpdGVzIiwibXRDYXV0aW9uIiwiRGF0ZSIsIm5vdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFBQTtBQUFBO0FBQUEsaUZBTkQsQ0FiRCxDQW5lRCxDQUhELENBREQsQ0FERDtBQXFnQkEsQ0F6aUJEOztHQUFNaEIsYTs7S0FBQUEsYTs7QUE4akJTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9yZXNlcnZhdGlvbi9baWRdL2NvbnRyYWN0Ljc4OTE2MWZjYzZlNzg1NGY3NjdkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG5cdGFmZmljaGVDbGllbnQsXHJcblx0Z2V0Q2xpZW50QnlJZCxcclxufSBmcm9tICcuLi8uLi8uLi8uLi8uLi9hY3Rpb25zL2NsaWVudEFjdGlvbnMnO1xyXG5pbXBvcnQgeyBsaXN0R2l0ZUJ5SWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IHsgYWZmaWNoZVJlc2VydmF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vYWN0aW9ucy9yZXNlcnZhdGlvbkFjdGlvbnMnO1xyXG5pbXBvcnQgQWRtaW4gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9hdXRoL0FkbWluJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCB7IEdyaWQsIFBhcGVyLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgcmVuZGVySFRNTCBmcm9tICdyZWFjdC1yZW5kZXItaHRtbCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xyXG5cdHBhbGV0dGU6IHtcclxuXHRcdHR5cGU6ICdsaWdodCcsXHJcblx0fSxcclxufSk7XHJcblxyXG5jb25zdCBSZXNlcnZhdGlvbklkID0gKHsgcmVzZXJ2YXRpb24sIGNsaWVudCwgZ2l0ZSB9KSA9PiB7XHJcblx0Y29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0XHRyb290OiB7XHJcblx0XHRcdGZsZXhHcm93OiAxLFxyXG5cdFx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0fSxcclxuXHRcdHBhcGVyOiB7XHJcblx0XHRcdGhlaWdodDogMjMwLFxyXG5cdFx0XHR3aWR0aDogNDgwLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjZGRkZGRkJyxcclxuXHRcdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRcdH0sXHJcblx0XHRwYXBlclRpdGxlOiB7XHJcblx0XHRcdGhlaWdodDogMzAsXHJcblx0XHRcdG1hcmdpblRvcDogJzEwcHgnLFxyXG5cdFx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjY2NjY2NjJyxcclxuXHRcdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRcdH0sXHJcblx0XHRwYXBlclRpdGxlQ29sb3I6IHtcclxuXHRcdFx0aGVpZ2h0OiAzMCxcclxuXHRcdFx0bWFyZ2luVG9wOiAnMTBweCcsXHJcblx0XHRcdG1hcmdpbkJvdHRvbTogJzEwcHgnLFxyXG5cdFx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGAke2dpdGUuY291bGV1cjF9YCxcclxuXHRcdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRcdH0sXHJcblx0XHR0eXBvU291bGlnbmU6IHtcclxuXHRcdFx0Zm9udFdlaWdodDogJ2JvbGQnLFxyXG5cdFx0XHRmb250U2l6ZTogJzE4cHgnLFxyXG5cdFx0XHRtYXJnaW5Cb3R0b206ICcxMHB4JyxcclxuXHRcdFx0dGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxyXG5cdFx0fSxcclxuXHR9KSk7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuXHRcdFx0XHQ8Q3NzQmFzZWxpbmUgLz5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcblx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0gYWxpZ25JdGVtcz0nZmxleC1zdGFydCc+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezJ9PlxyXG5cdFx0XHRcdFx0XHRcdDxJbWFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdkLWJsb2NrIHctMTAwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0c3JjPXtnaXRlLnZpZ25ldHRlTGlua31cclxuXHRcdFx0XHRcdFx0XHRcdGFsdD17Z2l0ZS5ub219XHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aD17NTAwfVxyXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXszNzV9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMH0+XHJcblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHlcclxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J2g1J1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50PSdoNSdcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRDT05UUkFUIERFIExPQ0FUSU9OIEVOIE1FVUJMw4kgU0FJU09OTklFUiA8YnIgLz57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHRNYWRhbWUsIE1vbnNpZXVyLiBTdWl0ZSDDoCB2b3RyZSBkZW1hbmRlLCBqZSB2b3VzXHJcblx0XHRcdFx0XHRcdFx0YWRyZXNzZSBsZSBwcsOpc2VudCBjb250cmF0IGRlIGxvY2F0aW9uIGRvbnQgMVxyXG5cdFx0XHRcdFx0XHRcdGV4ZW1wbGFpcmUgZXN0IMOgIG1lIHJldG91cm5lciAocGFyIGNvdXJyaWVyIG91IG1haWwpXHJcblx0XHRcdFx0XHRcdFx0cmV2w6p0dSBkZSB2b3RyZSBzaWduYXR1cmUgZXQgYWNjb21wYWduw6kgZHUgbW9udGFudFxyXG5cdFx0XHRcdFx0XHRcdGRlIGzigJlhY29tcHRlICh2aXJlbWVudCBvdSBjb3VycmllcikuIEVuIGVzcMOpcmFudFxyXG5cdFx0XHRcdFx0XHRcdGF2b2lyIGxlIHBsYWlzaXIgZGUgdm91cyBhY2N1ZWlsbGlyIHByb2NoYWluZW1lbnQsXHJcblx0XHRcdFx0XHRcdFx0cmVjZXZleiBtZXMgc2luY8OocmVzIHNhbHV0YXRpb25zLlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblxyXG5cdFx0XHRcdFx0PEdyaWRcclxuXHRcdFx0XHRcdFx0Y29udGFpbmVyXHJcblx0XHRcdFx0XHRcdGRpcmVjdGlvbj0ncm93J1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5PSdzcGFjZS1iZXR3ZWVuJ1xyXG5cdFx0XHRcdFx0XHRzcGFjaW5nPXs0fVxyXG5cdFx0XHRcdFx0XHRhbGlnbkl0ZW1zPSdjZW50ZXInPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHk+RW50cmUgbGEgc29jacOpdMOpIDo8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0XHRTacOpZ2Ugc29jaWFsIDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0U0FTIFdBTyA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDEgUm91dGUgZGUgTm91YXJ0IDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0MDgyNDAgRm9zc8OpLCBGUkFOQ0UgPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRDb3VycmllciA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9J21haWx0bzpjb250YWN0QGdpdGVzLXdhby5mcic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRhY3RAZ2l0ZXMtd2FvLmZyXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0U2l0ZSBpbnRlcm5ldCA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9J2h0dHA6Ly93d3cuZ2l0ZXMtd2FvLmZyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0aHR0cDovL3d3dy5naXRlcy13YW8uZnJcclxuXHRcdFx0XHRcdFx0XHRcdDwvYT57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRUZWwgOiArMzMgKDApMyAyNCAzMCAwOCA5NSA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdElCQU4gOiBGUjc2IDEwMjAgNjA4NCAwMzk4IDM4NzcgMjkyNSAwOTMgPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRCSUMgOiBBR1JJRlJQUDgwMiA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFRJVFVMQUlSRSA6IFNBUyBXQU8gPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+RXQgbGUgbG9jYXRhaXJlIDo8L3NwYW4+IDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0UXVhbGl0w6kgOiA8c3Bhbj57Y2xpZW50LmNpdmlsaXRlfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0UHLDqW5vbSBldCBOb20gOnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2NsaWVudC5ub219IHtjbGllbnQucHJlbm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRBZHJlc3NlIDogPHNwYW4+e2NsaWVudC5hZHJlc3NlfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0Q1AgJiBWaWxsZSA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Y2xpZW50LmNwfSB7Y2xpZW50LnZpbGxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRQYXlzIDogPHNwYW4+e2NsaWVudC5wYXlzfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0VMOpbMOpcGhvbmUgOiA8c3Bhbj57Y2xpZW50LnRlbH08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdENvdXJyaWVyIDogPHNwYW4+e2NsaWVudC5tYWlsfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFBvdXIgbGEgdGF4ZSBkZSBTw6lqb3VyIG5vbWJyZSBkZSBwZXJzb25uZXMgOlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdFx0VGF4YWJsZXMgOnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24ubmJQZXJzIC0gcmVzZXJ2YXRpb24ubmJFbmZ9IC0gTm9uXHJcblx0XHRcdFx0XHRcdFx0XHR0YXhhYmxlcyA6IHtyZXNlcnZhdGlvbi5uYkVuZn1cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyVGl0bGV9PlxyXG5cdFx0XHRcdFx0XHRcdENPTkRJVElPTlMgREUgTE9DQVRJT05cclxuXHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyVGl0bGVDb2xvcn0+XHJcblx0XHRcdFx0XHRcdFx0RMOpc2lnbmF0aW9uIGRlcyBsaWV1eCBldCBkZXNjcmlwdGlmIGR1IGxvZ2VtZW50XHJcblx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmVIZWlnaHR9PlxyXG5cdFx0XHRcdFx0XHRcdHtnaXRlLmN0RGVzaWduYXRpb25UaXRyZX1cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnR5cG9Tb3VsaWduZX0+XHJcblx0XHRcdFx0XHRcdFx0UHJpbmNpcGFsZXMgY2FyYWN0w6lyaXN0aXF1ZXMgOlxyXG5cdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdlZGl0b3InPlxyXG5cdFx0XHRcdFx0XHRcdHtyZW5kZXJIVE1MKGdpdGUuY3RQcmluY2lwQ2FyYWMpfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnR5cG9Tb3VsaWduZX0+XHJcblx0XHRcdFx0XHRcdFx0U2l0dWF0aW9uIGR1IGxvZ2VtZW50IGRhbnMgbGEgbG9jYWxpdMOpIDpcclxuXHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZWRpdG9yJz5cclxuXHRcdFx0XHRcdFx0XHR7cmVuZGVySFRNTChnaXRlLmN0U2l0dUxvZyl9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudHlwb1NvdWxpZ25lfT5cclxuXHRcdFx0XHRcdFx0XHREZXNjcmlwdGlvbiBkdSBsb2dlbWVudCA6XHJcblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZWRpdG9yJ1xyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzcwcHgnIH19PlxyXG5cdFx0XHRcdFx0XHRcdHtyZW5kZXJIVE1MKGdpdGUuY3REZXNjTG9nKX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyVGl0bGVDb2xvcn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdER1csOpZSBkZSBsYSBsb2NhdGlvbiA6XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmVIZWlnaHRQfT5cclxuXHRcdFx0XHRcdFx0XHRcdExhIHByw6lzZW50ZSBsb2NhdGlvbiBlc3QgY29uc2VudGllIGV0IGFjY2VwdMOpZVxyXG5cdFx0XHRcdFx0XHRcdFx0cG91ciB1bmUgZHVyw6llIGRlIDogMiBudWl0w6llcyBFbGxlIGNvbW1lbmNlIGxlXHJcblx0XHRcdFx0XHRcdFx0XHR2ZW5kcmVkaSAyNyBhb8O7dCAyMDIxIMOgIHBhcnRpciBkZSAxN2ggZXQgc2VcclxuXHRcdFx0XHRcdFx0XHRcdHRlcm1pbmVyYSBsZSBkaW1hbmNoZSAyOSBhb8O7dCAyMDIxIGF1IHBsdXMgdGFyZFxyXG5cdFx0XHRcdFx0XHRcdFx0w6AgMTdoIEVsbGUgbmUgcG91cnJhIGVuIGF1Y3VuIGNhcyDDqnRyZSBwcm9yb2fDqWUsXHJcblx0XHRcdFx0XHRcdFx0XHRzYXVmIGFjY29yZCDDqWNyaXQgZXQgcHLDqWFsYWJsZSBkdSBwcm9wcmnDqXRhaXJlLlxyXG5cdFx0XHRcdFx0XHRcdFx0UG91ciBub3VzIHBlcm1ldHRyZSBkZSBub3VzIG9yZ2FuaXNlciwgKGxlIGfDrnRlXHJcblx0XHRcdFx0XHRcdFx0XHRlc3Qgw6AgNCBrbSBkZSBs4oCZaGFiaXRhdGlvbiBwcmluY2lwYWxlIGR1XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcmnDqXRhaXJlKSwgdm91cyBkZXZleiBub3VzIGF2ZXJ0aXIgcXVlbHF1ZXNcclxuXHRcdFx0XHRcdFx0XHRcdGpvdXJzIMOgIGwnYXZhbmNlIGRlIHZvdHJlIGhldXJlIGQnYXJyaXbDqWUgKHBhclxyXG5cdFx0XHRcdFx0XHRcdFx0bWFpbCBvdSB0w6lsw6lwaG9uZSkuXHJcblx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlclRpdGxlQ29sb3J9PlxyXG5cdFx0XHRcdFx0XHRcdFx0UHJpeCBlbiBFdXJvc1xyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5lSGVpZ2h0UH0+XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRMYSBwcsOpc2VudGUgbG9jYXRpb24gc2Fpc29ubmnDqHJlIGEgbGlldVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRtb3llbm5hbnQgbGEgc29tbWUgZGUgKG1pbmltdW0gZml4ZSBkZSBiYXNlKVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbG9hdDogJ3JpZ2h0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLnRvdGFsVGFyaWZCYXNlfSwwMCDigqxcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFRhcmlmIHBhciBwZXJzb25uZSBzdXBwbMOpbWVudGFpcmUgYXUtZGVsw6AgZHVcclxuXHRcdFx0XHRcdFx0XHRcdFx0bWluaW11bSBmaXhlIDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3JlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2dpdGUuc3VwcGxlbWVudFBhclBlcnN9LDAwIOKCrFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0cGFyIG51aXQgZXQgcGFyIHBlcnNvbm5lLCBzb2l0IDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3JlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLm5iUGVyc1N1cH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbG9hdDogJ3JpZ2h0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLnRvdGFsVGFyaWZTdXBwbH0sMDAg4oKsXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRJbCBjb21wcmVuZCBsZXMgY2hhcmdlcyAodMOpbMOpdmlzaW9uLCBlYXUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdMOpbGVjdHJpY2l0w6kpLCBsZSBtw6luYWdlIGV0IGxhIGZvdXJuaXR1cmUgZGVzXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRyYXBzIGV0IHRhaWVzXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRTdXBwbMOpbWVudCBwYXIgYW5pbWFseycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdyZWQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDMg4oKsXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwYXIgam91ci4gUG91cnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAncmVkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24ubmJDaGllbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbG9hdDogJ3JpZ2h0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLm10QW5pbWF1eH0sMDAg4oKsXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRGb3JmYWl0IGxpdHMgZmFpdHMgw6AgbCdhcnJpdsOpZSA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdyZWQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtnaXRlLmZ0TGl0fSwwMCDigqwvcGVyc29ubmVcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbG9hdDogJ3JpZ2h0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLnRvdGFsRnRMaXR9LDAwIOKCrFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsZWZ0OiAnODUwcHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFNvaXQgbGEgc29tbWUgZGU6XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsb2F0OiAncmlnaHQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3llbGxvdycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodDogJ2JvbGQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLnJlc3RlQVBheWVyfSwwMCDigqxcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRSw6lnbGVtZW50IMOgIHRyYW5zbWV0dHJlIGF2ZWMgdm90cmUgY29udHJhdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzaWduw6kgKHNlbG9uIGxlcyBtb2RhbGl0w6lzIGNpLWFwcsOocykgw6AgdGl0cmVcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZCdhY29tcHRlIDpcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxvYXQ6ICdyaWdodCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAneWVsbG93JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi5hY29tcHRlfSwwMCDigqxcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNvaXQgcGFyIHZpcmVtZW50IChJQkFOIGRhbnMgcGFydGllXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNvY2nDqXTDqSksIG91IGNow6hxdWUgw6AgbCdvcmRyZSBkZXsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAncmVkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRTQVMgV0FPXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0LCBvdSBjaMOocXVlcyB2YWNhbmNlcyAoZW52b2kgYXUgc2nDqGdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNvY2lhbClcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxvYXQ6ICdyaWdodCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAneWVsbG93JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsvKiB7cmVzZXJ2YXRpb24ufSBWb2lyIHBvdXIgbW9udGFudCBkZSBsJ2Fjb21wdGUgKi99XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRUYXhlcyBkaXZlcnNlcyBjYWxjdWzDqWVzIHN1ciBsZSBub21icmVcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZCdhZHVsdGVzLCBzb2l0IDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3JlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLm5iUGVycyAtIHJlc2VydmF0aW9uLm5iRW5mfXsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0cG91cnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAncmVkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24ubmJOdWl0ZXN9eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRudWl0w6llc1xyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbG9hdDogJ3JpZ2h0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0ey8qIHtyZXNlcnZhdGlvbi59ICovfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Tm91cyBkZW1hbmRvbnMgdW4gZW52b2kgZW4gcmVjb21tYW5kw6lcclxuXHRcdFx0XHRcdFx0XHRcdFx0dW5pcXVlbWVudCBwb3VyIGxlcyBjaMOocXVlcyB2YWNhbmNlcy5cclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxvYXQ6ICdyaWdodCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAneWVsbG93JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsvKiB7cmVzZXJ2YXRpb24ufSAqL31cclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEFwcsOocyB2b3RyZSBzw6lqb3VyIHVuIHNjYW4gZGUgbGEgY2F1dGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkw6l0cnVpdGUgdm91cyBzZXJhIHRyYW5zbWlzIHBhciBjb3VycmllbCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2F1ZiBlbiBjYXMgZGUgZMOpZ8OidHMuXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsb2F0OiAncmlnaHQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3llbGxvdycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24ubXRDYXV0aW9ufSwwMCDigqxcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodDogJ2JvbGQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXHJcblx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdExhIHLDqXNlcnZhdGlvbiBkZXZpZW5kcmEgZWZmZWN0aXZlIGTDqHMgbG9ycyBxdWVcclxuXHRcdFx0XHRcdFx0XHRcdGxlIGxvY2F0YWlyZSBhdXJhIHJldG91cm7DqSB1biBleGVtcGxhaXJlIGRhdMOpIGV0XHJcblx0XHRcdFx0XHRcdFx0XHRzaWduw6kgZHUgcHLDqXNlbnQgY29udHJhdCBhdmFudCBsZSAwNC8wNS8yMDIwXHJcblx0XHRcdFx0XHRcdFx0XHRhY2NvbXBhZ27DqSBkdSBjaMOocXVlLiBBdS1kZWzDoCBkZSBjZXR0ZSBkYXRlLCBsYVxyXG5cdFx0XHRcdFx0XHRcdFx0csOpc2VydmF0aW9uIHNlcmEgY2FkdXF1ZSBldCBsZSBwcm9wcmnDqXRhaXJlXHJcblx0XHRcdFx0XHRcdFx0XHRkaXNwb3NlcmEgbGlicmVtZW50IGR1IGxvZ2VtZW50LlxyXG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyVGl0bGVDb2xvcn0+XHJcblx0XHRcdFx0XHRcdFx0XHRBc3N1cmFuY2VzXHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8cCBzdHlsZT17eyBmb250U2l6ZTogJzE2cHgnIH19PlxyXG5cdFx0XHRcdFx0XHRcdExlIGxvY2F0YWlyZSBkb2l0IHbDqXJpZmllciBzaSBzb24gY29udHJhdFxyXG5cdFx0XHRcdFx0XHRcdGTigJloYWJpdGF0aW9uIHByaW5jaXBhbGUgcHLDqXZvaXQgbOKAmWV4dGVuc2lvblxyXG5cdFx0XHRcdFx0XHRcdHZpbGzDqWdpYXR1cmUgZW4gcmVzcG9uc2FiaWxpdMOpIGNpdmlsZS4gRGFuc1xyXG5cdFx0XHRcdFx0XHRcdGzigJloeXBvdGjDqHNlIGNvbnRyYWlyZSwgaWwgcGV1dCBpbnRlcnZlbmlyIGF1cHLDqHMgZGVcclxuXHRcdFx0XHRcdFx0XHRzYSBjb21wYWduaWUgZOKAmWFzc3VyYW5jZSBldCByw6ljbGFtZXIgbOKAmWV4dGVuc2lvbiBkZVxyXG5cdFx0XHRcdFx0XHRcdGxhIGdhcmFudGllIHBvdXIgbGEgcMOpcmlvZGUgZGUgbGEgbG9jYXRpb24sIG91IGJpZW5cclxuXHRcdFx0XHRcdFx0XHRzb3VzY3JpcmUgdW4gY29udHJhdCBwYXJ0aWN1bGllciBhdSB0aXRyZSBkZXNcclxuXHRcdFx0XHRcdFx0XHRjbGF1c2VzIHZpbGzDqWdpYXR1cmUuIERlcnJpw6hyZSBsZSBnw650ZSBzZSB0cm91dmUgdW5cclxuXHRcdFx0XHRcdFx0XHRydWlzc2VhdSBldCB1biDDqXRhbmcsIHBhciBtZXN1cmUgZGUgc8OpY3VyaXTDqSwgTGVzXHJcblx0XHRcdFx0XHRcdFx0ZW5mYW50cyBkZXZyb250IHRvdWpvdXJzIMOqdHJlIGFjY29tcGFnbsOpcyBk4oCZdW5cclxuXHRcdFx0XHRcdFx0XHRhZHVsdGUgZXQgbGUgcHJvcHJpw6l0YWlyZSBuZSBwZXV0IGVuIGF1Y3VuIGNhcyDDqnRyZVxyXG5cdFx0XHRcdFx0XHRcdHRlbnUgcG91ciByZXNwb25zYWJsZSBkZXMgYWNjaWRlbnRzIHF1aSBwb3VycmFpZW50IHlcclxuXHRcdFx0XHRcdFx0XHRzdXJ2ZW5pci4gRGUgbcOqbWUgcG91ciBs4oCZYWlyZSBkZSBqZXUgZHUgZ8OudGUsIGxlc1xyXG5cdFx0XHRcdFx0XHRcdGVuZmFudHMgcXVpIGzigJl1dGlsaXNlbnQgZG9pdmVudCDDqnRyZSBzb3VzIGxhXHJcblx0XHRcdFx0XHRcdFx0c3VydmVpbGxhbmNlIGRlcyBwYXJlbnRzLlxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblxyXG5cdFx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyVGl0bGVDb2xvcn0+XHJcblx0XHRcdFx0XHRcdFx0XHRFdGF0IGRlcyBsaWV1eCBldCBpbnZlbnRhaXJlXHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMubGluZUhlaWdodFB9PlxyXG5cdFx0XHRcdFx0XHRcdExlIGRvY3VtZW50IHBvdXIgbOKAmcOpdGF0IGRlcyBsaWV1eCBzZSB0cm91dmUgZGFucyBsZVxyXG5cdFx0XHRcdFx0XHRcdGNhaGllciBk4oCZZXhwbGljYXRpb24gZHUgZ8OudGUuIENlIGNvbnRyYXQgZmFpdCBvZmZpY2VcclxuXHRcdFx0XHRcdFx0XHRkJ2ludmVudGFpcmUuIFBvdXIgw6l2aXRlciB0b3V0ZSBjb250ZXN0YXRpb24gbGVcclxuXHRcdFx0XHRcdFx0XHRsb2NhdGFpcmUgdm91ZHJhIGJpZW4gY29udHLDtGxlciBldCBzaWduYWxlciB0b3V0ZVxyXG5cdFx0XHRcdFx0XHRcdGFub21hbGllIGRhbnMgbGVzIDI0IGhldXJlcy4gUGFzc8OpIGNlIGTDqWxhaSwgbGVzXHJcblx0XHRcdFx0XHRcdFx0YmllbnMgbG91w6lzIHNlcm9udCBjb25zaWTDqXLDqXMgY29tbWUgZXhlbXB0cyBkZVxyXG5cdFx0XHRcdFx0XHRcdGRvbW1hZ2VzIMOgIGzigJllbnRyw6llIGR1IGxvY2F0YWlyZS4gQ2VsdWktY2kgc2VyYVxyXG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNhYmxlIGRlIHRvdXRlIGTDqXTDqXJpb3JhdGlvbiBvdSBwZXJ0ZSBwb3V2YW50XHJcblx0XHRcdFx0XHRcdFx0c3VydmVuaXIgw6AgY2UgbW9iaWxpZXIgYWluc2kgcXXigJlhdXggZGl2ZXJzIG1hdMOpcmllbHNcclxuXHRcdFx0XHRcdFx0XHRkZSBs4oCZZXNwYWNlIHBpc2NpbmUgZXQgZMOpdGVudGUuXHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHJcblx0XHRcdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZUNvbG9yfT5cclxuXHRcdFx0XHRcdFx0XHRcdEpvdWlzc2FuY2UgZGVzIGxpZXV4XHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMubGluZUhlaWdodFB9PlxyXG5cdFx0XHRcdFx0XHRcdExlIGxvY2F0YWlyZSBlbnRyZXRpZW5kcmEgbGVzIGxpZXV4IGxvdcOpcyBldCBsZXNcclxuXHRcdFx0XHRcdFx0XHRyZW5kcmEgZW4gYm9uIMOpdGF0IGRlIHByb3ByZXTDqS4gSWwgdmVpbGxlcmEgw6AgY2UgcXVlXHJcblx0XHRcdFx0XHRcdFx0bGEgdHJhbnF1aWxsaXTDqSBkdSB2b2lzaW5hZ2UgbmUgc29pdCBwYXMgdHJvdWJsw6llLlxyXG5cdFx0XHRcdFx0XHRcdExhIHNvdXMgbG9jYXRpb24gZXN0IGludGVyZGl0ZSBhdSBwcmVuZXVyLCBtw6ptZSDDoFxyXG5cdFx0XHRcdFx0XHRcdHRpdHJlIGdyYXR1aXQsIHNvdXMgcGVpbmUgZGUgcsOpc2lsaWF0aW9uIGR1IGNvbnRyYXQuXHJcblx0XHRcdFx0XHRcdFx0TOKAmWluc3RhbGxhdGlvbiBkZSB0ZW50ZXMgb3UgbGUgc3RhdGlvbm5lbWVudCBkZVxyXG5cdFx0XHRcdFx0XHRcdGNhcmF2YW5lcyBzdXIgbGUgdGVycmFpbiBkZSBsYSBwcm9wcmnDqXTDqSBsb3XDqWUgZXN0XHJcblx0XHRcdFx0XHRcdFx0aW50ZXJkaXQsIHNhdWYgYWNjb3JkIHByw6lhbGFibGUgZHUgcHJvcHJpw6l0YWlyZS5cclxuXHRcdFx0XHRcdFx0XHRM4oCZdXRpbGlzYXRldXIgc+KAmWVuZ2FnZSDDoCBuZSBwYXMgdXRpbGlzZXIgbGUgc2VydmljZVxyXG5cdFx0XHRcdFx0XHRcdFdJLUZJIMOgIGRlcyBmaW5zIGlsbGljaXRlcywgaW50ZXJkaXRlcyBvdSBpbGzDqWdhbGVzXHJcblx0XHRcdFx0XHRcdFx0KGVudHJlIGF1dHJlcyByZXNwZWN0IGRlIGxhIGxvaSBIYWRvcGkpLiBMZSBsb3VldXIsXHJcblx0XHRcdFx0XHRcdFx0w6AgbGEgZGVtYW5kZSBkZSB0aWVycyBldC9vdSBkZSB0b3V0ZSBhdXRvcml0w6lcclxuXHRcdFx0XHRcdFx0XHRjb21ww6l0ZW50ZSwgc2UgcsOpc2VydmUgbGUgZHJvaXQgZGUgc3VzcGVuZHJlXHJcblx0XHRcdFx0XHRcdFx0dGVtcG9yYWlyZW1lbnQgb3UgZGUgbWFuacOocmUgZMOpZmluaXRpdmUgdG91dGVcclxuXHRcdFx0XHRcdFx0XHR1dGlsaXNhdGlvbiBkdSBzZXJ2aWNlIHNhbnMgcXVlIHNhIHJlc3BvbnNhYmlsaXTDqSBuZVxyXG5cdFx0XHRcdFx0XHRcdHB1aXNzZSDDqnRyZSByZWNoZXJjaMOpZSBldCBzYW5zIHF1ZSBs4oCZdXRpbGlzYXRldXIgbmVcclxuXHRcdFx0XHRcdFx0XHRwdWlzc2UgcmV2ZW5kaXF1ZXIgdW5lIHF1ZWxjb25xdWUgaW5kZW1uaXNhdGlvbiBvdVxyXG5cdFx0XHRcdFx0XHRcdHLDqXBhcmF0aW9uLiBFbiBhdWN1biBjYXMgbGUgbG91ZXVyIG5lIHBldXQgw6p0cmVcclxuXHRcdFx0XHRcdFx0XHR0ZW51ZSBkZSByw6lwYXJlciBsZXMgcHLDqWp1ZGljZXMgZGlyZWN0cyBldC9vdVxyXG5cdFx0XHRcdFx0XHRcdGluZGlyZWN0cyBzdWJpcyBkdSBmYWl0IGRlIGzigJl1dGlsaXNhdGlvbiBkdSBzZXJ2aWNlXHJcblx0XHRcdFx0XHRcdFx0cGFyIGzigJl1dGlsaXNhdGV1ciwgY2UgZGVybmllciByZWNvbm5haXNzYW50IHF1ZSBsZVxyXG5cdFx0XHRcdFx0XHRcdGxvdWV1ciBuZSBwZXV0IHBhcyDDqnRyZSByZXNwb25zYWJsZSBkZXMgY29udGVudXNcclxuXHRcdFx0XHRcdFx0XHRhdXF1ZWwgYWNjw6hkZSBs4oCZdXRpbGlzYXRldXIgZXQgcXVlIGzigJlhY2Nlc3NpYmlsaXTDqVxyXG5cdFx0XHRcdFx0XHRcdGF1eCBjb250ZW51cyBldCBzZXJ2aWNlcyBu4oCZZXN0IHBhcyBnYXJhbnRpZSBldCBwZXV0XHJcblx0XHRcdFx0XHRcdFx0w6p0cmUgc3VzcGVuZHVlIHNhbnMgcHLDqWF2aXMuXHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHJcblx0XHRcdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZUNvbG9yfT5cclxuXHRcdFx0XHRcdFx0XHRcdENsYXVzZSByw6lzb2x1dG9pcmVcclxuXHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5lSGVpZ2h0UH0+XHJcblx0XHRcdFx0XHRcdFx0QSBkw6lmYXV0IGRlIHBhaWVtZW50IGF1eCDDqWNow6lhbmNlcyBmaXjDqWVzIG91IGVuIGNhc1xyXG5cdFx0XHRcdFx0XHRcdGTigJlpbmV4w6ljdXRpb24gZOKAmXVuZSBkZXMgY2xhdXNlcyBkdSBwcsOpc2VudFxyXG5cdFx0XHRcdFx0XHRcdGVuZ2FnZW1lbnQgZXQgY2lucSBqb3VycyBmcmFuY3MgYXByw6hzIHVuZSBzaW1wbGVcclxuXHRcdFx0XHRcdFx0XHRzb21tYXRpb24gcGFyIGxldHRyZSByZWNvbW1hbmTDqWUgcmVzdMOpZVxyXG5cdFx0XHRcdFx0XHRcdGluZnJ1Y3R1ZXVzZSwgbGUgcHLDqXNlbnQgY29udHJhdCBzZXJhIGltbcOpZGlhdGVtZW50XHJcblx0XHRcdFx0XHRcdFx0csOpc2lsacOpIGV0IGxlIGJhaWxsZXVyIHBvdXJyYSBzZSBwcsOpdmFsb2lyIGRlXHJcblx0XHRcdFx0XHRcdFx0bOKAmWFydGljbGUgMTU5MCBkdSBDb2RlIGNpdmlsIHBvdXIgY29uc2VydmVyIGxlc1xyXG5cdFx0XHRcdFx0XHRcdGFjb21wdGVzIHZlcnPDqXMgw6AgdGl0cmUgZGVzIHByZW1pZXJzXHJcblx0XHRcdFx0XHRcdFx0ZG9tbWFnZXMtaW50w6lyw6p0cy5cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlclRpdGxlQ29sb3J9PlxyXG5cdFx0XHRcdFx0XHRcdFx0QW5udWxhdGlvblxyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmVIZWlnaHRQfT5cclxuXHRcdFx0XHRcdFx0XHRMYSBzaWduYXR1cmUgZHUgY29udHJhdCBlbmdhZ2UgbGVzIGRldXggcGFydGllcyBkZVxyXG5cdFx0XHRcdFx0XHRcdGZhw6dvbiBkw6lmaW5pdGl2ZS4gU2kgbGUgbG9jYXRhaXJlIHJlbm9uY2Ugw6AgbGFcclxuXHRcdFx0XHRcdFx0XHRsb2NhdGlvbiA2MCBqb3VycyBhdmFudCBs4oCZYXJyaXbDqWUsIGzigJlhY29tcHRlIGVzdFxyXG5cdFx0XHRcdFx0XHRcdHJlbWJvdXJzw6kuIEVudHJlIDEgam91ciBldCA2MCBqb3VycyBzaSBub3VzXHJcblx0XHRcdFx0XHRcdFx0csOpdXNzaXNzb25zIMOgIHJlbG91ZXIsIGzigJlhY29tcHRlIGVzdCDDqWdhbGVtZW50XHJcblx0XHRcdFx0XHRcdFx0cmVtYm91cnPDqS4gU2lub24gbOKAmWFjb21wdGUgZXN0IHBlcmR1LlxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblxyXG5cdFx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyVGl0bGVDb2xvcn0+XHJcblx0XHRcdFx0XHRcdFx0XHRFbGVjdGlvbiBkZSBkb21pY2lsZVxyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmVIZWlnaHRQfT5cclxuXHRcdFx0XHRcdFx0XHRQb3VyIGzigJlleMOpY3V0aW9uIGRlcyBwcsOpc2VudGVzLCBsZSBwcm9wcmnDqXRhaXJlIGV0XHJcblx0XHRcdFx0XHRcdFx0bGUgbG9jYXRhaXJlIGZvbnQgw6lsZWN0aW9uIGRlIGRvbWljaWxlIGRhbnMgbGV1cnNcclxuXHRcdFx0XHRcdFx0XHRkb21pY2lsZXMgcmVzcGVjdGlmcy4gVG91dGVmb2lzIGVuIGNhcyBkZSBsaXRpZ2UsIGxlXHJcblx0XHRcdFx0XHRcdFx0dHJpYnVuYWwgZGVzIGxpZXV4IGxvdcOpcyBzZXJhIHNldWwgY29tcMOpdGVudC5cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cclxuXHRcdFx0XHRcdDxHcmlkXHJcblx0XHRcdFx0XHRcdGNvbnRhaW5lclxyXG5cdFx0XHRcdFx0XHRkaXJlY3Rpb249J3JvdydcclxuXHRcdFx0XHRcdFx0anVzdGlmeT0nc3BhY2UtYmV0d2VlbidcclxuXHRcdFx0XHRcdFx0c3BhY2luZz17NH1cclxuXHRcdFx0XHRcdFx0YWxpZ25JdGVtcz0nZmxleC1lbmQnXHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IG1hcmdpblRvcDogJzIwcHgnIH19PlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0RmFpdCBlbiBkZXV4IGV4ZW1wbGFpcmVzIMOgIEZvc3PDqSBsZSB7RGF0ZS5ub3coKX1cclxuXHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0PHA+U2lnbmF0dXJlIGR1IHByb3ByacOpdGFpcmUsPC9wPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHRK4oCZYWkgcHJpcyBjb25uYWlzc2FuY2UgZGVzIGNvbmRpdGlvbnMgZGVcclxuXHRcdFx0XHRcdFx0XHRcdGxvY2F0aW9uIGNpLWRlc3N1c1xyXG5cdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcyMHB4JyB9fT5EYXRlIDo8L3A+XHJcblx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHRTaWduYXR1cmUgZHUgbG9jYXRhaXJlIChwcsOpY8OpZMOpIGRlIGxhIG1lbnRpb24gbHVcclxuXHRcdFx0XHRcdFx0XHRcdGV0IGFwcHJvdXbDqSlcclxuXHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9UaGVtZVByb3ZpZGVyPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG5cdC8vIGNvbnNvbGUubG9nKCdjb250ZXh0JywgY29udGV4dC5xdWVyeS5pZCk7XHJcblx0Y29uc3QgcmVzMSA9IGF3YWl0IGFmZmljaGVSZXNlcnZhdGlvbihjb250ZXh0LnF1ZXJ5LmlkKTtcclxuXHRjb25zdCByZXNlcnZhdGlvbiA9IGF3YWl0IHJlczE7XHJcblx0Ly8gY29uc29sZS5sb2coJ3Jlc2VydmF0aW9uJywgcmVzZXJ2YXRpb24pO1xyXG5cdGNvbnN0IHJlczIgPSBhd2FpdCBsaXN0R2l0ZUJ5SWQocmVzZXJ2YXRpb24uZ2l0ZSk7XHJcblx0Y29uc3QgZ2l0ZSA9IGF3YWl0IHJlczI7XHJcblx0Y29uc3QgcmVzMyA9IGF3YWl0IGFmZmljaGVDbGllbnQocmVzZXJ2YXRpb24uY2xpZW50KTtcclxuXHRjb25zdCBjbGllbnQgPSBhd2FpdCByZXMzO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0cmVzZXJ2YXRpb24sXHJcblx0XHRcdGdpdGUsXHJcblx0XHRcdGNsaWVudCxcclxuXHRcdH0sXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZXJ2YXRpb25JZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==