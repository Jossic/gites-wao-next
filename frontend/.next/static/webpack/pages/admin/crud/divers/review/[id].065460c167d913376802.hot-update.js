webpackHotUpdate_N_E("pages/admin/crud/divers/review/[id]",{

/***/ "./components/admin/forms/FormUpdateReview.js":
/*!****************************************************!*\
  !*** ./components/admin/forms/FormUpdateReview.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
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


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var FormUpdateReview = function FormUpdateReview(_ref) {
  _s();

  var preloadedValues = _ref.preloadedValues,
      router = _ref.router;
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
      error = values.error,
      giteConcerne = values.giteConcerne;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      gites = _useState2[0],
      setGites = _useState2[1];

  var listDesGites = function listDesGites() {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_7__["listGitesNoms"])().then(function (data) {
      console.log('id', router.query.id); // console.log('data nom vaut', data);

      if (data.error) {
        console.log(error);
      } else {
        setGites.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(gites).concat([data]));
      }
    });
  };

  var listDetailReview = function listDetailReview() {
    console.log('id', router.query.id);
    var ident = router.query.id;
    Object(_actions_reviewActions__WEBPACK_IMPORTED_MODULE_5__["listeOneReview"])(ident, token).then(function (data) {
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

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    listDetailReview();
    listDesGites();
  }, []);

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "col-md-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 8
    }
  }, "Selection du g\xEEte*"), __jsx("select", {
    ref: register({
      required: true
    }),
    name: "giteConcerne" // value={giteConcerne}
    ,
    className: "custom-select mr-sm-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 8
    }
  }, __jsx("option", {
    value: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, "G\xEEte..."), gites.map(function (gite, i) {
    return __jsx("option", {
      key: i,
      value: gite.slug,
      selected: gite.slug === giteConcerne && 'selected',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 10
      }
    }, gite.nom);
  }))), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 8
    }
  }, "Nom & premi\xE8re lettre du pr\xE9nom du client (pour l'anonymat des commentaires)*"), __jsx("input", {
    type: "text",
    name: "client",
    ref: register({
      required: true
    }) // value={client}
    ,
    className: "form-control",
    c: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 8
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 8
    }
  }, "Note sur 5 *"), __jsx("select", {
    ref: register({
      required: true
    }),
    name: "note",
    className: "custom-select mr-sm-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 8
    }
  }, __jsx("option", {
    value: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, "Votre note..."), __jsx("option", {
    value: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }, "1 - Tr\xE8s mauvais"), __jsx("option", {
    value: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, "2 - Mauvais"), __jsx("option", {
    value: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, "3 - Moyen"), __jsx("option", {
    value: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, "4 - Bon"), __jsx("option", {
    value: "5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }, "5 - Tr\xE8s bon"))), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 8
    }
  }, "Commentaire"), __jsx("textarea", {
    type: "text",
    name: "commentaire",
    ref: register() // value={commentaire}
    ,
    className: "form-control",
    cols: "30",
    rows: "5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 8
    }
  })))), success && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
    color: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 6
    }
  }, "La review a bien \xE9t\xE9 modifi\xE9e, redirection en cours..."), loading && __jsx("div", {
    className: "alert alert-success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 6
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Spinner"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }
  })), error && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
    color: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 15
    }
  }, error), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 5
    }
  }, __jsx("button", {
    type: "submit",
    className: "btn btn-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 6
    }
  }, "Modifier ce commentaire"))));
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
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_9__["useForm"]];
});

_c = FormUpdateReview;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9Gb3JtVXBkYXRlUmV2aWV3LmpzIl0sIm5hbWVzIjpbIkZvcm1VcGRhdGVSZXZpZXciLCJwcmVsb2FkZWRWYWx1ZXMiLCJyb3V0ZXIiLCJ0b2tlbiIsImdldENvb2tpZSIsInVzZUZvcm0iLCJkZWZhdWx0VmFsdWVzIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ1c2VTdGF0ZSIsImNsaWVudCIsImdpdGVDb25jZXJuZSIsImNvbW1lbnRhaXJlIiwibm90ZSIsInN1Y2Nlc3MiLCJsb2FkaW5nIiwiZXJyb3IiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJnaXRlcyIsInNldEdpdGVzIiwibGlzdERlc0dpdGVzIiwibGlzdEdpdGVzTm9tcyIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwiaWQiLCJsaXN0RGV0YWlsUmV2aWV3IiwiaWRlbnQiLCJsaXN0ZU9uZVJldmlldyIsImdpdGVDb25jIiwidXNlRWZmZWN0Iiwib25TdWJtaXQiLCJ1cGRhdGVSZXZpZXciLCJyZXN1bHQiLCJzZXRUaW1lb3V0IiwiUm91dGVyIiwicHVzaCIsInJlcXVpcmVkIiwibWFwIiwiZ2l0ZSIsImkiLCJzbHVnIiwibm9tIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBaUM7QUFBQTs7QUFBQSxNQUE5QkMsZUFBOEIsUUFBOUJBLGVBQThCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBQ3pELE1BQU1DLEtBQUssR0FBR0Msc0VBQVMsQ0FBQyxPQUFELENBQXZCOztBQUR5RCxpQkFHdEJDLCtEQUFPLENBQUM7QUFDMUNDLGlCQUFhLEVBQUVMO0FBRDJCLEdBQUQs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QTtBQUFBO0FBQUEsdUVBcEVGLEVBd0VFQyxPQUFPLElBQ1A7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBekVGLEVBNkVFQyxLQUFLLElBQUksTUFBQyxnREFBRDtBQUFPLFNBQUssRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0JBLEtBQXhCLENBN0VYLEVBOEVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLGFBQVMsRUFBQyxjQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURELENBOUVELENBREQsQ0FERDtBQXdGQSxDQW5LRCxDLENBcUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7R0FqTE1oQixnQjtVQUc4QkssdUQ7OztLQUg5QkwsZ0I7QUFtTFMscUVBQUE4QywrREFBVSxDQUFDOUMsZ0JBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9kaXZlcnMvcmV2aWV3L1tpZF0uMDY1NDYwYzE2N2Q5MTMzNzY4MDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGxpc3RlT25lUmV2aWV3LCB1cGRhdGVSZXZpZXcgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL3Jldmlld0FjdGlvbnMnO1xyXG5pbXBvcnQgeyBTcGlubmVyLCBBbGVydCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyBsaXN0R2l0ZXNOb21zIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBGb3JtVXBkYXRlUmV2aWV3ID0gKHsgcHJlbG9hZGVkVmFsdWVzLCByb3V0ZXIgfSkgPT4ge1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cclxuXHRjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm0oe1xyXG5cdFx0ZGVmYXVsdFZhbHVlczogcHJlbG9hZGVkVmFsdWVzLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0Y2xpZW50OiAnJyxcclxuXHRcdGdpdGVDb25jZXJuZTogJycsXHJcblx0XHRjb21tZW50YWlyZTogJycsXHJcblx0XHRub3RlOiAnJyxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRlcnJvcjogJycsXHJcblx0fSk7XHJcblx0Y29uc3QgeyBzdWNjZXNzLCBsb2FkaW5nLCBlcnJvciwgZ2l0ZUNvbmNlcm5lIH0gPSB2YWx1ZXM7XHJcblx0Y29uc3QgW2dpdGVzLCBzZXRHaXRlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdGNvbnN0IGxpc3REZXNHaXRlcyA9ICgpID0+IHtcclxuXHRcdGxpc3RHaXRlc05vbXMoKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdpZCcsIHJvdXRlci5xdWVyeS5pZCk7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdkYXRhIG5vbSB2YXV0JywgZGF0YSk7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldEdpdGVzKC4uLmdpdGVzLCBkYXRhKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbGlzdERldGFpbFJldmlldyA9ICgpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKCdpZCcsIHJvdXRlci5xdWVyeS5pZCk7XHJcblx0XHRjb25zdCBpZGVudCA9IHJvdXRlci5xdWVyeS5pZDtcclxuXHRcdGxpc3RlT25lUmV2aWV3KGlkZW50LCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZGF0YSByZXZpZXcgdmF1dCcsIGRhdGEuZ2l0ZUNvbmNlcm5lKTtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb25zdCBnaXRlQ29uYyA9IGRhdGEuZ2l0ZUNvbmNlcm5lO1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZ2l0ZUNvbmNlcm5lOiBnaXRlQ29uYyB9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxpc3REZXRhaWxSZXZpZXcoKTtcclxuXHRcdGxpc3REZXNHaXRlcygpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdFx0Y29uc29sZS5sb2coJ2RhdGEgdmF1dCA9PicsIGRhdGEpO1xyXG5cdFx0dXBkYXRlUmV2aWV3KGRhdGEsIHJvdXRlci5xdWVyeS5pZCwgdG9rZW4pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygncmVzdWx0IHZhdXQgPT4nLCByZXN1bHQpO1xyXG5cdFx0XHRpZiAocmVzdWx0LmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3VuZSBncm9zc2UgZXJyZXVyJyk7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogcmVzdWx0LmVycm9yIH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRjbGllbnQ6ICcnLFxyXG5cdFx0XHRcdFx0Z2l0ZUNvbmNlcm5lOiAnJyxcclxuXHRcdFx0XHRcdGNvbW1lbnRhaXJlOiAnJyxcclxuXHRcdFx0XHRcdG5vdGU6ICcnLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Um91dGVyLnB1c2goJy9hZG1pbi9nZXN0aW9uUmV2aWV3cycpO1xyXG5cdFx0XHRcdH0sIDMwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC0xMic+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5cclxuXHRcdFx0XHRcdFx0XHRcdFNlbGVjdGlvbiBkdSBnw650ZSpcclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxzZWxlY3RcclxuXHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J2dpdGVDb25jZXJuZSdcclxuXHRcdFx0XHRcdFx0XHRcdC8vIHZhbHVlPXtnaXRlQ29uY2VybmV9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2N1c3RvbS1zZWxlY3QgbXItc20tMic+XHJcblx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPScnPkfDrnRlLi4uPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHR7Z2l0ZXMubWFwKChnaXRlLCBpKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2l9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2dpdGUuc2x1Z31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RlZD17XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnaXRlLnNsdWcgPT09IGdpdGVDb25jZXJuZSAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3NlbGVjdGVkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2dpdGUubm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0Tm9tICYgcHJlbWnDqHJlIGxldHRyZSBkdSBwcsOpbm9tIGR1IGNsaWVudCAocG91clxyXG5cdFx0XHRcdFx0XHRcdFx0bCdhbm9ueW1hdCBkZXMgY29tbWVudGFpcmVzKSpcclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J2NsaWVudCdcclxuXHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHRcdC8vIHZhbHVlPXtjbGllbnR9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdGNcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPk5vdGUgc3VyIDUgKjwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PHNlbGVjdFxyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT0nbm90ZSdcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY3VzdG9tLXNlbGVjdCBtci1zbS0yJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9Jyc+Vm90cmUgbm90ZS4uLjwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nMSc+MSAtIFRyw6hzIG1hdXZhaXM8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9JzInPjIgLSBNYXV2YWlzPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPSczJz4zIC0gTW95ZW48L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9JzQnPjQgLSBCb248L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9JzUnPjUgLSBUcsOocyBib248L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz5Db21tZW50YWlyZTwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT0nY29tbWVudGFpcmUnXHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKCl9XHJcblx0XHRcdFx0XHRcdFx0XHQvLyB2YWx1ZT17Y29tbWVudGFpcmV9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHRcdGNvbHM9JzMwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cm93cz0nNSc+PC90ZXh0YXJlYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR7c3VjY2VzcyAmJiAoXHJcblx0XHRcdFx0XHQ8QWxlcnQgY29sb3I9J3N1Y2Nlc3MnPlxyXG5cdFx0XHRcdFx0XHRMYSByZXZpZXcgYSBiaWVuIMOpdMOpIG1vZGlmacOpZSwgcmVkaXJlY3Rpb24gZW4gY291cnMuLi5cclxuXHRcdFx0XHRcdDwvQWxlcnQ+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0XHR7bG9hZGluZyAmJiAoXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYWxlcnQgYWxlcnQtc3VjY2Vzcyc+XHJcblx0XHRcdFx0XHRcdDxTcGlubmVyIC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHRcdHtlcnJvciAmJiA8QWxlcnQgY29sb3I9J3N1Y2Nlc3MnPntlcnJvcn08L0FsZXJ0Pn1cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnRuIGJ0bi1pbmZvJz5cclxuXHRcdFx0XHRcdFx0TW9kaWZpZXIgY2UgY29tbWVudGFpcmVcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbi8vIFx0bGlzdGVPbmVSZXZpZXcoKS50aGVuKChkYXRhKSA9PiB7XHJcbi8vIFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG4vLyBcdFx0XHRjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuLy8gXHRcdH0gZWxzZSB7XHJcbi8vIFx0XHRcdHJldHVybiB7XHJcbi8vIFx0XHRcdFx0cHJvcHM6IHtcclxuLy8gXHRcdFx0XHRcdGdpdGU6IGRhdGEsXHJcbi8vIFx0XHRcdFx0fSxcclxuLy8gXHRcdFx0fTtcclxuLy8gXHRcdH1cclxuLy8gXHR9KTtcclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihGb3JtVXBkYXRlUmV2aWV3KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==