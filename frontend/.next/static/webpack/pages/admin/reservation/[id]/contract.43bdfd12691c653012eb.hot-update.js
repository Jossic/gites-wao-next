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
  }, "La pr\xE9sente location est consentie et accept\xE9e pour une dur\xE9e de : 2 nuit\xE9es. ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 40
    }
  }), " Elle commence le", ' ', __jsx("span", {
    style: {
      backgroundColor: 'yellow'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 9
    }
  }, reservation.dateArrivee, ' ', reservation.heureArrivee), ' ', "et se terminera le", ' ', __jsx("span", {
    style: {
      backgroundColor: 'yellow'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 9
    }
  }, reservation.dateDepart, ' ', reservation.heureDepart), ". Elle ne pourra en aucun cas \xEAtre prorog\xE9e, sauf accord \xE9crit et pr\xE9alable du propri\xE9taire. Pour nous permettre de nous organiser, (le g\xEEte est \xE0 ", gite.nbKmDeLaMaison, " km de l\u2019habitation principale du propri\xE9taire), vous devez nous avertir quelques jours \xE0 l'avance de votre heure d'arriv\xE9e (par mail ou t\xE9l\xE9phone).")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 8
    }
  }, "Prix en Euros")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
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
      lineNumber: 229,
      columnNumber: 9
    }
  }, reservation.totalTarifBase, ",00 \u20AC")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 9
    }
  }, "Tarif par personne suppl\xE9mentaire au-del\xE0 du minimum fixe :", ' ', __jsx("span", {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 10
    }
  }, gite.supplementParPers, ",00 \u20AC"), ' ', "par nuit et par personne, soit :", ' ', __jsx("span", {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
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
      lineNumber: 255,
      columnNumber: 9
    }
  }, reservation.totalTarifSuppl, ",00 \u20AC")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 9
    }
  }, "Il comprend les charges (t\xE9l\xE9vision, eau, \xE9lectricit\xE9), le m\xE9nage et la fourniture des draps et taies")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 9
    }
  }, "Suppl\xE9ment par animal", ' ', __jsx("span", {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 10
    }
  }, "3 \u20AC"), ' ', "par jour. Pour", ' ', __jsx("span", {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
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
      lineNumber: 287,
      columnNumber: 9
    }
  }, reservation.mtAnimaux, ",00 \u20AC")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 9
    }
  }, "Forfait lits faits \xE0 l'arriv\xE9e :", ' ', __jsx("span", {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
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
      lineNumber: 305,
      columnNumber: 9
    }
  }, reservation.totalFtLit, ",00 \u20AC")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      position: 'relative',
      left: '870px',
      fontWeight: 'bold'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
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
      lineNumber: 323,
      columnNumber: 9
    }
  }, reservation.resteAPayer, ",00 \u20AC")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      position: 'relative',
      left: '350px',
      fontWeight: 'bold'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 9
    }
  }, "R\xE9glement \xE0 transmettre avec votre contrat sign\xE9 (selon les modalit\xE9s ci-apr\xE8s)", ' ', __jsx("span", {
    style: {
      color: 'red',
      textDecoration: 'underline'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 10
    }
  }, "\xE0 titre d'acompte"), ":"), __jsx("span", {
    style: {
      "float": 'right',
      backgroundColor: 'yellow'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 9
    }
  }, reservation.acompte, ",00 \u20AC")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
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
      lineNumber: 362,
      columnNumber: 10
    }
  }, "SAS WAO"), ", ou ch\xE8ques vacances (envoi au si\xE8ge social)")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 9
    }
  }, "Taxes diverses calcul\xE9es sur le nombre d'adultes, soit :", ' ', __jsx("span", {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 10
    }
  }, reservation.nbPers - reservation.nbEnf, ' '), "pour", ' ', __jsx("span", {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
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
      lineNumber: 393,
      columnNumber: 9
    }
  }, ",00 \u20AC")), __jsx("div", {
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
  }, "Nous demandons un envoi en recommand\xE9 uniquement pour les ch\xE8ques vacances."), __jsx("span", {
    style: {
      position: 'relative',
      left: '260px',
      fontWeight: 'bold'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 9
    }
  }, "solde \xE0 r\xE9gler \xE0 votre arriv\xE9e :"), __jsx("span", {
    style: {
      "float": 'right',
      backgroundColor: '#FFB6C1'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 9
    }
  }, reservation.resteAPayer - reservation.acompte + reservation.taxeSejour, ",00 \u20AC")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 8
    }
  }, __jsx("span", {
    style: {
      textAlign: 'left'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
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
      lineNumber: 431,
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
      lineNumber: 439,
      columnNumber: 8
    }
  }, "La r\xE9servation deviendra effective d\xE8s lors que le locataire aura retourn\xE9 un exemplaire dat\xE9 et sign\xE9 du pr\xE9sent contrat avant le (DATE A VOIR) accompagn\xE9 du ch\xE8que. Au-del\xE0 de cette date, la r\xE9servation sera caduque et le propri\xE9taire disposera librement du logement.")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 8
    }
  }, "Assurances")), __jsx("p", {
    style: {
      fontSize: '16px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 7
    }
  }, "Le locataire doit v\xE9rifier si son contrat d\u2019habitation principale pr\xE9voit l\u2019extension vill\xE9giature en responsabilit\xE9 civile. Dans l\u2019hypoth\xE8se contraire, il peut intervenir aupr\xE8s de sa compagnie d\u2019assurance et r\xE9clamer l\u2019extension de la garantie pour la p\xE9riode de la location, ou bien souscrire un contrat particulier au titre des clauses vill\xE9giature. Derri\xE8re le g\xEEte se trouve un ruisseau et un \xE9tang, par mesure de s\xE9curit\xE9, Les enfants devront toujours \xEAtre accompagn\xE9s d\u2019un adulte et le propri\xE9taire ne peut en aucun cas \xEAtre tenu pour responsable des accidents qui pourraient y survenir. De m\xEAme pour l\u2019aire de jeu du g\xEEte, les enfants qui l\u2019utilisent doivent \xEAtre sous la surveillance des parents."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 8
    }
  }, "Etat des lieux et inventaire")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 7
    }
  }, "Le document pour l\u2019\xE9tat des lieux se trouve dans le cahier d\u2019explication du g\xEEte. Ce contrat fait office d'inventaire. Pour \xE9viter toute contestation le locataire voudra bien contr\xF4ler et signaler toute anomalie dans les 24 heures. Pass\xE9 ce d\xE9lai, les biens lou\xE9s seront consid\xE9r\xE9s comme exempts de dommages \xE0 l\u2019entr\xE9e du locataire. Celui-ci sera responsable de toute d\xE9t\xE9rioration ou perte pouvant survenir \xE0 ce mobilier ainsi qu\u2019aux divers mat\xE9riels de l\u2019espace piscine et d\xE9tente."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494,
      columnNumber: 8
    }
  }, "Jouissance des lieux")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 7
    }
  }, "Le locataire entretiendra les lieux lou\xE9s et les rendra en bon \xE9tat de propret\xE9. Il veillera \xE0 ce que la tranquillit\xE9 du voisinage ne soit pas troubl\xE9e. La sous location est interdite au preneur, m\xEAme \xE0 titre gratuit, sous peine de r\xE9siliation du contrat. L\u2019installation de tentes ou le stationnement de caravanes sur le terrain de la propri\xE9t\xE9 lou\xE9e est interdit, sauf accord pr\xE9alable du propri\xE9taire. L\u2019utilisateur s\u2019engage \xE0 ne pas utiliser le service WI-FI \xE0 des fins illicites, interdites ou ill\xE9gales (entre autres respect de la loi Hadopi). Le loueur, \xE0 la demande de tiers et/ou de toute autorit\xE9 comp\xE9tente, se r\xE9serve le droit de suspendre temporairement ou de mani\xE8re d\xE9finitive toute utilisation du service sans que sa responsabilit\xE9 ne puisse \xEAtre recherch\xE9e et sans que l\u2019utilisateur ne puisse revendiquer une quelconque indemnisation ou r\xE9paration. En aucun cas le loueur ne peut \xEAtre tenue de r\xE9parer les pr\xE9judices directs et/ou indirects subis du fait de l\u2019utilisation du service par l\u2019utilisateur, ce dernier reconnaissant que le loueur ne peut pas \xEAtre responsable des contenus auquel acc\xE8de l\u2019utilisateur et que l\u2019accessibilit\xE9 aux contenus et services n\u2019est pas garantie et peut \xEAtre suspendue sans pr\xE9avis."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 8
    }
  }, "Clause r\xE9solutoire")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 7
    }
  }, "A d\xE9faut de paiement aux \xE9ch\xE9ances fix\xE9es ou en cas d\u2019inex\xE9cution d\u2019une des clauses du pr\xE9sent engagement et cinq jours francs apr\xE8s une simple sommation par lettre recommand\xE9e rest\xE9e infructueuse, le pr\xE9sent contrat sera imm\xE9diatement r\xE9sili\xE9 et le bailleur pourra se pr\xE9valoir de l\u2019article 1590 du Code civil pour conserver les acomptes vers\xE9s \xE0 titre des premiers dommages-int\xE9r\xEAts."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
      columnNumber: 8
    }
  }, "Annulation")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 7
    }
  }, "La signature du contrat engage les deux parties de fa\xE7on d\xE9finitive. Si le locataire renonce \xE0 la location 60 jours avant l\u2019arriv\xE9e, l\u2019acompte est rembours\xE9. Entre 1 jour et 60 jours si nous r\xE9ussissons \xE0 relouer, l\u2019acompte est \xE9galement rembours\xE9. Sinon l\u2019acompte est perdu."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 8
    }
  }, "Election de domicile")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
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
      lineNumber: 570,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578,
      columnNumber: 8
    }
  }, "Fait en deux exemplaires \xE0 Foss\xE9 le ", Date.now()), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581,
      columnNumber: 8
    }
  }, "Signature du propri\xE9taire,")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584,
      columnNumber: 8
    }
  }, "J\u2019ai pris connaissance des conditions de location ci-dessus"), __jsx("p", {
    style: {
      marginBottom: '20px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588,
      columnNumber: 8
    }
  }, "Date :"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24vL2NvbnRyYWN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwidHlwZSIsIlJlc2VydmF0aW9uSWQiLCJyZXNlcnZhdGlvbiIsImNsaWVudCIsImdpdGUiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImZsZXhHcm93Iiwid2lkdGgiLCJwYXBlciIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInRleHRBbGlnbiIsInBhcGVyVGl0bGUiLCJtYXJnaW5Ub3AiLCJwYXBlclRpdGxlQ29sb3IiLCJtYXJnaW5Cb3R0b20iLCJjb3VsZXVyMSIsInR5cG9Tb3VsaWduZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsInRleHREZWNvcmF0aW9uIiwiY2xhc3NlcyIsInZpZ25ldHRlTGluayIsIm5vbSIsImNpdmlsaXRlIiwicHJlbm9tIiwiYWRyZXNzZSIsImNwIiwidmlsbGUiLCJwYXlzIiwidGVsIiwibWFpbCIsIm5iUGVycyIsIm5iRW5mIiwibGluZUhlaWdodCIsImN0RGVzaWduYXRpb25UaXRyZSIsInJlbmRlckhUTUwiLCJjdFByaW5jaXBDYXJhYyIsImN0U2l0dUxvZyIsImN0RGVzY0xvZyIsImxpbmVIZWlnaHRQIiwiZGF0ZUFycml2ZWUiLCJoZXVyZUFycml2ZWUiLCJkYXRlRGVwYXJ0IiwiaGV1cmVEZXBhcnQiLCJuYkttRGVMYU1haXNvbiIsInRvdGFsVGFyaWZCYXNlIiwiY29sb3IiLCJzdXBwbGVtZW50UGFyUGVycyIsIm5iUGVyc1N1cCIsInRvdGFsVGFyaWZTdXBwbCIsIm5iQ2hpZW4iLCJtdEFuaW1hdXgiLCJmdExpdCIsInRvdGFsRnRMaXQiLCJwb3NpdGlvbiIsImxlZnQiLCJyZXN0ZUFQYXllciIsImFjb21wdGUiLCJuYk51aXRlcyIsInRheGVTZWpvdXIiLCJtdENhdXRpb24iLCJEYXRlIiwibm93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aW9uL1tpZF0vY29udHJhY3QuNDNiZGZkMTI2OTFjNjUzMDEyZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0YWZmaWNoZUNsaWVudCxcclxuXHRnZXRDbGllbnRCeUlkLFxyXG59IGZyb20gJy4uLy4uLy4uLy4uLy4uL2FjdGlvbnMvY2xpZW50QWN0aW9ucyc7XHJcbmltcG9ydCB7IGxpc3RHaXRlQnlJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5pbXBvcnQgeyBhZmZpY2hlUmVzZXJ2YXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9hY3Rpb25zL3Jlc2VydmF0aW9uQWN0aW9ucyc7XHJcbmltcG9ydCBBZG1pbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2F1dGgvQWRtaW4nO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IHsgR3JpZCwgUGFwZXIsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCByZW5kZXJIVE1MIGZyb20gJ3JlYWN0LXJlbmRlci1odG1sJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcblx0cGFsZXR0ZToge1xyXG5cdFx0dHlwZTogJ2xpZ2h0JyxcclxuXHR9LFxyXG59KTtcclxuXHJcbmNvbnN0IFJlc2VydmF0aW9uSWQgPSAoeyByZXNlcnZhdGlvbiwgY2xpZW50LCBnaXRlIH0pID0+IHtcclxuXHRjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRcdHJvb3Q6IHtcclxuXHRcdFx0ZmxleEdyb3c6IDEsXHJcblx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHR9LFxyXG5cdFx0cGFwZXI6IHtcclxuXHRcdFx0aGVpZ2h0OiAyMzAsXHJcblx0XHRcdHdpZHRoOiA0ODAsXHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogJyNkZGRkZGQnLFxyXG5cdFx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG5cdFx0fSxcclxuXHRcdHBhcGVyVGl0bGU6IHtcclxuXHRcdFx0aGVpZ2h0OiAzMCxcclxuXHRcdFx0bWFyZ2luVG9wOiAnMTBweCcsXHJcblx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogJyNjY2NjY2MnLFxyXG5cdFx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG5cdFx0fSxcclxuXHRcdHBhcGVyVGl0bGVDb2xvcjoge1xyXG5cdFx0XHRoZWlnaHQ6IDMwLFxyXG5cdFx0XHRtYXJnaW5Ub3A6ICcxMHB4JyxcclxuXHRcdFx0bWFyZ2luQm90dG9tOiAnMTBweCcsXHJcblx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogYCR7Z2l0ZS5jb3VsZXVyMX1gLFxyXG5cdFx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG5cdFx0fSxcclxuXHRcdHR5cG9Tb3VsaWduZToge1xyXG5cdFx0XHRmb250V2VpZ2h0OiAnYm9sZCcsXHJcblx0XHRcdGZvbnRTaXplOiAnMThweCcsXHJcblx0XHRcdG1hcmdpbkJvdHRvbTogJzEwcHgnLFxyXG5cdFx0XHR0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXHJcblx0XHR9LFxyXG5cdH0pKTtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG5cdFx0XHRcdDxDc3NCYXNlbGluZSAvPlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfSBhbGlnbkl0ZW1zPSdmbGV4LXN0YXJ0Jz5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17Mn0+XHJcblx0XHRcdFx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2QtYmxvY2sgdy0xMDAnXHJcblx0XHRcdFx0XHRcdFx0XHRzcmM9e2dpdGUudmlnbmV0dGVMaW5rfVxyXG5cdFx0XHRcdFx0XHRcdFx0YWx0PXtnaXRlLm5vbX1cclxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoPXs1MDB9XHJcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9ezM3NX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEwfT5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeVxyXG5cdFx0XHRcdFx0XHRcdFx0dmFyaWFudD0naDUnXHJcblx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnQ9J2g1J1xyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdENPTlRSQVQgREUgTE9DQVRJT04gRU4gTUVVQkzDiSBTQUlTT05OSUVSIDxiciAvPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdE1hZGFtZSwgTW9uc2lldXIuIFN1aXRlIMOgIHZvdHJlIGRlbWFuZGUsIGplIHZvdXNcclxuXHRcdFx0XHRcdFx0XHRhZHJlc3NlIGxlIHByw6lzZW50IGNvbnRyYXQgZGUgbG9jYXRpb24gZG9udCAxXHJcblx0XHRcdFx0XHRcdFx0ZXhlbXBsYWlyZSBlc3Qgw6AgbWUgcmV0b3VybmVyIChwYXIgY291cnJpZXIgb3UgbWFpbClcclxuXHRcdFx0XHRcdFx0XHRyZXbDqnR1IGRlIHZvdHJlIHNpZ25hdHVyZSBldCBhY2NvbXBhZ27DqSBkdSBtb250YW50XHJcblx0XHRcdFx0XHRcdFx0ZGUgbOKAmWFjb21wdGUgKHZpcmVtZW50IG91IGNvdXJyaWVyKS4gRW4gZXNww6lyYW50XHJcblx0XHRcdFx0XHRcdFx0YXZvaXIgbGUgcGxhaXNpciBkZSB2b3VzIGFjY3VlaWxsaXIgcHJvY2hhaW5lbWVudCxcclxuXHRcdFx0XHRcdFx0XHRyZWNldmV6IG1lcyBzaW5jw6hyZXMgc2FsdXRhdGlvbnMuXHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHJcblx0XHRcdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdFx0XHRjb250YWluZXJcclxuXHRcdFx0XHRcdFx0ZGlyZWN0aW9uPSdyb3cnXHJcblx0XHRcdFx0XHRcdGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nXHJcblx0XHRcdFx0XHRcdHNwYWNpbmc9ezR9XHJcblx0XHRcdFx0XHRcdGFsaWduSXRlbXM9J2NlbnRlcic+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeT5FbnRyZSBsYSBzb2Npw6l0w6kgOjwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHRcdFNpw6lnZSBzb2NpYWwgPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRTQVMgV0FPIDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0MSBSb3V0ZSBkZSBOb3VhcnQgPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQwODI0MCBGb3Nzw6ksIEZSQU5DRSA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdENvdXJyaWVyIDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj0nbWFpbHRvOmNvbnRhY3RAZ2l0ZXMtd2FvLmZyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGFjdEBnaXRlcy13YW8uZnJcclxuXHRcdFx0XHRcdFx0XHRcdDwvYT57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRTaXRlIGludGVybmV0IDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj0naHR0cDovL3d3dy5naXRlcy13YW8uZnInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRodHRwOi8vd3d3LmdpdGVzLXdhby5mclxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFRlbCA6ICszMyAoMCkzIDI0IDMwIDA4IDk1IDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0SUJBTiA6IEZSNzYgMTAyMCA2MDg0IDAzOTggMzg3NyAyOTI1IDA5MyA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdEJJQyA6IEFHUklGUlBQODAyIDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0VElUVUxBSVJFIDogU0FTIFdBTyA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5FdCBsZSBsb2NhdGFpcmUgOjwvc3Bhbj4gPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRRdWFsaXTDqSA6IDxzcGFuPntjbGllbnQuY2l2aWxpdGV9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRQcsOpbm9tIGV0IE5vbSA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Y2xpZW50Lm5vbX0ge2NsaWVudC5wcmVub219XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdEFkcmVzc2UgOiA8c3Bhbj57Y2xpZW50LmFkcmVzc2V9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRDUCAmIFZpbGxlIDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtjbGllbnQuY3B9IHtjbGllbnQudmlsbGV9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFBheXMgOiA8c3Bhbj57Y2xpZW50LnBheXN9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRUw6lsw6lwaG9uZSA6IDxzcGFuPntjbGllbnQudGVsfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0Q291cnJpZXIgOiA8c3Bhbj57Y2xpZW50Lm1haWx9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0UG91ciBsYSB0YXhlIGRlIFPDqWpvdXIgbm9tYnJlIGRlIHBlcnNvbm5lcyA6XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0XHRUYXhhYmxlcyA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi5uYlBlcnMgLSByZXNlcnZhdGlvbi5uYkVuZn0gLSBOb25cclxuXHRcdFx0XHRcdFx0XHRcdHRheGFibGVzIDoge3Jlc2VydmF0aW9uLm5iRW5mfVxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZX0+XHJcblx0XHRcdFx0XHRcdFx0Q09ORElUSU9OUyBERSBMT0NBVElPTlxyXG5cdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZUNvbG9yfT5cclxuXHRcdFx0XHRcdFx0XHREw6lzaWduYXRpb24gZGVzIGxpZXV4IGV0IGRlc2NyaXB0aWYgZHUgbG9nZW1lbnRcclxuXHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMubGluZUhlaWdodH0+XHJcblx0XHRcdFx0XHRcdFx0e2dpdGUuY3REZXNpZ25hdGlvblRpdHJlfVxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblxyXG5cdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudHlwb1NvdWxpZ25lfT5cclxuXHRcdFx0XHRcdFx0XHRQcmluY2lwYWxlcyBjYXJhY3TDqXJpc3RpcXVlcyA6XHJcblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2VkaXRvcic+XHJcblx0XHRcdFx0XHRcdFx0e3JlbmRlckhUTUwoZ2l0ZS5jdFByaW5jaXBDYXJhYyl9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudHlwb1NvdWxpZ25lfT5cclxuXHRcdFx0XHRcdFx0XHRTaXR1YXRpb24gZHUgbG9nZW1lbnQgZGFucyBsYSBsb2NhbGl0w6kgOlxyXG5cdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdlZGl0b3InPlxyXG5cdFx0XHRcdFx0XHRcdHtyZW5kZXJIVE1MKGdpdGUuY3RTaXR1TG9nKX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBvU291bGlnbmV9PlxyXG5cdFx0XHRcdFx0XHRcdERlc2NyaXB0aW9uIGR1IGxvZ2VtZW50IDpcclxuXHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdlZGl0b3InXHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnNzBweCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0e3JlbmRlckhUTUwoZ2l0ZS5jdERlc2NMb2cpfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZUNvbG9yfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0RHVyw6llIGRlIGxhIGxvY2F0aW9uIDpcclxuXHRcdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMubGluZUhlaWdodFB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0TGEgcHLDqXNlbnRlIGxvY2F0aW9uIGVzdCBjb25zZW50aWUgZXQgYWNjZXB0w6llXHJcblx0XHRcdFx0XHRcdFx0XHRwb3VyIHVuZSBkdXLDqWUgZGUgOiAyIG51aXTDqWVzLiA8YnIgLz4gRWxsZVxyXG5cdFx0XHRcdFx0XHRcdFx0Y29tbWVuY2UgbGV7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAneWVsbG93JyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3Jlc2VydmF0aW9uLmRhdGVBcnJpdmVlfXsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi5oZXVyZUFycml2ZWV9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdGV0IHNlIHRlcm1pbmVyYSBsZXsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24uZGF0ZURlcGFydH17JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24uaGV1cmVEZXBhcnR9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQuIEVsbGUgbmUgcG91cnJhIGVuIGF1Y3VuIGNhcyDDqnRyZSBwcm9yb2fDqWUsXHJcblx0XHRcdFx0XHRcdFx0XHRzYXVmIGFjY29yZCDDqWNyaXQgZXQgcHLDqWFsYWJsZSBkdSBwcm9wcmnDqXRhaXJlLlxyXG5cdFx0XHRcdFx0XHRcdFx0UG91ciBub3VzIHBlcm1ldHRyZSBkZSBub3VzIG9yZ2FuaXNlciwgKGxlIGfDrnRlXHJcblx0XHRcdFx0XHRcdFx0XHRlc3Qgw6Age2dpdGUubmJLbURlTGFNYWlzb259IGttIGRlIGzigJloYWJpdGF0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHRwcmluY2lwYWxlIGR1IHByb3ByacOpdGFpcmUpLCB2b3VzIGRldmV6IG5vdXNcclxuXHRcdFx0XHRcdFx0XHRcdGF2ZXJ0aXIgcXVlbHF1ZXMgam91cnMgw6AgbCdhdmFuY2UgZGUgdm90cmUgaGV1cmVcclxuXHRcdFx0XHRcdFx0XHRcdGQnYXJyaXbDqWUgKHBhciBtYWlsIG91IHTDqWzDqXBob25lKS5cclxuXHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyVGl0bGVDb2xvcn0+XHJcblx0XHRcdFx0XHRcdFx0XHRQcml4IGVuIEV1cm9zXHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmVIZWlnaHRQfT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdExhIHByw6lzZW50ZSBsb2NhdGlvbiBzYWlzb25uacOocmUgYSBsaWV1XHJcblx0XHRcdFx0XHRcdFx0XHRcdG1veWVubmFudCBsYSBzb21tZSBkZSAobWluaW11bSBmaXhlIGRlIGJhc2UpXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsb2F0OiAncmlnaHQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3llbGxvdycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24udG90YWxUYXJpZkJhc2V9LDAwIOKCrFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0VGFyaWYgcGFyIHBlcnNvbm5lIHN1cHBsw6ltZW50YWlyZSBhdS1kZWzDoCBkdVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRtaW5pbXVtIGZpeGUgOnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAncmVkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Z2l0ZS5zdXBwbGVtZW50UGFyUGVyc30sMDAg4oKsXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwYXIgbnVpdCBldCBwYXIgcGVyc29ubmUsIHNvaXQgOnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAncmVkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24ubmJQZXJzU3VwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsb2F0OiAncmlnaHQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3llbGxvdycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24udG90YWxUYXJpZlN1cHBsfSwwMCDigqxcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdElsIGNvbXByZW5kIGxlcyBjaGFyZ2VzICh0w6lsw6l2aXNpb24sIGVhdSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0w6lsZWN0cmljaXTDqSksIGxlIG3DqW5hZ2UgZXQgbGEgZm91cm5pdHVyZSBkZXNcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZHJhcHMgZXQgdGFpZXNcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFN1cHBsw6ltZW50IHBhciBhbmltYWx7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3JlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0MyDigqxcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhciBqb3VyLiBQb3VyeycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdyZWQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi5uYkNoaWVufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsb2F0OiAncmlnaHQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3llbGxvdycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24ubXRBbmltYXV4fSwwMCDigqxcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEZvcmZhaXQgbGl0cyBmYWl0cyDDoCBsJ2Fycml2w6llIDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3JlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2dpdGUuZnRMaXR9LDAwIOKCrC9wZXJzb25uZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsb2F0OiAncmlnaHQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3llbGxvdycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24udG90YWxGdExpdH0sMDAg4oKsXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxlZnQ6ICc4NzBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodDogJ2JvbGQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0U29pdCBsYSBzb21tZSBkZTpcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxvYXQ6ICdyaWdodCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAneWVsbG93JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250V2VpZ2h0OiAnYm9sZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24ucmVzdGVBUGF5ZXJ9LDAwIOKCrFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxlZnQ6ICczNTBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodDogJ2JvbGQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0UsOpZ2xlbWVudCDDoCB0cmFuc21ldHRyZSBhdmVjIHZvdHJlIGNvbnRyYXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2lnbsOpIChzZWxvbiBsZXMgbW9kYWxpdMOpcyBjaS1hcHLDqHMpeycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdyZWQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdMOgIHRpdHJlIGQnYWNvbXB0ZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDpcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxvYXQ6ICdyaWdodCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAneWVsbG93JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi5hY29tcHRlfSwwMCDigqxcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNvaXQgcGFyIHZpcmVtZW50IChJQkFOIGRhbnMgcGFydGllXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNvY2nDqXTDqSksIG91IGNow6hxdWUgw6AgbCdvcmRyZSBkZXsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAncmVkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRTQVMgV0FPXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0LCBvdSBjaMOocXVlcyB2YWNhbmNlcyAoZW52b2kgYXUgc2nDqGdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNvY2lhbClcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFRheGVzIGRpdmVyc2VzIGNhbGN1bMOpZXMgc3VyIGxlIG5vbWJyZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkJ2FkdWx0ZXMsIHNvaXQgOnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAncmVkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24ubmJQZXJzIC0gcmVzZXJ2YXRpb24ubmJFbmZ9eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwb3VyeycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdyZWQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi5uYk51aXRlc317JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdG51aXTDqWVzXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsb2F0OiAncmlnaHQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3llbGxvdycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Lyoge3Jlc2VydmF0aW9uLn0gKi99LDAwIOKCrFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Tm91cyBkZW1hbmRvbnMgdW4gZW52b2kgZW4gcmVjb21tYW5kw6lcclxuXHRcdFx0XHRcdFx0XHRcdFx0dW5pcXVlbWVudCBwb3VyIGxlcyBjaMOocXVlcyB2YWNhbmNlcy5cclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246ICdyZWxhdGl2ZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGVmdDogJzI2MHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250V2VpZ2h0OiAnYm9sZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzb2xkZSDDoCByw6lnbGVyIMOgIHZvdHJlIGFycml2w6llIDpcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxvYXQ6ICdyaWdodCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAnI0ZGQjZDMScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24ucmVzdGVBUGF5ZXIgLVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlc2VydmF0aW9uLmFjb21wdGUgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlc2VydmF0aW9uLnRheGVTZWpvdXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdCwwMCDigqxcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEFwcsOocyB2b3RyZSBzw6lqb3VyIHVuIHNjYW4gZGUgbGEgY2F1dGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkw6l0cnVpdGUgdm91cyBzZXJhIHRyYW5zbWlzIHBhciBjb3VycmllbCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2F1ZiBlbiBjYXMgZGUgZMOpZ8OidHMuXHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsb2F0OiAncmlnaHQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3llbGxvdycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7cmVzZXJ2YXRpb24ubXRDYXV0aW9ufSwwMCDigqxcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodDogJ2JvbGQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXHJcblx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdExhIHLDqXNlcnZhdGlvbiBkZXZpZW5kcmEgZWZmZWN0aXZlIGTDqHMgbG9ycyBxdWVcclxuXHRcdFx0XHRcdFx0XHRcdGxlIGxvY2F0YWlyZSBhdXJhIHJldG91cm7DqSB1biBleGVtcGxhaXJlIGRhdMOpIGV0XHJcblx0XHRcdFx0XHRcdFx0XHRzaWduw6kgZHUgcHLDqXNlbnQgY29udHJhdCBhdmFudCBsZSAoREFURSBBIFZPSVIpXHJcblx0XHRcdFx0XHRcdFx0XHRhY2NvbXBhZ27DqSBkdSBjaMOocXVlLiBBdS1kZWzDoCBkZSBjZXR0ZSBkYXRlLCBsYVxyXG5cdFx0XHRcdFx0XHRcdFx0csOpc2VydmF0aW9uIHNlcmEgY2FkdXF1ZSBldCBsZSBwcm9wcmnDqXRhaXJlXHJcblx0XHRcdFx0XHRcdFx0XHRkaXNwb3NlcmEgbGlicmVtZW50IGR1IGxvZ2VtZW50LlxyXG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyVGl0bGVDb2xvcn0+XHJcblx0XHRcdFx0XHRcdFx0XHRBc3N1cmFuY2VzXHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8cCBzdHlsZT17eyBmb250U2l6ZTogJzE2cHgnIH19PlxyXG5cdFx0XHRcdFx0XHRcdExlIGxvY2F0YWlyZSBkb2l0IHbDqXJpZmllciBzaSBzb24gY29udHJhdFxyXG5cdFx0XHRcdFx0XHRcdGTigJloYWJpdGF0aW9uIHByaW5jaXBhbGUgcHLDqXZvaXQgbOKAmWV4dGVuc2lvblxyXG5cdFx0XHRcdFx0XHRcdHZpbGzDqWdpYXR1cmUgZW4gcmVzcG9uc2FiaWxpdMOpIGNpdmlsZS4gRGFuc1xyXG5cdFx0XHRcdFx0XHRcdGzigJloeXBvdGjDqHNlIGNvbnRyYWlyZSwgaWwgcGV1dCBpbnRlcnZlbmlyIGF1cHLDqHMgZGVcclxuXHRcdFx0XHRcdFx0XHRzYSBjb21wYWduaWUgZOKAmWFzc3VyYW5jZSBldCByw6ljbGFtZXIgbOKAmWV4dGVuc2lvbiBkZVxyXG5cdFx0XHRcdFx0XHRcdGxhIGdhcmFudGllIHBvdXIgbGEgcMOpcmlvZGUgZGUgbGEgbG9jYXRpb24sIG91IGJpZW5cclxuXHRcdFx0XHRcdFx0XHRzb3VzY3JpcmUgdW4gY29udHJhdCBwYXJ0aWN1bGllciBhdSB0aXRyZSBkZXNcclxuXHRcdFx0XHRcdFx0XHRjbGF1c2VzIHZpbGzDqWdpYXR1cmUuIERlcnJpw6hyZSBsZSBnw650ZSBzZSB0cm91dmUgdW5cclxuXHRcdFx0XHRcdFx0XHRydWlzc2VhdSBldCB1biDDqXRhbmcsIHBhciBtZXN1cmUgZGUgc8OpY3VyaXTDqSwgTGVzXHJcblx0XHRcdFx0XHRcdFx0ZW5mYW50cyBkZXZyb250IHRvdWpvdXJzIMOqdHJlIGFjY29tcGFnbsOpcyBk4oCZdW5cclxuXHRcdFx0XHRcdFx0XHRhZHVsdGUgZXQgbGUgcHJvcHJpw6l0YWlyZSBuZSBwZXV0IGVuIGF1Y3VuIGNhcyDDqnRyZVxyXG5cdFx0XHRcdFx0XHRcdHRlbnUgcG91ciByZXNwb25zYWJsZSBkZXMgYWNjaWRlbnRzIHF1aSBwb3VycmFpZW50IHlcclxuXHRcdFx0XHRcdFx0XHRzdXJ2ZW5pci4gRGUgbcOqbWUgcG91ciBs4oCZYWlyZSBkZSBqZXUgZHUgZ8OudGUsIGxlc1xyXG5cdFx0XHRcdFx0XHRcdGVuZmFudHMgcXVpIGzigJl1dGlsaXNlbnQgZG9pdmVudCDDqnRyZSBzb3VzIGxhXHJcblx0XHRcdFx0XHRcdFx0c3VydmVpbGxhbmNlIGRlcyBwYXJlbnRzLlxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblxyXG5cdFx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyVGl0bGVDb2xvcn0+XHJcblx0XHRcdFx0XHRcdFx0XHRFdGF0IGRlcyBsaWV1eCBldCBpbnZlbnRhaXJlXHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMubGluZUhlaWdodFB9PlxyXG5cdFx0XHRcdFx0XHRcdExlIGRvY3VtZW50IHBvdXIgbOKAmcOpdGF0IGRlcyBsaWV1eCBzZSB0cm91dmUgZGFucyBsZVxyXG5cdFx0XHRcdFx0XHRcdGNhaGllciBk4oCZZXhwbGljYXRpb24gZHUgZ8OudGUuIENlIGNvbnRyYXQgZmFpdCBvZmZpY2VcclxuXHRcdFx0XHRcdFx0XHRkJ2ludmVudGFpcmUuIFBvdXIgw6l2aXRlciB0b3V0ZSBjb250ZXN0YXRpb24gbGVcclxuXHRcdFx0XHRcdFx0XHRsb2NhdGFpcmUgdm91ZHJhIGJpZW4gY29udHLDtGxlciBldCBzaWduYWxlciB0b3V0ZVxyXG5cdFx0XHRcdFx0XHRcdGFub21hbGllIGRhbnMgbGVzIDI0IGhldXJlcy4gUGFzc8OpIGNlIGTDqWxhaSwgbGVzXHJcblx0XHRcdFx0XHRcdFx0YmllbnMgbG91w6lzIHNlcm9udCBjb25zaWTDqXLDqXMgY29tbWUgZXhlbXB0cyBkZVxyXG5cdFx0XHRcdFx0XHRcdGRvbW1hZ2VzIMOgIGzigJllbnRyw6llIGR1IGxvY2F0YWlyZS4gQ2VsdWktY2kgc2VyYVxyXG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNhYmxlIGRlIHRvdXRlIGTDqXTDqXJpb3JhdGlvbiBvdSBwZXJ0ZSBwb3V2YW50XHJcblx0XHRcdFx0XHRcdFx0c3VydmVuaXIgw6AgY2UgbW9iaWxpZXIgYWluc2kgcXXigJlhdXggZGl2ZXJzIG1hdMOpcmllbHNcclxuXHRcdFx0XHRcdFx0XHRkZSBs4oCZZXNwYWNlIHBpc2NpbmUgZXQgZMOpdGVudGUuXHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHJcblx0XHRcdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZUNvbG9yfT5cclxuXHRcdFx0XHRcdFx0XHRcdEpvdWlzc2FuY2UgZGVzIGxpZXV4XHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMubGluZUhlaWdodFB9PlxyXG5cdFx0XHRcdFx0XHRcdExlIGxvY2F0YWlyZSBlbnRyZXRpZW5kcmEgbGVzIGxpZXV4IGxvdcOpcyBldCBsZXNcclxuXHRcdFx0XHRcdFx0XHRyZW5kcmEgZW4gYm9uIMOpdGF0IGRlIHByb3ByZXTDqS4gSWwgdmVpbGxlcmEgw6AgY2UgcXVlXHJcblx0XHRcdFx0XHRcdFx0bGEgdHJhbnF1aWxsaXTDqSBkdSB2b2lzaW5hZ2UgbmUgc29pdCBwYXMgdHJvdWJsw6llLlxyXG5cdFx0XHRcdFx0XHRcdExhIHNvdXMgbG9jYXRpb24gZXN0IGludGVyZGl0ZSBhdSBwcmVuZXVyLCBtw6ptZSDDoFxyXG5cdFx0XHRcdFx0XHRcdHRpdHJlIGdyYXR1aXQsIHNvdXMgcGVpbmUgZGUgcsOpc2lsaWF0aW9uIGR1IGNvbnRyYXQuXHJcblx0XHRcdFx0XHRcdFx0TOKAmWluc3RhbGxhdGlvbiBkZSB0ZW50ZXMgb3UgbGUgc3RhdGlvbm5lbWVudCBkZVxyXG5cdFx0XHRcdFx0XHRcdGNhcmF2YW5lcyBzdXIgbGUgdGVycmFpbiBkZSBsYSBwcm9wcmnDqXTDqSBsb3XDqWUgZXN0XHJcblx0XHRcdFx0XHRcdFx0aW50ZXJkaXQsIHNhdWYgYWNjb3JkIHByw6lhbGFibGUgZHUgcHJvcHJpw6l0YWlyZS5cclxuXHRcdFx0XHRcdFx0XHRM4oCZdXRpbGlzYXRldXIgc+KAmWVuZ2FnZSDDoCBuZSBwYXMgdXRpbGlzZXIgbGUgc2VydmljZVxyXG5cdFx0XHRcdFx0XHRcdFdJLUZJIMOgIGRlcyBmaW5zIGlsbGljaXRlcywgaW50ZXJkaXRlcyBvdSBpbGzDqWdhbGVzXHJcblx0XHRcdFx0XHRcdFx0KGVudHJlIGF1dHJlcyByZXNwZWN0IGRlIGxhIGxvaSBIYWRvcGkpLiBMZSBsb3VldXIsXHJcblx0XHRcdFx0XHRcdFx0w6AgbGEgZGVtYW5kZSBkZSB0aWVycyBldC9vdSBkZSB0b3V0ZSBhdXRvcml0w6lcclxuXHRcdFx0XHRcdFx0XHRjb21ww6l0ZW50ZSwgc2UgcsOpc2VydmUgbGUgZHJvaXQgZGUgc3VzcGVuZHJlXHJcblx0XHRcdFx0XHRcdFx0dGVtcG9yYWlyZW1lbnQgb3UgZGUgbWFuacOocmUgZMOpZmluaXRpdmUgdG91dGVcclxuXHRcdFx0XHRcdFx0XHR1dGlsaXNhdGlvbiBkdSBzZXJ2aWNlIHNhbnMgcXVlIHNhIHJlc3BvbnNhYmlsaXTDqSBuZVxyXG5cdFx0XHRcdFx0XHRcdHB1aXNzZSDDqnRyZSByZWNoZXJjaMOpZSBldCBzYW5zIHF1ZSBs4oCZdXRpbGlzYXRldXIgbmVcclxuXHRcdFx0XHRcdFx0XHRwdWlzc2UgcmV2ZW5kaXF1ZXIgdW5lIHF1ZWxjb25xdWUgaW5kZW1uaXNhdGlvbiBvdVxyXG5cdFx0XHRcdFx0XHRcdHLDqXBhcmF0aW9uLiBFbiBhdWN1biBjYXMgbGUgbG91ZXVyIG5lIHBldXQgw6p0cmVcclxuXHRcdFx0XHRcdFx0XHR0ZW51ZSBkZSByw6lwYXJlciBsZXMgcHLDqWp1ZGljZXMgZGlyZWN0cyBldC9vdVxyXG5cdFx0XHRcdFx0XHRcdGluZGlyZWN0cyBzdWJpcyBkdSBmYWl0IGRlIGzigJl1dGlsaXNhdGlvbiBkdSBzZXJ2aWNlXHJcblx0XHRcdFx0XHRcdFx0cGFyIGzigJl1dGlsaXNhdGV1ciwgY2UgZGVybmllciByZWNvbm5haXNzYW50IHF1ZSBsZVxyXG5cdFx0XHRcdFx0XHRcdGxvdWV1ciBuZSBwZXV0IHBhcyDDqnRyZSByZXNwb25zYWJsZSBkZXMgY29udGVudXNcclxuXHRcdFx0XHRcdFx0XHRhdXF1ZWwgYWNjw6hkZSBs4oCZdXRpbGlzYXRldXIgZXQgcXVlIGzigJlhY2Nlc3NpYmlsaXTDqVxyXG5cdFx0XHRcdFx0XHRcdGF1eCBjb250ZW51cyBldCBzZXJ2aWNlcyBu4oCZZXN0IHBhcyBnYXJhbnRpZSBldCBwZXV0XHJcblx0XHRcdFx0XHRcdFx0w6p0cmUgc3VzcGVuZHVlIHNhbnMgcHLDqWF2aXMuXHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHJcblx0XHRcdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZUNvbG9yfT5cclxuXHRcdFx0XHRcdFx0XHRcdENsYXVzZSByw6lzb2x1dG9pcmVcclxuXHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5lSGVpZ2h0UH0+XHJcblx0XHRcdFx0XHRcdFx0QSBkw6lmYXV0IGRlIHBhaWVtZW50IGF1eCDDqWNow6lhbmNlcyBmaXjDqWVzIG91IGVuIGNhc1xyXG5cdFx0XHRcdFx0XHRcdGTigJlpbmV4w6ljdXRpb24gZOKAmXVuZSBkZXMgY2xhdXNlcyBkdSBwcsOpc2VudFxyXG5cdFx0XHRcdFx0XHRcdGVuZ2FnZW1lbnQgZXQgY2lucSBqb3VycyBmcmFuY3MgYXByw6hzIHVuZSBzaW1wbGVcclxuXHRcdFx0XHRcdFx0XHRzb21tYXRpb24gcGFyIGxldHRyZSByZWNvbW1hbmTDqWUgcmVzdMOpZVxyXG5cdFx0XHRcdFx0XHRcdGluZnJ1Y3R1ZXVzZSwgbGUgcHLDqXNlbnQgY29udHJhdCBzZXJhIGltbcOpZGlhdGVtZW50XHJcblx0XHRcdFx0XHRcdFx0csOpc2lsacOpIGV0IGxlIGJhaWxsZXVyIHBvdXJyYSBzZSBwcsOpdmFsb2lyIGRlXHJcblx0XHRcdFx0XHRcdFx0bOKAmWFydGljbGUgMTU5MCBkdSBDb2RlIGNpdmlsIHBvdXIgY29uc2VydmVyIGxlc1xyXG5cdFx0XHRcdFx0XHRcdGFjb21wdGVzIHZlcnPDqXMgw6AgdGl0cmUgZGVzIHByZW1pZXJzXHJcblx0XHRcdFx0XHRcdFx0ZG9tbWFnZXMtaW50w6lyw6p0cy5cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlclRpdGxlQ29sb3J9PlxyXG5cdFx0XHRcdFx0XHRcdFx0QW5udWxhdGlvblxyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmVIZWlnaHRQfT5cclxuXHRcdFx0XHRcdFx0XHRMYSBzaWduYXR1cmUgZHUgY29udHJhdCBlbmdhZ2UgbGVzIGRldXggcGFydGllcyBkZVxyXG5cdFx0XHRcdFx0XHRcdGZhw6dvbiBkw6lmaW5pdGl2ZS4gU2kgbGUgbG9jYXRhaXJlIHJlbm9uY2Ugw6AgbGFcclxuXHRcdFx0XHRcdFx0XHRsb2NhdGlvbiA2MCBqb3VycyBhdmFudCBs4oCZYXJyaXbDqWUsIGzigJlhY29tcHRlIGVzdFxyXG5cdFx0XHRcdFx0XHRcdHJlbWJvdXJzw6kuIEVudHJlIDEgam91ciBldCA2MCBqb3VycyBzaSBub3VzXHJcblx0XHRcdFx0XHRcdFx0csOpdXNzaXNzb25zIMOgIHJlbG91ZXIsIGzigJlhY29tcHRlIGVzdCDDqWdhbGVtZW50XHJcblx0XHRcdFx0XHRcdFx0cmVtYm91cnPDqS4gU2lub24gbOKAmWFjb21wdGUgZXN0IHBlcmR1LlxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblxyXG5cdFx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyVGl0bGVDb2xvcn0+XHJcblx0XHRcdFx0XHRcdFx0XHRFbGVjdGlvbiBkZSBkb21pY2lsZVxyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmVIZWlnaHRQfT5cclxuXHRcdFx0XHRcdFx0XHRQb3VyIGzigJlleMOpY3V0aW9uIGRlcyBwcsOpc2VudGVzLCBsZSBwcm9wcmnDqXRhaXJlIGV0XHJcblx0XHRcdFx0XHRcdFx0bGUgbG9jYXRhaXJlIGZvbnQgw6lsZWN0aW9uIGRlIGRvbWljaWxlIGRhbnMgbGV1cnNcclxuXHRcdFx0XHRcdFx0XHRkb21pY2lsZXMgcmVzcGVjdGlmcy4gVG91dGVmb2lzIGVuIGNhcyBkZSBsaXRpZ2UsIGxlXHJcblx0XHRcdFx0XHRcdFx0dHJpYnVuYWwgZGVzIGxpZXV4IGxvdcOpcyBzZXJhIHNldWwgY29tcMOpdGVudC5cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cclxuXHRcdFx0XHRcdDxHcmlkXHJcblx0XHRcdFx0XHRcdGNvbnRhaW5lclxyXG5cdFx0XHRcdFx0XHRkaXJlY3Rpb249J3JvdydcclxuXHRcdFx0XHRcdFx0anVzdGlmeT0nc3BhY2UtYmV0d2VlbidcclxuXHRcdFx0XHRcdFx0c3BhY2luZz17NH1cclxuXHRcdFx0XHRcdFx0YWxpZ25JdGVtcz0nZmxleC1lbmQnXHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IG1hcmdpblRvcDogJzIwcHgnIH19PlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0RmFpdCBlbiBkZXV4IGV4ZW1wbGFpcmVzIMOgIEZvc3PDqSBsZSB7RGF0ZS5ub3coKX1cclxuXHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0PHA+U2lnbmF0dXJlIGR1IHByb3ByacOpdGFpcmUsPC9wPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHRK4oCZYWkgcHJpcyBjb25uYWlzc2FuY2UgZGVzIGNvbmRpdGlvbnMgZGVcclxuXHRcdFx0XHRcdFx0XHRcdGxvY2F0aW9uIGNpLWRlc3N1c1xyXG5cdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcyMHB4JyB9fT5EYXRlIDo8L3A+XHJcblx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHRTaWduYXR1cmUgZHUgbG9jYXRhaXJlIChwcsOpY8OpZMOpIGRlIGxhIG1lbnRpb24gbHVcclxuXHRcdFx0XHRcdFx0XHRcdGV0IGFwcHJvdXbDqSlcclxuXHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9UaGVtZVByb3ZpZGVyPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG5cdC8vIGNvbnNvbGUubG9nKCdjb250ZXh0JywgY29udGV4dC5xdWVyeS5pZCk7XHJcblx0Y29uc3QgcmVzMSA9IGF3YWl0IGFmZmljaGVSZXNlcnZhdGlvbihjb250ZXh0LnF1ZXJ5LmlkKTtcclxuXHRjb25zdCByZXNlcnZhdGlvbiA9IGF3YWl0IHJlczE7XHJcblx0Ly8gY29uc29sZS5sb2coJ3Jlc2VydmF0aW9uJywgcmVzZXJ2YXRpb24pO1xyXG5cdGNvbnN0IHJlczIgPSBhd2FpdCBsaXN0R2l0ZUJ5SWQocmVzZXJ2YXRpb24uZ2l0ZSk7XHJcblx0Y29uc3QgZ2l0ZSA9IGF3YWl0IHJlczI7XHJcblx0Y29uc3QgcmVzMyA9IGF3YWl0IGFmZmljaGVDbGllbnQocmVzZXJ2YXRpb24uY2xpZW50KTtcclxuXHRjb25zdCBjbGllbnQgPSBhd2FpdCByZXMzO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0cmVzZXJ2YXRpb24sXHJcblx0XHRcdGdpdGUsXHJcblx0XHRcdGNsaWVudCxcclxuXHRcdH0sXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZXJ2YXRpb25JZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==