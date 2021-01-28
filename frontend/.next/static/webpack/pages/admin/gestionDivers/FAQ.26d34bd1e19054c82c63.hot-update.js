webpackHotUpdate_N_E("pages/admin/gestionDivers/FAQ",{

/***/ "./components/admin/lists/ListQR.js":
/*!******************************************!*\
  !*** ./components/admin/lists/ListQR.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./config.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\lists\\ListQR.js",
    _this = undefined,
    _s = $RefreshSig$();











var ListGites = function ListGites() {
  _s();

  // const [QRs, setQRs] = useState([]);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  var QRList = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.QRList;
  });
  var loading = QRList.loading,
      error = QRList.error,
      QRs = QRList.QRs;
  var userLogin = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.userLogin;
  });
  var token = userLogin.token,
      user = userLogin.user;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!user.isAdmin) {
      next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/login');
    }

    dispatch(Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_2__["listeDesQR"])());
  }, [input]); // const [values, setvalues] = useState({
  // 	loading: false,
  // 	error: '',
  // 	success: '',
  // 	message: '',
  // });
  // const token = getCookie('token');
  // const listerLesQR = () => {
  // 	listeDesQR().then((data) => {
  // 		if (data.error) {
  // 			console.log(error);
  // 		} else {
  // 			setQRs(...QRs, data);
  // 		}
  // 	});
  // };
  // useEffect(() => {
  // 	listerLesQR();
  // }, [success]);
  // const deleteQR = (id) => {
  // 	setvalues({ ...values, loading: true });
  // 	console.log('id', id);
  // 	removeQR(id, token).then((data) => {
  // 		if (data.error) {
  // 			setvalues({
  // 				...values,
  // 				loading: false,
  // 				error: true,
  // 				success: false,
  // 			});
  // 		} else {
  // 			setvalues({
  // 				...values,
  // 				loading: false,
  // 				error: '',
  // 				success: true,
  // 				message: data.message,
  // 			});
  // 		}
  // 	});
  // };

  var deleteConfirm = function deleteConfirm(id) {
    var answer = window.confirm("Cette op\xE9ration est irr\xE9versible, Etes-vous sur de vouloir supprimer la question avec l'id ".concat(id, " ?"));

    if (answer) {// deleteQR(id);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 16
    }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
      color: "success",
      children: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 16
    }, _this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
      color: "danger",
      children: "Une erreur est survenue"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 14
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Id"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Question"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "R\xE9ponse"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            colSpan: "2",
            children: "Actions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: QRs.map(function (QR) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            className: "mt-5",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: QR._id
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: QR.question
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: QR.reponse
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: "/admin/crud/divers/qr/".concat(QR._id),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    "class": "fas fa-pencil-ruler",
                    style: {
                      color: 'orange'
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
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
                lineNumber: 115,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 7
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_s(ListGites, "Snu4VFRgQZpodV1JBYEuyU6sygU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"]];
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0UVIuanMiXSwibmFtZXMiOlsiTGlzdEdpdGVzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIlFSTGlzdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJRUnMiLCJ1c2VyTG9naW4iLCJ0b2tlbiIsInVzZXIiLCJ1c2VFZmZlY3QiLCJpc0FkbWluIiwiUm91dGVyIiwicHVzaCIsImxpc3RlRGVzUVIiLCJpbnB1dCIsImRlbGV0ZUNvbmZpcm0iLCJpZCIsImFuc3dlciIsIndpbmRvdyIsImNvbmZpcm0iLCJzdWNjZXNzIiwibWVzc2FnZSIsIm1hcCIsIlFSIiwiX2lkIiwicXVlc3Rpb24iLCJyZXBvbnNlIiwiY29sb3IiLCJjdXJzb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUN2QjtBQUVBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQSxNQUFNQyxNQUFNLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0YsTUFBakI7QUFBQSxHQUFELENBQTFCO0FBTHVCLE1BTWZHLE9BTmUsR0FNU0gsTUFOVCxDQU1mRyxPQU5lO0FBQUEsTUFNTkMsS0FOTSxHQU1TSixNQU5ULENBTU5JLEtBTk07QUFBQSxNQU1DQyxHQU5ELEdBTVNMLE1BTlQsQ0FNQ0ssR0FORDtBQVF2QixNQUFNQyxTQUFTLEdBQUdMLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0ksU0FBakI7QUFBQSxHQUFELENBQTdCO0FBUnVCLE1BU2ZDLEtBVGUsR0FTQ0QsU0FURCxDQVNmQyxLQVRlO0FBQUEsTUFT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O0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUTtBQUFBLFNBQVI7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkQ7QUFBQSxrQkFERDtBQTZDQSxDQXRIRDs7R0FBTS9CLFM7VUFHWUUsdUQsRUFFRkUsdUQsRUFHR0EsdUQ7OztLQVJiSixTO0FBd0hTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9nZXN0aW9uRGl2ZXJzL0ZBUS4yNmQzNGJkMWUxOTA1NGM4MmM2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFibGUgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgbGlzdGVEZXNRUiwgcmVtb3ZlUVIgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2dpdGVBY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQWxlcnQsIFNwaW5uZXIgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBMaXN0R2l0ZXMgPSAoKSA9PiB7XHJcblx0Ly8gY29uc3QgW1FScywgc2V0UVJzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuXHRjb25zdCBRUkxpc3QgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLlFSTGlzdCk7XHJcblx0Y29uc3QgeyBsb2FkaW5nLCBlcnJvciwgUVJzIH0gPSBRUkxpc3Q7XHJcblxyXG5cdGNvbnN0IHVzZXJMb2dpbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlckxvZ2luKTtcclxuXHRjb25zdCB7IHRva2VuLCB1c2VyIH0gPSB1c2VyTG9naW47XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoIXVzZXIuaXNBZG1pbikge1xyXG5cdFx0XHRSb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcblx0XHR9XHJcblx0XHRkaXNwYXRjaChsaXN0ZURlc1FSKCkpO1xyXG5cdH0sIFtpbnB1dF0pO1xyXG5cclxuXHQvLyBjb25zdCBbdmFsdWVzLCBzZXR2YWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdC8vIFx0bG9hZGluZzogZmFsc2UsXHJcblx0Ly8gXHRlcnJvcjogJycsXHJcblx0Ly8gXHRzdWNjZXNzOiAnJyxcclxuXHQvLyBcdG1lc3NhZ2U6ICcnLFxyXG5cdC8vIH0pO1xyXG5cclxuXHQvLyBjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHJcblx0Ly8gY29uc3QgbGlzdGVyTGVzUVIgPSAoKSA9PiB7XHJcblx0Ly8gXHRsaXN0ZURlc1FSKCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdC8vIFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdC8vIFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHQvLyBcdFx0fSBlbHNlIHtcclxuXHQvLyBcdFx0XHRzZXRRUnMoLi4uUVJzLCBkYXRhKTtcclxuXHQvLyBcdFx0fVxyXG5cdC8vIFx0fSk7XHJcblx0Ly8gfTtcclxuXHJcblx0Ly8gdXNlRWZmZWN0KCgpID0+IHtcclxuXHQvLyBcdGxpc3Rlckxlc1FSKCk7XHJcblx0Ly8gfSwgW3N1Y2Nlc3NdKTtcclxuXHJcblx0Ly8gY29uc3QgZGVsZXRlUVIgPSAoaWQpID0+IHtcclxuXHQvLyBcdHNldHZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHQvLyBcdGNvbnNvbGUubG9nKCdpZCcsIGlkKTtcclxuXHQvLyBcdHJlbW92ZVFSKGlkLCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdC8vIFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdC8vIFx0XHRcdHNldHZhbHVlcyh7XHJcblx0Ly8gXHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0Ly8gXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHQvLyBcdFx0XHRcdGVycm9yOiB0cnVlLFxyXG5cdC8vIFx0XHRcdFx0c3VjY2VzczogZmFsc2UsXHJcblx0Ly8gXHRcdFx0fSk7XHJcblx0Ly8gXHRcdH0gZWxzZSB7XHJcblx0Ly8gXHRcdFx0c2V0dmFsdWVzKHtcclxuXHQvLyBcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHQvLyBcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdC8vIFx0XHRcdFx0ZXJyb3I6ICcnLFxyXG5cdC8vIFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcclxuXHQvLyBcdFx0XHRcdG1lc3NhZ2U6IGRhdGEubWVzc2FnZSxcclxuXHQvLyBcdFx0XHR9KTtcclxuXHQvLyBcdFx0fVxyXG5cdC8vIFx0fSk7XHJcblx0Ly8gfTtcclxuXHJcblx0Y29uc3QgZGVsZXRlQ29uZmlybSA9IChpZCkgPT4ge1xyXG5cdFx0bGV0IGFuc3dlciA9IHdpbmRvdy5jb25maXJtKFxyXG5cdFx0XHRgQ2V0dGUgb3DDqXJhdGlvbiBlc3QgaXJyw6l2ZXJzaWJsZSwgRXRlcy12b3VzIHN1ciBkZSB2b3Vsb2lyIHN1cHByaW1lciBsYSBxdWVzdGlvbiBhdmVjIGwnaWQgJHtpZH0gP2BcclxuXHRcdCk7XHJcblx0XHRpZiAoYW5zd2VyKSB7XHJcblx0XHRcdC8vIGRlbGV0ZVFSKGlkKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e2xvYWRpbmcgJiYgPFNwaW5uZXIgLz59XHJcblx0XHRcdHtzdWNjZXNzICYmIDxBbGVydCBjb2xvcj0nc3VjY2Vzcyc+e21lc3NhZ2V9PC9BbGVydD59XHJcblx0XHRcdHtlcnJvciAmJiA8QWxlcnQgY29sb3I9J2Rhbmdlcic+VW5lIGVycmV1ciBlc3Qgc3VydmVudWU8L0FsZXJ0Pn1cclxuXHRcdFx0PFRhYmxlPlxyXG5cdFx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRoPklkPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPlF1ZXN0aW9uPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPlLDqXBvbnNlPC90aD5cclxuXHJcblx0XHRcdFx0XHRcdDx0aCBjb2xTcGFuPScyJz5BY3Rpb25zPC90aD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0PC90aGVhZD5cclxuXHRcdFx0XHQ8dGJvZHk+XHJcblx0XHRcdFx0XHR7UVJzLm1hcCgoUVIpID0+IChcclxuXHRcdFx0XHRcdFx0PHRyIGNsYXNzTmFtZT0nbXQtNSc+XHJcblx0XHRcdFx0XHRcdFx0PHRoPntRUi5faWR9PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+e1FSLnF1ZXN0aW9ufTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPntRUi5yZXBvbnNlfTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC9hZG1pbi9jcnVkL2RpdmVycy9xci8ke1FSLl9pZH1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPSdmYXMgZmEtcGVuY2lsLXJ1bGVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgY29sb3I6ICdvcmFuZ2UnIH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZGVsZXRlQ29uZmlybShRUi5faWQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz0nZmFzIGZhLXRyYXNoLWFsdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3JlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0PC9UYWJsZT5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0R2l0ZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=