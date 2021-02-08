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
      // console.log('image vaut =>', data);
      if (data.error) {
        console.log(error);
      } else {
        return data;
      }
    });
  };

  var afficheImage = function afficheImage(id) {
    var image = getImageById(id); // console.log('image vaut =>', data);

    return __jsx("img", {
      src: image,
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 10
      }
    });
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
      lineNumber: 80,
      columnNumber: 4
    }
  }, "Liste des partenaires pour la cat\xE9gorie", ' ', __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, categorie.slug), ",", ' ', __jsx("small", {
    style: {
      fontSize: '13px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, "(pensez \xE0 ajouter des images dans la cat\xE9gorie correspondante avant de cr\xE9er un partenaire)")), loading && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 16
    }
  }), success && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    color: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 16
    }
  }, message), error && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    color: "danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 14
    }
  }, "Une erreur est survenue"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 4
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 6
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, "#ID"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, "Titre"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, "Image"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, "mail"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, "tel"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, "Actif"), __jsx("th", {
    colSpan: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, "Modif/Suppr"))), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 5
    }
  }, partenaireCards.map(function (partenaireCard, i) {
    return __jsx("tr", {
      className: "mt-5",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 7
      }
    }, __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 8
      }
    }, partenaireCard._id), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 8
      }
    }, partenaireCard.titre), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 8
      }
    }, afficheImage(partenaireCard.image)), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 8
      }
    }, partenaireCard.mail), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 8
      }
    }, partenaireCard.tel), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
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
        lineNumber: 113,
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
        lineNumber: 117,
        columnNumber: 10
      }
    })), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 8
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/admin/crud/divers/partenaire/".concat(partenaireCard._id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
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
        lineNumber: 127,
        columnNumber: 11
      }
    })))), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
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
        lineNumber: 134,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0UGFydGVuYWlyZXNDYXJkcy5qcyJdLCJuYW1lcyI6WyJMaXN0UGFydGVuYWlyZXNDYXJkcyIsInBhcnRlbmFpcmVDYXJkcyIsImNhdGVnb3JpZSIsInBhcnRlbmFpcmVJZCIsInVzZVN0YXRlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInRva2VuIiwiZ2V0Q29va2llIiwibG9hZGluZyIsImVycm9yIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJ2YWx1ZXMiLCJzZXR2YWx1ZXMiLCJnZXRJbWFnZUJ5SWQiLCJpZCIsImxpc3RQaG90b3NCeUlkIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiYWZmaWNoZUltYWdlIiwiZGVsZXRlUGFydGVuYWlyZUNhcmQiLCJyZW1vdmVQYXJ0ZW5haXJlQ2FyZCIsInNldFRpbWVvdXQiLCJSb3V0ZXIiLCJyZWxvYWQiLCJkZWxldGVDb25maXJtIiwiYW5zd2VyIiwid2luZG93IiwiY29uZmlybSIsInNsdWciLCJmb250U2l6ZSIsIm1hcCIsInBhcnRlbmFpcmVDYXJkIiwiaSIsIl9pZCIsInRpdHJlIiwibWFpbCIsInRlbCIsImFjdGlmIiwiY29sb3IiLCJjdXJzb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLE9BQWtEO0FBQUE7O0FBQUEsTUFBL0NDLGVBQStDLFFBQS9DQSxlQUErQztBQUFBLE1BQTlCQyxTQUE4QixRQUE5QkEsU0FBOEI7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1COztBQUFBLGtCQUNwREMsc0RBQVEsQ0FBQyxFQUFELENBRDRDO0FBQUEsTUFDdkVDLEtBRHVFO0FBQUEsTUFDaEVDLFFBRGdFOztBQUU5RSxNQUFNQyxLQUFLLEdBQUdDLHNFQUFTLENBQUMsT0FBRCxDQUF2Qjs7QUFGOEUsbUJBSWxESixzREFBUSxDQUFDO0FBQ3BDSyxXQUFPLEVBQUUsS0FEMkI7QUFFcENDLFNBQUssRUFBRSxFQUY2QjtBQUdwQ0MsV0FBTyxFQUFFLEtBSDJCO0FBSXBDQyxXQUFPLEVBQUU7QUFKMkIsR0FBRCxDQUowQztBQUFBLE1BSXZFQyxNQUp1RTtBQUFBLE1BSS9EQyxTQUorRDs7QUFBQSxNQVd0RUwsT0FYc0UsR0FXakNJLE1BWGlDLENBV3RFSixPQVhzRTtBQUFBLE1BVzdERSxPQVg2RCxHQVdqQ0UsTUFYaUMsQ0FXN0RGLE9BWDZEO0FBQUEsTUFXcERELEtBWG9ELEdBV2pDRyxNQVhpQyxDQVdwREgsS0FYb0Q7QUFBQSxNQVc3Q0UsT0FYNkMsR0FXakNDLE1BWGlDLENBVzdDRCxPQVg2Qzs7QUFhOUUsTUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsRUFBRCxFQUFRO0FBQzVCQywrRUFBYyxDQUFDRCxFQUFELENBQWQsQ0FBbUJFLElBQW5CLENBQXdCLFVBQUNDLElBQUQsRUFBVTtBQUNqQztBQUNBLFVBQUlBLElBQUksQ0FBQ1QsS0FBVCxFQUFnQjtBQUNmVSxlQUFPLENBQUNDLEdBQVIsQ0FBWVgsS0FBWjtBQUNBLE9BRkQsTUFFTztBQUNOLGVBQU9TLElBQVA7QUFDQTtBQUNELEtBUEQ7QUFRQSxHQVREOztBQVdBLE1BQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNOLEVBQUQsRUFBUTtBQUM1QixRQUFNWCxLQUFLLEdBQUdVLFlBQVksQ0FBQ0MsRUFBRCxDQUExQixDQUQ0QixDQUU1Qjs7QUFDQSxXQUFPO0FBQUssU0FBRyxFQUFFWCxLQUFWO0FBQWlCLFNBQUcsRUFBQyxFQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDQSxHQUpELENBeEI4RSxDQTZCOUU7QUFDQTtBQUNBOzs7QUFFQSxNQUFNa0Isb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDUCxFQUFELEVBQVE7QUFDcENGLGFBQVMsaUNBQU1ELE1BQU47QUFBY0osYUFBTyxFQUFFO0FBQXZCLE9BQVQ7QUFDQWUsNEZBQW9CLENBQUNyQixZQUFELEVBQWVhLEVBQWYsRUFBbUJULEtBQW5CLENBQXBCLENBQThDVyxJQUE5QyxDQUFtRCxVQUFDQyxJQUFELEVBQVU7QUFDNUQsVUFBSUEsSUFBSSxDQUFDVCxLQUFULEVBQWdCO0FBQ2ZJLGlCQUFTLGlDQUNMRCxNQURLO0FBRVJKLGlCQUFPLEVBQUUsS0FGRDtBQUdSQyxlQUFLLEVBQUUsSUFIQztBQUlSQyxpQkFBTyxFQUFFO0FBSkQsV0FBVDtBQU1BLE9BUEQsTUFPTztBQUNORyxpQkFBUyxpQ0FDTEQsTUFESztBQUVSSixpQkFBTyxFQUFFLEtBRkQ7QUFHUkMsZUFBSyxFQUFFLEVBSEM7QUFJUkMsaUJBQU8sRUFBRSxJQUpEO0FBS1JDLGlCQUFPLEVBQUVPLElBQUksQ0FBQ1A7QUFMTixXQUFUO0FBT0FhLGtCQUFVLENBQUMsWUFBTTtBQUNoQkMsNERBQU0sQ0FBQ0MsTUFBUDtBQUNBLFNBRlMsRUFFUCxJQUZPLENBQVY7QUFHQTtBQUNELEtBcEJEO0FBcUJBLEdBdkJEOztBQXlCQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNaLEVBQUQsRUFBUTtBQUM3QixRQUFJYSxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxxQ0FDaUJmLEVBRGpCLDZCQUFiOztBQUdBLFFBQUlhLE1BQUosRUFBWTtBQUNYTiwwQkFBb0IsQ0FBQ1AsRUFBRCxDQUFwQjtBQUNBO0FBQ0QsR0FQRDs7QUFTQSxTQUNDLG1FQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbURBQ3lDLEdBRHpDLEVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTZCxTQUFTLENBQUM4QixJQUFuQixDQUZELE9BRW9DLEdBRnBDLEVBR0M7QUFBTyxTQUFLLEVBQUU7QUFBRUMsY0FBUSxFQUFFO0FBQVosS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRHQUhELENBREQsRUFTRXhCLE9BQU8sSUFBSSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUYixFQVVFRSxPQUFPLElBQUksTUFBQyxnREFBRDtBQUFPLFNBQUssRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0JDLE9BQXhCLENBVmIsRUFXRUYsS0FBSyxJQUFJLE1BQUMsZ0RBQUQ7QUFBTyxTQUFLLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVhYLEVBWUMsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQsRUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkQsRUFHQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEQsRUFJQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkQsRUFLQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBTEQsRUFNQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkQsRUFPQztBQUFJLFdBQU8sRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEQsQ0FERCxDQURELEVBWUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFVCxlQUFlLENBQUNpQyxHQUFoQixDQUFvQixVQUFDQyxjQUFELEVBQWlCQyxDQUFqQjtBQUFBLFdBQ3BCO0FBQUksZUFBUyxFQUFDLE1BQWQ7QUFBcUIsU0FBRyxFQUFFQSxDQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLRCxjQUFjLENBQUNFLEdBQXBCLENBREQsRUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtGLGNBQWMsQ0FBQ0csS0FBcEIsQ0FGRCxFQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS2hCLFlBQVksQ0FBQ2EsY0FBYyxDQUFDOUIsS0FBaEIsQ0FBakIsQ0FIRCxFQUlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSzhCLGNBQWMsQ0FBQ0ksSUFBcEIsQ0FKRCxFQUtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0osY0FBYyxDQUFDSyxHQUFwQixDQUxELEVBTUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFTCxjQUFjLENBQUNNLEtBQWYsR0FDQTtBQUNDLGVBQU0scUJBRFA7QUFFQyxXQUFLLEVBQUU7QUFBRUMsYUFBSyxFQUFFO0FBQVQsT0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREEsR0FLQTtBQUNDLGVBQU0sY0FEUDtBQUVDLFdBQUssRUFBRTtBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFORixDQU5ELEVBa0JDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQyxNQUFDLGdEQUFEO0FBQ0MsVUFBSSwwQ0FBbUNQLGNBQWMsQ0FBQ0UsR0FBbEQsQ0FETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDO0FBQ0MsZUFBUyxFQUFDLHFCQURYO0FBRUMsV0FBSyxFQUFFO0FBQUVLLGFBQUssRUFBRTtBQUFULE9BRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURELENBRkQsQ0FERCxDQWxCRCxFQTRCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFDQyxhQUFPLEVBQUU7QUFBQSxlQUNSZCxhQUFhLENBQUNPLGNBQWMsQ0FBQ0UsR0FBaEIsQ0FETDtBQUFBLE9BRFY7QUFJQyxlQUFTLEVBQUMsa0JBSlg7QUFLQyxXQUFLLEVBQUU7QUFDTkssYUFBSyxFQUFFLEtBREQ7QUFFTkMsY0FBTSxFQUFFO0FBRkYsT0FMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREQsQ0E1QkQsQ0FEb0I7QUFBQSxHQUFwQixDQURGLENBWkQsQ0FaRCxDQUREO0FBd0VBLENBM0lEOztHQUFNM0Msb0I7O0tBQUFBLG9CO0FBNklTQSxtRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9nZXN0aW9uRGl2ZXJzL3BhcnRlbmFpcmVzL21hbmFnZS9baWRdLjVmYThkNjQzZWQ0OWRlMThhNWUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWJsZSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHsgQWxlcnQsIFNwaW5uZXIgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHJlbW92ZVBhcnRlbmFpcmVDYXJkIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9wYXJ0ZW5haXJlc0FjdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgbGlzdFBob3Rvc0J5SWQgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuXHJcbmNvbnN0IExpc3RQYXJ0ZW5haXJlc0NhcmRzID0gKHsgcGFydGVuYWlyZUNhcmRzLCBjYXRlZ29yaWUsIHBhcnRlbmFpcmVJZCB9KSA9PiB7XHJcblx0Y29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblxyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldHZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdGVycm9yOiAnJyxcclxuXHRcdHN1Y2Nlc3M6IGZhbHNlLFxyXG5cdFx0bWVzc2FnZTogJycsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHsgbG9hZGluZywgc3VjY2VzcywgZXJyb3IsIG1lc3NhZ2UgfSA9IHZhbHVlcztcclxuXHJcblx0Y29uc3QgZ2V0SW1hZ2VCeUlkID0gKGlkKSA9PiB7XHJcblx0XHRsaXN0UGhvdG9zQnlJZChpZCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZygnaW1hZ2UgdmF1dCA9PicsIGRhdGEpO1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgYWZmaWNoZUltYWdlID0gKGlkKSA9PiB7XHJcblx0XHRjb25zdCBpbWFnZSA9IGdldEltYWdlQnlJZChpZCk7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnaW1hZ2UgdmF1dCA9PicsIGRhdGEpO1xyXG5cdFx0cmV0dXJuIDxpbWcgc3JjPXtpbWFnZX0gYWx0PScnIC8+O1xyXG5cdH07XHJcblx0Ly8gdXNlRWZmZWN0KCgpID0+IHtcclxuXHQvLyBcdGdldEltYWdlQnlJZCgpO1xyXG5cdC8vIH0sIFtdKTtcclxuXHJcblx0Y29uc3QgZGVsZXRlUGFydGVuYWlyZUNhcmQgPSAoaWQpID0+IHtcclxuXHRcdHNldHZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHRcdHJlbW92ZVBhcnRlbmFpcmVDYXJkKHBhcnRlbmFpcmVJZCwgaWQsIHRva2VuKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0c2V0dmFsdWVzKHtcclxuXHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdFx0ZXJyb3I6IHRydWUsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmYWxzZSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXR2YWx1ZXMoe1xyXG5cdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0XHRlcnJvcjogJycsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiB0cnVlLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogZGF0YS5tZXNzYWdlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Um91dGVyLnJlbG9hZCgpO1xyXG5cdFx0XHRcdH0sIDIwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBkZWxldGVDb25maXJtID0gKGlkKSA9PiB7XHJcblx0XHRsZXQgYW5zd2VyID0gd2luZG93LmNvbmZpcm0oXHJcblx0XHRcdGBTdXBwcmVzc2lvbiBkdSBwYXJ0ZW5haXJlICR7aWR9LCDDqnRlcy12b3VzIHPDu3IgP2BcclxuXHRcdCk7XHJcblx0XHRpZiAoYW5zd2VyKSB7XHJcblx0XHRcdGRlbGV0ZVBhcnRlbmFpcmVDYXJkKGlkKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGgzPlxyXG5cdFx0XHRcdExpc3RlIGRlcyBwYXJ0ZW5haXJlcyBwb3VyIGxhIGNhdMOpZ29yaWV7JyAnfVxyXG5cdFx0XHRcdDxzdHJvbmc+e2NhdGVnb3JpZS5zbHVnfTwvc3Ryb25nPix7JyAnfVxyXG5cdFx0XHRcdDxzbWFsbCBzdHlsZT17eyBmb250U2l6ZTogJzEzcHgnIH19PlxyXG5cdFx0XHRcdFx0KHBlbnNleiDDoCBham91dGVyIGRlcyBpbWFnZXMgZGFucyBsYSBjYXTDqWdvcmllXHJcblx0XHRcdFx0XHRjb3JyZXNwb25kYW50ZSBhdmFudCBkZSBjcsOpZXIgdW4gcGFydGVuYWlyZSlcclxuXHRcdFx0XHQ8L3NtYWxsPlxyXG5cdFx0XHQ8L2gzPlxyXG5cdFx0XHR7bG9hZGluZyAmJiA8U3Bpbm5lciAvPn1cclxuXHRcdFx0e3N1Y2Nlc3MgJiYgPEFsZXJ0IGNvbG9yPSdzdWNjZXNzJz57bWVzc2FnZX08L0FsZXJ0Pn1cclxuXHRcdFx0e2Vycm9yICYmIDxBbGVydCBjb2xvcj0nZGFuZ2VyJz5VbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZTwvQWxlcnQ+fVxyXG5cdFx0XHQ8VGFibGU+XHJcblx0XHRcdFx0PHRoZWFkPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGg+I0lEPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPlRpdHJlPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPkltYWdlPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPm1haWw8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+dGVsPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPkFjdGlmPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoIGNvbFNwYW49JzInPk1vZGlmL1N1cHByPC90aD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0PC90aGVhZD5cclxuXHRcdFx0XHQ8dGJvZHk+XHJcblx0XHRcdFx0XHR7cGFydGVuYWlyZUNhcmRzLm1hcCgocGFydGVuYWlyZUNhcmQsIGkpID0+IChcclxuXHRcdFx0XHRcdFx0PHRyIGNsYXNzTmFtZT0nbXQtNScga2V5PXtpfT5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+e3BhcnRlbmFpcmVDYXJkLl9pZH08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD57cGFydGVuYWlyZUNhcmQudGl0cmV9PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+e2FmZmljaGVJbWFnZShwYXJ0ZW5haXJlQ2FyZC5pbWFnZSl9PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+e3BhcnRlbmFpcmVDYXJkLm1haWx9PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+e3BhcnRlbmFpcmVDYXJkLnRlbH08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdHtwYXJ0ZW5haXJlQ2FyZC5hY3RpZiA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz0nZmFzIGZhLWNoZWNrLXNxdWFyZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPSdmYXMgZmEtdGltZXMnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHJcblx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aHJlZj17YC9hZG1pbi9jcnVkL2RpdmVycy9wYXJ0ZW5haXJlLyR7cGFydGVuYWlyZUNhcmQuX2lkfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmYXMgZmEtcGVuY2lsLXJ1bGVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgY29sb3I6ICdvcmFuZ2UnIH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWxldGVDb25maXJtKHBhcnRlbmFpcmVDYXJkLl9pZClcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZhcyBmYS10cmFzaC1hbHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdyZWQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnNvcjogJ3BvaW50ZXInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT48L2k+XHJcblx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdDwvVGFibGU+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdFBhcnRlbmFpcmVzQ2FyZHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=