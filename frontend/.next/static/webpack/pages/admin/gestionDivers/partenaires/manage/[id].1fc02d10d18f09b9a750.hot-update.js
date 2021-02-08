webpackHotUpdate_N_E("pages/admin/gestionDivers/partenaires/manage/[id]",{

/***/ "./components/admin/lists/ListPartenairesCards.js":
/*!********************************************************!*\
  !*** ./components/admin/lists/ListPartenairesCards.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var _actions_partenairesActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/partenairesActions */ "./actions/partenairesActions.js");
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../actions/giteActions */ "./actions/giteActions.js");
var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\lists\\ListPartenairesCards.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // import { withRouter } from 'next/router';



var ListPartenairesCards = function ListPartenairesCards(_ref) {
  _s();

  var partenaireCards = _ref.partenaireCards,
      categorie = _ref.categorie;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      image = _useState[0],
      setImage = _useState[1]; // const [categorie, setCategorie] = useState('');
  // const [partenaireCards, setPartenaireCards] = useState([]);


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
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
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_5__["listPhotosById"])(id).then(function (data) {
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 4
    }
  }, "Liste des partenaires pour la cat\xE9gorie ", console.log(categorie), __jsx("small", {
    style: {
      fontSize: '13px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }
  }, "(pensez \xE0 ajouter des images dans la cat\xE9gorie correspondante avant de cr\xE9er un partenaire)")), loading && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 16
    }
  }), success && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
    color: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 16
    }
  }, message), error && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
    color: "danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 14
    }
  }, "Une erreur est survenue"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 4
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 6
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, "#ID"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, "Titre"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, "Image"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, "mail"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, "tel"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, "Actif"), __jsx("th", {
    colSpan: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }, "Modif/Suppr"))), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 5
    }
  }, console.log('partenaireCards', partenaireCards))));
};

_s(ListPartenairesCards, "0yZbg9QMLDsZIXTPOHMijw8lchs=");

_c = ListPartenairesCards;
/* harmony default export */ __webpack_exports__["default"] = (ListPartenairesCards);

var _c;

$RefreshReg$(_c, "ListPartenairesCards");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0UGFydGVuYWlyZXNDYXJkcy5qcyJdLCJuYW1lcyI6WyJMaXN0UGFydGVuYWlyZXNDYXJkcyIsInBhcnRlbmFpcmVDYXJkcyIsImNhdGVnb3JpZSIsInVzZVN0YXRlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImxvYWRpbmciLCJlcnJvciIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwidmFsdWVzIiwic2V0dmFsdWVzIiwiZ2V0SW1hZ2VCeUlkIiwiaWQiLCJsaXN0UGhvdG9zQnlJZCIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRlbGV0ZUNvbmZpcm0iLCJhbnN3ZXIiLCJ3aW5kb3ciLCJjb25maXJtIiwiZGVsZXRlUGFydGVuYWlyZSIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQU9BOztBQUNBOztBQUVBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsT0FBb0M7QUFBQTs7QUFBQSxNQUFqQ0MsZUFBaUMsUUFBakNBLGVBQWlDO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjs7QUFBQSxrQkFDdENDLHNEQUFRLENBQUMsRUFBRCxDQUQ4QjtBQUFBLE1BQ3pEQyxLQUR5RDtBQUFBLE1BQ2xEQyxRQURrRCxpQkFFaEU7QUFDQTs7O0FBSGdFLG1CQUtwQ0Ysc0RBQVEsQ0FBQztBQUNwQ0csV0FBTyxFQUFFLEtBRDJCO0FBRXBDQyxTQUFLLEVBQUUsRUFGNkI7QUFHcENDLFdBQU8sRUFBRSxFQUgyQjtBQUlwQ0MsV0FBTyxFQUFFO0FBSjJCLEdBQUQsQ0FMNEI7QUFBQSxNQUt6REMsTUFMeUQ7QUFBQSxNQUtqREMsU0FMaUQ7O0FBQUEsTUFZeERMLE9BWndELEdBWW5CSSxNQVptQixDQVl4REosT0Fad0Q7QUFBQSxNQVkvQ0UsT0FaK0MsR0FZbkJFLE1BWm1CLENBWS9D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LENBREYsQ0FaRCxDQVpELENBREQ7QUF5RUEsQ0EvSkQ7O0dBQU1ELG9COztLQUFBQSxvQjtBQWlLU0EsbUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vZ2VzdGlvbkRpdmVycy9wYXJ0ZW5haXJlcy9tYW5hZ2UvW2lkXS4xZmMwMmQxMGQxOGYwOWI5YTc1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFibGUgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IEFsZXJ0LCBTcGlubmVyIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5pbXBvcnQge1xyXG5cdExpc3RBbGxQYXJ0ZW5haXJlQ2FyZHMsXHJcblx0bGlzdGVQYXJ0ZW5haXJlQnlJZCxcclxuXHRyZW1vdmVQYXJ0ZW5haXJlQ2FyZCxcclxufSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL3BhcnRlbmFpcmVzQWN0aW9ucyc7XHJcbi8vIGltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGxpc3RQaG90b3NCeUlkIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcblxyXG5jb25zdCBMaXN0UGFydGVuYWlyZXNDYXJkcyA9ICh7IHBhcnRlbmFpcmVDYXJkcywgY2F0ZWdvcmllIH0pID0+IHtcclxuXHRjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKFtdKTtcclxuXHQvLyBjb25zdCBbY2F0ZWdvcmllLCBzZXRDYXRlZ29yaWVdID0gdXNlU3RhdGUoJycpO1xyXG5cdC8vIGNvbnN0IFtwYXJ0ZW5haXJlQ2FyZHMsIHNldFBhcnRlbmFpcmVDYXJkc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldHZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdGVycm9yOiAnJyxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0bWVzc2FnZTogJycsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHsgbG9hZGluZywgc3VjY2VzcywgZXJyb3IsIG1lc3NhZ2UgfSA9IHZhbHVlcztcclxuXHJcblx0Y29uc3QgZ2V0SW1hZ2VCeUlkID0gKGlkKSA9PiB7XHJcblx0XHRsaXN0UGhvdG9zQnlJZChpZCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZGF0YSB2YXV0JywgZGF0YSk7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIHNldEltYWdlKHsgaW1hZ2U6IGRhdGEgfSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdC8vIGNvbnN0IHJlY3VwQ2F0ZWdvcmllID0gKCkgPT4ge1xyXG5cdC8vIFx0bGlzdGVQYXJ0ZW5haXJlQnlJZChyb3V0ZXIucXVlcnkuaWQsIHRva2VuKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHQvLyBcdFx0Y29uc29sZS5sb2coJ3Jlc3VsdCcsIHJlc3VsdCk7XHJcblx0Ly8gXHRcdGlmIChyZXN1bHQuZXJyb3IpIHtcclxuXHQvLyBcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0Ly8gXHRcdH0gZWxzZSB7XHJcblx0Ly8gXHRcdFx0c2V0Q2F0ZWdvcmllKHJlc3VsdCk7XHJcblx0Ly8gXHRcdH1cclxuXHQvLyBcdH0pO1xyXG5cdC8vIH07XHJcblxyXG5cdC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0Ly8gXHQvL1Rlc3RlciBlbiBzZXJ2ZXJzaWRlcHJvcHMgcGx1dMO0dCBxdSdlbiBob29rc1xyXG5cdC8vIFx0cmVjdXBDYXRlZ29yaWUoKTtcclxuXHQvLyBcdC8vIGxpc3Rlckxlc1BhcnRlbmFpcmVDYXJkcygpO1xyXG5cdC8vIH0sIFtdKTtcclxuXHJcblx0Ly8gY29uc3QgbGlzdGVyTGVzUGFydGVuYWlyZUNhcmRzID0gKCkgPT4ge1xyXG5cdC8vIFx0TGlzdEFsbFBhcnRlbmFpcmVDYXJkcyhyb3V0ZXIucXVlcnkuaWQpLnRoZW4oKGRhdGEpID0+IHtcclxuXHQvLyBcdFx0Y29uc29sZS5sb2coJ2xpc3RlIGRlcyBwYXJ0ZW5haXJlcycsIGRhdGEpO1xyXG5cdC8vIFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdC8vIFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHQvLyBcdFx0fSBlbHNlIHtcclxuXHQvLyBcdFx0XHRzZXRQYXJ0ZW5haXJlQ2FyZHMoLi4ucGFydGVuYWlyZUNhcmRzLCBkYXRhKTtcclxuXHQvLyBcdFx0fVxyXG5cdC8vIFx0fSk7XHJcblx0Ly8gfTtcclxuXHJcblx0Ly8gY29uc3QgZGVsZXRlUGFydGVuYWlyZSA9IChpZCkgPT4ge1xyXG5cdC8vIFx0c2V0dmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdC8vIFx0Y29uc29sZS5sb2coJ2lkJywgaWQpO1xyXG5cdC8vIFx0cmVtb3ZlUGFydGVuYWlyZShpZCwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuXHQvLyBcdFx0Y29uc29sZS5sb2coJ2RhdGEgdmF1dCcsIGRhdGEpO1xyXG5cdC8vIFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdC8vIFx0XHRcdHNldHZhbHVlcyh7XHJcblx0Ly8gXHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0Ly8gXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHQvLyBcdFx0XHRcdGVycm9yOiB0cnVlLFxyXG5cdC8vIFx0XHRcdFx0c3VjY2VzczogZmFsc2UsXHJcblx0Ly8gXHRcdFx0fSk7XHJcblx0Ly8gXHRcdH0gZWxzZSB7XHJcblx0Ly8gXHRcdFx0c2V0dmFsdWVzKHtcclxuXHQvLyBcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHQvLyBcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdC8vIFx0XHRcdFx0ZXJyb3I6ICcnLFxyXG5cdC8vIFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcclxuXHQvLyBcdFx0XHRcdG1lc3NhZ2U6IGRhdGEubWVzc2FnZSxcclxuXHQvLyBcdFx0XHR9KTtcclxuXHQvLyBcdFx0fVxyXG5cdC8vIFx0fSk7XHJcblx0Ly8gfTtcclxuXHJcblx0Y29uc3QgZGVsZXRlQ29uZmlybSA9IChpZCkgPT4ge1xyXG5cdFx0bGV0IGFuc3dlciA9IHdpbmRvdy5jb25maXJtKFxyXG5cdFx0XHRgU3VwcHJlc3Npb24gZHUgcGFydGVuYWlyZSAke2lkfSwgw6p0ZXMtdm91cyBzw7tyID9gXHJcblx0XHQpO1xyXG5cdFx0aWYgKGFuc3dlcikge1xyXG5cdFx0XHRkZWxldGVQYXJ0ZW5haXJlKGlkKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGgzPlxyXG5cdFx0XHRcdExpc3RlIGRlcyBwYXJ0ZW5haXJlcyBwb3VyIGxhIGNhdMOpZ29yaWUge2NvbnNvbGUubG9nKGNhdGVnb3JpZSl9XHJcblx0XHRcdFx0ey8qIDxzdHJvbmc+e2NhdGVnb3JpZS5zbHVnfTwvc3Ryb25nPix7JyAnfSAqL31cclxuXHRcdFx0XHQ8c21hbGwgc3R5bGU9e3sgZm9udFNpemU6ICcxM3B4JyB9fT5cclxuXHRcdFx0XHRcdChwZW5zZXogw6AgYWpvdXRlciBkZXMgaW1hZ2VzIGRhbnMgbGEgY2F0w6lnb3JpZVxyXG5cdFx0XHRcdFx0Y29ycmVzcG9uZGFudGUgYXZhbnQgZGUgY3LDqWVyIHVuIHBhcnRlbmFpcmUpXHJcblx0XHRcdFx0PC9zbWFsbD5cclxuXHRcdFx0PC9oMz5cclxuXHRcdFx0e2xvYWRpbmcgJiYgPFNwaW5uZXIgLz59XHJcblx0XHRcdHtzdWNjZXNzICYmIDxBbGVydCBjb2xvcj0nc3VjY2Vzcyc+e21lc3NhZ2V9PC9BbGVydD59XHJcblx0XHRcdHtlcnJvciAmJiA8QWxlcnQgY29sb3I9J2Rhbmdlcic+VW5lIGVycmV1ciBlc3Qgc3VydmVudWU8L0FsZXJ0Pn1cclxuXHRcdFx0PFRhYmxlPlxyXG5cdFx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRoPiNJRDwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5UaXRyZTwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5JbWFnZTwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5tYWlsPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPnRlbDwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5BY3RpZjwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aCBjb2xTcGFuPScyJz5Nb2RpZi9TdXBwcjwvdGg+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0e2NvbnNvbGUubG9nKCdwYXJ0ZW5haXJlQ2FyZHMnLCBwYXJ0ZW5haXJlQ2FyZHMpfVxyXG5cdFx0XHRcdFx0ey8qIHtwYXJ0ZW5haXJlQ2FyZHMubWFwKChwYXJ0ZW5haXJlQ2FyZCwgaSkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8dHIgY2xhc3NOYW1lPSdtdC01JyBrZXk9e2l9PlxyXG5cdFx0XHRcdFx0XHRcdDx0aD57cGFydGVuYWlyZUNhcmQuX2lkfTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPntwYXJ0ZW5haXJlQ2FyZC50aXRyZX08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD57Z2V0SW1hZ2VCeUlkKHBhcnRlbmFpcmVDYXJkLmltYWdlKX08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD57cGFydGVuYWlyZUNhcmQubWFpbH08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD57cGFydGVuYWlyZUNhcmQudGVsfTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0e3BhcnRlbmFpcmVDYXJkLmFjdGlmID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPSdmYXMgZmEtY2hlY2stc3F1YXJlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9J2ZhcyBmYS10aW1lcydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRocmVmPXtgL2FkbWluL2NydWQvZGl2ZXJzL3BhcnRlbmFpcmUvJHtwYXJ0ZW5haXJlQ2FyZC5faWR9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZhcyBmYS1wZW5jaWwtcnVsZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogJ29yYW5nZScgfX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlbGV0ZUNvbmZpcm0ocGFydGVuYWlyZUNhcmQuX2lkKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmFzIGZhLXRyYXNoLWFsdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3JlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0KSl9ICovfVxyXG5cdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdDwvVGFibGU+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdFBhcnRlbmFpcmVzQ2FyZHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=