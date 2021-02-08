webpackHotUpdate_N_E("pages/admin/gestionDivers/partenaires/manage/[id]",{

/***/ "./components/admin/lists/ListPartenairesCards.js":
/*!********************************************************!*\
  !*** ./components/admin/lists/ListPartenairesCards.js ***!
  \********************************************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var _actions_partenairesActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../actions/partenairesActions */ "./actions/partenairesActions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../actions/giteActions */ "./actions/giteActions.js");



var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\lists\\ListPartenairesCards.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









var ListPartenairesCards = function ListPartenairesCards(_ref) {
  _s();

  var router = _ref.router;
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_5__["getCookie"])('token');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      image = _useState[0],
      setImage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      categorie = _useState2[0],
      setCategorie = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      partenaireCards = _useState3[0],
      setPartenaireCards = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    loading: false,
    error: '',
    success: '',
    message: ''
  }),
      values = _useState4[0],
      setvalues = _useState4[1];

  var getImageById = function getImageById(id) {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_8__["listPhotosById"])(id).then(function (data) {
      console.log('data vaut', data);

      if (data.error) {
        console.log(error);
      } else {// setImage({ image: data });
      }
    });
  };

  var recupCategorie = function recupCategorie() {
    Object(_actions_partenairesActions__WEBPACK_IMPORTED_MODULE_6__["listePartenaireById"])(router.query.id, token).then(function (result) {
      console.log('result', result);

      if (result.error) {
        console.log(error);
      } else {
        setCategorie(result);
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    //Tester en serversideprops plutôt qu'en hooks
    recupCategorie(); // listerLesPartenaireCards();
  }, []);
  var loading = values.loading,
      success = values.success,
      error = values.error,
      message = values.message; // const listerLesPartenaireCards = () => {
  // 	ListAllPartenaireCards(router.query.id).then((data) => {
  // 		console.log('liste des partenaires', data);
  // 		if (data.error) {
  // 			console.log(error);
  // 		} else {
  // 			setPartenaireCards(...partenaireCards, data);
  // 		}
  // 	});
  // };
  // const deletePartenaire = (id) => {
  // 	setvalues({ ...values, loading: true });
  // 	console.log('id', id);
  // 	removePartenaire(id, token).then((data) => {
  // 		console.log('data vaut', data);
  // 		if (data.error) {
  // 			setvalues({
  // 				...values,
  // 				loading: false,
  // 				error: true,
  // 				success: false,
  // 			});
  // 		} else {
  // 			setvalues({
  // 				...values,
  // 				loading: false,
  // 				error: '',
  // 				success: true,
  // 				message: data.message,
  // 			});
  // 		}
  // 	});
  // };

  var deleteConfirm = function deleteConfirm(id) {
    var answer = window.confirm("Suppression du partenaire ".concat(id, ", \xEAtes-vous s\xFBr ?"));

    if (answer) {
      deletePartenaire(id);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 4
    }
  }, "Liste des partenaires pour la cat\xE9gorie", ' ', __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }
  }, categorie.slug), ",", ' ', __jsx("small", {
    style: {
      fontSize: '13px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }
  }, "(pensez \xE0 ajouter des images dans la cat\xE9gorie correspondante avant de cr\xE9er un partenaire)")), loading && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Spinner"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 16
    }
  }), success && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    color: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 16
    }
  }, message), error && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    color: "danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 14
    }
  }, "Une erreur est survenue"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Table"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 4
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 6
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, "#ID"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, "Titre"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, "Image"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, "mail"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, "tel"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }, "Actif"), __jsx("th", {
    colSpan: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, "Modif/Suppr"))), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 5
    }
  }, partenaireCards.map(function (partenaireCard, i) {
    return __jsx("tr", {
      className: "mt-5",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 7
      }
    }, __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 8
      }
    }, partenaireCard._id), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 8
      }
    }, partenaireCard.titre), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 8
      }
    }, getImageById(partenaireCard.image)), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 8
      }
    }, partenaireCard.mail), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 8
      }
    }, partenaireCard.tel), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 8
      }
    }, partenaireCard.actif ? __jsx("i", {
      "class": "fas fa-check-square",
      style: {
        color: 'green'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 10
      }
    }) : __jsx("i", {
      "class": "fas fa-times",
      style: {
        color: 'red'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 10
      }
    })), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 8
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/admin/crud/divers/partenaire/".concat(partenaireCard._id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 10
      }
    }, __jsx("i", {
      className: "fas fa-pencil-ruler",
      style: {
        color: 'orange'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 11
      }
    })))), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 8
      }
    }, __jsx("i", {
      onClick: function onClick() {
        return deleteConfirm(partenaireCard._id);
      },
      className: "fas fa-trash-alt",
      style: {
        color: 'red',
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }
    })));
  }))));
};

_s(ListPartenairesCards, "3tH3T501/hcyo/PtWlSoxYnR49k=");

_c = ListPartenairesCards;
function getServerSideProps(_x) {
  return _getServerSideProps.apply(this, arguments);
}

function _getServerSideProps() {
  _getServerSideProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Object(_actions_partenairesActions__WEBPACK_IMPORTED_MODULE_6__["ListAllPartenaireCards"])(context.params.id).then(function (data) {
              console.log('liste des partenaires', data);

              if (data.error) {
                console.log(error);
                return {
                  notFound: true
                };
              } else {
                Object(_actions_partenairesActions__WEBPACK_IMPORTED_MODULE_6__["listePartenaireById"])(router.query.id, token).then(function (result) {
                  console.log('result', result);

                  if (result.error) {
                    console.log(error);
                  } else {
                    return {
                      props: {
                        partenaireCards: data
                      }
                    };
                  }
                });
              }
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getServerSideProps.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(ListPartenairesCards));

var _c, _c2;

$RefreshReg$(_c, "ListPartenairesCards");
$RefreshReg$(_c2, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0UGFydGVuYWlyZXNDYXJkcy5qcyJdLCJuYW1lcyI6WyJMaXN0UGFydGVuYWlyZXNDYXJkcyIsInJvdXRlciIsInRva2VuIiwiZ2V0Q29va2llIiwidXNlU3RhdGUiLCJpbWFnZSIsInNldEltYWdlIiwiY2F0ZWdvcmllIiwic2V0Q2F0ZWdvcmllIiwicGFydGVuYWlyZUNhcmRzIiwic2V0UGFydGVuYWlyZUNhcmRzIiwibG9hZGluZyIsImVycm9yIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJ2YWx1ZXMiLCJzZXR2YWx1ZXMiLCJnZXRJbWFnZUJ5SWQiLCJpZCIsImxpc3RQaG90b3NCeUlkIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicmVjdXBDYXRlZ29yaWUiLCJsaXN0ZVBhcnRlbmFpcmVCeUlkIiwicXVlcnkiLCJyZXN1bHQiLCJ1c2VFZmZlY3QiLCJkZWxldGVDb25maXJtIiwiYW5zd2VyIiwid2luZG93IiwiY29uZmlybSIsImRlbGV0ZVBhcnRlbmFpcmUiLCJzbHVnIiwiZm9udFNpemUiLCJtYXAiLCJwYXJ0ZW5haXJlQ2FyZCIsImkiLCJfaWQiLCJ0aXRyZSIsIm1haWwiLCJ0ZWwiLCJhY3RpZiIsImNvbG9yIiwiY3Vyc29yIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsIkxpc3RBbGxQYXJ0ZW5haXJlQ2FyZHMiLCJwYXJhbXMiLCJub3RGb3VuZCIsInByb3BzIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7O0FBRUEsSUFBTUEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUM1QyxNQUFNQyxLQUFLLEdBQUdDLHNFQUFTLENBQUMsT0FB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LEVBQWtCO0FBQ2pCVSwyQkFBTyxDQUFDQyxHQUFSLENBQVlYLEtBQVo7QUFDQSxtQkFGRCxNQUVPO0FBQ04sMkJBQU87QUFDTnVDLDJCQUFLLEVBQUU7QUFBRTFDLHVDQUFlLEVBQUVZO0FBQW5CO0FBREQscUJBQVA7QUFHQTtBQUNELGlCQVREO0FBVUE7QUFDRCxhQW5CRDs7QUFETTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBdUJRLHFFQUFBK0IsOERBQVUsQ0FBQ3BELG9CQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2dlc3Rpb25EaXZlcnMvcGFydGVuYWlyZXMvbWFuYWdlL1tpZF0uOTAzMTUxOWQ5NTFkMTg4NTViODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYmxlIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgeyBBbGVydCwgU3Bpbm5lciB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuaW1wb3J0IHtcclxuXHRMaXN0QWxsUGFydGVuYWlyZUNhcmRzLFxyXG5cdGxpc3RlUGFydGVuYWlyZUJ5SWQsXHJcblx0cmVtb3ZlUGFydGVuYWlyZUNhcmQsXHJcbn0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9wYXJ0ZW5haXJlc0FjdGlvbnMnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBsaXN0UGhvdG9zQnlJZCB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5cclxuY29uc3QgTGlzdFBhcnRlbmFpcmVzQ2FyZHMgPSAoeyByb3V0ZXIgfSkgPT4ge1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cdGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtjYXRlZ29yaWUsIHNldENhdGVnb3JpZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW3BhcnRlbmFpcmVDYXJkcywgc2V0UGFydGVuYWlyZUNhcmRzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgW3ZhbHVlcywgc2V0dmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuXHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0ZXJyb3I6ICcnLFxyXG5cdFx0c3VjY2VzczogJycsXHJcblx0XHRtZXNzYWdlOiAnJyxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgZ2V0SW1hZ2VCeUlkID0gKGlkKSA9PiB7XHJcblx0XHRsaXN0UGhvdG9zQnlJZChpZCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZGF0YSB2YXV0JywgZGF0YSk7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIHNldEltYWdlKHsgaW1hZ2U6IGRhdGEgfSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHJlY3VwQ2F0ZWdvcmllID0gKCkgPT4ge1xyXG5cdFx0bGlzdGVQYXJ0ZW5haXJlQnlJZChyb3V0ZXIucXVlcnkuaWQsIHRva2VuKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3Jlc3VsdCcsIHJlc3VsdCk7XHJcblx0XHRcdGlmIChyZXN1bHQuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0Q2F0ZWdvcmllKHJlc3VsdCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHQvL1Rlc3RlciBlbiBzZXJ2ZXJzaWRlcHJvcHMgcGx1dMO0dCBxdSdlbiBob29rc1xyXG5cdFx0cmVjdXBDYXRlZ29yaWUoKTtcclxuXHRcdC8vIGxpc3Rlckxlc1BhcnRlbmFpcmVDYXJkcygpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc3QgeyBsb2FkaW5nLCBzdWNjZXNzLCBlcnJvciwgbWVzc2FnZSB9ID0gdmFsdWVzO1xyXG5cclxuXHQvLyBjb25zdCBsaXN0ZXJMZXNQYXJ0ZW5haXJlQ2FyZHMgPSAoKSA9PiB7XHJcblx0Ly8gXHRMaXN0QWxsUGFydGVuYWlyZUNhcmRzKHJvdXRlci5xdWVyeS5pZCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdC8vIFx0XHRjb25zb2xlLmxvZygnbGlzdGUgZGVzIHBhcnRlbmFpcmVzJywgZGF0YSk7XHJcblx0Ly8gXHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdC8vIFx0XHR9IGVsc2Uge1xyXG5cdC8vIFx0XHRcdHNldFBhcnRlbmFpcmVDYXJkcyguLi5wYXJ0ZW5haXJlQ2FyZHMsIGRhdGEpO1xyXG5cdC8vIFx0XHR9XHJcblx0Ly8gXHR9KTtcclxuXHQvLyB9O1xyXG5cclxuXHQvLyBjb25zdCBkZWxldGVQYXJ0ZW5haXJlID0gKGlkKSA9PiB7XHJcblx0Ly8gXHRzZXR2YWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUgfSk7XHJcblx0Ly8gXHRjb25zb2xlLmxvZygnaWQnLCBpZCk7XHJcblx0Ly8gXHRyZW1vdmVQYXJ0ZW5haXJlKGlkLCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdC8vIFx0XHRjb25zb2xlLmxvZygnZGF0YSB2YXV0JywgZGF0YSk7XHJcblx0Ly8gXHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0Ly8gXHRcdFx0c2V0dmFsdWVzKHtcclxuXHQvLyBcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHQvLyBcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdC8vIFx0XHRcdFx0ZXJyb3I6IHRydWUsXHJcblx0Ly8gXHRcdFx0XHRzdWNjZXNzOiBmYWxzZSxcclxuXHQvLyBcdFx0XHR9KTtcclxuXHQvLyBcdFx0fSBlbHNlIHtcclxuXHQvLyBcdFx0XHRzZXR2YWx1ZXMoe1xyXG5cdC8vIFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdC8vIFx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0Ly8gXHRcdFx0XHRlcnJvcjogJycsXHJcblx0Ly8gXHRcdFx0XHRzdWNjZXNzOiB0cnVlLFxyXG5cdC8vIFx0XHRcdFx0bWVzc2FnZTogZGF0YS5tZXNzYWdlLFxyXG5cdC8vIFx0XHRcdH0pO1xyXG5cdC8vIFx0XHR9XHJcblx0Ly8gXHR9KTtcclxuXHQvLyB9O1xyXG5cclxuXHRjb25zdCBkZWxldGVDb25maXJtID0gKGlkKSA9PiB7XHJcblx0XHRsZXQgYW5zd2VyID0gd2luZG93LmNvbmZpcm0oXHJcblx0XHRcdGBTdXBwcmVzc2lvbiBkdSBwYXJ0ZW5haXJlICR7aWR9LCDDqnRlcy12b3VzIHPDu3IgP2BcclxuXHRcdCk7XHJcblx0XHRpZiAoYW5zd2VyKSB7XHJcblx0XHRcdGRlbGV0ZVBhcnRlbmFpcmUoaWQpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8aDM+XHJcblx0XHRcdFx0TGlzdGUgZGVzIHBhcnRlbmFpcmVzIHBvdXIgbGEgY2F0w6lnb3JpZXsnICd9XHJcblx0XHRcdFx0PHN0cm9uZz57Y2F0ZWdvcmllLnNsdWd9PC9zdHJvbmc+LHsnICd9XHJcblx0XHRcdFx0PHNtYWxsIHN0eWxlPXt7IGZvbnRTaXplOiAnMTNweCcgfX0+XHJcblx0XHRcdFx0XHQocGVuc2V6IMOgIGFqb3V0ZXIgZGVzIGltYWdlcyBkYW5zIGxhIGNhdMOpZ29yaWVcclxuXHRcdFx0XHRcdGNvcnJlc3BvbmRhbnRlIGF2YW50IGRlIGNyw6llciB1biBwYXJ0ZW5haXJlKVxyXG5cdFx0XHRcdDwvc21hbGw+XHJcblx0XHRcdDwvaDM+XHJcblx0XHRcdHtsb2FkaW5nICYmIDxTcGlubmVyIC8+fVxyXG5cdFx0XHR7c3VjY2VzcyAmJiA8QWxlcnQgY29sb3I9J3N1Y2Nlc3MnPnttZXNzYWdlfTwvQWxlcnQ+fVxyXG5cdFx0XHR7ZXJyb3IgJiYgPEFsZXJ0IGNvbG9yPSdkYW5nZXInPlVuZSBlcnJldXIgZXN0IHN1cnZlbnVlPC9BbGVydD59XHJcblx0XHRcdDxUYWJsZT5cclxuXHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0aD4jSUQ8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+VGl0cmU8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+SW1hZ2U8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+bWFpbDwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD50ZWw8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+QWN0aWY8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGggY29sU3Bhbj0nMic+TW9kaWYvU3VwcHI8L3RoPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdHtwYXJ0ZW5haXJlQ2FyZHMubWFwKChwYXJ0ZW5haXJlQ2FyZCwgaSkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8dHIgY2xhc3NOYW1lPSdtdC01JyBrZXk9e2l9PlxyXG5cdFx0XHRcdFx0XHRcdDx0aD57cGFydGVuYWlyZUNhcmQuX2lkfTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPntwYXJ0ZW5haXJlQ2FyZC50aXRyZX08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD57Z2V0SW1hZ2VCeUlkKHBhcnRlbmFpcmVDYXJkLmltYWdlKX08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD57cGFydGVuYWlyZUNhcmQubWFpbH08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD57cGFydGVuYWlyZUNhcmQudGVsfTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0e3BhcnRlbmFpcmVDYXJkLmFjdGlmID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPSdmYXMgZmEtY2hlY2stc3F1YXJlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9J2ZhcyBmYS10aW1lcydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRocmVmPXtgL2FkbWluL2NydWQvZGl2ZXJzL3BhcnRlbmFpcmUvJHtwYXJ0ZW5haXJlQ2FyZC5faWR9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZhcyBmYS1wZW5jaWwtcnVsZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogJ29yYW5nZScgfX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlbGV0ZUNvbmZpcm0ocGFydGVuYWlyZUNhcmQuX2lkKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmFzIGZhLXRyYXNoLWFsdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3JlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0PC9UYWJsZT5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuXHRMaXN0QWxsUGFydGVuYWlyZUNhcmRzKGNvbnRleHQucGFyYW1zLmlkKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZygnbGlzdGUgZGVzIHBhcnRlbmFpcmVzJywgZGF0YSk7XHJcblx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0bm90Rm91bmQ6IHRydWUsXHJcblx0XHRcdH07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRsaXN0ZVBhcnRlbmFpcmVCeUlkKHJvdXRlci5xdWVyeS5pZCwgdG9rZW4pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdyZXN1bHQnLCByZXN1bHQpO1xyXG5cdFx0XHRcdGlmIChyZXN1bHQuZXJyb3IpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdFx0cHJvcHM6IHsgcGFydGVuYWlyZUNhcmRzOiBkYXRhIH0sXHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoTGlzdFBhcnRlbmFpcmVzQ2FyZHMpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9