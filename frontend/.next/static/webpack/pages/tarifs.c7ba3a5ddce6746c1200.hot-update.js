webpackHotUpdate_N_E("pages/tarifs",{

/***/ "./actions/calendarActions.js":
/*!************************************!*\
  !*** ./actions/calendarActions.js ***!
  \************************************/
/*! exports provided: getCalendarById, getVacances */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCalendarById", function() { return getCalendarById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVacances", function() { return getVacances; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");


var getCalendarById = function getCalendarById(token, calendarId, dateDebut, dateFin) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/calendar/").concat(calendarId, "/").concat(dateDebut, "/").concat(dateFin), {
    method: 'GET'
  }).then(function (response) {
    console.log('reponse dans action vaut ', response);
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var getVacances = function getVacances(token, dateDebut, dateFin) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/calendar/").concat(dateDebut, "/").concat(dateFin), {
    method: 'GET'
  }).then(function (response) {
    console.log('reponse dans action vaut ', response);
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
}; // export const getClientById = (id, token) => {
// 	return fetch(`${API}/calendar/${id}`, {
// 		method: 'GET',
// 		headers: {
// 			Authorization: `Bearer ${token}`,
// 		},
// 	})
// 		.then((response) => {
// 			return response.json();
// 		})
// 		.catch((err) => console.log(err));
// };

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9jYWxlbmRhckFjdGlvbnMuanMiXSwibmFtZXMiOlsiZ2V0Q2FsZW5kYXJCeUlkIiwidG9rZW4iLCJjYWxlbmRhcklkIiwiZGF0ZURlYnV0IiwiZGF0ZUZpbiIsImZldGNoIiwiQVBJIiwibWV0aG9kIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJlcnIiLCJnZXRWYWNhbmNlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBUUMsVUFBUixFQUFvQkMsU0FBcEIsRUFBK0JDLE9BQS9CLEVBQTJDO0FBQ3pFLFNBQU9DLHVEQUFLLFdBQUlDLDJDQUFKLHVCQUFvQkosVUFBcEIsY0FBa0NDLFNBQWxDLGNBQStDQyxPQUEvQyxHQUEwRDtBQUNyRUcsVUFBTSxFQUFFO0FBRDZELEdBQTFELENBQUwsQ0FHTEMsSUFISyxDQUdBLFVBQUNDLFFBQUQsRUFBYztBQUNuQkMsV0FBTyxDQUFDQyxHQUFSLENBQVksMkJBQVosRUFBeUNGLFFBQXpDO0FBQ0EsV0FBT0EsUUFBUSxDQUFDRyxJQUFULEVBQVA7QUFDQSxHQU5LLFdBT0MsVUFBQ0MsR0FBRDtBQUFBLFdBQVNILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxHQUFaLENBQVQ7QUFBQSxHQVBELENBQVA7QUFRQSxDQVRNO0FBV0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ2IsS0FBRCxFQUFRRSxTQUFSLEVBQW1CQyxPQUFuQixFQUErQjtBQUN6RCxTQUFPQyx1REFBSyxXQUFJQywyQ0FBSix1QkFBb0JILFNBQXBCLGNBQWlDQyxPQUFqQyxHQUE0QztBQUN2REcsVUFBTSxFQUFFO0FBRCtDLEdBQTVDLENBQUwsQ0FHTEMsSUFISyxDQUdBLFVBQUNDLFFBQUQsRUFBYztBQUNuQkMsV0FBTyxDQUFDQyxHQUFSLENBQVksMkJBQVosRUFBeUNGLFFBQXpDO0FBQ0EsV0FBT0EsUUFBUSxDQUFDRyxJQUFULEVBQVA7QUFDQSxHQU5LLFdBT0MsVUFBQ0MsR0FBRDtBQUFBLFdBQVNILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxHQUFaLENBQVQ7QUFBQSxHQVBELENBQVA7QUFRQSxDQVRNLEMsQ0FXUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGFyaWZzLmM3YmEzYTVkZGNlNjc0NmMxMjAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4uL2NvbmZpZyc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2FsZW5kYXJCeUlkID0gKHRva2VuLCBjYWxlbmRhcklkLCBkYXRlRGVidXQsIGRhdGVGaW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9jYWxlbmRhci8ke2NhbGVuZGFySWR9LyR7ZGF0ZURlYnV0fS8ke2RhdGVGaW59YCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZXBvbnNlIGRhbnMgYWN0aW9uIHZhdXQgJywgcmVzcG9uc2UpO1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRWYWNhbmNlcyA9ICh0b2tlbiwgZGF0ZURlYnV0LCBkYXRlRmluKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vY2FsZW5kYXIvJHtkYXRlRGVidXR9LyR7ZGF0ZUZpbn1gLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlcG9uc2UgZGFucyBhY3Rpb24gdmF1dCAnLCByZXNwb25zZSk7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdldENsaWVudEJ5SWQgPSAoaWQsIHRva2VuKSA9PiB7XHJcbi8vIFx0cmV0dXJuIGZldGNoKGAke0FQSX0vY2FsZW5kYXIvJHtpZH1gLCB7XHJcbi8vIFx0XHRtZXRob2Q6ICdHRVQnLFxyXG4vLyBcdFx0aGVhZGVyczoge1xyXG4vLyBcdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuLy8gXHRcdH0sXHJcbi8vIFx0fSlcclxuLy8gXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4vLyBcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4vLyBcdFx0fSlcclxuLy8gXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuLy8gfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==