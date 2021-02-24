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




var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\forms\\gites\\FormInfosContrat.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var Editor = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../Editor */ "./components/admin/Editor.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../Editor */ "./components/admin/Editor.js")];
    },
    modules: ['../../Editor']
  }
});
_c2 = Editor;
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
  var editorRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isEditorLoaded = _useState[0],
      setIsEditorLoaded = _useState[1];

  var _ref2 = editorRef.current || {},
      CKEditor = _ref2.CKEditor,
      ClassicEditor = _ref2.ClassicEditor;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    editorRef.current = {
      CKEditor: __webpack_require__(/*! @ckeditor/ckeditor5-react */ "./node_modules/@ckeditor/ckeditor5-react/dist/ckeditor.js"),
      ClassicEditor: __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js")
    };
    setIsEditorLoaded(true);
  }, []);
  console.log(preloadedValues);
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_9__["getCookie"])('token');
  var classes = useStyles();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["useForm"])({
    defaultValues: preloadedValues
  }),
      control = _useForm.control,
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    heureArrivee: 'à partir de 17h',
    heureDepart: 'à partir de 17h',
    loading: false,
    success: '',
    error: '',
    message: ''
  }),
      values = _useState2[0],
      setValues = _useState2[1];

  var success = values.success,
      loading = values.loading,
      error = values.error,
      message = values.message;

  var onSubmit = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
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
      return _ref3.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, loading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CircularProgress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 16
    }
  }), __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 4
    }
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["Controller"], {
    style: {
      paddingTop: '60px',
      minHeight: '300px'
    },
    as: Editor,
    control: control,
    name: "ctDesignationTitre",
    placeholder: "Corps du mail ici...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["Controller"], {
    style: {
      paddingTop: '60px',
      minHeight: '300px'
    },
    as: Editor,
    control: control,
    name: "ctPrincipCarac",
    placeholder: "Corps du mail ici...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["Controller"], {
    style: {
      paddingTop: '60px',
      minHeight: '300px'
    },
    as: Editor,
    control: control,
    name: "ctSituLog",
    placeholder: "Corps du mail ici...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["Controller"], {
    style: {
      paddingTop: '60px',
      minHeight: '300px'
    },
    as: Editor,
    control: control,
    name: "ctDescLog",
    placeholder: "Corps du mail ici...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["Controller"], {
    style: {
      paddingTop: '60px',
      minHeight: '300px'
    },
    as: Editor,
    control: control,
    name: "ctDureeLoc",
    placeholder: "Corps du mail ici...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "submit",
    variant: "contained",
    color: "primary",
    className: classes.button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 5
    }
  }, "Valider les modifications")));
};

_s(FormInfosContrat, "Nf+NMxKEd+qvOqLVAkHG070/Mno=", false, function () {
  return [useStyles, react_hook_form__WEBPACK_IMPORTED_MODULE_7__["useForm"]];
});

_c3 = FormInfosContrat;
/* harmony default export */ __webpack_exports__["default"] = (_c4 = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(FormInfosContrat));

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Editor$dynamic");
$RefreshReg$(_c2, "Editor");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9naXRlcy9Gb3JtSW5mb3NDb250cmF0LmpzIl0sIm5hbWVzIjpbIkVkaXRvciIsImR5bmFtaWMiLCJzc3IiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290Iiwid2lkdGgiLCJidXR0b24iLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJtYXJnaW5Ub3AiLCJmb3JtQ29udHJvbCIsIm1hcmdpbiIsInRleHRGaWVsZCIsIkZvcm1JbmZvc0NvbnRyYXQiLCJwcmVsb2FkZWRWYWx1ZXMiLCJlZGl0b3JSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImlzRWRpdG9yTG9hZGVkIiwic2V0SXNFZGl0b3JMb2FkZWQiLCJjdXJyZW50IiwiQ0tFZGl0b3IiLCJDbGFzc2ljRWRpdG9yIiwidXNlRWZmZWN0IiwicmVxdWlyZSIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlbiIsImdldENvb2tpZSIsImNsYXNzZXMiLCJ1c2VGb3JtIiwiZGVmYXVsdFZhbHVlcyIsImNvbnRyb2wiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImhldXJlQXJyaXZlZSIsImhldXJlRGVwYXJ0IiwibG9hZGluZyIsInN1Y2Nlc3MiLCJlcnJvciIsIm1lc3NhZ2UiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJvblN1Ym1pdCIsImRhdGEiLCJ1cGRhdGVSZXNlcnZhdGlvbiIsInJvdXRlciIsInF1ZXJ5IiwiaWQiLCJ0aGVuIiwicmVzdWx0IiwicGFkZGluZ1RvcCIsIm1pbkhlaWdodCIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLE1BQU0sR0FBR0Msb0RBQU8sTUFBQztBQUFBLFNBQU0saUlBQU47QUFBQSxDQUFELEVBQStCO0FBQUVDLEtBQUcs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QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FoSUQsQ0FIRCxDQUREO0FBOElBLENBaE1EOztHQUFNTyxnQjtVQWVXWixTLEVBQzRCNkIsdUQ7OztNQWhCdkNqQixnQjtBQWtNUyxxRUFBQXdDLDhEQUFVLENBQUN4QyxnQkFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9naXRlcy9baWRdLmExMWNhNzg2YjgzMjYzMDg3NmQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIENpcmN1bGFyUHJvZ3Jlc3MgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgeyB1cGRhdGVSZXNlcnZhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL2FjdGlvbnMvcmVzZXJ2YXRpb25BY3Rpb25zJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmNvbnN0IEVkaXRvciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi8uLi9FZGl0b3InKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0cm9vdDoge1xyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHR9LFxyXG5cdGJ1dHRvbjoge1xyXG5cdFx0bWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdH0sXHJcblx0Zm9ybUNvbnRyb2w6IHtcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuXHR9LFxyXG5cdHRleHRGaWVsZDoge1xyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEZvcm1JbmZvc0NvbnRyYXQgPSAoeyBwcmVsb2FkZWRWYWx1ZXMgfSkgPT4ge1xyXG5cdGNvbnN0IGVkaXRvclJlZiA9IHVzZVJlZigpO1xyXG5cdGNvbnN0IFtpc0VkaXRvckxvYWRlZCwgc2V0SXNFZGl0b3JMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IHsgQ0tFZGl0b3IsIENsYXNzaWNFZGl0b3IgfSA9IGVkaXRvclJlZi5jdXJyZW50IHx8IHt9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZWRpdG9yUmVmLmN1cnJlbnQgPSB7XHJcblx0XHRcdENLRWRpdG9yOiByZXF1aXJlKCdAY2tlZGl0b3IvY2tlZGl0b3I1LXJlYWN0JyksXHJcblx0XHRcdENsYXNzaWNFZGl0b3I6IHJlcXVpcmUoJ0Bja2VkaXRvci9ja2VkaXRvcjUtYnVpbGQtY2xhc3NpYycpLFxyXG5cdFx0fTtcclxuXHRcdHNldElzRWRpdG9yTG9hZGVkKHRydWUpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0Y29uc29sZS5sb2cocHJlbG9hZGVkVmFsdWVzKTtcclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0Y29uc3QgeyBjb250cm9sLCByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKHtcclxuXHRcdGRlZmF1bHRWYWx1ZXM6IHByZWxvYWRlZFZhbHVlcyxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuXHRcdGhldXJlQXJyaXZlZTogJ8OgIHBhcnRpciBkZSAxN2gnLFxyXG5cdFx0aGV1cmVEZXBhcnQ6ICfDoCBwYXJ0aXIgZGUgMTdoJyxcclxuXHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0c3VjY2VzczogJycsXHJcblx0XHRlcnJvcjogJycsXHJcblx0XHRtZXNzYWdlOiAnJyxcclxuXHR9KTtcclxuXHRjb25zdCB7IHN1Y2Nlc3MsIGxvYWRpbmcsIGVycm9yLCBtZXNzYWdlIH0gPSB2YWx1ZXM7XHJcblxyXG5cdGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdFx0dXBkYXRlUmVzZXJ2YXRpb24oZGF0YSwgcm91dGVyLnF1ZXJ5LmlkLCB0b2tlbikudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHRcdGlmIChyZXN1bHQuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiByZXN1bHQuZXJyb3IgfSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0VmFsdWVzKHtcclxuXHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IHRydWUsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IHJlc3VsdC5tZXNzYWdlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdC8vIFx0Um91dGVyLnB1c2goJy9hZG1pbi9nZXN0aW9uRGl2ZXJzL3BhcnRlbmFpcmVzJyk7XHJcblx0XHRcdFx0Ly8gfSwgMzAwMCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7bG9hZGluZyAmJiA8Q2lyY3VsYXJQcm9ncmVzcyAvPn1cclxuXHJcblx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuXHRcdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdFx0c3R5bGU9e3sgcGFkZGluZ1RvcDogJzYwcHgnLCBtaW5IZWlnaHQ6ICczMDBweCcgfX1cclxuXHRcdFx0XHRcdGFzPXtFZGl0b3J9XHJcblx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0bmFtZT0nY3REZXNpZ25hdGlvblRpdHJlJ1xyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0NvcnBzIGR1IG1haWwgaWNpLi4uJ1xyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PENvbnRyb2xsZXJcclxuXHRcdFx0XHRcdHN0eWxlPXt7IHBhZGRpbmdUb3A6ICc2MHB4JywgbWluSGVpZ2h0OiAnMzAwcHgnIH19XHJcblx0XHRcdFx0XHRhcz17RWRpdG9yfVxyXG5cdFx0XHRcdFx0Y29udHJvbD17Y29udHJvbH1cclxuXHRcdFx0XHRcdG5hbWU9J2N0UHJpbmNpcENhcmFjJ1xyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0NvcnBzIGR1IG1haWwgaWNpLi4uJ1xyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PENvbnRyb2xsZXJcclxuXHRcdFx0XHRcdHN0eWxlPXt7IHBhZGRpbmdUb3A6ICc2MHB4JywgbWluSGVpZ2h0OiAnMzAwcHgnIH19XHJcblx0XHRcdFx0XHRhcz17RWRpdG9yfVxyXG5cdFx0XHRcdFx0Y29udHJvbD17Y29udHJvbH1cclxuXHRcdFx0XHRcdG5hbWU9J2N0U2l0dUxvZydcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdDb3JwcyBkdSBtYWlsIGljaS4uLidcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxDb250cm9sbGVyXHJcblx0XHRcdFx0XHRzdHlsZT17eyBwYWRkaW5nVG9wOiAnNjBweCcsIG1pbkhlaWdodDogJzMwMHB4JyB9fVxyXG5cdFx0XHRcdFx0YXM9e0VkaXRvcn1cclxuXHRcdFx0XHRcdGNvbnRyb2w9e2NvbnRyb2x9XHJcblx0XHRcdFx0XHRuYW1lPSdjdERlc2NMb2cnXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nQ29ycHMgZHUgbWFpbCBpY2kuLi4nXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8Q29udHJvbGxlclxyXG5cdFx0XHRcdFx0c3R5bGU9e3sgcGFkZGluZ1RvcDogJzYwcHgnLCBtaW5IZWlnaHQ6ICczMDBweCcgfX1cclxuXHRcdFx0XHRcdGFzPXtFZGl0b3J9XHJcblx0XHRcdFx0XHRjb250cm9sPXtjb250cm9sfVxyXG5cdFx0XHRcdFx0bmFtZT0nY3REdXJlZUxvYydcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdDb3JwcyBkdSBtYWlsIGljaS4uLidcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHsvKiA8RWRpdG9yIHZhbHVlPScnIG9uQ2hhbmdlPXsodikgPT4gY29uc29sZS5sb2codil9IC8+ICovfVxyXG5cclxuXHRcdFx0XHR7LyogPENLRWRpdG9yXHJcblx0XHRcdFx0XHRlZGl0b3I9e0NsYXNzaWNFZGl0b3J9XHJcblx0XHRcdFx0XHRkYXRhPSc8cD5IZWxsbyBmcm9tIENLRWRpdG9yIDUhPC9wPidcclxuXHRcdFx0XHRcdG9uUmVhZHk9eyhlZGl0b3IpID0+IHtcclxuXHRcdFx0XHRcdFx0Ly8gWW91IGNhbiBzdG9yZSB0aGUgXCJlZGl0b3JcIiBhbmQgdXNlIHdoZW4gaXQgaXMgbmVlZGVkLlxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRWRpdG9yIGlzIHJlYWR5IHRvIHVzZSEnLCBlZGl0b3IpO1xyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnQsIGVkaXRvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBkYXRhID0gZWRpdG9yLmdldERhdGEoKTtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coeyBldmVudCwgZWRpdG9yLCBkYXRhIH0pO1xyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdG9uQmx1cj17KGV2ZW50LCBlZGl0b3IpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0JsdXIuJywgZWRpdG9yKTtcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRvbkZvY3VzPXsoZXZlbnQsIGVkaXRvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRm9jdXMuJywgZWRpdG9yKTtcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8Q0tFZGl0b3JcclxuXHRcdFx0XHRcdGVkaXRvcj17Q2xhc3NpY0VkaXRvcn1cclxuXHRcdFx0XHRcdGRhdGE9JzxwPkhlbGxvIGZyb20gQ0tFZGl0b3IgNSE8L3A+J1xyXG5cdFx0XHRcdFx0b25SZWFkeT17KGVkaXRvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHQvLyBZb3UgY2FuIHN0b3JlIHRoZSBcImVkaXRvclwiIGFuZCB1c2Ugd2hlbiBpdCBpcyBuZWVkZWQuXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFZGl0b3IgaXMgcmVhZHkgdG8gdXNlIScsIGVkaXRvcik7XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhldmVudCwgZWRpdG9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGRhdGEgPSBlZGl0b3IuZ2V0RGF0YSgpO1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh7IGV2ZW50LCBlZGl0b3IsIGRhdGEgfSk7XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0b25CbHVyPXsoZXZlbnQsIGVkaXRvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQmx1ci4nLCBlZGl0b3IpO1xyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdG9uRm9jdXM9eyhldmVudCwgZWRpdG9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdGb2N1cy4nLCBlZGl0b3IpO1xyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxDS0VkaXRvclxyXG5cdFx0XHRcdFx0ZWRpdG9yPXtDbGFzc2ljRWRpdG9yfVxyXG5cdFx0XHRcdFx0ZGF0YT0nPHA+SGVsbG8gZnJvbSBDS0VkaXRvciA1ITwvcD4nXHJcblx0XHRcdFx0XHRvblJlYWR5PXsoZWRpdG9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdC8vIFlvdSBjYW4gc3RvcmUgdGhlIFwiZWRpdG9yXCIgYW5kIHVzZSB3aGVuIGl0IGlzIG5lZWRlZC5cclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0VkaXRvciBpcyByZWFkeSB0byB1c2UhJywgZWRpdG9yKTtcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50LCBlZGl0b3IpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgZGF0YSA9IGVkaXRvci5nZXREYXRhKCk7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHsgZXZlbnQsIGVkaXRvciwgZGF0YSB9KTtcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRvbkJsdXI9eyhldmVudCwgZWRpdG9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdCbHVyLicsIGVkaXRvcik7XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0b25Gb2N1cz17KGV2ZW50LCBlZGl0b3IpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0ZvY3VzLicsIGVkaXRvcik7XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PENLRWRpdG9yXHJcblx0XHRcdFx0XHRlZGl0b3I9e0NsYXNzaWNFZGl0b3J9XHJcblx0XHRcdFx0XHRkYXRhPSc8cD5IZWxsbyBmcm9tIENLRWRpdG9yIDUhPC9wPidcclxuXHRcdFx0XHRcdG9uUmVhZHk9eyhlZGl0b3IpID0+IHtcclxuXHRcdFx0XHRcdFx0Ly8gWW91IGNhbiBzdG9yZSB0aGUgXCJlZGl0b3JcIiBhbmQgdXNlIHdoZW4gaXQgaXMgbmVlZGVkLlxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRWRpdG9yIGlzIHJlYWR5IHRvIHVzZSEnLCBlZGl0b3IpO1xyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnQsIGVkaXRvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBkYXRhID0gZWRpdG9yLmdldERhdGEoKTtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coeyBldmVudCwgZWRpdG9yLCBkYXRhIH0pO1xyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdG9uQmx1cj17KGV2ZW50LCBlZGl0b3IpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0JsdXIuJywgZWRpdG9yKTtcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRvbkZvY3VzPXsoZXZlbnQsIGVkaXRvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRm9jdXMuJywgZWRpdG9yKTtcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8Q0tFZGl0b3JcclxuXHRcdFx0XHRcdGVkaXRvcj17Q2xhc3NpY0VkaXRvcn1cclxuXHRcdFx0XHRcdGRhdGE9JzxwPkhlbGxvIGZyb20gQ0tFZGl0b3IgNSE8L3A+J1xyXG5cdFx0XHRcdFx0b25SZWFkeT17KGVkaXRvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHQvLyBZb3UgY2FuIHN0b3JlIHRoZSBcImVkaXRvclwiIGFuZCB1c2Ugd2hlbiBpdCBpcyBuZWVkZWQuXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFZGl0b3IgaXMgcmVhZHkgdG8gdXNlIScsIGVkaXRvcik7XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhldmVudCwgZWRpdG9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGRhdGEgPSBlZGl0b3IuZ2V0RGF0YSgpO1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh7IGV2ZW50LCBlZGl0b3IsIGRhdGEgfSk7XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0b25CbHVyPXsoZXZlbnQsIGVkaXRvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQmx1ci4nLCBlZGl0b3IpO1xyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdG9uRm9jdXM9eyhldmVudCwgZWRpdG9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdGb2N1cy4nLCBlZGl0b3IpO1xyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPiAqL31cclxuXHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHR0eXBlPSdzdWJtaXQnXHJcblx0XHRcdFx0XHR2YXJpYW50PSdjb250YWluZWQnXHJcblx0XHRcdFx0XHRjb2xvcj0ncHJpbWFyeSdcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG5cdFx0XHRcdFx0VmFsaWRlciBsZXMgbW9kaWZpY2F0aW9uc1xyXG5cdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihGb3JtSW5mb3NDb250cmF0KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==