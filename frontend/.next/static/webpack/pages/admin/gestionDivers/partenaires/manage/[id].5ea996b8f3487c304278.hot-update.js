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

  var partenaireCards = _ref.partenaireCards,
      categorie = _ref.categorie;
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_5__["getCookie"])('token');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      image = _useState[0],
      setImage = _useState[1]; // const [categorie, setCategorie] = useState('');
  // const [partenaireCards, setPartenaireCards] = useState([]);


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    loading: false,
    error: '',
    success: '',
    message: ''
  }),
      values = _useState2[0],
      setvalues = _useState2[1];

  var getImageById = function getImageById(id) {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_8__["listPhotosById"])(id).then(function (data) {
      console.log('data vaut', data);

      if (data.error) {
        console.log(error);
      } else {// setImage({ image: data });
      }
    });
  }; // const recupCategorie = () => {
  // 	listePartenaireById(router.query.id, token).then((result) => {
  // 		console.log('result', result);
  // 		if (result.error) {
  // 			console.log(error);
  // 		} else {
  // 			setCategorie(result);
  // 		}
  // 	});
  // };
  // useEffect(() => {
  // 	//Tester en serversideprops plutôt qu'en hooks
  // 	recupCategorie();
  // 	// listerLesPartenaireCards();
  // }, []);


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

_s(ListPartenairesCards, "0yZbg9QMLDsZIXTPOHMijw8lchs=");

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
                        partenaireCards: data,
                        categorie: result
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0UGFydGVuYWlyZXNDYXJkcy5qcyJdLCJuYW1lcyI6WyJMaXN0UGFydGVuYWlyZXNDYXJkcyIsInBhcnRlbmFpcmVDYXJkcyIsImNhdGVnb3JpZSIsInRva2VuIiwiZ2V0Q29va2llIiwidXNlU3RhdGUiLCJpbWFnZSIsInNldEltYWdlIiwibG9hZGluZyIsImVycm9yIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJ2YWx1ZXMiLCJzZXR2YWx1ZXMiLCJnZXRJbWFnZUJ5SWQiLCJpZCIsImxpc3RQaG90b3NCeUlkIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlQ29uZmlybSIsImFuc3dlciIsIndpbmRvdyIsImNvbmZpcm0iLCJkZWxldGVQYXJ0ZW5haXJlIiwic2x1ZyIsImZvbnRTaXplIiwibWFwIiwicGFydGVuYWlyZUNhcmQiLCJpIiwiX2lkIiwidGl0cmUiLCJtYWlsIiwidGVsIiwiYWN0aWYiLCJjb2xvciIsImN1cnNvciIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJMaXN0QWxsUGFydGVuYWlyZUNhcmRzIiwicGFyYW1zIiwibm90Rm91bmQiLCJsaXN0ZVBhcnRlbmFpcmVCeUlkIiwicm91dGVyIiwicXVlcnkiLCJyZXN1bHQiLCJwcm9wcyIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBOztBQUVBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsT0FBb0M7QUFBQTs7QUFBQSxNQUFqQ0MsZUFBaUMsUUFBakNBLGVBQWlDO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUNoRSxNQUFNQyxLQUFLLEdBQUdDLHNFQUFTLENBQUMsT0FBRCxDQUF2Qjs7QUFEZ0Usa0JBRXRDQyxzREFBUSxD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TkMsc0dBQXNCLENBQUNELE9BQU8sQ0FBQ0UsTUFBUixDQUFlMUIsRUFBaEIsQ0FBdEIsQ0FBMENFLElBQTFDLENBQStDLFVBQUNDLElBQUQsRUFBVTtBQUN4REMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaLEVBQXFDRixJQUFyQzs7QUFDQSxrQkFBSUEsSUFBSSxDQUFDVCxLQUFULEVBQWdCO0FBQ2ZVLHVCQUFPLENBQUNDLEdBQVIsQ0FBWVgsS0FBWjtBQUNBLHVCQUFPO0FBQ05pQywwQkFBUSxFQUFFO0FBREosaUJBQVA7QUFHQSxlQUxELE1BS087QUFDTkMsdUdBQW1CLENBQUNDLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhOUIsRUFBZCxFQUFrQlosS0FBbEIsQ0FBbkIsQ0FBNENjLElBQTVDLENBQWlELFVBQUM2QixNQUFELEVBQVk7QUFDNUQzQix5QkFBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQjBCLE1BQXRCOztBQUNBLHNCQUFJQSxNQUFNLENBQUNyQyxLQUFYLEVBQWtCO0FBQ2pCVSwyQkFBTyxDQUFDQyxHQUFSLENBQVlYLEtBQVo7QUFDQSxtQkFGRCxNQUVPO0FBQ04sMkJBQU87QUFDTnNDLDJCQUFLLEVBQUU7QUFBRTlDLHVDQUFlLEVBQUVpQixJQUFuQjtBQUF5QmhCLGlDQUFTLEVBQUU0QztBQUFwQztBQURELHFCQUFQO0FBR0E7QUFDRCxpQkFURDtBQVVBO0FBQ0QsYUFuQkQ7O0FBRE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQXVCUSxxRUFBQUUsOERBQVUsQ0FBQ2hELG9CQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2dlc3Rpb25EaXZlcnMvcGFydGVuYWlyZXMvbWFuYWdlL1tpZF0uNWVhOTk2YjhmMzQ4N2MzMDQyNzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYmxlIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgeyBBbGVydCwgU3Bpbm5lciB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuaW1wb3J0IHtcclxuXHRMaXN0QWxsUGFydGVuYWlyZUNhcmRzLFxyXG5cdGxpc3RlUGFydGVuYWlyZUJ5SWQsXHJcblx0cmVtb3ZlUGFydGVuYWlyZUNhcmQsXHJcbn0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9wYXJ0ZW5haXJlc0FjdGlvbnMnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBsaXN0UGhvdG9zQnlJZCB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5cclxuY29uc3QgTGlzdFBhcnRlbmFpcmVzQ2FyZHMgPSAoeyBwYXJ0ZW5haXJlQ2FyZHMsIGNhdGVnb3JpZSB9KSA9PiB7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblx0Y29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Ly8gY29uc3QgW2NhdGVnb3JpZSwgc2V0Q2F0ZWdvcmllXSA9IHVzZVN0YXRlKCcnKTtcclxuXHQvLyBjb25zdCBbcGFydGVuYWlyZUNhcmRzLCBzZXRQYXJ0ZW5haXJlQ2FyZHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHRjb25zdCBbdmFsdWVzLCBzZXR2YWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRlcnJvcjogJycsXHJcblx0XHRzdWNjZXNzOiAnJyxcclxuXHRcdG1lc3NhZ2U6ICcnLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBnZXRJbWFnZUJ5SWQgPSAoaWQpID0+IHtcclxuXHRcdGxpc3RQaG90b3NCeUlkKGlkKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdkYXRhIHZhdXQnLCBkYXRhKTtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gc2V0SW1hZ2UoeyBpbWFnZTogZGF0YSB9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Ly8gY29uc3QgcmVjdXBDYXRlZ29yaWUgPSAoKSA9PiB7XHJcblx0Ly8gXHRsaXN0ZVBhcnRlbmFpcmVCeUlkKHJvdXRlci5xdWVyeS5pZCwgdG9rZW4pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdC8vIFx0XHRjb25zb2xlLmxvZygncmVzdWx0JywgcmVzdWx0KTtcclxuXHQvLyBcdFx0aWYgKHJlc3VsdC5lcnJvcikge1xyXG5cdC8vIFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHQvLyBcdFx0fSBlbHNlIHtcclxuXHQvLyBcdFx0XHRzZXRDYXRlZ29yaWUocmVzdWx0KTtcclxuXHQvLyBcdFx0fVxyXG5cdC8vIFx0fSk7XHJcblx0Ly8gfTtcclxuXHJcblx0Ly8gdXNlRWZmZWN0KCgpID0+IHtcclxuXHQvLyBcdC8vVGVzdGVyIGVuIHNlcnZlcnNpZGVwcm9wcyBwbHV0w7R0IHF1J2VuIGhvb2tzXHJcblx0Ly8gXHRyZWN1cENhdGVnb3JpZSgpO1xyXG5cdC8vIFx0Ly8gbGlzdGVyTGVzUGFydGVuYWlyZUNhcmRzKCk7XHJcblx0Ly8gfSwgW10pO1xyXG5cclxuXHRjb25zdCB7IGxvYWRpbmcsIHN1Y2Nlc3MsIGVycm9yLCBtZXNzYWdlIH0gPSB2YWx1ZXM7XHJcblxyXG5cdC8vIGNvbnN0IGxpc3Rlckxlc1BhcnRlbmFpcmVDYXJkcyA9ICgpID0+IHtcclxuXHQvLyBcdExpc3RBbGxQYXJ0ZW5haXJlQ2FyZHMocm91dGVyLnF1ZXJ5LmlkKS50aGVuKChkYXRhKSA9PiB7XHJcblx0Ly8gXHRcdGNvbnNvbGUubG9nKCdsaXN0ZSBkZXMgcGFydGVuYWlyZXMnLCBkYXRhKTtcclxuXHQvLyBcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHQvLyBcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0Ly8gXHRcdH0gZWxzZSB7XHJcblx0Ly8gXHRcdFx0c2V0UGFydGVuYWlyZUNhcmRzKC4uLnBhcnRlbmFpcmVDYXJkcywgZGF0YSk7XHJcblx0Ly8gXHRcdH1cclxuXHQvLyBcdH0pO1xyXG5cdC8vIH07XHJcblxyXG5cdC8vIGNvbnN0IGRlbGV0ZVBhcnRlbmFpcmUgPSAoaWQpID0+IHtcclxuXHQvLyBcdHNldHZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHQvLyBcdGNvbnNvbGUubG9nKCdpZCcsIGlkKTtcclxuXHQvLyBcdHJlbW92ZVBhcnRlbmFpcmUoaWQsIHRva2VuKS50aGVuKChkYXRhKSA9PiB7XHJcblx0Ly8gXHRcdGNvbnNvbGUubG9nKCdkYXRhIHZhdXQnLCBkYXRhKTtcclxuXHQvLyBcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHQvLyBcdFx0XHRzZXR2YWx1ZXMoe1xyXG5cdC8vIFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdC8vIFx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0Ly8gXHRcdFx0XHRlcnJvcjogdHJ1ZSxcclxuXHQvLyBcdFx0XHRcdHN1Y2Nlc3M6IGZhbHNlLFxyXG5cdC8vIFx0XHRcdH0pO1xyXG5cdC8vIFx0XHR9IGVsc2Uge1xyXG5cdC8vIFx0XHRcdHNldHZhbHVlcyh7XHJcblx0Ly8gXHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0Ly8gXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHQvLyBcdFx0XHRcdGVycm9yOiAnJyxcclxuXHQvLyBcdFx0XHRcdHN1Y2Nlc3M6IHRydWUsXHJcblx0Ly8gXHRcdFx0XHRtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsXHJcblx0Ly8gXHRcdFx0fSk7XHJcblx0Ly8gXHRcdH1cclxuXHQvLyBcdH0pO1xyXG5cdC8vIH07XHJcblxyXG5cdGNvbnN0IGRlbGV0ZUNvbmZpcm0gPSAoaWQpID0+IHtcclxuXHRcdGxldCBhbnN3ZXIgPSB3aW5kb3cuY29uZmlybShcclxuXHRcdFx0YFN1cHByZXNzaW9uIGR1IHBhcnRlbmFpcmUgJHtpZH0sIMOqdGVzLXZvdXMgc8O7ciA/YFxyXG5cdFx0KTtcclxuXHRcdGlmIChhbnN3ZXIpIHtcclxuXHRcdFx0ZGVsZXRlUGFydGVuYWlyZShpZCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxoMz5cclxuXHRcdFx0XHRMaXN0ZSBkZXMgcGFydGVuYWlyZXMgcG91ciBsYSBjYXTDqWdvcmlleycgJ31cclxuXHRcdFx0XHQ8c3Ryb25nPntjYXRlZ29yaWUuc2x1Z308L3N0cm9uZz4seycgJ31cclxuXHRcdFx0XHQ8c21hbGwgc3R5bGU9e3sgZm9udFNpemU6ICcxM3B4JyB9fT5cclxuXHRcdFx0XHRcdChwZW5zZXogw6AgYWpvdXRlciBkZXMgaW1hZ2VzIGRhbnMgbGEgY2F0w6lnb3JpZVxyXG5cdFx0XHRcdFx0Y29ycmVzcG9uZGFudGUgYXZhbnQgZGUgY3LDqWVyIHVuIHBhcnRlbmFpcmUpXHJcblx0XHRcdFx0PC9zbWFsbD5cclxuXHRcdFx0PC9oMz5cclxuXHRcdFx0e2xvYWRpbmcgJiYgPFNwaW5uZXIgLz59XHJcblx0XHRcdHtzdWNjZXNzICYmIDxBbGVydCBjb2xvcj0nc3VjY2Vzcyc+e21lc3NhZ2V9PC9BbGVydD59XHJcblx0XHRcdHtlcnJvciAmJiA8QWxlcnQgY29sb3I9J2Rhbmdlcic+VW5lIGVycmV1ciBlc3Qgc3VydmVudWU8L0FsZXJ0Pn1cclxuXHRcdFx0PFRhYmxlPlxyXG5cdFx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRoPiNJRDwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5UaXRyZTwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5JbWFnZTwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5tYWlsPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPnRlbDwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5BY3RpZjwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aCBjb2xTcGFuPScyJz5Nb2RpZi9TdXBwcjwvdGg+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0e3BhcnRlbmFpcmVDYXJkcy5tYXAoKHBhcnRlbmFpcmVDYXJkLCBpKSA9PiAoXHJcblx0XHRcdFx0XHRcdDx0ciBjbGFzc05hbWU9J210LTUnIGtleT17aX0+XHJcblx0XHRcdFx0XHRcdFx0PHRoPntwYXJ0ZW5haXJlQ2FyZC5faWR9PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+e3BhcnRlbmFpcmVDYXJkLnRpdHJlfTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPntnZXRJbWFnZUJ5SWQocGFydGVuYWlyZUNhcmQuaW1hZ2UpfTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPntwYXJ0ZW5haXJlQ2FyZC5tYWlsfTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPntwYXJ0ZW5haXJlQ2FyZC50ZWx9PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0XHR7cGFydGVuYWlyZUNhcmQuYWN0aWYgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9J2ZhcyBmYS1jaGVjay1zcXVhcmUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz0nZmFzIGZhLXRpbWVzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdDwvdGg+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rXHJcblx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9e2AvYWRtaW4vY3J1ZC9kaXZlcnMvcGFydGVuYWlyZS8ke3BhcnRlbmFpcmVDYXJkLl9pZH1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmFzIGZhLXBlbmNpbC1ydWxlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGNvbG9yOiAnb3JhbmdlJyB9fT48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVsZXRlQ29uZmlybShwYXJ0ZW5haXJlQ2FyZC5faWQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmYXMgZmEtdHJhc2gtYWx0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAncmVkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdXJzb3I6ICdwb2ludGVyJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHQ8L1RhYmxlPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG5cdExpc3RBbGxQYXJ0ZW5haXJlQ2FyZHMoY29udGV4dC5wYXJhbXMuaWQpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKCdsaXN0ZSBkZXMgcGFydGVuYWlyZXMnLCBkYXRhKTtcclxuXHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRub3RGb3VuZDogdHJ1ZSxcclxuXHRcdFx0fTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxpc3RlUGFydGVuYWlyZUJ5SWQocm91dGVyLnF1ZXJ5LmlkLCB0b2tlbikudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3Jlc3VsdCcsIHJlc3VsdCk7XHJcblx0XHRcdFx0aWYgKHJlc3VsdC5lcnJvcikge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0XHRwcm9wczogeyBwYXJ0ZW5haXJlQ2FyZHM6IGRhdGEsIGNhdGVnb3JpZTogcmVzdWx0IH0sXHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoTGlzdFBhcnRlbmFpcmVzQ2FyZHMpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9