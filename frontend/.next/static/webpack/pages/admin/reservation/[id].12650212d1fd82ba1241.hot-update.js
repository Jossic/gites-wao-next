webpackHotUpdate_N_E("pages/admin/reservation/[id]",{

/***/ "./actions/reservationActions.js":
/*!***************************************!*\
  !*** ./actions/reservationActions.js ***!
  \***************************************/
/*! exports provided: createReservation, createContract, listAllReservations, countNouvelleReservation, listeOneReservation, removeReservation, updateReservation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReservation", function() { return createReservation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContract", function() { return createContract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listAllReservations", function() { return listAllReservations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countNouvelleReservation", function() { return countNouvelleReservation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listeOneReservation", function() { return listeOneReservation; });
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
var createContract = function createContract(reservation, client, token) {
  console.log('dans action createContract', reservation);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/reservation/contract/:reservation"), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: JSON.stringify({
      reservation: reservation,
      client: client
    })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9yZXNlcnZhdGlvbkFjdGlvbnMuanMiXSwibmFtZXMiOlsiY3JlYXRlUmVzZXJ2YXRpb24iLCJyZXNlcnZhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIkFQSSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJlcnIiLCJjcmVhdGVDb250cmFjdCIsImNsaWVudCIsInRva2VuIiwiQXV0aG9yaXphdGlvbiIsImxpc3RBbGxSZXNlcnZhdGlvbnMiLCJjb3VudE5vdXZlbGxlUmVzZXJ2YXRpb24iLCJsaXN0ZU9uZVJlc2VydmF0aW9uIiwiaWQiLCJyZW1vdmVSZXNlcnZhdGlvbiIsInVwZGF0ZVJlc2VydmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLFdBQUQsRUFBaUI7QUFDakRDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJGLFdBQTNCO0FBQ0EsU0FBT0csdURBQUssV0FBSUMsMkNBQUosbUJBQXVCO0FBQ2xDQyxVQUFNLEVBQUUsTUFEMEI7QUFFbENDLFdBQU8sRUFBRTtBQUNSLHNCQUFnQjtBQURSLEtBRnlCO0FBS2xDQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlVCxXQUFmO0FBTDRCLEdBQXZCLENBQUwsQ0FPTFUsSUFQSyxDQU9BLFVBQUNDLFFBQUQsRUFBYztBQUNuQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNBLEdBVEssV0FVQyxVQUFDQyxHQUFEO0FBQUEsV0FBU1osT0FBTyxDQUFDQyxHQUFSLENBQVlXLEdBQVosQ0FBVDtBQUFBLEdBVkQsQ0FBUDtBQVdBLENBYk07QUFj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QVIsQ0FBWVcsR0FBWixDQUFUO0FBQUEsR0FURCxDQUFQO0FBVUEsQ0FYTTtBQWFBLElBQU1VLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ3ZCLFdBQUQsRUFBY3FCLEVBQWQsRUFBa0JMLEtBQWxCLEVBQTRCO0FBQzVELFNBQU9iLHVEQUFLLFdBQUlDLDJDQUFKLDBCQUF1QmlCLEVBQXZCLEdBQTZCO0FBQ3hDaEIsVUFBTSxFQUFFLEtBRGdDO0FBRXhDQyxXQUFPLEVBQUU7QUFDUixzQkFBZ0Isa0JBRFI7QUFFUlcsbUJBQWEsbUJBQVlELEtBQVo7QUFGTCxLQUYrQjtBQU14Q1QsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVQsV0FBZjtBQU5rQyxHQUE3QixDQUFMLENBUUxVLElBUkssQ0FRQSxVQUFDQyxRQUFELEVBQWM7QUFDbkIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDQSxHQVZLLFdBV0MsVUFBQ0MsR0FBRDtBQUFBLFdBQVNaLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVyxHQUFaLENBQVQ7QUFBQSxHQVhELENBQVA7QUFZQSxDQWJNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL3Jlc2VydmF0aW9uL1tpZF0uMTI2NTAyMTJkMWZkODJiYTEyNDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVSZXNlcnZhdGlvbiA9IChyZXNlcnZhdGlvbikgPT4ge1xyXG5cdGNvbnNvbGUubG9nKCdkYW5zIGFjdGlvbicsIHJlc2VydmF0aW9uKTtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXNlcnZhdGlvbmAsIHtcclxuXHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0fSxcclxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlc2VydmF0aW9uKSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5leHBvcnQgY29uc3QgY3JlYXRlQ29udHJhY3QgPSAocmVzZXJ2YXRpb24sIGNsaWVudCwgdG9rZW4pID0+IHtcclxuXHRjb25zb2xlLmxvZygnZGFucyBhY3Rpb24gY3JlYXRlQ29udHJhY3QnLCByZXNlcnZhdGlvbik7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vcmVzZXJ2YXRpb24vY29udHJhY3QvOnJlc2VydmF0aW9uYCwge1xyXG5cdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcmVzZXJ2YXRpb24sIGNsaWVudCB9KSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RBbGxSZXNlcnZhdGlvbnMgPSAodG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXNlcnZhdGlvbmAsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvdW50Tm91dmVsbGVSZXNlcnZhdGlvbiA9ICgpID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXNlcnZhdGlvbi9jb3VudGAsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0ZU9uZVJlc2VydmF0aW9uID0gKGlkLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3Jlc2VydmF0aW9uLyR7aWR9YCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlUmVzZXJ2YXRpb24gPSAoaWQsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vcmVzZXJ2YXRpb24vJHtpZH1gLCB7XHJcblx0XHRtZXRob2Q6ICdERUxFVEUnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVSZXNlcnZhdGlvbiA9IChyZXNlcnZhdGlvbiwgaWQsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vcmVzZXJ2YXRpb24vJHtpZH1gLCB7XHJcblx0XHRtZXRob2Q6ICdQVVQnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShyZXNlcnZhdGlvbiksXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==