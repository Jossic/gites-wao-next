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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/authActions */ "./actions/authActions.js");





var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\ListQR.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var ListGites = function ListGites() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      QRs = _useState[0],
      setQRs = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    loading: false,
    error: '',
    success: '',
    message: ''
  }),
      values = _useState2[0],
      setvalues = _useState2[1];

  var loading = values.loading,
      error = values.error,
      success = values.success,
      message = values.message;
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_8__["getCookie"])('token');

  var listerLesQR = function listerLesQR() {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_4__["listeDesQR"])(token).then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        setQRs.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(QRs).concat([data]));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    listerLesQR();
  }, [setValues]);

  var deleteQR = function deleteQR(id) {
    setvalues(_objectSpread(_objectSpread({}, values), {}, {
      loading: true
    }));
    console.log('id', id);
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_4__["removeQR"])(id, token).then(function (data) {
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
      }
    });
  };

  var deleteConfirm = function deleteConfirm(id) {
    var answer = window.confirm("Cette op\xE9ration est irr\xE9versible, Etes-vous sur de vouloir supprimer la question avec l'id ".concat(id, " ?"));

    if (answer) {
      deleteQR(id);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Spinner"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 16
    }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
      color: "success",
      children: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 16
    }, _this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
      color: "danger",
      children: "Une erreur est survenue"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 14
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Table"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Id"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Question"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "R\xE9ponse"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            colSpan: "2",
            children: "Actions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: QRs.map(function (QR) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            className: "mt-5",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: QR._id
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: QR.question
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: QR.reponse
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
                href: "/admin/crud/gite/".concat(QR._id),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    "class": "fas fa-pencil-ruler",
                    style: {
                      color: 'orange'
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
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
                lineNumber: 100,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 7
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_s(ListGites, "CfJCBtWntD5VB5u8UvUJ1F3UWmE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9MaXN0UVIuanMiXSwibmFtZXMiOlsiTGlzdEdpdGVzIiwidXNlU3RhdGUiLCJRUnMiLCJzZXRRUnMiLCJsb2FkaW5nIiwiZXJyb3IiLCJzdWNjZXNzIiwibWVzc2FnZSIsInZhbHVlcyIsInNldHZhbHVlcyIsInRva2VuIiwiZ2V0Q29va2llIiwibGlzdGVyTGVzUVIiLCJsaXN0ZURlc1FSIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0Iiwic2V0VmFsdWVzIiwiZGVsZXRlUVIiLCJpZCIsInJlbW92ZVFSIiwiZGVsZXRlQ29uZmlybSIsImFuc3dlciIsIndpbmRvdyIsImNvbmZpcm0iLCJtYXAiLCJRUiIsIl9pZCIsInF1ZXN0aW9uIiwicmVwb25zZSIsImNvbG9yIiwiY3Vyc29yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUMsRUFBRCxDQURQO0FBQUEsTUFDaEJDLEdBRGdCO0FBQUEsTUFDWEMsTUFEVzs7QUFBQSxtQkFHS0Ysc0RBQVEsQ0FBQztBQUNwQ0csV0FBTyxFQUFFLEtBRDJCO0FBRXBDQyxTQUFLLEVBQUUsRUFGNkI7QUFHcENDLFdBQU8sRUFBRSxFQUgyQjtBQUlwQ0MsV0FBTyxFQUFFO0FBSjJCLEdBQUQsQ0FIYjtBQUFBLE1BR2hCQyxNQUhnQjtBQUFBLE1BR1JDLFNBSFE7O0FBQUEsTUFVZkwsT0FWZSxHQVVzQkksTUFWdEIsQ0FVZkosT0FWZTtBQUFBLE1BVU5DLEtBVk0sR0FVc0JHLE1BVnRCLENBVU5ILEtBVk07QUFBQSxNQVVDQyxPQVZELEdBVXNCRSxNQVZ0QixDQVVDRixPQVZEO0FBQUEsTUFVVUMsT0FWVixHQVVz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QUFBQTtBQUFBLHFCQUZELGVBR0M7QUFBQSx3QkFBS0YsRUFBRSxDQUFDRztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEQsZUFJQztBQUFBLHFDQUNDLHFFQUFDLGdEQUFEO0FBQU0sb0JBQUksNkJBQXNCSCxFQUFFLENBQUNDLEdBQXpCLENBQVY7QUFBQSx1Q0FDQztBQUFBLHlDQUNDO0FBQ0MsNkJBQU0scUJBRFA7QUFFQyx5QkFBSyxFQUFFO0FBQUVHLDJCQUFLLEVBQUU7QUFBVDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkQsZUFhQztBQUFBLHFDQUNDO0FBQ0MsdUJBQU8sRUFBRTtBQUFBLHlCQUFNVCxhQUFhLENBQUNLLEVBQUUsQ0FBQ0MsR0FBSixDQUFuQjtBQUFBLGlCQURWO0FBRUMseUJBQU0sa0JBRlA7QUFHQyxxQkFBSyxFQUFFO0FBQ05HLHVCQUFLLEVBQUUsS0FERDtBQUVOQyx3QkFBTSxFQUFFO0FBRkY7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFiRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFE7QUFBQSxTQUFSO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpEO0FBQUEsa0JBREQ7QUE2Q0EsQ0F6R0Q7O0dBQU1qQyxTOztLQUFBQSxTO0FBMkdTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9nZXN0aW9uRGl2ZXJzL0ZBUS5kNjQ3ZjRjODlkZTZmMjU5MjRiMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFibGUgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgbGlzdGVEZXNRUiwgcmVtb3ZlUVIgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IEFsZXJ0LCBTcGlubmVyIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5jb25zdCBMaXN0R2l0ZXMgPSAoKSA9PiB7XHJcblx0Y29uc3QgW1FScywgc2V0UVJzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgW3ZhbHVlcywgc2V0dmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuXHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0ZXJyb3I6ICcnLFxyXG5cdFx0c3VjY2VzczogJycsXHJcblx0XHRtZXNzYWdlOiAnJyxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgeyBsb2FkaW5nLCBlcnJvciwgc3VjY2VzcywgbWVzc2FnZSB9ID0gdmFsdWVzO1xyXG5cclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHJcblx0Y29uc3QgbGlzdGVyTGVzUVIgPSAoKSA9PiB7XHJcblx0XHRsaXN0ZURlc1FSKHRva2VuKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldFFScyguLi5RUnMsIGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGlzdGVyTGVzUVIoKTtcclxuXHR9LCBbc2V0VmFsdWVzXSk7XHJcblxyXG5cdGNvbnN0IGRlbGV0ZVFSID0gKGlkKSA9PiB7XHJcblx0XHRzZXR2YWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUgfSk7XHJcblx0XHRjb25zb2xlLmxvZygnaWQnLCBpZCk7XHJcblx0XHRyZW1vdmVRUihpZCwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXR2YWx1ZXMoe1xyXG5cdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0XHRlcnJvcjogdHJ1ZSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZhbHNlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldHZhbHVlcyh7XHJcblx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRcdGVycm9yOiAnJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IHRydWUsXHJcblx0XHRcdFx0XHRtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRlbGV0ZUNvbmZpcm0gPSAoaWQpID0+IHtcclxuXHRcdGxldCBhbnN3ZXIgPSB3aW5kb3cuY29uZmlybShcclxuXHRcdFx0YENldHRlIG9ww6lyYXRpb24gZXN0IGlycsOpdmVyc2libGUsIEV0ZXMtdm91cyBzdXIgZGUgdm91bG9pciBzdXBwcmltZXIgbGEgcXVlc3Rpb24gYXZlYyBsJ2lkICR7aWR9ID9gXHJcblx0XHQpO1xyXG5cdFx0aWYgKGFuc3dlcikge1xyXG5cdFx0XHRkZWxldGVRUihpZCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHtsb2FkaW5nICYmIDxTcGlubmVyIC8+fVxyXG5cdFx0XHR7c3VjY2VzcyAmJiA8QWxlcnQgY29sb3I9J3N1Y2Nlc3MnPnttZXNzYWdlfTwvQWxlcnQ+fVxyXG5cdFx0XHR7ZXJyb3IgJiYgPEFsZXJ0IGNvbG9yPSdkYW5nZXInPlVuZSBlcnJldXIgZXN0IHN1cnZlbnVlPC9BbGVydD59XHJcblx0XHRcdDxUYWJsZT5cclxuXHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0aD5JZDwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5RdWVzdGlvbjwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5Sw6lwb25zZTwvdGg+XHJcblxyXG5cdFx0XHRcdFx0XHQ8dGggY29sU3Bhbj0nMic+QWN0aW9uczwvdGg+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0e1FScy5tYXAoKFFSKSA9PiAoXHJcblx0XHRcdFx0XHRcdDx0ciBjbGFzc05hbWU9J210LTUnPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD57UVIuX2lkfTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPntRUi5xdWVzdGlvbn08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD57UVIucmVwb25zZX08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2AvYWRtaW4vY3J1ZC9naXRlLyR7UVIuX2lkfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9J2ZhcyBmYS1wZW5jaWwtcnVsZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogJ29yYW5nZScgfX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBkZWxldGVDb25maXJtKFFSLl9pZCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPSdmYXMgZmEtdHJhc2gtYWx0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAncmVkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdXJzb3I6ICdwb2ludGVyJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHQ8L1RhYmxlPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RHaXRlcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==