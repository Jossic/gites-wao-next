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
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/reservation/contract/:reservation"), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // Authorization: `Bearer ${token}`,

    },
    body: JSON.stringify(reservation)
  }).then(function (response) {
    return response.json();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9yZXNlcnZhdGlvbkFjdGlvbnMuanMiXSwibmFtZXMiOlsiY3JlYXRlUmVzZXJ2YXRpb24iLCJyZXNlcnZhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIkFQSSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJlcnIiLCJjcmVhdGVDb250cmFjdCIsImxpc3RBbGxSZXNlcnZhdGlvbnMiLCJ0b2tlbiIsIkF1dGhvcml6YXRpb24iLCJjb3VudE5vdXZlbGxlUmVzZXJ2YXRpb24iLCJsaXN0ZU9uZVJlc2VydmF0aW9uIiwiaWQiLCJhZmZpY2hlUmVzZXJ2YXRpb24iLCJyZW1vdmVSZXNlcnZhdGlvbiIsInVwZGF0ZVJlc2VydmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsV0FBRCxFQUFpQjtBQUNqREMsU0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQkYsV0FBM0I7QUFDQSxTQUFPRyx1REFBSyxXQUFJQywyQ0FBSixtQkFBdUI7QUFDbENDLFVBQU0sRUFBRSxNQUQwQjtBQUVsQ0MsV0FBTyxFQUFFO0FBQ1Isc0JBQWdCO0FBRFIsS0FGeUI7QUFLbENDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVULFdBQWY7QUFMNEIsR0FBdkIsQ0FBTCxDQU9MVSxJQVBLLENBT0EsVUFBQ0MsUUFBRCxFQUFjO0FBQ25CLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0EsR0FUSyxXQVVDLFVBQUNDLEdBQUQ7QUFBQSxXQUFTWixPQUFPLENBQUNDLEdBQVIsQ0FBWVcsR0FBWixDQUFUO0FBQUEsR0FWRCxD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QztBQUV4Q0MsV0FBTyxFQUFFO0FBQ1JXLG1CQUFhLG1CQUFZRCxLQUFaO0FBREw7QUFGK0IsR0FBN0IsQ0FBTCxDQU1MTixJQU5LLENBTUEsVUFBQ0MsUUFBRCxFQUFjO0FBQ25CLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0EsR0FSSyxXQVNDLFVBQUNDLEdBQUQ7QUFBQSxXQUFTWixPQUFPLENBQUNDLEdBQVIsQ0FBWVcsR0FBWixDQUFUO0FBQUEsR0FURCxDQUFQO0FBVUEsQ0FYTTtBQWFBLElBQU1VLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ3ZCLFdBQUQsRUFBY29CLEVBQWQsRUFBa0JKLEtBQWxCLEVBQTRCO0FBQzVELFNBQU9iLHVEQUFLLFdBQUlDLDJDQUFKLDBCQUF1QmdCLEVBQXZCLEdBQTZCO0FBQ3hDZixVQUFNLEVBQUUsS0FEZ0M7QUFFeENDLFdBQU8sRUFBRTtBQUNSLHNCQUFnQixrQkFEUjtBQUVSVyxtQkFBYSxtQkFBWUQsS0FBWjtBQUZMLEtBRitCO0FBTXhDVCxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlVCxXQUFmO0FBTmtDLEdBQTdCLENBQUwsQ0FRTFUsSUFSSyxDQVFBLFVBQUNDLFFBQUQsRUFBYztBQUNuQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNBLEdBVkssV0FXQyxVQUFDQyxHQUFEO0FBQUEsV0FBU1osT0FBTyxDQUFDQyxHQUFSLENBQVlXLEdBQVosQ0FBVDtBQUFBLEdBWEQsQ0FBUDtBQVlBLENBYk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vcmVzZXJ2YXRpb24vW2lkXS5lZGMwNjM0M2VhMGJlYTJkOWM3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlc2VydmF0aW9uID0gKHJlc2VydmF0aW9uKSA9PiB7XHJcblx0Y29uc29sZS5sb2coJ2RhbnMgYWN0aW9uJywgcmVzZXJ2YXRpb24pO1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3Jlc2VydmF0aW9uYCwge1xyXG5cdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHR9LFxyXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkocmVzZXJ2YXRpb24pLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBjcmVhdGVDb250cmFjdCA9IChyZXNlcnZhdGlvbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3Jlc2VydmF0aW9uL2NvbnRyYWN0LzpyZXNlcnZhdGlvbmAsIHtcclxuXHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHQvLyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShyZXNlcnZhdGlvbiksXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0QWxsUmVzZXJ2YXRpb25zID0gKHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vcmVzZXJ2YXRpb25gLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb3VudE5vdXZlbGxlUmVzZXJ2YXRpb24gPSAoKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vcmVzZXJ2YXRpb24vY291bnRgLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdGVPbmVSZXNlcnZhdGlvbiA9IChpZCwgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXNlcnZhdGlvbi8ke2lkfWAsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFmZmljaGVSZXNlcnZhdGlvbiA9IChpZCkgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3Jlc2VydmF0aW9uLyR7aWR9L2NvbnRyYWN0YCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVJlc2VydmF0aW9uID0gKGlkLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3Jlc2VydmF0aW9uLyR7aWR9YCwge1xyXG5cdFx0bWV0aG9kOiAnREVMRVRFJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlUmVzZXJ2YXRpb24gPSAocmVzZXJ2YXRpb24sIGlkLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3Jlc2VydmF0aW9uLyR7aWR9YCwge1xyXG5cdFx0bWV0aG9kOiAnUFVUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkocmVzZXJ2YXRpb24pLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=