webpackHotUpdate_N_E("pages/admin/gestionDivers/FAQ",{

/***/ "./components/admin/lists/ListQR.js":
/*!******************************************!*\
  !*** ./components/admin/lists/ListQR.js ***!
  \******************************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
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
    _this = undefined;











var ListGites = function ListGites(_ref) {
  var loading = _ref.loading,
      QRs = _ref.QRs;

  // const [QRs, setQRs] = useState([]);
  // const dispatch = useDispatch();
  // const QRList = useSelector((state) => state.QRList);
  // const { loading, error, QRs } = QRList;
  // const userLogin = useSelector((state) => state.userLogin);
  // const { token, user } = userLogin;
  // useEffect(() => {
  // 	if (!user.isAdmin) {
  // 		Router.push('/login');
  // 	}
  // 	dispatch(listeDesQR());
  // }, [input]);
  // const [values, setvalues] = useState({
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
    }, _this), console.log(loading), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Id"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Question"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "R\xE9ponse"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            colSpan: "2",
            children: "Actions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
}; // If you build and start the app, the date returned here will have the same
// value for all requests, as this method gets executed at build time.


_c = ListGites;
function getStaticProps() {
  // Note that in this case we're returning the state directly, without creating
  // the store first (like in /pages/ssr.js), this approach can be better and easier
  return {
    props: {
      initialReduxState: {
        loading: true,
        QRs: []
      }
    }
  };
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0UVIuanMiXSwibmFtZXMiOlsiTGlzdEdpdGVzIiwibG9hZGluZyIsIlFScyIsImRlbGV0ZUNvbmZpcm0iLCJpZCIsImFuc3dlciIsIndpbmRvdyIsImNvbmZpcm0iLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGljUHJvcHMiLCJwcm9wcyIsImluaXRpYWxSZWR1eFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQXNCO0FBQUEsTUFBbkJDLE9BQW1CLFFBQW5CQSxPQUFtQjtBQUFBLE1BQVZDLEdBQVUsUUFBVkEsR0FBVTs7QUFDdkM7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsRUFBRCxFQUFRO0FBQzdCLFFBQUlDLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxPQUFQLDRHQUNrRkgsRUFEbEYsUUFBYjs7QUFHQSxRQUFJQyxNQUFKLEVBQVksQ0FDWDtBQUNBO0FBQ0QsR0FQRDs7QUFTQSxzQkFDQztBQUFBLGVBQ0VKLE9BQU8saUJBQUkscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURiLEVBRUVPLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUixPQUFaLENBRkYsZUFLQyxxRUFBQyxnREFBRDtBQUFBLDhCQUNDO0FBQUEsK0JBQ0M7QUFBQSxrQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZELGVBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEQsZUFLQztBQUFJLG1CQUFPLEVBQUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFVQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEQ7QUFBQSxrQkFERDtBQThDQSxDQXZIRCxDLENBeUhBO0FBQ0E7OztLQTFITUQsUztBQTJIQyxTQUFTVSxjQUFULEdBQTBCO0FBQ2hDO0FBQ0E7QUFDQSxTQUFPO0FBQ05DLFNBQUssRUFBRTtBQUNOQyx1QkFBaUIsRUFBRTtBQUNsQlgsZUFBTyxFQUFFLElBRFM7QUFFbEJDLFdBQUcsRUFBRTtBQUZhO0FBRGI7QUFERCxHQUFQO0FBUUE7QUFFY0Ysd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vZ2VzdGlvbkRpdmVycy9GQVEuNWJjMmVlMjE5NzEyMDQ5NGNmZWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYmxlIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IGxpc3RlRGVzUVIsIHJlbW92ZVFSIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9naXRlQWN0aW9ucyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFsZXJ0LCBTcGlubmVyIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgTGlzdEdpdGVzID0gKHsgbG9hZGluZywgUVJzIH0pID0+IHtcclxuXHQvLyBjb25zdCBbUVJzLCBzZXRRUnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHQvLyBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG5cdC8vIGNvbnN0IFFSTGlzdCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuUVJMaXN0KTtcclxuXHQvLyBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBRUnMgfSA9IFFSTGlzdDtcclxuXHJcblx0Ly8gY29uc3QgdXNlckxvZ2luID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyTG9naW4pO1xyXG5cdC8vIGNvbnN0IHsgdG9rZW4sIHVzZXIgfSA9IHVzZXJMb2dpbjtcclxuXHJcblx0Ly8gdXNlRWZmZWN0KCgpID0+IHtcclxuXHQvLyBcdGlmICghdXNlci5pc0FkbWluKSB7XHJcblx0Ly8gXHRcdFJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuXHQvLyBcdH1cclxuXHQvLyBcdGRpc3BhdGNoKGxpc3RlRGVzUVIoKSk7XHJcblx0Ly8gfSwgW2lucHV0XSk7XHJcblxyXG5cdC8vIGNvbnN0IFt2YWx1ZXMsIHNldHZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0Ly8gXHRsb2FkaW5nOiBmYWxzZSxcclxuXHQvLyBcdGVycm9yOiAnJyxcclxuXHQvLyBcdHN1Y2Nlc3M6ICcnLFxyXG5cdC8vIFx0bWVzc2FnZTogJycsXHJcblx0Ly8gfSk7XHJcblxyXG5cdC8vIGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cclxuXHQvLyBjb25zdCBsaXN0ZXJMZXNRUiA9ICgpID0+IHtcclxuXHQvLyBcdGxpc3RlRGVzUVIoKS50aGVuKChkYXRhKSA9PiB7XHJcblx0Ly8gXHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdC8vIFx0XHR9IGVsc2Uge1xyXG5cdC8vIFx0XHRcdHNldFFScyguLi5RUnMsIGRhdGEpO1xyXG5cdC8vIFx0XHR9XHJcblx0Ly8gXHR9KTtcclxuXHQvLyB9O1xyXG5cclxuXHQvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdC8vIFx0bGlzdGVyTGVzUVIoKTtcclxuXHQvLyB9LCBbc3VjY2Vzc10pO1xyXG5cclxuXHQvLyBjb25zdCBkZWxldGVRUiA9IChpZCkgPT4ge1xyXG5cdC8vIFx0c2V0dmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdC8vIFx0Y29uc29sZS5sb2coJ2lkJywgaWQpO1xyXG5cdC8vIFx0cmVtb3ZlUVIoaWQsIHRva2VuKS50aGVuKChkYXRhKSA9PiB7XHJcblx0Ly8gXHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0Ly8gXHRcdFx0c2V0dmFsdWVzKHtcclxuXHQvLyBcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHQvLyBcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdC8vIFx0XHRcdFx0ZXJyb3I6IHRydWUsXHJcblx0Ly8gXHRcdFx0XHRzdWNjZXNzOiBmYWxzZSxcclxuXHQvLyBcdFx0XHR9KTtcclxuXHQvLyBcdFx0fSBlbHNlIHtcclxuXHQvLyBcdFx0XHRzZXR2YWx1ZXMoe1xyXG5cdC8vIFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdC8vIFx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0Ly8gXHRcdFx0XHRlcnJvcjogJycsXHJcblx0Ly8gXHRcdFx0XHRzdWNjZXNzOiB0cnVlLFxyXG5cdC8vIFx0XHRcdFx0bWVzc2FnZTogZGF0YS5tZXNzYWdlLFxyXG5cdC8vIFx0XHRcdH0pO1xyXG5cdC8vIFx0XHR9XHJcblx0Ly8gXHR9KTtcclxuXHQvLyB9O1xyXG5cclxuXHRjb25zdCBkZWxldGVDb25maXJtID0gKGlkKSA9PiB7XHJcblx0XHRsZXQgYW5zd2VyID0gd2luZG93LmNvbmZpcm0oXHJcblx0XHRcdGBDZXR0ZSBvcMOpcmF0aW9uIGVzdCBpcnLDqXZlcnNpYmxlLCBFdGVzLXZvdXMgc3VyIGRlIHZvdWxvaXIgc3VwcHJpbWVyIGxhIHF1ZXN0aW9uIGF2ZWMgbCdpZCAke2lkfSA/YFxyXG5cdFx0KTtcclxuXHRcdGlmIChhbnN3ZXIpIHtcclxuXHRcdFx0Ly8gZGVsZXRlUVIoaWQpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7bG9hZGluZyAmJiA8U3Bpbm5lciAvPn1cclxuXHRcdFx0e2NvbnNvbGUubG9nKGxvYWRpbmcpfVxyXG5cdFx0XHR7Lyoge3N1Y2Nlc3MgJiYgPEFsZXJ0IGNvbG9yPSdzdWNjZXNzJz57bWVzc2FnZX08L0FsZXJ0Pn0gKi99XHJcblx0XHRcdHsvKiB7ZXJyb3IgJiYgPEFsZXJ0IGNvbG9yPSdkYW5nZXInPlVuZSBlcnJldXIgZXN0IHN1cnZlbnVlPC9BbGVydD59ICovfVxyXG5cdFx0XHQ8VGFibGU+XHJcblx0XHRcdFx0PHRoZWFkPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGg+SWQ8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+UXVlc3Rpb248L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+UsOpcG9uc2U8L3RoPlxyXG5cclxuXHRcdFx0XHRcdFx0PHRoIGNvbFNwYW49JzInPkFjdGlvbnM8L3RoPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdHsvKiB7UVJzLm1hcCgoUVIpID0+IChcclxuXHRcdFx0XHRcdFx0PHRyIGNsYXNzTmFtZT0nbXQtNSc+XHJcblx0XHRcdFx0XHRcdFx0PHRoPntRUi5faWR9PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+e1FSLnF1ZXN0aW9ufTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPntRUi5yZXBvbnNlfTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC9hZG1pbi9jcnVkL2RpdmVycy9xci8ke1FSLl9pZH1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPSdmYXMgZmEtcGVuY2lsLXJ1bGVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgY29sb3I6ICdvcmFuZ2UnIH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZGVsZXRlQ29uZmlybShRUi5faWQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz0nZmFzIGZhLXRyYXNoLWFsdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3JlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0KSl9ICovfVxyXG5cdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdDwvVGFibGU+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuLy8gSWYgeW91IGJ1aWxkIGFuZCBzdGFydCB0aGUgYXBwLCB0aGUgZGF0ZSByZXR1cm5lZCBoZXJlIHdpbGwgaGF2ZSB0aGUgc2FtZVxyXG4vLyB2YWx1ZSBmb3IgYWxsIHJlcXVlc3RzLCBhcyB0aGlzIG1ldGhvZCBnZXRzIGV4ZWN1dGVkIGF0IGJ1aWxkIHRpbWUuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuXHQvLyBOb3RlIHRoYXQgaW4gdGhpcyBjYXNlIHdlJ3JlIHJldHVybmluZyB0aGUgc3RhdGUgZGlyZWN0bHksIHdpdGhvdXQgY3JlYXRpbmdcclxuXHQvLyB0aGUgc3RvcmUgZmlyc3QgKGxpa2UgaW4gL3BhZ2VzL3Nzci5qcyksIHRoaXMgYXBwcm9hY2ggY2FuIGJlIGJldHRlciBhbmQgZWFzaWVyXHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGluaXRpYWxSZWR1eFN0YXRlOiB7XHJcblx0XHRcdFx0bG9hZGluZzogdHJ1ZSxcclxuXHRcdFx0XHRRUnM6IFtdLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0R2l0ZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=