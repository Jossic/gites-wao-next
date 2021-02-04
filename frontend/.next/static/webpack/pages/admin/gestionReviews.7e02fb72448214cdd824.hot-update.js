webpackHotUpdate_N_E("pages/admin/gestionReviews",{

/***/ "./actions/reviewActions.js":
/*!**********************************!*\
  !*** ./actions/reviewActions.js ***!
  \**********************************/
/*! exports provided: createReview, listeOneReview, listReviews, listReviewsBySlug, removeReview, updateReview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReview", function() { return createReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listeOneReview", function() { return listeOneReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listReviews", function() { return listReviews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listReviewsBySlug", function() { return listReviewsBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeReview", function() { return removeReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateReview", function() { return updateReview; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);





var createReview = function createReview(review, token) {
  console.log('dan action', review);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/review"), {
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
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/review/").concat(id), {
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
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/review"), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var listReviewsBySlug = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(nom) {
    var _yield$axios$get, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/photos/").concat(nom));

          case 3:
            _yield$axios$get = _context.sent;
            data = _yield$axios$get.data;
            return _context.abrupt("return", data);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function listReviewsBySlug(_x) {
    return _ref.apply(this, arguments);
  };
}();
var removeReview = function removeReview(id, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/review/").concat(id), {
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
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/review/").concat(id), {
    method: 'PUT',
    headers: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9yZXZpZXdBY3Rpb25zLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVJldmlldyIsInJldmlldyIsInRva2VuIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwiQVBJIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJlcnIiLCJsaXN0ZU9uZVJldmlldyIsImlkIiwibGlzdFJldmlld3MiLCJsaXN0UmV2aWV3c0J5U2x1ZyIsIm5vbSIsImF4aW9zIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwicmVtb3ZlUmV2aWV3IiwidXBkYXRlUmV2aWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxNQUFELEVBQVNDLEtBQVQsRUFBbUI7QUFDOUNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJILE1BQTFCO0FBQ0EsU0FBT0ksdURBQUssV0FBSUMsMkNBQUosY0FBa0I7QUFDN0JDLFVBQU0sRUFBRSxNQURxQjtBQUU3QkMsV0FBTyxFQUFFO0FBQ1JDLFlBQU0sRUFBRSxrQkFEQTtBQUVSLHNCQUFnQixrQkFGUjtBQUdSQyxtQkFBYSxtQkFBWVIsS0FBWjtBQUhMLEtBRm9CO0FBTzdCUyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlWixNQUFmO0FBUHVCLEdBQWxCLENBQUwsQ0FTTGEsSUFUSyxDQVNBLFVBQUNDLFFBQUQsRUFBYztBQUNuQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNBLEdBWEssV0FZQyxVQUFDQyxHQUFEO0FBQUEsV0FBU2QsT0FBTyxDQUFDQyxHQUFSLENBQVlhLEdBQVosQ0FBVDtBQUFBLEdBWkQsQ0FBUDtBQWFBLENBZk07QUFpQkEs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YjcyNDQ4MjE0Y2RkODI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlUmV2aWV3ID0gKHJldmlldywgdG9rZW4pID0+IHtcclxuXHRjb25zb2xlLmxvZygnZGFuIGFjdGlvbicsIHJldmlldyk7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vcmV2aWV3YCwge1xyXG5cdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShyZXZpZXcpLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdGVPbmVSZXZpZXcgPSAoaWQsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vcmV2aWV3LyR7aWR9YCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdFJldmlld3MgPSAoKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vcmV2aWV3YCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RSZXZpZXdzQnlTbHVnID0gYXN5bmMgKG5vbSkgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgJHtBUEl9L3Bob3Rvcy8ke25vbX1gKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVSZXZpZXcgPSAoaWQsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vcmV2aWV3LyR7aWR9YCwge1xyXG5cdFx0bWV0aG9kOiAnREVMRVRFJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0Ly8gQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdC8vICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVJldmlldyA9IChyZXZpZXcsIGlkLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3Jldmlldy8ke2lkfWAsIHtcclxuXHRcdG1ldGhvZDogJ1BVVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHJldmlldyksXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==