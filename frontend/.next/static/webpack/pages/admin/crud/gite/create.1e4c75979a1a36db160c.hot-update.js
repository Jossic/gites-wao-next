webpackHotUpdate_N_E("pages/admin/crud/gite/create",{

/***/ "./actions/giteActions.js":
/*!********************************!*\
  !*** ./actions/giteActions.js ***!
  \********************************/
/*! exports provided: listGiteDetails, listeDesGites, listeDesImages, saveImageData, listGitesNoms, createGite, deleteGite, updateGite, createQR, listeOneQR, listeDesQR, removeQR, updateQR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listGiteDetails", function() { return listGiteDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listeDesGites", function() { return listeDesGites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listeDesImages", function() { return listeDesImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveImageData", function() { return saveImageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listGitesNoms", function() { return listGitesNoms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGite", function() { return createGite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteGite", function() { return deleteGite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGite", function() { return updateGite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createQR", function() { return createQR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listeOneQR", function() { return listeOneQR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listeDesQR", function() { return listeDesQR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeQR", function() { return removeQR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateQR", function() { return updateQR; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _constants_giteConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/giteConstants */ "./constants/giteConstants.js");






var listGiteDetails = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(slug) {
    var _yield$axios$get, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_4__["API"], "/gite/").concat(slug));

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

  return function listGiteDetails(_x) {
    return _ref.apply(this, arguments);
  };
}();
var listeDesGites = function listeDesGites() {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_4__["API"], "/gites"), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var listeDesImages = function listeDesImages(token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_4__["API"], "/photos"), {
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
var saveImageData = function saveImageData(photos, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_4__["API"], "/upload-images"), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: JSON.stringify(photos)
  }).then(function (response) {
    // handleResponse(response);
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var listGitesNoms = function listGitesNoms() {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_4__["API"], "/gites/noms"), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  }); // try {
  // 	const { data } = await axios.get(`${API}/gite`);
  // 	return data;
  // } catch (error) {
  // 	console.error(error);
  // }
};
var createGite = function createGite(gite, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_4__["API"], "/gite"), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: JSON.stringify(gite)
  }).then(function (response) {
    // handleResponse(response);
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var deleteGite = function deleteGite(slug, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_4__["API"], "/gite/").concat(slug), {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    }
  }).then(function (response) {
    // handleResponse(response);
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var updateGite = function updateGite(gite, slug, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_4__["API"], "/gite/").concat(slug), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: JSON.stringify(gite)
  }).then(function (response) {
    // handleResponse(response);
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var createQR = function createQR(qr, token) {
  console.log('dan action', qr);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_4__["API"], "/qr"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: JSON.stringify(qr)
  }).then(function (response) {
    // handleResponse(response);
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
}; // export const createQR = (token) => async (dispatch, getState) => {
// 	try {
// 		dispatch({
// 			type: QR_CREATE_REQUEST,
// 		});
// 		const {
// 			userToken: { userInfo },
// 		} = getState();
// 		const config = {
// 			headers: {
// 				Authorization: `Bearer ${userInfo.token}`,
// 			},
// 		};
// 		const { data } = await axios.post(`${API}/qr`, {}, config);
// 		dispatch({
// 			type: QR_CREATE_SUCCESS,
// 			payload: data,
// 		});
// 	} catch (e) {
// 		dispatch({
// 			type: QR_CREATE_FAIL,
// 			payload:
// 				e.response && e.response.data.message
// 					? e.response.data.message
// 					: e.message,
// 		});
// 	}
// };

var listeOneQR = function listeOneQR(id, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_4__["API"], "/qr/").concat(id), {
    method: 'GET',
    headers: {
      Authorization: "Bearer ".concat(token)
    }
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
}; // export const listeDesQR = () => async (dispatch) => {
// 	try {
// 		dispatch({ type: QR_LIST_REQUEST });
// 		const { data } = await axios.get(`${API}/qr`);
// 		dispatch({
// 			type: QR_LIST_SUCCESS,
// 			payload: data,
// 		});
// 	} catch (error) {
// 		dispatch({
// 			type: QR_LIST_FAIL,
// 			payload:
// 				error.response && error.response.data.message
// 					? error.response.data.message
// 					: error.message,
// 		});
// 	}
// };

var listeDesQR = function listeDesQR() {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_4__["API"], "/qr"), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var removeQR = function removeQR(id, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_4__["API"], "/qr/").concat(id), {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    }
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var updateQR = function updateQR(qr, id, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_4__["API"], "/qr/").concat(id), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: JSON.stringify(qr)
  }).then(function (response) {
    // handleResponse(response);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9naXRlQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJsaXN0R2l0ZURldGFpbHMiLCJzbHVnIiwiYXhpb3MiLCJnZXQiLCJBUEkiLCJkYXRhIiwiY29uc29sZSIsImVycm9yIiwibGlzdGVEZXNHaXRlcyIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImVyciIsImxvZyIsImxpc3RlRGVzSW1hZ2VzIiwidG9rZW4iLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInNhdmVJbWFnZURhdGEiLCJwaG90b3MiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImxpc3RHaXRlc05vbXMiLCJjcmVhdGVHaXRlIiwiZ2l0ZSIsImRlbGV0ZUdpdGUiLCJBY2NlcHQiLCJ1cGRhdGVHaXRlIiwiY3JlYXRlUVIiLCJxciIsImxpc3RlT25lUVIiLCJpZCIsImxpc3RlRGVzUVIiLCJyZW1vdmVRUiIsInVwZGF0ZVFSIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBa0JPLElBQU1BLGVBQWU7QUFBQSw4TEFBRyxpQkFBT0MsSUFBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVOQyw0Q0FBSyxDQUFDQyxHQUFOLFdBQWFDLDJDQUFiLG1CQUF5QkgsSUFBekIsRUFGTTs7QUFBQTtBQUFBO0FBRXJCSSxnQkFGcUIsb0JBRXJCQSxJQUZxQjtBQUFBLDZDQUl0QkEsSUFKc0I7O0FBQUE7QUFBQTtBQUFBO0FBTTdCQyxtQkFBTyxDQUFDQyxLQUFSOztBQU42QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFmUCxlQUFlO0FBQUE7QUFBQTtBQUFBLEdBQXJCO0FBVUEsSUFBTVEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQ2xDLFNBQU9DLHVEQUFLLFdB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QUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVEsRUFBZjtBQU55QixHQUFwQixDQUFMLENBUUxyQixJQVJLLENBUUEsVUFBQ0MsUUFBRCxFQUFjO0FBQ25CO0FBQ0EsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDQSxHQVhLLFdBWUMsVUFBQ0MsR0FBRDtBQUFBLFdBQVNSLE9BQU8sQ0FBQ1MsR0FBUixDQUFZRCxHQUFaLENBQVQ7QUFBQSxHQVpELENBQVA7QUFhQSxDQWRNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2NydWQvZ2l0ZS9jcmVhdGUuMWU0Yzc1OTc5YTFhMzZkYjE2MGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHtcclxuXHRRUl9MSVNUX1JFUVVFU1QsXHJcblx0UVJfTElTVF9TVUNDRVNTLFxyXG5cdFFSX0xJU1RfRkFJTCxcclxuXHQvLyBRUl9ERVRBSUxTX1JFUVVFU1QsXHJcblx0Ly8gUVJfREVUQUlMU19TVUNDRVNTLFxyXG5cdC8vIFFSX0RFVEFJTFNfRkFJTCxcclxuXHRRUl9ERUxFVEVfUkVRVUVTVCxcclxuXHRRUl9ERUxFVEVfU1VDQ0VTUyxcclxuXHRRUl9ERUxFVEVfRkFJTCxcclxuXHRRUl9DUkVBVEVfUkVRVUVTVCxcclxuXHRRUl9DUkVBVEVfU1VDQ0VTUyxcclxuXHRRUl9DUkVBVEVfRkFJTCxcclxuXHRRUl9VUERBVEVfUkVRVUVTVCxcclxuXHRRUl9VUERBVEVfU1VDQ0VTUyxcclxuXHRRUl9VUERBVEVfRkFJTCxcclxufSBmcm9tICcuLi9jb25zdGFudHMvZ2l0ZUNvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdEdpdGVEZXRhaWxzID0gYXN5bmMgKHNsdWcpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJfS9naXRlLyR7c2x1Z31gKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0ZURlc0dpdGVzID0gKCkgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L2dpdGVzYCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RlRGVzSW1hZ2VzID0gKHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vcGhvdG9zYCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2F2ZUltYWdlRGF0YSA9IChwaG90b3MsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vdXBsb2FkLWltYWdlc2AsIHtcclxuXHRcdG1ldGhvZDogJ1BVVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHBob3RvcyksXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHQvLyBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RHaXRlc05vbXMgPSAoKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vZ2l0ZXMvbm9tc2AsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuXHJcblx0Ly8gdHJ5IHtcclxuXHQvLyBcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSX0vZ2l0ZWApO1xyXG5cdC8vIFx0cmV0dXJuIGRhdGE7XHJcblx0Ly8gfSBjYXRjaCAoZXJyb3IpIHtcclxuXHQvLyBcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdC8vIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVHaXRlID0gKGdpdGUsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vZ2l0ZWAsIHtcclxuXHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShnaXRlKSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdC8vIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlR2l0ZSA9IChzbHVnLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L2dpdGUvJHtzbHVnfWAsIHtcclxuXHRcdG1ldGhvZDogJ0RFTEVURScsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHQvLyBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUdpdGUgPSAoZ2l0ZSwgc2x1ZywgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9naXRlLyR7c2x1Z31gLCB7XHJcblx0XHRtZXRob2Q6ICdQVVQnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShnaXRlKSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdC8vIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlUVIgPSAocXIsIHRva2VuKSA9PiB7XHJcblx0Y29uc29sZS5sb2coJ2RhbiBhY3Rpb24nLCBxcik7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vcXJgLCB7XHJcblx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHFyKSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdC8vIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgY3JlYXRlUVIgPSAodG9rZW4pID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuLy8gXHR0cnkge1xyXG4vLyBcdFx0ZGlzcGF0Y2goe1xyXG4vLyBcdFx0XHR0eXBlOiBRUl9DUkVBVEVfUkVRVUVTVCxcclxuLy8gXHRcdH0pO1xyXG5cclxuLy8gXHRcdGNvbnN0IHtcclxuLy8gXHRcdFx0dXNlclRva2VuOiB7IHVzZXJJbmZvIH0sXHJcbi8vIFx0XHR9ID0gZ2V0U3RhdGUoKTtcclxuXHJcbi8vIFx0XHRjb25zdCBjb25maWcgPSB7XHJcbi8vIFx0XHRcdGhlYWRlcnM6IHtcclxuLy8gXHRcdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dXNlckluZm8udG9rZW59YCxcclxuLy8gXHRcdFx0fSxcclxuLy8gXHRcdH07XHJcblxyXG4vLyBcdFx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KGAke0FQSX0vcXJgLCB7fSwgY29uZmlnKTtcclxuXHJcbi8vIFx0XHRkaXNwYXRjaCh7XHJcbi8vIFx0XHRcdHR5cGU6IFFSX0NSRUFURV9TVUNDRVNTLFxyXG4vLyBcdFx0XHRwYXlsb2FkOiBkYXRhLFxyXG4vLyBcdFx0fSk7XHJcbi8vIFx0fSBjYXRjaCAoZSkge1xyXG4vLyBcdFx0ZGlzcGF0Y2goe1xyXG4vLyBcdFx0XHR0eXBlOiBRUl9DUkVBVEVfRkFJTCxcclxuLy8gXHRcdFx0cGF5bG9hZDpcclxuLy8gXHRcdFx0XHRlLnJlc3BvbnNlICYmIGUucmVzcG9uc2UuZGF0YS5tZXNzYWdlXHJcbi8vIFx0XHRcdFx0XHQ/IGUucmVzcG9uc2UuZGF0YS5tZXNzYWdlXHJcbi8vIFx0XHRcdFx0XHQ6IGUubWVzc2FnZSxcclxuLy8gXHRcdH0pO1xyXG4vLyBcdH1cclxuLy8gfTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0ZU9uZVFSID0gKGlkLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3FyLyR7aWR9YCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgbGlzdGVEZXNRUiA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4vLyBcdHRyeSB7XHJcbi8vIFx0XHRkaXNwYXRjaCh7IHR5cGU6IFFSX0xJU1RfUkVRVUVTVCB9KTtcclxuXHJcbi8vIFx0XHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgJHtBUEl9L3FyYCk7XHJcblxyXG4vLyBcdFx0ZGlzcGF0Y2goe1xyXG4vLyBcdFx0XHR0eXBlOiBRUl9MSVNUX1NVQ0NFU1MsXHJcbi8vIFx0XHRcdHBheWxvYWQ6IGRhdGEsXHJcbi8vIFx0XHR9KTtcclxuLy8gXHR9IGNhdGNoIChlcnJvcikge1xyXG4vLyBcdFx0ZGlzcGF0Y2goe1xyXG4vLyBcdFx0XHR0eXBlOiBRUl9MSVNUX0ZBSUwsXHJcbi8vIFx0XHRcdHBheWxvYWQ6XHJcbi8vIFx0XHRcdFx0ZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlXHJcbi8vIFx0XHRcdFx0XHQ/IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZVxyXG4vLyBcdFx0XHRcdFx0OiBlcnJvci5tZXNzYWdlLFxyXG4vLyBcdFx0fSk7XHJcbi8vIFx0fVxyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RlRGVzUVIgPSAoKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vcXJgLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlUVIgPSAoaWQsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vcXIvJHtpZH1gLCB7XHJcblx0XHRtZXRob2Q6ICdERUxFVEUnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlUVIgPSAocXIsIGlkLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3FyLyR7aWR9YCwge1xyXG5cdFx0bWV0aG9kOiAnUFVUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkocXIpLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0Ly8gaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==