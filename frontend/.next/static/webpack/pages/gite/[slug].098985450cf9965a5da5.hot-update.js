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
    body: JSON.stringify(qr)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9naXRlQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJsaXN0R2l0ZURldGFpbHMiLCJzbHVnIiwiYXhpb3MiLCJnZXQiLCJBUEkiLCJkYXRhIiwiY29uc29sZSIsImVycm9yIiwibGlzdGVEZXNHaXRlcyIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImVyciIsImxvZyIsImxpc3RlRGVzSW1hZ2VzIiwidG9rZW4iLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInNhdmVJbWFnZURhdGEiLCJwaG90b3MiLCJub20iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInFyIiwibGlzdEdpdGVzTm9tcyIsImNyZWF0ZUdpdGUiLCJnaXRlIiwiQWNjZXB0IiwiZGVsZXRlR2l0ZSIsInVwZGF0ZUdpdGUiLCJjcmVhdGVRUiIsImxpc3RlT25lUVIiLCJpZCIsImxpc3RlRGVzUVIiLCJyZW1vdmVRUiIsInVwZGF0ZVFSIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBa0JPLElBQU1BLGVBQWU7QUFBQSw4TEFBRyxpQkFBT0MsSUFBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVOQyw0Q0FBSyxDQUFDQyxHQUFOLFdBQWFDLDJDQUFiLG1CQUF5QkgsSUFBekIsRUFGTTs7QUFBQTtBQUFBO0FBRXJCSSxnQkFGcUIsb0JBRXJCQSxJQUZxQjtBQUFBLDZDQUl0QkEsSUFKc0I7O0FBQUE7QUFBQTtBQUFBO0FBTTdCQyxtQkFBTyxDQUFDQyxLQUFSOztBQU42QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFmUCxlQUFlO0FBQUE7QUFBQTtBQUFBLEdBQXJCO0FBVUEsSUFBTVEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQ2xDLFNBQU9DLHVE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LENBQWVDLEVBQWY7QUFOeUIsR0FBcEIsQ0FBTCxDQVFMZixJQVJLLENBUUEsVUFBQ0MsUUFBRCxFQUFjO0FBQ25CO0FBQ0EsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDQSxHQVhLLFdBWUMsVUFBQ0MsR0FBRDtBQUFBLFdBQVNSLE9BQU8sQ0FBQ1MsR0FBUixDQUFZRCxHQUFaLENBQVQ7QUFBQSxHQVpELENBQVA7QUFhQSxDQWRNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dpdGUvW3NsdWddLjA5ODk4NTQ1MGNmOTk2NWE1ZGE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7XHJcblx0UVJfTElTVF9SRVFVRVNULFxyXG5cdFFSX0xJU1RfU1VDQ0VTUyxcclxuXHRRUl9MSVNUX0ZBSUwsXHJcblx0Ly8gUVJfREVUQUlMU19SRVFVRVNULFxyXG5cdC8vIFFSX0RFVEFJTFNfU1VDQ0VTUyxcclxuXHQvLyBRUl9ERVRBSUxTX0ZBSUwsXHJcblx0UVJfREVMRVRFX1JFUVVFU1QsXHJcblx0UVJfREVMRVRFX1NVQ0NFU1MsXHJcblx0UVJfREVMRVRFX0ZBSUwsXHJcblx0UVJfQ1JFQVRFX1JFUVVFU1QsXHJcblx0UVJfQ1JFQVRFX1NVQ0NFU1MsXHJcblx0UVJfQ1JFQVRFX0ZBSUwsXHJcblx0UVJfVVBEQVRFX1JFUVVFU1QsXHJcblx0UVJfVVBEQVRFX1NVQ0NFU1MsXHJcblx0UVJfVVBEQVRFX0ZBSUwsXHJcbn0gZnJvbSAnLi4vY29uc3RhbnRzL2dpdGVDb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RHaXRlRGV0YWlscyA9IGFzeW5jIChzbHVnKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSX0vZ2l0ZS8ke3NsdWd9YCk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdHJldHVybiBkYXRhO1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdGVEZXNHaXRlcyA9ICgpID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9naXRlc2AsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0ZURlc0ltYWdlcyA9ICh0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3Bob3Rvc2AsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNhdmVJbWFnZURhdGEgPSAocGhvdG9zLCBub20sIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vdXBsb2FkLWltYWdlcy8ke25vbX1gLCB7XHJcblx0XHRtZXRob2Q6ICdQVVQnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShxciksXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHQvLyBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RHaXRlc05vbXMgPSAoKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vZ2l0ZXMvbm9tc2AsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuXHJcblx0Ly8gdHJ5IHtcclxuXHQvLyBcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSX0vZ2l0ZWApO1xyXG5cdC8vIFx0cmV0dXJuIGRhdGE7XHJcblx0Ly8gfSBjYXRjaCAoZXJyb3IpIHtcclxuXHQvLyBcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdC8vIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVHaXRlID0gKGdpdGUsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vZ2l0ZWAsIHtcclxuXHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBY2NlcHQ6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdFx0Ym9keTogZ2l0ZSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdC8vIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlR2l0ZSA9IChzbHVnLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L2dpdGUvJHtzbHVnfWAsIHtcclxuXHRcdG1ldGhvZDogJ0RFTEVURScsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHQvLyBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUdpdGUgPSAoZ2l0ZSwgc2x1ZywgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9naXRlLyR7c2x1Z31gLCB7XHJcblx0XHRtZXRob2Q6ICdQVVQnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0XHRib2R5OiBnaXRlLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0Ly8gaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVRUiA9IChxciwgdG9rZW4pID0+IHtcclxuXHRjb25zb2xlLmxvZygnZGFuIGFjdGlvbicsIHFyKTtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9xcmAsIHtcclxuXHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkocXIpLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0Ly8gaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBjcmVhdGVRUiA9ICh0b2tlbikgPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG4vLyBcdHRyeSB7XHJcbi8vIFx0XHRkaXNwYXRjaCh7XHJcbi8vIFx0XHRcdHR5cGU6IFFSX0NSRUFURV9SRVFVRVNULFxyXG4vLyBcdFx0fSk7XHJcblxyXG4vLyBcdFx0Y29uc3Qge1xyXG4vLyBcdFx0XHR1c2VyVG9rZW46IHsgdXNlckluZm8gfSxcclxuLy8gXHRcdH0gPSBnZXRTdGF0ZSgpO1xyXG5cclxuLy8gXHRcdGNvbnN0IGNvbmZpZyA9IHtcclxuLy8gXHRcdFx0aGVhZGVyczoge1xyXG4vLyBcdFx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt1c2VySW5mby50b2tlbn1gLFxyXG4vLyBcdFx0XHR9LFxyXG4vLyBcdFx0fTtcclxuXHJcbi8vIFx0XHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7QVBJfS9xcmAsIHt9LCBjb25maWcpO1xyXG5cclxuLy8gXHRcdGRpc3BhdGNoKHtcclxuLy8gXHRcdFx0dHlwZTogUVJfQ1JFQVRFX1NVQ0NFU1MsXHJcbi8vIFx0XHRcdHBheWxvYWQ6IGRhdGEsXHJcbi8vIFx0XHR9KTtcclxuLy8gXHR9IGNhdGNoIChlKSB7XHJcbi8vIFx0XHRkaXNwYXRjaCh7XHJcbi8vIFx0XHRcdHR5cGU6IFFSX0NSRUFURV9GQUlMLFxyXG4vLyBcdFx0XHRwYXlsb2FkOlxyXG4vLyBcdFx0XHRcdGUucmVzcG9uc2UgJiYgZS5yZXNwb25zZS5kYXRhLm1lc3NhZ2VcclxuLy8gXHRcdFx0XHRcdD8gZS5yZXNwb25zZS5kYXRhLm1lc3NhZ2VcclxuLy8gXHRcdFx0XHRcdDogZS5tZXNzYWdlLFxyXG4vLyBcdFx0fSk7XHJcbi8vIFx0fVxyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RlT25lUVIgPSAoaWQsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vcXIvJHtpZH1gLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBsaXN0ZURlc1FSID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbi8vIFx0dHJ5IHtcclxuLy8gXHRcdGRpc3BhdGNoKHsgdHlwZTogUVJfTElTVF9SRVFVRVNUIH0pO1xyXG5cclxuLy8gXHRcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSX0vcXJgKTtcclxuXHJcbi8vIFx0XHRkaXNwYXRjaCh7XHJcbi8vIFx0XHRcdHR5cGU6IFFSX0xJU1RfU1VDQ0VTUyxcclxuLy8gXHRcdFx0cGF5bG9hZDogZGF0YSxcclxuLy8gXHRcdH0pO1xyXG4vLyBcdH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vIFx0XHRkaXNwYXRjaCh7XHJcbi8vIFx0XHRcdHR5cGU6IFFSX0xJU1RfRkFJTCxcclxuLy8gXHRcdFx0cGF5bG9hZDpcclxuLy8gXHRcdFx0XHRlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2VcclxuLy8gXHRcdFx0XHRcdD8gZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlXHJcbi8vIFx0XHRcdFx0XHQ6IGVycm9yLm1lc3NhZ2UsXHJcbi8vIFx0XHR9KTtcclxuLy8gXHR9XHJcbi8vIH07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdGVEZXNRUiA9ICgpID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9xcmAsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVRUiA9IChpZCwgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9xci8ke2lkfWAsIHtcclxuXHRcdG1ldGhvZDogJ0RFTEVURScsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVRUiA9IChxciwgaWQsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vcXIvJHtpZH1gLCB7XHJcblx0XHRtZXRob2Q6ICdQVVQnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShxciksXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHQvLyBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9