webpackHotUpdate_N_E("pages/admin/crud/divers/review/[id]",{

/***/ "./actions/reviewActions.js":
/*!**********************************!*\
  !*** ./actions/reviewActions.js ***!
  \**********************************/
/*! exports provided: createReview, listeOneReview, listReviews, removeReview, updateReview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReview", function() { return createReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listeOneReview", function() { return listeOneReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listReviews", function() { return listReviews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeReview", function() { return removeReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateReview", function() { return updateReview; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var createReview = function createReview(review, token) {
  console.log('dan action', review);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/review"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: JSON.stringify(review)
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var listeOneReview = function listeOneReview(id, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/review/").concat(id), {
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
var listReviews = function listReviews() {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/review"), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var removeReview = function removeReview(id, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/review/").concat(id), {
    method: 'DELETE',
    headers: {
      // Accept: 'application/json',
      // 'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    }
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var updateReview = function updateReview(review, id, token) {
  // return fetch(`${API}/review/${id}`, {
  // 	method: 'PUT',
  // 	headers: {
  // 		'Content-Type': 'application/json',
  // 		Authorization: `Bearer ${token}`,
  // 	},
  // 	body: JSON.stringify(review),
  // })
  // 	.then((response) => {
  // 		return response.json();
  // 	})
  // 	.catch((err) => console.log(err));
  var config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    }
  };
  var res = axios__WEBPACK_IMPORTED_MODULE_2___default.a.put("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/review/").concat(id), review, config);
  return res.json();
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9yZXZpZXdBY3Rpb25zLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVJldmlldyIsInJldmlldyIsInRva2VuIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwiQVBJIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJlcnIiLCJsaXN0ZU9uZVJldmlldyIsImlkIiwibGlzdFJldmlld3MiLCJyZW1vdmVSZXZpZXciLCJ1cGRhdGVSZXZpZXciLCJjb25maWciLCJyZXMiLCJheGlvcyIsInB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxNQUFELEVBQVNDLEtBQVQsRUFBbUI7QUFDOUNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJILE1BQTFCO0FBQ0EsU0FBT0ksdURBQUssV0FBSUMsMkNBQUosY0FBa0I7QUFDN0JDLFVBQU0sRUFBRSxNQURxQjtBQUU3QkMsV0FBTyxFQUFFO0FBQ1JDLFlBQU0sRUFBRSxrQkFEQTtBQUVSLHNCQUFnQixrQkFGUjtBQUdSQyxtQkFBYSxtQkFBWVIsS0FBWjtBQUhMLEtBRm9CO0FBTzdCUyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlWixNQUFmO0FBUHVCLEdBQWxCLENBQUwsQ0FTTGEsSUFUSyxDQVNBLFVBQUNDLFFBQUQsRUFBYztBQUNuQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNBLEdBWEssV0FZQyxVQUFDQyxHQUFEO0FBQUEsV0FBU2QsT0FBTyxDQUFDQyxHQUFSLENBQVlhLEdBQVosQ0FBVDtBQUFBLEdBWkQsQ0FBUDtBQWFBLENBZk07QUFpQkEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxFQUFELEVBQUtqQixLQUFMLEVBQWU7QUFDNUMsU0FBT0csdURBQUssV0FBSUMsMkNBQUoscUJBQWtCYSxFQUFsQixHQUF3QjtBQUNuQ1osVUFBTSxFQUFFLEtBRDJCO0FBRW5DQyxXQUFPLEVBQUU7QUFDUkUsbUJBQWEsbUJBQVlSLEtBQVo7QUFETDtBQUYwQixHQUF4QixDQUFMLENBTUxZLElBTkssQ0FNQSxVQUFDQyxRQUFELEVBQWM7QUFDbkIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDQSxHQVJLLFdBU0MsVUFBQ0MsR0FBRDtBQUFBLFdBQVNkLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYSxHQUFaLENBQVQ7QUFBQSxHQVRELENBQVA7QUFVQSxDQVhNO0FBYUEsSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUNoQyxTQUFPZix1REFBSyxXQUFJQywyQ0FBSixjQUFrQjtBQUM3QkMsVUFBTSxFQUFFO0FBRHFCLEdBQWxCLENBQUwsQ0FHTE8sSUFISyxDQUdBLFVBQUNDLFFBQUQsRUFBYztBQUNuQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNBLEdBTEssV0FNQyxVQUFDQyxHQUFEO0FBQUEsV0FBU2QsT0FBTyxDQUFDQyxHQUFSLENBQVlhLEdBQVosQ0FBVDtBQUFBLEdBTkQsQ0FBUDtBQU9BLENBUk07QUFVQSxJQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDRixFQUFELEVBQUtqQixLQUFMLEVBQWU7QUFDMUMsU0FBT0csdURBQUssV0FBSUMsMkNBQUoscUJBQWtCYSxFQUFsQixHQUF3QjtBQUNuQ1osVUFBTSxFQUFFLFFBRDJCO0FBRW5DQyxXQUFPLEVBQUU7QUFDUjtBQUNBO0FBQ0FFLG1CQUFhLG1CQUFZUixLQUFaO0FBSEw7QUFGMEIsR0FBeEIsQ0FBTCxDQVFMWSxJQVJLLENBUUEsVUFBQ0MsUUFBRCxFQUFjO0FBQ25CLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0EsR0FWSyxXQVdDLFVBQUNDLEdBQUQ7QUFBQSxXQUFTZCxPQUFPLENBQUNDLEdBQVIsQ0FBWWEsR0FBWixDQUFUO0FBQUEsR0FYRCxDQUFQO0FBWUEsQ0FiTTtBQWVBLElBQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNyQixNQUFELEVBQVNrQixFQUFULEVBQWFqQixLQUFiLEVBQXVCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1xQixNQUFNLEdBQUc7QUFDZGYsV0FBTyxFQUFFO0FBQ1Isc0JBQWdCLGtCQURSO0FBRVJFLG1CQUFhLG1CQUFZUixLQUFaO0FBRkw7QUFESyxHQUFmO0FBT0EsTUFBTXNCLEdBQUcsR0FBR0MsNENBQUssQ0FBQ0MsR0FBTixXQUFhcEIsMkNBQWIscUJBQTJCYSxFQUEzQixHQUFpQ2xCLE1BQWpDLEVBQXlDc0IsTUFBekMsQ0FBWjtBQUNBLFNBQU9DLEdBQUcsQ0FBQ1IsSUFBSixFQUFQO0FBQ0EsQ0F0Qk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY3J1ZC9kaXZlcnMvcmV2aWV3L1tpZF0uYzk2NTg2NTY4OWE4MmEyODUwZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVSZXZpZXcgPSAocmV2aWV3LCB0b2tlbikgPT4ge1xyXG5cdGNvbnNvbGUubG9nKCdkYW4gYWN0aW9uJywgcmV2aWV3KTtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXZpZXdgLCB7XHJcblx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHJldmlldyksXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0ZU9uZVJldmlldyA9IChpZCwgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXZpZXcvJHtpZH1gLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0UmV2aWV3cyA9ICgpID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXZpZXdgLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlUmV2aWV3ID0gKGlkLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3Jldmlldy8ke2lkfWAsIHtcclxuXHRcdG1ldGhvZDogJ0RFTEVURScsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdC8vIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHQvLyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVSZXZpZXcgPSAocmV2aWV3LCBpZCwgdG9rZW4pID0+IHtcclxuXHQvLyByZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXZpZXcvJHtpZH1gLCB7XHJcblx0Ly8gXHRtZXRob2Q6ICdQVVQnLFxyXG5cdC8vIFx0aGVhZGVyczoge1xyXG5cdC8vIFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdC8vIFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHQvLyBcdH0sXHJcblx0Ly8gXHRib2R5OiBKU09OLnN0cmluZ2lmeShyZXZpZXcpLFxyXG5cdC8vIH0pXHJcblx0Ly8gXHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHQvLyBcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHQvLyBcdH0pXHJcblx0Ly8gXHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcblx0Y29uc3QgY29uZmlnID0ge1xyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0fTtcclxuXHJcblx0Y29uc3QgcmVzID0gYXhpb3MucHV0KGAke0FQSX0vcmV2aWV3LyR7aWR9YCwgcmV2aWV3LCBjb25maWcpO1xyXG5cdHJldHVybiByZXMuanNvbigpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9