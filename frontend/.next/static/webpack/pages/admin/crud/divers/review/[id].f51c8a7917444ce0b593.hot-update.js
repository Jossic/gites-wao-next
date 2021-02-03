webpackHotUpdate_N_E("pages/admin/crud/divers/review/[id]",{

/***/ "./components/admin/forms/FormUpdateReview.js":
/*!****************************************************!*\
  !*** ./components/admin/forms/FormUpdateReview.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_reviewActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../actions/reviewActions */ "./actions/reviewActions.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\forms\\FormUpdateReview.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var FormUpdateReview = function FormUpdateReview(_ref) {
  _s();

  var preloadedValues = _ref.preloadedValues,
      router = _ref.router;
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_9__["getCookie"])('token');

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_10__["useForm"])({
    defaultValues: preloadedValues
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    client: '',
    giteConcerne: '',
    commentaire: '',
    note: '',
    success: '',
    loading: false,
    error: ''
  }),
      values = _useState[0],
      setValues = _useState[1];

  var success = values.success,
      loading = values.loading,
      error = values.error,
      giteConcerne = values.giteConcerne;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      gites = _useState2[0],
      setGites = _useState2[1];

  var listDesGites = function listDesGites() {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_8__["listGitesNoms"])().then(function (data) {
      console.log('id', router.query.id); // console.log('data nom vaut', data);

      if (data.error) {
        console.log(error);
      } else {
        setGites.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(gites).concat([data]));
      }
    });
  };

  var listDetailReview = function listDetailReview() {
    console.log('id', router.query.id);
    var ident = router.query.id;
    Object(_actions_reviewActions__WEBPACK_IMPORTED_MODULE_6__["listeOneReview"])(ident, token).then(function (data) {
      console.log('data review vaut', data.giteConcerne);

      if (data.error) {
        console.log(data.error);
      } else {
        var giteConc = data.giteConcerne;
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          giteConcerne: giteConc
        }));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    listDetailReview();
    listDesGites();
  }, []);

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setValues(_objectSpread(_objectSpread({}, values), {}, {
                loading: true
              }));
              console.log('data vaut =>', data);
              Object(_actions_reviewActions__WEBPACK_IMPORTED_MODULE_6__["updateReview"])(data, router.query.id, token).then(function (result) {
                console.log('result vaut =>', result);

                if (result.error) {
                  console.log('une grosse erreur');
                  setValues(_objectSpread(_objectSpread({}, values), {}, {
                    error: result.error
                  }));
                } else {
                  setValues(_objectSpread(_objectSpread({}, values), {}, {
                    client: '',
                    giteConcerne: '',
                    commentaire: '',
                    note: '',
                    success: true,
                    loading: false
                  }));
                  setTimeout(function () {
                    next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/admin/gestionReviews');
                  }, 3000);
                }
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: handleSubmit(onSubmit),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-12",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: ["Selection du g\xEEte* (Pour info, valeur pr\xE9c\xE9dement selectionn\xE9e :", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                children: giteConcerne
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 9
              }, _this), ")"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
              ref: register({
                required: true
              }),
              name: "giteConcerne" // value={giteConcerne}
              ,
              className: "custom-select mr-sm-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "",
                children: "G\xEEte..."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 9
              }, _this), gites.map(function (gite, i) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: gite.slug,
                  children: gite.nom
                }, i, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 10
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Nom & premi\xE8re lettre du pr\xE9nom du client (pour l'anonymat des commentaires)*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              name: "client",
              ref: register({
                required: true
              }) // value={client}
              ,
              className: "form-control",
              c: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Note sur 5 *"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
              ref: register({
                required: true
              }),
              name: "note",
              className: "custom-select mr-sm-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "",
                children: "Votre note..."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "1",
                children: "1 - Tr\xE8s mauvais"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "2",
                children: "2 - Mauvais"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "3",
                children: "3 - Moyen"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "4",
                children: "4 - Bon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "5",
                children: "5 - Tr\xE8s bon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Commentaire"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              type: "text",
              name: "commentaire",
              ref: register() // value={commentaire}
              ,
              className: "form-control",
              cols: "30",
              rows: "5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 5
      }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Alert"], {
        color: "success",
        children: "La review a bien \xE9t\xE9 modifi\xE9e, redirection en cours..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 6
      }, _this), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "alert alert-success",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Spinner"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 7
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 6
      }, _this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Alert"], {
        color: "success",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-info",
          children: "Cr\xE9er ce commentaire"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 4
    }, _this)
  }, void 0, false);
}; // export async function getServerSideProps(context) {
// 	listeOneReview().then((data) => {
// 		if (data.error) {
// 			console.log(data.error);
// 		} else {
// 			return {
// 				props: {
// 					gite: data,
// 				},
// 			};
// 		}
// 	});
// }


_s(FormUpdateReview, "yXDPU0wKn2nqrUaeep9r6B15Nhc=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_10__["useForm"]];
});

_c = FormUpdateReview;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(FormUpdateReview));

var _c, _c2;

$RefreshReg$(_c, "FormUpdateReview");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9Gb3JtVXBkYXRlUmV2aWV3LmpzIl0sIm5hbWVzIjpbIkZvcm1VcGRhdGVSZXZpZXciLCJwcmVsb2FkZWRWYWx1ZXMiLCJyb3V0ZXIiLCJ0b2tlbiIsImdldENvb2tpZSIsInVzZUZvcm0iLCJkZWZhdWx0VmFsdWVzIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ1c2VTdGF0ZSIsImNsaWVudCIsImdpdGVDb25jZXJuZSIsImNvbW1lbnRhaXJlIiwibm90ZSIsInN1Y2Nlc3MiLCJsb2FkaW5nIiwiZXJyb3IiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJnaXRlcyIsInNldEdpdGVzIiwibGlzdERlc0dpdGVzIiwibGlzdEdpdGVzTm9tcyIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwiaWQiLCJsaXN0RGV0YWlsUmV2aWV3IiwiaWRlbnQiLCJsaXN0ZU9uZVJldmlldyIsImdpdGVDb25jIiwidXNlRWZmZWN0Iiwib25TdWJtaXQiLCJ1cGRhdGVSZXZpZXciLCJyZXN1bHQiLCJzZXRUaW1lb3V0IiwiUm91dGVyIiwicHVzaCIsInJlcXVpcmVkIiwibWFwIiwiZ2l0ZSIsImkiLCJzbHVnIiwibm9tIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQWlDO0FBQUE7O0FBQUEsTUFBOUJDLGVBQThCLFFBQTlCQSxlQUE4QjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUN6RCxNQUFNQyxLQUFLLEdBQUdDLHNFQUFTLENBQUMsT0FBRCxDQUF2Qjs7QUFEeUQsaUJBR3RCQyxnRUFBTyxDQUFDO0FBQzFDQyxpQkFBYSxFQUFFTDtBQUQyQixHQUFE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QTtBQUFBO0FBQUE7QUFBQSxlQXJFRixFQXlFRUMsS0FBSyxpQkFBSSxxRUFBQyxnREFBRDtBQUFPLGFBQUssRUFBQyxTQUFiO0FBQUEsa0JBQXdCQTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBekVYLGVBMEVDO0FBQUEsK0JBQ0M7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixtQkFBUyxFQUFDLGNBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTFFRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxtQkFERDtBQW9GQSxDQS9KRCxDLENBaUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7R0E3S01oQixnQjtVQUc4Qkssd0Q7OztLQUg5QkwsZ0I7QUErS1MscUVBQUE4QywrREFBVSxDQUFDOUMsZ0JBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9kaXZlcnMvcmV2aWV3L1tpZF0uZjUxYzhhNzkxNzQ0NGNlMGI1OTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGxpc3RlT25lUmV2aWV3LCB1cGRhdGVSZXZpZXcgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL3Jldmlld0FjdGlvbnMnO1xyXG5pbXBvcnQgeyBTcGlubmVyLCBBbGVydCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyBsaXN0R2l0ZXNOb21zIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBGb3JtVXBkYXRlUmV2aWV3ID0gKHsgcHJlbG9hZGVkVmFsdWVzLCByb3V0ZXIgfSkgPT4ge1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cclxuXHRjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm0oe1xyXG5cdFx0ZGVmYXVsdFZhbHVlczogcHJlbG9hZGVkVmFsdWVzLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0Y2xpZW50OiAnJyxcclxuXHRcdGdpdGVDb25jZXJuZTogJycsXHJcblx0XHRjb21tZW50YWlyZTogJycsXHJcblx0XHRub3RlOiAnJyxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRlcnJvcjogJycsXHJcblx0fSk7XHJcblx0Y29uc3QgeyBzdWNjZXNzLCBsb2FkaW5nLCBlcnJvciwgZ2l0ZUNvbmNlcm5lIH0gPSB2YWx1ZXM7XHJcblx0Y29uc3QgW2dpdGVzLCBzZXRHaXRlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdGNvbnN0IGxpc3REZXNHaXRlcyA9ICgpID0+IHtcclxuXHRcdGxpc3RHaXRlc05vbXMoKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdpZCcsIHJvdXRlci5xdWVyeS5pZCk7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdkYXRhIG5vbSB2YXV0JywgZGF0YSk7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldEdpdGVzKC4uLmdpdGVzLCBkYXRhKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbGlzdERldGFpbFJldmlldyA9ICgpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKCdpZCcsIHJvdXRlci5xdWVyeS5pZCk7XHJcblx0XHRjb25zdCBpZGVudCA9IHJvdXRlci5xdWVyeS5pZDtcclxuXHRcdGxpc3RlT25lUmV2aWV3KGlkZW50LCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZGF0YSByZXZpZXcgdmF1dCcsIGRhdGEuZ2l0ZUNvbmNlcm5lKTtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb25zdCBnaXRlQ29uYyA9IGRhdGEuZ2l0ZUNvbmNlcm5lO1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZ2l0ZUNvbmNlcm5lOiBnaXRlQ29uYyB9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxpc3REZXRhaWxSZXZpZXcoKTtcclxuXHRcdGxpc3REZXNHaXRlcygpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdFx0Y29uc29sZS5sb2coJ2RhdGEgdmF1dCA9PicsIGRhdGEpO1xyXG5cdFx0dXBkYXRlUmV2aWV3KGRhdGEsIHJvdXRlci5xdWVyeS5pZCwgdG9rZW4pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygncmVzdWx0IHZhdXQgPT4nLCByZXN1bHQpO1xyXG5cdFx0XHRpZiAocmVzdWx0LmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3VuZSBncm9zc2UgZXJyZXVyJyk7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogcmVzdWx0LmVycm9yIH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRjbGllbnQ6ICcnLFxyXG5cdFx0XHRcdFx0Z2l0ZUNvbmNlcm5lOiAnJyxcclxuXHRcdFx0XHRcdGNvbW1lbnRhaXJlOiAnJyxcclxuXHRcdFx0XHRcdG5vdGU6ICcnLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Um91dGVyLnB1c2goJy9hZG1pbi9nZXN0aW9uUmV2aWV3cycpO1xyXG5cdFx0XHRcdH0sIDMwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC0xMic+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5cclxuXHRcdFx0XHRcdFx0XHRcdFNlbGVjdGlvbiBkdSBnw650ZSogKFBvdXIgaW5mbywgdmFsZXVyXHJcblx0XHRcdFx0XHRcdFx0XHRwcsOpY8OpZGVtZW50IHNlbGVjdGlvbm7DqWUgOnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3Ryb25nPntnaXRlQ29uY2VybmV9PC9zdHJvbmc+KVxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PHNlbGVjdFxyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT0nZ2l0ZUNvbmNlcm5lJ1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gdmFsdWU9e2dpdGVDb25jZXJuZX1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY3VzdG9tLXNlbGVjdCBtci1zbS0yJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9Jyc+R8OudGUuLi48L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdHtnaXRlcy5tYXAoKGdpdGUsIGkpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtnaXRlLnNsdWd9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtnaXRlLm5vbX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5cclxuXHRcdFx0XHRcdFx0XHRcdE5vbSAmIHByZW1pw6hyZSBsZXR0cmUgZHUgcHLDqW5vbSBkdSBjbGllbnQgKHBvdXJcclxuXHRcdFx0XHRcdFx0XHRcdGwnYW5vbnltYXQgZGVzIGNvbW1lbnRhaXJlcykqXHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPSdjbGllbnQnXHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHQvLyB2YWx1ZT17Y2xpZW50fVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRjXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5Ob3RlIHN1ciA1ICo8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxzZWxlY3RcclxuXHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J25vdGUnXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2N1c3RvbS1zZWxlY3QgbXItc20tMic+XHJcblx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPScnPlZvdHJlIG5vdGUuLi48L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9JzEnPjEgLSBUcsOocyBtYXV2YWlzPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPScyJz4yIC0gTWF1dmFpczwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nMyc+MyAtIE1veWVuPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPSc0Jz40IC0gQm9uPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPSc1Jz41IC0gVHLDqHMgYm9uPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+Q29tbWVudGFpcmU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J2NvbW1lbnRhaXJlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3RlcigpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gdmFsdWU9e2NvbW1lbnRhaXJlfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRjb2xzPSczMCdcclxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9JzUnPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0e3N1Y2Nlc3MgJiYgKFxyXG5cdFx0XHRcdFx0PEFsZXJ0IGNvbG9yPSdzdWNjZXNzJz5cclxuXHRcdFx0XHRcdFx0TGEgcmV2aWV3IGEgYmllbiDDqXTDqSBtb2RpZmnDqWUsIHJlZGlyZWN0aW9uIGVuIGNvdXJzLi4uXHJcblx0XHRcdFx0XHQ8L0FsZXJ0PlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdFx0e2xvYWRpbmcgJiYgKFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MnPlxyXG5cdFx0XHRcdFx0XHQ8U3Bpbm5lciAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0XHR7ZXJyb3IgJiYgPEFsZXJ0IGNvbG9yPSdzdWNjZXNzJz57ZXJyb3J9PC9BbGVydD59XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0biBidG4taW5mbyc+XHJcblx0XHRcdFx0XHRcdENyw6llciBjZSBjb21tZW50YWlyZVxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuLy8gXHRsaXN0ZU9uZVJldmlldygpLnRoZW4oKGRhdGEpID0+IHtcclxuLy8gXHRcdGlmIChkYXRhLmVycm9yKSB7XHJcbi8vIFx0XHRcdGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG4vLyBcdFx0fSBlbHNlIHtcclxuLy8gXHRcdFx0cmV0dXJuIHtcclxuLy8gXHRcdFx0XHRwcm9wczoge1xyXG4vLyBcdFx0XHRcdFx0Z2l0ZTogZGF0YSxcclxuLy8gXHRcdFx0XHR9LFxyXG4vLyBcdFx0XHR9O1xyXG4vLyBcdFx0fVxyXG4vLyBcdH0pO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEZvcm1VcGRhdGVSZXZpZXcpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9