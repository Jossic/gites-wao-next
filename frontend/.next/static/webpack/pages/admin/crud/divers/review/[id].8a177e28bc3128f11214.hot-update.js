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

  var renderSelect = function renderSelect() {
    // console.log('gites vaut =>', gites);
    return;
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
                lineNumber: 99,
                columnNumber: 9
              }, _this), ")"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 96,
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
                lineNumber: 106,
                columnNumber: 9
              }, _this), gites.map(function (gite, i) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: gite.slug,
                  children: gite.nom
                }, i, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 10
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Nom & premi\xE8re lettre du pr\xE9nom du client (pour l'anonymat des commentaires)*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
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
              lineNumber: 119,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Note sur 5 *"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
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
                lineNumber: 134,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "1",
                children: "1 - Tr\xE8s mauvais"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "2",
                children: "2 - Mauvais"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "3",
                children: "3 - Moyen"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "4",
                children: "4 - Bon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "5",
                children: "5 - Tr\xE8s bon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Commentaire"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
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
              lineNumber: 144,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 5
      }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Alert"], {
        color: "success",
        children: "La review a bien \xE9t\xE9 modifi\xE9e, redirection en cours..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 6
      }, _this), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "alert alert-success",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Spinner"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 7
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 6
      }, _this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Alert"], {
        color: "success",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-info",
          children: "Cr\xE9er ce commentaire"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9Gb3JtVXBkYXRlUmV2aWV3LmpzIl0sIm5hbWVzIjpbIkZvcm1VcGRhdGVSZXZpZXciLCJwcmVsb2FkZWRWYWx1ZXMiLCJyb3V0ZXIiLCJ0b2tlbiIsImdldENvb2tpZSIsInVzZUZvcm0iLCJkZWZhdWx0VmFsdWVzIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ1c2VTdGF0ZSIsImNsaWVudCIsImdpdGVDb25jZXJuZSIsImNvbW1lbnRhaXJlIiwibm90ZSIsInN1Y2Nlc3MiLCJsb2FkaW5nIiwiZXJyb3IiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJnaXRlcyIsInNldEdpdGVzIiwibGlzdERlc0dpdGVzIiwibGlzdEdpdGVzTm9tcyIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwiaWQiLCJsaXN0RGV0YWlsUmV2aWV3IiwiaWRlbnQiLCJsaXN0ZU9uZVJldmlldyIsImdpdGVDb25jIiwicmVuZGVyU2VsZWN0IiwidXNlRWZmZWN0Iiwib25TdWJtaXQiLCJ1cGRhdGVSZXZpZXciLCJyZXN1bHQiLCJzZXRUaW1lb3V0IiwiUm91dGVyIiwicHVzaCIsInJlcXVpcmVkIiwibWFwIiwiZ2l0ZSIsImkiLCJzbHVnIiwibm9tIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQWlDO0FBQUE7O0FBQUEsTUFBOUJDLGVBQThCLFFBQTlCQSxlQUE4QjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUN6RCxNQUFNQyxLQUFLLEdBQUdDLHNFQUFTLENBQUMsT0FBRCxDQUF2Qjs7QUFEeUQsaUJBR3RCQyxnRUFBTyxDQUFDO0FBQzFDQyxpQkFBYSxF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O0FBQUssaUJBQVMsRUFBQyxxQkFBZjtBQUFBLCtCQUNDLHFFQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckVGLEVBeUVFQyxLQUFLLGlCQUFJLHFFQUFDLGdEQUFEO0FBQU8sYUFBSyxFQUFDLFNBQWI7QUFBQSxrQkFBd0JBO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF6RVgsZUEwRUM7QUFBQSwrQkFDQztBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLG1CQUFTLEVBQUMsY0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBMUVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELG1CQUREO0FBb0ZBLENBcEtELEMsQ0FzS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztHQWxMTWhCLGdCO1VBRzhCSyx3RDs7O0tBSDlCTCxnQjtBQW9MUyxxRUFBQStDLCtEQUFVLENBQUMvQyxnQkFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9jcnVkL2RpdmVycy9yZXZpZXcvW2lkXS44YTE3N2UyOGJjMzEyOGYxMTIxNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbGlzdGVPbmVSZXZpZXcsIHVwZGF0ZVJldmlldyB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvcmV2aWV3QWN0aW9ucyc7XHJcbmltcG9ydCB7IFNwaW5uZXIsIEFsZXJ0IH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IGxpc3RHaXRlc05vbXMgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IEZvcm1VcGRhdGVSZXZpZXcgPSAoeyBwcmVsb2FkZWRWYWx1ZXMsIHJvdXRlciB9KSA9PiB7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblxyXG5cdGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybSh7XHJcblx0XHRkZWZhdWx0VmFsdWVzOiBwcmVsb2FkZWRWYWx1ZXMsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRjbGllbnQ6ICcnLFxyXG5cdFx0Z2l0ZUNvbmNlcm5lOiAnJyxcclxuXHRcdGNvbW1lbnRhaXJlOiAnJyxcclxuXHRcdG5vdGU6ICcnLFxyXG5cdFx0c3VjY2VzczogJycsXHJcblx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdGVycm9yOiAnJyxcclxuXHR9KTtcclxuXHRjb25zdCB7IHN1Y2Nlc3MsIGxvYWRpbmcsIGVycm9yLCBnaXRlQ29uY2VybmUgfSA9IHZhbHVlcztcclxuXHRjb25zdCBbZ2l0ZXMsIHNldEdpdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgbGlzdERlc0dpdGVzID0gKCkgPT4ge1xyXG5cdFx0bGlzdEdpdGVzTm9tcygpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2lkJywgcm91dGVyLnF1ZXJ5LmlkKTtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ2RhdGEgbm9tIHZhdXQnLCBkYXRhKTtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0R2l0ZXMoLi4uZ2l0ZXMsIGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBsaXN0RGV0YWlsUmV2aWV3ID0gKCkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coJ2lkJywgcm91dGVyLnF1ZXJ5LmlkKTtcclxuXHRcdGNvbnN0IGlkZW50ID0gcm91dGVyLnF1ZXJ5LmlkO1xyXG5cdFx0bGlzdGVPbmVSZXZpZXcoaWRlbnQsIHRva2VuKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdkYXRhIHJldmlldyB2YXV0JywgZGF0YS5naXRlQ29uY2VybmUpO1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnN0IGdpdGVDb25jID0gZGF0YS5naXRlQ29uY2VybmU7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBnaXRlQ29uY2VybmU6IGdpdGVDb25jIH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCByZW5kZXJTZWxlY3QgPSAoKSA9PiB7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnZ2l0ZXMgdmF1dCA9PicsIGdpdGVzKTtcclxuXHRcdHJldHVybjtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGlzdERldGFpbFJldmlldygpO1xyXG5cdFx0bGlzdERlc0dpdGVzKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChkYXRhKSA9PiB7XHJcblx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUgfSk7XHJcblx0XHRjb25zb2xlLmxvZygnZGF0YSB2YXV0ID0+JywgZGF0YSk7XHJcblx0XHR1cGRhdGVSZXZpZXcoZGF0YSwgcm91dGVyLnF1ZXJ5LmlkLCB0b2tlbikudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZXN1bHQgdmF1dCA9PicsIHJlc3VsdCk7XHJcblx0XHRcdGlmIChyZXN1bHQuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygndW5lIGdyb3NzZSBlcnJldXInKTtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiByZXN1bHQuZXJyb3IgfSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdGNsaWVudDogJycsXHJcblx0XHRcdFx0XHRnaXRlQ29uY2VybmU6ICcnLFxyXG5cdFx0XHRcdFx0Y29tbWVudGFpcmU6ICcnLFxyXG5cdFx0XHRcdFx0bm90ZTogJycsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiB0cnVlLFxyXG5cdFx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRSb3V0ZXIucHVzaCgnL2FkbWluL2dlc3Rpb25SZXZpZXdzJyk7XHJcblx0XHRcdFx0fSwgMzAwMCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTEyJz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0U2VsZWN0aW9uIGR1IGfDrnRlKiAoUG91ciBpbmZvLCB2YWxldXJcclxuXHRcdFx0XHRcdFx0XHRcdHByw6ljw6lkZW1lbnQgc2VsZWN0aW9ubsOpZSA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdDxzdHJvbmc+e2dpdGVDb25jZXJuZX08L3N0cm9uZz4pXHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8c2VsZWN0XHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPSdnaXRlQ29uY2VybmUnXHJcblx0XHRcdFx0XHRcdFx0XHQvLyB2YWx1ZT17Z2l0ZUNvbmNlcm5lfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjdXN0b20tc2VsZWN0IG1yLXNtLTInPlxyXG5cdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nJz5Hw650ZS4uLjwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0e2dpdGVzLm1hcCgoZ2l0ZSwgaSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGtleT17aX0gdmFsdWU9e2dpdGUuc2x1Z30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2dpdGUubm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0Tm9tICYgcHJlbWnDqHJlIGxldHRyZSBkdSBwcsOpbm9tIGR1IGNsaWVudCAocG91clxyXG5cdFx0XHRcdFx0XHRcdFx0bCdhbm9ueW1hdCBkZXMgY29tbWVudGFpcmVzKSpcclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J2NsaWVudCdcclxuXHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHRcdC8vIHZhbHVlPXtjbGllbnR9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdGNcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPk5vdGUgc3VyIDUgKjwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PHNlbGVjdFxyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT0nbm90ZSdcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY3VzdG9tLXNlbGVjdCBtci1zbS0yJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9Jyc+Vm90cmUgbm90ZS4uLjwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nMSc+MSAtIFRyw6hzIG1hdXZhaXM8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9JzInPjIgLSBNYXV2YWlzPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPSczJz4zIC0gTW95ZW48L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9JzQnPjQgLSBCb248L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9JzUnPjUgLSBUcsOocyBib248L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5Db21tZW50YWlyZTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT0nY29tbWVudGFpcmUnXHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKCl9XHJcblx0XHRcdFx0XHRcdFx0XHQvLyB2YWx1ZT17Y29tbWVudGFpcmV9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdGNvbHM9JzMwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cm93cz0nNSc+PC90ZXh0YXJlYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR7c3VjY2VzcyAmJiAoXHJcblx0XHRcdFx0XHQ8QWxlcnQgY29sb3I9J3N1Y2Nlc3MnPlxyXG5cdFx0XHRcdFx0XHRMYSByZXZpZXcgYSBiaWVuIMOpdMOpIG1vZGlmacOpZSwgcmVkaXJlY3Rpb24gZW4gY291cnMuLi5cclxuXHRcdFx0XHRcdDwvQWxlcnQ+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0XHR7bG9hZGluZyAmJiAoXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYWxlcnQgYWxlcnQtc3VjY2Vzcyc+XHJcblx0XHRcdFx0XHRcdDxTcGlubmVyIC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHRcdHtlcnJvciAmJiA8QWxlcnQgY29sb3I9J3N1Y2Nlc3MnPntlcnJvcn08L0FsZXJ0Pn1cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnRuIGJ0bi1pbmZvJz5cclxuXHRcdFx0XHRcdFx0Q3LDqWVyIGNlIGNvbW1lbnRhaXJlXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4vLyBcdGxpc3RlT25lUmV2aWV3KCkudGhlbigoZGF0YSkgPT4ge1xyXG4vLyBcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuLy8gXHRcdFx0Y29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcbi8vIFx0XHR9IGVsc2Uge1xyXG4vLyBcdFx0XHRyZXR1cm4ge1xyXG4vLyBcdFx0XHRcdHByb3BzOiB7XHJcbi8vIFx0XHRcdFx0XHRnaXRlOiBkYXRhLFxyXG4vLyBcdFx0XHRcdH0sXHJcbi8vIFx0XHRcdH07XHJcbi8vIFx0XHR9XHJcbi8vIFx0fSk7XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoRm9ybVVwZGF0ZVJldmlldyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=