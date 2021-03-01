webpackHotUpdate_N_E("pages/admin/reservation/[id]",{

/***/ "./actions/reservationActions.js":
/*!***************************************!*\
  !*** ./actions/reservationActions.js ***!
  \***************************************/
/*! exports provided: createReservation, createContract, listAllReservations, countNouvelleReservation, listeOneReservation, afficheReservation, removeReservation, updateReservation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReservation", function() { return createReservation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContract", function() { return createContract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listAllReservations", function() { return listAllReservations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countNouvelleReservation", function() { return countNouvelleReservation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listeOneReservation", function() { return listeOneReservation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afficheReservation", function() { return afficheReservation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeReservation", function() { return removeReservation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateReservation", function() { return updateReservation; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");


var createReservation = function createReservation(reservation) {
  console.log('dans action', reservation);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/reservation"), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reservation)
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var createContract = function createContract(reservation) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/reservation/contract/").concat(reservation), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json' // Authorization: `Bearer ${token}`,

    }
  }).then(function (response) {
    console.log('response action', response);
    var file = new Blob([response.data], {
      type: 'application/pdf'
    }); //Build a URL from the file

    var fileURL = URL.createObjectURL(file); //Open the URL on new Window

    window.open(fileURL);
  })["catch"](function (err) {
    return console.log(err);
  });
};
var listAllReservations = function listAllReservations(token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/reservation"), {
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
var countNouvelleReservation = function countNouvelleReservation() {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/reservation/count"), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var listeOneReservation = function listeOneReservation(id, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/reservation/").concat(id), {
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
var afficheReservation = function afficheReservation(id) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/reservation/").concat(id, "/contract"), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var removeReservation = function removeReservation(id, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/reservation/").concat(id), {
    method: 'DELETE',
    headers: {
      Authorization: "Bearer ".concat(token)
    }
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var updateReservation = function updateReservation(reservation, id, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/reservation/").concat(id), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: JSON.stringify(reservation)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9yZXNlcnZhdGlvbkFjdGlvbnMuanMiXSwibmFtZXMiOlsiY3JlYXRlUmVzZXJ2YXRpb24iLCJyZXNlcnZhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIkFQSSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJlcnIiLCJjcmVhdGVDb250cmFjdCIsImZpbGUiLCJCbG9iIiwiZGF0YSIsInR5cGUiLCJmaWxlVVJMIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwid2luZG93Iiwib3BlbiIsImxpc3RBbGxSZXNlcnZhdGlvbnMiLCJ0b2tlbiIsIkF1dGhvcml6YXRpb24iLCJjb3VudE5vdXZlbGxlUmVzZXJ2YXRpb24iLCJsaXN0ZU9uZVJlc2VydmF0aW9uIiwiaWQiLCJhZmZpY2hlUmVzZXJ2YXRpb24iLCJyZW1vdmVSZXNlcnZhdGlvbiIsInVwZGF0ZVJlc2VydmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsV0FBRCxFQUFpQjtBQUNqREMsU0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQkYsV0FBM0I7QUFDQSxTQUFPRyx1REFBSyxXQUFJQywyQ0FBSixtQkFBdUI7QUFDbENDLFVBQU0sRUFBRSxNQUQwQjtBQUVsQ0MsV0FBTyxFQUFFO0FBQ1Isc0JBQWdCO0FBRFIsS0FGeUI7QUFLbENDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVULFdBQWY7QUFMNEIsR0FBdkIsQ0FBTCxDQU9MVSxJQVBLLENBT0EsVUFBQ0MsUUFBRCxFQUFjO0FBQ25CLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FB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QVNaLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVyxHQUFaLENBQVQ7QUFBQSxHQVhELENBQVA7QUFZQSxDQWJNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL3Jlc2VydmF0aW9uL1tpZF0uMDM0NDJiYmU5MGY3OWZkNWM5NjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVSZXNlcnZhdGlvbiA9IChyZXNlcnZhdGlvbikgPT4ge1xyXG5cdGNvbnNvbGUubG9nKCdkYW5zIGFjdGlvbicsIHJlc2VydmF0aW9uKTtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXNlcnZhdGlvbmAsIHtcclxuXHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0fSxcclxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlc2VydmF0aW9uKSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5leHBvcnQgY29uc3QgY3JlYXRlQ29udHJhY3QgPSAocmVzZXJ2YXRpb24pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXNlcnZhdGlvbi9jb250cmFjdC8ke3Jlc2VydmF0aW9ufWAsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdC8vIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZXNwb25zZSBhY3Rpb24nLCByZXNwb25zZSk7XHJcblx0XHRcdGNvbnN0IGZpbGUgPSBuZXcgQmxvYihbcmVzcG9uc2UuZGF0YV0sIHsgdHlwZTogJ2FwcGxpY2F0aW9uL3BkZicgfSk7XHJcblx0XHRcdC8vQnVpbGQgYSBVUkwgZnJvbSB0aGUgZmlsZVxyXG5cdFx0XHRjb25zdCBmaWxlVVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcclxuXHRcdFx0Ly9PcGVuIHRoZSBVUkwgb24gbmV3IFdpbmRvd1xyXG5cdFx0XHR3aW5kb3cub3BlbihmaWxlVVJMKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdEFsbFJlc2VydmF0aW9ucyA9ICh0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3Jlc2VydmF0aW9uYCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY291bnROb3V2ZWxsZVJlc2VydmF0aW9uID0gKCkgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3Jlc2VydmF0aW9uL2NvdW50YCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RlT25lUmVzZXJ2YXRpb24gPSAoaWQsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vcmVzZXJ2YXRpb24vJHtpZH1gLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZmZpY2hlUmVzZXJ2YXRpb24gPSAoaWQpID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXNlcnZhdGlvbi8ke2lkfS9jb250cmFjdGAsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVSZXNlcnZhdGlvbiA9IChpZCwgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXNlcnZhdGlvbi8ke2lkfWAsIHtcclxuXHRcdG1ldGhvZDogJ0RFTEVURScsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVJlc2VydmF0aW9uID0gKHJlc2VydmF0aW9uLCBpZCwgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXNlcnZhdGlvbi8ke2lkfWAsIHtcclxuXHRcdG1ldGhvZDogJ1BVVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlc2VydmF0aW9uKSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9