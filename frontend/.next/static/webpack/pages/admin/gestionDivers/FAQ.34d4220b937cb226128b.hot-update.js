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
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_3__["listeDesQR"])(token).then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        setQRs.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(QRs).concat([data]));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9MaXN0UVIuanMiXSwibmFtZXMiOlsiTGlzdEdpdGVzIiwidXNlU3RhdGUiLCJRUnMiLCJzZXRRUnMiLCJ0b2tlbiIsImdldENvb2tpZSIsImxpc3Rlckxlc1FSIiwibGlzdGVEZXNRUiIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiZGVsZXRlQ29uZmlybSIsInNsdWciLCJhbnN3ZXIiLCJ3aW5kb3ciLCJjb25maXJtIiwibWFwIiwiUVIiLCJxdWVzdGlvbiIsInJlcG9uc2UiLCJfaWQiLCJjb2xvciIsImN1cnNvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDREMsc0RBQVEsQ0FBQyxFQUFELENBRFA7QUFBQSxNQUNoQkMsR0FEZ0I7QUFBQSxNQUNYQyxNQURXOztBQUd2QixNQUFNQyxLQUFLLEdBQUdDLHNFQUFTLENBQUMsT0FBRCxDQUF2Qjs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3pCQywyRUFBVSxDQUFDSCxLQUFELENBQVYsQ0FBa0JJLElBQWxCLENBQXVCLFVBQUNDLElBQUQsRUFBVTtBQUNoQyxVQUFJQSxJQUFJLENBQUNDLEtBQVQsRUFBZ0I7QUFDZkMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQSxPQUZELE1BRU87QUFDTlAsY0FBTSxNQUFOLHNHQUFVRCxHQUFWLFVBQWVPLElBQWY7QUFDQTtBQUNELEtBTkQ7QUFPQSxHQVJEOztBQVVBSSx5REFBUyxDQUFDLFlBQU07QUFDZlAsZUFBVztBQUNYLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsTUFBTVEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxJQUFELEVBQVU7QUFDL0IsUUFBSUMsTUFBTSxHQUFHQyxNQUFNLENBQUNDLE9BQVAsQ0FDWixvRkFEWSxDQUFiOztBQUdBLFFBQUlGLE1BQUosRUFBWTtBQUNYO0FBQ0FMLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQTtBQUNELEdBUkQsQ0FuQnVCLENBNkJ2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLHNCQUNDO0FBQUEsMkJBQ0MscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDQztBQUFBLCtCQUNDO0FBQUEsa0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRCxlQUlDO0FBQUksbUJBQU8sRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQVNDO0FBQUEsa0JBQ0VWLEdBQUcsQ0FBQ2lCLEdBQUosQ0FBUSxVQUFDQyxFQUFEO0FBQUEsOEJBQ1I7QUFBSSxxQkFBUyxFQUFDLE1BQWQ7QUFBQSxvQ0FDQztBQUFBLHdCQUFLQSxFQUFFLENBQUNDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUVDO0FBQUEsd0JBQUtELEVBQUUsQ0FBQ0U7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZELGVBR0M7QUFBQSxxQ0FDQyxxRUFBQyxnREFBRDtBQUFNLG9CQUFJLDZCQUFzQkYsRUFBRSxDQUFDRyxHQUF6QixDQUFWO0FBQUEsdUNBQ0M7QUFBQSx5Q0FDQztBQUNDLDZCQUFNLHFCQURQO0FBRUMseUJBQUssRUFBRTtBQUFFQywyQkFBSyxFQUFFO0FBQVQ7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhELGVBWUM7QUFBQSxxQ0FDQztBQUNDLHVCQUFPLEVBQUU7QUFBQSx5QkFBTVYsYUFBYSxDQUFDTSxFQUFFLENBQUNHLEdBQUosQ0FBbkI7QUFBQSxpQkFEVjtBQUVDLHlCQUFNLGtCQUZQO0FBR0MscUJBQUssRUFBRTtBQUNOQyx1QkFBSyxFQUFFLEtBREQ7QUFFTkMsd0JBQU0sRUFBRTtBQUZGO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURRO0FBQUEsU0FBUjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxtQkFERDtBQXdDQSxDQXZHRDs7R0FBTXpCLFM7O0tBQUFBLFM7QUF5R1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2dlc3Rpb25EaXZlcnMvRkFRLjM0ZDQyMjBiOTM3Y2IyMjYxMjhiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWJsZSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyBsaXN0ZURlc1FSIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5cclxuY29uc3QgTGlzdEdpdGVzID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtRUnMsIHNldFFSc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cclxuXHRjb25zdCBsaXN0ZXJMZXNRUiA9ICgpID0+IHtcclxuXHRcdGxpc3RlRGVzUVIodG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0UVJzKC4uLlFScywgZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsaXN0ZXJMZXNRUigpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc3QgZGVsZXRlQ29uZmlybSA9IChzbHVnKSA9PiB7XHJcblx0XHRsZXQgYW5zd2VyID0gd2luZG93LmNvbmZpcm0oXHJcblx0XHRcdCdDZXR0ZSBvcMOpcmF0aW9uIGVzdCBpcnLDqXZlcnNpYmxlLCBFdGVzLXZvdXMgc3VyIGRlIHZvdWxvaXIgc3VwcHJpbWVyIGNldCBhcnRpY2xlID8nXHJcblx0XHQpO1xyXG5cdFx0aWYgKGFuc3dlcikge1xyXG5cdFx0XHQvLyBkZWxldGVHaXRlKHNsdWcpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnU3VwcHJlc3Npb24nKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvLyBjb25zdCBRUnMgPSBbXHJcblx0Ly8gXHR7XHJcblx0Ly8gXHRcdF9pZDogMSxcclxuXHQvLyBcdFx0cXVlc3Rpb246XHJcblx0Ly8gXHRcdFx0J1FVRUxMRVMgUFLDiUNBVVRJT05TIFBSRU5FWi1WT1VTIFNVSVRFIMOAIExBIFBBTkTDiU1JRSBDT1ZJRC0xOSA/JyxcclxuXHQvLyBcdFx0cmVwb25zZTpcclxuXHQvLyBcdFx0XHQnTGVzIGZlbW1lcyBkZSBtw6luYWdlIHV0aWxpc2FpZW50IGTDqWrDoCBkZXMgcHJvZHVpdHMgZGUgcHJvZmVzc2lvbm5lbHMgYmFjdMOpcmljaWRlcyBldCBmb25naWNpZGVzIHBvdXIgbGUgbmV0dG95YWdlIGRlcyBnw650ZXMuIExlIGxpbmdlIGRlIGxpdHMgZXN0IGZvdXJuaSBwYXIgdW4gcHJlc3RhdGFpcmUgKFNERVogw6AgTXVpem9uKSBxdWkgYSBhdXNzaSBkZXMgY2xlbnRzIGNvbW1lIGRlcyBow7RwaXRhdXggZXQgaMO0dGVscy4gTOKAmWVhdSBkZXMgc3BhcyBlc3QgY2hhbmfDqWUgZW50cmUgY2hhcXVlIGxvY2F0aW9uLCBjZSBxdWUgbm91cyBmYWlzaW9ucyBkw6lqw6AgZXQgbOKAmWVhdSBkZXMgcGlzY2luZXMgZXN0IHLDqWd1bGnDqHJlbWVudCBhbmFseXPDqWUgcGFyIHVuIGxhYm9yYXRvaXJlLicsXHJcblx0Ly8gXHR9LFxyXG5cdC8vIFx0e1xyXG5cdC8vIFx0XHRfaWQ6IDIsXHJcblx0Ly8gXHRcdHF1ZXN0aW9uOlxyXG5cdC8vIFx0XHRcdCdBVkVaLVZPVVMgUkVNQk9VUlPDiSBMRVMgQUNPTVBURVMgREFOUyBMRSBDQURSRSBEVSBDT1ZJRC0xOSA/JyxcclxuXHQvLyBcdFx0cmVwb25zZTpcclxuXHQvLyBcdFx0XHQnT3VpLCBsb3JzcXVlIGxlcyBjbGllbnRzIG9udCBkZW1hbmTDqSB1biByZXBvcnQsIG5vdXMgYXZvbnMgcmVwb3J0w6kgbOKAmWFjb21wdGUgZMOpasOgIHZlcnPDqSBzdXIgbGUgbm91dmVhdSBjb250cmF0LCBzaW5vbiwgbm91cyBhdm9ucyBmYWl0IHVuIHByw6p0IMOgIGxhIGJhbnF1ZSBldCBub3VzIGF2b25zIHJlbWJvdXJzw6kgdG91cyBsZXMgYWNvbXB0ZXMgcG91ciBsZXMgYXV0cmVzLicsXHJcblx0Ly8gXHR9LFxyXG5cdC8vIFx0e1xyXG5cdC8vIFx0XHRfaWQ6IDMsXHJcblx0Ly8gXHRcdHF1ZXN0aW9uOiAnLVkgQSBULUlMIFBMVVNJRVVSUyBHw45URVMgPycsXHJcblx0Ly8gXHRcdHJlcG9uc2U6XHJcblx0Ly8gXHRcdFx0J0FjdHVlbGxlbWVudCwgbm91cyBhdm9ucyB0cm9pcyBnw650ZXMgYXZlYyBwaXNjaW5lIGV0IDEgZ8OudGUgZGUgZ3JhbmRlIGNhcGFjaXTDqSBzYW5zIHBpc2NpbmUsIFZvdXMgcG91dmV6IHBhcmNvdXJpciBsZSBzaXRlIHBvdXIgYXZvaXIgcGx1cyBk4oCZaW5mb3JtYXRpb25zJyxcclxuXHQvLyBcdH0sXHJcblx0Ly8gXHR7XHJcblx0Ly8gXHRcdF9pZDogNCxcclxuXHQvLyBcdFx0cXVlc3Rpb246IFwiLVkgQSBULUlMIFBPU1NJQklMSVTDiSBERSBORSBMT1VFUiBRVSdVTkUgQ0hBTUJSRSA/XCIsXHJcblx0Ly8gXHRcdHJlcG9uc2U6ICdOb24sIGxlcyBnw650ZXMgc29udCB0b3Vqb3VycyBsb3XDqXMgZW4gdG90YWxpdMOpLicsXHJcblx0Ly8gXHR9LFxyXG5cdC8vIFx0e1xyXG5cdC8vIFx0XHRfaWQ6IDUsXHJcblx0Ly8gXHRcdHF1ZXN0aW9uOiBcIi1RVUkgQSBUJ0lMIENPTU1FIFBPSVNTT05TIERBTlMgTEVTIMOJVEFOR1MgP1wiLFxyXG5cdC8vIFx0XHRyZXBvbnNlOlxyXG5cdC8vIFx0XHRcdCdBIExhdWJlcm95ZSBldCBhdSBQZXRpdCBOYXksIGlsIHkgYSBjYXJwZXMsIHRhbmNoZXMsIGJyb2NoZXRzLCBnYXJkb25zLiBOb3VzIG5lIGZvdXJuaXNzb25zIHBhcyBsZSBtYXTDqXJpZWwgZGUgcMOqY2hlLicsXHJcblx0Ly8gXHR9LFxyXG5cdC8vIF07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8VGFibGU+XHJcblx0XHRcdFx0PHRoZWFkPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGg+UXVlc3Rpb248L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+UsOpcG9uc2U8L3RoPlxyXG5cclxuXHRcdFx0XHRcdFx0PHRoIGNvbFNwYW49JzInPkFjdGlvbnM8L3RoPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdHtRUnMubWFwKChRUikgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8dHIgY2xhc3NOYW1lPSdtdC01Jz5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+e1FSLnF1ZXN0aW9ufTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPntRUi5yZXBvbnNlfTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC9hZG1pbi9jcnVkL2dpdGUvJHtRUi5faWR9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz0nZmFzIGZhLXBlbmNpbC1ydWxlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGNvbG9yOiAnb3JhbmdlJyB9fT48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGRlbGV0ZUNvbmZpcm0oUVIuX2lkKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9J2ZhcyBmYS10cmFzaC1hbHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdyZWQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnNvcjogJ3BvaW50ZXInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT48L2k+XHJcblx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdDwvVGFibGU+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdEdpdGVzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9