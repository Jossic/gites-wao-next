webpackHotUpdate_N_E("pages/admin/crud/divers/review/[id]",{

/***/ "./components/admin/forms/FormUpdateReview.js":
/*!****************************************************!*\
  !*** ./components/admin/forms/FormUpdateReview.js ***!
  \****************************************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_reviewActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../actions/reviewActions */ "./actions/reviewActions.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\forms\\FormUpdateReview.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var FormUpdateReview = function FormUpdateReview(_ref) {
  _s();

  var preloadedValues = _ref.preloadedValues,
      router = _ref.router,
      gites = _ref.gites;
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_8__["getCookie"])('token');

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_9__["useForm"])({
    defaultValues: preloadedValues
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
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
      error = values.error; // const [gites, setGites] = useState([]);
  // const listDesGites = () => {
  // 	listGitesNoms().then((data) => {
  // 		if (data.error) {
  // 			console.log(error);
  // 		} else {
  // 			setGites(...gites, data);
  // 		}
  // 	});
  // };

  var renderSelect = function renderSelect() {
    console.log('gites vaut =>', gites);
    return gites.map(function (gite, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
        value: gite.slug,
        children: gite.nom
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 4
      }, _this);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    // listDesGites();
    renderSelect();
  }, []);

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setValues(_objectSpread(_objectSpread({}, values), {}, {
                loading: true
              }));
              console.log('data vaut =>', data);
              Object(_actions_reviewActions__WEBPACK_IMPORTED_MODULE_5__["updateReview"])(data, router.query.id, token).then(function (result) {
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
                    next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/admin/gestionReviews');
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
              children: "Selection du g\xEEte*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
              ref: register({
                required: true
              }),
              name: "giteConcerne",
              className: "custom-select mr-sm-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "",
                children: "G\xEEte..."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 9
              }, _this), renderSelect()]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-muted",
              children: "Nom & premi\xE8re lettre du pr\xE9nom du client (pour l'anonymat des commentaires)*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
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
              lineNumber: 100,
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
              children: "Note sur 5 *"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
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
                lineNumber: 115,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "1",
                children: "1 - Tr\xE8s mauvais"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "2",
                children: "2 - Mauvais"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "3",
                children: "3 - Moyen"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "4",
                children: "4 - Bon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "5",
                children: "5 - Tr\xE8s bon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 111,
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
              children: "Commentaire"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
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
              lineNumber: 125,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 5
      }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
        color: "success",
        children: "La review a bien \xE9t\xE9 modifi\xE9e, redirection en cours..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 6
      }, _this), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "alert alert-success",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Spinner"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 7
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 6
      }, _this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
        color: "success",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-info",
          children: "Cr\xE9er ce commentaire"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 4
    }, _this)
  }, void 0, false);
};

_s(FormUpdateReview, "9v3/yyxMKt0m9tKNZdDLeu8CZ/c=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_9__["useForm"]];
});

_c = FormUpdateReview;
function getStaticProps(_x2) {
  return _getStaticProps.apply(this, arguments);
}

function _getStaticProps() {
  _getStaticProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(context) {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_7__["listGitesNoms"])();

          case 2:
            res = _context2.sent;
            _context2.next = 5;
            return res.json();

          case 5:
            data = _context2.sent;

            if (data) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", {
              notFound: true
            });

          case 8:
            return _context2.abrupt("return", {
              props: {}
            });

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getStaticProps.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(FormUpdateReview));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9Gb3JtVXBkYXRlUmV2aWV3LmpzIl0sIm5hbWVzIjpbIkZvcm1VcGRhdGVSZXZpZXciLCJwcmVsb2FkZWRWYWx1ZXMiLCJyb3V0ZXIiLCJnaXRlcyIsInRva2VuIiwiZ2V0Q29va2llIiwidXNlRm9ybSIsImRlZmF1bHRWYWx1ZXMiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInVzZVN0YXRlIiwiY2xpZW50IiwiZ2l0ZUNvbmNlcm5lIiwiY29tbWVudGFpcmUiLCJub3RlIiwic3VjY2VzcyIsImxvYWRpbmciLCJlcnJvciIsInZhbHVlcyIsInNldFZhbHVlcyIsInJlbmRlclNlbGVjdCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJnaXRlIiwiaSIsInNsdWciLCJub20iLCJ1c2VFZmZlY3QiLCJvblN1Ym1pdCIsImRhdGEiLCJ1cGRhdGVSZXZpZXciLCJxdWVyeSIsImlkIiwidGhlbiIsInJlc3VsdCIsInNldFRpbWVvdXQiLCJSb3V0ZXIiLCJwdXNoIiwicmVxdWlyZWQiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJsaXN0R2l0ZXNOb21zIiwicmVzIiwianNvbiIsIm5vdEZvdW5kIiwicHJvcHMiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUF3QztBQUFBOztBQUFBLE1BQXJDQyxlQUFxQyxRQUFyQ0EsZUFBcUM7QUFBQSxNQUFwQkMsTUFBb0IsUUFBcEJBLE1BQW9CO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ2hFLE1BQU1DLEtBQUssR0FBR0Msc0VBQVMsQ0FBQyxPQUFELENBQXZCOztBQURnRSxpQkFHN0JDLCtEQUFPLENBQUM7QUFDMUND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LHFCQUFmO0FBQUEsK0JBQ0MscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE5REYsRUFrRUVDLEtBQUssaUJBQUkscUVBQUMsZ0RBQUQ7QUFBTyxhQUFLLEVBQUMsU0FBYjtBQUFBLGtCQUF3QkE7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxFWCxlQW1FQztBQUFBLCtCQUNDO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBc0IsbUJBQVMsRUFBQyxjQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuRUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsbUJBREQ7QUE2RUEsQ0FqSkQ7O0dBQU1qQixnQjtVQUc4Qk0sdUQ7OztLQUg5Qk4sZ0I7QUFtSkMsU0FBZXdDLGNBQXRCO0FBQUE7QUFBQTs7O3FNQUFPLGtCQUE4QkMsT0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDWUMsMEVBQWEsRUFEekI7O0FBQUE7QUFDQUMsZUFEQTtBQUFBO0FBQUEsbUJBRWFBLEdBQUcsQ0FBQ0MsSUFBSixFQUZiOztBQUFBO0FBRUFkLGdCQUZBOztBQUFBLGdCQUlEQSxJQUpDO0FBQUE7QUFBQTtBQUFBOztBQUFBLDhDQUtFO0FBQ05lLHNCQUFRLEVBQUU7QUFESixhQUxGOztBQUFBO0FBQUEsOENBVUM7QUFDTkMsbUJBQUssRUFBRTtBQURELGFBVkQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQWVRLHFFQUFBQywrREFBVSxDQUFDL0MsZ0JBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9kaXZlcnMvcmV2aWV3L1tpZF0uZGQ0MzE5ZDU3Yjc1NTBiYmYzMWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVwZGF0ZVJldmlldyB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvcmV2aWV3QWN0aW9ucyc7XHJcbmltcG9ydCB7IFNwaW5uZXIsIEFsZXJ0IH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IGxpc3RHaXRlc05vbXMgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IEZvcm1VcGRhdGVSZXZpZXcgPSAoeyBwcmVsb2FkZWRWYWx1ZXMsIHJvdXRlciwgZ2l0ZXMgfSkgPT4ge1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cclxuXHRjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm0oe1xyXG5cdFx0ZGVmYXVsdFZhbHVlczogcHJlbG9hZGVkVmFsdWVzLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0Y2xpZW50OiAnJyxcclxuXHRcdGdpdGVDb25jZXJuZTogJycsXHJcblx0XHRjb21tZW50YWlyZTogJycsXHJcblx0XHRub3RlOiAnJyxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRlcnJvcjogJycsXHJcblx0fSk7XHJcblx0Y29uc3QgeyBzdWNjZXNzLCBsb2FkaW5nLCBlcnJvciB9ID0gdmFsdWVzO1xyXG5cdC8vIGNvbnN0IFtnaXRlcywgc2V0R2l0ZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHQvLyBjb25zdCBsaXN0RGVzR2l0ZXMgPSAoKSA9PiB7XHJcblx0Ly8gXHRsaXN0R2l0ZXNOb21zKCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdC8vIFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdC8vIFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHQvLyBcdFx0fSBlbHNlIHtcclxuXHQvLyBcdFx0XHRzZXRHaXRlcyguLi5naXRlcywgZGF0YSk7XHJcblx0Ly8gXHRcdH1cclxuXHQvLyBcdH0pO1xyXG5cdC8vIH07XHJcblxyXG5cdGNvbnN0IHJlbmRlclNlbGVjdCA9ICgpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKCdnaXRlcyB2YXV0ID0+JywgZ2l0ZXMpO1xyXG5cdFx0cmV0dXJuIGdpdGVzLm1hcCgoZ2l0ZSwgaSkgPT4gKFxyXG5cdFx0XHQ8b3B0aW9uIGtleT17aX0gdmFsdWU9e2dpdGUuc2x1Z30+XHJcblx0XHRcdFx0e2dpdGUubm9tfVxyXG5cdFx0XHQ8L29wdGlvbj5cclxuXHRcdCkpO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHQvLyBsaXN0RGVzR2l0ZXMoKTtcclxuXHRcdHJlbmRlclNlbGVjdCgpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdFx0Y29uc29sZS5sb2coJ2RhdGEgdmF1dCA9PicsIGRhdGEpO1xyXG5cdFx0dXBkYXRlUmV2aWV3KGRhdGEsIHJvdXRlci5xdWVyeS5pZCwgdG9rZW4pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygncmVzdWx0IHZhdXQgPT4nLCByZXN1bHQpO1xyXG5cdFx0XHRpZiAocmVzdWx0LmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3VuZSBncm9zc2UgZXJyZXVyJyk7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogcmVzdWx0LmVycm9yIH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRjbGllbnQ6ICcnLFxyXG5cdFx0XHRcdFx0Z2l0ZUNvbmNlcm5lOiAnJyxcclxuXHRcdFx0XHRcdGNvbW1lbnRhaXJlOiAnJyxcclxuXHRcdFx0XHRcdG5vdGU6ICcnLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Um91dGVyLnB1c2goJy9hZG1pbi9nZXN0aW9uUmV2aWV3cycpO1xyXG5cdFx0XHRcdH0sIDMwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC0xMic+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5cclxuXHRcdFx0XHRcdFx0XHRcdFNlbGVjdGlvbiBkdSBnw650ZSpcclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxzZWxlY3RcclxuXHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J2dpdGVDb25jZXJuZSdcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY3VzdG9tLXNlbGVjdCBtci1zbS0yJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9Jyc+R8OudGUuLi48L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdHtyZW5kZXJTZWxlY3QoKX1cclxuXHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5cclxuXHRcdFx0XHRcdFx0XHRcdE5vbSAmIHByZW1pw6hyZSBsZXR0cmUgZHUgcHLDqW5vbSBkdSBjbGllbnQgKHBvdXJcclxuXHRcdFx0XHRcdFx0XHRcdGwnYW5vbnltYXQgZGVzIGNvbW1lbnRhaXJlcykqXHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPSdjbGllbnQnXHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcblx0XHRcdFx0XHRcdFx0XHQvLyB2YWx1ZT17Y2xpZW50fVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRjXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5Ob3RlIHN1ciA1ICo8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxzZWxlY3RcclxuXHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J25vdGUnXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2N1c3RvbS1zZWxlY3QgbXItc20tMic+XHJcblx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPScnPlZvdHJlIG5vdGUuLi48L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9JzEnPjEgLSBUcsOocyBtYXV2YWlzPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPScyJz4yIC0gTWF1dmFpczwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nMyc+MyAtIE1veWVuPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPSc0Jz40IC0gQm9uPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPSc1Jz41IC0gVHLDqHMgYm9uPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+Q29tbWVudGFpcmU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J2NvbW1lbnRhaXJlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3RlcigpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gdmFsdWU9e2NvbW1lbnRhaXJlfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRjb2xzPSczMCdcclxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9JzUnPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0e3N1Y2Nlc3MgJiYgKFxyXG5cdFx0XHRcdFx0PEFsZXJ0IGNvbG9yPSdzdWNjZXNzJz5cclxuXHRcdFx0XHRcdFx0TGEgcmV2aWV3IGEgYmllbiDDqXTDqSBtb2RpZmnDqWUsIHJlZGlyZWN0aW9uIGVuIGNvdXJzLi4uXHJcblx0XHRcdFx0XHQ8L0FsZXJ0PlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdFx0e2xvYWRpbmcgJiYgKFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MnPlxyXG5cdFx0XHRcdFx0XHQ8U3Bpbm5lciAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0XHR7ZXJyb3IgJiYgPEFsZXJ0IGNvbG9yPSdzdWNjZXNzJz57ZXJyb3J9PC9BbGVydD59XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0biBidG4taW5mbyc+XHJcblx0XHRcdFx0XHRcdENyw6llciBjZSBjb21tZW50YWlyZVxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG5cdGNvbnN0IHJlcyA9IGF3YWl0IGxpc3RHaXRlc05vbXMoKTtcclxuXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcblx0aWYgKCFkYXRhKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRub3RGb3VuZDogdHJ1ZSxcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHt9LFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoRm9ybVVwZGF0ZVJldmlldyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=