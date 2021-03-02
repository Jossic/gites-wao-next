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
      position: 'relative',
      right: '5px',
      fontWeight: 'bold'
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
      lineNumber: 335,
      columnNumber: 9
    }
  }, reservation.acompte, ",00 \u20AC")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
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
      lineNumber: 347,
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
      lineNumber: 358,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 9
    }
  }, "Taxes diverses calcul\xE9es sur le nombre d'adultes, soit :", ' ', __jsx("span", {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 10
    }
  }, reservation.nbPers - reservation.nbEnf, ' '), "pour", ' ', __jsx("span", {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
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
      lineNumber: 385,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
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
      lineNumber: 398,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
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
      lineNumber: 412,
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
      lineNumber: 420,
      columnNumber: 8
    }
  }, "La r\xE9servation deviendra effective d\xE8s lors que le locataire aura retourn\xE9 un exemplaire dat\xE9 et sign\xE9 du pr\xE9sent contrat avant le 04/05/2020 accompagn\xE9 du ch\xE8que. Au-del\xE0 de cette date, la r\xE9servation sera caduque et le propri\xE9taire disposera librement du logement.")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 8
    }
  }, "Assurances")), __jsx("p", {
    style: {
      fontSize: '16px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 7
    }
  }, "Le locataire doit v\xE9rifier si son contrat d\u2019habitation principale pr\xE9voit l\u2019extension vill\xE9giature en responsabilit\xE9 civile. Dans l\u2019hypoth\xE8se contraire, il peut intervenir aupr\xE8s de sa compagnie d\u2019assurance et r\xE9clamer l\u2019extension de la garantie pour la p\xE9riode de la location, ou bien souscrire un contrat particulier au titre des clauses vill\xE9giature. Derri\xE8re le g\xEEte se trouve un ruisseau et un \xE9tang, par mesure de s\xE9curit\xE9, Les enfants devront toujours \xEAtre accompagn\xE9s d\u2019un adulte et le propri\xE9taire ne peut en aucun cas \xEAtre tenu pour responsable des accidents qui pourraient y survenir. De m\xEAme pour l\u2019aire de jeu du g\xEEte, les enfants qui l\u2019utilisent doivent \xEAtre sous la surveillance des parents."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
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
  }, "Etat des lieux et inventaire")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 7
    }
  }, "Le document pour l\u2019\xE9tat des lieux se trouve dans le cahier d\u2019explication du g\xEEte. Ce contrat fait office d'inventaire. Pour \xE9viter toute contestation le locataire voudra bien contr\xF4ler et signaler toute anomalie dans les 24 heures. Pass\xE9 ce d\xE9lai, les biens lou\xE9s seront consid\xE9r\xE9s comme exempts de dommages \xE0 l\u2019entr\xE9e du locataire. Celui-ci sera responsable de toute d\xE9t\xE9rioration ou perte pouvant survenir \xE0 ce mobilier ainsi qu\u2019aux divers mat\xE9riels de l\u2019espace piscine et d\xE9tente."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 8
    }
  }, "Jouissance des lieux")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 7
    }
  }, "Le locataire entretiendra les lieux lou\xE9s et les rendra en bon \xE9tat de propret\xE9. Il veillera \xE0 ce que la tranquillit\xE9 du voisinage ne soit pas troubl\xE9e. La sous location est interdite au preneur, m\xEAme \xE0 titre gratuit, sous peine de r\xE9siliation du contrat. L\u2019installation de tentes ou le stationnement de caravanes sur le terrain de la propri\xE9t\xE9 lou\xE9e est interdit, sauf accord pr\xE9alable du propri\xE9taire. L\u2019utilisateur s\u2019engage \xE0 ne pas utiliser le service WI-FI \xE0 des fins illicites, interdites ou ill\xE9gales (entre autres respect de la loi Hadopi). Le loueur, \xE0 la demande de tiers et/ou de toute autorit\xE9 comp\xE9tente, se r\xE9serve le droit de suspendre temporairement ou de mani\xE8re d\xE9finitive toute utilisation du service sans que sa responsabilit\xE9 ne puisse \xEAtre recherch\xE9e et sans que l\u2019utilisateur ne puisse revendiquer une quelconque indemnisation ou r\xE9paration. En aucun cas le loueur ne peut \xEAtre tenue de r\xE9parer les pr\xE9judices directs et/ou indirects subis du fait de l\u2019utilisation du service par l\u2019utilisateur, ce dernier reconnaissant que le loueur ne peut pas \xEAtre responsable des contenus auquel acc\xE8de l\u2019utilisateur et que l\u2019accessibilit\xE9 aux contenus et services n\u2019est pas garantie et peut \xEAtre suspendue sans pr\xE9avis."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 8
    }
  }, "Clause r\xE9solutoire")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 7
    }
  }, "A d\xE9faut de paiement aux \xE9ch\xE9ances fix\xE9es ou en cas d\u2019inex\xE9cution d\u2019une des clauses du pr\xE9sent engagement et cinq jours francs apr\xE8s une simple sommation par lettre recommand\xE9e rest\xE9e infructueuse, le pr\xE9sent contrat sera imm\xE9diatement r\xE9sili\xE9 et le bailleur pourra se pr\xE9valoir de l\u2019article 1590 du Code civil pour conserver les acomptes vers\xE9s \xE0 titre des premiers dommages-int\xE9r\xEAts."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 8
    }
  }, "Annulation")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 7
    }
  }, "La signature du contrat engage les deux parties de fa\xE7on d\xE9finitive. Si le locataire renonce \xE0 la location 60 jours avant l\u2019arriv\xE9e, l\u2019acompte est rembours\xE9. Entre 1 jour et 60 jours si nous r\xE9ussissons \xE0 relouer, l\u2019acompte est \xE9galement rembours\xE9. Sinon l\u2019acompte est perdu."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 8
    }
  }, "Election de domicile")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
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
      lineNumber: 551,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 8
    }
  }, "Fait en deux exemplaires \xE0 Foss\xE9 le ", Date.now()), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 8
    }
  }, "Signature du propri\xE9taire,")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
      columnNumber: 8
    }
  }, "J\u2019ai pris connaissance des conditions de location ci-dessus"), __jsx("p", {
    style: {
      marginBottom: '20px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569,
      columnNumber: 8
    }
  }, "Date :"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24vL2NvbnRyYWN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwidHlwZSIsIlJlc2VydmF0aW9uSWQiLCJyZXNlcnZhdGlvbiIsImNsaWVudCIsImdpdGUiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImZsZXhHcm93Iiwid2lkdGgiLCJwYXBlciIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInRleHRBbGlnbiIsInBhcGVyVGl0bGUiLCJtYXJnaW5Ub3AiLCJwYXBlclRpdGxlQ29sb3IiLCJtYXJnaW5Cb3R0b20iLCJjb3VsZXVyMSIsInR5cG9Tb3VsaWduZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsInRleHREZWNvcmF0aW9uIiwiY2xhc3NlcyIsInZpZ25ldHRlTGluayIsIm5vbSIsImNpdmlsaXRlIiwicHJlbm9tIiwiYWRyZXNzZSIsImNwIiwidmlsbGUiLCJwYXlzIiwidGVsIiwibWFpbCIsIm5iUGVycyIsIm5iRW5mIiwibGluZUhlaWdodCIsImN0RGVzaWduYXRpb25UaXRyZSIsInJlbmRlckhUTUwiLCJjdFByaW5jaXBDYXJhYyIsImN0U2l0dUxvZyIsImN0RGVzY0xvZyIsImxpbmVIZWlnaHRQIiwidG90YWxUYXJpZkJhc2UiLCJjb2xvciIsInN1cHBsZW1lbnRQYXJQZXJzIiwibmJQZXJzU3VwIiwidG90YWxUYXJpZlN1cHBsIiwibmJDaGllbiIsIm10QW5pbWF1eCIsImZ0TGl0IiwidG90YWxGdExpdCIsInBvc2l0aW9uIiwibGVmdCIsInJlc3RlQVBheWVyIiwicmlnaHQiLCJhY29tcHRlIiwibmJOdWl0ZXMiLCJtdENhdXRpb24iLCJEYXRlIiwibm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRCxFQU1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUZBTkQsQ0FiRCxDQXhlRCxDQUhELENBREQsQ0FERDtBQTBnQkEsQ0E5aUJEOztHQUFNaEIsYTs7S0FBQUEsYTs7QUFta0JTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9yZXNlcnZhdGlvbi9baWRdL2NvbnRyYWN0LmI5ZGRmNjdhODA3ODY1ZTc3YTkyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG5cdGFmZmljaGVDbGllbnQsXHJcblx0Z2V0Q2xpZW50QnlJZCxcclxufSBmcm9tICcuLi8uLi8uLi8uLi8uLi9hY3Rpb25zL2NsaWVudEFjdGlvbnMnO1xyXG5pbXBvcnQgeyBsaXN0R2l0ZUJ5SWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IHsgYWZmaWNoZVJlc2VydmF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vYWN0aW9ucy9yZXNlcnZhdGlvbkFjdGlvbnMnO1xyXG5pbXBvcnQgQWRtaW4gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9hdXRoL0FkbWluJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCB7IEdyaWQsIFBhcGVyLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgcmVuZGVySFRNTCBmcm9tICdyZWFjdC1yZW5kZXItaHRtbCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xyXG5cdHBhbGV0dGU6IHtcclxuXHRcdHR5cGU6ICdsaWdodCcsXHJcblx0fSxcclxufSk7XHJcblxyXG5jb25zdCBSZXNlcnZhdGlvbklkID0gKHsgcmVzZXJ2YXRpb24sIGNsaWVudCwgZ2l0ZSB9KSA9PiB7XHJcblx0Y29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0XHRyb290OiB7XHJcblx0XHRcdGZsZXhHcm93OiAxLFxyXG5cdFx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0fSxcclxuXHRcdHBhcGVyOiB7XHJcblx0XHRcdGhlaWdodDogMjMwLFxyXG5cdFx0XHR3aWR0aDogNDgwLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjZGRkZGRkJyxcclxuXHRcdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRcdH0sXHJcblx0XHRwYXBlclRpdGxlOiB7XHJcblx0XHRcdGhlaWdodDogMzAsXHJcblx0XHRcdG1hcmdpblRvcDogJzEwcHgnLFxyXG5cdFx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjY2NjY2NjJyxcclxuXHRcdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRcdH0sXHJcblx0XHRwYXBlclRpdGxlQ29sb3I6IHtcclxuXHRcdFx0aGVpZ2h0OiAzMCxcclxuXHRcdFx0bWFyZ2luVG9wOiAnMTBweCcsXHJcblx0XHRcdG1hcmdpbkJvdHRvbTogJzEwcHgnLFxyXG5cdFx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGAke2dpdGUuY291bGV1cjF9YCxcclxuXHRcdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRcdH0sXHJcblx0XHR0eXBvU291bGlnbmU6IHtcclxuXHRcdFx0Zm9udFdlaWdodDogJ2JvbGQnLFxyXG5cdFx0XHRmb250U2l6ZTogJzE4cHgnLFxyXG5cdFx0XHRtYXJnaW5Cb3R0b206ICcxMHB4JyxcclxuXHRcdFx0dGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxyXG5cdFx0fSxcclxuXHR9KSk7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuXHRcdFx0XHQ8Q3NzQmFzZWxpbmUgLz5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcblx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0gYWxpZ25JdGVtcz0nZmxleC1zdGFydCc+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezJ9PlxyXG5cdFx0XHRcdFx0XHRcdDxJbWFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdkLWJsb2NrIHctMTAwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0c3JjPXtnaXRlLnZpZ25ldHRlTGlua31cclxuXHRcdFx0XHRcdFx0XHRcdGFsdD17Z2l0ZS5ub219XHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aD17NTAwfVxyXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXszNzV9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMH0+XHJcblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHlcclxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J2g1J1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50PSdoNSdcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRDT05UUkFUIERFIExPQ0FUSU9OIEVOIE1FVUJMw4kgU0FJU09OTklFUiA8YnIgLz57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHRNYWRhbWUsIE1vbnNpZXVyLiBTdWl0ZSDDoCB2b3RyZSBkZW1hbmRlLCBqZSB2b3VzXHJcblx0XHRcdFx0XHRcdFx0YWRyZXNzZSBsZSBwcsOpc2VudCBjb250cmF0IGRlIGxvY2F0aW9uIGRvbnQgMVxyXG5cdFx0XHRcdFx0XHRcdGV4ZW1wbGFpcmUgZXN0IMOgIG1lIHJldG91cm5lciAocGFyIGNvdXJyaWVyIG91IG1haWwpXHJcblx0XHRcdFx0XHRcdFx0cmV2w6p0dSBkZSB2b3RyZSBzaWduYXR1cmUgZXQgYWNjb21wYWduw6kgZHUgbW9udGFudFxyXG5cdFx0XHRcdFx0XHRcdGRlIGzigJlhY29tcHRlICh2aXJlbWVudCBvdSBjb3VycmllcikuIEVuIGVzcMOpcmFudFxyXG5cdFx0XHRcdFx0XHRcdGF2b2lyIGxlIHBsYWlzaXIgZGUgdm91cyBhY2N1ZWlsbGlyIHByb2NoYWluZW1lbnQsXHJcblx0XHRcdFx0XHRcdFx0cmVjZXZleiBtZXMgc2luY8OocmVzIHNhbHV0YXRpb25zLlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblxyXG5cdFx0XHRcdFx0PEdyaWRcclxuXHRcdFx0XHRcdFx0Y29udGFpbmVyXHJcblx0XHRcdFx0XHRcdGRpcmVjdGlvbj0ncm93J1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5PSdzcGFjZS1iZXR3ZWVuJ1xyXG5cdFx0XHRcdFx0XHRzcGFjaW5nPXs0fVxyXG5cdFx0XHRcdFx0XHRhbGlnbkl0ZW1zPSdjZW50ZXInPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHk+RW50cmUgbGEgc29jacOpdMOpIDo8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0XHRTacOpZ2Ugc29jaWFsIDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0U0FTIFdBTyA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDEgUm91dGUgZGUgTm91YXJ0IDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0MDgyNDAgRm9zc8OpLCBGUkFOQ0UgPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRDb3VycmllciA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9J21haWx0bzpjb250YWN0QGdpdGVzLXdhby5mcic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRhY3RAZ2l0ZXMtd2FvLmZyXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0U2l0ZSBpbnRlcm5ldCA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9J2h0dHA6Ly93d3cuZ2l0ZXMtd2FvLmZyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0aHR0cDovL3d3dy5naXRlcy13YW8uZnJcclxuXHRcdFx0XHRcdFx0XHRcdDwvYT57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRUZWwgOiArMzMgKDApMyAyNCAzMCAwOCA5NSA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdElCQU4gOiBGUjc2IDEwMjAgNjA4NCAwMzk4IDM4NzcgMjkyNSAwOTMgPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRCSUMgOiBBR1JJRlJQUDgwMiA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFRJVFVMQUlSRSA6IFNBUyBXQU8gPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+RXQgbGUgbG9jYXRhaXJlIDo8L3NwYW4+IDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0UXVhbGl0w6kgOiA8c3Bhbj57Y2xpZW50LmNpdmlsaXRlfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0UHLDqW5vbSBldCBOb20gOnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2NsaWVudC5ub219IHtjbGllbnQucHJlbm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRBZHJlc3NlIDogPHNwYW4+e2NsaWVudC5hZHJlc3NlfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0Q1AgJiBWaWxsZSA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Y2xpZW50LmNwfSB7Y2xpZW50LnZpbGxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRQYXlzIDogPHNwYW4+e2NsaWVudC5wYXlzfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0VMOpbMOpcGhvbmUgOiA8c3Bhbj57Y2xpZW50LnRlbH08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdENvdXJyaWVyIDogPHNwYW4+e2NsaWVudC5tYWlsfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFBvdXIgbGEgdGF4ZSBkZSBTw6lqb3VyIG5vbWJyZSBkZSBwZXJzb25uZXMgOlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdFx0VGF4YWJsZXMgOnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24ubmJQZXJzIC0gcmVzZXJ2YXRpb24ubmJFbmZ9IC0gTm9uXHJcblx0XHRcdFx0XHRcdFx0XHR0YXhhYmxlcyA6IHtyZXNlcnZhdGlvbi5uYkVuZn1cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyVGl0bGV9PlxyXG5cdFx0XHRcdFx0XHRcdENPTkRJVElPTlMgREUgTE9DQVRJT05cclxuXHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyVGl0bGVDb2xvcn0+XHJcblx0XHRcdFx0XHRcdFx0RMOpc2lnbmF0aW9uIGRlcyBsaWV1eCBldCBkZXNjcmlwdGlmIGR1IGxvZ2VtZW50XHJcblx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmVIZWlnaHR9PlxyXG5cdFx0XHRcdFx0XHRcdHtnaXRlLmN0RGVzaWduYXRpb25UaXRyZX1cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnR5cG9Tb3VsaWduZX0+XHJcblx0XHRcdFx0XHRcdFx0UHJpbmNpcGFsZXMgY2FyYWN0w6lyaXN0aXF1ZXMgOlxyXG5cdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdlZGl0b3InPlxyXG5cdFx0XHRcdFx0XHRcdHtyZW5kZXJIVE1MKGdpdGUuY3RQcmluY2lwQ2FyYWMpfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnR5cG9Tb3VsaWduZX0+XHJcblx0XHRcdFx0XHRcdFx0U2l0dWF0aW9uIGR1IGxvZ2VtZW50IGRhbnMgbGEgbG9jYWxpdMOpIDpcclxuXHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZWRpdG9yJz5cclxuXHRcdFx0XHRcdFx0XHR7cmVuZGVySFRNTChnaXRlLmN0U2l0dUxvZyl9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudHlwb1NvdWxpZ25lfT5cclxuXHRcdFx0XHRcdFx0XHREZXNjcmlwdGlvbiBkdSBsb2dlbWVudCA6XHJcblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZWRpdG9yJ1xyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzcwcHgnIH19PlxyXG5cdFx0XHRcdFx0XHRcdHtyZW5kZXJIVE1MKGdpdGUuY3REZXNjTG9nKX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyVGl0bGVDb2xvcn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdER1csOpZSBkZSBsYSBsb2NhdGlvbiA6XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmVIZWlnaHRQfT5cclxuXHRcdFx0XHRcdFx0XHRcdExhIHByw6lzZW50ZSBsb2NhdGlvbiBlc3QgY29uc2VudGllIGV0IGFjY2VwdMOpZVxyXG5cdFx0XHRcdFx0XHRcdFx0cG91ciB1bmUgZHVyw6llIGRlIDogMiBudWl0w6llcyBFbGxlIGNvbW1lbmNlIGxlXHJcblx0XHRcdFx0XHRcdFx0XHR2ZW5kcmVkaSAyNyBhb8O7dCAyMDIxIMOgIHBhcnRpciBkZSAxN2ggZXQgc2VcclxuXHRcdFx0XHRcdFx0XHRcdHRlcm1pbmVyYSBsZSBkaW1hbmNoZSAyOSBhb8O7dCAyMDIxIGF1IHBsdXMgdGFyZFxyXG5cdFx0XHRcdFx0XHRcdFx0w6AgMTdoIEVsbGUgbmUgcG91cnJhIGVuIGF1Y3VuIGNhcyDDqnRyZSBwcm9yb2fDqWUsXHJcblx0XHRcdFx0XHRcdFx0XHRzYXVmIGFjY29yZCDDqWNyaXQgZXQgcHLDqWFsYWJsZSBkdSBwcm9wcmnDqXRhaXJlLlxyXG5cdFx0XHRcdFx0XHRcdFx0UG91ciBub3VzIHBlcm1ldHRyZSBkZSBub3VzIG9yZ2FuaXNlciwgKGxlIGfDrnRlXHJcblx0XHRcdFx0XHRcdFx0XHRlc3Qgw6AgNCBrbSBkZSBs4oCZaGFiaXRhdGlvbiBwcmluY2lwYWxlIGR1XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcmnDqXRhaXJlKSwgdm91cyBkZXZleiBub3VzIGF2ZXJ0aXIgcXVlbHF1ZXNcclxuXHRcdFx0XHRcdFx0XHRcdGpvdXJzIMOgIGwnYXZhbmNlIGRlIHZvdHJlIGhldXJlIGQnYXJyaXbDqWUgKHBhclxyXG5cdFx0XHRcdFx0XHRcdFx0bWFpbCBvdSB0w6lsw6lwaG9uZSkuXHJcblx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlclRpdGxlQ29sb3J9PlxyXG5cdFx0XHRcdFx0XHRcdFx0UHJpeCBlbiBFdXJvc1xyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5lSGVpZ2h0UH0+XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRMYSBwcsOpc2VudGUgbG9jYXRpb24gc2Fpc29ubmnDqHJlIGEgbGlldVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRtb3llbm5hbnQgbGEgc29tbWUgZGUgKG1pbmltdW0gZml4ZSBkZSBiYXNlKVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbG9hdDogJ3JpZ2h0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLnRvdGFsVGFyaWZCYXNlfSwwMCDigqxcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFRhcmlmIHBhciBwZXJzb25uZSBzdXBwbMOpbWVudGFpcmUgYXUtZGVsw6AgZHVcclxuXHRcdFx0XHRcdFx0XHRcdFx0bWluaW11bSBmaXhlIDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3JlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2dpdGUuc3VwcGxlbWVudFBhclBlcnN9LDAwIOKCrFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0cGFyIG51aXQgZXQgcGFyIHBlcnNvbm5lLCBzb2l0IDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3JlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLm5iUGVyc1N1cH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbG9hdDogJ3JpZ2h0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLnRvdGFsVGFyaWZTdXBwbH0sMDAg4oKsXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRJbCBjb21wcmVuZCBsZXMgY2hhcmdlcyAodMOpbMOpdmlzaW9uLCBlYXUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdMOpbGVjdHJpY2l0w6kpLCBsZSBtw6luYWdlIGV0IGxhIGZvdXJuaXR1cmUgZGVzXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRyYXBzIGV0IHRhaWVzXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRTdXBwbMOpbWVudCBwYXIgYW5pbWFseycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdyZWQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDMg4oKsXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwYXIgam91ci4gUG91cnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAncmVkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24ubmJDaGllbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbG9hdDogJ3JpZ2h0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLm10QW5pbWF1eH0sMDAg4oKsXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRGb3JmYWl0IGxpdHMgZmFpdHMgw6AgbCdhcnJpdsOpZSA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdyZWQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtnaXRlLmZ0TGl0fSwwMCDigqwvcGVyc29ubmVcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbG9hdDogJ3JpZ2h0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLnRvdGFsRnRMaXR9LDAwIOKCrFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsZWZ0OiAnODUwcHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFNvaXQgbGEgc29tbWUgZGU6XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsb2F0OiAncmlnaHQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3llbGxvdycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodDogJ2JvbGQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLnJlc3RlQVBheWVyfSwwMCDigqxcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyaWdodDogJzVweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodDogJ2JvbGQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0UsOpZ2xlbWVudCDDoCB0cmFuc21ldHRyZSBhdmVjIHZvdHJlIGNvbnRyYXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2lnbsOpIChzZWxvbiBsZXMgbW9kYWxpdMOpcyBjaS1hcHLDqHMpIMOgIHRpdHJlXHJcblx0XHRcdFx0XHRcdFx0XHRcdGQnYWNvbXB0ZSA6XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsb2F0OiAncmlnaHQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3llbGxvdycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24uYWNvbXB0ZX0sMDAg4oKsXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzb2l0IHBhciB2aXJlbWVudCAoSUJBTiBkYW5zIHBhcnRpZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzb2Npw6l0w6kpLCBvdSBjaMOocXVlIMOgIGwnb3JkcmUgZGV7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3JlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250V2VpZ2h0OiAnYm9sZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0U0FTIFdBT1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCwgb3UgY2jDqHF1ZXMgdmFjYW5jZXMgKGVudm9pIGF1IHNpw6hnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzb2NpYWwpXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsb2F0OiAncmlnaHQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3llbGxvdycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Lyoge3Jlc2VydmF0aW9uLn0gVm9pciBwb3VyIG1vbnRhbnQgZGUgbCdhY29tcHRlICovfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0VGF4ZXMgZGl2ZXJzZXMgY2FsY3Vsw6llcyBzdXIgbGUgbm9tYnJlXHJcblx0XHRcdFx0XHRcdFx0XHRcdGQnYWR1bHRlcywgc29pdCA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdyZWQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi5uYlBlcnMgLSByZXNlcnZhdGlvbi5uYkVuZn17JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBvdXJ7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3JlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLm5iTnVpdGVzfXsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0bnVpdMOpZXNcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxvYXQ6ICdyaWdodCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAneWVsbG93JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHsvKiB7cmVzZXJ2YXRpb24ufSAqL31cclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdE5vdXMgZGVtYW5kb25zIHVuIGVudm9pIGVuIHJlY29tbWFuZMOpXHJcblx0XHRcdFx0XHRcdFx0XHRcdHVuaXF1ZW1lbnQgcG91ciBsZXMgY2jDqHF1ZXMgdmFjYW5jZXMuXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsb2F0OiAncmlnaHQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3llbGxvdycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Lyoge3Jlc2VydmF0aW9uLn0gKi99XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRBcHLDqHMgdm90cmUgc8Opam91ciB1biBzY2FuIGRlIGxhIGNhdXRpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZMOpdHJ1aXRlIHZvdXMgc2VyYSB0cmFuc21pcyBwYXIgY291cnJpZWwsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNhdWYgZW4gY2FzIGRlIGTDqWfDonRzLlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbG9hdDogJ3JpZ2h0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLm10Q2F1dGlvbn0sMDAg4oKsXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRMYSByw6lzZXJ2YXRpb24gZGV2aWVuZHJhIGVmZmVjdGl2ZSBkw6hzIGxvcnMgcXVlXHJcblx0XHRcdFx0XHRcdFx0XHRsZSBsb2NhdGFpcmUgYXVyYSByZXRvdXJuw6kgdW4gZXhlbXBsYWlyZSBkYXTDqSBldFxyXG5cdFx0XHRcdFx0XHRcdFx0c2lnbsOpIGR1IHByw6lzZW50IGNvbnRyYXQgYXZhbnQgbGUgMDQvMDUvMjAyMFxyXG5cdFx0XHRcdFx0XHRcdFx0YWNjb21wYWduw6kgZHUgY2jDqHF1ZS4gQXUtZGVsw6AgZGUgY2V0dGUgZGF0ZSwgbGFcclxuXHRcdFx0XHRcdFx0XHRcdHLDqXNlcnZhdGlvbiBzZXJhIGNhZHVxdWUgZXQgbGUgcHJvcHJpw6l0YWlyZVxyXG5cdFx0XHRcdFx0XHRcdFx0ZGlzcG9zZXJhIGxpYnJlbWVudCBkdSBsb2dlbWVudC5cclxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlclRpdGxlQ29sb3J9PlxyXG5cdFx0XHRcdFx0XHRcdFx0QXNzdXJhbmNlc1xyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PHAgc3R5bGU9e3sgZm9udFNpemU6ICcxNnB4JyB9fT5cclxuXHRcdFx0XHRcdFx0XHRMZSBsb2NhdGFpcmUgZG9pdCB2w6lyaWZpZXIgc2kgc29uIGNvbnRyYXRcclxuXHRcdFx0XHRcdFx0XHRk4oCZaGFiaXRhdGlvbiBwcmluY2lwYWxlIHByw6l2b2l0IGzigJlleHRlbnNpb25cclxuXHRcdFx0XHRcdFx0XHR2aWxsw6lnaWF0dXJlIGVuIHJlc3BvbnNhYmlsaXTDqSBjaXZpbGUuIERhbnNcclxuXHRcdFx0XHRcdFx0XHRs4oCZaHlwb3Row6hzZSBjb250cmFpcmUsIGlsIHBldXQgaW50ZXJ2ZW5pciBhdXByw6hzIGRlXHJcblx0XHRcdFx0XHRcdFx0c2EgY29tcGFnbmllIGTigJlhc3N1cmFuY2UgZXQgcsOpY2xhbWVyIGzigJlleHRlbnNpb24gZGVcclxuXHRcdFx0XHRcdFx0XHRsYSBnYXJhbnRpZSBwb3VyIGxhIHDDqXJpb2RlIGRlIGxhIGxvY2F0aW9uLCBvdSBiaWVuXHJcblx0XHRcdFx0XHRcdFx0c291c2NyaXJlIHVuIGNvbnRyYXQgcGFydGljdWxpZXIgYXUgdGl0cmUgZGVzXHJcblx0XHRcdFx0XHRcdFx0Y2xhdXNlcyB2aWxsw6lnaWF0dXJlLiBEZXJyacOocmUgbGUgZ8OudGUgc2UgdHJvdXZlIHVuXHJcblx0XHRcdFx0XHRcdFx0cnVpc3NlYXUgZXQgdW4gw6l0YW5nLCBwYXIgbWVzdXJlIGRlIHPDqWN1cml0w6ksIExlc1xyXG5cdFx0XHRcdFx0XHRcdGVuZmFudHMgZGV2cm9udCB0b3Vqb3VycyDDqnRyZSBhY2NvbXBhZ27DqXMgZOKAmXVuXHJcblx0XHRcdFx0XHRcdFx0YWR1bHRlIGV0IGxlIHByb3ByacOpdGFpcmUgbmUgcGV1dCBlbiBhdWN1biBjYXMgw6p0cmVcclxuXHRcdFx0XHRcdFx0XHR0ZW51IHBvdXIgcmVzcG9uc2FibGUgZGVzIGFjY2lkZW50cyBxdWkgcG91cnJhaWVudCB5XHJcblx0XHRcdFx0XHRcdFx0c3VydmVuaXIuIERlIG3Dqm1lIHBvdXIgbOKAmWFpcmUgZGUgamV1IGR1IGfDrnRlLCBsZXNcclxuXHRcdFx0XHRcdFx0XHRlbmZhbnRzIHF1aSBs4oCZdXRpbGlzZW50IGRvaXZlbnQgw6p0cmUgc291cyBsYVxyXG5cdFx0XHRcdFx0XHRcdHN1cnZlaWxsYW5jZSBkZXMgcGFyZW50cy5cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlclRpdGxlQ29sb3J9PlxyXG5cdFx0XHRcdFx0XHRcdFx0RXRhdCBkZXMgbGlldXggZXQgaW52ZW50YWlyZVxyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmVIZWlnaHRQfT5cclxuXHRcdFx0XHRcdFx0XHRMZSBkb2N1bWVudCBwb3VyIGzigJnDqXRhdCBkZXMgbGlldXggc2UgdHJvdXZlIGRhbnMgbGVcclxuXHRcdFx0XHRcdFx0XHRjYWhpZXIgZOKAmWV4cGxpY2F0aW9uIGR1IGfDrnRlLiBDZSBjb250cmF0IGZhaXQgb2ZmaWNlXHJcblx0XHRcdFx0XHRcdFx0ZCdpbnZlbnRhaXJlLiBQb3VyIMOpdml0ZXIgdG91dGUgY29udGVzdGF0aW9uIGxlXHJcblx0XHRcdFx0XHRcdFx0bG9jYXRhaXJlIHZvdWRyYSBiaWVuIGNvbnRyw7RsZXIgZXQgc2lnbmFsZXIgdG91dGVcclxuXHRcdFx0XHRcdFx0XHRhbm9tYWxpZSBkYW5zIGxlcyAyNCBoZXVyZXMuIFBhc3PDqSBjZSBkw6lsYWksIGxlc1xyXG5cdFx0XHRcdFx0XHRcdGJpZW5zIGxvdcOpcyBzZXJvbnQgY29uc2lkw6lyw6lzIGNvbW1lIGV4ZW1wdHMgZGVcclxuXHRcdFx0XHRcdFx0XHRkb21tYWdlcyDDoCBs4oCZZW50csOpZSBkdSBsb2NhdGFpcmUuIENlbHVpLWNpIHNlcmFcclxuXHRcdFx0XHRcdFx0XHRyZXNwb25zYWJsZSBkZSB0b3V0ZSBkw6l0w6lyaW9yYXRpb24gb3UgcGVydGUgcG91dmFudFxyXG5cdFx0XHRcdFx0XHRcdHN1cnZlbmlyIMOgIGNlIG1vYmlsaWVyIGFpbnNpIHF14oCZYXV4IGRpdmVycyBtYXTDqXJpZWxzXHJcblx0XHRcdFx0XHRcdFx0ZGUgbOKAmWVzcGFjZSBwaXNjaW5lIGV0IGTDqXRlbnRlLlxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblxyXG5cdFx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyVGl0bGVDb2xvcn0+XHJcblx0XHRcdFx0XHRcdFx0XHRKb3Vpc3NhbmNlIGRlcyBsaWV1eFxyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmVIZWlnaHRQfT5cclxuXHRcdFx0XHRcdFx0XHRMZSBsb2NhdGFpcmUgZW50cmV0aWVuZHJhIGxlcyBsaWV1eCBsb3XDqXMgZXQgbGVzXHJcblx0XHRcdFx0XHRcdFx0cmVuZHJhIGVuIGJvbiDDqXRhdCBkZSBwcm9wcmV0w6kuIElsIHZlaWxsZXJhIMOgIGNlIHF1ZVxyXG5cdFx0XHRcdFx0XHRcdGxhIHRyYW5xdWlsbGl0w6kgZHUgdm9pc2luYWdlIG5lIHNvaXQgcGFzIHRyb3VibMOpZS5cclxuXHRcdFx0XHRcdFx0XHRMYSBzb3VzIGxvY2F0aW9uIGVzdCBpbnRlcmRpdGUgYXUgcHJlbmV1ciwgbcOqbWUgw6BcclxuXHRcdFx0XHRcdFx0XHR0aXRyZSBncmF0dWl0LCBzb3VzIHBlaW5lIGRlIHLDqXNpbGlhdGlvbiBkdSBjb250cmF0LlxyXG5cdFx0XHRcdFx0XHRcdEzigJlpbnN0YWxsYXRpb24gZGUgdGVudGVzIG91IGxlIHN0YXRpb25uZW1lbnQgZGVcclxuXHRcdFx0XHRcdFx0XHRjYXJhdmFuZXMgc3VyIGxlIHRlcnJhaW4gZGUgbGEgcHJvcHJpw6l0w6kgbG91w6llIGVzdFxyXG5cdFx0XHRcdFx0XHRcdGludGVyZGl0LCBzYXVmIGFjY29yZCBwcsOpYWxhYmxlIGR1IHByb3ByacOpdGFpcmUuXHJcblx0XHRcdFx0XHRcdFx0TOKAmXV0aWxpc2F0ZXVyIHPigJllbmdhZ2Ugw6AgbmUgcGFzIHV0aWxpc2VyIGxlIHNlcnZpY2VcclxuXHRcdFx0XHRcdFx0XHRXSS1GSSDDoCBkZXMgZmlucyBpbGxpY2l0ZXMsIGludGVyZGl0ZXMgb3UgaWxsw6lnYWxlc1xyXG5cdFx0XHRcdFx0XHRcdChlbnRyZSBhdXRyZXMgcmVzcGVjdCBkZSBsYSBsb2kgSGFkb3BpKS4gTGUgbG91ZXVyLFxyXG5cdFx0XHRcdFx0XHRcdMOgIGxhIGRlbWFuZGUgZGUgdGllcnMgZXQvb3UgZGUgdG91dGUgYXV0b3JpdMOpXHJcblx0XHRcdFx0XHRcdFx0Y29tcMOpdGVudGUsIHNlIHLDqXNlcnZlIGxlIGRyb2l0IGRlIHN1c3BlbmRyZVxyXG5cdFx0XHRcdFx0XHRcdHRlbXBvcmFpcmVtZW50IG91IGRlIG1hbmnDqHJlIGTDqWZpbml0aXZlIHRvdXRlXHJcblx0XHRcdFx0XHRcdFx0dXRpbGlzYXRpb24gZHUgc2VydmljZSBzYW5zIHF1ZSBzYSByZXNwb25zYWJpbGl0w6kgbmVcclxuXHRcdFx0XHRcdFx0XHRwdWlzc2Ugw6p0cmUgcmVjaGVyY2jDqWUgZXQgc2FucyBxdWUgbOKAmXV0aWxpc2F0ZXVyIG5lXHJcblx0XHRcdFx0XHRcdFx0cHVpc3NlIHJldmVuZGlxdWVyIHVuZSBxdWVsY29ucXVlIGluZGVtbmlzYXRpb24gb3VcclxuXHRcdFx0XHRcdFx0XHRyw6lwYXJhdGlvbi4gRW4gYXVjdW4gY2FzIGxlIGxvdWV1ciBuZSBwZXV0IMOqdHJlXHJcblx0XHRcdFx0XHRcdFx0dGVudWUgZGUgcsOpcGFyZXIgbGVzIHByw6lqdWRpY2VzIGRpcmVjdHMgZXQvb3VcclxuXHRcdFx0XHRcdFx0XHRpbmRpcmVjdHMgc3ViaXMgZHUgZmFpdCBkZSBs4oCZdXRpbGlzYXRpb24gZHUgc2VydmljZVxyXG5cdFx0XHRcdFx0XHRcdHBhciBs4oCZdXRpbGlzYXRldXIsIGNlIGRlcm5pZXIgcmVjb25uYWlzc2FudCBxdWUgbGVcclxuXHRcdFx0XHRcdFx0XHRsb3VldXIgbmUgcGV1dCBwYXMgw6p0cmUgcmVzcG9uc2FibGUgZGVzIGNvbnRlbnVzXHJcblx0XHRcdFx0XHRcdFx0YXVxdWVsIGFjY8OoZGUgbOKAmXV0aWxpc2F0ZXVyIGV0IHF1ZSBs4oCZYWNjZXNzaWJpbGl0w6lcclxuXHRcdFx0XHRcdFx0XHRhdXggY29udGVudXMgZXQgc2VydmljZXMgbuKAmWVzdCBwYXMgZ2FyYW50aWUgZXQgcGV1dFxyXG5cdFx0XHRcdFx0XHRcdMOqdHJlIHN1c3BlbmR1ZSBzYW5zIHByw6lhdmlzLlxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblxyXG5cdFx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyVGl0bGVDb2xvcn0+XHJcblx0XHRcdFx0XHRcdFx0XHRDbGF1c2UgcsOpc29sdXRvaXJlXHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMubGluZUhlaWdodFB9PlxyXG5cdFx0XHRcdFx0XHRcdEEgZMOpZmF1dCBkZSBwYWllbWVudCBhdXggw6ljaMOpYW5jZXMgZml4w6llcyBvdSBlbiBjYXNcclxuXHRcdFx0XHRcdFx0XHRk4oCZaW5leMOpY3V0aW9uIGTigJl1bmUgZGVzIGNsYXVzZXMgZHUgcHLDqXNlbnRcclxuXHRcdFx0XHRcdFx0XHRlbmdhZ2VtZW50IGV0IGNpbnEgam91cnMgZnJhbmNzIGFwcsOocyB1bmUgc2ltcGxlXHJcblx0XHRcdFx0XHRcdFx0c29tbWF0aW9uIHBhciBsZXR0cmUgcmVjb21tYW5kw6llIHJlc3TDqWVcclxuXHRcdFx0XHRcdFx0XHRpbmZydWN0dWV1c2UsIGxlIHByw6lzZW50IGNvbnRyYXQgc2VyYSBpbW3DqWRpYXRlbWVudFxyXG5cdFx0XHRcdFx0XHRcdHLDqXNpbGnDqSBldCBsZSBiYWlsbGV1ciBwb3VycmEgc2UgcHLDqXZhbG9pciBkZVxyXG5cdFx0XHRcdFx0XHRcdGzigJlhcnRpY2xlIDE1OTAgZHUgQ29kZSBjaXZpbCBwb3VyIGNvbnNlcnZlciBsZXNcclxuXHRcdFx0XHRcdFx0XHRhY29tcHRlcyB2ZXJzw6lzIMOgIHRpdHJlIGRlcyBwcmVtaWVyc1xyXG5cdFx0XHRcdFx0XHRcdGRvbW1hZ2VzLWludMOpcsOqdHMuXHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHJcblx0XHRcdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZUNvbG9yfT5cclxuXHRcdFx0XHRcdFx0XHRcdEFubnVsYXRpb25cclxuXHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5lSGVpZ2h0UH0+XHJcblx0XHRcdFx0XHRcdFx0TGEgc2lnbmF0dXJlIGR1IGNvbnRyYXQgZW5nYWdlIGxlcyBkZXV4IHBhcnRpZXMgZGVcclxuXHRcdFx0XHRcdFx0XHRmYcOnb24gZMOpZmluaXRpdmUuIFNpIGxlIGxvY2F0YWlyZSByZW5vbmNlIMOgIGxhXHJcblx0XHRcdFx0XHRcdFx0bG9jYXRpb24gNjAgam91cnMgYXZhbnQgbOKAmWFycml2w6llLCBs4oCZYWNvbXB0ZSBlc3RcclxuXHRcdFx0XHRcdFx0XHRyZW1ib3Vyc8OpLiBFbnRyZSAxIGpvdXIgZXQgNjAgam91cnMgc2kgbm91c1xyXG5cdFx0XHRcdFx0XHRcdHLDqXVzc2lzc29ucyDDoCByZWxvdWVyLCBs4oCZYWNvbXB0ZSBlc3Qgw6lnYWxlbWVudFxyXG5cdFx0XHRcdFx0XHRcdHJlbWJvdXJzw6kuIFNpbm9uIGzigJlhY29tcHRlIGVzdCBwZXJkdS5cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlclRpdGxlQ29sb3J9PlxyXG5cdFx0XHRcdFx0XHRcdFx0RWxlY3Rpb24gZGUgZG9taWNpbGVcclxuXHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5lSGVpZ2h0UH0+XHJcblx0XHRcdFx0XHRcdFx0UG91ciBs4oCZZXjDqWN1dGlvbiBkZXMgcHLDqXNlbnRlcywgbGUgcHJvcHJpw6l0YWlyZSBldFxyXG5cdFx0XHRcdFx0XHRcdGxlIGxvY2F0YWlyZSBmb250IMOpbGVjdGlvbiBkZSBkb21pY2lsZSBkYW5zIGxldXJzXHJcblx0XHRcdFx0XHRcdFx0ZG9taWNpbGVzIHJlc3BlY3RpZnMuIFRvdXRlZm9pcyBlbiBjYXMgZGUgbGl0aWdlLCBsZVxyXG5cdFx0XHRcdFx0XHRcdHRyaWJ1bmFsIGRlcyBsaWV1eCBsb3XDqXMgc2VyYSBzZXVsIGNvbXDDqXRlbnQuXHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHJcblx0XHRcdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdFx0XHRjb250YWluZXJcclxuXHRcdFx0XHRcdFx0ZGlyZWN0aW9uPSdyb3cnXHJcblx0XHRcdFx0XHRcdGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nXHJcblx0XHRcdFx0XHRcdHNwYWNpbmc9ezR9XHJcblx0XHRcdFx0XHRcdGFsaWduSXRlbXM9J2ZsZXgtZW5kJ1xyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBtYXJnaW5Ub3A6ICcyMHB4JyB9fT5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdEZhaXQgZW4gZGV1eCBleGVtcGxhaXJlcyDDoCBGb3Nzw6kgbGUge0RhdGUubm93KCl9XHJcblx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxwPlNpZ25hdHVyZSBkdSBwcm9wcmnDqXRhaXJlLDwvcD5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0SuKAmWFpIHByaXMgY29ubmFpc3NhbmNlIGRlcyBjb25kaXRpb25zIGRlXHJcblx0XHRcdFx0XHRcdFx0XHRsb2NhdGlvbiBjaS1kZXNzdXNcclxuXHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0PHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMjBweCcgfX0+RGF0ZSA6PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0U2lnbmF0dXJlIGR1IGxvY2F0YWlyZSAocHLDqWPDqWTDqSBkZSBsYSBtZW50aW9uIGx1XHJcblx0XHRcdFx0XHRcdFx0XHRldCBhcHByb3V2w6kpXHJcblx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvVGhlbWVQcm92aWRlcj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuXHQvLyBjb25zb2xlLmxvZygnY29udGV4dCcsIGNvbnRleHQucXVlcnkuaWQpO1xyXG5cdGNvbnN0IHJlczEgPSBhd2FpdCBhZmZpY2hlUmVzZXJ2YXRpb24oY29udGV4dC5xdWVyeS5pZCk7XHJcblx0Y29uc3QgcmVzZXJ2YXRpb24gPSBhd2FpdCByZXMxO1xyXG5cdC8vIGNvbnNvbGUubG9nKCdyZXNlcnZhdGlvbicsIHJlc2VydmF0aW9uKTtcclxuXHRjb25zdCByZXMyID0gYXdhaXQgbGlzdEdpdGVCeUlkKHJlc2VydmF0aW9uLmdpdGUpO1xyXG5cdGNvbnN0IGdpdGUgPSBhd2FpdCByZXMyO1xyXG5cdGNvbnN0IHJlczMgPSBhd2FpdCBhZmZpY2hlQ2xpZW50KHJlc2VydmF0aW9uLmNsaWVudCk7XHJcblx0Y29uc3QgY2xpZW50ID0gYXdhaXQgcmVzMztcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHJlc2VydmF0aW9uLFxyXG5cdFx0XHRnaXRlLFxyXG5cdFx0XHRjbGllbnQsXHJcblx0XHR9LFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VydmF0aW9uSWQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=