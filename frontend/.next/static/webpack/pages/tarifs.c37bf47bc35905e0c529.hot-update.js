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
    return response;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9jYWxlbmRhckFjdGlvbnMuanMiXSwibmFtZXMiOlsiZ2V0Q2FsZW5kYXJCeUlkIiwidG9rZW4iLCJjYWxlbmRhcklkIiwiZGF0ZURlYnV0IiwiZGF0ZUZpbiIsImZldGNoIiwiQVBJIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImdldFZhY2FuY2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFRQyxVQUFSLEVBQW9CQyxTQUFwQixFQUErQkMsT0FBL0IsRUFBMkM7QUFDekUsU0FBT0MsdURBQUssV0FBSUMsMkNBQUosdUJBQW9CSixVQUFwQixjQUFrQ0MsU0FBbEMsY0FBK0NDLE9BQS9DLEdBQTBEO0FBQ3JFRyxVQUFNLEVBQUUsS0FENkQ7QUFFckVDLFdBQU8sRUFBRTtBQUNSQyxtQkFBYSxtQkFBWVIsS0FBWjtBQURMO0FBRjRELEdBQTFELENBQUwsQ0FNTFMsSUFOSyxDQU1BLFVBQUNDLFFBQUQsRUFBYztBQUNuQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNBLEdBUkssV0FTQyxVQUFDQyxHQUFEO0FBQUEsV0FBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FBVDtBQUFBLEdBVEQsQ0FBUDtBQVVBLENBWE07QUFhQSxJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDZixLQUFELEVBQVFFLFNBQVIsRUFBbUJDLE9BQW5CLEVBQStCO0FBQ3pELFNBQU9DLHVEQUFLLFdBQUlDLDJDQUFKLHVCQUFvQkgsU0FBcEIsY0FBaUNDLE9BQWpDLEdBQTRDO0FBQ3ZERyxVQUFNLEVBQUUsS0FEK0M7QUFFdkRDLFdBQU8sRUFBRTtBQUNSQyxtQkFBYSxtQkFBWVIsS0FBWjtBQURMO0FBRjhDLEdBQTVDLENBQUwsQ0FNTFMsSUFOSyxDQU1BLFVBQUNDLFFBQUQsRUFBYztBQUNuQkcsV0FBTyxDQUFDQyxHQUFSLENBQVksMkJBQVosRUFBeUNKLFFBQXpDO0FBQ0EsV0FBT0EsUUFBUDtBQUNBLEdBVEssV0FVQyxVQUFDRSxHQUFEO0FBQUEsV0FBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FBVDtBQUFBLEdBVkQsQ0FBUDtBQVdBLENBWk0sQyxDQWNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90YXJpZnMuYzM3YmY0N2JjMzU5MDVlMGM1MjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDYWxlbmRhckJ5SWQgPSAodG9rZW4sIGNhbGVuZGFySWQsIGRhdGVEZWJ1dCwgZGF0ZUZpbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L2NhbGVuZGFyLyR7Y2FsZW5kYXJJZH0vJHtkYXRlRGVidXR9LyR7ZGF0ZUZpbn1gLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRWYWNhbmNlcyA9ICh0b2tlbiwgZGF0ZURlYnV0LCBkYXRlRmluKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vY2FsZW5kYXIvJHtkYXRlRGVidXR9LyR7ZGF0ZUZpbn1gLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygncmVwb25zZSBkYW5zIGFjdGlvbiB2YXV0ICcsIHJlc3BvbnNlKTtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRDbGllbnRCeUlkID0gKGlkLCB0b2tlbikgPT4ge1xyXG4vLyBcdHJldHVybiBmZXRjaChgJHtBUEl9L2NhbGVuZGFyLyR7aWR9YCwge1xyXG4vLyBcdFx0bWV0aG9kOiAnR0VUJyxcclxuLy8gXHRcdGhlYWRlcnM6IHtcclxuLy8gXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbi8vIFx0XHR9LFxyXG4vLyBcdH0pXHJcbi8vIFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuLy8gXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuLy8gXHRcdH0pXHJcbi8vIFx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbi8vIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=