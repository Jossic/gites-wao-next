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
    method: 'GET',
    headers: {
      Authorization: "Bearer ".concat(token)
    }
  }).then(function (response) {
    console.log('reponse dans action vaut ', response);
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var getVacances = function getVacances(token, dateDebut, dateFin) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/calendar/").concat(dateDebut, "/").concat(dateFin), {
    method: 'GET',
    headers: {
      Authorization: "Bearer ".concat(token)
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9jYWxlbmRhckFjdGlvbnMuanMiXSwibmFtZXMiOlsiZ2V0Q2FsZW5kYXJCeUlkIiwidG9rZW4iLCJjYWxlbmRhcklkIiwiZGF0ZURlYnV0IiwiZGF0ZUZpbiIsImZldGNoIiwiQVBJIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwianNvbiIsImVyciIsImdldFZhY2FuY2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFRQyxVQUFSLEVBQW9CQyxTQUFwQixFQUErQkMsT0FBL0IsRUFBMkM7QUFDekUsU0FBT0MsdURBQUssV0FBSUMsMkNBQUosdUJBQW9CSixVQUFwQixjQUFrQ0MsU0FBbEMsY0FBK0NDLE9BQS9DLEdBQTBEO0FBQ3JFRyxVQUFNLEVBQUUsS0FENkQ7QUFFckVDLFdBQU8sRUFBRTtBQUNSQyxtQkFBYSxtQkFBWVIsS0FBWjtBQURMO0FBRjRELEdBQTFELENBQUwsQ0FNTFMsSUFOSyxDQU1BLFVBQUNDLFFBQUQsRUFBYztBQUNuQkMsV0FBTyxDQUFDQyxHQUFSLENBQVksMkJBQVosRUFBeUNGLFFBQXpDO0FBQ0EsV0FBT0EsUUFBUSxDQUFDRyxJQUFULEVBQVA7QUFDQSxHQVRLLFdBVUMsVUFBQ0MsR0FBRDtBQUFBLFdBQVNILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxHQUFaLENBQVQ7QUFBQSxHQVZELENBQVA7QUFXQSxDQVpNO0FBY0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ2YsS0FBRCxFQUFRRSxTQUFSLEVBQW1CQyxPQUFuQixFQUErQjtBQUN6RCxTQUFPQyx1REFBSyxXQUFJQywyQ0FBSix1QkFBb0JILFNBQXBCLGNBQWlDQyxPQUFqQyxHQUE0QztBQUN2REcsVUFBTSxFQUFFLEtBRCtDO0FBRXZEQyxXQUFPLEVBQUU7QUFDUkMsbUJBQWEsbUJBQVlSLEtBQVo7QUFETDtBQUY4QyxHQUE1QyxDQUFMLENBTUxTLElBTkssQ0FNQSxVQUFDQyxRQUFELEVBQWM7QUFDbkJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaLEVBQXlDRixRQUF6QztBQUNBLFdBQU9BLFFBQVEsQ0FBQ0csSUFBVCxFQUFQO0FBQ0EsR0FUSyxXQVVDLFVBQUNDLEdBQUQ7QUFBQSxXQUFTSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsR0FBWixDQUFUO0FBQUEsR0FWRCxDQUFQO0FBV0EsQ0FaTSxDLENBY1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rhcmlmcy43NTc4MmI4OGZiZWMyZTUxOTVmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENhbGVuZGFyQnlJZCA9ICh0b2tlbiwgY2FsZW5kYXJJZCwgZGF0ZURlYnV0LCBkYXRlRmluKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vY2FsZW5kYXIvJHtjYWxlbmRhcklkfS8ke2RhdGVEZWJ1dH0vJHtkYXRlRmlufWAsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZXBvbnNlIGRhbnMgYWN0aW9uIHZhdXQgJywgcmVzcG9uc2UpO1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRWYWNhbmNlcyA9ICh0b2tlbiwgZGF0ZURlYnV0LCBkYXRlRmluKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vY2FsZW5kYXIvJHtkYXRlRGVidXR9LyR7ZGF0ZUZpbn1gLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygncmVwb25zZSBkYW5zIGFjdGlvbiB2YXV0ICcsIHJlc3BvbnNlKTtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0Q2xpZW50QnlJZCA9IChpZCwgdG9rZW4pID0+IHtcclxuLy8gXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9jYWxlbmRhci8ke2lkfWAsIHtcclxuLy8gXHRcdG1ldGhvZDogJ0dFVCcsXHJcbi8vIFx0XHRoZWFkZXJzOiB7XHJcbi8vIFx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4vLyBcdFx0fSxcclxuLy8gXHR9KVxyXG4vLyBcdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbi8vIFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbi8vIFx0XHR9KVxyXG4vLyBcdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4vLyB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9