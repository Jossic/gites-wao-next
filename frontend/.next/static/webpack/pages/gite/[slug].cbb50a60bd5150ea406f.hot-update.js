webpackHotUpdate_N_E("pages/gite/[slug]",{

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
var saveImageData = function saveImageData(photos, nom, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_4__["API"], "/upload-images/").concat(nom), {
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
      Accept: 'multipart/form-data',
      Authorization: "Bearer ".concat(token)
    },
    body: gite
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
    body: gite
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9naXRlQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJsaXN0R2l0ZURldGFpbHMiLCJzbHVnIiwiYXhpb3MiLCJnZXQiLCJBUEkiLCJkYXRhIiwiY29uc29sZSIsImVycm9yIiwibGlzdGVEZXNHaXRlcyIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImVyciIsImxvZyIsImxpc3RlRGVzSW1hZ2VzIiwidG9rZW4iLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInNhdmVJbWFnZURhdGEiLCJwaG90b3MiLCJub20iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImxpc3RHaXRlc05vbXMiLCJjcmVhdGVHaXRlIiwiZ2l0ZSIsIkFjY2VwdCIsImRlbGV0ZUdpdGUiLCJ1cGRhdGVHaXRlIiwiY3JlYXRlUVIiLCJxciIsImxpc3RlT25lUVIiLCJpZCIsImxpc3RlRGVzUVIiLCJyZW1vdmVRUiIsInVwZGF0ZVFSIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBa0JPLElBQU1BLGVBQWU7QUFBQSw4TEFBRyxpQkFBT0MsSUFBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVOQyw0Q0FBSyxDQUFDQyxHQUFOLFdBQWFDLDJDQUFiLG1CQUF5QkgsSUFBekIsRUFGTTs7QUFBQTtBQUFBO0FBRXJCSSxnQkFGcUIsb0JBRXJCQSxJQUZxQjtBQUFBLDZDQUl0QkEsSUFKc0I7O0FBQUE7QUFBQTtBQUFBO0FBTTdCQyxtQkFBTyxDQUFDQyxLQUFSOztBQU42QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFmUCxlQUFlO0FBQUE7QUFBQTtBQUFBLEdBQXJCO0FBVUEsSUFBTVEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQ2xDLFNBQU9DLHVE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QUFMLENBQWVRLEVBQWY7QUFOeUIsR0FBcEIsQ0FBTCxDQVFMdEIsSUFSSyxDQVFBLFVBQUNDLFFBQUQsRUFBYztBQUNuQjtBQUNBLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0EsR0FYSyxXQVlDLFVBQUNDLEdBQUQ7QUFBQSxXQUFTUixPQUFPLENBQUNTLEdBQVIsQ0FBWUQsR0FBWixDQUFUO0FBQUEsR0FaRCxDQUFQO0FBYUEsQ0FkTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9naXRlL1tzbHVnXS5jYmI1MGE2MGJkNTE1MGVhNDA2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQge1xyXG5cdFFSX0xJU1RfUkVRVUVTVCxcclxuXHRRUl9MSVNUX1NVQ0NFU1MsXHJcblx0UVJfTElTVF9GQUlMLFxyXG5cdC8vIFFSX0RFVEFJTFNfUkVRVUVTVCxcclxuXHQvLyBRUl9ERVRBSUxTX1NVQ0NFU1MsXHJcblx0Ly8gUVJfREVUQUlMU19GQUlMLFxyXG5cdFFSX0RFTEVURV9SRVFVRVNULFxyXG5cdFFSX0RFTEVURV9TVUNDRVNTLFxyXG5cdFFSX0RFTEVURV9GQUlMLFxyXG5cdFFSX0NSRUFURV9SRVFVRVNULFxyXG5cdFFSX0NSRUFURV9TVUNDRVNTLFxyXG5cdFFSX0NSRUFURV9GQUlMLFxyXG5cdFFSX1VQREFURV9SRVFVRVNULFxyXG5cdFFSX1VQREFURV9TVUNDRVNTLFxyXG5cdFFSX1VQREFURV9GQUlMLFxyXG59IGZyb20gJy4uL2NvbnN0YW50cy9naXRlQ29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0R2l0ZURldGFpbHMgPSBhc3luYyAoc2x1ZykgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgJHtBUEl9L2dpdGUvJHtzbHVnfWApO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRyZXR1cm4gZGF0YTtcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RlRGVzR2l0ZXMgPSAoKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vZ2l0ZXNgLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdGVEZXNJbWFnZXMgPSAodG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9waG90b3NgLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzYXZlSW1hZ2VEYXRhID0gKHBob3Rvcywgbm9tLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3VwbG9hZC1pbWFnZXMvJHtub219YCwge1xyXG5cdFx0bWV0aG9kOiAnUFVUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkocGhvdG9zKSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdC8vIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdEdpdGVzTm9tcyA9ICgpID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9naXRlcy9ub21zYCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG5cclxuXHQvLyB0cnkge1xyXG5cdC8vIFx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJfS9naXRlYCk7XHJcblx0Ly8gXHRyZXR1cm4gZGF0YTtcclxuXHQvLyB9IGNhdGNoIChlcnJvcikge1xyXG5cdC8vIFx0Y29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0Ly8gfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUdpdGUgPSAoZ2l0ZSwgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9naXRlYCwge1xyXG5cdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEFjY2VwdDogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0XHRib2R5OiBnaXRlLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0Ly8gaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVHaXRlID0gKHNsdWcsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vZ2l0ZS8ke3NsdWd9YCwge1xyXG5cdFx0bWV0aG9kOiAnREVMRVRFJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdC8vIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlR2l0ZSA9IChnaXRlLCBzbHVnLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L2dpdGUvJHtzbHVnfWAsIHtcclxuXHRcdG1ldGhvZDogJ1BVVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHRcdGJvZHk6IGdpdGUsXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHQvLyBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVFSID0gKHFyLCB0b2tlbikgPT4ge1xyXG5cdGNvbnNvbGUubG9nKCdkYW4gYWN0aW9uJywgcXIpO1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3FyYCwge1xyXG5cdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShxciksXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHQvLyBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGNyZWF0ZVFSID0gKHRva2VuKSA9PiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbi8vIFx0dHJ5IHtcclxuLy8gXHRcdGRpc3BhdGNoKHtcclxuLy8gXHRcdFx0dHlwZTogUVJfQ1JFQVRFX1JFUVVFU1QsXHJcbi8vIFx0XHR9KTtcclxuXHJcbi8vIFx0XHRjb25zdCB7XHJcbi8vIFx0XHRcdHVzZXJUb2tlbjogeyB1c2VySW5mbyB9LFxyXG4vLyBcdFx0fSA9IGdldFN0YXRlKCk7XHJcblxyXG4vLyBcdFx0Y29uc3QgY29uZmlnID0ge1xyXG4vLyBcdFx0XHRoZWFkZXJzOiB7XHJcbi8vIFx0XHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3VzZXJJbmZvLnRva2VufWAsXHJcbi8vIFx0XHRcdH0sXHJcbi8vIFx0XHR9O1xyXG5cclxuLy8gXHRcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChgJHtBUEl9L3FyYCwge30sIGNvbmZpZyk7XHJcblxyXG4vLyBcdFx0ZGlzcGF0Y2goe1xyXG4vLyBcdFx0XHR0eXBlOiBRUl9DUkVBVEVfU1VDQ0VTUyxcclxuLy8gXHRcdFx0cGF5bG9hZDogZGF0YSxcclxuLy8gXHRcdH0pO1xyXG4vLyBcdH0gY2F0Y2ggKGUpIHtcclxuLy8gXHRcdGRpc3BhdGNoKHtcclxuLy8gXHRcdFx0dHlwZTogUVJfQ1JFQVRFX0ZBSUwsXHJcbi8vIFx0XHRcdHBheWxvYWQ6XHJcbi8vIFx0XHRcdFx0ZS5yZXNwb25zZSAmJiBlLnJlc3BvbnNlLmRhdGEubWVzc2FnZVxyXG4vLyBcdFx0XHRcdFx0PyBlLnJlc3BvbnNlLmRhdGEubWVzc2FnZVxyXG4vLyBcdFx0XHRcdFx0OiBlLm1lc3NhZ2UsXHJcbi8vIFx0XHR9KTtcclxuLy8gXHR9XHJcbi8vIH07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdGVPbmVRUiA9IChpZCwgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9xci8ke2lkfWAsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGxpc3RlRGVzUVIgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuLy8gXHR0cnkge1xyXG4vLyBcdFx0ZGlzcGF0Y2goeyB0eXBlOiBRUl9MSVNUX1JFUVVFU1QgfSk7XHJcblxyXG4vLyBcdFx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJfS9xcmApO1xyXG5cclxuLy8gXHRcdGRpc3BhdGNoKHtcclxuLy8gXHRcdFx0dHlwZTogUVJfTElTVF9TVUNDRVNTLFxyXG4vLyBcdFx0XHRwYXlsb2FkOiBkYXRhLFxyXG4vLyBcdFx0fSk7XHJcbi8vIFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gXHRcdGRpc3BhdGNoKHtcclxuLy8gXHRcdFx0dHlwZTogUVJfTElTVF9GQUlMLFxyXG4vLyBcdFx0XHRwYXlsb2FkOlxyXG4vLyBcdFx0XHRcdGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZVxyXG4vLyBcdFx0XHRcdFx0PyBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2VcclxuLy8gXHRcdFx0XHRcdDogZXJyb3IubWVzc2FnZSxcclxuLy8gXHRcdH0pO1xyXG4vLyBcdH1cclxuLy8gfTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0ZURlc1FSID0gKCkgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3FyYCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVFSID0gKGlkLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3FyLyR7aWR9YCwge1xyXG5cdFx0bWV0aG9kOiAnREVMRVRFJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVFSID0gKHFyLCBpZCwgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9xci8ke2lkfWAsIHtcclxuXHRcdG1ldGhvZDogJ1BVVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHFyKSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdC8vIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=