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
      console.log('image vaut =>', data);

      if (data.error) {
        console.log(error);
      } else {
        return __jsx("img", {
          src: data.location,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 12
          }
        });
      }
    });
  };

  var afficheImage = function afficheImage(id) {
    getImageById(id);
  }; // useEffect(() => {
  // 	getImageById();
  // }, []);


  var deletePartenaireCard = function deletePartenaireCard(id) {
    setvalues(_objectSpread(_objectSpread({}, values), {}, {
      loading: true
    }));
    Object(_actions_partenairesActions__WEBPACK_IMPORTED_MODULE_6__["removePartenaireCard"])(partenaireId, id, token).then(function (data) {
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
        setTimeout(function () {
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.reload();
        }, 2000);
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
      lineNumber: 78,
      columnNumber: 4
    }
  }, "Liste des partenaires pour la cat\xE9gorie", ' ', __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, categorie.slug), ",", ' ', __jsx("small", {
    style: {
      fontSize: '13px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, "(pensez \xE0 ajouter des images dans la cat\xE9gorie correspondante avant de cr\xE9er un partenaire)")), loading && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 16
    }
  }), success && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    color: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 16
    }
  }, message), error && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    color: "danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 14
    }
  }, "Une erreur est survenue"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 4
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 6
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, "#ID"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, "Titre"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, "Image"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, "mail"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, "tel"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, "Actif"), __jsx("th", {
    colSpan: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, "Modif/Suppr"))), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }
  }, partenaireCards.map(function (partenaireCard, i) {
    return __jsx("tr", {
      className: "mt-5",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 7
      }
    }, __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 8
      }
    }, partenaireCard._id), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 8
      }
    }, partenaireCard.titre), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 8
      }
    }, afficheImage(partenaireCard.image)), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 8
      }
    }, partenaireCard.mail), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 8
      }
    }, partenaireCard.tel), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
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
        lineNumber: 111,
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
        lineNumber: 115,
        columnNumber: 10
      }
    })), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 8
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/admin/crud/divers/partenaire/".concat(partenaireCard._id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
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
        lineNumber: 125,
        columnNumber: 11
      }
    })))), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
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
        lineNumber: 132,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0UGFydGVuYWlyZXNDYXJkcy5qcyJdLCJuYW1lcyI6WyJMaXN0UGFydGVuYWlyZXNDYXJkcyIsInBhcnRlbmFpcmVDYXJkcyIsImNhdGVnb3JpZSIsInBhcnRlbmFpcmVJZCIsInVzZVN0YXRlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInRva2VuIiwiZ2V0Q29va2llIiwibG9hZGluZyIsImVycm9yIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJ2YWx1ZXMiLCJzZXR2YWx1ZXMiLCJnZXRJbWFnZUJ5SWQiLCJpZCIsImxpc3RQaG90b3NCeUlkIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibG9jYXRpb24iLCJhZmZpY2hlSW1hZ2UiLCJkZWxldGVQYXJ0ZW5haXJlQ2FyZCIsInJlbW92ZVBhcnRlbmFpcmVDYXJkIiwic2V0VGltZW91dCIsIlJvdXRlciIsInJlbG9hZCIsImRlbGV0ZUNvbmZpcm0iLCJhbnN3ZXIiLCJ3aW5kb3ciLCJjb25maXJtIiwic2x1ZyIsImZvbnRTaXplIiwibWFwIiwicGFydGVuYWlyZUNhcmQiLCJpIiwiX2lkIiwidGl0cmUiLCJtYWlsIiwidGVsIiwiYWN0aWYiLCJjb2xvciIsImN1cnNvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsT0FBa0Q7QUFBQTs7QUFBQSxNQUEvQ0MsZUFBK0MsUUFBL0NBLGVBQStDO0FBQUEsTUFBOUJDLFNBQThCLFFBQTlCQSxTQUE4QjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7O0FBQUEsa0JBQ3BEQyxzREFBUSxDQUFDLEVBQUQsQ0FENEM7QUFBQSxNQUN2RUMsS0FEdUU7QUFBQSxNQUNoRUMsUUFEZ0U7O0FBRTlFLE1B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QUFULE9BRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURELENBRkQsQ0FERCxDQWxCRCxFQTRCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFDQyxhQUFPLEVBQUU7QUFBQSxlQUNSZCxhQUFhLENBQUNPLGNBQWMsQ0FBQ0UsR0FBaEIsQ0FETDtBQUFBLE9BRFY7QUFJQyxlQUFTLEVBQUMsa0JBSlg7QUFLQyxXQUFLLEVBQUU7QUFDTkssYUFBSyxFQUFFLEtBREQ7QUFFTkMsY0FBTSxFQUFFO0FBRkYsT0FMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREQsQ0E1QkQsQ0FEb0I7QUFBQSxHQUFwQixDQURGLENBWkQsQ0FaRCxDQUREO0FBd0VBLENBeklEOztHQUFNNUMsb0I7O0tBQUFBLG9CO0FBMklTQSxtRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9nZXN0aW9uRGl2ZXJzL3BhcnRlbmFpcmVzL21hbmFnZS9baWRdLjZlMGJhMDU0Njc3ZmEwYmVhODQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWJsZSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHsgQWxlcnQsIFNwaW5uZXIgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHJlbW92ZVBhcnRlbmFpcmVDYXJkIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9wYXJ0ZW5haXJlc0FjdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgbGlzdFBob3Rvc0J5SWQgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuXHJcbmNvbnN0IExpc3RQYXJ0ZW5haXJlc0NhcmRzID0gKHsgcGFydGVuYWlyZUNhcmRzLCBjYXRlZ29yaWUsIHBhcnRlbmFpcmVJZCB9KSA9PiB7XHJcblx0Y29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblxyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldHZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdGVycm9yOiAnJyxcclxuXHRcdHN1Y2Nlc3M6IGZhbHNlLFxyXG5cdFx0bWVzc2FnZTogJycsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHsgbG9hZGluZywgc3VjY2VzcywgZXJyb3IsIG1lc3NhZ2UgfSA9IHZhbHVlcztcclxuXHJcblx0Y29uc3QgZ2V0SW1hZ2VCeUlkID0gKGlkKSA9PiB7XHJcblx0XHRsaXN0UGhvdG9zQnlJZChpZCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnaW1hZ2UgdmF1dCA9PicsIGRhdGEpO1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gPGltZyBzcmM9e2RhdGEubG9jYXRpb259IC8+O1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBhZmZpY2hlSW1hZ2UgPSAoaWQpID0+IHtcclxuXHRcdGdldEltYWdlQnlJZChpZCk7XHJcblx0fTtcclxuXHQvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdC8vIFx0Z2V0SW1hZ2VCeUlkKCk7XHJcblx0Ly8gfSwgW10pO1xyXG5cclxuXHRjb25zdCBkZWxldGVQYXJ0ZW5haXJlQ2FyZCA9IChpZCkgPT4ge1xyXG5cdFx0c2V0dmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdFx0cmVtb3ZlUGFydGVuYWlyZUNhcmQocGFydGVuYWlyZUlkLCBpZCwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXR2YWx1ZXMoe1xyXG5cdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0XHRlcnJvcjogdHJ1ZSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZhbHNlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldHZhbHVlcyh7XHJcblx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRcdGVycm9yOiAnJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IHRydWUsXHJcblx0XHRcdFx0XHRtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRSb3V0ZXIucmVsb2FkKCk7XHJcblx0XHRcdFx0fSwgMjAwMCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRlbGV0ZUNvbmZpcm0gPSAoaWQpID0+IHtcclxuXHRcdGxldCBhbnN3ZXIgPSB3aW5kb3cuY29uZmlybShcclxuXHRcdFx0YFN1cHByZXNzaW9uIGR1IHBhcnRlbmFpcmUgJHtpZH0sIMOqdGVzLXZvdXMgc8O7ciA/YFxyXG5cdFx0KTtcclxuXHRcdGlmIChhbnN3ZXIpIHtcclxuXHRcdFx0ZGVsZXRlUGFydGVuYWlyZUNhcmQoaWQpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8aDM+XHJcblx0XHRcdFx0TGlzdGUgZGVzIHBhcnRlbmFpcmVzIHBvdXIgbGEgY2F0w6lnb3JpZXsnICd9XHJcblx0XHRcdFx0PHN0cm9uZz57Y2F0ZWdvcmllLnNsdWd9PC9zdHJvbmc+LHsnICd9XHJcblx0XHRcdFx0PHNtYWxsIHN0eWxlPXt7IGZvbnRTaXplOiAnMTNweCcgfX0+XHJcblx0XHRcdFx0XHQocGVuc2V6IMOgIGFqb3V0ZXIgZGVzIGltYWdlcyBkYW5zIGxhIGNhdMOpZ29yaWVcclxuXHRcdFx0XHRcdGNvcnJlc3BvbmRhbnRlIGF2YW50IGRlIGNyw6llciB1biBwYXJ0ZW5haXJlKVxyXG5cdFx0XHRcdDwvc21hbGw+XHJcblx0XHRcdDwvaDM+XHJcblx0XHRcdHtsb2FkaW5nICYmIDxTcGlubmVyIC8+fVxyXG5cdFx0XHR7c3VjY2VzcyAmJiA8QWxlcnQgY29sb3I9J3N1Y2Nlc3MnPnttZXNzYWdlfTwvQWxlcnQ+fVxyXG5cdFx0XHR7ZXJyb3IgJiYgPEFsZXJ0IGNvbG9yPSdkYW5nZXInPlVuZSBlcnJldXIgZXN0IHN1cnZlbnVlPC9BbGVydD59XHJcblx0XHRcdDxUYWJsZT5cclxuXHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0aD4jSUQ8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+VGl0cmU8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+SW1hZ2U8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+bWFpbDwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD50ZWw8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+QWN0aWY8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGggY29sU3Bhbj0nMic+TW9kaWYvU3VwcHI8L3RoPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdHtwYXJ0ZW5haXJlQ2FyZHMubWFwKChwYXJ0ZW5haXJlQ2FyZCwgaSkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8dHIgY2xhc3NOYW1lPSdtdC01JyBrZXk9e2l9PlxyXG5cdFx0XHRcdFx0XHRcdDx0aD57cGFydGVuYWlyZUNhcmQuX2lkfTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPntwYXJ0ZW5haXJlQ2FyZC50aXRyZX08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD57YWZmaWNoZUltYWdlKHBhcnRlbmFpcmVDYXJkLmltYWdlKX08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD57cGFydGVuYWlyZUNhcmQubWFpbH08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD57cGFydGVuYWlyZUNhcmQudGVsfTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0e3BhcnRlbmFpcmVDYXJkLmFjdGlmID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPSdmYXMgZmEtY2hlY2stc3F1YXJlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9J2ZhcyBmYS10aW1lcydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRocmVmPXtgL2FkbWluL2NydWQvZGl2ZXJzL3BhcnRlbmFpcmUvJHtwYXJ0ZW5haXJlQ2FyZC5faWR9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZhcyBmYS1wZW5jaWwtcnVsZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogJ29yYW5nZScgfX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlbGV0ZUNvbmZpcm0ocGFydGVuYWlyZUNhcmQuX2lkKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmFzIGZhLXRyYXNoLWFsdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3JlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0PC9UYWJsZT5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0UGFydGVuYWlyZXNDYXJkcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==