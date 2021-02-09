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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../actions/giteActions */ "./actions/giteActions.js");


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
      partenaireId = _ref.partenaireId,
      photos = _ref.photos;
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_4__["getCookie"])('token');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    loading: false,
    error: '',
    success: false,
    message: ''
  }),
      values = _useState[0],
      setvalues = _useState[1];

  var loading = values.loading,
      success = values.success,
      error = values.error,
      message = values.message; // const getAllImages = () => {
  // 	listPhotosBySection(categorie.slug).then((photos) => {
  // 		if (photos.error) {
  // 			console.log(photos.error);
  // 		} else {
  // 			setImages({ ...images, images: photos });
  // 		}
  // 	});
  // };
  // useEffect(() => {
  // 	getAllImages();
  // }, []);

  var photoInfos = function photoInfos(id) {
    return photos.map(function (photos) {
      return photos._id === id && __jsx(next_image__WEBPACK_IMPORTED_MODULE_7___default.a // className='d-block w-100'
      , {
        src: photos.location,
        alt: photos.alt,
        width: 200,
        height: 150,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 6
        }
      });
    });
  };

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
      lineNumber: 92,
      columnNumber: 4
    }
  }, "Liste des partenaires pour la cat\xE9gorie", ' ', __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, categorie.slug), ",", ' ', __jsx("small", {
    style: {
      fontSize: '13px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  }, "(pensez \xE0 ajouter des images dans la cat\xE9gorie correspondante avant de cr\xE9er un partenaire)")), loading && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 16
    }
  }), success && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    color: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 16
    }
  }, message), error && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    color: "danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 14
    }
  }, "Une erreur est survenue"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 4
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 6
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, "#ID"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, "Titre"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, "Image"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }, "mail"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, "tel"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, "Actif"), __jsx("th", {
    colSpan: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, "Modif/Suppr"))), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }
  }, partenaireCards.map(function (partenaireCard, i) {
    return __jsx("tr", {
      className: "mt-5",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 7
      }
    }, __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 8
      }
    }, partenaireCard._id), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 8
      }
    }, partenaireCard.titre), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 8
      }
    }, photoInfos(partenaireCard.image)), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 8
      }
    }, __jsx("a", {
      href: "mailto:".concat(partenaireCard.mail),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }
    }), partenaireCard.mail), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 8
      }
    }, partenaireCard.tel), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 8
      }
    }, partenaireCard.actif ? __jsx("i", {
      className: "fas fa-check-square",
      style: {
        color: 'green'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 10
      }
    }) : __jsx("i", {
      className: "fas fa-times",
      style: {
        color: 'red'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 10
      }
    })), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 8
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/admin/crud/divers/partenaire/[id]/card/[idCard]",
      as: "/admin/crud/divers/partenaire/".concat(partenaireId, "/card/").concat(partenaireCard._id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
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
        lineNumber: 143,
        columnNumber: 11
      }
    })))), __jsx("th", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
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
        lineNumber: 150,
        columnNumber: 9
      }
    })));
  }))));
};

_s(ListPartenairesCards, "67wyrbcieFUCy9hKNlVMPY5eJu0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0UGFydGVuYWlyZXNDYXJkcy5qcyJdLCJuYW1lcyI6WyJMaXN0UGFydGVuYWlyZXNDYXJkcyIsInBhcnRlbmFpcmVDYXJkcyIsImNhdGVnb3JpZSIsInBhcnRlbmFpcmVJZCIsInBob3RvcyIsInRva2VuIiwiZ2V0Q29va2llIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJzdWNjZXNzIiwibWVzc2FnZSIsInZhbHVlcyIsInNldHZhbHVlcyIsInBob3RvSW5mb3MiLCJpZCIsIm1hcCIsIl9pZCIsImxvY2F0aW9uIiwiYWx0IiwiZGVsZXRlUGFydGVuYWlyZUNhcmQiLCJyZW1vdmVQYXJ0ZW5haXJlQ2FyZCIsInRoZW4iLCJkYXRhIiwic2V0VGltZW91dCIsIlJvdXRlciIsInJlbG9hZCIsImRlbGV0ZUNvbmZpcm0iLCJhbnN3ZXIiLCJ3aW5kb3ciLCJjb25maXJtIiwic2x1ZyIsImZvbnRTaXplIiwicGFydGVuYWlyZUNhcmQiLCJpIiwidGl0cmUiLCJpbWFnZSIsIm1haWwiLCJ0ZWwiLCJhY3RpZiIsImNvbG9yIiwiY3Vyc29yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsT0FLdkI7QUFBQTs7QUFBQSxNQUpMQyxlQUlLLFFBSkxBLGVBSUs7QUFBQSxNQUhMQyxTQUdLLFFBSExBLFNBR0s7QUFBQSxNQUZMQyxZQUVLLFFBRkxBLFlBRUs7QUFBQSxNQURMQyxNQUNLLFFBRExBLE1BQ0s7QUFDTCxNQUFNQyxLQUFLLEdBQUdDLHNFQUFTLENBQUMsT0FBRCxDQUF2Qjs7QUFESyxrQkFHdUJDLHNEQUFRLENBQUM7QUFDcENDLFdBQU8sRUFBRSxLQUQyQjtBQUVwQ0MsU0FBSyxF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QXJCRCxFQWdDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFDQyxhQUFPLEVBQUU7QUFBQSxlQUNSYixhQUFhLENBQUNNLGNBQWMsQ0FBQ2hCLEdBQWhCLENBREw7QUFBQSxPQURWO0FBSUMsZUFBUyxFQUFDLGtCQUpYO0FBS0MsV0FBSyxFQUFFO0FBQ051QixhQUFLLEVBQUUsS0FERDtBQUVOQyxjQUFNLEVBQUU7QUFGRixPQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERCxDQWhDRCxDQURvQjtBQUFBLEdBQXBCLENBREYsQ0FaRCxDQVpELENBREQ7QUE0RUEsQ0EzSkQ7O0dBQU16QyxvQjs7S0FBQUEsb0I7QUE2SlNBLG1GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2dlc3Rpb25EaXZlcnMvcGFydGVuYWlyZXMvbWFuYWdlL1tpZF0uMmM3ZTAzMTM1ODA3YjU4ZDQ4ODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYmxlIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgeyBBbGVydCwgU3Bpbm5lciB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgcmVtb3ZlUGFydGVuYWlyZUNhcmQgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL3BhcnRlbmFpcmVzQWN0aW9ucyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgbGlzdFBob3Rvc0J5U2VjdGlvbiB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5cclxuY29uc3QgTGlzdFBhcnRlbmFpcmVzQ2FyZHMgPSAoe1xyXG5cdHBhcnRlbmFpcmVDYXJkcyxcclxuXHRjYXRlZ29yaWUsXHJcblx0cGFydGVuYWlyZUlkLFxyXG5cdHBob3RvcyxcclxufSkgPT4ge1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cclxuXHRjb25zdCBbdmFsdWVzLCBzZXR2YWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRlcnJvcjogJycsXHJcblx0XHRzdWNjZXNzOiBmYWxzZSxcclxuXHRcdG1lc3NhZ2U6ICcnLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCB7IGxvYWRpbmcsIHN1Y2Nlc3MsIGVycm9yLCBtZXNzYWdlIH0gPSB2YWx1ZXM7XHJcblxyXG5cdC8vIGNvbnN0IGdldEFsbEltYWdlcyA9ICgpID0+IHtcclxuXHQvLyBcdGxpc3RQaG90b3NCeVNlY3Rpb24oY2F0ZWdvcmllLnNsdWcpLnRoZW4oKHBob3RvcykgPT4ge1xyXG5cdC8vIFx0XHRpZiAocGhvdG9zLmVycm9yKSB7XHJcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2cocGhvdG9zLmVycm9yKTtcclxuXHQvLyBcdFx0fSBlbHNlIHtcclxuXHQvLyBcdFx0XHRzZXRJbWFnZXMoeyAuLi5pbWFnZXMsIGltYWdlczogcGhvdG9zIH0pO1xyXG5cdC8vIFx0XHR9XHJcblx0Ly8gXHR9KTtcclxuXHQvLyB9O1xyXG5cdC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0Ly8gXHRnZXRBbGxJbWFnZXMoKTtcclxuXHQvLyB9LCBbXSk7XHJcblxyXG5cdGNvbnN0IHBob3RvSW5mb3MgPSAoaWQpID0+IHtcclxuXHRcdHJldHVybiBwaG90b3MubWFwKFxyXG5cdFx0XHQocGhvdG9zKSA9PlxyXG5cdFx0XHRcdHBob3Rvcy5faWQgPT09IGlkICYmIChcclxuXHRcdFx0XHRcdDxJbWFnZVxyXG5cdFx0XHRcdFx0XHQvLyBjbGFzc05hbWU9J2QtYmxvY2sgdy0xMDAnXHJcblx0XHRcdFx0XHRcdHNyYz17cGhvdG9zLmxvY2F0aW9ufVxyXG5cdFx0XHRcdFx0XHRhbHQ9e3Bob3Rvcy5hbHR9XHJcblx0XHRcdFx0XHRcdHdpZHRoPXsyMDB9XHJcblx0XHRcdFx0XHRcdGhlaWdodD17MTUwfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQpXHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRlbGV0ZVBhcnRlbmFpcmVDYXJkID0gKGlkKSA9PiB7XHJcblx0XHRzZXR2YWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUgfSk7XHJcblx0XHRyZW1vdmVQYXJ0ZW5haXJlQ2FyZChwYXJ0ZW5haXJlSWQsIGlkLCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdHNldHZhbHVlcyh7XHJcblx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRcdGVycm9yOiB0cnVlLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogZmFsc2UsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0dmFsdWVzKHtcclxuXHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdFx0ZXJyb3I6ICcnLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IGRhdGEubWVzc2FnZSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFJvdXRlci5yZWxvYWQoKTtcclxuXHRcdFx0XHR9LCAyMDAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZGVsZXRlQ29uZmlybSA9IChpZCkgPT4ge1xyXG5cdFx0bGV0IGFuc3dlciA9IHdpbmRvdy5jb25maXJtKFxyXG5cdFx0XHRgU3VwcHJlc3Npb24gZHUgcGFydGVuYWlyZSAke2lkfSwgw6p0ZXMtdm91cyBzw7tyID9gXHJcblx0XHQpO1xyXG5cdFx0aWYgKGFuc3dlcikge1xyXG5cdFx0XHRkZWxldGVQYXJ0ZW5haXJlQ2FyZChpZCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxoMz5cclxuXHRcdFx0XHRMaXN0ZSBkZXMgcGFydGVuYWlyZXMgcG91ciBsYSBjYXTDqWdvcmlleycgJ31cclxuXHRcdFx0XHQ8c3Ryb25nPntjYXRlZ29yaWUuc2x1Z308L3N0cm9uZz4seycgJ31cclxuXHRcdFx0XHQ8c21hbGwgc3R5bGU9e3sgZm9udFNpemU6ICcxM3B4JyB9fT5cclxuXHRcdFx0XHRcdChwZW5zZXogw6AgYWpvdXRlciBkZXMgaW1hZ2VzIGRhbnMgbGEgY2F0w6lnb3JpZVxyXG5cdFx0XHRcdFx0Y29ycmVzcG9uZGFudGUgYXZhbnQgZGUgY3LDqWVyIHVuIHBhcnRlbmFpcmUpXHJcblx0XHRcdFx0PC9zbWFsbD5cclxuXHRcdFx0PC9oMz5cclxuXHRcdFx0e2xvYWRpbmcgJiYgPFNwaW5uZXIgLz59XHJcblx0XHRcdHtzdWNjZXNzICYmIDxBbGVydCBjb2xvcj0nc3VjY2Vzcyc+e21lc3NhZ2V9PC9BbGVydD59XHJcblx0XHRcdHtlcnJvciAmJiA8QWxlcnQgY29sb3I9J2Rhbmdlcic+VW5lIGVycmV1ciBlc3Qgc3VydmVudWU8L0FsZXJ0Pn1cclxuXHRcdFx0PFRhYmxlPlxyXG5cdFx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRoPiNJRDwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5UaXRyZTwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5JbWFnZTwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5tYWlsPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPnRlbDwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5BY3RpZjwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aCBjb2xTcGFuPScyJz5Nb2RpZi9TdXBwcjwvdGg+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0e3BhcnRlbmFpcmVDYXJkcy5tYXAoKHBhcnRlbmFpcmVDYXJkLCBpKSA9PiAoXHJcblx0XHRcdFx0XHRcdDx0ciBjbGFzc05hbWU9J210LTUnIGtleT17aX0+XHJcblx0XHRcdFx0XHRcdFx0PHRoPntwYXJ0ZW5haXJlQ2FyZC5faWR9PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+e3BhcnRlbmFpcmVDYXJkLnRpdHJlfTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPntwaG90b0luZm9zKHBhcnRlbmFpcmVDYXJkLmltYWdlKX08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2BtYWlsdG86JHtwYXJ0ZW5haXJlQ2FyZC5tYWlsfWB9PjwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdHtwYXJ0ZW5haXJlQ2FyZC5tYWlsfVxyXG5cdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPntwYXJ0ZW5haXJlQ2FyZC50ZWx9PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0XHR7cGFydGVuYWlyZUNhcmQuYWN0aWYgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmYXMgZmEtY2hlY2stc3F1YXJlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmYXMgZmEtdGltZXMnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHJcblx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aHJlZj17YC9hZG1pbi9jcnVkL2RpdmVycy9wYXJ0ZW5haXJlL1tpZF0vY2FyZC9baWRDYXJkXWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFzPXtgL2FkbWluL2NydWQvZGl2ZXJzL3BhcnRlbmFpcmUvJHtwYXJ0ZW5haXJlSWR9L2NhcmQvJHtwYXJ0ZW5haXJlQ2FyZC5faWR9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZhcyBmYS1wZW5jaWwtcnVsZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogJ29yYW5nZScgfX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlbGV0ZUNvbmZpcm0ocGFydGVuYWlyZUNhcmQuX2lkKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmFzIGZhLXRyYXNoLWFsdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3JlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0PC9UYWJsZT5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0UGFydGVuYWlyZXNDYXJkcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==