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

  var loading = values.loading,
      success = values.success,
      error = values.error,
      message = values.message;

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
  // const listerLesPartenaireCards = () => {
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
      lineNumber: 102,
      columnNumber: 4
    }
  }, "Liste des partenaires pour la cat\xE9gorie ", console.log(categorie), __jsx("small", {
    style: {
      fontSize: '13px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 5
    }
  }, "(pensez \xE0 ajouter des images dans la cat\xE9gorie correspondante avant de cr\xE9er un partenaire)")), loading && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Spinner"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 16
    }
  }), success && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    color: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 16
    }
  }, message), error && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    color: "danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 14
    }
  }, "Une erreur est survenue"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Table"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 4
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 6
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, "#ID"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, "Titre"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, "Image"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, "mail"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, "tel"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, "Actif"), __jsx("th", {
    colSpan: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, "Modif/Suppr"))), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 5
    }
  }, console.log('partenaireCards', partenaireCards))));
};

_s(ListPartenairesCards, "0yZbg9QMLDsZIXTPOHMijw8lchs=");

_c = ListPartenairesCards;
function getServerSideProps(_x) {
  return _getServerSideProps.apply(this, arguments);
}

function _getServerSideProps() {
  _getServerSideProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var token;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_5__["getCookie"])('token');
            return _context.abrupt("return", Object(_actions_partenairesActions__WEBPACK_IMPORTED_MODULE_6__["ListAllPartenaireCards"])(context.params.id).then(function (data) {
              console.log('liste des partenaires', data);

              if (data.error) {
                console.log(error);
                return {
                  notFound: true
                };
              } else {
                return Object(_actions_partenairesActions__WEBPACK_IMPORTED_MODULE_6__["listePartenaireById"])(router.query.id, token).then(function (result) {
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
            }));

          case 2:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0UGFydGVuYWlyZXNDYXJkcy5qcyJdLCJuYW1lcyI6WyJMaXN0UGFydGVuYWlyZXNDYXJkcyIsInBhcnRlbmFpcmVDYXJkcyIsImNhdGVnb3JpZSIsInVzZVN0YXRlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImxvYWRpbmciLCJlcnJvciIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwidmFsdWVzIiwic2V0dmFsdWVzIiwiZ2V0SW1hZ2VCeUlkIiwiaWQiLCJsaXN0UGhvdG9zQnlJZCIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRlbGV0ZUNvbmZpcm0iLCJhbnN3ZXIiLCJ3aW5kb3ciLCJjb25maXJtIiwiZGVsZXRlUGFydGVuYWlyZSIsImZvbnRTaXplIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInRva2VuIiwiZ2V0Q29va2llIiwiTGlzdEFsbFBhcnRlbmFpcmVDYXJkcyIsInBhcmFtcyIsIm5vdEZvdW5kIiwibGlzdGVQYXJ0ZW5haXJlQnlJZCIsInJvdXRlciIsInF1ZXJ5IiwicmVzdWx0IiwicHJvcHMiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTs7QUFFQSxJQUFNQSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLE9BQW9DO0FBQUE7O0FBQUEsTUFBakNDLGVBQWlDLFFBQWpDQSxlQUFpQztBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7O0FBQUEsa0JBQ3RDQyxzREFBUSxDQUFDLEVBQUQsQ0FEOEI7QUFBQSxNQUN6REMsS0FEeUQ7QUFBQSxNQUNsREMsUUFEa0QsaUJBRWhFO0FBQ0E7OztBQUhnRSxtQkFLcENGLHNEQUFRLENBQUM7QUFDcENHLFdBQU8sRUFBRSxLQUQyQjtBQUVwQ0MsU0FBSyxFQUFFLEVB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QUFFZSxJQUFuQjtBQUF5QmQsaUNBQVMsRUFBRWlDO0FBQXBDO0FBREQscUJBQVA7QUFHQTtBQUNELGlCQVZLLENBQVA7QUFZQTtBQUNELGFBckJNLENBRkQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQTBCUSxxRUFBQUUsOERBQVUsQ0FBQ3JDLG9CQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2dlc3Rpb25EaXZlcnMvcGFydGVuYWlyZXMvbWFuYWdlL1tpZF0uZDk1NjJiZThiZTFkYjQ2ZjcxZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYmxlIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgeyBBbGVydCwgU3Bpbm5lciB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuaW1wb3J0IHtcclxuXHRMaXN0QWxsUGFydGVuYWlyZUNhcmRzLFxyXG5cdGxpc3RlUGFydGVuYWlyZUJ5SWQsXHJcblx0cmVtb3ZlUGFydGVuYWlyZUNhcmQsXHJcbn0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9wYXJ0ZW5haXJlc0FjdGlvbnMnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBsaXN0UGhvdG9zQnlJZCB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5cclxuY29uc3QgTGlzdFBhcnRlbmFpcmVzQ2FyZHMgPSAoeyBwYXJ0ZW5haXJlQ2FyZHMsIGNhdGVnb3JpZSB9KSA9PiB7XHJcblx0Y29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Ly8gY29uc3QgW2NhdGVnb3JpZSwgc2V0Q2F0ZWdvcmllXSA9IHVzZVN0YXRlKCcnKTtcclxuXHQvLyBjb25zdCBbcGFydGVuYWlyZUNhcmRzLCBzZXRQYXJ0ZW5haXJlQ2FyZHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHRjb25zdCBbdmFsdWVzLCBzZXR2YWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRlcnJvcjogJycsXHJcblx0XHRzdWNjZXNzOiAnJyxcclxuXHRcdG1lc3NhZ2U6ICcnLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCB7IGxvYWRpbmcsIHN1Y2Nlc3MsIGVycm9yLCBtZXNzYWdlIH0gPSB2YWx1ZXM7XHJcblx0Y29uc3QgZ2V0SW1hZ2VCeUlkID0gKGlkKSA9PiB7XHJcblx0XHRsaXN0UGhvdG9zQnlJZChpZCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZGF0YSB2YXV0JywgZGF0YSk7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIHNldEltYWdlKHsgaW1hZ2U6IGRhdGEgfSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdC8vIGNvbnN0IHJlY3VwQ2F0ZWdvcmllID0gKCkgPT4ge1xyXG5cdC8vIFx0bGlzdGVQYXJ0ZW5haXJlQnlJZChyb3V0ZXIucXVlcnkuaWQsIHRva2VuKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHQvLyBcdFx0Y29uc29sZS5sb2coJ3Jlc3VsdCcsIHJlc3VsdCk7XHJcblx0Ly8gXHRcdGlmIChyZXN1bHQuZXJyb3IpIHtcclxuXHQvLyBcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0Ly8gXHRcdH0gZWxzZSB7XHJcblx0Ly8gXHRcdFx0c2V0Q2F0ZWdvcmllKHJlc3VsdCk7XHJcblx0Ly8gXHRcdH1cclxuXHQvLyBcdH0pO1xyXG5cdC8vIH07XHJcblxyXG5cdC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0Ly8gXHQvL1Rlc3RlciBlbiBzZXJ2ZXJzaWRlcHJvcHMgcGx1dMO0dCBxdSdlbiBob29rc1xyXG5cdC8vIFx0cmVjdXBDYXRlZ29yaWUoKTtcclxuXHQvLyBcdC8vIGxpc3Rlckxlc1BhcnRlbmFpcmVDYXJkcygpO1xyXG5cdC8vIH0sIFtdKTtcclxuXHJcblx0Ly8gY29uc3QgbGlzdGVyTGVzUGFydGVuYWlyZUNhcmRzID0gKCkgPT4ge1xyXG5cdC8vIFx0TGlzdEFsbFBhcnRlbmFpcmVDYXJkcyhyb3V0ZXIucXVlcnkuaWQpLnRoZW4oKGRhdGEpID0+IHtcclxuXHQvLyBcdFx0Y29uc29sZS5sb2coJ2xpc3RlIGRlcyBwYXJ0ZW5haXJlcycsIGRhdGEpO1xyXG5cdC8vIFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdC8vIFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHQvLyBcdFx0fSBlbHNlIHtcclxuXHQvLyBcdFx0XHRzZXRQYXJ0ZW5haXJlQ2FyZHMoLi4ucGFydGVuYWlyZUNhcmRzLCBkYXRhKTtcclxuXHQvLyBcdFx0fVxyXG5cdC8vIFx0fSk7XHJcblx0Ly8gfTtcclxuXHJcblx0Ly8gY29uc3QgZGVsZXRlUGFydGVuYWlyZSA9IChpZCkgPT4ge1xyXG5cdC8vIFx0c2V0dmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdC8vIFx0Y29uc29sZS5sb2coJ2lkJywgaWQpO1xyXG5cdC8vIFx0cmVtb3ZlUGFydGVuYWlyZShpZCwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuXHQvLyBcdFx0Y29uc29sZS5sb2coJ2RhdGEgdmF1dCcsIGRhdGEpO1xyXG5cdC8vIFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdC8vIFx0XHRcdHNldHZhbHVlcyh7XHJcblx0Ly8gXHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0Ly8gXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHQvLyBcdFx0XHRcdGVycm9yOiB0cnVlLFxyXG5cdC8vIFx0XHRcdFx0c3VjY2VzczogZmFsc2UsXHJcblx0Ly8gXHRcdFx0fSk7XHJcblx0Ly8gXHRcdH0gZWxzZSB7XHJcblx0Ly8gXHRcdFx0c2V0dmFsdWVzKHtcclxuXHQvLyBcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHQvLyBcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdC8vIFx0XHRcdFx0ZXJyb3I6ICcnLFxyXG5cdC8vIFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcclxuXHQvLyBcdFx0XHRcdG1lc3NhZ2U6IGRhdGEubWVzc2FnZSxcclxuXHQvLyBcdFx0XHR9KTtcclxuXHQvLyBcdFx0fVxyXG5cdC8vIFx0fSk7XHJcblx0Ly8gfTtcclxuXHJcblx0Y29uc3QgZGVsZXRlQ29uZmlybSA9IChpZCkgPT4ge1xyXG5cdFx0bGV0IGFuc3dlciA9IHdpbmRvdy5jb25maXJtKFxyXG5cdFx0XHRgU3VwcHJlc3Npb24gZHUgcGFydGVuYWlyZSAke2lkfSwgw6p0ZXMtdm91cyBzw7tyID9gXHJcblx0XHQpO1xyXG5cdFx0aWYgKGFuc3dlcikge1xyXG5cdFx0XHRkZWxldGVQYXJ0ZW5haXJlKGlkKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGgzPlxyXG5cdFx0XHRcdExpc3RlIGRlcyBwYXJ0ZW5haXJlcyBwb3VyIGxhIGNhdMOpZ29yaWUge2NvbnNvbGUubG9nKGNhdGVnb3JpZSl9XHJcblx0XHRcdFx0ey8qIDxzdHJvbmc+e2NhdGVnb3JpZS5zbHVnfTwvc3Ryb25nPix7JyAnfSAqL31cclxuXHRcdFx0XHQ8c21hbGwgc3R5bGU9e3sgZm9udFNpemU6ICcxM3B4JyB9fT5cclxuXHRcdFx0XHRcdChwZW5zZXogw6AgYWpvdXRlciBkZXMgaW1hZ2VzIGRhbnMgbGEgY2F0w6lnb3JpZVxyXG5cdFx0XHRcdFx0Y29ycmVzcG9uZGFudGUgYXZhbnQgZGUgY3LDqWVyIHVuIHBhcnRlbmFpcmUpXHJcblx0XHRcdFx0PC9zbWFsbD5cclxuXHRcdFx0PC9oMz5cclxuXHRcdFx0e2xvYWRpbmcgJiYgPFNwaW5uZXIgLz59XHJcblx0XHRcdHtzdWNjZXNzICYmIDxBbGVydCBjb2xvcj0nc3VjY2Vzcyc+e21lc3NhZ2V9PC9BbGVydD59XHJcblx0XHRcdHtlcnJvciAmJiA8QWxlcnQgY29sb3I9J2Rhbmdlcic+VW5lIGVycmV1ciBlc3Qgc3VydmVudWU8L0FsZXJ0Pn1cclxuXHRcdFx0PFRhYmxlPlxyXG5cdFx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRoPiNJRDwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5UaXRyZTwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5JbWFnZTwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5tYWlsPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPnRlbDwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5BY3RpZjwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aCBjb2xTcGFuPScyJz5Nb2RpZi9TdXBwcjwvdGg+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0e2NvbnNvbGUubG9nKCdwYXJ0ZW5haXJlQ2FyZHMnLCBwYXJ0ZW5haXJlQ2FyZHMpfVxyXG5cdFx0XHRcdFx0ey8qIHtwYXJ0ZW5haXJlQ2FyZHMubWFwKChwYXJ0ZW5haXJlQ2FyZCwgaSkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8dHIgY2xhc3NOYW1lPSdtdC01JyBrZXk9e2l9PlxyXG5cdFx0XHRcdFx0XHRcdDx0aD57cGFydGVuYWlyZUNhcmQuX2lkfTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPntwYXJ0ZW5haXJlQ2FyZC50aXRyZX08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD57Z2V0SW1hZ2VCeUlkKHBhcnRlbmFpcmVDYXJkLmltYWdlKX08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD57cGFydGVuYWlyZUNhcmQubWFpbH08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD57cGFydGVuYWlyZUNhcmQudGVsfTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0e3BhcnRlbmFpcmVDYXJkLmFjdGlmID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPSdmYXMgZmEtY2hlY2stc3F1YXJlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9J2ZhcyBmYS10aW1lcydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRocmVmPXtgL2FkbWluL2NydWQvZGl2ZXJzL3BhcnRlbmFpcmUvJHtwYXJ0ZW5haXJlQ2FyZC5faWR9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZhcyBmYS1wZW5jaWwtcnVsZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogJ29yYW5nZScgfX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlbGV0ZUNvbmZpcm0ocGFydGVuYWlyZUNhcmQuX2lkKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmFzIGZhLXRyYXNoLWFsdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3JlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0KSl9ICovfVxyXG5cdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdDwvVGFibGU+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblx0cmV0dXJuIExpc3RBbGxQYXJ0ZW5haXJlQ2FyZHMoY29udGV4dC5wYXJhbXMuaWQpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKCdsaXN0ZSBkZXMgcGFydGVuYWlyZXMnLCBkYXRhKTtcclxuXHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRub3RGb3VuZDogdHJ1ZSxcclxuXHRcdFx0fTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBsaXN0ZVBhcnRlbmFpcmVCeUlkKHJvdXRlci5xdWVyeS5pZCwgdG9rZW4pLnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ3Jlc3VsdCcsIHJlc3VsdCk7XHJcblx0XHRcdFx0XHRpZiAocmVzdWx0LmVycm9yKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHRcdFx0cHJvcHM6IHsgcGFydGVuYWlyZUNhcmRzOiBkYXRhLCBjYXRlZ29yaWU6IHJlc3VsdCB9LFxyXG5cdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihMaXN0UGFydGVuYWlyZXNDYXJkcyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=