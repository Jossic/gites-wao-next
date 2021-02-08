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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0UGFydGVuYWlyZXNDYXJkcy5qcyJdLCJuYW1lcyI6WyJMaXN0UGFydGVuYWlyZXNDYXJkcyIsInBhcnRlbmFpcmVDYXJkcyIsImNhdGVnb3JpZSIsInVzZVN0YXRlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImxvYWRpbmciLCJlcnJvciIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwidmFsdWVzIiwic2V0dmFsdWVzIiwiZ2V0SW1hZ2VCeUlkIiwiaWQiLCJsaXN0UGhvdG9zQnlJZCIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRlbGV0ZUNvbmZpcm0iLCJhbnN3ZXIiLCJ3aW5kb3ciLCJjb25maXJtIiwiZGVsZXRlUGFydGVuYWlyZSIsImZvbnRTaXplIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInRva2VuIiwiZ2V0Q29va2llIiwiTGlzdEFsbFBhcnRlbmFpcmVDYXJkcyIsInBhcmFtcyIsIm5vdEZvdW5kIiwibGlzdGVQYXJ0ZW5haXJlQnlJZCIsInJvdXRlciIsInF1ZXJ5IiwicmVzdWx0IiwicHJvcHMiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTs7QUFFQSxJQUFNQSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLE9BQW9DO0FBQUE7O0FBQUEsTUFBakNDLGVBQWlDLFFBQWpDQSxlQUFpQztBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7O0FBQUEsa0JBQ3RDQyxzREFBUSxDQUFDLEVBQUQsQ0FEOEI7QUFBQSxNQUN6REMsS0FEeUQ7QUFBQSxNQUNsREMsUUFEa0QsaUJBRWhFO0FBQ0E7OztBQUhnRSxtQkFLcENGLHNEQUFRLENBQUM7QUFDcENHLFdBQU8sRUFBRSxLQUQyQjtBQUVwQ0MsU0FBSyxFQUFFLEVB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O0FBQXlCZCxpQ0FBUyxFQUFFaUM7QUFBcEM7QUFERCxxQkFBUDtBQUdBO0FBQ0QsaUJBVEQ7QUFVQTtBQUNELGFBbkJEOztBQUZNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUF3QlEscUVBQUFFLDhEQUFVLENBQUNyQyxvQkFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9nZXN0aW9uRGl2ZXJzL3BhcnRlbmFpcmVzL21hbmFnZS9baWRdLjExMDg2ZDQ5M2NhMzQxNTE5ZDE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWJsZSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHsgQWxlcnQsIFNwaW5uZXIgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmltcG9ydCB7XHJcblx0TGlzdEFsbFBhcnRlbmFpcmVDYXJkcyxcclxuXHRsaXN0ZVBhcnRlbmFpcmVCeUlkLFxyXG5cdHJlbW92ZVBhcnRlbmFpcmVDYXJkLFxyXG59IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvcGFydGVuYWlyZXNBY3Rpb25zJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgbGlzdFBob3Rvc0J5SWQgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuXHJcbmNvbnN0IExpc3RQYXJ0ZW5haXJlc0NhcmRzID0gKHsgcGFydGVuYWlyZUNhcmRzLCBjYXRlZ29yaWUgfSkgPT4ge1xyXG5cdGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoW10pO1xyXG5cdC8vIGNvbnN0IFtjYXRlZ29yaWUsIHNldENhdGVnb3JpZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Ly8gY29uc3QgW3BhcnRlbmFpcmVDYXJkcywgc2V0UGFydGVuYWlyZUNhcmRzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgW3ZhbHVlcywgc2V0dmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuXHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0ZXJyb3I6ICcnLFxyXG5cdFx0c3VjY2VzczogJycsXHJcblx0XHRtZXNzYWdlOiAnJyxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgeyBsb2FkaW5nLCBzdWNjZXNzLCBlcnJvciwgbWVzc2FnZSB9ID0gdmFsdWVzO1xyXG5cdGNvbnN0IGdldEltYWdlQnlJZCA9IChpZCkgPT4ge1xyXG5cdFx0bGlzdFBob3Rvc0J5SWQoaWQpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2RhdGEgdmF1dCcsIGRhdGEpO1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBzZXRJbWFnZSh7IGltYWdlOiBkYXRhIH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHQvLyBjb25zdCByZWN1cENhdGVnb3JpZSA9ICgpID0+IHtcclxuXHQvLyBcdGxpc3RlUGFydGVuYWlyZUJ5SWQocm91dGVyLnF1ZXJ5LmlkLCB0b2tlbikudGhlbigocmVzdWx0KSA9PiB7XHJcblx0Ly8gXHRcdGNvbnNvbGUubG9nKCdyZXN1bHQnLCByZXN1bHQpO1xyXG5cdC8vIFx0XHRpZiAocmVzdWx0LmVycm9yKSB7XHJcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdC8vIFx0XHR9IGVsc2Uge1xyXG5cdC8vIFx0XHRcdHNldENhdGVnb3JpZShyZXN1bHQpO1xyXG5cdC8vIFx0XHR9XHJcblx0Ly8gXHR9KTtcclxuXHQvLyB9O1xyXG5cclxuXHQvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdC8vIFx0Ly9UZXN0ZXIgZW4gc2VydmVyc2lkZXByb3BzIHBsdXTDtHQgcXUnZW4gaG9va3NcclxuXHQvLyBcdHJlY3VwQ2F0ZWdvcmllKCk7XHJcblx0Ly8gXHQvLyBsaXN0ZXJMZXNQYXJ0ZW5haXJlQ2FyZHMoKTtcclxuXHQvLyB9LCBbXSk7XHJcblxyXG5cdC8vIGNvbnN0IGxpc3Rlckxlc1BhcnRlbmFpcmVDYXJkcyA9ICgpID0+IHtcclxuXHQvLyBcdExpc3RBbGxQYXJ0ZW5haXJlQ2FyZHMocm91dGVyLnF1ZXJ5LmlkKS50aGVuKChkYXRhKSA9PiB7XHJcblx0Ly8gXHRcdGNvbnNvbGUubG9nKCdsaXN0ZSBkZXMgcGFydGVuYWlyZXMnLCBkYXRhKTtcclxuXHQvLyBcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHQvLyBcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0Ly8gXHRcdH0gZWxzZSB7XHJcblx0Ly8gXHRcdFx0c2V0UGFydGVuYWlyZUNhcmRzKC4uLnBhcnRlbmFpcmVDYXJkcywgZGF0YSk7XHJcblx0Ly8gXHRcdH1cclxuXHQvLyBcdH0pO1xyXG5cdC8vIH07XHJcblxyXG5cdC8vIGNvbnN0IGRlbGV0ZVBhcnRlbmFpcmUgPSAoaWQpID0+IHtcclxuXHQvLyBcdHNldHZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHQvLyBcdGNvbnNvbGUubG9nKCdpZCcsIGlkKTtcclxuXHQvLyBcdHJlbW92ZVBhcnRlbmFpcmUoaWQsIHRva2VuKS50aGVuKChkYXRhKSA9PiB7XHJcblx0Ly8gXHRcdGNvbnNvbGUubG9nKCdkYXRhIHZhdXQnLCBkYXRhKTtcclxuXHQvLyBcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHQvLyBcdFx0XHRzZXR2YWx1ZXMoe1xyXG5cdC8vIFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdC8vIFx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0Ly8gXHRcdFx0XHRlcnJvcjogdHJ1ZSxcclxuXHQvLyBcdFx0XHRcdHN1Y2Nlc3M6IGZhbHNlLFxyXG5cdC8vIFx0XHRcdH0pO1xyXG5cdC8vIFx0XHR9IGVsc2Uge1xyXG5cdC8vIFx0XHRcdHNldHZhbHVlcyh7XHJcblx0Ly8gXHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0Ly8gXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHQvLyBcdFx0XHRcdGVycm9yOiAnJyxcclxuXHQvLyBcdFx0XHRcdHN1Y2Nlc3M6IHRydWUsXHJcblx0Ly8gXHRcdFx0XHRtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsXHJcblx0Ly8gXHRcdFx0fSk7XHJcblx0Ly8gXHRcdH1cclxuXHQvLyBcdH0pO1xyXG5cdC8vIH07XHJcblxyXG5cdGNvbnN0IGRlbGV0ZUNvbmZpcm0gPSAoaWQpID0+IHtcclxuXHRcdGxldCBhbnN3ZXIgPSB3aW5kb3cuY29uZmlybShcclxuXHRcdFx0YFN1cHByZXNzaW9uIGR1IHBhcnRlbmFpcmUgJHtpZH0sIMOqdGVzLXZvdXMgc8O7ciA/YFxyXG5cdFx0KTtcclxuXHRcdGlmIChhbnN3ZXIpIHtcclxuXHRcdFx0ZGVsZXRlUGFydGVuYWlyZShpZCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxoMz5cclxuXHRcdFx0XHRMaXN0ZSBkZXMgcGFydGVuYWlyZXMgcG91ciBsYSBjYXTDqWdvcmllIHtjb25zb2xlLmxvZyhjYXRlZ29yaWUpfVxyXG5cdFx0XHRcdHsvKiA8c3Ryb25nPntjYXRlZ29yaWUuc2x1Z308L3N0cm9uZz4seycgJ30gKi99XHJcblx0XHRcdFx0PHNtYWxsIHN0eWxlPXt7IGZvbnRTaXplOiAnMTNweCcgfX0+XHJcblx0XHRcdFx0XHQocGVuc2V6IMOgIGFqb3V0ZXIgZGVzIGltYWdlcyBkYW5zIGxhIGNhdMOpZ29yaWVcclxuXHRcdFx0XHRcdGNvcnJlc3BvbmRhbnRlIGF2YW50IGRlIGNyw6llciB1biBwYXJ0ZW5haXJlKVxyXG5cdFx0XHRcdDwvc21hbGw+XHJcblx0XHRcdDwvaDM+XHJcblx0XHRcdHtsb2FkaW5nICYmIDxTcGlubmVyIC8+fVxyXG5cdFx0XHR7c3VjY2VzcyAmJiA8QWxlcnQgY29sb3I9J3N1Y2Nlc3MnPnttZXNzYWdlfTwvQWxlcnQ+fVxyXG5cdFx0XHR7ZXJyb3IgJiYgPEFsZXJ0IGNvbG9yPSdkYW5nZXInPlVuZSBlcnJldXIgZXN0IHN1cnZlbnVlPC9BbGVydD59XHJcblx0XHRcdDxUYWJsZT5cclxuXHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0aD4jSUQ8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+VGl0cmU8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+SW1hZ2U8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+bWFpbDwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD50ZWw8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+QWN0aWY8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGggY29sU3Bhbj0nMic+TW9kaWYvU3VwcHI8L3RoPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdHtjb25zb2xlLmxvZygncGFydGVuYWlyZUNhcmRzJywgcGFydGVuYWlyZUNhcmRzKX1cclxuXHRcdFx0XHRcdHsvKiB7cGFydGVuYWlyZUNhcmRzLm1hcCgocGFydGVuYWlyZUNhcmQsIGkpID0+IChcclxuXHRcdFx0XHRcdFx0PHRyIGNsYXNzTmFtZT0nbXQtNScga2V5PXtpfT5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+e3BhcnRlbmFpcmVDYXJkLl9pZH08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD57cGFydGVuYWlyZUNhcmQudGl0cmV9PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+e2dldEltYWdlQnlJZChwYXJ0ZW5haXJlQ2FyZC5pbWFnZSl9PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+e3BhcnRlbmFpcmVDYXJkLm1haWx9PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+e3BhcnRlbmFpcmVDYXJkLnRlbH08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdHtwYXJ0ZW5haXJlQ2FyZC5hY3RpZiA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz0nZmFzIGZhLWNoZWNrLXNxdWFyZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPSdmYXMgZmEtdGltZXMnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHJcblx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aHJlZj17YC9hZG1pbi9jcnVkL2RpdmVycy9wYXJ0ZW5haXJlLyR7cGFydGVuYWlyZUNhcmQuX2lkfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmYXMgZmEtcGVuY2lsLXJ1bGVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgY29sb3I6ICdvcmFuZ2UnIH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWxldGVDb25maXJtKHBhcnRlbmFpcmVDYXJkLl9pZClcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZhcyBmYS10cmFzaC1hbHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdyZWQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnNvcjogJ3BvaW50ZXInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT48L2k+XHJcblx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdCkpfSAqL31cclxuXHRcdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHQ8L1RhYmxlPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cdExpc3RBbGxQYXJ0ZW5haXJlQ2FyZHMoY29udGV4dC5wYXJhbXMuaWQpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKCdsaXN0ZSBkZXMgcGFydGVuYWlyZXMnLCBkYXRhKTtcclxuXHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRub3RGb3VuZDogdHJ1ZSxcclxuXHRcdFx0fTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxpc3RlUGFydGVuYWlyZUJ5SWQocm91dGVyLnF1ZXJ5LmlkLCB0b2tlbikudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3Jlc3VsdCcsIHJlc3VsdCk7XHJcblx0XHRcdFx0aWYgKHJlc3VsdC5lcnJvcikge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0XHRwcm9wczogeyBwYXJ0ZW5haXJlQ2FyZHM6IGRhdGEsIGNhdGVnb3JpZTogcmVzdWx0IH0sXHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoTGlzdFBhcnRlbmFpcmVzQ2FyZHMpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9