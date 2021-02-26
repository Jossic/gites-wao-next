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
        width: '95%',
        margin: '25px'
      },
      paper: {
        height: 230,
        width: 500,
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
      },
      lineHeight: {
        lineHeight: '20px',
        fontSize: '16px'
      },
      lineHeightP: {
        fontSize: '16px'
      }
    };
  });
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: theme,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    spacing: 1,
    alignItems: "flex-start",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
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
      lineNumber: 74,
      columnNumber: 8
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 10,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
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
      lineNumber: 83,
      columnNumber: 8
    }
  }, "CONTRAT DE LOCATION EN MEUBL\xC9 SAISONNIER ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
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
      lineNumber: 99,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, "Entre la soci\xE9t\xE9 :"), "Si\xE9ge social ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 22
    }
  }), "SAS WAO ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }), "1 Route de Nouart ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 27
    }
  }), "08240 Foss\xE9, FRANCE ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 29
    }
  }), "Courrier :", ' ', __jsx("a", {
    href: "mailto:contact@gites-wao.fr",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, "contact@gites-wao.fr"), ' ', __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }), "Site internet :", ' ', __jsx("a", {
    href: "http://www.gites-wao.fr",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, "http://www.gites-wao.fr"), ' ', __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }), "Tel : +33 (0)3 24 30 08 95 ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 36
    }
  }), "IBAN : FR76 1020 6084 0398 3877 2925 093 ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 50
    }
  }), "BIC : AGRIFRPP802 ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 27
    }
  }), "TITULAIRE : SAS WAO ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 29
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 8
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }, "Et le locataire :"), " ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 40
    }
  }), "Qualit\xE9 : ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 19
    }
  }, client.civilite), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }), "Pr\xE9nom et Nom :", ' ', __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }, client.nom, " ", client.prenom), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }), "Adresse : ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 19
    }
  }, client.adresse), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }), "CP & Ville :", ' ', __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }, client.cp, " ", client.ville), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }), "Pays : ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 16
    }
  }, client.pays), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }), "T\xE9l\xE9phone : ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 21
    }
  }, client.tel), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }), "Courrier : ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 20
    }
  }, client.mail), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  }, "Pour la taxe de S\xE9jour nombre de personnes :"), "Taxables :", ' ', reservation.nbPers - reservation.nbEnf, " - Non taxables : ", reservation.nbEnf, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }, "CONDITIONS DE LOCATION")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }
  }, "D\xE9signation des lieux et descriptif du logement")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 6
    }
  }, __jsx("p", {
    className: classes.lineHeight,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }
  }, gite.ctDesignationTitre), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    className: classes.typoSouligne,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }
  }, "Principales caract\xE9ristiques :"), __jsx("p", {
    className: classes.lineHeight,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }
  }, react_render_html__WEBPACK_IMPORTED_MODULE_6___default()(gite.ctPrincipCarac)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    className: classes.typoSouligne,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }
  }, "Situation du logement dans la localit\xE9 :"), __jsx("p", {
    className: classes.lineHeight,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 7
    }
  }, react_render_html__WEBPACK_IMPORTED_MODULE_6___default()(gite.ctSituLog)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    className: classes.typoSouligne,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }
  }, "Description du logement :"), __jsx("p", {
    className: classes.lineHeight,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 7
    }
  }, react_render_html__WEBPACK_IMPORTED_MODULE_6___default()(gite.ctDescLog)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 8
    }
  }, "Dur\xE9e de la location :")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 7
    }
  }, "La pr\xE9sente location est consentie et accept\xE9e pour une dur\xE9e de : 2 nuit\xE9es Elle commence le vendredi 27 ao\xFBt 2021 \xE0 partir de 17h et se terminera le dimanche 29 ao\xFBt 2021 au plus tard \xE0 17h Elle ne pourra en aucun cas \xEAtre prorog\xE9e, sauf accord \xE9crit et pr\xE9alable du propri\xE9taire. Pour nous permettre de nous organiser, (le g\xEEte est \xE0 4 km de l\u2019habitation principale du propri\xE9taire), vous devez nous avertir quelques jours \xE0 l'avance de votre heure d'arriv\xE9e (par mail ou t\xE9l\xE9phone)."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 8
    }
  }, "Prix en Euros")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 8
    }
  }, "Assurances")), __jsx("p", {
    style: {
      fontSize: '16px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 7
    }
  }, "Le locataire doit v\xE9rifier si son contrat d\u2019habitation principale pr\xE9voit l\u2019extension vill\xE9giature en responsabilit\xE9 civile. Dans l\u2019hypoth\xE8se contraire, il peut intervenir aupr\xE8s de sa compagnie d\u2019assurance et r\xE9clamer l\u2019extension de la garantie pour la p\xE9riode de la location, ou bien souscrire un contrat particulier au titre des clauses vill\xE9giature. Derri\xE8re le g\xEEte se trouve un ruisseau et un \xE9tang, par mesure de s\xE9curit\xE9, Les enfants devront toujours \xEAtre accompagn\xE9s d\u2019un adulte et le propri\xE9taire ne peut en aucun cas \xEAtre tenu pour responsable des accidents qui pourraient y survenir. De m\xEAme pour l\u2019aire de jeu du g\xEEte, les enfants qui l\u2019utilisent doivent \xEAtre sous la surveillance des parents."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 8
    }
  }, "Etat des lieux et inventaire")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 7
    }
  }, "Le document pour l\u2019\xE9tat des lieux se trouve dans le cahier d\u2019explication du g\xEEte. Ce contrat fait office d'inventaire. Pour \xE9viter toute contestation le locataire voudra bien contr\xF4ler et signaler toute anomalie dans les 24 heures. Pass\xE9 ce d\xE9lai, les biens lou\xE9s seront consid\xE9r\xE9s comme exempts de dommages \xE0 l\u2019entr\xE9e du locataire. Celui-ci sera responsable de toute d\xE9t\xE9rioration ou perte pouvant survenir \xE0 ce mobilier ainsi qu\u2019aux divers mat\xE9riels de l\u2019espace piscine et d\xE9tente."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 8
    }
  }, "Jouissance des lieux")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 7
    }
  }, "Le locataire entretiendra les lieux lou\xE9s et les rendra en bon \xE9tat de propret\xE9. Il veillera \xE0 ce que la tranquillit\xE9 du voisinage ne soit pas troubl\xE9e. La sous location est interdite au preneur, m\xEAme \xE0 titre gratuit, sous peine de r\xE9siliation du contrat. L\u2019installation de tentes ou le stationnement de caravanes sur le terrain de la propri\xE9t\xE9 lou\xE9e est interdit, sauf accord pr\xE9alable du propri\xE9taire. L\u2019utilisateur s\u2019engage \xE0 ne pas utiliser le service WI-FI \xE0 des fins illicites, interdites ou ill\xE9gales (entre autres respect de la loi Hadopi). Le loueur, \xE0 la demande de tiers et/ou de toute autorit\xE9 comp\xE9tente, se r\xE9serve le droit de suspendre temporairement ou de mani\xE8re d\xE9finitive toute utilisation du service sans que sa responsabilit\xE9 ne puisse \xEAtre recherch\xE9e et sans que l\u2019utilisateur ne puisse revendiquer une quelconque indemnisation ou r\xE9paration. En aucun cas le loueur ne peut \xEAtre tenue de r\xE9parer les pr\xE9judices directs et/ou indirects subis du fait de l\u2019utilisation du service par l\u2019utilisateur, ce dernier reconnaissant que le loueur ne peut pas \xEAtre responsable des contenus auquel acc\xE8de l\u2019utilisateur et que l\u2019accessibilit\xE9 aux contenus et services n\u2019est pas garantie et peut \xEAtre suspendue sans pr\xE9avis."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 8
    }
  }, "Clause r\xE9solutoire")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 7
    }
  }, "A d\xE9faut de paiement aux \xE9ch\xE9ances fix\xE9es ou en cas d\u2019inex\xE9cution d\u2019une des clauses du pr\xE9sent engagement et cinq jours francs apr\xE8s une simple sommation par lettre recommand\xE9e rest\xE9e infructueuse, le pr\xE9sent contrat sera imm\xE9diatement r\xE9sili\xE9 et le bailleur pourra se pr\xE9valoir de l\u2019article 1590 du Code civil pour conserver les acomptes vers\xE9s \xE0 titre des premiers dommages-int\xE9r\xEAts."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 8
    }
  }, "Annulation")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 7
    }
  }, "La signature du contrat engage les deux parties de fa\xE7on d\xE9finitive. Si le locataire renonce \xE0 la location 60 jours avant l\u2019arriv\xE9e, l\u2019acompte est rembours\xE9. Entre 1 jour et 60 jours si nous r\xE9ussissons \xE0 relouer, l\u2019acompte est \xE9galement rembours\xE9. Sinon l\u2019acompte est perdu."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 8
    }
  }, "Election de domicile")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 7
    }
  }, "Pour l\u2019ex\xE9cution des pr\xE9sentes, le propri\xE9taire et le locataire font \xE9lection de domicile dans leurs domiciles respectifs. Toutefois en cas de litige, le tribunal des lieux lou\xE9s sera seul comp\xE9tent.")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24vL2NvbnRyYWN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwidHlwZSIsIlJlc2VydmF0aW9uSWQiLCJyZXNlcnZhdGlvbiIsImNsaWVudCIsImdpdGUiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImZsZXhHcm93Iiwid2lkdGgiLCJtYXJnaW4iLCJwYXBlciIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInRleHRBbGlnbiIsInBhcGVyVGl0bGUiLCJtYXJnaW5Ub3AiLCJwYXBlclRpdGxlQ29sb3IiLCJtYXJnaW5Cb3R0b20iLCJjb3VsZXVyMSIsInR5cG9Tb3VsaWduZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsInRleHREZWNvcmF0aW9uIiwibGluZUhlaWdodCIsImxpbmVIZWlnaHRQIiwiY2xhc3NlcyIsInZpZ25ldHRlTGluayIsIm5vbSIsImNpdmlsaXRlIiwicHJlbm9tIiwiYWRyZXNzZSIsImNwIiwidmlsbGUiLCJwYXlzIiwidGVsIiwibWFpbCIsIm5iUGVycyIsIm5iRW5mIiwiY3REZXNpZ25hdGlvblRpdHJlIiwicmVuZGVySFRNTCIsImN0UHJpbmNpcENhcmFjIiwiY3RTaXR1TG9nIiwiY3REZXNjTG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBR0MsK0VBQWMsQ0FBQztBQUM1QkMsU0FBTyxFQUFFO0FBQ1JDLFFBQUksRUFBRTtBQURFO0FBRG1CLENBQUQsQ0FBNUI7O0FBTUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFtQztBQUFBOztBQUFBLE1BQWhDQyxXQUFnQyxRQUFoQ0EsV0FBZ0M7QUFBQSxNQUFuQkMsTUFBbUIsUUFBbkJBLE1BQW1CO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3hELE1BQU1DLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDVCxLQUFEO0FBQUEsV0FBWTtBQUN4Q1UsVUFBSSxFQUFFO0FBQ0xDLGdCQUFRLEVBQUUsQ0FETDtBQUVMQyxhQUFLLEVBQUUsS0FGRjtBQUdMQyxjQUFNLEVBQUU7QUFISCxPQURrQztBQU14Q0MsV0FBSyxFQUFFO0FBQ05DLGNBQU0sRUFBRSxHQURGO0FBRU5ILGFBQUssRUFBRSxHQUZEO0FBR05JLHVCQUFlLEVBQUUsU0FIWDtBQUlOQyxpQkFBUyxFQUFFO0FBSkwsT0FOaUM7QUFZeENDLGdCQUFVLEVBQUU7QUFDWEgsY0FBTSxFQUFFLEVBREc7QUFFWEksaUJBQVMsRUFBRSxNQUZBO0FBR1hQLGFBQUssRUFBRSxNQUhJO0FBSVhJLHVCQUFlLEVBQUUsU0FKTjtBQUtYQyxpQkFBUyxFQUFFO0FBTEEsT0FaNEI7QUFtQnhDRyxxQkFBZSxFQUFFO0FBQ2hCTCxjQUFNLEVBQUUsRUFEUTtBQUVoQkksaUJBQVMsRUFBRSxNQUZLO0FBR2hCRSxvQkFBWSxFQUFFLE1BSEU7QUFJaEJULGFBQUssRUFBRSxNQUpTO0FBS2hCSSx1QkFBZSxZQUFLVCxJQUFJLENBQUNlLFFBQVYsQ0FMQztBQU1oQkwsaUJBQVMsRUFBRTtBQU5LLE9BbkJ1QjtBQTJCeENNLGtCQUFZLEVBQUU7QUFDYkMsa0JBQVUsRUFBRSxNQURDO0FBRWJDLGdCQUFRLEVBQUUsTUFGRztBQUdiSixvQkFBWSxFQUFFLE1BSEQ7QUFJYkssc0JBQWMsRUFBRTtBQUpILE9BM0IwQjtBQWlDeENDLGdCQUFVLEVBQUU7QUFDWEEsa0JBQVUsRUFBRSxNQUREO0FBRVhGLGdCQUFRLEVBQUU7QUFGQyxPQWpDNEI7QUFxQ3hDRyxpQkFBVyxFQUFFO0FBQ1pILGdCQUFRLEVBQUU7QUFERTtBQXJDMkIsS0FBWjtBQUFBLEdBQUQsQ0FBNUI7QUF5Q0EsTUFBTUksT0FBTyxHQUFHckIsU0FBUyxFQUF6QjtBQUVBLFNBQ0MsbUVBQ0MsTUFBQyxzRUFBRDtBQUFlLFNBQUssRUFBRVIsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBR0M7QUFBSyxhQUFTLEVBQUU2QixPQUFPLENBQUNuQixJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUsQ0FBekI7QUFBNEIsY0FBVSxFQUFDLFlBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsaURBQUQ7QUFDQyxhQUFTLEVBQUMsZUFEWDtBQUVDLE9BQUcsRUFBRUgsSUFBSSxDQUFDdUIsWUFGWDtBQUdDLE9BQUcsRUFBRXZCLElBQUksQ0FBQ3dCLEdBSFg7QUFJQyxTQUFLLEVBQUUsR0FKUjtBQUtDLFVBQU0sRUFBRSxHQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURELEVBVUMsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDREQUFEO0FBQ0MsV0FBTyxFQUFDLElBRFQ7QUFFQyxhQUFTLEVBQUMsSUFGWDtBQUdDLFNBQUssRUFBRTtBQUFFZCxlQUFTLEVBQUU7QUFBYixLQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBSTBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKMUMsRUFJaUQsR0FKakQsQ0FERCwyV0FWRCxDQURELEVBNEJDLE1BQUMsc0RBQUQ7QUFDQyxhQUFTLE1BRFY7QUFFQyxhQUFTLEVBQUMsS0FGWDtBQUdDLFdBQU8sRUFBQyxlQUhUO0FBSUMsV0FBTyxFQUFFLENBSlY7QUFLQyxjQUFVLEVBQUMsUUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUMsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyx1REFBRDtBQUFPLGFBQVMsRUFBRVksT0FBTyxDQUFDZixLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURELHNCQUVjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGZCxjQUdTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIVCx3QkFJbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpuQiw2QkFLcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxyQixnQkFNWSxHQU5aLEVBT0M7QUFBRyxRQUFJLEVBQUMsNkJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFQRCxFQVNNLEdBVE4sRUFVQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkQscUJBV2lCLEdBWGpCLEVBWUM7QUFBRyxRQUFJLEVBQUMseUJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFaRCxFQWNNLEdBZE4sRUFlQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkQsaUNBZ0I0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEI1QiwrQ0FpQjBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQjFDLHdCQWtCbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxCbkIsMEJBbUJxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkJyQixDQURELENBTkQsRUE2QkMsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyx1REFBRDtBQUFPLGFBQVMsRUFBRWUsT0FBTyxDQUFDZixLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERCxPQUNnQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRGhDLG1CQUVXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT1IsTUFBTSxDQUFDMEIsUUFBZCxDQUZYLEVBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhELHdCQUlpQixHQUpqQixFQUtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTFCLE1BQU0sQ0FBQ3lCLEdBRFQsT0FDZXpCLE1BQU0sQ0FBQzJCLE1BRHRCLENBTEQsRUFRQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkQsZ0JBU1c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPM0IsTUFBTSxDQUFDNEIsT0FBZCxDQVRYLEVBVUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZELGtCQVdjLEdBWGQsRUFZQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U1QixNQUFNLENBQUM2QixFQURULE9BQ2M3QixNQUFNLENBQUM4QixLQURyQixDQVpELEVBZUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZELGFBZ0JRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTzlCLE1BQU0sQ0FBQytCLElBQWQsQ0FoQlIsRUFpQkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCRCx3QkFrQmE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPL0IsTUFBTSxDQUFDZ0MsR0FBZCxDQWxCYixFQW1CQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkJELGlCQW9CWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9oQyxNQUFNLENBQUNpQyxJQUFkLENBcEJaLEVBcUJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQkQsRUFzQkMsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVEQXRCRCxnQkF5QlksR0F6QlosRUEwQkVsQyxXQUFXLENBQUNtQyxNQUFaLEdBQXFCbkMsV0FBVyxDQUFDb0MsS0ExQm5DLHdCQTJCYXBDLFdBQVcsQ0FBQ29DLEtBM0J6QixFQTRCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBNUJELENBREQsQ0E3QkQsQ0E1QkQsRUEwRkMsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyx1REFBRDtBQUFPLGFBQVMsRUFBRVosT0FBTyxDQUFDWCxVQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURELENBMUZELEVBK0ZDLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsdURBQUQ7QUFBTyxhQUFTLEVBQUVXLE9BQU8sQ0FBQ1QsZUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwREFERCxDQS9GRCxFQW9HQyxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFHLGFBQVMsRUFBRVMsT0FBTyxDQUFDRixVQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VwQixJQUFJLENBQUNtQyxrQkFEUCxDQURELEVBS0MsTUFBQyw0REFBRDtBQUFZLGFBQVMsRUFBRWIsT0FBTyxDQUFDTixZQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlDQUxELEVBUUM7QUFBRyxhQUFTLEVBQUVNLE9BQU8sQ0FBQ0YsVUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFZ0Isd0RBQVUsQ0FBQ3BDLElBQUksQ0FBQ3FDLGNBQU4sQ0FEWixDQVJELEVBV0MsTUFBQyw0REFBRDtBQUFZLGFBQVMsRUFBRWYsT0FBTyxDQUFDTixZQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1EQVhELEVBY0M7QUFBRyxhQUFTLEVBQUVNLE9BQU8sQ0FBQ0YsVUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFZ0Isd0RBQVUsQ0FBQ3BDLElBQUksQ0FBQ3NDLFNBQU4sQ0FEWixDQWRELEVBaUJDLE1BQUMsNERBQUQ7QUFBWSxhQUFTLEVBQUVoQixPQUFPLENBQUNOLFlBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBakJELEVBb0JDO0FBQUcsYUFBUyxFQUFFTSxPQUFPLENBQUNGLFVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRWdCLHdEQUFVLENBQUNwQyxJQUFJLENBQUN1QyxTQUFOLENBRFosQ0FwQkQsRUF1QkMsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyx1REFBRDtBQUFPLGFBQVMsRUFBRWpCLE9BQU8sQ0FBQ1QsZUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FERCxDQXZCRCxFQTZCQztBQUFHLGFBQVMsRUFBRVMsT0FBTyxDQUFDRCxXQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtpQkE3QkQsRUF5Q0MsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyx1REFBRDtBQUFPLGFBQVMsRUFBRUMsT0FBTyxDQUFDVCxlQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELENBekNELEVBK0NDO0FBQUcsYUFBUyxFQUFFUyxPQUFPLENBQUNELFdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvQ0QsRUFnREMsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyx1REFBRDtBQUFPLGFBQVMsRUFBRUMsT0FBTyxDQUFDVCxlQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELENBaERELEVBcURDO0FBQUcsU0FBSyxFQUFFO0FBQUVLLGNBQVEsRUFBRTtBQUFaLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpekJBckRELEVBdUVDLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsdURBQUQ7QUFBTyxhQUFTLEVBQUVJLE9BQU8sQ0FBQ1QsZUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FERCxDQXZFRCxFQTRFQztBQUFHLGFBQVMsRUFBRVMsT0FBTyxDQUFDRCxXQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9qQkE1RUQsRUF5RkMsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyx1REFBRDtBQUFPLGFBQVMsRUFBRUMsT0FBTyxDQUFDVCxlQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURELENBekZELEVBOEZDO0FBQUcsYUFBUyxFQUFFUyxPQUFPLENBQUNELFdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNDJDQTlGRCxFQTBIQyxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHVEQUFEO0FBQU8sYUFBUyxFQUFFQyxPQUFPLENBQUNULGVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREQsQ0ExSEQsRUErSEM7QUFBRyxhQUFTLEVBQUVTLE9BQU8sQ0FBQ0QsV0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Y0EvSEQsRUEySUMsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyx1REFBRDtBQUFPLGFBQVMsRUFBRUMsT0FBTyxDQUFDVCxlQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELENBM0lELEVBZ0pDO0FBQUcsYUFBUyxFQUFFUyxPQUFPLENBQUNELFdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMFVBaEpELEVBeUpDLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsdURBQUQ7QUFBTyxhQUFTLEVBQUVDLE9BQU8sQ0FBQ1QsZUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERCxDQXpKRCxFQThKQztBQUFHLGFBQVMsRUFBRVMsT0FBTyxDQUFDRCxXQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNPQTlKRCxDQXBHRCxDQUhELENBREQsQ0FERDtBQWtSQSxDQTlURDs7R0FBTXhCLGE7O0tBQUFBLGE7O0FBbVZTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9yZXNlcnZhdGlvbi9baWRdL2NvbnRyYWN0LjY1NWQxNjA0NTgzMWM1MzI5MmZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG5cdGFmZmljaGVDbGllbnQsXHJcblx0Z2V0Q2xpZW50QnlJZCxcclxufSBmcm9tICcuLi8uLi8uLi8uLi8uLi9hY3Rpb25zL2NsaWVudEFjdGlvbnMnO1xyXG5pbXBvcnQgeyBsaXN0R2l0ZUJ5SWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IHsgYWZmaWNoZVJlc2VydmF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vYWN0aW9ucy9yZXNlcnZhdGlvbkFjdGlvbnMnO1xyXG5pbXBvcnQgQWRtaW4gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9hdXRoL0FkbWluJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCB7IEdyaWQsIFBhcGVyLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgcmVuZGVySFRNTCBmcm9tICdyZWFjdC1yZW5kZXItaHRtbCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xyXG5cdHBhbGV0dGU6IHtcclxuXHRcdHR5cGU6ICdsaWdodCcsXHJcblx0fSxcclxufSk7XHJcblxyXG5jb25zdCBSZXNlcnZhdGlvbklkID0gKHsgcmVzZXJ2YXRpb24sIGNsaWVudCwgZ2l0ZSB9KSA9PiB7XHJcblx0Y29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0XHRyb290OiB7XHJcblx0XHRcdGZsZXhHcm93OiAxLFxyXG5cdFx0XHR3aWR0aDogJzk1JScsXHJcblx0XHRcdG1hcmdpbjogJzI1cHgnLFxyXG5cdFx0fSxcclxuXHRcdHBhcGVyOiB7XHJcblx0XHRcdGhlaWdodDogMjMwLFxyXG5cdFx0XHR3aWR0aDogNTAwLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjZGRkZGRkJyxcclxuXHRcdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRcdH0sXHJcblx0XHRwYXBlclRpdGxlOiB7XHJcblx0XHRcdGhlaWdodDogMzAsXHJcblx0XHRcdG1hcmdpblRvcDogJzEwcHgnLFxyXG5cdFx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjY2NjY2NjJyxcclxuXHRcdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRcdH0sXHJcblx0XHRwYXBlclRpdGxlQ29sb3I6IHtcclxuXHRcdFx0aGVpZ2h0OiAzMCxcclxuXHRcdFx0bWFyZ2luVG9wOiAnMTBweCcsXHJcblx0XHRcdG1hcmdpbkJvdHRvbTogJzEwcHgnLFxyXG5cdFx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGAke2dpdGUuY291bGV1cjF9YCxcclxuXHRcdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRcdH0sXHJcblx0XHR0eXBvU291bGlnbmU6IHtcclxuXHRcdFx0Zm9udFdlaWdodDogJ2JvbGQnLFxyXG5cdFx0XHRmb250U2l6ZTogJzE4cHgnLFxyXG5cdFx0XHRtYXJnaW5Cb3R0b206ICcxMHB4JyxcclxuXHRcdFx0dGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxyXG5cdFx0fSxcclxuXHRcdGxpbmVIZWlnaHQ6IHtcclxuXHRcdFx0bGluZUhlaWdodDogJzIwcHgnLFxyXG5cdFx0XHRmb250U2l6ZTogJzE2cHgnLFxyXG5cdFx0fSxcclxuXHRcdGxpbmVIZWlnaHRQOiB7XHJcblx0XHRcdGZvbnRTaXplOiAnMTZweCcsXHJcblx0XHR9LFxyXG5cdH0pKTtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG5cdFx0XHRcdDxDc3NCYXNlbGluZSAvPlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfSBhbGlnbkl0ZW1zPSdmbGV4LXN0YXJ0Jz5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17Mn0+XHJcblx0XHRcdFx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2QtYmxvY2sgdy0xMDAnXHJcblx0XHRcdFx0XHRcdFx0XHRzcmM9e2dpdGUudmlnbmV0dGVMaW5rfVxyXG5cdFx0XHRcdFx0XHRcdFx0YWx0PXtnaXRlLm5vbX1cclxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoPXs1MDB9XHJcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9ezM3NX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEwfT5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeVxyXG5cdFx0XHRcdFx0XHRcdFx0dmFyaWFudD0naDUnXHJcblx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnQ9J2g1J1xyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdENPTlRSQVQgREUgTE9DQVRJT04gRU4gTUVVQkzDiSBTQUlTT05OSUVSIDxiciAvPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdE1hZGFtZSwgTW9uc2lldXIuIFN1aXRlIMOgIHZvdHJlIGRlbWFuZGUsIGplIHZvdXNcclxuXHRcdFx0XHRcdFx0XHRhZHJlc3NlIGxlIHByw6lzZW50IGNvbnRyYXQgZGUgbG9jYXRpb24gZG9udCAxXHJcblx0XHRcdFx0XHRcdFx0ZXhlbXBsYWlyZSBlc3Qgw6AgbWUgcmV0b3VybmVyIChwYXIgY291cnJpZXIgb3UgbWFpbClcclxuXHRcdFx0XHRcdFx0XHRyZXbDqnR1IGRlIHZvdHJlIHNpZ25hdHVyZSBldCBhY2NvbXBhZ27DqSBkdSBtb250YW50XHJcblx0XHRcdFx0XHRcdFx0ZGUgbOKAmWFjb21wdGUgKHZpcmVtZW50IG91IGNvdXJyaWVyKS4gRW4gZXNww6lyYW50XHJcblx0XHRcdFx0XHRcdFx0YXZvaXIgbGUgcGxhaXNpciBkZSB2b3VzIGFjY3VlaWxsaXIgcHJvY2hhaW5lbWVudCxcclxuXHRcdFx0XHRcdFx0XHRyZWNldmV6IG1lcyBzaW5jw6hyZXMgc2FsdXRhdGlvbnMuXHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHJcblx0XHRcdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdFx0XHRjb250YWluZXJcclxuXHRcdFx0XHRcdFx0ZGlyZWN0aW9uPSdyb3cnXHJcblx0XHRcdFx0XHRcdGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nXHJcblx0XHRcdFx0XHRcdHNwYWNpbmc9ezR9XHJcblx0XHRcdFx0XHRcdGFsaWduSXRlbXM9J2NlbnRlcic+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeT5FbnRyZSBsYSBzb2Npw6l0w6kgOjwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHRcdFNpw6lnZSBzb2NpYWwgPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRTQVMgV0FPIDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0MSBSb3V0ZSBkZSBOb3VhcnQgPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQwODI0MCBGb3Nzw6ksIEZSQU5DRSA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdENvdXJyaWVyIDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj0nbWFpbHRvOmNvbnRhY3RAZ2l0ZXMtd2FvLmZyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGFjdEBnaXRlcy13YW8uZnJcclxuXHRcdFx0XHRcdFx0XHRcdDwvYT57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRTaXRlIGludGVybmV0IDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj0naHR0cDovL3d3dy5naXRlcy13YW8uZnInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRodHRwOi8vd3d3LmdpdGVzLXdhby5mclxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFRlbCA6ICszMyAoMCkzIDI0IDMwIDA4IDk1IDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0SUJBTiA6IEZSNzYgMTAyMCA2MDg0IDAzOTggMzg3NyAyOTI1IDA5MyA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdEJJQyA6IEFHUklGUlBQODAyIDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0VElUVUxBSVJFIDogU0FTIFdBTyA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5FdCBsZSBsb2NhdGFpcmUgOjwvc3Bhbj4gPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRRdWFsaXTDqSA6IDxzcGFuPntjbGllbnQuY2l2aWxpdGV9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRQcsOpbm9tIGV0IE5vbSA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Y2xpZW50Lm5vbX0ge2NsaWVudC5wcmVub219XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdEFkcmVzc2UgOiA8c3Bhbj57Y2xpZW50LmFkcmVzc2V9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRDUCAmIFZpbGxlIDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtjbGllbnQuY3B9IHtjbGllbnQudmlsbGV9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFBheXMgOiA8c3Bhbj57Y2xpZW50LnBheXN9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRUw6lsw6lwaG9uZSA6IDxzcGFuPntjbGllbnQudGVsfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0Q291cnJpZXIgOiA8c3Bhbj57Y2xpZW50Lm1haWx9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0UG91ciBsYSB0YXhlIGRlIFPDqWpvdXIgbm9tYnJlIGRlIHBlcnNvbm5lcyA6XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0XHRUYXhhYmxlcyA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi5uYlBlcnMgLSByZXNlcnZhdGlvbi5uYkVuZn0gLSBOb25cclxuXHRcdFx0XHRcdFx0XHRcdHRheGFibGVzIDoge3Jlc2VydmF0aW9uLm5iRW5mfVxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZX0+XHJcblx0XHRcdFx0XHRcdFx0Q09ORElUSU9OUyBERSBMT0NBVElPTlxyXG5cdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZUNvbG9yfT5cclxuXHRcdFx0XHRcdFx0XHREw6lzaWduYXRpb24gZGVzIGxpZXV4IGV0IGRlc2NyaXB0aWYgZHUgbG9nZW1lbnRcclxuXHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMubGluZUhlaWdodH0+XHJcblx0XHRcdFx0XHRcdFx0e2dpdGUuY3REZXNpZ25hdGlvblRpdHJlfVxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblxyXG5cdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudHlwb1NvdWxpZ25lfT5cclxuXHRcdFx0XHRcdFx0XHRQcmluY2lwYWxlcyBjYXJhY3TDqXJpc3RpcXVlcyA6XHJcblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmVIZWlnaHR9PlxyXG5cdFx0XHRcdFx0XHRcdHtyZW5kZXJIVE1MKGdpdGUuY3RQcmluY2lwQ2FyYWMpfVxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBvU291bGlnbmV9PlxyXG5cdFx0XHRcdFx0XHRcdFNpdHVhdGlvbiBkdSBsb2dlbWVudCBkYW5zIGxhIGxvY2FsaXTDqSA6XHJcblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmVIZWlnaHR9PlxyXG5cdFx0XHRcdFx0XHRcdHtyZW5kZXJIVE1MKGdpdGUuY3RTaXR1TG9nKX1cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudHlwb1NvdWxpZ25lfT5cclxuXHRcdFx0XHRcdFx0XHREZXNjcmlwdGlvbiBkdSBsb2dlbWVudCA6XHJcblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmVIZWlnaHR9PlxyXG5cdFx0XHRcdFx0XHRcdHtyZW5kZXJIVE1MKGdpdGUuY3REZXNjTG9nKX1cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyVGl0bGVDb2xvcn0+XHJcblx0XHRcdFx0XHRcdFx0XHREdXLDqWUgZGUgbGEgbG9jYXRpb24gOlxyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5lSGVpZ2h0UH0+XHJcblx0XHRcdFx0XHRcdFx0TGEgcHLDqXNlbnRlIGxvY2F0aW9uIGVzdCBjb25zZW50aWUgZXQgYWNjZXB0w6llIHBvdXJcclxuXHRcdFx0XHRcdFx0XHR1bmUgZHVyw6llIGRlIDogMiBudWl0w6llcyBFbGxlIGNvbW1lbmNlIGxlIHZlbmRyZWRpXHJcblx0XHRcdFx0XHRcdFx0MjcgYW/Du3QgMjAyMSDDoCBwYXJ0aXIgZGUgMTdoIGV0IHNlIHRlcm1pbmVyYSBsZVxyXG5cdFx0XHRcdFx0XHRcdGRpbWFuY2hlIDI5IGFvw7t0IDIwMjEgYXUgcGx1cyB0YXJkIMOgIDE3aCBFbGxlIG5lXHJcblx0XHRcdFx0XHRcdFx0cG91cnJhIGVuIGF1Y3VuIGNhcyDDqnRyZSBwcm9yb2fDqWUsIHNhdWYgYWNjb3JkIMOpY3JpdFxyXG5cdFx0XHRcdFx0XHRcdGV0IHByw6lhbGFibGUgZHUgcHJvcHJpw6l0YWlyZS4gUG91ciBub3VzIHBlcm1ldHRyZSBkZVxyXG5cdFx0XHRcdFx0XHRcdG5vdXMgb3JnYW5pc2VyLCAobGUgZ8OudGUgZXN0IMOgIDQga20gZGUgbOKAmWhhYml0YXRpb25cclxuXHRcdFx0XHRcdFx0XHRwcmluY2lwYWxlIGR1IHByb3ByacOpdGFpcmUpLCB2b3VzIGRldmV6IG5vdXMgYXZlcnRpclxyXG5cdFx0XHRcdFx0XHRcdHF1ZWxxdWVzIGpvdXJzIMOgIGwnYXZhbmNlIGRlIHZvdHJlIGhldXJlIGQnYXJyaXbDqWVcclxuXHRcdFx0XHRcdFx0XHQocGFyIG1haWwgb3UgdMOpbMOpcGhvbmUpLlxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZUNvbG9yfT5cclxuXHRcdFx0XHRcdFx0XHRcdFByaXggZW4gRXVyb3NcclxuXHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMubGluZUhlaWdodFB9PjwvcD5cclxuXHRcdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlclRpdGxlQ29sb3J9PlxyXG5cdFx0XHRcdFx0XHRcdFx0QXNzdXJhbmNlc1xyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PHAgc3R5bGU9e3sgZm9udFNpemU6ICcxNnB4JyB9fT5cclxuXHRcdFx0XHRcdFx0XHRMZSBsb2NhdGFpcmUgZG9pdCB2w6lyaWZpZXIgc2kgc29uIGNvbnRyYXRcclxuXHRcdFx0XHRcdFx0XHRk4oCZaGFiaXRhdGlvbiBwcmluY2lwYWxlIHByw6l2b2l0IGzigJlleHRlbnNpb25cclxuXHRcdFx0XHRcdFx0XHR2aWxsw6lnaWF0dXJlIGVuIHJlc3BvbnNhYmlsaXTDqSBjaXZpbGUuIERhbnNcclxuXHRcdFx0XHRcdFx0XHRs4oCZaHlwb3Row6hzZSBjb250cmFpcmUsIGlsIHBldXQgaW50ZXJ2ZW5pciBhdXByw6hzIGRlXHJcblx0XHRcdFx0XHRcdFx0c2EgY29tcGFnbmllIGTigJlhc3N1cmFuY2UgZXQgcsOpY2xhbWVyIGzigJlleHRlbnNpb24gZGVcclxuXHRcdFx0XHRcdFx0XHRsYSBnYXJhbnRpZSBwb3VyIGxhIHDDqXJpb2RlIGRlIGxhIGxvY2F0aW9uLCBvdSBiaWVuXHJcblx0XHRcdFx0XHRcdFx0c291c2NyaXJlIHVuIGNvbnRyYXQgcGFydGljdWxpZXIgYXUgdGl0cmUgZGVzXHJcblx0XHRcdFx0XHRcdFx0Y2xhdXNlcyB2aWxsw6lnaWF0dXJlLiBEZXJyacOocmUgbGUgZ8OudGUgc2UgdHJvdXZlIHVuXHJcblx0XHRcdFx0XHRcdFx0cnVpc3NlYXUgZXQgdW4gw6l0YW5nLCBwYXIgbWVzdXJlIGRlIHPDqWN1cml0w6ksIExlc1xyXG5cdFx0XHRcdFx0XHRcdGVuZmFudHMgZGV2cm9udCB0b3Vqb3VycyDDqnRyZSBhY2NvbXBhZ27DqXMgZOKAmXVuXHJcblx0XHRcdFx0XHRcdFx0YWR1bHRlIGV0IGxlIHByb3ByacOpdGFpcmUgbmUgcGV1dCBlbiBhdWN1biBjYXMgw6p0cmVcclxuXHRcdFx0XHRcdFx0XHR0ZW51IHBvdXIgcmVzcG9uc2FibGUgZGVzIGFjY2lkZW50cyBxdWkgcG91cnJhaWVudCB5XHJcblx0XHRcdFx0XHRcdFx0c3VydmVuaXIuIERlIG3Dqm1lIHBvdXIgbOKAmWFpcmUgZGUgamV1IGR1IGfDrnRlLCBsZXNcclxuXHRcdFx0XHRcdFx0XHRlbmZhbnRzIHF1aSBs4oCZdXRpbGlzZW50IGRvaXZlbnQgw6p0cmUgc291cyBsYVxyXG5cdFx0XHRcdFx0XHRcdHN1cnZlaWxsYW5jZSBkZXMgcGFyZW50cy5cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlclRpdGxlQ29sb3J9PlxyXG5cdFx0XHRcdFx0XHRcdFx0RXRhdCBkZXMgbGlldXggZXQgaW52ZW50YWlyZVxyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmVIZWlnaHRQfT5cclxuXHRcdFx0XHRcdFx0XHRMZSBkb2N1bWVudCBwb3VyIGzigJnDqXRhdCBkZXMgbGlldXggc2UgdHJvdXZlIGRhbnMgbGVcclxuXHRcdFx0XHRcdFx0XHRjYWhpZXIgZOKAmWV4cGxpY2F0aW9uIGR1IGfDrnRlLiBDZSBjb250cmF0IGZhaXQgb2ZmaWNlXHJcblx0XHRcdFx0XHRcdFx0ZCdpbnZlbnRhaXJlLiBQb3VyIMOpdml0ZXIgdG91dGUgY29udGVzdGF0aW9uIGxlXHJcblx0XHRcdFx0XHRcdFx0bG9jYXRhaXJlIHZvdWRyYSBiaWVuIGNvbnRyw7RsZXIgZXQgc2lnbmFsZXIgdG91dGVcclxuXHRcdFx0XHRcdFx0XHRhbm9tYWxpZSBkYW5zIGxlcyAyNCBoZXVyZXMuIFBhc3PDqSBjZSBkw6lsYWksIGxlc1xyXG5cdFx0XHRcdFx0XHRcdGJpZW5zIGxvdcOpcyBzZXJvbnQgY29uc2lkw6lyw6lzIGNvbW1lIGV4ZW1wdHMgZGVcclxuXHRcdFx0XHRcdFx0XHRkb21tYWdlcyDDoCBs4oCZZW50csOpZSBkdSBsb2NhdGFpcmUuIENlbHVpLWNpIHNlcmFcclxuXHRcdFx0XHRcdFx0XHRyZXNwb25zYWJsZSBkZSB0b3V0ZSBkw6l0w6lyaW9yYXRpb24gb3UgcGVydGUgcG91dmFudFxyXG5cdFx0XHRcdFx0XHRcdHN1cnZlbmlyIMOgIGNlIG1vYmlsaWVyIGFpbnNpIHF14oCZYXV4IGRpdmVycyBtYXTDqXJpZWxzXHJcblx0XHRcdFx0XHRcdFx0ZGUgbOKAmWVzcGFjZSBwaXNjaW5lIGV0IGTDqXRlbnRlLlxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblxyXG5cdFx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyVGl0bGVDb2xvcn0+XHJcblx0XHRcdFx0XHRcdFx0XHRKb3Vpc3NhbmNlIGRlcyBsaWV1eFxyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmVIZWlnaHRQfT5cclxuXHRcdFx0XHRcdFx0XHRMZSBsb2NhdGFpcmUgZW50cmV0aWVuZHJhIGxlcyBsaWV1eCBsb3XDqXMgZXQgbGVzXHJcblx0XHRcdFx0XHRcdFx0cmVuZHJhIGVuIGJvbiDDqXRhdCBkZSBwcm9wcmV0w6kuIElsIHZlaWxsZXJhIMOgIGNlIHF1ZVxyXG5cdFx0XHRcdFx0XHRcdGxhIHRyYW5xdWlsbGl0w6kgZHUgdm9pc2luYWdlIG5lIHNvaXQgcGFzIHRyb3VibMOpZS5cclxuXHRcdFx0XHRcdFx0XHRMYSBzb3VzIGxvY2F0aW9uIGVzdCBpbnRlcmRpdGUgYXUgcHJlbmV1ciwgbcOqbWUgw6BcclxuXHRcdFx0XHRcdFx0XHR0aXRyZSBncmF0dWl0LCBzb3VzIHBlaW5lIGRlIHLDqXNpbGlhdGlvbiBkdSBjb250cmF0LlxyXG5cdFx0XHRcdFx0XHRcdEzigJlpbnN0YWxsYXRpb24gZGUgdGVudGVzIG91IGxlIHN0YXRpb25uZW1lbnQgZGVcclxuXHRcdFx0XHRcdFx0XHRjYXJhdmFuZXMgc3VyIGxlIHRlcnJhaW4gZGUgbGEgcHJvcHJpw6l0w6kgbG91w6llIGVzdFxyXG5cdFx0XHRcdFx0XHRcdGludGVyZGl0LCBzYXVmIGFjY29yZCBwcsOpYWxhYmxlIGR1IHByb3ByacOpdGFpcmUuXHJcblx0XHRcdFx0XHRcdFx0TOKAmXV0aWxpc2F0ZXVyIHPigJllbmdhZ2Ugw6AgbmUgcGFzIHV0aWxpc2VyIGxlIHNlcnZpY2VcclxuXHRcdFx0XHRcdFx0XHRXSS1GSSDDoCBkZXMgZmlucyBpbGxpY2l0ZXMsIGludGVyZGl0ZXMgb3UgaWxsw6lnYWxlc1xyXG5cdFx0XHRcdFx0XHRcdChlbnRyZSBhdXRyZXMgcmVzcGVjdCBkZSBsYSBsb2kgSGFkb3BpKS4gTGUgbG91ZXVyLFxyXG5cdFx0XHRcdFx0XHRcdMOgIGxhIGRlbWFuZGUgZGUgdGllcnMgZXQvb3UgZGUgdG91dGUgYXV0b3JpdMOpXHJcblx0XHRcdFx0XHRcdFx0Y29tcMOpdGVudGUsIHNlIHLDqXNlcnZlIGxlIGRyb2l0IGRlIHN1c3BlbmRyZVxyXG5cdFx0XHRcdFx0XHRcdHRlbXBvcmFpcmVtZW50IG91IGRlIG1hbmnDqHJlIGTDqWZpbml0aXZlIHRvdXRlXHJcblx0XHRcdFx0XHRcdFx0dXRpbGlzYXRpb24gZHUgc2VydmljZSBzYW5zIHF1ZSBzYSByZXNwb25zYWJpbGl0w6kgbmVcclxuXHRcdFx0XHRcdFx0XHRwdWlzc2Ugw6p0cmUgcmVjaGVyY2jDqWUgZXQgc2FucyBxdWUgbOKAmXV0aWxpc2F0ZXVyIG5lXHJcblx0XHRcdFx0XHRcdFx0cHVpc3NlIHJldmVuZGlxdWVyIHVuZSBxdWVsY29ucXVlIGluZGVtbmlzYXRpb24gb3VcclxuXHRcdFx0XHRcdFx0XHRyw6lwYXJhdGlvbi4gRW4gYXVjdW4gY2FzIGxlIGxvdWV1ciBuZSBwZXV0IMOqdHJlXHJcblx0XHRcdFx0XHRcdFx0dGVudWUgZGUgcsOpcGFyZXIgbGVzIHByw6lqdWRpY2VzIGRpcmVjdHMgZXQvb3VcclxuXHRcdFx0XHRcdFx0XHRpbmRpcmVjdHMgc3ViaXMgZHUgZmFpdCBkZSBs4oCZdXRpbGlzYXRpb24gZHUgc2VydmljZVxyXG5cdFx0XHRcdFx0XHRcdHBhciBs4oCZdXRpbGlzYXRldXIsIGNlIGRlcm5pZXIgcmVjb25uYWlzc2FudCBxdWUgbGVcclxuXHRcdFx0XHRcdFx0XHRsb3VldXIgbmUgcGV1dCBwYXMgw6p0cmUgcmVzcG9uc2FibGUgZGVzIGNvbnRlbnVzXHJcblx0XHRcdFx0XHRcdFx0YXVxdWVsIGFjY8OoZGUgbOKAmXV0aWxpc2F0ZXVyIGV0IHF1ZSBs4oCZYWNjZXNzaWJpbGl0w6lcclxuXHRcdFx0XHRcdFx0XHRhdXggY29udGVudXMgZXQgc2VydmljZXMgbuKAmWVzdCBwYXMgZ2FyYW50aWUgZXQgcGV1dFxyXG5cdFx0XHRcdFx0XHRcdMOqdHJlIHN1c3BlbmR1ZSBzYW5zIHByw6lhdmlzLlxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblxyXG5cdFx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyVGl0bGVDb2xvcn0+XHJcblx0XHRcdFx0XHRcdFx0XHRDbGF1c2UgcsOpc29sdXRvaXJlXHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMubGluZUhlaWdodFB9PlxyXG5cdFx0XHRcdFx0XHRcdEEgZMOpZmF1dCBkZSBwYWllbWVudCBhdXggw6ljaMOpYW5jZXMgZml4w6llcyBvdSBlbiBjYXNcclxuXHRcdFx0XHRcdFx0XHRk4oCZaW5leMOpY3V0aW9uIGTigJl1bmUgZGVzIGNsYXVzZXMgZHUgcHLDqXNlbnRcclxuXHRcdFx0XHRcdFx0XHRlbmdhZ2VtZW50IGV0IGNpbnEgam91cnMgZnJhbmNzIGFwcsOocyB1bmUgc2ltcGxlXHJcblx0XHRcdFx0XHRcdFx0c29tbWF0aW9uIHBhciBsZXR0cmUgcmVjb21tYW5kw6llIHJlc3TDqWVcclxuXHRcdFx0XHRcdFx0XHRpbmZydWN0dWV1c2UsIGxlIHByw6lzZW50IGNvbnRyYXQgc2VyYSBpbW3DqWRpYXRlbWVudFxyXG5cdFx0XHRcdFx0XHRcdHLDqXNpbGnDqSBldCBsZSBiYWlsbGV1ciBwb3VycmEgc2UgcHLDqXZhbG9pciBkZVxyXG5cdFx0XHRcdFx0XHRcdGzigJlhcnRpY2xlIDE1OTAgZHUgQ29kZSBjaXZpbCBwb3VyIGNvbnNlcnZlciBsZXNcclxuXHRcdFx0XHRcdFx0XHRhY29tcHRlcyB2ZXJzw6lzIMOgIHRpdHJlIGRlcyBwcmVtaWVyc1xyXG5cdFx0XHRcdFx0XHRcdGRvbW1hZ2VzLWludMOpcsOqdHMuXHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHJcblx0XHRcdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZUNvbG9yfT5cclxuXHRcdFx0XHRcdFx0XHRcdEFubnVsYXRpb25cclxuXHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5lSGVpZ2h0UH0+XHJcblx0XHRcdFx0XHRcdFx0TGEgc2lnbmF0dXJlIGR1IGNvbnRyYXQgZW5nYWdlIGxlcyBkZXV4IHBhcnRpZXMgZGVcclxuXHRcdFx0XHRcdFx0XHRmYcOnb24gZMOpZmluaXRpdmUuIFNpIGxlIGxvY2F0YWlyZSByZW5vbmNlIMOgIGxhXHJcblx0XHRcdFx0XHRcdFx0bG9jYXRpb24gNjAgam91cnMgYXZhbnQgbOKAmWFycml2w6llLCBs4oCZYWNvbXB0ZSBlc3RcclxuXHRcdFx0XHRcdFx0XHRyZW1ib3Vyc8OpLiBFbnRyZSAxIGpvdXIgZXQgNjAgam91cnMgc2kgbm91c1xyXG5cdFx0XHRcdFx0XHRcdHLDqXVzc2lzc29ucyDDoCByZWxvdWVyLCBs4oCZYWNvbXB0ZSBlc3Qgw6lnYWxlbWVudFxyXG5cdFx0XHRcdFx0XHRcdHJlbWJvdXJzw6kuIFNpbm9uIGzigJlhY29tcHRlIGVzdCBwZXJkdS5cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlclRpdGxlQ29sb3J9PlxyXG5cdFx0XHRcdFx0XHRcdFx0RWxlY3Rpb24gZGUgZG9taWNpbGVcclxuXHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5lSGVpZ2h0UH0+XHJcblx0XHRcdFx0XHRcdFx0UG91ciBs4oCZZXjDqWN1dGlvbiBkZXMgcHLDqXNlbnRlcywgbGUgcHJvcHJpw6l0YWlyZSBldFxyXG5cdFx0XHRcdFx0XHRcdGxlIGxvY2F0YWlyZSBmb250IMOpbGVjdGlvbiBkZSBkb21pY2lsZSBkYW5zIGxldXJzXHJcblx0XHRcdFx0XHRcdFx0ZG9taWNpbGVzIHJlc3BlY3RpZnMuIFRvdXRlZm9pcyBlbiBjYXMgZGUgbGl0aWdlLCBsZVxyXG5cdFx0XHRcdFx0XHRcdHRyaWJ1bmFsIGRlcyBsaWV1eCBsb3XDqXMgc2VyYSBzZXVsIGNvbXDDqXRlbnQuXHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9UaGVtZVByb3ZpZGVyPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG5cdC8vIGNvbnNvbGUubG9nKCdjb250ZXh0JywgY29udGV4dC5xdWVyeS5pZCk7XHJcblx0Y29uc3QgcmVzMSA9IGF3YWl0IGFmZmljaGVSZXNlcnZhdGlvbihjb250ZXh0LnF1ZXJ5LmlkKTtcclxuXHRjb25zdCByZXNlcnZhdGlvbiA9IGF3YWl0IHJlczE7XHJcblx0Ly8gY29uc29sZS5sb2coJ3Jlc2VydmF0aW9uJywgcmVzZXJ2YXRpb24pO1xyXG5cdGNvbnN0IHJlczIgPSBhd2FpdCBsaXN0R2l0ZUJ5SWQocmVzZXJ2YXRpb24uZ2l0ZSk7XHJcblx0Y29uc3QgZ2l0ZSA9IGF3YWl0IHJlczI7XHJcblx0Y29uc3QgcmVzMyA9IGF3YWl0IGFmZmljaGVDbGllbnQocmVzZXJ2YXRpb24uY2xpZW50KTtcclxuXHRjb25zdCBjbGllbnQgPSBhd2FpdCByZXMzO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0cmVzZXJ2YXRpb24sXHJcblx0XHRcdGdpdGUsXHJcblx0XHRcdGNsaWVudCxcclxuXHRcdH0sXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZXJ2YXRpb25JZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==