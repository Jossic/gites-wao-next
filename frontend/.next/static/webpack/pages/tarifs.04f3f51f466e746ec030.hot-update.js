webpackHotUpdate_N_E("pages/tarifs",{

/***/ "./actions/calendarActions.js":
/*!************************************!*\
  !*** ./actions/calendarActions.js ***!
  \************************************/
/*! exports provided: getCalendarById, getDejaLoue, getVacances */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCalendarById", function() { return getCalendarById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDejaLoue", function() { return getDejaLoue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVacances", function() { return getVacances; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");


var getCalendarById = function getCalendarById(calendarId, dateDebut, dateFin) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/calendar/").concat(calendarId, "/").concat(dateDebut, "/").concat(dateFin), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var getDejaLoue = function getDejaLoue(calendarId, dateDebut, dateFin) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/calendar/loue/").concat(calendarId, "/").concat(dateDebut, "/").concat(dateFin), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var getVacances = function getVacances(dateDebut, dateFin) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/calendar/").concat(dateDebut, "/").concat(dateFin), {
    method: 'GET'
  }).then(function (response) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9jYWxlbmRhckFjdGlvbnMuanMiXSwibmFtZXMiOlsiZ2V0Q2FsZW5kYXJCeUlkIiwiY2FsZW5kYXJJZCIsImRhdGVEZWJ1dCIsImRhdGVGaW4iLCJmZXRjaCIsIkFQSSIsIm1ldGhvZCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ2V0RGVqYUxvdWUiLCJnZXRWYWNhbmNlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsVUFBRCxFQUFhQyxTQUFiLEVBQXdCQyxPQUF4QixFQUFvQztBQUNsRSxTQUFPQyx1REFBSyxXQUFJQywyQ0FBSix1QkFBb0JKLFVBQXBCLGNBQWtDQyxTQUFsQyxjQUErQ0MsT0FBL0MsR0FBMEQ7QUFDckVHLFVBQU0sRUFBRTtBQUQ2RCxHQUExRCxDQUFMLENBR0xDLElBSEssQ0FHQSxVQUFDQyxRQUFELEVBQWM7QUFDbkIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDQSxHQUxLLFdBTUMsVUFBQ0MsR0FBRDtBQUFBLFdBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQVQ7QUFBQSxHQU5ELENBQVA7QUFPQSxDQVJNO0FBU0EsSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ1osVUFBRCxFQUFhQyxTQUFiLEVBQXdCQyxPQUF4QixFQUFvQztBQUM5RCxTQUFPQyx1REFBSyxXQUFJQywyQ0FBSiw0QkFBeUJKLFVBQXpCLGNBQXVDQyxTQUF2QyxjQUFvREMsT0FBcEQsR0FBK0Q7QUFDMUVHLFVBQU0sRUFBRTtBQURrRSxHQUEvRCxDQUFMLENBR0xDLElBSEssQ0FHQSxVQUFDQyxRQUFELEVBQWM7QUFDbkIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDQSxHQUxLLFdBTUMsVUFBQ0MsR0FBRDtBQUFBLFdBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQVQ7QUFBQSxHQU5ELENBQVA7QUFPQSxDQVJNO0FBVUEsSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ1osU0FBRCxFQUFZQyxPQUFaLEVBQXdCO0FBQ2xELFNBQU9DLHVEQUFLLFdBQUlDLDJDQUFKLHVCQUFvQkgsU0FBcEIsY0FBaUNDLE9BQWpDLEdBQTRDO0FBQ3ZERyxVQUFNLEVBQUU7QUFEK0MsR0FBNUMsQ0FBTCxDQUdMQyxJQUhLLENBR0EsVUFBQ0MsUUFBRCxFQUFjO0FBQ25CLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0EsR0FMSyxXQU1DLFVBQUNDLEdBQUQ7QUFBQSxXQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFUO0FBQUEsR0FORCxDQUFQO0FBT0EsQ0FSTSxDLENBVVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rhcmlmcy4wNGYzZjUxZjQ2NmU3NDZlYzAzMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENhbGVuZGFyQnlJZCA9IChjYWxlbmRhcklkLCBkYXRlRGVidXQsIGRhdGVGaW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9jYWxlbmRhci8ke2NhbGVuZGFySWR9LyR7ZGF0ZURlYnV0fS8ke2RhdGVGaW59YCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0RGVqYUxvdWUgPSAoY2FsZW5kYXJJZCwgZGF0ZURlYnV0LCBkYXRlRmluKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vY2FsZW5kYXIvbG91ZS8ke2NhbGVuZGFySWR9LyR7ZGF0ZURlYnV0fS8ke2RhdGVGaW59YCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFZhY2FuY2VzID0gKGRhdGVEZWJ1dCwgZGF0ZUZpbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L2NhbGVuZGFyLyR7ZGF0ZURlYnV0fS8ke2RhdGVGaW59YCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdldENsaWVudEJ5SWQgPSAoaWQsIHRva2VuKSA9PiB7XHJcbi8vIFx0cmV0dXJuIGZldGNoKGAke0FQSX0vY2FsZW5kYXIvJHtpZH1gLCB7XHJcbi8vIFx0XHRtZXRob2Q6ICdHRVQnLFxyXG4vLyBcdFx0aGVhZGVyczoge1xyXG4vLyBcdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuLy8gXHRcdH0sXHJcbi8vIFx0fSlcclxuLy8gXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4vLyBcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4vLyBcdFx0fSlcclxuLy8gXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuLy8gfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==