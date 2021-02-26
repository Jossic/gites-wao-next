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
      marginBottom: '50px'
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
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 8
    }
  }, "Assurances")), __jsx("p", {
    style: {
      fontSize: '16px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 7
    }
  }, "Le locataire doit v\xE9rifier si son contrat d\u2019habitation principale pr\xE9voit l\u2019extension vill\xE9giature en responsabilit\xE9 civile. Dans l\u2019hypoth\xE8se contraire, il peut intervenir aupr\xE8s de sa compagnie d\u2019assurance et r\xE9clamer l\u2019extension de la garantie pour la p\xE9riode de la location, ou bien souscrire un contrat particulier au titre des clauses vill\xE9giature. Derri\xE8re le g\xEEte se trouve un ruisseau et un \xE9tang, par mesure de s\xE9curit\xE9, Les enfants devront toujours \xEAtre accompagn\xE9s d\u2019un adulte et le propri\xE9taire ne peut en aucun cas \xEAtre tenu pour responsable des accidents qui pourraient y survenir. De m\xEAme pour l\u2019aire de jeu du g\xEEte, les enfants qui l\u2019utilisent doivent \xEAtre sous la surveillance des parents."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 8
    }
  }, "Etat des lieux et inventaire")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 7
    }
  }, "Le document pour l\u2019\xE9tat des lieux se trouve dans le cahier d\u2019explication du g\xEEte. Ce contrat fait office d'inventaire. Pour \xE9viter toute contestation le locataire voudra bien contr\xF4ler et signaler toute anomalie dans les 24 heures. Pass\xE9 ce d\xE9lai, les biens lou\xE9s seront consid\xE9r\xE9s comme exempts de dommages \xE0 l\u2019entr\xE9e du locataire. Celui-ci sera responsable de toute d\xE9t\xE9rioration ou perte pouvant survenir \xE0 ce mobilier ainsi qu\u2019aux divers mat\xE9riels de l\u2019espace piscine et d\xE9tente."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 8
    }
  }, "Jouissance des lieux")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 7
    }
  }, "Le locataire entretiendra les lieux lou\xE9s et les rendra en bon \xE9tat de propret\xE9. Il veillera \xE0 ce que la tranquillit\xE9 du voisinage ne soit pas troubl\xE9e. La sous location est interdite au preneur, m\xEAme \xE0 titre gratuit, sous peine de r\xE9siliation du contrat. L\u2019installation de tentes ou le stationnement de caravanes sur le terrain de la propri\xE9t\xE9 lou\xE9e est interdit, sauf accord pr\xE9alable du propri\xE9taire. L\u2019utilisateur s\u2019engage \xE0 ne pas utiliser le service WI-FI \xE0 des fins illicites, interdites ou ill\xE9gales (entre autres respect de la loi Hadopi). Le loueur, \xE0 la demande de tiers et/ou de toute autorit\xE9 comp\xE9tente, se r\xE9serve le droit de suspendre temporairement ou de mani\xE8re d\xE9finitive toute utilisation du service sans que sa responsabilit\xE9 ne puisse \xEAtre recherch\xE9e et sans que l\u2019utilisateur ne puisse revendiquer une quelconque indemnisation ou r\xE9paration. En aucun cas le loueur ne peut \xEAtre tenue de r\xE9parer les pr\xE9judices directs et/ou indirects subis du fait de l\u2019utilisation du service par l\u2019utilisateur, ce dernier reconnaissant que le loueur ne peut pas \xEAtre responsable des contenus auquel acc\xE8de l\u2019utilisateur et que l\u2019accessibilit\xE9 aux contenus et services n\u2019est pas garantie et peut \xEAtre suspendue sans pr\xE9avis."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 8
    }
  }, "Clause r\xE9solutoire")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 7
    }
  }, "A d\xE9faut de paiement aux \xE9ch\xE9ances fix\xE9es ou en cas d\u2019inex\xE9cution d\u2019une des clauses du pr\xE9sent engagement et cinq jours francs apr\xE8s une simple sommation par lettre recommand\xE9e rest\xE9e infructueuse, le pr\xE9sent contrat sera imm\xE9diatement r\xE9sili\xE9 et le bailleur pourra se pr\xE9valoir de l\u2019article 1590 du Code civil pour conserver les acomptes vers\xE9s \xE0 titre des premiers dommages-int\xE9r\xEAts."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 8
    }
  }, "Annulation")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 7
    }
  }, "La signature du contrat engage les deux parties de fa\xE7on d\xE9finitive. Si le locataire renonce \xE0 la location 60 jours avant l\u2019arriv\xE9e, l\u2019acompte est rembours\xE9. Entre 1 jour et 60 jours si nous r\xE9ussissons \xE0 relouer, l\u2019acompte est \xE9galement rembours\xE9. Sinon l\u2019acompte est perdu."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    className: classes.paperTitleColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 8
    }
  }, "Election de domicile")), __jsx("p", {
    className: classes.lineHeightP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
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
      lineNumber: 334,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 8
    }
  }, "Fait en deux exemplaires \xE0 Foss\xE9 le ", Date.now()), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 8
    }
  }, "Signature du propri\xE9taire,")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 8
    }
  }, "J\u2019ai pris connaissance des conditions de location ci-dessus"), __jsx("p", {
    style: {
      marginBottom: '20px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 8
    }
  }, "Date :"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24vL2NvbnRyYWN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwidHlwZSIsIlJlc2VydmF0aW9uSWQiLCJyZXNlcnZhdGlvbiIsImNsaWVudCIsImdpdGUiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImZsZXhHcm93Iiwid2lkdGgiLCJwYXBlciIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInRleHRBbGlnbiIsInBhcGVyVGl0bGUiLCJtYXJnaW5Ub3AiLCJwYXBlclRpdGxlQ29sb3IiLCJtYXJnaW5Cb3R0b20iLCJjb3VsZXVyMSIsInR5cG9Tb3VsaWduZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsInRleHREZWNvcmF0aW9uIiwiY2xhc3NlcyIsInZpZ25ldHRlTGluayIsIm5vbSIsImNpdmlsaXRlIiwicHJlbm9tIiwiYWRyZXNzZSIsImNwIiwidmlsbGUiLCJwYXlzIiwidGVsIiwibWFpbCIsIm5iUGVycyIsIm5iRW5mIiwibGluZUhlaWdodCIsImN0RGVzaWduYXRpb25UaXRyZSIsInJlbmRlckhUTUwiLCJjdFByaW5jaXBDYXJhYyIsImN0U2l0dUxvZyIsImN0RGVzY0xvZyIsImxpbmVIZWlnaHRQIiwiRGF0ZSIsIm5vdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLCtFQUFjLENBQUM7QUFDNUJDLFNBQU8sRUFBRTtBQUNSQyxRQUFJLEVBQUU7QUFERTtBQURtQixDQUFELENBQTVCOztBQU1BLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBbUM7QUFBQTs7QUFBQSxNQUFoQ0MsV0FBZ0MsUUFBaENBLFdBQWdDO0FBQUEsTUFBbkJDLE1B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S0FPQyxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1EQUNzQzRCLElBQUksQ0FBQ0MsR0FBTCxFQUR0QyxDQURELEVBSUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FKRCxDQVBELEVBYUMsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3RUFERCxFQUtDO0FBQUcsU0FBSyxFQUFFO0FBQUUzQixrQkFBWSxFQUFFO0FBQWhCLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxELEVBTUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpRkFORCxDQWJELENBL1FELENBSEQsQ0FERCxDQUREO0FBaVRBLENBclZEOztHQUFNaEIsYTs7S0FBQUEsYTs7QUEwV1NBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL3Jlc2VydmF0aW9uL1tpZF0vY29udHJhY3QuZTAxZTk1Mzg3ZjIzODg0ZDE4YjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0YWZmaWNoZUNsaWVudCxcclxuXHRnZXRDbGllbnRCeUlkLFxyXG59IGZyb20gJy4uLy4uLy4uLy4uLy4uL2FjdGlvbnMvY2xpZW50QWN0aW9ucyc7XHJcbmltcG9ydCB7IGxpc3RHaXRlQnlJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5pbXBvcnQgeyBhZmZpY2hlUmVzZXJ2YXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9hY3Rpb25zL3Jlc2VydmF0aW9uQWN0aW9ucyc7XHJcbmltcG9ydCBBZG1pbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2F1dGgvQWRtaW4nO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IHsgR3JpZCwgUGFwZXIsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCByZW5kZXJIVE1MIGZyb20gJ3JlYWN0LXJlbmRlci1odG1sJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcblx0cGFsZXR0ZToge1xyXG5cdFx0dHlwZTogJ2xpZ2h0JyxcclxuXHR9LFxyXG59KTtcclxuXHJcbmNvbnN0IFJlc2VydmF0aW9uSWQgPSAoeyByZXNlcnZhdGlvbiwgY2xpZW50LCBnaXRlIH0pID0+IHtcclxuXHRjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRcdHJvb3Q6IHtcclxuXHRcdFx0ZmxleEdyb3c6IDEsXHJcblx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHR9LFxyXG5cdFx0cGFwZXI6IHtcclxuXHRcdFx0aGVpZ2h0OiAyMzAsXHJcblx0XHRcdHdpZHRoOiA0ODAsXHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogJyNkZGRkZGQnLFxyXG5cdFx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG5cdFx0fSxcclxuXHRcdHBhcGVyVGl0bGU6IHtcclxuXHRcdFx0aGVpZ2h0OiAzMCxcclxuXHRcdFx0bWFyZ2luVG9wOiAnMTBweCcsXHJcblx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogJyNjY2NjY2MnLFxyXG5cdFx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG5cdFx0fSxcclxuXHRcdHBhcGVyVGl0bGVDb2xvcjoge1xyXG5cdFx0XHRoZWlnaHQ6IDMwLFxyXG5cdFx0XHRtYXJnaW5Ub3A6ICcxMHB4JyxcclxuXHRcdFx0bWFyZ2luQm90dG9tOiAnMTBweCcsXHJcblx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogYCR7Z2l0ZS5jb3VsZXVyMX1gLFxyXG5cdFx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG5cdFx0fSxcclxuXHRcdHR5cG9Tb3VsaWduZToge1xyXG5cdFx0XHRmb250V2VpZ2h0OiAnYm9sZCcsXHJcblx0XHRcdGZvbnRTaXplOiAnMThweCcsXHJcblx0XHRcdG1hcmdpbkJvdHRvbTogJzEwcHgnLFxyXG5cdFx0XHR0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXHJcblx0XHR9LFxyXG5cdH0pKTtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG5cdFx0XHRcdDxDc3NCYXNlbGluZSAvPlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfSBhbGlnbkl0ZW1zPSdmbGV4LXN0YXJ0Jz5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17Mn0+XHJcblx0XHRcdFx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2QtYmxvY2sgdy0xMDAnXHJcblx0XHRcdFx0XHRcdFx0XHRzcmM9e2dpdGUudmlnbmV0dGVMaW5rfVxyXG5cdFx0XHRcdFx0XHRcdFx0YWx0PXtnaXRlLm5vbX1cclxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoPXs1MDB9XHJcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9ezM3NX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEwfT5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeVxyXG5cdFx0XHRcdFx0XHRcdFx0dmFyaWFudD0naDUnXHJcblx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnQ9J2g1J1xyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdENPTlRSQVQgREUgTE9DQVRJT04gRU4gTUVVQkzDiSBTQUlTT05OSUVSIDxiciAvPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdE1hZGFtZSwgTW9uc2lldXIuIFN1aXRlIMOgIHZvdHJlIGRlbWFuZGUsIGplIHZvdXNcclxuXHRcdFx0XHRcdFx0XHRhZHJlc3NlIGxlIHByw6lzZW50IGNvbnRyYXQgZGUgbG9jYXRpb24gZG9udCAxXHJcblx0XHRcdFx0XHRcdFx0ZXhlbXBsYWlyZSBlc3Qgw6AgbWUgcmV0b3VybmVyIChwYXIgY291cnJpZXIgb3UgbWFpbClcclxuXHRcdFx0XHRcdFx0XHRyZXbDqnR1IGRlIHZvdHJlIHNpZ25hdHVyZSBldCBhY2NvbXBhZ27DqSBkdSBtb250YW50XHJcblx0XHRcdFx0XHRcdFx0ZGUgbOKAmWFjb21wdGUgKHZpcmVtZW50IG91IGNvdXJyaWVyKS4gRW4gZXNww6lyYW50XHJcblx0XHRcdFx0XHRcdFx0YXZvaXIgbGUgcGxhaXNpciBkZSB2b3VzIGFjY3VlaWxsaXIgcHJvY2hhaW5lbWVudCxcclxuXHRcdFx0XHRcdFx0XHRyZWNldmV6IG1lcyBzaW5jw6hyZXMgc2FsdXRhdGlvbnMuXHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHJcblx0XHRcdFx0XHQ8R3JpZFxyXG5cdFx0XHRcdFx0XHRjb250YWluZXJcclxuXHRcdFx0XHRcdFx0ZGlyZWN0aW9uPSdyb3cnXHJcblx0XHRcdFx0XHRcdGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nXHJcblx0XHRcdFx0XHRcdHNwYWNpbmc9ezR9XHJcblx0XHRcdFx0XHRcdGFsaWduSXRlbXM9J2NlbnRlcic+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeT5FbnRyZSBsYSBzb2Npw6l0w6kgOjwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHRcdFNpw6lnZSBzb2NpYWwgPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRTQVMgV0FPIDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0MSBSb3V0ZSBkZSBOb3VhcnQgPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQwODI0MCBGb3Nzw6ksIEZSQU5DRSA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdENvdXJyaWVyIDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj0nbWFpbHRvOmNvbnRhY3RAZ2l0ZXMtd2FvLmZyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGFjdEBnaXRlcy13YW8uZnJcclxuXHRcdFx0XHRcdFx0XHRcdDwvYT57JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRTaXRlIGludGVybmV0IDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj0naHR0cDovL3d3dy5naXRlcy13YW8uZnInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRodHRwOi8vd3d3LmdpdGVzLXdhby5mclxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFRlbCA6ICszMyAoMCkzIDI0IDMwIDA4IDk1IDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0SUJBTiA6IEZSNzYgMTAyMCA2MDg0IDAzOTggMzg3NyAyOTI1IDA5MyA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdEJJQyA6IEFHUklGUlBQODAyIDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0VElUVUxBSVJFIDogU0FTIFdBTyA8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5FdCBsZSBsb2NhdGFpcmUgOjwvc3Bhbj4gPGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRRdWFsaXTDqSA6IDxzcGFuPntjbGllbnQuY2l2aWxpdGV9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRQcsOpbm9tIGV0IE5vbSA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Y2xpZW50Lm5vbX0ge2NsaWVudC5wcmVub219XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdEFkcmVzc2UgOiA8c3Bhbj57Y2xpZW50LmFkcmVzc2V9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRDUCAmIFZpbGxlIDp7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtjbGllbnQuY3B9IHtjbGllbnQudmlsbGV9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFBheXMgOiA8c3Bhbj57Y2xpZW50LnBheXN9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRUw6lsw6lwaG9uZSA6IDxzcGFuPntjbGllbnQudGVsfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0Q291cnJpZXIgOiA8c3Bhbj57Y2xpZW50Lm1haWx9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0UG91ciBsYSB0YXhlIGRlIFPDqWpvdXIgbm9tYnJlIGRlIHBlcnNvbm5lcyA6XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0XHRUYXhhYmxlcyA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdHtyZXNlcnZhdGlvbi5uYlBlcnMgLSByZXNlcnZhdGlvbi5uYkVuZn0gLSBOb25cclxuXHRcdFx0XHRcdFx0XHRcdHRheGFibGVzIDoge3Jlc2VydmF0aW9uLm5iRW5mfVxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZX0+XHJcblx0XHRcdFx0XHRcdFx0Q09ORElUSU9OUyBERSBMT0NBVElPTlxyXG5cdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZUNvbG9yfT5cclxuXHRcdFx0XHRcdFx0XHREw6lzaWduYXRpb24gZGVzIGxpZXV4IGV0IGRlc2NyaXB0aWYgZHUgbG9nZW1lbnRcclxuXHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMubGluZUhlaWdodH0+XHJcblx0XHRcdFx0XHRcdFx0e2dpdGUuY3REZXNpZ25hdGlvblRpdHJlfVxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblxyXG5cdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudHlwb1NvdWxpZ25lfT5cclxuXHRcdFx0XHRcdFx0XHRQcmluY2lwYWxlcyBjYXJhY3TDqXJpc3RpcXVlcyA6XHJcblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2VkaXRvcic+XHJcblx0XHRcdFx0XHRcdFx0e3JlbmRlckhUTUwoZ2l0ZS5jdFByaW5jaXBDYXJhYyl9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudHlwb1NvdWxpZ25lfT5cclxuXHRcdFx0XHRcdFx0XHRTaXR1YXRpb24gZHUgbG9nZW1lbnQgZGFucyBsYSBsb2NhbGl0w6kgOlxyXG5cdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdlZGl0b3InPlxyXG5cdFx0XHRcdFx0XHRcdHtyZW5kZXJIVE1MKGdpdGUuY3RTaXR1TG9nKX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBvU291bGlnbmV9PlxyXG5cdFx0XHRcdFx0XHRcdERlc2NyaXB0aW9uIGR1IGxvZ2VtZW50IDpcclxuXHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdlZGl0b3InXHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnNTBweCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0e3JlbmRlckhUTUwoZ2l0ZS5jdERlc2NMb2cpfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZUNvbG9yfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0RHVyw6llIGRlIGxhIGxvY2F0aW9uIDpcclxuXHRcdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMubGluZUhlaWdodFB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0TGEgcHLDqXNlbnRlIGxvY2F0aW9uIGVzdCBjb25zZW50aWUgZXQgYWNjZXB0w6llXHJcblx0XHRcdFx0XHRcdFx0XHRwb3VyIHVuZSBkdXLDqWUgZGUgOiAyIG51aXTDqWVzIEVsbGUgY29tbWVuY2UgbGVcclxuXHRcdFx0XHRcdFx0XHRcdHZlbmRyZWRpIDI3IGFvw7t0IDIwMjEgw6AgcGFydGlyIGRlIDE3aCBldCBzZVxyXG5cdFx0XHRcdFx0XHRcdFx0dGVybWluZXJhIGxlIGRpbWFuY2hlIDI5IGFvw7t0IDIwMjEgYXUgcGx1cyB0YXJkXHJcblx0XHRcdFx0XHRcdFx0XHTDoCAxN2ggRWxsZSBuZSBwb3VycmEgZW4gYXVjdW4gY2FzIMOqdHJlIHByb3JvZ8OpZSxcclxuXHRcdFx0XHRcdFx0XHRcdHNhdWYgYWNjb3JkIMOpY3JpdCBldCBwcsOpYWxhYmxlIGR1IHByb3ByacOpdGFpcmUuXHJcblx0XHRcdFx0XHRcdFx0XHRQb3VyIG5vdXMgcGVybWV0dHJlIGRlIG5vdXMgb3JnYW5pc2VyLCAobGUgZ8OudGVcclxuXHRcdFx0XHRcdFx0XHRcdGVzdCDDoCA0IGttIGRlIGzigJloYWJpdGF0aW9uIHByaW5jaXBhbGUgZHVcclxuXHRcdFx0XHRcdFx0XHRcdHByb3ByacOpdGFpcmUpLCB2b3VzIGRldmV6IG5vdXMgYXZlcnRpciBxdWVscXVlc1xyXG5cdFx0XHRcdFx0XHRcdFx0am91cnMgw6AgbCdhdmFuY2UgZGUgdm90cmUgaGV1cmUgZCdhcnJpdsOpZSAocGFyXHJcblx0XHRcdFx0XHRcdFx0XHRtYWlsIG91IHTDqWzDqXBob25lKS5cclxuXHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyVGl0bGVDb2xvcn0+XHJcblx0XHRcdFx0XHRcdFx0XHRQcml4IGVuIEV1cm9zXHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmVIZWlnaHRQfT48L3A+XHJcblx0XHRcdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZUNvbG9yfT5cclxuXHRcdFx0XHRcdFx0XHRcdEFzc3VyYW5jZXNcclxuXHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMTZweCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0TGUgbG9jYXRhaXJlIGRvaXQgdsOpcmlmaWVyIHNpIHNvbiBjb250cmF0XHJcblx0XHRcdFx0XHRcdFx0ZOKAmWhhYml0YXRpb24gcHJpbmNpcGFsZSBwcsOpdm9pdCBs4oCZZXh0ZW5zaW9uXHJcblx0XHRcdFx0XHRcdFx0dmlsbMOpZ2lhdHVyZSBlbiByZXNwb25zYWJpbGl0w6kgY2l2aWxlLiBEYW5zXHJcblx0XHRcdFx0XHRcdFx0bOKAmWh5cG90aMOoc2UgY29udHJhaXJlLCBpbCBwZXV0IGludGVydmVuaXIgYXVwcsOocyBkZVxyXG5cdFx0XHRcdFx0XHRcdHNhIGNvbXBhZ25pZSBk4oCZYXNzdXJhbmNlIGV0IHLDqWNsYW1lciBs4oCZZXh0ZW5zaW9uIGRlXHJcblx0XHRcdFx0XHRcdFx0bGEgZ2FyYW50aWUgcG91ciBsYSBww6lyaW9kZSBkZSBsYSBsb2NhdGlvbiwgb3UgYmllblxyXG5cdFx0XHRcdFx0XHRcdHNvdXNjcmlyZSB1biBjb250cmF0IHBhcnRpY3VsaWVyIGF1IHRpdHJlIGRlc1xyXG5cdFx0XHRcdFx0XHRcdGNsYXVzZXMgdmlsbMOpZ2lhdHVyZS4gRGVycmnDqHJlIGxlIGfDrnRlIHNlIHRyb3V2ZSB1blxyXG5cdFx0XHRcdFx0XHRcdHJ1aXNzZWF1IGV0IHVuIMOpdGFuZywgcGFyIG1lc3VyZSBkZSBzw6ljdXJpdMOpLCBMZXNcclxuXHRcdFx0XHRcdFx0XHRlbmZhbnRzIGRldnJvbnQgdG91am91cnMgw6p0cmUgYWNjb21wYWduw6lzIGTigJl1blxyXG5cdFx0XHRcdFx0XHRcdGFkdWx0ZSBldCBsZSBwcm9wcmnDqXRhaXJlIG5lIHBldXQgZW4gYXVjdW4gY2FzIMOqdHJlXHJcblx0XHRcdFx0XHRcdFx0dGVudSBwb3VyIHJlc3BvbnNhYmxlIGRlcyBhY2NpZGVudHMgcXVpIHBvdXJyYWllbnQgeVxyXG5cdFx0XHRcdFx0XHRcdHN1cnZlbmlyLiBEZSBtw6ptZSBwb3VyIGzigJlhaXJlIGRlIGpldSBkdSBnw650ZSwgbGVzXHJcblx0XHRcdFx0XHRcdFx0ZW5mYW50cyBxdWkgbOKAmXV0aWxpc2VudCBkb2l2ZW50IMOqdHJlIHNvdXMgbGFcclxuXHRcdFx0XHRcdFx0XHRzdXJ2ZWlsbGFuY2UgZGVzIHBhcmVudHMuXHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHJcblx0XHRcdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZUNvbG9yfT5cclxuXHRcdFx0XHRcdFx0XHRcdEV0YXQgZGVzIGxpZXV4IGV0IGludmVudGFpcmVcclxuXHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5lSGVpZ2h0UH0+XHJcblx0XHRcdFx0XHRcdFx0TGUgZG9jdW1lbnQgcG91ciBs4oCZw6l0YXQgZGVzIGxpZXV4IHNlIHRyb3V2ZSBkYW5zIGxlXHJcblx0XHRcdFx0XHRcdFx0Y2FoaWVyIGTigJlleHBsaWNhdGlvbiBkdSBnw650ZS4gQ2UgY29udHJhdCBmYWl0IG9mZmljZVxyXG5cdFx0XHRcdFx0XHRcdGQnaW52ZW50YWlyZS4gUG91ciDDqXZpdGVyIHRvdXRlIGNvbnRlc3RhdGlvbiBsZVxyXG5cdFx0XHRcdFx0XHRcdGxvY2F0YWlyZSB2b3VkcmEgYmllbiBjb250csO0bGVyIGV0IHNpZ25hbGVyIHRvdXRlXHJcblx0XHRcdFx0XHRcdFx0YW5vbWFsaWUgZGFucyBsZXMgMjQgaGV1cmVzLiBQYXNzw6kgY2UgZMOpbGFpLCBsZXNcclxuXHRcdFx0XHRcdFx0XHRiaWVucyBsb3XDqXMgc2Vyb250IGNvbnNpZMOpcsOpcyBjb21tZSBleGVtcHRzIGRlXHJcblx0XHRcdFx0XHRcdFx0ZG9tbWFnZXMgw6AgbOKAmWVudHLDqWUgZHUgbG9jYXRhaXJlLiBDZWx1aS1jaSBzZXJhXHJcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2FibGUgZGUgdG91dGUgZMOpdMOpcmlvcmF0aW9uIG91IHBlcnRlIHBvdXZhbnRcclxuXHRcdFx0XHRcdFx0XHRzdXJ2ZW5pciDDoCBjZSBtb2JpbGllciBhaW5zaSBxdeKAmWF1eCBkaXZlcnMgbWF0w6lyaWVsc1xyXG5cdFx0XHRcdFx0XHRcdGRlIGzigJllc3BhY2UgcGlzY2luZSBldCBkw6l0ZW50ZS5cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlclRpdGxlQ29sb3J9PlxyXG5cdFx0XHRcdFx0XHRcdFx0Sm91aXNzYW5jZSBkZXMgbGlldXhcclxuXHRcdFx0XHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5lSGVpZ2h0UH0+XHJcblx0XHRcdFx0XHRcdFx0TGUgbG9jYXRhaXJlIGVudHJldGllbmRyYSBsZXMgbGlldXggbG91w6lzIGV0IGxlc1xyXG5cdFx0XHRcdFx0XHRcdHJlbmRyYSBlbiBib24gw6l0YXQgZGUgcHJvcHJldMOpLiBJbCB2ZWlsbGVyYSDDoCBjZSBxdWVcclxuXHRcdFx0XHRcdFx0XHRsYSB0cmFucXVpbGxpdMOpIGR1IHZvaXNpbmFnZSBuZSBzb2l0IHBhcyB0cm91YmzDqWUuXHJcblx0XHRcdFx0XHRcdFx0TGEgc291cyBsb2NhdGlvbiBlc3QgaW50ZXJkaXRlIGF1IHByZW5ldXIsIG3Dqm1lIMOgXHJcblx0XHRcdFx0XHRcdFx0dGl0cmUgZ3JhdHVpdCwgc291cyBwZWluZSBkZSByw6lzaWxpYXRpb24gZHUgY29udHJhdC5cclxuXHRcdFx0XHRcdFx0XHRM4oCZaW5zdGFsbGF0aW9uIGRlIHRlbnRlcyBvdSBsZSBzdGF0aW9ubmVtZW50IGRlXHJcblx0XHRcdFx0XHRcdFx0Y2FyYXZhbmVzIHN1ciBsZSB0ZXJyYWluIGRlIGxhIHByb3ByacOpdMOpIGxvdcOpZSBlc3RcclxuXHRcdFx0XHRcdFx0XHRpbnRlcmRpdCwgc2F1ZiBhY2NvcmQgcHLDqWFsYWJsZSBkdSBwcm9wcmnDqXRhaXJlLlxyXG5cdFx0XHRcdFx0XHRcdEzigJl1dGlsaXNhdGV1ciBz4oCZZW5nYWdlIMOgIG5lIHBhcyB1dGlsaXNlciBsZSBzZXJ2aWNlXHJcblx0XHRcdFx0XHRcdFx0V0ktRkkgw6AgZGVzIGZpbnMgaWxsaWNpdGVzLCBpbnRlcmRpdGVzIG91IGlsbMOpZ2FsZXNcclxuXHRcdFx0XHRcdFx0XHQoZW50cmUgYXV0cmVzIHJlc3BlY3QgZGUgbGEgbG9pIEhhZG9waSkuIExlIGxvdWV1cixcclxuXHRcdFx0XHRcdFx0XHTDoCBsYSBkZW1hbmRlIGRlIHRpZXJzIGV0L291IGRlIHRvdXRlIGF1dG9yaXTDqVxyXG5cdFx0XHRcdFx0XHRcdGNvbXDDqXRlbnRlLCBzZSByw6lzZXJ2ZSBsZSBkcm9pdCBkZSBzdXNwZW5kcmVcclxuXHRcdFx0XHRcdFx0XHR0ZW1wb3JhaXJlbWVudCBvdSBkZSBtYW5pw6hyZSBkw6lmaW5pdGl2ZSB0b3V0ZVxyXG5cdFx0XHRcdFx0XHRcdHV0aWxpc2F0aW9uIGR1IHNlcnZpY2Ugc2FucyBxdWUgc2EgcmVzcG9uc2FiaWxpdMOpIG5lXHJcblx0XHRcdFx0XHRcdFx0cHVpc3NlIMOqdHJlIHJlY2hlcmNow6llIGV0IHNhbnMgcXVlIGzigJl1dGlsaXNhdGV1ciBuZVxyXG5cdFx0XHRcdFx0XHRcdHB1aXNzZSByZXZlbmRpcXVlciB1bmUgcXVlbGNvbnF1ZSBpbmRlbW5pc2F0aW9uIG91XHJcblx0XHRcdFx0XHRcdFx0csOpcGFyYXRpb24uIEVuIGF1Y3VuIGNhcyBsZSBsb3VldXIgbmUgcGV1dCDDqnRyZVxyXG5cdFx0XHRcdFx0XHRcdHRlbnVlIGRlIHLDqXBhcmVyIGxlcyBwcsOpanVkaWNlcyBkaXJlY3RzIGV0L291XHJcblx0XHRcdFx0XHRcdFx0aW5kaXJlY3RzIHN1YmlzIGR1IGZhaXQgZGUgbOKAmXV0aWxpc2F0aW9uIGR1IHNlcnZpY2VcclxuXHRcdFx0XHRcdFx0XHRwYXIgbOKAmXV0aWxpc2F0ZXVyLCBjZSBkZXJuaWVyIHJlY29ubmFpc3NhbnQgcXVlIGxlXHJcblx0XHRcdFx0XHRcdFx0bG91ZXVyIG5lIHBldXQgcGFzIMOqdHJlIHJlc3BvbnNhYmxlIGRlcyBjb250ZW51c1xyXG5cdFx0XHRcdFx0XHRcdGF1cXVlbCBhY2PDqGRlIGzigJl1dGlsaXNhdGV1ciBldCBxdWUgbOKAmWFjY2Vzc2liaWxpdMOpXHJcblx0XHRcdFx0XHRcdFx0YXV4IGNvbnRlbnVzIGV0IHNlcnZpY2VzIG7igJllc3QgcGFzIGdhcmFudGllIGV0IHBldXRcclxuXHRcdFx0XHRcdFx0XHTDqnRyZSBzdXNwZW5kdWUgc2FucyBwcsOpYXZpcy5cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlclRpdGxlQ29sb3J9PlxyXG5cdFx0XHRcdFx0XHRcdFx0Q2xhdXNlIHLDqXNvbHV0b2lyZVxyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmVIZWlnaHRQfT5cclxuXHRcdFx0XHRcdFx0XHRBIGTDqWZhdXQgZGUgcGFpZW1lbnQgYXV4IMOpY2jDqWFuY2VzIGZpeMOpZXMgb3UgZW4gY2FzXHJcblx0XHRcdFx0XHRcdFx0ZOKAmWluZXjDqWN1dGlvbiBk4oCZdW5lIGRlcyBjbGF1c2VzIGR1IHByw6lzZW50XHJcblx0XHRcdFx0XHRcdFx0ZW5nYWdlbWVudCBldCBjaW5xIGpvdXJzIGZyYW5jcyBhcHLDqHMgdW5lIHNpbXBsZVxyXG5cdFx0XHRcdFx0XHRcdHNvbW1hdGlvbiBwYXIgbGV0dHJlIHJlY29tbWFuZMOpZSByZXN0w6llXHJcblx0XHRcdFx0XHRcdFx0aW5mcnVjdHVldXNlLCBsZSBwcsOpc2VudCBjb250cmF0IHNlcmEgaW1tw6lkaWF0ZW1lbnRcclxuXHRcdFx0XHRcdFx0XHRyw6lzaWxpw6kgZXQgbGUgYmFpbGxldXIgcG91cnJhIHNlIHByw6l2YWxvaXIgZGVcclxuXHRcdFx0XHRcdFx0XHRs4oCZYXJ0aWNsZSAxNTkwIGR1IENvZGUgY2l2aWwgcG91ciBjb25zZXJ2ZXIgbGVzXHJcblx0XHRcdFx0XHRcdFx0YWNvbXB0ZXMgdmVyc8OpcyDDoCB0aXRyZSBkZXMgcHJlbWllcnNcclxuXHRcdFx0XHRcdFx0XHRkb21tYWdlcy1pbnTDqXLDqnRzLlxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblxyXG5cdFx0XHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyVGl0bGVDb2xvcn0+XHJcblx0XHRcdFx0XHRcdFx0XHRBbm51bGF0aW9uXHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMubGluZUhlaWdodFB9PlxyXG5cdFx0XHRcdFx0XHRcdExhIHNpZ25hdHVyZSBkdSBjb250cmF0IGVuZ2FnZSBsZXMgZGV1eCBwYXJ0aWVzIGRlXHJcblx0XHRcdFx0XHRcdFx0ZmHDp29uIGTDqWZpbml0aXZlLiBTaSBsZSBsb2NhdGFpcmUgcmVub25jZSDDoCBsYVxyXG5cdFx0XHRcdFx0XHRcdGxvY2F0aW9uIDYwIGpvdXJzIGF2YW50IGzigJlhcnJpdsOpZSwgbOKAmWFjb21wdGUgZXN0XHJcblx0XHRcdFx0XHRcdFx0cmVtYm91cnPDqS4gRW50cmUgMSBqb3VyIGV0IDYwIGpvdXJzIHNpIG5vdXNcclxuXHRcdFx0XHRcdFx0XHRyw6l1c3Npc3NvbnMgw6AgcmVsb3VlciwgbOKAmWFjb21wdGUgZXN0IMOpZ2FsZW1lbnRcclxuXHRcdFx0XHRcdFx0XHRyZW1ib3Vyc8OpLiBTaW5vbiBs4oCZYWNvbXB0ZSBlc3QgcGVyZHUuXHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHJcblx0XHRcdFx0XHRcdDxHcmlkPlxyXG5cdFx0XHRcdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJUaXRsZUNvbG9yfT5cclxuXHRcdFx0XHRcdFx0XHRcdEVsZWN0aW9uIGRlIGRvbWljaWxlXHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMubGluZUhlaWdodFB9PlxyXG5cdFx0XHRcdFx0XHRcdFBvdXIgbOKAmWV4w6ljdXRpb24gZGVzIHByw6lzZW50ZXMsIGxlIHByb3ByacOpdGFpcmUgZXRcclxuXHRcdFx0XHRcdFx0XHRsZSBsb2NhdGFpcmUgZm9udCDDqWxlY3Rpb24gZGUgZG9taWNpbGUgZGFucyBsZXVyc1xyXG5cdFx0XHRcdFx0XHRcdGRvbWljaWxlcyByZXNwZWN0aWZzLiBUb3V0ZWZvaXMgZW4gY2FzIGRlIGxpdGlnZSwgbGVcclxuXHRcdFx0XHRcdFx0XHR0cmlidW5hbCBkZXMgbGlldXggbG91w6lzIHNlcmEgc2V1bCBjb21ww6l0ZW50LlxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblxyXG5cdFx0XHRcdFx0PEdyaWRcclxuXHRcdFx0XHRcdFx0Y29udGFpbmVyXHJcblx0XHRcdFx0XHRcdGRpcmVjdGlvbj0ncm93J1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5PSdzcGFjZS1iZXR3ZWVuJ1xyXG5cdFx0XHRcdFx0XHRzcGFjaW5nPXs0fVxyXG5cdFx0XHRcdFx0XHRhbGlnbkl0ZW1zPSdmbGV4LWVuZCdcclxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgbWFyZ2luVG9wOiAnMjBweCcgfX0+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHRGYWl0IGVuIGRldXggZXhlbXBsYWlyZXMgw6AgRm9zc8OpIGxlIHtEYXRlLm5vdygpfVxyXG5cdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8cD5TaWduYXR1cmUgZHUgcHJvcHJpw6l0YWlyZSw8L3A+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdErigJlhaSBwcmlzIGNvbm5haXNzYW5jZSBkZXMgY29uZGl0aW9ucyBkZVxyXG5cdFx0XHRcdFx0XHRcdFx0bG9jYXRpb24gY2ktZGVzc3VzXHJcblx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxwIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzIwcHgnIH19PkRhdGUgOjwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFNpZ25hdHVyZSBkdSBsb2NhdGFpcmUgKHByw6ljw6lkw6kgZGUgbGEgbWVudGlvbiBsdVxyXG5cdFx0XHRcdFx0XHRcdFx0ZXQgYXBwcm91dsOpKVxyXG5cdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L1RoZW1lUHJvdmlkZXI+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcblx0Ly8gY29uc29sZS5sb2coJ2NvbnRleHQnLCBjb250ZXh0LnF1ZXJ5LmlkKTtcclxuXHRjb25zdCByZXMxID0gYXdhaXQgYWZmaWNoZVJlc2VydmF0aW9uKGNvbnRleHQucXVlcnkuaWQpO1xyXG5cdGNvbnN0IHJlc2VydmF0aW9uID0gYXdhaXQgcmVzMTtcclxuXHQvLyBjb25zb2xlLmxvZygncmVzZXJ2YXRpb24nLCByZXNlcnZhdGlvbik7XHJcblx0Y29uc3QgcmVzMiA9IGF3YWl0IGxpc3RHaXRlQnlJZChyZXNlcnZhdGlvbi5naXRlKTtcclxuXHRjb25zdCBnaXRlID0gYXdhaXQgcmVzMjtcclxuXHRjb25zdCByZXMzID0gYXdhaXQgYWZmaWNoZUNsaWVudChyZXNlcnZhdGlvbi5jbGllbnQpO1xyXG5cdGNvbnN0IGNsaWVudCA9IGF3YWl0IHJlczM7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRyZXNlcnZhdGlvbixcclxuXHRcdFx0Z2l0ZSxcclxuXHRcdFx0Y2xpZW50LFxyXG5cdFx0fSxcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlcnZhdGlvbklkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9