webpackHotUpdate_N_E("pages/admin/gestionDivers/partenaires/manage/[id]",{

/***/ "./components/admin/lists/ListPartenairesCards.js":
/*!********************************************************!*\
  !*** ./components/admin/lists/ListPartenairesCards.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_partenairesActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../actions/partenairesActions */ "./actions/partenairesActions.js");
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../actions/giteActions */ "./actions/giteActions.js");


var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\lists\\ListPartenairesCards.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var ListPartenairesCards = function ListPartenairesCards(_ref) {
  _s();

  var partenaireCards = _ref.partenaireCards,
      categorie = _ref.categorie,
      partenaireId = _ref.partenaireId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      image = _useState[0],
      setImage = _useState[1];

  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_4__["getCookie"])('token');

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    loading: false,
    error: '',
    success: false,
    message: ''
  }),
      values = _useState2[0],
      setvalues = _useState2[1];

  var loading = values.loading,
      success = values.success,
      error = values.error,
      message = values.message;

  var getImageById = function getImageById(id) {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_7__["listPhotosById"])(id).then(function (data) {
      console.log('data vaut', data);

      if (data.error) {
        console.log(error);
      } else {// setImage({ image: data });
      }
    });
  };

  var deletePartenaireCard = function deletePartenaireCard(id) {
    setvalues(_objectSpread(_objectSpread({}, values), {}, {
      loading: true
    }));
    Object(_actions_partenairesActions__WEBPACK_IMPORTED_MODULE_6__["removePartenaireCard"])(partenaireId, id, token).then(function (data) {
      console.log('data vaut', data);

      if (data.error) {
        setvalues(_objectSpread(_objectSpread({}, values), {}, {
          loading: false,
          error: true,
          success: false
        }));
      } else {
        setvalues(_objectSpread(_objectSpread({}, values), {}, {
          loading: false,
          error: '',
          success: true,
          message: data.message
        }));
        next_router__WEBPACK_IMPORTED_MODULE_5___default.a.reload();
      }
    });
  };

  var deleteConfirm = function deleteConfirm(id) {
    var answer = window.confirm("Suppression du partenaire ".concat(id, ", \xEAtes-vous s\xFBr ?"));

    if (answer) {
      deletePartenaireCard(id);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 4
    }
  }, "Liste des partenaires pour la cat\xE9gorie ", console.log(categorie), __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, categorie.slug), ",", ' ', __jsx("small", {
    style: {
      fontSize: '13px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, "(pensez \xE0 ajouter des images dans la cat\xE9gorie correspondante avant de cr\xE9er un partenaire)")), loading && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 16
    }
  }), success && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    color: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 16
    }
  }, message), error && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    color: "danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 14
    }
  }, "Une erreur est survenue"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 4
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 6
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, "#ID"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, "Titre"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, "Image"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, "mail"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, "tel"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, "Actif"), __jsx("th", {
    colSpan: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, "Modif/Suppr"))), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, console.log('partenaireCards', partenaireCards), partenaireCards.map(function (partenaireCard, i) {
    return __jsx("tr", {
      className: "mt-5",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 7
      }
    }, __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 8
      }
    }, partenaireCard._id), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 8
      }
    }, partenaireCard.titre), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 8
      }
    }, getImageById(partenaireCard.image)), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 8
      }
    }, partenaireCard.mail), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 8
      }
    }, partenaireCard.tel), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
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
        lineNumber: 104,
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
        lineNumber: 108,
        columnNumber: 10
      }
    })), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 8
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/admin/crud/divers/partenaire/".concat(partenaireCard._id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
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
        lineNumber: 118,
        columnNumber: 11
      }
    })))), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
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
        lineNumber: 125,
        columnNumber: 9
      }
    })));
  }))));
};

_s(ListPartenairesCards, "0F3oBkYDoKoIfQL6GCRIaYhKiEg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0UGFydGVuYWlyZXNDYXJkcy5qcyJdLCJuYW1lcyI6WyJMaXN0UGFydGVuYWlyZXNDYXJkcyIsInBhcnRlbmFpcmVDYXJkcyIsImNhdGVnb3JpZSIsInBhcnRlbmFpcmVJZCIsInVzZVN0YXRlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInRva2VuIiwiZ2V0Q29va2llIiwibG9hZGluZyIsImVycm9yIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJ2YWx1ZXMiLCJzZXR2YWx1ZXMiLCJnZXRJbWFnZUJ5SWQiLCJpZCIsImxpc3RQaG90b3NCeUlkIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlUGFydGVuYWlyZUNhcmQiLCJyZW1vdmVQYXJ0ZW5haXJlQ2FyZCIsIlJvdXRlciIsInJlbG9hZCIsImRlbGV0ZUNvbmZpcm0iLCJhbnN3ZXIiLCJ3aW5kb3ciLCJjb25maXJtIiwic2x1ZyIsImZvbnRTaXplIiwibWFwIiwicGFydGVuYWlyZUNhcmQiLCJpIiwiX2lkIiwidGl0cmUiLCJtYWlsIiwidGVsIiwiYWN0aWYiLCJjb2xvciIsImN1cnNvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsT0FBa0Q7QUFBQTs7QUFBQSxNQUEvQ0MsZUFBK0MsUUFBL0NBLGVBQStDO0FBQUEsTUFBOUJDLFNBQThCLFFBQTlCQSxTQUE4QjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7O0FBQUEsa0JBQ3BEQyxzREFBUSxDQUFDLEVBQUQsQ0FENEM7QUFBQSxNQUN2RUMsS0FEdUU7QUFBQSxNQUNoRUMsUUFEZ0U7O0FBRTlFLE1BQU1DLEtBQUssR0FBR0Msc0VBQVMsQ0FBQyxPQUFELENBQXZCOztB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YyxDQUFDRSxHQUFoQixDQURMO0FBQUEsT0FEVjtBQUlDLGVBQVMsRUFBQyxrQkFKWDtBQUtDLFdBQUssRUFBRTtBQUNOSyxhQUFLLEVBQUUsS0FERDtBQUVOQyxjQUFNLEVBQUU7QUFGRixPQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERCxDQTVCRCxDQURvQjtBQUFBLEdBQXBCLENBRkYsQ0FaRCxDQVpELENBREQ7QUF5RUEsQ0FsSUQ7O0dBQU16QyxvQjs7S0FBQUEsb0I7QUFvSVNBLG1GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2dlc3Rpb25EaXZlcnMvcGFydGVuYWlyZXMvbWFuYWdlL1tpZF0uYmRkMmNhMzIyNzI5NmMwNTU0ODguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYmxlIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHsgQWxlcnQsIFNwaW5uZXIgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHJlbW92ZVBhcnRlbmFpcmVDYXJkIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9wYXJ0ZW5haXJlc0FjdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgbGlzdFBob3Rvc0J5SWQgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuXHJcbmNvbnN0IExpc3RQYXJ0ZW5haXJlc0NhcmRzID0gKHsgcGFydGVuYWlyZUNhcmRzLCBjYXRlZ29yaWUsIHBhcnRlbmFpcmVJZCB9KSA9PiB7XHJcblx0Y29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblxyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldHZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdGVycm9yOiAnJyxcclxuXHRcdHN1Y2Nlc3M6IGZhbHNlLFxyXG5cdFx0bWVzc2FnZTogJycsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHsgbG9hZGluZywgc3VjY2VzcywgZXJyb3IsIG1lc3NhZ2UgfSA9IHZhbHVlcztcclxuXHJcblx0Y29uc3QgZ2V0SW1hZ2VCeUlkID0gKGlkKSA9PiB7XHJcblx0XHRsaXN0UGhvdG9zQnlJZChpZCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZGF0YSB2YXV0JywgZGF0YSk7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIHNldEltYWdlKHsgaW1hZ2U6IGRhdGEgfSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRlbGV0ZVBhcnRlbmFpcmVDYXJkID0gKGlkKSA9PiB7XHJcblx0XHRzZXR2YWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUgfSk7XHJcblx0XHRyZW1vdmVQYXJ0ZW5haXJlQ2FyZChwYXJ0ZW5haXJlSWQsIGlkLCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZGF0YSB2YXV0JywgZGF0YSk7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0c2V0dmFsdWVzKHtcclxuXHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdFx0ZXJyb3I6IHRydWUsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmYWxzZSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXR2YWx1ZXMoe1xyXG5cdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0XHRlcnJvcjogJycsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiB0cnVlLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogZGF0YS5tZXNzYWdlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFJvdXRlci5yZWxvYWQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZGVsZXRlQ29uZmlybSA9IChpZCkgPT4ge1xyXG5cdFx0bGV0IGFuc3dlciA9IHdpbmRvdy5jb25maXJtKFxyXG5cdFx0XHRgU3VwcHJlc3Npb24gZHUgcGFydGVuYWlyZSAke2lkfSwgw6p0ZXMtdm91cyBzw7tyID9gXHJcblx0XHQpO1xyXG5cdFx0aWYgKGFuc3dlcikge1xyXG5cdFx0XHRkZWxldGVQYXJ0ZW5haXJlQ2FyZChpZCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxoMz5cclxuXHRcdFx0XHRMaXN0ZSBkZXMgcGFydGVuYWlyZXMgcG91ciBsYSBjYXTDqWdvcmllIHtjb25zb2xlLmxvZyhjYXRlZ29yaWUpfVxyXG5cdFx0XHRcdDxzdHJvbmc+e2NhdGVnb3JpZS5zbHVnfTwvc3Ryb25nPix7JyAnfVxyXG5cdFx0XHRcdDxzbWFsbCBzdHlsZT17eyBmb250U2l6ZTogJzEzcHgnIH19PlxyXG5cdFx0XHRcdFx0KHBlbnNleiDDoCBham91dGVyIGRlcyBpbWFnZXMgZGFucyBsYSBjYXTDqWdvcmllXHJcblx0XHRcdFx0XHRjb3JyZXNwb25kYW50ZSBhdmFudCBkZSBjcsOpZXIgdW4gcGFydGVuYWlyZSlcclxuXHRcdFx0XHQ8L3NtYWxsPlxyXG5cdFx0XHQ8L2gzPlxyXG5cdFx0XHR7bG9hZGluZyAmJiA8U3Bpbm5lciAvPn1cclxuXHRcdFx0e3N1Y2Nlc3MgJiYgPEFsZXJ0IGNvbG9yPSdzdWNjZXNzJz57bWVzc2FnZX08L0FsZXJ0Pn1cclxuXHRcdFx0e2Vycm9yICYmIDxBbGVydCBjb2xvcj0nZGFuZ2VyJz5VbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZTwvQWxlcnQ+fVxyXG5cdFx0XHQ8VGFibGU+XHJcblx0XHRcdFx0PHRoZWFkPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGg+I0lEPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPlRpdHJlPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPkltYWdlPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPm1haWw8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+dGVsPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPkFjdGlmPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoIGNvbFNwYW49JzInPk1vZGlmL1N1cHByPC90aD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0PC90aGVhZD5cclxuXHRcdFx0XHQ8dGJvZHk+XHJcblx0XHRcdFx0XHR7Y29uc29sZS5sb2coJ3BhcnRlbmFpcmVDYXJkcycsIHBhcnRlbmFpcmVDYXJkcyl9XHJcblx0XHRcdFx0XHR7cGFydGVuYWlyZUNhcmRzLm1hcCgocGFydGVuYWlyZUNhcmQsIGkpID0+IChcclxuXHRcdFx0XHRcdFx0PHRyIGNsYXNzTmFtZT0nbXQtNScga2V5PXtpfT5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+e3BhcnRlbmFpcmVDYXJkLl9pZH08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD57cGFydGVuYWlyZUNhcmQudGl0cmV9PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+e2dldEltYWdlQnlJZChwYXJ0ZW5haXJlQ2FyZC5pbWFnZSl9PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+e3BhcnRlbmFpcmVDYXJkLm1haWx9PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+e3BhcnRlbmFpcmVDYXJkLnRlbH08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdHtwYXJ0ZW5haXJlQ2FyZC5hY3RpZiA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz0nZmFzIGZhLWNoZWNrLXNxdWFyZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPSdmYXMgZmEtdGltZXMnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHJcblx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aHJlZj17YC9hZG1pbi9jcnVkL2RpdmVycy9wYXJ0ZW5haXJlLyR7cGFydGVuYWlyZUNhcmQuX2lkfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmYXMgZmEtcGVuY2lsLXJ1bGVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgY29sb3I6ICdvcmFuZ2UnIH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWxldGVDb25maXJtKHBhcnRlbmFpcmVDYXJkLl9pZClcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZhcyBmYS10cmFzaC1hbHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdyZWQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnNvcjogJ3BvaW50ZXInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT48L2k+XHJcblx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdDwvVGFibGU+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdFBhcnRlbmFpcmVzQ2FyZHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=