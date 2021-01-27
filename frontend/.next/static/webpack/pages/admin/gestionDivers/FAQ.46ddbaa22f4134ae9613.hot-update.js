webpackHotUpdate_N_E("pages/admin/gestionDivers/FAQ",{

/***/ "./components/admin/ListQR.js":
/*!************************************!*\
  !*** ./components/admin/ListQR.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/authActions */ "./actions/authActions.js");




var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\ListQR.js",
    _this = undefined,
    _s = $RefreshSig$();








var ListGites = function ListGites() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      QRs = _useState[0],
      setQRs = _useState[1];

  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_7__["getCookie"])('token');

  var listerLesQR = function listerLesQR() {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_3__["listeDesQR"])().then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        setGites.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(QRs).concat([data]));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    listerLesQR();
  }, []);

  var deleteConfirm = function deleteConfirm(slug) {
    var answer = window.confirm('Cette opération est irréversible, Etes-vous sur de vouloir supprimer cet article ?');

    if (answer) {
      // deleteGite(slug);
      console.log('Suppression');
    }
  }; // const QRs = [
  // 	{
  // 		_id: 1,
  // 		question:
  // 			'QUELLES PRÉCAUTIONS PRENEZ-VOUS SUITE À LA PANDÉMIE COVID-19 ?',
  // 		reponse:
  // 			'Les femmes de ménage utilisaient déjà des produits de professionnels bactéricides et fongicides pour le nettoyage des gîtes. Le linge de lits est fourni par un prestataire (SDEZ à Muizon) qui a aussi des clents comme des hôpitaux et hôtels. L’eau des spas est changée entre chaque location, ce que nous faisions déjà et l’eau des piscines est régulièrement analysée par un laboratoire.',
  // 	},
  // 	{
  // 		_id: 2,
  // 		question:
  // 			'AVEZ-VOUS REMBOURSÉ LES ACOMPTES DANS LE CADRE DU COVID-19 ?',
  // 		reponse:
  // 			'Oui, lorsque les clients ont demandé un report, nous avons reporté l’acompte déjà versé sur le nouveau contrat, sinon, nous avons fait un prêt à la banque et nous avons remboursé tous les acomptes pour les autres.',
  // 	},
  // 	{
  // 		_id: 3,
  // 		question: '-Y A T-IL PLUSIEURS GÎTES ?',
  // 		reponse:
  // 			'Actuellement, nous avons trois gîtes avec piscine et 1 gîte de grande capacité sans piscine, Vous pouvez parcourir le site pour avoir plus d’informations',
  // 	},
  // 	{
  // 		_id: 4,
  // 		question: "-Y A T-IL POSSIBILITÉ DE NE LOUER QU'UNE CHAMBRE ?",
  // 		reponse: 'Non, les gîtes sont toujours loués en totalité.',
  // 	},
  // 	{
  // 		_id: 5,
  // 		question: "-QUI A T'IL COMME POISSONS DANS LES ÉTANGS ?",
  // 		reponse:
  // 			'A Lauberoye et au Petit Nay, il y a carpes, tanches, brochets, gardons. Nous ne fournissons pas le matériel de pêche.',
  // 	},
  // ];


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Question"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "R\xE9ponse"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            colSpan: "2",
            children: "Actions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: QRs.map(function (QR) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            className: "mt-5",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: QR.question
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: QR.reponse
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
                href: "/admin/crud/gite/".concat(QR._id),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    "class": "fas fa-pencil-ruler",
                    style: {
                      color: 'orange'
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                onClick: function onClick() {
                  return deleteConfirm(QR._id);
                },
                "class": "fas fa-trash-alt",
                style: {
                  color: 'red',
                  cursor: 'pointer'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 7
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 4
    }, _this)
  }, void 0, false);
};

_s(ListGites, "sPR5HjPgWv9WhmiXrJRzstd0dIY=");

_c = ListGites;
/* harmony default export */ __webpack_exports__["default"] = (ListGites);

var _c;

$RefreshReg$(_c, "ListGites");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9MaXN0UVIuanMiXSwibmFtZXMiOlsiTGlzdEdpdGVzIiwidXNlU3RhdGUiLCJRUnMiLCJzZXRRUnMiLCJ0b2tlbiIsImdldENvb2tpZSIsImxpc3Rlckxlc1FSIiwibGlzdGVEZXNRUiIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic2V0R2l0ZXMiLCJ1c2VFZmZlY3QiLCJkZWxldGVDb25maXJtIiwic2x1ZyIsImFuc3dlciIsIndpbmRvdyIsImNvbmZpcm0iLCJtYXAiLCJRUiIsInF1ZXN0aW9uIiwicmVwb25zZSIsIl9pZCIsImNvbG9yIiwiY3Vyc29yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNEQyxzREFBUSxDQUFDLEVBQUQsQ0FEUDtBQUFBLE1BQ2hCQyxHQURnQjtBQUFBLE1BQ1hDLE1BRFc7O0FBR3ZCLE1BQU1DLEtBQUssR0FBR0Msc0VBQVMsQ0FBQyxPQUFELENBQXZCOztBQUVBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDekJDLDJFQUFVLEdBQUdDLElBQWIsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzNCLFVBQUlBLElBQUksQ0FBQ0MsS0FBVCxFQUFnQjtBQUNmQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLE9BRkQsTUFFTztBQUNORyxnQkFBUSxNQUFSLHNHQUFZWCxHQUFaLFVBQWlCTyxJQUFqQjtBQUNBO0FBQ0QsS0FORDtBQU9BLEdBUkQ7O0FBVUFLLHlEQUFTLENBQUMsWUFBTTtBQUNmUixlQUFXO0FBQ1gsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFNUyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLElBQUQsRUFBVTtBQUMvQixRQUFJQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxDQUNaLG9GQURZLENBQWI7O0FBR0EsUUFBSUYsTUFBSixFQUFZO0FBQ1g7QUFDQU4sYUFBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBO0FBQ0QsR0FSRCxDQW5CdUIsQ0E2QnZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsc0JBQ0M7QUFBQSwyQkFDQyxxRUFBQyxnREFBRDtBQUFBLDhCQUNDO0FBQUEsK0JBQ0M7QUFBQSxrQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZELGVBSUM7QUFBSSxtQkFBTyxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBU0M7QUFBQSxrQkFDRVYsR0FBRyxDQUFDa0IsR0FBSixDQUFRLFVBQUNDLEVBQUQ7QUFBQSw4QkFDUjtBQUFJLHFCQUFTLEVBQUMsTUFBZDtBQUFBLG9DQUNDO0FBQUEsd0JBQUtBLEVBQUUsQ0FBQ0M7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBRUM7QUFBQSx3QkFBS0QsRUFBRSxDQUFDRTtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkQsZUFHQztBQUFBLHFDQUNDLHFFQUFDLGdEQUFEO0FBQU0sb0JBQUksNkJBQXNCRixFQUFFLENBQUNHLEdBQXpCLENBQVY7QUFBQSx1Q0FDQztBQUFBLHlDQUNDO0FBQ0MsNkJBQU0scUJBRFA7QUFFQyx5QkFBSyxFQUFFO0FBQUVDLDJCQUFLLEVBQUU7QUFBVDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEQsZUFZQztBQUFBLHFDQUNDO0FBQ0MsdUJBQU8sRUFBRTtBQUFBLHlCQUFNVixhQUFhLENBQUNNLEVBQUUsQ0FBQ0csR0FBSixDQUFuQjtBQUFBLGlCQURWO0FBRUMseUJBQU0sa0JBRlA7QUFHQyxxQkFBSyxFQUFFO0FBQ05DLHVCQUFLLEVBQUUsS0FERDtBQUVOQyx3QkFBTSxFQUFFO0FBRkY7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFaRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFE7QUFBQSxTQUFSO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELG1CQUREO0FBd0NBLENBdkdEOztHQUFNMUIsUzs7S0FBQUEsUztBQXlHU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vZ2VzdGlvbkRpdmVycy9GQVEuNDZkZGJhYTIyZjQxMzRhZTk2MTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYmxlIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IGxpc3RlRGVzUVIgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcblxyXG5jb25zdCBMaXN0R2l0ZXMgPSAoKSA9PiB7XHJcblx0Y29uc3QgW1FScywgc2V0UVJzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblxyXG5cdGNvbnN0IGxpc3Rlckxlc1FSID0gKCkgPT4ge1xyXG5cdFx0bGlzdGVEZXNRUigpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0R2l0ZXMoLi4uUVJzLCBkYXRhKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxpc3Rlckxlc1FSKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCBkZWxldGVDb25maXJtID0gKHNsdWcpID0+IHtcclxuXHRcdGxldCBhbnN3ZXIgPSB3aW5kb3cuY29uZmlybShcclxuXHRcdFx0J0NldHRlIG9ww6lyYXRpb24gZXN0IGlycsOpdmVyc2libGUsIEV0ZXMtdm91cyBzdXIgZGUgdm91bG9pciBzdXBwcmltZXIgY2V0IGFydGljbGUgPydcclxuXHRcdCk7XHJcblx0XHRpZiAoYW5zd2VyKSB7XHJcblx0XHRcdC8vIGRlbGV0ZUdpdGUoc2x1Zyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdTdXBwcmVzc2lvbicpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIGNvbnN0IFFScyA9IFtcclxuXHQvLyBcdHtcclxuXHQvLyBcdFx0X2lkOiAxLFxyXG5cdC8vIFx0XHRxdWVzdGlvbjpcclxuXHQvLyBcdFx0XHQnUVVFTExFUyBQUsOJQ0FVVElPTlMgUFJFTkVaLVZPVVMgU1VJVEUgw4AgTEEgUEFORMOJTUlFIENPVklELTE5ID8nLFxyXG5cdC8vIFx0XHRyZXBvbnNlOlxyXG5cdC8vIFx0XHRcdCdMZXMgZmVtbWVzIGRlIG3DqW5hZ2UgdXRpbGlzYWllbnQgZMOpasOgIGRlcyBwcm9kdWl0cyBkZSBwcm9mZXNzaW9ubmVscyBiYWN0w6lyaWNpZGVzIGV0IGZvbmdpY2lkZXMgcG91ciBsZSBuZXR0b3lhZ2UgZGVzIGfDrnRlcy4gTGUgbGluZ2UgZGUgbGl0cyBlc3QgZm91cm5pIHBhciB1biBwcmVzdGF0YWlyZSAoU0RFWiDDoCBNdWl6b24pIHF1aSBhIGF1c3NpIGRlcyBjbGVudHMgY29tbWUgZGVzIGjDtHBpdGF1eCBldCBow7R0ZWxzLiBM4oCZZWF1IGRlcyBzcGFzIGVzdCBjaGFuZ8OpZSBlbnRyZSBjaGFxdWUgbG9jYXRpb24sIGNlIHF1ZSBub3VzIGZhaXNpb25zIGTDqWrDoCBldCBs4oCZZWF1IGRlcyBwaXNjaW5lcyBlc3QgcsOpZ3VsacOocmVtZW50IGFuYWx5c8OpZSBwYXIgdW4gbGFib3JhdG9pcmUuJyxcclxuXHQvLyBcdH0sXHJcblx0Ly8gXHR7XHJcblx0Ly8gXHRcdF9pZDogMixcclxuXHQvLyBcdFx0cXVlc3Rpb246XHJcblx0Ly8gXHRcdFx0J0FWRVotVk9VUyBSRU1CT1VSU8OJIExFUyBBQ09NUFRFUyBEQU5TIExFIENBRFJFIERVIENPVklELTE5ID8nLFxyXG5cdC8vIFx0XHRyZXBvbnNlOlxyXG5cdC8vIFx0XHRcdCdPdWksIGxvcnNxdWUgbGVzIGNsaWVudHMgb250IGRlbWFuZMOpIHVuIHJlcG9ydCwgbm91cyBhdm9ucyByZXBvcnTDqSBs4oCZYWNvbXB0ZSBkw6lqw6AgdmVyc8OpIHN1ciBsZSBub3V2ZWF1IGNvbnRyYXQsIHNpbm9uLCBub3VzIGF2b25zIGZhaXQgdW4gcHLDqnQgw6AgbGEgYmFucXVlIGV0IG5vdXMgYXZvbnMgcmVtYm91cnPDqSB0b3VzIGxlcyBhY29tcHRlcyBwb3VyIGxlcyBhdXRyZXMuJyxcclxuXHQvLyBcdH0sXHJcblx0Ly8gXHR7XHJcblx0Ly8gXHRcdF9pZDogMyxcclxuXHQvLyBcdFx0cXVlc3Rpb246ICctWSBBIFQtSUwgUExVU0lFVVJTIEfDjlRFUyA/JyxcclxuXHQvLyBcdFx0cmVwb25zZTpcclxuXHQvLyBcdFx0XHQnQWN0dWVsbGVtZW50LCBub3VzIGF2b25zIHRyb2lzIGfDrnRlcyBhdmVjIHBpc2NpbmUgZXQgMSBnw650ZSBkZSBncmFuZGUgY2FwYWNpdMOpIHNhbnMgcGlzY2luZSwgVm91cyBwb3V2ZXogcGFyY291cmlyIGxlIHNpdGUgcG91ciBhdm9pciBwbHVzIGTigJlpbmZvcm1hdGlvbnMnLFxyXG5cdC8vIFx0fSxcclxuXHQvLyBcdHtcclxuXHQvLyBcdFx0X2lkOiA0LFxyXG5cdC8vIFx0XHRxdWVzdGlvbjogXCItWSBBIFQtSUwgUE9TU0lCSUxJVMOJIERFIE5FIExPVUVSIFFVJ1VORSBDSEFNQlJFID9cIixcclxuXHQvLyBcdFx0cmVwb25zZTogJ05vbiwgbGVzIGfDrnRlcyBzb250IHRvdWpvdXJzIGxvdcOpcyBlbiB0b3RhbGl0w6kuJyxcclxuXHQvLyBcdH0sXHJcblx0Ly8gXHR7XHJcblx0Ly8gXHRcdF9pZDogNSxcclxuXHQvLyBcdFx0cXVlc3Rpb246IFwiLVFVSSBBIFQnSUwgQ09NTUUgUE9JU1NPTlMgREFOUyBMRVMgw4lUQU5HUyA/XCIsXHJcblx0Ly8gXHRcdHJlcG9uc2U6XHJcblx0Ly8gXHRcdFx0J0EgTGF1YmVyb3llIGV0IGF1IFBldGl0IE5heSwgaWwgeSBhIGNhcnBlcywgdGFuY2hlcywgYnJvY2hldHMsIGdhcmRvbnMuIE5vdXMgbmUgZm91cm5pc3NvbnMgcGFzIGxlIG1hdMOpcmllbCBkZSBww6pjaGUuJyxcclxuXHQvLyBcdH0sXHJcblx0Ly8gXTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxUYWJsZT5cclxuXHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0aD5RdWVzdGlvbjwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5Sw6lwb25zZTwvdGg+XHJcblxyXG5cdFx0XHRcdFx0XHQ8dGggY29sU3Bhbj0nMic+QWN0aW9uczwvdGg+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0e1FScy5tYXAoKFFSKSA9PiAoXHJcblx0XHRcdFx0XHRcdDx0ciBjbGFzc05hbWU9J210LTUnPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD57UVIucXVlc3Rpb259PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+e1FSLnJlcG9uc2V9PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgL2FkbWluL2NydWQvZ2l0ZS8ke1FSLl9pZH1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPSdmYXMgZmEtcGVuY2lsLXJ1bGVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgY29sb3I6ICdvcmFuZ2UnIH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZGVsZXRlQ29uZmlybShRUi5faWQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz0nZmFzIGZhLXRyYXNoLWFsdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3JlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0PC9UYWJsZT5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0R2l0ZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=