webpackHotUpdate_N_E("pages/admin/gites/[id]",{

/***/ "./components/admin/forms/gites/FormInfosContrat.js":
/*!**********************************************************!*\
  !*** ./components/admin/forms/gites/FormInfosContrat.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _actions_reservationActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../actions/reservationActions */ "./actions/reservationActions.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _util_quill__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../util/quill */ "./util/quill.js");
/* harmony import */ var _material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/CheckCircleOutline */ "./node_modules/@material-ui/icons/CheckCircleOutline.js");
/* harmony import */ var _material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_12__);




var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\forms\\gites\\FormInfosContrat.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-quill */ "./node_modules/react-quill/lib/index.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-quill */ "./node_modules/react-quill/lib/index.js")];
    },
    modules: ['react-quill']
  }
});
_c2 = ReactQuill;


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    root: {
      width: '100%'
    },
    button: {
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(2),
      width: '100%'
    },
    formControl: {
      margin: theme.spacing(1)
    },
    textField: {
      margin: theme.spacing(1)
    }
  };
});

var FormInfosContrat = function FormInfosContrat(_ref) {
  _s();

  var preloadedValues = _ref.preloadedValues;

  var CustomButton = function CustomButton() {
    return __jsx(_material_ui_icons_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 29
      }
    });
  };

  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_9__["getCookie"])('token');
  var classes = useStyles();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["useForm"])({
    defaultValues: preloadedValues
  }),
      control = _useForm.control,
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    heureArrivee: 'à partir de 17h',
    heureDepart: 'à partir de 17h',
    loading: false,
    success: '',
    error: '',
    message: ''
  }),
      values = _useState[0],
      setValues = _useState[1];

  var success = values.success,
      loading = values.loading,
      error = values.error,
      message = values.message;

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(data);
              setValues(_objectSpread(_objectSpread({}, values), {}, {
                loading: true
              }));
              Object(_actions_reservationActions__WEBPACK_IMPORTED_MODULE_8__["updateReservation"])(data, router.query.id, token).then(function (result) {
                if (result.error) {
                  setValues(_objectSpread(_objectSpread({}, values), {}, {
                    error: result.error
                  }));
                } else {
                  setValues(_objectSpread(_objectSpread({}, values), {}, {
                    success: true,
                    loading: false,
                    message: result.message
                  })); // setTimeout(() => {
                  // 	Router.push('/admin/gestionDivers/partenaires');
                  // }, 3000);
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, loading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CircularProgress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 16
    }
  }), __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["Controller"], {
    style: {
      paddingTop: '60px',
      minHeight: '300px'
    },
    as: ReactQuill,
    control: control,
    name: "ctDesignationTitre",
    placeholder: "Corps du mail ici...",
    modules: _util_quill__WEBPACK_IMPORTED_MODULE_11__["QuillModules"],
    formats: _util_quill__WEBPACK_IMPORTED_MODULE_11__["QuillFormats"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 6
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["Controller"], {
    style: {
      paddingTop: '60px',
      minHeight: '300px'
    },
    as: ReactQuill,
    control: control,
    name: "ctPrincipCarac",
    placeholder: "Corps du mail ici...",
    modules: _util_quill__WEBPACK_IMPORTED_MODULE_11__["QuillModules"],
    formats: _util_quill__WEBPACK_IMPORTED_MODULE_11__["QuillFormats"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 6
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["Controller"], {
    style: {
      paddingTop: '60px',
      minHeight: '300px'
    },
    as: ReactQuill,
    control: control,
    name: "ctSituLog",
    placeholder: "Corps du mail ici...",
    modules: _util_quill__WEBPACK_IMPORTED_MODULE_11__["QuillModules"],
    formats: _util_quill__WEBPACK_IMPORTED_MODULE_11__["QuillFormats"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 6
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["Controller"], {
    style: {
      paddingTop: '60px',
      minHeight: '300px'
    },
    as: ReactQuill,
    control: control,
    name: "ctDescLog",
    placeholder: "Corps du mail ici...",
    modules: _util_quill__WEBPACK_IMPORTED_MODULE_11__["QuillModules"],
    formats: _util_quill__WEBPACK_IMPORTED_MODULE_11__["QuillFormats"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 6
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    className: classes.formControl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["Controller"], {
    style: {
      paddingTop: '60px',
      minHeight: '300px'
    },
    as: ReactQuill,
    control: control,
    name: "ctDureeLoc",
    placeholder: "Corps du mail ici...",
    modules: _util_quill__WEBPACK_IMPORTED_MODULE_11__["QuillModules"],
    formats: _util_quill__WEBPACK_IMPORTED_MODULE_11__["QuillFormats"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 6
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "submit",
    variant: "contained",
    color: "primary",
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 5
    }
  }, "Valider les modifications")));
};

_s(FormInfosContrat, "VlCXejWhzpTqMH6gPVCUOk37/i4=", false, function () {
  return [useStyles, react_hook_form__WEBPACK_IMPORTED_MODULE_7__["useForm"]];
});

_c3 = FormInfosContrat;
/* harmony default export */ __webpack_exports__["default"] = (_c4 = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(FormInfosContrat));

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "ReactQuill$dynamic");
$RefreshReg$(_c2, "ReactQuill");
$RefreshReg$(_c3, "FormInfosContrat");
$RefreshReg$(_c4, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9naXRlcy9Gb3JtSW5mb3NDb250cmF0LmpzIl0sIm5hbWVzIjpbIlJlYWN0UXVpbGwiLCJkeW5hbWljIiwic3NyIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwiYnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwibWFyZ2luVG9wIiwiZm9ybUNvbnRyb2wiLCJtYXJnaW4iLCJ0ZXh0RmllbGQiLCJGb3JtSW5mb3NDb250cmF0IiwicHJlbG9hZGVkVmFsdWVzIiwiQ3VzdG9tQnV0dG9uIiwidG9rZW4iLCJnZXRDb29raWUiLCJjbGFzc2VzIiwidXNlRm9ybSIsImRlZmF1bHRWYWx1ZXMiLCJjb250cm9sIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ1c2VTdGF0ZSIsImhldXJlQXJyaXZlZSIsImhldXJlRGVwYXJ0IiwibG9hZGluZyIsInN1Y2Nlc3MiLCJlcnJvciIsIm1lc3NhZ2UiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJvblN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlUmVzZXJ2YXRpb24iLCJyb3V0ZXIiLCJxdWVyeSIsImlkIiwidGhlbiIsInJlc3VsdCIsInBhZGRpbmdUb3AiLCJtaW5IZWlnaHQiLCJRdWlsbE1vZHVsZXMiLCJRdWlsbEZvcm1hdHMiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxVQUFVLEdBQUdDLG9EQUFPLE1BQUM7QUFBQSxTQUFNLGdKQUFOO0FBQUEsQ0FBRCxFQUE4QjtBQUFFQyxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUE7QUFBQSxrQ0FBaEIsNERBQWdCO0FBQUE7QUFBQSxjQUFoQixhQUFnQjtBQUFB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QUFFdUIsT0FIVjtBQUlDLFFBQUksRUFBQyxZQUpOO0FBS0MsZUFBVyxFQUFDLHNCQUxiO0FBTUMsV0FBTyxFQUFFd0IseURBTlY7QUFPQyxXQUFPLEVBQUVDLHlEQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQTdDRCxFQW9KQyxNQUFDLHdEQUFEO0FBQ0MsUUFBSSxFQUFDLFFBRE47QUFFQyxXQUFPLEVBQUMsV0FGVDtBQUdDLFNBQUssRUFBQyxTQUhQO0FBSUMsYUFBUyxFQUFFNUIsT0FBTyxDQUFDWixNQUpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQXBKRCxDQUhELENBREQ7QUFrS0EsQ0F4TUQ7O0dBQU1PLGdCO1VBR1daLFMsRUFDNEJrQix1RDs7O01BSnZDTixnQjtBQTBNUyxxRUFBQWtDLDhEQUFVLENBQUNsQyxnQkFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9naXRlcy9baWRdLjk1YjY0ZjZiODhlMDk0ZDg4ODVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIENpcmN1bGFyUHJvZ3Jlc3MsIEZvcm1Db250cm9sIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHsgdXBkYXRlUmVzZXJ2YXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9hY3Rpb25zL3Jlc2VydmF0aW9uQWN0aW9ucyc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5jb25zdCBSZWFjdFF1aWxsID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LXF1aWxsJyksIHsgc3NyOiBmYWxzZSB9KTtcclxuaW1wb3J0IHsgUXVpbGxNb2R1bGVzLCBRdWlsbEZvcm1hdHMgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL3F1aWxsJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlT3V0bGluZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrQ2lyY2xlT3V0bGluZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRyb290OiB7XHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdH0sXHJcblx0YnV0dG9uOiB7XHJcblx0XHRtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0fSxcclxuXHRmb3JtQ29udHJvbDoge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdH0sXHJcblx0dGV4dEZpZWxkOiB7XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0fSxcclxufSkpO1xyXG5cclxuY29uc3QgRm9ybUluZm9zQ29udHJhdCA9ICh7IHByZWxvYWRlZFZhbHVlcyB9KSA9PiB7XHJcblx0Y29uc3QgQ3VzdG9tQnV0dG9uID0gKCkgPT4gPENoZWNrQ2lyY2xlT3V0bGluZUljb24gLz47XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IHsgY29udHJvbCwgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybSh7XHJcblx0XHRkZWZhdWx0VmFsdWVzOiBwcmVsb2FkZWRWYWx1ZXMsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRoZXVyZUFycml2ZWU6ICfDoCBwYXJ0aXIgZGUgMTdoJyxcclxuXHRcdGhldXJlRGVwYXJ0OiAnw6AgcGFydGlyIGRlIDE3aCcsXHJcblx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0ZXJyb3I6ICcnLFxyXG5cdFx0bWVzc2FnZTogJycsXHJcblx0fSk7XHJcblx0Y29uc3QgeyBzdWNjZXNzLCBsb2FkaW5nLCBlcnJvciwgbWVzc2FnZSB9ID0gdmFsdWVzO1xyXG5cclxuXHRjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChkYXRhKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHRcdHVwZGF0ZVJlc2VydmF0aW9uKGRhdGEsIHJvdXRlci5xdWVyeS5pZCwgdG9rZW4pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRpZiAocmVzdWx0LmVycm9yKSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogcmVzdWx0LmVycm9yIH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7XHJcblx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiB0cnVlLFxyXG5cdFx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0XHRtZXNzYWdlOiByZXN1bHQubWVzc2FnZSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHQvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHQvLyBcdFJvdXRlci5wdXNoKCcvYWRtaW4vZ2VzdGlvbkRpdmVycy9wYXJ0ZW5haXJlcycpO1xyXG5cdFx0XHRcdC8vIH0sIDMwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e2xvYWRpbmcgJiYgPENpcmN1bGFyUHJvZ3Jlc3MgLz59XHJcblxyXG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcblx0XHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBwYWRkaW5nVG9wOiAnNjBweCcsIG1pbkhlaWdodDogJzMwMHB4JyB9fVxyXG5cdFx0XHRcdFx0XHRhcz17UmVhY3RRdWlsbH1cclxuXHRcdFx0XHRcdFx0Y29udHJvbD17Y29udHJvbH1cclxuXHRcdFx0XHRcdFx0bmFtZT0nY3REZXNpZ25hdGlvblRpdHJlJ1xyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nQ29ycHMgZHUgbWFpbCBpY2kuLi4nXHJcblx0XHRcdFx0XHRcdG1vZHVsZXM9e1F1aWxsTW9kdWxlc31cclxuXHRcdFx0XHRcdFx0Zm9ybWF0cz17UXVpbGxGb3JtYXRzfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0PENvbnRyb2xsZXJcclxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgcGFkZGluZ1RvcDogJzYwcHgnLCBtaW5IZWlnaHQ6ICczMDBweCcgfX1cclxuXHRcdFx0XHRcdFx0YXM9e1JlYWN0UXVpbGx9XHJcblx0XHRcdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0XHRcdG5hbWU9J2N0UHJpbmNpcENhcmFjJ1xyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nQ29ycHMgZHUgbWFpbCBpY2kuLi4nXHJcblx0XHRcdFx0XHRcdG1vZHVsZXM9e1F1aWxsTW9kdWxlc31cclxuXHRcdFx0XHRcdFx0Zm9ybWF0cz17UXVpbGxGb3JtYXRzfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG5cdFx0XHRcdFx0PENvbnRyb2xsZXJcclxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgcGFkZGluZ1RvcDogJzYwcHgnLCBtaW5IZWlnaHQ6ICczMDBweCcgfX1cclxuXHRcdFx0XHRcdFx0YXM9e1JlYWN0UXVpbGx9XHJcblx0XHRcdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0XHRcdG5hbWU9J2N0U2l0dUxvZydcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0NvcnBzIGR1IG1haWwgaWNpLi4uJ1xyXG5cdFx0XHRcdFx0XHRtb2R1bGVzPXtRdWlsbE1vZHVsZXN9XHJcblx0XHRcdFx0XHRcdGZvcm1hdHM9e1F1aWxsRm9ybWF0c31cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuXHRcdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IHBhZGRpbmdUb3A6ICc2MHB4JywgbWluSGVpZ2h0OiAnMzAwcHgnIH19XHJcblx0XHRcdFx0XHRcdGFzPXtSZWFjdFF1aWxsfVxyXG5cdFx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0XHRuYW1lPSdjdERlc2NMb2cnXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdDb3JwcyBkdSBtYWlsIGljaS4uLidcclxuXHRcdFx0XHRcdFx0bW9kdWxlcz17UXVpbGxNb2R1bGVzfVxyXG5cdFx0XHRcdFx0XHRmb3JtYXRzPXtRdWlsbEZvcm1hdHN9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0PEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcblx0XHRcdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBwYWRkaW5nVG9wOiAnNjBweCcsIG1pbkhlaWdodDogJzMwMHB4JyB9fVxyXG5cdFx0XHRcdFx0XHRhcz17UmVhY3RRdWlsbH1cclxuXHRcdFx0XHRcdFx0Y29udHJvbD17Y29udHJvbH1cclxuXHRcdFx0XHRcdFx0bmFtZT0nY3REdXJlZUxvYydcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0NvcnBzIGR1IG1haWwgaWNpLi4uJ1xyXG5cdFx0XHRcdFx0XHRtb2R1bGVzPXtRdWlsbE1vZHVsZXN9XHJcblx0XHRcdFx0XHRcdGZvcm1hdHM9e1F1aWxsRm9ybWF0c31cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHR7LyogPEVkaXRvciB2YWx1ZT0nJyBvbkNoYW5nZT17KHYpID0+IGNvbnNvbGUubG9nKHYpfSAvPiAqL31cclxuXHJcblx0XHRcdFx0ey8qIDxDS0VkaXRvclxyXG5cdFx0XHRcdFx0ZWRpdG9yPXtDbGFzc2ljRWRpdG9yfVxyXG5cdFx0XHRcdFx0ZGF0YT0nPHA+SGVsbG8gZnJvbSBDS0VkaXRvciA1ITwvcD4nXHJcblx0XHRcdFx0XHRvblJlYWR5PXsoZWRpdG9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdC8vIFlvdSBjYW4gc3RvcmUgdGhlIFwiZWRpdG9yXCIgYW5kIHVzZSB3aGVuIGl0IGlzIG5lZWRlZC5cclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0VkaXRvciBpcyByZWFkeSB0byB1c2UhJywgZWRpdG9yKTtcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50LCBlZGl0b3IpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgZGF0YSA9IGVkaXRvci5nZXREYXRhKCk7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHsgZXZlbnQsIGVkaXRvciwgZGF0YSB9KTtcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRvbkJsdXI9eyhldmVudCwgZWRpdG9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdCbHVyLicsIGVkaXRvcik7XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0b25Gb2N1cz17KGV2ZW50LCBlZGl0b3IpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0ZvY3VzLicsIGVkaXRvcik7XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PENLRWRpdG9yXHJcblx0XHRcdFx0XHRlZGl0b3I9e0NsYXNzaWNFZGl0b3J9XHJcblx0XHRcdFx0XHRkYXRhPSc8cD5IZWxsbyBmcm9tIENLRWRpdG9yIDUhPC9wPidcclxuXHRcdFx0XHRcdG9uUmVhZHk9eyhlZGl0b3IpID0+IHtcclxuXHRcdFx0XHRcdFx0Ly8gWW91IGNhbiBzdG9yZSB0aGUgXCJlZGl0b3JcIiBhbmQgdXNlIHdoZW4gaXQgaXMgbmVlZGVkLlxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRWRpdG9yIGlzIHJlYWR5IHRvIHVzZSEnLCBlZGl0b3IpO1xyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnQsIGVkaXRvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBkYXRhID0gZWRpdG9yLmdldERhdGEoKTtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coeyBldmVudCwgZWRpdG9yLCBkYXRhIH0pO1xyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdG9uQmx1cj17KGV2ZW50LCBlZGl0b3IpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0JsdXIuJywgZWRpdG9yKTtcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRvbkZvY3VzPXsoZXZlbnQsIGVkaXRvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRm9jdXMuJywgZWRpdG9yKTtcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8Q0tFZGl0b3JcclxuXHRcdFx0XHRcdGVkaXRvcj17Q2xhc3NpY0VkaXRvcn1cclxuXHRcdFx0XHRcdGRhdGE9JzxwPkhlbGxvIGZyb20gQ0tFZGl0b3IgNSE8L3A+J1xyXG5cdFx0XHRcdFx0b25SZWFkeT17KGVkaXRvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHQvLyBZb3UgY2FuIHN0b3JlIHRoZSBcImVkaXRvclwiIGFuZCB1c2Ugd2hlbiBpdCBpcyBuZWVkZWQuXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFZGl0b3IgaXMgcmVhZHkgdG8gdXNlIScsIGVkaXRvcik7XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhldmVudCwgZWRpdG9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGRhdGEgPSBlZGl0b3IuZ2V0RGF0YSgpO1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh7IGV2ZW50LCBlZGl0b3IsIGRhdGEgfSk7XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0b25CbHVyPXsoZXZlbnQsIGVkaXRvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQmx1ci4nLCBlZGl0b3IpO1xyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdG9uRm9jdXM9eyhldmVudCwgZWRpdG9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdGb2N1cy4nLCBlZGl0b3IpO1xyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxDS0VkaXRvclxyXG5cdFx0XHRcdFx0ZWRpdG9yPXtDbGFzc2ljRWRpdG9yfVxyXG5cdFx0XHRcdFx0ZGF0YT0nPHA+SGVsbG8gZnJvbSBDS0VkaXRvciA1ITwvcD4nXHJcblx0XHRcdFx0XHRvblJlYWR5PXsoZWRpdG9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdC8vIFlvdSBjYW4gc3RvcmUgdGhlIFwiZWRpdG9yXCIgYW5kIHVzZSB3aGVuIGl0IGlzIG5lZWRlZC5cclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0VkaXRvciBpcyByZWFkeSB0byB1c2UhJywgZWRpdG9yKTtcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50LCBlZGl0b3IpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgZGF0YSA9IGVkaXRvci5nZXREYXRhKCk7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHsgZXZlbnQsIGVkaXRvciwgZGF0YSB9KTtcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRvbkJsdXI9eyhldmVudCwgZWRpdG9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdCbHVyLicsIGVkaXRvcik7XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0b25Gb2N1cz17KGV2ZW50LCBlZGl0b3IpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0ZvY3VzLicsIGVkaXRvcik7XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PENLRWRpdG9yXHJcblx0XHRcdFx0XHRlZGl0b3I9e0NsYXNzaWNFZGl0b3J9XHJcblx0XHRcdFx0XHRkYXRhPSc8cD5IZWxsbyBmcm9tIENLRWRpdG9yIDUhPC9wPidcclxuXHRcdFx0XHRcdG9uUmVhZHk9eyhlZGl0b3IpID0+IHtcclxuXHRcdFx0XHRcdFx0Ly8gWW91IGNhbiBzdG9yZSB0aGUgXCJlZGl0b3JcIiBhbmQgdXNlIHdoZW4gaXQgaXMgbmVlZGVkLlxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRWRpdG9yIGlzIHJlYWR5IHRvIHVzZSEnLCBlZGl0b3IpO1xyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnQsIGVkaXRvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBkYXRhID0gZWRpdG9yLmdldERhdGEoKTtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coeyBldmVudCwgZWRpdG9yLCBkYXRhIH0pO1xyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdG9uQmx1cj17KGV2ZW50LCBlZGl0b3IpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0JsdXIuJywgZWRpdG9yKTtcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRvbkZvY3VzPXsoZXZlbnQsIGVkaXRvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRm9jdXMuJywgZWRpdG9yKTtcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz4gKi99XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0dHlwZT0nc3VibWl0J1xyXG5cdFx0XHRcdFx0dmFyaWFudD0nY29udGFpbmVkJ1xyXG5cdFx0XHRcdFx0Y29sb3I9J3ByaW1hcnknXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuXHRcdFx0XHRcdFZhbGlkZXIgbGVzIG1vZGlmaWNhdGlvbnNcclxuXHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoRm9ybUluZm9zQ29udHJhdCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=